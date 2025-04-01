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
    "vNxRUQ4sZc4Q8iDCWfpeNjr8CxwDkpndetpKj5jpWtEUgHjeTpThtzmoyGjuKBCxoU6DMMtcphnjERJ51VrdZQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vCPKEJXsmx7Sa4cw3MMPCT8FvgVqGWo3W613ZC1mQQhVaJHW4ojxt3ZxraXWxioneJYLmx2VDoG41iCaTZaCVMc",
  "key1": "4CLi8rfpU7aRc1S97hpr1fJN1BKmzukucxRKm6MiruLM58JKfkercze1Pi93kVmkza9CYFiiXdBRfzDB587v3XoE",
  "key2": "3mkhjZ5MRsM9g2auYmteweHRQqdfTetuLb8je71UKdekxNnsYtvgK8zTcbvPca3SsxMHYCuDcJwHsRFJxg3zFRTL",
  "key3": "WyW4nuCTCWX11yKTvCzmfkiBQ9aNyHoPXpiZ8L65ubLkE7HmvE1UafjijYN6woctsyzW8FR52CEjSdXfmnUcm1r",
  "key4": "zJti3SHGdajKjw3oQXsPMXbNsGi3GvwwLXZa1HRM5Hk4YsS1ozpZvoynY1RHkeJvHUfMhKooVCagoUDX5ihJsjX",
  "key5": "42fYdAjqnWiWGP8JvUt6WZUKNCYbumCNtLJbNa5sPqaUv3jQ879WrgQutwjrUyKtqVbNkYcXkwo1VuFSa92yARne",
  "key6": "4K37dnXaL5NBUtahEKsL9ecZjJoD4X2RbvFRqtoA5mZfJggiVhPACsXYj1utpypiDG4nFM14rrqUiF7ymqJHoM6A",
  "key7": "663F8o3F81xFvGESpXzcGtNHfbtLVPyi9rPJXin4fLF6Se5P1JGJYsLaCZ9Tsc6PxwFkqdJFi57fyYro3U4q1hkE",
  "key8": "oRRhbyvAbKzYSWmEPywYcGc52yViy8XQ9CQGc7a8kG6Q2UuiWyeP4vEmpUZvYXLDZCC8LNeR92Kz7FZe3X3hqtj",
  "key9": "3cZwtNoUrUU42FoHoAz1XgY2XSaxcCnveTcsqTdT5k5994rvf67wh8eTwshsq2vBGfkVyrPHfZE3f1LTeQ5nd6uX",
  "key10": "4fKGRBREPpFFDrkhqcdbXWtwLHom61N5cS7W8ERDMpeY4RSdi4XQpJBt9ndVJBwSm5GZd7KNSNMcQxansqeTaR7a",
  "key11": "yhW6HdynpHxnLhuBP8Tfa8q9AuwHggPP2uUGd4epcG4HruaXHtRoTPgAWGCQziNV9Xb69yxKpUAeTxmHAPtMiBa",
  "key12": "irHF9E5T7ybjUFUwVh7nmAx5H5tYqSPCpnmjaAW2LqJVVVqWkJ2DRtzrqZi45FQ6LWGVCULPP2EPJ9bNFitCbDh",
  "key13": "2wnft3znK3Vy4AFy8E54umyKShN4FY5agV7UupQUZYisTMFXXtEPUBCTZiKzeJ7VB3fr8B6yQ6JB3T7uDmj9Wj8U",
  "key14": "4pNN67rMuhkb4VxuRyiyZDNxL3kb999FeMar7vf78xHwwsyAYRwX3MAXFbNNJjHeKTbhvfyxtzowt4ZziLet4nbt",
  "key15": "re1Ac7JGNcFBU39YBAQGUtmQoteTZE6rmtmnRcVWdXzerahwMDPgv6eNGKqMZGLvtnW6YAWm62ioLUUiNgANDR4",
  "key16": "5KoSkiFJPFbnmrwVNjt5DhbSb3ffbq75Xus2eNkxsGgSW1WZFcZyNJchwgTreihftzaTijcHYPM88emmug56hKkG",
  "key17": "18Dpp3ELE2BegwdzwUPJZM9LGqWoHg2BhbMUpNimYjVULZjjK4FcsPmLGyLfPjuyfzLjxpViCi5tWKFMSGgeKNm",
  "key18": "3PMw8URdrkdfP7Wi25a1ZMpMVbx4DXvymcZbvPj9iDWPWHpzpwTET7NQULVqTRaMrr9sGrzr6eBgEW2SYWyR6ADz",
  "key19": "tDFwvhwaXg5CCAeLza7syJ3fZZJytC232h3ZuQkwDeVxHEhDFz9FyHZSyi3UKr6AyhjBHmAXikUVfWdXvFLrCjN",
  "key20": "2XqduveWmQjsdiwGRiHj1pCBtt58H2h7o9JWcKUwWrwHESwSLZAqfnpMbS8xQCd5sHmwxZRW6YLvWbXXuPnKL7P1",
  "key21": "EBzCertq7gKw52QMTgqW4o88SEsXQ6mGoKeimvapub4ZGSRKE7GU1SrcgV5JkG1EBegt2Zr8aqQhiyaWswgjxvi",
  "key22": "5y61KThLF1sshbxHAWYW6HmWsuCeRe4mJ1MGyyhbGZ5xeLqn5RDRgWSiMXBVLNu26ZjT6m7X8xWNHfaUQQLLn77P",
  "key23": "54DAy88nPQqraTyurScdtkqEZxjjH7i8F4jWWudHoe5j5G3hgHzS4dcZXjrziviTLzGb6pDL2jgUNPrkCbDuJ6Qv",
  "key24": "3n9JCeYYGvQDcnntQzaoFQ5PzR9kBbUUu3VVs7dgDjmdbNiQWffRZXqABx1xD1SRsEfT99gqHkBPFH2UdJ3HbbC3",
  "key25": "eEipW1dLvhyMRRZy48wKgJdEu8WGrvJ6xyBAcuhakeD8HUSenwFWeVnZQZPyk98UhytKFnJJSsRrnVYHW6c9Xzd",
  "key26": "3ry7Rgcpnstcms16SnSR6SQU5UcL1jR5X9rZ1Jx69EUy22iGUSC1CBHHgT2YuPa4ipVj6MAQdjd2C8rs3hYnksXu",
  "key27": "3Z2sUxCfZMC8W9wzEAM7P7qtzTAPGSU2iutfSVEpc3U3d5cE9wS6yxyqYTtXamupg2aZMXrbEnzBTwV1rEB3rQXa",
  "key28": "3DeX2rksJZA5wVoivpkFstJpfEHNaPHSbyNucET4LGsVf8sNi4mYpdYpSoVaDPnPy8ShCuzZmyx15WYGCocxiMYj",
  "key29": "2cWDGrLJ7kHyZnthiJmAT36au5NvoEkZMEVdGGxaumheyCH7mP3ZDFLgWyqMBArt2B9SKTMq8xTxPr8YnCDuUbAJ",
  "key30": "5WvgzJtBuugU9aUuRBs6oZsZD5mTqtYcujKfk1cDgQCBJheLEH2z8TrFcD8qWkQqrV8okLULd39AZi9rsbgrUCEn",
  "key31": "5t5epMKH9RwCiTCm24oWj8w2axzLCqFYkVzGaY755Uz17v1N7dtAXa9DhvAwsLPdxg7BVatsfYuBYJ3A99fddmgo",
  "key32": "5MHDYF66fpB33vNLRKcXNcVDN1N99V12o3CM73v9QghNJofRrFfdvUDRYUkxT8s2qUbttJrxizMsJ6YAKEBKNnpH",
  "key33": "66guUQpcd34wg6HaeoCHcu4yLeAdke9L58gp7BoSQ1R4mLEUwVb6N5r74kThWG62SnFW9D5ap3cq7MwgP7vN4xN9"
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
