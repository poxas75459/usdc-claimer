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
    "4EE1YH1XxaY7jru1PgR7BuN6aBSgroghoYFa92ATjxVALwmnfmZTQE2ZRQhjceUv2ECQVAVrZuFsRT5TEdUP47L7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8GfxyAFwLUq4JxxE23M5XTj7vGsPb5JaxKMTXWzaK4MGG8ZB3rnq464F2PFXtjpZUhUvrt7TaWdgZBRsvmftDjk",
  "key1": "4PSpjRWSRrY4nNtaN8UEaHiuYdrNDhWjbbhP1Fxo862s6vU8u8nQxoavpvznbHQswtHDrcPrKvCZg5yzRkcoNutM",
  "key2": "B7nBvny1F85RRvDScBMesvfBz246on2j7yBWwkpiCcVGEeDP7FwoDz1YW3FVYxY5ZfpCVCiks9bDKjGG1wNvDAt",
  "key3": "2re3UugS4F143BTMi46ds8QZmF4nLMbAGF9WB1oE6hk5NWk4WLfBoDTBxkafqf5ZrYmR3HahRRVfAUxHa4A2FNgW",
  "key4": "2kJZEtXV7YHAe2LAu1ybK66ZFy3h1c4EAi5qvKDzKWEx57yLt4C8respsRq5rGkV4wNC4ueEtPD2CqFHSRCod8By",
  "key5": "VMHjpJBNZtyE38Ko8LXuqxREKBii5rQrXvkzt4MPThB45AMgaJGbA9YgEEqK2sh1sQY8j8o45dz4mcffuejQtv9",
  "key6": "2R9iHG16cuHeBCMkbRXGjRQ756o8BrKke5NwAYQmZZm2dvtWkDypQq9GrQUyJKqoXcNy6cwhpbqAjvViWVfGbccE",
  "key7": "5n6FhHMVX6DJ2jd4Y6ZpdLqVYiHin3HQQH7r6KjGJMwMnEaiSuNHSzA3dsj4aFqLumGZX9C7VSa8dW5E8PNyzAuJ",
  "key8": "2oA3PpnbXpmkZH5BpQN5fCDNi9jFoSL5ksFQ1pByHoK4m5zB3ckVu88QHQPD2tNFfnSkqTt4mhbqq2iSfAaCNxWF",
  "key9": "3DgnreASiY4HDteeR1mUH4xanXn1hzfQ7YJdY9HXqHyBQFpodrwJkD7GTsiz3zq4U42mNzzHr23ktHDwfHWuexYC",
  "key10": "3RZMnxUHkd7H4FompsseetMzAdYNu4vPm4WLY9edqLU4UKJRiHC97wLFJZKxFZB6JyxKSRL6ooH9pPSXR9QCz5rr",
  "key11": "36YHiUYNRWocKs5t9BBYkjq7EmikoBRrjhsAy3LtLWJhoDwWKMbVWMGfZoWWohQRjZWMud1fDL1wWbrw3HWuK66a",
  "key12": "57dyg2r8ZqhFmGBuPfcgTGw6m6LesdwjppryEhXyKDLAj3mv3eghm2BxKia9SkFyBNSgDEc4Y6vQ3354wNvztNTv",
  "key13": "5nm8BfYctEfEr8mKsUd4xH8cb2ypussowWx8MR8VZUqc8U2Qn7134Ut49Yatz45kbE2ZnbzJijF6HDHSrFWw9z3x",
  "key14": "36e1BUP5RLCYh3WxXDcAgm99CEq1bfsdAuYyEpDsvdF8G7PptfUwtgYHy9XBYGUGmC1scnCLXwFceEaVZXXGpu2f",
  "key15": "2Ty8bqKLmqveGLG2cKVkGLztQc275xRed1UQjPCNt7Zvn2P9dR8k6QtUXsF3GYi7zFC4yfttQeaqgrQjigQKZr1g",
  "key16": "2FSXk8Uerx5RpHihcHk67752mem5F4wos4sEnSighq734BAXbQxctS21qDYXSERbmVcF6Zoq7AsRjNumjz9byGVM",
  "key17": "9mrwnCQ5NVzRMa932gni6LRjLC66M68nHr89QFuPrJNWu4apAVnfR2B1Nngyj79dT2UxiUK24PXQn8arwJ4yUjy",
  "key18": "53PnbpWZSvMoSjuyowkskai1394FrnRRzhC9Xkg9MSrvKQ4XD5GdgXqUtG3vSR8FmNSseZbsmTgE2ZFKTpwwbCH",
  "key19": "4Cy7eG6QPvXHC9SKLzycL84nAjb2pTCL31w3YkVt5bm3J2P6dAvYmYDcqdFgkSK1A5GrAJyERwCi8vKb6P39SNzk",
  "key20": "2ka3SnFuMCMPSX452SnNtbsyfBZMnzejdwHGnZ9W6ADgHfUCrJt7xW2MsWwoR6fNBvWBpiLtbxY5qbBGEcxKxdXo",
  "key21": "3xcSQfnR8FajPAkuVQv3RtMEXVSmAFjia56Ptwdjzs3WZZYMRCV9jy7SHPqqaUb5JmW64o2qULMk5YK79L1MErtw",
  "key22": "2Ef3AgJLrLf53bAdoJnY4caZTattykjMBvcSkjqBeZWuzSdZrKagyprsCWPQNwaKAPE6GVB6CAPiT1S3CXmzia6N",
  "key23": "2D2w4uPJ4F82dU855S5FRbJbfiaNRJ28AcG1oyvmG1FdQ6JYSyRQe21SvWehZJmrA4Tt82ENbApmJaniGQVv4X3e",
  "key24": "y3QfpUfhGbEC4H9fVgptPQFWYNR35k5AU2hW1eckBvJpDczQa1cD93sFrGKfNGH9QSwe6zygoghwHbgjFaxRBYq",
  "key25": "QBc7YCNeBEkkDNd5EeKaQRiV6CHMBuxMTj3mPw58Yje9qyvA1itPoEVFvnC5VEE4annkmS95iNsmMPPyDG4qbUB",
  "key26": "2f9f8iDmCfQoVJV1P2gC6D2D5FkbP6Bmcjo7c53qTzsNDsTUKx5XNZEJZVx9XmMGbJs2kR8NWSxZA3q9GyqDa1Bm",
  "key27": "3cji8Bt1ZKKnHyrNvnBtxq1zk3djJVfE5GnDqC4M4o8h65jctXLKVLQH8UhL4MPKgH9TXkKAMRmisbVXDCV3smBX",
  "key28": "4akejnS6HDvWwn86rZgGVxhAuQ8ZVXPcGMBVFJufWjRbgKvCzxozSBrkqA8S4EjFuCzKMUWaZvbTdmaCK24Daj5G",
  "key29": "4biPEGukL1ES9ysVxhteSR8CSRyDMz6KpqyRUbDDtaCMWfHPhHQaxmRL4XcYE32mpxfimEXewZWJNiFBTgjnL64q",
  "key30": "3Mu68eA3kuBgPzBoAEsfcQbVqTYFPMaoZGw8SoBG8y7UqpJCZnisnoSxPHWweQ2mikxfvPu11Z2tUPbkJw5AyGUj",
  "key31": "2UpEnSoY5LAwy26DZdsaMh8cjNnrvC792qBMHE84dXHuKP5n5SLWrbLCawCZWYHBscJznydd1WgbrDwVjca85vX",
  "key32": "3e6Xp7ycnmkVPcy6mn3ReCmnLxjwGeBj7j7hJ6oFNaU4piEg1bGhHKFpbcHsMww1USeRSsHgMzXsEShp4U6ivzTU",
  "key33": "3c5G3YJeHYto3wgSMhJ2oM2FEvV5gvEvyLRaoqhSW8aSUXSR6Gebt8Tud4rhCFyswTKJXAFALZHRqXFHkvdckB7f",
  "key34": "2gJzXgYw8BChftFEJMgg7LbTRpvaHZ9feoSPNZHop19D4r5c1zPY1P2hXdyFK2XeLTSN8PFFAMdRoU8qcb3ZY1yP",
  "key35": "33EChpdbKPpE8RuAdH69jFvBKDQNhPCg61caBHNa5ZmudmwjXuACF3JFjXw4dSBfRsUWy7f9fiW5JUbtamCFiEn9",
  "key36": "o1ccDf33L1cPUxWTczJPQgjBCDVPJSueBfsXCNN2RoQCEySrueUt35VM6WwYjC9uchVzbV2KZK1Jc9TPAnPAmEw",
  "key37": "2oQ93kfoJVS48onNi5PJD1dm1AWamtpWob8EtYyX3zUHExL5V19pzARNweMXmkaXbFgRbD6h15AWUiD9nTWeiifd"
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
