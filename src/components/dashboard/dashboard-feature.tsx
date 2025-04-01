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
    "3dRm1UvYXDddcTRbRpiREGUUcayGhoMxsGC3DuSLK2RMbw2LunMaUzqvAwFsNPvpQk5cYbvXKHcep9ocdsgTm7JU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YqYNRisB6kbe6FmSzH372iuhapW3efmG7VBmHbH8XSSrGM3A1JjwHqj2noST9tMf4gCAzGJML4WawP4aVxwbebp",
  "key1": "4b85VqfUKnmqLCARKcoUHJyd4iEd4NaSHuC3rc1AMbb31U9bHQLFqQkBEevQG2Eb4ChLR7Xg6cnVy5sYK6S1CU5A",
  "key2": "3uNfkrnqAVgAvhcgtKyY4GatU4Hk9X41vhWVhCnXCMQt1r3Ppz2cvSQ58D9boPg5KhhuCwLSb8qR27VAyxPreNyv",
  "key3": "5VwbfnAkB9kj12oQNnd7Fa7gaAbmBx7DBY5WEDSb6zJmno5D3uUKQozv8bHvwLF5HQCZoqk4UD2Auis3t1hqXPPW",
  "key4": "GW3TVQXEkQRLedPk7VfFz7y1vYnyjRatrXg8qGGv1TdpUUc4BMtumr8JEnwZhD3a21p3R4njGnXRMdw1nzAvksX",
  "key5": "2viXVu2XWwgAZak5YEXvSVAa1bNSKAJB2choNkHFCGakwASZHtH9TUpiEA8n9WYvxseGKMrxrXwmfvCz4y4anrPb",
  "key6": "oh7EmqguqEhjSK5UjuqB3VeAsjaiSuQXFCiC78zLvAYVGSZtqyV24EF3S5SkTHdDS6chYcrWQ2GsY86LuMwGVzS",
  "key7": "5Xytbws7ecsvhHLrtk6rN6xFnxVgVWXbJAc4qGFQub2W4WzfV673bq12b7GG76N9qVay492AVGyaUr2uc36iBwho",
  "key8": "5Qav5MEYrp7oNadariWRWhnVGHrzFZJuqtGb6uNCGD7FkHtrF9R5wTUCo4mwZ2K691hSUNM22mXmPhqAdn3RcGEA",
  "key9": "3Q21umCy1UpWzroDKrFHPkHX6ikRFGJdefDTnUWWWPfGp6CC1j6SsiZ4cXkLFQz51Jsta1Wyp8cAYGcNzacTRDdc",
  "key10": "4FU1h7VmgTq2LL8sHHyy8qZ1PKJwGkzW2tkMrCWxyX6JY9cPaUKDCZw7qRfjvc52NtBopQZf3tGM8pTAPFWGgsdm",
  "key11": "62dksnpGrMTPNvnKnTcdMNzP548w27Yw2VURAJaHkYSpJRm9tiYbQasCYRwbRoDYa9dyqU7EtWoajnT9jcELjoQ6",
  "key12": "2Pqt1qyTLNyfpPgziFydegduhFPc1NDkhu8XzuCDya362gzV81sbmspKkTZjo6BZPPvu2igf19nSCUgfmyBKf1yV",
  "key13": "5wiNPR5m3LVPiUAUxmENtNu7UYiMmBhbxKv39ZykDBfCjs12Kq73zLwqGetCcwtAh7CddLukPXG6kxDQt6zDuCt7",
  "key14": "3H7XqRbfm8mjwH31KGW1pZ5VkVnbhdJoUVtQfKpU4jKBoUJBDG2nAbmu3rNFX7Yx9jEAxmq7MXxL8tPcyiducRjS",
  "key15": "2XW3ATqkuJNSjqDaBLbd1Ng7gs78723p9HY1iG7BMkXRiqmKAAVdKqv4amkRdm7PpjTJ82SVFFLVBmTnyq7gnizi",
  "key16": "2Bw5rTVqrwC4XZeunhG4Ew6PNQ8qn3CvjTgmp3ongqRT1zj6s5QMHFVmLYMfo1BWErZ5CNmAqXmjh3ve4CWqeGGs",
  "key17": "3DwiYcsULubDJEWWygVeyuFZEkfQWTYJyDbQkEuBFaz7Hcc2XC6H84RSJKnydUX24nUoP2bqRzFmLd32K6kuebTA",
  "key18": "25hhDcCUEZoHXX4WMLy3NVZcjj8vVQoJQF71puRg7Z727BouRNqJtPbN1gab8aAcxPJynU4zpEy2PaYcwhxGyBri",
  "key19": "2KHuGcfX1oCoYfyMwTcVCtYpTzRYBzGi4y84YbsNhmMzrQLMemwaKMGR3HF8iMhFX8zofysnUdWkgourykq3HQay",
  "key20": "4KUqf8dERZanonzN8URVKnYZShF4w5yh4dsPGSohUdRzVdqrGXgfbG9zdMSTXVnpLx5kLVth8op6L3dpZiTL8mx5",
  "key21": "3LVJFkcYUVzGsdnbZQmXp9Aw1t11mk2FSyD4oNR2sTgrVpF2uxuEX98TrEMoMPSvMCPUcPneDQUUGkAHvSA3tKoL",
  "key22": "282RGV4H9Zhkvjwcdpirb2WZtr9kCeiSmGe1K8A28bi6XfL4AQPhtU31WBJLujxmGEuTViiBqUoBqdMxT2aUjqy8",
  "key23": "5L7ZAEoJ16tSi7VYuu8kGBLFDy4ywywS8bunN9ijSEh4XJKnpCV27sBHmGmeAaHcBFr9RBbE3ArkmTgycjNeUBoP",
  "key24": "4bK295ymU4gWckMsG4WYdN1Y2B9MRVLgAfpSA95yZ5iwYUYvRC8NUuLwTyg9pncQ6TcXaxjKLd7Uj6y9FcNkErSC",
  "key25": "451kqdajryakVUMuMBagEf5WNCgExJDjAe9pM3VC7QsQgyM2HvogrqYK9TSfCjM4mzuTD9LiagvDApBgE5dc8XCK",
  "key26": "5rEV3YzuLkbsKjsrTEuFfb1GRrnsr5QZMT1VPrSDgF9kyLyhGi6nMMhMjCiMvU8meH5ahf6bQXpcw1ScgU4jBaKu",
  "key27": "5nAsopfxmwj74PhmPdzNvMB33u6YwpZgvTZmZKZjBCMwawRgchebw9iS2VkVLSaG9b94eBboJABdkyz1s7eALbWr",
  "key28": "zH5LdBqeg1HdHW4bkdkrerggFEXxVRzUJU7LbbJQVATz6c7rQ2q6QCwz6CBS8zhfv98ss2PWUu7Q11VN1wmJr4C",
  "key29": "3BP4P7dzs5rY12s4Y7vtK8SUkjiJpX2y8hTbzYDNqEc5rgURH5pqN1ES2VrABdQwQUAzTpgedyxDvXUAeZ9DtNtZ",
  "key30": "3CrpG5x7v8bgjxh6ykYCc6838pk44ZKNXimQkNqfErhfAyo3ojeArMqyDgXvTC28xYP8RgSvrEXJxSB85iuwQqau",
  "key31": "2FWdaA1fugkLCeYsaeWW3DDEteJxAcJAQZU5ZmNSoj57Qxn8fw2Asov3FXh8rLCsrx3BmUQXkW7WYNRTtmnJNvGK",
  "key32": "4oWpx9A5R8gxRUDdPgx2gxHBmqzVhL7zH1YNzmucPNgu6A44nuj5dShCCHprDbfjr5Pz982vE2AN1Wjhiaa31dTf",
  "key33": "3bi1SkDP5wAdUhg9aFMCAHBYwpGcnaygsTfTd1XiUa4RTBYb32duQYtFxXP2Nvq7jPyAw7BHU4s5KG1oZ57AbyvA",
  "key34": "AVCuu1gQs8zupX7zQyAF4NtoLNfzdX12yzNHKvQ5NaqNDvq3LXGSbGrZW9tKqA1hayHEEEkuXduEks4pmjaicmL",
  "key35": "281xdFwa495iq5tGonEiBvFAKg4TebdAhojFCABVBeqPEZbQYg7YMvrwmzT8D6GjhX4HLyWi3n2UVQB2EdQ1L8AE",
  "key36": "5Qp9wgFwyTxLXbbVZi14rJ2vBUPUv8E2HByoQwLyQ9MXRrA2CpPFJJ8mF724yNn9fJsxVT88zwFUgTDVKhHsPgv7",
  "key37": "3xkv5iPC9w6Jz9qpMfcP93QcuTR2DZY59ap1gxmDs8C12SsRL31jYpsXXQi3xCmsWQL3qk6PWtKpeWy6jy9DBami",
  "key38": "2TnuyXXNAkU6dYCMcjGA4rMxiLUHCRs44y8b1a3oaRPVS9ssp9t9yLVYczq3sNERYCEhaWdmREhvLf9tmnpaVWRB",
  "key39": "4e5QfQj3gJ3mJYyiDNsjPyN7WBgck65i1AbHHt9Uas6UocB8QxaTbNDXZycg9SK7JsuVCLeQX35Z3Ah5kPVZduR6",
  "key40": "4JuPsVKzY4SgBCjX5bXsP4wM4FgNot7hjCG4ayoSGxAxuWq74CcVWvZLemHvo9X98S2oryVwt58MRP3xsqt5VCiN",
  "key41": "2ornU3YYanHaEvmTowKd1M8hFuiCTcb7mWwXvmAMiVjeT8i3FgieREda7MyDkDYeBoAVm342LVAEME6LtUdzF2LH",
  "key42": "AttTo3VGTFfPfRYdBH2isXWEtmPTTftDXiGS9kF81UBCA8VtMgT4gUTxBob8527TptYveuz4Fwo7Ti25iYbtuUx",
  "key43": "4xE9PfrF9hpFBc53i8Bdvzjo76U9p1FjaPRpuiqPRh1TK8bHr9QJGiteUijrfbUGpjtwnS5ifDtGzF1PpYxNE84q",
  "key44": "2zU3CUKNYBRn825GVvdGyMtwrWa48NGxsa1rivTXJc1AYKuLeV63xJMAAz3HoQqSLzoqSTH2W2YhkAUMf9rdeLYS",
  "key45": "LH1EccFkhdDZkRo43irt2cy1sJBafisXfwzQ6ejHZBoEAr3S6emaCmpcPWs58CZTyJiRFkwh7v7JwMaRrLybtzj",
  "key46": "3MiwKr9ZQ4GrrLtMwYoQGquyDW7AVw1bjB6maGWPgBcNSwm2QZkQTXZndbgo7N8meHd2xcF39UPZge8nP3EVqMFK"
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
