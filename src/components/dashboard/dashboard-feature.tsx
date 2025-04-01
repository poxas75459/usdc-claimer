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
    "4UktwphMzo1q4cQCcA5RQiQ5w2yHcYKjM1LJTUDzpS14XxBxsBtHRTq9DusgbqoccTbgktKPbQqXDmTjQ961DBf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zJBrknVd7pBucpfwLHpXxQxNSM9WEhdZP9SNHzd4sq6pFcybETsJFggG2DhAj2gnN5xydxaprtVXaVauYcFJhYG",
  "key1": "SbpG5hsEcg78FSWmVnSRKYFzqrGJVqEQTx4NDaTgsL6NvxoTb8dd9aCzVMV4FDfqAB8toS8EGqe6SjuP4y7VqXt",
  "key2": "2ny1F9UjUSHcXua7ncQyAubDfiFPxrohWmn3UKW3moRm5RA1rzSYr243FkH4HFWaDkxDdFvLviuekkqCfNXd9Dpj",
  "key3": "5TQ7habYh7gXYsZ3HJ2pMpeWSz5Bn2Hyj3smVgG1b4NuW3NiNWRwfRR3XjBrjDNBKiDTT953bXajhQohhJFkyWtt",
  "key4": "2JyAZk7154safDTvhs5bM5RUan76owjBvTFux4Lf4yMhrjXzDZMKm1tEDPy9DMVgyiTdHmsKzyezENBdgMMMwWat",
  "key5": "cEbqCvqmtd71iMJ2WdZw8UngidAEgCAwXxvc1KyiNxsTiHY87FSmU7DRp4vU7hbzj7JfE3q9PXguJvyX2utnGDe",
  "key6": "5eqULyErYYFso1e8jtpoytLt4GyVUYL5aBEpVY8ewjMnqfVF6tkacBiBMhZ6zy5ScHrcPWDvssebDi5jSicbos82",
  "key7": "xzKPbpx7oEbExZc9g3iEtwmooFP2Wr9xNquSHLd1aCk8dzuj5B3BZhCfU31uKKDZFBGuUVrGmqudBBcdYpTPhQ5",
  "key8": "2UNVctrGtqcnENivLrhpkR8zyeRXYLKYG37ZGpqELma72morT8Hx3GjNLZMGWeNdmJuQjshX5TwmLGVzTNN4cvK2",
  "key9": "HQ35uFpYWH3J59b2nmZmCtprGpZ6VUFyyxoGygkyW7XiLz7crcuffW3RareHu8q9DPirFsX32tCdUj63bVzrDHr",
  "key10": "4w4Wysu95yTwXPjdSfnyj1nUMoqwNDSjLAWq7y4dSRJt6i4hGqNNt9RjjfRX8F1czfSAn2AsNz5Yvxmb7K9MdKmf",
  "key11": "66D28A6Vr9kcAyrYFDePLbxx5sCjzegvGWR1UJYADne4AgD8GqBJtB4HEtDhFpBPgMZD9ViAetjywa3qdFFfqTpD",
  "key12": "3P9Wws7ga94wMKU1fPAvNMorWyS83x1ZcSshvjVWwyHpTv8pCmBvJdets8xTCM1nMqihUVat9u1KNoMQFGkZ7234",
  "key13": "2R2fKXJwz6ZJdn4VXVBezwabFHQKDNatmdrgjbGzEnUNxbT2qzQiWKrEs2DH3XPsQ4aTxeXtY3WakThPf6YtbDQG",
  "key14": "37g4ZPbYExLdxSmHFa4RXiFc1dPN74ArVCbqCrQ64uDoRLbSBNV1rZ8o5w2EUGjrF51CUEBhcMYYAXfFsLBSmAEj",
  "key15": "4u23bpTSCJVai95BEC5HCE5EpKB9LKHgXkfsCYNced57PsGgPXJdrB5nn1cjeDGvJHP8yhwfXqaF77oSzL2WE1za",
  "key16": "4Ur9UY1vRnG6zGHzJQ9dCTjEoyRKn2S1CJeEVQLGWrbejzCWWsrvFUtj5n7EoiCd7kudwBXjR4dT2sXH62L6Xgfg",
  "key17": "oN9FxRTuGWqXtpnR7uVgFkYcQgSDtA6go7T2bfYF8G54SfcAKv4HCZb83ppYzmCKNsWs5UcYosJC5m9u1YZwF6a",
  "key18": "3crcgkKaUtVeCxmhEHgwEa75Jr8wNx5DY5YaMA1PrMkf1FRPdeomLnUwDpN8yHCE4MLihLF1PPBBj8GGq9hapVpD",
  "key19": "5YQ8oZZ4APtxtSgZtnevDJEND5m7KAhiWNd7pkEkCCvTwzihNv27JJ88bS9oPuvkt1S93iNeEnCRewT3bMHmsiAA",
  "key20": "28C2ATDMZUE41AnFZTadkLtvSXVYeL9h84v99TUbJdcGQ7yLcA2y5e1KbT4tPbJ39gSiWZw2yTL6FrPEK9F1H3eY",
  "key21": "5DGpPbsc43BsRGzadq3EaF9twd2x4cu8bsdfGVP1Dpzv16HJnTiLdkE3y7qjjaNxsmWVMSPvyvnHj3X9u7nvYAF8",
  "key22": "5GvcaiCnDUzd7NXLNHKC45cZq4pznwcRkhtvqX8hWEUGqtd8j8fX49gMG21zxocEazuYrSoQagmuYkedjZPrjwMm",
  "key23": "3XkfiDYq6fQcn3JDQYMBaaL3tc895EPCdBei7StiWkmMHLP2p5KWf5SFStmybydqMWpMW1NTQ1a7VSbyeePbknrx",
  "key24": "5mPAbDqmEeNJAWoMBDp5VGvXN8ezLUEPBngs4rm7wc5UTGMYSCdaCnvydwjLMUhxGr74YEUcvwiQsDq9wNN2vqpb",
  "key25": "2J3qdYFi42ShE9ssUQ6qAKA8A72rqLzsZ58mQsCnMXd5oX9QHLT6FDxtn9oSDy73n4nhp5CtftSUDQs9v88t9Gnq",
  "key26": "7sXefYrzK8owkhE7X1wjiuBXhoTg51mQPPR289ki5Yj37svrYRjYT8LLBfQp3kuBjmGTtKDLhrVoew1x7Lg2nNr",
  "key27": "4VApDw9mNVhkUsmSSZA9rJNc2mW95ZNr94ntadb6AHSqgsj5pN9FcCFp8rybADy8WkA3RVmPLoXVUxJgPvvttALq",
  "key28": "NdcFFLuneC86GceBm9W9pD3WZdrhn7GQACpj6DMTsN1UyQBnZMCu7jZuswp6YnCDeVVLBhi4u3ji1RdQdWs2gkc",
  "key29": "5t213P5ktJuMS5K3NhbHPGUztbDsx995LW1TuwBZpFCWW1FFDZekxXap5k2AZipuy4xN4BvtnaFWuPZVJw5Sdv8R",
  "key30": "4ZVMzcogbMrFsRRB62uQRaEFoo5q44rV387uduN5HhwZbUgYuzFswxtA8q3PsoWRUtNBgRMarM4HfpoLN5uJdDS9",
  "key31": "3qxcHsc7mMuWJ8n48eihsjbftWWq5aG8No39fF1i2sJZAbXQbka7aVZqemxpR7yfiiTcSZZD5CmAqvtr93npLp3X",
  "key32": "2R6VuXJyepL1LVbxaWn3QRP9m9K8aqE1KCYy27RHBP6RD43TFwxNNzPbGwUzdUjibdd8Lu35cVe759vLXzyoP5km",
  "key33": "5CCnTHwRqAF1oPk1pp7AGZXzHrS7dwPkS9kdAtwNEii1WHzCzp8hS9A7o4YTvgf4vtAwin5CjfvJeKbP6FD9i3tk",
  "key34": "bbJVxYdMXVEVZC39LVEcVE8jokyxzpGs2RRxWFUv7zn9tfwFbvqTdJVkTKk37kX1vfysexFd8fqEfbYSypqvSM3",
  "key35": "3pxYvzxyUBJV6jYvJvFNjVP8wwTLWdm6Nyo95SAhRNzZk7R58sTREwEjYVY7sLGWVHuxVP9qBNCUCbdj2JVdeMdu",
  "key36": "43bncn5cXj4P6qTE5VQn9W4SMARzL1uPVc7v6Nv2tNRNFN7Znd2o99jQGFA4PLi7QLwWfXuX5sCJqg7LSM2A8A4s",
  "key37": "EeMBQczproDpPCoVnwLrtVJDEgXR7z7zqteViTnrusRbvgcKWnCywXHMyEHXjMyDrAZLQyYUuSVignBuBbR6kWi",
  "key38": "4qYpdNMJC7Fj6mkTyo5efDz4qC1kSieuhCvspLcfoZR1wQb1Dcnf97sLff3HcFcfRv3rPtPAYT7U6a2p6ehPDGkK",
  "key39": "5qcUYJyLoWQUPhQciTJn1W6mEQFaVPdYbq7LY5ekkcKJN2quYZAyWwoSCuAXzhW8X6QJh9mJ1kM4M39MfH7WNBRb",
  "key40": "2Y7F4EWjMevygZ61gNhhbn3eNVhj1engzxXu6Emor15uVGuAvtCTumUTFzMXqFQ9iawYhkHmQ3nY4SQhzyQvVdMn",
  "key41": "31QC2aE1jpVWYd3ECFY2CmMYTN38wbtc7x5iypHRWFfkqZvgGQotNNp3fPEfk2Se2Rr92ULCUtACRo1HNg7jarma",
  "key42": "5pCtLcJZQN49sczGTn6UxUh7faRC6oXJ77SfYHU48rSVr9hHEJxRQVZLy2VfMaPTdvk2MkebtPeTXZKTuD264641",
  "key43": "R1NFck16LXDZs7Tm3ZT1KPpbMPnkA3644Zhesg3Ns6BJPsQg4TQeaNsH5v5sPFhN1JSHgZVxWgv4L9q7L4RDHZi",
  "key44": "3QbxYv6sbHEftgzkJSChnKBVzx8X8pt46qW21KhWWS2ibE9F6ieq9SeauvPqnjvEmFa5Qz5d9MGjyvtEK55Vytf5",
  "key45": "3PHVqEShWxcQs2dF87bKZ97irJGoTSyUJ2BzHHmyCAZ4ARoRvuJcoMDsu72GGpFRbHH2ESLYrtFBAPGBETjiiiEE",
  "key46": "5teVrgfiCPF671ppWoa9FVJVYnLMV48finHMT8KucMWroF665LepKd1cAxFXC2RihvMQTbfyg3tZrYEG5DANpA4Z"
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
