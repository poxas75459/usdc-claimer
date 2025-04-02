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
    "3kvfRH7erifL22uBxXmYuGBCwv5iyemci4JvpkLDQKdJPrHZpwheAe29rXdC9cHTBqGqf89JADkUzF21EzGDNLje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HnFAKbvgS7wGwrfSCRPBXyPqqLMMkSircaRHcXLLkNjwfCxonHrMMVS2pzdmo8JVy4amC1ogXpCAgD2RyWDQpcq",
  "key1": "2qjWCTK1uDJ99kkyHRJjXL9VPPyFDuJKFcbHftmjWLdkH9n1vJAjT1u9uctCjnUwUhruvFWfxao82KNE4y7mYydq",
  "key2": "5smro6h8CbXogUL19X7G6c545Ao3eLcvjz7UZ5N1qzto3mc5GsW2yXmoSEik1T7iNHZGJ3K8CKmsnc6udfMENPv2",
  "key3": "54NkkEhqSQCUppQnnz3nKLKxRU1U5Q6RUUMaCMTqpRpy7ShQeXbhTbZWxWXAtJHm66eCV7UupfDaA4uCo9pbHmYK",
  "key4": "EoysH88E4iY5MSDqzUUMaELatyNuwqejqbnU6wNE5w6Rwm2y4728eMXhVk1b3d1bHnXbX82vEH9Zqs7jERzFtMP",
  "key5": "4ojGCygJfME62juxzS6b92kLk2ChB6WUbRhSaud1MyP1RTJiUsHDpKzMuv92FEKau7sqY3ddsMXRuwERnuidKs3v",
  "key6": "5UGB17EazvfGUr3gapRFzaosBSwJJE7J6GF1sLwXukjD6Xckj7bmSgE5XZENoEUL49oAVCSZa1qZw65gXeedicvD",
  "key7": "4E6SXKWQsDqzGC5dzsJpYNn8cF8A6JeRb5BNekFqyNkfCkZwnoWy9hn1hC9UfDVPHPuvpzVY7JejZZ61k52m2VRA",
  "key8": "3eJcQvDDoBByff5eSnyoUYnEAnq2kYtkMjBbmoCEdqWpjhd9uxg9G4gCdLSZxgiBAZXA7GEkALzD8g9i1fgtTne8",
  "key9": "65qaUNznaHnM6hA2CPFqV5qnWvo4ZsCLx56tWEdpcVZXur9XfAkXnhqX6uRqE7ih5T2txZipdzMNHNMwFqwjpxiA",
  "key10": "5hExLfGcWFEVWcoPiNUibztF3MdqXQbNsSCHTWNA9e3jPCgN192K9Ymcge7JfoAagzcgxj9EyRRTQ3ubVxqibSzE",
  "key11": "4fo6AkTgcfr3VDAKSRF1ZP7vUYiPpTEf55jfgUST2evCDipWVusZz7apKWSY9igytvz2LNwnuXGiVHzpmeEdpgUx",
  "key12": "31bYGGC3zdqubHtqxYRv6r5xg3beucpS8Vp5EcVmygdiZNZ5qdPkxhNYkgduWzFLEZ72smdjefRUd56chQMaP7e6",
  "key13": "2NjgHEwHCFaob5QhXRJUfSZZH1Mu8tn79dXcBAJYj6kz89NRGaZqWPgjj6pMr4x9kuPreySL4gLgyLfA9EHLXqSp",
  "key14": "3J3XQfoDPz9G8R47JgoWbfnSADX1yhAXjT6HLR9J4fugv2U73dBCsywxokkdeT6CMdhpEa5xvVimT23aB3ruLeod",
  "key15": "fUjD3DRVV5fYwWku5f7JzHZQ1shHV8XCDLGimgchuwChA7Z5V3UFr1hwxVP1ZmxJ8AcGTJnXHDrJT6pwwQGQN4U",
  "key16": "5zcbQqi1snWyc1vj26DfZtbRR16kfi6TpYiJHYpDgAHe4WHpGLuftjsthVmtGq6ZjNERJWmj8AYJyiE5BrrKxAvY",
  "key17": "2Y8Q6R6Cznbc95cYPMVhqmD4pfehQYgzzCoWNJE77PtiUMPWLkVohwnwWxazypgpMPXGvzn98EtighWtrHyHLHR7",
  "key18": "4pLrzN8jbCMtoNK4VztMU2FcPo3RAxAvueZWFHteWRcPpjeubQVu8Wzr6DEthykWmohY15416WCBCaksCUDWzTnp",
  "key19": "4E2QgJFBvKRCPqr9ovMmSUGy7aJBprqPQJKp3w1umdEnqLiKDRUpuxhJS6mJputUtkSHMhwSuKrXYP4BSYX7ibJM",
  "key20": "2YHaTG5bDW4QbzM72eThuKMip1KJjmVWM2duvNeqUfa1T6JN58PTAKLMGRAF8hbyHujkzkWvdG5a5SG2Pvp7zPxG",
  "key21": "trwV5px9Qwd4cZugyKrqqcEsZX3X3auN83iGRkyFJ2VvwUqfQ931TU7APKXS42mEoik839bWFpsBPZAVjY394Yw",
  "key22": "soe6AiZSw9pPPB6Jees5CjYef18HGd1qkFBpv9L7wtZZ3BjqMrc6fJd1ZfiERi4bkt6527ZQg3ykmchWxFUdotN",
  "key23": "25citEUYrgo6SjWzsiVeYSQEzGZzqZMPq5p7WLAuf6QNiBcQ8DUodDcxSm9qWugLGAS2Dr8hzYHoggvCQXRzbJSS",
  "key24": "2hzQTc7giVLYQkeS186nuFoKppTpWVydop81tn7vRKqeivryAFckj27Zsgh9rHEHVsEoSrbArms6uC8fcCneNchS",
  "key25": "RjouUDUXSNkuWuC54qfSD4Ue13rPPaC4mS3qH9D1zHSEC5t4o8GWKx78kGugyyGtK8SgZKewmtdzP5v8z6sQ57g",
  "key26": "2Qm5RVQBaakRiMFp9FbtqFKfaHRGCaRKAc3o3rNk3z182ZsVTpvxvmFmzgMeddqa3ZSGsWVWKayjEPoUK7xQ2Ezs",
  "key27": "5NqjmYDa1dAf4uYMh2UUREjoy53xAxju1Woj95X8R5FZYnKS5KBa4RZdpvUF4yLSefxxhybJHusTUuJN2UN98dvQ",
  "key28": "GYS1wY9qCXwhG9endVzdTScNVNu7QwtC74fAeJZy5j5JPAzrnF9FaC38TsRxau1vrpShZ9kJpj6GZ8P8Y1U3t6r",
  "key29": "2Lc9oRCN27BgeyhQkTengZ3FAkLkosrDsJEDFopE3Egvmq4CVju7fQdwg4YAjY4iJhhuSrYbGDMF8PnXPpMg5vgh",
  "key30": "24dKWZLLA5FyU8ekP9agsaLXaC8dwYGAXunh2WNdEk46sQov3jfEDwMZjN5pyYpYySJJN9rQpqATHUxehjHBYVZo"
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
