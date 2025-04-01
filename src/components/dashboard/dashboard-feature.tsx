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
    "3Z85WBLQiWX9JL4Wg5oPBaaFkSqMcvTmwMFWHcd4qo2HqTez78rLBZpv3d6jAdV2kPi5sJ2QqoxptSHfxMxKUqXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wxng8iFRMtJrVtqKoLCYrbCg1g8Ex6T2RpyLt59ncGM7eLtjmQQsZ3AiRDGiMyN3BtgNGHaEWHTyvdcmaMwJTxa",
  "key1": "zAZDgMhyJCU9dUB7RhjCaxjjgkj863GszTKMvqEMzBb22BnjR4LxdZqfNetFEvuYnqBKuSwSfojQfSA9dgP5HCv",
  "key2": "4XwHMdj4qb5hPP2ajY8PqRVeEqWv6MKTBfpXdU47dnrRUytzKgcXEQC25yzsrRiJMfeS837AmSLYwbitCqiqNfj8",
  "key3": "TgKMmjCFFDjvsVwKUJUuWjd4kTFZpjfQH8dzZFfew76Yj9SPaome2LU8RWhJL75qx9YtPNSzBxnYvCo5McdLLv5",
  "key4": "4GrYxECsmvFmWhM8Bo8WApsew9Pkr9VYLU6znoPQ2HtRxhDvkcUVTR1hYpbuJQLisztjij2w752iKKcHh5gVcREo",
  "key5": "3k624iP9qZpsa5dwrbyqjALWiouUM5inJzPUBAgx2iJYcff4ZdTRpdbaaFjqHJ1LdsCNT68BoDKAV8Mc1XCAKmtL",
  "key6": "5RHuR93nCW1hsQ9vQqVv6ZXZt6ZoZpA6ucHZtQSUnbi3YzshUjZo4fd863RUm9PA58LGwy2gZfS9ecwDXZWLYW2R",
  "key7": "3NUu6sXYDwiEtf7hxtWU5biCNfuaNLRjJqRHWYzjVkKMNN9Rt6DE1bjTcjp81eZ5xABQAZyWj5NUR2pDeWf2BA8a",
  "key8": "AQxV8ictmz5cRu1Xaro1ic36CacHc5XBNLdKKQAaZRE4PFFH3H4eDhaJJxvNyLY7eNTLvt31mzJ64wo3ZQUN6co",
  "key9": "5njeUwGHiabtke7xB1npqdKrE4jYqa8HvoXrB77Asf6SKfzLJZDVEFvVSGVWczRePogtpb5pYTPzjswLrjxaPdzN",
  "key10": "33aETu3Bn2ijHRCeaSGsMQTsG38zU3bLupJYkhntDwVz7db5sK1ahxfdgbtTw1XFsvsCehymuYuZU5e61XF2dRVS",
  "key11": "36kGrj1Py9BU5nTLatG5kDYdinddEaF4FpdcdnxZgD6gohXgh1djTkM2NQxHNhpYwF31RNu7RPDNfjAgDJYwevYC",
  "key12": "4xc6GoCtf2A4y1xUex4S1PSSDoSBhdKf8SPSA7QK9kY1ckTkdHYGpnZZZUfLdAHuneJbiMwh17i3WzBBGs95b2Fb",
  "key13": "4j2RA7yxXqzCMBu4piDTFWrYAZGnaKoQ9xxhLmk64vvm14s2rL5AQiAnSPApv3Y8UErF36HFbmvPXyhn6aarE7LV",
  "key14": "3DjBTELej718nY8SWyJZXbRFDx7L8o3jdwVGJbDGs6YyWohscRpGkinAYZGf9mvUKZQ7wDGPd1WP89KPBq8XsWTo",
  "key15": "Q2mHCTK1x6tTW3UhEsx5NSZbAVBvAPE82Msm1vLeXviWp6ykE3nptWdvVqYgg1XPeLooR2ZMLgq24V2kbxVjfKA",
  "key16": "jgBRKaS6wCL1Vjw6coRZnuyxSUMwBeth7JRkB4KgfAwCgNF2kcZ6UDchiYDS7ZA4ecwwn2VzoEAvsmvDvC6voQy",
  "key17": "29mqqgMdEWKoWMas9yF8ncMmp391G9V1gYG9BHqmzGyzFNX4K3NF9UKHtj9aU25zBQM3zNH6zNoEAyS8VwCMWJXs",
  "key18": "2DAvMqkR1tJPdqQ3awdoTsyEMBUaHZRkAJmGmqFvrckXHzH6uSLdj7GGcmbV8uCC5yEgeLx4otvyVdYY1ebEpsNA",
  "key19": "4odRC7fvgS22e5CNXiiUh3HzbekFccbf5xTDzFnBgq1w2BFUriCrAktz59vKCgPbWLFj8Eee6APmGa6rwkTNzeuw",
  "key20": "2m9315H4TZiUkYgesUBEM2Mj8zFoawYMJXD3YcpSxQ9aGdAtihuB3SPgqcETaJzi23qUTuWRbh8Zpkr84jAhYLe5",
  "key21": "27RN2QDGhtFcGEBofspccvtgLtKBMXiZtyy5M4RdPRunLFja1UWL4VViHrPjGKhzYFi5CxirXrs1fNVKU8BWyz6x",
  "key22": "4S6kV8AbubrEmeojgqv6NaWdiKpzCXDQKwuNyfPq5bHmvYke5rAMPpyrrZ6aBbk7KfvCkLZm6XDzfr8apzTyt1C6",
  "key23": "4CdgxPTC1Ur9VkiermfT21KezUqTs4zkZfjBJ872fKkAKHLdcSAQS3cowdkB2M79xkTkasUFYXaioAQ8Yv1g6P7c",
  "key24": "53geQPnKtdWwFNodpDuatBmgZUX6MyyhpBuMaGQ5CQ1Azy8tTFPuxUCtdgdK3QHstHWEJwVrQfBkfSPRhSP4uxyA",
  "key25": "8Gm9wgTBbWnvtPNH4KoDUpVbjGhUxGpDBb7hDYFWXTNzxrVidavPEbB4ZLr26CBFp6E3FuCGwQQ6BTfqcKcqasu",
  "key26": "37HXbgBHV4U3kjX78JxP1EbwGr6qo8bJJxzhCUMGeGDUeiukLSZvkfd9vcYaCMp2WZBEyt48ZSksTfYG3eyUkYHf",
  "key27": "4wCBEdSJVfmCzzdc15ocaAhY4EVBNp9mR8aVuvKr9gsq6xVoABhLoKSNMaHVxhf8bTojL9Ku8z2xjwdYfB4VVZWL",
  "key28": "5G4hhC6kuwZZLhaWhwvowZ8KLg3chR8sgPTYVvLc5PqNricqdnZMFqjFVLmay5HLnT3kC6QKdaSjqafGodV7RRaH",
  "key29": "4XKR4Bj3LmzHbjfEbKKQtKe7sfv5hoYJFsKA1DkwHfgQ4LANpF79iwypyqNeaJgLvq3JMawwc3NUeVg4g2rjj17H",
  "key30": "5Q6HnDuzU82Sg1c5FgsBYDBA4Wy65EVGxiHBNMvqpxVcM5eNDLs7HLqFYRjRxA9SKpCJjyY21B5rR16asisGCXuA",
  "key31": "5vZ6iZ3VoT2wBvuU1M7hDTLwCyhxG2ZzGuXCpKJiW3oknPS5a6Kbo6umFJrbbwCvgbxd1YQMoEUy9bFKNEz7mdQt",
  "key32": "3zhCTJoGm5jXcF4Qc9zXhQ9nqu2QiLX6XvahTStVPoWAuYiHY4TpCuaZFesa7pJggWyc7adty5kXXdskVWHDfRUu",
  "key33": "3jNyojH9oYtysatK8JfmvK7KGZfvr6HREeYTwKgBn9Q1ELCqWd6k3QV4Znu8zRrTzQP7BKgT88M4SM9WMh6qge41",
  "key34": "2h7TdDAH8K1yFxy4W16voMKFYPb9gnvZP7YJt6FojV2m8dUqpNyyQQDCqA7gJ1FfVmZyYpNt4xCiWZCQNnr4abWF",
  "key35": "3fRbmASMDPhh2JWf72pf3Yq83peJwspHbtBCe5dnNm2J2cup4nvKfv2qLJWZyLd2oihbzyCcP7pkdP7CfXjeBWSi",
  "key36": "UQopts9618ipmtATuREASaGQr357FGA5RBiFA81HmVrYrzKJx6u4sqtvgdQHo27NBGcQ3aUMYAmSaA2FzyUBfEN",
  "key37": "2KUJanJnTzvLDcUAJgAENGPhW5tCMP7i4PYj3g5Ri1P3exVoMyHSRHoHDrmVr9kCn3fY3ozCf28zirX3xhicmiMm",
  "key38": "PRY6VXyyDFq4ZNoaqZa4q2W73ePgxJgcFQJT5J7KyCiy3M9gMTHBVVvhXv7sJcojmpd5GkEbATNxsqXsyujLMQK",
  "key39": "bK5TJzenmthojRiTiWmcfS2jGKg7734Dcs68CtgqcNBp8U98rGJWi5MrXxtUYbhEUpZUQDGwVVtgsK4FB1CfiRt",
  "key40": "2T9qXFoiWocTeoYQQEVsf39D3KxJVYcMLjQWWw5PhQmmeJwsBKLKpcbmTXSyJApP419cdsMxGnK8RKE1DbcrrTE2",
  "key41": "29e394Ef73i8hn6vpFob5sVRzum2TAwBoRgxG8KRMLwbTPXNtQ9YC2X8yW1yzdCGheDk281VhYFnq11TLsbbos8a",
  "key42": "2D3YGKL1U5W6SqjuamQysWXpXC5uw27Zmue5vrQFy7MKBRWwG4yd29NHWJYGxnshNStWbzqY9FRuN74JBUEzXGa5",
  "key43": "67LxiQ3swxo87i7W9dYn4hNzt9JGApjKRhMhjokhpzePJZCHNrsBr3bQGwhh1e3ybUgaQ2TFvnQR3yQE7LBu7QQ1",
  "key44": "2LGBPRaargNSmVWJHAsFSHziBo7Jjb8FDpGYWxBSe54sf46fvc8DoiN5kQfj9EBomFEHjgFXUmxnVDK7chJSypdV"
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
