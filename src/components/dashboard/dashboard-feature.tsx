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
    "Bve8ByGT7xTURuSCMfJCqMUmJycHMpkTuupcdvQFZKS2xd9bRCwL3UMr2w8HACtKBVEbuhXyzHs88f8Ym9D4e6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3teKjXrj9XxQBEpafWbPapDLhpx3XZX9sTpY1G8cue5SV89CFnLhAmQjhNYx26fWnmhtxyPiMDofRAxd6hBKWZUG",
  "key1": "5vb7JDuufQKdCq3vx46bKHq7KHeLQRuzEcAtwPXatRyS8YUMv6xpTR6eMmx42p88XbkgU4N3R5rPkATLvrrBLT4W",
  "key2": "4K2iAb1WYomU8hk7UQLNDZ85thN2BEHM3qsLbc3MKhBT4m8k3r5LmnMkQZRQCbTMtmQBkhi8yXskmUYJesTp4NqX",
  "key3": "5iDqVZ1TdErgRWCsQsYaJ22RS2EmLsyqwfyKEbgtoftoxxtTWYoVu2ov2nGHBnLXChQTz4L4M62GQAvdRbfR3FwL",
  "key4": "YTNZhpmqCCurFR3NUB2PRBgB1jRLADCPqGJe6PCVy1DL9nNvAxhjk2GbqwB9QMfe12KVfR3a3SQN11CdQFzZNhQ",
  "key5": "5pZNpmKYUfejCdkvCtYXZr4okFy7DvyvUTdgRXbnrA8Hg3nHasvFafCqLDt9J6TSDiXx9ZnZkBEngFuzpddYV9Wj",
  "key6": "3TBe3Pa4QQ6xqtbyA4Wgwo4dbVi3D7qT49yqA6kvwS2HvnfUdqgmvejvMa9Z63HU728v6N4GgymS4k18HPnP8avx",
  "key7": "3XxHvsMEWYPTxsertfvPNauisff2AxNAcC94nEGKMyArid7Vr64vTHqT7zavfY7oVKtFCb5tWrhQF6hxtkcc9o88",
  "key8": "38FbvMb9AN7JDPyuY8dcZtdtLx48EJD8RMWcTAFU3DL5rq9cy9wb7eUpuZ5CtNG4HAkGoTjF31UUxePrb12EmnNG",
  "key9": "3MifuEMqp65eP711h2uN3jJiTjjuWaLHh7ZXYqWzRo9seKGH2r7HpNYyz25LuT5KZmxgtWYoqWg8eNvt46DCHVif",
  "key10": "2ipNv8kHRGwSAhRLiDary9pPakirS7vggPLp2pcW2Tc3ZxrEg3bLCWMBYkaUM3eaQeS3wFg8LZ3gY7K5bm5VSHMx",
  "key11": "5P9xvc8kTS2GoADLBhnYcTUH6oa7gkHnJ31GAoqB3D5cAmD35Tgj59hgLSNWcnW1KDDKg8ys21z1wwXPATECAJdU",
  "key12": "4aGmcGoZxXa3X5h6zKgftmmQNS8UYLruhdTK6AShhg3zVX8QYHDJNidix4gNFpfzAHy3FiGQk51BGwaycZtRqdx1",
  "key13": "4T9zYAJ1Kzh7VVbDeUfFffTEDfAxyXsnHyeZGh9tFwEYuUGxCziXKfu6kkPveBEbqbAk7vMohkVzPbSBXXojHuEQ",
  "key14": "4zDSbBwooCdWNwf1om117ZXQUZqHmNuxc9hHXhW1U8zErLfkt2SJLR9ikT8o4JFSdHD87kaeT6oP9PnJ1jNFyhKp",
  "key15": "2n3uiyQUyhBPdytJcVL7QdjKEhiPV1f748A7TzDphw2jLc9GuDKyVr2ztoquXKioFMzVTzcNEGPQGqiFYCtbtgxS",
  "key16": "3LBmhmbUgDQx8fvcbpCcf9SeQ5k7RgDc5QzaF4Q3ESBbh8aq7wLybdMdd4TvcaVEFkcjEz7EhFNeawZi8dSxNbhv",
  "key17": "38BQNqJSGVkMef9CLGypdTMR2Yv7DV1CG3NmKAqJrfHj2QKpeaE77aHgpEJ4PBWhiDteRDnSx2qMkTQRAGGGnymN",
  "key18": "4fAXH4khgAWroVf3j9a6NQQh5uJ9eETUi4CLfhiZRHdwSvrBtBZHgdwc7cPXRzw13yu4NufFUzfjkMSfRAXUNyFJ",
  "key19": "rQFw18PzqjMkjAj7fZDBfyL7DRPmG2VYwLooX9ZnuMRGrh7FAEdwf713Vhem7LPYBuiPJKG69pcgFxufHBN9szs",
  "key20": "3866QyKTGDJXpk2ruAgSTHTuV1rJpkY5RhEy8KTXaS1zgcF1rDkMPcta4D8CTvigvAesBJiBtEL1TYtQhxUt61Wg",
  "key21": "4SLh5wnyBT9QStvr7QfUDR88JWWuUfgNNPA3oBLP6BDPkjptm4TsGrUdohiMTFdZHLccq9JH4JnATo3C6gWVHC7N",
  "key22": "bfD47f7pKeiht71mE8AxpR34vDDBxRhtg72xQeth3j9xNqGpUAKhkj3V4Zta71JG5gxctoAH2D8qJ93c7p4mvBe",
  "key23": "2KY1tkibRgy5bfGXSF47Zzdo7UccaSeWRzy9xKwsw13m6SEk39kjhnNXbetJEhMfV4ZugNQYxLmZEJTLA8GVBAJj",
  "key24": "58U7o4tgd7q6qM6f3Shn4Y6w4YFa2b1dqLXTGirHhJ8m9gK3KEMnMY8Nzc4rpgbqn4GhyAfhod1KWXbjrTUEEw8u",
  "key25": "4EZhTzdvM9ZtTKAKujSE1GctsqyGPhZzxGBbu1XuEfNPUbYqTQJqcaPxoGSYwWcxSXfxmkaUc3NKQYKbE7ySFzXk",
  "key26": "2s99txyHaUpN8HM9k1MpfiCKovt7QA7y6YbCkV3euBNjhxn7cmPQAUVRDJs7AR6mPmpdMXHqi4gSBLqNBu57CZ2j",
  "key27": "2KBovSXniHmDfXR7tnddhspofQDfRBpQzhXpNRm3gxpseGPqVLxKjXRPtJfKky64KUi7NKc1j9sGUV9ZXvoTpxC5",
  "key28": "61bf9FwyhL8MKMnBc1gB1KJMuxFAwFB6TUpgnMhPgpoaxeVGrqBnBW2AsLANdnncyvq8N6QRj4J1CfA2suQ91Gpm",
  "key29": "4Zv8tp6DJjjXQVTPfMxizb8JnxKucAgfhRqUyx2RhN5AJETNPPySfu1WiQSvgSDgRxP1b8EeYQ6K8bpd1yqhebpL",
  "key30": "WaKJ2n7nAHUJFiopfTSbSaSrtSbqeNTQFMRTuDnCmNWxMwH5qywcv1kZBktsvzoNnsJpb44HAnhnFTRHjJM9AkC",
  "key31": "4oyrcdoELTW7FxEam853wGuCHpc8i3Z1eee7TcXDYXz2DMxfiMgXTqbxKum2BuuPpQ2d2wfjKqPBaZN6wjn9diWc",
  "key32": "4ozAmMovPWaAaJyiZ2KJ75M3UJqHPcUTdKuJT1qZxSkjCtaWKq4rSFuLLt8v8WsnjLxSWtq67uaggJyQjamvCdUy",
  "key33": "36RaawPV942VoyLz8XY8gVhGdMam71myy1UU2iLhZKnC3Tf1uptz6R4Gv1VfzBXEsGzCBLdNTL9mNUdqS7RS6W1c",
  "key34": "4WhyyEedXbChW4kyDhgXZwLdb7Q4Dhw83nNEQu5FGyin3pUEewzw1gY3KMztm78PARkzWoDwL9Kyae4RSyEKjdgf",
  "key35": "25ti2cSJqxFRskFJPLnR9zjzNeXzYiVdDd5TtVfMuzVNgQA928fBUftFH9g8A6aE2AWypKJDfA6oHWBPBTyBp9gQ",
  "key36": "KXv5eywWhMNV7JHaKKJScEHCMm7vCu8Jzu41e5gWUhtNapacQBxxxJ6fjs3My1hM6SY3VqxVKRKHLtkRDzDQyq1"
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
