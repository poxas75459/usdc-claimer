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
    "63GjUHRXfHiRzEr7DJHSAFsqo6hFb6ra6Ls1u6pTuTGbiWzgofBhpavH8sxB4BjqEaFCAPGtAYZvgLtXnDBdTezB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e2h1HS8iGkiM8M4x3YMTRNNybzHed2ChgAPwxwp8TE7FVD2ziQHpKMbThVL5SmTPDk5wTfzFKLLu83kFGZfgPQB",
  "key1": "4DsK8jgBEzjQcjBGfEXAJiUowmFzJbz18AysSD6jbVDuVPkMcvty1ZnAfmV9uMQ1oY9m4dmKGLUoym3XZNQHnTz1",
  "key2": "5jm88yTU5Lz1yr7e56Vvrmr2m9EC17P6EqEDVhNzxLEpp54eVYoN8Uso3p3Pp4zwWRux4RRFgM5m2aRLZSvVpD2P",
  "key3": "3SiZt2iEPVDRXY1HuUXoSyuUWfmJU5UNgy5L4sEpjfzgx9HaWzNRpfZJrajjrQqzxxFmjVddMCUSQP8YXiJNbaHC",
  "key4": "2SMdq7aN3RosBHCqWkQQaT9QYZUbBogPNpfEZbtPa6VWtjqkrX4MurWCYDxtJHEd4wv5wZZ3PSYc4gJFwmF7zrHp",
  "key5": "3EX7gBc2XScFsmH1qRvNtUh8bkGSVrGxYeWWHSUieGxQQ7d5A3fx68r2zbYRtMD6d1XmcYpfUgBvFFGXKAcYzCNE",
  "key6": "2jqjQkbzibQBetzNsbXH79X394zBVPA37vpFvfZH2NuhoeMt5czkYv4wodxSNx7vfWW5kwPWeMzWnimeSUe5KgUm",
  "key7": "3xT7PBhGQ2KSPpsr6NGaUWbjuAut42aqqj5Bb9HusTEqferDqzgYufisttfTinCYDMFbauQMH4GSoi5J8jkrsqRK",
  "key8": "rb66NAxvywCmAGuaYQE1dhCfjGSodbPZsfaQyzGGjbZgUyXyy3bTpm8ktwWLMdgWwpTMyRbPH9bejf6GEYHrGCd",
  "key9": "3MoeK5EEhDE9nHhb6qG1EnYfWq4NJD9Xkh5VMxQHBKQwDT2PPBSNmEn98VEswPbe4HfAT5gBZVwenmncBTAaJCdR",
  "key10": "311BvLn8adBPneZAjUfXKAkPVLftuFfzrFmwYMnweRaaCqzdRVZQfXARdEgo1HfMBQ4e2KsfkW7jmydukK2sCVky",
  "key11": "5f4Xh9LmNu62tosSqc9LUnf2io2RMqhrvoskzxsjeNMReiT5d6enLTLEjvivPrWYm5iz7o46C1RRvaVCqySVgA42",
  "key12": "3J5HCAkj2dEGpJQD2xjkes1ELB3W5eD1drMKWyWMxnz5ZUbHkUSDyLP1q7tSuPHGZXyTqRAkySV7VXSJLxvTpvgu",
  "key13": "4AniGQL3Vv77MD6ZwC4stbnPWaMb3werVvdHnXdr9YEvioMqQ2UcZUvYWT9QNqpxci7RWuZejBarvf2q22S1YsB2",
  "key14": "zEJLoyZHLYfdP3fqeZW6m5R8adPEmzTMnV3DHRGWuZt9hxLFeE8EhKQtUEtDS7nsyQ52yNVUL1mm4ysVpgSvSam",
  "key15": "3FgtfWAHmK94mYWbtf9un8XQki4PBi9ewyqMPmWN2twanStWd2aGxeYsXLSmzCfVHnXigWFJLBmbbHHP9yr85X1j",
  "key16": "4X555J46hi75Sonan4LrSuef5FCMhWd8HR2VMYGHN3rPJ9WYRBcMXGzW3r4XrqikNBwdwYoft5x4ihhZjvsq85Vd",
  "key17": "3WGdaHqMeDXRC9s1YAvVv6hFrSRD3GyPpq5DjQ7RQxgeTyWqtQU38uaYATwVQ1aXkcoL7VHMVirjWV2nUgFkJJf1",
  "key18": "A2hKRwTGN4mtHNAZtLbrUizJaxgz2hxpdtW6xpw8wMzpgzQTbAug6V4gGWP2P61bAknzDv6wQJN5qcc48B39HDW",
  "key19": "3is4J2hfgsAYHwnsR9ooCYGcVyp7su7pqn3GupvW1tWE54C21UG75nfgC4zwtkUuejsyW1FwCUx3j46T7C7Pcj7E",
  "key20": "4NqNWnN4Rchsr5szhxAtcU5v1DCeD1MSpti1w8AWG9nEg2BLEvKYfXqnVAjTGQfjCxdeeGBMdLoiQyqZ5o2Tiftj",
  "key21": "3tveZbTt6SVZ84uCY1MAd2hCsqMDqfXr9goQZRLzPUEd9NKCfso5nHgpZCbMogpquVkGDvDKzdbNWvCKu2geqK43",
  "key22": "6VX4m9LSoH3uZKVfarrMLwPaWynzFjgvG72Pcef61k8wyjaB9LBX9467x1sNnEafLB5JFxpY5bDrcQa6pWEkcGn",
  "key23": "3QpoQcDQ34Aw33TG9qXZ3PRx6SAQrz6GeGgJD2fKxr2Gpn77utWqRSdS8f5ecA9jVW5WjArz1idQHAau4TPQddR3",
  "key24": "3nKyXc2knrWUDm45Vd1bDyWE7LrY8MYfpqnLLBr69dCMn2GY4QzAsvbKUGNHK134iJrQvkuufeFX34RhPg38kjWK",
  "key25": "3YDuTY2hprNwHN7suV1ceYbvq6hCvF5g3PwjfCAi3nLpPxr22AxEBsBrygJ7zezACZ9BARGhtbeVL3eLgpaninMb",
  "key26": "5ECaG56RXVsrfAjfmSg4isdiZp1jCx97RpNdSyb6kevnYykrTZEDyViVaPnwCcEiGgvdJ5TAv9JRoCn8BfRWEdLL",
  "key27": "aMjuprDxnNn8JUqjwPY8ADA8BgiaEjZys7xZwDtQYgjvXA2bLhcXhbesiJCVEhSxPRBKBtr6G4MYq1XYd6iCa9f",
  "key28": "5mCH1S2exQM8MMUjyooCW3SZjCkoqzkztA6jaUyhh49jDtNh2Pkazj8n6UyXxNZ4ddJg32RJbREeZkcBR41WPsNo",
  "key29": "2a8h3j8iWKfiVSYdFFuU6PjfZHBEUr1nTadKm5ta6LiVBhHA5iRPMeb2sap6qXyh2xLn5N3cBT516g52gCvtY4Fh",
  "key30": "3prj2JWMUr1zND4JxTgkUuKMG6jZMENtZi9ogvc6UnVEA2j1S36XqcWgtgJeJ9MvwvpfqdX3qHif3DGjeF6ut3D2",
  "key31": "4ZiUpeSS3KCH8ZXiCb4H6tR7umPtqkEisjqWH89RAPxnbPbosHP4qqGuYW5rUyDwky7hagmhKBrSL2jhGeupzvET",
  "key32": "8VU9YtxEKyvfYozgHwyLvr3CQYJfc3v1D3gNSUxKdDuyNZtvV7wLZXiqZzPC7x28K3w2vVkmCZHMmvtUft8Duek",
  "key33": "2ejeuQMasMRGcWnawqwTdE27iBxDAHKwGEwtBgnNisjTsznTQtu9G1zwANmSbaFJ717EoPXdLt4WZTWTrVXRvT1Z",
  "key34": "4nfUotA4aYD2iY7VUakSxrzLd4HFFVuH4FMxX6pXArsB1PrVd9ie44dwRteoZj22SrdsYiUpjVDMom6L3wpzTGV4",
  "key35": "5zEU4X4f3tzY23yBvoHvwZeWWWnFmktcsmEKg1epYNQwR6KKt84b5Qf67HLU87N7C7YNq3yXYBvkguaUdaiF59xn",
  "key36": "5k1Bh43tQcNKT1VMbhF37eie5wGeXVcdopDo9S1E7CgxGqQg3wXT93S44vrcqwLWdpCp6ZvnAFcPG5CbPCRFX9UG",
  "key37": "4kuxyh5KodL16UuxH3AaizYNtLfJPFzBwQDFBPuUyba8nw1d4RKhc4NaNVdWYBWbHHBJqYby7ymrjX8bso9hida1",
  "key38": "4JkYfgtdkSmLav4aBR6nWLW4JU7qMLB7fjSgjExdhVMB4nAEnq22oUaz2GXZGo6hVz7h3y94oXii62KTajgrorpN",
  "key39": "2uK6rFmf7tb95p9Hf1rdE9Wyp6Ao2ccrahRXdn8SbujBNqWMoJzK5CdVa3j5wxyRLSWHWWzpSfhE9eTH5NHwa8mr",
  "key40": "3WWF7QDv9tYJs3N8KX641eVUvmKSNofbYtTM6EGpHeZWQiM7LK6Lda6Zp62rxuuFiKGLEC5pFdn9PHMT7WYa54wY",
  "key41": "4rGfHbJ9HabPQBNgqrcFn4axGn3bAyKdd1bG49MV64tkTrdmV5dCm4tN9KkGF1RNJSDvXcLaYKzUMQxFLNsRf8s4",
  "key42": "2YGr9q2mpgBDjo6GQHh2qSbG1co38FvunDYvpS2LggMEPzoNFzZTgmqhkGnuN3dynHDTDw4AgZYmQAn4HDZn4yEk",
  "key43": "5tnc3m85p7gULAeqT3MCWZyhrG4p3uFcxsVtL9YN2Wpvfu77yf9J5gWEYwiApDs8Vn8TPJZHB1iCHPtBVKpMo29e",
  "key44": "2hzZydAyc6CtWisiRYLDTU3ULp5SSr9jK9sTgxpXCWzjCzPvNxGEuJw3BRPNWa9D6X5jijj7Xo5tbFXeu9f8XXJZ",
  "key45": "2jy8VQtUQ4jr24uuRUd6WoV2UiZYYm1u4JTNxVFd6UzcTrBgDdZpgata1QXcNSS88ohpmEFuuxPSK7GaAwzeZ6L",
  "key46": "2EBC96uhVtoDFCXbqMR44fKuKUTaieWeRJPcTruPX8Lktqf3f9ktc3qHCQgpeYLfupQWX6M9kRo77iaV677U98A2",
  "key47": "59JNSrdK3GqvNKxHrdcnQHwSipmqfbVmDrEGt2kyaiYRiax5xjD5z3B2yM47rdX3jG5PREXiWcpN8Ncc3PT6B4Bh",
  "key48": "AXryPWcbDYPwsamL7S6R7qUhMSGjTWAfxGs6i6QY7GECZUsSQhtV99wirthNThXdhQJzen99yar6ZfjQKTwLrYP"
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
