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
    "3U8UdcTzD6QEYPJCBtJZMBJn6eP5Ci2tFH8xP6GZtJPwhqhFwd8yajnrkTLpjkBE67ZrbsJQKwNQtZ6uAYAUYtXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SD6wq6bZ2VrvZrySnZEaRpuDb5cn1AX5FgKQjobyjifYWLVdTzq1dc3b5phZX8PD9yk1Z566SZV7CKCu1RvxPxm",
  "key1": "j7B7taWQTgLPamEi2YmZeXishmcQxJChQhXWsEoAQpki2TdYdNdj2w2Y9KMf99cPWcG4qsQEGUBrJi9o7VqU1qa",
  "key2": "2A1k8fy6ght7qGNmCCsywFSMjhftv3MWojD4nb67rYcYezRCmkRa1eqVKmbDfSZFG5vndgGvkwuMuJLtgKid1n6b",
  "key3": "2RnuomZ4KyFTu4RZpRiQ83kdRrcy8VV5p9RTjBH1gfFj1iiKonBECy4Pe54GUJw6appVvwuj4WS3JApydNyZgApY",
  "key4": "3qaU4YwBa5nYY2u7eCtSPELAtG687tkALDE2cVKafwQWyppjZDTxZzA1hiuD7sGRzerAfHDpmkcGgfqe97nASgcb",
  "key5": "5s6xnTuut7eTnX87r2ve9hCHcGAt7uUxfLjvb2UiQoKxVLYVNY1e64qnNtBiYdei5rMZP2QsiJw3x1DdD3BzaLsz",
  "key6": "4uCq5WNfERq8rhirsTvRnggeJtLmyjTkv2pfLZmMxhBovrEkzytdcrXKhvjA3GjTttn1YChqtk3a3kYjMDr7LENF",
  "key7": "3bMeHPTdVJxPBdJM2sgp3HqtBweEnjAnryUJx9zyasTidrWRbRD1DWkXiQjMELXuaZCHgtbaoFCV8UaQVKCafumd",
  "key8": "4LLPcwzU5K9qeRDsvxLgfie7dFNR6LSuquHHVztXXRPtmkWLAnDVLHpuKhAMyBnbHQtTSGfagbSXJYkeC8qGNv7k",
  "key9": "3varY3TNVKVgif3nuMJccVpNrPFMimDw85PysxuvRCaAVtdS4oWJ6WiSqJ4PcqU8f4Pt3abXwfQz364zpo9tuDni",
  "key10": "H8AETPrLofF9KLXLnPZt48ysDbdTesMUB6vrsKmJrDy8GtuVpkMzERE2hAV84sBm7iu9zrAuxycFTiAMLCuKZUV",
  "key11": "2pFCNYXd48uPBXzv7jEwMCM5UhpkXZoEG2LV6bc94MGZtwaN6wKpXoKcYk3rB5RWPcSfQqbDQEzW9kGNswgstfHr",
  "key12": "4VJS8uGyfLxGKA31Nj6kqohNs9mvGXDEXbRrk6pGeWBEmrYK91s7X9G8vxAL89L6RmmvZ3jjscoARdbnLsDx7Eyx",
  "key13": "AGDYkqDpgnWUetdd9SFfB6vJ2o4hKSWnwXW3ZFUfXrYFbXtkPjmjrphkFqG1yL7myWhHVqKTGwvBLvt4HJg6bmX",
  "key14": "4qBJ6ez6CJaTg8ZtCvqJnyjMjYUD3b2ziG3C3bCPKer6u8ghgoZpznE7w2j4vAsgQ98sm9UHt5YhwrTm2FYEARAn",
  "key15": "3HvwvTLhGxgr6YmwWT8sAqCEC21UCfwPnQDAZsQ4nLG6DoDVVYLcA89wKx8dxyikPRPn5xMRNQzaaByvcL7Rfpvg",
  "key16": "x3xs8z8kHcHnDwDWDqGZbXmB2xmWZd4gFfeDchT9EvxwW1Aw1wkkBAK2qByxZvVoqZoTdfapufgUEHpZv58TXxN",
  "key17": "5fyfPPdkaPx971Z5XfdEmcoUV431DBqHhoTLE4asNYfJ7Nmir6jp7PJqxdjLaaRBctfwGUFFaVDs9FfTyhSuFedh",
  "key18": "33hYBgsEdVdRwB3Yzj2UeS1Jkokj7iZ2MkQh2cn7uicnQmf6G3kzFWj4t4J2CEwCL51HaH6NEJgKi4R2yJa4PNiz",
  "key19": "2aAuQbxSXgBrdb1rz2TEajoLfmhS1a6XaAQLpzn6bP1PrPmcmJAXKQrz4Z4cBZ6S59GVF6UebyjMdHUCDd3mJ1L1",
  "key20": "3RhowLnScx8WvasPW81oz82t3ZNmiWoYqvJSvKKAQ3jth5r9hyTghWBQpbnRuHWbLNsarE9mBy5iuDRm42HcjUJc",
  "key21": "4wWdqkhYUpTBDWWgTsrRcZiBdJLTFgNs3ksE2tDrioy7d5eTGcx1rahesAXzrLvonaranGyoKfnZoR4WfRaXPyLT",
  "key22": "28LH1q4WKCzVfGZNVyT9DN9qJKYcufNKveudaRBMENtddSBVJCxZY4Q6qnrsmmBSdyhsKaQaGhBZUbUkzgfqDwmY",
  "key23": "iRJXEr5MLc5FLKtNTnAcrapkXPNkFQ6ZVn8DWKbJS23X3vtQoGrhyvpK12jdAWxiBbGVHjVs6QwpNumo8vrizkq",
  "key24": "5prWuch6uUJ9bBjxX74o2kNsCMskFGh87VtXQWGhnF14MMU354PfeXUepr983uCA5D5D3RvQeuvxCeHMwQQNxsGL",
  "key25": "4Tn33xT7wAGuDiKnTwpagc2srgwpBwUQViVwskwU5s7QHcnd1VARaxtzRZCoYmKNkYXJhu1dovjcvLzqiiWr7N5o",
  "key26": "hzGGoUekrsG2WW8unU2Xvcqmci3eWZwEgh5QWoiSkBKdDxxiMLtJG9aLwNtu9yZ2Fj3A72b78a3LNK6UFELZNSv",
  "key27": "XxtX8kELKrbwSLdDf9hhdewALuTZCxuchZHCfALG2BprhG25ke4ZF7CUktd9ibPWxccuSrAgvc2Dvzz3jFHFswa",
  "key28": "4YQUwrAdhHYCFsULGj5paSxbcYmKY5UQESKNBqmDBvsCEm2mjjYKyMNWmCW3BZ4Q4kCeYEbCdCHRy9zoWGJt9EA4",
  "key29": "5ZgDQjS4dtKiYMc3pNTTJbfpUR3PDBi6pNvq8V1PVg1THxUz57WaHMChYLg5ux4Cny68xNynwRWaFTuqahKtVsuP",
  "key30": "3PpSQcPTUJrcUZuosj76tVGgguauimXmhGPc7xDu8RDrfUo5oGeE8ZRcLxtfpHrkKZkFAtP8X8ExWrPe1DCSANXB",
  "key31": "3MMjYzU9LLrPTrLY8njyK58Q9srLY5FzUUYnH3sVJ5fZkVoMJwtk6EJVvQ3XdepdwNUJdN4jVUiY6vkRV7UfxMsB",
  "key32": "3Bj8xZCtZeyzSvhVntW6Q99VRnfCupWo5QsiF6Z7eFtdgDfHKHzJCVx5h5brBBWbe1q1etCd7pKdaTgoX4VoTPJn",
  "key33": "5gxhynT6V9oXc6PcUAg7JNxEfeyJKGECKRdXnFyV942TgACCJNrVfNTYEb2juTaKJpD2EvGejgzYP9MTPGPv6PAe",
  "key34": "5dXTsQBM5E6DHJXRR5UWs43wg8GQSt4xnG6mvyrduR1H6v5KaPQ3jQLMKemVJATT1QGtAqNEeC8hgYDpWkhtC3da",
  "key35": "2QHRg55M61MBgJLBpoVnWQ6dqA9FGg77gr1Pg3oCW6VBYorBeXq5LHpY8yFJSjVThSuwiVGHaZy65BKY5ShcURaU",
  "key36": "327x1JfUC9nLdYASiWnVqfgChHSw6yihjqCzT6kZ4iHRzWXtB1xXPJ5AT8XLpaYsgxHJcGax2BAWJHEML2FBMuMc",
  "key37": "3g13ubdV3kCV3ZALBUZA19DNWeDZ8V5rtP6RoM6Rqn7nz1wz4XkZmnxWgiwdjiM5RDyYRrU4kc1GHhacn9PukSoA",
  "key38": "2zzGJBjtSzPJyocjKrDBYMtZeghVJgERArU6kLm3LGGuKGZRvYQqp2ScxrnARZi72u7V3HKKpnUKEi9XRq3MqLSa",
  "key39": "3u3YbCiyu14MgkgMCSjzWjXJ197oKHuvYNN4zcqr58SwCSLJSuDqPYtkNyUxF1Ye6VQ35du1i6wCS9vd8fysA1vB",
  "key40": "EJNEcasYpqUTrcN9V4ocGdzh8nPLi9hwhriW24BAuje6nsiPsUSVLdqX5TSkUZr4Y9z4pb8cJJ5wPQVwYuJx6Rm",
  "key41": "5pFEbstNPUU2paZUaUpQJEo7e4KwLjgYVwhFPTWHGefrTTXkBgXLhUCeZ7znCPvfSYsUBj4p6KFAWQMoFiY4b9Ym",
  "key42": "5FpGbzAbLW8GvgVXY6NG39ucijMrBk94uNV2DYns1Vb9jHvunieenw1uepWB6jaD7p34LbDxcXt4uRqgfomqoBR2",
  "key43": "3yrcHnnrHTye3NeC1JNhaeRttxGQGZeKxaQ5mPBBWv453wtSWfXXbfV1rePdBbtfHXaRDtsL6PMMiZYppimZevA1",
  "key44": "33SxKWL7QsroyHxTHrsHFXbfFfX5mBiMup4sRqjnoZbrXF15QDd58evhqEv6ERLkfnFd8orDvfrwkTtAWF41hKTL",
  "key45": "3nApQZQzNVou78zcc5k1HLeM9vKDafeAVDQairsza8okswhXXT9sF8Qx6AdcMSJSA3S5rsoEbR5UzAPXUtJYhLZx",
  "key46": "MnYKZY2rkXtovcc5YKiTrkMsa89kJnvt5a93WQKNCarNQnT3veoTDp9EuJejCAoFtM29wTrb5pwHV1486x8WzJ7",
  "key47": "4RFzahc7kDxCHENeRsZkmLyLcVvR5F5L4rxityiRmvas2QuXQynFy5o5XNB3b6nymsgK2CD8NRiNdsm7vxrhRXcD",
  "key48": "4861NTydgEeFHLJH37iyKorzXyhqBAxEjaztvyQ6QoqEaWCb41TupBraPt59ryuCihDK2iT2eYiNH32MTDDDWup8"
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
