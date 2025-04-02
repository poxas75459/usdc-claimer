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
    "2DNVkUUCuprY8qgVLfCk1cwrCfqH7X83CVhmb6H8DHFYTxYU6tPTdeZzP528Ckd1DY61qRcLbo2QYDe4EDSMs8F5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9VTQmEAB7NnXttQiRTra8pM37LiyR2ajXrcRxdcXGcLhVyp2hj3H7cRDGgheLwMeQFex86JSb2KKKwJU99Xbnyc",
  "key1": "3mNBG2qybAMbhQ7m6A5NvuajGJ5S8nHzKyYLGYtPZsWBwB7UG3nBRDVG1v91X9wJyKm6LUjJR5AjMAPgmCidXztF",
  "key2": "2QGEPDMWDsGevzPLkQiZ69gKaLxSehfTkVybTW53YVPFqeQiKME6PuAiLYTkoCAJJWnefVABGGLauC4KYYtcuDUu",
  "key3": "2vtBaK2eaE7KWV28Az9uRzTjecFDDizbkwbCFr1PV52KVtauDLzDsn5Ly2URBpZVA5tTyTJgfVinmsdK8cD1c2kQ",
  "key4": "4LUJEnPjpBFW4QJavsjjuiWo9UxB4Whv1PFkjia3wsPEr5Mfiwe7LEfktsZg63w2oELcUxHJPgduRXvdgFvMZPaV",
  "key5": "2JJewk7b4ECcgcAdBGfvawzqQwhgRV3vAjV8taUX9LnTSBfVZXrW9NjuNhunn1VJ3LJdnfu2PRDL4LMZtrRSaH3W",
  "key6": "2JvRnB67VPe6p4CvEiDUxTvTNEF2LsEhuHw4WtdgCm2Q91RSx2AcjXkZpXHsWXnygibknG21pTWNQCvE1w5wRTw3",
  "key7": "UpCf5ELubMQMuxwBiVqNYjJT7dJFJUgEE7XCZQJen2QX6zbbgLs1aXbsKxfZmzSZDZLAVk9GwXZ8PoF9gE7qChT",
  "key8": "HjJL6q6969XDfy96VnoWQuJWJrXBHuNCcTwGdwzpSWJXmvmLtNvQtxbHoxMqW9DrjEFh96tgqGcbASZ7Y6sCHoz",
  "key9": "4SY8inif3KPgrzKsT8NxFwmJ4jY7WXNpr4iXvvbbebm52zNoFcWdaxwHD68hRvih6Pc6oj86BqtN8qMR8WJ1ScGD",
  "key10": "2Y8L54gU3urfeR4AGphR2UVqu2E73CaXdZytKBLSu1ajaw3R1JLQkDygBMfa1tekDo7EEPhhTu1J1CAUGaz1HkN9",
  "key11": "5cfB4DmvXfTxNUFbPGaGCrRKuHvff261HH4KHTgebz9jywBEn4ZwctTc6TnQPv67m4Dk9ybG6ZhgTusaKf2zrydW",
  "key12": "yr2D4QW7EvcYEirMVaGKckGuxAbQbbz3vzjR2kT8StdtAFQXLBNcnJjTiuTBo4nvYJFpA5aL3EHsxhpzAtLM9yA",
  "key13": "28i4S9u6vCLp4Qf3k5UxcVdjTGUutzJzjtzc2v6TYGFRhSDG1GZftcLCVHUp8CuXTFiS22eXcK3CddhfdetMjNsK",
  "key14": "2hsnTgvVjdAf3VPSWzDbZUNNfJqD4cJZ1Z4yyL9r2cUbhVYnowEv2BhVET7n5m5f4Q67xELgqaq4DcKRaB7kG1wj",
  "key15": "3EPvwN5JUD2fmd9pZPyZ5hJGfDS328dseWYUXVnc2Z679AnSjaoAesZ8RFCMEEDL4jrHuLqnbA6jcEg1EzrSXiv5",
  "key16": "5mCpdAboy6mQJ578771ftAq2G8La647HAdLSJJEeXaewFbVtSWo2WNPbNwsZVxYq3nomRcJrfmo3SvV1xkEQjdgu",
  "key17": "3WFyyq9UcamffZivu3acpzsqfawzxKnXztF9UERGKjvkpnyzdWLMtUJMR9cZ9HLYPr4ADfEzbgziQGAZKKU6yVDZ",
  "key18": "652RVeL5xijGv3mk5dKRHMi7v8F31DiQLNs7CB1pbtN7Sn97i3TCyz682b13R5LVpqqaQYsCaEuf6gQ5S4EMYmkk",
  "key19": "3JB9zeosoYTxR9pvWBospzKULUWJWdyycpTimMhYjtRv8e9Ls8v6KF2sUWQC4Ro2iYBQQHnd64VAvujnMDkgLvEo",
  "key20": "36e6F47v35EAy8aUbtn9FDExUpREnb7k22PGw5kizUwHJyZhgudNJyPjoUbp5wPSWEEZs2pnfDkSsN4mFHv5qRtL",
  "key21": "2x9xaQ47F1wFjEmBaEWw4QNSQTjuoe3ESbcGQPjTA5nxp9iWEFwkgTo6Cw4SNARakkHcA8w2kCdVoP15R3rTDwus",
  "key22": "2b34jgZwDjzdAy6wP46poMHmZJ8cY7Ak7rzzpfVjGsKX9A6VQX7fcY4uXuAwmsJYkekv9NNEdaFqJFQXMsYPV59f",
  "key23": "5C5gEFsdKnmGC7h4gQGXMQkTx2RKydT73bNAGkQkTVQt5rCbYmCBhjdd9BXVdriwPhkbLpe2ffvMAmHamyEbYtDd",
  "key24": "4ytyAVt92XYu3UXXoHLpefvDoc7XV2CMCAZifdgHKXKGoaUspyoyPRuXLjTXvnrWACb3mwQf2oUXgu2WRUVEPQvy",
  "key25": "5Q5kJVcKCXSB6obnMayUTFKsWdVmCqDpx8CC3Hkmdj2kN1PTkeqLzP3KyRJNapM6X3eoRxVzpasQbeJGT7FzRsCd",
  "key26": "QWs2D1mUZtpzXwzuABduJSdiwx77QgYvLK37wWD6gYYHo8xf5v47zC76ZEPTPxg7PJPEis6NFkMfMb8bkKQdqx6",
  "key27": "3DYEck5mpznWRRMSjt1wuWhEuBMCyxjmuyqBmtR7AE5VXgKPNFtMXvzsoaGGatacWTRwwrJaDdqnpHboRyQKVGb1",
  "key28": "2xMDeaNgRMyFTZitCBcfRX3BuRAELhHnUdmcXvaYZHMJVs4QnGnmKa9jrdBosSjGXDUMGGJZb4LfrrxsHcJkTty1",
  "key29": "3bj9zHZUniGKLacRnPX7FLY53EdkmQ9UheWSCibqaGchh585Ega4nBLCeu8PdLvugifBDan9ZTG6cyPAAwEHyK6p",
  "key30": "39X7gcMshQdVUe15uamHDkWxV1aHJPFHbb97cYRxEi26N5QTJU5sp4nGXVEYemAiTeZ4bWejimmVdDNxbS4DGEgD",
  "key31": "4ieNVfXwa2TAKymYgLPzEhNtY6zD256C89txjEeXGFmk9EqfAHLhPyq4kpCnhra1mGraZiSzoYS32k2WAKbww8yE",
  "key32": "4wiPsFjBLU8syT6L72dcwpc2JJRAXaKW5uzLBHmTqE76rnhGTx7YHCSsE2oW5RfdVnmXoi9eYhMV6VHF6RC7oP7f",
  "key33": "4aG9EPqUBiiNkXyC8Uyn5gs9rbcghYxBvr3mLNmBnyLZKUKwTcDQPs8wVpxbfrWxJ6kpwiA3Kg3QSkA6m19CXKZP",
  "key34": "5ZA9B8MneyXkP4aFMnnembHSADwf7EfeSooJ76Y1B9NrRBSXXZrMyvbmfawHbW82VwY48EVJ4LzFQ8HAGtr4dMbB",
  "key35": "quNeibv6fDYX2oseTiaSrP3msizfR79TLwc2miC1stpY3kECW3f9XitZdtSJSREYBunAhj7tPZHZu375C6NSiyN",
  "key36": "5H82zutdTQ85QfXv2pGA9xfCXekkhAbU2uTo5fZvxeyQArH7c5XkHdKFYMT3oiQoSJiyqeqccJC3GqmUPu7Lo38T",
  "key37": "2x4z83YYoqa1ZxmhMxRJd6TCGTuu6FAgiBSaRC9otBs5dy4EViWp9e1V42yWbW5iXEZr1JfULbMWmYw9VZjpmwC8",
  "key38": "3DrC6E991Hy96Swdrn8RiM3yz5tS9fMa3nGugc3jgowaYVx6KfGiRusg3FZgS7B7ztRZKaAoeKdnLifmvJxAHadJ"
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
