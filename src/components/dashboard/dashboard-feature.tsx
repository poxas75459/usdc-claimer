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
    "51f2nTx6zSJuBiVWmJnqAzq4gS7vApjhkqX9b7NrhuTFtqNgQMrZzFASCM8wNQG4VtFhANiBwrwWs46XtGkhEQnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5exze1uBRnDiZaRKVu85SqpUCMHEPsBkTbnYvZD9HcZ1hQDBh3eCp8HtDN1gBZvyRXeHvAR79LqneW3ZMRuEutAQ",
  "key1": "3BtMLFxbTw4Q9k1dfkLTk8vqVM5nP5hazqkSpTTZirWDrnMKJF1oaDywCSMLkSwsqSCnrFNdPvqgaaJuSKNygHFY",
  "key2": "3nVqjvn7FysDCYN6ErhBiby7c7DAwJgUJ61f86WDFxvhfobDmrrMmzjczRngCDZ221UT5KAzSoZyn4UG16FkceyS",
  "key3": "2BQ6jF3tZTBiEnG6QGBPizD2dPf1H52pmZuPvzYbhYMgmDgxaEgjKnuyugTNR33ci37gTHUTdiparzbtZhfj1ef5",
  "key4": "2LDSMPn5a66k5Bz1wXRAQyjB6wBCsJY7ZAtDLWYFsTTuLwsVpYAb4aSWn4ty6wG4Ss9afByM58mTBNGYjkSUoWhV",
  "key5": "4p2x7dhWCyDbdmMEsPR7FpGTBALdY91AWhcR4GYDpAMTS5P24XGDE3rcd739NVmiqsCsX4AtgYvc2PHJDugtTKHF",
  "key6": "5QjLXJYhBQVHXpMHoPn2RkxWTd77PHN27k3RmYULXiJDfm4anFTKmjL5nJL9WB9MT8iU1GJes8xH51QeHCEcVB48",
  "key7": "5CyhyvwbZwNafG4v1EawTovb426guVBgWBqcohEHU6UF5naLK2orHnmG9ii8gKi16cEcPZUND3F2i8yUY9UVKizw",
  "key8": "4Bj9JvQaT7EBsrefNbi94RaQhwrBdHpcchiKE2Urv3XFW5RVxqpxMUbM72rYBdkau61gTh8GfHzqU4oQW5fCCqrq",
  "key9": "62WuoKjrUTnoNPmaVGCBe5cP5AufFiCLCr5nHkqMxy8aD5kQKkz7AvW9Eerw6atvnL3LGPmUEdBEFujTtxaTYU8R",
  "key10": "3ETGpaFWf7RbNqipiLZ4P8shtwokYWPxc4btzB2NJR5diV6erJD4mLAEHbV1GasdixfyX2vQeE2qrgCGgzyeas8z",
  "key11": "4dBrn2SLpfRHmJWXWGmw614vZ3kEGEEFyoxy1Rn619HxwexeA6VNSucFqktxoG6VD9pSJGwEcV8mUCjR9JNa9S7P",
  "key12": "5wg6YBTxwk4neZy83En3xBFherH5dZ196JGAVZakVi6CA4GjHewvTQ6HfKj8n9GmhQt9XBNvjD9o9tnKYiqbYd4U",
  "key13": "AqSTKjByPFrGnJZeNWiNpBAQvvNqo1fVMugtkjDhouWf7UXAseUPM1LpCHoZC253Xtb3zPX88eW9htitjvUB7KY",
  "key14": "31MiD51Ucj8x3dNrtEHdSKMuEFDrzKH9EXeosqiseErExiFFBf8jvRGYqcmAJZkpK5zu4w4bsGJwux9UfYyEjM2q",
  "key15": "5qdnnJmQDUtuME3dLpi2hgCQY95LaQkw9JE4CBoqbN3ErdZJcgVQhNbYcyT2cnwZq8QY8E3QqM9yHQPJoWpbQwdb",
  "key16": "59oauKaKRYFSGfKYw5X5pdXxqp1jyopyKaEao3JDxtAHhFJfzzBKGjmGD5atPnRrMBhpu6kA3ytmjCC5Gjs9grFU",
  "key17": "5NTqrHAPuJykY7SvDJd8UpixHypWHYVsddWwQYVDfYuVemaXgLgu1WtJUteQf4134tVTKrHjYx4c89avNm1xKiiM",
  "key18": "5uoaeNint8RxxzmuLMG3fzNaE6HTy5VeyDDDNwkv5rRFgM2kKf6A9NALEyz4VHxGiWSCkKkVejVeFrZfJFkRJThr",
  "key19": "HdNN7hQu9aY4b7XBQnAR4r9S4q7Kj149jFFHa91G6g3QYwj6dD7P1fuRLjk4ZkDe8uZNS9q13Bb8vMCZ5sABNP9",
  "key20": "4jVFJBrYGA5ATQN6eXo75vL2LSbZz5u5s51pkU4s3jv3EGxPZgpPQHBgMeX5cUzVc32CBJSv82PjdhxhCaKCm8PP",
  "key21": "2UdkgjeFMzpgwFNg4N5QsqPXwbTYCaFn4k4gXbb7JV6dmR1nQkQeb3ZPzLdKMesw7WB6RQsLdTxnQTNFBFu2Bzrk",
  "key22": "x4TPFaahpiq1CUkR24fkJGzdcHP7n3Yfe2YDNFJ57zoftpFiwL1rgvdpzaCDDxSTqzw91G9jaP4JYUKSvw7MUpH",
  "key23": "27h1hJ714cdHyo8wHEBLJVJdyywFimjiBvpXdnvKXM3VLPMMuM3SnAGviqBmQj3uXXoKvyn4tZoDaKywKDyMpReN",
  "key24": "5d4YkprXjFokfUVyhjuMJkP2TLTZibdWc1Bz9xHMqyywnx2Zfbp1XVZ6bYfF1oiZVmChzLZNJt6FUVGcJSGiTEv7",
  "key25": "5vXp9ANbcjSyxTMfQpuBapvUW7a5J9vVaNiQDvzYbfm32qsMQv3x5kzSEVg9qfbTUmvNY5t6ekffKsw2J8iswyZB",
  "key26": "4fzbU9faUGQFHiXA2jBf2FrG1GMBhMQ2h8iwGg8QCZq8B5P9UBka4ZVuFeQ1h8s2XrFWZPrQ2sD9BFLWSHY2FaoM",
  "key27": "5wPqVdjs7aTZdYTNrLi2RY15ANaz1BAWEenBchZiZHXCyTkcRzfor7Y84wbJph8gRQpYPYdpwkbjQqmA64bAaodJ",
  "key28": "4JjTKpNPmNxjR8hikpQyRvUXnXmbbauwyeZ2qyS7CMwAWWz8zMwbVvzMCAeVKqGzwNkDDNoVhuFYRows7egDMm25",
  "key29": "35UXmnW3UMhwmSBPiDrcbbtKVqTDZdPQSsfnCpowqdhQMpVkL4BVJzZRg6ZjZ42GG7LSacbb8BseBbByunRSVVp4",
  "key30": "fC1c9vJX76YhkeDv1m9PrWxLxZD7exWFJWPvWM7MyU569FtShpDfdoFST4S6ZAb2gZUXsVLdCmJLR38VA5j9Vca",
  "key31": "4y5uWFThkscwqpSz4n88E47AK8BrfX2TQfost9DXbDFaS4yg5Tss21sWwjEnDqwCuCs9MYfF2o6ZVtpdMtE9jmdE",
  "key32": "HhVVtiCRDdzKW98YoanVATRRvGvxVHkyrSavUk8zotdDiNG7mCquexGSRUyrWgnbx7HdwJ1xwZUQKNYFAWxkJup",
  "key33": "4v9hau4aCJHXWidDAJNEGhmyoiedSwui4j3xnFdjBmxAyQL9pZ2wM8jDax5YfdmGdhvKw3Byex3CJMa2gvgR9vfN",
  "key34": "3LuJrAbz2qZdpxttX9pfRdYVzHbRBet9dbdYdFFJbWgrtbiqPCTSG5Cf3u8e1ZDbiSBi9oDzLHm5Ry1zaxQnQrFa",
  "key35": "4ziH2a9rvkmiuzcomnZzpAxdf5VfJhGzYUjCvECsuMjDY3KbSdFrkBQ75Dbfn2WfPaoxeLhjwnkq2qpNjtdKnZPu",
  "key36": "59HBB4JwTGdLKQ4TKUscEvfZCCgDo5aiuWauJN59WxwKAFAkuPGsxhpkX6HkryXn2rgDB36FPTWCZsQLWsxz4Pne",
  "key37": "4VUyJCsnEGLkPY5axv6M5JD7ijrNT6NFijx8YXtknnV68d1G2sDXDPRT4kNu2YvkT6ymDyChscfDc177G12W3Dxd",
  "key38": "26sQ3sAjPyop34z4D91PcHmFD8J43mNA91pK7EASbQbhKnY8ZkDrGC6TTZKfdDVmgZU1ZYHaDY39MHDdaqu38bSf",
  "key39": "3ZuyE8vPfvUyEsSz6q4TLiZ7PaL5Y6F291MJ7WSXH3h83edqfuMJZ6CGcgaAehzttKVkxNzTMfBMqgeyZ9i88kDB",
  "key40": "5RAe7xBADTdZHB4o6TETWub8EZRtZGTyoxBMn73owyYT9iufTvzn2CpB4FCaY1iP3oM8eKw2RGBhyunSfYue5ga",
  "key41": "XSgYCWPPQiydAzcWTg4jJvkF3XiTk7tNnimsh5mQaEJcwHCMPNCPjKcT1A4b8K4T3KYYVaKmKbgEsTH5mdCdfpG",
  "key42": "5NRt5tecRWn5q3Uvqv9DskayLihxFQ55XfcGV4s5KMuPuePyQkturac6ruLhKiW528ajSuuLhBNnEG6kVVjRndUn",
  "key43": "sNzQ7JMuPM9MfNfJ8HFV5Wb6PdmYPnvwJEtyaUai8TitAwnv3uxdwmWN8Ro5gTPrcJkmbmKSHNsVZY6R9WS9n2o",
  "key44": "3V1ncA9T75YSFFFkn12oZPM3SURsbGxC3EVjTMx6crUEzD8bGoRxzsWAXL4acTJkRMBTGReMHufsUP59XFcor5JH",
  "key45": "54dYBN4dS5csopXRJNBSppYtzSjkDCBSLvbHp7tq4QME8eAgxgG5SUMGsdyag5mqNjUJJFd16Ht2omwhAWeRAZ6n",
  "key46": "5MR8EbxMwXb8urYZwm78FyPaYAEG2PiS3EwBgYQ2FJnu6qwZyA9pRAvk3KnVtsgkXuC3xnrjstGZNzTsQgxYKiF3",
  "key47": "5MiVse2gjxML23sZioixRYb1M9ZZ5VphzAgvKLYa1fsbZvRCt5qxguaRMqwNnWDdkFJkQJNTxUff6MN5ygu3T8tm",
  "key48": "3n2o3AhRKb6Ht4fFjUC79BvPx9yuomjjdtDa9cNcKykVidtUpo6X7e998j4dNSTbtYRkjB8HMbpnQf9mDjoGmomD"
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
