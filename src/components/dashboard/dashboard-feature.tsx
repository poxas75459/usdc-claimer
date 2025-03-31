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
    "7zvXgPvQkQd3q6S813q3pWXpRWVxzcjS28jJRmjBwq1R1yn1MPCWxevEsew6i8e8wLmdaRh3fjHEFbbscGpuUxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uk7nPGA3F7A6KDGwRsH13C78okfTadvxytL3QAoAydLfHR2yHnpQP12mSDhp9ti1eDR8mKiTGLuBQfkPywHB1Md",
  "key1": "2zsydEnRGiCv2zLMLwpDYdCBPJzRsn5YX1bbDDyoVx5HCZSMeeBizLPkJVBVKZ9cMhUfYFmoxMFvYwXK8EM2WEFq",
  "key2": "4NQMcyhR7EZnov9cJMkQpJZupbjjhBYgBHYayF3rFfNpjjiifCuMBVwGPMR6LopEEWszSheTHwnJb68pcoQo3NWo",
  "key3": "xBEN2gyszaRBWHyk1WMyDC53Yex2LAUSA8voAgWW5s5AB59bZ9AG9FDhkiz53NBxb9bpnLT9NTsAQXsjpVTFaUZ",
  "key4": "2gsYGDNzty3ahLGf3xQtT2S99pk9yKYYxJzHa65nrnQL9LAwGw49mf2sjWo5S3LvW5WQuZvsc1dcy2RwhGpcegVD",
  "key5": "HKmsnZtwHTSUcXdPE7FeT5qaUpQqZpm8TmzxrGS2GmoKgeGwfDCEip4hNgRJhMGWyzyEVeyRgAEv99jpAzZQfXd",
  "key6": "31kWXWbWeckJCMJQ7QCWnK1b1RpVsPo3rGHQXV7eK5GsGqFqeL1DSv6JEv8KuWw2GCs24afaWCFe3WgzHx6tU3rP",
  "key7": "3VbTMgmabBx5DUaoqHsteqJiwN9qacJa6zHAwV4CCUeMR1F3vxx8PkYUp274b2TF3TGi5vFSJPwn8xC1dnKdzLPy",
  "key8": "CNUtXeZEdergAPi1JA5Hhif3A4US26ewdQm9mJVH9BXHti9XeMYvBdwxCXDg9aqyHTHxYS33WT4w9WZ9epAWkY1",
  "key9": "3xgrHwHUwKMAy8yDtah1BtaVfpvzkUKyDBsAA3TfFxhuuKQJqvgZjY1RSzkAosAufqbFY6dYovZWo5vbuiCdshGx",
  "key10": "5p55AL76fpWiNccC24T3Rbi3h3j1K9yUG6Dik73wEZLF18EWkbzsYAc2pSpJcoRAabx6PfkNkc8BwRSSLHyj6tRT",
  "key11": "XyapoFyYPcu5p195j3NQnjaVUNVwg39qtb9LKdtjKzf62Tb7qvS34XcN8PEjchWJLEyfu65QbZYVehPB3mp4Mft",
  "key12": "5AggE9iCq72hdX5xUdvz44RdJaTWipqMgh5hKTvLdGuVnTyEp3jxn1JKHk7ozmjj2xVqknEvLcvAHVR7LnVoAR7M",
  "key13": "5wJCv9JMANgXGbg4e9tHGZxaK5TamagSqy9CQruA7AZSExvCJPxBjQDf9sZvwPMPumWD5i7pbbiEHchhfqUAkQZ4",
  "key14": "2VjvLn6fNXfzzPmYR4K5QnX3wAr8DHBHLuYkKGxH8zXrMs7heHKeWkWNghR4n4nz7osrp4dAGnwPm2w12w8zL3Qo",
  "key15": "o3sERKa1Re9rVSJpUV7i8jJpoFZy2HUrtEqkoPWwjAJVKFJ3tqXWTrrx4uwBg8uuR7y8HGQPnci2UVYg4prRJpM",
  "key16": "4qEE3vjEA4mj1Zgdn2t8D2nTc3m3kcxmiiTt6rjXJ7B8tJcnRLahrV7iyATzgUWSBNQjRvCiWAerEU2P1VWYneS6",
  "key17": "3KjgvGM6p7CvVYhjmqsYs7C1ULRVcdbhN4XhvPvWqRJicT6YkMmaujGa3LZ8q2ZBsAS47twaRaZVMrMCYcxY4NMR",
  "key18": "4WLM5vLYLmZBg6Ac8s14rWgJ2fSTyHhWU6QJ4iyhawuCuWERFswCLDGpdrhWzxBLyKT213hYpz9KEtUKKadJ4AoT",
  "key19": "2RBvPVTsyDwmycrRMcyjevzvoCdX5sGf5s8nFnHzTnwWwCsKTjRzHEox1EjTbQaYV2uTrbdGj6a5sgL548YH9oxJ",
  "key20": "4M6cPGHZXU1fHSufoposinB7NMjpUxLjkDDfdGcgrFrV7VctqJ2rPWkAGCCCbm7dgVLDPzHzGrrAXZ9hZgqVnBTZ",
  "key21": "2k35ewxBYjhq5TTE9ea8hHzdYoECAn1EKduoKpdP38TAAaMr62DKm7YSemazeSSzNtRZKXxcm2RB9pdmVpmqECaT",
  "key22": "3gUckrSwJAfE6UWfAKmXTjNrb9EGo7kUo9yYRarakS9sp3JHnMTS1xtn4HLVcuPRoPu3aHJYsGjAPkKP3dy628M3",
  "key23": "5jjGq5obr9qEKmZ3LT4qQq3yx7eTwYvkZ1nSurDJj1KA1YNhCC6UAMeucS7Bw2Zqkue7M3RBeoRoWxJ3L7MXD2d",
  "key24": "3d8hPPkUwnmQDiWTBj7DFfVZH2KFb2wnyVtaLzf2b5niJ4ZGvakqVBfLaKTCrWhav9rew69fp1e23c1ReethM3u",
  "key25": "3Wy6C51pgGtRLNk5FB7p3ykjx6NcXtATqxLY7iRDp1crCNeaEfaPTH33cuiw8emx1hNVwYTCZme9ENxx1PB4wMUq",
  "key26": "4zgeHYoVThmp29RQGgMjeUKTwsBLrhXsaAZewV4Q2UohM73aiFLbkYMHP4yBP2rbKJVBLA8jVopPEbMgqHrWRosK",
  "key27": "3da29ZqU7rHTjtRUUAL6pmxjkHVPcM6HDydLnLccwLnKj4Kh3uPpgFcmKdwW8zDwmiNSFVzoXPJMS8dACsfeoKBV",
  "key28": "4KdnWJgiB3cHmDeaifiVifJMeyFNQW5sXhuoCysvoeNXRUyTcNUbUrmWNxC6VM4E8ji9cMcxFJtcTMUG373xZWoW",
  "key29": "4vasyquEqfhfaPUan4F3MnK3ADqKouDbBo4W3c4qJBM3dx27VgPcRDwzYNjM2KWVSKczBcZqxb4kXqwrSK2qYC3r",
  "key30": "3scQfs7yiekZxmLNkE7hE2eeporAwMV5L6RK1bDxRWuCGLqbfFFLWyCR5A2YPXF1zFmfSSojQK16Y4TCAvixb3KZ",
  "key31": "5Ej46is6Sm7xgYE3wiyWwVUu4XqPCseWTqu5ws5vRhoKf6dV4KLVishwx2R1NthFFJm6tZvyuaRnnVXeW9FzQZJn",
  "key32": "2x7Mne6dQTU8dnk715nGCZZSHZDC7EqHo7v8PTEBynmJacwZBApvpTcN7YVFme1AonvyU55bWZKx4wLyArxQvYh8",
  "key33": "4fMTP3WrfhMWBP5VrLps7xSzNBaMPQEKTYFbyYbTzbjSTeVCskTkuHKPSNyDSpxVH9hchovW5MLbDCR92So8CDBv",
  "key34": "5sGauUrWat7MxzasnQyM7pYf9bounxz3zw1YHPT62E4aEatbcwLBoCZomezan6VajQrBdCujk1e34Xm5fTSZrjTo",
  "key35": "42vKPngVD3oxh5qYyJbfiTms1thRZ7EQp5mMpunmrin76uHEbMeDJosi22JPBLDGH7bHUcEULuCghs6rSC3Hroz8",
  "key36": "5FQFb5ESWdRXkWFLVtxKchpAP4igVX8VxgnZspuchfM5Z9ePzdEGe6PPetBoiuAkjvzGs3JbyFDkeDBMYEZBDe5U",
  "key37": "4iJHeDRKgNcJjjpLfA9LSvE8dM1hPXWnsq9VAqaTAMf4KFxuwuTBAenVqsdCKPCaEHpeXgaDwL9vSmWCXSMrkL1B",
  "key38": "3QQc6h9p2SKJZW7TyDy2SFSD6wyWvMfBpWXvsVjicXAYtSqPSnTFakEJPV922Fh1MEmBKXudseEyc7no2fq4MDmE",
  "key39": "5gBqr5eXc5oVWb1wkbduiDDjPhf3DwXnndL1D3DK6vMD8aV4skPfXyR3w4ycQx7Zt4mPkEXdBTgSqQvqjguwfAMH",
  "key40": "3SUpJQa15h4b6dMjGaqLfhY3K5tg2U1yXNaJdUTKraicZaRePo7w8Xa4m8ssi65mXyo2gkoLUMVHCVRsZQ5TsWQb",
  "key41": "4xWZpZtz6egzumqf8CnPTtmJjwswgMnMtqGk46nx6AnCriNRuSbmTda3pc46WWd9MBpEadFeG2iyaNfzhDnb38eL",
  "key42": "3vqvcAVA5xQmSn5ymcX2EdoF1DmRqXKu82Yn3BbwWPUodhCd2kdLxPYgW1TESFE68eHWbQYRpuh5bvDDKDzjZ3Zv",
  "key43": "3jpt1AVpvH5DTt3H6UJgpSUNTgb1LrsuEV2iK6Rs1gpEUcCs58Zdtynfj4aL3XQF8Vd9dNAtGJqcYQ1c2M2Z7YGo",
  "key44": "zRvNvdLTKrRjm7KXzWZNTi7zyzRen4LFR87MmM6UvcTPkeSp9mJpGexWujCAZzajcebUw52va3H99L6zQzE9MSM",
  "key45": "2aLRWGkx9MWrYSeWDiz7Z9c4p1nLaRfNxGr5sByF1eedMwLC1w68ju9dHwPSv1rKDpMvqdZC8vnXzS8iyMJzL2XJ",
  "key46": "2QNdwiU7gceERspLGCKLJP64e7cqatm3GfsLG6V4bo1K4mvTnYkyfhjrJ5yEBtcjuifiE2PoNoS54RBXZoAWASxh",
  "key47": "2immT1L1CXJb72GidopRHb7tDcg88LuZ8bqv7ZkUiDmKbwrGe4JcQA13dnTcfMnQHGr1iQ6xALspVCtVbykAgwo2"
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
