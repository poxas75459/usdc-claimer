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
    "4veD96XkDQZHW8mnF9eZHF3qp7PX4hMVgmiZko6VSFWGL178EKqAxXysYJsZmi3xXEMH9ZX6Vv85L4BLc6EauE6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hrcqvWwk11yUqhE9xEFBPES6XJPQkjwQwv82pgKbRgv3rE8gks2ho8JJHyaoZnUomhvnmfKB7jSk3qjhDk7LtdW",
  "key1": "uA4z5vx1CKxBvx5Q8epgFTqbL82vr9FuNDx5cFvrUePKpGC7uwUAEPs24zWLvQw47bL2RN2wxftDeXR46RVY63b",
  "key2": "5nutWNYdF5M6igxYG8eNDAifjSL2uQJ5LDD3GvV9ckuSshgUuKf8Fzfjd3AXeTDsMjM3fdrVecSnb85VEP91xDym",
  "key3": "2UYQst5kg93PGHviAxgE4foR5CmQs628EaHsvjJjFnEgUF58ER9waBizxDxFSLVQGHhKbbejWM3nrwcRoXqzVMzP",
  "key4": "8UtVVnrnhDe21pGaHdh9uo8ahJQozZEkFvojKNyREjTaTXWjeQcm77oaEXV6ReXLhh2W4spuHBuyRRSk2EYyY48",
  "key5": "TbfTfNudX2gtykeGTRSxo8oTAcNdCBkTTGpJKCJZ4LB6Nuj2vDVDYgwuRwhFdNXZ6sejY1g1jswhtGVjAN9Zqq6",
  "key6": "318CQWZHgNzqhVXKGVDRxVQy6ggJdsyN6s8jnbmc1vdN6KCMrpa3J4uNmA4QkqaUKfXJ6th2xSGVy2c1ArHyvsA2",
  "key7": "4dQLntqeWh9gVMF6cTuyBtJYhP7iJPzrxM8VLTcgcertr3U3bWVXuR9yRRmSYRNkgfW1LTcXFuvdKrvK4iQPvqkB",
  "key8": "4e4rPF8tyPSvaB2ru6q3kyPbmhiGAeKchvKtDSV4G3p8ugrgLNExzb9r56BrS3Q8WnLeR25fT7RyQW7XrM64HC8i",
  "key9": "3bANTL2ATj2puu7oV8Vjan5tnFBi76ieAYdak33ZGpi7nXASebDsjHWQuXMv1tA4HtTivrkpLcFWMNFCVDMbP4dz",
  "key10": "5yFc6srD1RhBz887jXFGYUESpTo5nA8pbWAxhBodxNSSHsnJyXwJ3mGi397gDjBeSZj8cM8WuKKqnmmX5ZXnuVYF",
  "key11": "3Fo8MkLAL53xTq16u17Yme9EwJtG8SC3gbYpkm72prC744Zt2MTJAZW9nn19fS7mQWsPjJBCiu3ga93hzb4D9SNN",
  "key12": "28A1ZEtwK6YGMD8m5Pr8BoaLT2HXV3TUAEKXRfXM8KggCKYDCZQgHKj6Q9VnSmw4MN5rnoZeAQC9F8ucXsuiYbzj",
  "key13": "32fYL3jZsBPkfsgbdgTwTcMLCTZ8mh9PRZaWSLLd4XtXG8YYALZP711qYGxCDDUCNLE1TndmueSN4vdFX37nNvxH",
  "key14": "42qugUWqU6XToy7WZU8yrbvVvPpe83xSf5iNW9WN88wFFVVRgzzHRaDuLK5d8RBMgu6Ah6a8oewGZmBtuwAkUcjn",
  "key15": "3Qo6LM4gSjg42brCq2xYUSJGG2wm1qhEYZsENzRQ4zBnzAsKcGN14vSWdu7Cd9RxNCVxWX5LtcPgBBt5FTNrmrzS",
  "key16": "67pUR8inPpBeDTzcGx6jfB7uBwJqz7WBWcV4hqdo5naTCqrCx6sN1iKgbp1iQUd5VCGzFo15m6aP6JspC919ruTQ",
  "key17": "2PQy1z4Ags4Lv1pGHvpaJWg2PBmcH4Aad5sW1LF155xa8aoduoJyHrNQx4HA7PnRzkXWMJ6L626AU2emVHsYSBpS",
  "key18": "fB6UXbR6Gchy6WXiKRnD9Yr3UKZuPW8iTeQMRJAPkS2dnKDSR6s2YDF2CAMD7QTpaxeNDHKbJgsVCRt5BUbqWoZ",
  "key19": "4cQaD2vtbLnPUNiSiE982egFL8Qn1XQ9jeALCGKw9RZ6y9ZuAreTwbydRhUzuQPXwcW5oXWkjxwaNiLBXxhGhAEG",
  "key20": "4bSGnkAc3dMjKDGSUhq7ra9BuEqqW1NHHJCG1tuAEso9wZs7zT35YPTdhJW5Mi3Ata1AM5QWbMRXb5NxhmGUVWcG",
  "key21": "mb5CcW4ZqPerubQAj4DqTQni69C219A94mkvKXchHT8EktuhdBVvDL3aDMw978DuTqVKRnvvTwoXiq9p6fFsBFQ",
  "key22": "5U3Cqbd9TpZsh4N15n6RqWEr3HrDcJQZ2kqx33BqYDy22TchitxPcTdW7JfsTm6EcBhQFCYiZA9e7LSr8YNX2Jrp",
  "key23": "48PD47ZDZP74U9DqVAtG8JsjGn5z3GFTxZ5tMTzvr82VSE6YbjradpVpUf8XugzqtWtTiDpAwPWUtEFK5YFkP5BM",
  "key24": "2WBFVPbZQvFnm6wmKkirJMDh6EzYNPNiZF1gU2qSR1eNXG5jwATCRYFAGGwYSw9yqMQRtybKMTaaFEyfHkMGwiuE",
  "key25": "4YgcJVgLqPfqEQdpSRHVajp3jJ9wfmq6UFCd92YnZqj1gynkD2HAAD5PzD3B7FJFchEoHeUaZFZp4EaZ7xfejHs5",
  "key26": "46tnCEi97vUmYZJjCjnMjKgkjMTv8Wre9b449By1DJgQ6SBn3xh2Knfh2cd9aFuYp5RYkiyvFTnCAiR919YZxAEV",
  "key27": "26Sok6CpWcuHnFHKZrHuhETETSewi4sxXJ23Li5UdsqpQtDrhfhhZJr4hLKQJzkY78L4eucczXHBy17Z4ZpygAMr",
  "key28": "hTRUoEgxRT8h2mJ733J7cXcWuP8dxce1uxnb6JZEDw2ZCsMPH5T6uXz41uuhc58H32g2UWqYmutnCHm9hPGcUYP",
  "key29": "5RjNKNdG1HKYnTu7CX3eonE6s2W1yjBbAVJ2GsdK9HbR7kVDqTKW1Cgijg8yZoge4NqCJmN1pm7bWWrmp3JyARai",
  "key30": "5Xmg6QELpmcDJCSubMucQPtLwBzKyScpN9kDdp7WdTswYxQxruSUtdBHvcKFopU6Mt2a1jhhZa89JT7tbGteExVw",
  "key31": "RgX1ptf7qN6qowoddwVd1L194qEr9aPY1oVts3AHQRP3s44VREgpJJaWKNWqbGMmVEzMhFMsfvZ5WCx9eggp4oH",
  "key32": "5sfkzRQ43C2nBkUJWVpiNuLghShFuPdJoW97ctDJfNhXa28oXQgYvjrzTyq46QVRQR2pdJrVndrcULBwA5jNxARg",
  "key33": "5cQpdkEurGzPP5fs6vT87oa4iQ6of1jtQy4D7i6xPZvzQohsQVKLnG8pZAPqvqLG6M6YadPNXzLohvqNvN7NMnLk",
  "key34": "5R9YS4o4TWuizLd2CVy2NN7CL9KinukuwbV5SsV3LbgQpzsuNgNo81BrJdWjQCmgNK3SLpob5Q7vqJSyoLkAk9do",
  "key35": "2KmNADDtirgLzDL1Gpp7GFwmjtbJStyediQedAV7BF9wK7ZFpj2uBrFjGeQVmCHTWJ273Ch4BZDsUUsVBFkLHxiT",
  "key36": "22tAYYRi29qtoVVaMQHy5mhrn7qVygH4XmStjgPz9ErmTdBzTCufYUxjeFEPKux5Gri8N8HR2gkLrjNtntYuLxGF",
  "key37": "w84byXirJ7JuYAeSPeaeme4syPqisEVaaZc4XTzcsijBk2SmPez8DMvcMob2BgRZj422UbB4irUzFex6q5XHUmi"
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
