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
    "2rKdkNceyXxb6puTg4g8ZQWiVFJx1H2gZji1Y6Sc7HCsTxG3dv7KMbQXLnavqjwv3NodWRCm7Kc7PecWfGUvXHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pDkqVF8nHCjEErZ7B71aNuCub22fMRQ3bzC6ebHhqKucKagB25iPwvy5bcgs6eoancFFcQXFSXdpymGGN5kPeAR",
  "key1": "57kVxzc3mURZBr1vLKVVjKaPdzyintPhQz5RfSY8sSd5v3HWzvQn15WmJH1RPsThP3A3yomMBAAhMx26niuFjt1V",
  "key2": "4Q9oB2kkreovsWNHRTi7J5wiFHXgWonQutN7auAtxw3CLe6bkJiLABR7GD9gXw6aTLjFedMqS2ozjkPYzDLt7pgv",
  "key3": "4BZFeQnFN3kRxsHmfmHdM8bz4HRAwBJUWidFCfueT4szd1bkAFCRfAHVJmjgXEEEWnmgWCPAVUPJVRfRp1UAbivb",
  "key4": "4KeSsi648KE63joastZNYYZ8KQcYKqQquoKst7KCysbBJQF1mN1VRjNWBRaaKuiHxQn56mvxDkK3KFPFY5QKUdN3",
  "key5": "2rZ69vqJ7u88n2q4rr593Hgs5yTR1Kr49QK3QB6JAsXxuRCYXLCC1ptnGDdxLMcNdMn6GHMELu2JmPqp6ncfKskU",
  "key6": "2r6ggKjSwmmXKqzjNBvN5HUBCXtWyRL7H4r6GWxfqQjLvHDiPyTzXTm5SLj2vwnC1No6WJkVQcheFStpexPydnCF",
  "key7": "2J9yGn23pL67EnCV6nwurErSChoxSJgQuNevuSfZTDfwTbdCFqzHToC69egxjE7JNBXwkfNbGi1Am2TBF1c8M8Mv",
  "key8": "2E7XiFi18T1oa7YHuuo4xf81WLvEWvcFcW8mqmxyV51zWfQaMLKL3CN5SY74XwR4ZyPWXKqG7nTu43rmanqG8TGB",
  "key9": "5VbEHh9VLWqbb7cL84VXHnWJ3LbU7bYczHGEFStM6WT1hEHyQKkJFAsnTvMbwDCCnKkjRsmbSjrEDXTzExmwV8Ah",
  "key10": "54u7dazca6WnULJ8QmBVGpoyukCW3H8HHJGvWbhVuUKfKXivMbBEu7fZp9GC1hgjw2wQ21JvX6YhMwdWB8iwMWwj",
  "key11": "2jH4QHvp7WwS93XYME3V3Ks8oxcsGT174evNzCKsA8N7RdPu8dywPQ92xsbqKg3yQbDSXvRXZMziSfophCJuTCtq",
  "key12": "4ALWhbwpwW6GRcN5abst8Mkp7XZPQmVdfT71rdYqgVBr5uRknZuEJELAJzbz5XyPu4Sxyigm1tb3rrvLsqrKS48C",
  "key13": "28JVMq6vWxLQgXT6dCU1FhaJyVKeKCPj4He2ruHFAUxjazcfJup8mXHMVFzEFnnNeVtusaZYS1wctmiGdnQnANn6",
  "key14": "2QWLeCQSQ93BHQ9HurJfNMSJ8jJygePLRdT2rLM5BKreYmNBEJEuhLfrx1MvWj2AN6uA4HjhAcRT4MjgTRYDfgvP",
  "key15": "3GMyWVh44vw8W2VdrcRa1JjXB3fsARHhXKXvT1JfiwboqhBRUKDqZu8w1oEgRfnE99qGmZ4WB4dkeLkY1wnejoNp",
  "key16": "2mtqy5dPkatTtfazmyAk8ZM9g5UrehTcwruxiPZwxEeoQy8if5j1owkhaPBDfxe3N7V4c4do79sf5YfEupfGGYJd",
  "key17": "hWYe29vF2T3yTsXPeqBdFW9dJC4tbMhmySR8zAN8kdktXrbbuhNZcrwp9Lv3iQWhUzbfRPnVvfnvnjhPeXGTXyQ",
  "key18": "2KVnk1yNkdWvXWVNd9D8bAR9KkPrtymCcEPZDmyk76ujNmjPFT4oh2bdim6ddfswM1idLj4UaQEDqMzyMdgWSbNZ",
  "key19": "5AFTc4vYBCErVA7QVrerCC8WGzaLHscz89Y9BtEPghc6GF3PuY7DAjq8gS8BvdHhoqim5yiJmZR4VEj2FP7XqYGG",
  "key20": "3haDWrjvfBT4zsXrajZ6khMndsaUijHTQWVStTLDTmxfrwdmQCPw5hmawQnXQjrZGE7RjM9bFEVESfPkZqDcdz8M",
  "key21": "NXQLLUbzvRYEoTBr3gwe7As2iLej3Y4UHCYEGq1tfChX2aLWicQYBd3kFJVYQ3YV7xbraduZfSJy2MGipP5nkHd",
  "key22": "5JBj64Sn7K5VQybK28kvNHf2u3YfAD1RN9NchCsZYUapyoCxZq62C2NZuiYz7mi5CDnLYhctMxBrp7ncC2HNeYWd",
  "key23": "63LxMXMvwYscsUZVCWhMb9eTZrj2NummttLBkCGgaqv5HAwXtJH5JApnxZFNkoY5nXPaWSuMRXS2eutDE69aMWew",
  "key24": "4k5UWg4P5mp7tozrLEV3fGQUzJt7cXA3oeJZgZe7jF118A7n2SGiWMGpar4es3HEticbFcYU5LvVZEoeD2eTsWQV",
  "key25": "4yuKcfLFB3P4AUZQBgQt3mt5gywsETmMiWyPxcGp66qX6gW9TpDQtYno11pU8TZxaD9k5TQ1HB8CzgZRLvth58Fi",
  "key26": "4zA23rSDTWEHAix7DevoZgzo41csDsd33Pw3gTpG8vomB1fLNLhuMJ1uxAyeDcXyfb6NxkDQG3fhMP4HnkrMZEi",
  "key27": "5Qf6JVop5MEx9MKqTfkW3kbZeVeiYV4syXugfDJUwU73iSZ1wwr9XoviiuadVjLBEeEcghWhSqJWdnuW1XnAdygU",
  "key28": "XiWznYooqcHvdrfqaG37fbS6nBsj15GSYZwudsmMSbJiCGTXGnFx5NbnDtyA7etVwAEn89b3SP2FfQMtSMLWFHn",
  "key29": "4euzR32o6X5wppbe2hDwq64LSCC3F49K4fMUMfkz3bxmfJMTwCdn3LmMv3VbnNNAJS4QT8ouy1jjXnMaqWrxcZYY",
  "key30": "5yFoEk1xF78ggMonogaSqvsFvfSfvS8hUoY57LZKUzM64uLqowJGb1CUGehamAJdF4LAeE18XhE3R7parYvAcKVo",
  "key31": "3yuLfg7g28qovDdvoYg6MpGxybEWzsHCq69Nu2wcQ4ne1rZPR2bgTEg5AknkrcBsbiXMeu4niMLf6N4ri3bNqMoz",
  "key32": "4CqycHRH9LpKNQ8AZHgZAJD8dX87XLCnQvZ8Qe4GaLhrCkA5akHMWECjyNi2QTdT5rJ1BsATGfBrAvbdy9HuE4ju",
  "key33": "4cP6oAuwJ4BjE6FN9u4pqxZivD9CniWDMYNASxyb57nPRMuBvBKaHQ6pYbxwauwyx9WzsJT6H7mk6N2W7xEXBy6g",
  "key34": "3QDBTw1qNCXbtJUk8AoeBb8xj2QD2esjGSw2YM79EcKPyYmiUjnwPmDE8gdiN76qjQZiqrgn8pfhxDg9Ebu5wAx8",
  "key35": "V1RCcFvwdCG4NA5rr3RGmDBgPRCATfYw59hJ3ost84z5DrsJmU7X57T6goh8k9YRovWjADa2muZGo1TNdWTXCUG",
  "key36": "4Dxor2koFrmmUD47vs9sV8Ljfm1Jyd5s1xcmwe9Trz5nmWrbZJ65Po7gyQXnqoeNVqFKs2aQXi44r1PMXT97NRFc",
  "key37": "5QeKHEM5WNGMb7bE2PY9ZgVPuDJDE8YdnkfeiLiUySpqNRLcg3DLccy21zhEDE3LZNsdsMiG9BPRm1MHrjRE7ztA",
  "key38": "2Ff31wwnKgngeKQo7AaAvLQL8E7XCRaWDp8dDjapA8MFPbbncMT9kzGg4yAvBse1sm2JEwB9QEQiRYd9fKPt7rZB",
  "key39": "zDJpNWHvarRQ9pxVAo31yCPL6ALSPjGgDuityvMG8z3nJF8ZwYwsWsyemwxZxc7mfTRpSi6vXMzbjbxyUMZtVCM",
  "key40": "36tyowd1hr2PokVYFiFyEgkABbKoizDMcUPPVsYJUXhNFTS83XApHfyemu4zxMM2q19nfwH8jwNR13QET39n9ofn",
  "key41": "42GScUE85iHjQt95f7k8HMbJC2nsUrytygxJWyzffuGTkKk2HefZx6D2vXFBxzS5ED15jfpvQGAuu4Fz6XPFL2c6",
  "key42": "44iQab6UPn5HmUWZpXRwGgdzQTw36AmEvRJZ3oLsrzJts1MxQWe8vmVVtJ9JqYe7azfZJePzCp7T2GPLiPczWP59",
  "key43": "5bCmZ3u1bzF5QPQcXwkdBmbpHRz7L8WbgevhCdjJWf6AEqDqYiSYHrVHyK1G7NF2vxTjiGMJR5Nq5AB99LgNkKjB",
  "key44": "5TQXnkKuwVJw9rYjHZDQkrCdkgDo4L61swXLWXDGMp59CoxCdcV9JXpwxB3DJNy4osBKpFGkw8j7o532jJ8UrtTS",
  "key45": "54NvUtog4BQPQFMevwL4Jwxd72QucnvQPGbFxVEh3pq9ZXFb5eMcGSvyH9HXx3XDxZQVs7jvJCkpTPBs8h2GgKRu"
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
