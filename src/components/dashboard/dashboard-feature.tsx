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
    "35bSEjv5suQCQiPcEEbK2AhNUG14DuEJAeXZ15EnrfvAbQcDKYPwktCLuczbntGux4fvK556zM9BP2L3bJV38NRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Apy8od8s1XAnrvY6DxNodMYy5XAC3HxyX7Pthr4r8ESDepdQ5MQYrzz2ffUVcKcAmTdJ8vuQ5U8H5ttQHqkwbfQ",
  "key1": "6PnaB67U7sqhY4sxphmnS5MSkXbia7cxc4NmyKvpc69KJCzPyea1uygTMoHqkrdGtms4A5hEAX2Ygd56GL7Rqv9",
  "key2": "hshhrpegphC3uf8u2qN69fRv2dqo1yxQqeXH2TFEiYWFGeVoHngNNiXUs2N59W7RbKKUTeHgkQfLiHXn7was65h",
  "key3": "29dkuehHN65JPSYmLWexnc2Ucd9u4uM9pgQiuGkvkcAzn2EGePEA6KAXB6Ljy5HGmsF9q4xEkbLJPJ9iQWSrp8W1",
  "key4": "3tWNDKxbcym7r7m9ki4NdeJV4JeUTxpYmai3Fin7dMQd5f1HuNwRutp7t8XaGApPSTd8FE5p8iTz8sdFAMy2LYX",
  "key5": "5P6FoExu8sd8WaGiJXYkmByrbjenaBTGTecbSTNwFrDHTHLC8A26y13kBdJPS3SmLadb1mQoVWKxXhGKe5GYPrZu",
  "key6": "4kF8p7yyGUFUZX93rEp6hhRv4T2D91MgAcJwYFVSCc3y2bgxsxWqtpvnqKHdYT6BJLS8y3MqVxBLJFSncmYZAZQ3",
  "key7": "SedkKDyXLSbaBCuVjgbbC2AhZ4SzvfAJ1nTgyHNdyo25yJco3GE2EnxAeexdmZ8yPyRg5s3zacNqc75gLyVCvXQ",
  "key8": "4BugSsPqk2ioBVbjkRftpwddFpgAKvuqMuz8F594zL1M2xTP8Ym8NKvDtwXtKH3VF7QJMXKMxMLajEh6B2QULyDv",
  "key9": "48xsFsGnHAY8gRupjRud9KnaxoFkJAFUhTLKHLUatjiMNiTRKWu5gY638LuGjFtrnL2Lyg3JC2SdrCT8CuMh7KVR",
  "key10": "4WPHxxP387LGTSzQFzL6quAC6zYMx79WFWCCcNFHzsuU4C3YY8GeFhG7iiBFe8RRpq7ZuQk7Z7gSZ1QVYR3oqTHo",
  "key11": "5FrZaRpMo6B7Z9uQEWwhphQWjrmQBBnq6cvYWz9CrLLcmHLLoRGN8dYADX2C5MmuUCmm1x3q4cPaX6VMdYg8gaoo",
  "key12": "5YX6NcNU24jioQeawh9MqQfTmjUHN3yVWa7eSUFrjN5kH8po78Ss1okZfqSfm2LUna18SB6f2F2JbZyTU7nW88Be",
  "key13": "3VzgB1gA1DWy5k7HVrF84aQGuf43gcpxJ1oqn36K5juxqngCaDAMAnZWP9oKmgKu1koD9w9Fuvnekt2J2YsBPCYu",
  "key14": "3u7eLfEs7564WkHjQA7JUJ6EALHttZgSZdPywBY2srUxLWbtvC3sn9vEMXYCmRXZLicCvu1R1b4Li8xDPS2ukqp6",
  "key15": "na1broSdUEmwS9kZgaPAC2KpJftdLEoExmTagPWhRYzhAcNismwdMaDNjv8j8tBAYxk1p6RKGCA7GnLiFYHLm9p",
  "key16": "5tVcqJHCypTCBQStZynnvdWMiYHRAKXuBqcwBFeUwyvdrG8McXj48bNx44HCRxEwUrGMFkPQgpkQV7xTsRYfEeTD",
  "key17": "3pNX8ETuuWroiUw44yEKSKaUmGfaGr2gLrg221UmEwp35PfT13CZjCnZZ3JXgVz23Gzb8ASu6US4SzxfHkDpUcy2",
  "key18": "2K25aRmzCoEs5DZsJrQpk7EZ9L5DrJJGrK3Zuzy3Q5JWvrzmG4WF3FmrxtXdXUEpGjc6415yoHn8s6EQtVgfH521",
  "key19": "3NguNQ2iHAkgXSCYZ2FooJe5EApvXACpd87wdbVz1b15D9M5fXEYXCEB6oQPEFu9yLQCAnWHnf6ay3y8FNANEaHK",
  "key20": "4cFnAgbjaJEVhSvfvUUfvDxUMMzyPNUUeRajzexewapM4s2uWcpjqjYGRpcLhMmrvLTaNi3i8AfdZjmt5AXJYkR6",
  "key21": "4M6kPJbq24yKAAAXPgiYtcCtGkd8itVgXtoccLLq68kw4CjGardvvbiQFMKzbJs7s2B9MNQd2dGhnyq3CCz8jWjS",
  "key22": "2pjgneKZgNRLgmjmDnxhy1szMJQ95MPYYaQCmjYmhJyAq4SWmojY1prTjhSGTBbhrDxH49oFXE2NLmnhU2X3Syii",
  "key23": "5tGjQLgkzQtxzEtqKceaSLGsMY5ZoqbZBYFbJxs9TR348ycLjLStwfsh52Zm4wbpVcFsKkqxjSgfzNgjyYwHCQ5B",
  "key24": "3MUvgydQFbLaKhYBv463kJCryMEWfefBCDju31tnE5aFLr17baLdKFE8ruXoCAGLkihhe8QLGv6DjumDzMVK3zPu",
  "key25": "34xCAo4qzj64t6oDucQn9xjUYQGnGKSsMQ8n49GLmBWeudMNu1Z8reESByowRNYRMobuY5xA2LYgzc6PHKgBKwfS",
  "key26": "2Y7UKJyPVvTsVTY5cDevPu2cHVX2mEZXXv1Pyd2C4p4zb2jme68VN3CK5YboW6r1TjGhjeB66NodNKrKpgXe47DF",
  "key27": "2JgoeRNqfrPcKa3uLJeQ4BBJfEq8q2zkRnWCyAUJRewPLeGdBqCGGxjTwnfyCxeWMbkb8Rggi6t4HMArjDEaPZUv",
  "key28": "zzH6kqDNh9a17xB5MRSpotmNMAUafSUrBEYnYDM2mSFFzJd4RVeEbZx8THYGiakXjDwtuR8AwAQgwAr1rtaJ5S2",
  "key29": "4H3o51mr3vvLVLeNhVrpRvuBs8JqAdw74jhkoVdamMSFgzA8i3oqfChseCffyaxGYNs98pGG2cf6yJZww4HKfpDD",
  "key30": "3jcC8PZEjMuBNGZKnDPwRK3o1EhKzpruGrCXGgc6qYDu7hAk8rWoYE5FVZjBwwUCJt8i7f3rSSMpk6CoMhn3Rgzn",
  "key31": "ofVMioTaaH1vnkBaZ9y3xxrmTLZKhaCGyW9uSbZpsPSHAo12Qud5Qnx7AG8ipcrRGoFVwptruswVqgaMjPH6JW3",
  "key32": "BEYjYdXTbaZarsaTMAJCmuUQHLBBwKhFkNWM1VsFDzH5jfXmmDYFgKHa2xm3Qfw44yeiLEjhQm3RK9X5BcJgHAn",
  "key33": "43tYaewrubMAZ9n25GQMhDaD6rkDirqvGr8u71B5DN2BUtTkUfp1syS4rYr9fPYPPvSHNELtASUDSmVUHPjTH7SH",
  "key34": "4KqgSNWLy5DuP5XrTdjxTEVPpjaH41ztewzMdFPfNHHRWGFutEwidszpWoAXLQFVFPTecBQaSQagS4LQeGneCYLc",
  "key35": "nnEgYKDQkYNRAHEiTXD8jKXvGJHtprzBbZrmnPce3NQpFNuJ6T5dorGDvxG1EKedMpJhqfhLNZyXiBGvvB4xn6h",
  "key36": "5fozbFKvzcz4AhZXazj9AskqZwbq5eRNFvAnfwGAryM4xsNhrX8iVo22NXrYD6kaRzTDAs46bDeSWkasrwBDUcnu",
  "key37": "2NnxAa7QBddzv4roD7TrNPdCybGP1hbwH8iW3f6t9MmF7pSnFeVSHLNo2NAc462VUYeGVVuQoB5LTXi2p1FmPTJL",
  "key38": "3ez2Z8L2qumiVs9KsinPSJq8763h4KxGzRZHKy7QcckWQ55D21zS2viYSnPjwtRjWPmYmkWERnkL8X6UT3in69JE",
  "key39": "57SZHavqr2Uviy5w7tQuDAQkV1G3xJR7SUJec2XV5E9aUoMxuXM8rggg7zA2oVRZJ2pAUeokhUiXVTEezgJecGVe",
  "key40": "653HhznfksjyrP5MzB2xz5D8cBe1cG3Wb3ubzGynxJciKWAhPSAcHWizvXs3C2nmeT1Xhw19XnYnTt5Xymb1BvqZ",
  "key41": "U2Fa6Xh3U3AQqfauFvLY92xMEA2WTFaK3Nc5jaPmjZJANwpjJZCXZLrYRRbeEcKREf37E7hy6m1V1WDb5EFR3bV",
  "key42": "2v8AD3paRizwrWkxSqed6dMWWx6LknHQ6HNpjnK8oVMowXXLtpJAPT2FgqVtcCAaNyvMw9FkX61cqV6Dg2AYUAvR",
  "key43": "sFgKddEGKvKpTsYE4VgscZoeyqLvehtMyxF5oDs7xjTEj1L1Do2j5KH32disopCYvQQtEdyQztnKimk1zN6S7mv",
  "key44": "625AU4ELixqxoYfqkCr9SSnmcGWJ84X1yTuH5ZJzd9rEgXJPBWHFnzTGPkxrLvVQsZsM8xuakpddWKkxmZzUFK2W",
  "key45": "3XYHzQGh7XJgsjuazjgt9Nhht1ZKoMPnsGVSSYAvVJ9dAv7XqYjGZDYnbnGjFT95nLiqxtaMdZ7oKmcmoJJb3Wvo"
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
