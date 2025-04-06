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
    "2nWZaPn4AQpxA7XNQLnxkDZp3XJ1kV1NKch3xtQvVtMvy2gtwjtNctLRSZ8tBxnAZXaduE4XALELt41BnN6pAFAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M6a4w9n6BVym4GgBf1DYh5tk5nk7Yey3M7395TmMAXwfJpLAPySLWXmZopHdTKeHQJ1vGdwkMdwoJvvgyY8Ymrk",
  "key1": "8bqfveYJgdyMgMGE6SK2ELxpSVDaWs1SC28pnRu7LYo5mwFd6URXwrfwbR3mCa5rjEeqZVCZRjnPzEwFBykMzCb",
  "key2": "3dcznVWeo47gaUSuGv62bpdejPGRiVYas6AGVxhfnTrXwUWcDD8Jzv5w8i8ChpDypovzpXuw2wTN6zTGKymjSBTC",
  "key3": "63TWjUa9upHrnK9CBeeWzb8mimR6oEPfB2nSkRfrRiR3btsERXh8rRMkzm2j4ujRUmLRoRfMwUy1cZacENFAx4kv",
  "key4": "5qjFDHPUhchWiMTuavFtXPpT4ZwimfjxtH8FbV6sQozrjkCJgYK4sdDaHZgiWG7HNcrJa2ubwkBaMo1tPxyBEhGg",
  "key5": "tD4kEzvNkZuWonQobeVW9u1yFjJhKjbsDpfk1GA725Y3MegfcZ81WA5koKVTaP6yw47u7QXi6AcyAu15mHFZ3m2",
  "key6": "WfzcSzpkBcYg9P85SzC6Eg3P6Ft9mHeUQ53MKo7SToprEDAdV4NEuJPz8XqZCvCXksB5aAccyncMJpKdLHQnH2n",
  "key7": "3QYWe2RPHyCxsPCbLXd935vzS3D33wTrRngYsHpUafVYDMms2ekiPuikJHLzFeihtGA8xFrPqUuDd2bATYZqdJP4",
  "key8": "2q3QrcP7Ve8d951pFxohbLHpuaMyNFmFBsBgHebo39XxcS8pzDneZRJiTJyv3y9BZgregU3RZdrEn6K7ei64cnmp",
  "key9": "5a59C8xCH4soXAkKAB9YKAEwqcnBYQN4x39HEc18mpvv6HMR2NWbnY9kmWqm94t6aw2xoBzsv2A9Dvjc2zjF1Wmm",
  "key10": "dZGui7HMphYQYWcBj3u8yJron5yvVKQNsLPED6VbsdtmmZi4qQbXpn8HfSM9Wp1eDPee7XbivkC6tjTEEPAEvz7",
  "key11": "36iiL3pkcRSi2MyjKDNGYFN32Q1KZYiqoiAmsAK6LQ1EsGv6XAd9B9DsBEMCciQ1U7rPVgTCmexJZ4vRevZFtiZo",
  "key12": "5JZ6mb5JVJqCPVypMxxk19FjatzANkKQkA3UNaVjYfdSx67GNKngiVtPq8FFjiDkEvQTccSJVg3VMncpJhGowydq",
  "key13": "TGREcWXfgXEW1Ljkntd7KfZdTCYigXbqaZ7vNgvUGgBYD3VAdQPuqRRTU82TKHZVFkBqktMJ9ReGJFqwhCKKrqQ",
  "key14": "3NsfMVAuVZqLrxRPgMJnB4KABVgb69ZUqhpoCwCrm4bk1fFRJV89nmrJpajcCXxuQ4ztaZtAA851WTnzCxKypRyb",
  "key15": "57XwfBiPrdDrmNapccdg1aEL3jpViZ2fMRC2P3gTWmS56d8KMZaFDAekT1D1fVj1b6vimUJZsE4nVYPbuvw7dxZc",
  "key16": "3bW59QDWTjLUd9CePrdXftwgjxe2ZPHXxz1cj2SRX7nFcs9yvLGb7broEUUrxnHuq8qH57NvNFjiUBMMu541FQ5p",
  "key17": "2ieCuFRuMwKeMw6rUwuUHSJue7pFDYj2Ff9dHiukqZP9mbuWWPWetkofio6Wn7wDA3pjnsHPA9L3nXGWUH2rX3UJ",
  "key18": "2BVshxekFRQN5e7a3yxzEeBWouCVA33cqyBc4bmYr1eFYsKGFCiVdzEudB37ba1Cd88qTGNEZ78sZEC5718LFgfU",
  "key19": "xoLdGMCuUJFiD6H6k4n2t8qWfMyJo7Zy3DMcXKJPYX47DKUtDqNHP6X5beeMSWHQcPzHh3CBohCFVgJkx6v6dDL",
  "key20": "5RqpFNsJHxJD4khn7zqcgwNGzyJ9GY7YYGAgRa1AQeeRY2yUfd6jMTYePqnNT6DkRjRtdviJXXCmbQhUDSUpDzYn",
  "key21": "4cqbkyBgUbSLEXNzmuYLMntpm67nXbfoGKHrgofL5mTQSEA2DWL3y5fKMxWrkQzHpmoFL2E7v1deiSmS2PMHMLyo",
  "key22": "5Zd79j7cEVTRpFPFnr7bUzc4pRwy2JZmgG8tbStYF3xDKPLa3aCRj2wQdNquXLteVcQCDNtwZCSfxkZgnGUPdFGX",
  "key23": "4A5EmNAppfDNTdj2rbA1xBoprVjDFoVuCWKCyrow8YPdoQfGNq1WtXdbF2nSq6EvJirWiqfXEaN9qXKDU7siXMSb",
  "key24": "YaRgaiiAh8GaCwKGTvmo1Mre68BR5wjpRhMfmEnP74PFa47ToY8T6J6fvWJpcwaWLBwHJwyF9mymZaTEHkA2R7K",
  "key25": "3MU71xaxj4QyGC1KjKg5YUuvKK4hc2sjXfMv9mfqUxd4kQFBuLHvLLP26Zj2cA21aJUczKg7e7ktSB7265w5bSuF",
  "key26": "5bDGEiX3QnJN4rh9bpcYe8cPGxQU7VDri2d1vf9UDLEaMJhy8QsZyog6k1iTXJg52h2zEz9jYuycMSx1TM2jaekT",
  "key27": "3TMwR1AStrCncwL5JHFPfrEcvLSK6zTyJi79bQ8NRWrg4V9C582QL4UFGURZWLN6AbjCJrdFN8A45hq2m3tEoVb3",
  "key28": "PPr5rHvEQdcamSBq6ZjBYbPse6DzZDgWtNZQhekskUo3w7BVvuEqcdoGX4jc8pvAeYEXBvPro6cTmyqK3hZcWxg",
  "key29": "4YzFfLZeSreZEfdhaY7z3uoVWXp6gzwPeMrwzZvG9H8gP3xHeLpp5V6pVzyYi4Vta36xc9c52873wsvPLXbCrTZZ",
  "key30": "3WbNTchbaJujRjj3vGidGX3NkMxRY7eH1hUfxpp7rDYV9AxTujRsYGyjTgJXHLtyRMCf2ioYR2hwZ6twdhm7dag3",
  "key31": "mHLCDuFFjVVi6DJ4kjQdgwE4TRJnSP6M6qfA3Ptku4m8ubTePvU5nW8feE9BGowpc3ucioR9tQuQS7GMuRxNXER",
  "key32": "4EpPgkG2jVa9phd2c5KbKfkQ7JuvWrDDuMiNpaLYZp9XhKyhWHZDwdgvjvgGCQHM8DTcEGRS9d8MKtcgpgazsmU8",
  "key33": "bqFqVmmALQ3UraaA6DSvTQaA5BjAx7A5SHiD99e2CZ5KLdkzut6ammdyq5eLqtAeCP4MD6v4FHRXAJScH743CRP",
  "key34": "iW41E7qp38XgZPL48KqefYKpUgECXSk6xDxZavT4192qKFCSiVC7rKLQ4gHhA7D1qZZaj4qrreArbgnkFbCvaQY",
  "key35": "rbr34RVqFchEbzquUEDNzqo4EzJjyZLEQcsCgLJxa7d5Qo3KKGSWtVfeEUA8mQnCBjk9XtAdqZRjy4xk1XpYJbS",
  "key36": "57RPFt17c6gAauLtD9hikqDvdHaC5QtDF3FvqKkoK6QGTXvKvrD2Pid9CDC5SFUe2pf2sc5nuoz9yaDKuTV1aweZ",
  "key37": "3qn6cZ33vvQgDUnRPGk96qUmDNPRcR6Jvm6FRRVQDAuDmFPisA6FTzutTcgEKQievoTuu62suJeF42m2aQ6JiiEz",
  "key38": "5K8dMqrierfuxjuLPjoiYu8XD6WuY4YzpeeRPD6aqaWAL29kk2m9Hg4ssaeaALtRQneJQ7fCNsx8KdRCu6X4Timv",
  "key39": "4Yaq6KDyMLwGcYkTGbCe7EKj9tqhhz8WA3CFjDiadwgp8tyXASzZFExoS6DQwyqUiS7zwJ397HSc4w7GtXWHuPju",
  "key40": "4Xj5C3g3LC6qiHQcC6iw8dpuZpmB4N587FDC74KTs5TuZrQ9LmGMYE19YLK9z8w4VJedeb13JZENKBPvT4CA5iz9",
  "key41": "4WKvWikzLRmcvicA3otAR1gFZPb5fUMiEaBNvvkmP8oCqBmfEjfuLKfZwVsjdSpTt7VWHD6n9h8w7gp5DBRyvNCd",
  "key42": "3NFTWTpU7XLwrak1hf4UQ7pTUX95HsMhyUv8qEPkiSpRkGeRi4nffakbE3xSkPT4cs5qjf2gHVwiLd3tdiuisZRW",
  "key43": "5Pfy4HCttp8duRpV4bPgsD3S9N6YTh7WpLjUGRbsFy7feiy1h4SmmoBhcZFsH6aHpVfYybBqgCMbmTqXG18MJCaB",
  "key44": "2dy6i96qYdp6xNMxYPreontYkSdonDSc3Bvca6zyTBjEYTyZx3927FqXJsfVeX2o8NVTA8Et839rGcFDVm4ijgpm",
  "key45": "akSmhyoCa67DkaAEWTuq84nGTrPuYYH6uZoQyjVL5PqLPCDuYMBtZugCigkrveniQfacgkaEAUvBxvT4uQozAdf"
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
