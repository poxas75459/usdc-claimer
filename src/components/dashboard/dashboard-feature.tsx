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
    "3yUrDD2fDGC45N3cPb4HFA9hZLXQGdbBCsc7yqy5bT3kyBNsppCHpBFmuoER5Neg8FwBNTbMTHob5CXdYq9LyBTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i1Jvjh2ySLPFJWCVxzdgdmpuHX4mepjxD9R1PuvVav6KbyyNV2EwyLo4VvQfv3VMzzBzve1yURGuBKuPfjbkieQ",
  "key1": "5iv517kVgP14WryXKRPA6ZUxNjwd4HozpA4VJnx4543iLnTDqyTZR96XVqqHBT882vM7vttv97A4Xym8LTYAun1Q",
  "key2": "4WkkngDdAngAwF71xSYhFKGCtQqG3Pkz5Fec9YkHYGSwWHTWftGz4jpVinbans2xafwsWC3PWSHsKJJ3vsagHFfH",
  "key3": "tsegfD1e4fQQfnobELjmkQhaQUM1QKiNTdac9qWqJAHG9rTqCwMbP91P2b12g77VNVgcjxDTU23DRgsPkqe5WdG",
  "key4": "4iusN2HMiSnT6HdRLSuEKgdXn4m9t5KxLeo1XPducsm31xLa4wHZB94VCwAK33mjpsu1UpbuD9Qd2WuS1pBwRGfE",
  "key5": "2uTv4ybNSyzNm626rLFXiTDvuYjZcJtqsYyh2VodMiq8dCabEc6ritA8AuNGRds8UFLgZeFcAnKuwFj6XGYZ5ano",
  "key6": "5oV7LqvJucs3VZkiJ1zHymchwLizjNRtG9JQtiR4zVGPne376WdKSCLahtyDb8ZozVojhvpSv5kNcmRkM2TnC3WK",
  "key7": "2vhvUL8mxKmMh7Phe5gtRpCTcB7pYVid7ogmDyXLtTJzTSBAvYnL4T8jKCbJrpMA8h1E6bx3eTpSzVDsfyB92TU2",
  "key8": "54Yjcu522X2CXXDefzUvLJu2ULpnRJ8b5yNkVtf75TmD6LpfVMWgZa63eT29fcXXnN9YQmVX6NpkXoy1vT49nSkK",
  "key9": "418tipRuoG689S2WghE2sDSnsZq3NbUqSd6LjBWoWiSToHhABFxhsAYitiqHTfuNs8Fg7b3wmbPwyPyUvnmPAn5v",
  "key10": "cvGu3KLpBB1gqDjwf3kBEsYMYE4pT2LrUeg9a5PaQHKJ8kSPm595nnsyRHuit6hMmmuFWobiXuZaUedDBnVomMd",
  "key11": "5Lk49Yy1z1ngLe4rEurqJHq4b41b6kRHhCv8gypPhR3H4YUphZ8q18ZUt8o2MVUTu8DGAWw5AjZnp6ZHgodeoDek",
  "key12": "4urK2KcA7F2pYAJVy3qc5MamAuJVC7qBCbc5yBxno5rXZDceQsn897DUwUPcjjRVARi33tXPh5fvPZ8Esw4FPYM1",
  "key13": "KtAdHfZmaBsegmSqbWBKvkCFjxsQi3mw5ugE2rvxHRrfjPb5noptbU1iqCW2KL5VddMUhXPaaJnediYQqyGap7z",
  "key14": "2VfWFD7zZQbPYz6vnKGinnDdZJ9GkhQfywWe4evhLoMV7soyuuQMijffJUQpeF3PALunwDhpG6nGHEK6Huhy3Gh5",
  "key15": "2eNBNsY5qMsNBryysDQ5h7Nbd1bXuJqHbqPw1DqHSxZPwcuy6LAv1B8B5U1gQZG4wRk4jyFDcMwVDDsvYPkm3GRy",
  "key16": "2zY6yT9imuKQexvtVA7nL1x3RNPyLSriuT8Z6QUwcAf7wx6Z4upzDZ1BVrocEDDVPA5kqgv2BhPC8fXekhNHfpEM",
  "key17": "61tDAmt4ePKPRW7SKdEe7ZTcdQYmek1smFd9oYQ5WPqvhkY4eduE1WkqVULgJBQ68ZiN8QPDZg4m2TWGTG3gThWw",
  "key18": "5FTSddCewN9VECWL8mU9szbx5xxW4p8MVpmQ3XtqjVC3adtm3fJ2R4NrHHoi6qgLLotKn2u99jKQZJFtNa9HkwRE",
  "key19": "2U81iM42paTmcix8sGqdCnSrNbJx365gCdGLTcauvcHtUaUN7wGr7uTa7hbmq7gYro7BheqRwy4yT1pZSZJmy2tP",
  "key20": "5WbCqhhDQCnpagyu7TFXGPLbnPj7SniiqnMczyXJ9zVYjNmFZqEdpdKgkWkXxW8B3Lws8RexWTZj7gGZpSLDqnYQ",
  "key21": "PFkytbhxw2s2XfELG9WWRYzkaJimZ5FXdMfQQjLGH6e9h7ihXtbdAoPjL65d2ZobBBwJrUeL39kwGzjPkepX6wU",
  "key22": "36PoyLfPd7Q84TvDECKzuFxsVTiokjW5EL9XE3pyzUYvh8EStepzshbVCpz8xfYP45VDLHe5CCpaM92c9iUacDMM",
  "key23": "5CbHUqRR4TyzuPDEfbDY5QUQZRQGdi4g93tFNmyQy8jkd7Gy838gpHsBPwhpW3HrGmgkTuvU5pJo3iWccbNBPetu",
  "key24": "GsfCqNa7dCezFnYpXJqh6wypzWMjf2tig6crVNCGWGQ49H6mEJj4FzmEEsKUJGNcEt2CWZsbRiPPQyk2R8iDcuo",
  "key25": "5UF5oyDZRYjHMTaBaSN5b5GYVJ5zNC1xezLRKZndkiChAmoT5GJQiye24yLdjrmKskTuoZby9uNguJTs2xFjicta",
  "key26": "5SwdxhJEKyo6BtK26rDvFSNg8PXJVbRMHn8ayYJa7RbPrqL6HbFFMcWw84Tf7sFr9RR1csfxwUrmzh5UeUVZCrBY",
  "key27": "23L42Zu71E3EsgcWfnLXzFP93HXS4gFxEUwFHv4qm2s1D6jn51f6XhSrrRHCF7Qi71wkv98qTWcH1LvQybAd9MNf",
  "key28": "c1Dw2YmuZXPAiej1vdazbaKmF4deQn6LqGbancd5EgG8fvJsjkmUfcRMfUi52tWD4Aj5xBLve1y2TYwbj3tW8S8",
  "key29": "Pf9ttQD9hEY1ThJgsf3EkpNmPYCf9mbi867UUzJrXduykx6kyTYV9EihG9MgRD1x2FdhHi3Z3qsUThmeahpnvzR",
  "key30": "B7fSHsA74G3h4v1dbh73xrW2AF64F3hVAR7CmoYUrAk4e356WJ8GUyvDWCdLUCXyyojf4BBPkaz9mnEdG9hJ3MP",
  "key31": "4z1mH5u5GcHyP2T2XAaGNHcnVwgX5HTZ9ATtv1Lz6H4UeTNYedArrpQmqaW7PYQTfYtPEDehSYUj7L22pWzDWn6z",
  "key32": "53qUMBGkUa7xkGkyZywRsW6ZPQ3KuW3V3jc4yAjjS8G9P6DHNzu1uS9BUXXPMpzjVihC4nuNRzPBABP7xMkS99yJ",
  "key33": "5rFEtyMgcvsDCscAQSZs21E53c3beuX3atnd1EZ9CmQhhaqDdoV2w2KGREHmpdaUkF2ZQdU8VtvqpNHu6bXZTX3H",
  "key34": "3GHK1GwzFbVcPgnRDLtLcnamnHBqHYoKEYBYRFiaH85o6zTimQcHj9pQn7TboMC2H8Bn9zkTxezKNhxY4sHMMKAL",
  "key35": "4UMJSNQDTuMCMLMXdCzk1Ndhte2YjYJwCxWQbhbvRjBe1F9jMJ1tKTkFQXp6BKQ1KvA4SsC7RoUh3iXc3y2QwnQx",
  "key36": "55yX2zA3NRVaTxM4EF4hBus4Djo8mGqd2NF6DR24qHuHTf5cLFPrhgL5gsSpzzRjLHFdnajoz8ukRdnaVBLyfhZL",
  "key37": "65hXFrpYaMkxUPuFHgSmdaTp3Uzr6kxWrDdw6k8urjPhBC2MTsXTVgggPn1sp3Be3E3W3QNPgV9RDTbtL4LCYcQ7",
  "key38": "5BrAeBprcG5KdX2Ld1QvtodPs2ZitLGa8Giupggn8n8jcxgsiUsyNub1frHLSEJcnUExguqcCZwwHgE7vFJaUZra",
  "key39": "5BZ2Qp185wDYGD9vw1iUmQQqEDJxe1MH2fjGrpj2fkurrGVNjuke83StbAJThswd8vuAXjPJodUPbCBRBh1fkMaq",
  "key40": "jcBFMJdZupmzA59n5YUNxhF1diZCbbnKwktTYRToFgA9XBaBzQDpRrcAkCKGUohUyoDj5RMRUwAGX25nuq1kKgs",
  "key41": "2yMCmf7BsDtpzCe55byUhC6KfbaAF1J1KwpfbmUxsG5eK844pawa1KhjavubUTfpHUaibzFnr5vG64s8sPz6LE7A",
  "key42": "2TAk3DZobsSude94joynqbUsBPvU19Yu1Kbr2k1HsNKkmC9XAtj9QKkfxLjzKTCKDWyKNuP9MtEG3SdPkWQQZUnn"
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
