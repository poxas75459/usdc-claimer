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
    "UWDBfBStQf89PJKBNLVgaWZbYdpXARBiwoUdZtf8xu8cikT3HN7G1UKBUTtCfJ7p2FwcwdkoTQimmMX2nmXyfu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Da5GCiqju3S9jkVLL6U92jEihAZo4x6NtvKL8ttTtbY3pph1p6JZDwVoTnPrDQaa2fwNmRRGJ5pbqEJi5zQfjme",
  "key1": "5ejm4Jd6UFJvQZ52WF5FUdVnREtLXdML544n3EdcicjkQdJ4Cy8YaVHwFrzA5hugJGBU2xcUeBEGVwJK9dHXzBhH",
  "key2": "4UJBdiuE4RAgyPsxpjgeBJZvoekmu948x378roLhLg9RqXZhqt4Md9Kzm597AorLq9nRZaayxfLMdLKoMVggqh1y",
  "key3": "4n6Xpqi4tT8gugwD9UM485kYFArDkBZsEQ7B87cKsLtFU6dhzZZBCT9Eg6FofhG5hx4tcFkGHtEbFWZkauLR6io9",
  "key4": "2j8ojHHDSSi1UZRUX7WEJy3KovB2LYa6dmJPFEPVhGTfCiXbLoCRYYMSdJ8ZU6zYwSaZKNBC9ibWAX9RZGsgfvaa",
  "key5": "46gYLne7F7qktYN5aUWHse8nLkaamS7ahRiFiwWEHm3RHGKzEq3YivUrikgviu23Cc3PBpqt3h9CdXwDrXRHpEG3",
  "key6": "5WvZ7kTiuwVTv7fSSdvVDyeAJQyQVnpk56GFrGZD6fuTtu4RK4CRTuzebAGCxaHEnz9UVvzEBteL1a9PWNNLyTgd",
  "key7": "38F2wyMokJz58yeP8px9aMjbRQWXrJwVHuXv4fwRYhzGfVGdEfoHaMydSAR43zKjtmEY5Se8gsZTRx7WFHbRXefy",
  "key8": "2ovT31panKuSVPzqf96m8HHdBKGhHHCnCG8p8RgK98zkHyiZUK2Yut5FtGwUW1AMkkWG4uTv6PHwdcFBhSCKibm3",
  "key9": "2deaQx8hMYbgaKWdwuWcstAPVMWbosLhZhBJgwtKo5cVrfmfYsfwLKtUBb1W6G3b6VYVXNdQtF4n3DTHv8Rrb1qc",
  "key10": "3gszez2fLmgbvkdeS2JHd53dGQKUBbHTn1rnHG72n8xPimS6hR8XsH4NPccsE5WCAmaep6hTc4e47EteK4qcV6Ls",
  "key11": "3DS2yCNFTcA8Rdb5jYdCUhRtiCsZAUenKSkykkfv1DFL3XYRER8dk1YkiXre3QRrEuwZgiVk9FqhpJaWP3AAUzHQ",
  "key12": "2jDM7c3jFCZTZCcSv51X3WrQTWaJGkqvWKLupjEATryGvBj7EAV4D1zH5Z5pfD2TTDJ14yjaybcrvrfH4ey1aCSN",
  "key13": "3KAC5wMXJRGCShULUYd4SFCehNPPPpCEuLr8MLfNUC8vTm3ymkRb3hJLvn43PcA6QPedRBePhsXVdmHBj7jys8hF",
  "key14": "61NDKRyKHqcEz61o8H7fdzqgQ1FURPRw2iCgGfWRpzvEinxyeUNbvLkhk4PAV6HmxzUpWqQx8qrkw6uoDut5SNWd",
  "key15": "2rq1i89hrH7SdCLVBX2Go94SkWcadWDRhcFnzKpEuzn5w3kH7EvgTqBsV2msvHucK5trELvDTzvkAxH63NHVgNbK",
  "key16": "XikyKvaL4bMNdaEovFHnWT1CWe3U41fHgp3czwiAtPKd2rDQMiK8TkSoW1sVLxuM1HPQTR92FzGnjGwb9yTUbzn",
  "key17": "3cWRNTv5q4on5vw1PaBocBSHyGPvMcqXoB5UyYZ48tEu8pxGzufRYQNUVyb8f43SWHhNun2f8fMGWL7Q62zdH8Ew",
  "key18": "yJQBKaf1d9UiKNGgYevkTDSYGXQkmq3fZY4n7rCnnfNgWyGCo6HQi2C7rCYoaYBV18D2dhxXPWhmKLcefq7XgqJ",
  "key19": "3HN6XrAhRSLDfDsePf7BtcTdUPZpNSRz8jVtq6QyVhGB1VZ23XVEb6L5RweS7EgJUjVksrqYkuM8PJWGhV8o8u3i",
  "key20": "635eVPbQVkq4Xz1qhTURwLLxCaFrsZ24PLuteTWA7KNQkjyrARi5VWw2rBZV6WCpt6tyywXGYH56aHtNSkbZ6BxY",
  "key21": "rDsjqcP8rbiETbyd5EBVpBRYduqrfmbrtveUS4TQHqmgAY2LAbNveTKDZmRrxrfRSRfdvywtHsvPdSraUf4cmVB",
  "key22": "3p4Z1ySMcRtmoob7swt3yWGQz4Jnkf45fcthva1bwJwVwLFsHfNPAmjc4TJVJAHKP7LTvjbtb8ikMcSCyZTh5adB",
  "key23": "44Sp3K3aJr5PCVNT5TGJSfRgtE7cXmdLRV7xymQdhfYsRoaXkWrswzTmBAVHHGySYFAjYsmcSsL34t51iBLwYCdM",
  "key24": "5KijHHfbwo5jc7HGxuAceYedkvrpZ5aVdSqvNLW6uDqAL5PDNQiHF8LBxJXauvwNfWQRFKSTEeMHbb6Uu9zL8xx1",
  "key25": "5fU3CKsapBfMYeEm8Bj3XaFukRRoof8C1f6C2oTonHZ8SPDVSABcGwXymB3VTvX2MtcppaZPfYrxuiAS11UsDJRP",
  "key26": "3VQs93ajyYEDN3ZUKHq8QtvVvEiqXJYLYpU2r6UgtGiHJ9HfxDY1Ua7cwbmSQXPQGp2mNNTgePX9DYJkt3LHpoN5",
  "key27": "5BhAycg7SQvWJ1YnzAcRCfDV3rAoKuQL6mE44i7QMG4bwhMtCehKuVK8jK2aPdnE1buq3hbo5Gq7XVbXaUeeduda",
  "key28": "5P4gvMvLwGaNHZmFCXYdEwYu7N1LRF63kHMpwr9QDQYP1HSUvYH2JXuXbyJqTFEr2pmtp184BHccYaaJjT1UhkAo",
  "key29": "54jopMwG6CXn9TdHwtsiTLbg6JBRFoNARqH4c61Siv42CFsjGtyNULEcAmA7mxLmeJ8UrcdqQRqZ8cjogLWPYM2d",
  "key30": "47HcGKGM6vV6FN9vcfe4KdVy7seTzGpYdHS7m2qgt9nCgWJJDqWsiXE6xbpvgTDeRKth7kfNSxTtNXjDKxGh6jaP",
  "key31": "2QXZ4xWnR8XqSP84GpG8PRYSYyZUQMWfUoyTbdo2PSZpVkimBAgxDCZohuSevzUUZEWesuKcFxzVGyxdFZgCxYUD",
  "key32": "4WixibZjP2sbLtp6dGXZ2TpGgkKQSYnpZuAC2ohugFHuErcNvpBkwHGjhL4KusSZyqGGcszDqMwJRTdwHq94wCEL",
  "key33": "4RZrTF4fz3SZY5PfFBhDpBLEQkXXQfCv1a3sQ6U8wsWe7prP5WYRcUt2AjkxrfQ6DWEZYiWjwoqYYSj4iAnqjVLq",
  "key34": "3JRxXxikUzf9SGohe2kRoRW1VrSf56WKwWwXuNSutGkjjKzAjpboZcHYmNKPNnjqFfsg63W8JG33prth1aQo77c9",
  "key35": "5R7A2dX4TgQbWKPr5XWHyrZMVo779rzjAcZVyzxtbw3gSDWh6bhsc2GEedd1cxp7JTD738BuS5wMgVAXXct1TqvQ",
  "key36": "4xjoTY8BxXpT7pqAamLN45BC9jXGTB58dCZit9LswDdYFN7ArL8MG1mEECxmtMU3YLXwLCgtVF7QR1aTHSpeJa5U",
  "key37": "EtgFrmacA5pvqyEG5KJi6neA5vgCjsEtnGrGFFGwSByDvbQtr6WJZhBTku9dC5xJfWvU7m7t9WBEWjUq6M6ENGr",
  "key38": "2cM5oPhswQwfhohgJCxdfjWjrMi8gmkCdiuF2Mo7TF1mFVYWSsEgQNtEDJ8AAupJgPNN2kVKARMH8trsEcUitLYg",
  "key39": "yjYywWMt7sV2XUWTx4MKZF4osUbAKbMAmbL6GThSvr43wq6cGi8hTbGp1cBrQBRiz44TLFLAsHx7nuLKcfhUJyg",
  "key40": "5AgfUixXVP8gHExxLJHhfcG2vVY8TJ5vqvxUF7kDZcN6tNGbRPZze7PJ59gAwqc7MBfp8hoRUnxEdrzTGNTJMn5G",
  "key41": "5F1pRMz5fXbKKP7zsX8P8jG7cNfKgkYjPKprmNJ5DCisC3ebXiE1TaXZzdoWbnz3VUAV83EvTPuVYxfYjthiwPH5",
  "key42": "3cXJmpisVH2nknhUDJadY95vuYWDc88Gic2JndbiiG6exSVg53jJZ8UTurZRdTn6USzB1FeGNcNGf7yQe5kxNWi5"
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
