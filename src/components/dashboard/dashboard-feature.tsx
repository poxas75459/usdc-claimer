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
    "4pcmoexJHoSPpp1tF1DNj6kpb3PZWtS7A2LQr9aCcnhN6oQYNJq693xGzd74hspo1VuTnTCLH6mLL67uVhhojWzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FmNv95D6jHn1EA3D3Q3p7MXTh3gQSmjmtutZHh5aU7q7a6UhzpJ54DcSaSsKgnARXLwkdAE1kv5tmruhbvzbQPT",
  "key1": "5MfGkRtF3G49pDJWMFmBoSpjeJiidLYRpgHoRJsH2zmi5iicSdGqHzVVXAa3hivwhxyWn8ch655J8h9ayNjJEgAn",
  "key2": "2uxJQF3pTXKuBWF1YAkb2iZ5KfC13s1vcdycvkRsQoeThW1PEJ7MrgBn1jdWYk5vkTig621WXiVWoCP1paizSukD",
  "key3": "2tsDPAzpnigtqFUatHuN66PLKv7L4QN9n3DAAQv19VDZVGoQZTB2zZDppknZa7Ui7kiRJwWhRtqZSN8rnshLX69S",
  "key4": "2cUxFWAoErqz2JV994gnK6EQRkjzowcpwdSbiD7issRiW9esxYm8P2LHoehZEdjKvV2NM1guELMzf8WFAYG6b7gy",
  "key5": "F7tR1HShyrqw7937cpYp6oGdZjmw9mzJF6Nf8oGBz99mn6Rq9sNwNLeH4HZLFV3BFzhNnLXeDAYLy4E4BPNKiVH",
  "key6": "2rDpwq9So3ff8Sb1NSxpyVeX5DRs4NRUqVJgr18h5nTkP323JFvftR2QGuy7FrqsK3J4dZJdTv5wzXEGzpaVtvkr",
  "key7": "4zhL9tfoxR3FTth691K1mbkfZYjJcnm3rhvd9EhCtGS4uxA4riiGNfa5XNhYJ3DXqYGHeUAFnh1DThcoLtaXZEJ3",
  "key8": "5xbZS697h1u7Wrt2hd59M6vLk9MDix8YcAQhpnHovRZXri24FiKCBGgDEPjLWiDkiWaxTvm91hMrdPkSMUA8cYjM",
  "key9": "3ccug1NpdJJvHGbJ1nT4tDKPn9y8RcydWNr1ZhVA7VUuRHaBUKYUChzSAPkcWCbJ6ko6NocN4gmBNtHPZCmh6AYo",
  "key10": "4NzJaEvCcBfYpVQTwXFmBRvyN3jbQWFCJwyBu2sA3UaqQFMM7wWt88e6fQKRFGkRwwcdiK7oGSXWgSbvJp6HCvZA",
  "key11": "3foNjHd5B8VGcsTLfmzYBL5w5YAFxCP8s56Gj13UR6hJLouoUws2avnnmjYmbQfTYsmseBpQDZKNhrpkz8k31jzX",
  "key12": "SRcXkoEbFxp57bXycJfKhi44AinMFmSGQm9JgKsNMm92beSG1BR2VAgoKa65PScXtujTFGVLyXWgGN3U8byBV3x",
  "key13": "gBSZBjbUSFW4wSSabzjtyqJyrrZwXG8216sKZVRmtTZ76qZDcr4ekeAx5hb1PzE394gvf4arShaoZLbe7rYvZ4U",
  "key14": "4zbKHnpHZHexgYFNFodQMUZpyAp7NA6ZJQ7MWxaKChxTqLNuGipNgnyk8A3SbxM7tDeBWDwrZEeFPDM33Wr4MwD2",
  "key15": "mWDLhoMYuVWZaN6CQkjB3sQaYwqsD87RCaEUbDYmo3F8C6iAtx17XNVQH9zTzSJQg6C5Fv9bkJzpeKyLcdaikaU",
  "key16": "xjNcEyHcN43KxXYvQ3qarSmpubRi5SgD2gUKLyf4couP8V6mZ1FspneijxVAMLpwyCj7nyzzZ6FaNdEiJQHfxYT",
  "key17": "3qFyc9Wq7vzj2hANbFD8HzXtf2Bp3bo59Uf3WGpmBLyNCCdgbZvVhSZ1EPEtdjLKNvSLtgLq3oSQyaMCCBe3uzgx",
  "key18": "4YfZbZoQDRGQCS5Bng89cUndkuUJpKAnmukAkHCkHBxGgAkYgepDxQegL1GhJZwZNJWwDtsFZ5URChGUsbgrpvth",
  "key19": "5JpXyyzdsy13tk2gszQCD9ZMzeWNdzZCQsrFBKVQWo8L4ageKk2rcatDnkdYPG1EaanzMVcK8VMPW9o7WQJ8empF",
  "key20": "3QThF4Pj86qFmD9CHmz9oB35fi3J1JuhXugoEqyanNcBTunoeh6dF32cFxMoQZEyGsrUcitwf7o1iKts2VSZYiBy",
  "key21": "USSqHZGPxq8haF8FafBeDTXA6UWbecZCbdCU8Z6B5gaTvU9F296aPAPY9jjUfsvQ78sWkfUe7oQwPnrYAo4eqfq",
  "key22": "1e4DzqrTDURroht5r4r6Dqr1A9SxVdt1UxEZHSfjYZm1WxAD8Hm9uNWpmShmcLfDjKVodNzViQWSqcCYWKYLNZ9",
  "key23": "63CMRqs4w5Y28UbTASJ2b96maPrTgLjYDziAq9roJsdc1iZLmiucrSRqYVZXv8PQgBUtHGna1MoLpxgaykJbMcF8",
  "key24": "4wdmeFGUm7PNcYSeSuW5cmSkbfheSXrco2cxx62AUPVAuJzgxiWDvAeFc4QRgirbSbxLqsi7xPYEStiZbtFmh3ZB",
  "key25": "4QtwycAWKzhPviUhSWBTkQEPPgDKLj7AJNdpPeJ8i2EAgq7MSK5wFjCxURrxWnKgBXHNWZ6mzGsVWwqzjaxT6HVk",
  "key26": "3EUVqk6k7VkfNoaPRXgCG3sreS1v9e3rWHqwnGPYN2R3WYkpNcJsS4EqbKT3YNrYiJeK3C158154fcAopPRdVZAP"
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
