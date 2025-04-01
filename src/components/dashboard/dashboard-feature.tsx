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
    "3RZy16nrWUfvhdNJtcUgmfVSsC4woyrmi8B2RoY8KzRrFwo2NNy7J2NR4oikYMoNsFpFZHMPTs3MC9dJM9wU89z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P61DMAKNgQF43TgnA4vEXyQeeUugwcn287ii5ZYXazaYnfGuRWBpf1crEpTE2GNSFVCdCeDuLr3YxfxiCk2jqu4",
  "key1": "4z5M4ui8U35Dfbf2SiQEu3zK9gBwp7aJ2WtfdgYi5knJDem5QUCjVvtxpxnoJ3VmWAhXQpRUfGDgFGxRszRQ21yA",
  "key2": "2Titdy2UKi4ciFLwaZXkRgyZukCdqgsZWoY9Kqt6LBYwnUdWp1Z4hD8iKw3ALq9zTKbr9cY1GexQNkCCtTnfDNbM",
  "key3": "5dwYbuVcgbiwosaR2gQHtcicZBsaRHfeWMC76tvUa6T4kLDiisuY4wiK9x8GPZj5ZADi1TC4Q8asH2niVuV5LYEw",
  "key4": "3ojQKSk8URSLyGys2mth1eBfn8c1x3HcJ4vUi6XTd4Yv96Kbwig8N18i6szanoALNsEcZTgu4tXZMnhW3RisXHPM",
  "key5": "2ENgoiTqvqM6WcvzVbRv5U5c9rZ9urRWgpCCgqRWCwPANFZ6uJN96oEcdSbDiYgJEuDxe6MAjpxMS7ZP13Ndq5Ed",
  "key6": "QTtZXcbqWuhnUPL6bzsRVyVgW2UEsn71QMJ32z3uUo2vRd5VVnMMzniFrgCZYkdDF5UhCbt89KrW1Sd5NgSwPwm",
  "key7": "4cV96AoKYXtuN47e1vjZ6mbvaKxbLph6Xmsoc9yTe9uVGMQmmkJQTdvkzDYPp6dpATVJgfNgDzuJWMKkmRt7PohS",
  "key8": "5G2NtTsAXqvmcQxU8gKRfV53r6xsCDLzeR3VbU8XvEJHk98Liid6JWYufGLwRF7owfLvBU6uGNrBuQ28oPhXRvsQ",
  "key9": "5dy1orqkevMWxyiUiutxdP7NVZozXNMPh9pHNJW88mkw8d7sV4EQtNhhF1kPdEU33siQRuSY8sSteLAdi5DHcuNS",
  "key10": "5bHdTrQ8dAjVrekq8nMp9kf56zmm1aoMWRfEHRsZqed95VftL8XRABRukCstQrRTTixya2XHZZAQ33tf1BbYCepH",
  "key11": "3rtBGG1BEsT2mABf82bKALLuNXVRGudxahc2Jr6STpVGJRqeNPH7Dis8UTXKdUQFNfgt56tNzsAcA47zvFh4sr4W",
  "key12": "3uiB4Q8FaDxPVcz72zu8Um9up9fQpc5C9GmTGa8jp1jUdp7MTCkh2CBcujUu93fXyZngNpx1XWDJEPERKnQqRVu7",
  "key13": "byubWwWBXpoM5u71djq6okf93bDdmnUNxjQEaPSCiLiXL5JLpNb4d88sf8xFAwAv4qu63JEUQBQjbtJLXEKB79o",
  "key14": "4vYFqaNp2tWZqMjLfuXwE1DuS9BNjjLYFGhmgmbft11ehCfn2Sf7hzpybVGeonR85Tpg2dYPyig2VJpS7DeuEtEk",
  "key15": "2sTsgVK4ciUmRVRoWvvJwD4rSrtyRchE67cyugw17vRgKBFthQ11jRu6KimuwusHiDHpWiQYr79xrgHo9YfapoH7",
  "key16": "2Ah8NvCHWqkjq3SFqLDRve3xAhymxkKi1tSQmfPKmvqCuMQjFJ8yUEbqedHXqCK3N1YZ6FDq93as1e6syAfXeCzJ",
  "key17": "2SFTzB1tSWajCawazZkWQF5vnzunZunNh9KoZgNTxd74AXfshXatqcnpz6DDPPL9wqLe82ND9g8XLZWjfy34Bbgk",
  "key18": "2rRCA4a1fxibyhMmF3YTQxi4xTEvpzBkETGBfQoe8gpw3G832MZJpiJpawgNL2np1HB15sfo7g7P6dhxoEXCoS46",
  "key19": "4J4PtKuwKDSoB88JQfKokWXrRmyxqoUCLitkhMnTnzYjXrFR4kQdYyru6SJ32zGrQp2ui7Qd58qkcyJrMLSDZyev",
  "key20": "5bcopj2zqDZ4QBnTDvYSPR85CU4g16YqPrLPrxhaoxWaAmSPBH7NtfN46K7o5bmNPAwC3epaRxCxBh6JSUQRiaby",
  "key21": "2Yr6eWtFWAG6ydcp3g5srCqoo3ERzkfHNPcHxdA9Dj95kXTFoiyaDoFLzU6fbnB2abftEY24YDkjzgTgfPnhFiHk",
  "key22": "55CQWfWRhKW29M8RjYCtYzAz6yRT5yd4RJEEvFeZEtYsa6ugbWiwmrAkpCPPFJhQuooSzASpv7adnSZZsnHJZYm8",
  "key23": "5iEPXN6Cw2gZKGLFBrC5ZksdQ83vUKTKseojPXPYkkeojY6eRcAmHNJULKKegBtJdgsF7zRvSdBx9Y5VoA1o7Ars",
  "key24": "2rxZogCKVUQaND1uUVtUJGAUm4Vtf2ZuBR96JSep7fEKTpbFo57V72L2eYRyUW7D2QKspHQS1S19xcbDnYWPNDLT",
  "key25": "3U974Mx81Bg5zkDGr193WuJ1fFFWNP42HDQcj9y3iaBZLi9zPKd4dzsGFjGsuX4XKkiVFMM6GbpzjoSKKGyroxxi",
  "key26": "4pQWgwzg6jc9Q676Rcn4EKFD8E49Jr5EaQy7QGpyXCV8Dkz5kgXy8gUvJLnAuK6mRHtWmtkY3dghFN7jweK2q1zE",
  "key27": "5zZ9uo2GnSRWjNFDtmWLLg3mjoKQ65RW7GASkrb7cGYiTQa6Q2W5u4WKVq2uSJb3oVZtNSUvZu7YTpebPEbaB6DX",
  "key28": "4C589goB1osmvUYx8cgbhB3pcF6zCavXrcacip2pj6HaUhHxfU564nXk2f3KYnzuCdzfVtM23FvsDHLgHB2KTr13",
  "key29": "4HsJ3fJRDHM3GmLykM8diTJSzyMxvVSmuF8VB4aDthCaVygYmdiG5K8KireS8d5qEb6qw1F9e8WQQw3YPiHWq375",
  "key30": "4cbXrFZ8jKkfxB6S39Ta9kmL6aJWEHqAizy9FUKrzW9pUTDSe8dQ1gxLLKNBVmDiFeSYP2p3rsge72BB7Nb6tUoW",
  "key31": "4JqowTGHGB1rw9RY6CTfd3NJTnS9p5KJXbzr4U3KuNzZ8bQYrW83HAtRxF4mh9Brj1U5stCW7hhzJuzJwX2AFbXM",
  "key32": "QnKtNmLhZEWJDNWUmbT2LGNTqFbFucwyk6Z46d3nreZRCN2ncsWLFGwuRGyD3nzTd9V7bdxif4sw2sU6Ehu7Krj",
  "key33": "2pQuiey394A3kr1iMb1eTdKFhA1iV123xrCKETf95zBas9Uz4QNVBXL7yZMrZWqHFSC7S7cSkSkd2Tar87afbK7H",
  "key34": "2EqNgc3sCSzL7LzVHEFiWzKdQ6BUmotBNXdgGVWXqCqZKutCayQbZU9m2CCRB3zgvMfy4DUXNtxqFpSXAHacp5Md",
  "key35": "3ZhpjzPfAjJEMvfn4ujk4rvHBkf9Mi3dftc8T8MTztz47enjpabYA4nqiUgNzqiWMR9wAqfuu2nfXJBsmR86aMz",
  "key36": "2fHCKtQbkwxPctKDz33tPjkqGaCTZy1DePWQM6b43GZp941KA6VzZFPCrbiZmWhq2z9emN7d3tcNyvMaQrBUoKhk",
  "key37": "3ZYCbQTJ7a2VYcwpBmqZvCeVNJ47N1XZnzXNVtuaZYmPqsSKptU6iLgpas3c6NQd5o4hrxxPPVYCWSaih7N4roTc",
  "key38": "2CU2XffdpADa63kV7DVGGj4bCHQvHh7m7Abx6vV4kPZ4JbJa7yxHdYLA4QAfvvZ9oXhG8wudasj6t6g6sahRiW4H",
  "key39": "9CTKYeJK6Ytoe4aZCP28Eci77m92hGGc9gFrZFE4fDdZJ5yASGuzY2GPgta1JSK5e7VC2WsBJfNbvy5tm9CzNsu",
  "key40": "3ugif6tFXxWqgekTJZrqqjnFwDg6x6ehJaFoWgX4z2VcTAHzPSkBNd7p7H1LBZSD9ZmLndsUzBpRZFZJcivBVCUb",
  "key41": "5xdhKKW5BQUUYdrAzApv2VhYp6brjjY6Xx6csAJE5gw8qGNPCn2QdwFBPH9DsHQvjTU4C5FG9rcTtaVj9om9yLB2",
  "key42": "4gdm94PnmwDTZSEvzcpPfuDqkuK6ByKL3Lv67ZLaJgdLgnp9Qc8ijKoLvbZkt9qpjPwBLBd3DkA5fokH2wSqB3Zz",
  "key43": "4qKqhS8FLzJFx1oGgjfJqdtotKVTaYTTCF6CFxUSqvQqaAVbZEuxLBnRjVFB5wLY7N4yT1XBjXiGm5QR2h1XDbkb"
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
