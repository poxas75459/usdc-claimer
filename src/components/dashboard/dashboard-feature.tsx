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
    "3iv1Jx9QPvJTkKzip3D9d6aP3bsqGnY8UEWy7X9ih1BV17T5QtQf75pZumUSXE7eA7f7eykbBZZUk11VUg7oU9hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MdJCkxcZ4Am5K1DDTQ33rc2ZVMZb1ensM83ZUccqHkpWJ3R6iAq9RQsaPDuvTujoQnGKwhVoXqAxjeXAMWDMkNk",
  "key1": "4fT26c3wJn5LE9y3JFXth8HBnsD5h4AfDZkavXdD5gGAbUvWDpJc4vkCAapTCNtxdYSQ6MsJooXaG4fxH7YhqKiE",
  "key2": "2oNBaySksqEGLGYDBkgnEV4AMS6KQCSWQVdZk5fFSiPsX43zAtqThDCWNjvmLwMdbVxCS1mFDwQzENyvHwTLGyZW",
  "key3": "3KchrrVM83sDELxYXfknUkwLdz2ypKK8a4nX4EWURHKcmocfR1t4ifH9DmppV2vtBL4gF4RvdusKgCtZx1AfgN4U",
  "key4": "4o2RE6s3uoFj7nryiVZEq8tKxttnmyytNBNafmfXh1X1dpdhzRJog1nx5NMqJom8jpUyfDkXBukm6raSg25jDxep",
  "key5": "2gzx89pRVrUs4AQN1mNoYyLXtMbJMr1Ko2qydnx9P4TkSveYqYu9DRLNWjBNymb27PiW5beGE7mDK9142e8yFkF5",
  "key6": "37ZTWXvTqSSigMYXkCgQDuu8v82bUYTJ7zopxPZjxFjgy5tYRGoXHGMc2qy6xaRvVsntJgQDzKMM3Eepbpq1Vp8Q",
  "key7": "FiudQYZ4N89JD2mbRGoUZSvjucNeVE4Nij3kM6s2FfkWnhkQ9gNj8C5DwTbFcg9whjeZFY9nFte4p3M4aopBqdx",
  "key8": "5GFmtCXLJBwW2p61QFbovuEFy4s13bWcTKBGjawJvmxcqa28dFR6iDqaYycBWSAVpexKKhaY4Brbw8oK3RJaMxuB",
  "key9": "6aHgZqVcxKVcdi1UFM2PkECtghzibGuESa4S9w7nx4wnLNYUSrt8K7PjZUujUt74DSHKb2yLqNP5RpGEr6jPRsa",
  "key10": "2tNTWPhTZzsasnMnP9RJcy9rVGP86x1BCL8eYZx56v7p5fx1RAS9xGaQEfNcvsk1iLTsvfEdzQeSY1JwTRpVKRze",
  "key11": "2rioGameVQd6fTfVdiBbYBhGHgVGz8YHvRgtg37yyhsKJeT6rkMvHakF54tJ6px47mWSqsutihCjWuNfoLVtj4F4",
  "key12": "33XwnZmcARnJVmXdi8N3os4X4GfvEuX679CSqL9ovXzHoWu3uZpx2kqKBE7vBFaYqqs629WnF2m2YL5E76e6Si23",
  "key13": "B7XR9pWGtr9ZeHYR39Wbb6uXsomFhRyqsjhumdCwHwQPCwT5uWNpWfDvVYbdPgfGsfY7TCYCNQUuAebeB2JHGvi",
  "key14": "3gWThpanuHdkyFJiCaxaS1mtDe9L1YmWR6FHmLAhZdbavdzwniYp7bPnEDtHTEbjzrTnyiifRcqYuwwKg5ByCK6T",
  "key15": "2MqsjJL5mRssdgu6PVNVZgrTr95WPrDgdfSV9FawxDSHwsyPk845YyxuhV6kiTxNVrjtyQTZB3k9PbofFtUtnPqD",
  "key16": "ziE5SjbC5CrBXaFioiFuaD1AU8xWiB9DMeNAqSwRCBWRTKSQ6rPMyXSzzY9Nhonxye9WufYYQXcpGpAqodXRHaq",
  "key17": "4CohajDdmW1MqJBRYQsPQqPCcEngLW1wcPSMxigYWwChJnnHXHby88vB9DcvnMuFdbSjNNFd86tLubrhsycYmDkG",
  "key18": "5R3mzFVbyGnJ8znSeuB352hh4KK4joEQsoWM4EhjAvRrmR2GUDmQC2wakXRM4kaiEQTphVYd3cnYxrFT6xXHXsXb",
  "key19": "s8sWNZyXUgQ8hZW4Ech4hXdaR843kyoHHJWMNReyRGCmuPfwAcXjJqtMuTEMsfbW5peUtwJKALJp26RFrJ6uevN",
  "key20": "jiSkU2jdsK4dfRsyDNvNXYTfYzaWWjgHBG9Uf7XNQZoaE8mH13edTSRX7tnaEx4gGeCo9zKry6XSmMG6NBW81Ke",
  "key21": "4n6XrnfQZuFU3Sb6s2aCa3QJq3sP8k1XiEVZ4BZBgyHZH9TWfrcs4v1WCoczvika6ZuRYDte2McpZ9ocQwyzxkfE",
  "key22": "2nbTFUArDpzo2ALwdsoDfdsfdDhHvHPbWoXobVbpqW6JMbsEWV3stXruANorgYfKqbsH9cnjZEpoAcq1pujLphbB",
  "key23": "3sBX6eKQmj8YJ8c7Vozd4XwVxJECbmZrAXYCfMXCuQpEeGStvc4CQLXz1gKJADPNntp2ZuXaS98smpehyWiQ294",
  "key24": "23DHUQ21PdPgVGs4NjNNUP1AAniie6ZkWA4RtVrLnhP6Afrx4bGJv4HEe3dXVbpnonK5wW56A2AHuLBsKAwgLNAB",
  "key25": "5qaEviG21B2heRNkefS7xjW1TCbPi3TKiymXpN3nLtKGeXu4h3N2pK8aNZq8CtFaatnsuESuGKMfiSBzfCcBBSaX",
  "key26": "35ZAMwoEkjCH68ikGmpzopoPX4nFxB6pGpUZ7GfLr3ZC6b2j9PV1E3So17pnaKbhwTBZZhDPYhDVDv9bjmR9eSAg",
  "key27": "3Kjq8NE8KdqMWW4zrewUSdtyCKpibUoekrrbk4XGZ9hn2cSMZbkCvhXJmsjwLvdCMQYuqvSsMEhFDoVgd5Lj5MrA",
  "key28": "4CbMy4LNQfzLia9v5TvY2if4HbSGktZNELvMQU3ifjv5X8odLMVA69EoyUKSCkdX33E7rNCC4qLPx217aKsq2QBf",
  "key29": "4LVmJAAKdBZiBJnH65yZg6rz14s3J1yHKswjgc2M2BzZcqKCuTQLQimzZNqLYdJm3WgGNdQxiCGfd8apVubxdPA5",
  "key30": "3YkcGEJWcDzhWgwXLWBZ61hYVy9ViNqFX4Yg4RJC2KqRoC4kGcZgUtwq5cMpbZGBBjujN5rbcyMhs6yTLEEFveed",
  "key31": "4fEFnDG7RtSYnfX1kHE7ps5HVn2QtJwuG6a9ATrKPpaT34vZFVMpLdYPZb6utRKsE8av14axifv4bx6EEpv7ZTFn",
  "key32": "4V6HpBsJE2uByZhfXCHjCV4SWs4av4mZMKcVnhimde6iW5SPur4ryqQYgXuUbv2Sc1RqxAetv4y35fTaGULnVL1b",
  "key33": "57z7iFcgPRzPyr9c7bpHWqCubBDWn5ejcMgTypvDuPvc4tyayuufMdF1enqBiuXPDEXka1YN5QtXjevBfBg9dMHE",
  "key34": "2WUz1kktfhNoZqyexHGJUTmdcpKfEu4xFUocWvWA5v59uvn2uWrVp9dA2Y82ieZGvgYsy4M9PKQPtjkifH8dVWAD",
  "key35": "25wvYUm2VBNKP6YbrVfBGBRSaXTKfTRLb76PSjWcEdGCSNScTcfcT1PwH4Jh9XWaL5J5uT49FcHxCgJ28k2o9pTd",
  "key36": "WJM7BcCteLoPPTBjTr5wz144363LU7WTNfvSaSkoG2SzYcMwepkFN8EkH3pbpRvmvip9UNDnaj2gzLwhGxtjMUQ",
  "key37": "4PAvhJcc1FLoL8uRF5fvSLDqQUrGqZATbkRYgDQ7f5kVYawtrBMVDNQdsGWQQhKercGUnnjyA3kZXPJLgEoVbDL1",
  "key38": "5SaA8Zb9pP1UEyKHRSEAEZXMpWp5GJxAJiJLUVxshNK3ysPBJ22h2oKevhuSjy58Xdjv91Dp6UVTVMq6md13S9ff",
  "key39": "28aywtWAGnJKexA78XgWoi1mvNnJtehv7e3eAwd4xY3gJvansAakjt5AmJdVLTJfpLz5GKhtRV463TKfawj9zKQ8",
  "key40": "4uwvnpuz2zrBKNfNS6fvvpP2Xwy6gA1BnGQ3NttfcAPMMKk2G28kSaRtLPmkjYZwRuzUKaWC2YGdyk2F9N5HdA2C",
  "key41": "2BGTBNz3bBtZFyoJgpNobvaMCGHumPgNwR5ChcHiHCjXRTFjHYsSUceLRzRtwkStWm99iWrEpLF7EzngAVdXkrCX",
  "key42": "3qyHTLJfy223eFfqV8Tmtq5qSEUtT3W3yj5K7xma46jA6viFKQwDeVG3JC6BXhN92N4jitokYJwZnjdFHgA6kBJp",
  "key43": "3g6fz7YoqK8hnyfdwJCaqBL1hjKdtxnpmhe2jC9wH8EaAYNzE7z2k1rFX9iKp6Zq31jUcQLA1sk4GXGuzMy8B3Qe",
  "key44": "4phSnNv4pmBMfNhstpSpiYTBsor77hg9g6ipn6acaFWQCWgqaoDjuYZrYQbFhyn6Rt3HKTEJ9xvKNkatv2VdpTUq",
  "key45": "2mnSYuDseqem8UK27BqJ8GXB3QWZFpnfhtXeEGVcgKdzyhfD5ckNa5AdrF68skVZi5QqJuX4YAa4kB3W1485cWqT",
  "key46": "3oaU1XkMEwYM3CDdFFjnZzUAKVDba9gRhyQ3twBovy3s6mQEAeB6Ytzzg1refScg3C6HGrWVxec1c2RdTPdBqXrJ",
  "key47": "4vqYxYcwHTaH37iAFMY8ztuJxuHMrfRoWanYDmGwUwkLfQ3FGUacdgbXp34NLMGA8atBFqEQFaG3P3mFaAz2iAWF",
  "key48": "3zgQCcgwNAKUiVNwzY9qWWHcpu2pxKVHjrf5Fr2YrD69A854huMNYjM4vjmu1LvpBQdEXDorNgVKE5w6F9a4QgMC",
  "key49": "4dsmwghvNFSgfWgyXyGakgV6beDFGPAvyBGDzu7t2Xbga89oCgNzrejBotgvj9EgzRmr85Nq8naNANemqnerX7HZ"
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
