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
    "2tPLHjmv93Gz39MWdkdook2Qtw349B45wZ1Wi1BCbX6Y8Gg6csftGv3YUCaVdkq2phwxwUCbWdDrhQdixaXfCfW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bGFt9L3jae1nPeDmnahvgU4tc7RhhWwVFy7RREsjAjL2wnit6Qc5oBzv5Sh6BEvJWhCFtWddsjcVmzCnKs4os8z",
  "key1": "5ZbJdyQX7ZBXcWEQPStjPvHYVQv7WCypmfKdXwFukfyCQ8WLF2BUNsk4MqeBUvCsxj8xyLA1gVZkb5Nh8n5fowvu",
  "key2": "3KGJpKRSPB5PS6c5kzXWLxQNLSnyzGJEhFbmijAb6ejDxKgdYiMgAeBS6GQ5CDYsG1dAaHcrXKMpCVUZGYc9MEUn",
  "key3": "3w98xkD9shrXMJKBsYEKUDu3BWqe4tQk9u15oj7D7nmucYdH42tUKAym8qUk4dJP3r5apPkREKiebvkuDgFFaW1W",
  "key4": "5ZtD7QqGgLcLsbFttQPzGk195biJtudRbGc5c5Bw6XG2LvEKS5pdVCjtSzb4NiCHQ2EHQeGrYzAgkR32necR7Hjn",
  "key5": "3LgtRTcRGF893xRhaEQNShBJK2z73uqT9cFkkEJ8mUdZMXqXDJb7L6omaz57j9vLyt7cEUVpkWsc3QVvzPRyQNUm",
  "key6": "NspxrDsmYC54kMPEneCFeG6gbL4PtLvPtT7uWC4zShAH5wWWEJJvwsmjZbdkusQkTQLMzFHGMJk9cTH5T5WAef8",
  "key7": "4tfPadkzQ2pScV54Dp5XGvgdPVP9fMRAfYaXc6A15nkM5Uzp7isEtkybzAvFHaMQNLJBZoe9S2iMt1hwES2doXpm",
  "key8": "2EzFaABSAsp72WzTmwckRi1Fo2Bwa78E73LwYhuLvDMxrrzigh97mJKQo4vnQgg1n4VcLXYbbmRcr1g9MteoNtNK",
  "key9": "2qK6VeoNXjRRceBismwDapL9sbVzwTYgThVq3qBtP72zpa6w92snxUE8XyPyE6Wx7N4Y2vUUZD2J3DomhtWKB39b",
  "key10": "4D1Q4z35V8fT9Tcm7GqYzMQV2qqkETcqeYa5Cihr7MT9JiztfZCPeK4vXUgE2zfUvu4x7RAcFdrH8fEZsdhizRcu",
  "key11": "z3qe1ZaFHQoJbFWmnwsqSBxyZGWCTabe93Ho3M3fiTmYXG7eKDjAJubpedo9E62MKkRfmjqjjccPsKHKzhG8rLU",
  "key12": "2RbdSAJ7s7fpk1ZpJcGyLJ1HPta7VQL1AT7RAy3sYPWKa1j1Y7LTKo2T3RJe7VX3riwgkCTHsuBuEYHUGbxjvacQ",
  "key13": "GD799FTAmXAm1mfj3SKxMKXEJPJKn3V9avZTcHk4d9Md1ZQ51GXCgyLAt7CaGyo8SgvVdJpr2bf4yytCDwotY9t",
  "key14": "4j3xksQJJmePVgBxzBBFs8ski1VKWEXrzf7DRtXVvsSaosQXu5ofP47KQ4TbtcbNCDMr1k7dr7T87Nozy4NtkrNF",
  "key15": "326gE5toMzSBjUy1weAmdDeiLjY49MZqxVDSvoeGWoyC8BqL2frBGPP7KJWT7M8MYu3Houmyvq287BgdrmcZmDXt",
  "key16": "4eNvwhYt4crwNkKHNqm28phXR8Ls3tnqN9HQEJzzb95Bbso4q42UxZSoAtR9RbZ3MRDcvsqND7FbqCQdQxRKeujS",
  "key17": "48oWYe36p1GbByZcFhGPuikH2d6LUnQb4oewQw1oaCykqxE9PuhpgDN5DCiBz4XDjF2Fvui12wtRFkwxS66GkiV9",
  "key18": "5wMuYYLKUYtmgv3Wc5KSEXaasd63Xjk3vL5f9RQz3JTJR3V1arwsX8jpoJEgeKigMH5i4jqeWFwfpDiMg7mvuQrp",
  "key19": "LfeUf438zrToErADTUBjNhRMUqmAQ2sJhakcEjz4sN1r2e2spPRZNAo4KPCzPUbvPUCSEBB6jVpzuJNcgp8Q6oM",
  "key20": "5LzNeiUAfr6ffKtWqbLHG1ANPbHFxWm9T3CyD56f7dDyb3opsGE4D9bqqWR54ZgSYhZdSBpv8serr7SJCFGQEemq",
  "key21": "4kFVV9JDVKk1unAmvcjTCqndU8VpHa56qDjj1UdBffQFfQ4gWqU7rFLt7R7Mr49LX9yhoNo2S5LKk1ARym5hzWBM",
  "key22": "4JbtQbTNoo61vbtTXB2hZYZ9ihsqkmGQPKoCxCb1qQb4FoVMorvT3yzzN6wWCDeb33Ugi2Lr4RsMg6Pbu2F5Pp7i",
  "key23": "5MkVgXCkG9w5Ex3j5NPGy8pzdhFTpMSwJWkcMxVKcSwnYxTZ9rwpySyRD4nwZTG85CqSFTX6BamSjEiQGaAgg2mg",
  "key24": "2K7YYDAD5UA8HUFDBaJ5HWLWfUN7F9qD33oGDv7LsMZf4GGG1FSLxDwtPDBep3gRg9GsHUM243YNjDbLijJJ6436",
  "key25": "zahUuNeXFnMsh3SdnhWtMD1TFqnGDuTxDocbMzGkXMxZE8vuzDt6Y8pyUPUsuSGWmBrkBM1r9t175EJg3EvGtyu",
  "key26": "2yYz6KVgBKBDQKmdQb19ZTSYUnjaHNyfFEkkX56iJ9wdwxHZSAGoH6SRQJjMZz9Bu2MaTjBX9KuMzKLCq2rq7CJw",
  "key27": "53ZyZqPU4A5F2DXQUaXa93CVNPcJfKy8FYyDQgmy6Cegm9q961ttVyTDDT6oN5hZs6DcDdWXs43wQZxJaT5dVUvF",
  "key28": "2QfkB4dShX1mNr5zGe1GpW8BYNUrjTWBXc4TnyekTTnX1keTLs7dLNFdvz9WrvMQbPCsUC3B4kSe9DoQmdEGTgpk",
  "key29": "wBSVSvGReJSPyLcwZPFfbxq1AT99veoXTVUDvFiY51ZFVPLCHyXqfVBX4tkM6X5coFtvLxg9Y2FBjnd58HDej2m",
  "key30": "31KuhdZcXfrjbtWE4JeFTtAb2U3V24Cy6z7obqt2UqxsSkhyawYe9kHiKWWKpvHsHrxb2b1cR2vRcgvM8CeoBE73",
  "key31": "2kMfUUMB2zJVyJsSBo58G7w2jghdMkvbEWmvwLbjjDjyPvKNFUhmAVCsHmvPpAT9xxcjVYtH64Dp1xnbMDWFerMN",
  "key32": "4cRNLHFNQG12xSjYxQWGW1Hb3FTzmtdP3LhJnnPmGbcQx2qVMVvwPwa1nbXfYLcaZ1zz4HjdbgyywyqgqUrdDytX",
  "key33": "2AyDyee5jy8fKVrt6zRKJwJ4EtoEDDJE3h29t6dr9JgpUr1ZwctHxeetSFqMyu2oUT4LY9sDoCcBNDhuDn7KDAeh",
  "key34": "2oSb3i6LiQQ4MTiEerNT7U4jvAdRLVdKmPPPzHjzVQ9uFGZR1nhLGxVLkfh9Wy3NZDVZtJduCjrCx9AuhsnsEr58",
  "key35": "3RHrbzh72cht93QTP9Q2Bf6WTqm39tMQ9tfXRcWYtFD7hmU2Ach6R7nDiTNtAKYrDcNVvLbgQX1r4rDVMgqXLf8j",
  "key36": "McUr8mFhRKjvKL4TjiihkzGHrpBoUxU2BTPhYYcJuHMEEcuVZ3DBsnkoDbfam8W5bwLtitKCWeT3JD5zDRrsrd9",
  "key37": "5kjpyndte4n21B2vopPdi5T6ZoqyF8FPRXLuARpUERqwJJFMyvHZkwRkJe5TWBJe5HwDYy7UjBPrhSYEDo9Q7AK4",
  "key38": "QEguEoZU3fx7WyBkfNqstFpTcwpuNuqvsz3KZWrPXnhkXcHcoRiX39Q9wNVYQDiF8mkxc2qMSCYz6FiVSmUEWT2",
  "key39": "3XNHoZsBN15MMKcuk2PUrpNmt2BKhUS7T4o2b3KhVNYjwSCPCkd2PeShM9Sy6B6rHjp8kn7W25pikYNtMn1UZ3E6",
  "key40": "4snHDKDiD2QK1ZxtQkFwks42aJaArmvmhu6Pjy2VdD4zRmS4wsuC6STGqZD5XjmXsQiZQJzFJDCotqfCj38qL9BV",
  "key41": "4vVHbEATDdcRzH3YF6XZb5yZpahFMyNf1KQzP877KFZA46WYSp86zV5YZZTvxaGZDJC2R4ofLecM68mfWqEzez3D",
  "key42": "2FCfUD6gXWsgnDMqXqdzUHGFU2aaFntF9pWBYMh1QsQmyQ9boKhHX9hvoD2dUzy7nMyJy7owEukirAS9ukHVmqSW",
  "key43": "ADGccKZ6ms3YEKzfei8aAJMcLJ4Bosehtjj8fWXCcWHXJ4U1TYKHo3VTyu9LNj7PGe8yjtRwiHbvnLKm6GXn76G",
  "key44": "4bjaCJS1myWtYUy1xMxQ5wjt9zi2phLgNC3MUpy9dvDSKzocBRUd7hAi8Q4d1QgXvFFJnZbyt9b1MqhJsvnwnEHZ",
  "key45": "2QB8LhdSbdiDkdVzW4FK8mstDqKUMM61PNc7p6tp1PrUyuQjSWDsoAUvyRmsbSCKQPdx9nBJaMvL41w32mhs2ZrW",
  "key46": "3xXi9Y7MNGjUwBmdcQFMt3KcSpM42cjFHXU2ao64ikEqfQDG2Y8nzsHGnxjvDQv8uLfK5A5eRqE2no3ojEfV4pqv",
  "key47": "29ctQYxZKwXxcBLNV2HDGRxfNwQGRE5soUvK5Z9eZZuWzxMSjb1Xvm1LE76C44tkkNzv1Kh7uUnfZYjPAYojGnqU"
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
