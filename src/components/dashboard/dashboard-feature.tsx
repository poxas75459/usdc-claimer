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
    "4jjzgdWKZkQwsL7LK5f1NtKGYw73Y6WArRJHErkjsZPsG8LP2sJhaW1LmjbykTqR31vpE6qoK7jGa18jN3dyGvTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CM2fxLBWifnngwKHbw2uTK1FUnchAR52caN7yY5ek19jbneYnN8j8ZwyCoUTGWgb4J8kC5MMUA5CXVECyUkXew3",
  "key1": "3i69zyMEbi8WEF18vDmv5w46PJWb7FRq8oGecbZcCxQqVB4T8xUbLcuwH63oTW3p2VosqxDzeziBUV8r1fGZr9E1",
  "key2": "67X8i2r2sUAEZ92eqAt6pAgWNYW5332cShTnkJq7wFjdSgenpRB3pzKMh6qQCxK3KaRA5UMfybkuVteQfnsgMDkz",
  "key3": "5SR85FToQ6cvo8FbXhhe941rP9gatn7eJUrmbs33miDSEExXHXtTx441vhecG49VVCsy8TFnAFk8J1JCAnQe2yMj",
  "key4": "2QtYdKSvZMwHBqNFYfWce1jwgSQaCjTqWM1DE6CUYMU7V9h6CDfYn3m38B5EzhZnbQcNk2ABhmy6e863F7CabuVE",
  "key5": "3q8Jw3mv3Xqc7LsKDCVGj2yFuuCxj5DbpDeXEXn5RTWYK8z4A4yiHuQHVsjSEPo7UKdktdKX6Hot7aYzstJ4az9F",
  "key6": "yGMC8JvUv7MzfgjTq9t1aBKD2rDjrNYc9xJgHhGp7Rfv6GLh7oiAe4T5Wntk4ueTBPWBWcDzBRiyYjgrd8odmy2",
  "key7": "4n7WoNQrisqMvmLMntFzLEjN56h6UJY1XMEh5GhL33SveJFx5EBksVrE6Ck9DZygAG7toRprpeDcNscX26NK9RGQ",
  "key8": "4D8C8SXM8uEpzUgUdEWVb39DKsbi3VRzeBrbiLDPLfC8qVuKnMbS5ZdR6zrBGi5kpsKUUmm6zzFy6hb1FLJxfkBt",
  "key9": "2mvzyEkzEQPB7t1vVowLh9TsaDSHCbcXKcxuDakxCePihv5m9HR57SyEsv2xu8gKa5Us6J1Jcz3bemhsyFzSn4iV",
  "key10": "5vRnvGiQitefH77RQfLWdRMPu6P6xidjHpnxTHxevk6kBNx1zuxbPdiB3tTTUtiRCLsQCPPwEbfcraHcia7HL9nH",
  "key11": "785GcjKygGeHHuyWoABT3ZkJp7VDxvxtEHDFfWaxqDS7xX5LTM23b4vGNKRugMnumPVPq2kiN2V2GJHhTqRZFbX",
  "key12": "2bdTyaHYN7XJ3ryEhbouYQAaZv3vRfi82AHG5k91EyfMhDUKfPBzhUsKsKUyiz7YyxwuFu7pae2NkBioCEFaEKYS",
  "key13": "36qaqzumvnUrUV7AnQyLfFqS4oBDYVgdYAeZwDJByssgunjpxT83DvvDWz6Py19myANBqkLbUSbhDTac86eGNQmf",
  "key14": "2SnoFVWiWDohigtz9tPaH52gbmHKyaC5RsGf5sbKSaYjgvKLubENhG3uVuZjmHUMzsAwoZKwj19dxfb6eEU2xNVX",
  "key15": "3FUx4WUm7FZGBfLVMKxKUAQA8ko7bVFKjPdnnu56SPcCwcV62KL6WPn6TCu63AtGUTnQYPDdHAVXsKHHJb7odwNZ",
  "key16": "3aAGrZzp16FLE6MbeMgj3BuEWs3XUVrBzWSazjGVtvJgp1yXWMyo64WpSRy6SQhmRhwYB36Sxa2kUaZVZs7k7FBm",
  "key17": "59igMxNzn696kkFNkDwH6cxN9hrx91GNYV3xqdTzcz3g6QvPSA9iMsrXzfkQUp2nWMDVjVpSMErtVSxLDjxTVatk",
  "key18": "5m31tzZ4qVc1WTfB9QTyvCCYRz93njMaTDXrF6D4BH5YoeDykrZf7MfkxLZ4hqrwEgMpTwEGMsQG7pZPV6vVyhPF",
  "key19": "AJWygu8vgtAn4GExrMbVJQsCs5KNLpCKKJo276ZEsiLxDZJV48CunZotokNKcqSHMzcUickVTqCsDsQ83hTr3aZ",
  "key20": "21BbmgiwmmusDTwEXEhsLLHXkuPxw4T57M1r3J2gM2zciPaeAtV8d6f1G8UZadHzNiw1iH6iJLfayGaaQtjWAbDg",
  "key21": "4Nt9XmrjifNXtMwGhxSVQf3HS4kARAJeD8igGygzE8fJcrKMXK4DQb3vRgQu4JNsbNrFewvSM2zqejHD4ta8mSCW",
  "key22": "GmMkUGFT5CDvwvL4HQH9nNm3LtJLipz2X958rseKdFWLECC9rt3i3HVSRxHGtYHJeokBWXbMVuWHttRexcfEFQz",
  "key23": "65Jamhw1KRZKcVE7MZv3HKyNWQhyo7vsg7UMQrcHLeG2xnTpZXDwGqwEnX61zwJGC6UxvjX5U8yTkb7ANm8UgTi6",
  "key24": "2rEfrhcV1JmuWCC8m6Qi8enSPQRpMAP74SSekg5gfAx5mKP5n1PAqrbBFsuLuQ4yuXzHwvS73dKLfKwYx19BFyNU",
  "key25": "5fiCwgEzagtvxADCAu98yjWmc5BDkJKD6VWrjyFoF31VtZQEitDSZy71JGxbTE99iA57xNSkcZhbwc1Rt8nQ3Cgz",
  "key26": "4UoDDZd2WSAewCQPQiUT76zoJdNwMVhDJ7oBQruPWezbmxTdLheMfecQgfN7uPbyj9H743Wxncy55oAinF9A21MW",
  "key27": "N3TFAuyq67izJ9jz3Gt5deuWxPopQkqc3qmZhXvMQ5RkKCefDSJLCoQ7QTr5GdN25gKQfvWN5BE41igUXVPCvBD",
  "key28": "29BoNWCcBGQCrpDaUFPMUK4PRq4BSafNgs4zhPYLV2jeL571dKJQUDixh5x3mgu971kptXm7JLQiPLrYVY9r18xb",
  "key29": "2taRmjzLMZtxr8Vy5KqQazdkQUt2673XReM43Nyy7PEFHRtthYMAP6P2Zs4zjgqDn5xDC2FshpK6Fw923uSAUdqZ",
  "key30": "3QC1G1JxTXbXZomTVWbMZRNZHau89pG13bedp9weFQJ2yKGuuvERNH2v7owTtTt5YZJArgdLhVDawxPN9rSs7VBq",
  "key31": "4P2SHzAFSvxovuhXjSTjPqbjCFrmKSm7FFRsBHx5RhxrJLNKtodSe234Hncv4dW9VAWo7t1FNXXxpu3aDTSTGKyX",
  "key32": "VKq6asuDRdTncaXkjh1N3V8xVKUWkFZ5QxwYNMe7M7MRV8qFZAyugyosM4rN6KwdVtGEt1xwKU8n3wUk7d5uML4",
  "key33": "4nF9zwMXNAVhpixJ8o476un4yd7DENV1GmqLvQgbdZah9GovrVH8ucfkAyqxvzGUZSapePJtHKUZrLG3oqHfA9x8",
  "key34": "gUo8MQeRWgjKPxrqe4ZMvJS5eJ5qyT1YzA53Q3saFMA7qZbiXnYAZ3rhftV1eERmSPNUmMXbVUL5EPu4MreKXMJ",
  "key35": "4uJuYGCTgvpTTmXdv2aHrDV6ycMdhoB734aKNWRE5LC5VZFNbGcY9maErPuhf9ffrokpCy97aJzRoCmPHs5o1uYv",
  "key36": "4JX5WXrhdDL8JPRqQx2spzXgV4domNyQXsDk1LjaVrMwFSeQTq6GjuML7xsErwjRC9ySufyH4SbqyHtceU74WDM4",
  "key37": "58YXnL7pmJ5apV7RLUhVEpTAFazan9fsMSbMuQqa8ufz6fXv8nPvamiLkE3CNfbD7sx21CDkJhdvAPefT3Y6afxT",
  "key38": "3PsDcYD5fzKVB3x6q8zLDYxngGgB4GifVNhtHuAA9goykpNqcGeHS64Qxv3CRqMpFQe8aEMxFGQ2dFiGz5TTGL6a",
  "key39": "5cbcJQDNVrjLg47wjbShLZGWUVk9qTCURVUeUaCsjTM81SMrhdXi11V1uZevmLksmu2vmcWLPio42YUgxVJZam89",
  "key40": "5RJAES6j6k8TWjRNnaAUFp26JaSJp7JNc69fsohXWh6o9iN6evPPE414Bzrv6yBK1YgNrUsLQHpq1bbXZDv7m6vo"
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
