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
    "svprz5VMh6xDqpSnzdYtt7mGmKXUmPrGeUyK8TFJ99iccV8oULcf1R9X4QT6RPtYeRewsCpALAVrcgUX3jADFpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V5xvYYpfRVPgxhsrpipCUyHuDTY3PXSrCvNAQ4F8VqzXnaVoubz3kgsAQnRfXvZNFFPLN6uFSCNeDm8oxj4VfTG",
  "key1": "46hh79ojqgFpdqPpL6whL5MuJ4986puR4HzUFptfcsZGNyrbepqcmkBygbshHstVC91Qh4xAvu4acX2Kb3hc7oXj",
  "key2": "5HjFwChC1ZN6kD3g62k9auf9YYbDKT7SHuxDVYTzwAs9znnA7gubeL9cMwt63gAsZSYtP5h7sMpzz28zRHxEmFR3",
  "key3": "zdA9jxAuY5SDeonZZhJVHTzaLHmPDa9JdXk8aESJxWtsaTCKb6wzMAbTe5ZtG875NYVCpV98EZvgq2U139icQEE",
  "key4": "3yosjMVrBtSBsnPWmAKVSvMMJKCuDLRrcb4NpcJADJb3MgVsMAtVDwGgZYLn2RXAPRkExf4pLmGcW5ASgPXSScyL",
  "key5": "2TDNz5args2Sa7bQbJdrLC84KRCvrNhiBDDUdd3gmaZ6mmJsHaPbbEbnFa6vdGTSXqQpuFvNH9jkFq3Xwc3k1t2S",
  "key6": "2n2PiBCXiEKUSuTqs5TSgRybiybhBnfLAx5KFXRV6Ydomw32vEf8WdE1g743hZ9qPLe1awPsDBWeS3LXjfb2NW3F",
  "key7": "3tQqgnV2Dj7BZRWZkBfLem6Wgas3kS7WXAgZKA2icMHZ8f8pfLk9X1USoK39YBE7yJ7KwBrJgnAXyAJyJqXd9ZXo",
  "key8": "3edP5RhoJXVZeaDjDPnZXNGfGwyGgyc8AyAx3dLB1XzweSkcHcsFnv5ai1ddpcQdtAF2eUEtqBToG13GrRzCbQs8",
  "key9": "38skAQTyDD7DGvaB559pzp2iFhS8xd1gsGmEh5MsGsu5BNQ8rYikiGBVULqTz1sqbeY35dEYtAPVukGR5VTVSxcV",
  "key10": "36HworLxZ4rSyHRkcKVEDNHYdHvjiau87qxjw71gaBR68WtMhEUx2TeJkACL2vNEKKxC4sAZtYarJDVXCFLDcp3c",
  "key11": "2GRTDQAnKynmYNsY92XYPQC2gqfKV4S5Fs3YimZMCdxvixTAzGgrqQFi87spyni1EBV2t1rCnkbRwo98KEznSsXN",
  "key12": "38XaJZRKsiM8dCgVbhJpcTf8i4J9i2k87a9imZ9vZdFot6vzXyMKRqkrhnrnRvzUDMTqLVm7ijWTcNXCgzobjW8n",
  "key13": "3GWuYgL1sL2ZNXRNh5YKLnjr4xjvreXmZiog1zWUnnJ2gDjN1iW28uLUwp8sHt1NoP1Dvz36f45YihuPb4sUt8Sr",
  "key14": "2T6XqHUdJcHXxomejDTCd3yWpEWNFWJhuGK6ChkR3wd3GNQxRoZnMSHFCT8SGU6tsN8HSEjZaAsnAXN5k4T3nxKY",
  "key15": "5sykyQE2A87r3cEDxjC3sxuwtVUsgfKvaS6XaudV7ceQJ49zSFfmLNGazWjfSRUYruG7CSr4wXPTMXL4pCJLRTN1",
  "key16": "4SNBu3VEWxX6tyT5KjL2TgGgxfpSUQVccehFwCgdvndjED3MNmGDzVJ2owqPP2i1M5yicFvFHrZRNLWn39gQqr6k",
  "key17": "5q97EaCphBH15oCnDxQNn6nkChV3rQCrMYLfi6gvsx4SoDjPcdj9NW9YQnh3Et62yY8S1gh5hVfMobjqLtTw2r6x",
  "key18": "5ePXoRR4rDwiY7KDsaeGns1AcmCExscsGDKkuJyTocVDEwnDmU4HV8cmEbGo96NP9weTXa3FfUgoAFxZteE1eX34",
  "key19": "ZcCapT8bZ9L4P7TsT4Q14fYmMFXxQ8iKtUswtHqo1M5ajhTYS5NwXj8Dz96qD5aWwktaWvrgAww2Xgrhuh4vLKy",
  "key20": "63DK3971ds6VQq4B9X5VDkjZa7FjJ3RAtssF7M4wUwHP4iW5H2Eesyy5haBHgLTGQfeQ5C9fMU3Pd1pU9URPFVEi",
  "key21": "5f1rpmzZYHHprDqj8VUKttZB1SDrzwZHmgiLDAAmcuNxyszvMZfM9WaVxC2KN3s7BSrVZ7NCxZnhGmSoznSd6LdC",
  "key22": "3yYU1xTZgDQL24ghDD1bvricygsyTCpyJMaciTkzWavpLcd1Jwomx9SgywLqcrxHAPBqsHH15JWDrTYF6jZKwwBv",
  "key23": "2Wd8ZzznU9RDNKV1geVK3u1Mhx85ySzPjZhakcqCBLdqkz1cbpC28Sxxvs7mtMtNbneJ52uz79AMUbherzGC7Kti",
  "key24": "47k8k9GaGo9o3WQDnehjwD8eZxrnza8oe5Bjhjp7CCcVEFaEVqn6du72Q8F8hmPnVpAZW67EGorSNdHqW6vg3gtJ",
  "key25": "4HzWgocNewnJQwNCNLYa3BV14E4z9ijbHzf61HwjYkLv6GSEu3CdkivrYq3jyd6zkZQwjGSUG3cdDahz5678RKCP",
  "key26": "4xc26CzRCpPvitQXgkxGGa8botdRpjaPkyPi9tL74rs298Evn1wT5nNQpALwQSyRoZeQC8p5togA6PA3G78MsSXn",
  "key27": "sXuJBZP7RREHk6EvHq7LhFPzhANWvCjHRgM6pkYK6RQ1uDa7kMFzgVfvtCAfMmSRmtZEi3Eonp3hJ47oJpGKzFj",
  "key28": "cCnBnSUcApqR9vnDmcVYQzaDmvpc81fwjic1og96dU1kLRrHruME3mUkQfuEkxWunVKQezQk7ezRUsMzgYxepWQ",
  "key29": "4wDtoLY1nU7682bqCNzrPnCtWN5vV1xNMpjFss6Xo8dk5zEtmg48LxKWSRNLXUC5rK5h6Y9BKRga5sFj24ohKNJb",
  "key30": "3x4JYgnNraP2DXYtpKEtqzZMkbob7BhFWFefCwwTau16Ev9qCJTBLVA7rzu7vE9uE9pB2ZX5fDiKCm2nfAhbivaj",
  "key31": "2kLC6Fc9PaH5uHAcUu6VKcHeZs8pA3HZiZKwdjKPUxAcXACBgboSDrC5C8ZNX5foWif6xm9xVbkmFZ159PoWCc7q",
  "key32": "3fJyqP4BN92YRFH9aefsdbRjEWXTXChd8b1WuvbPokJJPatVeQw3kFttUEcjPeKnkycYSUUxBQESKu78cLx2BWZu",
  "key33": "pcEqKcnd1GXgcE3vYboY2z3KV6k2SkR6qbcFRSUUEbPdjYELprPC7LpWH9mNedbo9T98S58Vihi4jr7FVFhuyAh",
  "key34": "5pbkVhJYo1uM3ygRiXJ3q8ATvk8fgQe5yHjVhHZ7RQgjG9fW4MthwVx4QK1rmk3pQN1Yiis1c7orNpBPPbZMbuKv",
  "key35": "5T5cfQwBMAFnZoNzWPfUmaMwbjreUeXPo2CsbowZEhw2jZJYyZn33FCzuFAgdbeHW19K4Qt5U3S3d4kNARpundeV",
  "key36": "iWuMapSp5vN6r6UitpN2Bmnxo4CNBTvEdYT8wzZEsYrP4hTL96avXykoPgTwBJ56ECcb3cMr8s3AFtPA855z8eH"
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
