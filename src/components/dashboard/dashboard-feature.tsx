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
    "2tHFDV3UxCKT6bn9rJVyEmABjkkeV7kUkCcAwBZFCc5iog2mdfCaECF2CrETud6E8fjxp1oK3JfiFquJznt5xk5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xnvz1QVprpdJef8Nva4ofPjbg5dkVm5akMxnoSQDyfcNijAZhbHDL9sjh7fssC4D2Nrhn9u8HhhPeKr3xqhvRJQ",
  "key1": "4BtBhUpZpsw3TNVkB5NzinmeKMhCFWzerRc8FhyXovTiF1dbjNdhfd99zbqqsLX8P71qkJRkT76xhnkx1m3t4s8j",
  "key2": "CNyBPuLHEz6eVdubYj82GUZy7GnnUvNyrSZ5LFeapjwWztpvjLm6841JmMKFnJmahvWcpDjURTsjVofcedyPtuB",
  "key3": "4fhu584qNk7imSDWvShKMknC4C9UTfqoFRoHAmUcc8yCWv9WQnyJMYfS1xxxPSstg27LVwXdnHhDS23Fw1WDyVmE",
  "key4": "3MyM6KDzo9yavP1nKY8hpxYAiwPrh6rsWMaKyBBJTQVQjBPvqQxCz2SEoEbjtrtaPcuWLw3ETUt1P17Jo2ihCot4",
  "key5": "4aGjB3VkvgiJ8gUvtcD3jqQTowWVaYGD8bfAw1CP1hoaLPKRPna7J4GtzgKEenvi6uoKjuZ587JscPZTyaCrJPCf",
  "key6": "3n9ceKJYMFchyd6yaWHV1D7LYP3jH22KFyBppYTWdtkAHTphrNbfkCRGMG5XdorGcmhZNuCs9Hv9RwLfoZnMkU2M",
  "key7": "5hQuErR8pzLdJ7GKDss5oLUEYFfBk7r5R4Z76NQLZaJPz2j3h85cEQhitfYnBWh6etHTmwRPi2GtVeRbpWZnsnpV",
  "key8": "2fFis8JEjd5gtDzYJtxKRoMBYNh1dZZSF5uXV8QFeECpN6J57WjtzEWnHZoFKm1r2a7jqyLdUrJhJvubCL1oesMi",
  "key9": "4ggocJQ1iJirG8p5Vwj4FcDRYtXQpoqLsUAKn5TUFtz4Ch7m5aFH7QTptgWNcoVXgM3YnaNrEUyjTTnf3MhPQ1gB",
  "key10": "Z2YNNjFKTbBEzLvqJBXX4oETXZzkx5u14KgzTqCvJvhzLxZsfkhgMuVJdVp2SSoCHT9nwaksNdpreQekaU7vQzC",
  "key11": "4y4Sdg36nsnRL6fXxdLeyAv8b2uJq7arkKwmx57pwJMLbW2bpL6GDXCSysdZiRamwTX4CEXVp33jKvrXpkStPDwM",
  "key12": "2vNCfwbWikogJGjHzjgf1hzxnhpk9sTdFydhSZBFRUFpqvnRybFRurFy6EQ23YHoJ6AvZv1ue5Lu65CLx44ZbhS6",
  "key13": "RNEepDGhoByLgMV6ppuGV1EYb3W7Zzto9CCkwQ5htgZjt6vwaRifDhs3zoxx7U828BVFFe5jhE8J6XzreHM7C3R",
  "key14": "Fv1U4AnUGNLW1eANJfQ7dpRHPCVPE9ZBTenz7oCX2bJ2inzb2K8wKMc2koqsmYkpsD2u2L5pvqx3rtba2dSSaob",
  "key15": "5d5BgDrphmR6Bq4p68GnchZGzNKdKmgbTeZBHRChdso45qfvMFrkouoWqNDeDgmTq3pfgRuoj7fgBPjvYbBLT9rV",
  "key16": "up4gkysBxCMY83PeCrj1bLDtYKxKVefcWgQxAvKdaDnovzHDN83s2HyzUvp55aYFmNwMdG7j34E4jcBVKFaT9W8",
  "key17": "5SGRrB6PU4c8QRY43minYzdtNmsqBxQw48H5B1PkohyH83EZpVg8VgXiLvbVgGSNMW3RkGiarxH3xYpjvTumvkwF",
  "key18": "3YLxDSjKs3ENgvMuH9bHJFvVvWywxNYrxLzDdsdDinHhFDiFBiYiLBovDQTBZxEBdtcSTK4giTABdKaFfwRPQmem",
  "key19": "3ouubVKwAKUBNuT4V4ETKbTT7yj2735BA19vU6f37n5GJBZgVxReWfLVNtVH9KXfgE4U4Wop3aqLyj1oSMkQ7Aab",
  "key20": "5mBVBSXzjsMWne7Yfm6yKRVSiAMezh1kgvzAACEoBm75jaGcu3CoV7WKvroMu4uZXAUPj1aXJV6k1WYrNfURfppx",
  "key21": "5XF5yupw8ujKS3CjGtTS6Vgu8Pu2DPiHMZHrfkvHNrwDnnJ4v44y3BrcaJMmW5bj4y8TPZV5BXnmzBnHjEd1BE4M",
  "key22": "2zK6TsD7vZFP11hCLhqE8C3RTA5BrijbAeuHqcLQ25Lr3YycZ3zD2Qg1bvthzNnXFMVF1Kqb4U2JDeTnVQe8T4Mz",
  "key23": "64Lh7mK872ge5g2P987jn79sybSa2vNBFJoJRfszyEsxwKsqCHNkgkmT8wGyipnyDsbe7thLCzPbrAJMJyjudwqi",
  "key24": "2bdNkHPLebQQtPsEC5638F9xrzTDS65gd1J1j7vE6cNUxxZJYjs9z6PfdQRWnSmdetj5sr5HFdPvDfj2Z3vJCY5u",
  "key25": "4RF9o1zhAJeda8AZhi4gcaiQehEmEsrkNncsevS26KBaAhoftj5U3jT7CKV4Qm17ABipnPuNeHjnJEdudAMMxtnW",
  "key26": "5mmeJSt3p4soZrwfuVeHAmF1GasZDSqHcNzwb4M3vs3UtaxeS7fCVA78hBYz6iRWrn64QgQoToyQpW9SC2DCjht9",
  "key27": "34k1EGoDGMrrB7FrpNVaPsCz2mCjHVacZ42fPSSE9PCUUoK2QZDovE2MFHg5txfYVtZ21u7jaBet1kss49ERmWa3",
  "key28": "5GyVC8Y6Lcx9KmDqSxPQwqTWCpXCATk3H3kHmy9KgwPTHcsV4q4SNiVpUBZ3CFviKBJxZd2JtXQQPSPgpPdguhUk",
  "key29": "3WdxEfJDzcfySLT55hWzGzqn4AsYZgqoF9dUv7B8cg5gB2ucKikRV5pNt2tJcpudWSSNooEXo2wrp3Fs8cPgiuf4",
  "key30": "2MC6GQcTdwu4RvNB1d3aspzwHPyH4JtX7qPrQDFxMHFSVYvgGmR5cZLTDdCv87zKubZZyHCZkEwwCz92DUKf82p9",
  "key31": "5X3opHN4ofxeeHQjJozXuZknPfkDAAHH6QQCDGMDU2FGxmzjAe9DveS62Khre7dTmaFnY31Esky7uW4m9cFPfBoV",
  "key32": "4XVLFj1Wt6Bf3b7aNU8z3rrVNf6LQBWoWpYgqoWzXUFAHhsUGsgJui1Pos2vAhLKErH8wjkMpaF5CTxunub1wT9k",
  "key33": "4ZbryAhB349jYvfeqf4P1Dz8JApVo4zWDB4sgny2KC8Q8DPMkt89b2k9B9216rPH2pS252qzL3AudEwQcQHYpoLA",
  "key34": "5qZwYHCtymFgiukoSSrbv8pGpjJzidzRQM9UGo2d5JPHww9RwmduTmNYFXMkcTwhHSqVESpt1112tBJkcvxiRrX7",
  "key35": "3SrtQ9DohjXTKszyUSgoaaGNQ57ngdXS9fXeYpb76a6hU1grRtcvkJXiGcTmG38dcd4D1DN5xLtyguhuqwVSw5GB",
  "key36": "3sRcVjNjyDAWoyjx3ZBZEuYf1CBQwsk9normxoGy6PAQWMTHXhfoHkMyHqiNcygygyipde8z3kRd635VdLByz9jC",
  "key37": "2Xn58BJUby6aTHw7vhcjxFcbiWmCPf25BVTxRrVxieKEoNwUBBWrELBwi9YoHTEh1UPZNkPPmZgEHugjdEeZd3oV",
  "key38": "62Hj32D4JpGKwUEiUbHZShxXqe756ZJMbJ5xbQSmWVkwT2SMEfnmyFtxZwKxMsKe845kws5yfDm1u89d3tTTYqvP",
  "key39": "4n27X6qzvhJwGmGEeNpWZK1sD7T6VqxnWumJcqDsmEWe6yULRwxeFGjMcFS7AvMMxEFEqszFJhPmnx8hw6Zz7ee2",
  "key40": "2s295r4rh7vFhrPV3BKD6vk4rz6tPpLNqQLG4yNMc98teGEPv8vX7qtVhje2izk5NpQsqQNgsHwFsKoAMG56tSge",
  "key41": "5H8J4uCjwESAHWy3yVNXEwnFdpukiU9KLZiLrgVWc7Pm4eLwscHshchxq8kszRqHAmzpC8TYxNgyVNfey8U3N4ZF",
  "key42": "47pJvndJJgwdTzNDNDuc29ahQNhazERUxYp8drfwZsdvgMBCCzJiwFh2D73TUQVMBFDcdXAqUG5AuhJKTzoLJcoT",
  "key43": "5LQoxzbJUvATJBCQw7cYnw5hZHMc15ZbrUMBbLWCdos2UghNEHQ28vdvCeqxPMJfpw3uRKGszzWQxBnpvTxT3jPv",
  "key44": "5V5KqFxBJpQDX71iD7PRoAQUFk72YxosnFC2SmxesEL4uWQHeT59D5ZtnDa4C4ZTzuk5oU8wFW6AyVeS1EadGHK2",
  "key45": "4EFLtSMeZPmyEzbyhbvvD9HNFF3EdfiW9UW4uciaq2zJU5ac6E2NG6R3VwDDcsxgMdPfA6eLqgfpJYEvyPkTG2BC",
  "key46": "2CkZHA2k24nusejAMMmbNBuPxYZsmy2rmCmBmNGxvHZovjR1krVCEnMvBEWiL5qL9VC65BirBPR8Y89jmrBzR7pY"
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
