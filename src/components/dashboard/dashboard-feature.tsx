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
    "vHy8iCGbD1sUbHig4PfZEZkfRFuC6eAmhxp1PZ5cg5ty5eig36YhYRmFCyK8xts4uNxRNvhvLDQffm3Y1gFHrtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gkjTYvKQf1yGSNd9btEGP1F8GTsbuto8zLGovQyLVJCa8gDrCSkzSAGMtznjK15vFXTybnWMKS16AUP7upiFWdu",
  "key1": "46ehQoCgimstrPFP7exPrYjNBFhdkfJhHXLNwyH4kDF5Z8jkYM5X19rKSZxtrJeVQE8zFimL4Txmvhdf1SmUo2Qh",
  "key2": "5HFkVn55drGJU5uwWvcYn7mVQtrt1skRJt3wYDT5iyYg9jTuQTT7TDdxdwPEkUXSNqw6BRgtaxcMX7MgQWD5PNfG",
  "key3": "319fewpfnL2beaJXiZTa1LnpsAWcBBrW9NEdTV5Pc4Kr1eUmU7hbfRc3uvzdksradbYoJiVZGiLq6y2ihUXutZUY",
  "key4": "3GMHS8bynUE5Cv1LsX5MzAvHCN77ntU3J8t8EcZH5mErttQEzFukzLHZjB2q28X7dbpyi27ZFtwqCLBBuknGmk9m",
  "key5": "5sLXuiDaXVCyBFYk5vg5LzNJ31BEuczj5Z7Awbveizv6UvjLW9sx3KN3fUDJ35jf39RDx9GedZTSzJMHacEyR8mM",
  "key6": "29wZyFrB7sor8rWwkV4QGGi9MRoEQXGu6ufNrCVGEJLvRZ1J5kVtFBL5fNym8AYtyuzKxBsh6aEBYD524kSWiQp5",
  "key7": "2UNQic1FLxuHxAiPq16MeJPS1M8TmAPUFmAWKFeNG3AvbXpZZzHzhudVKvkifT9PbD1K5YghGkHLxdzuutRwvEKW",
  "key8": "3Q5ksehTG22kQ491uJsdCQKQ1EuGunEQLL7yqvA6QZ3A95jCDKvSBRmau9WhfBdEcSnwq19fJgeRbU5D5bmSvUpP",
  "key9": "3xAE6EoRhBg3miidX23PdjHD1HvhZJ2vJYsbYNZsokeR23aT7bRCe45uqsWwc3h4SgtMDZXri5mJYM1ftL9x2A8S",
  "key10": "38E51PNACMm9FTPpuQaPkE28GGhSej3ycJSgSLoZAZWmqPJjcN9BFwiMNKAjureYaHLerr7VNdmwU2t3hvb83N9B",
  "key11": "2eG8DJX3A3Ty3tmfi8LPPP9R7HXR1spDxccd9t8r9KJKVvF4wgYt7QN5bhm1EaESuHUsEm5kRbEAs4o4ZwqdtjEW",
  "key12": "5KnvnF1XvwUdYM11xd67xNsg2sgyHEuqK4HrJ5oM4rQWKne7XqAPkhoQVCTMAZ4iVe2XoZtZanPNBXQniQA8ZUYG",
  "key13": "Dds6gsfFtvGkWcHGP2baQ5BnGi2cmYMfM5VseCaE49oxewxAh5EHtgudBKYPJnMHFUtCNs2vWK2oY4EYZ4hbLvw",
  "key14": "2LA1ZUasgBEdz9QyX9fz6dvmNAAsiAovajwnwoBuy1hXyFSNDv8hioEdYE5sxaWwuWXjAYW53JPgfv69XMmT9KCr",
  "key15": "4Z3mWtjZNcFwMFRond96zB9v17tzmHqbhpJiZjiiojBJun1AeJ19zBGeP1FdRFwYZJBFwsfFNjAVTKxQHevTwDE",
  "key16": "2fPwSSofBQzDMLj6jWvoRy2mCiyJqzE2D3z3EXsVXGqfE48xEAa2pvmafGDoN6Xodh9aRXLKjeRVGX9QQLrYssnS",
  "key17": "4NsGjRsRjyYRCaqB5WxvrsS8QPt68BJUC69daMNGpi9K9bemAuVPu8RPcJRSikum9wDnUDdo1ahr1CVXZ2GLKru4",
  "key18": "5AoaQ8T66Ycq5tFvH21eUpysQjKjVGRkoHsSWtE4rJYS3JoJY6FGGjK2n8WoUp3En2q75CTae6Ldvi1Fy7c1W3xg",
  "key19": "55KVREC6WUJEpLgDyCMkJjN3iv3xsxCfdwg6hH7m6AeRoJt4QnMA4DnFZnmb9aVAEffCkszCx5iN4yoyUeBi572o",
  "key20": "3QkDUGXCvrmtSNPR5ewMbaD9ohaEfgfu3bmrwzUv7bRMkg4ufNryvEBE1831hjp2HxxHuNiSMCSxtVY6ibZed5qV",
  "key21": "2DHbmRKyaXhVhSFjqhyAt9c1KyqSyPnfebTRLeaMk3UMPwN2tViLdGzXWew3GAAXV1gu6uKztXNgZaGFqPYcnudy",
  "key22": "vqdzwcrRZWPkkD9adMyncWLJcMYf8GNCRQbm8CpA2fzH3hqjvzpnYeZvkYThuBfo7BNpUxdHT43CKBjK1H8HLw7",
  "key23": "pmN3GqjbM7rM4ZNF5ec3pqyfZSdX8WUD4kGQ184mZyRkiCNYnFzyaELG9R2L2hBu7MHzqtMGYPffHXqyirw7BG9",
  "key24": "4U8xspufCLZc7eKiFrBY64AVxPXqzk15bsM9kFvNY2jxHTnLKQj4ajLUHA9y9HYJVnwf9d2e1eaax5bhjJ62FQ26",
  "key25": "2oYb37iNCJPqJnRa1BwyTwna7eV3eLSdHrHtQLykx1CsY3nZciQRbnbQqmNETNv83q5AXQB3KHqYgsfJF3cnVvka",
  "key26": "3ryBanQB8PBP2JAsE6QTtDKDNQTivoptFpGNoAiZt3X7j36ztN2HFcm8PPhoTz8u1e7VwPH1G21ZZZW2sBaEGYSM",
  "key27": "4te3MdCJ7k9AfTfgPR23DADKZzYmVzrtfysaf9XJorbg3eEE424omTxLDwnab8J9gwdwpV9PUuMpugCQ6mWeNKsw",
  "key28": "5npckHi5mcqgK5GpipmynnXnJckMDtHCf5MDx2SmU7DcZ9WfuNaeQZYH8SEcrFEk2Qj3LhTmbkf1M8TCoX3uQnbE",
  "key29": "uqYwtStxGCWmPvZZZ6Y317YTGxL3sCKQ8RC7UYuF3gkfQ8TT37nvEVkyXw8jZxkJBkxQActnhHRG19e8CcykSgV",
  "key30": "MVUfCck6FUL2P2k5ETUHm4KYTLH4nEkGFcJmnE59dCDkPXkPyWE3YK74TvHAqkbLBLnsZbTQR6p4tdhNWxdRtaP",
  "key31": "4yaAzjtis8ggDBHDvKEgFzxApWDuwYXXU6ZtaPBJHhBDEwHjX9qwcuuRd2e1V78nt8a2ZJurADooSgxbavJHD8Df",
  "key32": "Va1umN7CGdpQu36gJpDu9vsR7NMfdiWmXLox5HiP1NbA2ANxwpdjPmaSna1EiTKRGMYM4HYzf7jKrVYzffG6BL5",
  "key33": "2Y4GGyoXSkJ9pgeU3bxLEHSwJyt3rMQzbU1ZUUb9PpJvhFfDg3ZgPxnM2oVeWdLXEmNDRm3emLBVFfFw9QbaVMvp",
  "key34": "4v4qyCyAAUSsfqygiUxn7CUeyMXtCa5R9CJCWxrnfeLYqgYicbe4Li75GAfWTYsCgTuZshkTZm2EVfeu7iiFGSAY",
  "key35": "3dfpW18z2nPySK7B6opGgr2dhdLFxCJ4ZkQbQqZPK5yaK6PdZLFiofHo1F2FZMBE8PjU4snwKb5gwcBUsz27Bfo9",
  "key36": "4BF9NMLv5hFddatL77tNQcqDtM91au1CpBP5mzWVYruRS6ubSZ82Q331dgrKfRnoZv37mDxuLT1hLHYbgjqKVEmp",
  "key37": "4641fZ9FCuycFcsB4S5FVTyrcoy1pH5jooC6XD6uHUTd9p3m3oizdjz828mbez6T3f6ZdK9S1v24f5uMjQuGUcQ3",
  "key38": "2efHkV6JcPcSNgzz2XaJR6DcekAsVp5P2PzSW18EC3z9mW9LnLCVNGn94mLBAXjgpDj28hPnhxq4Z87QNzhk4krk",
  "key39": "3qogisqRL1UKEk5Qj4dJ8bpQZeYZpV1xTrV23HfCuqR7HCTahooVAUPsiKTpuysKgZSTSfC2obyAZrGNCBz2iNMk",
  "key40": "3EFo6sL1N5hp7eZhNT2Wm4H7kucmM2GDseqJumtcSeDYZEtc3BeiHyD2VxZPkCY7a78vQZ4G29iqudTwYpi8x731",
  "key41": "3DndgvTLGKfGoWwc28TnXBkRzechuUjjfYqfAvyNLv2JPfAcvjRhDb3BdL6b5Ldi1qGEgmqWzKKSVRjiKvzNdQDq",
  "key42": "qAv9r5cVJxg63t5pDEGPe85N134z2ZCfHr4eUV8CQ6gUErk1QvDMnox1SF1X4t8eXGEU2ktoPJpNtaUs4VzV6bi",
  "key43": "4afzNiiX3Vucz8q1KC6xAs5BdM8TEcsCx9dBXV3jn3nRb3f593NvkGg7ENzMHMvonmPr436XREKs3WoXHGJvJT4r",
  "key44": "4C6bYGtfpb3o3YsYkFkWEDjNLRBq2CTZrNR96udQtFwg6f9mdLq9A4EiUMp8pJquUeGFVa7w64kS97m2bA9yF1dV"
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
