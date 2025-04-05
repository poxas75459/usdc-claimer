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
    "5r7i6sqkfGvwX5uVCPjbjJAAZfcHzGTaLhxPwKtjqTMeg28sj8EnZa3KYX4cazSNC6t2srBazjV6bCp4Qoew3s1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sgUE5iFHGKWxkjGz6FxeoiEBZ2vK1uphjWWus7cBYecr5QMACA4d3mUAM2sN3E8FRbricsbEtu4B131i5rvnKXo",
  "key1": "4fJ2VBudeDR5TK8VpBfScsrPbByHfeCGm6P9s5TzxN2Q5vHruEbWba6NqiMTcrUxTZbVg9mzBRv5d4gmCaiFuGx3",
  "key2": "3ixiFqnD3G6q3FTfDABEgubBwVwhzU7YiEVY2KoLk7Cd1ShQMYaSsLvdebcHELgPNGJHuXYjBGFqELodQVs1jHqV",
  "key3": "oozuVroTWZaJtTwMv1eAViFeg73ShF83LwK259LMeAVwt4Em6vKihgxL1xTTjKhgTkAZyeaF5t71PF3MhXMfMNH",
  "key4": "2xvAkhpcrMx4Vd4NaoSUFAQUJ2D8mn54aWSM2AWz66N6YkmbZo99qU1FFHZeMqXeLrgXFW5BCpRhfSHBbwN42SpQ",
  "key5": "2FEd3Ko4Keh58ruEaxedjLBSy6tQtTfaDMQNEmoaEjjwxqGtLy9fHAdBxadabr9pJWRKtSRautKFTGQMNkyqgFjw",
  "key6": "L5R9Hny7KLk7qdotcuv3DgB5zDjnQDoJF7wZDuYecEyRUh22etfKd9L1XXEegsgkRTrXrBsNJoGbKHY8ogeYF7Z",
  "key7": "3SGZhAmWLvGrmFjc6wTMxwAKptWzXXJu2yFVFHwCbQsAXBmgL9fiZcd8DKxkKFKeCr3Vj2xNNXyDKkWBy7FSAQXw",
  "key8": "5yxbnGfUdVihowysAdYyRYzQfJNZdKF3MaYHv3esnHMduQErcMg64oD96ZRCgRPRa1mmNXPyxWMu1cdbfuzieQ6d",
  "key9": "pq6r25Qg6A1QgjxEVoF7DJrQG7kCUtPYpsQH9VmSnytBcTJDx8jZ3dQhhbZXCG7aoobsv9W7K8D7xjnLCoyFtAb",
  "key10": "geUferG8cFJrhNV6LrMLY7DHQ2Jy3ZCKZpSNytCk69ysPaHnV1efYBF6672pyY9xYZoSufL8LdH2TbM5TvdfTTU",
  "key11": "48BiqggCnbgpPCsNNhMkriUAyxrz2R81LHZK5FEnu75cdo7dMotwidVah7yQsxnANiBkYeTLnx1EHcspRWacyfuQ",
  "key12": "3Nf8iGLV96cAEJFRixH6kaGzJC1abVtYikfVTfhhVXpMtx6kY3ARJarWusiig5K9jvs7f8HA7kTHyuFtz67VCrGV",
  "key13": "5b1GPL2VasrtfNRvLuUquYCCFWPx9DMAwL2JwDkD9t4zqkHnHReYtDUhUhsXHVgz5zsyAARyumKL2ndyJAsVzA7G",
  "key14": "61EVComBWdDngyvH28esEQu7LEQBiJ5BGbDjFoFGASdsD1AEfqvaJWKgxbm82dgvnvqsqVCbrh2wQMHLaxpbMt5S",
  "key15": "adc8n6oknvaEYVtqLwC7MxTMcUTN9CnN7bcWxgE98zb49YZzmbEwynfduE7doMgTVBTaWSZB9kU8LBNo53SrUJz",
  "key16": "2TygMjkRACtuagr8P1XvDmxVBSqRo4otJJZeZS1J5GWpoVezfiJTGydzq7GZuu9VPYsd6pJkTVZQwx6AhRSjW61P",
  "key17": "3dCTE3X4gbpwUW8oyUd1GzfcU3xKeWpSFStS4xDqPDuFHR24NVevQwkadnMncx1dXVs7AvExhEUVcCTrXZsA2VEp",
  "key18": "oih7KY5Rzyhe3Fm7fbEDfJ6k1KahfucD5JJ1K885xZyG6xo6u91GzfRzF4QChNM2CPiPpoUM2E3BUbTZnKNH55b",
  "key19": "2x5E5VrGwQUCtk7BUYL5kmLTxDtN9wKYMnW4DbLe6jbJaQguG5TAGByrF24o7ecDaSUMzhdpN2AUMgiSMefhV78e",
  "key20": "3ZV7HLLHCdzeYEtQs2fKJbUm2ZtLEAmTNmHWnaUCwW46Qrqto1o5o11FSWuV1T1RUJ4QQnWeyEmrYRnKGHXDfZUX",
  "key21": "2Vf3tAXLHv3GTA5ZzgVXuEBiVqL6ezLvLKssN5wwbvgk41uJwQ3NUdQVF2zfGq4wfCxTzDMkXqdSmQPbwX5eMCsy",
  "key22": "5J7qaJptathV5UatwJX47TsgEzGLFzk2wE9tgLNDdTZoqC7j41wtsxfT271x7sVj4Kxe83wNkwBNMktjFYhcjd7S",
  "key23": "38VVvjpJfH2SnoyhCtu1HYiyzfUVfyJk5FpiiHAvEa8JfMHvWzjbRgUuTxmM5HSmLEv2YvEPkFYGNx2JrbrhvHLn",
  "key24": "GS9CtXaU6svzJeFX8r5d3feRt1GJM8esQBTAna9UZqff1pzqCNfR6sG48DtS5g5ZgWubHxpkpbjpuCbU8VQofmu",
  "key25": "2UfQRWvWbmWuKpgSQZmbXZa1L9AW4bjDSUTsNePJHCjEaaqbXpDdjGyuN6JvkScjYnyyanXeJ6rj556CZ8m4y22t",
  "key26": "JUHTP6X6J84nDLfEjVcdpAqkkeVUUdRzcYuYU3PcJmv9bUEpGCPRvU88v9y6ZgWQNoHRxQQD9WX6rXLSwdrcNN6",
  "key27": "692wrGM3TwYDu98uLJDCPFHaixgrqgcboDi17Lbw5yG2u6n8CZomCjFB2bHevwZKEPEosmYKLGGs7tooca6wBXn",
  "key28": "psScrdQSCaY6z6qixqyeWXosL8jBAsPEgEGiGke3i8qghe1WBqBX6tZn14ojFzYUMepFijhGd7jv8tPPEgyFfrn",
  "key29": "2Wv4q2dnFaQih1UnSAdvN3XFrDsEiJLQPaGBV9pNoYTbeUf7UGmjZ1cmz8k4iZ4mNpxUCvZiC94SjiqdkyNvg7VH",
  "key30": "55prVEKbVQXp6BSTr3Vfz4XSP7Yc2ne5A9jKWjWSbrW7ok7wD51RmsmiH6wY4bYb8SvJpRKsCniAas3P5nU295rF",
  "key31": "32renNqvqbfTDjaychG7C6u9PTS9VqDALRDxmBLE2owcEh1hTkLFPcpc6ua11MHnepazYmfZ387BA7reX1oxR7Ud",
  "key32": "3rYvuWmqpuCtRmUs17dWaCU1ezFjVKKpKGvGJXFqYvfEfiAgdMBLt3R7VJgLp4r5vwjpzo8HfiBrWiY1Tad8TRT2",
  "key33": "3KxMGHw8GdhHbmRjcHAHRkAD2wcsSDNNB81LEVC36ZcWXuLM93aaPXz2zViYM2orKnfSrsuD5G2K8mTtCMnuAfdS",
  "key34": "5hVZUA8wtH5sgWPEu3SZ6zzUVj6qEBibMjwxAcdDWPspNz38v17aJMDvimPmW8xWVgH8RFJbZtwGUkkE8xcvbsJA",
  "key35": "4pT9BJy5iBVnUnQ39R4zHTJ8eQW6VJwETTMs14MMSnVcCS7DUDL7b5gRrpVnzkpBrxAWhWZ69kPrki96sMxmAphY",
  "key36": "DCsaVJs7AWPBtuF59KvsdD7scEHW8pZZ1nanBGLsH1D5mnwCRPhvmTJc9hgJVnRvZGhBN3avuSeoFzgnn9WoWjw",
  "key37": "38R3Y6fEpMNuEfdwmHzmF6xiHDsCrdqW4z3mNAzdweAsERPrHiXsrr2eVefzYNiQhfeK4wAq5XyRaiTKnsi59vob",
  "key38": "s1D3nSbDPiYaqrLkegNsQCjuCpMiqyg4aJWKGRmzXaNfPgUWwS7babyLUDj5DpXjtBtw7qdhP3P8gsr93r58WVs",
  "key39": "zzmd3NDC7MYFL1iHpx1QUC6zcymdzy64BwzFt4E1h1s99HeUvs52ifsV5TWCdb8vuJg4mGwN7Qd88CJJ5zUCYGv",
  "key40": "3QoK9tu9LYC5AFS5vcRNFtHnJrFFGDkiLD17TKbhan8HUvCHDAEkvRnQ5wGXyj3w8uDDLwT5i4wjWqPMHBqUstNr",
  "key41": "4DVyAkegB3cX85BC5GPYdJ8zYdNjGdpBHAYoZuQpdmDtB539GtXgDS2FjUnVi4HXd8o1ymwqEp1Ko8fG8AVtxXkN",
  "key42": "46AcMuiN1wJWhKbm2KoEmJto2pLqEan4hz7Bt6GfoQigvueMrdHoGwTr2SdLdvizPjX1pf4xE6So4o2d1rBYrcoH",
  "key43": "ULFkRfkd6i9ucZgyoSLSjx45yErdVSAeHaoxFgLNkFp8ACvVSGXzkLA5cFxfQ9airkVsWKPLzb1aeqAsKwDr7W6",
  "key44": "dWzoZ2mjvku1qpBjdgNbkwhKaSPrE9oGWmW61yMyRuJAVPZ6rYPiyFGxB1T1QrBFmD1x2zY5s98AfnkrmANAUZd",
  "key45": "66FK1PT2n5m4iH3joWnYhKmLKhpj1UmBERtMWS7yPpoB5Mzfb9d5ZLofdAsf4a6g8GceypPnnkbHDDsqt1AAiBHN",
  "key46": "5XfW6cAtyh4bDNvDAyDaJK8Cqcp4xUsXma7nyn2RpgzkSn2cRHQvbBgu7gr3Xisg7VgjtiWw8Lf7nbhX5GSMc5Sw"
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
