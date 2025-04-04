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
    "5Emq4q5rDc8RAZSBw97PeAMXV9GZfHbVkdcypYTkJzHsGRKmEZ8QTMTr4FSKoSTDq3hQktwMeFWCgwB3VeNW3g7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yxevJQ6v4c1DfnCDnmkSwDAmGphfSXyJt9vPZSTbeVdEZkbZ9TBCStBisyH1nP7BTqdLcfD8QD68Xscs6PjBCqx",
  "key1": "jvUZamJN5GybZvuQrPkC3E9jr4A2f1KvqLmc1vuJyEqz6TDymJa9ViUy1Ly3zi4DP3JdNtmQSm9eYb5eQGUphof",
  "key2": "5HZqw2y7bV4weX9HvcVdmHWF2umdTHfrQRLaCSG7fQDxUyKraX9XyQeDBUjdrLqtrdzFnw6TjdxZjE93sSLW6XRt",
  "key3": "3JDneUJ2KgzBYJNaQKM2rUqRccArEtfL3LTbzDH1cJZEVnbvyQH9tXqjXshPU4Yn5ZSU5x6htSEJnskYTc8qHfQQ",
  "key4": "4UcrUUGf81am1vjkVh3rFaiosS9yfXcai3PkTi54FDj9PfdQmBC6mThPyJJogs7ogqVSLpij5SNN5cibER76MY58",
  "key5": "X4ucn4ebiJcfBnYAgavwsjAE9DjRLNf4wys6yqN6iJ4tS7afQVRrZ8dn95pD1pq7FqLN5rEo59n6ix9ULr6uw2T",
  "key6": "63EYkS5DJbANzrYks8rkhMRJpynfZAWL2jLu6UrGnzLK83knJFCNgfeA26bQ6t1PAW4D6AChURNWWLK1cvAcn6yN",
  "key7": "42chArgtuKGodi5sFqvpW2wcbVpzbddZ4fMzuoYx43XighpdNC3NZt3qWTaB7HmEQ2D2apDEXDjCdNYUfPaX3eHM",
  "key8": "2bkFbt93BT9GDdwWUp5dTBdN3WequxLRtAUqv2nCeuADrfgvqAEbZvDpT22Z97GNvcQNyZxTcf9WxN9uGT7CRzsB",
  "key9": "2NpmerH1HVTEoV24nx32GoaTxWw3ykjnTkh4xUUbhtxFWpQHQ722GY96iLq5nw1AobRabpnxhmZtBSMv6iHnhkgY",
  "key10": "4vcAqQ8xVDuCZPhoyW8MohggHVjzrjkC7u2yK1EySTQoidhXcEduWByjzRFbWyrwHoyLjS4EoJkFscyvsb5DjYer",
  "key11": "5MvuyjxP98ivDGDB5cgQLqVRaTvj9PuCa1L96H29jMbNTpUTXaCiYGLbAanAeg1pbBYENgZPY7suHV8fQTfj73ar",
  "key12": "2VkM9eTBUVy3YQS8wGcHxayouG1VAgBzb18EoGFCTco4MRFK1WT1RRjW8P4cqKxi8Na3Qrwu11hqNSNhGneBF4J8",
  "key13": "5B3a31jnF8C3HpwSxXsD852ytJRkQ6RuWPf2ZXQeJjs8gP8pZ6vB4bdLXFgWjWrCERkXiph7mc2cRjSWHofc6CGx",
  "key14": "5gnmpvKKb3HnErSGE7BkdV1VGYtatJ1ZD9ufq5shH4pLzbyvZgxpkHy93uuvvhLhvjBAaSbcxSQAHkz5iA9y2cy1",
  "key15": "33KQicqNt2Kiu5xvYREEyCA1JoNbJZ1VC8sX4zeFyw1QV88V2ts66aZzWvgh73vtby4dgR7Ep8nZa3jzar6Fv565",
  "key16": "2BqycKt7yjg6PnwaosyUxWhGroE2Nb758dJgCFSGy6W5yTSjESKqrM6FSeoZu5nZCgvmGL2Dw3omR9B6Ubx2Cvnx",
  "key17": "RwGjaJ62zZJfJFp3i7VDmfa4pLgZCtjWv6EJLPLD5ptDyzgpwum4kBDKYpQEZmLpFTYEnp2mMqhHTj7vbTmnGrq",
  "key18": "e2ZtH11HYP8rsV57BMs1f5jpbYmHvdD6vSLgEDyuYHAa12otMbUFM8ub3pbVoLbK7QothaaekstqXbj27eAHCL4",
  "key19": "63KZJNfvHM4LqGhXzQ62G3n3MZjBmcKmxH18HhhdZS7SDZ7je3Z92dYGCttGLT6PKupXMVbWNL29J8QVoRtZFCWv",
  "key20": "KFrsF2tCmUcuqEmq9Fh3rko9JCAH84rLCEEDqnZFuQXSsrQYXLR6JZWfwx5fEP7cLpABVNHp9zCgBCUjYcKvpaz",
  "key21": "3FeLh99HVki6xYFwcVDiZwPoCnj85okkY87D6zv5o3qnneZCr16KhLCmue3sD6HTQeYPmxnQ1xkXhbuCaZwZNDwR",
  "key22": "5ZRJFsgeKrXfpuuq41GepR5npxwQ54dBteVQG2zQ2tM7TssH5ExrvjH4bierapsjXEBPGfpL7dg1kPUDmCcVnsiK",
  "key23": "4zbpP8LUppkEZCbT8R8Twj1Lv2JvTofFHMSQazFKnvxX6g8vgowGpupaFZkqx12msAfBV4BSSsJRcbTfme5W9adg",
  "key24": "5vyLecr3eqdMG1FbKDGPL98LhudvfFUmPR9MEXjFj52cg6R4fYFDYPbx8ywULVEu3uUksSBhBp6LzR2VF4M3Mstr",
  "key25": "59D4JHn3v4R5fwn1BvrA51q3S29B6QXiT8F4yNzfpY2upDkFfqS71Z9m3isQ3uWv4HooB2iDKdBLw4qvZAwnqXD5",
  "key26": "5oq3Fqni8EmfNDgdMqWugfmkdm9S9eJWz5G6peVTSmPHQyS1xiocxqfioV3rRxB7VGCQDFAvzXjs2aUWC2Pds19u",
  "key27": "4ZB5T2zfWpeCNdYN4tHrd4fz9Svvd9BVnDwrpDSVqbPC8vWCFU8BHFd6dE2gGLbkSMd74oU534ueQroWYP8c5g6M",
  "key28": "4Cf5cMdYRTtQP47rYQ7BjZVyivzQoLGh61CcJGffFFdHpnFXyQdzDgxQjDeZF2V6HY7k4cVuayBxV3ZLs2gRaiiR"
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
