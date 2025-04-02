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
    "5SNtZJjTVtAQ8TFAWG9JgjUf2zhr1amsTUj3erzupini1SJucDKYRnNPziRccGZ3d6aaiqoz99nv4pckfaASZmpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hjJCUhpsxCYhuZviXwPC118VVnWgt3zeNfyg2EUYVGFKeaMFhsQQgMpXBaiYarR2kJRzCdNBwF2fAKBuESurPQu",
  "key1": "qJanQhYvTwc1WiPeCtnNSg621Psujjwaoqwwg2fzx6A7hne1S3UUndP5qx4iyja94FeaDDZppBx8Mo4GCw8snxn",
  "key2": "4KvbaFcEgQGMm8kNf11JucsgrM1LWA21jPgnni3zriiE4Q2bFb5ktzPbUYRWgHnJgLuaByYaYtF5SQ2ugeUHffqH",
  "key3": "4vc4zVC6pwtABSgFmETrWJjBZdADj4noGzGB6sPKqNmY2Gn26KTdF5ESJ147XzGDRwsbAgq4FYvYVawttC5mmNzD",
  "key4": "4ZCW4uKUjArUGo2rP9qnUBYz7DQ7h94dKnBZvwwm2umZFfpdS6gF3KhXQvY1KBRTgGuZfXx2rebXgwXMHV4T1r9u",
  "key5": "5FoL9sqGs8WKf9nZJPD3HXEgJzSKM8JT5hCz9t2Q3ud66pCAgierNTTxwSBeNppemHMsk45ait7MhP7c8zpCzuDR",
  "key6": "46icTwLRD3s6YxHRuZtcSWBAowYtoRL4MBjtEJzff4sAo16JrMMfPQEZKX2tshopRJb8ud54nt34QfQZG2T77PXi",
  "key7": "2TXsL3U2oehDePNPCQ2EWaiqbAV2zneoW1pYefXuSDzRtJ9hKXRBuLpWyF7xVxQbzrVrNuFPCcbTT71VkT6mt7UX",
  "key8": "5Z8Lx6AX41FuTn4NCcR9fBxVbedpxwLGRqU1mXUsUD6KirVy23gdBuvGzoUNaei4WJNAutx2tS34FQizrw5KNsrX",
  "key9": "4LTUaKKefDPfsR7QdjPXnGAvCgA5oGnmrLFEZbyDmEwbueAqNERVzncu4rez21UXZANgapDADVA6WhNzdVPxWdni",
  "key10": "3iMcFWT4qeVDAcDV33cV4z8hxWqWUzWRJHmqNWeVPEtPT1vi3W1jfbtXzEkt7sQAXA6CoQK8XYfHmcwpyxGQyMmr",
  "key11": "4u9pBg8mUeJF9i2MQURm1HfPkZyJYE2XVzYJvFMGW4ERXUUWzgCQZWjxA2cSR1TD6xdhLhNf7rG1tF5NQbcABmY9",
  "key12": "46vFqTzcbB1XiDoygwMoe1rFXLF2NrMzW5JnX834Q7jq1EdxosPBcUenhPvMkwYb46w6axu8feE5jq9U3jTE3vNK",
  "key13": "4cbqThCJqrvP6tMVNeZvobn8ipi5bcUwGFJ1damtcksPX7HkhYbA2ZfR5CdW6S2kGixXwheNLMMRYXKD8h53k7DK",
  "key14": "615BJBfP185V8th3zgw5GJkXHjW6cdQRJGgwete5h82wdYdez74pcXRvHT9Y8FNGbE3KXLvP6PA47LapdeamsD6m",
  "key15": "5Z76m8yn2FwiEBsxmjwcho74n4a3tukxMbGUyuMCRw78ykS2Nckdqzxryc54dXkM9QreUZTv1ZnuTPdkY83DMkAt",
  "key16": "kE3ShJUfUm464vq9RK61wEeY7jCsR7UTiPXW5jJrLNjFVwPCKvrAaAU5m95nBa2gErWHjixZzxfoWyqr4Mt6yVC",
  "key17": "2feEd6dPiHw2aaHxwhrp7crPHJK7QcpyWhG7KcLLsonmqsz4nz7uBi2tk44kg888sMUD6MoFHNEX8SEPBeK1Yzpv",
  "key18": "5uAjdMZjGKngwqXxeviU7jWT8TwTh3QaZQAkrHpzgf6qyTQ6P7nuBqYwYzHNdAjs4PpDFiBnzD7kiGbXtUze18YD",
  "key19": "4q9VitpoNWfmTVhD5snLjrzjRUx6NRbQhkAK4CJ4ahPP3PvQ31aMdMa6YmRfwF9QKmS5fWRYLJXQ4Hvw6huAb438",
  "key20": "XQz8am6TVK4YkRPT53BDtg1bjQzDb83sb2S83TX47UPiVVM3uFXa4vq7LeDyaudfpoVRTdmHpZwKobsebdoAVfv",
  "key21": "VTqgC2P8azURY1PYFYgsR3sekXw98aK6zGyE7d8hhhPVKvbh2dtFbhrxv6mxKa6wgvn44bE98Ltw82raaks7uVH",
  "key22": "TAjgunS1gL24k2wM2tJc38o7DKRR4BHLxgCUR7YgBb6V9LiPusJyJbgjAkXgayV1qEz3dVpAEYpUH7qsPyFkSt5",
  "key23": "rHeUPDDRaCQQdrb6vtjy4HndbcWgc3TZD5xcWwz9mj9p2XhxnUcsWg74ky2rjUt4UMS8XBJAGnBQwPCoEEz4KfZ",
  "key24": "4Mf8y9mRoRVP8vBZLdyv4vFEF4gfN5E6NcaxRNQcYcxt8sem3jivVBorGCur97jVAWgY3HASaZKYBLCNmG9gG7n3",
  "key25": "3437Rv9ER1rRDhsgrggg9jPP3SyhTtUHRpHVwaqwA3Ngw7SgwJjA9LkLdJHNGSajXN64QjZGD3dWM8VTZs2ojCNZ",
  "key26": "tBZE36rXh36GiEntERciQrg17jjCRw6hgygBBBX5dvms1L3ZWejVscL3TPoidwjkMxTEge1Svasv8QYubeB1KHC",
  "key27": "24tBCenVjCYuq9A7e12HjXLbdtk6nthdN6JuYXPHNnJpJxmAeHKZ53G5BykRP2GupMrfcXRvpzJ3pNMvDVTLq331",
  "key28": "4B7tsd1papsRxj1pDKWciKQm21V89Nmg28TqcEjqpb3ixMb2XVpKXPoqPRizknAUnHumqvpAvytwrhiJM75btY1W",
  "key29": "3UZ6ze95kFBbZRrP4BYGjjBb1poc2uUwhW6qB2YB13H9fuh1typUWKqHFeYeZ1D4WwW158h7WH4qVFFNA3WM66MS",
  "key30": "2UhnDo4HNLXYPmjX485tRXEaCT9PYvfiVtCYpjJ9FpngMNU6poKwjAMimXXntiyMvS85hCyVYkqDwisGqK5aHuD7",
  "key31": "3dHWjkSkQzwoXEicUKiG7mZP4AuE997xsioyBSaFKkb9fk3Yhp67M1BiD7EETcfx4rsZuBZ1Dor61jgC8hQSUivJ",
  "key32": "4gfvy9aihbHfJMZi5MBdBFu16u9ZiVLsL5c1LtxSaYKaiBQsZtcfLTpetEXkirnnHR5BuWX4jxVHj5j9jbpz9BRW",
  "key33": "4ndgqMePxnAw3nrhUqM3VRgzikFBekjdKmrRKe4v9S8BmcviWu3x3a2M1y9aR7ZX2pynNQGahLsgiJeqapherVUt",
  "key34": "4TdaQEAKjhkHQbsw766gHpJCbAbdUvtMaerSCS4uxzBVKnARkkD9PHbivovwPHDwVgLV8n4gzSn5VYsmYMpLFisA",
  "key35": "J5q76vaXg3eCadnvfacPTLrVodYx1krgi7dbDVmniRV1MTFo34cMDzQQnizbD86ufqugY2Rr4TJeMFhNeV6b3cE",
  "key36": "2A5evBFNJmUvYGqvi5YFjuZ3kPWXmFZX2qt7286QV1GRzFjYxQvPP4tfV2WWCN6HaqAeJTW1M7QZchQQQmj68bXk",
  "key37": "3YLJMgSDTFxnZG7hmm9kHHqXDJVU3xZiCHFk8aZ58xgpVbPN5qDgv26cL5ux5csRmZKwLFjrhAYDNXHbfrq7ow71",
  "key38": "2cWbPDaTeq86S9HR5VFmGtXZw337n1rme4DR35VSSS2bbfY1M6wd7VRLwUzdnVmtSTEzQi5VNhuBMNwhy2eL5fMB",
  "key39": "4QJauMsubqxG6KEvqpRXFL4fst2vdRSoLeA6Rcb54sUxDyQAXyUHG5nTaTGDJVaX251VZ8pzXCWLQPrXEhC59Rwq"
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
