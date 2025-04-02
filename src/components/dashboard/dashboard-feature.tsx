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
    "5tVkwN5BmMWsUysawQ4GgPFmfGMVVGw7ewvYhzFvE5C3Jq9j16ekeHXCUfnNGA1AquCpg7K4XWr2YD38pVSyeJ6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HB1R5D1jnZA3pv9BpRMpNnKEhyjed6vrYfEXsRsRGfwWxEQbHLSYkU8Lup7c3fDqbMh7bM5vQp82mzFE3su3fXY",
  "key1": "5Qzu6ELP6nRXyWS34viiHhmMVMuzUyobKqs7JDDDne9taXn2N1DmSkwekMWrVPhz4RTTPKbRnQ6VCpAbKFYosCm3",
  "key2": "5p5cgW9KGb9epFJZfNH3abuVvS9WWsRDKR9JMn55X59BxCpG6C6uz9TshhVNepphxETjYupXU4hqDTvVoZfSs7mx",
  "key3": "496ddY9KDKSXyb3gTiDzogqR4WEbVfna8XctTFGcAE8nHDHSUVwxc1u2YwSV2bPHjB7nWa8AhXKStTh9qDjoqFyZ",
  "key4": "52nycZ2UYv2tv8A4Tj9UXQ2cFWW1TUdc1g6vYnAB39vG2uiP9vBpPSmcee41BnbKdXCqEf2V7E7V2pQQTXyTAXyy",
  "key5": "5xeBvvwdZ8KSxHkyu9bcfoJN231pvCgFUsJpqevaSLjCvhUsDv7d16xbBXbapV6fvzXKdnF7d13mSKBpkJvn5gW2",
  "key6": "5RMcf46eqGedWxpC2csnTFcspvEoCeqDcg5iCPAKBqEjn6kJDdrpDVta6tNER6VeAttC7tLCmFe9914xC3yvPzop",
  "key7": "5n3sMfFEypS1gpemzkHfWdRYMxKdxX7j6aRf17iqQXaaCHBoxxfkbunwgbpVf48QAmZcVoSq77dK37zEpmDHzkvY",
  "key8": "5zkoKLDQW72jHzDTPK6GizyqekLg18WdbRAwRh5z98EQrA4c3sCk1DjiDbkxjt5qdzhVf3u2HZTYEm3WNFXFESeR",
  "key9": "3LXtVKAJrdTmJRRP9tMmfGCWV2FTow34CLgTx2U2auaBwUcHqwumnsWPAEQptkyBvops6zDH3zTYY1eLVRdhJLyM",
  "key10": "4a67WEr7Mpd4JU1NLeE8QZKv3J2F3vQuibqmaiicps4CgoVmAhB5LU1CNuwuwPFAFMsoNE9ifZ22ngZBaJr2EUg8",
  "key11": "3VYU6W9peGz5UixLB5gNZpwQjrzDhJqZ2TjqPEogNJTZt44aJoh66EZLwep1oMisfDuuHfBkCSBwAmYMBpo1CSyP",
  "key12": "3vuqAohEiAvcZsQbhLQhup9jmh7bvbZ3ut8GdQFHevoJxpWQ6uzhoYZXWohX557zXpUY6oN2sHXPajV3yv55CtX5",
  "key13": "2YT5VubBLWN6LDqhMRpFoTEYUsSxWxwMcc9yfTzJCHxm9C5Rf7siMurrZCg3Pq7pKnZeMZ5af5pyPdAAkwhQNyE7",
  "key14": "3pJzWR8p2Aj7h2F6F8cQmhixS5h1nz4C7v3y2HDMbnA65saJgfDmyVFcoiCr4Y6V2ibpSy7kgXGVCqPs4viez8UC",
  "key15": "3xTU9sBHkJb3DmcPNXRW5jVdBX3hDKpAdYuDXAjfSwy85JTVhJVMxrriwzvmeS3NE2uZPteNLhMvjVN89cdB9Sks",
  "key16": "3sa85NNXQ9ttP5Y3kaBPKFFqYbtv6f4Uk1YgJteLkSuLzLu1e3JVtoWxddFm9SsaSsQW18bBify7zGziNqdxkPr7",
  "key17": "2TtLuG2Niu9v5Ai5s1aCbjeKfHaKj7EJ3WBh724WP7RAFArCfNwU3WaFkyJySgMnc6BdoeeHn8GWvJxP3f7ZyYRa",
  "key18": "KvCW1iDm9hyvwBjLVUKjAbjwEU9JhhnY5dxhuw9YRzUfAYHoGTmjjgnBbFwmNahWse5vYXj7iyiMr9hJPz8wkmr",
  "key19": "dZqH4fwSFXAXSz23QoEQkKk427jzQCsLUcvW9QtC6rnSy3yrRk5hUopTnDaitCg51LKtcVtUmTF5a97o62QieT6",
  "key20": "5rgKq6owyFBpRLrE6psuayPTpdAfxx6j3MVhX9HA51gVgYZqVigPKmXomd7uK2iHm5ukhxn4osyoYfUcvDxtkQvk",
  "key21": "59pTmXJzVuVbg4khtwXqsP1rcuU33HeAf3AcCGRcdRNmbpAHVnRZ8PGDHmxM6AEBQoUUqo7ARD2SYgU6cHKLSnnq",
  "key22": "3TtvBhgs6ek3SmZ1g4aUK2MnH7BbYXyquNQh8Z6gLGqujCMJFLt2wcLEYHzjajsXa9636K81MfADB21525DXjemq",
  "key23": "3NjnVNcXiHQ49oqLWE54mEFLiq9CjkoTZyMdqAcWomGQKQjwyaHwXY2MpYPScMfsR6nFYehCstC9cHLJda3gfPUL",
  "key24": "2nip4KtVMT2JGZ4FhRqa56Mdwd19p59ZCj3KGo4GivPmjWx1LBdUuLLETaX9KKd8hcG73cQR9GmpGqDbd2wgC7yJ",
  "key25": "4KzYbfmshK7SAqZremyDNbfX2mmT8ytbthNkFDxNxNooo1Cm4YF6KWMziuvpLh9LKatCg8aWSnQaebDQX5zgMbY9",
  "key26": "Hbje5dcz6yYFoMqGWiqRS5ehCdXiuk8cai14NHs9QNv3phjRfUwAVuNu4VGa9UhYG1GVS3cLsfz5xpSmc7AWzMr",
  "key27": "2feupxD4f7u2W1BB1c8jtXJEiFeNPonZrnvJSgWvJiNDEv9dxoWW34aEPJaQ9HkkwVvY6AGVbtovA1HXknx4AgmH",
  "key28": "4E3k2dgayBGfwhBPEHfqyyGcdvaqmHLfXoieg3pZiUeGV5Wcn2kfqnYrk2UCpWvPPQv5Qv9uiMiZRhwa4nDVvk7d",
  "key29": "2n7FdFYRvobB6gaYiM2HbpNU7Wdqg7dtQpNsujUSyz57MjZFojScKHDoUKM8aTJEwZuaHLvwHt6j4qNnrJwhydNB",
  "key30": "QDFbMvwYs7NqPW9fwnpGvLr5iDVz2b7pFMNxupPvWgzUy7KwRWW82igKL9CoEBnRi2kUXmmzAdvHCCvQKw6r1Hi",
  "key31": "43K1wNxsjPXj6yP4wwbWWautdKCUesoaeH6nWqkTFZcZGCYj2MEixweexBM6hr69Pr7qKX87cjVSUVbhDJ19uDKe",
  "key32": "2DzkhKMAqx7Gkqxf3jVaiszxoGomUXBzQsY1WPw9pMA679qJMG4QrRjfRKEE3nWMHvKcLXdL1ezLYmMLuKnJuEMS",
  "key33": "28Cow3ZtaKSDN1nA45JHzFWyG1jHb3TZNyav7LNU1tjDwyXm5yT5wSzpSMkwqFA6TeQMYiXLvo9vRZfg2azbK7bm"
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
