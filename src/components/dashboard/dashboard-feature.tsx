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
    "2A3xwaugifir7VRvCrPRaVtNHnBhVNfEtPGfjtm38C5Jfqf49tjeTd9un2asDPoHwhPEe6cktUHfW2uYhmXJxP6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yVqFH77RhRRMoZmQAPYwnboxTL2VQsmGRu3mrL1WV86mNvSZMqqi8iwJ9tyj2HuwKsq6GzY7cm4ZcjqsVDCgk1o",
  "key1": "5kP1bT2oSwyrgGq4ij2ESZrYE7RL3u9rFL84cS257u4Q8HbL7okqGmg9WHAoxL8gLoC2T2dbVeS9H6xZF5BdYwd2",
  "key2": "53D1xxoGTNnu4Hyc2uoJZskj1Pxdx9XWiXphigKqEPDdqjddS4SXPBgTRnPU5YvgmB1gFgbVM1eMXn7zjugG63bZ",
  "key3": "2PvfhR3DvrDhxjRGegBgjQDX64HHCS2peU8NRmyCK76jpUWVwbGCBcyUBeUAtqESrXUc4oiphocZBjyz7BwRHtvZ",
  "key4": "21Gg2jMTFR36pitvCC6GfqrVCgu2SaSp4oiyxASvyirbz4eHD384dJiRcisBWNUoymAd4wfLhnVNySnkb897CHwk",
  "key5": "zywMhVR5xZzx5FqLihSPHgDvGNR8sLtMeE7cbZkyRL9rjt1fFXdpqfkf7ZhpqoNXQgnkPbePuwxX2XUxZ3pczNQ",
  "key6": "23FstQCQfbBP1yjDB5YPtDA6MoNCRcbocrpJSkXwuforM5mBwdE5xv19ZEuM1CngMoGDL2ETeKtFCVacdmgJi1oz",
  "key7": "ieVgxjGyeaM1oNrVonmx1yad2fy3aJkV15Kd6ZYr46sNQzjNBDMnKQgheLkpboSTyYWcXXVUHg5oukpKoxCcTEN",
  "key8": "2Y442yE3rn9xsaturwZtNUxGxoR92XufvgtdXDxFEBXQmLSr1JKsU3EfCY4BMdL8Ff2aDSYm5UQ3XPTuBBybszXr",
  "key9": "ngz2Bmg7feLiqJC3yJyffQvSpK5GfNmKFq3nqD4BTajvnpMy21vAoKZNFsZhg1khU6SdKrFWy8DCMbMGALy6eAF",
  "key10": "3eS4gDFMKpa9CrZ6vUTisrS5XeeGncWYtdHcLgiDPKNWxMUTA4zTud82Qoe1KiaFb7S7FUmv5NZhLNEdq64xXiMB",
  "key11": "33aCtAZ3ppSg67pokrddKgfcZW8LPsndipKfoCBpoKmktjx4iddcsuTSUTjfQsMr8QmoEkDABjvNn7pUyqYV46DU",
  "key12": "6LfMpNDNxKXAHC7c9gBkKEhRxr69syiy1hDyqZUpvbk1AYHhBFGB6jAywg3ecxHLZKfvmfNgg6nt6Y12AUYEECT",
  "key13": "p7R54LUrKifwNLirnoXG5DHJotPwACM4Lmazabdj8CCHEB9mfaNipkoFnScXntPpig4yWUZwXQeNfEXV3qhtchb",
  "key14": "4r59k6q8mZmb6tewGLbJmEzwBCaHvuoibZkJwPbsMJ1t8FJxtVBba6DtJKNKYnVgkFEp69HCmxTamULSMdMv3fwq",
  "key15": "kSdK3ThRDs2NCfaCmm2kGtR2rHhpg3eQatsFa3m81bs3J3r6T4FLxCXWUGESFQJqXKC72oDcPa5GFTvf4SuR1jj",
  "key16": "4V7nG2zddy888J5xN1XzTH27gH54YTM2Bb5EsAHz4Jy2CwbGsgaDvhcaNhiVYfa9Tq2f4yWhfmhjNofac4NH6GL",
  "key17": "58rDN2yZhPQ8mzjiNqw4pmQwwzHEKv4rGZXaQXb9sZyALSXnpZJvNbrt2RWFX2RMxcQBfs43sMhVXijFUEob91c3",
  "key18": "53fi7CvyPYCgeJy3As9EvisY2ZNkiichqcxTJASspJ4jVAa9Y2sc6CBycUMWdMjtZzswduz3ftCKNkwRHcxoN9dZ",
  "key19": "4zUSbvNrpaXAgZSz9M5cFhWLiurvpz592vBUZS68JkFZrXnYWeTbd8Lw5b5kWUfft7n98ZvLHhkQPgveNAZRBeTd",
  "key20": "4sn5NQajYQ9f56QSwAXQ6QMtNRZJCboMECPh2Lw7QXvGfYvqmzFACfN3L2b6dxoR8dyqoFHzt4X3y8gtKiCfxmdC",
  "key21": "5fBh9Q6tZKJfk2aTepErrXrkMu1YtX69mE6MeAqYK4bMCqbuyBNw3HCpRHRzpNy4aFA77g1Y9DpCgovpQJWRuErY",
  "key22": "n2ytri15v1dF7QREE4w6bAPhwwhgHsCDW3jxgKZsVP5UB7wDkHVZjxHR7iHQ8ppEZvCC29u8E1Nq1weB9CpTphB",
  "key23": "vzQxGAtsHGEQYBGmVfCXws2cmKuRU7CSv2vNmgGovVJ3q6xYbpiQigVnH2ADMKxZZDBDDKGY854j9w48kU9nMV6",
  "key24": "mqRgUVpyybvu8d9ZREpoQLy99vjaZKskD6CUyhgr8J1GsjEka6T2f3QsRF1FkABz1iidf24i8BTzXXX9rZ6ZWnC",
  "key25": "3Yadj1b85ysxWdVAfwaC8dgb9HkX2aAyQcHYVCurK21BJaM7q9kUWdfuSMNG2ZXHGvhBK5e51uAD7vnhbj1ynvMv",
  "key26": "5cM3hPdYjXNVth42gJkFzavZi5MUBeKZ5xoA17gamNj4tgZKw3fnsyajHC2rGTS6UHhWz4SMtvyXwjnqAud9Ywq1",
  "key27": "4rUEoPpF9ukRjCsBk7Jz548dRBM6AwnvsGCZku2yHUDQPZsZfVGrQ9bxJvmZmSMruN1zpZBNKUi5aExYfEu4RMxc",
  "key28": "3BvL23d5uv5XBWQb7uUVrdJPGco5mtbWGVjiMgura9jVqbggFViKZP3pPHa5QTugS9uPHbQQpGUnjLDft5t5jeWR",
  "key29": "JfvM368A2togRNmweKkyabwFdFJdHjhMZdvP6NjFtsgJdMGY5C12ZEodgp3nbPjkRPe1dtBzEDXJZztm8smBMeS",
  "key30": "21eRtTsDs4Hv7VQgt4VbRxMQQZ1vf8LnBCwfVQyE1Lt8cFaEybEVaVdfCkQQY6Jo7sR7aEJSw1A91SQXFMUgD86x",
  "key31": "2rNL1KdCNUJjT91zUoDffX5c4MwCF3shpNx2GbP8xrfnZpg9wM7UnETkCi6kQkVkrUPNEsNG43wA7D8SXZSgDKSo",
  "key32": "2nfDQ8mi9KHSRqBMBAX4hj2wK1WsKgjCVmVMPeVyyMa9irFhQLYmhqfaZm9bZn7ZzQiWTiqNJC9ssJZPgjCWYG7L",
  "key33": "2qvprjS9ikjnzLnDpQeVfqQdMqp6UPy9nKufiGvihNZXUrKnkXd2WFohyrGvEihE44BviKH94LWbQW6EzayhpUMM",
  "key34": "3dRSfKeKc7dgUQzo8Ktcsiu7YLTmsyMyGoDZNbFe4rgkLjNMAmHwJ5pyJtEHnVDnUQ4V6joyiGvsaJA1bs56e9iP",
  "key35": "62RcqyhnvB4ZQqSK9gA4W2PX2xB58QAd4TM5Gt78mRd2AdwotUWNtkws8WwrTaJfjpiSNA4zM3N9Vfht6f8AW9Bu",
  "key36": "5rjSBPnv4DZ8DHXN71mRqe2EMMX8XA62awdo77ZrDqMhubrsPvHQS8ohnrjo7BchUAzfxqq7Hc6QoSfwWgZMfGTA",
  "key37": "47Zv5a7xxNtknEeWbVadqCGJ7BAsBBsxygFMR5y6G6c1tAkAKhoFHNmdFauWtbhcTWX9xCFwwLJefL9C6y58cfbN",
  "key38": "2YHJUu74ANB2V5xdotuKdnxHYGRsB2smSK6TCFFgkSArUMst5DHA9mF6oQ3GqE2QBAyHjSWGsn31ENVd752Gnhhu",
  "key39": "572TKCK1WVCeKYeiSDEZ6w3LScnv5rqMdNwqEWT5qX2w7sRLmFLBDPb8A1iXCFAW9wMXa8JfGibxJkf2kpmm27VG",
  "key40": "2TkCyaXMdXANC2qh1Xq1fbhzF5YnARu3WDjQPjS3fW1LEHuEJoec22NFpCPs1edtLRXwbYBPAN8AVqodWzGqVew5",
  "key41": "4p1yc1VkVZcGF5NYbVupKP5rxtJhsqpqToHSdk9c4myPRy9mW8CMjaJE8XGBXe1TwWDAqxNWf1ge4wKA9FFiQwX3",
  "key42": "4R3BtrTG5desBvSnuJS7X2LLREKZB8fzMFAyc4uYeocp5RJCgqvmwZ1HiP2i825opX4X149paLFBU2FPTHTE6eC8",
  "key43": "5hY1Mh7M6hLuw83u2EBuiSQJ1qUskbC8Ryj1HxTKT42F9zovke8iNLUhbuw4FQfjfxarKaB8YwHCngwHHeWUs8Dt",
  "key44": "5QomeZaLptUC4F7PhA6X7d8gExmktqdP65J96sK5pjHLBHirJRm65njvwZPDFRYpE6yrvhy2QMKwWmP2k6JhzQPq",
  "key45": "3hdxXNNpbRVdfbQTw9AmfE3Zj8yhr9E4KfTJo8pmPWYKDjUrf7zdAUYCRBKnBGKGCBiLGvuntQozPgddE4YrJDTo",
  "key46": "2Cd2Uawr6x9GVCsBmXCaBqogiXdH5QWKsB6oJoeGdxWAFJW63zXPxyFF8z5vc5FNL5pANFBcBkuzFGVbDevgPRrn",
  "key47": "3Curgi6jdkt6jYdUPoVoX8j4W2cJyr3iX8jp1TGDJyVt8as8hqxfgFfhiVMRWgR4K3QZzhxgGHsrzhVqfwTqHTYW",
  "key48": "62Vioo6skG7bM8tCGP2obKJcPZggUQY6MHJJ5NLtGGFWZbsLYDgERMv4MGpxZgPUk44gwipKHQR389zificW16z9",
  "key49": "5Qd6vVRS9cyQF5vwTiknMqekS5h1eLRe1yNozscezghk4YztXPKwUkrJx3PynSoeHRXhPimUyZ1J5joDaxWQ2YGB"
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
