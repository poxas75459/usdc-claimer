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
    "3tYFfb5L5L2J1i3Yvhf5dMNJfCDwpmMgEKr465sNFk1TomivAdevFsdgB3iTus4QGdvgxna73idiRquW6WRH4Qib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RwQCrEu8eBwzXmHQfrr6XaaPM9PcPUTzQ2TAR3w4rvJHWjSw65BRHGK3yUG77pkrgGCKXJqf7E9de8fVUCuroCh",
  "key1": "5ZioNKAxKi2ks1qD9qk1iVz753ejSF2pJ4PusL71Pkkeba1qJ6ARAojYqQkUXLu6xTy1cshLQnFXmGoHExqMZ92Q",
  "key2": "Fu3AnhrKNaFpg4Gxm45Y472jHP5wUmonqNRGRibipkWBpsVNUCnvkJy9Zg35Vh41Y4MwnHRdgdM8P38DxULuJKy",
  "key3": "2wfehXVS5HDNycFLRo8vEdbQGSmPcDSgu8sci5YELnCqRBsmo9kzBpNdCF6jsVQJb5CHwLYGqoJ3ZtpKZQhVaT6T",
  "key4": "eo8XkX16aFY7UqPHfTmJ3W6EhejT9Zd4MBZ1j1hayo6u4B7DL8XBpVZ7iF9phCx84m954nL9Hst87chvha5QUBc",
  "key5": "4pkuHeYpZuuUAVsvsW6cDYtdsJpwb5nnH7vH6iJPb6UDy4JKqMqaCtzw1ZKru6Rw6J3PVhkTsCSKAm81DM3qR5x5",
  "key6": "nfhXyxAdfWFQGqufsTKMiwFJxeJjSYVNS4qxRvqguwcvvjFKBeegp6PJS24anvkPaJGCDw9dtGQYonb78tSkBug",
  "key7": "5kGXgMaMh7mgvHb49qaqBRmQCZX4pJdaauQU9wMiUdtgebQEMGDXQ5BRC4anyDzW631D17JmN8TRB4Fwg5wAkCBz",
  "key8": "3K1TKpGodu5yYueLuhLd9WZVGFx9Eh2Lpb4Y23iyDLERSfJab9PKWrnuLPDxrvNEND9VVdpmBScorgjDeCSqPESD",
  "key9": "7FFkcqwz4Va6Mu5N1P57hp8hFci6Xexir34Vsya9krXUkKmYowwXj6gyyYKKm4yNek4KvH8ciPCmiQymR7vsxpv",
  "key10": "4LeZmpcanZRHtEA66U2WVdE3A4Qb8FWLBP7PoqH1f5djNSQnCD3zntGW8aP8THv6Q9pZjyv5aURPUK824Yuo6N7N",
  "key11": "312dHXifYVAYsGqwfRXWnbFrKKNmoNC5QAZYqErNyf78tMVKbT5XHKNeS2MTxDP3aZVE9wLA4gt2JvQTJ9dUBogq",
  "key12": "5S1ZcnedDyAmJH75urPXfqcDhLpaKBZBhHcJxxATMJRVJJndFmAZfNgYw1gD4rVy4BYh6e3SRs728Nx2aS23YLM9",
  "key13": "3iygGNNGyitR136EbxKV9anKb5dVjtBK33Bb3BRNTGdvB9fXyN8MWWmf4EXoWPecBPmidRRvt8d6KwwTX9QtmHao",
  "key14": "4sURbCKvwLaPKE3BDnasZzWWzrmZt2u1B5cr1MJffD9as9UTyLpJX4jTqBYvqvCDrwLqBevobvAuH222a5oJBYDu",
  "key15": "3WkaX416ZX38oMqujmfQVrH9n5fj113uhuet3AvnZ46BTAK9vEzW3frrwbumFr63pmBuqiS7N2NTg45Cp8kwg9yZ",
  "key16": "2XHbkE5F9xgbEe18VCWhHBST72Fky9syoSJGgDKKZnn47ikEmJW3dNnSm7sRGLLA9Wom1wGw3tCbkPmUJtHgnPAY",
  "key17": "5qDbnSWbzB8dZs2fj6Xx1ZQv7t7PQ6gP4GSdpZNQ1JC398G6w34qTkLGqD51gK9q6QMWJtyEEpaWbkSZ5w4WVwvk",
  "key18": "5Qwf88UyspfdSwpi4xRdykurebcK7fSVYaJENyyvi8VQn6qpv9z5xfrAPDiGFRDLiFtGueurAHtNR1etMBHnnmy4",
  "key19": "3jWwNYTSdEcA3M4C7odWBuKqQy2rK2cZJprEHuvij5ZAf3rsdFjQZ8aaRwwyMWs4uoEdw1MZFrCKXZRvzdQGs4EH",
  "key20": "kvqdBSXPjQBBpqHnhSjZDRXr2Y7p39CZ3Dyzc6pDu6EJtzQ2DEjBbDZuAi7YTWLhyNTXBjKe9kWTEsDiAjoQRze",
  "key21": "4NkBguAK26X5VqA46aaKvQei1AFChyCBXwgkpd6d1VTxmebB8vXy7vH6kPhx3wg513ZZRYeTvFNZD3Jkgo3SCXzk",
  "key22": "xk1t5DvaiX4aBPRBgLFNKWR2ffJZvnrY4m76xvzQGpkQRFxGtj8EEEEJoViMZarKE8up6enTbcirDNsiQjdr72J",
  "key23": "3Q4DWoY5rj3ofcnXDKPcvzCuo3SbRVvF2k6qbwcMSaMvQqrvbXzmqcTbGFLdgwwaEQPexwd4i2buhv4GFhYpJ52d",
  "key24": "2S6qiVnb7nNsNECQZBQJ9R3eMh7f1Pwh41MkAebqdV1t816MfiMau3b45j3bnrZT5QqAiSb3pcUKcsHXSxKVekRQ",
  "key25": "2Qd3MNvb99P2AmtFoVmG9MpfMGs81zH1cMg31pmTGKUfLN6fnqTLJEYnEPh9YCYG25BEzju5RaiM3E6d67cSbftp",
  "key26": "5NCTog1ScCz9yketsfXTV36ndqW7rgstppXaR9DcQdXS3aSP7AY2m3MqEFjaPq3sXoCRU5XetcRrCBobEWsUskQD",
  "key27": "4MKU68hCa5ZbpajjGA57hwzF6W7FQbiCJU1v9BLx4PTQfwe1u9PvweTBsaZVDvLG7xmDQLmbBofbbYhvHijdbQvT",
  "key28": "4tmEyGhDjqHQpPKgRrHhwyUJj85NuUKeZm7jPTPEPNrQcaERCUwPNvmSf6aVLVGU1711a2LiSv1GxAffVbR2hNVf",
  "key29": "4VT5zDPtCvtYoAPyrUb7SsDV6nRwH6cThrFJrRMR4drvDqgAvRYUk6Jv8EGs2Gp2im5mL4Z4si7NsrLsqL2neP11",
  "key30": "3qJPmHmy627iCEJosHTa5227GXrL39rpGtD626TJUrv4Wrczk78AKDzTvYEBgfHXt7cezJWwiyS1ExzUAZaQ5fwt"
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
