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
    "MxCcX49uRPboVnDCNsbDbBytcTYdYh5sJLeCjW1BV8DY77L2vep3U6hJY9Tc8BapnfPptepEzSjnaKicJTTiN8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64QCmkNexkBbgGUWjQZSDMKJAsQPznJwoLKHFTpSthR3wvvAMe8EitGhDaBqqSZztXmQdAazk64KUCpojYka4q7e",
  "key1": "2PVALnHYEzrAPSnoL6vxUKF6j6R1BXgp3yc8BzCuCvenD9jXMw1cP24eTQFycymwL7Ez7PQfKMP84ncpJ6X7U5gg",
  "key2": "2YSYCT7ZKGCC3onXpGHdg9bEeNTFnbLH8CDewxNfJ3qvK8cXQRS5pieETMgUMKk3HmbTGrTmucpMCA68qqHRsZa4",
  "key3": "48JNk6o9ZzPUyMkimakZw1pKrFL2SjLhM6TUyMB9d8ZeVRSDyUxwJ5GTYW41TLA8XE3GDv6Uv9jRuGfkBbeqqYPh",
  "key4": "dYAB1sd75XW5ojVwKLYWdXxV1sxzX8AQUXyP1WHDGFPAb54GVMMiQDtaHwJsB22ejmpVyDubmJryk8aNKTb6pgs",
  "key5": "Wf7SKkrNfTYE4bjwYK8jD6fGYu51sdSs5vB9SiorU3odvJXVzSujKm9SeWR3i28frnFymxJj7LKK3njpri95pXG",
  "key6": "2PmbFqMQCsQRbAZoPzyMZEiioEy8LJQK9pGscfwHHXTBj6wzpkDwSZ2PW3S5mu75gNZkAnXef1riz4tvrdMUSBvC",
  "key7": "4gsjSdiaiALZH5dzVvKknjyN9W4DC2kFx6fgKX8c3VT3DJkosc8yxdXZiZVe6MpA6GS6N3r5D5j4VtgFsTxjUQFW",
  "key8": "5w5rBhUSym1TbBqqHKdnZY6Xt7oeazCefUrCS5GNDU8RpED6mZ4zu3gXpFWofKfvHsNCj5owHGoARJmZgc5mUYhQ",
  "key9": "baA7oEAFxsgMTpkn999a8c7Y4nMHmsAxtDYQYUY41sPQiLDS3873B7zaVRU9KY9ttA2Xd8uSG71pC7E3hDhR5ub",
  "key10": "k7sV2h3TaPfejoEnkD94w1xyAjVudsjoMuVwReDbBYBqMLERVGcuMCjDkMkvKBFsDoCyjiSS2L9DWjQcxkswmcC",
  "key11": "3SXr11QxKzpQaPmb3HhaJS9tp95YAZZqSQqAMrK1LG1BtRs8T74Jynv97mEdgSbS4vvAWsVvhRCCB71t5hs4kJuF",
  "key12": "2U44BTXw6xJajrSU7be6sdW56TVvhDBNBQUqW2RKxNWyu9j46VhDrUZ6eTYeLA5TzAFUP941UqJWfdnHu7c9QEzW",
  "key13": "2WVRJhwtoF93VPWSxTFbpBMRaUUosUdFo5x6RZHGD2BrQR3b9nH3uJiGcNVo5CPLdem3Z2nujR5vrzQGXNWNG2Dw",
  "key14": "4GpPohKevFu71DQUVjphELTgJwQZF2hTagWa5LuHtbpkMTcsdjVMpu1ikvdMiyfNDTGFRBXbaXgxYYTuQPVSGDsY",
  "key15": "5Q2QDv31aUTuVERFN6cx6tVZDRudSf51jXytcka7W3M1ub6ecFQZPddHmVNUHBw26pYfr34P5AdVokhwh7rEwHLU",
  "key16": "uNSrix6rBjUHgVuGgXTiHK7x6Unas9XYuEJLCtJ5bjWzUmxfr7G1MxuVodKLFYwiJDB1gANNgJARgtdUQgNFfVX",
  "key17": "5camaFLv9GdgPDKHX8YaABnFBAjbuVHMwYgarrqvxuDYFzTFxfvMrdUDD1FxqbyQe98LtdfzvGFFT5cVsoDW1sQk",
  "key18": "4WySaNfMjT3zRdus1TS7iaeVncxEKinGPDKC9NHP2bnB7KrzMrZjB4UaKf2pxM1eVU53d18Kzds6hH4s5sQgFvCp",
  "key19": "5YgkVumCRJM1FdCdrebLYqRXe1SCxy53xqKzw7M4cQ3UCfzKscBKJB2yg1izMEx5W1ocj7RJ5reK8Rp4CvD4gHQL",
  "key20": "3h2Xk6HVZS1qAJjnp3JGrnjCpF5m9WxRLVfYg86gJWyno74iqcNavMxp6RNZTPSpNNm3vAbVGhxBfMa1XVKb1fUV",
  "key21": "GnpSLECTy3rStMk4tpLHzZKJES4Nbe6oYwgF265oQ1AFePpVYGE3Js16dsfQwgiDKqeszrkNeoekoj7ejQz8XTV",
  "key22": "3kwzQimXFY1rpmkM4KmMEy6auMcPwQU1D1kbhxJTmHjfiDnNyDgDguwdmJa3HjpwBZsM57rs4g5QyVgtYdGAhBrA",
  "key23": "38PTDDQ56vak3rnDnRfvXEUF7JrH5B1kySTy6JgRBMYjEw1aoRh9XVGge5Q2Dado8KSJz1c3aSm3onSeUjQ35u2g",
  "key24": "4otvhqd8TwAjBTJPYxHyqby8JviSqNaVxynHh9v9LUbPe4W4ZJiSsnXXwxdSDeJf9uwEoK2cpR9pxSVvCgbPNnbo",
  "key25": "4kex2EEWDqD87c7ue1mPv5NoY14UqP2fu7D92CvskLGH35jfYMRn7rAsPfHHyFX1ZfcT3NX5SB7PdBz2tv5HcUEB",
  "key26": "5VZ1WwRgsXPtvEByKN2SMeMAgvEnxkdHGSZsLAcbQGqTsc7DoMFSqyYXvE8UytgxgXBbMAkUspK3Hm77haEnQ18S",
  "key27": "swtph6QbLyXM3noPtNTiwP2jYA7PYWsR8kDpNw8QQxouaKpEMYfPeDozZNZPHM31Q7TaTUSBcS6ggBbEQcz8SXg",
  "key28": "29SLPkKyWMy2oGMoj3ji5EW5S1GbTYyA9jfSLMRiUgyVvaFwTaQSokKCk1b1xkfHs1P44hgzTCYW85GKa91YX8Q3",
  "key29": "31ijNvh6LEwJEzskjHtGoKi9WQxBz3d2c9v91TRstVegtt93wt7QNbUh3xybm7ChqRg3WHtRhhpApr2ibZfBGRXR",
  "key30": "Fr3i1gsLhdnDDB2qKnCUoZq6CrHTBP14wgiD1pcn2uQTrhj5otBok9Y3Z7ymtfXYo5zQbKdXtACDM5BDPzKWAeu"
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
