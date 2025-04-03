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
    "2CeDNNnrv7aZ4eVL1eT2huaBMxxj9raHTUN9S4QbmUuuMT43ztzz39adhFPfGdEqWmKQM7XyWsczZ49yGJq4crkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u62SJ4JsdRf1H7TuRkvFHXDffBndaw5KzX3TJxxKZpMvz4M2KRNTR6CrzkpJBiuvFnADhQPAF85noqFE2eFWuRZ",
  "key1": "3QB3s6hJ7yJbv72opz5Drh262pXw3h2zKPvNDhjNP2BysWwM3cqgnL9dFi1ihktcqDprEnM9h1LkyYgisEacAUDY",
  "key2": "w6TRmUppZRz8GyRiqDiN3TuvA8XQsaWXSYPDmHvU33XUe2grJsybyarMcfG5pfB95XTAF7uMrPopZXT8uyUtMcE",
  "key3": "3DV7c7ESKFWmK9b1vbUzriegL26CvJ9BmJYoRYsiZwkxmmEBdLCSEaQ3zkWPofU3M1hNUGnYJWKvTaopXuGxa7Xj",
  "key4": "2uAofrYzxNi8rigHyKkU6vnWDepUuXk4X2sm4NpFnfg9ZAwV9YvSxgwuS9BwpYnvVEs3BdXH8yvPSL1CbCnRBzFZ",
  "key5": "3ajtkXVu3YvYkCEQUhMZpLuVQT5kBKcYd9usjMLaTDcb74MirMCm9YjCAb1HrZWjZrGGo6HtaSmwyv2zsWUqfKE",
  "key6": "4a2NdEf36MYxFqAeWjwg3iKEtUJbMXzf7nNm7a4NZ82cCLZGWK91h2pGPiPjNgm6gBDHHdd2uTtBW2gFqTHg8H61",
  "key7": "EcLmfSfda4fSc8vZsjdqeQkvpgyL8RDpuqXfVcdHiWRaVqgjrsuJQsXKyAKLQzk23LWhRjWoBpjnD5xhGotX7Xc",
  "key8": "43v4vLjxLxpdWgooabq6Eos1x7DyrHnYKAPr54TEKE3xGmvP9gkHpnj1Qk3WyYd6D8SpMsjDif3i8bDGCTDbN2CT",
  "key9": "4WwHeQDv5cuhsYB8Zi785mGgo4baTSY4LYFUnngMuhSonus6pSVPcKadXQZYRFDcxPuod8xcR6VLGwy9AUvhZHJY",
  "key10": "55RPb7sx6je11rM2znqcpAnLWsDa6YRTbGba4BKbQLQ9sjTe23U6Eke7espv2tFK4DWTPkuUhvUda5nVWc6fpUGN",
  "key11": "8L53yNkX3HixJsr3FvdEyGfSw631fPjFghkVbEvWaU7ytT9661HeD4BS1ivmmkbBdd3FbXW6rACV5MVw8vDeBTi",
  "key12": "rG2d1BGA3gaEUJZ4dnVP8cbvcGgSXPsV7ohhrw5Eo7E7484pxxCHaGGb7CPwozA3458244yKm7H9nYCcMBxEWZt",
  "key13": "3ppJoZmJACVPo1Dx2Bwz1ja746gn7vC9BsgfgxzFXCcBKoigVWQ1Vcf8589CKYst3XN7FB7xmiAAtxakvhfmSMrs",
  "key14": "4rKRqm5uNFZRyS1ntAnStsUvuWaHM93UNiGKCVJJEuLQpZbDNsPqCuTwjM5tYPs49v1QwxMkTsuQXK682GpgMNZb",
  "key15": "315TEcz2D1P8qnoPkp4vnh5XVhwapbJxsiQwS5BvinkPDn1k8zCG4dASsxdogz9XPe3hs6Yj8FzuFkdgJzcLCZwk",
  "key16": "3wQYoFBPFNwVAgP2F9HxdA6ZQK5bH6kA26YdrLnh2oRgfvZHerSo7eH2K2VNHmornEuLkmDtzUtToJ1yDD1sfJVv",
  "key17": "3UwyCH9RMNGXf2GewfFVY4XPnrvcMg3vjet4hqmYcBbMwB8LWRiF6j9QS1gjAcSSXPFfatU2KV4GYkY54cTbh7zY",
  "key18": "4769p2pntRdEYkGNNae6WYeant2zCGXYGvaCXhPxTATErdXDQ3omfKgecCZDXxE2QA3LcwJQmtznwPsSfgcvb331",
  "key19": "5KmbZueQ4Rb6kHiDqtK892Wa7FS66y7L7qFbFKqvt25F6f3hiAuSEC8jHeS4Yufc7ExqFkGbkQjMpakMHddP2kz8",
  "key20": "ZWgxw4HAAbaegRQ2x2vaNu1dyqjRs4xt3hEKXegmv7fPiArg2Pnd4mo4CaZEWdbdXfVYAQe2GR6ipjzLYxX1aAj",
  "key21": "2i62dSWayD88QKixpqMvrTYhcKodsnPAfaecvNEBU6mvJbmAjFGtYvPtd6T1DesKzRE7fEvU8a4sfHc6ZGycWBTR",
  "key22": "5WVhpESZYP14xJBV76XVkdNAKHDsx2SVjPebjGs4jbgHiRM9KJ23uTt3rFDgbekjm7Vf2KJiVMyixfNTpcRg11Cr",
  "key23": "3RcMtrTx2Gyy4izVuMptvKKrQ3zKPFNuz2FcSqVdkxX7no5ZHmjKqrxFRwUoHr3SBx4XrtBHFrKX4QofdAPYA769",
  "key24": "4VvUGPHL1HBNV6a3AXwN37kTENeSry8GbfN9KwmTxiCrdSnkWHQobfCE4ik1shu5pnNXnHQu1dJcc2dvFu2EMNh4",
  "key25": "Jzu4z7jb7YYzpVwGL337UNpw8dHXkH6zEM6xg5P9vrFDJR3dJxjEzwsyhSMEhQJbsVU4zjNVfUukUxwVRVktV3u",
  "key26": "4XxsJyTp9LiqEiqosi2vZCLUXEMT2yBMMx9hP5WZQjsnXU6nP3mkwPkrgQNieUTk7H3HtcMxEopKbKCmeFnK2QJA",
  "key27": "5WXHhkCSgh3ig6GqAv1RdPEuxq3kmsCzqTHikQDCDyyJq4jMe12EVdABGomGpuHLQfwSh4YpsJ1u7NsY6iRKubNL",
  "key28": "5ncsHgy17Mr27TnBikNSaUxHN3jzaQ1fvcZjwFp3G1YFgYZtGhTVnn3cu2d5SxvjRb3n5EDYsZAsWs7JVRBodw41",
  "key29": "4vsvBx4RKsbRcpb3AWLogkqE7boW4C96k7tXeTveM3w7fzTBFZXxTCZMqM3GXak6nkMi5ekvEZXzNKMKNxbhhhHv",
  "key30": "4XSVfLXRYz4nehvc7PLHB2tYU1zV7qDz6U961HVt1YKtF5aSQDYAk4WiVaxwK26cPH9K8uH5LzvR7udHrSVHEh6U",
  "key31": "48bqjEfFTXo3zCJrTNjy2oeU1mJ8xiwcu81QRRYSvpra2kqnRbBRtqmGy5zPPSGvydt9k2R5GmuE61XgAsXm5ymJ",
  "key32": "ucbWEiv3z9nUDsU1A29Q4s52NmE4X23kf1Vf13ooaTYc2d8sC4chHwYT4xH2tqpHyvLecLMfxZaGkphCSvtgRah",
  "key33": "zhwpqd6KMqyRRRNMuMsUxSBN2DWg1mRJ99WFnV8uxcZ63G9nV5YWnFzmdYBk4tyjtjt1vVUmE8mXeEFNmTpSX6k",
  "key34": "3zaxqW8EepSsa2tBCYfw3z7GYkDdNGWx7LzczurNRxKvidFJwkq92wWroTpDn7DmezJyKhaCayKK9dXNJipoyg6a",
  "key35": "319odPUiM99xSz75482jYcHvu12rZf5MYRCjrb6oGS36oczGcDE8X4q5KsM1Hb65W949CbnY87xpYVPGXFySbTJF",
  "key36": "mhkRvYG4RjcDj1UoY5P7EpmvGmghWYgXLUrfjhdgrwd6XMa7eYq2tWjgdamnKqJRD2Zg46ADaQHZ9koBNGPYfVV",
  "key37": "4ag81dh8SYkdTto1fozmK67nEsLwyXRN5xq1Z14SipiQ2WsvReqmbUtKDk8FH12NSXHBb55iidkq9PsHrgJ6GQGv",
  "key38": "2paFqeRWZNhFkZ31Dh8X9MqWSNNfyfMwLKnmAr3qx1yZhMNiayM2mrTwrUBKn1KGsndJUaaqngMGU33qANLnVCMe",
  "key39": "3wgVsUparNcqE1KK6kb52tqjefCgm8hG5kUFgUUSGh5CXEyZ8PX3Qp78EZKxiDqPWFEnbs6Hr3UFmCUjDVXUCAv7",
  "key40": "5nrXw8VE3H62WcWzqZNub8zNBD7rBWgKLfay948tpwbhGbMpzWdRwnqWQ1hFT4GMGkENr1reeTGXJ1wGDYEnxZg9",
  "key41": "2ygswqUprfXwN1Gp6aXoyVoiooENuKBCtW2CXugxefDBG5hD2yr8WAGPy56xNK8mUt5stRiMpWURkdoumX8N5YfF",
  "key42": "4kL4ficXExMeGbhWWcnKaercW6skJ5Vb25XCUowjCHw8e61wWibUFDRfD3cHimW551fxbzmKwNBa9Et1ZtJ5iVh3",
  "key43": "4vej6FL3zFFJimm5Qnpk5VQQZx1TLwF5YBDRpoZ2cPknYEfiyuH7Prm4jy97ur1Ma1Pv9erWZsRk72z8AwfihPYy",
  "key44": "4McNatbJoyuCrZxeJ2M9yTQU5tFf87FFEP1qBrx1bLcn1aiaTPTRSXJa2u12ftqUYVRzp9QH6stiEZCkBVngCnme",
  "key45": "znUHY1yCiqsTDzHRkJAa32nt9eyPwkD7wugXpF36vcBFjrdQZd7hiASPr8AmVMMgocFQdbiYc24CauqFgUxFYKL",
  "key46": "2TqDgZmhWkurU4wCvVjt5nfxezCiCvKBweQAmXnRn9jTFUnjB6kbwgH3kvDWR3LBwbGXFZjWdFzKsnpRx95XmXcX",
  "key47": "2esW8d2mk14E7mpC7Q2TJr6AYShwVayTdAHTbo5xb9mSfA36EKSPut7MZTECPvMUVfzd2DvgahmTffEANa7Z4iUx",
  "key48": "4ycudGcuuJWxmNJt7X1AC7pt6gUv4NJfRmnQqrizEdFzytYs1DZjCpAhYzrpPTzhh1suyjQPESyie5UPVGUcK3sX"
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
