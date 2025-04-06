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
    "5XCfFFzYJqawSQygLWZG7kKWXXyu8MLp5p6jSPSXeRW2txfjDE97AGJpsegG1H8rbk8YoeKeHUPr5i7qgUwuEyU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gd737nfw9KSZvDSb7GeRmuw9hfFsGHKXZsHuQ6LeJEDiNmZx6Zw4r8tGFpqJrn6jRXEH3Z8xEpQpdzL6vG7XUA7",
  "key1": "5qBad32JK3jJXyUWRj88WJ4vTCaFyWg9yESwGCBtSuASWFNP1pL1UzvHHi5wcFGzftFbUKcQ1n4amKLQdxHSM4TV",
  "key2": "5EpKd5Kf8JhYGEXtZyfWEZ9kFKMXAeis8eHps2fqZVDYKKHcqjs96sV6dcyHbWW65PFp7fmLYeT5wfVLG4ezdjvY",
  "key3": "4XqSZpAyzahecb7DHJKSgac1FpxnRhC9xBR8UeKnWMY8eryQRCSksnLmDMUVAmh5oaScSGx8v2gScow8rLVdzEnz",
  "key4": "26XZXasdUJibmUYrsNF2kfFNuEMdQXp2sBZgdEAN5gkREFzt6boHTx73bbzL6QHUiUx81uxSQzisUz1jcxpJLCWr",
  "key5": "RVj2CUf1GJKk8rQZrx5Y5xGaJaQWxNrdnuPRbMsnQVe7vpSdTR8W5qpcRCaoNtHroCaQzxp6bkPUk5Hh6v8iSeb",
  "key6": "22STyJAygBWkAnX2HJzrqfjfjhAKaSZzC3nTBWufG3iFhGSHbfe4X1cAVxGpAeQG82f6ZZ3PFM78Ca7mMT9PfiMg",
  "key7": "5yjYs6WFrw1i6q3iJiLYRq5GCbJwR1nRRQurFcA8zMUqkko7XuMm9BrEc3G65ScswWby63shFV4QRQCfAYfAWxUP",
  "key8": "2jApRhrHs5EJHf8WzE2J6vgBNQ9gxHEXjjz3ndGeQvqvQsjWCypkasFFHk4MfTV4igUXyWJhb5dEM7Uxqa2veghk",
  "key9": "572jqQy5sbneW323rJ6BNS7QkevR5zJwWn1y1vrenmUcMNTHsTDtQDN6Xiwnqvac5BQxmstFRyjjTUdWEdhDi1Gh",
  "key10": "2jRW6fVm6hNvmoCznfNFhkVg9WnQPfJ7KLxECnxsj8XABcbbEqywq9esamD9mZdpxEbiTHziV5cVC2ynPFxKGjY7",
  "key11": "52WtoFDnpgpWc1JUwBXjaaR6N5NRmWm2jgiWhXzcBT6uRgD1wuZ5p4r351BnAhKp2N3pKiLSw8zwvUgNZDSp6bqn",
  "key12": "4QVZPCiaj1SrX8GnmbbPHnr1MrAJ9s2HnveLdto7JvH2JJ4ZycAS99HuDkkpD8NfFYjRh4dL4NBycvzMdrDpFJeW",
  "key13": "V6J6bW9urMrwz9coowm6JdnfWizs4bpptMJTwB57uTBJbMke8RNVkXLchcYXENnN1jmYh5J9GqmJvNVaxCRkzdn",
  "key14": "WvB2ZdNhaVphSsEXuXcdECDM4Wfe8NhxpLwarpDxkYgrmHjDWUGzt8PKYHcLJmZTYRS9La8i9M9jJUPBJ1QvdBz",
  "key15": "4zFN9dhQtLTtrbNKZ4FkB5fupu64QzrsgTbibZndcoobbW18PFuPYNGHjp1gtCHsoxvgpef8nwmnnY585hGR7PgG",
  "key16": "3TxPgRdg9F1ZEAbG8M4ppdkiJrTMJ5S2KSf53ufL32FbUGPrHeSTj4shVGdEB1zdpFkCm4jyrN2hymkkXPYwjb1i",
  "key17": "T9yXsQo13CzFuFKVkGPj6TPibSLemf1BkQnBx8fK2wXSfk5sBPFrs8gtQBLfdxgBwHv2Z6i54AEJxjstw6mb8WW",
  "key18": "2JWmbf5ANe4jjHFQDUh6thv5GSeJprBLSuyxEVtkZbYQD31Vmk16juvJyFvSuYSRR8V9q57rjiksnFWYeN4EQHBn",
  "key19": "5kLjmspcXedfqnf7AXJ4LP2sK1T46NPkiJMM7VZ4kLDUQmwDzurxfm66VjN3sBxqCFMANRFZkD32ZFtzCiaakrjk",
  "key20": "3J9UaUjtPcqUX4nPQDTisxh5Bvt8wxNrAk7csavkDXwydFNy4VmYTjPsYgpyHLAKyqruVCqm2CvbyHJUbiYihWF2",
  "key21": "2UQuMfqoe3axipCGm3UiE3xMPewpESy5VVTf7ejtmd7n9nuVpzdMTX4yqKmghAYxT9oniPcmF7JbXspjfWxvix7P",
  "key22": "56Rkj1yK9nb6Q26zivcFFZajw26B2ottqafJbvRtDuzFQnLc74BZntaejaHHwmxfJKNmgktB6auQRqZaQknY7jqJ",
  "key23": "29EHx4HzQtVQXRjtZeFgea8h2JFwjvxaWX1VMMmvmaLRxa5tSj8uP6bkvJ7RXHc6VurgWDwxUoY52fZiiw9yjV2V",
  "key24": "2f43HaQL9f83hYqj5idsJz3xQ8mCeAKxm3edWWAUtreF57Swh2jKtTaiefYArVgR6wtXrMsLsJXM2yeKzrUK8RzC",
  "key25": "4VSNni81LGe88N929NP5vWJcLFjgNMdwaMTsVK3jHxuqtPHnXCFY8Hi3a9uHv5MpjG4HC1VJPrK2z82MihdtRu6A",
  "key26": "MkBw4TvTHVeHuwqJWfDYEjiJZyzHjjdGuSz1w1BTCSakFUGZ357AvwuMnjebXiNqjvN3caMLTQdiNeDBMRUR8jG",
  "key27": "2d7Aj2U7u3HmGJQhX26S5VkURnWfU1tf1HVzXiPKS1vBK1EjVtQ9F7Lppf648upgcd425NkJh9AdWVv4iSFwey2q",
  "key28": "45p6XE2WaRJEbBSmjLzJHnALpU6VGqoPLYFSUkcfWEeua2BwhtyCaDkzX9PFcxMfd8gTBegZ2gwWMsU5SEZBbcxH",
  "key29": "3b3CGoiHFhY3jdz3iSUp4VYjCkWaCM6JGFNGcxLzVfP6Gg7hhMA3icsC4DCMc36hnVVEDrE8UWsdQfbyzafrezmw",
  "key30": "2qZkAh6HUs4KkRBpu1abhf1g7A1JHQgAz8DgA4frB44pxFb74C1Fxgr7nBEsqxVhssPCobMGKHGdBtJbRowzJFor",
  "key31": "2E1oW6sT8QVBkrntnkZnPYS245LRjPurgZJBiYwAw3V8VQGzYrc827ExKcSKnivHxVeQX9J2jKtNNV7aRuzBYQcF",
  "key32": "3TNbYxA4A7Q8whmPdbDroijZHWj5YrEHh3eivTJpadbLZBxB73WgBi2RrnVMU3YNiz8Si4E6aUcLPjZB8FGH79PJ",
  "key33": "4Qr8kbFSZQko2SGQKN3UmcwbikW4CtCF96fwuu7RBdjYTnzqDuvfv8Zt4fYoUnrchNWVmiUGMUkVSeFzhENSrNEL",
  "key34": "5ANZmxKncEXDfvKpLzxcc2wwngFnXu9QfLqNGTjkAMoA6Fg66o3kSG13jQkaUBxyu5mhHMhfgara2GBD9P5jYxfU",
  "key35": "5eVAEo7HQrmcrEXFNyTzbLPPiPB6afhdBtmJnNNDsC2x1EejjwWAr4NFxJo45hNPrMMk9FZBZ8HkuiYnQVjht8mZ",
  "key36": "2ARHUkYs1KKPA7qq8SDnx2L2Pwfu7cnYSVaqZa83WxLEdn4XgEvVZhYUzkJYHkgdfQVCL9YthGSY3YUFY4qsLkmW",
  "key37": "g1GURsXdpDXCtpSJ79We41FVjSdG1w7p92KEAExLYc7hUPRP32wDTNJTHHVtr2WphhdHFLXUi8b2FcY46BidEup",
  "key38": "33GC2xnLKJ641Cqkpcw3RsDvBCBoTvDPcqep6fLZfTKom4HS3SUXuBS8jfnfKSuUP1LLEXxHDwpExtQhLL4EPdXX",
  "key39": "dWjWi6AtYTthSBBxH8QQvwMBAkQj8icwckRKpcs5c7xBP4DGUSAyDQNxh2iKeDh569onLmw7DLha2qnabZn2hu3",
  "key40": "38Ru7YghwquL6TG4L8HnYswCKETtBSijtQ5a8rce3XBiw32ocEapTLXpmjWHEpeoZ7qpS3bmabgY7PkPChZ2puQR",
  "key41": "5gjizzpshb2gHZcGBGCB1T8X6Fk9rXu3dZpKG9K9XXj82twTiSrW7FaHn1dT1UnH8gnBxJkeoBVVz8W37BAuGJqM",
  "key42": "5GvtqHxojbuG34KPf28m1RyDjJchQyZnjDRXqPSVjbTe6wji3YQLhv1Mv59R4v73Zb7AngE9jrsjniWgnGTHSGcL",
  "key43": "56foeb5SKUZhgVWuqa9wcjWLAMz4uv1QU3v5ghd6u5ua1tvNUotyQwPkq1nrqhV1Kriv59rYU6rE6sRrrEq6rH2C",
  "key44": "CVw6drf6vHEAAVDEcTmidU3fYioCXkmZZLvtwEgnbGhuAp9n8ThuiKaGvj1vB7ZzqxW7A4SC46QXcQX8rfvgSDG",
  "key45": "cQLib4uwAcTEFAZKrC2Ge7mv9CwWHEuuGWVL1cZhAW144mzw7jA1uWUmvvgnhmg9BdnenubE5ue75jVkvHBkgnj",
  "key46": "2YDrQgF9vxSbQs9FcZJCZS9QziLksAfNBAtJUpYkNoprqMr1zyPAbkd1vuZkLzupF3sbo76A3sYNFdri7DWKAxDw",
  "key47": "2HH7gTzSZ1gyryXyJpMGPyL8UQfiVxLyNvXmXEUR1X6ofjFm3LbWKTtnfibYV8ujgaNe1uAYw8LpHcSJf9mVSG72"
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
