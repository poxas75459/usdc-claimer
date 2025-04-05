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
    "5osCvQnbbiLD7p8qHMbviJFgtwNYcmbfg99zkJRzYWFwEevnXw2i9MVLD3XBLtMbZVoU5Q48NoqjkYcoa2gWUGeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rwJHMWkEiQoJ4X3r2U28CYyqLxy9wKhgdv9j66dfEyVQC6UWsBQWam2uSTBGBAQDTz6tiiWC3VhwF6nbSWk2LTw",
  "key1": "4ZhmCuuaqkHaHZJxBV29BbGu3R32mGcZLrrSAQtwHcdsvqnWKqT6GaKoJAyouWd92RLTPEaGEUpNUpar7UYt2sr",
  "key2": "66ZmbVKe79YAv2hZ5iR9Ck8U2KSA4YirFBEKMmnLbpgxYHF6UyveWi9mCdd2daPTWr1cCnyqdwdCi2wS3LNyLATH",
  "key3": "428qL7uSnv52XvNqT26GrCr3Yo8U26tdWE4Zorga8jBLgkvFYGCE22dj3c9JhoZA3hAHSkZzCdA1g3KW685h21Ps",
  "key4": "5DgBGr3FQWHRzSafShzh63Rs1tiDzWckEqiQ9LozyeqWNk9TmwixRVEtgKmEkDeHQi6J3dbsPC4yKx5SDnn2iGDx",
  "key5": "4wrSr8mwmTg65v36ozeJqPSKZs7cL4Gy9CgTVF7PPJ8gVg7FfxxtQM3XiSkhu5Fu62Avpx6A4vXQU2BMSdh2BCve",
  "key6": "eE6ihEgRmDpPEqM4p1tGgaZyRsnDe7whHLm5pBtSw4pMiqNz9m6VHULNDkH4LLEQ6JSuiZRMjrdKjk2Hjuuh6Ga",
  "key7": "3JoJ15aR2fbAGSn62YrKGUJuTM6Db8RAQcEs6hvp9wmAKifZTeAm29dt4kYnqvayBchCk9DfS31EJoNUq2dLBHsH",
  "key8": "5jQeJitiuKukJFfCYJYeSUYWbpSNtPkueqiUPUDxhxARB97CWrHR5hoPZevCK2CJ5HCDHizGayfypPLwqpv9bLnD",
  "key9": "5ydeLZaDNjEReuhPdCcx3HcNGtjpJ6ZSk6gfV87GH7WT2JbXvemTZmWe4RUCk4cKBnb6qgT71zcanSZ5XrL4mH4g",
  "key10": "546TKv8SWvtzetetXthmhGnn2Vu417o6UFXV8jzhaFUfRZJY5h8e5XMHGGDiLHLSNkZfxorm1zMCCKBZw4V9cxVm",
  "key11": "3XNUnq6DHiQHzyLd5FbkwQjwUeJDR1WSpKUMLdgrCXbV5zdEXcjLdxjpp1KdjBuiDe7E8dUVuWnVqpLke6jHsi7X",
  "key12": "2e7MTUDuWJW8L6HWR5gJ7Ja1zaocXXi2ZM3Vsq3rXNjXMHGvfnM4451EbAFG9qr5suXgZeAsi3LvpEMdBSuzZa6",
  "key13": "4pnc6p9JETynTJ1izFK58FUcLhaChKZib1tkfptf1o575rz9YEECojpyZ5F4XQGetCeiTYFScDC1UjqrvuvFVxgp",
  "key14": "2qRZ48UAkaK8cYb5aYBfLyeSGhH1KzbFzaLRsK3ZszXACaVotWx2dTqdPaBqHLicRV3vooK9yAwjSZ683V9JL1Qg",
  "key15": "2jJzmDZhZDywPMPip9AkZVWDJ8GggUEBbYEpnVKGkoTJo8R1aqEyu1vzU8bkX3ZMef42yN9mgfVXa3HP1gZN6vtQ",
  "key16": "2GX9rZY4LhHuiRqKoLxf1cGYHzLcc8RjGYDSTLGBVi4L8khV4cmtn8EQ5V4Wxtic252GGfYdrwEnx8DGWrJrCf66",
  "key17": "1tuJ2QL7Mugdkrt4zMYWwKjzDahQbjy3FkeGroNwjjgCnUm5Kz779TTG8V1vh31xrVTzdKAoh3nysPkeyPtWhS7",
  "key18": "3ywFfJ5Mp2JPpAQgEHpALsoyfaWXsKKKobar38tberQC2iwJRQQjLmxi4hJouLV8cjQxTTiXn3Ms6Coorb56vxce",
  "key19": "4ck1LKUkApYHicX2fg5eEN7VWGGEtpQSSUBqLXZCmZ8UyE83RbNsuaydfFe8NE5DGCHLTbWLpTm2pvkUFzzZMKLG",
  "key20": "5dKwaZS7Zh1L9UfZHxB2BYuRf4zy5osMYyxjdkfKWe9SvC5tqW21Apg64sNuK3NQ1HfXMhiqvYbNeuSEHwE7WYan",
  "key21": "5h7WXhfJwrUPHgBVHCnY413C1iWyneV8wwu5nBDgaiPnWsxyCngqMqjz8P4A17F9cy1tSxAwLVrF88JTJvMTMfY4",
  "key22": "54bmhGw3p4M5mBxhhcbGyuCvfeTHc9Mg6KjvetERbJFEZhci2bu9TjaGvcZ7xJvz6VmF4jeRMeRYbsVX3LiGdGxn",
  "key23": "51HcMwaCcQga7B2eoXCQ43PFveL57oKpKqAfnJFb39YnyBPPgUSwmqcFBN841x9tnraBgPbjDJ11bCbfz7t9qqLq",
  "key24": "3jAJzAjMzAvs3xyY2neJC7r46sfaJNpP58ewe3AMDcgvbLGhg3kS4CWLcXhgnobMFgF796JE5gLMCoHsXQRhs8zv",
  "key25": "2nbzatqiahhsTs9tgmg82KUoTCJZyQ8EKqQB7HFBtnEHMzjppcCtvA8ELznfMauLCN9aPFHJJknV4R5xFCn2QRBd",
  "key26": "665aGX7qEjkqGLc1esLDMKQL6CcczZAbtYPmfDA95dtFS6gHVpARER3VbKcD1buxDok9khSS9EXNoHrgKRM7WSno",
  "key27": "5dTSPtkAnwhiXNqwSkbsna8UjXWzdoxH9YNv3dfEpcW69KbQbCgYWsqGvyBvBMaAoCmUV85EgeZoqqtdiLc7E5RN",
  "key28": "csur8CBuz6u9wtvYJgeQbwUXuiVdSYDn1A3DJY8JJ1eX88x9ygQ31FdTAZmNNaTFNgFL5nH5sXaQ7yL9CrcrYad",
  "key29": "YBhEosNr4m4yN7HDKtV8kGGgxNikvUy6H3Ucw1dvDydsXXY2V8wZpSD53SZjBiZcP85ac9UqhM5KDAX5wCqJJuZ",
  "key30": "3BuYjJPmwEVf7PT3ioixVTMdPGooiKhxDwu4REtx5Udr9yYXeRZ8rwUN8byYydTUrgotzXeMVbGZoRgb9TtuV5sF",
  "key31": "29qFvV8cx469cnYN58zR1sPiNWhdwJQHde6N3gb4NAD9iF79YCoftAeNfxyx5eTUwqfMutrBSRE5gS9WfAgSQy9K"
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
