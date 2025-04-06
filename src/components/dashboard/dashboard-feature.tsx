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
    "2ykbuTGRHn1NGUuBUNpYsmU62oLTwpq31TQtrgFmUW6QNg7tTWDTioVSJYLcPB6xpVVf7wSaP8GEu9s4GwNGpsMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jXHQKdoCxAfZGRt8RBhzAnfa89kmPdY4x51uyVdtpyKC3qrBnWsxrCGu7WBSiMAFc4TKfjYdCJAV5jcjukjK2ch",
  "key1": "3J7R3qAhCkZSyjLygSjT8ZFC32SMddjp6rF2RDZkQ7QmVPi4BbNpczpAqpMQVsRzZEjkgTwi1vWtkyKG7VKdL2jT",
  "key2": "r2k4W51nKnGc7rZKhpDSF4o9bDgRZoSJbjAPLeRToocVnwEGvQEg9AC2a1jWxDDdFtxT7efzhonxrWpjo9qc4vF",
  "key3": "6i7rwJdLazpBTbFof8CWuEp4crRgiVc8Yg2k2LRRbkR2oq8HpADV3ECo1wUT3GLXCS7tStcPSNjVUxpKsM7ETof",
  "key4": "1237XFQR2Kb8jYqWTL6FzgNUGF76pK88e5QWSQCaghybs59tyuVygRUVr8QZ5dxJBkM1yKDLzRKrYsGgiJX1DzQk",
  "key5": "5F7azMgpjkvDiSZzDi11Zchz9jbjZDCDWvyUPtJ5De7yRpwjJVLPdYUPPkqJbcwH2bPsBnDXpSuuEGS9PfFUJwvA",
  "key6": "5LoEFQ5rAAmL2RiaZEptEzMTXML5LVPEpLD6abbZDuWZEYaHbNwgZiW7xfAjZMLa3SGGR5uF3m1GiNTjHpa6ttx7",
  "key7": "KdUcZv7fJncqVyPenrzAaZJFMzYC9Hv9dNDiFjxuwQCAvUT3eYUsW6voPn6GYSy3BpTvm1RRuAfLMrjKUnNaHP6",
  "key8": "2zUNFv4Wa2PhdXi4GGbMXziA7gq5EBWpKaEf7uZfUco3KUun2zF6ccgxyWoGHA8qhdvxSZ2Rey7r9WngrCsDuB24",
  "key9": "VkZt5mxY2hcpu5o8113PSuPbUuLYxp6gdiciGPQ4Nnxr4QSX4nJgxi13khPcaQzRi3r4eTUHUiiTVoL89fRFAos",
  "key10": "2LyTviv6ooBpVTc7NfmEChaCJu485FFqx3hkTKuZxrqS4MzDuhYDhHAetaAmVDk7iyW8vkVVSUsByLngnTrQ9CNq",
  "key11": "3sHeV7HBMh2M57XbWibNyburRCfX6gtxNpPbRpstUc5XqssjMt6vRutvykTv1fRTdyQq1SzVh5YSGoTNTxEee2JJ",
  "key12": "5nHDMrDn85SeWbVm2jkyNXx8uCJsmdpoUYabu7YuhHJm98eBKGMxMmDiNYBaFfnPLvyuRcb9g6tygBmsCnJb7PwM",
  "key13": "5k1kZdSPnQhGHyjekT54HQzeiNrHyvFN1v67584QceWXBmsakBUk4AR7cdyQDMJfK3eeSnuiaJvKMhyoxfjnCtYT",
  "key14": "2hsYnaE1k4jVwUvtZA1AABgNxbK7NP8RCFb72A3ek9yUWKGs1PtXwSwUB9jHRpGfZxfaG4wSvd3MeAMcqZ2Xij5i",
  "key15": "5PDLSn6eD1oZSBnfVP23P3MDzsRs1NV8k17LUoyTyRnEkDUFUBxL2owaTzkf4pFvKRip2wdJ89bg1Jx1oWyR1xBa",
  "key16": "5niR2jgTTSq71v4B9Ddi8Vfu1iPYXuSzKRhrthHKMy8dVSGEJUFPhtdCiXHQffyB7LigpEpCBokHaJv3FLMfSTZv",
  "key17": "2xfDP9mMz9Xt32XtGGiTTtYRubdigWdA9MTURuYYe6w5WjMhuPvTj3BjLZJGTFkX3nvBhKUDyqq1ry4NnBDV833C",
  "key18": "2S2F7fktvbaBzNqyjHTXFEtUJDrCwVGDyoGxPfZNYWaH7e8YVJQCg48ud7241sk7tdyJdR3JGv5qQhKGjF7P4m9R",
  "key19": "5NfRdbgAZnd4hqcMJZ7GdcEj8JnGh7LvbqhVnN5SNoEV13zurYp3gtFj9naZo4kKUDP5838VZPtf9FU2BzLiM6aP",
  "key20": "2U8WCpiN4HJhZfXq9pCpnVa7Xp5AJgdCQ5EVznQT15GBDdAXsmShPycZdMamuzAovBXHd2HeUXDkC75TxXpeoPoS",
  "key21": "65mQCe6TkMnnCTEnWQqoo9Ux3w8o53CbxSXvj1PbsxLppyVKTaieVJAEfHrnMcnjC1L3ce6DjNPdgKV23Ai81TN1",
  "key22": "5TBKwNMYBT2RVma98ePYfhKf5PU8GoamtyZC7iHFXp4CahSv1sic6HLdnBkDR6FiaZJDAgz34i93C2gSfQYALZsL",
  "key23": "5LXdK14vdopnj7chmwSnc3vUMU6FmHKYQXyhVoVwUXqZazuNHCoHcfCz8MCkex77w2EiydnTJ8Ai9TNKuutiskWY",
  "key24": "4ak7k6TBC2vxMD3Pzbo31JJTuv2kF7df2gYqSASj4QfUgdUPBGGCpyuhBejBan9tUURaYPZWwk8wJm69i25zwn4K",
  "key25": "3QrXnnHuLSZWLQgcyp2Bkh3whiKMRin8ibNNJGsZCY6CfL6HxF1WLc4XE3wec3sRmbaZP3qDwEWj4RymMrCPcXKR",
  "key26": "2aSMVcRbJZMsNiHWRke7eWAbseumpe9QwtUNUDJbrggRznnWGbZbP2VX9G79fwDhQKg6kY8sdk9EHvG1XUQH7XC5",
  "key27": "44SDT1mEsC6WQRGCE1kuxeiQ1N7qxNWLi7KWKipQ1eeXaQdhJbHQ18kf7VScQpKqS4SLWSM6QQcRone587woeee5",
  "key28": "4Aq7etCggPzJg9nAuJ4rReXajq3ePfb1ZrsiXc4rHSViACYLAbhNWPFmSNXGPPdCwhUc3KKC23tR8GxTW32V5cG3",
  "key29": "4ySppDyYtpYkHQWbM2sGy2DepRqbkwU1ACPFbRA1bM5hjC62Y9GfrurE7DgeoPNCekewJm4GJHcYt9KkA4TXED6k",
  "key30": "2488shJbhTejkStT6Qfp413wNn6Y4KqLgFJzHekB5hMEsMxP44PYS74eurqmgN1cKp3oNuKYkr6K2WatUUZihGrZ",
  "key31": "5giqckC2dhtskSiU7pAv86BJ3UNbSRKCqzS5ZchGuLcgXh2cLqggKoJwwz31gBmUZub2FLPYzWCKyp2ZW95fFe7p",
  "key32": "hLjFi1yG1wKfQ4bGtpavBZoQ2oXZf9RaGJgPfsGWinditApDqiNtXfETMHhv6EEE5t1mauHgbTULQ8NWS4bMQnN"
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
