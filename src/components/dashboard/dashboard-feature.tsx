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
    "42FjEUazSMVyWjnEyAfwmPvYscU9GizYbYZJ7VRiMDF9yVyYQxLMt6RngHdUbFSaG7tZLY8Pqxe2PiBkV4wdGVTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rwZy1aGyf2JVpcg7UxPTGUS9YeYDGN89jm3aESET6xpHpoTqTVZ5w98dc3H46Zs468WToWAYVPQ7th8b2oNCa9C",
  "key1": "2PrfkhsnddgdM473NNKFFFXh6tnV3HhFC78jb6ybkT68Je7gqxMQs3JBDGUPi2jDZYXqwFxDtw1VV4QBBCXNcPso",
  "key2": "4mFCdyK6MhjjhtKkbYcgDyGgFRNjDBswM6UBv4fJMddYgkyC7CWbxNUJppVgbyKN9S5wjKDByVq4EyYoQsYo1pPX",
  "key3": "23rz2Sqhrj7MisHcNT7aERwpYTGgxyRhHuUCFfRybrDDd4HKYL993v8j7WiJeHR35Jtd77Pom4PtXh3CmbCuFLQK",
  "key4": "vffHWHdWmwEwbvuxHCq6u7XVvqf7zBLg9BJ9vVxZXLomCv2hVrdBjbG8wyhn7vcVQkTivB2Do9egg3nzKFV716X",
  "key5": "5TtESmpRXBc6BM1hC7YCMv8J4FRathhCTTHuDLkWiqb5ifaXDJimGxqYdGZ7qTAjTHVjVmGh17WeymQh4sguUfhv",
  "key6": "26iG4YtDyp56HcNAX38F8ddLZ6ydGLQPfZMCAt1veuGSNh1SekCRQNe8Ugifekk3rZ2mgMTCZ7RWjcATaijM2RaS",
  "key7": "5TThHSs54EPdZZ3HLYoc4iHw4KLoXLbaVD3mfJTECT1WPY9e9SQA7BV4ZZzutiKdjqftorgdFvVNvHhJjPdTpQgY",
  "key8": "5ck32PvzeBCchJwFKUNEMPHPc4xnwqPMyWnQbQ68xxNGDPfZpXbrGdqNinh8VVnoqDMikNsNuPjUdfZtZPiCLbDQ",
  "key9": "41xjv5meji7VjRfHMx4V3Me6sKTHysb7FEFi4XWHxL2weKm2VKcYGRP8sQuQeSTkRjQbkiWSuDbeW977i5nEzd1h",
  "key10": "3ETo4mF8GjDtB5jnfkv8rdci2VQntpmQQLmtYYmxHKW4d2f8kw2AQDoVBG2a6PXKWo7SjBUvn1VWwPJ7kWz89FHH",
  "key11": "54WdWs3mzkozzQd2PuvbSftnU7MJM1FBpfdPiDLG1q7aV75bCeRF8JoUkKJcT9e8dfHcFfCT67mCgBRmHSdPZiYW",
  "key12": "3qogKa7aMnYG6LARt5w1N3FqujngdYhGDW7X3GMnMosg14KihWVQjKz7465LxoG321U7cTGZuNyk5SHktaCgWC4R",
  "key13": "3XakD67m5F8upTWcR8ebT3Sko2u9oqhPQFmPUa3aR7as8LjLH6ToFL4mzSb5yGXy8gKMG9mnqEEW1s3Bzd8kaaDU",
  "key14": "ABdRNjjiHKSuZWFZhEFyf8g4WoZxgq3sW8g7NRUSRLXZ94sZpkANAQ2GRPTLyHLVPDbxGWLGeWckxXyS6j9RzDk",
  "key15": "aBumcuBYkBHi4ti8Nybnhh3KYEPvVxmLCvxJVAXLTrQ9cHerKeE6CsTm4PqdAf5wNV8TUjf9QwZyLHhRi9TXb3S",
  "key16": "5v38dSvJUyCMgCAX2FvkTbA9UjmBxsoD2cNdhupkxo4SXpUrSZvzyDRqeGcdmdiAeGWsM2si9NP8f5jMBYbieh1v",
  "key17": "43xa7JtkGPrrnrxyYhtnWLp9MjJ6mzQdmh1xnxwcR6iqfMnFVbbXTx3BvNwkSrAtZNcCQu7nEp23PU3ke6pxvdgD",
  "key18": "2FiejxDHxeZZVDX6RS6bQQg7chDANiBvqjPZbABZgWFX4a161bgC48mwstB1nuhM5svQcbB3LjsdhZp8c1QJ1eeV",
  "key19": "56gPT3m9qzk3UkFpcLZc9F3n91e2sjE71ZcNyEce2JYD35i4prQkMigKdNADtHDyUnVaeP3csTKU3xpNLPZGeoPM",
  "key20": "2pXmXoGBhQkMn8s4gqTjYez1gczet1ndCyfyKzvzBeV5R7UwrccCKYs7g3VpnWcDF4v95mwgQN6HRx6adwrvt7tc",
  "key21": "WpYef6rP3HBYDSScBPvHCp6eHz7hA49GAccDojEPgf9r4oP8StgjKV6auQv3VqzqeZjEr1WQf3CQ6M63JyxGg7p",
  "key22": "SYZyFyMdvM8Z6r743PNAkMqtuuAzVUQygoRZD6hVcMSV2STeo3TR5mU1MTqHTCapaUJo8HPTFm44GjnjExUkRUQ",
  "key23": "33gt6DTSbdTZYdumF7PFNiEYW6uts8fZNNjqP2zT9ydZ3CgtjiLKJhJSuX9JXByjchb1rtGR74uQXqJiSbayXgvH",
  "key24": "2aRLfnG3UEwXzDkDeKpMHpE3CciM6o4BtXADdScab1mSPgL3Hs2LeKf3o2k5oTWhTyHR6etqGirhQdgNUcA7sFQp",
  "key25": "5xkg2cg4oywuZLqfpGDGLsDqmoZTxn2sEZmwqGfL7FzgEqRMZEYz5ecqDRFJUcubNj9jn1unVwfbBvD1f5wgygEN",
  "key26": "3AeFuBq7uFmBpqkLUMHkx7NhJiFeT8DtHofXWh2hSfdyWWn5ZMHMNZ9quBpxpvNLHSYdK2UTXmxpojvQL1dZDm1z",
  "key27": "2jQqueWvFUbNtzEEBf3EPyf7n7LSG8R8appMQMigiCgym8XRXwEDenBSq1Ha9s98u25U7uBQiLygr6NE4mRCzur3",
  "key28": "bPVyeGwipirFD5PiaSYnqbwTWaNfFQJD8WpnBU9df3qrwgm3dAEEcgMPrgcH6w3c1DU8Napf844SDJLFvXahHPz",
  "key29": "4GvW5vZ2W3k7KkpeCxdxUYFHVondJ1WnDoHsoP5G7X1Zbv4ZNqeD1zWQBZAatnqaH3BMqMNxPDqjv2WYgQ6XYJCX",
  "key30": "5QWWeTMMh1s9tGfiG2i6hriWrSTjXdxxdxpXnzkGbCM2VXvXXvXBUeM2jfL2k1LFrS3Bi3c3hJEKk7Hp4FeFmU6a",
  "key31": "2bzDSJ1ScosYDkts2V9kADZ679jFhwekbZNdy7AFetCGDXC2EHsrCongci3iYK28ZSBrDk8zMcVKVaiNAJxyWW8s",
  "key32": "5oJCoirx7Mc37MEnJX2boh3dbChq8m3ZhXQCndr63xvH3zeT3C33x4gxEVyDem2hzbg32ByRFGfoaxMcSkf4CLSS",
  "key33": "3kKtDyEiAGXuMLoXcFcKtkB5kBjsCdUn8oVHc3bjjjdW6Hb9bP8Z5QxU3nLuo4B9TtwQNMHw2chJrtsF6f72dAsw"
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
