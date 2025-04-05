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
    "3JBhm84JQ9G4We78TaNtnrDj5W5igjMhPnyAJNU4UtLZ1GoHzZ5b5CGf5DN238asNhHtWFL4nCCJMoxcqNTDYg3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CzXewREHg9NcZMy5ANtbCQmUNSE57T5LUgcVq9t3D47eyFokpRtkGfGSa6asiE4hbFLBGFn5vANMvnG8QmkwZM9",
  "key1": "5zQEQZ98odK9FxKnd8diWMNuTR2YdB8ty86JK1fvXn3qJHs1SAosdpifQB4XNFeLJy7DxK18zweK8uU8greHhv8y",
  "key2": "5g3Z6mbxyNbDWn6DbC6rvcuuuc2LAFqSUBD63b52wcCdK4uWEtMZVXb1UdQUN6sheTnVHy44N4NPhEudAzCmKRoW",
  "key3": "5syhTijQRo266j46qoX5swU9NwokXpVtwJAioaYfcAvjHQPzXWKFuQeKQi6fCAEfy8wabFcC6XMEq8zSEyxHgAL5",
  "key4": "3dMyraeMLi4unw4tz2zbkqry2abRWKCKbwbPi4ZeQmZeHmSYX4G6UschjgU5KbKz8N6CnBmarqGzKek8qgXvq96h",
  "key5": "VJQyCcSEcfTW9g5yTmEraEBVgw9JooMkbyD92szXMwJusUHZd87NCiAENk5Wdm1WCTfB24nYSjEyEefDhip6iiY",
  "key6": "2BHd4JyZjGuko9D6TU22mYpkaNSiSLkSTvwudcrsHDFeWbVztidHY9oNPuDb6mhdyRvezVNYLg1e674KyoHKgGqV",
  "key7": "524u6dfZpyc3rhQThWRtiXscF5owpMzLGrAgyU5wBaJGu9dXx5L6Wgtjzfa7LMogDH7dKHiVgEp3hbodxXZcakmZ",
  "key8": "NaFtqFhaDUCUbE8wbewU8QUk1dqGpmSDwpSEZCTDt3wTD82HtPY2VSiEL6kSCoAR7d53h2kRtiEckoQ8o4vTNkA",
  "key9": "3Ns3DhiZTeAwgpzxTQBhybhkaMRNJax1GpQxumt39ALcmUFAfTTDxT9Ji4TVqHnkZCHWyGUVLhtnJZKc7RJNoRK7",
  "key10": "4vW9vwuysoSET11dH27XLqGqPahcVEu8ivXN5GACPVZsuxwdYeNELzb8WDsEvWuAh4zUKbvj2EWAo6HpAg8smoE4",
  "key11": "4zzTHqcvPqPWai6ArZ26MnArw2aL2V7GUxiDYhHebDjb923AYsfvUZxkvS3fpW1JyfPUAYgrpdjXkEBLhTBCkez6",
  "key12": "4smWESnS9T73Q5GMKQ9jBp4UoCgg9Jd33ogonyE2h1ToJtW1eTwWf6t7hiaXb92gKPb8m8C7GypSkcsZYr2wXQY9",
  "key13": "4BAm3Pge44NiDppbv74Cdt9Bqvir6D7XF1JZheku8Hm6nHGwgWvshnVmgjxKfc71yG7aQ7zNz2cGufWudqd5e556",
  "key14": "4AtDE7ky8PzzZxmnqnmLCkjjGFxEVXtLgWAEREza9ELV5NEByzpiUMkMUCrP96G3oTBFD5pVyjTd2k6k9iBhwqGf",
  "key15": "4ewzCZrUFqK9dmVe5kVPpwKddB1d7URfibBLt4kjui1e5sWpcVayzcumxgSb6kWjFEmVqAGw89BZQKwquErK3eCN",
  "key16": "49wtuaDMs1NsYvyXyjUQ5pV3FBHwqBkr5vmANF8YmyckPq5wC99X1Cffv4zMEXxFUbu64EDBeMMyf6zzy4CSK8cD",
  "key17": "5vR39yMJ2jxEgZkBPdXBxvWKM7L7c6wLZwAuLYn62N7jF4ydYpUetBLBGT86hhPcohtp4tZ1uM2cgoBbinUKGT5A",
  "key18": "3zgKzzJkSc3BhX6NwqjVXtw65dG8nauRkC9ibbTp41XLn8Kw9QhZvgexjkc74VRdCxYYJJNtr2Aor6tiNBJ82Pgx",
  "key19": "xeiW9fhk3HkprEDbFm9d4Xtec5zUrA7RVsAeWXya4YRf2qZRuKEWYsYY2vYm576drq9ppq5rusPht8SMNwdWmUP",
  "key20": "61BvqMmU89JJWxc95887a7JgipqZADHs3dfEJVinhnxhMFPDtE9kEH6YJNd2XcCUcAdEUfFMatwdsS3Zc6gGcSfk",
  "key21": "EBKsQP7BHNWNckAj6Ax3ri1EsUXGjMUqxsoJdVQ5dsujt36FntpiwYzr9fm91spi2XysDnsWxsQnLTXa24Zq7ZK",
  "key22": "3gKdNZvBWQDvGNdPBs1yWrCq2M8Z9YmnS71DRNhzder4SfAdgkffnvKQJKsdmkvGvx2TcqiuUfJBUmPu8ivHd5Y9",
  "key23": "3daL98sDyCgXDJmpnCAdkNqhdBwX6nCBGoJ2jpRjU35nuNJQVWfpxF33pyuBeFXFP59otX6GPiyegrfT47hyE8BD",
  "key24": "5MLUhquZfHqgv6ckb3qZPqVEZYR6MXdzKE66xm8jLy95R9PSPyh2SDW4VHyBYZPbTvcSY7PHagG2pJ33vJKT4pqC",
  "key25": "3xhqbSpQFA2tNtJcyZyKj4ZapasFXz1SMQFYdMjq1keCn7bEp89R1ThfzGZEkxWYLN3ssxUFFoCzkB4bjqeyYmGV",
  "key26": "22UhNPRT4BtNmLTW2uGcKo2rKXqBh9adnZGwN4FkMgK8zt2jmdDz8xZoX63GS6HYi7NUNo1LVCRcTTibpM9HUdAp",
  "key27": "2PRDVgvjC5swzWcnkRjfV9aipekG52yzXL3912x35P8fhvjXtX6ft575QhvegaTJhzerNYd5ZGoPrQHoNLAfZNVW",
  "key28": "2wN5pZRzPtPoNtYp9BXYqDLQEtxZszWcfSqdJMXKnxqxfz7d8i6UoC6ehSWERPSjmYhfzwyEexPmxUC6ZwJQVRsw",
  "key29": "5hT7f2gsPsxsWZpmR8EYmvgtk9UWAVEgJN2pVe3LjJnWLmbeAW2z6EWZRvzd1wUZ3LJXuKLrXAKt7KQ2WYdArSqU",
  "key30": "2YpKEYLVrqXFaVPwS4odptcnWWDfPfwAwEPP8iU4hGBZnBFhwjptnD7cU8vdbMwFdaUemYFQ31foXVS6HsPW7ykC",
  "key31": "5JKK8ib59bt5Ro52sRxw3QRoitC5C9TUMjWRHuSnvT5ULuygW4c97xg3CYKqtfBb7sPQojffQ1Kegs9wxj6KMsMe",
  "key32": "3icAwateCxAckwtrt6JT6ue7ANmw9wHbjWBTZSyWYaE8nFJYbdJ7MEsfHFbVAncjBc6YZ47rnSTQvYUxHPnz3grG",
  "key33": "2yhFihAwP3kwCzukKotUrxGw2ymmGemxMA2mHWAmwkS7nYwaweRE1kenGKP79aUgkFauvEEna4Dm91TZwLQRFZe9",
  "key34": "38nS75BRoFYbfqjQ2dc3Hm4M8ruvFrD6AMALSRmxLxfbn2fDYikXfJcDtRBgUWmae8mfK9QZKqGHzvEpt1mwH5S6",
  "key35": "34kRMNCSFCM3QF3MyBJSpvbMGgGJrVxW6ug4ZeTGzVPN4e8xS9ym9rn8BmtaZweoW4iCMTMX5oV1AsaXh8MrisRZ",
  "key36": "gf7HhEuo9f6vpnnn3bnoa8HvX5rV3DE6Np1Na2MiiHn95oHeinaUsrexFDERhQ43mhDaFio1SnonSCKxWiQEPjW",
  "key37": "yziyMc8ka64ZCrjBURoLiGR578scDeVmUMkDPjJ3freTEBhdHJ1dpYYy3zJiZm5JsibDmtTGEDz2dBjEN3XXSBR",
  "key38": "2bGXiBNjwubgZfaAw37G3n8XNo4RGzUtnnzVLQkKPeigjuTsnSEzwe6Rfd6Di4XAGbVq1myoisYKkRHVGsWXDni7",
  "key39": "WMS91DvvCSeKQTLARyK6uhLwL57yBQ8HVSiRkPkeg7v78GBqAaAJEAMywHpjw8gtDoSxoz269T9MWU2Y4FR2gZ1",
  "key40": "3XUPv3zDfae7EC19d48vQmCfWNR9CiVx1A9swStxUGwiZ2JLcMXuyTFCD511XYDfMTspKHw6vzifgjDiTxEDmdLB"
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
