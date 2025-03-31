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
    "4WbNyVEGHUmjmYS3DjRWHGdx7ij6H3BwkbQKUtYy8X8e8zAPmrujaFZTx5HBKgBAHZ6MZqBXX9QmTsa8pzF2x6YS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bwyC3pm4ayQpVG72non8yyDDzcnJJTggAYCR3PrY3cZdQCt1sETZV3hqYydJivdT27UHqgvSsCqb1BKqWwn5Td4",
  "key1": "2if1eGzeJzMmX6qaWcqNXuvL8CBgTDWJ68K4n1sesFQTyHt5XKaL8BWf7oGNhaimaNXM6wS2pQpK6hMCpG75SPa5",
  "key2": "4tK7faUmKEkKKmhDkK9akfbQxGoUPhfa1uswmDaf4HChoV3AjpG4zPgwcfyhnXaejJznh56vw6oQBGUrskndRMdZ",
  "key3": "49WLaZtLCQetJyq1BV7Fvn7MtK9Y4BDdJDS74jhmYB8Lnn57oe633Nk7k37fYEFPTcJQYhWxgkCLTsjczatSYSpe",
  "key4": "3MJk5AbWeEdxWNw7rYuMpGkYGcKuHqiMewnK5EVPZ9ePt9md6QWSqSUozuvb46e2Q4ujbbjkpmevPigyNbRgssPu",
  "key5": "4ULU2ojvQq8yyoJ2LAuYLwZPRpBMVRHG8ziqRAa82NY3iDRkDaSSQyLRUs52oR7nV2XGjteqemCPvhiUQ6XAjXQd",
  "key6": "X6Noj3iZ9PZ68Q9npL4KFEorysmfoASwbWg5CYepzqpeSrVFasFYNRFcbAFGpxNDRjfDBjhAa3A1FSt8VeYWEoF",
  "key7": "4tG2iTHL37tjvthbJnL5JJAm4VwrUu3ZgCGbQLFQ7XTvdG68AMHCzkgPzKShE6eAF6RNx6A7atTJMKQjCetckuQB",
  "key8": "316xzMz74Pbnt4f34fe4XRTJ7hgZJPY8bB4iDCuVKB8tJRyXXRCL5FgSy6sgArdveE6ig8X1GewhERvcctxFJ3Aj",
  "key9": "5Kv2Z3iQ9mLVnAqx6s5bkpR7zik2e5uU822XuJcd6YTL5jjnvBNnfS6BTS2gVGPutPznnM4szhU8kVrz3gteVRAy",
  "key10": "2ZBNURh5uhL2CrUkorwwt1g3onAmPyKXQ4kRC6nJ83SyjeiZgyZBqH7sLoKHKu3pn4Uqrh1gjhQ4FzYPYVhwJzPk",
  "key11": "3MSZp8riuikGBef8XVTw9tyqvaR4wQXhxGfVwwTDa1KDDSKJ7cco9b4m3nJLU6f9ADSnaQcE3KeFvmgBwXeLnqoW",
  "key12": "5Gux84zJEkQ393DBQxUFZpqATbqDnYD8REmCJQoDAqY7WuonKTjLUBQgKRo4dfpHhfiZzSaTg6EEopTShJer8VW1",
  "key13": "uMMcAhR9qnJ3HwdVBT6KZhgdFRem292LJ1h9tvUmLqFTrBFD4y5U59c6is1XXwzatHE7FC4Sn4BxJAvUGDb4dMc",
  "key14": "2JJzCn4mqheU5HPUXtHfsnGtQ6mHf2X9ZvVm3PHJWhw9yEu7xnkzsK2v2YPjnHx6rcbbdFfjgBWVzjk6PovWFvY",
  "key15": "3NktdfrF3GmfxjmzhEGb48hQDpxjkCtoUQfpViQgJySY27fvwVjR83BVybJBBLRU1ZKkLiQDSqssNmLoxoo62T7U",
  "key16": "2g76Mx4YzMtXgpTqQujqhPejV519QAzMWmcQrUFBEQP51sPsfz7bBk3vsq7Xoj5NjDSJDUUttgprp63FggKRb7hh",
  "key17": "5sY8HSfHQ4VAFCXVdLn57a5LBBtkrwSDzGeV6Bv25GCMQABDPb9DymbP34o91UDbPHWoTp6VCQwW5z1mDSPEpSFp",
  "key18": "4kEFf9nT7ZHyPkUFkpEtAATgFJqQoWuQ5pLACA1cZurS8t5zcoKjw2oCTLoSz4QqiGhyRG9hnsZkHkjX6E9w28yX",
  "key19": "3szKHruL89WzMPn5rmvPFrZaN6B2eRYV92SadKVmi4ccsGAUc2zy3zHZiACdMfAC9s6FycbK2qVPdcWwqVG1AzrR",
  "key20": "5i7W4Bnah7reEcnshST7WXnxJgTLiotLHqga69431QMz6vAj4mUeK9S5Tyemdu3M1V93ZEuFkk1CtXesfYuyvdpd",
  "key21": "38apXVn2TWFUTgCzSmdPPMT9wwh5YhR3hUPZ7KuJjZaqXgCLRYP4tZzVunZaYLnuWRvEpbMakKRyhwntPh6yYyVk",
  "key22": "x4Npp5tcYU1kuwCow5wZCyNJY1VRUfy2HfC26xFCPDS49BvABjUr4uYKzLHMu2uGtjKkW2evogEdVFKta2c77Fv",
  "key23": "5ZydMiagno7Ef1G5zUTu9pRoP95fSzBPGhZw3tQkkQjYQgodSK8hXuvPSYyXc1iXjcMP6PH6it6RyAdeKYeLUt1t",
  "key24": "3zBDmX6sha36YTyUvkoxvxJWhK2jKb63tUj1Xveqn9ppChNSUejKREQSjzcignsmX3KDxUuSCJkD33Z5PvyQvZgN",
  "key25": "2J3HSL8U4wq3VsvSd3e45UEijZyvNoyH2UFqvFMTbPJ4RSj3xpAnurY519jEi4Zc68R8DAps7amrgQEmgfv1qxzo",
  "key26": "5Z4vA2nWk4pAQqspAu3JVBUTcTRrjm12ndN3GXoomzVtNPGYtQsNU8P2FBPHGGhdnmtY5hgrHDyfor35mVJnBdk1",
  "key27": "4QJdofPFra8jEkNkAgnnyKYDvXXFJqoBdPhSDDUdrwVSWhaKU22BCqQmnBMNGqyf6vSoF1wt6Bs8gNwvcNrZsniF",
  "key28": "2toqTFe8oSsrgvE3CTDcRaj6xmsLxt5jq5FfvpTuQnGhCnypqgWxCNwe4Vh5pqHtfqhnVPm8N2yVEN9V2UF9jVF4",
  "key29": "2CpgAyAf4Mm8e29WhSJt6swLJiSNSLRiYZJnF55MRvuYLXbjdvzz9tHPDGS5BC9usM6hhMHaUeGB6ErowWbyNFLF",
  "key30": "5Gm2y9zDQk2s6yJp3XWUjfT3aAWncFA5JKkYpSzEr2BY7nRNHXfRHt3twbxmfgecRxYtVvaKrcu1Fhei91WabVY9",
  "key31": "3RZnRGm1ACk26cPzvhwfYgm1HgQeU6aqZooP7wceRcj7gebbhakN1iW7u1HybicCw34ZEc1B3Dbb7XJYDadhgsQd",
  "key32": "q9X8S8iLxU1YhgrLNXMP8hdX9fuBMZyy2Bjetz8eGvEdMp5GRS8h3sxSaihsydYkvbsFrmEk6Yu8h5Mwf9YEj1a",
  "key33": "TyArw92ubK66sMXvapuh9Rbkz3MYHrqh1QdamrMqkyUR4LFjws5VuyP2WNWvSrmXhhx274EsKNeJgArcHMUFCaz",
  "key34": "C4WDkdQNeGdRznmjd35vvcjaQmGxQfvKokp8J7BtS7WYhrC3ExhRXH7sbXjdsCHzD4WyjbMtwzuFmpqB6yHJEMk",
  "key35": "Bq4CNcbkgyBgWXADvwMCzBw9w3N3P9SEAm9vGymkXepSwWWv6z6f8dsuvQH6j28KAKjJ8r88a9Fk8SWeqVt8koo",
  "key36": "zdoTBnwJ9stpUxsV7ZVoi9xrPSo188MjpRo4tay4WYhBw28jYon3zAnZDB85PPCvUWCTBVZj9SxJ4YYKf1jR9Jh",
  "key37": "4ZRoF6RZ2K5Le1ZVGyLnCbAqmA2Z9fYKDR1T1wDFVM2no69cr3psPaEk6wXayKoCFvkxBy6ubzbMdf7RNWu1WGyt",
  "key38": "5cHZVtWnenLKE2YVTaUVhQttEnaaTB8VQXQ59iN5RWZvGJ1gc4mS4Fgptsuj5TU18GjVrc4a65fkX2SZrBY4Lzy1",
  "key39": "5KHgMxumw5fXj83XibfHJVox5Lqak7T4z6XfgjMBXsKJ9vkDrYx6h9VzBST3ZLwcrP8qSDbMmMhgpdoF2uF1FpmN",
  "key40": "2QjrycFt6r5EbPis6VNgcAYCMAchE4dXVuKAS7QrhSc4yTmRpz6XpvnXE6dUiAP8eg6zcF7PVLmKAYd3gCbVBYsL",
  "key41": "4XtzYx5muFSQ34hz1SWSFxyzDUJdf7Ny66QtweruDMb4KJnc2uyQe99ZBARsJmRwqYoJhsyFaBs8gwgjLSw6oen",
  "key42": "2nJta9kJ1G4rTnhwbL26mLUeVCyYpNAUa3U9o8sNxG2jX7F9PfChDKKNBTTbjRoDBYKuWZCopcMu7siQNqnDLJFw",
  "key43": "5Q83GXsw7gsiprwMUV2wGwm6c4LecXNCDDgcg6QcF5GeXCr4GJgE8NQsYvWa5CRvo7C8rbmuyDnjL73gLAmusnBP",
  "key44": "2m7QL221KzJY7iMfkxF9M6Xmih1B24s2oLJeXfU9Q9G9hrq7ikZZ7Fx3pCETn9knAxxr1oevCzvBWSsBMkaeuEEU",
  "key45": "2uiJHtBWDQRykPDbLkCHRUwrLCMapPf3reHeFjrNAFJaVAx23gL3bf14xNVa8VqWTNRbjMaVemvWSrJB3ERdyKSi",
  "key46": "2tP1dsYfrMkGtdeqXjHqWyXYvT3DYLdL3Tn4CAdcTz28Jok4THhxjvzAAgunrT9ZWSVeTxioqMi2uyExgo7iCQfC",
  "key47": "2J8TjBTttmhhX1CP3YybSLp6uiYEanBcdEy3wHd3HTvH9JjwYnuEYa8YdWgqJsyZPPh5XGbWp2nzTkJ1zqs9rPB6"
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
