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
    "4a9hzVd1h1MV1KMSRAf3b9Ew5hwa6JGAckZ5FNwVAhzipSq435fDz7M6a5oYM1V6vw8pexwLoUExMMimxdWCh8GF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zKpE7WCPMezrEZuYE2cMVf9SBAheavcEXsxPwC7FpyZGhWygT25QuBLHF1csq1RwgWqaqZebCQkUppt623g3R8n",
  "key1": "2qFCpPQbDW8coR7TdGpQ1eb8kJCRegNp7eBRF2ABYsHeis3yFUkYZ4FL4iZ3YzJY145VaXRRbPu8umRjgHWxqFnd",
  "key2": "5HzZFPtpcD7NPTffcAGYmaR2H6xjGJyJrGiKoYmTxvnoSkJBu7gq8HUBf2AbvFsFusHSWxptBq933JXgLs9Hx9yV",
  "key3": "3AfwN7h3knuZAm4CUc6R5j8UiUpowWaTDzDaxBWRQvVPaBUQuqgBrpA1Jmr7CVx8Gq5FK5zhzX4WhCKhgvXJT643",
  "key4": "2iJx7tF6DC6kdnnUJ1dikbotFXbvM3P9amGG6wWm8CwwoZLUFdAsGpNChojpXkz8ZGbsbEWf55Y7u6x1Ca934tv4",
  "key5": "3H4KxXbVnkwWHUn1zibPLyeLjEB7c2pmXciNbStAGSC9rGDZpMQdTjTtw3AErLuJ4bR72Fu2anRyeBkRTDHEYUAd",
  "key6": "5ds6yyKCah7ipLpQ5BTas8jnWMDLmkefw1nJerziPLrc6UTwLPKtCatXt2F8nGn4fxjA1bhmi52KNd8FLshYRiEy",
  "key7": "2G3tc5sVLwLU3BhVpBvCEsS3P6zmK3peoLNnCQVNfQ91yt3H9T3NVZg8M2XSn1LbHZXcSMXb1TLcRfzpBxC1Cjmy",
  "key8": "5Sy3r1Cdu6qFWg96XJEkgbVoPaoowGeRd4cJp5sL8QDzVtPtgxRr1XrYVqhDcoRA8MRPhkNMB4qcQwgFwhDPVWjh",
  "key9": "7mDpu4niKEwE6hGBqMkGD8TAsXPNB2QkMM5sD7LzUt4qcj3T1JvgfTYzaN7ZAYbHKY9vVsYfcLruhNF1vjXpE4n",
  "key10": "5YCUmTBWdRrvUiHfKciQngwa2sxCphj3eX6LxW9PATHvyvxhgAgabEUu2yGYXj2cuRbcWKCC5TiBEsZxj7EQRYCg",
  "key11": "4dbcinHFxmgwpXYg56NeTgPBWG4jG4ckN3buvX5zd2w55XeDwVNnfeZPcWVcWt1FUrLj3itx3ZmZQCgbcc3teVj2",
  "key12": "3xwYiUsHrBX9BT36F9wEsNX2H49HHMfQMn3iYrsPrusWpx1bTJZXGPhEZ8raBhVmGFnqj5Bu79NzrCT9ZyeBNrSf",
  "key13": "X4BrVfB8HVyJSTCRYchK9HsENSzxBTjUpYFbgKKxs8Bu77oCYmyqCtG8xkLUA2qVfAGCcA6VW1fJZJdFnpFHyKJ",
  "key14": "mmsBU18hKp6mGsn8w62rzCzPWMRnW84J9UyUsrXt565Se3psStVgip63yfDnuQsL3sBS14ZtwzcPyc5JLu1swnR",
  "key15": "3snQtaF9LdcWQwvCM24WXJeC6SeQ4bJnsRC1dsFMRtVYPpmTPKwbe6rQ5jNeucSMjtZHLuhtnfep7ujq6tiiG5pR",
  "key16": "657BK8pqDaUN7Qj1Vw6b2Eu87jbyTWMwUA7DVdFCwL7oiwYqH7UxKqdq1zXE6iBK8XtbtFCRA73GZVUC9uY9zThw",
  "key17": "41Y49tQzpqWxarShtuMaVq3QWiXBUCoQdRRXceL5wiMoXc8AsTM9ShxzLNoHXsovUF6uuxtJaYUDbZkMMeZ9RNB",
  "key18": "4ZCjxXpb6HPFrKSangb53xYMu468RcWrGtrQt623xL9ohkVz5GHLmZqc3EqQWavhrPZa6sFPMirf4chjXKkNXuXq",
  "key19": "4cK1bTsBez4YNH6UnfPAe5qEqiU4jDTNrmTfzjjjRHeWRpmZnvdRjc3ztxhjKRgggRbrqLQjD5ns3DBB5HvUT9Do",
  "key20": "5AhztQ8aLf6L1jzUqw7Ypk4WjSeXYUt5n7A5rpU9y98hSTVLmBPuMV98JJughbzRMcM3g6v8RTRWr8Lx1adzGK2V",
  "key21": "2WG2nT1en5ceBj25x96BNktQbmsXpjcZsjcWYxjkx6who2UCjisY42RTtTXRaXVEKRpV3v4Qej2muCNAJhoY6jDZ",
  "key22": "qkV5D7w8Em4dEYwxg7pufPTVL3qrTtd5uEY9YzbfTuApSLJkKL1RZPnjHe5mnoszxbvpR9AL3FAmmdwAbi3v1kZ",
  "key23": "3Vr4RMAbt1hXRcuyNjhKJHjCMQk5qJL4CkL7JG9E7PZfNpk9xKFQHNZpnpTpyuSHVW7azN2EU5HEUS2tjthjHv6C",
  "key24": "3aeSecDu6rjnXzKK42EjEMKp9K7zApXQZX5cWz5c2nuzqX9gc7cJhrWcDWpeRhwj6ogyDYmjYU5R8w2biYuNfuc4",
  "key25": "3Uq71b9phSVQrJP3FNx8UNihpyz4Z7xg6AGA95LnkYd4EgjT38DrTgUr8nxALTtvZhp598z9JaqezCrRtRU6wnwA",
  "key26": "4M6NmDEK5Si5TkLcawQwiNSt1Q79LmngGU4nZ4g2iao9f23Jo9arro26zPvrhKkTbZwYSc9fxkCHyJHjGgtXRUH2",
  "key27": "4Z6mr822qMmNZpfnmWPQVmt5agQc3hM5ShcTEgGtDefbWwqnmvyXRHY6hH2r3eDTKhNfhbE2e9jXErwpwUTYbK59",
  "key28": "4dTERBKDX9DMhgNWjJbbTLVH89TgQMrYpvGqyVBMRHkL8XQ1ErjN7HMcZMKLb4MwUXMsAWxhVsCCU4WAoEawRdSz",
  "key29": "3Q5fDqVdG8ywYtVWbEeRE2WDD7UWqANhVXEQsVJA83JyEK1QM22zBpqdWUVSe9j6JTjxjzdc2UYwS18yowYTg7n9",
  "key30": "JwSCe65tshJnkjSPKtzi6jeie4RsDpEDH9ZKuLaR7xg9QPe42LxWoL4nsBgfQVYnWFXSNdJQGUp2UyPTxH1ARMC",
  "key31": "2kSbBYwRDanNJPfX1pRZobR1vu5B1R8XdT4N3L1RbdXLYP6HCFK6ARABvka71NaarVFcZJkJEnKC74ttFgSQ7C4",
  "key32": "4nsnsM6fQ6N9k8udLs18TT36Wa5wB9ccuAxe6TGGQpbbwpSvJ2h6VmRQ4Zz2hjFoZXegCvKQ6M15P5Dkhmj4x8aN",
  "key33": "627a29hezW8JgF1UxJziH9Vpz4SrNTJNpazQ6jbsWc4thAgPumHKXr74Jcqtz7Hf6kR23gt9bLQRyMQGMR3omic9",
  "key34": "zCfnhAMKqgHcXG3WN3t5nvkv2PnPGvRrPBAGw2MSdqQ9xncLuPW99UzeadxD13bWmrDufBBYn7Psb1A9yGnky8d",
  "key35": "EiqhREmZrAdUHj9ku9LfhGbvVHU8nCTA7rEV9Lkmu94w5G9K6rEyZyjrUs6UZMtBXbKNrM1jh8VgnSV7a6xeL9B"
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
