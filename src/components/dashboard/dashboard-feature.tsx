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
    "uwiBJeNU3TXNC8RSFNzhZLtFUb1EJRgHiVB692sJepA7nzZW5q1ZJ4umjsW4oytkhvWzRvUap81ibtjJU1rxsvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L1RUpPiupULd3qFjn5PNL2y3fTJDebmjkB62zxFhNFUspPPMi8JfHUJz83YhcmqJSN3WtJ7336x39Z853agTa7S",
  "key1": "piWJ8Gz8G14trEXaaVyi36ERPQrvV4qdmkajyHDKNn7U3b1s9dSxW9N3F3dvfpWK7uC33YbBxggQPSj7sUvjgUq",
  "key2": "2Ji3kMNstoGuJieszDzAKUuRZ5xgmhnbgqjmKVH4EYPxdX7UZKzUpixMWCiU7p1GHEMHzzRB3mZ8hbTzYWcautxw",
  "key3": "3otTDNTv8uqZFNN9vGFrSY9Sbp8cozTZWgjK6s95yVzSVNtCLGeWVkcGKcNZ2q2GLHS2VEtZGm3d9Y6hAMVuZrEn",
  "key4": "24ffZJvDXAsSK7GvChPtCKfDkVEJZH9AL2DY3Txrv8WGKRima1MzgeC75B2j6rr2PEWj8FUAbQKZyqcsXirpviTb",
  "key5": "5NgPxnt3kxRcUGqAwh1NPs3WhqkdVNKcukU9NJx9JZ7DtgMnXrxMzTMDg8aRFeB9SWdJq7938JbzrMrZxJei2S4W",
  "key6": "3nJ2rs7phAKmutHLFJbZ1cdLuYHiNYtJMBgqbgdi7nhRHPMugeVMY6kzNSE1J23gai1PmLUimfVavjEATeeTNzRN",
  "key7": "3sdpKhSj6wdMi96oG5dfsg2VQ8zNzQcFxRdVhLLUXuxQqy5xFVqEzBHuKpo1mVGGj4fx5kfM16cQMFpQoMQR2mMA",
  "key8": "4mnwjVpJTVCAyLekWRip1wosATnToKQFoCfuSpDi7gq6z63uggiBbSp3UuE3nzE37gdBWraYykCcBToVtumrP11N",
  "key9": "2rvLdNL3EXjf6Ce5eCYnmY8FPGT38cek8kLxDjbTxgGvhMtzjJQZ8xABAKxZQdfUnyT5iGNYWX8n78XPhRSmgy72",
  "key10": "5yhCBexbRJ1A7tNg1an9qASW4WJMFfTL3BJiNqgfnusnBFKQ5Ttn3CkJo3yJjdRBFiQjUCQsJtqH9KwoRW3Jo6Wg",
  "key11": "5Y8HnvZN8YLdoufzHdVzwUpNFHuKUZPvHBPCDGv8pg4y1nw2Sg7kYEGCrs9CjTa8L42bP5w3Wrx3ScVxK5VV6hfG",
  "key12": "2wXoGdcG7QvEhMo8zpJsRWRQ1tpTQNJyGhGm9W1VxKLvLUxYvwVABFMPrnt7kvR2nsrnR6AxdjKmGh172t7h6Kpk",
  "key13": "cTB2e9rGNxJyBUpVywqEqrnzv9whcKLtEgJtyqcRE84TdWfY7xFiAoewajXF1XpwLdR1GbbB5ZHMWt7jERjwW3Y",
  "key14": "41QYeQbiUUM9cYgPjFqHRA1PtHzPdhRAhyMFoNK3SjRVzSvzybDj2mBFXpspT36zfEG8Y2RMmrz4va9s179HZQ8L",
  "key15": "41uHhSZBKu45ESx5rmJCXjfWNfsNPW34pkZrGTHcK9piChBF1fPgacbqgW5Scoid6bvyogTzop4CZnnaTCbJgtjv",
  "key16": "3rKr3fCSmaNMtHb4EVS9gxZ7diLVEmHWdm6DGqSnw2BRpgwBUCJs3MT9sfvvnTcDEXWm1eUUKjR8czXBChwEHzzj",
  "key17": "rSJ6UKnE5Fh9rya8M7RcxTxJqtb6vQKnmsW62AZeGjemscWeCoaWCAynteMboN9KDWTEELuRC6TxMNv5fGpNknC",
  "key18": "Huebjz2bXnzYxjRMBchmQcWkqkiS5vNF4XViGptYALZnaafVWvPHRXu4De8CeQnerG3phCmcSSfquqCUoAtSiWB",
  "key19": "41spDh8zQ8szpQkvkrQnzrqvahozDyXV9bw7tYjqdzoAdyqJqVo7B5Gxq8gJmb1NrZHYotdRcnr1uMJ6qxZLyRLm",
  "key20": "3YxCt53dqHBYBETLVhy85MLriAf1rFeqsGPhZsubibAZWUorKc5GYmWTEmEdvXMpMGz45AZsrm2x68HxHydF8LM7",
  "key21": "3DJFEJUbzDst7kde8f5Wfhc6gBNqpYg7dnRTWD29nYq2j4ji752ZTcv3eXwBbHCzMjSYNNVAJuPLUjE6CYABLodP",
  "key22": "5GpftzJ6W8f81hKSiraYY8EUTAYZrsUVP9MdBiVAtETosPASvFws3Hd6U3Hveo1nEk4oJgPcbfyTGcCtZRquUq8J",
  "key23": "43K3EN52iu35mZh2SWtSTqKrRDqk2vvH3QcGH1bmNTcw2f7BwfdfEBfuBewMgqkX6VgpR8vZJErTU5mbTSWSaf46",
  "key24": "fQi4BFvwchKwcNxi6yW7XJE45gb55qSbuoqB1RabLFAp3n4oGjQjxZbds2EPzq5yfCCYgdgra7cnH5QKw3Y7au9",
  "key25": "GTKczm6AUiHVHm9q5at2ARRZgKaz12AD7D1vA3eQ5sVaR2yyDcwqXSBsUQenR8Uyp3fyg2Qsy8rSwEYcvB7J6Kk",
  "key26": "4MYK6rJWFKT1tmsgg8wJrQPLPyoJsEnA6hs7o4Yk3xqaJ5P5Cae4V6Hy5dW1PQ9d2cNYS2Hv6dMSGsSY1ZC9LVjq",
  "key27": "5HKC4WgKBs2UTXcGWxZ6kcU53y1HBPUFezyWpqra4hdJTcVt87ib2ydB8N7RtQUv5RS6WME1xETYuqpFWV9wZbK3",
  "key28": "2t6YgVHpyVRfVU8vtFeXRjF9d7gkiBcvUMiiBw9tnPgnjeZZYScLDnFWgbAHQqCZvhRtXo8iuZdxyXPEbUeJeSgf",
  "key29": "3qD63xkUM7yb5gmSNLCRAsLSmS8WUpNdSRgQS169MqRqKmXFTWyoFryepfazKPozKEQKyiFBqMPjyHcuU6UjEVYU",
  "key30": "j35JRYwigCVcsuLKrcHLyMg56knTWiwm2ov5iG4zkdLw5P3KNKhEz3mtdku6jbqGjq7vxL9kD6Umm2tRNuyqybs",
  "key31": "5u3dYHNoH6ZVdD1NL5LhscTXCgC9E7yRF9jCfujiAwU4gvAbcvXMm81dXfBFhvQxxh4Ashm7t7XetwkWRnwkVZxp",
  "key32": "4Q9FDg6jHFom5agfycZRWaeGCWPeT2wJHZrpiWGvZDgbsZ3yxUE9snUTUFU13c5PsFrzrv1cMe6V41ZAdgfA44Bv",
  "key33": "3ppsRmcZL9LSsfzRDUVKxib3QMTTafw3qJTHgjdK9Qhuaq5WZTMGiWrNgtKktY7azhNFUspGKjLxm4X8ToAWyEkE",
  "key34": "4AffgjtDUH61T1tZLRdnffysRQeybRymPdbnhSqEE5e9KUS2mvMt4dFbrw8Y61gL5NeQjJJyVMuyU7VB3FWef2Uw",
  "key35": "GYfAmpi28htWNJUP6jymTr9szo7H7fVJJmucTJPnJvrxEE4ECZ2YmuAxsneNzLWTb68VzACwq9MxYMaULQ4CtBy",
  "key36": "2Ge3WiUN48uZcs1nrYfVx125vhKjtsyQrsV5xGoM8dY1YBEsn5hWK2mdTam5BcmF6cFsijAEC45aZL9nkzUuCeor",
  "key37": "58vLY1YTW99X3CcouweWacijdxoGVUvziWxe1t4dkqt3yfTYsBVPEGk4t2SGf8wiFsYbqj7CdZqswbycv4GUMwZW",
  "key38": "APXdFLQnY2hFkmxcwRqQU4BcU5PvDxEHjm6b8LnVzAtjCHSfHWia9b1CjEChydh1cDVcobBYAvub3B1pToMvwau",
  "key39": "2RxGRqoequbFpgVYCUSYxAWuxTDXjT6SyEc2BU1DWNmAdjNyHJRhbTS7TueBxXZU1wWe67WyuVsrpsiZhN2Rsqa8",
  "key40": "yg62tCcGFFUNqYWz5DFmLV8cofPveHsf6F95NUrr6Rm7VKBRyjgtTChWQ2RbpD1gaoawL5wiwqbdvA1ozFxzTCL",
  "key41": "kE9czCcRTVWVHQjYvPvPTjB7iH8cwKQ1zyt9cjConkk8t5bd8Vmpq3bc51bX5bXC569ropD9nn2kmzAM7KmWECV",
  "key42": "3NPuBah9orpJ1EoLuVStpAWUXgTD6G9GPeER2Veyv7PFXbTa8N1LboJjyNUWDxUAAxjPT2kdU3Au9Ad4JZddN4Wi",
  "key43": "4vJsVfQHSC6oegGSgmHncKcbNhhQyv1nMdHMPiQ3v3sCs9GgryLufsSyt71tuF3mPdw29ZZQLxPsb48ZRL5GMYqw",
  "key44": "2pBpj7A4VHWgpAHPL7PeodiR4zigiP1QFGHLJ4JTbmFo27Z12kaXMY7DVYmHwF4HTCATeucynkepcmSYDMU28m1N",
  "key45": "4nHVJHRR6gxeTRwfhro7ctJFb9bQ8yBY6WGqdLgvbm27xBeaF54LEWjGxUjWQ55YYFKvZBss3uzDzjMdvARk9cYb",
  "key46": "2VXJwLmi2WJ9wKFjiDQxnSk5rdLxfTgAfNK35zgNdyvdmEYCNSnLeBR13mqVgCeaZ8BRjbcpbNMfmziUeKC2RtVZ",
  "key47": "5AdA5HnHMcKaGAwJMCTpKjv6qfyJ2RkWrjzvUARTG6WBZWSuZD5jfxekmeG45EcaWZLQqSC36uArMLmgpZUfirNK",
  "key48": "5SmyimL5ZWFAidR9ffeh3q9HhKAzheKy5XojXWpS8fYkwR5ZCYBB4khMFnh234vyEFiwrNjwpga27LWLPRpjWQav",
  "key49": "4tAvutudCPN3f1jBA4QySQpXSZCSDNDcFyspaVSzPsEtZU6xafJjcMwHuzcwiGygrLvxtunfnKFZ2oFPWE8ek6YX"
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
