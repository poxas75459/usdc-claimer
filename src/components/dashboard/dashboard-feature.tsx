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
    "4uHPtDMebhKaX4z2pQpu3LtQAe5swk3NVjVWn61b4shnzcRJr35NAP2RorkkKtagLJruHpdrqTkcw5h4kgwLRAid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CyzaFiaNUwvpMmjPbMsCFcTcCNWDYoRcHWmcQr9FUtkptrdgZk7ZVEjvHzbSH7qeAPAuhvrhF3k8Xz9KUHjsGTY",
  "key1": "4nbXLFZjaTS5sSPvgJTNGDtwKtmjqgkhNjyNQp5CxndymyeD2JPeVhjq5TDj2zKtB8HdYrcjaujCwK3QC2vUrR6u",
  "key2": "2Ssa3vfVWpJjTUKSBioTzEa9u1Fr11hUWRTCoL6JsHfF3bDG9xTW1RoyANGMN7XbzxJG7P231aFEBwyiiboxVu7g",
  "key3": "3sckqn8uS9YJRnJqggYRPuvBiiDjacqw2oJjwpm9rcoirTzGVT4AfnvLTKktEVHdUCaw4SLkS5GPnwsHvVtS8Syq",
  "key4": "5peANd2tVU29xHFmao3oxBvxXqC5LRcqtEg7gcADzL6pqDoefGCqbAAvdTTB8FpMV8yrUaNLKoP5AWduymfnsGu1",
  "key5": "4oFzEfw1eyAFKr5CcLMe7NjiFsf5udXehLEgxuqhm81PD57pKMwCQHdYEcaDHQe5EvFsvtwajLeEjKbfAXgMWqVv",
  "key6": "21ZFxRhgAc8VyfsutRTKRYXi8m7zEn3DAoD7mhjvEPLNLNDxJnxDnen3rwCemJQNS1JzGULTSRXtSFiwde4FgsqT",
  "key7": "3jzJnKtskPzWPRRjRsq5nMdEfK9QN456NrDpvmV7heZAguScAdZvUUswFGfrJEDdqmFT4XkGxx739ppGx2bujud9",
  "key8": "7rwycnZgCNyk9Mh3Tof3nZFad8c3q1j1pZ6bFAZvAPr8ujHJtoLrYgjDPjxDn8j1yxDi1n6YzaUEszUwaTRP4sE",
  "key9": "3P3z2w2VMnPx7js3HvR369VycFrkugL9u65WYN5mNELPvHGiz1BskZ2hXQ6JMGFf3Twc5PUP4KSpGrB6QYi99aqh",
  "key10": "4jCd5VhLQJ5rbW7wJ7RWKmgXNuuyjJBoy21e3gKdexnW1HRK5WVeeSCeek6iPwgJkABtuRMDrkkewfoKEErpbgpz",
  "key11": "51yMsY1BqKeJG6sr2zNx8oATSzSmvfF8qahd4xd6Dxng4WVsnMcM2EbSqD4WkPm1RaDTZ64rJD7Gt6stj9BJQBQb",
  "key12": "5FkVdkwjxiFsEW22YuVvkebFahMEdbXtqRzTduD73Rgk7Wkoh6WpF6eEvXu9xPFr6Ev3HthQ7R2vY2EvRiRpX68F",
  "key13": "4tdDPf8kpVoiiPZzdcgVn8wbvRdBgBeK3rCGfkE9CrCHm4uvhh5guR2Az89P7ZSSsGnwjcgKfdYKHaxcpSGkNyhz",
  "key14": "2Cmqs1oQd42EFWmRU7vhVhQcoeuC6wwv3wf3dr5CMroKu4qMLjwCmpnsysFjnQhhzNCYLcndJ4CYsbkvV54wkvGk",
  "key15": "4yctvrXYKfQSB9a5KtdvZZ1FkP8Qezas5JNiyKxQVrU7ex8YHsacKAaieGWrARX3dCwxFhjgCgnC9vf6rrNBdgrn",
  "key16": "2WNs3ZyaC4kYaUF3T9hggavorK16hALrJymwjapshkFnXuftfo6xSteFbXkKtfr4qr8ztfa7sYCQrh9914Q5ss5m",
  "key17": "2CztKjxmm9h8uFwMjCWBpreP81jkMLqEJjVw6HXC14VN4jJYmZSnujpYCixakTRjGjQGFa2D5rp6pFCBe8UsdGDz",
  "key18": "4z68ZBJ1oC8nYcVszsmMLat16W7Lmw72QW8LgHgn6YwsnfuEazL47X6R1E9gnmWE6ojrxvc1BttqEP6kZaxxKUMP",
  "key19": "RYCsnnXfcLqH6iSeGfSV5c1b3oQeM4Ts3vdV6xucQe7j6fdqDrPwvEgqAgniJJBZVdjuS8dqH3463ieNU5jGwFY",
  "key20": "3BzsmLx2HEpcnrYWWGeGaysVFFdqQX3Kf6Eo92CKr7WwEHrjU3XVUFjHUU7fk6to7c6EAVV1vDV9442SXM85fn2t",
  "key21": "2R5UrYrWngBvpwYmqgYGXDdWSWnCqdpQ6JMo8cbdybZ28oeabFPz94QZAbmYBPexRE7pu57nXurPuiETXKf2mK23",
  "key22": "36TzcrbiV1JzS3kNRJLqDWkWSNtuTjHkjw3iSk9d4bMpdtrjEA27idiH8EG9fAKbZ7St9FxAHouY6pJ3PkjHuzyX",
  "key23": "5GE4dNH6Lzy62j1h11ZxxeoTSAHmizXwiU1zDNN2KcM2mgv9hpKZRN4orqeMDfrsRSuMsxWotUURPDxS3tXXxWBA",
  "key24": "RkPn3tvAQNCjFNewVwJGcWBDVvNhxV5pnNvjLMMQhfoY75VvCjGVjL8GFEkMWvsmKC9tDLzwtJTtfoxxeHbqDK7",
  "key25": "omhChFDbnqvFUsZm64xGBN2u3bkQTZ2yonbjD1yDz5tu1BZrpvtUiykKfoLphXXgoLBkU1pB2P7JH2mbzuFbcez",
  "key26": "4SH4ptaRYncCMsHt7CgtL7kBG3gr5W1jqTDUdKotYq1YwTDMsx4MfzQByCtdvcussoB4r63mkSEWyzLJXhhBk9aw",
  "key27": "3j2jGK2iSNDraf4Lqeporaks2prGihVzY9Jg8K2U2D68fxsGNKMMVZ1fKcMKroafJLCeVnc5jBfx3BAhrj8AzTwR",
  "key28": "28SY7iui11gDy2eBwc6cfU9abAEnK8rjrhfnVGrDMiKNgX72v5ZWwizVeSJdt7NSV2AwfJsr9bywUsuKX3Y5SgMA",
  "key29": "5VworUVVirzyMKEVuyjijGPfLtViUXkCegqoQSSSFnf2WCbgCKFSeA8pb2gUQW8RKDJZfoDAevaqwGaq8NkhQP6P",
  "key30": "DR2MF4GzsQskpWSBXM7XZCtTH5Sf1Co3H6khXgUVerdmKDgYQMNwadUCJBEZWb4kr3U1YdpCjXjyB9fBv9zgt57",
  "key31": "57hvL5K5e34qLTjAZD6PsY2nP1RvPCcFfspPJe2523588go67XWGuJF9e3Y5FbasjaNzDxSn6XvmoAUJuKRc9NB3",
  "key32": "5XunmcGEnxd4XrFFrvEpMd1HpTTCCLLGmpZJ6NUxtiVy2hDLtwNSmVB23ddSPAYvJ6HEKGv2rNEcAcMrQQbRjFBz",
  "key33": "sR7e5PJiK5uFmRysq1KhLvZB1EwrnJS8LXyHTAngWQjMfPgWgLmmRCak6fZptpeHG4JGaL3tMaBoyjJEbuW9GCi",
  "key34": "FTaGJdCz5p95rVSrimBazwKsb2Zp6RzkKVtMm8EYezJqBUDyPYGajiwG5t4PLwFVeEHCeqxrwxPXMXvUsHVuGfL",
  "key35": "4Zabhmv4KYAET3HZGoy4ApDrNBeCEngie43zYCmPajs3vGC8ubRuVYmvcb4fe447fLTdwf7ufmLuHY9vY5b1Ni8h",
  "key36": "5UJPj8guRtGCqDiTsaa8K1KB3fJV54WSiroH5ZDwSmjBhbzZ23t1bGmLJrZNLkCLC2VkTuJnb5ALyAxodo2jsNaS",
  "key37": "5BAh2xNzwLALLud7EwTn6GBbk9CE73Bc3e7X1u7S1GxCSWFemw4i3u1wmVT32oC64ooZHbVPBDEqE8QfA1CEMt6v",
  "key38": "3XHU1Akgog8yieTPyodQZUYSfW7XcoKYUCyQF1ReEi76U111XWGuazRLeXSzyBVTK44rzzvD3rJ9ZLjk9tMVtj9L",
  "key39": "2Cibm6CAAeJCHMPuJQ1jHciT4LtZwkZY3FkXMWFtseegJnMvJvDGMJnMVxBi1KcxFhwssSkB4BgsgAgqgTkivJa3",
  "key40": "3fT2NSXZZTBJKc5Tcwiu6HB2FtMh66urx39EMhYTZjeAhyWDwqgFF59FgqHLBDbXFMWwoicLHXjdXt7cQV55PAZp",
  "key41": "5Q7zcTJtkuX8Gc85sMxXTxWzTGSr793oBM3zKfeCA3Q9NkQMHJubJNmuy2MDAXxsRL5sGoga4PrBk5gDWCXKF9HT",
  "key42": "2xp1jnUYUxjR46KVATRjSsN1r4GPu2zW7UgR1nmU2Fr7989cxs1BGxEaFVUCrALyiomsbpEnvXNQfSnqmNzmfRUX",
  "key43": "2PzEJ33Jus8QQNRaZftz9cBHFHnbZ91qWQffEmod8jCqHZAQqDuJRxCk1L41bj3FqKLwdpsEYon61DmHFsXbN53D",
  "key44": "2C5TZUT6h28e4DmcmyNyjJ8TzwTR1yTY2C2btJZQvrSxDMtyWagCeNsWBpWodrvJB5a721vUCWjMXS3f8TbKNpj7",
  "key45": "4mpn7iV2bNT6u6y5BgWxXmZmNjFACNC1cq4CrRayc5nvU8xRFSTi2YMCcrgfHSP8PkgTkA4CJo3i8arbkHji5Hyu",
  "key46": "3oX1ZAkDxbJr3jv6u4MqGudzUChS4Q6PR24M1KpLZzAA5Yu4436QNzCDoXF8ScsQ1D1NKKR62Btgoi7o9E8YRD13",
  "key47": "8K1NkBJYBh36BXZGBUH8GHjCYbmxjWHETQ1gMjhLuoZZHa2mMciadzLqc5v799mKyZmquQH82Zv618YG29RWLHP"
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
