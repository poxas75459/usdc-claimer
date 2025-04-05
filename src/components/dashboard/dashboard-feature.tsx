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
    "3DRvUb1nr8Vmn26R9ry38fRYmE8yGUpdm8Nko99wQ3uQ1t8h8RVMLvo6WszSj7VRWTeMkPFoNASbgYGud7z9X1Ff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uT2e33D82UgPerj8DSC13QfuPX3DtEpFJSAZb3QVrMVDTgiPbYWSezTjGkwQoso6m4ntsbH7mQUCApNWDZWR9DE",
  "key1": "2bz4AbW6s6b6xWRxFLTVr3hqM7SX6JDS5GmttHyDgLmmwaT9AKYg1c6HEmTDXu2EgkhutGjAiRsKJPjApXef7os2",
  "key2": "4cjRK5MgigrsGCV7oUM4A7DGWcjMmdM8SXFktSSYD2jHC71DHUTZSu9NteAJPwEtFXtF2rJCEGFebtS2Vhb1PZ7a",
  "key3": "3QL7vwF8mJV6fSiCXWtRu7YyWcdTcRiYvDwCxATgFGg5ShtfZHTjraT3rEpaWhPg27mKj2KDrxg8oH4kkfq1AEKy",
  "key4": "5KW9oXQHyqe1bwDShE3hPKWcTUeX4rsgHFaXdCC4wC7XGLrpC2AtLNEcFcpGyuMv9LZiRqpyHgwNk4yJDzPJCD6b",
  "key5": "2q9g6DzEbrF3qWjEXw6mMsdNxuo7Di6Vvidp5GB4H8qA5rLdAjNgoha1wpaQJxk9d8dy8UZmbtozMemTNf61xFzW",
  "key6": "4eAe6aN6V2nrSV4gaJJe6T8GJe6i34fFVKPCor1CKFZppngoiyd4tGpqqvLdwjG1DUbUSYCnh2CScXVCQArEXYhk",
  "key7": "xJWJ9Ee4CNZdHvJPLUJXKDYLb8bSriJ8trXyLnso3fQou2vqVKSgcKAW1CuS6AYCzf364xBM4taGAWDQDvQvkQG",
  "key8": "8SRPs6y72uGkZ7gSGLpsVBddLTbPptU6WGA2BRPwDnxBoM8VcK7BxZ9PskkmFWTdMj72RgbNpKQhWviykE9dxao",
  "key9": "5e7o3wJPdG2JMPKyL4DN6JzTwKxrphdVV5Ei2uqherCmyHEjJgdZ3v1qiqT67gZ3RTwBJERkHiaXVtDU48qRwxGB",
  "key10": "42kF46Sk1v9ujKt1jwTKjeEdP59sCdynrcUrhxj6kToGT7Bm62hQEm5rJSjdk7zxCeHXtPVBNBSg1gRPtriKux69",
  "key11": "56SF4qjUuhfccnX583bibHtgDkZwGidj9U5d6ke6D3sFkx77U36BcS7x7L9a2CRXpmGmyuJ642yZMZDLhuAp4wT7",
  "key12": "5VVmcdz8KpnzYYEszCB7wGWHZT33VJJAmRbaw5gfoESKkfDqYcCYRhuTyB6cZsXj3B3G3fCSpZ86XL7t6Jw3hETQ",
  "key13": "BBPoY7HxQNBhAJJMPJ817Tt4SnkQ1WrKCCgnBasJq3p2KVfRT7HqczqtG6v9yrpk6YjeuBGXLK82zZsKGFHkxo3",
  "key14": "MkNkx79TR2VZXgkMwCaAX9kiiq2uZhYYRtq1dbPJTmXkKvA6aySWBMjntVSeLJJVSZ39iMhVRpwN6V8frA9qRDi",
  "key15": "26h7m6jgui2cbNfE8hi2h5UC8gBuid7MuabZtotpJD58q69tB1Lgk3QbzhqZUn8G1GYep4x1uGYRK61QPANauUuv",
  "key16": "3QFhXyrr8G8EdkfoYCNsBGHyuEmu3ByVr1fgYQfYx4B1an8NnnC9MnbuGhLdFCHcJv8u9ryA3NUsDXPD3Ryt25i5",
  "key17": "5Ct24WAHRbLdX5sM3tGCrXRcBQYVXfZZNNa1XSo2VF47bntHDacAHx6k6hJEpqddrn5TRDgACNasfsQ4QB9CmS8M",
  "key18": "P2anHGzumLsdG9UXn7hXANhjYP3d949JhfVTE8Daf1ykeD73nMMTUuVCFjPBZwh8dBjRh7GBqRVFrXqCyYJiaAy",
  "key19": "AWN9HmS1kkb9UeoTC6kPMSYGWtmndqQyicFwFzep7F2kvfSRDPkxrNKVSS2HAVRWzNs2nPkH62NQyNwZ69DKebd",
  "key20": "57YqWK7dPJ4S8mz8aY5AZggQ8WGTe6V4cJZJ1jYSfnsm2HpMt4dWqmeY7JQxQmMggukDgFcuwVoUv2kNDDwu2nx6",
  "key21": "2bFE9NVkSysZzzy2WnoMubDfgTv1UEj1HzXMazpzm44q5mygre3n1sgZYjeBoyvYttPHy8CzZAHJgggvyfwYxDtY",
  "key22": "2y4JmLowu1ZueZFzBxTxwvjzQ6yxounY7sZLWw2iPCJoAePYE15RCRjG52mnpAAcm42xuyK9F2SjyWPuLxGiUUAH",
  "key23": "5NTS8JMJq3UoPP9L7ngpvcz3mA42RNhFC4jQTmMGppqzTGRD2hkELn3aFPNST3jJKzg27AoTHcoqzGgY22CGaXDT",
  "key24": "3xMHZFjJQUbgt8HHgdmPjBRSV6basjUE1BTEjSt9i8NkMEttcKmMut3AideaWmMrGCvV4Wsy6eJts9tHCTEsWkhQ",
  "key25": "2AhnY8dkUbhgjjAokouFdHoxoFqiWW5T3HV8T9RDvYA47HpS3BkaX8G7Tt5pH3r4dbWyYu9d5oaRDwXAbL4hE8uU",
  "key26": "22GHNSXmdxPDezKyk9NnrHsUwz8f4JejZW72uH46H9aPPTsKhz4T6ozLVP64hWc3nt4FuDbq5eyq5jdVHfMPNL2G"
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
