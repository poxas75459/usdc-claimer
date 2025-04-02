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
    "uKWHQuvL3AM7gjbLHJh39NNSJz1ynSu5CWqAdf8qJLNQBaSj9vdVor36BiqoPdpovzYtWFbkfekwnpa6o8Nwhpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c4NkvMnDMg1wiuWRSYrEECatjQ6o2BYJukC36ypttywQf5a9sUztcS8Nett4HiiDZqUZcuHCpSB8NQ7NzkV1wYJ",
  "key1": "3KCQuWHY2fM6VSgStkYjBbPxydjMgRagZCQZEXNCBhJEjzMciztCdc9ssL1btGt339etphSCwKSk5NxEzhgNWoPM",
  "key2": "4Pxh4be261m12u2549bXe1UZbZuc1WHs7V35beuf4ph3hGUKzRvuPfRSgxD1rSRkGFzEHXNaLPoLQxs33TJYnL7V",
  "key3": "2YNEWgdCz3oUjQij14eSBSPKZA89wY2KZ3E7gyaCjfm5nDHaw3kr7xswVbg6mQyKk34VNwQ28CQtAP8ZXgoV9RNm",
  "key4": "4y5SCknBhsSpY7SETssGAjz2MmfscihekCd2DpLp47BFqLMK2NTYNNnUgPRSkEwunT2d4TEgmcj1iqf3uGf5vMCU",
  "key5": "2E1UizXbdPSQqqLcpfhBfRkm8keJGvRA4n6W2CF82vLRA6ep9KQWmgsJhLotat3rdVVhqVdy27LXK3UneW5TMcDB",
  "key6": "4mpEfWUMhihtwsKD6tETh9ipupnUQ8cTjuGz7J1mfb7e1jvG7gZ9nAFmfKSHR7AzHvYB5RfoW6hJLLzmdeWUgJNC",
  "key7": "2TMX4U7cZ5Q7k4TzCYMBk1SMj21FHsfmxWFBmt8ugtRxMxkXWYx1ystGRwCwbdftnj1116pyzGhyVfGGnMwPUazu",
  "key8": "3uYnX9NNWVem71EuudcEMaQGxLxGERmsn2tqF95JQwLapKbrSsK4TrByzJghQoTADEo38Ux9LmMswF5yP8mcErxu",
  "key9": "B91QVVs5pqdafWo1gaXaK1sfhQSSsCWS549z7vVeHTjzYpG6E8ZUzjMeZvUgKiAQ6fnkVHeUbZRBiCmctXDfPJY",
  "key10": "3jhhzCJ8gCwBJpNvSVoFQXF7GFe1hP4jCohkeafL8StxM1DVf7FhTP5NuYe5zFPPKUh4BGb6bcXCQUWNqZWmfpnB",
  "key11": "QrJtsZUFAF39KYo2cSo9Fy3LcHxmJ8zdyUfB6LHDHwWDVdc8Gcv7vsZKcYMYMjFPZtJFiTe898MdDdiC9KzBZ67",
  "key12": "2yWGNhU2eWPdmW4krPWD97Rv6AA2AmA52i1DGBDZFZkRYqZZm1EYHDBFu2b1zzqdVdzwwt5LKWUqa33WE4oeE6WK",
  "key13": "kEyNGGvmd7nRPrf41CDcjXweCHyx3e84TiBApXfFfDVWxoRCwUyqMKZ7eXXKjTUAq7BfPPoLEM3jLsG1xGt28d4",
  "key14": "wzYuBahHZRu15PfJAGMJyZo8DtsjYrBGhSUeFeT74QfAvarS1kKbkJCVCbQYcz3gACXTyJMzNQ3R1ooma15PMrX",
  "key15": "226A7VM7K1hx27ErrvWDSJMo5pH1gZ17PA8Ct3Sa4YjdS4v17t3gm2TD9JxfeLGtGzNS5KAZbeJv9UXfxBV4soLj",
  "key16": "3f22ZbCpwRDkJpfBi7Zc6qE823Qgb6gMsVJzvQPcVyvx5fkg5yPL9cpy6o11v4EqnNGTb2C9NnW78VreMiK2Fs3W",
  "key17": "4VmPM3GGU1pvPjpE3eQpNJD3sL5JiPnih2NUkEodMz8baxUn5ckza551FRY5PUgj8yj3efBLHKNVeHu4xJEZU7X2",
  "key18": "61ZAKxsh2NYG5bnFUrrWHqaMJj1n2DqYnSEFr1ToR5DGbFGdxPPqQhgceu44XDNef2ZXDGrCGm4eEiEo7sT8rVK3",
  "key19": "3tWEk5n7oEPdHhkKiSPCeDFuba7qPMLwe99Voxfv9vsoMcPtt4G86CEmTb7GXxZccKr65ynf77cz5ydBPVjBcDkd",
  "key20": "3Vc8iWZJx7tUK6M5kMWfAgzeeSCJULQRaVTcDBvh58khXQKRibJcBNu519BwsJCdMh1z1h599V7fGxUJTuP7KSge",
  "key21": "4ERe9mikKd8gdP6eL8gUK2fno5BCE3DHygJQ4VPoh33S2QndkUjQLPtyS1Z2WaQCTcuEQUCjojChvku1CyBgKFge",
  "key22": "3C6J3cKvjB88r44xnea68pFEMaFYKDq1HrA26EQ71htktKZ44VhZC2wxPvSTBYxba8ArbseUU2evYaDjcaKds9cW",
  "key23": "3Brn2D737EH5CjW2KrazmVzcvy1f3ot2jX5AfFqw76MjGoKUaKHVSuK6GbJqbDaDYgpYL58JGibBRjU1RmbwQ1Rm",
  "key24": "rev4ih1Pkw6oi9M7ZLdC4ifZJKkYukYCf2K3VsWaFw4RG7ayr7dsYg12yn8ev8B1k8JTbwwM8CaBQV9TPfUuqFg",
  "key25": "4jS4QYGvEhWrCaTig9EbHkLZkTQxBtu7jDfwQGd14TqYChu2uvVMwFTLuNoDvtauqXbH6hCpv3rXjVVmeAGMP7oj",
  "key26": "5sepyv13RYWHpBVuoor2sDgmnBm9GecHnF7i5iNdsitgYxfxUFwyqwRXgMw3b3ZMYQNrSBccTFTfU6ypjvabw6QY",
  "key27": "2EzScrTW3xuNC5qvQTNqLWzZn1pWaRsnxPuzZyz9FH9WGxdqVt4VpK9LusvKrpbNeTvJhSrsQxMLCdB1k4W24p81",
  "key28": "4AQ9vs6za3iPvEifA3WkBn3Makxiv474VzKAFiASY5mam4RuDnnpiMvm1afNJyZmXWfdQ1GLpe4yKR2pXrmdUW3S",
  "key29": "RAE9b3MsBhCHy6qy9npDP3SZmjq72iCcnBJHCGhEQHtvnSHxLp7EYAB7ZFRACcUdzss5y26jRhfv21u1y8D9pjw",
  "key30": "3TAveV2vF2KY7XxUHvNwyNXCxjNLAJjmWfq6S4zk3thAwowTho2Ge9S8fikKZgycuV1RgiE8mwwYQVh8y8hVpyeW",
  "key31": "5dzPTQZdX5MXmE8bwUXo1DYje3UpMj4PLZrYHzKRMaRRfckncXZe8BztQdp4ykjEZQFvhELsMvWFFga9RLQPd9SD",
  "key32": "2kWszaXYhtfXpTTZicT6s48C8N9Aiydy3Z562LBNLB9C3789gGwK8hBas9gPueeoqLnyRjdxbFRqHFaxsgjnybZh",
  "key33": "zSP4vYLqs68fSwRHJiQq5gXnW58vh9NnQi8N2eRyPm3nPb3LdQ7qeHwrsapQ49kmyhsEu4b2imTqQh7uVNoLTh6",
  "key34": "5oFLXAooypdFsVdxcYMSCfNs3Fz4qWPgQy6wtdoMSypUw4WBZNbTYQ4N4jK57AyViq94uF5HPZeq12CQ5VGi5BTh",
  "key35": "3R9gAZQhuWM9h31vT8dWDmS9WSEJSsB49ny9SXBiL7XjQK1VAiH9RAcM42jsLqfwQsmGWZEGJtyLPVtaEL59jtSF",
  "key36": "3QAjog2ATrEyoeiQ6p8bSVfFPAf9TuVUPtmHuHbGzTmK3mMFhyo9EdMWsuR2SpptuHakDyFaodFGw54SooWdCAcN",
  "key37": "49q5124GWUQcqY2Bo5bfnWtM8Q7iywMg9rfYoDRdN1mBXjG9iKkJKcqEj7BsznijqRkvwgfmr6tdRis64jF7nMrg",
  "key38": "4XLEzGhaTwWZpuBgbgSqUgnwRfxJEH1geiFiwQtGaFuw1mk9AvpSJwaGB6d6vNDVtSocBmKUEvoBcyip7WpU3hhn",
  "key39": "Q6ye86grmVWvcAmb9HS4dPz1xjZF6zBVdb8PoetPahn5dC33eRSiCrNP6GpqxN9PVoe7HdoyGW7ozoM4mj31EvQ",
  "key40": "2xkh4NVHJdwmgs2y8jrHeZBMLW6yk4gsvMaZFqRBnNxWJxMv2Sfo7oo32cmKWNoGdREUgoEnh8E5XyRowrrVTxaJ",
  "key41": "2EKTRCGSwnqYxpqnV2sJF6TtVArvZQFSTdHRDo9jj6MbVe89eoufdGipgSJTS61iLLrbh5wvjyWHz7oEKrGo6L3g",
  "key42": "5YhbKAr7XArwhZj1xMjJuE4oPKAecwBbwK6sqWGQmgPQtTEgpSuJnAATct8mEY1LvaXbRxKRww8co3C6uF7yQxLu",
  "key43": "4Y4iPSiSkpBTCZ6EC3wB6U8et8t4YdNrryvrodT3a2sTDuqXrF8BB2rYJRZzSKbKzb2Ribv4pE16czCpY9baGZYM",
  "key44": "4m78gGsMRDzC5mRo4Xwk2CHR8j45ZPxTfcGXFrtT6PPtmKCa4SkGuS9FJkNsTvdQewhMHx5e3c2UBa8dxP2URcyR"
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
