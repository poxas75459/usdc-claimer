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
    "3WqKmcjZGvxzJ36sTqf1PaG8dqZ8DZCzUz811P1BpmEDkZV21ZPxJ2zAC4ngj2jHXv7xYaDYRBbmXsiNXqR4aPhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nhG5houXVahpvaUPY77hGWNSSrFyCfNnwgcw21ix47AffTC1FPMQqktJYSTgQMD2iuc5bAt4DwrtA3XpJqJwiZd",
  "key1": "4oHSZ1okEZM7d9eoify9siTBxuF3EUc31a1QaySbtdp9Ym1hZUtfbZvoYDzqTrTPr7XfF1zb3raL92PzfcD5SpEW",
  "key2": "4zZJn2xbuyNvZ5SG5ntgxMo65DnPHCCK55AkXNbZpSHjiP6ZFcvSuVU7TKHsiCyvHU2XBkDEbuPRNRxqhueVJ9mc",
  "key3": "Tubtp9VpCt6xg22k2PwjFnC5GB4zLfy3LnVDfm54HpQuVtdCBBpzxDTJH7G3EL3JX8ebZ9qUqameQUQb4NCw8kq",
  "key4": "3VFWAkagpHsq2UNTa81QKxqQge6FevtA35t94Cmsa4LQNAt8bcFU8hzmgpiGQ42oyRfApx4bnGfGcsq9EqmQZ4xP",
  "key5": "5SefypKjcqHBh1PutVpwSq3tGdpQWd3h9UkvJ1iig8itiNAJyPKdRXPbdnHyAUV3NzkTDdnjhDhjGcUso4fHSYzC",
  "key6": "5KZ6sb4TjZyhJBX14rrTEw1PxxZDxEkP8t91Ybi75FZgKc3warJaSqZbqKCQk9DeBvrk66hsWyEwzuTvzEQz9cS6",
  "key7": "5isyuYshbHhrezB9fFAPWU2i7taKegdoGWhYCRPFnYnYzcLLrmFmGSKsMAe6JuRp1FzC9XdMpreNjDzP24NrvA8S",
  "key8": "Cp5n1heXpMMQkGAvpGpXhsK7tHwZMhSrGeGY8f61WBM5rJ15saj8Y3QxKWKSfLxn5gksorHb8S8tYRcHoeFMP2m",
  "key9": "5KnXWZXEQAs3hEu9ELA6eBYqKdzCeHyXkPeSN4UJxJa9Xbxf85cBCbb59vKDUXUxtZALrHk7nQJbnnRWxaHcpq12",
  "key10": "4KiqMik3dU2C7vM7BtpS5zRzYdUiDmdxMYczG7s7xmnuhK6dGn1bCfR9nf4o4oDDDruajVBW9TLUNXmHMaHo7EYL",
  "key11": "5znmRrHcxKPHzFhdtVa9FyNd6bwwR3epuDk1NVSadXGsSyn5EMzrnJbGyvaUzHpf3Rdm88nRh3PDdMwsTDjXaR7c",
  "key12": "2FYkZxfTRbjEhSQnNFenNjXjMuUYeqV5XFGip3zcyqhfZqWVHjC8HQDRjYYVj5bqM14Q6nHGHfW3Ysry6Ajn3tvf",
  "key13": "1z4fcwegYFwtmRxMoKQBTExVbcrWvbqszQzJExBTzEopz2tjXgA4k9KVZTFU59fRJzTprZxEXmcXPup9aXDLBt6",
  "key14": "5PYDa8ojw1vCHBBHdTinJVdgRkU4gZh2Jn7GRBmT9xnVErmPVnp7BcqmMAvUUkRiksHRQkKxxawxeSUGsSPhxNtZ",
  "key15": "F452UddPm3cSkY2LkLvBzCXQjNdt69qJF5Sj6oPHi1SQ4jhUXfJvCKDeNDcV1WAJ4V1FWJ1cu2gRLeuWkMMYzdj",
  "key16": "4GnKqYkEJ6rzEQ3bkk85GeMCyK4kza1Ky9NmDNKWew72nvHLDzYs7ihXTFmp6haEGHBqU4NKU9BrcZzu5FY7qAe5",
  "key17": "4ac8XdGBYLqGRotu96v4fiZ81FjkjUm4Njr9t46tQwvcSnbFVxqH4JhFZDK5vCqkwG22k95LCZ3iaBXh6WkxEGrT",
  "key18": "2VU1dgP9RPPBdzKWwH5dcX44Pou8mTeYUFbP2ts84WsG8PXaqiBKY3JVJuqKfVU7MpXLVhHRFz73rkusKkMKDfQc",
  "key19": "57wow9V7m5iHRaAptCaPqvLFaJpfLrLZ2Zg6489iXvZ6b9yQHs5Mw8AhEGxaJGCNzadVPastJno4WJ8gD7D1hnWQ",
  "key20": "gmaR5GrK8Z4KeNSFF6BrsLSczTtKVLE4UsbsJju4dZ3r1Tyi3c5NYDm7k6HTKRn381PXFyWXxZqaLgnYCBdG1dk",
  "key21": "jAVU7mH4vUCBzSK8dJsg2MBwqkzEnAB5b5p3ekKKgeVKW7UzSTSrxsRWT5nHo5QqnMzTgTV46nqj1jFUqo8KcMV",
  "key22": "3fqGZC5nxtxRxtJTLt8jzUaErV4CQswY9Nr8bZAx8N8ibQzWpdxYwpZ5ozdBrnpqFpgc5YrctExuv57ovxHXRLJN",
  "key23": "2Fc8W3jzzSiMyG4LPJNS4zmP46KQ9sSyPRPehfbPN6JpdYnQA28p6kpxSrRuLGc9rpEiVbFXy7YDoh1vmk9ULoKe",
  "key24": "5dnw6bSBoeT7D5s7J39G9q2uFsZjiRCcKA8JwHZWds7wkhrvP8KkpatfuvzCrKeZBvEiEADdDpNV9D1sRsa1AaGm",
  "key25": "2dL2UpbffJw4e4nBoGqttpPwoVQEjYoGK2UiVz33MB5z7FN4CMVeGZRDzSvcefmYHJG1mh3AP9Vc9wRiFwgbJj1",
  "key26": "232pLdmCVsmPaLQSVaksQQPrHMSX6LPjgmng5cAe6NmaZKkADGV7VvbNAbJw33pwiqyzQdFpuJdj6UnSV3h6HQqi",
  "key27": "2CT2WLCT7omMdcDqApwTrjGcs8CPLn9NF7YtNsQk6hftE7qBaUtDRSzMwEP6Dkd1DogRkfDbqjiZp18wCyuygAT6",
  "key28": "2oSheDGzjKuyr3W17xMSXWmtsVczzwgZM5iN4cezWpRcfDQbH3qzUDLRgdmAfQsVuXzBukHVrP3bbN3kqkZP3DBP",
  "key29": "4nAd1EXPJhWsisfrC5jEycYFMZTc4Ec364bmTiax5eJEreJpL4cxu7EQWmNtX7jVhzgxZQ6toLyPw33bvvMcBQKF"
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
