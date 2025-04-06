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
    "5SB5BK5zuEKNzJ1Cung2caVLq6ugn2h5zfxtLVZ4eLhuQBDLsyTQZj6pX2sFvwfVt8qHt9vwtwdQKPEHRiNN7zbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wRhN4Qhh7f9EVw1BTyWh4wWuiYKo78w9xiMx2ZJtHFZdzeAECGnEsymdV9BFU9FmTvzeb9LN5LvQPLsR5WuZFp5",
  "key1": "2aHmpjGS3AiXfojPBjzio3ZQ6v8Et61mzmSm7vku5qzucpAkd9MU95cGKfbugaDVwwwT121GJAtQnPMPgJdd8oo",
  "key2": "3VBezH7qFp56N8NDB722pJnLk2BdfziF1T69thbL4Rocv3fJQtawKrrZZ2gjFT9MhP8YtuR49CKATWuC9wtntXSk",
  "key3": "2J3qgqnAHYCA1AJD29sYvWWeDKLqv3HnYuteXZ2ZQkZHALcN3pjvNCWmSy9aNpjHKv5av6DobsTadjbp9y8Mo22P",
  "key4": "Rc4ry7LaLTCbr7uPuhaaqzkUYPao7YapwEaotR2PKTesHhu9dJ1Au56wvvN6cT2qPx7XY3B9iK3L7SRVksumgmR",
  "key5": "3Qb9miaQ4d4vcrR9X2nRMPZ88B2zn5u147vE4wRjEfJWosgWq4UoiFe3KLg9fz4SEnPVYtGSCE83e5N6ATiuaJhy",
  "key6": "3CkTos3noS1GhZjsmZzZgmoVN9UZVsLbtH1dDg9WiiLWWTbb1gqZtFwxGNV4xKDu7Q35V2HA9mzJ7eQtAFFtUbyA",
  "key7": "3xFVR5zXdf7XcuZQ1L56tnHZzQcvLsxjy9FgHNwybM2FaU9fNH7H4hfiMkj2nghLAYuQGowSDnkgtWJhLuz7MCkG",
  "key8": "3zAjxk5wTKKgHqnNGqFdazteDiMe1BBkkYT2vpA52UzNkHd6aubBxM5cYjsTb1Bjch7CKeeCeSLeFnvhvMzR12Mo",
  "key9": "2ANGxRgUoq3xFCNgCGhgFCpE3YTN7qFAthtzVtucPJzoyrYehW46A57kmH6N2y6CRy7diJ4dcAtvKUTcbSKBwfCM",
  "key10": "5i3vdqJThDGmQn9C559AHX4ZFxhjaU3sMXymDfpWFmBD2dwXeQYG7k1rZ3GQ6frXe39383kNcGCLtF58Lqh8iU8t",
  "key11": "42Rh9tQZRvtSFyissf23SRuxTbTJL18Gv6ztkWA2fc1TzRfaMEjkdMLRKPRty9niRwR5DiNTwTxKzmspR7kzCBpJ",
  "key12": "3xXgc4UgtTerWV3VgadiKw1tE2Ur6Um31C3i47bDfvXhQkzVDNdT4qN1oGHbe1P2zuL8W9ZKjZKV2meWWMiySj35",
  "key13": "5wr4Vxvj9jfoNzVUC3JRmsZUco99JBDVdoUvQqGe591iu86gHyL9we6Cdr3dxjQczTJcFa5oxMWKYS8HuNvoi8eW",
  "key14": "38H1gSYKCS57wUyoH3Uaaq8g6Ho3Ma5jqiBCwD92ZfNAyXFJq3uhNeJoRSoqHQ8QhevmHYdXCJuNxvMTXv6pYc42",
  "key15": "3LJTKMLEKY6uRnN8dDk7KCd8U3s7b1kF3uDhyfKmWoQSBrSmU2f2tJorzzpqmmviQzyUPZdWt4pGjwwCoSoxERee",
  "key16": "3e9hDmHsLEfQsAfaaDNpZMDaeFSvUV7TaDCw5ckdKU4ucei96BFgbqdD3CbobHoqi3UwN7TB9Z2X9ip1rmxftyTt",
  "key17": "5DfPfqGoR2jyxMNDuGimn4uaoghzwXCG9m3CdpKL1Yj2yx35meBs2ukFMrRq4tRJvoD46AsehBQy2xmrWcECeCoc",
  "key18": "gsWtgpa2AunjqmQjKRF9bMu8zic4bpkJqp9iUmpEutykTzuaba7yEDVV4yf9faHeJ9WtFVU8RZUQFtPcWigrvvR",
  "key19": "5vKskTADRqT8RLhJtvrtz5RYXw5F3kth6qmZizr7n3psdxwFecoFw3JwBBTsBcQaSRwBuhH2NucrHiZAmhrjGXfG",
  "key20": "4LgGXDGSUwLVMfsCVrLqfYFC4guerSBRR3JHg4UvyPLCSWWnSirJGhEiwGVF3QkpuVDzqh7GsRn75ebEa7hWNfSH",
  "key21": "SAFHnDRAXYav7mgYAghJNbT5Jsf5uqZvoCGYLQRZwBj3jn8cqojiBzoEAp64qvjK3GziyJ6MagBSznUTz6p3acj",
  "key22": "5uQj2dDcS4qvosimMLF8KXv3CPvkBvak6wdKTT6i5UYCBgEwHPkxiJX9eAQERfDH8BL7pZq4adtrRcTURNbiG6oe",
  "key23": "PcRiU58h39ZsYXkGtauB5PWFJgyDuHACyNEVtUHMAuuFBJotEKyoFafrYSixWbV7rCmSfiVMNFng7YNaBfYjyaD",
  "key24": "3DauTpVDb3iNYTyngec6oGY7uG1zWhX8pc4pmwSYFBmoPtKgczdHiwZaD2hEoofVUpTksu9tKh56cH2Ud5Kk3St6"
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
