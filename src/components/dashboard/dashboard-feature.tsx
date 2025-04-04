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
    "5QmK6oFHXZvimXxH7iDEUQDkcAU71aWDUaFHhvCXzM85gag22DnRwSWJwMqEFBqJm3T972oZNnVCCGerLreQx72x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "247SZohtTyg16fzhJ6riwMQNa1JFZUh3kFTHXesJy56moQeJyiMbpFHS2LnFQraCVN2LmVaP7cfq2VJ5z1YVKgCZ",
  "key1": "45wTxnHTHcKTK8LVAkPrnXu3BvkXSNS8UeciHeZfn84243fpzCoM4f4w1FKXnP3zmLp2hh4J2wwKhK3G3hgPDgtC",
  "key2": "2YhKd3PngmvbyWtRiS9SgwPtWwGtsXrmDkkZxJE2dtsZCZis5Lyp7T6ssnNjzKTHgF4nRgEoth4ezwfj32X4Ycx3",
  "key3": "3Rzc5y6ewV52HAfDepDv8Dqf1g8Vn9Xcnoe7AJek812QNZarzZ2EdQDvF7LsDxeam9LbS6DZb1hcDQEGLqCFg99P",
  "key4": "4vgqKL8Pvah1u1ToVGuiBRKS1n8cWXPcVzETWovto3YBTGpU29SxkLqXWW459a4qXp6YqaqzZ9h3wGaze6BEhpEJ",
  "key5": "24ANyTxYBhTgBPz9eRAT59ReSz9c9mFzftFVS5vSjKV3iDL7nBsmmHobcQHHGJJquByLxyVu34Cw8NBw21KJAYQq",
  "key6": "2147g1fszHQdZqCZq7nYNtBmwBWAQwA38cMnQ45FKp3TRyRZyuMxws8HCgzY16GgwPuFqtwvZLGef26zJNZFmHTS",
  "key7": "3fTVAmX8NvT7D6mfuQu8t2MJyoBt4kK8GMFq3fx6ck1XK6bKPe4REKAPTXyiDCbLJdiin48BEmdv8urphhCWkYLP",
  "key8": "34KVxPL5nYXgnQvesWJ4hYu3dp8gZaCvqSwajAAQfA3G7zKASwwFz5JEpDJ16qimkR8mJRLBsdfkz8VSBpFayZrR",
  "key9": "356wCkJqG15v5k4SnorG4HSsdkswkaAh6KY9iLTMcF8G8nto4Cc91i2LD966kqTJDnr6AF3vMv31rKofZ2jZMTBC",
  "key10": "4hw7VF7zzGF6hqqr3bek4tGFqJVNGNw7CE4pkN7DjNUsY5RAqNMMmmk481YzAF18Sk3FqLXkRkucQ3TYrso9Fb8B",
  "key11": "24ZreFu4KJ14R1K3EUMBFsY2YmmKVyzehLzYfagrBepNvfnMQ4Fc55R6Miup4PktLB3yMHJ6d4c2Uc84v26zojtc",
  "key12": "52pDpdWCQxHy1ULk43rX9nmrkARuvMmuPvYk4p1PUtFx9FBADdZqGJYR1Rf1Mk6mgzqmBtPkYRLRSuADBNjQZ3Ui",
  "key13": "aMM2RZ5utjZW5bwdCWC19RrRBRu4D5SfouN5UyhtSSfM3bLaMRnBTqLSXGQx6WHbzdH4vrwRQWxK1je49xQNP2S",
  "key14": "49R5a6nEdz32NupsqpjAxqXiAsQNkfsYtGHSxCkzfdKaJr5EqJpgqPhc8P57k74yxG83pnJdVkfy3dALZFtnCJmv",
  "key15": "4R1uasF9Vtp2gSafwyiLzQTUCMxBQibNjsBMK6Dyq4AqPapKzUnL2gVhCXb4Rxp3DqtMyZvV6tgKCPcJMfsTEyxz",
  "key16": "hr5Kg83m1v218ftJrnGYTJZqTdGxwyofd7px57NXVHgFyN3Db9LPAMQgkrwJWdhXRUDp2oqHkeWXwhEPAgnToLu",
  "key17": "tMZeMgVLLvVEKaAChNiN4fnRLWcUd46gkk1yb7EYbRvCfZM4ofUDj3mx1sZk26e6LMBCL14NWhRsCjNnmnvcSgW",
  "key18": "58F7eRruLzapm44EvTKK2UBXMKJu4gDSs1tmEeL6WLyxJJb7fQj6eELZGRaLZ45G3wGgqSn8UBnD1QoHhCzrWUve",
  "key19": "36YwcFNnBtwDVgUm2oGpQknATPdkgKvYZG6cM14ZqLajDeCpZ8SKpByHi1N9oxxtRRe5waKueqvzyJiCbtT5ooPE",
  "key20": "2qrh9q2okQWzY45DXTVH2rBRyXmb3XztDyB9xESeJQncUF4VvXEyj7BKQ2Zjd542qTxLvvS39JJdn5xYKD8WCrQy",
  "key21": "MDU6YKtuTA6w1Lr6ao3jtGJw2vNRLBWdzLu6qzsVYeGn57x34zjiUr5sbZQ7LvU4eyZXLPZjDZUaswFqVbbTLE6",
  "key22": "5grxKYwj5TuwiqiDtH19qExdHGpduS5BThfxwkFGue9HPzwHVaSTjqVq6nF2MRjRzdui9RPB3QeuosHcCs3VihFU",
  "key23": "5NrkosXAcJnCGFRt3Yu7LmHbvqFLrBJ5bFDQTi9aqeG5Lxgb4kjSRhVRdUFxV1KFwraD4UsYU5uLoBaywt4tkkmF",
  "key24": "56DdPSWadLEYGdxfXmcQQ9voYo4vJ5c3XNhEWMZjpFkAvMKC7vHB62JKpoxbUH51q58pvgpDxdn2HrH5fQVw8Ygy",
  "key25": "51YcZeQUNBoZFEqJkzkuB2b7Gqgjk41qaG4ksEQ89utKLYc4a4RnjxozND7eds6MUf7JVnyG3uAGF89618wL9Ma2",
  "key26": "4gR2fxYKLtFiYPDvcq8BNvyEmPQpgodejioS4LBG53x9AEnv7RdevGdNwfFCHHV8ZeyXLXytthTzFiMPh6VWFdZR",
  "key27": "2k4HBkp6zxibXLeMDMXNj6FAGd5ytyn3BZiiJnQANLp5RU9bcEbvJn58F5L5rR4Mrr58Dc2eJqHVUAAhBcX5sBS5",
  "key28": "2jPNN5Qfk563mTTTDdBmc86E8hqURf4wDVAAT7M144R2cFYGqwB2YzRFFAH3eZeCtbqVLhtDLXgSwe9kqLrE66SH",
  "key29": "4338rZBQsL5PRkDuevLKwwvBeet7Q7vXWLckrHwm96zKfM4oRa99oA21b7TCLGqa1sFpRmZJkr8xNJyHazU2eXxi",
  "key30": "4Y4Q15yy4bsJ5qzjm5DA9YB5JYoPqhFccpUozTgrApvtmfkSZG11JtWBLtdG3F6vpz9RoEcnjUtG7VfDxijPbEDB",
  "key31": "2EuzEJSaZW55Ndp4zH5F2vXaxPMJs5994RCf2UszrevQdHh45VVRKjVfrx2h6k2xJhZLoxyNjqJoNP2vNT7KtD1Q",
  "key32": "2GAUPifAgaLa5TKT6hktNbeDQkg6wxvZ9ejWTSedjDE9PnrS6nDZHA6KDfCgMHvZUMaK3NrGfpV6usU8rSQYJ2Lf",
  "key33": "5agPLqf88x56xCqrMW7gY5b4iU4kjYecQ81SJvGLToKCmNJsDPZeQyCdzhhxRQT5yJ5GSJtPKRpwAy3MEBLPg6hD",
  "key34": "5od8u7cE5HuzhyLx2bAddMvsZmEWTtsCNZUhS8RqNVC8eSvK4gWMU3qDKCQXCC5JUkkq5Z2QvhFdTRBuRkVHBpCh",
  "key35": "2Jo2wYNMhCR2s3ro4rbr4KRcxGB7mmmbcEEoFrjd3Zvtq7uxJz4j5P8wkeiZPnCmigwDbGFuu7F15dMuYC8Jx7rf",
  "key36": "2jvqbcCf4HuSFd2Wq5ZR5GCmnXDmPptKBVMJjEm2DEenfgpfUPWjBQs4s12GgA3gEUD4UKkC97KwrenRYtPtqrcy",
  "key37": "EwzKxwEotAxCzT8DLCK191Zr5dvqvsiU3qC1tCotbamPFivp3dXRL31E5msAgTnVxNvoNFwSJXc4Qpvwt4o8C7K",
  "key38": "4hd46NGW5EHqyTPxHFqJPoYzixdRF9kafGDXMVaFZbqT31L5nSpPah1Q2SdJJ8ivyD3o1Ld6haCMpB75AxejS3Qx",
  "key39": "3t8cuNsCDutnc9v3ceHyA4YNSUg5aufg3NJETJ2vE7w2WXedJxvoLrzVY6uAH5KgcHNbVPJLsBsedmsmqKRPnueU",
  "key40": "SvrG6ifLQQBTokzGfYttVUGTaQ8ToKpG7tBYfsyCaeMewGpetJugGYPXAhy3a7YJYb9v8LaaKRDeQkAuKBFUfdc",
  "key41": "3xvVyWcYNrdiZ4s7ZPj85T3Qk2boweYwYZCrEnW3aY9KW6MMruWHVRLb6YXdXxWR5taUxVZuakVeXmGS4kELvHGo",
  "key42": "4BVhWrL6vd1KueWyNkhBvqqXEQ7YExE1Rog3pM1ruQT26CoxQNEc1ZuHb9fCVWWgsuRg4ML4Q9v34CBMXZRwXR8e",
  "key43": "2HEvMkmfsCCemT6ikK55TEsj5zSdoLSXgGP7eTC4DTZE9iXbVsGin2iChdUqUXxR6vbsZcTN6yLUEo8TB6PN6xPH",
  "key44": "3VW4KvV4Coqffre4mXX7XRbyEEtp4cig5Fkx4L4qpC78VkkL178xrYBuukbSErAeHCsG9CMtRTPZSC3W2ySHc1UZ",
  "key45": "1cdQnfnvTRRmPaRT1Rggw1c5NHSRDNwDQoetReiJGrRCjW2DKkwp8qtxnzXoJvmyuXcwfRck9y3q9BVum13Zy66",
  "key46": "2YsXq8YA7khhsFkzbh7JFwfK7sqvtw1a12Mwy43NweXoLNeJUr7FHRJUB4z2pbdA1SEJg4jpH79dGhdvrZMAaTgM"
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
