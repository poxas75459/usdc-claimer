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
    "3nGvT9rTLUco9XFM7ohZwXLJVzsBADiPpPUebkitRRbaL2n2s1TGcK63mVD275ZytuxgjsUXYbkB9ZkePp3ovLvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p5G9mQabFZo6DkBEz9bhC3po5UsV5AfVx8oS2fYW5Nim4bxA6eBqZkvKQJpMP9UHPioyZaZsMwjyyRb2HRWWMEX",
  "key1": "r7cQv7BhuYuydyqJzsbPBouXErc1UuhCHvt7NuthL9bfhDHY899QFZxxpxM9iyhPc782jzenk6t2KmcFtyzsCAB",
  "key2": "3wqGUYfgxoWNy49858wSTAmhb21eBa57bG1vpkFoogscf2n3tnxg4VzDzar4huh8cTXXQtrNcigRFiQ6SCUVjkvA",
  "key3": "378dChqARx7jWRfuX6RK73fZ7gB19UsjEwdbRprvLnaVfmbgeaxJ9mG8azxuaR8uPe6wEJPJBPEaBY4jCKHbgBMq",
  "key4": "4bDKtWx4td3q3tXC1BrU56iJzNaKYco9fgBYxGrWevQkmTZtUZmhFSAr9xa1RRnwdh1ziNtVFVJfSRz6hS51uERJ",
  "key5": "4Pr7eUbCtqjC35miYNj3hjGveoLosjKNBdmkvUc3uRFkxYGMwtuFsSMT791BctGuvEeEAAAT4RXy4MStFCUV97o6",
  "key6": "5jcskrVPWHRbX6NfBCEekiCbxbm63yXqrKGFPqL3m457w5PHuSLPya592nZZADUxzh6UTcgHQmEqZtCtBLndPoNS",
  "key7": "i2QneUHkLs6Z1ZCudQjwwdLRM4DV7UyzToTjDFzdYdB4u7sTS5pdaYTJsFMTjjaui1vWuEL2fKStShKg3pU6L4K",
  "key8": "4oAuJnBNL9kvgLYxvBw6xYMsEuD8dRQHLViw2BGEx3tLPXtQmJ3cUdePt5MEEbUHDcnCYVqb1Xya4j3QRxaBhxnQ",
  "key9": "61Pnv56u1kK4C2m8pEDpX8NkQTYgHnUMAs4oNQtWPDBjqoh9TxwHUfeZGtP5SnyHY2Z13krSn7Wu1JTmQPEpUVGy",
  "key10": "5T1fVAZPuiKPL4yogALtqY5J6ZSaMcddM5zA5FV7zCMZkwC1A29Wz6jhowJzwg9LZDJpcfERCjbx8pBzMZgogdGx",
  "key11": "2fNfnrgWWN4uYs2J3jrzWpr3YDk9w4jaLaVMrPhhfLjKUTYAeYsnZnCnvdDGAFWtwgrHvxbqPQtZmJD4MbbyECfi",
  "key12": "4LHd1D75wCcZYgAx1FLm6skuLWQD6t3uJ3LBMQgG7duaBCVwKNv8N9PaXRsy6vR9onTNxmrzq9CkjULwVSKX1mXE",
  "key13": "3qDSnZem5NscFsGwMURA6kJtg8BwXXE3auKjRtTsYLmL9VE4UyrjmshYiLtZF7Gtsx1MQ8ZRQDdBpiLcNazob15v",
  "key14": "4UvcxxBrH7gbg1TmoZqpE1CLkumkcAaXmGKn8RPSAFWByt1JnLoqNwuhX4gevpxgZoQS6YrHbc7Qi8eFx5gGK6hi",
  "key15": "DARHvWWadqNAkKs3QUZC5YRfhv6tqKySN4FYgsSx95gXmHes7by9GBi2MZKvsWxen33kBHY1oZUpQ4sKstmVXSK",
  "key16": "dk7pur6Rgj7uYfP8jCc6XLVJTzbhdd52YZHndjvZSv1s4HLvfCyLhJVKCZn7veyuNbJyKiPXH2DSFJoTix6SVaY",
  "key17": "2TiVD5hfivnFx2ASJDWSkTrFdSZW5QoiZ66E2EA5uJomBJFowRrwrV5iYCsb5W7axCg4GxPBz2Lmb1Gx9nsPeyHy",
  "key18": "3m5sQvZw53oUrcxP5tT9xzk6psKLYsBA5xLSwTb8NPUuBy4id1HsTHQUCG1QEEJbHrNkA4R44AHMA7yTJNh3kSzF",
  "key19": "37Ph6R14upEWic4zbqwb9HjirFbw2h9pXZaQ2u6HyQwwtqdsjVHfBYNzGWuwVyak5E49Kb82rtFmaSyWNVmXqY5v",
  "key20": "34JAgbUEz2Vk4A6c5xeWDQkUbwzQPm68irzyqKwScQgtuiNETyaj2vw1PjvFCrmrE7dtb9TQXYZgs6SpBKHmJiDH",
  "key21": "5jPQajPUXMWbsL5Cr6m5rYJ9ijhTEZKnVqRLFj7DH1C1gpqcMSbrS1p7o6ycbqZPv3Em8FkDTHvurrFHPjzVwfHB",
  "key22": "2ijF5vwXPXVBuLy77oTrtKWenVq86VAEgccQZyBMNPmmJTjAoSPM5oVwMsVaFPSUuMnFoTa9VcawW2dxU4rTFyXG",
  "key23": "4SBk4J8LvKUt58DrHqau8WkB8u41HvQNinBZquwSNSc5KV3KZ6Ah1isL2auZAQz8N8fV5Z5AEKhcdRqKrxSqS1tZ",
  "key24": "5cw17UQv8GpU6j1RKqso5UYnEJQwnWKPCQhjNvuZbUieHSmV6oiKQeY4X2oLBVks1hhWaATTLiF7XeYFrnSKmwET",
  "key25": "5YG1kZ8W7ZVECWZXUtHsfQA1pyAxtH59uhZmR2fmJXen6aE2Zw8AdV6sHWhhqEqM2NuipdsJrRJTgHWZR6yWBs5A",
  "key26": "2yKhqYDd1v5McReq82ud7QoGdGXU9iEr6sHK94gc5vrpTT6wubhrS2VQ4t4WLYUi8w77NwRGSxmZUvGEZoxypiaq",
  "key27": "2ZDna58R31eUjbzcwMir5LSo1KDhtFE34CeFH2BkYhiSCxb1HzSwMHLm2jDtSQvwPkc7Bdtf73ugP2agmrGovW9h",
  "key28": "2wT3okxPZieeVgHxS8AxuKMo5fF9iyJzWwZAAgkVjJBYSZdc1t349dnQw2yQj1nhxXHQS6ESkfaihWh59DcRDzB7",
  "key29": "46JYLFzEmKo1jYbFgwMTMZHRPwijnLXeHzfK8vzSd77ATX18L29Z3TPXS2krwkzTeDUnVWakJdFJxopQ7mGaHo4Q",
  "key30": "2YkRReHSAmRoTdegwuBko62vGUA1nZxtk1eTYTCyGLzavkNdswzjpDcPqw8nyZdVdNiw5QKChTDNgbDpzYGVYLv3",
  "key31": "5cxkpZzLYPihnTQPn8mu9t7UKbW5esjoG2TvMmqCidwH4qa8PK6xGpnP5HQzDfm8JJkF5Tha4h8p1doixumyqtX9",
  "key32": "2hG2HyAx1UStZunbrYfMc6PW34SbEiqjjrFZRM3DEjLtK8wkdvVG9RSCvtscAnhmoiPeM1h1z2EVxcaVcNdG4DfQ",
  "key33": "3ekNrnupDZF6DpomAEZ8EiT7jtVSq2auV5xtqG9Uzb57GnxUGiicDpScjnVAbxqK681j4QQWUV4JVDseRDjWbxxu"
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
