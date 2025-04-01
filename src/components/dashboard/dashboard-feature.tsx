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
    "HkRsr9dFWU48e4pkae59ok4PbkTpLXW6gxvyTziGcNfs2UuZSucyrSucbuYyS3Kat7UFw8dHdx6NWR9uX8ejFwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ABF5gMKSXTEN5uFRSf4VHEEufqTKMSCqtPfnYHoefoTATW9jwY8TooztYiVRLRpEu6QUtZhhX2PNK33LsbQYuQ7",
  "key1": "32yZnN9dhsdnz3gKuMCtL9VVfXRryrepJTgsTeWZfZDNUUYVmBsgu2xDE7qtTidW7yuecBbnNRWfwuGoZLSpyA5",
  "key2": "Ytjj99ujW4wuwr9Fh7xLjCaWRNDzbMQGhdg1jCUw1oPxRJ6MYnZthhsUdTVUQbPjcjM5MxezgzWnw45k2YDJVJk",
  "key3": "3PCC4s83navXJYv6jRzfLT95m8gaxESnJTawP1aSrbriVnN4bBazx7bsuAsXSTn2d8X3fU4wuJDvtUhZcddG7QRp",
  "key4": "5RDqvujf6SgKRPKtsf4WVG5LCspdaz4LyoENjuaXPV1bs1zhyinzf3syjynQL6QmbTu7i8FFEoufG2tAxnMyJQk9",
  "key5": "32K9mQHQAK1vSn1isGBykS9jbCxKMUVeWheirQY6E4xvaXR7oUgxrDa7Xf3ebwsu69SZSpbGKGXV1DxXsiGftQ97",
  "key6": "xTw3WpNbJK4E2APhHhzmKbYApmR9sKuEKusPvLkhA3ZFso2wh2MmtiEYAwzAhW86BHtzAtU2s7ZuPiwpjbxGLra",
  "key7": "5MBKbjqqW614kK8YEyBUe25XSBCfpvRBfqFnJCJDFC7MzpTiBE1KdH5DypnpGyex7dAhZLEdj6TARyWZpAESnRBW",
  "key8": "3YLipzgLPtmNNDKEqF8hjR52VTnsT6djGriz2ktVGtrC3n6wRT516HgoQ8t81Knxrfv1ZT8HWP6C2H9CmPqtzmQA",
  "key9": "42j8L8FbCkydpqGXmeJjqNG45Lx5QiNfBT5ofyBzLxH12kopN6nLwZXow2EjLje9mCtbx7f5R3M1vH5NYbtjipdC",
  "key10": "3bK1LCPMvVVo9Aa5bnEZgLkh5io1TLe8Na5Qpt3uYZaPTAHpHAJUxiy4CxZrRTWe6zxwPfLWmLVH1KNNYsjzS1VH",
  "key11": "3cvhzxMcEyR318fi3FjcgFrnWvERnUEy3FkqtJecLZYCAmT4zAfYqLxee4w2GuSvCc2MtiMU2LgnfQFn8nN6rt2P",
  "key12": "6N2kdwv4jhxbYUhFKnU2UmBeE7EWeA8m5Qgw9SujgpdvfWSFcQpAHShdFW6zNBM9YzKAft5VXgv7RsBBKyHyBNk",
  "key13": "2KUdwNKJkYTqk71MDHKVaonDx7W8QRQG5EGcDGne8AGQV5n165pmksWMJdHHiH6hSEQsyTUTFY1Raox685rjwN5S",
  "key14": "3ahRavwycu6rFwYnVSf4MvuFqYxdcEAPaG85GPxdF6oxEXqo7ViVBbr7XuhGdyoeL8s199r8f1kjMreEWY3kzS3B",
  "key15": "2rFDJJ9pYDhHtaX83nUaXimQ2pNFHPMxxjvG8Lw5cM6ejZAHRJ8juCmQmLdAJvFpaBFbfyGPmA6MpAaYfAL1wVt9",
  "key16": "4NJbDPynYomQqxf3wg6dMFMnUeYrUKUpGaHH8xyaKH4JsWuwKeaU5jN7PMg6oXQ8SCrNhkzRsMZxcVyT2tSG9HWc",
  "key17": "4ew1ADWT8Rws2SwDqJGMRDGXA8G2ah2n53kqnHyx6d9hikkstTBVkJCEh2RpKSrqi4V1XBbceG7zHrEWbDfUXNTy",
  "key18": "2BF7oqjcLRsXrMLUbW6ZvmtQk6GXpkfEr2dA4dz2JNQ8CG5i2FzQ4kP9mkFKwhiW4T164haELkHmhBvJjAZRKPiH",
  "key19": "HsUKbisAszyyGBMddRh7z8EvRoayz1pEUp8nk6NjfhH41eEYQjJfwcs9qwgBpttWfrPME4xLGp9M2xPPePwUvk1",
  "key20": "586YRegeGStGhWSBjB5xU3pG9vYfSX5FEWgVc5QALaNBbU2HNECB3yAUNYuTmQcgoqnAdaS7qbZ1Pkkw3DBSD8AJ",
  "key21": "N24WZXa17uLZWvE4zmVR8KtG9qUBSU1CT7pPS9ikFWNqpnDyae61UZsDudqMMNWEQP3JVYFmJRuWCuPpyiDhWDD",
  "key22": "3NYBdnPnDkeFFhbXNjhgrZdwaZrcPnNSJpSFN2itohxVqBoS9ASGdNBUPNekNx2HaoWt5QsxAU2sZVpxrBvhEV5b",
  "key23": "25PVTeTEYTj8xbiFxY1mvQNYBdVEG8Wwq9EhCjNUMnPB4Kq4GyJdq9XpRzMBwjtwv7AnUgJ9odmx6273HAwL7of6",
  "key24": "WgeBs2v8G3dabZfctXEwPUYNJDjwLW4Wkkmo1LewFeua5NRv67rcc6haQkWantgvy2x77vKUdGaEaREw8ZtWeod",
  "key25": "4EYmzWft117XMviPfrHR3SqkSbJpFjg2cVqQZbzNLhcpPYh3SYvn6jrAAx3NNwtE9QmaZnCmJDDEYNmxcJbZUXDp",
  "key26": "5r1qsZVbL7zDu998wbzfAfZrXMi8oLCvy7Vdm2T6noqpdcrrbcfUb1Nyu7oUxQAYacjDGwR2uaQ1k8hTLFSXUJJW",
  "key27": "5Utqy8bHho1L2Ejpa5ba3PVs9DhxjFExG1f7E17T3DYc2v6TGvojuWfohyLpnFpp8eqNPs8LEtY9mBtMSqw2E5yu",
  "key28": "5bCEzkRCU6Y2GUNqdqKczqLrDasYZqo3S9k8dKGrZuuqVBdDTXv1jaP9AzqVdp8ENTSpsfUrFMWbXamPtED3qwQx",
  "key29": "3RbRQcBQuBtbtL6WkhxF1XwHBWarheK4967YRL2vop3VyQnhPMX88rrbSXmUPoXc9ARBAqG2M6kA3oi4XGRQRMCK",
  "key30": "2TEWQiUoofDVXKTvRfg84gSsSdFz1JreY2mqgEoLeb5xyoMkTWL4ubpNRNvqTjvNDes2tFLJMJv2SqzCTr6eKzGR",
  "key31": "5QyvTRRBY1EfLR6Ug59DdemJwDZZEmYbUzJRtgrXBats9nL8zMBD1tRfvqscr37E7V6HeLGnKb24zgBVxwqBgtN",
  "key32": "2Atz9zeA7rY5UHEfp7fR1DdrBYqBPWvMEQm68RFq8XzUp3NgPr2zRU7Sk483zsorLXxE6CTU9nzTiwnF1aWY67Sg",
  "key33": "2CPT3GkRgx1CTh5PisPsAw6epmfAFqw5Y7HKM8C4boUaiyscgstAXWVGtJ6msPmJBvw3QqLnrEoTiL8hpErTSaJE",
  "key34": "5i4vXATWMk2xc6rRQR8cX1GAjA9Ckcq3E6xF3RTkXBWanraNwaYg9sxmZMrh7nCaQPtnGovdpWZUu6yXonTcsQhV",
  "key35": "5AEvzN7J7SnuudRSWCF6fzMfDwX2VYH7uLdYJzDJ4NmNnbCKbibsrSBiC47kQcNsikS9azbzp2rMpZkH8r1eFF1F"
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
