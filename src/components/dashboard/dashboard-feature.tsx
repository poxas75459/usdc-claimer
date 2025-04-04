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
    "4vRoVoS6oJpg31jaWSkakTf1y8jTy9yT1aJw3G7fcbjmCAC9YLqVXssUSTnPc7bgg5MNsRWNJwHANrUzE6mnX1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rmJBLMa67hVr78zqARbayPbpmsjoh9ypRthkVgJg2ozHWPQ3SnMk7YfgyMiX9vZpLao5PUgRgM1HuhoGbni6nrA",
  "key1": "PggrRHHTv7NrisfJjVpFQvcxseFKFDAHz4wyTa6h9HN5sKYUYwQaTiiSYvHeN7rok7uKEiiXDUM5XEDGZ1Hiy4V",
  "key2": "2uXfxWdo8Ebtf5NCghHhr6xWafLV1dpYGs9gHtPKxzwA2LFiFk47FM1rE1Hkb7orAV8NnZLUCKeEahsru1F3RCzq",
  "key3": "5vdN3ik2LKQiY6Akbnw15Du2JsWDoDZtWiQVE2Hsbozz53BsVpwFLM7hZx2k7CPbhDEZVu1cqTTTMgby6Crj3A7R",
  "key4": "3aD5UmUHeuH4PwyGHmCcPnvYL8W2qmTGDJpS6AW1d5dc3WxzaMEjqRaZ8ZaT9wahfzxY3J3JwfSsJLbM7zhwLAtf",
  "key5": "2jQ5n6SYJNueLvYtfohB5VyT86b7NRq82Hbvh97e6tBFhNVZoch26uZ7HQ19nejRNGVv2TcVCysriKydqfS6uR1Y",
  "key6": "2qSb5uyJCidnoFcoxfLSmW9ngwYkpsxg9MxLB9kZCDrkazvcwxctQ7dAbRQpWVrp62D9LewtC1AT7WXiZPb9r5s3",
  "key7": "4sghWZfnncSkTtwJ2rXQ62w5sv5ofP99ynMqEMD3AQQMde2sudHyzsv6oZzWCwN2VXUtQP6qHrNL4zfyxZFkEaBm",
  "key8": "4sQpdmXX4MpA6bVzeqdr9XfZRrykqvMinQoytr7diXhwi48UGmr7WbNmyZHwg1eeBPgy5iUmL4KzaGhpj4CjkGb3",
  "key9": "2kz59A4KWFKpvgR7wf7fJVb4dUxn2Qpr6MDWQ1WMCPAQYn6nAjTbUtnk6KEtSfUDG7i379x7wfpotqi22u9aLKVp",
  "key10": "4RQBLsihTh4yFo6FkYKbSrYQPyPM9RjLczwuB8ow4dRbxSUJ7qm9CC11h8YxZkQCy6W2T4P4auHUB4U5ADYoh4FX",
  "key11": "2nqWRHRzU4rbrda8RymeGNL7fMTAbtMaJE7yRwG4crHoTU6d2x6Bcz1FTdqBRqEtpi5mRTf4oVCcLLmd8NPsTtjC",
  "key12": "5xAH6RZgjgJpP5YFBgNHGEem3aCw88G8r2RskRV7QJNUgbrvkywCZYuDi51jcvCzGcYtCJY4id8fqqkBpu5fT5D7",
  "key13": "2StNbPgqLkbdRvLNqu94FXZ9Zmfyp5y2FHqQmExqLp5MLAYjBXSxwUWLMUJsVwEdvtzzyvkfbHFpZrNkk5AD3GCR",
  "key14": "Zm74WKkjFCiKhhUrQmDhEKmSYCK39wcjUYKHVWjonVJGRpgxAMHCyzfUWaozEzmxK8Trsd4qaE3TUTGXbFsiu81",
  "key15": "Dh7N55BYKZj14cRxU3Y6fZDd8JHHAERe73x3kupb2SZUVv778TFnffFKLzoYtu1FoggfsNWt97hVeLzqVe28GNU",
  "key16": "4ewcB3Vqwkzu6v8V7HG8kBmbp4KAdMYeV59kUwz9oH1KhUdtcpKU65px5fn3RAQfPKNahTXnguw7BRLsvGNgYGhi",
  "key17": "4n2sCcrN5pPxMsvUnHJG4b16wZC45wpUELkfq3ehqGwB9PMJC5onqrDYj9S6ZZCAHeeMpM9AHnzV6TzuPXz2kRtw",
  "key18": "EjRuBqkdzRfTkiaTeXkMA6piyfJiMtrTTkhAvB1uDkqCbQ4Q4Z19dQfdRTQEgwP5yBPDAicHwv3rTdLMGihxVBG",
  "key19": "5SvFDxeZn7N1mt6FLQHytfMDsFYQcb6XLhhcYBmck8Unx3qRPUH4RvYjAdqAPGzkcTx3KfHeaZJAutdq1dz69ohD",
  "key20": "GQ5reDT9ikPssWw1ofYJzwGH7T6pCSunUR1kkNELGnJn9vMwBZoW9Js4kkk7wbkFkWxjjkjSQfCENCbj68muphy",
  "key21": "5mZyiUmRZYmy2y6DuqnmkwTWT5aRdE8KqXnNk1J8cBuZSmSKbd2Q3i8YVqEPYumxi2H4CCHGa1rQV6VeroMEfAqB",
  "key22": "xQzva2PWe1NcYSBxvMtTs7rn7eqyfrmP6gtcn7pG9H7u39EqLJt5XxsuRGsYbXN3xTSRKdksWcemHKEpv4fpTe4",
  "key23": "52TyMiDMDkyowmpagZMQ1m7qKvd5KuSdHYAKnRtn5aPSKxwY1acJC558kKDScL1UU9LQFaUcqbS6E6p7q9z9zKv4",
  "key24": "5td6g8TWvWJxuYWHw87S47Jvpnvge5o1sPP8nURXuffYvVrw5EU6EszmA8eEaWR1yFt9XZU1G1LW8kDKyEW8pQHb",
  "key25": "2Uzj4PDwht6TLkV9wBJp3NKD5rqt7ozGa4saTCVXe38Bvw7Vp1qXPqnA8QU4hSrMxyPxtuvJFLbWe6tnGjKECRRP",
  "key26": "37X5nCpo6viEooAC2AaVrhCLzUfGSy4LYgpsksxNYQQbaLTXNeEoJakQjaf1fuZMXYBsNgVPDu5uZYGN2ooNLm76",
  "key27": "4fZ2Fk8iBmcfqVNtPb8fsABYt6tF6caWPLDxmvsk2PfudMRGA6H52UFr9C9NoxKGyRmXPPr8oyt646eZU8ow8azb",
  "key28": "5kvRaNqShBW7W8Gq73R91EYoVMmLxagajfBmDjzKwZvkp2LMNsZiBiSndHx2mpXZTT6puMPF56r4ywGrRdMj25du",
  "key29": "5hZkd8qMEERHbTp4iPjKj3XRvAti4t1egum3hdvBFmdhe7Dsfhz3EQccGiYa1cJkpMaouXs8oS1HDYUKqPqLgJQh",
  "key30": "4VRsKa9w7okagZ2nG5RwNKucDGD4EXCCCWdVMnMz5DDvPbAEsFDRJuZA9SZfNYQQXGc7PrDoBW5sKtgEBUUmzjAS",
  "key31": "2ycZVnyj3KHekr6SRFDZDTSk2jqEAJLD2D8oX2PRNob213SNdRYD5c2vyetThV1eWg1YfkDrYJ4YeUH5xDevKLp1",
  "key32": "3vG9bbm8jAgWZGHY5tAGzBK9LkvsfCx47qRpr3NmpX4ZS7ijaicdWLgBcwhmg7vPRj3cnVxJ1AL4Ly1J85mfXGN6",
  "key33": "5jmrBJF4nfxvX8MBGXvKJ79V8pRpxbxUa1Xi6QCxYvZECQqYH2KhxseVHPVQx73mPnZGZsbhV9gsMBnxb7zSoZYG",
  "key34": "5JqtM4j6jC9nfSX46BXaLXcpDVBCEM43QE7jDGN5qunhFkgHr7ydcDeKzN5L3LK1wH9gQqC9P3HPCXJLNc8hLQzX",
  "key35": "5H4Mgp9w1kjrSnmCVfdGo86Yq8n5TRuJHAS8HsS9pkPJ5rupoPiji4sZWFgezdHP1uJLkzFfixnyy2nG6xFpbJ5N",
  "key36": "3iaCJnJ31oPnvuoDL6r4181tvLYzy7n5HUEoC7HLMgtEUzu3d6vtdEmL3PwjLA975n36NmwVmfFn4e2riKniag56",
  "key37": "3j6MQqHj4AXcwobcabZEDDEevcpLB2yB8khWiP9FXarJ4dbXnPb9UiSvupU4L5p2dEAc6SdUhwKn4yr7ffZndkCR",
  "key38": "2EcKtfj6NGDCHJwoLjPaFmeeBRuUZc5pd26L2vNmJzfHcGYg43Qvs5ARKP8YnzkLG4fqLyhgt4zcq3Z4VhX3iREp",
  "key39": "dpoSfK97ZVtup2vAPqT5WymefQ5f3p2SX39F3zAT7QTabGGBw1Hd6dewG6BRCxLtSD3TCSSfciEwQZSmtSxHveY"
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
