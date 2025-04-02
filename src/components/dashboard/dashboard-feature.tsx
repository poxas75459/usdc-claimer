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
    "3HxyhCzX1uKR1NbNAX76RxERGRJdYyq9sGZgKnhcvEiynQMHgkou9KwrBzc4w1RARcRVuissjtLF8TfbDAk7zu8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2thkYo3HMMBg8VEEetPDWkvK22g2synidue4B7J1wa9oigSjiGZCf7zwM3BqTB1bCq4eWMeGKwZTcYHSYXSatFxS",
  "key1": "5aWpYoGfAEccBmwKoQC88FfdjNTRwMmDsosNpjpEoYji6V7N5RZuwAjWBM4PMx4L3Te9F1rdAvY5mEuuVdkiN29r",
  "key2": "64FGeCWvWKvs6MteV2vUGL2XQ8KyNdFkhVJvunphVLxxHKN79VqnQja5WdQpVn8QDUchZCi77GseLa8eJ8WHN9C4",
  "key3": "5H6o31pCbvENREpwz9JQKeWM197WeMiea8DMwEuB8GKp1eBsCZpC3Q3JcaehH5keR6yR5xTaubMQ8Nsvkudsi8A6",
  "key4": "4NipMx5oWpDQUqHPcy39kWHNTnvvkNzbnxB4nkgJfgF4bLLx9faZ77iLNu3i6P7oiawaid2gDGTmZBiqDVXhAEZo",
  "key5": "48GbwnESRJmLobPgMCbTCSxcj7CMAEjhiBmRKsarq4omLGwn7RrD77AWguj6Xjd73tVCcX3cVyF5rv1eLsSaHuiZ",
  "key6": "34Tr1wTCiEiSJ3C7GhcvhyyKTWPHUau3tsdV2DQN1FVv6zU3UqUtVKNViKRFuG1QrpC9T2X7fGh1f1qPNkBYoyyq",
  "key7": "3J3mFTWoprVNRJvh4LGqNwTVqxy4eBnPNbJC4bQDbh6s9NXf6jaAt34TG4XVevCXNmCMwAB7L3GYHTxCGV9vg7S9",
  "key8": "qC3CvyMpSqaaf9AC9dndABCnHRotmZetsqCppzGnPJ8dvj6kGBgZUT1aAdqkPd66V3sPSSFu54CxhXsZWvKwCHb",
  "key9": "4wjZjZLz4E4TPp19PY6uGxmQzhKXp63oNrupa8bPksx5G98CDzUH5QinFxFu16qZuEphBWjMEqWy3uhnJicPTPiU",
  "key10": "4ZhjkbsyuLVEq6NWL9CEGCL1MEDXzSArkMqoGcgiF2by9bXNre5JdUxmqQT1NXH9v6gfh92B4j3b9kKxc6g5Fz35",
  "key11": "4ipnYz9ZB3JNcP6tf1WBwp5dAgrioXx9Bmnb7Aea4GscDWsa3rt37sKTmym2yjjX8whZgP7mtY86pnUQ5UPndVi",
  "key12": "2uQK47tkyFBWKxQknEdFWfQQGjBAeXfWC83CveYEet2AokZVquGgfT8AWRBim2tBQygJej1K7XMd71obne2YgK7D",
  "key13": "63rgjR1JkTfdL7DmBR84eiMrx2LrfGNrLiMuBZnZKe5y5zUkACwBS9NJvumBttBYFtvAs9vsZUw32KtmTv4J9o37",
  "key14": "2mdQZzK56sY5LJsPpCVjRp5aYaDXB8jf3xkfNn9gS3Vwbj6CdFVmLDXHnWEwztB1g3J2Bdkm7UQePp4m3Hc1zK65",
  "key15": "wiBLCsgrRdUef3Kp16UyTr7tniHjqLrcyxCSng6GJgHdsP9PQQb6G7V9bcjWd8XopoEtbiS27avTJmkiQfRTPdH",
  "key16": "32H22mwJ6okXq6JLUJeUF6WUc1VUX3Pffsx4ohcZyJEVCnoeu5PQu1V2cdCAuw9FVQVKK8GsrtHbrNhBQ4ZtLaWW",
  "key17": "5Tam5jhFjGwSwvuYWAZWeUxJ5yCjyWDhmJSN3A3jNQRyvXxED3HNxzHaj4JTwuELnQ9qgUX3KneoqRtXPAeYzfds",
  "key18": "4DZnhWftNV7kFAhSSqMUprGj8daqcE5wd4zsZuBDa1UYqZrrAj7VAptZh4EJ1K616ZmJr4JTosksEMrvCXu5zv7v",
  "key19": "wCbF4jbw8zF8F6SebhxhoGwmLPbuuw8hF7Cnh9M3JxezArA6tYfKujKMW4wsaT6hqQ1Rb6gK6taJStqsqCzZo5R",
  "key20": "2iG73qVnawFZQryBSCzZsNqAaaagpSAnhe7umq34EfyMEu2H9THxXC3CJmw59VAp7JY736wUgBxdpYwVXq9eRmHG",
  "key21": "4fk4UYFisgGjeuY3hJ2C4zvfg9Ue4vGaADTkvWP9BPqKCAcjeWTbvRXwtargshv9zsugquokpnyZxzbS2vjPhXiK",
  "key22": "2jCtfHqat1QFhGa7ojcJ6qBWdGHcrhP6Xu1crb8f8kUFoCo1KtPY4J4PgBj3tU6itjVdyxvsEQMEkmrcEXvg8Xbs",
  "key23": "61eTSjNuR8FfRsxRx89Fv2JGS2riRWfTyJkUUmZzxFjkGdRCZvagJe42w43xHyxdzXbPoo6NnMqjrqovEAAw5yVS",
  "key24": "4CydrbD6XuMSKZCMMWYaj6m2xkQScAVjzqfpfDVaxvQJczoWBuBVQedchhX1dT2kRejjjf8cghNV1jZYPmrzq4cj",
  "key25": "2Xo3Ac8khTvwYxTo2rzQFEcGDZjZQUnNEHzCgi6ciUfvfN3bbvC1BVRqHsBEjWbzzQ2vkipJHUJCCbCHRnDKotGX",
  "key26": "41RVoxJfSbRzgcj6MQ64TK2wiTcicQThGHgAhNQpsEviSbjjE1aPkVMJS6beHsavayoe9HUzeZhLHNguQEC7mDqj",
  "key27": "3aqDeetzV3uc9ewxTtcNbzkPGoPw21Y9pmsCcGNQNVNxC5SFgFnphsJCaJQvyyB7rQ54jR3vFoJE8URFBKxDmNZF",
  "key28": "Twed8tSCJu5Xqv5pZ3NTFi4TiNeHjmgvZiTVUsyV5aMjRTBN3oJmDSgSjczDN8RmuEiQttm7fSnQcuznnaiRNUy",
  "key29": "2aphMH9CPYJwMevcSZ1aB6ep6kbicEWtfFguNNXbPSrFYBn2gdVhe1oFiv7dLDrJHCxrfLKiJnQMLzZ1An6Xk1Vp",
  "key30": "4H3F1TEKf27XGgm4ZAeVDFs6yiAtcQ4w64ctuB4jMwAhkG6CrBKesjxBEqFadCVHo8bisPeKeyDdVfHTKnmFK2Ge",
  "key31": "4GVgVnU13GL53ozBwTfdXSYkmfKENWxyeP1vUh5ySsUebxyUweKiGLKzauW68NxuiFRomTcxAwWWbi6hBxrxi1qj",
  "key32": "57pYXZspN8onHQUk6vKi7paZKgQEtdMJ4AaERx9LarKxF6kbdxnqHJYfSemKAzHK5C9sxjMQaxEViUaZPUuGHHFo",
  "key33": "4YiSD7C5cVeccfwM4KWUjNhhQ4ZeZj1aQT1M45bfVFH6Kg4SvT2uWFf7sEWR1HkX5v6vMcm5C9XKMYErwUBk9fgC",
  "key34": "5QqD66Lq5E4N9nCsYNMPtVni1hYxAvqweYKk95T62xdCMdWFzAHfLg7Jbwt4uTu7uLub5UcZMFe47aeqDpeqTvRr",
  "key35": "E2HUjefXk7JS3EXDkN3hh5u7MW3W9DUoMD8BGxR6PwTT5Q9KjCvpmRu4d4kAYQHBJUJcrqAiHaoHLjH3MtB4xKn",
  "key36": "3ybFvQAvznwCuo3bB5Lx3GVz6NHLrbEcoxHW2Z1hNqaGyntQ4Q24PUWqWk9SQ8qL6j7DX4cKFfmAw3ZMoXGcZsCR",
  "key37": "4NiAJuUMHVEQ2yhAVosHDJHGyfHzHj4B3WcBqArLnVBGbBXpJyy6PRhM39BqsgHyeBJyekQUSePPiyEReGCcZfYV",
  "key38": "2nqt8sWAZssCS8nGDgxGkziv7Yk18KgKq5M5G3xuVSFUXrDdN2Tkzd3swwGtENeXQcKD7pRWT7nmhux9rw2MCUBh",
  "key39": "54KpKgv7A19ovAMbTJh29tuohffDJYDjBFK4153gpmgwLpWwMKBWRPHXQ1pckRamgmcvv1iASM5diuSdMb3mJ7PQ",
  "key40": "31eD2S2DejCXZEnNUDS4K7743fkrgC5Kt3w9NPrR8YYQk1eFp815GNYnmaZNs7daAtkkcGy4DtdmmZcjmAM84qP",
  "key41": "pGEBaJB5oGRvaki8nHNZAHiYKYmdPqQY7uF1c6e2qPQTnhnqYSeSPXvzAdhuRQoRJVUHMuvyyat8PMUNFoVjLc9",
  "key42": "2r56zWw8UdyFBn61tN26HMAxe6gYusShB16Crg5EbP2iWCcv4g1hQ3MjxZCeZ8D58VteEvapqzECQk6GAAAJYz6Z",
  "key43": "zbQoPECPp822mh69e8XajJ3vrfDkps8dm7jCofZzd5TJTtQ5b7xacLhKEsWcDBZ3Br7xXbEXLGmg4m3HQmdzX65",
  "key44": "4i1u74PqWCpxaqujebgfvzXdG3DXwYvymeb8AttuVZ9r7xD2EP7uTuY1KvvasZ2mKfUGBxzPGvfnQZoacAtx8uho",
  "key45": "rj1bLMHtdiJiWKK847HooJn6whtEZme28GjJbbmu126E7PCmsmbTafMPVQagZsxeoAw5JjBnuuyNSmAW8N3EwT9",
  "key46": "dxzpM9jRPTU9DDgsXVMAPrupKarjSG9keuf8nXWYWtKWUauia3Ta6E7piYqTfNXcMRpuw92N2PsxNWDVCeddtvD",
  "key47": "4HGzk5UdPGJRMTwp4cZoXzWYA2pHfhVJb4L7LfZayXbzD2EuPFhYh2Nfei7NsHNUHjWMVAUptsY7AkDefNtrsYum",
  "key48": "3pb5VTXDhimaY8aFTFioybVkXuWmviyDeBAk3e84brR8XzuTezeCp6UpmVmYqSyfVnFeAGCNyD8hf7MgXLMze73w",
  "key49": "CzxrxY9h28Njdn8UVvXiskAiNbn4rxNPQC5FJirJQreuDAaRnhnraYQFj9cq7bKxQ1hfotRGgAKTueNnVt5CRLx"
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
