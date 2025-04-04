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
    "27uWqpX27bRKTk1CbuUMxrNCZSBxwGNoiM3zYA9W3QdgEBu7umhrFnbb2BJsM67yhnSYbMmyKtoytgQswqNL4vHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RDn5W5ioBtx9e7rjQPko9jatz7baiZ1HW3F8Tx8sLzudNrNv3f4Gbv6W9jafYbQownGy9XGgNrHJ9XRLQNSFkU9",
  "key1": "5NJC4xVWKAjELYbNeNJDs4TSsoiYFb27MNJx7RoyGWvqMgZrUQCKw3NbRn5QAd7AeoayhuRWChALGLMYQMwd3G55",
  "key2": "5pC7jY13ufn3n7WHL2vis11T56y9T4Seo4Rm6ZSvgJ8c3xKhuLpbtKPbiSSumiG7NgfUzp1TcVmpuEMFkkJn1s75",
  "key3": "zYD8iWT7aoY3VGyrSJacRwTTFyGdvb7V3QB4y2iVQ5pG8JyzqgLwFaaTc4CuovesrbzE7U97bA5n8Rp7XqoCKii",
  "key4": "44whWzcmX3Ay4s9kZdjb9rpqPmws1kHFMsMMKTmSLKfVjKwe38pqmTDJvxEnkdPN5463bBk7GkUZU6ZRALbxMyqq",
  "key5": "4JNC87D2x3Aab3QDLkys4VLrqCAaneSWSpFXy4RFxr9M8Uz82WrNMcJXdD7b92sT6MJ5UviXqNJgN5g8UP6Q7HzF",
  "key6": "2zcQcGy4hDC6YABSoAwni4Xk1kp1ktJhAfX8YsjEgNYxs5jfrJSfdexgoC9f81rHgzAXs6LLYbfX8fWLew3E8cEj",
  "key7": "2WQoZwn8AyUJNQn6D1pgZ1jpaG48mXhHWN7PcsVzxQexxEKtdSYRCGegDSAkCmxaBYa1muiPV3ki5kN2txGeiCXv",
  "key8": "2Ad3FcKDWCNZRHoi6sFiQeumXjFCcqQctE8gTV3tUkUCYkeMGt62Ta5E83FToeMczrADwzc3Tc76m1QzhcZMiDNq",
  "key9": "3MrXXF29TXbDfwgjZ7tdiDFShjswutgTidNmrVP6Gvq8zBzFEJvaruScSVeChLDcPjFjNwdaHuKhwSRDN2FX7RQS",
  "key10": "3ovRvK3SuxrcP8d2HggT8ikGZcd8SeUqQXCpDUnWdDexyX4Vv2zuc6E4MWybZzPWm75n6agGVFJp3NPs4zugtwhh",
  "key11": "2oP7fLRFWdy5acrkbYdZN3NaKeFXyZ4VZq7NxHw8rQgR6DnnNmxJgQxFWJqCK7teaAB7fruMvPtubvqLLTnyYMoc",
  "key12": "4moKBDvu2a3qeqyigfSGRU95r67JGxvYt1Ffq3y5LAyRVJsgP37tH3c2MFd6zDUw7AWub7L3GPSQJN7aUKaA51z4",
  "key13": "5wkY4rP3xCYDS3FAzox65Vw8kLuJiiCE1unxXsLKYkMSBhgbNyeHh2ajRttGcQKxsHXW98DUiETTAkqNoWstnqfz",
  "key14": "59DVZVTPM7FV3aqs5VRJk8zqHHW8Zy25p8MgEjq68Hq44p3GWUdtjosd1H5rovvD6U4AKDovXL8MmwZbB5wUT2PB",
  "key15": "21xsCBBx9jjTBgpSmh8cKxGWpn3reZGGqkCdNwvxdnDjDeZDBNmyTqXtYb8NyWH3xwr7TZdYWjrCb1MFvAWR4u7x",
  "key16": "vb9Akmp8S9bDdefaun6LfBCEMsfgCvmPURLzSZi2PHfM3UgDh3mHSGvz4PmLd7aTdjwD5ZN9dGzUKSGYR51mLew",
  "key17": "3LV95RpTghf23Hvo2EJHpVaunGGQbWCcp5H1x8jQxJ4tgUX3H2zWs7wmrozrjjZUWfcuePJ9SeyQf2c6U4GL67eQ",
  "key18": "31TDy9W4N7VpGbkdJUXK9hqtC8yrzqBtVyJYrS5Jfoy2SFKBo7swqaRhQFvcocnjZQmzjLNkzvbbpin3CPAWZq1W",
  "key19": "V7kH8rezE9Mq2U3fSWNMc4XbBc859RcUsHXmGSJLfQFL6dm3D8prmyXR9BR1ELN2jBDg2vQpVnyVWX9Lk8Lhm1Q",
  "key20": "jfRYppUt1AhLBS14sBJ7Rg3WL1P5ppgn6FfWuSjepW7GcAiA9e7eo23zBMa25rLJG8qHvWrhtZAxLf2PbjLRUqm",
  "key21": "3XezTC8eCKUZRUK9EQ2yEN49wYM14Sq5MgzDRYJFi4iTgsL93fEssDVr1to8uSHfJ7TNtjQaRZGrJtc5iuVu8kNF",
  "key22": "5JXsPoFUNCVok7GG8wnUmwvcSHjvUJ3FZDfXHY2dTi5vd2C8oXR2ZX59qbrfdXz23qkeTwzHPmMsd21ga38fUjeq",
  "key23": "66EjSBx14nQwVo4yTrQnFx8odyLE7dMJqsMxV4f2csDEEL6J76mVYQH6DiJv15r6c1RspS1PpB6v6UfLEYqi9szt",
  "key24": "613JDnmJBwBt6MwDzmgqi3zkfD89F5ScVYCeFm8uDJJpNFbvGPALqL6k4MRRmC9VkWGjyV7gJAPP9ikGXAhPFUVH",
  "key25": "3kgg25L1HT8nSh6kCpFBev2WrykSt8sgLuvzzG9YfMd4wYXsmGCtcB55VDx28ZrBwxVTGEkhspyNMn4xpLUo959w",
  "key26": "2TLNLcFqiNYT5Ya69hGY7DP9iQ8fXPdDqWPADGPd4aKrUyJ1FQfQ4w6QTwaQbTNit9dbr33s5B58efwVJty3zxK6",
  "key27": "sxfPDppqLHek86xcdExidAzppYz9fS3ex7hW1XdC9tJXA38b99HbPTqLrbujdmnR9pbUDdYazNaGtiga4msuX2N",
  "key28": "YJ6kXFWJHa7UY8x57m5WVfG9jR4nqExc6Xgwh3Mtmda1a8ZuPpX6n6MgcSvMbua2Z9NycMYnyRprFt2X9sU1q4E",
  "key29": "3kHWfXe3WzY4PuHjMDRtzqWXVfGyPdbhqETcg2TnCi5GnmQsz5KxCPqSuL3Kmm6A7TMQYUdtkV2gUkwmiYpL8o6c",
  "key30": "PvZQnRdWQdfkzw66nEg8bL6jKnj364oQj4NzA4q7CXodRiayMSU79nT4KBfvP7wwGstFv5Gm8nJeczBhBPWB36R",
  "key31": "2dw6zWVZDaiCPtD8aPqV5gQ5ZiAFhpfZ9XrhbtCvAuyrbZZ67UDnzGhPaT3Dnzv4mAPJgEg8PrHExrQPE2S6WwFT",
  "key32": "vhdFZCrLDcv66kJpcH1aGpNz3Z9bGyrpD3cA8kjhGDcFrYvU4vHoLNuNCU6jrDgHN4yfUsNya13vz2Qy2WHuk5E",
  "key33": "4X55S4c2VjJsfBhxJhvWpBHnSStWoYMbcjhfv98JmSn77JCa5rGGrHqgtRhu8z7ZmoGz64vsTeYU9VR1fN2KzPLL",
  "key34": "2uJANJ53SpCY5j1VaKnaQ2izkPhUxRarkvUr8d3TAa3mAaMeNPVjsraknLJ73x7svsbS5UVTzm44vSzSJgHFC4Ab",
  "key35": "2qWbdqZ6AscYXeaSGiCAUterg75AYnsx95PTjiLSnTmTD6HD66a4pFfFPXu15hDiu1vj74igKK5rrZ8obsiYJs1b",
  "key36": "4BuuxVpjn7Wwny3vkormhaaynd3ejUk6XV8y98W1qZpgkfu4fzshEp2doUs7vZytDejrPmkb5MkhukaUX8ADbVLq",
  "key37": "2Dx3byKrZce9MEH8A992cVP9owrejLP6FSEBUuGdQBaWjDhgUgaobZy5D8dbe6ZX5vshubajt8nGAWyGHo1Tstsk",
  "key38": "2vHKVU167T24357PKXvVN5imGvh5P8cVpnmQu3B5vNgqWBFB6KJLezCbEZiZgXKXCXPTgBZWSnrZcoNhYx5pgucZ"
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
