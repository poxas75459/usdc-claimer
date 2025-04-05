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
    "XZsmDdC63QQPxiSAwjLuKokSKyyJqPX1HxHpeLuSWcRDegkZgLS6WXJCBqeYQLfonvrvXXAs4qWN9pThJQUKTCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qkLGq5gPpdQfCw9K57QGmVbFPY8fosjzt5uysRJ1WNJE76XsEah3ZPfQXh6gYqWFyf23FJrVWrr7HwPuSLDmc4F",
  "key1": "3jgo5aNEPNYbDEm9DpbTNqbFpmJCpY7Cc8V5JaN4Nsf5wJ2X7d1JrjYFkwA56eECW4ErG9LRyspXmWw1RFdSmpVd",
  "key2": "afKv8hxHKixqzSnM6WqdZt77SaW6MftNo3Vv9Qvqa2Srr1TjRHkWf8XMCHe1eoYMisEuQBmmS8253sEvn6ysT3b",
  "key3": "4G2VkM62JSXBV9Hbf3v3PXmChFRhhgBHfMDhapf1aQEjjye6edxS67QLbHMxEgrdeEBd6poYzXJ3neQyit9PxhSa",
  "key4": "2orH9KpYCzXdjecu3YcjuKDDJXHukiAkM8PMxdw9uKURkVCZL2if4FY83a34MzjhTH2f3wAzwY7Uk6XePzwev65Z",
  "key5": "4vtJ3NP5XCBApeiSGXfWVzXTx4RsogH9ZAptTSuT3qhqMG713ZHCXgtfHjuD5xzhAubHkUVA7wmJRZG1xmWJdpcd",
  "key6": "3ZuGotpSnbjkeJK4gQEGyFdBePy2FYvDFx6kQi6witHkkogAs2QGWEpKfA9ZWnjKzXzn3C6fu89Ts4W3jDnipaDq",
  "key7": "u4ZhHdTUecdztaVsud6amntK5QbRFsZ6fkqigruVejArvK4s7ynJBHZgqXuzUBXgweWcd9DeCgp7KtnBmNUaPMn",
  "key8": "r96TVW3kUMom4nG4jD5339pJZamMACmsY7A77jsY6jEkGH711PQyMpJaqppjAJZEYDQGAx2htg1oQrnCu8Fpdfp",
  "key9": "3PS1Z2vcxcDqzQ21mnP2s1kwAg2E1X4LNDWY6FfxP8AaWVRhvf1aEDwWoxD2oyv5qqbaSKNErWyXpvhGdL5umy8h",
  "key10": "2cgo8zULJMt6zT3i435EUP64EvRhj4dmzh9GEjv8JPjSUcfa9hoTXFp5T47HagjEFA3z129pmrVKkJmBw1iBndzZ",
  "key11": "5xxyvvN21P4Yxy5QvLvB6KrByeDXCNn3HWbVPTmdzPNaMZLLQ5q2aNcScJkeAd6neZ37NJYVR31pMuzLXgfSi4BH",
  "key12": "2qvoE1cmirgcbrhT1Pfppn1oNVf6YzAPkzXRVH4EtV8uL8ydtmFCCK6zWHQkrASE96HZJ8RwANnsvJy7gDD3Rmkh",
  "key13": "2X46muheyL8Czbsoy2L4UGL6MxLB4TTTsoT1ENTWCLfU1Biu4ocKbDVtKX7BnKmxJWFmjtJqXqEg9q91QEB8jQSu",
  "key14": "288H2fKUsxW4VNbkreVH56NgBMLxZcYjB5MwfTyUeLY7ted3ggXC2ithSnyvtg7usg9LNRx7DJGuserh5XVcUDfD",
  "key15": "62Fmb6GFi8Pf6bjeWkZhfsCFQHcW3Q3763smzbR8gxqjrDVQQNiPwZ7iAjSYEPamh9S2JWY3KnMbHLWUQsYqupNr",
  "key16": "61cas4DEdi745W6pmjZmxV6BP5mAFaT7kT97Dy1tcUM4AQ2W73F6FJMAvEZMpf5M7dTBwbN6nLckWydrHtAsBRUc",
  "key17": "2c5w8o1E9KJWrD5oRqWtfTFDHj2oV1NoRm9FGK9EpkAe9jMsjitH4n3LFHM5ZPBYpzh8RhjaspY8vc26NhhUpPHR",
  "key18": "5yNPQiNQreurhL38epvusCKLn1qhYcZTncCoxDcJPB5L2NSCzUgPtqy6EHHnZPXKmcqnn43wJZeQ7HZv9axtFocR",
  "key19": "8nGBz3iN9AZACwsQ4BemxuoodMt9we75bEcceuDby5ftTA5mZ8Gc9VMc7s5DMCNqpnLEwYaLLSgD3hkL8uvQ2sU",
  "key20": "CaCPXwagvUZrV9DCdSBEHg2brGuwW2xeXgoYK4obWPeV83WgBRLtF474YW5nAmFD3UNd2tRwjj91VrkQXrG1aSE",
  "key21": "5bc5z61PT8m7nWjU6WZSxj1KmP87n14n6edAeqXWi18K2DmBuXF4zaMKq5GyeKfJ5NNN9GmHhRpznKo5g5YHsgVX",
  "key22": "2uJ8yn1aEw25Yp55hoiJLsTobCfduFbHHCRmfCQE1dWUMHe3t6yXoLAPhfbfTcpMZBxNNC2yHd6GdGdWfAdSbwKh",
  "key23": "3UELd4ShTXWHNSH3JdxA5NerJ5p5TAggW7DJ9xYrAfrFRw2a6pD5G4LHJnLFbKdpFa5jewnrjr7bD2ZfybHhBFiq",
  "key24": "DUU5DrtRDHGiUNmx9LYW7YT8jbzC6QttmbxdAbUH8NYjcmtie39KHx5sthziYPpuT3kX1Fnz3iv7FpaoFEa9kfP"
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
