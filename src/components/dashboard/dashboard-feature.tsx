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
    "3zBgMyqHk1w2yjxk4ULdDdmTZuU7FkGLVY7KEaBeaxiGeCnGS5YVGkZEMcMwcRJToktjiNJBjnpGPSoKyb6Lq82S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iYy4GFhqBCRJ3zytiPXu8VfDffBz8VBPwy4A3L4XVM5KvF9HcVHpJjpL5hVdtwvY7FmDGsWDkPASFFRgjwUiuE2",
  "key1": "hrAg1LYQJXD5TnoqHys68FwAkSjRVgqSpKYJtZ4zKbCYR2CoCJM3k5pNhpRKBC9jYHd79CJhazgMuBAux78Buhf",
  "key2": "fuCGFrQQojS4wtTLqNP4ZJndyXUmPF6jMZ3KBpuT72cxfYwiYyARo4RUrsgvUvX9aNZUrEQh9ufP5RwuoNJ7T7a",
  "key3": "XExXKVRsqQ3CL7F1KARRBUtvuTAiFaoeEX8guVBq1KTCrsLmdAbtBuxGymUnb6MopGRUmLqwkZzqj1fWTzqJz6t",
  "key4": "4n92zmJ39n58Ff7GCZZuySWYt7Qn68qxnG8yfk13ftvfuYmJpu1HpXP8BP8S6xHrXaUWNhGXWos2GyrqoKC4GYgu",
  "key5": "3mgbd5tYQNWuAV613tgYbPgREz4NRYL7G8QKjxcpasvkm5fZaTBDV6FMCJnqbpRfKyFFTqpH8Gk4uJC9LrpNiPrX",
  "key6": "3EjcvK2YKXyGJaphCcB7LfumjGk7WY9poWWUpTDv5qcCwkYmhpzQWPvoH3DtbsDKwUWEoeZTz7XrVAcEhEJm3wWZ",
  "key7": "VygHsfRXqgVT676a5NQjE5tGMnGUNEkgt2mFeTZ3uJukJimyHRMtvkXpjnFH5nQmfdLiYNLnkDGP3VQPTYpFMsv",
  "key8": "62vNmJEEnn4zH9U6hPxuVAJecNbHwUXPs1DSozxKJEJEY7uWumGvuw5m2UaZgCJwtv7bMQfQzz5Rw9qvEQDZZpmz",
  "key9": "58z9gCtJ5pXbw16U8TLRsWYcjjFNtwRc5ZjmZSudawWcckyqAgG3eZxFoCyM7sBm6i5D3GQHnpamRgHKEBWYviCF",
  "key10": "5jzxbfvt6qz52A16uu8N4sTeNyPn365hgJ5vcbAp7JTtDASMz8AGdDAwnX1Qcm7MedT6Ek67LGX8rrnzxjZ6AdLt",
  "key11": "33hevG4bdiFQauso6K8r8ADqnYLUnwX9fYdLv2mN6wEv4edPGvbYbm5BUc8ik6eTvatPPhpEE4N3tkTaZTPXczSe",
  "key12": "2QmjcBc39oMrDUgwZ8edHAw4hvv2zjBANzupvxRGmENMDCMUurZC5qyf9Am7s6XwyDfpxzdZ68G2VGfD1T6MehBW",
  "key13": "4LUJ9eKeVvsGpGmeWsj4wK9SPo6RrjA2KqcAMaVBE4VW939uA9xKcUDHJ2hH7WNbEAnhhefxstxygfzufssjuwDT",
  "key14": "5qE6rLGkUD8XBkQgGD35JNz6PVxzn8V8M2qa3Fiwuje3fsc1kXnyKFwKe7QuUove4hjSGYdQemJT71i2VpnM7QHB",
  "key15": "5GQMyWENqVH1XQh2XuqPS5eynY9sFdmLRuW51xa534SXMWN1UeLYKCLBajSKnf3u5GAtdhBtYHEwZrqDhBEUThfj",
  "key16": "3GEe6PWoDSMJ4GZnVVT7RpnVE6hwtk3DxJhkMJbkDHNpUJMrHgDeuhx7vFBdUG3n8tDg5WEAPwv9Q8k2v9TEp7Wa",
  "key17": "4gVJouKGCvuKBu2AuYrHrp9zh661qZ3x9tti7exk9hHU6W4wheH3o5RKeNr4Ckj2mpgk5JQAY6cuC8ak8P2aV7Be",
  "key18": "5g1MFSJGMoLWc6ry2F678jZzaZCkazSTBxLCqphfmpnxxicsExMp7e1v6bSUJUuAKKvQq5hg9i9w1M2SaNGPfXZm",
  "key19": "6YRuWBMr4Yoze5o2mvAeSAjczrZsZSEnN513o8a1yfQnfpxzANKkNFLxESYMoPcP12ir48UhCU7dUmWG3V2wP4u",
  "key20": "38aVYqprmz9MJHMvuPewfoHdgWcqZzp9xnAf42z7H8tzqr9DwZMYxRP6MqHm5stTNHu7jkN6K8cPZDDmaBi6yvUj",
  "key21": "EBVX1ciyMxwrdPtX6d5mBikfsQKN5mF5nKV11ofNhCNR12bWhseqNRc75TXSBQgi4FqqReWLuooVfhj1MtGPbKN",
  "key22": "5me64X8FoeExUMaWhB5tGaoGMGdbHCLe2AD4etoqUtWoBg5gQuScv9Yb9n14a8kYHdpT2aM9EBBhtc2AQsecyZou",
  "key23": "Po4ujb33nE5AXNGVau8U3nA5FMg2DeAVZSmhDQZASj3cAkZ9b46gHcr5aewjYBY9meohmKsdpPD5357qm4uU1kF",
  "key24": "5F385K2Beh7gf7AYwmDbsyYh6AfY5FHqdBFu8VGSqfA1M8X9vdapcRFvQsbmfjDsjAmkz3cubVQ71Vr7JuSupvUf",
  "key25": "5SRSr6wAVP5Kce9G1CbaVu53ZgZHFhdiRs1ZT5XS5VtFtLRWnfQuns5nJrE2mTwcGCfW4K9ofSgQzJcWVV2CAALK",
  "key26": "31qnYxU7JMZH9iHXf9E3KbAJysRnPbx8JUydZghfLixzxbS94ebDgRdp6LRMDLtMxRPGhu71fCMxx427w86b63Vg",
  "key27": "3dLhdFJQDWVuEopFpE5VxYFbdvkHvao7mThUchq8mRPm8uUDebrrTmSHetTeN1RCKVc6svABedmqfBdbHjUk5Mmx",
  "key28": "NeFB3WApjs68g3kvvvY96kCRRcfhsccaSn7b4HEMuUsDhEXiEsJdGzMLbZ6XZdvU3BES9vqMWmEodhUsTZzeVKL",
  "key29": "3so5UQ759Qgd7WfKCUpbdfhsYmaVuh5z41iPtqvETcoZLXA1wBw28fKAMdnboq8um6fXUjvFjyrvoKoAwzKriSJT",
  "key30": "4tYxTx1E8Cp5WrnUADZZ2MWKubkVQDjmtJD418GoXjiB47JsypQcZWSJ4AGmzPt2YFNTi5V5Kgj7TBkXDg1u9e5x",
  "key31": "4wrjAvmZXZpVL61acsPwFUZoCQkqAs8NuARLzT8VH2vmaiQSnZJZhpAhcSKc63eSJ2t9DGH6QL7jf2owtoESxyZR",
  "key32": "2fJ55MtZ7TjxQ9Cq5WyswGfKq9NeZmv29XhAm6Z7imJoA2JtWFnv2jvobML3BeimBUYdTNais5oJpQ7Tmdaots5t",
  "key33": "5SNAiudfK2PtpWdii5hZUDmXMXjJq75iX1kBwdxUBszZ936KTBv8i4NDNnqzpKeUPAuvxWpKsoZxUNcbLEbFybTu",
  "key34": "5UfeQfNAabEy4wfs4aeQhrDTccu8ufoEbYUqA4oKobYnawnES2Wq7bfLt5RBVp6jDmz7Pwb3yot1VnwFcVQK9Rw4",
  "key35": "4U41mTtmwLtE5LkdLnYUmJvT9vDEQkpxfuTbvF8pyA21S7biyfgdYht9ww5TakdSaNaYH8WuRDKSoHbRF7br7uLT"
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
