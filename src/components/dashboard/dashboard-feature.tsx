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
    "cv7H6oHjKWKrrM5xq4zAGBymEeApW23QBGYRoUUDpCrUvE3quqxZpcEZS2yEqHeHwkgfVCVzjWeUaTRKK4i8ZPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "659dxatzqb93cxCHgkGmg7tGvwaTegqMUpDwFFzMEs5AySwx3ytD1sq578fy2XsTpfujFLn64h3YSsG6amM1FMM9",
  "key1": "66RvWRfboBMq4cin1dKnhq4autS3psnypBA1wvLoXnVfrKcyDjcVnjUt9HA9ma2Thr6Q7WYVFsLPZPdpdiumCbyG",
  "key2": "2mFXBVLN4fGjsjAge9PfoFbFD9zQXQPrgT2en5D2aBy1DCLskBKbqRgoGfgtHNSsTvZ2fcN9TgdsziNwbtyUGjA5",
  "key3": "4EVQcbLUDbEqQweB5QXbpyy1SRKqGdVjJvdjhRwetExQBDdCeXShS2KY8ar5fxaksySXaYQMri96koe8mmSkVsEN",
  "key4": "t6zG72XdC18cfXQFiPeFjfiCMScWvcHDGnoa3BBZ9fsBXYNBMWQNfvUjdVDfFRWzwjGDiYgGSJWZrCNootiMcaA",
  "key5": "5vGQ3PX343pEzqNbqcfa8nkt1Rzx4vCfp5KicmtPESEShSjKjf1A7GPozUV4WxZjACwu1JzVj6UyTuGmdjcpFmjx",
  "key6": "48yc815nPoge4Je5pdTJD6rv5SZa4ucGMssWm41zqwMJ5d9uRsJPpXWrP3bFbtFAQbgaYDjksarm6p1r9ZKxJo78",
  "key7": "4kM5FdaUyL1abfTHhgtzh8KEQV2SbnbJFpv2L9h4qBzxTU3GsRxQdZXCxoNYp6BEuMTf6VwFve421wK8u7rLZmEd",
  "key8": "5jLUancerXwWf45XM43nEkXB5NGiHeb3pDxnbXnyTCJjDu5NbUTAkTD35qFzrGmVqBcXS1FqVUMjAqY27TiUE8HN",
  "key9": "MfHm1E22G8jqYoXCrTTiFjCd6jmnSqzGytQxtXHnLqj1oqAfHru95eSNZvJjVyH15FQchU6wkRFjBd2Rs2nkrmF",
  "key10": "5mTJoHuqFeQLfEBscUSTfQ78HRw7rdpfsKU96nPpW41j7fRzaS4gyzaDj96t8rjSxa4bkf9zE8Av6oMhQZNu6ygj",
  "key11": "4nu4yHYtfF2TN2ZoaufgVWTvrBe8Qy9VtJz79s5QLpDtPqEKAinRKjyKNCYeAT93sB6nEHMM65A62siW2zWAmHTU",
  "key12": "2adcHh3VwRQaXpG4JvzfCcXxTihkgEug2LamGNGsMAP6Pf7t39oXkyi5bMz4eEGHFiWkLirwR9AqWCREWzwaHhnW",
  "key13": "5RywnF32WtcFahH16Uc75ZU68uxuP6Vr5dMrY8ePfYVFhpp8JdhNbAeKtV3Jw26FN22ihD5NAahmq9XzxxXDNz3m",
  "key14": "2QSp9QuPFJrziqzWEfypAPpM77bhhv7qDo3CF2yR1YEmQiGhmutEzTUBuHkuE9WeGCrHqPFnURyRDeXDULo8pWgn",
  "key15": "4Fry3VZBs2kSHTZKNpFBd8JyT2ZeUAjxk41tFUHcNLarLk2CX6BPp6tXTqEM1SmGtQCEEpMr8U4TFivQQQx6m8aq",
  "key16": "5fRsZy4XeoThfYMFfZopkX34NMwae7LCwue1uDSmkq16wZBNcx5pM4iFw9FExC1k9ByXQMLzvEKXXej1fksghNi3",
  "key17": "XQ5PfDPZtAaQU8kip2r8t2cbRyLj2VbZN4rFZ2ZJpTiWV9ZeWYZtaWZkqUWF449UbcenujNfHV6KDysytEPB2eN",
  "key18": "4dW9Gw5ejVh1kQEz62XLc2yyzsymWQvn6dw326r4tAf1sJeND7mWvLktuRCgea7u7K3JXVQMG5JjcHzYgthCbyA2",
  "key19": "4biA8EmcD9eLBfeVPBqebkhLQbroiBPJ62aMxtP557S1w9apzVaGPErnt6G1QBE7mT6uaHaX3d8bpmAvz31geQPH",
  "key20": "m9pvohrKa9ovXnVcRfaNVnSvpuyB6L3XbZUUsWbNawBuGiF3ZFwNNsAfL6sP8bJ2cG7hNnuTWnEerJ2jj5BQUq8",
  "key21": "226Xt3ZZGBgfAZCUmu3133PE8oUTFJMdSqxvLnkzjySYZFcuiCYSz4WkNGDNw32qCHQK3Av2LG3KbshjMmYsKsPv",
  "key22": "5qvSrehGfdKWvX9UJ6CB6AAmFsSbDgkVRUjtvJuWKCyjGguCPM37rXF8qYitg2UBhcbxsqquJkaRiEihyV9AeL9C",
  "key23": "5SnNkcJDCPBTJRPR5CxaHTKg996DvrR8TTox1Jcrtiy1XxktxstvwKBP7wteKRByYzuGHzYJ6kxLYH3XCThxiLAu",
  "key24": "2AY3vDXCf3mQKtd36jnkgdv4Az5U2EdBKDYLQQ1R4Q4bKrfyPFsPqXmfXKUZ6y7fHmZ9RHJnoE2mfP6Loq8mVEBc",
  "key25": "3Z7HAiAKzfGqgiC3FpYKNy9KnUJr1vVRkekWMNGNuXLrVGgzuieksp4WXWmYGR2MXjYh9yaRTUUSTsHKEXuBxWym",
  "key26": "3dfATVFmvyRbEnisGVBtYgnfWFx8Sg8GZDmsLmiURev72Kvs9CezuQEzCFp6eR4XLaGS7Ytdwe52TAgH6ZgLJR3k"
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
