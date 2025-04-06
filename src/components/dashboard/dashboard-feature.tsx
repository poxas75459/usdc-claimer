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
    "4kBgETTQjTMTHmNiVqp3SwSWDeDsYXe2YDhtVREwyXhRV5QSLUtwiKC8KHaP9AyuFxWCUBntMPhCovNi6kYZ6kpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R5ze8KYpHihea5YECYggH9LQjmaRNsNJSooGYjizrcfrNh95w4XbniyrnZj5es5Hnx9iqtSsepmjM2PU4SZGpjd",
  "key1": "56kM9oWeAvox9PCXcU1brV7A4eLKW5WSQV1C5KGqkF2D9Kx9cZ7WtVuGaUKsA5XDj6uyqYEWMzaZ4ELoiwWCrSYV",
  "key2": "5Q7vQ7egippiF7arKUnM6JEvPUU9v4QXNy3Ho7sDtrsXZ97ZyPAdwZtUBumcqtZV1X2Rsazi4DwCdfSEzdvT3MXD",
  "key3": "4Fx6R37kpVUZB7r5RAwbEZt35KTCVbondWxdgHRb4K7afcVQxMBui72ehg3QEZtTRT5xmXzpPtkdhAuo6TWUgBFF",
  "key4": "5DGxhHtW3Y6WmsRQwxUze7sLJEYocFzqmZeouD3Su4wknGS1nEuVZKaznuHAMX9CLi4f17HN9CGjvvqVv9eWT3WV",
  "key5": "DGYYZayQCzJkYTGauZC57UKWHqFtwkcMfBS2kU8dmWsz9XdFiUb85uiLBwi9BU18b5HdPZt2GTCZeNYtntGMdGq",
  "key6": "TKLeDEJkBkgdhkjoHWenHrT9S1njMDdE9r1681TZ5LTd741yY2TwEs26y7ByS7WZxQ91QgLwJVjTNxuN9i3Wqyi",
  "key7": "7bu31arhYA7pLnbh6oLFoi9rtA4kC55uckH51kD5aLXvnwQd7bF5iwghGaNeffJNgcuSThXZaioSkMjjxB7z2S9",
  "key8": "3THyKkR9FPpLp4xx5qp65CQAi6QoA11ZW9GyzJaYXmvaDftGpFWph5Y5ddf2RQKmVSTUzwM5W1pRKLAiXKdK5TRM",
  "key9": "3TiL9t6vrYesRbBbKPCQV83o9d561AxexbV6FXwTq9uktUHkrZUZqcRJPk69yAcWCsBRndukqKo17QXnNEX83UfD",
  "key10": "2DKP7n8p3YJde9fcKAwjWSCu1ZC7Xz8QBM1jYuZofr43L6ze5dL8kXLd2p6Ex5fT4c6CU8gD9xBT9N2WpxBhH1Ny",
  "key11": "42bycwugJbzmu69WgtcXwQ5WgoHjCUDZsEhQpmcDEpPWGSptqLXg6LyRYYzqGrn7H4o5yWETs4B2vpAeLdPwcEYZ",
  "key12": "63R8WfspZw3NTjaLTGmpTwfGQjJGntQXont56Gsh1zoP9gGocAkJyEWG2TZPmkckBHSX4EsFTJ8wH8Nh8kJJDeq2",
  "key13": "6mG8NNEniSAqDPJovjDFSiB5mG2tws9S4QPfRnP5QzvT4wQq8oBn5i4ZC7q3A4CAvmmMXzmtoxK81LEQ9JiTQfG",
  "key14": "HEiGRBmmTD4nBEER88ozsvAaGSu9bSGM1ja96c8KnD87jPj6UMvGVQgpRSHvFsQfSVxu5rnqA97dm4Kq5kBpbts",
  "key15": "2pWQw2EvbkADghY9ZQ97PeUAf64rHFFWdYN1JMkFDXCWHAhctVpGSr7PuwPCsLsWsdEUksKQ21q83ZtcQqVGkUZw",
  "key16": "5456UPhcTwS2WeaS2ogMpGwSyTkBJbsG8ft5ocND9u8AvUq8cBtk4GQniYcqhJFwvh6FxGhxKHd5BSktzmfUdG9m",
  "key17": "3rExnGpd8fDeM1eTutvyfMBupGqBY4kXPVVKBgYRPRQWBNAvAHWQN4KArAGa5fAV9FzKWVm16vo989ARWzWJ6L8D",
  "key18": "2py8kZQmffoKG1F2PQird1cmijn3jA7z5yfwbx1jgHyNXMsLpLRLQeJiYwMmsDdjX1YsVd28Yvm1Bk9JCghaV5P6",
  "key19": "A36oRJHP3oTn66dozZakqhS8p5xoTnmzVeDBanbR4tGGT64qC8gkWzC31YzwvgbCTAqpwyg27kuWjMQnXuthMNR",
  "key20": "2eaqmijdxuq9bNptdQqGDJFHgG44gQpRA6sM6UQXvRrPV1gWRzV5p9shgBu3mrSabAeRUSGAoVxmHu59y7L2nroG",
  "key21": "64dzC4g8boDMBS8jJhK8Bwioa6yN4bHm2p1JzJDBgeidtu2igR3Wp1iiuz2CrxUBTR2d2B3F64bvBWHdH7prpM7j",
  "key22": "4nDv4DHgjbfMqVg3Qrmo2UapQaza2aTQkxaWq3aQCiKp5qFXpyW4ESRx3dAMrkYTXZeWprvgRpQFuYD2UGbY4WHy",
  "key23": "4tSyBN9b1oVAsuu3CVa8ycNT4FNkpRAyso6mV2y5DudKdC89kCm4nqJdKZcrFNZQy5BDi1GDXyb4Bune61BpE5yN",
  "key24": "129Ueka3oeujBgBP7mcxq6Lz9PnyX2bvMtoKVaoULWjUb8UyY3cEt8YJ251x6Su5zSBEtsJmkgtoYphF2zr3xWhn",
  "key25": "zDdg5K6U96p9yV8xhhTQfAfGaE4ixzNw1X1Exdg2QdRkpGWFwtLsx1t5Ku78NKWUnj8CrpjHEhZsqQynH3zVG77",
  "key26": "5G2nB9L7pYpon3UshCwK19yBiGqU2ABm9E3ct3fUTeqQzXNyup8MxvEhGW42gx2jggy8sykG4N64Tnt2AWbURZhj",
  "key27": "4JWctbPFejhNdXEEFgT4cyHoq6pxcxtPVJTdLEDfFLZmQoBoTFmkHzegGvBWJU4meAmEpXA7pY5uA2kterf3P5MK",
  "key28": "5HY8kUHpSimUR47j9TvjeMdkzbK24BnDvLyhtcVenLefcP5Xar4BqgQBLMtZkyPuZgGY1EiNHw4c8UehywLVDeHF",
  "key29": "45Lpv6HhztQSHGoMFvyjiYhMcWPBoDQ3EH8QaGhsE4jjvSKNdRCZBG7aJwSpHuNfDwXtP9eCVDDpyixM5QYBa3U2",
  "key30": "2ZkpH8zWi4CzBPzSn1t53hgfqcWe4RaXxb6nbveF62rnuatseMZUhckF6BLiGxeKVvucycLvZ85ayi1d6YYgDZJ7",
  "key31": "48krjnHdFDMmQoZjmErCWUHRMsvsX24YRaa992mHpFdgLSYyurFnzN1UDk4L43drwWwFcLfvM4zEXWmVmFKnYL56",
  "key32": "5i37GKeMY1FzpjQbAiXFhjFP1c762rUyXeanFv6cYbw9kr5dQGp4Gvbx91upEXK18V4tD9wDH36bhmBk96huiDZc",
  "key33": "3FUWWDrhonuiur9mz5kMDrvHJk7hdrpMXhKcKKMQHUxqs6fxMpk5Qpy9RX9P8iMjB7UtGKbqvSmzyrqHCLodvetY",
  "key34": "DGJYGDAoCWj1mNfit33HEFvxCMpikAe6LJ5Av5zPP4AiXsmk8Xs42ETNQqjLbKoNNo14Pc9fkNK2P42KXhsHWJf",
  "key35": "66SBMu3Kqg12ssftaSC3ZDWoLcgbeEJ1Z6tLFdpmU93TNLw1kLACwrwktstMCQ1wKs2yMnKTmmVmPBtNaeEvFgYr",
  "key36": "2BNiV3teLCPfjVSic6UysvUGpSSrxpshcnvfZmz3sXa9GEzBAPu49JvqpmV3V3kXnPJrb6EFoAx4Y27nBuL2yuYt"
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
