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
    "N7oDzigCZFNE1TKXNg8wMBiULFyz21wYANSRVSDTAftmcKbnXrNuKacy2S5VThkCt7fvNsKQy94djfaXy1Ep6Zc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26bfGTPUPHdZmL3776cev6JRHYZvxSkGxLTeusfQrPVAEy78UKYJvhqDamHEfqzcfrep4SfhWajr7mKuAJzgSAce",
  "key1": "47a7fFD2w99bbEXxEmPU1buci9mEYr87271YAFYUKqajJLcJyY2JKUiPbDLs1Lr4MaJ5629WxrGgzyY5mwB8kmEn",
  "key2": "3HRKvhBBB82S5L68Ed7mrBHgAYevMr4DiPvpw94GpYYXD83jAVoX4bsHwJeYhy3DJDK57SiiVMABeBqxnjsxtA3B",
  "key3": "3kFoHVtn8ib99McV6Ymb6yfBHVoxsUhAdwrYN2jaYZSy8owjVnQdx5DSJgxww5NESuP8P6rqFNesTXsjnfNsrMPJ",
  "key4": "4amw4i7zQCSQj1EKdE4DpL6H568oh51EVt1ww9Wu3Kiwt7R4HiMEvxbkkvZzT2DtaHuzrdTyAB8HN1ogdRnSEBeT",
  "key5": "2mmSiTxa9Tunp116CSFqkVG9cZmignfsmxxPsR5bk612dwiGhuo192M9jzcpxsZxArD5HtG6W9YxdXkzE74zBW1u",
  "key6": "3PCpPW2AFaNFYJwzjAEqxppSgdAxcSAponsjmJkkwmWTNLx8MsvsYoQH8hVHZATYyibEfkCgxhc6mzck4y18Kmqq",
  "key7": "5JxY91kN3yitsCzFqpav23d6szRSyrw5wtTXvNqtRWpkxZ2VDkjYkxvcntPAt9dGqGPrt8M8NUgXweLUf2nFxDPE",
  "key8": "3uBVCArG45MKQynnVBw2JZRvuEZiUtQudJrqR4xuEzK2s7VtF94qe81XoYTpbwE3f51Q41acmk8zNMB13vfuZ77e",
  "key9": "5G9taaDdc7WahVEAsttaXHz9VUVaRQWUipmwprfcbt3QAeF9ZLcuZMGbNCCtfeYBFHpSgvrrpY2DmThUC8ohkbEK",
  "key10": "4B3B6tZknCFseFjBKjehjnEjQmQKkMRqgNPwzvKKeKXmEUuWP7Y7sEpqY1eE8DqyY82F2XAyLeCtQ3C8h76U9ZQt",
  "key11": "2DzxJHGcDE5vtnNmJmRoaE8VtJA16F2gmETzYuYqKg6drSE2g4LHigyuwzbAELxaaaZUgy6kYCh6zrYWbhG8DA5R",
  "key12": "YBhMMuXqkuoAVNRcbb7cX8A2xj9gvotD8VH84hhauxRZirkTghZ4PNbpmL3Z3PdpMaRzcYs7izBn6DWAxFkcjoM",
  "key13": "kjTDtm8iXQFigBUQS7mKcUGqWYdoxjXStdMqb6oty99ZccKLU7Mew8LZMEPuK482vwpPB3LHhVRWnYGyTAZJ63w",
  "key14": "dXsKHJaw4aYPbBFzY3oZXbHiGMeWySn5vbC1JkSSSLk7uNQ8y5LTXLf8oeMmafZ4MuKcbY2SAxbwwVGXVdS5cqD",
  "key15": "bFcTgvqS59W3gMRMSw5vd6YYAEK5fdzy7LT8o9AvbtHQJu5VQ8BJd8kwbgorTJiuxZEq6czjzgZsZmiDV1wp8mw",
  "key16": "asuZj9fWeAfEuPcqjdU5JNzW5hehAK8a2nPxzpLFB7yWEpWSJ4qutsC8HN6qrD4McdSYyasreS9DDM8Gq3Zf6f6",
  "key17": "4dJBVDVjscYRsTDEVs8HKBUckrUmc7Jzdd46UCExACXdSGSqXzZzcrJncjB4EGPLoGgtcfzCYxBLM5yHh7saZAto",
  "key18": "531MesuWVnLXWTB396bWwHp2xxayUwcPY4FRV3dGyYckqHAeLj5ztLHmU8A44xLWZcQsvRhv71kXkVuhZSUbZwAR",
  "key19": "5Hyjf4ZnDLAJbHnMHEciNTC2t3xX7F8nNWwZmXAJvgUswxTDmDq5Q1bw9MtrrS2ebWKtkfMMToWPy6qoZn9igCxp",
  "key20": "58d3RgQgscUAeDiX2joErMZQApABYF1WE29KRndEYJKzcbETYAK7QU6BCSWS9Ru4NUFg5JWfMxdQ8QFARxKug83q",
  "key21": "3oNy419HSwpssfs5RZ4Ajxx2c3neTZHMd2udYUZtkdpFoo2HbTEMNJkeTh8GXedJQXRmxow4Drz4WQj52zYoEeAf",
  "key22": "5cb1nKYicxiQ5S6MHNqHQfVz3ynjNynXyJXzHkzheSGMMnBEmPXFdPLzstmCZr5UxftZFi3Zb9T2YJ6bFfYWoGQr",
  "key23": "5trcquw19v9y965BSuJXkg1yjU6KtharLeabVut2nTMvQcupXwSZDeWcYUhp5v8rbPj5nUkPR3JuRaW3MZxgqibq",
  "key24": "2E4y58AH1XZeYeKz9PS4873ukw3UM3JjuRyF6j6WHYawP4jcb8HCoAf3XMtpaxNwtK46hfz1pdxaBgE5a39SATAu",
  "key25": "5hSjfkup442ypKKpJMirxZT45Mzr22mbCiAWDU1uE5iRL23PUAioD2y4Pv81xkeGSJFekx1KinsX75pUimdtz2uw"
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
