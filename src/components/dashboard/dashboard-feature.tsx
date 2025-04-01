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
    "5DKMa7y5EVCbnWbdvLvTGeWMgKAzbA4EDHJe5sNQN6zzEfiRjeV8Lo5WaSspfFymy2DC4qhRZ5bUH8iUtvierRqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61jJnC6eAY8tQJQF8mZbpzcNAKvQT5MQ46KJppog97x9sg3jCjCnPS8oVUEp5xvAU9m7G221EKdPSBEjpgqEFnpM",
  "key1": "BxMa6TZWBESd4jRzXqVUWJRcJJ8dEAvMx4WDCd4uWVdWApJZfvC4kiuU1zPzxKrGZ5ZyqAF9Cj9g3f922ci3bLH",
  "key2": "3Lo36ekCMspVKnex6nohoxzjGdoaxcbvSkLcgV2phcqobtvV9c3129VjVSFjzhjTx2u8wiFGPHUfYYBHGeMVTiyZ",
  "key3": "41cpb71qz6u6FRmmMrKjRBHpX2mEGenAbkiJjfpWD7orAMbrCZcz8WRM3usRP6h3JGi12N4SLXis4wBXHPvVZy6G",
  "key4": "4iMS4qa4LhjgeF29xYibn6ossw9MZTsKmDgbhayTQNniLNBmE8ZQFahLzL2kcZUfpVmsQH1LaQLCN4zV8Tjzfb2A",
  "key5": "2YLmPpKBM2FHWmaQiZKPXKLf41Fahy7KJwXCiSHXNTVKy6Pb4kzrJXWt7qDHaj9h4or3TdfDkw6xwGZADzSQ15py",
  "key6": "4Nu5raAZ1hgFJw6LdqjyS2u6hp21hvdrJfHiaT8PwgySutSFWqHjpHBuvbVfmyAFiwCdWgjkq73YmmRjzrb1JM7C",
  "key7": "2JN8MCzk4fWQSWtNkwTLnNbU7qyDFBTBXf9GoyeN9m84U9zd29EW5o7J49Aw6CrnrqcZWycALTnzXYzPzpBQFcWv",
  "key8": "22KAeQt8fSNT17oMRWU8F3zTnMk64n66EFq4YE3gFnMST52S5tu5z9UAuvsdcZxKzwDR9E6wvrS1CMABnX9FbUYK",
  "key9": "Mqnzp4Ry8vWp84duJjPiDi5M1RRaF4yhySSanu4DD5xCp3GaWfZXn9LPWt98raz11cQFZ5QekwGtQQmCocEzSjW",
  "key10": "2DxM6hCPGWQP7Q8KupqEU9UmoVCLMtnYV1qrC3vxobikq1jshM65oSpCEwfrmsqFjMsvDuaQwkdsqYQ5vhyG5jaD",
  "key11": "RD1bYNhBnWBStR9Yf9eb6N2LSa9Vo8yoqWt5iwH4LiXjVeYWbnFSRsqyTYN8DdAdyEvmGKYb8X3QMfiqDwyTpdZ",
  "key12": "iPfesBxkvgGparwS2dX15PNK9TPnqGo5g7qnqeXEnqSFUrTdRAK5rbcN9duj1kZDUHsCx5oFRjiS4CTxND5VFTQ",
  "key13": "5bXxEhCPYJBKpprjYUjsBjXz87pAxQtd69Lj1zezCkYcjym6sQvtw77cer6ryN9pH3whCDzq1KQ92rGaWT3an44c",
  "key14": "VWVkKYY7ChNniuMZUAoeJnsXmCccQ64ZyuhjNpZmed6XmPbZeL42qUKwzMFhq4Ubh7TTUi7J6aS8jWjT6KDZNma",
  "key15": "43zhH5cCbYBVzGxGcBfpSe7Ruo2jkKgEGKfYs7PYVXKvDGRjs2DQCYqU4FyAmTpYNhdhuqBSg6yh1MsqUagRV4bV",
  "key16": "3e57RrCC6tgzwTVn4Xm4suxnDcaWMumwkzz9jtX29ZdmictXxgX2fLHzX1yB31ufMiTxazjFpuGFNcGt7RzrrzNL",
  "key17": "4QjpUKzqC2ygLtuoLacTxphd6EBkJbLcZnPcfcp5DK4ztjdLjeA4UDHqtPaK1iLH4AgzX7fibkTbiv9hG48RL9fX",
  "key18": "4LuCUduVutgTEymgd5fF7xohAyYHQdAqNfcjeZ9pnHEKfhhhDDzAMiwTJomHuJC4xM6rK6ySFpWjsSH7ynA6DqpB",
  "key19": "374gihFzzmc7cayQ9NbpWbihY6cHP8JHd2gEmc4XTkH6XE9PMYbyrzetCMDwNjr6XZNhU8sdScq4DHJmvSioqet",
  "key20": "64LXaU69jKTVEKgyXtvRuuQgeKAr7w87QAQ2kHVBMTTLzuvZj84HKG4QTmGSo9WasPpkJsjyiRsJtiXx1Nz2KoLv",
  "key21": "4bnwvzKrgmHE7uDFqGMGHuJFLVkonXrN9QJHfBofs97uFU1LkQHiMF7GKdGLkwnbmK845QsBqyVz4V2mJUisGF5p",
  "key22": "29aHPnpwf4dHsMY2c7PiMHj6fLcgeFJSEaqZrWQ8VZz53Tq3DoVeRNuH7pKHQ9hThiwGPTW3VzHziqcSeEs8YPM1",
  "key23": "DcvEBcPRT8mGsokhZ2tQwdECWXJBp4reLo6fMkZ4cyRRSLGwFAj2XYbYSTmCmxAMzkozwStpqWRYzyoLnzJ3dY5",
  "key24": "5KRbGnFfqQYxaEpfcmxdeoV92ZJVcuguXU8ucDohK4hGQ3xCRaztUFwTCzThdR4EWckPcCSmptXdJUdHwMRn3A9N",
  "key25": "5hJiUKLhBdpyPPiBvfwyxgrXH2W3hMeBxVYLfQuPHnWu3wXVDUp3fWWUyAGFwfdeCNcT6QDZdULvXjPs1mxcF7DK",
  "key26": "2vUEbtxHySjYiANfzr7GXf7yhTR6gvL3iVGCuLiBxeG2yT3sKCrjW11FiqrMdtgDNjxDbeG3wLybD9L1rGbh2dJe",
  "key27": "HHcTtRNvSAgnk5uaEQuj8RqqjLUxd63SFuyCQmFfYJWbQGGtABU9kitizVjUbDwNuQevp2Jc2M2hAWoEMCTqGDM",
  "key28": "5C6QivAZLyZwpvTNjCRZgnSWn1eFdEJzVkhtaBQnuA6B6qENrTwATut7zzFXJ9dyMBvkdQwZY2jtvq93LzXMvZur",
  "key29": "bKPTTaBQPQFvfH7aHdkJoUbGjuHa22EFNDMWu3XfbU6cARD3owsCh8BjqKyKf8jA8TCzb1E3KZRdxrv2BNdJwCj",
  "key30": "5aZJs7Ccwe7yM1WTUgWLcVrRX3fdcSV3pJVWkYag8TUWsHmWNzi2hhroFqj8rHMd5haBgEo6KM9bmMhCSV4UZwyi",
  "key31": "64vwjA3xQs62gi93NSUhaJLR5M3zSLg8rkqkUWw9rakXBHshSnnt3DbBcN6EXGqQwhariazdz1a24YajAHC8dzaj",
  "key32": "3t3wWt8GXQ6zLTdL7UL4ws8goWyio7Gaf6S5z7hBEVcbqNhMuRWVUBd1P91kD7eWHBQRYt9qqNXyVecQmsJJDYYB",
  "key33": "211mVGzBBP6hTkUHTo8XRgQPLpMk1JgNFZtUmcrLQ28Dsox8kzfeA7MicLsj1sHyppjtg3mkgEeCSK3ZfZXF68uX",
  "key34": "5XYMbCM4A2ScMA8PiEBxCXZRmiyq4vgoAxNdeCbXyp92RBQa9BNtnnBCMdDtuMX8yK4XXd39kgKyLfPJQw4Y33FT",
  "key35": "3JUUkcwtT1GVhVRn7RGBKo883g3eMbZHTpP3212YVbBXS56M2PTt1JCGKdTEzMTpQrymq948PRUfuze3xCFdaHpf",
  "key36": "2oHFoitYLfhhuKF4p1695JDhjmJxCqQXKnmk7E23P1x27CFA4D8iJpwgDDYhpcFjuoU82q85fCN72qUWi97gdUTe",
  "key37": "36XvS2b5RV5WxQWZZvMe59HqzfkC4Jet62wtwNEs183TEFPhjqinCAu1EJgD45xV4zwDR52G3f54FUg5uDMQsrxL",
  "key38": "3kEn5La8zVMfVow35iby6tmk8VFQrEP7RCQe7twXzeikviqiUXASZWDmHg92s6n5EW2Bo2qrDp8cqAU5f1D1TL9Z",
  "key39": "HKQgKm9mMDNdSMWtkgStSkqwi6dnLRBgXeBuYPMvU3hgJKzxLwhJ8Rvnmu91QN6c74mVKhbxNaHk8UFHDz5igdN",
  "key40": "syDJsABssUsV1HiiCW3GRZzM55baLjjS9scSrUAt4XRePxzyjzs8EVKn3DSj1gPFJYwRH8YQLqR9AExkmmW11YM",
  "key41": "2MWogA5YeJAYmYLUafbfwUYoubfjC4HLe3Y8jWnrpMk3vy8ofXNQpFwYwztXFbdvpeAx34whqC7TPTP8U7gNYXDS",
  "key42": "36gUmwR8LLTgXCKnKM2gw3AcCByfYFYdK77fwyApqnVUfGZRnhokB8r2B6LuCwAfbvRAR8DjnZMmMPWU6fvfkCkk",
  "key43": "8mgigMQaeeGN51NfaNSzAaZoAoo9j6HhynswbVBRhj5nfQ83Bn92RQCSh2BKJfUSQyxtTkvBthYab6dNXXFz6aB",
  "key44": "5YLU5Pj4xyFpWmTgwMLjchwb4H8t6G1VjGi1XspfpRfZsRF8LpoL3JxwK8cYvQbNNVSoWffLuAQnGPAQrukrD8XL"
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
