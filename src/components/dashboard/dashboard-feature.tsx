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
    "2yC9NEsExwLNJoSYVKZ1pEXnYJst2vaXhc3xXMAnGECiDtKy9oErGmKFsJm2N5zBaHWmsjnNmG8gqKKbPrkvfJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JE9WabxXMpp3NkonnGuDg3H1dWgLVD1HviienCjXcHCTeC4gqbkZPqdxwPv2rwioHGyiapDUkuFZ5Uci8SFNg33",
  "key1": "2tBypgggLfZnVJwDG6BLSYyCg3G5X8VrMpBXNoAZLcQe8BgPmyvM7cmEufhjranidCwua8sgovYXAKKgfHBYj8DX",
  "key2": "5Cstc5kzaSDU1UY638nfSodC3zzQcWsdYJWFLaPWeMejTRDusxpidpr1t9P1aK2YJbursHkf7Vv5oYbw22WAM8gx",
  "key3": "5YQuPveiAQNZUUubDSH3EbnMtEXHY9yg9RnzxM1D2rwKUdhr8Nj7wVo9fEuDb65AS9VsesjBk2CFtWSPLNVahVBD",
  "key4": "KSEaJkdNSByWzmDEaGphRpXBUVwz5XZu6pbHgch2UWE92871qEzqYt8VSautdHQZLaoepUav7hX7VMWAUYep1hw",
  "key5": "4axRFE3FzzRYdxypgUZ5P9TQqGYjYpYeDN9Gzymy99MagVUnMM3xJsWsYjrqWVfGvsjUtmiUYBQMbakA9gGJs4w",
  "key6": "XwaXpXYXgJgVzHxhSX74HjFfQ6xVJHsbtjqL4CMifqhWXnSWetFG4yFBz4xoVE81cFBb99GpoPXZYi2PAxNfCJE",
  "key7": "2MXjxVhotq5SvMDgQ9rse82FJSKNkxL1THv7SrY2wFvLxiALwuYbRFxKo6pBDvhKZ8XxCcTQB8MFr9BhoCnUvTV2",
  "key8": "5cZ6bKgyGubov5B2eNT4WiYVwKbi2YUtWYuNPascgFJbPSaoRvsgFTg4kaQ9VryUNAt9DJagJM3BQN2M3VNGvDyV",
  "key9": "5YMRRA44Kpq2a68xK8bmWfvzcQMJA6CzwiQWLdgsxTwjGxxXPuELHFMv93VeR1nkHiGJoQLx2t7NBqLruQz7GDL4",
  "key10": "2rZFvg6KFsSQmjRUwsnuT8n6HYUp8J3dQNLfieuD42KKSpKGpKmzXBJPmcQT2hdMi8ExnaxL5QPaekUxR1NK15Sy",
  "key11": "4gUM4cNhaG4J7ec2VeUv5qcbhBaU3sarFyphjq3ehRrfq3u8aq5Gbk97jJEcv9neF3U7ep3bF1E3rkZeVdihyuWT",
  "key12": "4X8xTgPVGruUXmD6qG634djkDkeYq3AkKNmLpaWnBwmaaUc8HL7ZRbey4QPh6W6PNfNXhCvjQVunmJibZKKABiZL",
  "key13": "31DyhR9Rd4BKqsCThXc4qGNG1fAYabysiNPxbTvw1mCSFtiFG2nnnoS6drjRCBufMia4brN3YsjsPkusMBsj2uXd",
  "key14": "4VGb2pfJAaCE25zqvjAzeGKWDUYYUN52BsfxBKBJnkXKuMwD92SD8VcAeKDmSBdVJC5GYYqfYYYKJzbzuPnLdG4u",
  "key15": "4ncGhDF78kkFTGcruThybnQXCrKbda8dHwQhQ6SyuzwRye1TLN7y7Pj3LTiKCSnVf41M3FWpBE8P6vTh7VsXCU2A",
  "key16": "3PKeqGv6wK1nW76KERomfQpAXYXg1xYTuFAvVrZNWWVeASh9USTQKxhuZwTYbGHGH7CyD3DmG32XEgoAKKKCQ6aP",
  "key17": "49XzdnXiPcZznEFN3MhjZZrg4Ui95E3CUrLzDHSwJtLkAAtJ3ju9nhe4mTLWs9MMx7wwjo2RukDyAthFHPDNZqSA",
  "key18": "ciMTPwfQ8Vbs1JPh4SRhaRNGzJwPRSAJRkCkidaVntdxnvDuV3BVoEEKwKAQEgDqiQk2U2gCpXtvMs6nNQXGWkN",
  "key19": "2VejPRfkRqbXPUKEc7CHyDiawarWjF9GMvUEP7iUrpPnLtdLpmpXAbRbwX5gKbtpEoNypMgx3LnyZT7zzS5okqTR",
  "key20": "5yfvZXiDzCBHthL4Apk49WA4fikGvDGoKFcRtNJojhnt3giua4Rmy2nWvd8cHvTev8Jn7hPMyb4YsbZNr3LYFCTd",
  "key21": "5FeN87CpDyATrvz4UyNdjG11JYqWqH3zNTtXvBfCwZUpRWoqgw8zsmkUkk1w4EQwUZizebZFsHvQNFE1CnH33oYJ",
  "key22": "4ZZy51tncZj7sswWCMUQMuRdiSxXQAKZvUkihMBN4S3uMind3CrkEUC6Vtu5zkLUi4dz6VFqWRBvhbokiWCZNgTc",
  "key23": "2cBoRAhsk3f6X9cxfdbu5QUztuNqAc1b4zbgPUVdjfq5MJsD8vHycdjU2hWrfKvmj2iLtQpFWHZV36BYcFyYWj6P",
  "key24": "2ihDkHrM5Vve1MBqRqFnrXkttSbuHrBff64Jsvjo73KanvAb5H7MyNuyBq3xRRCa8PpddZF3atVaAxMivpmNgHNE",
  "key25": "dyv8Yf5K3vb6X138nHxQNgScAknbKP68mNg9Jfdpm2TnCGhdWPp82vpTeM6NbkEoZEGDNWwLYWSjPEd6rkvDHTD",
  "key26": "MhttGiihtn4qSnisYTQ2cVdFCXHaRAVEBBxsvR1ZZneQ5D8ppJno61XGGZBWCkpxeY4wS34BvSrVSxf1SrM8XpX",
  "key27": "59Ta2XBKAiPjSFKmvL7rLWzgBeB8DWpetWDivNCP5G63UfVaeVF1qRuht45Hnxsejb4iWJTJ7zKetLtbxmbj7ic7",
  "key28": "3YgcAABndPQjBS9peCwzu2b7QyNUeWGAJMppNsDpPhtxm85fLfcYBvpEZJWfDBefzLFUbJFnJkaqCxGEmts3CbPx",
  "key29": "UQFoKLHhXeWkhhN7z64yFzGVvS6Yqt71dj69VY8qMiutKYTxf3X5sbbwWKqHKCj8qwjMgX9TwVgsrAN1R2KwruG",
  "key30": "3tXcaNmuZsnt3pFmQnN3dfpxXuCp1uGN6cxZiLGLv11kVJFKrPQrwCVz1ExmS5i8LQBJCCoctCShpmTDaBrwWg9t",
  "key31": "8w8Uj8RCHfCbnGJjw99YNtgb6wMQ26SYTrBMpF7nCVUxBaFMpHz2GB9cUgHbEiGXsCnrbDLBMs9KyuLFhMGUz93",
  "key32": "38vPTafPuUfNRde4CNH7yHH6LWSNbgvCeD8Q2fVWAz2gv3zBWwHYYDMFBMnD99eyYSYQALoQcFytE6CjTba1BqYv",
  "key33": "63E2F5Gb7mm3wTbmsPbsZUPgCjdKu6eNuJFViRCG6WcWbGBDvoSvW3LbraYtjSG9vWtHZLoJgh7S5Go4StQexTvu",
  "key34": "4vvA2ZzY9FB2bjFr2sxsa9LXQmPP2u8ZhYHrmkCQJuMibSP72Gd5Vgv79M3SJvgLEfkufCueQLwrpgpScePzfVAN",
  "key35": "2bouceKhUw3MhwFUNPuzaULTMnxC47iBDXtYW4xmtvEyQXvqUTJpGnDBhWD2EEXyRNUsXujvYzPX6yMukECrcCEt",
  "key36": "3DHqZ9kc3kmTWziNfwQWBVrjDYSM1C8oCvybkjYmdkXHhzpkgVCqSZqLWV9TK2HZTB39srHx5jTGZk647m1N4nCk",
  "key37": "5m96AQw6K74HpV9XFkwb2TStFp88tsa6LdQraTFGHNjkXHxGwZvBaDdySYANRYpQfMgzxVUqjYAyaSvV3FyWYttQ"
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
