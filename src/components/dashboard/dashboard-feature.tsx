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
    "7B6LCbWMN8ZbSuCMQDzASmW4J3UyzT7Wfv31BR63JM6UQVLNREBbSrHo9MVoTwSb8AbZZtr3irrm9zV727AqRkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AWtXYsivZtNp4GDNVsWEtoG8RR8pfLbkLeB85nVCjCfUVyNZ5BVPycLzDmnqYAWPy69Ck6savZBGiEedRzpqNV5",
  "key1": "4MQooCc5jnRFZCz2Y1bFmvzGyTKcZ8vEgG9ZfhqxZJ1fW4QXDAEpAGiYQtrxYSBFinvQHSJ8vAJS56JdXJ3w1Khp",
  "key2": "X9vq8hyXMYgguRVcvYssUzsimjhWpqf9geSEZSHavJnoZZPeugxs3dxBQjxpMxis4XDapJZJpj4AZn29rWyQHbz",
  "key3": "3qbQWJiG8F8tTP9Cg1VP3iR1USjeeteXrM1yxPtxCzUjtMrWoVS2QkPvdBGyQEuHh9pHypPDRx2sRoXRsz8hrWA1",
  "key4": "2DFrR32wH3GKkp5EXicn7d8EAaSV4F5CsgE5GM3UBQzH3Z7L4ADRK8EM3byefS3xmCB9EBU4kS9UAMfUasaKNLFS",
  "key5": "4GivmNZWYSSXT3wmkAHYaQSMXGDLfGLupDnCmjmMbJvkFYDo1VSr2EjQDKZCidZVYToJtmAGT3RtywNRv3PNdBLE",
  "key6": "5LLKE4XkwDPhy1yn7DqFCf2diastP7DWy7MqLJNdzoM5UoAh1ZkaeGNCvpQxGwsQKWh9gLPAiUKxJ8zmAX8KKrEf",
  "key7": "5giCnBbTA4WmpLT5S13cwiZMAbBFsSkArTUvLxiHwbqGmpiU4MS95ezCz81k6qLKxERNXJcgXtMGLwK8wdPDVKG7",
  "key8": "2xyENRskSkRyWWTDg6DQUzhE9tzWUGHCvKTCdJsdHbBTVUix3wGYFhgPXkhvqawdYRnsZ9U6cKAUjvBDbijJnHFb",
  "key9": "3dz7uZ9pK36x3kg73RTkQ38TaVkHbZFEzKCC9dgn3gqFHDw8tfeXPMo9h4JzyS9jGun6hHpgGHvjhtvtuycNQCx9",
  "key10": "2zVNy1s9YZxpUJJ7nFenZSYSwi85Azg43UTDHXAgYpvyd2rQ5bHUCzCm3Dstzx9rdaXAZwvm1xhFUaMNHLwwpBGD",
  "key11": "oRWX9fM1u9FgUJcNbzE27cZMm9QdEnFxe4q4qbpYHpf3CZ8Rc3DSCm1X2y9Ttx6F8161PH8cRoHzNuafAYcAB7V",
  "key12": "42U1warwrEcgdrBYNLepGiJxAHQonDAw1dvUiVS6S1XpFSKCZm5nzd3uh4FyKEfCYKpesUc2LJTrWgUBsK6Qu62j",
  "key13": "3ppETVmVTGVYTemMKf8PH1VEt9aHg5A8fUAxMBD7eKfNrtoQ3wmTMJoiWr2rh59xX1ywFCCutrABQXTtHgDp4BF9",
  "key14": "3nerWxk11XbkzZ5Y88fqHqjPEG2LrKsQTCkP3FjqRU1fiJa4EimZe1C9TkEQbo62S7FqzwS8XJ8XGGCG6d8pc25f",
  "key15": "4BUroMP5x5wK3TF6BSiZe1mtYrHsUrGAyFWN46Ngv4HTEtPYJPLMNoewqk2jo5444aWMFY2brsDw4nysNuSgR8Qg",
  "key16": "3QoccTatuXy2rxMHfgqJCNxWvYdhRr7TQUHHyzGiavrC4UZfRZKqs48bvweneoHwhbDbWzxjkGDcm2qriJnoVQZd",
  "key17": "35NfmS6B5p7Wevsf2Vk9UtnRHbfovHGjqpHDjpGiSSaTY4ZLV5xUBnzm4a9dpY6mPcGPGdarEwdVagpKo6YuxU9f",
  "key18": "2viE5rgLn7z9hJjohdpvpuxRLWUTeoXa28CA9KdkAVyJhsJS3jCj5fmjRqdnZ8j9KXesJEmywr6x5MTNK4tkBkVj",
  "key19": "R2u3EZZLmjHCneRvMJy7KQwD8nsYc6XbdL2fVB9aWGJ9bqXtthHEyUmVk6dvmjgGnktHFfb5patJ3GvZ73mPfw5",
  "key20": "5iAjjpwV5xMeuairUE7bxDA4QWLZ5beTjkg2yb4zAoeVZheotoRevmBxms9nQpYNfHRB6arft516hYH8fF4MKuqE",
  "key21": "4JMC9KQrbZTquqTrEXQFTWbXM2rWAARvfEJns3yBxSVbr4KUAbDBN5kH8wQtZ6XseZbE28CeVF6WTjeBhjcq6m9G",
  "key22": "42qA1XQrJAvkqqcPvWyy3keu9ZWf7aPdrCcnKGZgm2Xm8j86tiPJLnfsnJwSTC4DwAWUXeivuzSRteQEevMojJ73",
  "key23": "5id5e425s3GgNLcZd5bDTUzatQMMNcQrzEDVskDtnc8KHwg3xSpkWqT8qdojzS6DJoUABWBWbkUvdE7ysQxgMzGA",
  "key24": "4csbJFcqRGekHWhmv7bPR2NuA5nAGRb5c7uH1tDJSgpE4PpcsooBgSsmZmER3CHtLNKvN5QUs63cfoUEcbJreM4i",
  "key25": "2JNPd6AJZxVaH2cZbdjaimBZZ6hwmqXPo5FKgfq6kgmH6gt2tCKL89bMAohiwRekcjmhstAjmwKpPH7QDGVk7Qdg",
  "key26": "5Y72dAyXbENAwNVHoHRUBB4YTpGLwmNp1YzypRb2QRXVJGmRtCnvbjQx99iJtkz4FrTvQ97hHkQDyFGGwMUEyYFG",
  "key27": "ZuG8AtoJ3Ys1iaMAQovJC8VbGqLJ6MentScP5ebxvnPbHmpW26ASC1YdLtA7PagUkUdGTpyvH69sgcSnzjzjMhM",
  "key28": "6714wpQ2TbZkSKCvPXm7VkojZiNv86uJws1Mje9Y3FWCJbRcBdhBDQ3V7zKTAYUqZQHjFsR4ozZJpi3pdtU4mj54",
  "key29": "oP7Th4SeXsRieB2WKyQZWB5MRchYb4pHaUuTrm4fvJsPQ4UR9EPNpSKxnPewf9HL92adhegtp8QUTotG9w3RLKk",
  "key30": "3UCw3BfE2rnGRXGJSVKE2K64qYEWvENi6194LZePjt9sv5UA4aAHR9tAv3jPmES58UpXxuZAkb6tT38UtNPDoDQa",
  "key31": "W81Fz9MpLQkKQ5BNS6tykr2p7dhkbaCBgWe4YgdbpqHAaKt1TiWLD9MEkfNTWvSAPPG9eC5YkjuGRur2rhv4z2H",
  "key32": "5VweKRU8UCDfKAj6yWbgb1kXMM5rmfJYaW8V4DEZtGChNHivo8VkR74sPQZKn18kxNsYYcaeAdZW59D9uC8rX7ZR",
  "key33": "h2KCRLDCH18jjyuAanxRYpjF2yeJMGH2wp7UV8wsBnZ7GVNgK9vbWYfHrBTCnR4WTSnNr1Rcp6xivKEbJiPcKwz",
  "key34": "4cCEg6u2eixCVAVVN764b1nuWbM9GzCeXfEPMaaNsnz4syEJgjD3javg9fT33FpPwrCqDBFD8jAwDXP3CqihXuUF",
  "key35": "2P8fqmqGoCne6jYhrtvZxAX8KpzazAG9qdR5FGCRZMcUwXP5nxVdtayYpnwozDEMBDbqJ8QgrLvj2aPD95Udp1jA",
  "key36": "3iwF2TKBL7srnqt8AoqYLJNxvai3UBVcyeTxuA8occ8ED3F5TbNw6L4wSjsCVT2J9qJR6LftrUoqktgQ7ng5KVWJ",
  "key37": "3qiqiNhxH4WhRdpdi4jqRehnx8veewbpm7p75LdexTGi3A3ufXZ4KJSGvqCZDBXPgPWMefwezikvGNXwWEgg66MX",
  "key38": "2mW5urRhNBJecYWUFmN66KPJ3qLF8K4oiskwYWwsgDFdPLFXR5jn3LqPPw6KztKz5ZthzMxA8EJsVtZqrr5Su3Ey",
  "key39": "2b7QVVj7ahhVCrMoeDDjcBsj4ouSfo6mCC8eJmFMRkTcnjx91ozmYzr8E5doisPS5cqckb6jfd1SHQT5hKASLwx3",
  "key40": "2Es5We26uh8u1963aUvEb33ocMVV6VA6hrSFdR8LNHYvWQPybT8kfpif4VY6PAqfUSzUFcUT8nxNTSM2PZNd83ZL",
  "key41": "37qfV3GGRngDXw5zHoxwr84obRVyRHiYhgguWD5VAeZnc45ymnehfSoZDptVCgvFEcm5S54bS7H52rxv53utYDYv",
  "key42": "2sWV969fvKBB7XYc7SCeKmqdsipS5t72Gp53eWhFa6eudPsMKGCxZuEQa6HcRLWUMKXTR14zNQoLBz5LCSme9hRC",
  "key43": "5oGQdvYNARY6BDv2NVRW3yyueP5FtgdrQ9Pu3tSExjwD8P9VJrEGd3twQf1CSUdgack2ha6PKz2iN9BBXcg57374",
  "key44": "3HDnM2wKmgpgHw6jasdXiKpSKnxMdpUcmkk7PKFByQVFcAXtqLACom9BH5EwGGa3Cn3HDy229kA9hxaPT3B1CXVZ",
  "key45": "4uvnWyAqugUMwfYS6FAPUNq3qZq5Hdzsyohc3C8C6WPBTCoQryAvdEtum66cDwkY1Qqo6cxgrj2yXJ2Pv1rWP7do",
  "key46": "4HYhgSbfMHbcDjSuNJtPACoVJiCec2yrCbAT3hee3Vpn4JEuzWWf5jjZRJSdnbwrwp4BxPrNw7RX9BwsyomsNkQD"
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
