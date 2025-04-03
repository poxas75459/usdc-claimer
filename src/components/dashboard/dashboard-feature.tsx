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
    "pf21meUYww4D1JrXfaivjJU8oKG8YpFg6ws8AtxrK2TfETVzUo7W3YrMqJnwiLC656WBtsEvRBPbjqJPjbodi5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "292ojmrUBLRowfwjCbMdSuCgzFVYhKXMNJ7fhxh5eN5JW9GSWJiZpSXcurGPqmDVvrNjuUyFxwATt4gGjbwS6LSX",
  "key1": "4huGgAYdXmLjpE53ATsjH9hgZWqqoMNFL4i7AzNLdVVgQLm5Zs8bW2vEy6xfAqLZ8VVVL2fv9Nos737KgLy5wNq4",
  "key2": "7AgghLd3cZXML8M3WTYK6i5zHpBbKiEiB3WFk5X1s2QRM5yH2VcjZbsw53hfAbuTfnLoet1j2VLfvYBVHD57seb",
  "key3": "5UUHsD4FqgtsxAD3BZqmnLjCHfNxmks9rPvzVGXmS3xfoJjaX76imBKeXtDw8k2EDYZ9HfBJxTozsUU8bibga6Vd",
  "key4": "4U3ecLrfN3fKbNV5BDwq9Yc2o3h3cDHpgd3PUCamtaPcpprq6TZbDBNAZzLRTwuPGJLd3nr1qDExBoBvpyBMd6kZ",
  "key5": "5EAoTfFxespsTBCyfDBqkLZta2sVAwkFDgaCBbaaMT7BxV8HB4WvGz9HyfNuoNmP2JJT11w8uuQazP4ZRydAoUKC",
  "key6": "5G9MhwL7TD7YhHpM8Z2ZZfjRv4mMifEpHyJXM9b6GqJZiXyFjSY5QLA369MsstSZaaxdZG6YMA8m8KPpL8wYAwVo",
  "key7": "2wSeURE66fJ8SRvgc6NTKMnsxjgfhweoxoqv5YqXUhELasNY6qemRtmpg7MSevUFad7sAkTG4KVAYUKuoLuocYVW",
  "key8": "2vrhwLSRXkFaU3p2ja3GLLNKWVyzy72jYQRbJVih7dWBy1MngfMv64YFBmSh8ufPAuubEzm6W5NxtAkfarY6qnrz",
  "key9": "3Ao79byHYjFGeTZWk7PAGeuTJBJk8mSsdPmxswG4s7mkZ1uNHm3bWtfoUw5oDc5GQjGZWjSb1mP4jif6ignfqQUL",
  "key10": "534r9E1AW4oKjrdJZ4z2P9AiBzqqHRv4ksy5TQCrz6wmbvy9prc3Rz95zuazE62X5VRBCTWKeDsiq6RYmpwa9nRw",
  "key11": "2X9QWNSoBAXrRRq62AVv5jiqccJq5z7YJEHFGVaZAxunVx9VZnkLiM8iorn9NxiQNjUwUtC1o39CgKnNpnoggB8z",
  "key12": "3XAuFbU3YrinyRr2Pw1inq6owXyBjH4Cz3MZedZgXyGJfLtx9NJrJdAFfW9dEkBn95HDSbgVbapnx6DSdYLKVbTU",
  "key13": "67Up3CbD5UpM5GdNk5P2M8hKTwBcnFGL8RuWmZFHznFscL4LDVqzPAYKdV2WM6sRLX9fV3TSY1wSt2ABwCoFFAq8",
  "key14": "3kRgZ1b2KEZzDUehySfxnmwkbZBNN8iHPCoVxkztn5wxpwCvrVaJ6X3wMqWAgFuikvd8wGhckaaE4upuyVBM5x9L",
  "key15": "32zHHC7J3KZUyKJTgiQSHpf5uP8vDJAzRCHirZYDAL4z2Y2v6CFrqhkmyjNx7vnRAFojJNzAZ16ZJyt33T8772s7",
  "key16": "x3A69V89eQ3vh2312A5kzgXBBpMN1NqpxNtaEbzqrckpZfMeb2tt6KYLjBzKEw59qRdFx7NCpBEppxDSLi4BypA",
  "key17": "42vpeqqvmAr9kNcvBmzJTLTxYTZU4FVot5aaisGotQpcK7WoxV84MVye95UbgEzWyfTnmxrM71c4xiVD5wEkHzSb",
  "key18": "3fsXGykYiwTDU14CCUHKurYYhrN6G5kF3aKLTJkddKWS7fivoEEiyLHdFp98Lcysx95vT4FeiakgC8MrEYJVq2s6",
  "key19": "kiV5ZYNpZFzpfmLrWVTqw4EkLp1HyZqw7GRJHvLZKsSN6r7d233x6NbdoMYHLo5ArCYkY2eZ2FdG7HbtjmP2mio",
  "key20": "5UaEaFhBJHonszJ8wdPoXPr3wXdHJHkDo8vbSpBrD327CmUCWLK7AB64oWM75Jm8ShGdJDWijRyhM59w8MzXm51r",
  "key21": "TKXmw6dtyRaj7ywUMwrFydP1m3bx3PjrDFGtKHJ8KTDiNbpi2XVqycvBLLK8hYCWSBoUpYJHn9geK9eprvskPxo",
  "key22": "2VkYdRgf8kEghp6queJ9nUr7C4q18ower74EYwq7DdCfNGoGujpTXkomvm61T96f1UFsM59dD2RqTWxnduTKSFsv",
  "key23": "3urRZLntdCTxezfDe92ybMFqjV7PsPphfLrWx1CQZJag8L8EgiCGLCy9mH9J7Qoj4ea2wgwmPyFqrLESGQVXoAqu",
  "key24": "2whj2h3dPXEfSSExe8soYo3x8uT7nYXUjhefgVDaPCN7UAyYrS7DRrMxDftdiwate55GnjMbbuJyiJxU4qYAe4r2",
  "key25": "47eEdbGxdGYSoYWQ86cNSkxk38tv3uFLLiWLmZ3Q77dMQakdohWC1yNKkFiRFpmL4P7wywZ45SeR6uhZXsbsinZo",
  "key26": "25vGmPoLHLjKzT9nWt7f8B7YehVLK41acPZnTWMR274kqDFXgQATQxAQssiuYPNz4GEBCyatZ6oiYxbmiFgJtgpX",
  "key27": "4cYJg1TxCZxRo57g5FpqYjyqDJykwiTNtwQPeaHW9EtQZdNvRmJdTNi2tyASjixVqaeVCKZtEP8dPuk3zU8Cavjz",
  "key28": "4HXniTt2x29DjNqd5UX8yWikoCdTnM5932jnxGQ43ptvYHUhb7ptWgW5TXP7ad4QNfnowDLpb57ses2v8axTGgw1",
  "key29": "4qkezau8gNuSyTQKt37zFMiHW9A5XzytujcG8v4UDY3LrDJZgbLGbzprjv1UaDKTw4rWGv6SKcthQkszNdrKf1X7",
  "key30": "2LVY9FacWKyySX7RbavihVXmCiMJbZhDKYGBvsFkUByGj2WTRMcy8D6vmHvtszvzfg52PHE8RU8RkSy91Ue83Ei",
  "key31": "5vF4PoSFYv2VVPpTmofLsVYDp9jSVCkB2TmSFEC7YSMv3tdYueQAZFUbngsPxULKGGBNvX8rumgDT4rB9NZkzfnw",
  "key32": "3MrBcEKHGpRmm1yxTpqcNiLVvGKKsB2eBkJQahVzJCKGPXGJiyDDfgTcUbbJyY6hSPbgPhmCKua8zNfx6cYzQYMv",
  "key33": "ayGmRPQd5pHwR7WgUzqfAEsrLmi2wYF9EPn2bfCvrS34uhSsXXaj8rFrqTuCDj6HrAF8BrFqhSFjwVHkTfWdGnP",
  "key34": "65MML1NbjwBAVDCnF3Tehbpe7FXSi5vMqk8hLkYy5AzqyfzWR9gDX9fvvnL3a4ah9emduVBUsMmuXhc6DucA1S9N",
  "key35": "45CwwkHPf4bV4tUpdfbdfQkwUE9n4Hqu2N3ffThkm4g9xQM5PavcvJkA6ionHut7XK2319WMJNA4aLmtZrqmJSSs",
  "key36": "3NgxmTmD4LecRBnaLADMk8BQBQkuRBoDmvEJEzdesXCR4QUuebKXKtjw71toz7Qww9K7uRgEEiPWBo2BzCVQNdzK"
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
