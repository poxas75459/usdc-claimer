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
    "3kcwRtQuVmfTFLTfikQWHPx5sn3oXfVbPLNeYCKsJZgx7W3r8xjzsKn87KtvztmboNNppp2vmw4gwj8LC2rmcHj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KKyQWP7d3aJEU6YkQ5ncGcjwkqAry3tqeiYj9ePPTJFiFFoLz3eap3RjtumKZDaQ1UdLRqfLwi8YiNWR9VARKN5",
  "key1": "rZ2Y2mn2LfmgPN5NgDmmBcg5LUaM9NuuAmfxAf3Sfws1veGMUhAYNYXRD7QvMDDjsALieMyf93e1rpyXgdKCtQH",
  "key2": "5pj8vq9QahxsJ17MziEF2XUUbAg1SnJhkhUhkFyWwXbqAuLzYtz25jTCVvL8rvnT6Zf6Licxm8GC3JnPp7LAcMfy",
  "key3": "2PhtVvPtGASXEAYPopVQxPGH55A5wWmrWorM1FAyXhWiW1LgWBJjShQX3WCtLNP4ekGUb7NCoiPELTPWHwG6VzgP",
  "key4": "5tRWKEah611f6iUA68UPmQEWUTLn9aAMkY1UL7H1sPcxGkP9AYXy6cZS2euLGTCSEj3dviNQsstqiujwFTGARiJS",
  "key5": "2FqohoBJD9CmMvAUQi8v9j8E347tcTjTTFzLd9iyWM4GX2nZ92QuDfHzLRtnwzFzZKC6BXCtHPugVWtBmyWaCJ4S",
  "key6": "3GiLAu5hZwEQcW4tuxVKg6BqkwkZjTQa8Jja8L5C21oy9aiZ34dGYGHJLDEYfvkwuZJxFgzNSRLz84nJT7MhrE2z",
  "key7": "4TW5UhCCMsjGvi2YvTU9QfhMY96qaz66v1v6ReGeuHQukEyLuHSJKTamQqPm4ssf4Vs69v4fA2Y2AnFpSLJyDi3Q",
  "key8": "4PkeEjdbuxEe4H9s73p7o37nMtUDi6rVJ9GPVocE7nots5NbPmKJpCTDdsiHrXkyMVm5DMXjqe1saVxuqgwGqPyD",
  "key9": "5Mv4xY2LLguHzWwydhAX5x4sw7drmH9rURDA796u6grNcSq2HadVQq3WXZTpjgQwQvscN69aGbx837JSoLLpNPVV",
  "key10": "2FGN6ppWqcWSay3AxmgykxvPqTknNSQDjQm9DLNrPnHmSNwBenPRtUAwcVZF1JQPHTQNDicUqcMytru8JEWRwZgE",
  "key11": "5beTdvqaCTC4SCSm1Q4c5n7NdsNMHnEcPq7Z8MJuYd5uoVoTFE6k2oFQAJpbvB8jkEE4Kj1KHAJv5Jwanx8GjbiK",
  "key12": "67ewJVZQHn9kC5VuftUANKZccjkpK5FgAvzv2xnUPP5zEWuJRKn5rtgcoajxVxSaLCBAjuf2x7uXfVhNVPmp3tca",
  "key13": "4oqtU3vj7PhT2bcPZbtr4Hv3tAjwbqwaHQ2bbZF4XWoWQc9BAUpcK2iKzvTvTNzucRjjHidGz5aJwz9JirJTt1Br",
  "key14": "9wvCvziH5UtWyC16gBE6f6StGVBqsXUEMYCJjWkza7PiV93zRjhLSebq2MN42KsPvCntUB4pRdCwJvTY5Kdez8t",
  "key15": "5L1LaFj3bxthQLxPVw1y8UGB9Z2EbQ8dvyARcYKLYfo7seSdJpvSqc7Sa5caqnTiENpFNJ1d1RPFNEPZFJbKwm2C",
  "key16": "5716inuBZ3wmQDAeEzdLnhCdekxKc3fR6joGdHL4e94KrzPwNtVgy533trP7w9va6KzUiP4UePwCUWzvYLxxC4Cu",
  "key17": "FeDbNicGNhV983WF2FnyZTSPtA5aUC8T642inxJ218xnU8qTbBiJDA3QZoCz1cNREZxfi3tahEJ7U4h874Yy9e6",
  "key18": "3dXf7XLogCK5WN3bLhQCDxbbNd46uDWY2Ze2fSk24qGGNVcBYZ3QRpEmW9dC4owmQzicHxAN4z5m9xTiWdNqqmpT",
  "key19": "3nxMVx5pehqhC6CH6rqdnjijsQkYKNMBGTES8542qbCfH6KgPVqXGvyupKfddV2vMecmqZW7jyyjQi8kjZrz1Zvd",
  "key20": "v9N28r8V6o9XDSQLwgKt7exda9WU5ohctgNat463PeCUPR2VsEbmr4xtJj5SYJPiNB7WG2G2izpiKP6GAHDXDYG",
  "key21": "e21sGaw13VXYhjVoTF6eGmxptRMAiwEBW97AC3DPjEXwdtKQAJtzfRKwNJSxCFTziXrPQNN9tpy9YWwmZ6m4eoh",
  "key22": "5dwunitPfSYc6krJxMDCarD1AqnCE8rumeZM4qdywsRVG4b5655AGyDxHEvavsT3aJF1o4ozndL5qE1GyQsXqMTa",
  "key23": "2PmrPEg8VXik7qVRbSqH1BWZySXTE23fjitx7qxteTnBKZKMEQYNarcc7X9xnH21mGxy5TGUPy4NXLsGKVJhbZJq",
  "key24": "VQVKgTUZzjTDqzWCJPs8onewAsk2C5EcwAgg52MJgZmZXzTYdQggpFp8ajb5gMSWbbQDTJBfDfH5ndvyERu1sYV",
  "key25": "46YXdyuayVsFt9MGjXQuHazaJGGgpbS2pRzdLDuvBab8vvUxcrqSvoikz3hkj35PqF3fjnmrMfdAPZYrQLV4irGn",
  "key26": "52h8ZnnDjQqZHY2NTFTPVHF18M1c2JGPwVQqE4sevSZX383Ndp1DstAxHnytaScuVp5AiKDzVtBb3y2vaNWQvUsH",
  "key27": "3nHxw8d4UBuUQYh2chSyD4q2YfktkZ2gLrMfhPsTMp5CuVnS6XGod3FmsAiZRwHxFiCi9WkJQX4LX3vkSqxNMWxh",
  "key28": "5pJ5jZj7keqy92wHShksPBUXKMzekfnXyGSsRBeFo51rL8BR7dKaCH72PF5iwZ3dbfMPw5JXiu5dDo81nL7Qm6dY",
  "key29": "5EB9yZqMFpEm6NNv5fv2PxTfuKMMGEjoiY9V9YhBzhzarPVWqTizUCRBVKR3y68Z9GoB9vk4p4i5VPxkc29PUfn1",
  "key30": "57WTHUaiTDCYhjFtdMq23iANaekv8j1U3XuZNmn8pSiLmrRXJ4oVGec5a7UPBR3JwTJeTYvU25mXBarWpZr4E8VP",
  "key31": "4Fi2uie4rjjGmDjLyKTEPw4bugbWwbYXCQd4pjz4bjpifS3kb6w5FFhL8fXVbEXrzj3ea4eKpUdjyDJsRnemF8Hi",
  "key32": "3RJfCeERSduAT4jf7F5B1JtXF3v6cmFPxos8YTCWHjagdPQqdbgftgKjbddjGjmSR9J2M6uCYCkjh4YYeRwzGGUp",
  "key33": "4N7GWtGFeT5aJupVr7E9pKbimNxS5Udk1D6YVcv8hDs6wPffKRDKxy3hPNcjDvL8m5ScMLRLkQiefLfv6vpzQKh3",
  "key34": "3g2r9fE22qN7mnJsmr1J1ZXPqnLPXFEo6KqSYCK63cmDUxg2dLBgJAuj8vcjgdsxJkUy3kLawaXK8e8ZA5UwphMY",
  "key35": "65PE1LjgA9wxvCNFCEXSLyJRNQqHCWnaDB3PDQVe9MgsBLLBAaEHYg6pzPBUd1sNzL9wxdFcHEX9bigYM7gDfFCh",
  "key36": "3C4RAAdqGxurBMvoSXZHazCJLtFvqHTJgzZY9gXufKrz1A8GugX6nNppYMrzNw8xaBcqcUpCALrJYxkTU5MiGr9n",
  "key37": "5GXYMiAtPooDRMciCFk3Pr8pZkPfja1nh2pybaCxHfE9LeW7uEgiut65MvXzpmSKT1EsRoX46FFjYqhcmMHUDgPr",
  "key38": "2EJRcPxLQHNDYVWL6ExDoBdNNFdgrRzKhqJPTL2xXLDm936Y7M9C58hTZBLcTafGGEThNCnEDAQm78axGTp1fxLA",
  "key39": "3posa7vLJWfUZXmT8sQDAPmdBi3SHpvYvX7SkEKo9c1Dpjd7tVXfC4HwU6B67YyS9wh7HukCbSGuPk51Q2GtdgKq",
  "key40": "3LnPQ3QJp3Kvt4W8e13hNQkhk5tr2GhfvQ7MwD5UVzypgLexgTp5X3qxzryAabZGHMhuo1wEMkQXxfMws7Xpoh9u",
  "key41": "2Tk2TLjhuY6ubTVboEpFujPda6dUtU75dRRzcGGeppuHGBXkmVwx7AfoZi6hpzm9ihXXDj6Wv1PXLUzYHn9bkyn1",
  "key42": "5DD14oid6QFxqv17HyW3KX6A46VKDG4kfC9ZB2XRyEpqPeznse2cekzCuaMXfoq8qskLNxnoGCndZVE9bAcaFMcw"
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
