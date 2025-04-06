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
    "2J2eSAg6uixJLa5NuKq8bW5MWFBJtnPKEUzWzY3Ev7fKcJDrpLpzjZcXw7St9fngMRysGcveSvR4VuXrubNk2T7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yUxgC2CmFnzGiMsH9PLmamY4f1mwkW8Ama6Gw6LTUQuK35WrXBJVCoiBo2mq3YNoVwmMKSnb5zsVc2dowms1CZd",
  "key1": "2hHUpacGg7KUcu9bkirGBstpyyuMwxnTDVpSAqU9LPzXhGi472qvVJnMcDaFJLtx2SWrSwVcFtkHq6eaKSZTBw1E",
  "key2": "58VPKDJGnSwpXjQAWA9f4PFXvrtcptzahZpSsDuPD83cdm4aYYtBT2RjGoVgKq6pRnyriL5jZvfiGjJjsZaEJqbQ",
  "key3": "4cdL75syXKb7UqNPuvZu3qNhGPcwwM4A6tKdSTmNURNi9rzejPkhwAGCAFbj5Y4TxivRYSGoufGvwPnPCCiJes2g",
  "key4": "3D4NQrZypTfuWvDzzWYZYEvYFZDAHbkN9d4rdF1T9W66xD54GNw13MoWSMDXLzFoQ2dKo5yS2fZDmMFv829MxeLd",
  "key5": "2PtjDaFJwaHcP3NpXohM2vjpXLtLmVtGFrrQV69Xw7ihn2HHvWjkmjMdHvyu2MxoVCRxaZFsorJSsB1MRFdtgWDZ",
  "key6": "DTbU7yMigcchhqmRG3PXNZjTaGxWtBfpJZ3H9wUwadqjocsgRtAAvqMwCE7n2WibwNBnkWqmVoiLg9LCD1h89vM",
  "key7": "5bqHE2yDAN69e5ujAJ57EyKEpNdUfP9D6BCRZ1zz3Gzg3mDvS9MZV4DVD6mnt1xeudv5ABPbaSAyG66NuLQFW9cE",
  "key8": "tEYumCkszFPNaqoGCMfV6Q1HJP5zkDAQUuLGoxBTmK9KF6cxVhHujkPKnNi3MSX9raQKSquUHb1C1aQEPasXcAS",
  "key9": "43KNLb67GfqMStRGSd11FUK6yzsGmXuZ66atefnMEghYJyWgsgCKzTD7yAW4Bunoq75gDz5S6cCMccY6thg6iuhe",
  "key10": "2dccxicY2CEyMmqyhNnB449kiTAp1HgjPaUSKsPaQrHauZvYnzTXNti3nYovpS3Ae7EYsoEUZsMpG7KSAadQY1VX",
  "key11": "24dVDLKpsBdGy3bAQBzKtYPsGqRrMbUJLoUYz3nULTr3A742oy7bkYmN6bFF7Fe7xxJ6Q9f5qou8Krk3Jrmt6T3y",
  "key12": "2iL6zeMZJwCc3LuKSFgBNp9cj1KH9NZDfUqjcBdUMxEEhfLVDmmEq5teUr4fLQhMdZaMqcY92d862oF2Ljy2dT5Z",
  "key13": "e9StBg42K68XF1HXsnmvP2rJ4XKL2rfowjxTwAqLUyTR7cA38FYfpgXgunxkzwbPM4NCxJoPStuugVYEm31fdnN",
  "key14": "GSMurXdTWu1ZDuPJypsc1k1CpWnPexJ4LukBup4pkqut5y7ZzXQ6jeH8pkjUMfy1ftasg7181VhnCKyB4mChKFh",
  "key15": "o7oqiWA2oYPhQ9qvBhB9M8rweXajn5LyTrpqccT4uQE34w6xZd77f2z3wVfaT1CQyAZn2Ua4tRrRcPeztC192S9",
  "key16": "3KeungbtBqC1dNjt2vxiY84kjT6DzfNGdqNTyGjofxoK3eQCKeBMrtDXKHNaAARC3H7YNU1YZpGr6DKJf76jdPci",
  "key17": "3EgzVey7WeSz9SCgeXrtRB8m7hT8SvFMSgc375aiN3PSVTjkii5vkPazfcaXLUtjMZzpcN932h6AfsLozDsXVgZd",
  "key18": "5NtXfg9YmxE8dWxnMfZr8h1czSwiB3AdriomB1vVi9oyhNkRx1whXafPnGFwqXaHTJaeCysHjjtXrvVx34GWZ2do",
  "key19": "2EwgoMnW7jQczVtDmS6X1zvhkxQ8rRVs9bxXxbGeNK7oqnY4LVv8ZY8fmWc8iDQKofZGPvQgWEcHPa2pBZZp7ay3",
  "key20": "3V4C5sxq9iZZGotLDLtCg3xeQ23snvJWUjndBkwGeoaajg5iW3uAAnQnnXxy44fbQ3b1MvfMLhRnpe6EQsyvfJM",
  "key21": "5yYcNnssQgdcEJDe5SzEhRxt3XKiKMMZTVvBN2ihVcxaJxfn6Cpsg3U7mzwmgX6Et5ppDcmgk9fm78u4kKtNRasB",
  "key22": "5co8yLyzN1y9CVm9Gq2nvyi7kgihwH1PntSEeLSPcFKtV1Sn2TVWEFs86xCxy7Ruvp5mWmXtUbuNDKiuQbD22nX5",
  "key23": "2WCz2vJR5FndsqQKQnoEFcmJhLovS4GeJ8hmJA1rmwQViY71VFPbe5hXYv4WeHK9DhVtx5nBy6YAKQVs5jDva8X5",
  "key24": "2etdVAZHvWS2FydnFW7LqxLoXGMxwzbxfWXpVrjp86GkpkZxG31MV3ZNtdnk8K7rBBcMbNrjtbd5i17QLge2cpje",
  "key25": "2RSRCMHfsC3qwQdoPJJywe4wS29Pc9QfggsNQPQPhFW5bh8TTXTfTDidfe3jVkA6yWiCwa2RFeAjMscbhCbgBk6h",
  "key26": "3zpFrego69p1WhadvdRfHKVJ43ttCo5Y32uPmzZUrBvUNNEzrv9hph3nhguAXnC8uGD8ES3RXUwAEcpqjnPZrJDN",
  "key27": "26jpPT235ZRPTHEHUfFxKAHiUhYQLeYp3e9uvJqU6c2jg2wBPXFLtAeJZQU8eyx1ePoSz3nhZoCAGjnB5PXBxH7d",
  "key28": "4th9nWvVnHoqCK6eTeqnJiPws6WgnaQ7zuDSQbrtgKrMytLuhSaSyWUY59qXbGLj1psLF7XgPHfFH5soSYySpoQt",
  "key29": "3fdcBbwBnxRyfVFf9q2mSUkCcrMtKjPNe98qkzVfNfdv4NoHyevSixQ4e3CEvk27RLV6zdY1ergt97e7VFt4ghcD",
  "key30": "2NPzPDCePV7gbQWjbz1N52LxaL6PzRui1djXEJ42PNAL4w5jCuP1fcSg8go7iuNYoo9Ywd9eNwUvN7GMCCtDPKeg",
  "key31": "5kgyW8pbKHYwUSopYNdo9PvA8EwZS3Uk2TBepnw5DL6D1eEn2L7hW5yCmp5NfvUJdmua164U6oSC7aEhBeM3gzyp",
  "key32": "42tXe478TiMvtgEyLQKgjUdiWhEypr7uvPfgprYa1nsrFYfCbdtrQdmuxd62fTNju8t7MBbrBXjdsAG7Z6hWZ6LG",
  "key33": "5f7CzmkurAc2B5PzARPjLzzoFZ8efGPLYFr1YwkmhYsq1CsvSfWVKJA7v5RANR1Y1LQgwG8KZzofGG6jHcRN3hHD",
  "key34": "5Pi3C64H3qAZg65vhvZZF5Wtdid53H9KPG6eA6pYu7TWctbbTFXu3Z96r6pAPd1GK62Zw9N8SnNmsCYSy6oZxi8P",
  "key35": "4FLGQJvLPHX2kAq2h3kpmr1RN22XX4nptnVmP51MgFS6HEg9eHbcJNLNMUWS79CWa5eSHQV1KWARoQiApyPfYJUY",
  "key36": "4XqtzXtx6zY9yKCpGezWasdVQNecVpUSk86SU9XgAK5rbHKF9fdDi1HSuw6pFSP98XfDAXVnoLZwCyhy92E2sAsP",
  "key37": "5tFNDv2NbxPkS3RbhWaMGr2puMegfA86uQ6XE9aiG9eSesV1c4pQCMQTHZeGxZog1cuaWAYMs8TdEHW13f5qpG1X",
  "key38": "66mjtDefHT6eWSXKLXm5NMbMFQ27zxqMVpbzqXdDGNtKRQq5YkKQRQ2GTbc9CBTgejnw8SehMYejoBXD1TUkBDAb",
  "key39": "63HbUvzdLfBC6736zGp8P1vCCKqUn6X2ifXJsdSk4haxJrafPHUpc8j581FhXwmbM8YxVPXYvMiMzcpcPsesjbFk",
  "key40": "5jeCrbYDzDDnKo9H3Jz4DqP7o7QUvs1Jj6x4Jgok67KhgG36FdXE959hn6v6qWndgrudVUtSFk6uXPVBEuJUkRkR",
  "key41": "637G5VJTT4P9ZpxXvHnsMP93Fkctznbud9HQUNxLYiz8pMRcGUX4bxLQTqPPBM7L43BPSBw3D8DsYrWrCGxYdNWo",
  "key42": "4VXyeEgVEFnRXR3QdyeBAEswaJY245zRLyLtmoZLZFykcHP5GD5TQHy7qpe8CGMVYndvW2PUuR3DdVgyyHhRGToE",
  "key43": "5rPS4fr3eYAvmJCJRqaZWcZJs51s1CBuEgHScdRWG34Y4qxMf7r2WYLPReqmf7fw3qkcgXkd1gkU91MWCufUQHu1",
  "key44": "5mgZWwZRpq89v68ngvUHHGAy9UYPooegEPTEv9TCpnzyD9KGq7zuFb6Jeq5NBaURZDMpZ4N3fL5LnB4Utk1tnVAP",
  "key45": "2EVYXzNAqXMHHQkPVY1RhKRkWX9C4oNUD7xop85ymqPvagBEHraeappwahmwJco54Ws4485USQHsc6VTT2CTNrWT",
  "key46": "3LUk6S2FXGrJG4BNzoSFxG195A282FwAAyqVt5T8CjypDyPvjAVivShRomLpgkyesD1uDEp9fZT6xni1XJD7H4P9",
  "key47": "31HNVwspD5NnJAVDpqNXiK9M8gBeCttcrkSN4UDYCmaDzRfEamTG9bvr5ow2vaqkzURmRmAByrmAaCNyZLwbfpfv",
  "key48": "54WS6ny9pcU4W1YzwdigE1kYT5P9uRg4oQcvgfrJvrVTRKLus6FZvKsbUGuc517VvY5dNgAKYmFwkFtMHEcbLqnr",
  "key49": "2Lh57dP1N1sJfFDpmdQ2C5GwyRKAjfruVmqwaLb2FhDdAqEBT4Pde6GceifEtV7srRVTz5ew18Gkn4o18226oTfs"
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
