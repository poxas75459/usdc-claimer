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
    "45tLXxe38Kmk4wrkFnQUx9sTUbtPxGinKPyLHCp4DkJVZBfSg7uSPLaiUBNpqGnGcMJPhXh4JpA6aZ2ArQqxdDT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q8owmMzSvKhVMzf7pyBePkyn3WXdP1BfEZX2yvwgzS35NXnKNBXegkJSC4F9ffNSNeBAjWZZsKXgmdynvmiLDqx",
  "key1": "23yL5Vx84YRyxAVxF6yhyDP9vtNjWyMey2GnTbRoDeE9a4SiR88oYLKnyLLZ7voNY3HjMTRhtYXHYn6Lg86kcFiU",
  "key2": "VtRWmHn5TqgPQeXiNSGpubDwfjARRUsnnEtwG8hSfemEPSq7bVFrgjS4TA3LvNNPfYpdeaU3jwJ5NYNMSLhWwRD",
  "key3": "31fR2ieCt7tRpFiahEqfteqpq7zsJmesvfdS84EYrGSPi8gaRQp1Q16En2c8ZpA16pKzgUrv4HUodu8BUymxn4Hz",
  "key4": "3rfoHZazxZRnuChng2MFipcPMni4cHR3v24DLdt1Pw294ZrioTeQcdnNaoG983uqUN5opUU9mWfGBCZmqamvF7yq",
  "key5": "5yfRnWeRpsG32eCHwdZZnVBMCGeFn3sZtBmsY28vf8RiLhLoSrwbacTEx4Pk4BUCdbuoNRCfmEj9EgDKxpcYieFk",
  "key6": "3oGcJ5VLTSABArhhZLFUrsfLfCG5N8FEPtzjtBjUQidN4vJHPkND2UBUE8RiFBNkd175dEbSa9sFb1DzStBLonFe",
  "key7": "33evxZLqjohYSkmoRdE7UatTcVZprnXcRPhxUWZwgRHQpwSFf1XroQxiSgxuicrV9LPrBZRwJtjYLT14EBpS9dgJ",
  "key8": "5e5r3o88JVdEg29UqwhnkpVyh1KxokDT9hreVHugb1KWn1VnwWXFd9NxpCUX27ooJpwrytpXvBbwxktQjPy1STc6",
  "key9": "2PqzqzaitZjk3zBKUHMhRG5GcYCtmyPh8fvyBMuzWrWDjp35Rf9FArcSsKkWpaKxaEqFd2VaBa7Xw7UpoWwinLbG",
  "key10": "GB4bxa3NishnoWVwcRaTLGrsMvzmYA7Nok36wGkDXttjyxAuovD6UGbGKHKRKbceuKGqaJrdcYADHBQfVynd5Mg",
  "key11": "9X5YY5YHZUag61DYqv3ycX4K62McGBKP3MkmZm8JAaqE77mTRqXoQ1z8yMPz1hg9gdbEJhJYRMSBjMgjmEd2e41",
  "key12": "5Xf6Z1536yUt9e49p9N8SrETb38kEg52Jr8Vo6ikXw5yWoUCdZkfQfLwgVyoQZs6kyA2zkoZx93WhsvxLFT6ikNC",
  "key13": "4gELMBSun95Ya7JzKkychoVPZ2dpkHoDYvV6HMoNTRAAWLGn2YGB1TyzZro1TM2AYzdHtMzwDpwYaRs52azYwPkK",
  "key14": "3GKG88Ef4d1S4ss6QFz94MHAvAwht4SmbgBhrEfeG8UL7nVHC5Bx4XtunQ7UZNenbYkCF1k44KNBFsWhLhucWdZV",
  "key15": "2kdLoY9vMLSpzuADTgVwmFyf5GaKscTYEe316yTj7r3xCNne5geoWbGHdJcLh851ep2qCVSC4GM41GHV4H8SeBRZ",
  "key16": "saR4Y9C2c49MiBbUWBH3Hp15ioJsJBGoeHUPnQkf2SiYz39tKafZFom9ed2pBfRiGpuRrmvvARCccNAwpG6qhoP",
  "key17": "2ERLSXhN7orUQgK9pRwBsGKqyff9Q9JkVQPYxoDL2AAzkdKS8SqJAdFkmT6812mK1rNCBrX99FLLzBv6tVEbkhvV",
  "key18": "3SrLnnPRZKxuc8rrWubyfKRDQurYTruz1LvJZPhkzzx2oyttFwZ7dc8JbCy22Hk5Cpnm9iEf8uDZfFGwruGdwGmr",
  "key19": "3LWZb5G2babsjRu47KQUeHVxQtFTGVqinyRVqVxxhzkUoFZH557Sh25oqQN4EC8j812WCN1WBXvUJEcBETgNQ1pq",
  "key20": "RNwxMc9kkMFZVr2aBLcbrdLKc1nwyWHxPYBqbBPvscX37XFwrYiBWs9rMNppNE5KeFJHcCKFDiUmBzRuf9D1oRc",
  "key21": "1S4G2vzuxwuHxHEcYYB28gA8kE1Md1cnWbygor9SfMdznS1PQ69f5DirAcq9yy2bCPjoQbpaku8iv9zWiUmSXFk",
  "key22": "2UfmKHU9LZsBD4kJxhymxpKZPJ15H8qV1aGQi5d93fxgTaPFhH2KAxDBFDnCbVdSVXnSTh4P38kmUcjWstVmPWGZ",
  "key23": "4gwhDF3DPYSBwHd2s1SndufpC2hGpP2zZSdj9v58StX9aMdv46eYtuzEAgcYmGX9ePSSUNHrz3JedXhfBpknLXfm",
  "key24": "4AqThGZEJmBwex3WszV3tDKCQaWCqEo1K7RymW2J99S42pk5VyCGrKDP5vutzHtq3i6zakuVcGGp56f8wQSPxPnb",
  "key25": "xLVpLS2cWRHSiPQMBMQsi1xxsWZVB5a1nEuMzBGvD2mXTQcpeKdNCRSRf4vrYHg8tPz57M4McvF7FotYYrnxUpg",
  "key26": "UoSNbdvphuTzoqbnVK1XhQaKCFXFgSdmQw67E4ioVweRm2gLcH8J6xZcQ9RAnABY7TxWCPSQohmwjTshKom7MQS",
  "key27": "4fcNJXMARmfz4P2SWM64FgZUaSYZxpkmkJT7mmAc8WFSVDP72dGuP7Cm69EcLKe2rm6NX5SzzW5xrvYbrCRoeJsW",
  "key28": "3apN32HcRjNiqyKnnLX3S8vdpp4foFun2URVN83yKCYmUFMEPidnRhjPsh22CuNCm2hFmQmNRxYwnftJWBc1AaPD",
  "key29": "W6qQcSQceoURrExjBzHFFtvdmggj7Wir3FRqErEd91Wy2jPeTs6agdgjG6jtKcshmH7jsJ6jk9Cmz9c57zatN4v",
  "key30": "5qQv3pWkvhhErpn9FuiZB2Xfx1k5t64xMp6gi7WKNdBxNbzsTefH2gkgo7KuRELWkR4HY9TjQnqAGQybadkN7kQi",
  "key31": "32HTPED63JpQxXfuA9c4AQNh7x9uYdX5VZwkLAuyfSkxcVN4qaCAAdkYpREPEqP65c7GnjnJZtHq85146ukEUMnT",
  "key32": "seWbhU6VFS9H5gpit1FN3656vdQ8n3kXieipLJMuxbNhznpA57CZTQ6SqHAKFUyb3JtZZ5Crh3tB8VH5CrZz763",
  "key33": "5begfttJbtHb2UfWVuv1fwVn5sEU8fRR954bW25XtLCxeeD3YwAcmZHDwomFya2PJNd8yw37rpTfqhfzAHSKyHSi",
  "key34": "3NLphAJMxnqGEND9JSn5eE2WUazGq8bM2b5LBqAJKgSm3fLpyDN4JGkXVpDR5uEWi58r1DzbsFGZAdETmanThSwn",
  "key35": "4MgrDrTpJQuH76KGDCWz67QhdC3AVeZY38TPYqej7jf5umpTBn4Zw8yeRtfEj5Cmvdyk8ba9KCS6pWnsdiD78RtP",
  "key36": "MRJczAZYq3o5ZLxkMfN9fVNJ9EswW1qeiTehGPgBQ4BbcD3w3KhTQeFKRLovQ8rAF669JwZugF2QxoFxPp8wV8A"
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
