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
    "2RaimHZWLgo15jMetyuVnnVYiKBKU8cwMHLvnDeM5n1fNpZYYPRNCfkqPSrt2jXVCtT3W1Ns4hi4AGDCmGYtS7vy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37THdrBtRDf37NwCjqWUQWDXvC8a7rsaCkCKnGZ266nBAgeQy1nYssKuWZmGr8z1PZ9trRZBW9eseXRgyNzj3QNJ",
  "key1": "3P36SkF5rjfEBgjCpqeMz94ukwbAwWtQPDuM16WXTNoiNCVRvXKgYkMQeqEp1bZ7sofULhZYP3MaPnb9yiwdBNH2",
  "key2": "4oPzz5oTPmkvRvwNAsLRt4oMcoEhrZZsT3M1fK11xViSu3fLGAWr4xGyE7XBRQ41RuLqonYpBTnWE1VkYuNqKczK",
  "key3": "3eMxpQs33MXwMQ33WtgahaMbYk1URgvJFUGvifJ7pwAnfHGQQp8UibhkKBV2K1Cn7Xfza4nnvkwXyPYicrdNEvfo",
  "key4": "5mMKCNeBZbkjLomSuRy7Dz6b9TTqwmEJDN6MicmxPh1hTRseq3K3YGyyEFYwnh2oRD98y9wCKavXdLBEum7hqAC3",
  "key5": "YuaY9MM43bf2VZxS4Z1oxbmY7Q2Q3pJ8RCuBNP9Cii2TKPgBj7RoSupZ9yy5yZeBB57W5CK3Xxa5feRmw3Umiop",
  "key6": "43PG4Se9dsXy9yKuxmbbcskuYAkfE31G4uY6VzVo3QEcfYCScSGrakCgaWQXytcxveJ2pkQXyVimvJfK34KnzzD7",
  "key7": "3yUzLHxmCGpyJskZLbPgbuM4zZL67HA2C91hHTthmc3mB3dhZ63Ln4AkLVMaMAnk67iyDYvaqDticDffzF7Zueq8",
  "key8": "2hWk1eGvff9XDVUPDfHr7oSm2sdZjLJTRQm2REJNrX7DSQbrtMWHH5p8sPmPd575oq4s8md53A5BDZEbkJcJ3qma",
  "key9": "5GWjfnXMU7BreTYXkiUwfraEjGMjVP1t3d5SvdpoAiqjcxM3Ci7iM3ji4a5wBo4Wg561pueVdwtqfpjJ3MoXGzPo",
  "key10": "4xxL6iqzs3tUWEtkz2Zt8wVLk2wFcANZEUgL8BMs8RCE4QPuwpvdKyMNDgjkwJoZS52YdmxWrYREcEuPt4Qc2qWy",
  "key11": "a1yrvTC4TCNa8pm42dZ6brnVicLvu9UPye9gsaJRYj3aH7XvjzsNyWUV3FXkdjFMUWBWMZ7ZVyLaZGke9UJ5Xtf",
  "key12": "4AxQvU9ZMQCgWD1fy834nWHFr7Eyd7sF82wJUCFnm5Ww5ZhABUDm4rcjTmmcXTVXVwr6tshHWqaMvLGvkjGFDr5m",
  "key13": "FJLMvm2jD8up8Nu4xgRU64VE7nHHMckRWVnnoP9pD8qaASDZkkk3iQSG4oq8NNj6BBc5Mh1r7bWWPbBsDzUL5nf",
  "key14": "4qqveSp2gbb7VzuAq1oQvZJCJrGz5tfckaGdeDqXQtuLQQgF4VGa9D6HYLWq17r5JCA4ExnF2Ggr4Z8bWduyHv2V",
  "key15": "3Hq3rJzvAyXUQoQiProfjZHTP1DKcby9STX1YSSr4CZs6UMvN6po4U3a7B2pfh5SS6FhtYQkP6ws8aHiVVYTDb8S",
  "key16": "4jD9XvVDX2VFLm5vSYnkmrnqY9DWz27LqtfMHAH8atgrd5eSnMQ651ykd3BqpvstSQhxa926jW8imZRLxJ7h8YRu",
  "key17": "599SDQQwAPgPEeVLE32ngdWZnQkZR8hMugLU5H6Qyrjb5HvZYkW1Zo1dynJBDckam7D6GdpJf7jmvQ3yWxG9Yv49",
  "key18": "5AX7Qdnd6HRBjhSopdCLifkNCx7STsKLfaynBiECkruhdgPGqpnSqgYo8XkAV8EvFZbS6eGtHddFT71egk87BTMt",
  "key19": "3ZJvhxD1dkESuyUNuvYXgSvonAwQHY9E8cJCstAyAxhHjWRTPSJ1bAHa15GWdGBSCR182ufkjTn6bPh7Drcb5Z9e",
  "key20": "D8URKe3pZNfXYYa8zj6aVzdRTRBnDMBeHx8fdKThZqAFR5AwP5Xym7FzA45WE1psDibJdctBaau47tyvfzvyPFP",
  "key21": "wQWFMMCY4XR8AWQSRbxWncVwHvUrGFuXhJYeiwb6VBub1cz3uEyTtRZe6wHHMK4QKTqpbvQmE2CSiecqRB5a4Hx",
  "key22": "623VBaf4FEKGuz6TMKhqvUG7Dfn7DADL6gywwcBfQnHJfQyWexbXPmcFTCsVcdbp2EhEw2orYMsy7nUEY2jSRhjV",
  "key23": "5usx3FGngRVkWTM8nyNJ4Pv7C2FvLUeeipdr5Aarg4V4nCJcdmNrTz9dguVizJwHtHUaAvbeQiu3KYxvKrVjRBgm",
  "key24": "w2XzbJ6sL8GjpntnvjsY5nXfkkDt1oNHnKAboG8nQbkTjiXXr6bmpa4VJh6hfZuk21r9zyyczSMPLqXUqxquVwh",
  "key25": "4Kz1H8bF9V87YGTGAVhkZE8hEnJ4opA7wGJwU8UKJuPDBN2GVjqLLvhUWPr3aCMpy21Z5MawqNtZaPeRMAvx6a2f",
  "key26": "23GSvV3wvGY4dar9Wp3CvhuVCwvygbc2Rwiz3eH7HgRnEJiZkdZU4tK5ppokF2Kj8WbpXSHRE9RX5a2eYNVemWs3",
  "key27": "51J76i45fn7Z2vCd934cXc3Qz74sMxc6y9YPuWnauVRjQdNA91cvQvAzZHUW7jNWuUYfV3xXchma12YzxSDPwddJ",
  "key28": "4HfpLYJUbjMsHYfqW3xrKQAKGy9qEtUVKFSR8RQoHZBBunzHJ35VHRP4XgsRmvdq3eoLpDMsnjcRZLEqTGh89mR4",
  "key29": "5A7K61Pm5vX3ES5KhU2TCWAH7zDm29pd8v6kGnxJbaSM9FU9nLKSS6naGEr8d1gUEBvVp1TkWL1AnHRZJW83KFiM",
  "key30": "5K9UoE9xckcumve3t6UW1NSKyJSZ6MW1xApjB1VwPKHcqYX5bojBoSZ5sKQWd8aLQy2fce6m7Cv6eRTayL9NrhJj",
  "key31": "4rBYUCEt5n15jxceUtmbSCG54BGPGJDNsNxnZtuUasAFaB65LSZq3yYs8RXCJDD1nrdzyEaAeEFURkWSenRpSP5U",
  "key32": "57zS3AuXqoZZSSc3DcAuybebtKW5Yaf29hzUdQ64umSKcJmojCu1bG9Nh7h382ouVaHVv3foo3A1HCwLErbRRWZz",
  "key33": "4Yyqgfdvks9ZtbhrGNaitRXn2hmEsHkG4NtpJY4Qmx4uSB3mhuGMtwGmspfiTZo8879sPpBpytCRUQ5wyMg85YNv",
  "key34": "QSQwmHVRVbifBAuDWZkE31FKPcjbWwUesH2ZopX4NqNbG1SExXFosSVsntixHEe2D6HokVxv87pNEfrncZMAUpF",
  "key35": "3B9ubDtn5K5DUMJSJjDXnr6GsyWyc9QqSJgBFUyJsHfiYuHNddkaf2fJfmsUfg5denustRBSH8iF8xBgGp7YekYF",
  "key36": "5Vp2ei4DfPL5GwQj88RYYmeVF9HyWNxW6ZnaMN7MKDCi8fNjmsNJaMBoyrjCwaq2urRtyBF47TnvMaqX8EUxPLab",
  "key37": "4dvhHWtq4pVH5hHPMjdmDR7d9BgFMTSeYpZRg5ZfiaRM1ceHbvFcK6JA5wShURRWpKPHB6dZQt9kAAiV6pUGa9Ua",
  "key38": "pkrxx6HGRWLKR31uadLTNRoboBsPWexK7jhg9yx2tmAmjLmQ9MVUmRepoe379NXqxoQzovahQfqZetXD5pSkKum",
  "key39": "3v3CV9uxd7LGp1qmbn8q8uAWWePJdGnvLtuFi3RAmsSuDXpMn6c2vD6G7DE6h25p3bgoHgPEL6dAoaQNspR7wNsE",
  "key40": "5JDcCJAs24Rnr6oAHYdnNGSdDW84kCc6CQY2WDEboq1fmueWwJDPMGkQFDydwSfGzYfUPyEc8piR8NE6XuV94nTv",
  "key41": "TNuD1SyNaxfQuuZ4y36PGrK2wqr446pLgmijJmB4pG2cDrAWQu6czymxejD7SPRYSK79RjwWk28CV1HtvuBh2MW",
  "key42": "5yJVJS26CWHk61Kgw72eNAqLgTfhvboojNezBBEvcDJ2zs5zmb4UTzNVUw1x9988UmMK4iBNfpWiH7t3w7RnmSMD",
  "key43": "5bDrkAPRLTwRrGKB7cPPUQpJ5gaqJch4yuSDTqTydJy9dhWj6crRST24ezLubB9z7ZvJ7kkJm1mm2g73rPr4D81o",
  "key44": "3BDugwuWvVaBedEUidUq95JZHGiX6hsAbkqiwj9JMkhrSTAfMEhU4QUJ4tat1xL5jT8pjy7MsE9dqBDhARL28WVw",
  "key45": "1siAMNMuCp5jnni5syM2oHw7qGVVd5BBwThAV8UEasVzYZcRWd6YZ2kjBiVyzoMUa1fCwQK7dfst8D7ZvEN16kY",
  "key46": "5cmh6orUezkyq8znm79kT2UCuzTuQ95xw43fDMHZVyAGfsYuymUTgtZ8UU8K7sbUe7TqyzQ5yQvHee6WmKgZ5Exd",
  "key47": "2LfbsKtnhbVZpbvh6JNAMMe7wJVStyMNMDLVAdt8AjLEY4ZNNzH3WbHAsLVJvF73yUchesJVJZcFK64zUjpMkcJv",
  "key48": "nXdUGvJLAmSxDmnj5tcrF3nMKB4bjeMA5joBEZiLmCerHb7E6Yp85vnZEvtzhn1jHEhcMQrNiNXVesoFCBBWdUp"
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
