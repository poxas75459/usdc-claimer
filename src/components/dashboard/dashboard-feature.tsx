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
    "2X8m6R83ZE7gaqWswQNxbHry9pNsobHev7pmdbXGfnY3L3QZ6TWUntpPhZuHXGR5DAK34drDKB7QtV3Qwtm48duw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65CawQQxaGhXr3ETWsyzcCqX5JLGtQjz2sZd4nuSGrDXvGpSTFm9tMzFzdonZYxk3RakCFeLEPksQDP6wG3sJaYv",
  "key1": "3wRvUv6g2CrQWD742PCrjYc8Be1yZntAyPh76DR1uqw11PVBRKfiPsE6ee8zqQqiMMoHts6konrU8Cd6vzZzp4Bm",
  "key2": "KKadspkABhtQHChpJJUmFnGdd6u7yY2c1eTfZ4BNbNm3VAREWBUBm47e1kZDqscyEkfJqrzqHhf8wpFrdvSAGmD",
  "key3": "4st5dHfDuhPRjJawkQzKXhJ8uXSvLbhBL6aQJt523aTzyXG7T3euTyecoiXSGmNHYNLvdCwLG7DZfCGAYxLn3oH1",
  "key4": "29KcPuP2MPMUHP5PTmLwF11wioSTZQdinUE853eex5UVEX9RvKEMd7jwQLUxjXNDoxmf47MJinNHm2Etp2B1V3gu",
  "key5": "42jwNcxNEYDFF9fdTQ126sdH3S41SWkyQQWRKUo7AEMEXm32yQbvWGnjGLdJyQAVXdNAE7epA4RMT7obnvF8PVFY",
  "key6": "7hRcM7sHyRHV1qqn7kcror4a4y7cTEhABj36zKmZfR82qzvp942ejQUAFpMDogd9NxxdtMcXu4N2p14i3DL9oFb",
  "key7": "3tSWZvKYiUrFwf5Y9CXAyrYQU6EsYNa67Zf4GJuYHRrsTPQsL6DGwX6H7MWKocMCW3HUPM1eEnXzT3eimX1YrRhD",
  "key8": "3d3uekrYUsiGNzcSWUg4YeUsPJFL4pjfJCY8w9zzzi6ZYGqbBdxh25zM9aiLDrJXxcAdDcPsf3z1YRbaBUiHzaMU",
  "key9": "3rSTtr8VFVb6DJySnNKnsLXveLDwXUQ9XPRUeeW44bVuxxnW7yvy3wKgVohpw5FzBsaqWWnQbhPusN4YHei6JBaS",
  "key10": "3ymL1DhSSqJgba3Ee2KYnhNgcx8dceeYfggfNF2TsPik8iXDi9sFiY8sVnkoP3vS22bcHTYhNWaHtrESMBGYKmYV",
  "key11": "5zhjGKt3G1sJGJJ2mBzhFikdd2qsfDrH7wF3ont6w5m2NBmpV3zKE19i5mv1jJ5svLPNNvLH6keMzb7nxmESc4Pt",
  "key12": "4JHz7EGV7wG2i7LTKewcZG3qQPxS4sikHgUpiQdQ9jxh9vAwzakPJxooot6hQ44KmDhtRr59DfysvQCCvdFN2Gt3",
  "key13": "3VKScHXFcmt92p7J3NEdMtqMzSi8bMzddi6g8c1jV6iRiisZfjbhRoZvytqHX8L4kZgpEJsaPuNeZyBdccw7rbMq",
  "key14": "4XWoFYTtcirSZjSQGXoDfxYBa1quP2CCUFrT2X1Z9c1dRohv5K7ZDqEuJD9svTYGJfRPuJYyMzqr7BePYrznj3z4",
  "key15": "5HMWJMp7GvHac57feZuwb8mdU4UvXFPAygYCXApPqLUzc27scmRGokp4H7pvNmHxnhjKps7NZcyCxzLvcGmrVNdk",
  "key16": "5aEaCA18TXJqtayLFG6ao1gkBym19DKSNFbcA2kFA2jkzBZyBNLde1McMKYj8NdscJkfHBx7ZWVnpYetQ6GCT2NQ",
  "key17": "vbw3D1SwKdJgJx1aGnfzNamnLGt73nd6TdnHUuZ4Hk615j5nT1PortGZbXo54EPFmFXDjE2hJw3zjUuVKLcoZnF",
  "key18": "48k9zXQM2C646TZ4WgDRp1BejjRTDfY4d5JQXETWpm22d8TtJDuvjHThm8tiadYm6enrdo6NQ6PDuwHoPXR2PGaf",
  "key19": "5FPzjRj9D62BMDH3cC9nkBL4F1bnEKnGKZbcVDLLbF9EfsGAK5TYHKVBAD1jtThT9Qee3imEdMjkcYZMHTSeddD2",
  "key20": "53M88bKMSQimU2YP9SArYFxTCVFhJbrDSQN8YciGbCX5qUCc1diwhRr3RVhqzKtrVJnir4RnLuf29bKyjmD1AKcX",
  "key21": "2N14BFpW6UjRE6mcYwjdMTvNQN1sVxCFnjtCBognMixW2a9mfrGP7fb6GZy2TVQrLkPTr1DNYAM6ya3kMCmPKmwQ",
  "key22": "EttGmc1ejFQpJ6KWvvGej69B83a6EkkAiioLFjcTTUKxRcSp7NtqnRn2rLbC93qLMHiFt9k8tkZ2BYJFJ4K9WgV",
  "key23": "5hJ5zWTKbug88eFcSBpppe2DvXEyjgM6uQCJezR6p9ihs2wcX462Y8N6LFbRKRMsEiwKmWVK7xg41SsSgStPCcao",
  "key24": "5qsqV39pCCewr8iKmqAcXZeQse6eCRjxhz1iFkVaKNKSva6jRtMRKSvCd6JYUfRYaqNZC5DhpsYr27CxU3gxD96r",
  "key25": "57B7KQD5nFZiQxM7SSMN3KE3dTWEJfkm5XYQvtu3woXPZz16WKVsoZDpFJLLxpt1isgAUxq5tnvw5HePk1rYnTdu",
  "key26": "2i3QjbWTvckzkSDjQ5kEHczapZNLhHsm7QqWNiUmNfp4Uy3f5LXJK5srT9rSM3TKuMMrhsPYCNXrdmxaMK6bgb5",
  "key27": "2aQWw7QxxP7NT7erSF5xi7NNP6WtwNvzbzcbHrbVQ222R5FayvMGGR2Z3ZTvW5kHYxMk3QDY4UMmeGoUVuxLarTp",
  "key28": "2CvTxKGRzyHGnqQFNbYVLxJNBdgnaf6cYTbMZXQ78cQR37zJ28XaUCe7J7nV8rAa19FGUe3cHmGt73Pt2F5asoaW",
  "key29": "3bQqSL77KSAmqFVMNjxzSvh8wX3SH3sFt2FDSRHYVaMJL6KDDA6S11R5i2gnTzTyMJD1thmdgbWCa2Ma7Uo7v2Z",
  "key30": "2Nev8WWgFhxqAee63TSKurCZWa4iF2czq3rNqq7n4zXEc7GWmYznrJYSSsSevWV1ZFu2xV7cCr76osC73iabt7rw",
  "key31": "5NQ8QFd95kbjk3qpbcNgMR6LojNQQ7GpcHV8TqhoaAz1rT2HbCxoQ5hg5QZEmPBFtVi3BhFtMyromHvTSaKH1jYn"
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
