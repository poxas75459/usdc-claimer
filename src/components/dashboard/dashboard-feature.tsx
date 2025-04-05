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
    "2xr4XAyLBuRjrVHGWSGCe4d4DyzJ9GEGnqQTjkRNWYUPNwcQjcxdcFJZVyZqoNvGQbyZopaRoAxFgLax18cKHgeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RV3LtijNsCQd7y3kfZ7rdyZcKK3ULEqDmWirJjLq48fJfwAyn5DHL8Zv47gpV1izjex233fZYsfB3y5MubedBBP",
  "key1": "kypFhX98NGL5Mh6eFQZxE5uaekUT3PpcXopQEuXB2EGGfLZjzN3YfLsK9m6ebneeZ7TdGWvXLHKj8NCsu9Wcm5Q",
  "key2": "2MnSk4RhxUKBY48EHNCDksEDf8gduzczivhsYpdNCTHPmcEEj78Wxp3gHzJQjT17ra8fXt6Z59beFRN6nkopihQG",
  "key3": "5PaYCahYdBeT6QQw7dkiFAS2Evsc3L7GMKfyvSgnFi1yNf1rdfLB42aBLw3qfGXgANc8J8utZHU3X1MLmLAv9dXd",
  "key4": "4sdz8MkLkEN8jfz4rJD2ntWkjzjP1ey4xDCnEReQpPR1GZg9iLHcKAkrFBHcBRBMwbBf4htPq2au4GnmyeNA9Sh8",
  "key5": "49JLTpQJUEE2UeaVHvoytXFLZ1yLe4fWWTwNapmerCJ1yyjNXwZfxmqGGKbkPP78G5VDGkRZyqcdrJwPvc56grgc",
  "key6": "jVr82rJk17PXX7K6GMTsaRUXd9LDCrVgaEvQYsqB6VpK4DEgtbyWrjzGXgxBCPBZyMKG2NewRyJj4ujs8AXtwYe",
  "key7": "54MptcYDFybFY6ZPFAkWHYzbXeqbsAgL5iKerKaJwquVYxcmwQjcEBVNCYkxkYhaD5yAYTgHyYA6CywnRc3PwxRG",
  "key8": "3Ug1iamfGkj1f6axTEt2wwKf2hjShyDa62r1NfJNynvhX1RqfK1igBrvnWGdtuR11a8tHz3JT5ZEwDgcmb1xkqxW",
  "key9": "3ngBb5R23RhmPKVwhT19bo31K7a3oSc3DmoEkGf8URpcKbMpuqEqx8Zz2hp1UxU2n3KQinPYqWY8hH43YHEs7aLN",
  "key10": "61ATK6nhJsdKibPRQDxAyCnyFfS5xsAqr43Q8RsK4tM5tu16p1mWN2iQ1KPM5gxMBRPZ4MMxZqie2yP66RirVkXi",
  "key11": "4Fs5RAdSBA7GG2F7A5GSkTqmn7GjHQRxkHmG5myi9f21mR1dvPtZkLkbmYuL2x1mo2yRakvHi5k7AoVR6FoyT7DS",
  "key12": "4kjtZxTuQd16TPkDu5nZ1nT4Q1yGAN8mChKZNa8oJrLXssDPQttqMxg8BhUV3ruJhzNkiKeebaoNs19kS7rGTj8Q",
  "key13": "5uB4WQyTqfJ9UkezmFcFoGyQXsTP2esVP6kLonLaKJQaN9teLcHvKtSkdnaruR877ywdxnhvQ1beCzzrLZpEiaPd",
  "key14": "4eDfEypfWm3TjbLF7Z6LheHNEx1QevbxPwpNjpHrwbm1LxmznYNCb5zzLuMeXJiWLAMbMEstXXuAU23WUeTEQca9",
  "key15": "aaADHmwZ3D6WQsgUpgtiGXphNht82vPeqvHjZNT9KjxoMbHQKVAHxi5W5QPDTWnDUr7c2sgnWSmWCLqojY99pe1",
  "key16": "28SBNcC9R9YBkbN29Jg8DM6oA9ReEQ7pW7kSECUiBrW2DhTSFYm8Niz7QYfAVw7rAf3qQQzsJWyUVtVUWcQkJCzU",
  "key17": "2pz4suQPPtjT5UcB1YQhSpQAQcr5Ad892jH69EU6saX2pQw1WzE5zCLXE2TwDEd45hYjqsottvtvMY479vfT3Diw",
  "key18": "2t7xtHRJ2zu2vafgp2znPa1sn5ze6sXsBUhJ2KCy3U2ikdTz8qgmJmbbDNL3kHW83D3ELe8gCNwWDHvoY1KCDx39",
  "key19": "57A1XAubSAhCotEFTXqgBG8w49Gr1n6KCCbYmGEResBH1YBMBe7LVF5ogvJA1HTu6d7LVdkaSEuwPYTbKkbFr18U",
  "key20": "3YqipvNGF3VAdYk6cix9cuxbKahW9uJjXSpuhRMwojqGEm79MHq8zCiB4HhzRPUeARyKbdZ8skQ6XiMHNzVVJdsZ",
  "key21": "5yoKC9AzwPGbnoaJMYBZA6aWUEHKZiJcytdw1FGTQEASR4bCuwn1R8YjgHctAgEtn46HHgySeEuCbWqbZRHQE639",
  "key22": "AZFqc37aJuzNh8Vxmv1T7SvdCNdN3bfrkXCbufUNaNJvygVs2LeSdLc8EgGu8YZht9RgA3gTH9yKeEu3zX2Urn3",
  "key23": "5nwWR4qJmV1KnUPvTYEmmsnFXDMrPf3ixiFUJW6kdizPK7eRLxEiiUgmHme7Gh5yzPgCDVSrCcMKkaB8pj9LMikL",
  "key24": "3qEQGo9qtdnfaj5SPYe8JJXwbPTxAGrRXeZ1wFCwa1QcuKunwNTMmXVKv1R3vyotrUtPJVxioE4MfyZcBxrVBkbo",
  "key25": "5Z1PSk7DRRxTYj4hJbFrXcUEMPZfXwWncq8ihJL8meoGdGSbsWZcgFreto12zpceyDZ3kANGCvCyrcMdQKKw5UzC",
  "key26": "5whm4md3mY9hy33YpFwHBSVdpcmfRRrQykkUXgPP22nHwLb6sr31RKwn1sESreLavthkp8QqaxD1GmSzfFdgHyz9",
  "key27": "bGViH8TbRJbgeGZphS3WMDpnJf2aYDki6tFRotatMTzuAHqh2DxkMDc6utZKgXNpDjvdazAhg7R8UdDKFL8Wbki",
  "key28": "r6mAstnKgxJN5BHrKarbDD5ZoPKdYNhc97Zcy3FSjof9M2WeXcPgHdk6brZuqJYTnQwxzTvnUdZjdi856LVy9No",
  "key29": "678WnhGeoywZX3xH8MChk6ogtsNjXHhTE2KtkSFZiNNN19yLtDGoVW6b23Nn6KcPC5Uc2MqArjagC5DXV5QUxgw8",
  "key30": "3RcG5rSyWvoaaaaPFQZL6hL9Mg8fycseDHWLcu2bdkdvaKhZJmkNTSqgUP2aFKNJ9JNKokKTKFMy5NpifGFUg5SF",
  "key31": "3fzEihD3yLWpSb8rE7H3zrCCTbejpZTX2W7hEGC4MvCs1WrZXxgXB3sJTfWwqP7M63m1DHrHLW9SnjWkN4bWU69v",
  "key32": "2oAxk6yGFdFskCChWUa69xxUzUHXdsMkRUCmKnAKwirZ5mjqhB1PuYiBdArA1HAEALvjUbSh7eQtCg7mXugW1eph",
  "key33": "3FqdY5V669EHKXMK94eVKdxTfRMnkheVnuA7pRmQHVGt7Vcdfz8NG4rU1k7wkok9Zpisas71H44J7VySrbLX55j3",
  "key34": "46odnmuHdNJyHFQfPHAsLSpN4s8rH5Bh4RJQy5HMZbwugJC83CcAXvvt9nkhdLJTPHsDMwchuDKWysUpHTYbSKrW",
  "key35": "2kF7Qtizxam3G2Jcckbq8yri2rzMwqayLquyFPRMi2npQL8EfiZbJJ7mjut7FyDh6PXW5dphJTLK9G4oX6LBz3mz",
  "key36": "iZ8DC4C12WaGWiS7qq5hpjWEgs1humTuAjAEaZ9hNE8KndhMRTBcXpL1mFT9BPhbsAvt1NZZuBWqQzFwjKXXkUN",
  "key37": "23sFTuwsNbjsaMgnQM9YsWhq2bZtTg6Lq54DJ7kXgSn9YdacMg9d9rfz1xLa9vJFTnrZu377bJ7gvf86CVttaxog",
  "key38": "3eDp1fdbmtenMkGbPGAA5fEJgu8Z5KNxkH1M66upLGADwwSbDmNYfQDqG4aQR9jWC99rar6YEMJSd64KUgRsXsui",
  "key39": "674P2GXP8nxnmiQ5xxAQYSHrV3w6Dw6WHnRm6HYKs4U6GuabXBmexydqdpsCoqMsoQxyLkzUQvmTofg9iSW19pq7",
  "key40": "2s3xN5vcpFoGgtEaCRfhFmjh9QSTQPcrybyFrALMDCRkaksQQRmSNBQDjG5ckxQXLGYwENZypCo1jqPop3FQwXd3",
  "key41": "4cx7aos62JpKfas7Ri4fHg77uwN8zGm7wVUWMk1A7SJ2oycZrCHnKDvJ2NHqssrkBbmFXEbuP9vqCmkvAhcqWpoT",
  "key42": "3tnirNYnbweUhRc1BChkTPYKDUuY6aR43xA9UhVmgimwbKeGbfw4p3i1Qsdpcw4CxcQFHZeWYoAxJU4kC4vkhWrN",
  "key43": "2kofnJdVPy274BpLSqKShqt3cDBiJqTZDiR5QNd5D4ntbCmvRnu5gy2CfN4VKeJTW1uoapPsjMgbCg3fNHMuMuzm",
  "key44": "2XSU7xZcpps255yQNeZ2Vq7nFfx9oTzhXt7W7iNSwy4VRYcc34UhmYTH9Hw9NMtenrsMc1F9U5YtrY5YMUDYLuNT",
  "key45": "4nKQrJP8nDqUtk1BYk49ctrtftz8D3tDjWKrqA5Zs1jRBZxZVjof7Z9ZX58r9Zs7juFjWoDjdRGeHqhVgzprfF3c",
  "key46": "2Ntxs4mfXJRW82WZdb46wzGAJcsQCJtFYZt1gZoZYNeaFn9epdsHV6MH3HHaJ7UD5W9zeRPTNZx9QdiK258pXFTV"
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
