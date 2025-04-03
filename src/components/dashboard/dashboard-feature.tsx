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
    "5NDrnd9dm4znoFB8xjRm18wUQq36FYjqzSzVhmXcwJLftCXr4Bdb4WhdTs64NtvquAXBQ8fTaeYxPyu9AW2zFwqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Fj5MzJsdM8DzS4RZiB5eivCBLvb6G5JMpToo8n88qKfASQDMRSiMcxr6CD2fZK941yvyhjr3GNAUS4u9fK2c4S",
  "key1": "3bZbFVzFD5PsqmCdNzmp5PhCjAFdfpf8giwT91CpUFNVtVfGx3GMzmS13SKZ3xc9Eh1PuzG99eC3RQXhjKfwfDJa",
  "key2": "5S8sgoDV4qjbUX5gEVVbnQfM96Vr4MHpAq15JHoJ91ZfEKwqATs6fbfLqD4HdMLi2Y4w8odkTQv2GPSJ3ZsTFAHc",
  "key3": "5kp3gkTDEWkFFhSFGDbuh3WTP61mPmQPH8PoFyoWKbDykiiZAKeoM4SxUJTJCYMQMfYwiVn6uJZCQZ2i2e4Vtx5S",
  "key4": "49CreExJq8nF7joibodrqrC3dQx3n4eYz3J6YwpC8VdTxBtbVX5NEQgVqAECzVMZE91wzSo7wMrBVHeXANFLWtck",
  "key5": "ocKjmY2Wc4eJnFuV9w9aZUpqFW8BDziRbph62U6irvQ69dcSL9szEivTFrcFqxTGUViW78x45epRMLsGaV6azFK",
  "key6": "2TBbhon8ENBWAo5BoYpQAHGk4UfbQ2ZmuyPjbJGzRM6nxwidXh6Fcdh7dfo4eBTmbVX2WtLCiSeYbmT6EribFYzj",
  "key7": "5hud49fveXP5ZWyjkvbSb9J17TcswAHo3YCoUbRMfLpvAQgdEd6gzqKW7Ug8NxEDCRpik4V5wsTtdpi1Rw3PM373",
  "key8": "dbnxuS7Nrfv8U4FSbpdVmQmQ46Qs5i1mb9ZzxV8CXoGUm3xZUSiHHthupkz9iAgTzCTVVxPXAxzhiejPUTK39pP",
  "key9": "3ND5mMpDMoAUtMkQeTyhZoCH6ZYgC8JGmZqsiUBWW7uq4NhDKaMcwDpBL753HW124Lh6WEFmPdoRv8wHdTUwtc1P",
  "key10": "t3Sh969gFoLdy7js8oBUZxnbrW2cL1Lqg9ARSzEQP7n4PK3PJ8eH9on3GXbVP1mqdQpHdAtWpnvQkLiv5g4RwNh",
  "key11": "2kYpNbmHLgp1qUwPdr6JrRxkP8WDBTgovGQKSKstY7VzsVJ5PVpSZZ7juWdxmvHPmxoqDhZUA9omxeFcR3LD3Zfp",
  "key12": "22S4L4uupzquGEbKbMTJVJVUDX3a4ttWp2Vjua9pR4tFjTMefay79P6k5Gefnk9RYMJfuFhPFCWRHf6HoH6bm1cf",
  "key13": "45GJMuQgWLav1oc6YHMnSni9DiZYSc7WaiUNwvHpW3GbN65sh9n795cQdU5SnjYVSKorprZMmmUCdbWsHM2yL3No",
  "key14": "5YqB9zUifNJ1wx6dAYHnBFbv19aWR15TCUmBasPkY1HCyDasNvSvz7syS4niZ8hAwRtnA62oHadurtLFNFuBrDvx",
  "key15": "LV8Bqj7H1qGe4TDfAfrTQNaof7R4EeXXZXA2MSYQxjoPKsmFmQxPXBbe5CooQeRBR4MkyyBvYVWcmXMaXPHgiQn",
  "key16": "5y8xLwSEKAq3sqex8WS4ZCoFRYP5rATNiS6Su4GKEjCSyXXyQG5aXzB3irgnFP2E3iFB68tGxFDSQucBNE5qrM2T",
  "key17": "41n2kBaKybxaVh7XNTnYQBjGX81EGTTHCWfqC74bKSPZxxprWrt7LckcLjD7ZBdaXzsw1qXefaqitLat2iBQ4b99",
  "key18": "5Ukc46BmSnpriJmTbEGkjRoY3hnjk3XD7NepajhtGV4Hd3SC1KDD13t8HjXdMPe638LC7MduJ1PNfbhB34qTNRp8",
  "key19": "4cUt5XpNpSemYFgse4Z5yDXBZunhSXLMxFTATZkz3QopBn3ewQmYq4vckXoUMEuEyFodqV1TpBc9YdsWVns1agD7",
  "key20": "2kCxWKG5KzfzfXwL6wXPdMvaNxMJXyKntugDWd8ojDkJJce3RvUmv3PTnhASYpdKGznbNaz8KZafWdr6iVQzgKC1",
  "key21": "3BREttHZiCSnRRTaJZWbVwyNAJ9Nk5ZRiBcKx5A3LVz274Ecq54fWwq82uR9oXCdB6HD4pFx5bojmZL1duvR7432",
  "key22": "5g1rEmKEnAuW7bjmz5ckkosvXvPgCAsKcBR1UvEYkinnSkKr8Yk6Zyv7bxhP3tsRDst7bNe8UDVU9ufrwPR3mgmd",
  "key23": "4M6Cu2R8tKWvcN45KE5SY8tuUeyPSyQwAnn4MBMB6aKyrr5SxtatvQhZKS8N3WqUPqWJPJwr3TaKsHYpaDtpcSnc",
  "key24": "46H3zgvkxmVkxmkFmHobu2SyvVvnFhr6jbFTMjmsPq8puiLNXZtWGdMWixLH6ryuZnmfwUCFFikwDZkXY1Xj84tZ",
  "key25": "3LihvBgHcRH6texdjrbrD5uqx7DiMSa4oSUcNPmVUZioep2cLU1J6EaWAp9MCGkkKcwM9tuEnsTmhzKSzoWAFty",
  "key26": "2mwKKUL9yiHst2yBcb6FmvhWAcv83gJeJLXYLpqjdX4P9Y1mi8JUvKp97bHnKShBuR2LnsYYbNTPkn8UcePFg6Wm",
  "key27": "5tXo9MJ7r2Vb3R1VojVwX2E74sxS9KQFfWLs4UmAaShiDiq8C2B7zZUQ2RapVeDoDx4PvKjU5GhioLJjvvznKJeV",
  "key28": "3m2sdMrDxnHvSEmUG8wLYupVmqBKmGwzfgkHpqwMDqYSVk29JfVTYrqZBPUAnL2tasPMf3quf9nwEtTKjLMisPA2",
  "key29": "2dka8CVMYBDYoRTPZhoeo3mQcmbfrfzqKgQZFsvCqK7p7nmRTNP22PsopQ8a3MScsYZxNSzYPvGYFcFtLFPm6Tz1",
  "key30": "2QNKovxzfdUoyp6uFKVwNzgtBdw8JZ4U2BY7Unyi4JRm4zYWbPn4pXRE9A5SMneSSpFZQtRUvU4AzUzAyt34hBzd",
  "key31": "4oqGHpVqqAkh4TcYDP8Baqh1auootp8XmATi7MxyasXMUMSwR4qMLqsDmHQy5dFYvtzvyP3xfdYmKGDWxbjf28W2",
  "key32": "4UWHxsAW79W38hsVD2U2xTxuN5UWUK9r9G9M9FFmt4qngmUjtbPtoQmQcc7HCHHfps8DB7i77BvxzV552bgiJaeK",
  "key33": "2KcVAGB3mFfafj3w9W8tjg6MqnfmUJuhXpMcV7rCzshC9Hqr7FHqv82yBduDzssTMMFbSrWRDjUaL79d68xgCNqH",
  "key34": "wggWv4wenpFeDE1W4TAvQqHYgcV8XDNNtQrmkX2DA9VzYag997Meob8HxqGbzHeTu26Kvgot5wCPYCvc95kikT1",
  "key35": "zvsDptas9QP4hDqcynmyFPdzeUyG9BAofaKEKo74SACUwgNtMi8rR5sq86d8CWbXvjJfq7CR5YHLFt2o8mMxFb3"
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
