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
    "pTMPqsqfDPPbKHqBiJaB4TFZPBcms8hpCMH8hrveXqHXQWyiNacnoVH522RS36z128d9B5u8rsPKHjQRcj7k6C2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38BcG9MXcPtoNy4477kWCN3fvmpdagocezHrs19BFys9EP9SioXP6chrSJva2zE1k64A1FeiEGmkpvmF53G6L46E",
  "key1": "dC2x9meka7wxtrGH3kh6Jk4c8yVcpZHQJCM3JNcuzmpT2stK47JW25T2cJkFt5XwFALTwNyJqsqhcFp4hScy6FT",
  "key2": "65WzxgxoRCDM4PqEVNFL1WA3jZxufhD8CjkubMUBHj53aE1vfSU7GMrYpqNMhQLeuTtTs6YwFVc2PGuowLzhnWLH",
  "key3": "4Eq8ZvPqGfKLk4YdiPi5kZEqFVCJDzbe4dPKFThwudHoutsUgQWEGrbG3DguQkqk9n2Roo2c257ChH7bidaYsgbM",
  "key4": "4i8FUxTdknxenHFTrHg9qpJqrehsFk2wERdbrZkRRHsWXJpJ4uEn3UHq55E6829VUrgnqS8eKpqwof5ciUPxXP4y",
  "key5": "2hvHUx1PyXXf2hACCeMg714hSEtPRRKAidhgCV1zk3ew7C6VxAxUvWsGh6QYQW17brs5gh68DKk17qRU6VjM67Q4",
  "key6": "2jHwRCJFUNt7snpWR9WMqH9FNKawCdwpJh4ycNx6osAnqZDQ119esqPeGFnxBVns789F9ndUH2SjJrqYzViFkvvg",
  "key7": "2YEinR7f1dMTJgJ7kgMJVPxggPhSWpYucsbexkkxf8zDuzBoa2Cf3x1K8J3xKrQNeDBrzgpm6AGBtRAcadGhLJ33",
  "key8": "2wTo8VCjYsseWkh2uQLVzQhxCfnPHdhcmuPFGkvtiD42mwo8QuGkth78PRZSMowf5ckGKDyRcLvhubpVGeKk7B4Q",
  "key9": "5Quv3SApEkcirnwQowYLCQo1SqMXiDrGAwMqB5z3xeLtTQkzQWmdcTym5gJt7koZnbk8pcTKxAgEGD5eEQiF7AqE",
  "key10": "5ZbjXedpea4EoT25axX59mrtXu93guWH1MZ6DT8xXfBTAB3hCNRWmUEWtjuc5SNDjNbFumyXrFNsTMKCfFZsAi1i",
  "key11": "5a34AgiknLDCgT9WSwqbwaCxm9meE1LaXJYYX423RMV7r7hTPCUVNtQoZZLkaiXAB1r8tJW4eqrHxpwjEZpFwjRW",
  "key12": "3YGitpa5xeUp5xzyA5aid716rVcffm1cP6Ta9uGiZsFQ6zZ87kkUgvo56um6K1JuUmT2Z44LD93NZ5moM55kzcvP",
  "key13": "2gNJAbKxMTRKsx77CsGrJq5kWENtrMSSppLGYXywkWKT4SsPEkYhcZhnKSYCGstfgzJZUiPHqjEkdg823EnBM1dA",
  "key14": "z1CVG2sQ8WVH5iKo8qkxYBnEBN1zUw5Xt2orwBdSMabimnbwKRZEjQtJtipLTxuS6YiL5F5zoKrkMRqDNT6Qbic",
  "key15": "274S3fC5Kp2abe2mCGNX1fqkzk49o3cKtAixMqJnsmKpHmjLNS7XvFrPtmYKE5EhTYUk72phwx3UWrbDocnqMktk",
  "key16": "5ve9moEH8kn1oqDdYp8ux3QAZR2dBVvEvy18LVmyTPvm23YyBYPj2MUHhJPa9fD3h51ajgESXT5dccADt7XpSFds",
  "key17": "49YG4rfLc7KCZ717gRyra9rNhtVjAKBjsPYDDK7hPc7JEKAnwdw5uJJem9eZTinVR5xYnvHhDPBAinHmXvodi5N2",
  "key18": "5wP3GNSf4FadEUzfSCKWAuMnaU8cGyHvBhX1oP9tZciUNudupmEhRBnNgFKiF8nEWyjR6xt2rqUaS1aD7YxKFfrp",
  "key19": "4rnUjxMmKJkdUKjfXCqg9DivRJHeqyrg6UkiCMZygtcqUdjBcL7GWmMAJpXoignqQ8LSEfyrkaAccmFsmo2XP7rh",
  "key20": "5exLmmzofXW2iPmhUhQTk1uEt7weQjYstBmWMRAoUMSUpo3Ur2Z3gpHonGsrVJcxrGGNn6w9NR3ogqkEhwXi9wVF",
  "key21": "3KoVdUNuHhJwhi8341Dg77kTLLyFFCbAJcfGhCgD25FkaLUYs2yi6fYjQHDKCVBSesE2LmjNeKqKms83bia4aLUr",
  "key22": "4sMYZLGGzRFsLoqdom3YHr4Y5tHahNjTja4MNDuPuZqwPi56tH47c1DRGSD1WGT7rpAhvsfe9UY6bM46X71NX9jR",
  "key23": "HCede8niuwstksvdao5eHStuE6XEdTg7VzkAVXkVBFJYSCBfinLgA13HS5RzzmYKno5gXzsDsrNWw9LjYWvcCzJ",
  "key24": "5MZ83AbdANwgUBKadPMZrhfmVhWSDvcLBHWHnd18CnTo24BQqtZ6DgqGzRvTcP7gyutxnpCbyeyNaM5MV86w25Pn",
  "key25": "4YYxXLqVQrb5dJPymgVDdaXC5ZYEupTGS5PixhLNhSb8zgC7eeaQSphoDE5R4GbfuajvjnXdeE8oDMk6nW1MBs1z"
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
