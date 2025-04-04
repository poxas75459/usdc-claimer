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
    "55dcYkn9xzoLd9kKezR8X1iH61wUQqxpmiwVsmioY2GTZ1iT9sd4WALZ8SN4XdKztPzK8XmvLfHRkmjjV8L6keTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oyF4ahiA1mEgkKbPCKNkgsGmLn8tnaNGCx3B1eBNuntJcF9ESgBvnepH73CMDvngpyQSToqjXRsyCqz1XcLq4Ac",
  "key1": "2mqSC6bhq9rZgSDXSeEqUcHvBmc9TXJJK5aCRNC5RUvm664U8dDYXVo2APfKf4vPCtCNUTr8CamrBVB5U5M5oxiH",
  "key2": "iJiDLCLeWtYkxFW3b6sDNmqHbtP9mUPpYev5qwBnATHzU8dYM6mBj6HzWg3itVZ5aZcKgxWYtetuuFFhq3qzM2v",
  "key3": "afFRMJiNqMAPSMXuVfKCLsvgEWbYLTfvd9nSsrDFwBB3UvNhWSYBZEqbMk8YpTuEJSCqYAPRxb6XGo22qKoCXre",
  "key4": "4JRrgZonUa6SGjcmnmcAAoGBrzz5431wqy9Q6tvFL3y8JejDL6w9gA6aiD4v5jhfRS9m3K5LnU2QrhoUWoUUPhzo",
  "key5": "4mF1y6fyyk4yciaQLN49WPspEEugGEapkwCUWwAYddrxEgQfFQch1YnDqCbgKG954avyFFCrqUmiR6TkUfKxhx6m",
  "key6": "2eLUekbRYDvKKtVDMFnRay6KKZ8qNmZ5QjHKrmWjtJXNv7frtRftijQpW9E8DF843ep39eFtALVdXGSVA72dePj",
  "key7": "57piAKWFF14bbexNQ6Gb3h5HtGfWYSXKsm5iBGJ1izmM7CCf1aMMWbsBB9QpT25nNfGhc2upw3ewpPpNBWKbzy9d",
  "key8": "5Ag7T2ZUdWuyHuBEM1npfvFTFvoGRJkh8RaEsCMs2PKmf5rBCsnKckNEextJpbxK8PatodwckaHKtSRUyxUWC72h",
  "key9": "5CpxgXJJZikpfnQiRTTqyiVF7ZqD46YpdPPDiC5sGrrDpcJqf61QamikA1ZVp3chvUfubwMY9NK4J16PkWGurRX8",
  "key10": "5fUwWLQaMsFxFzJ2F7Dg15uj9GFZAozHfoohznaTh2HjWBnVPfzN5utTsZRUpVgFmxvuD1XPq8y9drmZvGa5zpto",
  "key11": "2Aeo8tdDdLimhzD3gNo57YAiDWfG7fpjtqsSW39xdVzkevETNPnU9qX5kAQfaNYAmmfgEkkYB64reozgVo11cusL",
  "key12": "KZmDHpVB1tF8fpzCqe937wVEAxvP1j4dPJktVFomYJwSNJT4LRBTFCejwpEMX7nF7HFB6dikQCbTv5prS1KvhSP",
  "key13": "3mLt3dbbEDeZLGqdV1V898ooWzm3tmcSJdK2fAQo6Wgg1ctfmRyXd2idmDgqewm22hU1BP5wVtC6vitvLXo4y7rw",
  "key14": "4XrJsTeL3ecCYNzoEhrooEMMoM7gj4RohTbqdA7qF4JBaKUjcGrfX9zf5qxEgrNfAm7b7RCM5NfLXKCGKTbxVpRu",
  "key15": "3GVXY5Zva9v5DPHawP91GFtjVegL8mtwxrGrnVHLu2CSER4vXhQ2xEfJ5pVSbx4RDEsyAhzDTBAtouhPV4hpTrCT",
  "key16": "nRV1nVTTdwwpLJHvccbBo12JwNfCM52eWjt9Dyhd4uxsegYobT5zXAzRJMeEkzwqP6qzc5zVZ7C2XJiF9bdDAXN",
  "key17": "3ZQfB5d3TFVWc1B3azh3uW2a7BwwKYpSW1Ywakjr1M2z7E8QPipCvwyABqHRoGVSpoagQP9MjEdDY6zAhUo1njCw",
  "key18": "3YxVe4KnvMneeWGyqC5LSma17QFEA6HgEH31VpLQ8un1TGN5jMMYmNcEaBThQ3oRV5pQK6XdNsdk4jtrCFJkVAwN",
  "key19": "5ntoEKi6ibKSRrPyozzvPDBbfRFYzHfu5TXBzbPuMJoCZieJFDdx6ok9nfEYZvbos2K279YpUZ2Xa1MPHQhSvNjV",
  "key20": "2uUXWjRNZBMn5rBrDeBgyTXxQhLZK2cojptaR6XVtmNrmetL2wQhmyYum86CAiUMJziWaGuy2H8dQ7G6vroHXKiu",
  "key21": "3b8Y4onCWQ2DWkXY262seFAmRtcHZJ77WNrZwNPe669nKuz3ynmSjEVLNR2bE7M1H2Xewf13Z1mcDDKr9feX5C9c",
  "key22": "4FL7Cnmerzn3Jq1g7fpWzYHLD1LFJTRuoi75wxsm8p8vKyHtQmGZpArmMSzpaA9QCMzcooy22KTae7gBtgsf4a47",
  "key23": "2FzrbiGardTjnpYmbgCTgt3ATuhBD27GbCpQkfLeS3Vz2UAt6d29W9oDxuCZaazvwfnQgTsKmoCTTi3en1xX7VKs",
  "key24": "5MigtqLRbTVXCojEYQyF3nrCRW6Qc7vHodQMRx4nUMB3NQFbe3UQ9rV2tw7ELqJGZcbGPrpdvHC8FNVqbhGirmRK",
  "key25": "6gZ9He5HcysoWWv3dHLpTTZxqheR9AJWPD7TaTzFP3WXSXjNXwrD7RLhew9uwW8azfqRYyyFu9PomH63GHoL7QA",
  "key26": "4esLedTfD4TZvDfJxpdgzAYYiJdaVZFrjoCGEyFDG7ZQKiyDRRHUWYbczvMe4JJ1FDiSg57akiz63DE7S5MBmvM8",
  "key27": "3EahgeCxBXmHakZjPadVW3E5qFWPiygEkAWNazRv4tRH4Sioatuw1GS7FWeC6SmB3F7Y5f3hHg8LnpZcE6Ws5ara",
  "key28": "zfzEKhLfdhbtEtaAWxM9ikS64XeaonrF2oCJ2Yopge9ZUgVrMwYnMx1UiMZJr9xnqiYAPdjhQZQUzBGgJ9hg1H1",
  "key29": "23J7CXrfvndVPaFWKqQvso1hi5TfP1ubZSUZgzo52Ki9BvueWF6KcbGmdxzTXGi7usW3ijcvuR4vhHuASWyw1M3w",
  "key30": "JVgszXzPfYN6zhWMzPyq1PvFWB9tNhbHBc6vSDapmFooML7RQhMow4b4qeWfbvfEKh5R329mVTEEJ2dCxXpaPkN",
  "key31": "3a4XZSTbfD51AjpASHNUHRD22kkSSuJ1CjJQJ7XMF3QmJbP94XLR35NJpQdCtfEUt6go9jyj3HA8c5EW1k6PoVrm",
  "key32": "NLtgqcL24ce3QE9t1okCGhVo6DzF579DYtVC52oKeS2VM8gLz4vBY3ki4MZMz1LuwX4mhRwzE9wzjhw1o7XUu89",
  "key33": "62yceiv7A2hripfzjraATwX2Yk4Rw6fvEN2c39sxRhwgpUbK7HtcdbrSYkGLCoFfPDQNCivuWoXLEmo4VY1b1igM",
  "key34": "3yYMBcvnjevhi7rhaDXufBMFNBmSRTzj6fYJSVGtegb6qoGUB7b3Lv8oNKPC46juTE5ww7HmMYBcJvGyyPukcvgT",
  "key35": "65VC99oSqC8EySrPTTE2GJosKmMAcxTNpV8gDTj1j3yMvUtcfaCQQ3QMA7L37MBuDhSyLpJQbkBUkGa5y6kRNnQG",
  "key36": "4BNbEcnqVQaKRyjhts41hwrjvnKxzsncwbLyTTDLw2h8PUJm3Voqv1fo66SoTdicRAajxBXRSDNEqZ2e31qkD1m3",
  "key37": "aQ1LMA7VWq5ZqJmwHNcGCT1NDxXaTuN641KZ46F9qbhQbu5VprhsvBX4Az3EXfgWJuw5o1geFzxZYmdtR56utQy",
  "key38": "2DcKYNHwLNxRf7R4yGntpoyeZRpQmRQdY6JVJk3L33f4mXztiZwMZZBK9yaKj4RVRcCFWQ56266YGHBj3HsoiT6t",
  "key39": "5zjCEmzDFkYRAL8WLyGsGLtfUEm8AvXeUA7WJo1xKYHAZWRuyeYKpUDyjGRHG1ZSWwGiDUdaqS2fnh1idotkrboV"
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
