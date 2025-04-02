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
    "4FcBvs8zAucPzWXCFRdx1EabhTkcCNYuaqiakbFQ44ntxGZphhaq2D3W4bGpe4hCtJdbf9hYE1V3LoH35aQgRAGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AAahsccB5hZ91XXURDVKJ6HqQqPmTuSutdDkAG3QkaTKEfyKCUyzWEJdkAECkGWnuieRTgc7vQSiJ6ENDqaMpFX",
  "key1": "ydrZy4ULHDHmp59MD6vGyKdEKF93fUk8pVLwiRtechzU7dJ4AM7tdNDn2nySyJm3htti44rMGQL5BS25uUELrM5",
  "key2": "66w6PUH7sRYcq4hbucrkvfQscUR6LQh6Sfa7vh2sCtdxrvARmsTH3sczfAG7W6KcM3qoieam47KaQfRaXjeeuYum",
  "key3": "D6BcVjL5jQTEnmdrhJLRPWFuTTBZraUSTDyKPC4cJcXjC4oaCRrWofsCerVwJ1vKoRcMhjXWAMHfCibc331882P",
  "key4": "25H64tZ1pzbJqkNooH438THBZu2PUe7FMCXBxAZ1nkvvtXPSgRRnCLAguXvcqrk7uxaLRDwMwJK8KB6RdmH6iZbR",
  "key5": "26j5puAb8JSM7L5ZcQnZsY5FE6dyUEkCvz5hfL3CQV4iFQxY5EWVovwjkeQngoEYF4t8oFViJNyFQJACwrMdxdfA",
  "key6": "26qAE6nXDguCxR9FYaUCkxuCCdckkbj2VwP26TkGyWkwLghuvDRk5jk8ZxeEo221wXw3jzwhBbJgc3N18n51MTZT",
  "key7": "ZM2ZMb5NdwWpYxRW9BiiF5J76E3DPEkygZvPAiwD3L2QjzgzoSkgEu1CsRXRd6RFmUeJEm84935wvJXmLxnr5Tf",
  "key8": "4SV92uUYDr6K3T1u8kpYHHNhcGaAkvVvSGUVQBX2vNbDwoPwEfqSmCDpi6LCZvdmEgkhrKKZfDbcMCNHxPhu7iWw",
  "key9": "NQ7U2JmBqjxGTfRiAGG6TKV6MGyoc9fNYV2ue3M7E9vFH5gvgiAGhJX8m1Qt3vdzNLcf8qr34JLzLfFtxfA1AoL",
  "key10": "65YpfYoNradBysYH68UDm4VYTGQmrEcJDVn3WZbvLjgdpZA6PDtmFSgzsqMzjxfdztgT9rxZYGEaA5VtfKErS85j",
  "key11": "22J7swA2wp5vJh6wGJepCj8K6Z88bCB5XVniVCdz7RupuR2TiRwSKKXdPtaaJkUW2oqLnp7CWXgcaYNGgAQ68hF9",
  "key12": "2CpP6XXvbFMYaGZcHHkyEZogGrLAz2GiBK7EXoLbZdEYUBEtNfykY8jxYTm1zJJhxUHsmAzcJGanCBHLSJWcamYh",
  "key13": "4fP94iYVmmXkhiaQLQbg43xiqP2cjH1WHGXhA4jvENansPS18Zkq9gzvTwdasu3GXVcZeKJNfhHnJrNPCETcSzgA",
  "key14": "3PPKgfQNTbw3n81QfRC4B7abiHWhPkbXcw6ex4exRw7w979NWorrLC6YsDVy7VT4JhjW7xrJXv2wDXediUgYkoT",
  "key15": "45F8NE9Bb5NVEKGAUbW59qqtpXAv8b9pR45CRkKY6kSoEJmbaNSrw3zCPSdMYJX2oEZqzwRBEXJYN8c5JD1Q7knM",
  "key16": "5DGDgMzEkfiiqreTdiRUfh6qnbiZGnWqoYfUw5oxS8SriVTuBh5Grh9GX5Gg8HNQKLKnAco9f9v5L6yuahe38qTh",
  "key17": "2jvHnRSSfNaisHD9tLXMmCdjCdiHE9wHBxXFYez9h6a1RJztLZ3gfUxv7D7FhyMdEjxG1Ydwz8Ao52fTFYMYEo9v",
  "key18": "3fZQ7AULKKF2nobRUFWXFGEyXHbwFGcc7tdqix4MZ2w2WQdX4oFiafNPHfLbFLeRZrxCSi65XyqHqfFtpMfMhaHt",
  "key19": "5HW19MfWx7ArPrnaMD9RPFzwnwNzQ4W8Cqn7fdeAnfma4UbC9qRgMZZtouJ8RYAiN5bzR4RBnpAbbubsem6YjEtt",
  "key20": "59BhYhnpf3sqfzwrTejmLAbDqks68uwtrkStstDiAC6Q4RZcy5PS3Lqfu1z22D3cJqpGErPQARNkjAA8JpGzSjbd",
  "key21": "yLdZrfNQ6WnhwLWC3ggsyQ4jNw69J8vymVeEWFwaYQmZFgbKNVQdbABtvNV3TXKS2z6HAMaiNBdqy2ButFXvDMc",
  "key22": "2jBGR5hcT3XYkYE8UKbpkWgCVrjWRLejvVzDnesRsabBpbBahJCPviWCGp1wwiSzCKmk8CbWBUHVbENpJLWsen6k",
  "key23": "3rFPUJNRwDvK2bU8RBQuQCaFmGVLq5cMrX8D2QvixdQ92FbY4XXXorWWNiPevjWRpryXtE7dBcUFqwQG4beQBvDr",
  "key24": "4UR2Y8Ky2QFDkfGVZ1iUvSA3EM4powdkzimKTebt5CWkBrnXUWdP5JhYBJZKBwDgnYbjNwbptE8hqXFzWGs8rFzV",
  "key25": "2MZmhJoxVoUW3xUr8qH1RKF2mCoMGzQiEuP78SN2UgmLAneFherFDY7yBNFswv6zgvwQosRN21QrUyyjuuM46JQ6",
  "key26": "4QLcpRnWgkbqGk8V5g424bm2quj2Berf5p1nyv9vNtwL5ha5BSnVu3mJ1yNSdKRvM1widuL25U9TCQJhonMV8eR9",
  "key27": "2fxCj2Q5D6vMuvYNPKwakfjCVkLN3m4MzWXv1UhSCx8JAnBKUnzzB2bXB58mXQFLPLr8sDy1U2ETT3QG9URYofE3",
  "key28": "5HL8G27S7PjStcLDA3PQeUuCnDh7gfYCLWX7k8RmJMQJrZzXeEbsBMiEWZBFRvvD5p8RnhqNz4iAgx3HeVzjxSzc",
  "key29": "3CLZDsUQFMkZmUXBSBhPRtByT7rHHCj2azBiN3VYgPisTZRMNen7ZnMJN79kXKTRqrxYLEwXHTHB9KVfKaTxNrdW",
  "key30": "5VzigLbNNcWnh6976JSaaQPfodPGozVs2iZVb8EusM73iSwh67Cky8ekKK9bEmm5M2MJedjS4j7n1bKqqkVip5eJ",
  "key31": "5Rs5xb33A9y3AVQBQRQcFBCVpnbH3H3zpvCArgdhA7RaxASJPMsPzxXdMq9aU2TaqvAyh6GfJQqkQELwhu2R2n2T",
  "key32": "42hxpqGz71AR9WfWJRaUQ4MshH3hdsvBb3WXo19iANkDU969rtPWDcRXLvVs29NoBWY5FnkuXsibUb3nFzfDGixS",
  "key33": "3eimow85zhXuzpNDePoxoY9xjEdMuN7AVTezxRpnM1517h2aZirsQY554sCBtQU4VpgWAZA5a5sCXFSq7bVRWGaH",
  "key34": "qTfTQCogTiN27HLz3QDDK7uzMKqddedTvrKx5kHmvTkJczF8Sw2TGMNZ2L1FQBPwaFTJA9g59ifa7NA7n4CZ2E7",
  "key35": "55X4YF2R8TUGQuHBHU3b9AwWgYtfLcxYdEQpVSGnb83pYzAEppUJ7KDRHFpncRDBEdF13xKQC8xdECtrUz1kQLn8",
  "key36": "2RmYasBY3ZPiQ4dSJQHZahKjY1fFP6nhc8MsAqeiNXDYxUXJKwP4LsNbavzn2DbkVRp4tVczEQAtSi7fZLsjeUiv",
  "key37": "AbYr418VT5pLAT2RYEbE319LYBd2ZV8vdt6ZoAc44dk41YFCLMe7A6s9JqzxE5qYDstSYZhQvjbX1DL51ij4YC4",
  "key38": "346B2NXWoGPzAJau3CffaE5bd6GgXoie4n1mvVUFoiXUfGckC5dYnNDhUia2B5uzceGUfCGsQbq6Ug44DK5RmsWX",
  "key39": "5687xYsjs19nGEPgLv4o4zFhUQsz1LhFUEhuPLwkySwxt4wP5dPMZy7bF6gvFiTcvVY4pNcWk4mkwGAtsYjB8RsN",
  "key40": "3ByyFBY7XPCTYEZSXNGJ5xNkUJc567kr9KdyVomoAgjAedvghUoXy7sL68MnZfh1C7KSsoZUxQfnZrwRA3RazAeH",
  "key41": "kYDy5fusmKJNQmviE27LYtigSCy8jyfxEDHmUP6i12CW4ciWVKw1jK1oXAMeFVyt9yonACrVZqJ53vkVLYx8iZc",
  "key42": "5DRLb3daE598k6KqnoUswRcEtZ17Jd1cKYBUxepUSYKkSbF9gbJMjYxafktnc4bAMhNg2tjPgwQiJTKkNNRZRBSR",
  "key43": "4ZKoPwfz5kLtmJjChWxqUGvRJYUYBoM36Qawp1UCxpV8ojrt36m2Sjn3KTnekqJnaCWvV9k1xeHYHTz47WbPoGLn",
  "key44": "ee3ruMT2meRs1WQaBK1TTFSuEtF16CR4idXHScHFr25PMn7kV3ujncWFpUp5gvCRnRQVX6vH1VLCNUc9vxGXwtp",
  "key45": "2ixrZLXcMpY3YdWDiZbhehonVduLp6XMvczTZAHJFKuddQ8YvZZX2VRACKmZiHh7GKmzCVZc9CS4YWhb7RUQqHMp"
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
