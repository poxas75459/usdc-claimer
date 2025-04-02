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
    "fghimQivWdiydLyawdP3qgzyb4zgF9d1JAAxdHdhb5xMSF1hrYWNnk6ShMByWc3WWgN4FgkCQZAy6Fq1DKBKr1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u67teGsEswbz8cZoef9CuD7V47AXFPo8WYnd8aK1j9AU6R6NfoTQvyHJs2XUkWMn4RdJxFTSvYWNFPb8iranBqH",
  "key1": "5y2xS1RryQEieZB8mCsGUkzfFGxraJANDTbfGu7etipcrL1N6k1o4M15uVve7KKKjuLiUDZbWUbt3jw47hsdCekG",
  "key2": "63R98fZSAbxVaCQVBgN1kmTa7AMZn3CFoPdFYLT62kEccrYC8PcGgPAGZaDMfAatTnbr7Aw6ADR89RMsPeBRUqun",
  "key3": "5MebfsDfhWBLt12MdHDph2bF5UqUFSQSEXt33uFcNfyj2GkWtoNTUnfxpUFsdCTLacPVvs8huQyLLJ1xVZLhLJ7E",
  "key4": "5epkTKncFjYz5zxVAS3Nd7xoLN8npoyyhVsCXA26ZUQnDLsjSrgmZSzwzx3PsBR16NdUbSPgYRbzTpNvqi7zvVWa",
  "key5": "2RK4hvLsLmRErHqaTniUCRWJ5iCERG1fGC7uzMxzCrdAkSqcLgPGkiWQ6EAHVvKiQjzjwvvWWiMD7pgW34VMMVgq",
  "key6": "3gWWA8sBhU8i2qXfvoL7iQ9axkjdWenbcgVA2TQGcGy6EAAZdHZggttPcsvxjivrRqp5huUknE1yBTCUrjvh1rwk",
  "key7": "2cmuG6Bys6VeEwZ4Q6jcsjcm5FH3shwDfhW9TKfXEiD4y7mAzD2ZrzKQuF7EFiRLBqTELe1Z21mst3Y9yZXpXtk1",
  "key8": "4zrfHAujoGDa7VHQX8bsgJVDNzEGMLqzeZ9yMNTNmjdV4Ghxt93HaQy7DrH75uCujak9rc8nWsMTS6fbDamPqNE3",
  "key9": "5j6cz67xfvXuFDRxtTBaYWkK8kwvyjEZpZL1Jz7runEaGstXJDBooTZMqPup4TgPNuh6BGRMQhJ1s7TFsAogv1PA",
  "key10": "4tK52SqbK8gMqWgWa44pP6cGqeSeV1w7V3MHFVheT9hAh2Mzfz969wHkp16essTJ52Mb8rG987Hsx7CGyiRZyUPa",
  "key11": "2BYziZDfBswDNrUrpU2iYSajjvmHULSJJw2WFv5j8r6mmy46uUQYJj17NKByDCZ7yoT71af3dJL2cQLVnWac3K7N",
  "key12": "3ZUFidU7saj5SQkw8GGQm7JrhUAfeWiz7ZFrpYNYnGgZKf64NUpj8de2SCMDJ54gfrYk5dzufjYhN8HpNLPGKC8p",
  "key13": "4UVoUfJMiXRZ5s6CNih9yhEZE63EuTH9EmHUsUXEYrc6SnJcBBDvxAiNw224HvDviFBZdkfsVbEMzqDhzuUz1h29",
  "key14": "35CWyhGdhPFQNDSAVWP5JXyTouEEow3y4eZ2iF9HpUQjZ3pK6EVUpd4Ry3ySxUGZXcF6WEtuV383z1arcFwzX5GN",
  "key15": "4NiQqrxrqhWKxV8DC9eoCmquTgQc1Cz1CvjZY73pcR6iYtokD76MKd79MAKLyS4zQXKSJVtjqcXhqCNPKqtu5yWv",
  "key16": "5Jm2H1PEAZ6qqGZgYT9vVSzFk94pfYGSBvtZtD5VCZB1zhgSFqxJ2YYnyEoJ9aMU7mPJS9PWdaYWMu37aStfhXs8",
  "key17": "tshUeAuereGdcsCKCuP6bXwqTzBFukLnsdf9LZJe7CpC8HQtKGQawJ5SCSmndWMxA9V7SunH2h2DXTwjoxHWXwR",
  "key18": "5ycLuGoNJLP1f6SfKxifqRyJmnpGvcVf1WNnrpwws7Psgu2LgYdEFo5xWXVXkGKt8m8mPftwgj6bToRCGxkAhzLJ",
  "key19": "5wK54wfUkokqpMzbZqLWsDgCs3CckMecf1feG8p7S4jwFucie3iV1TZ983SP4mry4yn966hfixhZKsNqunNuirQJ",
  "key20": "4hWG6VikYNUhGHbt2tV7YYpCjxFbzmnrSuVjz3kRkF7EhaCxaDHH3QASHQX6W17s2JpwV29LHyNs1y7fRfUCdE1D",
  "key21": "5G6Y9L6e8SN3y5jrBEBL9xchvJ3fcJF9quTj1PpMXjQfHwRrNKGfXiFfwQafSxvUN85LUUAoqmx8bbEx1F9HNXFn",
  "key22": "2VYqFANhzZM8o6FoG72thThzFKAHDkTNYy7njumz9ZjE2AbqLaeg36WKPMat6dq77V3o7YEUiFdcqRav1Wnm7EcY",
  "key23": "58m16Uj4NXFxJD4QQjBp9a1HRjnRdjmWEhZ2v9UsPp2NxCmMZ7inr5YD8jVdhhZLVu2kZuWrvU3Jgvk65FC149Wy",
  "key24": "tkD7BdAqP6D4kCULjqf5fdiSdyj5wmD4mta38GCFrmeZVZuz2TzpPCwmtgQ9juvSD1kk72s58Asu3wM4n4i71V2",
  "key25": "3sRzWXseC2ZdSYADqPCQTsTxA4obvL9Kf85XPdwy5MxwxM9tYwWvw42zHqEgowV3Uq6f2L2X6gssUtPyguZk4n9e",
  "key26": "3vDQoM29AkSNdYfyKCoaXLdmuHJUHsAHi82DrZW5h1CsNnZTx2siFZyi71YCTJJrPi79yjevE7egWEqp24kT11ph",
  "key27": "21ugZFjjyoXBYH74W6bnnBp2GPftD1rmwW13NMGf3aQf9NjnMzxzXwj55rRe1tePMrvxmJvnxvhgyEWbVSpeEGhx",
  "key28": "ZATJJzs5Vhh4UXURCpQeDKfCWaJknnnFCFd5wtH6UQd1pHMb7zrTqyKQEBxBGDEVBjibdbcFWicSoMu6VyCr1op",
  "key29": "kPsbiZHz59GReBejuwYootxig1mDaM3jiwGPsZMGF2j8Awy86HDFh1xkmXtVce5WTFYPoArz4Fc8MBD7K8nMqHp",
  "key30": "4dSyfgpN8JCc98oZhV7jDytYQg5uQeb7ZFkCtZyL8z9osWnEr64mWZk6ErLRXFSgeJWVL4b27ADkgkrs2awnkttA",
  "key31": "3neVw3xm6ghxRtZSi4VswtsYiJaHC1MubFjNDsa2DE5V6WeU4p9mDajXoQZvge6sjx233L5mJ8akmd3s9pksPKDF",
  "key32": "49LZBR1SBnjnxhM8wofTrDj1CvbTKJkWCYMrkLvA7DGmMy73Qbh2jDAVW7aSKZfJRj13w6UfMjgRGujpJ8JpSfiD",
  "key33": "ZXBCGdynB5jUnTSR4GKnw4YhMakM4CXejB7csU7bXzgU8AWEE8rqJwHBZYnBxVAjjLjiuFXvu3UccY6HLE3p7jN",
  "key34": "2ew5KipLZKHn249egBSVyKJsDSYJHwXNKLgGYzFLNZwY8ts7Eg1yAtWUVi4QBnZ8KAKd7JZjS2NTogv1f794LN4E",
  "key35": "4GeJtfoYHrSdbGArmZApZM8moxuLme3UFZe5eoKzi1VSj5Ethr7m6XntgtofT5bGB8yPgdbpgFFt4FdYqix8ft8b",
  "key36": "4k18Qi1v5QjPAsC5h9ufHHgNovcxejojMg6h2bvJY2sgXNJmhjdqWzvTNeo1DKkCE6WjLiAQ48PF46iHrhMpbdtY",
  "key37": "2pD26F2p1krmYjBCT9fH3GGzxP1nngG8NhgM5gQiqTAhradxyx6atCQi2dFs38n3CAHFYDrNT916NGtBVV3LAHRU",
  "key38": "xLh53PbEroew4VTvfUiB5vKe7gxXoXVm6pPSVEsTK8HYjcEJsfZ2AEy9ZPaT6eaDadW7PkK1KJSvZCZMnmxZ96m"
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
