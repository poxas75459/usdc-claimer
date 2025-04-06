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
    "3XaNkAoAFe2qovveGDc2ffnkhaHw78f743ZdG1PLeGcPPXHacuBDKDpM5rqHBULyXjxeLAXygqYNbAFeh26GRn2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t1TwYBhkpPiEbhwgRbVArZNzKfr9hbxVugQxmWBvkLA2VuhgyHQuPUzfZLkeo9oHAKoBAm81CJuPsP8C1t2Y8vV",
  "key1": "3JgoW6LNrCEVSrJLdciCd9u64RnHKkd4zoKLcTsPrJTBAjr3ujPgKbsiHfmSZ9jsYz8J6aQB7MgtNBWGzPWdmsFm",
  "key2": "527tQ9bQRnB1FmLsYFdswWZQE19AKaW8nio7Pq5NKiPuf3GJoFREdWhzi1NX5C7Y8zWfvkMLMDqS4eJeb7vnxUdK",
  "key3": "2R2keqAFKYmHSUMjnaGF2Yfz4WZbbfMMeL5UdP7a6fpUFvyW5xwKZhU8LG9r7324PV73gkREJq46p2U3A1TDErQH",
  "key4": "3pKBbPoXA4CqfjPe4NVfxMtE5w8jXCkEnfBrsT7BvyFoTUFs9KQyprLyJkHo8GCfh99SLxHzXmi2EGpagKJ1cArC",
  "key5": "31dMZX4nF14d94fJ24s74FNtTq6r87fv2VNSAr6xTz8ssujFsxUtYWiwWgPWneSvkmrikFhs92mdGpxx6BwVvxbu",
  "key6": "dGJK86gnZjLihwecEWgv7TxGimvKfJCexVsAoxZHKn9wyaWVvZrn7qRePkPYqbM7VbWEr2Yncg6QEhxbieCRZzM",
  "key7": "2zw5vX8ECCSgnB66KZEhWnh7qBCFFHySuo1eyg1xtpVBxvbMUyBnRh5j2shVWbR9KrWdYF8Y2JMSWnZJFvuvvSsD",
  "key8": "RzM5qyPFXDaLdc6BE8BijvTKqUt1tiLGs1FCkWxvYxNekmJCJJcJqr9ooTYY6o8iJ7LCtaz3mZts3eECeBHh3VQ",
  "key9": "3QqB2kUcqhnp4RQESYbipsZMjuCy1JBHvUVEtX4MArpG5NdJnwjk5HY7NxfdJUm8JePHZDf5U6nbKSfJjhKE2V9m",
  "key10": "3RdFBz9w4MP1bJh5WEcDJqjrMqhKNDcNAjHtQjX7QPkHCBm3wutnR2TkLZLhsPxzrAUYezbPY8ekK5oTS733NPSL",
  "key11": "2D1xQxXGBwP4XvX5QRGsYkQwPZsL7gpuXqd8agRMTXxEQ3YhkKfjfufqsDv7S896N8i2SjGZ3pjFWHXWgg5UCDCm",
  "key12": "2Qocs1NgcXU5tAf3ox9CTPKk4ebCzjVPqspnjkZ2w5b4LsDuQfrrWctTBsrKjdc7Uk3YoDUWRzanXPrr37kU29d1",
  "key13": "hMBUfXTnC2WM9pxZQkX95iGy6tdF65XD84xvP6qJpNWV9CgzJJJFZNncQvSJCiaZ1EX847gG8hDqyWDK3TinXuC",
  "key14": "wkUmbtN1xmMzAUNN59RcD2eaET1r8vtKxwEjrC9V7vVUcAmhDp7uWCUnwjWgrTayEsZgAQ9MjaBQpfAbo6tRCyk",
  "key15": "2yTbmeP3q8MnfodfYFwLnNq6p16XixFcHcqprzcjJmEHUUxu3R9sA9kmMmczzZJwzvxx9JJhKrNtV8xGtmy3Myhc",
  "key16": "41EuUbZy7UsjAbQHS6Ww9ZEQh9aNT3UMsbgUHmE8VN7BvCT2tdrUfj2AwqubxDHzMk4Zj6UUAjHTGSkDMCwXfPMS",
  "key17": "34z3PfbMYHHdDmkNyLPxktQiX3Sp7Kf941DMftysY4y3wbz2owXfSmxUBojYffKwppi8S9vg2cRsVP6e2LoDuaqg",
  "key18": "3CYKZV13RqsPBGytCssm8HoWBomMJgWJsFiAALseM1Reba9mPhprmbWBBAR2oZCiXnrqP43ZdPmL99krqvJ3jYoe",
  "key19": "42uSSD8UJeSyKufEJA5AgL9Yqe69uYR59bjyaQXmsW21HqznBTUkw2sgHtgvzUBbt5UBvQNkPLVKn4EWuB6zM3xS",
  "key20": "ZyPEtuTaD2q21t3EgLgLSw9sp2urcYfV71jNQdXFEgG5AREXW9Bbuu2PAQR6NCfWtFwij6jQfmJM3DVcZchiv8F",
  "key21": "3sy2QGU5RN6GfYfzwGSww31ryenyTQcT6kUFcn3AxCAhGotJPu3wqEwvw1UiH9FcqaJQFpgo17o4TZoUbyXPkew6",
  "key22": "4R6vmpJ1Q5vuXGiYXXEyT7i4U5rkz4m68aJbCx4UaJpoAzKW8NUyBXme36TXxz687zgQUsvP35Kmgy4JpcLAdv9F",
  "key23": "f1qurjgmKkPtuPP9fVShuvWDycVBhzebqZ3xbB675VWv9Wp5UBsps8nXcJvfvKt5twH7EiNFA8ZDCzkJY8NzR2k",
  "key24": "3rp3W94ebCQ4MU48UQAWXTmRTosZpitycdfES8Pm4JbjEjFztVxpJgYnQgohE7Yug1954PqPCG2opGRpiS65Qeeo",
  "key25": "3WDUGmsyEwnw5U8QBNP2N7i55iZEHBUNMzKv4oZbJdWUuv1ZBP3T7YtU6PqXNCbZUep8TbX1YmtVKLTfEX63ECYC",
  "key26": "3V5BssKyNjqmQDYpUME24Purw4orQpQuaNExzrKycCbdE8i9aidAuGYpEyPpCjRB4SmXZpQcJhCRfxMCAyZ667P3",
  "key27": "363d3jb91crpfKGc63nSFBsGUfassAsf2cpfsAxrpdvXLsx2uVfUBsw4Ad6dgRaa42cCD6rE4x3cAwtRzH74oYCs",
  "key28": "3vMbax6UKVE3CL4Vx8moPgQusGv49XfhWsu3LduXirHntdouAK4QGGrR46DrVxc6646LUVb7zxty2StNAwUrcJ69",
  "key29": "2btG1ZRscNRAWgVUmBaBscFnz76FaZNDT9FuLhvoWzWPUA589zUQYG7jyrYP4TzGpKxjm2W4Dt4Yq2rU7wWQo7sb",
  "key30": "4ZVJ55WtFviPuT8S5JEbzTiKB9w3FkzZfRSZEPLBdZzgoaUxSpWbgDzzZnjG9dm1ymWGFKtgF4nsBn36qwckNW1R",
  "key31": "4sjnNyw8q5MvPBv1oraUQPuKpJ754d7cjeAgaWfAFZcLQYzdgVq1y6jZPBLZC7JSLmR44ejGewFcVYwSikcaWPhm",
  "key32": "267QLdKSFzcGHC4i1puj3kDKCBDp7h7NBKTSjrodXYMZJ8W9zc86Dccvo5fWNEamZfAMUvRPLDkg6Wd53swkwhqR",
  "key33": "NzaehBBCB8WZrkwsS4MatPqkUQC3uaGACFLoMVoaiXGY2bUtKTDmYHDHU95hgzbVBzCdXeMRhAVZYtrGfY1XRLw",
  "key34": "5NMbZVhZurYv3oFV3RnXXxU2kEF3mjo6SWdi5Z8RFXdLR1LCsKkR42GSjC7HfnEe4EHk8M7yfg1VF85RJ74sDCQf",
  "key35": "4JiPKoEtbo5DiobBSUAdow3yFYV8a7yEFJ46196rKadGKcFNmbVLnmQdBAnTkAhqicqPdY871mYgLDjNLrL99vzK",
  "key36": "f4QDF9LTkfrqwwmNEX5hcaJ2uemJSm1FN8wC2BGumuABxJRZC8JzvyNqZhBXfnDcVj9JxnxAm3hq86xPZ3DdpNa",
  "key37": "5SvUZUi8iSB2Xdj1U1FyFvLFcEcYXZHDVtBRtswjHCBUtLggLRz7Zrj6n58fpBE5cf4d4MhCpej5JinYMJbLR545",
  "key38": "3MZkaMbM7jAKotSJcZ8hd7oCG8wkV9fsFJTkU3Fu8VzehzCmJaJcH7Y8yyiu6hCY8wYRYu88iTz6C2DmGkvAnZDe",
  "key39": "3C2pdWutorCdj2maxa6GV2gp4EwwhQWp7jB36AfN8XdatmLMsGRL9y7LVe43fTRwgfBUmcVSxewScgYTcGtdAy5m",
  "key40": "4uQ6ks4ws2AhvvooCXG6GLXLzW5xHVzrfFanK4BSavXpkUTfh1YExviv3NBKnecqxGKMP6b2QQbeUHU5pkh5c3D3",
  "key41": "2Q9gkpqBaA2ZTJsfe5cYJNr7H3SxojK7nrUUMf4K2ZM7RikKxdM3eH9vxAxCEXf2ZWzGixWUp61D5cSLRGK3vwnM",
  "key42": "5Z2KfEK9Wugo8kDigjry25Ctw27UwWiQnHFWnTBnkej9MpKJP2NRedgtu2hkHdQHc7hw4gu5mpP5ELkPNnhovNhu",
  "key43": "3RnYAJ5PCwcJ1nd4CDzZUgnrfCHYeCkJ1id2bNTuvGpNc1T2dwuMqkvJxytzTEuMPzqDrANebEebbzugWydrKDu7",
  "key44": "fFa7GAiNZeov72D79AnBb9TEfuM9vkJguswRWEUo9U4R2B6PkHgxJkn1pfwqjy3P9e9heHNezHE88x1B87xZpL2"
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
