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
    "2Y7NQRk4bbuJ1NB7sJhJvEr4v4DmurDVr4uNBGTUbtvACZTfaP312c1YuQdTKzg9q7TXVyAP8Yv72TG69gWPq4ku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37XcD6vk72yd2Q7WNZDFBg99U9wrvcfzBoDkJhv9khiME85bSdLVtoWrWpy68QAwk1j4eUL78vqiHp496VTVCh8i",
  "key1": "51ekzuVxnHvLTN36UaRyBzZzuPWFUbQcitsMKBgnCiATHvXwmWhxiW7yAghaKh5JKqzWNsPHKtX9jNzGTMDe7GQ2",
  "key2": "YkZAPAgx4aA4aydWxucLGbVwwn4zfff2rSGTTaTzWyL2dmgtcpiouk6n5ZDCXjShBrXoUvarTWJ61J9tzHrJ7iK",
  "key3": "2fVU23JVFoCWiD42CayyzWFQchCkPmQSYKASidctx3eNn5bYoXfEDkapE6RkGKVVgvrAAQNzQ3WMgyepXF2q4sqK",
  "key4": "3oyUmKaSntZ7kUu3aLRRWKiFA4d5R3sx8AaLoRHbh4wxLnCxaxJbZ6AUod5wXnbUKHe6yuAcMbeMEgdQSCAm3afB",
  "key5": "yq5nFkUnw8iLbjSVZh4sbBVCESeTLNWqR4qHvtGNf1kq7Np4RymRN3JKadbuxiW1xkeukfzjugfYUsLPTtkbtPL",
  "key6": "AnmJbmFf4RJb32uQ16eMQHkjRtjkZwFkyzJCgpfRqqd5XNjhbH9DdpnMFsSghZabavkncYueMtWhztEMX2Tjn8X",
  "key7": "2JGhqgo4TGdnnG9UJvV9HCd3iVzUrB3bFGGCnphRQwsZ6icYZ51M64a2z3PUZf7sSxexL7R8LPPzKgn9jueeybUQ",
  "key8": "4ALQcwyx37pLxi9WsAMefTbCK9PrHxvb1Egi9ARq4Y9PGuT3RVX7G5EeoZ6Xu6bpeB66qmMzAtWVQj2hJVeDCbJj",
  "key9": "5MegFLKTeUaLv5BY6LD6FRLFfxa3TzLEfWcUBxgtF5RxQ5Vz23AozP1n2ME1ZR2yrHkRE5MZgWrU7KNB7VS6SsUm",
  "key10": "4mqjNPYhnUjwvyp6w4NGhVpuDtgAJR446ddRT9VKaowNjGBsmwrJ9B8jhQFB7FnF1QhuKiNuzKksMV5Y4ApTNbAU",
  "key11": "23a6tdF6UieHuGF3wvZeG7M7iQcUNX5T9MNrsubrH8ztpGfySwrPYPTgpBLqo4ghL5qiRC3hkjn6pjEScLdjBuVT",
  "key12": "39jmTUzFoSfpaqvYuJjV5Mh1yYZTuo1PQefYoc4TqDcPDfUWdcM255BMMAPVNpvSaq8GC419PjbZBpq2JSCCAX2U",
  "key13": "32L2RkUAUsfkuuQqP1CjWk4RESPDVm84H23kWELoEqPbCXazPSbNGyrP115FmhLHWyD77dvSpWU6DrjHPYfVKFaG",
  "key14": "2wWodJcbQCLkWfh13fFMtBFf35pgZHUt315jUM8ue6c7dfdRCqjHCJ9stQbsvq71WG6iGBxyYJ8ufFpiswVE8R4G",
  "key15": "8bAXtASyeZcdTVUB5XJrv5oyhVmdZtHMwNYENsBjDL7C5xzKa4FBdoEyrcY2sjx2hutfzrxs6RbYyFSu6Cnb62y",
  "key16": "3CYdf5i9m4mbnQ2QveoPR8u12jSzjArPP5t3rQHMYgh1Hj9JAyyYMs8faehwGoa4NGchugHagsE7FpWdgtNebCGy",
  "key17": "2mJ4KkihNmhrwmL5akTCnsYQb337csV6q8FRsYX1LcMQXsiLpkN3YvgzThStrkkG2pg7WcCtA13s8BHKG7PfFKus",
  "key18": "4hhuYsR9RS6FW222okgSqtf99tU23EwM9g4932vBaJuLvFLeBD4NyQ5FMYdKduSrAQ4mS9zDSiE6f8KizkB5SMa2",
  "key19": "2qyZye4XjzQvM88qNhvNkA5HePivpQftTQQBQU2SzY5uarY9AWAH66T1HP4Y7g1SzeKjsH8z33tdG31VEcDayA2Y",
  "key20": "5rtZ5gG16wkSVUcgrT4FVnC4744az1Y4zsoMh8RJLikaAHQQYzyg8yVFK1dNnurUzdrFLjD5RPnNDC2HztzuDQ2y",
  "key21": "5mBXVN54eAqJ665pKxwawxo2kFotAUkv2RebN4uGCRWiCNTMSLqLPudzQJqB3jobpBWo4EmdexkWtSL9CXxSX8iY",
  "key22": "Ka1TFP7ubv4EAbvyoDYQXztNfmJoUiCgryViUFtc2DHK3EVV14Y7w9bT6fEsU1nUscgzoXshn76gBnFoDTTyLXL",
  "key23": "48uTv3Ty6nV1QbEYKGMeCu81Nn9vHnh7r4tiaagGpovD3bxwrzfiS7ixtnLeGyEXZDtzff2PX45dpoJkC66rYmKa",
  "key24": "4yxz21jmaJ3WdJatnZeHEQMLswb1RFSyb4gR43RJpKNL1WfxPgS9tcC6ahrCovhk4freJtRDxbqGoCxrtt6wX7pV",
  "key25": "2QR5APhnSUWVkbFAeHmvzZPGUbNHYPDBymd7PWuyNJj8X26tJwmWUzeAch4VzZTiyFbwUmKngL1MVD9s1jQmG3wK",
  "key26": "2z2KQLypdDzjrDq25vUB1jzC1FmnkTLGEyvETEBdwSTnrKFMak9y52rtKEryDwroLEkmJhdzrkMBehoJZCDfWSwa",
  "key27": "L17U8b9CuXzgRb4K9VDmQuXV5NynnBXcG8tPVr5jWnPfe5mCfHoK7t2nTG4q1a5KMAekfK4yQ9FPAQZjz5XaE6r",
  "key28": "X77PahrqgHWosF61jarQUKsX8Dbw5dpJ29oyqkgQsvEm2cuWWVgZWvVNGf7MZNyTmAzFuKNbCCiRyEzgs4GAr1T",
  "key29": "5q6hr87vSBqCzGmLNy5ud1F7XvDGi1pu5XiJdjgRSw76ZqK8sGoKhCyS8nDAVtyXcLJdzXhsmMQh2zijQHhsi92Z",
  "key30": "kFrU3qSgKvKNEK9Rftc93N9uEdEnuZGBdyktdWFR1U48VJLihESvUzpj39Bn8NMarz7U61MegMYFUJzEgF1kCCF",
  "key31": "sJH6NoK1RMyQFZibx1u7REJKWdHTdYvLaaj1W2had29pu62aNwVZC5dRp5veWNQVKhPNnxR2YsiYYYXaiwTatmu",
  "key32": "51T6hhcDfm4mXCaNoL11P4pmLhMsPKXnUo6RdotQsiSMqhMFmNJvqk66PRHpWP6A7KQhMXPpPbXAduJNgC9FLwNk",
  "key33": "4Dt2Ejzu4S6RTBGq28Ve6nsVyfxe6Prpoe6yZHRTi6faaARU9EpXNazEJg3WDBzTVNmZqepxzpKzy1Gh6kNUG5ug",
  "key34": "5qkP19e2ijd8mBFiMt9J5DznMLFmWbZnpmAae5WccpnXbXEz9sSkDyysTMYmDpvHBw7b5v8NiGjfKZSTSJ9fayxf",
  "key35": "4Q6ddnCdCuFRk1ssDDrTDq8vso7Yp9UFXRgbtzF6Un48CtpAmGATN777ELS7sGdjhKU81AacXpzZUANEEVLiYRu1",
  "key36": "3jvjs5YxPGxPPrBiiqRWmtV32yistR5hhbTcXz4SjyprxzLgQMcgNBBzperi7eUGLYU6mYKTXLAULPJqp1mmRwUK",
  "key37": "26GfCCvGd2haiSdb445gFkN7z3hA6TS871gWDFJYitxweXeKKAVEX7rz8Dy2ufx2Z44XNjEmNW1XDNbEDjg6CTau",
  "key38": "5rAo5sf8rVr7GwpyqftyFvCGVZu1rHtzh32aTxtcNypNzTjxuHLKjQfkAoF5qcw4zJqEZsVDq32T5U5JXXASDKjm",
  "key39": "2q53h9YrLD6ymDdLrYAhMvxDGoEijZU8qT3y5dcN6g9kYZNLpWj4R5czHVx5cYi3wa3H4LSstUDJjajdvmfL5qMK",
  "key40": "24w2zMDFYt3ahKKghBAJ5qC262Zscr8yxq1qZu6u4gRDzfc5A84dbQAQFz8vGb4EiXkATkHma8B2JoCXvWQrNpfY",
  "key41": "4XoNtsAmgZf9jJkMG8Cc8ZnYsrJvYkFA7XipZkB2tq76KdRYsuwbAuwtmw1V9gM5cuFueEALcv45WGFuo1cnfqgn",
  "key42": "2tZnACE8xW3jUwKzB31cCScLCwmDC8HFNWBdD5MrhdNt7EFrGPuurR6nAHggVo22SifWzxYsw8Xtqo1j9AyrhTR4",
  "key43": "44EZS9hL3LxKv9iGLbNrPo2R3EE6sd9yjHmbG4aF659GN3w6csMFXPNQqKtz4zL3yJPSMcUWQ3DtkUUVVzft6Vx6",
  "key44": "2ES8FhUvpaMCM8bjFvoYgpiqWKVhtomGCadQpdX8E75xVp5AeMGhCs6cfK9oa4CQ94nSptGXEVeGHkjZNbkhy89r",
  "key45": "mU7yW8K1vjwyzpP2rFd5kRu39eGJXnEshwd1g8ES52Vv165tE4hcGNHePuDzXWfT82vu4vsVMxgqJf4YQk9CbZS"
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
