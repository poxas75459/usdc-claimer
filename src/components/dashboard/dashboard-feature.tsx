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
    "2XuS9p61td8uk3ouwU1jBig9c5XD8BavYEPwCji7Lu2EC6eY6NWiwffX5LcWhKY2XMmCu9w3UUUJmgW9MMckv3V9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37tvtqKALV6V2Sr1sBNknWKyei8ALUMWeWfApq6WzuaGUdMmjkjidJycRLtWVnhCDCjcWs6SR2QmvjwsAxQ43xMb",
  "key1": "2g1gfcexCS9sVSwr9WwHurYh6UgLTqJFPJA24VciGY3JkYaqhCUZKQf44WdaKZKVouBPZSQmtXLqR9StpG4NbQHn",
  "key2": "Vq1M6fjsrLofz2yt2CnVZsjJsNoEHapcV3aZo3AUab99ZE3CHti8xzNJmyJdaJtEdUTZ8Ppd8V5mkN4Z3PMJC95",
  "key3": "3wXbSwbMTz5KCuLZywpHHCTqcgsZo1H2P7xRPHgdwGsdLFtzL2WmFhEc7F3xwg298HcfizaCpyQt7Uqwc3thaJ6n",
  "key4": "3zuF6wvGfuTS2GA7TpgWv4WpwEqyxZbXwv3ntFdSnnmUs15UMw2ivwa1p8MHTtvynYGx1tEtaXVf9cjxQRKbsVwK",
  "key5": "2N5WUY7BbDBw9JGwf7j1d72RzfvGzyLU4qcyhjng3bxw2asU2DawqVFAaovsk2R3z9ufN6fHzw8BUCTHm1teDsDw",
  "key6": "5gMP7ZnTSrHuCr5uFxCoNpeEfyhPGDCDy9rbH38WWPche1sgRKqhZmi1uYGxvxbbx7HVpL5oduq3x16gpkGTPZS8",
  "key7": "32SQW85AsAmkGotgCvX36UQrzKD8ajzLF36PtMoBqn2G8gATvJ2QXakk4daWJ9b3Smvx2svDFoBLQALdneGTUKLB",
  "key8": "YmHkwdj6KC8agPsp2EfLchAwvZJougNRvXg75pP7W7pZ8iG4Wy93sQP35yLNBv8ei7DkAYHMo7XSACBMmLfXtjk",
  "key9": "tT9bqLePLtpdQ7W9a1eaecEyay1zxjLEJ58WgwVKqKnQRk1Xtx1Asx362Vy7vf1eMZFjAq7KVBbNUKviRcpunjp",
  "key10": "2tCFrX1phyXYr7h3yECsJ2VneXjavbqNqdCmTS8rjhVEwFmN9BpcBhEzhEmCBEbpffNpxSs9MMM3RtvXe5Td15B6",
  "key11": "43WqdvaK6Lgugs2fPS9hQukvbC66VgvcVVRre3jPtrgF3j2qUzH8i67NqrgRfSr1qxAgqEvnntP4GqR9fWMVKdgk",
  "key12": "2APxEA2roNW8i8SCHGvzgUJeVrycyCdfKZ9CPUZJqhzwbyBNPKT9icZcoJG1wpHJBLzVvNcnfu4tXy2CQ6kEnhXo",
  "key13": "3Yv7RprqTidxsxy7nqH88QWFQjTQZVWkBLpeCmwRTPuoyZzk3ECqqoReMB2FbzkuYGj5mxVNCHz4iLCCsdr1cf37",
  "key14": "3Sf1ZTiLLCkH9Bbyqjwt466gB7SbZoKnEx8Dmf1oVgvPkRLuDcyTxUgfqDXKSUyN1YVQbB4HvBSs1iwZirx1G4yr",
  "key15": "2zcxjGPFmAheoFJhV9bvwUFTeGxVMUbkY8MWbbZU6Kar9wC8rXPGUj1dfQf3aJEdQAvbo98uViVHw8DZn2JXi3tE",
  "key16": "vFSj7bw29VeAhVwUu6x8cPf759r775w6gMsqxHnfRopBSer5r582jNkAgnkJsehvfws1zw9U9UYbccjJKZot7sC",
  "key17": "4BcXe8FQPyw9pw1Ry1w3uEetcGGKgrVUWLCHfefLk6M24ciqgsbEQoZiFyxzSLtC9hYNG61VbpPybcwZ866YWyaM",
  "key18": "2EQ6KtSJtWXoXwcAFJVc2nvD171oJHiNxQPXDruGvJXdmk6TpuxetbzAAVRnAb11APj4hpzWL26DCiu99eHNpq3J",
  "key19": "5WPmjc2bUXnhWdmcNMkeGwNzVgVqUD38bT1e9vi4ZktseJcJF7zyoJqnDJicvao338iTh491m6pqFjCpHKQ7Xd6y",
  "key20": "3Ji5UfCQK4jfi2hv3md2dNoznwMr7c3WuYLdt1bBXPcZqYkQmwxRheirZV8hqybJNBh45PZvgs6dfSHsFVb2AQZr",
  "key21": "GVTq2hEGxdNxnPd3aFyLZ57bTowgqMv53HNjQEbVsNnzcNmnwZAjbm6t69gxrYcN8coT8qyU2W6sbc55FnZQkpK",
  "key22": "5r5vWXcLFkrSd5vYNM9EzvBPsxPeS7hi954pxk2P4TkHY6VvTeG8KZecHjAeTFxpE28q8sbG2dpE9yPvGdrqQnMx",
  "key23": "65M8xKyNzGhkQ9yrg3Vs51EkGPU5o6shBMGVqavuFZUHFE44aUb9xms6x89d6o699t982YMansf1LcibPDaJ7rY4",
  "key24": "47gJE8ZGKYwi2ZQQRUK3v64TydyQztoBjp2vhnH9sFt3aDYtTEwtNaWZrjbcdeoo1F3hQ3tAa38FHRUaHZ9sQZP7",
  "key25": "2DAci4C5FuHzjYCZWxa956aE4eYSyesxiypUmaQzM7k2AY2jp9RC6pNN5ufFEsZwuZfcY9khpvuhEBwrZTkNGi6P",
  "key26": "5Apf1mrrHdNBUx2kbVUEAuvi9iRo8mD9hmAysTtgd7xDHSRNBhztDa8QWp21G1tNN8tSbmSxkMVBZ4GePRQ11DzP",
  "key27": "39eqMJmape2xD7qHMbiyKdgJb6jpeqwk8KtGQEJdK9epcSuBgbXV8SKU5CHBaSuofgapEUqzDECsfLZFPbRYZe2r",
  "key28": "2LhYDrv9D1fHRATuFps6NYsryk8ToEk1EcMEQm5eG8SPYSrrgnhN2y5nGivyUe5HGoRXHW5RyUq9eqzA3WJZXmAr",
  "key29": "4xRbcVMathVhaRDXeaEczkowsf6ixZvc3EC5xfoWB9zWY76U4KwfHtaf9sGkZYiLphdSj2rNfoZDynkXs8ubvWBD",
  "key30": "2cYu3LbWJ7t2q8615ufYV3THHaMGefypp4zhhWUKQVwoZvFvcSKqpNEJptFVeKkE9xvvupQxfDJAXZBy8Uf1PuYc",
  "key31": "2pbmubWuuQyJfWFcePAMsiFTy6Hcs9piixkQNGSrFDd7rvGf6j2kQLGCF77JuoJaztt15fp433615cHW9wXTKokg",
  "key32": "319hLymqB4WoDNhnttzz1GfcgE2YnEVdeha6i8Q9M685BaH5mLHVq8aWNsjcjiv73GemeSBy1GiFWjJpLSjqbN4U",
  "key33": "3Ajc3RZtanipEQH4575FB8ehJ2VZJALtKeCu4Crob4fqnCc569NnJndgyb6YfRZGMoMjRuiiG2enuxeHzaUYaWeX"
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
