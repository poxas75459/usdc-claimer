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
    "44EJmqrbpbRw5Bwjjksu82SG7h8Ln3JKgmbadeeAsee1YVttjAgzPv5bPWvavYHGzjJpEGcNEvM1DQA5zTt96PE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RnsKG8FzyEhncdpcnYBavPrbT8ZWBLGnWmQbNM3k1MTKbTA6M5HqzuvrwKLJ6rHEyyS7uTLb93RK6jCBSZzypbR",
  "key1": "3cyR2dmwZVH8rXUXkY22cRmoEb5BkTp5ayM8w2uHJgZnvRDAaRka3xNNBFQbtvPGpbtDViw66ZhutnHj3fCrWuhf",
  "key2": "5JHR5AcrL5vHbHiz8uXweQWFD9VDLvBy5eT1cLhcYsLFAGyG2rA9R7o1VAvJcCtpRKbadE96TQ9UzvHRvUwZ6xvo",
  "key3": "NdzTs1Kkz5PCpBE6x3B1eX6vysmZcgzANXoLEbXkc6vr7QyyNgRTDk5g7iEmCvBXW6yPbLLYZorACWMqxY1fBj2",
  "key4": "2DWRQox2DqCYkbaHeYwyXxmyX4PwFMC6NyPwTnRkBLuDQ8SB8DCkVV4Uft7ZQK4L3E7UFT8PorTSvNcy8FApuNek",
  "key5": "hae1uef3fU6eSRMVDNJbRtbFv6Rg8MSRgKrAzLm6EULpH5QgqnJzqYFDC8sjvHZ6QvtTy6GR3LvizB5BK4yNdQf",
  "key6": "4gJfwsRNQccsRyeGwPjNeRsdy4FD8eeNZiGP8pndBmkWkwSLQZ8hpZvPPyUw21aLfVwVUHkvxSvX5mCsHkyWHExB",
  "key7": "37myaBQbZZPZs2t48ZzWUnm1GWxFBdwEFk67ZsBUP2KAD5CQEeFaZ6pHSszEt885XifMTsqzbcNbH27skvFutN4U",
  "key8": "3Xdmy8vpUZTqTVzeJEqGx1CS4oQZJKiTmGtJRsiyyqXTRVsPhycRxPnmeSJ2wuF7z66MhfS2NTGNo3gZHUTKu6pR",
  "key9": "2auHJZrEQzDUDu6GodVFzkCkUriKL59FJMS7Wwj3FAKo4bX37hVTAbGywyEQj5rLMSG6TTa7Zy37Y816aybprJsE",
  "key10": "5AhAGnC7GQc3x3aQ5U2GCMH85uKVaLwmYcyh8dhse3bLy8CFg82x6ecBrW59F4B9dEqLE51f3AGgirbhLc5Bse7K",
  "key11": "5fz9QLx1fmVd7NAjkKuPLURtH8c4UKPTaVpfFC4ihfeSVPKvMGG8bRNdNnX3KtpqiRVMTxQDEuY2ikXqrbE5zkjA",
  "key12": "3WexJB2sFudhctidDG8cpbv5aEs8esLGMLP8EoHDTcMPvE4b1w97mxAEa9SScRbbyjS9FiCpVPg8aRSVNkPxgy5i",
  "key13": "dfFHBDUwGeyn9qA1X6LcB7yhDQrzits1qGkcnf8avUSUyqcXUTxbKx5PuyzWVTAYmUvTgU4eqo8umZeTMpCqqAr",
  "key14": "5ZYZQP6AD2m9cT4HQXyJGERrsE85iaHfrSvoZek86dH8w3y2QqZpcixP9QcM4ceLRf2ePfNeauo1xBSdQJQVy6hV",
  "key15": "3om8idcN6QiuzRXcd2Ay6X7ZUEzwGziZ7LgiwhFMhP5dw8DBFgQBdYbbucYJBDeEz2tXwPjoDjVTE1rztYz2B5ny",
  "key16": "zbSE7iTBgLT2EDq6bqX8VuYytHMASsUSYeGWh6xbYDpQmWCFD6TjY7ZHSARCJWQyb7xFV51BgbsBfev9zt9Ugs6",
  "key17": "4JrFefbw4gvV9Y6qWUk4TdBp4DhLgC5tqnouZSwPj4s1kb56e5FisS7hBoWzQd2ZpdmPjFDLPJ5fgi3yKG2ydJ8i",
  "key18": "3VYdkwV2Wg8Q8D8Cot5cnWGjTkRSeRM9SKpM5TJzmAbsx2spM4RapYjU4dRXmYphVqi5pnwqTWixhW7mzrz9924N",
  "key19": "4Myw5GDYAW9vTbg5QPzYoFWPVu9ZXnyyQrSCUZmtCE9YkHSuBA4VKrHPBtqSHqC2eN6e8KkoDsDBUv9KeoQctX8B",
  "key20": "UrKPtkueE57wyy4euMToLsDjX8qo3c9pUY8gPd5mvTT9EnqyrhhiAfVVQgbAvvGab3adLRg4NNN9EUzLSvnpaDR",
  "key21": "31GuJnDAaEV3ANrP5JugXYkfQXbQFiUogLixEEa9wQhS87RsQfFUgzem7CjSHu7px41JjMUX82mdpGoCJCatx75J",
  "key22": "57DgTSNVEhjwHfY1V4MmHADwtwMME1y1Gwpf5ZUVzesMKztNWAUx7eJeT5ouxCawiS7W6yGLMxG1SyTYWUX8oDC9",
  "key23": "5vu4ZbPvWMzu8up2PgeruK6kaLjM6G8LvU39RMKGD5tWX2f7eYdmr4aATghpBqkL654xUgV2Xn1qEWzTc26xxrH7",
  "key24": "3wtG2UbEW3SKhDtjmVXr14GYbWBr68FvhbYjzYjYsK1YTVmhPHiS9EdLuYq46xZ6PBzjA5ZmET5r4w3rbgwYKrmt",
  "key25": "27r3d5SyqfxdGAKZvQDFu99zSZaZwrC8bPmUiHsrebviPxVqVjoLeFj4nDsGb7DxBhf2xg1vrT1UBPVxuBH8vWxz",
  "key26": "56PUE4mkmLCaa4cSuSNoe6PttweyrDox3PeghcFXSXdEYMaG3pk4KKXzYckLaYZhmv5iAcmPkr6ESKKP4GqZ3cq6",
  "key27": "5ACdrX6njZVbpWgiiiZv8mfwkdVau9E43Hbc65pUb6HTUE6mRpNWXUyXv3rMbQykApYKZC37QuLEAbCDFPwRBbDL",
  "key28": "oi3xfBoQ3iGebTcWN3FM7QdvmJqsSETQALdAdMhLfXvppEx684ftcgTN7zK7tmKNcG7uHjpbWM6zjtdbUPjmjzZ",
  "key29": "2eZnwG2VZHyj6Q63NdAWhPo8Kq8hnM4ZPm5coJvcpDsuKL131BmFjvCx1gt4ncccr111B7GFw3c9Le8hZ3vZgJiT",
  "key30": "3BFHVcjQxsSacxSgm3Fzz9KKvZwc1qoK2b2QHuz8gnbWCsk17N6LoFvy8ZY2mr5dY5Y6aCrGi6kkHE6YGPNmt6Ly",
  "key31": "65a7Vnx9yu5HUWahxSqdBPuaSu1LqHL9pxHGBV4GNKP58Z8Jh3DVA6CSLf9J61aMkx4nooi9d1q6d9n9BGjrc8bJ",
  "key32": "31tYChoDNdmzWhMaBH5ck1atNqV5yUmXzmJL7TKsxkFtptTqQRntJt7PH6fA9jLWsvPWotLg7bR6e5AgxQGzJiuo"
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
