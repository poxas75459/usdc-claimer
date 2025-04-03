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
    "5kX5BaVSmB4MZKaz1FNJiCXHJ9HyDmFn8WZXYHdXzTVzyLP6Wz8n8GXTaSFBRCz2q3sC8QJ2FCKarWuvkFauw2eG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W9aF75Fv5twx7roAsTDCydEaaVtmLsQQaWv5jreZqhgUySFHoDVMQdz3H2KTsj1zys6gzF9RrqZipmYeQJ13ELW",
  "key1": "gWyUbjdYhTnhNsJoSVRvLyCcfgYH9D7mR47dsGaZ5v3QLi3arxRPQBvKWeG9yuegbNATGBAvWQsrKbvGnCkqStE",
  "key2": "3XhfLGcYjmqvppXKbU5dA28W62Ck96tpsrRUKSxRwEtxuQuTC7ihFJx3fCzyfCPfKvYoJis2mNT7sDAiUfY3ig2G",
  "key3": "2HjzdsQVxUCdxzjeQhP2nP6SaHx9An7yiczXXDSitKeD5MmqmxzcDDQN1hMzcRnu5W9KCb9fZbKKGCUtDTTtrRND",
  "key4": "57FFA3yFxsgVM2bnF4zN53W53FQBSBzbWhWL66Qo4CzW5ohhLhyqDNKYkjSxSHEFVXAnPXFzwVcU7z4Kk2KjUUWd",
  "key5": "3BFWAqcQKmDee6Bzmt3p4u5yyBHpeRzyZPrnyEk1P4Mk8cxe1MmCXQMMGQ5CgWF6thuszyYGG14VyEuhZuWk9sRz",
  "key6": "2ubZZPFsRDFDsosrrZpE1g63DRER4LYbhFNVpc2cgNgLYFdsLTaKU2Mj2J7nwrbxXM4oCCwJ8Q7bBM9NYRodUHDD",
  "key7": "3bxbC1dJF6WNZZ6KLi8jF5j3aeihBepY896EMRCBpM7hVaU7w7V6ppTfM6MLTfmkxcMPsNbfL2h3jS1YyqdwnDEa",
  "key8": "66aWWk3YNWXjj8C18PfH7kY5A7kzjGCUSaqcN9Y8kmKeUrTatiDjnVQ3rYf7wbDErvjfXZLdVscTmRkH214Qsq9c",
  "key9": "5mqX2Tw8zRZiV8dmfWkDpEsgNLfLqhCAzHNMGJkzbUmi2ddjTgQxYVTHjkFGTzoonPnUs3Co989FkkNzhaUyJRue",
  "key10": "4KtDH36CWSCmmGqRvcSnLFGFVnjwhPaa1ZDU144UNQ4zEcKizgUuywdBLWFcgf8KU4XgLsdMWHuorhb6hDkvFCZE",
  "key11": "4ZZB1wUumK8yHRDvK1vH6qxwuEbUQof4HP4pe7nPTMRHDajenFCtdYRGZPbT7ktFdtpADP6m9RGcCFV9bfNXUcRc",
  "key12": "8GX1haP25g1WMbamDWjZaSaMGXoKjZUwXtfX3JQaxniUBDLB39s2Gcp7cnn64ckZmAKqE5Yat7dQSV7cDvNFrah",
  "key13": "5HRJSM58s95DbWw1ea733DEhepMXpbwRGJRbrGpnDmxfTkMrRDgYAQQLKL6NKQf6jyTTp7D7AftiTBLn3FaHfG8f",
  "key14": "DQksduagJhHnyk2j4Kvsu6fkbwwgiXWvTurQaQwD9TQyYLBFsWS2HU69cwSEK4nQjfTx6Xwz4h2mXDbD7nwrNSy",
  "key15": "VK5vJ5tsPb9Q79Mpid7HyyLMZPNaWETwJnse2u4bHL4SQBWRYuSCY3pxK9PhSgdSvcVm6UcdHFx5J9tBRhAHo9q",
  "key16": "2F1UhpZkUoA73BxVe6gjr5u1nyi7amXcgQUcRLkmd1fuRyff3fkVxQ4BCmLUNYYg75zaBedRhhJhpt543aLsAVB8",
  "key17": "2eW8ojYg7nQW7SbpfSEKamvVY72iPVgskrSCqfNnQ9XSQwedSJSPa48tjxDujouyoTPkxFcby8segYv5wiasCaDM",
  "key18": "vA6LNywNwkkEEytoS3JqVcvoqKrfkaFEdkGKPNZPY2JzRym36S8kwVUxvwjLsfAwBvuQpDnnZBX6rEAdQSCLJ9B",
  "key19": "43oTDS8uyXnNiQySAi324tpauVWHogP7mSsmgxk2qWwQPfNELTmPVVb44McvWCDPoFRKtyj5c4GEYG4K96M77E4d",
  "key20": "24Jk1CRmzZQUqQiC7mrr3FGx7yDYMnKuv6uwLaD73gSvMVHSvJfBFvLb53ySDsh2RnLU5S6kJoX47LGQ5xLtgk93",
  "key21": "2pW8e5VFSjYQA5TUaexkRsdsr9tnSkVnTJ1j47P9PtZ4En5iBi5EqE1Wb4DP5rTExu7JjoxGestqycpnFLMmg66a",
  "key22": "4NAAeCDfnBeCUochk84W6DSNAWgaabfKQikuPqZQyqssV267jxuLdNruQmMRAHxGaNHt3eyRue6B3eR7AKE4Pfqy",
  "key23": "2V372pmVT3MUaXyWhxLJaZb5vX66DQSB3R85WkEAkeKuDZZB7oStQFuHgomZ9bRq2VYPZwk7LGc4ePNXbXsGoJPh",
  "key24": "u8Hh2UT64Y6pEXbYoszHxu3tRWRr3HKSquLEgLh83taFohiM62UiBngos6sRZvhip8t7rKPvJqKQRN2nTgfxmre",
  "key25": "svnAzxDuALJfaRZgEuJutJk5BX6zeemGsHaQz5ECjdjMYvGKnmXYfp1kppivhnDZfmTtq1XpeADmh3cHWWYYDUz",
  "key26": "4C1ptwNkt8DtaLuSfKarxU5hHZksfwqdzdmkezhUwT3zq3n4uUNT6SWqNCpxUoPjHN9yCPuPoKmFzGgcAvBXzibq",
  "key27": "4Ef9WWDgCPB7bddTDfBcA4uxA6fijzyR36JTUZeN7jnpNcBdFWRKhgVpqUc6cD6yC5bAG4HKqUgAnvDHQqF7Ft7M",
  "key28": "59ki18ofNyDGkGd3U4Xhv9i9ELGNhdKhq4jnUnEuYgsLpaddxRE2hUxc4Mkgsk8mJrr1hXVZLEqxuDuCfgByPvwc",
  "key29": "4UroBrzu7SJKNWVB1oF4CXrF2qUQw3FBQnY5ksj8kEMvGffQrDE6URF1MyrDDKBrQEAgzq5F7yjbFrPcjJtx55XE",
  "key30": "2daKycjD8W8vhaaxfLvncvTefni8zwwhZSmW79YNJin9ebvjJbnz9WRfBSKtTnpweiDk6WrqpypXkDNHBS1K91Fq",
  "key31": "5Y2Ro1NsdDxqAZvbgrCZRsAxjaHaSrp26p5NGbFP6mWairXx4H2VghNnWJKwhEpnEDsEeGgFrhJEo8EHm7jc3tAh",
  "key32": "2uanifgPtwfcNdk7ZNysEBRZKeZqEXzsSHV6peUKFGpt4pHCV56YZfFxLWLdvfs19TKENGWfZEWumFWR1jzQJCt7",
  "key33": "4MyBv4yfR2Pr1FMqdJHY3FPE59Ka9gzvqSKbbkzq63zkXEwS8EE1pfQyzUAiYppX3D9UrVy8LkZyy34m6DwoXpqr",
  "key34": "XtTRBZHh2Fupvg7HGvjLNTtjsnqcKtWf4KkDmhC2cffp7TzR8v1HqeiN9ynFJLPob4JE7Mi9HcjLQAEo2XHbKvZ",
  "key35": "3ka1hSkfFmFW4WG4gajawJK5wx69bbyCWcVuK21vVUG1BXpsTFKN6U9D4Y73zyMWUE6LTdtqq7uDBhC5MwZ4z34F",
  "key36": "2H5ERpEaJWrDxqXUMoW8kHWdJEDxBtvkDZdqw5MpUcsjqvcEFs7JVXcq6X4ku5Fi4Gx9T19EmjEk7dN24P3VTKK6",
  "key37": "3cdTZdCxiTdMeVKDeMS9jmipJ3af7X11gbFgHuwwnZV6GvmUbiGWNdSaaEAoGVqbuRJS8zemYnxwceGghkKF4CTg",
  "key38": "641ZMHRxFNUMpxEsJ5gm2MUtLvDg5YAPapFE1ZsMmQj2s9336TNg99PWvsSiN9XxQLyA8B36NCQNHXwQuC1d27hb",
  "key39": "5qZ71ggKccFRjvjyoD2yJGRCpC9rtXwwKdycfUH7tMEjpB55gsvzrqLRUssf8Gu95uLY3U3rmfpd8s2SeXzQm3Li",
  "key40": "2pgR5MgDs8UquHiVuH7o2j5STd9FU9asYEB9Cdj3jdhMh6CJoRcJBvpkN6MDUsSmtzZzq5zptToGqsJNHx3g6jx7",
  "key41": "jJkpkSyyxeXbd2yJ7iYk8EyRUvHsULUqo1gEV1GZySkAvJ3pqTCPmDMBXF6sr3zYGV8dFsoivvXhXeiwZ9eDqYh",
  "key42": "614jHkuPwcGJeoz5KzDB8TrtDd6yHac6xR9WtCX74GtJU6YGybc9hiYq99ChzEdCBPVtB8RdWJQ3B2cWnLySA1ag"
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
