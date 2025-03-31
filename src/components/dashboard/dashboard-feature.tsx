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
    "4eJvNyDRSa58emNH5BfvUZ9gkXSP2o4HJbxWEQZxGPXVS9zxHUhX4JDeEkbScxqJfsTGwiv1S6vYMJWqsQPx3xe9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mQQUax2oQyti7aU8zMs4a2NKae9yCSeZBeCZtXgw7eefb4B6pEaPasj5dG95YaciToDSy1KLima462FRz2XG7V3",
  "key1": "4rYAjeW7Th5suHCiAdXwNVq57RSFAaeuRhPjPzvtnDUALcxvHcnZsZVbVAaefzgQKpX8SPuzuc7cCmViKt43c7u5",
  "key2": "3cbGXeo4bzJv8yhDLeyqK4ngBdFP7kqvWhqJWMiv5fqnbQ2AYWKw9U3Bmydr4Dcca318W7QMkNDbSDFJiMfw5bSr",
  "key3": "vYzLi4e4xhVdjzv2RwiLJbBsozokZd8YjGzMYuDBd4J4EEGAMuqdom1Rt7hFvK5a7KmYTpHYRhTeeCdYQA34EGQ",
  "key4": "XuenbEtWmbG1JatECkTCMQwF3D9JdDV84wVveBc7VXhq44aHvVvNsGKNAVBmiEws4XHL7H3b5mV1orAJLnKcTwK",
  "key5": "PFbz4KbRF9QE1Tb1LoodG8691BT8fLZpwJ9wPsmCkyXbW2LQDECdBhJwNrFRDFf9cxFrDmy7mLptiw5hL1ngAzz",
  "key6": "36JjsxPY9FkyCMWMSb5xZKcTzWxuWcXyUMjC8SL2V1QbrdV5aoqGqgyQ7MLG61o34wwSgkG5K6o43J8w8efX1iS8",
  "key7": "3xXpVyVjs6D6dGNNYDnZCF5PBbUHkHh5M26omX8BCfhYmen2hFHDXZ2ufngYQM93Q1XtE7RYX3eEbRarEcjLfFjy",
  "key8": "3sCEcgyF4AFzVyuxQLDHLzNnvyJFJqeL2rBfNTGsRwYumeGysD4a9GFRqLFUaeojTM4CEq6wh5FKT1vf9epy4JwC",
  "key9": "39CFKuLtcS2pe4YBbQBjcyriFTnLFmKKHHUnCfWt9LuCuNiFxBQQzhyEa2CUc7b8Jh3iALfoA7bbjz3WttHHVF53",
  "key10": "3AutQmarPiVyEvuxsG4qru7xEewbBaegQiyXdh5SEnKJGKEe8UTfJ32Tv2F7x98ZByZQMw7f2r1JKg56aWB8ryeP",
  "key11": "CqxYMaxxthEj39gfNVTuo9Pfvdstqu4EdYwHJDv9Axgp767d4cFgGHE8FmGdbKUuuXqCim2X1V2ocqWZh245XRw",
  "key12": "2eq7ZnzJxM9eGQcQkNxKEmujk2csZdaAzJUa7nnrV9UBUxqYvxcgWLTwdJ4aStKZijva7hw3xePiPNDGkPepzBmB",
  "key13": "3Dd2g2Mpv4JyKdtgBxZqixXuib9t84PigqBQqRVDNi6bfKtNh9kd1ALgbuB3BnzVLJdvK2o9SLa84vzXEmtan94v",
  "key14": "2AuWUV1nvzNd92zFYhom6zgKtkvLynkruHqcQVL4HuyxZABpNLrQzqMYHmar7gHTp6g2JNepu74pTPLPBmPQrpcL",
  "key15": "5UeBUZs4dxSDfec3efDoRGVWx9iBzhZ8dLrfTGcdCCuAjo8eAAnem6rXqU1FsZpUhuTrk578t5RWRdkV4hAPh5am",
  "key16": "3oXqRaskosUiz4TDMrfxGZKHfjZfKfmbbdwF6AkFtN7MhkvQT9w3pnC7PKeLDZs6puGgiPmxGckCxjx4PMmbcjMU",
  "key17": "32TMsKiJoi6DYTjyaoY8R5umMPqSTmkkiwCGk8uM1jE8SCmNRypQ9uQSibgNwoxLWWmWsGqrkjjHzdBGZ8tWeWwo",
  "key18": "22W8UaGF44XydnCcvS1VR9kgTKgrkPKdQuShyR2xvSDRu4KH66WUmW1PY5U8vuJeWh4mM2V65aZEqjAiBhWhBfYZ",
  "key19": "3KzppgHnzSy1mhjQpZkP4UDDw3hiQR4VrTWdnAmZhMmDeUJxjAHH8kBRCmz2MsDUTPaD51vUCRXuMNNNM4JpKwXd",
  "key20": "286osJGCPno132KHoPZVpCSjFkzg5NWZfGPa5GiJW8Q9by3qLAWQbb9o3xD6p8XJoYYPnqmeYGfF5MLoaWzLehfo",
  "key21": "52SK2KesoaamQFYtuTzc922QTP3vmcZjtTVUrLinGtJwX1ML26rhD714CJXMf9gz4ohx761kKWHgwTEFpC64JzF8",
  "key22": "5cdWoqPyFcVhd7y3giJCRnPkMYNwgFs2spCXhWxwgfCZYChmJnPXydTVfvKbf6pRxb9eCGzRUKsGj7d2RhT2zHrZ",
  "key23": "cxZqzioh2hXTUinQmWJ8AmBswfggEe1Nez66rcGNoBXfv853NuBd6p761V2Y3aWNvRnKFwSq2hGpLyUA9EtSHJF",
  "key24": "3HLKHAXLjmtsUZXHKiEvpj98DM5afipYuHxvub61wsxpEwKKq1K3e7N78WbVbU4dVbCJwr65ZXmMc42uxmDSLdR5",
  "key25": "2gdVikiqcFxo7eNZBHpoThioe2RDv7REiyRM8AxhsAwWBnzoa7aaZ7CeUbJupsH15wsvpd61wgJfMhNz4G6VY5WY",
  "key26": "S4FrBWiK8WZeeeECQMTUV2tpcJNooY1MBo1PCQaS9zBvYZRjC8Rh5At6KgSJyjdRKrLAG8cgLPACg2MA9ZDgKsv"
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
