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
    "CRNxoQ98cNfxChyAzZY6D9GVGMedga6h9o1hZ3rTXzt55gMHC3sHA2wLBuurj5cfWdsyfb3LxMcKYeqNJpdmnz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AJsrxNnYZ7UEggyQoW3z7Y4Hp67J3mUFXKrBmdKNRR8eUREjfNBQsejWzM7ZgjPXs9652McyY73eLD7cZ6RYjSf",
  "key1": "3ZUYR65Wy7y2323aMQTiFkvs4ktJxFazGB9wCHCrrk9HmL7DKquFxdGvbJTrBVLA6zRcYXk2jrTFgeSaHVkMKxmM",
  "key2": "56D5zhSWRh8qKvEWZ7mwz2dVQNudy1M9CUdigY4b5FvChhy51G8UtYUDVmnyEWZhZmTESC7gKMHz24it4FWEZ8YW",
  "key3": "5QSQJAiWDbdtEDgmjXdQ6WQqSHvD1HbuZ9rHZDELdLgrQUp1pbyuHQ3wM18ZmdgdgEBF1zMJzDJVUBgaf5Vn5cFn",
  "key4": "4Dq7mZVFKfxEin436NBg7FMfTY4MTVjecpcqSco2oJHimG9JfRkWtpNikgiyQxkBJpWowqWbt9DjYUZodPkqLg1b",
  "key5": "67EK6yc7rj95cvudU41WnPnVhRbzGCTboRgDGbDk5upm5xnBSDGQAnhDNP2VCFPTKDxfeKctrgNF9arJtu4j5rhY",
  "key6": "2TWopMhsqEH4mQtshTieySYqKkURLnQUrhYWZGCrYwodZS4nFjSrZhxb9dekT5xesxSJJCaktGDubFKxkbUnwbgJ",
  "key7": "59Lb77T1ouXkLVYEnqGkjaNY4GHcaz2zM3uQNXX67BU8eUkBh4uajfFC5w4up2UqnbnLgMhbxADo7btdQ1TicGPz",
  "key8": "985B6LLt2zFQtKQBk3nzaVbHRGMoBoxPoZv4WiejQwFhq8ZMf5w4YvedQTddGWxDd6pFyMLAJMeF9WbQebzZGGf",
  "key9": "5SNoqhu6aHkersksakfSDTWEvd89xhfp2jWiLzvLqrCEweVNu9vJwk9Zcx5wNxTizejTZqVV4r37ch7cmDf1HGV5",
  "key10": "3kc4g5E3qrQhk8pwhbLaHdtpkbioiHFfxGg96fFRuEmPPYfLThEFiSdXxmHYMkTQPXunundAtdH6PPRWUKoDGwZv",
  "key11": "k946TRFoVrhrcSwp8duJkUaq6Xpw4meM588YMEJXXrLsyJQYhkDe8dayn46w7tM4bNy5iQLzc9YGo6J3ZAdS5HX",
  "key12": "415LULsbW1G7PcMzR7LQje9Q7Khzywc7fLeiuhhNbbBGebjeLNJzmzbMEFmphAY33qa2yC4TPsMsK672A7eErpe4",
  "key13": "3aWqcWCQLCaWVnmvVwKcUqVhw2Yg81gsrTMvSHRx6kop4pMw7w5E2Ybk42b2cpqKtJuqmhetkK37dpVpdzfUXNq",
  "key14": "581FtqNfF7K29Mu9piCjaxRUQpzJCFVqrHFqWSqpDzeDsqTYuXWGYvWMk3HYg2jqHwPN6m8qCnXoDyb4d2HCdCyj",
  "key15": "8GRiEQnkBeBeTq1WGru7i3hZStcQ4o34EZabKvvt1DJpEuBbprFMS5uSNz4gAmdpkQedTzo95v2ZEqetufqpVHk",
  "key16": "58gdccz11KEuvwxD5cCRkNzahpf8fFZYQrSfgLoGVruVKkVpfXJUQj7pFiqM67qPRcnH2pJ7Q14PJ6XcHCp2KxXY",
  "key17": "H5rtat7D5sTVkDGVxGrKWuRB7qdQkm6w3FM4ZKfXXkZvAPSUR1BNJQyuhxhmUnRcCM4jePn2baqErm5hHD5UXbM",
  "key18": "3sAcfBAGACsSuMsv9AWjT3nQGCoiQc6r1qtYGP46vqJVW21H3Y3qpvfKrSBMm6aH2PXAzJHjP3nwQFxHWz4uJE7G",
  "key19": "3PtdccMEWNW8uAiZrifHz67KoftDNygDuLrxTkmFxoixYWexVKXnAk2QHSV4dn4e5yS6aKoehBQwGFDkfu7UdbXr",
  "key20": "WS8Y4MYHJ2Z6kmCzNghYgWkSZh71vVbiS36NXw3puDJWVN1aN8Hk8WodwoYyJffqMfyxvuoLXK5moXWJtAJccxz",
  "key21": "56gP1i3gvyksvMqYGr7DFBq22Uj9MQdVwAsZpUe6dk32F9eFRSNnxxAKCwsnxbDkZhVfcVyQDPFh2DuGK78khMVj",
  "key22": "3oLjaH5QbrAZEiwHUTYG43dXMKu1MCXg4pAhsU1PUa8uBaNRJT5VfWL6BQqUe8QHe7QgR5qynHY5NUN3Vy3aD8t7",
  "key23": "5JmMWtsw8tz2oR5DtEkWAkiEqfeWWH2LN8WqXWYwA8jTLbq7nGnXL2kqWEPd5YXGu6c65pnhLi87dzq3w3WA4pgX",
  "key24": "jkhrY8VZv6fSBiSQDKmcwTg57uvURoEKqR53X6Yhd7MWJLQLAE7g9NoXcBb5PU4gwpdZtiyLSfjBB1Yhag6gMPh",
  "key25": "2t11PEZDnAztc4wT5X1RvjmY6VyNNv9nF3aCmzhu7Ug1DSynDLgUHW7GYoL58ZQZnkCjES5k7zc1PH54jHQxMpRS",
  "key26": "4rV5btSV3eWA2bE43wEWSZExAcNRh8xM9tVrJ3kfZdTA8YA2LuuaQ3DSSUAqXnB2y4874Tko4J5pLH7cisymo59d",
  "key27": "pXs66pJp5ePHvohyGJ3Gwu7Cu8MXwPyiqNofE4BAX7xeDgxuysiAvCxvfDMM4rFW9oKbCGDgX1GHUjo2fCSxyJz",
  "key28": "62SS8Tde1rgPTCrybvDAwCZx84pMG41TdS2cYDRxnz5NNuCitn5ekh544EGTMnvkgKFU7eTDGVD45HJn2F7KQzUr",
  "key29": "2MCCXnnGs7mHqDjdsf7AfFGk9jTD4edoLJ8Q2ZmQVW1kYtDq7JhcqvzXRonK3RUJM4rqzUivp3HuPGPsgge77Yes",
  "key30": "ayriKLxjQypKJYjoScx4XhyxsDxpygQY5Z6bR5fFi1ZZz3oW5S7PaEuX9Yh3A1A8Vs5eKBVo74aosNfg5MCTgq4",
  "key31": "2TfEYuAacBTZ3LQSYZ7kNCZMyPySaj7TGqMwPDGAZQSSYfTH9MRNnkxTL2MiDHrDiZgdAVi5ybd89d3uR2qxadRW",
  "key32": "5cHTJWnSYzwbFoUDtoFebchxMAwrggxGQseKVnT57NGHmyum8MqFNK3zkHdCL1CVHQWkUH5QCA3PhEwMYpeuAFwD",
  "key33": "5KfzQTdj5JjSs7Xg282CcefZj9XBvdANHgiqYBRouTbjbyM74oAP3hFcF5RF6R6nxSSr56tpvK7pr5EGewTHWEjY",
  "key34": "53og69radBag5WqxDb94mveC5mPgzmRDKz7pc3DFK24WWWXBAKrZtY9LWxofp2iibwEcYofHSetfXPpWME7K9K7V",
  "key35": "5Qf6iikaV83XekxRobRDXBcZeWLvRdhjZX2U7mYTuqUHvm7mgwx41cq9wN4dbwoxqkKNfrMBiTZ7ZJymjS6NFBAG",
  "key36": "2fFFhrkfHVewbxnJQXxfkopYmz8B3CKPnaNy3WfJ8CGV66xUcTrobuL3wQUrtfRLfiyVd2wJpLq6s9fTZiRywn4B",
  "key37": "2FixEJg31NTaoMp55kuaQo3RvPajP4NRxRQiBmc6Z4SuNC1uGBWM9XSijXaJeB72Am6UhoQ5gQs3RdxHyQHyJkf5",
  "key38": "43mvTHdda8wLLRvSTXGWtWEheYA6VsnLNaodQJwCQextSYh6UMrsiaEPP76jkNk1prHJrvh8F53RbSKw1onbDUJB"
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
