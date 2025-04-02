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
    "4Sqjiq4mKJLKhmDSsLbbNs8xSuBjKQbtZZ934tfi591QZ6GAqeNLJpiHhsdkFw36i4nt9PiuN4CesggAZyY2HfLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m79xhoGpJJa1fVz71DeYcr9R4tu2crq3YJid4XVER9ZqewEaSChj4oEFxBT1sByTQJ9ZNdUQhG9WahLTWtThcvM",
  "key1": "5QnYakJwJUHkjrEjPyUwmAFELwG9dZ2xCRYfswTzpnHYp5yrnnKKgHCpe9HorChEJRnEWqNw5Y5ya8d8Hgnidw9m",
  "key2": "4Z5GKSHtFJ9RcANEQHbNqrC7tap3qvZw5aHiKYQuLaY7PTRi9aj1mvKt7MqW5z6GfAdYxy4QzMsDUUPSraBczi85",
  "key3": "3PyiagWaQ2fTssTE6GsTvRADqJCTESWbyb9aMSKGj9euMQTm8BRyp8QYe9xpbBmNPNYsxY5zHRcbjj6e3QnPxpHC",
  "key4": "5Ax6z2hFLs4uFnqe92dQHzshbvaU7iE9VWQwMk6apifpdGJEwgbej3B1U6ECPWvnPrWFYS18YR7XnCPLmiVCD9iT",
  "key5": "4svyAEWsqag2xfTcjrBbgMXpgwTnA6ePUcKVcoKbyaCvmgBv1QDywcQpVxCdhwvGHhtVAeQVxkFQS9sypXogUmaF",
  "key6": "bsoWDQXJJmoPr4ona6GgLGEjB1ZaW5Ac7D85WXDHjRDHPRgy53GnwjoB3T45L2aunvY1Gk36X9RuqoSkaiFiQNq",
  "key7": "2rW1JSfGZyGDUHxQBJZ111WKMq4SQ7kyV75CEoUhPuC4Ny1fLGn3ghDxYHf37rkV82Ko8gsejhfFJmxV8nbLfQFz",
  "key8": "228NHCYpRBjgmHLVHGwkPiEiGpwf6eq5HdXaTyUgAy9AFEKwYn2W3ACK3keQXosLjNdwLDrTwJaHMNzAQipR1wE9",
  "key9": "4S4biBC4kyizw6gAL6ZbcErKoB51UWLoqcXk72A2N8kaZp9DDgQx5KveedfjvFVfn6KnLJWEAuG3UzyPEZDqbuqb",
  "key10": "47b7fZURyEykYvQMyhjhSE59umoip84634pAnDei5zWcwm5XTuJ6hh8sujxhwTp4qhNJTdE7LJsJsjnGSUiQ8ZZj",
  "key11": "dhaEmHEcZ9GQh5P1aLGwzyWR2kQfM3fndtJ1t1Zj8EMrqZghQmUQvsaWmQmMB8C2cYyufNAJeF6Q18saxaDNf1J",
  "key12": "4XbWYqm9DBeQegPQyU9c1wZ6UEJnY89bHU4qrddZjjbt4n79YmnYUnDFMWRwg2yuKfyoSr761Ag1edWtutHLDMjM",
  "key13": "4p5sbkXzyGhwb5owN3DLbNCq63KkmN4i3vjDfPKzqQWkzPNoLHFXbMNzcy27xDHT3dj8rnUVET62Pg2qpnzJ5WZM",
  "key14": "2UrMYvaCriJKTD1VE7PbSgvL4EtxiLXjz74Z5RaCEroGz6X1wv1KYudVMAmR1wZv1zd5VhFiCaVCmtiySn2k4AZE",
  "key15": "5ACt7xiV28KwnYEqqWPspbkj4JWcYoxEGVfp747PRzR4jF7penUBVYgUfBtz1AtHCo8u6Q5oe5gcFkzkmyYT54sV",
  "key16": "ofbFscTaSy2w2ycxWqP4tRgXfaBa8XnboMmMAhPi5REF4MDm4AxGbUdqtxGQFtWX7XHWhmHd9AnN4yDGvnHC75e",
  "key17": "2iekF62faxG5BMbFYjjpCCN7envD9JGZcbmGct4QD6EnwxedpGWCJ3tPPELPaRUVSKRAmuDEKQQ1PDTcN3DW3PsF",
  "key18": "64evU4KSjfi4ivNvLbwqtUZ2DgMsAePUSfgcGxgtW6u95CRSjcfPGckJdbhCS4C72dQmi3TFSw12pHADhNFZn7pc",
  "key19": "2k5NWhNCsCh7nxtarxKpJj2tj7N34YX8QsZZgVRCKL1452tdJodNtDZ43NnQEpF7jVahexRQKgg7ST4MGkYPFCG6",
  "key20": "3JGNoE7rx6UvELRoeFmJkWwVoPoXDcnVe1NAWvhGZRxV792NdD89kdN59ZF8TsKemrpsxrWf7g4mTGVgLCXQz9kZ",
  "key21": "mxHizDchHvyP7kgxyfyW1G23mt1n6C8mo8LSaABPdTTt3y5UxQFas7xVAWvYhSMxR5LMBT8WZmrw6MgWRmsmpTF",
  "key22": "2tGnFjzjV4GJSqeoKP2f6HPaqBqjmQEqTYbaWvpngTex5ey7xfuYF2pPYmsxNu78T4eVEZBVK1gJ9d4C8M3xHG8M",
  "key23": "3qDWSzFQcgjEVfMxLkNtBLedrxT4Tew3Nj7PCdvNnJ844e5sAUoS1ThFH3dXq6Ghx9PivAAQFuuDsGzHzb8TZc6i",
  "key24": "3owCyuY4EgpLDHoRqcx573uvPitb5HoVJab9ZhrywYrVyah8JW2Q1UWYecnMp6NHKe6c9TQusuDi2ezo8TUqqdTb"
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
