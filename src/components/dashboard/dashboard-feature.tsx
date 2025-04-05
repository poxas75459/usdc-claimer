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
    "3qcTYQ4w7uLgS1KV6W4itejb7eCPhcMyzMZt1rUvzo4tvNNgXrUUUpwjDv6BEHTPCuBT3JqmqBv5vZJHv8rsxNg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LeHeuFhSpEby8XTKggDANAP6nipigjqcovEjLm1EqFAy6aDS9wdCUpu4t4Pq4T6QN36PmmaWMqqmJvptbRJgpca",
  "key1": "3rrqFkq2P4amLYX5pEJgxnnKtA7zBXPK4GhzwmuoPGwNrMvi1JtmtJFnfzRmgpGdjvXwcbRFmWnVDbQAq4o4zzUE",
  "key2": "5CmKfVkRgV1feWgcFHxFXgq1PvqbsEq3cazEf7q1ngeBTisTVuGEGYhcy43fBEcV1RELjyWAGNwTSjssJUZqizeH",
  "key3": "3FpJvKuMXBMNZS1NkEWRv1DhFGJEvBcwKmBRwV9qwhnc9CMdUTA3iRSUXRtwGSXS1wm5thJoiCafaVafcvmjenvF",
  "key4": "CPmN932QjCuoPXX41Xzm6K3jkSukeVgFqDVDod5WMn74MQqp7VRbqrWJvy2Wk7nMx1D6neRdi89kCEGq6TBk3MP",
  "key5": "2jJjYnwWQqjg6QeupHJoxJtAyjWEt3DkSeyTymLQ67THnR8z9iT5JZcmq5xpAnw9JqyspNfyqs8nfo7QU7UkAy5m",
  "key6": "3j8AKPeVX6GtRaSDUo5tdTEHfCikR8mpkA9uQPC9f8DgvjyVxszVQBituTpmoq47yndEzHa5Q1B2mU8vGP2yEo1a",
  "key7": "4L2EbghswBjUMH2XMcHdJFavnijoEq354wn4Z7AuxnSFua2mw2ivzwWvegBWwYBpaEexZmEinvEzb48eQP1Cr752",
  "key8": "2oRdaB8B4wVjUSpBYGvQkxP8HjZL7FgTkVx1Qw6mu46guKFVvRvggQNjmVMhwtufxgBKJMr7q1vPHsvpfpTh2Fzt",
  "key9": "33AoBhbRjNUqGPNVFkXXHdpy8CfDxhhvXrQCc72sCvGNvna81rUL8U2omEnrCjEkxytcUeWAv4jTnvdatnRJxhBP",
  "key10": "5MPdMvroDhstyMvxKY94wTfopz2WEVTEcseZqsuqJFAMhx3oHbjGCF4WFeWGwEMWERhdtwvQQ7qq9HZYY3eV8wYW",
  "key11": "54dns2E4d4rRcxKhAXDDdnmbtjeJBK4g7BEfgb1u2uwBnoeREKueryVJyNBAannH659yYa7P6NBfZC5K9gZa2LY8",
  "key12": "2jQWnXA3ey6NQDV5jL2soqwfJnJjcyaUP2ff7tWnGVJ2xwLnKi1fTNi3qZvjAVcGZD5SRDkox7r2anUDpDUSaYY1",
  "key13": "hu3ycGY3t2fJttM52uGzAkY4C1WRsMbrovqzuSQH62haHDbyHViG6gLFWrFYp64gM4Auwp62qMPPCdbL4JaK4vV",
  "key14": "5bk6CH6DKGbniYx9t91ADkCw5aH82uXkyoGQXm4xuvxyBL9dN6axxnKD15SKnqpvQAWVeipJfHXo9p9MNpRvy7WG",
  "key15": "3TNPZooqTYhzTEAD5pzqEvDrpGtFZbiw7ceDNEvdVZLLR8xoqDXeZ7UmNjrxmXoWFHJDcfpxQhKXcuYHc3CDYXrY",
  "key16": "5Crdk5hmUxfpBzaQVKYSPqQShWxFZ5bMACoKhHc6sb3KtQu3Xp8HJJsPjkhN7zD96D8RgitMbQvoTxE6N2nC1131",
  "key17": "3hhQuAkXh1qvwVqw9tF1LcXfJw82LVggpbqgHgca543Aiyht5mEovBZVdznFUcLtrK2yLcGReiwZKdKLA9X5iXNy",
  "key18": "4bn11pY3Mqnpx6qQphNr8szbhtmqHDweYGGTRbeMdqjA8ZbJnk73qeyNzLbCtHC6qXYNFQGk6vA4y7kA8CZuRQyC",
  "key19": "3G9TiR2dSwuHZpVvBKPoBCDG2QZ5TrtxicBbqooEMRH8hbnCAvrWbHYvQsHN68TwtadkFqRBLdnfZ2P4inWxVj2A",
  "key20": "4RyctdHUCMUwsgxdpWSYaoYiovxMroNKKyKXda5WdKsSPAnTDYJF2MvHLLMeiQuLGA2vTqkWHDum1xk7CPVdZ4Jr",
  "key21": "3xMrzoph62hFvK63DfKwQHUk4MmWPvTAy95Rywtj3ykMqH7mr4ABndRMqmGYJsYFZYByXkV6zTryPeEZE5ZWvMpk",
  "key22": "2eNpq4pBcnPFpFLiSkkSdwxjG5qx36462oUUbsc5Z7C9GU4D7Rg1sJL7v8hw47kh4JPKtYDYywfDVZEB1RsykRwP",
  "key23": "EeTogy3aG1FvXQQNBrov7Bjk1bFkvpUiaCCVvGe4wad1KZmm2uYZ3zZALnd9NxLUccS17XNxXt3XcPSKVN57i3Q",
  "key24": "55ZFbnAXbLixLx2fqrwuAojecp4zL5xxoGvhgAik4xGeekNPN9X77M9bWv2bFE63ammMTcRxuMey58aM7ebQGNho",
  "key25": "7HWwDwjqtxjXDh9AUZDnomyjYw7gnfYQFUW8wtdt8D6isnZ4fy6NZoryP7sB2Cz7XKuZVdCqSM2zEL2RnRDw1wN",
  "key26": "2MzgCz568a9jiWUPjazB8vDzcL7LhjNzf3xLMb2BnZF1nPUoiacQ6gJnvUYJW7HYPcVHR5zWrvxpiDx6nGjvi5Z9",
  "key27": "48fTLMKazhjhHhMEjLRdFhADWRMw9nDhVmgC3WxfPTxAcLap49WdDoWwnJx5sXLAzbmEyn7NNgkvQko8WpQZVM7u",
  "key28": "5k6LtSkLDat9bhr1E6MyHm3uaaj7hZckhwWbJ77c7kLeCnrVpv8pDLRH5X3jTCaZevtXpX9XZsiFSqcUTYWnpAao"
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
