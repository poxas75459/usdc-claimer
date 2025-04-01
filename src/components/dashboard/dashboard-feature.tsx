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
    "2EWhJFbUyJwTPMuvJSp8hFrBncqGpjXfT4LuY7SZ1pfe64NderYe3aLCYmUV6TB2vSrFRBdwTiXJwpMKYde1zsBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AMejKnGVJ6F4tyHsHAqmZ5Sph32R9qs9DYgTMFnp17urbRqHndx948mVASFzeaDyE1GmQanEvehYVbByP4PYVo2",
  "key1": "2VGqoS7aY1UwycH47nBtX9WmCowTKRZ1FzGQ3Zyr9V7d574bmMzLozhsuKvzpNVZGYmBeEMJ9ZiLtrp3GMDpv3nQ",
  "key2": "5W2AdGrQJFHkorFAiou2bpx5G9cJGPBM1ZwYkuVqGESYyeuTeAdk2iu386vN9uHAZYgg6NiAe5PyBvHJ59DUB5c8",
  "key3": "pTSDFR443YZt5Guu9ZBWKLTZEb78ikC1kB6wvoGAFxc24Rab68gy8CPjsuFN5rxYkTsiBUfjG5jQ7u99SnozRNe",
  "key4": "UpwNgn8rZrByLL489a3FAxNieMscQ3w6vqD5hxfEbZJZ1uAf9HWQFfBE2uArTT4Cfd4Htanf53GhUuA8PPJVBDc",
  "key5": "rxp7Tb5hUm5LWS3yAxkhsJzidbXRk81kkgioEqYWie21vS6RXivwbiYGkx59Pyu28DqTfXyzPgfm6GF4NsEBzXY",
  "key6": "399SWLqU4pmwPV66JEudkXtFmkGsBsfCjhrfvmJVNP6cUag43YFjFYg8Fzc7GbttkgDWV8MGWv5S8RD6mmgfyKSZ",
  "key7": "23YVx12ci23drNo7i84SF5r28ba2cEshgt7a77RNHecKiEohAiBMoTBGXxUzc9q1Ex8VqwUjAWbyHGKCQfpRxiHe",
  "key8": "293PvGqkHxWRATLdPvuNhS3FrCYSSbM3WLyAbk5KwEWbH41fyjn3cdxGkP4mR7VybB383TVyRTVKYyNKVWR2jH5B",
  "key9": "3vciEr6r3weQgzdAD4cVkTiXHiRYqpKMJyykshKhKTx5BiSDYpPi9axobMKH8fSMz9wBrcqYC4kj4bZQMENAqLDk",
  "key10": "2cdGsUPMyFjLoCEHHE5L86XE73amS1nrdTeUQFx3nXeG4XbxpZvZ4FQ1kpxWpCn4NRYMGbTfPvxnedSDurTgxTKC",
  "key11": "4Muh3uXqAZh4r7dtRvvk9r7eApN5Rba7gAyYsd6tbmk8sYVBVd45QC3pBjbfRLQsxgpWA5nwDjjiBHegCTrhPKwn",
  "key12": "s3YSNmaBBEb7Db5HDN5TJtXZHXq9K8PYM4wjZou4QmP4711MdC79bstKYdnyEewBQmogSmiHfAJsxmt46axn7BQ",
  "key13": "3u9GM8359ubrHEsfqdcY4eKNuCMtje3ZKYWouFjEY9i8rqdSNSWC5omsL8jTZ7e9Yu6KF9ayFsvBggm97sQzNuYV",
  "key14": "2p2pn2xvCYrJNzUtoQgiHjPA9TGDikNebqKUj4bQrAr7nQEY9ZZfUedqVjiwewC74ka9WemorBpTRYr2Tdii7kPm",
  "key15": "2U5aexxQH4GnPJAFREj4frkmwBtH1TVMTVzRKBXc35FdUEqtJpWDXh5LDScwEnquzBimhEaGvfe4bS2uFYdnNL5m",
  "key16": "3vskk527YG5yGZM3zLDUorFiCdywKozKdikNNhesih2hVHAMh3TLbpwXBctyKi1TcRe5wmr7qtGTNcK5suCD3xhJ",
  "key17": "EaBjdxzv3CSqqW3yu51E3BtjQha2cAWAU43VkK8u9xU5X3Y5W56zcWcgJQhUfrP2nTJSC5ZLrsxjRYBoVSEKiBM",
  "key18": "4rjmc1vHzHHTs3C6qduR777aBroh5iZ3kzpcajYZF2qFBoy3uTcfT5FZFTCdLuPA6xoFPmtaRLP6ySPq51X5ffV5",
  "key19": "3CgJPuWrnrA36bcTSsiaSSkWWZoWTBnhu7r7x3NSJg8vsvrU2yhs55XwS4AZDTfjEtJsU3MkqDjsFPr9jEpRzGQ5",
  "key20": "5z4ynDaLZ9GBAZZ9M8h7A86UWcmhGGWfqWY8LRSryhRahz2qJLYKnSXeDanV34yFqMQd2HzoDMd83pofHdYVaWBS",
  "key21": "5XNtw56ZYG87Bcd4CUyeodD8gGJg8oebme4cfaH94fxo6K1QFxesPVphWGdc5rZ5HWzaLwnVcjQUFXgPGTqBb9Gj",
  "key22": "4i3yUbim9f4Djio6Q87j4HjJM3umcJxnih9MCAysPDAwpEKjMXbLkKPJsTo9ZLPsAMDdwAoHbfhYsriaUU5dpPZy",
  "key23": "21FvAT6C4Uf6GmmRY8PnpR8CUxsa7ieYuuWvUbc1cuRpkot4AMbBsG2cgQGJWR4UmVgBj9Z1x8Kd3BJ97YiWTsvB",
  "key24": "gXjfV2G7sWbXkLcXuAjT57SbXPnJiknnEpMoWUGkMiqTHr3H9aPYWwerKBjBu33N1vVdrB7nGqwkpiuqZMbsVHP",
  "key25": "vBD2i8AYFcJGxjaEQicfhBMWTxkV5MiWuJfEzEkDzHbrsWLYhWodrDhtAHERAEgz5bWyC19LbJ3kdREU1wtoddb",
  "key26": "2cYdcSyJBLsnDKAE1aQ6TWrRKSr65xffRgryxtxetN4Gm3FR2hGfiDy9JD5rJ3Xjhd1hnpzw7PWsLEAV43hzQVT",
  "key27": "3YvE8S3r9wEoxq4YSksCszeKLeJ6FEXAaphcvBRsetzyMTWfJ8YS3EnG68VoFNhpviVRewVw4y6HfC6bSjnyJtFu",
  "key28": "npuLEWj1aPNG4ExWLtKGw6pVy9mVnkZQ56WGWfPLTqYRA7WfM41kK1tZBm4ZvbdKfq4Sxt2NXnVMnWYid3FiS5y",
  "key29": "35ow34cAEKFnk3gkUs5TUjSFiobu1yQ7jMcEMGJ8seWD52bj4tnLJ7d5ncsSUs3juaBp2KsU2qMTEAEuKSWZum4i",
  "key30": "5T2hKpeXNHGTbS8e3q1BgN1ssa4uxEdUvNhWiK6X7tqB6Zfozk3Nxzg91tpdHJ3dyT9JSREArQEVUJTB1grWU3rz",
  "key31": "53aTjsQjDsxYyUcwJp1AM3hwffCo16Bb5wp5jG3H2srVNoLxVDSmcfVLXTbdr5o6y9uhEboFQXzRVqSyR4XnuN1X",
  "key32": "56JqwKz3cv6VyZRmRdMWwkdZC74kJ2Q8GPKMkeUcfW5TMknD4mtk5RPyQR5GYAmusYd5Suchsnk4DYc7hWRBenQB",
  "key33": "2z6tv24dNrGJ6oMewUYRusSFZb3HgoYrXKYi4f4q8daLqrHGMVCivRXBHwAa65SzSHs8NMi25MVggMipeActwQFb",
  "key34": "4GzdD3Q2tJ3xKiCRbbediMvt6mq6C5DaTpXJEkiQsy8ANh65oyXXVQWCjgmQSBYwS7z6P6Bj3XZNvbqa6yLHYWj2",
  "key35": "2fMHe99HrKbjwxPVfgh2rThpYJUUd7kur7BKrZKLfj99zzn9nzAwVX5qWbWLmMVmaFDFYCkWSVjDuoQUBY3UWE2A",
  "key36": "2n1bLBmVprpSCCqLmMR7gpsr1ajEvQvELqQsv2fbQK5erLG562SiuWTJYrHM6Vneg85RQcZrnhwKkVhM4y4nCCNz",
  "key37": "E4hWuxSBfGop6Q2qcsc8tkLcynjvuEdB5SsfycBdxCA6wZkH3VsAMyPMYYHMaY86V4UpRyG2vVR5e4kHNVeSGhc",
  "key38": "F9fiNbXmqpfKFowCxcnL1jkvo6meMpBq69FjacKCXxNn6zhPL97tzrR2gGnzUskxcsm4X1antxUXxibcvXFdzHS",
  "key39": "5yeYSgiarZGre9C1dRt6dL9Aacq4qTb3BDCuyBkf45gjYCeN1nhURXpS7Aox2ZnNwc5VYENWG3PYBE2jS9WgZ45P",
  "key40": "5staKFfH8Dqz7iyK97Zv3caJSERX6pRfG4N9cXFvNytjKobVZdpgcC7haGnWs9RaDUvZnGoYKxmdoyH9uKqpba9r",
  "key41": "zkXvuF1hx4mwae2NgqT6VfFqG3s3XVSLk17V2TnBzjMR7cnntUjCwR319u24YvENns3sVVwfEkdZ3t4P2EukG7C",
  "key42": "2JNEzVoM4XoHHHKJr7fkq2dHKheBKFHjW3vcH7dcQ4VSJVDH2wys1cZ3t9vr48f1nPWR7fWCbK894jT1VCzQP8xG",
  "key43": "4sX9kf9oeeyWWXU8YhNtrQEtR16rvnB7KzvX54sPvDwnmVdZ658n5E5Yey3LPqCnK8W8GT2RDdNJGEdKyunTA6sE",
  "key44": "4iXpgbtmhwg3w7dcgwdo4PnpUMqqA9Eh79pR9n6xxo5HwyxLcGuqjKgfSXqfyZxJEpjhJqdZwEfk5pfssDYf2rDd",
  "key45": "29UpG9sPNhCncHC1A3tJGsZ5C8HA294m1aFcrA5o1UkR5UGSub2uxrBoZMnmsZWwA15FC2edVaEz9qA1sSiLQEkq",
  "key46": "7kqsHS46HVXPGmQ8WuvP7ARWshyFc5PTRr6MdYPcREPwxmK3STF2H8Lj2WbQi554bgABK5JizV1SWmA9DMZ9mhk",
  "key47": "4wc4xjQmQqsAUnbxqQiH7CAoBBwNVmArgfCU14QTarQxaafSxPkFRGyeSz1nZLWCCFbz3oXGwVXj3yr3ww7Wv8rM",
  "key48": "3j4iDw3WwTEX9pYTSi8LxsqsE8nNwwbK9wnPecaVZ7oje9nsaUJrNC8b5E1bxLUZQ3NtbyFJANi1HLpBuhbAU9bS"
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
