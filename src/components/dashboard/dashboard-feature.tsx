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
    "cuJfFPrmUBe2eTdPEi5XYzrhW6g2GH2rv4rgwdGQ7Fco5BeMTARZj1PZSZTRnP5u5e23NxZconApFWYDAGGzp3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rLUjPv3dxMnsGgGLCdzJueYzeqwaSDrSEuftbRKaoo9CWe2F7hVEUgLEJoMFcUnYGRozx7BkPzAqDsEeXX7UA7z",
  "key1": "3VPZZjeUw4zZo6TNbc2Ks9iUXTnzVY8m4TDGWE1hBRayJ8Cz6PpNsXAkMwWh5VWtsXrD7BGcEBTSUTi7fnBD6Dos",
  "key2": "byCbm3XeEC7VRfDnvELGPCx69B3rSbT2mqeGtpoHM5FBRWkQhdwipoeqRBxDKEKGC2efBj6meTpQjhasxhbHBvv",
  "key3": "5QiqPVat6miQJVqJajmAeUtggmc5wuWiakBoDRMXin5EdWJ4kUd2LayUs6qE6mEB7Nsig969pgCEQBStTM9NvkF1",
  "key4": "3CUKcG9ChYNmUwKzvArBxkkHPtCTm5cUXcfdyndwd3xZaUSDwRK5JLjFfzv9nXrKNh2ABpwQE3eRP9enmpuu5VMk",
  "key5": "3y6mzk6oVR95NTZYXQRF1BAAWApd2gW3zvi4q8whvRhs3QLbGQVQZZpvheSUfMGzjyBq6R55DgFUPs6FSh8hp4fE",
  "key6": "4fsfx4GaRNRHwRQPSkHgPcYr56wzwCtrJcix4hMMjZivzTpYtnf3LMoE8kYnZdse3V5B7w3aboLMLZ4u4M8hAmF7",
  "key7": "56GLmHV7mtGcCaQf7xrE7TPgP3PB1evhw2dUv6Cw7Q3ZgqUyLnk4gX9oC7yWcGbuww6wPjivuP6zyknKiV1UF1oG",
  "key8": "ja4zvq2VBNcFsXD471PX1yrr9gs1KhzqYT5AvuqdYp3zvY27MWvGQTtAEZSGNadDmP9fVnm5w3Hoy4tRozxJCgy",
  "key9": "4pcvFrwk3HpK1YpXiWwdKVkRLH6rco9YsbG3cJqKz3ubtUypgnJYpN518VmRV84i7B4TvNpbktgG31sfAjMzX2zm",
  "key10": "4sW3Bc5wiCbrZEvnUuYs4UMy5mrJYFT7m8jRPS2YdhBRLnhSxspAhjy1G5S5TviRMbcBz2iWQbmB8NMGfe1r2riN",
  "key11": "3Si3xA6o9AdpCmkTvcFzLPDquJyXnVDwdcAWP4KUrEejd1xsbaF69mYGbF9nMHpz21EdasVpioFBkF4pkVLPD8QK",
  "key12": "4eKutYCw8tYsbkQDZUGwTZBARkBoTYaTBx6SVtXG7QZ6QkXumeougedjDK6UxGjtyff2qR8JQNqw7LQ7BdnjYS3V",
  "key13": "3MBJESnsA21pLsYkhnbRMVUyqYrCCYvmw2KztPhC22oAKdmQTxmPkd4u2anj8NETuW4fMEVseyE2yDEwryE7puf1",
  "key14": "5JiuEFf5P5hTDUWe38csUtD6C35iQjTGc5YpTVwKLCGSkWTDC1ioP8ydo8JgzWR3CFbzXenTtqhuoUqdEEo4fYhs",
  "key15": "5wMA1hvgrBPhHJxc9tkVjqqR21mMsQUGyd2u6zsKL1yz6JDSxcL55is3kuPzDmEi6wkeWw18CcvcZaJtc6TCtDg4",
  "key16": "3ZkBhuQ2pGcQNC4EHGJu6Y3X8cn71yC1sVacPBz8SbX26WGzqV2NA32zPKp9Y3iztLRoRo4FM9tTDvrZyqRCFFRX",
  "key17": "4TJyVXrg1xVjJkfHsKXNZT5EDF5T9jKjtGRbk2oDB3EgwLdbkrhoqK9VPjvrYUjcd8hKbw9zzBmx3EgP1kcRrZmh",
  "key18": "4Sf35NgE2AUXUvHVNhVkoMUZ2X1EWHtbsHMx6zy6tWxqXuGB38kGki7mDYK4uTv4cj3NXfmRyggdreH32q2ugZKG",
  "key19": "4qfWh6kF4BZ6PhXRRbXS4871brFCjE829T4HPJMz75xzuzWwhEPsR4KR1XSStYYnuyzf1vMWEy2K98kugz8n5UnL",
  "key20": "4MhJJBdp2hMKgBHXFHQwzyEsERsFjgHhQVg59oFjmTZNLAK5MTvMcULE2f2KnBMxYJmcxJpyrKEBsmBcRwJ5JPSP",
  "key21": "5XhkGM6qgWMMb82Xxhq29Tx7Y6zSWxSBfMaoS2WHYv4fYzve7HSP93xF95fkMgudpuvYjLJ9xF5VjrzqgXSdgZSE",
  "key22": "KZcmEVgvoKrcEzMbMryPiCXy3variPHubbq8a2Ntku7GMQDk3nphiwToDXjMqF3aazErMM7o4nj4pyjB5PuKm4o",
  "key23": "3Ug52HA4rVYFc98pzFn8ksEtxaUQqZGGUSrdak4iQ5A8aVa8TTL8qR43ty9bwMnFyAwbVJEEfqVgmh6YVivXHXAg",
  "key24": "Gq8ZAsh9A14rD9Hcesx9io2gnAD3S4uvkNy2WjZqdnFxAm653dEvS1z25ogCs2EXVkv2MyHVcm2UKvbKzpk7bV8"
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
