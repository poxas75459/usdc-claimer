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
    "4DhP2TE5gCiqRsRinj1JE2TnaQ2cuStrh3C8ugXCdgunppSWoxCFcBpWD5DsmnwQNDL5dmwbqJMo3fZ5KSejZUkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QiiHRVtzj4EJ346LvTAH7ebWTSsEn4CLdYFynozygxD5DvCHbv92stcrapyBpasnuQCnYJ86zMhPjCrLMcaNNUp",
  "key1": "2fDUa5yM2y2QzcpMJsaqG5N7m7KvEp6R5kmFHx6shewMUbtGMZujFPDmWEME6vtbuRFxa3JWqibir7FWQYZMi1wV",
  "key2": "3YRZAmMjA8ovRn7knoYMbV1htk9mQ37XSHA64DkbDJPpRM3DAhjSPqrqehWBVoVWiK3FHsthH7DR68vzw72VJVeZ",
  "key3": "3sZ4KoJt59Y5WrWPLQ1twX9ErgF6FvUetVQTirEyEjhwY1SWqp78cdiogbvdxJHsHTE879S4SLwi2GR7KuQCZagk",
  "key4": "YJSb1cEs1PDG7sgduj2beDr74Uzzw49RuqSKpGokRMU5LmA7oRFP9iMVKbnfX4jEM1oDjC3Rt2RSEMYTCQeqWsY",
  "key5": "5nrBs4nDHyhbYtUQeCJTeCZEABbc8sK4WpZrFkBAtB4TXEZHxZxiTArHApaVYd3pW3KErZU2K9HMEB7tbK6hVXKE",
  "key6": "F35m3BYmqJ83TPyQ88b7nYUE3GFuThACueLi1VDqm4Rs5LfXFS7RA4Kf54GajLLGjpQ1NLVEjknGdw3FsmQL2TQ",
  "key7": "Ruh3Lm87E7ucwt6639K9G4WUm8bepP6fYrDYk2nwtLMx7TSMvsx3g7CJBDqc39FuaUfj9tHb3tAxWbgCWoRxgCS",
  "key8": "5pgcr61d48dfABgXsjm9e7WPqPfjGeLydyJbH4gAGbBE5jY22KpTN5mHxrPd6w87SqmgFE3nEe5sA7rQqejZ47S5",
  "key9": "4gZMuZc6eoU9cDT4pXBEHhzcgeQT9igMxQ2K2PFWA2EyzviM2hc8LdidRq4g1oeUQc5YtnmjqGZZ4WNPAWwZfoMo",
  "key10": "3JyQiP6gjCh9THQu1354JYPG371GsGxkqfRuRGCxEmnPPE5Wa2CYxAEzVmPHZCGUCoNWH93JTjJ8pNwXz4xKiRhp",
  "key11": "436fhs5pkbu76v8DLQVdMBiFbozj617h3udiJPvEHXxFfUxKkYoFHhQ5CzahnHDoQiyJQGgkR12va3EsMBHcxpZ9",
  "key12": "5ukiD4sPjSZMex6cu2BrK56wo4hCmsyWdW2fZBa6HB145iLzvHjxc63tNXPY5LqwW1DXoaE422KiveXjYFjmuRuk",
  "key13": "4BKTjkeKsFcKFjNGyiJNCKQCRartTaZoKbBeNaSAFY2syNPB26CW9UMTsXnWF5coGd8GE7baGfELWyuQpRhBaoqb",
  "key14": "1gXiucsGxDxaTQndzEessZNt7sc4bcsypSuiVqNUgtcE3EKHBbzdfNX4JRtXWiXXUn4M6w1USLskZ6MJ2dcm5Dy",
  "key15": "EeXjfSbX6G6NsrnmUg4VWZaN5bfu2MNwvmRNwCYs48buZ2Zc5nL4AM2FizjANG7ARbxYk7BK7RACUL7RjY6dVp2",
  "key16": "22sQ4zqRZUiS7G7att3kwhM1a38nAJsixmbPEqDmZzWY7MXjurxaMAq6ZFSf5g6VGwkeZBC7kGcB3woC7ZwmcAz8",
  "key17": "4iPoGH8ohALrGgvFLA4Ss7VDM7fT5AA3guowjS1nN1UBp5s54rG6mtLuChwp2b8p31VopEjCPpHL5GNrqeNZ1d25",
  "key18": "4DENkktAGaS4FwHsDQ9gmqoXTSnvuesgDX3zDsCrz4qM9jLxRYnjDEFkNaMxRXuq3hm3fJbhwV5zA8HZFR1sfoAG",
  "key19": "5Ek6st2tyfKLtunFP3x3hqmk15Tx5W3UzijVgqEjnhaAKRaBW5TQumiR6F5KYaFohFbuiKSpxAz533tDUTPEY9h1",
  "key20": "3djj1ckKME8w5DquGjaxjgjPp61S1tzZqGptMavxQvBEQD3nuYGRirP1WSFpd5QGMku1ihKVJ2CSx8386vBVk4hV",
  "key21": "4zf3BJi5yZheYaRbUiKbEgE13o1BPAPL4r7igTfW7E7vVEE4hCnrvrHNvCxKh1H51sX2vD77ZJ1buhKD8PHZgSSD",
  "key22": "2GGPyyWrGBfT8pULsURjnFaNpC4dR1TGnPCz2af2SQqCcNzjNf7rDkoj2e6SVWW7kCuKKvQDMGs43EyJtwLtvzgK",
  "key23": "5UUZgHEJhE7X4KVUMe3xUxBHFGLQSbMwSNwba3C3VWp3qDXEVJ97wLrVp1rPTi7DYSL7aNQAtTKtN3m8hhbh7NHU",
  "key24": "4zKBKzzDanx7N9XwL2PUVmaakiZCEVnEnuKV6YahTuRa3Rg989XZKHRfAyeazvtGj5L8pywK9jqMf2e1bF54nZ1b",
  "key25": "5VRTYjtF3JFx6ojQt94CfEo6mZqcEd84ezmRB6nDgbkLHLtKvgTyqKPn68fD9jB2BNvwE1xu32WVTDoCHYWD7CdS",
  "key26": "4BCfHcebW78ACR165T4NbW4tXCmUcZiBBjjcSH8U7QipdwaSjRwgiBLYp81eg33mPNMJDZCHfVfduAgH8Pid7QWX",
  "key27": "3ZmBT3zNwA4xDdqMAuv7ujeg2uJQoMQqvxNN2jpYmoQMVkVhSuZHkmy9Ynp6HRJaw7XB4upcP7rHTb5hRfGVXCzE",
  "key28": "5i8Pd5g5ZSGmTKMmqwfcC9rsyRrqpZin5BME6YGSjCP1pTAZexFw4NbCJNtgyxsAYpfTena8zc9DgyAAH6xhHVfZ",
  "key29": "s9vepe5VspiEsN8qWJUkYUnponu6RapwuoZp1SwbtpGNMX5vKmkHCaT32xVkeGEL6yKqahSw2478GxHFup8BsYY",
  "key30": "3NE28HG2B1wJXvMWF2PEdRwKspPCmX9dVqokxdViE2tiAw7zSeR9Nju7nair9rArJTjxd4pLETCAcivnC3ppaCuQ",
  "key31": "3idEtgZ6WNeY8wSJqCqF2ujJ41QLrtuCXSbogz9rnWiso8juxJPqWReRN3JoDKjg2PWbit3EWid1gPSJpmJBtAh6",
  "key32": "41X8xSY4AHRGZJEX4skwaVxjm5iS5xpcLD7sNjBzSx5UkiyouBCHA6tty6mmc8vaayyScqGKMAq23MLTBYwGDRU",
  "key33": "2BnoMzVhThx5R5fdae73Ff48BqRRWqAxGSpmPb36oSj4ST5UtTwovLrpmfPTkfoAnmrdVkeS142zkVFVhdfJpu9S",
  "key34": "3iaBkKAiyWFedMYq4bMX2ozNAsKifeAQpR9DhaLcZQiLRvog92MzEDT7AEuV1PWc7rXw1ev8NZPWPNyVmSjZj1ch",
  "key35": "4SGJ6VK1PKkVn4BeL2AM8WTuCQC5cQ3pQUbo1knc8WvxCCKXkCBFZJ44RYARyuqCTyGe2EBbHhR4sYjSeiMXLdhh",
  "key36": "5MeB3bKPJxV8Ace8tKvqhwB8ig8yTEXtLvivyDPedHSw662MsrBW2HkkaU3ifXJVPfL8KhgLbsrz3aq8WdgPiP8j",
  "key37": "3MpprWe2HX6Js2hAtPvHakgumdDBNRoxJhi2kizDRMkD3Vbp4p83Rf9gVrYVeuKgwBNaCjULGEZPTFPTv3fjMt1z",
  "key38": "3K7HsXr1UP3Pnh6q7M2X7Hh6hXckPRXfE9tqu7HVZzajonrCgHjrRnc9mzvp7mkgz1nnUdPCTQB6GsfbQEmugLKB",
  "key39": "5SpUjFaA3vbR3cRy98vYM43LsMo8wnQA9PtNYnfrBFCZnFoAvSoHsgMZueCcNvUwi4JbvzCZkKS8R8XipUpx6QrW",
  "key40": "2ZJc8qQx5GnGDNcNqs9H67SartNEbNezLbpxyXR8j19VKvHKQ9wbHfoZ33MS62exhRut9mzi5n2ytkq41DbipJsM",
  "key41": "K9KyNafpZ8f3X64VCK4sjcKFtjQBJppRkuCMPjUotbf4gb5gwpxtVjp2zrxHNP9xnKnT8MRK3CEVN5WLTt2fziw",
  "key42": "2D6ZL2GjLMA8kvfZsUyALUhpzJsjYdwSMGt7MY64kGm31aL3hE7nrJeZtGrp8maJ3JyubykpGviwZQMc4d4PUKhk",
  "key43": "3Hgd6KiwM97Nm2RbhzBvNsr7ReWFHXC9mwftBmERvJAxG1931dx4dNn9KC7SFZezhZwyiEFmLWC6W9c5PuHnPg1b",
  "key44": "2aatiAH2ybig3jpwK3yu4FtGdxQhTw3gA4We19A1x545BSNHcFnShicn7pLNjLqwnui8eoMCuYkGfRoXxVh71jxc"
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
