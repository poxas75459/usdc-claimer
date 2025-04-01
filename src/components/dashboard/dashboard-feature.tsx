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
    "7hWrP9dKLc99Rb91a8sMyKdgEK4y6xRVEwvgmaLEBbkMMZeUrEy2JdjxJYZ64zBUx869fonDSudiSrWEb1fCfjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d9XediNq9NizqMgSSpzmrmEfdQKUn6QPvDK3NzbWYEvThSCT58H8PSqkYyU3PaFHoBVYWvdT4c16mNHr4hNsL5V",
  "key1": "3fiujpDtrtEHq5JsUwMKPW2YUJKsBCSHwQiuqKJ4fzfMcAQzRB8doVrETZz7jBqtRmvYzCrK6AVdSRdajeJEApPf",
  "key2": "21rubgiFugiFQg9VTe7kFaTqZL5ZffKBabVvTq15meqe4ffuFJ9BdYqQ8FPrhkf1eWftaT13A2PCgXeu28VbS4xL",
  "key3": "64qZwbUqnBiCVwqbdrpMEZw48uz1eWZedKS6xui8MLkdBMWUmrzv6e7p5UcqWLs3vRPoxtHtfMrzvWjRJiRrp6XZ",
  "key4": "5Tyvv6t2hguYat7xa6DFf73eVfvgC2gsuhS9Nz6RB7gL7EgZ2vFXuHHVpmSkm1JwfD3i6mUUytjTeWGXhrz28F3z",
  "key5": "32jMzLe7VCPX5mpgF6szC6UTMVhHEkGJgay1UULqqAyESeA8Te3o8ds5tNyb1xrrRqLzNFDVLZCBvkKrFwfwD2XQ",
  "key6": "36pRypM4MeRG4dV1x8fLGMz4oAsSjDPgXugCYdnwcWUEevpvThaHrNQLjLQ5WRPiw2wvWoSKLQK1ZUjp7FhH3Lux",
  "key7": "5LSR2sKDPZ363CfUCD6pbiSWzqAj8V1VmsnGbPBSXGfyUeRCgzGkiVHHR3fMLjrDYVyeEGs3SE6Mn6CUuPGCAzJi",
  "key8": "53cZR71pQcdxMeXtwfiKpCfToiXRpCxpsx5g9iWEHSuH37GD65jqCpiS1wLS8wyrWJioD7rwEb7suWEKT1eMjyZq",
  "key9": "fpH4ZK2WDcNMUhjebx7gLgkKXdr54YVH8VTfcGPrVbwHrRxQzM3qWgeDVmeAhF8FzHWEi5444vbH4EH2NTbX22s",
  "key10": "2p5jmnGMgYA5639T14U9R9aHBRLwdZPVsNxJEsuGeahfbXR4gPF9nCbEifzhZLefafQdYGcT3MvHzts8hH1wDxTo",
  "key11": "4uuVBKmfCwLBHHvbYnQWCPQHoHqr4B7V15PraAmoUmcdQjuFDgNtCwZEZeiMaSRgDdB9CAb7ppVJjuBbXbsNFgv1",
  "key12": "1F5mYQC8rrTibtPNd7AFAuez4eG9AgVsPKuRBRe2f4RRmupcKqiD1CZX31s5mGe2vGQG11zZPuS7SXazFksswoH",
  "key13": "5hswZ5b2bgEx6pySgNk4pCbnseGwLY1NVSGPDq4Te5Kg9TxaoGXtmTPn349yB5RW7QwCEATZovcdZ6C8xCqDpTFW",
  "key14": "57sbXgX9Dt8NTJ8SkUR4Qm5TEZk2doVXc8VDHvkNz1vRGsXKjFdcLRFJ4PKmQQ7LVJawV6vUHVxQWb6DhnperYVY",
  "key15": "2p7GctKaKcpvtXRR1ZWsXkT3Vmingwvbc9J4BN5FEMVQDyiffBBp9sKYco7pXQia8suktZ1Aa6sJni6EUSrT8Qry",
  "key16": "4cAbhP2SgZMmBTnsh7UVi9EXfewHXhQhTtc7Cu8uvbQkVWJcyhzLFjxQRrnrZ2pEozKMxZubLFDsWgcSipPeEzkb",
  "key17": "3q9BgCCfWkETexVoeuH9ewbUEegPnPhnwNnCshxn3wuMdQqdYYf8EeU5isjgGmjsMmxXmndVSuZwc8nscg1x8yDH",
  "key18": "4EV6ueB43Ww1xt6mZVNb2JRnoSX87mwh52SRqxkdnGftAdVqW9mimStXDnwxtD3kf265SZTmbPWkbNQEdMpMv256",
  "key19": "6qKf8aJrnfh2eM7DPaYeS9eH5JW9qmwbwy3HyK96vSA49gfAvP9qjv5XhDBG8pvvXs1Lka1tZQ1q3xBYsTnYPVo",
  "key20": "4aiLACXrBycp2tiLnMJMMyh4U2jQZrRbSLHbxCc7cGWRZphsgXzKZeGgjYZ4SF9zV4z6xkSuo8YEuV9y9yHFU1Rk",
  "key21": "3WQHt1u3r5ywp68tKMnJ4cwFNn7QkCjRU8LGZMJugKMYE8qvYoqYKqov4LKy3YA9jdLyCgkeZ3Nyenat8B1Cp8BJ",
  "key22": "5kY59o39iUxMRfxbuBFLffJGKy18nbSm2G5kRQGF968JjAFrhPhkTSGviTAkmmbzzXS13pQfWFZmB2eiaaTdUsT5",
  "key23": "3B3H5sveCXr2K5v7ruJoaPt3yoRfEtZt5ZAexZdMUnaiorokpWawNA23VPSwgbbdH87DoAF12JSLwLGJGdm6zXsR",
  "key24": "5zaNR9bRSQpiHSLgaQdTMABEHT1NjraBqHmmLJZ7H1SaRhis74g59zJgJYB7W6sh8VRuRRHoPNTxR4eYt5TkRkEv",
  "key25": "3161tgL9ghWJ9DMWDo2ocvcHaVmrEbjjvc5P2iqc4NwPByQn7muNCq72mhecnGe7NKZjnLDGBw5s6iPHMGfMUQJz",
  "key26": "2svzKS9kSLzvwDx2TBStyTC7AuhBgmUaWiFmacEmodcamfaom5ou8GNxh2rsALnd8eHZjrAwcwT4yRLZvUzuY3p9",
  "key27": "3mwhdfMNuJMJMtL228aDUoQPZwFxVMzLBdxbbNvxQFwAaysXZwh9uXR1EYa9G1bU6GWfntA96Rz9yQpbq8PW29Yp",
  "key28": "3vbEsjudp2PSUnyr6mFezR279BjxQ5kphxA1WEYMT3oot7qFWNv6KWo83RqYHZNurt4Jgr4Jz8EAbtmVPwAXsKXq",
  "key29": "4NbkbGvxSpepzpSiGiBqeYZMJ13JkxovVMfmd6Mbb9JPqUbatjfay9eVDT5T2HJFKZ3YEo5qCRRxWZfmY9mdpv7k",
  "key30": "3nfwwT1BxehfTABpq77LdGnUUen24AUG7aAJdGryZz3qLuCfJSUY543TzSxjVo9MZnoSM7GJdqHqNQp2qz9Ak21D",
  "key31": "5CsqZbDiiFMm1fDvV7P6mf3hh88PvcufESfp6KpbKCwkEQKqEWdUyEp8K25FgnL1ocx7pdRPtEftBwrWujj8rECb",
  "key32": "4tbkrdG1Dz66n3bubfYwiLYEu9kUTzKrSnbanpADmbbJXnz5BwypHJZfQg2esF1gK3TeX6QBqZgNHXDwzxPFHGHs",
  "key33": "W5X7JNrTY35fG5Yomsk7VjuRqYKnedbnPyFtvaw94hWuRT4EcwatU262pc4SnhLPaEAaRqciuZp8VEAqBMs58Rs",
  "key34": "5v3XJ2hMGCFfsDMV53B8aA8vSBQd6QQaZrZE27vfRhy3qjLHqCNTXErkb2PaauoMsiX981QoichFhFC9PpxVuxqS",
  "key35": "3g8SDuYCPkEMzMeziJ2Y8mprkv8t8iGfaJMpPhXCNuKWGpTCF3sn6TX57CouqjonBmj7hnQxMYMi6dCg33tVCLy8"
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
