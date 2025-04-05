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
    "5BA3oBfobBfEBAKoEXVrYHEa1UzdWccSfX9sABLyWM95twwEmRNew5CaTkhVERZpf4F9hiChtrZCEEMnib3u5jUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63USXzDYyQtBd8YbaFrmfG3owqnXd5ef6KBLZqQxQNXcZ11frPucrTd2WhKbJa6ca5vrp7mZ8X4oKkbH46oYZAr2",
  "key1": "3889hoi6m96hKnFE1C3Tg6nP9CvL8XNxCoQZtoXNjHdHZmquBk9nUtnsGf9ngS6Cf6DPeoZmXEBBL1pDZbcJsXKA",
  "key2": "obBKBk6MVQACQzQdMenyKnQe1eoPSYjxaTu67KjJPYGxZ7YkzuuLCdxiE9WiDbdJXpTsToJVATwLHZiFAzY4Qfd",
  "key3": "ArsZ7Z2GhYVFBiAATGesFBLEnKWp2wb4qMHfxcHQacwRHNZGfeiA9oCcLQ7CDde2DRTqVpmKYL9GNqkhjT5rm8x",
  "key4": "5NfDZ4aRtR3zJmC26xkzvrKu1PpyUgkfd8XUeYENBdTpyP8Xt3o8EVR9J34aiiXwYL2Ajz17ZcQ6B56ToikE7oTB",
  "key5": "3tevWGR6vKvSjpWGiaP1Ci9ixdqcme8sQZeVXVRSqZiUnSJTnB2TxMqC3769NwEvpcAuMj9xt6Layx4xXqiKUULH",
  "key6": "4fyxCcMG81gQcPuLqNQ75L4dr8c8hspEsqv59rySu5RWjz2QRH434Q6XLrnJj4F4bhWVBz3gbfmoDC8oaYLQXM5X",
  "key7": "395JNyL4tzB9G6Pj5jBnuR4soHG8xtM95eFavgQMu6BBorApsgxbqsLUkswbz11BfbB63EkvzJzqSZqTxsimTN9j",
  "key8": "63Y4Nzo6GRismqc3stQFcec4WMiKiggzTJqzRZAsVSwF27452iDx5K1Tjs6Nd7zdCJfMUgnrHuWjhXDvH9MkwEbB",
  "key9": "3RPyH3tZYosnRgvKgweGLjqrE24DZwzYNRRmER9xVww21YiRpH1YCwKtUJxgQMLgadHjC1od8CAUNkUfHwzfSFvZ",
  "key10": "UFF3P7Ta2QeVFraXGn4X3z9shkeYPjpb2TYNSjtR5R3eCbmhjuhUcsPygfNWnSpTPDHNHjLH9Xbfr96nX7ets3s",
  "key11": "5cLuM8MoCRnY8ovQLxCniRHWaA7E2dRyVo9r2EAA2bMGrua2FvdoPTrB1nDmt1q3296MuSZXbE26hjSPDLMQJyRu",
  "key12": "5LcShZit8yZqnoVJDo5iy3jNKAyWYyyqxs22m63eiuXg9YrRAhLpDUDFJPpxjbyYk5n1rKn3Xs4DLH3aaPkcs5wF",
  "key13": "3B1hBWm2YWVfR4z96Mp72sxwDRUeEjjQqvDoyD1hnMucJVzTgTnNcyJZ8ksTYo8t19Pz2LJi3VhmouGqYE7RvaDe",
  "key14": "2RNayvjPURdkwMEPr5k34tTLqpfE9JouhVEU1xTLgU1n6MEp1xmyaiFYYKay3XGZprSRerJP6H1UoQTCPbiWW9rC",
  "key15": "48axKtXr1scG1jUDYq5CGEz1LgYbbsC6HwyUAcww5jAxVQUDVGNwbnTRtJcGVtbwEK5LRTEncQhPS1VAinsSosWp",
  "key16": "v4GykTvpVXgEpf4MV1e9ZCc7Df1PeQPTHDiE7QFqivH5vAzQu3eWnbHfbHRP2H8kJKzY2VDVyG8nAmPRtgirP7G",
  "key17": "96yjamBLfaBtxUqBg36yrjSXE47NB6LMBoK7BK9i1exSi7S5QTzve8KQNYy91raVAg2TAHxpeaB834SL5zUzitj",
  "key18": "2pjzDxSCv8bJX7QwZKmh7D4RVhn92BTXuAhKbUD5S7vcvJKpZRieRh7JAmPTKjCQHsnijGXs2govhVUkTEGKkmhM",
  "key19": "55sockzL4qZ7oUGdGNbzB5FME9iwJgEoapmRoWQtBUDShNsSnhsk4BcbNxCxzCo2b5CxiEyrbTg7nFrXWK2DT3iF",
  "key20": "4Pk6FhRG5LJwPnTn4tbY6b1PKwBvNCbGvGa3pA6ZWhdcVVXMJ7rbgHhvxP8SvwhCNmFkhHCjNNM7iudsqzVFujRu",
  "key21": "61mSM6CMbzvBdLsCDCqR6vN9DrVNxRkw4xUmQvnUReCeoryvw8PVqbSgE1DXDFBr6oghhKLscyBsoz5PY3ibvcJB",
  "key22": "5Pqgp4EmmXis4HdEk5RtJBJPTzv5RuxiyBUxajxRvgHyaPELHC35kmkBVKcs5osAuqswyA8jQZ9wLuz5LoDYBVLb",
  "key23": "3HCs1R1vzCvrkZZoDp3E8qMN4Du1xvbZAuHCkopb6itcp9k9cY5Mh1x3ZfVDtGg5K2NbXJ66uuVGiQ7gLJkRnmiT",
  "key24": "3P9if81aYNGqasfYWu8XL2s7BUmYJRakj1QiRzBDaUGK61yxedCtrpsFx7in2uBYpmpmYxUwN4L6eA2FWvX3L2U6",
  "key25": "4R2CeC3qrEfVoaKk6NLnJPAUTGsajCEKBetHaHkbYCTMrAXkUB1aD4fefDEQyKG8e8FHpvL9esEgNrTAwZYiJdbr",
  "key26": "2Cfkykimh3jrRaieofJyWinp9SQhfuyQeWLE6bTXoE61fvzE59erWgKz8ukNhcnp2F8egGBRSg8uSUf5Vxd6h3VQ",
  "key27": "2XidFmU1LZB4rBfg9GLQK3GPhKYvsff4K26hrVoMjyDvL6jyTykfEzPUqqEKYT7JJx1dQdPhtbJ8zpd1JxZHSa6u",
  "key28": "63HfWZB2jrC5JNX5xVzwxiZb7mnWRtUxnvAszkK61BybWcCFZ4wRGNC9jeGB7ceLxo7N2ZtubYtJRHE3xs9YEwqA",
  "key29": "2HAAXGjF1WsuDZLoU3KpuJJaMmFQ183fELMHGa85tBpJaDpxXGpjhYbGiFCrc1Dqsad82Abpm31WPNDAhfFSUcCd",
  "key30": "2zyARxagCEQwkSavqR3c54Xn2q8M1otfjEu7rf8RBaPLnQxmMGkZDrTFaEqasieyu8K14tNucRXbSFACB2X8hHsi",
  "key31": "4bxyfKWpSBmXQ1JrfCk5itgeoo6e9K6r3AKvJkGnF4Nh1a2zmcwAdyDDXJgpSESqBM63TEXPm4fLTcFu1M324tfC",
  "key32": "u9KwCMSNXWMC6ktP4G2W3xUj2xq6HBhJHiVQ52iPmNHxwk4jf2DspU1X97sBwJ41d73PAL1WDrGCfUBAwNZS2Vv"
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
