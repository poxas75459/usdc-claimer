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
    "3fUgKK1B6qAksW76UgnNDaPYT82LKi5emkDK1RWvgzatsBFpZDCsgBGXdfyAaPJELybQSHKQQvYet1F4arDEFa8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c314e3ZvnYNQumF9dXPabD6MmkfJkZtwTLNL5u1iutEw5AAZhwQF74XqwXbvKRRE6RP3LqB15xhfHp1mRJKkU6w",
  "key1": "26tJmBtWNVJMKSqgiw2DveZUrMN9diNXbfpRvTxDQfWf4HatX8GTMdhkVEgvcZseNyztW92Lnkud44qwgBLFUoRu",
  "key2": "3r1zB7gf1hf2XbpYM2F6DTygNnRPSr6PHmVDTn8f4V8Dgcd5h2L2jh1j3ZdfWwBzUHBSGm4Ru8bMttdH5QkXC6et",
  "key3": "3Atfsf15TGbT8T49srSEnP7UauzSo4n59mJwARBfSsYCSNtFMd6QSNPmbTJnaqQBck2KyE6Syh82BuraBGFMaSD1",
  "key4": "3HWZJduNPGR1dw8dwuXTRECGHLYaVtkYHR3FMtz7ZD5p5GD33XuJ4SbEdSpeUFSrLmACQTJvWWtben4CaVBPFHJu",
  "key5": "3872kCaVb23MkCC16aQq6Vk3gqcLhKqhC5yde8rMBnTK8qY8SmMdTxzuMpLVCznNUffbwYpLmYrK2oXCvmXfL62j",
  "key6": "4v95NYMfVmrC3E9BNETAs6SdrjGJBw9SJzhpHiqmBkFMfTWTjQg8DnsLCQC921cL1dMbtN3vgmWG8NMtkRQZu9ZQ",
  "key7": "3RwbwKVDmEpWwR9kE3MALusmqpL17uZp2yLZUiTJ4Q3xw8cuXhXr6fquT47SHUDsHJ2XkfDXQHByiqZzz1eiFXQa",
  "key8": "W9F7kxNShLJZxrzoRubXHqUcygbAYZFJRfsUxiHz6RB3aUHmFmFVhSYFGZ6Bj6SfqMpx6Z6zdhbHZBSqUnVqBNS",
  "key9": "2BLbrCFsXDgi4DKvwQb2aiVftrVCu9wAR1ApFk88vm1GyETVZ4wyHebK98cPfApY23pKJjapDvoekpsCeq3QwE5r",
  "key10": "2eWTK7562F9ULx8qFj27qGZq5bXPZZCoraSMpFTRsoRkcmi6cwVbhfpbko8RTjxfwJopAZRGkUM61SipRd2qsZQX",
  "key11": "3f6Gh4EriWrFC4zDrbre1NmfiyEtza7gJJPkVSzEDWXAdSMxF6srvbAB2KpCUzwiearhLs9v83an7ar2pSB3CtwU",
  "key12": "4pc76zK8RNk9b9pDi1uTjQLiZL6MQPHZ2EredbCoCWsz3ruLf3BuKnnvNTYhMr46qFmboXWfqkRQ4ZwhqSQgqKtQ",
  "key13": "4dkNoWPReo5mPRQnFS93GfVjtQpKMuJchtvT8Dp8D2sbf2rN1iPpvwfG4Ch2k3V9nEbLbk9oU1BSxQxbsgyFP7pV",
  "key14": "63eEjUoas8eZGdWUTt5cLQysfx2zBMTbpyczQHGopQSvo7RhFCTYGHvE2eWKgjdktpWLS9w1PC351WaYFPbxUtoF",
  "key15": "4to6UVSzUTimMiuH2kCRAtgN4ojyBcqJfSSnk8GowaCgqS6mjgMAQA3Px7b8Bb5NmcaWRnvjRNR4hqBEmGoVui41",
  "key16": "36kWcRhsKPeBKfgLaq85sYfztiNRZVLEm8qFy4YfCto8d7GT4xD76AgVEq6Xr4y4eALPj2vsGH9Xq9U7hJcQdhzD",
  "key17": "64vGLncwtcdYwH3azHqBqs2nehkM1a86RjHK3Nmv6kY442ud13t7PqVR7mnZiFeHonVd8fKSTxLbpLvobc4dqvx4",
  "key18": "3cUcoZz6KW9xbJaCNAYPeUMRnUfALibMPQGWqhNGsiT4AYQtdwjCwrXkEuRaLKyP8pqrL5XCU7Hx5gMJyCFgRgmv",
  "key19": "539J946SRX9D8j984VKAGef5YsUNojSy54P8f6f25vp4BYMCBGPEqPZ8xZ5GP81MzKTh3zmdu5Nkmyr1F5Gy2LW8",
  "key20": "43mqQWdnHzMsWMFUHLbpax2e6gqdi557X9ui32uHvkbgrnr685Vu5HhTeZHou6jS9BLFEyuJgE44hu3xct35Jcbe",
  "key21": "acnaBEyVhoVVTrG1M2hMcQKdpRQnLSULey8tEYCFPgZFUovoNkzaJfdn8ivSaoHCRBFmiCa7xE7KudRaVwZ8MPq",
  "key22": "5uxR9TCLHmWvSxcY8F2a5iAGvkrBYvzBMYaUWKn4K38RiFHzAGrAm4P6egYCitrrcd9cYykhDFxdEZsH7HyZdc4b",
  "key23": "5AzmUfcrfFTnRn59V5EgGkBT35hP244KWjdfuv126Lz62vMk9T1M3Q9bNpePGgpmJ4WdqvXbvYupuex8MtihoLWA",
  "key24": "3XM9fWTcdjnrm6cQ3kiHnp3YxDqhjJn6fmTmrVgM3kgcjAHmXimGKDo6hcvuJ73UboHhhiDiX2jGL8mBMjCmGmb6",
  "key25": "3Jsn22JeikhH7ysE37NB5TkF2d8NZMngARNzPbiH3t38H9F4yp1Z2fc9ajfmYfnQZNmkrmPcd5kyD8Cj9WyXxtj9",
  "key26": "2NR4JJLYkRwNPGAyHFitAFrUjxUm2PTYB13RkQU3gAB1m8ohLMR5YwnTttjo23Cmv2MREYAAkmT94YkTRn4KJAeU",
  "key27": "3LkKh1dp8LVENqAza33NRKp73btZ76rvfmKFfzjR3Gf6nirFY6iwQEJWWVBSyUKN8ngtvdiHBX2aqHTYqStmCTTe",
  "key28": "2B78fK8CNj9BVvVifH4XnYmDFRh6t2voDaVSNydf9hzon4C77bEBjRzicdk9s2AVQAVRLG87DEDwWq7von7DQzmQ",
  "key29": "3zmiqwi6MPGZ2PznVrrWsepb9w9CJsmXjTSofenJp6Citc68cMpRXkmDE18wLH9dE3z9f61YptuJRoAdwYt1a38a",
  "key30": "3NRZiVctGo88EVhv2SX8DdMEEdfzcWVdctUxBaCNwjC2YFqVHFYiukU78vjs8LGXu752NG6mCktmj6A1Q1ubVqjy",
  "key31": "3Fyf1ZU2sKgTRubGiqzVFMhDFv2bLmBbzvW1qbjyYpUCcQoavfWuergX7zWDMoZU7zAexykDHUyjmfMjePhh5sNF",
  "key32": "5MR9yk6f95sbrfeTTRmkVkREBEMFQp8svWNy2F3FmEUqb4R64uNSYAvrBrpB1LatqWviRsVqZQpEqMj95xJRp1Wu",
  "key33": "26xEXXSygfMDdxTTan3NQK1TcWoXFRcGUQtFpcvc2QbpkajWn5wjeKesngNqwq9a3uckGpWg1U33exikfPbW7xTB",
  "key34": "4xezjYk2SnXbknGFmwSjtGRaS9W3Ri7WgYYaXiFq8qdMo8wgaRwDcgKyVikkWiudfQr1jXedwiqkrNonf7KkwSoi",
  "key35": "2k2eAupZ28iU1Uf7UDFogZSXwkQfquFk8m4bpCuMbkh6VD4EaVPpC6ZbAdBLH7NoUAbUzJwwjc5gojTn1eE9RLup",
  "key36": "4LC3vqYj8jZUQ7E69xXs1au7R7suEr9BCZJeoxRpDnkdudxQyDqoLeKU1hqP1xfsTwkGGCqCbYbC2tfD13gtyy4V",
  "key37": "52Jtj45JnnBK8aPNk5C5FSGLvJ5Mttu9X9RijPYY2G9qorU9SgG9zXFTVudC9GtNmTfgKPs3PbiMGWVV1zLdxCSc",
  "key38": "y21NouKfUVeyXAdLMqnAY8UJTpDS9Sqwm5CXvMyiqsbLQYoZfFWTsYM9DGCjuMEfvBb8TBCLYgKPBmViqFcAPLh",
  "key39": "2TxyYJRSPZHZY9uzpiNY4JnUY6aqMb98cRe8xmrEQgdK4mfZcetUm9NAz2MfwitbxUscNxu5onbfsq6Ep6zSn4Rc",
  "key40": "pqZsDCrk3PvCAKeyRmNHDDk9R6xMgyC63bvQmZFJ35NDcsyWHE4ZzxLmqks5cwGZ8VqSxMft3KXBiipje1qY3FT",
  "key41": "5zAseKc8YFJKMeMsFXsojpwc5KVN8b2Xn7sNvcrzFLUcXDheBZPZ8WqwHPEYBSAgaBKth4XtpkcjLdi6iU3kM1Xe",
  "key42": "25th9mbwXNu8fUbXXcm8MFqCpoWvkxASub9Up9YVthgZ3fSK26GzdW3FB4C6iHwwBm6BhB5xdt7hoXu2TAFxwHjb",
  "key43": "5Qbu95sVE6XfAn2nxQZxVkDnbcHhsK3cE8Tw5MsWPCihuRRqV3EjKVeVZrznQB8Qwb6GLgPqC6SXdVUehMDiNeQ9",
  "key44": "5fSRxtSo3qSeXZFvxV1Fv83KZhg6SuAdzisT1t6ofZe8FEzg2cqJKYGbkevQ8KCtEhUnNbLJsaUW5wXbBouHXz7X",
  "key45": "56RFZr4gPb2CQsrVzScPT3KUF2zdTp2yUsARhgsftAguVVqkUPBY1n2NKR9PyygxKN75KMR1ooMhTt2LD4nA33Ru"
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
