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
    "5nU3Rdamq2VS39BHQqtugHvbkeRN2nK77uNvkLU5Dh7d2or6y7o8s8Rw8wC3aTJBajd2AYQQo4T23wEwUGPTksVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DTb2ee9w6jSgeeRPAsUvLBJWG3vva9NXkjW47bqEQjT2qa9VWFqau4BKvV3LEYLjU65pvYLnmQGHjwfFbfxzKSa",
  "key1": "5cRe5cjcax4XdS4LpEX3YfECMpFZd6JoQWENvJpRN8jXXxNuvhZSRMxc3RyoruF4qk85Ss1PLiGLhfoL4qTCtGnL",
  "key2": "4dGdVmPdXfb5FTASWaRQpQvLFuokFxydwqgXr8evzjwCX1tcFYqX9cNVnJyWASJ9Vp8qgVm3vArWAtEuSCU5nBd9",
  "key3": "rms5iBCG6ZDek5SdbAuKR3obPAvRtTzA2Ch1AayJBxzKubAwbvTfxt9DM6hE3dmmtAytoRfCrWeqmVNorc4Vq4X",
  "key4": "2DiaeWRDauzQtsNxnKpWWwNv5ZzTAD753AM3WToAzGyWapuyQdPRxCZaBPD6wM48nigkurFSavfrHt3tLS4sUFcK",
  "key5": "voNpUPUQ6S9qbzVSqXwZn3e9ctx5r7tLRaLts8KFNBoBSXt5pfpW3kPtLjvD1rgvazuvK6TcaoRZRQ8ni7JccJj",
  "key6": "3qFGuWiB3Dep2ZCQQSVMd7FvH7WU89nus1Q9QuSHTmM9FFFE5K3mNay3Rbrp6c37eqjBycfGSvdRPMChQVijmDih",
  "key7": "5asaDQdUPbjjcRZYeniMdVhV1WEDUk3CRbHjo9boyPJDD2e37SZ8Q5SwBuGSjB56CkQXNUYABF58JBjmGoVqW6Uh",
  "key8": "5BPkewrTCFZ47rsziX1PhH6JzXGJkt9hR3gfFanhgd3VbBsVexTAphseGBN1A6MCZsmvcfaqYx2n6uxbtKFyKtZ6",
  "key9": "61vQWpb23LTCyXUwBY7wjPCTpY935yhvMtEgvtNvGEk6mP2tmNJj8M9gMnVn1Ym8BD11M4QGxBT4FVA6w1jMJkp2",
  "key10": "o8Wu1D8TeJ2CZN4s86BZAC7xjBrLapHSUFYYCC1ZUqXhg2qHyBPqereXZUr897fhDVZxmy5gPGBfPo6Bi8o95ZR",
  "key11": "UpPjLQ122pAHbXsQQGyWrygCvarsFa3YRaLzYGajMUseskfD4KeTbrabxRamoJvD8rn3gcTMN3phYShqUgzECc1",
  "key12": "35PparWq9wuMAQsUqdip51AugiBN7SrUtXfvzKX4tXcPpRLd9zGjbDUnRL8CuuxriDeMH2pA5CuNofETTvB5XPoP",
  "key13": "3EQU8ihji3J82NZtE2oVbVWmsadU531PdkCCdkr5YtycinBDoPj2tspGKAgoEz3XyW1URw31yTFD8V6BsK9YqCH3",
  "key14": "35zNy61eMQ1S8VC5K5z9doygfkqgsdJR784NwWcrWAJD8YLgdcQEVjMJjYyhHuckP797xgFAhJKAhwJruFpkYXjK",
  "key15": "31KhPxYx1aKu1YkHv5snvk9JuE7E8mp3jBHja3bn6KhjFqoZDw3HR5cStqXRomHi5MMpB4UJn4fth9ddw3h4HK1T",
  "key16": "2smviFo5reR3FzJCR4WgmvAbDMkRs2pM2TRLCqCHfQarYVk3e79AtpScLhjBQDhr1NRYZr64MZ3B7hHJEewmsWYY",
  "key17": "5bTQ7YWt7bmo94Rn7xY6MtSV35H7SoNqJFhvmbWKyg2aQ5VGeVVLMYGqcnQBkyVRe8cgv8jhGV8nAB4kR7VARpb5",
  "key18": "wjAQ5jPR9z6bXshR6B7Zvg1pxwv6EaWsdZ3c3zdnuF5BNTvgkGKsEsVU66d9a6kMe4MeuNdPSHmR2P8ojHiiXu2",
  "key19": "4jdAS5SfGkNtVHNxBgbCSV1PfnsfosKq8QTTPwCi7tNWJMtT3iumWqr3sdNwWT1TWvjMJiWysGNfz24C5kxbKjr3",
  "key20": "4spKLnuvw9S4SkM4M8ywedMfiYX5QWKpB3Deyc12FAKPs6LXBub3WmAqLbeaFNb7a1gpekPie5b72w9SaDKBKfgo",
  "key21": "5waUcaAPFvxjbo1bAmV5762ovPvJLYLedTZbae6okmvnM2K9Ro5Ww5ohPagQGsjvoUKFvKRETCRw8TuhikEQyGy3",
  "key22": "osyUMKt7dae9bsQGV5p7LnMr6EkJKMhdQAYostwWxRHbnUxgwr24huNeSnqiQKiPRwbEVAN1KyqVvWg6qYSetBD",
  "key23": "34UnMaeuwqKkLv9Pdk6Rk1bokk72DfxzPK2A3iu7uxAKaFU4NpsTsXdqBHKQskN2CP5MBcZemeALUtSp9LZjWGur",
  "key24": "4LYuXBgsVKwzyFS1HjLvD4EXd3uB26NteafRpMnbQnKHemkqhm1Tit1iZUnVUoF4EAF2kXkQL3mTCeH6CzvhPkv1",
  "key25": "64mbJLGPAMebEXB5HFJcP55TXhe45RYarVGsaVdf3k2ep38pMxMwKnpXPp4n2vvDPzKy3PUN2E1RS1x8GDtymL1v",
  "key26": "3RvvBoUdjuCStEL79ioJFcSpgbpqEdbcWPNiiTH8bSvbbtRnN9REKrAHYTJv1CcoZW1Woi5aKCczFSMa3s8DzsPV",
  "key27": "2JfKgfSyWVSwdbyvhamKNKCwgYjMy6aXzpnkED94p4DQHLyWQpd95HH4vw3oy3iUWjvVEUvz4iq7WLerD6HEQWPg",
  "key28": "35veeDgZeYZZwU52vafvt8QmhDHsu3jrha6YKzgN231tUfLeaf1xtHFz6xrc68Gq5W58mhSsRTg39YpQwjThL925",
  "key29": "5CNvb7TSE2rVF3UtCePKB7zpTjy6Lj93R4yabwPHC4QLmSnhxdkcAmUofAyvi2qjjZ3sw57aZCvcSTvVBVw5RLGf",
  "key30": "3FFRzqmUTJDforC1CxUPq3CcaxeeJrgv7ZrnkgKMjSVG26HCbphQypNbB4UzN7Wv4SaV8wQwoBwMw9jAeK49K9rL",
  "key31": "4Eyxu5zmTDw3qH2RQ9QrKBRtuEYWBUJyGsA8qxM5K38tfZ2Zx8nDGSWAcdks73bQmL6PeqAL1bEN7CQRJgvH3KKV",
  "key32": "4qf4zhiLndn7k6hXnjAaG4ULFmjoKzLRMJcmi7R3UmMzsL1MKApWsHAwu5LnXYCW2ZypzgCDiU62NiN5rBRnFSe4",
  "key33": "2uVVBc2WQnZtcVXa23F8CyEmyQm2stpL4boEyYuLxykC9Lfnu2RnH2FSeBkGVv8knBGX3pZHGAYtCU2iak7oTueK",
  "key34": "5UQbuA8qKto8wAWXmqVtWWVxjqg6hdnagGwCpUKqwj6bCtVWU3QoPmdpLgQ2yPAVZmNMr1BcVKxiQU2DHD6ijNK2",
  "key35": "2PoCnYrRDLBPoEkcaGk9Gb8Vs4M9B3kaNDwMae3VW7erbQfqTS8hHRmJxmsGxwFmwXxt7yhoq9vUGvRJb2TEMpbP",
  "key36": "5iCenCr7zwYSrMqvizhn6zM3nS3QsJ2h55h6Vc3thVcAmLbXZXM7Sv3ZseYBRfi1obupBMqXk6hzNgP8DcsWVnPD",
  "key37": "4k24y6U39gZsQif5Hb2MGzbK1Z6GoMCoYvfZS57oouBqKxFm552QyVT3evVttMzLMXJNbrULt652H8fZmCEMDpPY",
  "key38": "2pRyRxGe2TXQ3t1V8iCdMhRS4uCFTteRe3FS1cf4gK9EJTMRrRhX6oSYVQ6zwCoc4Dat8HsLqZM2DcunK4V7qvGK",
  "key39": "4QgeX62P6EXRceKxDshkCBUyNzJPKxu5HvgUSYM1g7CVK7U6GpL18yDa7Pb3KMyqwGQoaiuecdBjGu9FQ8a6iKTh"
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
