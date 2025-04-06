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
    "33WqKsa9v1oKYz6QyzcTrR7JdX6i3UZJZXojoxFgM9K6met7qV95JiY254iQonFs5QmeWEdrNAorByZKZAZsLhxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RU6YQ69knDdxFmSdLQQcHwrqUYPPpbaDqYwUEPCzZAwHwLM1zv5k2LJqWPm5vGc2qbNMWmpRipkJpSiGVuEy8xt",
  "key1": "3znizkuJPk4o8q2vi7LCK5LrSkRm61iiuTVpGp2ixv7x3Co9zuXU4dVJegWDMajMA4Pn5EMdTt9EUrw2omvMTWvP",
  "key2": "5qhAAmB97MSq2JK8HpaM7YrsCBkw6izsn5bD1cLBd3MXnpV7iDsLssi9414YNfCKCzBSTKjK1NZJxSnFb3LQrmTC",
  "key3": "3VQ8V4Bt76xzpdUgymRDvprpTR43J7j3UeQ9gnj7LG5xgLGge2SaAzgXWVpH3VzsaBoyWrPWNNd4jqzbDbTwWsE5",
  "key4": "8oeAosSDxSrbNM5vQ3sgDLYu4Pi7zA5UGwZTURZjMGHjc5ghEHfa48dw6pqD2Wyq8ji8zonR5P3uBHrrFmXtsrh",
  "key5": "3RY9pDist9WAr2rMSsu1GL5BGWeXbXmQUb4oBpNkyqq2TSgTUFKRnqVb2V3EconEYWSA7rYDhoLWop2AveTNpRZm",
  "key6": "2x2CVYtyRgVCx4YroxbPGRLyx1tqp68Uoi3AhDwe4Fyq2ZWCTv8e5Qmdv41AE7CSu23dEPNTYHsAPGiRdxw9MCzV",
  "key7": "3ay13phLUFie8ukyiU7agrfiDpLwfkuZBxsA3mYhUd1tJZJGjqVyL1SauZkZumVpxduNUNJuXyExU7ZWMuoMdWJB",
  "key8": "4U1siegW3WdVDGeuToPCVu2jHEstPQhid8hoq1KP3JqwKoktmSb6EyBUhe5e9usLii3JbwT112wHoJynEfzLKoCY",
  "key9": "66wFEZizcM3knvrUR4Bnd9wG9492UnCGNctMc2EiJnAjRD9cnfx4zwY5tmDmaB9JjNsQo5vSFGCH2k8YXSjyyfqd",
  "key10": "tSCrZiqEzZwWbM4nnFMCKoixM1QNsbDGPfgvHvd5BLZEPmcadjSwfy4HmxrY7kCaZQm2HPHpZhZEcELjXmP8TXc",
  "key11": "5BzDg3knbuodrtrrLBaVgLqz9irhwPSEtXKTzAWYzgKFkdppCm1presNSxKRwnfVfqvN4pKqvAwRuRv8MbABQq4b",
  "key12": "4ptjSMUex68WTzF88pRJo2GqrBD3Dcnw2kBx3eY85VoevkSTDCsrzxmJEresL7KJP2cHTiWqLpmLUoAQcgyJxSxv",
  "key13": "4TcgDBGsdfQxH9fgLz33LTkpSTbnJ1JD2DManw7S6Rty8WZfjxkQ3iquvL6Uxvz7tQY58DF97P5aRnQPwXPBAZ43",
  "key14": "4LknHqxwbypvMxpMCW7YbyZP488sNNqB8LJe9gubZn32UK9BboWyaxDvVCjYeExcwfxQEXudaYT4Mjz3LQ1UeFEt",
  "key15": "4wXbBBMUVv5jqnotY1ZS6m57nBGc72zx92eSdaZktdpkuKeTV9Kb2x8ay2LanusETXbhq48hWN9P37PspqQ22XmK",
  "key16": "2TjDiRtooo4CeHNDtK4tza1ya54a4udH2JdxXSQCynmoPpDgeKiGJ7zj1DEn7MQ6ABV7PDJ1ttcADdBegMWp8rVo",
  "key17": "4cTjaRfNGjfZw9AXkF1sQJx3dEx5RYTqqqxRCY6orLjoxVVSx6ktmPb31XKiAE9L8yaS8vwwnEfM1Zp63KTJtT2D",
  "key18": "2jijjpFLaGuoKfQf936yF5Gjb1QmG94YZYnmoFeogcFnB9Y7KU9bu7nsdYD6RuxPAkbkQfwdAQYnWXNxLXo56Eqt",
  "key19": "3ykh1dp6k454AyFEAyo2pF1TKdxA3r2N49Fgo2KgbAyuswF6NCVakkeWn5gjJqfQVTo89XN6qat9yQpJhUr7f4Hj",
  "key20": "2VDCyen1MqSyee9sHMtx5namvocwJ19nXausVNQXRXpLe4WdB9kUrZCbauDftWMA5fFkTRBaTT1Wjr78NW3oAyR2",
  "key21": "LcpUcB466zM4KbkxQiqiXcbZMUFAnk9jKQguAv9hHcb3nJf83n9aEMZqA4SQL2sfyCurLEe7rJCcD1ece3JdRUV",
  "key22": "4EfpNCNogX5TFzrLnpsXUphJxtQyG1mk1o9Kdo2uJQTVotnJx9SX9TuvA6sKbwuL54aN7ZGizAyES5aLRR14vnN5",
  "key23": "3SmZzxJionLDzaSde9caWJtyzd51CxhNnr2zo5DK3XQHWVZ4gCvsgVJFsCYJkphGtaJjrxDcSsD9sZaGHY5xFqYy",
  "key24": "QqAPEVkZFvdxwRv69nAhUTZPueGQmcz8SVVzdvXyvCqBCLQGA6ZFHL7SUfgww3HarZaMmhzvsmVZXgP5aJyPjpa",
  "key25": "3SdPUda6Achfh9M6LAjF4wE5aamYzwD28jMZR139x1v7hDNoE1h4yqAdsFg1vvDsxKLbbZH26srGEiDjSq99AwbE",
  "key26": "3aecGWSRLHYFkbf4uCWV4Q3KCyQnPPUt4fN2uwDS7yTRoTpAAUjeXADrxk2hgHeLbPQwmzUn1kEn2w2Y2kfArBVm"
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
