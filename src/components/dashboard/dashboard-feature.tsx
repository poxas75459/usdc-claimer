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
    "5JhGsF4oZVdc4FybwxX99E9J2KVW6upUsFj4GJLTFcyoVdYvwswSFcb7fjFYfhpjvsYndwTZUSHTSN1gDRnzzN4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Wpin48tVyzohspG2gjZub1FpFvyd2MP2PxRsSTyuhnb1FGXtNESDss6ETfKnocuEV6QwRfw72RZyJHSKpBb17x",
  "key1": "2T2DCcs7dkZ3FEXV2ctxDN6S47CrhqBCWJ8WpawRmy7WhLtWrhFpdk5t65qBm2VPkgBjfkhcXbds1Vf4S71MGkoM",
  "key2": "4S8iiUncFhCFuBvTNkPmZ69HjV5bPL5ymuU2YRHwmL1Z5rJj1GBK8BksZJQogKjKBYGQWxP1tupAWWRVxpV3knuz",
  "key3": "MH1mFKAeSYz9Nc9GLgURmZscXXKs7LoWE8yE3qhfvPhaaGcAybvyCK5cAvwSU9dSmhSEZxv5hsU8oonGzqfEW9B",
  "key4": "4zoRBhfvbyu4y9XR5h4gf4gk4dKhAim3UgTi3GCKGYV8UZMKqp1raaGFf46v6eVAh6ydNcGHsbNiekhLRd9Y1HDv",
  "key5": "4VzuGqMgeVw1ceAeEH6z2xkLCUQZ8o9sfSD72L5FqSohGsub9GHdRhyR6fCLP8W6yyUfNykupVg8NNckRKia5Des",
  "key6": "4jgQ51BsY1qBBErjDpzySK8Sk9uRoSWDj4cAGVYtqNyGj6syu3JiQS7SFHyrMDCngcgoPSSgF1R1UYsbHGNJyfaL",
  "key7": "3gABihGYHbMfLBCgWsNXG1t2bdTbuj1FY8mqjbJ1BRBrs4qK2ZgTcqbDf7k2Q6fGBHA4TM4A69LkjhnXsoQ8bdgG",
  "key8": "4h8MQgTFUbubPv7yu5iYhoE7hcL8n9T5qK2zQNu9d39EfUqEzKev4PGUN3kGNPsmGQLvwi7XsXoX1zQcjHp23aAD",
  "key9": "2T6NkTq5DT4dLVsaEb8SGz6xJRaEB3u28j3BzsiaTxubyhBnMBCJs6kAsbjasNkbc6feaMcUj4qncAprG5cGdS5c",
  "key10": "2TKEV6spt3PYmH7V5yiTcDcFg3s3Ymxx3ti6jeac8To8vSgxQFfnNTGpWC4tJJQXJHhm8AR4gn9eh728yUb4rqwm",
  "key11": "2NZ9v6W3QVzmrb7nMYGNL1CBtW6YDbEvKcVjR1kFUxy1Gs3nkquTiVYARvrusGnwrR6YvJxULDoPEcN6CiTkXX5f",
  "key12": "r4UjiBzt6uvWPzkwufpneaPk1sNU7QKjCmohj2aUuYzb2NEgWfp4Zrp7W3AhWkFYm1EVQaKuuupL1AAydeYoAXZ",
  "key13": "p3GFw6dB4bffJvmi4urWTW6kLE4kjWjChEsU5t2gF4VSme1UsqafiRAV48zcUSmYdRBG5bgqjQMSPckFm8oEXbN",
  "key14": "5j9R7i6KjFUG5bLSAWawYLigcFw6wm6zgG1p1yNWJCdeFp1NokvEp6ZHkfjjZeNiJVEABgq2VSHtdMY2F5tYUiHB",
  "key15": "hyWybdYMCWrywDyUJQUpX4x7ZLNfF7jwjPrf6XaF4KAwk4fTjQuVUV9bQRAvAS6p13yieumfkeeb2MD1cVHJH9i",
  "key16": "2mJnstsBTTcB5Q5jsWzhpJLU6HPJowQh3j2zUHG9fYikDAQ1LtaeFn4qaqebc5iJayB8jXUh9iRxPQVZuYDBXr5n",
  "key17": "2JmwuA6PdErUC7N4y9e2d5yQfAvBvGcuynFSM4jj2FQkD4kyeVcHgjPPcycE5AaRHTFQSfz1UuvUScHVGucKaXbc",
  "key18": "3bRvLNngWjdLTEQYK6s8zi69hDHBtWdaLU852aPh7vDMYWAboeT9LfpeTFd1cSHH44dv2PWzbN6Md8y5YoraEL6p",
  "key19": "4LV9J8Qs49jBUxmDj1iD9wXZjuPkf7h54Wj4fU7StAJPpJykPkRRHQwikFQeyWRSxbUSxmh8ocAsCUkp3j55ybvq",
  "key20": "3RUZVY1rnFCmmV7vJMhb8gqdNArMdT27yeLKMz96EyhS9hJap2vuMkqg26wH8FzYNcsVyS98ShgDa59qHFptTMqh",
  "key21": "3P1h3guAogdKrfW55uQFjR2SKgGmMQAowZLZaNqeWTZuQ6SgSX6WydoitdrQFTUftMWkJERtJNHUPPpBTrbuapzS",
  "key22": "9NHqPrzLH2u4ZN4SnrE2U8UR28N9i78MKLAKQfyGFezHYhLG6LTeAc7u1o6msf88gVuhAb6BcXQ5VTG2js5pz8V",
  "key23": "vCAHAQdv7CdhATsmxbvhKhJxaRsCTrjErf4craP4WTN1gW6bjqE9RfxyZYFYoSgYFhDTnkjZLFCwqA5fMm8Svit",
  "key24": "2YhzZzR5HfDF9W6JsEYRswXDzHgDHvThed5yv8NWop9MEo8eajbqvXNoehusRdMV9qGDQcx3RELhmKkApRXnYkuB",
  "key25": "4WhhaUW6YoTmd6Sj9QuGNmBVPySbTrGGV2K1u1Je2o3cnXQGsc4MPmtYhevTu9mURpj4Ca7H7F7g3DxsFahJcEqj",
  "key26": "4K6NcsBFXANcpUoJ4CPau2qptgFdoPubPJhPbKagwVdyKALaP6aEV2JgLQPffVsYREDigrZ7ooLj6HPJCM4KozUH",
  "key27": "45bUWaAZZg9s2K6ueSxdHEdPzUytkif9EnRrTZ6z6yAbsiHRdaHBCB5MtmdBokaGXhv7CyMn6LLE5pYWLDNXLXWU",
  "key28": "1AJMMUnYtnk31XCSdcxcZXhfcztEs23ctvEC7ZgXrd339SoSRdrNqmde4kMYK8iXAViduzTXK3roE7T5o3m7sG1",
  "key29": "4uFWGMPvvcRQijaeGQnokQhq9NaPVHaak1JxknLXqESHTiJL6MntZt72q9rDCAnZRnpXceSAZrPziSBhdJxGfTXj",
  "key30": "2AAXSVAwQWCLw1sAEY9mNRy4r1QD5Zh9R21TCLJkipUp8iRqsDvdQoJkC9ss1fKs72taao4Cy9bpqL14xRvQPSLM",
  "key31": "23jp6fwSWZuwM9rbdLYFBJSowiCZ6mazNnMkyGGwNd5fb4RipZLVTuRioRhv2YfXzw9Cm4REFdhaQx89vbMs8ZqV",
  "key32": "RSPNcFGHnjgZ3PQAU8tC5RAeMCwyavZSezpxHXPAwtoLqePAPU2dcfCRJCNtV7TRcxoR1VWFo1x6sYgKA3hCQKr",
  "key33": "4Wik12J3vbKSzS1sJNof23pJTe7Exsrhko46is8LPUiXHxFwb2jX66HK7tMPye3hP7594FrHoHbDeASpT97fK6d",
  "key34": "5ff9fNPYo1fbhRL9Nm6TucxBghTwq4ExjJzwfwukVY1JSYH9gNqsvw2wcPQVn8sue7R3bt8KZCAUyUpF48ZvJBET",
  "key35": "4cST1chic9F2C2zgywZ1zreaAmfWhUQbU27Xut6aLLHGjZCzimrfTExS6be8uMo7uFBqM8BNzJ8xyyuvWFHRzmp5",
  "key36": "azGAmbdhnB9mcyXY1cyFUjYa9Z6Y5JSDTwnuWdBhPD38ZUtLdVUBARJTN4ES9qLM7v8i3ANitho2vRMqRtELKRN",
  "key37": "2sSFbFQZR3wYoSYB2U3ndUMdscW3kaUzWtNhd1SpqKLQPdhNLnoSF3CQChD8RkE5ZbTbqDG9pPdQ5HPt9BcFstof",
  "key38": "55zhdxRqZHmGNQKS6WEf7zWLk52pDcrobPMuenvJmdfsjbTQjnzDbxWEaeJrJaLt9R34h8367QyVqwjofN84Sm67"
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
