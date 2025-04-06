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
    "5BaNJop81aX8b1BByAdXnKtKtBp33xZh1Qz3uFKeX3NT2H55ProTQguRtssBmMa7Yv6zBMh4zgepUm6XicmjrnoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55x29pkqsEtiiPC1JGHe4e5y4ZWQeXFoWv5ke3CE7evvobciAfMtzmtKRq6ZfXEQaWdhXGivdwWrWbnFpki5z8yJ",
  "key1": "RS6Bw5P2fL7SqKRn3y6iCXaRho5aE7eRq6doLJ7ckWLxjmervKPTeu1hB4osUTo2fv5NtjocTuxL9PBxJoctma5",
  "key2": "fiQMcigLnSxdccVTgs2FWf3kMJnVYgPDxr97848EtxTQrDUtKV3jweaQtYVp5PTkRo9UZgh1X6HmYzvA1NWsG8D",
  "key3": "44XPP156GxN9AChPDaAoXUMTd3a7cLRHhpgJkZrSJLi8DKWWzq4e9L9mBX6d5RZb7XSHusP3YcNM8YQysQTndpRt",
  "key4": "2oQbWH968J49CmUBqfLWp59UUPTjpCY8ko3Qk58iNCaZPxcd45KB3ZJXQettL3iz8YvLUo5J8rZqxMDmusXCXz65",
  "key5": "2gtV6UbVGJS2yFPQJfDP5qdQiZNjX4wtUSVkq37Z9E98WB4pFBbe2tiW8yTaqAimaivfTEVEiFz65ChDCc77WG39",
  "key6": "4g4R2jdutMm5jigDW2b5fKyhFLXPDjxQ8BuhJrXp7asCs815Nnq2Xwvv8R1pe3rAZZpsi4HjjHQo7AggJJZ4JPSJ",
  "key7": "3gmk9FHSZT72xWvgptkrYfpvret9TZRgCEgGoXgqyxwCPqEcaUUSF3WGj1noSiZBLfPiKJjadtRFZ7s5hSiqRcB6",
  "key8": "2xnAZoQRxjkbBZ39AjYnDFKLwkgALooR3sGaQxykRTuCMuuLjhaW77whujHrTfW5MR8gHEzbWTgGQUXZe47Kspd4",
  "key9": "3qSXn9byMB1nNWggWR6mYqBkF6SwFJYokgLnTU8hVJjSQMUWruqDJrn1HcBtBjZarVTUtu6am5YTzEQdTYaCvZse",
  "key10": "4rK3zpXpDkiSjixrrHtRkpXGrEoeAC8pbzAYUqaDubWevzA7j6uLsnfWJfDmX7aXV1haghSZZoNzv4GFLKdCbWoV",
  "key11": "3H5H62NtpPuRwxeaodPoafwzaqU3EJMVMdZmwb3KvVVyKV6oRjiL3bSCgbu9mDFSTFn98Qy2tn9mj6b6WVRN4Gwy",
  "key12": "S3RTqRhC5PtV21HnkYpgrTcsNdNFu5nd3oBUNxpbWXmYFWusbGaDYMj3KcTvbwxVb8L8Y1h3YBKcUGwET3jxix9",
  "key13": "36ChTm8ds2HjJH351v9mPmNu3r3hKDABvUPuDg5GpmUVAVj7QF1U9CMGcPtn4m2ZKWg4fnmN78xsr36Uh23Enyfc",
  "key14": "4SXpcmdz2Jns3tqAjfQxkJqbbnNhY5GgknqBZLSTzzcRNYhvvAfgeMpdvdaGgCsbPZgY4nf5pJi59UC6rXMDNYhY",
  "key15": "21UGpcNvmewtNb5axpzWFzwqfgV4RZ56U1ETRtbeKQrpCUEe4tBozZhsGvRby3wvu9vEuqk7Yqt5ywuMv62vVJ3W",
  "key16": "5HJ1TDX8bCsUCAM3UjAW7rymsnen87Jvzkx1qsc7ny2GMBhT3m86YaTZwgGB7Hy3iHTSTqFA4sJtPPjxXA2ckSUb",
  "key17": "4P6fn1NaQE8XuWGurPo3vtC9ZZWcqbLNsZzqDBtEjTjxjevBSH1PaHkEupUKapvKAB4PQ8uk8BiDXtu3jGpQhCB5",
  "key18": "5ofd8Q6ZTWT79Xpa2m5vmeerFTztVKfkEzAu3tLg3SGdvm1zpZH9Zx3bvLJHWzRVLa3QBbGqPuXWqGzDGb7HBzxB",
  "key19": "2fUBLvGw2KhwhVRD98ixSfwpsSQNb4g1uvcnbkxwH1fHY7zgnVgR6CBVAqExbWvU2U7nhofCxsobJNVpnb6vmu3F",
  "key20": "Dyvwkv3wRFydxBqE2eHofqwiQgqozakZjEWsMuXpT77PwPqxbL12FxoADg8JjBtGZk8WpLxr6YaRdVucffgykT9",
  "key21": "5LniK38tEPwwYpfiBJvxWtMBx8hnR3PYEuZtYP7qvnKTbtYAMnnANePwBtLzQas8Ts7aYwwaJDL5BTenuZfLKv5S",
  "key22": "3UDGxbgUKPUYxE8NQ3U4cBBUUueNb3vjVcbB4Lzk738fwUA15tNQjbmsFjXvWpQKYv17cQZRYALQyD6VaFQKMxyz",
  "key23": "2WtF7WM3YMSdF8PVxC2yhZn3p1yt3fdct3EBqtc86e2KPC8X1jaUiKoWVcFpKvPUBKwWZWB49UymD654aNYWkkNH",
  "key24": "44ouSTQQ7w1onJHpKNAw2ZVJjxGdoXnN6eNyH5LCYErb1Y9i7Bi2hpwqMPA2ReEWRPtK3DYjZ3WyNEWdmX7WotxU",
  "key25": "CGQWoQZbxe2rP8WsL9x5payppiJsjLHeYAGyMPey9fPvRUmBVzEnDtdtUQJP6HfYQodNxy56Y4wWWoqNMcqaiXw",
  "key26": "65PD7T2JxBwFgrYSrUctU43hW9xWkoPDZ1rcNF4MpAjMdyDSPWEFFQSUmFEwgb239LkBMSwZ73Bgozy8zrmbDyce",
  "key27": "5WXkRnpYxR2XTHqcSmqNgMp9E2RE66dFfsCdD3nhMaPFHcvet8pe4xiti1cN7jSV3yrfYM22WsoZiPnVuaGiPi9Y",
  "key28": "5WHnFZ9aBhGBKda3DmuyfZj1eTu3BKoehmTBkEt3kqQRDCdQrK39Uz7TqdpcdgfN94yr7LgeXn48o6ttA7BjPS6J",
  "key29": "4aSEPyL2KuaokRQ3bXNNYUZrXKTbzFDUhMryvTQvNMjAkTdwnXVrF9mmjVgB4UQpxrBq1umREj8eHvn2vs19csWP",
  "key30": "39K2ACEjCAgyF4JJUub71dq1acRe8QB51jPUGJQcDbstkZBysRExEA8yhX4AaEgmfcaiC9dReB9bv6Y9b2jBk5F5",
  "key31": "53vj5kPasM8XhmvPkoqViACAPpohMBFEfSDLwp79kkRNZT2wDzThjhbqszaBs3aHVmbtieVP95ob3kRogUB76yb1",
  "key32": "2dBAjBPZXpNGXt5PFjEAAtvjaz5fzZzdr1kSUZ6svJotc6Re88GYbGaiWsKv5HctSBjoWjcgQwA2drGYTKLBYXce",
  "key33": "L7ppVnoKiwspVH3ZFYPVUuLp8T5aAyTndEVuYTbKmYBs1S88H2FT5YMbAB924bj7Ey6bTpS56gaXQ2S9LK7NYTX",
  "key34": "m8yaaP2vfsFvuJAvYcsSUdVuyJhPCJ2mhUZoQCY9zZLAeXN9vrFgDZU3x84ZHjfMZFTS8vbSoxDouN4rB9vSD63",
  "key35": "DN9ug2xwK1FeKdFQwbLsRjJ9eqYHKL2vCSk46MKB3mfqTvm89m6v4MuPvuAkLykjrity8o6QdqjwBz9L7dpvcJu",
  "key36": "5vdFqPKi2y9R2gkGZA9zGjDUzoQ8Sk5WnmKJwUby6f9Zw9oxbGJX8eZQZsNxxtbfdG2V1Rs135ksr93kRzs5ZF2D"
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
