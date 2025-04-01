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
    "5jtXwaVwrZwjcy7j66CaBvhrGVYe1m274z9KUPXVQWCbiS69EbRUJEbePb8AQmA4gsABhNuVZxVsVuW9k4YnuZP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WdPrdospc4sqUeSjpWpUqqU8E6vzVg9N7DLWkrQydb9AECZNCQacthUQoKsxhQWuJQbRgyc1PRVb2BoXfQEp2Tq",
  "key1": "5RArBbjBEJdKK5UQEjWJQ7At8P4F73knJEXiXvqGnKhR1GR9r38oRPzwtYH32vpYdaz5S1qpPDcH1994Prmr6Nyo",
  "key2": "2FJUGH4NzV56A7YJvyS8FUKS4JDi2371ut2PwTFJyZr4h2wUrHJzNA4ffedzunVwHo5PPFkSrbNfomY7CvBFdzFb",
  "key3": "3Uzu4ze3xDCWsBAqERVq2Fj9XfJYbn4qhWPgSdKQ69QrcjNC5mEqKvBQE3kSoGft1K3uUBaKyQ864yZewPPPe6Wt",
  "key4": "5TDmvMiYMcpWJ7vNexgjepSEjsjpDwfVfrwHk1oxvGeeoKcibA8CQUagnbg2Hf4PihYr5cJkVaiUMqMF9jYFwH1Z",
  "key5": "4cMR5QM4EdjhrsDvVkWauyow1eo4qthaRzVJdvuRjRAHzFtU7DRrs1pgDeELhaRfyagUesemQaQwb6dxwFjiJPdh",
  "key6": "56ms1W3Bb3cy39Dq5Y3f96Y2xZwf713hnRmb7wZi4oUzM1Rfcdso2QPvn9NSQHYwp1mkSWRy1PHXZNHnGTrmkHgg",
  "key7": "3VmKN432GfhQqFkTUogAbAbndt6FfHbvUwKcDSawEERHJHzpWg66bSJvnr1F3L3EqivoPni91PWRQTcaFDwbh3xE",
  "key8": "4MBnB18eAtgB5zNYNDzF2gqaitd49GzKXG9LxaGTmopkiu4VLihugGcsvCC9PWh194ajxqXw1QLdyYkix5Tc631P",
  "key9": "5zMMaVowakPHCcGsfB1Q4fG5yv6WzV6XFLu6DRBfND776ZUZewYRFANG2wx3KUmVRibKeyjkprgvBHe1xczbcEQB",
  "key10": "2oMbRjFd9Pt98yQ1HpJ9bELgCyNQo2XrqeDMwqUYszX2KRkJsEPwZBLHGtSLZfC8z17p4S9Dyx6oaCRoWRxHvt3k",
  "key11": "4ekwPd5vSyDyXfe5da2QyGpj4Kqgr4z1oXp7aXquq5XvVgAgLZweSezd3XrvsUXPHX31DiU18LSdpSk42EDAqRvo",
  "key12": "2z1w5eazfHW2YU4EhfxpRg8YS32en3MAQD6JXrzbSjY15groNZ7NHx3aZVAUSZo3FKPgrj5oyfbDVoM23Ne1YpKp",
  "key13": "3ZNWPy15cYDcxUWotyWGgjzfCYHLUSjHuYMAnEwtimWxCny2a9vtX8cUNdfxS93zaY5ZMuwuoaZowfNsjdyiHvew",
  "key14": "2DB8NufAJBbH3pdkr7s1ep3bBC8qHxErca9D8Mah6pBxNFS3vR5deRAcY3aHZAfRnm93hX2xJV17KFGFtYBjrMm4",
  "key15": "65uEBM6tJJrzmB2yTfNegPB2NS7uaXYd2S1gN9c6EDnpbb2r84NSC9sU1Qc5nm2zRSRyPXs3YgMGTbNWpk7dQAje",
  "key16": "3gNerA12bMsv5EksH1Mpxn2ezS5TDpx1kUo75KLSWLkdyGw5GeY72o4ETJ1BPzYnesY3ATLEHJt4MScXpMbWAu5C",
  "key17": "4hqMw3oRUGvfgp7fgcSX3JwSeyzVRKqrtdBbM82LdmVodY4pPp7dwRbqVRkPTrPP6X327qvwb83jSFSuQMHjhTCw",
  "key18": "44qY6xXsAWmAfFrGxNkrcGVunoaDkkpx9NcXMoAiAniQwCvNPHLiqrcD1aqkWupfQs4SFrefzp4kQCrbcJuUuzuo",
  "key19": "4VSbafNKta1ZZg9nmx9xTYfpVuqV57gJ7VxKY4bzotzxNzTioqPJiaWN9VHe9ErD1siwc6nPApNpHDME6NuKxAdm",
  "key20": "2HAeUUCazeDxGKRhyRYNdHSj9vrWuCLBVSyWUZ3ux5GpdFKEripfHr4W9hXGVwZrZr3QE2K7ydhbq6SvvUbRaikM",
  "key21": "2Xg84ep2kEpLiHFfdSaKtmx3kaFfzJp1dmhh8txHtzNqU2f9fm2fAKH8iHW2mYKcT8AjjhVBv5AoFrpTsusosse2",
  "key22": "PwyGEoLoVKTqW7X8m5X7J13LkZB43qWZKQz2xN97B6MdNuoYKDNfiFDKAEE1Zw1q1P7YX8LqH5BuydsoKH29U7N",
  "key23": "2R7Fa9JsvBRGK6G9qcqFjosLDqQBpRL2npyKcaBJyqZTk2tXiQDM3i5xgKNSP2VQRGrXNtA8Pwa3ge1RXKFKcr77",
  "key24": "26NAkuBGK5eH1KyFtPknqJCoeuU7upMir1cqnLuri3XhSyfD1EvnBtVr36UjkcSEjp3f78xiFU2xXWEYYYNophws",
  "key25": "3J5PdqubFcELPSKTBSZ3HH2gsxRb3g5C2xZgd5aQaBPLwHvJagYRaH5VMzwPYywK2DHumtQQ5Z8mSMq1kdELd6bP",
  "key26": "4YspQBEdvKRVXqXpGScom1fKsrpAX9PQ5mJWo7CndGc7fn9hiwqgK9C1kQjLRVZLXG8z1xJXwszHqFsM9VdhF9Ld",
  "key27": "4CwQh6ATzRRLGDh2cpj6YUDh3RCMVUj97qbpRCuQqYkthGb1SLnBDpk6hdvACk8TSzmuDA1fS5EGHm4BxfziZqSM",
  "key28": "3Sm4rFNsyxAr5hrxLKtovPcydG6d4pM7W2Bg7xhog5i8Dg3oTDLJ4pc5vCb5gn1YZTq5dsscujn49ojZPnKJgX35",
  "key29": "2NDQ85BAcaRApkSXeMbhubzMRoKLPF6kfT9Apb7WjkfAeL3Qv7vcZWm7tneGWSyhP5HXbSfeBu9uWzBR36txDMkw",
  "key30": "3zNUKk5UuVhiAXNnnUDqQJSF4cgBYSUDDPpNyoB3FgWN4Smfho7i3N724wt79oWy8GjRJNFt5qU3GnwMojUZkU3D",
  "key31": "3VnoMWTSXJZoqiRXCURSGCvmZoPqAXPc33CoEK9yDuCz5HWi4jcVgWC19tsRpNq2YpxpnHnvVrDu1UjBwUMVhpWS",
  "key32": "2HgPXbobwmWYECMxnQPuc9Jq62q6AqYgGdYDW4t9UkEbA6of7yYn3d9Sdc5Tnm2dFp6za5zKjCkDcsKwUJuuiXWs",
  "key33": "4XbBeYiawXALXCuhVAq4J56Vf8QV4P2xP4Srb7KFVWfzxUpSMbUR2BzNo9pL9VuFDp6ZxT7PQ6GK9kLY4WFMhk32",
  "key34": "4ckXBJEBrS6SSDxPrLgAYGXACwAMxVUDe16exKG4egkyTUfWMxzcMY2G3Z58h9kYHLGPFqcmDrk6AuWj4nYLptL5",
  "key35": "2JLEkg2DgZuJ4MQVA7ZMaQwUP6tfAQ6q2Lb6GiEAckD3rr7tUjRKwkRYDpxxKaYd4XZcvQuuHuDj6K421HbuBExm",
  "key36": "63udEkGMYAjwvPZwq1LRdhz2yw7rEzw5c2CoY8jDRS3Y2gmJEyxTbF3bV3UyyGg8KfqZJWGeLD747soyYW9f9Jhh",
  "key37": "8n4kukjrVQPWWjbKKmWb9DtoSHv3cCVXm8r24A46WENGj34hFCc1Uje8dt859cqUg7994BSggcb5t2o4PQ5eSRY",
  "key38": "vgiGvGW5cyiQkP11JDMsywccdwFTq1SZBbtQvghTKTimtPof5rvAE7tpinCBESisySqv88SWn5KE6SMu6pU3ANr",
  "key39": "XbJoWUrYeFXGNZeZ4Z87eMjZiA2tyngbTmYsm9T7fbF7VTAzBnuMaLrz2oU7ZoyDXvSwoLfNBgP2A4So6Qo3JXu",
  "key40": "2rDYpWyg8pj15wAoFeimNN5Rb4A1D8VJyg7M2sHR5Deu9rEHBvUeCBfCkBa6wR5rDSmz6JdiertGD8KNxFhtY8MS",
  "key41": "2PcT8SFgQYB6XPkz7QU4yH5pUbaRmupbKfGTbR5vxuH7bGncaYyBYwdKFgTExLSks5uZJMpG8czRUHwUxzT1oFY8",
  "key42": "2vGoYHr6NTtv2b8yLmGvhb2CmnYrapANFRT5FxWG2pwiWSTfnMsPyK36krPXzFFFc1QVoUmdgJzfTBysgkkZGVo6",
  "key43": "35uGNc4TP5KQUGowznWkSfakDwTQqvWRsgRHdKR5k5bFjA4mbAnCJjiXT7rKL4Gv4M8TP8vpzDkzLSNtKwrzkonP",
  "key44": "5CWjdJFBYXvFehyNLG8T3kGnxFfMikFisgmi2HPPkrGyZQHTW1Rc8GBhcbMCMUWgcNNCFc5tNefeaZEeWMGbmmXg",
  "key45": "4bgNjrd5hrKvmNM3zC2qZVLKf2aDHcNoLQZ8NEXo1K9SrtoNR5EnjStoubKDkxAPVPK1nttbhmXXnbyo5nR2hKJN",
  "key46": "4J4VQN6wrkdPktuGKApDTLqQPYcDuTQun96L8qUABpNnPrUe396XZQPvNyWij4HFb9xxpnVKoeRfsHj8tz5asavs",
  "key47": "5xPR5u3KQucUxEP6Sgpj7ykZEaMoPLyU4x3oHLwG7Sw6xtY8sDAAqiiwkte8DVz23NPvxpGTx8fhE7dHXcwZQAs4"
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
