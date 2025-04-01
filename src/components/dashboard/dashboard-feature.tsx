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
    "4qWYvxqdutyyf39TkHC7tPVobU3ERupN6khP7qoUkkdDp3hRtXuxbt1T7v7BzP2L6RirpmQsySHKmWcgZxDQwJPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uqBpeFujKtvEdHhGag4TvrgjyqAC3pPZoCiLFJRkZWQaG4pp8gbuznuwbvcpJMwfQoTRRFdvUUpNHgVQyJGPtec",
  "key1": "PaBSyTFZzX84bZxWcTnK8QU2wPEJkZKyntXhpeoNWAW4cB3f9HHMXyygx7TtryJfwYpNbzzbYEjT5T72vT3QwDn",
  "key2": "4ZKahVtsAL5hChCo7hH4dK26dvbvGiyWrN8McpBkZkNpkydNwK4Xpys7QJeQHuwtJEWq6vgU2fBM6Gbyuymn4E37",
  "key3": "67JbS1G53yD8YFCT9V5pcCgrUV1qB4bJoLjZj9jihSm9VSUNCdoc1qR2AaTWhGSV5MTQtPSGCVZLyniZZ8Fe6ZbD",
  "key4": "2jE5m6x5m4nkqJ7toBaFApNLAVe6s8TkdM2JnTEjbBVf49bNEAxVoW5reCJanzT5vtQp9TJo9SUcBR8ZDFVQpYPa",
  "key5": "49ftqCZBzAwZYS6MBiCK4kHHdzgnLrPgov4jFbdp2ytBFNfBLQC2VGCRYU9WutFUuhgfauPUHadS7JaC3gFkDr4e",
  "key6": "2g26bAn25wgAQs9vkXCxgUgdYyXBDeVXMiHhmdzhp22maegHbzsq2Ni76vxqUE9QNBhzgXU4yvYgu5WgxNUkR9KD",
  "key7": "ZcmYGZGgitcJ3quqZe8DNpZH2yYPhGtfWJMm5fBRPy6z1ukcf4xyTZgnZ6iffgC178FSrHKeBRpqt8zzQWm2MBD",
  "key8": "3FybjTthgPX7zAiJFYhDT8TcGWTaQvC8TbUC1zr5G5zrsnGYNxbKLwDwUc6YPYEQvc127yc8FAhBRTUtDbSRTr17",
  "key9": "3X21dmCmUuGtVMmQ51WXLzCFKKKUosVi1G82srxCLA7jBx1tMyCpsL8tWqpd3UFwy6jCKEAKJ5NQVCLdYfgG3L6u",
  "key10": "j96sg2j7VWwx29ewixQdWvdPqpFxjCSMSCHZo8V3Bvn4oCKexMKhizLpyB2ywsEHjUtTqZFafpFmTg2ZkLg8uTJ",
  "key11": "4rjz1fzD7kBtQP7QQsxD4j3Edq4cLWvDhug38wLgn7HWjRSNxJoJaUbVnjsV7YxtSpujChtGKXcCssq8AwpCSy5T",
  "key12": "4xnLoeqBoACppB57FiP9iYf8QpYaLcZrcAznE6Tzae2xwrMjjU7Pu3CWsvhrAHwhHdkrCqJeNG3VBsasnqnu3kb",
  "key13": "39TM3YrgAXgAAJcV7L3yDd3pzvTRghpGsTMi5XYpDixfbM5ZNKgFat8N2YuWu2GCd5AiFmGLkyu8uYwbDcJRyn1H",
  "key14": "4HKvwHq2rghJNvC63ujnwfHHeCJs1EBzAuom5CuY6QJ3xV4RD9ySH4xsjmADKb5v2dQCqBhY1Ma9r6m1GBDyqHyA",
  "key15": "jj33AEfWSC4afRNcL9BaXJV36pDQgqwFc2qX8GwGBAeoDzQW3e6hvmWF9QhDovm2zeunT8hc6VUKb4ni721ahjh",
  "key16": "5QyBAJWf3CFtUrgbySnDc8xLxDCHcU2H237fvCVBYrgBC4bHc1gDPbDq2sk9R7DDQZwWvJ8uf1ySa1zRoTrDfShJ",
  "key17": "Tzrfu5KrBMAeQFNLfYcuKJBGgQdgYmNBQ2pusFVgmM8juCL1NaUnyh7dP1rJ64YEUoannFvQGHvVNECFNkDTU7F",
  "key18": "Sw8ZK3w7g6EPaPUt1wNkZvwdqxfpQFRe3Gk3dn8ud4Mbgwz6ipjLuEcTpRBd3zpCfRyWbWpcTppQvqbKWEXATJW",
  "key19": "61mE7yrTPKKwxoGv6P9cTyfU1jx1kfNkwnNtAhZEBCQhtGi2PXxURxu9c65jM2q5wx31DxBXJGC6QHn8Xd4DZL9G",
  "key20": "4SgzNqhQcjJE2dv6ZttvLEJNaecM9SSWJPAiePNDvPuAQZVmU1VSTgZ3DvvDwnDaqSDxbZdE6spCaEMf1M1ksfmF",
  "key21": "2SfiiN8JjPA9Z6obRHJnjP7gN3o5CFHd4FaSkefZ6AKdDVgDzUf3zUAK9zv1pyTnpUtbVGatD7hnNUpxTf9PUoWQ",
  "key22": "tdLwabxji8B3bBiFfu5buLbWJ58Whzu9UMpPSbDSLjueWu8iJHnB5aUC8NBVEw1NFtPcRakFZjWMZgLdpbPonUW",
  "key23": "3LTWtVZEzFWrX3fstsQrZ5XqQBw3nGnUzZ6YbybT2RV1iHk7bf5XG9t8peTojfSQfRhytUM6SATRgyPb3LFck6EH",
  "key24": "2cZEjF2goGJWs4R8RtiQewJSbRfgH7sypwtrQLVLnmi1HCBBySCADZw6SQqn4wWrJn12CeAFXW4g6rX3y2ip5L8n",
  "key25": "55WwmyG7qXHv8nXF9JipcmgYUK56XjzaajjZniYDFrSiFyVxeGPDzk2fdfgGAQdn4UAErQjMAc1Q2D6qX2LZnVUn",
  "key26": "3xqtwGY4x6dHHCbwz58Jo96B1DYPTjwaYBFVXpDnnBzCjeaCpKS6m8iX48CY4hbNVJtAfqxstdqMzk5szUWVkpF",
  "key27": "Nw8P7pg313E7kpw7mupvQqNHGRXTti4TdbFVXLARpUorUo5uHkrX3Z6VmSUfjLQMESjsatrWW7R8rFF77u4fj92",
  "key28": "24gegoNg7UHhKfWU5XVB1eAkeNCTDYDMvMPvXwvJq84hDeafr7BgVbxHgsEkBvHNMCGZN9GFFBAm963RuXeQM3f3",
  "key29": "3NyG4KR5Z28ayKXqnZHmw4vvhU1GE4dbWPN57JQxdqNYVGr9dJiNjf5kbVbDW8TYyQoREJ4KWAP1igJsckDxGKmh",
  "key30": "eozcSodYJR4gF7ChhnUVJXH54s2toYyjBoG93eLH6cDEkWPafqvd5jJ5227JtLfJjjikGuUXuXwWq9SYni8Dzia",
  "key31": "3dVkBznydNh2mxmEnBme2uatRtMiAxRdxMDRZ4nFszfB1ACefMXyKbXnjGVuA4WQ44PdJKdbR1TwmnRAhbtxUDUj",
  "key32": "2KWpHVu78J8pAubVP6HgvTHtWWE5Ex3kXP1L54QsgXGbPmaZwiFnq34Upz935cUNkLJzBM9EV6RsxrfYJ6RTBEC5",
  "key33": "D72DoPma9tu26C1nCFZfAUA6whtrYdLqa81xxLijHGrb9C992WxHF9SsRCetkQRJ4jMuv14t9MDkaXK2W2Nvp1o",
  "key34": "5MPCrNee6u91Ep8MDha8JH5To1kQSKXwP2KA7ZaSxgES3i7c3QTJrV87HrthLrGNEKSfSTiTfcqXUyosxxqadp4T",
  "key35": "B79WikSJjLunZPCSYJKpsd3XYAKPr6vEw8a3HtJ5GByouWoLWtTs5HiZwEBouXKcUHgKeXZ3rC6DqoSQ3KLm9JK",
  "key36": "2JcfUKcmrnzLLt8tQ5kqWQmGG8SkAtU6KFLmPPBK9wAci9mMHsrBn2j2x1a6G7ULvSErx5baVu2P6xJkHZNA3bz5",
  "key37": "2y2FBKu5PgKGdB8vAMfVeqNevdoGQTPNXZb9q1MTg4fMpubf5aUWAHEv1SfZgB5qNqjq2PphoQeXYSw5R9TWW7jJ",
  "key38": "5NvEEchDne1WNN6Hheoo9R9BheXR1Sz43LWmmtvU7va868jMLuUzt5CroCDzikfPGoNVKc6qGxk2hGZRcHaZdnc8",
  "key39": "59ttm3quC1nMH3r9zmsv6NiuTGGMtJLcYB8WB4DuRu27s2eRcwdSw5N5estGjXX7ZcZqQ3nsRLNvZMeLsF3mrj3q"
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
