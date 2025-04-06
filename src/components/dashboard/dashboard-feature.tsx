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
    "3nsuXi64V1jzBwhnSE6QQKrxzThp4T3r78dhGHZdgjWo6ckre34oxSELYCsvqC6ZhVwmzYvUbdxLqmsgEYUN795o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sUK7co8LTAbVw8LarbLeoWCRu7enEkB3hyKGda3dG2cpTa8zNsnsUZLksvn4rD53BgHJoV1L6cXRB8sACdJd9KD",
  "key1": "65AiZ46GHhCcY7WMCd47WbNExH3aE51eeamJV3q1PSRHX1STtS29AgYaUeLLAvMWhpjLd4EEHAXuUkyRAQ2uGsgM",
  "key2": "5GWbjU8zY1LRaM5zxunte7d5hBMRehhRCaoBoe1ikaaHN7dkfZcxXeTBx81P2B4NePBin29EQxqYmMzyp2jjwuSz",
  "key3": "2dr3vszXqMH6uqSKmjDKW2oD4c2UEMDM1uA8Mqv7gtdSq7Le1kGvNMUJhqeRE4VBRipsmzB1h1nZnRoZNk4S95XR",
  "key4": "2NYDbkrrATNGJ3L9uQbf6PeDX9U9DZAXaX3GKKLEsa2dBavf6HkrehzYNMZhBhusUZhATKp3EhL7TyADASi3a1MX",
  "key5": "3EMYZ5eTzarXgFyxFWhKn17p35KRgQZL6MYcbdtwd8ZDXVgXJEuA5oiFRBwTo8kF21qb8Q7pBraxsWtBW43uLTpr",
  "key6": "3bp9mMZ3yrUast88NAN8pTBUJwjPdy3WYMc2b8hgax1hyoVnR4SDAB8ahM8zFPrPAMbAWWJWRr2GbAE3YMYDc4ok",
  "key7": "4HWL6bFtEdz952YS1jnHNQYeMicQdu935S3Pn9iujVZAXwBKBMrcypGj8Y7ZcrqTb3HDE3U8TPZHEC8spsWX6dTa",
  "key8": "38TXRTzT3e64xAeQsg5XaEde2dp5JdSCvTJrrpgoT1bp48NFBEWbM5XRfAaEGnGguQPX9VmZgK9FfF5B8xnh9SYd",
  "key9": "4Z3qVMMQmfNcM1EChoYewt6KzbJ5te94nuJ2dhgAgoGRhzKi4isd9EKGkccQTLMhsFCiBwKC1c3WX9doXNkpJUzK",
  "key10": "2VJHEuhsXYogH7hgqseL9Hwe53ac237XMzBXsbxW6HmJNUZDc7pgonEZ6qaHfMxJJrh3FRE5qmSY111AypXBm4qk",
  "key11": "5waNcNTyUSvDi4aTxax3AcGgpUV3pDwN1Kxd3L8paZKp6Lg9Qq7wgKRn7C8rdvRWbxQN56in86f1cUJSqvKvdj9f",
  "key12": "5i7qUDt8xAQu96HkuZenyLS2vd9GCb6t86Yw8F5nGSrz53S3AHrfs8TLfMkhPVq993z1zVUXvtpKqaQduM8a9fh7",
  "key13": "5gAwebYcahWnEP3uSpgE9hkP37KxZwWkSkALJsTmMG5ufz8of7kc2nXUopeh6Jou43KxSfDN5M8aitnuiTbkTwTs",
  "key14": "2FM8Zvar6wnDLgCpKSsQPwwdZvUZ8wK3VjTi5H2pNsaJuaDe5VtdJLUefKLQtSc2YpymmLMVYnTr3AzJ4yQxcvQJ",
  "key15": "558C4a61b6XWX5ytWekHphzdE6FAZQCTyHAv3vRA5LY5BP2C6BvSnFtRGoEMwA4VjkxfmypjDu3zcEBHtMMNcrdK",
  "key16": "GMCPYtVPNFMbpRseBsjT2nwm6ypzRAL7PrwXMgsjyADKE74k41vxfMq9Jrx21utvsUvaXMDWRjFmBjUNHG9VPzw",
  "key17": "4H5soy873JLc2wSH4kXXJQX6oHkUenmrr51yFjNpj6nUVeBKiTn46XvytoVhAvDd83zpSXgfBq9TfTvKibBpEtjS",
  "key18": "SM23LvmmtSwAY5JhJ1VYCnEU2QstRWAVnPVZNChmoqL13PsH7W8C8DSCVwW42wsP38Sf8byBfbV3uEdm2d5Jwiu",
  "key19": "3231zkGJvsp81Z16kP1VamCvLTSKnmF8GEgDotWUjr4o1KCQAmKTzbEdvqzDYobM9GestCn9Yu9imCD3xCK7mghf",
  "key20": "3U3RUt3UVj4UHXfkAt8rgD3SEWoq721f7eKa27zgigk84u4zG5iTon5BpAJnKSNHfnq9v3rxqpaL2Qj7fbZWY6QP",
  "key21": "3APTcEwQUeuNeKJEKAuFojUG21riracrXndc7oLv5BoV8GbdSdGG2QtgobLXGUH4F4YHPLu67M4EqKcxeUf5Y4Fr",
  "key22": "3rgpDJKWna3ksSPV7YF24UAKQmnyycguUK5DYZLr8KYMbttCQiosRuumVXVVjJJGC5Cpu5sywye75bdNnhthGuEQ",
  "key23": "24jn4tcsFZw6HheBEQwWr3tJRG94mnCL69Luph9rvMKApw1kzjanMkqCDeV9DWzGQe99p1NvR6bkwdYtAfBpTiQm",
  "key24": "MMK5vhXFfjxyB8yxZ5tbo55p2Q3nZyLQArG4bdcLsZEXfyKrffCYvromii8hvQyFDsmR9h65LhPDNmfeGBV9apH",
  "key25": "2Hcm7R2m9zuPB3vCk1E1AUQDoR2D3j28JYR3ygSQYRPJ4qSJiE1exB8mPUi9DrVFeq6yE4cs6R8i4htsiRtGboe",
  "key26": "31oukKsYeEn9xGhVNsnZtaD3r3ABmRHUyus2KMDr4siX8pJSAMz5CkWaHbyRLXQ7e5hmPGoEpqbes4rSCoCpv5Mu",
  "key27": "3Md5c5ZJx1dYB9FGhRqCocR1F5VmfyM3dewSrBsQ1P1CufqDfRyfi98bcaR3PmHhoNtVxQ4EHpcQkHdnprheeYS4",
  "key28": "5tjH9pSWezWq84wiWjG4TkTp1kLBdjxMjuLKk37M88pcLWw1vBLaCxbT1oCzX1whddx4Gbb3eWnqz4JRQktwmDM2",
  "key29": "2aQsKAVXztNswsbaZsgsBvBnGgyS8ynPaKhoFjtaVUeLSKjYDsKqHHj8pEdWX54pmVuwrpNkAn5cfZVWsBCThyiG"
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
