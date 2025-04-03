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
    "2kxaZjmgwEKathHtqv2oqmAQSqLgLDBFMeUk96Y35KMQv7b2Asbq3SDhC9UZVYZwea3YXvMkaGxZ3bqsCmzMjcUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X8Zm6D4myhafr9fALDL4fBFYkn6BZ9VYzx1c6XfVrWqPzAxCtCiFUX5mvf9nnaMC1UVHBMiaM7v84W786kMWwrn",
  "key1": "2tmqwe6qCNGGXgBa8Grm51PJrhreAUEqLyKxr6EGPhTUrJTddsWWGgeEKCjDK5rT99JZCaYRKXscpisu6w7GPz88",
  "key2": "3iJWqHivLESa4Qg8GkAXKxYMMNSgQSSXRfCR8DY5fXfB464j86CdbsXj9X5WwKTBG83BEwCWg5nmRv2DPwuoYH2t",
  "key3": "5r1p6AXACybBMHqSjyf4ce287DcYokSrnDta356RgZadPigeo3hKhobYxXhQPuRn3beo7BebgMrwtouPBpk4sKoi",
  "key4": "2GBDvtZa6dh89HLn7DRGXQKevLpE2PQ18Sq9p9L39wrK9JButkHU5pgwCQwiiJSgkXji1ayBuU2R6Y2okpQmY45h",
  "key5": "5AYKyY8NnnKGeMYc1cAYTQ4i53VWHcy1rqmBZgUCp6x8Mc6FnVXDrWft1XHZQ7sVDmKmtx52t5X79rMRdexR9SBT",
  "key6": "5S9dKmEHeZhbxGeUT5zr3bth312E1fqKCuGqvNxesXN6U1kwscsJf5UcXRjbzDDpuyDThuPAczWZEgHLW2WfBnrw",
  "key7": "4u6TbQVib39wknzyM9KxuZaha6Wk6Tio5ZqSUroMCv8sC4tKjgzZupZoR6hWjs3iJerUFQ9qcTqQF88ypGrWwhV7",
  "key8": "4QaQMYZB7hy5WxX7ZLLaEHRD1Cr4RsnaFRMiEP8e5b9nb6m6Ag8RQ9tghco5FR85SdXeLAbTW6DZc9iL7BWQX1co",
  "key9": "2K4JRN8ZsxQxTfxFekk3JT67yLhaSSNbcYFLxmHJQToizyRFwjKu9zRFVBHtCDnDgcDreL1k4PmuJQXexqJcQt3W",
  "key10": "q1S3f5J8RwBhcMEkF1bBc37UtFvySH3325EaxZohZ754eWnL4NmBVFwdPpzdqpWxtdzC54aFsr3YQfjFg8KtqTs",
  "key11": "3AmcKRFsAbypcpFtRXnohp5KdtEp1Mk6NLYW1DyX3xbpAxHe7Kxw4V3zjqLToogN1WZ1ZYgbVT2E8b575LJXwxaz",
  "key12": "5eXMzyYn9MVzxu5PTj7hgwwEpd4mitpyvXh2Rv6QRKjwWreddZnPoKWwT1Nq9H6NYrZD5jH7Cudh5doBjTuEs2Na",
  "key13": "2cmK9xg1ycb8VXZLUAAMj4tvKzmyGScKgS1r1T31z7C4h9p3SX9g36ZEMP7aARCnt7X28iYTvpv7iax6gjm1krTh",
  "key14": "2rKJZ2ADKNXXsjrniDaCPnS3LVySP4TyG2VmqbFfJdt7AgQVu1fUYC6qsaXYcteCaMVX4Ge2GECg9oBY8PaAg3zb",
  "key15": "3nB9pgCadmSnYgF6drj9s16aXdgPTmeq6yXtDkAUGL15wiwuedypVTh4VszUvGcpgUiCTPa1o8iBoCb3WXYTvQiX",
  "key16": "5rLQK9dqawueGWLsQ4jwsfB1fdRxiM6cVpCwKZcZAEA4hH2qjRZCDviugE4Gmi9CRRU7N97YLTkrTFcuN7ZfK71t",
  "key17": "2Gz8CLT98uFzbWCMgYZLp7ib4zZ7Frqv9uefvjtnQFQXsYgtxCCjE9o8SUJfamrjMp8eaJ4eRaQqFvk8CNbbBRyp",
  "key18": "uYU5Hq5BaccPf8hCjCVcPSGvvH6MQeMi7JPo2JvFwCJZvefeazMAsMn1PGaed6L5a2WtX8ocAWwTie4xYWYhWeA",
  "key19": "AErfZB3DPxSmBCrhgD75gDbNnkUvhavwFZAFGhN1ugBh1t8WzSmhYGxUsiK2xZZX58S8PbGmoFxJE9diSkttbZ2",
  "key20": "PxJig31j5HkNTbCJ6NMWpgwuKaXLe376SqAvFpCsTEbDjUbGsbW9dAvydnzGr72cD3Yf6711TH2gVtdPbvBysiM",
  "key21": "2V73guBavqzdjHBwjYk46XfrNPiTecjJzmQrPfz8VKUdhrBHbtn6vzXdRpQ3EjxZSBapVdwJtH1R6XNhBaeWpbbi",
  "key22": "FLr1Y8wym6VL7iXmoT5qiwQ28KWdmoHTvATvUkWRouef91ZXxPwZeJHfwenMXVjiut1r4bsfa7Ec4nkdW1meZ8z",
  "key23": "4WaHSXwUeDtYCwcNSqtMTzhsKteM38jpijQeMjhoRgciVT3wCibRL7CjSMZBxg7gQfE57SLJ9Rh7x3VB9fgsB184",
  "key24": "4LLjYNRj3XNNednCTbkhhaynCVLStMQ9ijdTPsijfthbZat8SGFYS7DAzLhjhEwTNzUj5JqACjKabSjhqLYEs4yn",
  "key25": "2Rc6wmeLXvoGEJY9wnEmFhgtCryidqoZwmwzdKKxAVkoUKDz5Ka3vtwD4bJBX69NRN5EpVJABGndSVAcK5xo2QsK",
  "key26": "WLVrRFCGBZ5kJoyRo6fJGRMU355LmjkxZvARwN2jg79R2mpYri597n8CdNH3W6TJeu3BcaT2SV98DNuUipq7Ra7",
  "key27": "3vfrdFUEKgz6TexvfW6q6nSBp8w81MbsoSpmad7BNRVUAPmZWM43SA7DgjZ15t7onbZoDHRpz2m2L6rvcrcq5mgS",
  "key28": "66RcRaHQjvjuqNpyPBR3hWQbQn9qszqRMXZbwaSHtGCvXYpZngDs55E3hmZMrQMyxuLNWZ9XJzMwJR72KQ62nhSJ",
  "key29": "D1njVkWj6a5pfH3fFhzWoS2GXbWQmgKXLzWETLWne9saRALfoi6saNf6aWxwgGZoXC3x9HjqvcKVammTcznqeJK",
  "key30": "tmEA3dTgzpSjXYzRTUCHha2p4z5Bn7ipbY1f1GPQD7RGmWKeLnQZtT8XCqoKtXYfUxBSfGzYKUwtbCihosEXy81"
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
