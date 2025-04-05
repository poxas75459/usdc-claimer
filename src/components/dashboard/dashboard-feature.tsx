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
    "4nXVWxAhJfUx5grFCAcC9n3UTRLU98r9pyEbMsLwe4doRDfdkA5oUi3x3xGgr6pK2LKEyxmKDjkNAwdxgio7M6QB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29wjHQ6b9buAxvnc1YaumUXvm8wDm3HCG32BHLuQnAtmseXTvtfogW9APnFmEEEZfYVkugpGvDQwvLXMGSb8bHPy",
  "key1": "3XAYFoDfV7ZPHotpuJHAzqFex65hHQkibDPSysQojiNAjgHfUiUPASNNvL7pASXLpCYPvukUgZeJYz1CceXr4f76",
  "key2": "2kYKev49oxF9hd6T7SPqPqfuGKUGkDPYAoZXKKC4jhXjisjrsfvc9XHpXtzE98BXdBdXuMnU6VvmzzAgihMXyzfx",
  "key3": "gugSjmTXqzrRx6iaJdgpuZ33bryrNt2H9oC6n3BYfP9WQbxU9NKWSB2zCZ6xdbhQ5fwzav8dhd5X4mz5EPJZjmn",
  "key4": "5dpKJvZYhi8m1y5DEt9mZgGfexBHrZCnSeQ5yeJHkNxphpTmhx4qgUNPhst58BLXYQzF8gGVhRZQgwu5PYwwSMda",
  "key5": "2r8x4Cb3WJPA1ztcjbjSDVA8CZdRfUa9vKKXMRoCB62QivrmQZJradzbXgTA5D1HpXTfpkfuuu5zbEfdzERDKKFs",
  "key6": "2ktjUBAfaoJqMYNpCJYSDdHTto7EQqwmJaBoH6bPNkNfVYfsnRddSSJqVCADbbQTBMhXvkZ5qjsAQbBLywSgJZKa",
  "key7": "2UFWGu3tAkmjLrWQVGShHEJZoVzwc4sPthZVDCqnki19rFvBMEJBjadMb4aS7NHMsPTeUvYSHF1DQapW1zy5T3rT",
  "key8": "eVEFYrg32EqomPq7dVrbopMbTp16D26gPmborzBdDdu9QLey6scaJamNDueCpbTDhrKpptdEG7bddGhJmh1qs4B",
  "key9": "3Hew1ZSbfsCuWBikwLErk29yEZLrnTgcpHjdLMNhxPJ8mEg84vXxN46YjZCKnkh1X6hueMKRQWuJmp6GXybDjJHJ",
  "key10": "5WP3DsrDEMVieRJKtc8rpkJJLHDmkb9BDhTQJ2sTiWt6HKAYr6kXzvuM5RKDU5UPP6TNi5VGBfsmBcoSNeejafVK",
  "key11": "5hfkzzgYJhqSZXoy7vuwx3t5n2fUqUp8ZU9Hk11QM4DoyZvSKraU2YdSx6AHhwjZ8B9gG5mt5ZsZ5jqizh15uq4H",
  "key12": "4ugQ7iECGu9rQ2SwaBJzgqFTNQhvPxWXiEiXdHPThQeP4929hCLULe4FeudkXz9xFt3dUhvkDZDmc2StazUECcWP",
  "key13": "Vjqcux8HsubBY3jCcWRViWwGv3PX9M4EnYDMH1GYPSP2shesULkG5f6i7bM8wwA91NoUkbYcCL6bdsZMVsGVncu",
  "key14": "4rcUJP1FSKX9rxxBrHk9etpxKpcnNrLZxAQQLtkZ2pUkSgEnWsfnMRg1JTAZGCcEk4jzHAWXFxnCvSataeJAPKHQ",
  "key15": "3Jb3JEMT6DzUrnxVSWKqxcG7QwuDPQfzrZCjeHtFKLUBd6Z9R5DDE6mifKngT33HFURYQLmxLVAhX9u1zRxNKYby",
  "key16": "3m9mrERXbjnnHfqUfPY86UgjeTE3ByWKMZnxUGyT2C3R8aLDMoBUkLBCBxKG3utpmzJgCgdDSRxZRwAgDiErWHSN",
  "key17": "5U1E7pHqdNpW3tdwMXAyd8Koc5vrDJvoBjGqLYuabU8ZXFmRDNSJtbVfXmkVWH6WdwXxCfyiu1KE2cgELn2Xia8U",
  "key18": "2hkwaf9rydoeCLcqWi62Adk3E6Zmx3K4m4ixUF5ixXuJLJFYhghwAZAKkSczaiNUmSQSgwfi1pNqkkbMrPLCxmGM",
  "key19": "7XGZf8ifUUjtSWLES3MCnFPRiEY2SJ8WX1Pk4pvZTmPiP5pyVAoSQDTpE5pybJiypMKW8rBeLk55kCSqf6tnYBv",
  "key20": "4WvL3quzay6azDj3mWqhWAAzpgsYEHcSBo3MxDCiouDJZmTBi2zVxq29xx39nkEX2Ahib3nBvVUPM4gv2CEEX7Zo",
  "key21": "4t5tuBRjwfdKxWQbaUJ9JPsagK652KHmdkAbtB7yj5J8achhwQgN38Jh2dyHs2dU5RpVtzxinR7BWqiy94UvamtC",
  "key22": "4of5KzuUWryXFsCLztHMH75EzPjGQGK5agGU6bXs914vUJiv7ajuA9DVXPJh56hcFw5yMPMD47Ck49SiXM1rMFxF",
  "key23": "5o3aXSvQuZCqmEWBEcVx46fmj8ysxaVmmHpXxYvfg4XA6cHKWUKr5fAVqdtGP1NpfbrLFAjfjReZAwZEPWzGAWmu",
  "key24": "tBTi9K7qqbh1PXcEFfXUQGc5TYALNEMGQZGEPREJqtWWkJH49pexSWp75845i1muutYJ1B48vYfwMgBRcG2DpK6",
  "key25": "2yae1nsr67A8dFgp7fupRQZ9pygjZzBdR5JaqWt5BV8JbirpUteVhUX1Dr1UbCCkdyjqX9HnhwQKASi75fMsYFgU",
  "key26": "q1aXmRtrdMCHwFn5ocZQiKNB3s2Y1bc1Jj71vmA8EdZAFvB6wfyVxZSgjCvyooXKh8aXP8bEUnjbvLH49FM2sET",
  "key27": "PYJWf5uUiSm88S5SXP4Raczem4qPvA6AR1tDUqXspsbZDueynrQx9KzhEnBcaPQMVTWs6Qcv3DhGuzVpLRxfcCE",
  "key28": "4gczDRvtDy6ou2VuBz5VxQY2xscSY3GcSjGe4p9TyNpjiajU3BdnH6Y75Te7tWMssixm9y6unEsyLKWHftpavZV5",
  "key29": "wvkUXeWgvxB39G7eomQhb5BQxMTFJZsQqbXRV7k3mWKndryrToDu7YVy1UPS8E2uBpPeMvLBDNJT9XqsfED24dq",
  "key30": "g7EyTEVsXEnffG681vTv4WWvGUbXibPfFtT1jfFcmGEtj4nuAuNTRNDijsKmSoZxKv3BVTTWDMh5LYhKh48uqoj",
  "key31": "4ZaBSgmsi8KDULW4S7Lx1czBapCQGLvjq9X8quPAALRXffu7YwbTAm8GXh7rHXu6FLLTZCGXE7ChEkFe1GEY3Z6c"
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
