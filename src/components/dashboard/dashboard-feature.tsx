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
    "2Y3Rpg4GhzpoydsPbGJTm6TQpAcqTgfjF5fzsSb6XHQ5UGbrZha4jRLFeyvJWQWAAr7a5hUGYdbw718nEpKbotCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UaBbtYkQrU77nhRTii9XuyrJcMzrRDCMr6tXi3Y5Lk3zYiWrkGMReLWHvXMbvkhqXNksuEUYSYCU3akBksq2f1V",
  "key1": "2TWC83ruWrM24oMSfXzACT5F49LikKqWCWtMaWKdVVF9nxJd7wXmJ62ktNbgMHV9nnnxbXmJCe8v4i4mtaMWXa2s",
  "key2": "3J5qC3ZfVLtEBVQmmiJPcEtTgq76ut282XueVUZ1eyxJCd9dvi46FeSPP9RgNJk8TaPVHKwnQJkRa7e5KvDy3fSB",
  "key3": "2hMZY6YHdCeBDedJHvk46kaN6rcYxKuVqwTXEkrDJj2coxCqDYWBuR43MgWH3Vxw6RFi8YVWZJDE2uBrc1YSRQ8c",
  "key4": "4uPN9XutAzRhMCmtZi6rw7XVMn3cjn1w66URkLh2bub15ydmHjh3wrFqGeCXb9RNv9Zf8CKdNVZbGuUkYhtGdSrX",
  "key5": "2Uica5886nBee4CHXTm9wZcKmpf6KYWRUojTLmNbhMv6o8BTmgrvzJPFhKHTK5VEUXSK12REFApUFkxszanBhFjP",
  "key6": "3Ly6xqsLgCFqh88YnZZ12qNGUwonqQfJmMgd2Hs7o9QSMT9cZ5ntLsqYSF83yg7pKyFW4e49Tw6ZGov5AMhenS33",
  "key7": "5wtHsvot7JaF3Wr7NGeVMo2MhcSg8grJauHVECPjmAqpQ8NRiVp763gwyVsH8aAGcLZEvAT58iMgW3g17vkc5gjv",
  "key8": "5vc7GiZKiS57Gfjxpw7MJ558Qz6pdaoiFdvw8Q952duoraeHfLDvFXCLkwhX5aCYtYpVQNS9jmeEHTSk7wr8HTLM",
  "key9": "3CKsDCKpxqTxoJTMBGy953qxvN4Kh8ATJygUe77TbZNf2Kooat5FQomZRdqyiDvM1vJx7v3LjfN5TVJDRAeePAiL",
  "key10": "2MpzM4CrCpowL8TUrTK9Wk331Aeb41eNwJbKJKWPLtJVY3YjpHjSBRBSfkdeYk2T5n1JFdnUNuYU1ML8ZtAVW1p9",
  "key11": "2FdHm4a4u4x8HiycU2NpufwwJ3jx2vRAnFM1hqLAD3SG9scXJYPMQcadkGzQE3UsHEezt57L2hxRiZDiwTnLfrTA",
  "key12": "5FzUuitnW1CTa3nPjxKuTA1yzwrirjTPwp4hZh3JYN9hZfL5veLXn6zt4Gk4V4RwdECtsuqmW97NUcpoc35o9gC9",
  "key13": "GwAMPgW6wkbveMVtSPQpkL5rguXkVic4Cr29n8HWzNDuHtN25TWM4izRwWo91UZfbUi6XnNnDwNXWJDjjHSWPt8",
  "key14": "4z4djYVXrSsVcdGsHjBbYsqzW2kDghMDnoGU7PnQAqBoEvk9vvMnKtx5jG5n4Mp8CpRoL4ppmrpiaDymJx6Gfpra",
  "key15": "4fBnVFv2cscVbn3rwGY2t6TdmE4EytbRjGptp4u2Rvf8PNxAxVqx1NV9EVwKtYDVYJkSsNS4MujV2mJDX6wSUToY",
  "key16": "4YfjZhetqX8yD3FwrkzNRnz2ikUPApDkB2JjJYxGGU8YNGfxzWLYsWY6NRcioyMVZWDA82YuMdPUJtRDrPGrYDTZ",
  "key17": "5iWdNUt8G5t2omGm3fVnzGcQLmfsEoNJofY72aVsz7gwur4XC3tV5f3ypY3vxPXSYARSrrthu4ctWe5oMsiyok34",
  "key18": "4rHtuKtoZprNRYJ5LMQRhRP5b8fUe39eRiJSMSF6vxoje3fLiQYYJvPmj7SrFCPE8ek8ziWZKnBxo4qszK3RipW",
  "key19": "5G6Fr3hHdFPpFYHcfXftktMxAzfWmaRZanfAyFi9aj3rW4pK2CDPe9YtJqpDANUR36WuFy6Y7hgAMT1BRnr73uwr",
  "key20": "yByoPoJ2RYktDtRPukBworqqunFRSQUr7n6csgcS3zbndykqqn8H2giSav5SjTFsWnZ8kv8sBifziHnTi75f1DH",
  "key21": "3eAQcvqbNnZ1dzDrRTD3gwALx7BwiurRQrkcBFn2s3FYWcJFUK4RUGcgeKam6aVmNU9Soa61GHpTfSWxvXDTPp3u",
  "key22": "2i2i99RUwGwoUMtRQmhe3P5dvboEyuCGf6b6QSkqK9AJCf49Ga2EvEQUgcfMqGQ9yK9FndyCbtcfN9W2YPjYSaDv",
  "key23": "3uVetTUanSshBiKwxbzKGyN6D88RqipJ8cYXChTtV6thgo5QHwgFMU7BQbpdmTjEkhaciTBVNt9C8FdUuKfUVEWp",
  "key24": "33fH22m5WTZiF86UrWTLnPM5mhrqC9qgxkb3TaQY8wnag3X8rGBUUYkbqN5EPp27eVRji6A9xY3MzueAaqoVGxFX",
  "key25": "3a8oSjWfUiDjgNhKQeDaoi4hfqMDB2Ka54tUuPp99VgRwKB6Zr91HhCRyUMJScFbBnJSYaMZ8dnqv2mQbjp8k3gW",
  "key26": "3rZW2EsVMW7UFRbgiq2mQmvyoRVNC6QRypCXEriBircD1gzNAUBaQqyfnGQpV8KYHg6ESXnBAiQhWhoHd1YTxopR",
  "key27": "39bw34GCWDAacfP1THNjAsuSekby5YNHkufQZ6KSFgGFfNpQWRinzDqUX7Dg618haMkdZjRiowZ3w7yFghfcFGE9",
  "key28": "4C3vsnR5xD4VaExa9BoLfj5AMpZMTvEiyWxhw6TVs82dCYG16mY51EiVvDUGvmFB7zWXLCFCiMVoFUM2u1xXk2Lz",
  "key29": "3Nb34ktcKNqiNTftrk63y7jZ1oPfMTcd6Gaz91HbHeKNMwiWV2yymaYiteAHDVkh7GqLLtuYeDu5CgWg4s7okQiW",
  "key30": "4QSywfnySpwvyKNNgAmyE8usg1qiyYpyb7W73zA7QKjLN6WbNAtouq9cUtxRamuf3fL4FVsyBuBcpPzTU3qBwGRa",
  "key31": "3K8vi4xiR21AsgL3GeMVW1qFYgVmpRq7aA7m9yVNWpCrZpjzSxE64nFZi6sTGAy7dhLwNuTzgwrxmeawH7eDy71o",
  "key32": "5xDxsyeLb9wibDq3XPH9yNokb2MSHMgTRVjPGrE7mew8UVAizfuXnXMj3aMKzPuNscxZAWLp2YsMGy8uprKCN3s5"
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
