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
    "3gcrPNaTXfTL3xgWjTotfhfKba2H6SEzvWqL2QhYRkJjNtHiJCjinWKgFmJBL9W3Zhhz9YBeV9P9Nze5uD2Vw1Cn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VdyqqU171PaQ5iSGMvUoc3RMt5gbo4fBmi6N4oxwqquWx1gMUAuhk2ZDBS1meETahgwDL1Kv4A695Ef6BykjTmi",
  "key1": "5MD5pba7iVrNrA51trEbnG1tjJTMQB8SFzdG2FQg2DAUy1pSBWqdTLueat12QiGSg27sZthc6icLXmn1zbvyxvUs",
  "key2": "29fiZMf3fdKj6p6g2pERixCe4v3nJHGCoExZDUfza1H16D2xxsGkgYuV5ki9meFy2t9L47yi8jz81NQprGZXEtvt",
  "key3": "25Ggj9TXxXUg73FTTHkNjCm44Sqspw54vgJXHjCZ7oBMgE4G44SDkZeVE2K9TvTk6fu6eaSskATruEVWgo3TkEtq",
  "key4": "4HEPakgRFj13CgcWNwdVYNGm2CUDuCARezSXfsByykTsaqHnJf8gHj96RmAiQmBVRnno97PhoMeHrutHh1vyrscb",
  "key5": "3AJHZqzU2GYHd7GccAYhCwkhFUWHi3HjA1WdowWtB9j9k59Q6aTa94TBpssSFJfK5unFADYjvk8xPBWrp3BpFRo8",
  "key6": "3kgs5vduYLsYjf8mmiGP7VHzDgpNYAFJ1R237QE4DY64v5zYuZfzH4CL9nC8YUR2HaY4tSBsKQBafwSR4qHfb5jB",
  "key7": "5QQZ8enx9jA5p7MULiJTdhbmN5gg7J49MBYCQesUZ4ibPZxqxFaNeQspC4WkFfeLVXjxbaj76QK3pXfgFZrQKGEm",
  "key8": "2CsBb5XDCw1yYKvypHnEjMnN74tSpLXpWaVQbEmHJAky6ScFUfjVYyyeMoUNcXtWDtLBaPrka7cLQ5PjcJhyX5ME",
  "key9": "3Jb3ddTN1ERoBFVr5zZZerjPicGnb497FbtPYFsKS3aLWxybaviRypasq5YWPaUxJha3WMxRmkbhY1wchqWRRWGf",
  "key10": "4sqyHmADXye2tCJGS7hwrF9xKGufk2hUqK1sBAx7cuUJ5SmUHXddJfpmXp6XdRpE6DP1b7CGcpjPbvcpBY4fWNyh",
  "key11": "277oyvNWe6KbW7VuhWrRQ4mgcN51M2uJtD1iy9nKbKs8MDn1WXCnChB7j2vfucWj5w3DBsLUyQ8iVH5XZ499Uhxv",
  "key12": "63BhjbZmZofNi531zpSvcjumXgasLxWe5CN5k6rsuUbiecWQ9sQukRC4YX7sWcYKwT9exdjEx3ErGBjefmWzSWph",
  "key13": "2YXDieeiJcZS7avjAgefmJ9qkrimUYcnj6U6WVvabAYMo5APBFwENWhmYU75kYfnZdMB7pi6PHLgtUxhRA39J6v3",
  "key14": "4UJDey9pbupGSSQSv1FoBEgB1M3HtLxPwW8e6pgqdymKfhsXkYHhNENAGGn7swq51d5EMXqSyB6RmJzSZsDN8GxX",
  "key15": "2n2ibyfV2ZCdbUWDNZPPPL112gv7uGFnUyMQBRh2cKCgpQwW1u31fdnoiDCNkAB6WuZFaYkEzL3TFUsM2rgoZit5",
  "key16": "2YDCfNGFD5tg2MzW2noytv9UBe5xyEfTnUPczaaep2nyy2EA3nwMHb5xRdvySk5kEoAjvWG57juiy5Xna8tyu98D",
  "key17": "3mEUFuG65nRpfmHb52ixRSvmwYGFksqNSKnv97LifM2uSB1AQEnHWmHyqUaXwaTkNqXisyqCrYyZCLZGpGhNbq7j",
  "key18": "5J3tnhHVurtbFXKj7JxdBb2W5UZ7Fj3SLL6fjXbUQu25o72PMZUCoqP58mTSdiyMtyQhUVy8SbSYD8T4fZxhN9K4",
  "key19": "3ex1KoF669pYt97JFczf5xB29NT6ty5aEtx7LEYyh7JV41pXdFoAiNJqVa9uSzartiHjQwrWDX1kpgCsuT7dSpXj",
  "key20": "5zFbHNqUvCDNGPT62AkhG23P1f2PNKPHo3YrJuNaxwhbPabGsqMc5wByasxKAkE9XALt94z6gaDA2Jmm9qpmm7Gu",
  "key21": "4QxkF9QVf2m2zRK3df4a7t95Lqe8GWGuAYXcbrbfdAiUyWetZyDokvmtDbamsLYCam9NdY6k78kpQ6AU5kKCbCdi",
  "key22": "4xyTJfF45ggTpFgzeBjYcngqWz4QTc1EXnure24okc2VQgMNvcFMaofp21nB1daoUu4U1Vz7sFviKqN2ic391afc",
  "key23": "234fWXPe1m8NVpHXkfEf8FytReSZdMyATugw7aS8v2G2YwTR5GJr4Z64Xk8rT5EhnnbrcKcaUPRPP98sZWdGMdUc",
  "key24": "mr3sy7xaY3y69WNcV4MujZWpKyRBG6CEGMq9oTc9YzLyPu9mBCsiLUTLkbQqASn5FiPkXbhQUTAGvHVNxNZcTUU",
  "key25": "cKHFZz8dxx7H96qcMSG37BStDBWBpXChqzSPPGJKrwgxZk2inDQ8cUUdmrsLycwJ5oGSicgn7bcpdcaYYoBjkfF",
  "key26": "21E22fk7DpurHR8Bet4uruEaTRteEG1c12jpTMRe1cykbfm8x1YnDh5VRqRUJBf1qXiQmnYqjun1TiJQttvHdThL",
  "key27": "zEneN3wKhBhiauYjuFMoTVZPwEQw24xYu9bKHVQhLFraX8k1ucsU35unVrhSzRLC9waqHBXefWRNLLndEUaF1vz",
  "key28": "2n8z12zqZnKpwtxwtEBvjSQpvbbzS53Cn2msvP4bQKj7TrrWFhheHMV8xzL5pFJK4BDtBm41ubNEChLRrRyV73dr",
  "key29": "4DawKStnGaauwCywmmibPgfSaZwAW9u9GvWZ8H9rN8v6zHkpjLBGDViAgGRiPEcJMCygTLTxJGSYV7Zkn9yGf3t3",
  "key30": "5UMyDtqALjajda1s4jCd5E7TuxUMwYkop2doVmyGrYfXa2NjPRkPsNmB1qLXCTrSDa1m1hMWoRxW7X5fFJbYDqfH",
  "key31": "4vWeVUpqZv3RzMuLUGgE6cJkyycWnvP3nG14KydAyVmvbbSEQicoei2seq1LNHM1uHnKNy9BhxDws1uUKsk99MCh",
  "key32": "3nZkeeBsBUKt6jURqYqRDZM2BX5WeWBL97zSqKP9qGde1tBGw81aRVg688QiwceBzCdK9feoe6RkfxtHh8yefzKW",
  "key33": "UwPfLkxHNn2HCqNHQ2MMSHYEcAKb2puumT54g6oqTW328wJYWpvXtbBM2XauCguCa2LfheUoXtCtR3e28WWgUQ2",
  "key34": "513F8hTB9UpjRaZ4us8oeK2NQmnFhGq7726Axgk34ksKiYCemxg6wf7L1RfjCfvgbNxcwR6mWcdQewPoW2pWqr4e",
  "key35": "HM3ksWYfhALst7uqEiP6j8asvsTXYLpiWMJpiw6sckd2Kub4gsQNsDMjHtvvEmMBx5a1Lpom6AUbbwz6RHE1o34",
  "key36": "5Ft6bigXUd12LP8TkyThYtWcQo91jBAgQ5cfCvpyoNXQnMk9kAgKwJMr1xN9s94QiA9SYgfy2Pwa56rxgZyynYoV",
  "key37": "2mXPCHEXVvoXRTt1zMK9U6Mb42t4b2fqbCvmXqqrJ8CXEHc5JTZih93NakRK6gD3yjxwB5ShoZCo9WAZ85FRjnC8",
  "key38": "5RAU1XqYCCuMYkwq6UekGr6YnEXTurtibH6HwFaXUkC1ZxuX793gAnxZ2f2isF7Zm14xsFowLaCCMYuog4PmMvRa",
  "key39": "4AVjvUdWHXfG4vU4yQsPdgNA7QHgA7q53LrLrLx1KeeNewdTnbpVdTW847KxgGTLxPqk1NJ3Eiogo9SvKB1uAvsW",
  "key40": "5t8fXuQqNqvu3nGJycWSk3etMRFqztCz64FCau86xoxmJRyy7qmYZFAfsfeVJe5PjE48NFCFfGLirxeaLTV1utJi",
  "key41": "5gtjFSD9TPTKBKzPBR3kR1xwWYgdw4qbGE3g9FJTxb7mCeAF9r1hZYjTP8Gua5GGi1v11hnZoH73abBRXb1Vzdxr",
  "key42": "3giHWB4CBVyP5BC9W3bi9atZziWRm1aZ3pRWAEJPbqDCwcLDzmyoRoe5cFSsbLt4HyYbs66U9wbr27ZQXdVCUHVK",
  "key43": "tguetKRbGKyMx4XCgHG8ZHMZL9taFvMT4BXmy7XESdZzwXw9e1Kbx8JGRfZ3LgPKmCm5QFbSnvsjzUJua6J7rP1",
  "key44": "sPAmuU4uokYiX1NAYVVKRrWsJgBi5azm5A9zJfQpFmJ6aiyzs8e2h7pzD9vpFAUdtbvfsfmJGnBtbT8NkWoz3u8",
  "key45": "2t4ABBJ1AFGX2ANoeeiKmPngrEirqrkXF6ZKBB96mG346FUvNj9JGt3qEsBiV2ijZLFWSNgvLudhdmUzmdkUCMuT"
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
