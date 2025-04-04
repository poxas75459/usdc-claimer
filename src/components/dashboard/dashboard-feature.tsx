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
    "3urYYnPAyDxMa9axrCwh6B4TNUajZeviYkeWkoR5eLkSeW8SkGxaLZDj1CszGgYExYs7L5BimZddg5cX8sAH6iwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zWxzNGqUNYJwVsZaVnkZPKJJwK8ecub347AAjHf2PzQZQ5BjDjeDVyPKnDy9aEFd14qikkDxQbiJV2q5rdNyuMJ",
  "key1": "289RGunrVrsCxJC4YQDSs99zfASg5waBsEfUUR2jXmLTgJVsBn2PtAK2vpqYQE7wmpXRwsarQtGjW4TRQh9zVhgS",
  "key2": "4qhvowyhfGEiMvdm1LyGfuQZKyYRD3BfDJBLxFM2Hv9Rov7JFh6Jdf67ZhRKktQKLT4YihL59zqaWFrnq9orj9FB",
  "key3": "x7p8CZixb7JhvKguhLtqoC1YmqkMmjzyzuptHkAnEAiFDCYmscanmZUNSJa6uAXXGouWwqcUHFiU4AYXP27Yfoj",
  "key4": "ztimEpLuWwRxNnksUxzZGJxGB1HGzBm3KSsSRpKKCcYnCBX88eL6ynUyToYqhuPuPh4LUqwsErEsrtCV4BWcst6",
  "key5": "Ltk8nmaeyfodQbDdpvmWqTisct2g7Mqb1LJvL2z3Ug5b9P72Td9uZyFQoXMyeaduUT5Utz3XNWCATDjPiFyvMFx",
  "key6": "3wD4Z124LhZwDTNbSzzRCKnTaQg6pzg9hqobsKDGrYqew9PF9DAqFcLfxwRhsntpGDMpb8ogRsmZ1U6eejMHA2Fy",
  "key7": "r1RLTXPjZaAV3LKjx2fezTsAqr1XUFBXAwGxu5eWRkSsrQstwUKLp8QKcw8y1H3LjJLpMSMhGiQZj9wgpfc73Bf",
  "key8": "MASFvr2CmbnCXATKtL3QTcUbjzyDGsJ8WASN9mXa7ay43sx5ge7RmwrVqwYtxF7fW5GB4i5xsr6okiNqeAaEfy2",
  "key9": "2tqT11xAumnjSjRMp5PqvJ7qYqB2zJbPLXV8RAea849KPrZCsoqqyGi5n4aakBV31XwJLxEMPeTk5VscKzKspSmG",
  "key10": "BnoLqxB4yQetRjP377bdPuYwGLGoTQz7sdzUkbDZxsUsE8PsikmL26nzmWGTrvg7TL6yMaDppC4qt5DrTsBbTVh",
  "key11": "croXPSSJ3wc7pPwGu78ZFpkYK4kscvPmbT87BzsgrojZcsyPuNfdmuNpVVukD3zW2rMQec4oKbeeCY3iTPTSfzX",
  "key12": "2ajsmXAbPeviN9g2AexLWhNoHUTJTWinq5ctiyoe1MAaH2AfoJney7LqSe3t9wqS8XQUnnLrpRJwSNdgXiVB1zGa",
  "key13": "ya6pku9fRHuRHnwXaDc2zWXTyzpCnqGH6EZ8Un2Qoq7JV6aesG8DiGC68Li2maQFgu7134oD816rUX1yMK2VPL3",
  "key14": "5SsEn4YJRR9tLDDWk3DQbaubTLcjsgNtgXP7nEARySwzxgUt85RDuzBqLtDPVcVQFdq56FHLyFAjpRRWC4eqmqUW",
  "key15": "4TApJaT8sWca5WjRf255pBYen2jQ85XfKxTwyyDjVDamQjKXRSkinkYggfFfKDJXf1Bhb2HYhxMscGSRLym2wLd7",
  "key16": "2wQcLNSY2ceiAGvakeDvDAtaLe4Bcr95yivwucMRQPvst3Kgd9fiP6K9sx33uacp55PjkfBjVfbHMp24fQthhpdd",
  "key17": "3h4iFKnPTthoxmyykD82UkKsL3yu57pqfjmhd2Nz3Nu6fy4kxMT8m9FHgbtn6S1Qkaug5pbLXyf5rZUk8cSCt89x",
  "key18": "33QEZZKhSN4ryjUUFHqH8E1gDyEjZEQENTmhtRUhUoCwpsiQuxeVZ24EjC9wRQbnXHmTHrbzLSFJGcdWcbaqCFjJ",
  "key19": "4hQhJ6tECfgcQHyDMCsCV4dWie43BqPAzJeBKQDzCJg7AuoZPhaKY6ag9Hfh89XiqBeyf3H3Cy5h3gP2HvvXBbjt",
  "key20": "47Gao7vUURm7JkJvwXTnXRL5PaEiHqzEdFNrkyhe9BSacT3Y4acLFY5A9CBmFT5ipS7Nh5LeiarAaYxXVx23czjR",
  "key21": "2JkFqXhaGS3YkjEG1VVb2Uym582ArFXoSMMKjL88JnADdofzGMuYNw7n4Aufz4uJbujxUcQ1EgbNcRhYzkrfQu4Z",
  "key22": "3qskWQWoUkdcECEKiysuJv5ePcQqrXttcYFvxKwnKyimiTukDCvhNDvXS5m1p1qPo1xsPJkLE7Gb23NbQiyN8kbg",
  "key23": "4NPjdTgtNYPPD53gEEWHWCqQ7v41exN6naJt3TwNv8weCRzvsJ5nKrFQ7Wv3Ba4o2bF6ETPuQtHQNEUzLCLdKep4",
  "key24": "2wcPCQvHFxsrzFXsGQZsZ6eftqhjqaJpFUvabjMSPh1aEcuVhigxprZdvDKMRaGX7ThCo8EjzVbsWYhwZYwWsx5a",
  "key25": "4JSz9wdGPY7e2RNQY86KxVE3NDG5xmsSjA6YTPRfo4P1Wfn9w2YG5bcBJGeufrRptySs3dPPmFjfeSGeNpqZivZ5",
  "key26": "3sYQvsziUxXU4SKNur1Ykxj26vVYsX91vH9DnTASgeHoS2FK4bTeA1g8v64y27x8gGVw7V86hZHm4cPuszkKT5nz",
  "key27": "3LUudjNj8GL6XEvW16eNXeeLXrjBV61Xu22jWcSpBJKwmm9icoUHWtv6eZmt5TJWZAbeGppuBkLRr1Nin8fa6Ekq",
  "key28": "4gsPPKKqdptbGEkRyrrUnZf1eeFeuxeKtP681tAUfUi6mEdzFG8nhUG6DcXNoj2RP5HQ8PCcnXMnFYhqa1u3m7mc",
  "key29": "43KP32gn6DHEX3trtqzXYQx8aQZwNqxMpkejuhFDtpPk2fKrXTcYYGutFTAF48S7zQPo7ctXXHrPj9XLBzscu25G",
  "key30": "2JGUEcQVPDwBE9vb8xHLprEa3a8yvMaVksK6idaoS5npCFV2oFwsCe2SvGU5zrRviDmsUnwnWcZoveGQxVHJj57y",
  "key31": "3ayVRRZVEF3uGP3xAf7wD5cS6YwGu71dK74npzb93NaD1Vj47gCeAkbU8goyea3U8jMfunU6u25kp7GyMXFv1jjZ",
  "key32": "4KYwu5pFYZ3qLbZ9cXi9v1iajWsh4F7nb2CEQPkWDK4JXJehi7Jz1Jpi2cnCAfvPzbQs2D7DLqXJJG3BmLckbZuE",
  "key33": "5HnSMUcN9kg5otJ1VQ57Ht6oSWVVb5p6S2RVayo5rWhx3uP42FxaA5ja6fLjfU1jEZNKUzX7yPCHZ4qTx1cQnjPy",
  "key34": "27P9iTeauiQa8niCyd5QRYFDjiz7FUWUo7BnzpQ2QPvRmEjHnmLegL7CGwjiidBcdeEVUz1xm5aRfLG6j3uUx29H",
  "key35": "3wS9q61g98Pj4MDScM7hmVi7hAruioU3bFyHZniweG7xcvfiU5NStwMTv9PojYatdsrgSKusdMttC56FCjh2APWr",
  "key36": "4yuKv58Pvq4m9hUq3XiZE6A3mYPXrPy2gB9A8QuxcpvW8yVzCzS4QCyrtduiJ2v8NVTj4Na61DGBFn7HSjsH47Pi",
  "key37": "4XMaLX4K8nMQSHir6U4ESo34nhTcoFYL5RGWJBwxgofkE28DKgZ789g35KoF6S5RkcjV9twXtvhNrhSSrv8oKiZK",
  "key38": "4dgc3qZrPGQbX7XgzXnfMmQJfSBX4h15HToXo4B1ugHVQunvYkHieTNDSgVmp5dkm4GNnbKsjeVcX1FyLBJ4gr9W",
  "key39": "3qnwvjvBapyFkTAzVkEp2XYnSbnZH4xuS4MBVZPLMYABNVvdjzvrX2CJXbsscU7VHQNKrF7rpaSJ9rxLP4zb5kHB",
  "key40": "eknQ2uBHrcKbPB29cWJtZm7dS4rgkCmBnL86msLJXKwwRMtYKS8GRv9q2vSDwBvaDRizfJtfAKGyNne8gQRs5vc",
  "key41": "34PBBpobomEu9Qq9EUfP8fvSpQdiUJkwuEjGxia72WkKLEr7FJhu3JWgsmye8UbxKaeUk2LoHR287sEGcjVui1Uz",
  "key42": "4H55QAN75BsGPMeNHdp5RVYeQqb8tJojiypKPg92kLDq7DPM9yZEyKfLUVtY1Hyt3sr4a9UN7GFp87iC41qrMNM6"
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
