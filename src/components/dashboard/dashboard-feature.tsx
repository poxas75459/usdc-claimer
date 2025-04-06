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
    "2XLpFVUiGaBwPgkzA1orzhWBY49Pc2N2gAiWfXVUEnFQbmfWVTFtbqQwGjFX7YU22cnbtTrM5oLjXyYj4kbRh1cP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RReuiHPBMFVVcMACnoVATpf94dP89DgkseXqE7cVVU4uijy3ieJrcHkcFahnJPGhy2LAaUFmpoH6EWgHYwx1c4s",
  "key1": "2dZAQS4oW2TSXAgyet8y8YUrDCueW4PHsThLwvakBqyGh9EWh1pGn4UvakBD69unT7hnvFvmtSSoU6JoRpyMXUBm",
  "key2": "8ywtfveyyCMysC2Te38ZYs9yrneQ7Tr2bi64Vk7ehhurzdJG1BqaCRG2vL63SNBPMxxEj4G8xbvqVCEqXE2qcHo",
  "key3": "vDhZSwf49MriGPmi81eB1NtLAQJwCP74JJGQ7xiJabg7L2W5XJAQfrhkYZWkPW2VQZYsHtsyaNCbE5uXJtZKMVP",
  "key4": "2a4HcJ5t6Rw1LTvcddipxMKg23iFWoKnLN1Ztfk18NyC893onVjRoTCnbNQ1vASsdRCG3ubsGENCbRYwK98Vsbp",
  "key5": "4N2FMktSCys1wsNJeuwzN7LqCq1rQsntYkFVYStv5RDLQFgwhbb1soiyFQGzQA1JPQctyJyBrPwwUByUeuCNFJ7g",
  "key6": "5519xnxQA5k17D6Ao67HiVj8ZefjPVeZpkf8asZng3jV6vBMaTzdAaL1P3BVsFat5ZguRBiZc9porwdu76HFrLLU",
  "key7": "2cVchJbYQD1XJT8ybTH1c3Xg5L9BVdoJoSmMhtFHasstsfRfEt7hmPoGrAaPYvt4t8PSyKirNsPKryFaWRu7s1Ne",
  "key8": "5xLLvimZyY2htseie5ajz496K8o8eodf388mKKgiqpbndXahbkHWVxSbKLKGRCRhNB9uGXdJqs3eBitZ1NyN2Hd1",
  "key9": "wT4WHnvaDQheywqMispUk6j16wXuCQsg4FLbr8F12BnR1kVukciTXxMQttmeTk1sGooeAEJx5YjVF42tSy2RJYv",
  "key10": "4Br3N16WUMod26Jk63AqVt2ifvyLHvwLrUhdENd2QHkB3M7Zz3udCnH8MGPvx7W6dpMu1We7gHiVoCbmVUivE2MM",
  "key11": "4rqCbaPsLefyEFrqPNnnR5Wn2DdVu9EqWDWnfkrb3P7yxkrzWrNvkcXKw7p5HHN6bXRgLenL4NQjYRgCnTTz2fxB",
  "key12": "4L43Q48vosD1JZxFGnaoHbZK7nJRxXVKTLEw4ggfZHYTmZ3rTmQm4tFq3Jmy5yngKDbavjhFJu86b5CYnGfruCm4",
  "key13": "2FMUYcPp53Qxct4biMUvGmKTE6iC57VsWi9nADR3P8Bk1Ssb7hwNieN3J1oxAo77GV6JURmvB5hmJUPQ2cZXFKGf",
  "key14": "4rnvZTAd11Fr1i6K7zVRJAtY6LupeGMiexchyHxKK5hiKzka9BmpG5Jp7rt9cNaZqfdw7PttNn5boNtBzhvP8Anm",
  "key15": "2EZjNtpjPUM1Xf8wp16f3X1j23VPg5dFrYJiSoN6kNX5H4XrDgEcqyQDi7LzMvChB9FJbvmhxND8c35EbjrGGPv8",
  "key16": "2Krc965KVvXCRPGnkP2wvsyzgBXgX99kDNH1ogUjKBP1krP2FSH6e8aidV7d4uoVP8LSsAVQUEou2akSvZdicmQu",
  "key17": "3yxDDAQDZrtqunTx6Vyx7YHrmhdtE7rgKDJCZnF9wGYfTpdggQGe8CCabgyF8GCc3JR9RYn9idQrzr4FZjGP7RpW",
  "key18": "5mANpSdg2jA1Psqxj6sm7uT7z1VakXAFFw5ERMTXtYktKA7DyVivapoNmS8n5WLULGzuMgGQCj9R6zobWAXQpHF3",
  "key19": "3YTtH7Abyzg7Ld9Me3RVzTu3QXNikhgL3FmNQmb9HLxNQqLJykWV2c4VRp9MR4N4Nsaq6Csuq8nNWKhiqP7xxt9R",
  "key20": "3J5j2Pq7YRS45UYxfoNZiaNPiKTDBWt8TkF2pyZxoK72RCeMai4Ty9unBbPtkSbWfuRRJY5jQFRihJzcNm8gMFJJ",
  "key21": "5Sdg7YmUcfdwRnHSy6id8xw4j5ePWGscQd2zewFW174DqRhsbCDtWKjvGWQ1Hsc18sntxs4MMfv7DWh1C5GVqt9Z",
  "key22": "65eiUigX9gdo93iL5PvsCKby1c5WoDaEWrrSrhbs9MQE46MRJVqDpccjyEGFgW5fRVr7EhUNPdEiBVUUV6JKgnbr",
  "key23": "3UXgdbFNAhQ1qkqKoDP4wmvsmo1vo5jcni6GtaPRQ3avUBsme2NnTCXWrLsF2G1S8S4SGC8MAcNBZqWCAg1K4f2R",
  "key24": "65AMcaTMh4HjR2RTQgCf1YTrqUeK5knmQ54j3Z6qPeiwprLQVQT1ocjp81zcPABRnu8CSY48A2VN2LhheEtvf5GA",
  "key25": "2w59jrKZhL7ff4qebFAb3pAvQiDvfWXJTYcBNzpFb7MLprxtEGh7Auh49R1nWtfvExM89UvUAaoDyDWvbkMH33yw",
  "key26": "3cM1W9QhycU9A7bFXipGKb94aTYQCQzFhCtfwKi6111zybTCTqd1jf3Lvu6KxbQ8GQKM26e2TMkpsMZ5p67Xuv7R",
  "key27": "5JH9fwuzwkkK2gG7WA5cspJFZFaP2BVUdFUzUkNUZb2HY8SUv2UAK6eHApaS8TWvsDgP8c7wKB1zhTYgMmNr2NxP",
  "key28": "ue7zzgJ6QpPWy9XdYnoMsCu8nP466hQGX9kjbLWiiKvQL4NTL1cA1MfvKJ8GSyzTLzcQZGpaUFdeaMMoPxDK2Tj",
  "key29": "5CectcxVtaooc3mUUArQPGfikT5dFBnkpbpEKcjUHhU3SCKtkJPSii734DojSmXiuuWd37K7GNBgkDH9VRZk7jnm",
  "key30": "5EfpHxEzCdU6z5cdnPTV5KC3i3TprZ1Cv2cHR9ZYarWZDjped51MxW2tPKto5n6pv6e34CPfK6PqzaXJoCQ7hdWA",
  "key31": "26EHR7xTm4Eho5dXjShuoUEoDQjG5mV2wSUSx3Kn1TjvCFqpgfur1su5ArtWDZJBuYPeuw9jQhotk3NqBZioSuFg",
  "key32": "549vvbtFS6vg2NKDq6yHdc7kPpPnX57a6EiEN6F5fRc9B2xko4aAp5SEH4rV3QPCGPhE1RMNKtFXtL4tdvmroFSf",
  "key33": "2zPm3nriaAvrhTtSrNP6THnQTdgo9drkfLLybD7MAEe8tqQDePe4c2w5GcuHVJzRJ5pKxXUFGgXcMsd39gSnhPp9",
  "key34": "5tHMM1bQKTRMxtdFFoMXEStXNQEdZgrxaoPnyZ5AZc2xLyxRLATKgCicwkYAPBBHeKh6Cqi4gZHgTGVfb2bVCLzn",
  "key35": "5fkRJ3czYpgJnAYT387PdcJS2h5uWqqeNdiukJXviDdmgQaZCoB5eH4oHpUWSM34ohqaBwxwsQrgdeg6Bn5ucZZK",
  "key36": "584eBQz7vto84XZqcojp4dF3VmvvfUNiNf7VdWtDjMMe7spdLNKqeDQHb8M5B2nswESm3p8F6p6QskuNLZ3GtddG",
  "key37": "2Dyx3p9ZvKpUdht4gK1VVFRbCzacgA7X8kn2UhmEBPwKABX5eoYnT669WqwDKaez1pN2AFoXuo3fxx83V8bQco13",
  "key38": "4ruSdJioUPSPcV3nDUVzveJcmLSkz6WLscQwq7NTpt5YcMVHhuYFA7qcDKzVteix2FrAcntEucPSW7jDTG4UixtW",
  "key39": "oA4eVzNFhiNAQLS5Y5qGs1L96Z6iBKCBJZ44VuzRn86tGs6qF7tzk2uusfi86pm1wUNGJWNSxkpXcTRnp39zvbY",
  "key40": "3q1hSwrrNjr5qrCe1nnTAHBid23wXvRSvBu84snTxHFcwtFXZeHhaRv6MKokvfR2NLvXCLQnZs53FDLj8jCWcuHq",
  "key41": "5AiRq1Mkz6Du3N74qaNpxCYjBK7VAkNAPWqDeu3wQCisPiiDhKFq45G4aLCXZWRz1Rd92TDxYZ2dE34XosWQgytc",
  "key42": "2N3JBQ7pKpe4rHThiPhfPJE1GGqu1qRbxz81MpWTJpZzs4b9pb1xLuXzrbcuc3iV3gkj9hDg1N13wkWFjT8RtXBG",
  "key43": "3ESPmfqVwQEnBLmyQ5qTGDswFfFabiQ8bT1DH3yX8Uy5Xv9eBjzHpzckVkrLHnv7X61LQAToNwzpMGfLM8EKKNoF",
  "key44": "3aertq4ceSzhHKi38TzbXUxtKaS2GD6rbQgr8S1YxhoJLBTbvBKKNFiZyckDwBaa4NXTFqkgNSYF1aNF5zdKpkBN",
  "key45": "3h6NMn86SmTvasQrSpagsdjCv1FxYSaqxi7CAh6sJncQp7AseRXas2BgkC6iMkK7LynpN2ddW6h7Q2VKQBLZc3s5"
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
