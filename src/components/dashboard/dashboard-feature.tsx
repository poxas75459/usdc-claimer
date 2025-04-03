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
    "4msrmTdBd7iqnm4AdzKoTJc9q9SAyoGvLxvmFbRGQNe37yBKP7UDMsfLXVwRPyf71vDQ4kfVHYbqZbkUw3TwQXPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tJqMaxRNJ82g3NMbsHYuhp4HLSeecshxGPWTiQQAa8BW5mxHdki2zDAib2Pv1cHbxa4vbUeifCxydnFfbqZXbhz",
  "key1": "2KeD9zHuAFxMc6co41X4J9hYq6bNf9R27ZVBBDhRzhLPZrRjanBNwHdc4cKCAjAhHwSk1fwySBX1UechAytoLX7k",
  "key2": "4m7XeT8Btqyj5VETKNMNa3JLiae7AR7bnxFFwWC322urLowSmw1SKsDBhpRxnnXxZ1zUb6dCueQq8qtA3noDdp6F",
  "key3": "2p7C1wRhCcWM72qJdeaa5CiM26qpG6xQYW4KGTzfz9B3dfa8krGgLWjS4tkP7iY44GEdAtv5Ax8XPphNxNcvWHgb",
  "key4": "397HHrm5DEJH2HhdMYcQVnYLJEhkHS1VcwhkDihuRadMz7a2tcNj5UWMqzMKTg5EKz5wWMFP2SoDaHP4K48HWPhw",
  "key5": "3RkAAhrFQrdx7JBsC2FM7CSPkUkTBmguVT7wSLtFEXBJxyFNtGarTJhJo7gswYMNbc3TDKYwzgrzjt6Z38bg5qpe",
  "key6": "4tYKfXADATU7tZptmPrigvafbFfAeJ2Tq1aLNMwrcbha6chyrkgCJiRu3DTkMwUm52UwpGDH13Vka26TgZCNSxhJ",
  "key7": "3zS7yvuC34qxBZp9TCJCr5YC2zLsdtLibBaMcHvft1vudzyW8TTPpNtGiND3q3gCziRccdRxkHkzLCaPiwkZ4LF9",
  "key8": "5XdrTjem8JDZKjTnSWq7aR4SZ7Z2ceSoudqZHSfYVxgRLMoWprc6VUNp5FVRD28i2My214quVUshcLTxyeNcWaGd",
  "key9": "5R1P2jbqBQWPGqHjxNZshhpHsW52T8piEPjPecCcUcHTeo9pES8S3iwx2WujosdK1oV6uAWqHD9aPRfYtFkanAZv",
  "key10": "33Xs6z6jReN7V3SRRSiny92yb9MxUa6USkFw32rua7wKo7ome37i9XPxJbAc7VmVLxSZkqbcKUnYFTYZcWDK7iWs",
  "key11": "NypMFDYJeYyb1kqVD6FQcZfDL5hbphu8CUWEXNXTPxb2Vm6QRpu9GGP3KgbNmPqJckmzopX5rsP9dEeyAmnkaK8",
  "key12": "3UuXivbMXuJa74NEKeFa3x9CzAvFLKgTQcYXGmrJRnsZCcCKU2NL79d38ENKsWLYMXuAa3F1uux9gAesEEsZbtiA",
  "key13": "4MukdqxS7z9a5RTuNRhfNRgfktcKPPvnN6Hzw3jt3QQMBdDuzyiA3DbS9eMQ9hBhUrhP1VKa4cY36U8mVij52VHE",
  "key14": "3vJmFn4bmHumDPDfsJnEg1zjBwbxiufDBLYPyR2HztrKqEc5uQRRK9riM8MeAQHqSJpf4z42JbATtaPD9H4xXTG",
  "key15": "3VwbZRht6XVZioxQro47w6CUoGRkjXMhuVGauAPZnHNbrshz7ahMVqNptNUQBxmSAFBrFnDgr12DemAjwZaQEa5z",
  "key16": "3a46xNLZDesyEUPuh1hzHJ2vPvZEcc38gkuKpxhvfBzYvW6cHA7PzFREMWb3j3CXmR96A6y4jrJaEK6HynoYH4Ak",
  "key17": "49fvrvs4XdAt3gtRHQ9DnVR5hYSmyHVX9hq43mhjD5fBdSZsWUG9h4QGizQytSSgw2WVB9Qi1Wdw7Ga345RRxB8q",
  "key18": "Zv6oxrTCPsgo5AyGoBCxhb7WT83QH2nCDsG7ZtZjFWmwDB7uZVhTPo2iBk39cEnhqeRbz9Cg2B24NJ6ePPQwSis",
  "key19": "3vPzDhakybLXJ7Ncvi1nzohe6nfxr8L9HSKGBqoL8j2ZvCzGAx5rVtPDVx6nB4PnzdcyxxLb9NEWnejVMhiNmFb3",
  "key20": "54zifqRbzEg4uWVtj6BCc3pMPYpA1TWjuxAaXcEQcGD1BiyuSNaeHBCZz9zibdCvum6kJ7UsFRwGmxx6VKqm7TVC",
  "key21": "3ebcZCmCiXrRSFgCMy6LmTM7trGT9BLVMJLBJzFJSZ39xoKq2RbSn5fNS2FShoDvG5KuBHCrrn2aDgkzCffwmdoT",
  "key22": "5GavuRp2TbdqijqTnHjzFVEqKzBh8Rat7Lb2tRznuvgd81xXrYq4a6bbu9XSr7iYJrtFdbQnE38DGAYn8au9ZfwK",
  "key23": "2V5BQZB6yfyfS1QYfHN937iPQKmp7jwaDAbRfuyQVcSrhJoau58ozsc97ZMPbkWzq8LbgDPryJAS36oD1jecn3X1",
  "key24": "ha3Y79ZUrDrHZXpGZ9VRsjsuqeUN1ZC2vrzxtZj89n6HoQDf9bXJijHqVdZzi5yLBSXiFMXzP4vZCoeYb5SyP6H"
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
