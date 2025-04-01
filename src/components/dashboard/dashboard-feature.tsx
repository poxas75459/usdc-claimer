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
    "3qXYHTR1sVPN2y8S4N4nWrTeTnJ1GRfNAmJmpztKy9ZYMqEUbnvEp9KS7UyoWMERXctLmAyppacpHEee3FEAXTNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rs2FAHpZJo2pysJKRd4PEuyeDyMBM3xT4p8kQhzwhrFAdBkJHvCpk6pmHTzpbKeQbLf6ZSBCAHuMFzXRrDDKtgx",
  "key1": "4drgoCd4ZHT8ck5Rexka4puFyfquTWozmxZHRLHgHMWUqJJdhFrUCXeT78ohC2ZegRaKsd3MD6qVAetTVFT3GsRX",
  "key2": "2bt6jnj8ppKZ2UeaL3WYCBk8puNaMC6G7HECRbofRK78fNjV5aHoEwV6SJ3kQqhr54oXFe7ArXE9rZx2jivhv1eP",
  "key3": "35WvjUzpWmpDHHpDADRowr4gfDMFevcKbHQy6e1yEDzioLihS8SyUPL3fj1ZG97QYHAzmz8WTezivKUq3KWC78ui",
  "key4": "5Pmvbgnfp1H7it9XayFkpAxbK5zZRNi8VbTtT8Uuw3TeEHPRtbnEyh66ttq4rq4Br5yiXdYvrCdkdbJTw4WHjBZF",
  "key5": "5vv4QzLcJdkMYWLjYmGKgjp1cL2Rw9UTcmP8Cknet2ni26aAKeKTYCYRUvnPT3CkFnw9Fzrd7hbkCH5qdFRDeh6Q",
  "key6": "56h9iT2LL7tAQ4DQcvmaCVqSe9ZgnQvUXC4dfvGadMxnMZfyj2CnVy9oC2VCAoGEGjcWuF7ar8FRmwrVUwYzPY1D",
  "key7": "THUYhaGav2Lk79xVo87oTPjpmj11kWRgkCvHCMEPMgAfDRzQzVEEkQ1KiyVYR2jUzb1HpkCrdEiYu9j4Xru3v5Q",
  "key8": "5B274spJh1Ei8Ze54NUF38iygBpN61ejuhoVu6gdNwGVhA6e1TVKgEs12aDmBiemunriN9vJRxfB4gS4PYVuDhXD",
  "key9": "3pKc1zky8bpzJ2zgoZM9mD8GmgFPaBTkKBVWwGszVzcR6iwfiS7oLcErFecKDUgkNtSz2GAg3QEYayCMwerhFoCp",
  "key10": "J7NJ7cW8NuXjK5a2qPgezSb5nRYvDoknSxYqfLzmf9vJp1fxaqvkAgWeT3GL6p954oSafDrHPjLZPKqZyhGKmAa",
  "key11": "qDeagKq8782NFN9jhYefmoajyRzZjyFZ6HWrnMqfvqQVJrsEBodVsywhNjNsCFjQGJGxLntwPWBNkLT1oXCtGfn",
  "key12": "2tgWDcyKEkCrkTrTYGHnfkcZgEDfXWqnmBfaWEuveenJF78Kt3HUakrccBDr5gMXwcQmgQG3SRRRcmzBCfn16Azy",
  "key13": "52hr34drwH3BWSLLom7zWQd4enf1qD1rTukZ5bNUsRMoBTNsQwt5YRV9VUHM9QbmkydZhmHg2141BA5Qo9magyi6",
  "key14": "2tpkjLShnnK34ywabnpAXiyfjxaQFdxyKzsHgnAGLp4EXx2aKgp1GTa3zuyGtLmXj65xCVPA7zGb9mHBspRT4rq5",
  "key15": "4oXNkw6MxMz394ApamUoJRjzxGmAVgNyh3JwMwH6DQDqoPjowQSV5GQmaMpA8YtZbmxV59GvDxaTdhKP88uLf1Nt",
  "key16": "26yquyYuDPxRCzeMrWyycEr23X2hNiSENJ6xw2YTivUdtBcTc4sBaT8G3TmhUQNDyze3gz9NpVQGrodTfkhLmuBP",
  "key17": "3dmfsF5KntwUN83b2VkmNxfj2Vg85K5sQLfzvzp2gStkoPzXATSvEM1tWDBLoaXSXjPpfFD2o7D6MQ318c9ooeez",
  "key18": "wyLkQ6MQbX84gsubGZMchVpAS7oqtk1jmgnGjMZQUZXcaDdBqGLmprXH8i3SGoKFfJKMpuDraN7enMUPekBBm6H",
  "key19": "EUEr4K6U5RE45Eo1cJL8VF3ehZdww1Eso7VxbV7tcxUdvcR4FSMrpSh5ew8XLfJYk17755NfmV4qamcTFHHzmiS",
  "key20": "5RwUi1LR2TLyFbTrJNCuM2rJo63SiPxJVbu2GYms6iCsyBVBFSTyVteNRd2gUpktRMeTaYLqR2Ecd7ByZNwhEFsq",
  "key21": "63f5WiBPBCVmVucrm9GDBTewnLE91Pe3thREaYqhp5LMkSJbymvfWsm9ruqJS47E8YYiSaPAaPmXn7aomLyZ4soH",
  "key22": "58hxN7M1XDBorJX8EdCk4Kvh3Kc3aEqTtrcgYectzrtXGRtVcecsstYV75hj6WT8vVmeJg2RW6uVriK6N1e8DtYw",
  "key23": "3g99QPGeyA87Quz5uqtuE2TbucBeNYjTRppPn3PUZPbMAXX4qnw4A5thGwwqBnAnf5ReXPmCYHmsJDmWzvqgborx",
  "key24": "3WxEj8UtTg6zZ9f7PFjvQRnPTbdhbhHyM9bLtwxhzawJB8i6WrPgckaZrRoUtFko5zrDYDGTD7NJA5VUQLPfVgyh",
  "key25": "2A7EuReuP6eY5sLGSkessmgrC3PJ1WHscr5q6bdQzPVv9Ym657eAiuTNp4G26Ff8ad3EmAzKf73f74NZfTQezdmN",
  "key26": "526KRYUVQmHuBM7rN5UWDjimdVcCEDL2Y1xE9GGQENGMa4VpsiBgGBWpbS9g1UPMJYy8opJf9ymKSayVwYHMKF5j",
  "key27": "2rw9oQPtcN5DVFZcEDWcyRZpw4EoM4NUdHdjFNZi35bJgZ8tF9V6REqUvoD5oe9xnNGZyuKKgNWzCFrWfqodqPrn",
  "key28": "CEZVhcmEYHneg5zZssJrb9KNnhyxnq9axX7kGon657h9SUo4H8p2ZAJErbMyntzWwf6xnHiZ99nK8SBjXu7zrk9",
  "key29": "5qFw96ZtbUZdhCHngZyrD9Ho67vJCEciTNMrcPtKRQndKPnXZp8XpWDwH9csNCheE1m3Jky5pgSJ9fy5C5NMfX8s",
  "key30": "3FvxekzEX3cp6ZyfyE928zzetuRTLJ96qVfbJ8mjNsHBD1CaoQEcWQTRYLpXe2aE1qHPrNVaWiNyR2CwgvwknUi5",
  "key31": "4NXh55KY5yFufy6i5LnzAFbpwsVPEgD9uHMvpVscEh7y25H7ikvoiqsooehNNe2VzXSF6gXqryAXHdiPSbyMjPMR",
  "key32": "3nZAm9HivdNFDFf9N6rZ7AEAmgDTomc5jBWB6xf3eaJiibdJhsvXs2dLDBCrEYKySFWRooka7YVmq5oQHatzCiVh",
  "key33": "2FDcwFDVvmFay4LSaeDZdSy3i9MAYSNBJfvXxzE8w3jgoYqS6b4H6CPd2nvThVJVvUFD5nTs1gRXtuvdK21zYa7Z"
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
