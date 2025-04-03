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
    "hR7enooRK6UWY7C15xbtVGVWbfQevKPLyBtfKzisi7VJWtMLyBJvBWqc9J4QNvLp2xEVhrMWDu3WhNy2kr9hwm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zEhfzpghUPSE94rf5yP3K56wLGpbhwoT9vSq2tozjh8WR8kM76punz5ByGrr8CasWDxH4NtAAjfs9uiRfzkfwJs",
  "key1": "21hZbhBRkNxAZspVhoYjuVHJE2Q4S5BysPAnRCUbyXPs6ab1anFUW1AhzHC7E2i4j98Y4VJtUTo9KJCzFvsSCTS3",
  "key2": "2yyH2orP3748N1qgPXew4qHtj9ie8QFhqUtgqPgLs9qGa4wyNFmTr6Q1oHodD3Ca1mcfrQt4PC4HAUVtzVDWb8VX",
  "key3": "5wVWAFgK4p99HyLtQwjncL4YZr8txtf9B3iJWL93UKQbHtNTfT6mtTfZbpHg3Dt96CFAimq3AMBxAi6SU7V2c2Q1",
  "key4": "5gyjPjwTMfcqhbpQCMqHF8LU8Q9D2DcTXZQUHrTa9SZvDy2RDnm9qvWKvoKqKEDPYuAtS7B126sPZrqfR6bFCNBW",
  "key5": "G9LhxFR3fKTw1cSrCopr6NRTzrm11L2zVLSwkQqh8rHfHs6ijVszkNoUP7fcVJhL23j27uXCp4VDUf9qmvtV3Zt",
  "key6": "2LpdJ1AnVgD2ViJWqyFHPDt63xcbeqkfFwBJ45wnaSxCMzJQi22Vc4ZJj1q8G9D6bA6jfYKpDBWntZFxyjrXmMvD",
  "key7": "2bN7BNispvvWsLMeWDtGuPhFLuBDV1WBevMwVnHy69PFJQzYGPBE8XE1rnXeZnfjnY3cQ6msa1QSYuznyALkrf5V",
  "key8": "4jzHCiceMhZNnp9rgq5mcoihYCLfuepE1CHSsrgtUwxyJmXrTCUwsFaA18zAQ4o4mTjN5E9rPxJx3xMjfnzrxrfV",
  "key9": "2CGKc5Xs1xDdpv1F6CirRGQdKkvMmHwEY6ng4z3bwJA4FAzBwyR3hKafrzTQXEPgdPAjUW3wtfR4i91T9rMz964E",
  "key10": "4yRxYJpobTazrCwEwAKzEK6APEsk8vCEszgrTetmXLSTAkcLsi35vesp4cW4SBDQGX58jhukGNLz9hek3oNLstQY",
  "key11": "LGNEr9CKGUwkHxRnpQsTXDrTXkj8XAMAoLNzHAy274usnNXmKtua9DnFAVHjLRY35DwkRf8LaHE1C6avkKoVLgf",
  "key12": "4bmKwDAbgwUiTcLefq3dfnih35TLuQodZjrQ9BW6P23SUGEgAs3cYeJJq76MFf35q5LppvC6z7mmKWBXbD5eeXFb",
  "key13": "2BMathXiqqq37NDqNAJ3V1WaBJkT8SGs9gFUtBY1wnJ76NtagfqxVqiBD1GabMomc2FeNhH6SjmoVqiNUDYWoE4t",
  "key14": "58nHvg62BL2eXZxMmg43iGN2C3Gqid6YXWZeRXbosCua5Pp9fn4N4bAdmDxing8zc6xV8PNXdEGBmBe8mDqZejGD",
  "key15": "5cipGsmbixWPx7L1AFj13BSpcbDfgxmXfU5m5H8CS9EykrF5Pxbk4hXob9M2mvauxssZgo1Qiq6Tihxdvxcx5jV9",
  "key16": "3Aqjf1k9hByR6sb6W55hhmScStDbKRi14kQVx7eNvq6Tt12uDi4BqE3Xin8a1epn6RNE3DDauPKiVujQEgL9rcX4",
  "key17": "38HZrTgrU7qMXn9pvU9QNpcUN6Vz5J44PTwyibY4pM7HbReKFzJxzXgQ6Etd5MkaodwUayjgtVJXfkWNQRzKq4xh",
  "key18": "49At9um33LgKvAMMUm15fDxkdFwiag4vbdhkWemFbwUqk8FQYBCGATPD5TQjksoqA361oa74VCyq8jSv61rAmSyc",
  "key19": "3kea6QBnFRcBnfqRaxng14FEc23C9ygXj5zAijLzT7vEcNGtYeNzg9sHRjTwKFRacLDnfuZ1jaF5MmrkTutk5mXP",
  "key20": "5YJeXqnsfMqWtmPz36dW4XRznEYsSaNE5M3aobLyDbNNRGBAkUFrjs9XgQ5iWW524qa1wyRU9q2e8GkYkGSeiGWe",
  "key21": "45YHF34jcDsyRZtr72Dyfwit7sytEMBRDFc3LNNUwd3zK3Hi4MA4EPDv9miLGuiBHNcFnCJ3ejmmyaMxittp4nGd",
  "key22": "22RshYeX37jgURKRLtiVEtCWcX3RMkeNwRLTPq6fxUskucxD89wj25SewbsZ3SwRV7D7yaR4wae8ezaHX9QggDUn",
  "key23": "HukLCiU1uaJU5L78BCWHbHAd9rRkRBbmd4eq8N6LLL927K7UWtELCX9Q1nokU3ZUShMuGmf6NdTxZwfJ8KwUPPt",
  "key24": "iYYsubhyHkWkicNBgAdeVQrNUJYFJQD7GVRcFNmcDxMecEV1daLpHHCpSHatv1iWHyVSSk9dqpBCoeCjrVgEkvj",
  "key25": "62oqM4n9paZAtXEhK4SoMeUTsoxcrWoENjXzmH7W1MdSimUnNpPPVZEyU6UuQjPsQhavVCBjijx4Uve6wF7aMHqb",
  "key26": "3BGLjtntQb9HFVZVdkc1JeGYyGW9Nhc66CiyVDs9fxWuYxaNwxmUqBRkBFDUVbdGRQAqwS5weErJp9UXTAGGasRU",
  "key27": "4EhdYQP18yARue33ppkVN1BeC6ECRn8Zmnpab4J32jB9xtPNNALV5GNmGLAicFFNvzA6zMZ3smXqveU4oRvAJe9f",
  "key28": "BMXFg7oFXQvZ4gHjY8jNVVCH43mDMX9qkrdZVGPCyhpVJvdVUeqR1UFutoDbmQvhbbA34on2KqeNsCnKciUF3vZ",
  "key29": "1o8iGvQ2xJDU1RZKP32dwVhnnuCbCYAQDVKqCBEWG1WFQU3cKd7qYB33xoRFvpAMuf8jXvNdd6qhR41osXcM6iv",
  "key30": "3YzYs8ceyC5ar7nhd6xqhTAGGohMGx9mgsqZMA4BDgZNPjq2PMhfKmV3gkdvfvutxHa2Nsn2SgMCYE9bn4vciKis",
  "key31": "5L9J5B33rWETx99K6stbadUEQDzjiUR9AimXdHqiPxiTHiDDdHtXg95UJdESUBAWUoWutA3NoB824EGdpgD1ato9",
  "key32": "47EvVsog9EqpeonpvZtmZi2KfgksZ9rntR7cYeYwY96zEk1EKQtgbNskPNeLc28r7oqZ5SHhSXGs4DXfMYywQcGe",
  "key33": "4XV2YD4KVHYUMfXmLf2WUQwThhyoa7o9qXxePVfQSHZEvFHNL5UnsEpFz6Hs3c1wSznSk5Qpy1zxFe6K2AZCNByb",
  "key34": "23boBhyTeLkGZwpNRB5kNhSttH7s56AENtiCKzTqTNvFS1u8NYyUorSe6Q6aJQ2bqYabrhpB3vg3XfCEFYgDUXtc",
  "key35": "4ppTYRKyKULjUjokRBESgzb6bX9pwjF8JEVxQXmxwYoPzMdswB1cn1wQMBRZcFKb9R6vqgVY9tTuyR6GJx3TnaAa",
  "key36": "YZmeZnt5JSVKoUZVa14p7H6sb1DdTbQ2Fb1esiXaaP2Rxk8NBB7zszEuPHJLp3kNyvD3ycpUVARbREZjfuMXzgY",
  "key37": "eLejqKUj7aMDKyJV1cqwfo2DTLjv53JiGcJcdu9mH3bpEZZw14z5iHP8jK7LRTuga8rY1f4Y63ytTWgZ2PsugqM",
  "key38": "3aefBJxHhn2Dm9nFZUKQcx5JEUCXCBrzhTwFuSGHGcfXnYXHzhYuCCGEw7vBDBndvrSeLJHskoLHN2ud2uUzpPf1",
  "key39": "4cQhshLSV3WoZYH9JQd8pcchvQWZ2Edqyv35WQ6tr88p42tDzoX2n2C4XiehCBdrbN9MiYYCSot8g3e4eeDtbj7r",
  "key40": "3LZAz6APUMgeDjow6wW3LhmEYrULhpKhan51277h43EJSpGTBku1k3hxJwYWvtbegNAWfkxuuDewbYTob27Xab7W",
  "key41": "xLtYJnLhN5hPyHGXsekVdMyzcDpW4CjtjYYKVTERLMBtSpHGcZjhSSphx1XmKtLSSUyHkuB7q1jfRz8TKKZayGp",
  "key42": "4Jj8BaYQ3jbsvRYvE8cs1VnYFTMzv4k7KG8M1UDyKMppy8qfjp5bEbbFRvjpAKf5jeRqRqwbBcP8rp26LPXD4NtM",
  "key43": "4Fmp5upLWiFyW7eHAtV3BmbJyaGJsy2BmX6W3t8kh4VNkkL6uRbSZKL2E11EN4BdKB9RrT4xnipP74xiDJanYRe9",
  "key44": "4gFNrBVf8wzLXRQNgHuipgWaza9QHcYzb6gXZrFfbuvbBhpBNQaGd7z465EREQzBhi55ZZbw7F7UGsba4w3sLm4g",
  "key45": "5bP6y2x94gfavVwL8HuzK565WvxVEJZkcH1QJFocFv9q3RaTtA33pN2sGmwo2vL1TKMmZ2rPfJWSDYXB3c2fQ1R6",
  "key46": "uRPiBMZksmWDEWo7BHGCt4xALXPdCz5HamaUGScuycrgMvBEfg8kUo8pE6HEkPEZ58urqF6s1GvxcG2mD7Uqkdq",
  "key47": "575vdjGqtzcLYJu6UkHavFwfzPE112NXrxzHXdKUEXv24xsWMvkpaTcugdvc2Qmgkv84tN6hLkLhLteYXu89zjN1",
  "key48": "QdTMFtN2YBfpExFewearrBW9RYfUACLqvQJf93bfi7xWNz4x1LMcqeXbg8XeHb9GujgazGbfzJTPcJnuGbPdwNp"
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
