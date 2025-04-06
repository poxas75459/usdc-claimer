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
    "HtmgKeXb4Ds4GVRTiV2WkdznWkSp6FvZvG28RFcWPboX5GZNkkpLuhHdnALAtJe4yTQbHRCJRKChRpzLqxLQcPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rDDswg4VB4JpMrihRe9jr7xAoyeAc6mSDgxUFpTA7eJVLZUruTR5DW6YvEM4rteH9okQgBdMnxMw1uRFwy6zYjJ",
  "key1": "3ZPmERTsv6qdmCbUY6ABDsEA1VFDTRgnskUCQmTqtxnaQqVhS3UpHpKBuA6Ekp53WL6ArLQSgSuzBLxiJABMiXgy",
  "key2": "5NYN4t34WGTU2wBoG6R73KStUwxBFEYyCr4TCmyEURqeVYjN6YGMNtD9myfq2X75f1Wzr2XLmePZxKCiHyYCqrpZ",
  "key3": "3b7HMd98Z8ZGj73EfjVFxvNa8s1Un7cF5howBCqnd2vDaHsDC6MHqsqsNLyhzkUVf37VPkpqeKjZN24Zxhsom5Xb",
  "key4": "4NPUZ7BuvBCzJQfVqVJNbzSD8M2hy6481NxMyEBMh1yKnJfGLeN6y4zgcnYYGr8gWSUNiqz7uPkGKb1LtZ1EMiS9",
  "key5": "zPqUbnaYFDZtZ3aT91JfJBUR69sdLa4KiyxhRKj2V3fzzBHrtxPmX1uZAeinMNGzq5R5SE9Hufw5RYtXrfofSqu",
  "key6": "3sar85BTXR4ut25Mhk5hXzAN4ztq5PW6Hca6ouY6z7FfRvEj5nSFpWmXy5pxzp157wr2mbbrohFFbSuJWoQBcQRs",
  "key7": "4swM7rV2dXosRy2XAXFkt3ncnhzztnnNPpTFdtNgE4P2v8DQywj6Eu9Z2LdY54VkvRyMwhvyzGV4p93ye6hqWMBP",
  "key8": "3a9sRaNqGW72TtWDXRoy2CsU58VfKcBJC8dCA6qkPBYd4tcrMUTgYSeatwu5cQEqChBkXxKWJHmqffmK8pZNmHN2",
  "key9": "rqgiX3hcRMVi5KNtphjY7RKr4oR1tLTLeC6qBJxqvoBAB1giYc6Y8upVNaPEkFYNsjhzvVf5gqGdfCBqRv8Nr3u",
  "key10": "2VgtJnMLBo4zmm5d2e3FaiiiRwRL22d18AJbe8EzuVispdKcQMZzWHLSbK4L6U5qmuW5tMmqCRv61LHmMAZRovut",
  "key11": "2dYfN4VoSjGTkez9kQtTFy6sqap27QUoZCviPu92q64EauCZxqchFbny6ekoTF17ee4bnEhGHcn112CmtFbp4zxE",
  "key12": "5WDzyNu3X9Wb8KUHGYwGVcZB6MTZBZja2fjMrvGeGGufHPECwpLoEtxADNuhTTTYtRnfQXnZfg1vvQiFz6stvaGA",
  "key13": "CetL78AjXmVcGuDFEiHBRNwWdHHZex7UQVeoVP6mP8xSGbQ3dEBiVqFWuBgqTEiyYXD5DWdAvaMKdazjhf9Fp3r",
  "key14": "2Yxp3nZdAGWj6fXh9ZrrRuaxHctD98i6ChjNFukyNgFN4HGVvnbkFc6EbaapVb5vR7i5GQH4HBXqNgMwbJx8o9tt",
  "key15": "4CpzKFbQujpyfqDYGrG83wMqqGcxj5m19coxYnzntCVJnCc5293yJSS4ZJuVPdvcXEd5EmS3iCtk76CiE5Edeqke",
  "key16": "2vU4SyHyTcBjNrCXjanbVAXSFqRURW8H1oHJxSowotwkwJENko8o9RiXYENmRggiaGBnd7xYphFNkhNKWQzGHTkq",
  "key17": "3TZven2f1NwSXoDcTydFrqJv8LmJ6EDjdwmNeJwXtMgtrJSf1ctR5kQ6dpC4eFFFmWQ6byrL5HAgvjNou6Pt3XMU",
  "key18": "4A8NCjfMcN1bAp6vEssw8N5tVV3YM79kB7z3cNqcUd5rXrwzz13FjAS4XxJGG7X7vrBnLgtzBaj48fJfMBnN7XuH",
  "key19": "5vRFfcrTTt9crJW2Rfu8LFs3mEfyAnjAn4bVomJpmNB8tzuiH1SWjUtgEqezSoQDzvhbQiXhG22rWj3pQZzNN5Vd",
  "key20": "61uwGzpAJcQJQRHvTeFpKwJcNj6UyVP6ehmFRE3D6BwPSNg88YXkLSkDjnurFjHCN9Gzr9hUHkmZtAc7GLZyWHSQ",
  "key21": "64HhboaDhtdJHMN33Ciyyp7NvZRdVXuHDX1mngiKoZMYPQ4TvNnCFSAYa7SGHrCXi4U9SMe5yrKucQ4RjTSdmHMY",
  "key22": "49S2V1FYcpB323cAafZ3DHb8QNMr3F6zMV8zc73jSGEJd7NgXmFiJsW95mm8PYBumsDQ5GDK7EkGsWmZTUK9miUb",
  "key23": "9S1AjsAEVoQNpcUTRu63cg15BxXCykrZmYcnsFJmyaLPUg3qw6UWk6mzMHMoUNL44TqHc4GSNKyK5EXeAf52RzX",
  "key24": "g9FeCqii5yFdddedwvjVXmv7A2JQ5zQV5fFCgyom8Hkx9QVBdgNuND2WZ16J2acZ9t3qsnwgwWWccz1YSURybor",
  "key25": "3BuQtDJJ3nyz7XrD6BYi1uhuabk4iUMVxQMk4ciaB7PEDaj4JPZGVXKmBRShy8fs6nMSDgy9D8bkZmGbRoh2o7WS",
  "key26": "3mw98z8sjJHiAD8sKwGMThS9R1vJjbX2r5kPJqKjJCDcZun2eBQuKhmXUE6k5ULHzwAnJKCMcErjw5sWq8Eq3Xhi",
  "key27": "FFTLBxbvTEpNEZzNZWmMML75N7mLXaH44aeLz7PFBCJbZzYWkPQEg4gzAdEw24V8GUX2goVBzZpmG85ULqrVH6T",
  "key28": "3wyBoeWhFZhQ5bLPThdVGAkxMeqaRhTZK7uxZRPGiY6NcNrooD4qXX34GwsHb7He9Epf6fYLnJvgRAWLJePf6ABM",
  "key29": "3f1FtypEdTqJ7d7T2s2FrCGSCrUvYwEEf4s1q5M2QZqoB7v2J4hSjninXEjtXFsrJrFs8LFAQtkiTspxZ21rAf3K",
  "key30": "22h42b9qqXmZaZBffZZogdYDbGWiY9khTWynBwjpqRugFybEEvxwYfBd589wGbg8zmG2mhTmtG8uAtEX7HqG6gnF",
  "key31": "VD6bG8WHydgHydWBgn27yPt3gNomuVteqk22Tchzztcyr4WH6PNDSvk818ge7JPfy2RzdqXh3KrU6BpzMTN2aaa",
  "key32": "5bRa9PQNoc8r5nV7JhwyJ16AHTHTQdwQ7wjaZzt3obw6Jb9sTYA9oEG3drfX43UfB83B3EFfTW7z75MEMwqEgKdD",
  "key33": "32Dvobdb7BSLt9yBTKp2eCeaN4jXg3VGzzRMHNcJEinKFVeorZ62ezcaW9JKipReBDFR3WPRP2WxLNGZ3XmLkB4E",
  "key34": "61hFBDaWPsH92e7BcPiVZ35PCqSoaxS26zEwSwfc6jSKnQv3PLX7LrTbUNa8bBGrQr3zfZMaqWhrrqTFMW5zqU87",
  "key35": "4UpnaBim8suJM5wnGjnRz3kEWcsxbgQbdnGTve8zEvW9e1THu5Kgyj8Ngyn3WfFhsoLFzhMYSJ6PmxUKQRD9F7z2",
  "key36": "3huAFJn7uf8Pm1qyqUmxArLRUYLtb8zTWbTebUxgF5iC92RgDVEvK7CRvqPTS2JFVJE2TDfWMfzjuMeuu6TTgLZr",
  "key37": "SE6XAdCt4cEu7HPPNxmzZC6ZK9UKxTBXXdoa93itA5YpK5jn2LcGJVawtZsNU5oq6rgf7fepDN9k2osz179H6ZN"
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
