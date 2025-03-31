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
    "4QSNYrWX3nWHkMFaivRtSAdqY8p7UcyJCaR8CkgfJmmpT4ci2LD5AHA1qwCo2xjrE9x2iyUqRbjM2eyT5eu9WBEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bNy5wtBqeScbsRaMRHepUPJ1WWgQj6MXiKy9rxqyQYqQCARytLDyXYpHi2XpqPBsCaMMZLXHLrGpyju62J9HZm6",
  "key1": "4DUcU1FZSocGrqhcbDWCmDfZCB1wDDeK6vKeoU6wiW5BbxWUBQRkbBEAUJ7AN1p7RVFz1BTvX1G12s6C5CNpn3Zf",
  "key2": "Wp1yESXpSLmuajhSGwPco5uRSN1pADrKgqZ89MGnNBBPQUm75xThQtj73dDfbKWuPgpBUicV7Y8RYfMLqzQiFDo",
  "key3": "5YPWGSdsmos48Q4QC5WMoFmxjLpEUXH4KU45Ci49kAiTfNSiWGUc7A65TCnTydGFehrwKGv7A6XiFG8674pk6bWT",
  "key4": "3G2v2qemKQmuz1wgu6yksSGW1jccHwdhb5m7kqqRs6cJ59dUkL1NgPvYcNizR5gukinzvzmvrbN4RcC4SpYapZue",
  "key5": "4z5bw2zZ3o8w7fF5GpoTxjtpnMdVzZPTghyrgPfgKuyBkY7XvPVUoQtFkqy7T7DJ9VHSgnDaR5V7B7mXFoyjuqCK",
  "key6": "4b4p9gCCGYSumfi4H3YrjCXUJiyFVodxR22ipvnw2iTViCuCtfKAQQSaAQKGQhrZhQiDveX4QcHhBrznducQZKoh",
  "key7": "cNr9EmTxvUs3UoRUH7bJXMbsWottfurMEAZc1dkUJ6mEVpyaRWwFHnXkMEba2Sb6kvpNi8FXxWBLo7bu4YVyE46",
  "key8": "2FGtzPk2ntC7SgkQzCshjT252MrT5iHVgkWoYyiF7ijD6YzKx2xEWKF1NfQdjqvhrQ9h9ab2sPrkToZw6wBSf3WW",
  "key9": "3fdArjy4F8R9APSbknM64AcAJy8gff64QG2Rsp8dqHRiREGGXeJGRGRzGEBzW5jyjbCqNRP1QJ3jgr8TFDkHkcrY",
  "key10": "2jqDR1BvCsrKDgdCY6HVFw2caVaewqy9ha2tYqywAv7FZpa6kDmeB6iXpG2SkrTFT8JFXFY6ZkADCQGipGKxRA48",
  "key11": "3GZSF6ygBnSfLzJT8EQ9FEVcZd6FifHq4UTaRzju9jDf4KA6CXFai67JXZADdoqFczrCufwxCjzoQfztsY4HeymV",
  "key12": "4QW3Z4vFZ9LGwFXK4CRkS4CyEUx3x1pkMMG6gLCLcsFYGB4eMmuKRgrAqAUtJcx944oD3mGVgVydLSnb2WJm43WR",
  "key13": "pypJaGpDYAdqRqDcF6Pu74Nf4oZtQEX1grvTEqKFD4WuGoA1CoBoEmms1S21JwhM7nfEDunsjNKrc5Unkd8NDgn",
  "key14": "4rLN8yiHF2foXsVcDFkgqKzLD1xxQdKQ29XjAdzfVPMe48Brp1uToUC8x3gMEcnjPZqcDiHRdWQC4GR7Pfa7WBMW",
  "key15": "39tuNxYpLdysPQwaxQ6R6KnpqXxDEhdUvLcv3hXUzC8AovmVNDvhvz2QutN9RWUKJDYV6ifCxMaYSa7CB2fheVGA",
  "key16": "35XiHMZVSskgtEfe6AtdJRqiUDGCwieseNuGvfaN9vokPtHNEXNe35PEgHh9NmWm6QvvFfV5d7zwnEiGnGpWAS6t",
  "key17": "2EkbfztjEoGfe23rQJKNTDFAc1eTinf5x4ez1YQCHrhBYWc77XCPzvGrmUggQFSTrdfd5To1CR2wBYsvYFyn29hS",
  "key18": "22epqQpHpCDzkuCDCmJ6AP2gf4JmkAvkKYAUGChABvZqBrgLqb8P3WUi3h3dPf5LkC7FyNxKPN21znDP59UyfDev",
  "key19": "2PVZWFSinT5YhztgGUwzCLciLBbYiSmi1bp29Zv9FudNa4Va5S7tgJxq1QwKATncHbSrJxd5HwZ85StrEzBtbsLU",
  "key20": "5iBGFJCKTNtQ9rBwuX9VaRUu8TjUct9mQzQN36V5a8SHPE5uU8iQQuGMm3tTL5mhTepqm2df34ui4eMbF2UtELc9",
  "key21": "2x6jgX84iUHk1T2icZHV1YexFWCmWqVp1WX5r33SoWzg5119Zw3FByvDagRjJrKLEhf7fVP95MtE7KbKXWD4yZNH",
  "key22": "4F7RYJT9ayB9yYLfTuNFiCfTgX5887n8WxXLcAANK2VsnNexY8rWZsGgM2hU4eDL7s6NXYJ7UchtfUG8EVTLpmJd",
  "key23": "qQVSuriD5dVG71AD6gwL6so6hmN7Lxe4LGPBa7qGLpjcu9WrLAaMcWjzBvggM1ozv7vwQnETqrj2xwnxf9bu9RY",
  "key24": "3xdi5ZgZNxz8r7m1WgPEjyozE41iFPXJfF5Jfh1xWzEUzRArMzMCHa6kB49zTNZF7RnoXAdj9Gx8dfG3tMm17Fz6",
  "key25": "3xwprDBfbPvfHkGxehEb6ZCgJDAjKmzBnTajT5QHET9z5ZSvUBjrcUKEkrHBMDBZwLgnVDBAjkiwr6bjc4vYm45L",
  "key26": "2jz6U5NswTN6s8gz9xAfN8GnjknPy7yGPnX5576RuZCYUR9pkYH21phoWtiFZHJfZYm3ZbCLYUMsUTuc9gsKMPxi",
  "key27": "3cWFfZHx2cJW17KDP34TMNcWhHCvnm4ja9jGCs1Tnu8CgZ9KueiMvrc6CubtyuxLXKTrPjMUWQrpNYKvinbM12BL",
  "key28": "d6vm9SkbRziDPGAKY3vQTHeDpZXTdd43y2rupz7ibFNjMjXVkk46vfcgHdsUsdqJSCGin2uKgmmTyKg5937ABWs",
  "key29": "3q95eeYkPk8iLooz2vic14AKnQGVotiNTgzswBFZ4bfvVTPrfLYwgmD4doLxCxDpRwUDeU74Ew4b3NyeDovzNuSo",
  "key30": "2TTEWrer7CJG7VzPdtAysBuWERun846Kz5fu7Cv5qD2GtNE6h96X7631tvVuT3zKbqTRgQ2bFJjCPe3nxabcJe68",
  "key31": "4poTU7hb3j1djJnVjuUgfvVLWWjiHJYZgo6sdD77jTYoCotSdtEiAxardRoRujZCPcabt443QNnU1X8Jaxni1vVR",
  "key32": "28e7jxcgRwrm2mbKAhpj8RwoJQGXry2a2YKwGhtVaYv9VY4sLZKGf9cqaAyUJPaQ27u81Pn2NHKPcUQBL3bkMf2v",
  "key33": "9cHb4hxQTQSwhrHqaca4d9MtykAGhmGNwYFRH4uTosRKFsGYH1qECLKktYTwVzsdr5rGfFUHNWksgbueEFe1mRq",
  "key34": "5peZYq2rtKi91oSbBuQaRHBHiGrybTL4RLNJo6q2KMPSkVnNz64zdQfwvh3YoY3XxRezbsSny8pj5w2NLfwNVqDf",
  "key35": "5TEguassGBgBjh7CZa9NvHj9VXJMsKiRPDq3mr2EVfTgAEXuhRsNjL17QJGHBEGx1gmyM7QmJJZdfE52FQpAiex4",
  "key36": "3BM27oiT3TQrMgYMm2wXne8e2RPoXCrWeTxyFQuvJYUQGJtBBJmrypUyivH9Bh77BrJQGuRT3W2MN5P5ERJYtHMd",
  "key37": "5cBR1fDcbifq5H4CUCUwYKFX4NNHFx9ouodwNLezpYA2gKJdoTzCXDL8RivLieXUGLT98g1WTN9VXo97PXxEUgGU",
  "key38": "pygCEZUewFXteLBQtVajqRcA3HprqkviRKP6pK2yHzCsNxHGAqPZspt86LpYAjrXLmBK98n5KR1k7jE91VzqZAy",
  "key39": "4kN2SYMJeyePTMFZGgVYmjM26XBzb5ZgugqMZh3XVHdNqDHBZRCvzbmq8iWCVqWb1AM5mqkNM6KMfM4oAAA8wCbN",
  "key40": "5zSBpZc2DNBZB9PKRmV3JZ3tYFJaefAUr5eyhJj6eUnRqGN1KWGmvgArTGxbViDXMirZmfALBhskKCaRZknzaAGP",
  "key41": "5vLYWdfUFeFCZn836mxsAUeNW3UHWbSH3DpNVeYE5PYuXf6WCdz3bnQSc3Pc8i2RRK2gyquWaHScjpLvXf5LLDWs",
  "key42": "4f2zEHnqVDCmo64vQq77XHTPB3LUEnYAB1TidaWySrqEvWu9Gsnu6nGgbePWgysCWnUudgiWPMkqm8sEE3s37fPW",
  "key43": "4ySvp9WvzT4vNDDSFauX1cDYvwEsgX5RAuGmpsf7oKmegpfLCXR6VR2QNAzkWW3YGrRdaeii6aGKr4PW2eGB5kht"
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
