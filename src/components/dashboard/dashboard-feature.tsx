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
    "53ZK92L6c3DFzC8EAgfcm3JyhjK4siWZqsFWjnkLZXfpJkNoxcbA7F3zjziPJ5YvaKVpdVBgG21H2MeyNPgt9tft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GvAJzjHwzKNaH8WDzE4xoeuNorbokscPN5sMh4EZ98GdFbnbRxMiC4fpjnue59bgidArANzhgrPaMax4rzpZrWh",
  "key1": "3mY3cL49mUqxNM4LGo4v2L8PMxMn3rFMKQeHvvjxLeRtqcNiztXqebrrY8XB7vSCynDb5eSZeL1jPzYDbULrziYD",
  "key2": "2TtTneDranm144uRuBHcznRRYCFbNdsRYmdMc59e4bZL5pd3bUjix32K2BEVFEQfCpBXpHavhMMYoGUwnwyx4y2b",
  "key3": "45AcuDms8XKUnsbDJzUjRvMdeQo4MyoSK4bZDxG7KBmwBymJ28jn1HMi4NuBw3p4Eh4rEHYSxXount9jeHNTrRZu",
  "key4": "5PScWKFzH3YysWpwoknG8XPHsMpZVtnkyqRnQ2XfdbyWtibRQsuxUrsFmc25XiDwAwwdc2dfPgUBWj9K4hkj9ae1",
  "key5": "SFr8MZvULqNmmb3Z7VwiEF4vghx6RhT5HGegRX7MiSRHpzJK6me4MzrzNgPc5ks8YdJBjamfvr2hVzh5vKK9kn4",
  "key6": "9Ytp2fGSzUTqvWi7P54bTBnizrZn3GW2SNopTgRYkG1AgHTgS5sfyPinqTsDaD2QA4rQH1WDG48NB1rccwSnsMw",
  "key7": "3heu3yi3HymqYqpYfLdmm276k4VFyr41ZUCK6LQtpwNfuZ2qXmNxDmhfj8k5J9LPeMyp8ZG8bNuXMJhaBUsFhDoi",
  "key8": "2gMwSQLgETT3Ep4XXhigeSCujiKt4Nckb3hr8Dr92KqARoRDsS91vLMQiHvQWdhaRvqMVt4Ryqof7UjUpFY9LRtj",
  "key9": "3xPXH5g4QbvxUPWHyP7P2c9SsX8hdAiVCGCRg8qFa8VMTHZT8p2W1rJJfouQJhHQJCG5d1Nb1wxiwv6ZSQSxjoxV",
  "key10": "2EYqvcSL1AQqLXyjpDcj89CjiNvgE5NdwcAuM86my6vFGPfhrwiWzj7TVkpUVXvwe1WfPEAAdtirNWPHKHxXQ2vF",
  "key11": "4tKuGLS5VoX6zj47V5FL27YUZ29zyciBQmDCWa2uJbnJUgZUr3JuSbzbKmMiT2fiNNdGSeRYVC5S6gm3zFAhxKzN",
  "key12": "4i62uf795CnFkBKhthuHMxR6KuCwoGD432iUZqc7uKDxVPkLQa15a4Lhhg1hyzLHku8fGN18wDTxuZonFaxCqWfR",
  "key13": "w2McKmrktnQsZPYHq6v6oQjCsAHpqoRSj3qk4L66gSTfcXqRXAYMFb46DQ2heCWPcWQqcLgvV3QzzbRTfdw5hHu",
  "key14": "2XR33ACoocRH3YWTUsRMSRyYczo5v1Zq3TsoPCr4wdsQaMZwDAe5HCkeqMFWbXwSKEF5rkWYeswh8E2tK7YNDKcC",
  "key15": "5RQ18ZAEG95x6h5aVgVJ2BtQnLhEeNdS4C6HKZSFZc986ujLGmesfbhCYz3mZHcDBu6TWmuxJY685HhbFu4sMzsZ",
  "key16": "28najF6KcQMEeDfsR2SqkoEg5TJv5PU4mq58WF4aFb83baEB9aiYzsTbkHcRQYSBG8TyG1hystLNDsRcrC4mne7d",
  "key17": "3xQqpPm6HG7KC9df79HYLcvCmE8Eq3mCPbXPPA3WavHGjH74KXGfCEyMTHtBd4UiYKjHofwpDKFKPAnZUo3Zou6k",
  "key18": "3dXMPxo1MZzqaippJc84jPk161QgbKipgohm7rHQDyAKJgCsU5uwLkLL36X5tkEfDJcAxNqsQ5rpzqCYjAi74dB",
  "key19": "9hszgzdYNvZpKeadL5oH9aXT7fznkBkNodQA2S3Jg7ENjHD4hr7QzuxhNEP84vwDtZqseruEKfMFJ2RcsfaSnnF",
  "key20": "5Re8fnLu7DBacb9QLkWGHGshuV4jcQcF1pNX1K7himjnAgn76DLCqAE6TKCfypraBiDDmSoLf55FLdDCHeGc9nqu",
  "key21": "ozME8FFSbP6KsKXBGQq4U3zfoJHxZmwumg8vjgwyiPCjswa25tCjL7NL3gwe9UDRj8o9YsY5BCyXu94FM59HEy9",
  "key22": "31MheMbPHapHthCa922Ke3Pxm13L5K2o8HiNZiNP7tZLWxvvqmCRRPJVgrWiWwtXeMeNSHdKaU6hhCypNk7vfB8v",
  "key23": "4SsrYXuNVj1hgpZ16siqdRgnqnDyKT4Tk6gfmps35iSgSX2mxjky25xRECCDfsijM4ux9RhgX2GAN62ocmuZUF7X",
  "key24": "5LAaL89JU2MqsJYrTkM1ppzB5pNU5gNPPYdzBhbRPHgkkUtmeDnubUrqPCX9SdVtsXka5cQSRg4R81vNVSwNErKg",
  "key25": "5rj4hD15oQidWtTfikUm1SyvPxLGkU4zUpB8xrLk4km21dgiXQj8zYFYmFAHxtdsuSpbK1YSHsqu94w7KefNVVyp",
  "key26": "3bEQucrqD3hxpNmoVQZpjn8o85qq7CYeA7dJeSvrtvWd44sjLAU9KPVvZFoNw53vaWjNhiRrSxRMrtNqGuaFXQdr",
  "key27": "4WrVFQdAcBnma54K6zcG4QYy2CvKmbY8877hgVtuoBYY18rSJ72ZjknYwiJYAB2qDgbkkBWk7qkCic3xH6D1nEXQ",
  "key28": "5Ce9Kzq9VrtCgt2f2Z8wkLqVEiVszWhBCdttCGHNYC15ee5h11NDeAeHpH1sLs9MLTFz5kDMyRhHfbeDtW6cQAJB",
  "key29": "5wW5YP94hf4gVjXn1EJn9nxBgzrR2Ho8j7ART7VhoSCJwAzRWrDS4iQWxvqWUFr6VLUZWbvr5FRkdU1gfesR66gG",
  "key30": "5CjEN87qZUHPiibtTdiNRCjEVe7XRWjbsBL8W93oGxTr5AUFzuHRHCTqz93cxCvKhrxZv8pWh5UCGNsSRrkhKLzt",
  "key31": "4EoAeKH5XCZhorwXrcKsKA15CHViwHtt6HtjHsgRkiFuQYoqwme8JYTbVNNsyDyNQw2931YttibXoeWPunL6F4ts",
  "key32": "2yAJAcaPkkvbgB57GnEw1kvXvuyVrq3zn7rB82jUkJ4z4cYfZ4VKe8b33yfiXu7gWfzVdwxmcPzKP2saAFcgxBUQ",
  "key33": "3xurkhuR2YzuNnXM7hAbp7TNFqc2JRXJC1gWwcDiuPvykMAmxQiUcGpLt9rzbGcmrqKqZ7rUwKS8LKBh74YQ62Mv",
  "key34": "5B51tVvMiXr5PGAuU68HuAH1udA6esce9DcYe87o8CYgyjvKdE8vQpVeDoAj4N3DjTjnQr4YPEjv6x8CdwXx6mgY",
  "key35": "5NVwn7GtkGp7VJWG3tZTVEKLUM5PMmLwdcUVQQMVsQkCuwFg1Z4Z8yFoUWZPeZb1Sgb9cbwQkeaMcPt6mQkHbZV3",
  "key36": "5QnhbeLmqzCEHzrMX9GenYYkC5vsvzJ5NP8h6sMw2NJztcWUwJoFo2uLR7FE9qFiZRhLd55SNiH8sLjKszrC7W4V",
  "key37": "5uCP6EG5UXVzvSA9GDqNSAzyqhWCm1dcJme3umzvhhqX7caYAFtwzpbx8nvSHwfD3tbZQFh2R89ZFyMSQdbWEw14",
  "key38": "3s7qXudr4grGyHANgSfxbZRTjxMFwVWW4PfC6mUSKhQFFo1X9h9WPYHTLhmxf2YhzYXdoh5Dk9oTDqUs2WRjpXcD",
  "key39": "45zF3LNBhCovyQDsMVtmLZock7YUPRBj1nU3mLuFBXgsBSFH8nH4caFbUeEozAEKtqGiK8F7vfrdGuPJPqa1a3qg",
  "key40": "5jz8abpQHFpF6HTspFuQhR3FcVmy5bor8eUYQKsBVftpSpeaRGRKXLxD4Z8hswvWcbJAJQQk5A45aFkTPj4AZps5",
  "key41": "4XcxadtfXtuxpzWMiDX2MRNczuYKGLmEwvGSSpkA1gAQGUQsh7MhFjZMfMqUdLn4xEfy3db9iQgZMXi67ajk5u9b",
  "key42": "2h1nys34JNYcnepJN7Sj2KKHQrr29vLBgwRoJRCW7AERH6UdZttbnrLsSXw9qecfgD7GFibtnjmGtiFunLwAhQPR"
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
