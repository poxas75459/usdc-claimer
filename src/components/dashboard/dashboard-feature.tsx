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
    "2rMo5DFAHqzXkKXeX1m6aMLx3wDXsofmdRigzPG2pvj7DKdi2qvNykAVB2V1V16TGH74zQMog41M1ihqjTgGbxsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GKDqaMkKxxko86bZLBTisXKvqbtHTfnhRbsMcuVikoQqvAWkd4yZhAsdtsJQF84DaS2ZSjPj9tgK8JV7hQjFWg7",
  "key1": "et4JPVVf9XrmTWbFjFrjUHNWvKF5Mr7511NWkYftUXYCyv1wRSrPLq8DSxuY55QJZtXRqNgCvB16bYFjNcfgs7m",
  "key2": "4Tv3MEGKmNR7U4ddEgrcGjd7iRcbHGSAH1K8THuRqWBRfbyrvm95enyjnx6yTQ158fGoaC5YbdWUULwgPCdPNWC2",
  "key3": "ognrMzRvJUD4tp3UgQg1sPv5gP3PSTkfp7mTH52wMJD3sNobhBNBm2Dd7xcBcCABXnePPQoo2XoMuW8nWQB2sAB",
  "key4": "2aXE489CUifNBcAu1yDY8arXnN2ApgnNKvVaBH4RcaA4i3by4HWy6QVSQ17s71buDyqN2nmEdDBgPWkAtt8DH9kw",
  "key5": "4xJHp3JfTTZDZn85xxwUAKp3cyp5ULBPcnSuMPkoXXh5S6javHS2Fq7Yn86ia8KAeU2HmbrcJ63sGDP2YXf3VDmJ",
  "key6": "4dumkoQyt6m1qH9GeLyfuTTiKEZNzsssE4SeEcqDdRsJZTn9iVLgo6dfDhZZKo4EynQEckivXdQKH63ut8ij1Xap",
  "key7": "2kzecHiW3BLBRbwno9kHggYgiDVd2struT2r2AtfgoDC6D2ZFbTRnANk7qEAU5JpcQxfKSvpb3Nuz2SUbxyn3qsM",
  "key8": "46b1Tq9vFsCbgGMnRsssH4W7BbCS8vfNtc97PdBVQNnjr7mHPFvwjhVLdCL4rDsUPWxMJjwQ1edq55kz7qy8bJp8",
  "key9": "2RPSsQ8ZmRdQ3A11mQuFdhRigQiSsEepjAmx6jMYtu28YLjXhdKSw8dVoHcWgefaXWkN9NRUsxpowcSWi162mXfM",
  "key10": "ycdXtF1WdCsaaNUroTtGRq8gv8vckiV9god6DKX4LP4L7fTjY1qryMptPAcPYLTr2wb9BkZpY9WyCn27dN7UfW3",
  "key11": "4ywpuwV4oVrse4NaQCXch2NV8fMiprQNPrC1fXtD5B2pk2MZTDiSeBT1xY9y6Vhg6eX4j1NyhyWdNPqb5zXpz2NX",
  "key12": "2qBn5ius7xNkVG5xh3JsU4WQvejx9hesiS3oXdBJGsGZz5516pEffhFXrHYqjDdbRKwwm7z1kMQF6MH7HQ1NN2BF",
  "key13": "36Vfj2DtMmZDr5RVzfRk1fNsbjnsSjuv7fG3oTpzXyGa4f8vqmNf7jkSVTdYnp4XPXzTWPq4G5zhCBK2T1BF8iqD",
  "key14": "2kaRmX9zAeFTg8rsc5kvk2UqtHXGLTqNQi1AtFS4q8Q5MAs1mq3GnhpkknyinqY1Mz61r6ppDZ3hk2LtVoiyWZ64",
  "key15": "51N4WazWHnXSzD7bpASME3uLW9GxxXNxQpK3uTPzHugun7f9HsT8y7HJJVrgWCctK3qD3dZ6BQ5KXqqCydKgfPC7",
  "key16": "2FRMTP3Pu3MDTxRrD7nUovLUSzbLpyWccAZD9WkgQMf9YDwjMA51M9K7yzMnPGJTEdXjABFoXgJk3GUNnoT3JjKP",
  "key17": "4TVYaZfepBf8CXGEoB2JFxQcKead5xeJrkwMgqyt3wjARxs2wX6rHy8Wi7EJ9WsL8nMdDjzi3Wu1kRY6SQroDi4k",
  "key18": "3Jqeum49M9WXTG2sC77uNQvignYoMwQkTw6H2riU8Tum7k6Gkiq6DMcapFNRWjbad7S4w4k8FGKssLGSKehv5dqV",
  "key19": "65faFgJBmRWxzeKLFh4MvK5LR9M7NRYCe8yDphRhnhRaGGUurXEPgjbzEyF7ue2HhmkbbhxtbE8mJ7wqVEyWvk2N",
  "key20": "5n7to3jZGnmHeGiU8NuZcLDt2kvcZZ2k2JXGM1u1ne5n8U7Hx8XxPYnjzZx74eRtBfTbv6jzDRtvzGfXJCWadsRx",
  "key21": "ShcnV41zKKtj3J2vWXMzAPnEwHmBsnkxf8TuqrHdbbTd23d2pv2dHPPcMtTWCiWxWQ5JSXhuPC1gfXL828Wpw4P",
  "key22": "4WR9YWsVdbmK1dguUzguYeD3LknLNXDrkJj3uz1ex6237YgKUE2WKph6Ds2TEJtymuMJpgJuZVRG4dBet274ifhU",
  "key23": "3a16Q6HwqLYBSMFeCXxnajKBS1aHJtK3xWQfKBdNBMJ1cHMT8NJ7WEq4kK4wg778RxvnRRF8r7qqvrWi3NqgDG1M",
  "key24": "2EVLibmw8sY4dVKpi6gMHN8211zCtzuBp4qWf4EP66iEkaz7PmAjrwAcKN9ZvuWj9dbKKC3XVV5KEKYeXoYJ26NS",
  "key25": "VHqk8Bh3w3uQMgN2qREdKHkF9eejXZG2zwrjuqWFgH63pZ2XaYrHurz6AyshVGBQ3GeDxD3iEBUgdTm3aKub8WX",
  "key26": "T3sTAZdBsFdY63hatXWXiy1Eb1EdtSqVQs6MHKzkvGKq6RCodGC1SoxZW3qPiyrCCKwDxd3GmznQBn6zPUrBmWN",
  "key27": "5G6tV8qhUH7CJfT7RCU8ro7HATQ9wT5KkSvcgQwpq5mAuejmYqAkz1VeUv3vTshrbzKdNAnrhVEXFvTifVPXoQkT",
  "key28": "3bGSE6rFxopEWi3XhrzvJPuPWV2jTP4HRATDaw8LbgGR2SCkagBoX5zbAoJqoSHxh4H92b6D6qk6GsTCfvkDEzTX",
  "key29": "2t59aVajFFEVaBPf3JeYWUXi3w9Y6Qs6eKnNaSA1MwaZtVUJtRRiU86bFSFsm4qF1DLLTxmKR8nKizoSQsfqqHtE",
  "key30": "4WM4aR4PpqitwBvMxYq5odxKZvsdrEeAbidLdtWzsw2jkaRgfrwt3u8PGmwEafee1KgnX3Bkj5TnTRRmVuPPEcbD",
  "key31": "5M4sou1Kd4BhnNEeoRMebLf3J4VVRAV4N2Q96cfLc2DpRcARYgrza5WwVxxyadUbPpXfaCwo1qtzjdM9LGDbEQts",
  "key32": "4TuFSPXBorctjRXuhxYdM9ZYHTCZuYnc9duLfLq57Bby86CLK4foujVpk4gPkkF11tQJZNJP4KLSxfY4kJtmh8NP",
  "key33": "5C4oV8eLY7sX2FkDH85ZqEvbTZQoU6pX1GQy4Ts2pm6hjF399zRYuoKAJ9hEYEMzNnWDYBhWwxuGktwf3jvM5aR6",
  "key34": "2R2wBS3L2PrTy8cYTS5DRNnLuqnUZ17Djkk8GMFEDH3ebfDuzzxu8mzhaNkYKqLc9dRDonBGXfj1Kyswy9TitjKa",
  "key35": "59ARcwdV2wmzvdDfgVzQoYhG17DangUqHBwsGi8U28K5knDdT7Bi4cSR2AmHAyWxz6NAm7FhqeEE73SrWCDcZgNL",
  "key36": "4agGCCrNyY7E8UFbQqRHihKwZnNa1oFMTVCBobs8ZDjMwdtr1ozueBt9GpV56xPpZfAtmV9hesW32DmmiAH4KTWU",
  "key37": "W49PRYme4b7tLEHwHEE6eUj4DQESGQp6HrYZZf7bvftXjoBDkoCrnXXCjojdRtJDnfmTST9234WqoBZWrmH3Pn6",
  "key38": "3bQZbasfwpg2ta4UDeywVL6GvjuMMmYuWTVDo1oPY9Qi4s6dEmZ99tFWYXXRJbZe3x9dgbhtkpwauk3pxPhfvdks",
  "key39": "2HCru8xDDWP9FPi6fn6Ut3YAwkLznGyotu4fEMtH6n2BeCuRkKsJJo3wqmeCvSRtyRyXfsuiVzBgjYhyMpg6cm3W",
  "key40": "5HFT7i8yetZVECvWtwmSzAnA6Fc8rHu18kapSm6PT2oJ433PWADPWY6mFoMzuFHaPoFovNiTBGHCVe7RYR4dRz6U",
  "key41": "41YK3C1A2nofeiwa6qGrYu777wC4FANPBwhuknn7x9e3kZWKfu2PD9mbsmsqkaf4rthjdcNNNrsXSquMgNLcF3N6",
  "key42": "2PRh5QQtt1W22ACZUr1vJPx3dkivL5YtmXryt5n6fM3yr2Fzd4EtP1BYQyP9sMKJ3SXPrd1vo6uvitEogy6DnYXv",
  "key43": "5nnvtpRAvEnhijs8MBEGrpUZEdRj1swjX8dsghDocnvLVmzN1sh59BxiQx2Q3sm8t41CjtZ6Dj7Jor2L8wuNZ9HV",
  "key44": "2KJs2wyy9UWmZ3Ea2DvdNp9YLAGfQb2gTmLFCUkJiyJrqtcrK5Et8To2qD9rSxQM77R4PQmpgHSRiL7yQcpk8pn2",
  "key45": "29FiC5yDnG1wQHMEdtJADbPQqXmiLsbcUGajTXw11Ff5arUsCGj9rKtJbwDGxVAavdkZjhNnAU1ub2SfMDv19c4k",
  "key46": "3q1FdasDx9qsoKyuy3EBvb4a7HL4GaQpF3ZZ2QKT97JQk3hVe6BqfCw6VbGBd5BbbyCVdioh1PP1GjgyUjR1Zz3k"
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
