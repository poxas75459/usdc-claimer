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
    "4V6RBBzi6o8Ect6DQd1GYdcfMt4koxPUkxkU3h4wv8jBbwvWKhQPHyCXvh8fPs6K6VJU1dWaV94BmwudBYtFFN1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hiS4L7pqqBFWfsc8gpaMSbL76u9BrgW52GfRwhnQS9axbJHhZqb2QYWgjtCP2iqQMoziRfSRBCB1hq6dTGtYXiw",
  "key1": "2cL9tNSxipSinJHN1KWpzFF75Cws7cNtkJ6bHmHkjgHzVc854ijEW1K2XUGch6Dogt6oktoE5mfcwAYuU6F1akdC",
  "key2": "3mKSPegkppnsqwfvYoNbiMiKvTmo2uVH5ELBFoV635iu8BbgRV3dFX7EFGC6MEmx2PshkZaZPfoFjnzHQtr84Ymv",
  "key3": "DjcKySRppBJ2Vk3QiPf2B2MuJxP8jgQmjMLQjTMxtuyUvqvX6TGKw51Lc1YhuVw6dKBhvnZEFte1fF125r349WN",
  "key4": "FEhVDcywC3Z57fKRK3oN93and5L489RTiJQW5PgMEjHNqcMh9rAKtQ3QfNZh7Q6G1uFhCrQfJNpM4fX8jGpBFr9",
  "key5": "3R59iwy9Q2zchV31mdujqRT74DFa7rwvzJbYVxQJbNg1wKDcDCNntv1cN86cUTieibZHKshTLQDo2F48JvnYWoiA",
  "key6": "QiEybkNTC9C2raMRwYZ8aRF3ZzXAnHnjPL5JQLLJM9V1FzXAbsDcoERRjNgnG1py6VqvtrQUz9W8uxg4qNQf5LQ",
  "key7": "4HnjDbbuuv3QfcR7Kww3RAQzHvfuoyu1HHuVhuKd7QMxkWvzrNyCwKYoYb8MB7GmAkYQwKkRBsceK1EdoQvMfU4Y",
  "key8": "2NaNz7mMg8t4CH1yTBV1FFAwSjk3FtMxe2Q9PmmqkyAL7KnSqCY8Hv97jWfxKVGjV5i5oRCoMcHHMua3nsKJrxbh",
  "key9": "59RznEdFEWSKbB6RdPBfVttw63uo1PzuuQzBtfjRuBhxpe1m4rNh4o4H2Eki3N8ZXsCAgFbDXAti4zhph8DPGdTu",
  "key10": "56bBZd65XKzXimDaespZ14bMF3UJ5nvXdu4XjdoHKiw2WrkH222ugzYNZp83k6RR35ahC8WtFMaowdQxwe2TRmWg",
  "key11": "4hmtpHeooPN3wJ5mFEJ1zKE46cr4SD2ySzfgBVsMnaAgh4m2niTT1tBmsKf119LRQ25xkaExAmuc2uFgRetBUbgB",
  "key12": "4rHXfZxHGJGkRycCA7sTzjuxro9tRyNZRQKn7oTdH8pPnMYcgmYsux3ypXwJCey2iikM28YuXRMT8X8VhNYcnsDg",
  "key13": "3EZT1J1ubUGdM1U1hfoYeuNRWDL2KqXwaKv1ARq1dXaFwRdS1oDfHhjMWG7rfEoaAWf3LWUJNySjai4Bn6Sey9m7",
  "key14": "269hkGMsLNTLUZ7aag27NmVWPUsMHgAZiNj1YREMP6hwGB78JUjyGh9H1gULvSbb9pB1XLN3RisPAiff9kZ9fjiE",
  "key15": "5bGm5mriHW77h8QEUia5D3tZwm4RWKoNHcNmd9woHG33gvp26nCKdgwBgto3DQTdnsfFspZUds58MxfW2hnLJVy9",
  "key16": "51X3zWixFDgbFRDjb2gbHmTYjztkBZQEdYnvjH8R1M7R8rpTmW2Sq3ThRNZj18zUgWKeRcbcNPdgDgL6o2AY5LSm",
  "key17": "2on2FzKBtP1UmQFKZkFfiVJXyyX1hTZzTRQuNtXYM63jqzvhvAGUWeCjYUcm8bNMcEtmvq7JREURrqa8tjUzdq3y",
  "key18": "Ea53i8rCcTEgE8Kj66fGtVmz7PkX3Zbj13LUEei3naZHTo2kAPTs7UztSHzNZYEkfe7fK3JkBKzpBCbUGE2dio5",
  "key19": "4PuFwZ6bQWUwNvNe9o7bPkNWyUFSihQ4FUd6HdxFrARNSKxaxjKQvsarrefrNqmSfagSrg3NUNuieXzfMw5nVH6q",
  "key20": "GJXrvbzoFKuKheVvE9WkC9KpYWaByDGyQGrPzKmudbAfDTqWWM6a78vbmbnfUoNpKvU1AFphRkn9c2yxhSFcpJr",
  "key21": "ncNkeVHWDF6WPW3QKU8DupTEoPVNvxRRegyxCcu1tiwCnS1fcrvw5i3tSMCcmoH8Jt5LMG7gnxt7f5u5LWKF7wM",
  "key22": "5NGWcVji9XEDdmncjxLJRn9FFp3jNXMWg2kuQfymDn2Yqf4351LEuKisjJ8UiB474oSBZgqPVjoRvnjYgfd3RTfW",
  "key23": "2yu58b6iWr3tUmghoknV8omDY3eDRrB31BVFGw6a7eYgxbC4zhHujDZQf6yKozr655WFfYp1TDCf5HCbNGHNAoz",
  "key24": "2m7BDsb8N2HGkA6efK8YPeX6Fz2rkuaND6ip3oYqm7TpMNwzE9p3BdAZTUTYyWJB24FEixrwvEQT9zD2rtjZNM6G",
  "key25": "5TnKULiXDeVfZtBSSzYfTboVrPfuro8vHWrARHpR7eQe6jYnUp8dLiAwEr3Wv3fUVx9egqWaxGV89BW68jS85KYQ",
  "key26": "2yj3RqcWyQWqzss4eAoUy23tHrc97aj2ZXVjUBk5bd45J8VcEbrrKKRfkv6BDnDWvXGBqzws16degMNKM3qtxf2L",
  "key27": "4wZKwTDm9vhCnHZaZKSxtrNadxemRbbpDK4Do2EunVTZ42GcXwfXipUPoEvAqMhJzExnpGPZgpNxSupuvk9htGqH",
  "key28": "48sStUgGVa3NN13LshKybLprvc2NDxhqtC76ZWXXg3tM38aXzHwrNWo3e3MGCqdBRagt1Zj4ePiTL8vRzMEGMzPG",
  "key29": "5eJFBowhM3bNC7tsQ7CbjxrmvZTW4vuW5RmFs951HvfzWBeRkE5WdjqmVbZBuN9RUFDXmXncjrNfRRAX9RuJHyXX",
  "key30": "4c5Z1XMmTdnpbamdJ25QuYKNedqq13Vg7AtV38q2pZXNH8Djogm4WeJCHQNbZ7MhqpjH9adNuY8UjwgvXRr9iH9y",
  "key31": "5g8mkjiNvjozZLdehaJQw3v4pHy98ga9xNzz9taUvHjE9Uzo9GeBNEDKvW2djkmViAHV3wXMbxQdC4iHaGXFxqaa"
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
