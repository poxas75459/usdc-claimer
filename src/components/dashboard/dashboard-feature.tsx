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
    "SYQbQyDrM3qMxssD1bguGW4nrsMLD9SQ5eYYC7ZwF2g1pG9n2kqdVTfTLekwinvEs3qYf7TwAhfhV5bjYZvLDGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gpSc91NQbZ3T1mk8Xae6zKSEWhfYL2RUehEhpFEkyhFJTVE7ymWMCE3QHoaHDfaEzAbxhZDdzFXZEToEtip5PHZ",
  "key1": "mhBYxekGNkZ1FoZSVXdKiNcr4SMoH3KNVee9tneHRFtqPHeoD8PV9nr9XL6i7ikaQApJvdcwJnPJ75pi74g2v2j",
  "key2": "3R73g43Juphq4V9gB5bNPGS7hTuWPNP117dwwDRq7kANBgSBvtyzrsVt4AqpWxExyiMgai4EfCKCJSFPJB7DbHN8",
  "key3": "KrL9atDJjHGS9hAChV5WMYgQS6Xy5QLmxjbqWvui1hxkD93nD1beAvKLYvs6ahB5wMMjpu566c8kJ12S8z42ozw",
  "key4": "3D73NFM1LsdNzSyXZwbYhSc77WVK5s6ekKSCCt3VQMayPP45YBRCKWgwP18yL9Qd4Dh5Av7SndSKzAr9G1DK9RxJ",
  "key5": "JRAjeJAU33GpvVEBony7odbqfX748HkCqEu8EaAZgETPTcP7K63Bck7ZZ542e6vau87Lv3QszXWQVA35B246pCN",
  "key6": "qUECMQRpsovYK4ZrwbJ56xyngiTazom5gzSdUhBqAMaNooVVqRwHU6s8A7eFhZauB58Fs4YWSvvUhLikSjSQWvA",
  "key7": "4FZVRDLCfWu9muEZfxPDeFuUpy5LfzRwaYwSBf8kX6DJdgGRfUgB6mFyRsg6djjXnCUqucMAygXKq7i9hXHsXyYC",
  "key8": "5offcEMBjgRmJkwT3gNdvJdnatTpVAtWWfFsZ3wYMpgeQvPWpdzygwzFbcaqYpZ918g9twgN8vm3HDNaTMt1z8kP",
  "key9": "5SBpzk6ofNzgLGThKzJ7GMUmaivwZ9LH2z8ekBuuz62g9t6TsG2ZKV7sGReYpsVULbezgDYUU825dQ7LkzDAcCX7",
  "key10": "deVdd6o4RoWprFQ6zWZqjoFHvixbrNBXt3QdtkuAGwhGZYSgSoeED65EBFbLJ3g2Crk5MHpv2rYSnpj3LHNR7ib",
  "key11": "2559k7eRLVKsgUzBhspww2LeE4cX5dFV2bzVHJ3EHuzXHMMSWpo12YjqMpv2WMuxnrhbBRLSoWPqrQ1KCwQrubwu",
  "key12": "PrK5V4VQ9kxcE6NqMj2RGwqLqy8mZjpV7bNzaDyzbBMmo5vKUvYavSmkE2CHW9KCX5UvoGgrS9Ew8fjGB9BZd2n",
  "key13": "2UjuvE4Lxpt9F5W1KqYmBX4LV1qSoYxY9pDiDUz2ko4bagAbt64SVTw5VGs1bjJz5X56BcHyZZWa3BFWdCXuPguM",
  "key14": "bxhdeuPSuN672JXJqRLbZcT1E4xBZqZjupKWAUihwRty1E7xj76s4n3uLVKZPYCm9LULxJ2wCjjb1ehFhCab7Tv",
  "key15": "3yrfKkcZA5JyooyKRb3fD5rDBNytSkAiRvnLSN1MCiDQxUcfjyeXBRN1BCYtTixxh7KS6tWvKCESm55enFynawn2",
  "key16": "2uGzdf7wHUvdiFDdiMTmHiqqmjD37XB518oW6gTdLM7xdNioRpnWMpwbRbfqBYtzmY2Mo2Xkm724bFsEoZcHGNrN",
  "key17": "2xKfysPBLp4Y7XkzVBWxdDe2roqLSc3kpUDHatALcFSZ9uRdEbQbvUK2A9H7vgsF8LphH8StzUmuYPdsep5hvAtM",
  "key18": "4RqytNiz1nidCyGk6JJNGsDWKkMSur9WcBP665tDDGcusHciue8HRkt53NM1che9Su2AxfeGzGrDGTvh8woY7gfR",
  "key19": "5RvcTunm6benLJ7Vx8FqUdHsMVzciXU7EE82PXnaWAEVpLQnCpfqw79Lwm3RT8M4GmPbUvx9K5HkkXsLWcfekFxb",
  "key20": "iWWfcTPDauHPcCdxMCp6bZGZAZgiJndcv3Zs6M7wpt3CGGsX813K4pBugtcaNPqXSPu2bYkmGKK2ZxY5xdUm283",
  "key21": "2HGczubRpzpfPH4xCVzSEwkvxxr3AA9f5n1U6Wo3F7VqoKBYC2Z5ddeXuGNWYKs2vekoLSp3QryPvdkz1wbaSVpd",
  "key22": "33BcdrEp59bmA9TWSVr5jfC3aezABgrbi1fBxpX5sR683nqrxJbjV2RerYTzEdrqnY74eRsJGf71YVhkFyj1cGKC",
  "key23": "5bsy9H7fqFkEP4KqLWyJrGCfLupj4LM7VeWHAjJwn2u9WZGHyRzERQ42qqAhmsAnSqbHG8srhFUhbhGdBzSoqncP",
  "key24": "3bBkU6si3dE47H93EJs9zGXn1Sxwefptmh7ZL3XkunFtRVgzQdJKo2FjLsGygUpx9oG9vuxvEZoCJsdYwcWqzRHf",
  "key25": "4fB4XiqLoQFUsT9fnKnUUnkX5nkxpqua84ck3oBMcPN1PTf9rAreL8yx3mektkrwsvcXLR1SuMQ6ndMdNQedRj2L",
  "key26": "54ArLN4VY72oqNjJ3Kw7dZ5vsuWc5BuPpSkG5P4zHEhYjstfQ49wCFizk7x4NAJrFhePjdR2VhRgjGFAYqpAny4x"
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
