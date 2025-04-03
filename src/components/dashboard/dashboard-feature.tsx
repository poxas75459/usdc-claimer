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
    "41NvMdJXTMojq99gUznWA73i4TrRJyHFbFmNc7NSnguir5QjNxHAiHVkh81jK29btDLVrf8hYsG8qUDB4MrCDKYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xKD9wiNkAoGRd3tNncvZacVu5ScZJTa62JEnS6PweuAueZcQN5frwr8vWhmCyRsQCdZyL7mbAiyMNXfoMu2qeex",
  "key1": "3mnqLpNiyVPwVrDGuaAV3QH2DWKikdksT331Kng22aBzbJ38cUsEitL8VqPvAHsWmErC5NQ9kvP6ZtEptFofgjgW",
  "key2": "7bWPt13Sh4V6PrK4Z63i24ti9jZVWbCuTSjvEfKEFP4ab5MZU4JGvASW9KipLaqWRx4e4G5zG5Gw6oDvyL2Z5M6",
  "key3": "2i7854AnRZ4k6Thc86JZBDyvdGASsVGamPwTyWLBLm3Pi42vtoSEexpSPuGADgDa1jSkuNq9oLUtuYtbZersqoiz",
  "key4": "2FtySvQg1CqQuuHVsEWK8Z6Dm8qe7n4tDSXPUk1gu3Rfhvhz1LaPywvem5LwEXyFTWRo6DQHxGSiTRn2LWJDtyLp",
  "key5": "3TukE412JvtDKpj79Q43DXhoNYzM29pF7XmMVykG65w8TqcN9ZnfNy351KwqFaXX51r8NCQKLaB5Q8MXfuE2fh5U",
  "key6": "3Ft4vzbCuVq3qCugBWcq8bZb2JyjJaYiSQ3YZmDP7oKeqMn2UsWCio3LEXT5KipWNJp2Gtv7bZCjiZhtDtb4xyeo",
  "key7": "4uxNkdUciKFYhS2qPGY3DUuYcPiy95uefMbkgkwHFCu4EMQnhdZamR3PYaEbhwBzrURyeyejwCL7mHtawTjbEvbv",
  "key8": "4cr13kzAxvAEPNsnnyArdfnWVQ2XmAwnuQj1u6zPfMv5HU9cumVxpfV72AmgYUeFU9JGCERrt67MnShb5WErjeKr",
  "key9": "CnU1khxmLs6DSzDmzcx5kJM88Xx8Vkw7w2eLCZP8vmUrro3R6szMUubBbC9bJq5cxtsw5bmDGMVsnJwDTXk691P",
  "key10": "fp5TKd2FJo7e1X3dKMvu7cntYnwsgUdJHuuQLF5BqpgDm6aZELF29PnjYQWAcotwiX6Xud138c6Xm99jPptQY7W",
  "key11": "4Y7JP7orD8m2qxyC1WoN6xqRbKhugxVATrNdP7DtayNfKmaQqdwSuRMe7ttjShpLyua4XcLf96TWLxh7u5kMGaig",
  "key12": "m3qTHUyfLtHXgETBuqTGJzskviE33X2FLkbZaqfHzP2u3ehBYq32YC7Y9t9jFWArNMg68eY1YeGJ49pE7roK7Ga",
  "key13": "4hu3wub72PQA1ankR1go45YmGk3VpRffNY6AFmbz6zwBXJU6U9xA8wYPKKFBNT5iPenTasTU279Lj2XV2KVkS3G2",
  "key14": "2FfyJxTwFFfeFxkfrbfWY2jqe7j5Pm1jJLGCZRAm3WMU8HeCMZRWaNcbySpVtTTsaLUDcnqrCoPS158ToNw1mKnP",
  "key15": "4xbSw2tuHe13DNXh4mefKQZckmwgseqBNNRQufmKnB57U7GdpuuEBH6krp6JhJd14fkNd8Qa1ZDEuEHYUTY8wkaS",
  "key16": "4aBp1YV2gbWVWCsGLV6YcVq5gZYKBTsQURk5zpcpQVB2Bo2x2R6TVePrNTvEPGECxw8N9S7wXiyqPNYGcgCaBFjA",
  "key17": "2xiL6WByGvgYq8TLfwnGmx6vLngJibzrfGA4HMVB5HP9iawoYQN2AHejAVu2C9ET1BjyfxVvwFTSPTaG8pxkEi1L",
  "key18": "4nH5SUWM5gs4wXr3LJMinXm4aiMJoYoeHvYw1sQnKoz45GHoWRfZozr2TcC97ukCx9BdLhFEAckkP76xipyGufg1",
  "key19": "4pqHKLZQtnSrpaZQZWT5uTSm5dFLzFmtULMYqzU9f7XQi8TLhK2ngtnENhD71YagUbKMahoYJdJv589AKXk9vgT7",
  "key20": "itfW3h4jgMMesHbqcK4atGuzXfBFrmnJUu96hQg4miNaJiGf3NycQwHFbwfK65CxfBEakGzDXdnKpmAC74WP1Vt",
  "key21": "2X911bL6JpqutGPQ4WxbG2u43a6WntvzdhK6s6bCfrHuDx2kwfc1Hg3ssXFuE98W1xs2mZU9KcNoY5ophS7UuSbY",
  "key22": "2Bc4SPwz1JJN8mbKsjjmKT2X54LVak7wkMhsWm5752FgRipLX8qmiYMurqTwxk6aZNAtGi9MmA81s5kngBNqu9CX",
  "key23": "qz161G3NsFebRqBNdcSXtJJ35kwp62z5MpELjttzqYdSh7JorrFtsmwp7t4RiGSvnxAVUQWahKWCYxDAgrbhA1E",
  "key24": "3yM625NycKVXq7yBcYVepWHbGxtRrpdr6DWVQ8ngyF9XdFDLJcexKVk6J557H2jysgaiXojDJjXTKqXVqPVSUymN",
  "key25": "42QM4oYaQx7jdwQoWms6HFTWzBJnRGZzv8FLyLubB23sFRJ6HWXDQhdmgyDpt7aSyvggt3qGsuozCvmtqVxi3KYH",
  "key26": "5EvduPSxG8yVMoce7ytNJhNmzUd2VchNbRdAotfA4c4PjTZAHsGNQ4A7iKtnPrBn2b16DVpqsZSqZmRWYGaSQmQj",
  "key27": "mLfvTE1gBhNupQpN8Ui7MAbtGL4rDkevU5RnHeWX14roqR5BBJPs8qUs6KJuXmJyrYpZG3Kscn3CWRNxMZqySoG",
  "key28": "3pSoujA5P8arTWZdDxsE68RqQJjAf123b1pyDvvZcny6N7ETB2hxh1LJPoWTvg4CXZehbFQEpA4TRLmaYBfmHgWi",
  "key29": "WoRJWjgs7yUwnRnWpN6JbyiteFMHAx23XfHVtWmYmhDGFa5UQTQqK1ay3Gx2PK7BCW6Zvkc8QELGEnRDbtiSJU7",
  "key30": "5hzJietxxyFLQJYzTTwVoFNjrQHRZnRFWyuNYpGVBUwp7KAAkqBrom1kwJmwr4y6g6pqT3qscPaibLgbcXTRtNYg",
  "key31": "4Az2BECvkpjNnmu82ytFq1EcQ86EH42mkv2EgGrdr4QUaQvNF2GVypPHtTSsRZbxSCtjibYw6gZQUE6UneBSeSgm",
  "key32": "3dVf37ShVUoj6bd6PcxccvMfYbELmisrkR3DcsmTQv4h5xPfFfvrLpwp5JW1v9RT2Jsz35VQakBLYD4R58DTxpr",
  "key33": "oXKK3pNBUwGjBAr8xAE7oEg8kgfBJ3rYaECR4pLgLkJ9FyeQXHEPxA9iBEskjKBuH8pE7BAsuVVnsbXd3nKoXVg",
  "key34": "5Lq4eBrdkJMCtp5oNAYRKFRHYvcSRcXJ92UfpDVsWVU4w4b4vaX5eXMYCUUAJo2WiW6dBYhHd8qwGDS5N1HP2J82",
  "key35": "4pSLPGYxXRHtfCuBSqyr2qqaiZapmEA8yTTQq1mcGhNVe2KhJJbAcV2hu2XUYvq8FFrNA1hvSyP99HVAStE9EMN1",
  "key36": "61b9ewXjJ522Rx4Z8PdPUMXQP6cWdnvarJMMPmGAfFWQZRQFkA3AVu49ad1GmQwnK2U5QyNooUgHUPgqbWdKrGcU",
  "key37": "57g7ghPNG9LVyvcMDL7jbAfz6Enkk6UhMjgSHQnauKjQrY6zgFba9A79EqXVAj4zugWbcCT1TPPXDbtsFxLMAWoG",
  "key38": "66s4fusq8ocrA7V2QAhjTk1JHs7upueTZRdrms5EUpr4uEC34MC8WrPhvq6asFgaGF34eYHXG4SXfyaNktHGgasG"
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
