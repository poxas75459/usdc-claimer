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
    "3Zd3DiGMzrfU8jmoVaiiiehHGwVnMLo8bBNYWHND7ixvEZNixe35S1QKyyYMhpGrPA3WRHNAQz27sSM4HCok3ui7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K8cuC6ukQYKa29qbP3hqpKE2noE76SY2vxQEMzTP3NcxkfkvdhgdjnXfVNSr2qtKgGtWC2XvdvJXhvt8o3xxC8R",
  "key1": "WW3f6juHAwZVpFj6RnxfLYh2Vw9VMn2WHo69eukk47w158s81fDFNX6pNHqgUAFR4mB3xSnMNywB7nRL3UDv4UC",
  "key2": "3QdbGzuJcCR2g1AEjJWxWFQmP6gyv7RUZxjzREf28eK6RSu4m6yQoP9VyuknmQjTwoebguZmJjkQmQ7qTRX86NEp",
  "key3": "4nKHV7X5Z6rHopJxEG5eoEbvJ1QQ4NfgQwZ4XdU9KoBCLX71u5TCvriiPNZ4pAiSJApi6MHAxawavNHCTtTVtWvm",
  "key4": "eiHW5Zj3zGTZKZ66mq1Wxqu9M6K8Mx1JgQRjLZpmntJPQWSbzaAsxpFKnkPBAFTd9JDYkCkHnDacg6n3DURQxgz",
  "key5": "mdx7KUWNDrsyiKZsidZ6V69HrihcDWifyVDtfYiEckxUtjth2ZdVJV79Jn8NGXQ9JTAf6M8pChokXstshKvfQNE",
  "key6": "27yPSbL2D2LV1fC1JU2fK2bRiZcezY4HttYHc74nawShqSqSbU564waMC3s1SrG8WPgCorQJwEaUMHr7FYmCpgbx",
  "key7": "7yccPK7rwkkWrUxSpat8Zn5yTs522bAVN22UtgYTb3jxwTo6GNuNr6GQLPxNqMRAxwD2prW1kRfYgM13bftFn5f",
  "key8": "5VAXZ6SGYchcYbLGBTcpJDqoNFj5y6CSBt1iNTdH1PUK1LeHAPxm1DeeUvpk84wruxU58VqfmgZJwbGc9EopgHmW",
  "key9": "345JnvfTBvytsTnzu7uMqDbHAfVxRr5xdvhTQ55SNuYxsvdmrhHaKk3wckaf7MmY7vDLQUhWBeGXYk5cCrK5FXkx",
  "key10": "2mdHQD5hEwsFuZbsydotJ2GNbDFRM3LrepVUQT9Xfvh1co2sK5LQk4KwS6hgnpWy34Lwhuk7dzaBJ1V9n6a3ncR7",
  "key11": "4RMG51rwka8nCBQZGygmeZ1enUm8jEsLfbotAyPzXw5DbHLU8rAuFmKWA2JpqCSx1PsfhUdFTm8KHAj7nMofm94J",
  "key12": "4wTy9EFBV5wvyg1rhMCn7ZhGQ57ENW4JrRWNM5P8Gwk3BMVCWkqozTgNNU2N7MdrXqhJ9xiJ4b1zZ6g9way5TfWe",
  "key13": "3EwdZZnDEVBMH4kHnDXLswAxovYq7zwtERxrWgorjWJkfvQD65BBpWnecza55nwPzrJL5Eg8p3gFvGxtsZkiwJw4",
  "key14": "VQo6HwYTh2mYU26wf55hX6vrJnnPj5j56KvEpKA2e3Jfh7behf75UwjWV7e4HwZLLcn9KymL5ei1Y4Y1jhYoNny",
  "key15": "2JmMDexkR5Z8g9beJDqZm8hVHEqF642sGv8pqUnjHBboXa2nkxhE6J8pgrbrEfHcy344U9nN4N4r8DvmQTPRnZqX",
  "key16": "5J8AzqQiTzJgfh3HF6sBKEay97mAz6QF58tYoDHRExCuVRKpBmnyKPRA2SF3Cf4j8QSDudPRp8Htg8NWStsL5vot",
  "key17": "kFbC27KfWwtrhiKE1LfAA3DSysHzNbNqr7gZ8x2vkZoR4j9bzuGscS6Frd8yvyZ6YxFxVR8nyQc7UHEJqgvsYsu",
  "key18": "4mhmbQrzgH6s4FDtzZAweSp9e6nMi88J6QrxgDVtQyBxug89m4Q5DvqeTwEh1xn7vUSEZ4tcDprnR7xMYD2RUrfb",
  "key19": "WMNXMSttVF6wrVhndrbGgxKzkp3mBRGVJwxwGQobBAjnYymkiEFXjk4pUa1Sta4VtSqkeac5N36mYVpLbfGBQ9e",
  "key20": "4xfhSTTaiz8BDvuCUUW6gd29fH2QmQju15Cs9YjvZxVZxFgR3KdeAQoZYTPmZG764W6VBzTmusNXnQDnxC1Qx1uC",
  "key21": "AbfMX5jsL8Yad7oq8ByxzgfLt2rGsEP59bdVYvmeWnwGQHHkJQsrNQ9wHmc3jf79zfEeC1zW7SKkC19fPNDQAVG",
  "key22": "3vsRvyUCQ7RwTJGiYxfBnSy7c1LodntAETeSr6ZAdeSUTm9jjHPMDjxYCiPP2ujSPC2qVoi8KtyW2nHPmQVtKsAY",
  "key23": "5qKoHVadT9Lb74GLdHgDyXA57HDoND7Dz3bxPUak37sSJZ6r1ip5SVPFQeXLgDyoRyjUoXgBTeofK4WxSNaQPDHj",
  "key24": "62kty5HvRNGVxbxVxC9uqS69owfx6GSXrgmHD7EopWpP3hSREaWB2myowLZXkZ8YGWunbcuQQ2Qn7nB5rhRGz27q",
  "key25": "dFh32v9S4nR322jLBKweW3qbKjL9JJvYwPWH41sof1pj2bxzrEYLE2AXfNoijuduphZobXRV1KPK4y19ZA81jCa",
  "key26": "32vKokDthJHLqQwgr9mP8iXNLVrgf5adXcxuz64Yd8ZqB9ZB43etHKDm4PcDngeBM9vXFvecPweG5k781rS3cGLd",
  "key27": "2MkRQxfXBea6rqkf4nM1vKdLAYs81W2Wtd6dC2E3kPzcb7iGeo5KYbkBXcEgnyCCYJGhELk9624CRARx2HE8NMc7",
  "key28": "23qfoX2RzVckkhhBiaZEoFtb4cesYLWXsDGQTsm5smifxPd93TvgV5Hzw2mzKs2MkF8YZneThV8eP66WnxgTYftp",
  "key29": "nZ1KZWW4yRPKCeuMBG8p2FKVBL3v8zSLCkoTYRjYn9e1sVqyMp4bjXFCxq3uJPJDh9eG5KekJQJ2KJC3JK37r1a",
  "key30": "2Zzc55m7Bj5mGds3XUfvbCQkrXnXrQaRUvYhFz63TMNut52MayvH2zPxEu1B3QjqZUXVT9zD12Y9QNAQEY8QLset",
  "key31": "5PPbUv4CA93RcFjBLGw1RE812vXY6vjr49Qd4zAeUavAo5uTC3JqRqGKKre6migb5R2xw9cT7yUEukgYJ4U4zx3V",
  "key32": "5BoLgHdubWihYybURixRyFbwmJ1uAgpdbQ9J6uP9xEuyA6K3fzAbpH7zmKRoC7FQTF2xbDZw8WRkWHyjkxrW4whU",
  "key33": "2XLKSi7bZsyeFTfrDabsvFFB3MXZMmWb6RCZ7fHSWmB3jGodUtpF475kW8NCzmKZRUWN45vTMHYMCv3QiDm7eZRK"
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
