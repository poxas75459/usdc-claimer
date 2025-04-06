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
    "JRwdDhUJBQxc9bcsxY2QAXyDjhUxWRkaN1VRd3iFkLqtZv3fPsFHGiVyYFVTtSK6Psh9QkjsN8Ma7eZtUb5DLXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47YLfbkkbPrtb85f5d8noiHGucpQPAHxtyE9jakemkowt4pcQWifgi7qaschBAfyiF4HDrzbs2z486QnAZCPTf8Z",
  "key1": "2o969F8i2ftCb6bXbXXKN7MvtBEJn3jmhSs7T4zSpCuCDcoBxj4RK26Ve8pSYe928dBRmqhLG6Sqn1nQcEu6hywT",
  "key2": "47ZTCEqhahtjE1GDc5ocsdEZuH6WuzDqaeiEG5RgyTejLuxMiBGvbuUgAha7WG1jABo7Fcx6WM1yDvci66NvCfie",
  "key3": "5EJPUGENWruiiVSNctTEkn9M19SQLxqA5TfUtKWw4X9vHhGhgVQymiurAA9ivYv2Xy6qzoEjcnj2kLNvYjdnaU6J",
  "key4": "vLPq4m98fNZXEfUEZikRai5s8Hx8oMsNQtX7mx6BWvBH8JrCHUgPJH2kxx8PqDKSXmCQfP199Qx6zsMJpXT3J3h",
  "key5": "2zUqvh8P4DnZtNfcRC1WM82J92tsKWQTE7L7L2kJcoxm8E8FESFE35g9cdamF3p9Z8ivgjyXX5rz192q6Ac3ERbZ",
  "key6": "4XdX9qWwpnghVyBX55R5odcuB9JJubWwuchYZQWLbBagKNgMgBTZEUgfwQVVErgp7JanWiyKSys7yfNXguXJTLcW",
  "key7": "5dK4KLrcHwwgrPJqCKBzTMtVeRomN7nguERVdSW9YhU95ARKeT1b4nJruZH3tLpdv1Rh5Bim8Pp3DvggsLbh7JH8",
  "key8": "5Twyp7tKXAYJzJxKmvwZRuWgFmfABkUij4gz1ASx7YPAA3XJRPuLcukhYMPiESQJCkwT8aS1jcDHWQDGsqHrHUxp",
  "key9": "49S2vACyJZN47oSUr5P1QqFqWPJWPfWrpzGHcJmrk8V38SqraJ5WXbGns2BRJ32MRdKG6RerGpZobVXhwb8pgoGr",
  "key10": "3bZfvKH5FfsCCQuB3ADHLRoQBVo5THzNsYHZma8k9wWqx7CS65SCCJztcojuANERtQxDNeCKb1KXYP7cmb55cfxL",
  "key11": "3Ct3dC47mxJE8Y9X2mgMfFTJcNRP6TNK6wk19DzrSeu9nx5DiHFSokXPZmfdwLZK8fmTiithuKPGBcSvXrDAspvo",
  "key12": "3EoTHdZ4WNDtjj5Smc6GpuAFy1yyVfhuXrJjyYMz6DPTiMUiSc6XdTW7MfJfEiSzJ9qHenCfqLeFPdJ8Di4wgBCc",
  "key13": "MTzL7N7nzV4B8grVqoKTwDX74YkUKQA1Jteo7tMNQqU6LhuDotfm38QpsvZkgeHiUt1zm26m4Zd6TvzjWvyX87d",
  "key14": "29GY9baGL3k1GfV2G43RsB7CvJYgzQD5WNdoeKfZUHMZDKjFMBdDbhWos6VTZMkD1GpY8g5rXkFNDtwANgwKV2hy",
  "key15": "5QoCd6Y2yK1ghvpZuAXK8GFHfQ5Qd8m4PMu1tmFBh5XUSAJuFwn6iXBQuZS23dqEm1HC557p3JQGqAa5AUS7wPKN",
  "key16": "4L89FSXkBmDcSZtKfWBPUftx69eEMQYULJbKZAnMcF3Hnj3dcJSEg7amnAQrD3Vh47gmpgaK3SGVJsohSXB2yYwM",
  "key17": "5yRWWHUTbUJbsvYoNJ7YnseyJsmaFqq3MAgNbvHsiefLAZ3rDddKiUpmyZp9Y93bB77XeqLuJVf5m2jngsbANNFc",
  "key18": "2Lx1jQ5CJcmWDRF7rCu7AyB7kwUfmz4ProbmpbrpETuHsdwqjyr8sCsywBENwNoeAdr82tDeuLixJctb7ncnvGjY",
  "key19": "2sQBkiftAqLdmRKJtsrT1kUz8s2xStM822qYLr5aMDhr3otPt1kusA9aaWjf7tyaoGa1rvFLeXmunKSvLxq7ChxJ",
  "key20": "2i6kDioxnnB6gXimCdwoN2EfAhcB73rtwQSeFxeAJKuqqDgtz92Bd6z1YnEqNzR3VkfgpBf84KcuhUkR32sbwcA5",
  "key21": "3NqNzpn5ePHBA7oBVYqztnHBDcbDHA4gSywd7WiDUh2tdYSBxW1kZhd3vWG5zGmVEAfAGPEQGnofyaWjXnYwiULG",
  "key22": "3sCiaMnXybsvyLYUCxF6aZJF9QgRok2iTJs69EzDMpQGEZBySok8k1JtFTnAkXpCR5f5aRD2EoT7SBkeJ8BYRtqU",
  "key23": "4Y69LFa2Jn3fbLcDH2EMkiw6Y9xD5LKbNDnicYENfuusas3MQXUGfy9iMvxXoKnRPyPgPyDnZwkgqjy1PAeqVSBw",
  "key24": "5hJhMMVRun7G7bujw7MDXVcNhuVNVBDW4111YwSHtALVKBdFH6f12vXEcgbGHg1ncnNgpJ47MdHCGPRgUEjpGbBi",
  "key25": "GWs8VD6rybRou8ZsS47jq6W1ei5UmALWQHMfVQJxsRnVRZbtXxrvjZSds7sftKvY2NgkJHYqcGR1xRJd1jRXbaG",
  "key26": "yfnAegPstfo64cGWq5ZPkTVLTWBkJyhWccS27KeRzyVNVSriQriuWj8PYtMVc32DMTaAig3MFLptejiznGLUe71",
  "key27": "5ofxpBeGQ4Gqppra3tgURaNLZWLBiZSSpwRuwnpxrbA5GuHrSYor8QXKxGa4kyVQpfMwwtqMC3QgR1trYHhnfcRF",
  "key28": "evRGgketvAR1DeS6U9vHcGhaA6TETVR4p1vKKGVGNdpqs18DVGP5osccnFeLgKqBsbjRrEzWkhQHbwzSFAimsvV",
  "key29": "62p2NBLSm3ETzTdHvyWpZwtScs4L8xuFSp2XhbjfCy4sGxNdo2FbFCW8eDjeXULnTKdi6MeCV7N2uQfimgnHnFNH",
  "key30": "48e3sZhChKqLyN6iCBj7HWSQmZgWH5PNdRM3Yd1gouSoRKMC8kFY6NjTzCoYNGskmQyMYvg59xCEKUyBkiXAvMBC",
  "key31": "42oqZ8j6QfR6wygiwncW1YC9MBi2XJ9MBdDBsZGRjksDB1G6K71eRThgoeiHNnKTo5a9SQ33uwF1N1HqSiJc4tyE",
  "key32": "5E6NAy2JHHnrwMqrzc8yFqNqrxConK6KFTW1xcFV1kQPP7qix82mTDV8r5GqTR5CFkbgVG8rbHjjk5Gge37mjcvd",
  "key33": "4dNKFgosqGWbynUHP5PZNKScbRDqzBLk2XVSvCWCmBJz69d9GX2j4154ngPsUnFmbY2yfiqGE7pgGC6yWpRE7R1v",
  "key34": "iefUBCLuCupKSzLRFMjqAyTU9LFmP5pgGsZkG7HdHVvczdng7AohxH4nCnmecA6yrDakfnTAa7YcS43wuZrhDe8",
  "key35": "535pP1x9snHP78MELsBAxGChaQbAs9SVmDEJfTkEaD84CiLZXGqv8KxLatiLf1UsbGZkEsvK5xiJmBx7vyMXFn6q",
  "key36": "hibtJMMCnuY2MZzDsiouVgWG2rtpJvdh6hbNuSvDctZXSFhS2eVe8kAt1LHSoY5bMyh56KhfFMxRxLvcTJRomdq",
  "key37": "4LAGoc6EVNy2bpcXqrtxDcq7z4GY9S7i4DcJTGiv11CZ3U5hFcLYfDaakodNdBMR17nf7UbKV7VX9zRrfkwVcVPr",
  "key38": "3vJRAfJReWhWWswBvoS5Xqr3WsNDnCsiv9sa6GxeseMrqRtVQxWzRJCZFgFGcEtHM5StsCKGyFTb3JXKxUxeB9tc",
  "key39": "48xJ7rC6oS9Dogk6gE4KW9gXxtsUjNxaimK6HrS2hCqW8UjJw9bqwdV4VAMMngzKHGcjfqV5yt8oRdP3gs3CjSpK",
  "key40": "5emouL6fp281hMxvyqzC7FfSeeacT1mexsUN4fuaW1HEyw7e5zMARmffMxMiUd56peSYTj6NA7bzLBmvzCkHhSVD",
  "key41": "5JBWJt9UncabEHsMSjH4fApp1ED1YePgm7VuQe93gcf7QBoREZMDmXnctq8GaxDwQSKPuDTcibCJGzAa62QCGGwU",
  "key42": "GPZT1k1bW8bxbnXrafuTpvTENic3Qg6JHBuX3giz57JD3yvdPGkH1g2Ru1kSZ3UzGiYwtuKEGpi1mMzXTpkPxsh",
  "key43": "4rX6cCQM82KZwjNREoB4fFUGdNXCCbe3LdC9uofFDNRs5qhrM7HSK6Mt3XGBdhmHUEvib57QKvc9uGCY7CjTZUkE",
  "key44": "5EL6iSnUVz5b2p8f4ke7WH9jvbLCkbYDRQjnh3fSTBLe2t9jEPGfqh4pKsbrEr9HFhgnp7Zz9y244a64gQF8FHKB",
  "key45": "4i6aVfBCbozKYpA7ATKkw1AnQaGPVEk7zvxWCdbgNQTQaPEPmDnt9eQfMj1wQyBGcz86SxdLGU5Ew2Jig4W7Dj15"
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
