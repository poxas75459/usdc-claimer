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
    "3VxWVh61XKkEbDFKDwB5HgnNNS68EPd95vGuVhaGSJbFUbfPCvggcsfwc1PggG8BM2vPS3KEUTPVFtN3eiqd8qET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bdJ2p1YkP24UEUoFpuNUMTePpWANZqM23EsTLQiZwtuVe3fFKUk9pnFdh85188PxfZSTYu3ErqWmzGSKcrGrrKr",
  "key1": "3zVThZi6GroiVXuj7fRArsQcsGeV7PM4et6T3KarnT25kAL5hTm3MYwxhV48wwrqc359cQv9PtyKtQMp3HecL7zd",
  "key2": "2wMmBzMbW8nPqv7gmETtZGKuyKDwQUQs6xm1teDqjTEmG64MMk4QT4EAVFfTKLELfotBN3iHdmLCKQhMYvhXhtuf",
  "key3": "6QMiozDNKVtuzLeoS4LrHL8dK3VcKEaFHqrnbxv6LXVe4muhSuejfoJNsvXcx3AjAB7CZ9Ay5oLtVgQxRRCSjMc",
  "key4": "4odm8dbhMWAoVXJdmwD9hoCC3BiH2uxmWTBZCiVhBLThGbfdPPehBQNWsPYXacWMcQ735SdBUEcbo21kDiKi5HWz",
  "key5": "5D3XbRpi8z7LzGjngkqVPgSXXB1H5Pr2ovTKyLxeoXFDy7XpxPhwzL41rqQx6oPJW6PmxFQ6yibCm4LT2NJaYKmD",
  "key6": "4fx73x47WF3EnbwKCa8zmWD3wskVjA7ECYGDdzMVAHeqWsncM9xSqeekryjXfwTkn4GHEAGyLTkbaC5pic8z89Uu",
  "key7": "5bLenYhBPwFiSgPEqfybYrP77G45zbLeV3wo31rFFR28VU5wqWH3rq95FUJJKAfZDbc85M1DhGtzDQByZjkG7mv2",
  "key8": "5SAAfXMoZcNxeUyadc2YtgKA3yLr5evpFZVkVZcb5mQBrfvJ1drMPWhwvBGj1mUaguxskHrBTVbhKwTGrBF355mQ",
  "key9": "4GE5h1WeHjTzCZWWmAjYvsJkbuUk5HWTSfNCB3ZG3Do6Ztm2HNiEmEiprye5LTPz4Tn7Fcf9nY4oY5sZNJW9C8to",
  "key10": "QxR12DcxsVVoPVzvj7NBBV4AJuRWv3ba1xuSSz1GuwRDMSyPptYh31BiJxDKrgy4aJuSsCTeRRaGuMGARkD1e85",
  "key11": "jEMQr3G2CnATjtKkVqybmjnX8fkBgdKvtPe4fVVt7r8vRaMAdhQAMRgg6EtrPwGeD3EXHo4YDzzJKNkJfyUYYmc",
  "key12": "eA4aAK6MdVW8ZxT9ZmC9wyEmf4mJS3xUZnR6mkfgGvY9UUKHqeX4m86ZaLkZNxJcwxXtLZ3V4M8d8Hje9sKVAQ7",
  "key13": "7uV5yrN69SdZQWmzfqhpeTqFE9NefkgpCy7wDsPupCXrXBjq6KJZYBde6hDQMCjLsHhUATV1H18LTKu4A4A5aDL",
  "key14": "PhbYAhe37SJ8DtMARHUakmAEU3VWq1QHZQC35sQdYqbR3zkQkNgByHamawXsQ7PaspinTAAw27bcY3YA4592ENT",
  "key15": "35QTTJ3gTWKNWNBV4h3eyom9RzgibQBBKgvM49CubSrQ2hy8hUT5xo4SGTK4TKrUBSQJtKyNZHGVUKUv2zrK4JR6",
  "key16": "HXWYrJ1r48TXxdgG2P3uhfJnJDotaKDYeEMpgoUTvQCpm3sRei1y9uvSAo2vt9vbLdFaaRTcR1eWEbnvcUSAZkV",
  "key17": "2Es6JVQ3bKaRB3DsCgU2io4TMf8jfv313Cw5zddNWDYN123Cn3iKW9QMhwHY5eSL8TJTiYUmTDffYVzJdBbR9jtP",
  "key18": "5xU4fG79MuEfj1GcNj6bjUJp4Ab111M1uV4HVNcDE25CLnHefh9Mu8EbdGk6mrhuh5hvYsuyb1fZ33LagyHUjY9e",
  "key19": "4aaYx1GsRYgT9B8J8etPphwDfwAkVWngL7SHafJdVv8KCHC24mYYjgcKFSLsUpRXDU5X2cd22iw7iNE1uuAuxUaa",
  "key20": "8PnNmKbh8pt5iPXTrYChkm8jpA5mhLyERkRLAcsZjhLhmon9jSxJjEXsGUSG2tdiYjqoJ7RkoNnx62EAXaDs5dy",
  "key21": "5ZaczcjTYwtggtFU4EDz94CupeywSK3mgL6jM5tToGBEWK4KzmFUwn3fzsBv27EwRbZyfzo8PnLzabtyuKgqDJ6e",
  "key22": "5vdx68z1mhVrobdtRhCTXTwGuTsK7SXJ1sXaU3AGvdM4VcJPMe58gUPS8pqH2fMeNUZshbXH4CdwywzYKfGZtsiB",
  "key23": "4TBfsLybrEoCDgpKonNkzS6vKs7D1yCGgtzPNQtECdPz5wjtFdpRSUcMuSGdmR8dGS79rbYqhNRpmienXUUC879T",
  "key24": "2RBUeTXbxg8Lzmm9BDuBssPKwcwSq3g5bQ7A4U3dtMZCf4CGkiPqRgtKr68U2ZRE5AF6QySHc4TM2RuzyfbFTJHD",
  "key25": "3bTzisJuKG73WijhuiSmUVdxWePRan6KfGQrJFEYfM27yHf39XGjAtHMPMPVUb8M4LQVRVZhFELiXW9VTkuWfvtr",
  "key26": "2SDR2KC3HMBFcWTpub7yTeWSyFUwzptkAnQorDxPPiF4Tcze517eFduxctHbAGYePPrjMGc8ujpzZ9caB4kLvBs7",
  "key27": "5tVanQ7zo2WgFvrqekeP23k2E5KifPLF4RCQiYt6xCt4LQFSfoQ9w2Dy1s3LYq9NjFVQ4wp7ARcu3p6HCvyUusEG",
  "key28": "41iGzo2BzLqArZYEayAV71wHnQfrtpmXinnYRCdsqzLJXV9AeSxYGhL4ZqNXsXxGv5bGApjBm2GeDFr2pCmrYCnu",
  "key29": "x9kJyyDnAdxGnHCUrsFWcyUz7GAPadzpDsj3G75dTf6RrkKvRmQSrGyAuCDusqh93bxnXyaF5C2iRzLjS2VHYxv",
  "key30": "58jqTFqpAwXYEy1efwMxRpbe8RkBJhMz95RKFZHS5ydHB8YrDag4DPBjVKAAwvH1Lc1hDMwvd31YwySd7Gia9eqy",
  "key31": "4iA7vfGMag4PsUS7zZNXyQpeoz74424PBnR3jZygqmmk3yupKMZ736Di1LzEocmT1ZbNUz6DK6mZ8StC3XwbkBB6",
  "key32": "3TLVp8GAP2rwZ3fe86b25PRrUuVTV82UT6GDGaGLwPQtLkrYVx6LYZJfsfYakeiv5pZhSyEs5DWAwY7sBjCckvMS",
  "key33": "5wyoUZQ7znAGg5GBxGtfuRrCxpKSaSFJD2QnjHThmm4gahZn6UN9QTXPVqtrJfzLXRKaHjMdsN6GbqRFKob4QQ2Q",
  "key34": "1gK6fCzy7xLNKH8qzRc3NUqeWcMED9a7mjg55q8houcbMKb4JWX7fmt8uTz45cG7UgebMW8nWaUdqiMidc8BvqS",
  "key35": "2bM44ba5igzXwKBMa82k5iyusrEaLK2FRD7P4W6FTfjBvD12BxoyuirnZpZCJUY2U8bs7HdbgVJMjqvXVfH91XDy",
  "key36": "VcyLJZpQdmF4CH7ch4Yfg3AH8NYG4aEVmDsDsTsD7kdKAAgqkwM2m1w7iRpiWEf5aYNRaB6a4PJwTTf1ng1LCwX",
  "key37": "5uxbZLDRoVzTbqUZgWqi5NChb5NtmdJCdAkMU91UZNKvk7127AHUH39HFVv1FE1pUhcWXvcfenmbHjrEUBJKzJsw",
  "key38": "28svNcRohxQfE2GqZFUya5htCEEFqsUL9LUUdpJevWCcA8yD8ByyYDZKDCDMLMHV4cP1fagN595qwbq5788xyass",
  "key39": "27DWeQpeNbkfDVQ7rEPVoEtN1G8jmFtHGxKy3YHrWtRf6ZSHjSf5VXErTnGNxFtqz63JLasN1eyjXdRkSN2PDQrn"
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
