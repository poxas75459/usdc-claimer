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
    "5moQo8MK1nuebKn75ueC7iahJCFgMNgxyhEwmWsUBie2qVCc9rPL33vwV3Hri327uzdaEtpsxAosQ92sgrZWu6dG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vcts6xcqKJxajRxtJCQDUf51U9xs3Ydab4CqveKy3bviqDrWwJiZTk1s7bZpVAF7tfqgdt9rdeXtTF11E2gKJnV",
  "key1": "5pzZ48cd2tiDDY5Tn4RJsqaUNbB1ijjidwgFMrESXq136NRSdC35aSLzRoGGXsHnDLaQ7M6B4iQ2Wy8XYHfckTYj",
  "key2": "543Yi8XA4ybCb9gFUkU717oibaiynuin7M15CJqqrxnhAHyBjwrGfrHwXhwSWZ3KaVFUyawZ223ansgVEdZ5fctv",
  "key3": "38XuubN8tJMrhbR2JddBHbtGx73UTKNwpx3oGVur1ZoVL4Y2obDyqNqYtHMP9tb8yARVMsyFyNsCAPWVecncYhi2",
  "key4": "6jqiyVpjsr3vmCBMjSTepAP9fsLVg1JiDRuQuUJxHmoUWKrpGj2FmUXYQyRPEZr2RhiXkALSysfTZaRJ527CmiB",
  "key5": "4Kr6rsfDeE1JGZY7b21CCLPSYSJTRfuYiJa8FyHfHhAGM1qkMchXPvVot4M8DF1DE9AYD12EfaotCP3P29MayfKj",
  "key6": "5qWbKEtgFnEzqatKK9JhdjncoZmQMnKHjWwDwP9hYx6dAwtwNNSKWhtk13Cov3qWCMgMVifXiW9jPLbJkWKVdnaD",
  "key7": "3t3ZQM723fHBZDUGNp2oScNQygrPwzxg3bpmJwezoF3Dn1xbyp95Kzhvy3RdqY8HKhpiqPsct15XE6fP1ErnbPGv",
  "key8": "cqe9svEhAwHSien9LqySheP1EwtNN2ALZ3k7EV48gtgvHcRkHD75NWH7Aem81qcXENuqrG86KfKzLLWo3vKLpKE",
  "key9": "Mg3o3xTRKw25L9BMNygPfTknEqHyGuNnE9NKuJv2tUJrnFFSWNB7sZLPRSSiFvYMEeU82TqwWTkxYM3Awiyr2YE",
  "key10": "3wqHcdpuVkSmqEDYGfvJx4YZD4WUQJBTo3jEtBC9HJPDn6UxQGXjGz9CbLvRf8dPC7QTVnWCT2JemvVdSwMXpEGG",
  "key11": "2i7ksYKnqxHrC4jcLtZtBFZgEXV3NZTaGQdhhN56Hke8nUnF8hP9PESbdrP2wUSDdybyaa94rcAC7ELCeG3kojVP",
  "key12": "533YBqadsPfmwPPtdnENm6UtMh9jv3qvuUk4TVZp8SBDdvJgjb9jHGUQj3fiVoKWPtxmjxLyZ4Fe5LQmLvBGBjJT",
  "key13": "hXCjhVZFEv5ZLCrb9GX3AqEi4RHusstLWt92TJazvYwqvTWbWbTWfUYF7M5WsGjoqoJ1TSFVsB6ShcupQeBjAE2",
  "key14": "5n4HNRdSb1LT74BmsxNdftoDgAQEgS4GYGynLG47swWJFDB9gxxwkQx1y9MSGVpAdQxdw1b7qgq157EY1pFvUeB4",
  "key15": "21rwJDktU4tfp5evnN6cTJvKXCArCtLSpLRnZgtSLaiiBz4z2xw5FYDWJ8LewUZEmns3ih1nhMZq8mVsVo9BUxeG",
  "key16": "ystMFyMAYZpTCWYzvgp68zALpQSciazM2Mz6jaWb7NLkxjYwybMLnC1rbKarn6CRnxQ21Ej1XuxsThFP7fkWzW8",
  "key17": "3oWqVjGXR4e6XDvQCqAsPtoeM1XrCQnjVrBR9mRkUojuXvHMSYYJZX72We4eiqwLex24zwfDuMJGPwfRde29FETn",
  "key18": "7w7kBJnMW8y1crWcSH7brmKL6RwyBeDHhNWEodtMDvTZPHLKEBKrRdvhShnsrfamEADkhz9AnCSC884hZWVv81G",
  "key19": "4rACaKXvKGKUe4pM2ov3p7YJBgakrsUi9W5AzyUGdZ14xec1MCkGRYiYSUrJxyMHvUNEyLm53L8es2ygRs1opVXx",
  "key20": "222UzUpC8gYT25LjXPmkRxpPQXPtvd8Rdfat7inJ9xmTrqXggf19w9DaGGqP7Pq189mSeb7q1XEPH7o8BA8GbEYC",
  "key21": "1jrhFjsJUXxoN5Pn3QB9Z3owa1L9zwuX9bRYG4ch5Kx1WVByokiddSixnJuVpReiseaApbw5omTkbNvNdM3vbS7",
  "key22": "PQMdatXv99XhoxFXpRt3uaJ8Unrw4crCvg6keWzHXXKPWg5p7p7YujKdExKPvHp1PJdzNFBPrSn8Ya8yCzroqSE",
  "key23": "DPLR26bSCnJXLh9SWUHoTNG4T8YJXqP6j9y517HaL53n9FKyP5ZddcZB9UBkxJpnpFqmSh1gf9Hfz1sLkKqaV6n",
  "key24": "2MR3zzyLA4Z3BgA1Nk4bQAcgL6U7ZHrUcf2tHxLwzdQhg8ZiJpw4ptFhnnAGMpyAF68zj7RRz5HFno4jy3QYxdVa",
  "key25": "2DQwx6nzqXzyPNBnV3LXVea4HW38vNRsWtmYLNoKk4nT4tTTaseq4UKNubFdtEHAEYYZgSEDxZ8yt7taHReji8n8",
  "key26": "3G1w51PhC8Atnx8ha6A4ewjNmHX9p1MFgHgEbR8tDtwEkVkucfRQjcZHGEaeZBoRF2C8LvZSV3E5iiyt5L3rz5Sm",
  "key27": "5ua9z9HEUD1sRo2zoSroJEz2zrfXimyNVXJuRwGgjkPUxyuQDb984NDnLt1hNDkBuu8SqdQxL3v7a6CXTxhXFME9",
  "key28": "2ZbfhuTgMgPUhwosWYNN2SgAsc8649XHSAd1CuYewQJ2p6LNkTEZ5GJuxtjb3vv7aUaXmKu87vqpGDv15xUxrBy9"
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
