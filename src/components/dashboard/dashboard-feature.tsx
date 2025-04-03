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
    "5t2wcs8NwcZG91DZBQB9KQDxCbSZ87L5iAJdxq9aTBqmdkmkKuhENzWdp9tCdpPykbHpQVxNhWkQL2wUYKt8SSPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VRKCcytnMQUxF3rCD2h88G51p9X2vF2UNX34wZf2gDDzNLAHe2HgjAC7PgPFitSyBc3gELfttesU528cwmccKPM",
  "key1": "3FGa3uQg4nAk6GCEkBBVjJV1tCR4ZPxUkQnMz9XSsSbYtj1VyDer1UgxpN1ZyyaXNqrVYALqA7bHhHNGBuncQpFb",
  "key2": "u2VDjqB1TtoDujkpqfKHh8o3R1F1FPvZiNdDiJJn2zU7rtS9Z8i28EJ4rcxDdG1WM7o5BwUs2mACtvECeuwJ8Jw",
  "key3": "5bhh3VrZt6dXBTC9MAygYM293tRgZUfBz6LEPd5DzcYTd3w6mpPvgPUSZMM2HP24ED7YfbeEy8nNiAJE6Vha4CfM",
  "key4": "6ZV81SqUzMptX7UP2ZRcSX3nU4jUyvrErjgR29Aseg1BuMQL82DqfFUiU97M3FVUA5wzURUQSvxdSjxcNyMSkmY",
  "key5": "ALH3Zfa8pDzA7a8JKNCooZ7hkq4vKEZNVNpHwJmKXTLqUdwnTwB93f9dEvtLD5Ck6BSDaAJqmSCqfJyizcrCJw3",
  "key6": "343NQurA5XMziEwTwPZetUGRequaKPqdMmfNHe8dd7oYCsp678VSg4pbUYutbsH1vZ7RwmHyLkdrxtCbQitFevgt",
  "key7": "3AZDoZq5jzhaW6NS3jw99rbY9DDPSU5mb6V1er9uruhWw7W2yfd2uZwjXpUB2osgDotwwbA1nsXneSnrAkpoCHxz",
  "key8": "5BYPo31JyppEuzfh3jHoBAXqvybFau1ngo9UY7cm2LAGkZyXMDrn3huWZanYRs4nbYX37wnXwJFLgQPBQEhxKZkH",
  "key9": "38ZL9Y3gtpksgkt61voMj9dsVuNU9nTCgeFt1Sj7SeAjA1Y9D8CbhzYDqkGPQrJNhwVcU7TFNwUybKxtFyYCXMuh",
  "key10": "3YYEYhVNVJ41jtMoR8xza4rJzAGEJ9V6DFgPbWgMaM9DKBeX6Luvmey6c5woRvfsLNF8NFUT87G6u6K5en9iasq4",
  "key11": "2JiA85atvaFPM1mBQP2AAKxQ9zoutaUXPC4siQ3NGeR4mff5hK7AMTedjmq6QcLeK6HYhHmvbufrV1LwL89qXK5k",
  "key12": "3c5qEr49Fqp7U11PC6FMEurczp97FgiEgDDeQb6f71tChbtY7wFNXixkQ72LfETcsnyYCF6dgKsMS2UDtHVzi8sH",
  "key13": "5bUTBBgbixuxYbLqxpr5eW3tfJCt76wPEcBRdZFfxLxg5by28YsVqsEKbzB8Qvbwn6dVkje1UUXJy2rUhC6NCzhv",
  "key14": "5Hi7msyL2nCLPRSEfT99N4BX8ogTF2pCsuTcQFuZ8TNxnUEGR5N5sFWgnPrEG8NJ9v7nUZDQQK3FXYz7UkgMtK2P",
  "key15": "25pWk6hj7FPZVKsrNshV62baava9A3Sj5w8jvwobt5ggBFhRGjM3s7oG6X1vDTaqccKGwbnbwTgUbRYqFcQ2dA4s",
  "key16": "2otgYCYvfyk3zbX6tUVV6yR5ZiQBzV4JpyrquHR5jonRdScmmezga23d4r4GYddbfaXEWVqEA3Y3XWsEsCcsEdE8",
  "key17": "61QmVk71TpZpDntyY6mF3x67LWkgQBDafebKqYzxWM6Le4gCDCR4Hum7eBvMHHyG7CYfKZGkba6GCNMDk85YcHYx",
  "key18": "473wAgvXxPzWxfni1kZE2PenVcJFYjZJoqCLfJ93UeGdZrfiWgVTano9W6WUCUvNhSGjdZREFQTxJppKHiVdx49p",
  "key19": "5GPdCGsoqzojsW3zEeHrhVRDtLiUcPLZHCcYXF8mjENWiUH3DvJYCknoYYvJqwNvm6NVvMTgBn9ryD1jE34fPAv9",
  "key20": "26ZpPb5YzMHshcDJsnRj5pfNsKTvnvrAKcnFXAyxmb4agUEpmdknpc4xACQ3cfyExAqUuHpdJ8zFSxRdbR2p439K",
  "key21": "zvyjpBttkeoTFxY9yA9nP1bBo6zsPwQG7WLHvKgEmTbobXzbrpWhiKgwpfCTphz8j6U8uk5saaanvHEhfyp8TSU",
  "key22": "5DyUzUcgjPoi5oDhzQ6323UKbbYbhaJFRAEMhdmeLK1YVMrZo8mPBE2yBbVEgYsL7TJuAssi1YXyHebu9VUBRP4m",
  "key23": "mdopU31z4G8HtnZeNo5p91RarExDFrqPmPsYqTg2QpBXzSoSS2YXZkNiQcLyD4gNc5fpMkx8zQ1LLpoRQM6Sig2",
  "key24": "2SX5yT9jJeLLdt32QkoemhRu8Vi7p2YQee9JaGQ2pUWUYT7KrKCXTJUQH7ndmH6m8kFs9xL2eEUCs5nEEKv6Df6g",
  "key25": "4P1Z71988ptrPVKrjNBDLu4TYQm337giBxfjPZHhPcrJK5UpfaCYzn7WhbQZycJawEPDRtz2ed3pQ8okHEVt6DrD",
  "key26": "3AnAFhdCHAr8AvLF8nqcXpaujYVm59cmc6gfzs7rw8k7AxdvnqWhKj2roL5pCT5F2Pt4nebWPifBCHu7RUnoNKBJ",
  "key27": "3xQV8o8nQ6CGB71Yo6rc5mtqos73B4DgggSuUXg5nYRP3Wy5H5Uu1gT5H1RKXKVUuvBMBnXXRutFSVJuAMfcC26Q",
  "key28": "2ZQG57FbCRwEh9MV939P79XMKENaNKk18kVovCGGesr1Jg6v22veFVxQdZD5QgbtgAPa6XZVM6YaWpLmeiMWMgBc",
  "key29": "3EzJbhreryUa8H1wG3pECL98qnKF5vMUohoiEnU9T3zoaHH5CteSWc9QYhPSxgBhBS2A69AaAYeuxafncsa2yDT9",
  "key30": "5tKN9sCPsijUWKtz2HFErsEMLJSryHhDU7BhqtHfh5bV3HniuWdjy8awcM4rBd1JwmkXTdkh7uZbXKYMyL13HhxK",
  "key31": "6imkErfYS1pw2kNNVHNWXRyXPA8cDDKiSuiNAKT5vDvtMVjigDq4K6kL3iS4u7CuMjHp7Dr5CxiA7bgzka8BeRg",
  "key32": "5cwUra5GY8uhaHcwL9UF9qpmcf2ywWJ7e5o6dsT82BKwfs37RKVb7L598vrYhTNgx6PVAmNpoHJGsHw76keenjYe",
  "key33": "5L2G3NxqtJcAefwyHxBjM2VmZ8KP8nybyPw9EhAWjk2G7PrJTye5WxmHHJAHKXCZbDKsKE6U7u68mcR6BoNnw6Q4",
  "key34": "4ST3U3jgH9BwtEVYL26PBkXFFJi9jkAZVi2XhfggEtUWATtwPserCnGZuMP3LKVrGXCryjrc7JGp2S2h5tc55Mhq",
  "key35": "3f2V1TdioMzjGc6pewCtXqpNKA8NncKpRXHa85bMHbXBHVYw5kmR7SwNkfRxqNUUSU77fPs4yfGgmGQDGyV9c1JF",
  "key36": "3q6zrpb8LQFrQYjy2gEtzd1Bk7SoV7EE79Poi42A3VpXZSsavfohD2Hqj1vBXiiFN9PfQUGRww2U7oqKLH7xhLFQ",
  "key37": "3UvCEDcrNpS1niVNxUPQ1r8UjjArHMByudALwDbahFeXyzLLQcFv73amkDCNxBRQnaY4zLHXDfSGSVSrwiEsHWWX",
  "key38": "5DbwLYkHh365YyHUwUJT73AA1AJ8Lkdt9BSRTGdynnTHxJuUBCGYH4DjQRKSREjC3nnM4c5zbPeKSMBueizP6XqJ",
  "key39": "3guTQCGwmsfd4nnpZDHATAL8jCokYX31hSQQs9B26xytmibBfXZWMcEcEhBD2fTk1rG4tBdUx5jxSkAo7w3YYrT6",
  "key40": "4N8KSsxfgRFfFEq188HwuohBVGozFxk2HEuhYvj5pedDu4P2jsWj68UvxLHesHnQSbg4rgSnLZMGcPvSNPpLYqDF",
  "key41": "52HtTUwt7u8RymNvsWY1q1H1VK3oAEQKYZmFLxQ17ynEYD21LDU971ogr2aiANMNWZbXzTCC3hbA6AM2L7qSbMBt",
  "key42": "edBtxAi9BapnxcUauJQssB6DyHpKKZRBaXWuVyyh7d3wAazCspCmwdjAtd2qAaqEeFFhiVg9B7oouwUEbXDwnRB"
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
