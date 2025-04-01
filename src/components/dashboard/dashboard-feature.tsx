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
    "3nZ7iPfw9Q8jMuHZP5gELN7B7UfxBzR4UmPrszMWP3kgErrtZ9rqFegCPiFJJV6PFoGHoK4u7ByND3jXswp4NU6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yW4D16rYtn1JwHFCoq2XFWQbumEKJqKtj3AjnKjPcn9yRJpNveFvBeGe44qrRAJot5qQMjkVJ7rVyj37EjXqxbB",
  "key1": "3dFKAidgfGw64ffnb2EQ2zyGrN1RGEfTxkxgNbgaR7p68Zar5Yb21nrvftAruYZsfU6f8QJ42gzuHGHNDEcrpCnp",
  "key2": "3umd6cd3LSuvg6Nc5yirPuiiNF8Uy1eYqH3ej5xdi1dnZxXbr7EzWWxQapce4EEGq5aD8CbbsBxNCisqX3dW6rUr",
  "key3": "3r3WTpcJUQhCTuuN4zQTZzubEGADHDYEaAi5NgXQgTUV7nMAoFpbijG8EXmqdKb1nAM6ryubtB5ynKuLTB3axtDY",
  "key4": "3GUx47iAEHisLLeoCpD27qUetj9Zv2NECpMUxMxZhFJqFZ2BhVfboQh17CrdkDYBTfRGCZFvb2Qd5e2DjXRTfub2",
  "key5": "WfrQzsoYDGeWs7MeFEUvpx8A1EbWogXb7u6VPYXL2jZQ2mCDKJ3zeD7Ry5o5j8kmL5WbqB8HYW6uW7E9gbnKEoi",
  "key6": "3ZGEJpKMKvJiNRJyuD3a6YwZPUafHZyDFT27cWGWfJbwMSAS8Vkpe7ihxW7QtrC6gaTLjJfK39dESQCjpNhZGPc6",
  "key7": "55ciot4oQxmQA5DHMB3zZ9nuH1oaVaW3wE8qSrM8xAYSPKhbFTwLa5wjF79sQdeBk4wKGKZBXqBuFBb6iSmtWeWT",
  "key8": "2H1sQ2uksqVdPAwpXRCBHChYvrXdrdFryyiRoSDGxXM7Wt9SkCyDhcKhzu7e4NEjvGzp1T2egfeX2HQstciqfQE5",
  "key9": "UvNVrwPpchnJwEVzYCUNyrnqxvnGUtHUh2Vz6hu2YWr9UccT8uML2vhoRgtA9avdbnsDYhruNUxUk4b69JAnQVh",
  "key10": "618gBsAR13hr6b8z73mh3k19PU5cNxSb9iAvaMDvYmXJYRLJGkU6E8P3dMBhWTp377wVnYRNMH1v7PbBjtjpwZNy",
  "key11": "exggmmrTRCoaM5kGttwMnfDuzyzBdVgBjNS37CxtZAr3HCW2VNb8qNagJYfuCqKnzx8WCuFpqdNWr9xxwBNEFu4",
  "key12": "4bJ57xLq7R8TVUzBnJZTpBnvFs9HFeP416y6T4weTZy2fPAuCWCN9Tf5pQF2nizaJfaGRZDWrLxiN83EpmSMPH2Z",
  "key13": "4tgsCNgA7yEyvS64ckKYyDygtxM4sTrRmdWDGw5sdxw9oCiJrFYbYSsCxq7Aon8aK3xpZ8vM3Q9T9274WYZdTqYZ",
  "key14": "3vj1JrDLi2RDoHLxiYpQVkQMJ788GGYRVcfFBo5rzXKdSbdZAkA71CnE6Zq4pXxB9m1kudaACDtxE62pEahtZDSw",
  "key15": "4MVW2gDCPjja499xcBpQhTgpVkxct1UiYYzEAYYLceuockb6Gw8Yhw34jhYM7B6dDjivza3LjkfTrnEmKFC9V4HS",
  "key16": "5umTSTUpmku1c4fYiLXbqhMbaedtJX9GEmrPh69jsuTWm8ALMv9EBu5rR63aA4BDUuLNVYz9yjgvyZUBABgSAG41",
  "key17": "2Gzhny5xtEogLRXPHSu1HWaWTX19y1vEzyCQkPH5he2JZyvNHyf8aRiabx2Y35znXEt6bBW45vauQjfc327WH6mC",
  "key18": "2cK3WDGbikujqHxKFrrfkSwasVFAmLM4eCn2ZNgnsdv7ZqZY5avFLpj8HmAEitL84rWRXo5csmhhtGEtohJmbQdv",
  "key19": "3rX9Qt7zqvwE4HJCpP3dVrbrBBy43aFXkLsgAnv4QTvxpFYbP3BVori1vrc4RmGFLYPGKY8knsEvQnFMmURKPnNe",
  "key20": "9ZCKZWyNH6bYyyb4emvPqgRJxis31vVcp2qYgi66TRRJaYvYjgz1ipFc9hz1Wq3zcpT2Y99YihQf85mKqsskxPZ",
  "key21": "4MLiP75x8MYsxiUDpK1ucyGZEn98HUxsH7pBhe3RoUgv7KqqndW9MsGDF9sdpanBwT1KMEfJt9QyrpR3Q6vWyi4R",
  "key22": "3pVktiRnf99fZWqiTGQZyqm3Ud4XaAQvcmG6qRTgQ5yzxZbWKCZnQvUXRJhzHvAAfQPKoLVqk3LmMvpk18751Fbq",
  "key23": "5pW2kvMiT9XqGqUzadnkRCDFsVKjrPvzLcpMpXQdnFdqcYFhp8jvUPoXAFwd8YpKg53FtQ5RnCeJ3LJzFDmcnX9A",
  "key24": "5QBR5KWP8KjNj5Yf9LTrfRf9suprsVYjbuP4wwyrNUxQbpXEPPay7gUxo11Z6YhVonruent7VCqfh6eC252kFBNU",
  "key25": "ycjxBv6qQcFvDzwKxACbci1XE7UiiuRHP5sBzxv8oHhENYxzLUreDaMDv6jSa8kTLtzhC19QyHKFJnjL4FkUJU8",
  "key26": "2L2RbCuhLLRznyQW1dBvdAfucmGhQzhoPbX6pS3bKDNzXKpZ2jkzYKU9SeLDd9hqPaRWcojPHhSNEK5a3w6ihkvK",
  "key27": "3FQtmsoodXusJd3FzVNH3uVB5TKJWKU3cAWiZKp75XyUgdCBmz6ox53KRQmUrwUEbCwHsxGgk5xuykjxiDPtXGNB",
  "key28": "5Me9ex4s3ZCqvkJZSgqtZ4WWbiUw4yu9hXPpiTDgEyffbw1CKLtzNxmaKDyfd2x6KEg2ggDKkAA3vEwVaEZ3grbS",
  "key29": "2ifjwFcwNxPtjLrYd9GLaVr7nHJRpq1Y4PGHHdj2jT4gCVDxPaEsRnet7Fw5zKfDptZFfNyR5FCPRootJCGwzaDp",
  "key30": "4UeXK5eVbx6m5XigHbPzQ6GNV2ccoNN7kfqGNdoKyPm2KVfGH8Fhqt5fgDUZzt4Nx3Vw5GHdL5fwMCGtEzu6iYiZ",
  "key31": "2ywekwd7LECw72XMkgxtxcjCjUr9ftirfJEfo8z3VA8sWkhjpgHrTs4hSxasM7m1WVEiHvz2Aesrxg6Ev88nQ8Hc",
  "key32": "THt4xCWdMYJtVu4C2RGrW65RfDk8XNtyyRpwr75wbygMm14gqNknP76eSW9w3hiRCAsw15fn4sbPWBK2J46ECBk",
  "key33": "qhUnuHa4cwxGrSJwkvacKwZjapMN9MCexV9Su1qeeBGuzZjgMdSjVvRF5WsGnjnAqtqrCBTB9uofaMFFv6myzeu",
  "key34": "24KMQb2YN7kCwBTzUCnc9WCfv9VYkDw2Qb4NJJaY2wGhuKWZHok5nDE9nrHXP8wmpgdsKaf9Rb9HjsT6cnwunadn",
  "key35": "2d5MFBXJq9AERyD1fwYgySoajRHNVbpWt5BeXUhRjqRBY7ueoQRpTDnqYEoQu8G96kuHGhKr6WjmZUSVxS788sFL",
  "key36": "3DZcUqXJ8S8ocVXJpQDhNKAbgxMZx5tAiZv7pTz3UyhPacf5ZjFiJb5DsyJWC2tAmVNHftexWZjGGZqykUaD5gUq",
  "key37": "247ip1dcQnxLm1V3KvZZgqzDf4jxYaX5eDnYwEbWsDoKDxBGSSwVvuQKximoqofmfc9Rz8ZaD5TkgN2uQqR2oZEo",
  "key38": "2rarkraZA7vt77oZ7fWnuwNKoevG5v1guBrLGcrxj4W1HpY8pc8CWqB5AZdduYhzvtYed4x1poUqAW2PMoZebGco"
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
