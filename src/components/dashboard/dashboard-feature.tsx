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
    "2PF2YsWeFCWhyseSiVYfY1XCDcLq8PPgd6w4wzKxMV9bdNsvPBtRwddjTjo9Eb5xLfzKSz338vAX57KPRagvhLTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47WmpDdJnsP3p7tnbV2DTXoXbvhKe6379CsHe1B8VwKrqmPqjEtE9JxeQ3fHaPih3UaKshnyGLhQkm2tFjjCDU8u",
  "key1": "2PtGSxWBtEzwHh8JsKFeSU1KLRM7fr7VCsaekdr9TkMPn2V6hw3cWXvW6kEydpX5h1g5dbPaqAPPP893dZp3ErkM",
  "key2": "3c3haT9PmeGmMow4TyfGYc5QyC4UqvNdBy8d3tcPYxoMHwnFCnbe45Enm29WcBZZMASqyngaWTRyvnv5oZVD8kCg",
  "key3": "4fhG1C1EquN7PP4ajAER5ZQK9s6tDsu4iARjnQpQPWsyGwmL9YFCVjhGMME29J7NWy52D6QeresCUSURGYtZoV6K",
  "key4": "54ts5foXgkQtwJ3qAeA1EtF3PvdQVjRPD7YUAW7WJqH4V4tLeuo7W17xy5zhicMqvLajSShkMdbVKRMP83ve7oZu",
  "key5": "5JGYAp7PkQYUwoNXnmvHafcPKf2CgNUyLzGPjTDnjhGhuRGyDzkK24EkfMDSsjqoEVRW5ZzcgfMW3ecDoMf9rdGU",
  "key6": "WNVT7PdkeKCFfsTLktZsGm46tn7u5MYMeRNgZWUt6cKxkoNTmbnTDiNBUsEgapybrBm1NcbWZ1AW4iXkSa7vfAt",
  "key7": "7Xu53b38QCsXsorc85toN2WBcVAtKNgyhRC3zciK8kXpXssDjUG1WtmDkBqFsQuZJF73kDfKft6N6UTqy1Hzg7D",
  "key8": "4DwEvoYTkjAJphpCtGmy45pvnn9xAjapNWZaffqRosXaEeHGdme2i7WFHzNGLnKSMe6AMDU69fJUtm64FkXgpjPa",
  "key9": "2uA6wYvi1XnPmvc4wtJBoezqA1osaQmcYHuZPoSETHaRcBFfAMh62RDcihiMbSgxzj3ig63b1XCVZKURZJYActnK",
  "key10": "5Ao9oC7zXwUZAU5jo6xehoGTeshg3cf1UiGKr5SFB1ytshRTqhHnuirvP13Xu4MEfmaKmnDGHWm4bkkTF8HDdSvu",
  "key11": "G1FvVbJHDj6UxvwpJgBtF9gqBFqAbHnKYfeJ2irsfcBFwKR21k1e64n6o2L9vx13TsfnmAiPe71EWbBo8nBXWG7",
  "key12": "K2HgEJoc4zLiDzz1sbdEZzyD255HV5HUxZRnzBd2F9xy91g9BoUe5pJNxay2QgLaXD7PLUWscUU1LHZBuC9cBQX",
  "key13": "5yFFGKHrhtsgDdD4iLpU2sFUe6QGdqxZ3JEAe8dyi4DeWGL8VGuqftQH6MPTuHtHH33SmJjXDjFsvYEG6bA9JCFa",
  "key14": "5wmS7WKy4zPryM4t82ZatUS9LK6k7qvccMc4RxjR6Mnh6UYYkZoiwNUJoH2sxxQEh3QDjQEgTFxc75zCH5249FVk",
  "key15": "4xJEqz8xPtZEwhdKH5vqVhLfBYDCBcug5AcyNCfPviHsceUGVe7mXJAAKtTyUDWpE24tnZST3SdZAs3XyWCCXZnG",
  "key16": "QiyAiNkGADrwwq8AydCJ8EZTYEAmFAHgT6sHX1KsX3g8VsA9Gpow7N9Bdb5FvuiBhnvTrZDgqf41x2SEDqT9evF",
  "key17": "4hazu6gQmWSRms8xf5DThWK1UqFxsYCUE6LrBBqmdRQXEv6GF7oGEEiY3pgX3zJUNpU3Lf4amx8VSfJGwFYt8fq",
  "key18": "32fH6pPLhUx29qXu2aYnAkc7uWLjWBt3ZWqNfQrXX8V4Z2ZutEMqA8nP3K7w3XgaCwLEXba8wpzwNTg7nXvtRyU8",
  "key19": "4sCzru2wFZd7irH1D2uTkVRep8nWPsqiTBdyRWNGWFpQSkuhuxKutzbfgmJKxXvXzT1x4HZAc3vKhEBzvwSXfAqw",
  "key20": "dEjo5uMKKwVdqHpt4uPoFdK5jyHM3oiS6JvrQCYAKm9UNY2rdYaNTWB3g6GoLhArWW8o7JvXezTe6PsRbNCyRXy",
  "key21": "2SoK6zJgJMiUqAHT9xd8PkN6gNm1vL3BUYo7Daow6N21fH5TLtxM25oRg6jPndoPWsT4fjMu92oQz77GYUipQUfb",
  "key22": "2BxzdkZJoWuRHvZv7ncaepFRVjKiHUaA86hM21ai8oUdciTmhTXz9mtsfakzkfGPjcAtruQAWL6RBobshCA4fQH7",
  "key23": "YYVJ5gLAHzRTb6o2sMoxBFrRG9WRgXEX4nKqg2UQ6WKKfuP1gHaDQ9Mdj6dEz4sWY3ZVNj8d6kiaKh1v2yG6dDo",
  "key24": "ysReVdaW74xiTvjRGDeyEu5zd9ikbZSV9a8fZZp7vdhDsKnv7UZt2X685kNDJvutzrZV2TdvKq9XrvcGoBUGzAc",
  "key25": "347H379LYYTX4P4DVgKAZVpoj578oF8nYag6PSvUAv6tyrCJQp2gksXbF1ZGmTGR4oCBtnu8EU85ecC4cgZWBtjH",
  "key26": "4wAas8CDa9PDsuLMFsHPozf3MP8yXhHJnadxDf5imxvPM29ExWmB2QeYdqeLeKxrqK2UvyZh1tMrQUecvA6ZQEHt",
  "key27": "2suvm9rPLw8gM6bN24T7e9A8AYs2HNJBEtMdLhjZLBBSyccHDmtpkSYp8A5aixo3AXtrYDjXdpqqsJ3zkgja8mvK",
  "key28": "2M9jue3roj3pkyJ3BoLLAnSfqxgPukB45RYhfBDN3dXrdQQSwosSP6JprnxoEjsFm8zhKqorh1oE7cDnsDoP3yyH",
  "key29": "4mKAWDzTMAfAh8V61hynXh5cQ47eWpWXqKMGQ4hEiRe14bmP6YB3gBwyjQBE93BX68ji43Nmxn27gcPrqdocZKza",
  "key30": "4JhJC8ruhRX99Wc7CpLGAr94Xh3RgkVD6HtW3XfzwL7Jk1pzyvCksymkGbfsx83bVoYpEyoW1eDG9cAZQtffYFtA",
  "key31": "2UeKb2KudsGs9qyd1usiPoH9SkfJodMfd97gkFjMFGWGJHeyCStDfnBteVJavhLS66W6ZN57dEpc9jUjYdXY6XWL",
  "key32": "2Zi6oiyEY9gYHdNGwCxjL5jTvMHSsVnXdD1VkUuhXGvTqvyDKSjVc91U3mKmtycBF72XaQfSY6HeU6keGkawp1Ag",
  "key33": "2kNwpw4e94FtM4bbGcmoeCnifrbxRUvWZDy4z53md7n2sXmrSZCBkx8nEfVaVUzm5DjxU565VGkDpZZMF8oiBM7R",
  "key34": "4UEYvZ1eeUai52KUEDAL3yVz7svvLjY1ZjAkqzpLNwkuSF5sDnHYeZGWv6rFF1apDmhbqwr58vJhDdWUqNoWxjeV",
  "key35": "4hnxsuiVt2dackTMXmh7dHu7VPVWMghxsiTxeUzcdPRneH3nHQkAbZRaCHxySLJikPUACiqXjpcemdPzUoLwERdJ",
  "key36": "5rM3aiuCseJwE24uTmmpNN9jHEaxXQyCXRcE4K5nH3219vBqc1pyhTfruhbPFngdf9oAR6JmDUGsjAttoeTB2xti",
  "key37": "26Ue7avzton5PvvUvCeSrjuoVuZwjWrTzobpHBxYQWbGYYNNs52Q9aNczm6VxTda3eYN8U39GU2r7jmz9WWN4dGf",
  "key38": "5M25pmC8ycsjrQUrvr7EsnkhP744NkhHquHnigmvZrsNdwdogAR9AM7VwCuwWGKYjKG6UfsiiJVWNhQQ27qYWJmc",
  "key39": "fQa5bVa6B1az1ioLogik1863NL6mhc84WquKjyDf5YPDMfDsxYB9jTK11XQhX3mndtbu8EFZVCrdktwqEb3XCEj",
  "key40": "2KGbQytAyG72z56hKRZaLq1eN9obHpF6cC65h1vJ8ymG2PBd6aBTUeMAAYoHG972eydxKV3NZCiodwGdBXbtYzmR",
  "key41": "izg5G9TizMt8EFHaKqfMUCjNTERsK3ZPpDM5sf8KZjnPiNQzbpe1PkJZCrVmHR3w9L8QafuDS8YaPQL1q8gmDKp",
  "key42": "3JQaY5hykSYkdNa7SWm3mTRVc6P2G5ohzud6ewTXjW2yHGBZBvAuwDa99KDEmckvHdBGEBL6bAk84NvgFw8Jppjk",
  "key43": "39mrZoJu9gPByxmSv8euak7yC9cBMU2RvzokfMoLh9FfAAaxJTWPge8KZr4RXgxctXSZkrHmk1vxaSWqXjKPpBgJ",
  "key44": "2PsLEZcELzXWTtKDX6h2Cj7GnYSniVehJz1V9Rjg3WAUQusjA4uQrRCCS4QiSgsZBaw712oJb7syQaLxfrBZpZD5",
  "key45": "3dpFMCEcrK1zcSeRX19suv9uUtXTC7EYaquUCjaVSEPyzgqmKj2werqZ338AjYW9xE7AiAgZfko1wWggnW6DPExE",
  "key46": "5nFMCKtg1AUHe1FSVNad9uoteXcfPXRHz95VHJpUq1t313i6PGswez6LfziYjPMtGKyHMTnjbr6sqmugSBZkc8XT",
  "key47": "sH4Wx3KN96DLmVz8YZJbib1P5CjPDqw5SSHKnnXaqHCirnhuphxTRUBTwoRDt55hEqcPXsUBzpvPUNjpvZMQU2h",
  "key48": "26yeRULyWX95jcURp4wseyZZ553GN1cYQLkFA5kXLotdcSpz95F8GYGBfnP7rZio5s9R6kwZC8gpjGhDMCDVrkiG"
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
