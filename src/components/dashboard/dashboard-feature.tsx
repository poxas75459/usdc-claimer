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
    "SvuzYvzVNDrD6dxUPF13STbbGRjrnR2HazuZESpaY8kwKzkCKaYPVNmd6wwf1Lv73Ec8KpyiWo18qVxXjKTnrLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vT3UU1DAdALrWQpZwaboHf7JmEmV6X6HcXKsoamvHWxcCDabF9gqDoa4W2saCmwbTADsRtXLHq3tnvk6cRanNfC",
  "key1": "2znHWXvKdaEQMRnticxdjWvFmLc7rmMBV8t6oBDfDwM3zUZGBY7wsfxNBC1FDYPeWg2vJzdhgyHe5TGJkZGSZj9r",
  "key2": "3LJ8wPQ1vqwK8rVDBaB5HHSKVQg4qS3ZbnmfbfH7iYFBRJUZqqEf8DaQoADy8j5xbaLSmw4DJScdV6RfTBGzqxqQ",
  "key3": "54fYsWg8hXnrsLQEbDdnofg4uZzZDvVJTU2DaLuYHF52hYq1vfmnW3JBm9YCeoM4CLDFTHpULzR1jKTXXHCchqnz",
  "key4": "4G5GT8SHS1QQnjBnipuHSi5ctQP8zRgUqcmsgy9C7fGTy3DwJa9x7Js5AZFPoDkVj2eaJXdijRBUueS2vAfhuwMt",
  "key5": "3F8uyWe692wfWANfS57MpNtQKEJtqryGVfWuCnCggvSRNtTWyxzw1rqnUm58dVkaPeGFfT5pYnGRugxeWh2koZe8",
  "key6": "DmcUjKtpSswoUZDQpR1isdv7YLKeXnVec9bgfp6VgjooUyNwfZkAwz38zU5mi4ymmnF25ffdkZKRpiHsKcPkaAs",
  "key7": "4U7RdScJAUomroxUKNCUH5pYiiqun3KoX7pC2zyoZeSDSEEQorJxXTSkUnUJQd5oVCMcUSfzuWg4Aw3B6VRzKM3o",
  "key8": "4NgWRUgnYtPvN79Zu4iAudckPG8Znuwz9CPSxQCJfkkTnQHwp9vJpPeuX4fZkSeGJNGwfPGVEsgJi92J6No5umec",
  "key9": "2GREgjpRSViaNiPSyZZFMQkfQmaabkMbdvznAnPJAQuUUDvuF3BdbUUke358nZE9GZ8rog1JC6UxsMuvv62GQTdZ",
  "key10": "SayqxS9NFXtMCJEPBFMhCHKzT8SzTU9konjgkWhynbYTcFXBc6eWsWe6ZT6uosCNqV8hSBVpXdBpn3v9DYdbYxD",
  "key11": "dR1ynCxKEaeWQjc4KQJ4zmov984WBZsUsxGThkiEhScztHuUEfKn194EAZ9HA9VW2fEqoyureqxFc9vUGsEUZdR",
  "key12": "4z5m4ijxACAGm7LABg8V9oiPadSwAfumT8uHe3LsC8DWMTa7z4FbkxJCdMP75x4wU6LCjNSVmGDCktmbEgANZEFL",
  "key13": "5uQUCjuhbSDbvfzm4AHktzQCEAnRsEadxPcFaTHhyBSk2PdHmNrDPPEvVQdwLWimR1ptDwe5cVffx7sKQcyXhkPU",
  "key14": "49yi4U7ZAGdibvcDhwu2oZq5je28ndc2x4FVcCHMpFw1hPA8epEmrqNMK8Sj6EPVL9iNtJJqP3YcxKzRcPddGzDr",
  "key15": "5uxbfahemSMiLQL3qPwEw4avsZSZTr1uVwjx43WY8pmQCfMk1o1htdsXsXjHmVWCSAWagAtn7CmWYTjm6q5qtQxS",
  "key16": "4KEtV3AUemPXg8UaebGkfBsBEpdrkhUmeoNvkU7mxQsV3ahwAtFCQiu9Us5wxTgH5YeP5msypCcRcQ8K1zChT4Th",
  "key17": "3o2h8haRbKxr2GocgT1zmMVHRaiacVZh7LGE7oBYTLdAQbhv2sdFWNTS7E2u8ELpZc4LefJsJjMREKXEhes272df",
  "key18": "JRyto5VyyUSCLaiQsJAiiYRVMRJ6QEn8asfV5imZn9YvdSDo6NzhbDLbWMxRzBF48yoDvKk5nUZxgFxwhavGjPa",
  "key19": "4qeNTJ7w677HjCmi7ohjXSwxdotBsQAgtg8zacdgrVf4YivYr9PeCAPtKRzPvQgc3Tw7tAmMcZanthrS3yi9rwQj",
  "key20": "WRDJJYgfjbroqZTa6bqHXgMdGMBvKW4ymCjevvheb6Hy7MQYPmFgBsK9dnKNGaLRxPoQvvYMccGPFXxp3qTyVRP",
  "key21": "oaTU46VfBW4uyT66ULHXtuBiHDE6s7dtc1VFRgYt4pfJp3KuNeMJh1tip9UcXZ9DsJSbE4tDa77gXxs7rH4VKHf",
  "key22": "zwWgTsEotcMBo1GqGVxVzjapA8sT3rWdRNm3VQRi4Z8qdPQCMpyBNXPeP8jRuyQwnp5APtYKPZVKagf59TtVyFn",
  "key23": "3yNNEcv7kzQiyFENgAqa7PfjpjuEctTymedJqZcZ5swcWZ1Kqsq2www5CgeC55AqyMQSiYkLh2ZEBrTvxRhGoV8h",
  "key24": "4HXmJ9bJYGF94YvkJSkiWUXqKHcCmmVhKKKw3wJcWsimbaFt8kGfRMammqaTfKBWR6hXP1SQ3RJH3hidBsjPw2XA",
  "key25": "3Da1gaHLAjcApegNV2u5PgEJgcS4K9V6ieoRXYSMHzJjD6WjNZgc5EhXScM7Zk3uJgSRcYAPqqBwKKkPCszWGq3H",
  "key26": "F7Sm6GZxV7q1eHAgJhRXn8yWL6ZpjKNH9CthXJ8Q8pFBEsi7AKadYdta9f2EbYvozuMdX4guriGPnJw6gjkTYaQ",
  "key27": "s9Ro5ByajTN29gmLbrFVG2u4CzUTcAYJHoc6L1eCyQnTHCBL1SQU8bp8puUKCM6Qqr7tFgcg7g6arvFvhcFqs4v",
  "key28": "4HEBzRLABkkFHpzR2hMzbegpSzhcsesm6nvAqoWGUkg2hvuDponhSy1zjr3WsRwVr78YgNZ6v6jAdazdLhqVuYbd",
  "key29": "58wD1bcUQBswi3Rq6jUNnnaHzid3MGdtQv8G1XrrcihLCbNm5rd7DbZfHMod1EUoRxGWgZraCcGGu6HLG96RLm6f",
  "key30": "4wWkoT9c2VKF489san4gBD3pMuwJ2t8KSZgxkT5QqgzFF5aBS1uhkN4SDAawsJjtWTeCnugH2bUQe5NZYWqorjSK"
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
