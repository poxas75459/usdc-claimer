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
    "9EhNigLMJCRRRjRAU6shFdfGZQfqQZJazA9tVtC3Mg5Yr2z25MjJ2LSChEca2SDMbE8PkCCDuR83Tt6WSFFhs5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56WCgoEM8qqeE18KobYEsxGhkuUTzi36w8CuGdE6iHWbAPm1DAFR1CQrAbsD4VitbkCcm56YM6r2CYtgyGV4yEcp",
  "key1": "5UZLrdEYGJEKJvHGMjreMuxKgii5VzJ6dFhVtxzSDbW39yZV4onFxxFenoN3X4RuDf1RRJ7QGg7aWwx1NUb2Fv19",
  "key2": "3ha5f8gU2rBAMJvxMBSKbp4Sj3pNvNStyjsVcAu7kuJBoLKVEDFCerBhrvogjE1fW1MhvSqVWCYqC8owAAu3Ajir",
  "key3": "3Pc3L6ymgnvtTU8B5ABN5Hwk4rDeD1REvo34titTz5Da4R4RA7iw1TRsKWniYfEoramPBM6M8qq8EGMUTUnZHnVa",
  "key4": "2ztG4HJkPnkR3ZPGkKD2F425ppZT9MZrUWQ3fkV55dzb3FiErTgrYS6x4Q6YSew1FE2mPN2E9LLAvM8GZcTbCLVF",
  "key5": "4QhpgCx29ur2PBq8TJtaoePQdCbb8xjB8dji5p4Y8nGXwAyb1AbioQrWwuEYgodWZ7RaZUufpseLDHe9Cy1yLUKW",
  "key6": "4xQdpRGfHEPfYf1wMfnN81MB9bEjVJ3Wnhnm2TJbmGCwM75BD7gzwC22rgDRtn58mFoRAEb9syPWbetVhWGwhoNV",
  "key7": "47eUDPmm39h5pcnwb7fFzmirRfmUBsDxgpqTtzULAYU5Gv8SRe9gzoUYoyfS5dJ92VDusyYhZCtdVo4EfEj7eHVe",
  "key8": "5QarA2a1Hhw11fbNjnvFvgo6LqptNyyzaPCHfuNW9nzY1M9LiDzPPJtJ6CkrkVqdaMGnbDiy6Vpb3NMuAnf8bnqH",
  "key9": "2hfkcyxVViBxMd2hssovdvMnDBUC18FZ9bwdBagcVP97CKzLEEPTbnAYiUM77dtx5Wmb8M9u7pWXfeUCYGhSprjk",
  "key10": "5bHhgkLLYnNiBqGsotWAyUzfLEctyxcDWFYdPAYLcrhSM3nzf1tjirJDocyT2mZsqKx7xTRsGG18r7e1R1p1Uaq9",
  "key11": "4DESnjCUXC4x9fS4jxPmQgsDMnKpFYSJcZaHf3ni3BPMmFCQ6t2CqkJdYbptJHNnE8oyfEDr8PHCsaYCUcfe4gAi",
  "key12": "5Xzn6VsSZXcLxoCZujBDzjPCbBxskMm3t2tTWwgCTvvbocx3EsqAY1SfGDAi95ry9rFF4w235AhHSnTEfRRqBKcd",
  "key13": "39J39k9ZpvkPHPK3aFj9Wjn5a1KYNRmB9wNRkbirCPi8E98YSsgFR5UTwCHnVa4Jb4HPAqNYEFpVNBAqfgUTyvmc",
  "key14": "4qDoafu4XaXskcYTNxUHk5P4ek81Qg9Nso5XyPcWaJ12MvK9qyP7G3GfAbkaUhQMjTJiPQNToVwUqCscvVmYejm9",
  "key15": "3C6Xn2TW4wUq57KmtrjniP4HDzKDXS9xWq5QYUJ7hKeZ5JAzJKoMEnPDGmgLgUibEV7NSbzzLQrfTJf2jqE6MNzE",
  "key16": "4t716nuxVbXZ46usEErjpUzLroL3EaDhsDuWLMsmkjpozAQn1qer1nEmbm9TjAyXfLabbtKvSSTAT3igSwCbXf8d",
  "key17": "Ek4XtfTrBBC8EwLzwmfhbgXf1PhuhD4ZsEci5LhH9L3JFSfXb5QfpNiaHf4dUfL4Ukrr9ghxMTRNW25HQ6nn9oC",
  "key18": "4iJ3aWZYDLDFEJcfodubZ8h2VnLzKadH1cNChguxe3Wjfc9YJNiUXkHPt2M2CfFatu47iLxdajtHmhxtFppAKZ1Q",
  "key19": "9hCjG3BsYUY1xFdCQKrqsb54BkmWpga4zGJfhfeVvJE4M4sDCynjNC2gm97DW4WPhA2819BhQKvBvR3yRRsxSH8",
  "key20": "58uopAmS4qihqBXG9DyuesWQYt97rdc8GB2gm3fLsvyvCWbtMamZGdKZf2bVWQ4dzsLN8GS2vkPRX817vaFeC2qL",
  "key21": "22wZ8d1cKCh78uE5czusv8GtiLwBzASSHMU4rd8pMmrHiDMX2EoxN82q8iRuJnTrVPfwNPaFQsiUosTXAk6iHqJA",
  "key22": "sJQQNXHP7mCFki7r3XoVDM7U6GKicM3wVhYNJ9VWTWJW9FrDYmtzgSTmUdQTNnSptUqNgyBV5tiiVddMU7kbtSk",
  "key23": "384JrfdkZkkWgm2SA6uw3Jh2w8uT5PkBKXYZknvodeLx8urK8y7LAkjL88QLscVGXfustXrtNssfTSTUMJr14TjZ",
  "key24": "2i7Ysoi7vEU5bs4yv1kGgvzo7h66mUDqeti2KQ6h98iXjm3MWCBfkPirQCe4EMWWmY54kSWhBDxroH86giPTqnZf",
  "key25": "4fFGJr34UDyvt1J7ezp68jtWrG2o5LD5nZtmyqYEv61b2uwmAwP8smPq1eCuDztcKdD9aCy7XspY2khTS3eeG3NG",
  "key26": "3QXyDPUDYDJmMdhTs2aT4iGvQMbCdesfpNwBryWh7NsHqbmWqW42BbMTSLepLwZVMayagV2e7pJ8dp9YoSQrPMmP",
  "key27": "655YCRP5itUxiTZxhaFFDTBG9w5sNc4hrvpFT2KYxBubxRrSwnwKtMMVBzg7nSL7EzWYxkiA8ePDoxZdmXUDQSTG",
  "key28": "2Ho4Z21tDWiijrAUMcanbKZYUxkEATk4XoW2g6Gf392Jy3URUS3HfmH9A7tVdeK1DYJTDCQeTpwGsh6zTQ9hHa3n",
  "key29": "4nYHXV8qBGZ8zvmiSwbXixQL7EMcF8QFhxUUcintDoDwtsXz6WSFBLcQvVHAXVJXSVdRn1jMs98h5zGHX2NFuH63",
  "key30": "d2s6mHjbNyzDvRvysJwkYb3omb2yhtdtkbY2D8D9K3EfeGuj92tewnroeR1vmSmhXNoZP1jAo6ht4LBTZpNXn58",
  "key31": "3fRjWPy5jwAHCpVE8Xdnq8ThTYmvaxoJYh5cfQg1EqLX41y7vo5LwjSDvhWuLbMbrP5max8vHg9bbnK1T5TR9hrP",
  "key32": "L2hhA6JuZxfAqgHYKf6gpub7HnXe8Vj1qir6oGzLhrBqPFXE2STRzSsXLYEPv2Vs5bfEmmZdmacM7ZTZUNdenX4",
  "key33": "47GHQgHXL6K8EYS7RxfsMJDMESg3ESCeFnQQasy1XkSGGxSNVq2apvHSUA6iL4JS7unt15FNYfWJh8zDhCFgXMCV",
  "key34": "ryBRrwkarxjQFhiuRXm8VVsPH61raB19zM57FaykhxcXRCBRHN11mu2YcowKZGYco6G3UNNteJs6vc1bETi6rDM",
  "key35": "3oLLqNwcYB6ZqJYoA3KNDRJn2dJksiAwcV4jEPokH7YxcQ3KXdYiWhcbAttB8QTw1WdDWQcf36AoiFxTfduuztvd",
  "key36": "2Kud7qmWsaBBfan8Hc6GTfSYH5jcmswfcLX9JvKfLdKbRdhJfuc9bcMmhDJaYeWy2jB5e9bDALGpBLhoFGPvxLmM"
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
