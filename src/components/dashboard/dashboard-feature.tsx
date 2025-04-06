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
    "V1YXURzmEoPnUQtMjW55AJqUZPcvydpY2MG713QkXemPD6cmkvGZqMkTnt2KJExRAKncqmgiy8UzqhgeR2uAAek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uaa6VXm3Wn2ftC52D5pCS6uYzckcQ8zpD6ycFs4CgB5zUaeRYVXHoD1xseT7KSAoNNHgay5a27ApkMQmFbGC1N9",
  "key1": "3CdeXXE45uB4D6bBxd3YLr17zE31avuigQAKC9UYPnWaMYqckXYN93E5RjBYy518HCnfPKWMkdbAN1cm7UzkHpiE",
  "key2": "ZoerYRzPKsoCdQfiissbHGrsadWjSEUKnLSv9LHHtEzF1jy9GBfYzQdzoKxcw2GvLHtqhhNWPvm6sqRv1oDYTqn",
  "key3": "43owjCyYSXYkYTHpKYtsRXo52Jku6ENDMdUnDv536vGLby24MH84okjEcWohSXoo2Eay6sHkYHnc52UJjGubZDfc",
  "key4": "5wnezg82ZJb75LAL3tNzstMBfLV5qiJZsTv6gsCSWJ3GQe9Sm3JDjVqsfRT36BWxsEuEjPFRRFQgbSZnsFFPo7oL",
  "key5": "2rjdB3a1zfNDSiYfwWqWDaKQYBGYG2xhzW2vrUibwwwjHDoyuMaBYnmHtJovJy9AvsepuWteCQtnh7c24VKqwMUZ",
  "key6": "62aaKHpCu8qcFuvH9q6AcPAK1Yw1np3sRBcn3U8cLe3qaeKvoQNz9rQyyhrwrsQKKcLJGhbKAtVsBPuE3JYeUFRJ",
  "key7": "1Z5gm7Rkdf5p7KYv6dTpL7mNBLu2SyCTTpLcgzcG8e5EsGRSm16jUyAsjnZz1akwrQfB9RqDVnpk9bUQ1cBKqKq",
  "key8": "5DuvJagrkMTmhP8gS7GPkkkJYz5CuvSpZmk85943yUc9mihHRJrUMf6X8unryAJQaPHpqBCD4PKJRapvbwJjsR8y",
  "key9": "nR9iLGaqK6XMG1LEnHsW13xhFYf7Xb4XANyPfBqZRqDtR8KY9WhHF85dcoGuAT7rc4L75imFVeV6ERbocVQU6vu",
  "key10": "5E1yGtfFT3DtrCYidHQUhm8gxFWND19BhiXQtLwD1zSTMeCWcwJWjjDTRTJZJRPXSusUovo1RpYiNi9TM31tR8DR",
  "key11": "5HmRyVnTDzxq9bx6FKzRRBfP5ritve4jY4Pb6EfPZvXqGZDStqFHANgtqivXfwvUcFUir6CpCvRNbkppwx83vKqu",
  "key12": "4f7nSshm1BKejcY2GqVnT5aB6DSbkkjpWsXHvCshXpwLs2Mmq3KwcnBRBbMH4mA1h6TTUqACWRF2bTi5yidGzAK6",
  "key13": "5KBY8vJSBcpmcyEaya8Xbz1xacFatVcSUU3DXtse6p4hPyckVWbPbzDNL5dVtodPmuF7RYZTCcyWJnzvhzosFz7F",
  "key14": "5ENYHREDULXEnWvt9AeALsXXx2oCwF6sWqgG6eVRE54PFHLF1o9dhrWYQE4vDr4hyJbk2Mhgp5eC55mKcvrktfZy",
  "key15": "2nffGWx2WNj2D4ZnY2oL5Nxyq8PiAuex87ZBmoLADEkCLiEDUeVY12CFUaEMTML8FqMPUnKSfvgwUTVB7xxD32b4",
  "key16": "2ayCPShnShffT3kcUbgW7qUifVLGiEyh2oP1LCqsmxeREche19WnafzBRdKdjtPCgasNo5qDdduhFM9KcEKv3bNy",
  "key17": "3AeencuKcMqxUW8eVuczoBnSaV3TEHV1PMcYiBP6mwDJyU7Qh7t2UsKyKnKpYx3RC8Xh8udof79DqUKz3Mcxky2k",
  "key18": "2C7qSjRNaDWN6VDZjUV4hPurGpRY9sCXDXFfbB7gDKktNrSvFvuPdWFeo3irsJaBTwNoDMuBx1HRMZYx7oZYtW3E",
  "key19": "57pCAsjYLsDv6Y1NzUbNChPyM1sPZnhAho4QjvFifamQ8rKtQcWLJWaznkKeAXvhRo6FYkWsjbwzvESmjys9CazD",
  "key20": "b2h4GWpVyWDyfzgTZGbdgzifAaP9eeZ7hgbFhokxmRAp1F4ddMyokbKX9NpRwPtDaU2V5ohSrWE2P2tBHw5X343",
  "key21": "2Sy2PoG13uq9MLpyTp25upbae5gZYQj1DBmerkZhxMCXNkdfFb1eRnaXWsfZQeAWFNxy3nWDc3MeoA8RvvLGVqvg",
  "key22": "3E2nHHrZhvatiRxU7xCGbaznLVvU57ik4kVusH2QkDUXbhXtFumMygxNXvtvAJJ5EzaxTaJu9Ep18S8tawTnihLh",
  "key23": "2N9cxsrtK5k6tgABxbaTJ2Yfr8BoAQdX6TDZYubcBYqJ6K6KRtkrXvJ99b3i8ZUHkhqY3rVawSd91e8MnC6wrC59",
  "key24": "5XorvKR6atA8qY3n73TzErVGa6Wffd7pxeKVxLoUseAtGkztaW5tymR4LzMXr7rbfskRgZwKa7fxRfuh24t3C859",
  "key25": "3AQfChYoqgX8r2LooGF2xnjFejGFe3QMnP7tWKoTQ7eS87LMMPRg5BKvD5q6yW3M3LLnfpkMih28gF3gkUoYorr6",
  "key26": "2HoN9H1UWSoJ8yker5SnBjz1UbPNM9wzthdVS7D4TKrXdcMq1uPdV6tZrNKgxTmsj5uKSNyDKexSn992MtqgfCaf",
  "key27": "5uiWo9ahCTAikHh3Q5neS4pi9uJqZPZZ5K27gDid68NgagCjXucbbpVRTy6H5Gp4FkPJEZJuRTNJHw6KDedtFZrt",
  "key28": "3URfB8xJTud4VLBLkeTUbKvEfvCKusbguPBZtsDovQ7bkFoREakwdAvLPirxeRDTS4fqZPYBZtCRmixQr3ufRTid",
  "key29": "4nLfBQSFCwb32jkyQGDDhwhEvzVtNfR3pcZ6JW5pgYMyDdvrcLESeT6eTLEgwMYNk7hDkW4bg8DmEJQDwqZPMMEw",
  "key30": "22taVqUCU1sQknYNiGw2bxjyARj2GPcEEnfeXoPNh3d9LPun7uTn4E5qjZvKbzdxm2CdBs4hXTZz1uPRYQBsG9qz",
  "key31": "4D8nUcjytzWVGnGDnqTwqTbtu8tmzcc4QhgsDLcGrp3Loph4drCSUt1xzzSaFuXGyAXrdgsH7PzaEwkU8Xw4DGQZ",
  "key32": "53T2BDXoqYXr4rpePg5Hqfw4mkXzxGobvWV7eYccbm3nvuh4HVcPvExrhTn1BCr2FmQh1qn1ELxU1npHoBC8nq3K",
  "key33": "3rXYrj5CxMdMVmNbErpQQdHNubF4ixMTabBrgveLoNPPsm3cm358KigNQJdwzNZcUdMkRVzG8q6BA8pRC3Hqn29o",
  "key34": "4A8LVBAYBYR5emb9aCGG6fA1UJH1E64LkdEBorVFL9pKEQzjP43ojc5ktKQw8NemMZydSQJViecfDjixKswPkcnE",
  "key35": "2bUQDGya7MHEYM5nogFspGYBKqmn4rJjV4UdZoH34ebKt22eC4TmbiH5RzksXgYfrKLnxpP5dag45DmhiYqEjjXT",
  "key36": "S6dV2ePFmtH8QvWHuR2zmW7PVau73NnD6ZWdEJH3Gtk2kK9i4hAeG7DJCuVUskHVNUA2UwLEsxp7ebeDBgyUgcL",
  "key37": "3N6NnuNs64uD6UyrH4cQcDrqjkWX9qvZQTuQ6Z1LX4a9RFZKMi8yr57QtinseKXB6rFN7hKiRV1NHc3onL7PQzTh"
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
