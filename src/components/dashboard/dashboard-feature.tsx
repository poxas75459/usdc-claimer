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
    "2L6JEDcpNrNQDc5wZQadveCXMEnsnZbCAAbk4zqvP7UgT7ieT4JPKAAHmpff8WDQwKLtpa4uJXyu641Q5a3PQV6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xnrhK5d9C9eYgXazD1FWrmMmCMkbiDY2ZDRPNhzmSYCwr7pLyFLePCHzd5NrURJ1F71aL6Ga5kDBmz8oVYx2QMo",
  "key1": "3JGwswkpkYdWQm9cytFy9e7YKhfjtvDjGCPPUe9JndKVTYopwt6PnssEqCVtdm8SGGWdo7hnZcy72fm67WpgdAwf",
  "key2": "WFqN3WZZrMeJ9ZZzNC8oBu52HEkbseuBxRh8WwhNUP4WMETtHPtVXUm11orB8aszcfkbsZeosWit2xBNYP6dxEX",
  "key3": "XcaCfa2sQif3jM18piYp7U6rwaWBVtWmWYTGZL3kx8Vsv8d3nvTh4jvDj3oaUMJgrz7RBYrdYLfLA5zeYQYZBLZ",
  "key4": "5V1fLY4V54DyL7sa34uxSYNkU3pSaKh3RTDZscubw7JbCFRFN3yWsgvUYsg65j37i8zTiDC3XQqegQbfHFRsMuCb",
  "key5": "5ffNZkkHEXP4rmckJGsS1qR3pNMVV39bvcjubGbT6m2a4jzt9RLzw86BX3sSqsb5iRCaca7FxxRbMoe5zrTsAa8r",
  "key6": "4ZtsWPRE6TaTGP6mBxGWYeErPm5CvXDfQizXFH3DeEPGcDEJKfcDyKsytVhkoTH6388W34WSeBNUBKVRWQ5RzDqv",
  "key7": "2qs5MT5fTxrPC3FzgcZDfw3rB56u3gcLfvnDJRohqfbo8KyoBbC6gwpbCPV8X2EebPM6bEHTHhxDdqBhZb67KApF",
  "key8": "jXXnrGZki5GqqsHL2bmPDhwzATkdTBfHgDzkeGWwRGedrmnGMZg51uCVVivLgab7tjXhmyTLyAi75kWU6ZXdUKo",
  "key9": "29SYe54zs2wXz7uyfrrwR2DFuLGMcynPeaWXtG9JUi7FmeRrLUcpNvjeUyesvMbiGhBJYszs2vkjYQfrfDMoASjW",
  "key10": "491WAJAQqmKYxr9HcD31diA1qqYVPmQrTVVikpfXQSi5woVpshU5TfzvxJSXExKuUYzhnnA3yWRaxqfs8awSQFVL",
  "key11": "3GFR8vBUu6Sx6c1nrqcrTKPeQQSFT21weGExLbvBZUrociTahbm3SirchR4WTw9iGNYExiuKXwMTaHZfv3R2vBdE",
  "key12": "4SqJSojaXKR6eCuegr9zni9YJzvLv2QTe9mu2289g85kkSJZ8JRt4nfHh9eTE5MdEEJ9PxztstviY7ibng59a8dr",
  "key13": "3yJZKZg2m1Re3ZFdMQKnPGgUYMXbC2eMrqTLBcxz17o6YcJATd2zknBchuUjbsBfb4M8Vhu3o4JHYLHxMxQ6iDqg",
  "key14": "Zv9KZSBir7uFxbodFXHjWKU7Rgrp4hgEffXp2vbDjWrHxDqt6AMcMWs4zWvw2MmW6Aw95gG6AU4AZ16ToqFT59w",
  "key15": "45vWbCE5Xjv14b2jHP27q2twynv2cQ1kWQm7WpzBHXgeHMsP7HBCgtYLuYfB6H6uSKPmfkUXVpNsaGqhm9SkAtfq",
  "key16": "9vtaooo2ifnEWpjxnrGdjngiQQg3fNQrixh45xpMydfjxVio4Hvpy8bzQF7cTgjttyJnudn7RFu4dnK692DHQWA",
  "key17": "2ywrk6kU1KTLqG2EaVoyrPAxa2jJAyhhnzSTFkpTUDmtN8BKWUFZnrY2m3oGxWAFA5omH1nNJDTGszW9fpFTu9Py",
  "key18": "pVtPZ9tyqC75YcUDZqybkrvF7JV589A8TPUyAWVxBb7Uz99RzwU163vufFWpoapAsKxRCmMPsycKUVMBACxBj2r",
  "key19": "61fx6UQUpM2vc27p1aNJ7TyHsQbqXmNGuCWahGSZQZzbH7NHAhhimR9QwTMNBeLDZSDfSuMDeCXNTQT8kPyixr62",
  "key20": "49KDh87wspBXdK3B3dBUzNXtP1ezD2TxM8hNyUVd2E2CaPofmASAJWrrCxXVAtrxxrno5Z2pLy4pdPqoCxuKrvqT",
  "key21": "4LXR6hhMs21Cnwdcmae3JvQ2DVpLT6u7UE7RowKAFEEdQeS4EXv9fn51rszDL8dynuckCRmaoXePEGHXp3CXaSGF",
  "key22": "AvCuS8xgrbc8FRbYjpjGcHZriWT4zRi4LfGMg1jaNgjMh7nr8WgyDqii1QCh7BETFqkdmqiC5XH9YA9CFbuFTQh",
  "key23": "4xJyX7uBDYPoj6GwU7B6wqWUcxmbN8yWx6bWzCPJP258sShE4FUrVJZ25di8xbnhBddEz3FyMctjLQtLL2EBBZoB",
  "key24": "3tHSmTLfDcRh4TLQ4K6cnyVcRB7NfpehbHbq9iFM5ciNVgcAR4fZazxNnquGmmYbpd8zwP1JeFY1cJo8jvYTxNNQ",
  "key25": "3mATJ6gNLuMqkEGPVMEZqsTSjADjF8qJXXnFDcp4jsQ3HKowWHhHmi2fBA5ddx2TwfPARyFQGm5iaY8oCbRsNVmU",
  "key26": "3goaJvRSN4mi7tdKJAb94VG7HG6f9VpDq7uHrn2cpAaWJcy5t21UWiH5UY9qAvmkEqarBrV3UKTJCfFkQPkknnqe",
  "key27": "2wwqTa4WZdPyrqAMdR7SBax3FzCdwWYHPsBDjDgjQzGyL5fLjFxZjbKmWwpfMjix393VtnNK8R3QirAhEYCcKR4u",
  "key28": "CxPXFywCXWy7vdtnTZGGbZjbK5e5mU7i11gJSXruCyAjiLZ7BvCtSKepLjPPsNdPzpDN8ugRTXpUCYK3WJVFiBk",
  "key29": "59Afy6jfSSBxMLJZ9v1n6FTSTKxJrAmDnTvkyGtLSYHqwSj65usvJe5R9HGQHDRUonGn7rqzU3B9EzsB1WZ2mrw7",
  "key30": "4eVDqFQbYGrgLs1CTRovrjxSNQY3zTMi7yj82ob9E6ddjKPU5A4SGFMwdkTGrrAeU6n4MyJ3BDdbHWWeuc1Bi5Qs",
  "key31": "2hcRe54CpEnh6mJi74pgofvfuEK4Rv8gH26ZWMKM7XM1yUR3EFt2evBLo7sKUSdyh2KVqL3WTD9AT1UNL88LKQq1",
  "key32": "3KnmykvJLwXgr1V57Q3mV5FbNhV4pWT8cTT5iAVmnZ38PUJ8QHtFDss8AeEACqBMdBc61AknNjcPqBGKaRkoDajG",
  "key33": "5BBLX3vgLstH6hbyVYR1XZy1ApRbJqGRQDE6pdTkEXof7c9t7khDK4FmGbuJwHayirKpczT76Z8r4rooGRFrG4yo",
  "key34": "2pA5LZNXitJJkrynLeoESMGiNj4KYzHtyKYtxAVzBQFtRSRrNfthiHV2TzAo5LQAjgUvusSMmKs2mpGqQfUxacxx",
  "key35": "4LZKWWHxNP2A6JpDNYTPA2CAxM5zbs4UuiGv7qSvhfuP2crEweT7LSzm9fcf4wsJjzD9Y9kiJTz9sMVoh8jRtHF5",
  "key36": "4nQReHAFmgH2ckXpmKu8zgmzQbdjyZKQQi8fGt9Fe4wwniEktzNWKp9MZQGBo8QkhxezdCEJFUfPKVX5HjpbzZqM",
  "key37": "5fbkt3c1UkSNddFcx3JRiKLKsmPTbWN5PvDWrvpkS38N9mes6LhuHvQpxpS3fRYaa2h1b2f2ZY3ocJfakkpqpJDj",
  "key38": "Siy4nXZVr9TZgiXWRNHyctAoasJiJ62JkhbLwhyMZ4XVwnp3WmzyHxfETV6gLTxmVLgojkPJYrtfm9TEvZEVcHT",
  "key39": "5J88p8KVcHibVkJ1nbiMZpwLw48iPsi7YVQNprnPR5GJ7GZAyCi5wHSDZjJWSR97SFymHL2GDeSLDJf6vkGUmG46",
  "key40": "Ek2Nno2UhMwEDEp2kmR3dL1irfsmJ4LLEpic489TezMwAZQChms2sswToteNFKUU6MJKtfzzFxjHfXwSuz5PqEw"
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
