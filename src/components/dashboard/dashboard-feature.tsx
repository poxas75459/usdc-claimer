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
    "2dNnTNMje4mqHT8XfwacXVCCFnmfjZyuTrEZb7A3aovCUhhWgZh3kLnxYsXsUi9xYEW8p7APSBnmmfCrEzPt7Kiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hLoM8EDL8Q454SDRTikYQx947BSeCJWwsKqDoN9DmYN1AuXnKRdw5Ac58u1Tjc2KEWZgP5WPpfyGxsLdasz2PHB",
  "key1": "2Xyqj3Cwo6KfahXtDLuA4YkZ2RLPT2QtvD4i9ThMHfFW6VPm2Lytn2YhSvfjiMbe7Hsznr9U3eJiebHgNmuJoNQ8",
  "key2": "5cwgRX9NvLbCK4PP3oKijYvoXvdsiNun5NnL4PwciPeySs41eguUxM4ebQeh43CwU9MsM8W9g9kAUTyRC1JjjMRM",
  "key3": "59qGjGxi8mArQJwbXzMi64QPQxWo4PYRJLrsm2bBPmRFMBrdtNamrseUjU7s3tLpEeAKjPJi8QpRfvXTHAsSzaqA",
  "key4": "5e9DiR9AtvGrPrgrZboZtQW6WP1x1JtTkqcxTpmR2nioYUtVJbkVvKhc8qqfsgrLukPiD8F3F1mtSbFFQiPePeFX",
  "key5": "3PNZfUmJWnWaWx1K17e851QQaNturQMjmZ5a6dA945KZ9QirjmP9LqroQGyoaPzmGEuoakREBikDwBiSmoMrpohp",
  "key6": "23rKL9Qmwo3fTarpSTxV9MWLDFDaBXwVjnbHnnbtn2nmKes25EH6Eph89Vfevw85Tgu8HEXoM8x2FPopJs3naMmr",
  "key7": "2C1tHqyS1SjvsPiVrhiPv4yH4BVMcPYuYztS68XCwGANkhuZLjnRTfqz3LeSjiynR1x5Sr9bWEJXWommTpMRs29C",
  "key8": "5Fy6UHmoNY4dzuHtp9T59KK5uigPx8bN3wyu64bixLTuebcZ5ezB34AZMbheAs2fyEGA7Tjn9HosW7dajNPevbnM",
  "key9": "22W1iEN9HU3Af4yhcaqvLjqGNjuH6BTYQdvcDEL2wnZdzStgNxkXbhPRcBCEHPHMaXz27ATzowqkAxsGvvuv2MXq",
  "key10": "4Xvv3cmm1FPuAWDNsZKuVEA6vfX5ib9qoEgHuHprVGhpmZ1BohHJuUH3tPkWoKB4Vw9vSkSYeGru31sWk1JemgAi",
  "key11": "3gLEhfYbBvyaRSnkbA6Kv1aBTF5WnWp1rRjxBB9MkXxDyt6QPLFdgaZM1CMcToj1nWuUJayX3sJzypPh76VDMDqz",
  "key12": "2LHCokxwzZt6iqUQqDJs4ra3ua98UhFDz3yncjCDWR2zPU3urnfNjG8ChEUxuZFSSNUAJBeoPC9YaJ8mK8vVDFX5",
  "key13": "5LvLufVz1ao3Z5UWxP8o4MU8Zi9P32rGtNphsNLbp6ha9rBk1oibjC746PHEhkjGcnuRK1rLxDGbkk5Jjea6TfR6",
  "key14": "5KH1vpSYLwMWZDx1oJMwMDts6KKYSK4qUFDVtZ8Uat31bXo9gKfZiMFvKWM9YeHZ9jXXtbW5oVe659bGN9spmDsK",
  "key15": "4rubfXfw1KjHzQvQUKatiTSk5NPaYM8uT3MrY4MsiwNwq17AfqZkQHydpMaxQurnR9mMy3hAJmJCv81sNSbEakyX",
  "key16": "2hukgtxhMZcZREg61w5t8Vg2yyfLpZM5kuNZfM1ZdHi29MLHX7TUT65LNuM8VNCfK3zzRLyeLzc5K2ngdtCdUsRz",
  "key17": "5MXN4UcLwkeV7V2Q5Ukjbj56fZUoAj7L4KaigQLwwhcmJ17DigTfo5QkWJCW3g2qT3W1qcGCaEVQLS8HEQZocwkp",
  "key18": "32DHw9SFFVdKxLYAd5t71rXvrb3H8DRNneymKhB3yoFg1qBTC5iuptUsTBzopCkEj3oUCqr5wC9gHXWakixPjD5C",
  "key19": "53KawhkkMjSmmQSyaQ4QsCkp3BdLtnSmno5aatGoWRAaK11c66a1is4bapaZKmpXCmtRR8U5QTKhTCF7o2Eu8hHY",
  "key20": "CzVVwMDYDmSBjeaovbLFWCyWJASYgHqeZiEq528dQm6P1GWe6M9AyZxTjLehWT6K7vXGmeX3tZK1ZovtAMP5r5n",
  "key21": "4ZK9BCZ2Byq7Yz2B3nZKDTR9sf7UNzUkdGq8jUDtMfaUNtVx8Fzm3qRWyRAYbjiAdHye8knfhLvWU4TZogWTVzWo",
  "key22": "4rmFwGwrhgvJxvsGdFUwsSrmot5w4RmqNzSThiRBiVcsB9mf9UrTxNCbTavxgnFBbnWKxLkguL3q19VDGLNPk7TD",
  "key23": "DzEZVVFn8bpbc4p6cnEBXdTXNjh6kU53bcR1MbhT2HfeHVKf1JLkt4RaZz2h5nGMEP2fBgoqeynw3C5QTbL1FZ8",
  "key24": "2Sg4vbMyEZLj7Wpf5xCy9TmBQsVR8tdhgontD51m66D4e7rERNcBg92SdHNT5aTxkzqyopbWowLKyjCWbNZLyDna",
  "key25": "61zc7t3sU7yN11piFUFCUatJUAKkHr3cqm4Xu47esokZtLYn3iWwBmg4SsaemRikMQDYpxTSPKB8DpajoN1uipCJ",
  "key26": "2BdNzPMAZGJDzK48oY4KULkh9p6GQJ3GhDB2tzLkyhfoxuhq5KCcZUHpWRLLx1TZGz3AAmuyRSKgBJYXvXh3ejAt",
  "key27": "3WJzx5d1iiXyDj6tgo79PqC8xrFBFDYz7mq88uLJJveh3tnMJc9Jg7zuTfXhSF5QUJpEXESEgr12UYqWDroHRmBk",
  "key28": "2Hi1m9X7GkPbCeT2mzKXmuyN4tYFc6ZNh81xaPU383CesGWniHwuXQUBSjU7LibJJWTCREw6UvTv2rRf8dBgezTr",
  "key29": "5Y4cXRvtFNnkPc9xyDJasZ24ERcMHpUaJBcteUsbkWccogeByAA3yeWYMAojsNSLtXZriznCLpbvK1Lu7LNb8epx",
  "key30": "5r1mgrWv8w14oQutrDbNH2QMDQsoryoy1MPjW9zwypnXTzEgQ8Gog8QWKCfPAXu9VaYtZx7TZ2JzQyDBkafAxZaz",
  "key31": "5gi3erkyWNXYt93JJWVSmiwaFZ5koM1F6Gjs3R7AxTxUSoJgAL2t78HsmQoLeGVEy9Q1y99GniNewe4rZ4SadfgV",
  "key32": "nRBjXJxsX2G3QSCDznm1iJb8APVxbNYksoYDQqJ4eeUArfHEqNzdJQBPaGxL6FT1C3t8f2K1MQgyGhj3Gpfgd5L",
  "key33": "2jSKDLbSQreJJxJzaGxDHwoLWt93vLMqozezYButiBAhwBTRMicB1kW4MJYk8ptHX458ZaoZgpxFi8fGAfFeJTVr",
  "key34": "2r5zAcR1KByvg9J7ZXMiMVqb7a8fiWnN9F9255aC8fxNnX8MkCEmMsibAqUAoyT7bxpeaf5SdhafRWK2qzVEbKuR",
  "key35": "48AAFZrTMkPLNcdSPwxQoexwwcb4r3zZS6nZjCmoNNbpm2ffkbSndoSC59LYGY5yQ3VPEva9VncFyc1GCuwhHBFJ",
  "key36": "5bBRF7vP55AJXeNyQrcdxPHAoDhMfdD6zh2uw4SatP9VA677PoNuJAVjuH6W8yxbmrvYCubnqbxZCuc6xQ1hL4VS",
  "key37": "4xL957LH9YZfmvPGmkrMdG27DqAczSt7WSFSCbNzNHsvm9tWWuZCRCBiuJ96VJPr5DeD9Hx8Ge3NqCNR6zoawYr8",
  "key38": "4qKWxbt7JuQhpreXhe1L1uNyrB6Ao8iJHGUXggykZMCgwQw3fYTymM9S7DcFwUwCMcnM8jnwmRqhcwSkQwVte72f",
  "key39": "54dVgFFUATEqzXjeENEEW2adwgDQktmEjm1Cfphy2oeme83mgzeueKx6S16sixTJ8ZvkcuAQnkGwnhPGVYpW2pZR",
  "key40": "y3eQSDgonh6geX2eebb6NaoPw7KESgFrQo5V7mv9b9vpoPHSueyXK8E8Yt2dTsWz2f4ZkpEEn5zmvYyk4VwU9S7",
  "key41": "66pnew3AnaeWTBtEfGKd6PAgy7fBoTCYhhxGqKxazzwSprnprE5qCi8CZeegZmc7EcoRxUWzruYBZBGSHmzBAmFL",
  "key42": "XcYQuCBj7fSoWszF2uLaqVYGq9nCNj6TR7wiTSQYc1UvWtqpJTtxYG5gS5rNiu8wjkvQFuCso36MLm9rUdxLDja",
  "key43": "7uiUTPtDxZDpLkbNMr1GX6ZjGrotcSFqVxt4zW2j7HiQqsENFtesb1btSBafNTguBESJUQUhXLhuJh38xXHHhhw",
  "key44": "4uuGrJgNTYBhRuqjKog6ELvGZFGc4MZK1Htmgerpc2MzByADGHqFKauQo6VnGKztSgjXayru9jcibRmUtAYMQmSw",
  "key45": "2o2KhvKQ9PNaXCmCoJbUDSAfLnE1eAoPx7ut1CLo1FKHKDrzxF5LAUcdjs9jfd6pePKeMcvPhR1tq9bNLhMnjz8d",
  "key46": "58dy2mNC1ZD2pkTw1oBG5VQhu4tPiAj5rVDzwXWgrFeZQS5LYQGPP8PTPzXMxPN3fUgefh7bMojs556T5zMtPttx",
  "key47": "5otRmxSngutqwwdAwDX4R2DB8bLagftkLMtmvdHk8JBFbbzhy9GRoVG8Zt3Jp85ZwQv14WPjDCvqWBewZv4MGLq9",
  "key48": "2UgdXQi6yRyxoUxv3Tn9r1xERKN2MMiHu7LG31oz62JJC2LgHYfQFedZNLzjCawR62pTbmnbKqSPzVP2Wchp1aS1"
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
