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
    "4HeXNj1jBLfCCdYuqmXCkCHovzw3eg6e9xivd5A5ERj6cg5GyAbZX9QD5uHwbdiu1cZ7rCD86JB4zv87PJfHGRN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TYUfjEUXc4jkyVb7qXyMzt7E3yxrK1AiLErxD4qCTLVKzjKCwy2i5iGJLedDdTVbErCXgiWihMPRuXLJja7LDEk",
  "key1": "55EYQZb8Q3Lw2WNTrECi7ovTt4ErkE6jhs39odFqsi9LipgSdJ8n1UviTpbtgBR6LvBukf1XdTcCT6HXXRWpza3f",
  "key2": "5ek27ZnhGvMH2CigCgbwfg2GCdYEom5bv53TKxqN7DY7pCDUZR1bKGFp9aY1J4og6HBaK7ahxw4np5XTWUd8vRET",
  "key3": "TNFkcpvzXSK2g6KYU5dieBpM9WjGrZFqLZDZcen5Uie88oVNg7G99QSrH5vArALRCwK2MaYySjDriM3c2CWJzsg",
  "key4": "Kq5zE8eaLWko1mqMKTi3YXy56bwekNtv6CXjwZaKpi9yhhhpXYkZx7Wz4bMX86Sbj88yj4W1PBunnXreGETqgc8",
  "key5": "4wD7vqwet3s8xgmAxVQkNCmyc7ZZVuBhDt89fCnypGWvW3CYmKCPgZxREWQJyvke9RVPNsqGA9akmZGGpbXeiyHJ",
  "key6": "6Z5a1HpJ7CjVG2YkHixyivDwm3MfwrgeXTSZNEpQaXApjZZ315zkmZcdnKcYuhczmNMbR1Vye3ubUSmNZ3GZszU",
  "key7": "4YBLKPL4ZLKGM3gEkVraupDPxTa2gt27NcNu78SsrDTqreWDx3DUfJJ3BAMUfGbs51skkw9wUcg45aQmoGGCceYx",
  "key8": "FozDgjJE9851bA7uG1JEpkjREK6A84jBHqD694se461tpQYDfoQ4x9WhdC2ANdmRavKcjctBrL3mMEHmz9Y8Ryw",
  "key9": "joUzD5uv5R1f4sZBmrUMemBYY3o6he6iv799JUZpnVyX5Ddb5UfLJ6znAfAqWxo6WfYv5pNSNgh4RbghuzvwZic",
  "key10": "VmTRGqGuq8TkTHJHDdpAXmnT9tCXQxuagQ8uPqrcSdij39bcw11nGKDeVuNkdYkQWj2P1LNZWbnuAjh4yb3MzyE",
  "key11": "62sZKsjA1aB46DjTUPaJvb4nM3W6P7Lwp3fFxVeQYgPkbVY6vWc1h2PNYFg9x5vGaGaducYwYMkvjacBdU1pQym2",
  "key12": "MDtHYbUSjshUxYnS53p7E5KmSDCRyPZp3yBtUj4KNszXHZHXVWdSn8rubyJZSXUbohCVVx5ke5BxmuYxhSCCGna",
  "key13": "2yj9o1huNMEfW2wagwGSpKJL1DY2sBL65Hcc1vetEa4QfvSKFtZEmGX9vngrxFdLvDoJoJhUdgrd8e1JeuwaoENb",
  "key14": "b7ZYMrXtiVqAeHKcM91Lcgg3nVuWxErtSMpZxZo3BNrSFQgUT5cmSDU1RVAyCRAbmq28KPDzTfjLjuJnFVf4bq4",
  "key15": "4BAGZ9YAPrh9rt5DrGFJ3FxGVb9eVm1TtUg8y1r51RGVEdWTw1aNoTemXFwzcBc8SETnRswNjgqs8fiyLY1BesQx",
  "key16": "5G7oxYA3zBL7gTbk4V1PsDTWfMSQtNv9E9QWC7pFVaLn7TuSScnTYuxMQMyyfdBWgY63YmG3kpHtaRLFxkPSpXrN",
  "key17": "nR6rNJyh92ige5KvPYpN4Pi334wz3FTZXPiBYA5Rus27AXHWeckYuAafiqPtji8vBs7ksbBRjViRLZSce4dtMUU",
  "key18": "5wuqhaEQRV8KwtVW5HpaThBMyT8k5QjfbAkNB6prvqkgWFkXp3EjtsRi1B9wjxGtC6oD91AS1XxSpvjTxB98oG86",
  "key19": "21AMe5fjxaZuHusZGnjyRhAtyRMFmpRW8TRpXFQQM3kNXHqBjdSPztCBhA1dLCi6Wd1wmXVmQVbLmCuHUFZaW46M",
  "key20": "5dLtHLSFFTycYXGfRvgpHyuhZMj8PvWhjZxoU8hee3EQ8vZmvQo27U77rV3TXTK2QyGA5ZzyWJGZ4C5PieTWwgE6",
  "key21": "3ChxxX7SYvbhS1tkL9PPhPBayWCwXYMqSR6UApVECWqiz43awzJh2NuDCbu7Biia3RWEe3UQKi9rtzZptqmpPCRN",
  "key22": "7KmUFoMifcRLgJRFVM9Cwrh3jypkxT1bTzsmfaxs3o445ruDt8Gi8dxr4P4qF1FjvdXtaCA67Pqr6BM7siX8M4c",
  "key23": "4iVFw7A9BaR7vTSWKu4EHgFLdSGt4i3PJE84JXu52cAncbDN9MqeVYgu9Xz1TsSBttQ1onTPAQAP8ViukB5qUBud",
  "key24": "5Nm38pbzyYddi975PkrumcX8mzbjHgPwvWBHGTb62RQuahF4fvqo74aBUPwjVgQ3moV6t5qXpA4ejWssGi29baM5",
  "key25": "5EjuzXeDfF7a22uyZxiWy2WUNzmHJGr4hiZ24oeFK4CWHDJpzwwcJLYC6dVzbNRsw4eCA26fnXqjqKVceXyazik3",
  "key26": "4QaB5MX6dJSxf7SMGsXzkr9HtF7o5EuiB8r96Fg1zSmFCUKrGS9dCtqckTmdCZeT3WAdgpmxkSnPk7RGqevxG5nU",
  "key27": "3sQ9xxLdv4uVcCNswFRw9YxPb3TPSec7z8nyHE7qsB5TRyVoBNVzD2qtCxV6GZA3Th4vK2MWUhin4kWa5mv7GKVa",
  "key28": "5rT98Yn3jSzQt4jCQSKVUeLKoarUHWnHWuUng27Wi7NxShWsGti67zHw2FvsxnyYgRnVF97CTw1VED5erYX2qU3y",
  "key29": "wqQUZ29VaLLKUUetC25boJG5yFsxYCHgJh6TZa6gQdFnFr3j5Hqs35yLj9q4qWBn5AhVfPySSC9mUfeBGkFdHfC",
  "key30": "5KNQVCKB3Dkcgq4zFQS9ttr2s2vhHaFQA7qoMA6uS6V86f4vNsA6KifJGuY8RQyjYiNssDxbwXxRHSxmCQVWvFRh",
  "key31": "2oKevgisT65CohxFwQ74kDrD6ktpnH2pheB15KWBzrafzGKitpHXmC3AuoBNGwFTuAFWdUphCBug9g8YRLEq3GLd",
  "key32": "4QF3LZ3cUPhbLpfiCBeJ8vNi1vsTt8oJ4nqFw6CcvpP8oQydXHXcZX2rMeecNu54aT63FJFra6B9n14UGUTVG65b",
  "key33": "3AqqsZMZh92zSxJYvebvRfN2fwmNhdau6R4QfW7fcj76aZjeFgeUi6QbsCyerQZWcuJGkM7L5XpA1S2KGE63mhUu",
  "key34": "8jWgWWxmqSf1J1uVTu8rwSE2QoVVieKkMufAu7gNd9PzKLddUDdYeW8kUPNuro5VJcr6uocTuPN1pyYMY9EjA25",
  "key35": "FqGQUgJReMSVGXFxUsYkhouJY4icTBEwg63npBoXmQdpMxB2aR7QQ9BKRnxjMd1KV18TGu4iBd9cpkjE9VVuUaP",
  "key36": "4BkxcAo4dzynYtRfcCNaatiYBVnmATz74DfxttpRvWTvrnXt6F9wUBCiHTiUrTF2dVEYi91ED4FuouundgU7BMqL",
  "key37": "36Bn8DmbBvgBqAz89YjaP1XjRdxXJib4zoUKDePMNA41hCPf6e8UQag5MPpYXtu264MMxwG9nfWUbRHHAn8REnNS",
  "key38": "E6HKPUuZavehMx3eo77grtNvNESSXY61EJhMzSk6cTLQXzHczKeHZMKJZDBzSFf96jAQfz9sB2YePzngYcprsfd",
  "key39": "2Eqc8BEqvSdXJ21u3hq2zmWm7aWf7AZLCicJ9exegpA6hP59DX25pURHCodtTPDpJAa2XY18SxXHWPjgjJ5nFsnT",
  "key40": "458tg3XXTiR65H34ciwSJqUyY5m4VqXjZPz2ze4PFU3kKGRjqbCLBQRBpV7ibwNkseidoqAgvHir9LaLGwAe4caa",
  "key41": "3ejpZ7YpeEoj8WRCdG7d3DqDmg4QQgVrCHE6X82GXCeZ4bbhZAVqfrN1zufavtaNNoBuz4287dq5ucnHgHw5qhq9",
  "key42": "3uoii9PxZsKKSF74X1nkTq1NypzJYCvPRa4ZcoVAZ7j7pQYSQY3JSR7bDF2BMmq2qDSKkS6o1NvjrMEZJuqWcMW9",
  "key43": "4Txiz7apV99ge21rjNWnZrqu8omGXMwAGM1FtfwdLDGtX3zjUumT4uVrSkQVgvHvNQtdGNVhvhPgNEjd8MMoUoYt",
  "key44": "4ZFGWMhabKjkTndjrJHjgB8nUsiG7bZ9PnEK4LxWu7udk4s4j61Ju4cWHyM1YxB7ChekTo5koCmtQF3icbbcD2kQ"
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
