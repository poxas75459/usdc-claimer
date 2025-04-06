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
    "2EPaSQ8cc5cL5uFFrir8A3nLh1LN61SMriC3ghxyHBm6GB68WXpTYgQun7TEPzUf5aKgr7BJVP6HQnU4cTh5wdAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PCcGPVdhhAR95aE4G4iuYxKoszHTWVL472wSRN95PDiQUe9kMkrzWtsDtF6CmNa74RVTtzdVM5Fzb92GyLryUtH",
  "key1": "3ebgSrjKEVB8EicJubUnm2WxYm4PZwukn4rePjoJXPKZdvJasBdf2xHsTwcvusEtLyUa3XLBEDb7ki6BWYJbvpBN",
  "key2": "VmzDtoPyCdEGHpZnhEU12jvKG4Q2C7z3SBjrphyiac9wRYUvJTvauaUuF4YzqNojr6f3g8HZWtTtajCvyofqc16",
  "key3": "32TgaiGPFDNSHzyjm3YFwEbMqKCU22BxNAKgFy7rxydFakMJ4zbMTy6ASzkiRkigZFtGzJXvNiynQYRBWxJJ3bbc",
  "key4": "4D7uYkwtbGwSLdvawYKBdQTEe8CCjW4GQQf499ZyqnwHupAqHhxGnBSp3QxRtivp44HLxtZgrWvMzZkKMGHRkB1u",
  "key5": "591ufQ8H1ST3tozSXYkTFW29K39zNnBLt3rac3UCGwFcJQqhqg96LSTwwFKETHe2e4ufFuKYkZ6LrGwHLtJKZGBB",
  "key6": "GSapjWceLegpyHwxQnZcw7vr42Bbz4wPZ8T7WEXsfgpGhi5hXXLtsFsKrq6WQRbHBarB2A8dukx8yGizNFvKJJi",
  "key7": "5HbZxrnCPMhJP1NeL2ny6jt9R5WRgeqz7q1PrwEmaEmhrTs6RzHGi2gq7eHaDq2dF7BxjUXBQw2SrYWNcgYJJSeM",
  "key8": "4U4sgkSeKRfxCR6guvGN2vUfUxhtuPUfpDxVPZJsmWpKkVWVYfGMyeEdNNRNLfJJsMLVSF4bUKNCYqANaLtDpozs",
  "key9": "2gFeYhE4Gi6emJUi7efgEQX5PvnjRMXi1KNF4V3qkVvqqSSv8moS9RVVbSNh5p6BpNqojqodKsSceA6qBzC2gjK9",
  "key10": "3EQUkHzSCwFXMcemKxpRTKzgjdYKgzjBw6zSZ4dYEKU9X8eh1GVpr5qZ2inmSFSxPhWoMTVX6tUk5PqbwguGQ5Ju",
  "key11": "4Gba7mna59xycjdNctcN44eSeACQLSQ16UubgZX9WEoTGan2QaXYkKHGoGqvVLm3DCZMQCRUX13ry4ET5d3ThMkV",
  "key12": "4aaJ2SsF3nM5pGAfEGR27NbXRXUCYnhtzMGZUdDTWzzBkZPKaUxyVE8kP7B5KCgEPkav1QMmC88QxkihpXykQ8nN",
  "key13": "4DTmTkJpHEaPccaiQ177iJs7NdZdVQnYtD6FdW62UmE9ujYcQAB6hBszM8Mo8P35BZwca79BQBHJcGUfwn7h7PWv",
  "key14": "3yU6vSytcg3o9TcKHqxrJipNpsHGmKagn1KwonZTN5cYrJK2g93w27kyvmvqmtBe5cYNfCxLxuy5UmvRpp1iT8zw",
  "key15": "AfD6AEha1DgqngGBocYwjLFhCZtEdcJ87KBNTSGjSTgZTXxH8XfopML8LM7QgLVRj5uVSfG7tnmw2hSpKGeL8or",
  "key16": "386foXeCvy1y45R2nswgBr9JpJTBQx7ij9Mij6v8vVtMZLjM6j3u3iMpqCVZmktYz9bebjiovRxVpC3LSJLbt4HB",
  "key17": "TV3k8M4Yoa29yS7qkKfxVjtSHbcqDgWfs7UJKqrUNLjST8wSfRwoPriHjqrJyLc4QX6mZpRhQWjY6FQ8k9e1Uvw",
  "key18": "3GokniatW2UQsyKexAbsREaEmhH9vH4hUC1ywAx3ZVprk83KvuDRMnVa1zZMvYWDFPFuG9J1LNzGy8h84B6UhLvr",
  "key19": "5FEGw7CZWsBAP9MeVv5WudUbBA47qcbzTgEUCnhFsipxqaUxS8x1yBQ9B1w5W4mMEnz5SJ8f12NABvQunMxYKEHy",
  "key20": "3UBSUY8ChZSLjrKUBwxbcbSXFXciZ5DGzPcmB5exDn5qS1esezSVcetbMh4YZbJJAnh2Ufa5ryZmYaCB6CLKcKSQ",
  "key21": "5KKmCaoLaFtomFdR3e6JcRn1GZrWCkF58NT7smsoTRryZpFoqk2D3JuPD4QKFi65rrU4kLbqFMv5AdUNc9bN6KRw",
  "key22": "3XwiAuWjdcPBsLC4PDUXG1uC4xVgnH1ffijqtfc49hbJo5tSA4ibg2Fojphk2XiHcTDAa9Nz2E8AZaWTZG4H61ch",
  "key23": "4RRM2M3b8HW2Npdzngaxbmsus8E3ipFK31AaLod8Vw3k1jJ5ky9MhVtnz2itQjcoDQhynKpP8UDMCZRDcRKDLwn",
  "key24": "4jakvvA5TDnRCjUtn9C3YYgrEPcMH9Zf8Pj2B5fanpyTytR8KnoJGXSisru7jZGH5NomLKpi25J6rkMc3qvVYi3i",
  "key25": "5h8ccWf1SuCRVDYAyL7NTUs47BVAChvLXJxPtZE3wn4GgydCZSx5dUzPB7vbPsA5RyZ9E3dLhdXtTtnb7QcqEkw9",
  "key26": "3kY1Uy1fAL1kRhCjDGDiRnPusDN8swAZS5Zr8xZuAf9hWcoqqdi5dz3iLL8XXPohZ8KuBK4gJhVNhNv9zhWjAxML",
  "key27": "ER1mE2oWXTpoPg3qBrxPUbJWbigbZHMmGB5VSdyt4hdzKHvKmVYEDXmRXF6V9eAL8q3UwoL7WPHLGBr9cokdA92",
  "key28": "3r4Rf8Zou5S6dLiMaMkay5njETvaxL1bY8wgrpKA5XAiPLjodz7K6ExgPBpuVTgAmQuc6hoxwHBB84nhUWwTwogg",
  "key29": "7vaPkC1d4JArw8PzMFgmRsdsGJ6kG25m9KQY8WS5rYc6LWjqgUSJfr7faukq9YqTGkC7t1udcKMuvub1TgjD65u",
  "key30": "oHvq9uYdoQaYkqpREdSkfBxZRyyquVATGSRMSBxTMoMeEshj8PNJFAhfFJ6DFw5fdh6BhDTvrLun2TYh3Uk1uHt",
  "key31": "ZjF15eJEdkYtSc1cC3h2s81fm43chiwG6GGrKs3nEFc8fq6EdUTYdJgVhiK6Y2N5WEpipUarjbMUFgvZm5KXqhW",
  "key32": "6CF4uVQ1yaxAktnBMyZQR76VpZtaiaqwwK1pefQpecMUXbUowqXDSx3k1jP6iYySMCcnCNrK5rTCaFXvUXuws8X",
  "key33": "2mx1VWQK2igx2bgkJdymqxu4jtqzo2UDCyDyXLxfVg87dxQ2oWRVx3CPxjPWbZUQBCgWmBKGra9wkFm9vKu7oE7C",
  "key34": "2AMeiVHQXPyWAXuZViDyps2rPHrpRrTGCa9qF3XtTKU4Zop912DDH3YH4ArJ19X8U53grpfdgYjyCJNigr9W8WYu"
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
