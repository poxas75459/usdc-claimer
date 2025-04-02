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
    "vGGQ4q2JAbDDgkdGkYsSvYk9Xuq19whRH7DYpvwdVYPMe3pxhLJ9PCJ8nk6gjbzmaK386t5AEN7WzJkrZLjzgcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21BGaDg5gEk81BiesYp91Bknom1cD7qrdPeWFZZUhAuFHNmTP6mJ1X2WT6toAEMaCnZcV9pjzA4jMgT6pFbBKqrJ",
  "key1": "2DJ4kJXpXdf99gRGsA2MT5w3Hhovj42dEBT1cunrFkjCRNP4pyvRH9s51Nk7djB5avh4XKqbiNLuE87KWkbJg6b2",
  "key2": "5XsDARASqQfppaFwzzX2iB3RxC6MJs1EcAAgjRp6kB1rxGGGRXauts6Qy6oyESunoBQK6zatg2NUaXUjsTCvHcVh",
  "key3": "4VAkqtnxAQFC3NfktsVA2HKrVvk9witCfEp9z7RuxtqW351agkKCPYBp5D2A1HdJVHWie9S9kV1M3mzCq5WSk67u",
  "key4": "5H8nJVshEqjyofPNwSB4SNwymAzARuoAAH56Qd4AJUH9M2b8G5uEDtWUwsNLVsaXxYgTehToPcgD1z44g3hLr8ix",
  "key5": "5yg4afZR1ntgg3wcvX69wwEL65ALGTbuPnvwzXvQsmntKUncMXu4DW6bgJrPbVVT6aKKCDu1kFVEpihJf46NUBGp",
  "key6": "3iPF1qmKaRrJLSp2kmUabLxdw8bcipD1xeRmWGGZ12Du2DmCXNuGaqQ96tpzDCaLBxH8gQjXTHhHwtG5Tf2b2jnW",
  "key7": "5ii8MUFN8zuzphvyEcgFsDd5Mr7htpZDevWLmCydRADTVuN9JgsecAoSdgYjRDesjDfqnuLr3dKsHfPh5nL861Yb",
  "key8": "2BP2Zgo9CPiVfHM3kq7K8hNS7acFf5bH3ENcBYokMudPFnobmZWRQahLEnEgajrXDumX3iAk9MVPQpYSKq1Y2Nj1",
  "key9": "3xBvysc7F4SUyfzQEQ1EYauuohNzsJxDa6uZVmrpvkJW4ntJxFWQ22XoaDKv1oouZD9mmDzvS3xajh1mgKEtEJA3",
  "key10": "5KjDJydkE4DTzFsMkCaYgTQdPsFteW3GxKN7TVYw6C7GaBAa8Fg6VTAC3kbPm2gGJoygvpDBorA1bvoDY9Exs2m3",
  "key11": "4kT7GA5dGRXcdxbaLeVfqK7iQRoenKSKs8CKCyGdoNCNHBycs36TcpNqruQvhz4oP4wdEJ8YqRiPtjkvdJCvWa8x",
  "key12": "BbNxD3XHNJWCnGoVdw5YpzuQTDg5z4n6aMK6SKGK3Xy3xN7JyEqTk5MwnsMtLqrBHx5oFc3QmUdKdFGZHBv8nLK",
  "key13": "4Dx37pzYQ88MKwhmqn2rVZpe8QDQDSikpLCxc8hTG3gZtio4yZn46LWmaB96JQnoXhcguMM9jRRhdHED9jguTAJH",
  "key14": "5Dr1FP2z5jfUguSt66PhyAWDHvRRbYdgysbZUVvoAAk3fs7qr9CsBxeZDNFbT5YQ6V93HbBagTNaWDnHLadt1o87",
  "key15": "64jqYZW1K6WeebUBKPmsJJ1Y5tcpAoLQZ1BZTgSssbAx6Gb3TmaBGNPQtUgr7NKuW64yEL6cy9HQ52zK1GAsukao",
  "key16": "613qJEjVnVvZXKeQQbNvQGikNJM43AsXeDKVs2aQRdfztGpiCEXMahqTq76naV4g41xC17nDaM5VBTooegPrrYs8",
  "key17": "4PGH1XKbshULGaUYE8pvs1CAhEcmyr9UoNPW37FLGV1LQ1qccPsrajaWAg4h89PqSBtFxzmRNCc8BmSfYwrE6m6G",
  "key18": "2d6LF6ASp5uyHwvR7k8wJLvqm7aJaJYx6w8xt72Yw8oCfSTVh5pCdDfcchzG5PjMY1yGa5nhsTD5xmRJwVXfnUW8",
  "key19": "4TFLKVV5EJNDj6tovuukq4EgHUGe8zJLiJEUTMev8YnQ3ESw5xS5vtALSGEJMXVPCCzbTGPM4CAekBbbxWEnGWXu",
  "key20": "4LUvifALKfuZdTizKzQhyF1YZTEk3BQGrv2hnoRNmoWAu5cy2NuhechxZtubqMC5WF98sw1n4tGkX8bStSjzAAcW",
  "key21": "iRgAGvr6suwBuxGjEdRz1xpqTZGBvmHk55oAm9uQLSm1EkcBg6F8bfkTMqp3qTzSL6CHfCZsruGmpmJJhi7inoq",
  "key22": "5SeS7TBwbYzksg5kqMCwnmhWzTWw29jGreGZ4yQqXJcg2DZqCVGjfiGTveCypaQthBM3uhNwRJe6oaHLaFraeSmE",
  "key23": "5MTgEZUoM2UaAzAZee2tyWQurzrT8EeGPoDzxPpf415vBzFzN96gt9g5eeGGfvbwh4GAyw9tE6nvDwKMp53ucjBn",
  "key24": "2xjdcDC3WYJTrr5RuJP45s2CKsay4BS9WwyLYU25DuEebRKyJsBWpHDfHbe4WkSw1G1HRyY3Vz9MjbrdVXqafRpn"
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
