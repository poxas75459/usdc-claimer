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
    "jh5EaR2ABRjY5NUBy9YVVuxciP5Xp8STYV9KNzaexSGvMPFPNR9VQrmAbE5goQUngRJofdu3y5uTcn6gHZHWKY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WJUSUyBRkKftAKSxaJzghMFtvR6UA9cQqN33BHpbvjRS1FYyN8xMxfx62GRqvu6i2zMiotChi4Z1RMMLnvnD8Fp",
  "key1": "3QqDtB95nehf5dXsaWMfqNqz8bNVhUmXeTzPVRR6wytA8yN7SKSHUuppWUfznjM8H9ngWnzjNLv94EUtxZWFNiTk",
  "key2": "2Xf3oGHgAQDm3GHF1T4s1MN8thCxwDMyXMyyUfexyebNGPkCPCpCJN9tgB6pZKDZkPsMCXm1q8JmYPJAK2vqBD1p",
  "key3": "2KacTAE6wiJokirMvqbnJWdR8CFNYc971BGBZiWr95rti1ySgHfpnoCosGfzN8pqQ1nRWcEyyh6AF7PXUfTgVrKv",
  "key4": "5ffHLsr2zxscokcJEqEDA1T19aE61sTaj4YBQRb7qvDaqoeG98hN9dRpVtnpcCcaQhWCpG5Fk5L3wgCkw9kMB3cr",
  "key5": "4bHRWP8maWwAbRHqUPbhkQMoNCcnhU7Nmy1dvZB87PZa8rAtWokSqnP7NcDxVenbP5M3vhAdrCguPHy3y6e3xBvD",
  "key6": "4FBRbUZuM7zjHpn15bv1RujrqMLmu8RLHCxjxNZZgsgqNL3mF2bacTEF59kqV4XJ1wVWazZecpdmmLkTDu99VVBJ",
  "key7": "1jQfaP4JXVTCRDhn8cBdrxoLwpf62NgyCtLr3dd2hBzDTPhai5xUKvRF7spFcC6FUeat4E524NFKbz2Hhcoh6Bn",
  "key8": "2zauXVusUezyonnp15zF5caYX5jUmNQhCSyayFVEjYZo8rNRS3eJ7DHnPaPhi9sRpq3uSAhpaW3cT8WkT1u8qUj4",
  "key9": "3zfUhVVptGCE8CXMRHt2gJGj7Q2wwca55ekLr7fBbKrK4YcWAx9Wtb5uCxkvW8hFpVi1YqYoGoVzYLLSXSyinEFX",
  "key10": "42Wd3uGX82gTQoqTt3ig13MjqFNpkP6pQHn6FdwufCWs2Zn2uCean2E4gs4efqJ8fXFUQoJUy95wTXSNxE7hoJSi",
  "key11": "51unYkC4Lvtd555nYBQhQj7zcR2QcqD35tCNaTRfJHxPPUsScgNxsknefuJwPLXvgLj8nor7QtWmpJC7hN5pjMb7",
  "key12": "3MRLhKuninKjZLyEeoLH7JSFSbV4opKZfEPQhb3ieRSZhmqyJmGjYjJbh3AhZyxG7byoAwEyGQzdfX5fimvqobqx",
  "key13": "4yB4L7VhcZpeuJuHb2aPRDNJpVxhsi9z59TEerBNjd5qKtgQGFUrfbgUS86VwVC7VzHktDLZm6ET58RmJ8WMZs5j",
  "key14": "5zBY5TC2gX32pi7hVyxfXYCGBY3GMTPHQkinqgZSmMT97MYkgeGdkVTNP2a25sUwVEUAJMKAFhZEjHKp8o9w6ozw",
  "key15": "2whNbht475R1ZZs16V51VhPc5ZSLddmJPBhnMoB7RkhnhnSAUECxuvsEVgZSGSNGYgVc2hLtrBUtaYPMN5CNdKPF",
  "key16": "xp91B583PMsnN2rVzgEoew7ARJtu9T6WzR4fjRKjDJPcLYnYBPhgjxNaQ4NHDtJeVGNcEG5UH8sQzxetpPaT6sP",
  "key17": "5tvd77p22oFCuoRDLC4k7GqnG1ywnHiKVasnc8Dp1kWQN6CY8aZZKeRCP3Lfq1teXTGzdZU3qS7ziTZ8KF8etKHf",
  "key18": "3xgZkQsZWfpcFT4nb5EWeLBbVC1m9KjTrpfCLbjjhVnRXzgHGFkAciCu91DHp9fQdPG6iUetsb2kN9QiKsx5AQP2",
  "key19": "gzQSt3pAxN7xYkCdJoehmFwZGwKPxSxiX1Fo87YNy43M1LYDy3Dj5BbckR3Xt1q2JwSRMcgXbpm5RnBmYQjDA31",
  "key20": "guM88C68z4PmCGsEVRrTYcXdQFgiX5QewFn97MUPrkZGBH3Kix8MikfNftCfHsUf3BKNHHN6pgt28TuuZk1Rkb6",
  "key21": "2yUZHvtaeBFMTxiShKMWEwPFaY5GRXBtGf3oJdUma81uR4bFnYoCpDTewDArcUqhiDmsXhJXVDVA6n4mYAzz6Xgb",
  "key22": "293vp8UYySrpKV89JKMu3VSoiKYawanSxgyf8d8aqTzs6jQWc9GKyQvR8W2DJRkEXSwpsw9UoPhvqJfoNJ9DoQLT",
  "key23": "677eyG1sqv4mktbkVJzVP5XLfgA4yP1sGmHUWFdorycr14FhYQxP2kRepuybgGTdvpfmEPRNbKv6kEnLbS9f9ZYG",
  "key24": "fdR4LPrfhrsqoYmvS5oHRc43CCWhRFb8xpqTG51azz2c1MxfSKmQXbRB46jBSBz5GdHS7eKghro7Je2G6SWKm6W",
  "key25": "39sxwwAMdKWSPh8UaBJ5jQVhKsk6GJje3BPsi4ExCJaTrFFCi2nH7uVyETsg9ZiByq4VKyFK5kqnj76Na3Z1PAHC",
  "key26": "3QN19ULcNuxqewU5RLx1qsEWHdewwCNBKyy5XoNM9tFUvubMGvbP56EKVkiaR79t5q6h2NPBantwc5znYcMBd37k",
  "key27": "2bVFTUsc2yssU5G9CN5EqQs163cvJ2jkojQ9EUbPkEbo93aTe3HDJk929ziVdPRLw28LrKxhqY8m9XcpSmZa819y",
  "key28": "2bu3ZvQqyRZy72xRE6ZkHaZ9UESYfPAAk985U2g8PkmyVJaVwPDdAforcCKhjiMGxc59YrhrNykJkJoLF4VNTNJo",
  "key29": "4TutnQvYw5cGhziKYvq9bb9Q95gYpkjZqf8SRsSCXpycxhwMWuj6PtTFxsXf1RczpjRy8Vop1BYNwvxkCyAhkKgq",
  "key30": "56r33AfiWetnMNyPV43fi48JAhcN4vdZi7bZiUnoux4K7S4rCWCtFQrHyLHwT7aBwwyRuKaBEKpQQbSo7X5w8vqV",
  "key31": "2QgWraMsHpgA5bQvyhZRi5LEnmWwPJWgABFPSEmtUGctFxKkZ1fxKvwqsWiRRCbvAxVVcax7AF7TQNfDC3NNSW7o",
  "key32": "53mE1EsYiSbbL9fr2BnnrNbUspyUUvWq3jyWJTKytwyfd6X6N2k7HWVWef71BsZVr9RK3qJXnBFex23j2LHiB7Ym"
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
