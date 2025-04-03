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
    "4aWZDKUsxKFYravqMKwhCAwFSU3MzqWD95A5CHXiDsJAs6J4fCNr1C9nqgCF5DDPPhNQngatQUADSgAPzm7J8LqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wQMHn6feCrEDrUdcGJk8zQdWo7QXZN8bjQMzNR8GC7n1bMqbbyVj6PkbvnTc4f5Gewz3DFroyPsdBYKTLo92CYd",
  "key1": "3ujhdHu5KGUfTgvvLmdb9tNBHqMHc9sUJosBfpfSijLsfhbqXABH9gyGShHmroPUBs9u1rFBVwu2xtiVKBDKM5oC",
  "key2": "45Bp3L7smQv7GQYefDGstLTHYkqTgtb5HFJKoniXHCpPdZ8SLWzkaNeDtWuHCnzVdEaDNzzZumUxpKL94yxmzgsd",
  "key3": "ts6QrJEpr6HUFP2yiwAg9nNe1tXR6xL1dvBzvv1M7jhBS7L3H23j3Bhoyn525KGK1bsYMfV7TyEqEYjvNKa6GyY",
  "key4": "4vmxSgtMkhqENyEureQGMii63tudsico9aKwUSLimgC7DjubUV4YGZBo7Q8tpix9bnQr1nLNBsmPY9R6RQDReWqp",
  "key5": "3vG5rKWw3vow4iSpDEY5PrPwnpTrkrBMzJLftiXswQVfyANhcntejh7TLnZsQKVxfrbesoNLfAJA49pnK1rVjeFC",
  "key6": "3Ep6z4dR5rZVa7AbK443QaYQUpqEbnpYSty3z72LE8s5yiY16ZbEKMcpf1Q7xWRJb7KvTNtKC3Q38qf6bRU6jjtr",
  "key7": "5QNzYwoqSSowkdcxKJg4qbEMLb9GD9W3FK2NUv7GaWWVFNEtKTYVxqwFLDwYUaAgq1FYma5bKn7YkhZGzVbXRq5E",
  "key8": "4iwUmqznHurPxHqqrJB9kW8M68op3ZDe1zj3HpmqiBvBAARTPh7mCvqBnLJgPnEUfU57Amhdf1Nb2zYfFdJjLVvt",
  "key9": "2N7Cyi8Pq4L4oQauvTWqWmFM8C3b5ZppzfzmL1Bzq1zhfFHtCUKDMYTe4XbHkRFUFZW3z3P5ZDycRC96TkFPM1Sh",
  "key10": "3LysMMDfcibnq4coeE5wyD47ZZe2vzgqhHLgVbnPsEPVvA5xn8QapWwVC5w2uzt5UDqZF1LaRGVWtNQWZiyUBA7J",
  "key11": "5gVhRsKnGSAEHrJJpJ5WG1ZWJnWK1eURYPo9iegimnqRQkVNxLUnnmS8eNmDow4fyuvFqeHiFcgwSSeso2MJg91g",
  "key12": "4rbkFPKmKozVvmw71rWbeCFx9ewZAgVHyAqkGduPua4KvNCyDc85tfdrJjjPDnvmwLXXYAkgk4kj5ZajSyzzu4LW",
  "key13": "488FHqGmeQb1LDd7uwU68v3yr5DBvhJhPkeVcksV6Lups4QbM3X13t8JNLFnMLHiZkvAXRy1NtteKHQMbUknwaZq",
  "key14": "5uwwXU5WQLCUkFqsCXStDUgeSZwUvnC7ftyHHvvXQzuTeDzRaZLh7hGJRvqPFg9A8i4q884sMKGFHrzenNp9Rt3a",
  "key15": "3eAyy1Ky8ZwJhdSomJqAaH4iw68M4QiwxJWSr455Q1XdUFn7EGqtejcMXbk3gmSyY2rxYNFF71DU7CsTmFsFxJZB",
  "key16": "3qRYgMT4JJb7mC7UCwZqZ9nRpmkj9gFPN1txtqTPP5voyo6TtXA713PTaUYvNpnKd9ki1u5cNgYiTeEAdWs66at7",
  "key17": "5Az2gQmVS2HL3cnobmtSYCLmTCngs498VZBg3isBe1s1unAzWfGzGkgr3imRyq7yo1jtQiV4mi2qrBnacr5D2qhn",
  "key18": "2yrFmhCTog9qvfABxxaHNsb9QpuWVZpnRqRT2LT1ckYo4hQgdAgx3tiDBa6FY4YFzJcVTeWtXtEL3mqhz44Fvhdt",
  "key19": "kVbuizhk6GGVhbU2NpXsVnGansKHYKfimF69ivMiDcUACZdh25UJSfn62RvrEWApFgVmrEa5hFpK3KdXbfyVwsL",
  "key20": "RJD9Wtaa68o5P2gSQQjQfbp5Beq2GJVPKBFBjLcWdiSKcJSubtB3MUh89fwygxbSMkmB7VhQWjRr73vbQa4Rshs",
  "key21": "4tPu12PQ7PeyBuobJXaguZnzr2meQWWrywinmqwnAPLVf2mzDAxrbqysR4TXDAzscSNp8wQes3tsvVqM9ekgisPG",
  "key22": "5MPy67ULAbjdbtLUSBNQjmbF7FRjNJQVEvBQDN9F7QvvzoZtuoyWf4vX9rKhUqYdGuiuVKBu5voWNqJHYrX2xxaz",
  "key23": "2L71ZRQMRhNwgmRy5d64zuNnxT7Vy8TiNZjjuJpELG4cf3u44Vnu2w1fbU9QUAa3h8VvnJGa1kV4YiTEdnnGFwpE",
  "key24": "4WMWaovHQaYaZypmPvQpdJJpqghRCsdK15k9yc4SXbr14Rjs7AsGFkzTnedzRgAn9mqNG127dtbUn9bK8Tby6XSn",
  "key25": "4cxQtZdXMHcGiU3b8e2eRyj7v92iQA6u41rS3ocygmaUEQznRPsS6XHc6SCrPmnRGkvMkiwGTVGzuuMSMF8bcRnz",
  "key26": "4guR1MeNnm5AkCZJYYs3oF1cqMfK9BLNopKQcVgW1f46USuTVrNLPggwt6hFpcwCGjpxHvffHejgan5mjixfi2Fa",
  "key27": "4rc3LNAYoF7Ee1fySwkFdK9X5bY25YWKj6tX3ujAc9uZpRfgCXeoGbmXnY5ug4eEmL21RVD6pHgNNnuGdrN4L7yg",
  "key28": "oGHiMWXXsP6a4X4urfd9VFCd6JwGpcofhi9BMHFct9mJKwqMDecxUAgZjaHdrC515te6W5JWowjL4HuBrgYMcFv",
  "key29": "4CS67Shr72inAJ33WfcXpT1CruJhXHHaZPsPV2VcUBcVr1znUiHE3zFupAjChjHmh8pxqUrA2q4iuN4PYZivmrfQ",
  "key30": "UzaHRBR9AsEu8w7yDQBbRuRnby4sJ4QvqNmHx6xzYuZMyLykSmjCANtkhyTXa8c1PvQWR9xzmAZgpcL57HpkuiP",
  "key31": "mC4kFocGmwJ2VAeckmjKYHMDfGN3x6ojPMaoS4gGa2vXdtwmcuLaV8BCCZnxPQtcFbQXBxi1VunwDrVTpZaYYVs",
  "key32": "nRQLSD2gARoMARSZZTBnArs45kNNWNyL7R1krukhpTgr6S6SqYr9dDGjXevd799YzFNzvq1ZyDa1YURSTBrwBHF",
  "key33": "4Uhtee5Q85PwTUj4h9cV9TBkg5gnnJ8V3ByeQRBCoQFyhPYd7jAipS3m8mB42xP6njT6BcSdd6EyZZwxr2GUY5UB",
  "key34": "5tcnDSbyz955mVxewAXUh3jAWBxqctSYKiesvR6mb7kdm1WhJxcsYZRWgjioBNaBW42QoTDbagAAtGuCTq4oZsZ",
  "key35": "5aLCUPksnWBckMYgfHJbdTzRRpjfas5fkipiCVRREqAHvB22xq9tSSYCLANNawQgnfSxJvsFcHgMdTPB3ZU3n7un",
  "key36": "vLATkFZzsmwkBGAiPMhC1hYTWf3iU7i9QZXJi7qscN2M4vHoCGg5ZfNPy8C82yTL3vqsqAbcR7XogPnrU1PbwZi",
  "key37": "2a1bq6ToWnKEnKrUGQnTsoJBNovr2qsmatzx4eXd3YngqmP8ETLBYnuBK4uWdGiXZsLTMUNjvdiCGqpFnL5X8Yzh",
  "key38": "2wDPYuzh2cMzxNtwsKt4MZWeYKRZytbCpoiQrjcpZecJTXyjhHdDEsCXdZdutyHoWRBkaFgKWL4yfFbgfo3a9wiv",
  "key39": "4Sh8wyCWAwBg8bDEr1NzSd2Um1AMriM51KPxfyjocQBTSLYjDd2LDDaBQMy9mBeouRycHvou1DzDgW6RDNa3PtuF",
  "key40": "41wt9uge4DRyxTCFBNCGfmZVXABYgfoqgUC2ZF1vADf7hHPWBGXT46D3keqMWKzWUqaBnsyvAKVDdY9yrsYtuj9U",
  "key41": "6zVabwaAFvLRuxZwes4PmjdiikCWJw9HxpdQtkjrx7sCtwEbdSXUNNHudGTE6Qqa2NoBPgMYBqBu2AhqwvzPxF7",
  "key42": "5jTVkEAHNokLQaVgnLefeaXprexLqP426kJfzrfp4Lnp2eDjkVt9FgjAR13dkiwv535fQaGbuEPtrRdnMH9xqSw5",
  "key43": "3Gx4HKgnYfJ6yG3nV55sFVbBw2DaP3jXrFUUu7N4RL1iM48DqfpjHtYwtkpwwAcAcZSuBcjkNUbvwLhKgNE5m8Ct"
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
