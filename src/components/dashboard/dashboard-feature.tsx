/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3GSap18GCQc627bK26DrrzWK3Fs3Gboc9UwujaxEzPkwrLX3nCNgswgQ87611CQctse5GAVckBQvbNy1SaZSRRYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U95Aa46ZnK5C21d3SXbH6yNd9vRGgUH1KsNbb8MQe86Vdkp535Fq8FkBqVoiYoXtVcV8UCmTJdZwRmCrcMPKfSk",
  "key1": "5REa2MUKgazYpDh6QxxU33Bs6U1DSPN9JghPFPYcAwzo6iSW77r2kKWUeRC5Qhh247uGtzfXEb54TtizEHHVLYjy",
  "key2": "5aoQM9RFyaotMcG3BRYhnJHH4FV9Xp1cMtoseUaVzQw8TZkwDZqVg2zP97nK81KSGkmN4bVRi7fYZo3RAV4gnUdu",
  "key3": "64UTb6w4ww8GXiJu2Ued4wzSRNYP1zXSTcutYpdzUNUct1A44nXshJzQCz2SGHnjHPQem3snGHLQZ7yXMtNmeEP5",
  "key4": "3QEBkvdzn7gFhHdRBdPFsmpv4DHhNjSJJHLtkqZHTsYNSxDiieVGsomS8UYBpb4UHFWpa1SNMjy3RVVkVM8JYprx",
  "key5": "Vaygpwqbf3Eay4LA5ctaZxJ9Hrpbr2E1J9BMW9siDGmHe3vcAugZbCNs1dU3yDTF58WDbAoBZoGzfJuNgTRdR6N",
  "key6": "2LW3foybQt1GX3Hy3Lr7arwgtoYeGhMY6PEwxuQVdzcTyVWdQ2gQs4jNYCDMWGaGJ1CbKX3gGaNBdt45nX11QEzr",
  "key7": "3HtX3vyTS1qtRP3LHsMYQYVrLM3yszQN2cEZ9QgU6Ne5BQNNUD4j9sRSb3qYfvQ8mAVzCiLgoU15i487TH2EW2Dy",
  "key8": "4ZLjsyvuxwAp3eCBeqPfScN9aueSg9SX3HbzCwhZBpRfpBYzm6o2ebPyPR6JuxE57E3WkV3wjD2Hdk7LCXD8LpJG",
  "key9": "yv8ZRhkaVgK4ZR8DPeW3XDfBA8E41bjNAFtfqe7Z8Fr9wjH52FqqqzBFMyNpgw7K6SrKESprx6cY4CNhNh6SMHS",
  "key10": "2LNWCzLUQT4aodwSzqKe1zGSYPtdkFJmMxxLtz7sWqFj1eAF4F52vujgowDCRAeKWtoUwXP43eFCZujNQnphd9VW",
  "key11": "5V5tCysVdmMgaAioZfipPHp83wnP7oQRkyQtSFJR7s6WqBUYNNxpYS586n6awDv6hMiDQVfdFcbGS7u3mn7a6Ugz",
  "key12": "3Nwgri3C1ZcrxqishzyyWU74PDwhFhk3fp88XgoC5Zok8tJgs1rpFNL5M19KQ6tQZ6oN6wwCWEzRE7RowMtnrXiF",
  "key13": "5XiYsDvM6TDAnzZXDxVxL4emEKkwnEJqUkHi7f2e1E9yGAWN6ComYy9RSfQQuchA2jPofdsH7KZe5vUj7A7RSjk",
  "key14": "4Ethb2dCBqXiXmuY6q3eR2xNpn6ShEqcV7QZUWY3fEiT4u5jzEaoww39RLq6WSqbeGNbcQhfRdGPrfKM2HBBSyDU",
  "key15": "4qjQ6bBSUA3nDvTT9tadZKCErHdn1qyVB8DKigQWXsruZqWQLtC6zvKphNbbVu7SUfsjrVmCw9n487VfsKYsGd1D",
  "key16": "43cdZoJoZ4HdtB3ivED9bXRXE7UjJDS1UMc5Ckf8XkUB73779v7s2tVoyXAUpD1teZyghUDcZfKp6SN2R24kajzc",
  "key17": "uzNxxD6LRSMjbsR92S6W4hkskkNSC2xdwEHCtdcztHg7yKDcXiEt24hjqiXLoHUZjoo7Eun6cLK2BBjmKLXtPrK",
  "key18": "2ZUcYXsdCSWFUkTzBRxy9hKnhdjiVmfonvMhLnbPKHgLJj6c6Szpv7E9UxgirvwskgkMvatC2r2mikd1VKCwi57d",
  "key19": "2TSsV3fDm5hrjRJdM5XSamGmQFXiQP55rE2KmZvzLwTNVK63ghx1R5mGG7yYqAhiWjErDyAKfLLRPb6TKqF9tjPJ",
  "key20": "5VXcjX1Kcu2utf9AkQvXcWtt1RjHiK5D7SgPR5wkYkcM4x1PNBYYPjnbf889ipwkMdctvqnhyCnTHkAsHumC1Zcz",
  "key21": "3oZpGzEGNJY5cxMfD8FqXnYFiinZuEf5U6pYapa75saupEB322Q7Pwm2D8ALkiHv2w4ZQvWAhXLtjQe38CLfx37P",
  "key22": "2dYf5deqU4axCyyoC6T59gQdQ3Bngt9HSJjhbMhXViSD1hvnZCdGucy1Tgw5UgqCWLeVHZh7kkXbyRnSnffKfszL",
  "key23": "4dKruomKQbo1sKJG44KbvFvfZTDJJdRg55u2Vu2GssymqPpemyUA8doRcvBi7uC4K1pZhXGktgy96RjieZqNjgPw",
  "key24": "2NCQ14Mwgiseo1Ys2oJDPEAD6FuxXmnjUAqoh3KL9ysx56VsWSz3UFzHzHmFvBGnzMm3UgE3Gt2u1xV8HpCnvR7F",
  "key25": "3shLn2QTsyZ8RqWmHHFUPP4b7v6td3QnSDUmjGjRMp9DmEKcjTToeyyj7XRduS7XAysE4PjCB6x9P7YaAgMCrPB3",
  "key26": "61b2TQfScRMH8btybYkTAPXabRVp69BEJeeFMDLpLUXVJrNrYRbhb2YJM6KM3V7NQ7HuoCwSpdqTZHCreFGkaVk8",
  "key27": "4VyGH6Mv6RUUMzxiwgFUL7oTXxXqAbTRNSb4xqXbZh1dBzZ55feUoiVz4G2epNu5GCRUFe7cvJMAxhw7ivXj83HM",
  "key28": "3QSNRqhmg51L9qqeSZt7gCanoxnHthfvEFTTZcdstSAWjdMtLAugcncJ7Vk2EbevSWJaJ6uEtccPnNrjCXdif5Wj",
  "key29": "2HNoCdSuuFovr1xZd5gcWuXDLRUdxDmL4rJpf3GKc9pyTEWsumCWveiGMmmXaV8PqxSPAH81XxoCyRJ7Lr4US97c"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
