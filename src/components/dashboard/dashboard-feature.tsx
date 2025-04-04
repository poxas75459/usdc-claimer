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
    "2rcaByacDccfX5xjtapfuUdC5Po9hABiK6w791xzNjGPbWomLoFxfnqUgHPicThgJUKiqcJi4wndL4rkLkUAWMEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6qmvk9nFnr2eDpS3cwcJDn5aeT188t6dzCJ4zdFJ2VPDpbW2s3TFeqhadpxx2RueWgRBDQwRrnrSA9BoNpB8Pk4",
  "key1": "2drkepfYqGHPBjsc4HfDFFcT9d2ChMUUBVQf9R7Qa9T1owx1Xn4wAVg1VTKmpkGs1NLqhGz1dRgkhdzzbK8TPHtQ",
  "key2": "4WibFECk6fcFXQyxLEkt8rdqZzLqUuE3ZRvwuxW74NtdJW8jyd6hTdQuK1QKD63e5b3XMmrUPiDgqhxH5AfPFUVM",
  "key3": "5CYyPTRXcBr7DWPdqoK36EA798sXZmMAwhUghgimWK3Fj1BZNFyvyFt2ysn4YsGAQpY1pbQWronMhC2sMifUYepm",
  "key4": "4eWGmKWt4mokNpsr49SMR65X3WTiu2PvwWcSGcED2QQnPso5oCeqPy9CLSk2JRA7HAu1n5tEVQJYgm8spYZpTHWs",
  "key5": "5npVP7QfadoTmZRrSSR26Yti3AaTAcKB1vhjjFQTmwQHuZ4Kw73BFmK6TiNyvwz13QRrg8sMnvdwPK5Toyt6gwUC",
  "key6": "3TTrCGxgSUAKDApKsxHxv6zhokFw6PtxPcnoPupWWtnzaBBmERuqHVa8uJaS4zRvuE9wi9mNMNRpJuEbuDoegPJ2",
  "key7": "hu6G989eqxeek6SH3q2xLc4yaoaLg7GkJek6nWGmhjQGDuQiXTSYozGPptkmQcRwc81hKV5kYaQACDKjWTZYEsy",
  "key8": "2aobw8LhvretFhkksMS1oPBqemqHoxrZqFM9HffyVZM9gMbvg7FmGR6PMECpVVRWUXKkczAgqAK2arMxbrPRQbGn",
  "key9": "5ThbipZbmeaTNXRyCEppUcVtYkrrPzCSpbAn12K4GyoFFPUxuoHAsGYNFuK7jeWq6ASdNmy9QNv3Jfq9RTHBUrks",
  "key10": "13tWQYawcagfxCf7S2G75XkYWYoR4yjyTNNWyC3XciSDX6xezx3JziVnEmcY8CKoGy1Any2S1HVgJZtzQto1dQF",
  "key11": "4qz4NTpAtFxDWaoyZWnhQ7N9y9pNPDB8QeqD2j7suXUMc57Ek1Cyey4GHJrHrwbeZgr89Ve2aHVwmcCWHmoY1xc6",
  "key12": "B1oRBsMVHrjRGfAmPzZRZg4nVVPFYHmscGnrnAT61ahmEPK91P95sWonB9yN2eT1rZrGGniKotp1wsNKqS7akwa",
  "key13": "3ryTFMWSAxmi1siAYduhXKmwigWfxefxheutLjYEdQJGgt8SThH7VE9pPHh4SDEsj6gM2i9RGNzfwTRWPiKi9rfe",
  "key14": "3tcbmHXChUFYoNdToNz9JXFWyWui2y4fJDgyP6wQsqjdBLuT3A89AGSkfTV1FxFP8WYfTR9RiCmsSS3xmqMJ8FWq",
  "key15": "4MTy2QidAPPHVCanaZBj7CLR3UjTW7WorcNewurDBrYgu47dhojr6e739q9cJbzdReFujfi9yxGRwPDvshGB7dLa",
  "key16": "4Sr6XAsuhjQkf7XRqFuRgTsknuTkedSRzF55E3ZnE55sPainLT1etaCmNZYEQL1mFdniR7ojQB15AWXQJGZyVaki",
  "key17": "4DmyMsfive7T29xtSa1ecCEB1WWdRAd7YeL5BdWbw5HMdbgU91qmEx35pdK1XZPQpGDjDVpubs6PbGWUdA1HGCfU",
  "key18": "dMmzmQfhWXdTr3dzaYpfQBNuWW2R2vvsTPeMQubuPguCvmpNrc6KuHTE98CCbbzwXHh4FDQ46hc3i9yWeqBQwk8",
  "key19": "2cU6zohyMvvpiE4sWGvBT2BYyhbr1PHxdBVpXFz5Sf3Yj7uKi5MT3LP7CfdR1muVuXbCyT93V9LEukpwFkPhW8vX",
  "key20": "5ykJGFZuk26FVBCNzEeMf3Tx64qX6xxdXh5eJkzDvAfW6H8dM219ktCUMQQqgnqu8WMFyPygkdve7FCxRz6zAXv8",
  "key21": "3mLjYRmEiYyqSmurVjWerETvVESmH3iUj6P1tpjeZDDNb4vYQyKiMfVng17evebdzsZXCTj38sLpzFtz1SyEs5At",
  "key22": "n3G9Xb2CSbCJECDtNqtJ9DGzcGmuybSJxBNu1pXoCKpXN4uZK9L1g8wcT9oFStktnjmgM8JEvxqLBqe9TtrxDpr",
  "key23": "4iNXf4VyomrRkh18f3TBbxKVkfy9PNz9QQoGFxooYUihUA7KfTzaJLKsMKdknPhsxc5G8PBeXtHcEr5kxoXeqvPv",
  "key24": "QKkEqCQ97GDrQNr7AR5nm916qChisxXSam5LPZfd8YqwCLxZDK4X2oC17cw8WjsmSgyXJNmDd3dLYDeJSuDaTcT",
  "key25": "2rSoPFUqrZW3b8ajjQXCDDJENSS242EsePfVo1qZjZUjL7iXYuG3Dxrqr4kfg4BcEzDkzdKYgSD2DS1Xco6mgbb5",
  "key26": "38y2CFj1dG1tzUf5T1RmrQMZssPveFjMJK8HygsiBidPfAwcM8cztcyUd2dHBUVLJ5qtkTohuTUz7LkhkVMWC8jT",
  "key27": "373a51iGKKoUGSA8GvMqj4kThBgLzU9KocCxcEcfXW8TFzt5dwfsCkpZfzNEZ24hm1HnmEygKvFxJdMyjxQGFz5C",
  "key28": "4eFtgxDtbrCqPQTqUUX6rFBJdGJhpxbXhDcS9MiGMDJ8B7tiqG18Qk4BL2vWtDraxxZbrhZBHg1iZStoGsEYBAjn",
  "key29": "2pvr3eeaRR5m1d4bDqjLcNuomDsmxqd271xMEMzVGoZeE1WxLL5uNUw6DUhgTzrByi5tJrUME2cZhomhQw38tqRt",
  "key30": "38jn2D6gkhgrfapvnRKFo9JYvGyjNshoFKyZDrbkupfsDC85Y1ZdAAHYSUvjkLRu92Aw4W4fLmzAHsoSmvU67tBM",
  "key31": "5U4FseCZaJSGLbR4RRFkQXLvNRiAgnfg76ZpAGehH9LdjUdDV9BH54H4y6iQanyiAy4T1jC4N9TjCDhckukRvuUM",
  "key32": "3cjwoHQ2nD5x5jo5D9A6itW9inTUdeZCgUaAUJVrbtS6gh5R8Ee1iwAajRw3BoZJ64yNxS8sg23dLBHohwxJvgof",
  "key33": "4GziMjEkDK3iMHynSNFz2V9X6BUAnnuBvKsmBq2vMxD7oBKHnZ3GUzqfCDB5d4DetkLr9djb2PLUrNDgognL5t2Y",
  "key34": "4owySd6eZaDtCre3QYCYojyWwQoVfn3hvi5K49PqdhAQ7JWWaU2YaGMdMP24o9n6u7jjdsDxtn5QbotfNnbTtWCJ",
  "key35": "2kQ2zJaM5qoZWUYjuewep1weViRKAMzkLfxrDnWEEvbnZfNyCHU4FxiCTnjz1xkhpSDwRoCJpKj3sGFXma1AmJTa",
  "key36": "7gCYqwJRvrqqC1LjTxRyTsDxubViL8wa3CaG352mtaA1F2gBgHPxNS51qUkwkKULk3ZjqJUTaGNURSQ9B6zQxHK",
  "key37": "4CYuQJnGAKtZ2snyBwR6BVY65U8k4GdMr8orLFNP7rDRmENrWFHiAszGA4M4496phbJooBeeQJ15Pj8v1HYS1XoC",
  "key38": "2h1hmeSQVa2F5QzUrdPdBsCUvRoQDobZN7xWnqb6dsjBzS1QgemPKuCqqRCZu4ghDkrhkDXBUgnqXzGtW8M6zt9c",
  "key39": "VRT1PqoTiD6i5R9kETcTiKQnaWaAXMqGgRMWWxA12UAMk3makTqKXa19wsnbWB9HvZsbt3ei3dNfv3WxcRnptBC",
  "key40": "47MRL8qMsUB1T7qrSaSL4MaumBM1irEBfYT923T9W6rE9kPLirr3z62dTdwCbTdxxoAqEPhWVEf94fqKbdtdhgVt",
  "key41": "61RVjjg5bcCdPxqJ5JgUnsNkT7NZE5chakJsfQBWA59eZHBCB1PKmf9PvyUbqAzp1q5SJ2bvXhwQx9NBTuFCLn5M"
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
