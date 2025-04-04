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
    "5rjN2yW5STRhoKJJdFuGdXnHPF5BUgtfNaCsKhXx3fRYbMLvBtug81LnBNHRB4G33DicBgwtVz3GQQdVFepD6c9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GM3MMYuHvyvyGjoTMXhVEj5UdwN67rFag2mvstn3Qshbcq4a8rnk5UeN9xPfNURKi9q8a7rdsiuNFBNG1Gnh1dS",
  "key1": "5jaH18dL4Bc7UYrTxVotCPBcRhMnEthKVRoi8UrD2WYA1MkPfAmcPkUByWVn3q6mBdym6LXDznTwmN4dr2qXoAUV",
  "key2": "3orV5syGeEpAyVo5rQsDDh6aWUEuduzmQSGZT5Ri6kauECTrXKabpcyQpjSYydrZYQfrxdbTU5AiaqquDSJPZMKZ",
  "key3": "39LnJbWYcWfJxVbPWf6x4JVcW544r1vtSSH5na92SzegfWKPxrLjZbk9cJydjmfsaZURuLwfyPXaBrZYouPufaEk",
  "key4": "3dGEvYqdzGp9o7caUMQi8tHjb1782DtpXcvt6Dv8LbFuQQjXY5RBxDH2j76NaPyFUApnGdobK5Hz1yBGAsMULfzk",
  "key5": "31GjZUv1oGZQA21qd18GHU3SR86PkPJCxnoszr7mPNGUHHvnRD9jNdieorjds9UJVXc57v4qLp5zPgSh3bQ6qL5A",
  "key6": "4ijxxcWBWH8RcBh1ca9SbSXBYLinPqBY7SwqFcBJrerPcsofRqfh7y3pZwdC4Lx9PAYse5hwJZhGXq5q8MRbVvDj",
  "key7": "61oCtQ9FXhRUCgT3YYraaHJU1SDARLfVkuu6gVZy3XBvAb23nEvbamvcTPRvJwtRs1mBwt39ARXJFzH5mGZynoU6",
  "key8": "2jxzH2hREbExMViJUYL7wqyfpqQyuHqSv6Tzk6hNphwmbbP38BtR7vLRVWUEzCfAzjq5MAXHANKDxrszaJApoT3B",
  "key9": "5GAmA87fZpLV5f9HfExDbqxf4kv1WAQSR6g4F5jLNdY2M2RBM1nqSg6wZzoLGgwWVcbJrJPVtmBdMTqANz7Azfz6",
  "key10": "59SGCGbY1b9Ft21gPEexRmM1sUeGtojkft97Bz4sdYpetEwYxvsxVWrdEkLmmvbRuoi1RXvhY3oJUpr4RD37zNKf",
  "key11": "2F5KzbC8CupnsoGFPFmxiU1DEnE6GCAtEet5xdGF1i7S7ofko5xt9DcEhFrzmyzWsECZwmzYwLgZTQe8qGeg6Zr",
  "key12": "DZmn9NoPTppWVhECYiFKtEEWSdd64FPyDgE7sAcfVhJWcNGNRAWppefnRYiefKZJzUkQNAvsTxouKaKjUi3rH73",
  "key13": "5H5PjhwtcpEHrhi9FfBKZnGzh1AkTx8ujaD9DSgTL3Di7Ld9dtkXNhKKRXj3eK6Ww8SwBG3J3MGc8jEbmpQKAEAk",
  "key14": "65J2YQo2AfdqZZ9Fs6dwHJwE14xXZqABdq569BsT5nFEmvzENTErqtxNHJeRwdQ81Jze1LAbqXupvVhkmTibC5R",
  "key15": "MjdJDuKSwbw63zsicFqdSXkb8frJRo871vY6uKyKNKizt6APXdCAjD7iwJew8kycC6ZDQEm2Td4Qnv1A4yoGKxU",
  "key16": "4J2ELvYyw1EFkc2QNXLZ5b5EduU73CDvvqNqjpSLPRijCE4TXUQPkX1gjhwRVgDZUQU8sxSim3oGkocUtQzw3btn",
  "key17": "2X9V453q4U9qwSJVb7XCD4QtW8t1kJvJXdq7SPdV1EGRfMeVtbhhxdRzTsHeESaat6Y9AUhkE62kprudbfjTMpdm",
  "key18": "5cEfHcK9J9iZHFkDorj969VVuo6MoJrr5iLFLSZCHDkwSGVqhQCdduq75xgqZL7APKm44FP41pxc5X6mNvMAdQhz",
  "key19": "4AmRPgUKVMhP2RBJhxXcagxmdjMFG8CWf2qUSm8N38C7XrFJVjUA9GqfDartmjshMwL1FRmt85b5DazkVvWC33FX",
  "key20": "NHjJ5tLxDeufZqgguQHF9Lam2km1DBYV61eobs55VYNXwcwhV1BAQvN2ZxFhHHkHEcZ5jPARTXcsQcoPE1iNvJ7",
  "key21": "3rx25HBMjVSoswzs9pHdTiaVgTAyPSWN5mGvyjAmCfNDhBgtMSLpoyQoZJrnzcFi5vCZfvwcN2stifGPdj1M2crR",
  "key22": "3vX9PGE7752L8Lvzc9ws1TBetJaFtzGPkZiNTdpYq1GYcjhSM1vM1vhesgVU5NH9CYLzc5WPmFDK23EqTs7ggKcz",
  "key23": "HAFkkUdeHwcumpxfzgM9pdq5B1kYFfxv4CL4shMvMnJFN6rdtGNsfx1CyBRBZrZdBfHPrWzRstCCr28teMM1Lrt",
  "key24": "4F7T2sD2ZxJ2M2dj1mghWi84yrmNQZWumfDqNs5beReeDQTRuE3TWmQXoKU1By1RXykTXbFG5AwEg9xPYBSnfGeY",
  "key25": "3tkwb59gJJcKJ8DaLBmhzAkt4Koa2UCrbmSZw7YopREaW8nmLUa3aJdA8B2EWZ2zQooACFGvod2Fb4jdXPMXwJZk",
  "key26": "3PETz62EJ6qqbXRnes3ApiYpYpQMyNQinMcEf2nFqksmBmQ1Yo1dHwMeHB6mygoEnMvb8eMq9vRf8XUMmAUYzjEa",
  "key27": "2J41bs4Hb5WRgz6b9DsAyq24tCnZEv7bJsbHWaFkNRWnCzPXjZ99CChsBfZtfhkifmRwXkq7jyEXCTkf3NjvgoNA"
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
