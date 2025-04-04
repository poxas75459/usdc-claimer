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
    "5tKukWmaus4AkNcP6HFTDhfboQUAnNGHvagTA2g4bgjZGDFxG2oYRSihfmZKbkgMSidKbSvnuh7co5mATpW9Gogb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C4G9o9eKkKw1LKpMeJa9ysizqeyHjwZqWevntSshYTvc23M7mTLv8KKwWMmSAcBiyHjG6tfs8Zy1s9uSoTvuuwf",
  "key1": "5iia5NRbw1nonZtrKhuSTD9VvHHpms4PhVAQ5W86go7j48gXCKCFvMu6eYUgdzDpQXGyhEdRozgYHpqkXEu7Vd9g",
  "key2": "3ePSXDhi5bPSyYbqR88nQpNupdabZe7mN67WMETLuKLBtG566WeaJReoVMsTB5rP2di1UCcCeKJgUz2Zt4s3iBt8",
  "key3": "vVRUsSpDMsk8e5mptvAma3F42r4xqVhq1AmFyKkRV2sa9iMwUmma5bbf5wbyKktpa28w7fUcS1q63h2Dc3WQwfT",
  "key4": "3eunoKAC5uA7yUdQfvaXKP35zhrrudnai3bymHor8pJMrQpXYLAKcdzYwt9eEHLq8kJMMpGTrt8fUkEHfidYrNky",
  "key5": "WiJ7kotBrMydZtzmkabLDiSPdh9TmVMyUw7cFiFDtnxwRFJ9qnfrhCmDben5oyDQcELKa1iT1ghLQ8HQFfykEi7",
  "key6": "59dR7w6jQ8wvLomNSWRd8wqh9JiNNcMxGYcbS1gTZpA8QeCXUYTW4bLyjz7Q1WRtKx1Un62hG5nLg5W35RyvUkA1",
  "key7": "4b3kvmV1aD7tp2EXDGZaKLhhR81qHWUFFVPpFLtkF6oWwxabVfAwvgb2MF9TpPAC9WiLAo22YSMXRYAkL4Rd9ujt",
  "key8": "3QPUnq3aHiktkXdoP5Yq5TwpTww9hc7jjnHWhw4em3EhX3akBiHwPV2wqF8zEub1KrmJck44Gj3s72bRFpbsbCce",
  "key9": "3rpC32YvQnyHZh4tnAVv5shXrZnBXvGwLCpFkB3p7EneCWUU6wCfEZbbbXKKSa1r3AnRe6rFj2MVfpJobN5uMaWk",
  "key10": "2CuPx1Zve6xRmapzvtHAhW3vUBRUp1zn6dC7p6UU2nehkTYVEk9GSJTDTR7pRk9b2c3wbiJgWoCN8mgi2rJx1Qi9",
  "key11": "FK5LpJ3UhkYopxURwugv4Pc89tcBNwBkpB6XssdJustvoYAB5SAD3P42tjfYxPQv5Cz2jA4vzU6XBv5tn5RUTWZ",
  "key12": "G6u4HdHCfDGaaFBqfCu5VTsZ9cjiWeq8K3hDYkJPg8CLqimZBRnXHQomXf7r7jGsNZ9wf3B2WK587xDTm576ZsK",
  "key13": "Gz9L1tbjecEmvEAXnjgdSRhXW6ZE4fvVZdArKN8XnoyBnKbWgmb2Dd3BbPw8Py3yW21GMMyfuiCHmo2Rs4AL57X",
  "key14": "5uQTCgcprYruZS6uZEiZ4vmBysu5NmXPqZ5uEjf1zyLz4JFKp9hyPA5wLMfyJCTKPTUjs7BdTtyUePTwaa2E2XNu",
  "key15": "5DxiF6H3ccGaDFGKf94aLC2WQs6ms5WzgcvLem6AXQBGkWnRrptWxXkDgM2U34fRhBrDgoE2dkK4p45jDdwxskHC",
  "key16": "4Pofv3jwZYYsZnjXSVVpaEkzCjrNnX5tUmm9H5LpebfAQJou8pr2rywVPo8SVzbjTCpQYK49P51JfKjHNVAhQGF5",
  "key17": "53droFpQvtuB3apTtuftZv3ScCAuTdQR1N6jWg82H7u9rYQVsbu8JQNv8re8SPZDTbzPfbmWWKZpVv4BztfTNh4e",
  "key18": "2m1DKQTNvnQTsoHmrAmF4L7CeNcnkHwVjVxG4Pvhxm72tqfoXesXKPAJ5F4Xn9nZXWrsimEQycRdrUrbiqKBZfF5",
  "key19": "4134tjUz36pvz1Mryo4gisS5ozqitPQvL519MTK7PwFAASrAWSWnCdV16Aev6LkRrg8DjF7EZbvNHv8oWFHgNCaz",
  "key20": "2BRjFgbhEC1EhxyhXK3L3WFmaEwYT6RH9CSwLZGTXs1Ba2Z8MLXVDs3FHjSrZG4w1C4TyqpFBHA9Mw4pHUn9u5N",
  "key21": "2gM7C4JYBzzLkuJcYH98CVh7jTisTG4KDEHfRoaMrhnxbFKGuF9bhGj3nP4ko5mCsbiBuwLWxBAf1JywxDCcVdf9",
  "key22": "4sSGqi8xDUwFvd7zUuBURLKaQsY7uaKeZ1EdYCH1MJBQQGNWCQmTqMP7FwdAJfHDJJDTDdTPicdh3GZcJ83raV7R",
  "key23": "2zDnCnZANPiAmsbAAandjsRqkEDApuqmPfaVvLRJwtsFa4dHt9u3AujvDcvD1Vcr6yLbDgP8oGAZb78t23YKg2D4",
  "key24": "2ew2Vz8iDGyrdxR2zYony6exFKMm9xiDgUQDzg5qkM7nPGzvsBzMngXaCWBsnmY2x5ZB7sCXoNFdRG3VyEZbJXZk",
  "key25": "wKrgm6o2FWBN3kYuDMUTki4Jr7EXxFvhwbmvjBuPxhDr4TeW4cKVN9ewwdatBT3Lcg7tdJsWsa4iMhAnEjbgsir",
  "key26": "MSRXUU1tMNoPHzd4c6CF9YUB2jekUsYiY5SvunBcNdtYyMQvJvEJG9QHpwnZ8uKSHnek531fe7bEnpV4ApUQo3F",
  "key27": "66xJKdj3GyCoXw63HJmTKdAySRMWzSgtmYskeDvzjZERJ7uWoUcUghwRvfRoSBr2pzssuR7cSMX9the6h9GCGX5Z",
  "key28": "Sd3YdNcCepPD6frav8a1v8aSrzeJvyLoFzu7aJrzcBAhFCNeu9oV5jzHu4YLNAVkoNegFEoHEuT3vcDsU16C1Bq",
  "key29": "2YBJwTjWQxYqmWAyC9D2hnsGsGBPe2UtNkN5PrYzrXbjnxF3b1Wgk4dHodC42E13TmCdQ8Eqk7WHpinPAs3rwgL6",
  "key30": "24XYuAFHM33ipJ9xomH7HFxCkrdF3uYTqP4mjLyvscDx3TYhvvjrdwv4sx4qGTQLuJur9icd2Ky6P7V6gzHTGZbj",
  "key31": "4hDoHo2rJ8eXvUCxPQWbYkTpbPtK3gXaUy1c8RvdaWV6oya4EkMK6GDDLL96c12qeQcZFhkY1NDfLJe2fbofNHw7",
  "key32": "3bcvHo9pjYNusmrqnNqMxZpBpzoGkkff4g62TebSbywszJGK7GTP9WoC8Rnmp9PEBouDXJaKwScayBXagkZT3uwA"
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
