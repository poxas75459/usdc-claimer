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
    "4CPToPVVRoU1iMSSqu7v4PjpxrW1cLy9STtt1wJ5whu8tjLDK5bTPyHsgH8KdrYxrjbJpUM7yzWC8ZajXJUQLEBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q8NediiK5ZcoppdeBMpBvpPD689pVjQEcxFedMffDd5hxMzZ5iiN5o6Tp9B2gdC3umu4qLGsSppJeBzs84ihjZ",
  "key1": "4SBmAahFt517JGoKnbJR66CTHbJ6gqLVHUVVfZMiAt88A1JZZsWJeGMmx28f83hh3w8anUePXcnhpVyvgvkN5Ve4",
  "key2": "4avnLmJW1WCVB7UmRUuNGgeccAKFxJtqincFBgWdc9oJkjhYN1y9CkdrsPLao3txraFgNh5PMpprh44WYJD6HsXM",
  "key3": "4Qajmi9LwbhAYs9YR42m5Z41jz4nvo8ECs9Q9ypkVjgxmT1zvP1WQEabRDtV9DiDE83PvhE9L6U3FUtNrpDim76c",
  "key4": "5BtsHvvM86QPPTCJChmVQTC2kBeHzJ7dJRaRu5kFUodAAqtYTvkNzny39y93ZdpkBgZS3ur5NnZDfXn1SWnCtbWY",
  "key5": "2fw8rw3X2s5FfKJ6Cecidg8RYoeUkq7ZLfbwjNe36NwKiaBoMtrHZAoE4qYVWsb1m3eC4JHJgrW84MXzasmBm9hi",
  "key6": "4eYBzpfpLUtfavva768UTcBV5i9KrefEmCR3pYVMzkaX7s9Rh54GTPKGQQzzyipvd9FEW7uthZbGp63TtCqRCAQA",
  "key7": "5RH79Q6WS9EGXaA5JJqbUqex2hhgdxCny9AeAGKG5VCkoXCcUpSTAvf8mYqmzXjX8mGxGTZUk7ER3NrsNT3rkBTd",
  "key8": "wcHTGZt5XVTxxgHiNT9SSV24Gg12sXuCZ4hfamkCwFRPBtk6WNRnQz6kYRhR3ms5VzT4C9UZxJcLDxtXow8AfQe",
  "key9": "2ayPDg8PKSXvqeBVy8mWUfnU4eV9ZL1JQCiBFv1dXpKujQiHcjuz9heGcDJVfs1inacgDvBTqDszKrnLEhyFpKC3",
  "key10": "8FS36P7BG6psLmKQjvgMJDiDBzcpKmM8xB1dN6gzAkVBQ4sYfDYxnddPBQnFmp38qjhYN7CbmK8524guowTwy5n",
  "key11": "4jKvJmQQ9ifFVGfHURCwYPFbZChtWQquPUUu7kFJbuqcXGRisy5kpqPTPJUuRaqCDkKoUxhnC4VDxgRZDiupjggP",
  "key12": "3dSm657kk62e55h2yfdWaQTUqFmqY7PPpW3NedGD65vgbR4caACpbs7ZbVdTQRgruPCbrnwikxa9wzR2EHGrKSgw",
  "key13": "45v4LuwQwWwNJ4sTZh2S4i1y43pQtidK9WJkbhmqQxDnnBGkrBXpnVni7AeV6L1HKEfrxGjThTpTKvwJquyVWS5k",
  "key14": "DEoJ9Vr551U9vniWwB8sbCjoeqpKYQ9YgRS8vnWvnckuPCr9XFP3uHsiDYFfJ4Ev8esp5wV5DTkWAVADp3HDS9c",
  "key15": "4GRHQ7dLhnJbiLuFju2hF1mVf1tgtvdEjw4a9UprSbTQdacKrpE1anN88spXcbaW9W2vbUriBNrpsniHuTGnWreM",
  "key16": "4yJ8Pj6LRzSPZFrTjn5MSrSmf74u9S9ykHnkw6LyxwB3sPyNyz9UWuwDgK6VHRGPqcnnAx6sNNVtjxuyxnvwjx8d",
  "key17": "4enj67GHvpCQzmRc2H5FyMHmxsKMqpHVPdCBiWYqpms3EHZtSaFJ3FDEh2MRwww1wwAdsvwjaWrASNjQF3jLueAB",
  "key18": "5sY2VY8P7HFxGBGUvYUgxzehGycS27ts4Cw5onskwzgeFg9niRz61aLVwzhef5sEsBg9yWn9G1Sv1QUPB6agUBwM",
  "key19": "5mB5e4BKspVDW2qCxtwuvJJg2BZzCqH56CG1LwgiXTFt3JJPF2s5cKq2iW9wx8oXw3jdu8jasDBPtBqeJhSAY4R1",
  "key20": "4XgF1rmhTv1oDbZEBTvZxHDHtdBnb37RSCmM4LwqVUx6TVyuLCjeqZePs2k1n9XSkq61gGJvHXozBADMMzuMkebE",
  "key21": "1kYHELw2M1x6AA9FynyUhSvgVxwkwZVK4bgwXwTrKKs5v4nKjZfNwwxcJYwjyyGxkq3uckuCvQSqYHhebxWXBup",
  "key22": "3YZikmERn17X8jhMmbmSPW44LWMZHZAMnGxASGkfpTJNMNAQf2WVDQUhBWwo8CvSe8sNDhij6AAFaU6aQMhE6BJ3",
  "key23": "4c4zgE6swsUrcTLXaNvTFjDJ7yTqMoyBsUyjKooyB4ZTRN9UchfaBf5aXpHNtBme89jVzWf8kK6ah6sGCTdNkjSG",
  "key24": "BEAgRg9MV7fGNtUWgAiyUUE393DaFbQ59MJEErQYtaTxSStYnufUj56fu8cEnZjdqMQ96PJVR3M8iP5KLEPKst9",
  "key25": "4JVHxeXbTRooqZZVfQzidYwEiGEVsTfDf3E271MD7W7ULFebeaQBmmZqfHwq5fvY245WYZATWtntvbxJfFKJ4gLf",
  "key26": "4U1UAm4oQvT1TYR8RTdutF6zhLhtjwZA2PjZtKP3uP1frR6XTatAUNhKSQfJKGstaffvsBoGs6z5ze1E1EWsro5H",
  "key27": "43ngibeNcbeQVGm5Qb34SJVbyEDxw3AszUNyjzLyf6rEnDHNhpAABLzFLBitDNRd7EGP7ddWaGESSTS3onWmpfZf",
  "key28": "Met9XSzyHMw3YuBJofVP6tU492FL5wtp1XFnYWQknxcNFCrjUK59kfyeq4aXMogCtHjatm2nWqXLps58knDnukj",
  "key29": "3U2oY4baabC9HWqRZEiVGzwn1kQP45P7fZL5MXZFtHPKvEmykDomFpoQoHP5ytt4RqCEs5Bc6mG6PJdRRUPfZfjC",
  "key30": "2Hw2j7CvHxXZ7SuMNJBf12x2B6fR7G9gYCDJ3beaPz6q7UkUniKJjWLxoMctJkYbhZAPNGJPqZNqpA5LJsv2qzCH",
  "key31": "2p8KvErwaWxKdjXHnd2c4RDW71nSXFqzNeRp5AWcMgkTBeUkTdvfz8LJkDAv1cKwyFNaWGK9nq16YrCeZtbn2KQX",
  "key32": "5NRuwJr5EDHvK3YFiSBm3VBVSLLik7eV5fgQS2YjzC1uT44JLoGrcerXTCYoWvRBNd8xSB9xCXqCdT5UHHEytaZ7",
  "key33": "5tpTCVoZPRSdawHzs9ycBLvL5fCu3XJ5xUycnxBKqPAHdqmtxgQhQNUqjFQTfpHSoABpkuq1uPsTHbRmkiNZ1XEm",
  "key34": "oUnszKZ9t86sNxFgpTsCz5LSSN9u66AC5XaGpm98H1yx1GoWA3WKTf69G9HXZdsQzseepAgtiqFAU2NiC5i1ciC",
  "key35": "5Lwpf8pBkL2MMSRvpavexfmC3aqNu1WcnFqSb3aXPXsnsrjrX5ovDLYTFKBBzwidDKeya2iyDLPoMVNpFobq7He6",
  "key36": "54KFkNGtGoyXbwRnqUYikr8mdrF1B7cQedhGxVr4sY948sE5mJtNH5YhaocTB8e3qohE7JhcznBPBoS9Ddb7VAhg",
  "key37": "3NZZRTLDiGGC6YQTHRxqZvhdKA4V1ekMppfbM3wdTxk7ezgTjiRRPfAWrubmZy3kNU2yz3P2Ref9nZ4XsATbM4ER",
  "key38": "3uSYaT1JZ91mgxfeSZBPVjjF22cBfdRqExyjXYUg6qArCjQuG6xXUTQvo79k6eJBKuZpCBufY8unRj2fVtz4JJbd",
  "key39": "4rDk2BZ3tBLHnXkhzzTgRwkLnsVhAfgftkfh7iMPqA35RYDAezkM5ewwgV2hcUF3g9dTJNuTjvgtU7moiDUaesF2",
  "key40": "2ZrBtdRDZ3s1LLHJr5yvs9N5gm5Qj8MvdFF8SgAL5uMjY8by7w6EojANNx6B58kbYRnLHCHqUkaDhSzWXdc5qgzY",
  "key41": "MuPVRPyBR2ygdNvnVK4A8HBXwG8qwCceiPSURJhjH98WDixWQ2ap1ZKtPCvWQknZcBz5p2BLgaMoA19E3BZoei2",
  "key42": "3TJZttsbd6575W6EjLXpdN7wPxoCeuNRbN2jKRJ32FvsMesrkYzgybKQZumZsN6ESZiqZ7qcwG8EWuRgZxP69hDv",
  "key43": "6169y3M6dLw8Wi43oNzM5spxRrzoh3yPqZDT8hE5tHKacmXA147RX1eoQin9UkQCaN6p6FCYYwHBHNiefEhZYRJZ",
  "key44": "5CFUwwNNr1SgNNJM2idLg4vn7m1CvCNmCyHRxpAxM53pqRMt4TQ4DHBmKmRpvHuCCjNDYToqjKfEDwniEKHTSTm6",
  "key45": "2LyK6xHqAGzciTA36jqVqVqPp6AsKBYPMThpaGcGweYjhxgXw7AmGGU7oSn3sGsiF3duGVmGzharV3AaRCLPwNkp",
  "key46": "2iSkkHpT1aF3Uri8n7kaXutxScttn5qLuWbFRVK8swHp5AZg5wBJqjK85tp9NN6FkiZ2L2wdobPFhQD31xHEJmMH",
  "key47": "KTLqbg8DtXrEvs6xfFBw1y17wMoc87zKVJhnwJgA8pZJZyfq8LsgoCo5WhLKRPUv4TiJb5zAkRRXorLmajX699K",
  "key48": "5UmtGCpu7ne9Htn9c5Kuu9XveBeDdjmCjxetaBwV5Gjo8wiLCSRPJaFDBdvETVF7EJ4TubHyvkAZWfppeZ4Qmmi",
  "key49": "5ExTR9e33DxEW3Vkd2DXcLSaqQcySGxDfa2sziNaQefadTHnUcDRLbdD8sB5o2v137pYwyRyjQKUoVKSsKkCQQou"
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
