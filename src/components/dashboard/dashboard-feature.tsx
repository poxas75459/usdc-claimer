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
    "46anJd3RENj7xenoMJmZMGX6BUF6ZKWc96TXoNhj9WS4ZYyS3yDtjWeRXpTevV7qz82GqHsBr8TZjdmGxnZQ1QZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sgymHNHwd86icqgnLGnRzE4XohoeX8nvcPA97ynF6Wgr7QNc8qqXPLrxfnMXvz8pnzBavszY6xArRHCkSw9Bkt3",
  "key1": "HsBpGzVAQdgyhbuEsZjSdPs8MvGaVq9xM7dvueRFDWFbP5V1fKGuv78gsFwnQUb7mtCinfYccFFHK3cFNNaMDQ9",
  "key2": "2V5FWdkhqXqkTk3wammxVaHJJe924ijbd3dYpU2dnP9NNxwRfViD5LPqBVFa7xPh9Cz2RrU18PWrfKc3dJK2E1NX",
  "key3": "3cyoWQTkP98FuTQof9t8czUdfJCEoHLDhWjRa6YEEjoSUXkt8wDa4MgzzT4i4mVgPaY69QiU4md8J4w9of1nr4oa",
  "key4": "4B5qsVtV5rhXKyLje1VNqKNyTrtDhiv2nJ9baaQE2V3JGQR2oS1dnxS7eseVAy2CkJSqj64nNGd9aWQhtaSVZb5F",
  "key5": "2NxG91n9eYXijSQPkZYGKgqvt55D9BCBEvJ3D9gbVBtrsS4LqbPy8EMrznCt8JA29ZS8BXuqEjjYNMvMpjErqcC7",
  "key6": "QehAwgYBm1gQdB5EqJyoDCsJfQZWpfzvPLVBBENvJaCNzsBcZzrZB4vpBwP6fNTSERjpiuT1tqaD63vkjWaRPSv",
  "key7": "2U1E9rUaE2idyMdoqgcU2q3Ho6RRp9Tt4M9s1AomuTKS8x2QjdLzanPAJx1birqPwb1bUc91eQAYjCFMzrCxKmuh",
  "key8": "2dC6XrHUvDUnU9jQqH7VEpBbRdBEUTNn2AFNEFUWNKZM3d3KeE3D4JqHoxEnaHubwEe695CUxU81xargiKgADd5v",
  "key9": "4e9onZqawy2q3VqXoaf9w5yj4YNX94iNpq5qF7fNdovG3SWG1usV9VN4q9o6Y22NLA9Tsm7MvLeoKMFwDWR8Dydb",
  "key10": "4vxKvWaqRAiLjmBKGaK3nwVd4RAAmZEd9LzdF923HxYJgmmwXxWX4NGTyfUTE6AXEz2MEtfeTXENb9vr1ao77o8r",
  "key11": "2rHwjHFGHXcvBfsYAEKKBpUpSvofS25SL2GAJDS2FBGuadT2ChTsJ1Wk1H6x9AooL6qPQvAEUh71acaVuTQUqUCb",
  "key12": "519P6K8rHQFmeCt4unm6m8jauKNomjeAsM99vSMwFnySahsn5VqFZaoDXf9LPrMBNJiVadGW3e2DTV8ZdG5nQ9Gf",
  "key13": "4FTqq5xccZ2d61x9qCACMZDyWx1f1aGJLBjjwTy7bET5T5eivKufVd1kUxs7CM6VSRVnQhUUGsFXdiy1vc7bVvmH",
  "key14": "2dqsozTzmTBLTTHrWw6XUWWJETXvxVZRu6qDHZWc9MLHnMGfoZ1Nif4HrDjFPvs2hfvWVGYeDiWfJqnrCAzXkvq3",
  "key15": "65bR85QJzaYy6UWup9DHVrHp5DzRQZGCce5CBSmSpbsv2Y9tx3cY1nGryEeu3uQCNBRCgYv1E3nxKQAa1waDWeR2",
  "key16": "2ygVLJTHq6ses4iQTbz7gjcmbzTKK5GtGBmaNdH3urjkmCxK3R8SBXDV9MCppzXd1yWa25Gq1jx8L5oyorjdeuQ5",
  "key17": "43Ev6NXozyRUfUtecVoz1CpKUsuHRQaqFAJYajuGtcEqvkxjN5T5sDsANwjDinTQJQipbqXEdY1MtsyHaPgXYGkA",
  "key18": "Cwm4v3hP5PacRiyWWHah9TW4RLPcZZgLg5A4LuwRy5Gd7PG1y2xSPZN2CC6NnnK3PpGLzdJTrZKWeigGM8SrgT1",
  "key19": "3ViXVmriiKcanvVczPkiXH7W1dKxeQ85kiwMBtLf6T4df8x2oQdVuRAr8xm8UmWRFYATPZrHXs44B2L1Jy2K86hC",
  "key20": "X5CWL5WMWukiZ8LMv7S9vEgKeRb4WfZZmtbvFjjR6Shtr6n9SDRwPZ74W5UjfdXdWisbPAU6DrGDvoivhF9YpP8",
  "key21": "33rJSkNHM6u2PgJzhyb13fDEtPRwbCMEKoJ5YrSD617UTLDPbbmL3NfShPddK8LeyizyCWeytjRTUQvi1PEUzAK2",
  "key22": "27bMvCBNarD48YsdBw3tzhrbLE64g6hPc5dykpMK4RJkr4PRcpmyqsP5zNQfWpfftUjn7UGLZAoFRTAzoxdcwFa5",
  "key23": "57yg6R39NTyxGtPVZKXterXpNLbivuy5PHWaDrATarAPvvKw1WL8kpVqeqGSfdyhczAoDcR2JTrYFpnMZ9kACzN9",
  "key24": "3QT1CNMZqfA2qNWud85ki1B2BykoVheNvArNVZdMboiwJzZKmihiSYXUUzCwpUagFT2DLcLo6mVZtEavB3rwm1t8",
  "key25": "BLiG4NrAHk7tjhfhQrPyxxf46z6qcKMryCWA5gc9nm7CnfVEhKZpt7WoPyXL2N1HE4rAtXFg4XAdVr7jE3P55Zq",
  "key26": "5w9BWH6aRTCAQBDkWgJRXcoPyJuHpULfuH1eNiWCHtSJR6ehazwQaPi2CbfX8yTTiWz6wYkVPcDYToUieZCX2hyS",
  "key27": "4weUMfP3bwEoKJ8wGfK4BCLLKKxNihuGTUidnc5kcBgVDLRCQV1ddSvCz6U2aZY4BFZxMSeTHXFzioZDQ8FrGzhE",
  "key28": "1NvAxhbTcTY5Jf48KFTZMBimf7J9cLjvavqFmLeDXxGUa7gi6H1H9r2AGzWYjSM6RzPhKWUywH4mvT6CqorgZ4K",
  "key29": "36gcCjmsHjw8RPbDuDVTNx4TRQb3pq3CQ6E5eTvZPUiWsZCkvsq5u4mzUeopQK7BJhG1H9Vuhh391uwe1pRNuipC",
  "key30": "522i1tksej1weCs82yrkroiz5dzFnFnmWjHcDGb3gPMwurH9xswyWEzeTEhfZJV3zb2cVoYuVmxF3pA1vodeBock",
  "key31": "4gj1t1ciHmdygfgQyPseY7Se39q7xBSmPP7Q6An6RZmQKtzo1CcUvaJhUwWsC3ktjotCarMwA3LWUbR2dNZWFpfb",
  "key32": "7dHS88JPKT2AVB3GnBbh6tHEcVH5HPmq4Q2TQ3bFXxtDrTcyf1JP1zRrYqW22gsYx4ZwVq1pr5NUKBajqnp8pQK"
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
