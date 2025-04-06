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
    "2TVSWnZivWrMVKLSsqhgoNLaL45cxXAx8EcHrkb37R8WjoaeVsrdGSSSMNEDupbmaiPNoDKVq2iXhd34EmBNX3wt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PL8kMJWZU11RvhSfhtZJNMMTr5S5tCazqbU7faGTnV1xAaHzwEFamLsqwzDgYp3bRhzBgnxhhizpB7xPcfEnnEg",
  "key1": "3F2LtTBUpa56bNHGBsawSquB1HniFfoPySBW7jnYFVvevqawa5stSUXGhFxTbYTetJkjrWeCMAkAfRMYTGZgAaPJ",
  "key2": "27qja6of9pXqsQu3fAUuDTw2H5CyXcVZwgodM4AgjKTnoNHVwUp6rrWgZppdi2usYDrYTon5TJzZ2jdM9cWQNcsC",
  "key3": "3e2EH1uwKLkuqmWyaVzBL5iEHR3wpCPXSeXGS2LtR6ibtSWi18koRjojF6HqWU77qniurgpJidphJUM4Tw86RhSS",
  "key4": "4FgsmsE8sWCzZzsYbM1sXWtsXdgFsc34BTBZZUEPeSKvDCxjxRtWvbAwuDw5YceJiBdbwANZZoUUXFy6B4xvQB9o",
  "key5": "rakpg9wAU3k1zSzFMC5MWGf8BWupUV9r6qRKkSUqYx27WyPy76VVktasn9bPs6yi6CtvBoaXNBCbDxUbm7zmhL1",
  "key6": "22LKEXoyeQfvroFLTQRgKVRUXFsWzQj71jLZceL3SKoARFntaPYCinkWTYxTuegVSJzGALn3VcE4eKeewdzVszg5",
  "key7": "YfpzMSpDPpme7Hy2wGVzEYTww2NDURLwpm6Qz8ZxLi18n12sZwtPcSfCpmkgGKFLAqavxcp2yhNMXG23kycAkri",
  "key8": "5mrc5btb8AHLuVDtGvnAowGufUW3Jh6gjV1VPdhQQcBZi6TxxSX5UcdWNpKyPZjtpB7YkX1AX9oqwUrsVD8KL9SD",
  "key9": "3vq4Cpy8suDE9mR4U1xifAvanjpoqEMBnS8rfCYKHPi1CL2YYq5dggCcPRHKTQWHePga9b1HGcBpLiH6c1kNKUjD",
  "key10": "2pSgVPviYNo31FxVRugPBLCW4ksGmD4h7PkBmdbtMYJbWaV9AnyYAjNuVAVoDVRH5WfascwfziPWvR7pbAVAK9Wk",
  "key11": "32YJ4UxJ6KqSN3grM5v8xMdDXsQ3qdrG32z4MwqHuNvf2NRTD57t4cri9dqkxLoEEELgsg3BiUVba6Nqw97tDvVR",
  "key12": "3UvyanD78a7LzQiMTBR1qSiHpZUmtYtiKWPayZsYs8gnHesnSJc4ddDntnUxmYKVW4QWV3rY4D5LhHaxhoHTWCM6",
  "key13": "86PpchJ9fnjJqRZ495L1NGqV7YzQMa8hxrJfyBHLG72h9cmgjUAtS4bXc277V7eoJCpf5zs3ga4p8NBc3mDUvfV",
  "key14": "4vazJuDJv4ZSsxd4U6EUJSBiZRRCZwhSdrWjF3rvndSGGjhyDxbTYDQZ3LJt11Lq9dcJV9eyS2UPVQGG5QgMBFNi",
  "key15": "3fu7U7gaw5bgVXwkFbhMRJtwHeQa6D6f2EhPi94gqJgc9q27vxkbmFQmBnzuxRsPtJbQCSVcCxasD2sirRLFwwfo",
  "key16": "9Skvbha2gC3hVTuryGfLCnX1L8G2zeXvBn37Vijuoi8Kk95UeW7nd9HN48cLNFxE2WD8n7W2CvYCP8KUrKjdjLQ",
  "key17": "31sD4t3cVwCn2tnCbiC6LU3xJGAm6sd4zJx9CHRGzPp5XZgU2o7zD8H6FcyLLjcT2mmqBQtAq5UuwLTVoqyZDQ4H",
  "key18": "4PPoebrv1zA6ZjapRRYtyw8SNNMXWx5174JJBkPRhMnbs56uhN73g6xgSSj5BRZJNjevPuvPJnsUYDhPqLTGJsWx",
  "key19": "x2Yoe1yxsQsyhytMfnUPmWvzDpygdaZS83qRcWbZb1kxFhkzjojYEJZGPzAJ4Po3s2btVQuaGvXfdSnL6UibPD1",
  "key20": "5CBGdbo8fKm7fFBCTJL9mcfuWkRQrV4v2d6LsatCeqH8uHq5gUgoajS7caPj1KJixcehMQ9FAjkHex7CTrhaCpaD",
  "key21": "5443N9vm4Y8jvErEYR9t3AAwRd3VhVKVst1UqTYTNxwsoDR4LTVKdrvui1dEDTVV9ytz9mh1XpFaJYa6DEPjF6e",
  "key22": "2tVcpoRhT5EfWmZAcdgXgbG2b2HYEE5T5Ck7nBeDonE369dJ4c9M96wK12xsCVhtHMvAwWfbFY5RKKff8are2Mcd",
  "key23": "8QGm41FUVTWAkRX96ub3EmuFbLUYpQaB8rDWHqkG3J1W2SkVJVFab7ngLDW6WVMdqYtseFXvKRSiT9srS2Fhtxg",
  "key24": "2mi2EGfhjXWv8hSufoetTLPhqdGPQEKvaFTqrKZRjeLEx6tbQ1yMYbsJLPb8QzHQqJsRQngd9RZBXt5PMf4AAUK8",
  "key25": "4Xx15MCNm2bxVmwxdghvTZb6GHB9CpmQt6ZLbD2pwEvaBy2L6R32Js66frNspLDK6ScMw7xz34Kt1yeHkzg4cEe",
  "key26": "5VDLR4L2fHrcdqWYxmc3Wo1NiTWaye8TKKqQYyDKz4egvyusHsus3hEPnGG8hgA7KgQLgYQhAn4VqF46MeoCA5oS",
  "key27": "5b9hpkmfKqdayy7qXTcDLVdQbiL6VBo9NU9trmw6KGRVnQ4Dp6paAMiKc9vpXYMzCFYqoMgxHhajSP4syR46NKr9",
  "key28": "4XijJ2Bv77bMx3SDy5peaK2KmKHoH9kcq9VCyM7VG45QSNB1q7Apf9ooHACRsULeorAUDCzYjpXBex9kmzed2VKe",
  "key29": "2De7eGtzebAs7f4vdcroATDrnVW8huE3WUXtRht2dtsXMr2tqQcshv3m6JzGVQPGR1gD7NtRAmzwhtGJKqAtGhsb",
  "key30": "4pxW7tkQZgTiP7ZjG1Aq7UsFKWYpLmZzSqmX9pmb3ZZvXjfpcejJiWfr3Vqjv7EoABzxNRF6hRJ74W9Vtm8tX2nE",
  "key31": "pTKnfXYXUS6wrEVWpks2RWjqoDydY3QhhJB9wfBgytv125xV9mvVuh3LuWNXjYzV2tmmo81oipHFWqGu34249Bj",
  "key32": "xFTMHoRM3PXYKmZfubFxpieNKurCT2huiXLUHYjgrz5jAg3rvmphuupvFMxKpZkYdKKFg3h3rQs7E3hkCoa3kxt",
  "key33": "4zNptMLoPwuSkRhocyG9En4THTnVkzhRXfZHXfMCfePSbM92VfHMrebeW5puug8i8ywiCj4821DJ2Seq7QFZ988j",
  "key34": "3aYDrfJ7pHpSAcJ1zebz1qbFeLP8n8hU5gnEyTd4mQLfbT7WPuVeEmRbAf5VVhHnFD95NsaEQ9eNJ9ZB67pGhJRM",
  "key35": "33iyGSEW1dmB78eFS7sYWspD4EBp9zjYY4Grq4xc6wJG6Rekm1M5eDf1Lx8BZfPcyh1bKp6yxfUXcnLqkS69Vbuc",
  "key36": "TDRQG98vyTtV2C1SBhpy5R31sE9MMhuk1ih7G2eVQqXZ5EsTpdoWWbN6bgwCsDv4HWCfrzmqwgKSYvBdHzoyu9N",
  "key37": "a64AJxn2Zx29tvocDqHKmYyd38V8MzYKAovVMKhWCi2b1ML21hoBV6UdtUPv7wDKyN3Q9XQfDa2YersRQxFnDwb",
  "key38": "3cVcnGXjHtAGZjViJuxrii4uDoTScTNs2UuVgccM4JdtQAqrxQx8yh9vekGFu8sorLb9TySQfamm2sGRZTCT9Kjs",
  "key39": "4JVuYbnrez9x6ADaPkTpSGHA1r5FhGepB4mYuH39pmG3e2N2SBU8m5exJH5hgiTyE7LnJ8zdZDSa8mAKCGT5Mzwt",
  "key40": "3A1jUq1idkWSHQWQ29FNhfHf8m1x2rf2fdhyjbCUHi6vG51cSK45EMrd3AybTY8CwHa65MgLrvh2cNaVAiZiznW",
  "key41": "5YAbAMoNu3KZ3ZCgsesC1jGsKEkj1sW2DFfsQBMWB47EBtARnJGuZBGny2G1MPYiFoqhUk8roFf7kqTDb4CvpaRa",
  "key42": "33rpGjqKenSdqc3x3QxpWYfCZQpoa6JUiGLWMb9LV757LqdFDdStaSxASwoHY44HyVx3vikFS4wUhugcgMFFBheC",
  "key43": "2GajpuEbfFW8v2GEmpVJQZf3rfyCSev65HXZhMH8Fj6vJdx6SEzfWLS2uUAmZeZVUWoYE5cREVv2zqmT663oaAMX",
  "key44": "ykmtAoD73nM5ZcHZi7GwU9PUSovWobM8EicC1SXxHVG1FVTz5P1L2tSXpSx8gMtX7Fw9LzDypn79YMwfmBN6xSr"
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
