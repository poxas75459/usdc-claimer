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
    "4RYtSZmrE11Ahgn6u18pMxCZ4E9WiZJoSMQuvnsUXwSquRH5L9Qsbi3NSLbrcxVbWCrdtKjQ2mbm5CG9fAcooC8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5853FEeXcSAiNtV2fuB2A3NnmDyhzF24KNuj25X7G2e17ggjQD5LBNugqZVGzt2LCPLeLicJESKwFjJ8jnyVKHT4",
  "key1": "4tLg3YASuUBuJA3iJdSNieJfRY2MHtxdErzawwGahzK1kbE5sTfJrYqvu4FruSYJLBMCXvH3634HRrwAb9pimzdQ",
  "key2": "3fe6ndcrT9ZNik7SwYvhmXjcrjL1mMYVGNqrd6nioGGEtxPhVQqW2XNB3nD2CjsX7KRvpw9cMPcsdvDb5RWu9ms1",
  "key3": "2Rqu6VZYqZMTcHnrvR5gr2iMJJohpkhTJYV2C1HAkeN26FruYZNbs3xeTYPaWNhiGotTWzV2ddUvChoBH6bWEjkk",
  "key4": "RkwcbLYD3nJYGtUrYmKdnHFMyCizG9P7KdkNBXDyfAYX4RAPf7iwGGmxEXQKi4UNx69PLtfrjirG4znQGLUxr4Q",
  "key5": "4DrGdqhg3vJ7jDatLsG2rGWUEp9VdKftP3EigztwwG3sztad7qY2AJykccfryYMfRzuCX8vFXeQbsdgSNNoAU7pF",
  "key6": "2bC5x1XcrQeP9HXuyj8Kd8ouUCBaZrajA9bvwfHo2g5mzoaMjYX7y5u4jy8uvPGzMkfC76ju9GwcfjcYSPTP9za4",
  "key7": "59aG4hah53bvw5ZMXstkMbyaxsvJ2Wj74cuihPSNKtWUzrwnKL8FHRZbxLcaqddbWNmeBEbtoFA94mJKWQTUcEap",
  "key8": "4FHqLkCoN9S4m4Mhgqgt1K6WVHqQqMLorps1D4JF3MiLfRZBqTkY9dyoFtZ5N83FUCeWYUU6PweumWx6GWMP773z",
  "key9": "2MxrzGuZZcD5jKaRBL8Gv4xsrp43paEegDBwnaM7EKiTCA54Xax3UBnqB46L3mUWtbcqycXJaWZEQm9ZgRi3NHio",
  "key10": "5nRHTs5BM2hnhN21PLC8wWoTgVqBYbc4m3aK6DB831s1YMcMrXbrSWGEHbLsDdx4huPwWMmBd6ks3kVAthUBRk6d",
  "key11": "3hDYxGyG3EJdxZRT8xYeYEuaZK42RBe2xKiPsW73uLFFpj53UD5Mz6bwbPLFcU3pwYjx6NhY5vSi5qnTZDifL9go",
  "key12": "2VAqegJBuJix3VLZ41zx53GM2E1r4fDDCyRE9r4TAwWDD27JmXMhdpg7zXsHNNy2iHqQXxZ4HivSjmLGDMh3xoLd",
  "key13": "2kf1942gwBsX8rS3fZnFQWaKqRyZy771HKj2VbHtH1hTAMH2VkJNz8gSUScu3bs91Ey3kSajJW3ZGReCFdUdY8Jd",
  "key14": "vQX6rXZE4xKmYBGtGXCZ2cyiPTB4rFkn2JPnnJRJk9cP74yyHXXqWCB7pw9mnNJyyXsENL1w8787Z6zgZiMRjPK",
  "key15": "fiCANmPEtVBkADg5mHEXtvqFi29Bx2PLgHExMSzY21rPGeKYZLXuzEmWcsFw6pCfJDY4z9e1pU8vDzUekYWuK5F",
  "key16": "3T7YsAkz6RyweKZXLqMQGQLLpeBQdpGpNERF15iSXvjKmZKPV5JZFPu63Mr5MsnM6Yd4YwmA4HBRvH5FBXFzQNgG",
  "key17": "3PxgaPL6BM1C2JtNt82YRyrLnWDksj1MfXEVBGF3K64oZeoDS4HNGqRUpogCfc96ijPANSSdokWj1kusy5PHRRCz",
  "key18": "2Xp9Yx9fT4JzR2H3m1mFjcDZpjBmHrJbZZRHGUXthZLaRp84iPGgcrGEsyHUFrPLQ1w7Tv54G1RvhE5anLkd9RGq",
  "key19": "31RpoFEt7qDSxiaS4mWotmThnYNsK42dNZSbNn2unxGtcd2SUhieSoft3VJaFpVYS88rPWV9nFT5QPDFRvXRUxMr",
  "key20": "3rVaqv9B7bNp4Z2Gm6pQR71JuoznmX7QzfaSbehfUgkF6SGX4R28GneMevXak3fGPEcMBGGtXPyuep9mL5Gk2dGo",
  "key21": "5FPygdrbKhmGC1uEsLN4sgt3kj6VitF3px8kckPqwfW8EdLzuk4uB2EqmmkU295cHDX2622b8RfP3Q8BmeZ2FKuP",
  "key22": "SyQGHgaFd2GmTPej2oFz1s9TVaw8S2V7q66jGLwpoNAxwQXkstSVymzjWWBcdkcxRCQwBeMguiFbtFgBzNBYuNp",
  "key23": "5cx5RtX4jYsJN9zYynwtDogFjZ8ax58sfcjWDgubFPhC93mfR9jQeEm1KprgBsfNbv8ABUaAnYNPFWBFQpgWyBHa",
  "key24": "5iRrLTtweRthjv4FTMS8bnqQobZAzLTxEwyxpAzwKhg3P8m711f3A3CuMQVC5dvLDSyefVNgpW21iXAem6RquVkj",
  "key25": "7FZf97EoQna7mn8yyhSGBHiz5wKp5GxoDCBNfsTeyxiLiSEdU2EzpsqXX1w5KKcxmQtdveaep6Rd2brfA1LtSM3",
  "key26": "wLkrQDPqetzD4HXtRg6kbrhb9gd3HG4T6Cp6C3C7zEf5s5yzKacHyG2rBUzTawJDmt53EZBtrTCdTW7Eefb1gaW",
  "key27": "2cRwoUYQPCVyvEaDN8YyncsSuHaVL7ZXKLnDEp9RbcCnbxnh18Utp9GvqWAcAujyTdgLykCRTBJcn7AtwZ3NuU9V",
  "key28": "4bHtpAhGX4FNHWwdtX3vQ5NizRcwbScm51LevNXF9QTYR9VtjzNTNFQ67HDbkrskaqzP8hEwDmJ5eE7tna7Q7wPY"
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
