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
    "5rnersCX79onqH4xK2eFNqnSFvoLjKfS6RU8mvH6mF8rHAYunf5k6V1uQLdtkFGqU6aLQovtM3MRzr5NETkDZcvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d9KdrRNBXagheAWqzMnRmMRPgtPGYdwXb7B6bk35SBwj7yviYSivFrkUsDygsyFETHYkUnYftRQYuimU58DyLvk",
  "key1": "4BpXz4cULQWboBCueSM1yMdCGHSuGDp3mnWo13AEYKPDRsxiypW2SeFYLpBqU8Th6Q1nGyXGQ11cq319uGJnuXTw",
  "key2": "3cDXf4mKkmCoeDPYih35Dh7SkyCLoR3g46gtGcCxCKZ8Z63MxS5r5wVfLsbMi5xHMBesB2acvxZSD1E9HmTy8CCE",
  "key3": "uRT38oif4cfSYtCzyDASyLQNx27VbKQyJQfJSR5sja5JRw6f2MLFG8N8dS7qwfdKPMWgP5R5A7Cab19uryjnzUX",
  "key4": "5eHnJ3LyqRLvtNCD3CgxjGxqzrnAADAG8KsLnT6Zkdokv5wNiZqTkP7ztgWsrzud5b37PxMTAL5rDyb4mWV7MQT",
  "key5": "5HCNHoJzjVK6XKaSoVpsoJH1Dm6qWBM97oPHAGCxrqkjm6j6jLfe9P4ULKJGNdKa6XMXFaH82o6KfVzxrChfnPpJ",
  "key6": "c43n2fPMDoL1TAYYN8fpxskyh3XxmFac2md2xTk3QKtwvHkQ4azYxhKDZgJn58HexqEd7icLEsWfcRh7spfMy2e",
  "key7": "2rSdWihuZkkZKEsuBFrZ4XPZkyGpRgucFQjAperpAuDRUrDEv1fDzokLHP8JiaFkHFj7FervwRW6ZRo434xQkmzZ",
  "key8": "5FhDssPzBN2bK5MYfktfS9Tc6v1ttASoL4GujLpt1XFvaFwbDpHHM2tzz8pXQkm93BrcwLXpugbcutD1MSyxMspv",
  "key9": "4NS2eVriXm7nDsn5no3gKBMCNorE4L95s7Li8syiYGsS261eopWPEsrbMnP2nNnHvJVBCTpcEcqReZbThipWG4Vo",
  "key10": "4ThpBthh38mx49xmTGcsRSxtGVtJvMj4bR1SrcH1MGccg5pTpYAXeYQDg3yjJv3WSVTQspqKKKoqC3uk7qQgLYLb",
  "key11": "42hsyEFRA4kYzwtPpcyVtdtPh6NWivacVG2g6eLgAeDNMDng2ceaQUTLp9TNeyiWrP2VDqmZfLmcZqMbnmAWu6FH",
  "key12": "5Dbe1fghs7m1Dz7MPg3c2KubaY3xukCAYgyAUSPzPRPQwMApbCAcQizGLRJBeDso9wedrnbRBLCBxZcpRKvSXnUg",
  "key13": "4Qvi7eBzrH5636iXvcPu2ScyaDM8zVS6zoN2mP7VXaBsyVX8RGDuAQAHhyNhDpbt4YM1zUjVdJhdkETfb2GMcFZw",
  "key14": "3kCYV2QfrbPns6Y8d2HmiW9GMZxituMzHoN5qij8qarYsfCi17n8ivkRkfruA1p8SNDuCczYLuZP6M5wUCyLYxYW",
  "key15": "2J3mF7JHRGzytKjZb9x1aX7D1f7ikmYWXsEm5nmFj3aQfvADv788S36j1dfZDj49gcq8SunYv53Pwg6vzUg4FzRf",
  "key16": "5AjfUW7EmeC4A7MW8MwtQkdoc7kTDc5bQz7utJty4nRYWjCgsH6AMEaq5mbzBoLn9uC5v8PzWBDEum1EsLNcn5qG",
  "key17": "ZA1vuhaMrnJuVnY4rvEJ6gNfBeQ83797NdaQ26w3QmeHTKerxBvX6PCi2WJqHpcgYagAsmKA1bQqRVDxKt4RtHQ",
  "key18": "2adkfkxbSbgKHEVMsnTzVMUYeJ1MTByarHLe6bvwwVeUwFXWFDYMQW4bfmubngDcpohqzeSyTNYdNmKUu3CBB6EL",
  "key19": "5yUnGu2mjWkminAMqb1UtMMJhQ3JxQJKUgs8Kaw8jEaFnCF2zdFCor8BJmWzMfb9SGAzNhnAG2twAhwqgF8LAZtj",
  "key20": "5BFuo1WYg1G5ULcQCUpShdZmqpTaB7z9szxxhzLRgHYzDX5xS166VPdfiFEBbeqxLugWxGko7Bb6tYBBzWV6kfbd",
  "key21": "57qtqeUFWUzq39NRQ1pjF382caLvbFGLrqymGCAs5NTu3j7TaBrKcmy6WaCeK5qmpCLorwr9gFkWhqgBdzssVMSf",
  "key22": "jPMCsbi8DtzqQHKwJf2ChtB3xj9JD7VqiXmtmEqfL6ayBFe5VKAgqTdS8S7Ha5HaQiX9wJt6gmZ514Ymr2wjxFp",
  "key23": "5jt57ds7q2u8kmi1ru2veqcjTjn68HjwQzqKVxEt9McFxzrWhWuXGEfjGiZh6HTYrHUmza2dxY11DiGRUKPToxp3",
  "key24": "N4sy5eF8kXs35VpE1td9cH2UfVdU7KPiFLLnXkwaVVR68H4sDWokL63q6AF1ze6w8N8PAUdx4ShyRWbkRf8Uqgr",
  "key25": "czDnqnwtN5s3qr8Yd3fXJGcjQF4e6V8fURGEb3drm8DkHoaur9DQaCastxL9u5ufPFdHETKrxN9zKnkHyutw1TB",
  "key26": "4wkyZ8RnyvwFMVTfrbLDSuHSLF5Lq9QsHMwQYW2oaebYLyuSmpRyy5pSFzJJPhWWnNZg6oRtu8zWGtYhCdf4s83b",
  "key27": "2TmD55bVxVbhHzTQNuFeiWTz1Bg4pqy2YGrZCvTECs3ZKRMg7hycYxK5ixhzcxvhuXS2BTG8ao6hiCcKYMsBfMWM",
  "key28": "3AAfQJeQ7S67jgAtE21iH2u7Frs25JLBZDNyFe3q1mipB44JRLS9ytahbHEZf3fj4XrD5hsmrZAJYPqDAyNjntqR",
  "key29": "5MZRZjViQcM2ivAADpDJidTxh4VK79uAdYYdfGKLBvYgQL1LRd5v6cpns4buGBFuc1S9Rb1W55kSn1Ca4iWXSwdK",
  "key30": "3sEAefBDeuv2VEFvZY1e7rcr5McydgopHfLKEMpJF3SYwsKqyY7mVmxeU4B4rj22YbRrpT4jjpPY8Zv3hBBXDMhW",
  "key31": "41qSP56oq1n5T9o1ekebFywri2q3fwyBM2aL5ug3husGf7HG2MK2FJmdx4ijHwGK4ZVTaDiSZCDjZeTrJ5a8hTv4",
  "key32": "zmF7aPRV2KsdxKGKuUYu6NZjzBvAwdiujXNWQzS5WT1Rrn2oo18B3Hc4Arg4zx12GUHAABXpgzAJSQSigNRPjNu",
  "key33": "3SdvtQK4ajKf4dV7tb4ZTNX1EdHBC19u8u27mXPd6HDbnrR3M3CuVJv9enmGSnpKWSAbVK3JiYAXQ1EMZKUg4tsN",
  "key34": "5AGZgp8VThjEgc33hEWagHTfWRJF5vYvu3mo5jSjw1u7nmQKZUrx9sCMCCW2icwvfYntjfPFK8tC8VyxeRqtzWo4",
  "key35": "3x7aC7h78DhedsAzrVrESTgBaV539GiS4YFsZRp8VVZXUUTAQ827BZ6bHeDpLghJcSGRCFM1sXnmsGRu5pV6jg7y",
  "key36": "rAAUcEhQ6a5izjjd7UF7KBmCRy72NyiGnnktegRVajw3K3SQXvgEJeLzAvWUEpBGWzgzGhEGskmADYkQQx4jWtV",
  "key37": "3qPAkcHk3vccafrQ3JzyMEwfmTrTnkUcTDiG4AtJLiYPraB1FkSr5qfCewyq5ana9jDq4YrQsbEJFK9XfdGsa78a",
  "key38": "5YnX5c2yiVssW1BCEZ9nxq6dfZ9oYLk7Y8U7LsrJqmGfSjB8FBuDm7PSFqiFpNjhmKW2vzahUGh2snNbzNFBrw9v",
  "key39": "3mevhBPBiwjdrFgwskZqETCAUqKh3eDJaeJYSppp92oKVpYLjUUWa7ApjT1SPDTkzPWPgvNLhgvq5CKkiPTGLkJA",
  "key40": "5cL32Nci6XDLQ22eadpAZ7WKY3hvMAzND8NSwKtFv8ym2QNvpXCcNN4z1RnLqi8Yg175qbAp7Tpxk2MgaBycZM9P",
  "key41": "4GC4aYo7apd369MXwX1mynSnfDjZ5Co2muBjmGnRe9cvFRpjBwQtKryR1xbPgibZy7ZKPR4VD3aVV1fbac22CfTS",
  "key42": "5Kwy1tNzQ328ospMKiE5wdkyjDJ8PNFHuXasmRA7gTk1ykWz6x4aLWbgi5eKCJJQresyMJVtLW6PHcKv7cHVxaA3",
  "key43": "5ufE5kFeZ5oUZuyyYQ3BpJ1zSFs5AHNZzM9bHCy8ntudafMr1LercwgPcWWokuKTKbpaMQk9DarFhAE4m3imKHdh",
  "key44": "3ZgXrjria4JeDeS3kqFZNTiooj9Xd3EZq64W8281Q8U9e4YtgKHy7MJancSr2wRTZJusjQHm4RkwYZ2hpoiE3vMm",
  "key45": "3MhVyH8oGfkwgN7P9n6ogeQZr3sQpjRtg97x98RNA1b2aTU9HDaTaSQ8iRAo7GBAJrNWaJPRtUAkZQRpavSaCyUq"
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
