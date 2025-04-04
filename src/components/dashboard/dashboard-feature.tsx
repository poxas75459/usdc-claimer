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
    "4r2kVRb5aVWxFyEr5CR4rnSBdAqpuejG5NqNCjGFSJucc3E774975ZJjKFk1ZraV9UNSkvUdS8EUthF9sy3gViP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58wtBSPvU1ptgHHZ8fdbnzUD1scsSLJfGvjPcukojo5mqSr8mjMecBpd3syXY1vnShjkEK43RhS8fxtFp1Tb62vp",
  "key1": "2xXbggGaZYDqS2QGppFQYY2deKFzxeR3rYHFvAfW3svgUJ8m731CYwTFsJueRuGw8X1Qxshv9LTpX29255JGFTLm",
  "key2": "4yUGY67SBDfRustiiQ4Er6FKfQSkb2cnB4xPgWLCfbMo14CnWTaXjEd4iprCVjVwWtGjMs1CLdrpf5tE3HNmhbNK",
  "key3": "2v2AFfmsZyMaDmWVS51BzGQX61JWpxaJhvFdbfQ7TAHVu4vn2fYUoh1PPGpT4mvxX7zKnkCKFJL2qSCvBMtAedQF",
  "key4": "5vUGtPTNxhG8exgeVBJjPCZdYPH57J8X2UW8qJyJRXAgHmpBnrAikPUSptrj8QjeGJysg7mNrcwEQMwJ8D3MAB7k",
  "key5": "5nf6CNMuybc3ftT7NF6pkPjn1iqFZWJzYB2wmmXHAaZuuTYfKQQwrzWZ9waexHkUjUVi48wCydqKpfeNiwZ746Kw",
  "key6": "9yoMv54fyiDj3Z7tD9jfpFcGo2MS3PjULGXnFgXc67BfaXKVuBogA22AJ3vpQwwfDkoQrr5Z3PMDAabyskpvYdC",
  "key7": "5y37oAbZso62T6TgAv4GsMSFMrpoVdCrYqDEoCF3o43fhnYsv7KXopuUPGkPWngopvkPzrYAGRVqZ6Sx1ne78Rpy",
  "key8": "46ySJB61DsETzSE4zXGG7mqHkog93UPRxQuyA6g2838eLt8PEQLxdkPxrbZWA19VMrHo82Qr9sWijtLt3EDZtAjK",
  "key9": "62bhnkBV6jt4CzVDvXTDWVYxEfwrtVKvFs4mQvC3ckiQCWw3RF8EhxPSMjuAhz6EXn3JMzPgochpJR2mYKSkbeBS",
  "key10": "5odBTycghEN3CyCa9PNEBNuQjiWYtEkiPGYYYVHcHuwGmcQGYpkxiJyVBHDGjxbxqrJtgRb4Qatm1UzAPvuHnBma",
  "key11": "RCJsrZSitthv6x4pGPnncwwnnSDQduGDp8ahkaeA2PC9Do2SyakSutmQqgyRNXgoxS9zSiCQt1KqoNUd7DqbdWD",
  "key12": "23md31pizsxdggcWkSPt8tEvVFZuHJVyLz8CoPGbEHokv7J9EfSPTCbgSr9veFEcj19CZ2czVr7yBUpLJ6o2FYED",
  "key13": "4NigEy8yhtHJ3QTAwQYqVnK17vSTh21MKuzq9VtbC9o3e8f5Qa3LGp24iRB897uzPJN3Nutx2YEPwhxcuHZN5C7Z",
  "key14": "3iVTFaU1rqLB9HFnHnf1GUP3WkJ4xrSsB194nf1w2VsJxrD7G9enkjrXoBxLEqCUzMtp2zbtraZrFnP8rSjPntFH",
  "key15": "suvoS7stPoaz1JvgJhdcjih7pWC6RR9b6VHpHtEvotbR15eFvPEeLWHijb7Njn5uRxCKbsrmLG7K6Pyp5BAjmtB",
  "key16": "4D8Rns9BrK1mq5vYtSXhjV1H2gWAmDKfkJpBFzBkiM135A9DpDGpVCyC98X3Qi1XUwyyuBKhDJryyvV3d6GGPEw9",
  "key17": "3oaFqH5MreyhMPGvASyqRnkyk8DsMdixFXCCnjMSBnBJzCrDrzTLPG24xdy4n7NcZZzRUng19qq8uaqrohxDbGVW",
  "key18": "2hXSfRDXqy11zw9iakaLjky4AgKxr8JDq9qhPkmobFDh3mHJ6H5ins56UnMfeaUU4BWdUL9DyKxaQWGo3eT37Cd3",
  "key19": "3chsL3cXCnhqMGh8s5A5DEBGQ5qBMmAYrUnZeWjsV9Vn3egayehWxjraGxsirMmvMHY9ivWhrD7xZYxFjzexwZTq",
  "key20": "3whoqq9Gb7zzDPARGfg7TKa6hfvUYGVaaeo94Up7eakWZsPfponLM3zyqSGwjhXZxnUBDP5UWpQAgfVr2SB651DM",
  "key21": "2YvD7kpijD1c97BLSAad5z15s2aRd2vDFb7jgGkV8jczuMWCMoX5PbDvoMimASj2RPBJvAfxWiZCrQ4um7GwNcpZ",
  "key22": "VWeQ6DpavjJwJKS7WA84TUejUsY57aDS2kSSCQJK7eze2hiTDVGRJ152MkV1e7kJo3KcTHjU7wtKGuGS8zterg1",
  "key23": "47pVr2XkF7352vNrz5yvXLP3RBeQSBLWsoVQ7jHghfGcxA9mLBJDecYkjqqqTVdRCR6VYriikZ6KDLjY4aUi9VA9",
  "key24": "4vDSmFmfBeU2UzSVkiEj6Ku9Dmq4mACHReZzkFmFdQYSQAkbs5PrjamERVpwM3eMw1yK4jzz9btngbFy4rgofuHY",
  "key25": "3TqbLUh1guSmkpyhBXY2ZogfLeCRRmC6VgxjCkajvZzf9iRCBkUoFLnVTpWTHu75CixjzYJRw82ox2TakEosNkWN",
  "key26": "4tgKk6Q675HWXNsyqQfNn7oWf7pX3jRYyP3owDWS8PSSr1BW3NCghRGrY31EMsGftes5B5KF7eRfW49iGEobbcYV",
  "key27": "6NywXJe7fSvJcd4BbTcGGbwexP39gerL5TNcMAHcxFzZN8mFJkyTypPWkDQuFt9hAvbf1QYcbj3GfoYS5CUGydK",
  "key28": "31hWWHUnXwPbE3g3pvDyuZsce2avKBNtj4mjsRHacjuDKT31pQ7zt7WWceZwsAJFE4DiWS7J5rLRqrhyC4dvenYt",
  "key29": "23cbem3q1Rnna5cPB77hhT8yY1UrbgrybeLzADHreAPLeMZ7Z6GThXKAFR9ubNuDngX2as2RhWRy6zSCeDcnT4Rt"
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
