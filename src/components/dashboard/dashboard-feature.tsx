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
    "3EQsyo6qYFTTCQVaiiRP4XHM7gXaGrr8Ff19eitTwpupmCBHXhTwcNooQhTyenEFSFUwQda5NFTJSohc9am8j4R1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L2Xab74YRW5ixjPJfMz3UvCYXeLbWusXWqrte9ix98Yzw2R48iPynbKk6GUft5PppbPeAYKw9zkfRnzoWxTYq85",
  "key1": "ePLxyrzQZwxM1kTSZEruWZnMAYGwEhmvJvQXXMHqWVhr9amBj6LubYGtztdKsBLiC9Sn8ruQgEDC5wafHHg3GAX",
  "key2": "2LsrJT7W1ZrBExYsLdZMHVSMdjzzWYPnXgFWXWMsDPJLUBbEiUjdzWbaPQHncJP8Yt5juLGaw3sSpoeveNTemLza",
  "key3": "64EMLrKSeMZVraRAXupNQNU7gkYiaPH2erR6xS1am2gr2wqaUe7CxbwPd1ML6t7f2iGjT8gG1zn1jcXYwN5kZmFV",
  "key4": "4p8DgmZGTgGDsx3taQgVQC3KPzkjkZBFziYQQVqgyXuhprK7UgZCc9R99RMvLqks5M9NdYb1R2iwmmXyKBLW4Anz",
  "key5": "4UaMnXLrsgLZ1ZhgadCzsiY7mk9VAniALqax7KEU13cqWbvJkPabKSQ1tkYfKpTijWsiqoF4kAHF57sFxMT8qvtk",
  "key6": "3Ab4pkYC6JJfvD5AoUMjNVTzFB61E2rhjGJ7i5vcjUJjPR178gBW1JFQFyRWyyAAHTW26RarfJNyZcr58Eu3NkMy",
  "key7": "2YNgX4fi7Wp91Wfc3diBnwi5jVM7eUu1EGcTj3HZWW9E7fcvpGpDop2D8ZeaukV1B7LHNEzqhpCqBvQEBCiUxeWP",
  "key8": "56aHQmKeGQih6B2u76Tvyd4m224JCRuXdmjAh5JdpFi2BXHss47iu44975adJUEyazfY6kQZsa7Q9yRwSdnRAupt",
  "key9": "5C86QxNUgv8PW5VQfngsCjvMqwWf7w113PYrWLZGC9RFeQZWM8tYWDsdQB8ZbZi6m1kergoXtqCXi8xNycvz6EWe",
  "key10": "yCu7hT2h4wJ9FPrh7NsTpYmYmLmYzJL6xydtEsk2GNgbK3qbGWF3L5LVQg5eMj2XBJgcKVGkmX6qXWnsD89vhvF",
  "key11": "64q3bRsMQnjHud2LJtSL38bAZXkwTAKBdP6ybHMdfjvTZqdmVuJW8CYgqz5zETuzEoLD25jk5VHH2cXD6fDsTHA7",
  "key12": "5A6y5AYmcGpph1EcWndgj13wKPf4CSRRJG8Mmz5KbQpaBJjBzBmkxzL5vyXZpEZ8Zxjh6cQ9hZaYcW29WRLGiW3J",
  "key13": "3iVACvNQgRZNWtfqybWfkZ2ogdTx5J5wf35pY5Fy79anVRLvWTcXAYAKmxDbuk77D8j7iaqrkj9UN14X8UCzYwcb",
  "key14": "3bBkE2ZFVZA9e7cwCC9REoNbY8tnQZC392AWnN4WkiBA3ujzoiTzweeKczofPHDDQNswrefsM329HW9a7AfvPZDa",
  "key15": "mpNVTUPxSRSWMsJLbnYr4bVh8EpCyPBjBUAfVchjDiXm5Ymibeh5fKZGR6u6QszErExvXTgTrHPF1q1zKL6XhJE",
  "key16": "3DEqVRPvTw9oPT1HDxPhZjXv4Gyavriiw4wknnBinSVNJz39A9eGujKUPgjawzzNkz3RaYFbjsXdYSaQgqDgSZPM",
  "key17": "2eMioD3UBBu9EETTBKH8B6Tkcq8rpd4WEVMtM4xdZUsHjhX1Lvj5NW1X8815UaDjGJuJsVUSf8uukiqhmmhwh7JN",
  "key18": "2eWkVgDwvQqzbfN3rHWz2EUh2qwRoEn4vM5n3egawVAwp7ZQKwwopVAKyMMw9Hvmmc9Ne7seKQxjXn2MJU8ZwGqq",
  "key19": "5Li6hcwhqpWFmRfwU4rRCPqJaBdLkRUzCbg8e8UrfTyUAptEgdABjmJnwLZ3Ev4TvTz9jtYRtgLgsUz64vqA1e8Y",
  "key20": "3f43KXgziTfmm1fzi6j1G3vLg7wSEYPte5dSdZCWCcyqxghBbs27ggFyc1ooKhgs19eCQNK1yNXuQY5SKQLKCHHX",
  "key21": "3qhhMGkq6vCgbY9vLciUG52BFYRNRdjfveGQ658DeyBiqa6RpU5zui4pRHCbserqaVC56NX1VbG55Ld6z8S1Pvtw",
  "key22": "66Z9MmWwgq1iCe6rxQGHWLoNCRkFv5cHxeghAayZZisWzAY5jaSTNPpALWRb1TSkY3ZLLeGnMxVUjn9LpJ6miMGJ",
  "key23": "2C2Y5GjDiq4XAxooYXXQJMzyszXCCmB3Vhf9BeVmQEQ9wV52kaFhcKd2VKZ4xWaXWy3kHFRQ9NeorRbeugjdWhnu",
  "key24": "55ydZgq9MdfjHWdpon9sqDTLJTnkN46RaTvV6XsX2qxdz9ZcB2RSdtkagpCmFms6qbERaZsxNCFufAY95U6nGBSc",
  "key25": "4sPuz7GFcSpo5dw5135McbNhPXo1LXcHtpzkp36mgoLXMkifajfJEyWzgXTELGWkfsLuhAPfhfEhsVwYrZ8msCk5",
  "key26": "3oG6tSJX5YGixPsDXrYdq3RcHf219p6mHhCnHCcVWK4oUzj7NxgHCtt2ajSSENU1TbvZwwnMuDLuLZNFGZD692tB",
  "key27": "5fGqRCZDgapyUSDbF2a2Zivit6QgCfSAGehSRw5N87jJRNRYgzQyVKUfKWLJJRvgLGGX1pJ56o9xJUTE4ff1cJZr",
  "key28": "2S1Cj1T2hoRzKUhJfcpZhHqnLYWMGYEj6RA2PwaKfHfuZ5H3GG4CTGQDKtum6umHVLYz97UrerXnNAsoLs5AytiP",
  "key29": "2nV8QXmxERNXdoxrve9rwADhYSDKuNHrRc5oegdW9TgDamnVB1k1GR77JduMgFTzZdM2XRS1WzjRV6ydbuDpXK3G",
  "key30": "3DpLbksYGTfAnSXp2WVv1TYgCRL1Uxg4UyPkDj8zTqzRchZHLd7KYn7csNNtzEsTrVjG9fKW1h8EjWj717VnCsDh",
  "key31": "5aHAMcr1imFRbKRZW7qmWYbn719UStMk333SffMzUdcwSYxfSqWb3p7eN5nNeY63L1gnVjbYrt1NKrCiTg5oyBE6",
  "key32": "3ZRHGywHCyarfnRXrQwUXHb6y59qE3jpbpEZqee1HWiqYQ6C9nHUYrqarp3No6cccMU9GqshBc1VZz5phsNDNJ6f",
  "key33": "3PbcENrD9J6LvifrBDw5NkkW2VafcGBhgVApAFoCQZTA1BLNuaxCgfbhpkAemU53WNRrscFFJcMx8c9Qb2g7WiPZ",
  "key34": "3PeJAmW55Mc1tz2CY3c4XkomWCnqTnraCZuYhy2Vc6ctnfZp1JA1ELLjoGoie45kPW7au4rJA8i3SY19SG8b83SM",
  "key35": "3vne3ZuMPRArJXCgXeVMQnSVuqyGv4KFLpkxbiBmxUnfxsDYL4DV52CKuAvFW8NJ5K4LeDn1FK4kvc7GLXSH62uH",
  "key36": "3G6VbA1GGGguKCUvZCskvdE8ogYowZYV8fJynMAnG3bU7a4aqtAgaHSiTmgYdFkbUSGCujP9jsfQ6Q9dqow3B9Mg",
  "key37": "5H8vZKDM5XXX2VKLsQmoAmAXizEUpKwNYggzJyjrrCLZfbmrAHPtH2URtc9fyRUWVFTBM7yjfPyvsCXJXiFNSXst",
  "key38": "5CBRpDYa67NDCMw3G64D4YvyUA2XDStJzFxieLYvMa84HZVtNe1FyfJwUBbAcZHhamxGrfBW1KDavTpCtZhmjPA3",
  "key39": "45sKRNHeLEPqFkFTomwSqd73UNZyYAowNPLRfHE35hG8kfVSbsn4eGWG3cf7CGZ9FyVMbPKu4fPXEbm6esRiMSaW",
  "key40": "546jgwXgrL9pAtsJx65KKNVJKioyKq3otK4Lg8z6JLGTL158fq8RmVe9k1jsVpmu2PiTjPTsLn84LjKBzj6fi9yc",
  "key41": "bTVNQKbabaTDod8jiXLKwPAneju9BuLBzzRkatbrivBDDXRxjvbA8uPSRa4eS3kuFxtkgRdYxpDgpU8BPNRrbBA",
  "key42": "5YT1pv4QycKUPC8dJs3fuyNqrgSqcdVpiRYfbr7dpz7RKgidqwnpZBQCQTDm9fwsW6ovUKbCiDYcFwt1DHp4XfLG",
  "key43": "2PcGd4bzXS8kNeqJX7Q7zgk2FRn1KnFwtQXivK6bMr1w6F1vLi9E1jT3SzbMLbWvAQ67RFNTLNBW7Th8v68QoU8C"
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
