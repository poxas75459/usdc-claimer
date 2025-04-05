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
    "hYFhmtGQ76o7QScf9UQKapMpVnw6E1ozwZyH9FdmxbbB6DGbyasSTgLvu2hYqFkFqEKVzoSLxGDVkQJeaJscLxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dMsZnnW6WuR8nnvoWjrvd4WmQz2iLd4FtPhYL5C7TeWLAXD1rafB3bGrwqSFEQdMYKsdVEpkJJQLM963zgPGwyD",
  "key1": "5QmJwyYtfazQvi196a2mNAvSeUtcK3wLQbSL5QfvNsQnh7Wq126yN7W5HpryAGUoSGidYQH2VRjmLGr1ukPFpbgw",
  "key2": "47Jbr1fqQqCmzbuahtcGdy6pkTAY8SHTiQYk5bufVPoey9aEwQoSpBgU7FKmd5qm5Lqp9JK5u4JEfeJj4uxUYyS1",
  "key3": "5WnZZc8zjfqUGZoKLRq295BB121AhTKaiQj6jLetknQ78HsenGmSEmLJbs1t2UqX8z4JtD1vRDLy3kgw7yGTzVqq",
  "key4": "4HmgDXX9VYANvizNwtevJjXaRABgZLxvHqoSjmJT2msquP3sFKkAmCDD3qHZCVGjofawfXt9zcJjTrnpuLpHJWh2",
  "key5": "4CwofMS6cuP8h11wyLLZMJZfYG2yxEi7rvvBCfDQUfANmDjQRtXbrpEQ9DmvUcJVVRLuDXAAc2KwEJFQzAt9MkVd",
  "key6": "3hByZCtd5vW69iXcAkUWqYfSbYsQRRxgzwqAj4B4D4hiLwdetVcfEVm6voSTMfWGrNkZiYMxSLCukZ5tjU9Tn2CL",
  "key7": "5EzkpgGXc3mSqS1MBip4sSEAH3CoC2gdm5JsR5PdFNRHyhL1eCxyNpRrVDWrasR7fdhQmUvwMYe4WUDLwGGFjiXG",
  "key8": "4Bq8yRwqPLsGGYomS5fnUZHCEaXhQNfkn2Ue4eYRrbvhqRTeNCUBWEEDw3MJoR8ZdJQXU4jnMsKhagtoy8byQEpX",
  "key9": "o6PWg8oDhd9iE1nbHVWc8SUN7g82t6grxm4rSPvj3sTkTgg1AFBJwmKFjbPg1Gt4dJhTdKM8DenxZrGex2mXgiq",
  "key10": "38fRrG7Gkesbdq5sHKWN8B2J7yrFEvd7ykjD51tumJ3hvBMgHT5v93kkkWUF8fAYNGUsMG8mo7kNX9iAahZCjVzu",
  "key11": "Y9xLTq97Y738JMRnqYxzKkoN6Akh1Tbnw2SBPseSHrpDZxNYsHn3AXdVWArLpEYQPZYnvJ7KGhod5bCeVbgRrL1",
  "key12": "eWz6H6WCwHAJnXqECVkys8p23mpPMVuNDJXRAERv5R2LTZr3HwN3DzBUUMBvGmCzwBtM4VTTqLbemhaPF9Mouj2",
  "key13": "YKJYgCSvUdTAiUqVsvB5ewayeZtchCcwsj5LucCaEdwT6nvoADoXwe2AcNiCJ8Ly53adc5KfRfcWE3wSkmrYmkH",
  "key14": "632RtE68JYJ5skudiY8nJstsPfChjwWATz8wUQXQe6sSkSKZ84evLCe6Ly3xMLrQemiybVvdq43m8LgGRzAJAM9g",
  "key15": "bm3gYHsQsqQhYaVCHpBWaPoFa1ZHLjK423FnD1t9csFGPqBurGsAct2TmNgVCQDJHXjoLoMW8UDuhfRuTMxQESb",
  "key16": "31WfLhP1hT98qHYN663pWT8e3moYasHr1UvcdgTAsYHYw2ESWKL3AWk4Fg4QL7wgJowecXWMHiWqTWJZmnWjmKAf",
  "key17": "29y6UoXbqUjgjCUk62brQxg5QoGiyVbatwTRocrVKqycCjgUg1UNRLaEbqLmupYwa4jZBQBNjSrd4iJy6BqjEYMZ",
  "key18": "4jERZ3ZMYZe7gr5zayhTxXpN5AkWSp7MJA9WAiRwWmD1WPpNsc1MXkTu3vHFbmv7515aVLErvUad98MC7KPvv7zm",
  "key19": "59voYDa5o2K5pyWjjRf6npCooHAtrhdyScjUVF9cDpWRkA8c4bN4ZLBwxjYGzv8MKyqKtpacFYKeNYGo5dLaiS2G",
  "key20": "29bb1HgzgYT3tDbNbYyuGASV8ZJUTxqDwDWeDH44Gy6yvHpgzzjLmnwmyCA2wvu5NLra6WTUVPW4CZuBPY2t38h9",
  "key21": "411jgVbvBz6UmUTMypmsBzmrHvjcyr1c6gEkRNuTFN9uBz2XRH1uxXFS9EMQ7LuWjrnDGuvQTfst1Gp7op8TNA3A",
  "key22": "LUvitsdhczUkhx3rp3oae2jQGDXryPcafD2FjMFZuEQxusB1hnvmMtHPQq7kWy6HXL49sEr3RSmd2X5GrkzH9AW",
  "key23": "2sKw9miFTi5QVrbabgUNRUMe2hWRbYr8zXyZ7WEVaMoWS82RwHPw9SfhbaJJuZFcVQhs3UTVQTcceVBzCVHC11cc",
  "key24": "4nX5rinwGnMEfoopPPCB4kKBDCMEsY5Pwt7U1SjwnNmwJQiJcfqkhT4Bp613VUYQkTYGpnwaj7FU1DnypaJ2jjv7",
  "key25": "4992582FsdVpk6rDoZ9yzsPyP4H3wnLQfBkadNKMvBWp4dpJn1nLNtmWis2kdBHb9Rxsj2b11VeTvH1JqXsS1gFJ",
  "key26": "52FJLj3wP1KqzdFM5WL5prLdZdHbqAsCy4yeWotGmqboYJvEQWytCTajYRVydFR4hVBVkFMwSqtn35xs5Uk5hfDh",
  "key27": "HsxvULN51c5izxVuPiyrcpy54VRHyonjtXBqJp6thHnh73eH7VECzoad2VpXbQ9GSQbeNpq9RfYSEru1tBR9ajx",
  "key28": "4JdCdfvHZZ6tU8zK3FPsjFwQo8JvATHEukterxHvRXLuv7vD8kqgAYyVJ1dJkmEwx4RXbubHUyd4oeZM1x846Hp6"
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
