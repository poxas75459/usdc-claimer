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
    "4qZZB61s1eMrrRN2ULCxWaffTCQFBitTjm6qbqe1XgvafJtGM3jGUbQ7wkf8hdQHpJUNX2wSSF2Bfc2JqD6DxfM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58GwQe6LXG4Jf9tHRjv9rRRhTQ3yrCQWXyjVmMvf5DCXMAEGBuzEDsCsqyYVkQBP6nvJBqusqtMpyTcg9PB6zHjf",
  "key1": "5w3U9vYd1Qzh23vSJeQX8SWuEfQqiN8fGhJPVZUcN9M3Tt9UttwviUaB2eGJAvXHUkjYoQsDZX9RU6udHrra7oWX",
  "key2": "94WqVf9j4P5EShHY3BFXJbnNbFBh9cSJaezUPBoRgsoRsSVuPLPGvpsQJ5NsXjtwdSfDoXM8Nv2fAgaeJ2ZYkah",
  "key3": "4dUXDWHYobCuyjQts3DSGHsUdamA7YJY2da8sXnQ33Uuw1P5coVRyuYREsxKjZRbmNMdvVsa4k24YSkQBqj8Zibm",
  "key4": "3iXN7AfpHwzDDtYdPEFQveA9kXiaGWZcbNbCovvPXUGEX9tF3HrXpayxKABeq4GKi3e96TwpLmEZ677jyobeJQpu",
  "key5": "55qJVRaa9keh7ZSii7ain2nYf9Mo7sLLNiobh5asHZkduD9HSJEeefnpCWxCwb6XG7sb89ttwBovqgDkj7GnUTYs",
  "key6": "5hojbi47D7zEE6inCVo6XKPyymcp6QqVDPvciZCa3xU2KMURWPxnvZEfaCqaSasx2J2qjRbiGU6n1SQg7bhNbzBd",
  "key7": "5fnJ1rKRHs1AnHfn12JHE3SP6HXvCzpWyFn1JppT3A5jubHYNTBy6Pwx4ZkJGfSAUN9WwB5Ch7HCUCGZToReCt6L",
  "key8": "4wTgZWoy6qsax7fjgoXdyKhaPWpcWkUkidx7iVfLVSVr1dmCkLyzcEDx7dVXqi7vL4apFzieC5ezBUjqSKSJjMV3",
  "key9": "hGWz8qTQLG6fsHbZ5BHZqHRAooQ2VJAsfQGMQSk4XmNUJo7urVfG7BLZxmZVL4kjYyxJLH4uf3uvRwKjqNo54gq",
  "key10": "2eLhYKK4b1pvmCXKerM9d8tx5twBiCDzoovTtSfjbeHSSjwbiMq243Bua2BD9WJwPftuZkdYKLEzumcrb4GzC4wM",
  "key11": "sGMtgdx2BsQL6Vqhw8qP74tRhDCLVRDifkUmKDxLsTVxVucGKYXTGbsLS97amtpyNwEzmkbtdcYNSHEmkNLy72m",
  "key12": "3nzjWng8ov4iaQGziDQV9XMPNya9bwJstKqppHXSkZ9WwB4u5CUDDMc7KVjMVjwVqtG8VV1StNahBCHvyYjpWh3e",
  "key13": "23V693ZZ9V6hXuJpHt1f3LiyB45Aq4QuRFXRY6Xg28c12HAQvkTKaUVKGCfdWXWJQtijq5wZAhkSzQFVjxs2CyQd",
  "key14": "5ovV9ig5Z6T3wLb5FXRANEPbEQmoUExe7tDcoLtvx2o68VSqychjtVpeNu5r7T2C9TcmtrrazZ4saUhY3XYwPpB8",
  "key15": "2rRQuVwdUynufT52iJFQ5CkbGDx9GMSwE8gTZy7kZjvJokHsFyFD8qY7ASjk3ydDJDkq8am3CRQDYN48Bo8qNH7Y",
  "key16": "n1BwQv3YfAtXexn8exWu7NW5Q44NL5JSkEUqdRpVL2RuJq3jkbSdk9CXyZ2ppHDZBEVPdp2YGEPwpU2LQeYgraV",
  "key17": "4YDUz5aGm3depBdgKxsL4aYNLn65x5cRWz95Ppb5dg6cKMP1bjDZKoFoPFaAj4vCqtvd4XhJq3XckBZZ12U2Fbv5",
  "key18": "4vz1zdPr33Zb428UCvfAwkNGyYghWJ6Y5NAHiJmofxkzL4rxiQdbZPLsqV5kqvjMTMz1SMTUBpX5bbytGJVPCrZb",
  "key19": "5HXKxGKBRnU7CvHzcMYx3DdN3TW1hSo6Y36t3UExM1MefU1acTQYHxs8LMSHrRMHiEVeMTh4QRQPfFYufo3YtdpQ",
  "key20": "215oYzQ9BJbTxr22AFFeViShzVMGk9nU1n8ZanMYrda2LEszM3QXRQJrBWgMesLviQ425v2T5KoSwR3n3j57z13V",
  "key21": "9uue1tHhLLYwDfUB1N9w1G9vUP2Dj99eKRQXSu2QWPrFyaPbSkPbBYJdDgi6HAyDv1t5WK3ZZhem3Vb4wjC3FQN",
  "key22": "XW8KQjsXHwZoRgijm4ZPoygY8TttaV8xeXx15588Kb72Z2toTWXU2T7jGzqSCDqAQNsMcGippahjFv9n8sktDAZ",
  "key23": "4Tk6K3VmVh6eEBX56acJGC2u2sGMDWbkUSWgGMq9TpoRjMxgQjMnsqP6LSoCQyJ7BXgzyBbxsxFV8P8CVGD6PAks",
  "key24": "4Apst9MAdYfJqiq6K6EafuiN7mPrrvBrSMu3h4nGKBnsm9oEjX9hwvFgNU4xnDfPBhS994GBN37KpXkdw47grHVk",
  "key25": "5gnWzMeKy7iGz6Mrma5FU3tjEdMWmpKg2u5YmrEEzS5U7ck8SH6vWW8rSbXC6zb5cWXisLnPW7P8fNRXJPW56ha5",
  "key26": "BUtnGkordPwnzACpveCjN5PZs4aAUdzanhJyyuxs2CZHnHQRCVEMedq6dh7zA5jYLXt79apb9jh8yqvZwYkZWSH",
  "key27": "2PShQp6oqzFtFgzN7nhMYCzcDwf9zmd5ZRFAgHb9oBt5PP1NJ4paPR5yd2zFKfB6y7KZarfjZQnBVvSoy3GQg1cE",
  "key28": "37mgAmauz5bKCSyG1fV5NzDBo88dbiaVuGHjQ2nEhmEiW4MtwegeBkhZcZRVphN34SFvpDnX1949ft6zCs22Enk5",
  "key29": "3EzTbXxcmj27z3pqMkRFePd2EZ8Ydh6L7CbcgoGTvQkz4J4hM6e4zzhU7tdumvpHum6M23Djaw46fQFYRXFErznj",
  "key30": "3Lr2p7UzCV5A653PsJfW49JMCUQ2V5PaBW2LxW5atokG4fxwXmZzQwcXyNqpwBzU4BGSVAtDfnrpj8JCHNnxrF1U"
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
