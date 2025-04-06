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
    "5ErXj8hgCxboZyEvgmD1F5P58W6UXLyqdKyLweCm7sMX5gS31XbrSAA8V7zpw9ADWvFWndEs53NAKC2rfUJ3Kv22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wM2rCFJCLuq9MthSEALx7C1PiQHU3KD6TqwHDxcLgqQarJ3H7rUZ1UPUEdec4Z9qPUWJmEQ5nq1gxU6qWQ1xuWq",
  "key1": "3SNRsaTgyoeLbwFWnURdkR5bgLsCPZRQdcuUiCYGZP71oZu6EBsxnUfRi1kvXiSSEQNTRK2E181BH2eaVvN7v5Xa",
  "key2": "2UzWtuYwP9bYJpw1PqHmoiw9nkri7fBVyCWxHSD8kbaUAS9ovb5ZFQEch2ijzyJCpzsPYfkU1iwLhGBG4HG733F",
  "key3": "3t53jCgRPAn1ZKb3i7YSkMXHJFASz91kLpLTohFVKwDRmB5HxqJZ7aiWYKTNKNR55ZpTjYScxt4zbJK8UyYCqvcf",
  "key4": "L1qE4e7mfNmcUYcawctwwwrfzuSZ4Q9M1K3BNepGgodSmCjubzoLXRFcw2vK8ryJri8s4rspH5T7QHokLi733uT",
  "key5": "4YtkbjY1zserBKyuiNMUbkYfc5qcKGJ3A9DHeG3rBGJGxw5tGvfsZL67SUPV2ToVk9oMUgB2KnZsw3P2QnFuMyuH",
  "key6": "3dAmzZFaP6rtieJXDbeQEzHvw7NCh2xvhmTULHxNAsD5j7Cmgo49TUoqcA6LDmyK4puxa5TCvxRAJPXTjm6pPvFM",
  "key7": "3DJxeMbi4SJgb24CQ6Zw93PomcrKjjUH5kt7hsyfZC9ZWsqrjczpcPMumwuNGE4rim7Vs9nB7yaqTpPJc868fYxP",
  "key8": "bpWq5YdpBrHUtzZRC2kpU7ewwxgLaWzRrfTbr92hY3CavyMD8iDh6Zh7tqpd9mAxAWMYt3qnBHsctKcT1Yf7aT7",
  "key9": "2477G5cuxmBy49cScTRqwQtnDMuhcUekpBatd2a1Eop2ewVD1w9TEreJ97vrDSUV1ccbSnEFKEFBHJZsJPftkzcJ",
  "key10": "QAVAPfyXyq6DqWgyRNHgXpHXypBwSWifyemJUUMYmyMprGzQ6xXhvDiuyuKarwnz3Qi3zyRKQjoDYQG4HjrEqNr",
  "key11": "4bDAG8vX6B4NSG9ifwYnaBmGuijxX52TsMcaxKdYsnGxQY7ETA6j2KwrsmRzykQjk5ZXUTHKZjtYunWvoxxEcQEh",
  "key12": "3bwZ6xo5kE8ZM33En7zuyiGYNEsbaHawaSpLweM6nXnLhPdyPyNeiNNX283LXxdjVGjgwrSNn4DHNgyRFS2qN9rH",
  "key13": "7PX4cEKUbWguKHfZBbAm3LrZc4EQ8syANoKVqZ5ca1zTQ4viZbrTwy7mLrpcYbJbWXynFaDVg4CXCtmvw7NKu4G",
  "key14": "2feT144778d5SJhhAB5VPDZouPwBzYbHXn8myJ4KRD1fuAiBdUcWDWgzLFn1jPisbNnthDP36YMNcCiakzyeDMKn",
  "key15": "2AF9KC9WHEejjEaU486FDRLfkFsrEuGP1Lsryy658aYDBPQj7QeWn4ch8y8bAdmsDxsonz47DADhoXxepVJPeFXr",
  "key16": "3tXsMU6wsyZmzjyGwbhGzxe1eACDaaTnAwyKFtJCxQ65FQf1BzctQ2UKReQ85hLkgQureov7bYAPoPeShRLuhzTH",
  "key17": "4VfK7qAVaKaxMghbpk3p6Kr4aYbvVUrnWw9Gmx7qdSDJNvFWroqiXH6U6evcyeZxZtfRf6QBGziyzdKxyZ89xXTk",
  "key18": "2uoZ2NLi7Q6fjF6oZoW4F8dRAv3TwnAqhonnTm3wtm6nmfSaTEZGqxQNsMSWJyQWqRWXyMD7iTFBDt4kv2iC4UL",
  "key19": "pqgdLS59hFQjJUK2LEmS4ou9CB1YRz9JPmzkhxozSgQs9F51v5DBzLFj1n7XNo7eWMZSNrEBe1PZKahy6T71qTw",
  "key20": "2wqrZK9waxsKzma1TLhD2sx3WUbdYiMEK7oWvK34N5mgvZLhSEe5TBrX9Sm1wjwcxkzM3NQaYgxTWKb5Dc9Q5yZ5",
  "key21": "49MEEnnLmKdp7qNdijBRZ6XaQRAyyfmov4yQggBCh9Lif4PwYNhsphwcP6DQbgqG9eBicvupVGcdxNWksnA1UWzH",
  "key22": "3LNBEUigESALXbkNLbYY87kGzYfFWJLy25YqF88pLQP3wdvrfjEGnKh4VLtD1xnx1AxFYbhrXnEUmWumk1dHZZfX",
  "key23": "5SAJ4s9SuCVxmagAhzwdHHo2SJCLctP2PH27q9dDJLFkH7nivEJ9syapJvUJms2K5JNo89SyZ3y1GnuCtJ2wRug",
  "key24": "YSxXKqLStbFU4fkx7hEXuQDWCj8jwFwSNWZMxkCyfxpRipzQkXo3yLVRJNYVfMyz3GyMtgUhhydAWw4XyssxSLS",
  "key25": "4mXGac5QfMpn2zHmiZrhkX5QJyhRfjBQeHSUAqZqFpiyubUkiCv6d3Nnn425M6171oRwNrfKds4Hs8Fwi6BWiBXL",
  "key26": "po6xUzk2jp7kezU5Ju947PrRW3rVTweFVxXE7yesH2Q2GWZaNv8XxszSwPxTn8hLY928cz2Z7MQqvfs5CCyFnWs",
  "key27": "5VJUHJq2Yo261X8SUqJCqcfwqkCDeiBUJDj2cjaP2xoo5Pi9j2Rgro2ctv8Am7Twh8gEpzLZ8VRAig7mPm18EJuR",
  "key28": "BJDzoTNP2qD8cSPMjpdDYCsoF1JZUWo3k9okqTdPms7Vhfjw72bsX4T2EiWFcn8usLFbBB3EF1vzk3LPTSNSVMM",
  "key29": "5Ceb6BGJJNYCQcnmzESqQugnwm2L2RRPNZNGyhpS12jHrjPdL78j1sqGG4xbyo9FagCeHzKkVc2d98tTie1TcnYU",
  "key30": "pw8gjfsAZ4ip87KyBwyCRbPdMdTzXb2eTL44JBbM4HBg21JWh3FjVmjFRYJXf2b144h6PSfX6WwMHx25ixY73C3",
  "key31": "2Conhd178kxTH49VqpQ6iaRrmJ1YYjEWAoocjAhYMfpHpW1FGzRdYQ2UGuyMKqMKmM7buYuFzPf9MxzuBkPDP9QQ",
  "key32": "5po5r3YyviYiPhmi3MBE7WDxve21BHZ2dDABeizsovvMbCJPW2RzyUDC3q9Nk2tRp6DSN2rtCF4Xce2uw9jEdFJ",
  "key33": "4vFCfZrRivVEpP6i85HPtg3NhxbGy1nEEPm2bTT5g7zkiQC4qvJ7zgipn2tNVK5VcnWxpXZK7JPqw1yHA9UwjDb7",
  "key34": "2EiBx8YwmvtRvDtHqdhtV5maZFeR4qntQ9emcjs25bf3K6iaSdLkdBHGfxGgXKyS3ha6BFwo29csr5MTTG2ZmicR",
  "key35": "31djG5jsPcqKbtX2Rym9FtDAViUdyV9ZdiYM1zNUCNxNpKZuYABc4cfxoVqoLSYjd68jFmpzyLS1cEeqdPdVMkaf",
  "key36": "5hww4yAFgYdKABz2k8TyAKTAbLqN8URJXviNRRKscqKYi4Mp5KynXxzTB1r4ZR62cUKJM3ydfTLscuY5qeVLX8AY",
  "key37": "7ZBzvefwRazJtp5cLFj8TTdXnFGipJMA3AXvBQ3vNX9k1QTfWQaGoamoZ5ePG7nMp5Q29Qu3emmGgAEcZn8pHMt",
  "key38": "2iKS5ZVd8AFwGnGcUaS8BKzif7f3y4medLGeowK9LEkGXCVjcoVSkZM44M9jAtQ7JLX46vfEMk9vPaHNDGeDEhJG",
  "key39": "2AtTBfPXyXKKHNPtMV78uw4c6G3GGCqaqytp7kgH8xkXEkDp79Yvjtb3xoULW5QNaxg2xVFDs2XXiENWymMFmy1B",
  "key40": "4NhCzfcxxNfdd8EBVMh5wCgueE8RQNpPHAmf9U5T1FfqRVSX9GVcbebgQE5t4eKikHKAhZRdEM7zEHGEM3EoBwMS",
  "key41": "4vF6yAfXryH2o61HkiBUVZbtjdsbh34pxqJkFiHagNiLf1tfX7o5aRdEBcxqeGssVF1BTSdUDZeMvSboewVHcLnB",
  "key42": "29PUF6kziB825icCguAcWJdFALut2jc4tr26pcT6zT3WnBg1sWAraUBFaNmHhtiAmK6fF8XmsTTrXuecPLg43v3t",
  "key43": "hnPh6zgLqiQAt3MAG6giGwL2y81hGDwGreoRTxpZrDRGHosvDBS39e7oJ27Q8etygnP2ypkdkHfX5p3hh82EUGq",
  "key44": "3rZU74mwBkanKs5KFohDgxQtv8MY8cc1otg64GgDrBpNByAKu6nZ8UyNRejqSKyE99KvVwRCjvoNY1YDNgtzyHU8"
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
