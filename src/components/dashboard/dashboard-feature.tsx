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
    "ubnrMhaBQJmweidVRmLF33UDsQEty3jpagP5W1Hkh3pQUHoNAMH1SQV72LbjerpNU1e26ujZB6x6yyJqRfYv5FZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xVbrLRXaWBdiybAMb4gzZ7daHsYKe7mw6mbwAG8sJHXPiaTxamhZMtzURXiSSseuPFsXYUneUAJPF1J29rj7fG4",
  "key1": "32AP6wFQbN5QfrRwYW7QX6vPgg1fa1ciKLyYb521qhBP2nQBoZcu8nGJ2NrS6DF4NyYvPMD6jS4QNQD3r7gtZeJ8",
  "key2": "4kfydbViL7JufwzDNUVtbS4atq24SnsLUpwJYaTexLMK5WLbjXxfo6nZeGSTAGfbUaxJYxQm3qELpqs9oghKrrkH",
  "key3": "5bU4ktiVF17XwtBmDpPkeYKdaG3sQB7mD7be8ZEDjEygyoJRMxaAX8xaYuLt16X4eUDDUcvy6kgBC7QVaBJ6A6Dx",
  "key4": "444XUx8Mki8Yif9u3H7d44xFtgGrA4kiG6tXmxExMyyixB6XqiqEWD6pyMjj9dzMtoofrEM5iCBJHHwgsc5v7XfT",
  "key5": "3axMnAb3TnCMjUXPety1CcYY8h9Sa8uKwk7WZGpAFEKMSByGADdqtPESbe6K2hjUzgrrDuWZeQLpwLZUUnwKrtny",
  "key6": "2EJX1Mq5awU4eqYkAogKCHenXp2Fj4DeiewKUdoGKCu5AZZpixs16LtgwnAKTt7SfsZQfxjXMPT4EZcZ5yikYMRy",
  "key7": "4RhMwJeNeHHgjx9QbMJXAyE84ihxU2UWtwk1zkZCJUP6pxEYmeE2t1At8LxzCT1r1YXJY6wPVkGt2yN9RX5Pr1gi",
  "key8": "2jdCmrhFfQUBhnZ5by4eP2LU7DSkM1m7oJ2r34fjZoJo2NQMGddQpBiJ5pzh6dHyCsjYQN1cXxhT2UVHiCU3ukQb",
  "key9": "5SdeLydizp2Rdap5Eim4ihNPLb7LiA8uSRbQVsQyfVu6CQTXYouV3FEtyMRVJmtMyc9HMe2YcmL5Nxfz7ghc4Csy",
  "key10": "jxu4fD5YepEvv3UwvM7pDyGqdooxdgUowcPs7FXSps9FczsU1QgG1SvJxA5em6Jf3GJVsoEvTv8qVG7Dz3cSGf6",
  "key11": "4yPuVGhtUx9J4vYUutxQrynftNcCuwUiBzyVma9qm39n3zsHS5MdyxSdRCJs6MvcVedXCK4bJP159nYndAYMYGGS",
  "key12": "2erFTRiJA36wFQUeupB4UjyWLLTawiuP1k7oEwoWAXQ8BiLHbYFiMHGDeAyXq8hUvXWjPuTuUXpiAD3vZf9G79G3",
  "key13": "3YisBnqURRbdUZD4b6NsM6fX62sA2AoT3YS97C9gUMbZeXwJnoyMxXBy4ZvosYXpWwvEiZsr6aVtDDRUuwwtqFxA",
  "key14": "o9dUazjrJux59hL9ZpomXQJ6SKSmLcXXZvcibPHES9r29Qp4KXUuNGKSLYJyy1AuXuAfeAhdPjyLhMrhuKx3db4",
  "key15": "2w1iNSeS4FiVZijvgj8LoTCLqkbd4CFNv994Puq8zZdnpYzX8diJpNhE2GRjc5AQBDBXbXaJw9HwFX7hFR5UD5SF",
  "key16": "5r98crnXm6gZjGQCgiTTt6bKwAG263wmyXJXtHComvxrhWJDXQAVNfxsnxDu2dAKW21Q8FvGGwFV1ihNBrriccuR",
  "key17": "27h7SRxyB3TzJzouBaPaKdKqXCtaURTDttiAXewMjH9mbW1j5wZggSdzytq7qXN3mLfCEsvv1XtRshMP373jCz5s",
  "key18": "5FQmsY7pghmULAZS5mmvDNXgr22ra8Uos2BSsNp6Qhk9BZhiCSMhEEQ1RGR9qMrp1uqgkjJjzkAzcPpct7NY5v57",
  "key19": "4baLzxnMWym23rzaMgMSYjVd4aciwPpZhokLkQD26WBKG6LyHd4JHrk5vRPXWt6Dcwxa46RtmHbAkuSY7DkdqgcP",
  "key20": "4DkNykF8XWdLL91rVv59vJpww8yEQEVXvqesMJKETV2EbWq37LmqrgZxHje6q4iBYxW67mwn8ku8NBNNvvAdWHJ3",
  "key21": "5kzbwkFYmCqXgXRccGXjQMRCoAucRwosd68bKm73VhSNMz2hvPcc2zLbobe411wZ968MnZXAaZR41N595yTtmD6P",
  "key22": "UQ4FFeMQjPGJDAgBXVQXXJ6Z12whPyRFTrTMVNbgm89SuSsJSjWq8ewW2CapusxQW48SVkmfR6VrcceuAHCAAGN",
  "key23": "2zAXEsCUktANfjEB89Pm9piT1A23fEjkdxQxjJYQup5c7ix6QqVRvHdXb54FDpdRPM6W7NQED4642PEWEhwRYHBQ",
  "key24": "5LGFQzyEFwrNQjLqqkXvkoDnYxUWsMYNs9yVyL58uy8baVBMnz1DwQepQ8vLsuBzAKvWH5ghUrK86TaCNjv6Y1RN",
  "key25": "3vs3RbPjtDETnTc3oq5ikErqh2HnGxJoPVeGjgnx9GS9B5aH5vTqwj8QbwC9iHXXuK7UpraqX9VGyQ5tjKtqRCPf",
  "key26": "5fNHDFkGQCagjRyVr2Cq29z7fT5MrgXa477kRtgbTxWaLbKnuf2K1nFBzpHuJ1zZBFHj7VMyec684AV3VFnqM9a2",
  "key27": "QaUckEryzBQ5igM4UHu8Wj4QAJc2j3szGkbfYWG1nUs6nxyP9t59vVqU9KRW2RFDDPDxD8V29P5tuNNqvrKKueo",
  "key28": "3t47rhjYPLn2DPvz9qjxXM3J36V76uvZko4GrtJ6GhTVSQhGDQHPxprEH3uTGaLXHA6zbE45Qs7gstn7uBpGvagn",
  "key29": "2TqGQ2srmrtC4jjMLEb32Y49LEEYCUERLZRFTsmvCgwAJ82DoQCKsXcVCNVxHSteUAZWRnPA4nNjhhGphaoHB4A5",
  "key30": "58QSWZAA7Zt25hGmbbxhax8pgxjeZdwBkWBAEk3vCdMu6TKaxd1uXjutqVvdpEwBT3pNaWNtj4TLVxPfNCsdHFHH"
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
