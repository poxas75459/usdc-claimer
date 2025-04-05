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
    "3hkqYm4Batt9RfwCqGAVNJYNrWnLL8An99xPr2CkwGKXAuLqLAMgY82uGSRP56BrKXtZTEKespWuKwPubWqiLT7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22tW7aFb8rrkbeBseaX7SHSwfnYd3kcxMNmzmssauPVoqivtStoq33QgayeqQHg3fRcw3fsMntxrhLpMLY5NAntL",
  "key1": "5exdnr4zRrC8QtFxNvkvv7xFeQ3tnoHwM5WidzcNEyc339BiuWbuwnPnnKpjQgtGvmPJhHn29iGoSpzWDWXhUQhi",
  "key2": "5B8ExVpNkm2DeiyZTMz1LgL4MTVZHZrvjzUWmoBW2SSxasU8ggMoszrAY9VpzkZmicChReDE3h1Z7V418jYrpGrh",
  "key3": "2c5i5Vztc2ddcmwnF58xyJxcfhWBHwwHH9G4Si6Die16z4mHQxo5wMsftXJPaMWyxaymWCNP5YTjh8jqTQxK1Wvd",
  "key4": "2swYRBi8rQcdciiUKcVUZJq5JgWPaWdKSDkyfKydYBbiTZpvzJ1mgdEzNeun7CgvyAsbPhTd3RxWXqh8mkQVcjk3",
  "key5": "3VW5NChh9y4Thx66r9CQqKayVxR5Qqk93LNjxLLfV4hY5bWQYKcDSZNhow1tV6WzcGSAW3dpafMmhcToGXcmXmsS",
  "key6": "51i9LcykLFmE3uTX1yXp3n14vknPx1oD6biZ9ewTz2FPqN9CafNfSyZBqnT7GK3ABScDksF2nKP2z7XS5xS8W74y",
  "key7": "5Huys3ZNeTKf8pSnZQd6DbE3ta8jiUtESqeHN8xNjMUquqsR9hBuDBpDBK9YgwvzXqcxzo1aorYVWTw9zZNULMYF",
  "key8": "4R4suFMagWsH1TqBzYW6mjWRnwjdD4V8rPzC1DXzzuRKVobgpD95dt4AZ1YSQ94p3GLoiym2CGjQUR1U386E25QB",
  "key9": "2NfmP7qRfHcixNMZd9A3f2ptHV5fFR69o1cXwwuRwbyV2kRUQREjYrXN71WVU9n4xaXcvak9Sy51z7ZCKwxQvFNK",
  "key10": "5naN3Sg2dF17CsUxEWQUS6nVs3sURN8BH3k8h6GEateGTTw7ZfjYbHLPaCPXxVXMTrgxqpoWUDZoXm7JWGHqw1Qk",
  "key11": "38wfNP3nXDtiGWumiyXaGd9ecKv6wNNnCxnkomUrD4v9XFX74wAyToXq3QCokzKnjUxqYj4anR1sBbDp871QSSxs",
  "key12": "5PPj3Jft5Uigg7CBLAmWxQPcWyvg8qxSA2Foi2nVfNGYHKDAkhAAGysde945nzsk2PpxG75Acus2vVnZR3rPKMgS",
  "key13": "3YpELXUjU41KwmbWKi4D9bWbztB6aLczHBZPgVRq6TCc3r8WofxdrtRoWoqJMPMutcivy33roSFcBGb9QCHtCgfN",
  "key14": "2YhwYi5ftD1cPvKheTTXzswFCw5EAbbcBWFefiVEyziFnw9VwFkLjb93BXCQhmCye1W8MeLfwTYucUW1bU2Ds14p",
  "key15": "28DUJ6EXmYncEyF73bkTV4ZWuu5PrqiAAptjEG1cz3b5KJ6xJypZmwpEFfvfjC1UNVjH1MeFFBJppyKTdTsMxyLS",
  "key16": "5e1xTaSXFMvCLfncM1XZ1FsfDNKirnpuYkW5GEv9uJZUPbQopY1iaZ8FArQkrQbz4nxepEQrWKUdSc1EHwktVefH",
  "key17": "5prFCE2qjNVHqqnKtgW7VZD9ALwNhwMCuzyNEPRVvZDs19cyiXzkUE9rafoicqj1CNVaSqhmuWmXxg1iMsWPaj9",
  "key18": "3mDP9MAZEJGzYjFADcLcZttksEJ7udSgVGhFYEoj9eXcTHFdHWZGfnruoLfatAnnJ1YcsdMYWdnn2SWfobQZ5mPR",
  "key19": "euygnrg8mB4jjnvToQzCVAtAJEeH5nnARhhuNN5Zz56BQMwvizMiQqNF45qHjtsxKwD7wtQkkicNazHGF5Gr6Av",
  "key20": "2kpzRjQex716yrqy2J7vys4GqZWEsDdHyEr8Atzu7GZ5y9LdaHzb3yhC6wSqaUEDFtLRLZeuoAkWfi9otFcXvmEU",
  "key21": "H6cNVzQdYxeHLaZSQrP94aeoR3cTRTSQXtAZS6EtBJX3o6iRxDzQxVcJUoUdMznB4YiFggsrJPFqf2coBZm2pyJ",
  "key22": "4VqW2UcKhCXzuUxa5r3vfJ3mFGfGH6yC3ggf4BHEgBa7h4B4fbL5CngW24qLLCm7GNgTJeYdrJoJXiGY9xu5NLLx",
  "key23": "3wZoFJk8jEEWoBYevHYercGymkaN8GQ6UhDZGo7DpcWsyYkRgnbRZJYD6BLf6RBK1rKsNmGFJxAEFeCTdfDV3TKZ",
  "key24": "4i1JUTd8MgnwYbZsqtGkhNDb7k68xMarM6Eh6FVKjb6rzczu97Vtu2ySCzWDSB9hPjtkffzLwGf6pXQ5rf1amkyK",
  "key25": "4ohgeoCNbXsEoskK283Vgafj92B9vv5CzQnVLWKcXw11vRjypRPh3rkF7CkKvi5pqDrCKhrM9m8gZ14WZ7zyZ5Hk",
  "key26": "25jEZj2E7J7jk8ZE1Ee1z8cUNMTodxK7pUvdnvg8hXor6Apd3BCxmmCnJDxCRr57J8cTJySNDmMP1kzqGdVBmWUW",
  "key27": "9VhB4sPS9f8Dv3Csw6EBWM3kEKbN1NBN4fz2UsD2RsusWo48ME4HsKrj8yRZMfSNKL9G3QwVL7FxcYSxDwaxrAi",
  "key28": "3X78aWHRY4p3rbhLeWmVm9a1uRCEKZTyqoWqSTYPNXbVJ4A9PqpesMR8kJbK6PjRoTjfoHGkLYm6aiHbXqmUtdqR",
  "key29": "4XuZyKxZUUdXcsFE6vxxRSXnfzPXpsWjbj6GgJyJdUk91cs1yvTE6oLm4UjeiB4oe9VoKJ631aY3bwqBsFwLiaoX",
  "key30": "22thwwymqj7xYo7qWaeTFYz49L2JDk4syAYrC5bbYTdaVLQGHT8jTSFue3jCo89q1J19RuMQ36Y6FzCT8t6j52vi",
  "key31": "5HMsfNzbfiPxcc1WJvYyr2sgb7K274uLgDcX89WEk3Px2D39rPghwn3YTJpHLuMGSNB2zD186xDj3njokw3x1dg7",
  "key32": "22NQKacXEJ6C4BL1eACcfzk2nkKbhbW54tUwkYVhH159cUgQbCbEkuzsVuEsvt8HuusXcrZTPxw6zAry29MZEHmA",
  "key33": "58PGdAqt7LSap756toMn2T5XAGxhPTf5co2rCpRAXdGda1AgqQn1ETYoefbRpZqM5A68bj8oq1HkBips6DW1Uv8Y",
  "key34": "5KdGZoJRaUUfmSAKN2VfyUJRsAn9GxiterkaiaxZ1jzkbGLTPddkPtwwt7wAQnCdAfYsk9fCXNF958afL6P7fn5D",
  "key35": "2t19gdcBefsZej56sUzgHN4ro7Mi8yMHepinyxNwKaXtHggL4yLr9tfm6yteP8zyXs5QYTYpyQtFEzJ98q4Qmcwt",
  "key36": "5FRptRrgKoMfW3sRr9HxuqCWwSihCU8RCuCwbwBL3TfuQdHVArbtadLef5f8m4p9b8zwgU2HCn73Gfk1ReMfK1iA",
  "key37": "474TJyPwbHiZedkpQdc4RcnosvcRMko2tTCoWQpXBXYo7yb3kj3okivKV2ttbMPTBJDy5bB4JQwozza6cie2cM7M",
  "key38": "4BFmYo25j6MMe9JR8HoLd3h75sam4UudBuXacz9ozL6iGvcV4WQ24mpvtH4gfpHoa1AY1kX7Bws5kn3ywCJfz6Gf"
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
