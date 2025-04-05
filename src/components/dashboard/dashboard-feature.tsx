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
    "3Rk7vni4KokaeiZ4yYnUrfPaHyhhu15gT3TZJQUDS4c5DHDkvpYrSkkXQthDwtPnERxke3VBY5cXhwiEihQNAGY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y9ZpXQ4urnMkm3AcnarKTaqBwetm1LttymBuNfi2jZchTvaqiyaFi5vToYjDBa7Tbj9E1xc6P44uJVeoC8Xpccc",
  "key1": "3CEgswepqZ97ZnwRVzP7XqCsZJc9dMDHU2htX4ai7HXn8fDugwb462mHPQUUtnB4LYRoLj3QYirpdz1enGfiRjG",
  "key2": "2tKHptQXCUhQ5Y4BN1zYXUPp2QUNVuZV79EiEY55cVTjkQL2NdAEPgq7URBST8eGnbSYHhKSnRUiU78ALgRaH7Jp",
  "key3": "3zZFEqDPXmMg6g4s5YmUZyAprz4SDWBErqqU45rsNj2d6trnt7aAgstY9ASWEyVkiwVPDWK9duN4VzhzF1wPDeBR",
  "key4": "5vwP9yRvdAPsNLKtwHM6MZ26BCAFoDGUiCfW9oWfPUiLduQpoMAGj3iH2xJSQK5STfATPABhFPzHTfLeHUioKSg2",
  "key5": "3vynVYVZRfWnfCsCPqrFRQJGFffGuLSPxAe5rEkigdRS8k1HuMv3Lrgx4euAAyNSkmxVT8Fx4RojJJc3KbhVmN9s",
  "key6": "WfgXiHiLcSKNNMzsmAtWNfE9Vg5fAdQSjDaP6DWtwjHREDNyGNrvZiicdbwsYnTek8aEVm69bdT4zgx96CeuNiZ",
  "key7": "GLjnArShmbasSz2uRdLNykPsx4Mf1VWPX8K1SH7Y4qisvFC85QCYR13C1nCXtT834kD9CmjCV2nzTDgNeKdZ3rC",
  "key8": "5kfTh4d6VncQQxUpCFE1yzD3s7MHmxNuXuN9nTw5BUnYBXpbmBs2MYwBo724aSLyvfRukLfXx7kxW8Y8TyfUrLkU",
  "key9": "2gCmYiwimG3sQMd45gN8K9fF94cRdy1sVtUTj9qFGnv8M8yVEyFXCmKibU1DEj9jRGQCGHVeeYMJwdDJCdpTn76i",
  "key10": "5EXLKoYCMQVipKy8fbRoyQYrsNis5zG3penyJ8W1hdqKFp6Z3xqdDQFbAYyHnvHWDN7NSoVYtWpLrKbaRJ8zVA91",
  "key11": "2A7Cg4d8D5FBEJKkSe4rXZeW2J28YMZztFnfA4rYwz3B4NjCg7YFAsd5dqExNGdFSHr4tT7A2n9QeqY1ZnqYFrhd",
  "key12": "5LvDoVXE8Jq1FbryQz4dceNRHFpfyEFFxbPicsSffWRooZdkLe2DJJRUzfq7XKzGZQmoJQcEpQQJzUEaAJNCqBTa",
  "key13": "48wCUaU7vPTNn1FynMQACC3vF2GfDS7fb5TUhyuVZXdzEf621uGmb17w9fJqtMJnBV3WpY9Du2iQVtUzMUDWSf4t",
  "key14": "26tbB6dyhv1UqNTnTDESCBczoN3RaKXyCbyaQQL5V59LtfumFqV5hd4jzsVgSqURGcTnu4BfWLXuAWEQzZmv9Vj5",
  "key15": "49vLMBdVbjbvBYKwnzkNt53HHYvpUNo8tJSu7vCkpgvbvviZZ3NpHVUmuVbbskFjQiX1fqBEKoLyGcpKRvVZJLxw",
  "key16": "4MWJynMGfqrBo4oHRU84FQarfaBLnJH8AgyC7gfLypqJaCUokC89Xz48DAnf7nzVrZxJy1H7boasm8DVKeyUFSjz",
  "key17": "3jiSMVDG5Wp45Gm5dnSdCSTEwxLvN3HNKZTvySEHYvERJt4nBrSamDAY8cah72Q2pUfskWEZh7uUYqnqWDziMudV",
  "key18": "5GacssVM8yMggvkNAodUikg1YhE5XJeu93GdExgKaVtqNEd6hiawu2RPuAh41G6cx3aehCEahdFUfmKmPm4yTZxW",
  "key19": "2bdRqxGRWt3mZbhkkhTvVnnYdMSen75h5FbPf5ktDxtX1UCAT3wLsbvmFS3EE2ZbX7gyG6gTGh4vh6fxR436jhdt",
  "key20": "4eVLjJgASiWukxdsUmmzgRkTjFaFeY4jjF5EN1HnBtBN9ab1HhKDTq1HtRJnvbRtxnsuBg13RxGgFR9xhvYA6Fax",
  "key21": "3rxdoYJqpbVuLbA51LUYceBPoSSnimaf2htgc7oL9esDSB5dcPQZUecBFCNsLjRP2bvD98K75ZrDNMaG9AmR8m5J",
  "key22": "2VG45ByxZetqa3PDM6YDJAzsGWJbMCibhYqyyFpopUfYV9XqV7Md2qfQCe9GiLXrziiPuL9W3nsfAbCtzC5TT5cV",
  "key23": "52oFdLabe7qiG3X3BTkJ4t94NUkfTZqMnrrAUBk4gqmPeTCVgoTweHziGdE3PaNsjtmENi2dYw7wTS4KErUR5GUX",
  "key24": "5yJsJSygnEk3K7svuENqQjBaEjEETF1EcdfnXw7uiU8QjrxkFJ7XEpVQFpnctek9NgpcTHhe1gFvvu18ez78JswG",
  "key25": "KRg6CmsWvBeHuQFMQFkkvp67nL5KB573aVqTecJcGwEsFJg4tdnhxGPw93C4BADpsJvrm5PNBDuKYPi5PaWaYVi",
  "key26": "39qQHZN6XK8o5sSzfzYY8tVwsAkgfA4XpgVF8152CML1xnZRN5RoubQuHRjYVjGYJrGT6mN2jRkFruLy1r6obKtz",
  "key27": "5ipVMCkxzUv75gADkPMWgofFFyKw7gp5TqNpRy8KgwxjZbsYScUZKgpivdXXH1WMQ3iwAVc6Znj6artvR7XLLVkT",
  "key28": "49KCBvJJ3Le48g3bw4CRXevGp4NNJJSYmQxpHgA7cgJc39R4NfTex9X8dGRQsKzEMuhkekmFAXxZFPguk7RgUW65",
  "key29": "4tKdR9NsH5Bto85yV2442k8JuyMjeXPEMWt4Mzp3z5zBXougo2L61an2nGHVMXeu42anZBNS8RLQDiTVzHWCHMjm",
  "key30": "Rbab621VKmBjGEUj6tLq1X4Z1Y85w9ue7mjnq81C6QnHkdGF2VgEFq3eVUmBT3uBkAfa5ZrJDFCxMvs3PxutVfW",
  "key31": "2zgGm5CcqTRNY3VpUgaeFbA1XLaZgJqUzUSZ1cBPa9cGSAbzsx5ZmTCQhSmZbaXiWNMqAPpHBNPgopr3BGyyePhn",
  "key32": "2EMQJSQdxYbzva7B7ufX5CDNQ1vWV2Qjbzh4qua5r9mQX2mEgWoM3M4PtcQzTi8ryqcHQPpb6uxDvNQQMU5MXgyY",
  "key33": "3nMsLymoor1siu9UvfQqbthuWU8NGYqos2Z9xkyXh9APscVF2URRvJjdNFpGbxzJTDq3BMRfCRhiLRpagbFAPur1",
  "key34": "5ygYisXUstbuZYhpxFvnf6i5J2Kyvk98SeTf7wRWgpwgY2cARdY9yeKwiC8WWsWQSwMr6gFZ7b9us35cfBPEB7r1",
  "key35": "3i85yfSAqP3SvBsWkF7XPA29weTHzZs5hWaUUxWboUxHtPEJrzaR27ajmTHXUrktUAjNFTHpJRmqmuaSwRbCpDt9",
  "key36": "4YDqr4S9jSBk8W8aKXdNoBRoW7uXhS2Dj2CzXuNHCYXfxrrtNtSwkn71UrZBEngR1gLvkS23WhAmUCfd8HXu5tvA",
  "key37": "5GPhnC7RPZLaLq6teDZobbpgVB2muehQyH2escj9WFHimqmLXPWXZgDqMXsesfHzaE9EN8xbXsA5oebzvNs1M1Qu",
  "key38": "3QvKFbWkaorXdxff31rw4NDDwLbHrH28PBH6LaGU1wjB6vfRApGMy1HvQXEze74RExBbuskh7ueJLS6FdLy5GtYw",
  "key39": "5bNuj7QgDp159gous5ho5DJrwTQMF17m5c1tCgmU7xeRhq43fxkEWTs8QBiwmvKcG4anbkjvwXkgX2XKgv9KxJDS",
  "key40": "3qqRZmmyW4ZqAmgAqhXSPSCxijiEPheunDZPv4AjyNMaa62JbqF89sdM8Ekr4bHj8MyixE7K5zdsXCQRiwDWkanm"
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
