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
    "32G3ziY25bjpEmWj7e2jsrVcNvrsekasSnc9ZMNCUyVVXuGua1Hrx3BZVwCfypAHoHNvyAmjz2ZiKpnyWvUu9Ray"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cg7GfmZvm38EmwpN95aB78iV98Xo4uDS9EcvK4jhouj5w65PeVrohYddoMsZ8a7FPiRNuBC8pXn5EWwkXSzk4Rb",
  "key1": "3YhPB137QvYBPuKDFB4jvaDVGoAmMnXfv2rsPX8rvbC9GqFqeHtg2hrVczmahwC6UHpWUr2QuAduNUkWiiMEsA65",
  "key2": "35kH7LtU7WPB3Ba72KEXzgAUC57qhFdSkqtNot8cSuXsbKBLEPt2wmuri2DjVpitEgYEiTgChixFQz7QaHzfYB4Y",
  "key3": "3eGZEt957jAe9ghyDa5WeN3w5mFZYcFQMjkT7G6EMg7q2c1YwRQ4Us3c8PVxYXBamyVkjb94wWHc7juqM8MukEzS",
  "key4": "3ugFip5jieGbQqtc55sbowAdNiFTTgmgd4KtuBi1Q1RJCbMefuCU6Mi9zrbXVwTFc4xDPba4yGK8fQ1AtdS6UG3P",
  "key5": "2aMUnJJEeMY1QzFKvdy7aSwqTozqQPfhRGhQWLsHwnTS5Trqcg5Ez38jcKDK54QEDemEyS3HfpnBcBGkerxqqEo8",
  "key6": "4opoqZ1fc8go2ZCE2gMUrH77j9atrwkfEbRab21F5wMzvHGrXH6tknpszLSKD67x8CbkcsGAEdKcoTuPtXMLPy34",
  "key7": "5KgwpFMyKrD6gCCLBhW3n9Ec6VkmsefuZy48GNsFAoLxgR1z5jA8ZkQrhXzE7sUrkaMStAdoNzTRyMRG95bYhmV6",
  "key8": "FrivFUNAEMXEyzyQ5K4wdAeiuhNVnri5wfBP67quwZLTYn65PbCt9Ti4UqPtewHQnz5JVpg3FmoghnMHw2DZj4o",
  "key9": "jU7GfdmT2WQPayjHqZC1otPLvWHCXVNqZVdoR7KEXSR5eR46u7cVMUZ1VBS4B5UFX4MpdR7DxdLW6LMiGDr3voc",
  "key10": "4wijMPDAGYXtKpoXWKdFqgTDVGcTAUNpsDxzud92RbAewZBano3VHvwqPUadZEwDX936bULidzFfUKScHVxCWUfD",
  "key11": "2yaBxAtv5zcVc7Zz3Jpid6b4jAUJZ5ton9FBDxUWt9JkDuggWUw7MvyTt9KPbUbTm4rJizrsS4uP7LEraG5nHvf2",
  "key12": "PsMBhzk8ionbe2qMKrhKFJXSeiT3d2hxPZN7t96qVJrbSK5BdNdmzDbyg4rhNeBff4fFmescX9o9sTTjGCe9Dga",
  "key13": "2Mj7ybzz7mw9kmZq8XuB4SDRb5zoTChnYSfc6irEtdLDrhUofMeGbyLyLyXiRzAkB24N26LorXq2dPVkaZQ3X6iR",
  "key14": "4eeNZuiACMLDaZJSSBHmXfnwaRPCQJRivZm1git624fX3rTf22EKHRTHaXt3MgaiaTtBoSd67wTaS1jV4qJU5k6Q",
  "key15": "314uRSpRkboTp47rgjiL6wv8o9gnVvq4V1eTkCozvBcK5mpwdJtWnUUGxpSiRVbAd6oN2XpfS4YhXKuyuYCxQsdd",
  "key16": "4pxC9FGPqgjN4NHtAigeHZ1ysRDxdSseu5F7QrGyt7sWg4rXGzJpAhoUQC941XfXZDdwpRVQZnZkB7GBJL3CxnWn",
  "key17": "2J4YCfD2tTERFsso2BVc87FM7QNkrEgLWMUx7dE6xrgc7S5P4C7T6jo6YunHyRviXpdsZ9EjcxFTEN5S5pFmEDrA",
  "key18": "5FG14D7uxez67GL7xi2KLxxEEdAfbqkahgBuYBjwNHrRDJYCcvWNfE7rAbHfqrXDuYnxdV1XKqKdpWQWptvAQvRj",
  "key19": "3n1QHWWnT6SgjaR5KyLau2ZSxhP4JXdbzEgu7aq8fCbnj3s21oSoGitcsHJZy6w6ih4ZV9STm3LtwcXaMGkYVXNN",
  "key20": "4n5v6JSMnemkhHLxthgUmzgayweuZw7viiZ6yY4s6Zz9AFYmXBzkjGd8JuNETcNYqdnPBYETJZ7sRHkGxmof1hMY",
  "key21": "3R4w6X2UMX4kc5W7jXhwGWyuRCANpqcUKuDvXKe429wAyU1y3jDPNqaoY5Jxn53PATuzU7Any2h9gZBX9UktfKiH",
  "key22": "2EfuuuPCsi3XX82sSa2gA24MjuoPrXfdkJKYkaTd55hezVtzHn3Pjiim6tFhYHJ3HNLHgcXkggmDN7Bc3fLN1HKm",
  "key23": "4qw3R23TAGuVcxvniryctz3DvAbjy8EB4LpVKZz7gDffjd2HecpGL6ABfwtEWtS2ATEigoJoMsZ7oUBT5DKtmNNS",
  "key24": "4ABRGsnUcc4buohdGuT1277jBofKHysyVmnQH5P3sgYXawNWNZ6qjtApRJK51WU38GuqH3eXX9T1a44JQ2DLGKBi",
  "key25": "5iiRjvrttsaXu8H7wZAv8H36LGXaHHFiNnqnGKYBRhYnSRqEppdQsvmbcYdmZuCEcfuX7gDU6E5LpFmbDCnQQFcX",
  "key26": "5XJbHGKRwWmGh3YSBrmrpkUs4HcqYvQtpyYrG1hgb4vqBvDSVHkfLeYkMpdQRcygjhShNChWaAkX1AGyjGHQPYzw",
  "key27": "45KwssCHPTvvwVKkuGNPrEYJCB23aXfKu1EUkWh2zMFVUcP2Jx6GjmfTs2Xa9UfVJ35LqXyUim6cJRvX3jayivAM",
  "key28": "5ViEcVASTx2r6vB4sS8xAXoqZu2k8ed7CNSbupazhSPecM1XVDidVAAbJR2imxgb7As24E3dBAmZMAmXyXLG1PLx",
  "key29": "5ZMbK2cM3G5zhEUZTVQDrWQBxaJqzRTHtEgK5JnsNc3u14VwYAGr6UtJcPNGMizQpXcaPf6GeJdQ1TmJjekWeA4c",
  "key30": "3Yx4MCArxjFjAEyoGr6mZQJKLXf6giKN93YvxbEHxCvMcgYZ2FjZSAsqAqfHNtbUsRr8zeKWYvZtprUWBaRkJ1hb",
  "key31": "5wSWy3QEtgEmpWTWwQx6FVq85W6bgcuVD78yqG5zsNBS2ZeMkft699fuBn71MX6qUmwD1cDNEXFJ2a9Jy1XHgHcm"
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
