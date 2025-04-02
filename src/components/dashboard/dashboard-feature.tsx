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
    "4RFxwe3QnfuR44NaASqjTD9oAhwtB1V9TDqXPzg5esdkeHw93WZiNgVjrdCX16oLnXvJavixmh7faER4kKwaSm6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JGWeSXikwBob576AA4req9UzuauABb9jtgS1SqX7CJgrh6E8B2tKrsYsP5frji2o7UoNkXZqTMfCYSEUyK79bF9",
  "key1": "3B9UCtnRBQ1ax4sqDqdcHH1pusN7PzTBCkxdL1GSFqVHPmQqKCq6ZCiF5xcoXxiB2h1imD6wCQccf6CFkgUojewf",
  "key2": "j7fQSH9VBWCCyrRcpztDXqME6zuMosmLka5dDfjcUJK1RinPiFWAGjckFbW34sNoc4m3M4wRbAiJwnaFYM3Gpy5",
  "key3": "4ePzRWTq4ZQNCTLEMMLnfuovbrjs1HP46NSiFv1KN8GVGYBbEwcudWc4CEW4Xu9BRGq1cUURW1Nh8aq2mXHWPEDu",
  "key4": "4Mav8Tw2Cxj7DyNAsnhKqgYccKkhndYf2UfiN5huXJTyk826vtaczi6Cc5Hw4cthYBeJiWqVZEuaU1XQrKfPWH3m",
  "key5": "28bsM4xXGdCbPUy38FKpZopWzdCDBQmqoqDPqs6fkixoFHp42QCAeJYf4mDcLDjvdgHRSQJCydNjFKd8dTYG2yUh",
  "key6": "3SnV4TVkX9NCxSYaPBfz5kkcNdbzbt88pUbUoP7rhRhU3SginUcSHSLVpgnY9MZuTorPz3aNFTcFDBpR9v7HkN9d",
  "key7": "3araV5Jk1oxRyjosFiyLqt8qcMzwmZaQRMKxg5dznbV5LjBZxird3yCNPfsQBnsTehNVC8G1hBGnGAwjrDiyGfqr",
  "key8": "4C7cTjHZoqvDnABz3AmMMKry3pAiwqD37rWtfZY65Ed9C6QCCaaMnWQq5uUPb3orU7hmisMc1BPH5qK3kQhLo1Hk",
  "key9": "5xHs6DbJSZPVJ4H7cPFqzXTPJQszAR8zvKZbQLPULKP1a5xP5W16gz37G6zrC78Pdr9CHiR486dqvTQpANQ5m11d",
  "key10": "3VeosbyhCCwjusfJ6ACc7CtwS3q2tYsTuhGNhJwF4gumg3C4w12EoKmeMMU47yzj2xVPdeyVcop9KGGfxn7keZeY",
  "key11": "47y532ngJxgRGJZw3vX2ccqzk7hQ4ZvWcv3YRwP6krZDqsvJMAWAJDfV5SvhKzQD1bNRpbcz7hRPT7ubksud7FbV",
  "key12": "2ekqCHG6yhv9Utqx6jHzeuhMfm2SxmEp43uYP4Cmh5XXD5JgFJqQMEfdFJqXZAodKt4s8HYbvfq6ezNo4BwQBsUF",
  "key13": "41sxqFaSgkpDok5MwwzN4LGJ1MF6mvH1zy8as73qdEBDtLxqpX7v6PTPBGCrivEWdUFfkJKcDhRPrDJLUYnRJxPF",
  "key14": "4PkqHXFgWH4okKo9CMe1Ypb657PeTVVTFpCz7qhFcXhpRQAHdSuFbPNZKTRPkqWsHbTNTUWkTnYAE7218MdLQ5uk",
  "key15": "4Jf3fwLVYuErEGDFiZj5g934HzTLLrVcYimrnzkCguaMLZbhJkRcLvpGWMyhUUGZ9mriZt9yGgkAmiNaiRDtRZGq",
  "key16": "2A8B1LghZuoL8dYw7VoRi3hwQusbmdgkJT89UJPHMfFzjYHswNLCVU7hJGMMz6Kbqf1SuVvaS73nMv9AsdqR6nvr",
  "key17": "zsdpDkPZX8Ect1ZyVkCFE7rfYD9L3cz53r7VAv7yPs1ZCGQKLrTGHwA6t5NFGebdvQgKnwJp5fMYb9RsvdMEvxp",
  "key18": "4DcQAmHCPUW8t7KysDYvgFyUrD2rU6zbDCHWSsYBGnAR7vn5r7FnF3Qc12iyryrmaFSeGNjAJJHUo44M1ZsdwdFD",
  "key19": "319agcLAL7QKuuupmzhGsBWpC2bNs68Yqs2Viv7gyxUgZv68DyGcmPDPSWf3ZboMCyeodBUCo5wCC2GnaTr6zuF3",
  "key20": "23KETbfTiW7JWRGaQoE75afioaJEP2RfuBNS7Ek6NaGNzZWftH9HbgyB2h4goW3BMPdCZRdKbkgK6CWXE7tgGsSK",
  "key21": "4CP9pmh1Fcq3R8cGuvvyirQgQv1tNrLwDWdMce9Wsf83azXt7t1EszQKR9a1ZQ3nXzvMy21CrQrr7PSQq9RWXqvu",
  "key22": "37PRPj3VVw3Us7iQykygEf5VrEFFxn4spY1Qzx13kHRujBDqYcuiw15zezNNEooQX5d1wyzhCiWUsVp6nRNzkYv9",
  "key23": "4xf8VcEByEyPHP4QdSZZEvsakATBHs2tdDpvFkRYnVtqH1RctRfxAVY8YrQDrUKFjLFcgmaCVJJDjBmqkyiNgBBY",
  "key24": "4Tr9QiPvP5Rnj9deQLWuKXcSU8pRs7Fizz1YE1YcT3MDXHCRPWL8iVwr4JNw7mo43wmAacyfd6YHWNiaYiXShHRd",
  "key25": "32PVJuThcWbDfravLRoSvS9PrBHAku4pBdYgoQiJAZ8nmaDeZmVf3douXRM5BmzZFCCGMSozFPm2rgmLtAVDH9fK",
  "key26": "fUSQuRu8GMwSSvdbvFG2fu2QPk83Vq6Gt1ex5794Za1ocjc6hvBQsB93TwLMcD4SY2Z6EE7cR5cmZ9Hy9snQ4DF",
  "key27": "2JVYTjLjFNM79PgiiPEdzgKzmMRvbe5sSuzskgEBwbuSrfyZGnrdNqd6kk45ktRrDrQqjTpmcTFRDE1a7F5BToET",
  "key28": "4vpgXVNhc9nN8zG5z8pACn793u8BrtAYN55APoEsN2gogDWDN6key1SqEJSbK2tS2myZqQhk2vVwv3yyc1J5sYtS",
  "key29": "TcFCoJUnbpzoYV5Bx1AB2JfahuSphNbVyWELjXb1R9MgbxhqLSVonsRTMNtKrn1bTFmUeEnGUoMcP9qE1xH7a18",
  "key30": "32zNJe5ZagDXsp9QTZSVoyGCCRj9rx5bFLKURfN5tCA7BjVW651qvgCuifgPLfATRgXUEWrtzPhfKEjUWbBM4w17",
  "key31": "5wgpiRJ9tAmfGJ6mAfc79d43iTUWgtvAfsKtkdHB16G6aBXCrUfSoPMWdEBmCmXqj9LRRqN2Y7uecWaTBKTXuu6g",
  "key32": "4KEvGzuDRKUKTQy4rG2kDWZbpe5vdXuX6Em2XZp5uhgQr2r6AsPhKrMBVvWDbiom3JDnenYPRh91TcC4safUxrMr",
  "key33": "cYgdHgqoFAsR7oUsmebbyZSumcmgoE8t3meoqrVSPGB6YmoQvaZ42owXWxwn9SsZyheip8a6aZ9LTmh3xZWMrAK",
  "key34": "4mFwpUbjNKsV6Htw3AtBkJTVJXCzaT76qFXSSC1oGkLtw2mmdEKhLN4f6z4bHhLnpm47vCHfEWp8BoGTVD8HdtjG",
  "key35": "2A6GkthSYXLsf34HK94m3AohVxDBLQEQ1KZCzqcWCPULbvqqKoNaVq39nPAfQzVitkjHZunCgZ4s5vrSNt9NNxjP"
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
