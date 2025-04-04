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
    "2uF1f8PHm7ieAHBev8ywiN6BFV8HCD5piMAWbXKc5fVuyUhpcrVzVuia3vfw2a28tScs5hj9UDj2RQmppb95DqQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MqFsaEMjDqVvjB5pEpKxNrvysVHaXuCkf94evxLiFrznD7tcva9nnma7yxyuJnPgUCRHRcezoocup5LaPgYo8Df",
  "key1": "8FmRpNbggtssLgBdyXpkyvFCNRTxBf6n2zXsREjJVW161X1Qstp6EZSPEdrTRf2jsdTKmMfFHNDDmLfhwKo9RpA",
  "key2": "4TUvsuYyEVC1yWw2PwkCMKHbAnatCGmsEVFbypuPd6h1J1tSdVorhk3Pv5mqEdtkiNY4yhgZkvWf3KvuLZWETxnV",
  "key3": "4JfU6r7bV1386acnrvXrfcLSbdXS5qWWDPrx54BLrY5dFCKNwUZikXCffSaXkP5MJiZ8YKASFSRrYBBNQzw2Mc9W",
  "key4": "54ARckct42m66qBUwKrLveSB7vqCRDph5SrjtWrsV1X4DgFnDwptbfAiqiXs8jecUp6fGbne9AtUN4RT2JrsZMs3",
  "key5": "3Mp2jvPdoBHBswonUegnZGvCGQ2UVKgeDEXhkEdBVDzXCjMGBjVm2xH8SL55e8y3aMwv6X5Y72MpCZHzuD24QaKe",
  "key6": "3gdgzmSCgEuWwv7xUj4HhvfZnftEDBfLuJjFfbriSruatpK7PgKPHdQoF1GwZxS1vrmdBi3D2BXZgZoQVv1pQnqh",
  "key7": "5i7rByaQCoJsFc4Spmco49N6r3aY9H8roPisNAV4t5gEEWzR5w5z8ojHvE888mVAdZA2Vkt5pqmQSdtQJo9Fy5py",
  "key8": "3UGqQEJNb9LniVwQYYe971J6i5kvyUwRmLqwnZmeU3RyunGmqAPWcAYSMAjojjMXMLrWbzxB1WRLKFygcmagtijh",
  "key9": "2dPJXPU9uVafNLj4VvcUTmoub7KyjygVsTiRXzcpmCZKfSQD5xiGr9xuuQB3bpdFd1AE7DcAtgZf3YqwEL3U7b7i",
  "key10": "5mqxYBVWfpCShKc86BVuqf4qpGNNpyh2SwJttjhRiVGjbyaXb55taesuaT2TiAiNrGgMyHu8fUKBS5TSR35jF6jC",
  "key11": "2UycUX2RpjXvjRJXDy2znxEqgCQCsYnYfFrTshtN5umGUv2WLSrnLgMjw6J1Wmtwg5ZLwChR9Svj5sP8qrJcdKi7",
  "key12": "3i121VVaYnox8EKQHsjXoSToENSpmj33w7UPokB7a87dPKb5c7q27Yj7QvCy8hhD4Zq9fWeZKis1U4UnrPNzSCU3",
  "key13": "2xqZhaki3qESswQVJUm3VyyhLMTGuRHNCYHZmdkHn1qWn1Hs4NpiW9w6Apn7tuhMTLZavpX9wkA6H1RxV7YasodY",
  "key14": "32uSLaqnSk2vmAM4LBs2Q61rzbEJBh8ygh4EPXPe332kPyVPm1oYUfzpnYVL3q6JUmcujDhroRykFtrHx8hLANFG",
  "key15": "46XoaX8p1Xp7gU2dCJVVArytsSZLQU7q88TBcgKHFp1cneiraZUGZDUuQ1hoawyLqbuDr4VLuvy3jBcBJQSA9EEx",
  "key16": "2j1sLpHVZjjmC7gcVsD9eeCTtkPP6CJB5Z3GQSSDXXSGPrdbDDqRNjaayahYVzTARmuq8T3C8TqjBrqxkXhR6bDp",
  "key17": "5VgJ7bXFMDeKp185Kf2vHLEasWNdnCxhPCjCK32A3WjvMBAPvnbr1BroNj1mvbKBQ2wnk6MBBFQH6f7kzZWxsb5G",
  "key18": "5HjEHomJPtwBLAZYhnCx8yvSsc1ujJXMyAvmjY1pfFUbhRH5DP49o5aNxn2797oRBs71PNpnM32jxzKyWJempgbs",
  "key19": "2CDcwDuj3r93fd7okEx1ifpHezW8Q2Jy4XtCvKmhvYHWxWCFnDFDZLTnn9Vq1i6vyB6T1h4v1vvfxL6USXFvnfR4",
  "key20": "EWiGGVyUKbm25LhpzGzqunoTqKr4YDGsKYKn5JfYQSw2uaKeswhrquBF5B6yveYnL1d7tcoHZMJV1J7t8yWinKu",
  "key21": "4f9A2Dk4Zd6hFV2GkzTXkKBgf8yurcz7Y4Gcg6e79aorTuTew7fWkgxLpF6hAfyiMw6Lk9dhrALjcWsdoNUvaraZ",
  "key22": "3ov2V6U5BteQarhdmMAcNgJG2vTc9G1RqxhbRF9k6BZJSP2x4KdVvL38G9RdyAS45rmDs1qxDfwT1r1cxhLYb2iG",
  "key23": "4wv39fxK4fgCv8WEaB2E5tf7wWcAvSjuB1dWAe2BurRqZS3HPRfgjhs4uesWAfETypn8nmJJsh7b2oWhVo67z38N",
  "key24": "4QaNEfck6bDcoBPxsATrp8aAxZWsBW3FxmuZ4EK7AcgB9QRJW4WdpCCVggBSx6phFuEiJ3tpvCCmyGNHZx5Cp5So",
  "key25": "2qwAzaxg5tveea2J2o9Hy3ikz1YyrYW4XKTeigtyodrnYRFyyWPuTukokTfD8DjCBCzbhsK912Y4mLFoV6EHNDMH",
  "key26": "5paLJdjXwBCycfqCatApqANuGP1B5hnjbmecXFWdz9FQ1bC9a5EntU9tahaWdH9k1pGm7ShxxV587dqFtfSVEEQ",
  "key27": "4KPetALE1d4qrxGC4gKw6UdB7VgPT12beGLTi2dhNHBu9y8bLK7Szd4SUaHfHaaR4aE5A1MXs2HnfFTmayMiaNxE",
  "key28": "26JRj2iMNrnPKGwDNQaJv2YcQGPcNetTEdnjU3XiWKRDpFmMhfKJi8bVwzydZe9sA6otJacfrVRx4gT3qy7uRv1Y",
  "key29": "3Emtv2ziZKKRdhfAmDyKabXN5qobsMerVxNEH3eMqeqPBm1Re33jJ5Jyc9j2tzDsq2G7cM3gTCD5fsdZQ6q57DvV",
  "key30": "3zyinxtWmbLkST2RCH9KhWxzgkWetaxacSKJQHqusF72N9fex5yv78fABNv6sZRW2aCvifpcBTpfy7yJy4MngRE4",
  "key31": "4u9VrJA3Hw3vg4xUsAVHJdXVqrnthb3PwWuzBystzJrZumsrsT5oaGqkgLMSMe8UD9cQ1NDrrAzb5uSezrjyCRjn",
  "key32": "8CsE9SV8qH9tG9zffSJp39QXevhy9W9a9MLsYxSQnmzery7eyrWd1JKqzsBQaQiH7xy8VHjsViufKppKJ7EtYR1",
  "key33": "5JyayeSkDfhH38u7UQLsxkpVB4MYTMvYV5YutdUN7J8MqpeShhj2XN8RZWpCi4LKhM5ZDWntNPPWkXX2741bgwAP",
  "key34": "4LebYGctfB6oG8RZnSyiocRFwbqt6z359ekG7NwsHb6L7dN9P6UWwgvzuxCyqUDsDe6KBGd6AGE1D5sqqWb5vUQA",
  "key35": "4RPfxsUg9HYfWkset22GCuduLSTL9viwx3EhaAeEbotPB2BHhinPX4W4TEfEQ3ExfTMpqsNDLGrcfizLtudK33Yc",
  "key36": "3auaMrYJGtHNHucmETzsskswRZZQHSxfK3oYRffRFWYjvgVbvGWvUZ6SYEnmGoSVD9muCxSRut8moMzGVNBnKPpt",
  "key37": "Nea4fhmzL8H29nioqu2E9JbXSF4zNg57SyKExEGnZyPt2uDGg6jrVE3LV1unUzmB1uQ6phjRXcBCTfvpQFnkJ5e",
  "key38": "3AgvUFN5Y9XZyU8CvDeywDDJgGNugTjnpqAmGD5FVb2zf2BekYFdnyCijwJ3QEvnw1V5CsSeQdCNA2hGi5m3duAS",
  "key39": "61rVh6F9zysfQUDVRBfpztPaZuGTXJ2qeG9RcTgrPBVH7wtPju2JpBn77jPxAVnrBGrVEVbiEPez8GVi7zaHCpWu",
  "key40": "3as7PzwmrxwB39cggguvEQpCa696teEdQCtwhKCn5Zn9SkmUazGqyGC41PfZEKaLFRDP5F7dvdr4N8rGnwvb5c4w",
  "key41": "2PyBfAPV36enUxxebdyco1hVY2eUauyT6T3j7MNaK9vPT88YqqDqtL4HeBNCLuErdzZyR5HhUTj1Mu94k99XCW3D",
  "key42": "5oLXdFTgZ87kC8RySCqEGWh6mhPAgbj1RQ22ZX924cr3iBDA3bBkAeDkqLaq2iKcbT6huYLy54T1Upv7hBpxDWhw",
  "key43": "4m7whY2ykBZ9rLG4bDcdGj6BcxskZoJhbR7ZwD18t2ZHV13SbD8dukwKtpnbRWG3PU8zp2e2me7XeQ6wAH6dvBGr",
  "key44": "2x3eLjUCkQEToB4PfFn5n78tYKx57sHA1NvD2J7YGvpce9JiTZgFgUJ2ViuVZnrHFweiRtco7pjG2mwG2M2TbBfr",
  "key45": "35TVavs1eLu7MHKCeu3RHckv6Qiy1ArTnd7FpwJzZfMoj7LEqXLW8iwf9idMke6HrZLZEbqhGgofHE69eU34CjnW"
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
