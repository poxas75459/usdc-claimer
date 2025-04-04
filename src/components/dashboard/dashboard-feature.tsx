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
    "4uaQr3scfmzwHeG8msYFCZxLxD8pXmiFjkUawWXQG1dAH882ehU24TzFc4QrtzKKEa7xVvDWmz4ekWLamfzvzTG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B7qmc6R7s1w7v3xQxH8a7BZVGqxD9NEK5PauLUD4NZMFGbCyTTxBxJFNEddGAFajbRK2b6vFZnzoYUjH25hwkWG",
  "key1": "4mjfZBzgtwW8rvhMiDauU6JYtAX28Pq7Qv4PaL9BUF7fdDXAGc4wTfNBTAREmxqkZkfReuGoqFscQg8pXoTepe9k",
  "key2": "4G74SibN8YSKsAXdhfbfThCZSDeFYM8K36oWqasNpfmpc8kWArPhNpYfBtfhQfRP4j2DyLBLvVnpRXFRRD6xKiy9",
  "key3": "W8Jm1U99HeT28NA3HAqJm4j22U1ZgMsUJBryornf5NfZHGZGb9DxS2xzdQEXCp7vycqK3YWyw1j4eKrcQeQQic1",
  "key4": "itSdLFLZg86nsd4Z7C1ftYyfzRmde64QzKFocRp4VDcfUHuv3EfB2rrqHHVUvKfnJkFcdk2cYY5xJemQ1yUAe2R",
  "key5": "4iBMaM7zwa6eSE9Fj5976Dh9RuYddFAA1Fbdf9AsCdN2T7EbYhcc1ttLVGQUDgWLoD8VHzAraohWnZK5kN7VxJxp",
  "key6": "3aoGhL9NZ2dwHvqLtmh2Ykw7GeEAHkM6ef64NAsfKugPJs6WECdkpkZpdSnozYm5mNQP34LPnW8RnDwBz41rXJuu",
  "key7": "UHPSCQYiuhuNWuJuwWSoAjFkZ3yrWnqsVuPdQH5YDGypGptAJGiwSTya7ddHxqQ4ZeiFULEQN728HcSYgjnnJRy",
  "key8": "5v4Xtn4WiPAEyL2eB4Hvw5M1wS2kAVs5axhb5UTREiRXbzG15GrENPxkMXFV9BiguChVjfJyQ9wCzXgrL62RPRZ2",
  "key9": "5CB6J7r1HYrX1ELCejAYRYztBqft5DkJzMzMsA3MrXGtV2MaaNxdKEwdzGucWfYaPomJktszwe9UzDD2hNkqX3ei",
  "key10": "36hfFB4LcMGbMdByUVXXeyDBrF5McubXmnd1mWTLbz1eQheectM7zpsR1QSchSN7EnwD9jw67UfNKwiLtCa13TsM",
  "key11": "2MCNaASWE9ZnApcCVai13PB6tG6EtUW34R6ipzgSjHcjdsy2q6Pwbsge5pz9vhyBWU3RznHagYDmZDrrwdZnqiCw",
  "key12": "3qFd1NSLp6beEuEEaP5pNxLTuUbRDUV9ub5wQndWZXrWpwXuJyvn9fSbKhr5q4JgJsFnQvxzz4hSGsmb6iUDkzeV",
  "key13": "2Y9wVVDteUyGNoykCQpuTA6NR6S49WTtjKc2oN4U6txTeaTVn2AhGXELgiRrHCzomAAkqCL4vTM1jCtuY6JJteUg",
  "key14": "552zryYpyo8j8Ah6BHA8qK9ysvhDpMCbCJc6cqba8v5gHdkMhLb1qsTWukF7iabZ49sx7yK2LvbaCoADwocg3ZDw",
  "key15": "5TV2J4YmdboiDDVwPGr9Af4jZtwHVwAHcEhmTjVYFZ9r81ktQZ8NpPuqM9PxLM7qn5EZK5sbg2Ly7NJXd9kE6Yb2",
  "key16": "2mWCnfYARHreiTwuwHPRXfCd6ssuwoiSvQqrm7vvzHvw4DPdzqrpn7ieV1BqcFcTNfzn89Z3iJYFYaWSD6VyN5Hi",
  "key17": "5fDreFoJuQt6cVfknSr3hKtzSXnUy2cVhyoVP5vbfSpCZB3717RstJQLiWoeMPXcbLsGisybN787nk8gWgQEZFTd",
  "key18": "2hQmZZK7YHWdEKxhH7FVaQ9b34acEwTz9dGXsaKTgXmBRz4vDjwZoSBE4NX2bXWkvAPATVre5icN7ZuxEjGhgDrh",
  "key19": "4Hzq4ZYxqBj1zckLxVKLWr2drZJTFLV9kabdawZ7YohWAyCQgPy3G6rAntJwFNt1iythpkdpqXJo8T1BerWaGoJU",
  "key20": "5HEcKyrBgmWdRWL9KppNvKT8HjetedtrYZQEDP3GHguxkTPEx7GjtrqLFuECy3eph4twMvJ2B4itaKZZUqTFRxXk",
  "key21": "3xZWbY2bRP8npd2pfW6mdKAoaqMqCVbxgThhhXa3o26DFEgTPD7fomXzdzR6XWDMgGcaoaJwLrXvt8gUH9DHvuLp",
  "key22": "4t9gEAVo9Q9BHGufLeVxzcrP9xMR73NGZpMggV1JiAbdDYHseSQoqa7JioeDGLDJjCtn4t6z6CgKNipNumVSgr83",
  "key23": "2KJWv78TUJ2PggwZXFB3ReicrGT4jSCGc7QjZUsehgu7y23F1jXN4Jk2w2EVvbHTZ7BwisjWGgQ2NeXpXiJXNfaX",
  "key24": "4mtkewstbjmdnG2KKT8JqAU6pNVNCmAX1mVYE4vVtNJC2UecC4uKwQw2LVXN82ZhLCc97Z6Lg7qHnQ5cY7XRYFTb",
  "key25": "4DHtX7HyVdMPrCBAjgryBaqPS5HxQoyfmfECXUY3qP7CaVA8BxzNdhuLwZeFadWNEaBbUGzyvK8KPSeCguiPECvc",
  "key26": "2GMvefhyXXLxtp24WPpunBBHwtPBLb5dFj2HjiWbqeM2V8WN7YLd3zjVHD4qgQ7YsXtEcHgBe81GbyXt6QdFQo4Z",
  "key27": "4iG6a9VroYQaKFnUs5bFRJcXy3jy3Duj2V1jijNnxg2G698aHmNJ12eEuW7RegPgkiwEKEAiKDUoPb2wD3YrU6C7",
  "key28": "4LZTCaCZQYBoJpLardbfqbwLWMacqq3uP1xfnhs7ZfbyTzhi6PWu4sg9t8FT9U5wxNk8omuhTd7YjQpECpRYtTRt",
  "key29": "835owsuYT5dKTwcvbHbEPbCvzeEhaeyV9VTRvAmpCzvf3YC8tVUCewk75GarZgjb4daMZFBNELfQnbTyAKSte7g"
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
