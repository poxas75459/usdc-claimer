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
    "64fDrSdKG9zji8CW6QhAJq5JYKAMeC2dcMdENseY4ToJhdPn2UDjjGcs6SFH3F7GWUJZZFApkPEv9BsGbC7CkgMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BN1qRVUqZWY5uUdZSXNc8zmoFGPBNkCZAVC4d75M9r6mrWG7iKpRHf7KzmbzRrvVjGJFoQTkNHwj27BeJ7dZL1n",
  "key1": "4Tf2FMMYPGYcRdQpAaCopvV8cX7PoQc5pdtbkU5PtJJBCMDDQxUjEB11dgryc3MCVoEVFUG9kn9B2vLXSsExMqA8",
  "key2": "5w1ETESbU19D5QWF8vxRsqbCWLdqtFoRvwP7oduUpiSN8Dp3a2xkAgAraSAMNZHPA4u2p6rYjzaZqxE7ruvnJJDw",
  "key3": "2pM2Mw5FGtxZAiZfeG6ejuCskqrQqQDR3vUKgqLqXWycPC7MXu78cBnpK46m4j9JpTEE8RK6M7u7S6ucpt3KCnHs",
  "key4": "2eJbiQt4pS6ttcGN6H8esf2DWwoPbW1sFwgeae3HmEyZNfsPnZviWDVDUzYSUE4HQDSh8pr36GKPGp4emDbM2tXQ",
  "key5": "5ahG1jWb8HqD2Ji2upD9DrfGADcrtgwbc8HWKn9FMx2bwADbme7ojbL2kUzBPoymECS7ngDWhN7CM9Xuht2b4AMY",
  "key6": "SzFzCUEZBbawGLd5PU8XfrN6XTe9qeabeCxEr37LTiDYPkH8kDDRcM8gg5Xg8B1PUPyprVaBWmKwL55EMo8H3hD",
  "key7": "2928kiFwoqeECFtwWzNcu8HYFj88cQ4BB6ZAfsJFpM3b4AFuo9vH7Q9MqWzJ8PorcNSsNepvQYbConPkLrdBDdez",
  "key8": "3paiVkUcf7KwnuhMrhY6vwEXAZHqVcmpehbUJrnt4JZx6odUjytXwntS2yWnULoqUiwM6UzawrpCy8BnPoUkvEjG",
  "key9": "9gwjxZFQq3V6YrMf659iARpkGXyJqRq4H59brexQL8xSAve8YW68eUxJuak4XkAswQ1EUpfUqqw1QqWbUqVh5iv",
  "key10": "3c46r72SpSjJrAmBm7Vs24z5Ny15s9u6reKytquE4VU5gTN9j7qqxDWpVQpnmzfPDxBXzrDrz3rUdc9UDripKbsw",
  "key11": "5BSVqfbTyWBsaksfFZUkWe3MKdqKBHFey3gQAZh4T7pFjRkzNHUpehmniwut59oJSCA6BsyQCszsEJ4KrT83MmTW",
  "key12": "2BHNSRNwwCt6xBry73Vdt4Bx4ex2EUWBJX9a6kXknmr9ibpVPittGbn94Md8xSJ3iguyvpsiyE2vBL3bupfXrYeA",
  "key13": "S7cqsYYMW6UgFcodaeKDVKsMobGVYMsiABe3hjrMFdCuNHPwgu2EPm7kUHXjr8WHDxYNehiErTziz6SZcFSzSPZ",
  "key14": "3x5JtdCFHy3Wa6LCBmCnHRVHPVKCC77sUgYXrtBuag78W1NuGM5iADaiqMdgfFvQMnSCHNMZbzKecHgfgkUkEpii",
  "key15": "59m9cLgAq72mAvDeJwYFqoDYvnECsFQgPhNEkNtbJqPcNE6aGYUkEz42KWQyAyLqxvrFqGn9jg8hL4uQXtY13rjM",
  "key16": "5wwfTq5F9cKKfVjBsGNEvMnV2HBSEZEkQWFdM2LkyFFd2BWruvipQ473PLUJbUyKG8YgXrAjsPmwHhhYYgTDWHRj",
  "key17": "2BpHQHCoxJDHYTm9PSREuAAHHbJWGjc2Ec5fphodjYrT8G3krfFPjjeUuwwNW3rpA4efHzgCSdzfNGknyrRW94Nk",
  "key18": "9Uu35HKWCLCdFGu5nSP3cvT2L7tXgsV4KonsB1FwTmby3TTZ7w9NwaW3o1NUYeHPyF9rj2oAjH1VvzGWu1A8tP1",
  "key19": "4e6E6pVdrJ6Buwicy4aTDMy6XymqunqMjVPaJWhXbk7jhgBHyyRBQR6MQjyiQ8Jj8f7TfStkqF2eZfVah7qehikD",
  "key20": "54RP6HYjyYBDesk9tz35WVKCDpQqZg1tBhzwAKMk7QZTx4hE3rWCpKYWXzikEAgN5mR1BVJiQ9Vvv7EGpkLpSrY6",
  "key21": "3SBNPGpaDfjYfWV9FuV5q5gKpuZLMLzxyTiJY5VUQVj28kbBqzaHBZQzWmrXzpUtcsrmKQQSJKWDxPi7gKtMD9TU",
  "key22": "2zMTsgFGLbrNfR3FFVUimsAowcLPgfYgvD6wK86reWX95VWdsJUqVbjcGFBNpq7pr4YHFao1cyTyTakSCqfWpQxZ",
  "key23": "4HfQ8XFx6VbBdG3qJVdwHLEDyXtyoShY2XHBb2zAmtdeiBoANYmViRGdCMPhfjVmydA5DzxLTsfXfMjeV1pY3mBo",
  "key24": "pQp6WjngNGnMuiZdnuPp2qoGa2F3Z5Ly1WRPes5ZZLcVaUDezUp8o7sPS1CJgQC5eEQgxBXc8EtnV39SfGPHmxF"
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
