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
    "2GrNzGy2i2reqkYMrWivD1pfGGj7WExXsK9WK2P2zFoZKL9ey88VLMnHP2iDnUdVpzS6CxUAjiv7PUDEJkSAdM9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s3P52g89rKz4nM7kMboCjeDrxkoNkPZykpcBXYWn9AEBT6xZUPfWhH5gu97PgkXGwjQEz2VxmYA1SpW1gwPyWdT",
  "key1": "2rLKzMWNYXwSLJRqgg2VtPqBnNt9HE7Mvs3hiveJ1oVM5uMnMtUJgW3f5kmGpw7ydNeazjYwDGgecn7YhvxfmFRJ",
  "key2": "4hvCUoRN494Xi5KEG3yNQCmnXWg9nQuk4Pj2e6umCujL5KpRXoAh35XBKKPD1v4fbaHcTmVoAZe8ybGW2JmLi5n7",
  "key3": "2wABwkjgqPSMGUu5FpUGNBjZup8evo46WZripk5sFSETGKkt9zpU8EogQDdHCEP2cFANJeXGAGx173yD9t6Py4cD",
  "key4": "4cQpgbN611N2NqCMz8kXEjRLVuaT6WTmxkAZir2aLNtfXJixFMKmKYP3KWp2sx45PWEwaco7YWN7j6BrqrFNoamb",
  "key5": "sapfwRqknkiRCLympES8BJNabGd7SDRsUeLgqXjagGNCPYJnU4S5s1j8ytzpwZdke4bYTi537yp9xfjsWiE6jiJ",
  "key6": "2nrEpujsvmGpXCeumACb336dWdenYxuvqujkM2khx6oE9SoCjrK6SkAMap9qMhFTVh46cWJniRtVRZvbsaCH6hEH",
  "key7": "2PXT44tDQS6HtaGSCLmUQiDnYHQL6i1foPhV3je15pkzWLrKn4x37sCcGvj67wVHARYSfedmNi9YaT9QvsKzdcAS",
  "key8": "5cJyaJ6ExStHZNqMuiatRxaHtoamXHjVXphchCTw2tEs5rYKwDqsnZ4kSPs4bUC27vDziTPKWk7w5Y1j95Xtr8dw",
  "key9": "Tp9rSess9czorapSGHdWcaLvd7dWdkNYP3Xnz1o7NzmRmCPyqop2jbNNia77A1v9N6Wn62mCenQcXjPZmf9egdE",
  "key10": "3syEsW2u2ZSpiJJ8jYserqXKWbicP5JrFrrfMmvZ2Qybek8DADDLiUKD6cREbC1rFBdxAtcdzwU3zamHgpGj1cvU",
  "key11": "2mcCZnkw77Th67KGSoQjBwb8Bnxco2fueX6eoQ15jTjcQtZ2YPS5ei7JkoJNrkfMFPrHWqet2bvyqpFCF5LEMTSx",
  "key12": "4VLi7HkH5WSGapkQFCSTrQrfYvDzT84DEUm1Vgei3WveicDcD2c8J3wFLSncXUYQFguUAt5ap4PavEgQVkWsoC4q",
  "key13": "5j6Xi96YZ7wqqEnMZUvJmDxMqK2bVwFFKrDotdWzfE7GsdXDTdKa9445YVoFPaQznPDLMdZHzyjWzRxLccpecmRS",
  "key14": "2kVSA65HcCK4kTe3A6MqnasrVJm8d2Wp6NDDw2pasGa92oCb4DVeuRyXc7L7GuX4Av7gU59JjptFqMJ4mwXXJLyh",
  "key15": "4K8QNUoPiS4ZGDATaDqPPDwvNcLRdn5XkbWzRyQ95nipLBNw4FWaibufNZ79pc9skGJ1JyoMDJZsjscyaArJjZD",
  "key16": "tnmtJhHNf5pnGWu2HVyitt287gS1n6xGX2znqFVRo6y5BF9jFUChUEfQy1suf5EUQcW3gVPtDKMac7sgiT64AsP",
  "key17": "55N1h2xfrcrLnxEES7dBUn2zHoPjGhishaik7s5hnAGZAtsxVuBRhyo6p7R2vyy6aGfzmB65oiazyLYU4VEqgk9G",
  "key18": "66Ne9GGviaMDxUzHHmTXRj6W9KhByW5D3JCpbMiqcEQRYehYaKoWqqJQjk4jUuwoWg7uaTk555gn6tCJviMRt716",
  "key19": "5VRfk7DdtGgmyPkiymBUftTjcsHj9Jz6htJcYHBz2iiPbKpGpvDoGDsKSHjLpokxhksXjzQrG9XSvPrbGf5qqfuX",
  "key20": "43qNkqeMJbhp2WJaX4kMWwMjA1GgEyzM1qg8WSEz16DmsRKVj83477Zi33JJyGd1y43HVfe8S58ZEZmnE7cpJojv",
  "key21": "2JnVNaLLXVgqSe6ZuJZ5TRD1k33PYfZqCVumn3HuUTNW39wDNuWqJreuj3skQ71JAEwVUzBsZjdMgfV8yBGZwjig",
  "key22": "266MEM3RMvKfQByTZ4FJQV3DwMtvxNK95JRF8HkPp7qZ2SqY4hN4ktBcs3KMoVZ3DniB2nix6NSVYvDRd9gbA3ki",
  "key23": "2wapvFEFp26ueXZQda2N1TVTdA8u8sZ2XwcHN8BSYnEV4nZ9wAe158hJ9hBPfGqz2jEERVdt4Z9yKpQr4ZmmDP7y",
  "key24": "5uSkzrP9fw6xS9cLAUHozhpMev2wm2Ggv1LVGdkE4LKjaNoyuvxSKgcoeFaF1ukFN4VAsTHVyddLxYaaANbtgfND",
  "key25": "3h4v6ovHWn7i5epL6HCHs5rgNjEhX3Q3DTRDijwEDU2h2t8rpotLHM2cyN9QaFJccgQai2iqNTAMPx9TTapMcq9f",
  "key26": "56VRQTK4TMhpkbrbzs9tYs7MXRoMSZTTC7XM37mxG5HeNA3KEaoZ88Zf7Ubw5gsQi82tdH3VCcQqK5ycJL4BhVvx",
  "key27": "5vGZFQDCnDJXakphU7oLuxEiamEHbH4ke8dbZWUPEXuk3o1gdTnXa8CRBLF4HW3rH31axm2QLgjefNdAfSDJqSZW",
  "key28": "4GHN5AwoNNB8X2hr9PMnBd5S1uv7uj8D9kKKnK5qRrhDPzj1VzroHbRymJ5E7MgaDRj3RFuUkGvTZJu88S1LJakY",
  "key29": "vME9aySXuqsHNPvBGUjHDE7Jxz89zYth3UBtCYKFTAg9fUT3GFiZahMwmJfMR1t2K9GGq7mMpBHh5e8QqYv7nRk",
  "key30": "v1e3FfA1izzirbRsRAYNH9XUgERJAYZnL8zoghieJ12CLP8rwqJDX3F8cBSEJ8avjnL1WKvDUeDa8XYVMzHMn2M"
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
