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
    "2ccef1qf6ZFnDnkn1vrzLHvbuadazUhd9UUpnRxvvZfq4o6GJ9MmsjcVVQkmumEn5zEHbJJpcAcrQTzPHaoy8bWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rsC2Kr3cvGLrH2TvGWGxYcju3b9WbZetCjonT7ecGcceBShB96mYEk8RsUW8dWCgwRx9QbYg1acQiNDyukU7GrC",
  "key1": "uRiddpb9oXdcPPeh5GsTBTyDBEgSrgHuaab44ENbsqzrp5VxbBznRvwYWVCnLzgZfSPgXvK2fW5KaCysrsLbUAA",
  "key2": "rP3j6iKP3ZnLyoLkB8HvtXFcyHboomxuMuTESVJfGYPgAQaft7yRBHvE9TYhdURVdQi4kfPWbgSYhQ7spkydsH6",
  "key3": "65J9QyhwbQpefmgNwcdPk26V6E9zysHJvNwtWa9Gcd4Z3gNzVtMv3S4Koiu31Aa6a3qQAD1NM3vVRLdB5cNMAQJ6",
  "key4": "4tJ7YvBde2PmCRgymzrUmsAByUWTnKUXdp2SbdNMfGnQSq5vj1dpXbe3rcJqpAAMeZqjRQ3VmJXr26PrKDF3Cdh5",
  "key5": "8kjkkrsjpP6V7g3C7JvhmcbApEiHG8xqxTg4R4TRPFUweyJY93CqQkohSas3fuivh2kfEutWSLNq8H4Br8Kuq1w",
  "key6": "4SMdyLvi38cRxMA7pY6mDt7Ldq7hG2UsbJHeffEABbWuazoy7PGrA14FtHMkWQkqhjLfBSQgKuMD52mhYcZBKXLA",
  "key7": "3pbNZNWzkdWz8teQC6Pm3DC2sGr3WkK5MjLBLHVNSeyx3x5dJYKon126Te2qD1XnKsYNCdaoWaFqdZMfeBCKBa6j",
  "key8": "4ZxNLyHLuZRL5smTQ8yqeVtMQRwmzZrR3AcfPFX39SasM3t4FowecScRT8Rt5gDotokDuJyz7VSeFv22E7NR7r55",
  "key9": "3mwuPAbbT5BRmPfK1xTeUyo94fvWeEvAxUySnuY9p262jZSv8d8e9b2hT7gAGvMzNP8GKAPMyLANkN4ksNVmeWuG",
  "key10": "tqqGATLQiPMCb2eg5LNSq4XtgjP6UVjUXrjXptcPg5RHVaugwJGGEXCGCmJ8JSR3vzVdAc7wZhXRn1GcFmfkzsj",
  "key11": "ujY4SAT2kGisiWoKLgx6Nmxx4tcdcGWgPxpJRWCtcejGFDTcqt31hp7MftN5VbMvhH4Rsrrdnu2XN93Jd7Eo18T",
  "key12": "661zU5iRzD6xbLs8RA4pao6RkuW82DCvBo6eUgitUZSQT5UcF2gxyLdB3QgEULYvWrWY1ZuvWMPMKVsPnzS2qMzr",
  "key13": "4xyTtMyjKq5WguTW1G9pAiUfeTf57fK1YqFFWkSFD95DVNDMUpYfqKxd4a2oezZPBdH6eybRFHJcETLuAwc55QxD",
  "key14": "5n5CSYVpsfwXCF2ur9B2ky2aTu87zGGzjP6aJ3jYoru7ZDnRk8UoJEQ56Ec5DBXNC2cAG9hxhKCVqRpxxxKx94hj",
  "key15": "5r9GDoiFnUr1SXW1hfCd9dxCBbDEHZbMUV42rZWxbBqt83wdUG9rXqvZT6U5fRyDxrdnJ1BDm61SkLdcecZ7C6WE",
  "key16": "fPioBUvmbk6uc3RAbZsBHGboZZF6JBGG3fM6WJbXygDvqMc8AfLob3GWRFqurpyDg61fXTTiyC7zds4RhSkyur2",
  "key17": "5tCeGmSpinRTH8JWm8TPVB3NmcQHG91PXgBp2AnqvTLTgGjAy3iyQkXeZv47bUrWmbVUDPQQreyLJf24J8P4w4Br",
  "key18": "3Bai7WduLeybSjixhLgR7zv9QooPkpnf5Myen8barsHKGRhXnhtFBsHGaUXm97aKAEYT8PM3MjzP2YAzRZZcDKTn",
  "key19": "5gWUTHccRQjHCAJZLYeX2b4zsBCj9vMSmpAPcXddXeZbdoGaLJDJLtRidJajZJVQSe8tBb8AJJT5ZWurJZy6rWVA",
  "key20": "27qQAK5zGd9LyXbqqbHR4kfsvxGkMyzSBwRozr17cvwCdW49uMHYCTqSPmafdUqAD41TqKzURv26psm6mFgvsEri",
  "key21": "5gJsrS7gi7DsA6CfEWHME5HBCohFNgZrq1HGc4fR3WkRf6gsAgYjY7sXETuDJEcNNM2TP2DHA7BtYsstEmGmY3Lv",
  "key22": "5V3CzQFwTBcHrGmA82qdtdGeAPoAq484SfK46My1KEjRjsT6AqF1XUCMWBxU17yRLo1YAxtQZushAEzpUSpbRc32",
  "key23": "59ymijNVUkWT1LEhEZdrWh113ov9mnJyeDke9K5dahHbneyZWekwDn3kDQRzg4cR5Ekam1qs4vDqkiCoXeCpFsMX",
  "key24": "5ioTHVeqse7mBD1nbq5VcSQpKnrXRcc1SFT2QC7GCZp8NQuGBGTKA1w5p2vLyqofpqvNYu8BX9bZA3VCXGpPyTJa",
  "key25": "28KK169KguUS18AzZgJDZNGhmDxfVtjqGrPjJSwy7w8oaawuozaptmbMPCQfMj4iBEFesDC4UU3JhDYMLnepDCWH",
  "key26": "2ioR1KigPtCRhmFe6xDg7vPHpoEu3VNetogj1PoFiSJ5SnMBSBLChdLm2tEaiYnFijhUE6KKziMHciPJdTLnnQLK",
  "key27": "27gvTpv6sTZY3vvwV63mhWp9zeHK4WoYMFvDpXyME6q2xj2hKdYLgLWKnPjKGZafJQN1GGJxRvAEn2dLD7AGvn9F",
  "key28": "5NgKatySn7H3YfeFAbAEUgbKLn6SffjmkELcB9owoBezEDYsWviyUUh6wrqfoC9tvx7sNXEjqrbFn3Y381vtYTvg"
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
