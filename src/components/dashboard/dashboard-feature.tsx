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
    "4yKdv9FbdvJbs2B9iRqbEVWQ2nVnrM5bwEiijamKrpjVu6XnyyxY1cqVFHDw2uWr3d8CUmNQNdchhJYAAdf448eu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "geN29juTrRBfe55TpvrdEwgXWA4eDJW67UNbv6ax27eSSK9MnNZefgwTj1hZnEFyuPpKuHcRzydhvsyafEEcTYf",
  "key1": "64aiZqwfHAHsCnnnGGZVmgEEXqvvrChJoXZDaW81NFs9acfh8wTPy6zwuVbALpAd7wWbKoBjTpx6gLzYEH5Endda",
  "key2": "51X8rT1kj9uGPsBWRG9oZ9rZ3sBotsESiqfJ3VtSLPcRBrVnsBUMQQVmhvinkxTRmTbFkc4gEBAzbSc8ZAKka1xt",
  "key3": "3ht2Py1ebBKHAwv5jQkyghw84YmbuQZxQmvipJ9netaBVnKyrXHgfe2br34cjBkvHu6q2GDLn8jCxMUbXncsb7Xj",
  "key4": "4uGSjq7zPnMAxzRqP4ZbjgVkQhJPo3X9cLCaMZiGNjjygfDmCB2LBYmTuBXyUmkF23Yt3poMvkHJLm3D9VNheahb",
  "key5": "5mumcwBp9F3rGr6SvdKxajbWWJGZMnx9p8ijzECGXvj8wiCSc2JDE1jQ9rRqLTnjVFXoamYoebv5mrruuVuZMTPf",
  "key6": "3T1qWBZKkUFnhHfpbUoZhhAfFc42ux3tok9DQ9HsitbH91zXPpobrvftbohj2TzExjoAik7uWuAXcKy2HJMsop1F",
  "key7": "5BkrD6iDpC9eJFJnEZNa6SUTXTXpncxQRybC7zj56SXpNi7VoptEzSBrSB49rXrA57HTWK2rhY4LXZgco8RGTXJK",
  "key8": "3pxTe32pHh6Z3HmqjAp2Dr796NJ7ntDySdWRAv9XsaMzjLK7Ra1JTuuALPqZbHrafKwhyShCeAecHyv9rJadLsy6",
  "key9": "4hC4q1PSfLtac6dBaCP1iFJsmRnq4wCaUoE1ep9AC76B5heNzPRNiFnC5kXV8B8zGgxch7BVYBX89XEDxyMvcrQX",
  "key10": "b4Z5kMWWxHEtvm5VLxqAsoDTkZ2kUU3Ehx7oRY8jvbbUkCU9tpqS5YBTEF37LYq5RGh5SY1eZ8wdnSjDbUjXiDT",
  "key11": "5XuF2oT4fzBtc8Nh3WgExzHZEsHiPP7TkcUo3kBPaMNdLGTzUrCWqY2QCT65UfdnQceS3M1bm46qcHM5jSdxQpA6",
  "key12": "5sWHV9HP36JJUZi71YgtgHeCBvD6QiXeXYD9GAwYU2xffhpK7yoCRLWHrLPwmEAzd8a1N7m95XuZZPgwQXKV888c",
  "key13": "4pa3cbU74tqjYVNkqqrScjquGdaTXdy7wFZ7xc5ejPj7NkK3BzXF3xW3gDnoQMFjv3V9ebgDGXJyEw9NyWL8nvkV",
  "key14": "5XJJ7XCSNzCQ57qPdGL2ZiyyosUK9ktBiAaTU8kQhFiyodE8ZX5t3a4wP5DSzQF4BddR4k2e5VubZgpL4MwroG1s",
  "key15": "3yG7T8SviWrtgVDbXPTX3muds1dRjEJ6DPAdaovDBv91NSHLCgPQKAeU3fJb8zXbHohTJmuFmC26YJ8NiPnfK2VH",
  "key16": "4aKsUjdzjSbBTDks96vdTWf1hggCU4MZh8VkNjxxJP6fn1f73bYH3k3ZUBdDKMj1P54UYssuNyxbU3gtXLsWa1G4",
  "key17": "522FAKozGys1vUpu7ca3gK5Zjkwk62WsFeHjhjuzk2UeQhWAR94EGY3kee5XXHkeZUDhLYsZwoRCHXj5vZ2fC9TH",
  "key18": "5VABPAYFEhhC4xHNkNf1xAzDADLytKN6yDrmPCewngu5XiBTN6vFh8coU3aGyBihPyfWL4btQPAxaUe4bWH2nntC",
  "key19": "5iK3DVQUhzDXLwoXSQiGwubqJ6c7K9yR8T1Z6p6z66xprvm4PHJADwfpKJvUiWCyPg3iHY2RX2MysP8iB5QjEBHT",
  "key20": "5tnuGwJtJ21aRet67fpWzww9aAyz8d8xFNGvAcKLL3sjdMQRfxQqA9tQCN5fihB4vj5iwKVyY8bEpEkhrTfNC8qc",
  "key21": "2ZKBPiFwxLVWNuF9oxfZ6SywYtce8WyGPMMaxnuWu1yKPSBpYNDSweiUtQivfu27sh6njyQ9nLhQJiwSsRnA5bND",
  "key22": "5A6AT41D3GQkb8kaB1Xi9TVMLhhCoUCHbXi1um79hamGdpfMyThicsKEBizHjPkGfcwMY4y9dpQxCdr49C7K4iNb",
  "key23": "5inTwzbuaLYiz6WeWoExyEkmPrMmCn7m7X3k7dYTfkr2bH2pSGTrKiz1573spZyKQ6inykoiUoyaZE4966Kkxijc",
  "key24": "5QmrzhJCmir32z7PBk7iyoSpgdbA8gAogF4eHuZzG6rZPHa9pCNevwFgsmjXHV3uqDaSbtN2QsJBPLippEXwobQg",
  "key25": "42AK5PSAYCR6gPxmTKhRmE4xwZqfxXL8gpb3pwoWq85Hro27BAo6jyRFdoRKELG4bRgLV9zb7GqGQbY5UHbR7KFZ",
  "key26": "66qpzvwjFaoycuYH79NMmyZVfurxbUub1TEwFu2E96DJhyVYKcbZqAQy2U2bmM6298fLYXZ6DwcWkUx2mwE54siS",
  "key27": "4f535fvZcocMB5T7FSrX21yRJsrkqj9rqeQwTHDXGRSZpCLQxkP8PBmuyU2vVV7H7QXboPokxtEdaLfTEYuv9cri",
  "key28": "2yLAy3Rke1TRYnnxeHhy5usvqZZe1L9JXHkMH3VNvr6H6UEYMVvHJddMafzsqM5QovKsbFEq5GtJSAjXFSXyoXw2",
  "key29": "3RyRbvpB4QkCMz7KVRQNCit5gAo4xieaHgXroziN2dMuVkj55TCgdC7CDcnXWaspUSGiqSX9DzgwtrvQKY7g5PPt",
  "key30": "4ZQr7i53EZxPUHN8vq5RVofmCPD122fUDbQy1hGZwcuKUbczQFMaTUASFC4d95xVMAJxRUqkpyZcjV5CJ9uekVp8",
  "key31": "53QuL97nEjiUiDeJAcwykxbZzyNE49G3XrMFS3meVGQ7oyepFqQRjNnEqAMT5ZLYCYLdRegYxeRHW3ug3opeobYs",
  "key32": "5RAHfDbX5wtvuKnLCPfDfVvZFX6cRgYpsPqX9c6jYWHqeeufxKNih429mLQd9Zg4wxG7L2eDmUhrY842EHqxinmA",
  "key33": "58nvKr38nCLFfiAJcerLfPuFqq2BWxS2RaAuZH3VL81A7sHjbRKJHvvDctYjaLvucqWtFNnS3AAGKYumUK8H5UYC",
  "key34": "5qmBwiBcu8REjtzTKt6oZD2jHh8CPWv7D8exfm98ceSvc4oUemqt7YeYMVfyiAefwK4xXXepH3e4o6Qf9NUPMxp1",
  "key35": "39HWj27k7m9io33BJNFbjgTZmAqV1Vay6MhWgAPisPanHyT3G2czsD7ydxmGjLYModJk3iAwScFA4NJci2x9WSAx",
  "key36": "5Z6pfCpcDWZUuyEd7K2JGYVtMmJuLkN1q6Seo13pG6xfeXoLGmVHNbdyGofToDnD2aPQf8HCLCiD2hHKtSwYN4bM",
  "key37": "35AAZnNRukyk5s1vEe7A9sJEknMV3U8J48vtXFhGoQR4MJyasaswPDk8Xja76iVi7QhbQS6SRSZVVgHUgC8YJHpb",
  "key38": "5WPNvhNTN1xUFHF2b5g3AX9w4YupA7uRC1n6Y8Yn8F21AgfeH7Rk6KTZjhgXrrkm3ivBoL1MtuvAd3x8rS53abdn",
  "key39": "3vRMb1YMsVr5dRHFkBy8aaU9Sq4NfsmgfFypELY1PGRfgpSKmvaFYdBcrLjxHqnrvNeJwNaD1Fw6nvCSfuBuNbLm"
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
