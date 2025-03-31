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
    "sQsv2Bh4oU2ZeikEguNZcJvvxYn7Y31yrgrW3Q4wCqx8vFtRiyRTfppV9V1woDxpbKuoM7eRVrDZ8kmdEiPWWqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sJ3SuSsQgM9TnUwYrJCL2kYiDGTVcBAjErq6JmQygqSBsVg3tW4mtKvzCRsqS9w6Vg3C7vaCcTpGeTkuZe3tgot",
  "key1": "GAPELHGGLPn4r7gdkCXwj3JT1h6e7XXDZgDoXDYLRsL61BSJ2ELPE9Uq85UZQJ295uUochdKhJq1BQg5o9k8LFk",
  "key2": "22bDV3RfABLLqgoVJ4B2u9doyUJJ8bHapV5keCTP43BaNeGHBXWzKjajDSuXiX9wYm4Ch3mq26ZRGYQmH3VKHLHt",
  "key3": "61pbGxKXrxwZoLhZxAVVYK2njLYdTwrkNfvQdbQRnksQvQ4GQ1oA7PWwfKH7ux1PMSwrz2JRnXiFuu97D1YkpSra",
  "key4": "4obbQXeuHuZy6TBCaiQHyCvjC3QLhJ6isp5Ry49Q9mRow2kZTiRjrRNdEkjF9vyWmpk9Jt5oXCQryMCrqFTMZcdi",
  "key5": "63dYCBuWjce8DqR57q837GKpg4ZMcVtDrPw5cqj8rXG8Ct73qoZC9i74KduLuCkzXmnChFa9QqLSjvyorP3FHsVu",
  "key6": "5bHXzPpmb4xquWxEfKAURgZLDjoaCcuv4m3WbfX29RiAVEeGGnf2j7Q4WYda3BYFHqEB2eesnxZ9LzKBT9XikK37",
  "key7": "25zC3FwpCZFaYwbxpHuaEQmwTPpAgFuH98n69dSu9EmCwzuaYvoM2zSrnZ7n5mEZjxXoKBHReApjHdfRTV6rXmxr",
  "key8": "2UeHXETJi8meaPqhS2ddjfsRz9gxJ77Aa2PhB2S2gzeFwR6ewo8QvXscpQevgtRowCAx1DvL75pVmwa8L4QazJ9s",
  "key9": "3TKPbVnTKMcASScS4Lzs8pRjJ9CDsmtKym3yNKRdZQRWz8eemhnR2QSoTSAL4biGNiwYh3zQNUjn8CHCEmAJx9FP",
  "key10": "5aQHqR9FDtdVNRmeQbwQXVDeChwdNT53HzqyJbCLJ5sNqzw77QAo14ZTt7DJWCCEMvi2F77hXLG1HWjMxnDqj9L6",
  "key11": "2GFhBiAk4m6ExYUP1KagMgdjVMDEsPLo7d2K2jF7aPgWfPZkCsLECDQjfqvgvKu5YdVxFA9QRS5GHPrDdZa7L8pZ",
  "key12": "2hrKVdDm49m2o6tgJ2rPNxB9XxutTce34HydxuyEa7P7Y8opXzummzRpfh83xZjQBejcnx8iPeQF2iy7TQJgviZX",
  "key13": "4nYngMW1Fnpes6o2Tdvqn2GVya86rQbLwKwwzCe7KtXtwGCbMt3VHKVjLrqx6DXcWxV7RfPZ5dKz36uUyUSvhKy1",
  "key14": "5w5PVGrvdB9cA5G2rKjdUK5UnSKXZKK6S59N6jC7jsA2fhEc4qsCzkrP4uJmQUT9uDXPyBY8JqKsJcGELPMKbuj7",
  "key15": "5kuDX3bpxCPHE44J9fAS71P5QmypCpAtVnLVTdHGuhZX2kZ48qb5XGtBLYyVaErrmk4TEhwjXQrkFg9SJF1eK9A",
  "key16": "3Uc6HzGhiJacofuJZZLkvsPzScPzpMSRma6zemDWaHbLgo3waKPeeKMBnyMZ9g3ExeCbsGN7z7mxaQ8VUogRctcx",
  "key17": "4NFNZDT5yDh1ALr7ZCGqmZMki1effvLNshNg9w3axkqjvtRt3vzbYbtcQk5v9um8AwSm7mQ3v915zSEiAV1cuHen",
  "key18": "5taJwEgg67trJLi6Tc7dAyhizHt6SytMTX5q8UUMJWt7D9uYCMRTtpYTuJP7ifvbfq8ZB6sVPPBKkneta18VBth",
  "key19": "5C8r1wDmFtZYWCGWPDLJ61P32osavSk5fVvuNv39VTKi6u9GT1aFW7wDQPAucmkeufcEUwigKSsyoPyq9qXaA74J",
  "key20": "3AWLQA4VR76VUNsCSHbqGgWW47Xx6wokaTLKLrbTEwi4geYxHMvE1yfjC8GDqH9gbUd7zmHdJyTwrarL2V8Yt7ZK",
  "key21": "2ekdxUUak1M8u17cGC4GZ9b3CNiTA6Wm6hkDi63BzHyKVtaibUNF2EQaakXY3uEe79gqByFbzHqMGZ9dSXGL3ueX",
  "key22": "1CuvXEf714tC3qBGJ7bsYo9hZ1ghsa2kfEkfC3JjNs7WyrsScRw9yoQ6xJuMp7fBB5U1k8KZmutPUev6b8mJyfV",
  "key23": "dsFaQXEGqwjd9DcbtGow6TRzN1HnB9deVQt2WTesrU6GKoLPViCLyGFdyRdHJDX2EbEK2pwKL46YKqHJJ4ECb2p",
  "key24": "3fH9nmepkhipBVL3ygZTzmC3LDQWP62ZZqwJwmjjxqugA1St2QtoTgRFCrcvkDTnEXXBadjoFV7sG3utG7DF2pFd",
  "key25": "5sM56pJ9LPqdWqaBdQNXZ1mW8yXADoK4ZuTPiTb6oRfpfVoyVeNkaU8YwcPPuMF9Pk3D3ggYGFzbBjpVMhwxpL9U"
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
