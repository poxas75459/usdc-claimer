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
    "3ctBKZWPA6dN7WUZdWFmYhgFp5FdzMzgNDarZekpaak6TsCU8Ky5QZMHazAJoBGzCmrDtz5xzAaLoSViyFJGbnYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4srj7LgEnC1o387fGJmvBUGPx3xx2j6m7HfbatdyR6VG1MXEqtbin5N4iTrxf9xpFZ4vRPaikVjNSkYP2UfKWLXf",
  "key1": "JsL6zJ87rJ5f5dBjXBxNLYBEc97EvLuWKCKUi2yWTQ1MX2VEaVpmo2DWK5N89psCxU4psZ1DmiGAEFJ9EUP9gqh",
  "key2": "S3A2rtvXWij78oZSVrdiBsppcq9PyYANWrY1wWycvpKScKfrbNAruM2z1DWKHFxm51S1ahygyMH4rJKvAGdqV8z",
  "key3": "21FuJjiLjoQMudq9Lvok6sTNxdv37X7S6c7pPXZHmv5VtGKKpKkmdh8FsbYnWURE3Qy4eFBb5nzFizzzoF3b5XaM",
  "key4": "3CovN9gLBYDeA3U7XpNoxTkqkK2bhUUPoMeK3UxSNSdAX9emowqTaGzXijD7LFAGVvjzeccTbKAY8is9usnCxYTX",
  "key5": "yBn8Y9YejHRQB7TTvCbYotsRvFMPUspv6BuYqtcRvsUGrsysZJfDktE6rC6Jnb2D3xTtA9vFaLdX1juz1k4SU9Q",
  "key6": "2KGBxEvXEd5BnJiJQzZh5xpH6bxwZtB8gQd2VzXTBzWJyvukH42iDN2wqyNMwpKMCrHxG5zAhrogunhUNpAouYRE",
  "key7": "4beqPwHKQEu2wD5RBh1VNt7LiFKYQhKbBPYxTGEEkb8BrefExpYjFqiq66ThDd8eP6eLAyXRuTfdzXxwskPhQwYk",
  "key8": "5xZvBfdJt14y68iU6kn7KYjRomRymEdN3UE4a48e3j1AXZAjEzuQWGt8ZZWtbbQKyGSNoYfMfvZUUuaiP4upS8PX",
  "key9": "9uWY5ixgf3XKSpxY6bMZTPRmjYHiBjc1bvJ2bhsdJ3q9mbfGZb8G7LHf6WDaYMvcSEnnfLCzptUcJYsZ1UcW9Jd",
  "key10": "22Bca6uWmLHQ58KpsFgREvzSKwMqtb579FPzVpuJJGaXkftaYaARfSmj9reT8wgVJATcJ5pdXCMBeqwozBuzcnsz",
  "key11": "3157Xe9jUT9osJuDx3vDamTUJmSVN1yx2JTSEQx4ff62BushRJ1rBK7QqJPdx2wWuo2NfzUazs1NqiSeDM7cASph",
  "key12": "5qTNEwkKbTkdgviz39jQQpwaNP66roEb13p5sVmW1EkVympwL4ZQjfKHGYVjYbE2ENTkkFYfF7YYe8k3XUNBR9Aw",
  "key13": "R2oPBhPiUbQGohzNfuLkC3DFBdcexhNTgFxPNvY67eJdoK3SvtEsr9gJsBhPKcKbTcWxYJxHn7rfMwDkp1kAWJw",
  "key14": "5ohu9v8uDCmKJMyBtKB6VqTiGRgNUQreWVs3acQCQ2faJScsFGSMwvP8DxidjSgPCPDBFYPVN9YwGBCmLxfRizSW",
  "key15": "3eSVk4Kty1Va23JL7imapkGJGfFC9jtuHZPWHrSrZEh1zBgvo9si3B3GaKNzgaJyEfkWDZVU4JFYjFYSPcUbCZL",
  "key16": "dZPkaU5369SoHUfZ9i9aKo71TQDTtPamtHGKac2rWm4QEo3cHzdZ1Pkq9XeXF7cznq4UCDGv1VRPGWQBT6sVDPR",
  "key17": "57ZQXALb6xadupJJ6bsiifsG2TeZLDHk3pGovMNcMjBDWLkdjNPMGNMi8kMqvgWZz82g2CtmKSYaBGqDHH4WnH3i",
  "key18": "PppuGhFE3ST7Q5cqhX1Y9ZZLGx3z12RfCUSaeXNvAxZ4vJ8cwjriSAPeTXr4fgNnqYCoKbxrkmyUkLTgffJZk2a",
  "key19": "2mPHi7rcRmSgEgvu7ofkPdizW1eMCYsJ1M8FNgi1J3aUdrcGBqQWJvN6YrBbjp8QVqqeRJuttfvbTqMhxTYKAbVf",
  "key20": "2jVmKexSPQanDY4qVfNjoQ23CfWT2fRAx4yAaNEV62pE4AS4WpKVzfw1t5ATpKbjWTb3Y8i5bptsP7Qzbbpdsbd4",
  "key21": "21ijYiw3jCVZCUK3EmgWDgT3Nu4QJy9YZVcqxhdaceWcAJedPzQW8AZBERdXnzHdz77sCgeuWZxcApahuDAkDLhs",
  "key22": "3GFR1obnZWpbX6aU1UuTSxUJ3DRLRK7v9ZH4BHQ5Y5nPLGh7WAHKx1YxEm6CX53BoTatpwJswPMy8KdtwSHhTrth",
  "key23": "4ctpWRSe4W97i8PgLKKJfRdb2nqGJ9fs8kmUHjeydyGKpipAFRA9miEZFYND6w3fT33frfRC7UCFwvTw53rYWSow",
  "key24": "Zuh4G948magdepoQ3ADDUvS6HEw5UKPfsqLm8QHT4hNnAttDq7bJKLEZqUxjdqZk2hdih73BDLELCMEqFfoRSMk",
  "key25": "3PGQDYdaC9SZZU6jEz6st1zXVu9tG3g82G7jmuAcsJP1eJSJ7sLKNnqBsgbuN3PYMCMTu5hZstUikwk6XTo42ZBg",
  "key26": "2fPp3FuW8UpMRL3iTp3wCL3jcwdMbhmc3axgicBM7YYvYX6rd5i4PK1iboeCPTNg3SAxZH1uFcTWLL6ASeshubce",
  "key27": "36jTHBbhwWrgjrTnNPyDgXYHLNE47PzVxADKfZj6UViSfh9QB4r7CRBufjYPwZFBDoLcNjzuvxaCG7ZpKTVaeY16",
  "key28": "2TwjMVN1yHqqGpQ6Mc1xNeiGrCToCKjgmUBZCZ1F672CMSz57nkoceCxWPkhtd9HSGnyxjKnAVbxVPDvdXBybgqk",
  "key29": "3zHXyjWc6KXsTZktExgv3aDJ5b2iW6s3N8PRjnbMma2Ek2ejQzvYR7xYnytcbcoEvsXthoZVKMSzVmKWgUoapkKq",
  "key30": "2QpWX1RFWuDCWgzYKoxMVFPpwURcFyKkK6jvokhiakV9oLHXp8HgqnFTLRrSxSJUU8eZ336zVSk7ocGyUEoGQ3TH",
  "key31": "4APVvQ1hTv9nHWjvStzrgFmk1oouJ74BkBJkQGusBvaNBPNkPxZERwZRNNphysTjvr7zkukwfpZ1bBh8ZroCejdY",
  "key32": "3eaq5SQ7v8PJzymbQavmbbum7ybsHh4i9MCEoKaS3nV5HLuWGhuRpFj7EZ2vUWCKYD9fjJrDDzat5WSAyxvNtXWV",
  "key33": "63PuKoHbQkCkdybww1dVFyjF5iqzrvsaaLxjRV75q9txuDSeVJ2hxp7dKWAXLarTyNM7bSsDJHjn5Ji6kAgpBHPu",
  "key34": "3mPTMh1SRNQ4Eb1WbJmoAvBPHrzj2wnzjnAp8GqxguYYCJPhdQngMHfvxq8ZF4YLJuetVGJs4RCyZ58Vo2QfpATm",
  "key35": "5VnHjct9v32hmceAVWnRaxjWyvWw8mQs83ybmFiDHhXpdusysC1yEQxxGtc3hKhrx6kdZxPawBjmzUQ11B2aFWVv",
  "key36": "ps6YHCpmqcZNFyQfj19YwfH93cd6NAB87SWcs9PHgj298NPZF6WeNge6pcb14J3ocm95a1CJ59GMsKeb4S1iMin",
  "key37": "5QqxnCiiZgYxNLZ87bsZsgZTUj7HABhbLNtxeawZfwCLs6WXjAyVEomxgxoBa4yrw7u3uTV65vNbzaq5KTMArwhp",
  "key38": "gq6ED385RGMPGP5P98YecYNi4cEpxvvDch516yevpWvP2YXH5VLyWJrQnPMJFniaYrznSutGgNr5JBAVBF5LL6F",
  "key39": "126uq4G8zqAk7vwgwiwfQZ5pfu64r6c33dVMwdM8HdagM7peE5L6c8r8YJju2q59th1Y4xYCV4vHK3zCv8SU6XPm",
  "key40": "46whxcT5qWSgGAURC6HVzVRPP951GYLN3ncVyd8pZ5RSwSV1ptYh4snW36ePezN7jAcWPJvmUf91xn4uXY1CkSjk"
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
