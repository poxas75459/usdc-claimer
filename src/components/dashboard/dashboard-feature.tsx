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
    "mRKUw3zMmqZK7eNn8fT8tBSwuanMx2TXuC5pnfGoxZY8BQrXWio7Zjcp7E9cqG7Y1vCF3b3avUmYSWyf2ngcjaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NxjyKBZthZjDp46PNbwhApJeJR8T7GLYkXuRxY9QiPaccP1puSPf1mLXh1VewKtzLyeTVSD55DUzmB4V3hcygor",
  "key1": "2m6bVyje1oK3KoZ4ZBNaowdfVKzkBDaTbWtGqHyY4vrU2toBCNZwPXsWx1foZdFgnNGUmFMeS36LPi1MsttZmYWz",
  "key2": "3Lq9L1FrH8CryS6vgunNKMbcYMQ7zqe9fmSYw8txzNYFFVg1wwswyobcx8NiwMCRjEJv2t9esVDcdBeLMYz7qDbE",
  "key3": "i7VJ92muhXNrFM29dvTnWNdMSb51eea2X8Nf1woaRpUrjhw9D41NbFU7CSX78tng76MpZCUeTtC1Warnm6Xuy5b",
  "key4": "25fx7db8xH5NuFP5QENeJES5ZAF6omLpXZMZMNQTGmAYKqU9Y62rrnuurxdqJmdoMPgUvp2hTUqA8usVFhcUupzB",
  "key5": "5zGaytzUxC4FwDdvDExiGVv8F82XxGGPBDritfQn9uVsC5TR4U8jpb8QcZEunSwv16coS3ZEcM6qbcD2sh6X4qef",
  "key6": "M4bW9jBbEMfTsBMwdQeSNg2P81KycrhoEzZxTcoYBqWeSvKb1cdExUwaYn6anQQWF74MrvDtBWtCt4DKtNpNDXG",
  "key7": "5sUzjyiUY7rsdX7BMTHU5khhgT1qcYUSRCsvbYP1v7FCgnojXwzGfs9PYrTA7U5x6PA71msqcPMeien1xzqA3Wdj",
  "key8": "2NA3wZG3dScfmx8xQ8MwEtcpURYeRJWwGLJF5kwnje5TKQAttphUnjrg29i4dELuzpmUvC9C7McAzh6XCDoYiJPw",
  "key9": "s29VMSW8aUzqB86VMJ2Txyjr3bxV1AByfvP82qEQmEKuu4Xfc4D1EkoA4BemfH4Kksh8vx27pcScXf1Y8nq92T9",
  "key10": "66kaVJF3fF36nxuChqwUjWW5SH7ADfCNMzJjcMiDX1nXddajXK9KpwhMiNV2W9oB9vtaWqHUpu2WUpDBDfTmgvJk",
  "key11": "4S7pBpL8G9y3sSmwWJp4EwEdWN8Uqff6Sfh62cUgVAZeW2UqwBCycBqPjgbjESwPzQa1acSM585ChgywLv6DGRJy",
  "key12": "5sWit14HfKZ6erRC7BEWDbcbStSpEq86dP3zEYQp7diidPUk1DSu2d6yArGVbyYHdoLayL3V2SMqAiBvhkVc9kxV",
  "key13": "3ZM5Frspa4A1z3r1V6UAddz3fCaAchcfYjrnkfKuK5SoJgxjjvhgrQESj5DQaBQagNPFn16q3XzLeEzZ2xHYpPmG",
  "key14": "5z4EeF3n1knKYcnEJtUoqcy3j2NCb5oW4snWQnYwCcN215bcRExi3oBZug8yjGvSJksfELsYnifcUvygpoXoy9xX",
  "key15": "7jXHLD1vZ56m9N5urXTHxAGUP4uEVWmEHXVy1QzMTfvdPfm3nZPHzaxnByqfCReHJseTREeMpDkUS1jvM24Tk21",
  "key16": "2tmjGv3SJnwarmwDC3okLzVgSVvoRwVxo5AbqQqeiBAjS9JBF7wyJecACofRSeyadz9fkmK2zgD1DzzqgSC3uyFA",
  "key17": "2mMctidjFGsxrj18s5U83HgaAvvaYos48HhJrr9oARbBxHSz7tTNMzVyHLirEJKVDobYFoWScRfAPEZ6NDeo3QMq",
  "key18": "5uPpuk4avaCo3eJon955AkNHnsHN7fwUJykx3zxmmDdeqYrkuCxYDKNaxebiVU62FsR8fW97VHu1oDcaGRcLqwEr",
  "key19": "2voYgNMGr9ZVJ7D5Fu8HEZoB8HtsBtQu4EMKtjZkVDWWmiWjefxnVyLPW4vbsj9xkGkzPxT9VKaDgyWFFgJtqX47",
  "key20": "fc8ckCbN6TehbUsDLiXoLfAugFZcWcBXDfaRPrmbEMufZMApDiMMj76bNWopNzBVNTFEf3jAzaU5V8RtTrCSCs6",
  "key21": "F9PCSjVaBpSw9596p6StLhnWvFPP8gLFhz8A1xCz4w5uhR7qprvnbQV12kDU2EWHLLRS9bh9e4EbgYoLrxPCACr",
  "key22": "4wRPR351mtuccdeaRxpZw4roSYtwzYo6SVW62AWJjTsZhyUzgCZxB8WiASHHdSEzbpASRYFq2eujJp9yrkVMxmD9",
  "key23": "33gdxbL7aY6KxkkenaLxtqA4FdJ78Nziz64vRGzk3jW4Gne2LfpmXEGunAQdRFC4Gmj9W8BSkiifZVmb1re66mgf",
  "key24": "MjoZQDvZBiRNcF5vT6pGg7SBUSTKjYWZ7bQpLmAad4nFhJR5fFYCJeuVVu4ymWYDXAZGLJpsrAngQebkUkZNHEt",
  "key25": "5dmJMPGviSJVjeLfKfpbkKETqSN5pzg6NUBLTQQmA6PnVdpCSqGiEWFjyhKKEu6toCzYuQVbj7XHVBXKzLE4tEJp",
  "key26": "C3gGaDyGGsNMSh1FP5JahqNutE9NNpXtBAkAdMUR2CUhRust8Zmus2jTPzCknY5L1cDf6awgTu8hbfeTeLYFDei",
  "key27": "2TkZhLookJip9SjVbKfyjfgkWjvZueJro4YfW86832CTcPkZMF7FQYvMGHRebMuDb4WwapZhT1KUmU2DXWe2fwez",
  "key28": "45SFLBy4uudNYipJztYovHw894KvqCBqBMR8JmBrTK9PDAKDAMF3pLBs6cTnCSYkYhMYGe8mHi2m3UPfWAPM2NGa",
  "key29": "67XdzYYzugGMiZZ5oqjeFRpuuiRrfcAH2f633wY3thxu57qTe1mWyU8wxiqxEjwfmxZvGtPvb7Jd7cyPmVvmGFoq",
  "key30": "2ERZe4k1yLwKoy2HRpDUyFALhMaYE5txKmrY5Z2zSz8WreUTrAJJBxzybmBSPDiXN9vxBs9rjq5mvvbwdbBaA9CA",
  "key31": "2PDFryg24c1YggChJoNTAkg3uDhWqYJxSBgbZkxCJzehocPsvmpeYChJ8SdzwJnuiPVbMtakontUnAJuJT7veFs9",
  "key32": "3gHVWmW8HJHTybdrbXSeMpcKKn31amxQyUiavoYwgHkrPTZA6heB8swL5xQoBag58Rqu7vBAEyXiYGN33YNQLUZH"
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
