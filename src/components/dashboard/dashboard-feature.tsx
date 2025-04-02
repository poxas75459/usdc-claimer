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
    "3c8Exub2kGV5wp6JwY8Xt3NSMt1j33EAHoYon3A3Vieksspuz3AbHANYuSyo54ifGLVrmNSy9Hah5hMjBiQKcxWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v9DS6caKZPwmoscpTSGk4kc9qGTawgUiDTrZhWBe58E8HoAh6k9CWJvNsDu4jdk2qZ6dNEHVnBAbLw3EM1WZoGH",
  "key1": "4pd98wzrjgH33DRcJHEgzwMMhg4cSdDVztYTAMbTSU9Yn1DWJbXvcH7Bp1hR4uRab8dvFnsSHRnhybxe86XpkNY4",
  "key2": "5YJGEquaLgF3ETmPi7WQgv9jGf4xE3TtAjSaLhHxRwoAwzJo3cy75PUVTWZkRBhszubgUtK9sp68L7HbW1fNPKy",
  "key3": "2bTLp23F45APCdMccAFZHjYvXTh1SwuZzTAW6XYxEauB2zkVF6VAkEQykr7qpBDdmmj12MmVy8MhrPduiKEaoSkh",
  "key4": "46xTATzvy2awaD7khSQxTRrvBANUrABqtKgweCajdchU53gHj1oyyAUFzgrWKHCR9rLT7hCKpLzBMz6zwHYA1cpZ",
  "key5": "4jKZvkMnNVoPNApApnao5FBHFrRFG1y5XPT8WuxqYnchAZ53Rvb7kMr99SDknBNPGJWFhm7MKSzPh5uJiECb1b54",
  "key6": "43sNxRfFcZ7ABr4NoStBv2hfbfp1RAAJ17X8iUBhMsA71Y5sHgbKoTzSUWxANq9QnujWgEKCaZ75T3ePn2pBGa3W",
  "key7": "3inmYo7oQr4smyqVP2W926RV81oT9L4uvp8XdD9hiP166ffHnMnbQo4DbNPHwDFMqvqEq6vfzZuZyVbBKBqTfGbq",
  "key8": "d7Eb27maP4N7yW9XT8dfBRC6wYgYC7NweDcpHGxTdu9gcM3EXvfhnQuXGJpETjnZYHst2hy3arKma7rMBTSDx9j",
  "key9": "nF4RDo3r5skHnPwpNWagLJX3b4uogVemgGZSwKNwAhcDekF1ASHhpJKQurtJjF8DNMbssPvT8goix6eeRi3AN53",
  "key10": "mL9KDEpCM9En19vpxWntsSR6Cqt2PgBkaTeqf7taR8FsJ2t9xBG1cLrPpTuFMuF7dRWdi5mtLmDYpHPRAQyuwcW",
  "key11": "5MrkET9qSKKHkwRAY3fGSKrb2QaJ2VXJV3Sqjp1E7WQcYiRmb4oBHAYzrRb2eXYvjoYGP3bxzDYceSbBCCHT9AkB",
  "key12": "45EktsndquqgaYHCymrGzu9jYRvDiXbybC85qYKe6yUrzBboTcbgvU1bdNYvGAo1jXaxCd1Rs6DjzTfEfRmXmVom",
  "key13": "4nzB1rMQq3nNQ7CVmrshU2uzX4AmDvjCTJoFmk5nDXdKaLakg8VDBDE2zktijHDDwW7r6vqry7oTNiogYwRJsQr7",
  "key14": "5dzkgvjjnTBTxyL6j2uFrNyV3Usccfijn4fyJdJHcZRwGAoGNS1n5aMcYCtQ7r52k3diHAvCVDUf8UhdK657E2yW",
  "key15": "4VZWJZKNFL6x654jgfJqWWci1boHLXpNVHHUorXE9dfUZ1kUSPU86QW1YVHeDyM5VCmbDANYi7n3vTYhN1FetJha",
  "key16": "3tSwxkyyzwWZvE6auahaSsJavtRHjCGviWB3uw6fDrkSgKZ3DEgW6RCpWTcc7TAknsFXdAF9A9SDVM1L4SyXzHJH",
  "key17": "6YjqDhXJzy8DohgerzbSGvbXbX6xS4m13gPDgUnNTEXNY65XMCKjMhuD2XbHjb1WVncBBshHjyhNv1N41TVw92T",
  "key18": "3BmFSez5PzGHK5r5amBf4uHbW5MSzETuRRmUANTXRxo4UnaYzo7DCdYkAYE3UV2kMjLJRDsKVqzt3BqXsrAsENcn",
  "key19": "4TguPzT7MFKvHYuFThUn8MqjBe1cMnxVV9SQ8vdtt2Y53kW35iurGykPkMZ3L8hdPXNSkXL7CCvUTzsQPMdPCj7G",
  "key20": "5ESk93YZrasMvi7EqAmTq8TvY11mSzittELZhV6c3YvbAMPbkujr5f2fzckz9cY44Zm3DW2EUbTCcM5d1JZtfwUR",
  "key21": "4j1cNcGYoFEvSBXEx7srRSfmLNv1H7WYKZCEabKXFP1JRHhZmK4ENdgmhN5w3SdTa1QD3tTa5CoB4ADAESbpJ73t",
  "key22": "5ni3jgEj7MyftVLmtiDmkieHMbtLwsXj2tvnSYqGUQXS3PKWESfih1WhNtofFJNkrQzXV89syQEoAPiaYCtk9jE8",
  "key23": "8BfngLtj6W13ZMpbRvibG6kY1MzC4Y48FGvTmE4CPrtxswZLC3QjgPMQEVFPt6czM5WwyjavSLJ39LG3ZH4g6CR",
  "key24": "3jbpuXzWNDzLm6T6NNmYPvveXvEwvk9oiQRZVJzL5FZ9mwb9v4mQEwBBX6f8MbPoZSMnUajm2xajjYb4xSpeBKRF",
  "key25": "2bBA5JuZUcF4apZuVW3X6PZUhens7wgsnifot74sCYk1CRQPU2Qey9TU4pijsZzTb1B2Giui2roRrFTWCBfXPTpL",
  "key26": "3cP7S9rVXD82xjDYugEQ7Hio7UZYqUMcH1gh1MXnvCW4AYQwc8vmzGFZMW6zhsybD6B4JyAosayeAy5GRwp4VJKx",
  "key27": "3GPCo6Z4gLQqmPF6owBpyfAubNAa5g8kyZXmmMVRR5CuzufMQtUxGtrrBAE7iNqeCwgCTziaM9Boq4XszyxGifB7",
  "key28": "5fTqJAeirUNadrsWTyEdJifju8kUQCnJFzUUZ3eP7Vq9X2z8uvQFj9vPCD9FzbyUJVrwrk2pFVz9xXwicAhAyWx7",
  "key29": "2PQKi2pJb7X1emGDMYn8EmXuywAk9Tww6UxnWC3gneGvw9u3wLYCXawemyzsW4AoA1gnJyvNaBBP4ot5b5agSK59",
  "key30": "9zEvqxGUmHqxf7qCrGJWwts5gN3ddQdAJUScvioDaqHnM9R9rvhGczPfnaCSnLmEr23d3XtUbyFV6yjmWeLn6tp",
  "key31": "2N15t5KxrczWYsBegUqBmW38ZrxrA3EedtzvzPQDbYmoWkbY4NRsAbis9XXSyrP8KkkrCzu3ihQsgay3Efe4UKEE",
  "key32": "9esprAqJ37mm3vQN5cafxJ4Kxzxa2sgd2gHZ26LrYetFRTHn9R6yeqp64dUm4iuTmjStK4ywaki8P9PureSiBSf",
  "key33": "SDABrZMsttfh7VA6V1Uv91z6MJHdkLvzzqNdfhoJHF7jZr5D46Cuoz8p99N71BhqXCRQ8kMCoBFGF4urbUzu2GZ",
  "key34": "F8z2imf8sP6aFSPUZYXEURqZasz6tQ6DjnJiMwyFo4hTxa7yo6vrwVpX8yey5icsRtSMoTUyAahRssW12iY5U7H",
  "key35": "4568kvRGuqUKDd7Hh72VhTsXX7466QpA4ikxJPKMESUtKwde65zeubqpR43iqG8QrVpQJFSYY2sqPQ3UVFBgeSHL",
  "key36": "5dt5VxDDXCnVSgJTwVm55b2aKTskFPENh1hS6z5v6AtZ19FwRSNGpwYecgQDUK8bqRHb4DSEjs6UtkLwx3GGRhcQ",
  "key37": "eXS24MXMkwEkd5AcZBEnPTv5qc62wH6nMS6YM9Sds92S7d9tyCh5JDKtJK2KXKJVziGuLA7gyYHN3TuT3Gtm5B5"
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
