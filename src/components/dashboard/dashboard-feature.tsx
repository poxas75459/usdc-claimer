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
    "3L2nWVEeHT49SdnAUX7tXAGY9FHMkCw6sz1J1ZHYRmYL7G2ygCqtQM3Ds3S7i7fZJBJW8hCsb1aKTt6YTG77rm5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PwkHhE9oP1v2iUzNvw9PBmtncz1tJZTHHF7JyAGALqPGb6mVzpnTobCzyAkBed9F7wnbi1bL432oLUe2LXWLZY5",
  "key1": "5chuDpmQ4j9qFFptjeRj5642jtYqspeQRKfJ7y6v1KzgfBtoZgHHnDCFAnKYyP73sY7Fs3VtMnWPHQJ7sqKEwLQX",
  "key2": "2aP71vJ3LBnT9pekVyR337H91EE1pTqxjYmzs8TB3Ei8uvqsh92fu4zirmaiQDk12igdatvqDBZxwC3rw8gahrxV",
  "key3": "2zTYz5wopFCkaL4ENGKj4UafLCv5b4xSvZG1Pa9LWPCuekBaSX3a2tdtkifwtZDxbo3JDqv8nFRbbx7QbrEPtWem",
  "key4": "dtq3QH5dSuWv9yveurYxwjBsLrZv7k3WW1q6A3QT83JafjnTYtDcKggQwrgsMbaTABvsyCwq6XNnQ6p6P4skFSR",
  "key5": "3m3mwM9Fd6BWVpbj4w6coLbmpBBGYHLSr3g7XbS92pZH9RvRaezA5g8Jnex3VCD91dfoKaTMquoxgW5PA6s9NJ1R",
  "key6": "3LWpWXsTa3pRabFU14DexBEBX24m1KoSkbxzkuPbRrsdwGgdoUKvF8pgQcyQ4wS4k74U7WRAR3q2xHrvyGd9KhM2",
  "key7": "4fPyU6FRXjNzRoafViT5cCX53xekRY8gpcyCZcsCtzMUyxiyYa9pZKVWvs58pJNjGmczZeRqTEDwWmZuzpx8973A",
  "key8": "21biELsMDGPCvLSXEZVjtCYEmA9Jh9fvvyr8bcVQZp19i9kYdxJ69mnFce6BZ39R2qpDptSSibxRBNZz3xCuZE5C",
  "key9": "L244smxvuTaf1kmj3Tc4JgnumQsfxzny5ZDMAZKMP4BTdZJxbaJGYEWBkrGVUDNQpCLZ1tq3CLa4xoRs5tJDFgN",
  "key10": "4Fa5UBqvTA4uVjrFVjspMYNRe2ZsWrNaSsrXpf91jcSQXoXMJZ7LBb6eo7KEdkTFnpfgx6tX41ne9nPe51xMgvfQ",
  "key11": "3ao6nDRZr7eMmfavJ9yqh2Uc8nLvGrtX27GZXfR9Ym5S8DtsP9QsQ8SQaW31UsYWv3gbkbhqWD81ZGtTx81VCM4V",
  "key12": "WQq4TUauheA9e5sBiisbsgoQ2n5NjowvzzhSkc8pz3dCfx6Hq63RZRQTaHjxQkYaq3YDphXTo5F7adLoAoz5ikH",
  "key13": "4FQngj8RCz8dzA7Jnm7bF9QhxsJUaW93bJtjwJJssugsxz135bmHKkxCs17toPEWVoUTB61KGyhF4VEcrPfzP79F",
  "key14": "3CCS3QgZciT6v4gJnGFXJCzW9bSPucnDFsZtnovEvEbBBazysX4WYzkbxZnDdBYB8FG6UN2kHu1vuNnvt5qKyCXT",
  "key15": "5fECrRMKJ7CezYtcJGVthuoTvPvuCmKxwBrtzoz5jRsgWYvFCvpe5cXmkY88JB7MA5MJMuugkDQad8VKZaLzcnGC",
  "key16": "wz92F1LcqRDWVYeiVQYh16VtTpiirMJgHAqRSooYaM6sVComoeAWvBZBTmJC5cHbAaCKDYRuiThKTZmBPisZR4t",
  "key17": "pcE49cZcTHjM23tvYrbW2ubTz9azATPp6rwdnurZVco3pMrx9zjUMNTDzNgG9UwdZmQcQs2WARGPMAyU4ntjBCw",
  "key18": "ht7GGtvMfqLZAyuvnADG9HsUwzBd1T31EAR1iq7mLXjnMRpqKDT4irXkRMjtSTtwbmuQyaJzruQh2oRXs4a5NBX",
  "key19": "3FmP8caYW91a1ATYZmHowkz1GGzeWRBNP7KwMCcDoeiEo8TDbqWRakuJF6CEPGTYuWn22Fw1jRN6cvo8JsJavaX1",
  "key20": "2ubEQRvKbaofzfYWaZvyfkF17sEHg7tf3njQ6MFYGALoZm8hnhgpusMZgufY2NbZ146dHnqUyWxq1D6RUFk4b2ho",
  "key21": "2gBKjmwRstgjY9qrCnwR8h2vKxkNgZKVMmoHMgh9gp8dyTbhbAu35oYWnPgjWB3YeNZBCG5HE5fbkZNkkN8RhezZ",
  "key22": "3MTQm9bCSbequphVk5Tg6pVqn81mmsyTETH9p9iqb9S7tcch9QbretvtGPq6TMrpxbvoMojkH9829mQnvrmYXnYs",
  "key23": "iPBrFrSuQPF9SgjYT49jq9qToJSCsXvFHKPznNP58UJZo9k7orqeZjpKqvoa4wYezgvDExr7to6fxgyBQGKzWMd",
  "key24": "57hAFE9kCLuadRyKdRC2vEriBwrfkCDGXwjKvU8Yde7Lnse4pdsN5WkJhbodKuf6rw3y6Wp96Xz4UGcqW1BoCLUk"
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
