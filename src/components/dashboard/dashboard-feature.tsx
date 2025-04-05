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
    "4cq56txp1eo7KcCTVrmEm4qELoUFU9Z7UT9PZ8R6LpV3RHU8erAigPuGcSsxw2CC5CRKWkTB5QZUfzFK9yYwxgGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "85GiqkAPtbgULvbaRT63U5MhhERaZoeswpq8Q8CfPAPvmHxfwmW4U98EfLAHhw3tnRJ3UTwNLovrZo8gVVGx6b5",
  "key1": "1AUfSQP7KErkeoiY88Guaea24jDo9A1odiYw5xtPdoYN6raYLqnDjGMaeZZcdYjecqScPHjSdtYkvFV2jWVRJCS",
  "key2": "3Z9VA1cb73dKYd5f1piNEXNPxN2N3mMebXYSt5LhVsf5vybXjB7yAf7YHYbntySQtoGRC8N3WdDYoafbkGSHWVUd",
  "key3": "5vdvTsR6y7gBiUJaWBsJG29oxQuH7V4epbN5u86VZBesf7rpcfo8Lg9ByRLbTphkKtRswj1dmAVf5iUetwarnR8n",
  "key4": "ueUKB6XqtHrijAkHnycZn8y6WPFw1pps7qRrh49n4ykdH8FGUKUexga91U3SvajVcmuZbNaLbzurhf3WS2VJ7xw",
  "key5": "67JMN53p6v3PErD3G5qJQzXe2g553FYUbxCk3Gmxfja1nNTjrBRs1YMB7kkuavu1V3FtGJjdQv4oHDEPxdHZTvyT",
  "key6": "4CErvjsNxGuKu2vrbuRLXHieFBqbQ9JRgHtNLDr4WaxMgFLJhwKtpGKPDTwQv1XhcpkGJav3HiKXvV2dZG8abSy1",
  "key7": "5cKNefohytiHdqSufFq8GLFXMud9uP7AAbQxgx6KF499geXzkf6VH1bpZUk4X2wxpecGWT4VRh3mTCiwaTaCCPGU",
  "key8": "muAaomDa6vu7CogtUFdmC85eNzwwQTshVAsF4ncqYpr4YirAegyc2n52Bbc694tknGvd14vPajf6zkQjtRvVfr3",
  "key9": "39cGTqqoDmSSgtF3bYkizec5VqxizfkjAMA3VWLg9adNwZPYpqzF5JMgh75ptDJfCKt5zhPeu2sTxh6vRK5AWggg",
  "key10": "2myCvrfVyaiAMPFHLsz6ktUDimMzZcyTRgi1sGynQsrz9L64aZjPXAVf1sheMVgCj9DrwmwHmMam7yp5cJn3qAj5",
  "key11": "54a9nqhjhZmwrY4mas8qzvTAzG7x3v6iQRVhWbmNMNSwKzcZ5dh6tyRpZZxkC6pgV1qDH5fbmEZ9H3uifbbmAuyP",
  "key12": "5HJQKsVQETc6bzbZ1BbVGWyUNZtdz2TzfQxjda8wK1eCGSVxdhR1Gwt38yvpge53cxuY1W8uPLG4ZJKrTzQRmUM9",
  "key13": "LF4txBt28WN5PPnqyDQnz2jbHykLm5ucmYVKwmxzjWZKY6faEPuqoo2s9xxRmZSmq1yYrGgRfgx3HjxqccEwjMi",
  "key14": "3Uge4aPBKTvDC5251Dxp2kbRa9Pte79F1FTvJP5kpsDbVJfdc7cH32uNcP9gKkXzERdxBJ4KPToEp8241RFjP4DM",
  "key15": "5RN5N7im3fcYTN5QJagyT84fmuewzPEQV4f9TMzXu7cm8wTapAauNwPc4n5Ho36dm9x8BnRNevbCBvvda3KZxLpr",
  "key16": "DsjyTP14rsvFXhJc3uGYvHiG3h6Lkpevcjgk9KRMLtH4gRWHUsCLkivpSfULT1LSuWrYPxjxaccCjCuUR6gaanQ",
  "key17": "3aeyeM9rRDWpzVQsGiQtETn6yvoCqhB9rncmTEJDm7ojYL7GLkqNG73n4sg8UorKsjDBqvypVop7pmxp38QGC5qj",
  "key18": "ZskiTfBrse3HdFjL4nZF8z74AQEA2UAVUNtccTgUe2tgkorNb7aTHhD4WQABu8gryExDCx7SzAUD8VqKSPTNwpV",
  "key19": "2rBbPX3XKLhQpCyAuCUvdbesVhenbfQ5wMgULRgo7po5KrNayCesN1TcTcQ7Gh1Az4ibWu89oNNKinuAp57rpdR6",
  "key20": "4ERaFxwUw1e8ENBosr69nBR4xfACLYRSNhWeXnDpHC4WqXWmZLcKuZtv4F8pLPRgpJvBZx6vxz5p16bRyJWN4pg8",
  "key21": "Toq3dPkEGVw2kcViq4f5qWbw2fhr1jsxMEbfgmaHzeZFGXXFdncwZPQyfbCc2RhJe2RXYFMApPRDPAMTbQbNWv3",
  "key22": "4frLYxBksVLjqCuxh71kZMRd2eTWZDnS5zUM9nc5TQhetvmrjBG1MDopCY74Kr2xHrfYj9Qpzo8CESFM1tqGxniF",
  "key23": "4uz6tPj3SNCPiKWR8uRzJefc3gnSRTsaj7XxttcrrFXqjSCVFwqD6s1VFRYpfh9TfKAVm5zB5Vkw9M6vQ1GXp3o",
  "key24": "2yZRyckZhJdLyr7eL15ZRNgA6Rbd6qdEqufPmZcANbmWSU4QdCUvAVXjeRdrK6CDxG5tGi3uXBbfMdEEWJ7HU62Q",
  "key25": "2CV3B3UdoeP6FZ4rWb1b6RzMsURWi1kYC1ZrG1UM25MSk74NU8MSduAANVHtE7YcPKHWq4SpaTnXe1qFzarNHs1a",
  "key26": "3d9Lv1mceXXWR6zehVztyRrKb7WCXoQbnBdQjynT9Q2e6Cjg6U813iN46ox4KtL95jvWUDkToPKty7G6qdV4zekV",
  "key27": "zxjPxP4kmxDyM6d7THASUaw8kycwt4WoSgrR1NxRSjtL8wKyFhDUHDbgT2YDUU4VEmUxALrErofZ8cfLeTEsvzS",
  "key28": "2YHiShBbe1v9CaiYETpf2UnrtH74U7HcVEyuLZW9yN9BTJr1mXshgKbWomPDyBQ2SEzQc4MJGX1LPpYZ9iQ9fV3Y",
  "key29": "2gfYmVytKZ3q3UkTU5dUFv2CLEBPXLgbqnrkbTW6434qHbRzz7Kww9fFYh3UwLKTizGHaUovgcVupw9EoA9cXDtn",
  "key30": "4MHV2H4biuPxXw4w1Zznb7Q4PQWj6rE9dKwgdx52YmBaNsS9Lc8V4X1TDAfh1fHhVtrafJZZXMGxrTzXiNfLzS9F",
  "key31": "3cg7B1U54YRk6doX3DsshNXfqh8QmqyQ2aZCk3jiKxxDXaN7KiPrn7Jqs92Ggw2s6Eevb2uGFBAWpuYM2HGf8d4Y",
  "key32": "FA34SfDA5DcwAV55hVTxJPYkCknr7R8F7Pr3JiKotAu5qXRMfPHEWBrvjt9ZAcVHSPSzKVeqy42mVrLUJF2b7gA",
  "key33": "4ZS2yw7boVA1a9tWNb2F4v43L9bYomNxn13c9PTu3Nvx58qFqj96v83R4FPNauXQ26H29yLri3yPmBeYe7qTVkGe",
  "key34": "42eswpnjHERVq69V9Bx6BoPWWYiJgkwPGtwEdXjqT3oFCbikYQEvFPGEqsf8Jvq4pTRvc5ezdresHpdn6VrWMh5R",
  "key35": "3T9dwKYrjCJKuUKt17nCaBEid1g6oaLnUcNnzHcXeLP699YTLJWUWkn3pAGGwLh2PvWqNmt1umhmtT47EaHzE5wy",
  "key36": "43wqPBvpfD7vAS7N2FaGqhwMewMqVmtSwar7rAxKuA7csudK4fLaXJ9pmtpFgHFof2JXnNZKQ1Urk8Aubr2s3KNU"
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
