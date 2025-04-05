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
    "4uEpKwxAodpVaH3JuLfxN8yPziVfPX2yqbwkyJZiLH7kLKpdgpxVCqqcjqZMmBwdtZ7tRKaHnV9q5AuaLFMa8jm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FpS9z6kG5oMVyajRgZfr8wDhjPEjGYinoyBxM8wPpsnb4Jy2jix1jGrJpEFAQScQFZExqeWGHZUJK4QW3a5xNNW",
  "key1": "2YsmTvX7Y7ycpQ1r7cRPyH6Q9ZmSu77TyByP8YFqvSrdLphSPn2pyGccuLS1bKmi523NtGxgCWxXYYjWqJwuEXrA",
  "key2": "2s8E7eFTKw2XP5rNY837uJpNzFEaG4tp9GjRhFxWzYyGAsA6ZpPae7CP4yDAnZaiQrWgU8TxQBYSxbsEY9bP81yS",
  "key3": "mY6ZmfD5rUBE6WptYjXTVyFwF2mYR4ktAjFGkiRAN4zgaDbDvbZ7g4csxUzm8fhn23rMbd6dJDsVdaB3Ub9WBk8",
  "key4": "8qB4rNj9qh8BryGQnL4ZhKVuVCntGyPaAuA5De4Qdeo1jRNfNGEm8SBwRugGudcJcVCPKgJMX6TAdfW8Rpeyhbq",
  "key5": "4kjBDgkpb217uoWXdgms6Pd6SfF8JQacjBifNzTZfDd83EdQf7y24wyyfkJeftRSpgcYUBaUuBqUmcZ59KY6FNUc",
  "key6": "5HoahabTRmMDG3evWpUeNrNvDFQu6uPdHmebAaZGPorbRqthd4SbDMKJFjG5roMuG65qSwfBWTmmmnsTVBwP3bgy",
  "key7": "3U9Mr8cVMm38YopnKXvXkXYTh3VkGSN1Si75BmHAxE8F6gCTtHnJft5zzPMkFF65UQ8fg6FSb1kJR9LDJYRqyURs",
  "key8": "3HWww9yorz4xmqE4KD3YqdDnSNxuFci582oBARdPBaCG8BuZqSiDmeL7QNajt9dkVMTyhcGUkUsXBJ5jsHguknoz",
  "key9": "4Tnrz2irJiJessVFiACPe1THoYMfp3nqAe9jpBpuG5HbLQSacNfDni51YvQkST7nCs86nCfYSnQbD6dyguVExLvi",
  "key10": "5ifFfWVJLLP3URRAr7cZsJHzwKNaBexTQZr9Xh55ecA8z5t9Va8BALX2hFwD63B3LaGLvnSRQtJbke8Un1AAQren",
  "key11": "32sLD7YbLxMNPdUAjav7fwtmsURDKd3KCZNG1W4pa5JhYM6AmaAnAxtG1tfJzAjE41u5n5PhoEMBbFy8pseRsrea",
  "key12": "W2zZ7g2sPCJsyzhUBwakxqe6WGGmEJi5wQX7YT6iXZBuPvX23V7V1mL8dehsXoZLuhmnJsRspUL7AfGd82ygmMU",
  "key13": "GRJK8xXgpjfBJSiAziW7FqUwEaGiWjjCpfKBL9bLCLFZSMi2RQErA7noAkPVSNcH2emenSL9RtMNoi7u55kRoy3",
  "key14": "4Y5X3xqKMVfjD9rZzbGvcfHrmKRzn4ZR1fXGprvSxTn3qJ8eEa1zUnphsYJuQPYfLrRgTVKuZ1vQ2oLwPNEcFMPp",
  "key15": "5kFu3PDT8kCSrr4nyXZ945X1qseyEsuwHJp318RyHbpYFiyFPvMSYGH17uE6HHemT9vnwLn6kh2GiFVpLQipH9z4",
  "key16": "3MturKoby1MHyyro3y7eCcGS5uQj7Kvu6fEDDzp8Jx4DZK3kNdpFsZQhC6TQEqrMhN2PNPmrJyi2jqpjKs2pKtpB",
  "key17": "2nSBA2zhqKyFxMfbcAdSzFs1CsQxLsvr1LqTZEko5VhSArFSoHwz4ugVixtLuT1sDXEoKXA1o3gaV2eXrh3F2f1g",
  "key18": "4T8hmc8hM8jo3j2HzGwgLfmb3DxabYEoHR7SEkXZuDa31UsYtYMFQNZdUa4EhMFmte9TsQMVUpXEgZ8ShySatHkb",
  "key19": "5UNtvHFxsNNx7APN9TeG1AFS7iZozyhWcrwRfcGCrra9NmX5wjgBsQSDQemeyrLVqc6PsGn3RgZ9jdERke9b2y9W",
  "key20": "3Jk3Wogv1YFzHc9djm7AtVobYmNHdbM3pzBRCyomLb6Mq3ELGS8cQBfezAYQN3mwgujsXhRhPJwYZKUKEGf7TEMs",
  "key21": "hUYauSEy7hu3EWd927akWRJo8UTZc1RvK7ZA7nEqcGkfSAWdSwQMeUUASwNftJ5S3jp1HBvDifshtSZZPfk4wvB",
  "key22": "QmUBtGakRcdyYzu998oY8zyBRECE67GpsAZ6wanbZK7NefEuZcJQ2D4X4TUUV7qmuY2hT5j5U57wxyqbrUhR3H3",
  "key23": "5CqZrKGHtirNkeHYjGVQ5MjwyESkYsPr153Ax8K6GMLpZDeSU82pZDXguvayjTVGs42JnyRygYQqJ4gkgNKg61yV",
  "key24": "37VmkW8oAjFDWE6frdjRLs3bXSHVupcccyrVJ7jqKaeVAHh2SDTGyhYNjEkcH2QUXZrtLRbu5oAmSqpYWU62X4ZV",
  "key25": "2KyY1ezGjD8jpoidpGybDLga8uxAdPRUd82owvoSnSAfDokLCCXnaix8ponpwYGPWSaLpb2Lkiw57XtKHpU7ThtV",
  "key26": "3d4hEE3FuKkr4WBfoJP5Nq4YwKPuJYzUvYmSBoKte8AKgTCvEyP1VzGrYwzyDnVwk58a7TdLycaToW5Hn4mkt3rh",
  "key27": "4WvEszYD8qtst7fWr9KKYn25ffRwadRK643A1YCaGZchxamsNcztd19tffAxP15Fje7Dih6qqqE2Sxjsm8Kp9rf",
  "key28": "4ZbsbLVJFYyi2mf2DEzNLmTdybm85SEyHrJjvhT2fciFRrvTvLXbbkZpXjZsT4d8V8zEqyaw1ooDFzv8BUzu8emb",
  "key29": "bwmirTjWpxHueH8eyKAEKQUKgo2PovtPfyeGkLuGCSz2W5gAfqS2YmuLXZNUL2GM4M4QadN8Rs1p7ndNcSm4Gr6",
  "key30": "4Rvy1E3B6d5hptRi5V438xpLbUmdhBftNRH2RXuzEHckvJpBxCF9ABSTJh6Z9TTKDuW77TXSDG4iLVTrn1xCf6ni",
  "key31": "2PRHWXZiHNTZDb3NEtwebRzKvhEeH4o59tdu1TY6t7gerNxVrw6M1q157sbNzijaHwLh9a1mgt7YSXj9pWtXcDUz",
  "key32": "2ijPJeNNmfEGCDqH6gZuskmuJDLniLsfCegQhvjDPYr5or2m7zoJArwTMVbPmRBevKQ18pwGQkocD91H4tzAP5Ho",
  "key33": "3qJp5yDPvkv4VfxqQwQ2v6ADLmqTuaBUvc5xPpuiHUJmyyHE26YQ1SAj2JUN3uPRjqpQqU2DCdHBFCU3kyFnqoF",
  "key34": "4YsTAUeXLX6pDFm98um4Gu71ysuuikrGNxow1T1ZeRjhEkhG3WLXoAykuBWZtiEnkmSrgs9fk1eqt69DhThLo3nf",
  "key35": "5tLv3acLC15YZ9PpVYjwD6GvqHqPZ34R65Az9JaV1MxjCi2UjJe6mLUdgEjujo6k7zMS4g7cU6nDVpa1gHodFFJx",
  "key36": "tX2pNrUACtACLViek68SJ51GCfxPBi9KxawU1fEktM7g8ndJy36DD4RKUzXm3CJg6vxpJvkxgUCNhGN3awPVPk2",
  "key37": "2C5zzANCfqok8naNrFdXmp978xzo5CkLQzKb8iT7DMY4WFqGZwXit9Vbhj5pHd6CvpcGJdkA1wqducCbRTd4d52u",
  "key38": "2J98i4rDBRAx6ggVw6P95pFfANLWcytrAqv4cAVJTWWKjdbJAXpExNhtDeokBCCJoW2ZADPhQxSP2ZDdFbwRuQbL",
  "key39": "2har3qG5HNqenxpN8gYmrtuJpgP5GfoyTYFMSPMeNeWMqmH3aYU6vc2ubG2Ft8MXAW29Cm8QBRBqnZnEbEwq629x",
  "key40": "4Z3dKhW6hA62LG5xT4N5ucD6eB565b1DNpdLudkL9iaixX78sjRJBu83nZCb4iFJBinJZeygjYHXhJ5ZiF8eQM8B",
  "key41": "4H4TA9TGz3NLrS4EXb7MBiGK3QAQojVthB7XykzjcCx4pB1aDfyJZLDjB37LHGqs7QQKUvT3wG72SfLC2WzW6Da1",
  "key42": "oa9Cc6FvExyJnD7CJqa9FVc2w6n5nC3kErxCiij6vMRgt5Rx1h4k9vqAHnWPRTQnJytZxeuTu7c9HapNh6pW4pu",
  "key43": "4ARJSWHEebXeUhYXTrBiFMF1QAmYi9fZahdtyNj3bbZo1iDjmphAHNL4wW2fbf9tcdwGT8E7cReXM7YzeKVqZsz7",
  "key44": "3gTT3eSEsS8dQkJ6pFbma4zp3WpyaMPM6U29fcQkNJKGjNXrDKLmCCBCMdypjMCXwUuskLAA3YRGXquqENhnmC94",
  "key45": "5KgSa3tZK1DR4UUSpMvw2YFBSyianLn4bPF64KCS7RS4z4UkHzg88xAurwU5pvxRNQEc8CNYVzbJB1MpuQCxSG6g"
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
