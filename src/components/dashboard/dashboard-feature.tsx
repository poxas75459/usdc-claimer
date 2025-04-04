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
    "2LCDgYYDoyp7gLTV5wdrj7N4D3pnWZbyVcCTJeQLKgcD1VBFcae17jTDDMHnAHqqi75Q5VTcGhtunvytGBYPnV52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WMP9pqsNNjPjUoWYH86xK3wMPMTxWdfWPmbRYj22hjMbo7apgtJRaeeVNVAHaH56dqtDWCe3TobwJMXtWhQciNb",
  "key1": "56YXK7M6orRxD2NdVSBykPduAzPFKwbKFytVLSnDMKKYjeYeqYX6iMMBV8YTfDrcJJ9FxH9qMcTLqK9RyMEMmwhL",
  "key2": "4e9YzZbhp5fJU3FG1Ck4UEb5UivX5EPdRDLYpnFRTtGiRy9vYe2k3aWRznFLQbCQUksqC2EHysbDMDkD8cv2dASe",
  "key3": "o7GqWKjX7PPfEN2TeisqWjCTyQMtWDpcP5jjaTfT6kgzrpSKTvzTKbKQ8uzeoYwqMoMWwesCnyhXuzVYvp5yCVn",
  "key4": "62y8YbbtWrdGwLouAjxABCLbpHguXZ7BpKVvNg8xLTEHZEfAHcE3KX5fQczqmScgFM2xUTDr8HPu4wMYAjKjQqqu",
  "key5": "32oKescMZdFjgnzmq6w74PwqvPKTCX83NNod46f9zmwWvxaPjRWR1BieYho2n3UdKo3xTrhkkFzvkr74ayNGVqV6",
  "key6": "5kE2GunuDXj2J7uP2cGjW1d3D54ARgcbgHWwRqTPueD26F2oXNa14CPRH4wAVMMYh8WWGkPhhrnyW7nCxKuh9vKa",
  "key7": "4NjEBf1CAtgTpmSQcs2uaAoUuuWwjxVW6vMChpEwGNCAVmEsWAWLmGQsfSBrVtcdUjFnUhCZagVfe2p4tYStQr3A",
  "key8": "5Fd1xT7JVhjyeHAn86u3Janjv4m2aeT9KxoF7VF8BNZBoAX8riPvXo7XCJ4R7dRC7QxgE8JcxcpZAmufLUcY7FKa",
  "key9": "3bo8QkuxgmkE7xEzu2rVoCt6W17DWCh52XYSxvP8PRKTXT6S3bkTmeZsj8TSaDhyTqJRgZuN5KutLcvL9duRqVs2",
  "key10": "2D3ZE6TuE9bGdgM9PKth7cB2UKSbBSNZJyLr7iC22vWN4ombrKeQQc4xubffWsvhMfQVD3iMyem4tjGW9LYYR6Ej",
  "key11": "62F48f99KPo6ZMEJijnQQ2g6cQbacDHnp2PHr3ysn7r1bAJfMi3b89QEkxMXgVEKSranfKpVhL15ajdFiXSrhdQr",
  "key12": "5W7RviSsjThJWt4cUF29WKNDw55etRqZiEm5XNVguqd9Uc9YmW7w31Rrat3BZJxL76AQbbrUU4Z4pZSy46f9o8G3",
  "key13": "2cCXEDhpFtaUCcFqxrmkvw1BSrfTzHJZp2ZqPPPWCu28yciJdX9AqFoujzceqMe3aQEAnxXH5L6FZu45NAd487RG",
  "key14": "4WCi4U1euWjJ6bNdukcigXcyBbBJCP6WtkobcLbQyiwRgQyRJpMTesLGy3fd3mjVTJC4dgUBwyjGuu5uAsy2tr5g",
  "key15": "2a8LyTFEoxcKVNYQMLYii6qshJgnXUnuF8TN1nV1EawpTDRXPfkwi6xQMdWCXnVF14AGqU5kqtvKdPsrGBhnp5i7",
  "key16": "3Sgut5MRYGoBvK3hSvJ2BxEn1ShQZZN5j8XTMapaz6rZZneAwuqzpfCHVCMFGiWucxVQKPxEtZpu4sdfbQtKjshc",
  "key17": "5mL79YvBX9SUBgKxvAHr4o2wG2G8WuYtVDXS5q5AUdKBaT3qBkYZoJtNu2sThHETTYEMA74spEKUbwx5bnh9dFho",
  "key18": "mghRvH2Lwp96hyqNCer4CgKJpGVb5g32toYXX32mwC8Z1asR8cCnYZQJneesvrnfmKENJUCDjWqarTgSc3efQA5",
  "key19": "4AyJGFT24dCEWyVjViAyTQxU8Vhk9sQqR6CWe9CWkcQRWpY4yQs63nkAo18XXXfqpyPa8YYJobZUXd4kViHz8gbK",
  "key20": "4Z6RqWhbziDeKgWPFrceo6CTGJQW2LcxNEhu7BfTfFY26CZVZX8CGjUMm7x5HfTBn75dryss15EWKsAHeCUxUk62",
  "key21": "48KCnav3CBFQQaEWkuqCKujMHqSg6jCSSgjZNujbBvYybDgjxEpeiNb7CDX3ekh3Tt5Dw8rjDMsAdcBdvRGRZV9k",
  "key22": "34QvK3P9FnrbeaRNVBidtSCRHEv37BzpuFcQMyFFxM42d6tFn8kTY4ZpWxUZDc71vEXp438MbTtrseZVwWvCW8dV",
  "key23": "4M9uGHfBzQDQq2gajFZvNAz29jWda7wav98gMY2PQd8WJ9qv2Y4tXRPGStJ1ggHAfrMdsxGBN3Wa4varE9D1vNC6",
  "key24": "3cEyUZLzamRE8w3SPwE8qnj7LroBcTWJSbWgN73t6MKsJyytJtfBtJYko6JBREndm5TD3KZp3WA9BtTGgHa2HX6y",
  "key25": "2tfNkaRRABefDTeUv2KYzkCwuvemrWzZz2EbWUZDYp4xpgcQADxLKTjvmJ43DoK33jT6Tpud4zpq33p9BnfpBSFn",
  "key26": "22fLq6GuarxM7xMY8DBzDfAKbNupoGH4m3ZzQyFujCZLkpBRJCgwmWVDvz2ExMmmSMF78DWuFnX1qqTJjkB637Ea",
  "key27": "3r6uhYEcm135D5UUDKv1Yx6CRshjH1MLA4YajECeHFP81k35gQcTizrG9HyK894NK9dWdqNyX9c2iCLVjJ7ks93u",
  "key28": "4gcZqNF9SbY29XK8ahnf7bwmuie8B7dJWanqjtEDKQYmf5JzWX5qiMDULHqezRHkT1eWne7SNqXnMB3LiuZRskik",
  "key29": "AWCz4PCANpkkWZXqdvxfPqVGSiX36kKkN5qeVkxbz5dz6ZVfW1MDzwxpLYVUqVAQoSRbF3QZKyTLFCEafqTWwCb",
  "key30": "5oxveHYdcr2nS7T6musYEQe3U7kh5XHG1ppMHcq83bvLbCK4psX9t9mNCFcKDc8Dm9LyDRZkUadL3F3fwbrTGQPK",
  "key31": "5D9H4vaqtzocX8dhvUzPtXQE2Twotwrgw3eUDD4VDUgCFyVYdjAvZdhT5kDeFkvyXgGdNyognvp849cyxh9SNQYb",
  "key32": "4VKCBBhd9PSPqR3Cs6h7prCFD1H2TDWfcVp2YMsSCzjLgoRqGXgFqaQAXq4fg2AJoCYATKaQkgK1L7ZqrRRu7SXR",
  "key33": "2pF5DXovpZewknrKAtzH577cXJQsEXJfgSmUm4JMVitcdrTfCFqoBSB71Tec3xn2pzUfNKu7ybY7WstdjZYGV6Kq",
  "key34": "5Ydh16ctj9TQKiDwCh4PB8iicbFRMyomKWdPTQKU99MLaUJBW8Jk2QdTjGST9Uxxo6agQ8aMpu4CZknN2ekZqZsg",
  "key35": "4vDhwgjgxiwVQHmaRLwR4TPQW3NyFw4jzPAzYNYWzghiP2iWXM4yvh1nDwxZma8R3KCCTN8PXX4peYG6ZhdGnm8y",
  "key36": "3UHjumGhCQzFf6NRYjNPV7Yae1imuRfqBakWBRq5q2ws7hub4WngAYudg6m5rzHpadhYsVHMN8uNGmtuNmkiCMiK",
  "key37": "3bsD1nzi7LLihFS7MmQz5zKNvgmVSCHxHvR37t4goTz42Z425Yu5yAVm2xUR3sYdPxy1ENTidcFqXe2qGmyLnMey",
  "key38": "5dvPr2Cxv6M987qFB2d4AMoNEws4CY9tzPeEvMBGSgkFvpMn1KBUrMaHrn5SZaTfvs81WLuzffaiax69BYGCgX2c",
  "key39": "MhK9C8dP9W2xTNxKYkiWpZwa8hds47XU3exr1XZQc9faxNE9KfyRDiaCPVcijtWrPz5cGfmdDsinpq4pz5TaRpP",
  "key40": "HxvvJTzxjdKogvo7qFn6n5kX9nahxfFKqS31BDU1vrV8Kx8SzijDT6BQPZYwUPVRSq5p5LUwjGFAMiKTdCPSFDG",
  "key41": "5TnQyx68i8oK66NjpYs3HMhn28BSTQpigM71VboGweeFQVUsTx1pSd4ZKF6z2mqjxVBtU6aiGVrvFXwTCAwhqben",
  "key42": "nPypouxBs7u8vDqZzZiyQ23q5BTBViCFEvyvQ2SjUm3sorKWHcAx6UqJ1dySPXGnr9McHHUJfNZPTwJiAmSqwKS",
  "key43": "oC25VNMZyh79RC3fKdV5a2RjkAQXq1APzZE2S7aNXqB6ZU1gSxtvNWWENSoSC2u21qnYZ2UNimwBa3AzTvY5ZMv",
  "key44": "5GuwNx4YWVZBmsjQsKmzTCsfBRFBsBF2X29cYmti5QtJGNPSFLVDhyiyKugfnniP5n59PFvhBpkQkdWmWN4Ja2oJ",
  "key45": "4vPcds4YbTUPKMXeBPYPbRKNLP2CFjyTpbVR78VDeFvuE388GAYttTvperGqiR3133jjjeTaXwoeX45XTB6M1CDK"
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
