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
    "5dteFEP8wF2dHpNCjNPszvc8GBT3ouSfqwV1qdyjbBh4qmjEhrR6eGPrqG1yVzn67Aqi1rDnQ3EafyApUxSVLHFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GU19keCXSMWSt2CjCAmRGhYG4KoEmjsxiP61mfZ61nCASZ5zbyp8FWLoL8BkkqXp9zqW3ZYdp3VeP22U6NFWzaT",
  "key1": "299CVYDAPWS6mL1Tr2zWVWWMxFkS9HwFWbgHmXCMZFYvM8rUSM7mgbJWhWkA12L8AEVVDva14y5DJLSpoCghoenG",
  "key2": "5r8uaMjWcjMsJTtUZRUrZkhKXUxvixpXjwspTwJU4cQ1Q21vnbgnvjXe75QQKi1zM27UfDYcBrpaN9Lf7dJZuhM4",
  "key3": "22xKT4mfykReHLJe1hQKcESAVSasUuKR6J6KXz9Tswz3F88sW4PP76hWARRk5TNXy5Ww25vnHbZArjNerfZ15GRH",
  "key4": "51JhcPBko8iTFmog7RLWJKpfr4o9uYA9ohCrN8BvsqoQMU9JUfYvnMDH6SGGq7tfdMmVcAcZJZ4cDJonrkwtmgAk",
  "key5": "d2zbH5phcwBqbHnr9mz5D8kFer8StuMGiBcB69R5R631k8tXSu2QWLmNuafuSiT4GLgGDpZ6G666PhCb5wFPL9N",
  "key6": "3N1Bt5RePRU36hQHhvYSSyzfEsjp8VQ87bLxRH52hmhABxEjpikGEnFJEUpXDmDukYjrBUVVjLMeD7neKFYwoq7V",
  "key7": "4W7mhg5PvPtVyfLMKgVAiVe9Bor5993DEos6Ac9VhU4R6mXUdXxGcAZQh6B8scBqyJF8nDW1cWgkT1HAUitiW2cm",
  "key8": "5ZSsXtWy6pMNCvXH6tgisypX6nyyKD6KeT3D3gXMgPN5J3anj9e7zmCayCckkgrvTZ6DLAMpvtUAmwX8BNASzU2v",
  "key9": "2HSbMvQw9nrZ566LopxxEEZvirXYjEPsVDSsYiF5riwimkW3MT1vGCptwms3unqoy5JVkfXspLCBJkmvoXfbJA2z",
  "key10": "3XTERJ8NvvZfLMtR7CaoX1JzpuDt1Cw6ir929CgUGgNzrSuKPVeCYuYSaPVwL8XZSLQM6RfqUQx7K1hzRYDt71oR",
  "key11": "2u2D7BFpKFqu1pQScfkwAM24betYCEDt12n5QCDe2WKn4uhi4Y7yCHFa9cUQ44ZfNQkHJzk2SipnhivYyBgC54pn",
  "key12": "3RTg6zH77UZ5sq5WGYww7kukGraTaXpkTGCiULZUGCMZrHteqpqMSBVQ44dVSoErQeu6AffkSAK61n1ib6pDiEqN",
  "key13": "56c8ALQZ8n1gbof6qbubwDwWpLmQV7mfCE3YDXqDnLJvRpfoGGQihCu9ucWZ3ZVVhCRoXKJDWZjst8WWABsACqxP",
  "key14": "2qhGs6cf9ZRgoNRfZxNc8XJLeDoyS7odpwJPcaY4nM92RiafMHK1njm2Az46suMqRboKqoAco7uAw9DpmcGTjrmX",
  "key15": "5KMMTkY1CYKTYGAhRWygdutjLiujYUeNUoMAdLse5F2j8B1KgpuNmK1GZ4BknANw8W1ip6uVanaCexAU46YuV2ew",
  "key16": "61frGMpm469hg7p2GuN5xH4wHAH12eH8pVfE7s1NNZ4eQMpokegKSHMUhkBAMDUb3wtoofAk5FwfhiTDWFn2UKx5",
  "key17": "JMdtEdaEvGBFvKEWJTFz5rmpE5KzqUcP37BWvBnYMf9sQ7G4VZVXcXjHFgSZXavK8o8DZywtAcU3MQRwhvk9Joa",
  "key18": "tQAZcjZNtaw2zp2Q1JYNHUwzpgmMCoowLTcangtzYjPfs6BCmPD8rtQS1cJP4XRJ4M2e42wX9F4AQ9SXiiHvsC6",
  "key19": "4QB74hMnmSLHnkGnEHHqQfX2wi9Xksfe1paNwrWob4ABFiftGAkSJSjG8CxBrCDtdJZgGBHDnLBDRevLdAHNjKxz",
  "key20": "xPPYZDAHkYQwGzp1fvswmQCa5k2du3e9TdaLBTywkuUKzJKBvjHhQu6GxKGrrn9LYiFypZjpEVJcJB1Wp1QuZDj",
  "key21": "59HiudovkWzeTftVQgNMDnHr3fS8fvbapmzatoViTgYYayUUB13ujwN6oLKxVV9RjGtWq4s4KffwRozh3T1NByqe",
  "key22": "496DouSqW4CLiGxH2VcXuLYiWomx3vqUZenceM51aNyzgYZfhCefhQZLe3kZDQ5zsf7drhHZauUK34Kp1LabXPjd",
  "key23": "2jkp1tRJJYmZ1n7tntJSvrYDUHxm9UYZrDS8Dr5R3aj17mGLmU2DijHAzQyb7f3daUmCdTAce5r7tWmX9b5mjFqS",
  "key24": "HXbLXE5XvoZN3aP8Txe8EgdjAwSEZPFvHn9bg5pnU4RVt27exTrcuFwxoWRkb22YMTLDzhwi24WJRS3XxgW6AXc",
  "key25": "4byKi9uuPzCQntPvZsN9w5W4URXPwXZG8TMWigPf8vAep2mq9mGpeBxne4hk95z2RNRZGCdEVTLxqVwMG1tDzCEK",
  "key26": "4RyaeeysvsYKZEQpfHuoyuj6AAqG5HZCH6vaq52cL7e3rkvo5EDWCxRTLzEWFjQ9ELJLX9Qmun4QHt9Lm6VMtHGw",
  "key27": "g6L3b7yFhf4FdXv7KhAyQP2fsPhAqRWGnbxSy8r7YQ8U1vDNDhY5B86rUgtKTYkQeoiFVqGBg5A9keiyvVvo56L",
  "key28": "Ah93CXJe5srnQNuAa9Ab58P3TXUthohzsqzacBfjYeYtsVUuWmpSdRteYH3oEtHQvL6q3egBxB7xfCY37NtvLPf",
  "key29": "3j7spHcJC316XjHkD1GSkzCz7eT4wKRFRtjtGLAFRKSZc2yShz19P3xfU35FGiKZKR5reEs5gjvUSURjrAZYwApF",
  "key30": "2Rs8DiUK8Gz5M3kP4X6fAUVynSKjftawG5EqWNBxFmPWLt6w3j63vx2FGX3z4n9ohc2HQBMjp6kvkFRzEL4f7hyw"
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
