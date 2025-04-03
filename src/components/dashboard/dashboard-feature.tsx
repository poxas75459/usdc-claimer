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
    "5A7yxcm28GJU5m2wYBsJ9C8D4BWSYhQ1HuqT7sBU4JqT8WVVfEeeSWMMhopx1vHqxGThqL3AcC5JZYPJjKCHaHhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uenSZj9hjwj7TBEW73CPF91AaExYGSRHVf5UXKfMhUizJmNf98oxNuaTS4GmXgbHUB6azhs9Nff8YdZRiPaxfYX",
  "key1": "QxZNsTG58adqXrKQbVyQFpw1yuehHGBcv9NasENEJdJeYVo32zb9zShp4kn1CBLNUkn6n894pMcThitPLfctMZi",
  "key2": "28Ed5mwKJMDdT9en9ShRYRJuttzf5JWRLYFeZrs5DQNEQ6Z5gNiQXAdxSLpJDKYzf98kdMTwuJZEeyxPhsQRBScT",
  "key3": "3ADYed4gHDRD4yCH4F5FwgATAL8TkwboyRXbrriujMVrm8tkYJVcoPRphyWRJqbbspBvK5gAiRStrmHFN2RTFAD5",
  "key4": "5phUa44eKkmLSibqz6cuW4YFp5PdZ18oukVKU3pJBJ3b9pNGWt3DQU3hsdWqSyAaLXbezLoMhVUCHKZeJQXZ6HWQ",
  "key5": "46ByrdKffksEgpQD38fkvyuXBRGAdEeyjpoLb8fVs3eNkQmHExAhY1RYM5Mi4ijYYzpANPmUVT1PEj7Xi683HNtJ",
  "key6": "4e7odLgfemGMRAgVbFa9FpLpwERsWSPbogPnM8E7rzQzZ1Thuwg2E3af5uctvvrP19rzhUSRiKs8Pfy2xaKwGhYP",
  "key7": "3FAn2pAa3VRjGuzYu63cswF36HcVCFJ8z6txCCkMQg2jhD55pusaEUKT2rHdJFhGKTFRn5hzecpy3bgpYXXZ94TT",
  "key8": "3bAwsVn3KxrA2XtbuR3cvqjCsJx3poTxp5nXGjUftQrgd3tPZn5VoHneZMF3tHSQaizFpcAyfWWG8idKzWfnidD9",
  "key9": "4YPcoJE6rMuVS67m9VQGwGfZCJdbGfrrFLQMtoRwX9LcRHRJnvm4TzcCP3yWk6cnciac1kDnUQvHCyLBQAo3pmWM",
  "key10": "23ybFyM2x3V61LZQYE5xG3dD9JpgkDegA5oJkK5mSBSLAzLpVenTs9i5dxyKhgFJn2b3jiUgb6rXDGthnJnXkPFG",
  "key11": "5EWFvgYqoLvn1F3NcafC8AA3rAzaE9ZApKPhpyNgL4xx9hwDZUC1SbMvuLF9gKJctJ3GNP3stvBsbeNbHwQX14GA",
  "key12": "5b1TrkJKzmPUVqzxFciR4ND2uD85P9jqWVciHhMYpxb4UdHvE1tSERppKCf88TwKUSBtZuFJtxox32BHXbds7UEG",
  "key13": "2WeBWpETWLi7xgfCW68GUyJZCi5i4ZnxALvoYxvyNZSC1UQJRuNFU3LspU9fz2CceKyCEPuHpaduHWLikW7dJmR",
  "key14": "EEYArm9syVAevPJdTrE3SMUjcNAgohg2MZXCvbLZd1sH3g2Rw2Rz4Rm15ZbUMyogi8Kzz1DMVtDnMacekPfRDkG",
  "key15": "5JjQqojwmJ19FGCg16vDiFEHwBDtRefg6b3i33JaUUFCSL88Z4UYaRmVZiu5fvMjV77r19UTKwcCq7upg61h6Uem",
  "key16": "5LaWzzUbJsZpVTgUCHuuQns9NZoCwvfbXyHFKK2VbyQp4N5rUN95sK94xwYUQpkDB6cxrd8GHH1NHRsZqopQF3UW",
  "key17": "5oYoXa6uC1hW3u6aw2wngDEovo5if5XvoDui76gcwbatgQ59zzpx1D43y6eTm3zd2GXtgAk9H6mCeCXXMiwQYYcd",
  "key18": "4czsumFAdnESb1RsSVU2eMbe6kPNdiBUcx6GYD2A7gHKr9emn63WoLVD1fwgAM65JtsTd1Dc6icYEoebcVmha1sW",
  "key19": "1amm3Ta9tUvXo95jZvQQCJCXbzhrG5ZxkGp2j9kU188rpiPN35ZERZqmjYUWmjnfSHKfsPPfViVPezxa5TzCVrk",
  "key20": "4vAworTkVHaDFowh1vJqtAKfrxA9mnitd5pQ59JKiWm3HQKDXLCCrNfvt8qhnMmZrQvEYBmoptDj7ma3B3x4X3ht",
  "key21": "49MBd1yLvetw5zJLoSPNeVtmPs2BFhY1LregqqaF54rkQHHfPQ9a4CanYHZX8dQad4Kz1KSRBf2F64ETbdX3j7pj",
  "key22": "3tNJqU4xVG7wXwvk6dzZLEZ1RjZWKSaks9ZXLoAmMLG4xY2pat34FiRd68PPJQGcrGSuDtPBd1RHsinzURA8DxRp",
  "key23": "3tziD6ZwvMMGKVDrwsbWdamp4r6Ztjj9zVYU2Xyn9XGw5gRXjDBHt1oKzA4xVkXVcQF7gmy8e4FRjPaDaU3MXwJK",
  "key24": "4A4THUMTw6WTw4LVHX1bC9rBhAMUSPGBnzRLBckAdG3X93YXk2cBhAeqJ2gN7jMNXhSGDeLCVhZf8maQe5QzagRY",
  "key25": "52AYpe2E6uHh83zu2nfoy525ioy7wpHpxS13jRD7EtkKG9pbsUkBsdnWsrPVc4pWDshhifWAEddVUG6aEbKsfSS3",
  "key26": "3udmwU7XgLuurrQ8PfkApw76gcbgSVHntHsFpLMqdxfJVCmvMsrXcvAuoXQgWohnq9jiY21LVtJqAJsVQP6mzubo",
  "key27": "34pCM7JTySUtVKTMm5F4tcQYkD4AffavRdskMrgCTDx3tSJcv5ayL4eBs5yQvT3caZxfzMG8rLGLRCCKbBeopFG6",
  "key28": "gmjwHf6hMGv1B8u7eiEMnHPJbMcs3g5hfKFBKbA9KRAPCAY8DYzusCo3c5sCKaQyTgmnaznPsHCor8raN9f5a1E",
  "key29": "51PBjWgiiFaUwyuU5qKpuFryKuHZLYVrA1HyveRKywzqgfmTAM6JnZEKqpH4VAcaJ2vLnWdLmJihk8HKPgcFtNQE"
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
