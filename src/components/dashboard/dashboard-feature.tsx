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
    "juNvi1yv6fFjSpk1rAfybbRLDnekAKd3DDVjXj5vRsqr3x1DFaBqHni5jTLvmm43UzMmKUt2u1vTipduzEj5Nwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63aod9K8KSb31xRPVpNBZAeY1GiNFnzkPbXkE9ux8UJLLy6Foo3cv8noK33g4WyZq7tZUx27AYpDw78JV7rBP1tv",
  "key1": "FgU85Ja6m3BJPxAEavUnAHS9hGaQMWmttWSXaoGgQ5JLbrHqRWj9C4Dh4bnBZ9Wue7nTB5y4LTX27SCUWMVMRmv",
  "key2": "3zVph8wzmNgPJWGnWYGVLpzjpoSpkmCaNvuGvMJr86mgBeVQzwz4Mv9UkjRXGMNBgBqN6EFMWcjmmQt1U6FyY5RY",
  "key3": "4W7NfoSpB2iik14tUSTC2FywgCC7449M8x37szkD4qZCLZmsG9T4zDe3S8vmWHnUuLK3SHVxa45pV3i6rEPJK9aZ",
  "key4": "5oC33kzm9jTkNqvUnGxSDawrweaRuQGrSoL2CWshs89sMxe9ckqkY56Yxeou48ZvGLdhk1DCV3Yx9CvkaMwNgrkd",
  "key5": "6jMv59oKHvvoZFDy6RNd5L1k7LhfT88wdbMYR4a3MqxvRYHYjPohbHzoRc5jLC3ycGzZtA9h76SFZA7u6Qau6Vt",
  "key6": "4R42hjNWFshq9T3mscPDGh2W8zY5Us7zhfQ886KdCNq41tihSL4AxrMx9T2CWpo43adBRBVCHfjDgZNTdD8JDK3C",
  "key7": "SHdJpLMtdK6PfJQSjs5ZC9tdoF4isYedozoD4jWf59dLNb4h13R891KQZLkvV4WeAG23vy8aAvmmNczvdBSKhC1",
  "key8": "55LLn9KAVoKhqDMnAGTRm3kEiDmg2chhvTbbSAbdfUzB4A3KuRapSYceraqc248o7UfDg3L2wVzH8rqUqmd96sXD",
  "key9": "54VPGNFiPgtFqf1aHA2BCh6w5dGfrrbemYQgYqsSkBDx5gA6ccA7nhwjLbXFyjMV4F5a2LEYfJd3L748pfjRc7qE",
  "key10": "FG6TP415yGKTWBo3cSXxPx8zypnyTykvkbLD5MwwPKB7hHdtkMiKett66asx49AayEWnJscfQE3H9Zqfd8eHiBv",
  "key11": "VaqAck3mzF6nWHQiJEvarFEBJfCLCi3eqSGiyetfveWXM9VDmbBmjFAFQdS2wpfFRUdxWdfTxdrTDaRnYaPHuH3",
  "key12": "4bNbWphQyHhbVjFnvKToRYfQs9c1BstZrAsZd2uEMBjJj1wEgKvWtPJR38Tumz1GaXf99yTwkQEPv9MhV9qKLFCj",
  "key13": "4Vg5UdjVjRXYWD91GfDrtZDEGimMFyhdqErLEE6fgnHTznNbW9kiWsAHRu1GWd3gvraUL9xhXBYD1MSSBDYS9wap",
  "key14": "5oQJk8fVLCNzdNL4dmPPuPX2Zqe57WiucaZ4sXfE6wwtqb6nryLXqLE8njtQsF5zHgfVFzsFyr7qTBHqyGobVc4S",
  "key15": "3rUPpL2nTKna381jbpqR6EA5L6Kf6wArsC88GTQR6xT5uzfwoW7koivfviBwrA4q5Xs78hfErmcRM8riqTyc9cR",
  "key16": "3TFRWtu8psxQ7GoKEvys1zY6LKH8m8pfCoZ8Lb5xWMunSjmDVdJkdVaHLGwtgKe2DEGFgBRa71fYP8Fmrff9znBH",
  "key17": "39wv1uC6BQDApKW1JGcTm7JWV2ggVtC7YRMm1ZCwUKpLxRr4Ta44UtPKuAufrnet2mwWqLo7k3DgzFFrvCSCYkv9",
  "key18": "4uk35mQEXogM7tQfAa3YbmYJQRLEux3sF28WMFdAbFK4Yf3QX5wgAxLRbgCoGuvPv4rus86DpwPJ6Joh2SsNz4rf",
  "key19": "4MREArQNLQXAvhPyB7mVMpvwcqwkHkkKCnFgA3w6cx5smLoSWLJYNrituuqL15zyuLujZ5Lw5gcstF63neuSCjZT",
  "key20": "2nf31kpwBKNepRPuZneNkUPMVoRXgfhERb6dyST9DFRnuFCftNNE9jDngwETwekLrEecSW2tM67PfDdNEnZykw4P",
  "key21": "24BT97pY91UCxDYrScvxsmYfe4UUZGL7dpxY7PboN6SFtUT17MdbJhBzds4zp7nVdkhLzqxV97x1whSApJ6WmpPw",
  "key22": "5xRHb6veCWLzeYTSRV3rt12AsLCf7ZnikN8yYuZjNDXkahYf8LdzbnhhjY5Jy24rAcHUw5g1F1vGn4684NpssKeg",
  "key23": "63XreZTfFnbTDERDrhZbbmFSqgt4WfsYVoiv3Tv5QGo4m2iRS3Wn5EdZj7npjNA1sFiQqg6Heo5PaT1YXNYcuBfs",
  "key24": "3KedcnWfQVXH2Q1AHJMorsM7d3E4Ko9pwSxtQwLqSfVigtMX46oBS3vYt4TrifubBzbNjNW5VwKGx7cWuwRbqzot",
  "key25": "2BPgKWvm39sBa7tSwySmozRPCLhxbEFaazJ1dfkiPSWpVCKLMcZ3ypxcEshCdwJxrXf9Fyh6wUkZytAiYYFryztL",
  "key26": "4a7RTcuNBfi1RWGFYVtAvz2HUkfJEbAB5BXdoRyU6XztViGpzc5Y4iRLkv8iUJF5jCdvSems3KfWYzhU9EFauVBX"
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
