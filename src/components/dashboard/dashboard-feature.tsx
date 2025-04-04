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
    "RiNNb1UitPsxEYQ6ArCEdqVCgr11c7wVYNWBk2uVdFkSDpJEKoE8AFas2qVn3kXC5L69KwZ6c8DV16aHbivSqj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bjajYPd1PvpUpSUw8reThPKWkbtrtQCcQ2HaGXk3zLPvBsXoEp3WFWTDJowQeQorFoudUT7r3Kmzqm2NgHMtdiB",
  "key1": "2B4Dz5iGribZoGjPkSqrDWF2dBJcYA271oiWX5Dr6Nz4iHRtdSqdHd6r4RA4p9a3vKQAVxLUqVERGSUB6davE6g4",
  "key2": "5Cax5vW3ReNU3W4r6ZBD8cQHftpYVHBgcumgeTjDNQBRfpdsb8wYYAURdtNT9STbD3R8UTppoyPaZxkK29U3EwcX",
  "key3": "45uE45CBkh5w2spf9QBY8Zxx9P7M6RpzXrLd4mchBEMtuG6mWenD3DeUdjsw55Ynb313H2S1Si7gRxsLvqVsbjna",
  "key4": "5mdVbWcVgdoih4wikCzKP4ncncoUerejFnRuyhywyeQCFgdngCPf2rzXt7UvW8RsKyMVrTwNHW8jEx7YspfaeJQs",
  "key5": "3BoWa2aradL3ytyeveMKgPGJYA7yZE9qJiEZUP2M92MVYiNDy2fusKAEyr7UpkmU6SEqkbgaR3maEvfeULSocA9V",
  "key6": "5jR9SAFNJAazYPusRvB67Bwn3Pv8iNBS8XJLGkzCpk1d4Ycjo2jKkimQphvtbqqsBWR3JcSs2eSr9oYVyMPAYZgc",
  "key7": "5vgPENTpxCKU73K1nK1hSaU4PwZgznvYFYDxGb6ufekUUvFYUwmAy7kwuEaNe28f8vd7yLRjDKpYqAiHyHLpYC5q",
  "key8": "2zbmzJUrns61WzvzuBbrpe9czkkadXrbvcg2zR9Y9X71mRG2Lb1PC9noBpe9s3VhpX4kquhJAozVB7UnqFsgKr24",
  "key9": "2VMiSF433aXxVxqtaNPEQkv3d3qdDcxknaAcvM2QGDWJV8MuDCFAmMDQPjsvJk5Va7w4JTdLqAvL3Fgb7sNEVgzt",
  "key10": "5PfdmdJk8rVtHeo28WXjYdiG58fVke7YwdTcKYtv5JePCSWWcqmNDNp9hB4rrTd85W3SNUroT8ct3ZHUbwsptCR1",
  "key11": "5Y5NHZFQLfA7brPNBu5WxxvisMGHiomKaRZezJrKFQ8Cc4HkqT8XTTYQWKp3mXsoDGP5NHgtYsXe3DYQqC8ipSVX",
  "key12": "4FhLxsPj87g1Ty3jXsFcABanNXHBoVuvWbGihxB7cU2s25C9dddkueJA4ZNY45E6nUjnruEVKxM8mor8eJ9E5qxF",
  "key13": "3h1jiHX86QxGnsdEhgWzS9S2Dei5irRrmc6yM8HWSZxvKQi2i5xZgebEJj5DJatFoJwo7Z1fhj8hoX1wDc7NQp2o",
  "key14": "4Cy3cSSQKiezX2aAFjTEhHFTimDTtsai1HAdVCe9oTUqKk69EWp7z3vr4iEUk9EPqsBwajhP23CuY3xSjrWsP27H",
  "key15": "5HKkinoBxpMm3X7qYjaAPW2vtd6uJtNtbXNzPkYQGNYQAxaVyurZHFWwibDuFqnk3p6XGAocsGyL8Pemje2ufSXh",
  "key16": "5BbpnZ6NU7T9mfxu5iZQRCD6crATnXTPPoMmT2C22r6vTrJVidHMobbkSoCoFfH7DGmTnNyDGnmhxGHGYGa6EPm4",
  "key17": "3tYDBCB8GVQH3AVaRynvw48kLTuLzXLuSmNxYhATwRMX1LXw81VixBxcnzA5RgeZE1Dkzu6KVLWY1oB9wBR9mKi6",
  "key18": "5eYvhCLcXgpV5ekgS15teberoWwxWuvneYAjjMrECYG5thKgENnc7m9zpa6JsxC7HK9SQjUopzDiY39ZGpf5eLVq",
  "key19": "563WkfjZYPNzm3sX7T79gCQSMmAdXuKQyk73jpabhK32KaEpokhS8o2cAELTNReWPjeXgHeXKGagKqt42332aE5k",
  "key20": "3iVGX69iKTtyx9wKwy3xVhA1j7w9Srq2p5TJd8LqQZ7TucWqLqSqJayjLQVB4nD4q5mGMV8rjttQTSdTb4ioUTMx",
  "key21": "3PgR3mzAnSSduK6eaohjyF8RytnP43ibroFNT31MB2UVHMkmu9S5VFj34Y6vGkRK2LTd5fWVSa6hVZdgEESsQ8oV",
  "key22": "2piY371JdfMLHvs2g3qGHW9MZH6BU7mfGKwdcQmjqQ9BNC1FYCcjTZgWGYaj8D3PQ1Ydhg4gMQcgQW7s4AerWmjc",
  "key23": "5B1fsHw5DBL3miZ7i5WcAKPU46fKjreRLBMJvnEX9afP2ZPaxiUVN7fFc5gmoKtvD8Z8WRcK1mL4Prg7VwB5BMXC",
  "key24": "2yxCvr3E13baMixe2uTb1qVfjN2eWNPbvxZxmyyhCRzFH2rVAKjhYU8wU574ri7WhuvVXXKRFZvpNaSRPaFa5k3y",
  "key25": "dDDVnpYsBAFSFs1JU31mhSgYWVCiBheDcozJEMes1bxTCFCJAqhwPEnKxx2mxR3eXWEe9p8W65fjdxENUghyeJg",
  "key26": "2gcV5vw8h8x3of9PPUv1UaGZk8aoK1iLSt4rZSPrG9Es4rs94FogkCbFCdZaqK67o1QHgc6eW7HBeUmLHdv8UkGM",
  "key27": "5W2XHKqrErKQvUGaSsu5kj2XTAF6UiEopB37N7npurNazjkSigruauV5gZr1FnNvDxZJahKJ3uddKGRMoKnEZtdT",
  "key28": "4CBbL3MmkvPNPatGVtKXC5m484BrMfRHPdk8vFQz9d1LKZHkgCjRij4nuvTxyv4wU3spJcFmWPtey8MhmvKWBiDo",
  "key29": "5A9Yjo74NmNTvjeDN6818ESGTEpVetGADyNpAYa1JXMsFExzDT6BUDU5FZHam2DnRrqXhnjHrYgwRjazsscUFTMM",
  "key30": "5idM2rsAKZz8JsJVG92t9wxWQ4fNRthJLbLfmM99bqGtpR1qqpmmXFeUoydDwc4dAXXDYuSQsFv1wzzQaq4JJfsf",
  "key31": "2LX8a3mFZX9fEoqLQ2eTddPZGdsKEwuPaJkKD9Eng5qaUtZcR7TbVWrLSMGqQEJrFr6FUj5Q2mvwzSnCCajbBJKM",
  "key32": "3nAsgqTkDMAJmtYGhxKLcbm47fkrU2p3uCcNoXzswigvpnSAYacfcJG8NC5YWFkDpDJptYWtW6nXMqHCAGYFDYxN",
  "key33": "4bASL9rfePpDrCRJsF2ey6cTxekkk9wvHB68AGh8xtNGuoufHLw51gTbAuZj2ELbgAyFMtJaWHVzarvVQGVvjcLw",
  "key34": "3KXcEbBKVZhurcBHjxSt15Ja7rgVrPrxUSXfnyQ1ftZViq8eXorYCLUuXDwMz4HW3LiRccr5TFKLZoM6ZKmhhctY",
  "key35": "4ij3Jh2Ygby3XPbkj4WEfGAZhh2Jx5oePg6Wq1J8iwY47hsdwH8FjG1jFWDTmngxDwpuWqPuefhYQvhGqAExMLdT",
  "key36": "5Fze164RaR7rHDamt6LrX6MfgP7agcSaDtJLz52u6HQDsuY1PD9oUi3MDXsRacGXZ1ft8FhA2wnUz73X9UUzV13n",
  "key37": "2QACNkyook9PPyw5Eujw4G4dCsGVbkcuL5mV5VZCvSBG7FLXm4YdP9UWy9DKLbK8Bh4BzVxGTByzNcDC4sih3wof",
  "key38": "4nPW8rUqrvga4G4Le6D3535wkSzYA9M3RfcR9JJXmCo6gte6Zu3j6y75niHpEhbHif9vhZsLKSJPJsECWwjrd332",
  "key39": "Eux91rzmEzw5eToUxWvQShUyHjaqpEfvB26SEMUzb7CDEwq1gy7VXpQWvH7CvzBSQZ86x8EvJE6cWGuTbbWkJr5",
  "key40": "4TWsXgEsPF25kpuxK9JLQ8JqutoU1nosny41Lp1g7JYh1PpvCcFSdo6xnYKXBCVTXZ7m1k972ip1mdVShpUkFzWK",
  "key41": "4S1x8Cpeqf1n7ZyAcdyVmvzeoA43g8cPsVvuRoUb13s9xAPL5yRQc5Q5EbDFtougfKBXWgXQVb3R9oTZM9HjtxeT"
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
