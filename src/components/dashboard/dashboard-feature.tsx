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
    "3NwMo6WvuWiTrXMf5scUso3YD9zxTkeA7eU3x4Vp9LKpjQUVmujRTvAci43JjNSSJQhqnXSFkBdWusF3HG93Pnrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44VGptwFzmHi1ZKxSgD6QruSEvqdtpq1XrwvEsxmrdGemtK8fciVSRvHP4Hrooz4z6DFD8crm9rb6jwaH45KqJCJ",
  "key1": "4PGLgECuMcVFK5p8DNgEnaXuF6a3aBMPAhMb8Pgvn86vsBatZX7949wA4CpyrqGDx1zRxbAmXVtQxsdU3dz4ND2p",
  "key2": "rEg3Zi6t9m2xVQ2dRoubgLQpUWHNube7a86QKA7gyEQoqkaKb3yXvcgUDKVvSKowNwS5RXyNHsaPTZu32XUVSQs",
  "key3": "3z8hYjsWJSdGGmMWXGSvxqthWrd41U9g7i2neTcggmHKf2vi63NiEpVr3tfomw41tumHXhmV7fM2NDPZrNc5BNAs",
  "key4": "3FL569DZiCQcR3jB7e2kSZkSkudEz6XFkVnsExqoYXd9T9xNj5M8thWdRiyCPUTfHCxud72ENZyoqXeCnESrXEQq",
  "key5": "4ExSMS75QdAKZyNkFc1gm3HzbHfN91KFsGB4yxAo2G3ZhcNyDjVxt5Wr4BHTAr26Z96uE85zys8jT7F9k6ud13Wh",
  "key6": "2Qo9FMcKqyNXEG8GDcHJKBPnwkT47knXyAemijUT4xNcXRHqL5HnXRbRFpz2SvP1cHqWWqwCvvgrrwRzcjzvVokF",
  "key7": "3fo3Nsu7a5abgDoX3ANbTuZ1VUNULsfNA7CrWevXPXg4pMC37tqWPwKXPdqD329umh1Vm3Jf4DwJ6j4uUh1LQcC9",
  "key8": "DRmqrgftpVxeQPT8VzNDmEc1pdrwa2PQSxxEfqiK6kVzutewUZr2f7JpggNau98BYvtujR6zADdnFJcNryNFuMa",
  "key9": "wGi5M3sR4QC1w5Zi2bEb2ExZBbTYxfHx6QkGfvyBp1ehCuPbFJRhmvpZFmqHrNW6xiH3euK8QQviBAMw3N2BoNw",
  "key10": "3y5vCygYc1wCXmo8nsZyYjn8gEdqcie9saodYYaGkVTcyGb97vcK7bNJWuccy2v6kB741jKQctLCffiE3bWKdRfB",
  "key11": "45whnFehHPDn8teGSsKa8bCRpHVnFuMkwKRLsbjKSdiTG8xeTPyTZeKd7bwbd66aWmsZaupLBAi9TEvFnyq667PS",
  "key12": "5joejGxtdtaA6ZroYVJ8qjw5U7TBqEkL6qCNJr2bHB5ZjALvTQULDxk4XvLUkSUUcYWiLzxnX4yhFCQui4vh2ucz",
  "key13": "3XmXjtwPu7WQ3rQkk95sakF8xqWNUwPAntULcY7x76ZMH6psvLxpTydNg3Ecd9DoxhqEzuQHgi6xRvG2C9GhTk6H",
  "key14": "5TC43saGjqmPVaSPcfqjeC7RMEo7p87PRfgZr4wp8aB6PVLQER9y55LgmvnueW6jaMhdWBN8BCn2P9Fy6bhiKSvX",
  "key15": "4rmWUxbaQZHXySTA8tKvKfdT2RyyFA3QhuGBZUhdRoSsH4uv4z2DZ1DvKSjAdqQQ5XiYMQ1JBLHdYSYjLVcufRxE",
  "key16": "4XaYiKUra2x3DAyQBQ77JHsWK6wUdEuzaR235soyF3GyLxGn38LY3GRTQ4RepsJjN67TDgx6GQAZYJREev912ApM",
  "key17": "q8byVvj1qsP4Vqht5md8y1zRtkud5d3FFDyrJcvHueLLXSDhV1icsou6Vt9deMg6Y4YxaLmw73nWXwCzQNAtz7Z",
  "key18": "ZtYMs7bMoT7cezG8czjEQjaEv2QfuLV2x3m1SANrwW6ppx8HTmdffu2XuduejLNkpPxoFdgLcBQAGPvQx7EgQ4L",
  "key19": "3gu28qQsVRULGjCLoNbzoUxFdJCfqehQ8a54wbinUmtNxLsgwJBf3UA26itm149B2xMEuNKKxBgTfP2QZJDEg36m",
  "key20": "51B7qJtV4CmGrAaYYiUKQeaKxYc2TgD4dezjmbU9odvmnYSE3YafmvUnzjkYKpRoyKeud4usF6PrZ2MKuDwgTBPi",
  "key21": "5ehzb4YW8ZHkrktAyXExH7bvs9C64fizmWw1UqLbJVA4WWZZGUJxMkd5xNv8d1mU9GsHS4tMyP5NwL1dzbdZcysJ",
  "key22": "2oiXHkona1tEeVNXNSUBKdcsSvYu9Eo1jzm23y9Xw6EUL7934sa94sNtJJUDRrkf8vQcZccCVsgjzZcrheBWATrd",
  "key23": "394uVKSHisgHyU16yS823YJFvaBfLtYE22zKXLkmumVUxfkKhUSTFrnjdVHdsYSCyk9EWb14LeuDTBxRoj3RkTtQ",
  "key24": "BSUobB67eP3GBd4e58b4gufNizALfnHBVQeweEUaSMW1foVpvVGBXXtrGH9fuhzoZHxvmk5zwoQkzq7Zumro4wY",
  "key25": "4SEKYxz5a4swM3xqq5jbQbdGy6xWxmGn9S1991uQQkdeJxfFitRXWYL1b8op5hN4G99P1tKzYrSVRtsL3qc9SYHH",
  "key26": "498oFTa7t3ZRJ8FeJhBnkwbTk3ijuu9Ep8NWxDkpDvHGSVGyFwdjjC2ff4WmTWqm4cmKZcD93RQ3c573hmyQ53KT",
  "key27": "4SCta2ke4DJR2tj2tTHbdhDorVpaSqCmWKj9g5FoVQw3A6M1njMo6qwCTGjqskZbausUE8yiz7jp8nXoiqytnq23",
  "key28": "4bb5Hj1giUaAGY2RDjgJvw245nn8BTNvHG8aBRcBEGyroeoewCAF1AkN3ttyMLzRP437n9Fjr5MoF7NYA1scyQkA",
  "key29": "5UrcgZgrtbmQBpKU2RTbz7NjYVqNFpoupp9Aa85JqSH47t9T6qRwi5sViQ3ez8fsmQRnmzy9EsMoFse8s6kWXuUU",
  "key30": "3SgjScWjjej38695Nrmpg2JEHXuh5MYwKwDqga8ksYnfdrGhUzQDywuhRRXpUiuLm4GofPbBHcjER8KWeYCaxWZB",
  "key31": "4J6xQqSbKMmYiZsb7qsLEGVUJCp9GNeH56xEnvF6gZHjbDrhh2TN2aXf6ULZsjdg512fKNFhwQ2ZbKxpW7XpUqsn",
  "key32": "5QG1JLTaY9EhnuRzxNeUiYXzepSfVBP8JTXinDM9THMfaAfhaqvvAN8Chp1kbsGXB9dzpwu71jrjyVFdPy4aZwci",
  "key33": "5ivF5EeJtgigB4hfVi1jJC1bQ9gF8GZPWJc13KMgVCU7cZpRR2PNYbiqAWGYsXTpeiLUnqd6jKven3snmUtoiwpM",
  "key34": "3oGDiHxJ3Vn7PKJ9pDi55kh8S3wAocBZSvbjPEF5xRMu5xY3GmjCDPjzSVaJJpQJ7oWPujhdTD9DCZneHKmchgVL"
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
