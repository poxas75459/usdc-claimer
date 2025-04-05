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
    "4L9HGHTtVfSRHi5rAg55GzMfzktiugin1b9Ba5tTaTi8GYsZQUSsHBgqLLmoJZmwQm46TTxezRmQLgn6u7z9721w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vFfHwW3pFAbFvoJjEJWRmhBXkL7XTCaucvezJp6W5B46ebopSwQFnrM1Spw1Qc5Jqk96iNqKtGa242dayHnLDD2",
  "key1": "3cGNvRy1JJmBVhbqDBF69s4sW4GHe1nQrotLjeexwW8i58TaURYaud3LC3YkPXh7Epk7kbhMzSJZaNEGnCGWk5do",
  "key2": "3hMHrd9PZd6GuKCeMgBQLtUFdErgmF1MFf2wnAmq9keT6WYUT7zmhfiVgccYJoc7oRbxzugQ9694ezNbLR2nLx9L",
  "key3": "3Q6e2fxG5ohJbiUuabKNMiLkR4x2VdSjg66Y598CsnJcUr2Ccdr6YmgPwARVHW6EstBEiK7EWMVyQvjn8sqZkMxD",
  "key4": "3i37aTiXrmX2WRBsmVAp8TKSfqk7ZKZykY3WEgcSLVVzgcgieW3HEcH9uvXEEd5wcKSoa2phRA6PXGt3joSFLmaT",
  "key5": "4iYR8KahJRQsQ4zWgKDX24u9op4AkuDdwthX9WhFcQar4K7N7FAL911EvJgdp3s1WzsJSb32x2zLmoYSfgdbciM6",
  "key6": "5pUnava24BL859ZCmdchKkiyQEmDWRNTNW9hXtw6qi8L2i6yRPNkKmwLr8T3qf2hVLUAN518LYZQE7YPekRkciVq",
  "key7": "2XwKZG9GmTBTWeBRvvy6yJpQeuy1ezRAnoWsWAEJ557J5h3DwBUGBL3vZ3HFw4oPqyW6tgSAXPBJ944skRPwC9xK",
  "key8": "HuawguYRmJ5jG3QjHV232fWXSdYzL5R53GhFnpx9QMB3d6FDdWpwGqpZwx1QiR8CfmbxPpzySAwHbgYxdpTq4Eu",
  "key9": "5qdFBQS3D8qvNvswDKaUUMphL5BdieFXVvFpHZcv5zAccKudUSCP1ewjmhxurqWziz7a7kpNvm9ke4JCoAWnbdsx",
  "key10": "61UBM9M5xUifuyKa9BK9yYHrCLw9bWy5umhTx6upXdPdubpbHKBJLC9g4STUHe7oy3rBfPYrzY652LcoUUdBgWum",
  "key11": "5qkSUJPqYg125k3TsUGvk1cnL8gC5ZEkGVHBxh68PH4qrkF79CB3fNgJMgz6djWu7PKv1VoDMMsobEUHiDBvB7k4",
  "key12": "x6yybe3xoTvFE5Ly4ERz7L2JvZXc8CPaRFcknYcummaaXzWLVifmrScmEEn5xsyTb1sEbmFFUpcVeHLbzicUDky",
  "key13": "5KCKvvNnrgPdP35vsJG3uahBy59uJ8BzAKEM215ngkZDJAtvNaSbtiDWgnGxXdTZ5qifhcu9EvKYG6E9r5u2MRoV",
  "key14": "5Kkncv6tegNwem3FRChcc6HNJmFCMhgG1Et3XEQh3CVW9c4kpAfgRBXko9hQfTTotiyicHUYoodiDmWV2q7Nwy9d",
  "key15": "5oz3kebMPHqbuYGjffaAXvqy5ibxbPijX31L6qcdREjJT3ieg85Z4yzqYsjDeW9un1B7ncLu6akU6BEhoLyuzhD7",
  "key16": "3TikLnxKkKnHf7VGC5jNLa6J6qRQJJz58zRDcmF5bqoMUis3gH4x6gpj36YVhDkaocYEtbh9a2qeAoGxJ1bgBEAx",
  "key17": "2C9hH5k4cTCMkBD7nswn17rBcJrSrp9bDxaECQewPQsXgXDoQUPpvRfRuqi9MXxjqwrjshsawoW6CWYcA2qNyhmf",
  "key18": "5CvKXwgSfyNhiwgHZ3Z4rLQPuxmfLYtq5Q1j9CUdrmpMjA9KHdE1Dy4ve1F8ft686gCs1RQmwoYW8tbuayUpS5tR",
  "key19": "3HnjfDm8xbNAYwXo4X8JVfw8W5Yt5i2wzdWCgwucgkQN1AG53dbeXUVSW12F2CkZoiHknMm5aBWt3wqcy6Pz7L7s",
  "key20": "pGTZj8sAkTqGrYrSak2U5cWcVyav6sAxD5t4h7vjeWPkU3ksJTumzYCa1Qxv6USXx4z4LNrVvW12Tho4wijTaDp",
  "key21": "3u2wTvA15D9HQNtxQ95pCSiV8m5pRGo7SC42yws4VCVMxa5aQnbeUaWaPjUeYftuTUFgaEMpxXtSWgC5ocndRyaF",
  "key22": "21c6N7Bb5d2cJZZs3JLxt3aCZXXMbzpPimrax2H7sJ1rMf4Vkkkv5udzwBSAa1z6nMsakmsNiMxcXhDz4EexxEoU",
  "key23": "2EW1FFnFeBE8udp3iMZA2vy3bQ2gAFSEkYtzbxg3y1nzNUsffTDd3hnvGsTWB48nrdUc6GcFbcwr7KhNVRZwYjKL",
  "key24": "315txZyz8EWGSBPCqEW8Tu1MBgSBasc29k7sjHeqhBscWdRjZ6nCaA4WECo2tKuQecfTT9RHEJry8dRSz7yhvCg5",
  "key25": "2VjrpVGMvSeBgbRDfRTXa3LRtq4ogsL5fzZ4xUspnoXdDcfJmHWCdT5QrNFWLoiAKwfZ9xhuJQhZJyskATkg3nXH",
  "key26": "5dBjtTAESAxSy9sVq7NsmxVPSmpCvPzQBh26hQ99RZn6VEqoEyq2Qh54gCBrRYGAsV4q5jkSZETozpUFgdnepV24",
  "key27": "3DYgfBCMB6kxnFAPKbs4psT8tKR1YwMEEc3LE8C56REPeFWUpN3dhtZdiX9A9jWdFh3aE2qghuyE6cQDkRrrrYds",
  "key28": "4Cvj9XD9hToH1UrnpE5GnPNtiM8iJKz1PdYjD5iMumn4H2R6VZrgAXiehHzHWVE3iNGqU997kUS5T4wmvMCexCcD",
  "key29": "52io4q1ZrMNvB9YkvwXwFbcVKmRXnyhBUWxjF8o7geFHcGe1DWyrFDhESZ5Up1m4Gy1AdNrXpdBwQ6FhGnJX6mqt",
  "key30": "5aPb4vXWNVmGBS5rM98Di8cyEi35sycohx1J7EhnD5me95t5SQVe5YpHZhJNing9kxigVjfBkZ3pWkf8FF6kR3fV",
  "key31": "7P8hCFYzf64KpLekWaULDHWpTiWxhwnpSJswRc3SfVJ4Ed5biKuKVzstTyfeHe8ooZycumStzkYYhvBcffaiJ1u",
  "key32": "5orgAGkRJTLjKLjcNTyfTxy7PShdQrr4VUpdmGDRWabcbXYfHU47y3eFGmSWEVP2f1oHPkUmQaC5X3VaZ3Xymty7",
  "key33": "4K3XZPS1EjTn2bDfh2ca5KVq3jdU1QiSJA3vX1W4wokoYu9BguReCBQnP7pvpQZHkyk5nVevH4XHDd7fKGvWbtJL",
  "key34": "PUcqV35GJpy663pFMT2xtJAyiEUZp4zQamkzBZgfwrFSg5E1M9DH92XAFKabeU2hnm4JmzRPT3QzhzGq8Xd8TuH",
  "key35": "55gNzWmK97KntSPtaVyusK1UF5RmfGw6s4zpynse9KsBGtijruJG1vwRrMNGsToNFj7i8Wc9JX9hiR2xppUjCz3S",
  "key36": "sVNUb1kHvcwd6jMAKAZes4iGMy7vVKuYqbk2PyzQ2uMgs9ZuDzN2peeTqBFE3aQ4jUEs63wpftcLvh16DWSq3TL",
  "key37": "22uduJaLkLKVbCcA3hmdx7tsykbN3Chv1sj9tS6owhtnNLo73urYANdjjMWbEcyoJeaWoRGTiFefv1NDx8xKDNA7",
  "key38": "4FaHnTk8NmWXAyYYfvt4pf3dVwKW345moG7vkVMUXe69gM65XFT9iezuPaCVxnbux7Hs5JF1KbxZNjJqwg5uuvsH",
  "key39": "XNgnz45YHNgtdQ7k1N6FfaXdJNtDNQB1Crzp9tYsVGLPgaxFhhfJ5hVLEiv3encJUYZuMBvLf5j89w28i669V94"
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
