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
    "3wah85JNDA6s379VcD3cDNvjbJVweUWdGLAvEN4K3X9sGmNcQB5BSt1FMQ9iLoCYyZSvfwJ9MTvjo3SaribQpNPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t778SkDsuPUYAZHcEu8xcFNcbR5Nwh9hjhe4tcCDX13E8izsGe3wPYsRCs5wfqG4gobCkssNDeFu2YvcHPuyQHV",
  "key1": "556aqC1FApDERyqT9QZ14m3dTv1m9CArU3mE4aNMi1m98e1so2mgTuNz6Tyh7b7NfMbsBiNCAzjN9g9dkiAyeQb8",
  "key2": "3Dvyw3t8tivcGZWFXnKQUY8eqfvwBizGiNW5uwDo5MoPk37T5scWyaoC9LmhoRh4RN8jSXAu3jqVAkY34CJpgbrG",
  "key3": "5KgKSa4mSxAG1y6zmWPJGp6setJXrFvaMb7CeLJYH9LXqcHhM7iMYyWjAXhqEsSMGZ7FZmPE8yWmVbP77rFixCbu",
  "key4": "HCsAeGMNt4xwE7s8apQSQXGAm1nUVSEFAWgNsJFjModBzV1Gxdx1XC3uJKyx4Qtb7hHgYaud7HVcCSm3H4XVCYa",
  "key5": "2urSE7vmrHqv4vCW2dJRXoi2zaxUYhepQ4c16kdvkwDgV62TpWV8gSJGFKjEa3cd2Vn3ALrCXnp4cWpaFYAT5B6Y",
  "key6": "2MR8WAW5vb7EiquZfqaMtqMX66NHPr4izex2KiG7r5mE4caeZHbvjDPk3oWpsaVosQTq1L3Ra5VPYSHFGADfhfXQ",
  "key7": "twMFnZePakfqyrzXTReDRKhZhFivtizMPsYXuunhkHm7UebmAt3QyRrWdTV4ht38ksTdN5kft6fZYSB2nNvdQQS",
  "key8": "37nGmtR4by2FEnvKzqqqHbsWFjG6cHh1BbCRdjKh2RtQDpyk1e7V6DceQp9j4SaDXNMvz1bXKucpE6nRP9zNJiZT",
  "key9": "4wzbUDgPKehF7MwgoJ5k9yEUAnoDDjDGeJYaQiHc6NN2Ddkxpwp5QBWMcMsTLbMrHEuWJLWUAoAf4bsSWtFk53Ws",
  "key10": "3mRANPJRw8S2JFfScGzr42fsfAAz9hXzdM5SUioDcQCYGYUE7HAGeWzVnTv6cY9A6cRGwGccoYUjZnfVjAVQDVsq",
  "key11": "5uJicQWS26SiScKULG683HWhECGG7SEMLe8vcGY8ha8oaXpmZmPP5BbdYjsdEZaPa93awnf24S6FpzTKkaTUxwzf",
  "key12": "62QuDPZDVE1JbtYPFhh6Cfn6XDdrP7RKP2KqdUqthiSZZn7mzqy2krDKYwKWfS2jrdYxXnWsSVdLSZXRYqH4WmPZ",
  "key13": "nyrWqt1s9gejkXpELyvqFcgkkyDpCGpQx9T3pDUsUHJ47sYK5XyPJAaAnAuHBgPoz14ik4f2ZcTvmr4fFYhzsAY",
  "key14": "3uQbTHA9C9tf9QDJYiSvCpb19cJEHEuMEhHrapPRj7BQqbAeGq9UvZ4siqagZSNtnYxouWmPKKWcgAxbnQvLwgtW",
  "key15": "3ma57kYQvHjYQzVJu5DeXnkGnwx5s9LhwwSVatzzS8KEU4mHNLaHWXn6Z1SZ5VqZdkEM7VrcvgiZKAff1wrr27XS",
  "key16": "541PWAGzDzvNqwEfVY6K1GeSBchT3oNXQ8fNYaZ5UDCnBZH194HAWpWquVr2Nfnp1LDJd7UCsv6ABciUn4ChJ7F4",
  "key17": "5oCKsdEwifeLFkGryS4CgSziYtHgQ9awPbFTeTbenkG67XpN5175WDdxxBH4hrf68c3mU2HDpQgou877Z9SfxqQH",
  "key18": "4mifSzzkwcYP9uXnfnq5AM55Bvewu5ovgQ7GPysppY4X9N39LGhj3cCJNUe9T4AvpHtygC5uh8xSdjxQzGHKCES",
  "key19": "55ALm8rKfkZu83Tyw78WXrLKy9SVoFiCdTuuEMhKtz72NTGEY6UCz5S7c7pT87U6eBpPEyDPGjKuEAzww7eRRZmx",
  "key20": "5uBrVm8V1evW2nBHJ1W9E4orNoFFxp2AJ6MZF6oFegLN2qmpf479h5ZwqLcx5RNbcECCi5TbUvyyAhzejQMWxjzj",
  "key21": "uSSSQwxTwv4cbNZwUmmi1eUscgwPAohxTVv9xe5xUbek7nNvuzAwgKTTopAnFN8uJryVU7HjWwN79egkKpu4WRZ",
  "key22": "2uTTLyKBF1B33mGLvwLeSUEcRMeC6owbesTosbfp3wpe42fxD5yDwpH5A6yNjF3ABJFnJUEfd8hPtPD8P9JZUBGW",
  "key23": "NLivVckCAskrPYiNJ5arXLKCQKAqS9bT9Gh8yYxAjR9n5vdNX6dnTrV2X3vFeVs3GfWpc96tNG5NuGcwwXnMeKi",
  "key24": "3YqKkQh9mNy5dCh6hv7jwxJPLpDBbS1m61sFGzRi87pVWmSiFYUt3M7MnkJf1qwbaiNY5adewmRGaxMcHfh2aviQ",
  "key25": "5EatUCMbem1HstRGz8N7dS67Q97GZsSRsfWhMi7VrwqgXwMMdHuVpUcvDSRURMz6jHo1ACaCN2WF1dpokfeQc6jA"
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
