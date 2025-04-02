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
    "2vkCWRAjiCug37edWp1XayttvENhu9MH8oL8Sh6LkV93FiKBWcxnJ4DVYimyW8D3AUBFjcfNf19iKfQJBN8exTAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kgtJsD1iNc7gjJQNwjR4RivVCrc1fikupwtDdZeFRf5r8oU9nWSr1P3xkjZtfHB8b5CauHe79c73KgWkV9r6cuM",
  "key1": "4ANxiBdvopgu6Vyh5jMSPWhGGfuoHMkD3g7VxxsfstcppipY6Qg3qTr9i4ma5R6j8rsSVPCJrvQbLVWkVCsHdFBa",
  "key2": "2ZukE2v5eqV16EyFLWn5ysXDzyuz7qSk7zzyj5jPw8689yehyBbEtukVhbyKqmHGTxyXTS8qKMVfhoF6KketDbwC",
  "key3": "3nA6vcWFdc7zYdkbEHWP3TmZSkzUX5EfAJM19VAKpPkTW1RuDGnjNaYv2vJb5qHYcNqqrLjzTVxKGwX3eXJ6R9m9",
  "key4": "v451xvru1D9ef3L6avxqm2N4MJn6tQKimmFR1rRUqpTD9ZiDKFSQ3jEjZeLNt2LioFVik1QD1VPJHiSQVsfK7RA",
  "key5": "3ANuWhTPJyYaHYM9QB4z4SXxStCxC7eRZ7z5tbvAHMBDuJ2xcG63pzMeTkbdY5CCiVA2i1XfdXMEbCPSNvyqkxyo",
  "key6": "4jshqusFNUpeqBimuXbB88dta7pT8uLBm3VvFgdAo5Hy7Jgk6tHZip3SpFzG9YCsftHYzXFqyBpWLBPLi6P233pZ",
  "key7": "5FRnFygRJEFxJXs5fju86a6npUPsfzmEEtsByYGgG9goSei95hVgYmfnAMJXgDAACHU3EAz6ybVL87VZEycwAAdy",
  "key8": "5pfQ65ms9bv62Pe8DDLtLP5z8FEa8vzR72wybZNN8JX6ew5P3csnzJpp4nYqHbuQnbhs9zoo67sTgjkehwgTjnQz",
  "key9": "61upvf1D8TyAPXKhfmxHx3TTUHnerfrCzitFXM4Jb6EZthx9iSHdDfw1cLsBrhfZZH812jDZ6AMLdPqcWAch2iy6",
  "key10": "mnaevdHix27NKH2u2crdWu6EuPt2W2a4UUrv6fHzAQwdvkcoAEytoFW1ZXsySEoKovUNij77WMgvUwfaZHibGzw",
  "key11": "3ssijDaC51aRKfbf2fkJZd86hqFc1HvoYKkeFsYpRELhKM9SjwSa2mr5LymbAUHyTG6BoDCdLie8jz1geiVq1oKv",
  "key12": "51UWTeYWDBvvag3U6orcHxXNnjnm8uGHk41tnGJxTBHey76jFMKzbHEPLu2pf6sow7VoshPz6hazcCG2k9igPAwJ",
  "key13": "5QmVb5ahGmQ1RLME16aixcqGTgGAtvcN6uaDjDNu23KwNjHmzE9huTSX8tNPn5CWHTFxtHfNmR2d5JeBV8B5pMZQ",
  "key14": "2rAACFrLk8HhyAEqUfLRTNdQ4i94sG91oYRkZPzLCxj2pzV4qzqTaqeoAJxFLZTSzdxqkaFpvBoMufbkfX6Z4Ryv",
  "key15": "2Q9SJRzs9w4c1zqSoqEs1szWoCDLhTyweeR2bXvhgtSJ7ZCPHVExHcQXmzJR1pCXKEpm5jCZeyzxdnWJ4E7GtY4r",
  "key16": "5C6mu92bgfnHQNV5punnbN4SzFT3orAia7MKWYqJcNmn3PiCxrNCG3bs7qRBmeWSbTLygD6KBqdVSuYu6GxKGpfa",
  "key17": "2TkgtEco4sDLtAF1rbw3zcDCTgwQJZqi13rVS46eWzGvPE9Jioq1oxTn5ekybCzPb6ZK1BGSRmsAKnkR3Nu2eTLP",
  "key18": "3Zbd8n2nCDzhBh7ELGiFoMzKR2bv7RX9Jf4CWT1uBjXpDKHQyg2i7BD6MY8WPHNyuSkVE2q9n75XHnrmMKs644si",
  "key19": "YSM6GR2Z2AGXp69m9vyCenQ5HAdsDWW67sneqNhH189gpH1iGxwSPnr6bmawaHiZyFuFnFng16U6czptaDPHvWf",
  "key20": "36cr3DhEbFGNxTWeh3BcxX9SBjVxpS5cDzHPJyUuaMMKCnKT77VYgbVFDC44aC3eZ6kWp26adYWHPNiaSM15NJ3x",
  "key21": "4AEbGWwC8qo3y2FeeAhxy6BzTHBs7rrKbBnEszNqtyjK38qKmUozXmn3WaaGouLUKdL8m2Azns3K2gXm9ynF7JbH",
  "key22": "QiWnpyKfCbTKzwkvi5dV6NHb9n2w55ba6VfcUmSGt7yUj93jFYL41HoTLkCLNMYdbZqoNoq5MXwpYob3uP4ofQs",
  "key23": "2YSUdtAKSWkce3JyXyKAWpx5SQg3yJ5idcYqaHnRKEyznM5pvWK6eWeMECMp5qUrrvWuWEky3KLYUyxscLMy7cma",
  "key24": "2jW43iXUEV6Ya3S2wEeMb8gau3KSijSpM4qCPM348AUcToJHbeS2vG3MrN9Xkssof4zw2RUPD7pcRARZ5oc4ezsc",
  "key25": "27hrgzozsfVZnQNAfMAr2BJXGkwh8KBrzR857sXew4hrDUkgtjsQ6h2tAifYtdW48VvJTGeV2DX3CVGvXtWfddtg",
  "key26": "3E6q3XyZ6tnMnLSkJMzGy8FzNJYf71j1GBVBT6gtfS9nKsmL6QfRaeL545LH3wmukSdLMWzBohtJkdFU1jroTeS",
  "key27": "xQyidrMKLrsAW5AgTn4ygyePTrbvstofSsT2RK7a82pa71wZXHnuKhhGkaqRtXatYYJbKLnVfWMDEn9jTe7WsCq",
  "key28": "5cr5UrCMNaEAjCojCA9WX3p8k6wc83vmyoc7Fj3UZzkc9P7oqX4NidgeiCD9V9R5wh7MGgzPoRbdtEBFgPEv5Rg6",
  "key29": "2WfeWbQxzkBJrMYTkg6MrgfXBEWFP4tFLcxE4x5KRbAaFdVmRQPNZ9NCCxxXGzmmsQi5YytyL2sz3rU1SJyHY8fm",
  "key30": "4PtWj9nq388wt6zpnX8kHm186mj5Cyr4bVJScqwNLqSaoUjCv8zw2g7Wfb9jqmVAd78smsPuru6i42Bv2X5Jy7hA",
  "key31": "gR4966HJUSCCUrVyj8NztTNgnYzEmUQF4fru461TLLiMtoCoSiXSzTHyuQ6ucfogFjPUYVXpRZrxZtuckviFjBG",
  "key32": "5ERiK9BEM74Mi7iTgnmPGhP8nx4vzpUHsM3uUY6KsVv57z9wqLtWBhPvVRih4FzSGvX5HwAS5zNn19VkTJQJMwFH",
  "key33": "5o1HvioU7Thv8YGP8T8J19nLokoYRiAiUiqEmTD8jdzcaWfrKdUz8oqqJkHg6Gs3doUA7rCFqMYVWWARr1uPpmV4",
  "key34": "5BBgDRRLf4L7ZYp9rK6vdJ4tEGgpmT5u2sTZoZpQRL4eiQx9TVDvb7MBLda9qrHpAdv7GD7ikdvTGYkUWBtSd9iL",
  "key35": "4ekxqEzuE1rVncj9YDxdUGxqKbzKw9owYJ1N8Tbj9KSYPNdKvLt1bK7AAj6ms3hzx2UDk6WSG3x1fZ5svXKzs7Qt",
  "key36": "4vq9xGdCFMChcfxCbq9M4WmRsKcNQypR75Aie3iYCDnbdZi4hYgbHMYDVo8SvD4tY9yVT1NkfQCSGoaM3ykCxstG",
  "key37": "3SWFcpUjyC5XgcWTsXuhzgEek8zQpmkSb2ijHyVHmf4Kpt9YQ32vDnqwbhYs8oq792uhytqLMumwZ3kouebL8edd",
  "key38": "24kmNkZHEUBRms6vsxLxmhpx9Xn3VpWhGeTzY8NTbvwwNMELgbuRx1WVD89KR5oSRWHcDhMie91vLgjwYkPuvyvq",
  "key39": "2L2721mttBoMQseDxinaVciqhFecRMrfuJetpbMCCedcrAFeHy5hM7xQP6rmuikRwt4DGcTnKwBP4cn7EgoZuMLz",
  "key40": "2otQLhyKhpedCpVCmuQTJgMiAReUbzuNGbpdTCU9nCyvepLtTPkJ1gaTHLj3XoSWy56ehwbuHkGZ6Ubb4eBVykUC",
  "key41": "4EknYVxkGQpoYyn7cY9Jrp1He6oiUtkUTpqWtABUTgUwi8efZTSXZ9sQhYUUQ5G5JN5x75UyyMYCaZMCTyiNYY7U",
  "key42": "YXqjZd7smx9xNGzcxNyGDSxkz2ThNHDyT9xzYxJaZHTSxV6xAVFR3VQD3n795rzMBcAFKPRs5rLXxcMNVhZaeZ7",
  "key43": "LxUxmiscoS6x3t9VHDZ3KiAywCcb1gP433iwcKNMExXaLSXFZjTiwrjxxrJaMBcEeKHnrbjCZJbMTyaUUzHzbbb"
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
