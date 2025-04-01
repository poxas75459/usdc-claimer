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
    "4E4rZqnLSsMJePhj67kVFsTZT1EVfH3BfMQWTYwdT59SsYhjYdSfd6VdZrEZfSdTn1C8vWdnhtCbxmRdRdABfeND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mHQ7Gpn9vFZawrgw4XLadiAo2SJp2GsTDYjJVTmpXwGxo36FQNzWtjoyttE4uUirTUYViwWxJPuUthFTb3mzG7Y",
  "key1": "4bzBAodFCm8ogxVxfdQfMMKqhu5gsmU6DuLSDNexMUs9zSUUMwBsPgmTRvhJNSvyRspKffVGnLDL9YZ143PpFpTG",
  "key2": "4pu41aKHUXPDNuHPAS7yNhDbtmsZkkAv74od2b7qYE51kkt4HQ65sBxe13eFrdA1j6ycBw8oHoCfWiyYhLLNCCGr",
  "key3": "2fCRmA9YiWEnjvqKVukZGs4PYeD7P6eE5sknp6qyAGwBGFNEBXdG89WwL3zJvPXp9vfZ63QMuxbxjYoL7iQ3pKbR",
  "key4": "R3DfNmMWPWgtX6nRfJVQnLHuzUaarHZWTYPRqmDEdpcUcP9HyRmaw8y4VJy2iCkYEuYQAUg6PP52PTEjsDb1W4q",
  "key5": "5bFNUisbT3tid8zHncSdewAZRNTm6Yd4Z3X771ckjZP9VCQfEcep6Ag5DVMs6QpHWYTmap9MdYPgMFDLPXaSyBDh",
  "key6": "2Uh8CvjQNrTEcAwJEvP3EmVka6589V1BU2zCLmmrA4ELnw4Kq4KmJWrbx2eAn8HYNRcXijD4m7iGycrgRi4bJhXq",
  "key7": "23BMRov7y8a5SVeBg9x2Lnx7UraLbLjcLmc9gJnFem2jURTUGLJxVXxZPHEFB54XGxjecboJvrdRhXsWgjmPKwo3",
  "key8": "Mzzyrzku9V6UMzevgqFvzXrXnuWkPQZjBuYJ14Noy8nJ27EwvNB279WjcPbT1Yw75VzsWGm39n6PmmvkZPFhG4G",
  "key9": "pB817vkeur9TMhE3Ypk8jDGVkVwrmYQwTVfnm11E7UXT3NMfL4ht9KZ6pKK1aHgo645odzLo4gxQ3RmpfQ3eBRc",
  "key10": "7S2JUCx8troK9KrtCTBnHspuLkmAdKLRiaQbLoHiBLMHkxYHnohMYhzxRuW5KjJAGzV8sm1rUrj86RCUqMh3WDG",
  "key11": "5ev9cUTLQVqsTihsqDE9uSSBNeidxrU4TDYV5F2gc4WSfMkYtKjhUaugmKzmcEDBni2FeFayKYpraFno7Sxie2ds",
  "key12": "2PBiAYdx4KWxjcZaez1rgnKj9n5JFLXsr6prno1h7kAsztoSuvjRYnAApMBe8KUmh9bHgXUWHE8da6mqYbudLP6e",
  "key13": "4w6euauPGuddBpJcKmdnj344fKCfLB8oSwv6oRebQNRufsCoEUhHaWtqyWxUNBsiHzwbz67FEXHoQWjfaRGEBCEW",
  "key14": "5uUvf3Nh1xhcn5Jq54t4rGDKaaLe5ELyfY3vWcRFPATe74oR3bt2TVp16VD9JMoeCB6r5VdxwdccfVMqJRNHkPpS",
  "key15": "4sgQSWkkNt1zfwU1Wb9TEy2fyLqvTud426nd8KeMZuzmixmtdTszTVbsanXMw5RHNmkYRAm5YtcR3BhmozAam92z",
  "key16": "3pWVqkDuzE3MdwmuwSA9gfoQZHHWBJoDktBbS44nN2vKn268YngkohTwF4o6cgkfLP8ZdyQ8ZQs1gZ56hLUqDm4Z",
  "key17": "5hphbYrDycuwxTKbUswScb7nUUyu8xFKs1wHPWYUFwTChn6YKYt5Cnk2L76CV1k4YNQyy3aEvNZtjmcJ2DDdAJG2",
  "key18": "a9MS9g19TwT4HuE5QhRknycvzGVk3GWVyKw1kGqVnU6fko1FJpLjrUejAnrDjz11sJoQHUHM8npr9zoGTDSopQE",
  "key19": "tNvaZ68Ft12mmoRRjfrLWJsaVtVTEKsA53Sf2yWdmsN92775xT23Kw8qdpVgJttvpHAXmStVv47gBPvzp6oXsDz",
  "key20": "4PiaMk6iQaB6RxVKGp1nXz5PU8tWCGiXyxHSiM1b4sceNUP64KiAQcn1vkusjmFWJupy4kp5CMQggXbUv1om1PPn",
  "key21": "4pHwJ4apQJpRwMU9X8oGYbCYJkQxFbzV14Rk53Lb37gqRexRFEVCwu163GsCCS1oeS1oRunSE6j33ufoskWZjZQj",
  "key22": "22jdK4P1LgEeiA2ronk8faabgGG5KTbVoQMocMYc9toFyCZpvet3D6sa19XAjHg1R8EgTvFG3e34yLKD6kPPiFQE",
  "key23": "3Lh1Y89wWBKQVbj7WARuguT4qRL2R6uWaJd6Xk5k7N6vHkmUngJUJDJLhNs9QD9hfjvdPktVwkmYUgufWAdhmKqS",
  "key24": "326JsKFmnfVq8WPAiQyqggAxkZkTC2r7QSkfnQyTysXSUL5zpY11Ek4hMaxVagGKBcxcmTbn9R48tSXuSNgYQKtC",
  "key25": "2TWbrATftspUhJQdoku3NdBWLfR1vqEfk1nbLdiMJg8hbFw1vJCFEvpM5q6ybRR8frJj8wP83CQZSJ3TZXnUrdBi",
  "key26": "2FK91tMyTLXemXSm1nigKeWrwCzFDVwYvWvvKtfyUx3iz7RJFm7Fc8zpToQGM2vjYMPsDEJBg8Zs5kgvSmLxZCwG",
  "key27": "26rHn84Gp8fWEKxkdtbp5ugH7kLtarrHHU7qrdUxwNo1r4c6DVDSebWeGf5MbzprQGP1UKy24XRAYNQfsF37ESyB",
  "key28": "4SiPLmP8yvwBbUf7TpsrZ8djogjbNoxxdciag3VWcBU4aWPFXfUMXnSKeDt4QUNhdb8hZFHW4mbwmfTt2j57Z6Ve",
  "key29": "4TSyWGirG135UZeKUZTrsLrd3h4gTa1PYRnxaYkibbCtbvej6vfxrxu1AEPi2nzBd7XWmMXaa7N3Kkd57HLdp6yv",
  "key30": "2YtQspbdmpHNRQD2qEgFqgKaFKGb7EyQrgFc3psZRyRyttr1D7rXPsrT8QGKjWHpWnwWCrc5ovQLLwRBBcPaXWyZ",
  "key31": "3y2Eqmii78s7zPN4KotqMuqe1RY6JNkM2enpNr1PfYCkadFv7wcEMDY83TTsTVXUTjw5qzioQYakJFzfFvYWbHqL",
  "key32": "2YeyTXYPqB3mjEY7FBjg936nLiukoYoNeL78fjtcwfMKbYyDcjUUNwf37dVCj7aPcwYrccgdC8yinp7HMvf6zXJ3",
  "key33": "5J2SA8od9fSVNpGbXp5QtrrjNGDkoxwhR74gVkTGXWisSC7yzTF7beFTVoKsnrEQYU3LgnsRV98Da2WXrBm72DRF",
  "key34": "3fZWU6f5VgRe6T1B8xvZpFMpX8j9DFjFCiTrZk7i6E9vwFG5hkBguwYGhPmq1hfYmM4sGr6EqPTHc4YwPMiDG9K8",
  "key35": "4R6BPfbZ1vQvsSQQqwNCb9yh5tn5u4oU9jKGfHWCou3JJTHLFnJcgnBZiLQsLZECmfUcS4UdctJ4P1Pj6kU4Z3Ek",
  "key36": "38GFdPWWnYJ8qaW8yXTV7qjAqBdYEXuF7zxa3nwebjPSdSV8pu7hohsjT8nHgGZoFyYw6qui9onpAz5XGb5wGe7W",
  "key37": "5tM6dD9YX7Pi39h8Xok9d2vUJZ2zR5cthmrV1z7DwSqdpVTp9jtAAJpzGwcwLsZBhzzsDYP2Z88yAKK4k1bC96gD",
  "key38": "5L7oxiqKMpkDuPiMw1Vkt3hVfdARi5uKJWaY9eKQYqHXobKGpMMouaN2xKE9SvrcENLaMXDbWMw355FxSNkaHvii"
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
