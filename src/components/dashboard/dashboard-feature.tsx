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
    "3oze9neZugF5LNLWWr5LecrB2L37jVyzyHigHPbbMhvmVgByyUQmGfTmg5qE7vNgGSq4AS1cHWY2bUJjVQUor9ms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KhUth9GjNwNZYRgBWqLB6e11EFCSCF3EZkUmnWaUYXVMpV8dQuaekAgYNHdTLJp9d9WYeqECwP47zYScCRScsBw",
  "key1": "4wp7gATuHqFFmT2AqChr5bkCwpi7J4DYJHogWEQpKbeV3GHPUNptzsHgx1q8jELhBGMLyZsHZqJc7qoHyRUZhMzT",
  "key2": "2C3gpg4JdcC2jVtWWjohd8EUwMzAdCKmo57eQYDWCcNgDwhCwRRD6cAxThqD5isKhgQWCUR9RN5Te6XPNyrLiZPn",
  "key3": "4XVugEMHRSXDrpCwzeWveXTiR4wLbtuGBVuGPpDVv4r72CQyxEjBJiYtJr7aq9XRkPxS5dEdEdNQEbm2g8xinoEY",
  "key4": "rW9DaeoAtAzZyGHcf7cLnmGTJZ66joVzTABT8rbEqAcgUkggq25dj53tJR2U86m8ZNSjahD5K9T3JKUd8hrj8m3",
  "key5": "321XNrZBYhaNGCcgEcWUQFnVQKMvMT4PafQfWGEVVZVDGw6vyimirhnd1ZmHuHM6DhvemZZxCDFr3VJAzQw2kEaB",
  "key6": "37o5iPCWVobcQmsVXGd8bp3sZJUSN6eDvSmCZgQDt6xHHaFVYwxehwxqvumyecMnGnaq7VB8TcGUrb894BwxpMET",
  "key7": "48BJ9eHBwPxA5egvrhTHvyn9zaNu7bWew8rKuHcrwkkMQbgXcwkSzAEh8fv8J5QKrvYoAu4crkZCuuKiYpkbJ2bu",
  "key8": "64Uwn4KxD1k7HNsuxPVjuzSmJzhYnRDDFYCTqJ91kovcbHtBmFAC6VJtfNxm9mkE7EPLJt9vd2Bm8BUwnn3shoUd",
  "key9": "3n2omcQyr2EfiC5Vm3GZ6ULjQvgtvjCcZ8WY173ZWPD1M5mcg4nNuAQLSJ1BHzw6rCX7dpPtqk1Wh2zoT1zbtaeq",
  "key10": "mvXvnommXtSEU1GAf83c1FTjXfS3f4NjhbbsopdHHhkmDchi3M7nRAbzsGpCkPXYzmSUJoK5XbEWgsU4gpsXXdq",
  "key11": "6i7ag28nXwk1eBXfUWZZpamcLn3x1gLZR8zJD4rVDqqvUcAYbNWgbPdg9Pg5DfkUcBPHN3Fvx5ucBmjghxv3VMH",
  "key12": "ytFMVTZ8cwT8Y2d7pjhVphnhwEz9wcXrtr5ZHtcRQ7B3n8syDi6kZP4MJTi3kBS29p6bGN6K2xvaRHcs7gqoXjb",
  "key13": "4MWQJFVynEWw72gFbfACKR8GGGMcBQsjsZrQtCyHE87WGKzJKUEcpPcJNyKarp4qtrFEAq6pswC5gz7ShkvaZ94G",
  "key14": "2BeSK5YHxzHRMKCQZGvYYD3aztaXY2gd5z5HyCuJj5j52RR4jHBoekS8MLZepic3NbjX3jFVKhoVTFqp81Z5N35J",
  "key15": "373vgW5LKXvT7kR4vDBKwDYkhBCu1chCQqNz43omN7AuooVAGxAtQbaJoM3jonjQ4yHNZJ6avADQdLrWKehcM1oF",
  "key16": "4K8x4EBXaKnPRidDT5BvsdVDCh611oGaFRZczPMQCt3DKMUdcX4NbHQ3pwEcsvKx3UGXVkY412RmuGTiZKTKgsva",
  "key17": "3y5dBUKhryBFJH7P7d2fDeuGZMvNxWzVvnFDTyacudgu1bbfue5zE1TFEqBorBPUVLb7C3j1NAr81D88gr2yxdPq",
  "key18": "58NJJ6mQdTe4bfoiCQed2mJoQi11oaNVNxtVKgi81SCYhuRfqGvC4tUWB5UT7VMfSxEmBkg5D1tYmVqFQV2PDtsL",
  "key19": "65zUA2vWKkYjms3hDRvQ7oVYzTrHoSGKKaHDa6fFjsm5fBmBMT6uNgLy7SerMjqiFzeWYexAYQpDzo5fjmY6XPMe",
  "key20": "3wnUHVJKB5ebhCJHsbVzJe6dSQtNufytw7ssJuP5GTeiTXZT7L8KPyYfDpq8crdiESVzKfNkC68dHQrbmHA8umxu",
  "key21": "3GZ4WqjRdAViwzij3sZGXDdPhuKmPvcyoVbiJMJmGkawXVD2Gg5LCnkc4fjQCLyevw1ebmBt5cAEanKFEVFgNFRp",
  "key22": "4MHwVurDHNZ6A3S8y2B5HaLwdobQGLM5ee5urQejfsB2Kj1DDTYjgD6LgZyfHei7gGP2vmiLqxjLDfqC5x6RNRn2",
  "key23": "5VYBpu1XBCPCsBtBmxUcbv8GjMBD3AEnRd3KCoj1ouvtprNapxgFAonbunK5x5YwqME9urr1xpzX6CD88sVo4WKn",
  "key24": "5nJgUCyAG4VHfUVbW7C2AjMLU6RakThSSwsFv5j1Zis8Nw84paTWCWiZLTy65qTgLkZzhrNEHFYbfKDwTH22ABTd",
  "key25": "e1p6XYzyB3ds36RBDKttyLYJomLpBvKWFkFwU4bz9D7Y7wwXTWPoXgNYczWfQU3hBJFBgzUqPAMc7RFG4SiHMVn",
  "key26": "39UPRRfadCSFY1Dt1keEreodaN26xM6bjFrfMD1yTsRVikNXW7iL1grqYE7kYt92ojoC5qe1XcnjPpdjSD3VXtyo",
  "key27": "GYtWgJfUyuAecdX1aPHrBZodR4p41QQVLLvPkBdTdo1QZ94ThEiBBXb1R9XexZKsUrtqWhZg82GJXAbgC9GUXJA",
  "key28": "2DBMa8cG13BVqWDtc3rRGYHrrtawNTTDRNVcp7P2GXjaEs6BrUquU2wu7x6mbVi2g7M13GGURcdQjN7Hi5xSsxAj",
  "key29": "4DrZ9D7Y8Hpbqfj6anN3eiKSZaNBzLU4HjV3R9XKscg8u5JQAFhHjxA6b6V86w52SVvevGuGWrY92tycVqZCsH3r",
  "key30": "2sBp492vSPkhFrQvHnsoZw5eDnUQGNiTFJsCuoQ2XM5CDdZYZsuCpVKjUHzKmT2tWHxTeg3RBssGSwJ2JzBuWDcn",
  "key31": "4RxoYha7CpHQVq6Zsmg1irymH2eVvmRkEqA5pxC7QwjX3j94Sz9dfZBq52sUEZqxCnUiNtjfxsiM8uJ5YFHqzEeV",
  "key32": "4MFvvLo5enMVEhbvPwxwpF28eSENQz4ZDtYfNg9mY26XGrBdy2ErSP7Bd2FxrC1eHjVRiiMRtJbsUtDJnLCuXxnN",
  "key33": "4HUDC5H96ci6GwDjsk9UFezQj7n32ZUYrhmdHqB2JiArJxBbFfVnqtsPrDusJcCKK3sVcgu8tjdxHUgRLuehn4e2",
  "key34": "24Bq1VJ2XE43Vf7wiKNPu4GLkB8woiyfs2zVsh7eP5GJY3MNz6exKWT51q7ZaV3s2unA1mtCPkXWfi9WuhLXfQUC",
  "key35": "2SR17iPFJuvVv3RVHeoP6Za8g7qUcxNm9ZDmprAAdBqsbhfbbfHUUXKmRrcMC6VJVVBXwd4V5RC26r4ye57Zuoto",
  "key36": "2MctVv7MEKGJY5UerHyzgMZKv4dmnn8Rhq6K6QiFF3GftsKsfCPZX47FSqtUSKRLpKkJoAPQ6E7KDhbATeyqovrE",
  "key37": "2owp1JCFF7fRCjHhehjCsjEFLFGuaJDUMyFwdQvjhh765JM9sNnjxQxCzBHt544iFgZGmRYqxREFpuyJp3AX4beJ",
  "key38": "3ZNDVrp4Qy6kQN2zcgqYMMmx93CX48AteWMhvUewBtX39etURvQWQnTQPzr2yi1xGBYUCQLMGvrjmPc3s2oLVTQV",
  "key39": "5nDK2ZY19ADacU2VGxyEW5HQv3QCUfaYs2rGcJ25qxvyWyXwG5fzsD9Zo81ZNmJq7Hf2WKW3inJg2AjTQy4L3yBu",
  "key40": "43XkzhrrTwnRy1AGBy9jYxXC831Y5xwoj4j3AVdPi4jBoerXLXEg8BW8GSWwMRWUhpMHZkVh5MFVcCZM9STgjF3E",
  "key41": "3uwXb35pSt9wQzEqSDpS3EyGLSZfdz1rpnKrQVePCrMU6RYnTXgQj4GyRJEp5DkCwPerARcQPqB2ky8xairru4ZL",
  "key42": "2fgNRGd8KAdMtA7jXTUEyiCbZr64cXpVjyM8XTgNNbi4ZLfvRMxUJpLn8yV57BkSnnJg19twqnLPtjkFZAHiWtZE",
  "key43": "5wZeo99eqHB7f5iPVfGFAMLv558GjCmG2aXDPfH1VV4H1FapR1nTSuLXGdDB6jp4PC3jPgk4Vxn4zzKWX4QPDcf4",
  "key44": "4M4NcmBnpj9JkE9P2MPoDr9xSeFH955r8nZLzG1jVgJvU6UpmCePTCZXnEK1FAejLirAEN5t5VdvPksFwiob4LoL",
  "key45": "5TP4URmi4EshfHuzXq7B1eJpeVpczR7kfxhB8QSM1uFui3NBZkeyWAR4f8Xw9rSBfDUEgwarZrHqknTPEbcYsxtj"
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
