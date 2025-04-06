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
    "2tTPwKxgCUAGndmxZ7g1NxBrqWa7wdC4HKvAvfa4L8kAHVbzq1wf3ZWm4tzipJBzU1MeZstGRaUiLE2wGwohB9K3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sgy8fRGyg4Wb6REUqSMR1HamQxY1yCocGhG5oUnkKn3dqvyCeSJy9YdqXjmqRTFgfsoVNK9MUY8y1EgnZxVccHd",
  "key1": "4xdVeytC4EoGswDzQjZ9UaBqwgA3xfkhyY9vi6V7s28euJQ1zjGvy5LYgUWdZEEUZZF6NFpt5vU8JzCcxEcVbstR",
  "key2": "2zvDC3pUZz2gcfiQ542XgSJo8qFD6fQZCKtrYaRkdphNUxjZ9zf7TzxZzbpS9AGuLn3YfTmEVs1GrK9VGbMFnwSj",
  "key3": "4Wm8j3S6HEF1BipP83gzy7SAk8WQGU4KjqX3bAuTPDeFoharT1KBDix1isKeTXeg2sPzEHdJXys2irJAF4Qk8Lhy",
  "key4": "uJHXH3yFm8uwD2coG81GJNwa9T7yA2sn89c99b3N8ovwkStCaQchz4WUBvaqUgpqFbtmFL4mc3g5r1cdesM3bwo",
  "key5": "5AYGkJw8YmKrFBVeZoqSeFvb7kv4WxF8Tc8ZzzF5tY1w9ZjFXsDHZE8LLgqzctqy2VPFAvU8Qde15WiaURCG8Noa",
  "key6": "dtFRxtqmf3gSTwVzNcKonJer8XMD6BYzqB9mKMGQqFhK5mciKzZ3JxVxH5YoJvVr8CpYpR8KSwtPfrJP2jZYvDB",
  "key7": "2B6YpnVZoiD2KEUtadfJYQf8wFR6EmincaJMqRLQXm94n361A78E7tUqnLDmn7tyCYfadpfAD61rR8Lucp8UJSVg",
  "key8": "3huRwrbTgV9Qtv9cbWRPjiPWzesvvoGEwa9wD2hLsqaEujE9xnTJRd5rXsnnP8EjSe6ngwhGps3qiHhGZBGTXeeS",
  "key9": "44G8cy6ChoNxas6DK3EMeBFsxMJq1TcZpXCeE7edfZoHR6YiSMdRasQZnqjmXd3YS2Qj8ee8hSHvktr2wKAKyYoV",
  "key10": "nE7deHCdMYxxSykgSD9YjHuauJng6eBGiYEXGF2rMzhsdTVKLdb69jnc7ookrGXWfaWNV9mx9Wg8zhh3VmKguf4",
  "key11": "DfdkvKD5fcJzsJGGXgqvcRxXnW27pv37fZbVxeJzqFgJzYKoYwH6pwGssLAHb2K56U7QUpFJ8sUb3nw7RvNMtFd",
  "key12": "5vUk5PB8CfrwGoov55zbxF9XgXM4DMLgyPxZPPZfKXZPdRYuBTVJV4jeNrvRZN4tVw9U9rgx12Ekup8BcYxsVpyK",
  "key13": "3CLn5kr9vYpzcgLKPjovxxdQXioAB54TPWxFzm5vZmhkYhCwQaRzqMasymq3YT3S86613rMd6Vm2ikYzfSj1dGAs",
  "key14": "2PhVn8XPE8S7R8hLD8gKz6ZAzuqXcv4aVCDTpJjN2sjMpmeJkg6TuR9ZLdXGvAFDWNpXrcJv8wSd99LkDCvWwHkN",
  "key15": "5C13gvDo3SGY5EWYJxohah474K7FsRKxH7G6JiKtXgfpyt1KgCEFH42Vmon5dzbxjheUu82XBVReinMpQu3HNKgo",
  "key16": "2d4FUNUAkUe1WMokeARXL81E7DsLgoLXtv4wT1CypcTgdTF8BqxcwVhUpTJuowuQZf7KyefZRcu4uQT2At1kifAD",
  "key17": "4jLeRYGhnnkY8o36YmVgoGPfPCydJYVr6JLWrmaEcGATdAkTkXcddDp4C2vC1Q55CBCmoxXubkc8GAiibuT6gfej",
  "key18": "4XEBpFa2CVuPs7XV1sQnrPUTiWYmmC5vtttKQmN43QMwdirDVodmFUVM27QCokhcYWrtEaFiuB6rpirfow5dHTT9",
  "key19": "3mKALLpLxPGzNCJfXyKCXGWsa85aqXTH67gqubMpRRK9Bf9soc4891PbNQayXcXWupMWvGkQKsRhZysEBbRbjtww",
  "key20": "FUcNQjRpWBfxhmL2TeQZ2CTwFwxi6cbMDHXMXSahYKmxx2csDfZrdHLcKWdDxdiXZ8Evusgzrf89wf7PugZq2X2",
  "key21": "65Bn65nrK7gzD5dpMnVF6p5mbNwYfTJGLvruAQjcjbAQt5EFFD3vj6ZYnHThewTt1nyTx6zgJe7yoAbiPgbdwYMg",
  "key22": "52S98WAxaiNWDVZBJuyBHstmEjFKK5W4Ru88iHVu4nsTWmEJ6Jj88aJsrejM9i5UZ6WdChyq8Hm9TBQqnNqsYbgb",
  "key23": "3rABpmS4ca71As3YAAvFtDkRcXxaGEx7qfoY5JURKionSbx3ArHiQqPHyPdqMDq3q4MEmqK2JLjWVU79B76nDhb4",
  "key24": "3VUW6WfEceTcMmymQPLU5aAjB5Gf4X6Ug3SAedSR7aNXhM6WZitgRX7G4ocBFTRqR7FWwLKrhBHHt7r8ENxpjTRu",
  "key25": "FFBDuKy1BtJEgqyDwMw8sGzi8MfrMtdyNtyz8HufMpERzZtnLtY6pBN4MsJJwhtRsE2uj3hqhKUV5HPsReGcHMM",
  "key26": "pS8uE5GgMuug3QXpScs9kj3iiVoUfwVRugDf8hVsyusESQA2hDMrLDEGKLMs5MBxp6iTLBr2r4RWgEDEajN1mQA",
  "key27": "2iZsodiGctrfPJL82mxRm4oU3XkoD5vn5SSPbLMCDrU6bQ9THUAFGmRfpBQykVGo9ueEjSV4snNo6TCeG7mNqWf7",
  "key28": "3FSVV6tGaqTnSRvQH6Nv6v4tSN8NsvjKdT7bRCkTPif7RmGnZNHqvi8CxZVt1xV27vihoSpc5ZxyMM3JScfpqqcL",
  "key29": "2wEJ5ygzw5RYTD8EJK8ksrXbDeJ4inBocLWQexAHbT4mP2dkKBjeruieKmvR7K63jFKnv5ydADmPwr2h5E4axKeW",
  "key30": "7PuwKhoi8FXJY55bVKg8PhBfT3zLQs3n5xqGjx2Sua6qhSWQT4nzoo1kJQ946DypJurrk1m54knZg4sHfQUmw2f",
  "key31": "4jC3jMBKWPXfsGBPdiXzeVWpX5pKFnvPjnisv96TJB1W5PjAXpVwwE7gDHoDe4wucpgp1pWGkWojnaDK3YvexYTR",
  "key32": "27K3YXsn9kePtvcFFvDANtAp11vvXJSc9e9LXQZeWNjcXBJTD6wyLq6u88jjauhoKvRGSnaNJfWYHqz5mKevqri3"
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
