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
    "43RCUPyJhojM1m89rseTKWMpQ2aMsoTZmEsT6PNRuxQkZKsbQdTsTyLKyRk5fzFTq9RjE17CqrvL4nirEWbNaG2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M7YxoiZVkRULLT8bg4YF8HqvGchDhitAZtxW7ZZnnpEARTu9L1MJCDx9AYEPJsz3xcPKuh6RBJfKrLTqeo2y4J7",
  "key1": "5qgqb9rtk8Xsucj6KEF9m5iz1aPjBPwaSBJrRw5NB7za7DoqfiMCkrDoZV3cMyFj37gxGKpW3MM3XJNNQi39ZLJ3",
  "key2": "4rqxfb85akqY8RxvGPCb7bd6FhyzCyVNauHtSF43sRqEHYYRCsmfHz1yY1Ev1eZpn2a3m13zowj8deuk3AfShN78",
  "key3": "55Lghzc9iQnSaNDPBwyYxZwegA7hdZcXTAZgkKLici6jdbWFg48sNz2Seo6zLerWoddLYQs6NPDRRpHEpmDdgtUU",
  "key4": "5D9u6uDSCQepDJJEFPehAxH5ZtzEQAMFPRW1urfVVCYt8K2emKfnQqc95r7U1SXmppdnUiaThF2XFZ3AXsyHFxZm",
  "key5": "5m81czmi6xHuvtZd7pU1q5sT8pX2hKcVeS6FD2maBd9koQQ51UgYrsoZYZqcdn2csGtjgXT2423y9EjEP8vPz9ey",
  "key6": "3RqSGLMsvHRuDktxWcwfLCqZU4ubAd4ku5Ng4QXd4izv4JvDYLw5v7ue2kkMeqp6R6Y57YPqL4MkFXsDm92roF3S",
  "key7": "4SUowgXroqyiYd9ZPSpGgXrEY2RPsNJpL4CRSQoAiU5EF4LniXR92NWTiGrNMQYTZo6fNkfC9cNc4vQ2SPCkGDBV",
  "key8": "5oh5eATGBpm4fXZGoS1XYUpSogBXyyuWJJEENr7cBS1DdCHqKtZWJzeTCX2AeL3AF6h1DrbHKiDwJsbdumy9XtyA",
  "key9": "sQFAbEU9ihmkPC6iviWtDSCeZicvWxzof1wcY3oGqMBo4StXMLvGVA6JZ6wD3BwCpXQeUWjjKf7DrW9VMJNQgNb",
  "key10": "5QK7Ck74C7G1FGBfugmXcd41tFaj9T5EGFTnrMU61oUiPAoyqMrX8fmFCEkoVhRZtyKLmJCdgVvGeqj3AefMSHce",
  "key11": "XHgYMqe1AFiph9BmZAebXmzoqULY4NnRzv4XkSx2mn4eSfRhGQQbTUT7vNtvvbi9G5e9v4A4hZ1u2FBMqncnDmy",
  "key12": "31d6o2jgfFSxvFPV5R9bwCHHZKAH6wKCRXvM9sGWMMo8HWvnYydk2922aWv7oBGa38T1kARFoY5cNnqfQdbcxdhm",
  "key13": "4jHuzdJC73KVAVA3JiYAwN1jksQEhq9BskWPeUg7GGZUDShYNU5XnA18YzvgM4ufXLwMgYXYzr5HqU1WvoE9E9ew",
  "key14": "Z3AzrezSgWPnXnsfAHRfJkoLws4SCmPSmZ1bBzvHQJwYRf4GELNPuCiKKBquUMqj9XQGvSqmJGbmjRNEVHiMwGY",
  "key15": "3CJuq4ijjAYXZiqA3NALCsEJPvtxSL4wf6Ucr7jT43oNSiNQpZZAGvGTfwykRmzTqfZdDm3EjxaWtij11i9uu7tW",
  "key16": "nXjCbyCFQNkx8NANaWpro7nDU8WSqVQ1oQ25PnxERxBEBuHygJSK8m6oY9q7pyFhF4ZrkvdWVXwL1HJC2HPGZoR",
  "key17": "3WhxMC6d9ANrbFdxfXBsicGrbW2f2RytAJnrmgDLEpSqVdZA1RzvaEyHcmzZzZdiFieER8tqbjsU2Kkk6ZvJU8Zf",
  "key18": "3VmxyWQmpaMs7aQgj6RG28BKFqUrVZKWtfNZogAgubUeWSo3f9k22pWqJgCRRzWHhb3nyysXLrJny9Bf7qG6eynk",
  "key19": "3ULZi2E6CMTqCx7AjVpXsjJVxS5vgCX2PFirEBjCdR6wsGxnHpUsyrBkBmkoRSCmGbpQaoYUKw2D7VXr3EuXB4dx",
  "key20": "5hZEFygnnajTBFfChjzbKUEaow7kdZ4YQ6QDX68VCxsws3KhMZ9b8gQSA7xpYd47Afuk3A3LyTsvPjBRQAYfhEue",
  "key21": "jDKCoeZTt9EjGKTB7F6uutppyTC5wyJEQ9mjDoVU4Qiw7tfk9mdx5A8MSyVLVEkExowZRNBdH4ZXXuTPCg8W6fj",
  "key22": "55ULzjHfzdKN2N3KanhCvdn8Mo39if8HXmSPp2rYBes5KCDNjYdQXdGpmsM3jvgdk7XN97La7e41QAg87759USje",
  "key23": "4WNGcS1X9g7QMqiFy6PApY4vKRA6vJF8hv7JLm2ecq1EgDu3SHbZvAyAzypqJNCv34Nks7kT5afLRyDDQNR4ZCBW",
  "key24": "4hLAhcHgXFMH5pkPBfeiEZFGgyw6kvftNS2QL8k7KqtEyVUR8VPYGaNCKnBL9pLpSc49u2EKHQDmhjzR8Lz5FHyk",
  "key25": "2Zb4uSnKq8ADVBUWNtAY3SBxPswSuQ1D5G1vPULrb1jaBDPrkAmDxA648TCw2WwTsKr3EY2QGKcwFpbc65BzaKgS",
  "key26": "2EDeaZtUdsMpoDUXn6McgNFHjHJNqiXXy3mHpUKVbAg5Hp7UJZNrC85DYxkmdkVjZBaEExwVkxRn7NM48Spf6FWp",
  "key27": "3APPteydsGJnCt2YbfYvTmvL8G7owxh26zuTFmZigpy8Ns1fWRTdfn2EuyRE9AyoBAYcE29riRfDNoKhz43ZnJqL",
  "key28": "8g4QQdFTCACkxFUfbtnvZdzucwyAJMfpz9HBPb4DkQ2ojHYRkYYkeSz5ZogmWyGL85EviC8YM1pPwKaFJUopiot",
  "key29": "CLkZ4VLghhCoZiNruVZF9Mzn5sjt1YKd5uSZ7wWz1W7bTZ19CGmtM2rWZVy1LLr1c6U57KnkLkDV1h3FmHBFpiE",
  "key30": "2dJ8p1vvtf23snPUdk8aHPwZ2VoCiK6WiNAGmjDnueLHYptuNwLbumS3UgNtRGDrmuYqFLp1CcNe8hvBDUYHjyzp"
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
