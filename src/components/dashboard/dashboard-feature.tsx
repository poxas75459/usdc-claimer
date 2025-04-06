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
    "uJi2jAN1o7xQ4F4c95MkFYhVSxMAUpexL8WUok9zv22qdhudrhKFDyDBjghTjW2QTB39DsP8Bvv9iCoH445bd2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "284UTSosSQEsU2tQ6sUQFCzzDqrkHBrbTLGSwrWc3wk4JAM1UYGMDfX443X2je5CC1cHhNoGeMkXfMsX1Weco5xh",
  "key1": "46SyCMpLQkCuvhyPmX2F5dn7ZnPxFBRxDpdWkBP2gZL59W5qKx3n5eFZU7Nsb1X35XPKZHp6iZFDLaRZABpJTBUS",
  "key2": "4azXVYtv3sbnXgvDP6PobdKr4foPaJjGFCcS3qSeWCtSWvKBrgiuXnXzum5WwVkNfB7xPf5hU9K3ueuyXLGuRqaW",
  "key3": "3qc2TSSG3vuRHuQkoru1ScZSLi2E73rm65B5Eza1YCqCSb8LTTKeS8rW37miz3ytomxo9vC8fRdhFLYWtJrDnHRS",
  "key4": "EdkwXzBsgUU6p2Emaik3EWZoSCwhA3T39oGnRBJHkJiX1v4xpsedCm8LDk2x2GdEC9vUoJaxbYgY5P1s5SisUnF",
  "key5": "4w2dFkKa6mU6VrZj2JC5C46sJ4S2ZdM9Yjhe9J44qjBRfEcmb14EeRavkftow9Nw5u6gQcdT8UKW1Pf4PnCgw1da",
  "key6": "8CQjH5ZDUT59qV3UdLtxYnSC7BLrVccD96RWShYq8xoZMRbhWuYa579jJMCsK4ND1ektUdKFPrHMSa69q2hq2Ba",
  "key7": "5fn3eSWen2egYSBjiF5v1e5mcceh1UBdKJi4zvTrCn5ZD9N2HtLiHQvzDLV4DGRH5b3eZ8nvXtnMhmQf6G6p7WwS",
  "key8": "nsCRkhBcGphTYH6Q8fhNSBsbGUYTBQqc4gMT6mY1sRtWsvtpXdR9nJFUregrMbznyW3FhhY3QzxwcBFEwFPp12A",
  "key9": "2mTvXjFgJGrbWkRt5qMNjTAaNb3wGeyjgjH9ZcM5yJc8nRX6EDfivTfMrBy9RRcw5hLQpa3J2EY59BxB4Ry5VfxL",
  "key10": "5rxFbZMogHHZqK1y47eC4zrnaMsUDu3FoVEFLN5KSGNCSaPR79hqVw6p3yC8PLR64dk6drLEdpWA7TcJx5amJwBa",
  "key11": "41mKboowcXq8G1MuSx4XpRye1xvrWnFcWVgPSGxXBNdHZuqPLe1wYAE9Ez3cmwtDG66WsD8GMxRib9NaM67YHU6Z",
  "key12": "5Uj9ppYW12KpT2yPEz7fTrmqZQdbq1zS5QsHHrMvDjfknMZitpqnTaS7Nx37LrbA5eLHfawZ7wvEVRepZjs3xmhC",
  "key13": "5f8FGqnjBEwv1ru32xcK7kWukX7KPNoxJoUQWBteLD3E8BdSB41XArWu4HGp2v2EfjBHqDNHftqgQvDZ92MxYy4J",
  "key14": "7JvgW8ew7mk5p55geAU3mFrJcivR2jgVU3rYRsWBBTuLiUxtgRraW3QBKvyLH6bgTZi2zhUFsJHanz6Pj8WGd8x",
  "key15": "3qj1DVuD9HuiU2DsuzqioRPS9ijnzPo74srbm8HjAh5WxLw3uL6a1SoqKauTEQYui3vNBNBqFE9pNpuPrf2Y6jZU",
  "key16": "3qkabtag7a554UM7hTsxSgoE5WHerzcxfRmiE2G9Ywm7FUD6L25Rw7wr46bQKqPvSM7tcMKsD4bS8qfeBBcfZJkE",
  "key17": "2gNCgJp9d8ZW2DsAYjYr4rw5fvDp1KtTgawRfVrXoiKMojYAgCnEqPE733mtcKTz7cMxFYN78z91tSdqQZL7vnz4",
  "key18": "3MhBxsPaY4rHSFbb6TCbo36oZr3UQa5ZqBL3ierPeAxbdCN1tzir9vxfV6tPuWYPMhTmzBpatZzvrN5x9crHAQXZ",
  "key19": "3YBRckU9cQ2YULeuiJ7vA1EwSGHY1bmXkzcEmbQi6vvipCjNLTMC8XvAzsf8ovABh4erPBRxTnKfFqxLKo9TYpwh",
  "key20": "64BbyJnkhM7Lt3FUagtJv5hRk6ixa12ww7AMQTxDm92q6Htqyzey9xc79P6BY3bSjsnwCXP7X9oK8BukPkCXS4y9",
  "key21": "4EBdBAqiYAy7euBLSCbGbBQYoqgQseMhgSsM9VqRnmqCN4AnQdtLH2JVEBcqKQqBCVj4hZq5w9WXGbB7e5i7CPHt",
  "key22": "3Ge4KwiizJrcobpJY3fiYyH1vvtvGURYRXfxHrwpU1Pr1xTeNWcs8Lt31Pkbt7UVGxYDisA8Vwj26wLz61U15rCX",
  "key23": "3ApR936znijbDXbUJ5JUjmM5pGqjYrj68nwnasjPfp3SUTEUR96PCXqqobanZ7HbwrCr88vj5RirQWU1ASYnXQh7",
  "key24": "573pxmW3ZRQgxUWS2MZmc95ErnevQEZtPC4MZDqwe32cTNGCdnPD5aTfY48Na51DBBBPLXTzzC5UoAcTcEMovL2Z",
  "key25": "4Xxu4ovZYanLVyyYfjD8gKJt35V3ELH1AfrdaFSZ5sZc1zFrrCPyhaUEbAck2xf5LuojETs7AX1c1qXq3vPVDuqK"
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
