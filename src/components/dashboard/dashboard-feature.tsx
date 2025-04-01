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
    "2Kbk2ztGtgvvboJo8KR8iRRvQAytHxGwh2EocwVihJ1UQCto8QWTyvRiJN2DYrdV2BX5kdoH6mRCNSAbKRNMW1QG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DJ46MKnSxN5whcV5D1SvBNZBvuSeHd29Luk78jsVUcEDKwmYGWafBqpjAke6ub1rgFMjpX9F7z5jVri3HeW6Xii",
  "key1": "5X37749K78Gb8J85wCRpQ6JiY63eVk5RvBFRWC7ZnTbyAzt6PXM3xqPrCRCLKwC2GcVSZywztE8kCgDVjvRJKK6z",
  "key2": "5emyjXCMnVN23wkutDkeeYzh93cW9Wfu5tJ4KqPrN5p246Yo2SEhAztF9dVubfyrF3F1kKeUigMzgXW5FsgYKt6N",
  "key3": "3iPgRq8v9ayeGLV2ao9sUnrhbhATvqbeqwryBJD4StRePVi4DZmDRhsWCFXQ4eLDisA8nEfgZ6yT6qua6hy7dBMF",
  "key4": "3diRPSzvkW2Gd2iFvAppVwzLjqYB2Ar9CRiPVAvgqwZfwvvRxqXwNaRGbxe8v9H8DypeFJf27Hfbq15osphpUf8s",
  "key5": "2n7ZA9GnBeupRm1rPwC9kab3AioeWfeqB9QuDeyDmGmMyLUs3HiyLcorSSvLjAF1pwqvJotCLTTxhwkZJSKGuqeH",
  "key6": "LoLcPkwMZZYYwtpUGn7ZtomCB48KgtEXyfsTJiA4Nb5qpUK7fJSw8GivyhXC3w13Xhe4Gpvo5YGFWPd84RN4oHb",
  "key7": "673MWrigHsNjXtiVeLV7dernXWsZDQhirkpaXJEbDbdx2oV3eFgM1BZh8ByxJa8uavMYxcbgUQoWw4Fet7worM6o",
  "key8": "N7qrS4uWWscA84BKDV77yJDsvfKWpQdfEmod8KsKjEAJwVge7BZjF6HrhrXN1wsdV1RMkg3kCZ1nKM4HwUCTRCx",
  "key9": "56nbu2w2WEjGtfB9eQfPPTPnzzoJcbBcXdmn5eqxVW4ShDjoiNs8n2kuevcoxxrHEQFZA9FhxCysbu4S1a3R1fpd",
  "key10": "4SYyo4uCqgSCoixk8GfdWFPvm5yuLpthawjGfLsZSJ4XMrHssvMMZ5srMHHCvcdRN9krxAA1fPFxpsNjYWc97VLd",
  "key11": "5cAAEuqgdNGZKK3BwbDLMBn8iTQRkReP77viLjMYXVRR7Yi11XnXc67bzzRXuVBwENNA5YcM9Tudxrfs2WhH3wS",
  "key12": "5ivZi4KMqj6vr9MXryEgbXWjZCnyHCeKBzUiRpyAmeTJqi3o4X975EfxLB8UjNGeRagXR9t74Ykn7bcV9pTd7Z9e",
  "key13": "4EcCtQgGo8rYopSyWFAWrWQUPQPGYte8EywdyiXjUv6BFyyKzxvH1Kk178cV9nWNoBgAgwoU4z85bqMk95w3L53C",
  "key14": "29PLWAkCBzMTC2qrc3B16LL7zrBtFGzpBuHyuqWt8KtMN8svLaqpqp2iVy6grfXbPNzPbg6GXx3KLSgy2MDikyum",
  "key15": "4nfbENoJsta57j6sqfYQPLqJcbffBmUrJY9ZbuhRbWpapqgC2k8G38SzDHDSsS4HjqDR3frFtVkiwsXaQdb3j8NV",
  "key16": "4mabRxcjE8q7KE5o9XzQRmCF18TDchaVJfpecCxuGaBcjKMfUfobRX7utsf9xUhn6SXmYuZJgVECvxvThRwcb7kP",
  "key17": "UpZ3odUCHgp4aJUjZrAoks3nTqnMqtBtsR9cpn6V13vxKX5atET9htotdyHqSQhDwfBCSQBfrByUob6w8q2rB7s",
  "key18": "Q12p99gncaNNw8a7Mj5hu1MZCEfezN8UVNFcaSmiGMrsdsGy7FBPBoombzwiTZGofDQeCZdu9V74zh1bFaVtqVQ",
  "key19": "mgpEjApvjxofVMXnXP3ehbHH4avVdAt96suD215VdiULwS78gdYJYMmLqdkS7QzUZ8dVxjpAwHcKPssBFwFie3y",
  "key20": "3guo787jKeovGsZjMCrnsMWbQpuW3v3H5vhM3NMa6SVe3pLNtz21X2P2XVAVaNZqf12nPvwqJV4kH4LveR26saot",
  "key21": "2MSNakeHnPGVL1CbL9uJAFsbdipMvhU3scKKachBVBWipNuzfTxRqRvFTb2k5g6BS8HAyST5uamR5eKjY9JDGqoc",
  "key22": "3B1W95gEcGNvBYpfiG3rjL5LjRVpk6jS5MWckY1qNN1e9MurhUSuvtfheA45pni8Qjaokn1bX4PCttMThwvm953g",
  "key23": "3c38qtH4sDLHMb8Tf6z1UD5ZeqHmh9kweCtZyckmYedP51AqTRgffkgRAMJCLm3qQWzif9ZbD8SXScb3Sqs8Qoc4",
  "key24": "2vmj1ci85vBVrt1Nt8sZJXppdWrs68ePduibTxxYnHSmHTvqE1Q7SzEmspCCYe3udwHp9JXi1hS4vKSNebgoFbH6",
  "key25": "4e35K5gjxSyezLZkcbuds2FViWRmGzwTxSXKbi3MgfUJ7Wyior9VkXWDC7eXQvSTuhGH7PnXYFTLDtvYxHPEugA9",
  "key26": "YoFLUnjkWwa8f5uxBrdZjYEaAeBwLzvURiH5pk2BQFitvsaoNwpoFTWAV5YPswh2RYr8WPEaFKZ8x8EUgjmf7E7",
  "key27": "3Pi7q9AdU75YRFjC5GVruuYEhMwZSpASVVq1MQe7UNjxRqx6cdfPY6MoE2VVirbRd2xPwi8ddHWatMhr9pEBN3SG",
  "key28": "4feaVNiYRABJxvGBiwZiMsyhEdagQHnjB4UcwMjcQuHVCoRC15UhvAnVAoPabSJFz2f8JpxPsw9RTo1wLs6n99hZ",
  "key29": "3TLNLB2McBX6ZT5KjEvqie7jebWjmNRFthK5cVem1SJ2CXEjZjBAaaF4QthximLKhpdwmuNUHTiGRX14RMKey4FY",
  "key30": "2XxsxcCNnRdwTJXigH98FY2AQVvwtJKnjaQvjun8C4aGTBr8SmxaAZk94g8BGYAGQ6ghRKancNT1FQ8Uc5S7HLgp",
  "key31": "5s5vEZoAZbpGyUTQF1i3DDMEuR5cLqnbvHkRCfcKzBjzMUEi4As2kVw5cX3eX7hiK4kksiitScvsFCUEVWekaWwm",
  "key32": "3Sv8SVn9MytET7iMytMW5sT9MEj3hH6Y1tqCBRBHgXXAbZcp4638qaUEh22DTN9XdHAR3d8wyzAiEkeq1C8zyVDF",
  "key33": "2gFVU4KVcjfpvG7crhWLAsP24Z23K6ZeXYkjaif5aKL9qH3qQgmm6RQKhU4JBUeYC9hhtFB7PdFS4b6PAo4KsdrQ",
  "key34": "29YxVhoHjyYdQwLCzeYwJbdsphWNTpjeQviKK3bFYLVZzEHTee7FgP3VfMJxy32hEQcQFUHjirwMc3hQWRitGpfR",
  "key35": "5fME91azU72WVT73cfWmUw63XfVCRJNHZzUvWad1PdCKJPa5mtMGUHFFKqoeY17e45BfNmJvt6hvYV2n5QS1gDbu",
  "key36": "J4EoAtiWqLfWWXAq3YCCjcf9kmh3wAHQ3cniCuPPfakupkBqgoR7S3PMDkdhGhWfkCdZ9hiT7xRFCBeEnoUSbMC",
  "key37": "2GphSVYKhN8FWG7gGBoyAfwE8M8DfyjmW7XEj9uPSpfrcVhjqJKJzohHX49EKpo7G64i1xxcNvh9cw9bfnNu94aN"
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
