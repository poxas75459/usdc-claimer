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
    "3PcM4eF5Bj5G5uQnqaeQVJxNKaC9VSMK7q1mo9f4eURT8gwEonQmW5cjh3q6MEXjyGeg2qbZ2FrJ1fKkX2oHmb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2djG7W5T2maHyyfMkynCLBVijTPDPZe9a2oknJpLaxHzpjei8PSG79qVQDBaadB43PcKU3MHq6pbRxUcvjcYDLdJ",
  "key1": "5QPrhp9Rs7KgEPGu8qVZ4z7sbTakmkAQYpRZ4LG3mcceMqd1RjCfgX3zpjbRM2QMdiSEUhEMNJQKxFcbKkxRLeRv",
  "key2": "38pptMcCWtfunbXJi4fvgJgTXp3nJLgw5tohp1C2jKUbkQDYWwzsFfKnmHgWAqKEduyJGt3arvCGyvoxwjCG8Zi2",
  "key3": "5oBuTqMPBoafSu978zMPzMoxSGHpyANrM2PBvt6JLXA4v4K3UsoEsWcR44SAuUTShp3FE7Y8qzPZnqB5dctCCKnZ",
  "key4": "2kAEYsoNB3ngEZBAWdxW5qmL3igEtcwReDX841XQCmyUb1XrupWyZy4hq4pw4Q1ZuHJpdptK5Beaeigmx12Pn66w",
  "key5": "5nFUH1zw8jcNYjUf37rc2aU5PowVs69nHYJ8cBLDjB26C32i6UcozuxXB933PLYhqrQuQQhUFU6xDQSCAyfiGRhN",
  "key6": "s3ZYsDUd81SV6QnrM7mTcWnYbb7G7PD8xjxfnssBGcGQF27EADAc6tLmUUsFWaf976ed8J1sxJBwBkPoUsHZFwP",
  "key7": "65aLrYBpSndCtBWYUwVPbGmxFLCbSek9Ga2X5vmDS9xUjSiLpVCmR5MAMXagB3vTt3w7qKXnAeYJ9vn9RExpb49Q",
  "key8": "coUevpJCtGjR3r7wfwifFJchBy2wfLZWobcAhF6zRicsoqd1RXStPPVaL3VgSSemxQ9U3BjH2ntLkiKVp1oZsgz",
  "key9": "5NWfTHromaUqQn1R4LeWWdf8mFQJaDGrnygLyFgUTkCpaKmEip59hXFm7cnDvEXuLvryfXWRTkAx8fppxknLEtK8",
  "key10": "5xh6aW6r4vvtkqtfsYhTRYiFfWJ6SeNv9gN8gowAUiPVVgDnYXGmdT7FJ7dkyMtkTqvCg5fGojd6oDgBkRhXcFAX",
  "key11": "5t2SrwhaLmwjN8zTazXP17Ga8zoMosUGthjmZoRJ9JJYZ8sPuBqbooxe8RwqgkZVMu3KH95SMWG1e7oZJpTwn1jP",
  "key12": "yrwRqQhRyCiJPcbyM5CLDdw4A3X1R416wBs6FY6yTwp36SvWXgt2jHnZC2aynmEtT44MwzAKDj3rAk3YcbYJ854",
  "key13": "8pRyTetagYFqwH9vYBsYi2U7XN3VCAKM6iLNFgSCo5nCTWmQejm1jpnEU71uK7CXukV9Rs8gymDudNpFGS9vqb1",
  "key14": "3bs8h4D7Vpau9tZ2UXtBxmqfqEv1icLX674qub3H6WEkysKU9nvuAXt6vuSE2JEdicaRzc1Jg8AtrmsDmp9YeWBd",
  "key15": "4sExYE3Z91RvB5RCpfaR2vVwhU278r8M7zWjbo5LEjJJKzVwN2rBwoExTDr41k96NXgh3bbeMtihJ4zaQXTM2ueU",
  "key16": "5REHXa2HV1AV1cYJnPkK4VE12hW9weeQbD2xkXM16YRU3Tij6cLB1ohTLt2C8NpsEfgBkSUWeQ9svi6SqF9QTDVp",
  "key17": "28eLA3HMeoSKQvc6Lto7GhKHe2ZguJWLB7KV2pyyUkXZfTQ8vBappf7yjHo69qmYLcQf2QyfNKLYhGNmdyRweYgU",
  "key18": "2Yv7Z2PMuep84pdecA9bacnDjq9L1Dpdx3QD6cZspHBXtudzRXqzzaRrsfJNZXtzYcofUkZsvRXyspbvfKij11nC",
  "key19": "dY5Hyg44jHkuMWUmNTA3SztfDFSeSsLd2BgtEZx5YMHCfRHR93BL94mfVYC49r6sDxFbq6MBvcvjT2WLj2QuBox",
  "key20": "58DC4d1cvmssya4pS8AM3XvDuzVWvdbspU6DqnhayWppTZJecy5kZECyComiQ5FQHVAkJ4ub1DcifPPoxYvhKPUJ",
  "key21": "3ADCgzgYRNTdZeMwY4URHJYxY11W23A2G4cUR9gy4RdgCf2Dx3pUJQammiek1JGyYNuGYVnxccMhcFuHLL6nbzxK",
  "key22": "4J4zkADFZwRiXEQkiuW7cCNGFuYkq6pTpov9zdVD3zv9sfhWgchrZRCKbJ9d5bRGcnKHtko6p3mPCHmZSC9Rtk58",
  "key23": "5Ggau3FCBc1nHbKPbzokx7GyKV72WgBp76FsUYy5oQm2nvc3xqRVDvTXAYJT7SwotjuRRWPcC541pfstnetJgVrz",
  "key24": "5reuhDi9jjqXfTnrUwJJ6rUb6Thsa9FFz7he4z2NNkUB8a2XSotQcrU9dp8EJfxLqowDXYhwGY7ob2U2igFTDci9",
  "key25": "4EkiPW3nUTdLDPfdh2p1audaBJ5y6XfjDdGNFMEGJtm4Zf4JnJH59JiB1zyc7ggXx8u3YGdHbiTUkYRux4Pdnopd",
  "key26": "9Vnzo72KxWXqQjLDxxVTNQyxKDL54UEchhokjYY4v4bsgxnx8Z8jrDSJZJAVMdn56zvHsxYFgwzHKun5LESTjHy",
  "key27": "4RAziTxs9ufobd6rE8NEfrFGVrawki7TQwbypBj2LQAoKoiBxiSYyrarxWkZsKJDWn1yaAvBA5kkQVVT3tP81yiz",
  "key28": "36Jt54dNJGMUaE9MMQzBt65pRdxoH1V42tBmgGF5w8oBtk3c1Xi7psHx4eqcPyJr9Z9ZuLzpE9Hq7RGY119uDsuT",
  "key29": "52xykd4zoUJqAaH2GTYZURBzeoTtLSU9UYvUtCfg7z4xnZoLCNRKX7BpQMkvMFpAJHMLvvaQcfQExKYXmviwzUCB",
  "key30": "3DxntMptYCwLeQ8xQuTAeAfDeHMXMjCDoKp5akDM7c6J8MbmyvGuvdhBPhuWDLUFb4JhwHzuLJdFK2TqxGaNATgV",
  "key31": "4kakJKq9RrgGdu9qFAYR8yo5KsMxqo4KyeiJBYTYLBmEzDfJwhxyAVbgRajytm4dV4gx3QEHyQ6XHP4SeQaPxxGM",
  "key32": "PPSQsxN4SwwdyvNWScpkCTWvFoQunXs8KPXv6ipfqBoUUpmNKoJtUb2WR6rtRWJ383cxd9BzNeZ9wzMeBYnNrjt",
  "key33": "4iWathi6CrVSAk4h1tGqjaib2NxNNY9NQZ9oZkXGveQtNEC6KKsSJso5WL7Q3mAmAhQSjVwFhboki58DAhZ69WgP",
  "key34": "48x7eu7z91ydEnWx57s1hTRjQgBj4aupQX2AwPrNbt5PtL3n4E1ybAR94pBGYv7wuamru88sTJGkXFnor1K4wfuA"
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
