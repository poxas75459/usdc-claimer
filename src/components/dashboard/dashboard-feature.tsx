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
    "2c7Q4RcLfdAJpx1fZK8kypmnuXSjrYGrGtm4BkZ152tFczNnXmMwWa1MnxTg4QjNhS4a8FwVjZPPuyPihuJkvE8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PeK1jEFyhBLkaPJre6aX4wrDFCHnqnSaLV8cSPirAETj5Jzj7MycNSV9ti3rqV2rVq9cYzkzXrV4Vp5iEewS2GM",
  "key1": "4zPi9mX2ymgPSHUEP6tSsPjkNBVp2k9A3513BWJXEnqHv2RyCkN7P2bwpWyuABzii75Nxv66Hx1BxNZTxwEVrhci",
  "key2": "EbXPj8GpEQJAoSKduuTSFdULLzU9UNNqqWk5YEuqHc5qjwkKJCtdks4QGmMaQGpLbef53ipzJvMa35vGo773RmA",
  "key3": "4ShTjV68cHXE9mfVjRuqQTyUjcZqZKs8PiDJpAQqB2hPeAhJSFVTEwnbzVN7RmQXyTqfy3XtByP23oR29AkNXTq4",
  "key4": "3aSocQeMcAoWfm4qR4neVwENH9Yo7DPgZrCLLYewZcvVcNq6WtE6PqptCkwDWhmB7het6SEFAW6dtvGC5fjxQJCM",
  "key5": "3FL9WZ9Q95mSb9vcUtBDtHavDmJfH4mHSmwYRN2UzQzB2SjSRkznLgK8ZqtyEwPhRS4iAZEmvB7BtasUMQkNTHDM",
  "key6": "3YFwzQZD1owXcUC5brHXU1DBkGQq3T8MrRivHrSmp2aHsrWvxkRF9JwHCkeBmyUQaYWzHSDT7dUA6yXHjcQYtvvd",
  "key7": "51mbvxycwuqJ2KnXLDP72eePjvA23ZViJLCVDo7eRmkWhZi81bkHYz38Ti9WNSKMvLME8FHkB3vRh7Rtv5f7jPiR",
  "key8": "2Q1qLqCkqPcUcrn7Y5hVt5D3arxz7yN7K1917G1juRuKfVKj5XAf7wtc1Pd9yDC3vUATFcrtPSBYm7QppGKd3tns",
  "key9": "5YdjXoDLWCL5QkRHVMaSnQ4pzFhyFzLa7b3ScxiPYJXWNE2utqopkYvwViWfrirYVgXsXnwYimBNYi2xpqSifTto",
  "key10": "5syeU37N5CxDZf3qHNFXtVXAtPPoxjeRzEEyuxUAsuVssWKmEf1EiZNKRHEuqWB6ccQxCx7UTJ6XdwtXFWaBukDA",
  "key11": "5Ar8VaPHKLa6hYqwwHwSpyFXdP42JTG6F5aWFkXQDUijV5m3Uvtvo9HsoiFimSujt6RpHiPMFrMViduxw6vGye6k",
  "key12": "22pFeS7QVaoxgmzWXxZzDmjeWmxkjVE6d2YzrDAEwbzYdPYu5uX7u2DtzrYw2F699P7sdyBdizm5S4wZcD1ZY59k",
  "key13": "t1FAfFJFzyZAwNzmcU6TkZcx94UG1Vo2xKoKZ5mCj4Y2DzuT8NnqQ11YyPWoY2bYi58khdiT3xDYpnchgtCHBQQ",
  "key14": "4LQnXnKjNh41rg3RJNmd6Uh1Tmb9uRYvsavg8b6ab8iYSv3gbhDDfwbSkT7ikHEaMTQY3LTKcnuAFa1EQpMmWhDk",
  "key15": "3m4i2g1z3kBTvYPCWrSqLMoyRk9htA5ZChpVJufjCFLvcWHnK54VbEpPn3xhsNWbCg3NBaMReE76osmJMd7s6tEQ",
  "key16": "5uX2f3BWEuG4ozU8fjh2PEeAyJwEnGLjFnoecEiYKWe9wegc1NtEG4kfQjrU1McywwfgtUGc7NrDtMe9oejnokXu",
  "key17": "3V2hNsDLDHeuraXBCfAiNdUoc8W542cUqgnzF9y2ojrVbwvp5N5Rut6kcPE4ZwLuzNtTBkQ81YqDHgkUkhtuYZYK",
  "key18": "QSzBZKn992jWQwnARz33QgRrib7MmKRya5eEuCTuUW2hx5RNi3Md3iCmJW1ep8tZpXqziFjcgzyDvxnTSyn2SqB",
  "key19": "fh6Ycw48HhAbdsvZjcEkqqGyoadw4kxL4oCNhnfJC5q8F8rVY4JviZG4mU9rrKpJ1FELUPHaWMGsjBVbfxzK97s",
  "key20": "h8xzCGfxB8FHANyMksZQF8p64Kh61zHkBCU67YuDTU2Czi1vWVxPQErqfG8h36jcL73aCow4yj5wvMrZZ41pk18",
  "key21": "2xGE1qMH8JFrTYpEi29aopd3QPusdT45mBD8o7UpCbMSSacFBVyvQkvgzUHvXaHadfyoH7zcevYxnBEVNJMVecJg",
  "key22": "5SzKjTJGX5UTnkoeLEdr2wV9S7mp5DXmL1buR44D98Vqm8rL4CDeXnubx1p9SQZeSyyQSaP5xsteo5VvGQsBq8DN",
  "key23": "4bvu4H82pmKXUzfo531x6EvTVZYy3rNxTGAGUgdYr2agaTY7DwMWSUyx2ejAd1To4Jutf3JAMEzacmBgPs3pNyTh",
  "key24": "39r7ew3Pvt5t6BKEi6aZJKUPibFLz1ochy2u33vvRDHp7wGYp2qhnuPmjKLBVcgRcHP3CXpR7zXVa3wX4E6nXaHJ",
  "key25": "3unVYAvLWiZ8DHCm3GbmqpPSApSmqFScNDjaB3LZqGD4oo1y1d7rgB8L5u39ejfxpsF9LfB9iGa4RmgwgmQd7BXJ",
  "key26": "3qUNyfgUmxSQNY25nXR26nazaw46nYWMZ1VQMqqSQjmqUYUzmAFGGcfYaeKVRriMK7nNCbdUkkFkkpC7ryh13qFW",
  "key27": "4VdyhUKk4ZXG3cpRZQD1jWqYV93DfB3wBZAmC3w2J5L7vkguXR7EfjEHPD1cxtTY4AMACZrAkdvPmSn7krKhZFmq",
  "key28": "LXnC4XDRFcgYoobyDK7YMFKd4AgXfqa86gvvPqShMpytD69VmvaaSgUpsTKVXFpNd3Hp7fifeTAFuiRGfVDdX2A",
  "key29": "4ikLn5EX5fAnt3ttJur3egzrsaD9c4a5trzxEoZ9jrkGKZfQLGmXtFKiBwV8rkitoM1CoJYhHBppvUssrmMeqHPo",
  "key30": "3W3yMXLZWsF9yFazBySHWDL93kcuwUdwuERx8EivKa9rpD6GHetAAF4KvBiRw9LCGSn6e4qNBjC9mVVbcPTrRhDk",
  "key31": "ihK2nZysujQFy8pxVvJtpWAT4sUt9gZgg8Z85NeRfBB5eKXEcNxqnCaWMGn7RXP6wb8oQoFfhB9fzBmGxviAD64",
  "key32": "4h3b5vgvDRxkFNunz4o76iXXYL3Rqf4Do61jAmuAk5KDFRgJ3gkrzo2UtQC8o5tXYr3qcmqaQTyQEymQ9wxK8D9q",
  "key33": "4rC8M757qKo4hG1TzoghFigLs8C1WAfNuHhGv4U4V7LizAHaRJWJ6RdL7PAnZ29NHuN1RDpkfffPVtS8uTEJ5Zxd",
  "key34": "5TNsPJ9rV1qV2pRDCoZq9uernSPE4kfXJQHANWYrw6i2H2CE8jJVM5Z1pBGMyTfAJCWKBu2zv73ZPsAgkHHJsj64",
  "key35": "JpaaSGGqfyKSdsdozvHF7R1swuQW83UVHrMKPWqLmDX729TgqNqKpLQrWp7NedFnGVwnLjME6jdKz1AH4Ta3FBw",
  "key36": "3UfdMZceszwDJzXZrPkrPBQdirqobpPxVEfEgPMkyjXpms4bYCm2SDuYR8QbGKK85x44xw3v4JMgSdYx7kneVFpk",
  "key37": "4wyqS6j33sw2yTGpvzRscCisMTAR5rRjrkjN5EmVZsG92PAxdRDWwB6MY8usDk3YC713iVYHiPyDuFBuV6HJVwsv",
  "key38": "3JMVrLshJrQ6r9AAnAwzjtqKF1k8UhxJ3t94J9by6sRSUdajLUTHa9iYxs1HxzBMSYCu4SaPsVwFU3BecfLq7Kmu",
  "key39": "knHgLGJiGMWBaqaAR5XCmd1fw7EATYQRpcDUfbqrnANCEkuJ3cM5WF6XRypxBVB8bgsPcZusaFxRUcAi4SUMw11",
  "key40": "NRcPXjjk9PrDC8pRCV46N3Qfw9iW6SU9cb8zxHLhAF6Y4TqZsjf6TzDLD2tNkZwchC6TSMm3ZvbBB8nJwuwkgyf",
  "key41": "aUZcuUJoc6Wa1ZXYRVB5FtPW2g2JCQVBcREoPa829nGkXj5AnuYVQTaHMw9YhHQMtA4N9EvhAtSwKsdnLoCUyuz",
  "key42": "4Z8GvNkUNtncrr4CtJgxw2tw9zzLHFR8f7Rj4Ey9P9w6QDzcThexcLiSPBUnxt8f1zM2LtcroypavWNGtSBvW7jz",
  "key43": "39HZhp24mrC2tE1Ufet5dXuRYTCbqw4ofsFcT3BJHgsDFHFTZtXFXDuFyTdYEJpsZw3kRKo3k9UcTLCtTW1oBfym",
  "key44": "2A6WFCAmYkkEA7ijs8fURj2psNDspozF7r8jamW39aT5RTyX1YG7duw9CAvEdfLogAQe27PmLzsqLb8qCcYLomDt",
  "key45": "2XL6UtpsFzAoZ7uWHRqnzgxA8GMJzXemGhpYB5j1toWoMU8UzCmAvbrQHmUpZWMGUvVetyGB9VT7zCUJ9LK4VwXy",
  "key46": "2bCKc5pughd8MKdbT3TfuVHUEaowjGS6JmaLbSmgs1CvuwDw7xCeiEtxS3K6JeXrjusXDx7NGgVxYj6zH73vdwhS",
  "key47": "5uzU2kYL12LAJS8pDvLytDZCMLv4MWjbEVDxH1dfEPorHvJF2BX6HXtag9XJLWcpAvetakgiSYHvijHkXd6N1avK"
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
