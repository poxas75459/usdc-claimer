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
    "2tXDrmrQaHZt7fWDY2i9m2JYdn9MhuD63R5EVEnn6dffddsDh3Rjo6Hm2KVMuNeL8Ztdrt4jVJZfs8PtFTxBmwQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gErxccimWNpSPtYeJW8Etcach52RxV8C3oxjiW7KTdmSoojzHX11VdZGZgoetmjySiP46tbiro1MxFGg6Xpfvxr",
  "key1": "2yDsdR3cToNA5CPKB5TtZmgGMLge7QF4XaTexbTJGbzfvaERxJnHGed3WjjBh4GuwEmCQ9NCfEe1m9cN34Ubav1N",
  "key2": "BJyffgDddMgYMnrkVFQzGQhtN1itMw8vnYY1ee8m49xwbZyfR4uKVTgRF5KgT328UtHAidmz99MqL4Ay9Th2Q3R",
  "key3": "4EqK877EnBKQfQvuWWhc4DGKFjiDvvXsFGuYMwGaiAZ7irrUXrw7eVYgjpQ4amszg447bywcFFfEgQGn6hrPmACF",
  "key4": "xUY1Hie9DrzGUb1vqdzX9qNhvLfjcKMwuw98JFvFCLT1Su3T1Ce8K8m7ktyXypznpYSfq6ZcbdgXFVLBgKPS8oL",
  "key5": "3FabnoB4Eu42vq5iokt5KvjiHkWJxFj2NbzJyfQphRNYQ8nRheJCvsbMfrZJoJbriY9ssQnoxJz24pbMP3GN4cYv",
  "key6": "L7HQYyF6XoZ5mjaQT2tZoZDkc6oXpcwjBUPgCi49Lp7s4cs7q4b7PusKWSHLtJxc51QmJarCN4fpWak31p1Axjp",
  "key7": "4AGhy7qhW1CqNBvpSF8WXsnHeuwrcGASiChbMMzhT1cMyfHGDihk3ja8BTYJt3da9SxkFzVoH3CYmqZkue9iN9as",
  "key8": "499abi2NfDoZnXYgdhiy83b3eJbN5YERqSyTSCbYUWfuGjwt2hQC9VRdiYXZCnbQwXjRc7rxzEhJL7y747zcW4eV",
  "key9": "4RDfWJikr5ykrxNVUP5f5Vqcufdh13jwc2kavxV9nWAwyUFcPRggFDJR1hJJ1J7ztP3uztJieirLjdB7LmgFYFWn",
  "key10": "24KGoPEieP6wX18SDq9GdpuoMHgtKnDvGtoeo6ce8tNyHT23jR5SMrAQT3zCRyUfv9zeTKxXVDWTaAi3druDULYX",
  "key11": "iFzDSfcwVf5vQmq74QonKgzzp76ogSJkuCDzcH8pWLJLtY99AtgMFiLGvrismHZJcmW4pfwBpn37zqVURUYwvdA",
  "key12": "5gTEbyGAFUo6yHWQkXFTW6ZA3j4ydvR3sc6Ga542pAd325qEvbjjmjtZjb43Ur5g4bnCQ5krwuZdDpyxnWrRj9Rm",
  "key13": "5wodoWyT7gFZfUvDJzU5SNHnyfEbYypaPkR7ttqvPa3pujTJxA9SpHL6XKSZuLkSsK4robrkYsd4RLagmV4sfMTi",
  "key14": "2UbrLuoMxD7FPxxZwRBn51ogBdQaz1SJXKCtyTDA9WANgkB3qZrgdHtgCtZbZ9qoU3CUwFKvg5sGhYadbwg4TpVM",
  "key15": "4RMKr1TjjDQ28UU1Qekxcdcr6LFeCMuVm7w4o1e4w331NUAXeUxcHfVXzxHFPPFBrmFopQ1zvUccEJpF1XXudzRK",
  "key16": "5P3MGhgjE1xDgfQnKTqT3EvF4FQhZZkhHAULshzx3KFCSWro2qEmF1rkt9MG2METqX4XRSsno95Akqxa1YstbJ78",
  "key17": "4sQt2Fxh6QmWCXea1Ztbct2ZzbRgXswLB9JhBVDZm9uo5etATtyJnpMQy5ZgS4kfiVK86YGzbbSwmNNSyZhDhmLm",
  "key18": "5T5HvvFN1RHUjcDYrcH3uhFsjrjgeGD6QzBVj4ACwdCTxZD4yUHXLZ21K2NL25aD8sCKyJPAFuw1UBWGxGMkpSXR",
  "key19": "29QW8ByQxoZBEK4g47q4FMk9UYxpdKpPr6fEQSTUT6SEaqmhi6uTXuCH7yptyX2wE6Jh16RR8ZQrUxU8dQ8xmbaU",
  "key20": "xD1kohtRWXUBpB1XkmGBS1tH4w9bHJCJEnT7exqoH5zCLm9ocHKfsSpVwjEWCE7N4bUStfLiLsfKQVBiMTheBMx",
  "key21": "2qv6D7BqkhrkFNEFAxwFtpGFEswrm5fdRrLTBjgPBMBw8ApS6sGE2jX5TMp297mCFheux5pWeiYnbTKqxRcu8RY8",
  "key22": "HjAWw4PMroaXnqHa1eQudTcdZJAVct1qGPi8R5WoCBRke325MSGpFxktuVEH5q7bJ9hM6jG4Jf2T4W17MjgwKuH",
  "key23": "3cBxvb8Zcn8e1swxJm5pgnFY9guqtvKCjCf9tuELtH6TSiD4EW47Huq8k3Ag4zWXyXChA2fAmV84zMzfYTbVdUqW",
  "key24": "5gQCsiwFQ7T6v77UhF663M45QzWzRMA22LJDZmiEZFsaN1wwPHGrvkScS9NwnzbUvJUjENNUomCCWtdXLbw7dRMh",
  "key25": "2SDucL8GSt7WX6EVmo5ktFkX7fEtnzikJBYX2sUXaVyyQYLSwDQaJZXtrfeuZ6yvNRjptiVtb6ZmQfysT3oNWqDd",
  "key26": "2HJrn5RB1gWZDxajEuGFJ5BqzFRGtwy4iRXTLRVdNanEnVSARSXX4tJb2uHRKCWwKCTniEDJE46zacru5p2qTTgB",
  "key27": "1Lk5dPg3xeUdAarDUfCWdsRevs4qSjdML1UXTcNHRQzQY4X8raZrUwrhuSEY3yAyP39WwHvDyncQ89D3DSce2CG",
  "key28": "3HUFPhRPhSB1WzFMEjW32R71i2iuN9bSX6qxtJSAnFvCf9NaVeutPEESYpyw2L7q7RDRDPzFP15MFQgpGddPnzUd",
  "key29": "3Bai3XWaKHZSyQ8aMC4btH4owWRHvf16nUttWzoQeYGi8poAPwwtWhvdqtKuWePyEEEfMz1cqXFLEfE7MHxHspY2",
  "key30": "F1TRvX5epcdDkoSJkGH8beu7UGW6w48RPh5WP5rgTtFo1fwGuNgqbudnMskwTALNwCPCbkkeymX9EaGgCdY2A5B",
  "key31": "3TAc3SEw9eM81wUWMAC3LEpSUXZYcPTmAFv1t4hBpDU1rZc1B1cP97HvvqyMe8Lqaidmr5F7VYCAxcD8yTZtrh7c"
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
