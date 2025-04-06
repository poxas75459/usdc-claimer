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
    "3YCmHtSi4hQfLppTMWyKPaqkxvDAqnEwsFp73ivzpq7gAaZE7edT3t9AvCoda2Mwo28moWWo9DYzGUe21W3HD479"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GgY26kLVt56JJx9sb2X65LGLd6BNUKVjLgvujsthMCZ3JP3bYPMvrcmR8ztAhsk7Hddt3JtAnouf9NBTsN2KyVW",
  "key1": "5eJweyRGywfUDU6jPpUmSSYjL3c8zDBymPacY1kkZxsMCNwy7Vm9mcPDqNSmcUhUYceXt3vv1rWrCHjsVHjnjDZN",
  "key2": "5Vut2Dg2kXRGtaJ1Hiy3VxiCM8vmNCZqVYHqpWQ422qXXyZigm2pecwbG3JFX63CGySi6ZUD9YsjKvEd2M8j5XRi",
  "key3": "i9wHEUQMgTXBgyGSJd8KHp2X3Ly2uA3vLndvMCXxL5ufKubMZcSm6WD7HvmLXGJDY1oC9CKedibpvdQBKJV6yb7",
  "key4": "54foRinEtQqWgCWRZNYuNWTrz7rf56MYD2Qr2y8EujV7pFZoZ2jFXww2qioYpkMwmh3cNgUi6brAufYwJnAhmqCP",
  "key5": "3EC64UvFtEfLj2V9bnfw6H1iqHqFo97qckiWNYgXU8U7dZvgDkNAsb1tfDAvUN1hw61StsFR5WnyK2JFJ3eKsk5Z",
  "key6": "3gBMGQX1jZxAzypguQ8txJEwRjz4qS22Yx4Lkvux1MHxRduwZuiiqX7YEjHdRzEh23SskjAEbijTYBWYfW9sjJuu",
  "key7": "4Q8A62AjfV3tzNQasspJyH6LkkQnDXiaAS53xjixJDKynPZQixAvwAzrdvRj2yK1gqvQj6i8HCBSDtzLathieSpw",
  "key8": "526RF65LJn6wz171EoZrHngCrrpT2UYNa3PRoJZU18urqiFmqwZ8fZFgnJKxG9qoDzazmU9JQw6NziZV3aFgonwU",
  "key9": "3gejypZ3wAietNf7pfAyPFWDhGYmg5nnW5XeC2tSJDBra5oW8vjPQDXDMAFqfDiV6XQkaGnUpFZXZqpVRHWFc41J",
  "key10": "5kubASXCvWRbYPctrWA9CNzpfMZV7XmQNGMyDn2Z8CJ4Q8sn3ocDHfacMd7iyqbTP2kxdzHPPhtN2VwAMrUkfhR7",
  "key11": "BDeG2p4vPgVrCw5B153bu8xyd3d9DGKcLEUQ1KkBjV8wtTXPV7DxP4cpCYFggWWJkrydnTBrifrxt5DZMaDHGPE",
  "key12": "BgNocBDhzw2PyohNofhRJp3EksHzs8aJZSixvSy2qcZhD2pi1SFnwqRJhMRNGtMtAkW6aGFw8Wsfq5TCUcEyYVQ",
  "key13": "4spS45ke79GqJbrVE9kou7H4c5LYLkuLb7S6VoJLNsEcgnNNhLibTQPKqPUdtXEbZjrZnuzgxTY7QHpTbYXJRHG1",
  "key14": "4kZLzwWRwoMsYYaNerbXAjc2ycu2NTwwkVvKcWQcs15G74AtuekPnhrcJimcUfv5vrQfaY66fpRyidhXdyHPzGxx",
  "key15": "43Uw9wGrqtHbuUgsMfRodE6YEr6ZHoCeeg9ayXKxVNXSoURSD2MjsVPhsLdaTd9phLCf8FwwRXLzPGG5MhRsA3Sw",
  "key16": "3nsEf8zZU7jwVHGSDzEDUgtVfiquCJqb3nqVzNssHASQ7xm3DZ38ci9ns9nC9vs82DnhVoEwjWRjviXAV5dynb4R",
  "key17": "3qwYMdMzLRXrMMu9izYRd69ZDrVQBbqsRUYyqFK3hpS7bXRTrQC61AyvEpibJkUmHVnkLBrhAYEkTnfFL2DSiYHx",
  "key18": "2bvhvVAXYTnVmKyt3PNqkTnfPq29vMGCjXGyYUYsYGyczfGhWi9j8MuVQkuA8VGKeUgmBiAwxaDAbWKd1g1atfW4",
  "key19": "5C2f7vn7Bu5V9Pg8Kktekn7raq5iz9QHuSQssjQidGdaov1MNc1yzBx3M7MGhsES3RwiQcmYy8EVE2mfodgKEWZD",
  "key20": "BU2tHj38JkfSNGHtZZpDfKCguvJeR6NE1yuRWrJek6AzorW4SRfNKpdEXnCHvb4pg4JgLmVAE2TrfuUHA5zLigP",
  "key21": "3Qj6MdpKU4vSiCxwkMLBj2rjRGFrzVFrqmCqPmDGLHEC5QcMujMxGqHjytKdGRo1WfsgKKhe6pLyaKkrfjmy3Twa",
  "key22": "2Qwi96YTSNh6bswoLLv3QrDA2vBE2i6JrWMVFXm2WVrbvptKYq4BpwAsgQUiuUvRU3ChkqjA8tFkTRcxz8zhKHCh",
  "key23": "3A9yVVkUSYdwQbru27z91j8BRgPbVL8qnnPB9zdFS9PyYPms41oaFpUAcwN5N8pwke7CwhrWDWdaeQJVcZsRD5To",
  "key24": "rvqW4rA9amgy9hHJEBaYw3NNgeUJBjSAdjAjLJoE9bMjWTLZ3xCemvefxZvg127kxrHdKTEfVV14WUrme1usNHB"
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
