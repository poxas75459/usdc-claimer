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
    "4ZLS4s93thGw3c5ZpCS6XJmQ7GV4EHqw22sB6CWA4KL89FFyb6snAyLNerf7USK9FVSuEbM9RFdTcErJpkm7Anza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CYYgxbPrQRpWp3aYBrt9jqVZrh7VGU2tfjVQmmxiCSqd2ch3gSntA5yRDxYnsBhkAkno9uaWrYZPFMr6Z4da43D",
  "key1": "4eCNdm7cEtxt91UhGwh6o7KMj3s7BwVZWh2WwrjCRRM87CaLr3ttKZmUWTZ3sB1ETMj7okvvcg2tyVjd1ejbU52f",
  "key2": "5BSH9Fu9tit92zdau4mfFem5XkdxRFpgJ2bUX1o43wcjP9ShVcgHBoEjsdpXoLb64tRdroqzDHNepG1Vbp3XgqVv",
  "key3": "4RpxrXpiEWcnKz2GEM3m47G6qvnjs9H6WUqTuAiDvDnt4wJSwQEcHUx2TadeuECY9Ux7p4YgeVuyybuiRN6rug9W",
  "key4": "3aW8hLsYNzCJgv6KDDari8fCexUErtFP4cVR5ST1x93DVnzBioABaAZiiS52dMKNZwrzLezSGhiDX1SMn41YvKcN",
  "key5": "APQnm5J3qY9wyR6RKkfBgoYpEfpyfDxzaLWv5Ej6o2iATiBmV1r3xdkokn7eTFTXfzXFGphUd62Ay19YxqJASjP",
  "key6": "ZwussmTWQPYHNiKyxBC3Jd4nQLrMfiXJrFtHK17ic251MFm9aen1uDLfGtCfYWYeEWG82iqTeiLDpA6uWTeHg4f",
  "key7": "4kauGT5nL3EjBvUwMVabkp4kJjRD7LBXbUo2M8AM5bybm18CGCUvKjEvfncrZAuhSE9iWMkdK3FGQXjF2UF97WyX",
  "key8": "eBMPCyfhTq1pi6AgZP1QLJgiJExvxKg55TjhQdBMKDrqgFGA6VZ71wswZ8acvxVyGCCvrqS7LZsgkumU8P6NHBn",
  "key9": "5ktwx67X4if37w7Y9BfSan1PYozoDK3otCdFf9WXeLH9DVUGbx3V76u8LGsZoLmkXZLcsqBiUbrQBFyTs8QwWFNo",
  "key10": "5qFjDERVKSvyjCCgcFRQ5G2vDHbgeQC9TioX6e5bf6dfvr2vgr3Yqk9LvR9jTRpW7RDYAt7Lzfh3fkzKqd6U2xP",
  "key11": "SUiUxonCHLQHtePUjhTneuEFkZq9ztrFx7SSXr8n5rLCfxPH22YTGUqKCTmf88KWJkGvP37bfsMAVjJK3iZ1p1C",
  "key12": "4fujUa97fNu2Hcn1vKk296wpzVvQMeqKYsYzyd2kdqPGQmULWvDgY4n1uqmrUb9ppFnNPaGZwJUjodFfGM39sgXh",
  "key13": "5sd7CKy3nC2hLnzMjKGNQpcWmEFnMpa4TRXgHxHTxDDHJUrf9fmZx8we49Fbtz9Tr8k8qpzKLbxCP36UbXpBdSuj",
  "key14": "2ECUJPjxvwRsZ9twGuhvxXwYEVLq9uHxWDU8aEP7fRzZMXiXVMvYwLccem11dsz1UkcGHRyTnfe7D31GSSpNpbaY",
  "key15": "5DbhwWqHE43tGw3JTqYH4MFgAUE2xpWhTBb4kUYqJoFsKchkKCrwjTjNoqcr2W2r3kVXUMmkCZd7fVMicqj9tsQ8",
  "key16": "2FQzRftSShvDDYVA8PD4ZnDBWi2mLHWi3comyP4AJ4yhdGsnAxCHB7yJzoGuFBS9X1A37RXRJ2egz9bLkwFWxi8t",
  "key17": "2ek3s8RhJmBzXHrkpGgVpp6218jvdKDj3pNdXgsSuK14Yn37zJisR73M5NiC9Fr4uCQ9r5kp8DakUY9ohKwvE7pW",
  "key18": "2MJvPgsNLSR5ztHHPvC28E5WNyzV2eNdt2KAURpMdtM6dKbNYftywxYDhGPqEyUyFkG8fjyxd8h2sT35U8GmAUME",
  "key19": "25EABo7Zjt7nACPXJgFvGTqHcR8TwL22nUnbpYnmPEcGbe8Mej1yLWzKDyNSM9YKC5rNG3C7TLAQ3rHUyq8hZo9v",
  "key20": "5YXUn2SUFcUtuLaQr2DZPPKyyZmEWKifzMPVf1M4ANBztE8xWjHbJnYSEUxskB32JB7vUMRFGbixU4cR8aEA2Njd",
  "key21": "3VWcVHMJgRMbM795evmk2ZrTmfkC7ehzJB7kkpy881hbUZpRciXwYJYFL7Kk5hJNnWeDyGbZhKXuxt4b2hbxLivg",
  "key22": "bL9Mxb2sQG2cxeFCHapNEu6E9ikPXtb4R8xmGubRjT6zV4DZZPK44J3zRRp37QDSBSnwnwXq8NDvppiF1fJjsyZ",
  "key23": "5rdAFpiuyPcJLaSMTCTUcWPd37yajkXxdb52nRHRj5AGJus7q1B5yHtjJdtxNwAXPYSxSfjrz9TTcpTSzameKR1R",
  "key24": "4cotH5AR7beuZxKhnXdjXatuAK2y6rSssUtgT9YfcuFpN9qywPven7SKKWPvA5ojshCP3jhCFxu61NedHDPUakgU",
  "key25": "2SCNKmk4fHfSVpLjUgKnNi2oedoMsijESoACbohKgPgciWreuwXXXYpiUNo5q4RnCMLz3cdbRDKhhMxHGmnDvPSs"
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
