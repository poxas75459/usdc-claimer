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
    "3zNRF9mRKRSix4YHxQvb56nfowVoTP9YGh1Sc7iFnBpecmyyJfrsP8f4LemwHztvj1UBo9U8HRCW2LC6EHbvgPe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DghPe92iHJeCtcU7xvFqjNT7RzUHWJ4bvj9xYLzvPTjwUSU5UNBoyZqiiuAAZEwAyrWYjvGcghDu6awhYyF7P1o",
  "key1": "5YEFvx5ewbcLYdXJ5mtqqco5MmGvLrYqFxsZeafn7BoQrqoSboQzHcW2dM7v7YZGvmKif1GSPgSAptPJK32UaDKP",
  "key2": "4xqsRfxtSANYnXFeScimFm5B3arLFiezZpqJwz1TH9ZV2qbpT45EdUgipv6eii1YMEf895AqDkZV8ppCFXKdD2MW",
  "key3": "5tMKHt87ZQdmarmDhehQnPGtS8Rk8mLzupZe4LDLfjp2ge9DVkbqAHL3i2jeQaxW85JtUbs75gCzGBqpERv9aN9w",
  "key4": "2zGrgmbNtS5xiwp9jy8P8Ecw381YhuQQ9dtPjk3QcfaJB6csGUEdFF6bphATEeyk8QKGU7s2nDrRsFJexgeHUpsy",
  "key5": "22nzo1qHYzpScvhwkHNvXu1KwsLTSTLh5wuhc1zTmfEQZTNiJobupukvNcVcUdHL7F3QwQKFcvQoyd7C5CLddrX7",
  "key6": "3DgcNrircnJZq4pDEbLpBRq5QEGuvPwmWB3D2a71RYoYEaq7uyrAC4VoWPdqCC2tAh7FNnN3KdaZZVbTKUpXoog1",
  "key7": "4DZamdRqwJCCaQKy56E38YThB9wCk9RB3PtVmopotGsXoDgn5jHjJnfFK2MPFviT36T45afABtFgmeNmv6Z7qgB6",
  "key8": "3vZguFXrdTaC9vG1AXZXKbPAyyi6cViv5jqfhRYVZ8thJJbEvDTcc5CofURsPYeApqFS7fe5sYAxKrh1obW4dbDF",
  "key9": "41xcfMnha5sx3YaaYAttiH8fZPKnbCsS3o6VeViBX8nQ6Anv6SNFaY9dXedQF5kAhkMsaQ4EpTLGusRxu8A91M72",
  "key10": "3MrphQwAEwFEX2kSMVgyjgvvXD8dHYkajq1MFN3dFVrYeHRrf6kDYNNoboVUC2JCiGWCEQTD8Ziamg2g7EEUg3Vd",
  "key11": "65zP2FVEKAUJ64SzJ2NBaFQ495fKzou1V4hgd9j46hkTSqB6tZp3CRCdHyDDwP7SovbVXvRrFjM6txcT4ndoTjdU",
  "key12": "435esTbnfWWZoTcNbQD5LisvzsFwAiVw818aBJVaSN63UYsGATfw98irhytDgLb6WAnTcTTR76FBh1WmasCKQGxA",
  "key13": "4wZP1cu1qHq3JxWyGDjG5y8HjnjCht3sGCrsk8uXUKuKdNauTRpARDLn7EdL96c86SwrJpK4TndUTBUkTkQwVRag",
  "key14": "4cP1BNUDqovtMoWXKUyekPgjpGiBFx8LxJtzd7opAPhUBtRKCnrnJFwmd3sG8hu9HpiEMW2Txe8nyf3fd1wtf3Ey",
  "key15": "2TqvW8WSHtVaPgLeQeiGw4ZYf5GoKP93LB9dwch8R4kfJJfrg42tkqJk7AUExPsTDFwCAYt31NRZSKtz97ZPo8Gg",
  "key16": "3WUU1ptbQRcVbHBMQFaTUYcE8oao7ddy8JSMBpAU7Xbcr8P5wdRGVdcDxHBr6WSFDbUMym2VxEmDAytTMvMY5dAR",
  "key17": "4zs59K1q5jJA7gYmVWaR4PTGGD1VdeCP2tzyDMC9FdaQukmtiRBkpcq4JF6eV1YeKj2NT6Zg7XTZAsbSurSrLkXg",
  "key18": "2omC46HaaxH8j3xNbkq9Q6P9diU2o3HkmNzp75b3YkDTE9fD2bbv4WaLBAoeXA4VmNekWnj5jZ43K8Nz7tSbARDd",
  "key19": "486rE9dq3PEvT3iihA7QcVXgLXGZvwTwECC2xTQykA13vQdbFdeN4MgT8zpCbYLNzLAMV9vCrqP9Ai2rFBqTDuPL",
  "key20": "62qSmTvovtsmHf2wVREg72yRX7tm6ukNRbMhdVz9dEjCufrztVAwGnWGJZNjLcDXgsgwQhbTuvzHXDdrRkR2Hpaf",
  "key21": "4DBr6bcWVpABP6iRctZfg2gtQK2u8ZsMrCFFtqyjsWitF4crk734f1UyqfR4eCi9WgmZHHAa1FvTkTgR3qhLFSRz",
  "key22": "aSyG5S1La2LPMcuq9T31agC7kv21FjdzSAHBdR1xKS5bbSiwaPpzziEaWZDk3gpBoNW3525We2AuNSg3zLwPFrK",
  "key23": "5EzYygDWjfe7szAkjpj1oZuxM7ZRSgapHtquwp4grzMcQmJNX5jTvsouBfdYfxubAgLxWHPh27XqVR3wUQvGf4Gc",
  "key24": "gK9o4E7A3QHC1GzbLod8A8LGkD34YtN8D1BomiWVKMzzQneM6fdP2LTehuimrg8Sni64R8NGrTxmuMxsoZvf61B",
  "key25": "5aT29wRBC9AsYDt3e5LDTh5Vaz4im1BeKh8G3ocMww9pkBuQwBHz6r8rbtf8ShoXwC6WfpTJDHdU8RT5WqdM6yy",
  "key26": "5Y7dau1ULuRQ9wxGdKETy5N3yTvZvg6oHHTXTQ1qnKeyz81x3ozNKTCeT4odMLGk7Y5zDNjJ5dMtRT8oM7BfRgo3",
  "key27": "2dwiUqzYBU78CyQcUy4Wq41jJ839SRMgbxYWxayY543r5pZEGcrcXzwh56kRtgkuTcEPEF6JGh4N15rzc4kWB7mG",
  "key28": "XkcVdQHzE6qh3FNc6jp6yieNrB1a8rJcgNrgCZNdMv2ut1KE6zTAeMif2rBXLoCpmeaGt6TxGp3YJ96tFUejJeN",
  "key29": "5VG41nmp3vsjM9hkjEDYCpSXL1AdEYBCNHV21EvDfbBfFfkdnwTDPUcfXWtgiJB9Wd4xkAXefhLujPXTeY4c9jH",
  "key30": "35BNAWnhyN4bYCyEm91uYcMyZ45BQzsUgwGSSyNqcv9nCdSqZ9zwgx4Kjf2x8uwLEkERBq5d1PEg7c8ieCP2C45W",
  "key31": "5gJMydMxDEYX7Q9Qba9gUXXXoiybdv79w8Db6JJE9GGz5bkcoYTsXS9BYoGDqaWNyF9KDjXr5jAVrMQ73sMqmEoP",
  "key32": "46hk73vxTLDCPFK4KF5tegWXrsYk1Ge5ibpU9gaMqMjMRUz9V6HAdaQkjDvWs4GBsXxmidHJyfBsZDBDkUMwj75W",
  "key33": "2mAHnV3CrAZmKVpH2CF9vYRW2JCSyEwp6htxPt67rdBPsy7Cgy68Q1NvWWHJRu2BaXCu94jWDzhott6MGt5EBEdY",
  "key34": "4uVPupDNVULqNsYtfZ1SminUEjEEVFbKEJYWbwRaoe1RBySReYWpBnfd1uQdEToMtU6rZ5z8JsAWi8MSKZ3sZnEy",
  "key35": "2ub3ymZLAY39yTqBDY3UUdBT4TRNBNnHMgJhv3eSKsay8T1s7aLC2YL75ynYnMDfRyWGNkJFNziywuTiVybr7GoK",
  "key36": "Dp6MHjSXc3f94QgyFGeq64DUsnYTEaJ8zQYVsC59U34X5mhSiHd73Pftkq9jC49NZrLAVQFF4vgYAzf5EL1BR1n",
  "key37": "3foxovuX78B5nT4Yn8yG5HCB2cSJ1eZrZGHLevQp2uFpSirjbiLamP3dFrcyt6TNvmWtfKgadvdFGqE5RWXLEinE",
  "key38": "xJ5Uz98aNAoxtM3Hti6ynhspY3PALBqLctkAUTaVMu7xrhwGycJstF8NmjADPW4rgQU7qsf77SEmkMfcai7mnQp",
  "key39": "29VLLBt4ES2X3V87NcDAxXcRvvqVLGpTQtnnHVFmTHrvDEB5Hs5QgnZwtPkStW3GVjkF5PRM2fxptxcE1SihxpDH",
  "key40": "kEAFRxCvzpPbVW5bm7D8DwA6CjwG5jjXnoXdx7ddG7cW4UgNFQcJkc4qSde9i9UyxDNRQsZfE8MxdSK2fn4txbf",
  "key41": "21TdGpLjwkbyumCqmsCjZS3pAewXjdwtGmqjhAFdBrv32yby4E2V3oy39EKUh6Ho7hCQtFJTj2GPDjWJvSpxDxnq",
  "key42": "4QbnqzefeUdaFLqDc6hyez4wqgdzb89GmYhLTrWjnttnC73XbEa535dXef4vVrg9DmpVqPhAYiQmigW11YCXo3Qn",
  "key43": "3xaiPrax9hNR79NTjQEWkRCAfScnxdDd5RGiFxBNDXsfYzh71ee9M8vjtBM2LiHDbam1ojJc4NSB92iMoCuHKG6J",
  "key44": "3xQwV75mHNKWPP3W9rd5stCbH7ZujRQC36pbLzgG8qNCFdRpzskSBrJet8Q41vkHqts48LtVkJaYJWvTkQWFfQJj",
  "key45": "Ri63ntdSajJzA1dpjgeTyqtRW3kphWXMPbfTGTu6ThRg3BJqSfr2J8Y6zo6wjpa6xtUQ2URsmjUSo6v2CnUnizC",
  "key46": "37YTccpMrt7GfDVNPoKQtaALADiujzmQ9SZ9wGv1HUPLgzo3WAM5yz3WwbwZucmtefHG5s7PBck8KH9TukKCtZZa",
  "key47": "4pzam6sMkNPHCi7NxJ8W68MLsocruX8h5VTxgK7zvRRwqUx2rN7BKxb32e93UVXvPjmXpHdqhsRnpzV543UiP7cA",
  "key48": "5Gb3inTJtU4jhSF1r7yA2i9R2Dsw9PWV5AfrhLDiYko34bh47tDyY4uVcN66PziyAPUur9iahgdAFqNr1MmKt55d",
  "key49": "3jx44fsm8ZoLnSDzFHtuebQw2zMo4fToTmxuMRnk8AfQh19DgaAojNKcSsrpPg3sRkEWYyHFrdZMwkag3Nkx5uFk"
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
