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
    "2pgoP9TNyuNwniHFHzuaaJEYNmEaV3mnYEz3bhG6VJes2anZHM84rGzHbvcBCnxqUquHSNHiT61izk233p6nqvfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6644hrLHgqg4kuofgjJU9XpQ9Z9cfLFRrGQzx1swubhZafqmghCmTvrFpsoBzMvFjcnnbZK2waQH9nPX3HNzFfXk",
  "key1": "2bRp4GaRk3gVDZmB9E526zZhPbrwk9DGBDFWQckjU8r5LS5txNkerMW2RXnCdDoEpUwU1BB4t3uf6aHEFHa3CXTm",
  "key2": "4GQfFeHvvskHqLjLLU8dBm5ZVoa3j3A2wgjjWpPp7tVc69vZKkx2WvHdvzYPYokQn5pfukfRAuvjheYxeg66GooX",
  "key3": "3WhvZaB8mnYht3TkyiPU6aLTbU36Gz9scUZLNzLc7hoLucv9k7bpQ4WapcBQrovAdv4xV4y1Rmu9kNi3MkLTJoiT",
  "key4": "567s5VpSNutdfVxHD8kbn6vnWZXVteUeWFNag4Vq3qg6m1qRMdDecoJp14DvZxt5GFVqbDnYKR39MjCvJLYUaj6F",
  "key5": "6KwpbopwkseLZgpQydQeAorsrNKweZrs9MqaZxMcWBtCG6Y9w9AuZ1WLzyPuEXhejRS45j3SdCFQ56W4hMcwkrU",
  "key6": "5UCkfAU5mEV4b6aa5qPxUu6u1FjezCoC1DAG9KDVFxRcKeszvBFEkdFFxk27ti9JihNHqSE82kEVPexa4X29zDfN",
  "key7": "4fE6Q84uPcf1HvRGHR8WcNkuXHCe45AQfcZd5b3Wu3ZP3PvJQVL48mTXWXAEr9JoQL774DMKoPfhiDgnVEmBCH9E",
  "key8": "4ywkNuBEkR4CiznAv58sErjrrZuF3Jj3okK4NcweCj8K9krSz9P2UJ8yh6mStAf2f2nbxEiTA3KqJ6t4eYNRyPHC",
  "key9": "4itZEH7jQPvNQeRANav6WwjDPjftciEX1RKdr9wXdU4nYV8BBGQ6LoRSyoNb2k2ZhZmCmXjZgkhhingk3iTCKnaX",
  "key10": "2y9UaYKU2VsMPeu9m315vg75JpgQFxJQitEaq3YznfTdfc4TfTefK2xVCbeYY4Nk8kWhxfw836JKbeSXveZQohm2",
  "key11": "3nnr9JwnhnaGndegAd4mR6ftm2aR7YJJgt8cEwYHZDAE6QJJ4wQn1SbviRBdd62EJKKLjZSqoQEwKRTsrbmsmu3E",
  "key12": "2rnSaS44ktHi9cLC68dqkXtpQ3cxkGSU1yeWWa8KMcZTegtyGVfmnd76N1e5oNWeKyu9Zj7uWh4McGP7zu88mBiU",
  "key13": "5SCHTBC89FX7HWdF4P8YkCoLVQKpeJwQH7wV63NEcMFdUzY4ehmxbhpLMEdRWKYcuBry1Xupi4tj3c7QJAgY3mCv",
  "key14": "3tD3JBsBQ5VfM5cFEWKoVcqzSDNSLmJcxDX263jKjDVqKYkGJ5eLp8jigi1q3yVgkHhNLV4u8t86fgTW716GTMJd",
  "key15": "HTreGixTMJFCFvfDkWREZdTXcHz9hRchD8EF8aWHL77phS1kiD91gXAqzpXCNY6xNc4fF2Gskt8s6x3K23hHgdN",
  "key16": "3TvqXnuUopgny9VcVkfBTVpGPDoNpu4CbAYtM3iHUFbo8m9eb7LjgNFfHW3qmLFxrcQD35mUsJotVYpcXn7p15pF",
  "key17": "4LEfKG12bGFYa4UT5r9JUts2NyYB1NUEBx8yDoRxtaEvnebnqmD8A8cre1TxTSYNomKRqWZaCt2C9z6sX6kdGL5B",
  "key18": "3DNT5dcW9hYusV9LBGwQPDNGizWsdbBZc23gcM33H5v8e3G89yRrdTbaU7FgKPSrdw33nRBUd9WV43Tcw1uf4bhn",
  "key19": "5NDVDEFY8PM3Lx93DTdpHCdATFVua6ZyzHN2yq7G7qygGHCA6GNr7cgTcgGyEkmUk2MPh4utVZvLrFpbnm721D6Q",
  "key20": "5jLosSMNPX8CPfGxi1L3kUUuZ9jFputeg9835SfxCTBP7uZ82z4jgVho65iYitBAnENkSCYmKRE4YL4eG2jyLp5k",
  "key21": "UQpQtuyXHuXbAMULfLiEq39WMNs7xFy5aDLMMG1DGFRxWgJoi9wCnu3qkNfsaCbp8bjJ4rsB58MGewQiQAeHEX4",
  "key22": "58KqZbrCiWQUvM9xhjgecmfoq2xfomoU895Td6b4qMCuVnHJaji2XZAczcJe2S9HnyFfHZbGFV8Y8c5afWAHLtox",
  "key23": "5WQ7T7vEzjMtvi5Wc8y4NEW4RMESVyrEBYQabjp8uLptmpMEmUvnEgMWx2kftJkCo57Je8rRBbmbh1UJrMNTExg1",
  "key24": "UF2gjo36JQxHxgjMjyA6kAVfk3gcT2tLwrVQtnC9tUvAhJMiZxU8WBKwckLtxf4XPbhu9Kp55SQHQLRuwSrrRWd",
  "key25": "3G1grq3bdwDcJtYgwq1y8SucjL3FJFyjLV55SK1q3dNBGGRY6Z6B6jyFrZFzZyXnip6wYv62yoUi9BLtTwEbusJf",
  "key26": "38hsx8eLbebXcTJuJ8uMi4Pj91uzvVd3dkzhY8a2iPnpn1xTVHFFjJLRysi8QNVphcfuDAhZaixqqEDLZpcWAeRk",
  "key27": "3MRiBDonMBMhg4r2mnB5XkL1z6r8QFCiae8HNtSTK7LQ1v2CMXNceBNiDtx85uzt9DE8MBtjqYCjkqfu3bkjQSSh",
  "key28": "3wA4w6k1VjyUqyQ2kjvw5VSdySJuYPjbyJZu2moKjGew11RSob7Ydh9yccw1CaKhQp2SaSquBnmqDNfGBCM1jVJK",
  "key29": "2SmKACVKBj2npCwNvYemQ3wJ8hJNVfmELFcu1a4i4NnVJobxzX2KJkqWmsggk9uzGapBKARMu9s12hTeRyqvFuvF",
  "key30": "3cmcKZJxUpkAgksghnszDGsSyMyGXGY5uZYtY8GVQfriS6tXDu7XzdhkeYU9wxBVe5HpSJfE2qRQzH9STfSz82XC",
  "key31": "5QkyWMm5fX5Vi3LdyGrdK2cTHFZmpZF7Yk53tJwn4CKjUrdmWPbswrMd9APMboiMivuwkRbRyEyz1j8JPu5E2rfX",
  "key32": "6JN6vDowi92LnzYm5m549R6AtXMUJycjqHfrQZ5sSTVTXngAmSQscTKzENE3ij9NDXDNpvtJm8hb8ZDamoNCW33",
  "key33": "5xuZhT5ztr6mSRWqAFyGg7Hmap6DN8i2ynYTdSbHA7JbJnVXxWRYahMpb6yUZhC1SXp9uku8sReEHkE9j4ghihCz",
  "key34": "QASbwi7NEgAM4pvt6Fm8tNc3FLfMiRyq6WobArkGmDT4cyLCTYkgVoJ1hFm9HQT8JowthBDq4GkowQKxPoVaWmR",
  "key35": "32EChz4reJrxTztFifTJzaAQ4tzzL6fSqvaBDZgvAKN9GZ5bPFyG8cpN5wwaDLLxJyvoXMxMePnSprscc6imDnVr",
  "key36": "5vLTNJ1jebUd4p3mcSYDdLn9tgJRQ2tVmtFTZFmdf8W9WCjWu9fvfx6QREB5YP4xbCmGEpf9FyWxhgthxtKNjN4y",
  "key37": "5FCo8ceGbbbvivsCzxxaaxMxwZJsQQAXB4m6JNGfNUZjdhLwmBiMs6mRJAqpXKrDsNyfP2WPpZfu5uokFdPiT5kk",
  "key38": "rRtZQg6nstPoxNr5KFDoFCiKXY9ARz7GsaySuxcoiJxaLSd4byuxTqXpYR6oSo65pFTCL9bsKmu1FuUJiutFDS7",
  "key39": "4BfmGPtuDWZDTrgZegXAGST1N4usgH7UioEHP9caUVyTyr8TCngusiYxczjfe82bLSWKspkhxoSWejf9zFu7BRQr"
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
