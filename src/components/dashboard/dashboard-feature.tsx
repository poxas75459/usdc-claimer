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
    "4bu2gzcnNdG1gnMCH5tZkntWzimdFBB2ujUp8BKQFqtYLkMGLkbJicmotdKcogp6z2S4pLpaMgLYwXiszt8coL1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49EZjAqBdaEFtCxJJ5gtwSzkFrJQGfiRcVo2Vu8CPAj8pDpRVCcXFDxT1hnjP4X1BKPWJ27Mjrx9Xvbo6Edfa6Z3",
  "key1": "yzPCga5Cs5BV1jooVHtPLqNW3v6Cwe8TRVqNDDCNu2datG9j9ZtVLicmi2x3GQtFGX2gVZTDtBgVzTaivEHDNt4",
  "key2": "4F35KpxdTmG1DW2GSKkLXiGdrpktnyDkUtBSTyxFAMayJ4N7n8y7NBXQyjYDsp6bZnPD8rH2P9HkwbQdKLkMPR8N",
  "key3": "3kSLpU6k9mWFXEvGiwP5Nc3gkRoSL44aU5hVAaMgp89dxtJkaMxuknyGUZBiRonKVbGcrjFcB2wcKG8hFgFdd3MK",
  "key4": "5GfXYZ3ZvTP4WzmvzYqznbGFgZUEZQcDcQZHNBY8N6tKT2u254eJ9bTQdKS92WviQREpiDjSHJMW37f9ffcBj4qx",
  "key5": "66mfjcTDEdgszyGj2Spwn2RzUZm55scycnAAPmRE9BgRAzLCAf5MyvdqAMQU9PnitdDTF3yikvFJ3SHZnYRmhAdP",
  "key6": "5TwinBXMLQbZKG9GZvzZT44GdwQRKDqnC2iNrz9bh5W2PvxjbKX83ehKCeF8EU4auiXG1Nn18ppydjBy4nV8vzmn",
  "key7": "659zvnDCcKTpzXYCxgFXef1u74Wt75wRSAvyMhkJmy1mhwY41j7eUTY3Y9Fq4QVo2hMRXAcBR1rQLyzmAsogf7V5",
  "key8": "2i1ZifG7geqjWH4yB1bBukDoSZ4wDyyognzTf3Dv1iHMNzcdxk414HXESRf4X4cv9Heovczn3af48HiLGZf5PXpZ",
  "key9": "49HzvyCtB3P9tzmiHMceNbKrbjUeHDtJ5ZABQU1Ss739SmjV22WFQuKetG2BaBknivaVYZ5wnjzP7VRwgNMHHtBx",
  "key10": "Qn5Qm6T4Y1dY6kAh1izvTxA6mqwUuwGzj5tan7CK7cj58WETqHRr99mc9qsu6PQLAes9ykcpWWvLVgiUivtCJro",
  "key11": "3nU4sByEb5gNRuSGZF8kD8AMtT533BjYLa5yP7PDZQq9uuV3oPQst18zWY8uXbf7KWpwPYBgEY68FT6Aany8qMYM",
  "key12": "3PzuqC4GBqmz2wNx9994p4zRAwo8KoQkKxiSD6A3VnuVYK2WRwaxoC2Vgg5EE434DUvV9tiP9BmDKzH1sp9vHEAG",
  "key13": "fwGEmsiaxNJ952ejrPTxvXDPUjVmjtHjb7kXvAmYu1czdd1qz75Tn2RS36KhQHu2bmXqyQAXSEwzRimT7iNRaxL",
  "key14": "5vgmnxdRu86HnpGjG5yJSSrWyF7xKdpxvEAAeyrUexnMHFdU8qDn2DW3qVYwhSzKJVYx8vqAiK5HWCeek7p5kB4D",
  "key15": "Md1794D5YyBWhnRfS3jrhAP1wg3zneEXZunzNuKgANPcaY6gGU8FY7UCqWQrfJATt6hWZybA7CX9KKKfLQgG6o5",
  "key16": "Cknmg6MwHikHQRT36ZHPigCSjWSuzcyJ1f5wR8ZxV5rMetgHE1jtXj8yQC5sPdcszp9zMNFAUMbHE2BxvCJCuBc",
  "key17": "3XuhsFNRRXQNGrWDr3ozxngEaKEJcgtv2hen8ofeLCx1E7S9wWq8J1u7FnDErSRV4QgxEDZkgZv9KPBjDrU8s6EX",
  "key18": "4cSh9ztMFwCJ5YaVtt6zhwi2yxtr1qrdzN5BrHjfTQskUCC6cBGKhQU439KE8GkuKFgyUZCkjMoA9zFuaSgZUQmR",
  "key19": "3bcLaXmBQCwfh6E7iPcRUZw1XCF9qgHKqpVFeRWsYaX8tJrcgKnyYmA9Yd2dpMxBYbwAxasAFhMkk7dc4RAQUVyb",
  "key20": "55PQHKKU6EBkCFfKub4mwEMUqCSMeWjGqpTxvQ3fKxNn21djvdKVdDqtZKHGYesD3z28PjB1w58q2w56t12GocD4",
  "key21": "5w4nXyvzPXa97VMtEsP2BaqVcdNAnarVRbs4aAVvP17ae4RNyHpr32Hy8eQsSZnk1APA15gcm5c22iqHJnyqyUMx",
  "key22": "5zZCLPpiVGXWy5NyojDsGRmTkuZ1Xap24LUZvu32PCrrp11mQ9fd3G2WSzBT3bTdYiVbGbKSxoazhWomaCpXnaKd",
  "key23": "2BCC8RLkRgiU2SLKT4uyLiBoknySKegM99o8yUghkpbBA53EGQX1v3SCp7K5q9GW6HNpKBj6ntgBgZLCjBTMbdrZ",
  "key24": "3YdjcgjxGn5aLvia1NzPiyaxHzyKt8UER9bJtMp7unh8rP1Vau8F1HRfyR1CceCw7tRQEPBU2hyWr2Y8kGFMdWi7",
  "key25": "5WzYFjF71WE9gi5YkgvGHV5XNiFiMAA1tvqw13xNLddfTutyEhsTuYnpg3am7TgwyE1N6Ee9LFBQ15KTVLvXnsXP",
  "key26": "4xiqQHacosjSg1EkqAJcdXfL9YhYscwAziLtp3wgfCkG8FUvoXQfytJ3K2wHRvDEWJsBomThYgxbaqVv5gVUhMau",
  "key27": "3RKeF9PDKhZ7mHj7LSEK2fSMKRrdiZu4xfmXcWxTcWdCGbg3oTvFwHzEtF1GdbC7eXEPQJpBSFAtsfedDFguMoHp",
  "key28": "2pcPA96Lo5Rm26CumUezS2Q1bVCNTa5WQYqmNHRNJxQrLQBozn5SUmiHPJr5EAqVLDi6AotneR7T6BnARdxyRWAa",
  "key29": "4oMeD5UgtswH6BQEJDaPyeDjnXxCe32PuiLeB7SWPsv8uXkSL95BT3V8E2iWugoJ16Puidtmbf7jvyjcuF2c1xzz",
  "key30": "eaMgCjxSqJ7uqPSQGtyt2JLzGjq8ueqJrgCwdfpwtASQayWQPUebrAwrgoNwtxs1KhUAoMohUzFBDGDSgesxkQw",
  "key31": "2wF4QPGmHvfxncxAndNniqJ9ruKpyk2yos5zCnivkM1osHEGz62f5QwScSVAhb83LGCB3e1KSNsXvdjH1wovVF87",
  "key32": "FCggiiGz4G84bxVS3WyxqFiyLtPj4XwwarcpFGmA9xtDTrbNu1xznwdtZhXEVgh1ZsLT4CiXdqFNGiT3k3jPpJ1",
  "key33": "5TtkHDyBVferj3abiYXn5HFWBUUNHnxtqAzEtesbxhFyxhRwTDb3AWLi865H8PcBQ3HQFQEgrChHp8iME84A4FnD",
  "key34": "3kmydJ7djACT9CBKZZA8cneTFY4C64s3K8BgC2mvLCKQD25A5oj8Fc7YzWZHBzsT78KtaAb8rNLEBDbps28Gmpx8",
  "key35": "4kaZ565FxrdptSQ5Vsh9eC7cThoaWMnSJm9TZxezBhGmM3ppj7XwZkY6JroTgVCysjrcb9KC4jRYTyjonGkMeEjq",
  "key36": "3YbEC5bhWWSe4bGQbgomVPTkNSmFvnj25AbBWoLZvg9WJK4uYU6eNqZUnfkkcTevddc69yLBcG8JzYPFutSswEUg",
  "key37": "2QFb5N3T81SwEyTNeF1ZEGMdRp7KpjJGwzMn9Ug1qzkygMY66oh9L8UGPnvFGLM73vEUEFrVbY7SM55q2K9n8rAp",
  "key38": "5jYvVbR9NeY9FJQ9jmckDpTt2XaLmsHGpLuSszaJDfqqhYMx3G1kMjfJoM2AujTSdyMy9wsbcvDC4B4Gh1Pux85q",
  "key39": "3wT3fkHEVSCYjrNvV2S8TM3PiDuDY3BwsvYiUNygJhcCqKgv1SWxAtxHSgghSU3tn3tFnybVWNCf5QA8pPwCyKjF",
  "key40": "MFsQDGUzcJMWpJuJejXJDdrkTuVUPczv1hjA5D9b8T3xULYFQ6jKGBPKRuV5ToYUGLf57mu9C6niJ3YP8FkViJr",
  "key41": "y9cVh7dBPYCTZFhHc5Q4xzwHDD6KAYR6dHXiAx9GAQLNLhyB5THZX6uk72YezWrdHR4eGfmMszqHYXu4qpWyG5R",
  "key42": "314ZaYwLgSkHgA6V8SBfLx6aiEWDEeZhz4hzQCmVVZJAkF3ErQgpgVJLZWszgVNTEsPZZ7Zqm1XxLWDp8hhCTRSS",
  "key43": "2RXdhWyyhwRcHf75EYuMSA8tv4FYEeSBEUTom1YfzUNdAW74tskesoAw2mJJa7p5bNoari89FTpAtYhRudmAMC7k",
  "key44": "45SEwo2Zkm3YofghH2QahtTxJtm2RdEeyX7HbLfmtwZzrrdCb6PjStkk9K5Xj6uAnoRYvBzWy56pnPnnV3epFvpt",
  "key45": "4YMV7aWZijTyV7SWpeWTdzbbNyT4jkd2LbHpYhtK3jzBXZQmyjWi5p4WLsXDAkvs9sxXoEor72EJDqrPpnxLEZTK",
  "key46": "4AjaDtDJHk7u5GRyCFgXXFPVeab3gbQsSyfx11LLnVR5vn7NVR9FDxLrbWwVSFYvgMwjSbzCpead1FbrSiMgxho3",
  "key47": "3TZBTLowSvY7dANpko4BghtdJT1aATjXNd4B2KzCxcuvDvsTaiMiTeLquHkwvMwfhZsDnyJ5srmwt8rzX8yufV7E"
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
