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
    "vHuZ9uqVvPbmVb2S4FdpxCJ5FdmKUT8ZjrYuoD1aySP69QwVLAxtGeLNAXBzMCMRQU3yybh1axUEPvH4DHEr2z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ojYWzXwAeg2LWhfCPiFZwgP9DJvZqwnYud9tqLbxqBsfiNPRc14N8vVD5dJNjueMkjD1BNAbKKqjSsGDJz3LiST",
  "key1": "Eu5D2oRRcoMh4FQjKqeJ6nhSwHmDtRN5trvoGuZjzua2YEsCK4Wz6FbmEtZRBFfkpP6SNFz6pNdi9Newh5VbeZd",
  "key2": "4WhEJ5LDAq6bmEmQjSY19gme6mNQZPwp7QsLfCC8H3Wk2Thg1t45MDRrL9vtopqkuZAekhrdK1X81sYZ2fEzu3dd",
  "key3": "47PyVfGGQ5pEM9Jvv1rB1JjNvanTY1sXQLKgt7LxwMtqiJ3ofu8jukL7nwUedFLfybijwXMHKHgSkn47cEehqiVN",
  "key4": "3hp6jGJ8FHYfCrA4XGZGE4heUHHPRCLzFHJ6tutoJDVA3qyv1vKPZPoRv9v8dR7GEt3FHEh1WYdjLdixwh1LHePD",
  "key5": "2mthsGU2kaVTnQVGPCVHptrnYcHzfiw1SecMRiHD7c3jNYf9y5e8ahsGcEmQxp6gSvNuv7NLekXFheTvy7jE64f",
  "key6": "2DviEBjK398X2YsTjmwXc5M5F8MHz6B4Xpd2WmcpzWCHnwuiTPZxMx6FfxThQ1Bu5rDp8VXBv1CzZWfdLVHVCKT9",
  "key7": "4VAZGqkj1nY114aDh1XPvu46Xc1dRHuZ6jPzBRZktw2MsmB6qEhqFWTuMPF2QNVvuZwqdcbfbWCLhKqrTG6KWaRZ",
  "key8": "3prTepsVuYTeUPSeCMnPX2g11NcPaAH3kSzQc8TMZjmpXa3LvogFooTHoZN8GRxgmQjgC58H5pw6YB3DsXhjXYjH",
  "key9": "3UnSCCTAyo8ihEkgjSevyL2ovQ4ysoi5UBDHEixBqKfKdjXBMqRVTk176jnUJ6LcL4DhqvY9eFcgQUJyuFmyBt4W",
  "key10": "1jamPXuAzzR1Nqh964kjiMxu6BvErU8LBCsYFoKFf2Yz9HWjUQaNjVJzSx2cRkDuw2cAcaHuscKQ5R6nn38j8j4",
  "key11": "2w14QC47DYH4VCTUqkP3rn49o2o9PWB4cgmb7H9TixSEy7jMYchrS2AzGje3BDBxyMGZezVFRQf5iMpNuruRV7AV",
  "key12": "5fTidELMZNu1sUsuWKYUow3Cw3zTHmWSLX2rimeugj2yyQzHJPbNp2e8uN79Hc5hDEjCwQSdM7nxswKCaPDJdaVp",
  "key13": "26ZfdMrYtJqQQBqFwZr1wwkW2rF1YrQNZc2D6B9Jj741uktqP8bJfDPnZA5gGdWnFRUMVBCckRQbeJ5Q53xYT5Sg",
  "key14": "LT5duj9BvnQqFcGMAMAm33CYruhahX6QmUGf7xMuGBdpmoG2q2vuGjGQCLkfFENZKCLodPB3WSD2NuKCnX41U7i",
  "key15": "4HQ3ViYpDCxSu4izBiioZrN3XPwXJjYt4xczF4q39nNAvyA3gShGSEp8Zqga5yDaUUiUiGDbP9PByBQ2PriJ1RRj",
  "key16": "3ADBWFX3wtH75Ke8QcZfpE6gFZ9owgKXgxo5oVWeAJmEiDes76wKrxUKWV72PaFZYXswZ3wQP8DgmkiQwcDYmepL",
  "key17": "edXFpsqEwq9WD45UzF89LF2cwK3iDNVgCMvnUA3m5GkCD3SdVmVMF45L6odWY2fXwgrXNmeASDHFjXu2BEcZnMc",
  "key18": "29LRvPCcemhXd6Zka8aJezmJro46zbSMpZervewsfTfmPbdcLD3VrJ6paFRyVgevgthS7ie5YkYFC7bZSmy879qq",
  "key19": "2EHLmfP1GcTbgbEeDJRX9t9izst6MNh53sqeKkoB6re7qT2eKJGaNjANWaLMSpi9ge6oUGnyb7Vg9p2YMhDKGU3Q",
  "key20": "3ya7AGsVPJjNuR6zmvZ8fjV1kfco5VyXESqCHtUD9jNY276iYpD8MA3ee4mXvDX7sdWpGEQTt5EVGXdB7JTuCHF5",
  "key21": "63PrbEKETBoMEMb6uuzwgh1Z6Y9pSYtGYZ1Kw7ff9L4cMApYdWbpMKhXkq61bq9KCrrdau6bxuzXpSTSQnmEPN74",
  "key22": "KCsasM8tkNVpVNJoZau5a4Km4GoCTx2YvtM5dz3gMXSBYBZU32X8SohKjiCaxE5rMdJwEM4jrZHJk13TdUgdAsV",
  "key23": "2sw8SmPVp9enTaoQ3N4gbjiuaURdF9PkARhxyAEEekc385TiKJGPGEe2iadq8bGhwErNLJyBbVV2pAb1Mm7M21k2",
  "key24": "5D4wWfGMzMxgeiCptzq1T5PdYhdSN6pYK98kcUhqgUQKZjRo4CFPkoL6sjmvCW1MaAuFkpRG4tz4pnwqWgvCB3oK",
  "key25": "5EtWCNbgTMwUcjPfERjMtszwBBh88NGAZu5ZdSuT5inAwMcfFBrPSAmphHbjTS4cMqG4piJgswLxJ7wh7a43zamt",
  "key26": "4BrvSm4gGAeJwhugUfqMD9D6ECSuTeeTNTHRePL851CgJ9b2Yf1xhpfg7ETg9m7EjVLQsYDjnYE9mMJaHYGhxPQ1",
  "key27": "4DfTEi8ExnojvaKrmp9Ym5FBBE3F14jQ43cugLaJrNsseyS7dB18jaLmGR4WcznTUfDWpz9ePGvpt3aT9gwQRmYt",
  "key28": "3FYBNgT1HFgy2FWS4KTW9GCnWBw79fpFUM8WiiBvGeCqWFQ1prf4LcpWLyPAuTDaCikfgahxQSqGmuyvAWS2ZVXw",
  "key29": "5QNrYHhs26UCxt9RnTcQGGzjedfNQz7MRHvcjzWJtEAbGQTyax5WcczaAV5Xkd9S2F87ZJYvTGdZrvdEobDKhA7K",
  "key30": "7YHyDtWecGXtQQCi8JNuy73ekHZsmTWZ3Uek4W3ZU8tZbntzXsRSR1W5cEkywfYjtvKveUTFvwdpfXLoRxjTidq",
  "key31": "2DQHGY6ME8CUiScshmyiHNNsHs2tAEy2jRyw74BVxhBnBkoPJyDkynJNY3gtZRWWSVXPFg8asZS18gyQwb4KmG6D",
  "key32": "5bw2fnwWLKkSWsMfWBudK5cbRG4FAyWWzPmCq4V8a5baqyq5ygMwNgCp3DpQodpP2hkT8jZV4ckFLkADtrSZwoKF",
  "key33": "2Ey6hoMb1gn4TuiLJCwcjFg3wYAtVUVLAQF4Z7p72438GoX2AnbXvLrCxjMUqhqxET4pfFu2ph1Tye6nW2fpZmry",
  "key34": "2w1d5XTM8U4vt5GK6hAXFSKUAoG7BnzdfFF8ofRma65KffJ9viyrbaRY8hWyRg3kpTA77R78czvhzrUzVwrPUW9G",
  "key35": "3fSjrYd6cKrfAhAaGoszNLxJhjKNSSWt4MgxxSueZ5kQiYb9SZbSGa1jg1EBt5pCy1W42bdGjoe1JPgJKbt5f7FF",
  "key36": "43ypMUETFApYGeLKxGj6MnEQqj3gzA38pXFgd1kAanNQXJB4NdyDgx8wFvq87JTvBy582zRt4jBdaHDdZbBq8Zio",
  "key37": "5SibTGa9D47Fr3uWZYX2DXAVuPtJV8EBtYQhPUAPx2A4ntZGC3PyFXxxhyWrvQky3Zhmpsqjiq3USvm6ZzPBT23j",
  "key38": "36hKGvTHnSZcWGWEJd21iJmPUivooLqgxqH183niS3GM1fWpRG6VLMVEBjDhENAL9qGMmzPzfVG3LcySKP4koKCp"
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
