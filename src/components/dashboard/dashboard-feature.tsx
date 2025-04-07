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
    "5yT69gPmhp32STikDG952S6HnwU4HTuSZxvSWZL6NxjToatUhmgcV8arnA6dSki1zj8AtXHbA3vSHvLjT5HeHHkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NFAtvZuSuN8zVivZbVxsfSPB24MQ8kcYDGbqSYVR8wJdr9EzNQKraFecvVJu2EeUdBCjz3SgRHfY4wtZXbftGUM",
  "key1": "4sq9Cre2PfHbMzodY6YzwznyFvFHkqAc28XBrtWkQasXHdTHVUSMjvXTH58WcQ8VXsboDTjLbXgqxb8Ka1VMBKE8",
  "key2": "33NSo4UWCfUesprfkiS3MfBbPuybsCwe74cWgrkRWhMLKCnVYTA8X6YxhritNQRSpQAqMorgnWYCUCG6Ubc7k1Lk",
  "key3": "d6LZzggxGrq4v6aytF6UsWfZZuaLAbFThSULasQS2DFQBcFoibUq8pG9ykd89BadnDKF5KsVd7ChhVLA1UJXLFm",
  "key4": "36Kiby537j8FkHTRDnMUty7Ait6o45jeR6chBghQx5hggwfJWrpJ5q3EMjQhucAYTE4wuvuxM3KoxT3byc9p51Q",
  "key5": "yPmrEw3N2a4E42pMWCWabgR6a9ZH29gejE6ufgzCjsgEWTXsjfSnG6V8mSnYG59LoCh7XKcwjYeaEjfgPhffXxs",
  "key6": "4UiBCezFD5zdicpo5MJ8SsWMgYwYHVqmVJ7AANzrXAdC139pbBFCEghVHkeboSj9LS1E8JnouxX7YSi5GLz5htSe",
  "key7": "QvbrWxZhKFzbe5nGrxCM6MAdLPPCbmjMvidrC5mcTnkRewWphzHi3R9STgyaJHmQ5PEN1HjgS4MNzX1nhdU4asC",
  "key8": "44ubL8T93GKgmQzWVR9Er64DUKm2EvAq1CjLsYxjB6VjL621g7DcST8LSdbVscVo3yWFbKbUV2A6nL4x2WmGJm53",
  "key9": "5pxnDGkc6J73dXqnWanzjMHzrqMRsHcoKSTYnpL1kyyF2NvzPGJnHmTubreFUD54Urz6r34fHwXo87VNb2pwkEk3",
  "key10": "ZtZELDonfPg8VBFtJ2c4jXiettAWMKeYjdt6wbbLDFLUk98GYzuEwqDNcSAgppNSB9bm6LfkQCdhVsEdpAvU9um",
  "key11": "4YtVEsqjUzSTVAgREvFVGP4Z2wkJ7dDreBnzEVDpxG1x64uHUiavgG9TBANFLUG9oby2Jh6yRU9kqStTdKa7grVc",
  "key12": "2sTPSsRjozKpHmYmRLRCDF1cRourdFJCtRuCxpDFQBoh1jvsTGP6N684gDkmnn77S8BA8LX5MuRND4eC1u6NcpM6",
  "key13": "3mpB58kuAfLrjEEegLkUQVdWniXsGekZ9p5VGzkB96XkKh6JaB6gvVQ9rED4kGYS6Af2tk7K5FAsHfJXuRpVNeBC",
  "key14": "3UHALa8hb4mnXFdBNSX7RsS8MqrTE2vo1pQAJ4VFTGMamBtvF4Nc39u2b9EsWbpaYtpxvdPVQxpKxPoGKsJM8eAy",
  "key15": "4rznbF48tummVSEKb1VZtc3c88KZJADSw5uLMpffXCDDdMamHcBUnm5ukSDATssZeMvRmZeRAjmQAdcPw5FhfRwY",
  "key16": "3cmoVxkvG9EFVybStQ7xDFBowpu9AJZ8bhs13KPnuaTD9ES6ndg8A9fmNgX6bKcGhWJWU8EG5gDSYrGZfZ2jRRkH",
  "key17": "4c4C58JL55dnWtDvVcpXrQqwBDL3Q3SKUFzNHEJdZiYsx8qb8aQkdCQxJM3FzvLzVoawMiTSKNTbfLjRmwZMszJc",
  "key18": "2NTvsv8gRMEyEkquMLMUaJoGTP8dsos9ebCF9WwsvqCiyM9bP73vfbEDSda7xHAMYuSGRcytxJNEpJHbnEU6QKxF",
  "key19": "45bw3XYEsMTpWyVXqMbnZZXyycf2Zqr2A8L7LVeePNtt5j4mUno92E1hV5vGDRVv9riDBqiKo5LCMzkddzPdqKXc",
  "key20": "34Yhfuaz3RG42JMKJ6rN17kAQd7hq8zR14YXSAgjtP4es4Ror94cXk53naNRw8KGEeUboTE4XvgAizT8Hx4cG6nc",
  "key21": "4pED4ZSsQvmTsztG3kNqMHeKb3EbzDmGcLQ21vKbM49wGX6GBwcEHz2Kw13nDRrRE2in6DTJX5bBPWjYSQtHCTSz",
  "key22": "4PscwquBQwnJbAFPPG6fKKMjF65ZU24aL4BBKfAmCm9v7VMuEgy98TB4DwtY2knShDSXAK8SFJSqnUc1g8mEqnw4",
  "key23": "3LKFNKXgbkWQH1rXoQfqeCkC7JsjLB3Lb1mv7XdKwNDVWWYQ9zBK4MF3LmX77ogXXryjXc1Qi46QHaFkNcv25Ug4",
  "key24": "2DQU4c73Pg4GB6x9yBy9iWuqnXr7M3NYF3uyw7txZ4KBYn3Abkwj4heWsccEbWvxbxPyBPdXqyQeh4UaLNRjCuiq"
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
