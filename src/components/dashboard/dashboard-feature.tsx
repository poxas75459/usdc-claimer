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
    "4PJa1NWPHodJJnhiGUieLuu4fzJMgekomJECBB9NtVjH2YtcfXHWoEHSbxqNHQDsKxE7gQ4nCdLbX7KciBw8VZUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ArTTYCw484GcdWjuztnabvkdHSGX4z1HKVfGWyzpN8Q6PafrQZDvWctMzyv9FjaXWBpaGaFHUDwWYfrGswxL72r",
  "key1": "3D1iBDELtoUYvkco1cXG6HopYsg7pnpi51zQoiDqRR6bQfwwWPHxFBVXzjbRSYatGJnSU6eQfqof1WRxaE5iCPED",
  "key2": "32irymeRe8BvNPCCqSzojaY9d546BYB9S6SuMbPgMu5zympvLPcCJ3spa5Gu49xtYPFSg3K5UhP8TCxx3DdbWpJg",
  "key3": "4ErpLerL4xV1F8YNaLBXXu3CMj4ahfb6J654WtkW4ooJetdaCvTKiz5SNUr2YsvfBV9QTfcCEdfgK4sD4bFqNezj",
  "key4": "223XN5YMFVjLVk1VsU1amZY2oiwaDK71xFTKYXRTpasyUuQsabuRJo7g1uRGncWjq7RAwueYoVhiYP169akrYBdK",
  "key5": "4X4sPnidFnZnAWVMFfNiEweCG85E9zi7PWuhCpTVyT3GsnC7DNa9AuwnsbeHwLwx9zgfAQFtkgyEGRSvLierhoNi",
  "key6": "4Wuivaaobb4J1ZwX9H6yviVdVY5KCE32oyZ7sHT2BwRLmge526Zp2m1SGz5Sq8AQGRHPqCjUn2asewGij7GuRS8x",
  "key7": "2XQZoTgJpi8SrPLaJgunsv4hdVtqw8gSQypoR55k7d8ZhTvjnJ7pMUoaVSMcwX2WdPqCDBHzgnDpENTMh2NVW3fW",
  "key8": "M2bk3zrxC8NRTP7XrmAiy8qNgcDPWHvmAACgaa2kWePNqCeSfRkuXW5riLfUPP2KFhaFRHbhW4hQnaXmhokbsFi",
  "key9": "4ANvuRUGywWRq54tLJkfow1WsCWbovT3Veqqtq4gKMcVcpaRkMtCa319wcsAQYX2vDNkSwKHfAwcWWoapGW2Sn6K",
  "key10": "218GEoPibNxHd2JkYmZedjjuvREw6oKspt6Lby8yyJCXzP296htoLVr71j9FyD4Nfz2AFg8L2ZxpBQMnkrYW2zhQ",
  "key11": "3GhySzGvgJjZkAUycL1i6qKcRMYeQ2a4LNjszbQvGjVxFH9CpYZGSf27eGrviCVfgqkB9yShEVqZv1J622MKaipJ",
  "key12": "3HF4hi4vowvBPr2PPRJZ8TpomfqXTvdLhEy7jZ69rKzbycqMZiHUV5BxQkiHyYVo6rUzkHC6sMpLiDpMgH6CCE9b",
  "key13": "5Fxv2pxbkHN8DZaQVqgGogdXMkEMoV4vBbSumPhZ4RNkP8Qmn2et2tghG7VWsA3hZ2Bk4zV2viHUGPk8uvAtdEKJ",
  "key14": "4PXhEQLtNfBi4eTX2SLQNaqF2d1Kcd9XsoT3Bd8JWMx9Dgsizzrhi1Z5SLLTqRXMm2ER34VCqAkT7hWuparREPPc",
  "key15": "5QSxXU17Co8RvWawU8YxnSCZ4LkTTUUvcPXdamD5VmNqMTAVyVQp1nn313KFFnQdbbqc6GHsUp8a7kaWJuFoQr3E",
  "key16": "2rQVwHhjCjtPoJRYEy7UF8qeWoUudd8aTEAWKSwus4ifcRNEVViH1Uqj7Ys6S3wwHiF7kU38Yqyio3CbcB9wtgq7",
  "key17": "5AiUZzqYzXHh2rPFjawfYStRC4ro9Hjww6VLjyCfbKqyTEGT2ozQerhZV6fgHFLhsV1ktmE4zttonbQ4M49siand",
  "key18": "3KeE194GLRyGL1Esda9kzZnQ1fpqYKMaNCLn7268HU3tfL4UcxTTAiqLUmKy4zS6GtXjAeo1Nin5px9Z9oZNJqAV",
  "key19": "opV1GpsNwN9VhxbnQqJCXkshsKq2j6wK1UvFVuf5bqYUe3aoxV5TUh58CTyxVGV1gUDEeGYB3H3jM5izKbR24Z7",
  "key20": "632fshV26vcSuoiUFNxDFydjWjGDWGoiQtjuMD7K8HqNBdzgehcfmdmN354F6EJ7rNttsWYs7Pm9J8543UMihehF",
  "key21": "3taVHGfTCDHcNJXXcPvuwkAWQCcxF3PP6pmjsxzzf1m82HLnMRXDw7h7gfQCE1HQL8N9NvP9ZN6TcVHuC91iGrRJ",
  "key22": "5mya65XsJw7X8tAz17WBK8PJbNXHiKHSjtFatu23B1JNxDeFpVvpYQ4z8YZTFjbEmqQpAx4tsHRjNuqkf9NNtgzq",
  "key23": "ih1x4Uemi9MfbetY1UJbGmQTV6KbMe6y6Hs1rGbVGcG6GtNc6JhuBLN9kRUYJaWJtA1BKbR2gt3qirMWPeHBT6W",
  "key24": "2zPpfHomyWgvnwRkJhqo8ZQtmHQdHAwC9f8Pobx1xgCpRUhCHnCmbtiM8LWgrz5EQ9X96kaxjLztw3Lmd1qHo5uP"
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
