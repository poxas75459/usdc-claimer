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
    "3uhW7Dfs9fGwpCPPxNRWZm9dsjQ4STiD9GdBUBCD6m9HX6Q7tXtexbCywruvPLGBu34YjTHX7C87jsueamtGK4NE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mYeYtkiY6JPpaow3mBg5sFgf8jBfFnUghGMaYdrXhVKHoUuBGfMWi5bAj4fTyfBBxNTVGqMJ2AJExoNLT2BEwQC",
  "key1": "61jSUz6xtShPwewgSRtBmr3yujWqwRoGnGN4ykoWNzACC7CoXbhVgEV58WSYLipnbaJyMdNJBzxGidfbT66r4AmN",
  "key2": "46vphSGKWJtk2A2aBQFHvWAmqJy7hNGvX4EBK9G6S3MCHG6XfV7cbBK61RMijYXUtkEtwrh61TKi9iSmDSKVu4VQ",
  "key3": "4mrP7H4QAXnDWRAyWhz3JjxaJgSPfSpwyc2Q9ARmMUWz4meWJMszpftPL4qsaCEpV2QkAgGk1W5cdUungZ7GZRzj",
  "key4": "4jAgaFVUg7r7AZZyw3apEUDHwoaZ1YiZm3vhvQ72Lkt6yGMVVfwyZDfohXgy6j56LZLNcKrhv3SrLqLV6ZLPoDsz",
  "key5": "3meX59RwoCHuGcQW92n64JbF3SosVZCE1FajhGjpWBbCugcybADZb8bMPqKCux6bLYMtiwD9dLzvoU9QzMrPrhwf",
  "key6": "EFkuLPSmQFhhAfqGYnYKRL1hnSyd3mRcDTz9XTwsnk1BaD9rXtChZqkc52G2TwhHv9KVGVYE5uvNuad9D2mn1Uu",
  "key7": "2jSvLs46j3ZakbkhNN9xuPkvM7APjyffvWcGvQEVg1e8Q9XqfeUDQUGyRfXgUiPxeXPvW1crKAEgTVxcHET6AREQ",
  "key8": "59PQ1Wahrdg9GoeFWkgtbNvR753HmWAFWJjirpim5QeVhgrq3btHT7JbazWVeecckmdrcUL5Bf2dhFRddTK1U39k",
  "key9": "3dGHGV1VJVxEAXAKG1eJbBiktV2vcWpyoEqqNYddREPu6kgqA4a2FAM7fpjCCFTNr7yhBsKBisda7GjW2DyMmPYy",
  "key10": "2FumaQC6FBDR3fjNTbyyTu9H8a8aKP6C9airxDp6yqZgK3EWYRN8PC7bqztzqVsRtbuCabWgWssyd45W1BVm91sr",
  "key11": "4v3cvXnfXuf14QsQM6fMSfsp1ficCq6AxSnTxUNF4dgARQoYTqwrGcZSX7QhejyJCavmn9JUXvyp6YKzEVDcoUDs",
  "key12": "5Jvqa9ZSEDQp23xTTQVmfXq5h7X2MVDRjFDCEE3mMsw4jvPJSvZWBnAGik56yy4Eqx41mop27BcYUC1UeTckA6gu",
  "key13": "4kYRpFMLEyqu6bFdNmW8Vb3qcVMdDbm3Kc5dR2nzJAwih8WMBZ6A6GDWrALtQTndV5YJ3AwG25vVRyH7iqvN4JwD",
  "key14": "3dLh7TG2zYrkrrx9Kp72oNQU8NxDSbQdP6TYJ3g3T54Xez8NUEHcB8DWw7rN6VskqspF2buNFgkBJ486um48p93J",
  "key15": "3A65gcpochA1sSkFrVAKE4WMsZGifag3iirkkTFZZj5HyK66GVt4ZgvEnn1JisZpf82DkF4uoKeJFsgSSVZQe4EL",
  "key16": "5Fi2VqDWAteLkv9BF2SyoNyvXh9KQSZwLJQ3BQ3FuAVNm6mtXyGpBdG1EGfdaX3FGsA7xBF8yrZeG45fcf1tDSNV",
  "key17": "56A5nv8yKFSdcQ19GVjspmdGKxNU9dekEfqWFqwGMEUX5Th4qd8D74gJWuQicWkFjPp3A3kWqiGy4or8VScsgE53",
  "key18": "4SMuTRUCgjA7fyHUAERyZmePu7Q86E6i4tUAJzAEaj44z7eVRyRwiLregcbBMov23cBcFHxPpSwyiX3pJcNUhbXj",
  "key19": "5KzrDLoDbPESQPNxBkXykse4MWq4pgo154WU5Hx5UX6ui5aUA41ojVhctcdAqA7Rw45hbAkhPiu389LfLEDBBJA7",
  "key20": "66nYPVr1E7KgWDYdUZ4uK2qtFQFh3mvAaG73NurhYocaESvuri54hx7PtVv5mftYKQGuLkRLmn5XhehFrqCfTxo4",
  "key21": "xuqCAwWG1twfGjLkQxXYjutenGHQv7gL7M2Qp6LFBz6HN4Euu82unoUgXwLSpuyV85bmDoWF8NaVjiGpoFQd9sk",
  "key22": "7ug2WSPzr6Bi4FbDs3Q2wDwxVAswFwnYrpb4DXK3TvuHe8UqtJHq22kucchtfYSs8FBo2eSJCKCvXnLN16QJAWC",
  "key23": "27rEqHeWJuzjG6ihKW227audzSHrS7ts3Vadt4EjKuELWr6WiHfEkcayqKMd6eimMfHJp7CuP6pw7c11cvQPyF2n",
  "key24": "CYVgvURNQ9coUeFqX8rXezDTJFAf4bEwTX2RHUXyTMTXwoq6bwAwqyCBBbUhCUJhJ8idtpGcXNCYbKujbJcnuBJ",
  "key25": "36sErpRAGfbizMxNdJcXjERPhbiT77iAAZQonvz4DvC5mvDtoB5UxqwnXw12ZZkFguw2ayaME9PLdBy4Vd5GcNYx",
  "key26": "5QsmYkRoGqspwZCE6NFfdjkpaxXJ2x3HDCaK2qe1MjKtuuyEAJ9EVuUf3J4capUTZxDew74d3d1WHFwb4f2utRMP",
  "key27": "3EFgmv1YXgmLZar51PmGkmJqnjgxemYm2SbW3Vvh9CX6k5qJ6WfVEbdh4CfAT1nCCYBPJojzcVkskTwPKdHcCkLB",
  "key28": "HA38acKPdj3csoQ3iAnF3WAFS9eLojFZa31M4ki5ZfFY4BEqo7oNrK83RY6zR91eS2ogWxDJ357dogJRP7ux8Sv",
  "key29": "5GMwSf3YkQjcKKvHgBf7ATh4kvrQxoUz3Sbnta5WALGiWiCpFjxC6BU2s32naq4sXiRXfrxNDYoKKm3Yira2kJN1",
  "key30": "f6KRGduqWZTUHbPpZvbS1YVpJ6RWrvQu2MHiP3ZVewV6q1MZG5owpY22esPtD6X82pVerWcdrfsnwpYQCQmM7u2",
  "key31": "XFyRuQdNg3RSqAettpsbiVTqaYoE5iaXGCcHJfui3pU2tDtbmCjvZ2bSzMHRqSymwXQ1YSNKY4Jbx2ggaBvWcjZ",
  "key32": "4SfnvAu7C3SuYjncAMMXSJqd7s2qQg8beEefZJi2syq3tjYUApzUqspsyECdwJfwGY65CVnjowkf6LJr7AzbVH34",
  "key33": "3BTZRy9JohMWswrx6Wy8QnGviaFfoJWtgVw6q6wd27Tes3GsezwfrZrWSVAuTzFEbPyS4cvjBLhCBaduxnbHvWmb",
  "key34": "zoXbaaQ9id6iEr8HT3GfNh7AbjAMqZVphpTLkiZ2ekgTaadS3zmk9N1KHNTVzFAc7SpjbjWqAmiQpUFXFac9Ckj",
  "key35": "2gCroSpAL5K7q9YZxz7fLixR2xhxAX44gZYFVHexSMZemBxXxwtAs31Cy5YZoVeH5j2TwRxaJhrnL5JRRNXN66k3",
  "key36": "3jP8MzYRcWHPDeiZLGSKc7KiWj3DA38f1xMgTvxopyXeAAtv4NjesfEQbMoNmuABHs5eqdYHBa8oHwHLr7TQwJXZ",
  "key37": "2fHabrqWjfTGYBFRdGfaTFRdvcZ8YKFNi7qDpiri6b49zv9YTMSRpPHiVdeT719tjzM8ffpuZJnPHnb7VSFJ9Jvc"
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
