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
    "4V8UspxdjV6uHVKNLXAXQW3AYpSHQu4rr8RZCmpdXSt2k6m4m2oo4DUj8oKYiRwUHox8BziV2tqVzGqMSZ4MSaZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KQ4Diio5KD4zS4gtHw1ZAVDbpiMvzxzQ4CtSgYeg4AHrcx7mdPeRyBsGVfEMzBztJcVbrKqBuEWBjeYVWGyuQJe",
  "key1": "5dk5W8k2zyShgM5JUM849uLi4TpRd777wURt5jbjgNAPXetXs4ZLnNmPi4MbaP3t6NTCASZbwGAv3XfMfjNF48dh",
  "key2": "29SsRQqsijBfoGQsTo1DwZXFBvktjduFfigDhPSwqQMEca3R8NJa55EMm2UmKfWspCmWWMCLnKfKxPP3TU3nHK6g",
  "key3": "5eSGzoE76ppTeKiZRN1HijET2RFQx8r7JEexGz8FwqdrDGYkMVvjsk6AKJkKhbtL5CgUN8JT1ALEcwrDMzw8mmsk",
  "key4": "3gDQrG7rJWdkSuCWxsJcmExo1t56a4Psjnd68fQT4P2ojjzqCSpM2qFKof1oq33yovPn4jgxdRC77aaeDyzJKyj6",
  "key5": "Fuq6MTa1LpfMJ6Cd3Xc3RHov8CwWTtXWH5rvqh1WAzuyz2KhaLrthYgykLZajGCrh8T83qPSpectyAdPXrDyQ4Y",
  "key6": "ChVHGGYQ2LApp8KwuEoj174VWbuBU1cAa68WJYAQKrGemCCgMw3e9kHbZ47WcLLRKeMsFFbi6D2rj9NU2HEggXG",
  "key7": "ekxyeb4HvQQ8z84eESX2udLuiyhcZCxJC7J6sXKKHAnxxifCwmX6p5TiXn7T7eg5orrE6XQXZPPQ3VqRubrtDtx",
  "key8": "5dwLjNFVGkppF9x2k8ZH4tTJRizTM2QyZo6q6eGuXo1LdzvwgsX7MkyxVhbEaoQvaGxGnNxFek8qGLvuK8BcnREm",
  "key9": "4TYRYXiiBWtEs5ajipbuDPRSLwYTv8bUk6frKECHoHZqabFbM4G3gx54JAwY2dLyiqs5bpmLJLrrVUuGgnF2JTi",
  "key10": "3xp2xececSun9Lauv7pfGAPRdvwP8AWhWe3c4gdHnkhQT3sjjkpYThanML6GZUB1GrsfcHnAJmdMkwSyaNwpA1hM",
  "key11": "4mgsmEvMSN38MK1YyTWS6ncTyPi5oytFP5PijSLBD67xNsNSCZkPm2XDCDYVuEJw43gjWi98UauP5mguh1P19CKy",
  "key12": "5dNvwK2qHXCwbnJRo84cCsptRnsNKAYfuFpfEGhTiYFmfemDtzpwMWwArBS153JTyoCWcbaaS1Bf6cdHGjoRJYTi",
  "key13": "5u1mzXEQN7oddwSV3q5WgHQKpmfDktZSgT2LznznponbEwgXcNa7gZRjKteFhQgw3VEBGzRXK3W41yiBto2gyKyG",
  "key14": "9xRxdtKAijFfc2YwEhT6HbGv7c9qPwZYYP3afRedi8b4FqQKmTH9vV6m2Z4bYyRh58y8k1C4e9xRWoHKzXjetTK",
  "key15": "t332AiCGRwioNsXjsSZDsyfzNiNFro63NkJDR1h7FSKnCyuHLwPbF8TPZnjP7Z7SB1FPCtChW9ygE2SyzR8y2R6",
  "key16": "4vRLaWyuLnCrk6X3An2wkZMrCCDncAbBNFPzRKvDFuJdao4FKsTpqbsC8G3th98iNTvSw9a3fcvMEqMKboLWnZXV",
  "key17": "2TqFuqBMcPXzmKXJmRNuxM69VqfRHatKVWPZkmyBE1zo1XR29UWcFhz91tSw6QxWi7umTkCFxKS4NMeTe35rahuK",
  "key18": "5MQWEzLerWQcofR7VZDBeKK9jydJPsALVimTfY9f6zkebQPcfX1gXNZFWjDZsaW1CyrZARSTMFuptPrk9XsXhPDJ",
  "key19": "h45f1uR5T5SMMj7VsruSFq8bn8aaMdmjfaHgde3CnBYGCWU5uLHo3y2o6ZyDdpfBH1jYEzbJLHBpq3hCcGb7VDL",
  "key20": "5NRKrVk48wMwX182bdGhVYDaba77UwoV5Jv1PzNBc9nZ8kcL3RD1qdpUArdjxVhawypvXysTmMWwuFKFMeomGmyt",
  "key21": "4HhgELbRMfDwko3PyMTiTCENHKoL6UYjVE2goDo6UMfjxkPssSkDQiPh7FiwQTw6bi27fBorkGM9mUVWhuTN5aow",
  "key22": "5SY3jye9BV6xCx6HBHPEjc7gZGnUKvy8PstXCbAnYYggXn762rYhhDecggF2TNk8uiuc3wTt3irRQ9FpTAynGyYn",
  "key23": "37ecbPeFxNfxGvbvz324UCJUiwzBMyBaqCD8qX57NAbUs1W5E7hXonsK5FqaH7CHKQSkYnLkDxtaPTipn8HvYSvg",
  "key24": "27DBArcrUiKgkWGhf9s3RPKNL7FqUnVW924i6EXj9szcDZAkAQDcMWG5zB2YJhEJCZTgTao4tZG7tM91fafy6Lbt",
  "key25": "4HmJju31qWMUBeUbnNVNPnyZ21Qg5wpJfX1SGMwq65XxeCsrw11QcZzG4M6uh1uW1y8Kbp9iHrbPAopbVebA4qR3",
  "key26": "2bYay8sjN8CJ1iLGASXvkGGmg1Xiaf8F6oC7QH6r2aZPeofUQ5dHsGRZHxNwaeRvV4cCSDm2xGNF8WeYDg6S2kfv",
  "key27": "4kWdwZngD8Cc66Vd915HbKak3dnrNaV82qvqmSzRgiZ1oRHJC4F9CwN4zQcbtfwdUAqct9i7rLaJcDejgnnF2rY2",
  "key28": "59bgLqam4ttGpzbseYa5FJCg7hXuCavn1BmusUUcaASYH19SPWkh34LsXUw1533853G6JW4bW1ERofrGpfhCAECv",
  "key29": "ZN2B68RvAkdMPYQxCK8p7gMUnmZ3f7k1u9C6yMUPRWYez1AtsLjWG1YHa2JyVFoSazfKV2JJgqp3MQwNtbkguW2",
  "key30": "2Fn8ALQhCtkCa5CDDp2Vgy17V4DBeGB8hZrYRXKFRCv5JrXNpMRTb4Bd5DMUzWV3tLkaVvmSAf5FBJ92hz3k6GoX",
  "key31": "3342Z5gBxePpTT8wWZ3rhqxRaJukAMqoKcVX3RdpxYfxWma24PDdeMeXBNcXok7M2yKWxfTdwQukgmE6fWo4FnkU",
  "key32": "2CXCtJq77xQmdZR8mfJHHW99eqv5NYHiAdR8vtn8U8nSqZLbTR29ZpKgHeZNZ3pCFxJ9rZkUN2Kt8Vp8xFXRAAxG",
  "key33": "ApgVJ36aPGJYonrYL2yJCJw2HJKjfKrrS9573xpjPxGiaUjSrPNAHWgvkAZGUkhShXB5YQTbMtEToTW7EmaAjVX"
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
