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
    "fHCs5pNfwTJynVb88SQUxTbVzKBYnGHZEuXawCxtT4DQeQS2iW28M3QbvwvpbJvN2VM87nh8LMNF2so1BBxXs3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TNjiLAPfDCQaExr4WZqc3PJiRujxpSa66rPDB3TiyR37SHxa9abJyJdwjCDWXmBhFhe3sQSm4vqpm3S1fXQt4hz",
  "key1": "4urGCH3yHcwNL5txBFj8BeLybjZdYQnpiHxkKWNEMu5vh5JDrbj5CprBA6CBF5aayrvLZD8AURLZd38fro7hEcu9",
  "key2": "2eNNmsFbb6TJscL81mdStshgTki5Xrc8ovzazgGwzQeechtQZoEvGy2ggsMnLh3g93kTYePnDeS9FStDdCAgGTGL",
  "key3": "Tx9bTFkZ1ykoiEAzZCS3C5EPKqf1gRPBoNyuxhaLhEHDE4HSDqZmwYkwjK3EnBb2cb77d5cZ4kNvr8CvHCdgzYB",
  "key4": "3S1pJYwQScdAwtEk6kK6o9NR9hce3Q6BV9ukPyNqGq2nqjRPEnAm4BJBCD57mYy6zTcTt29o8df3BhyrADDea5xR",
  "key5": "5FuQAMyJgQHW3UqLn1eyMcM4oC1bFgSrujZsUpJ1XaP7fcFQaE9rdin8rvuiXj4faXVo4brcqG3tC892EWw9mN2G",
  "key6": "3Wc1t4zUhe55WfscXZmYyvaXV2o6bse4p7pGW4QnnqdBceuPxo8LH4XN7itn5jpXmdyMq9oCPwHv6DRR4ybdJESQ",
  "key7": "5JveHqWbXUPLFtp5kWFbiXE1Ubb8BPiEDaMHioqhfLkpmpneYDP66Lmx6ZeseDPvkYxvoWdDFnXhfvjeLMzxs6Zn",
  "key8": "3HekvaVruVumG9Xc6bnWNiFLaxUtfo57knwma1cq88L6d5TbTcmmqtg7es35ai5kvkyzEt6HKRxfM859ebkeqKL",
  "key9": "VfpWBhX1M1tR8CUB8WQ2hVWJ4FKzrPUV45Qcr5Qj2PF74o84CqZZhb2CyShLN2hUE1ikUmuAGeguDrZXCR9GMKS",
  "key10": "DwkwRwS1tF7vqgyHejLjnugaaRxponZ3iY2hYbfuA7opdvRgPvKuW2UYtWVLwarnR86kU3cz5rPyjT7cAhiPnnZ",
  "key11": "4p4g6Enr9yxHenbsrwhBnnZz3ziaKeYtV4mhBwMFcRvmb8zvQTPSVeiGVsf9gtXqvrdKhZ6AfM8rdTSqfLPMtMG",
  "key12": "3HLPT5FbY8s8vCVhxN254bNZUobMfxDoiFGSGXbDYrMWeyC8n4oFgTeWYuNXmP4MDuWz2JuhnmztoKmHnp8Co96w",
  "key13": "5KGFA5PAjGMs65Rnefh69idP7nvcw3ZXxnBLSFop3J3bx5aVZfQ2obsSQvrBNQnkh1L2iAgBNihXGd16bWcby7da",
  "key14": "5NstyoYJHhjEMGWPrr4djrK4ywmNWUuqNFoQ9UD1A6NJ7qUGLYqjxaCuTNLsQLit1JjQvLZwcd3UbVNUU1dm3Roy",
  "key15": "eyU5yWoobnWRUm1FvQuDPfXKQgvMbJaVaf59w9fNyfavSSg1qgZFkz1QZTchPk8qTPv6toGt75u9KHPJq8nJy2Y",
  "key16": "JuJ5QTh73gLXWtyV5xkFyUoPoeqUyZ5ZRCev9T6v7QKVHbnWNdZyEvhtbj4KMQuFgKSuZoUZ2qWPyf73yKdzhks",
  "key17": "49A6tuu4kUSHQmxtshQDVtgVt3GXYuzk8VxCHPAtQuB5mG1kT3HLKoc7j48x2ueY9dKipSAs84wmNDwxqHukhyrF",
  "key18": "3SVzC2RQscC2JiFw6sHn942pRAtZ1qcKp6P51S4LF7TAeL2M7kkB5eKgWhU5DvL5XpffCnYj7K9cjVzuVedzjv8n",
  "key19": "36PC1yJLmsAAZXExvDUSEvQCrLwDVDNdAoqpgsRY9tndmmXFfGY7gEUJRAyMLugu1L2fmBwCvicbcgndJB9NEEMR",
  "key20": "2CF6MUdJLAmShSZdAS4rKGkvV3h36vj7GfVWhn4N8fYE3m1idbzmZ9jXc6GZtJezuwjEnu69JPWYRjPRJGrMStFh",
  "key21": "3hKDT1FBUgr76ykEYCV8pMfu72E419oXoLj9QUMDhvvaHeEtHt8qgZWbi1m6VZJv7bVgtjucjHsMJZdmc7gVLUHc",
  "key22": "47feMH8sao99fBA9PztXpojVGT7aDdwWHGBhnk62tgDfanER9PpVyNhJhPXpj3V2hVd9dwYXfLi9SZmAFs6HzfgR",
  "key23": "2mEJnertapy8a1qnZzHr5rnuC7PzJSjKFG2uPa7SqFNvhZF2bEZ1ABEiDGTiB6uixLibUrQWYjtLCgdokLajYyCC",
  "key24": "4EPGaTP4B7HWrRg2f8J8TvPgFFA9AAKf6riptjs66hoUJxtoXMRGFRGkdT2ZnmF3E7G7GcNNH1m9kVSKirDqmiM9",
  "key25": "5cYEjLwk7vADXZLoVrwxvHCu4qKKxX68D2Doyzos3auRbENXEgKaaEVTTsbeeQuRpStoEr5sgEbijkF2o7XQAXYY",
  "key26": "4WGYQ9rctn9BgtUC5LpLEEV6TMGLmYstKUPfbxBwbPXAFkexyMpXSas7ua75TgeecYicyWEunHFEVKRjUFGBmNjM",
  "key27": "Mgkas5zcEbFeXAQKncthF7MxHcf5KMkj1wgb9dumKF8v4skwomHVFjUEcVx2xVT1pC25cbFpkrAFf7oBXXqCvYM",
  "key28": "5ESf6Wd3ZsqNzPp63DzfNcW6H8DBe9CYMca6UfQWgimoNYSmskHWo6m6MqN5oZt2qSvuCiLh7mR8Nt7RWQFduMdo",
  "key29": "2tjgyJxi72AGcV3tWJeidkMFgMQj2PTpnHkg5k38KghogNc59Pj3z1RpjPqcSySHAZ3uMM12edeZkLh4niRAFJ7W"
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
