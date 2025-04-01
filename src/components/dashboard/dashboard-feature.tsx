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
    "4BwXWNZsFCmMeiUX5V2pNnukdoYM9E7sEMXEcevedW7btPWSwLwNidGZACJxgBPy2P5ytgqeNh3Nm4JmdbxHqaRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "US58gVCfiAvD4z8Dtj9MdtRbumBnD4PPoQ6oQLCS5uj8KrzBoKtF8P46TAm8qFkVq4zKU5WGaJQsvNY7zKec8qM",
  "key1": "5czoU6uKmCtrNiSRXELGSiLXWvD4RRy5uGA5tMrsoSsTREg4adtaq8rwQwf8Dm69yQfP8KWcKjE8qPs6hUx2sZce",
  "key2": "4GSQtmTVeqU5rvZ7Wxa9eA2ZACkLPw1eVnyxNWTHHur8goGcpDJjp6ak3jVoCs4xm8VnLQTQDLLqT55AMErQHSfq",
  "key3": "1n3uviAizc6j8emnVKG5yUb8AzPgetUykUaBEbK1kwDEahRahuhKuWE4jPL7yehFukRRRFyGhCWmEiL9Wf6UFSr",
  "key4": "5Vq3ESaQgsyTzJe1Ej6BFbDi3dj1Gmq7JtSqLhqrWVrT8bV5kKQRhQ7rdJXQzvaPsgrZ6wTv6rvRu1H7sVV3kmHd",
  "key5": "2xydcMNtsddEsS8MWmseBvnoESVXzrsde693TMLruwgiq6NRWc9EzZvdV8836K2U6wziSN8rwPtWJ6kM7PYvvL6H",
  "key6": "2KUc1fz4wUMW7tMzRKW9jkCPdEYYTHsYkcwRH8v7E89UmtsL2jwhasfu8ETihyjgfPxJkdPLNtTqnVGSGmsLsEjb",
  "key7": "3iuj5Q533cUUxFwh2TA7ztVLzijQyqfhk9F2XhXudE4Df28quJE5sJnyeHE89QGNeoGT9Y4nqARKZezncLrjRjRS",
  "key8": "vg9xMW6548cwQ7h7ji8uKcfbAnh3LmWVCdrE1sUhuMJNAE8MPEpbjRzFqMTJnoZSqaZWhSJLBgMp1eCYQNSpTf6",
  "key9": "47pjY1c9um7GVjVWVsnSnhxVRwZP1UN7bcjwYaEE8BJ8wS95b5djHMioVR9Nz3r5ze9uwZTXc9SxdQKLsBHScNeD",
  "key10": "55wruHhUGpY8w7Msz1exptWLm5p6dyghu1k4q1T3eHR7wFv4KBWdXfipNzJtWEGbyovyLx9GfzheJzWuhpCdeB6R",
  "key11": "44X3JGspyc3BRBG8URgpJaqU7RC5PkYTX5Kzyoyw4gnmiusSwysdEygCLPaknb1biyRamVVm5SFMcqbvZhMgVV8Y",
  "key12": "5QEVr4Tn8pq8iof3BXjzH8SM57FJsm3vKGHQ2D648KTaTPpDrJ4MpDuhXEdDxQj4Jt4HVTpYMe7BGBz9ooZENu3b",
  "key13": "2UoQxRcrUuxMGjkvf9BHSuZxergNPMXeT28Y1vSxZXFGJQCy4PThzsigZ84GGaLKGS1bjK3A3AdCi16VPhbGh1xh",
  "key14": "4Vj9D1n8Go8jLFBbdCbAMZA6ZeivvbcqwYEbeEduFjp8UVTA8FJJavNWARyd1uMY6a6zFthndfUbmh37cP1GSQWV",
  "key15": "32PvhSXem8B6T1S8Mthw13GF5YBHifGsQBYAxrj5e9Z73pydtJXKpUdeVffFTZMHgSyCvisgabBXTTt5owW3cmNd",
  "key16": "2QVzC4WrPZHQqPZMgGUfn7n6xFcyFYQFQ4PAzEpqeDKFGf8AHKDNFJv6XFP5kaDQFBpx59FVysdq3WNqjxhCA6SZ",
  "key17": "5n9pVhTERi6w92XPaW2GErpmLhc6pRGWWKsm7UGk1nbppGwuJDBpt5Xquw9txvRg4zkP7MwrP1C3wF15RmEc8i9a",
  "key18": "2a3n9MYYCbzV45bnhJ86CnvJQ8CJxLcD15DhNHuphfP6xKA65sVTaqjjJ8Vj5fVof8LQwi3Uzka4mk9unuK3ebMw",
  "key19": "53AMauS3JbTDAkHZckmVPxcuPiL7KPxhnXt57uRjoxRSpMFwkaFP8kNfNyrK1wtq7WVNj18VywgeD6CbzXdpY7jY",
  "key20": "2iQGAGTt2zDD6Cg8tFxawcJToPEqxpEuVMncDNEdbewEvAAvmgXedafXNsbToeRg46p3HMRvkmexbVRLVogn2A7k",
  "key21": "5pC6n4o5toG4fko7YExqYx2VoY9Ed4G2GwNyFydapsft6AvFPyjpbSAieArs6SR6wbrxfmXBCMgjfCVtuGeBDE8r",
  "key22": "3qy4gjj21nSy1jLvqcHAu1GsnVwAhJEzch7BbN9GT1bYQbT3dQVaSn4dVmKdK3B5BniwyrafUmmkhZWxLBzRrE1i",
  "key23": "2hnzNpecYVoRPA2u9wRDgus5RDRkThDtUo6bjcp5tD4eedJK6si4DhY5TxZLxyH2D5xhk3yXbRz9qXijzPtKUaGj",
  "key24": "3ZryUMrQrhQQGjihNTmkBmPgLdkfyYHhpXgBxokvUNV86jJRrUdavZenwi31fqk3S8PCkJEVYxxNBrSMPMw9UmV5",
  "key25": "52wWsms38a7NZS19jGtakB4o9FZRbHCra9VJNoNPxkUD1D65kDGBv2W5mDjT5U79NA6x98CBAwrAiwFrkW5WydWn",
  "key26": "39T5tSFoDxxahZK5dz3wzPXFwTrPhq3u6gDpWt8BmNLR9eA2JPrqHhC9bYZ1Jqr7gvzsw4QKZ4BdQrKKSXKKWiLe",
  "key27": "24oFc7fJvvgyzehBuotX2jKVvGGU4cRK3xdFmCNdnR1LoFgp96dsHXYdSWHWMgHreJqd67ieg88u9NzzMFWytaq2",
  "key28": "sqcbVzoeoetYKQKD47RMbZDenT3n2ayshcDzjFCA6pKPAc8ZtHkdfp8We5oey6qBYbjV4cS99xAyK6PJfzwxmm4",
  "key29": "YBvE31yGsMiWYuhzS5niXKrDyi4RRjJXBPjSRTaxvPGc3L6ELRHBFAHEfdNsf4foycdFWoGZYPCaNqLawUxBdZc",
  "key30": "3XpGqQVouesBttq1MrtHGwXjrbiQu9RzUGKUyRPd2kmhw6DgZn8X9j1pKVgLVVHuhnDkDq1hKNMKpzxC4kEjEprS",
  "key31": "3KWn7XJLhXdZcudXFcuuRc7WrkoQtDr8uqpdN2H7XPp5sp6gsS6sCdc97FxAnnvamw7iAYtFrMNc9cRjdzVHH1mW",
  "key32": "2zgQGQZCt5DQofRuZb4W8cYAPCcTbPePSdCrv2uWpL7c398WxKcCkLU5oToJ2dAas1XQ8X2kA6wZbfiSHGUCv4Px",
  "key33": "58PfTV4P5VucW9wRZJtVuenZSqACC3oC9kZgHSi1aiGhYSzgEBLVofL8DB2vCj4vAg2PtxPNUHskSqAKqthzy7iL",
  "key34": "644Hvh3ExQ47patefxXAdc55QR7Q8wEzBEnJ2yKC3fvJMTu2BWWVtYH81Ege82rN2nfR9spGLojri885wX8Y57Sj",
  "key35": "42J57mPrhXmwJYQZfbWugJfm9cYHe1gDAbhdyZGkRM3Ao8jM3coim674KvopsSL1RPHtBWJ6RCDyEwioSDrHQ6uk",
  "key36": "2mCBz24fGAfaLn7evWtRY2kDC55hokLD38tJaduLrqte5Ejftdp2BZDvD6tgb6QNY9yvuKBKqVAxZ8542xur7zkA",
  "key37": "3S45qQhLYYigvDkS7xSbH4Yr89Hv9DktMaErhKBahrrAZkYsxHwFMs73DNVvg7V5NXFVra4BosTozeqjufHtyDMU",
  "key38": "2hYoW45xvC3hdoE1NYbaxZhCoiU1KnYxd9yKY9jrP5SNPxsLPxauuE3a2LjofnHxHSQKbMgsECCofRVCCHyec5WB",
  "key39": "5hSbSNBvH1uHzcu5HN9L65eMYkYCR16zcHBhyBfbE5pFWAYB3SfgmesJzpb6xyq3Uz2W8m8wTBZUDYRBMNEyY7Fy",
  "key40": "33KyRT54uT53Meno1iHrEbM7RJJS6GsLuXvVoMLXyAofoqxXrL5AqFee1uE7JCBJzUS2YUQAQid8QpYFKSgRbCe8"
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
