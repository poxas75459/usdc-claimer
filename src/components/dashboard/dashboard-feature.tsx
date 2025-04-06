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
    "3Hj3mLDrDFHA7e2fHEVeLoSZcbuHRJnNLX7Dpcw9Mpm6Hi5sQKAvTJ25zC2eXoCk1eHS9vFBfrCJEChoE9xr7Cab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AsUoTJbyvWjC1FEatYXUweaDGdqLecDaoHWo4Hw9uJkRZrUiwWR9V2HhHa9yXDH9gjESNWCzfC4i1aBHX6pjJa2",
  "key1": "LcPxFUnMCYzj8N3jZprbvejumU5zJmvU4VtwhcpPc4CUA8wmSi11Nde5JpqCm6jn71AKvHWeyZwK4VHSGRWKnYN",
  "key2": "vuUizq6EL3ytzvdKsN9CKxwydJeE1d2t2uFVRAJpmQvjVJes7n6Ubt4z88n8p5cUo3K7dLhfJXfLrZspDfFTZog",
  "key3": "2pfKj6Nv183TVWLxwbJUyR3BrrFk2VLgL8kVfvaJimPurtn6NcVihThzAKL6egnKtNMLFctCZHBghD7ewmm3Rzrg",
  "key4": "3GXGJeQgVNdVHUoMg4tvsBcV6XVSntbYA7W944aTZaKYJon2uBwf2RC54D1ymZpZsVSRu4pTbCrVNQyjZ7WgRENq",
  "key5": "3qU4zpHCz4dF7hgs757SSe79ts9U5JmPTTFV4b4eF727XMx4qZ58iGhYN51VKVBiWkCna14AezSWFE968LiWQyig",
  "key6": "2kAgjAbm1R7BZAsMSSd4UAzxXgXoWhxVPPxMhzKupUTEJKsW33ZQoDkr3KmZKfLBauu9bLGUmejkjXqoxurzySSN",
  "key7": "FUv1utmPMNUG7CzsRjxu3nzbw7NYTKiKCqWYD6ryHy5t8YhtTX6j3BbLxjra26sdhHLkZdYzEqrPMv9SARBBd4s",
  "key8": "hgRb6TitGMyCYWXVNpg3DuPv12LWL9GDsQm7a6cjHP9UNU2Vsq2joeCSKejsSTcpyUpbGw42QNMQ756675tN7WU",
  "key9": "aBZqnUraE9hpPL8e1xCZe4D1ViDx1Jsgv4X7vWNB2fQeApHixQDZYQEjvnF48zKhPkmBBro3PjH4x3GzqPdGmoP",
  "key10": "4PaLfBfe3mpj5uYChKLHFF1DRiPEhv3ogA2XxB6R7W7cEayhveJwE8nEjJknnmt1sW3C481k5RWm4AYndNrmnBNb",
  "key11": "CmEXrSs8fYhmgpU9gqa2nUiRnRo91LXrKpo2RTByg3s7SEePEBi4fXnHwwWxhnvB8oSZFAEhm8z1PoAgojFYQvc",
  "key12": "3Mru5uskVC2pVLTFGRTQWBCwbHo8zT2tFiTAM9feuAqHHJrdTcLuHW1ZzAMwxuBFddFdfcFgFJEyAhUrAARpsAc6",
  "key13": "zJTB7kY1vVvp1zHGbCym3sXfkU2eY9hPFGXkPs4diNZ2gH3vQX6uyaLbLRpij4KFvxE4mvxNPRUAE9eYXksSqeU",
  "key14": "55f3PbdmxNon74o1wwBCCgGBwsdvHa6ZWwWMsLbqoUyZj8j1KV4MxJgjgXh351SeRk5j7qPaiwc4CeFUMoLGTjW6",
  "key15": "4j1X9QGcdJmi8z7RoiGHB4Tsa8DZpUmoL7mPb9QUnGNazo5MwKFpRSLhd6XPYGz2N1yFkb8ywYcgEJdfECXxUBsy",
  "key16": "25rzErbj2SwpTyfGpaCSjuJAFDRoC77rNYkdhWHLp7JftYvuJL6cPkWWApFYMHb8SvwM8LzJeabPPMvAQnq4CGpf",
  "key17": "2LukEWefeyrnKd66ax3VVqpSn6my4w1Sg7SJTkFgd8R1ASzFUqRsvJNpajqGdfde1qx2GGbMR9HwsHcknjUE1tNu",
  "key18": "5tT9mcQfipYGqdQDpttZXxNHwHX3Ec6Xc4x6NNc3Enjcn3ZfVc15BRYcYonPot8WpVyL6MaQSM118kdrTSw13xcX",
  "key19": "3hPzUfcdSFGRi1YPEgufwSyxdUx4YW3E3kaFHcJVfvqCPLvkyVwKi5KmqyWToqmWs71Jk7EoF1PXRWNHw2mRmCeM",
  "key20": "5YvttCquQVvqDxYBPGKJZj4nFVux7NueNufjmtpncUxXaXwtCXZ1Fqen85b4yEyXZ1m1VdKgnxo8JkWuJFFXXNXa",
  "key21": "5J42aAwHDNUusxv36NvrhNTQCzpYYx2PNRWeeHvhKrtHJxzgeZj4TLojvu7ePGdgkDKCsD8UNfFscoKV2gu8BqCK",
  "key22": "oZSdm4TwV4QoUMnQg7TTYrGbXR4QkC6QixpiRD6vp43KoUNkizBXnFqoNoKLzhSrW6HYdh4wQXVg6n1saxJ1hG6",
  "key23": "Pyj6EiSGKU8o36ojZngXfhwEHGXmeiS9st8Au9NLt4CtsuFUgLEf9PkmqCHBWwCeRyVvpp5bUpvJGkwhjw1tyVH",
  "key24": "3e7ta317cWZ66MV4mpoqpzzBan26Ja5dJyzrkuYE7QCNWj1RubAZhhLVrGM4JCpJuRskxaDxzsFzA2MnKjDB4eiA",
  "key25": "2DWX7i1HV4Boq3stGa7388J3on6BoWLmq2iS7tFvf2AxGSDaE8oqGxyJqAJBXnkPDsX7pf7xcg2DWg5e7hM7eJXP",
  "key26": "2J5fpF6KTmd2myDwnJs8LEG9c36Eg1ryggc2ssyTa4T96acUBi15BVPnNDmsLKaByeEAC33gsNLqYYfizQYd3LM8",
  "key27": "7umHbWC9Waxfn2LZ9DPgwYnbVUdpfGv9CLc2SN3yJRUtFvhCjKM1W8ZWvrDPvbvLE6KWG9zxNAe5s4Zb5Y4pwqa",
  "key28": "5UqymYvj6ctgT6BwH6QksK1Asi5JAoBwU2HicgiCh6Md4KXq6FUc5By3VVbtz1egBWuWvyG2u9H5R4bmEcDniJK3",
  "key29": "5khVf7eJZDSaGvu83YkShCKZudq4xXjfcttPrifY3zV5mrwvmtYWnGf2ARZaHArLjwCzgQE6yTc9HG6vgMzaL7yS",
  "key30": "4i6CGUxKEX2XycxA2ZbTTcdjXAFcKxAe95SnMbEDdYbDowpbFH7MF9m3dmniQSKpR5PeDjrJ9WaGbsAp2RJas6HZ",
  "key31": "638NEewHN5dRYdMFaJz8Ag4pXmhmKkyoAMUWn4n6TzDM1pANXuMY829csJmfeHfHqiEzGXR7qJGJf7yBoRsBzx1e",
  "key32": "4RGR55aDNmbyTBcwEAnw5d3x1g3PdaCQTAP8FU4bwhM872Ggf8h3wE27BLnJbLxz37guhbp9S7roXCBiAXM4vRYt",
  "key33": "V6yCCagcv9NeuGekLafq2yPQuLh1V3peGzZK2nh6sy9HSGv5VmQM6JhHieASJNjNvNkDrHW68tFVKkX8yJWYcfJ",
  "key34": "3FHcPBwrgbwKfyS53eFWT9XsCeqehkxoKLj84rKtspXUeDYsfTwhXVevb6vNr9VSozeUoNTcWvg915wQxqnXrE94",
  "key35": "2vxpsw7V8ZaYwyNhVj3QVENDWrEQxQbV1fcBsMMR8q1mcaUp9L9cUrUfQnUsa7vHJDsgqT6mKBUohUbkFvMtWbWF",
  "key36": "4LHbPUGo7uuqBdR2r2N8UgSQRTwfzRHVPLQVP8Sz2Sbyk9uFsUZ9Z4JGUeK5CwwAHmG9TMsU4KjXgFVXq7AjekVf",
  "key37": "4xbsEUG2UrYASiDBw8ez1xPHGyb7fX64dtq9PH8LEcXce2eRtNYn4eGEu9hozW5VKJzz1UjPsy9P5wgh6wryTFvQ",
  "key38": "EjNNQtBLnHUwFH99FsM8K7HLaYCmKTTvgTdJ7p35B6XpdaJEdYFL3aHdwXMs6GyZ6Vbxhf7u1sCxJihvp3bCmy3",
  "key39": "5SzHZVHVZrAsN4PbHCuaLeua97qxGJdzbLe8ALfsDmseFND4mHKFQEmna1anz3ZgtzsqSbKaVP4z84NFfYiC7Am",
  "key40": "3SCxHpn9D2XBEYFW1Ki5ZXePxJ5aNrMvhMkNxe88uXiBaKpZkTQuRsV9HKkRtoWxF4zp8VxLTx2gu6N5BaaFJqhn",
  "key41": "4dVzLwbZuPKdmmutJGS5bejXGbyvh1RyEXqY2BdtnR5TTNajqSVv5oASK7DwXkV6AK4UDhZxR1mspfwtEpb3pxz9",
  "key42": "52TihRHr8eYoMtBeNGogyTWf1fNJg1hUipUzMFvszoWH7qqLp4yty58wDD6b2k3NnoNHAMYBqMvE6wAy7vMWtH9p",
  "key43": "26P3AEbEUb2kpaPVzo2Q96b2QvuQwkqM4uwawDLtUPSXjEqdRQoz28UsofLwdJjvWsvvDa97spBQER2uub8bBvkB",
  "key44": "4vV6TSG528JxGq4TGEQwU6xoz4y8Q3Nhhs6W6mkZo9AQrtvj1yadSc71P3rtLZ7X6csZv8B1HUq8rcvEJtq9gQ3s"
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
