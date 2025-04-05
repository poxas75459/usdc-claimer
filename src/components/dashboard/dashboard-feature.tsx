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
    "d6KvzwYJfLKEdWXVdWk9Ac9Rm3nXK5srwWAtB4f4aaVJHTKcZbxYprWfd2kXi6MunDBH6zahTuLYpfoo5znGCsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n9kC4ZRkGFFsZNPHByzbFdA5dGFPbP2s3SAakSuGbGmYfMpQwkjvKwY65g8jXJKkQuZT5bpw6TL4Rrpm1TP1AJ9",
  "key1": "2XBPKse1rcAH9dKx4mvy9P8xUV2WEEHGg4G9KfqdY42AHHKTCSbmgYgyfKi6PZuv5YhnBdgPB1et37fdVoqssCWd",
  "key2": "5ateWEAg43DkQwzboSkQh2SYyA9TXhMJyEN24r4MD2qah3weFNMoayQBNrnhBuPjRUUBdfwTxkebqdPzo6mLkZQ",
  "key3": "2YeLMjmGCNbunjzoCoGae8M8vuqQUu4rfiZ5QYZiqhR7izq6HAcgsDvDbptd4JQSnHorJBAFCPkgjm2bv79DXD5i",
  "key4": "5StE78tiyWc16GbbbcEPiQyhemicfz1AYNLJ8ci3RL1XtCPBSK9BYyJfE4AWN66ux4jtKnBKxuHEwbN2jHSweLxj",
  "key5": "2HVbPGsXpKrh2YkJEk5fW31yCPMq8cfB8xtdVh6NxpJtXjPcU12i7scS6ws3NKm6ptTZSni6TTGK57xBksqBgMWg",
  "key6": "55bGeryEH98uKYgqZy1kRRN5SLLf25HJtXzpuRqtt3VhoySV5SBsxES7mKonQnmujjH97kB4eJgpSdiDKKEV7F91",
  "key7": "5WuQCHRTYxJNEseS33sL1speYgs8j8UsMcztWZ2g7mB5vs8s3ZDuzjBkFcqVGSock6fLKkV86M6UedJg3NoP2y3c",
  "key8": "4dzYnHXGVjEzzsdLH2TDn8vEzXiNC7gvwKWFiTwfwH6TWJoNsNe6nYPTFAREAsg1V9gqtyLmnNspBeyX7CesEb97",
  "key9": "4zcaiWAoGdjm9Z6wYkNMgc1gKN7HKyM9bErQaudJARSmsK2F2yGSWSiZo9YSdeBJfyxrRpi1Rko9KcT5662Sz8KC",
  "key10": "366KayqkpkmJQGyfy282qrABEouhyWUhfL1octZySRcrdw4VrB8amdp2kcmXoHc6oCkrRJ1NGsRxed5WaNTJHKN4",
  "key11": "5K5ndaW6c8WN43WNNBfyCJ2sCQ3xo2KN42cUZ9AkVauQT7RsWMrRzPzxhXsVz8c7P4Gm5d15H6eKL2BfbLuhJhwj",
  "key12": "63RZBjsYXi2aR3cv7QPDusACYCV6KnkGLzADtcohrVpJ1f4xpq3EUBit9c9TqxxWvLU2pug3UDUpzooe1G6cDU47",
  "key13": "35CjYpwnTccN6CQSJLkJVZG5NUbogtYaeKM65BAQVYAyRyzPLk1CFvLGqxD7gkucqLfVrPsidhQg6bQC8RjgLXRx",
  "key14": "4ep4g1xavjjRsEJik3wcuyLuk8oRtYzwgizkPK6duETYw4Yp7QYad2rnmvSGwHDwW8QoUEMvnagMH9wsG283c6LS",
  "key15": "611SwL3THNs7Bguc973i6xUSfj43mdupUtbCu7g2QmHR8nhioGCZuDzLFMTsLP71xMggYQNE9CGBS9Y4YReaTWcK",
  "key16": "2RJA8zW3Tse4pQTnids4nSZPtfhYYxf83x9chdLD8DFmcUyqphansmiCEo8RRhQjmtzb3Tcr9nBPyjko3jBJvnQ",
  "key17": "4QwuECXr7MKQyyZKueXoiWb9Vob1AoyxWQTSFLtEqAffZ6YVY2isEMyms641vGgRerTR93BgXcAMA62mPfwks3uS",
  "key18": "5rYmFviAnfN6H7M7yFzXtJFgDsPwERyQMFmMwqzuYgEC5wo5su4v66CVWLsEikiJj7JbJD8xPfGuWZqK5GnHi74g",
  "key19": "3t11Kpffbk5pJRZRmzRngPA161unS37MXjTWSGNopiLvcxDBm7DV7CM9jdWYGcQmg2Lg8vNKx9rxYSPcMiuHUKr8",
  "key20": "5qtt9deEZWKibH4jiEC7sZdEB8offuijBy9SLUUa8oDoN6ZYrF9P6fAMJYCCsJExehwTaHdgTNLtYsNMaiSJnW4q",
  "key21": "xSp1WbvnGsfuMf5ArXxpPQ8jcdgRmLfwNefn1fd2y3ah8mzyYrF5HZyuThbjzQNzpp6VWq4u2Vod7LvgAzekKeN",
  "key22": "5YiXeBGnRBR9di56QupGcVA9X2cuvN9RTBWkYb2fwpEmDzXBWdrCXxtnNaa8LzmFEdShAkXsUC34XxdWnjB4jttC",
  "key23": "5h2BEtuZgFfj5guN5NcBXdzw26gsceeh1rRSzESR1tSwdES8pKQDEhSGuthSiBLo3Ns8cAJZBgg4DDozDxAWh7az",
  "key24": "AtRE8zVEJtwDjTm9duzo3Gfug2C7K5wJf4KXTZUSANQzGuJJQKMzJWQ4vhEi48aPjTHJz6ZvtQ6Ksuvdoo38Xk6",
  "key25": "5R1uYXscd3gppCGimKjiphEWEgJueSctvt2J7UqXJJyA4cALu7TRMfSJaax1p2bukrH6JtGcZeJEiEDXytgXyMZB",
  "key26": "29qKGMyWNPk7J5NwFjQ3SkW2FfAtFQ6KgGPtEnXMxhRf9QgfRcFeCU9PmArYTwxcGWiBzNJ1YLEGsgbTKXx3ng24",
  "key27": "2KDgVDv7Ecnv3czWNEtgStueaGayZb3KpYFpzPVMaP4vwTFKjLxCGqsvTjRfmZ95aGBqRJU5jVvP9fsSu8ETy1WJ"
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
