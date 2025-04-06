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
    "5bBc3NLC57QsCDZYgfbPHj4eSsDppSSDoaGV7ywVKiHjyhTJjFZLJaMCqmPHxS6AycFox9NM1FdYmhhRC47JRCik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y2ii6teFCVYK8cNs5sqHdPiR6cMbLJhE25i4dGRk8RuPstPgqbA4s9joPP6uKYP69a8nafPNReP1j5StqeRKJLt",
  "key1": "2ArDjnbi87h1pagijhTV4eKHe5z4Pvbv4FDxXdHk1MMxPhr9NVP9RexhSRhf8PoWs1D2agSWGH9WpyRjtQUBFcFf",
  "key2": "2BobLD2CXyUMgNg1u8YT1kwyP83jRdn4F8pvU1pwLHphbRJ2ZhH2h57ThvD2PowHLdYKt817rw4NVps74q6kTiXb",
  "key3": "4YtoJfs9xeJ63UbqL5kqAwQAHcSt53npAwRyDMZaTdXMtTS3WiakXmcvqgUnvXFG6PFVBKrJxz4z7BVnwhShJcSR",
  "key4": "2FGw9ncJFQRtR6vxnuR7QKr699FcF2BxomogEQAXFwv7d6EEsrsAcJfsy1hqHNZTigeAYHxZLKmbVRYxhJkBGmX1",
  "key5": "3kHqfkjSL8gHjAS6AwUeCfGrMNReec6UqW1EYiiEsHq57gUvXnjtUxdFVvXFNssAYGbQQjcKXwaZpEqweHmaDRgK",
  "key6": "5NhZsbcdqehntzaSA5Ln88jnxHNipDWwvczuFnmoEGvKmasb8fBkyBGheuJBBzADPwTAuqkPYsPnp53k9bNGrsH",
  "key7": "4TqqxioF3cTmgbnzZC7M7FZKvHXj7rCZbTkZQ9wU471gmn5EjH7NPMnZgCme1yNkusPpdFB9DwsYth2ewVYpSBR8",
  "key8": "k6ZKaW7MH93espPstPRBbQ2ZoNwR4f61UMGC4wwPE9fQXpxqp7AdxTWeo44smNZNUfKjxmts5tDAvD2PPqAMsod",
  "key9": "2RSnzN6B4dP74WSjW1w5k5FTDp7HWg2VnaMJVnTBo5ardrkvpDbnhj2vZzRo4dTJmWp3NRuPF8YDkdKmrwGfFB1z",
  "key10": "2pLkrFsndofCo7tftqzRiVN1HB1qcXHA6RZKbrjWUPyTffu7vwjisr5BXN5P1quQkPCLHxJUsho8bar2ZG9zLG8T",
  "key11": "4ynbSSgUkUgkiaSVyfrcWgT6sCjXjgF3cgTu8rgJ5ZEqVBtzQ5RHjRcnT5YbKJpvgwFPV2CdmTGcZbW9BJdoZGCA",
  "key12": "61cpBVxZggjfixpQZeMmaHPU4exsGHzMxSZjkQXKbaqiNJJfwM9gB8KcfwYTe1ZqG6eqGFrE2VGCCKdvfucE9yba",
  "key13": "5wjrZWE9mous93mVDLTZPMvmLTQmKfbt9mG9A8JAytvUQKFtEgXkqYHhw9xm5y726sC1M1xxSB3BV5voQ8bhbNNi",
  "key14": "2qtRWnFStcAYWfkWMk8MpPj47YaqSdY9J37qkjroTDnofpDg4uMgnGYt7ae29utfJ1XhSYvY7wygzRNFZTeDvJmS",
  "key15": "3k1STKZjgkNSDPJSVZ87J9SwdzQEKwpkmitPWqd67WFs1pS4pB1jkZKAaTXrDJH89S61VZsGtmsZiibJKHsjwaaK",
  "key16": "4n2aPRNSmTRRTioMgoh65gzRyRGBYC2MF66Pz1EormUnYrsTzh6uu1Ety9QhTJtddBTm6FHoqWbuyMnjcDX2zXZF",
  "key17": "419s97wBArQrt65TmmWoAmhQs6jP2eFNr8AZqDLCs5rk8NeVRtT9zdhpMmNX3NBsrySw7PsJiQLwSxoouJEY2hXv",
  "key18": "5h8ufBh8Lf8D22o5umHhgKuCWiZAn3sN8PHwDNpGogxDArjEob9PS7BwXecBVrHZZr7dwyHnr9a449eFvJKMa7dG",
  "key19": "44nX939ogZvnjRYpE5cJn5FmqjoKAfFngvWwmehZoEFigLY6HT326Lh4rQuAYxwqJVUcXxhtpfDQReNcSndHErWc",
  "key20": "qjbJnSbdqt8qAW2sSaGzKH3jHs6ecmon3C1QnF7535NtuCU4yVQnvx2E8tNx9rPNHHqayDi13pHJ8bNaAygik4G",
  "key21": "4RPi1z8YNH2qhwC4Nd9yphb2MmDWVpoJ7CARFbzeRUtjDBL3ib4XmJbfptk5MXRXarrhCCKBhbTzjhtDSPUF5FYa",
  "key22": "5pBh82TrhQ86wgcmuim8XKMXsGLu2sU2i7aUGQB88hPhxcw6GCwcx8m2u7sgHV71JL7aRT2te7FNDhooL7vmgTpK",
  "key23": "5bCegfnfhCaRS2eF9z3dkjc3rrndm6vn1dXeVxDJu3wtrk5UQg65gveqpuRQ2m39W56VrXACPw5zaSF334sF8Q1z",
  "key24": "RETDxzbUuWkXLU24ge9AzdskL4cvUWLzPA8rPArHnKkXAJABRKWfAGKvvr5VKpT1DwnafQbXro333isYoCS1v8s",
  "key25": "2ojLbKfqjHEBgG4ZeLcbeqEBR3YuW7aqjBkWN7sRVngasg9NdkviPvKeGtho1SwoJceT3vx8yvSX2jBG4NxovK68",
  "key26": "2JS5CyadaWYxz7W54wL2o1VPcgbgyXBjD2SMwUYjqRbqeoqgBmYDhG6eB3Uun61XrUTErYZkd7PoUL2G72ZsPWnz",
  "key27": "2PS2B1Dn6Voj6Lukad4xNHVETX7iLtGbR7e6kVXoQuW8A1h7JJWQmEZgjJBFeJ86TAnRmmG6Lnhaq85fvPDJAYaE",
  "key28": "621LWXB8DiVy2yEpG6ctgsyh4nnEV8Mt3QK6BopPpDpw75k19Z4gGGvJ7U3h43r8VxXBrTrZo5goq2djvzpNtEGc",
  "key29": "4zKfs11qLGUDcoASR8Pg2DPX7VSPh31K81UzrVQ7UzLbCXw2ap6UdBm7opS5JyKVJ7vKqiWnLbChYUmDLxrHTJyQ",
  "key30": "5j1Wb99awSYhvP8egE8k7wganhts94raRJz84vMmB53kE2hciTuJ9BY2UvWHJ39h9vxuEZyZn3E2HJMeQLjhJQZ8",
  "key31": "2WBDHvL5hSS4HeBDaXmvwCBQh5tFxUANP3KfChwFfpXDJAeYvWTAyWoce7Sf32vuepbzaFNcA7RotkBi7tekSsPd",
  "key32": "4dETgaAVef7KVtzEFacd7U14JioVzAaBTbPDmQpyHMUkamoALS8CkstTXBtaGD5VB6WDnUYq5MppUaFPxwMcZam8",
  "key33": "ZhqyLFz2theiUQAsoRqerTJX1omcadxkP4HCG29bxdiNnV9GuKV2zD3jVW5pNyAjH2CZpDBQW6ArjsMe3bx3Lrs",
  "key34": "4fpwvPC7qBPnRVcZKSGoDrZVAWjaTEKSC8SGANMWzBYsKyQxFr5FqjiDeqVh3rPwpRFA1huqkdVaDGn6VyFSjpH2"
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
