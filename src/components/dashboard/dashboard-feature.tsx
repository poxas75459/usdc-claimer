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
    "5wLstCaysdodQBE8QUCmsyfEEx6zVmwhrVnDnoUUDmF8HpkUNvTjWHN9HEdswGYRuUgyM21HtuYV3oiUdsbfKzWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NWkRfvGiGxc7gHprZFiUBqUw1c261AQ4LYeeCwQu4V4euCAsbrqqfE4W9gWmVSkP3hYypxQdQzRQKRvPFN5rhqN",
  "key1": "33GJ1oLDgTyCemT7q4Jc2Fr7hqx94mhJx5rvcKR2aruta8jbHchXhp34TNwBKgXF7vC7xvLZmwn1PPBG6eCRZfMk",
  "key2": "24jJixtPE68xmDf5Vc5JwLq6NAtyGYLzxMMojwxogQjthkxDkw7S11EWgGDjhy2QHLpXWSBhsXGzKLCWQi4KkkpV",
  "key3": "3Nn3eZcR2hC9LQThJMjTuTqduLmPPgMEbCkH4sbZgQMk1kNmhVCnqQbnMA8UMD5HSN38iHhnwhiAYoHKxozRTWCA",
  "key4": "4nM49evHAEgqGDpHMWh6ArMg8f5mhb7difwe35VhNFzoRPZWc8bPhHmT5U97dNgQLSmpXCd5SWxwEy7w2hD1iucS",
  "key5": "3L5zNvw33tXpp3EAqNaunxAWR1Sbr3VtEBMPNTAUEs7424Z6uJ1YPHHZ24mxmrpYiG74puV7WxtA9eBykyfDYKX4",
  "key6": "41TN8XerPUaLg18xGHqh3wtS5wva1mMD7dbYT1b455K8A98mCpCo1mpaXKxvfqgrvkB1qwAqjpMkaVSRcPBwuNMh",
  "key7": "a1AvGoFgc9TPXso8odTXQiDJmgh2S4ZdFoBh2Q4MywwUS6rMejMEPVv9Ba3jxQM8zbUcUdWjnGs37oBUjtUsAmd",
  "key8": "ZmS3kbf25jwYZLPASEs3GVcoEFSMgP8ZE6sheHYczokukiqAtf2X6bQbpVkSZ5qfLGVq7Ht6md6zAeCvsbnusBg",
  "key9": "2mzAWX3etAbNZSa1uy6LfC52EjAy1bf9zbcR3aXre2YbmfxY8GphvuoVMUmpYts1qkedfDgmVmj85eupGHy76Ptu",
  "key10": "5B3fCjoNyjbcYu4PVaJorRkxyDBBwTcMSduxx6STFdNsA9yuzGT3pwpSiTGZCnUwmxB585rJV9GvapsHDQMq4fvw",
  "key11": "2dXr3rErSo8pKN45p3iPdA81XTLiYnsAYf5yvNtPGNXKwTLGKgGP3ndBRqtCbK6GjASgwwsLbgkJnU7FMDouiw9H",
  "key12": "2WPqJVpW9GodQA7SK8ZgSH69LH29FaV8wKi1CXiSLa42AzRrqZ9qF6usudq5HQymMWqZALmSBuGmhBUk8noV75cS",
  "key13": "325wNua86YHp3pi8i3Cg459fKv2GJyzf9ecs8XpgXshg4zG9fT6jLix526MWqByojZTNzTr9LQNetWjcDXKH9ggC",
  "key14": "5bgtpyYMSRSdkFNtotbUsZ2gQW4e9zcgnaW1ePiYf79DTJgh7X6J2gLtVq4ASV5zD597QMZKMaDG4CVWkPqyyzDV",
  "key15": "4MdHcs4KPRiGSS7qQzB1ibXHtCLnEQxCKtypan1tzQnx7RMgqHW5iQYGAWN4BGFs1zFP8P2xFSnWGZSJiCNMqmme",
  "key16": "5JDPZBgb9W7cvgoNuhaZRM22yUu8op3p3iGeH1q9HzLpctDTTmrXhuvDbChZmUh2N3jX8RgMvAFaZNP1pYvSbF2U",
  "key17": "4hMqgMAJWL2C2rVCzVxyqYDDgtPz3THyXHnqghtU3wLcFxbZvpTNKctTXdUksUjcMnqJc5AFbpmBKYrtfNz3ubR6",
  "key18": "3BxjMavVskDpyAtGr9BBUbh1YWKyZe9Tc74jCJSH1YKbd4Nvsu6SLjsBVVrijgKcTbQ15RQZpAjqhzhvmTUH3c9i",
  "key19": "3KCenjDqJGFCJd6HotuY6Ska6rQNXqY12GwajdqdwjHBAw9tMh5oWZGmGQLuz7x5zb8z2HcPahZY62hQX56vwGpg",
  "key20": "3HnjQj27gieocspKwjtwsge9w2PWLf7BJmDubos5fq7M3bygfsmUuCyxcVer9nweP9vnpWHyfSkAWkYyPnmrFG68",
  "key21": "3Vrsd4QmuiPc84kEHHSdw7ASoMrWtn2bFNJN3ZnJBJ1ri9ADXL9Xaz3xTXrQNY5BZi7VZVf9uPvE2niR3zqfEgnJ",
  "key22": "3ojRmQ2mQjjn5UujShLwS3expJP55ViP2UEo4caMYUTgx7ncDhW2ZE3gLmbmA22CusLx6yZGEkzXve1mW74GtNdb",
  "key23": "2oW4Chx34qbU8RK321Vp4PtoF6izS2aqxHtFXxk9VX44wWGZsQDEfBwYFaymTYxqa1HKrR6k4TrU8tp5TewyXavN",
  "key24": "5AitzRfKMgXGR4xeWtGmxGStE8RepWdXg1u6ayF3gUQSoiz6UkvBKUZ9M3VtApwXSw8DD5tEoMRVGn6FRZhWYXgc",
  "key25": "3BXJH9PMft6gZ3VXJvtLDy5mrKei66CWc3MkPRHraGMBvKQYYs8HHSF7MQrargTNCVxFytgmSKMwXZj1vnL558mo",
  "key26": "4m87HuBdqhpvUNLptyjubBYJpCdFNBt3S2NEzyxKMUgp3Zb56eR7Yw9NKeNUHJbqS4SZ4trs8ie4zjdf2a96rLJ1",
  "key27": "3o8TPwiTvu2xcgZR1MkeTEpQnuoASLzE1fz78N5xBS4JBqgpqNmwnULfkaLBcxM2rE8tLpeHatdUXSdpLbLeV3PA",
  "key28": "3HoMKXW6WTwt2trtxsmNfgmaHNPjssr9MUUKSu6bqRd84yVWRofx3ifsm21QLy5fSNFtrd6YY4gtMju1w6tZb5wA",
  "key29": "2yayygWuHzM1AQ1em1i63w5fSpt8HQYvRepgRK516gxqnZ1ogk336NbBo2v2geZWQYMygf81cQgnbFsVECgG7vco",
  "key30": "5MMWKk9ZzRiV56MHyfNszhzwHi3cctbA6xujDBFirLBWu3oV83Az1U7WftawLkiGbZBK4vokhD7wh7sTHK6GrueH",
  "key31": "h5T88Xi8XiQpepFP9S46rtd4C8NEdeayKXtj4jo12SVzkceyaRmJBKNeMFdwdgeTFQAkCTy283xgRsfBCWwmgUS"
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
