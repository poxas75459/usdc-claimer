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
    "3huUCcKzdwonqef7T3f4JfNryUu72ab2qiECUvZSXoXChqJMeG1iEE5wx8Ffp9S9BMpgg5d11w5neLi26kgwdbGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33cGZXfQMHKr6nVThqhPgic9LnhTnJc3n4RMv2cYTbFsZits1wxgnPiH3nQFbptrRxdphwiewcHwW6moJnMKQZsR",
  "key1": "4vTwEtfa6obuWVPtMvB4BtUUBE4ALyRJkzYPc2tAbg2MMpUj5gauxePnT1yYC157J1spYe9qPksf1JWGwHkyD8Ly",
  "key2": "3sh3zZuJvgbzcEs73tvYnGDCYguac4MbELcxikYpj4gbhnzJUpfz7VTsnDoDb5LXysBWM9hBhHNUfivFHQRaaCJt",
  "key3": "3UWk56svofcAmHqnxVkQuGVCMSYazcrTxnqseowjmfA9j4seHo2ZBDEiNpB8EY6KX9VprXWb8v2b5d55f1i951ce",
  "key4": "5kscTzWrFbVxwvXXzSQLUUwUuqMomgL6jhBfm2h3NttxzsyzbXpcxr6xywyjpVDeeHtK7ka5smJ3zfJ7gnq4GKPt",
  "key5": "5piAuFs8Cegvjmg9UwVjsNrFqmpcQfRefvi6TmXiR2sjAb2JP51nRQnv4LdHmWkDVBaYUDECBMjVWu3GV5QjTGpn",
  "key6": "56aKXvKpQc4bc2Hf9H1ZqhuCZkSnq1HLh93UwAzFS96SfEj7kbt4PK4VG5j2UJqFCcwfvpZk3uLbkQgYwG1Zrv5A",
  "key7": "2c61wP6MGcczRrn9pHmJ5kJuSg4XzvmYg2oZrghWyfuxcAbDpW2xfPpzx5KcY5nYWB7d6maFxQKcS6ezH6uSVxWd",
  "key8": "3F1vbX4D7BYe9p1dEQPS8Dbt9qKXgK8mG7zEhYRNfchxiKYro3XcRFfoEE5j8QQps9LnFT6R8zQNotuSyDcg2X6G",
  "key9": "2P1sFP7NYDZAtmMg8aHG1KMwnphpX2iACUXcTV7NtaSbxSF8ksx4NvDXAXQZYBec6DoBphB8vnB8XNXRgy4Ff144",
  "key10": "2Ki1ViMYY9HHcxXz1QspSpeqda9cEEpWqkKLwdQ7mHjcbphgsCKe6TaGXu74PX6UX56k7Hoduz4VJwG1NBmaKq74",
  "key11": "3TjEWX2KU74aW8G656oPR2Qp15AEDBt5uoNrhJ5nxjsBSYeA4BqBrXho5j4S1VdWY49B332kUUwK7KjWGgKqY57G",
  "key12": "2TLz33q9cNUDyJqPE8eVhQH7BJdzDZSomhMQPb2i5gPPtVdgKHsKvaa8EHCV1WvC4fpfiSWeLojNJYuAtzxzrAae",
  "key13": "5qJiWxU2UZR6n59F5ZCzs9XggVWLZeda6eYVzVhKz9rHvxLhofwwUePKrK5nxinEv5WVbAVBQawCLRxMKtkNeDCW",
  "key14": "PjHTVZoCdNEX3gXiNW9FKmm6QFwzNZQsEbxTTEPXfAjpV7CCBgwYznRa5uQo3NhF4gVbfJtF31YVdd1poGCoDz7",
  "key15": "2gYugKmW4u49evCq71BeDbJs9bfSTWZcdJtKV1yEfppNMzd3QdfAp8KfpQRzdoJpGKTaSUddzT57egAR67hAheDo",
  "key16": "4nzHiXiY7TGb7DeP55hXTJYiuPnbxw6rLs7gadFQWhBaBg8PF5tnTp5Yp7bNC1P22kXzsYt8BJQpELdzZhZd8DkU",
  "key17": "36y2zAB2wp8NFkohnBWeBktpKpmJxXAXoqKrGsWuSEgUtohqKyV5BqupsQbWVkBhQF1pWjfaXwyPWAVVVQ9dtkkm",
  "key18": "55bCm8rMQzHF9esZjFrDkLgkC2FKZjZsrSg3FMC5oGF6nBK1Sw4qfKz4Ph1e5iUtBMUEU1Yf3kT5PQhrAQwUXVvG",
  "key19": "3ZeHZVY5xZP2uZyzpr13y8AQBhHz4PbRzNuMNoRt6uGpaqNMw7SskKM9hFCeXxzri7z1KtRnej4HkdHbBzYnv3y9",
  "key20": "k2Tidagqr4gjeNqbeCnhnfTDRCCY7jpjmF9oCSm39SmnP8gqaAQK9szzo8RYHj3nBWka5L5etEj6Gi5KZovA4eN",
  "key21": "4tjkxuC4dR9q9Z1uBkrjdjpm4VaA1h5ZRVdfF2u46FLAcjgcrg5QqkYgCYjksrAs7BVa5GV9yLCCZTPSZ2R329Ac",
  "key22": "2FFRqpt4C8MUK8GoNhiyjDzmVJxkNJEB1VeFYcmcMCJ2ofhKKj5cNkC2qyDk6uCbo8x9KzB72FjbH9hfqH6bmzG4",
  "key23": "3FJa4acSm2nnz4iB61Hvfj3YxwuHNHSnubZ82HTN3SPQUbY5hqjfGFKXr1Y8wfHrrPUwGDZE4UoivnufmkpUBdqq",
  "key24": "5QmCSTWTd5ZcFLJviscEQxuTPTzavNWQFRCq6xYs5MihfudQnsVRGwxom1zeCZse96mNDWh4GHhokTWV7qsUYSyf",
  "key25": "3aNDNmRqS1B3kZvEyAabEsBDSJPWN4V2pLcNok8Ev4Xn4ttZVjXmnYD8tghj7MDjYz1rSaAqkwRFQN2ujzzHTnKb",
  "key26": "3eNiTozvwsBS5phyeUJh61m1oEZ41HhipDW8kjuajoG762K5uY9SWLCXhRoVMqFZJ6Qc4iyL7So8dtqNAu3zovnj"
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
