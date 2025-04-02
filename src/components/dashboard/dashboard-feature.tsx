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
    "4baTQQyP1XoLR55rn4jgxXYgzz4kUwbSfnqCkg8ZDrpfyiwpNfwyJyeRbdiLRoa72kWaCMSL4tbbcUaHxGyfzBWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YGsJh1xnd6KBwaA2DLxiZN9BhWqqh9Bmiq81N2Y3fhvKZ4LQEDTS2kC2FASQ7Y2fggqtJyDDGvZwdB9RqtsZYNG",
  "key1": "5CBQYgVrvd9inXzMz78jUToi3RasFYoa5Wi7KGnxaUp3W1fo93uzz4apkP3BCboHwDF9eiftk6iDdY3p3GzF1rRm",
  "key2": "3mJ8EJboj1HMu26grrBfzPjCxwJn9JTKnnebfnbYUWKXX6uhBrngYhzg6KVa4s9H5JZrkAJPDwaAEtSXNTPZNNur",
  "key3": "38skqKjvYD54axe3E1QDo346R1QVh7aa7E1yWfwVARVExy6oRK8yWyMuMncykCJJ3ytTFYAWeku4Vp6ncTaL7opP",
  "key4": "2qWeNr3wXoMqX3sdPCXx9MRx9uhQ91eRo31jSfQBnXsMguQqkPmnTYzNcyZP8RsH4efXwK7ja82Gumxm2odwwJvp",
  "key5": "2b6P9pEx5MKWmsPkLh8dYQZiYtPJm2JS5uQWU4XPJVG726CxnnRgKbJ2HKUXeGfGWigZq3ec7W8U493dv5izagiW",
  "key6": "4yyafxsfVLdw6wcKwpUhnJsSiTRD1iqqAgvLDbedg7MCAaUjsduFd45cd9xfg7r1f5jm6xfiRha7aUcFv8ot4mj6",
  "key7": "5fvbfd3sfPQaK2XN28fZ4C9UXP7F9fBxdMsPXqma27DAACVfJHZB4NwhHmgTdic4bcVZGxsPxVRgTibPu9ABg1wP",
  "key8": "5zttVV29XwnrCxFWiyZVc5FAjoX896PrtvHhri3WtoP78Dx7RG7vetpi9ERcAKvwLuGHiDiwPp3wqoBScX3T5GQs",
  "key9": "5wvf4ovFqP8UViyz2rSNcyhGcz6FXX5hPA6pNLtWkeStjvRDdmp6R9dQAvgTxtxdd1RJ3baHNyAwryAE6AFZLTSU",
  "key10": "E9xLtXEnof7QB4z5XXqCmLnNVoFTEvxyraXeFzhXn1msn5tDdyn8p8W9jVARrJiZHipxU31MMxGUfn6rrKN1e3B",
  "key11": "dJ2FV7BuKTTpWNqGEs7JbBVFbzEJ4cjmyt1c9mBEFvpYdBxyx1a26TRsBiepwPEm77aFqU8xqmvxF6aYg6RS2Gu",
  "key12": "4BdgPnj8zXQtxrCHEruiQw6EV45xW2aKLuyXENGXLGnVmFfdQUorhudjogMqQjn4jBVPadEecWLp2QYddSRBkzAc",
  "key13": "eXrSVuJbQKffVBnmw5S2fmRrXoriQCmJV3hT1BekZToxjszG5pkK2rjcpGde3mh7vTKx5iXTVDxbbdj6bFy3Jv2",
  "key14": "nczsqS99NQB88GPB9zpRemMZYcmeSoTyLpY1SguPBotWZTaXdQT3Fxzhv1tp6hQV6RmR53yj4xPt2kjFnejqPYY",
  "key15": "3TEJ2Mjt6U728dLNWM8cBgWYcAKaGRRNQ9rRV6Asq2sTgWwk3Z636rLFZjH74xhSrEaYU37aiY6mw9ivxtGanZX5",
  "key16": "2X1Gw55AJw3Fod2TXpfX7HSpbYTYN5RkY1YxtrYdn9gwCKDjRXVuCAhLFtsMGG9wpmVcQbZ7uarduSbzXr3ikvWM",
  "key17": "586JcqPrXbKcaV2HBqNZpF9gjcXsfmMg9hnUoroADnXD7BsB6bN1byZ8JGDQBZZhjRHCX599ZeFgYDyWkqY3QzUt",
  "key18": "3xEXUEjcoq5skbUBzGy5qzhUcXbpVwrjTmWoF1XrbGdw18REF2vrnsC1RWAvS8tHz15gjXSbhEJQ6Z8akTh6dmNi",
  "key19": "51i9Bh2cPNPbSUhYMAkLd5eXaxatwgbym3YhpkZc4tc5Zj5XR5FPUdKhUk7bYtdcsPgzGDSYPwPwdM3zEYiuHY1Q",
  "key20": "3Pngy1WQ5tDbsnUAPjmmmRDFAp1gQv4AkkX8J6nTDvLtSLitZu5csDV4mfjfxGiLozcsXeWANMaa72LafCQ7vfU1",
  "key21": "4FLjvYr7z9mqALtFXeLJno2C3tTyLc1TLuXrRW9APMMmCd5HtwZnNwQU6G8SMex6gWTaNKa7W1pxFaTdxM9Q5XAH",
  "key22": "Z9j5AKLy4C8HpwVbUGyQBQVRMGbGL8aRqVRDMmdRFcz9txPuWgyyWxjHkJfUS3PwD3XhGEFt9GQred2uRtUqUPC",
  "key23": "4Lk68wZRX8yWVKnAkGPcHNm1p3EGWNyQaPKQm5vLHMeAx6NvEYRCym4vNYeUAhQEBnKADQA7kwEebjSjfVCJp8KM",
  "key24": "2cPJKuMLc6vokJe7qF7VXA7vGBXz1pjLpPdfEzvyiL9o4gsdAQPKYptgYLvPS76x1MG81bhHgkEHWhf1RrWKMdCw",
  "key25": "2cHiks8DnRp9eBX9qxrL2FyMi4XSu6cJchVnf8fi5pJjsSCAwwpgmTFAChjwCfi2N7sR31f66DsRhX6vPLN8C39i",
  "key26": "4epUxXEbGvDFE2yrSVdTAfUEcf94A31jbZsC5aiFCUARebMypbmQ19ATcQXEtaxPJCWcXNMHEz5uG41Q11R7FUos",
  "key27": "4m5HK3U7fy4V46zJ57Sj8ofWaFVEf7ZUE7iV6bJBHsz3B6jyUBYq2FtahQGEPbP6tGowGfw3Z3CPPnda2jvyhEhF",
  "key28": "2hsERAjogKzA48rni4suVrwPscxk75HPPfwdNtmStFdKnFpvJo51VjUMmRUG9bG5y4Wua3uMWTk6UeV7dFRXc619",
  "key29": "22D5j4jLeUhqwzSuLHdwbEtAvHw1cpFSG4ZCFKfR2Hq5jpgRXXD3TbzKvZw6TC6HAUHGQpdefTBnv9ocSViMxYVa",
  "key30": "3LrPbFbWLbSTN4dHKzKpKMyEGigCLUdJo4N1ACkxLrkjfhNHRsbjGDh5vRXny5RdJ2V9Vszfi9pcNiwV9ZERcmYY",
  "key31": "2K7BNXKMSiGEX4KxUnwNPEfu6Hqtc8trgiV2AuDL1CAHqYH69AgbHCc1TfsRG6fVVKcD7nJZ36Apax2r9FkBvYCx",
  "key32": "58TSdpdfaKdu8A6ULoF4duHCsojGPEgbj5LP82GPvTxiipuCpckM6Pbkh9jCDKGkamJQFxhJsZzF2ALZUJG1CVWU",
  "key33": "mgPx4gq6rUjvA11K6FqQDPBHyMT1c8aKvqUBq9TYuJFJLQtgcprdDSxAhvG82GetHJ2YGriVEroeinqpqmS8xVo",
  "key34": "xKCAUUZASYAQQRXzWPEPoKKAfYxHWCnrdBC9H68cf577BbjbZ3KiWoFRBMPoEti7Njc9VmvhdmAAVMm81QcB8r8",
  "key35": "RVgHXxqDsAuy1vTcVjRUYipfhSWkbP1wrbxrHLddVvE2dfPXw2v7odWaWkLgp282ZzH3pBGYprTR34q6hVxDuca",
  "key36": "27Dk8eusCvi72j5M6nTyhs5Ct6o7M2XHmFbRu1efrE7y173rRxhe8UuMJwjBccgD9ftJJBbShcoazkeQ5QrD8MSz",
  "key37": "5GFGTWDMZGBZ2tbXqotxc1Zi9YBJn2JJjD7JEfdP7yakijCwtCu27CdDLgeiECcSSSiSqZqhXnzukyMamJMKkMyx",
  "key38": "KW6zGJ3xF3xAJ9EgKCiPA7xQgjJPu89MpSkFCckdCdPDLMp2aZS534AcZSXhVBqQRbe6GhRhokbiuLW2ps9RMhd",
  "key39": "4XtUStmdoWbSdMo5ViwignHANJNjb5scv4fjj9DkTttMLxfkSZoTH7Nid2xomQCM5dSG3soQrDUWnLU8K3mayyky",
  "key40": "3zT9b7cA7R9mw9288XdtNYtxKo7gdF5DDNw4jpy55Y2yKme1NmnagfqDJ7idS5JC2p3oW9GJg9YjwDAbZqvyNJcH",
  "key41": "2agGsVrGoYummSq8R9CRh4ge9U7rFaXyvxSm2J2wtm6yxdEFeM2o8C4vtPGerk5o8HGBRgFxCk1VLkPnH1tBAUuz",
  "key42": "5xevwtLHvSNe2FyNDRREUjKSzPt64wR5jHoKC6EnH7kQYVTn2gWzpBz2qyMUFM91VkBw9MnVJ6JsPT9p8iZZabMm",
  "key43": "4RnZ2agtJ2GFSR2pzsTvL9Lqx3BHjSqVAj9cZYtEeQgg1pJMByPZLwQkrK21nFb5JQFhFdLbpmurETyJqrQfCLLW"
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
