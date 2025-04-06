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
    "d6vrZj5woufwYCESb3Af5sCd3vxZNuGFwVtvxR16ft2Y84ac8ZXCaKsBmKUppvvAqt82nEx8AqYUfa7MGLo59FW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Cem237DUKxVqoUEcWHe5C29q3XS6wFzdADgUoVBdZd7jL9b62fcKugxeMW8MekZSBBBcHg7wugN3chW2wNJ45Q",
  "key1": "4we7jQPn5aiFRHKzoWW7K9Z7hEGpj1GsopCBwpqNLsKfmpUPzgcoDMv4yK217rZimZiPq1WVNU2TkJfnt5oyS1ZE",
  "key2": "3TmuUvR1hpAQNDvnrjLf8EYY9hUYFz8BByVNVZSVsfEKZ3mw7LdFSqNR31XhxLHRVaTWzJWGsNCP5ANJ5RzPBHvG",
  "key3": "4pvc8CLXRY3hp3CZdWZ5ZfUZ3p7ud7nYd7mw1TVgrCLXaBjgRJ3h1cw6Dk39b3cDKyHaD9ugtnWLF2X2z9EsFP64",
  "key4": "4A9ejpYvYygRLBLRgXn9BgEdQ7kaWS6j7CDAJ9ZSDR1JmxSFqiD7453QCte7jsbbr5PmVH2D9xyZ5KwBcECgmg7T",
  "key5": "4TPhykZrEnia9qAHUdDpNXb3egcjQzZTS5p5HEvBQTUBqDJ9V6pUDLhpWAReBAYUZMhwbNo2tZZxEHJnpuz7Q5oi",
  "key6": "4SenRMYaSj7sDrqSfZQTYeTNxjUDcUX2ZWTY9U7RQpnbrnam4gBGBPnrFWaagG33571EUa29Mx2FCBK67jyzfW6C",
  "key7": "5cVi13nMpEsRonW16Es7wmJzhaE1jtZWWA9CtHztGB1qRdR1dr7WLnCaJzqic2mr9ycHMcrvhMLR13aZ1N7dvzNT",
  "key8": "4CLnvZq4PEDri4iLXeRH38kyHmw6okKcahpj3nkumQvmbsN4GChebM9689Fx1jLF4zQvuz9Z7f2nps8cVTaU1Wur",
  "key9": "43eLz5JyAxM9X8tFmoQ6mUJFD1Q1GSgDYoLCiwigXxdtcxg6dS66CPuKXzYxJqdiSpYVh13dProZyJd58VCpL9sC",
  "key10": "4akAv3XXgKs7mGEGNjhVEfR8cM7m6EUaZWfLSwqxDZmpAnkGL4rVSSpK7w5k3NbPAztTRa3BUhvdzFdHJsMkgqA5",
  "key11": "3LFyCQMpoF7DVNKCnpojuBfWPBDosKwu9736xMqXNaZYQfvm5xE1whn9fLRwNchyioCNX3oNBe36jgnXWGD3NEQw",
  "key12": "aqW8MR4yUdFXWgXACdXatGkSxTynEiX53DxPxTBc1VGZSsUsqx6U7P255oL4LcUmHD61tpuhUheifLkzZV7RjNn",
  "key13": "3sEtHRNskXSLje22Z3tGdth9pWsB5DmwFG1oixeYJ4eHhAp9MdY529WzADPYQ61jvfXTGQsK88qaLxxbhC2hWst3",
  "key14": "2eeAVXSv1w5ovFrtRWEPkj58p7MtY5HwhP8fSSjTrcnnsjffxCVvFEUDQkHuravFPpt9j12zZarfctztA7fFrMiR",
  "key15": "5PUUbnMXd1FXNKKMpkDwJLR2J7yY7ZBwGcvZDwxvPE1AsHNeMEoK3gzagb1ttpQfTFy8j5umUC3jG9PoDjHGQ1Bv",
  "key16": "4p4orjgN9zKFBpsrfGds9N3iLRRWpMRCRSG2h4AsdoHdz8vEjyjK1x3XvjBjh9UkAGCedsi3naEiSAKfcvmP9kfJ",
  "key17": "2jpvsTzfje7JJHZURpdF2HdzoGnySX68dw6FMXzR3i7q4FdJTFFnfPTedHVM7mwwaNZxqaz2xqNGXeXM7ZNMks6j",
  "key18": "4XGfC6DruNwRpjxaGNiRxAYHYhuwf69QU3FhfF7o1nw9mJQKecfLHNRYAQuc2qt6E7EhHHFgMGhdHMbQDMUAW6Ff",
  "key19": "ZgMaKdmhnTmuLZ89KW2yjhbixKNLSF85RJ7fCUtXQJhwywAXSKnrC9KRJM2VmVfso6qGgGCv3uNhsoKKjrSGrcn",
  "key20": "5mnNtwN4izaBffehDwmypBp9DP3M4UnvqjfCeFgH15e7WEwKGfPi4pqgoCg7PpjphZuGjuzATpnTQnAcXC7vmXSr",
  "key21": "QbmijsA3fPhE3jSYLzForSQNtmq83bPVY2XmTL5zKKNy4z9sokHgYjgxsqJt3tPdETmbe9mzdBPwLRHMTfLQCQg",
  "key22": "bmmdRhdbVBQ2soFxY3PGu1GbcM6FH8ka92AzhZD7oJ9BqEH78c3bD1XP76imQDQGVYyEyb6Y7foiR7K3BVY7ijs",
  "key23": "4LydRZ4Nu82xPtU2TquEYntEwwFcvBAGgFTQXVMM7xb5QsNS1hkbPp4Qq3XdQRjVo9yquzETWBG7ZmGNZmenKqz7",
  "key24": "aoctvLBQ1PMhdGzBHiXsY46r2oZwcUSC5RtE671ZLom5AoErHDCyEzhK1FtLewpPxZkFoQZD9swjm7woybpefWE",
  "key25": "2bN5dRMsxoovB2KGVc6bMegLGd8amo2VCoEaCTm7uQKLdvrBpmkKhS9rACK5ZSziHDqMBxhLAgJ5FbxQjho4vny8",
  "key26": "2iVMNoVDwLjbiQKmQAPWEmRHpPrDGe5d4xwy1VzoyNxjS4irLfEAVx9pBLmbmXifpTXHMZea5pvq8MWevRYzs11C",
  "key27": "5UryAUkcid4GKWdwcc2o7m9dtZfZdPiKu1ZNP9NMjvtuDpguLbb3Yi7ePkqA5sHkExuEFWJ7N8oi6XjM3X4wpxqC",
  "key28": "2fV5ayEcv8h1i9goVwzaG32LB8qKKYpemw3aTgA7SdAbw4QGBiegAut7Pjie3RJY6cNCxW32y8Cpgh49GD812xGr",
  "key29": "nxW3XMXW3ny3f7xAQBXtk5ax5EgJLCc8S9BLuFKtQNxN9KWWhAhPDVGRuqq3rrRouPA3PWnaxoR6cX3rs3EaAyY",
  "key30": "52f6rBc7DrB1u9RUpnXW9F7YhPP5FCrKJNjRiNpqgdpLzDEm5Ei6raLXKkuzYbhA5faa3XBKvgDifLDf6Zbbyusi",
  "key31": "25qMa2Vm7RicQPn5vSmaWAreuRmg1RXgQKn3pZ1ZP1PhXfnH51ZB9otPr5xbkwEU8p9CtE5BR3HypBWEMC7CMmm6",
  "key32": "57EemvWUqyEhHHzTjkzpSCHGTpdhtRpCANmGVMGcLb4vsfFLvL8k2viLKPw9AcyrjkUWH9Vd1HPDH3JmPQVgdFQV",
  "key33": "2QBp2vEREMcRCmazbn9cDprbrB6P3cYmscA35MKCvGwXQE5x2WSE179Wwk2QviFmWmyL8twjZDuPjUBZ8KTJKWLk",
  "key34": "WmtJP2TvFUtAZUbGkrTbuJyUxyfX8WiJEXPi4FRBmjs5yKx6Be7eVW5TBiQbigFZ8SDZHCiAbF2fTQfCBjxStnG",
  "key35": "54Cc15NC95b2YwE11gyczJFzriVdDAWLgJ9oW5aWcPRGm3kroVbux4vkmb9zogd72Uvk9w6oB1PAY88LUruRAX34",
  "key36": "23fdPZskY9s8njeA64HHoHPUoEdJwcjcQPezCyq5GN1ngLdQ1j24ge5uTE1eWcW5FtqNRrSnyvMJYNZX1NU1nW9N",
  "key37": "3ZzezJvr3YTzWPgTEpQ5RYXyoGfHF9Ut1LPHQD6BK2ER7WtN3nffr7PEBZqLsu7ghc115vM3SU4ERUWbhjRUWAWv",
  "key38": "32p7gGVzxo8Ex1ZaCNzd1tRT45QQ9prCtHiE8AhB6KY2FuYWnVihQ6mrKawymQnJxLfztfFeD27eNuy88Su7PBif",
  "key39": "2org3PWcX9LXfCbXgJvi7ibSQeaPdcygJeZTWohXxEErnyZMzskTeE3Sd2UyxEeXpCoiQ8ywUiXxbrp4yQN8nQPv",
  "key40": "2sK87mxi8GZzxTq9mTnp5VNNEzWdkWMjkDnkru8QtZq42FnHeGur9kXz5UyviJur2t6yecdH5sqh7RXjyDv92LRX",
  "key41": "t5TPBbKpQbnYrv9gCFjumeU5fxyrvNKHnT8HkPFAxzhfrfPnZVyWZBmJnVkTcFZjjsbehsqABNaUqWgwMHgwdwJ",
  "key42": "4SvJTmaiWZ33FxFxwqGux8PhiwwCYJ2ZQfaNTexDiEGSxNpvd5AxKju7VbGRU843cSAiKFMc51L48yLP5w6XXG9L"
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
