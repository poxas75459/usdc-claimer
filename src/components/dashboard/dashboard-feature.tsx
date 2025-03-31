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
    "2DsJPKAXPnnriH4bw9XqxYerj6fBVKYVH5PeLJbbJLbkvLG2pM2dDC1MuKZ6FPCxXe6ju4XexrU2DCSisTwdqMqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eUts5uDGxTds3ASEmWCX2FBgQc1m8cVuFH7of45aCcD1K82mCG5i182iEqzsiyWUXYqdtAJivisfKstdBVm5vHE",
  "key1": "5CqoiUYDMuh8z3DYwzSivWFMBJRQQo3x4oAZwKUChDQMxWGavfe9TsTA4Uk7WECRziRU5JyefirMDevdScDrByNH",
  "key2": "59VG6znkrtJf3gq3mDetWS185irAs2GySBFM24Kmw9yLVT3E4EdTro9HG8BvfXPgjZL6b3JTFrTPg7wFxtgv6cqp",
  "key3": "5672okBmeJfG652F8dQpgYergbSB1WBtGZMyidFi6MMCMbAwDK7GiK7gjA9cTiamvPPePXJe1ged2AYd9T3T5XMU",
  "key4": "2eLWcwSguMw4aPZ8xbiW58MArVR2WWbwcUwstLD2K8PxSpnQHhbdwd13Y2X3LSMgXwKbLTfsTsJVQvN38sB1R9Ue",
  "key5": "5by4LMMMUumnJ7WW4VxTDWuxmWCGmNr4kehctXSGBMfBpGZw3ymdpXbqo64yojVDX1ovzq2Ytj5z18jScKUmUHXv",
  "key6": "3kNg42q6A7jCWyJoz6UgdRgtYosdWGz3AhW8jwGejVES3RYukchcGqABzSYV5dnBQMNzYzWYnyGZmDYfcUb15c81",
  "key7": "36yHEqiPhGSqGoxZCzsZg33grSu934yNe8nSUZaLwu9etKoK7VXcaDXaJJmf1bCM5NcRk7wKKY1mtrFkFoCFjQ9Y",
  "key8": "3H6NWLm3dLRa1ntG2Rer953TBSxJfo2zzsCaz9ZShSZ23DJxprGTM64v1u3DuNADsPTUh8pd6etDG6NEXwNgepRc",
  "key9": "rzm1CWw6Wp5LSeiCBqZ11U3CBiLgQaCeQGf5pKoiQddQPsrcg4bcWY4AGSkigF9hBzCV7QVZFHV1HwtMFMKSS3m",
  "key10": "3oBxipXxaCPqQc9Ep284GEzwh64zUbyofr6AysV6Sfv2FqV5Yc743K5737BtMevUryxDkYCkR34jXuztAJ6EVspH",
  "key11": "4DJjebQqHVe19pRouxyfe6g4LjiQriP69teai3rhNiXZihxuJJv3DSaHYCPs8yVZejJCQmFDM8CJWjSj4nAnjquF",
  "key12": "4QLetFtepvFwJST5PTJ7s4sJV1Npjqms5K8HAcQ8pxQGUsxGWsSj5sEMKbPwTxrQzAQ2eYmKvNLdYtwwG41dm3aF",
  "key13": "2a93uUKdrGRjpVL5YLdd5kJksBH3Dkka4iLERLcGHTsy9mQkH8cENHmGSSve6xCoqcejdQXH8wWe3dpqXNXRYGxm",
  "key14": "3XaNexE4ZEEtjzeTBNZsVUUjzDwQHjfKFQTjPepnzSE5ro6CqFQBCSv2stFhTRbkXCDVanP6kSxYaXHzNZRJbJF9",
  "key15": "4cQuYYvKC9napPMaTnSND22JzjRUDeJBwUWReCkZsNWBfsc5YLFKo8UJ677Aci9YpNL4E7R3LUaBcFYZ6ZwUhcRb",
  "key16": "4bJ8JxF8o9q7SFWSovufy6Kbeydyw3wdx6sMwDsBSnABwR73d2Xrtd62iypvyaJCe9H3jK5SxikrZyyWWXHjzqB1",
  "key17": "3cQSKsRpXFCMdHrenEnwq3DPYb6NtqiS7GQoiTCYBhaukERfQbWpQGJMCEWpbR5hwjSw2SF2VVw3M4ZWcizmNb3m",
  "key18": "2QiuYqoCkjSKmZA9r32hfeGsVv2XzXbvykXDubmSgCg4dWJ27RDwP3Tpe2WQ9z741atsjWHr7ZhUaYsRGMrnuoc6",
  "key19": "2n6ix4MNvHX7MPcBSWGxv3pxzWHJKK9R6EYn4TUtiVVhoTFQaCqCXf1WgG9WegVT3JPgYdshSgg4iR7JZ5FnbAcA",
  "key20": "3uV5jcQaLrUMKhGPaY47hdPWJhR7ud3PHugRjejUroX8nJBYhzfTtZFiUZYR5McDpnED2A27wFcjEdF5mjFiPRts",
  "key21": "5sKgVp8eSFjzDt442QoJimzSMM2WbwRbZd6JyvzSD8krvqyHqsV4CG3VHmvZsT1jzA7jNRxoK3meo2vgPJaL14wx",
  "key22": "53oaJLDUgpGjoUQSrf5jdzb16yGSd4XrxwWwiNbCXK73XC6tKNyRkTVBTx64Hcm6AXGdLr7HRqENfggivzeSAgQN",
  "key23": "3vLRPVeN2eddHGtU9Nnpo5ZbcpoqC63ZAK58zhqyANt4M9LRAz38LLfximHtahvsBzPvNLm7MUzuzafmugmMD23a",
  "key24": "38sm9hDspiWzAWdy2F1eyGQF2vCtZJ7aJMhMtuH44BiNcJwEhYcBmNGQWtH3YMeqSotwah2vXCawYtrdb2CRX4gG",
  "key25": "Pe6jZiA64DJZHbLwLLg4jnjsKphYYVpUBkX3suQTu1doSZK5NdVDr5NAw7Qm83xmfcgrPDxuvx2BGCHUjM3jz19",
  "key26": "ta9suKsLSYMNG2XfQ651dyBX2kvVMDSm8yvX98v7nKQ1f9pJopdCjQaoZHmeoDWm4pqEnL3nCyC8p2xuC3DoT6C",
  "key27": "3BSahGq96cqob8cMqUgxRZayYH17stjHdwXpJsTgHdc9rX3AsgViofWL6RBcmuYPe7mVc7bbZ1wxJQ3SGNaew2UJ",
  "key28": "jHQHUt7m77smfoUQ5NABvAqszWPHo8WP3WYC7yuyHf1Vt7nYmhoyES3XoM2S17FcwBoxuDPGVJU8qUGPBhQQjt6",
  "key29": "2iFQhhWvQ6qA853wGWsidtZtr7iyVZeTKxU9AWbpnEJzFrNAQXoKyWvxEQoe9FRtMnRFJADed7GZt8AiRaKf4XD9",
  "key30": "63SkhTrWZZFHmixLEz46xn9SgtipjSfMy8b8s7NuAJrCfM7sfF5krCFbfvpeLfAkXcKTdVxHodxGdv5g45ybPzNP",
  "key31": "3TtmKxzqoSs7p8Zs8GQSifo1aNAVhbRnsEmHZ1XCP5aLY6LnjwX1dyGDCRKHPwUL4Ru8u4hZrGSunFtgv2rmNKpc",
  "key32": "3DEDVBb9onM1zVdGcaDgEmRezi1k5ihcrKRwiW5Kwpmn2JjM5i7AqpBXc9RQFasdfr8Lt2PfaKMRhD4Ln7CS3VRg",
  "key33": "3QdX8V1xMNRNgWFvriruF7D2TzvB39DukeBEysVo49GGY8KM5eqvekjPxzSTaXWCg13Bi2iCR89iXQGu2AzBmPRZ",
  "key34": "5ABTZPe4z76YoWzhr5WrN9vqBVN9UCLHnGjTe6RLeafgUCoixzYUYEXuMwTEQWJ3y2wCzGCFnCJsuxQnWeYkRyfZ",
  "key35": "v9ucNiD8RQz6qDrfqRaTSkD7wTYRF6EqHFd9Au16hVw79z3rS8P4t6PnXKrBrnmTuswbLsSJhn5GpkxGu5ausnS",
  "key36": "2FcFKPkf1zJBYAYofq2KbpmWaYPPwbwu9v4TrZTnJKYFhefBvuKd1RbMY6VVJC6whgSb2J6jcxsSghLDiVsnWctH",
  "key37": "iTTsPYCbwxwBw77aBt252nWFZv6A926DBuxWKVUqxjEMSmjWUNpFdHaXD2a9CMMKGExz6LBCMvrgzq8WGSXdDpP",
  "key38": "2QZWMNjnpbfKFwJDhhad3XLWC42C2wNXoVMF3vs9cS8eqvkY7gxqem5rXHMJqCurC6zhfDt9FdjxEco4hfGLX8R4",
  "key39": "3r5TD4Rv4DToSHp7h3UTmKLYBexNuHitW1FVxrrb2nA22jrocRvQDbFQwXn79WfTg1epgvdqGYSDtNP5QjBoj5Uu",
  "key40": "5KignBLRNN57aKa6k7pRHMKZZaNAvXNmNqz89hUAvPGAjCrVf54JdQBcTxh2rjgF81Ld6GeFW1wLS4WHZDyydoaJ",
  "key41": "3NzaPHetDEuYDvxodMCVofGadkMGw1jP5Sej6k19mFEst24MefQ6pBQdTZY6ALHB7dP5SDLyHuJchpkAGvLCf95i",
  "key42": "3cEDztoCbGDaxmLU9C93PTtAWaxkVfhLxUckh7iofdbXwdSwwJxxeXjQ8PhNnsyTe6NM8XyDoKpox1PTuEgmeAHU",
  "key43": "3mmVD1b6SrN8MXsABzaYf38AgYQzQEoAdVvv4G5yvqx3ufc8b4fJKDbXKoWkniwyudhRWJtRFLhaBQnXEL2LTyqZ",
  "key44": "2m4ZZZgWexYQuh9F1kU3Jt1sL3MK9UWxsyQKry8CdAcE6swnhzFCK82GWBo21LVVuVAW1ottD8LriMATvNn5BTJ1",
  "key45": "4GEzK9fLABbJ3xwHcznKA8riNCdCzg41BuijuzsCgNneRr5Tq39v6q7sSZEaseaPY8zqmV3hguGwMQ3vrCxvJKf9",
  "key46": "9tdADaHUNqi9nX5damS3xXxWfhBnYPZG3rHyES6j7Ew2Mvt7KBtQA5KKphqzyLBf6iV4TiNGg18TfmDfXWBYFjS",
  "key47": "39nfWBVViuXx1oLTGumTuhD2DFmmoNRYchkaoQ4WW3dr3ETsPaiojodTPuqGa4GT1JEjLr4aWNocSUNZQ5DRSGZG",
  "key48": "48YwfjZM3xEuTAySt2AznwAnsNYNPQdTN8igDJnKNBKp4LuD7nM7dT9s7PUXX9u6ES6FpyNdzvQPzxxADpoibK5y"
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
