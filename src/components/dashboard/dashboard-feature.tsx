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
    "ERYZdnYWpzJp7EWU6Mwcam96NzGDEmzUFZiSzwgfHeQ2DbwDgQv9htDr3ZbM4Df6pv6GCcZSCww4F6EQnQedW82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UhRYDgVL8GMHNjKWqMAbkiYuvokjjJLVRsaTt8FSB8QfJX67S3bNdMtByR8ztURAxzpezamBoVFYiAm6PXCs9F1",
  "key1": "2A9MfJ2uyuB2Gv6JvfhL5Svj5ddLyuXnnUFyjCDMgSJfy76Ck1uhZX9d28hXigifJTs6doaWv2xSskPdwbsLWZ6M",
  "key2": "3twsAPjhxn3orGZMmT6a6KpwF6qg2k37wuup8TJXiRo8F2fBRQ1AeMSAWFX6AdgFKA2BbYs5YqRbfFBAhaXyoxDG",
  "key3": "4HYvtXyPRBBCD5y5RiTcwE11nquPrANCUqRCNHcySQyXJj2cCTPVH28zLkviesQAUzfNMdiKKo454STkmtEPaj8E",
  "key4": "4YrBgoF57iE6661UPyb7yUniwbibtDu9oNEvsWHSnu7oQQsiwYuGVYsf6o71GmCzuF3A1rbNayCfmrEPnkh25RF",
  "key5": "EF4FecZ5WzVTfEHtDvh4Js5o9rMEv5KJR2hi5TnjfiydZFWnxMdXsoRLP5GpypdsfW8xpeBMMtcKXhzuECLenh5",
  "key6": "3JfMkMK9Dmt7tx6LAbFAgjNZGfypYDUxGmgRjoKfoxVyY58qCJHGnT5mDErixYC5HHBkU1pbF5r8ecHK6ez6tmgb",
  "key7": "57pjTWbH24MkpMzwUb6dyZGUpwjoVFKRN7ubatcCy2TRTKAcdEYcL71wXcZX9rnLuKDxhzXK5EgWRKqazCVgPkHU",
  "key8": "3DnDX7NEk1CiPGK1wtdTPCKrmx2M3Zf6W9mFyx5Jjh58vUFSwbezULbVMEnHKaMiXaZWJfyyix8myqL6ejAzTWod",
  "key9": "4gcaM8PnTLNgpSLd1zEQ4wmDS6CfLmaQF6Bwx3VMJdTzjo5E9TGPf8TSpTuVU1MXHrvG34MhHKCrGKo4tpat36zW",
  "key10": "2ZXT1K2eage7ybrvzfu2WFtCrLTi7dvkkRTSapXmbzVbJJCGEq2iSyTEQhrS5R8RRdNnoK6tzw1EDCtjbmLpwxdH",
  "key11": "4sDj4B4pmZL8DhdQQur1HYx9FuNisdGUH4t9YtJBeTHh8YLrJ76jVpNvcru3DVX8YobJTC3EvAxBCUfopf69pi1U",
  "key12": "4ZYewR9vqdkVd9LzCi1PHQMEcaQYS3Xmtong7kuSLYXhvSytMQRBZhUBLjAt5nmaqv8f1pjHBnBVqd2G3XF3EDeF",
  "key13": "365RqCnn4q1Jn1v23Fpk4QMRTa49efBueXCBQZbYkTAzQSAETiBR5bvcfQs7XQ2hxWGDww3SVQdC6Dm4yoSR1sRp",
  "key14": "3UNV5qFFsXiNT5REhnHFoVtbcPdhQqU6jsFwHpGVyYrx22LpkjYduE7N36izMHhWwySFn2nsjseq3W9hcxm7acz3",
  "key15": "543xJHi1DqeVY6Xe4x8CDnvFnDj9jUaJ3SvZusNpwEsfSjpyo2voijrs1TpTZdLmfZpfXdD8qFYZsAGHay7LWKJa",
  "key16": "3LxhpfJjwbcmd1BjRaywULGjNB6LWMogsFQvG3EjfHYFYMUsMzptWNdKuKkt8HpV1fadbJ3BoohkuALdA6uuVZB6",
  "key17": "5uKqDXf8SW9Eb8VvCS3bwuoC1E18JFv7dPgF3P6gHe5k7zgHZZ4Ki3GRg5F8wMSMUKtkC8fvskEEXHSQrnthUSnB",
  "key18": "esMcuQqoxnBHmedgoyfPgHgoGunPXYoBRg1voTDQ9qYh4aGDTSmSQBoyK93YQ73d5RXT3vdfZCHfJjHc6LpV2Lx",
  "key19": "wuRTFYcDy9xg6jWZizWZk85Qji3vFDbBy9drNGtTYVMrSeadowmyU6KxU6AMqRMRteaDL1U22gPXsfaXUymFGhU",
  "key20": "2FBqiYN64TRaRVtwv9Vee6DPzTRHa2AGwNpYWLZjQsKdS8mmsegBedfzsQRusBfbYcJkwC7KfBywKSNtqEMT2qUY",
  "key21": "4fWeKwniKwfxeDm2jLKxUVjtrvi4x5Jcu98VkFHhdhpwM2WdFRjZx6i9GR6kYTSezn2m5tJ9v2s2nw7nqA5bepFq",
  "key22": "3WbXqeboy5EYxEERURHm14CTbFnojoyJd6epefG1phDTecQK6PEKwbxkDBSusiELsNedCpAFanjquiD2wk1i97tg",
  "key23": "4wLrr1jcFu2EkhPUy7UVSMJJ7haSZZ8aHie2XcQdwKHGLt3shK2JsLEQroUXb8LZgZVfCm8vFp4fhpLzvoY4iRYy",
  "key24": "4kSC5Y2CkR2WVbDvE3pvmjNni3WginDNh8p4hcMqhJAT3Z1HaTmvRYcpCgZyQuBAXcMdZgmZfzDXKuSdihq1DJwu",
  "key25": "3betWWj4tRDZizkAxDXTHURjqp6jhx9HahGLgFKWUz8k5WkNTYsJaQDjuMQxAcAhLksFX1L1z8fcHAKNA7snABtV",
  "key26": "2hbk6RhpoKhX28ub8ju1NurHQN7hSZttM29Hqp6FT6TWgF8ZYBSfVSZPNPb3AM7jZSPFrvHJ968hspmzhwZRbFUx",
  "key27": "2wPDJovjYZAQomXGdFtSvzHUeMNZpnHcMQ75NENkyzucZjcLdbuJV8GDwfA6j75d9axnPS7NgLu33TPhszW6ozaW",
  "key28": "42AFoxtuZszyu47KxBvPZvyGiJJE94rzvMikX3ZTgmruAj5jLGv6mxkuLua6ZBRFtQgk4KDm427WoHbBMH3tKsyZ",
  "key29": "2C4gPpS2sWe7epiUA4S2JU7TYVawDxs3RUP19nDc15j5T4aBSRbykYp2HMCuvC469eyZ8pSVz1G77nWPx9pj5xrN",
  "key30": "2fwcdpVqR12iD1M5uGoSY7BByNhhkcvdUcRGddpbeMnqBUZxTfLrPzQ9Rg4WtmV5AidtzZJEJMLVFkTtuXkd4LC2"
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
