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
    "4ZVucWy5dSogc2z8ivEHzgGdE45iNzPNiovX9QsifjhTVMWtvbfm6afRFVrdG4AK7gn4waVNfc9yqcUPDRKueDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AbGXrLtk1gaQzqE3kuKLS5NpA2mR7djw9P7ZQi7k136yD2n834qVBBdJE5bWnjRLRsPbjFywn4fD7Fx6A5sZ7pe",
  "key1": "5EirUjLzk4cG48wKdeV3W1pWDUV9qYhU7VGKjkE7fnWha8uZquwYBiZthFrxKuYwzorQF5AuLKAcbnbJHhqpDVHi",
  "key2": "2CH2msL2esVNkmTgoL8vZcgsbt6dY88LUuqZ3Mi73y5QWWh1fgF9fxwoeLN3TMkfwuhUiAvsbxEvpr1hqh349kTA",
  "key3": "3T7qwakD7E6s7fEhjMXjUxJDZ8ZTDrhuTy9DWG4Hw8y3BFik98cwvAY9qS9zjJDx6qWCZcVrPb1KyKWJR9ujyW2L",
  "key4": "3KJJygBk9gqFRAQYG26eRY8eZzKu9c7y7MmFeA1uZX9bqS6GaYv2rp7Gf1VKwqe8YBL3LDuUFND4SCFXxxpTapTL",
  "key5": "rbmtZ5R1eociXqh4YtMwWSpfUhuDGhJdmyDuKcybTjP7xh1DEMQwSBbf6Nh4oM31GdMqFfd3gmW2fkbADXeTKtu",
  "key6": "41nUgVKA1i432pQ1Vbqdg49XRzwcVuY8YxsJYwAGtQZg8cLES8TcioxXtokZxVZRTm1BeU8gCPyFptfKe6KJBhbJ",
  "key7": "5nXFmRVegQDBEHh9sfWVkSwAguNVFoR62dZRdUMkTQ5UtLoFBGG5qqqjBaPY2hNcTjjbg7D8ZCp1dTmALmhdFFRJ",
  "key8": "4hWwHhHGXkdfHDNMwdhwmNLebKG4AXbqP38bJgKtd99kMDRHAQEFhnoH9UJ6qqThwtDugZFUnuUkCEW6ZHfqPqam",
  "key9": "36EdqC5xspM7rjf82JxHgiStqLA94HMw5Jsfbikkv2CsAp6AAiqfEekVVa17ZVaPmHcD28toeHoeyMPzcTMGC8pV",
  "key10": "2Jwe53NSxKKZKPhsNkia8ByXHDEnZqyPhWkgsRyPnCPkRNoaa2ZqSQjpEZjYoqLkmuNEydWaBuQtPJzsFC5cKm5Z",
  "key11": "5raonPv51AZyDRo7RGVztXDEkeYA5Yok6DPZDMqFm8xsh2CUigzArb29g8pnsXsCM8NjYLn61N9CGkpUizXwPRBr",
  "key12": "3hECmLNuirN9PWWL25t9LrMA4hdueEByTuXD9Pn1EZe5NaWuUzyCQAL6QPqDmxBM9uaZa3h3TC9Q6YSfTHgfnLCh",
  "key13": "4A92nUi6zeU4gXeZsCvgePNYivWccvwtnBeaaqAbzzCXPMQedLg8hFha1Lfe6Toym5Henp1oEZZezEdqoHykRY33",
  "key14": "5Kw3doJ5Tv9QyogCKGh4hrQHcNTbTzKAvCC9s3iYqhya8wqM8UPDPCsTNehWmjND9oConiTec3v2HvMehd2idMsZ",
  "key15": "4QsCr1eUjEVvHuzHjbCzwRVkRKH4RHhwVZK9HKWb9sbHhh9LxL5grw2LYawngWvTYLLbHxkUybXwPALpUSymWv1g",
  "key16": "3D1qWqR4LQyd3jNXCZFoNgBgonE7UGruPe1SgTvbVNzWUUtP6Ry6RvqRwPzNnjBgLdFupw85XZmeEt1TmyWQLfTg",
  "key17": "37phnUkrPTWhiYagMe32RP5yc7BKFBgMiPoKd9fxbmZygHGhgESvYbXjhu1Un48d5jY4v3YW6DJXBtzLctpsJtWB",
  "key18": "3mFRhm6TmV5QdtsNqL3syfWAu9d2zXpm1G54Drdmk9udq2tiSADC4iNvfEWywdY7r2pmKhmumannTdvQkE1RX5Hd",
  "key19": "3TibQMruDJid4FCK4UrbspxNTBAxPgCHEXExK9bd2m2Dogg2tnvgjimuLsZMgYXuHVQoMCvbQHaX5yLu7pTn8D7V",
  "key20": "44ucDtqPrXa5GDcPXueno8Bw39MeDHut4ek8YfnQzVJCkBHBGXkupqfVGUHYn2iry3sfQfdnUApfBEUbrvm9rqWi",
  "key21": "58EbuaUv5QjRyY7EVkiPZxaiABq1rMxYpurctLZ7A1TKrzJA8fJZFTUSEBYutJANWryxxQ9SVcao1kmg1iwjefK1",
  "key22": "2VRcbPFMQEDeZK3g4VtiwroRDKoep3opJtUnn8wwDaA74NJj7k5FiM4x94bgH12Jas6fYk2osNW2KZtSFS5HXQWr",
  "key23": "3aRKQNHV6gyzWYjweyna6f9WceFkAQnDN5LfgHcKQjqSGEpn43CR8AyvsKLG3kTvDjABS5PkMat7VoKTBmXhyLuz",
  "key24": "2rsaExjNzLnVKaDKkzNnS1fK6P74s14wACy8aG4byyNgMeGw9CrRq2YciM9Tq5Zqisi3EYVTMxo4iKh6bgS3r9yN",
  "key25": "2Dzbu1TjYxpWaP3XfMMiQo46Fhw185KJLX8K4htRC5ykWC6o8x6W1sLq8Vve1sjnNdDLWHTTi4SeNjM1gbHznG7",
  "key26": "5o3seLwbCugos8yp7Rstrt9URbsCGq2wfntX3mFNt1iXpuED23ND4WmKdwLGU5M28v4qyu4bBnLZYBoUSEMiPTwW",
  "key27": "4yCdza5LQZ3C6pxK3C3QEaWYunzZBL86VaRAFoDLkGUx2ehrHLQxthDtfujj52KAost2fJirrnrMeGAqsbgffb7B",
  "key28": "2kuCcDLnfk9Bw29XCyfKb33QxLUgLVRp45aDDZXFbTU7zrKKvsydNG7kQ7FQA68MvHzhmBnfJZ9fyQh977EeY8Tm",
  "key29": "3G4ap6z1a2yMNnhvmF5CsLCmoLwa8Yj4spgLQ2FD7fNw7VddJ6izVLZRyAtgrgvJcnujE68Uxecbva5J4rCjU17G",
  "key30": "2k19FVSxyH2EDU9nHervxUR6gMET8N8LACdt2xuLMJfbYXmUzRjFC69mNgZuSzrPKpDVx8UVNpKz9Q4GnBrXF8q9",
  "key31": "64eTiNCxZFdT5LFXLMw4nq7bBNbkteXYwjHgZwPjg2VUjwVovPCGY6kNxtPVLDCriyuLsWVwc5JgngcLHGDkGV7D",
  "key32": "ryeUDDHwY1cGJfhK4gmjdtkZM88AcCP2TwW6ysdNu1gUSwbseAeE9YZbGKZ3Thwb28rhvcVa3qR5YcGLPqfweMW",
  "key33": "2MkXjaFzsbjSe22R9FzLCYhrvSin7tVb9WhS73UNT13Ap5eWEtJJvDs7eZ1LGEqUqPUAwnTNnWPQXwNVpkvC9CdT",
  "key34": "2AnLdf2SABkakW3qKPsAic2Kbi7kDbtjnbL8nfQ2bVNJD3MYf35fNSo3ffMkcGGG3JgLFaKxVs8jYCxdT5Q1RQf8",
  "key35": "4w46NJuHNb8MSH9MfmdXgCZfDNvJUh6VqpFbQq7GSxiz1kFPqKoyVuLVi9EVzjDUZzikS2gx8HuCxGtqDYbQzZz1",
  "key36": "4po6aoESX3awPScr1i4thKj47Zi2RmetudbrcrcMAbzhnQFaH33cWfRNvz4kDbCaNazeFNWLuRpjcZV1vttbUYAB"
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
