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
    "2reKazQyN5cS7fVmyXDe3HXoXDZvM8dCQppwtKUD5y1YmwRGUL8beXBenCf16bXjPXwsAWudaRM2mGDawihuoVET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56h8LZJphD3WtsEjMxrHqiGABXQ9GDoBt7SnCeAte88EndcSmGf7Fgat3aL9wX8FKESJe1DHkvBrtFjikzbfbFen",
  "key1": "5BN8eQHMjzGNwiQtQpmGdAHewudCASUus3umwJji7CeoJUkDny86LkNHjJgASsudswRL5oqVYwJbY2H9sCvKwxwd",
  "key2": "5KB2arJSxHSHFY1QzpE1dPQLtNfsfr6NitEqVvCemDhFPHinetJBBhKoeFW631tbzHg8BCaF4RN2xFVMFuZv7SVr",
  "key3": "2X2V41cEty3Ro6BsMz5euXTCGee9wMj3X9QzWCc7APqzwV23FcaYHE5EidC39EcFA5pqdr2rde6KL8t3AtTKnBXL",
  "key4": "5KrHmm47t8UPUeL2iZ5JnrL2St7AcM18Zbv8WTUkHx6iKdSKV1HWyCkcetMB1VXMPYaRiZ7Ygnnebz65jjNvHEWu",
  "key5": "25GPSCVgHz2RPGGY5P58cRCfhtj1mPoGVH1RyfD9SnxgPa625G98T5qvQUG1u2oVC5KquQjf6kDx2j1StEsdnWPD",
  "key6": "56VVDf7msvtrQkiBsESVa8bz5z1nhTpYf5CLapeNhuUox8qapfz9XcDtkwVTTUZW9dP19S2vm7vm2iCs7JfxLgcb",
  "key7": "5gerxrUK4MKLRCTm12H52RLwTJMgZwXRyaCTsq63KAi28QXMbPsnARC4dEz43TYajwhnMQWQHKWSu4bturCgYWHZ",
  "key8": "SQfRzjzqC9VWYeWknygx9pwGzz1gMhk33ABDcqQhAa2zVUtbkqQWUXRoWouTDicZqRWVCVuLhZx8ZosRZ1fwouP",
  "key9": "5r97vqRXWhG3ik2Qvwp8kDDnr1PCVqewjWstpA9Pr1RDFXHsj86N26oxx7TpTMY5XNSB9Goy6J9mRAXjTemUBJua",
  "key10": "4d8391DzXRd1dsV3odpK6JotVTku646AVwWiYZhC73oT5xRtihZDSVS71xaPTT2UGfL2JTkqgXRT9aJxaPd2oNWx",
  "key11": "CHYgwaF5puShkkAWWjpT5HUbeqxEN9CdxZsZsEXLA3YLvfRoEYzViaN5Nxmb76giPYa8qQHkBhK6fiwkJbdXVPP",
  "key12": "4EMgUFFdGvHFQihdpAU3PkEv4Yo6QZQdZMA1knWeSUvd8ELpENge2bYEVHpmjaRibRafbrPXSiG33y1xqziD5xP7",
  "key13": "KwG37Yao1GsNyH86V51icBEBy8jPNJ3oTeCuo2cki9nDR3meF35oUaHF75xKMaih8bQhhtb1kyZJjLAxiZfDvXc",
  "key14": "53rooSjwpd86imAHBKckZk5QZD8YFvkp2GCAXe9uj4VPbGsCXTxYL2MjWC3bW32PvrT7whF4Snu49qz7HnTyB33o",
  "key15": "5DssZruX7eMYxgfCRsdPrwaxko2FwnNRkA4ZbNLvdMBS22njmxuDZ4fbvbZ8ggY3SwBjoMWKD5yKsAxFuF8xdoDX",
  "key16": "3MtFQsAowsMZnJ1F9NAWXw6wYJD3RhTWa4Afzdfhd9YgzB2Lcb9NFLxjhFspKqukpqpwbHdA6GXJzaTDCYuLTMwY",
  "key17": "BS8an3423UzK4k2xYxfzD6ZssPf64nQ6zQwvTdnXgRpAU6M6Cis2ozCdBsVDtcSoM8UNUsMmd33uqvqD2567J9t",
  "key18": "58Cn7jEX5aFAWmGXjkTEFpxE2YdwF9dPNgWY8k2H1dfjYb9qHdJbPkxf6JFEakA4RimUM4r4y9RtBFQhXWMUk4s4",
  "key19": "4HMf58pwAecZHocT4qQfsUcNzXeFKW3vwTSuoD5tZ5manBwRKJuSmuQxLXtUZ68SeNoFUQdujcyr5gdsaqNnZusC",
  "key20": "4XSKCUJBSjg4DUzP8Xnonqi586RjFZe4unBWdxFrM89BgJ5L4GRY1tTGHf22FjgZwN4xmFojiFNAieoarnwnvr8K",
  "key21": "3Zf97KcDhauLs2MJBp5tEJ3wuc1b7VFtyuiLwRgoCQe6zZdxQBFqYo2VCLJjjgspVR2ZAUkMgsmA2gNPnRWQkNL9",
  "key22": "4Km5mBcMg1yb4hHFh4U4zxbfJRmhXSVzFhUnNBQmXuV6qq7oKLrBMPkcKZRLCTAoJsd5DU1RRzukUzGkKXJvd5eR",
  "key23": "utX61iut4EDvwQfJBTSfKyT6gZY4qgAhsVZm9UcJr3DskD4MBED5i4uJhtXFGnnEJ7TB2h2qFCpzonovE6iwgNF",
  "key24": "2KMNV6qzSTt4yngzdq1uXaoxH8W4evAyvYKutQ2chd3x7z5pK65jVe5c8LSPha1RPKtog21CP3Q27NgMdCFcQUcj",
  "key25": "3851cpCdVkDbR6KxZCQ7kR9NoipRBh2SsMZtWXb5abnqpwjB6VMk2ryMjx8Mo1wAGRRsHhbfyD6WGLki3hUJBn5q",
  "key26": "2meGNy7VKfQL12v6J4nbvS9rHnzzWvtD9iTZ5ZPgR1H8Vfky8daB7ob9EwsZFdiCvPNg4zPD4j4Cw59pvgPihLhr",
  "key27": "5t7jScrmh52KWfjq3rfo6cDTtMPSNCMvxi3eCJz4abFYex3QH2J1Z5RHUD4zW7o7YzVS8orUyUPATaCepQB6npKY",
  "key28": "67YBeYgfz4xcF55WpYDG9cAvNrj3XMKzy198tgCeESkt98fWjtvaMZGL1yWtBM9vMs6qQZZUAAgzWauZ4eiMF2Hn",
  "key29": "2kUaWSEgZhVReTtkup5udQ2d7vVjvfEMe6JAQxFu7mRsS8XnRLbZ5bj1ZXaCsBt4utS7L5fXQEvb9NGwhrAEvqb3",
  "key30": "5vN3dk5pK93qf9ACC4WVdv95QVv6en9aobjuTsm9yEX5CQdDnPAj2SHhiE9MjJgipG1xp6PwsVPA8BTvQAqB2yPe",
  "key31": "5uG6CExuqiCuLR9NCvCHPnaJ59uTj1PEX3TphComTb8RzNVDeUwDsvctjc8DduerT5jUaN42gy1q1zzaia8PHPMM",
  "key32": "5GbxASeyqmUoP1SsSBmd11fnitfVNhbDzFMeusDu79tMPPmmhAVjPm88pRsUUVd3mWLBinmvD5yqmPZTyHhQu6Xf",
  "key33": "3YTUMr3rV161a3Jaq69smtWor3D2C8tSreFF9Vh6Lm17SjGLkZVTQVw48zBMMHqSpfuJwdM7tAp7adfYUaypf4CC",
  "key34": "MARVvef1eU37kSq8nny4xeHBLSz596bQPLs9rbhLsA8RpYfbJpN6WjqaF9Z8EwjkNA3jt2Vw3rrip5r8L82gmzf",
  "key35": "CusTFNadXzWfxp1upDaaNLNaP28NXno35bSaqHdstJETjmbZyC7mXxz81PqjZEGPL826EKvBokMwkUCwFbTbshe",
  "key36": "5eMX3GQ5TSAAvGYx7THytnN1MGT7YrxzdQG8cb7waXzsvbrsuNcJPP7KLE7krnhXagxs8gSWzSG756EWppbDjQr3",
  "key37": "3QMN8CDhB8QewsgfycaEx6dJRzkKHZKC6b8tk8m6GLrDc1zumxkJxkYozM9ZhX5ARax9WfmvDAJPNn3xNtPgdH9H",
  "key38": "2fqv7ddQJhiHPrFVNxm7kU9PURZWSwWbaUnthLECPbyt8vQvyGvB2cFd7FH2dhwrJN9eehrDEjsSzBEznvQJJFnS",
  "key39": "67ghSVStSWcpWc2g2FiCt37rawUQ7p6qTcJrnR9wBjBUz3TWiGyE21i5gGCaDxJzUXvKT1mH62U3D4cDpz3p1Ezb",
  "key40": "4pPirmbF21xfpZJdnhP6NSHYYZWuQSYRpf9ngwUP48kJniWST3LFtu1BNBndSTS8gVHgqyxtkHJud6HEDXYPtbAL",
  "key41": "2SkMf3jpq1kcRRfsDwo4cVYWZ37M5eiUFV9RRLQp5qCo46XRy1eSnix8bDDbKk4dzDmTbMWuecZFYqbDC8qqzjFq",
  "key42": "3NRF46gsbYrxB66g3E3vgpvZsozVBwB5nB8ueR5kApcBbExCtTyWfZ56J9bNSGWQpYynK1QGMkttbvzo9KZPHxKt",
  "key43": "2NfobWNM5aQ8HZoNVnuhjscSwMGRPDJNhErmPFX7UhNXCnNopcKWABHD2LAhAukkbkxrzJoAbiiRnxLSkiXsaNUG",
  "key44": "5L2NNJdWUDqm5TocR39jnrkfThPTaEGW6ovXytYfuaH57Rcm2gAPitiepA9NSuBCSpq8EXhTfay7xrg87gYagi2d",
  "key45": "2MHMdKRqz8qgCrBzJZRRZjFXbZ7hBa8hSMML3HLjFeZiUgCmisT5iy3S23xjDHq16xrwJUvfZdCncrtJgKWQ4arc",
  "key46": "4brST9f1uom8BoiDhCwajyGNTu4MKGHuUJxN3Tis5KswYUEbYCRmDPzooEAb9bViFT3MYZ1ye4wUKvMWQFEhxy3i",
  "key47": "3wGxHe72yoNmhmfZHfp4CmWsZU23JFQP2woscgTB98MV4EDioPLhc5Qg1qNqmPnK6DUx9NJHascYbWgvgASUQKhP",
  "key48": "3vgnXvDvydn2wkmcn71cceqGxE371G36F6V7yb9ttrnBUQmbemVKdaQuhLVr3jhM93yNRYKKYvLgRYsYbMvKEqog"
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
