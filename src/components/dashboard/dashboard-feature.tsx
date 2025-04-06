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
    "419SemzjVhVSFUW68pN4wdchaycpu7EydeJf3HieC5qAp9FeuBG9aCvpELRRnEPBiNGrrKTsNeWzcRWRGt4pTo6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NEf1scpoTgWv2gXPSR1ZHzMbpyBmVtexM1B76QKZRGn2QdBsYkUzkb3NaCBdF1HtJXWRgwqTn37KzquK51XYSZx",
  "key1": "65Cko8mZvfpLQktcQKqD9kpV8ZEALiF5oPjaGB5hzaJGQPVHLoCkdZBAPRtM6gWNEaMLfeioigfH2vYV5teJqSnY",
  "key2": "3fX6q8N79zoS5R8xADe9hzpCE4rJYLSX2nt91nnEZKNCFbREGDwrSweGQien8UXJWNAvW2LMrvv9cegu2NikJQ3D",
  "key3": "ZoeMEFKDqALAyqVt9u4LtjrbgTtqCnvkAPNMYYshFKTp7UNZWUmZA2BNco8zvqYPhkvTzEdRBbZefCWXei3DnSB",
  "key4": "5pMfM26qqbJ5Ksitc6wv6q23tFu1V6xhJkkUHW1gQCPiSmqwkUP1fAzQRmHXUuFvgQMXMW2ChB8UvQCs8yfrKCML",
  "key5": "475Ht5Hik5FtpJnSReQ9CgjFaYQKbvREGsQ6xdiuP9Lf5bHq15P4CMx8UMCCHAnLsJvGE1xfb7gC63cLHvQgK2oP",
  "key6": "54yvxd2ThTzNTm7qwExSuZoB1pVyCM2wJjkUps696v45dHbJQJFmzWJ5V51zFaet3oTHV6MNEqw4WR7tYCoWqDRf",
  "key7": "5dv6Lw9iKfmPFZPVHMh2KYmgaxA2qWa5sp5oJtK5gffrTs6orKuUtkikmPQj6JC3fqdAvDR4tsDqeKx4iWnHmgxa",
  "key8": "4iHbR6f7wSAdb4qiHvue7PjkMjXBPHio7dY5AwMrpMiT2ESto1fSzjowhb6ki2DiHFAUep6t3eX5CU2DwJDkjezR",
  "key9": "47nWUwkFxxXo2QmhEfGjdfcuGGWcBxPMPkv1xCxCo186kRkdR5EWUqkVA2VNTS3AESGQXZEtLL1MAako3BzHZs89",
  "key10": "5Rta6JuMpwfiRH99ktfnYP5BvD1jQRBBCMrpjZBNEb6mu8uQ3wTeC4GCNvvYZgJbaXJG9k3XZHxvD7ouc2MLVbaH",
  "key11": "57LpJPXj7NEqTgnzVYDwKKprnHpnMsgMVaX24PRjY8PUXHFRYv6YogKNP5XqvVY2GBWnCxfFta2zSt9KRAy1timS",
  "key12": "2cvmWZwFVMFEpsVC7Z6K7fuPxkBWoNtDvhn1hoj7gxNRQ4F9uMX4bAtJitAZh5opsC4bFP9cePBSXwPVRn9EY2Lh",
  "key13": "3xagYGse7fQ7QEFpQu9pWH8iewF3H21LLqYaqyRbDZNVcrB15isxAtnYToYcNoGmyu9KgQtkUPuWUBaPfqMSakDA",
  "key14": "2Ng5QAtZTYKqXumY7Wi8LEWEGKcvFtpHdP9RUNMkyhNegtwkXSLipXSnqdibMVxMDQMPGvGRUsd8kvXBpAjTq8vq",
  "key15": "4oZXtRbD2SXyDpqUcnzaCth8zdSqeaTTMMCHmXunbxTr83LDc5f8oMGpUkanZ8p35MvHCvnVvRQSZS6pyykusgW2",
  "key16": "3memd5BPcX2SV5XkvGKEzrmG1QReMP4xb4FnkGDunW2btfQjtNjNH8c3NazbUQhKm7xKD6HosEWxLxpwCYnKxE4c",
  "key17": "gmuUtkVTxtxN7AFohepPTPJuEZpnsL1uv7uJhrw32e7cCMB5whSwMGA5f3BM2GNWeei95TSg2Bf2QGrZcu5BJFe",
  "key18": "QEPZz7cvNbC9jk1p1hxmWEeMqgL34BSRcsfQa8J6LkALQNAjW4LbPKixY2xyyn7haX2VUeo9MrzNskJcj9YAaco",
  "key19": "fVhMnSKoLCwiN7rjzCiWUQgS7w14JY1h5n9ENWLyJrrspSeWNqtEqUoy1M9iWWtR1ngZzfG2rdsEzTnXEswUYMF",
  "key20": "5CRHaZc1s4M4Re11sTFCsyLbSCXEfrWsS1vTBuGy4XxJFviyT44ohwHAX9rPY3UGPpbWJJUvdytY2nArPzktpv9y",
  "key21": "5aYBGn2XXujbzVuKxVmnkfG2TN6TEW7Yy9621un6eWmbdoxZsi2D3j8zbpAixkXGGYEe94cQKbRHbkTWja3PVcxN",
  "key22": "487UtyiP8UkBzfWh3JZwx14oYcYQA5S7GHDYXaSzWEmZEy4xMeGidzvrsbmkXRbNd3RUFpWnimgwvB23yiHrE33i",
  "key23": "4oLmU4aWDuTXxgbEhsPosPE2oT6sgnjaJ1ma4qxsoRvB3NUi7jo2bzR1VQvnc3QwLihNjrmkQQ9ZhZ7fpVKcBBTL",
  "key24": "4DqP7WbsyzUJU4qcHcDbHGCQ3ETLmTKggGuEgFogLRr5jGU6Xm8Wh5HmzCmgoxSx4PcK6hKe7ibWUZ2atQCZcd3P",
  "key25": "5DBeGcbR2PkGJeeBT9cqxfJYr6krcwUPGijZYqrbzCbe9fTAnStgwvPs6Xf3JEUvdFk27R3FUgRxaJmNQi8tnGNV",
  "key26": "54zUR4wo6bizeApJJ7JeAzqqcD75QAngnzTvwq6uNubNuzT25sReJnn4Agohb2fWFRo65LGGM9yhsbChYpvrwRAB",
  "key27": "2oRaU1p6okNcUtiNiCz7y3nLh8H9idNiac8guodQi6CyAWeQYK5fMvLVi5QDiYvf1UesTFsZ126Dc4su4mTJGZ8F"
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
