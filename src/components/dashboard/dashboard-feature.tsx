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
    "48rRMmhQvLpMPFfBh9QZs91hnYvU9ww3MyuX6CJKC4bspVkKLv3kK4XoP7xqFHBiEktxyx66HLEQHz4eHWAQ3NQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UnCZ2qon4PKmw9zikUxn9NrA3RQ4VDahbyYhP9Zft6ySnoF39eNVB6yPRFsZSD97pm1emj6HrxdscXS9DRiyNgA",
  "key1": "2tW9grxeoRMVt5CigKEZ9syexrca9Hf4jjaQ7i9NLpNGzowSLCW6GpntiACKJUM6jCdMNsTtEVnv4A11MbQsE9cS",
  "key2": "3taDFm9e8KrgCxcwNhw7LEDT9U8iwmjpD1WfK8nfnbGrVEB5MnMjR4rANuH8fh5NfgFFobQsm548zi4DDQbb5Zng",
  "key3": "5fmrRn1KXEFWkSmwHFxNipUEcJxSaTUnWmvqMaq1JNY27it3wLnUsa4aegBwgkQUHrctg8AzBbftBXD9QQwS4Jng",
  "key4": "35RHwFoep5ReRUi4JyiBcDjELmnahfugsjfJcmuKxN1uSdHPtgftAjaNkvUsKiyc8CB15EMFykVf7Y42JtUB6TDN",
  "key5": "2KnFoRpUp3tUcvVmeHfCURtSRjLcdjCkpwj6WPMdaYN1pkxYt3uCamVxWtTj4rGzVLEqa8JrD929qfcZXDxYicPs",
  "key6": "5uZNoHwPkNsyxAf1nRSzLvRziLJpxxXUiCNTF21maQXj3woDnjT68zoUGMdPd4UqHPBqa1SvWjVuze5UJJiAHxen",
  "key7": "3U9nMPL4C4zL4U7WgjWKcaPaWn8hNA5XcVG91w5SuiXgLkXUEbhiTdz6m4sJS5YwJsw8CmE9wCjzj6RyTzYs1m2R",
  "key8": "2CFCj6gzkYixFUX3jAFzciWGpnLurgPgDBqn6gkAqkgpjooGo1w2NAzhg8RUo4WeKjjrrnotvrziNisCxSG1Y4Yg",
  "key9": "5wgLw6DJjZvNUDJgUmRkZEUtV5JajodmvrsSF6EuhHpsVXMwThx5zhMcPNmUEVe6tryfwNB7uHLRtBhK3HaWYk1",
  "key10": "5o6Y5x3ew3efXddXW6FTYeWmCZTfxYsZxMKbGkwYV1gAKXreE8AbNx9Y4VhzqBQ9JTo9GfbKv9xjEBQ3Cyj1rjvt",
  "key11": "3B8ovZVyrFeEpYXzoTyefhx8ca7Wr8ZuUuUcThQTqf5f8WoL6stxJod7r8ozZ44GxT9QjYkk45T1wdJ14GmLUxC9",
  "key12": "65qt1aex9Q2uHXshfgSCSA3EBxbx17HEmdhUbHj2je2RpHjrNuvwyZyfmdHNqBR9KqDnKtKfSfeFxsMEx7fhJE3F",
  "key13": "6rHd1HnkJwAohnKANp8mQmVMUZ9cJpKFqwPWZPKdgaFbhToMBaip8AsjLde8PHMXR8oDDhANVfE6xLB7zrrt6ah",
  "key14": "6nZaSrdEg4i7hd4mtTJ1i4E72qjUcDZjSvQkv7voWW8Ps96gjJipp3ZoxHyoRRSbtkXMxrkvFJST7LJ178GtQpH",
  "key15": "3mZmvoMoXDpC7Br1kkK12KRywqpP3usYf1qsdmZZP2Df1ZB6yM4JAWwTY7q8CmTtG346iy5y4CW6npNGNFpARqqm",
  "key16": "3qiHzMvbGt1KqKVUNoact1XahA51h19ztZj5ep4wQtBEQERwfVggkTrw8nvjtQkZ22v7urv8TiGb4XmKsZjtMHoq",
  "key17": "33DNTmDUNap19qLVCSR4FBMyt8ZB37hZCn3Dep2EUDASrYvWDPMvC1tH9kCiNGwHRF7BwuiqEBhQLcczdZaGiXJ2",
  "key18": "2rdzUKAAoKbN4c4YdBJXq4yMUbuw6rHn5z6cS9eSwYDzURgxffyFehTnwGEnZTnHf7n8JSPMFJmGHp5EAn2NRSHj",
  "key19": "MnLpZGQhGfmWETW9icKwYgQpdyt1fQv3XsjJzcc8tbmBsiYkJv8nkNbYqUmGnZwQ3ceeBNhHjbtxkk9i2YWyUas",
  "key20": "EUhq8EV6MVgWayQojkckR8Mc5SCST3EqLLgkGuvXbiumm9SDeW12x6QwYqZ3CZadQ4uhFK1mEyApUtczSy8t5cs",
  "key21": "2CvRCp73dVjg51WzGTNRX6Ye32XhkXMAFmY23YNJyV34BJT8GAugpq7BTHdrFeZZQSRNdzPP8iWArmwNsAjY6mjr",
  "key22": "2mjHwxNFaQ6SRP2PtUPZ5j3vXgWLC5jLgrktirJS5vmvh3xwbCe8qXRfzZKyd42EJV9XmQMgwrZAkP7HUp1HxJNq",
  "key23": "3Pqs1Xgo7mHgm2GAtTimUTL3r8nSkbhAsMnyouSrEW9ARYrXcnh14kEu5eyM9JjU317KnqcJzsZnVD5rakbSY1SP",
  "key24": "4yp7MTwKb4gtHvRNMpbH1gmxDDcnZZPR1X4vkdmC8XAzm1Hm86emBbdp3DTg14pbHtgZjQzCFRBfpy7S9f2nWfL3",
  "key25": "52ocWxq8obry1LX73pmJ2Hwyvc83eQxc71DJnAMmyz7A4zQeALKG3fLaWuKVMHfJd6S8XDcaKaRQswYsmHd8ysEX",
  "key26": "5T4kYykS3ukYN4tDNxkaYBA15NUuJnb8beLuAJhJMp5QXrLt66z9nvdncF9Xst9hjLfCJ6Q4YtswjM7mZKoDXdtG",
  "key27": "4k22o9YjVnKbwbqs3CaySbZ3ja9oBrWgnpf3P3S5dXMeF85TPuiHgPCEz6KinXzZTrZG3hgsnYWfatEgZCH4cnsg"
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
