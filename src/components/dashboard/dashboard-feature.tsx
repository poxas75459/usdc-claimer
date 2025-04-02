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
    "3jUpCggnRBU96mDEPBEMAb3N7QsXafvhfbomLdkxt9EbUn5QDDhuNyFwWEYSUfbWASDXGc93VYTMRaeLdpMgbNWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GqVp1nQgvFxjXH9tR8qqjUfXtPHvLkRJNzgxmJHfsj5JMVEcwHrhv4mevZMmzFdjVjQPFC3G9Ez66ep2Eir7Dcw",
  "key1": "2VnPTTCdsLwNfw4k59NYNq9xxA1JMyrUXhJhfSzNSd57TmeFW7e3HuKVhcAuGJdcVs5raGqkaXJSTFijvJJZALGC",
  "key2": "2TvGwfKw4fRFdcHwqY6CuVEeCahe9Nc1TW59KAjihgsFiQubwKX6ZkvxtAUkQGXYuyx9Lj29d36qVFdNdvm6bKn2",
  "key3": "3AQLsS8axhUfRQjxG7MfTsLFLQiC82qbmV6S9QgKJRo6g3bd2nodVPrsCKQA9hSmvvSM8uHp99kfaXdDNhmZJohV",
  "key4": "5kqj2GSDPg9tCPpDbuKYBzMqQNDtZNr7a98X6daoyQVCUNBmbgmCzhM9ssKj7DH6eMbuHcg8buaeh3WvRvr1oVb5",
  "key5": "5RNSa51pWmuM6GDt8NHEgr4TdyMvu8BC5p4RZZsaaXJKExMngkeXK96amzvY3K1i42jWuMWocxwqkvMVtrvL9oVD",
  "key6": "2ycPycqLMs7ukYXujVnB2RakF9c299ukc6NwMY6GmF5rmxrZfjAREqp2BVuyBvuxBkyW9XLvrvLEkLRPFPcwAsXW",
  "key7": "5rj7mjMkZooWmFshyEAnUaL3Wd51tuiE17TNVZ5mUNQFFJZWUHtB3jZx6cLqD9nZFqvcivQsS2xU56F7giLiDwKK",
  "key8": "2eja8AkxHtp2pUVgx7iSv3BSJNuzrGNkMShbryE2aiXWUiQYauw4Ss83oe2G1sPVsGfHmPpeQA32KrFYKZ5qqa7o",
  "key9": "5PiHXsLCwpFpSywn85XSF3ZNur6nRoV6jk66C2h7UsnTGimtVT4hdXMXrZtaiDE6GvKJ6qPBM5AS1xgC45L9Yswm",
  "key10": "3rhbfWjFnuCDWr3poajRPvFV4ygmGxeh6hxS91aqWamsJB8rSFr9EvajCm5UuwHMwYCwPHAkQy4Jbyq3gPkrueiY",
  "key11": "3pPWFP7y6GpKSTK2m3d7LZfQak3RzBhoVfWdHvJ936Gwgpnd1vkafrQ6QfMMusrqP9NDQRdtj1h3kNM7YSA6WqnY",
  "key12": "4QQX4AdPYZdUzoR9GpxXET1p4H6iNiu5yAH9XmVZnSWYjs2TmUfh5ybhu5jJkx99Y5Wxo4u4egXt4ueGoatCHtKj",
  "key13": "29E1xSvLmjwmC3EFrb6BB3Xptygzbe1aDmoQiEJgDNonL86MJBa4k1Cz7mTXcpZZhzzKWzBcyvw3wM18m179tjuZ",
  "key14": "9e8MAfdthEGT4pd5yLGUzBhDGeJRifMkFBjWG2cWkcZhPzbSZant3L8doX2w8AtsXG7w3wDNuj4oFLyQRWcvkuf",
  "key15": "33UErRGBjivFZcUNnRfjC2fgaVZaxRttNiUcP5xYYdK4sretTRrbFxJ6ypvccTQNoEf6qc7LdfoLP8JSk9yzY2fE",
  "key16": "rUS3ukaQpbUSb2tpn4B1oCwAGmP6ndNed5MFZH9PrE4rNMsUjKPXJeGhHXiqjK9v9CVZmmu45fer99w4Q1egXKS",
  "key17": "3wJ6deD4SwF5FujpcUQfmgRe2SQ1oCaQc1fbSHqLCghNzw9sTSjjRQP78jfZL5TrKej7wYJWZEhNNMKnty4uXCDC",
  "key18": "4MTGg9pFMmnrYpyrMj49qV1KBhydWVJ5FjQtEowpecan3zgeJ4Murayw2L4daJVhvCbvD2XtZkdeiwojPWsFDhG7",
  "key19": "3moNzVgUoULLyFHKwgCR7ihzSsn7pMrpC4q1LjAtXTpfUK8m879K8sfNqq67U21TWbEiRUa3kVkg1quVYvCabpP9",
  "key20": "5urQgwc3tTdQLSy3JaxDGna1s9k9JWUBYnPjjvrtYNkWJpBh6KadSXtRNvZdxgoyXRkqpTYhghndgusotamFgth9",
  "key21": "3RQbuWxj8jy5FXm82dsDyxocns8S1wcKih95ZW7usXBLdLVsP7YoJcCqzjF3vHW3no4ABU89eBAaha1AQifiwFBn",
  "key22": "4SMFZbW5AZPjhXT34D9bQKsiFS62oJggeztD3Y3wGauPyGm6Ci8KSjfidseCLJ8bopyTvWbfchDDti7BU5qmcV7t",
  "key23": "28LnB4jozve7eD4zBAFcBDHeuLcXvbXovZMWyx625MvpTb83YBMqKgJxsMvHAusPTu8Ykkkq1J591g6rcn4oHBVq",
  "key24": "4azArgN5Tv3D64tXf3PJJ7JKf6SfkQtErqY1eR1HUzvdW3QvfEadniYX5AoergUThoQ7rbWTj9i2CN88EPinjjRb",
  "key25": "5FZqp8zvCcL5VWmfUjrFF3W2zUy7hkosTGsiuXvcyHKs683an7xaN4ReosTH1tc62VrPbvXQsa35BahxgRKSS1UK",
  "key26": "2Y8GuU12DgijXXtwroFoxXmvYw3EyX2vBgEyeGmvUgeNyFB1NkejurmrBrVHPRFBm6yDLxC4udKzuGG7yeD2emTM",
  "key27": "5RFcDAsLgT3p9dUa1PXUP5vee8ajMBrgYGHs953XzzEsD2paAxKUTed8gSzYkGfurGnqM67vwpxhBbp8JPKjvLCg",
  "key28": "4Z3URswfunXpSyANzYDCGTXYYdsxPfqrPYhZiWEMZYXrfFisfMiBTXw7z1mCsHrdJmnBVt4cL4tnGtD2vgnPGgJG",
  "key29": "AiYZpoDkyhDna8aPkvA49jPScDsCs7xnqY1ETpmukzcgRgMydSsJQLt5s95QeAabiRGgdsEkwz6yxyqmZeDz6TS",
  "key30": "4Ko15LXEx2uNKZVX9eZdEbE5CXjJQrExRwbfx1MUtRkGcupo97NTV2ZabKfcDpMCD6s4n1SpREZPUM7iFViEx3FE",
  "key31": "4Ev4KY5n73Ckg4eQ9du4Vurf2xuHu6N9ZwJ7zV3UMMQDiW1auCVi4gQrtEWVTcTVREDyQs9tRAto3yETFZmusdjz",
  "key32": "3SA4DYunGj82ktmE2oGWzyWmSP6oMLsc8a2Ti9dEwiuR6RhXjaNyf6xgeQxJvfjDwNhJwd4np61ozLT3SVdFoBtd",
  "key33": "3KKS1DioGg9K4Egwm4EaoMyr5syNhP9j3NavsntsyPAqvQDKWyrNLieVPxsUVfWyd4ZiEE94v6cfwbnwCMxyFdeA",
  "key34": "2krUthqdVLPrhtJ5um4JvPHJN4jJNnkPahxx3oufb3pysc5YAzf8SyBSnLcmmSVMKmZ5rU4xwMJBi8KPTGJ4x7Si",
  "key35": "5FXSPyeSpBiZNyYuiVC5YhaSqM64CUybbbqZ64KV9cnGkuNJtbb9Jp2ZvaojEkhZke4hF8r9G2zxRjMc3vpnE2yX",
  "key36": "2TLQ39AfbnrnKtazetsmJ3WH2r7DyA2sfF3RoxuVxWGB98rAzrH3fHyDPNBNmqvAYk9SRoriJKSM6cTKw2FYVd1E",
  "key37": "2HbgeppqsWgVQxLX3CUhdxAjsyx3fHqBS8SfRSxZQx6RiMD5FqD4Wh35pYuGCTUpNQ1KzUECXJm3kvf4FwLFQKrC",
  "key38": "4N4TparpRSUWxAiXKzUhtYwDktLLEWd3PjYyHwLRvFKMxJguEuyuGEv4U4QnGpNTGTtzPLPMjeCzjPu1LRNTyJHm",
  "key39": "2ktXitrHPjhCFxEnxmu5X187a1vmtRvkgxPgBTF1kLzmB4qjtkCQDs9dwRNFbZykPRkMCehyiENvcm9nyYzGw7xj",
  "key40": "2Jtyd3YtTj9bM1HjjZuuyDUTqJ2bx6nzHNSHDmr4fyfzAaUK4igtPFmrFNto5ee8G6SmhC37YXbaqUHqmwqwNj3q",
  "key41": "5ndMSrCQKmrqEfFoAp8A1B3jWwspdDCM1vLer5WccdrVuvCxDXguhZsDHQZomE8sPe4DY6J4TUEJ12j8BXkE3cDy"
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
