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
    "tusoW5ytCuKmHo4h5RbbTHRTiN31SWjUccEZeHNooprdEM6r4X4XVXs5vpyCEhGcdvwwo8fjDRAGt67CRraxUUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rg9aupuULwForoTrYEeSnCgaWtGA2BKG82RY6w2Hx6r3xsn4sQtVEq2EnpdT5vtnHbqcQQLaH67kvY6D4fPxkMf",
  "key1": "3rCLpQ3cLFCpwURQSAsQEzGion99qZxfEnD6tkpEQYvPsk3eektB3bJtf2fydA37zhHw6fL6EdG6pXJKd1HnBoeY",
  "key2": "3HECpPHfiVBsd24xDo1yzdBaAGw7iMHFsvTLbtawvtGopNzyhfAQCtrMbnoviRmVvzi8BS1dpSuiZN7EirLeqvUz",
  "key3": "5gYSeVrFHE2ucYxS9zhTM6VJBxHrnnCC4PsE7RNDXgzWeHZn6KAUtPvZ2KUQqo3zumXLdmaL3eTkg5AurqFPXtuz",
  "key4": "32VCi4NtkPWvJRx5oj2o8bgN9NYqtCMHCMGG6YPZNqKLF9yWcN6pnt8vWtLuWVHtTF5XSa7cCDkDYYrzxc3VH1n5",
  "key5": "3e6dHDbDnSwN3gMgadCTQQwnAK8Htenq1NWVYc8bcF67TMoh8Qskdq3MGnbSRRKBdibwtAL5dSRfLT6w1mhpwYyJ",
  "key6": "Li3nj35sssL8PzxUxFzymvGngJ1xDPfb4e3nWcXEXPJPz9k8xgAXo5aKMdFoqrEEGi2698vVJsAz9KpZVGUSKDA",
  "key7": "3Ws7DpuTxDt5UVpDQUaf2vZKaQeTXUfbSysPbf6tAx8TyG7Ndx8LmLfjzBUyyNjmTFtNhFFngvoJ38m6u5XYnm5",
  "key8": "3vmWptRcdK59q25yowrmL8UwPpKV9pSrx5pCaH19qtd54zYHrxK1CQopCJuKJJMHvyCiH3EeeyN8DSirEt1ZTd94",
  "key9": "3s3SEwD4hQCKycA7wQuQ8QBCFrb8uueXq2w6rRcB1rsx9YNAEC4p226gWCgn9FNwvtYerrK8tbMb9NU187p73Gw7",
  "key10": "3V1BG8ZKZiHXi1p3eKhfqwLEYFGEcfMVA8ciYkGqBy8Ea9fvCXDSUHgJjcmwwpnEMH2nveeM8CCryiZmrs95Suia",
  "key11": "5k5CR3ZFuydNtoCefbecK5tuaUBDcefswjVwNiF6FturuZb7jxqUw5hj5njoSiDf3w88G9HSpAdtjjztXsvd7utF",
  "key12": "5xSiGzxZkCTirHKc6kP6PggPuYMpmKhqX8Q1pNnbJaCKpewnYcxMYHpYgaaCRVsAnufw9THiBJ8pQAiD75gEu9Vh",
  "key13": "3npZA7RUv6ZbgaWecpkjv7ujTEGG1eNxqarHvBfXjTobx4iWwoh9QcXm5AotmeSC4oZCqeCUu2aFU6CrMVNnEbPs",
  "key14": "3n5xPq9o5xAQ2sQ4T738e4H3V61kbxA2P7c6nh1VjgJp2L6f9g8iYdKsu5gDnhBedhdzcSQGP5yrGCTMPivnfE87",
  "key15": "5Hqv7fMh5VStoAeVUvjNbc2vTzmZfRNWRX3jjiR7faFpitSxzTeenHkwg9ULRhueHRthGh87ZJqvFts7DXrz8SWj",
  "key16": "4foVaoVNmBTMaghSX7QQWDv9k9T4uFpd3XMWmcmNu7GNMVz99DcuQ1EnBT6W4iRUHfCEH5q3AzSBV6CnMK8kMoo1",
  "key17": "4yyBEnaMdwf2FFnP2aobLJRGtN1cDSEwUow43WqrLSUbkmuqjAbKAZLJiW5wMr3K6T56CWa177xWVjWKUz27MiVo",
  "key18": "bsRDnwRo6CHh74p4kTZXbFGGfTot7yoJMqjyA1SpkcaETchtwwtHfTaJtA9Dj4CKNRQBkbEVk7Dn4PxqmbkFGdU",
  "key19": "5hpaXwdMTWVwjbbbwrnieGmLrjLVjHk6YHkmyLvm3VuwUJGydkwWWrS8aswRnsh5tswzsDDxrTQJwE64qyertVpg",
  "key20": "4e9zECcntUszdhHiGhseEbW13UT8BJP6ZiDbnyaCZ3SQqy17kxNkSpG8QRE2MpPVDogqfJggd9dGHa6zaa7bWT4Y",
  "key21": "2S6TPYSeuD7Dh3NB4rqG7awtXSKFrGncP38PQJjyFWuPAnK1uKBEdUSzdAQReoWv5JFEQM5Uewj2525efgaDRK7p",
  "key22": "63T94Z1MZef34uCq6G2vHxis6qwNbZXDC5HwQuJBnQw5kdZeURNVmx9PezCgA3ZoMmoPmzpEq4eMS6GaCQFKJHQP",
  "key23": "64JbCaCKzxGWYHw7Lua2RKkQBSGAfVdDhQ6iUtc9V5kppmbNezyF9iqcktzT6XDPKHWU9aenZzW2A2Nm6M4Xw4Aa",
  "key24": "4iocCUo3qu7FoGkxAdriSBJ4srSxg9Jei2yMH3De2TJt8n2s97oX8NRFUDdG5exVyMpdrXYSpmCeRJPMMed7CKyw",
  "key25": "5vWvDUyrb888TdcKpydbfy8YgiGUeEkbj98AVRobai1v3VXs4sqEQei161QXDEHMd6aBr1szG1QR9b4jkCuLrSro",
  "key26": "4obqEZvvf1NQ74kJqXd7ME5yC6a9kiMLGD2Ht7JQud8ewRf58KnkLJytXMfVccgAEeCfXEhLfoFXcokWXcx4u7qJ",
  "key27": "52g8qKLVicLu3n1U8pqhmaZKdqTR4zVAkVgN3djrTywrqJfphSdKcm95BVdbbsAzyfWAyiQSPAqYNPajEC8yuLs",
  "key28": "5XGe95Ettwu12KxYpPMeS35iVYxXUAE6biBNZ6EifZXjr8sjrn3AJ4fsbnZqdNJN9CFLkTBiaeSkm8XxXn6jcoXr",
  "key29": "3GDwmMkcPpQW2JTH8pYYXnRFEa2oG2RkQoUFnD57Jpd68y49C8C3Hs4EwvC2JL5c9HDGEjJNkcjB7VnSnADETEH8",
  "key30": "ajXT4GYhieEsdMnQN4yJDHojurSYZrh42su1wHmmsUJcjqTnkY5WcMRyZFYKKB4BW9FVLnos1dCfgmD8v8xg7yi",
  "key31": "5aQNyfwcHbLBk8Jd8NxJQSw23yzLiVvJnorQsi5pZkjT1F4EZC8rpcNFnGpCVHzWDhVenuj1drdreAiB5HSJV76G",
  "key32": "26PCYUn357tPjqBXDJXuuYH9x8chjhnEwjDZgtHmn7fubQNKxcnGdrAi4rSQfAWrCMHwgTA3KcJgJgseDZD99UHb",
  "key33": "5HviXYdzD9xPFkLB2aehoXNxUSWu5Xg5GRkX3xADQF9J9Gte19PpHdMqk38UxdrncE2brx6ZNTwLkzTu4it8Frpv",
  "key34": "2m17RRNzKk7Q4CNo6rpcaspBQ746KSh81xdohEiNkNx3YnP9kYE4sAJdLcZwvEXNcFh9Dxhhtmes9arZerizjuGP",
  "key35": "7ik2furEp3JGuAx1vowo3rcX9fRbPfazNk7TnEhpjqJHNb2BJQ9rvn89bB2ENYNjdHFTfsPEfnrP46hLCyEisEW",
  "key36": "13hMVh9frksBYj53Yq5MwaouHp1znhHER6v71bwosLBEQPvMuGS2SRTgpfgZzkJJywxNenUV9Lcw9rjcNuBkuLB",
  "key37": "5x2J5FgdqHr3qeRGQGiwrzZ9M6524XmXRkk3Cf7uc4vyExrjULAUTQCu2dRq4gUBLYuU9wdq85GwcX2DZFyYYLNj",
  "key38": "2GLa6NubjanRsYivu6UsSjpbbSFRoPQQrpsutS4XMGMMz4ynBPx4JiGXMvA2sovWJmqrFpfCL6KLYF9rFEe4ipAh",
  "key39": "5Dfid588WHJxFHLpPL8vLE6graLPFBiGUQgukHYfvN4DVu2EmJ4K4grLLxhE2rhF9Lq8sJMbFipBrKoJCEAzHAwM",
  "key40": "2xTrPVQnphvJh33WuVGTXzYHZw2ut4wRRpSgtjJZ9SKRnj4NcfWizXSvVKMZFg9yF53Xd66HND4WjacjnVh6ou4C",
  "key41": "3rUd1vLf8CouFtff756ArdR8veKpDKZ19wPicrpChNhiwcEeiUuwXYDUCRCFr4BBAHwp6tDeUdNBo2NAesoUMCEx",
  "key42": "4XcHHdw7BDCJRokBHbdAZkQgEjE2oiUBZsZVQ7rCv3cZLubQXcG3bTTx6QAkz6G1fpDS6DE7FbezKzMZ9ggZirrw",
  "key43": "314CzetiDp3iZreMDXKwXTEahc6vdxLJTGA164wX3LpD6gHbzWLWVyRc72fMKhaVj1ViZicuoa6svbi67QmbG9o"
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
