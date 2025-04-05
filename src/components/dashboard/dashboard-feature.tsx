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
    "SmVeUBSmnjkyrW6JcpobNRJfWuE7CzPgirxhaT9gbkEZ3kqak7i85CArKHJZT6XJpMbgqTRyr1Zo6rEoPNnUJz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TF6jdEcj6BXJ1EjZ97Qz3dpcqWfUFXhfDUEEV6PZxZ3q8qPGnkZdFRAFcdL9c7uT1qPBMCY7fjGY4vKq4qZEQb8",
  "key1": "5nRJEHfrgrJL71zfQzRdajXPGgYqzyYGYwzDGnADjwhMH2HHskUCad3DjCzGT8seb9tEJEguKnkSKDg8Hx3FBDvv",
  "key2": "319aaSd8poUbSvAzrfMTs7tFmgzonfiDV6XhJ2XyYQJQwNWWnx1SvYKsjUG39L11216YvUdPkKpkmW41uxhzR2En",
  "key3": "3nj8fKVVNJcUSEof1vNXTGhhtm1LvnaccN3VUH6XYnL4mpHhB8vrkLjUae8fpcuetNbWexnYzj5GZ4hVe2Djt5f7",
  "key4": "4jcGChsh8ghAGNKRRnF5wx62AeSqwfpoH4fDL8GWaY8UHcpYrTQLV3x9y6xULoKs91m7F3hujv3Cp57Kdv8x3xsx",
  "key5": "2FWQc8az5Qvvyb1NKuY64tW5mXrPXkczw8XiKkRU9McuYW4A14a9DRnp72WsgmsqQZWvcUiLKZSTNs52FQ6Gsvr",
  "key6": "2prWmsU7a9yS5NLDfRvmTguhTWk4aq6Rua79dxxHxAZBMZ9AAt7iSysSoUCZTW6C4oSQ79FZwyYZn9b5RDbDuhg4",
  "key7": "3t53dwkby9YArD5JorQcgqVD2HVwdNtuFLXPPSRGDFHgfhCE3FhNAZc3maPzFntCKsQJvdaRnJEp5C6vyBBhsY7A",
  "key8": "3Uo5fhc1iFj2MWxPwc82fC2kQ7zeN7Bg7oEMcfKW8yJe1cr7LXYfqUVne1X5XhpS1G7eceSLuJBHqtYUyeb8Z2Wp",
  "key9": "47gwbY9LSPD9Tf8S4Qoa7xvpnZUiXMQzxpdZ3burMbHMg5c1P3Vtv18Ay3aH4x69GyEhNRNA9H9rqoPKhwtCef8f",
  "key10": "T6stGgvPWiBVwgpdzTYm9J3fYn7bbPXN9SUGjoKkKC4wnUBMPu7BCZKXbLu7EtQvyDkD1ZL2mQ86Rpq3BErc15Y",
  "key11": "2g9E4c3JTqPfm5wKmDJWWRGPjX5sJ4hFbm4P3ghkdb2GyNL6d8xsZbchNr2NUgTJ8h77EPyQD69P3nFvudZgyfV2",
  "key12": "jktQ2ch9LRxW9NogUNV8eTVW9UELFDpy2T3TRhRW3SXpZ4UyehNbmFH7qV7CBW8jmaer7BjJWdHhz2DLD4CH2cS",
  "key13": "2xBsj4Rmmd36HFBcMB1gRNpDWR6A7gPdCxWofN2FVhjgQM8dXTDK5X63oXpk9rQHZswZrFWQ3QvvCd44tHDE5Px5",
  "key14": "AABRzmuX4tPSzHWJReb352CfoYUzpEqJMtBWJxWADgZTBehNPyqLJUDZMoCQcwkpJgp977m3TksgbjgYreWsYJc",
  "key15": "Q9BVZfkFHgG5Vs9Tcnhy99NybifGvbMcdKDQt9u9BMkMVmWzhqWNJxxkTfBh29Ep6ZioF8Qxs8v69Ws7vchHQfo",
  "key16": "4uZFafByyW5Aqr3s2yfw1ZEuNMFm8XzbHPQvd6MX5fawavn9H4CxYP95UAZnEzYEvs6LVXAvympCRpn47SgRT9T3",
  "key17": "o74q9pd7v4Z4pbyndbJRvtN6rR9u3cusvHYcePQM8hVPznQEXaWxG4qTRzbCXDCL1Pww7zpZmEqfMB8dt98XAVS",
  "key18": "JYqKiQ1A8fmTNMbvpcQ3duNyGBRDa1N939fLqF1VGVPgksCm2VRJx3wGMGy2mGjkS2TcNcceXkKqNLHkP9epfBA",
  "key19": "Pn5dVWLZ9u7TBUc4KZy88XZifc8QwMw1CuRcv8s1NACkyWXTZh7cMPjnnYpA67yysfVYE3nKcdPtQGiH5WUw3QP",
  "key20": "2iry7ivsmDNvgQJxEvdwsXzXqvj8RykoWwa3BznCKh43UUWxG3ybhisKq3gRvFh8FbtrXcHdqM5x6aTR7LhteZu5",
  "key21": "6dehFHquHsmZsHs1mhCeZ1Ey4E9BcSQQPxSDviKptgsakJdsQx7FSss2Kyw4tdFzFc3K6ZSvrcqFt3q9KoaDhTG",
  "key22": "xYns1qq2NCzbzYeTPwmxus6zc9h2nqRSf816NXtCPg2pKnstteXSLiDKr3jhJtFu4THLXP1SwtyHTDGe4wXo6h9",
  "key23": "31rVx6tFYZDCyRAJBP9GzDzyTLdcbdSbCRz2fjLzf8QQbpzZsGEp34bAm41qepDciSGEc17z6yUieeZD14td5VHE",
  "key24": "2c9LfAJoibDNexc1KokNxfMPJ14uoaSUuPV5nMRoNC23HB7MzrZUdV9RBaxZ5XvGc7ZjXGqU8mgyvJzDjS88HBkB",
  "key25": "5K7jhkTZfoQMkQKqbWnFmEKXNvs3kCbEgkjio9HxjaYpdwqMyrF5tQFUBAx239BZ8qU55i5EMcFUCeCAX1bq9oRQ"
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
