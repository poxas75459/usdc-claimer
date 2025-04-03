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
    "5ZoXAehapfay7BVGnYgdbCndegtLQZtioDij7HHVhwNkgGhot8cpRhWrGoAbAqJJ8A26wEu8chsJenoL6DMm8Q4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KewD9QJyPNDGXDATeV6s38qkyGfFTT9P17HYJYMgvZkKmtmFVJnL43Lh5nBik6nu3c8aKhuD4Yq8BFXqCUzEDBo",
  "key1": "5y3CWvYHC9nQwRgPyhZfRDq2mGDboCozYRNh2GU3q6wkLXLJo5rNCfJjtpZjgFaPWdFJTYy61YtYv2Bf4gVGX9F2",
  "key2": "3CXP5qpiUtG3LXyrfjbFL4CXUWCQn3rXJdbApHDhqNYATQCDMSNqXcVohznJFvstURYcCbRBwHN5gzkJLpU1i3sf",
  "key3": "4wdiYGmh61TPVVwSi7LbecZGb3RQbTx1w5jxSpqt9Xyay5ahw14yQBkpuu6muwnJ1fzkAfJwbMccCYdSMXopTdtk",
  "key4": "3yesFtwKqx9E5vKphh2TpmB6BCtSL8U2QWA5TgYzkStWFNrEnJVjzymSwoZuVSTLRx7eGwhsrkr4VypWHAZe4m9R",
  "key5": "3Qvzhvxi2n8LyfURKfvfgPdSSRxymzSdoBqeRpqRiWBUrpm97GEN6c6rze23yYY7pdw6VxJ8zaUxPDEsNCiWyf1n",
  "key6": "3jL7MP6RfB5jwLX1pGHSqv2MAZeyqVhvxvTXGD92qnm7wQNWSGKiXRnRrFretu8G6QwvfNHZJ5wXENo52kaao2Zd",
  "key7": "2VkuuRXsqFHUaPMdgQzmriCj3guwk7T5ukVX8HLwQoeQm5FPgC22x9B8U8QZ2ZZhZkybTscb53Q1fQGZ5AhzZSa3",
  "key8": "3eJnkyq92oQyW3Wfg1cpjKqC5HZhie4cLfwh7XYJsWBYxoVnrwDUKcSvGq4zgGo7uNiTwqyPDjBJVmo1UGxqnQjM",
  "key9": "5TMUhmQssBagqaC7AKeBAVFnF8QbGeqq4zfrYKZWsadWropZd2MRAoP6yVvVGyUiMQyMkmAY9s1wY4gezHCvYTfX",
  "key10": "2rLfDPEdmpBp56UqBS9jUG6HQTmpiywBdUTiygwZY7ZUTaLjk5W6CfEVgYP4SygXZuFPaYorAte5xPJ8XyqALizJ",
  "key11": "3ZrLtvTQgGy8CvCpM9THzVaDSeQYE1VDD2tJTgZeMxnWw8nPcNQNuJ2SuVPy2T7pz46ww3wc4v9Fs5k6PAyv5fG7",
  "key12": "2YvR77bjot3Bh3BumzBxemt5H9jbGBfV11DEbQBxXynqDuDn5CpPbKt5Jk93WWFu3w4x5H1BXoKFvXi9tuiQGzPc",
  "key13": "4YCE4rC1eVqA7STXJ68UdwC6LGemcoNm4Y44nbQe99fhYjCcFPurSrFPf9MnnubKKhd7j96JdRbMq87BpL7PD5fU",
  "key14": "5PzUvnV2WNUSJuKbmHzd49QkeGBduTg2LFBBaEwyWar7WxFfUWiHb7fsSu9WGNb7pY7YLoBqhANBoye27LCwhMUZ",
  "key15": "4Ktu9cKf4vbVrfo6o8TM5QhF8RRoSooW5GTMAnvEMTq3FyRJv89CEoaQgiF8YfaSyYbkLNGdYDiyBhCB2PaRrLhM",
  "key16": "5wxyE7roTybH7AqBcqrHb9GfpdWW385co6oK8ZXaiARGEncQyG5ayWrjE3zvMo5t2FE1Vz3bvdcoXPSeCXjY5exQ",
  "key17": "5dtb48PF5TtSU6YQFaAGze4W9jPkuVBLi2TkgJgN4qccU976W4wsSv4KtBpM2J2RuxSRgA38Ftcs5hC5yiB2Ad7L",
  "key18": "2dFX77bgDSDDVDcGRdND4t7Vz2PXLMxoX1GLm4bEnUi2VuTSFAksJrUWNLhXNHCox1zmN11vszjhHnkA885iP6m2",
  "key19": "5EyJSdwwS31HtU5jp6omnc8HXFLGMYUTenkRygzdZ3P3C3Re5oz4bmZksB8CW9uRe8oRP3ikVgS9qYX2xEjLSrHv",
  "key20": "5Ugbtb1SMEYC8fLpZwe8X8orvY9Ps8ziWkEvx1HPTE1idyG47HSjyyq9LjYATBSCvydnDXhU6dfWFHYzBV3UAHBs",
  "key21": "46r35DSDmNVyNrC4nKVJxTdQY56WySGTnquM1FxPDTzuBLvo654hEiCtJRTEoNnaCqtVZ2eRMifHTcffMPLLViEc",
  "key22": "2prCVMgwWYom8EtyRG3FpGMcktj32GijpMTSCpNUshuFhCypRwYsxP2VrjqhiiHeoF3iBZns372uaf2wXfQ5BZU8",
  "key23": "3y1P5EcXebJPHmRi2iQJe2XkWGQTA3e8Vog9iLA6WfEfLeCfP4Y45yzakw7nEfV73wCYQAgVdVUGvQAmQgSae6n8",
  "key24": "5Yz9pdHVuCRfyGJ8Xs3FQovhFxhsUPt8cJMT6kdLzeJSRcW86KRS3VqyN9ruy8jhD1PPAx9Sb81JzN1oxYmGde9W",
  "key25": "2Q7QAvizRJkZRVTSh6HN5ewGa29za5717ThBXdBH2PuiqZqV8U2ZGa7U9y2PMhuBiwD93Ub8HSZt53K3YKZZ6AFq",
  "key26": "3ZW9VkqTHJsKPxhMiVAUFYf1gRVkTvFsGnwVGMhNLWBP5u4DwHRZsgiWLxrnumh4u1V5ZAo2JcDbKG6n61gMWcvm",
  "key27": "NZtJewVsT3k8t7rQN23Z35ArXvQyPLjh1odUFsroNEZv74kjj5rMBK7FWwwaxNJkMyi6dx4EWW5ab7UunxTeBo3",
  "key28": "4yYg1d8VQwprbcCEYozBLg5ZMwNpP5bqh5Gb8JG4dnebut9uWxiRPi14wsqWGCtqjNbhDLf8YbWmk9zwNaGXe2k9",
  "key29": "4Co1PcZri6n7Yyw17FKkJZk3jssY8i5CnpP5ym5fstBngMBQApAzspVfKGQuhWkA6KmK3VNTSY9vhYzdmdvr1st9",
  "key30": "shYRv1U7aFHMpRL731zi1FJLoLfKCiWqki2a6MTEyysGNC6rJFUAxPa8eUZw8i8uLKTBvo2LHAS8ZqRK9a5FuLu",
  "key31": "21T1tLsBEiErGRGntjgfTVRLcs1Kxdrpd5SFmSYUAbJ11G3E3e8D9LZBUycDPZZw68g3EPhd2fgNc9WeLf2hEJiy",
  "key32": "62epkexYFbZX1kN1RVhGvttqusTMJYL53FKxsqrfH8XsWxGk9iBB6u6JhPu6URL9WQGC2g8SmcAxGRJgfnVwwVmi",
  "key33": "4YHscowSfdnANGuoT66ub5DmWVX1WEfj4xrzHiK2qf1kHBYGmcCXaeY41Sd89MPoCC5NqP4zRmgyNxxPbKq8wdTz"
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
