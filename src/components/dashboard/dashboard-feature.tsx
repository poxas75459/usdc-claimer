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
    "4KTwno5NwZedoAbng7Eiz9KwnPsDjFznuNpRFpnVteyit7gEaZcfWZcsnKrLzM2b1q15NH6biFAvc4J6EAU76PZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZBfFfoBhCBwWV7mYG4dq8xw58275FJJ9XQxhpRZ11scEaomd58s3iWvM9dkazwti5Fs28rpRQ6u1Qnq2yPBzVKS",
  "key1": "2FbKUYhUDz6YwfQnbrxkDUjT1K7V9a4utb1RX8a2bKgqDAn5PuqRj71aQnE57wEoW22jt53eGjX6VyC9hmqFM4xg",
  "key2": "5CC2mWux43YDznvCECuHQuwd7oTpDCnEQtTe2HcC72DyeQGrDdcmsAgYm59CStEPJvPRsBkAmjxYZQTx7ayyY8i",
  "key3": "3mX4E3RhUiaAnxiJLkUQSWtaVf5Tziy47PAFouP9oLGPD1kQW95NHETWADN33R9MAKShRjp89WVdcESbTp7GSEHf",
  "key4": "2G8mYmRiUiUADUGpLjiA2XLqsM9XMu7VFA3b9LEiMgySa5KLgTdpxNbBpY31WgZLbMEtBqzr6xyTWgjcUpsXWUEe",
  "key5": "5zoqhbZ3KP6NDEfMNvi2bF7FYUwBoEQA5ovBMWKcNgh7H63uiC34LFsiefert1wqt5ZD9XuYicqvQF8uMvuYoCPq",
  "key6": "3VBX6sWa3JVaGuZ8MkbnfBTMJRVz8vzC3xgjvdABGgPkoK3tP1yeFrvDhXwpGp8D2uuCmyeGf7XKHKyfXSPbSBb1",
  "key7": "3Xnh1CAqKrio8RgyXJgxVipVS1w68ShzBpDAHhgokaHbYVpMPNcz1tpNt86zDwSdY6Fjtej7WdtvG3UYt5hg9ML4",
  "key8": "5ZAUNGGfCAwiKL3eNPwFXRnrr5stdpjaCRukHqRimDqNi73PmCQFNYFXp9RESszRfoiTBTXQgr1NFv1cbb8v95jv",
  "key9": "347jYA9wsV8QV8ypwQG5NwcVh2xpdxiP85XDaHVdYP42B9EcZzh9LSb2gypzbtiEnRWk3rN4nqoSdWhWjLKm4Z3U",
  "key10": "2NfebB126NabhbfQXm1TEv32TVq4XK4EHWhKz9xvUHDEYwYYugSFgvuNc6b5F727QBawLL1wi1qS3sJy4yxvNTmG",
  "key11": "3X6NBDDMWYdQeWZoeu6JonSk1q5PvHV5Pd9HYebiLjGL45NpgZsqA4MNnLpb2mWFouBeLVocNigzku3wRJD8Pimm",
  "key12": "3yCVHaWZRCyQZnTEpTsdDz4dTwSzz43cwp517btpDDyu9RGmviEUnQbAGWehKP1b1QPRodMLR6gMEAhJDYZL3mMw",
  "key13": "25CG8mNaw6mnyt1iSwyHSuhsj3PRSa4C2rADjKQfkhSs3JziYQTamgyj92PcHiF2RQQ8rGgL6CwXo4cjTFM5MC7d",
  "key14": "Na3JdsWfCeg5uG2XHdHBoKvGmpBqjQnR1a1BFJxPXw1XXcDNW9er9C79BHoP63hiesaBfqoXjuHKLG1zs1gik7t",
  "key15": "UJNQkN5VVfG9z4UunBN9xyyQQqwEC8dVx9mUSFd6v92B3U9BSPajTVjcP2nWcj8LkzGAAn27pw67CKfUaCYMGMj",
  "key16": "32DmPxXahCxHxZHTzBhHRr9Q3eeDA73cJnkWB4eLQqduVv7jKCgsMrQdDXWENefYVBg97Duy3ke1iBjTzMk27PdB",
  "key17": "uopByX2jVkzi8HKypU3pKmtFFcPtpCEHS1DZgtQvX4EW6eNDixhM9oHzKKQwSNfC7XaHhDWiuNGtXPnRiz1ZQZp",
  "key18": "52qEYXo6CrPqv7GaSninnVmKbiCcZNNW2n9yPExbz4hWaKwfV7fPnQsrZ49CNepMPcSGRnqst1EhouayKWcbxrFr",
  "key19": "4Ackfxwk1dpEqVW7rURfckbHjyZXeUaf9YRxm21vx5RSaMHiFKPzH73Q9qU9oaoJ39veh7HYj7VJLxBHZcDxuqu1",
  "key20": "5mWFQzvL28atcu46eumHKDTDFno71cpDaTm34vJDCxHu7dbL3GMEhfCcCsqufhxoZGd4tvpUTcoTwE1ozXAy5Ft8",
  "key21": "293tCYKY5FovUVJF3f5sLDvkVdehTMsMHmxqQM3mPyYZcGZh7uiH8XSZM9wiLxeYxwP9Sv8DrdEABLtPEFp1QP7V",
  "key22": "5xAofHHEtQMrf2BwVVFbwuVoWyGM7H5ZmAet2eptsYLyEdvPdK6DzPCjNKpqpBf28brmJ6ccCfy9mw26toqZubsK",
  "key23": "5xr8Z4k8fKbJUqNeKVDW6U4fg8zfCHPgkJ9jVkXqJaiTQNamfgZiiMoDhvFxpzta3YhMZ7CtUugh7rDArY7m43yj",
  "key24": "2HxdEjD9xZpPPFdQmG1XYmQWLgQmFj7K4KdhWYdSBkjh6pk4u7Nxs81avE9vALAGB3fEJuVEWKaoqfXnDnDiKUt9",
  "key25": "3aTqEnUq9VJKutmDEpNWhcQsJPmWAKpgjGGLRSxTTAqX1a6fj51ew4zvj5pnkMUc2GwvDLg2JRd8fuhZdAHJ2qso",
  "key26": "3wmrbERbjb8WW6JwMQ3FFanLRoz76RVU9ySKQxHbQaBLUVqBavraUV17cS6jy3CQVuZP9kNFEVPfn1W8ddzAZGEw",
  "key27": "3BH476ckR4ootZ47foZ166jT2Rr1NsJRjtt6BYKbQaq8WVbNs44KkeKckjv1WtHL1fsmoyhn8Bhgcb5jJysX2PLr",
  "key28": "4QRhTGRPXXAUPZXgaSQbheTcaSTKkWEh9MfUAeUV2n43TJeDK2c4bvsHzxEYH5QYZ2DNwZ4wMAX3nTPmeoMEuBhS",
  "key29": "5A8msKmLr2XqZt6hbPs3MRTPSeD2A93acxgnsgciK8nxJSafJaPQ2Ni4Q8uD3miyLoUQFr3EbHzThDvRK25v6kyn",
  "key30": "2jaHpSTg9rdG1y6va24zS5M6Y5kNrDF9RfB38hZ1pepnm3sggmdd9ucaShkoECp9FjhexoiyWiu23ma3GKVejLNk",
  "key31": "3SqRApqtu9zMEthJ5nCa9nusvjchyvp7WAKVor31PkbKKv2W9VGyhx51PtzqYK95gV8ZNJbBWWhQU53dLDQcM5D",
  "key32": "5gCX1WcGG5URNBZpTfK1go69hFQuCyYrNRcFLzy1rZjduagWtveELUsr1o3Ee2ViHKSMfyiD3aamHrc7kA6SMNqe",
  "key33": "55hyFyEoHZx6TerioQyy8BfAXT8qfES4jigFdS7pbmaGPpw8zs8J1FqrDE79BqLeJ4LLEPNp66G1q51h5Jm5q62o",
  "key34": "6sgS2LLLYqvu9E6EM2D2UU8ip9yDSnaRU4nqAc2Zy3L4uNBoHViPnPgtzJsRZ8VqM9nrxCR4JSD7MmaydJL6ndP",
  "key35": "QobFDy79XJEZBafm8os3f6XJH3HiLPKU4f1QUoyqQqKX49g3u3i84SQRSVABZvtjBZRKkeeocHfPHp928whtA6z",
  "key36": "48emAovG8pRi6Hj3VuUfXrL6WnE2Jzi6EPZ2D86qY3MeL8wxRZPsmbjuDy8waXR9Gd19aGjYhtyB8J92Wu4xqNLP",
  "key37": "5SfTuZFuTFkj5XuLtdEPKamoUFQc3krscZRxLNhLhGdo3iAMbnAVUxyEwsHkjxzDLtqc6onSQHcRoVRsvye9MbPw",
  "key38": "4Vy2zknD3GjnFQ6w3pQBxDkzio9vDmZ2f7MG9uemwUwhZfBQtJPLRZTpMpYmAxsT9byK4JwCtqpV3jdrQkRUUdBv",
  "key39": "5VmvbKd9HmzBbdJSdyYg8KkgZFKPJ99gU49D2GjdKGXcCR2UHjs6kdEf4KnaE4QnfkUcwRAgvPgemcFnGujq739d",
  "key40": "5gNcy7Tj5mzrZjMYzvfuPY3Yypq63tPhu6hJJKKgNqbwA14K37qtjs2s1kgVUCvXSHg58mv5tpfXRLQJCmp2VvJG"
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
