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
    "2oRNTtNxn3s39PmbNhmdFNsT3NTwwP5x7cyQ2qYPkdDjmcZkuFxhrNEcqFjMnK7xYRu8y3ey9Z884n5Rr89r2qz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YEx8AiXXMfXUe7L61oqB758zJ5iggMDWiEzNixbSz7CaygWE7sx3h5FBUawc2HyXXwYteVDgQjVB3SwTSLDCeHQ",
  "key1": "5QbogVG18w27SXjBFH4YiZbvZ1HUMxtEiyNaDvNfrSSwNivHGkjc3bwFsoNQ9x2VveosnvxXBpea7oUJgsjh6HHB",
  "key2": "MmkuSfxh66XYVffzzwF5fhuMjjkuWypieWZpP3fs6BH71qx2G2hSrJW7ggcdj27AVG9BmEtLsfWfx2YcsZFp1GR",
  "key3": "5ubtJrV8qKAUkwF1WYfwWQWKEedULs2xS7hgGRxFzfKeVDwHAW2ng1t1u62tv1rJtGssLUmNBKwauhNB39DzT9CV",
  "key4": "4dK2soPoGDAQ3uQCTv5CnCaPC7fHSWwhwqecT5o9b6a4xQXBhdFmoei7aNgR6xgyfhwdKYXeG3EbH3tg4WFVRyvP",
  "key5": "342eNGzuNDN9uJLuWwGGQtdeKiA6xNWwyUy3BeoarhWL3XAKAvj75NxymEg6vdT8pb6kh9za7fadiTJDmw5JpJ4m",
  "key6": "36GfW99A3Vbwj9CJN5WsskCsjcKcGL8Yiz65j4vcshBVufML1NMRfdzZhExjLR31tvERpVFwC3ECxEWWQY1U9tZL",
  "key7": "5b2Yotz3PEg8NwjqsNVNysGLkxX5H9eE7nDzF2e7VWMUM9qektCagFTMEqAWmjQYWLReT9N3nuS5a1bAhsi4bXVD",
  "key8": "5nFLZugswsZnrhKcynLXjx3fwefnwJaDdudEsaUM2LRjbpTEQDK76GvDCkAx13J6nqcCTubUrcnD4Vz8CFSHdNmZ",
  "key9": "5ELZgnNaSa2PHAQDrVD7N1gyh3wJAjDeokNdmabXZSa5XhdGzpw3xeg4NRDq6x3aopD5dm88RCFBsGpHQk1QDgtD",
  "key10": "29YdZcdLqMMnSJA9K7uCJf2VvcpTygFtskJkwFoRvgenNWQ5SEHc4EW8fpwfPR13RaSvwiDEtzRozHVBbXsvMtSZ",
  "key11": "51DnSmpw88z6fQU3tPt5NhaMXwLNhct2QGjAJvkGynmr8JehvXV1kAWUNgFiBTQBqLk5M3aGbx3YdR4yC8KUyhKm",
  "key12": "3pnoHrKZiM6kSpQVdnW9aeLtNVqLMKWfM5bAYEQrA7JCbX1PHSZX1DEYasdFfuwsVcG2CT18P4ubhnbJqu1fa4h8",
  "key13": "BteFdDAJjAk3zFwLGrJnyfKzy7VkbWceujTMCB5dfw4ohxiD7JSxAW5wU1ZixZ9hUCLk4FgBqbX3smoK6Y7G6r2",
  "key14": "3FAvNk7bxr9BT9u727Rq3usbT7i6qxWSMCzeA1a6SUGgm1GPbJSBT76XvKHJjrRC3dE3xFyH8WRE2v8J3STsUT3b",
  "key15": "4hmNSt7WPncrz2kbstVwirf66fdXXngPwacg3MY9ttnoL53K3at8MCZGGEdbS72eX7NUTECxVUF8q4VNWeav9YQT",
  "key16": "3yV52yg5VV4MJToU32USvVLvLePn7mW5VYpKJkCpnJvj1pCALb7snzEG92NxcfLj3bQq682eKyCZ7wuXCLChhBBC",
  "key17": "4f2b1LuY3kK2hqJEjhbPYTocDqB9sA8LQHabUnL3eeEJ1Av6bDYpDyLGEqkLhC99NrqmgQht2rwAa5RZBij7pCxc",
  "key18": "3iGEPQxRSLzXiT4Pv55BHbZ1fpzqgHaQ3XnL5SoWUbR7opWoCxgHC6qesbwBELqmiy1g3To7wN7KbZzFy1dE4X4p",
  "key19": "5hg79hNnSjdG4NqcQi1XpTLRLJCkaDKLt2R4qztQf3kWjfbuAwN2ry6HK2sgpw4PkEVGjwJ1BdN3cA1AHbWctGq3",
  "key20": "4y1wnqj33886Lo3xb5bMA2wxfhmiXuzW7t5c682LnHo86qyJQ7cXdn59YP13aRh464TiECGcjiHiDRkFMCaMwQ1L",
  "key21": "3Fhc97gPmmKzBr5SDTEP6PvsFyeUz212rnYiubMajWqTh36tB6EHN7CT6jxEKknU1BP5iHMBzcqXXc3iZEy9rrSY",
  "key22": "5trkHykufiG6rzfeeSwPywET16Gmr6Z8bZQYbgQpjfPo3Hi76AVJHdk3PnHRoj6vBFehhxtavF7J5KxkbsCA22pu",
  "key23": "4qtAovsJhZ2ZhUapF1o5tMy6xZnB1cGyA2vt7jy76bwU5ouH5aoWRWWPLiCwutwomDvVu8cayzuH4456jXoagwfy",
  "key24": "35R3fdcsiDnHo26MtpCuNAsrnZpvMtwHow8zbR85cghkxBhktA1XF5xY615WiKMHZTuefdPS81Ev3UnigoAsuXef",
  "key25": "vuuf8d1B75bqvfmn2VY2sHJPEiyHrXM3mcPKRBm4HvxytcSGYsnRR9HkGBpbpHeh8cZdA6aTju9qnBbHTq9HwLc",
  "key26": "3cZJ7fj1kq8GzZRbKis1WyotgRM4r5MGYQ9qCbTYQZryyBR9jCv9rwEkDaX8NAvFgu5EBHi1HbZV5aHizMmy9Q2x",
  "key27": "54Bh9HLqGawfCD1SRzDTu5mmRpBb58cCcXTscTn43JokiSmQ7vECahZ3B6ANjRJTZP8iNp5cy3F92epa2y1sAQ1Q",
  "key28": "25PGmr8qqCK5fnQ6ehA7jh9mrtj1Di8R21PWyuywMv7xJKXTgnNkFsP5fvujbRGzSNwwPELn552mY1CPcCeburnc",
  "key29": "BC3kn41pQLjBoupRFobkeDd29H1nsBxGxQfYz6XNW1cYcQeMVhzyvDZTwDYAzpFCBGC8UujxL1E3U6sozor5Zye",
  "key30": "3z2vT7KXCsnnPFXqLNiPWbUAYjkKRm2dbWMmqhjnwK4HFGN3kuqukwkkaacXc4G39bJKgro9nDhuMMUxkHszKabC",
  "key31": "2hGRMLbeTBejG4TKqjixTi8FGTLmv3SGpzNF6FUfDd2erhNwrAyXwbLXqu3REq3aPJWLKrFKuVCj9ax6pjh2W9BS",
  "key32": "5zYN9X33ivj41JQk2qWQxFZdAmLXXzhwSrbiLC9mkJcNKPVYe4tj8AmXHcwwhw1RD91LYovk2LNJsDe2BmAcn3jk",
  "key33": "5EwrnDAd1b2A1K3am3RLGv35avLEP99LWpSe3vkzDAhWTy3U3gHfvGeB9auh5YghgWF43jc9w6RNayP3XWSFRU1e",
  "key34": "hifewchQBYDQu4HoSXL3cqh6rx4SiQddjHpkYNensnM77w3PtVVgM5jfCSi6KgF4rL42twa1EsuAQMvaGvMYCfk",
  "key35": "2rzK3QJaaFY6eF26t6pszBE76pPFfaRdtthiRoksYgGiZRxmRnkvbdKgMXttz4bwVccvLyaiq6MLA3JLFLRN2L5g",
  "key36": "3VvDcPAprLmYis7QKD2sCFve7n2da3kgvNFyQVTHNmyYE1FUQvNyh7hF7djC98nGC73jpy4hYLMQ6GFehL16ECUL"
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
