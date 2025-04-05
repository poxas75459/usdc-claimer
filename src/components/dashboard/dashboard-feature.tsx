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
    "GZzT3GDg4Amtetx5L3RpHTkPhrLnuQbe851e9Kps3ZWmgmkLZqDG8swSxxV5TwjZK2RzierYv8fvveqYwHkya9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nCoc78vdxj3gHCWVmmqFLJKnQ5dgzVsGz8AfJnQk5aRUKDcbgEpDCbkcWR7tX3NLaJ54ziZmPWnYxv1TFqtTj9v",
  "key1": "4HGijPxZvS1xApJyKBH7Y2MTVhUnmpKnTh1XQffrLmrDHweQh5uu175z1WQax4Leqs1wQ5biiJwoBYHWg2ChfMnk",
  "key2": "2Q6yBAZfEurvmHQn7u8U98VzXUustaS8diDKiTgZgM4SobamkSrzy1vwWvz6ATSSYPvH76ud3hm4j43CMSnKsC17",
  "key3": "5r9mWrqy9MkA58peopoLu5zbCECpeKZdcdJtiocKvoH7o1fVHwAnB5qHgkFZzGKkw16xWMKQZXF7AZJ1as7K7Pqv",
  "key4": "3F3AZECTQAF8s2aB71vvRNvYmVy2AiTMNxxGcCdeRm6KiW8tUqhdZwNkNJpdjnpA1otg7QcXv8GS334HnsX9BJiq",
  "key5": "aLsNEsohF3YvJopK8CNuFFfrF8UaJMeQu97pn8dHP74LmC3cnFNYX1SN2mweDepxK9RGozkNyu31gNy83PHNU1k",
  "key6": "3a2WBnuT5dSAdDvqSfcgvJKF2xvLjkqdXrLo6sgNcc9yayWtbxWxmxQUZ6Wi7pDhe3uhdXbfwemSQYW2xXP7KvAA",
  "key7": "2rqWBixZsrawR5us9H8JKkZV74od16zA4Xwcf3gBFEZLH39E8Tg2vzGtHoB75dJ6ULUuXMEPY4zCrUWYtWWm5ypT",
  "key8": "Cj25dhQPR3EbuEgn4yy2YQS9bcceXggYRzTvqtX5zsagxAc7puvEtU45VJTcaMQHShvNNexEV6AChZJHyq7J72o",
  "key9": "2Xwkb3pGNFYToQBAdMp8bVBXTDt6puBc9q9ejv2Qnj3vLdkfUprgKJ7eGuy3U7EDpkGeXgeMPboEv2rSKniDYF9f",
  "key10": "5ntAmrZV1eJex4WhE8p1anin6TtEFR1ppLY5NY4E3vgdxNG3JBqYndSyZKLtnF5N4WEQ9prdh5aEbtjZvj28gdZi",
  "key11": "2eYJDMVwQxFCpRpeARvha3sbRiyBHVNDmHEoxFMz3yj9AFqhjsoeweupRcqSh2KamD4ZWJHfxEkMJfcUw35qRiPe",
  "key12": "4PTP4S24RvW9QXbLnjwpqsp6gVxvmQQ1Lexe9FVCy3UurXtdbrpLYH3STnEbKo3sf8Yb4oWVHxSD2PG9ogFnCmSh",
  "key13": "45WRXKcHZ3Eoii91ecTjykmv1eQV52br8WZ4m4ZFDEGkWq2SPZ9ErbSFVym2Dsa4zFqkSP1GK29n5KiaxpfGyTeH",
  "key14": "2RNozpa4pCLRmAbtvXXLNFce4e6fUKJJhtwXaD7B5y8S5Lsu28hoYG4EfQ6h76cVtjT43fJi8cEJUwN8dwRTCAgg",
  "key15": "65GjVcPsuNLENphihqhbdFDBFh335kmSEHsjws5E9RzV4zNCtkSJqfioHgZKtr9sQcywmAJE99SSGhZTMdB8M92x",
  "key16": "5XGo5YJiB66zyfhG4UoctsYSMN5i6cYcs2AE5pP49cLBfksq4wKatYHRD72rJ3XWZ79Rw1k2WUZWwVC4AhX9fEFY",
  "key17": "3EaSMLsSR8z7zdwRabaYg9dcvQwmw5n8ev1zf3bWGMQnFjLQYiMF7AxxgRsWrXejDSQU4Jot4RdtaaQTk3GC4yY6",
  "key18": "3P368Gaz9iUhYk2RboJ3phdtJvgaCxDgXk35ohmUsui3k9Aag3WxzwzjbSXtVF96zCtWLwScqnbq2E7bFXhfwd1M",
  "key19": "2jLvkdpsTdut9kkUMEPYj5evS3JurvvbZFQecwBrubzKsS2xgzDFeB6YKRdFS5vJuizgajTZNByohHWrUNGUhCM",
  "key20": "3q9iHXz1Ds7ncvxobnFkVLmxzNgyDrmngNKECafz54sfB8BJ6ATuAYgZA1FbfXdSzWN2Yzp2gBpm7cuwGEzocqjJ",
  "key21": "3JnAbftdLdwJ6Y71DLjwKKMcY9a11mT4JtLbUVBEiFdXZJ2yGbbWUYv6cJQkTkJasLrPvZi17GrpfN4JKcxFsoo9",
  "key22": "Hcm9mYqgJcwrovyA8m6LiVCHRYCBjoMPrsgHX5u29U1gPGWA8w7iwbHUUe3YqsqNb6q3bxxKw1ZkLpHRPuvhQtM",
  "key23": "31t8H3mWjHpC4QReJ6ekgdggMy38FV5ZEMQD8PwP89GRGnc8vPLj9YYMGCKiZDxc8R5X6CwsyKYjTCnWCiLazjp",
  "key24": "3X8P6KZVDPgvDt3JMiQmzSJKzD8tGWUxaVuKpmggEtQAEKHxAFkNoZXu7obUJC8FR9JSVJDQ2okw7gFmEHqjhA4T",
  "key25": "65FPE2jjZpegjYX1ih7QEhBbhuTpm7eebzA4PB4gQvqQ1ZLqm3MPCRcrP2JkmWKA19CXGFPjTdY9emrwvpN8zoJs",
  "key26": "5XsyHhvm7qCaXfbohDAgycNZ6QQLBRVscRE5x7TgwVz7QjkpUpGu9ZGvNsRQFFEdCpHA436xx5VBbPZWHrqjstvX",
  "key27": "AMkb7jzZkJWgzEn1Hpbtf3RX4peFFYqGznbQGT9uPDQ8ugUzRuMyQXaopWjUDn3AEETRgGTcfXqRruPfoHAKDdr",
  "key28": "x1QgNdw3e7EJZzuVwCs1U58ZrCfxWbipSDXnt5bRan476bVDLsHXaQcAdHQFBf9Lhk1SeLB3J3aVrTpLNcavpCN",
  "key29": "2Qi9cLqiyhv46z9iMJ2kLGMxYHpZMVHKr3tyEvLRHyWJaPjt4X26yUi4qQFFuRq7c4qsTtWbjG1PTz7xz9Kkxajh",
  "key30": "5HCoB6BLVpz6PSmLBTTiA52xsvQRLxKJyzARgE9TG5CChGRMwdJEgcBx8wpjSxdYyqjUX2h3u1KJv1MfQwzZYbNC",
  "key31": "5rcHVKniNfoKe4zMu434WpbHsKsAnfL4XfA4qrnbRnWZLuxRVPz1vBjKabMtxkna8faroj2V8LAesLwUMqJLhZ5",
  "key32": "67B3rxLS2zUZMB72dcBWTnYZu8ZFZ2rwnK1hyhLSvNF78c7nhT2hmHCg1hFWmtFTV4Yar3wDsXJ3V1yb4DuHMW1t",
  "key33": "5Dyn7EPLFELs3wtvFVRac5byXoi85PKiZY7iEwjPCXXBKSKGoAKQxYpZ7RjLJ8nstC9Maj8wDRXCVXWL8uZ88xpE",
  "key34": "4TC6uBRCaJAwdWJM9vZuKnwHyPZcDfB3HuyCnjC14rWPjBoYJ1xZ2McEnGQLMKuB1nQEnRMUmQPcgjdhJ3QYeu35",
  "key35": "3mvgMGtMcQ3tzVYQqgRd95EdHrGKhFCzwr4LctjQVcmKNoAs1rEDc9WxersV5d7YNJWhyxRTgWLV2tiiu952UMXN",
  "key36": "49GzHtTvoo9zqwHF8vWsAhcqBmm9PD287nbTWn928dhZvhajbo6rMqtCSJk8RvYft2qZnC7DjeMxkyQaWGEv91Af",
  "key37": "4Q6ED8qdJGm7JLMLv8YEfPJVqretLqrdjPBmtubQG1EDV4ekV1P9z7ycru2C3R24L1UDV779eMeCRVQJzThVbcKT"
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
