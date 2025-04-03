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
    "ELwiUSGFt4D4z8QGzy8TmC6p2LwqjQYvnrCUHk61u45vxkdjqeiqb18iYPbZx8zfETd8M8DZWXgm3gYxjR5SFJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PzgZVEn8wP9Pa1E7ckSQdPuB4uFLCmHxb4nDafNxJ1SFrYMVM5uv2ZD34Bcdm4PvXzKTArWLmwnqN6NMGZRXxgD",
  "key1": "2S4AEQuuBaDZKNMpmeboSbh1FeuqzHa41Aqqt6yRouZrhrwgy8SyiTFPHHtGHV9upcegucUQ4H5KEAS9Xng4UJEN",
  "key2": "2vAduP83XpSqM3VguuzipYnfRPoksFTu6jHJvkBcECJHBEUaLmY7iGsaEmHgxXxUPEy8d8NRSZveeMGc1WGdjEHo",
  "key3": "VGaRTnDg1kckwE33gZ45Yh1iQDZFqU3vyR12sgpBG2JsqyWsgGouxbSMoWgRYCiUPS6Qcd9RCm8p3RRUDWCzewx",
  "key4": "xW4gXv3cZYKaXgzFvQp1Le5hzfo9Mn2oCUc1SZoDAi86GS9RXW8ZApNoX17uPYeRh3ELF2JiHoNDuDhro1pvrum",
  "key5": "29iAoc28sZwckzxUA6QS9vsmV4C4spbbnjcShtLTX7boTJv12vW3nqsTrTjfey179Ggn9pfCmJRg1b3ZAE5CTHTS",
  "key6": "2LH6tnQiaLMCayfNpN7aCytu3fVe1Vsktob7GweCZpDSnG9rUXuY3kt48JTF172YdaRkNNPqU744cydm1j7wyJi6",
  "key7": "3NJ6cz2eWTqBSdDCS1t2Udf39VSTPxYktSGo4mkae4XujHYSkwE2dWRgqUUijW3Uj9sGcCfy8ga4XBhKsgQDCCQC",
  "key8": "4bTqb9viGgjTm3G9riTa96rmTbo8PuBjgD4SASfwXDK8NtoVhyjdSVhJca77a6E3faickg6T4UtNwYwGe6Smsv5v",
  "key9": "4kRHLXxgYSWMafrbFAn3JeHSQzhwH7KpkkvSzjrqKoLL17Zc7LrGMWf5dRYCPjoKLAz8k7DGkpVTMyAeAyWd1zx4",
  "key10": "2ibVM2aAMXFzpRTbk3E7MxgPHz5AZ6dekkR92L2qbdBpMH852CfxLbB27PqxxD8SbBLFJR6JYAkGMAqfg6jCn5ki",
  "key11": "23FAfMQ1ecUtzwNUasJSbHCEGeyQ8CVP7nrFgxHE7A4SA5SbCpL6rYnJMoLFabeYzhMPUdu35mFU1hHb1JvEAb2f",
  "key12": "5zhCNHWTxqrXrKDi6mhTZmV1eF2ShZm9jqj1j6EcQr6c52Qj6hPVmnKGC31XrH8MxEs1Ux292c74xHkKBqBhHd35",
  "key13": "3jnn5EoGQehRNLqQnhtpzfsRJfhf4C1dZN5XEhabcGLvDVgU44UEpvduYCYkxu31RqdXnZNCcJFHV2S1ApB4u2jW",
  "key14": "2v8eDQBXGHBBUC3WiB7LSLVNksYUfDcvsCZvNZ7rEFH8oTdqkjU2Ut5XXrPFMoEWp7eZBuAtEJmaRuPZRcPv8KY8",
  "key15": "2rn1fRJctJNv55rxuoMMQGorGR9p6c4PjMiHKuPnG6PYZF4SHcjt9HYLXx7uZESpc6D8PgpHqHpEurnMzcHLxAvv",
  "key16": "4k4jBJTaYQG8t948Sa5pf9aVYdQrLcib2hoARtKnG9bGnHoyAoxFZtMhNsixNcceMj7XA2Xuan9C4Nvdk33Gh6p1",
  "key17": "38UyTFUCeF9c3ZqPNrM4Ck2xMrHMhMy4umHt3eecnrgVgNXjbhj3DRPUmSVxsyGgTaaZQSYNFjDNDVw2PanNRE49",
  "key18": "5Q9Z4brNcr8tsqmPQc5wEjZg9N3qbZHYX5DM8UbLPJvWnSD1RULQNoFkUYbWmDVToCgFz2nBkcsSJU5EcRVsxLMY",
  "key19": "YKb3fvgR6izCv1yDQfDbKtxW1PE58sqyeM92CkipcB9fPHbQXYvinThXZhgmAHxxgr7J1VtiMMtqHPiuwt4M1bN",
  "key20": "5h5DmW5X1uwk1JbSkDP6sDYV8Xy3CgHYySZGHestrJDe2c8gTreak7bBM7hQY45CuhGa3UXHrGgKdWTg52nZuV2w",
  "key21": "4zVayiu4NEyL4NdcZAzb7iYd8pYaD8uGqF2pYW9aDcVv3iXsa5XHjVuRTVF21UjUyFZ5XthgcVki9YEHPQHVGKHU",
  "key22": "216AxX8s9etSGAqQybeYz6CoudsxZcBWvvBpM3t2B5dfF2sbgFzFavMzynbE81gtuoJ3BTrWkfMuzmRnuFgTks53",
  "key23": "3aGjcCmuBBhxXeCQ6xHbrRsQRwYNJq1Ua3y4YrjdVkGshVcsdcVB6U1seGQiz7Y8R16APaPzivqow8ifJWZXhSWT",
  "key24": "524ixmscm27HR67EvHrSyTBYfEhBjCUT7Avt3bMWz4MdspPuvzLjrYFuPhH7XRxSRtfxEjdCd565to5cdqMwEWBD",
  "key25": "2jZpHkzdRp7SgwdGnUTbmTdXQWZrr4Syu65W3ZtmnYSCDKv2uGm5WKNw35uPeKpedK2qfU8NJsLQtPNh3Uz5ww5E",
  "key26": "5xNFt1Y9V9Nm4iHvn95tjTVkrQJhqgBhkh5UGozs2Ynkbvp6FWE3ww7pp3xXKdaMA86KyqfCvuhaxa8XdUXPd1eR",
  "key27": "2Acgpnoa9GNsvq5AuGrChDJxZ7eFCTKqiDB1xR1NyPdWcDz46SJu5gBvDUxgumpjTA9bkyZrQf7jazMCWcpTZEzY",
  "key28": "wkL3dp99wcTy6j174pgwXU8C13NQ8Y27LXLv2XJwaPWoQ1vLd3GipQTnjySProzgS3M2BAsSLtiuZfLBL8tKT3P",
  "key29": "41eFY3YbFcgWEeGxhx8pwqLvtW7Rt2fhjnoK3uMTJ1aygsLGLe555FfjkqUuhLMG6MAnZMGYY2bnqxrH6yLJiMY7",
  "key30": "43fLnctgXHXagymVHqJxgF6QV6mMy4WYhcyGJruzggonUvy94in9iryS2f3ewiy4NCWTYU5UKP2PrTXbfCho2bAU",
  "key31": "4bF9VfMyVgLZNBF3zdWrptjytWUUNsYCyM5ncBofPTLFqHyd7af9ku6MgsT9P8S7wGPokSRK5XHoYykPviqu3joj",
  "key32": "52MvwTDZC3kW5XqMBaFKu64pT2bCxo9sE2qw3KnPS3itMgsVFqE4FiRhikSATgKLLohF3a7KXnAyB6evcwn1zpKf",
  "key33": "46EnWWs6Xrcc6YziwCjBCCMMofoqPYyg2bB1WjqeUQaPCP1qchiAHbodfnxy8eAad6nvydqWcQxPy7x76yyxCaes",
  "key34": "3GwAPkTETCU2kJAuBpS2bPVN7gJsNs5jdYBb3HMLmvPY2SPA5B14Hnq16kR6uPixJk7x3c5YqzqT7hjXph54TUPB",
  "key35": "4EQwLkt8FMBRgfmBKE7zTYVnpDhyqzyqegD5odqvSnK6pjSCHJRDK7ndn2ze3D75ikEsi3ZpvsfXfsRyfUVbQqdp",
  "key36": "5kNzYfsq8swrLmzzWw7PsoAADRJ8dS9NSSxU99jBX1c7Zp3QLW2z7b8dGRe24WHDURzUo2V2fQQtoJWtJzXiuzV4",
  "key37": "66UEdCPMbyGUYrjvwQwPw7mesuMwnWS3EegbD3ush3xqNqDVEFkGthd9mPJBjFWzU9mzYceXhEHQ5R9Kw12NDgrX",
  "key38": "35mbyDbrcimMf6KRPvy2BZz6jURJqfMQkzDj4xR3T5f4RkC79J8r9x4d5yxn7FBTGSH7GHWKMHHf5sdLAWjLZD6C",
  "key39": "3tkHzvkVFtpbPVPUs7ecEGYqAgAb1EZmjGH8xubEh2sLjS61CfEWk5JzMUxnNsEDVbZ4FTdXm7oKrFEUuCzHG9kX"
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
