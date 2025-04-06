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
    "5tTQebH4H9A3dLqixvteCE48n5LAWGHgi5RZ8p5mh29vYdMo37uk5Bm2wFT2fW47oH9pnhijro6PCkqdEDtkZdGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hgGFRNXArPQhTXMRrRbW5DKrrXnmxqHSr1m2i6UZi8U6vm8xePh4HJEQnYZXoKv8APn43ZrbyExmana592V3ZHr",
  "key1": "3KBCcR9Zj3tWVtR2JnekBxK5sJN7yRyixkkhw1ZiAB89ebtgQ4FfJDsi9NYpv93q54hahYpey7nfERZ5No3rQYqx",
  "key2": "3QNLFGp6yVkG2RR4ZJn9RCL2PJvADm7deHHRkJLkoMQfkgNLngxR8KjSUx9XzHRMYqsL2UU6JKHTckgcnKPiDkKY",
  "key3": "5Fyyyk9oc7MfnKMka4oXWkcjbnexXtyvr9hzhcnM17ZhbJyN2Uaz6WANoXiDrJ3A6ArLjAv19ekG62kaZwjwuGVM",
  "key4": "24nf6rvr3M9S7Uv8ymp21pXfZrEixuHiSNKYeoMT7NYzSKFygLDPQs2uSCb2veEmRCNYoDPe3jGTaTMY9fg7tkJM",
  "key5": "3ALZAbwTVGxMxVXTukYSjwBzo7a7UgCj1Dhvg8hYa9YaTPhPxBV3enpyNkQvw6dMjASuM5DkBygqckycTPEY7uJ9",
  "key6": "J3FsEsJw1oyfriEfKJsvH8usoBPPR35mCLA4Ye8TQpf1LNGBiGB5z1FRLHAoQFcXKCiLaCPhtfGrtaF8TkFtqqK",
  "key7": "2cRYePxAskPw7Gn4nD7RRd45PULwN9q8sFULbWf9EmpbHa6zm5yASg2wMaLZUTCcwZrrpe2wTozSL6ppwde6X9Gw",
  "key8": "2oraUpu92JvJgBxvkFVQqjGGPHsdEPWUgfK3egrC7oHokoU9akw38FE4EeDB3L5mcUdob1pnpGd3Hr8k5KCkqQVn",
  "key9": "K9fmjHX132AKzurqu1hFTyrQxzJFDJK1AkrdqCDSnQ7rar4f5u6ehLANMH6aLf448Ns5tm9rKnnEwkHDsC8R5AH",
  "key10": "35uSWDpgy1fy4F37puhLvNTNNWJ97fZZhJ2mZgZppC1Qn95C5UG3BErttBAkNeDthMDhdSDbP91jsj7qjn4G4o1o",
  "key11": "5HMkMGYAwXFDprmVND31Pue3dYeZ3xdKsV33Yihf9Smt9nofU2pqLmRxe4TTipHKkb2umg9WfmVkons3rwehx8Rq",
  "key12": "4GSZFoVn2uARkr58afXNrggFHMzThsZjbcd76h98eFrw9FFYmMNs539Cj4dSzyDPz3xwuZjVKY6HZ3hJfCkfpVMK",
  "key13": "qvRvffrv9SEi4P556ZV5vsXL7YpZuiuJNoMSqb7DZTHo9A2JX5L4Tvtvewy7R8MFVkM93kBGvHe7g18Ssf1w2PU",
  "key14": "61daxxXTVmUy8rHBsrLBhbNf6C4Y2S78vKQqfGdV1gtCJ2eHaigxXmkwCNweVxTJe64RG6TL3kd5NnZmhwZiRfSB",
  "key15": "wLyZgAPXoPje2b3bGF53HZ3w5vQZitmy46NMQYbkzRH96qpUCqZdZLH5bGB5pTUPF1BTTowmsw8WAmxF79QJimt",
  "key16": "3s47R629op5StuFmw7h9uZF675EsfzUsoQi1puXgdnvXbym6tED4sFGe81wXCWptHTm8iCfNFZxTZefemnSxVpT5",
  "key17": "QhecyP9Vv46VceJVTh2pogkWPLmuYdQNxVBADHHiiLmGBYBrF6JScQjj32Qj7gBDhRfcqkD8NPmxM7zJqoHMVGq",
  "key18": "2npQ7T9nhY591skqqQecjvrNit3e65QNPboZ7Y2zyxhqqm7BT86hHyMv8cF9ySBWKS4YpV2k3PvCYdQfVawuwNu",
  "key19": "3fCKaDKd18fZYUEszs1WzTaJh2REJ2snXaB6hzevKQqh6pcdvhHL8ndSS6pcacoKAvG4AQETPigo6ZXeY2S4nu2g",
  "key20": "5LGNm6LQa9oHsNbbY3DZF7zXNpXBcYdjxMYfUztau1H2Unh7jvYCzUaftYg9YxwTjxunPTecyxMzFsAaFTnnfo59",
  "key21": "4UNxKA1Wq6CR1gF4mXNyhBQQXAjV8tfiXgtxsqHHJTmjjVCpeZy73jsMJiWFHxZXNCT4DT6GEHtAoj3YM1AjeBJz",
  "key22": "2HY44Rp9txGJBK3wYwuffx3rUogDSCpeN4ypTpDnxJ2dvLZNGZ9Ekp8LLPDkpzXw2tqmRVEApELX5bykT2QphNhm",
  "key23": "3MzS6Mio18ayAM3ziL4HBTxPa85MB3DjujdGJ7WKJWdwiPEPQoVA1dmiyiNix5xpjGvEF5PVtPKuPTNuMJrX6Zit",
  "key24": "66p4uhYpNGgCKQWbLkYuhTPKPuyhX77mu61zyicvSaQZwb4Yw6zyTwAdoeLuC7GRCUrPzfdtmgHXwu4ew4WdA5s",
  "key25": "AGry7vDP1Jpi9kPNogET1DY6KbDk37DFZpAiYU3yVrvk1LZm5MjVeS97ivFTUGytGTgyiDJanJyXp6736k4QkyJ",
  "key26": "uNX1tCB3Q14Ec8NbbXcQArmjHPJdSTKvQq2n1PVvJsswsLprb4GMLo47hruB5Jce8SMRsQ54C2FTmrdeNYqJgw1",
  "key27": "32srTorSWnXyyuzZtvNnMSR3vaR5TKS37wuMwJ76gVbg5nzGfivXNRMENPpz4uGFTv3r4NRKbF3BpoKuxZXHsqKV",
  "key28": "5Pdm7rwo3oNwK8zfoSttdAXUgEYYH1YncbQAvkeUEapaJudfqw1zZWtqCn9wnba4C5mjSBBegqsBB12CZoAqdztA",
  "key29": "2aGumJJbJ9j4hQcngWPSUjycT8DgXJzkEJtmA6TFAivVswNYrdwBpVWMz21kJuaFoL5bWaePj7dom6ezCVfjFoqB",
  "key30": "5gGh74BiMDTDv4iPvJSH4hTYd3H6VSJLukfhkFPNZa8ouzWnQS3p8bFHrEFoj3XjR38T6jkj54amzR7g9USEEUZH",
  "key31": "46mLKBmruiGgFaWazjrYgZUxRtpJ4MvYXm2yTsfQMwwfv5JHcUq85MdPfUHG2ZxiosLffHkAj5E4VRUaEnNCtPRq"
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
