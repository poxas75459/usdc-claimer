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
    "4wornzzG9JoXhZnhL38BJdJAoT47uzqdDGKvev6u5ZZ4p1nC5eMhTBbr8K6ihiTQRKDPcVkhrgiwuRwJS1QcL1D3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jgd3C2BAaZBWzPopQrovA6nFP4c4yxLWiFF1MQ6YYF5dRGWnAMF21tfnN3nnaWZzzcgomhzvDWi6NZtn8ZxY4Qr",
  "key1": "2GtHo4LrW3Cy29TARka3Yc9867UweD5bG6B19oHQbsn1xTP8uKeZczCq6pjQo1d5wVNum8onUYxVmhNxyAUNMoNB",
  "key2": "42BHgz5WAwdDU6wQTfA7Eki36qLED3vdGR6UFfJnWFEPfs4qDfkhusGMUcPQraxy9jrA2vUQNXQ8wwfWC2mhaNJ8",
  "key3": "4fUC6jApcS5PX7oqzF3LYXAd96M2umJb724gfaA3M2zqw2j7TxQiyocnfKKJvBNDL6wHaamf6b9yF7PpdhEaeGRE",
  "key4": "W8aAEuJHLyt2mghY5sNeGdJBegr8zbLQ4xZ4ZrBvtd8k64gaTroZ7eAccgkKGh5gv2Dia2zDDiaecxuW9paJJJb",
  "key5": "gvfPBDtrczTToEtZb1jeFPxNRQxkLqgDdRnucXKtVv768RaAqJHchuTwc6cp7BhBRqUGKZs2GCsExXFgvRX1dEd",
  "key6": "N76jEaWn1Vc41h2wrcibcHw6832Qz6GE5rGQ5KJRJosK3pN1xBQdXLisAikNVeoK5CnVTX1N3WmsKTrUVFCUFuQ",
  "key7": "2QevhnffRtFcjsfyqdynXfADYD2DVbL9Zq7R4QPMJgcH7fQ3fZkxBtWusBm1rZMpqUVRh9Q7eEAG5AxC69PZt9Yt",
  "key8": "2MNoLNyRyvLKSzUyh7pqoVm63paxJnY9QBGVaJ61NQb43Q19EiEgc82LwkqqeLiszbN5YjRTMKSZygHm44P984Fm",
  "key9": "LrTqVUfFXGWYyseUEXeKKbSQeCr1ni9G5gNCyNcPv3phW7syBCtxPSjXRk54CK7gvreig6yBjz5WjmVjtEV5CGX",
  "key10": "3AvvAHmjrLpB4yPFdRAdXS5xYKac29qAeaT66hoQNBoC4P4Lu3gUBfBz3v8VAr2pFpCdYU7s8Jr7say89feVMY3x",
  "key11": "3Sciro1whMRLrBqBQnYJFvEbrFHYvBfYZ68WEh4QpujXUoCrxmZjChcAWgpVua7ZZsG6TSxQYwfBJkPH8SMucBDT",
  "key12": "YUQCeZYFy1Tf5c2eHF7wgHHfSTDBR3mwm5Kugk4qCaiatPb9kJmt3iWjygY2YXGMUGYbq7yuoAsMzFLAf2H77Xj",
  "key13": "dxGDM91iqoSimwphDAdJgzt3HPsuLT9LLE4XceJgf5fDKn3RANDb1AiJSbVtNqoW2k6kCLLj88Qdct7d32w4v7y",
  "key14": "29Xw7aGXgV6ssfiCmeuQQeUoFBcuzKMdWptuqrCXHFvUP5h3WRnyF3gqqphc9rYSZAeGxvXsbfsMY6rpsoP5ZST3",
  "key15": "612LhbRFCPcHnfQjSjUdG69fNyA3Dri1isJXDJfsUF5HGDeuuYZbjneTKt7kGJyZjUk4UScTEATaQccPN584Ahke",
  "key16": "5ftdLqk1f7KH6ija8sYvVTjMPMYozxaLk6GSf9uc9D2Xixz2mdjwpS3jSzcmTaDECuQxQmqQGdUkY1cEcTEoMER8",
  "key17": "CrXBV9pgKcGgbvBmUHiXapMbohMxhAyj3ewugHBXnzS9GP17opsasWWCknCdE8keD9SCnXwAEUahmei7KdnkmB2",
  "key18": "5NiFRKBCmFiHeoDRmqUyi52RuxMvkcvH3DDkVkZ93TKe99YDuHk5uKCULoXiXNjWbtc9nZGzepsreX4TYMjZadZa",
  "key19": "2DGwaQiLWY5QLPutXJmW2XykFmRyiydwbZXDqjYjrTFo3BGT544cJTVeg7cg55bct8CkghuXKZMXqKi2wq8wFFcT",
  "key20": "4EFMDgFQfwYTK3snoxJUcJD3omSeddL5BvWmmo7o5V7Bf2wsMDs84AChPrEmuWt54dfn59QYvuCkGC5ja15fcYMx",
  "key21": "Mhr7yUBDW2yNkJkVdCt6kZcWQi75ocTfHnHipoTr9RHh7VqJa3XS1fKKvZCWbTZjvGkVjR4yNrjsEM15mdiU93K",
  "key22": "2UqFLz4CrvuScrwwSjEnxnYf5JXuYzWfkENmVxsDWnoPrPacHNC2t3mqjvmyAjAwrtNxpXAGMMLKdoWqCYdy3W5S",
  "key23": "4i6XPAATqqKyHn9PMn48khtQ6cvxZvMaGkhZFsoGU2SvSUUetZbzwJTahbCU2rsdqtMbLKuXJQbJMkrG17qKkjwv",
  "key24": "5cCyMDQeCDdfkAU3JtQQtaTJdnuGaAkkAnQpNBjQjHF7cCSSJw2c5nn5s7zQtxhjACSPjwwt2eF2duX5uBNsRWQj",
  "key25": "46FPEBpwfkktajAvQWTJURYs9VNzEXh8ZMCAUEL6Hdq78ssLX4RpcbSgwNx7s3GEGCj7syKaFeCBv9gYC8qKHFMS",
  "key26": "3iuN5rSLpLLyvdu12THRVATdaU9aqAyhNj6LtJh5XUdeJMDZS76gPdaKyvziZjYNDan3bZVx3BLRgaBJ3VczvrqT",
  "key27": "4Ungt4hp7LKTMdHtk5jnrE6if8czXAd67tjXVC4JW4XkUH2JCqYXgUkKbk2zS7LLZqhGDLT9yRuDGuQe1yD9U2VP",
  "key28": "2rcZ9Fnj6habMtDsp1iywdcrG96htjVPffV3BZSCSE1fCNNLw6DSqZAE4XefvdnAgGDwaiBQiBv2MSVWZio2Z3fD",
  "key29": "52XvuQdYTtRPkg8QCEJaw6fNfeTWth8bTZPs3phkXRM6GRX8kZSWvLFuo8PtmgA3agqYWMYfRjRj5Vf6t9ZmbmJc",
  "key30": "244e7t1hNpt2yhTN4xU7jZzaNDQJv4AGJbeY6Sai5JeFghWrWZBpcHSaERQ8p6ar1K5N1sue7BrmXhMRkKkP86L5"
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
