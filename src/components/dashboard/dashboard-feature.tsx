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
    "2PSugfjMAqVTqJ1YeyVhgbjL5DgTUeDeoWVpZM7phc7j4heRwtsk7Lq6Np6aYKX1x7qcKtn36VXhJxRdHazVqAeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aWErqtax5Q5x6KA945hZeq3NTGgrBDKqvM9uVBa8tGm4bCKGXWE4J3yKXaEMQ6gfZBcXTPkMuBEH3qADp2tch8D",
  "key1": "5VTMtBZWGhLopU27vDh79cyXypuMnYvgV65FLEfGhVzFLEvqhfWGyEMaSSLsvR2qFouXqguUwQPba83AsRPoNaiB",
  "key2": "2mYQZtwanQA6oKkcw7Axf5fh1dDQJ3VPLELbSHUQFk5UcthhkXLsrWPeqSHv75GRs5MCAr5wH6EVqT7nLtxrtTjB",
  "key3": "3E3R5GBUZnxPdNX7vVe3576WRzJ9GwhCL3mM59hKiH67Ny1UFBo41SA47D7qit4JSjDXg6rJ5oAwy5DRd5gYxDn5",
  "key4": "mu2a2wSewaZz1B7hG3uBYyQ8ghUf1wN94adArrrA3J2gJyL4r8354bcJpVL39TsHPwRPFMjbP3xVUfw1G8xUzeo",
  "key5": "44bP7JhMfoMRXNKFSh99mr5EaiSzZNJ8ENJFMit1aSVikVHVUYoNqPCo7uQuFHE5A4N654s2FLEwWm8MA7Kuafv4",
  "key6": "35w6Dnkrbub1VNwem78V2GdZeUe2MFPotocsvMAioLPAnT5QLpTtTYLvKeRpPY25FVpPY7Km9etqEcMFCbRoB4ra",
  "key7": "4Eg6wuoNf5YWprg9fjwKmWzB6SDJMZVirj1CAcRJRVj2yr4YHLYs4Cpx6zoEpdQ9M4h2f1NjDNU76rRz4ecp6c2J",
  "key8": "3VpnUkwQvqbtAbSYepZ7j29LhASfuar2vVUesxb6MtnRb8NVXhBM84sXVynjWAUFF8o1pN7q2iXJd3U4fkdcjnJ7",
  "key9": "2aej9DBTQjjR5rrprHioDK5eE3dxfzRaCqTB2vGyDQXGCTViJ6fJk7gdwmbaNQTbyafJRUd5ckSJ5FUMZeRxfvYH",
  "key10": "XW4Xdr29vAdS18wedzxLzfMPHaEMSFxjHsbvx7qWXNEdsiJUvg1NgzG5kYk9Sieg8DkAqbtwFVPBPav4dVZ3uc7",
  "key11": "4W6kQUwXyBJWcks6Q7H9weeceEycyGuLvkFNvx15aCcKXJQsAAqkxvou61JwPdifi5BWNT77JLD4oJcmonkJQuxf",
  "key12": "3p8ScM9qEpJixPTURrUCNed4aas9Soe6UM5fJAsgbPufJGdHStr74rk2z8hc5CJydtQpQVWqE2Hc4WWs2QaBSCgg",
  "key13": "5VSkcim3dmkHQC4G6XJAynkDAVhzNtsEK9YNuCaAmjpwL14Ad76ADvTWSfY1X21SsaExT99kU7C5vhhHCS77VQdZ",
  "key14": "522X8Y4XL9Q13rTv2danQfp4kozX15SMPPJ763vEK3BwF5JbivSKL4bccCAG847duyCsR4HpkPxRgrZmtUPEZTeW",
  "key15": "4hpNeLrhbjX17QVyRFLcdBTM75fLzPPT6T9SbpYCpBA35XK1FZyUHdGPYLcqYUSY1z189RQL4uJibppMJjomuMqw",
  "key16": "3wawm6UMCDMyWQzcZFxCBTHPbAEoQeC4yhrkh73y9mHnUGBTAqKRoTY3HXCCZ2DKvTd1YFLpwGB3PL1QGmzihLbF",
  "key17": "5qtgG5hW5wzaBz16KhJbsGtY9QHcReZsBx3iFj7WVbNmrHYPCeDktNEeQeG24jpEE7rvmkfKMEpxNnwqxNe3saRJ",
  "key18": "3PARtxpLtzYthV9h7VVDyinc46N4STdFL9zR6pfDnrSGYG58DtGC37jLeXzDMApysWhpNnK9fmemwqVXu2J4CjS4",
  "key19": "5iV2bdX6N6m7DvBk93rUg5AdSnXv8XR8NvYk4ktKT1hrqYgDSD9gruzyAU9enqXFW5Kiqp2GERh1PtZUQsgACyV9",
  "key20": "4ZwsyHG656k9xF9B8mhPEWfEAkgHimgHSKAPXb52FsxrPczpoSoVsScZ7LxN1EcqVw2PEi3yZBAmFjWku2XxPr2X",
  "key21": "4xKNAnyJzuCeR1iR8eAUGLFtGhK47WdjR5zkxHrkys59M1sRPEvGXbzqrrXWvTjVG6Vrj1NmCqBL8fPN8pverb2b",
  "key22": "63qKocSvgJcEjcYUNSw32Lb7518qVyKtKmw8pRgBaHkEqa5VwKQDMJc3urHrfJ7rNZTtSpg1eoXUUztL1LkiqMoH",
  "key23": "4dfPjVjMAzk7dfFKLYspMxT4qMHEvBxbAVNWTTs2v3xi1NLCqjpHDkD3hMTaHBW3UqdrQnjuEDkvtYLjBn2QyJXu",
  "key24": "3NpdMEzmKU2MyKkoRDipEah34S7b141Tk3m1GHTM3mWwob3tDxaAEBdLFPCXBN8iZmJuu1Snyj6qrvRiqiwAvPRf",
  "key25": "2RmdpSN7gU1R2kZf3XhbNi69wp2vXBLD71SqmProjSHnkn8AeBM2a9KLo3ihFjrzqCbe7ELZ4pdhzmaxDdcJTbdZ",
  "key26": "2LZ3Rgd1Yi6Qus7HZ9ZdfsMF2g3d275vJbPQFpseck84sXFk81N7WkMrzcCeV3ZQ4bBJonCpdPj1K8frcmoAWWSW",
  "key27": "s3q6fJZH8oANBsU5ydzA8SvidfyWCDd8jhsDgFAHY8J9pHNSV99mZeAGsvbgvwZty72MJmWkK5TboPgZ3pjU8xu",
  "key28": "WdqhD4TusammoXxdhTeY72d7GmczZLmbTYGFtcrYz1fvATdR6uUxMFfn4fy9tD8AkitpopcD6bMd1SPD19D4RLs",
  "key29": "5MqrCyV1LxiwSKF1sXsz9FN3KvHQJfk6t89yNDzf9z9GTPFxeLUDo79Cfg1RVFtd9k1QEMjFAe94i5dEH4B5uuUw",
  "key30": "5pCfPhifGrS7TWQN2jVfK2HsUHUEz4QgxXYLYxsyDPo3hZEXqroSiPKQ9CW2hGAAQkF51DSJq7K15NogimeVevBM",
  "key31": "2ZcNBKN62JDzubzdNHkND43zg1x93aSzZYCabgEqQBVt8xkcNpPt7CeSfriRty4sR9N4SsgmVqFjRXesMmN4Zruw",
  "key32": "3Ka4axSVrvhZmQC4qxHe4k3UjzZGxkKg98avn86oVr5mWRv29pgZgJG3PrUPfmEqySfHwXTBzsScnWktUpnimKJs",
  "key33": "2aT23t1iM9m3LhMXEvbqGtST1yReWXkRXUcm2J7coCaaDXJde7xECXeAtup6f7GNRYtCQZfF1ucAcbZcDmjzJtsS",
  "key34": "5YpXFnhfRx3MoinxdZ7BghUf1ZJfgLiH5LNw2Xiqv1Hp2KK1VuiQskjdoTk7CsmVpTcUgzvEH3g1hs8jdXbbL6Lb",
  "key35": "4aSW3hRX4prggg4oeUw1bAfKM4ArjttzbrKdQUtxLPjxCGVp3FGnefcR9auhX8CGcHzi2SgpTRduqwWfV1hmFVbk",
  "key36": "2pX4M1nXkDKNrUPb7qjmZPfWdpoi34pSN9fb9SX3Nqc1FCj4xr45c4PK5QpM8AStEfXbNmij3UUp7F1Xjx4UhZ1Q",
  "key37": "43rZtfQmZJVNVcGPA1gUZJigYn8AJ4CAPNYZwoCmyAfMM4gLeEaKPtJCWqRjSELL7gUVe9N8GV5xEMWACKgocoo3",
  "key38": "3M9K4tjkZkokrZhmAyh6H98ZCkyc86SRynG9j8eF6zKyJnLZDtZNcvLqgJx75YCSYtqjDtXDSz89tSJzgpSJNXRi",
  "key39": "4QaQRLGuvWPzL8jGZPJoQHBV8KMcQevCsDNZYvQqEovMkdQvdw3zTJjjn5w7ouWGuKD2Qjz32N5oL11bYNLgPJyK",
  "key40": "epjzUjpxq8QRt15Zo66NgrRYBoFaKdAE1cnc7dLBcPaZdouXd6i1VWZJM12tDeHbAWMcPxULjWAyRWZYrbJ3yC4",
  "key41": "2u1iEWj65vczcx2q4Fbj4PF5g5TE27BgDHPLpLntAW6VRbH89jhTPrMUWfqyAXjaVsRDeU5HMW2ui6azcvg1fgZn",
  "key42": "3bMrk9CojCp8Vsi4r7YFVkU7N1NyGURMF2biBu9GK6r4KrVR56jhKiHJxNKzR9DusMFLLTigD9jHJ7MmDZt26amr",
  "key43": "3F2BkvwBEsKZjJFqgvmbTDotWnTzqPTMWCEyXSUtECiyoFXMh2oFLY5YkWXDrruBjwuEnv4yix4pzQSsY3YGF1fq",
  "key44": "iywEeFaswVUvkjyVWNvVr6KuFMRAFvGZZTFmrtCBrhvB5V9CtnJLTag5F9BHVCWZ46H2hw7ET7jbcyR8J9rPrYK"
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
