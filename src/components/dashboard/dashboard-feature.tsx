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
    "2Y86MQ1vFwMvsDQkWYiJ4XCEwa4CxsBvHdDa5MpH9ENQz6p6bhNBzz3xGi6Qv51ZEEi1KRvhsxJgJtnYzhBhXC7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r1cBuBye9EuStfYpXCPNiXr3Eksr4j6QXzYYjoq62ScsM9L6UNNCz5nwSbXjBeDcFXiPNqp49KiSir5263wJVqt",
  "key1": "4Siyii9u7rySDtURcCtLxiTrLAW83NZph2uPSqko9z7Vyd74nUzyY9AtqPRk9sZiDjysWfdU2bzwphLGaFsXLgaX",
  "key2": "4EA8bBsEUWeLqd3CSN8DTJDksApjuohUQN9cPCQmJhQzwUkdJzx85vVMtEVCjM1BAS2sobgF3vQ7PWdsU6FmGgwj",
  "key3": "pXnwc13xULFbjCzkcoReYoqkCemMfP1bHsuJbUvafknA6JvkGhdU5ZPMhyy911TuEX3F3JK6TtFQaZNk5YtBE2g",
  "key4": "3bXo4fBxP593715h5n9kxhhcfhw4AgXahKueW5qExgh4ikpRprRH8eHVTncQSskCFVvbpfpqti8dDMuFYZF5mTLo",
  "key5": "2ZdjmNNwC3nWgy6hMBMRaJdvLnBnhG6UiMHQLnMVUFuBibvJEaxppL8UFqKiUwjoiFHWMt7wPckwjUhnyVouVvn",
  "key6": "2jsuMqZYkDKwaF6fv6fMZk4qjSxtri9S7ct9T9dgBRBNqXZSnqtNtLEfo4J1nphf4BVUxs87WxBnjfjcS8pQGECz",
  "key7": "3pHYEpcLnu2tGLzM81JANbQjqYNsyWHdQPZow5prKAuDZvXt2kKZK9oJ7f6DbQ9LazyPuYzsSzRjVACvTLnkKqum",
  "key8": "5YqxPyjw6KTxewYCzMSfv2UrM2LLx9XTQeBCQSfDS14uVByt2WhNtwoggDrqnsu3M37v4XKf6y8vc6Kymur4idVD",
  "key9": "5x5tBfJwcnjERAYpqnXETx87XiBzknY3PY8i9yYyUHk9YTgGqHMLxabvE2XSz5SsSZGQ8gy8KfcyQoQrnrjpRMg2",
  "key10": "44fov5jzeBqKPJpKye5qDpWybgCRtqph3Kj2unSwrTgCg6wLxykaio9RcceVquSnhcFPvhtsVTZM9rpsSp6Jsg7D",
  "key11": "4K3VpieX4fSmSUXgBf1SWtwwrYy87rprhZogbBJYEu4hEeQHZ4neXoKTDPxAGsmiLRSxHdoAuPSnJkG8VXX1r1ij",
  "key12": "GXRicy8HvyXtt4c8kuePxQQ5iycvpPfUUfHjqNWka6xNBNqv6D4fr8bucUtW4Fw4ajw3JQbF47CzhMspt9ceQa5",
  "key13": "5Z4aBFz63tPN1aR456Pejagay9MsbdLumknYbKz7a8DHkLaPnxRcMNwZ8rcfeD42uc8eCveeUvYjjoL8cwcmkQdR",
  "key14": "41CheZdwjzQtSn8nrZPhphQsUhvjPLKKSWZq43ZbYTuUMyEi3Ge9kNhhvECFk7iLpAuUWKbCZ3yb8w3TeTpkND8X",
  "key15": "3NkNKPyrePu2A9m4n4w21SkKLiK7VyS3ntbhaiQDbNkYeBhFcUQoCrWcZRkomKo6sLZMfgqjSsZKECahxwePQpr9",
  "key16": "58bnBM2oDtZzt1v876PwS58cYHEt2am3rK8nEJAMH6y1GRm7n52mJGRLta9TKsHDcXLQj3ho6WSbc9M4c7wfxh2Z",
  "key17": "58e4SYG3tjL8Sjv7ALDXaNRV7dQeXKAszsFLGZHZV9r8PUveCb5HoLpou6Wq8yGUW7fysPm4S17xLYVPr7D2Hg75",
  "key18": "2A7tyHXypmURwBaPz6byJs1HaWZVDnQEZR5bwkeHmVmDZGnCbYyUXUhbEk63hWuKjkw9nZwuLQEBpxGK3EyLFkxV",
  "key19": "2bQ3eQgrRH7nuBkHgbL2rzVqHWY1RbJh4MquPhsrc96aRdsrs7ESNpNLjVHbquzo2SPFnHNLymoj6FhdBb5ZZD78",
  "key20": "57szdfmhXnh89Y4Mh6kAkmkyJGxv9amKoHVyzTGu1EMyWshJjfJjkQiVj4RhWE6B3Kp7jigVsg9MVRzqZoBxH4yB",
  "key21": "5VNxmDGSQEfztkLNiVfN23Qxh7fKr6qQi7Y7a1wnZaWLUUrJCNYXjB4Rar2D4Wf8Ls1AjbxUBGwh4ghb3FmZKxfG",
  "key22": "27P7Z5vLmVitFY5ZtKRp8TfCzyWBkkPGA7bNJTE8fwryNXxaug3PFXMw71pHQ1DVdd2kGWjXHkzE7J2BBRQg3mns",
  "key23": "24HuW8eMJdFe4B2EzVTiNUbYG2rNfA2MuwCR8MSJJ3cDfQemmXV2WDbp2EijYcerVZVVZsvTcfZvBec5BaTwRGbX",
  "key24": "resgvcd2wgkLcH3DAajZkhVfrJuCgzzqggBjkL11gNrLz98DnJ24CnN8oK3g8jmL3PHfKJ8HHWWfRT6S7bZrFHo",
  "key25": "465Zbr8ADWfB1Go9cczYSUbvEMCy6gFQf8iLxxs96gyoWFqyLYB4cGUEMP8V9ypqCgUp2MTUsjzfjcpyUZg8QZkd",
  "key26": "hJjsYycBFBMYx2aciCssN5wKUDMYX4tahsmXRaja2UAGeTngVgXMaECstAzd45o2gYpVCY9YM6HzNDgWHh1yhae",
  "key27": "3GbxTzVQNDffFFumxm4PTNYTjK7VUuhFD7xzZE5PGkqcLkkXW2aXSWakjTdLFjcHtsSctRmkfeXCpMeBYEehaU5P",
  "key28": "4FFgj8VxdghwBAzD4hTmRxkwv4TrXxtesWDHY5zjn3oBt3sJhnDMUve4Biq67QNqfiEwTKufmjdBNXxPcE3QCXFf",
  "key29": "3Vyh7gmNy2ZgxGsHr2HGQVaRafsSzdWSZSDsGfow7YtDxQc8wjjom2xYpZAKLQD8FRmUJJVSr2XJ2ktwZcNcZ7B7",
  "key30": "MehG9SjGUJwEXndksNQa4B1RZ6bY6FBCETw3ckcyk5m1RWpUAF6PiXphTv98HiBLA34sY5Htn3scSgYGZjMz6Mg",
  "key31": "3npLC92Yf4UgHW8g93BA6xsoSSH28QSCELo31PTVRwVxLT43Ek1xbfPSpVUU5t19djLvkHMaa4VtwZ6oxeGVtLtS",
  "key32": "5ZEGcJs7aeRQq1mzqnbgF2txUd76NbCeYt6Xz6bF2CqKTPEJ12ovUE98wjusURGAs5nVQNK85Sinfki1K9kDwDMK",
  "key33": "RDVymJXkwzGhpo6kGcFiAKnz5PBdNtzpwmX2GJVNuiFUpnAxmkijSNExPNVqBHKkm3abhMTSCpJcSDxmTyKMNdZ",
  "key34": "2B4XPkPxPLH3nqkAzwjtTQmkF7i95mZhsx6qEBHGRtiFgD7sJePCQeeMa5awdtVRJVvxUqy4doEXdnsvbWtaKq33",
  "key35": "5uBNSq6QY8DeQ9eGSGWNFMfVSaFLftKUHWxqzi5sLusuNDq66zmsAixfRBuji1WMwdcZeNRTuM3W6yHysE2rBqfK",
  "key36": "2HS8jdfD5uyS69gwRfqrPniW8gGwdx1PFKTXdaZ6phQVgNpdD2cfKANYf9uNC3VjbJyWuNgiUFuWmTbKA2gjZMC9",
  "key37": "3xwrEaEqVQKY9FB5xcx3ox8YQFNCuCoUiEjyJCCjKeYvP3wbR3v3H1BeSgHRa9ge8zeZrJEbrWrGFGvFhhZbKud6",
  "key38": "kpV6niUnu14RcrNEPLjw7HN1w5iMEzQGu7ciwx69bBMzLLnLziiNBVUBh6ABtmXjyC6w2XFCdpn37J7o1BAPtJ9",
  "key39": "3aNXnbtt9qBTzmZyQxPCa69AnmUznnzfKWoDiHog6RN2B7qaeFvgoGfWhie6jrHshXuT7mQGAENivpF9VQUxzb8a",
  "key40": "5pgTgmEcVsaTdzkAAE57yWr4NeVuB6Z9WuHFHmvuk67hThkuLotWoFuhMie71vZxER7zKSccvtSRNs7y9hQy7Xxx",
  "key41": "376pRCeFMtAfYbusNhH1nnHjz9wF2b5XnLNDV1kB9dTXs4q3umrgbrJ2SrutHsiqpvZMr655HYCyd2u2xxWF2jMj",
  "key42": "2sTJbP772Kb7UCLvYqNQ8YBjnBLHSWxg9HNaQQ8LEKSxpBkjVFXYgS69RqeYeREKVEdn4xU4uJGfr4GqJqoZC55m",
  "key43": "2GAqGTMDEX3KPZZmLPXabbKDaRV4Nx28AqFRimomKCak8F3j6JTuts4PenAu1qw6Rs3DvFCDQL5NAuFi77vUvhAm"
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
