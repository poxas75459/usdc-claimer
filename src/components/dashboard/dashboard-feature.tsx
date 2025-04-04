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
    "3hWWJoMiSxSEhvnXXdoTvmneo8qaHmPCxstyEqM4WFgYpn8RsaBP1jLrpGMnj9U4tHfKsyNaARtsQdNKZdoyMj4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GLiGvwswppHdcd96tJ46Ao7W1CVbe5REff2QdTUC4Kt9HFaC9hJL9stKFuVb4NQ2iaPMEcrrPDkJvvQi5VM7u1K",
  "key1": "4X3vaKwwo5Lk5gSCwHi5GCYTi9piaJqZWYpbVjnNJKkrJEV56yK5soRxxviJ1tr32WhYexbazSWpvp1fRAFhBE94",
  "key2": "3DGr7sXw7TBK5XHeMDyxxgxVsW6udsccBtesCFdzhz4H1ZK5McTAnzKCQMYjUAPbZgQW4EewbW6vJxDS3q2k7uwT",
  "key3": "34DrS7AK198L56PmZRzpGrPbXW9VjUoFgkapeC6gdnivLW228PAqC1USiauyGG4jnpGjJE6vKjjvcTsoNzr8i2vJ",
  "key4": "2vGffDLr44iR5Jy3NkGjwb5U9ZLhfqaF4nPKZy8TJKkNvV95LPvE1ATLPMJEfQh9JimgLxLS6WRAa5AJduLB6PoA",
  "key5": "5J6fonnyzwJbmE1bKqDFU576j7ShNUtuZ7v8BVbrXTjcyz9RXtSNwacz6w4BnqEh2f7gwH78SwiVSW7Da5dgJZ8x",
  "key6": "3HPUzPqreVHDYtTpZCaxtFbsd2dSSBRWRiy42enTPWuguo9x2eFcBfr9MreH6N5GCLJLyZjqKSjkqZkReZ7ZpciT",
  "key7": "4M862siWMN2nLHvTqRYXQxJTuG6TC9NtC479SqZhkvgSWH1uFdxWycs3zY1U7hVPYHtQJdmdmGm8wASPubshXXVS",
  "key8": "4rc79UnnFcnRtfZrWPKW5qFhoebVEHewNvWvvuxZbY7NkhBQaekzkXYFzd5B9io5J2jvwA81hc2uDUfJwyD2CSyu",
  "key9": "599nKG6sixPfCSvojdNCbxhTvP3Tg4SdWN9McfNe6FkfiTfNyqNK2zZS39hyoqC1GBcRStLLDMBMjbmJA7RhMQkY",
  "key10": "4UFfMQjQf9cutrDVKPEHSTZzqfo2JdfXN5ETYRFWPrSdrnEChMgLifL9gnBQ3G5DPdmSTmizwaqogkSpW8XB6xnR",
  "key11": "2epgLnqtDaWXpGa16Xrp7DgepLp39MjmaYEebtoqo1J4GsCvuAxGZjjErLszSkEq5rR736XPH5KdZJc64qzvyHug",
  "key12": "2LHAWruueYj2BvDxP33wF1FYsDAfxnWrPdbxcVTT3uJr93CwnDVWLjoX22F9ApHURCfC6u6TfzBi7t7yyxPwYCQd",
  "key13": "3AQQpvGoCwJwfu3Bj4XumZbpbhhvWVQgnxMi6zxc8DmPfpHzTC4jCcJ17Lzg1F6hUoDztepwqUdEahjATVRuUHqz",
  "key14": "cTQbbpqSicyzJQCjwXNgotxbYdSTbymhQo7SD9Hc6Tw2mmkypyVMiuDz63voRMbnjHkuc4i947YiE7nG4a6DsE2",
  "key15": "5yVZL94njGujwL3ijJNSC4VeLSAy8iTjetpvr1xc1NNFvhXonWie7UBp12eYpABh24LeuUxQJCfxZqtrtFM7tRbo",
  "key16": "5T5fGb8c7CXfqgjNfz24hDQHAtNLzcWHGyAtxQB1VxE7uvoNxYfmFveKfwXvn4EhXPa6WzdwzYfKGS8bYJRMXKAn",
  "key17": "5TBjyVAgr8CPxUcT5tZT4Peajv3gcCKDEkffhjUqmPQrsohSVCd7hwr6bfpJfXjHKKHSGbpnuCbJEjeN48i9H9Zu",
  "key18": "4g54CWJYauiBipHW7Ma6xtJ76MMGbXYArWj3A5AJecjQNUmnu3rzEodyxavB8LH7rumNahKBFrZqBn4WN6UaBEoo",
  "key19": "49WSnyP8VwR5jaf4QiXYhAEwzjKP6VYDNAaxu8b7SQcooJSA5Yt71NBkNxHqgsA5xokAkLZR86QyWhiHspaZWtfq",
  "key20": "28F9CjJFbAEUJHMhnxjE9DAc8TUxoDSQFq3N634Ug1Ps7RrfqW1C8FApQAV51jKco93XsS7LZcoP4iXJbRSpHVwq",
  "key21": "2rmsFwcYdv2D6sNby3YZCoPTqXvZFCz9gqAkv5jKbr1tBRFH1Py5nQudyDBdcz6BZCwnvTBMwgXYQpsLqgE2nxrv",
  "key22": "3qEQ5oodbLXofyJEtso4bdgVc2phAoEb2odA64YgK92dKKiC5eDpP9ENe8KCJxDpeXYnJuKoeHcJp1VnDbfXHkuU",
  "key23": "2MoKW9p8RW6qw6EuEkj3rBTiFofnP22em5xbXXH6NQ7ncyhmVerSRBNVVi75YXuirSdxJEmsJ5atPgSA6JqzrY97",
  "key24": "457dXwj2EarsFUuq3UBz2FcrX4Xay5r3GcigjW5oXwjftWn6aCgJ9hBfbmLjFiSWZRtGYyVL2Yz39A2i9hkarCCC",
  "key25": "54zveuVX1k5k9kKH1pPVN78W7wNX1xVRMqgMaQ4XLuYPT5CzoSYMgJkgi9YmWwmM9fLKVY1v1jRZ2GaUx1kjgKfE",
  "key26": "2yUrbuXaQBqmHPnCP7kUy5wqzrwcaxT2mLFd66rx8w5LaqpuPf3NnYfktb3mrbYb1zENHaXtv33Wgp8REouGAVtt",
  "key27": "23WgTiwRSz7b7FYvmKEUbfsVz91Aj7wAUhqS6D3YCHyp64DfXr7XiuiBc73SMwW8VsBqU5LJc5i5RrbAJVVLUkXW",
  "key28": "2MamJWPCC7JXGKvPoZqHRbrTZ7ykhpVuAiimSyyKvuVbSvRgHCiSBCQ1A5VUszcrXWFcNaAmieMQsQi6rdZvNxnF",
  "key29": "NfyY7HzbVFzfTBS9iZ1YEiAog12282GvzTefwfM45QVmwPBUfZm4TX5tjiSjNtQdFyExLmqCqMuybrTBNFJRZWR",
  "key30": "3WXsn84hNkDVPbUua3sA2X3WZ1BfcTBJrB1GdW7rB6AgobDS3p7B2pQQ9w2TrniasFMqtL3vgiJjA4EHswL2g74y",
  "key31": "2U5SJdbv3zFjTHJN3D34DdrQBfRNYK1D8nQj9cYVn7yZrN2Tp4N4HZRt6PsEAZM2ZVp1kjoNqRktBybkRb8esuy5",
  "key32": "M39Rqbb5cswedv2rW9P5cbd1fBT2EqXaTz7tyAC8x6itFV3Jbr6AEoNVBcQJZeWrbDNJjrp7u2X1SG9SLB5jHa5",
  "key33": "5U66Kmg8MBu6Bx9GyaqyGdBhXbXnPsG2oj8qKvAgnYvpnThx9gPYjnahNM9zoAG1oe5Rp4zVmxAS2zN8DWUez7U7",
  "key34": "4VNgNyEu4j3shZGRL34UM6s1jQwge3q21qHSk9gJw2beAZ1h2GMbJLCYR4ph3kZpy3rBpS3b4jv6SEAL5tvffAzv"
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
