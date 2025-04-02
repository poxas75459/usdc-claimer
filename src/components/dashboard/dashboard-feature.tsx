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
    "28oDHvPs827v3UQ1eFWr25htVv5nXfxgSTWvZF2AcUWnYDZ5LfCtriKmbKDBLC4er3RdwgHqysQToJFzNmfYDcK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n9vRQZFimtTUrpwaeuxjkEtQ35dy2c6spoaLiMkKdmpNCEm2m8ZD3Eyy3M6GqYkm6vdkUyLftcxc48GKSpXrdid",
  "key1": "2CWNdYR6TExjbHVAEtr6EHX2fuXJU4QBq6fY2jsgYx7qmzxW13oDU4puDN33n5CrzBMxDXSNQF9gXNu9f3DeyP29",
  "key2": "3C4c1223pqqVBKY1NE9sJ9p9zBbP2sor16sPTdHFQNPaXuqZWPgVBRxSbkhhT3qvws1vHVyhPNkPJmMRrvzE3FYU",
  "key3": "2YNXsQ7eVNKMF25AoWdMP6exq3sGt1qcLaKkAyQTo9XSGoYCLMJTQzwdw567SkRKkPcFnZarZU2PRc7zD5d43ch6",
  "key4": "yyv9wTaXRtJBrPWikMaobkLj2z7EeChUorhttb5R7pJxEQd7cYBtT284AZzwh3XpYRXaE7xXr1DidgqPdEURLSa",
  "key5": "qr66ruvS6MyCQ69qtSQZpP33YAvchDDyYzq3AK8LQZS9Bao1RsLtY25HQCKfBMnVLHPkcEhPiUkx3dAi5bCAnvT",
  "key6": "2jeZfKpYS5XdkHLqJ27YbrKcpAiE6icAQ9VLhpTmavypihjrEb8MHcME6dH1L94Hjn8nwmYR4N3cNHFmwsC95CR6",
  "key7": "rk5iiphzhstLDg2Ebz2W2eDtVMQVyruTojF8SXjBpsM5Apbe6EQh5VJhjSx2pPvHGUW32prKyfzuAABuxTP43HF",
  "key8": "3qa7FQF1ePBU4iYjEo5DkzxPuqw26DLoXLUo4nf4jYwKxbwm4u2fPA5ssmg8t7zYngW9k7tQNTZ5doLLBWkNPnwA",
  "key9": "4MC7146L3XRueyzjo3YWPQVrqBkJr9YLxArDaF3xw3dv895txphuL26H6R7dZ47BZvPtzeaigERNQc8XjtLr3JEA",
  "key10": "3tDu6JNZLK3s3uiuhwGuCkBt45EsznGiyy9SQszwFG7dMBUi4cMDLq6sikQQNYWkXeWcRmF7mY1GTEEZNtfs6kA5",
  "key11": "5kP9CRZsPBhU7R2pCEzfngvtmYz29uuznbB4qZ3X5EYq3rkq13HjLRG3ZGqQK1HprxFizxHFjaZ1inqSBuLLwo8w",
  "key12": "5jynSDhh8wejJY729tR5bx5ByLhs4tX4GXgkwGfLQNojRDM6Z72L5NZ89xp1ZATCiSwzbVJZLTVYoa9kK1zFBx64",
  "key13": "2MgDDYDrSQP6LftvcitYjDZ54ZcQWiPkm4cKeKkpfktT5gePpYfG8SJMgjh2ZsPh7phS17zY4hsUvyFrN2SUX9ns",
  "key14": "3ZL6viKoBg5rJtZ7zsTCj53221m8t5LLaBZnJ1k8bFssdDeuRCEUMwoVXgPARq8g1hCdpfx5FeGaDPpFd9Ht5vFM",
  "key15": "R8MmMGWiLJGQYfHANDfmfisFb7NYASd9E4vsHGCsFxhPtB8bazf4xJKb687aoy3wp2ikon3swxxBpGCNGoX8779",
  "key16": "66YGgQYznFQnqEzyGHKmjvSH5uuNczEEiWgUYgbW5Y1fACuTCnuhFKUMG46Fs2EBc16mZfXagJ3XVVmhcJ95A62P",
  "key17": "3hKfN9GY4CHobeEJXhhmJnzmspb7MYa97DaDrRug1zztv6gFVWrZhwi4JAJHvmYjkvDTsjYN7mEH2CLzByR7jaSA",
  "key18": "2JQ3QQG25W7EoSBb1N6ZTLMkcawcFfcDqnx6Dv2MYzFY5fazhUQxckVuVr3EPaNSKJFFB72iTbmjY3STy55dzLYB",
  "key19": "2JPoCzWR4RvmNRuuo9G1DQty1999D1Cdzpa5Tb8Tx8eeba5fhZhCHqkvUyv6bnAGoL3HNPgukMv1g5puqLHXXtXm",
  "key20": "3UsSWGL9r3PGAzMU2ryHH4ZgNL6mfciqyx2zFRz2hQQ7bRhDKUNTtqrJwQ6qkvKjnz1yBNJwajTsYTd7HYfJRS1f",
  "key21": "jXURr4J5gJAauWwFq9qRn2jBFAGLciwEqn13PAx3aZnpgCP9SUAn8foondzLNcVd31DMwW5MqfQNC8H3svLsU6e",
  "key22": "5dQ68dgTuMWZEj1pE2kKyfAZcorMB6f9kY4nwXH115uKtKsvL4RrRRKcP7XVokJ3doXKwdsUkvaJh2Jz2ubsZzfd",
  "key23": "4osBxHobRrN9uMgZXNBXkdvDQspZqPCLV6z5b87kqykpnxYgPJNRXCuJhAHTw9seczXyEB18i2Jv5HLv3hkUV7iw",
  "key24": "3ADake9wAWj4uzyQsqJjtnPhpo78KVptqYHivfoBqvkjU6MPADTEkiybMGc6NHZcz5RciAdagWPihMBjihkF3H3U",
  "key25": "8fWRev7ckYfF2sy1qq7JjAQUYhpshDey8sMfn2phK4uAjBcieyMpetwcU865ATcQiCsLmGFpg793xYgFjyv5ABu",
  "key26": "5dBZZfza2qmjYtcfsRaNMF9DcuV96bjB3qhynuLfyNYqAakQTf21rCvmSHrcReyQvk89awotsNMNLiizLUYXuuD5",
  "key27": "3rSSRuu7knj7MYjJgFvvXx2pvo451ZecBP271knvsvHEbJybRyosTsYDJtA41gtHXxzPMFyagazGvJN1ReBTQUU7",
  "key28": "3J4NXYfVhWCfZPeHmGiCosqYyT4L2A1dbxfhJBAMfwpBNukSirkb8nVaJJ774C2FMgF5WVQBmAGfzVSrnb6ZseUx",
  "key29": "5eCK2vFuAybsSyiJd6ps512XNNRLWZ1r2RcMrjimoTzvgx7RnMyHE9NmL2bQA1DSeS75nwnUE7juumLrkFRUSrUs",
  "key30": "3eyBiyCMZyrdJH2sgaE5uTshCECjjuxskXZ5EuU4vmbBUx4CzSGykd4dwyFGqEVHrj8gu36syCjWZGGgNdb6zngA",
  "key31": "5VXRM3QX5FmUw4EviQaU1MhRHHKbzQJ8hj4U1FiAVA5MNoBxi2PPmop6ry1teH6mKtDhZWt6GPME77AsYkgmuxRE",
  "key32": "2j2qtNTzDBPFeQWtfQBqPt5eyjzM6apdNh9L7KUHPdSyifoS2PQhj2eAzvFyC6S1EpBQfLqRMvCqzZgCLoAaDTQr",
  "key33": "3pXJTXzxXM7UYGrZMzEvzryfnb3tpp3FvkZZysYTomw1Nkkf9tJBdMUBgsqbENhhkSm1nk2Y46wYLLhXhf7fQZvi",
  "key34": "3GcjuNA1NE918fxr9x83wBuQPqSXah1JNgEoatjphfrtnnfjGUepPWr4W8T6RZmsbqBS9WpJEm7bnJXWg5vfs9F3",
  "key35": "zUF6Dt8K1juW17Qy6Atu6cv95CNzZriJSjbfNz4V2LApgY52mjiLyBoGMPZzbGZy5WSBfGQfXswBFGGZEPs4X5i",
  "key36": "4TX3YVa4HyLTUbSfwraAM8rLF1Kj1hEUgKqAdYXzv1g3XmN5DjsYooCvzbCsCFJ6Xv1W77mPebvsCFccwfAxmf1t",
  "key37": "4JeC41V3S6427Yh3GvUQpZ6Up8cVxGCjBUzKh92hS1Gu5a7sJefVsvFiwHwiRzyNUUyJExULh7d52cyaq91CxdZY",
  "key38": "5T6QsYHy1R63NAJPNzq5P5CiQiHbmVWPXxHVkb3XVL6YgLKtXaTzdasv1nfVP9ysUo3FXJiPFZCKztdjQGvsj3Dv",
  "key39": "3YGTV1LLTVdByWj67z64vg9pNzEHoKMdaksnYA3YtQTu8uCoENNHD5HP2dFJU9M6Z8Uyep6fvhuBa3zn6LbEQ23c",
  "key40": "33akx2fuHPrevLvTZVyoWH2YSyj3LGVtEQLozm8ur2bsUYknj1GP5zrdt5QAUi2gZYWRvx9atQhs93LeroAScdM3"
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
