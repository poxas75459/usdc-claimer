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
    "5BYknGcemBR3VWdM4m46mFYgx2PCs6YM7F1aE4p6WDDdCmemdU3TFH2ranF47KFEHSAY9nwMq4fRgNLBsQNw6zBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sKuALwCLPwUy5Q2ey1BqVx8KQDnapTQfQg4PW3PeeWxU4oFF9pDrSWL784X2xYo3eAZ9FVNfNkhRw7iFaJaYeTq",
  "key1": "4gNWtXVzcDythZKBNuWZZ5FhmfhAc9DBVGuBAaRz9s7dk9WkrnnpQ1b8goGoAEc99kAX9UtZvXFMTVoCRoofzwyk",
  "key2": "2NG6UjrfrxMVbYWe3Hrr4W2jXcj91oCyCDnBKyjNzyurKcZvqzYKkx3dt7LBDPQRPo4G27MEpfxNxbnro4DgSHos",
  "key3": "zyaPmW6dCCVub8jFC5WdW58C5GGLcLvhoXzSDAQyrgExWVE9e4hHLTu1Y9zKzu9R6MJTyEGBA6uJHiWMkmyw6t1",
  "key4": "2hv8efLfp462xC7MYnQP7N58RDCCj9pDrHmEwE6aQEHks5HDFWJtH2N815AGmHSrUabxc13AbuKoN9pYzrinaiQU",
  "key5": "37ueUTmgGWYR2ED1fJTeRbGCVEX7asCRs8ePmmCHTQd1TKe3A5CZLHemG15TqNTkb5vNVLcA2LCgXRbr9HGdqTej",
  "key6": "WVzpj91JU7KMiKPADQHo45c8GTN2KkpsNMVc3TgBaiNtnCLx4dbJwT3J648heDbjRBvYKW5tGwmmHv1ibXran84",
  "key7": "wEfJ667SWjD37DHJWZSCHyUpjfTEBCZmV9NSDAmJMh8eERj5p4CTmAwWnXPznN5SXrPMqykB46DJAMmSYAgxaSM",
  "key8": "289GE3XKWsytKiuZ86p8ztBkwQQm9dsAuZYfsx2kggERJTbKxjLoX5d33iUUZDZYM4QsY1cCAvrbJmAS6nrzpQ1N",
  "key9": "2iL9gPNvRiZwhFgsaG6qLRVRjbx9Y7PxQE8tB9PDnrPw3M3sr25xcnsmpQ52uMM5ZoXJR9QAWykkLb4fsCHFFc3u",
  "key10": "9MAsKUKyFCrfwRk8G6q4U8Rm3AJFCF43NUwtdYDPedRsXKceDEAeDA2r6ZGg4St2emKJxJQfBRXp2eiPaSirY4z",
  "key11": "4XDRz3EqfMec9vRFWCBoPjtWSbCAq7yuvVcfQafTo5McBr8fxXaiNPWsvXGDkRjdwp8PfRnE39h51gZ8R1DfyTyp",
  "key12": "2AQyJFRUX8o9pjB8bQRoFrbFhJSjKvfyatPq124SHawvCdYmNBdDDkYPAxq9rJJHKiEFtUpR6wfSDeNTpWkWggi4",
  "key13": "5RHLYco1xhmFbqP2idVxAovj9ct8eZiNKMVcckvm1HFxorqLdiQSKgMidWshwwjGWZ31uepsfC9ygLqodUgx3gM3",
  "key14": "3npcrTp3yw4tVWgwMUrGKxwm4fgttvqMiqtmXCLVUpzywY17awCmvuxmQknqwmstH7gBqsvVXZCRVTEbyCmSREKx",
  "key15": "22yCie9gSLCZBTDFPPLVzE637AUtVEBN8irsyC3dj6NQsfsVcjkwaWQGLFt8zmzsYNXbFkBQGSkxVBwhRvJD8W4Q",
  "key16": "4YUQuVEAJdCBJ7Qu69xgvqcyR39L7i3GdvEgyXKuGs7WjP94NnxkQE1iaTdJqTEGQwxctQVfJooLqHKzxxTPxTPY",
  "key17": "4YdiNPfnqSFNYjQatR6gRrrekopuZE1tkygDStj23fzR5dbx5XUxSC7SnyTRzfU5UdsPd2mhC7jZuK4q9xfuqqNT",
  "key18": "2ViDfjDFbRwmZYtxhXJvq6BzrZNLeDQG7jH9Qh4xbGGcupoWSyA6GmkcCma3UpF9rn1tdGqGet14tvdCN6JybXmN",
  "key19": "2wJJ7ksEJRf2YQhUaaERkMPnnuvwNeiiprGQmubDEFsyC8nEE8t6bLreZ3kiX3drzeedSB3YchNEct4iPhA6p4Yo",
  "key20": "3ecp8jXfu7mC7EpRHuwdLXFhxojF51tBrvPgmdPw4wp8mnsenU5XzUJiVGN9hsDoQAChKVfvmj7LX9M3xwbuXRs5",
  "key21": "4yUhrv3Ji2HCZA7L5E1A2Uuxx4EKqC1czpWhf2Trf8B5LqxppwCQgYoJAaz7HHB2hdDPDtF2Hs21BeFLSgv7EAXz",
  "key22": "487E5SuhLNqGePquT9sR74So5EaYWMobXPH1cCQ1h5PFSeAkz8tBvb1zFpHvB6GvsMV2UwKGGbnT5RFRDaEYJZny",
  "key23": "56SkhVPfH7QNcX1sxXzr5xX7THjUbopD8sedt95NwfGNwm8wqob2TiWEwqEYw6XGVrDKnEMprsqBgD6ms5bxSoAp",
  "key24": "5sSHeBz8sMNYSiX5SkZop1tECMoEdoo29G82Q6pMhqUQSNAvq4oDUFgquRTeouKVGeeQq2GsxAaK8hxkznZkM9pL",
  "key25": "41dP3FHTZormTmgVcKJd3gmt1gpffB7ctSG3ZibuRZyFtbCFEuvWBAwFeGcWkmNhfeqG6BfYbTVoezXCRY1QxhJw",
  "key26": "5n6iKWfZDiLPQK7cKgeYgTF36Fveychkqd4uBsjUmm1KDdmZaLpiLPTnd8UGLyQR7FQkt49kJXcKNHZCd6EfAzHT",
  "key27": "3xwxA94kF6PXoRiAUcgTXLs6iChLtCcs6h23ik8P6vZCrH1GAacxv9S2LpGVNwooAnK5PDi1F8jN4DqP2TjUTe2Q",
  "key28": "5i37Uva5uXcNSTdJEXgBbUWE8Bdi7wLNeZDjrNzd9pvGH9ow2x72vu2XPdzduQoxyZC3uNuqBKWJKztwtaRrMQA4",
  "key29": "37w6gCzUxJ7A3NJjGshPzZECLYrxaS4ehsbhL9s9TniaG53XRGL45T1K4FvCGFJv6y2AbFf8uvvmtjnUTawiLRTq",
  "key30": "43d4XGCJ6RX8xZdnu1NpZB8UFny61rrUFD37hrVjNUdEZZwuURxWpXUGCkUXGpezoCKAz264DzyYKF9ytHpRzFnB",
  "key31": "2P4dafgBxDhhmb56PcoNa7XJutWTZoBXeRuf8R71uiocBBKsMXq6q5QYF4hPf5GXNpaGTMtNahs1tVMUbg9XcNQy",
  "key32": "oxXHqNNSySWJmN1EU8oUP2cH8xWKBxrZRa31xXFr46juv6SycauKRJ35PFFGVHFdYzbxfeE7yJEe5j6srVc5MJ4",
  "key33": "26tzznGFYRud5FEwAYBC2uzGoQE3moZyz5Xk24aGrpLb3aM5AD5yemYHbbDYoh8vBpKxJQ2daPtNSB3tkTBFL6uB",
  "key34": "ZS64AzYqTjVpKpTJAZfMCgnhj9zopv4SB6PaddPRweLGSPrK6KEEYaLAghQexEmpVRYFsetpwGsxF27K5xwGbp8"
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
