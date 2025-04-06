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
    "5bqLJoUaNENvooJa81VD9tHNo31CjALj8a33RepZgpApHkqLJe2DTKpZBF9ZHbyw95nH8G1KvTUJP7BBNLWgodVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t5fdvnBcuuQxQKqF9tvPdkRhT3mBxE6gD5QWVrVzCjmXvgGGD5qvvfMYfdb4HLhjbLf5z9ivQPedSAoNrbVKysk",
  "key1": "2ejB2SRPWcPCU3Aa9MxUaFnF2ShzqZSna3DbqWtgsnxaKTmwjmPXqnhgQvBP11dswyZ8iBHdQWrCmNb6M3BndcYi",
  "key2": "icCkQbx7ddnY2mFquFEdxW31bvrZ43NQXoUBeXtVQZhmrErVQwRwiKgZPgLEdHsv2sdYSCnsrCtj6AAwLTjkN6G",
  "key3": "3hpeT6MWzX8A26WcTaUUrAH88LyrR4UuHUgayjFZahToDrdBxxM1fiZXd1eDCTtckb2iYa3jtFgCsSapzJX4mqhT",
  "key4": "3YEL2DZ6ZGFSXn2u4S3qVAxc2rgm4gDWoCUrywuNNyezyUSEFfhMkywX4PgFbu6WMASfoHvhhgKXjRanh3cHNjtw",
  "key5": "4VRpg6SC6HhZ1VQaPgPiLqeXdyyx4pE4K9bzjqi7AEYtKpWfbmnCH8LTscHdmfaGjV23m6jA3ATK3wgdZyCT9ZMS",
  "key6": "4KuTjs5t6WEp77PGGPVfJke4GiTv4GWrH59afTnykEw7ZVQHhshudqYDrZS8UHzwc1SwvpZjeiLtRnHXL5xk6CQQ",
  "key7": "51iMLTr4gHa7nknNgcsuABXU12o1VFz3E6aiTpdt8Q7NxFNSAvBoLHzjJbyzwne4gYRYqAcuujnRSyvw8jngtMwx",
  "key8": "AtXjAqr51rX33GiFf5Zw2ucz1RDERmWQbxyTECiektGimThxV76kV83V8U8fcPfnciRNfjaRxiVVFBwcGd1Wzjr",
  "key9": "2XtBKUtrnGYAxAFQ9i38uSUH3EJvAxbeLBKAcK8QPFtxZhhW6WR5WScwx6GbBUBsBAzpiBF4RVaeoNzCdups16US",
  "key10": "wyj65RZEYds38L95X79etDwDXqYzhRg3RtG5LcfVRgDELEMVuCYipqrNYQbU67TpfBatoSZX438b9ESWCutvPeN",
  "key11": "4UzyyJq9GAM7iC65sEHrXr78aoM9PfUCLXdiRKTYab9TMGfni2M36Z6s5ahva33gAjWLZLyah8hFWioZB8kgQRpp",
  "key12": "3ic1XN6Xe5XUQ5XDUZ9UMTnrmZVSqcB4yYu4Sionc8SCSqVmwXTD9G1xiEyqP1vmAy718yY92z3pc6LcfQwTZP5K",
  "key13": "3L2989zMS678pYQiWXoFthMWFuUpeZt3czgyeJwsgD1F6d4PpeMYWCMH4q8o1a3zK5YBSHjfMECeBoakbFTKTcvX",
  "key14": "keBTCjrYMtSbEXXRJAmJnCifiFiEcsJUgehw5CKTHVyjA9ud9pUQ224kznng8Z8eRY6BZ9xg8er9EeNgkTT2xFx",
  "key15": "8TrnGxXdEXWW4QqKTMgmk4J2qupNTDUPaXrDC4KaYv3eBvDBZhLDXdWvdFxyUJA3JSP1TTaTizahbGeDRFGbYv8",
  "key16": "5wh915RQBhmaRqhVjc1nKBy9za8G4n4ZBFCmxy2DUCnzBcRRqw1C2qsW6NNcK74bk9BfiYUPMcF8ZtpXSCN2DoG5",
  "key17": "1BZsp39u5DpptwHCHV4jD8i1ispLh4nof5tS7r1cEAsme6PUfuxhGyTmvFpDevkPeyYTuDPxW7pGNY1LUJoKGec",
  "key18": "5CnuoskABuYo5dYv8uXKx5kgz24fnZ5XnweJgLydbn5ohm7J22Cwo4PiyC45aJcWmyegHsgNq9qGbtUxNnUkEmpq",
  "key19": "2Q6UzEiFXWMa8Po1KDQYYpKMHsyUzSp2vWzqC6R5m8Yro5VSoRkcT8sfK4CmMcTLFNhBzGwBmk9iYWVBpcwU5duv",
  "key20": "2mA84aXZmRos3zQVkMcdfYY4gwKaxgwiEu84fUe8ZCk78X74QpX8GnqQyeU8yx7VsDPBtBkjmCAWtwXVszwCmqn5",
  "key21": "2wqdqVAG8YA8MgX9vWYbSQZa34RTFUbwZdgMuQ7RLg4uJvpF3K47gRVjcTWzs1hqPC5UtC3kuRVCEvekHArNAE9P",
  "key22": "2QhpMPqVxK3mX4ZAt9TL6WHU18nQiq79tLHTZYZKn8kH8rJEddpG3vFcTqpxXAWYoTFLyTBdzDooGYxzVVCgXnWb",
  "key23": "3ijz8aZBRXvTNEiqTXnDVQvRaWJdnGPYLjEp8tjt7tUizaP8xog77TMCM41c3p7ohRK7SHTiR2yqwxna4SqBRFLC",
  "key24": "2CpeJUChFoUZzR2H7k4XuEpuCB6uNSu4FQLgbQURj65SXQubWGs2ZuToQaaZabxphFSR11bX8UiESfjEz4BEfabC",
  "key25": "3CFEFkT8AfQEGbRupHi84AyR9ex77TDLnAhXimNZwF5hD44ZWcGHbk68dAEgaqt8bjGzxas2GPvQJKmqzP4yut4",
  "key26": "5NpdvN22qVYao8XkTkHtQnQDbMQWMty9U18ktFC7mDEorL3TKXhSERinGkWAoLgVx9P9T8VJDz2mdRNVcg1HZyi6",
  "key27": "2tY85hUvvGmbfB2nubvvLrP64xpXWASkPfrnjdoSCFZrKHKSE3V3PQFHp9aEc4mTz1gsgL9gaFcb53rGVmvxcmE2",
  "key28": "5ijb46TxfcvjERRAfX7vzZuSzVEB75zmUK9Tv9H2DX2ihgbsaVDTpVYvAatLV7MXXeS3isg2PrX9AoshTxwqALCG",
  "key29": "5s3V853EQz8DwNyRxARfjuqHe4W9r5n1EfEVpxYogZcyxJeh2txRZozW1vD7FAaAxoYAWGEhjKwHrYYh5hK6YbSz",
  "key30": "3zwVyqM3getTzCJxGDsDbKoT93ta2wmJX9TKAnYy3iwSydzvqze6BocdVncTGZpgxhbQpmoyRVC3xSMcoV6fCy4B",
  "key31": "yyTQNYmxSwKq2bVtvMFYxCCa2x1pzNFeWBwrx4NmkZsyihHbKDqQ1kVZ57MFgQSHiptf5XrniyNksWqdcJWUpdw",
  "key32": "zVU55geQMV6fbZvAGcvCnGx2xtHkaNatm4vYYQJXjZQvmayvi5rGHaXkHoxwztUa1hwGtqCGPxpJDgnaQ4Z4uSr",
  "key33": "34BczGkwtGUD93vYYyPXj8DRQDu7r3Dvx7iAZuxfH3Bh3i6SHnjUR87fkhJFUEiDVmaDupjZaoYS1CDfKiEn8rju",
  "key34": "3Rroqn32KooeLEXDeBbz8muTp78WaXUcUBpb5VQF2mbWqmfrCnFPjAL4di1qyxkuphcwUysQUyDgCm8u4jr2xAsj",
  "key35": "62apiw8iMtogFi7RUhZRpDhRKRimp473Y6CD8eoneziwJSk33A4ccBpAJXYgcm8MPPUboYcEEwDRDGJi7hQzBDSc",
  "key36": "3g8cBxysyvcmowsarkSPC2co52vn6bHu3GXK8jX5aH7cENnhNQhcNC4A8C9iDrm4sKwsFyPqhxz15ES9PLBdQVai",
  "key37": "6gDtE74KajXMQi7PtC5cjpPHQmNq8mkSp1sbPuVYktt8PtenffedB52sjDKoHyb88Xh712JKUZFG5V9kXcTJUCz",
  "key38": "2r5UHYoC4qe7j8qBZxLc4GVwbapc14emfUioKyErXpPprXzUqi5sF5skqcbyiYv4wBqm6d46w3KXMsZnCdkQVSL1",
  "key39": "xbyApSVRbGtbDdjR6U4oLmJMawzykwcH7FDxLdtizwaRM3HLEwdWsZRE7HK9Uv7SzHhJVVqGmnaA4zUkK4arDKr",
  "key40": "5KKJYXJQjb4AksRUWErgvR9NZNPqcxWfttbk3HkBF5yekzZAWzktGXMDhBRgxjz1V4NLvsRUUmqPzoghFRu1TbhJ",
  "key41": "3fUAKmpWfm9TCvHCZMGSzKFZ6hGzYpTHWGs3SsLfrBND597ooUNMYoDwR9PrUoWmHxBeibPbSh7jP9BHdh1Wub1m",
  "key42": "43tUzWG7RZc8LHkNnCTtAVk2NE88W4FMnjfFcWLNHgAxvcNPqNEANFDhzwggzH2uifqLerQw4HabcKQFXckvKLGB",
  "key43": "TA9Hk6Yo4qyFvrGfExSrN3RUD3vyb1Fnyp7BHhrsfPxu8UK1PLf8z6DUbFWuoFSPMvjoqLhd2ucmHWTfwrfYtYe",
  "key44": "2HrfMFcHfPC7GNrEeaiAEhUarCVnAUQSFzrM5seAvC8ELvtrFfGR1a7qJc31oMUULXhchsbsmZ4d1fDmSX36dU76",
  "key45": "2YLGUXRGNcif1MCgSv6JnJ143V7WvXReyLKbxWdjH7zUcVGYyCfcNpGU9TRQhfkVzmiJ7MnvEcR5DTe2t1X4rhiw",
  "key46": "2EahvDTKUxmR1Fx6AujyvMWnKSH83SuPt787aapn2rZxcDU7MzB1ksmQ1bnoUi8X5UQVJMczVKku9h46Tu7t3KVV",
  "key47": "2pzbvKebDjqKxPy3k9HHQgr2vLasKL4QNMVHZnvhsDEgLivVB3RccocxGq5DxQ9yAKsww3UmkdufExXynVoKhkji"
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
