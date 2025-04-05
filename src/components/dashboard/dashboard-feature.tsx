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
    "dHf28WdThc34d5mp3KTtvdy1Xaqfwc7KAqmr68YGFVX9QJx8HkGLJSbgvdy2f8da1Vy9wEXqZZgTK1BgmgHXFnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MWNEZKa2tLT5VKGv4ZiejR8vtfJAkEw65A9zw4oehYidA42wfKSBPsB4JR8VmbQjgAdiKEpX2bfprLnCL9iAvE7",
  "key1": "AunA8cAFqZ2Qzhf1jGydzVGd2VffTxwkL4AfebrB9r9hqtXfw2mwLmrwvsyyW7eE5Xcy3gnHy6zqxyaQrDJJciv",
  "key2": "5guidiMYQ2nQLjBdGvRqa5ccqeeqgq7WQbJgx12FcFDxUipNJPrC5DCFDF49oSH2wtD934K4ejJ9LygztPbBBP8X",
  "key3": "5gSFaougxabJqYHwzyTKrm3VcjsqGMWLyYD2D58VMLN88jCZVBZKd9Tcr6GSvz5NUJXNtNW8PvXS9e2JM4E8XnZm",
  "key4": "2QjQh66eBCapMVGSG3L526uojGozHw8NKM9rfLGqHiF1WEbAzT25bC75dp5frQBnbkE3aQ5Y5XUQ3sMDpbsbGFZV",
  "key5": "47QVzY3TfZtsLFjVnSdr2qZNffsKUJp4dSBaqRZk4MmUhhE71Qw69TzLagS5DwKorVnTm5zgFgnireautZ7mvxni",
  "key6": "2Rs136krmmf4KemNoyij59zwzNGUS2qVqza7MWrjSQB9VpqPmQegRED8wvgqu48k48L3brVjquKFDq17BxSxdnqe",
  "key7": "2F9U1TH7p3FnK3ojaMweUHkVEHkPxtsrbhtKFRVSDGjeUVtf9YovZ8sD7pDMLZaB8839huzB6VWmKMJuVBRXC3vV",
  "key8": "S6ETkpwMjmriHH4nR8gv1J4xpCZuUaSRFuqk4V3SK1B2rNDmkx1Zx5QfGKDYJyyWBz2ZYJwxuU3pMfp8Y9YJynx",
  "key9": "2kiMbxA1vuC846cuLiikN2WKen53RMbU5stLqeXHpcGLpW7HfBDvpCyMwX8cHpLDcAJMu45fkNafKzWu1yxZnax2",
  "key10": "2sB3YcW9CpZvdhviYbRz9dEX3VpqcRM95WvzXZyiG8UWDiPMNV8Ld5tMRjWWLCRwbgxe4Gfuu4wy796GytYJHMuK",
  "key11": "3jKJoh9Dwva8kpf7zMDmpABCenyNKMyp8U7BafefUU2tpTrTM85av72faQ3wf2uDEBa8L6Br7BXzSNCNYmStSyrt",
  "key12": "3cDfsjTfd2APvwTbMHic9NUoL96caw5fofQ5RnRMJoJH7RALxjxQNrxJCUuzuid2C71qAi55dj2kGN659PJSs5D8",
  "key13": "3zYLgrNQcMgGMD3tBN6TSGuGByKwbHqia8W2sfYb4sCr7NSHf9TscxspTW2GMuaQoFxHhkdn1Zq7RdStxGDSsnVn",
  "key14": "3F7F4zSu5Gwu8VtQhZvbWKVsmUcZ12poeyvnZbqavBooKt1et43BrrVqsrLmdZZMan51qnVvxPieuHsFG7iugtDB",
  "key15": "4qv67xKr117apWABrY9A8AA2ChtVGYgk4NnKS12FSBCrfVefWhoywVNEHhbdEMCA6fAyjZ7uHBbVdVUty342yd1x",
  "key16": "5T6GjxSJnFddVWJWzq2uT3SDmoPHV2L91qwbmUYQorPySCqzT657M9AiZ9UydpSS93UvutizcXqXJ2Djy9GJTVBe",
  "key17": "22FBmWpLtD2LdjHu4VFNAeiCU9G6GPA3ehr7BMEfCKdw6AmUm6BtA98cUu929PQqoCzBvSyuRHp3mqFSsNUNTU4F",
  "key18": "54EcgRriR5HSrhwntrMHrGkwv9y6m7wsHH3sWM7HGfnCWUKEgbuGU8Y3S1Ui8wUTc6iGQ4L5jYvc1veAsz1Xq5ue",
  "key19": "4wbYVUtfSA9Q5ZeGrWku6x4iY3LL9Tzn56odJqPiqbmnbQ6E8rBfJFDjtJSVywZ6pTbn9YsYhiqf6BzBqtTLdH7T",
  "key20": "5N4TmPA8ng78ERDFeCYPM5CJH9EPzQQoKpwSkQS4FGpa3j5c7soxZescurQvMoKDEmBgy3mWDkQFkhuBQsjiMVYL",
  "key21": "3SHADnsJuqr6yFk3T4ehFos4L2oxb2ZKGgZAmkMbi6cdVJE4MYCnvdcYTSSQPCj8wKfk81gxbpsu8CgHW4TLq4pK",
  "key22": "5B8Nmu51cwCGXR1JDcoKHwHSXU8ZtqrqEvLiEofEWVUphDAnfwrWfjgiVttYQHcYmV65fcTdJ2wiRWspRF388fbz",
  "key23": "rU8mASPnA7YtdFe24kXpUKz15kCrjqvVNsKTQkrwkL2gme72DawAZj8oycAtAofxX9nvdGqiPUb5Te1D7b6VkGw",
  "key24": "2QKkDrLkHqcGP3HhufXtiB9LmX2Tt4YSvxgvR5h91N4uJ2Xt6bNYcoi33YiwKWd3zdsYsnAN1LCCz3YNh5Amh92F"
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
