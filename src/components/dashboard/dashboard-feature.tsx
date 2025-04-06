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
    "5VNbeAyh8TAd4tqCkwv1cBE52VtsfsQRwC4q5VYXsAGRiSMQiU6qCi5FbNjMopZ6F9oJT3CeRRwxnRFdRPbMyZ65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jx6dxZjMTE6HL53BFJQjaPLDZrTdiGBEsgTDLNKz2vYsy1QCXrBEh9YXxPRvwEvSEnQCEq3TLsFSLBskMyX3ytM",
  "key1": "5VnVWstPnyhfa3tg7FhmC5gdGueiDNMPZZQCEbVVcRRtViUpfBzQnEMVNY7FRp4uB5aW2u9wsuJs1cgJzaHvPWQ3",
  "key2": "3cTHtQRMGpKFQuRtQkcKdn56bmK1d6xQ65n2Te2GRJ2BkATiN9Ms6YuxQW25CCMAepWiiZdSAjXuGVFCYfNf3Krn",
  "key3": "bY4oqXM59YnBaba6tDXyMcogzDzzCSRMnZDux41L2FCJVMSAhShdJ7UT6PambaVBMxo4bgVKemYyguK3yxTUrew",
  "key4": "4FZF31s1LtWzgivjFdsBPb7GWK1k9nBaf9bjkZdzWN4ETvxDDS39GYEh68R9F1KsyzTUuEfpfLXp38T6XwdYBXce",
  "key5": "2nCWzRqtzAbKKrR81uZYRWUsiNu8EvgmFTDGTfS9bWHs6YTvQcZg19dceCYcZcmdgGh2JALJHwKiqs7BRvDDkVvJ",
  "key6": "63vhP6shQ3dC9S35AL8a5SwpUzK7RVe5LEHtAHzox41SBAQDyX4cDFSqmnf78UZBoVePTQZGULGsCrkrHRbaVk93",
  "key7": "2oVN869gAydDXYYvT1jxjVMDEca2MvwPQLhxWHXLvpkvGfFJbekSj8eXnmTkTJ2whhUCAp12TBzRqwX5xqavvfsA",
  "key8": "2kdLiNSYRQ8cALiaF5MTMwrJT6ueYCRpTstqaBKWafSFzjYKasXEiMcfz7CHzHqkDT9NqvUwdmx8UeKuYiuFawPA",
  "key9": "2Pt2X6Wn1aDCjDSBqayPAC9z4pxW22CKuG1a83Wt8h2mqhCBJutpLb2BV3SafTA9RanT9PDngzaMb5kpsXeEkYPV",
  "key10": "4T2W1y5aHuy9xb7gCUUyjUXrQkE5dtUQ1YDx4Rg9ibM7nghyQpXcSdjpyV4TrHcVpfLMJ3JRe47HTbAHVk3abHoy",
  "key11": "5iPTLQPfuA2i1RxYcUDcgxzH23t6zvckspC21dWSQWSwrqRNh949tB2y3DsQgyVbA3J5TtgLGre2QHkLAWSk28kF",
  "key12": "4KdGw4dSN9r8zzq4VzaXSySYj2TE83XDHjYDv3erjoCmybUrgqH1ZiHMgZog3Uia8Epo1Ny2MYX5beZ1BqRu26dw",
  "key13": "3KPA6mGp7fEyN7rvakXXh7kQFPWLRLxVfpyDYVkW9wvei3NWtoVFk5SMtenBqMdGqnGRaZ3CHKCKVGvwQvCAZGS",
  "key14": "3oN5YpVak59B6Qh4ipVY8SAN7U34LPndw87w1moUq2aSQpJRo5A4mEFy5UsvUPHLS5eQF7dLqJaK7gyHCMh4aCdE",
  "key15": "29EzztWZgfGA8WsJkwaHDehEaZuwHXttj4dDEyurWotRTgpvNWMs3VY95rR2PSQcKQam4qbRHj6tHrgUvzia6iVA",
  "key16": "3V45tquWYCD3gY5RxfUMnAGyeEbDSCeumbcajBu8pbPKC5gmJCwozofjjZ7Vzz8kbonBtdMzHVcuUSNust6M4An7",
  "key17": "26oLULaqmXnsyfaKrRE47SELxjECVgZ2D54SXoDxbmDebCsKjxKSvp1tymPMjZsRvnAqEgo195TbBR9RNFeBFiwQ",
  "key18": "3JcrvxMG7c37pPayrwRgzFscM1WFyzdLR6dYtX7zg7pPFXDD2kZK4Cqd18c9y7RUWQdvhetcMRehfUwvPzKnB97U",
  "key19": "Ubak8o7kL5AmjYrQCoFqNZMd75y59uNXUj82bLwgRKGnpA3Ce7KgmfFd2gyfPr5YU56mcjWce8JxgPZQSATXHkb",
  "key20": "2KiEymeRrAypkrSTKgLU5kP7p8J53k27PUUyei1QtRZaEZHFfFbhpUW8PW2Jx2NLHJNrJ9y3YrAeuSvgaF49oV4a",
  "key21": "3kmx1iUY7ANXkAWTby7ckaKufnHHjwWotZvYKqhmGRwWWAVFwNJo2CCCcSR2HMCwLmg5hiiuSKGhEg3JBuyswQ1d",
  "key22": "2G4g2kG9eCoHcsnD74dnnpqyi83bXjJVnAPFGgX7jxKeASVbr6X4fb5yEZUUbWsrdNQdja9hzaVGjL8Rxa288Ns4",
  "key23": "4xFfJdJnScbyT3U7SEYkFPC1eQYCJ7XJtMiynFAK4z9wTzkptLDvkFjD5xSLJNVT7tmncf6Dnw6RyXaurVeT9K2B",
  "key24": "5ZusGRfCLphtAhzjPKmE6s6hJmZSVY26vnkNAp2AdQd1nhtMEiJBqWaGY99Z3qdUaZKwH8kvmGVoGTmLrVwRidVQ",
  "key25": "2VEy6XpHyV7TjnNjP4mGpP9XHs4aCuGvXMAcAv7psMytMQdoAePftnW6a9wPGUpHg8sHbpyTSFHbqVRiTbnPwK93",
  "key26": "4mY6MP8YkfpqoAzi7XBNutJmJQYxkxgGSyJe8Z6sKs9t4Na7aZg5s9myYASf3c4FVkbZzNieEuXpuu6EadGS5PYX",
  "key27": "4ruoVvX3gtPdV2XGJEEt3fCQpqnqDVMbXjjWV6FUR6gACvT2iY9d9CQJYJpNoVtxc6ACtA5Fb72kq3E2ujhjW8ns",
  "key28": "3DTvrT567r3MXUYUKhxt1a2f16sZh1wBQkw4m5WKeynW3oG14QL1tTP7EyQ7ZyAFfE8W38K8DjKaQXQM96VwHFwf",
  "key29": "5Lp4Bp4mc8SxPJDE1cMkETCg2qHymeTxGxZ4tiWmZUYEz5JjXYDh7FXLvtAvyLAXgPVuK7yA288RWX4A4atqMZyS",
  "key30": "3w1SdxXr1evRCoHFTTiJ2yRfUisdn35ZWqUsaVVyWFcvK9EskrGazpyXo8Wz47E7Q3qaBNBeJLGE9rzfZ78KpSgs",
  "key31": "5H17c5qbVecnAB1cyPRy2ubeJaPbqgRwD5vHGthfUimNYSfm1VE9X29zut8Ez9ZPc9RbacjmCQB51FqYzSQU2v7w",
  "key32": "4XyaLwf7aUpxNqUhAp65VAr6khiQ3fjbQDNHPDuiFB84ZiaiR5rnPfbor29p3YzyP1VJr9bBB3pX34DY44cNcVhM",
  "key33": "2Smza59knvmNBHvWa4hL1fL42gEgDamKVnGi1kaqhceKp4kh2xVGXPrNRZgMGjfBAXc2fYsj8tE5rBRErVxjQCA6",
  "key34": "JFK2ev4H6j1VZ9jBimCM2KTTZhzMw5f49YtNJAdCsMe2mF3J62McUZ9acTCcZzKp4JipYC3bXvNH6zMCYxNz2hh",
  "key35": "3LgHPB8ySpSAd3LJoqsbQssHGXAKtA2UoWUhGefnJiyp6TUqGm6REbVn7PV4AJct65o4noZibbNrAvRvf7tumT8y",
  "key36": "4pYDkn1tsBu37abPjjaTmV1w2We5FtipEAWjuTRpg3bhcovAQi1BZgBHjLjWfBYNiLxWeeKUNfTT8BrceWw6jE1p",
  "key37": "4h6TxHwpDkA48guaA95kPceqx7ZvBtWiJsL9eq2zHkj6fPVCDp8M3kabyZGQc5BGmFj2bWJVovGDG19AzkLSZALs",
  "key38": "nmNZhUp2NuvymFcd5kqehJdUgfTrSDXxP8RY4pmVje9z6fAvft6MHrdpeHJ5t39XNw8J8XPrvnNCgsHusYqcfgD",
  "key39": "5M3pKGnHVbzsWnumzDPZd5ih4HYVVLr5G2cbbGUkghPv5nh3jtmXwf5iuej3JvJHdjpuKaZLUdxBV4D7LxuSWeDa"
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
