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
    "2ztwucmRuXVQNREpthcW9qZ1hhNzkA3mxYhBFCBYNjWLaNG22ebPZLTRkUrXGitekjF2U1F6WvcmW6fpvAeGwgtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eGc8kPN1hSXpEyPmKKCcEvK3ZV33tWh6ZBk3u6fxAqCLHGT6AEktJwN8LhAjvLGurmnXxfoZc3fJYLXH6N2PDsC",
  "key1": "5AmeTRW8A8UPamLkcYAK9RosCMMA1vX9jgrVEMaNEtgiCsFgsgKJoNMTr9aogyCDJ8sgcaPuZcJiSWLD1mGxLdSD",
  "key2": "cdzWuk6RHdwqAvRCJbWcynzjZQ7XPyS3kia6HGC4z7i7QaUwAAjWoxTYAcdBX5e13zqHBmwRsqcVhwr2o1Z91tf",
  "key3": "21HWEo4zHp731XN4m52YPQXfPZky4kJX6e1VqzDcNk3cqSxhVXi1hxSQ4e51pX1wBi6hhFukZ7d9f9AbhuT3uKoJ",
  "key4": "yVGmdKmnbgD31NLpeDycDH3BhNXhtP1d8WqhRgDugkK3p5H8ieryBaTnSBDtf2j4L1Jo57HL1jrkTx6sf2w2y9N",
  "key5": "59XXdotSNDmGDQECrS9Ahc3mga7zr9Jxtymc7qj1dQZtroA6RypynY3urrQHdn6SBoPV9FsuraTJegYMaJQ3oncd",
  "key6": "FahmbLjbpvfjHWY9hKPBAKyE3XSFKxbEypHrYcc9totk9KXn7z7PUPMuQiMRcvUfVT91mFCKojyuB4NJ1q8ooh5",
  "key7": "3B2kFqG7pxqgVejJccuvFSh9oXZgonKYraxQbbioz9cG2FBnhwBrVyQ8nPApvfQrCuxo1LR8yyd2VZgLs3FrE9zk",
  "key8": "moZFY4swzgHxfkmoSQsgfDGbGdXJJjqnUEMt5MZFHHkvxKRswFQqyVjJu3R1yqDX4G3FVQrCotzC6P5J9WZtHBS",
  "key9": "5uzyuQrZwWaFfsqdkQ2Zuwjtj3bKcm4GVB27sNMBn6JVMcyWBWwFuw26igpCVtnDuJscPR7wxCZdnFws8k1UjekW",
  "key10": "4mai9PkSvyf7kLqYWr6Wmyg5JUrNQgRoLagG2zXn2i3TiQAQWkiHuS9mPUWFUMqGqzcD5ri7JuFp8FgUPCuJgydi",
  "key11": "huSpfryBs1bqAFk2mRikTyWAePFWGBbkjJoHevCC7QKYRhkmwXM22CaULnVPk3VspThcyP6oarixmwcAPdWvafa",
  "key12": "26q43C52E2ccNkrRBi3aA37NaauYTgaBX75j2LUDPeyKbX9TTLvN5kzkFPPX5ssZ1Znr5xhGqpq4RCokgN6UULZV",
  "key13": "3BZvNBQnd8sWFY7PqJqQpk1vx3HUZHmc7EwPdQhaBzfA2QuVbNct3gd6CdBKZ9dioZZ9os362tpedJi3NN3sQqCB",
  "key14": "Nedqj8KWpL7WeXPVqhDVD9mFYUBjknxoCuhQwZf1H2Q17CoK7oTkDZ8gWqchuqNFWGnM5Q7fe5DDA5R9Sw4hr4t",
  "key15": "3prsNoZmPkUKp16BUyeuRoyCb44Y84Uutg3wASRH1534mWYNKUn761nHF3HMirriYiVUt12D7rfKnr81mPv5wUdk",
  "key16": "57BqXTutrFcCopVAyEJwGQU5WyXV3TJUzQSswYp76ZNUzrX5mGWCpCe1pDvTaZEo47kM86xuViynhZbjDGPDAQ1V",
  "key17": "4qToEDFnYfh6vBMUoF2rM1acboVBzuSaksyyPeQ11AwhtWR4yYgubF8pD6FkxivhoZfvzmb1wh84qHt9yd9wuR2j",
  "key18": "5fn6GxZRBamoEfm3bWZgrz2d2XiuhwhRUpvwoSxbvJ9qT48ZLED9n6GLZ32oP4zqEdX3Ld1RtEerqEnuvcS2yNWm",
  "key19": "3oYFhmvCRyg8TxG9anqv3fvhJYRUYuM1KAiKZxTRezYhD9ixRUkSxdg2oNXkKgJrAYKBwzQTx7gey9P3jEgtR9hT",
  "key20": "5c4PW67zEzqVBWcyKupUYdhHY8qdMPEEZ1PugVxaTx9WitgV4X1N6a826SjMD7oRNyJzyMGqihcfuMGwZg7EduA2",
  "key21": "2ky59b3YDFkdvuPvSgrprGSnj6ZNKAn7eYmqKmJDrfQPVDRit52tZzi965zGcc9C2seHukvU15mEPqLYxBfgXR5a",
  "key22": "3amUAMz4tHD68bkPRkkiH4CujXWvrQRiEKnCnYWfJ1oLuPHaqaRenWVLSeJoZEdp7R1rLWyck3upbKNxEbchaF2G",
  "key23": "4TSQsDnwXHQK98FGGFXu7Pz5LWXcfZJGwN6d3wf1NWQxZBhuk1fFxiivdeQbRVVFe9igdESkxHuE56G3uYQiXYcZ",
  "key24": "28zwwbXJWX4AdcipVuPMDdVN1uyAzeoe47f7Nbwchiho5REBYXvd4kKMCg9FLuma1D2rArXJV8qujdfqBYGmEagu",
  "key25": "2ZkxSftAsV8dbQY1CZJkjFUkRVWTYi8M3ykuamieNQ9k4RQ3iVBWRECjLLwAE21R8adHGRjo6L21uURgiwwvVnMX",
  "key26": "2bVJF1FQLy3ZxPoSBWbsc5hy5p7H1YFzwdf9Qyj1UYjcvABY6YeqKyezGE3BKzUYC1gg8SweTVS7Tx2twfGT5nyg",
  "key27": "54NVaT1WZRVTCeVVvjP6DcsqXchypQo69ct6j9GSZjhieCP3gpakr4w5vcp538n3Q7Y2Rxeg7KfzVVi3gsKNa4UF",
  "key28": "2EThYAY6691TRwoWKUsKZqHais5cwrMnHgjTBXftC3Nya8vJddus1XuU3L42xNPtbF4Q4auFqw21nMjHsZFcsBd3",
  "key29": "2mYtTCgAfMs3Sd5bQk9RegjLppkJ8MUNAqT6kjAWn1eQbLTgMxYUdfCzPa9Q6tHtUDGnq89FjPSBMTZZXFmAjz36",
  "key30": "2V5Rik4LSnCPd5zi7iFsUHstYQeErLvR3CYbv8pML7pyivgimuFLhJjkveircAbxZCF8jYKa6XkYYtHXze77oF3A",
  "key31": "2R4H5sF1BGX7pLgo18syY6DQfh86MDuq8j1hvyyafEVychj6r7kgSkC9LapPbMc9nGmXsQY6GzNL8hEXZTLC1tYE",
  "key32": "41YBehgoLA7emeprFLpYV6HjtdxYcjchNWoBX3QHqg3jEJdijQEHXLgQANhXTCm6NscRrowWdPnVwY9ZSeG5b4Xm",
  "key33": "CDYAiq27JgyPXbCvad8a5Mjm1641xJ3WdpY45U9QLSWSj44iL9av5hxsKrohQKizdbkraf17fCkqHUDVz9S536M",
  "key34": "2niThvgo7aGrvKrpzopq78YnpFSYUm4ua4XFb2uLjUJWvbKSRSW1XZ5HgSpxoCSv6XVBbYRPbcwKfpesuwK8rKXc",
  "key35": "3JqJB2fDNpDLARGHNvPSanpW8cvtLem1DFWj3GAe8gBH48KUmoAgwY3kweJfefBLTAoYCw8yFQgQCcBtB3bjGXJ6",
  "key36": "2q2HpKWiXSiGUvDgUN7nF4xiso1n97WRn6taEUvKcxaMqSNsXxvTpJcJYrujNeSDQ6PQY9HLmhdAd4CTk5dU1BNz",
  "key37": "TpMqqiVZ7DFu1hUY1j1nppYjrAiM3AaKF6opobKcDSyQrJxTAKV3sZVyBMUNMvo1Khi4JTE6R8h4PEhx9am7Yzf",
  "key38": "4uhjZwNnosguxzvc6qdK13a3oFNtpDpANoViQgBRzakNeTx4VewdFAigyDMS5FHPS9mKfR8x5jgZyLUT8wHsM9DR",
  "key39": "3YsJm9aFoNUFBHJX54nHEp7buJKVXguVnVBnqQqEVXEQthzWjvCKPKJyrLDYkjGziocSBk7UdC73HCWBFf3AeF9U",
  "key40": "2jpc7dHEsRfAgBYii8zHHg8Pu7gEr7eHy4DyFX7vpTte9ZT5TGVgmCysY6oNySHj9z9dURwPdGKLmawKo4BF639x",
  "key41": "2rLdNPoqeZhkFtYnU6PXDSseJUGfAS2uHAVtDRWBuB2rwzWFnebjUNKqN28jjozGv9drg7wP66ZBc6jnzSUdqTMB",
  "key42": "4bdY4SS8SU9213fy16CfMF3pas9T5rWz6DvD7DG54m4XtyWZw32RCtzSVmcY8aCauWi9vVPEPx9hAgrB3fhxV3H5",
  "key43": "5mKnUtMheVELNgiZgN6z3fLiznRaXq3KdorNuSfYvXsJNvagxzMtvGgi4TvHuhci85QnNK9MWGw3pJimmV5vneu8",
  "key44": "5MXsXUBNGfzAuWGULuxVLk1ByXB7nXR5QvrqymvFeknRNgz4hZGF2B4U2caJDbB1dY5oZpevKf5KEkpnLYLwqHeT",
  "key45": "3DXhGo1uo2xJLro34JuErEjkWP8T7PE7nUU9BGTuaRDhsRktVpVxkiBxUTZBMH25FPE9iFKK5i6qkSD59FpuYkdo",
  "key46": "2Rxu2j3Xw5FCmFrEoBNxebMfv37H3iCSEaGMeEAvpNBSKmDK7jFGinr6rjbCuAMMPEnUT343FdsZwT9pPq3fx9Jy"
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
