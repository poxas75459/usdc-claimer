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
    "3vKGJ5DeXPAo57Ze3bh52WKAv9NUQy4pBmtggvnRirpA6Dy1VR8qZhu7sBLtLMs4vtM7mJcZBmQ5vBYKKfyy6KhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "396B4pEZpEXykcQtxttDMjD8hzhVejSNEasur4kX8Zdz5GVWGm8ZPK42riQt8Rv5mzLweB7ZPKj9VXw47JdTL6Z1",
  "key1": "5zNxRUoK6eVMRysEj9T1FovX3w8QFvw4YDnbyNScm3n9iuwUfzmiosX5M2N7a6DV3YmXsGGuT1y2sxuGnYH3igbd",
  "key2": "4ocAXmAoZs4HnHNhfo9utyM5dW63DbW6BTAGYsR2ivzZ7Y3DpuauykUyrVNu11HE9NFh2Qh88sFC3SKXB2PK9VjX",
  "key3": "2dPsof3WJ2o7CZLPcy7gXXrYj5583zXByYPTRX5zeWiyWYXyiKf8S7y22X6fj9bZAewY4mD2P9Bdqb4HNP29wsab",
  "key4": "2twvkDVRsbmvuH2EUTYdSztorCb1q9tCZym1SGR1YdktDHWKjwEeiJQ9qhAYfSrkazNn42t1sgx4e3NSWbHxNGb7",
  "key5": "46fFU98mNRYoD5aEiYUs7Ys7ee9jpT6WpFrkni4jMGiV7FvjbqZMZx3Dbm9a6bArz2F8uEoAu4bGbZcoQQu8c71G",
  "key6": "3nYhbj7uhcQvyfTcPp5rmSeXvPLjVDnqm7FDgxGdb1TFphPSHnF73j9kEV13meXqKuzkzEvTvDViFs4iCsYmQ7pf",
  "key7": "4AireW774xzkDEBDJZwe83BVydH2yTuthaK945vkLZVGEWkerszM8gT9evD1uKPDhNfMzJcXQRQUsHU1mL2StJgM",
  "key8": "5HGVAS5NhDb2nUcbbj1VFerJPwsrWq7WGMgriHntMRFYS3CNmFLzc4b8EZ98ArLofh4hmCbTaWytmtLP4M2Ycmob",
  "key9": "3giashMu6caNgtPEEoxrTvVnRD6S4tBn9HLTLyYBmemnZkLeZP2AbwansXVniPHXEdtFM2zREq7Y7gebxdEXdF4E",
  "key10": "2K7MkfwLdtH8wtivqiRFtaBddyDTzTXxqDHDnmFHTHS4Z2g2A2cqGQqBpkw9oc3B3zwRfyjipH8dXEGMNaTnv3nT",
  "key11": "2wPDU6qimAK6sgLpp8E9ar9j1refVqwzUCjaAciqwxJcM7iKiCaapeo3T4R3NLWdU15DftJFsCEumz7VuDcywCVN",
  "key12": "4QMD1RzH4AtR5i4NE316RQR6yPmZnh3LzrGhsez87NAsvH7iEFhEpT2MZ6uzpPQLULXPfDp9nCANQaAg148qyGZN",
  "key13": "5V8rQbrpLpQ1nKd6yySaLjv2bXbHmMGbLQPnqxFfjyaPPeC3TKTWgwFZtesQVEWVKukqaMuWajzCW15mJH35sQ6r",
  "key14": "4AnNaJXnMnLNeYvq8dVGrCzKRMcVvtziseWTTbksvNhwCi8qwx7PDodA1nec9rRhQSNzviNhw1CwLcFErPqqSXkV",
  "key15": "3qmbhJ1DaVPjdxKtLgoDVe38HCSEwr7dz2zyV4iFFasGjuu16X6bAZBpULTnYZr8BtWEiD18hakgwHaywC5DtnW5",
  "key16": "4XUGGw24keKby4UyjCSkRaMvVa2c5XmRsHjJD2rYFiaHuPzmD1DHmQnc3NqtbE4U7QT7qEvCqhiTNZQ2enRsaVk1",
  "key17": "3A3dcWM7RfbU9J5Y3paVGaEis6mqFxRRfJCzSMCZ8Pkp7cXaV52r9AYm8r4CnPtTTX1992dL1EtXu3ckhhvDLudT",
  "key18": "SfvmCKjD1VAA7m1ibx3DCW6Buz92bUBr2DNBE6ZiZD3BD9ToXCcP8opBsguVTDCN3pebRk8MkCfX11JxcKive3c",
  "key19": "3B9Rx7tJrKQzspDk22fJ3tgRP8VmujqoMBhaJoGoA7K3c5zQu7E7WRYUqd5Ls5L6AMXLNjVzm8b66UgSUJBNx7yM",
  "key20": "4VmBF2aMkXhfPWcmKFrYWNqnVgEgdAkuFFvbNodarYzrqAAo2cgzFfrxWuvwPVQ4sDPB1bbipU78A7MDsbKuCpKE",
  "key21": "5MyZ5zMJe3g6YxCZzD3HnTx5PcfAkQihwn4Sa3TjzB56seYu4HkWL7shV7PEiNCaoiSgRZZ3p9Rxi8yFKqWdXLWs",
  "key22": "SaZX7Nj4zHSnAZiHxAwfFBpxiqbvi66M2ZYSmSYW7wvscuDoZNSrsq6DNtqLBTGBHx5DEAwxXDSQkQbWTynCSpx",
  "key23": "5SeJncvYNHQZxSRUq3BcbgXXbwikeY8QDhZephFWVmg6EgigCPPPik4SCBuBXtjK3SWXYdVLPAoN8B5w1pKQfWVw",
  "key24": "3i7KnXCNAQceMDJ1pwpJzPj11VfDnP7xtv8u8iXjsGqDXdr8EtuuZwijJ9zZEPQLNRUcRAZRGtVsmGQTBGkk4wkr",
  "key25": "42CriuQKNa225z1Q7VF8iRsbdRsyqKuD1vSffuJjJTS1eiD3qjHu4ZbgHKKseX4zgz8Xw8dbMgXPTSxt8DUu1Spt",
  "key26": "53EYVpZAbPfCPP6zKihcnJQHdSb2SBiZHcqJRNt1UztWMTPKALUoJPZZGdWg113hbZghA3kmXBz2Ra7a7kUjafdP",
  "key27": "M3SWA7wdsNaWpHvuewsAJehv5ajzXo8vf14mVcTHhtMW5RtXCkBV7zHvrKDSnnjtZJ6PxjFzdoRLNaqCyXuUqyU",
  "key28": "5UDmM3VcRDyYZ2ZygYfq22AStUE1gUBtLUnENL91ES8T1w8UXR2vrVztsZQtunx1tvNswASpqAw24jm69LNC2zrZ",
  "key29": "4dZN1uEGhx9jCgNoHB24HiNTE3wxDjPgLj6p2A1yEv75EtTgzvvBE4fhi2FJriqGgVtQp8M1XyvaS67CCoYWM6go"
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
