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
    "4mECfYGRxCD1UW2WcHsnPPyE9ZkY5Rok9H3nHMJwHhBTEB8rc2qQG1rQEMQ1hinGNryRvqccd6Tm4srL9XhFwdHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rkso4h3AvnNQxAvbt88H8w1znfkT2p8aws4mbTsb7p46phyRAZWcfsuhJsMw9dPCQCLDYWEop3phaMxYqra6U8J",
  "key1": "399cHcKUnqiDmnuFfek6WVhhAMxunuDEF5yAaK9NhSNdmdXtrCH9WD45nzkcFa4CxfWC9T29tSqJV2YmQE8ugbiB",
  "key2": "3rW3jhscUYgwUn6DyJy3imdX6ZPBvF37Kumo8m24VCa76huQomZHyCwzpZTfgnKHf5M4ZYSchxDfEXcELAXzoWue",
  "key3": "2uzKnng4HCtBpuGwKUMLq6QyBLB5s7J7f2kMfsfuTP19JJvUCbjXnLjW6NrVJg8a14Y7wYV2eG8J6Bjco1esQgpM",
  "key4": "5DEX3cBVwjyr6pZ2wuutPDcq5H3K9wq8T2K9FwZUw2HHXrp6aey9RjDtm6R6JqT2A2qHdU5tptuTG8kUKQtMFut3",
  "key5": "2vVFdt5B6ARanLuZsp4nnpSn8sigMawfewwCuihUhN145u9u6cerJ8RDooViwQG2gim3gFPtfo12dvyy24cVTNeg",
  "key6": "28kgYJ3TTEcKPqoinRxBETR74nLqpN54bDcVqCAjWiV8N3cwV4vsNwyYek4iaf5FMt4gSXt4XaTuY2RX63eEpBjQ",
  "key7": "27yn1cYyathKMmSyJ4sg4kko1eLUiYmeVSkXHoR3F8nYkGxD6mD6Gmaies3caKd7EVXHqF2SApSmHjtgwQqWK853",
  "key8": "58Nqqh3p1YmJunWxhAtXUbuMUGnkKsySys5dhEe8indBaPHe7aVVKfQyk4mYTA9d6oHeenqq9f6kcQuTzUaMtgtJ",
  "key9": "hqFttQWCfNoNvSfycYzqd3edx586QgzJw1DWMGXLv51vJpsorULGncbV5oBsHHRgWtcxCoyh77ivRaLHJ5dL3Kv",
  "key10": "3dLMK7FPqMpSWCoP4V7ZoS3cQMjLjn8hRPN14wjkvaTDGhfwXVXtbsGUFjf1enibz5DmrpHrxr9Nq8EgSrF1gD3i",
  "key11": "5ui2yfW7Af35Tq1KQW8gNrNGUJtrwPrbdbyyLV6JoUT3o4HyVGp9knfjWPsGweZN1Zde9BmkA7NeuHXWTBPDXYqj",
  "key12": "3qGf8dZSwDs6Y8hg2SRVmTRBGKHd9ZcGFWw3Mqur3jCz863tA7DWJU8dM8TiPGFnCJY6qNuaq522LSFim7KvVh5N",
  "key13": "4LS9E7LmyAaVwxqEV7hRxye8cHAydZCuDKH6N7q59p7WPjqhjVjsMGoBqSgZCTkSBWXBjMCxmz8z5EGpoYpLF5Vs",
  "key14": "4gkVb9eVrhNWabF1cbiEr5HyxAdfvMwBoC9pePZkKoW64ZSp7KyUBcJNKgfG1mGoAuCGDgWsKW8grpbTics9LKDF",
  "key15": "5mRGQX8DD9AHsZHsGbxc5rTh67P2L6oofV1TeXfwLffLhsZXcFo3S1pVBJyza9EwnY5JhAncooRFwKGxP9WZhd2r",
  "key16": "5iAPZmJs2Kp6ZNtGgYyraoefchUzLBTmCUbmaKjREZzNVNjYFc1Lu6CQpPxtPgyXAAGSBVpzot8MBfBognyhEkuF",
  "key17": "4zQfn7Z5cbeQAX3HU9fGZ3BU7QkVd2dppzzmD8jvngYj1ViEUj3U2rZnfLDs6NpjUdtYJSYK5uU41dPJ1PnAWtoi",
  "key18": "2fSQMt613rdEPwoSsxbrtSDAxo6yeAhtQ78SNo8NSn4K1BR69gFBZ21psDXBYWf7fvsAdtCLgkC8LveQS41Djbxn",
  "key19": "5phKMCzRrERCT4pb1KFD3iWVjDZmYDyA8AuayBKMTAn8pBTVhAbVH46BrgncbaY867TGbxmRb5SsopcwQACc4Smz",
  "key20": "5LKYJ6kS1GRXVwKT5YYnskn4AGhakpXpRKAb54S4TFNbUCGpV83PXjdu1fFtQ84z9WKePEnoY8uKaq64Dj8fyUBr",
  "key21": "3o3RwxSruQwGCQ9Zm4Umu5N7Z3iBU785EPMZ8d5bj3VAHYrjPADnpMb9t73Hx21k35Gd4FcxEZz2x73N4PMfc8Ma",
  "key22": "2Jr4HTDbgj5Ugf68mxf7Ry5hGAs9ALU5uwAjdBTxFbfW4t5XMBmVbSyeuL2SqJ4hRMyZe4jGUTYzAP2L8YCJdgaS",
  "key23": "2QbR4B7quxXBiztTfuDFwmb3WDtpiTZz8LtsKm2G8giSBcdKgaLR73K4xEsDVwcwn4PPHdemoBL7dC8wisnnqHyJ",
  "key24": "dcmY97dmcn7asExuX1R1wbD5ut8DuWSMDHTvASTzKePx56C56jN2dpW3K3pfDXP4gCp71yLqW97VwbNhASa6PXH",
  "key25": "2wtoZkDB9FovW18m4FrQ3yJqSPk7PDbbjbV9Y5WNBCj3oWg6CCkKdyffUZvkyJxVDkGXwBkss55kQWpUW1q9N1rL",
  "key26": "2UK9FFM3SWb6YXg6cj7GdqjG85KSc3grr9uNBVADp2gX3nBdF8t8juBuUMAvQNiH29427QPenwz1KSZo64JbXEas",
  "key27": "2KXMiyhBbWLCxFSJ1PdqB5eVFik5K4bevgJcFS7EPDTTy6rRvzmRH94N9oZ9Tyxg364LcV3WediTtMUyMegjzdXG",
  "key28": "5QRiY4MgZxKWfE1G4XvQUQFaZ1iy8Wws5mTPyg8YcXJfg5XN1gT3HauKFVJsnJbYdqbWQTfXSDT2jTHJo2EaKAHq"
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
