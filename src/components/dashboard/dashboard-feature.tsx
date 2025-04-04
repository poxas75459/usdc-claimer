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
    "36YHAJaJSWVWepZedrQCogFdWC7P8DN1w9srtmPJPyRYCpTqtc6eBUTUpAubWzAfHnaArwHv9LGmZ4P7tGc95XgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MXUqhPCGDo1ghAqdf9KUJKbpQMxjgiTux2PSsFb3vedzjZbe4tgB7Rd2jP4CwEJBzZXAwxjiprAp8cgAdoH7VAv",
  "key1": "4M88mDKiNJd6TZbek24ZP82GnQzsUSc1WMNiPMCxmVNmcxqjDnytYT3NC154kDMcRuimySgW1c5ArJrywPrMyqu8",
  "key2": "EYfB4Mukdf93wBZF6QEZBAxJWcr5gsUsfVdFyNf4kDvTyiKzZteeK5hM4dZjJDe9ZjxtDBhirYCHRBGeCo9iGBJ",
  "key3": "2Py5S1FwFZCq6LH5j6jW9uLD3CP2ty1byTzuZFD9mnxFomt6G4uZhAuJE65cBCukEFsNsupZNWrkvbXbEwAL1Tbz",
  "key4": "59aiJLRpKZHsHRyrsiXBES88vfReT4iEkGxQkbTc62fdkNoxV41enAHBcp6dW52mZTfVtgX3nubxHrvokUP3zkDg",
  "key5": "4dVLfAFGdFVgR24uPcBQXfACwVNfmYKERSCBHJeivvtMKQChcKcEvDHFVYRo777wedzxzNEVtDp5ibpqnxgWTQEB",
  "key6": "2unnU7GPYZjFWBBgdmxQoivjqY81VAMLptgwg5c2hqgshkx65Hd5sEP73TtagKAJzJmpaRtoHjnpF3HBGSBYd3Bg",
  "key7": "3wWwMmJckNQD5Dut5aMWhAgMnfbrmZq7i787pgmPzEhB9AJoYnosSPAWPfXGP9X2xQpjsRFxiNvTwzbg2VvZbJU7",
  "key8": "5rLSYiUrjakaYDhE8sGw95vSHSVGonyuVPuSEevde7MnjAW6UVhnWyfMaMXYtXCXEsCoXXDFmLaEsQdYPcAsJbfB",
  "key9": "127y3jmYWimS6mNcoKyMbxMCbj5gAqvZue91pydZKQ7vTsBWVGqcw7KqRRQFde26aAdLM9qdbMKnC3ZXfidAqEW6",
  "key10": "5UavyhyWp3QLiXUzCardh779NEiuRx12FtjkswrUCvPMv2HVam3yQ6T5h9W7sAnKoYJp2nBaHp72Nc27qG6e46qE",
  "key11": "3UzyuAj7HeJJeNt1TT7s8Bj8cqdoM7NCf9F4NMYxvxw2qryHGCTRCcURsJKhZwnb9YfkbzbWKsdDmDiPmPmEYnzw",
  "key12": "56cMbkGQaeLvwK14Hhmpn65cQngDUemAjdW3YZKnHVGuNmq1v2ZV88MDM7xp7NE4xGfegyB98UPqSUokrpB9vBuG",
  "key13": "2VGeP844ixkWxeDkdJX73aEW6cqAb4KsV1b52bmdPUz68iwYSb96jZpPb6eymZHmyA2Ds4wxfDJBY52NGKdpJAHX",
  "key14": "23K5if9wrqeFapEZxingcQvkYmwFSpyKE4Yh1Nh6ZYUrXsJWiyXTTEKm7ZJxJxbLPUJwjUvGfDTeLSZ7ZKxZ3NrU",
  "key15": "4r9JrXX1w8KhLN6jrxZ2kgz31F8vax1cjFYTsDXcRJ6xsW9ZudzWFNGBekHuNHg84oGY2jRQ7x8RG7CTabgCnEBv",
  "key16": "3qbczmsG5TesjsdzBEeBy583HuAX1XFcVmpPpTj3m2B2K7TDg9iaT2UMqxHb7QpVsZVqqExisMauBsPBenwbdpcc",
  "key17": "2KCGKwjgLexy5ipqzPiMoyh88DPYKZ3dSBAqMDmXdXTQGDNaZdYR6r1t5TjEqGmZLLwo9zyf34ScHC6EWxnDNSHW",
  "key18": "4HNtxGN3sYigd6cuakp7kGFyRqEgGQwCFnj9RXMUAPbiiSYfmGZS6NZ5LddCVz73Rp2ate5mRZha3ZnXLcovAruh",
  "key19": "2tAbdSQSgA8fyByA9h4FqMY3FuvRtBzpTEUjbKT8R6uh4wTvfqkKew1HGwuLQAfrJ6nhdNCqaWU9Sfn9Ga8xb8Yf",
  "key20": "3f4cuUh5N9pQUEzBs12MfF52mkMyahpYshHkwJEJ8vrpbQSdQdU8tSpXgf6WMS4Wr1siVvayT4zndpguchodqj8W",
  "key21": "3HyVSnvC9B2yJJ3mVuSPoQeWaExCy8FtGLQ9W8cKgWQzEPTvLAwHwNwE6S3TuFYtReFYNnUMRtnmczjapyCvYvdU",
  "key22": "5urV5RXLcEw7TLzLW9maLEtb3pP85L8cdWcJ9rBXpw31qxY9AE9mqmCQAp5bdQbYfo5WJnPm3RfNyreyupQXqUEn",
  "key23": "4CbTZfKQQpepAVccCEtxuBNBFgBiT2z3qAUSMh1JH36So72LsvhevGN55WrBp2xtatUFNYazs8eefGCFYKtX8qHV",
  "key24": "PeJgBg8ZW9bb8gcukUS3QXCjzihXa5audz7fScHtqe7LAZUr77B13vj2fgxTYrWWHkPafL83VfdmSEwBMkM1FR7",
  "key25": "4ZmhjpQeAmA62fphvoz7YrL8m9jpF8kn6VQwCDxrBhakh6YUWNoZjqZ5CeYWr4W8rd96SQ8F8593tZoZoxbZ5NJU",
  "key26": "4bMTfNr584NBQg3LRBmD4NLVTYpo8HubpnTrA8XpVipwAQsKH99rviTPsYGHdWhi9QZsZyCH6sGMxJVZh2FF2jm5",
  "key27": "42Qaod2TQc955ZQjhPS47bZAeg9zAeDxycFZuo3jxCQD39kFhbQsREF3ZQdsD8rNhnYgFwm6TbM2MrArVmaLjuNK",
  "key28": "3qimw2Pr8z5DR8aoN4uncA4QqmsQoX5Tw2ZDKQqVMsNu88MZqCoYochWEgC5LXsLc6nvw73FfprEXAJ88yDyyss",
  "key29": "5wCa3c7wzDCD9dp66DWUwPq37F59KW2VXg28xeyAA15W86JMQxgLBLZdj3QQ6PX7UeAGBFpKGBnkJwZwcLvgMNP6",
  "key30": "3yDxFvG5Jrpze1FDRdojvf5vWxxRS1iAwupz4e1VFShr5iDPj3YZwV1KAy615CGVUfTYBYsNFBJ6pcinpBzptND1",
  "key31": "4KfDcGjxxDXrqkhw7VV3vRRUn7iNL4oXkW5UQD5oX2KMCUeEXv3FKE7EmbZ6givm48DmzJMAbvmzL9uSWvxDcs2s",
  "key32": "3cnDcmQBU6aAN9wb9Z85jFe4h3mSynnJ8yMWKyq8nLUThFSzxkTWnnrpnfHiMjmsdWz8axkEwTXyi79LiSRmyrsZ",
  "key33": "4sHApv9RGKugLhtWZnz97jxuLor7syyQPJDuC2v1UtrrnZH2WtUNXP2oFkM646AkeYPNYDWrd1q68Zwf4pDQTVXe",
  "key34": "5eipiQ6ZGuTU3qVC7SDKHMGSEnQt55uSF1S8bsaQnvYow8fudVEKaHMrZUqjcLSfpk86W1Q5H8Kk4xumJpBb8Pk8",
  "key35": "4C4UGA8bcQZJ1pnqj72cLiNVZisW2DQHe8CGvb4m7RTEkPcUqRA75REUnm823NQ2tXMUdPZckF83gmkpnvN8YXPh",
  "key36": "3Uw8PynBP6CxeYmrCZSV2BAyXX3rpJ5aWjcdEpsByHWyQDwCZxKowqUJsYRT2SZwCfGfGUdBSSjGes5kC6o3vr2d"
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
