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
    "4w8dPcQ4qtwLEpGshNMnvvx1pq9EVxR1xWBP2C9AmBp1Y36qaS8eYtBufatxuzz54pH2GWR8wDvrdcNFB3vxc3ED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wMFGvsG1qtLyi5jxHn3R8pGZagNBL71V6PYbXMnuPLCsqAK5AfR7339R7eMaEN72tL47NDD4AaZdFJhzEaSrf1H",
  "key1": "rRavme8qXf6MqfjVH9gKoD8rSYnuDxC47WQ7cWYvDZn4Ak7TYfma6vYiBDm7Xr626kxnL5reZwNCD3ZcMmQZcsj",
  "key2": "Fh1RXwxt2kwx7PAsb4BZzn2DbEqAobpTLcwVAck6VM8peXa1geXBrHLm4ogru4JhwPQa5yVXU76212BU4yiwmVT",
  "key3": "3z92buz3jBhcfXtSnWZ7Eoz5A3sXtNywKxM6J6Ez8Mcu97LpnzzKqa94cdUSUU1Qg7BnUu8jZdis3BJ7LSSZq5J8",
  "key4": "3qztnSMbkbGEv2Z9HyqvyStdxCYhtTfPKQwxbQm4hN3YiBKnYAgo3kwYT1spbSbYnCdVUNdBCLkQUcgxGhUXStSQ",
  "key5": "4shUK9sL8ybEWmgjT45bRwEk1e2qChaRRcNvZnqSTwcCZcHaAUxFPpRJk6wxMbSPfyRke1mznANPapFnxaHiUCiR",
  "key6": "65bdNre3bF19Xj4F7PRpibjQaNtmEYJFjZgaPw6fpGb5QgQuoy99B47dp9CQqqK5rSQnoyjoDdYuUFE7GAWimNTn",
  "key7": "2yMEK48QxpcvGnHqKrVRE4KvfNnRqS9JDERnon7Rb9X7GPZBk1iBjb35Ur2tWgErsgt5k77enkCDJH6aULAFYmDT",
  "key8": "4cZ8DPXT6jjxwNAqTx2E1xPjzgCLhKPXRQup2UbsbSHdecrEbokKFQErkcHx3Z9UBdDWmWw6ZBb5u6SogyXas5JW",
  "key9": "g835SdunrpmE4BgsujXTMDcstkxuEQGTwasprmyFHJca2pNx8C1aYcqkkKttEwiPYYAbmKZVKNG4LeVam2uhNaW",
  "key10": "3CyDTpWwD5T44ahcSEmdRb7Pem4DdAM87FAAEp6ZLfZYo1mEDW3SRExSs16W4mchgT5iBjCKn5FAU8SLjoMrhDLF",
  "key11": "3fnkay1qCXsvY2xJ9Zj4YbcHfYLVvo6Xz4AFrfYGovabcbAVSXYytYdE2m68P4QuJ1acUKPuzeHdBWoEVLRwk51T",
  "key12": "Pp9zpYfvpwLkCLd5tYj6LZzpk4Yd31vouSWHFUDfqv3i6BbpK3SPTYiD3QiuaJNCCR91n5zthnHFh4jHEazezJT",
  "key13": "2Di12nuhWya1LscQa3ymR34jnBmJWtLzTdiogvtKj9y9bYBhhVMSPP3ZHHMFQ7QP1DtFCiTXD9HPG2yzDAtX4aZj",
  "key14": "5V5KPYVpDWEy5d5MEaZf4Bkof3pKH6WJKw2Whma99B7WLKRjHj9HcVZqNKzKE2tS3sZrP6gkvVDnXtXSQtMQGFu",
  "key15": "4SytsyeweTknNCWDw2h2r1zhZXgPMV3ffDmyBrbWrLxBm76kmoAhFVK4u4jVvTMycHWqxCM1nsiTiqyJDpDaPSUj",
  "key16": "27iBk21qgukjC2JE6QHmzG8WU9KFBEvDuTTh7FZNHiGdmxMPLoMh8nF5XdG59RvBAmDSpyuLwBEV7rE8Y9hLAAGp",
  "key17": "2hrpCLqPuj6gJF9NujWKUn5nZKHBd3pJ6ki3YJXeeKjrmJpiMhheLPn5E1PkNQrP9YCJB1Ks4y9Cq5Eok2sfQuo",
  "key18": "4JHMYQMgEMHSTWx4KWUCUMZM6EsbCPNaGhW1hmeU5maThpjJ7RYoEh8PpxgxrX4257NBecxYftz4TaFeMtwEjqrN",
  "key19": "4mpBqsHr8TN1zpQo7JuXHcrz7N8vWKp3DnaLb9S9pNkH2QBMzwAyheJermk88T6XSyve3n9mRs3nCF8sfxm1MxHb",
  "key20": "2Ecd4GCPZHqqEwMBLMERHqRFYJjJY3S97zatm5yjFaVERtNq3ooaTSHuZDZjowbpX8ftRUeX3P7EhpTBYqgMMH4H",
  "key21": "54PbAjrdnAtT4xJTrmHxVVQ7smMhKs7bD2iWzimdLFb4BC7AfEURreJ8vYyvEHtNYKCNQ8SqUAVBwMmU34M7anzQ",
  "key22": "66WMssYeUCs3Dh2M4cq3ymWyHzCBhtswGqsX2q1RkYoJA3K5cHbDEptruPh4EXBuUzXP84c9J9GDBfLKena1WD1Y",
  "key23": "4W3dUotmgJspEuTa58YSpwEhHC1D8oMZiv1ejYc9hD4ZfnzyEHixjyDWiU6438q3D54WeVAqKryEsiqS1xjuziZd",
  "key24": "2gubfFDNyrzLKhfVbVD2BujnwfsyEJxrMUG5iEsdi5uv7z9x57ngFzwL3ruXZGzXjZCpZfcgoT5sCYDZo1dU4Tn7",
  "key25": "4NcMy4QjPxdcm5DWCBTpQg6DDiSA2oENyabweFPQtghb8TraqpqsCCFi1Wr4Pe4QNotuTjnAqst78vptzw2mpAis",
  "key26": "qEw8w4dfojoHz6XUwsJS9FeKtF6dQ8BSfBLgkiSdA5CrqyqDhGMgu9SbyZJr5mveYoeUvNXBrsALVFuoM6NC85E",
  "key27": "4dAC7kzpn2fS92U5sqD9QgJ5pqTi77jKLrJsgXVGifSiLcoSvkyWSDRAkcBhCkYgndpaqPxqRWaUhUrA86uF9Nos",
  "key28": "3EvDYG38Yf5D6f7gdwzJTqdB7xKKPyKjNFhPy5QSDNGjMQV6t5gd3Q2QkQcgmCj8T1ZZAc6L3iQi8CQutdCB86yL",
  "key29": "5euMPZepqTSD8KmvEASidYoCvBGPgSnAyCEAoagFTTGTBJpSDf9ZhusaGhorvxz7YDLDZzFFnxAtnfMgz2uc57HC",
  "key30": "2PWu1X979xpkSqGYPoPcWZfkw38zjThvXSmwvLjUg8kyt9uJWzbdfXcoBYi3sx31WqoZh1sMcQz9n4RjrL72KKtX",
  "key31": "4arzeb3tdmr1zr5abj94kTdH9ZXur1ie2MSB2x6TevgM5wdsP3R2uyPLzEUojcVnr2Ta7Tqr3VhQSJKv6YuLFeo6"
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
