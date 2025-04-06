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
    "rcPjmXHojDxtearbwDAyxEWi5QEwCwjehpqgz6jbMBSCkQmHR38ePRqQeDJ5pwELJL2XemUbtZ65WzXRM7iLf9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53vMD953RzmeJ7ebiwZNhx4Mcm4ggoTWGpg8xC55pRB6BmQATFwGzYHT8HsSrLYJ67z92vLNrB9R45SEkuCYB4md",
  "key1": "iXozhbtdKzQ7yREETi9CB16pFEEqaTMJURQB7GBfHS56fyobU3XE7byBnQZhWhNLpHERZ8RjGbqvLBCFyKCVjrL",
  "key2": "2pTUZjdDYBfP7t8Ytk2uquyTAA37gZfqX3mC6wHTkpt7MZK36Pvn7E9QVB2p1rMqC4MQT2XV5JJVEoQdCbLu4AwE",
  "key3": "djBP3wiEzsG9YVnsrwZcMwu5LdvCoaA8MSFPtViC4x5AhXMEDyZymDZyBEvhWbWnougNuDUaj6bgfGjUfaeZ1JP",
  "key4": "65NAg2xBjSQnexDbZ4Cj2webiErcfHggQ3jbGyKKyUGFFSNdjsT8SUBiHheN835578D87EXUk7AqbmX3K5JrrVqR",
  "key5": "22YeUYxYz42kP9s4cpShHCkyYaA4yBkAynx9XDWzL2jiesPjELXVYcfAnpjUNY9ob1HCWL2LZ8ShiSgeS3c1N92Y",
  "key6": "3Eq3dD32zoBC8j3DrEKyXGKDFHV95T86RvicRqmxqYcTY7kqrDkuNuTAQH9MmEEAVw78rg6Sn9aLAGwND7cq5vQc",
  "key7": "5VB6a7cbVvaytgzB1kPZuBotmvwuMjt92w9iCUrgMTHupHPoBdHkFJFQkT2DxK61yN3GwNzePe6yDDEdwMfsgSMW",
  "key8": "ay33kmPKwbCuaUcntrHzi34RcFhyyLAazqCNJMBSZ2pZ3xuYQBoDQsDdubdg6tjm2r2oV4bQxYnYF5ciHctkFyh",
  "key9": "pcn8xEtvDpogVZE6eBm6TjA2nSPWjVAmemnPiR4DZMLVWZGEkbTbTaDoho7TApWmRDewJJEFBuMcjuKZDQSm9Yn",
  "key10": "nXqiXVhvxvwi5XfDjeCrS2BRjJ8ixszQZsrSaLG3BVydWHaVoADtv1vjYd9MaM6N9k3pjU1BdT24sWEhKV9SRsT",
  "key11": "5aPAtjxxWY7rEgCYNWAPe1DdMHPJNFRPhbLopbeDSCjach13F7NnHzU6hjNyX8vDam1xVRMgihqwEqUp1g4dRj3B",
  "key12": "3LdGA6oQBhqLv6hfL3KLKwL6uFkLr5FiXZfqsEgmL7bZWy9LBvkz1Yi3zAQx91VkqtTd8V2jRYcih1FfDGuJoRXo",
  "key13": "DSrC9jNdMKUsufGmEhPxP2bxiHDwF7XdZsmXvnoZdEoircaRLFJiZVbQ3uuf2NUgr2TDVtF2G3qpaWVjdwrzg3g",
  "key14": "3EPHdYR8M7H6PskomgdEAwWSBuZ217ZXx9RUcNGXJhxGDTQjuvfEXh9UJ6i8CSan11tEZJ2xLkeyWyZtLL2uZPnd",
  "key15": "39qFSSKJ9r1NVrRxtTtYmGxnCp26CabWf2pKUoV2huGSo6CMSyBSwuKJH9ZiVVJu31B9DznSqRp6BRSeETtMKQ21",
  "key16": "2sgdNpyXyNGe6B9vCJvk4tx3f5hC3v9Kv5zXjaN2AuZhbYriRRDB98ipztY81yjhG6Hb49yghNCUc4A6ao1BWqd4",
  "key17": "3FssKfAs2Ybpd3UkTGFtdxCg8CNAxntKCoPz6Ldxcf6KocwN45Y7bMLqHsPiBdBUBJY5iTjknjVdsXsUF2K4Zrbf",
  "key18": "3Nn7d3SpcCNkVm4UxbAd5UsZ6gAFLpJQvjWfGMxcpYQGPT9V35ZLKnq8a9A9vh4iCjR7BjVRdnD983dL2byKmxw5",
  "key19": "4kKFtoJ31SersDYLsadsMDp9Smdq1RMHPmryW6Bfq8Y4H6h9iaw3Zcb3yGbADxf6bun5VyxeAZwLBkze3whjPRjL",
  "key20": "ztYCFjGGaJ1oEBH7gQnozQ49gRUj4pZaJPputrU8r8gDwMonUyiLGWyHoZBAvUmz5MosvTpK2n4v7QrqPCoKYfM",
  "key21": "sXa1cTmAxr3nupTZ8hmcNvhQoUUR6UWPW6UXfQZh42psZicoycKVeBK3khvpDz6qSUQLaCuMQY4oKFCRSaSqspk",
  "key22": "SaJSG1jzUXhhNEPQTQBLf7HGqTGUoYrxkw9AhgnZSFRt5q5a2FPP1sgV7ZLxdUiUXXbVeRNHPwexG9rnDUGu16z",
  "key23": "4kBJwn245aZQ6rBEuQ366oFnq84GGutA8Ype4t5NMLJdzeVtVnHWjfteELa1agvrYSCnLg6ekSJBZjNKqVGya4Jy",
  "key24": "4TaYSsjGq5WgLMgnfPLok8cojprRATwKkvbBbmi3HQ9TJmSfgTa36JsY9zxY9mY13tnz5HGr9RGuB2MkBG1MhhvW",
  "key25": "5pJVKKd72ZkiyzQoy3nWETe5wb1s24mNRpiZz3ABsw9LKVQHaL2eAomfDQGSwEjNJB9LaQHjECTNW4YH6GRpYR1r",
  "key26": "42Azhg2TjuTYHkEgafjvFXB8kPkQW3C1VDyS3pdy17jLfydb4nfvCc3XajM8jPy1uzbscwx5PaSyxe8VTNxFp6Xn",
  "key27": "4ZxxUDagQ1F88vUDq38L5eFNsZUhLvPUS3YZZUidFwdtXwe6EKpNZDTq7CgmqBG1A5GDqZuG3XpnLmbHEk9ZHDHd",
  "key28": "4QKEZNzJs1EA97L9zh6LqmLNfLDU2KLwoN9sMthcH7kPd5tzZ76SPPENk1PmzcN5wKLcJC2bK56H1nridPU4SGp1",
  "key29": "3Frm39aifRy4jpFAs5Y2ZJKqfC5wqA277fXuHnJnCQ98BBxZpgkJjrrwakng9H5bRfK2P7ukeGuskNugBYyb22CT",
  "key30": "3jXrdmPXCNaU9YCfo4UofDQrpZbhS4jmXznLnR8FKwi7Y88sLv6U1FhfULnHkGsy9NShTiqA3PAWtFRMtKAKJtrn"
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
