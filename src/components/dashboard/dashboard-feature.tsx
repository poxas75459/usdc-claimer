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
    "5h4bN71zwvJxg1nt7zPU38LZdGVJj6e3LsebjyhT5h779H5q3sEZCTX9gdfpvSUWUjqnb8YaGa2iv6fKvDMa71D2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sHa8wjDV6TocHuRjUUH8nwSi5q2fS3zyQAcfd9SURF9h1Q4KV92s7BXLfrss6cgdzVomebGixDGRmG56q5v4TMj",
  "key1": "mD8WTRj812AXpoXANeYr1i8ESLh1GGwqLW93kLrtrCBnoHdk1CuaGKpxqHkUMfQHnQLQGien6UJeiXpSFcCGLo2",
  "key2": "4moZLHxDhf2UHCMM671crdUrK88AaCaB2Rai82ZMXyH8HPeWPw68q9FDRp1epxueEtAQgsb4kEggRnUBYwiSrbLF",
  "key3": "3V5AAA1QcgyfKMxrexWuSAndJcyP9rBbreSGSKxM3PQWmr6hvam71VWp2JawiB8aGXf7ECzryDgcw2Temcg4gKYs",
  "key4": "4muoLeAJ8MbAo7MazvEZfizMwGJrroUQDHX9q2nsZy98HbJkdJcwAeQzCv6qWNvLAwg5YEKrRGKDQxFvGi5PKUeW",
  "key5": "4rJo8kBMBV5D84xSijdUoW1yJkewie1M519F9N5p4z6V7zLM3Vx6DiDBQ1cMHGUoXWV1sv6dRTVuE4eVJVP14zfw",
  "key6": "4dVGvBPt7SH9YxxXVAihdJQYkaB2AbhmWzt7yRQU1YAuBESrJ83hQ9JF1txa5KK9viLXPnjWMRSRwZb54C348Jv6",
  "key7": "2vLuJmKjJdgGfj77L3iDEXnyTuuJAGnMgkRm8tymEkJCDTqYFqkB7BRoxxYKkgo3LPi7Pudusda7n5Yxkx1DpKGK",
  "key8": "2B3BmyXaibqNAG9Sk5bD1b1VKye1ataGChjvpMTT39jU9pFHePRc8bUnDBWd5JzJZdFS2TbMVAur6Gb3uJriarkP",
  "key9": "2hova8beq6af8MFXx74iXEAdDf7WSbLr9wUHcFgJt3LNuUoMaJYRE7KjWLs1LiPNk6avwcAQ1FMzvG2KEg4UrXpQ",
  "key10": "58XMfKxxUwbxHYFCPPFYGjGyvHf2sPkEkehULmAoL7HYdmF75LMEGBRTvBw6WdpVyGJhJPAbMoVJuSzN7tGaUo22",
  "key11": "5HZcSDVbwhpLpFaQf4N4B5qaJ1dKhqZj27R8xkTdtVosDFL6yx1G4rFYYPTQ32C9EZDUyGKiN3GtcZYeR6moo5DL",
  "key12": "hzd1FFGidnazVEwpaMuowpJuKFjPkRCGZM9VFwiwURb9JS5xgZtG4EnsA4VmYSNGEmvkKDXHNNfenWt71NNR1qx",
  "key13": "5edbrAnPtHtTyyzB1bdct38TcmXdYZe8QYkVFPaUw2mDskF9U4KH6eKSTp9HLcJchksmxmcTVSbk9MddgwKbW1Hv",
  "key14": "PKr1uURnrKUSiGJ35cVhwcNGp2fiW6HahR4doEbF3gcWCsJeKCMyPxdTQWv1jZjkVq6Jo7P3VGbgJLou2fdqZ49",
  "key15": "5yKDKuCfsey1j6LCN46nAu4BWFr7xHEV6BQsREz7jT7KQczLiY5QDt6dvHsoQDh795VxEXh98rpSQDzHgHfPec6N",
  "key16": "3GYr6aevbYWAbgs7PK2i2EaCRxCjyZ4qEhQjnBFucbZF2RkmnmJWWMto5em4JzwXeyzr7KvCLASLRyT7aAtC5kGA",
  "key17": "5112SK5AwZHbVkRJ75cQbwHVNDbsoMr9dpNTwaV5PVNiCPGzm7w9U3hiis8mVDn3WgjoXDeqb9zscH4ckjGrfoSY",
  "key18": "2GM4G5b2AjBT6j64grY7nXLKSkfAXsqvwgma7zybQZgdfcPrEJ2BFGRh4NjEAeDQHvtGLjcNjGHieZMCppZ3ZZR6",
  "key19": "gRzbroUF3vvnZfiDdDcezYo2XtghHFq7MUvxXH4MF41zT1XKhUXT15kg74Jcfqsy9MZzNRjDdKHJ2BGXzgivfPY",
  "key20": "62aFqstEzRAcWVryvTc4rbqMxVXg7cGLuzqs7bsfWwHPfHSPrrgwyz1dNwx2UEucpswGehTCHhi3e23oHvVmYe9h",
  "key21": "2AG14ju2UfyMg2fd5qVDrF67SKdt5MnQLXGWcMuk9hsAe9EbxaSeSPARBo4j3zeqiuyo7981FkDLbAepPfynmcgx",
  "key22": "3Xv6V1P3T814d7XxVqignbzEkaXf3Mh3bHuo6PwubRKqbV1yK7uYzUL3WxnbPncGYRZvqivfJyE7HYf54pwyADwJ",
  "key23": "VU6Yw3idLtvj3p8pqdhmwsKJhUyYvHcS9BQYevcmkNxSYTEnC5XUcE9dvv9mjreVKnEjQUMuHM54sP7ZPi4tvLr",
  "key24": "58THvtyUEn6nfL1xy993rzhHXj8sV2jk6BpuWavreJrP4uA1dG2GjxHoePCQghemgXxr8omnHihrSERd9NSdJYFi",
  "key25": "pEbLcnBxu1SPHh73DeZwV9doe98B8JXLH2vk6LfzDCAASJiHeUddh4fh76BC9jwPo3SKrZCZSxaBkT24Zji7rAu",
  "key26": "3AsLdwt16yRwytjZ9brCKRyFdzR8h2TXjc72YW8V5iuQDSKqbSEnHCgfFbRQystvMN9EYKY6Y4PSzhRhJY5JPrR8",
  "key27": "62HFbu52vP6BSqkkp1DrZDGe6mi2HBVKfEiMrAUtMeV4BW3VzmqeG1iSEhBCfQdoreGzZqDmq3m3eWUHHZmsog6u",
  "key28": "5Nv2eYmeQZYJHWvugF7rY9U5TriDEsZxNterkjsXeCgCjWkhHqKN9CkpjDVTL1eAtBDSAU9ggCi3FQ1WHc2TkoiE",
  "key29": "4wJkcPQt6tTXFgHjWvpA5fWhnwBZh2Nxz26xnKrVP8kKbModzWWAMUeJmGYqXwstRxZw9x8MQRc1HJCd1rrvSESn",
  "key30": "F5WKJQ4ZXP5YQvQ3F9962ryYndcRRE7b49Wvan3LA86DFHNzsuXQAN6bV8jKUAWxueJFM4EEm3A8MFkro5m3hwS"
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
