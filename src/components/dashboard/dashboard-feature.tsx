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
    "4WrDX7fNUfKFyfZ2iX3sKaAP9UE6ZsvKXj6jS41TG5GXDkFS7BwkDdj6gmQZ1wizpNtGC5YQTPUTGxe85mjBCjrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NrcBR1Sc6BFQL3FrhsxGBXrANgZk423M1JiMireffPeHR8k2svTiLjRrFGKMFSG1PdFBsMmFMh2HY7BV1MJbW8Z",
  "key1": "4CHiVwSjMkswPHqp6hUjwysDafZj1Fd9yJRuFKd9pw9R87f8VyHYY79NoRNVuCEB1cNLubzBtPTkPeZv6BqPsrSv",
  "key2": "61T6KszN1F3GERUgyxCL6omYqoxCEsE5hi8BCiGVtraun83xofKKTUeDGDnvcWD9NHs7r9wSTQGxY3bK7x2kdBgC",
  "key3": "AMj162QqBhtsddgWH6AdMi7JfFUtcMP7C7yqJEwBHYydWoUZaJKT46cFdv3nsB4Jfb8uyoH8PF7troib8DStTsg",
  "key4": "EfSbaaAvKejV2EQAsGyAN41TBq5uVHNcAmHEnSNMTScdp9bmngATUMvxMctH5yvTB6CgkFxqjhKpayavkZ4m9ge",
  "key5": "5vcHj7ZFtxQCoB6NRPVNx5WqGnRVGhVejLAvEyEaP8qMssYykSpCFVKi8dpgevXZY5fYa227wd7tLzfDAUyuuUm",
  "key6": "47RHXkVMf7frq2EBzxAeNV3A8VHh82ofnTeG8CYyXk3zWEut8YcQkCdQV3Zokb4aVyBCLVb7cr7doZUJ8s7rUUM6",
  "key7": "2EV8eZ3z7A2pxVVquhk9JAbVbf9UAbumvznTUxPY1VgFQTn7AqjDGBDAvqjQPPZkVsYGiFD7Ayb78GsSfSQRK1A3",
  "key8": "3F3kjS3ZTUQhuJXWnmfPwQ8t4hRRueH17GXQH3aMdxG4RGDfRcV365GUs7uCXymRGir76X9D4FoiBMeCr5CDSG83",
  "key9": "5tZ9ysHVyo4AjCGQza4XxMsPDyBzbnXpcpkQ6RE5B6m5FiwKxGGUX9tczrwTCMPTYZH5UG2rRCS8XcQJHBB2qDp",
  "key10": "5SPEhNX5ZEyta4HDBM8o8FoGLUeMMYvHSUNGnZqqLEvnzUfCupvayVbQBVFUPYKKp1zpEUTRn3Z3rLpU2nRvzWjQ",
  "key11": "4eYwyPXHLKaKN6HJ1SzeeaRXr7cE5xmoyMEtsqdkmyGs89944c3kpFdD3M54azbTc8DmqtyLDyu5Tuz9vmHifHKX",
  "key12": "2FixmWi9RLTnhnQ9WGj1TKBSgkFkhfMU2wbAeu2AZ7V7xcTSB6wMa8gj2Fk39WJ6BHYwR6fiY54dX8S1rMgKpd85",
  "key13": "4PzynTtquyt6ZegQqKFf77oxPh2EYmq3ng3RcJsY8exy3ixpV8SVgbBkPvYtsrMNevnkGCqUcNgDf5f92G1Qaf9Y",
  "key14": "3Rw9ud2tc72kXYJztCSKMzrTfL8esgrprbZyYATToqh5X1G1Rz3e1A25RAc5GYvGuAezHqtDUD26i1t7SWPGn949",
  "key15": "e22VEMz4dgq95oAMmAEH5yxz7dhs2Q91o8NWSVVjJmmgLfmhhSaxUA3BbM4CPQ4cbsMj36DGwh5AaRDtVE564jw",
  "key16": "3Dmv9TSMU9Gu8ae5y5cseWKhQY1QMtjxKUjJeqG9LkLvBtDfcPTaJuWt9f5eFf4cS31e1aJJZFSgRivoWmsfdJ8n",
  "key17": "5NoSCvAHm2LsEfZsr4hKUGBx5AXQvuSfRUC1jYpgJY4oJ8QWgTEDbFhjSYReXSuVhSzx5feaYjrxqTmCHRftHXx1",
  "key18": "bHXNxFJ3f4sGWaX2gWavtpv4XsFEMJRhyq4wAPNzdVpPq7V1UkVrxb6Ewb8ZdZJCCTrnAPG9fW5DGHkj1M5ibjR",
  "key19": "a1awtyxpTW8jYjhT7BvqER996iscsma3Hn5ndSAyef1EskMRq2B6xpDEn5j8Z1HMymzZSVp6beiDMXmg8mfkifn",
  "key20": "63fF7h2s5DxQcdi2opMeXK3BNZQreHyvnKAjBDqXNGaUkKaLkvMreNqvHgve1Vcn1Wm52j3T38eQxwsEnKTKwnUs",
  "key21": "5dAKUoKR19baXyhQMfvQzNQbDWNpSpBB4VvkFTJeZq5oxxSkDN4hifUqngex9V1cipJcK5SqsXn5UvkecWSp4xTk",
  "key22": "RfQENDDzM38AzwHeaB1KBTEfi1dX1CmafMNa3KFFeuyKfqAyNHA72nqHZcTCbedWMT5ca8WGq6zEnSjyvxkSTMB",
  "key23": "5gFg4eMSUkU7oyZFsX71yRw85W4aQEYgkoi2HThSYo3jfWcfUSMSfFG3hckh4Hvo68MuSejiMqbfT6Rc132qihX",
  "key24": "4eWkKU5gqDpLVCHbB6KHUFpDSWiwhia9mCqGsHc572vzsDZdydzTgHYQ3Swt5rRt2qqiSXmLqMV4EoMw8aZrYLP5",
  "key25": "2j83zvRPP5KhxDjv9J3XcR5seqFXhUbUJUssmo63Y3N1bJQjPTbSt5CFgxXmDDKykjSw2bBShGZn4PN2ktTJgBGL",
  "key26": "HFej3WJRK2FMkYFwurCFv5Ukgk1kD6BPXESH2BLd2PkrtFedS2uiKGg3gwAxhtVDFySiXXxHhoR2X5RMcXaE24M",
  "key27": "2bNR7hSp8jXkAMpXFvTEu6MZ9861hbyJRxvYCL2hiMxScXwJVpPpoQQRdCAXSJa5rMr7v7xjRFPY6XnjFrZwaqeR",
  "key28": "5Dn39XikLmbgTASRGeL7yxe1LuKzrHUAzwETj4wYYhUW4YXHKc75WbgyMFM7KA3B9CwvtcV8B6R5SrL3SguHVcbs",
  "key29": "Fn6Zm6se3P3oEaUYAYFdgiFbRCBXcrLby434CmkgLZhUb4FMS2XReneCZ2UuUhjv2hHURriVwNrtqVfmHAGgcMM",
  "key30": "2LR7czVjc1KmE7MdLHWxjXSWeYL3nCj7RGGZo6cYwwTFaMCXT9LpqbKWfirsWxedfFhBVtHhG1Zeid9UZX6HZEtW",
  "key31": "4dZVJGAKpD1wiXHvDz25uNzsA5L5E2hnaF3ALhQojNUEBcVVn6KrX5aTouCSXZF2Lh9TFEXJiu32rnMCPaUrh5TQ",
  "key32": "4FQhh5t5dc1HqJ7WnFCRSdtaPXCBfyisDtpokYNQVDFDRJNTSTqza7nvAmc6m2Vi57iixFHXaut4Q3ouQ1zKpeux",
  "key33": "3aoLjqxzhrva6WaPi7GZvAvrRmkKbKVwPKqkZ6caxZGhBJNMamMgq4rihNPMHEP4vtqPHg2f2PgXZCeQKyqmvVcW"
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
