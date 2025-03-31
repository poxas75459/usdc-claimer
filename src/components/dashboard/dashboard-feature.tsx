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
    "3jivfVZioHLS6pSDRfnZMzCroHiza8crk8zKzFA34jWRRnQb5CuDn1ggesqDR1jtT4vPAyhh5MKS3mE5viMo3EgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xJsrtiSvJAhsGMxrk8NxMrQuZpE2FhUZjK6ms5QXAL3cH6EyrmZ7nRpauzexwYGxCgCK3LgHTQ4CdxgSnrAna7V",
  "key1": "5CVzs1GBZfU9iR6GvK5cPSnPzhdq95P4JZPAPVvis9CjoswWNRDhiFf4kV6dorpff4X866r64VRyUeaH2SfGKVfS",
  "key2": "2EgaXGJx8CEc6WwT7u7XtgLQNsdJmKkTXurBnw8d9RrFH3YeVBVtfYWBGyqy8jMQn9h5b7pVDJREp1HNMAi6TR9P",
  "key3": "27nuPL7CK47BAyLjZwtbrJYx8ma49o8wKvF8yy7cCSjY6AGRfBP3hjAwkPnQ316YpNKc4iZtMTuihpS9cEWb2y6f",
  "key4": "3HSRvn4SpB2xnEJz3RcpARNua1C4D24KPxB7xqZYYrmfJnjJxz4RziyZfbHPpUiY2mtZ1jY4FjMGexTqr1ynNjTc",
  "key5": "Nyi5taUuAcNPa38EABC3C6UhEvJmNKt5eaomeDSyYUk6kfExwCbG4Fig47Aw913ZDoDfgwp9d3shNhgfxDBFW2v",
  "key6": "3j8a9KgHDJM1wJEyNezKS4Yw5tp2BHUqkYyfbHkgMpUE2XnpvttDpm1Xoqz3jSt5zSHAKJUVaPFQ4rV79RgNhKwm",
  "key7": "2g2qcfG4P4DkLvBitaWi4cMD4dm83BsRv2K1e9GHeM2k22iHcSDkEQjQU1kjcPhJNAS38UvhC33bNndhZ1Uzx8TY",
  "key8": "2kibCQbFBPFBRf7wj2ouxyqaSQXmEi1RYy8FypAiLHAGwyc9Zm2Cfr6vsxBTbfCuvrPeQX5cEvQSbHkXjAYo7P7y",
  "key9": "BdJkRJscjNL1urp4XNj8e7mzUVUztteB27MY1ikcqsUtZ4nKk3hSQVg8rZWnZyAxiPPDuvBkK3RNG32ePrJqK2t",
  "key10": "3qJkBTCenmGV3QB4yppA6LXA25fX81241oHf8dCpg5V2y3oqFnegju4ykrxtqHC13nPHw4gcYWhM6SuF9CME97oL",
  "key11": "45HU7ppPpRYmNGbVgWHgF57Eq9usfovv8kShuQNV5R2EwciGZKctL3n8Ew4kJUXuHgRYKDq3QgPwm8YRW55xaEPV",
  "key12": "3p92fC4uyZsPmKeA2ZNQgAwVDWSSMHAqgbffNDxys5KGnciupqFyzR85D2AEU2uNp9t6LinjGeoFDL5k1eagoRfe",
  "key13": "JYk7GoykEKDNZUtFkUBwcAggucAa3ERQpW8JQdD1suWLjHBjy76JBmgEcrTHnXZ5wN4Ehr7hv1MEUPtZzKQDapa",
  "key14": "4SRGNXneo4dTbwrY6YkUDB66KCt8NqUGQJEL72br31ngwXdarXYk9XnvGenRxuoioQNRSRtpHkYmg1wmWYndRyzw",
  "key15": "o8fn1xUB4tEZmXcz1PneqGmk2b1TSzZ76BGtVAmYtEkiaooiSVKuQ2W6gEY1kL4jVosUZn7E9yU3tFFcAKCgqts",
  "key16": "5BHWZrCcznMJGYQ5A73d8KyrWwmJ1WXbSKugkMSU1VkBXjKh8JKsszYkcttnf7p2wvuYdnMuGC73mMWyGePAdFzd",
  "key17": "5SpaXwfs11Eoirrpk9LUWN9yEr3Jq7ffhBZZJstQwiok4aTzXC4897pYDEwrkBs3sYxYK78dyNve4f1dRKmJXu7V",
  "key18": "3qpeYVEyUjFTz7paUVUFM7qubfZ8Nb7cfZDDvqCyc6Hy5h4ZhcLiiJTMLuWBLc6gnXfTv1Rfu2UaUSNfFJMMo7U7",
  "key19": "5nTbGU8sHrJ7PCFHRA17AaP2u7FnKdx1LmkuvdQmDmqX3PZvFL4S3NuMF4TjF1zbmoof6zj9gwGqMQQrGMWkKnKW",
  "key20": "pPpDPUFNgxkuF37NGt4q6pHTkVMkusfLcQZzNXJpmpnW8ipBzRmLLy8m6XmasxoDsTPRTMGxk5b2EWDQntn4dtX",
  "key21": "4vRR2ZyB3StLmVQeGNSAJDyZrYfADKkmteBQwtsxrH6PRR7AJQPpko9Kf2v6deLLvgM6wKbYht7D2z7DovMhQvqR",
  "key22": "3qZFXWFj77jgvsZjbAqgPgjcHpzYLWbHPDQuBuu8HBh5Gj5DeoBmyu2hCni3fnhTxW8bbSpzv248UirF5UVF44Xr",
  "key23": "4F3tbkPy74pgMs3SLBuCF2wEHEmUHxkFtjuNmnDiv2rtqBatAG1znuEAwXFKfP71J6kR56KRbJXfqaoihH5ygczd",
  "key24": "3kHuxSDuyRMBCi3dbseS6FKKf6Jy93bCxyqnJoDLsc4fiyiVtvM6eQ9cg5iDCqmymCw8PWxsrGKK4ftfxP4ykQB2",
  "key25": "LQpjmi4KFGtrUM75Sn5zjpq4wxoWjz9HyadQBz8zvX3GivV4jBD98Kp8AztGeDxavjqKTdfwMz8Eturm1JWkpG5"
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
