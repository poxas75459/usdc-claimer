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
    "rsqn2h3KViL4RxFPpUbMWKePEL4evmfsAf9nsYNDCBJkWritn5xtfy7wj6npQT5cedbvgFn5ubdJnNoQzBRy7e3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36FbVrMstf7ifUVPJDs44m1ifvUrh5pDeSPhYu6RkeVzg11bSPbAyZYvwKNuc33YDnce3DLHKgBYkpy8rFuV2qR6",
  "key1": "56aVoJ9XxaomyKjb4PPPSXy815ZFUASVs17kKYXh3vYmZ1bpLNai7uDhxxtBon44EmEdfkJAVV6Mv2u6EBnPkVYS",
  "key2": "5pBQnxmwoB2XbJVtxhCHwkF27wHjeVnjGgct9qeKqjnP9M3eLe3J9QgXsyPrracVq6LaUFFfHJULcUtRWBYPD5WF",
  "key3": "5jvWfGjYQrxHA6msQooQzdqcKbFwBwda3mBaVgbt1EU8d8rWqQF6yXW4eXyP9GXZHGypw2Abt9wU6iZaGqtRR2yM",
  "key4": "2DzsGpmWmgCau6oHdzqmkcLV8CURkZbSuFst65btbnVTcs7D4v2jLHj4ooKMaEQx5u27eCoFdcXzEdTtujSUAU5m",
  "key5": "qhRG3C3bKebPdzVta1GEAAXeWEDQmYGAoXNvcp2qYr6rz3oM8VgKmDYqDZoKzQCHLvwAxwVpd49D7iCqiY2YaAm",
  "key6": "3AVnLtd2qczXYMaAkgh9vfBTGfgwrrv2aTdEC6imRoSEoMQUqpR3WU9B6BHhCYyxXV7WoVVkBW2zKJTLSr1DjctR",
  "key7": "3AdnmsUHyWmfwtLTC84ZG6sfZkjAPY4qA7TAQx5Pu74QcnSRLMhGGUPyHhg9oMPkmZBDm7xBAbeTmmXogJLZE9W",
  "key8": "5RdAWvjvELKhjmdMtco6TFHauuk7S4NaPPoWyDwkepHsNyKENgKWXyvVKp9TKFMV6T56phb2iSEehHPdhmS6FtE6",
  "key9": "JiFiZc9WutDGxF33ZxheuYJX4SVdpqo8Psvb6mKpgDGJagjf58xRaSS6W2nx4VEjr4TCd9pdB4G1n6muEfQDK7X",
  "key10": "5UEMVg1trg1J61AaHdgKTPPi6eBn7ZxZajLDXB1akCAagoiwMMyBSLVAfG7P3tpq2Xye3crfybb5gUTgjqgDXjcj",
  "key11": "467AryBLwJN8UtiR4b3fm9Bee2Kwxn9vVX9JYpfxiguoXB89rLR1PcNFjBv68DJamkU9nZtDqR3qzCwsg2XAmQVz",
  "key12": "5NpSNkbfrg6GUD7eCCGZ3uhqiwFh9sENdkLECYxbonmNzH7p2LECRaJaCLiALchBUugapk3T29DYtSSMLSY7b2Ht",
  "key13": "5BAdDQ4Yhd4YRbeeqpaukJNVqBP9TAcfgdhGqyDLrGGCRUL5pCtRAE7jQMy5AUaddVwRSKU6YustfubM6bRYLYL7",
  "key14": "3jh3yXqBpStTUpbYjb8yBmnJX26eNMVEPo14DhcaqQuMXJF6MYok1ybemu22xGmgN5AKVJnvn9TQBJAwfXhn4NEc",
  "key15": "2r4Vk8tVcwTSsSZDvXdJkrtwe4w4GWG3HqhbBKRAf1T4UhVJ1Hxn7mjk5W7Duas4ErayKqu5Mttvz9FfSefqw3JS",
  "key16": "4VNdVpXLebR8FE9MffNzDz24oFH7Bt4EDebYTns2DS2zTsQJ5Jyi9MQzCe6WEjhimy8YVePUL5xXADp2yfLdt1GT",
  "key17": "CmkAhPeYQPt3GLsKCv9AUYSJA1gTL68PeDSdC7XPE6saMFzKNbENxYfyAYnTtVziWEW2Mdce3vtZwXwG5MjvKmd",
  "key18": "5resFnme7N9DHohss9y4GWh7rbxjKqrRZSYne7T8YnuDZJV1gXPBPwcXTgL6cMtHDnDSqtZ2PoZMYAPquydL9bHe",
  "key19": "57ftCuNu6nysC9AWqtwXUEpCsmKuh5nMhJWhrrXC4ySCDeppQrBrzpqSFvfVDBdjtAoy1fih63oXpqeJSqdjUNyA",
  "key20": "2xAggq2QAxQgLLJrrPNCqpvYxdSatRrYuYWYidtAqrEF5n8QnBSXFgjoNkVU6ydKB71KWzoAxo4pnzSsD9Xz21K4",
  "key21": "cBVwRC9FLUWq7x488PK8msNpFzxhDKXjdxa3tXmX54CRYzMf5xgxJE1xwrz9djZqUaCx2eKK1FU8RNFz1XMgKZJ",
  "key22": "3ta6QKj6Qd7cJLYZrJGz3fEwsBN8Cz2QQgtZuPKTztXACxMMBnodebE6oTaDJD22ZqzKViLiVHPMz3rbxoiN3sAt",
  "key23": "4RcdX1UWUan5g126g97xServv8Zb8inFveaE2QU5vtWHGrnU68gzxu3crmf4rktHWpCorqMTgbsH4pQxpUAuxcBB",
  "key24": "4ypcuZDW3ZZN1CaeEtZrenBtXb5Z5B1kxadM2E11aLDXsEMrsd1CiDWY6vfo2GtHpyBijPDSZmuNLH8TCPAQ5qVG",
  "key25": "7pWMWkktTBcPABxE7EFidTkgv3wUinPp4a82CyD1GhZxRRM88y5PxmaEedBcJjTk9xqr5LvqM5HkvmRypZ5c9bR",
  "key26": "3bZsQeZ6mCfchU4cLnUqVbhkYSaSAMKr48XsvHf8qYan8dF7SMtW51STdQiVNThwzs7SEUeE3tGBpFWzK8AhAn1A",
  "key27": "3barW6zrTTjcTmemDGuHxHjsdcGtfLvmcxFoNyupAnatRi9Jah8gpW9S7Qdhn75A8gAeqdknDGH4g7y2R5VvZbSx",
  "key28": "4QQAr9maZSA7YWccm4y9c2Khb1snXGtARMv7WFrD8earso8F9BkFF7fDH86NcdUJ7TAJEx8LiY1LTdM7DUSqwKfb",
  "key29": "3C2DRyoKoUKdAJRbBD6Rt73NRZ2gTsxAvryjRa4swAnAmeioUmP2ezXLkCqHB2c7wd3YT8K2ubccZMHdMrn97SU1",
  "key30": "VSGZ6R5vDmBnqhg6eVa9zWHFt9nGXPwkKwZgHcgsM4EBJ51EQ8GLu2SpJiWchdLutiM5BHba3B9SVqmmY87zSd8",
  "key31": "5RDnsqy1MnAKbWWY9GKAeNPQh6EHVxtEzJhw6PV6LGyYSDDREhmWi5KvJ3qbt8g83DVrxqBPBiLFop6Y2dbyx4sh",
  "key32": "3wTFBeTgFjvJRRicceaWsXBQtavjYwX8qxAb7X493W7zBhG5fGwbsPPNWwULF14zs9HUeoWcrCSN51xNpRdyjgzq",
  "key33": "5qsB35DB2yayNCWswzAuQxV8yVxhXauHCmhF8WkaqFjRGHRS1WSyoCqyrTkZcb9ikJK64XLSSwqVNqpk1FM1MbTd",
  "key34": "4N1TkFaUZHtCtNmeHfGqQjcPy1FRZdHNdJE9esiFVBRvuemqWK2fDkFwbjsgiDwZvokzQuYciQxjbnFTSvs6DLYc",
  "key35": "3u7S6fjSzFi8KVu1dwMoBmi3GzYgf72RyKo3PqCvoSEBp5wpnFZAA4FX5w7qxEdxMCUaMjFghSJNZxG16k1wtCQh",
  "key36": "4JAw13Wixa6xXNcDfeUnZ6dENnssGbaqbZsrBjoxdXXuREieXphKsnBkMkaH1JH7hFD8Np4a2KE2nxQuP2nNGA1m",
  "key37": "5BonNXvHQcjmqvooHzLY9cSXuo3aatDBEYPWd49Yw9HFzeeEWi2U3VbtrCxF3TaNrBXijeMHBmjWjzEKJ1rEQKgw",
  "key38": "5E1DjqseydDY3YaHz4kfGgnacxskxRMW8DfjAHuSSMahEVgDGA2U1n4HSUym2DmH7JTaRkfoDmi1UgQMeow94geP",
  "key39": "2scYLc6cBnv26XBiMZU21vUr9dy5Lto8mKoafdRwydcpcsDF46nLtxbW8Q4mPbBroDngJFs3FGVnr7NmfVWASHPL",
  "key40": "27R6KRBjJFwSet1FSaJX5UERuCgDopdw2PwEHnqMiuAnz2eLUY8hmMPsBsFwDMEwL2bU3Rh9Vy9eJzsnB3o7hLeT",
  "key41": "5PUaH4SHLMzTBvCURXxEnUGwi5guMUhExQoYEkkKgz56Y1sgWPw1utMdC2T9WPjBnK5zsGZQhHzb4zKHHS7seBMK"
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
