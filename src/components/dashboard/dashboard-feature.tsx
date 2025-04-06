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
    "34TnBwwSrdAD9cGEVJemVdwjP179jxQfopFxWDuLKsqPEk2pJXrWYRXNtsRt7TMe1eZkfywzRDaSVXkxsUVot3Ko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bremhpv1PUu16yksCKg6cKV96PqS3WGW7SihtV7R6LwEvxf4EyetcmCMCJWDgeU57XESMj2ZpUuCDhSVojQnuRU",
  "key1": "2HEaqXxfidquGa2qXFYfte7TCPsAXgXVW7BrZMzEaLGzsvtteUYLXSxBvFgnCuWkkb87nbRStf3gBDKY2Un2JPi7",
  "key2": "4ZVQwPV737ZME6qcys9bHAJXHgy1dp68H5ij3DDSgsPBvE39m6z6t9YiUUZ8g5KTxgnJMZ4LmhtmwuB6tVMb9gYA",
  "key3": "51LXXCXNdC4X1duKk7UKuomntACG6Qb8oPgN6xhubYgjZxhEumorkm8RKZdefwTeXQWdmqzQHM5FnccCbFYRuNJb",
  "key4": "Ex63PY5whjmZSddab63zQULYEeHXMDj2cJiLrjEQThSgEJYhLgZ6pCxp62uJn5m9399s7UPtayUFVF7U91x3yRA",
  "key5": "2d9ihycbGaCibUpRVQDbQTbS72wuokbjLuUWotMbsGFqXWsaSJ4UXVJadhaSEf6CDaRL1bnfpVNRnbcvs8Mb5W2E",
  "key6": "4v5Rcey8Lee6UGYm3Zgn4Cynixh4g1GFZwA7MX6zaARJLwH6woyamXgUFt9BYz33zV7zNpSZn1KdAdsgjQQjSwLr",
  "key7": "daEkAyvmJ9gtzfjNrFfN9SV47cTagzF1XdR7gsRtv5YF5fJEakNpAru4PUESpPWwmg7BigHzxmQvcXW6chhGCPN",
  "key8": "54WsqK1ubuh4GDAx14mLHok85f9gxxEdHAYSFGxJ1RjiKWrvpmxrnQwCxiMvncHruE5k8Qbkxyqk5S2MwY75PcUD",
  "key9": "5dYSGfXfrnB2S9jGhVraXRqgRciznzUxLW2rhVM1mEJFcHbYxk1b3sKnThWjQfpP9SBmNHibqKx1skjWBYREKVqt",
  "key10": "4y7GpirGL436FCUZmJHBs9Vo4MUBWd4kenovLfM3m2NixcgTki7VXAWN9sHPzWDfn7VNqFanoQyQW5XBZKycDWBi",
  "key11": "655BbCUAobY8ejiDL6uxPVh2kmCtvcMMceKg5TKEdX7Qnz6DwwHzLzD65gsFaC9iDUVkvLzNFbbP7vaAEtzK9YNf",
  "key12": "4mdK5k2PdVzGzW8a4yFVUM7UhnR4HLXqFj2bZ7rmfvuZyFUt6pXyPTv7j3Sa2HqUMT123n83SGvq6fRNF67PS61S",
  "key13": "29dgXBRqXcAgFwFe8uNCQVHpqhGEF6dWqF2AbWWMH2VK672Sv9yufrW4fVzj4ighi7vYyG8BLLHxyqSEuvJ9jYeP",
  "key14": "3x2brEfyTurajkxdpFiXccJN1Rb7d9bZNX9Kx3XTEMgmsqJZRRrXrHs4QpVueic8kSiLm9knc76LMttUFBxC6T6D",
  "key15": "2xWiHPVU1rwVUNFmMKVHnk88TPvG7hCqD1Rct7mfNQuBabncvCaUc169xdmzPPEaqNC6ZaLwHrDdNgo4R93tMHUY",
  "key16": "5M8tf8RWXrZcZ83dMUa7k7tfMBzXvV4fa5HceHiGdTQ7irs7SgdzxAh2xxPLJARtzCicy46M1xjfa5nEJN2nF5Vz",
  "key17": "3MGwECuMu4Ctm5EeczNWSyAicxaHrvTxRQ9BubAmAa5aHVZdYP25KHYUzWxxbA1ywQ88tqjPVDyQ9xjKPF31Fkch",
  "key18": "4hJ36khDZmnTNJKXgDZwgFDdrG3iTxqCyzgwUesbH6UcFbXgsRtFPaqFVnQFFS7NAPxHhs63hQtNJPGhmdiuxMBY",
  "key19": "3j9VfFGh19f5FZ69YimYi5cud6Dbwzo4GygfC65oKXas2eUAzfuXGc2zXyYqYoSJHG8Bv6CBY2optVSXSKPSzKWE",
  "key20": "3TXvewbgS4XM6ivNAoEaNXE1sk9mdMtMDC7ZKk9ApNGUAUT9vp7bQnZiPbjNAf1kQPJ5SVAZ8vvX2DvVnQ9hTd2u",
  "key21": "2SewYiBRAykiL8qaZrWX7Tprqp7fq6Qq194eirQrE9XrKAmH3RwXZhXRV8AR6imoKXFYVzyDJHriyzT4LAVVGaJQ",
  "key22": "3rb4EguHJBh5TtntsyCVwti52pNFqjG7xWPtZVHf1mu3siStjZ74TDKJxCmiUQ5tzAudbyFE72pgPPUZFHJo71xY",
  "key23": "ouLopPbj2La7dPss4fxUAKSZtXr8FAFkMzQ1gsV3wCcY1dFhhSgPn8F6bi3xc2Ej6o6vQ6xQEZEeKdZQkGeAino",
  "key24": "oXBdhpbrVV6YgaHCRxNgYS6e7Etsv5vbZu5uGgJNsKpAf651hpMW9MAwobYhbQYU5YJdd6JGpAxRjSgSRCXMBf6",
  "key25": "25eHdM68U8TL7m2WQZfgfjuV3g3Arz958h4M1xvpkD4NoJbtY8H5QyNL5Bhr3aNcgTxk8PCMS7vJ5jpA2uip9T9X",
  "key26": "3ASMqrafbM7yQdTYVzJjAhPAreXJpQYWgxeeQxt1BjWt4M7sLj8XewxPL97PBphPCJTgrGvnZK5i1uy5LR7oYDcC",
  "key27": "2RSHk9jySDjiM7SuqGtaRkBJTNxiezPLFq2SNWtMj79y9hcQbEmyBrr9DoqYpDqwnnRBuyuPmw9vnorWVsC62d2d",
  "key28": "4TFV728aPxh7eyPXYJtEKZUUT8Yq3ykWTe4zjDRjVwdYpoYuo58FuTq1S3YBL9qKqxY1Sz21ppxhygHX3DoYz8By",
  "key29": "2dgGrsihaSxHbroMhrPGd5FEaARG2RConY1K6q2CgmJhtY8v1VfiinYQGoRofto5V15yMFQRTy4axdJE7wZj8Q8i",
  "key30": "48e1ZXXQPhAnSYp2G35ixrqLgTYSd5mm6ZK2wPmUkdeWoW3uqr3MkazFCJ87dLXjaybXFn8DkFpwyZXgqVgzrg1d",
  "key31": "4c4ZfjE3zhRHW5dY3aWA6AcJbVBWhKbfBxt7VjGFGdKrFdD7s6YekaRf6DmigHu4UZGKBFUwLAPa4TPKdLd8EWEM",
  "key32": "47StHMGroDWD8UbgsodMKRwMfKYTcNAekaQ7wK6CpXX6f6zcCiHevqdfHyrXeBg3reCYdb3r1yxAio9ArkN9JZNx",
  "key33": "2TYbcQ71RmyRy5BpmT8uUZpkA8ptQiwpHmLgs98VfC4zR17VTAgHsm2wHRg4omawmru3hszwx4qxurp9f6Ujhx3U",
  "key34": "5gL25DinmaSdFoLJqF2Wep9JUwAuSqoxQNXTDk9KwnYUhWi48D9SFJqPpEnxMcWe12DMFR3RLe1DwYd4rFCpTLnY",
  "key35": "4oL5a1Y8zAy5KjqaPd3xe3fhUXLjAjxgWTTitJFPjMSgxQ4w73avFbgrLPxM1nqmxT94cX78cFrrhqjBmiNJxyiQ",
  "key36": "nUxx5CjnanuP94qq3SK8nf6kfQZU6CwymNRtDfQEm65oX9Xvonsx6v2x1LeJfsHJeZBHn6rup2YRG8dz1QGqUs7",
  "key37": "4iZaR9ysW19p7xHMfBJBtwBWpgqGhZG5zLG4M1cpdP4oYdsKdhRfXoAdxu4FxmwYPLTkeg8k8sA9wL9ysYBSknut",
  "key38": "5xszgndvRYipkAkjXkwJFPqf5GBVXm6TFjcm2dmXUMkL1mpCufetYZsJBKzLHSyTiKSULzHm4NED4i2etgwVyjKZ",
  "key39": "2wubTqgFabqVhMpPVatJDrxkKqH5cuh4ALgCCbSEKzTs6GQ9Zi5mWhcAFw6oszXXar2Qjembu7tK4iM8KgynYTAd"
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
