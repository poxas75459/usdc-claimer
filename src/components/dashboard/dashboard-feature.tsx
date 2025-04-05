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
    "4hQE1wusFZ9WWqEMmiymihjxfP6NuipDCESAxf8yFRvMCbLG9H1QidfSsEM3s9WymdVp1C1qeqDs6tQtb57AURiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WUmxXm9ZqkmywzWCEXZjnmP5oSo2Gdhxe3nSjxNusAa6ps5P1PmLQmoLPeXnmiqB2LWAcKquXcFgRKe7pxEE5nx",
  "key1": "3Cwije38MnZ8gLAEMAGW5Be2649prpXrTuwAkEthWZvtx5HMhHvD8b9KMmbvK3u6mE9TpoLEqjHbrBs5ebuFoTF6",
  "key2": "5PQGKPEYnso4WznMdE4f5SmJagtiUmXn9Za9epQgbD4Rtz7ifJDbxpWqqX28myw72RYDVbR58crW6D3am7CeKvbm",
  "key3": "3zaJh9wxaQ61KMUjH22fo6L7rLrhMLa5U91UijBogbH1KQKgEfKS2LxNPNiQT9CsHSMCwJh5Rig4JuMLoum2SSxp",
  "key4": "5DcfeNkibyJ3peRLNUC27fGbGfmourS2rr8YBW2Btp4wsr4MuVpp9gowkn4munTnBSHahBaWTmQSRhsqe7cjMDAq",
  "key5": "hYh5Cvi9CcsMUjFpC9aixqLxXmN5edsc8GQZu8GWTxhKw6ExuZpf2KjTRx6szARQ7vRiYPsYLrjx997gxkbqVkM",
  "key6": "3vWicNxisrx8jmV7ftREriTkxpmWZbt9UfPBYwoeXJwEHKBYuGm9QFzN1RURXKZriNjR5BTK1ZbYkePAXaKHerWN",
  "key7": "3U7YWsCPTUGk9MXC9Nucn3a4h1sygEiupJ8rYhLx5c3WvEa4h5WZWFa71FmL3gKC9WRUnYg3PrKCjnLR2howaBgp",
  "key8": "43HBbVZKdqPQJo977N4TxLJ4gq5bk9E7E6Wkxx1Z4LoxkHxy5WkMSKeomPKnUaWpPD3KucxvrGQAm6UJxWyWkJQv",
  "key9": "5pVGcqDAxRnQ9Y2zycrgeUDEedPxKvp2et7EXR9qR9E96YvZvxDdRLHuEXpiL2yMSgsGdnpz95KDhG9HmzURzeZS",
  "key10": "2RTtE3yr9AB2Kk5wC11nmHa9oyw63hoN5tcqtfGX2r1bg2h7MbKu2nXHpfVsnypMG61qZ9ZYrcmefZFU97sn2rJA",
  "key11": "5fqJ7VK9TtqgCG4Hs3PBdmNWUbQHrCeAaDKDFQJvD6RWmN7ubRXBNMRZS6CskxkTXkWwHYXksfY82CjDw1NgNRo2",
  "key12": "3ac5nkK7JRHQ5BCtDJJCy6rejHxCZZDgZJsHFfiiUKBBwEhqtFTLrBp3EpE5m7i6FifubEFfnZiCiTSkQWeHeaLS",
  "key13": "4BRGtD7yPdWYcUpzNarpqqA2APg4217at265C22JZ6a888jJEuHppYxua3cZSusmPggee4LCVd8PTvSjhn746pTH",
  "key14": "3emsK2womJQfv7XLxE5XtyTqGwuT6GdEkaxPxnDk1YR4Z3fkk4iDJ1QAvhfjL8TYevfMmyX7GpPgYxGTTk1o4x2k",
  "key15": "tQuLupCDExSzaK3Jmt3cDnyJTgLmAhdm7fDj9pBNFpGaWuCBKjNFKTEdooJcUYa5hZAhSPoZonrUSfoJtpr2f8d",
  "key16": "2bCRiKobN8SpgkpXMPo33m6MVEUR1N3HwvCaFskNvGkHx4zB8c5yiJVc2KH2cxjTMgJLumhYhPGqTSNmiwUTVSHh",
  "key17": "4pfdUz29RRJD17ZJNCDDnE95UcpeMnFsiiBerpLmKCDw4q9av8sJ7ekW18ko9cQmaui2N9gjBkXsAXMQk3NzSNGg",
  "key18": "W9spyxmJ1WJ3z6Fr8tebQizoMapVBo2EMMFkooQAwtVY7cc6KBwh5f2sUrQspAy4rF2Ncs52k5WE7nfuiouemRW",
  "key19": "xZXWu8tE8vSZ42Gf6wDBuRwFbLrGgRUVqKZ1XioRJ4Ajx1PMEGA2SPxC1VaYPPxFkAGm4Pc8BrnFwhpFFbHPyjM",
  "key20": "3AfW8BbXK6FcuYX3fKizdLTrVHV8Fk5z6MrUk2EPPZH9HsZHEvEanpnB3wVmR5Gm9bCoojhwpHxk9yDBoRPSShGh",
  "key21": "MpR1Vax4NaoVXL7iSSE7n3zohXMg7XDP6Pq73Sr69vh7JL8ud2ZUBRAmQmx8DD2wEcCcm4wBqh4j178khH1gXTa",
  "key22": "2wFscVNscsNpKhPreEzskEg7mXrE5EHLQUTdog6FJjNKN8HnnVozTT7fPhjFVQYvpriSXtNjQ5C9wkkWJbWZv5a1",
  "key23": "5aVqMLRN7MzKd3hZscUDkqt4HT82n4jbFvzuZg1bZvozmyM3QPPeJ3ERu7ky32i2tv7U9GukXnnSbbJ7NrmZ8my2",
  "key24": "5fhnZnYXWobQcWmmDz3uGjHoPiMGHSERWZQWBzj3sWz487f4NP8TUxXzd2bsRXiT1aRXQ1f8wZkF3d3m4tgJh6dU",
  "key25": "4kUPSQtGoCpWGjEiVp7d8CtZEVNdzorpfwQMyifWCJCQ16G9DWjZ8mkXKoN6dLZrxa7G8TXhS49zb5urMm3jHXdY",
  "key26": "3fstqX29gQboCtEjenrjEmjZcfWW5GdzHQnJDMkbvXXtMTHPUoneC8Jq6VMJFnmWyfjNN5cHyeEiAXU3xGDrdpdX",
  "key27": "3U1abzV9jbDqzUTBACp7iFaTwu2wEuoE8fv3DAvuBwUjXtrPyv96Xmx2A9zzKQZFdFKs4wfbzBqyg4n9JRSN31mw",
  "key28": "3K5V1uvGArtMc2Q9FUNcmqTuSdvLf4SknmVs2xZwQLzSF2x8Dix3EDJkXgygXRRp4GFkaQGQjD4u2c1qtBw7GVAn",
  "key29": "2JcVzFoGF9yM8cJRvQw9pec6zC6s8gMWW3Wm5hs8baaxdSznXSTsoGJG7ZVsLs3p7cTvvD9xEsaxNtBBvTcrqioF",
  "key30": "3BDv8ojkoRLJpwddBsEamdeR1rqZxAZmx6NsdjAs4zxdR7JmwZ8cJnGoyym1ViApuNqVKzhie93zysoK4owBNDyd",
  "key31": "cZVUypM5KUf5xc6Pe34BW1XnMVV4yXzPhuu4kdKrL2vDRcf3Fj1VXmR97EYB2XrLzSHvPyHx4N6uLnuJaVxKagf",
  "key32": "5NtsGPjkdtJ7bEcfZQeJTH8DHUZ9hTdpXP5X3qJypNEzuiVBWGDKG8BH97vivNsGsRt2yU7FqWqkfwycTqr34woY",
  "key33": "2cP3zZxQDMnpsMNT2p3yMEb8DWefywVATgCozNBNAWmXLBfvSeXZRVdXYA4NTgd5v9d6w4ZpbX7XRnsgnG9q5Q5L",
  "key34": "45YqY2oP7Ke4fbZBj61gLBBiZknHUEDfHLycmf1cmc2wEyk4HLeZpRyyJBLLCeZJsovZTAWmVYQrXuQHHVYLEzH4",
  "key35": "35K2V9J8YkhK4A4Gm2SuKKC68H8vKBsD1af5RBqxNvSkYsXyaLR6jvUZWt8v8FnuoCXbpWHusD6SYQgsuTXg6EQm",
  "key36": "bv1s9R1coD4YpzkQHakce4UmMqDuDkwEdatZx2vCuAJakEXRRYvdrskXCqnJGHSLBNmYVtDPAuxCeGc3vTvKKjd"
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
