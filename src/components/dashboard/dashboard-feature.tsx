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
    "3SYe29h7wf7Qi8TxtH6xrMfx35UhST89UrTE3CQ1GeiEcKWGDNYgbLdWyvGGE4EaVjGH14EK2ynACm8QWjcvUoL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sm7Cq3tChga3E3gFQDBh38cHezsX88LCib6bkUih5LN9YsvUHdY4VzsqhSpBShAEC1Yba85jS3mYgRSiDbtaArR",
  "key1": "4cXje2P5Pn4hDFkD6e7rSn5BKEXr2XsrhYq5r1sXW1odsgACJWR7UyA1efNEPBM8RLAQ4pVoZguXrQAdrCFYgnap",
  "key2": "3JE3BcZGKSjWrwFhqUynmFX1dMxBTF4fhoXpmJFD8VrpnULQNxqdBDiqGTptNdgwBT5rXqPKuvk7b5omSBFvtbNW",
  "key3": "3ZMQM3U17cAuLvnoeDToPAYTo1zm9y2H98WCePHwW93PvdCG1R6SZ8q1bc2XVeCM6tMnFNCMr4S9Pyc9363f6svR",
  "key4": "3WZdSugt7DDXP1ZaWN7YPLEJQUHgGYdSDrcQTCRZmreyH9Wx9ekCt7bdE2XdDM7m4PB87YWEJp7heSG5KQhG4bbn",
  "key5": "5ywrEJit6cjJQhd5vMAdRd8FKWsxmGCnurrdUcCKVm3hDo4ajRNnakdvRzRG1i71VzirErWZy6vG3Z4iwZosNDuJ",
  "key6": "4moFa5Mp6tVMGUjABaN9Fmobgye2yadtFPuxZxT2MUZXJjLAfPHmkvFruvpfKzc8vZgXHjxzyGvw2N955zgi69t9",
  "key7": "5kC5uwKUHRQrhSNLhMkSns4JWUSmbUGN7VScQenZ8AFJzoQWES3VecUU8rdbtRE3qcMNgdcsyGTNEjY1D93GZbio",
  "key8": "357Zpfej3D6JHuUxP4ixZVziBLP845SbmrPP64DcVeL39GpweUvKfwNmAgRuWs5cokndcmg5YtKzW2eZmWU45KmN",
  "key9": "FrrDqzUURBd1hV1FZCGY4oFpGffavVwwAsbD6wfDc42gWdUsaJBHK8tN7oc9xuKsEx9Z2eCch1QSfBFTREFaZnJ",
  "key10": "4ZJojfZD9VaGYuT7ZRrvV58JeMECr5m9gHndasBbLauu295rQg2JSdcRRsrunW74xWqj8TqdYqx7ACtJBBiG89pM",
  "key11": "mg8je1kc2ZnkA8vdnaKVi2fk84zF1qqN4KRqbqE18zy8gp6YVchgjXohQB2UFp2xwSenBVT7K64MPGymRFaZd6W",
  "key12": "4sy4jo6gW3jVA6z4mtaJCzPTFh4vrciT3JnKukcLDLtZCfGSBUeYZGT1pv77ukDygkZzHQc2AonD1HSP8CBSXSNe",
  "key13": "5sNqkDbd1BoY9NUGBzUN5hsk63hWs296DrCD3xYRRmxMTb6LQUHk2utjA9qAfsctod2Gzev2v7eHXBcrHA9GE38x",
  "key14": "65r9cWN5JHpBwtfG4tA23YKwiqbowA9BUJkcdJzFJEx4w2kvsuTqrvyfN1rn4eXrQ5KhChqpBYL3g4tvNz3U4mb3",
  "key15": "51Mm8XRxLgwcD37gTXDN6ysx2yUrmwSJRVqQRE9SPzgox31GXyUgV2TqqKRzAvRjvuxr6oPksHkpZGhU217jSHNE",
  "key16": "hBFxKNaijVJexyT5aMF37ryikLzXomeDtRw8TmnjJXb9RXrYAHST67AvRmu3datGSYewbrQqFAre334ehQDqc1b",
  "key17": "nkCbLhzxr119a9X1i8ACu4nTeATtoV1TfPPrKrTEJGyK5FM3gDyLqgr7SfSduhhPjbaNwJiHywk134bag7q4b6K",
  "key18": "4KxqhojCdYduZvB8GYMnQ9Z3bEMKNsS9HF2B49LpYhVkMVmANzmwfLaujKzQwp3XRHpRZ68EU9KKPt7Yone9e4yi",
  "key19": "E3CSUprh9PXBNZn8qXzud1PsLmMLSb6oFmuDNe1cZPAVGR6TMPdYrLRH2SDEfhKM3MFuHzm4YbLTbvx6XPNLAq1",
  "key20": "khmfyTVC2w32fiFmrvo1mKpGp9VATGdRtxQppXkbyZhJUSitNHtUpDNgAB9FtEhPAwArXCM9kuANVM6KSuGgFEd",
  "key21": "3Pr7YhcSzw3rzktnWTN81CSsoJ1Y6VeukknWJDgSeeuhWPzwwFjxM9pFjkdQvPmF4qRzfoQSYXk6UWPHsQrxZzgC",
  "key22": "4sRvRy2xNWVEFuKVmqM3LwjMHtoo9z7YeNk7LYA4rL4tajJ8yyuBn88z3dKb4a9kLD3CGSFsU6wu1mNiTdzz7pXk",
  "key23": "5Dx4WoefiUe384SpYUqzyaSJuYhpT8CM8vCnFanjQ9FPnKUXiZPUVY95tWqiuES53jHJ5SrVLGTPtEk8F28LmcnF",
  "key24": "5Rz5zzifepQLAUbMMvwoQVy4N8KVsGHBbAwpaXEpFzfj6wTXBqdfEJk17qVSNhWD8hKbsLPXckNDAsgVZrY6p3VN",
  "key25": "477aGh2dgZ9VcnE1fjVaXT6EuujtYwPcSD5vkBVaH17eeuWDLxUFo5bnKWhgJCCjiCKt6L1AFYn3LFzgJCMdg2HW",
  "key26": "5c8cZH6F2oyw6hnQ7C5zogevSn85emvL9essK1EDKVTiXAyDZdUxJEQL1Pq4VBYU4hfieoBdLwLnsQMv8bMsGjD7",
  "key27": "45NEjW3N72AhimrqConzYhcZkgQh46kFiDbvAayszoZN6vDGEKPA87FAiAbAPnmXfAVuPYwj5TYVDr3VbyyN8dEw",
  "key28": "y7tjyJgK1XwwkBuaibatkj4wup2iRSebHjLJmYaJuGtD2ewE192aPtVaATUpYoGbkyjigc85oaXyMepSqwgUPJS",
  "key29": "2sHpuVydCgSbW8VNhWYqispBN65jj9kcyqNKoyVW1eAFwNvHpB1eE3eAEcqmAVhXoBGCk7U5ryrMZfZpXWTwzQ82",
  "key30": "4gZDQwCogfKFtrPGdmXAH7c1jLfu3osAsd7GwfHdFfSJomwHLhqps4Fq3iq9GKECCehNwJx8wrY2npmE7F6rz2PP",
  "key31": "547CNXJSn7H3CEGqEdtERgDHDwyEzU7H4pvg8miEqijamwmKdfnH2aWpvf7Rq89DAfHpQ4BxwbarVd1sh3HuiPag",
  "key32": "436oE92L9h2ttUQTViSU5UYZmEJXZAZ7ame6pDsBigXziJSUEVqXLVtJ9ZS9pvy1knyCctYHq3QAojEEdSr8vsJF",
  "key33": "2p8gcZ154YmMzdHXxK361KzCVLPTDMVTBob8kLEsh5nLy9eSG8WGwLf8DNAXvysLZQbH6eGm3jsvzvosVPqZnyM4",
  "key34": "5y36yqYbCXcRaxWkmWjnw76fm9R51EL2wNwQVs8q43gDDk1miNeUb3j1UmwceoLiCkNrZQjNmYZi5jwA5Gffkqhv",
  "key35": "3MRyMqfDWroYixjtjQdA2bWWnNwjfogLEo4ct3oM3CLy8jm3ASiRvi4Eo6JULx2TYbKE1yy2MgG7V5R9TK6zSdVV",
  "key36": "47qgTHUn5qPCQdHbBcbUGyTU5nGXdwYr4r6aa43PWs4YHgQ16howUB5itNmpWZTnSPhWopuDDtQ7trkG63XgESsk",
  "key37": "3fKqo3C1Q3mh7tLvusyg4anwmk53Ve2jrVNSWa6f4ghpoADvUndFfpx1orzwQPWCrLqNk6rERTV8jjcwqz5MLWVd",
  "key38": "27Za6zV7EcSANuG66q6KMDkkxEQLaANysF37E1fev5b9GNNtHYFvJ3fApzespNjWqBZVRRS7gCkm22xGjDYxrm1s",
  "key39": "2pEjju8hu7oprrF9wMm436tH7aEPTCjQPu5kGbMtxjkxZWzDKDNu5cSueEW99i4zsxtNq7xNLAa87JjPJRXMeAHx",
  "key40": "fLcJu8mv2TkGHbVasheHyvQGYeXXhAoyJ72h1gqsXnrhAkVJV2YQEYus6ZtJgEu4zC5BY5gjxNr7r9XEi312xrw",
  "key41": "2rKLp5nHSdaDE13jPudbdgijbnBqHoMYo4DEWgaLUhWjPqUmNd11jqNxeTb25VDtBo3mAGxvQpwm7KYbKsMFdqN4",
  "key42": "4Xd29HbRayDpL2rvKhnqaK9oa8kigWJN42JMJMjGN8yDG4r5G67GUnUwufjW3Jhs2sSFoDAurMojpexP4WYytmby"
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
