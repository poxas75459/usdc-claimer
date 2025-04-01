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
    "3TqsKqJ78BFYpFwUSanf3aiiQbQbkvXkvWie72kuTF4KaWC8Ri7Bi9PjPzKBstDL8QqByvJJ5qDDfLKpxgAV6PH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vK5zXaHDP3sVNWXLvc3Ft7fJKUAD3dZA1qNNtdUfwzwFUguQ7Mpa4MNmqJzNKbRy6XAiYGPPot7iELZ6rhW5Q9b",
  "key1": "3cmWCWTWa4ihPLvZbvudaWm6Pi9rYSdFRfUK33mSMDqD3SZjah9YPGMdqpN3J8FbLMZvCvxeahhn1TmYjpNW3Zcg",
  "key2": "2hU54R7qHTwYPVWCVhCkGaJNrRJXS74qy835L5bp7FqW3KxmqnXTHvAufTbtfQENQkXwKso15LhWWmzCFNRX8WL7",
  "key3": "3Hxu3oG8Et5Hz4shHUvrecPmHdRbBVViLjLpFAx4ooNoAWKMawbfiSybXamdbr2E3ZPkV5cUhWGHyJqbFrwzbRPb",
  "key4": "4ntvxTNkQJregnVEwhcZyS44ouCBJ9iu3yqDWN786LAFtTPBiTm3WcjkY4EQwYsgAzQymokJtmbp22ZrAAw9aJBz",
  "key5": "5ZHb34wpRMFYdxMTK756bKXjVQSMC5MT1q54cWFKEvSxnoXwQd34Hc41y1X36CobsRvFrYKRJtj47tX9VQdSNfae",
  "key6": "5NB3XW62jEhENfcor17BZf7CmtXXfALLjyBkpsMevBDP1ffuZcgR6jzKngHDgif276mEWtjERjfJZEyhp5HuxbsN",
  "key7": "5scf6n2GadxujchonEndyjsYenLGnTNhWRuVuKqHpUaokGbQvPsaLktWPmQxv4ZMCoch5RM5UV2doHhyHiq9WA2N",
  "key8": "21wU2NnhAvUgvw2DLj4XPHcKmzhcG51tK4Ri7pprmjk2U4o3bo5P8SB5dUWHXXLLN2KRJ9rVrFLjGWr7nXHP25mJ",
  "key9": "4NnSot34opFDwj3a1VoGTUncVNfxZNhtu67bwo2PyGGz6V5CetM3WhGxfxZ4Pxpq3mdckWzwWV5En4EUTkeZMaPx",
  "key10": "W1u5bSbN3ndgNaAXKnuiumTi6Tz3iE1zaKrWTBA1BQnmUm9PZEcAEctcFSAt5sjyTY5tgm9QEPjBQpCCcbcG1au",
  "key11": "5qEUKrfki9BbDhbVCHEoZDmJaJ6BuX3j7qN2LCteJXcAaXTjKuk8PVv3tTqRrvi1XQmRiqy3Ds9QePTdjgwntgzS",
  "key12": "2DfxpAdsFnATagCd5TfkxnpJSRoEa8s2RXXzeFkiSGQaPsyN6SmD2Sm6v78e2EWUSFzh7FW1Ap4efNjpdB4xnF7y",
  "key13": "2CC2fopGXeTrdf6K6dhRE6jzf9cXCfJSyuS1dAqLhY4r5qg956krnV8TGfMnC8hBFsds3JJdX2GZUPA51qkQ4wLG",
  "key14": "eMbYPAJgU9fWikhA8YeaJUyuSRppvRk5aadre3dN4TGrRFHc5dpqFcKTwudbkjR8pd8H8wYf5cQ7UfvwiR3vS32",
  "key15": "2X97Qi951pnRsRZMhh4gXzMrPpuo628b8P58bmsmAkR25bf64WaKfRhAPg4Jwg1zFcg2icyLr5mrN2E7aUASDdGt",
  "key16": "63UDyuohohMuS6YgBE2aybH1wA9qXUoTPAvKMBJMUjQMwud2r9fmE4WjviyiLwb1LfMFpSXS5zSysmMrYzJRn9E5",
  "key17": "3ciK9MeAZMHiQRn6teDmFG4wbrLMT9uZcJ4x5CJ1LQhCSw8BEtSedDEZeSVoRdcuqSoX89dajibJDQrNMT4AaMjT",
  "key18": "5nbjaYJ9M6YNUPnSn8JpWe9mpDZJgAgmu3sW5PLw5fGvrivFS6DxHoCLBqJeU4kXGiBxvQFfZRfPxxZJeG14bXnv",
  "key19": "4Hsa7QXxSyKMXhcf8Kr5yDuEthstyz5qxA4w6JNJJL1LVqKi86SjP1vMe8NkrVxatJGVJmvTtqHvH2xGWbWzE6EX",
  "key20": "5fw4nkgGuz1FSNWcJMLMbW6uKYDsxTc8F3snMKmYTR8QCTXoPrfHf4g9y1WkcZvVLTQ9dveuMtTLJCC76p7oJ428",
  "key21": "5DQU7dchfUH9KjT34dAHYFLJBXiR7vBgTFk17s5hqt6u8uz9g2R1MFXnyy5e4b2eY6LamWbWui4XzoRKpTpUtcDK",
  "key22": "2tNExwNStNxZGDqPSjTNinr2NXt7yfXgEuKmU34dVedTYkgrkXyiXsM5TqyoP5WLYDNhzwHhLVq8nxP6789zdSoq",
  "key23": "3bMRCvWszQdkrhH3Wv1BsYeteiy2auRDJwme9TJYWKMQYCtmykiT94fhjRbLwSmMTDGjWRyEeznUGoD1akmCP3Qq",
  "key24": "4Me9fMn6UhG5WT3Srt98RebboLDMao8WMe4LKNBhNQsuErbmQR9qnwg3iXwoAD27Nnhg41pvxSHkogQcY4XWZHpr",
  "key25": "3MyWAXkxwucNgjYHriNosdviGm7auP5zspg5ZpovDfFNZUCAbJf5W17ysenTQSqNGWZ6ifYS4twNH5uCRT5UvW6F",
  "key26": "SUjkj2DYqKGPjX7JhTtnzFB83VjuZqLnbkBHeLoh3ibnrhT2k7fyvBqbZAvT8GdbugYEXxVmdSDyhPumMj49GvG",
  "key27": "5yNL93ZMURBf4LKNvyXkoMaUM3EfcBaYnEmGHBgv8hHgBjxDJSj8bZdT6rM9brxhCdjNSXpanhzULE8wake8fhhn",
  "key28": "3akbWYGJDJrmCGCpzN5UfpQAFACrkb2PPnjJjtJpC7sTVo6ZmfeFMx4QWTNbUmDKVejN1BPabCd8o7rbUpmpaBH7",
  "key29": "3mFPBAvv7g1a9u9kWUMna9ZjEW9Wz7ujwnjadvGjE7mE6jy59kZ3RHeab76TqSZTxPskhvvh58xffQWrRqUVfULC",
  "key30": "37cn67GKVqZX9LWRUkGScmGB25QwGWkaqwz93LVWi724jnRRAdBo2oH9JqdVryTXgV1z5qy7C9veaDRdiRWgCbNi",
  "key31": "5ahLkGwGi5djaRhoz1a4Znn6CBJcZEExkADjD22Lo8DT9Q7cS5X5fMxDvKpVyNFmYA1SvKdpzADxw4DFep81L1ut",
  "key32": "4orW5ipBxAvQLM3Y9jtLNySAacKHQmjP8ZuD4NMHNGHJTkv6imnkmuTP6NSmw7k7FL37k2nvFxc2CHFCLow79pSX",
  "key33": "3giK9ggva9jTtWdjkh1V1jEtjPtrbTh2S18maLyiVSHhvi8xF7pibiW4TuzgMKxysni1wP3u2mjqf5BzRdk9pfcL",
  "key34": "2se9zH7U17tWMHnFuXdWD5W81NN34wVfdNboqDtVWg3BQa5NqJqhMf62CEo2MbeTXWMSgRhXrEf9t79jGM1nDm3A"
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
