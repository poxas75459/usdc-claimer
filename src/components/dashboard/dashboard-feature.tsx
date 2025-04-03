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
    "2HyYTbtUUc8NzoXSe8ojteRra9CHmi8eLccrALdDaxkRvSkPZ7rhEBgZMytjCKpCjYEi4GiNaykVXyktRbZBbt8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KEf73jJo4TmqJGhyEaWSzZwQjeGaGdfk8wXfx6wPgw5EYpQMa3zn53x12RJNpqU7YLjSkX9KB7cpYcuFxTVdQzi",
  "key1": "4BBiqu9dEWtZu68rTG8EoNBgMDso7ALpmKJheHv3qNiLAq1mdWp7wZKpWtsAg5sXxJGexh5LqFL3TH4gFEjfewyf",
  "key2": "26pVYmtuFokQXxahMhoXWoQMQviYabC8jhbdhkxqQFC9MrstL9ucndYFqHuX2BTaoKeqmVa3RDpUzr2iSGyj6z5m",
  "key3": "37vs7RCEwPeUzAJsCm3UaHTm3NRXRd83XZrjrzepuW8LqvYXiyaqfvYq1srqtysfGqz5UzMp62UzFn3ukc6N8pDp",
  "key4": "4Ytq3rxFkuPBMRgMm1KwrD9jumYxCifeJ5sRsFBwuKcUwhvBQyQKcxbTfP8QEcBRqM2eAu2ffv1WsDqe9piwLUjD",
  "key5": "5Zet9KRgaoQpZGbxvqx2CzWGuCofTqhZBkLjP2sXxv44sTwhN4xyoBA8mikBrDTGtwyjopwvE5NvSNHVjKxewES4",
  "key6": "3A2zJPRLShukpeLcaRcG4ZeA2bQ3NE8VoSNDMxcj836WjwnDahsGmS9bMVm7Wpp15QhEMufDgdWvpxB3A2V215J6",
  "key7": "wUK5TPNxSndGvoJa4QgoM26UMKg36oZSTmtfGsKJPMfWrmbuom5aFcevtEjhtaaFzvp4MFMRQdEXZ2HNxc18Nns",
  "key8": "3EXwVX5KRrSEBTCKwyKA2J6o4KvEjx8g4TBP16tHqNUoPBq8xvhJuBhjTFZYVdkDJJzffLzWCRAVvCZyJmAoEGik",
  "key9": "4x5GKSj8B69c8pzZC3KQbmq21PJHu4zP73AaXyuAqxvkibrnkMRS324xRbApieiczmkcZobDdQwfwJ23eCNqvWZk",
  "key10": "4oLzhsJTZ95Ye9wisXPiFdM5Y7HXSK8iFesPa45gdXvmuLXHJVQPkqSwnuVDbWAzCB24eyxNfuhXQgGoqM9J3biP",
  "key11": "2BKTu5sJyoTwoQc6eEJE3hnhEBX1dfnocANZoYbyutiqsJVS5oHCcSyTqbvSJ9AAZpbCv2gegmJLmQFwHjWePU4u",
  "key12": "5XtPBAxG9vxc6sprsHNGbd3HqRWEjcHd9bYJMQybPZLyQhoxmjBa5m5HxnJYq8RSpgyiq9bEvbo8faw4y9FK7EyK",
  "key13": "3ya7QUNL2jRMb1tFgihq6XbnmX1dxvTLHGNnbsnos9usvmPq3d8QCC1EJ6vF2cotTNWhanQuBB5u54QdBF5iKUTk",
  "key14": "5NAV9secbdPVJUz9UGnYUJaeHF4e7RF2iaJtWSADBVndrhKMSXeRM9UfperspFS24cGzZdoaKRvTfPPRXXFdnpwi",
  "key15": "518dds6GxA87ZXGsdjY1YQ71xEAP2ehKXM7nAWpF2WTTLVvzPeQVG8iGV5ZT8bezMJa4iuMbdogiF8KGP8XCMDJs",
  "key16": "3tQqQVQLY2cx8tDhnMBVVtMpmmfkALWzDnyk6NnnAAyTNdiQDDkF6jGdDwx45LpBoCsKFSe44BSBepbbwngEQQmN",
  "key17": "3WcQFCpAJj9pKUwEDNDcz1Ap7Rt2GjXD8mEKPwjrin6u9DAEMcrcWyg1wbfurWMp92xSvYBzZ7cNvh4z3Aq2eZzW",
  "key18": "4oNam8UC1PK6Hx7az2PJwarrNEzRT6DsxEtfXq5wGNYTcnetFJTZSRMoJoQ9HSc1RQwSyfDQwgLysCh1RbWRRfuC",
  "key19": "63t6WAZuL5y1jFRsHTc5e46Jg27faoTUTxfK8nNWBpuZtdn2FwzuXznT3bnm9PGW4PkQFNa8f4qUWRrY1L8dcDn5",
  "key20": "4jCjvSDtrgmRuhaNoe64dbd42DZykgToT3FuyfWajfWdW6XSGrMXbPQ4x9VvfmxRMivBEBkdQcJMr2gXFNbDteeh",
  "key21": "j9FUyX1ZSybwkHsb2VSpwmCHso8TeySQyoFjnXCuQ7HrmZ7Zwfhf1Em4FoPQHhLaRBWj5GnMCjXXJDygaM1YHM2",
  "key22": "3YbwH9c7UDg7EEuGz6QB3WZqBJaEiAX5YBXjm6r6JUqt1Gu2ewsBdvKf2uGfPiKD9QMdEwmR3Bd3TeF7FH7gSa38",
  "key23": "3dPRLEe77PVVBaneHKDT7dzKMDdkKchk8AnRbBBmPhPD6SWiHHu78kuosfkTD67gEFWRjMy2HvXGW17HFthkcUnB",
  "key24": "2bfAKs5AeSxwgkd6ZquQ9ajSsUAa3TyCmgsmDbGrVr7aND3fPegMS3LcLevik14R1Xc3b7xRF7RX7HXu8rKjLbZj",
  "key25": "s1yWuDPfeJGvonpA9Q5r2NZKiCFKqaQ1eEvMqqfiarBP3ZX1HuXkdvLtCihaeCpvGAb6EcPFRkpnfXJL2f9TLfb",
  "key26": "4WwMEuxkH7S7YvcriNvvNpDeP3d8nP1xiiHY3FgYjxDiN5vBMrwK3kYrsWCPnJzPhLw6ZpdCMHFnRgyGRHwkr14H",
  "key27": "62gb1YWrA13dm9398taubKuwqbN7wMeuEEqruQYZdxNdLveUTwv6LykDKQgAEcg2u2H8YUVTf9iWQ7e8rrjjmCgV",
  "key28": "64r6ek2YzTnRv1wRdSEG7CqjhK8YUHag6zSAu3JHGMxWrRqs9K95BFhf7e2ti1zYymfkcLaEcZCHgXyKbAWHJHa7",
  "key29": "271mp4VVAcNAw5bED8tCzwZs35wkvi79W9FgmFGqgtQF8UZdNvqBnmdUNJkRdv1B1jagnyk2hgv32nvPjEb2Ffnb",
  "key30": "3jxGXFa9H1Hv7cbwJ7PqKyiQBNm7mqRUN791nVbyAQpu9h8qTvhyhwQFn1UWXjiKhbSEX5e5hGqjinN4VriDFhEw",
  "key31": "4v27pNRx9M9nm99mRtCoWTMNuDB18Svp7rfEMDUm1RAeWV9QidJdQh2ETAhMzqN4b1tcCsFdPyPf2vyR2HdeXSQD",
  "key32": "4hbsEvDuDcZqMr58861XeotGdEW2uK8MVxyTnUWBbPFK2KiW6hnoaQdFLHi8dvXe8LSAsfENFQb1svYvc7cHg68G",
  "key33": "4rSxUQcuuY4qxGkjVSYFLD8pCeDqSvN5pQH3E3pRiaWYMWvqkNMRsKEqFnpLoCmu8LdTwd1NERpMFnkj3NRENY1M",
  "key34": "5giUpunPMJWYctfiSaVvaAcCiJ5PxXbaTm3mZZYxbzyFqx59n6Z6Jy7b1EV3WVvJT3cuVzYc1dEr2mMtCeZsiScF",
  "key35": "52Lx3hw5fVvrhJAH6xm7ptpRjW9MYBg7H34YbMyExsVa2xuovfZgadpqTLiQTbkPL7DNVz5bL1edqWzB4ATLkQ4L",
  "key36": "3rHBi9Dnpqqgy8cMEoQqZBNXS2jsSdQE49tv34Xxffeq6GRpaMjXgR1KvDABpck5Po2hDnEV5v4aLNH7Vtzv9YRc",
  "key37": "4dVUDo288U23LR2HjPgpDpVsVULk53BVhKy5wFFYosMS2HFt4CLCq73mGHdzbxYtiDW67QcW68jUGyqjsZBt48qb",
  "key38": "5T1b9B9WFY4LUQ6D38uBhhAY3pVVyDJ3qn9Qk54mWxSeaN9ifqpScBi5otKc8czdH8GrwXzVv2vMfjpkHkaa9jpk",
  "key39": "5U1ppxQPUFXBPuJ5Fy1sy2fz8tF1G6q7EGTdvaxCRM65xUCNnJGvY8364m3J9sWpAHyRiCjUwoBruJyYAeSBevgd",
  "key40": "5dsntkweC21NTFfQ9CCeJrdxEwqMWdwecHVF6CrPPS3RYXEhxjKzDtG7R6UbjvZJEAExe4A3fo4VLum5EGQUn85M",
  "key41": "eNf3KZ5uWxMpjLFsKgD57MzGkXqoDZeDGkQfxjJNsFNG5UMobMkqWefoSiJTRriL2jEPwZPr2Q4mjUALoDHyGUw",
  "key42": "3wiJBqG2fHGGqSVdKaqFP3eFJWhNK3SQz1VUL2CdCTr3jyQJRSAYXgqi2agLZXS2PVADbyEBydP3zBdr9wjmWfm",
  "key43": "3fVak1sFeYNKx2KgegqbJXEpBtM36A53mLWCpCxdw8QZwvcvKK7eRVYi9rA9L5Dh7DYFqzrBFkFEFLgaBYupn2rC",
  "key44": "2ZtyJLyg4HCuuZw7uTssZtbfYo71TaV3cScAXaPwcVSMvy617MydPrvjthqe4NGux2FYZASqag8hCqXKyYwCzCir",
  "key45": "2hg8AuvR8FgNYeLD8Dte9FNbwBBDgWqFX3JYeUNGfgBZUgzpKcp4wcax6nNJ8KH1yxLDanQRA881cSSbJPDqasWw",
  "key46": "jdkQgfdxUtdnKduQ1uqzrvws5QmrJWBoSae8qGW4tZjXW5SsrZuAoUoruyozPzVBQv2CP1nHGrzeSuUmPFFerEF",
  "key47": "4ADRP4XbLsNskpyzU6MexAPUZanptoQYC3yzDvSQWMBHjiTMpY6ZsNyWoaquVDDmuFfMwFuQFspqgg2Uo9A4oQfd",
  "key48": "2ebQHqC3c98LSFLLGkMmcskrHWtqMqWxYPp3KY55YxDJdjaBac7gNdcXrbMLeYhE4Wnjj8TgqCRZv6A7DSnbU9iL",
  "key49": "2SYYds48Thnwr9cL9Y4U9yCmiZFwGZfMY4DuqGKdYqydwMRnFhhnKcc2m7S2Pe6WyNCXRHcx5vrgRJTCPG7prhkj"
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
