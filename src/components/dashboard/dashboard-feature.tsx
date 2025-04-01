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
    "4kGvHW2kasLxt4MxFDHSeiWGVnzGbVyvBpqeAomifH7fgcPXFXTzvLhKn3LEdxpxGyD6iofe2yxHMcixhYcoZxrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4znAq53iZyzKtwG95kwSbUUH16HsXAiYKt42x1YZyt3ndoKVYZRFvFp16NARdeyHxo2qS5wCZbvdd6gt5dxmmuCL",
  "key1": "62GqebiDcB9CJEjWa6NqZDhmqwMrDX9BBcUvi6dk18VoAW2M1NAfkq6XjwM7K4MHR1FcNufj9pQjyJgyQ7ZGsCaf",
  "key2": "AJ2PZLidEsPqmnzWJ8nUFa5kDHTpYykVwyFBTGf59xP9sygtwqxL79SAmaMbfmx11wYvKK1RTX2PTExJcnQEL51",
  "key3": "5pwKsN2cFyh4G7rMHn4TrseerfGUBBNFZ3zkprSg5jTTNxDnzoZsWTucJT7BLafunvTAe3gBRei6sFM3wpgt2U22",
  "key4": "5niCayKiyWs9gED95NBcPY7k5WLkhVaGT8YBcosXN1HfP9VKos3wzEnHYPfiTwHK3VuajtjcUkmrG6Uzc1BDKqj1",
  "key5": "2w9VoMNeLQjQ7NFUjxyf1pMfSgYNE5MqpGJw6ofKU3Q3zPkKj51f5DRBBcx496uz1zCW2P1krN654S3yKbkMD4tt",
  "key6": "4uNuXn9n8GDTx1YdMqMEkMrMuihqYNnSE2ZNdoNd3a9unFaXkjTWswSFKygDuzrcheNhYyuDWVD2qN2fDfS8t2oZ",
  "key7": "3hJp58hN61pJiePWGnoTVPrNcyJehE4WCppBfxWRLfbr8DqwxWik7Z8LwawVTVmGftQMNV5JvVJw84SGAimkBRzN",
  "key8": "4rQqefwWAVeRBamyxBkhooo6JG44Tbym4aPTgQzB59Wu2nVfEeTT3KhccrfvAmY59fPbVyZc4G1PskEheGXfqK51",
  "key9": "28VVMXWBAaWUUJBSgKRQFtWVs4Lb6rh2Bk7K4dNRnhTUYdEM7JcauUyzGEPnBH6iZJdDGanE63Q89Q6em14skQ8G",
  "key10": "3PoNt3E9KMKLVfRruK5gnp4VChgAT8PT6BNPtrZwpm7hTanNWKrS4YmeNw9LYtqNQ355oS4SQCWdx3TnPJc9zJed",
  "key11": "5vD1pxs6oWXx9cZqVWxb4GngwtcJHX6Ts1MNAX3EZv1EUN3VS7hJ7guejJNK65VeARoGodD7CQc5ZvVJAxbsMcVs",
  "key12": "3BU37srJ7WnWFDd2quvvEvwmsnJUyayBqxktjqEHPZZmTeHPQbh5FEnbK7Ymc3FueaZbU5jEvduv8RCFUcKov5Gw",
  "key13": "63pujULiPFQyXAD7EoBBnbhy1R13Ko5q1uVqjbPrddTuHXz3wCg84Y8L9ZHh6ZH8vdwXHxC6D8fktL6MWTqknqL2",
  "key14": "WAjyWC6amsSYF7hJcN8uEDEXGZP4jDitDsHisechQrMkveyTuWberppSRhKq1rsZ3p5iWxM6fTZFcBTq9ej3XQu",
  "key15": "2NvaxXUmvCnWeVQhvyL4MsVKqpcrCC63Fmp7J48SV1ods37awT8oixzaoJrVqcgB9Xf9coDPqmcmxAKuJDDU17u7",
  "key16": "3mxbRjSSTsu2QNw51PbBvWu48EgpJfwpCa7aDHRGPuEuMrWDExd5pVFftZqXrH7D1H5o9qon9P64JWuvXJnDfKux",
  "key17": "59uBWFP933jjrwbiLKyaR6bV7iFDGwK2GksT7xV4ssSaGw3PPPbsJN6e7tsbcJLW3AVxjGvddwrwkzCaPztUVpeu",
  "key18": "4cFJPamUweFEYCeQQK8RAKtpV6ZATY49Pouut9pTMiR7ZdMhAfRPT33xfjNeLhz7jQ94cWQAemJz9PkYraUwoPJ4",
  "key19": "4o4V1jHLUZ1owSheagsrAunTtDnq25U6Q8GRdT4MnUwwY6nYNaFVJxbFAq6EYzwRGYbByVFHRFQtA9bXr5Yj2Cvs",
  "key20": "pw4iVaR7guJiionLebjbc4DiR2svohwis1NhafXCVcw9x5GN78Z7WcSW46vNKZXhCpV2KeJGkKze6ei8kXyV1Ye",
  "key21": "5VtD7NeSQsa1m9ZzWnZHszjj94uHrgrsyv73217HGvGdWXvsYpCrU8VVZRMDXz4U7C2GGxBeZJJsf7WJmTegL31m",
  "key22": "3GiLAAHCfZUJQEMiaxNbe95uPrKPKzshFZnuuB2DkuzkSVTUZqHTgty55fpd7LpdXzTK9WPdeRjzkFm7k9yPs7Rj",
  "key23": "zCr1jotnDejxGrqFFMjT2roW6ifkqYiqDF6QuhjtH44jnLEyBNfeLrK3RnNaRaiuhBcZzDjtfSHr1ET3buvoJzk",
  "key24": "36CLoDq4yKkSNbW4ckrshCskeU2TRBm8RrJYddh6UZYDSpQjJvf5h35hff4UxdxuvYzDF8r3bEPQKjW8aa9bDEMv",
  "key25": "3gop2SY1gBNVZmNncvPJFrYzZQFKFDNfKs75notoXM3ABq8kEqbmKaTgkMH5J8MpanPrYJ4vqccFzFUHjCRW2ijT",
  "key26": "4TaJ4LCrkzCRerCRHb96uP4hY6owPyMu3pXTRJzPvZJZWBpcgdcxDxmWj6Xz8vxawqZbi93stBoAi9jAomhuiPzY",
  "key27": "t9XDXLfqRq4TckPXYEqDrPPkhFzDCQL96HWgDq4A4Xd1b4kVUe8o7nR86SPc1tt6soR11P1m64LHpgxdZK1cL7C"
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
