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
    "uWrabZMKHnuFy9NUicYxbD2bMTRze1YHwMV1Bh3kSQvmvhgaM3bjYX3w3f8aEawnN54S5DGW4ETSmVQK7Wf1671"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ieWVYRQY4ojyrBRCnusHipgN3RgNNJxxwdAPFBaYvGZuK3kwjnJASbBJBLCtU3yjfpC7vyLzwEvZbEpewFfYxTc",
  "key1": "2VDhPea1v9A7gvUK7eyjjGJitErxmJZBwrYU7jWw43DSBWbdiX8vEVBT8Uex3uTHmqQQsi9QV7Lun7Arpa3xNQih",
  "key2": "4vNx5mdTDEVBJUpvVKqfCFJNTt6bnQg1xDew71be1ihQMLZ3c2stCYzSczFfctzoyNu6ejwNSyPLCrsHzXnFR9Jk",
  "key3": "49JRMAZe395zsN5bfFt7361UX62PYsTWdpJfygyLKdPAZj3Bz5Tup4pFgnQebiqZT3b2Akn54SRS5xyJiApnu1cJ",
  "key4": "127G2r7t1Ju6WxYFHjB3CLcxfftxPFQZLJkXQoEAhDDa3YtiW6komsww6pm1Uf2RReMuyrbRaJgVj6SeEunWhoM7",
  "key5": "3JmKDqJ2yya9w4BzRAfvHt95Nt9Wvmzpr5Q2UhQhYW3vKjCWPp13TXAZ4Qygkm8fyCfDEXdDhRiFW3sQXUaqqngQ",
  "key6": "4ubyb5jVTYje1hFq36RuwaHMBCoo3DG2vcwvXn69uLzTmztebjVBnz93CFmtUfo1Qb8Fv8zDhqrJtAFLzxvAhqWk",
  "key7": "3bq94LaejzKTiF1PvKWEbu8CeY4Cu8ptQqV4XJkpEg7QAshC4SY5VB4swkaxxPxn5KaMfR3hNi6Ux3k1cfx23nhZ",
  "key8": "2qskzbZya3XxZQ6UaZzR2eMyWA8T11JaQFp8zaTzBSpUWMjaSYqgTGsLSxBiyHv4ohvAJmo5Tp9sU97Xoxnbn3aA",
  "key9": "4xHBpXr6jwbkB4RNmUKPzNHd5ZnSu3JWbP1rXzkRCJT4zda3tZ92jk3vD8ndGm3R4rkXo1VZsGq5QnvA1DNvvhe8",
  "key10": "Xz2VApBFAiCauBrZfPaevWV8E5MXMGENJDS41Mfg8zvJmrLYSz6MCAQV1hgcLP33nzjrwAM2qbwMgZmcEJ2As2R",
  "key11": "355ympK73DWpspsNvMjhSBfrk5v1k3atBjXEzUug8D76GAKmiS5so6DVCigMsysFeKHBtGTfWuCd9cLUZJbMCMDD",
  "key12": "RVZfHdmCwepaxpZsMnySECytcidSi4yAp7GFqFYbQd1UsE3VnbnRCyqn6cZz1ZpZbiJt4WsCwRi6jwYr4dQrzDd",
  "key13": "coTURYL8wG36LEfvocNvsdrs5i8LCE82MzcL6dEAS7CRQMrdBYvg2FVra9fFgvDaRrUAKC7Kjkv3jhdvMnp7765",
  "key14": "5WWX6Dg4nvWyCdBUZM7ehaKnr6UWM5DVbUFgMVmKsc8bfVbyGEjWPfZWuiJm2im8F7T62fiMKnE8rJEn1TUkXf31",
  "key15": "5ap11cwTrvTh2m3UZm2PJYQ4W6yEhbPNBt4dCBfaLNTUVtH6dtiEmPsByUiBmoz5CrKhuU4W5VisbQoYxdXU7K7H",
  "key16": "Q3eygW7rHDA7L9wExjdoLMn5oSxmxH4oawYvWYEAwstLp3eSUYQKwtWz63g1ChFG28yVPbV7MQrwDcpYKnM5Ayk",
  "key17": "3xsxubduNMxgxsnqpdvwXpPSLFLpgfwPG6EowGZRVLqr6E3wDiycZXbdx6wYh6PLupkXxZ5TojYFReC5hBLDhiRJ",
  "key18": "3p8KvZMD5mpTtMxWMiSzrMWTaTfiRiRV2K7tjogut4V9E6FXvaGUeMhd64K8rSdtuDMVJiNNDjGS35xyNJPFCcB6",
  "key19": "3hZdTWY6LmH2nDqbRi4NGZ4z2oDZQsdWtCPbFkUajxHXbkBwBup3FteLzioLhZ3aroNZGB3iwbRVYTfjqDxs3XJy",
  "key20": "2W6J3LZcY2v6hWjxaJRZJVj4jioPno1qv87Efsq71zdkLK7j8R3M7x8xKwbSzu5gKGNrevsChzc6reEhZHS3gcku",
  "key21": "4M1aAVXE4tU9goPhQR8dG3rJZBtEeJA6VFir2R6HY9foGi6WEiSfiowm4u256VGGnh34oXnLdSgePE8bBwbUwKP6",
  "key22": "4eZ8BRoztZ4gucSpj4iUD6dQiRY9kgxFimMdFS63UNLvfGo4at4vcqgESpKrxVeZ4qSRj82BXfwG291PiAeNSfsL",
  "key23": "4H1qHs3A36HUmSEGX4HemUikF9E2ynHu7PdNoBU8HaUQ6844y2NmdeV1fmMZoigN4ZBqnK1vJXmPTX8tJoZYP33q",
  "key24": "aZk1tCUtyndAmqLWX6VxjfBUYVd4BfPekAisYk75n8igCiDaQACkyVNVBDMp6JqJaEJPTrFTmyxv5UV554sZe8i"
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
