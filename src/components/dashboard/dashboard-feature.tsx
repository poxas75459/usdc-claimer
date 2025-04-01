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
    "2qKjwyrMoX36s41jfk4hiveTqqZG18NN75TMHBPcSHi3cZBSKS7rn2GVkMb3kVC7CaN5yHhgz7cx2Xu2jLnthQcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sFuuKfwsQs2phHLZ5depEvsjFVi4ZKRY51KdxUmmfshFD9J2VSmi3NMhk2PCUTcrUfi38DCb1X5vUsxCsPiyzqL",
  "key1": "4wjzcB9s1A9BDtADN3tGhAi92LhbPLuehy8tokdPfD2auPN91y3CbpA1cVMQ7nQ7jny7KmdBM7miSB87zKb3VpW6",
  "key2": "nkRgWQJ2oQDUs8KeRkeS1GSdFCx1ESxoGbhDLFDnxjMJ16GUJK9BDY6ogJuZtn77a2iW5EoY7z41eYUtLQdSDYC",
  "key3": "JPPaKpopmt232BqEtgt498oF8u6xByNu3cFBMzjNk6ZEcTw6bENTh2MzhepPtSZnA1QxKWZ9BHjS9CX4pSiPUi6",
  "key4": "373KPNpc4VFJpcar2C4Pmeg6EVRgVCCxrxJGfBzyegPXzLVZMKbZ8WU6cXPQDFBGd2rDQtjiafoWpaAiM5LgGu6W",
  "key5": "5e4pnitKSEAnkD1yAXVkKUkpUmKHfv5YicwnUq8116St57ko7EevdqKYpDDvgHCGcX7B8wLKmXMzm9F86LPhNNkH",
  "key6": "2ayhPvdCeNf972zwEjtcHB2VuSo3ehZhVM8XHCPVjXbzmuhZhH3JTR5qqhfx79fVXxdXmZ7JG72tj5zt3me1rAVG",
  "key7": "2MwWVVWo8BgmZnS8kbs6Au7BGS2ct7L9jtsj5EYpxbQhhuZdLV4FWkHYisVyKu7i4naN43oMKNHtFNVewTDN2Vcg",
  "key8": "5UUSzfN541uPTuCs9CBhD2wNLDKj731ozt7yDFHodw47FJGuEwEJpoGjyGx42tCRKwsfGBbGaB44bJzqwDPpWyjY",
  "key9": "4SCQbgvqJchoGR1rwfpsRAFnrxnUCq5QZAYPikBE2foWaMcoe7Q6HhSBr1A8zDNnaD772FWuCJNfmaDgfa7JC7eQ",
  "key10": "28JaGjkaPr86VEBQSut6t5T4KyWgSdg2XWAzm557op4JuiqAk6KMtrb4StPETKfi7vVoipobpVEJZRXLAHtxe1WV",
  "key11": "miyPQT6FesnhN9mEgo7vUQFGjH7mVYTuCsbLG5RBA22peQwszgbpLuVMeDou8zDAYptPqmartHXNGo745mf9Vhs",
  "key12": "4tbdqSo1NkypGWf3k2vffrQEsudjix3vgEtVzAE4RDNHVAtHKseLu4sm5885saWC2sVgxLJrzcn9GNS1mP4XAWg",
  "key13": "2i1shbd2nwoLQUKME9uuWUvLboM5cicWwD7BSf72oBqcsiXRHPNn2NnUs6CLGAfoSQSuKUvu2NbHSyDLXd3HjePX",
  "key14": "36C96gGfP1PcVYixFgHMmAghhSYFz5crrXgSbrrJWjxoQESTerGmw4RA5UwFbbDEzjKLtsyJYXymYC16edhH4n1o",
  "key15": "34ndcKyT7WHoftTFF8NqKBc4RJj6GM3A3kV4EnWZRUuQqGMBFDpLbPTsr6iCLNMLEofYYfSTVzdTChdYBr38o2h1",
  "key16": "dsEdpuZmsdpB4yScBabYzYqAVVN8ynignesxWs7skr6g884Zub13wSKrwZcNnEnymZZZtKfcBHJUQgRq1VtXbuL",
  "key17": "5GRFFhicgorjx9ZupBbXKGVw4u21VsGPGMJ65HW48vAAxRyZHeiVyFWwDvEDAuDSKe4AEmkaax1gBhUYpC22wF9R",
  "key18": "519HR4potaFPDA4KNu6mJZJNwVr785jHpnjnNQZGWNcQSwR9sfCyBvULZj3J7D4FTKsEgAFqkst2M6Qgx9cyEWet",
  "key19": "4czsosLq9nhLQdUntwdv4gS2n6e95u71HhMu7QMFefyRmY7XpSAutGoE7aYuYRoi5tn8jawFrsauxYgPCHSSppP5",
  "key20": "rwk6dgTxT8kE6uWa447cU5gsMQKvD2FN3BXQuEragV3FjVjB5jra1aHMYNqEfVWkizHibRiTGThausiTzeGeEqw",
  "key21": "543et5RC9d5LTRBgQi9vnvqeEgTrV768BYJkVrEJVxvhhz5QibJqcoFALZgxEefgFCuRye6SobQaYMUpheuGPs7L",
  "key22": "pZq7F9Gn4hpPy4S7cpd8Em8k3bDHUeeeqJpKusU1qJX3CxMyamM78FqGRSoRqMN8Zg1z8bSUwv2gPeEhrQ5LVJ6",
  "key23": "smX1BWog3sLzikt6QhBaTbKVSamJeVEk9GW3jLKscxt2NfkriC9tfF7BGKJXjGjh8Dnd3Lk1BtCCE9Hfgb7Pofc",
  "key24": "4U2yJhGuQr8RysqBsPg9bdJApwgF7XRC7x2Af59ftomvEP68pPp1qk7rdqYUudo73bkEYvghdfeanUQ1Lf9xpPNu",
  "key25": "322dFEhWKxUa3tsFBqLD38ZKmXQqudpcZCUVTcw3pjTAp28TB4cDbSd3LC9hfqUbyNQyLEetVMLYwb9VXJg97Vd",
  "key26": "355bfgD7ajmDvycf1nXhykMdPYatHJFnzaUXKCiNf5jNkPZCwkiSwYNJJodmFkmAmzsBxo21kvUHE8mw5wqLTqjy",
  "key27": "2vZ77ELKdgcj1ArpnjKHzxyBtBqbF1owSLoGh98EYvyTzNjPCvWUtcAo4vqyqTn8EB95E97ZEftyihrCDcRw1Hx8",
  "key28": "3MFeZv9txJyhvwtkr2RU34YkUTAMDRydECrNQf4QQA7RsNrZMAgRoLUjAkD1LMK2khLUUJbkr6NghPoGvfxdZQ1P",
  "key29": "41eybGgbBVa5HueSMv9SCrfvNy3AZSBaagh691HeubZwu2v3oMCGmkU4AUmUTYeRCSXPnXcVGffxgGaR3c7B69F1",
  "key30": "375mKyrvhK7GF5gMqCZuTJiBswe6WC5V63DZXoP8x2dRnJ1qLFKuXGrL5iahLycnz7GmH8n3o2yxLZ8WkgXfDh5i",
  "key31": "64mpcvjx3Up1vauMmQZP1GLtLsaob21o3uKNxDAWCjTLLsNYFn2QNEPxpFrVpJZxTzruQzyKznvpXiNfG1oBSFEo"
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
