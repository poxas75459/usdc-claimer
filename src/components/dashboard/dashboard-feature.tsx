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
    "5Xk7WDjchoQSRk1aaSSrBiKJVPokkZarYWvpr354iJFzSb2xSaCaCFbhqmdghjz55XeAPuzpKiK5B3iJdDyzmVwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZUnJY694pHkWXMzK8YokHV6xLH13uRL8NdyvuiV8fxxaNJ8apLNhRD7jciJ2y9MSvnwvKUQE7nRM7LwCZXtgcXw",
  "key1": "2qido93tcvaFkmSdfQBRko8vPBEQHjxkQR8rwtEThT5xi7vxF1GkhUzTEiemMnwaxFVx3F595rkGgZ336DLD1BZ4",
  "key2": "3U9N95jWywgpFWr9EMerCAFwDDfUsi5jwEXQNHGxE4bLRk4DD6MxHcGLssaW6GLWHKqQGGnpvv2wgitzhnrTey2K",
  "key3": "4oFZC5j4Tru2c1fBDP1qgrzXpd9YLqbukZU2GncDXpMXtWNfSuKjch4ejW2cdJZ6yXMwMKprqDacHD3pWXmrCvUv",
  "key4": "5Ga9nSFzXkXYBwSDDrChVsXPmvw8cryALiA3yivHeBt2mYC8C9wZSJwUbbfRQXAhbVL5ckhWUxSk3nEjS7XHx7t6",
  "key5": "2Wu2nFQAgHRjLKxhAAzXcizb2ZjgrV5wuuQDECNXw5395nqio5SGCGvmNyZkg9mccPpXZbPPN3N8k3QqCxaNX3Yu",
  "key6": "3P3SC9C9igjMMfkoSvQuVg4Z1aRdoj6GRTnunsjs5tnYsHZ3bcqThQ5FB6kbWe54irZ5QLJs6YEkJUY3bNrYKZtA",
  "key7": "2cVd6Tzdqc76xXtGAQjf4tMF1NU96MyHW6wVN3iJUqTRDhN3AKeLMciUEv7q4iaDmnHKK1qhk2U7baEXnG3RthSa",
  "key8": "5K7KCK2Fo21ay79Xvehjk9JqWtn6GdemQgamDZCS51uPkMJLjj9DbdoRPTNLdsKrmbsPaPpxKSs6T9pNW3vsAK8T",
  "key9": "5iTj8xzxes1XTmMvrRxWrkgAxkTp6dRzU1uq4J2YrWr6JdRRKz74fQM9bimtNGhjQNji1WrXM8AwKE7BKRtAXtL6",
  "key10": "4qV5u6vBteUY3eFeihVmErPNEBxz9jqftgmzunbedjMZep4sLZhBAthgjBBiFadBP9M4sdnGHzUktvFTN1p2YY1m",
  "key11": "57o3viitYsxWBVGMZYenCvEoATR45xqzLr4G4THLQA6uAQ9asXWw66KNpEbboFaWyLsUXseY1f9r7fk7R2gAp33r",
  "key12": "3kLRSAUqmAPxZ9QRL2jD1A1jCkXHQYfTypAbpiNECK87KjQ3KA1wrdwkC1bCZPTJxeNpdQBsLydgPQAkUCVjKc4u",
  "key13": "5W3mNwB4ya1C4L4juKUrNTfufe77pqBW6F5429ohssBtS8xGjuV1F6kNpHHnYaM67hk9NaPoDq7rYkhAcCWGhj69",
  "key14": "4APMfJeyptkn8gjFiZTn4LnqMbbm359LcRkRckdrBqiuhgah2DPMYexwAPke4QdpmJE1pWuCdvaBowAoxG8yD8Eu",
  "key15": "5HHHRdxYmtJZ51ZMjj5XYNe6yxw2uLRCzXZhkuUh8Q8gXofRhdNjKjQ2GEv8EhJZ18tPaNVNfer2UFFDJVewdLWA",
  "key16": "5ecfRo6RWQQbLg79rGecyCUFAAkYuCmCuF31ZxanxTNMdhuMf5fjPiCeHfBF3EwxcUKG8KLmgn73G1juw2zCX8R6",
  "key17": "3YJSGR1GHQZX4AJ6L5Bmyixim7y9hkYN4mxBZtsW3YFwJdrKNgKAL5GPEV6RNSPk8BExhwTzCJSGBZGphnwEKyQw",
  "key18": "4y92dfAyMuNFYQpDJfbUQK1ENgUL2P1V1cid4smWGWo888b4AQw7oeK8K4dnjc87e1APKb2EYzySWBzVEY4Lzh7L",
  "key19": "4bny4yisMv6EEcLE6inB5RyBBuhhk6oXmPgyjx9gzwLqCfEVQy9MbQ1FymDzm3GQhYjXzFmTi3z4ck74qnDsJsV3",
  "key20": "2Jg2aaCqNNVSEx4xZc2LfTWF66aa4MNMXcMBtX6nXGKz64E687yf1q8HrGYeTwjBtnW2nZ9VCX3uTJEYK5iKTKxo",
  "key21": "4r1UUR22WBrgsmALot66bDKQ59RXWgtq3ahAHaRCPzUYqjQM32mFwG42P4NoQka4VoZ1eMuCaKeE31UJYWn9TJs5",
  "key22": "y5tPyMvLbKDa6CZiwCTHsNA8kSFS9Sg4xh7DmZbwL57QUvZ17dCkP9hvDY8Awdncvm9KcHq1U7VA9BtCoiykC3C",
  "key23": "2krx9hmtrdDHYX6nKxR6AGhRHcWgZGoAuwVBHuSBTgYSzgGXb4eHMDSgiv2iUUcRG2o4mHwhGv75U6N4iH6RcPAM",
  "key24": "B5Fax8yEa5qeu6DXRRtLA7Ej3RvG8A8uasB7x9o8uKmGFpxA3MSeRHRFnnsptjVKPDuY2ozj3aHTHrVUCMrLpsT",
  "key25": "3qDuDCQvANS3bPo9UeB4cWeZ6uhQAkksjHNJSsM268ePw8UDqUnh8jRPboWE32eqHqveXsJE4oa8BF7BEPdzjDub",
  "key26": "Vg8MkspNQhSn68qMQHrGCuzaY1gqAkTadLmaUVyh6ri2QqujE9udrWDFMW8fiD5W61kBMupMe7njTWnixiG7jQp",
  "key27": "4MDM56bZ63s4wnQ2Upun97jkS4c4pMpsC48AbxTgqZXU6C8CKeTxaNgfFB6SmPjBvW6RuTZh5vL4VzoTM9JK5zyT",
  "key28": "3bLxNJ4W9yo6GitC7uadbtXuHFmmGiZ1RVkTPZUHSqdyiqR3TY8sCA45wFT7Exm1iwPzJ8AhiRcxbFcreVe9f2Dw",
  "key29": "3o4L9udWs1ANDf51qBUpuRTB6rENXvc9Di123Wf6G8BtWFNWLCQ3Y9TZfqibLwezDzhasZeDFF1xdHGwcC5SYqsv",
  "key30": "2nMn2mSYzBPi8C9hHwBFtTY24MXcFjCh8FLn4zEihvqSscaNMoctwDqde4SjS9QEtFE5p6oFr2eSFmNvqkmo6qNj",
  "key31": "5eKVgKVa6CM5n91wmfyVKan4wrt38wK5dacPHaGJ7HKCRYK3pBG7UswACeJzc5itKhsUfm8kts1phMVx8Q6iMx9o",
  "key32": "3aepTc3hdq7LytGU8eAGSyjfsVpb2d3gtMrtQs8hwW98eybELkGPBhnXr7b1ZXtN6HBtYvFQAysajoRjt8aWQBnd",
  "key33": "L7pA7cQYBtsEy7NdjkszAvmmy4QHtXrdFUMmmqg8srFarp9sqqR9u15QbYK9iiWv1gocVJccM9Q7XQbjjgFVwQf"
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
