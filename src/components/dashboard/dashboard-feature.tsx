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
    "4jz8wXbwyxkocVSMKFc7gYfnnNRwPbeQjyrD969kwtfuJYPQdmdCzoiFYz35TAzWzckZu7fnsNAZ7SEKGu8G4jQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p9Anmu8NnyEnwSX1W2TQS4pmeN2scN23TbNiVcj2ArnWDRYA2nVWrEJfkxoxD3XJgqhByBtWYQcBgYruVpNib8A",
  "key1": "5vyPY9zCVjyU3k2zG3Fvd6RVuLkbK7e24RNmDUz7CdpS7jqxoCb59Ru4RTNdhAF6D1bANsSzLYx7NLW6BEaTvmgF",
  "key2": "4DvQeUscJhsWrhdjHak9cT6cZiegisgFzJrhgDDSkd4tFw2mgmdht3yeoesPiEM6pymHrqNgnUdsnJreg5ksnXQh",
  "key3": "2PGbBrs7MK6BV3xNpQR8bBD9FZVzNXDSt1CSnJwa3hnKEGiNoFdLDx1kvcWZu4FTt823fuw1CMw4AZZFZDcxdytA",
  "key4": "3ZQee33KcE3CYJebWutoJMrCC3bQczFdyJ3veA9GooyShBpkJhGktEtiMz9Bmh5iedWhXzU2M38JLSpGeFupdw5D",
  "key5": "5wNfYjz5LxWKbYZN3U9GPbkDkv2aEsABa7avB9mSLT3qkvMwZ3WsZjafXw81avtESGbbE9fjyTihfzqh2ofMb6Ky",
  "key6": "5H5FNCPMPYY1phgTyw2xTfLB82J8CajDNDBzuLh7UrTTprW9QaMspvMSzgbCeNHjgz1DX6GEyXUs99XiWmy9vQR3",
  "key7": "2TwrL3xh3tbGtRAX2wBGj5FBp27LtFk633Tf5yMWpwiLQAGHN2NLLZYeEPNMEicobE5WqT4xr7ze236qCQtVALka",
  "key8": "2nHzovd57gHjTrLJnBHidksXrfxiEadAk8JchmRDw9jVkEAYfTP8rHHhoFkuzRtZKKNYoiUduyUEJPBAnQHLYo23",
  "key9": "4jGgGhiJ3jyMd4pWuV2RSua5XHctBS5AavVe3qWYQD1YUU6xGUMWY7zewuU3kg1nPoRnSUYyJSttpPHrFXZnB7EU",
  "key10": "3gNxnW795seuNqQ5w8PeTSncfmXH1vj3x4nDobLJRySEHRnr7ndFVAy5LVhT1Xwgk5YnWJabpdE3bQyCjTUQAQDK",
  "key11": "4bcuDroz4YTexdLFYSCnvXvR3cVdJpmkTx1J8Nia34kdeznPJd3WJVQtxnyCPXxmd78hLHMEccNQac86PjdLaPmu",
  "key12": "3LakviWUahaFh1xmF7DzzC67NPZFbx2CwqmnJ96onckFxwsH7anmBoQG15iRy2Rpf8ASMQgCten8q4tSWWQRfQGs",
  "key13": "3dibMPgaDZmcDjysMgxmLRzRhEMbqet1CzsR9qoabkjqXsCjRsgrFdwQu4JkepGzP53KHYa9bfUjKvwXDrqLW5sM",
  "key14": "5XYiZXinDmbYshTWdmd9YLszXXNMUDoJ1Rvu94VSuf7d2jdADjNTnVgR53MHZq1pjP5Rhqrx4WMeSuhQCjKhoLBt",
  "key15": "2vwuxZcE7mfdqk3JoLzHJpu6nkppSD8pviobkVKi64BvqjZBA9RMxpHFj3M9FvBS8EJCatoJymS3DnyEAT2i5sbq",
  "key16": "4D6inwpxnYeD5uXnZJtfXKQaWP8fszQ4uqqYddyBW965yuRtrgwQjcrr2vSrbJz7Y9nHBrhzdgof31eRg27NqG46",
  "key17": "3shsVxRhpRFpjNv3jhsJCUtdePsgy21W4SFzcZbGB2SqXz4qXTHsEPJLNr8SDzBTaHMfME8gKd42D8LCxETvVhBs",
  "key18": "5Brq4vpWoYnJxJ2mUVSLMVhDuTET7wwWv7BQ7zQ2wD68EReyTtaD3MVh6bY2tAdNaApv3GjwKc4WDcR1doSNjXZA",
  "key19": "HN4eu3xRsPYMZ7qMUjgAdx6bRGJj64yWJQiuP4iA5Lyu5Rsy3wLWRhJtMAvdwrYPqNZ2FxLdCrMNV4BVdhbZkg4",
  "key20": "5z6bmLmffBWFvMYSawbKmJPDhamwS7V7drPcn7Zs7q2E9bTirnrXJ2mgG83ZjYp6C3eezmBpFS7AHT8TP3a8tWqa",
  "key21": "4mDAxiutwLMHCJV9ohAcBvMx3QmF53gtbhBUh9Jh8Rq3WSQ2L96xtbqD8jHcQZSuG6SyP1WVpamu9sNTp4HDrqpV",
  "key22": "2LyfcDKvrPZcLJPNoAavRWJe8tEhPnfLZrKPu7wShoLKSLK3B7F3dLGHmiB6njmgPutno4dJAd19hxthGHhEQMsd",
  "key23": "5U6S9VGJ55yxCA9MPvuxAeNgLopPokops8ttNjHsiLHSCQyhJeidWrdYJEPfKao1FDBvgKUWtwJGHsHsdjFXaini",
  "key24": "2NaeL7bZFTjNX3t1G97SfupP9m5t4NydFNvEFjwvwMozTs9rXTAAkdrz88CK2a1oZbinVWz36BWSemjTLzZxqs4o",
  "key25": "25QqUfF78aHrQzBExt3JgaJ9D53R2846kJtT9tfEtYtR3w2jffT3tga9YP2Ff3d5D8cDFLghQ5X88DcKPESnZHp6",
  "key26": "4P8DC4Ro9Wzdz9ufDzNeJDhjNNi1qoTNVFN1Ty84L8bcKyUZKRwWLWBLzMMW7KsNHjJUqnLjNhAh9RgdSRvZjJVw",
  "key27": "VCZCsrXRwjD7SKrsCkvTnumjBSoR57jS6wzv7vV5eRfuUHAjrsTo2Q5Ksy49RXGuN3DTWoqUwJj2jxpThFQdmrg",
  "key28": "434vjkQQvAwKq68Gzs1DxdvYzV64CKnJ3yuHiohxxgV9jDhsoSYCzaKXxwLrswWXc7fiUnJJRxziJ68bCogaSVez",
  "key29": "2YhS1mPUp2YDQdnKrBsMn7NfmLCYaBvZz63HXHXh6fGE2LnqDLLohWkr7xaXWTLCuMdTVj69qBcXT7LS6EihyxSG"
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
