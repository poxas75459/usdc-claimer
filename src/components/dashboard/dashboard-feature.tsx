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
    "66tcuaXb7mFZy9LxGV8U8kwLJBDa6jyDt6b4aPAtg2a58vYAaD5md7ei7Pssmse9QkAdJRMPZXDz3NYnYBdYWm16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bNMQtweHf5iDDQtmZiznA4HJe4tR7AfoKSUv6sSe4o73gxNKcwdiUVpYA7E1T3ZtaPSGNPdA7MjJeTDw8zuTVW1",
  "key1": "2n9FfkW5r6FLMoX8Q44F76iNBtk5doFQLFSXuHvvK4WWb2njnky9iCd8Gn9NfbEtxuuzUvP75KhBepCG4LXmx7QB",
  "key2": "z9B9HjZiEpZchwG88UX8vT9wYLQ1PUuRNmaUW8Lsh7kTDmfaRxUugVZLnZ2zrDxYmY2DcMjS4jDw7Fy3pY2URbU",
  "key3": "4eNn5t4eYaEYsWH4QBF55gdufH5CY7TwcjxDBi16s5XSBmA1Q9n7tDNUsf5iHCiL3NDWuYAQ9WTWZUL7ALrJoEd",
  "key4": "3aLGGJiFEJutpheFYLAvNGg2VtHE1r1K4n4FquoV1RiWqjBzizqQgT96SbF1UTRdjHPJwgxUKpAPNuZnKowZsYUm",
  "key5": "4pNtLCsvuTjBsYzUCWydoa5zgipLsaPehzwNXG7Fz2Leg7pQJZApnVEbk3tYMN6UJVHSaNLubrEyR3EfroS1FjpV",
  "key6": "2NfDJHCiqvMMrqr7pAt8CUCKrcJzd4GWN5d1Uqo5eALVqQke31PiVnnifGcNLMXJJLwTJDKGnwteQVZG743ypiXn",
  "key7": "5BkUQzprV5oWBp2qkRgvzKTGXMSffxso5o5hkxxgooXdDpTMzuocVW1zb9PepgMPRfbM1Yno4dPW8YQHWduR1Mqo",
  "key8": "5HWKPUhFg1HMTwseSKpLxCFm8zh55NskpcgxAr2xg53pLa3GZH6AaBfXHmT9TMx7VjLmoEsNh9EWgHzDYWnYeVAy",
  "key9": "66h7kt5VRHHwLwZ4WuXFRGpgjvkNN5X6H5nF6o3dmvAP3VrLxtGUxnSRv91TYpdz7pzAUGGpTUFaLDUHvokbGQg5",
  "key10": "5EbZvP8wpucmjtCcj2Xr7kb96fWimkxykzsxreTpSmrhAiXknoiCs4yzwhArXqcH5DM4LUHd9fDndmznKPXNpdgY",
  "key11": "MW55EiKFBzK1dw4kNvHYHJ9RDivUXKiwH37nQv7Vgof9qwGCw8ifHouopYdMsKLGnR2H7uDKgMMbfYi984zM6je",
  "key12": "4WF7de7Lj6FTTkNHA6iUzD3SRS3Z7GfQ6Qk3wmMe9V14wymsbE3W6r87JoTbvRFWprtrqjBRhiDVPdqtrCVjeyAy",
  "key13": "3WgWD8Ja86UufvvnPXGECGkr3u1648UmxBqp4y9LEwXG69UfqgzDDd5WwwKMgNpQU47z2BhrBeaZQgsA1Sz3MoF4",
  "key14": "2Ly2DaYvAagphb7FKdSodgxnf6n1FP7FmE2u9xpCjJYhqumm27J88sT6VG11RNhyc5a2ZzibjtBtNRW8XiREaB9d",
  "key15": "DKTPfcppyYTNssCvS8DkxiVTCegWrrwScjhMPM8h2PsXdxwy2HUTHuk6HiVbb5MGei1y9DiszqdZ75Q4rwNHVoH",
  "key16": "KLUNAkYXQQ6vRKiZYWEkjPwEyyhjEGKUvQ4JtT7Z4hJxutGBNyQ41ZuqhzD2V3eWXN7qNFCqBzwzDQ4jAwrjf9a",
  "key17": "4ag8uveFCuzeTvqrkt5KvjUsWXbGLWZQRx8d3Hbf1TkbUadd2nH67ziV96YG9pmC7r6w2UwpzTxrn77rLyq3JDML",
  "key18": "5gRXjvdzwWXxnfameAotNWzRb4GpsVPPrLFaizhPVjnqW3aSb75h5HgWMmNqg2qzQYAmfWVmG2SUd94sHz9dyQ4g",
  "key19": "3NbKJuPDnnrTDVijn5fkCVUaoP4iMpDGvRpfbc1wusjmQ81hLwr4inyFaLzX8yx4xbwUP8aHuVLf1NGGc6T1cNAK",
  "key20": "5wU4sLAHcXsEfspNvncVMDM2JdWp2tSbeB6h8otbwMev3Nj6tu6Gefx5ZC5gPnixPqWy6AD8ZXqJHMUbwqCX8pFK",
  "key21": "5qzunUM34q8u5fPqKAa1eqS4dEL3bpM9zeGioCePiND1wgHEYPoHtmRZW2QrVqcC1h2pRvVxPuUwxosJbWZ5Xcxy",
  "key22": "tQLmER7XEpvapo8LmGhp35srjSHW9iC3YbQTHYQ9c7ZyLFKMVPZjq863cvUxw5vMHxpqC6SrgDcqjoibbt8jtQZ",
  "key23": "4Zy8p4N8eqdvUipeUhSrNem9BhypBtDEwViNrnr7M89gGF53bVaK3B9PBmHDtkBQXQNsDNZaRM74LszChr9q5Uor",
  "key24": "4W8MX2UiFSrvPV8uHqY1jsQuWcmeh1fjQZQjLTVQPmZZxR5deCsaTzeyfmHSLSnHbYbCQNomvBFk4TBU6WVEhq2L",
  "key25": "aXdv82mqBNhtjN6pWQ2EpZ8hQ1KTNoZF8YwYXAqwZswChLcqYeEsBQUBw8AQTuJFPULNHTR96ssA8Y2BQkvCZQk",
  "key26": "4YiBhoxG4BwoYdjKpfD1UeicxpkC9CcPCamBsZ6rD1mrbCfmd6wSmfot8VBxAzVAJyRUjbdrVrjy9EBjgNmcxiH",
  "key27": "4eqFa9jiZu368Meg7WipJ641bW29ZnH4QcSVXykybJoF9QTPbFdn8o1ymh29x2jpsXqf3V4wN7SRAyhjpHZjo6jK",
  "key28": "J5hNvDZaAKihXkAnR1QjtAzB9kq5MwBavjaKqqoyafvkt5RUZkrq52yPVBLYB2eWkHrhbm2mUnZVDH4jizipC8t",
  "key29": "2udk9EJPdoBm6mppPBkYYpPS84w5E4ddp9YSu8kai865ZvGN75cHZaYTM58e6BjmK6iV8XGUdkh5pHSLU1jg8fmP",
  "key30": "2hBWXG2YcBzh9rnJq5r6xChUG3EfWbpYAFo8Bc3KoEgd1q4xNNFzzrC4iAT4Tps44DHiZXagyvBQVA94mD6F8L7a",
  "key31": "tnzUjSAZufgE4ZfnrUutcNzuP77fmRbeci7Grn5DnTb6g8FzqkZdtGjoVYyqYj41VJEhLkgjNi2VV1jduVky1wn",
  "key32": "3RkDiXoiysoA2MM3kUH1DuZA94L8AWViwVP2xH7hqkiofATtyNtURwei1j3WzZ81pYQvJwWKVdX19a53qqwEeXtt",
  "key33": "2xH7DXMF5qWP6iWCKVzRjKd59QZhDxxpVK3ttmomp92EhBAbCtxWDK57tB6gVHGMHStJTzQvLa8JjjWdmp3WmcQF",
  "key34": "4fyfuBQvNGzZqp6byuSoBvGAZnbE1WB7zeDCMeajEuPJbmQt7JTgKRF6SMmhMd7itoWNfsUF4MYevEAtSYB4qnDK",
  "key35": "2SY5HrRsM6QSGgTgqMTatbWXzsKpVPExEtAQwiAEUYp63cQJRcoyyRxt6Cgq6nnm2hZVxpvk4qPQRRy1BUfE2omt",
  "key36": "2Naxe43Jsii21o1HswjqbyDrBa4fkGMFF9dd7q3BjzDi2r24D3HsAiFvsxQdUEuJadUtyChpvGjd1byhbYgHusp7",
  "key37": "2y8VRBHc5H9S4TZb9Nxf6LFd2PWfsDVU1zv8TpsxSjSvZQjHjjgX6zZMakBSa66fYAgbiHbAnWf7nAQBDstsTiaZ",
  "key38": "54TijGTJYcvReoMtwnAbvYsZktM6qmmEn3TokprY9fHKS49ZfthuUhDyaYmWu4LHAtyM3V2BXVxsKGC1g6LNhrAU",
  "key39": "KTn7cd93H3vndWz5dCoLy8DqE4EiRbw53wPGsik9pP4Zuq6bHKLodFaBS7WzcRdr6XGLvjia2vKDHyTBXgjQcp4",
  "key40": "2fDUmuEU4cVyjoBbr8jAGaBXaJabLqZP2cBKskRjs3sMmiWG2jHWfmCChr5JKL6xLJ7fYKZkErKLMgYXvLD1pfyX",
  "key41": "4DTCiNRLAHetZkTyUSHeAzSs3jUj2b9eyfU5mKqYmFVy9WNVbykrM8J9VV1H8cxwBJ4mTELPC8qDxZTzve535gF",
  "key42": "HNoSH2pys4RViXfTSzQPmJGvzjVrbfvmgrm5a5es6pnHeG1si6Yn7WgSPHzYQCJLYLmKPjKrFX7gguTJL27fPw6",
  "key43": "ssS1QoEWhm9R3G1xKvTMNqmWsHJz7XueJ6mqJB5HVQgUpqYE2NAGcdbff8w2LTH7JNw4yR6UgSMe9qjnGsK45Qa",
  "key44": "26wghGUXgGaqQwm7zpk9ZAuwzzgv1KruLc3iVSNiF88byzSfp7ey9YKmNGj8b4HMUmyaHMT8EVcGvvyhdRf2yQv9"
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
