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
    "2ivajELKXkAkC22ZWbuvi5KEWAms7jhJjoWe2xu6hNwYVSFzFvGaMHuJED6729HErz4xcTxZZ1yr2BQ5Qepp1j1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oa9xVEgTTxtmNJyk5umCGHCaQA2ozzE3w4R8Dz5xiZ1NDHf6BSzauXz2DmPXfgPSnnWPEEgKBvD2hCabQwFhEho",
  "key1": "nYnPkTJsC1Y8mqxPemq7znXjzMaGdfZSN4f32jWYQUPFWDsFCshNkbfxD7Lq7fAGopj7HzkYq3TsNkpkqQSbMnC",
  "key2": "UMR6tWxPZ8uRjfqC6WRDScTZSRgFp226irpJcPMXAy17jFmhTd9Gr21v3BaAWKJTQ429REopNNGk95bc4Y4B6ZM",
  "key3": "54syMtiBWEJpxGa9cxYYFzijjZ71LZdjLsDQvr5oqvcJKLLPDCetFKF3cUQtSrMrC5GVGc4CLkkn9hdf2opAvChN",
  "key4": "5w5nC6Kj8ufY7B386fTtyerf6nYV83bxte3MKiJyXE7tx3WYQ26QtWmjkPQrjroqeMrMxitU2J97GZi57CWyjHTy",
  "key5": "5ZhxsaSV5VgqYtxiLth1tQLFxAqEjB6SgNFxBVcN59FeTbtzQzMz2Sa8qJ3qnVf9MAq6DsNRG51zAGwg9Q4Dsw7n",
  "key6": "3AE9XSXKpeEkuxxPbNwGrzD1knxPtFa2C6zwejvv8u5aqGSTrEmETHk7iT9iZnLLhtVhy7oQzTKiaCGRTQxhwLXd",
  "key7": "4RtCgfbz32GmczSSXtc9rTvHJ7U7f2Wz38Xp3JW3CzfxPp35ovsqx28sVbj2tw2R3F8B4bpCDo4zVKCzPaA55nyC",
  "key8": "4jAe9jonf9ZVGQ6QJVWPxeRRQqiyLhAqFBgrXBKHr46YWiPUCWAW2oSSK3KM6f6gpKZSLQp5WGe2qTN6A4oCctQ1",
  "key9": "49yBciHJ8sQGTKVncPSQA68zSFjxDzxjV9fRVkERxJ277CoW6KszXFveNPMwkerxxCmeehrLvA6SRE9unUc4TSEf",
  "key10": "5btZYBhtcoHEjgC1nSKtCWmdFZ64AumXy1viYxoHSYUn1WgKwydxXfewB7kACNMbHxvvi1tJrHDw9rpZZgw34tvf",
  "key11": "31ZqFLhJs6cJF6JhCJuXetRPiUrbYqVETHSSfaDe5pLFDqQvvqPQGSow1ghBDxvwAQYXn3h41xJME8ZS5DNr2Dr7",
  "key12": "53jQkfVm7VehRNXPsC2vQQjENFHY3vBU2Btb8JLvQzWQnq2iA63DpphLZPfxjLjPnSeCzVix4hPFxGHQJA3dArWK",
  "key13": "4Fe14WG2RcWwgmTenFWTeJLLsUS2QkT18AeKwyBuyFJngiKX9BGqPsQ9k1z1YrXYjjb6UEkN6szFRRpZiMRKvZLR",
  "key14": "QSiCi7q8qxHYBemVVpPRwoWU3rLre8DSX4WjbcBk4T9VpfPnvgVx9Db7LgnucvPGwRKFV8X7gjS9zfLdaaupLh2",
  "key15": "2cQPiwiQE1S1R3xV7FdcS2iHXwpQHTUHanckod3FGAdP3H4u6qACmhyxv7CHMx9jdbUH8AGZzb1vPrYRVJcducFE",
  "key16": "56dKPgkS3iLwim5544G5YK8GjXrkJuFkK2muH1hNv8yxBQFpMe6n1kC51SDKiV9kYsduWXU8Wno63RLuxszBK8aY",
  "key17": "6NVgeXBjEmk835KBwc11MeAZPviGm9rkjjj1kwhukociGViwiFQaorRQ7B5F6ZUxdZHZTMLseaGKw5FQ7UexT3N",
  "key18": "4yBhA5G5QFucQNrfsubfKKcVFE4i8Vc9vnMxfteKom5HLxTKiyXVzh9ruVPsDhVX9ywsP7NB2SgBbH1UJzhZyNYt",
  "key19": "5C1Tn61LdqscNaeP7gJ96DgWKtBM3Y1QCgJjKAuRVMJbfny3jDyMUxLuJDWTZ8sfANLwhrUyXTQSPwPyom4rUKqK",
  "key20": "4ac5yXMe4McZJ4j2ThgHrMKKHkAKrSixNnHy1cXBRXzoCGyw57mdHoSUSueKwfSc7m3KiykPF3FPnVmCecXyBEFY",
  "key21": "4NysdER1qz4SWgRpvtQ1orJvVENE5L2ifFAnsLHZbc6HiVLWtm5JEAD5gyjc8vtqnrQqYkQ1wEK4Wv2kYRoykcPK",
  "key22": "2PTb4D7uAjLqCNfN3guc1rVpezNR69E8MWvK8eQ2AsBRvQ6LCtKrmGXBGYkY3qH5qC8fRxxjKUPnZapjnw4C6q5C",
  "key23": "523QpQu7XFV7ju12EdyWDzZArdkMnYo3SMeATLq1cVL2KWJfY51wxVdvBaEy2o3xvr5c4dL84HStEGXbqXeNonjy",
  "key24": "WtUJGT9i6pYv2MZfUDocAf8UcKbRbEXuyEmTubkYZeatnp3AaG52wj77X6uvn276dhvZrmC7eD5ZY4kJNt9b9fJ",
  "key25": "4Sd5DrGTwTdU1JntrFbnbQ27fVeY9H4WLhzP6fvX27rkydswS2HQVRYDdp2Sxz8DgFmeFWqthtvLTXf8schn4L1e",
  "key26": "5H2ycq131cYjr7V8sqLEWNVeXFGRwK41mrZ8778HCpzYZqc3GAmP3KFhdqFLgScUQw2pFUW2hfw4RatnrhNwTsz9",
  "key27": "2oWrdVYPvo6HGmahGigTSqzH3Fe74nzhYCzjbf7LmsxpxKAUYzLaqx1K7okbEeRN433Y5KV7Y5qRgtXG5eqcQppz",
  "key28": "3KzUSgkZhUUfcP6Ua3bA7UkEr7mbjwi6yxdbZ87kEaGHCfFx1QPoquLWhvPCTS6d3jYZHgTDWzCqWEvafYqZCECU",
  "key29": "LgSW5S8dwJqWxEZiUVRXivAtzWWQ5w6XZTQMt8miQzht6egdxRcvELm6a4cSm2brKFNJheQtdrdjXEuTroqqGoH",
  "key30": "3iH1RVCuTt42TKj9iPe4XB957fC41B4KY5nE1yAX2epBUdnUyk1GsnC7pehwLgpUXXzjPd1n732qvfwLbma9CHKU",
  "key31": "3y4GUFe7e6cpmiD1Uo7vHNXhQq2JsSckiVSLeS4yuz55Xw3Su2CRNVWatWiPc1jGH7gM1NoENt3kgog6x9YNUdb1",
  "key32": "4UHZ2URMJ1W8yiNoSHjMY7iv6nJYBYP4oHKh4XcHEfAUoasHt4Qc9MNJHDVV8L3gt5XcRV16GnWbVtdsn59MhXPA",
  "key33": "1UxNo11D1EHymv8taRFNTzGTMYwnAsk1LF7bqp75Qezs1ydMZ8aVHeSD9G8FfVpqQz2UU7csz3E7zAVFms5bMCW",
  "key34": "5DexhHx8eLkTGQLaRAdQfejL4DNSZswggTpnqJxdzMBCwmFkuSZR8YPT67KuETPAw513tLCgxNHRHj22QqCciAS1",
  "key35": "4qwhv3yHzZxZopZyToo8c6JgqLAL26b1uMn1UkUBur9BJN7JqEvuZw3vWPGEtbSzGtotTpftzzZNoWRXFhheVa91",
  "key36": "RpRZViwyH5cdgsLxkxUcNUsf3Pv34sQxCDCj1LpjjvATRd5fVYY7KkKq4WrWb2YsTtS1L1Jm5SEVwN9nr3Nc7dq",
  "key37": "9UcLJx1cgMv1EXBy5h2eDx7snXRnobWjv137vYyDqijda7eK3zbi3vtb4XVHAfhEWTgKofCHxotBsMPfyuVWHHV",
  "key38": "4GMDTGCT72P7PqdXNjoMQTXZaQqSKDSvmo2bqKd3J2U3gHcwcYNjV9UjfPfpadL5j8niDbHK8LpMKrwKJA9uWiZ8",
  "key39": "NUc8feVDWRNvz2eHjNqV59rcU67d5yra4d91dyebboWUkeDxW1UYyM2LyNUhqFnENVTrxJAZtsTx2JWJcj6wmqE",
  "key40": "QEMPKGd3v9j4mNez9wqbJLV83WwRuf6C3WqXWqoZtmXfVxj6nq4pXdWaDcUKJvS9KQR5itePiF3VvnMBGqPUXq5",
  "key41": "2hLuUsc1BsCZDLfkP1aW1aTXGcAQU23KUkNV2tqLeLwnhprqeB3M8V8YoX1sUtewK7ghaJwhE9hjeTAGmVVdtqAH",
  "key42": "2xRVuEvgThiFtgUCpbPYxQVEFS8AZtY9wGUy3B41YdxUCYrRgU22msz8S3PPo7JFN7raE3XhrtXo3XDSiaPo71ho",
  "key43": "2Aifg4pwhaPoexmL8foXnPeqeBb7oko8C41RfsEbhQJCCU8bsNAdCkKqen65EXnb93jqTLziQVtcnfhUh2udCWcq",
  "key44": "254sMJe6ssezM2qcmwCJBUZuez3o95kEhiuPy6FYcGtdSgiWqJTB3EutghtWeXDQ1KjyyRUjBvjhxoQR7rTk11Cp",
  "key45": "39VxbNWJbZKLCXz6eHTTxvHJg2fo9yvvYkQferrwjZjJPQNFSnusNnbE4DYExyt9mpLQKeLwTYDsgcbLoMcFERWN",
  "key46": "5BVD6Yn3PZFL6isXu4nNPpcyQGsgeE7ozTd5UxsFAJKTXX4jzCiBQx1ccSFJCzgjVkBSCGQrUij7YxcgDwuDjHYQ",
  "key47": "3cCeh53hThkLLxV94sqYwHYM1rjTGnrPthdtNEXWZdQFPB75gNyohz2hHwH51rnnyS5ziXAsxc9xcPH4cEzesRt1",
  "key48": "5fcDeRvBDqG6sfhn3ELJtQLomUHeMhmD4aTmYLdREQSuyDzEkXbFHadtfF8VVPKzX6E3hEADrD3t1RoHEuavY5Bv"
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
