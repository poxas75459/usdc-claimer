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
    "55kZ81PrMq7GLiMQuCPtr4mFPSAkqzg5ibQiP8PqwDP52XWwGepTRioNkEwCqRt7bnCibexkxpR8VVC9TWzQXvZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yg25EDqM8QKfqqHDoKQf5mpiJBoECgP6s9vFDBuL1ibY69p1Xb7egSjL6aohjzvGK94HNimV2jNdxtMtVx8ymF6",
  "key1": "F8UC5JSxfuoyWLZfhHsbpwiXXkr1LRPRNSD728XsQabKqRhrqmPktnLJY1dvUkMofSyTBufX1mBMJ1zt5xab1D3",
  "key2": "4SmbRgtDf2UDgdgsqaFMAEuKiUkThMAeENPZ7BGyH8mwAjDuJgBLEmfx9XJvuBR17WkreGcSmFVAPS3LiazjpaFs",
  "key3": "2zQu7qm5skdSqD75QNUg7epjPs4AwB6bQYr1PioZAzpGKEsXTiDXbm7yEwQW1oVKtUJtkiQY9bHsnWrDHubBrU7H",
  "key4": "5zmi5rgUNNCAC2dqkGsS8bn3fKcWV3wgSmpjunwBSQNseGbEyQTDnF4trqEWyKZ3xe6cYnNa6DzmdRXVTPnexn2P",
  "key5": "5sHySAwTLkA3gSTno4wETcwUmdCPvMvq5S7S3P62tzt8ybFDq99CLDNYnYMog1j6VGf3o9TVkjDJpUF6T74Ezt2K",
  "key6": "36NFboXLyJseEFyZQgLkKvVPkbHhQHnP7ph8o75eY3teuTVxmVMHTnGndbYGm4NtvgivogCHQPCrmaewvLR247kf",
  "key7": "43Hiq54xBX56bFTakdj9qph6xAMX81FvgGBDRysBq3Tf4Pz4wPYqz39eaymSGqWfoetz95p5nCSSrEzX4EWTSx1F",
  "key8": "4GeG7gE8kDu1LtLNRYzFUTJZZmCzGeZJgSbJsK3a4Gg8oC6LQFqYrnjKeJjAvn5y2GCEkqmkHQndEgDmYzxCxquX",
  "key9": "5FF4rk4ZtPNeXbbHzYbdyNbZNTKCJnXg16cvSxj5g2R7vLAsSATgYG66hKaNLTiHvJJ3pJVpj8xfMnEPcAvn5zCk",
  "key10": "4ibE8KbBfXmjh7NAJE1yfVBmCtytoRUzDizMs3mDsqMzRRJxRMsgJNyAkFy63wk7yAgLBKMqzuyeRNr6a3P8jBY7",
  "key11": "v8Y3b8A5shSsrTotSJ9Bda2zr3dBU2zrx7VNTZngkWdXfDZFC8GNWpbLXEuAgS2w9Ca17doJcVzQnVPox2uBu8n",
  "key12": "3R6AUtVwC1m8kM6VMHp1LYBfaeDyrxrWP6WZuXKX23vUXGyivUUNTqftTXBz6i7E9MqYi7HnoHnisDPZ1NJCyXw5",
  "key13": "o2pNHP9pLpokK3MLwYcJr5drdS5iwhzbk8njZhEjwymejbppGwCHPdJmyFsQUiwz9hiztSxZp1p8sVZ8gzw2PXP",
  "key14": "SytGb5v2WbT1vkonP3z6bMVEx645ZaGoCcJBwHiEswBaPBKZFiss64Mm5KNsXad2vKqiPNSjwWtbrE7gHFRGNRM",
  "key15": "2VuUQ3xALCrbGq1SM8o9FnmBo1jRRmHG1uTSbisp7gbJgHaQnGMrWtphUkCba3e2NF68bHcLhxeTwpFm1Nk45xrV",
  "key16": "2fMJT2M1C17BFbhDbWwAjK346sh5LXjw2fP1k5dU36YcHekCrvXCzAAc3a1dt97iTyDW6an88uJRxwFjfrURRpNn",
  "key17": "2F1tmYoQB7MjJQb8PzX7qUnUb7i76m54z1PX3boedRb4KzF6VT7gn8xJdj6qUxjqU3VLrjqTrU1eL6CeheECGETR",
  "key18": "5LG2hmYthNw9ZduaZzrSCsw7kJoUg42xK5JiS2rqxXYdQYsDjJBmrVqr5oxr82yJND8DJSPUACgty8zvdFwL3fwc",
  "key19": "4umbqr1SZdo1zARwMWJwTeA7RknedJ5SSKnx8Z1RStixdRWREWWyiJ9vNpyyksh3vEqVBprHAxEntCq37mMFY4Dk",
  "key20": "3Roe7n79MPp6CyCCZNuRQ1j1bsBTyVDRL4YAHanwKC3rjeq6uL4CaYjEmUaCohnbBe54c4Z2yLYWCzDknfixSXGF",
  "key21": "4Tig2JqRb7ebhvuKP8mKGuxxiffPYcpMj3AjZPTSCqnnqtG9QTF5qS2E2abE215HSuEeWanunPC2rhrmLgrwvo7H",
  "key22": "jEJgoZSYpRtNF6gedB4yUtzKcu8f2XHXm4tiBzF3xK9RtFeU5HkHVAuAdgvuUUBvgfGvzznHuGSTAdBUPuNLbFm",
  "key23": "58pmnv2NF3z8L7R7y4DyzXXaqUBKotbm9iKUWZazktoNc9azU9V2mX8GAKj4hkMFCuVAy7DiaUGaPqfPFRocbEuR",
  "key24": "5KxBWoy5XM9oYMPGjem5armCAw3DSX2vwo9SyCYLhx5G8E7yviEdX5P4empofZCBcWDS9aVnzUHxKs76b4Fm2HDy",
  "key25": "277phUYBZC73cqW9TsXDx8U8zAHCUt4aLybBwdNt3tbfLWhj297n8A7mJZ7RBd6p4JHXk2yvVdetb2v1tGyhtGAX",
  "key26": "nNCAeGQCxPeSR8EYoybmx5nnCwpVdVM5XkcJ66XBziLVwHvTSshtU3XhgYZ9v5mmELJ4uGPZd7hdhVN1SyZ4dgh",
  "key27": "58CWyCPmtnVzjD9E9jQbJ7CxrqFxpyrfy5kk6ARrJGpx8bRWA3F8ciFrbHe1oLYcUo9d7kowKA1PzKVUSt9gZSSy",
  "key28": "wG5B8pPid1FwT6ksoFmCQVriV5W3FmADj8EzuiyodxhHhXXcKTe1Hp4kx7x7C8L6Ei97u6KLVQHK5Yi8Q4ErWiP",
  "key29": "587Pn62m1aTxS263kdrC8QSFGvrjPbfVboyFKrB2zH8FxETMwUdaMvHwJLjjtJhsVUf218NWEezbg8tLcqFmfC8c",
  "key30": "4curvESiD19V29LBJp48UirG61WdFb8WWLyUeUwPz9D7CtvH9FimeCKrgKFgnPMkC77mdVCzveGhmse9VrawdNn9",
  "key31": "4RevDR5tyG7UuC157aGZ3umg8dnBknumH213VkFGLNRTLCUFuRgbMwL1BbG7idy5oHQcwxGb8FKStdHB8SKRpXFH"
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
