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
    "3qQFBNu3sHAqmMak2LnwZtMzsbs8Nnx11bjHbxxDTnuX6fyc3uxFvkdEHYCyd5gxHGeFDnkJMbDiao4ypQ4oC1cx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TCvujAp9Qd4AUcoHqoN1RUnx1AotdDUUYXhAY2bx738wtX5UVqWfrC6SYwrwfoF6pagShpS9mybUHxihfdwYyF3",
  "key1": "4D7eXHVJUuwfHpLmhwX62uDFueQke6M8nwLkhiNoZ33BJ2uquDVCr4rM7UtdnNWMafAEn2UNSo3NEZ1HvVJPp9Vp",
  "key2": "3ChqkDztEdCfcfEqr7GE3aip5mTrXbjChQmHHRLJBTfDUMgR794fhaAUrUigB3iiH5vyCeJbNjqfXFYA2HrPfvEf",
  "key3": "2sm7FDoWny6Z7dUhPuZzeZ8yR5LeCP3oMKyG9F76tHQ1BJCQ81QoTMgJHMa9zcmScSvPqefsdsYaVE3DAWUGgBFh",
  "key4": "3mgMXWcd6Xte1WUvsjAAD4S1isoMskD7YRwHZKHXcf3mRqpmgZdn4rVDypTAKtAdaVPMzwho6cP4f9vJ1bKitMm5",
  "key5": "4m1S7YnfCLhXrtBHCM2YqVpEWY16aDcbRB5qKKuPjQSGFgntjTuKEWGckSzhifeQ2hnh1SbkGTByWSRb9iGy7NF4",
  "key6": "32LE46UXSXVwDA7xFGSzWA7dG3BEZX4qzc6ftPDSZVCQ2Rz6rmGcVdHtAbWP6sgHx2sECo4aBJtGymPhgG36ypxu",
  "key7": "3SGTfcpdi1qaqa4B7XBNu9XL3LYaoiknABME8FAonHrAY727U1zq9k1yxAFiRnvESpHyq3rcKweG7jtaDwXXCUbm",
  "key8": "2Q5EW26yD9xCebQ1YdZ78XSxhYNbTJdq81JYrGMCLAbo62wDYXUZ86e75HFZDcfPPjEkSHfFBbkJvw7vdNRUNJBM",
  "key9": "2e64aQ5YL4EKyNinEFmEyyp88NnrJL4XX3xzFHQXdGZPGToihGtkXpw1nUdPwi2kNTWrL9VQaEgGsu4waoqqQhhK",
  "key10": "DjFwc82qJ2a1tPrUx5jqYeNkU1aQ8BPq2aowR3foZWYXSwYNgULDgsuxzMCBDXDn7V6Zjbzkxm6k4a1F66ygf4v",
  "key11": "5Fo9KhnFjeUn5hRGiS6kXiYJ5QVNUijTtbUqUL7R2jPKjarrLJE9NDr5Umz2eoUBaoPUrcHELx21a1k7gkgpj4JL",
  "key12": "4JE9gG7BNfyh2zsbiwc7AosyZGNTgqK7Hs78Rx7xY96v8cfGFCwkQZWsDXZdjLayXGxWfM7McKrErHgGvcLXybuq",
  "key13": "6ts7Zw1cuGtstHnZu5i1pZiMbeJ2ez53RAcfaYiTuToiXEw2bwgmT9mJsfPWLRfpZVNZg8Ukfte2dzHY5FSn6W7",
  "key14": "5QvMidbuQj9oPZ4gABee5DRfDEH9BTzicV4bHCNSHygd1ku5VmKVB58mMHPcUvcaqLx2N1hmnayJodNw3evECWj1",
  "key15": "4DizVvMha1vxdtVqnrckxA9xgACWUZxX14GHA2nUxdPYFBy1T8MXRDhuaor7bWF6wZSiWoYx2kcaDKWDs3b2AV4H",
  "key16": "4EKgWQkr7nDNDfTGofs54iTTyQbCtqXd4gQTiD3Ga5HDkaCP8G3hbkpcSiotbfHu4ZP6dU35PooLYqxW2hxr49qA",
  "key17": "5EZEXwS9vJWGLT5QoNbRvUq8q9M37wKMkz9seaUifj1KjFSP38jTCveMkWLMx13TApbivSNvM3Ej4mogNuZt9cbq",
  "key18": "5mJHkQmMrcePRM1s9Dvf8P6xzBA92pbMvkgrPmhEJbgzQVamSk76qESoKtG3vgJAeH8i2eUo74Bqjeqoa22qqPFE",
  "key19": "67616EWNo8g5C4zFWXmJbxzDXQxWPvaNKQam1YG3UoPq3Zta9EcArH4U6oRva9BYjpQhWXX45h6sQGaWD2KnFhz8",
  "key20": "3gVEcyicLujwPcSs4mCJuMsfZzNTQCEVX9oXJd4hPQKfY3X9Ry6g2UaQaSspjefAUufwQNussLnDDJNXBSChvYeL",
  "key21": "BoW358sype5VD6SqrxgeijuGoZC5714p3dzbNk7zvAYWjBvCWq8CinDRydyZMPExCxrwZBJyJkzAv8yYK3WyzFv",
  "key22": "3Qybi5KKyuQDV55YKmGntkCeaPT5LDAkprDEB1siHYhvxayjaETmNqWN4EU3FzjrYHbKP9zQTACz4uDN5PPdiYni",
  "key23": "3iw3iityw2r7abQwqJzqXSnc2ur6RAED1uU96maxe8noXjRdEzDokT6Juzs3eTB5SW3u6VCbbT1ADLeWyghmtcmX",
  "key24": "bdZNaLrLpfCRdSdNFZrhAjakCD7AyT2hzdGp5zqXGgjdBWh9VQNUZXKW8qWr7VWNeYpXCb6u5QeX9uMm4cgXBiY",
  "key25": "3zUWbi4FWYtrHts9dd6AVrwynupb1Q7TpcbKSRQWzyFXziBPJk9DAnFhVP6qMTioCZkGBSh5pij1YxGm8pKqHw2o",
  "key26": "2gGpZTBshG96U64AYdbejs6riosWj4BCzeWnT7PhfZgsYhNuzLKqtg7x2zQepsuNMyrn5AD3GYynuXDFRc5yAygS",
  "key27": "opJg3CSevUQU5584HLyQbjSfWLMnFKWcMnot51myTEkmzbPp8ovWQK1UVYFmRkwJ8U5RHuPLLjh39edgBTwRW8C"
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
