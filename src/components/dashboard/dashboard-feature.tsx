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
    "5kwsCk8APELZrh1v44DnqKWp3bg2742v8WFUqG5Wk5dyfNSUPu4dkZYRFmqRk7EwzrrdCrjv8eQxXwqPnaKsrYQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VmE5KXKc1oqUmdDMrCrtHPBwWqMjMmgzKKyZUbBnhbmQERXh3aRH29TZ5SRtBkB5DeH7TVWz1nLbxz5BucpomCh",
  "key1": "3CbSXRpmj2Q4HmxJzzbLbnLcDL1RekjtsDJhXL6Z4pPmp94YKU6ZoiEWkiSNP68mVMmXMhmQrggZzdjLTgXj6ipg",
  "key2": "3VBcPyVQsUfrsSwQqCdvgffs4sR4otAW56mviGCCnyMcL6wTwYoPtZjyeLvd7XmhfieP8VbQJavBPbUmuEbgcLot",
  "key3": "5nBWvsgzCkkHoEyPxgpy2nWtRWTxgPZF3mMD6JoGnfx2SSydHnt4XMdeqN2AoHXcE27fnrZEAKhnuCLxA41kfzmt",
  "key4": "2PVVWwm4oRUQT9zQVYMVHJ7dZ3htpZEjFWfwXqJSjusc2QbrtsGJeT47gaKniAEds49v1ZXbJVjK6hoWHESXdWRD",
  "key5": "Xn7KhvWPfD23fMpPmx5QMBixh89Tt5rvHCMZyUWu8BCfxriWLxojqGzxSxpd8YacxkW6SS1gYUfEwHt1cEFZrzi",
  "key6": "uas6jREgjJdzqPnDkyx471uhncs2W5ehjHB4mxNm955q8PNCwKV39qHePA4SgxEUoaZHttXwTmzNveLBfW7cVbV",
  "key7": "5eeQDiamk1BC4fFjhN1ucWNiHWechPR39AJ42ZdUymawd1wsNMT8WLkQYWh6hrd8LHwqTFh74J5mK9fVVxreMoY",
  "key8": "2hWuMrZeXbV4jJsp19a25ouFYycqGyaAoBsv4w8dVAacfewXpBYd6jv1DcmoQKUL5uGc8zkGfg7abJCrTwWEjQ5Y",
  "key9": "4HXajL6WTtJJgZ214qBMJH42cVkWXkr9p4NkxaZLLdQCQWwzcuAAEfPEdaEidsEi9VvCsTsgVdFXn6SHqLRh7QzR",
  "key10": "5d8j3q1ohZJeqTkp7cKc7hTkZkrB6bzWLzYChC9oYFD5kSwcXeFHDEniR8zF5EZ5aa2LwrZsQKeMBKdbxYXANTGt",
  "key11": "4fQcoVA7wKM1o6UAEBPrGmCJ1VQEfJzjrB7HsakoQ73AmfGULms4s1YTZBubovL13KN5M3Gx3q7Vzofahyffphw3",
  "key12": "5KpHJ8pFiUwEDgj2fHHtecUW84zvWECah8YjcE8FTyHfLBY7xwK52DTKdfKNXG1H1o7qz2yfxynMBFX2SM5xymZL",
  "key13": "3wwvgXiZStRf3MHmA6fM1QGD6dyfVZAN2oiYA5tjBVUDEcWeHDDnmLdAv3hoN55H4sNuX9z3XFoLjgKwQA1YcPwb",
  "key14": "2ZdykGij7XGFnB6iSGm6FURHMprkbURTdkYVkftgZy4tTQfPuePhREMBN2w68tqDcrNxW1ckr1fPESaFH5HzPCWz",
  "key15": "5k3rg77eLQqvJoN9735QaddJbm8cz8YGDL6E8AWYnKnxVpV8PPaxcchFRfNd98StKKAdZmQ94dGc7ozk9RWvuhNy",
  "key16": "4W9z56NLpPpN1StsEsVoboECSGBjvkhU1VNHN2CnbRbdmof3Zkfjvs9Dk9CRKUqA9q4Knogcjvqj1RogrVky8e2t",
  "key17": "5rT1LPBSa5ujNjKPNNVkMiyWjmCQJ6Upr4oEshd9otU2hut5yyr2tyVwaYBGZgLr8bqspCbPqbp15kUakgZw1ouH",
  "key18": "2dp2DH8dbhYrSHyABLySQ1aY7UBzgDGktHvU5vthc93GJ7UaJPjzENcd2jjnFFU9PQmyYNFexiUj7DDhrypxFXu1",
  "key19": "3F4NLhjw3pKcDCgHnDfP174ATU8FhcPkB7JAQLbkAxGR13HbNj2YvBRQW3bR2Bp81XWYsFvZ93asAue5T7y6x66e",
  "key20": "5J5m2CJdNHUxzZANmZucn2fKbbxEEecbpdCgrhYtDYfNUNwN1bmxngRD4QiSzvcGshnQwFQ4QjftPEvUUVyg6b6n",
  "key21": "5wqMLs6y5Au5upXD58rNkCbZJHNncjzewog5ih8bRG7ivPVevjp4oTjTZzgp7sBjDLUgr5n1XdN2XaS7iyV2jAtD",
  "key22": "2MXEHYPbMBxbUc95wTUZQtvG2iNZ2HW9F5YPY5fmURuxr31dFhnwkrbXE8Fd2p3LyrkCfn7xmwr47pGM93pg6Gnq",
  "key23": "3AKxQJpBkDQTmsk8TeKTJhXRPtGa5hzANaMxbvxBnfYSU2F5XmkEVKum7wBToPzTU2ReccLPD3tYVDZzPxFJQ1rB",
  "key24": "2yxh7n7DMRTcCeW73krFEveaSY56B3cWFzVA1TSnqwE78BS2WHFgy95ZmDtnV4jRs7znPF5CFatCQ4kkn34nGnHV",
  "key25": "3KFMDitaVdBunfjcDUDXy8Cp61VXBW825PtKTNaeh5rynsp1CnGyCs9QiqN8m2eKUsnZuUpMV8iMj7HicMxpvrGv",
  "key26": "3BBoapuYe3tCNBuJJGoxbYJoi9W7DLJJRHo7sfEYQupQEZcQqDg6gbqT1bG1u8oxRJgw64EeUmXV9HoCdWgsezff",
  "key27": "4fMEokZfqoPgL1FBeNUvxCkkZyTZwB7nM4KLL3mhRpQC7Tb2ttYKLnXpD4r92xSouiBtKtxjVceB8WCxirm5tafR",
  "key28": "397jhyCpbeXqELUQuiFMYPsVyEsj118b5CEAozweM6c9ETnboDAPGogAjJdNNV64dHobz5J15zxaT1G8Rrj8DUu",
  "key29": "4npwTmYdC5Zsv7QA4ux7oJeNufeZUPjYf3fLzRUjtGGJdgRPYKg9TrKLzWqmNB2gkg5Km9QZU3WsmKCe3J1JACwB",
  "key30": "4b8bQCvtKo8SxhADBnuB3EeJWHpeSjvECvvCAwaLB41tnCysAdgwxhnU4TKWx8b4AxjsE3jkNgeLYoMkzfqJ1y9B",
  "key31": "2db4N7cBogGmhMnpgpMECN82dMaMwPfx7rvYnjkVCSbAmBT2ujTokYZLsRT48gHkNxQwRS8Rpipa9LgHL5c6gvWh",
  "key32": "3voNBAAdKFJAXzhicnYY2ZUvTdbAw9LsiPALy81KVHhijHktq29NavEKogBehjnKaWPBLJh9CQyFwHC54u3i4ots",
  "key33": "5vXXcJi8BJXpGL2XTHooQRk4j9aUZUSxLofwStfmAyyori3uoMMqazHuLpDRj6YENKKyNzYrbGbCaA1VkRZRhuuh",
  "key34": "3bQz4KDy8FeWvUWUDu3BmWFnREmn6eUdPvC6CkeNytYcPD5M3NefkZDF9epUrbLWRL4ciBfQA2XhDnPDqKnPyo74",
  "key35": "5XtUR1xQ3AeiNG5uX4xGgB8ZDHHJRKbg5DqBRgnWDrahdGqsr7ssdXiibHS9r5GGMHbFCsXjq2YCuUH6vZX1atK2",
  "key36": "4kAdzTotpiqi46x3NdvEtWuK4gBF1DvHeJRCfB5yEdWpRBwkt1Pbg5Q4QJpxckVwqVLFKbRrkwCeXMeqscbV9W2G",
  "key37": "49qmgcqMygneufxYHCqdVmy48NZds2YeHuUm7deY93ZZD4QJ184uGzPpNMZ3dsGhiLHUgjxDUeKhUzpaojmx7bqr",
  "key38": "4hV7cexHxX7pkMRQoYT6FgiDJMgg1ztWdvRqc4r1TS4ykEjMVrx6F97bs4Xb9JB9dbqLsp5hUe7JWWPow2M6A7Nd",
  "key39": "5frmjP4JrNgxS5ijS6JTN6byZKpwjFnW4ztTUZg1S1LGMQwFgasGwWujiSKVwSbH2bqoQhQEyNbCurVVsWDMKMWN",
  "key40": "3aXZas6kfpBf3wkuegvDSeyQThTFQXMqiFbesxrKvejnET5AYSk9Gkg7fQdgcywZVmxKcKQB6mvjrUZvQscnpkfH",
  "key41": "5rG9uitnoKPAFxcYbLbaTUumS2cAtgQwwT6SbPwLKxAkrqmj6NKWnFq4NqRxxdRg8rRVQGkwrYTZxTHWRJLNHxmS",
  "key42": "4ocBTeFqThFfY7um6wKUxgRqxKqV3c2U3Y5jEXpTU8AXWBqKoguN2dSXx6q8oLFxbeFbo8ygnnXN7tcWJxBdMyqf",
  "key43": "4hLGoasWWonbmA5xhT6RMxpxYoqi42fBowZHoChoyDPozDDnQu23icf4eAeWEiBZ4YeAPQummfbpxLMERn3gDgSY",
  "key44": "3bpmx3t42TAKg34qguCp2XLB1aeHNUi28vBJY5GSWzzZxvMtVeKX2HPibHSr2mNbLeX6udf8KxgNVvkXw1bqt2p7",
  "key45": "3SWd3pKt6ADAj3N5aPg4jGVafvCRPTfawVLiJV69CYzZgZ1qoFekRJ3Xjr5176mceVsd6czqVXEyFnvYv1ivXiGL",
  "key46": "9p3ZYfABNtS2y42biCGEvjiPQjjwg3L8ZzATdDgRYRW9bVGmpQejyXsAjp6vc9wbCp5FR2LdyGqo9uzoEEr4Zum",
  "key47": "3TuyHq29Zp4bSSEEfBeGNhjzB8NX3dmVBbuygScDuM5tfLWvJSpo4HdtVMtEH5s6tdFSPUPdgVShVRSAjzPyQzfY",
  "key48": "2AjwqvCruqJWedhAgVkvcho4ZxSKR3oGXcQ3pvEmWfv8K4QWKAXYGbiuETkY9xeMtiZNF5o7EzH45zFx5UzmJ6QQ",
  "key49": "3AXgiapCNU6kxmgtU9mUQiv9MPVUPeonuos7Np8SzVcBLxjtk31Aj65tDoSKZsGnjpK6dZjdfbnFEGN2SQoQoE9m"
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
