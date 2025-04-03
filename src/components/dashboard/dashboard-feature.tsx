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
    "3EijdCWnJ38SNZFEpHtogEatjrtHknTxc4RxZ2LtUrV1FeWcksMdr8q9tT4mmEAqXF3z4pLMDEpuDxiddGKnBBDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PEUrpd45n9mWqiRSR3ShZUatcqvuR8yFLLPDeV96z32UrTeWzjSd9JQ5ESXdUJLFQSC7Mdespo7Wpwx3MXYKVur",
  "key1": "2nDQavpKQm1Pnw2Myg7t19GW5vUbdspJ6Q1HvtXDpjU3QXL6Q4bKrYezbLWZTo2scSbnt1D3cCzQ6NwHXbqgpUtC",
  "key2": "3TqBf9rFrk4qtU5RGVvXr4NZndfFi8RGs4VT94NwSdfZpqJAWbQ8aSkynpDUPdzFm8GaawYb6R2bLFCUr5znjL5v",
  "key3": "3j4BpvJFC2XPNDwRMWhxY5YCSWpfsYDZmX9LbWoSBzuvX3Addham1KRaLfPWU24o2Z9U1agivVzYU7BJyxHyPHk3",
  "key4": "2WsZuwtd2TGEbMSsfqc2FtVqVGS8ik5WaSkZ6vNnnCQsBDgucJHwt5hqGsxEgKWdi8YGkgVC4HBFmdoiLJyrcHCb",
  "key5": "4f2ErAbbwifkH5uxQQDNAhmbY7R7eRhnTBTy31ySXYACrKT9RXqtE1uzg3Fhm23QuZ85UqXreKMSSjwcUtveLcn1",
  "key6": "3dC7qfFjtgj7Uxb7YUhtYKU7WAoi8UPpJAT8uBtv99puRZrQvKidCxNoKSBBXhRFJk35GB1M6MnapsvComB2nhFn",
  "key7": "5QyfXwczvik3BeMUPYuPaTBxGHwhx6g8HzxBPctaKUR6yLL1eJk37CTy47AwKhR1aF2dMy7MsxUfDa2JvTX9MxEM",
  "key8": "tLEdrCWThtcS3Z8btRSJQiAU1MaAJtFQVrej9WmnBdPvEuXy1sbnf1Du7kk9cfZ9rQLp3uwoh7eTShsw4MDPSxN",
  "key9": "3ndJf19EtHaBXcHKxyYtoqmptF92S6QruRnbMzJTCqwzqnWspy7mJkWGU3xW14Xts8RDJdQ2bHhQsujM5vcNdeTm",
  "key10": "2BWA7hvNRGmdbcbd7V6tx1ztHXdAtbDU5BhR6rbUiWdnKhv8XUDS5AQWWDXF3P6LRtT3pX4mEk4mLyViw6DEy7KF",
  "key11": "LGohfsHGWMKkx4VVCRjtPEcEsFXErMAgJgfRQZKgSQ6e4g1bBGYe4xjZRQUKXp8eAYj3H7zwYh35mJn6ibr7upG",
  "key12": "4D2HbW4Y3JMcPBTvumqkh1FDmcNjGNHwBGNpcUpLDfnA5pmiovhuJEvvk6D3o3LQXpeyzURiNbp76bjXff1DyCNs",
  "key13": "3z39YsSDCjFHEi85roNiJVu6ujwDmBqcURz5NQaGVbynF4tW8LSLhKEgM3toQf8SyKHboqqncXvHmMmA8avFUvih",
  "key14": "uonEUXLp9Jxr6UwaMFcpoi3P4kzytAM8ycsFqZirGYLyujk6BY5Uwukaozv4WPu8CMLi2KK19FiwwvvJQd6Wj1N",
  "key15": "8Sk9zuWpkd3oE8Btuon5Z7sTQCbAMthq3mvWx275ry9uhgoW2jd98qy5VPcWjLfHNyno7XPWt3AJgzps7HJhnQz",
  "key16": "2qx6mh8YmWQcRY9QQymqZGGKTPf94oGE2PCAJ59omMTjrf1F5makP2V8UfPwe6WP9N4LCRRjfCEN1bbCGioRx93f",
  "key17": "4NdrtAYmE72U4jsBx96AESH4xE3gUyh8FnaVBfwogjVGdJGzinRABw2mnQjwU7d4evU1Zn3UUuTfmor2wbMbhBwY",
  "key18": "4BGiZ9p1p8erGJ4YPSNr6Jn1cXjTBBmL5ZE8YfKUHs2R2TPmLSjbu4wLFdBbi5oWEr71iZ3V8mYScQgyEwQ38PnA",
  "key19": "2mEN578eRzVj8nrh3TqYAiGvZGzDcVVTEnoVD2dmCTt8nNzgXPiaA5FD9HWH89wTcBgksZyacdrcQidTg4o4kGVk",
  "key20": "2MhbPXiZ6BKggw9uAYsuuBeWCnbYrr5YuZPF6SL55fNfE3SB6mwsv1tkvy9e5cKv9QbPA3CR7RwA5ZYriMkGRHq1",
  "key21": "4AacK6jcZkb8PHE66gQ4DdDscfKbzsfoxoa9FADaYQ6oRGfZCTtJsZDXiUszkwQnsDJACVcuFdMtwLKGpViAD1EB",
  "key22": "5TojinsHWjsnqMrEaevGsVQdDpbDiBZutabsyH8F2u7HhNbsuA2EYaouAzTuzeqrGKrcPVg3ekrSuGKdfSzTRQZC",
  "key23": "66YXiiKEWuhsjtRyyMn74KDvz3LHRt7eUdJnuGJhLCC9ZU6EsPWtaoaACFwsQAvtPwt8JFLkfERm2mM77Qks19dV",
  "key24": "5zJ5GaSJ5U3Zi5oxyuA8Twdfb3aF8JG31cGWadd5zauF1GFjuXbBnTmyXF2mhySyiHYHQkCHmZieJfx8xh3Dp8sB",
  "key25": "4EKCTMuC6rAe7Heqc3Y72eRz1bevQeuS3H7E8cDnDgzngSyCSJrYgzuq8MrTsT8micT8vp6AUxEe2YUvwQebpzVe",
  "key26": "5XUFugRn1igY5jTy4viyqmkYYJtPMLjTDi8zr6J1peyHRq53xbrWmVpUCVMGM9KTSUJjHhr7sxceQU2BQ8aVPUwc",
  "key27": "uwD8oK7UWMhmeUBdmYdj6piCYznggh1FRcrJL7sXNUhKdrsadepw5wzKQCQFnuNKhB8VdouoGwdPQgzXG1tuLPQ",
  "key28": "5o6LdMu8vBQnWF37XtQpqbQut4cnNf4Xodjx3ug1wBrihPMRVdKGF6ycaf7msgy3yeVUe38YVENCxxVugG8gnGdp",
  "key29": "n5UjemuStZ4AxvpGG1hgrEv4VTnAPbf4SJrc3n7BisqkBzReNULcCKP5Gtn2weQgDLvFT4Jvtm7y8tqywiA1vp2",
  "key30": "4aB3GTXh5EjUpKe7REAYxjRSJerMNZqqeNNXTLAsxneAzsiVW1VddCKGFEQobiARjVkCVBFoRi3hfe9krNdhMgag",
  "key31": "2aNiSYoukPP1MueZhEeWASiuoMt5pEhjToqsVvCNKzvUCkXS52Y7GCnP5AiJWbj4k1KJH5prNPYRidY5WDZnAPwn",
  "key32": "2cNVi1AvrHY3z668poyB36CxfMPRHGKfrkTBDcAMH1bC3ogzGcyBywegQwQBE9tD3vWCjoLY76aftyBbRdDDq3Vr",
  "key33": "2iuebkJsi9UoyHKP4ps8ADfKh7mcH79WqtJ5wwKixcQuDsbaPMMEQXFHPkZ8Z3Y9VauhPQfPQ7d5q6bqNM9p1wyo",
  "key34": "3qMmnageJvs5ut8JLgXaUQ82o7ZyY5H3gLMpEb6eyJLrke8MWmUWDDqzMVmy1yzkApKxzbXKAfg79e1y6mByFDXi",
  "key35": "2BfwUDSH759VTcJfAowUa7sspy1P9yUUWP72AV7t1b45Jemb7whHAhos6BRsxqofNDJdxPF8r6b1FjHZzdjp2NbE",
  "key36": "35fmP1HPLoJ6zGsn3LALQ1Q9YNf3RpB32vGtNBciv5XyhdHVciAS3Nz7sjaM8HcLBbt4B8BVKeTFsyGaQK59mQ5Y",
  "key37": "2xx3VjjkNWAgXy8Aya2WDBEuVwGAX1ES2s7TdzcD7kYMqHyz8CphhJJLFNUeTZY6vhwRQLS6VJWtPMdPDtnJwBVm",
  "key38": "4dWBzCrLjjr5Ci2MivWCecrFbVjPEUTusHuJv8tJkz1RkMkxTVcjNfGLSukYTJWjNeHHjdBeGegmLdFbswH3wqp6",
  "key39": "3D2kbbVp4bF3AAG528gB2b63xJDqKM1fnUKoXntfZBjKSLFeXacVjpe1pq5DWaAEqYMYZH3d7rVXgimoKtjjnJam",
  "key40": "2XQejqppDjnXV9S1We7mspxyNC4kegNMK9Gg9VEDVMRPHzjQe14qQ4b3rbKvvEKjgAAzmxDKUbNqr7gFsxitRD6F",
  "key41": "5L7dha2D1W43buPckF7DCsxdaXUpFe1icj7mz6qvBGhi5aQMg86DkUo8zUJytVjjEmo1BQFdaTvNcP4nivPFWpKF",
  "key42": "5Vtv4QPMGTshaM7fP57Vkc6NNxw1hZsJcJEh7QxZ556wsPTspsAXXpes1N9EYWZBSoP7jnCbQkfUSQzBGc16scxM",
  "key43": "5fZoHbTF4L718faUEqV638Krsa6pnE1UsnM2vWB5qqg7oi4NSsHdwYqT8aXVT2cVpRTkRodGEhB9CzdwZjSgqqTP",
  "key44": "49KzFr3pWrqyDPbFhGgkYH6gVS1DYUzNnkGXPdSphXhjTYJKWdspbQbZXNAYQtSwoYYXjmsXoXJMV7bsbRzC4211",
  "key45": "48ERLSiXKocVB3wEWGJzu46E2j2gFnPKRnCzg6kDE2h5poJg65B97s8KRHGQaSf7nq58YjpVy1XcJ6By4gsccavN"
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
