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
    "3RFR9uK91wuAA9fFLrCzT6wnH7LgnCpqsoohFVJodM77yMreugN9ZdjWwQn2vaQZga8XTcv21fma8TdTDPbngXow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZxFZYxy2KYwSZxZ1Nj2Q9b81HpboZARRafSm4zheDK88GherYWomaVuqEioQKDsC1U6xuEVh2gPm7MTyAa8ULgC",
  "key1": "2ADTGBtovKg5zqRYGW5RryYz2xFunVtNqBY1HZkH6fGVPZKsNtrPhKkBwexDb6Eamkd8pKehVbRZbJBdryN8hcov",
  "key2": "5gAHKAnG4RHJaFM97WzvNc1ioHpmvhz2xcYSBJKroYEJVHEXLp7uXddT6HPMofYQUnpKpYCwqDdfuPuQXNowCFEu",
  "key3": "59otTi8aATy5wByJVynTjDhJJ7Eqf9kxMv9DkVsBC1UHXL2JWGahH8m6h9BZnhZ2GiGJVeNQTY4Gfsai9RRMUH2C",
  "key4": "PSZNuZwL1Bdh31BjhUwnk3fSJuEc3s9fJ3UWDg8CJGL48csCAnLShGhP7Esp6XDeVcP8gBcJ4kKJRn3uGCSoGE3",
  "key5": "34mGZwB5hJE6aGV2S7yirsiB6XAnCreRkxJXz3eSp8ETfJDi7xAZnmnJAKgPcehNzs1KSoUyqTAwSKPyph4tpZRQ",
  "key6": "212o67PE8uWv7iwgpgPdeESjCVCEkesaBc4rjZm27XtFPQV8ytKwr563RJNj9MEAs44Lgbzu7UnZvptX6xqo6UZa",
  "key7": "5RrPaqwQDUafvTepCJqcJKWfBQ5n4ma3d1syAJ99sw8Qav7kbmFYs2d6dBSGyPAmv3uiHRs82YCoiuZSh5LUz8jt",
  "key8": "4zDwAeNmZu7gpn4rMBbqSMNETPTypdPPUm5fsgUVDsYayAmaYxYodZ7fc6AqawyQD4BxR5dowD5qPNj3WW2qDYhd",
  "key9": "5ur4KoAohbp5Y2zhDGUFWwMnkfhcEf9jnw7WWLiHjfEcZhAMUzo5a6zY4hrKstse8bLtc6JH3gJkAgRjqR8R4XoY",
  "key10": "2RtBw7tMc5bsDzL5uckhGtyt2iNYB8pEGqXgPTiiSLrhtzqJy5BGewoGaNkr1fC2x6CkXdL2Jd6f6satsEQc6Fyq",
  "key11": "2TSE8tizNcBeoAJkPdYCaDnVSd5fuipgdJ3GtgWsfrRM9DxcS7TsriuTR6gUQAD6ERMjuRz6M3ouJR58ArxR7eWh",
  "key12": "5T7hw3if77jSVf2T5KGu2etx4FWSei5s5bhikUSRsFnqqJWGeRh1bf9kwAyWDQiQrm62Y1B8j7WMuGCtweMQWsJP",
  "key13": "3SiMF9buMXyNpzA5XWMU8zsmEMbLEu8eoFF9dmGExW4UHVejpe2rJRc4CYXf8oozxYXWQzAYmS6P5ugkfq2w412e",
  "key14": "31dBsWaJaoSNvWk8aHxs5VmsK8Gk8LzhymcrWZua1gPobBEMm2t9LRpb8rGcxEuy3idtJBKA1ZZoNK67Cntnpowr",
  "key15": "GLfvXhBk5e7WZiWEWcpkNsWeBdRaVrDUGJDmfBtT6dGa9js6pQKXDoy9i7PmE2yxWagkPZtLLiii3MgPnpTPmMQ",
  "key16": "o7cRZ9gQYtpiJCtrQfuWuSXct887TTeGEHQ2KyRcReimMbLghFRc7JaDoVWGai2TCCqaYn7ZJruAVb26xEcTjY2",
  "key17": "2wGiiywEfzDETHGyENvLp5oUoRXCrQsrcEHdDyj3Mn9Q8hBERfPxwxR92hXZ7DKu2gMucyi7c8ZP1dwhxrJur7Jk",
  "key18": "67fWTPjU9KuXTLc5AVPssEWCKoByKdriFhGJgCPaXNDSRtyVYTkGisjNkDqkqweqTiXi9vH1j3rsbnfiff5pd3KS",
  "key19": "CU5ndSdDa4bTynAZXUbxdn3sv4YZnQPhZoFdaVBVFjai1wUYJKjbpHyx6qD1vDuMk44BPVb5opdT1bp5yjAD3bw",
  "key20": "9w9mbUFoPF6EWJCeivWbZC1NB14WZNr8JLjuHPx5UvMzgkBfMaoa1yniSPKZJbdb9PMvmTSFC4LyPeXsfzELUye",
  "key21": "rq8CjLQ9xiG5wHtmmJr2dkggTn18Jw4K3Tb2Vq7Ht35JHBvgaoUV7YDwBJGBYxYAvPQeNuxbqkUus2Pehn7wAGL",
  "key22": "cVMfM588N5t3kirYTb2ki3QDaUgXHmbHLUpWGxVWdv95FbtEhs9hXsvEncfKLp2np9CJaEXbTP2mFC4rLJVNuba",
  "key23": "Ray7HJiXNtBrazNnPtfdq4x6sMjLVbEZWBHfVXqHfYK1S55oZ3K5vUF971UpDMVizz95hqVecU45DPmRxptp4TU",
  "key24": "GYGD9sUxbNRr4jhDK9poqJLTQrhVHnFvkTXcfh8Zhx9ZLEdzCaU4YwzKFCehyb7MUtSi4JYvPMVtHYv1SUdn4nU",
  "key25": "ScyAboHYP5ZyR24sDV7fxF1VNwRnfGiSeNueV2HY5aauB6vYEYpL5rmzCSTGLrSZ5JCwpeXqJyp7aNSq3wbrfGK",
  "key26": "2AMRuGEYQjfeeEuyNM23qpCy4pwe4tbzB7MJTLgsop4Ek2HBhttLmQNGosBCibTeCMwoH4ey7xzDbFptfDgktoj5",
  "key27": "5ju6rNaWb6QiCcjZWWdF7ix1AEqMud18anBTxqWj2stUxcbSpJta4Z71rJVEnvh9hVmdaLGpNN16KnVtnNkmwtFR",
  "key28": "2BLmYTRRrBUT1KWLJpV2JRtJvKqJ9e1oUPG31CmFpGMzanThKrYpe5hvSZofYNPrArkputvEUNhEgVuiBQuG6UWC",
  "key29": "3GAb9eELGKAVfnccwBjvfJUwrugquEkwVhnDpnfGhCs3gYNxFYyaoPWRyvTJ2hAAMaBGdHFpMFw6YADcJ2is7oS5",
  "key30": "3MTLz7YoEzwm5A1Rk7mfeUzyaQZnEVDAih8Eh1zdExctCvW3p7quXf3CQkH8PsSUfKoLtJ1YjCfNSgAAcnHwe4nq",
  "key31": "4uycEEerTWVpwktGuxo2HK4ho1VXpXfKDnAkLa4ecAXMzRfWzTK5QHTMWDYNa2aC2oLTN9Bit3QbUTL81mdsUNzk",
  "key32": "64qMPaQeLkrKxTfk4h2JWgCsA71NgtC3Snh485XFrFwD8SstTkYbxPQbT5rdrQEDU9Zsy8YuCVGegd3LikzssA65",
  "key33": "2QAKdSNrSEqqHY2axCxA5V81Cq8dc2f83kUNpmiuhpWEwARVdpSoL7jjd8FMV2U8GKHVP3VkQVLmtzvdAzoEJ9mZ",
  "key34": "3jsxspLnJYSboERpCg7gJv9Ehz1yxfePYqS6HgNjvBfKJMN6DK7wvRz685wfknhWPWwfAgCywURSpE7EofTpKjJF",
  "key35": "4VwGFi7mtKnTVD1Zm9bWXJVgq6FguKhGBe9YboSoWW9kqUb6aHzh7Eswvjcgg6ofPi3naDvegiA8C7ptHsCv8tj5",
  "key36": "2zgChF1bEgBbREX7Yqu84PfFfiHr3BxruSFC6AJWPy8iNULoqWx4FqaW7mEaREAdKEhTdPDeCEnbHPDPeYJNJkfH",
  "key37": "3V1NUeByWGSHTSUq9ii2XPY72Lf2HgR3Jn9scsrxACkKz9L3kjVsoJKbV1aHsSLzayJBZnVmhUzfrVHPQLrY7y62",
  "key38": "36zt4izq27pz6PUfJEhQbNq7ajsmt5UAAs3TbqC5D8r19QkzzgFQixYSSxvtVtk1gDNx9nEUYMgfKSnxVrfih3t4",
  "key39": "2jgm4wuZhx6EdpKDGMwErRRsmc72j94hidHgb3f5cSpr2gdPGJtiavKv5LV7HmuiArBcykfQ2TsEKLkjCdjGC3jy",
  "key40": "4FtSBcnjZSJDx9xJU8CBAcz796eHij65QrXTgMEfv6qq3jUccRjxUg7BKU2bBaToMZgFo9dBjtTaaKDtgyY8x4Tr",
  "key41": "4RFfbMQi8D5RBBketkqQdFZ9PRCqgyooTV9h5m3bihXJ3c4z45isiNA2iTGnvoWipEdXPpuh8SBqgKPrzHZdhzAw",
  "key42": "4neBty2Eu6TYLqNk2US9uXdT2zFzxwHAdfy2hgRjNULHQoxQtTRHgqKDsQjaNbHXLhP7mDgyufNRhTvgBvB8VSKH",
  "key43": "5QKmbmdXRvBMdpfc8PQmCKESxLPpRgDwZG25ngWTjz3j6is6okNMF4HenYdv2Wfe4PQAeg2XZxNm4HRhwnNinvxN",
  "key44": "5M617hfWx5UiftPvtU88JgEMiCMDuc7iaJrx9T9fe3RCTYSDK1t3fzQpu4Q9J2hYyHhhK7W9b1JERUvgtzP5cNCu",
  "key45": "2KTKG4uHchGCnpNbVr1EVUDXRLTPzNHcmeC6kSK2geJoaLaAoV45WQBZi5SqtDseQAXPRGxYZfaMBPoUNkbSjonX",
  "key46": "QzJJwS6Z6jZRDpTTJEx7tmoCgCzSUkTYWAeWjTwv9Z65UASyAPnmAJ5Seso6gh5VDzN42fapRprR4z6xb2zMvcJ",
  "key47": "4wUenSfooCiDf3gpuFBSdyk7dqi83Le9kEu7wZgoE7rfA2oiLR6yzX57tfKcpPnF84BbvseG1tW8bGnPhY5ZSyg"
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
