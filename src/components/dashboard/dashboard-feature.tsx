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
    "4qES2yj3eSJRwu9uSzcRmetsmhAyrbYJ1fe3Ye6F6c8J2qPLbUbeov9knY8QFs62VPY2KXCBcKHgiLo9GCSQ1kFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fe9c5LN7GEZ2EodPqddqYJLQTXvkL2H4MqN25w24MEtFwCkMG4xbLQFKWjqThDrB8mPt71NRZnJwUVudYpzRYNX",
  "key1": "3R1Wz233kMdfBu4FiCzzogWgFRFez7FtVR2ReWXYm7bPgtHxwjuz2a8ygTxYf6T8LgTphj4LmD7J6aKDCEgUtoJG",
  "key2": "3X2BPCXbPxTHqUmnjReEqNUHhwDmyvhnRavXvaBxEQ3sx9ffWhcndSDkBz96ZJwdpT87XfoK4F24myw9da4z6iCy",
  "key3": "5tFBMsB7eqefqyzf49m3MnmaEBV716hoWBDKrthTJUCKangLMi6XUP7QS5qGiErZveffbp9dvnCh1G1wyJdAXQy3",
  "key4": "3RhPxLx2bDc9oHqvLDWuLo9QafMbR1xyiRap2izg9hmAkahkyjBEwtHG81AawoPvTr7HFHP5USr27cS22g9t5Bbq",
  "key5": "5tS8E3zfPJ3t7LEXZebybnebVTHpUTz42Vo5CR1yeJfdxP3AfyzaUxkduLf6yn3jW3yyNdF8L5UQzGgdDmM1Bqh5",
  "key6": "RhSJz7pEQiunVjPohiSpZrrqBipmoGzawEQYs7fnUqe5SG1g3yxWPXNqZFZnQKEgvgqNYJJVaWyRtTSm5ncExv6",
  "key7": "5X6Kqymx7KXdCCcULBSnhJZojyq8ZTzdDzR8y9ELNcaG4SYdNE1gw7yQm5VtVku3c7UnbG7rk6Spgnc978jSS21p",
  "key8": "PnbuHpCZfRmFMfiKGmC1bF5fidpJaEwL3ycU2wcEne7zDw91AxiX1zUds4kCUNFrXTdHnEd9rynRBixSpecnxow",
  "key9": "6EyYAzdJDkygYbqeNoWsVSbi8aspiR4ggQtL1nrH7PY1zMcVZFHGD7XGUrRAsGfAXnPcUQu2cX7YpfMY1wjFBeN",
  "key10": "2RV1u3b8Nz8La2Se7iHypAwdgeWKQat8wydiVFzBLBns6BwxpfLoCugAZPzFsmvjRDJPfJ1CNBhLJq9vpkXeoA7j",
  "key11": "xCxF9uh8W1Hc8uhfvvHmAx4fLp8kgeTD82uqDAMegkrXBhjg7hw81h2S9b3t8S2RxFwaeoBHcVX2bJJtv6dcoeR",
  "key12": "2g5eoRUMCatCeTS53i1f5rbiAWWskE4dDtNtiL8tshtnfA4A3xAo9SA3vWUrygSG9FVf1Jp5BxecaonfV1GtH5eT",
  "key13": "3B1XUEpWaA1ZQLrnnt72gy1TD924Swihh9GyyCtk2yC5gx435CNdqHdvvMzQn4ruGWiG1rUVxpRVVrB5RkLwQCP8",
  "key14": "39XoZ3x8uJbyHusfkBaHHvmf6VW7BmgaBQAy5fS7YoQSs6kuX55XxdaQPRTVSp2rzeeUWK53xvBU9FyDBLqpzhA6",
  "key15": "53zHCSvKeBEg5e1s1Xqk7tBZqTwf133MTrnGaGnmLK6JJG6TRqKcTC8VyPe8RvHSFVG5XHnJ4jrKQQGyTvmpN8Fy",
  "key16": "2czipUnUqMCqLJCdgRMsgDYbv5kaKtn75UcHcMfU7uZBYnKqpY5JNbF5jPqQY8tzkjG6acHYs74XvE1L6iAm3d1m",
  "key17": "2WmSjS6WtCYbTNBuz4EawtHC7H495mJNCXwfFjSpdXM7GrC1ZWGMkNdrj8b7HDY5evdwdcmVoBxTRA85HkHfScKn",
  "key18": "jma3xJ9SuokMgKQcPfy4wc1hdR4xizrPHWdoepDZoWPVb51ctXYKU8irhzpf3DoBsztC3Tt4x4LFWcHM3EW5Z4u",
  "key19": "67gSV28koZA575HiNwujRdipkygKBND6HpAcUbWtr2VifVhFmFjCs38C6UmojC8bzrEiB91RgCuctpSJqdcHgxgc",
  "key20": "4KHAzPgr7h1AEXw3yW39R2hj9oRkJYRVKCYwDsLAZxtrC8cC74tQsp29yievpBHygU7Wu2ngsvNgAP7Z5Xakg3Xu",
  "key21": "2dXrB9GQqUCjvQDxrkSgnJs4chQiEbAPwskQn2eskrW2SuWmpPPxq4EJYnELqLBQNh9rTcctdje9wiwyZedqHGhb",
  "key22": "399rzsdRWo97owWxzhiiscYBUUP6yj1JXsvg1W3YigbtqJEQsVHhZazM5PEgxHVXeZNBKmdnsDZ7sbvnocFRv58W",
  "key23": "2TrnurSzvoHds8z1JAz12NMaDufjR1cGo2tiCzKcN7VVEzHJL4cd8CAQtmqo2DiDt8pAZ8T9UbFdjE8WZDfDrACm",
  "key24": "2ux2YQzdoZmsns5wHFdQ7afAWSfNRMjCJEnVAeAVve7UGKTBpUNV4BDYGY8WfAHKjodXGWh323WKoo4vqx8FwdfZ",
  "key25": "4geGjRiC1wTNED4CErBEQ51aoHRAPT4vdJpUwstQ1K3doKkLGujzcTxKkdxJr4bdhsLt5UcRdtUuZpUaVVrLwr8T",
  "key26": "2j31idBeEa4WaWcM7Axxcb83jXHCCqibSzxkgCvNSHjw9A7tB4c3eJFusUiurZpsowufbWwRT7tjQAFzGqH4vH1c",
  "key27": "39taeGGXE2Fa8A2sCFUgjBTtes5nZ26Vk2erEu27zQt3YqXeEDMBEuGNuVizdctU5ExroAhHQoWRZZFiVQeYGSuR",
  "key28": "3kgWxaNkH9UepTRkn1gxmyVPt3N9P5WwJ14WyoLMxYHsbPSW5QYgqsDMf7Hbw7buLkBWhunCLi8DGh78AdWynCLN",
  "key29": "39a7kUMyJS6xs5aaH3wChyx7TfRfH9CFNScfRBiWDBf5JnCnFvF5FpDrGEHwGg1VGHKTfQQpJ5aaQqbRY9DYeRBZ",
  "key30": "4MX1DVy9PeGxn9rwaiNehyC9CemfGxDdyWDMtytySAckeVrY6jCoe459KXPdWAuh5iHhEVDst4DMnRNwcexz9Lxc",
  "key31": "58f9Ffu5zGxUChUnLzFziFrijjG6PpVrsZfd33Ch3oRBMnf2XS9XZHEPgFgVrkSkvoFVAxT9tnna4iGRD33a5B9r",
  "key32": "rgPrgnojsVbixuU9wsw4oip8PEiACMhrNmTjGemWdGnKLrWSpDxssQ7gFh1uqSrncyEaYvc5ghLgiLgknPaGkKW",
  "key33": "6dTp6Dgy8MkJ6EPvcdd4HQuk4WQ7i3dWx28FWU4q4ytgrQs6wJAmVxSpCFUkxqNv6cZcd3NyYARUkHMWrVGCZjr",
  "key34": "45q91whbPNhZQSjnXQPn9EUS2KEGnspGZhP5VwweknTH3WpiUS8f3uUPY2nvBWVSy6Zt1aghLGKcy5tokJBCUWWv",
  "key35": "2LeYJy2wXGf2j9yLzkQLR3Bi6VnJeBqF3rqAjFs8ocY2FDCwxY6qnNttidsqh4gYN3dHKF3bHzLAAQYYrPS2wCcY",
  "key36": "3xs2fqhWqefekc3Gs9SXCFrqeU31sWmhdRyEQyw1C4NmquDR2pNPEzs8yesP4h2qgRuAJjfHdwDZUS69Li75W2so",
  "key37": "4CWfg4MWN7m8eLqqtGe678nXVRoGxfi9NnsGquwP3LUMDRGw1LRAdyXnzrZxZmyuS61BFgW2KwLVJVXfqBN9BC3X"
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
