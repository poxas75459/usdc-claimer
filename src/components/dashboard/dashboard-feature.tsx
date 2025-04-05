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
    "3DakDfEBTSBrL8iZLGGCwHMSmSQkoQDuDrHwtmFWSiKwi5BfgSEcoViv65YA1oTbYpLc1CoX21c9YJvvUUSAQDk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TyGmEqRMSwx2oZUiSG4NTMmToRJ5msUZYsiqiefkxNDFya1btdgQSMPb9fczSvxXC2RegPm33rHXP79N4UJDmLL",
  "key1": "3hh7qPXNM9ssfHfYMgBcXNVAo4CsNbTDGZX4QsEy4mj74g6mQdb4ndpAom67LQTj5xuEVmSEtMSTbNddncoyQxEu",
  "key2": "QK5vfhQGuxt4HnAXYNshx1sDRxbBMNidCR4TdCzT4aoFV5umXh79LWeqXqwM69MjoNUfBowX3pnmCaPtzeFg8fn",
  "key3": "2W6Pmsii4uYc4MwY8Wh5oLBddxQ1c75Fv8V2Szn4Zoh2X2QSn2RaM4WaxVuhkDLwRRSxWCwh2FsNvBhTgKVn1Av8",
  "key4": "eQ3pppt1XNos2sWkm1jiSKVfGnjSomGXLVxmTxdtTcSZxh6aLiQrGtqRHQQdrcGqY7ukn28X2u7nzsLzjkczmp5",
  "key5": "3wZbceawYA1DNTeqgVQ5RWjnRkTVZTP9Rs3DDraeFhcdxxL4BMouRbWmAsRFwt1pFL4zrG5VjC11mdBwyAWiWKvs",
  "key6": "63UREeaWpRRWneq7HbBZkqzvcxqd37RabUEbnU8s7P9FfjPBGyYmMGe7aLjiEKwM7ASvS5m7qZWNfpM7yMehbVfQ",
  "key7": "3dz54JNNYtvH127FNinGxh4d3ariD6WKExiht8LvRMWBgM4YpQfiZudCh9jBod4rL2WkTWCBg2R8BaCBSxDLbt3n",
  "key8": "4VaCwV4FDr1czxJtZ8fAa31VLFYadm1GH84uHenyN5nuBSxTy5uPoC9XARtcJHwZWqb9Zo6TktJapBTgZhYerDL4",
  "key9": "BWXheUGKneYCUDujFPWx8Et5EUZW6AwkpSGkFDnL22GCdzucQdRJBkuS1ZLytVrRR37SM4nr14rR7Vo7c3TeVNe",
  "key10": "2exmEczkU96rrgv5vj7ixYK4FvCkhqeXbxNkZbEW7BnnCA8MxFAXb5AuSTCagN4tDnNJkqCDdQ9ym8SigFXrMpKw",
  "key11": "4om6ZAtxvLAMcZPdDuE863XWQuEtxrxonzkNBgojaRtaHUSJWe4EXj757c9amiC1iAoFJ1PsSrZGRnaKjkTiVjuf",
  "key12": "4F5na9xXbA6QtTAXbJeguWub3TiFhPZ76HtkJ75n1NPLdiKHrQXFQUNEGHFtw8yPcc18SwgyYjYs7wcscjGhLkx2",
  "key13": "4qnQeHCaGGBaVjSzp2ZqaV24D2Uo9PRQZDQykA81bpgmXaQmyKdmkWuLWHWzwyyhR3LgJK9aHAwTyaBC3AScKLEf",
  "key14": "38bW9aRGCYyZTAxXdUvEvxaRN9D7ZrWmRi9cuKtNaJ1pt9kUBdA355jDZhGwRmeAJ2NTLYV4TFFhVSxEPXcqWFvn",
  "key15": "3DY3Z6P8BFyYBBe8VKjCNsAKAiZsXvUiRQpQtJbuZwspAA619t6pJoPc4yewayocX43uS7Dej82BRPU4moEbCZqr",
  "key16": "5RnadVyoZvCierENVPVyQFTtF7Qas9bbfenMUcyuUfhKWAwf1eVNw4CubRKMp3A9jzcttZZbhCewWmQGzWESwhN9",
  "key17": "B6NSXkXZ577qHwcY9kVcZTArzjGuAV2YMdBsaivZdaPEFt98tXupWAzbUpiTtduyZUNrjcpEtwwJfYezTmd26HZ",
  "key18": "5DAGYbW6QuHqxtvX7fPkKVptkrc7Grh5Qh8mqHaq8F4fK6TH7zRtKbntVtaVxCiBZvHAR9jyf9crz9fQyCZV83ep",
  "key19": "5xw4JBPqWTYhXeWJRUH33dYKkMUmjWZVsG12xN5wKgTq5KpaFoZQTpg4iRPYdqkzgPLArbQSAxC54B56qipU2URS",
  "key20": "3GRCQyqp7WepZLyLhaYdkSqquugAkAS781nfvuzQ29asShWiy9fz9AgZEtpci4pS54PkzpUz4ATfBr6zSX6KAwQk",
  "key21": "2aVpHJok68TcKRVZn9GrriJXn9f7LiuHcVH8USmFQ6SrdSkzHEVoEDSP5VJjqCH9e8wZR3fW2Mdo1MumtVAtA4iR",
  "key22": "4TVuHQBbRS1MReDzgj3Mtf38yqSDm3r19G6XfgHCrVi2JEFyhfecv9HdwrHdo8pxKDN5XqFjeMLnKdoF9CzBkHVr",
  "key23": "4oQHK8sTu5rJEQBBKxztjQbGriecsjTif62JnMLnBGAnvF5EeE2xRoPA844HEBQEyoqR9teagpF7LLhvmQB2NL1J",
  "key24": "3Ax7PLCBLtKE4oRXPuLAxXePjHDzMsumjZ8ns9VWfp4mEoSKXn14n2AVbtobyo1hQhJ8EzwVY1zMYG3Xz6XP9qN6",
  "key25": "9NdiPSFzpGSVxqLrGQmEXZpgVJnYEM3kpnVLbqr2wD1iQoeDgzqHNDyzGhVSyzxZssvcTskQqCJYy3DtW4VtUD4",
  "key26": "GGscYb13YfbNos1H4R5DQKrudoLtzEGFHAbWsLY54qHUNE6z9CY8QWntij7V6HK8HrhMNEP3kWQ2GEwJxSUfvxG",
  "key27": "4ZXt1FKCcQKX8d2mnou3VMUmTe18SWk9FnKbge6b4rnyikNym6wxbDBFHLXUQpBo3Xk9PavAmSHBbnn3sTGGAwx1",
  "key28": "52iUxMRPRDMdnBPoih7c2uNbsTbqae8t9xz8t7shU3V9AuprGCAnZPtoFnc1etXsNzC5GMLsSbGaesicVbs8AYkj",
  "key29": "56gETrgowxxGq4eiJVmAx2VVDtxd2t8wm7qsvndtb7SNNT1cYLdMb4v5oenLogkPgK8ME1zXcnpYDsRusete4PFU",
  "key30": "5Gq7UgNYZwWLhq8cuiDzb9kEuzDBXCWKyWC3yLwYWncbxgVRKD3u2248inC1ZAuZ2qEaBsxaBjkiv45hME88SqFN",
  "key31": "3gACN4SwYmYu52gLh6MzJNBnZtkVWGX6K9yV9L2qYPZ3NgsAy9YzSrLFm1zsP414yBGVfuWpvSih9Motg43yBPMB",
  "key32": "3PH6eX4e4SAGn9c774NsXWWtJp8e1LK6j6FKkbbuxHbv28WS5BjgJBAPfARdpsM8wft4sP8kpSWvWDQSjYhhiqkk",
  "key33": "2bVZKdNZWDd8SaHodaaNBhQCw3JfiouG97ecrL5UqvSpkHi78xWN6D12jyYw9ygyeCXxiD3AZfxxHV5U2AV1znoi",
  "key34": "3zKV4XREXqJq4oJMiJDHo1vRYZEVtUrwQtNnRwyAgsR98734QFX1CMFWMFDSHBPRUcS1WzYt1WH9eJ4JT4nCnsNH",
  "key35": "2tJkJdHdAFkRqxhsUC9KCdQw2BTzL4e5HZaVoQV77LsGsTomYhk9bQMwbUtokdUuHs2UkNEskXcqR29XAsk1NXA5",
  "key36": "4j6dBfXbv4oPQDm5PokuvcNgYCJJmNeZHY6rgH1tC6Q1r9YkZG3EKNueoZbWfpAyuLoSq93Yo2qHv25uUKzaPbyi",
  "key37": "4LyRsZTFsZiVpB6abMsGDVdpE3EN978YtTpsY87J4UWM335x1HtnNEQVLw8fuMDM87Pbo3UZE354rUnw2i9bMzWM",
  "key38": "25jnAvcM1qw6vmGTFcaHoRrCsGaa6JeAgvBgCK9uUCDZE8CmMqh6PJSEF9bAZDeFPYfsHnV7qzrydZTknaVjSqay",
  "key39": "4kUf3zLWREHruCM6yqwigy5dMbe5BKBeJTjFxXwbDDPFVP6KcWyi9DpEmB39ZYLm3AExZuSDXprdXWLmpNRUVrnW",
  "key40": "3kJ3TmtqBGECNrVCFpC3Y6UJXotZHBmCWj63xf7TS54eWXtV1mbi2faAixZ86Ap6PXLX4UEszjP76LbTXD5xkwFD",
  "key41": "223XRveWw9TsnDe2KZF8FUrZCmfsL66y8Ai5uvhJDhfCeCpCMHvuyitqwkyGaELUXCV5KTeq33AAdx2B4rRataX2",
  "key42": "31Bz8fAGi4onqc3bNmLUJJ1DdP87HT3RmyrtSpAf2w6AefgtB1pSjNueXHjKvjMDGYYdofgkoFfeVRATi7BCWiUN",
  "key43": "23C7MeC6vTo5uZw2ddRiuyWd7eijJJ34orP81A3L3zNaBimScPp4M7TnSCGfzc1iYK9iFXmS8necM1qkCER1HMSG",
  "key44": "4Qst9D6rd1xf2Uky7SGfsRZKsQDTjFaJccKehgQJRyGoY35G7xWRdmusE4hFfCBv5kvHCWKq5zVeZp9yvM9hDeJU",
  "key45": "49JY3NzMNA8ScapnAdrUmzeXgQE6VPAJ6CtbaPefNQUx4Fm4tPMgtSpAq7vb7aiJDAueaQE4EYp1UPFTK3tnctTB",
  "key46": "3n25u8zsNvzfgUTStvRaFPeymNtaTrTPJifV4KjPB7JAx49tbzg61nVwkEGT7LSH9rC5C2CiDKSDb3APxNFsH4nu",
  "key47": "2gVpWbKH3fFwzPw1Z1XbSuvh1TMyg5rG4cCnVrwaBA68Dd6dTsLh71dBHmFfofaFX9cj7sz8qKiiTizUBQtUaK9F",
  "key48": "aDrpNTwpJGiUzepGhoUHKJs1MhB5tnvTT23SJLbzPPoswYA7Nnmu92iY2UWw6QydubvGAxo4beLuYedBcA4rCj9"
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
