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
    "fZdUxdJUFtXNgQY7XRSvDrkb5DGnCGtcsqnGSmQFzkGjNqYAU4oA2RiQnHTMcUQT3nX1yrQn9LKPRWx3SHZxDCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BTshZCxdR7sxSJc5guGeH2DeY6FxijRqsVNm5TMADtZqfMoP3GKjCuBRmoecF6QDDx5iaGcFBjSDfP9jNF4Q2HZ",
  "key1": "25rJATfCV2TxQ8NGHWtDduPviFqgo3NWvzQZpFGoFNjFNw8nXorAHPSFSQPTt171HgDE6stRChE24YztLJfVtPLf",
  "key2": "wDZJ3T5acZfr6CyzLKfv5KXmc35R1v2CPD4kquZosK67YVvXQmwRqWU6sLFaGMLJFKPS6Yh9HJErjb6RCNDEUBL",
  "key3": "3HboRAkNmENWDd4hTNCYNfwDT3PqpATRgBtAWgYVREhcyfgG3noy7sdx1snfvr5yGw4ZQKbVuHqbkoteYETRKBaA",
  "key4": "5JKGKf6Fd6hr6jq77gV7oPgAuMKkgvCUpHx3B4rqGbhoPqa96BEiHG8UGvh9onTKhmipLgijTbhuyuf1VmQMUUCw",
  "key5": "57v8z3ytcTAwF3TaumAehUhLvVXDCHkoNCKWqSGs4o95TC6ZVZGg25wVXG2yzG6fPXyb7mqjj5fUHy5Hxp4n5pkA",
  "key6": "s55YL9P8en7D1522xYr7Sso271YRKweseFYPZ3jzpJQaM7KZgwyqR3VpwZ1ifxy7ucsFXiJbMhJGybh9hVgDBvo",
  "key7": "5CjQysk4QVKzmBH55a1HAyBqnNF2MEa3ZBzD47BV3kCQQ9UuvvTuG8s1SUvRzyB22AUQWk4y7CfSQGpZaYgFyWna",
  "key8": "3fptvbVSjM6L4x236KVpSKXu29MENVDT6cznsejPJYX7PYofZxGohXr7a1HPPH5BGVQVkJRCo6EKbjJDmDsR54Fu",
  "key9": "4cDPo1oFwCFWaJyNmYnJMReAjgUjcZTP6XYRjAo5Uq1UiqvMMrzMqTKtfKt6bd82Eosv3f7W6uEJaArWtgZ7tVgS",
  "key10": "ezqyRDKeVMgbiCmWobcvckeuypnxUteQZwmd298y3F6tC35U7zeUpbvn2R2ojmnjExkrVVbu9ynd7FibW8ocGhA",
  "key11": "5fmvMDpCW845PCMTsFaNUgEx6AMRPM8SPvNmdPbrfq8596q4uDbuDZD23NXExc55smXkHLuGPywB4Q4MkZiaPoCQ",
  "key12": "2V1Eg2vbx9rCcvKRwJtUrm6bfed92BUg6yYuyCiLYNzau7dAtPRDrPdRR4fKyry4JQDKFGf4VHpKfELgTWv5PdQb",
  "key13": "3VABSt5wvbhdudhpBwWiPUwDHm5wG2LnitMVxmRzMVB87ctudeT5UdgkTRMtEtUeWgafGjosy7z5HSauVLXJH6NH",
  "key14": "3EahwXGbvqi7qFckNhpw4knyArnB4tFRa346YgkhNQUq8bG6ZDMdy8TNmu2r29PHYXM1tvYGPidrbrrdmb9opoHt",
  "key15": "4VBdP7svzDNZrdJuqUZLYMgD75ZqQG5CMQQXnc2E1Fv86k9XCscRbc8KyKbMWehXda9JkV6HS2bWrpHV68ZhikPD",
  "key16": "52LwjtMRhn18yo23mxjLUu5mx3MgYs4cjezNpdJ4YG6nhyTNqcACj5ZzhQbBykyMtWcuKaXkUNQbfaCcSVxqrqsL",
  "key17": "3fRF6x9DEi5TxdpiztGjzY8AAKyBcfbxBoCuAp72WGnEvJPXzcQBckam4Ref8PgNv6WrpJbNBhPaS548so3FBoC1",
  "key18": "474VLv9aXNs6oV22tiZ8NVhHdP6E1fRbEiCBgGzqJehva2aFj659MuHysSo2XPtb4he6apKHuTWFX9sDbjvEMqo",
  "key19": "3Cntq5Wn2848muEarEpxo9XFnnBdjHtxLWUg3o5LUu85d6WZZWmieGDN2hc2oLxWbNgg8mCYcVFW9CbsUzzoPKVC",
  "key20": "44dxTk3ecGUzoPYuHhjSQTbz42EEZGMLtEpaRMq53kqAR1aMgexThA9m8tp1fdnTByusyxA3XQYW8K1SdM7foYUx",
  "key21": "4f5JD47aR3yeAwtn5osMbeuX15tdBdHug9EwvFnxBzTLGShXTVssf7pFgbfTfa5W7tQeS7PPTvPV5BfJe9S2PTJk",
  "key22": "2Eu3YLhnqq3x6cMnNeKy87YGjewuLiRYenFoN4C4cn4Pb4R2CTjMgwtyz4ycoGJDzGS3Ex7iqu79ayzo1DgBGBnt",
  "key23": "LnDTEw59zCGT3rXvsGkyho2sbYb4FYEwtnbqv3YhSQMyREPYAnieoP5VhSsM9wFBshfXN4EBA4YXvvMJLL1q8cS",
  "key24": "66nrLrHZpQ4vb3TXoA9Xa3WcUGGSbt6RZHMR3PwHR6HDyp5P1CJxBDUFs2FWpvoAJrPkQxWJESwx1YEc8bDzbiVn",
  "key25": "4WCMRQFs3sYToAht1Lgzn3ew9AfzsGRhAUEhMuii9CFSvN5ZCrUtP6cguaAWaL4a53jA1RuZ7GoCLwFszqLGestx",
  "key26": "33T8AxfjgLypUkiMKAdW9dteGhMsRNCEWRKHnJYnySxKxMBLYYhWx34RjgFRKjzzaTr3DRg8wii547TjM3qzktRZ",
  "key27": "2o6qdsgoUo3NiHsApGvC55nMsPZV1nAdUzADifR9xe37umqkUgDbayWM3Eb67vqDxeujYaxaA7tykHw2MPqg2rJ",
  "key28": "2asJpMUwTBgBS2atrDUgZpJ93HozdA3xtTLBKEKQ1i7v3fsT5FVap7eE1VbBCosYkUhtBpVukpo64gcsgFfkXiH1",
  "key29": "5i5xhADKsPWaH6h8Zj244563WN9F7Bz7dwTmDJRCNGphCjfgqBwfiHkgvH2DQMGaSicSSgPvNGKZbuJvz9q2mcir",
  "key30": "2DcBkfrK6snBBSVtFkWaWTPCwXD39J3LLaWtZbCk9L1j9xtMR6so8GBtVRqXrGYwVocaU2k8pky4885z2gfWVG5k",
  "key31": "5MDtGbqaShS9ks8WwDkzHZZSfaHLvhZ7uMEy9qLhVfXSuqQXokNbMgjCJxEesM1f7pGEjHPD59cobbcRsCmCNN6Y",
  "key32": "4RarTEAxgUYof6ynZfg3miF4Rfa9k5XYnHms6C8bqhEjeBKnGptjScqX6qZWVzRaDNstYZy5ksYM3A9ohFKnGEBp",
  "key33": "UkKNJDaNzVTSUSEYTUce9advjQoXWcBiCLr9mQDXHLJ2sUFUKwiBMSxwDaG1CFuD766t6Xk4qdND26BCpCzB9ES",
  "key34": "5ofjFburE4Xv1wRMBLdE8x5ViiweeUs54kQBVAndh5BSuCj76Mwm3XFUKmByo8vwTnXSASdZBzrbyzHdKq9om33o",
  "key35": "5He7E5YARWPV6sB4VhCdJHJ5emLBsi8hNrhrUspLbojVj1N62LrS3TQGhdWyzr3iNFgL21acoNhKPLs9DgGc2u74",
  "key36": "4SU3J4iqTYvaFQW2a1Cw5fds3aEk13D64ESsZbFY12DxFQRzoYwAve4dVfYsNZgs1MTKEVxfAehwJ2RdQTrrRhzG",
  "key37": "4kLUpBnsuVpijG3EGea4TJLuVUKpXzGbm34fiPPx7xoHZULo3wxavdHAUa69W3VcSEjyz782oPUBRGT4Fy7bJy1w",
  "key38": "39qJSt58Aph8cw7asVeWdbVStevifpgL43K4z6L7Pu4Zy5g1bd6dbvXfjgLBLitf3FDdVn5FsHjTSxiEi6CmgPK",
  "key39": "4ExHEFH467uxjFJJkzPf5CX36XZDCkT8b2q5nsXstm23kdV4nMKh2nvK68vd5huCUVSde4QYE7EJ1H7tLKeYB8uR",
  "key40": "8VDhZBeQXxGoj3vqPJ2aW2LcduY7kVJYzHnoDoP3u9uQ76De42ucH6kd4ZajmzbQ7voNSuw86QvnGzyK2NhzzKz",
  "key41": "tvpTNfMqPaHN8yrg7WBU219sr7gkiHEsi8AzfVjDScdKsSXZBcjQdvW5U62SYUZ1Kxq96Ge2D9CstpBMghybquJ",
  "key42": "4mkA7p4kBS4LKCzJGTHTbsF9r75PPCp27RGTKnDEj4cn8cGdJ9hR6G7EAvhSW1ESSEnQvyqeZfkSS5RPEHJWXKsg",
  "key43": "2MNYR8nkrVSJkMsyGepjghVwFiXyyJzC7GcUEijepi1kprFKuENDk3EniPEJ4ui9rBWSxorUYUmaH65cwEzThmAg",
  "key44": "2VqgrMTMb8S7ep9zUF91nRKqtYhMgXAJ5oGcvJMQnoZYxvSU1JVhP86dKLU2fSXUVdQtS9vXnENGDL1WcT1tYsUm",
  "key45": "3GPWy5vdtkuerUrEM37MQjWLkaxWSrLLiPZPytGn71Wv8zAdBMaR6Vnn1xinxAyPDHXASi281u1FjMxhETqZJJzs",
  "key46": "3mZ9t3YtRNHYEwZHzAqhjSJZCkrhLdiUEd7SZSww2k7q5T6UZSbGyecmAn3xQALFkCtoc5FzV5DwjWTr8oDwD1Z8",
  "key47": "oHcRD7Nq9DveidqRtGrJTXcJ6MT6udZRkuKGwLdXrUtoL9WnJ8nJfqKsmEjt7GpqVZWCdPgTim7bhuXMCwW2nAM",
  "key48": "43KtNEpsRXTVfWW2niiYDxptaRdEkd9mX3dtNUdyWcGj717qZ73A6aXJ28eCSuJtV6wEFe7U6igeFvpC68LATWCb",
  "key49": "wsM4H2Qg5KL5xcXM9k2dX4FQZHe5duGZ5R27sSbgagWtmCLWtW6AdxtjLjRGNsYYAS3Ao2zLD5FD2znRjoVXEak"
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
