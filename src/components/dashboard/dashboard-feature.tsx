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
    "M4xBNpzTxN52VB5JfYRDCyTegep522eA1tcyEg6teKj2PJ3KrocRjVjjnqs8uXec7NDci3mrZHDooAAyc7HyA7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fdYgn7K65tGht3sNm4xRonSdwrRkUAqFk9Sqy79RYMTTJrCsBhqsrRTXdt4fX2LyZ4KdeShUiBEy7vf1f4FVf5N",
  "key1": "1566X849UkzKAh2EMCcF9fx8UTp86UTEvUi1va9CXuUQdVPAgtB4Q1r8jpMiTn8Bio2YF2L3Zf2S6T8o9RujiMr",
  "key2": "2tMD2f1N3B12fDSm7sWXZzPqy3rzpq7D1jh5fg2KXwsmrmEjnU76UJWNrY6CmMKDnHE7CQ9HLwTCbK1Gzu5WP1Nu",
  "key3": "cgUhaqDUZJib51qKeiLAmLmgq6yL4M4gtu93pfBTZQBLvM3TUtScBKeGBB2MPxtpndRdCjFAfDaA5ava2QVRLZw",
  "key4": "4xDjSEz9TzNtM2tiAt6m5XVzWVKcrJ47f5XL5SKGaFbu6AyGeUN5uoqPo9UZHjKGro6Juv54dLnYKAQxWB5RNAYA",
  "key5": "3Chzju89XnB5dbhgEmKKNGnUZn22QtGNtd1xiSKW7ghEzx35eMYMeyK32VGbCKdPp2XyrBqk3xneLTbVe8kGeNrm",
  "key6": "PG2mEvHPYLbCV5PhX51Z7vETwLaHFEYSAvp1VCDaVh3uZJkKnwz4BSebT99sAxj2c4tpSVEdc3bpmzy6ZZ9VZCD",
  "key7": "4MD2dQ23A1Lzs3kYozBbgGu5SKZyXLYUK93LKsJTasyckdnfGM5sbgQnkDpQCStn3ajD5ZrAUhypKTG6s36Eeztq",
  "key8": "5kLjQqQpByHoQGizfTf71Y6XqWjgrmfDk5xBXjgX75TkANb1ubTEtp1PZwZGsaGuw9gQGmqEQv4QsbxU8FRAMJAm",
  "key9": "664ij7iFpCMZVC68skj8iphDbLUzyxGC1msUdK63zvNfyHM1mThYbPswiUvA6YFGjibpCkowLATgGd4ZDfNAD4Vy",
  "key10": "3BUAC9iivv1qYBNxnXUqfq66mmfFf3i5DVozN22hWdTU4YKgqTHe8u55du82aQYmnNRnkNsUuAntsTj4R48bSHrt",
  "key11": "4hn1hriq3QpETt14dABLFFNcN37dXBqk3VQqXCL39GpoSGy1XFNRKzxnTakdwHBxtfpHarKLaMwogPwJ6AUZVKa3",
  "key12": "rrzpHL71bkdHAKRrHRz7AhV4hAvUosK2NAN1bgJtABEoBt77JEuh7ui4ffgsjWQhstAyzVqVaLsZfXEFNGqA3ue",
  "key13": "3LryLT2MTLNg2W4tKzjDP9GAkDw84Y1XsCBaV3nyWTzxJStwLUvc78NqrsvBu6es2uPKX9xHsnAYTZfrLrh3v6xk",
  "key14": "2MnMQgxABtFJVZNGrErpbYSXizfjUort9a5QWPtbiswZiNQHk14VyyKJPWXKgd2R7izu3SxejP9dbQvmaLEZ2bJb",
  "key15": "ckJqFZyNzg9zebvdxptRr3SasrPAhj5Th61BootZH1x4rpmvLbvF9UEEvqY9irCbqeGw1ym3AgdNiCDdM9gr53L",
  "key16": "4QKe2s4CB6Z5qtdr1ueud4BY1rAu85foYdYh3SidRGXypMLZRENXATdC7qS47zBW5UEdJzEzRxK2PCZg6wp8kWzL",
  "key17": "3LQCwvfXqPkTJ3a9zPdqvSxQ3g3BxakTa87UpnSc5HeCH915XimieAdkdzFAeww7VZXVoQ9iYyGn4hcQNado4btH",
  "key18": "3uNp9eNgdcYzSL2jSPxXrseA9F9oCFwHMysk9Ndv17CSLAiDEgBY48cuXfoiUjhQ3We57yx9jMW2bw5PihM58K2K",
  "key19": "2gjSmApWGafVkMMZbhEnnLAi1wvowVMC5t77jAwW5rLgKfhGDt1NY66niiK2DrxY8odJ3DW2xwcajY5D6RbfmtMC",
  "key20": "4rZCCAveG77bdXgu6Umv2G7v48qpBWyhQzvniCRRbJJ6zMYk1M3PhPXYREMisvYn4VRPGFmUPfhFXyaMvnbqLBd",
  "key21": "hYdFceJYgNjYsRBd13uLDrm2J2chQ8X78YjTq3Lf8WSoG1jSako511C9iQMDqyhYfk6hcm5pQ2Tu7eXELwYReoA",
  "key22": "37CkzNR95xtLfmGPPyeDioivhTfE777dZHpehVZswXa5dv9GoFheAxZWfvSBsYaHVU32Raehbj7R8xhdZGoMUzsY",
  "key23": "eJ7joPnaoY8iASqszRJY2DcuqpS4JAG8nfkZiw6K6NgujyjwY1JLGwCq69wzwEAMwihK2WK7UaXmHWK7uW1YPSB",
  "key24": "3TETMQgGGrHc2wmhX4k7Ef2kQBJLP1nFK1uPuXPgo6u8NTsmDtCN5ndQMRkd5cNUs9uvyJaW95GGV5bRLhyiUQuy",
  "key25": "42sLDHuL5FfKxqPw1WSX6QEn9o3iGQbTgrqw6dDY6GGHQiNuXvEeSFZFK1fSEmfPg7e9M2ng9GNRzRdQUjqir42R",
  "key26": "4SgH9ccrdFRTphGjMwQZF3viUcj132vCARqY5g1d4K16DwLaXx5a3QMFFSQEqyEusrWmVHNjCMENCyDVdiDwEPVa",
  "key27": "5yThHDXDeR7QUhHjPSamVKi9QEjanW93UY3jMC7yrw4HYVnYvUQt2EwAsAsbVB4hTDKrVKt5f9L55iRoR8CaBcSt",
  "key28": "2pVUsk3yFexQRffqtdQfTYVNQ3qs1Vu8xtBxrq8SS7TuXYWsb3Cj94A3QzmTdQSUqnKhpzoccRutDPVEZBKEMKXw",
  "key29": "4w7raBR1noW6A3YsDfgrYywjgNaF3ihTbrJqL3WVRjWYfzCKgSBtQXNeT6p2brVVdVCiUhTeHXnFExvAwvLhEnUi",
  "key30": "58gAMba6RLcUP8jd9gEKvazfYCvjoLKCa7Fq1VSEUGaXxaxDhxW59UdgG9pZbtrL4rPpF5NNxGj9NPpEmR73pX6m",
  "key31": "5Az2gkrRfcR6R2CK9JKW1Z6HXbEopFKffHKmwCFp8Sm4g72tbeTpP9BKezJ21fgBCCG3xiC9bBwjZ28RW8GwqsAU",
  "key32": "3oAtqfaPvswAsZBdFVDCrEt72JwvM1ZyGDBtoEwtdvbMNh2AU2Bf3Y6rtQyv28so2eBFcbBoaiRWxpG2pkX9w1Xh",
  "key33": "2D8Rzrr7BNaZK3unU85mvype5Z8rTDcVEbdWcCUTyWCAGd6kJY8XHxmevHsz44huAc5GZ6BFhkCyjLpXEpdScxaa",
  "key34": "GMqGRoHmiiUMRuLzQUvLbUSdFuG2Z9pxuehsANSMDuey1YJcLgyaVUjtrEVngR2USJrg9eoLcpz8Keq541EnXDh",
  "key35": "3MkmNPpJNTHq1RK6yn1swQLvtmrTHnHzm7wQrQcRyEUBJQ59R2NPhoVpDka35Zrq1pBB7PWpEMRonKY4TQSFy1rN",
  "key36": "4y83hD1TiADJ2WhBeuhzYWadAXNJmCMB6nw65CSC6kUGKKtBgMA5FzKTbeXpqg4m4yXTrvrHyu3D7k7atDKDcbcX",
  "key37": "4J46AiaRzEiUiwXyw6Z4fe8MHzATmFwhzNJjJjEz2NJGvKHDUrsjWJQ1c34tURULPZbaz4DP41mcSzsnXBSXhbAH",
  "key38": "3NetW2wjHb9Ez1ETs22EFsSUjNzTfXPEq86qnVVzD4wdQo64KG5wt5QAvan1b8kkkj9Eha285LUr7u7xtpYUkkrF",
  "key39": "3Snaxy83Pr1Xbk3C4Roh4VRtaw1fwzg9cGhThaqmCVkVHRTMFRVBAUqy7gnwfEEC3EHwJHEKcyiRnHvJ2dxDhxqi",
  "key40": "2LiWdU3XVyFAxJ2yrJLTuQXbHHaE5mXgKUDR4NvzneD7oe9fzvKuMcKssGMUS5Qp9r5NuxizfR2843qS1Yz1DeHH",
  "key41": "UAMt5RUsJyH4CMDViBz28HkhUFaEH9CGi7nBv3GWDyJxsEudoWr96d9MaevPZ6hzXxuQyrBzJqW8bo6bqz7HMwR",
  "key42": "2npD46vEqCmamoZKQ62uHkgxnEtHTwJCNX3h5Hxs5Gj5ZjRzfhNwxofM3jcBWk59WWzXCmZJc3LiLCDGee2adsTY",
  "key43": "2ennnhLCRPjxUqWGfJ8NK968PWsTaoRBCbTQiCVeEohxZmwWXcke4gfSarLWJQX6h9Y8Ly7U4yuQbMBa8jRX3HEG",
  "key44": "2yyZjDRsUj1P8LenC9z4Su29po8hjrBs8kM8gwARLXdbaH2YP5u1iN9LuyD5csnD9h7dCEeJPs5TSJL1x3qAcXPR"
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
