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
    "fJhNjaNpJ1h3baNF7XuXg1nH8UXX4kH7zye7CYFSSx28ANsp6T8uTm1NEYPiLhnBMj4spJyPJKXBQqsgY7nAUMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sncrkxef1vdSHw4yRsWY7yJ6ny8X7L76BvCiTPseLfGuCFaMa55G3mNbQ9XefuCgKJyEqBNdJYEyvvqhYmQvXE9",
  "key1": "63PY3ZCnooRFwMgMaKYtMFjdbR3Hf5khKhDna8HGo2dYfRQAJjzHifwCmcpJdzA5YmNLbsenBEYhhwBJuSwfyL3B",
  "key2": "5zXyfkkMwvYxzrqyyJPDWfs8nzqxhSd4KBxXna6hpxMA1iLdAbhLyUcpZUsUNRouNex4AzNMKc6oEjEXNnEdc3KG",
  "key3": "57aE7cNotmjf15ZTfaBH51WH12Kmk6Wd3GgJMmUDPFJAU1nNF1LnTFLGqo9dGTfBhCnwwiLE5LG19W3VRqBye1Sm",
  "key4": "3jESWbd45EdhmGG92VfLn5q2kfrZHL6UC73KNVNDeu6seTx6p4Dvx3xDiNeGmWQWK6e8BdanSNKnjNamPQubKA6X",
  "key5": "39JzggZHkFSDMMGozFBwtmRWhiLsNKELBDvicZTZWpZFzN3Z887U2sccGd6NUiY4fLLt6CPiKxNG9XPfa7d2CwU9",
  "key6": "BSr48tFo7JTHq6p5e29gqjE9ifEva91Qu22C9KuGrwh3r3PnfDdoTjhCYf4ETzZp1YxhyJtjahFhHXTdcnfrMJK",
  "key7": "ZFkRYkPdivRL45mM5JrmL5BUGeKu95kYUJan6SUgYNvwjvjt6CaK8YJxdSwxuFhLXwK78iCYcQVraRxPHybwork",
  "key8": "3nU55p988ohm1BNjaMDLCDGRFbkJ5JvzDACtLkun27KnB4EqCLixn283QJzubVryz1uWuARptjnW2duUTPVXHWpj",
  "key9": "4JUBmieWHneJCAqDq1UEqnuisTdzwT5FkaEjsuF8np5yVPDeb9su1BFymz2xvpSEEaJaAhSdoTJL6PJBZJFpHwfq",
  "key10": "5QH9rYHyPZkvKvLb8DjLrrnumUuDitL7H4hNrjFxcpLKzGcuk6SHV4dLfofPE54gYx28qSkP9tjcxX7gJgWX56AD",
  "key11": "2nM7EorqNhHzMmo3bg6LCfrxc88d8merrEX3oYxFKKd1dFmFyKyvREM5Vxui9wPnpYQFqE8qzsvFSk5pxtHRuk7L",
  "key12": "rpEk5m6KkbWZKWuULPtVyfvAr1LJXSHLzpH8yWLCNfhESQ2cKAHbMfgQgUaFdw4gUHwXaejEbho7Z66Y3kV569N",
  "key13": "3eu9spg3i8c5UzssF6Q9f39S8EiHsXoTGMPSXeAD1DGQK6jKurfmcEP6xBZtAhqVWq7nXVgP432XwfaoTWkaHAcc",
  "key14": "2zmJQvBvzQo4kJTGh582cEzBtzj77cksRCNiFFMu6RgYqRhTEnn9jZn6T38o8vsH5QQaVWBpi7N9KZ8wFJ8q7rb4",
  "key15": "3bwp7ZvWKJRe6ur52hoMgf6oQGneP4C78oRbdRzgKgGrFMjT9URJnt9eXmr8kohi4M4CrHc4AU85t5QqYE6Ce1Mk",
  "key16": "Gq4Ph6kgHodyhL5PrvkdrU3SHUTYr6cbjFE6DbzdTzxTxdGimk2nJYeY3yE8bQvyRbgTmEKDg64JvEuMbszDdFZ",
  "key17": "21PW6N5zncWJE12epWLDMNz7wVhEaWt35sjpddmYgngBhXyMAVyWThmYLmui4zv3MLqzGRCLsRy4BaXD5GPxHUnh",
  "key18": "299CK1BL6nvNc7oj5P18BgNh4fZPVembth3X62GZANLnKFN7faVZBVDczZNTNT2rv7TG5jb8Zcasd9F1h7okSgiB",
  "key19": "4V76HQyuqnYzNoXy3YK2J9aMSkLEJfdFMS8y2ycTduon1StMJaLhXDbtukoaAaMwDixsvSwQ1ky1EopZQPRD544n",
  "key20": "4bz8UXHRzkgQiKxLASeemFSqioErgdPSLbihk75ehSS5UhT9oCZRAHtYPwRZsRvWj1XiBg45FBrHUkeiFDN1nLAS",
  "key21": "2cFzdBRh1CmW8hzNPh55vN5zdyjWfjMRuFVjUzjqQFMZHDBLiGpHqYZGRhvxuyqRs1v7KVAGHywVN6Vw26s8RZav",
  "key22": "2UDXPE15wtWTMsUs1hLWimGF6uEeXr6zs8kuYYx7gyLKHW1WdATxUHSHSyUqqFd5BHAuRqhLUUKpFCWnxNS7nt2V",
  "key23": "4kqN7mjPDQRjgxC57MKd5mpg1KCbCpc84bA7aZidJ6Rvxv9jc8mceTkvG91hTdjVek4vfREjFXnoJ5pcNUCVRYFw",
  "key24": "5ZNYoNVgPkiCihvRcYdM7WBB5UYVhz58pdXtLuuiRqBEejD7yEYXPceQV49RtXvTyQ6yFTWgwSq6AHxUBi6ekxPY",
  "key25": "2n9ZUvKKek8dSpo3ZcCbabyH4JtcbVoHUbMub4pVvRe4hQ9q4oCqDBRvitcnD8ng6DjvXq8Q6mfQfXB8315LGY4B",
  "key26": "2X1RRfRh7pguBNT3NhXyJQVoNmYtDQcBfpKVBb3WZTEsX31YCQN8C2h7WXUEbbdbaXA9u1vwtKs2GnfWureCdMfi",
  "key27": "2QaGDb53TE5xopuab3fWxeiZRg5UVkVJnY6GWJUMzBnkbg642CZRbQNkScg2dV34f6xcHX7iSw7Nskoz6if79hRG",
  "key28": "56AE823AKjqGXLdBNjHsGSDxDLf97YRN79TmKBNNpDKxiZPK5gAudZEUwxsqoKAsz4G1qg71Gzapq1qobPc5R7uN",
  "key29": "3WS4Xf5aWoMNKrQ18179kc2P1ux5jZC1WscjRuMDucDVu5wWwnmNnbSbKwnEwuQBQ8EXu3acPA4UErShChGPhsC6",
  "key30": "2YJJvfUw29y1YyZaMhAnH3dFjH2Zc83Y4vZVkp1v8gaCBfC59276NxQGHZMss3HPEYymNXiwJYACoKeeV2sxoxH6",
  "key31": "4zFj3M27dp6QhXRXif75wx6CW2Jm9D9jhQH6cC3G4Bg6G8izf4bUAtw59H3hNVtpFiT6kB1cAJsmwyuyTVP2GK81",
  "key32": "AVrF7fGNmzR5As6DKdRALnLTXYbWmTXj64cXJNLcsbjNvxJCPXerJofGz3gviNoBPRDu4CPj4bEGyK16rKwUFfC",
  "key33": "3Zwa8LVgPPQdxHbh7my4cRzv9ED8ZRG5aU5Cw6c8U6WxQwT4vtPaY1D93Vyddb6BDhViq1e49vWryutisdm5f5J",
  "key34": "5Vwe2mK4xc79aVSWo2pShZkPaEZdHmsY6pGSALSQJd4KGfx4nZcC3JUJjTbU89YcjuwGMWFa4QZHFLpYG2d5W3J5",
  "key35": "SoMjdCSGXcAnj9xDKJ7j62eWjXDNeuDahJbCV2au21Lqu1fgzTmuuxopKFgwmCB76k6ZWPbxoqS6MMH5aHYHXd9",
  "key36": "3MmHZDSDXzt48VzD8Pr9iQZ8HqQWwq8e1QVVtgBFCjGp1EN3NW34w3g6whrLgxLA6qTdwHRraRDCNrwwMnVo1CQz",
  "key37": "66kzoKcdSdDaVP14fwAUiui3sqzLUMZmwVyvjWzrsQmJiXUAgSaangJmq6MJCJJA93FceaBaBARpUickpcjT6soP",
  "key38": "36ZaRmBcgSmGzSQotFM41yJTbLvCunJwR737sC6c17ZUz9EvR32HG4zwAra7vDShKfubYUwyVrW3L14mE77g4EdY",
  "key39": "fRj4i374Wei14kf7EFdf8MEEmqjBGJywHGCpC4P9xrPDmE2qvu9eHeEQhQFZgKPS19Lixa2XuDtX9ecVzpaTiFx",
  "key40": "4UWyi4FpMMkHoa71nvR98eC2nDS6czK2o4G5HJsUVtaPGVMFv2eqx4nZEEBDHHLKYyAzhLQjchrh7dWzT5QBhhHw"
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
