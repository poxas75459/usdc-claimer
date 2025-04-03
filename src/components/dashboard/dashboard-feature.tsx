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
    "2BThMoc8GnYJdbqfwtpwLCAgqW3CSdcjDXZUVxBVfXW6VZ4N2wnF1txuCNAZpYwVVAhvyXtepScEkbF2fNvAybFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZAMUp69m8CTGwybXNF2bWj6VMQTMpn4UogAMz9sWL17HunfbxYb174qLXNZe9ScyzjmCkLCHM4dKobCcZ8BDFTm",
  "key1": "spjbEtQQAoeTvf7QxUs45XSVhVM86q9n4krJrEFGmzK9FdMXzPGAHc4M2EaozT8RbgPeFrynkG5vCVr1oynyTqQ",
  "key2": "4ZxmCDpznRcFaVETenG9KvpQb13dJNNDQRqGE4SsBVESRKHVYrudoK5fErJJckujqTkLqjH8FxMibikCyg1yVCty",
  "key3": "62rTvvka7255u7QKacdeWXJyZqC6LweiAJBbkxt3WQAERQCoc3G4F63dX5u7EAP2ynLzxfxRb3kiXhFYWnBvDktF",
  "key4": "2FtAgEQquBF6pYS6JHiYpbMcw1K7tSQcFJ974JfShB94tXjDB4U969jjpfnLLv6dnuyUZk2zpiwzCYxq18ALam4j",
  "key5": "3RS8FCgr7vJ9g2fDhE4tyNiEiYWKsU1z6gn9LvVkqfXPP7w6ZJfHocxvQN8VUcXWDs68ZxRFzpVWVc1eN9U84ynt",
  "key6": "4NTbbcxB2UzMdRJUebntNC6ux5yvMv5An21ufcUGCzQUhwKFW6ms2XzrXgs7uhoMJKxJfJHTr3nRHZhF7amZwmgQ",
  "key7": "2SGakZZDxMa5WyAW1QvKZR4KridYnCFbEN4pWXYj1KXzXERs6vNXosCPmCaQBtpUe9BwSsxBaNfP5t22gBfRfXLA",
  "key8": "5koavj3iEMxa8n285HRbAGkyB8Wsb9SiZ79Ss9npNHLhD5GSbsUMe7TmocTnDEqcbVEJPSzLsduAoqbwXPLCfMjw",
  "key9": "5G5akZ8J9XS35wCjWRbwRFGb5ebycvLBS9gocKvc1JAadqbY8nTBpTHbS7GfFFEFdJrwSGT5LawnFHYuXKxhYfLs",
  "key10": "4A5JU7mgkYYVUhc51L2QMa6PR5wGUETwJvtDeQqYeogpBNBkkwXCjw3CJzr7FQK2q4HFDKkbyyiq2CzsE3KjNUUu",
  "key11": "5VjwojE5HgUa2zgfXxXdYiLM8hUF26ieco2y42wqGEFfKCXZMQKYfLnNzmp3z1wZwowDswkLB7hQeAyqf2Kwgr9q",
  "key12": "5mteimSXcpL1sW3re5rzVzZM4b9v8wZhQ4ZAq48QrPHdTDi7Azg1RkFk5X7KcJs6S5nnfjxDcoDX7ug1k5icUDKV",
  "key13": "yFghPC2yHXzqTzfHnCVVsuxMYa5A7TKx7U8A7n3VCqB16FhoBywcPia5FAtZ4cYmwrxcELo4b4b4KiZTBoiW1eY",
  "key14": "4d7avhD4f8k7mHzJQ7eBNShk1QMb86vfvfTZt1oYmEQYMNR3VY8Ypbto5Hi6hsoLNCQCgRfd8n9SgHp4PWQ7wgcH",
  "key15": "3EwvkuTZUFXCrQ2dQLTupnBgRrJpUu2XxWT7j3PjuShkQ84jDqu13KjhPH791HGCGzK6Zs3rpmDuMWH2RokBdXR8",
  "key16": "h9JJDL8NjxHX568EqyHJhraSUEU94ME38VTM8uKhoEYPSMervwCnkMHXS3wmdq2vuJGYH5GCePDv8MiqHF3txCn",
  "key17": "5nt6U2bJU7VcdVGAXGnQ2BxmJKUrpg84pJQ7sCzaK4ijSDBoLisZMmdg9wbfGAFYDxrgmTAMTU91dDnm8Cd9ytqP",
  "key18": "28dx85kFmwtqvgdzsbEw9BzZWnBJX9Z6aPNmXEPjCktK3SJxXbTv6qx1DsGdNVk9cpeYNTynndqqFtergUAmeNna",
  "key19": "37jYSDzRszSNdnkJaarqJXHZoauxA2HYZ8SQb3iyXTv9vi8p9irSxaoW4Lxkmr8s6atpErq6jidRKQkBuZJm4ss4",
  "key20": "5mVPK2Uzo1VZiCywZaMyMkHxR6tXQQoXsai7hN8hj4iBafhXHzDeoZZDuzDHbbmeZ2R5xu2t7QnSu9gzAcwxxVk7",
  "key21": "5Ya4DJ4y4mMfjiqJhzJD5gY6jqhC29rhcZoajWovmfcQ3oWRnoz9FfZj5X8x5RqXdXJRAU7aFVpsXrnucFQPo5My",
  "key22": "4Zx1rd8fh8YnMAxw1FTb1fycd1UPo7H6Rjx4nt9mmrKLztAQm9JWdgAB5P9XXee2fHiu53f9GywyyR8RGbt3Rk4v",
  "key23": "3YFxCSSqqLrhhaMbMCNcVwFZZLN3G94iqnwbsFzDzEp4iXbgym7iJp99tph3Yf1P545gkTXbpxJNiUjKYKVWFxXk",
  "key24": "3P9uvBwWZGTAdQJWJMtscvd1DhtiKZW7tkqhKaZqvaF5mQd7WA8RWSjSQ2yqqbBG3QFQcmvV2VnPWQcdsG5fZqhs",
  "key25": "4xFfg7WhfsyKgtGmhy85ozaZKQjEqCXUfKU34SF6xxkehNgNTxU83JTB3DfZ2ZC9ti2eXLfLjBPxV4h9DCCVM3Sh",
  "key26": "3bLDymeewvmfBtuuh6SNQgW1CCFB79PhFZsndkAKJB7aTyUqfGhtBMke69R1X2f2aoc8Kv8XDp7jv3G84z37GGvG",
  "key27": "2gmpzh1xkXZvdJcYNnp86xxArmd9cDTrRnySaLJP5ZuX75h4xoX5vvN1GAKM1D4PbnWXdi3VtzMhQ2kEb99g2RQ9",
  "key28": "2ky9ZBDT5P45CKfrxbTGbguQoWSJgY9RPRa8kzF2dvbjYgNn17BJENpNnSpq7j8hnHXJZEA6gK89TxeSmXMdZm1u",
  "key29": "45EDJAgs5nbqHsf9mAf4goDKfZghPJ2TYLqVg4Yj8ponxHj4gXgQyZxwAe2EDUzPBAcWxoXrNNcoNTZj3EanG6u2",
  "key30": "3Jt9KYjAeZt7yWoHt2XN4ErvjZP8UqwuzQMmFT4J2VigF5E8bDr9Te8BPMk4wRZKUCevpCrzSFQ4mwCNJEERyquM",
  "key31": "2U1ubmxeLk3hAAo4EEkvEiyPZZgdEYPrYDEsvignXD1KnW8BDXByAs4Dou4Rj1JsmeGJeAhHSuYAKdrxKcbVMpwD",
  "key32": "67h8EtNPSWj99jf6TuhWBHCLj11bLZg42KrTy4Jso3qzJ3r7wsbmGvV1shjQXuLYtMuWPFcGVGLKLJLajP61VxRv"
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
