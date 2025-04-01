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
    "59WcaZ7FqoMCvcH3dKUUEX1TtY8czwtrdWq2mBXySEcFS9sGpzW12uWBi7LJ6rpAmeijL8NXMeD6w9qBRRbDugMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SQerE5rrkmD6FCBVjFJRkBMS8aR2i4LNwgmxvdk9qAuuW2KWW3hu6fiJu3Ymkpzxbg9LWoK4RooWNuG53Hzk3mF",
  "key1": "ghDQrcY3AMTSBeX2R322e6azqXTx3y9MsN3WW9hC1LFt4Uoncq9r8DeZ8DEQ2HvuAsxnVsGz3ZtnHWpF9RRLAEc",
  "key2": "4xv7pQnPqv5U6iUwXivFMuUfmeAGiR9nMrM7aQoMrndLzuiuCjk3kmsjcc3z2eSGdAi5kfKBn1rfummhKPjcnyGm",
  "key3": "4D87rJ7pGkT8SweSJDT1LHL8RnFtxZFMFB31QdAVVCETENhuY64LF6RfdBzs2fSfzriEc9Sa6gWyeo8CBYV9fT9q",
  "key4": "AsSmP2tp4WF7QDMectMBXGQXZzTUMqpuM6NJxn96dAXZ7Fh4hCwyx9ATQBZzevy3jHK5JhQMEBw3p8semoANT9f",
  "key5": "2UXTWzV5jrRHPiM4z1ibRQAhVVG274CPc7GtayWh2yn1Sf5fwDCYJkWj12Lat9mV2n55zFJjyGexAqQgygeRbTLE",
  "key6": "49e7X6J1qvmrjkq6L4j6LYocZiqBD6DBdPpxUzkQuY3YWSSiv3NJpeyUFHEt7DMpfEh6CgE9F8bBjicUzNsdTogf",
  "key7": "3W6GWm4j7qTRrAKQtTqnompEMuMwjxtnGi9HYfkGS4fyTSVPR3oWB7Pu8AmbhXH2gUhEhNvihxqwqKCPw2oER2qQ",
  "key8": "59vbFRZVwXjdPQj52LLcKHgqt4PYDHTe8ruCAh6nqH5NxbP7QgetrmM8jgEhecVeGVT7M5FcLFm4nXaUoB6jYXKV",
  "key9": "LC3ZiPEHkQuT976vJcjdBjSpxzFAJdX8XNjQeagBFCC4fWaVotsH6jrdJwvXKKyzCRERBSomNEHh2A5sbi69GbE",
  "key10": "4HT7JaWB3gyhmQk7BLGYF6vyczVWsfPjkNJjMFod3At4kHZhAr4bdP9rvwaDZ1mXodTLWa246thMjHrxKWAVW9iA",
  "key11": "CTfAGRbgHGK7sZLPqCovhM7KQMpGEMbcnpS8v26bWuWNgizhbScjDjdmos9NitBhiQHThdUtQYvLCK5T3RvmtAC",
  "key12": "TwpjHsaj1YdNJd7b96hBVWXjNt467wiqT3j7xJoixpYEsspcYNAiQdtiNft9QJSrjJ8m4WPg4zry9rHtyyTChwy",
  "key13": "4nVjd36VkBCWYcEHiZZhxrmL5JxDPD8LFZzqutrok8ApuyxHKaLAtLzjH7AuaEnBMay6ETUoS2P6D9czZuga6drc",
  "key14": "3PrAgesizko3kcagFTfk3CZkYXLggGEV7SLz3FiAumabK3V3GiiBLo2ZgLyECbBn6v4k9hmpCeoXiAb77553ct8E",
  "key15": "5XwYdXavQiXvgpPeUo1LEodQRPAo57SuSLch8pau6evefap4rR56JoE9gQVTNAiknMT968QA5XRioV1YkGu3vYuc",
  "key16": "3Q6T915fEPjLNxHbvHBr11PURpPqgBZMFPHnBS32GURircjpfwsFChPzHJqMVEfbFXznkzmNhjrS7zFA9QSKcZnS",
  "key17": "2GMNLw5fHYfSmSVBxf4Nr61oEUe95V1gBFFxkt3mLmJ8weV4TrDo4xzbuBiMiEN9cUhx5G59EbcCorZK2skNka5E",
  "key18": "3GJCQZaHYjHxPpGjpMF6Y3A2TybT4Q4wgHVT92jDy69LjVfiowhawVXxFhwrmdnHajQmT4VdoDRx2aDT8n99qjpC",
  "key19": "5eGoiqSA1cX7Xg7oqzEnFSpCzeY9bP2fafUXphujSRqoKXBSoEpfXSHAmWYR7zbVFzzLzyoR8KjPrnDVpmgZfhf1",
  "key20": "3j5gAWE2a8q22vMWPWYPSDayTvewSLiYaCx4cs27UUc6drmeSBMbXDRfavyZ5FmEjEmnFwgtB2c5ts1HbpUegZ9P",
  "key21": "5PxLN3AyXXCAhY4289bNLm8q9RtqZsjo3ZcVzR2k2Ee9LWzzeEsBkmFMrSp3akKv9rshu6tsQjF5yBgPe5SEeQGu",
  "key22": "3tCbJWgAxxRueyzH5k8VH9CkwrpfqtwcUgCo4qe6kFjCVrm2dS2wNJfP1dETsy5mVTsxaL8XCFstwfib4KWadN8o",
  "key23": "2vsohguoeP97v2nuQJahe715L9WbMRi4aRdJhvcwYa5W8MVdCJUJuJeaK7iFvwQzF9cDHpyFvc7Z3rXqfTsuBXDE",
  "key24": "Uim8hdXz4ezBEBjHd5gRTiFXcjxbRPfVVHT1tTzXJS7geSAqAXB6VfAj1Bw9w1yNMrACmTWhGsAST7CsS68QFTv",
  "key25": "2UZ2cdL5dViTjoAExE8mwXWMtGdrn8nrKFvoWhPzC27FALjLj4KNBzhUtndXDhG3SpsZhMucX6JtdAx2ZGosUWWE",
  "key26": "5NxnAd9Cgv9vtb1Gi9LPzN6wpA162y1LtQLgWuRNTV16Ha4E8atxE4CpifSdsnVwp1ypDC1x4M2YqTYDYfpL7RFV",
  "key27": "5Rf5irPWB1sZMxMwZq9FF3vku2dRhRnZQELhkkMu5eizq1poCMhoCmwjZgwyfyAvrgA8atjGAxdcM3iHVi74YXFP",
  "key28": "3faxDokA6KhHF45gYche4rwtrrRDbZM7EkakzhhWzjjHWC3fD4E2wGajJVRA9W6yyGh5pSNCUDAehsAozX8RSGy4",
  "key29": "UCyP396sxcgmAKMGdjMcxcQp6EW9FqkWKcdaUKSk7N91FZGbSqVr5tDykiRguMsnBdqkuYQr3K7JJrztqHkMTnj",
  "key30": "5tEAxqj74BxfZ5PHc5EUiCzg3XJd7GQpPTxXDvMrCgJMRT5TurxBiT9S6CY243ejPQMyV3M9D1iqj2ctmnR1aUWw",
  "key31": "4dYK2kdjeCNsLRaj7XreAxmvT46LVXx8jjeBciWoizeJgsGnrgAmSS7cHXfKbn1LpDtfrcdV42TVEpwdXWvU3RSp",
  "key32": "4GjPtoYDxcXtgYKtkbbi7DQxAMP5BLnkbrRNZq65qfsz7rZynDzx2xxt4zztgiHgAzXiLFjKpejN2wXeLQ7MbKSi",
  "key33": "2FbHwUf5BDmP1JLMkBMzLzk71bUxSSwevSQdCcJUs6Hetnw9S9nXBoWn3rYQt67y6AbjWjgWkiD271jhdyZVoinx",
  "key34": "2PN4R7dpWtFmdzYGvv6579BDJRVkbgyUJZLSCJCp2LhNWPZvt8WJDx3Jwa98vBTGiBxS4iPSZ5SkGY19LfZopGv4",
  "key35": "3uDBgMej4Ap5cEv8JgNLBp6Qxo85Xe5VuFv5CDZBSC8VJqeemdnAcXc147FUaYLZLA5hHE53n69KfBYFWPLFdz1z"
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
