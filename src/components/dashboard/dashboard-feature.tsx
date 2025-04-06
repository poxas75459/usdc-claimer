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
    "37JSPCTpKa2ggtGwQiJUieJ8dwdyQ37QrBfe6X3DEHB4B9UyaaVtbowBrQGCkLfdN4oJeFij2NecdMYHxqToyb1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a539JtnCJgYVjt4EtAggy4JZXUiLKfFqGeuJ5GyppX2hf7MPywDdcFruVaEaDBUyqiPFfF1AUwV9BDQgPnfLfoq",
  "key1": "5CaoSXjZpwMdbbzitsATSWrifcSdVJBzd9Y2GuwTTscMmjGXuNnno3VcPcu8pCNBrAwHer9cQVr8XuB6KWUkBN9f",
  "key2": "28bF5KtUaoqyrisKxsBGXL4fqjFm8vE8R1FqMzX7hNQ3Qt9rNrfQdoKB2s7vbYLSSQZZJzZjdEGgJu6XHoewoizY",
  "key3": "4PHRsWPd7JMLFwdqDqxNcRWhaQj5WukBEB26mVpHxwiCc6ZarzH8tJEf18B7k5PYimQL4idhrJtSCLC3LiurcdMX",
  "key4": "2ejJLB8HBLPUUB3Vx9hC5qhpNjmhargmf8m9kK8a5acTn3NBQBqVmHSA2Exm9TmUNbifsF9fUMFJdVh6RTFHBHUC",
  "key5": "4hcDiTRwtGmLdAuSuhX95x8ozKpoPXikNVLGdrpB68362xC6vKccsrTvHG3LkcJXbc8yKYaw5hcHf3aFtyFMpyPR",
  "key6": "66624ukVeNTnGczaRwQJRYDnpuvC9ims7NWS9xLkLLeG6PXcxNok8znc7enKkLXNupvcDd9qvAw27XZxckGdXd95",
  "key7": "LUVjaqAb2YvNDMThzHqb6rp36fhVFtn12xYV9GHSbLtRTNU8SJLbtH5Un6Mrew2tk4Dr3NNYrMdE5vs5s31r8qc",
  "key8": "2PHXNt3pw75YFdwW7wHcTm2EnJqeQZT8DUtwrMZgxv2nc83Y52BVfgFd53yJXisYDGohSNN1KKZJgzqRcd6PiZqh",
  "key9": "5n5vbapMQ2drsZheubxb2EuczVTfdLmqdZhCEinqaCabp1xp2trze39hwPenBspCRdmwVrZGiQ6mEz5REbgCVCiM",
  "key10": "5bgfqyFfupDNbR6jZSjDVrffnStmF6P1DZwSmXLHBouPy4bnwddzg9A8Gbg8dmaN7sGcXwtKBwsZaJ8XZmUXRMuJ",
  "key11": "2GVZs6Ck7BDL8h2c7x476mgnBMzU9uXPD3fVCFtCocs7UqKfo4Sgz9qUADs9ZnKnvVUpM84wheDDsSa54KLprzpe",
  "key12": "zc4bPDnkdWQgL3MgFGkQZLkK5zeVidYXtys5csiogLj5ccbwfseFcoZQvh6kVf7FBhCtBuQ4qsr26nEFjb1qYET",
  "key13": "33qUhBjVCZ1Nz7nVjowjJahaNcqHEzPHHZuq81Jcghsv8mfM3GCvy3EXUaAYPMBm9Fhz2FJT5XsBob2i5LU8um4U",
  "key14": "584jDqUdnsfwbYct7rUfhqFG7dN1K9Ab4PM7dJzpwXcMcKXw6TXx98RprRDEp8oWT2E7FBL2CeKUfCfkRLXZjy3M",
  "key15": "48LhQ5PbPLKQcyNNGBZ3mLFf2ex2MwcnUvk3S2uxW9Ct5RjQD8Cfyr9HWHzBLV4xAWFPhow9fiUZ7mnXcM5EdPsr",
  "key16": "64VhKr3qSq9JPaw4YpNETc18LmCx4kMbXhBxYs6AWiVtucVuUyt1UsMptUprVZ7yfcdLwjbDDV5onyMyPX3ZQAAo",
  "key17": "3kRcQTZgCeVMbTevQaG1GfF3eVuriWpnFZcyFE3SD62SEC9azpwBQLW8RvnJAcSrhnXR7LojTszNHqZH7wBLxmxm",
  "key18": "oZYCX1KL39bwJNrjWoqMuMB4SyLdJHprR4SdKoXRMk23snQRxqooDghrfXx1UNru7CUpj6722xAuWzNwdLmT691",
  "key19": "2M1qUomKuccxrjfttb257THdX4nwq5S5qQmraf2iFopViPC1j8FJdnCxVynw4rB5xZwn27gidUnVXsEYaHdroHGm",
  "key20": "xz2C8zvZDqogMPWvu9QbSBtC732L3zvzdqCLZua92ApJ6Zd2vTbzBWDrAyg62yLCaATALRCWcMEEY7qGsh2Fm9b",
  "key21": "5ePN9yQ6BPthkR1koCPNavDTUVGYi7jUmDRWppspdSJEjFSEsrKukFmxDkbirrbcq3pvR3SgcGng9pUQQud3hkFF",
  "key22": "4uU14KnwqhpPtYisKn9cEbDKeEkDArHiVZadBTJBTrV37hdmTASj5eo8CHNqRY7fKoMt87igyY2FwA3d3ShtQRt7",
  "key23": "2XBBQ34sGW7RaQVBpG4Sc65nLX4QJYfEAvh3AuwfSPovdnDDyAnjjTcsHe2UFQEArwVeTroNSN3Ag635nK15uYWa",
  "key24": "5vGD4En5YvASrBmu2hvWMkq3G9gtfU4MMkAB33Zpibex5sGM4Xh5bdaqeVvTP5WMgrCVskDrvLXUkNQDFBrZqtJb",
  "key25": "HtpPLkKfxfU4net6aQTXocsaEq1y6gLERU1QptzCtFz5oaBpj7ziLvALG89eAbaR7RmhGbwa4exd4TdZpn4hY9B",
  "key26": "4uMi1vjUyHFWV4FqQK8NyjHbg69UdNxECUe1xhfqd5stvL5q4EHjfPQTMmJP4mJ9c1kEZEKn48QmHbmTAEZnZFDy",
  "key27": "keYHXDYZzCVFeaum5h4gmg5mVej4qA98H8ndqVjiQqLwyXKsanuYGhSZqHX1Sz2vs9UdMVj58zAESCwtmtzHaYb",
  "key28": "51SLEwmcyC9eaT4L1iqVDT7T8A2TFzwZwp56qoJKt5FUw2uSqJdokJrRrbDpkpvagcexvMrYf2Wn38EkYcmxPpqD"
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
