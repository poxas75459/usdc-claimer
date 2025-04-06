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
    "4wCrBJWWhuirsSU1EsUwAboL3mjTei6kcMEFn1eKo9uYZxfeBsdoVJtouWjEd6gSBUj6R5WnApanRBXgAdW5dSVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qVsxc4CbVK3VvQxLx31EVhLrpKSAyXWYt8kyCvvCipcFAU98C8sppWeGCR5THcJ5Mv9B55j7Yhy3jzu8sCudssG",
  "key1": "4YaEBR1TQuT24pqsyRykeoh2v5J9S4qkPgnMVqUYRELemsPXM3ozMumQKpdu796fJzRBK46JaLm47r4kLnP3Wn13",
  "key2": "215P3z75ifXqAfLbcZ3MSpZr7h6kAH23XGjCLqatoF74tkspZLunA6AK5XyRHmkf63fwW8TgaPSzUe9PbQVgZ3Av",
  "key3": "2VoDVsScPq5EBq5eo3HpkWTvpQpF5inbkHyE78ari8zA61sQUPsUsdpGrVa6CWwBSXG6Tjdpqx67mYiU6U4p6NMD",
  "key4": "3YRSBFf7Cy8WzMheeBZGZoUNmTeLT4SC4zCrG34QmeG1LRGtwjFZ7UtzvwgZTkWdJztU8La9LVQuUgHekNWoPciJ",
  "key5": "24wbXdpMEegYbFo9n79Co2hvsD4kkJ5GznX2L4DQ72HLqAQTTvFB5B93qXC5EoF4myiL8uAjJGUmTNcMpfavSSWS",
  "key6": "4GhvpbNLUnA2amZXgubvFiCmwPUUzwu5G6pjyirFHBxf6Hk1TrDqaKkSpxvwXRrUp69m4rFMdYy9vEzu15kpnZU3",
  "key7": "3uHCfatePzf8KHiCb4JmJowQoVzoRHDvVtwFrBC1MDo1b1y8SxEARyAFSxXmM1hjRWsuwDQ51avCyVi7oZFvTiPQ",
  "key8": "2QxKMEc8WVkjJNymr1pgFxWrZN6dKkctgFzmGqz8M6PL48BXuDH9zUckL4mKfVXMcoQ2JeUUHSBHdeeqK3ECQ6Hv",
  "key9": "2XMU39CrDgmzNgQ46JiVN8RBXYHkjpfcKsmdGpgTRp8MzYoPnrw6p1TfeQKfViTWgAr3HvmszoZX24DDasb1fnsN",
  "key10": "2LPNhgdCZWz2P6mqejhRnsKJx8nSBQVyEMeQBBBRNUdoLuVFvc24caXszwNBrK5Dab5dYMyA5yyUjzkNnPwyPCUJ",
  "key11": "649Zqxp79fUebaABVCAZJ4Rv2A2dzH4f6GXEGHB2KAHCgLMBs6CzZ7HgdbecrJ4nKW8n2sK66BUssiAcXViwsKLY",
  "key12": "5soK52kBoH7AmTT7U7ckE5iXVryyrRXExoongn1J2ymarrsvmjg7SDigdrNBv5h5Ure91dLpgmf49HDLhxpLA3kD",
  "key13": "kcptse31hsAmyCa3WxVL2kyAXy3cYYTXWjaMiQJz1pWqysWZLvUc7E3YFVmw5uAfeuVKkZudwQUZDAHRehyC2Gd",
  "key14": "5Zn9MM2hgCYCSGHp4A8LdEADrfWBnNjRbhffravuYM2KJHBq7ceRuK97fhg5siJVrU7irDUYvu25yQtRNp8tY1b7",
  "key15": "4pW3jfGCx92Djbzm3rJ5ssszJub6QSjc9gtXQhCZYqxfbh4RS1F9gFn8PpUHq8Vk5iSqasJw1iB95g3mPPFLEDdT",
  "key16": "4g7VyBUVva9qZV1NunMeM4Lb1mvmNLopSPZYnYR9XEA4imVMcXRQ3rTT9eBb9D9d5VWbWZcC9yZ1AqaNge7Skin6",
  "key17": "McQfX9UL2kD7wbxpeJ3TGeQwBfwWwkPfU3HHK7rWw2S6xTkjUGpGvaRxsHW7tVFwVdc6vBE2RyiVGwkn9pvL3VZ",
  "key18": "4FR8MYxQiZ85CAuzpqHCWAQj3SqvUYsRjXu2vn3zTNN9vLA5fcxf1FhB4wrogV9c1Ujr3dqDBDwsv8apBd6x9HkM",
  "key19": "125g2cQdc9DMgmkUoX546euTiyjA6XxgHbApkGWSoKgf9tFfiMxTrM5msWhCgeFXjNsEyxYK1DsB8K8i4rJqZYob",
  "key20": "kLa68XKtkhSXpHxzRWGPBWyv8k63jdmSALFkz9y96S1gEoYqnumCJqnP6HSVoSb9t1nJJbNDNNemHyB3hMbNKxr",
  "key21": "hce9hFnwZ3JvTWjwJLhnbjnEzkYLsudkL2x7g4b1QXomQprVqsaRZeCPncZR72FRKuxD5GjjMDw2dqT3aoYtssF",
  "key22": "4uZUCYxkB59LeTMxw3Rwzf88GMKrZqkicAa7zPHsuuTSxfmvYbV66W3pHNf2jEGdtWdD9iP5rAVr98gr95JFtUZQ",
  "key23": "8RwozVzYaVqvhTxYEd3EAndUJtje2bFTPpDPLdYND2NqWrXBUiwSbwEMEhGoWxizUGPCt9QucRe6V3y2NaKBT7i",
  "key24": "8AcuNcFMpJ76EvxN284EBJdiSBJwboNDGcKtXqKYBG7BF86Jtw8gKWN2iGdnWK3ForDuUUUfNymNZ6FYaQfGoCz",
  "key25": "4aWdvWshKNJt9X23SuspdwxKtJcESAr8ruDAjjDRkGSdfyVGEvmHZMUhjiBrd4Xr1yTeBa3UpXhMs2eVSgKQcSh8",
  "key26": "23JNEisF4V35LBDxjjkBChMqDMhZkaErsuCHJ7twYpynwz6Z9nhQKVoGv84XPWYDXwCG4n6hRywtbTRhoKv6UVBH",
  "key27": "rvq2a9gm2nieC4UmybeAd8aWkmJL2V5y9RYZ3WkBSJBkGYst7UG91evqJoFfaFhfmrxYGtTpWWbEZTXa2ohPGr6",
  "key28": "ZmkHUbkUPd2ErghDggavNvGtYkjQB2o4vNodzdhmLzmT3tM3NtEKLBu83T6RhUX7H2ighaH7tf4m6Cei89PTRmw",
  "key29": "5KS9HV1AjzMgSLrNGLFsSFnjWgXBtnycGAmLYX3myQtxD3rMHnHkvJiDgskPK9AmgJenwYozgNMFXVxjCo1dBhX7",
  "key30": "5dtncCzXdGrAUeRYkvP521obDR27GwhiSexYQPfaVTrVSJYiLvmJ7amxTYw5m747mxoDu5Naa8q4AasYxXNLpLi7",
  "key31": "2azj258QMTN2Kq6GftTjZo8TZmP2GESaZUGS1czieUY1tFFPh9VKvwYPX5cB361SY9r9kANQTuLPYUaWZRQkjVvX",
  "key32": "5gAH4zzNCLH4DgA9cBuGZvQ9PYo7VCqtppVmxsxWys8ZtWg9ByBDpFeu4t5s1Gc3LTfArfCCABEw7L8wofiT5M6u",
  "key33": "5BpNMtq1Qi6f7bxa9QyiupEehrBSXyA2rwKm8LnGnBMV551AoZSWfKbVGGUUMamKzza8ZKdyN6EKdFgqegKeyoff",
  "key34": "3qbQ46mX9UAeTJBxhCYwrAxcYbiyRynL9cxFD54LtV44JMP9kYXrUJkXHaTg1Bemgf8ySMt1PdZkmZiuTDEStPJ2",
  "key35": "uVm1o4iTyYr52JU6MaV8a1a5ansiytA7HMTjG7bqCYuvMJdgCVgeMwLj8hFL4fH5Nry67isGyC2SqXc1HMTWCny",
  "key36": "4syhyryBQ22nHvvw3ZFGcsVwXFyo82MyM5Egxjp7hgexjMbWqmkELGNW38N6LHncdMT3CCVSUHuzXskoQ51kfuP2",
  "key37": "58zY7eLLHHKgNnjV2mcuJsSzvZBGt5ZKbsXEmsANrq5JfM1x2q8t24xmMFmtnWgwqQJpiGoAGaocuWQpZaBnWxNq",
  "key38": "382x8ohpYoLFrpfM1Fc6be9iDtq2a5K1QSzLUpgWLRVW5PU9JLEtSLBLkRSV452wYUTkvR7HoMoo6jWvBkuHftpD",
  "key39": "iH6QVEfkHJCYkzbnEqS9Zqs977pykfaWj7HV44L9Ru6jK5fP2HstYsGLtNtVsBydVNZY8zRD8KZETtzfvzNqK7D",
  "key40": "37vW73yoQtwQntGyqSCTFfpo6cerdrvgnGHPhhFL4eH5JYnmouNVKTu6aFgUpV1XQny6LAQt8HYisL6RHe8cKXSD",
  "key41": "F58YKZX1PKwe9m9XT7t2wXhFrghd82Rh5vknJdkkSQdjrogL8tG5Y7pAQDBYLCqXV6L6PzbmxDg4k9s2vtuDpZC",
  "key42": "2jEq4Az9QFYT9BzyPvUEodNQH8yXTZxpDzMLcH6MHXNn7DjEp7Qyqi6vo9NCttBdfXup6J2qdVZ6qH3nBu3FLfNo",
  "key43": "RQG2QVx2Etw5WaYvjifn4CvyhyVTBPs3uYP7wAtgptjPYELvt3d2KGmCcFxVzNCvUFK97uNKLoBLXxigQRPkTNj",
  "key44": "2ivyAGML7FirADparPsd7oysUGfcTYKGgPt3yxCeAgpRkx8tikCjgMURrF9ugBMjAHAqvZ7LD92yAhBwV47JZJaE",
  "key45": "5rTt4oaG3dERi1eKyYCGmNstQhEqdt5QHvmaz1goV9eWZirm2h4tYVGeHHsmoPX1ZRYPiTKihgPxnq7VZCxNzRBz",
  "key46": "62AGaZRitwmTw8MnpCQt6gb9N2ft8AYbrAmP9Wr1kZpJu9Qh8FmBDKcKXLLrU3pt8KCztfiXj7yKH9KUTSoncqAr",
  "key47": "3cGjdV4M5kQ6VF5pBfYhLe8fYuVqd2AVd6jJKsYCWdqvRbBeQNuUcAm4mqiaF1ek51BZDRjWDpUWVpn7Dz8x2Tjr",
  "key48": "4D4nE7ck67WLNoQJ2WtqP8mUtt3yFCnicmBqiNYnAYciHeCgZEgHCAKbx8Foc5t4BEnqMjeD3U8AYArikubgWMPv"
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
