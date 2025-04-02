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
    "aekwjUrFk13DPk5wXJxgpjGudVvnCaYpeXWhj8uzQYb4YitikM1h7t1rSNn4N7VkeTdMhXFpuVcYReqFuGBZc4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RPYyXrGhxm9Yy8YVABHbEb2CJ4cdda9nBno9Qpwdu2YstFo2HGXPDbyjmL4gog1Xkvn6gFii1z3DcFX2yAVhvwc",
  "key1": "4ZyLR17uFteV3MTnW4bkBi6pX6s8KFcrrBoorccdopGaBAXAEafbbr7GjwyLJaiQFCKid4tS6mXf2ay71j4ZVJcf",
  "key2": "4WCW8pET9vjTJW5waQMW43XB1RWX47ioxY38QzqKTGG5E2NnnAAV5qsFn5x8pVdN5aea8EuJR8oJkBLHwpYt4NEc",
  "key3": "2uagUBcWR6WzEwoMovtqwBxHkF9bH4xWpSzpEivjB82crD5CLdwfp4iJMiSNBhxvtypdtNdb9fYkSri7JLdyDQzM",
  "key4": "3pXChkyJCFPVpcU7xsZG9nMzrAgyt8qSEnmZ5j5GZco9Kk8TUJbw7HN8u9EAVZGSGqNWTKfmRSx6H2iHB1qHMfat",
  "key5": "4QtXNj9E3VyQPiPcqRBMSpVk1Tdp9T8Sn5wzNYksTLy9zGV9XxW9B2kHaiP9cUxCwNgGpPW26TKyz6VM41kDXhaV",
  "key6": "MCt3G5HnxNAVqMNsCC6d2vNoZNzG2JAtPXV6JHvDJ9NJawTJyEH2osrEWMTffzb7Vo19hjFdwwHRwDX8on6HQhs",
  "key7": "2gYgRoMhjgEAjU4AsZqF9C9FwVo59wNjjCmSMoXhJFG2m3hbDfXm3C17a6oMyxGXQLU3b63xfCrmKL4TBpYMT4MY",
  "key8": "4EeEnGeZuCT3QZRVzc6JEoCKAgJUzpVtsf8XyM2HCQaxQ2FS6jfm18jyVxcrMEXN3ny3bEL6obmpNB53en7MhRG2",
  "key9": "3qfX7wCk2TKanTjx9tVUiepQnhZGpkJ8M7fYnjxCqDDRovzNSt6T5F1PP5teS8WXRRTWPmoX41TWhwG9oaHYzirW",
  "key10": "2pzQkNUqa4ovSB4aXPEU3n6iXvMt7rAKmcaos8fA1NZdixCeU5uRxoG4p7TbYbFzwAM6qpZiC9scCh1tHgEKtavM",
  "key11": "gpfCbXQHHP6kzon8FnxUndC6iRjZKfCJknhnt35q7GiSA8m9JRcap2wP1KfmQQj3uyYvhmTAQpxBpjr84fQaXSd",
  "key12": "4fbCzYZYnFSBcHUno2Sd58nTpU8cNjt9EXCJoFKWCkwBrr7LmnP3f9zxuZVi7z59iLkTHg1AZnW3EwevFzMobEYz",
  "key13": "3HkofMzu33avkZ7UWMRHwpqzH2dTCnh4taQe7gwLxxh9zCU7yg39Gy7fgeRhm4v4n2DhyA1wMBnE7NMExRzvZBBD",
  "key14": "3xv1K9KSa6FLwanEkVySawtWyDCHnkwevUfeNjTr7PGBnx3Aev8Ms6rCF89dPK1TjkqnGwzGYwb1EHiCLSnK99xr",
  "key15": "5BjsNhTbJfoq5Q6avNSxQjMsG1gXJHPbioLKBwnHV2dqY2nsoRcdrYxbs2DAeQA4nRUpCrPPUphiPccUDakeiSo1",
  "key16": "uhEUoSdLpgVipqxsoTnKC5raRMnA9corgzhWe9vtVeM79md7RxauxyKgLdZj4ygk8mqvkgRHm1cRJN6CM1HJVUk",
  "key17": "5dYM6LdRzop1bYjuvhLNA8Zgys87rNKRxvvuKKoJKh7GNafYN5LsF9zcawhnM4TidrkUS2d33y8dW8LktNrDauHu",
  "key18": "21LsorDGtFowwFrDYXKJ8cYnR1kh7zgwyM6GotWBxo9EGH72xUyMBK1AL6uxNVVQVXkib3pyouCehY6P68WEbDyN",
  "key19": "3Cc8WsGqmHYVeCKdHvZWAsyTY1nmiQj4tM9EywRu31ZvbuPCwNCSzyGxB36nhKVMCW1yNKfXTXv9JANBSUFRQwJK",
  "key20": "2FxwrVByYScc8yafcZKhAEtrEqhZC4ihD5jcKHgaQCQDtNojCxkKpSjKzViiKPG2EHsCUrmpHjp2UVNbY4cRTzFF",
  "key21": "222WqruTr2mttCNFwMwtwJAjegZYoNkaPsnt1cGcXJ4xWWUNNvkEFAkDHLHmKeSYp2R7SwBsuACz3F8A79YemmG2",
  "key22": "5YRFuoLhDMyrSo73MqnQPJz4AXNnBQhJepqUz1KzbHjMJr9dGF4bh45Po33pScHMr19appCRiPKEMmXuwwKetowV",
  "key23": "3NhAC4z1Zmj2DrtR72dmXEFj84d9DDWFg2MadheUB3Pg7nJmx5XGbuJCS9LVt9V45sw25Ho5HfxaVPFY9w64nUdy",
  "key24": "EYvgqNZvCLzYikEHsjz6Vg9Hm3zFnvsPLQZiLvxXp3KCWJQzkHnPGLHA3awAYaYEmV8WsYFZLv4M3G22ohX9Fx7",
  "key25": "RFPfanwMSiNmbK6rq5t9us7S5mDJV5EcHvbNt7q9NtLy3RH5xaS7rALxjaL7u7TSJaAAawbj2QxHNNsS1d7G2Br",
  "key26": "3iMECvS2ZpNdBJFxRgwvq2LXt8PrMbYUKqqHWwj1ofhBjy1xF21YJCkJ4SsPW2rFLuSug1PxQ99kpHP4zuQrL74m",
  "key27": "3bNbZwGPRa1QMFXxkFKKwB2qASze8yT5kBjdG1gRMqBzohjhJ9HUYxtAWVR17JUKiqV3TDTSRPyiuRQW1MwaUpG",
  "key28": "59tfAWad1ajEX98BN1RWjCU6hKV13A1CjhjXTqz93ECe6Q1KapthyPrM3uANCzh25WpfZSFpHf9zkGgCpmhcLU1z",
  "key29": "2QKwRxFVyxSX16GCAipKdSGD1qeUcmzNfyNuPYCLe3DVuxhynN8wEBi7MeTuGYJpeqh1ZnSNboxsF5bsivWCnbtN",
  "key30": "4ioV87B9axxcfiyMPBdRSQyDg94KhVbpyH9WMtXFtr2qvx4Ace4VJXxC26MHF1qMsDXzrJsMu9qNrjMRoANSBvoU",
  "key31": "5qGvLzMUcvauvgyMyzhvHcYG38h4FmaahHvkXKLySyjigmmRTH2MXootpbJKLN5EXUK1vyC83zCpHawnzzCv25PM",
  "key32": "5vKzFwuCp7K44nLmSRUeMKtD11a8T3GE4UCiEX8215eeBZxcv3q4dE69yU6mP5m7GSKkrJaVDjXeokfdRWcMZZYu",
  "key33": "4V5VxdiD6i1NkSSdMYrhnGbBBKJvbeDWRzJcPQNoYsrmfwiPupAZarNQeS76exZ8sudNnaDZW7iznqwB529MqduD"
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
