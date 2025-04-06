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
    "3aerUsqhAoJTQnq5vC7XGxjPQmx7vVHSV2pXrGSXQq3hKhfRt1Q9T4GwJC9x3xzzaPjg6SugWChuhVmd4hqHJBX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CdcQFHifPpxVrsbTBPaeDRF5utbnbwrL2FQFQ2tHQ1MwHy5BEYxABjmdyrrvCfCuWuraQd8KifqjYFcWsiryW5B",
  "key1": "3Y9Di8e7WJHYZgrwPhtacjKBuUymHX4q4rs3JXZqdpezN2PY58oZfUmA7AA8d5K85Y9MbskXMe6BGwmFRWnKR86F",
  "key2": "1Qs59KE2Cp4L529ceFbyRwfMBoMaDGFqf2gUdzHiEMWpYLFe5FanC9cQB36zd7PK6vDNukyPBFmTJ8N8pZ4yF5N",
  "key3": "3LjUbNe5d5XkoUMNYLJB2uZh47qQ9BhgksFCFffoWGEPB25L1ReFp5b26vd9m2uVbTuxvHh8TH2zRiEzZtMQnmpZ",
  "key4": "3WJ2vNRStnzcA3C1t7CTdMEZzmc9DaVgdocP7SASoh49N4cQSJP9x7P913GhDfN1fLij567EN3kCDqHYea7p2B3K",
  "key5": "4wV9bzy8u6poEkbr8eYMSR3QojhTBXa8zFFujdRfAFoMz6dUpafABycNUkZq8gYtLBUKYypHHnfQrprii91eTkbN",
  "key6": "3UJkmpL6yBKJ18VRXRsG8mGnvGFvnqkSGF4vdnKkSPwVuGtmTUzrKNVFfhw4Yk7rfStWuZben1XPNdE2P23wa9QW",
  "key7": "5VhkmBoQas9dpEEEjngmjXn4WdoZDMsxyYuHPktoG2gVkjWQrNYh9Shv6dy2F8KwZwrxnDiEmb2PPgo4s3EY9PR7",
  "key8": "47Z9oZN98yMLH4VZ3hEMsS7xp8Q5VZtA8YQZ9ddGRoKF9M2LNBPmMZcW9gBzF2EpCmZ2dXwHr4PnbDZoEkrfJt77",
  "key9": "cdDKRqx4tCctWh9QX7v1idV14GGfv9DN2u6mwZMa5YLrTGdnuFrcPBGZBUzn3npPEGBwgCYAmgYf3kWy9UwxtpF",
  "key10": "45i93N6j4XeqqDSyC488poWXMUo1iFoLRcCK4BDm1s8s46dHkxG9aqGa1HoCv4qSgB8FvNmEZx7Ri2KyoZTLK9hV",
  "key11": "uuvp17QeDEMACbrKEWhZRsboXrLkjVUL79R7ej847XVH6kUzaEsEPxBUB4EQ3ejubQfQFomD2rYxtJyZeMtogCq",
  "key12": "pXUGZpz2yHi1TLCRV1d98avADfVUbxbc44AqszZHZvp5CPatfSWR8sshQ1DgEC4NwMbJC1f76kJoLjAbjEZUWvb",
  "key13": "5zfjNjqS3gxng4z4U5hz8LgM1gmxQseDGWdcUsPjfmctZDsWBJw9kDscDmLgPnpfNpesaENT5YeVseDz9qufBzRG",
  "key14": "2nf3ew16jJv5KtGkLsy72ZsTw5sQedd1EcGg3G5HsqQkVimPcFgaTJRvCwHVn6HRYCaVzckr4QVQRxK5HaBLLUX2",
  "key15": "4bj4VgPyQYTqt3v72UGTD8TVomKiZzgHA7UTT9DrojPQ4M6tkbWQZxQ1hWQVtRD8jRqWYToVq9WMCUSNtj6axAde",
  "key16": "5hnrxs9fZmejnYk6WmfDb8QMRRNFzcWEwtfXxDQACfBvo3Wh6otjxmtGdzeKCZrkTDxSv7dqLbPPD4tuwdbbVJ34",
  "key17": "2e9KP5ea6iy5uHajsusd5XaCqK2xVouB2zXmzXJBsMj5JkY7uEspjmZYoVYZG9jLdvP5gRHZZoJqBPUajpDf18dR",
  "key18": "4GrDp7iNghtrLyZUTmEfsuwfDKYbDErqjCuSgFpM1eKEMgY88Eg5wWRBDpMuRaMPVtug3DooDVdekY8mMyLqjXxR",
  "key19": "4TBuDo9NbFYwh5Cd2k6cTwj3vwr1zdx38AiQktMrUFRQTN12AmVzucE4LadhrSeV1XjkdnG13k79qAAnok8KuhKT",
  "key20": "4jowpksSz8eq3e4oQXgSRTCa6mquuoQ6avGozyEi4GBKU9yJso6TXbn7JHKQnZx5Jr6Dso94jB12EcediDVXpnXR",
  "key21": "3h1jLcQ37iEzhCBGnEAR1P84q9PLWAPbHsGrhbM71WnGKrHUErYxLYFz14fQXDXhYroMJqo6krsgrYRDRKTxpxzM",
  "key22": "4CiXU3qgQDPzYE6HPsRgCHQL3opqpDHbJYhY6GduoKyVSUPNXnq6cfykrqPx1hEeNmbiEBxGAcM3g8p5hqNgUGNA",
  "key23": "4TADZKQYEK7qmM1TnkyNR8cc8MMiYuX7rWGSUjR53e5VqvRqTHtzYGWBnoVcZ4azm7bAXZgtx2kAPCdZd8nGTtSm",
  "key24": "5Ep1sg48JER74JUpDgvYELzh6SXKMbzgZyczSHi1PHRD5fEbEAdBBSqVaXAXjgqqWEd64RCCU1s9zt5BF3fkgnZ6",
  "key25": "29bX8VWQRzf3GrFXAZHugQSPEfYXtRMBgavamUq4xQ1VBtCo8TLd2HFQkPiENcPqCfgzBgjVveiTYiCMLX49i7D8",
  "key26": "5MCZaD2xahGZbK6awspyTDfSshaX9RWg6VzMA4pc2pvESxLGqLDchczfzxyVgK44uhBfZzg5zFzVV9MJTQzFJozk",
  "key27": "2Npd64JkyjHn3RtiWeVddfLHqp43F7SKAAqW8m31CRH2JDBSLGuqhA1woWtRJjZuRX7gwyjF9WZpfDLFME516GoF",
  "key28": "sqhhnnCJYsNDBhLFsx1sEe8Nd77L3y8FiqCvpinkTJJVaMeXzTNbsSTBrfAqz4wCuxvKaEzn2AJp77CUKRjhuiC",
  "key29": "3EJVFKPquQPFCGoYa42VZmfZWwTDWVN8yk8qxH1echxddNjSndwifpfK4dMPhBsXepmcPYqDwr5ZdBV2uRaaggcq"
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
