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
    "3UGN3aLAz2jG4BT8jFmhFU41ZuC3ZH1hX5zyTyjiUPFRpcD5UUd5wVCk58xXZ6EmroK3WcfmpYzFiHWH5F2mpqrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pFLfAv3DNqhSWnk9zzW866UzptKWHBz9NXMfiBxifLcvYit73FcfVWNzGzR2xyHubjEfWej5EFryc1xmYLt1DyM",
  "key1": "3FHRE7GB67MvzZVJ4quXUgRYBEvdJoog9fHQ1xowGMcREoVgKMdXfYiAeFLkVcwmPKZSVJE2xnjPsN17aRbXSAcN",
  "key2": "2x64ZMhzRNMvzuEVFFuoGpphFCh3vFGBPP1YzSkGbL1oKbG5F1CDXmbVFdx5xxgiGBn7ooVUur8CCcek4YWtQLvv",
  "key3": "3fs27LJT3hvmzDhw7KtRFDzTf848RLwu1R6W6JDjXCMKdJt4xhKnYuxpUb3aQL5fnQQPd9A394wdoKU3AQV5chxW",
  "key4": "34ySqUufWBVx5hETQhgYEMw8UPmtDJSayob2FkTtznaD2rhP9mEZJqmDfBeXjdF79qAcqM8C84QCQmt4cNAUJj9i",
  "key5": "5HnqGBaX42Q5F5RZURmNSa41RUmVvHxhVkDFF29DoiWBhHXsfFZEXViiHTsdjHpiQP9CTernHAGUtwJXDu6wf9eP",
  "key6": "5zkq1otRKJAeKyu5BoZDvNTfRYandrL1HZ2gQsJMVye7E9uBW3ZwbC8UCA61dnvWoYXi6RsixiQDK3DBtoa7Cs81",
  "key7": "5u8CYMxpeK3AVQrNiWahsTBVWK4re4VsHGQMktieLfvKxb9mpthqWJxQM8CU2ubEjFGZ9CR5UHdXarCZMm4eewLX",
  "key8": "2ghddXxfqmqr7XTEJXD6urvf6ATPedxSeLTdVwmfDAZdRwm998p2kLDPVuTXsXZBBRViCsDfzdUj6yUZu3ztP7ii",
  "key9": "4CPvZq7BvUgS8Ji4igeYmH2hUhJoxjv9o8LtML2udJhearedMnPUvTGbmFkfbrWu9eMXZAphoESwuj7TN4Hichp6",
  "key10": "3TGrsPsnHTeTBUu1PHL6nWp9PrDSCsSdBoK14c2ucEHQ1vpzFrzXEyYkpYK94hprdBr3tycvLoihEvw8T8KTcpQW",
  "key11": "VqLiny4RMquEuYgx9WvEE7Jnt3VfR3hasuGutVn2E15FEGdye1bs5qmY7Z81zmaNCKCHdduN3b2vxCmYZGigskf",
  "key12": "2fAwVcGujPzZSfFKgWHmqy8JuXomuBHc83JMHvCvFSX5Ffe6ny6xwefGYWFiLBNpkeQNbbfj5auwfMux7HnbvKiJ",
  "key13": "3vGFdEfapzFk3wzCYRKrbRxqSMiTtSVgC2XKKUjnQQ534Ry2v3mgpoteXHrKFfyz6a5W4RppofxjQLYJkdunKpNv",
  "key14": "XSij66YjPZNR4yFMN6wbhTcn44e2Ds6G7EMg1yt5aDMzEz6bC4f483Q4JWYEx94qkZan9xnAoKaf61L3Hs5Q5eW",
  "key15": "ScmzFGmNEkNowsixpn34TyTv3i4r5DQCG6BSk7EGhQgtgR3eRun1TQj8Dg6htModajkvU4gu2CnvVWaU2zjLRC5",
  "key16": "4WcR3v3FVx4ER1o8kEuRhPDoGtAXvnb7n3BCsGioW9Te8W8qZst2oV5Siz6WXL7sQ8CiLvJtciPypFeWDhmjU8hT",
  "key17": "29FvkzmQDmmP1DsZgbQrX9oUWxhgreikamRdrvH89GCwVGRYrxEqetjcAroQxQJWiwfUZvdfkjZWGfBPn3vVeHNR",
  "key18": "4P449rNfrtTve88WK2Wh8ZQKSkc2SDRfseWGUnk6wb6E4RYSLvKAWGt375g6rfryH3pBwiAoAQDy7yXLgzuxC4vX",
  "key19": "5mUe71GECww96AYnBDYntc3x8yvTcx63wisNfqBktkVvBjYhqjgWjnm3GnmXEKzYTercDefRWyaMhz1n8ehm1K9F",
  "key20": "3z5ghfwRphSL1kmM6zZzm2ZovMxFpdqvvFXWVBbx3RUN978FCqwsKw3L4JHWZAKbCBPtTAXrzqoLY4Gyn3daWVCj",
  "key21": "2EmTNdvbfcav2EoCy5EW3nwKZY8ZfkYiPU9m7GXsSp6k6891EfShu2djs4gDy1BjaZ2x6WmHoswH672N2UwTDwaF",
  "key22": "5StmMjR4nt9wkFumqj7CrvxwJT7ALxyL5ycu2AjC3d47h8kYVDRgHrstEEBKFpSgyWqFPnuhf1LCKgYtehS9fXx9",
  "key23": "54byGA2KCrBisQbD8t4q2KtgUuBaqMkVCtprDTs5mq4piMbXzHqM6GoVP8tjUJVnLe8AzaQdJjXH6B7WavMq8JJC",
  "key24": "2c8hqkhBTkjmjFZQ817uN3sQHNCryQW711EbcQcP6Crwesn4xWxNfXrTNK6PQwmAfhD6wNRPXtWCGXZK8GK1k8eS",
  "key25": "2Vt4gU2h3W4gL8o2A3meqPPTFaN3fGrNCepPUk2epvpykWonhGDeaTpYQgzzANjzcy2GdQaR7axYfBa9gaD1AgQ6",
  "key26": "2Exo7nLGngQAuha7HoSJN5AtjCTZ5MT6QzYUdUn5Sgd5xgdYzE7y3V1ChtvPmWonqF1hSsYScHZLcffhDDovQCVE",
  "key27": "56h4uqio3peRQJkjZ5zMiRD9p7ybXvZcTCytX6ntGES9eaRxA2x9pVYzrrf71SytXX19tGptwjrqroAJgwBjNc7i",
  "key28": "2oqJyhFVGAfmjAfXg2cMcP9hcGCtC1gghwAgQNamXGG7GF3zQFfUzhyWxKodueaQ1NwEZeZ6f8Z98aLpjSds5rvi",
  "key29": "4Eo1DaPWpTgfbJ6WDEFkLYbMoX4P5jquRuisSzF7mDrGPJZ3i8AnMKPi71bBALZ4JNZvnbkUH7vgJexNp1czTYQp",
  "key30": "2zXWkhESpS2LPzGkzVQsq5FzWcdYzJUEURkgvLGM72JSmCFntV6Zs1G719TkDex48MitvSjibswsLqb2xechuoFe",
  "key31": "34JLfCeuC44A6sSqkqRswuBPAafEr27iMx9e6TSTqt6Wh6BgmuWxEppRNEhdFPrR5p2f3MfRTueER739wDMiiMa2",
  "key32": "4LkPGUUQ7TgG6TU51ik6hcBJ4u8JiUZ4oynpn6v53qiSy11BP4eno9a6qxKQNfsFv59NcLbkSU1CdA1EcsHkZxmj",
  "key33": "5CASJCg6kJRwoeqLt8T8vZMKxaeVzqrmWxY34zYfe5nhEqstujbwvkNLxP1z8SNSWhLSDWwomhZ1RkGSTxJVyTqN",
  "key34": "S4rS9MuUrtYRtCuQUJQMZveXLHE2HE38YLBcYhoex1zRwGBTqyJJTRrzvVNa22jhKbAEhBwJ3DDv3kUHcydZKjU"
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
