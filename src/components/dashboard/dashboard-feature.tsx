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
    "3T8HvqoCH4EXx5qXpJmfiVmRfYgFaoeGqaYPWSqn5qAiaxPe7rwjSBt4mdankxT3XA5EzFdX24hbQW2MLrTKPhWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bKa5miKteY5abtLvLXXMW1JkiD6etiKQRZnQgofTToahA6ehJT54JhGyzHW9NrGgXHRmWbLTADUW4aNg7XVStAg",
  "key1": "3n95ANzeovmWU7a2LfgrhnP6PiEF9a5awqWdSqvGs5CESE3UsTNGTJpJMvu6TJHVguVm8kpLe2nkvoB28xzTP4se",
  "key2": "3JrFrH1sZg6B7RZR7uWjm9F43bCsLTHZH8d5AB2n74UbHG1nP9DYrwsNpgy5eA3CkKern3oJjP8HQbYDgCsnaZ4F",
  "key3": "5GgPqmRWSedhiJtQugjKvqG7dpT1ifEuCHbMKy7pj3QiRiNRy19tXHBsSRqonRssGCgw7YWDHXjrENRzLd1oV66Y",
  "key4": "3gKvucQRAFHTHSdFiCcJDPNduV3B2sk9hkp1Aq31YWN6fVcfZ2LEE2qhWkqaQwr29VU8MKPgV4nWN9nsTT9VsA4V",
  "key5": "2hXtBK88C3XhgiffK8X1Ph5NT79DgX5bGY9AkfD1SJvuDZroB9VGe5JRmZ1mvvTXTjQMuRrAimXjPsRkBYDpBc7g",
  "key6": "3dpHSgGCoZmtar72mWXebzJgm5aJZo8c1a4oiRdyxhrTB79FA782vQqJhcWiu1AwiLEesYut5uaVeN7Qr2cm6U2h",
  "key7": "38rvTWd2nWjkK7oNkCHSy2KLMsbhzh6CRfRdR2Bqd7VTkBttFcbgErhPThxRdN6ZCP9WrdjiNPfTXgFdhiPygonR",
  "key8": "4j8jSmwKvbWk37F3BGqXe6vumGpwL5yhCnakVVf1jSzSN82SGZ8kK3GHUnT5sDMaodsKmhAkj3FpaR8dFwkpEswc",
  "key9": "3k7UnDTt1q2iiu6Ujw1x6mBopzmSJUh6xXB1kiFfGSaoh1ZUYS3D2Zv4c7hRhvnGV47WLGHpuVVvtWDg3ZsXc5b7",
  "key10": "LnJq8wbaaYxPtDukpvWhhWaDyfV2bSzKoaiYHv9ZdSUoqVMRXMH6Yui9ebZjSn1Essf7eerATjh91FrN5cG56DA",
  "key11": "2S6TwrijSsFWeZCwyaiZcmSMJSMwj613pCpwrJrMWZhJHLwMAngZgixKyzubuZ9MYniQ2hj1uGqfAg7jMGMDcHmF",
  "key12": "55pt29zrQBUTcRtAD95Qe14tvwu4SkjbirBhTEyHCVthHN1Z9NQdG6A6EczCe6EJKQ1qu3pXW88PgvwTnEXc1pxa",
  "key13": "4BBsLkisshRPjTZnLN9NAiZ4rHm5Wfz2feWSupdRsJqAm4NiEXSBCw98weJykMJihVDdfQFd7BtFCgmVAsY56Myz",
  "key14": "24LkpafPUFTGpRGrRcsvBMmWzF6jxYtoYCzTYnYK9kqFW8vYNpFXHtPZMKiuqaxEVXLedZFhcMWQcQVmHP5nZn4i",
  "key15": "5ZSXdzLLQfiYuxfALZrQ4nhXiZb2EcgqNxxTek82gMDEbPYL95gHGdFXwCUrdvHCCncmF8kLyGrBYL7pj1TvUx1F",
  "key16": "4ium2dryRopQNwfV98TuNtjtvC9B69YpXFzVYgSLEicrzriujeQqx39KsfvTuT6t4fCz1rK5LrdM1GK8kJc8cG2o",
  "key17": "4mskkycWPSzF4ZxUK6oWAcGZ2yEYjdXngs5ow1c6F8T8R2vamx4QfijEvCUkNXpBPsijVDqRnkoDFXWFy7CcFXwX",
  "key18": "2vag1EPtaMs2TwfeJ6kWv3TFfs2ahEQvpfWhuoU1tCVMkbUUe7CZ82BSxC8kN6DsJGqGiu1uvcZ9pZ9EUj2o8Fzm",
  "key19": "65rhVVxenfJA8JRdxhwNFsg6JfaYeD14tZrQRcHx4ExW858vg35CzEhQLPTkTuz2CPx3dC77HZecsdwNcZQ8pb8w",
  "key20": "5eNNuHndQpvZs8mbhAa73QeL2Wc3qwsygbNhRLuE2M9PsXe6kvX78Gnqh49eUubrpgpyNFij4Jyj33AnJqSF1pjK",
  "key21": "2RmDFiHyZjRPfEDiTaXkGQn9EJd1te3HjVXRvSbHwJuGup62o5v9R8eDYgzmgC4pZmMpLP68qfXuTU2B1LE5QosW",
  "key22": "5WVX1V7iHisqPRzDPJXDG8vEo8EKiva38nZ87MiiDTKDNdPxDCh4tdxYgkeBtT8XZGfAyQLkP4TGcGFMuHCdBNNj",
  "key23": "4e6dp7F7gieqvb2f1zBGK4VoZyKqxhe8GUomsmPJLfq4vdYuXZEw1JAyYyLF2aJSEmBLRKkwDhpNZ4zt23ddxNXr",
  "key24": "2qp5ko2NRUXpDcqad2MT7wbSv5QjJp7du1ZQxjveXA5SVPD62iqcrCMEWeGx8p5gC3hh1RE6rGEg6duvq7HngCve",
  "key25": "3QZEvinCLPYeftc2113UESb44x5SzYdETkhCFZcGiPoP5j87GbjBSsiQqNJSURjjqHn3v9EaohDozVBRGE5tRuHZ",
  "key26": "zb5XLWg8mYofB7Vog1Mqeizkxm84xX17qB2RYPHEgm9X4H6nXbH3YzSvD8yhsgCLfuNNgwwMq17iCWnUXBYBzea",
  "key27": "rJha2sNBGJkXSqzi1ASV9z7Aa5SEF6tehTHJ5BRhYCjCt8JKcCxf1HBnwn3GZPUt6i9pbxKiJRmLjW2JrJiqPZp",
  "key28": "5Fa5u9JgbnWZyKhoGETXfuxo1ieZoyZ2Dpjme4kJddE7L1PUJinpKnZz32g1y5bTRzcyeEJ1qEpCSVvRiZZNLN6E",
  "key29": "4JWKgXjbADQMjjLMLtoWjFSNg5jXduHatLdARz2odSVMeNkxz1t284B1Vapmj5CGv4qTP91emUrNRF1QtLijDdSA",
  "key30": "35XMsvp4BzW85GRC2giMMU1X5QKWQWjqcRkKsLW5PFaWLW9PkYKZZ2RytLBZpK5knwPA8mKE6fdBRn5JB42PjrA3",
  "key31": "Zq8b1LL6SH3Q6Kz6A3qUsKrsT86xB9WFzjfWjS7JTETaPcNNeMzhmjLaQcqKdxjYXsexYrVgCTUBPKKVqpGN8n8",
  "key32": "gDwUKvxuDEdkV8MDH4Tn8HzkGADPepvaRR8wZpMRKw4QDsP166Atqi2W9UpE1641jVAo1WPXtrxz6Ak5phCGVYG",
  "key33": "5YYgaTU1TbqYSwKTeGuoehC9xLpuFuujJZBz9fmndeG6q1vX5NAzpW48WbRku1qWSRvY6EGzvG5jNXTvEUyHuU3N",
  "key34": "5NFfmjZrEvqieVRsxBcxTYdLnqbJn9PWiXcKzpCAWgj849V3kWZDmC8nArdHzYm4RvTsHJZKM4hD3tiq3idNN2Lp",
  "key35": "2PC3NFx86CrksTc3q5paapd4v5qeyip46fpDKBrJAbdJv7rz7unYcpscFS25AbFEF3rnHgJEYvxdbGyXZhgdsY2A",
  "key36": "5thqyHfecJU8pMBmc1RH1tjHqz1JpVCEDb6CjquYQSsv5hEenKePdQg2pGYUqWP5a7pWfdJNu3ShUk2oKQX7jssG",
  "key37": "2yqbY5sYJykTYzKYeRJJ8yH5SagbhLMAg18iHURV7746yrqGAjqN18ryAQTHAft9GwY4BEKr2UXUox45My2AeUTq",
  "key38": "4hZPcZmmSRFkd1Q8XgPcQc5t36D3EuFNc8DLMpi77w9DvJHrPrvHqLzYag3jjTA8Ui7Qob4sECMC9nX91jNn1U8x",
  "key39": "64uridGKqn7r6taV6KJTXdSyYMnE1naZW54MV4o6vrmkBidMEhEfLcie4nrYZMeEpDYjnUxvF5g1PJi2Jyavo4pY",
  "key40": "4xGLTvmyWz8sQggk92x6zqU2jEAGxphBmeiArvoVDhiiRdns7cLwPbJjtVh7iYVQWxzdFZjgpeUy9AnrxFgSeqmE",
  "key41": "3zVtB2QJ9TCLMbFkZzWDztDhoa7pRGj9bVAE4r37xLYawQMTRckhZY4s2jFzy5yoUJiKJ2GEH9hgsSYj9qiymKyH",
  "key42": "5qT15F2jCkLW4ejBiBPewQerjSXxsggcS3X13w8voZ13TLepCfgjFNkTN3juwaKfN7VsWW1iMkyE8G4SMk8YQVkV",
  "key43": "3V79ujGoT42mVcTrAZuNyzJ7LffZZst71faes8nHCUeoyFsgLn2ybCPLVhsgqE9oJd3Wz7Tbt8TGvX4hNv59nhyz",
  "key44": "3Zt6Mw3MwXd5DmHakDuNgih7cdFXhg3q4LyJX6TeVjXxmEo2oDFU4R3gcjMLoWhoKRrJJsKaR3RRRU9ajPjVGoJQ",
  "key45": "3CDTWtqcPnkfNGpxXmDJ1sFaDUQeVj9hML9oj5f2AhF74GEfe9Cfdg9oTa14igW8MqfE7KbvJEYyZVc55cxEbUEr",
  "key46": "5BpBjkVPrEGVFaX32QHMkRG7UMsHqPCiQnHQEvhiwVL86DsoFqXyUK3Wfugq8yy8ENaEgQRHcvnZHJDAMpGms5f5"
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
