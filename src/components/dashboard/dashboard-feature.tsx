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
    "29q4fbY6o7cWqMjpgziuCSBEN1SZSefDgz4m6nmsxU1UCZp19ZVzhfFVsfDr2eiPB5mFCtDocZG2ZxAvdF4GXi4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T2CZQ2azYgQSdFbYqRPcWdSS7ja9otgZt1Y3yWtMbEmNKG4rMWSwBvPpVWqkzTs6E7TUeJdzx2ck7P2pHUcj9Eg",
  "key1": "2PKpJSg19whbDSVbRphXq2soVP5H76Pykx7dBXQEQjCdqZrE5LtYgRSSHQ5U5pMso9ajheKgtPd34FnXYbcT1Qx8",
  "key2": "varvhK2ULdKCs8yZ1vPELGuu17ay15TK1P8J4wzhVrm5B4jffo3y1hw9GVBUQo7T5bSa7LzXtxVAFefZ9JoNLSu",
  "key3": "5pSaiuwsGe98zAz8csuc3HP6GoWJp6JabF82QoovU72A3uTwZYWdFXwGqqR1bsfRRgh5aWmfy7ZkPH8rEj7PvRfv",
  "key4": "5w1b8esbYWhcpyKSSC6kfNgPT8YKpgPCMYMnbPBkmZMD6hyzkvxYqZU8ZJj5LzpzCdQiRHDAejSBMHoxhGnARyik",
  "key5": "fREUjJkJMRjarFt2XVUYvgxrv5yK3ueFJUPck3vSyGzgsqhXY4vQDjE9xXmk1QHn2YFwK6VNMj5ruG3obftPfmQ",
  "key6": "4MDKVj6giv1tbbbktPJee8QZjkrMy4yAqMuEztqYVTcyCSW99MbCfrG9i3EWQVmYfoY4jcXiPprZJyNJzE6VHgS7",
  "key7": "2ktANiK2qQkdrcVSb2NUKeyoZyAoiGGRnqakXQunmJtQLqe1GNbss2yrFmkN3p2VL1ZeLAHjy3pTXCvAEfmvixDk",
  "key8": "4QeGuZi62GzVkkFa6FT5dHLPvj5NyKTp4iYwPvN47yhsHwJfomfq52YRkRLw6GB1LnwGhhK78zoHCV9t5VNDBMUT",
  "key9": "3xdfBXtHbZ2JoTpATLQyNej2fssPYAsBF573S5qqu7WkZpJQsXMi76qhjoCc3qVQJddeUuNwcmxcWmi63WvM27Av",
  "key10": "4uWhJGPC8kPxrFtQVjQ9GQUrxqQpf7hz2XThF3uVnTJo9DfuQPBtQTd2J6ag1eRH73uFvn5eLwCnB1cd7RZtcQDt",
  "key11": "5MKHcR4PDufn8pcELFKmgnrmRP1wtUh25KaVB4sr1sWqpVLPgwgrjZCjQi8gTaWzcxwd7FXR3vnwtJBk19vecv7k",
  "key12": "63XnEesvRYh3qrw4pnEC9GybsT7Tn75sChd8Fccsj4wgEDDBfPpxPcnjBvUokoVXao3hNvqytxLsWSdcwAg8NULq",
  "key13": "5LgVkmMKXfUojU7s3Jn2AKs8W7dgaijHCXKWL6AwU3Pk7FD1D3MTgqCriDTaMnsPLF9xAA2f2E6Xixcj39ZJydHm",
  "key14": "5MaAmrTPjC6QGoJLNuXBr9u95XZoGQP9DKp5gBvSNeHwrmkbBniDJ78JUzPzYWferTJxewzm2ofNZ4xxBSvf9vHm",
  "key15": "5N5pzXcSfQHmz18TVdoW87ysGDxtMDAfb3BAZd1erFpTWcz99FprkKMg7edzfQjVjwcVzN2XQicFwp3HUJLMy1vt",
  "key16": "3PLWishu3ybKeUVapBchkiVGyrNB5bPEe2m8LSHoK9xDeCdFmKgXZ3XKKTw7hD79X2wCK2RTGs9ErJyQyBsyphhJ",
  "key17": "2fn17KPLk977vsmvcm6Y37JRfFXeFiak3LiKwMY5151enw9ASbfJ6FUDrpSJySe73LD6ZVbK8cAGxLsnsU2vLRro",
  "key18": "4aJFefShJhfvWZJd7xPTMzsfuZfSuV7PkkSHL21bqNoZCbECeNN1VFtDYZZX78G3ATMutpC5GV3z5ba6ars7cSH1",
  "key19": "5DMo2K6qDWW5MEvCFFj26hFZXttxtLENf2CZtm5ZGDTyqMeuEaF2yeWXusfZU15R91SKeFdDgu2nWAgPB5H2ocNf",
  "key20": "2FZkrQiUP9vekPVcGgNCkjP9WVfzQEYPCFUpSPyhdavsbd7xAQVDunwfrE3fAfFmyHFiecV6J3b9nf3kx7yzANoi",
  "key21": "bH37EXXgPhZmcg6Xk3cVGrsVNrwAT9641mz1Ev5z2EbndazYjRPLxSqtyjBy3XGvEmVDXyNdwNDXza11uJFd2qC",
  "key22": "dpEbtFH1kBYPV2cnMfWwDAMg74QWdKYDe2ft4iNPmZNMdm9ok4SmjDEQnc4r2LGAALvt18EmCC11tWHeF76Jg3v",
  "key23": "3ZDdcKZjjxsndn5UtT7GCdSn8QamUrWsKfec97cUCm7WYPfAaZ9HqAB4acZJFD2qHpXKmErkKbnncvsMHzQMu5QF",
  "key24": "2TgXjQnDEZ1pqXaHqYV6MXKdjoZEe44LU8ctbEqkwqET9z3xzpTRLbQsMSeD9jnMeXJLSwXksFRKZkAT1VqyJrvP",
  "key25": "3fwps2P7UN4ry8cA4VqwQkkhQ9XGsqELXXTmZh8BhDe1v3a8q8nW2LpynPbfWYKALS1DvXXxGQTUmiT6CtGCDdf1",
  "key26": "36s5s9ejZrPKNMVGDLza8Po3zG4pJzPxWBkviU13RVAD5m6ffr2AER9ZJ88xG2PYS6bhK2BseDbtFS2CMCPbXH77",
  "key27": "4NbzuoAh3GF385ostitzuAo8ZL6xU8SZrM1r4KCMpit8cu6A8W4j4amsFPdj8zuTny9Zg53FZVgduNkABnm9FMoF",
  "key28": "CraQoVtZs8xqPFNbFpc1oPB66C2Uud4GVUbUd7TMFX2r477ihG97SXBYhq6W2CCuMgGvYrZc3oVXfcQ951GtV97",
  "key29": "6Tjmhpo59G3tRUEQfnptGQPFqYQiF1Wify93ShadXN9yJSFRQJ7shi4SbAaiho3MiWKMgajXYNxwXLWYcdTUoc6",
  "key30": "36EqeC63kzZ15WkH3sFcWhr2B6xn65uXs6KZnvG8VbSPd5pvjoxXtC9qSMFo1B3JuXNw5hYdoMQ96mFJ25dNEDMK",
  "key31": "2QpjPk3rvjFTzbX1xqJ2Q3HFBWjPKq3nZpmVWYKaR2KvQktUSBTr9fwqgCQtc5C9A3Za6RLX2dafQP11S4t8q5XC",
  "key32": "5PnKAGUqGi5wKDEmYj7piqApcP9QNQ6hfrrR2YLQoZwwqaCxUVzYcxgvNGmMrEEiPY7dhn5Coq4uoSX7xF93Mpe5",
  "key33": "3BYxrHoftqEjyMMmSUqCWWKagy5ZyTNUx4WAmibi8EobAJCEFwUtzr4ywS5MWae7nJiWCKcyN3hk1hzXiALLZBMG",
  "key34": "XaQs9kV3RxkePXJQGnCE6gWPFre39Gj96fZqYCLW9bgJUQumffw1tBjmBjCrkLSZp9cHHpxozU9hD4VdkY8Rogw",
  "key35": "3ux2MCVZzLsBsYNXRmu1A9ZkjjwVCwSRzTCec2jowPyjUEG6c2bw6xyFQr1gSy7GkiURtboq6BUxFUH7vs7BY526",
  "key36": "3W4b53SckhQUcAiewhMDX9R1zuzLyY9j4SKJupjwdw7thbFRynsxiD7skZJoCuhUyKLSGcpfBtngZv3iGF7qWBmr",
  "key37": "4UvbjrPpRPUnh2TyKtbfzmz45firE5mag2yNibQtAohhPtwxmkDtHE1Gr8oCsVtsDLRt6azv92PguPgChzPC3C9K",
  "key38": "wjxzrgSdiawJ8N5sxWRWjo5KKsyp4W7fRyWddWAVunVJxiZytYrzvFAiWLRReCj1Y4YzEevzUxeNAUjHH9FcbGB",
  "key39": "2FaseJYzB8nKPC7ypGgdbtwCmpuZcQRyb2gxAcpRVSH1qZMeHdZRsgRXCaP4rrwAmJvZh58psJdp12XVznKZhWaw",
  "key40": "2SuuxBWwTtTCWrQshj927R2zLPLn1os65gP7gBZENonMoGKjpomnmCL9mhsEZSSW4DFkHoGBRW4HcGgZLwk1Kdx8",
  "key41": "2WYXDLY49b4Kj8fiq9pPx4Qpey7YAKYUzGjBQ7pfhueEn1owSdRKN35b6YftW3Y94ySks7n5h3dkQwKuchYurJWG",
  "key42": "54SPckiW7zVFwU73fNAHkDvrwU387poLyqceqqzm4oE7PSoTRt6SSWGV1pHY4SvbgD4kPnA2nf9nBcNTFZmpKAgL",
  "key43": "4yJHy5domwK8e8bC7oywH6p1HPAwAFFpj1ZdBYeBzkzEZ3BZDuFdvjLo5vDVQLbNmMvuJCyxWwNSfUBksSowHa9c",
  "key44": "3QNqSVXqHLtWaUBnvmh8UQvCPhUM19jFnHw5i9e6ZzzCG8bLkuYuKNAcQe9MKEMcdPkjCMEghtgbq3pWXRYj9GqE"
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
