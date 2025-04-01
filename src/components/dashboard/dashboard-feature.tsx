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
    "uCgwGyAdyJteHEBYdyivmQN9NvfHc1LfvFoXQ6S6g3kw4n1bqm1DhE6fa2fPYhBcasHdvD1xZuSkQMvbYTPWBuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s36YM9UjpWujaztUrvAHFdN71tqbj3viSntSCefPbv9izhjTpbzetxqaj1dqr8vZdQy8n2fCZQtrhHs8TaqfMqu",
  "key1": "59FmZXaKdR78FrUi94ReTrisoxNPeS9fm5Ky5jhA8fSPoQmM32xBEHdm7cbqTkgHr3C9LkyHXG9PgVLHD87e38Gw",
  "key2": "5kq35qGqsXyUUxyM6p4C9iU3yerRLAVuj5iinxf9GrW5CNTC9CpRDE4MjmUwWLTfEic6pCtieTW1hmHDAKGFyhEV",
  "key3": "3J21wxLCWEPXinRdhh7agFcURqFxnXb9nqPViszv7GbThgo5Wk131JeQNs8cZA3VEkDvC4zqhCEcGZdWU5dKAbS6",
  "key4": "45eGyyo76U5LJggR1bJ1b4cEDTe21azTYSG6HsD56rAVtri24XkstJUpYbToH4A72KfpzZ3ps3UL7JgS6kxhcNQM",
  "key5": "5yJ2vfzmPSCrygRWWkvBPJfWdq8YV6senSPPdbaEhGHk9Ne4XtzSAiCYMrLkTj1b41Zb63wP7ZFMqJSDe1GNM9df",
  "key6": "23Mj9dsn3ibzFrEwS4yuLKLEcpaXaMeCZQ67MNErdwcXxFsvFXrxXmPTScN2UFFAShx74JbVbrEWfNufw1SE187j",
  "key7": "jWGKdaikzuhKyGbGnLkT9nQS8k94gxeWyqDUNHHebtdn9FrBhtwAAXPvy1xzXPAQAB4SYoivuseqTsfKp2ksVRH",
  "key8": "iv1KMMk6xBymHTnCSUZRQjsxYthU11m7VZ2ae1CQbKjhkA7Jwn9zzMFfPQdv7TbHp5RomUELz2tXZtvDhapoRfG",
  "key9": "45zSDsdeYmWNjaKbZcZKhdExBRTPkKX6nfoJVkTnMWMPdJZmGw8z2cd6TE97ZS7mfehbwbnUcRVECySb1mDz2yN7",
  "key10": "4SBQhKocRtfAcSSRTQJW7VAFhzSELUHbs3doskdiXD6v6Sg3vqGXdVj53ev9gosXYE8QaHyawFdmyZNZc5gfrmo1",
  "key11": "5guwQwgSSgqwfWo9VVmoBhY83bR7TGYFhG2yQyR2v7S2S2ohAGfRSTam6GWhrFjHUjV23Y3kFSHnGkZrRvAfEHnW",
  "key12": "3Ch8VBs4W3aRzCBkQkbFjRfM1LCDu9hfXmBv3UCXdydgivCpM2p5wu61D55BQKkRiAyqpjHXPXn9yzTbb6wBhcA1",
  "key13": "2gxfJT3Dx5p6vVGschKsmu6wfQ7tGBKZQMey5c6E6grUwRr1cTc1gcHi2uhho6c1NxCQQb4Dpgtv1pHLaLq3M1G3",
  "key14": "5hyDRXYrt4jK5UaczkmrVAyrqvjAHa4AGDqEN1Vmf4AWBFH5xiWm7fe2H68BrCEdFgHQ4hZ8zKBFVu7dAB2rcfWk",
  "key15": "2fjceeLYpRVTq51vKhsu9szCzArJ6pAuYNdUPcgWWoTGcGhvuBmEn1qnjw6PK96fWeeDws7VCW7tbcnvTDTTjdbi",
  "key16": "4C4xM5zhfdRgmcaUgV87iKBQcPd6pmZF4GUp5yjqcCek3zMUSyeN4ehBa2gq3BupdtmLTKGzUCmYBCVf4zXmCpGa",
  "key17": "64eoAEAmin2mk1ReyoskrKX2qmUDMb852xmDyX8re6XikV3CYQ3meQP9m4igWAec8MaguNey2uCoxCGzUwF3EqsR",
  "key18": "5BSjbxPe3QZn4u9QRTivzXuCEoKxmkXszu178rQommV3jB3pSBPRs4KBtG9wewsZ8nz74SN2RSV4WXTRijvxEe8E",
  "key19": "br2dTUcXZAs5P8YMiXu1UEMMTLpwthc63315rkHnnJ4FbAbR1bwV6j9wjbzUEAt2a1qcqvFAGezHKjjG11UvbQ6",
  "key20": "33WGbDjXghka3KySs9d9pBekcLcjPmR8VQBhAnTddQQNYBJiXxSM4nN47rL9g7kiqiRqPisATV6QD1QL5uyQf5XZ",
  "key21": "4aYYoXtQ1JFTZhvQ3anuxH5r6DHDxZiAyEM5WiquKU5et99J1reZJCK41BXF1jtRdBorR4jUgMvct5LtNzG9TgHG",
  "key22": "cxNfpKH3f19Hqf8wZMUuvefffkTxvfidsSZxoCJugL2AN11C1atF4KLwPQW6t6viXBuy7ee95w6LvKXTDgQgr98",
  "key23": "U4AvfvU9gft4U9HBNAEkrYbcRCb6CMPQktuQvYDYPGNtS9kiaa3b37tE8p3mjGUvy2yXzo8N6sdzFbzYJTUBi4M",
  "key24": "2tyPZirsAwJpvtEBe4rwUDYamJLqN8t47A2jgqdfCAAy3EUaSM1duvyyEXPtoriYBFWA5u6NKEoRkd32GoTBSQbH",
  "key25": "4yjVMY1x6QhXwrA4kNR7YQMXtBbpLhkCfmfhTWtaqJzAUUNVEJeUBTrk6VvcVgrSB9DtKmB15gSMhhCQt1Xr14qr",
  "key26": "2XJyVY5erjh9m9Vs8wiUXbqMKh2cf2CeMgxUk33LKHsZ6E16iWuuzvUe9sjFSoME1cMsVtcyN1Nkg9V3RkwhGUaF",
  "key27": "2JXcyobxmfvNCutPdfMXjakE7iVziBacsfFrtxjBe99QpPzFWpcYx17eH77Ko581vwqW5deGY6E8KJDxtriyZitp",
  "key28": "56aQn7wbe1zjWXYrL75Sa5YcnzdG2UxUjC7MRXwe5c92Y3gUyPjgZfcLcaf3yfuvU9MEQQ5WBPxyyzhfbPiLDaG4",
  "key29": "5o1QEDKJ9fQ2JDybJtwt2cUYhfifNfCgsXdYLHqpPcqKkJs3RGQ83ctdro887orh1NZgi1aKA12vcQze3SfjHqx3",
  "key30": "3Hd3cW2U3VtrFL4nBS9iccuCiL8WduBAD8qhBw4zsLam5zKs35hE1869pvDdYWZYh7LqW2RJdbcQnFwdjb9sxjop",
  "key31": "3s24gDp15ae9djAiCaxbfZe7FDnvPWfXNRmhM7qkas9pd8EGAXg5jzMqK4eXHZcW1ij5bErhVqi8EpfJtiPSwDyQ",
  "key32": "4nztEht2Lxqs9XPetnq1qa9NM8kphTC5iTxDvvGo4HWtUChamvzqWWNYGPjAQTvyLr25YVof9746u9a37XJu8h2c",
  "key33": "63gAZkiTJQjc3eMvmaf9LkC87B8VqWryfyHy7xe6GzxPUpJGxPCXw2xaBE2S3HezEjveoccdxVHf9wfJ7KQUMN6b",
  "key34": "LDffPU7PvkfPrgd5Z5McSpLp2JgCmhhGT4gKEsgxBvkrxm5oP76WUv8oggeHtr43x7327pvM2kyznD6C4Pw4LiE",
  "key35": "ijBgL7RRDN6h1CrBPpLwV5xHxy3qx2JbttndLuxZwZDRNAzyvYx8gQYCWDqHrYDFLf5YXjF2LiVkN6u1WNPbXmi",
  "key36": "2wqUEYqYRbibPctyk1mEvUizFxrXND4sB1frqdQCdhKAh7LUH3KpKin9v55dv23u4nxfKwrbjEf68FjaY4TWD8eS"
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
