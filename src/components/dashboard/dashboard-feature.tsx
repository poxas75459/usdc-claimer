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
    "4NQZjHJQiAfEgMMAYqhPVcFyjCdWMFY9msjwhLLMvHdCtFJvku42i9xfyuUAr5m9UebAhwhXUbLqcQUPry11QfZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xWZmsDvg3rUuJtEepAj16uL5kk2CK3ZFT9aWegNmw2WNkJ3fAX4egzm5oqQDVquzU7H2uGWLEpHjezRvPFxYVLX",
  "key1": "4VFYiA5Usz5KL74xhhC8rMc11C4hMCStYjLGLvaFVeCQcruMtHsxWmfbq7J9qwoZjiRPNJ4xqfhJh5N5xjLHvQn8",
  "key2": "7fibTecXDW9NJPGze1SPUHcWJtF75UvxkewwD9uyGBWZGLN9MAYKRMrPSzqsvXc9KdSXQcZ7F2JvussQE7P2qby",
  "key3": "3ehhhBqNA3CebJv88gt5ryttYhdhW5fS9zxYWa22gUw7mHsBeyA6d8q5Egmg4eZ59tF2p872RZ7DvDqsURtBYVsr",
  "key4": "3rSxAc7WjMZJMPADiwYARH2TSD6sW5SvAyJsqSd41eR3ArL1wNhR1g4GYy57R8vSQBhQM5j4YMgJ9iG6LNuWJ2py",
  "key5": "65WJiNgbp642s29fE22jKNj1QLHyYjfwKmuUjNoogs9n2JVooCMw9ES21yGadJoRCw8HcEJ2gL1i7xRww4yAfiSr",
  "key6": "26aBrFhV8ZRdXVgvRx8v52M7kWWpg2psaXvpwympRqLVZbn6JstgGNHZo832WrQ8xA1m4GaqztdwxnoGH5uGk6oV",
  "key7": "49Ez8E9cBWMTJ4g6DPT68vFWE5NzkW6mULVY3BTK3NseWwwf299C1pufVx1DSAe4SAPkawvynPMmp5CwKnj77fCf",
  "key8": "1RM3ULz5mPmvC6zcYEKpzrQSR5a3NbDvErqysjSi24n8WArqAqkZREQgybXUtwn8HZCgkkJ9vyYQJ3yPMHzNxxu",
  "key9": "28bECpDUYB966oBm8sJs8FL5FuH6hmFNezTwGDfTaHEZqsfsmS5k4HDRtY8qD2hsz52sGiLHooVCMPRE3iwnJuD7",
  "key10": "5EM6Y9HiZrEMDVRZH26tCX76vphAKnUyg6ZR2JJ7U8uXoXs3Cn3nXPH3bFj1kEMdd59PVbvJ3oET1g7dGnQvNTQQ",
  "key11": "3WPPaQziVCVetx37F1w22NCvAEijahh6rMdMWUUPsbLEn4ajUD1XD9ax69KAeP3mGKYbsXHbKehuo6Suf9F99EPK",
  "key12": "4JUgFN1C2QQXzA3fMF1X3SyTVDZNsw8eAKYEWUp2LJDxLFVBnv6hv647KYttzbUZ6ryh54WhX21UyGuxRfvuKmxv",
  "key13": "hfCAzqm7tt2YBVLyenPdeDCQrTStGh9fqqZXQZnzBmrfAo3xjXRyw3f2s8e2nk97ZVorcG9TzzApxFDkcsBqYar",
  "key14": "61gNjirTeWQMA4e4kBshEopL73LcFaxPCddGyAAkmLo2XmRjT9T8GaH6iZYfQbbcgngtkfJwi55jUWKcP2DSBymQ",
  "key15": "516BS7JNSLtZXS6hV4umZ6oMjcPzP6CCryaAzDAw8mC8ZRGTTESMXRy8VNWkQaQeDPtUM7kJoNiTLwbWzjdS1Y76",
  "key16": "41n9ANo45cAYPis2shbi27C5YC8aBSP8tz5e8QnQswLgw5r5PGcEvL6DFmcMMsXJ2Tp6T29CrbvtEgKFAPrb3Ebj",
  "key17": "2kDEE3w5UVcjeV6guEeh5L6stnfFgjdHb9uyRVEK3h5ULNei3JkuM1dMf9htWkb7xMLcAsCtsX7WqUiEqG9oF6nL",
  "key18": "5W4uBRPx9HXc7y6M7Kaa3BbxxboLsJXBjAzpjJbhh5x5isxfJzZixDv1NkEQ2tJ9Hhw9DyipRxken4gmjP84fGPT",
  "key19": "kNrHHKo9TBvZnXnhhEdZDjVVoMepaDYhy6DLWQAHQfYzqLBQn7HzzJBgoWewsAHAKvxAM2zjqB2KACQcfmbNcFW",
  "key20": "28HLefcipvjx7YynHZXcYoTtLceuJB4HfMahURTNCFGpeJaURkBL2R9Eg2EMMQfsneyQjhdKZyYNEaCbFHY7g8qU",
  "key21": "3ja3GDcGkRpNvpQgz1BDV6X92vuwQEcHrf7Q9dXHQUC6j512D4ZWSyKmiKPWoheEiwxq9SUBmkkJ3qxRSjnK6XCZ",
  "key22": "2EHXf6tLThZUzAZVP3hg24jHYLHGJoVk6nKD7dbTTbj3P4nC8e7Wjc3tzaYXBhF1eS5vn9e5H2u3mUvNwPEuMQtf",
  "key23": "4DKzHaVC4oYsjxF1UhFq7LtCi4Fg5b6Rq5MAvzc9yeV3V3S45tcN77MypdrVGTCEd6Y6myGxWmYqre24QN4NP3ph",
  "key24": "42Ab6KKNSi6WsuN2hDWNduRhenuqPsEstXcwVHkWJQNAdYGNfpiZXcvTg2R2jK4QVUqQz9x8QcVAmsTutkuoojAt",
  "key25": "2vwueJZSqDSSeD7mtpM6eyWSGLqvdg9p8mMYAcpXmb5NoFNDxndUNejDdUJDz7Dbys3pe6VTTctcR4nLsqb7W9EJ",
  "key26": "4NJd1AZsccQDzwLhx9J941TRCGm5Y5NFcckdUP6Mxq6xyKR2V7qS1xxosP9UomCgHtDejAZPn4HJ5BXjZdwYsmUi",
  "key27": "2gczNLwfTMp25p8wauQfyxWRwDuPDeDm5zzd3sjvFQ35Sjsm39fsAE6FZwcLKEjmBDcNrbgLkX2yEhfocp7RmU4L",
  "key28": "4RVkRyhLWnmgjrjpme6Hx5vsBnZddhV5TANu8EpVG6JMonZkR48T9d7vDzUpMNdzBEDK6LDMV7JANDGubQpXfTWr",
  "key29": "2VdTZsNSmgmoYK9dAkQFcUGhSry8QbcmLrJChKP6oK6qLqvAfkFyUUp2G7AupT1brBX5iu3gzWxu9DE1PjHgSa3K",
  "key30": "b7vncY5oT5FUxxnsuJf6WiLrDDd2PHerPSEvHumYawQMAFhd2b84ydba3jFvER7bgLQPDXXaPsSHuVjzfzpGU87",
  "key31": "G898oq91ECzdPPKQTEDHCEnCfWqqLPwamnoPbtGEkQaTAKG6Hj3nMfyEiXzTFTwR3hbAB1MYo7ryB4kioVTHBTV",
  "key32": "22wyTg8jNDKjCuMNkQG2soK4BgFqnL2rqpPHxicbQJKi4MWTVQD8qnCTfMcXFi4CLYGzMMdJxeYsmJDA21uahjS5",
  "key33": "2NY65iUWhk7NANYGGtKH3Cb49THx6TBTVUsiTKB5q5UXUKJyJzoTU7nzbdEEV31wmNM44ye4GpeecZQey2DaXCHK",
  "key34": "4MkypLcSQXxfRhqH8J6EyuTJEiPdcZvbuxrG5xdJinvV6H1uXaY4WnMcZnmRaFY1rtppdmyyH5AxA9JwSxL8vJcm",
  "key35": "463Z41wmCHjQCjCquDzytNS74jK2x8p7YdfzWrsbB5FppAqfDLphG76mDZ9k9MvuuY8fERCDtNzqfQGkMUFTbYSh",
  "key36": "3TogioNBkUKD5QqRvDeBL1T3ChQ6xQnKqrrfYCYM9RpT3oy4uGzUptbDLk7RzfRXTL4fjFLsNH7ftssDdKFEGum5",
  "key37": "2qmfAdz2DHVY4z2gX21fgNFfUeoyCEfRsv7wEVxFrejJZUZjh86gukb95sQv3xq5g6XNJyrG5V942kz3idYRB1SD",
  "key38": "4ngAwLrKRhhoHgzQGq6jSYv3niaeynKJeuLBwzLMiTvpyGPck1R4XxcDtUSkpB7Dr8iWgtRWkXXVYMSU7uBpLg23",
  "key39": "YRqmtqiPTtDx8T1gyUBa5zkhRVQbNHLDRQttGzqPKwj3XMQPXLxEDia1Hyt45pgcY6iPVKhswjbNszNRHQkoqfj",
  "key40": "3DY948F686cyCyAK6Ccpx1finxFpaGnjTN51VptY2aTK4GRzFBn9rw5rhzcKNsy2siugowWze1VWEkvkUM5t9Hsj",
  "key41": "5KkqxkvZcy2ptY41bshcKZ86WSVYg5vTX5uM2LX9ckP2WKpQZXqeMZSxjRqHSXfsqvZZYKtcQHzu2fMQq4Nqtjpf",
  "key42": "3kSk3Zm8YyaJJ8dwr8bG8djuMfFAL34TnhZtNY4R9D48wRXoPNMP4vV2RPaxedmoGmmMaRTvnkbQVaxziPWU6iPj",
  "key43": "5x3Vx4bX6fz9skukESxx2JxjTD34RVY8FpjUa8YWFDUSihxk8SkKpPr8cXB7qWgM1UUy4StuVCDybnsEB2AFx8wt",
  "key44": "47Y2ZouQSmiZGkcehbKPxH4EQXgiUH8vHX3Q5SUtkN8T49RS98oLSgE3qYuK8hqyXKfGgJSK9BmZATz4m8D7eYRL",
  "key45": "ZSizjTKpENyiLwM93DN6BYrm5oZLPLQp79QthZLZRGo8QSPkxnXp9Um16JNEp7kk7M2mWBYH8GsQye11JGtp9tp",
  "key46": "2UVanAm8fEvaD14k9GJU1S3HPGr1eSpE2uxaxUZBboHeM6nVM5z583zKRewdcfFyUCf3QNHaNqgfd7SuXfZeH2KQ"
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
