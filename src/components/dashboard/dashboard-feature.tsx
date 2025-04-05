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
    "4MVZwXkzoNZnCVtckeHxanpb2Ds8TfMo5kb4u2bKNGqT6H1QHpcPxczJcKNN5DUFhjiXFsNP9haySoM977dpNRaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pRVnNjg6SHVmVp2ygh7fdb6P2UomFvRS2GcNwQDGsXYzvoazapJAMQuCE5nhAsenhKMyrdZQXZCrZJ7ej6zLvjb",
  "key1": "5wwHwgyz4rs8N7AvNUSqkDULUK1J55brUX396HyFVY5aEGKAMgatHkmmDBoUnuS2Lf2QLL2NRY7hnJjRNvX9jCbG",
  "key2": "2HE919pM4dGFw3G4v7USGUArjVKsZHYqhQBfGUbHQx6w6VcidxWE5d5fDLYiX9vVr1U7aiAr4oCbPDcrpXfLUktf",
  "key3": "21ibNYfWk6YLBKUXa5pUjJPRyBB5X2Np7S5pNBHfBnsYXKgCZMTYGXV2RKH1EjnrewFei81QoeVdpXkkCxRJy2Fm",
  "key4": "49kBX4DTXmQeN8FAHZiMcoWCfQg1w9i79so5BmvsEmfGECTKdU1txsTLpYZsGzkxxNpQcx2UPb2NCAnJw5F1wMBu",
  "key5": "LjFfa9VRubQF7upViwGdXPnHtWiacLyVekWtM89Wp549zznmZC439zQuNwi7LYMLTsKLWino4mDkocoqSbMcVJJ",
  "key6": "37SLT2hyVehoVbvDrY7NC28J8H2NtacdFoYqUQJH7p5pKmPvA9DD2HxmF3YZjhkruwmWTt6ZNz2VcWPoULUYPmH2",
  "key7": "2fh5Euhw4GncuHqk41sM7NmBTYdSfDZarJ2QiLbZJsGQZahyQMoAKgVreRRtW5zQQ8N5EGGio2wvJnFMXyRHdza7",
  "key8": "h6zam5bSQYViC8sz1uPz9DR6RjdM2Nac6RyiVtY2G5AP8NJgX7DbtJvyTP4cicwHWWX6swQiACSTQK9HSubcWUo",
  "key9": "9GaaZZABWbdCUabCpwGMQVrqMtCSr3yt7HYf3F5YjADnbKHTmNbnSnobF2TYtEAgS1VgGgGB7N8jsG1JbEsEzKm",
  "key10": "Qnfzwp9QZeVCZLaQ4JPbzwirjYn11rwEVZKgNjKkfbh1gssbHDqYxVJh2cEXyMDeewf5MR5iKem7cLEnUv6DssV",
  "key11": "2p242pACatFs9SrvTz1WeFCESVXXDeJzHqtBsCFRHZbR5LU9wnifHingadNTptJWCtqBjvA3j3GmpcHWHdfXgxnZ",
  "key12": "64EpSgfUrsr1WDVrrTeu2Kp46GKTJCaQ67WmMv2RxJUH37Ju7Ha5mmvxyJgT6978v7KzHwMgnmKvnCn3KrDXqyt1",
  "key13": "2cWYAAFWnfatP3imEkrsmQTJ1FvcxFEHhsC8BpuuAYXsvKkLnxccqtUU8tyMnxYNFVzsFisaJxyzRmbaayR3PBf6",
  "key14": "28TW6BeydEpzemvbFf9nbraTM1nwbnRHZ7jyfEGoVsKkk6CUbVoJURzEsYzhFSD5ACfdJnnBRNGnENsAzqedg3ds",
  "key15": "5JJVSJHDgaSJRbFycCgGVkhZBw17x8FHX17EfSRdn8kRnrrxkSYh1C2DhNHUg4LeMLLje79URgscVzmtZjdJvSPY",
  "key16": "5XGG6BVojVGLQpKM32BPTP1MPu5Q3KG6P4KiHycPDmBgpi7cYvXfR7J3P24TTWDEgg1PYPNbTRVwf83WsBp6m449",
  "key17": "3VC7kSeGpmtVzMEPeNRikFfyQ6VBf7gA4xpj2bCCUgJsZcHewNQrqgpCrw9Fdnxme5Abkc2uVNYBW2tFgvfmCiZf",
  "key18": "24H4vgSZNMTXdnBALeXakWj5s1J7JVYzfGK7jKUkbzPBvw6TVNawTvKkf4XGqp4rQjGy8tAB1W7PShKsDKrAnhbZ",
  "key19": "3BY5MZWscVNg9sBd5SG7aiqethKDsj1Zuok5VXN1xugDUzp86SZj571Rn4Wyqzv31qMNcejeWD7N6EzpvKiDGBEv",
  "key20": "3dWGdY1VHppoxHx73ESMWVJ41ubEWj4xYpp2Z2xAbj2x38rkJL5UBrKZ5yZi6BbAPBAhtRgJhMdepXuwr2N36Byh",
  "key21": "2h7YKpJhr2NTinpJXhE5k5QaPzEXCc4sAPqCzid54Pr25jqGpMPw6gXmZWmLZiAK7dW7WTq9Ck826LXnfFpM7986",
  "key22": "3VzibZRmTYZgjMZoYXWbHJgrtkaLhUBgeLQJd8rJjzVFGUHBnewjgTTruJo75CjPd5rJzK1VqsJoQxLPMQcjWr4N",
  "key23": "auQtGdp1X37etosKRSrsstUj1CEv5JZoXiKdK9iTyr5EvKFjwspCkP1mhJhpXWAjBXsQgUNcd4QhP8hE1ow8ErZ",
  "key24": "4AbfJKKPNUs1bRd37Pn9AwPV2yKEP7YRZ2AgG7t5CyDHwbhA9Qac6UsYp6jnk3dBAYGuupmwJ5iq1GX9r5Rkey7v",
  "key25": "3Kh9Gi1xxjrbDVDGQP6jNqyKLNTnnWMq6Bkx1v3FcFZnRr4mGnWEC8AaMSMGTP1QZB84WNNMYJnTK9j6QBzU2vis",
  "key26": "2KiMQmDZJoRa9EWACGkJipNG5iKNH9vspEDqgqNPdMdSj6aSTGCcrWY7nzgtvr2KfZ2zDwtzgjcJTjeS8MDZMyUi",
  "key27": "3bLZ7pc9eC8yC1gRUqWBsCuwxUKPGbZ66SbLZfL6PkbD7264UbZoQgzccG7qfEPHuqpABAFVaCB5wiPbbCJfA1gB",
  "key28": "4YJtM6fnQQ7cYLzC1wGuTJETrj6vKYotv1VsNex6avYEVLRwGFN8YJXdvZH5mjHVfPSXRvEyxSDXeCc7ijYHnHbN",
  "key29": "DGpjt8hLMkAsZ1jvidQWPbmk2zURC88S2crVG7LGGQqasuHF1iz9pvr3oZG5Hm15oYptHUT3RT7nxHhUA8QuDKV",
  "key30": "yPvkTaXMVvsxSA1eCHEym7dprPP6J5YeKQXQcAutriGSaa5FDSegX9kwwYRSPL1YSByWnzVrWHj2ojKp6Z37YEv",
  "key31": "36822JGHnbB6kt8E2MhqcUAYfWbf5SGQEtE798bGRLymLVYQXD1Qvbh9bUSCFTaWCwzH62ZQjBb1KniHm6oFdcge",
  "key32": "3UGFsNAMHkUKQ4LxGGY2WbdP3ugvMqEduJoDjgtSdoamWYgctaciBZfLT1Mt1YQqKABHEXS8QqtcRvRGt6L77EaG",
  "key33": "2eRdDrTbd3bcru6PTaFpjxZNKSadTJEYGmgmM2zj2AZNWSBYcBdTG2ZaqT9aToSec2ehq4K6QMT9mdkcG4fBa2cF",
  "key34": "3xjoc4BKqXFRvh8yjQfmh2RmadwKYmBtXYXLznx9ekxvmsLUNsDCbqBMCXhhBd77GEbatC6MUtwfv9aeeuUdYjjF",
  "key35": "2CydK6TBMR7HmJJXaY2wPXZyZzUVC4XbCWm36pfwxojcKFaVr9jTAD626gbXHqMGVHhcw2J2VRJang5ZApYWZq3L",
  "key36": "5ve5tK2aypiDpr5f4rpBoKFXodR8DfhrnLwSctx2V9Q6j8JoLxp4GzGyzgRAWPQ16chZbun4c4D7WdJdEhy7mS6D",
  "key37": "4C7QfzQa1cAKzkadebdrAr6xoRnXZ3XYcvxJ5bCzBKJp8UDXN8VdF2MMRFgEWUUaF8ACGtLxCGfBdtqZuDnsFfqm",
  "key38": "5BTgnZcdkrCBWy5KnFoub6e4wQCyPXwMDcjQwvjzegabJsndfUEPMzJHyoiwc7b1pkWJiMYjT1SXb84rHrM7mvsD",
  "key39": "4Aeg15K6rrwBadpGveabfCiChYjYi1sWVqy3kE6m1G5D2zW6imERqAWEE4mHCBGToe9e3983cNb8617zgVv1zGA2",
  "key40": "cRVZFbrJLdH7fYz4TTMQD2ntuvaxUf3zZmnpVUkdX3ySzsp3zZdi9WA2yrELQV2nXhiVyPvxTa16dQdX2kcwCks",
  "key41": "4SqKBv4noJaYcHuWGEuJLNnm1aNjSeH9FyfTxWrcpXDhi5v8BwVurgYwfq1cGL6pLsEbuHViBoCEyxxbrXstZids",
  "key42": "3DMtFSK5in6pq9oYX9kqdTks6nNwV81F5g29AhPDLJ2PiQcBNtoNBttf5N1hQNAAx6WsuTa7YDHn6LSTx8MEFwN6",
  "key43": "5MA3eXvSaREbfpXhETBSu9zTd3x4Ed3Ej8Ek4eufqLkReM7ax58NtGwW8FgUXk7mjiidZs1bERzpMauA2uj3r4fe",
  "key44": "2jmCVsPhZyRcYKW1VigsKmbpWAbzXaxy5XVv5B3WXdAUTPFs5DA52Yy5VWoe9ahFHcfy1tX7pohEoVUFD24LbJcj",
  "key45": "2MUYpfz8sUy9xKqc9mRid4j2j6CdVetrghHmrxhvij88vf4h4aoS8VguFNaSVWUFCDpdetFsXSpQjNt43TNtBZJo",
  "key46": "256vhSqbfyvm9j1YwZVHnuBmF8AFBYMZfocsT6DNR64GmTb8KTyy6wfDCunz5YPRggCraTwyToUFKYvS1XpLWSCc",
  "key47": "2eEuLvCaLypp2As5Qx4rCoBasT1ZYRUTkj1HPwhYdZWM7s9tBrZb4AS5ccKRphUpaFAh9zkkSNw5RkdMb1fjqPG8",
  "key48": "5EpAks6uu1ySShiwBgq7tXxWaTD9cMkUQnjR9XvExda6C4JZHDnmvcQAx2NH6SjCguSb39GC1q75VAyLPi6mXVBU",
  "key49": "378bNA6MvvJCQ4QxTkEPU3FVNXvGE92NgRJChii4T2vqcqrzY668oa5uXn6bS64GChfAEx1JQvGJgPTQhYMBb3XS"
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
