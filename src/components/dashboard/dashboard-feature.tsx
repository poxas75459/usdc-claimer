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
    "8LCU5vkbG7JKTpY81UAStJVWWpiu28kD3d9wf8TZMREK5f9UYPjar1i2zk2fvSfaVgSzmED9eLpVt6QppmFCxGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P8zEQ9Q99abFF3cjZwAjYGXh3tWhkRGWAikLSxNfnPxe4ZZRsrjRAKQK4GwFespsUYE8coH7TGwGxWozgzhEP2h",
  "key1": "3roA5GHcL2hU6bzpzHYdGRFqDFE6bDgZ648koJna2ix7bYnUpJ9dsVP2Bj2tg4ZGP6QFU3NAb47veZuY23jja5Eh",
  "key2": "4cjjU6rKoXJecwehaJwBdRbTCQMyEoNWedB1mbi5D888232Uq1DpeVMK856uBLobsirBmgLCYvr9QrJgrM1qsThY",
  "key3": "4wdQs69KuCs7DgGzchjP4PnHGUfhaetD5S8cMAPjmV11VdukDnRkZVdVPgkZKTCLHUCnZrMVd5KPWpGiUPZPjMy4",
  "key4": "5SCMaBGqzrsguBQsUSB8ewXpFHENKEWhJhDV4FuAyw9AzwjXSYeyoLd57jp1fcBfnWZ9kwkHxncugznXP5jEc5Uy",
  "key5": "55Tiid2Gg5jcej71VwBvB1mKYfX2FhnhHNKPrS2USfuRuzf9jSuEjEM2CQ9DMbLKBSaJqitSAL4nzo9WNawSVwb5",
  "key6": "2rSBWDyUpLyDVbxCrWvsjRJTfPqKoWtZmQdpHUFZb98FhzwVbRsmjXcjHgqu3f7HVVq66fXz1YJdiz1qVCEswCNs",
  "key7": "4iTuw45RtGF3m6SBx3JWPQDAmDunntJNwCcHCmHBrNsBAPAMUBW4rfmempgnvib9AjCB4oypS7LkbhEGWXCmzqUT",
  "key8": "3HmdwEzJ1NmzM7KvLPqUwysxv3EbWWyGh3DQvF4KvqnHFxEddxqA42PcEgn42B9ZQyERbh8j8HEk2YYatuXFUbEP",
  "key9": "31uhhnzvaU4fE9dzmGVAqWrwwEsGzztgEZF5DFAPQ638n78WykF6Qq5SS7V79QiWqRwewTuuqPeuXg7CxMf8ukeE",
  "key10": "3c2ow2kzPG2ZrfZ2oL5ucxwtegkxF27dHLuZZwXLdsaR1aG5dss6cRNNCLT8K5sVq27yhM8uGzqeueK8iEd75Gq3",
  "key11": "3dJ9FbAR6SVHKKzbzNaxCU2fa416LzDYUjqbX4D3FD26ZhK3EQc5JR5pmGghXiZhFtqZFdDUci3hmsSPxqSZWmX",
  "key12": "5kmfsHbqhsCZE8UBZ3H8xaae4DG3AsnZb8VuPLkGx7bFqBv5c6rZLw62yPFup7wEhAVjW9SDAH4813gmE3oMDec3",
  "key13": "4Fr1JBCAcpXvMoNc19fgr74F4TX9TTkDASbHbKb2uFwEyz6748ikZNDroDXGDawp11K3C9jQpbiHH942VdYHCxt",
  "key14": "AWP2ECUWF3JPHEzLtqyR2GXzqmeqPLVLbhMhFaJctoQowh1KCEPZE3b3HRqkYoWxdrtosn2Nn8bGXtaWpS1hbYa",
  "key15": "64oTL6teKwhEz83aUqsdJk41n7xp6uw22NSwxPJU2SMWXaxb51HeWXYy7ucHz4dxd3inA1Z2LDiTPrmyCjUJ9UbN",
  "key16": "4kNcNrNqXfETLort6gLorCcj1SVCdzxPgRGW7dHrWNbDXy7WUpLSt9dVux3r44Je5UUYWV7b5AqdLoyYSHLN2jCh",
  "key17": "4Gqq6cd6CJSAmjoixaqRtfTJKTekLgL93ZgB7dbhQvVvXZozXBYKQDEtZs7qwnx2sxDy6cxpbRSroUrdfWhVHNgz",
  "key18": "3Jh9ey2Cpm8Dp1f2rCyKt52sH7CiGZ3tRdVHTBkk5B8rm4iMczvcvBFwSTaH1FsAKYtFYcVd281aVoU6aPPVfeHS",
  "key19": "5kEBnHMrFQF88MWMsM5WKpvUt3J3e6AXMCU4AbwJ6Zj9BMqiGGcvkufz3hgJK95KaeuZfx4LawfmViTEEZ61U5WR",
  "key20": "3tstGJXT99kDxWPsEpEH7NH5nrwgwE8fWf52EXjiiGZ3vSeXEb7MWLqfq48RaR9vVB8N88XErrtXP7jW2UgHbbnH",
  "key21": "4oP7ABsqbEqsreaNb4uEMB6iRdSnThTas1zLTZzmJofkahew3YRji3s5PhbfWG1m46kERVUoWittiw5toKZuQ5cw",
  "key22": "54nW8kx9FnpxB5KpMFYWdSrs6Qczk9g9JkDdA5h3bnGhTV2pJRmLBr31ZPyUSDCs12RabyBz8SH5kYeVSTQUWddt",
  "key23": "657qKwiunnFMQ2LAkdUAQs2Yfbd3U2KD5fHQhiczChvdtjNci56LTYHTupxPR3qFSiKw2ZCiyqB1Mzn8iy4Z7fNx",
  "key24": "57H4TZNK2cxephoEHRGVsit6SJ2WRhKDAu7n2B2UvJJKd2vWnd3aVEDHoqNwJWMmcZLpuyCfjSgNazSKz2qQKoPU",
  "key25": "5msjSGEoQNgm3zpfskiFXcx4vrLzVyyZs7MGUoUY87GnmPtU223Zwy8M2sMsEXCMyA7xmYvo4ErGCtanxFz6UwNV",
  "key26": "4PnDsGcX9tbJR8QjVRmYzHfkM5HVrwVTzEpEmeECD3H5NH86d6uhQmrvLT6SCL8m98M2UCEpwa5Wi7zkecctiguC",
  "key27": "59G6yM6V2TXrdXzuHiFLxDvL4V1SjUkwjNDhyMoC7br5jMRio2o6gCUcukZBTFwodWMKApvFQdRKQHobRBo4jWFM",
  "key28": "XavTG6oFPypHDGBwyaDyVa8gAZcPxA6qnBZP6Z5XVDQjGj3b5t6dfmxztVGAC7dDCcZtiuXZGHHbSry6w1EkszD",
  "key29": "nXgmLRsuoFtt7KnLBs1UQEpQgXacT5iBm5AMjef2qmW5BqhdnAfmnZh8r2gDA1gfA8nYEcWEXkGKwYTd2xQUWnF",
  "key30": "2MHyj5WuBPMe4SEuX2HVZ61M3D6RMu2FWQPL5UkhbpGPU74dpiYHZWqbG3e9WHbZ7EuzF4K8j3LSvTd3y4hXbaS1",
  "key31": "4h4icKkPyRiNyR4uejKjBHR1tfF7kQK3Xy38Ge1fzdcwHhguuG29CWtYbo7rzBUqNd5eHD9RSjWyhiYnFoRQz66e",
  "key32": "3TpmVRiaNCiwHn1CRuzG2q86g2bkJaHC3hQiBgkmF9mRo6UpPAyTZYsXJ74PgMEMiCFnTXoFfhX37gfJBCBYCSGy",
  "key33": "61zSNhvyHpNHhBvvg7xPtZRgJEtQ4YyatvX8gjNMCzDuxAVH6GMM5yw5CAELVfJcZyMjfTAQMxWYy9Q96JnkZR74",
  "key34": "2a7XJQTYT5HouvrnP5nb8MhNADcyYk6g7akuNxd1aZPwHoxtTaAeVRisXGpX5FxaBsDaQm9kBT4vx5YXioJWT1nH",
  "key35": "4ATZtU3A2d9dSKhpVweMNg71BdGZAWiLWBqMqEaGpo44qPFdwMEn8U2nfXjfXcKAspW117x2iVSjW5RzA1eBctAp",
  "key36": "NS2BYn8L6LjCdnBqESbsoSdgf8j5CAa7reSCKAcFixatT5yJ67kyWFhDACw2LmQ9Bt1ffYzjNdBbzcqsoXwteaU",
  "key37": "47M8xTTeYd6PWqDyApqafw3RU8eLRqMtCVHujqEwNCq6SPeBuF95cCznprG7mboAo4uaSjD16Y9gto9qnQW9Qwvs",
  "key38": "9YbnckjtX8pMwMUDQsDuW3MpqaS2Vzef7r8Ak4Ssu2Ud5amC6DXewCYTaCiw7jeX8DJFX9ptPRbPx5hQCayRiay",
  "key39": "2ynCtpJk6iQHZvCHr5yZwQxkiMRSG7MnKUAZ8fCCL39CjQVMrR5bdwU5CmZdou46EiyCUsWBujWqGMqWG1C4ApZq",
  "key40": "4wQyb9AhZBG2aZtMSvs4VDjdoJVgNxs4fC28JJCvRCA8Z9YpYU8gGoFfzsdTL1Lopv3zr68fNJYaMXBFmWg3Kkbn",
  "key41": "5PbBJ4yAuFXB4coxAmNBarLHdT1xsov4ZBguqveQkUZd9fP5Aq4mkVq2RnbV9XswpKii8PjaMPy2VM8yEeYmT9RC",
  "key42": "B3VyAb4LG2nBDaB12asoLhHnw3C5xZHskxUR2PxLd7SiZpEAGQQKsu7xe6mguioNjwRHj52weY2fZL4dD5j2DWW",
  "key43": "4Tiy6kVvibhrFqiautWsMCze9ktHe1vjYbAceRwoKJ2U7nN1NxcAV8ChMKatsCfS34wd5wRKvrix5YsDLyhtU3ts",
  "key44": "Hvp5FNtCAJjf41PML8L9EHLZFf55BKf9YdVSmGZ43VsiXVNsRoz5126V7yirA3babBeBFKrqr4WV2FPsyuviWUM",
  "key45": "4PbYD22LmvuTNvQYgerdo8L91DYSEuEVFaGZ7HMa4mVtFntfGYnUGRZz8ghvsdicDbNbxpqeLvsbtxRtLcdL3Ysp"
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
