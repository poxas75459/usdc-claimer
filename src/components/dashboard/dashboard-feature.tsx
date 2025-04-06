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
    "2VVZti9y4RjhnoucNbgP3KDt6MyE7gX87UZbz8K1pBCLMQKV82EYocgf99VGUnFiBgLePypjyEUiuaw3Qz6ybJ4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55aLSBaRA2xYoz3QmgnijVsasScV6VzSC9DUuqQHX9Q7iQNedZHkmkGrdpFUCQ2FZSPdLEnMaCMKwChuUSLJqCjF",
  "key1": "2f7YdGFuoARcGG7DySCs7ULfPGbrmn7yeayMzx7Ck66CbM1nP5iaCWirFqVqqLWqp9rAwXVyhfjVnAxBLQ3GkKWW",
  "key2": "RfLdEjEzNFzMdk1gCTZXR6ETnru6uvKwSAg4Y5w3zQ9JBX5TL8us2hMAj7DBLQZEqMjx3Nz5Zs1HEmPXCrF36r7",
  "key3": "1ckqFMP7L1BpwzMYr5y4pofvFyDSmwhKxHuMaCtSDyA15xdRrzbLRzokHThkfjMeyVqmcHQ4PsymEXWFNojnPyX",
  "key4": "kf29qUg53Z884hnwpX4bL3zCXABE6P4JnCPXS9r8fvQGtfMviVqxtq9TqwQsHFYQxSRB6i1d3cHxF23rimknj2P",
  "key5": "5WjBNmoRW3z2tP44sEjFGjEYFpHC6hMSF4KgnphwMcruY5jEAeCz78sHxN5f4TtozkWDD6tHKNivL5cCvn6uw5Bd",
  "key6": "2QNUudFCXVWyq7bw1ZsWsx4e6e1pd1kw9dSx2Cu7wzFmGf8yYkswj3v27vTKtDEvXgVkQuYLhRJKmsVcUSejoxJ6",
  "key7": "usHxiFLj3ZjQmRfsYv2YWsiLfEKEqeqnRPEu5DnNJZTGdd2VM2yDfJ6T1T9v8p473hEhvrrzDbU7kDP6MTYPayY",
  "key8": "4ZSTEc7WJ9vgGesfysSv4Ud6QFuMjh8uGuGPvy5gqCQ8288n652Mv7CpQhm4vTEteibufkzpaafFWHvbGDXmoVo4",
  "key9": "5X12jjaxLKGSnBpR6kinLKG1tkRhxjg4Kav6kNxsUe5DqeBvymZdSeyYFCThP7CvKoEY4v8KZWVzfVsr6uNz9gjf",
  "key10": "bTuERLmXyMVrkZ7nh73fz5AiEzY9tnHuZx2fv2UnQvH7h31yXQPxD9AtSAX8BiiBBhLtgGeqLyWWz9UmZYoFHi6",
  "key11": "4kc3n4pn3vq6NgBKyJsx27uUfHUMEyFyMz5pdMrYrsZXycPd7A2KQzfR8QbTcwDRncSF8tKfde7zvvaDPBcavqwq",
  "key12": "2mepyFtTrY1vXbCoR7uLzbtb5KfMAMDR5ynNbVr1AUnaN2AR5YjkKMNyn4yAPuMpAo2aaQkV1VdL3KMsbdRTinYW",
  "key13": "31xB82Q5tpmd5DTjJ7CrizHPVtMWeNc5ZvD4rpE7SJ6jC5GApATBvMyEuexm4EjhrkwDonQ96UpPGLKv1zBZmm7N",
  "key14": "5M624X2fbVCGoKNFgpjrwLGZuE2HtiKxwhKVQcM8mZEdwX1KFaLhaj9hch8DuYGKBFfDQaoVwtJvPU8q7Lq8Bu3r",
  "key15": "5ZLL7enAEzkQGSc9nV9AcECBagwbE2xDdEbhvGcV8YCXQsT3psSYtNzRHScQYUdcbpEPUo7viAv2SxsXvk2UZ49",
  "key16": "3LFM6jkNBezcAtvRSZvDVfh1SM6n1VD1HCcMAJ2Aw8TZy2CVboWgKGSvqgLU14gQSDfDXEAG2cPbTzkJSAqecko4",
  "key17": "2a1rmsjPZd8jyrEMw9U7QaJsFVgBYq8RLeRKgVPEVeNU8eDtrLZPCJmCtgLBQkGdc3wmHv7bicirgxKAgC9mBQwf",
  "key18": "2GAJDderxQ5cHHqGYWmhdZcFtU2e5wuWNDayz7qFdasCNNheoJRRJrcs7YzPPqJgKV5mxvU3gZKAn9CTf2jSY3LG",
  "key19": "3aXmzamtNop3NdgyxhqXLJ6WSBbUrMvS1LsUzLdRmfDMKrsw9JPtpJDmtkHoqaSaB2ALkbVkKr1oWWLMD2QcDMhn",
  "key20": "3YxzxoJZLEfe148kiV4NhoRCSw4G3Fw8k4UmACooUusg2NTa3J3s7esgzJnCitFqkNBnaUoajbQ3broFhJQbs1vR",
  "key21": "3nGLqumYQh2qvhFx1g3E5YchtPNSBr1dJffkJPW3VQF8zeBaKf7eUSd49Qs7YexrGmf78zXDzh1hbWZBVoyg6H6k",
  "key22": "5JXcAJQzAz2ain7Th57gJE8Qshi7YcJi5yVNo1LAByU87Nx3rNJbBBiuY3BRx2oHe5btFEsZRJGFnzXj1u3MUmc8",
  "key23": "EB3GJCEwZUCXbBteJvuh2pjVrK9ttre334JSXwUNsb6npG3LoazWzECufwAEzeuWUDaeu1djecmU3dBzuPkrWex",
  "key24": "3qFUibsGuV6S28mnV5xrF7rE1fymqvjGHnojXvtk6PKhf1sBuH3XdysnzBMJwFtNQA46way1eRBMLCRxDJLqyKYp",
  "key25": "2RrPpK4XcmUPTYQCwwbAkWMWtK7bKxGLioNwpmaVPiBwqF3Hypypz1jH5quUAEj6HLqWsRRxYDeTTfAPWjZonnya",
  "key26": "5RECS16dsztEF8k6WSUatzpFym1FC4C4QpvwAKMizu6JCcQ1QViTzgeDkmyhZEd8MLvsbFXuZ3LkcUPi88MWdTHv",
  "key27": "4SGwcHZeZsb4dKtMcK96QpVnNEzFx6tvopb4WS2V5ckw2pFiZAHDJ64jQfdsvsB4PqVWdpdp9LJ8HW55AvfXG7ti",
  "key28": "5FMooUPWuxLmZA86zpnTLRdXEvB5yF9i4w8bzwSmxmDn9aZ9XjvSSbJp734zSJqGe3xyEWiWLYaJPvFPS7Mx2k3b",
  "key29": "3uyBtCBPVZJp6gj6mLWDNMTJaazK3HzR6Ezc1eW2Y3WvDqxwphMYUKJnVuVHCxrsT8q4bP1mYwofq1vTP5yM3GR4",
  "key30": "4wrzq9yqbTEEA6RCbfK1gTdNSm8nqqNUy47ei6GMBRLauRiQvngFgSZveiS37TNaietEMn1DAmJ2gunEncgxVJFL",
  "key31": "4wxC3vLxfnXjQWdQR5WXNTDHGAcQ7QRmucBRUuHf732Ew7nRpFHWpDX9scTQJDTCaypcrADcaFeDmrjriTsEmsHM",
  "key32": "527JCv9naHk3mtQh1MqXkDV8weH7Y94PSBnXXkWjeCYeGuZmDyTZKPeFvQ2UT8duUpurx7bkqTeQtUsG7mAb9miH",
  "key33": "58He7VGDhtZRcrTqdSsrXTyuJGQ9SSuGRy9pHd3HzPuC6qTPCgXpDGqUfWAQLNhE3TbBSA54WxY5amhZ3UDVw7aQ",
  "key34": "2DF1J7kwDXeDjsJFNQK1ErinkwWKoZmmxMTDLEn1yEZNKbqAXbxw8qRanM2GXFYXAUyahXpJ2qQKJrcH3uUCLaUV",
  "key35": "AxK6nbAWskNWYmqURzNsgGLvwhyDM7UrWjMxpKZrxUC78mYjZK46x4trBHqWaThypvSokbzHcCjYpNcwaKAExqn",
  "key36": "4pAJzuScqA4nME5MpjeCa2gQugJMAmbqbTW2U5976QBANnZcQqRDQqvt9L7zqgv2efMJbZgck44PaNt2V5H6WNHG",
  "key37": "4kWZpCpLzu3ppda2xRSuxUVuCoAsZ3JZGeJY9Lf7NVVYqX56eNkRsFVwsG5WTcoPikqKC6Z6pSrY27BJF3hoko46",
  "key38": "4sMCE9GtSychNhskqF3Wp1mLctceDvKCBs5kzzb2UpdFbUzcD9vSQYg68Riq6xu9KGFuFUAtBZHnKWDrujG3r3QV",
  "key39": "3qagyrhgRbEYudV9WZsNnqnqGUG3Uas56KNR1iozSwwTeHMCSFa8fueb4cXXtpbjMeqhQGj9yjw7GiJyCu8FCbTd",
  "key40": "3iwpwpa52WqSUoFY5AR2i56km9NpNPgjFEpikpfJnmfJyuE3QGsYMEi245FBZVdoTozkKNMa6Wqd7Q6jj2eHpsGh"
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
