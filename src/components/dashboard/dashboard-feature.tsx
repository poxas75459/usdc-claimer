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
    "5GCYCR6ZiQmHp5ZQT1CXx4778BwtBxyfnd1QP4caMBkuyG2GuQV1Rm8xssRpe72q3Qyrm6PjcFEXkpqTUpsdGjHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AHyN8AdGAivhBmctavQfhg9Yf6tZwZTSh4LK3AQw4Q2zvCwvLDL8ia48xDUonVYU4S6ecNBwRULkk2UD7YhV8YR",
  "key1": "2hM8GDHKbwqRPcdLQkBxdFbL7vxWGAK34j2kDUA9CVfHDLpYBAfA9iz1MGLn5rfhBd7mQmKPtEQo97jrCkpRM5Hr",
  "key2": "F96hzD3jV6zgXw4xdaobHL6ngBEVzPaWRoy6X1U1fCiFVHgqutZ8SHHdRqVdxeSAvmfeX8oKqYH7pNHa7AoAY7D",
  "key3": "4CQgusmVK5HiNXyEN4MUBrgN81DRtXwwDQwjKjxyiCTWcuWRhnSjrvHPqtf9GXyUjRrjK8tGszybaQHGrVnK2kxc",
  "key4": "5G1ywFF8TZMyjxBFd6TJrsKFw4YpPUiziTncMXZ2YDgSYUSDRteqbYKMttkvhuN6QJBpPn25SqKues98Fm1728v4",
  "key5": "4LgSPR8p28ygK4EpKErXSXDhGqLr22h3jTn9Hhgx9XCs8HhuAo6qU5iNjyWVdeijrzKf6WUMDbUwowCJsGracTMS",
  "key6": "4RaiSeF2RJkE7LEe8imTtE8bQcdFVCr1ss4d72hoVMQoGdrVSHFfpVu35vchPy6WVhsyC5Ueex4STnMJpkMj1aZM",
  "key7": "2qZQfVCcepcxRxeZeF1ogar2c6nZB4XQbdZ6eSRMbqTrzR9ZYiRRaEzqGDtByKtVoWvDxqNUNwrqGPg1PdZWmZ3T",
  "key8": "4WRWDrNN7tWYRDQ6WwPYhXmRrYAJ84jMdw54zAspPdZ1s5bypm8YWR118cWYK7ZxJYpsTwCneQFftxW9YrzuRU4C",
  "key9": "4ttA1HxeDTv3mhHZqykZFgaMgeciazrsYVnjHKm6YSW6xg6bxNVWp24Vh8QGSroyLPfFL7T2tLpttFwai33HUK5G",
  "key10": "67Nfapt88QX2AN4bUJXJA4nXFXfeznEv51MB9ezXgaBtGMLPVBp5m39iVLkwdX1STuJZnY48RXJUUGfLGa7MSnb7",
  "key11": "5pjcRoK5RWAWys3Xy3K2ftzpd1fswqnrkSDk3KUoPgcMcsnED2Tju7NPARiZ2To9bfjzMDPFV36K2xAcWGgJafFq",
  "key12": "66vjnaYeLTCmbuyyBTjDGHRiT9wbtusc5FnHwKjtvBuRGG4iEFL8qC8Xq7brVH87V8BxYE9icJWGP2j5vcHeN5aa",
  "key13": "5sE1exYefXy6RzgoNfTdNK1JVMzmJJHRw3NbxwsfyLnNtU9kskmA6LBJ94Hj26UjYXFvbiicpDuGqEtCvHkJsP3S",
  "key14": "4Taui2ce3U8BzgPGT4bktqERT1cwiXxo7MG6mu6WCp8yF7vh7CaEhSaerg4TSDRf22h5xvBRvpDuL8EY6FCm1XWn",
  "key15": "4ZnaaQLzppyKzVh8zUzvaLWYSfaNjADGxsNV2YLbfn5YPt82BXBWJZtj65JiKAufcvaUNY1H7yRwKWioPyfJJRNM",
  "key16": "214QW8kQb15pS6FxPGD8LxJ9KxU8VhHtpPrkzkiiKdeP8aCJQK6i5t8VpPfgPPBbGRDjtmT39ejz63YdQxXfT5FP",
  "key17": "Q4GfubJTFMcopeJSivetVUedTMgVCF31ucH6QbNjhHwJP2meCYqi6VZaUjwgkKaMbTWuJt6YmNDWvbt1pw6nfWs",
  "key18": "47FcjCyM1AgsHnzrTLz8AuzTPRp28NgigefrCq85GyTX696WhQacEZicRX1sLZQp6hN5ysyeKA1BXnynBe1yHjEn",
  "key19": "2Z3iFBTKMDWQdxWLzqsEgykDqprHKBybRTS97rzSSVwGZmHgnKF8VtKko5dYB4rU2ziZGmRRb2fvzy7Yu2zwGDfs",
  "key20": "4ATYS7eV7GKSASBXRynAz4auQPF38781525N9aAv9D5oPwdzRgcRVURH89nLW7FZ6HqhEHMpEzRRMj4hceX5iUe3",
  "key21": "2YVAvaqCUgJ1YR2zJXumFvwYmM2eDPKz8fb9xaPsVGmPFeinFciyM7Xektw3beQ7gv7Ly83uT514RpgPva4uE9jj",
  "key22": "WBKNWeX6LevYfyR7YAS2PrAjxYRmYCXSJuXdiXk4BXyX48MiB16TBRSYiUcQkfM6qf2x28wbKnSM4wDjn48wUV5",
  "key23": "5cVNcNrTKydNZzYu6ooZMj8Dx1Wjhvq68fSbgj9SunAgG4vD4Uimb8jgvKxLCjaab8JBJh7MzsMcagyLBsH6Vj17",
  "key24": "63eJDWa5V2UiU7gZ2SfbKJwUNXQngLbG5biMwTubhetcapwXwGD5UsTh5caknCy74LujwVw2u6p524kSzpfVjhgB",
  "key25": "3F4f78J2m68vgrP5bMUYQJwzVC1ZVPaYCdm4x3ezDeK1dsAjd9dTmmohF9CjNEsdKNf9ZDbak1ZY3Wk2MhzJ1T1j",
  "key26": "isBwX3DwyeUEXiWc4me4B3vokecvWz4ucHHxszBNY9oS1NLK9oez21FMLnyxueP7rmLrU2e7PPtjDx3C5qyRjuk",
  "key27": "3ikzzGw9gYGZBx5Mnr6xfEw7qYVoxiRH5swrWpmAVNv1skxBvtYBm2oT9epQ8HF4RaS8vYptao2T3L9snQhH8Zuw",
  "key28": "3MeDSTo3UhDkpGAouFh3NiyMxkmufPHLoZ5FVjjuJ7W6PUeVDrzVCiSq9CRJ87kfghfTyavcP7rDD3FLV78s3VCz",
  "key29": "EBnFFkELP8KAxr4uxRGsZYH4Sh2AnMCVdtA4zuHW93hfsKBfFH9sZ7kp4g19RKLYD2kw6z3sqS6vUmLJoQtMuZS",
  "key30": "29WZgjuBhjiijq2B7hDR2TadXbaCjbA9xeTBcNCiUYMvMCe7Y2DrxbPPkHxnJ2DR9nyCkDSzLH6wqESpUbSkLUCV",
  "key31": "cn7rE5YhcJjki6XHQ927JD9kNrMzofUmxHUyTwait6nPfNdRuq15LNeGuLxWqDGk2nYmYiQYetkPwBoEKtUfeGS"
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
