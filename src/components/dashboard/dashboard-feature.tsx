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
    "5EbF3EBbKS5yUz6ufsBQNNox5wmTj912dPQbpCZdVGj2BHDj1PPoaH4scvWUeDJH85oMr95CWcV5yXv7U1a2a2YF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29rRmPbrAjhZxKHy4CmQi6gX1FCm4mwTtLcMsyUp7EUnjSH5FtNDVycfjRfq4kBHTuzHMN5Tjjrj4J7U3q4b63WN",
  "key1": "3WPKAPRVeiXuT11pmze5VNBAUa2qmXDJmGY3vtG7bSmt8YSsWwuXzygAM8gnwtytZzVboQNRohgveNDow8YdEoAG",
  "key2": "3TUQaUy245kqqdczeVLqHPpcv74YNXdpQYCogtoRVCCxzAiKgmnoq3vtQ6hUZmSaWLULmxzX1b8M8waSW3MCrfuU",
  "key3": "3ZHBy5f8wQFPGE6z8vz8n6uAQDWrpkMPLZRQReUCBjFpZDNcMvgSh2NdDPWE2ocAnSP1fTXq9pq52QBpcziXirE5",
  "key4": "5EguRiggkKpfStuQw2WVZop3mkxLW57vRJbBuuugCqDbMgR9YB9MBkbEu3qiLCWvK8pK5HaC2F2V5u6L136643a1",
  "key5": "3hBdkMX6RaWjJXRFeZTwp5gyPXR5BGEAexp2NFoNuDQbJ9PmtAny2mWWVdREmUNn78rxBrFpK43SzaXp15UmRbKG",
  "key6": "4u6X84XNh6HYEWWpjv1R8pHudpzRt4YJ8rSdrtApce34sjq6mCngNNfDCuVMsq4EXKQEWpvcRUBg4YLuqn3dQmwa",
  "key7": "Wxcm2VWVJJipQk59JjpDAeRDFJjNFW4xTPJ4W6DLqjC713esoZXAoGiHjsZ4ybzamLrN2LRtKTtG13NvsrZoxds",
  "key8": "462Ao441AusMno2hQzqUWZ1vgMpQTuFNWNMdiCKfppNfyKk3K2wwkDpadLpsmCjpgw6RBgZZDH4KD1LuDW2J6nfw",
  "key9": "5jfNt3RUvjgoWYztt7Pr5jLrkT85ykQ5os1nW8fVhgJDC65ER9F6Ud76NbhdWvAttmrvoddCorDkVPDvkSmWFHJp",
  "key10": "xNd7ZDtZuLsmDH98RHpqLhysdXWrUJrNkZXhpUNSTsuVVDmdBc1igaMuJAgH34g5wcurwq1LErq1JSr5sDRrFv2",
  "key11": "3GYz3musELuBQEVq1KuzthB2iF3ogbePURVadajfiTEP4rzogs4s2DqeR5MQu5Zht6i2FMv7SzmmZLJ7h1kkZ652",
  "key12": "4MLXLEdNJWXoR8rDjbY3gVjeMtzaFqCNLBUhXLHaJjEAbsLyN1ezyH8BVuBVkL4tiXVBBV1QcPRSMgg5wkKdeSYZ",
  "key13": "5NQVcB6otbiMjQPrFti4jsXkAqFfs1f1t7RkbEKP4SNjFE4QEVwTTNJTSXT3HDZcrb3yd57fTVFkxWfdCoDUCtJ9",
  "key14": "4gj2A8o99JDT2cuiXpbbMVE56wC8zBDuo2tKFt2JwsJCDW8DM8zgT4yPXY1FxRCwkujMgCz7i8H2ukikVTaoZyat",
  "key15": "4SYy2GskCYgVDEsrSuvmPv8A7SrVLCAauUeJofA5jm68wrRUxq86Dpic8dw8aq3huCk4HvKhudFbNkMc21CzogNx",
  "key16": "4hhVEwuPuWSFGAVtdgUGW58rffjsc8BXUvtPLd5iGC7invcZ7fdD8uGWCXJrgbywXWzM7z9xvG5yYJxSMJGJf8cZ",
  "key17": "52asPH5HPbXqfosw7ay2dzLY5xJTeRfrbsuB8KkJzYV8HhiBTk21powsvScpyMUR2Qy47MZeT13xMXQH9hbTXNF5",
  "key18": "4JTZVrZeUoBtDXXG4yMg3BnbJQaZj2x7M7Vv1Pqysa4G8uzGJinWKBsLo38uvmHze3TQyRRmLF2DxTFb2tGU2Zru",
  "key19": "3Ss5wBALLhJDVAjBW5kDf6rZopkRZETAHaoEN7FeQZ8nSQV4DsbdUYXzyqodfez24BwGxHvEtg7a5DwAvPrEwmuv",
  "key20": "57kRF5Y9rWfyHUWvj4w8ZZsSLxcSmMuj7gJzhZnF2YUiDANr64UQXkBDbtrX4F9UbFY2jeobsNCccoAnaCMvzzU8",
  "key21": "45vcDuimanHDgFp5dRi693YmG9NKvvJZq4fjRvsuBcAVeojqKRvfEMvLqnKvGmQeQEwJC82CEiazPVxbZQTRe7Mh",
  "key22": "26J3SeXUeAQAKHEZZQoswQi5JRk292te9u2rT2a8ZLtXcHKd3DvTDBXE58iy3YxSDGvMWXxKhDo89JtRRFfptL5z",
  "key23": "51qdWRyQi2DhRrjUttX2CfVaKvhH9N5PGYjXT2dq49BJE2ioX1oTq9Sokf8b5GXN3D52nDGPmd6YetwSqBKvo2XG",
  "key24": "2XVp1u5BQTMtjqXy3h7hnXCqh51a4FK4A4gfGVNS9C9PwowbinJHCYj9kBjjtmJeqWQ8onXKQmFjESxL2dXUCBqW"
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
