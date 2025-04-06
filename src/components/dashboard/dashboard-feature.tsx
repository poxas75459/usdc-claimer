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
    "xG52tcLAC6GiP6aEdtrfVAGE4AejZef2WWrHgVizdDVoDQbcCHpmMW7uH7Fn49AHcQHWaEfPpMDd4M3EsYUeLwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T4U4z3GVLikYNHT6WrpJzZXkMaPaUHu7jctBwJGhq5Rp6x3zPrBV3UDXUD3hCBPXXuSDBgWXw4nToTh84unNwWS",
  "key1": "5MNfuWkXtgxXYubtv4D9WpMryPt4D8K4baHbdxksARTKPnQmoJERE8T8vAu2LPirPoH7pBn3WhAqDRRZHtTkVRyU",
  "key2": "4CeWi8iSYtp9QXToMDvEeFNepPcDa6HwkPzL3zJ8XXTWMLanjG3rjYkT9Q6qCWXDDtHv7nAvWeSNtZteLVUHLuX7",
  "key3": "4XFDfxcwXrLbANbaVz1ADP2mx7ocVHidG1URruF6FD8WDLNScuKGTEdbcJzHTUnLmvTVsk6HqLpZoEeZ7bSTGiL2",
  "key4": "2ejXvyBzAJichLrDZ8qyBRLjVn96sD65pMfwEJMTE5iFXFDoUP2RrCa9MZF8YRtWNyefoG4yg1uwQYn9KaUHkS9N",
  "key5": "5UJkip53DP9L8NbRHGZRdVhEqwF7V14pK77mPrsJuoG4UGcMSiStZkird5wNTZvjupn6gXJudT1QARjAyDgR7qKT",
  "key6": "kXxk276rY4JEBBEjMGoBQ3mrJFXwZpkbD9TdQVrGaxQLKHbnX1cV2DwXZcPcDysYov5jCYrb9hVxn69keZJ68eY",
  "key7": "4X6S4eDqXYv3H3395bKkiMGc9xJXc3k9Lk48v6TGiB6Au4V9K8RMnmdByvGaMJBJk6izQtMRbXz9kBkRGB6rf28Z",
  "key8": "5kCchfNG53LpjJS5ed6TCmQUrwZVAHCAdvGqeePesphZnHPLYo2HZ7NZSLY6r59CNxLWxwfhQn2LgkeWRadY9c2B",
  "key9": "25QSEnQMzUFWZLujwCYxeoiVZ6jxjw4GM6HpjbS8cP2Rw9shPSbLMoVXv8KLD5aKLVo9MDv8k6CxeDmMozgSZqot",
  "key10": "4hAiaYhxDGV2EUwE6dJa1NbRDiiPkuJJpJizRyce3knHyAeNDGbz8Ye4X1gz2kjuQa4qvKD2Bj4UZJgtgPwjV676",
  "key11": "5xXq6dKbLq4TfUpsXkrXGfHNxzsN8Ve7UJLrJ6J1PgAArQ8PKpdz2Rk7pxjHbxtn93EwtjkHWBMquj9bUQvPfZYM",
  "key12": "4TXsiKiv9ytYQRbLrbpXts7gwDe5sAj866q2VjcoAnS35jYxJ93LwGcgewp3xjrZ6srgF2gknKiPWgw9SgiyLT48",
  "key13": "5HFtHWsi2dShDgq26S41Uj7w2in88A5n6jx2UvriUKyabcXABbw4iDYs1JQmnRCYvoLkvWCFHsS3XHh68WMRAc2F",
  "key14": "5HZ1bxMdT2mXeo1ZErWUjtTuqTUDngGgMAED7LB25Dghhp45zMQyFVqXT12xuQLPAThsFUtvZQ9ttQUqTLx75Fw8",
  "key15": "2VM4i6Mz2qt9uvcLZA7WYbbWberzcPh9qbaCdkvbBmSiiUrXpkMWkbuZysCLZvGZtUfqE9Mik57KBJPc1fLRMBfJ",
  "key16": "2gndZEmuY7EPxmYxKMkwUqUS3Y23bmVeanZDsb8AUACpxHu2c7PAVRFT7zNrsnn1E1pWFziaJi15zhTKeFw5vPxD",
  "key17": "3QwWP2cn2ZcXrda8nmKNQdSc1MmifiPFfHE1a6g7AApSXr3tqU4rE2TqqqJeNwfBJhyrmtrmgKthtVbJxf5w3wMR",
  "key18": "RdGGy5gZA7KTtrH12tJ9EWdUuYePchqBQTEN7oQg1mjwVwNuQ4bchLxoBnZFytH8HKR3Mhkde8D9HyjiGmPJQ3z",
  "key19": "1MzkFXdjb2e6bWSH8Cmgg3CWWiqaoofUSkqtEwuwkCdCrnSdHUncWHtLkUipicrkBGqgGcLDMrGeAYXeoybq8UH",
  "key20": "3UDKykQZGeGbNz97CD123wwXryz6jT3h2PJxGzKAxy2FvPVpxKNxZPgWrvUp6sznxpfd9zkdDTojXEwLgdJBZ8bR",
  "key21": "3o39RCt2xn6excVnnFhq51U4iZxcKNfnifeiGDwBTvnAvbfV79zwg8ZCDUW4dVMw9AGhtH7JXAA72B8bs8uAiTpc",
  "key22": "2dDYhUqEAe6ttxzbs7Qa4bawJNugJ6Lh4HReDt7TVs8SsYDGsxhdLekHXTpe16GexjzdbdWgqQ94anvPM3G88H6W",
  "key23": "2hsiVbfWEG2hjHoTpwqovznsPNzwRcZh7qpvaJMxtk4EQcuKPkx3ZoUDur8vQ8RxPoBKynjZ3w3hxYeM5gBdCJmJ",
  "key24": "3c4xeN7jsvqyJq8bFyRSugk6NQiVTex4na9pSRaiAXaui91FUGbXcXgjb31sf6e4DrFuZs1FJh4Y9dVH34eG6anT",
  "key25": "3Cg2UbViNUbpPgvUz9gBvYAfCp5sefFFTMRrRTfx9KVSC9dtpDVrNtisJFtVxwC1Y2HdifvdnS7cqB1a4Bwwzr1E",
  "key26": "2GQ4nHszTRjomfnCFeX2u8GjUVvgBrkU5zATVaJoBmtMnSGSgeSKMTn1psTaUVF7otzkZDSFYBwYPURJRi4hshEd",
  "key27": "2Qjmg7mw355vdBKbSkGaXj3Jm6YGEQ8CcSMhH2WfiX1mT41Ut7PhG9aeHkhFYLoxJkTqE9XGx1oV2VzJ8xKw9Uv3",
  "key28": "57x56VmrQdzN7Eakb3efMF8Kjd5MmbxGHTnhh8LG4hwdeRgrY9sEHZhLfL4GqjfrwG41DbFuHjU8C2jzZepRXmAW",
  "key29": "BZfdZgnGf8kDmHo5tVZMgLsZZL9Su2RikennFkXrW4PCSuAthebm9jgN7GD7YJH5wCM9Be55eaDFKoHQf6ARvVZ",
  "key30": "2iSCDzMSeWsf51mDfmvB9QKgtCoNgG3e47DBWdWhxjxB7TN8FQ5EUSgdikvR9SzCwuvXEojethHspvtnknhhfDsf",
  "key31": "peXVZPtDKysir1Jfp6UhFmHbsx8mmZsCo2bAxAr2Afd23AETnTnZvCeV5HW7pkCpxyQU6HeguzvHZtTF32VhQNg",
  "key32": "3LFmHY3vwYFdWGGkhFDGcemiYayNsHKTBFPm4xaz43BjbukuYSUnsgMoqPwaNbW2zgUmqkWgsMjg6LvCPwzxh4dz",
  "key33": "41nNpWChEEr6BwxktHJbv7FfVVQQVZPtv51smw6e4Bhf3oEr5z6rg5HmK9jgBV7eWN6boYEwbMVbuBYoZUs84Msk",
  "key34": "3nvEGYVXcTGPuoLfdewrer7C9LgkAWQ2NFnRaTNkgpdDgnf2SLJUFWUBSqBNF2L5131Sq67Hcx7c2DbqjRtdr2cK",
  "key35": "pqmkQ9fDE7JWSfuZRWiPMDHkWpAjss3c4LXNs6Cu4V5Fv1Y5XYenVRAhHcfma8KFTKuMBaVKrJ2AnV2Hx11P9cZ",
  "key36": "assSycFybpeR2xbShzoqW8YHTtdpXxKEHpVu4JJxJ6utQyJhdkcJXqURkGq7GMx4p7x7it45TsnaE7AJVjHM7Ts",
  "key37": "3kSLqJ8bXS9cuzUTf85hQp3Jj9Qfs3uZCPCRSdiH17hU4Fv39Ui3h4DuBhe6DfUyfT6VEmdLDKCJxpvmbSHWJY1Y",
  "key38": "5vhBSZx6QpaswhY8YhxSBHLcGCoXA7WcceGmv7u45tQiekgTvbGQ394NARdoZ9gdTagc5ExgwtYfFuR2sxVPjpMS",
  "key39": "5MChQqAPxbGihhpPvxiRwXhux5SVeBE3rW6g3YuFwaweXdzX4JzwNh8f8zhvBWNJSBP3mTkJp7jLJdBqMZuzZ2Kf",
  "key40": "3B7krkyPd3EoGf1qB8otuJxnWW1AENeDQa538YnScRbLKmFf9NGvr3HoBmZrAFfLzw3KhxQew54gPV5no7XdUnEw",
  "key41": "2XhfnxS1SF9yWp2bcB4s1AotWQGksitK5DnU2T17e9V5sqPShQmNat1UKmXneEVrgz4u57NgfeGr1Ry5TsiNsfvm",
  "key42": "5m2xSqFRVQz2WN89r7VBJiEJ9CfEjLTSWoWeAG9QeKCw2e4hGmcqN4g9XSDjqbrRmv8WByrjmsXsaUJq24teLcfF",
  "key43": "3yKAY7zJNsNp7GicaJUKTmNnfnVi3JToX5C9KuLMxG1onZu9GLzNdKdgZMBPYYhLbxZZ4PJezzSmdMChnNvZB7KK",
  "key44": "4bg9YK5w77JmDUxhoQ43RJz8ijUmkCyP65vkBbbx2B5yqNRjH24yBx45zyB26xXFXLwYLS8oi76oQuhTy9dRBvy3",
  "key45": "5tWFAKAme7yzu25WqPPBGNmvCKH1iMnHtSAvEaZRgU9k48CoX8AeMttvHbGXnJMV4AyMjE66qSHkhvUCoA6UXmJ5",
  "key46": "66aHYLtfxUVDrcgPnQ4ffNnez6zYpV7gKWDrgiuCzo7FvBeecv3XfQnQqaY5Lku5LuZhasyckgEupnF9PRLouvvt",
  "key47": "4mQN6mGJkX3783jJrcMpWht6WUMDG56kvqa1FHufNtZSAkTZjjPkHRYmv1Kvu29ARtDiEJqffPjr85gqM6NXRy6b",
  "key48": "47HHHSLP3gR4cp6zsQe9oRhcMNa2BMh96jPQuFw4zw7CEeg7tT8dJmPQgaGEk1L27D83DnyaLGQa8JoqkVQy24M2"
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
