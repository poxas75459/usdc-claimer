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
    "AVPCmNvAB1QH6Xr8E1LKG1XcEUFcwChxRjhxiA7wFZCLkUVsz6TYUrbJ9THQ7w35P9ixik4WtiQXZRRjAUQNsdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ED3T6vqsSiB1WaspLGFDL4hDme7ioSQpoNSANehhikbjMSn1GmyWmuwpJN5rTfdq14M73yEhDErEoUCJhyKpTmt",
  "key1": "5pdXz1UZ64k1Pnevzd2zmUD3RkGh9skRRmZCk5P6vWFGHwTjTrqHMpWdkSX1wqEzngzipMcsm27PTBFEVZJYzmkJ",
  "key2": "4pyk4CXiNnFbh59aMqNZM1vumHeT6gnDAJ3pjii7SjDYuMZbTptheP6bTpTzfbJfY94548qS8Yp77NZqztn4m5uS",
  "key3": "3E4YhdZ1bcuSep2eWp9cZpxwq8FpNUYd2sgPGVPttAqbr4CzGUKpGyZZtuUKXx7J2rjaV3TvPqvGQEcxFt9p9GMd",
  "key4": "2peWdWdrpV6o7PBnXsBkp2ZSBws8dBpGvTqiG7FJ1Ma4tJ8u2k9uyTSL8ZCFdpJCv6EBACrCVUZiEymx1YvYpfYT",
  "key5": "5dhiLUNYbWofVtyrjC1g6fqhPe1sYChcoKVqe3ZdXPW2CCnqG6ZMbdv9fq2x8276kwvremAELVvA8DzpbPZuT3QP",
  "key6": "5qTjBvsUosqeFJi36X89uXUS8Pn47mb2YCJGzgx5Cszk1yUQbevQ1gsFA6unZLVvLpMpkUmBmQ2UwtKsqBVRAHV5",
  "key7": "2n5CdNAk9Gs5E9ntUfDwjQRC2vRBBDdhPzxUsRFvDeR2T6fka7Abpstak94sdoM9qMZaQptmJkEhkLU2VWg2hGPe",
  "key8": "3XTYtjosY5EvNbnc7bnqxgrGbWGVYkpC7NJozQCgsfKXLzmn3G3naQoigJExLkA3AZ9n8SW9nsgu2gMD1ipZihZu",
  "key9": "32GaZNDpjN1dPjtZf4XLy5ChvdaKLJkgAtq3FyG3AKZj5Q4cLtuhBa5c6TkLxFRKDv3pewhyUjiEemHTGYb8nrXw",
  "key10": "WgDaU6KwE8LpS75Boxj7gwRPc23KE4fRz83jiFJQcqmGd4A34tkEvm4HzTPYmYayLU164xG9N5tihikXJcLFnSi",
  "key11": "3e858T7XKiV13H6HxAhXcGsgt7hxe9nWSdDGKCHXE97CZhwg25rQQFJM4YbbyidzP4pVXdJSHkTvHsJfVcejL81G",
  "key12": "241bGFueLrwJETLcRdsciAtKTe9PvYTWw85gmX2GsRhEH8zh8TBzpddLwE4iufoge3jraXg2GQCWuFK9TKQQ9szd",
  "key13": "49Hd1b7xoC7oajRP1QLzUsWRY36jf8KFqd373WGs7oW6UfHWneerCPY6tjUr4vMRyXxzRZWhi2DL3wHGAXSQV1KX",
  "key14": "5dJLkQW9czthQyDkrsFzCixy6Pfe4nfxec2bGXz3EZMgNL89181ifBeDVaWaPfhjQ5CkmAP4DCjvpmhf3C7JedEM",
  "key15": "5AuAZiZ4hE1SRbcUrzPBpbjBqRrBPDENa4JmVprTaX4s49BEbkmUHoPJZQUsnJFVh89h1v9VZdbVskFac5tHT2He",
  "key16": "7Teaw5eh9XkPrb1HmZ2sKhk1wv2P1Fi5mxBjh2ktpP2mRpSxmFkrUcxS5dVhQ8tGi3dfo7WmcLqYnzkMZMdZfKA",
  "key17": "3c9vqVmDJtDHjW3vGknB3hE4MC69m5ki7ssFGLAdNRFC5aeFrPpyqynW183aXGrsZgysD5RUEUKc3Bzgg8LJkyxK",
  "key18": "5XoBaZhnf2L4ScfKd9EdNEVkcKrraEtspzT9oTS8tkthu72XGrQVSmmj4EzvXnkmHSxHmn5rPMVR2LwaiKF3GXFE",
  "key19": "67ZYgNR1PEx6nhGhWx73teWgHQcZRy8LRgZQijj4BCbepVHcLYtAZ4nKRTktUzdsFLWeRNgbXHPpQSDcuYYEuhEq",
  "key20": "2WF5QbaVu285etB6Xag8UTJpEjYgXcEnvcBKbumKghw1RfBTh4v6H8CErq2B8Jxge2ihM8cQ6JmfWbDbos1ENHqC",
  "key21": "5v5D2cZjfiE8GbnKEp4BVdSBbzY51NV6RMr7ao1UvgefYq4Zp4u95H8F2gjvqBB3hFS9zV3tMGPuAV1H4MNgcCue",
  "key22": "3ct2DoSoYUaWp2k9uAKJwsSLsVZkxmaAkusAQHLbiurpE5SXwk7bFcAuNwz6fWAaxadb3zxy8wrnWetNij7bEimW",
  "key23": "CQVsAzxSchJWvpvsSdaGb6G78xuvGzbVeiyGfQ4z5VJnAG6yUoe1L1gn2J7jTQDHe9Gr2tzP4SDFSs9tEzHqjzj",
  "key24": "k3wMYu4uTCac5AfQVDQCkMwrCcas63CT476atUUSKbD11kaNQQFAYzEu2vqmHByAFbSrVe5kMGoGGwSesKYFYep",
  "key25": "3QJ7dBEqsqJW5NcLY8TphNYsEBaKuV6KQVQt2E3NotNAmffyPjJuYezNxReaN2taBbaMQ4UySU3bcC94jPh5uB5p",
  "key26": "2qeEmsordd2DLL4y5T7zxidQ1oY4Ffpae7ru1J6Fbe7R2wrP1sGkvjY8hzLkfBy5SbaGNuRrLfQ8FnRCpsSx44hF",
  "key27": "QwJ2xs7D7jFea7VYhkhnXWYqWqVWHH9ZSejAHafJRFnVEs8evmu6h5cjM2kkxHX577kmgXdf37N4cnAcanDSKKu",
  "key28": "5NMTB8i3pbL117SmZV72kTiXxauhjxT7veArrmq2Zgg3ujzH4LajJpgSWToqNJTrvP8QdeTC77FYrZTKe2sU2ur1",
  "key29": "3FdB3zjnoHfgVQEJWx1eVGTPyCTkovLsDCRQ9CDhM9fERNbeKdF4gx92ZD7rXwtJpwyMpKPkSAgUSNcPr8KV9Wc2",
  "key30": "5HpXffJhudLM7Axpikyqk57tuWyuDyxcU1nvajL8uy62kXxfUxcrSmMD9WZausWucKPvfmtSiuBKk4MvjJkh3gjs",
  "key31": "2zM6CqbLQiSwHu5n6gzhanJYqB2eED6ZLTQJBLvXVRB4sUSgJUm5bTqN6GCaDpUZUakyzy226DvQkf52BsWyRMAT",
  "key32": "5Ky4j7MD5HP6miJjkH2GUwBvqsfjseht2NRRsBbAbH1Ftmj2DbQMwWsvciknujog3oyBukrSngRMwW9k9XV61otK",
  "key33": "5cEsnhWqn4ZQDqdUJUCHXuwApyPeT1kYeLXUNBaY8azqgEmkWnJdx1h36oMFR2Z6XexAUNTLiezpjytcK23YM3V3",
  "key34": "4nrHtrjkcbViYDfrVdNs6hbELxu2jz5gVsAdyiuYBNdHXsDKLSBkHS8JWwfgP7C5kDiDnZEsjtoW3MdtoE6Tvk6j",
  "key35": "UGe4TBtzQ1vy7tVXihMe7bKb88nHbjUw5cSpfYN7P4cpZC5RifDXbFsE78h56jM7GsJtghKBYx7BGihnDdauDh1",
  "key36": "iqm2VeNznANxcBkq8d3jAi6BpnC5uAmRXNsTgT1iyhMdrNMezkUsWwZRMsDciLRziqMLvrvPZ9WPbfbRx7V3WDa",
  "key37": "JjGrp2eMu9cUpbhWd9KKV7NkZXustK4BVSDK1HDAcyqbFSgw7J9UAF7ZVJhsXiCPFRLe6uohLKYSzd9kFTeFUgo",
  "key38": "2FaaA2Df8zBMJGruvuEkztM6fbvp1VHWzLhUUekHoWXdJoNq7ts1yPja7bcMN8aK1pvSGYHFTKDsE444ys8sUHuq",
  "key39": "2qHTurodWRXWmGo9wYiJRsFDFwuS4wVVQXArURpx2E1ghfmL5e2RFG1tCQowFJmzkbXZMp7ua69MspT5Hx4ixa7z"
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
