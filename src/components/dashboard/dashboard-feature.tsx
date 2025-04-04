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
    "2Y8AeygH6WhhtgL5rRWCKCy11MaK2gjqkfowaMMNCJmPLG7iWQHpV45xaq3wv5dF1bHm2PfVKXYUnWd9gUQs9MJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qcyzjA9aF9yFMMQYmiigzuXKEMQY7Wo8dJXG6af3xbnDc5vxCur8eGYCpCpGLvMbSfptPShriMnUb62JJAiZgyJ",
  "key1": "kHGgsYCxjCUEdtjL4NBxoUVNJtQusrxUGcXkCrkf2YvJgzXvdKCDgmWdUKHB3roADDyK1FHGhUEa4CLZVj7BHh9",
  "key2": "JnxnaWjMnH86Dxk2QSso3GxkU2ZJCF1DwiBQtkS4H6Wu7imXy34RgrXKcKJK2do6pFPqkH1GVJZdaz6iqJAe1Px",
  "key3": "379uuu9rt8dGPw2TBm7NpsVkJ2iK6T3tYaFXqQcEbGg8Z5ce35Nsf2TYRm1DkdHw11S5Z3hiHR5XrxbLqaGYLx4J",
  "key4": "3TR5yJWxX5He8KFxJ9JoThYv7dYF8bxXX63EyHMRBUpjyHayfFVjRa9RSmK88vfAuN4dXtLXJ7TTzL3EUTJ5tP9h",
  "key5": "2ox3bArtfJ2sVb8Tmp5auuUWh35S8KajFEXLkZ55dufr5kJ9fHx7FY2ZLwFE48bWKKnxunCMhwcxegMZTjgjRmrX",
  "key6": "27k9nMNMrVMqYu74yxSHmxF7FADdjreByGyqgMgxr9kNvStNu5oiXN9XuUw2xX4aRiPd3HYQA2KiHgWYTdBwi17k",
  "key7": "28RbekYZ7FsSvG1d83iazBFf4jP7j9DJsFaMopF4RsVL9HG8Be8NhwbVeXmRBAPLvZJsVKhUvyrRVri8jXty8ZWe",
  "key8": "2hwvd8TBFntV89JvxzZGMuLTg2E2ChG4dvk1NHooUnMD76PKjMAoUxmx7aHXadzQUBamYEqatvP2mByFNUXsgmWA",
  "key9": "57KQNhqkugycNqD3mmHX7JtFLoN6BJBuzZhRLc5yVBobTCspkaU6vuvBChthWZH1enykRMx21hbCyCkcgeA8PxsB",
  "key10": "7Ab6KgzkMZaVoA4CxR2yCt5kgXLYU2jwXxvTNULR8wkTEn7TZUojCNTv2vKRkwdLw7awhRYkcv4cE1qYE1TjthU",
  "key11": "4KvSwVfEeh18XzEvoC8Ap2mRJydZYiUiK1F9MNkTwDF94SPcVdWiK3sXTAYiyfHCrKhgK6ucMM6QMBiA7ks8k7KU",
  "key12": "33paRXLeQ8JwF6ucXAb53mTHbioFSW6r12eJ3skREo7MG1uty7V1gmwyTDzcvzU7qo32m8zNW4RhNT4nNtNBsawE",
  "key13": "321wf2v2G8F5HALkRX1HH9Nxv494ajKHArjWDGZj3ceVbMhfuvpvgG9FkQJrfmb544kf5s1skkRxLaVDQqQGjmVX",
  "key14": "pSaufLyHDnGxKRdepUbZ44Ehs7cGXwEkwHoD3zTYW7A4v23xoqyyX2b7ZgKqr4hXvKsx9shEm9RKXECSzWhtj68",
  "key15": "4knecUHRRWo7p8F6u8fj3y9FPXmokuNQAKh7NNnMxk4y7cNCiNk8Tf1xXdiM6F5LDe8ovwsYGKeq7U2uYS6Y7Smd",
  "key16": "3ZU3NghiEn33jqFq7oJeHnjU9Lv3NtS54g2mQ3XoMNhkBTnsqP42PEvm2Fmt6RMCVyRM45rPLy5NNV6EmE2qumrw",
  "key17": "3F1hX1AfnkRwJCPezdhnxZ2XkKtmHKkhU481M7veCkxG4ZZynGf34DKcueT6iD7c1zwKbhVBF7v89v85eMtV437b",
  "key18": "2uq4j7NDTE6UzSs7xZuGkGR79rzLW88hhgqZf6ajTZ1sorKWmmygSR24mYWjX1JvEV1fxdpiqoHhA7WQURmkvPQ1",
  "key19": "3DqfUyD1FzebgCaPiAJuGVWwEWyc23FiRcysDJ4wmBGsTitHspbS6vu6nm5J6qByycnnzc6BRQqYKVtnF5VxL9BS",
  "key20": "14ZyAfeRCHBN4KNHkeM8J6ocd4hfniudsY3yWgJE1yZcEK79prQh2UjzvfnXzbRKCw883CQfnLwHN5TLv366AUX",
  "key21": "HZPHxCsar4FaqkmySD2uJpiFFjeXuUuC7G7hDdjuZsj8Z4ZLfCmLrVipqC4aAXJhwsxbYM4jBDrXRGU9R8tgoFZ",
  "key22": "4jryrEfc2YH3hjzAW6jLKJm65Dz43WKK4nU5j1dG68Mkarh79qShimk5wm7dVurkuAwsiiFv93Lxog7BEUYrUTMK",
  "key23": "b1wVCvJRq6JT7Atkat5T91dvLDx2fA5Jg41R4SUW8njEmnTuxtxc8wwuXNspioYpCVsG3b8HcSFzq7PxBRLSVa4",
  "key24": "4qWYzphnhKaxTNMoW9Rk9HYvGgKXdMrr87ewusEHYGFLBVAXSeJbqj6MKruqP9MWFsXa93hJcyEVMhiKQwf3NxnV",
  "key25": "2Ms6sYziW76FPdms8MhgbcvUGd1SSZbAqFENzwAhAwkbFEqV5S11kRm2fVeLhsuC6gggJYj5UnbuUEZMoDs8dGjE",
  "key26": "58e73e9AHFgppAeToXbjTFod22qmNwLPFQREdAzh4BgE5P4zrVva3vhh3xapUjhfy9WxwWXhdGqXbP2scg1pv918",
  "key27": "DdGLz3paxD8gbRPSsu9XEo1tFRLbLfxqkdcqe1xMyxrVPMV7x5tTra1FUvNkK3UYE2u4vUCgP6sPoizkViEtsqk",
  "key28": "x5WrwR9TFAjNFQ3FFFF41whJF15MzWmy262eg1MLG4AU5fQ5JoGt3ZJNcUZFs6QAh3Vs8Z1jHLrnYiwy6nuwAD4",
  "key29": "44zksDpnaYs8Dp1LC1KzTCvUFR1v6abpyYi5ykGqaVyL3xAkGajhyks36fNgPgwbyLTQKdCmznWacYtzpkPqQiRj",
  "key30": "4KLawfR86rghpaPnogxchjf4jjRaNstPaVsUqPX8dTtGiAavfkr6L6mBUGj3gc4Hr6YPyNjqwjdeYPfwTn2Dm2f9",
  "key31": "HDRcUKx2GcZpSoRbKj1FR1xiHmznYzpCAp6221roNi2dzhFPeDp3qzPfEVz1XUc5FV6R2xp76XDEsy3BJHJXKYv",
  "key32": "28M7fdPgfAqTU8jLtvJi6twjvj6XBfe7rCnfNs5RJG2bSiUaaUdhWwFaoT4TsmQnFSHzFsVmPQqQFPkxgRrzEDqP",
  "key33": "4WGXHLPBTVGuaefhmPNeUXe9GSCBxvhWKciGTBwgTqXsSFL1HkePhjqc6yyApsuyCL7Wvtyk5ohQ7AfwK69n6pQ5",
  "key34": "nJ6733MqggPhbumtDDAHUSoGEG3ALU9ThmcratgVinUmfyBztHuhi6mCYVSXDY419rmGgh9gp8pDJJwCGJUZFTa",
  "key35": "66LbbMey2eTx3SmMa8fJzmEQUyxobBzWhU2UrKA2Qw693pmeEsaUYmCPWaXof1jcXhnqdQmYgcEM1C2W4fmH5BSt",
  "key36": "3Bs9LBdiAveKc1SWLafxAC44XcTVLcdvQQCeQKBPDAz4EtgAzVosnx7q7egCS5nzTpQL35L9uSbxXuC4AYHntB27",
  "key37": "2vsXUYYDuWMRwDCLyV8Ex5kSKEx8WjM8hWHwHr39iVVDh66oC1jQq39CucZcw9pESqhn3UxXbnYaFvVvAHvhz29A",
  "key38": "4cVRUezUhR8m9zDaTK4JeoKaW7N6ohQrfu6eChJp42wXBqiTzfsPxdQE5EXtWAWonhrwuXjzHymn8sWThqTNnhYM",
  "key39": "3nwsxvDrKUjtu7L9ezAgnMrAK4Jwbh1pDgjyDUndrhLit3sRCyjmB9ViSbcutWwH8TWCrMoycgFNkXiu6TmK7grq",
  "key40": "3gmjXVrWwyyyoAE2tgLYk9ys89xtMH8TEfq4UMEQW1TCnytrkLiZxHGiefU6zGmQuCukQ6qKnCTxioEK2JGPFv3t"
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
