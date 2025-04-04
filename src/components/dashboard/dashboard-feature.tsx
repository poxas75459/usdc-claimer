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
    "26gRWJkBnPHXiCKYhepaBmE2abngm8XPDJ3k1XYj7YAgna9ksrPKzQJmrubhRECUmfibWG7oG7evv4HQ5aqTiSC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N4QywgbZZfhXdsg81MavAdRBFJMugbRUe17kV1TNLYQAocnBvRh7BMGts2sHE6xP3k1PkiSunpHa5StJafL6gYV",
  "key1": "5rxriYwKfnbVxxdfcBT7CPmrCgKdKKREWf68ETdqScBuBcufxE14wx1GDmeqHbdDXwHLDF8kDSfi18dHfxWk1R3V",
  "key2": "5BQgUC7rz17LP4jz35oGdWwYP6EyFov33h3X6mwLkzU473jQ7c9piiySrPCttMMTEG6yEWnZw7jaXG7iP5L22Z4X",
  "key3": "2CELvmRY6WcsooQU1YQVDQmMFpfyCuYPDiusZ5feygfQXqa4Pfvu11naeHyW7EN43BJDAJDscVPJaHehPThnDCiF",
  "key4": "FZSwU549Ce3967hhAEg87Foz4HVpDGq42Lp1VujMEsxNrS8KR2CucmonxF3gAHHV9MAes4WmbJucjTvWGhiBJi7",
  "key5": "4EkB4rKqQQ8q3Jp7vGQtfQmqNa7ZyWBFMxKGPyddcymid22BU2XBGKpJ8jbjMfnAVBcjw3DHRyYphXW7tY3QPuJK",
  "key6": "4bih3mejKDuRPBoUc9Vwa3txMHD4XNasVJbmDR3mFxD3Aq9Gt5g93BG1YnaZuzjYYx41xQPzD5xSRQaNsiurnLAV",
  "key7": "3znjLwKtyyFNm7UYAsWNEP7SDQ7QCxXApQYprRuwAUJhiqVSxiTLmoXoTHbys2QTBFoLTwfDZLWwtYDdrnov2SkY",
  "key8": "7B5FH3CofGPoJqfJNqZGYCSMyFRL7ZB6mPoddJsfZctvujkEFPJnKq9QikfGn8RbiYLwwZ3MknAogsF3qyQssqM",
  "key9": "2YJM5gvDJG1yyRTsJukhQWmQHncfdeXzJE41Cj8BPqr32A9xisUKS2yKcUq46FtzYb7yuRWD98wfqqVbxSp7kLon",
  "key10": "5WheqHQNkZdX9432n9TjUCHPFYS8aQATkZFPWiaX8DbUoZzipLD2yLHepbxWzCN6QDSk7VxdFforvYecFfw4PWc",
  "key11": "4p1qsr5bPPbZkeh2cpHpv5GCmQT3dXKpbrQhHFcfKJn4taQZ8JhLST9DFxjqWekhab4A6jygBVZNTzNvNqfE9d5M",
  "key12": "3r5ye7ukWvSHnvpoWpB1y3jvS9cWAtuoQ3uu48zL9aCztr5ngfb8DyQwYwvHDekdJjeiGJGPBck5DH26wa6SSM9M",
  "key13": "3RkwbHMf4Wg8UDXdBosD8fHf9C5rq1oB79CStQpoQ9zvB3Y32BK4xAexKXCMGn1aQEqJcMdNzQSohCWyLTPJevB9",
  "key14": "5MkmnCGjHFLpvooLd1KYZpwxkAXneNtYkYcfthVd3vTc53wRGZ2AyTf6hR4dAVQGU1LGyYSMipG8JQ3GfidFNiFD",
  "key15": "ptpFs6mhV7ns14cYqXqDzH9BEJtiTjg3DJXpp4RoERC2NgTZEwF3qDpjXa47kgXYXebdNEDNWsXfZY7bx5zxS5A",
  "key16": "2rmRojuxLXRFptxHViUbkMpFwwyBneoGLPEBhBQwLLCg6bYANy6DGmRiaJunHTNLPJeDb4XjanPdydmJdKgfc2Mn",
  "key17": "3Quct2jJGxQ9LDAGRXfwobiGB9wtwjnezDgQ4A4kzrfCRbKyvZxYu5gzh5DCUFskTPoUTNV7eypHiNHSNkRNb6ep",
  "key18": "2yPNaw3j4wC6dn4hbqpdy1Ngd1jwqWDayUCZdHaT8E2VNwwjdn8uM51E2jfmXUZ9uR1UGWTEs458YyzuNNnWN8m3",
  "key19": "4vFCao83qbbSbU7iESuYtU9m3hZYGHtxpWWrfgVSMR2S5c7VCthGT2Qz8vwPqwjTKJLZWBHHvHVFg3KQMsVL3bWP",
  "key20": "WpYcWeDgwVZF18X7dtjyzeG9xMBEUieJ8xsSBFMawVYLZQ7iL97K8iqDDrDUpTEukyWXeg9ugKkv2EerbREcmvz",
  "key21": "4nvefGrKtVMfzQeXAX1wbL1WdZEAjeSqjgTeER5x5mUw1Gw6Jzp1XJf6ALPhaTKszRc93E9ckdMiUZU7GjcKhp1Z",
  "key22": "3qUAK4d6fwmPxiuvvDc9RgCv5rM9BBCv6p4mZtpSLt2tcYww4UVmi91SB3tB7wjn3PqMs3MS42nQahNUDoxh7LL1",
  "key23": "eJTfp3zrPFvggDdKDPSNmYFfFZzGLei9ifVWNaWtocvKaUhXCyFcde6nSk2DQLiVqq6hrmt5notxhgztb4seWtv",
  "key24": "4ZMmHujoFJypVJq27ULcjjQfj8XreXiDF6dtvWUNxa5oNoUdT5o5y94hyQveRXZnqqSjkdMY5hKkFkVv85Vhh3wT",
  "key25": "2QGCWSBYgoo4oxAheXZzkiwiqtfQA2Mk97RRpXjc4APPcHCp3AwDCuWGTrt1monmZ7xGLUHR4XkAVJCpyEuusVjk",
  "key26": "439HwTpVCka7sHSjRdcWZCUrA3M2oyiAjYaySDFJ54pAH4xEmz6SSZJ2xNrE9PeY938epdeYwDu19zuWvsPmJZm8"
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
