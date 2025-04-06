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
    "5G35rmCmWGgo7h4RvmghLLbqrJX3LRRAxt9n8qpkCciFpVTTBRdfm3v9p495odChJ5bmUF1wYQDXthDJ58fbbj8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c6bgMqqasZZkMrunpBXZqv7YvhWatTHJapkAHpWLBYucpdp5WCFYPYC3MuqVSmkX1vnWfBSARhk9hj919V4jg7R",
  "key1": "DpdmMha9xzPoLksL7MhK2vPRJBWQjPHoiaZXjr382Xy9TdAuDW5AwBVxBZE5j2bwVdmPRpGsG4D5SNRcnUDywTJ",
  "key2": "5F3jsxsnnNiWviF4b1Bze8Nx7Drj3mMXHVV97h3sxttpGz6VoKBazPsQQSygFiAUokVdppMejkrV58PfiQs2eZ7S",
  "key3": "4viMJSL3CvDfsV9TibeM4PBehmHt8mDQt9jHtfrD1LiBsZeun6D2oyhSjZt2t19wre1gUFGmL5sbfSAzSeSkc9po",
  "key4": "48qhAcACXfFYh2gnXDXE342BsqZ5tpHQjDhwxozgnE4hxi9YwDWSSB6pTbxk1FxrYwTdDNAT13JV17ZVmCWvFhgB",
  "key5": "4Q1USYQfDgziP3zv79h9yW58FvVKruVVLkQqzB7kGqAJsDV6ao44gUEgyeb5Wz5FT1dhmUtucwgrC9a3EywUxdS9",
  "key6": "5Tre4jgV23XkPhyVD3Pom99GyDAkJz9j3anHzNKvQ9ZcG3r9NWyVbeCAp1CFtPw4c4EH1UUfzwQyRxXvZNv1a5WU",
  "key7": "3PAXZm1SEWhgjwiRnTTUW4ynHQ2Gpwfu1efdTxxAjrqcjhhbwWzMwPs2Ym93kATSjHUnmipvqoHJLdDmMUxUbaDU",
  "key8": "3gevERD7tEcJm2H7oP4jD4Tfw9VANzVhVu2ZaR9BggpEbWz1o7C3mDqTyv9VSR5dPmVoYrn3tHbVEcafHMS1td4a",
  "key9": "5XbJeU8jgwc6XxjZQZF2PZBf9iQuec572LjMppMbFkxNC8gP82CEWg9bJMakQe9uGT1z2CQXGtqErx3Qy4SLQUSK",
  "key10": "55h4irjCwjG6eMtbGx8LGhFHALNKpSG9aftuAMnXidPbsNc4MDyxiUnBXeVe6AdeBjsF982t6BrL7dsKuwKq2cHS",
  "key11": "PRe6LP18ZRynMjkYU1yPxHJjp3TWnBiGL9iaxwiwJYABPDa7UrgSUqUeodEajPi3kh2xkLJs9uKoY5m2Lx2Kgjh",
  "key12": "2qdUp6L1wTfsvct7obUxeT81ywBzww4poMhQ25ADcxiJvmMHppNjzvC8X9ZVkEzDA2pdkyY3vgqoiFzTyHK1nzN1",
  "key13": "53HgBdjGnPf1fhTKoGZFNtvnG5tbDaSUKKzCy1bypz71SC3y9RmPmuGtzvkNQYcnQr2S2Y1hsP1MTHF3dqr6gB2m",
  "key14": "37wgfNWrnnfg5fQDtBmMUeffzSByPcS22YGbe8DHp85dMP2iv2rKSY7Cs8vyyaeibTkEb3ibJschZsqUHQXXCsiJ",
  "key15": "3FkAs5vyHB1CZNJesfzrsTKzjod76sRaoXP8sRokG7pUKzhyuQdmRZCxUgX8ubkCTEiPAdziC1Rzx4wvNDXyG5z5",
  "key16": "3We2AhqJQWmG26CXCjKJHP9bqeHkCftRdYQ8i4s8fNf6Cih5Ux4UhTiBtqWVS4pHSYVFfembiVJzzgvcuNuXitUx",
  "key17": "29mAhF4b571vjeQaY9WG9o4oaHGosDzYM4P6WudjaSyoqS7tYNnwp1yKW72Hns7rwrHr4nXixzrZsPVtRe4syDqr",
  "key18": "3qF33U3g3PTJuuYL1AmuHKvNuphSfexyTQkBTykS7AYE89LMhzsursDnztn9wGrMcREsqJj6HzW5UhT6bdHVAfzM",
  "key19": "k7DfiFNYL7tuqXeDwE3aEa64dXLBRhtYehLiMRwCMARr2uwhXT2KdUYYU3X1oD44Ty9A5KvU7SDyv4FHqXwaC9x",
  "key20": "3vxonJw7EgLWpcBbbgX4e5GHVNhUJ2JCy312hcN1HNTsabF3KsyRTQwS2ZrtsUxeb1KT4PKsjBuSWBzYizt1QZdj",
  "key21": "3kmcerctJSKtY4KTMDkEc2F8EpRNg35sy1KqPTBwktyRwLWu4mDFTX6ASVgiBwm8SLyK3MoKhSonHwtDf6s63WA7",
  "key22": "5Gko9ADPgmDispjNGi9RcWsQtPvUeU7rGAxA13Z8h4JejuYx2FSQtgEB9X7RdNb87DqS1E6UmCoXSLaMHATTWakG",
  "key23": "5wvoAp2LJzgS8nDdyGhh2fGggEgNeh8hxMPgLyju1oqFWciq5Z5S4XfgeqaLbs4KkWpargYa6ed1buXw263R4bC2",
  "key24": "2Dc2JuMJv7kGTJKcgt5pB8BZCjyMBR1GK8ceH2B6WSSNz9xU5uMfTV8HcQiBpjwkM3v3BhHEuEviXmBLbQ6qndFZ",
  "key25": "xr6F461pUp1FX6nWqgUfHDEmj3S3UHGA2V3chbwRkWBzshgkFg4B3TGTCvby8UEnjY8rJaPVXbezzo5vyDH2vJL",
  "key26": "3k7kHpW6kfsM7FEnew9sHHhquaYivw5kfVqYtMMdXmBzTaBgQZuQNJS6ptybypnBe4C5qbXY9rovTTXuj4HX283Y",
  "key27": "2orgYyZ8G5e3yUveCm7W8LhZWSMrgC6ikdCyomJ2cpr1zocVF6ZjZWwq6s488KvP6y4Jsg3gFXJHib3L66fREsBR",
  "key28": "rEEKbXKLMfKADikfPFDtAyARKmUt11WEWmRf3BqcobG1DXZ966f33ofWijTX3Zhx2PbejmLV674cbNuM97PFjkj",
  "key29": "4Q1tqR1FQ5U3pQXtfkf6XZvDrN85yJBsw9GMz3MqvvzEnbo11YUF7vbNS88AmC1DWNgkM9Am2xZyYpd5cvaWCmsz",
  "key30": "4D9XxhDMekhV97YjruYuESFKrQ9QLx74TNVRGFXk8bKYtbcJNAW9VyaavxrucXxf6GZeeYbQ2bSQcibNd1P9J2Z2",
  "key31": "3cunq2gPqwQNE5cpMvP9RU3BhyoG2WhTKU4zB3vbz2myUT22GHcMs92hUkaSNHBbfM1unV15D9euyrKdD3zFrWSY",
  "key32": "5UZMW11aBey6rzdjaH4DA5XnocmD1h9bkBBH4sDtHtFhksbB9c25jQkPabd1dzRMHYxrkercDjBFP63ciCX6ea8A",
  "key33": "3QhvtGTw1efnqvYdXSGzZBuzSRbehwadYAgwyjQTcoQ8rGFufYRJNG1cSzsE88j33g4f5zuTesyRfW8YH41s3c3o",
  "key34": "3JMFdjdyWzaurPffWVfKzzu3e3JBCQUC97yqmKFt6PctuHoodG8XG5W42U7pcXqDPRS7KfhLWJFCFEswjE759TkV",
  "key35": "2Uxg1LGy55jgpcuamLT8q3uXMzGz498p8Ambfw4USbqL1GhcviAJdXoGqw5sXqf5TfBtHzPbZVBvq5Z2Nf19BkkE",
  "key36": "2Fu2ztfUyHznjWZTy4XRW8GJvvuqUTZiB7mZ9G2F7b2XTTRMi47nhrU9XzyjL7Bhn7rSugJvLY4wGJKcwZEmGWLa"
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
