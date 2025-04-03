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
    "5ZkWnzMC5dtN8GK6wdUAY2vDnBdWDAcsYpFJi3ARVHjSY748rTJRJDPYwgBQBHMJKU9unJi5cQHXZRKXsDkwHhhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52orbTBbgQhmn1YovmzqfrmnxoA1ej3XrpNyqakUwAcMxgMnRM5xYVy94s6UZXFG8uBSorsGqSDgqr83tCEGS3xX",
  "key1": "5XbeGqymw2ZUPrSzzSJvk4uQafNecRf1wjRpqFmYugvaLtUFddGJWFk8zSavhrCYpoaDsDrUiF2Wx9UQo8mkk3LZ",
  "key2": "63XyySXEM3WDNtBgBY18jTxJw8EkGKnrK6iwvhxVMvmifLyg9GQeYgSHrYXfJrt7m9Z3ajrqKwX9ofAtYSd1yM4A",
  "key3": "3wTyEQkYNqsm5cXSMvPkscjgd8hnWdboSogid2wwqprRfxAeZ4GA5HMe3tEwSecSVPaAPRkMRUopgwcP3Xc7gDps",
  "key4": "4seHcRt5MgA6XsjvFxaEDZRbC9RESaTyyvZpHcdKTBMZptDWAfET1RQYSHYiMUU35Rccw8Y2XsFmcUo6Q7NrLoC4",
  "key5": "26ctJgZ8Ux8ih3XYaNnQigeCtJG1Grp6bw58yCg6UNFfZm1hu57wLRrKQ1Sdp2SYrx7nmMcX964NFnnjR6L1cUWh",
  "key6": "2DoFjXFQfStoMD9YHjXAEzTH3XXW2aZEfwkLWzUBb9bXQ45G1VC5SG9e36rshKRYeR6UzfAyBfF3EstS17por1ZA",
  "key7": "2W77ZQGvD3BFmybQ7vriSXiug853SnvHUeer29r3jiUr8qNehU6AaWp5TdqVRwnKah3MCCTxZE3zBBJ3Dp6CxDLX",
  "key8": "qL1dd2ksJN5j8LyESXroyZmBz57MPDpYWRr7T2PgAp9diMZqedNRvceooaWMy5fMQtxNtkHGn4zfwUB2ZytmbTY",
  "key9": "5s13ZWBJrP3uRWNEzevF82gWnMuogPGZUkZBpECZn3dNhC7QyDQZXdMHiQZa9CbbT59Tqu8B7SWf82hh3Pzn1FRj",
  "key10": "254LG1kVsGBewLa41Ro8zeZMZ6B2gMzcvNj4ATwPZVSFdE3quAujWRWcnxveakg5samRSDQhSEZVQS8C8f1PZrss",
  "key11": "61W2Nja7VHA2NjANs7vp92opD9CQEQqpcLr1oNJRgoGLFHvKzzLUjWHDKR3C8sFNK1CJWhaL87tkmACmWtttz52U",
  "key12": "5wVVEKPuCR71b3KH272dtPSZGYgFrm3zFwckeQndZtmCrpwf57hY5CqUJkaVWBAEhr3vNWLPU4C8q3aeuts6eygg",
  "key13": "5zifYHPwgBzgB57fgWRgrsTHfQD6wdQq9sQ67qXQ8P58tosmbhDFjT5q1HWtUNyf4kmh4tSZUGFgN1S1PFpQZCaU",
  "key14": "3F9Rnv2KcDBkHAKDXQ8ZigEtoGf4Zb7cwYe9rmZqZbyuiXAeaSeBazBu8dAWtjE6m9Ayv9QL8zkRGbCcjRwwx1g9",
  "key15": "3BJaYCBf4yYqvXYVQ9wVopbAgDrVKXk7gaowrAEDXyh9Up9Fp276DHJUSaJmw6U9TyGBDrUkdo7jYMCjx28XVTAf",
  "key16": "2NLxUJV1A7kXMNoLkEgxi5MqtkwG8h7pma195CNZ47Cfnbf7APkqgWFYb3WSHMkWyHWvvzYQEmhamBCdzpFVE4U7",
  "key17": "3SoPPJcq7g5nhBrqaoogEaSYSvDeVnL5eBGDfQCy5NtWHka6rgHJf5psZHLBWo4nezzFoMPy4pH1pvWpZsb29DHa",
  "key18": "4Uwmv9SBuo4k7aNmhY9YL56rezPTM4gZg28HQ1NYcYBhGwybbp7Y76faytSCwC7yLp1tFBMgvvdTe2v4GJNXGycp",
  "key19": "562JmHsvxfoYmC4Jz32pKwroZTwbCgee7W3AyyAxC6XGwFgyozxFB1jekKWq674jWCT3khS5PC1s1FTMkvNtL5Zj",
  "key20": "3AAXnRixdvPozBAt2pL5Nu5rAe2oCKVSbdN7RiBMj6DBA348xfHCaB9J2RDo5iZLQB3pRA2PTzf6yt2U8GVpqfRb",
  "key21": "5vZVLPWktYyx1j6M1KJg8EUKs8HWSv3krMANSFMeVuEaCWUq3d6vVJcPuDnNvbsrEKwTWi3Brox39JiC27LeNQPJ",
  "key22": "6eoQsb5KL7NWPvyT5syPNpQk9xRu51TRUTfCMjEm4uxpGBEwP9czABee9559q66D2i3Rz4JyZQ3VsUUHsekditi",
  "key23": "KXDjJHjJbpJMeGmco5q1FyXkg8KXLZbmKbpH7htoM53dHUS13yNQzisrtHF2cX7yusaxU4DG8YP4wMEe48HuNcM",
  "key24": "339azxkwbC2tv9pSCH8JYQn2Q6ZHZ2mUBxozgt6uPKnVarLwqfWq5enqjz1YHcQpyDVMKvofA2zrRTk5auXE8uc2",
  "key25": "3SMsnW5wwsJLqzNSNXenNzV4PizAkz8PEhECHFKSSz5VRzKmh6WAtaAqTRRveLLXNQm6Yc7v2jfPchACkUeJEeja",
  "key26": "VvGsG5Fjnux1n6CUafaS9i6dLzpnAfQm99oyU9U9nzqLStayUaZUCbWQENE3we678bAmK8V4x37mccDV1g65R8V",
  "key27": "5sHk4hSYGZv2z2PQVFrqRBsZ8uyCkznkgQHWnv9GgMnh9VY2CKQ2CbRJBxxk39BPnkysVCeCsx4jBXunGFAz53TT",
  "key28": "49cdUUPhtYw3WXJGqgfUaV5P17FnTK55pynfQNt2qdr2RYcVwz59vppRXWYafCi9e9i3mawsshQtazkneKqPP6mQ",
  "key29": "5bVUHCZa4r2fjFcGJVapQTr2z5vxVafR88eyS1Hf9Y4fpvye9uTgoFwdHi61s4iwGq95hhA32oy92QXYz8Nh63qR",
  "key30": "33jNCEZ22DDkkcAJdgHUvQt7HuoVoL2XRzSmevoe7SjNsJNeiRqeVyV3xwARpb2G6rTJMKApnUshbAGS32G4wtPq",
  "key31": "YNAvtq1vXMMAcRnVBHHQcY5WZokdBzy4vGrj9gtyNdD6VWtWCt9HXJKv55haxi7fv1MYEnKYuv78uLACYdY3jWx",
  "key32": "5eE9jG4DsAZoLr7YPYsQKKskecfctWMxGdFTtbum1iYnRg7W6TKw8rN1KHrcjkbn8ybFPRfUhY8cDCn7aJotQkjP",
  "key33": "3oJih4RUDLksAQwGpzuJJ3YCsbyS2ddy77EvERFLRyRZ2i1RyqfGfNnQ6yJTfEWFDhWAy3QHGdN5eWqqcwAPPQ4b",
  "key34": "mkAfky2XqeuRbGyCcBRvTnaU6WyJ8CrdfT38USMNqmt6ktw7XF14ejq4ZntCPWrPiQFdMtG5c3PetUZiPxeqih5",
  "key35": "3crhzRdpdWEtHEPaqX6cKVuiNAcNZ5TVrJNXQNh1WjJFCJqBuSwKj2jHEDKqW7DQdZw4YrizKqtSDg2Qv8FaDp2",
  "key36": "2iMcELqUrHRhdZf66hpnLX9EnAFsXJWdf8tKi2ZipYuqE1GNKjUiuqEQin4Uu3hoL7GjoZuRCwVoEa3pM6BaqNRa",
  "key37": "3vsDy5a4Ti79dkiYC7dAm4mXTgMdXPJBT5tMLi4eLGrQsybXTT4ptuc75nKvCzE2wRqi5DFUz6ZWhSqJKtB9zymM",
  "key38": "5c83G65mnT7qVxBJgm6KT4GRk67tGe81onPbijp5NrvMLLwsJjG5wYaMzaAB3ArpZKdPLf5EzrVppnD67LoyvYPG",
  "key39": "21DvUu3qbshGUESu6T6LQJx2hyZj6CSozaMLL7sFXQgURU3MzBZUb7AuBsYbfcyBFvuPTUFdFLLMr1v65r5RtsAk",
  "key40": "3KjfhregspB6zHeiWNdawYQ7JXXkgYpfN6QALeEy5Eu3FsCFjQYY5HMkF4dxtdvw9kR5uehmCbVhmxSVRNVnTkXF",
  "key41": "4bJCQ33vj5fhehYZj9113CyXCWm3HP8RZ32oCCFtJPLkHRfTtgPwceMuzZ9EYCa9QHKYShpchtEKb31oEYQUwu3z",
  "key42": "32NPdDu35bjJJA6SoxKoRKYfRWjAb8CdPya89VRSHaTSqr4V4AGB267nMRUFtd7jDnwA4xfNHFVgd7wydRyKmUNv",
  "key43": "3dS4s8xrRS8Xy9hnv4sDv5RxR1y4pEXZc4wTtjsjNXeguwM8eTCMkjH4DbdTZdmZFbCpzDKbKJTcT1Y2ZSiBaikc",
  "key44": "wfWvosk3wXFUE8A1XLxE2WX6foGWDJTDMUxLqZYY62uCq93DQcGHUC12wW2cyAbdFEAxgTVuRzTaVFX25H8sYMv",
  "key45": "5GP1ZmhLSRMnd5shWq4gZqNrCiRwvhfG8SXVuoGut2qYQcSWzGzjQisdTXbogujhqteMv26H55XD6spWaCpwcboV",
  "key46": "5GpCpKfd1xgdnbvmTH27RWE4dXhvcgTWQ2cFMZ1zj3dzoHo8BfGxACBZkcyxPw2qg8NM1L6aKhe1xyjEipG2Vrh5",
  "key47": "4YSPcG9mA15BfHQCE9QXQUwGsGTQnSk2GABrB4eYXYTRKTxtbY4jyxBjceZMFdxjw5PWu3mbrLX8VnCeLqeMcdUr",
  "key48": "5AQG5P4MCPANQDAU7qo63g3pDKAft2gZMYCMW6kAVkRcuKWEXVrBmuB5wSQYy31c2fyu6Kga6r7YcuSUtpEs8Bhp"
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
