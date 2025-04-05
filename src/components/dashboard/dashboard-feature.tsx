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
    "crFSMJboVZJBoDL1DhHmm9BY97cQHyP5KbpfWncKLYrmBr7D7SbDs6fwUUL5irmJPPSiXjg1HHsSjtUFpivsQHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wTZJ2G7zpu83HDuJVjhgbCEQSkD2HqC4gpSFCKxDW9RZQDPeSKdZoWNHSbcep6B3UFrqiSPAneSzVdGco96B9Er",
  "key1": "5gCkU8ojM4Jw8Z49XV8jKQFsqHibuCZEJqgYFNx5ZD52adepKydWSuFa67Q48bhs6xMuibUNmS9Uv7e6GBwmRSjw",
  "key2": "56cQJE3B5Xrv5wtg1bDbbCpCRxYr2dEbggeKH83FL3pHvuS8zxLXcARXgy4pXszVhHBXGnpvNVpbiR9wpviMhScZ",
  "key3": "27AWfuHqGabbd6FsZjziRNUm1mcQGsTaikQt1PsPQhBscN8M8vopjHEwCSr6uRj7UQpbkFXqcHopY32Ctrg5s7cx",
  "key4": "5Q6tmJZv3hyW5HBYDjPXzrjv153PExRR26pzptYfoH9uYr36wYwE6m5s9EVWA16BLRXxcBCjr7kvuusrop9FwnZx",
  "key5": "2Yek5xNK6VzCNyQjnCJmPNdcnZgnfEpDtpyfFj5unwdcx4BmutvxK825cEfPobu6T7xcp4VajmUtheyo2bYexzXy",
  "key6": "2cXK6xFkg5xHEv88vgE9NrDAQD457xT2f4n5SaZQCHkqjvj1oQLTwhN2EAXSzkA6d8LYs1hzQqCUYC7n2kd8agjC",
  "key7": "5i9mzX6TkQaJSqb7M4k22oZbbWSyiWEFDadoH9adfCWwB5fDsWsjpcpvaRARoKTk8Lk1zvcW7MuJJob3rzoz1Ghd",
  "key8": "3f8Ngj73deNVnKsufoyyEF8GuZGKpW1JD1m59sy6uoJNweh77DhDEjXGrFVhmuPE3x8mzxkfKYVvdDPy3g7LkYTe",
  "key9": "31EmBvscSTBoycrXRVJxkmzqtJawSzMtDLP8XcaUDGVn9ATyATDh9c5c6kMx5r7dNtKHZmrhc9Pn4mo6NT6Xk4J2",
  "key10": "2Za2GrA1Hmg7HfbvptGtJzHVYwiQ7Kbg9fT8s26DpNNaEZ7Hvj1rkb6aqNokrrxMDUW3mcSHpYeaS5uiPJJiGDiB",
  "key11": "4zoQtvW435mXzRfgefmFD4dvXyb7Z3WXf8PwdsKrr9CCqwg4Zw1WFkxWx2pKY2EY4XMQefKhcBf9gZGD9fAuCgm4",
  "key12": "5LYXnrXRermF7LwJ7hRQonN8EfRsxcFHubx6LEGPNikFNeSGvZMu6tZ5rpRXZTERjU73hjmyw8GeJ8ey1kGJGxqC",
  "key13": "4Eb5326QbJxMYqpLgq783QvCdEuDijiKZ3wgUTfJN7CCPHLhP9cmbAaBK7VXgMvfBP8QQrLUSbuCHKAMXnh4QXgf",
  "key14": "5BxaZa98UogNnSENvMqQ6tPze2QP7cM6FUJHcMMnzWKdr4h8gComqGpDG4xXQPtniwCkziMcjY1Go8D7caWqy7az",
  "key15": "3PKtyqJDj4cz4Mwmh1i4WhBc2AZVHFPG3jn1MFN1GiGMcjYEwL9vFKYmj2oazwDYbeJ9YUyTqBzD4gThAuQxLKaw",
  "key16": "3KfipoT92cSsiiVt8TVmkpnQc2ysse8jhRjRsHc7Ksou2hNW1L2gESo7fcR7fth4oiQq1En9XuNYgLiyPLazuiPJ",
  "key17": "2o1Ttry4UEUan5n75r7wbnHWAyYhC4cdhBfcNzA2jrQfZcAYjF8oHmhPHo92PPsfyJ4xLnPDUcW8eKU55Bwznm9v",
  "key18": "4yhjv6UbsCffgkcBniCxhZbpbbn3QcWY6w1UaHWKr1NctDryjyxSx4eegkevvdChRQy4MPpQUo9oD4T4ExhScBcw",
  "key19": "2TgonebLUPMPweMt2L1KA7AxMQWcgShWBBjAwPpEyJqsWrJSTAtMZjSyihLFLB19ed7hi4U8hhbTfsuWUkeUkfze",
  "key20": "3m7vD7EHVfYsVuDbWckv3kA1Ha9Sc2n5GBPFf8sewnsriyB1KsBpZrToaXXXLmbGL519P81MXC7agx7RhyonZTgo",
  "key21": "51pQaepaReYK2G9beHxMiyNCsfnd54LESwxhCLCowYg69KkX9yA6JLLwtNo1yGvNsDcGoBmrffsLrfw3qiN4CqV9",
  "key22": "ZytnJQjYVmm16q5v2k34GExpR9UDrPTMfjBHyT2hBSPyYTeMnuFkYnKkmjoyki67CDhHV1zWhP8iGdzfmA63a7t",
  "key23": "37JPs7H5h2PobgL2muCo1xqwaz3LcPujxLN9mYYQDaEcYURaJMoCJvMsZVJm9Ure39RTL9ot5wJTwzudNkNouTCX",
  "key24": "2VJFSwXutA9XH2cvXudtEgHVdspVCBGjWc5EPDaPPo7go64wv7zcGnRTu5NVkbtmjXZMW5micz8e9oiXkxpimAui",
  "key25": "2Dm3Tu9PGH2NXRZMLqcvWpLJ5pY11KrjDwoYJnFWJFDfFJ2fhsAQhdKZCpUySW9eXGsVkXFW9JKaJ1MHhySNG8r",
  "key26": "47iFH3BCKSjjz5BqxGD5CAmKZpTEb9n5HHsyxYsUQQqgPB2hzCZAoxF3Ja7sLt6BtanowquriAweNfdwnuKagMRa",
  "key27": "59fwMa25n6fwzkTaHe72CYAnwUvQqb8YhmLRS5qPv2WkifLw4KXd4RBMYK227HcYLBNQtdEENLc5AcK1dZxMZq1m",
  "key28": "5LooLo4SQbeLLmv68HUq1Xppkn2eAQxnnaFVVVhamTUDFyYJFW92SQD6BuSJKgREizRHok32StAFB4i7MUeKUBGo",
  "key29": "2JzAq9qwRgojoG9kZsPBCaEad4qT8ecBk167bi2BbosV4L2D1ewiCo3f9GCbgou2742jKRTvPz6TNsc2dp4uMaWS",
  "key30": "2TXzDeNTNoBKbkvw8P786b2YbBSDYWZhE8KMLqbvXZVjQXMUJCjefW172WBL5bje4xTuum7Q9HKytcZ98t7y7jQe",
  "key31": "3MN3nKZbrykLz4oodJHuzgzkbotG2Lao5edynwF1odmVWe5xiGkdxS69m5Q9n6Y2TAdPGcFEhgZYA1YEvUA8Q52D",
  "key32": "5n8AxA4QEYs17kNVoTCeWxrWxXYNk1cdUXeni1M8xuYU2nLx8Nv3sfKRb69Hb4TPUPFPiJMJpMgwAf5bV22qCto",
  "key33": "2KHx19p4VMz8M5pyxbTK6a6ZD6kKdt8pGreEi48bDNKQyHTFqjmHBWjZTHsY5XwRhc1VSkRAPD3RTA1wkf5MQU4k",
  "key34": "3d6VWGPos2BCrr38hbLcegf9gWr3osorwvpPYBzyi74PMPMHrfTGbxGdtmGQNMr3Kaoxj8k7fe9jGqR4Xf5bvcZa"
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
