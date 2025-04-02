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
    "4bxGpdZZjWcoKzjnNcDf2Yd8BVHNthTpejD1EwZwM6HsdbCw1aSML3a5s8uRKTRkei3NZdq5awF7V2sZRt11wUJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UKHm8DgxngfabHvN7Fw6AM4qvUhhK4uuRYxwSSnwqTisPw7tXMYUVrd2iZmuQjG86ZPsKvBnjgyoXaeusS5S765",
  "key1": "5UCbvxAYTzMSAGiurRsHJ55vYAjKwAgh85Cei5MTtoFNvfj23LSQ97xESN2BJEnRUrfu7fHzaKVLTQEzrn2b9fB",
  "key2": "4F8k5gJWwkop9s9ZxF7PYjVD1LMg3b1XX3Ts51TLBsRzNYYYfEQWZvc9FfN8StBLTmLLMzgxpSTHj1khP4xy4Kdj",
  "key3": "HD46CRb3AreQQeFyRTuXuxkqsLWiXRJ3WYWUPC2hMh8pSs943R6N1VrWHuN9Pn7mquJ8oyyQPC6fWa7KetGcMiH",
  "key4": "44tvgBWidkdzUgBZYU7T3Q3apdkZeLLuFzQADVc1rriDxuQ1yAvb5N6FQkgwoANzm96ZVHeDABmbePiCNyTptDvL",
  "key5": "4iypNjXFnG5AZ9MqR4jpHrZv4DcMsymNFJVenskkCbnoRnw9EMa4LcpUCPDTvyEoFh15J865iFAwbJXgn5ExXnrL",
  "key6": "4vjMGThK9fMY6NxUjh762jp56Sx3Pa4heJnY1q6ug8LCh4o2jmSh618DdWux1ahrtaQRBrXLh3BXiXyRByaE9XTH",
  "key7": "5dC7LpAZoVrctwXs3Tk4ACTpzKp49B3Bvrcfy7DqbJSZkvVjCineEHscYsJydQcyGRyxRmbk3eE1pipsxSogJNBf",
  "key8": "whZLuCtKrfeu5ffzj92wwcREe9AMvWDybhAcv9ja7y7BnGtDe4GEh1zyLN1GoAmti3wwVBd9R3Dn4haA6saaAae",
  "key9": "5TkX2n117DK3QxH5VFbZnGNBudXq1sv3UcnS3v843yYLn1VZR2hjqxitFZnXaSyPHiWLFeYRtvgJM3E8yr3ZgFpe",
  "key10": "55hYmVip7DLjZbUqkCANbWn8UybBKeKVfahXFVbu1brrt4TCtbZjHoBpwMELsHz2bjPf7nJDgPPJ9yzV2v1rVwMH",
  "key11": "2pipHb7SmWToJRT46YrBTZC4JNqqRV9wNXwr3zAPgvsDSMWuwPUZjqsDb2HwoDpe1jJqRbhDQJ2FkTdVwtU253Bx",
  "key12": "3H6rkZRtZn4WkvhKtNd5YnmEvPv71y7uBGY8GAf52NrFtio42qRY5SaoeRrVDs69RAEPMikkXLXV3x3Zr4oiQ1hp",
  "key13": "3QhyjaUzoFyKSLpvDbpz2JrGiMDpd6XT8dUGKdsBaGEhzBxTHWgKzkV48aWiUsViEE4J5M5fBTSVcE5YuPTCoe6A",
  "key14": "21EMgGBLnk6kCT6Yxf3MkQ7q6MkwZf7DnMgc6wNDUWB4M7SSoVVaoGsYFAjxbnh8ABv1ZEcCkFdfAwmHUHKQbXSB",
  "key15": "uxjHg2Se6nHNRmusn2J9AJjHiLrvbDWkKvA9cgMaRe5qn5YaitoW4Gyh4TkRdtuLzpVGNBzqsiZVg9QfsskYYZH",
  "key16": "5PLjEfPiJCtFyzczbGj6fwjeKAqFo9ANbFYRPZvyqTBzyUpxGXwJDU146a9EPHTAhBXvbeEc1B6yyJbZdpkQqgRP",
  "key17": "42akZqiEQj6B2ajVfchArcG81HX6gfFAK1CbwtiCaQsVDyHicub7e4Q7PseHh5q1ASAMhDyDF5Mvsqg9tHnCS2vR",
  "key18": "2V9J69f2B64TrHBA6nAH2JyBDZ4gA6o3gFcBCLfbVt8HEabW4GqW8o6sJpZvqPgKXjGxAZ5hckHH8avUCgGiQgQN",
  "key19": "3teMVeajp3z6n2vCfRPxNLiLDSHJRksun1UcLoozp1HURMTa9gvHquzQhB6EwW4trFWP7j1cZDC5gnKffX7PojBS",
  "key20": "5QEMAqL4EoEYfnp1mRZdaN8muiyhVpgaGhuSCAfDLbGM8XaApUinwuUVHMN5nmo4h9SBjfwQX7oJQDYqzLQa1JQ9",
  "key21": "3Y2BJQiKVEMLdzMoGzgchcuNeU1KR9Zy3BXSUuwSNv2MvaCHihHajf8QussUu3bWd8Vk1U2kTCwFGGWdc2mkn7tz",
  "key22": "4aRMXvHDsofoP4R7aDTMYumEGr63BNwif4NRYiKgSdr6GzAtj9hkdZUgz1i1ArmCFFXaT8QkToAFkf9TMCiop6pM",
  "key23": "59dXaqvSkgePaciEJ5H1DtZVRWju4TNDmHugUhGyr4iAmefq8ciJcak9K7UUTX2gC5iQhyXdbdpeE5CL1Qm5yyYr",
  "key24": "wa9M1RGGcPuYs1wWtp1ai44W7sC79NrvhEdtUgC8rGHpEcGru23KEPsKJLGr8ZtZU4V747ncLi7Y9wvdzQL46f7",
  "key25": "3vS3jSpV7owQPhZscoYNPYQJF7sRuWuAeDH1u4F2V2ZYcX3fuvHn4rhpvrYv9GFG8f8VnNQ1oKW4ZwUAVojJFhiG"
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
