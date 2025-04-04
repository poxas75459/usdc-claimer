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
    "FnS4FqEqX7WQhJRyM2codEapBoECnUEkJeLSXqkTMZafnWmbfvafHSzNvivW3547N8hbiLHTJiusNdX2Q3yEFpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w6ZhVjX63gQhsaLdx1BBixxrtRSVekJK9fC4NUsNvnUdzuKjfoY5j6XeyCeVJ14seiRqX4WpZCibrzg2yuQwyVs",
  "key1": "4u7fV1o9ZESygfg3fzHsvnuNrJmxYScvQV4JoW93eZSDpfZHw7aRcZttmjTzgHAuzypb6ErQaBHAhNzFESsyTgaK",
  "key2": "5X4924rY2xk2ZdoNKH7wfhZz7bSgxJgfj6KgFQjjEnRAbkgNaZDy5K7YHwvkwQdeD7U1T2mCtLrDGHbm6KLBtmRA",
  "key3": "fSAS898R72MQjh55d8goBtHAGyzr82xq6RbuDD8xkaK6U8GVhj5LEE1smXyRWibMqvMy6cc6zyM6aE5G8wLLhEX",
  "key4": "49162cvnCDoTpm2aJXUtYwi1AvRajtmuR5HfvkafJMrEATcYw689mLayzypfTRtwjTfDVwQMyNcS39U9QKVcaZrx",
  "key5": "2yWuqNbcc2FhK3XgursfB69htPK1gNDNx74pT5kjX72pZmvabrLUyEc4ajVA5JnauA2Lp27CK5U2Xj27CzS9AKBG",
  "key6": "5RJc47onGvm2djAJwYZebGaDFwccBS9VMYEiw1kk1AyQX6dp5oAz8XYPnocLNCtQN1stw4m4dQLJucN8Tu9N1wrp",
  "key7": "3obC4RjB2gBVchFbW6FyH27jzF52YdDJRX116CcscbCHe3M3dKYWwCiqPHQgkT9RMjExYSKUUv2ya61BsrJiYY18",
  "key8": "4os9L6A1wvcek1HRkHWrDZd4kX1XifBeRaFTJz2Q84JmdndBW8d1yCnDEbZwTsneZd2PX2avzXr314dUu7vzRPTA",
  "key9": "3yKuCwboRpUBD7UGChdUyHwB3aCkMUn4Vjdsuu8ERtbg9ZvHY3aNfoN1QPgeY7ptH9L8Pcishb5qNEfqV2P5CywC",
  "key10": "3B7e3RUQHC3AsCZ7pkbJydmEKT8DXa8SoXXMBTL3wH1dBiyfGJEpy725657YVWSYyojnqzjAckhzke1zM2kiuJpF",
  "key11": "x2cWpzfQej9wdzjoeBHFf3Kh55C6UAnyva5goS94YybwLTJbenFaB7hMJrDWEYpH3N54UZK6qpyRLxEGfCT1ZX1",
  "key12": "42gBfKN3bAKY2EyKe7q9WYFzfvxqsqKoab64Rik4obHvsn9Kffg5CWRE1MqJWbVsVhDosQW9xdMcsoorWTj5YhHZ",
  "key13": "4AJMPecGCiHzV4Hawz8z1zvkis3LQGWMEPuywFxfLWMXqBkwhC3BgcKdK9siPyxETpzG12i9AdZuWLKsAQCfRitJ",
  "key14": "VE55xLVa7dAfbymd6EtQ4FWHT2ufxwTkGqopZL93KaRNGzCu4K87jfZM7chhNEDcSzDMMZETt36WdNJKD4rGhK1",
  "key15": "RtYahBHcRSJdrcykBRQ8a56cQiXYhGsmdpKFqqvMaD7uVzkaG8r58bedWE9T6CEkoCgdaFWR7dzRbvuTZyT5H1N",
  "key16": "3ikkJWSP6gJaheUpr5R7saj61mUzvLyHxqyZVHJUUkGATfPbNWVTEkZfKANZyVpys4iJTtjccNhQkErBc65KTpbz",
  "key17": "4PSN15NMtrKUR8X4g8Yo9d9QH9PEfEHVKeB9RpneAMW8RJj8Wp5ikTicUaMM2F2N8f6RyeRFGtPHeCNCGVUHemPf",
  "key18": "L3Lc3hpoGPLMBYFA6rRYxPt2winrQaYiGC7EvETzcGuukjGyE1wbf5ngwedrtX6sL3FNTjnYTfXMFoCQHa53FDe",
  "key19": "4wwnqMziVpDonGnJF4eRYSi9BfTL3M3DpTLJnjcbfLSmBZEHC84f5d3fwZqa9kfGVXbcoGXTVhUnhZ9au4zUVsMN",
  "key20": "5kSkgBNadj7r3onTZvXNQWJEEVh5jdyWuB8HkRU9M2wULuVgTknf9zFuUYLXiiK62LQLhZ9QS8K2yAVKTKdBVMG",
  "key21": "5WBqz6yoxRYkoH5mzF8e7PBB2mGUz2dEcrc3RRXMqYMfjTfcE56teXpLoJKzehzSf6iDG7xirAAstVk4qME1AkPP",
  "key22": "gDQC8rQ4piXtiiGrHaAymjfGZSSPg3KB1xy1cXtQBoAc8HU6bdJCiJ8QNDL76K6rY47NsNrErumXAW6mPWuQt8K",
  "key23": "2KoTGxmX745HutzuoiTYBGYaNqNXxedwsQmotckBG2FcTu61DocQmiFpzshxzxWfn58j6sp19TfvUzKAFJ9D1kox",
  "key24": "3rXGBDgNAVH34aQWFkm82GE81VeKGhzhRvMRzPz3WrbYfyEzqMnAw7jJVuwJFnXcwynDCnqgpoAPc3py82zTKDDs",
  "key25": "3h6dDLkCh2mTcNhUZW7A78KtvmgSfGhGd1hoULr9JBhN3c4os9h2WmnDzjDFVfAEMhN1v2ZhqXWUGvdpTQf5CUnN",
  "key26": "2N2Tva359PtNPbmcEtnahiAjiRuyBteyEp2x4CGyA6beLQLQv99SkAKjvKRp1DiUKGCwMfXBXFYfR9r1BLgJowNJ",
  "key27": "26DPUEpTtijzjorX9CXmAq3v1zkYyXyViAuQXs1xBXpwJBKVaGtWGxH5t3UvU1KDXdvfMAheWRLRYBAgp6V88EKJ",
  "key28": "3unkpvQSAutcXEU4nLkPkfGJdjT2znkcTTxD1WcQAnV5qr3qgynv6xFBLcYcgB18r6JuRddEXKGCF8FmhDmv9PFd",
  "key29": "3gNbJHDhbEoFvesa7tPBupuzo47uJG5SRdLtdi819ejm5KFQvvnd15b8vnS8PjpLB6XheXxBZf2ovWt7LwVhaWSs",
  "key30": "XWFTko8orxgYmxaTw29z33JnGSV5fzAAckvgvdqdvtNY4B1NEC4RZbb3LZ9yLi3M8BACSZ8FmtkqU32B8uLi6Mi",
  "key31": "Nntukm42m3guBVi7NsXDBaNGVTY4ecbxFyhPHpackLPCr5NPD4JPL75G6TEF5w8PTtpHCAFSe9Exj8Fp9Le7w5m",
  "key32": "5JNcaEkT1oPri7vwUPDvmJhvrT4JnCCA5HQ2c2aoDoXefCHgu1NbR8D8VdfgxsdBSFZwKT4vfjVWsKiUTfpQzBnX",
  "key33": "MJo32uKxTqXpGKAxRRWd38Cw8mFYotvuZihpGxbgCEuFdKsDdPKoYKCoCAdLvzFya9Mus822zi1oEzASEP1McYf",
  "key34": "5jVxEymnGFCNU6BYjRFQMxPcTBBai15nYCFhF1BUTMBKGZJLdYPiDkLDZUK4rqzpBqJs5hfdTBFtjv5VZNt7oxLi",
  "key35": "53yEPR9AHX7GvQG9AtNNp3FNWypAW6NLV81Lbx3HrwkXgcX5LTd79kEAKBBwWGKn2UMwRCGihTC4NJmmmh7oFvnk",
  "key36": "2rTwn4Prmw2kj5kSjvvToFtBDcZEsVWg9E87n5JVZhEKW5Pov7Xyn1e8oF41vEvT1FvEpbBABcqxZ9zUZkBo4xrr",
  "key37": "4J5giF4DmakZfxwz8B3QzhLcHwygmBoXruEvboZHKbAtxwoTWyL71wCub9bQhow8Epvmzotz1spsaWHorLBsfFwq",
  "key38": "4Sjeric8BYHZRU7kgftCNkZXDxxwVSV1E8VT121TzR7SUq2QF6yS7LbzeFRmzyNHMCFVYc422cZBwx8uo524Ckmy",
  "key39": "5kWrkC1Fgtoyu5mbX4UgsMvFLjTSGhshjyiZRLqNmP4nL7wW3xmAf7dZzHVaZPtzC37tkvFfPynN51zZ2d5Tkt8x",
  "key40": "2eT9c8RhLZgDMdeAG1ttu712WaA4z9rBRRPTQVdDehjuKRccNjzg3u7pirNndQfoebopKdwLmmLF2dXLpQ4Yv9nt",
  "key41": "35rtvBtXYNvYb4Qt6CF5pX2NAU9CNYTWLd76peSYDYWgcPD3xCCmmr8wXs6uegCtCqUTUF2Xe4RwAAiR9mZRPMv3"
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
