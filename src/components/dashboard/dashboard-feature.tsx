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
    "435NNBBk2cmoSx4NuxSsVstjQo1zg4yqm9faLQpHLYqeQoKRAnz26opVFS4Enkevo83dm5ScWnUgoPLK1hZ8wic3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VHirS4Mk8vxd5zCoVeGnGdnuScjWihzfsJK7Ap5JUZpJKKKWd6AGWtJTYz33Lj5NXJnrJzgxoaGsNnJ1ksWwNXN",
  "key1": "5x9Cmuawr8AhnfUxhE86FbSNPh6bV7zFzVgGbgfWfPjWWXmyv4Xzw81NSRDNE5avKEMwqetXn2NY2DuxLwbcCrVV",
  "key2": "3Le3oh5cyGvbtSQwPK45VvtnKZogKPuYVThRevvFyc4cZc6TD3SVcWn2ND9yxrAcZHYLrZ81LfQFMHvJKeSgHDs1",
  "key3": "4dzFZ4114yiuDVbAAMjje2fs1WKiaqxSFkux8sSH4m4DmQYTTH3Zrqz3WfNJeh2Saev67R9Tt24886xbgEvTXpb5",
  "key4": "51c9cLf8EurqWNT5UVh1C8K4ZnuV9ukyid9Po1ZKqoCc3gNmvZH1WP3P8AQVXeqXJMnw7hfw5hT4ZW9DprEMNLdN",
  "key5": "67dLiurhBh7vy7VpX7Q8H2rpPe25hxmTSJ4hnRLg3Ghxngp7Cbz3bypad6bi1g683epNFsbWc3FnaBCcxfRqdxQV",
  "key6": "4nBVLEJNupyZzw7DfeRJmrL9Yrb3bdYGvgiCrSgyF8nLFMgKyGycdZhkqiDqK9WfPM6hDMGiRvtTA8X8Q4fGb6ot",
  "key7": "4yQKKGdAYaicAnqLW4Y6vCeWnSSEEhNucp43jzCeR6TXVcakA4eBKMDw2ZGy51gCfaAzQs12dFBHVssJhXXzs8V9",
  "key8": "39dZWVXu1yh8zEcpEK2YgGz4oMhevDfiEWCqhhB34mhLXUXRupHaYSDipqum6KgB9gj7G5xpSkabhAjgncDPTENd",
  "key9": "ZjsS6DDEqbKSge38Y7MbwLqRotjdUBtCYFjonwrXdsLXxmrZZyNbyh89ws8k6CyqsU5DLHWCPtoA3hz7EUD7iZe",
  "key10": "3LTptEBHGvjGqp17WbCNfiSh2yzBuJAgSadKTJbZggqTf6QTg8s3sUZnvKLKqUsLfBUdNcNLsG9HJXkD3Bk9vrop",
  "key11": "4abBdoRTndwVdoT9P16vpcqT62Dsxh95nSpBwJRbfA1d3CvpoFiCeqtyACz2FhjBjrM4EKsaa77sqpY8iYjHSNV5",
  "key12": "3xYhoVg1DG3RvtPh6gGDPzFRTSkySqXFPsBcYKDv57pPo72y2j769jHaAiNo7XmRezyTTJGvjgyqVGamqgGFyDrn",
  "key13": "4tmv81gF7x75u51YLXek4ZHUjVt4K47y14vVpbnbyz4xb7CBYA3imXBEGWGNPJTq1M64Eo6aTgFRzqNB6KEeEzWd",
  "key14": "62Ng9bZZEvqi1Egdf8Nq1KCQXPjJ8U9YRTYtJNs9aTKuRRq5qcmQGXmwWtRyfApQcStNhPhoFJUtKCnkLpA5efyu",
  "key15": "2wJ9jGWjiZFV9bb4rNs34YxjZ4onq762nE36wHJsJ3uWvKL82U1Yqgq532ataqUbYC2tTz7ensmPV1enSRRE2e3n",
  "key16": "5xLC3zqnkpCvRbJuSmCSUjyVDcAhmjJejAXRea8EwWr6EpxugBg5dJQbC8zisLSviaVGYrtWKRwbG9j7dZbw1Psb",
  "key17": "3w12yhp9kbxYkXha5KR21EZQXQ6ZK6R6t5tE24MM1Wv8JvFUdrLcxsnGf2BRcKDeDyao5tTKhLJwm2HWehuvVkyL",
  "key18": "2r4LXNwgrGo8vzZxg5DHRqc25HihVScqjVHrNXinWNarCgb7v2FyDuVqUa9R3EMJ8VAJt8BWbCQ7MEbh7iXtoGTp",
  "key19": "2PNZ4qNQbZhNGBAcTGL4vdry8WWyvYFwYG2ssJLrXtAS5UMj3ZjdE5qCSSQnn9Tes7QAkqsJZ1RWFMkb3UZecj1J",
  "key20": "4nXcAmzWEvBfpFprCCLhUN4rQGwsW2sMRw1F5CKniNxCqKALgcDf4MtRUzKZagTZNJFuUineR2kN3ifByJbW9FTh",
  "key21": "4pN4iL4S2sg8p9eaDmxBw8KKSZ1pBocovfkHzGDmPtrwGqtEbHovZBhHzW8CxowsHAsTTG5yaZM24Ef4Ai9F8zn8",
  "key22": "WvBBMt5txGNjBREr8qDwjLbiQP5mBzHMNV8cNynSvnUroQg8w8kbxxHxn5ejM8LHTqcVCoKB2GByQStgB9RfPyo",
  "key23": "2V21JEMNjBwRJxZ4myGRtuGsUVbRhc89PCW85oFSjP74bNn34U96ZsUYb3uTibK8RHoGYwHAkemNV9guGqZHwFug",
  "key24": "3f2nhvrQ7JoheDHZ68wfsX7MvXprkcY6VHKa2SprvoEWmfVzWZkKyPjNEKiTT28rMRWUoT3KJZnbafuBzHZxCXHe",
  "key25": "3R9fYDDB7QFbvVjJDak1azXUMRvinfxV3ySYWBYiS5334j4KLze7oEpr9p3DVaa7oxUvj6JJgpME2s6qrwiZvcou",
  "key26": "48b56vt3ztXovZc67iNXpf9aNef4H2iJapaY7JU9mpxqB8LGCtUXFC6QRpgxCVZsCco5xi37Z5hUsekU2oDdFxVU",
  "key27": "5996YPizkwzZd4RFkXTLZbCMRomRF4XKyg38DgbVfDr2wvyxaY4YucXXJgJadFr7Uo1ciSjow8SERjPboFGQJTeJ",
  "key28": "4drCesCe9h9ffPaC5K4bvydy4sjYK6eRTPSTJ621qfebYQfYDzmUEeNuzJpXP2x9jFVSAfMZQLnUJmtiGog7ABDG",
  "key29": "336z6oTsQJonuwPd4M7xZVCdBxvBsALL8KxTE67vShDvp9z4W4sSTgwHjJqzQTsjxhZ2Tjq7V9TegEbQbRMnY8yP",
  "key30": "5C6HaDWnGJVENf44zEazdQ4s13vL7skuhV5JdgfAKZeeEQ2gGW1QR7pvU5LnuwZPbVNoVi8y3sK3zyx7WSi7jF5g",
  "key31": "3CXTg2bPvvYtZvwZJdyL4QcRRCvuQx5omeafq6smiHbyHnb8qQ5cdSc1aETq396wtuiprxzLCEkrHQj6DnozFuWp"
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
