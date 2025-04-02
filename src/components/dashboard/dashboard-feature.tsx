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
    "3uLfTzLcj2UWoBV6kz3QTSTXpJAaHMzo8rgnYAXQavro9Pk49UvtZ1ajKrRKx5eberiVw5TEeATKmgetg7GDk8DX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aLG89tdzmUjNHpvMurocR5zjf5T7xw77YA4jR5uG7CGp2vGgjHp7TGrfNiDK7fmtX97jBsWpZ4dTsCQqStmbQr8",
  "key1": "5kn7kn5BLz8z2VJxTpVgug3jombXdH6CEHXsH8bPHhWccuZ6prCjypemgJULccyoR2Z39pmd5p7V7BN7MCzg4pwn",
  "key2": "nK5o5LhGT6jh43KCACvrM6zs488u6zgKtQzV1AKtbrNhp7d9meFtK1Z4PoSu1CVQ3sty3tew29f5m3HWWga3dbj",
  "key3": "4vwEnrvynYZkreT7ZTUe1WPC2bbCT87DE2ShPw2tu9XdTEQsZnduZzVE1UL4rWosm2N6X4v3FSw9E4qV5qKVA5T4",
  "key4": "2YsoTtsi2VmYApBvebJsgF7MQip1GSbJff8eh9S1K5NwM964qNGygm7p1hDu7tSLmGERW4KJNQrbfZ5yBXrs98mf",
  "key5": "2bS1BVQpNcbj2MMmud4bRLvJxDHAhpc4urcTgXNapDizPJB6bSFG9QnniPkrBGopSs2wCv7zdFb4nKFyT5PP6Tvf",
  "key6": "AeAhUiiW2Zth3sRBt1eEyWLWzy5jPmd9RSnyfb9inWjvqDyvN6YaGtst5auihuov93U97T7Nz8pY5Gjw8KtyxyL",
  "key7": "5v4XCTzRaeqCveDQC7C1axHYC8w8VcEghY6VPjVa2Zruo4DfD57WUJqoVcrFWjNk4Xivv8gPMdjznu1T6PHfM7No",
  "key8": "54Y7BhmPDhCbqxAFc6nvVYEcFiyeVp7pisBW6EEH5cAmNNoWoZvUJzi5Q1JACF8iqJx8mP5jwMZ5K3Fn7QHSqKhR",
  "key9": "2eSZtazffVNFJ8kvoFYeMKgaoyWfaq3Y3RGwNyBg5uVsE5pmGq2heMfoD125K193ByFeWDZGxt8VnZyPZRXg78CT",
  "key10": "5Wrj3v1RrCnPrFmaFHQnaVi2qL9GjjFcC8zC3TdiRRjUUddH7EJJYuKtCqMFWyHtMfUWykbnq9TfiNg9rcaZVdk6",
  "key11": "5xwDY8pfNM1WfBJxAzwvfPA1ussn4VeKPwtnibvNtEuLYVBUKc3q5fn47NrxG2k66kQnuQgsgeoBFi6CfYcmX1hg",
  "key12": "z8m86WzDPEMJk36wQqHALeA79skwEABWAbjXGuXN8PLpwyLguK4JzMCy9kM6ytYeZ9ZxjKnztjA3T6q2RsgprxD",
  "key13": "pkN9P9cgXdByE13JaCs9ZRsh8SmwzLhsZ4jPo2s4Fj6FMWoh2tKXa4ZGhariUe9qc94pwLWCPkvsjyPDfCPMScp",
  "key14": "YGieMHKh9CiU15SswpA2CpmaxBnzBMsA1Q373BKBtSvk7ymVRyte65JyWHQCW6NrJofbUfeZWQMTf9x6zPcY2Ct",
  "key15": "4nSaPCMcve2cGDdYyubXCVQQyfCtdFNRvgk487SM5CdStgcQnh2zKvKs2BusAxYP74CwSynaoDWjBkdwuhZJ9dvw",
  "key16": "2s9cpmQzwhuyQMv9AaTBSmvuDz6fFY1t8xwkQSqwvYg2unoMrDpS2NMbWPsQ76MwtkW9HXxjUeKa32tbbSHp3oU",
  "key17": "2cHY2ib5NV8nABGoxQtqkQNuM2fteNNBbArSsFtQgJBKtzJmxvqGXswin1wEEvbL4XvQVX8Jbn75mtEw88zZei3X",
  "key18": "5UramDuAxNRhHZmEL4jjApT1Jjc1CjiCJpTzfGQ7Yw6MKHmPfZqBxnsU5nj8HPBvXjbDK4fQtSiH5swpHhe6pHmy",
  "key19": "WF4ZPuFjoYmDSU8ZaMzocFwdFEe9twTH7gJrUwtTk8P4DwWAmJBPUnqSqQKmfSCNebc8Xa2jNc1DT8qaTWrV1zM",
  "key20": "DfdCyaRBM9kJ8mggvKN4E61Q68eGMn2QhCdZo4YEKfq3p23SXZFcAdjZZcNfbSsYEbNePrU298JA8Lv78rwYrc7",
  "key21": "2FZfubxSg8kM1r74kGrpT3Bwuf3Dr5Q7KdyoMaagnEN3S3siL4zGTPGcQUxWEiKZRv6YYFcnu1yzD4XcHt7KXvD1",
  "key22": "3TzbBrSnGMWtFciwG9LaPixTT6SBMNum85NavKZcFkNHVnimTUbiH4CR3uBVHFrnNX4Q8bmKxJA345PomRLa7H63",
  "key23": "2DMA85pDb5uugUQA9GUZEeNb1PSwr6YaMJqNzNuz3yU78FVAGGKPY3rccDq9pJcdxEfXEGWZySxAMxyapm2uEKhk",
  "key24": "5WDDNcNfvuwFNxrrkuWymm5QBPCF87d41ZkJzyPom1qRWqDKLwUjupkWDaLixD3WGNusTQSib847PoDkSq18Vu7C",
  "key25": "3gVa2r9ne3KeeomLcy22rDu9p9eV45uzhb9cSUShrqDS4SXJ2g1WeRWoA7FPv2t4gNM8mwypDwFfh8FW7XSHdvvC",
  "key26": "4R7fLnbsuUgXwqQGZfzJs69Kkr42LmQrukLr2w1NQk7tMbVNQJ8mehdW4L79HgVHd4xbJBaJTTihMaGj7HTPPnBV",
  "key27": "2AUXqG1gUyhL4vBK9h2tYckH66CkCodQvu3koidSLdPFitAu81T9iYSdCaDuLLttUQQhqRd68vFNiKkuvoqVsBmF",
  "key28": "2fm6UryVW9akbBvFPqTyfjQAJHXUFpxW7Xk3HET4c8Z68YdLQ1zYpnpVKi7PXyUstKMANY6qvhyRZtD1bvpbibKi",
  "key29": "5ff7vvTiYupfaVhSvstRY8XaMTFbRCXeRS2ynUFmaMycQtMk43mXanmAVYNDWjqcKkK3HYB1htbJNki1RwhV8Byd",
  "key30": "4vEUiEpxQq11VrBqkvj4zj3SU46bpzodHQHgwndesLJb1nqVpdsxYAHhSygLjtF6ocDt827dBKct6DoCgvQuSyYR",
  "key31": "qoZwMxcwFXect5GrbvTLArK6EPEHdKLDrvM6UHZWg9r3rYenAYyfU4hXmTEQkxWzPfBHyEZj42Awf24yUSy8nsX",
  "key32": "4VzL1DCQCGwVxWNQFMkuHLzbZfaTRvAbYes4nc9EB5d7KJTNwisMhUhfpPvDZWfwX48RECtK3r4hrkWkWYu1KjYw",
  "key33": "4WpDCRLv6M1Goj5UdUkPLTa79m31L7wyhayZhVTq95qCXYYL5wSJt5pENTgrdWtxkALC7AucQ7Qub4BzzgHanwnT",
  "key34": "5DiFu5ThxhGkJp1tn1hNHswy6qoaXQDfUP2tD1owmgrFteUnpgNeAn6MGTpUYvP2bwe9QMhNEqvGNKhtf71tVfj6",
  "key35": "6WqZ3yCg4kcDY5wXPb2wvBFC1Qyg8nW38c3argNTtWbfFbsG74Mb3arq2mxNUFkNtv6dVJ8V4ZoJToKVt2ZLJhz",
  "key36": "3r5ppkEcj1XEGXvuoHBEmdCka48WyQYubQoy2rx33j3WnThrLpfraMsrhsH1YE9bDVjqiBXhzASX6BN4B9NixhxM",
  "key37": "5dgtoSkze7cnpzQzqLbF7RRT2mu7duAk24Yx5kUvipsjmsb2n36EJDvPQnMxamz59uZPXQV4hJt2fUGPRPqyxjNV",
  "key38": "2JgXQ5wJS31jMXuy7Y6TosBu33f7XQxSG6NeiGjXx2neMZvFCb8qZjeumiKuGEwX3RvEU33zU1VHWEjGemiriKRQ",
  "key39": "u8HH9rv5pVWjGiaekJCEKn3nbgi2RFhieFzvecmsEBrRpGnGXvWcdWbNKXh4R6APRKDAy93tariZxMAHjwN4vV2",
  "key40": "5zeDnCoNyE95381v5qJD72afvPMvBAHW8FzuDmKdt66wxtvzvXShXm7mAcvaMWzJvg9nRbFE4ShwvuHkTfKHMDQo",
  "key41": "2qWLfG1QmbTyXkRBmbeBYEYFLXQzJKtGvxMNYWg4vy6nz1vn7o3bFVcXXkMY6TU2bP8mxont4aK4nf5vMckNJqJL",
  "key42": "2C6CyoYDy3A5C7kc2hfr9Mbjk7erDi8G2VrgMhXCYj7ExWTZ3B2LqAxYgr6AtF2L7XTEF68v8E3aYx2eVwo9xC68",
  "key43": "2zZzguZ77B7CnjiReCVjBFcVCbBd9RfwCwsApws47jWRwCw6Z9iRhhkgGZ1V75oxRkRVuHqWPtkXNAVvcghnNmxj"
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
