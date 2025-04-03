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
    "jnCHL58ZmiAtZuk7HLxXj9PhT1A4vkFuNLmusaG2qZeBbK67EoxZ1jRu5WiXctWCLPQUqekHGWBZrBwCewaaAJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N3NfiQwAy3miTsKudyQVsgXHehmnEmZKawRc9HpjkEnnsEcgGU6WdyFoc3epRzxk61TUBXLUH1Qo9Mn3nxLy6yS",
  "key1": "3CcPxzH4GYQoF3oAKDGRUNZ7QGzVmPbECeBkFqLLvyDihbRCyZ75FDKUcZVXUeDjZuGMn3wwWKctfdnF9DHNFAQA",
  "key2": "2gMBK1QnaN6UsArb56iGAHwC2ycNaLwMRb25Jgv8wwTqrU6oKvgfGvvvAiB6cs4ESmyYHU5rgWeGtfFarK9YV2cp",
  "key3": "Qo1qwtMrHKgA2uG6NdU3pgMRgUgAT5kVkGxyioxYP4kfk1ZFB3261nvio4HxDpdB1UYTbVd3aK3LFeVY62yrSdc",
  "key4": "8aMNQnfw8cjAPE7HMM2gt5FRy6whaeiFwoe55uyoM67hQZShXegRZTJH8rMbsHtTvpYBUAn2XrYTzLCr3L46Agb",
  "key5": "54TDkq4SzaR4UGtFzabtA5t2qPemAR6V3YqgxukqKtzZSi3Ld6sryjXibHwMUxwhrjuhYMez9SaM1miycSpjigD2",
  "key6": "3f8RnBeyemS4auAja6xcuvq2fEF3dHsiJVHzQDZd7aeUTSXeSj7FWWZrxXHR1LxLCT7F8oFGSCSwHP37nvepqxkc",
  "key7": "5hEiD2PrRmCXsA2zt8wT8md5VMoU9EjYrBnBECPzDALv3k3kWBkoDuD5WseJG7BYZA1Y6hMsdVbCQyjBGFVW4bZP",
  "key8": "2vSmvoYm5FGE7kvwFKEpmUqqMyPbPrvBNhUjjd7o8CpU8j29RJTBLNmsabp7cwtWuLAsYuBrrkEF3T4aRoNk1tpV",
  "key9": "4WKPNGWf6uUbuunQK2ATFbscLEZPcJ9U8Y2HHyr7JdugtndYESo48MhUFxA4reiomgiJVfXMPLcGLizdDjH7ChQe",
  "key10": "QktpG2a64rTuGXKAmiPAwjDXRYwaSeVM6sccskgbzKdaXmE3EpMZxnXQGKD7eeTWynNutYMKqyhAHQfVnK5k9xE",
  "key11": "4oGAnng53LVEAvEm9PbMjAtXxSrAfUk1FytLN556aD6zEdtYP1ZbvP7m3VEsfQEc331cNwNMpaGpQbmeJePhzV2b",
  "key12": "4N7qpTRcFeVByhpBd38dJCJckDCUhLDPBZyqsWpU6Me8LCEuAgHTXAhMKq8pGzWn9rDkmzQwm3eU4xwqt9sDCkDX",
  "key13": "5mU4jJYrdpSszDZxkTsQWKSAm2TXkqLKbd5VQ5WKv2UiiTZqSqvmq6JYHtX1737REPG3svkUPJixktSpnyn2Unyh",
  "key14": "4R95bfq3XGZoYo5QsU9sZTaQvamAoJoTnwvJ29aBZ9spzMke5UFm91kE7ZpZG8EAt3NaazVeYW15PrUPNZjVygzS",
  "key15": "5UFLiGGAdQKfN5DiJhtjwHe7arSJ6LLQJj8WRq8xbWGeXsZ4CEG53qNxQKMSXQCpQ21VkmToJ22wN6kYPpqekB6M",
  "key16": "2TAQBKwpDViyimQrKPcL75kd6xxQPcN656xPfish8zWpNYpTvSe1Q5UxUR6WU9cnDPP34BwWdzuSeoQVwmira8vz",
  "key17": "MdBdzKMereyBd6DsNQNdKcXnqEozb6uKotiV1meMvSTPfjEmQMkY6efvrtKFC4fKC5EoEwiNrCSoBmJASo4Xdyg",
  "key18": "4XhmjSvGVQYK6vpFqVFN12kBnb6X7UQfqXQxex3P94fuQCgVYaUj6ZqAwtxd5mGJMJ3hTbWtmQ4w2vwb5TZrEpaT",
  "key19": "2ph39RdgmQ5ZGtDVRckAUYfieJFb8YkbVDsad946zgwPKMj9u2wbkXKdRNSDjwu9R4DGkdJGQzjL1sNTuKKuC2hJ",
  "key20": "4C4ZymsSLGmAwdzSVc3x1JLyYL9iCZZwd3CWF4Zvy7mSfPZkKTGFhkhe4w73Et2mWrMt1gwuRaVDg562rYWGn1ZA",
  "key21": "4knePudB2Q9iz8i7uP83U45ccMQcpSYUbvS3GRfhPXyaUxxZQaX2MNweM6DdHnU7maVR1qrBkT9ETTMpoHY9JEGU",
  "key22": "86NEka8G2yBWxauWor76sULgdTyzjRCuvdjvuLoHuQj1dZe6rhbB1UEyTv3DsK87YozsDMigpXCzQsnjBfa1qhp",
  "key23": "52uA23eUBABMXKRLVFgHxAmiYTKZjtPNFx5hyTto13VPQdzkMPT4YYw9a7jbKqeMXn5VDZegptn7xM98DF28vt32",
  "key24": "3rUp58uYquebTcPCmPtBAYAcNXhr2LdUenJHXUKmGMx92ZzvGDuA9fS797ik4C5sTsWuEW6Mn9vw7HWcNSYRxtqA",
  "key25": "3HPGMjjZFq5M2yqUFijfqWHWTPSjNnC7z3XkJVfomrD8RvGSDAzvyDYS54UCrbEXMwxPcpjNqVTc7ZzEPxDbA4EC",
  "key26": "5vFF9wBK1ciHoaeibXe41JwbbP5AeHMUJS16irFvArvYFhTPL4Fjh5vADSv98hJQvzMwNvheCoBSsjWKrSzeuz5J",
  "key27": "4uc9S13AUryaQqgg4sVJn5fmsCnLaXptSMjMwD9cvjQ4CEAmLUz7EyMruPDQ8v5z1J1KRKFaGXptbmHwiWzYysVJ"
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
