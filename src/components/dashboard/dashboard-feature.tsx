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
    "432GH7n1nYfrNJ7KN9RcV341WvHpEBt95UKQ6uDWwZq93Z3nPzDXKnZA3TYH8C8aUbibFRdzqx527J9ukhCDs37E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NRGHAeAhqpAVxpALcZwqrPvDcP3FmKBHV4qU8TQaZuQyh49r2eaFhuQgFDJoyrEg2XxRG2tqxSij6jjMkCqjuKz",
  "key1": "4zDdTyWcmyKw8HXF6ViCMZykVTRMj1AXwuuiP6Fo4yganMDD5XWq57ZFtGTW75tPLjGJ2Fbp6cZCK6fWKbA49Zjb",
  "key2": "4wBxuyLfWjYPrUBzgb371V3GtzxP219C2fmHfxFDG4yk4hxRabjAdRX94xnrjNxM6pymq3hCG7GKQrMJYWgwXWKb",
  "key3": "5ThFBBimgwC88aeLaY4rzdXkb8JqcpSSCMnGijuUo65zvrqy2jMpxuad8kcS7pybMvpweJGJybfHBogwLUQmwDKt",
  "key4": "5G2FZ2DaT2qMos1X584L12AhLcmXVN6ysmT36eYbSMMj3Kf9numKSafWTS9ao7RJ83PPgjiwYSHvvph43uSZeQZV",
  "key5": "5yD4c3ym3QhbovMpqf5e2VR9ZFvAQykGC4fuwsdu4rQrqx5my6bC7Htq185SWZeouy49XZPVTJ4HaU7KTpfwxqfd",
  "key6": "2n6muafr2UBrstiPtCUs5fcJ75Bw9kRPrYDpYyoKy3WLSR9QGorJH4y7fAzPG2eDfGuuWwjW7KkxBQhqZ7M8aoLq",
  "key7": "D5MvwFQoaNn8nRPzW5qw2TYvPTr2iXLvKC8PyazLtFnJh4hPet3EJJAJwftZVGDX1GpZxDau9QERMVLJhvkuCi8",
  "key8": "63rtYjooxV3YaYZSqQPiLS6qHB5CQkEpAGC9pagzmSbUr9EnMhDNefde47yVdfTnzZYvX4iaoSkDvD8ktdCoAEHY",
  "key9": "5yRXVG9wUoSpgtP7w9zT2FHKd3o7dTxRhN25zXoeBPVHw3mFpUqi6BbbYa8tLg9E8Rcrqc52ar2Jiu5pk4Fgc6tk",
  "key10": "2FVytk1Ru92SmCjRqUtNXwSfuFxgKZ44HpYsbmEWcVB9CFhUmnH7EELMRLF4VGmajUeRmr3JEiW8rh2eozbQL69b",
  "key11": "2aprPyrxtcKkjkYGTRo9tqwfhbDg8yu7xjHkKckS9jHmoYUiU84E5gDwUmvgNQJJUckwDyh559guLjgaF2Kcbzix",
  "key12": "5oKRitNVuBwDZMbn3pExtw7nfXQJYuYjzEbt95SH7BRQQkN3HjoyT1jbMGg2D9j3V2dctnfzLTBXEPxoa3VTJ7aB",
  "key13": "4EFwuFXeyaXPr5bC6JSyPe132iDiX8FLkif9Y4i7XCWbTFK1knXuNtStxDK1ZZxQ2pcn2hMUHcP3dWTFo8M33RL1",
  "key14": "2g1LTmVfW5T4j8UHsSA8Sd7hzWndRYdrqm59oUMZaVpRg6rkz5UVg6cspxmgRAS5k48KQES423a4XU3ESLGNJ4T9",
  "key15": "2ED6WQeZDDcZXpFKP8KxNLTGoDiTa854qix2h4hn4QWHHiR5gJ5fsbCfjZk2R8XxU9V5KxEHHBzmwADUKHuQHfVi",
  "key16": "4RNzfyKsXs52M3MowDXkBazotpsEGb1xHRfjHXXe9Wm9TxjykZistmEDtWnjRg2Y6iMUNesRnk2KU8YifEzB3FFK",
  "key17": "2NQ2zcyqb3AyZAjYhbe69xAR5pgv4GVG3FV7eZ4PoqwEd5GYAWLke218YxVMenJGBCsHh8yj1zJoNa1GNmQTrnrJ",
  "key18": "3kMHcAyXjBJwU2iYzXjLkaM1bsKHGJVFWAGd8t82GoZtQNVxgT5TnHkx461CpK9VMhexydGn4WKAa9M8ny1WYft",
  "key19": "3bTNztoSiicqpwpkaXNUhUV3C3UrDj7KM2JJPeQWJFaAn1CAwe2ABNVNh77k4Nnkhwwsnn7A4jYb6nEzKET3WHTg",
  "key20": "498SxZ3FWbeEFc7MyLXtoqvBPJjRTAopgZJvoddkUH92tTf6KZCgTb4yjNg8zrDtmzjfnZ5eH8oMTik8dwtNB2tH",
  "key21": "Pa4TBZQK4Lrb8NLjP1Gw41MHgyCeGZWAdmAcBtRi7xhyP8so8cH6F1ybAbXxxA2stQE3MNgPe5mAT6smhNJVsFo",
  "key22": "4wqjAmqVRpetesMmL4kGN6RVEgfM42RrCHnN3oURKbJx65HYMqZ5hZipxWDqBveUi7WJA6MP3py9Cyy1MST3Ca63",
  "key23": "5iU61kXmhafhddnaThC3MQKfVZMek9qPNQWfKqVtdsk3RMRciUCpfds3o582rYkbewdW1fFfd3RTRDje54dpzmAV",
  "key24": "29VPhrkDEv9yCNrQopVf6sE7KaS6GWxFhedMrhf4f4TiTNtcwFDFAgJxhRDobsSPMFAHQ513SdnbLpdFfxyFayCK",
  "key25": "4UU4cxNwXfzk33Jo8ZnKWi6UTevDPCVNwpx4DjPzFXMKREd4fZjXucJ8TCY4vG1XWQejU8gLef1XgqyFDV6knRgJ",
  "key26": "cRY8TqfisRoVDcts7R2zX3GJ1ao8x54NBV5k7gMuoBAxa6VaBWFE21Pq2qmrc4hDRfqxsDfW4btNsTbHhFddkpD",
  "key27": "5GoRvgGyqDksdRze3QNS7f4xD9aEU99FzdfxChGxBCH81JUAgkHJdpzMPLS2Uw3Ve4nWYn6pkvR9XNawBgxuj4sg",
  "key28": "8Bpf4M6VGgRReQjtsXpxRx58Y7PtEtcJfqebnmyRxFrTQ1VFzZ78tdSStX8TX81jBK1YdwoEnkaFwoZrhY3jRgT",
  "key29": "5ch12GisQV24utGLgwUMcPs8NToTBi3C4AwEvn6LbhPsv9ozBrdz99uFZZX8ak1sySn9e3sxiCNNECy4istj6ELC",
  "key30": "3riZhSczytCFKx25pqkqj1VqbFycMMJgy7zwg7VbCLJK8Xm7RFYyThKCLsHxB1DmyqqXkfzXagAQ4eRNeRU4Lhk2",
  "key31": "64d8Tio3UuEEbXwLyvmmcaVqQ5jkrmtatUDktyVFEqnZnVAMiY9ermXyejYRW74BAoC5wb8oi7FspJVnH7mVC27E",
  "key32": "QRcKS7Nfvd3FwbwSr1mX6Kpzh6yqnXawTuj1k5PDyU4HXFvhjknRAbeT77KnEgCTn7Q26nvzW2no5WUpSKoPxLJ",
  "key33": "56XZz2fsTQu1fAfXbbqxtwK1gf5UnxVRgixSA8XG6YMLiw2KyYk4rvEJwxeiPmzzSkYsuFqtK67Fq4n7f982mv6w",
  "key34": "5ujM3cKTMM4qnSddSHpiMwaFBx7oNfMpx94g4jJTYnsHFkRJKd5u46HodnxYxTKnc5mevq5PQc3ha7oA6u1N5d3Z",
  "key35": "42zBj6EpRE9hVaoWqEDSaNktniUcV5hwMec1bnKbj7DXdmwjHKfLTQoYixqUK4YmCoCGHpuhDZgumAe5NKiyyGNa",
  "key36": "3T71HxaMrRWLnPA5YMc5cPpPn2pb88CKb2fk6TRa4fRzbiRvwMvoPo5aSvqPL7m7uBQEWh9bFBVJz3hdXrnNCmof",
  "key37": "GNwEYqCYtosHsNSeXcaTTM5KGBe8L7DAbNDVeFVSnxgdzNLwEfHDvTCDxpEwzaqr5WmZxxkvECgza6GC5Gwv3Q9"
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
