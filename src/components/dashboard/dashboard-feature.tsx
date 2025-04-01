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
    "37htxLy9Jgqgbdtbt4dfjeMHV5zJ8mkZgGDFF6Zv3sHFb582RamoqkFGfkvV1ShQef1XPeSgxyKP3e4kBSyuffNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vMPKUsMus93x99FYPbrQ68bRXB8Rv5euCTaKynsSC2JXWGRkLm3exbXFRHz34cEtqxBuAedUKFF2AdKV2eakeGC",
  "key1": "5t5ZL4KFtb8jtSv7mFNMeE1Y1yqXLypfAkCztVdP9Tkr4cvbirEKpZmbSwZfxhLzg29noCz7XtJfX1LmZHs45Uqx",
  "key2": "roM7NJYL7M8fBRm7Qeh348ziyeqQYNPrhxNky6cNckK3iZFQGTq6p13SN9SAkySVN98wSXC2F6zE62RQtbiTjCL",
  "key3": "iMYYqwHKExrCdbo4CZiMvU7UQycqR9dxo2JPv1zKxShRXjhdidw9fBivTC9HctMqviEmZmBTUopPvertNVJX4Et",
  "key4": "qc7PpSY5KNGf8e8bVhqWH1xTKQxdB2KqehAsRKu7S7DD4NebKHpZABxPCQucGUioXC5aYA1BFHUWys2MsJ4VRxQ",
  "key5": "4XRbaWpWedeE6iuCyexv8AJtX95TMhJntvqtoPfPwRVETAJtY9dD8jQ78YZXkma11rQXXBJqgrjYdvESgBGVr8gB",
  "key6": "2RoYXSNCZWkLjjghSbGWUYMEHpdMfbF8znpGyDUMEz5mejvtZEERu1RvLH2SxdZTF8thHDYnymhWyVHsjx2jCBDo",
  "key7": "44DudgmXucgqycYAxCHckMwc6AdVnhfjku7VhCB1siCavnfbxuQF6Zx2NAmXZCZ22v3oiJ7LRyrzgZ27W4YwEkzK",
  "key8": "HNbnMeyPSnc5ESmPwB4a7LEjZtwxvV8uPkv5fAUe7MUBZLpVJzMjXMjTPMkcbrA3fysgiyaqvFZwaHwzeKPAr55",
  "key9": "5mR9SWxAXjEkiZyfRaKnjrTkGzHg9Kc2JtN5ZMN4erbcum1b2omxggaR6m5gks6wDMbNRujVVj3GV81nky43Ljkd",
  "key10": "9et4z9Ya8CxG3wFJYQReMeHa1R6h6uSJ9rCaSFSVoSDTHorPodUHPVBuGX8Gm2Qy1LZEcqpsEBkn6BGM7eYj6BL",
  "key11": "K7BLtSZF6bTAt8ZAY6gTNo1MKgKqDq3NyQJuLPsTiLMvF3dRdHe8oTQgh1nQBiN2AtQX5faR1UMi6gRcuFFgaks",
  "key12": "5G92wUXi9zN3YihkLKbvYiC7ud22KvD8fXC8PChgnxTjW3k9dWAqS7zAEdrEN6j163YE8rkdzstkQj9N9jaWUPuW",
  "key13": "5bBioZLTcZxwqE7TuCtJ2SufHn2EaQHScxQspeVtyAUwmvJmfxWrPeY86bFxvKziArpWCZ9U3qGEjojZ28tXHMEP",
  "key14": "3tQ8vMVkF58sfhXK4Kn86rZ9Qgwmxu7wTLJkdYN8tkGhzT3TVndzQUUTp4yj5PmWB74wj4L35V58L9b5xwq7kvEf",
  "key15": "5jnWiTfZDtr2M7f5iR8ozKmppkH2FmRFGZ1yKcxAH6sLM7dX1LWXJzpPuTJkpwmiJzPfy9TKvyPw9nUcUpbXJMCy",
  "key16": "R3hJV7JbLEvKZkxDg4KTy1hnmgPCV5Aq4mbw1hPVLEgwVeW5Tg6fUGM5vAhFt9xRqhBYY8wgU6g3sXWnATHhST7",
  "key17": "5fLgMyJBVytdRVLs3TqG4YJJ99GYUC7XttWM8vU2eWfiDwivwqK7iBx3kvrU96XGMijpD99rR9q7Cy62cqKRZpH1",
  "key18": "3LkPvMX8bFHzHtyu4rw3jaWjzAUB7UMNiy1JRJEBvYT5Jr9oBHt6HGmbm4Vddf1wG97rTDg3dJDgrpn93LN1mHXT",
  "key19": "bLM8w7S7Dczch3KXzVEKESmUQ5FVNLFAQQtxkVqAs9V3dbGDXwaG6NdKGsyVqLou91QPGE2ahq8udLdvatDz97x",
  "key20": "5dcDS7uck1VrLPxoQAFYok9SfqzTx7frJFru9DVwFieWtGtQbV3k7oiVMcnWwRE5J5oqi8qZkgAyWG4PPkYdbj2p",
  "key21": "54dMxNhhLCkYCJPMmoALDx65rvnGEAoawpQeNk7kYa4udv89iLc2dcnDDdgyaLx1hKnx5hA3KCNbfmzKBp5NhxFk",
  "key22": "4SRhDxf6bVsyLLgRP9sZAqhnXfikZWcjLGVqZfdaQgS8sehqPp4trXtBsdKa2vLP7eegYtFwZarbDXXYMVpNU1Sj",
  "key23": "2aGR84ZEUKe3gR1Gyf9GQ6TPVSnLH6W8mDa7kq5fqvn8rwWanoAzLhWEdjUfEQ6C2iVoYSnKV8B3MxWVwcPwFaxa",
  "key24": "3knNzoZFwcDV9xVNZ6kaCgvbzCLwykjxhFQqbm8W1A88rSss6w7ZzPJzyzjATsnAQcQUNjo2iXEe7i9fJkZnzumf",
  "key25": "2yUVfiGKWodAQXUNrQQyMjiiYqJ2AzhKrQ7c7DWLna9A3SNgVdb3WFaSgkknhdHaX69LH8ySTbwaAauqTtbzAcQh",
  "key26": "3r72NtWqLVaJvoEzMiJwSHiiCHCi8JmfT1j8qw7fEgu4481jsHv2we7Lwv1bAwoejkahkSr445THXdF4gDyjmY4k",
  "key27": "5ysM4qNGpzaN2k73xyEKJYe6YiAkhRCDbRpmuLujALAUztwBPNyxp831hdRSSAXtGFhUWHp1sXv1gT16GmVTPmDE",
  "key28": "MRiWWuSezs7HQ7GX6NugE41QxSgWKQSngJ84rJPiatS2UkLEFScvEf7gmkFFf59F2iKNHKvACxB5MWYnMn5uFM7",
  "key29": "4pXe3tCg7cHutB2G1A1THG7WHKpepj9fwJ2fbaLQcq4kaWMymzXRkK8HGnyC2z7rADSWKagbc9Xsynjy8FhCy8VA",
  "key30": "5bBta2mZN2hCnLsCw1HYPzFz5mLWjveSkCfrN3aTBJzNUc6BLaqM4bf3HZFmcEUYgiGCZj2z6eXLwkhqxN7ddkta",
  "key31": "GGNBMMVaaYESxT9KEYhi9drRhu3qAJFa1g6sE9Tu3x8yU7nNtJ2wHb4PaV1KBMRhMqjE8pkXUmZGssxAiNM8ADB",
  "key32": "3pzcvS1QserAdSQ1U8PVb429XNLHvHuq1qbe5kkNAZ5LLpt4y955mEj1jLW7kT43bUkSpButaqLLiVEPP5b41Jdm",
  "key33": "2L5VaLGDVQAuCfi8oR7niHTiXXQCCi6bYKe2t6n4qg99qkXiYD8VpGfcfHfKEUQfhTUoSLCVBqy4E5JvK7FjLCRg",
  "key34": "4ESSCtJ8r2a64tMd3S8hRkp2eYGbdkKjMsnuNWvyt6p9t4LHSFsayknTEZEKDVE2w2ex7qw7A7VVsqqMmJoPuHDW",
  "key35": "3BBtWxJYULXcqoqBkojYnHuFAnezdPu2LyVjShTk4WS62UDE4LU2K8RcZ29f2fpCxw2jK54w5ZWrfmosDspgxRid",
  "key36": "4h1j6d7Es1nGm9SiXoeZHJ9phU5x425DXmHVXkozSe6rZ9hVbSgijYb4EHEf6D3dLRQVf1Buv91TMCtQwShtgLLp"
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
