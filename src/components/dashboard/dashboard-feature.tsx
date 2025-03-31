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
    "3tYkGDGiiSfxwRxZEkBYzyT97un9tTpHemA197AWF9CqQGhszGH6ob3ykQrVDgTusjYJjLJVk5h1gNRsDgX4NhFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GfQCczsQ7YL9iz6a4toyHFcii5fUnrGFh5hs5Tac5wS197UjfPJxV9d5owubXG6su9s7CTMut6ziV1SjuXQkeqq",
  "key1": "3R47f7B9LK4rWqH4sSCtqWJhMyFNuPrHCqRgboAk6jxrZYrnmahPGctfpZXC8uZRgweQKGMfXw2u3yy4gPkvAiCR",
  "key2": "4Cv2eLyqhDZusPxo34tmYqCNdpjB9byKyZjK94vgSMwPxoRZ5b7EMwjH2u1FrwYTysczXGccBVvxCATJD4cQCc1V",
  "key3": "S2pKLuNy3jSZ97YWwoEMYdb3QuVVsnx8eZKVb17WMLAxKZfDRS4KstoN6ovFYLyGtKX4T7xD9KR3ed6h98pv9i1",
  "key4": "5RnWYwAAMcXvcPibkbpQnovN4bVjaHydW1cT8NaaZ8BtMCMAocxryM3npXYMTYPzeMSqDrLuDj2vXpRk4defgXsX",
  "key5": "SsKU49UaMpEk5RBc8NDPAXKodUsDPgaRGMuZYzq4yHN8usueg7btTvKHFMo5jtwSAUVcuvxLCnRjkrXkG342qRf",
  "key6": "r891oDGPpA7Raw5LpTEiXDqseUJTdpxeZWEKZwf3jLHYn8wJuN1YKSFGhuQxb6G64iL7t1ps9iCvwvTib3baqkX",
  "key7": "zmoHafEiRV622NHe5Xb4AoJDRgA5Bj7YmNfdaYPexSAKpokNLSRMH1G5saaS9N8k1LhZVLnewtSxTdrPStomqZG",
  "key8": "4hx5Khba1HpR3DRXBN1gRTMCKbvSj7FEPknW4gj5mK9m6qnqcHDZxXUn7UcCdShbi8JXecAoPWiyPV3acmS3Ck6N",
  "key9": "bqWkYXM3gdX1ZPyZwvzfauKiEZY8P7bf7oVJGy2aLDUB4598Mehe8ET84AS2KrkpZKSxVow1H1oHBfZxNZ8AnTT",
  "key10": "5Sm3ot8okGTLh544EdaVx9h1nCigmUH3YKx793iCNemv89WkgXbT6ScqgKB2ZmiTBFvSNKpN3hrY7Fd2kznQSPTD",
  "key11": "2vMqDWNeGYNcvjtVZH8puSDqZkU15gGgQJNk3KczZLAtTJwwZrpLcuWrcjzohcjuD7Fg6t4TdTozCsSm3tczrUJ",
  "key12": "cxnQ7XZgzxETc499wSMC9U1QjKeptddyVBMYVJZXG26LeGZVTz5BVhCvWGVZsveNhTDCKZHKGCCScjGHJxXYFth",
  "key13": "32Qp3grSAomhdReGGDEAUAQvpSZb5ZADqYHcgFuXB4SMXhuWpRxoXRBNq26o8EgPxB7MdoWgPRzwitC8wTHaiYSQ",
  "key14": "45iLy7q6YTAPRfsKetXGMg2fYsce2ciq6YxSuWmbn3vdkL5ecuCv4szV5Wck4XfHTE5S1zJcYMbA8uDSPE4pXdJQ",
  "key15": "38fUvAtSVfZhJBjgQcZGKhUXzT6Y7khMjFwNX7tTy5hcaHdzkzzTNMcW4cBTZTrfJWBVwSkEcY7y6upTYzbg224H",
  "key16": "2Bm5V4xD2kbAyrmBjuiDs8Ajhke7SewNMwuX23GBeYBcD6Qzk9nVcDWjz4eqPPL7xqTfyQvtSef2NxJ3qFMNsZp3",
  "key17": "95ZR15ggPmTud6fTeu1iaVD1jrJZeQkot3YYM9YKwNbnDGRa6z6rwjMVnDEmiCUy4MiSJeaUMToTAtKqWzrePVo",
  "key18": "492YhyjAnWH7PNaDqdtfnmQC3YEJH5ruYxPTYDDfSushFdEKttbvXQ2Fb6DjfYpm36C8N5ruxdeGMKKJmudhjD5X",
  "key19": "3zhkihaDyKcCkgKDWfP9LNrmTRE1qhqxJQsjpA76rSrRuRk5CYHjiJD8oXNgNtAGP4kFQURHfroYNHD3afeSp4DP",
  "key20": "JQrS2fNUB2fuj7xeWvpa8grGrjS7b8rUjNmDJjCbiPW8JVmmwwud3os5syrgS9ZnjsWGBNqf9pqaF7A25hgii62",
  "key21": "36e1ZEgNrND5mGncXJpDtfakAqVSpQjCPWy35by4CQGMrLKCBWqw86Kvd1FwUqivYY3WQwVfHfr8TNtRRpNCtMZS",
  "key22": "38LetRNN3qyRYh5UTMayu6xGc1KQGv3zSn8icquHwyHLC6A8QkWzoWY7PZCpQkaoHSKbhyTa8s8bMfLmGVQ6HfXQ",
  "key23": "2asDbzrBoiYvNyeTgcj88ZHxcBp36HyE7GrpMNqFiPSijGxJz75Arm2NV22kTJ8E64EsuLaL4mE5AfCwBTVDK7vV",
  "key24": "2P9Xa7dMrPuyq8j3ADBeGHt9v1JEWi7dN6rXfg6PsjpsZyuyzCK5DehGA2EwyfLuXWnxBTbZRb6CyWEbvjtMk2px",
  "key25": "52qinTBEmNDC8BAjVSqTfYttJ21aG9ByFyZdK7WXceAmrAoCkeaB6chMU4xfjA1ugnLwGCM3kBAmUuMLHmPYwnXq",
  "key26": "3yATmX1LKs32DMdauQYeTVhZc8ezHuifFZqABhqFwhJAszNoUsKhTuRqLAc44NtqE1vteqdpitwMoF2o3Qi929NJ",
  "key27": "2JiEUoPR39Szge1X7MpV5hnbdnboPVphD2GqHHc2b4du18eyGuqJRmDXSHBoMH3sN7Ub3z8uqTvDET1swSipEdVZ",
  "key28": "3XuYK38JHtZCTYTrYwiHpfPPh6QrpXB5acfCtB8Fx8jyYizJ5aLnE2EC5xP78JPWbBgy3oJryjsqQESfxBXvveRR"
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
