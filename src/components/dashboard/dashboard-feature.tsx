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
    "2XKgz521VmjbGs1PFwkFz3qwN5XforQPdPhfFBHKezmTm2nBa5mmpcjDBz2miuDMbucsoMv1JDRpiiz6bDCj8sT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PYkAVREcnpmeE42eR95tCoXZa1Fs2YGomoKVfPho8hJt3KQTENCazGntfiggEL7nZj7KJoGa62gZgqRz38mVntP",
  "key1": "5SPfT4yHYKgf5o3SFrh59nKY19n9KNQNFToRmRgNpNaTNdbqUPF8uLPoHwxKL4pBymCcFy1GsRHJzazHJA4QHSJz",
  "key2": "3ehp8PvWoaG8zHCXAiggZWKv43LC46N1tpwgZCYo3kYKih3B57EaaDHb57d3hBJ6K8TdEWsT2o2jEmCopN2siXGR",
  "key3": "2JAAFPcr1ENStDEMysAVmYMMgxcZmoHiAmRRyijkeVeVy6vGBBN3VmRy1t1ZU12Jqgo36Y6fYvghUjVbkzmMSKzo",
  "key4": "41Eb1ZcHCVzEe3e6v3UumJ2ty7quS8mcapKkxeQ4d2PFvL8X6u2xwBtQSPJyorNPaadHgaYTYadzjmeDbsgczktM",
  "key5": "4PqiiDvxAEx91rzQR7PtKZGWwsRtBy8pvo7ariixC3mVsLdjLduDrwbVx5oTBqGx5xn6hrqfmhMXCPEwo3rDuaj6",
  "key6": "2uQoPJ6xnVP6zihfsxwCqkxTnb3e4bjzdP9uBt4syNqZh1nrz7GjBazcM7CqynwVX2kQMiCFNgXx9KPEzajQnyKE",
  "key7": "4ZJQBRg2X1NSPkAf2pTTbbkvoTa1mcCQ7jhrSMVBkCeJreKjavyXbsuWxZnFmuQYFRkZB3vYRV9PLMboR4vfb2c5",
  "key8": "2Yk4SN5w4hmozxKur2GgZbjP39zkt1iDCBdWWtNX9tHFL6gvbpYoMx1gqiiVMG1bGjftk1WAS1JrDznrxnrF3EB8",
  "key9": "5HQyfSwqGCxAi4SkmCkaGS3ihnu1JrmBTGwwoRAdBFBSgP1kvjLD1CdgmgELHXYCii1R6MwdiW19PWpLkw4HXTZd",
  "key10": "v7B7v1hr9LF47eFE42DyGapUosjjAeUkbUH8RAgY8xF4FGoApEUuphb6yeMjAd4peXZ9i1ykSfANXA8bdM8wXVn",
  "key11": "x1gFp1ttatj95qV6KFjrsswYhRma13d2M5rsbRDdz3gmFh93nW1k7BNo2T6HWBBHMBcxX71dzAWjfeLaoLZ8Z3H",
  "key12": "VLR53v2oH5T5o2Sm4zGWD9skiNpeNQi74z4GhG5k39QV1TLjUaRbPm11o3NTa93sW6rGiz34GgcdNjipJw672ZN",
  "key13": "3yNfB4EkscSzNw4qEsxDoUrBm9p9LwLQK4eQyHXfSfcrR87uMWCPRaBaeZHf2tAcei8JkCseic2EGvMUGrdxkAq4",
  "key14": "VYvATGFfwFKAWUL49mjnVqsTcbVx3SEyGAuKs1f1Gw81eehm81q1pKgwMKZtiAqX7Qw82NAY8Wy5x96Sv4ae76V",
  "key15": "2AvMzRv6zp8ofBUSpUWFHr6qrNfjrQaARXaVcM5G3Fbh74LQa3CRV7Kq5pByHbYEWNLGzseg9VZ1qLYyFMVqFKXT",
  "key16": "2ZHdg4X19dX3iNjM5GDjgHB3VerKdBdZBXeWmvPkDUegAfSNb6PnMH93jUdtEzXXoTA4SD6ree65ZAw6eXJag1GJ",
  "key17": "2go1zDt8dwFWytSojvcJ9iMUVc9j9w3WcRLvVvnBLpk8aYfyPYVmxbZEJBEqtq2ZvqZLbPoPQFEEhbunyobYhQ2Q",
  "key18": "2qYC1UwRfSBtxbmpmnkTM9WYFbaTxfYqAUKspCoMHau3Sh72ujRtphGKLi8xzmReA35ri8CrGuvj9f3vEr8xvuwr",
  "key19": "2gJy4rimetRhtPZwEZw2oLFuo5nX2RTnHTog42s4u55qepGNLzcE5TK3vDtimLVhLKeUGqNLuYu4Vzq9z8oBiJBw",
  "key20": "63ExH5VQCMw9otDfJhaF6qCWMMDiRzanJmZnuqYUvFBdMRcN2Da4AiYSMfeKESZYR8Mu7CQsCNQ1vEw93Yf26k2i",
  "key21": "5nM2e9d59RCbTrYbLeo5twxb9VJAuNumuWsTxvj2jZQqmCkF4nRi2aNBpyx3mL55JFCoDJvPMnqpgKVERLwgomo2",
  "key22": "Bktbs4ApKhxEKpxmPEJmoruq9j1c3tVu4z7L2H7wiwYDyUcmoXbXvuzomBF9FzUxHtB8P5RByWar7BQoQpHoui4",
  "key23": "5vhCoT4Hz9b7SicL1Eiun3yrAVJXApHVGZ31rvRy26mg7Qqvg1VyiTTXtv79xFDLLAM4y5Zn6f8DHoCbb1nxXoUq",
  "key24": "22x2dsVnpQCcYck1bGXrgGzCQVrzoPdFUfVabtKiuq3SwdVqvBHKuW6GVcxLSwnnf2VFgnk7XGD1Uhfsrik1Ccsq"
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
