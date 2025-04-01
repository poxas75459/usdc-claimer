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
    "2jAygCvkFZrvqE4WNeKVm27xzzav671kzrm6cPDQzLu8Leg2xfM1AhMGSNsix82x3UE6KA3LB8dqX5DDyHxan76L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GtL78ZMc8D8URQLaVNkaS2s2EMZtch7m6eV8DweA3dMJ1sA8bWUmAyntYDBdVp5vGgmBhzUxsG2do3qdCYUZVqE",
  "key1": "4fRwaBsVX4YH4V3EffeP2adoQx2z4EKcm4MoWLHWJu8C5ShmYAC8A4GRnBYVgLDeCw4jMD33xufmzgifza7iU1LA",
  "key2": "rN6oijCXvMDm2JBianM8ES5HPiF39mqjrCBS6jreuYyP4qbYGBAwNiy8WChtiYTVRQNC1ifeb6GDJh1mGe7jD8T",
  "key3": "51AmmmL2EUcMn6wWAxbGK6e7emB2bKaDQvAohhaTm8AYyBYbeNBAT5KAknnypZ5Ez8htJ5y9CvCqdLLr9a1sXnC3",
  "key4": "2YtZ7Azy3jEkwsgSnimZTqLm5W1PwXfMUqXLKVuDEfVNJaD6QsLuKd6ChDEokn1p5bj1sFkRJTUUTE4bgzoSG2ds",
  "key5": "4xM5in8WJxnfdjm9KMqGe2o78ZF91XwGrEnY2ECWiUGUX2mnjwYoZ7nr1YLqWmSCeJxebM2XLu5iw7ozUPkzFS6U",
  "key6": "ohkWnksvWSYTBz4JeWJ2GPePEBghBNYLqUGa5AmT2qNX46Nm2i5JsJpB7yPiLkCVTqUcnVMpe5EBjbmvV6c4ZQv",
  "key7": "ADw8rKBmKRcff4v2VomSNkiesznFPUKYY5hevCisZbDAXXNb9rtN7FLVxEidwiCTPf81EtDCYtPTpcaCjSFiNDW",
  "key8": "HY1aywJHfC1LUnhZpRytd32xJPt5UicWq9FwetU3HbaFPD3vp13AyRLkVaZkKKN5rWC6un6sK1eozaHYnFCHosX",
  "key9": "4TCk2Yc89SaEm2SmUnjWpJRWrekAvUNAYgP96THr3pSYkzB1BEF3xs9Bw1K7ZtTA11ihygBYg3BWLBLxXTpn6Ati",
  "key10": "3vUghFRAwMQVqdkjqi6pyuDmsJsFm45ufGGCu41diVTzpjpxJ1SjJzCKyM223AFKJqsWbzrksEQ4gccgjuLgDuf3",
  "key11": "tbpVgjVgoWXxrWdJgKUk7uT6QS3vGFaFsMj8AuYo8e8VG2kMtafsRgGtdPrDteGLP4szx4PXFMGyVTreKdUvADN",
  "key12": "2T7ZQ1vvfaE8RJ6rrZGg7kgW7s3E9vPbQVpCo6SHQXvYNgd7R7PTyFN6Kk8t631piVsaofsYZX7aoAq8iLZwJTZt",
  "key13": "7CNvS7zoEB3BGzrwg3o38ct1SM6HS6YSNdeRpSCyu64hrjTTiEuVpGbjm9d3iosnZHfDy2jYY1FPNQbk61tKWcw",
  "key14": "w42GijbfHpATqCN5hyX4ALLwPPEWQLo1EejC55m6j3EtguZR7TUKBvZKaWHVXF3bpp69zkee34giWWjBHLZ43Jt",
  "key15": "3USHZRbRxc6EFLm9LsrNgfuNHCaLi5qK6Matep2NdggmnztAd8tvMvagx4UNA6YwjREiDby3antNLfrPeg6YbZ14",
  "key16": "36pU4mt6kpQ37Dw4p9TwLxWHd76pzPHxFjqvVmGSMZ89XpFrkn9H2AzsLdQ8Ua9z4iRpcmdmsUKvep93SifmPje4",
  "key17": "2aiYYbudJyoye3TdD62MLAKHHHMhUEp3RW2xeP4BPZcmo6Nqm8J3w8gzU2KVUaNQCXjtJbhC6vXWgyDetWXZoXAk",
  "key18": "ad8USpP3zdH25mUDAdZ9MyUs5rtRCqLFG2wQBG7hM8jA6zk5ow97bHHxWzA1y7CjZ1WvsYhZVcSDLqh2omdXUeH",
  "key19": "3gjKhPir6jrwiaNMXCSNRgRMpBiTsisTb5QPfrQaY6p88MEufzXCZb7qAwjmUDyKCWgDWX17FhsRLS3brgapMCAi",
  "key20": "xWX3Ejg9Sea1eNRyxHCVeCcTn5V3YHFr3u3FKkCT45fn3dAKwBRWNsQmcmrySRAnca3V2PP21ijHTX2Tq9DY46h",
  "key21": "4BUsJxBz19UvjC2oWqcX3MjcVJEanH78SSJnh41xFBR1MuMnknDSbyNFQUbYD16MQnGoNHJ3RqZXqM81rMMM5s3P",
  "key22": "58UQGeAN2wrCKMH3sEngkknXKFhgxadCJBkGT8icuMWRCWnL5LmdDRQfL6Gzem4vsJoXCF63Cie7fGrPDYNeuVDA",
  "key23": "2N3ewCp5drcGxSsWbrEYcCNTD7pFR2p8WkZKNpkxJw11yVEZEz6YwzYGZV2Uiu61VMexW7nZCzW5KKE7sTGzjeuU",
  "key24": "22yvLukrFY2xQZ9sB1dsD4rG9kbQwUpibcydDHwP9cQ8QjCVXa9WiJm7U4dVQm3nrkDtekwRbhZnETn3gpMvUxrY",
  "key25": "w7cabQ9igmchFAh2NXFrgn4PupaEyzDFs7XTeXb81rL2Aw9SovVU8tqaKbbjh2km27F9UWCix5kk7TeFDbVrSd4",
  "key26": "2UW9jU9J56P3Wmhhd8MFdLE96NQSNQP7r2poTyfEPGD9Z2B71uAAfMje1TPctSKaVoogc75fMMMGNMSdFMeXCyJv",
  "key27": "WXi6n7cEbTmKKP6WVk5p1phW7RkFrr7WWTNjdwqEbNUBSS6zVcG46xFhrZ1183iybahN3YfrEs4z6HuyhGwAzgJ",
  "key28": "3vm9i8edWitSdHuDpPyEvZokyLCyHX3bw8MNb1dG32UH6GFQQXTVGWEuH8Hrfotab3hz4R6jnA1jYxXge6f9ECPd",
  "key29": "3uWFwxwWFULaV2Lc4fo7NXJtqEFqvf4mHn93ztHdr3YGazgzM7PguvKVduPn99zxncmBrdMs52owSHe4AKufZKZe",
  "key30": "4msmafJHNV4Q1gdnJNzJetjyHTbR47A2j6PT4Zb9Nd7xoWewEfHT8LiyGXzH6i8N84iMHf61R3NM1MXp1dbLMcFo",
  "key31": "CkygtxcZSFEkTC3EU4KXu1SEgDa6Bp54vd8sv9qHLGQ9xoGpfVTGdNK2eJ5oT5vnULgd3B4Swonw2xANMb5TACE",
  "key32": "o6M1f8hBpiMBTeP2vvpphbR7bmn7aw9t77uC5Pykuis7hdbct7gETsjJXx6Vwf3FonYW5nS1UR5NpGbhokjcvN4"
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
