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
    "2rKvAdk2pFiDHJLBASin2VJCnPZ59HqdUEGQVN6SJbPgxo7dJSPqh28VexMzk6U5YCBmvau6iFHyV4DJgCube481"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FAga5iQSUiym4xA7rf73LGhLZYzWAjn4P1JgBnEN64SUj2wc1kyMqWMdEyhcE9tJqfPmM6iBw3iLFip1QUacKHW",
  "key1": "5kUULez49rcyk9ZncADVdTPhasDN2d7Ptd7GLed3U8mDEJ911MkuaEkvP6mBjK167iTF1Z4cTVdu8QiVpj4ezNUC",
  "key2": "52RtHQ3udtVCQ8q1f4wEPrv8tbYrvGhxQvdAjTDyCDEV45RCNgW1kRWZfe14sKcau53e3E68qBJoaq92fymooxnz",
  "key3": "2sS4Bi9usCKtFVtXvkYUzPbunvK35JKoHLzxXTAGbxFCxrkz9MsRYwyXXdEoh21d3aVAp4oYPLeptTzTr1fYVJnk",
  "key4": "5VLPQsT3nRm7MFni92C11k1Crb7kY5h8vKvrAUZHrXuXywT1a9UYJVNWxy9sLrbEY28bQLCZ3NTa61jGoj1PNo9K",
  "key5": "iyskD3BoaiCQyi564aYFV6vRba3bnPKo1FNPL9BPCSV7rqc6wjvJye638Ri5F8Ca9WG2LTnnmfJLQyEZUt1mA6m",
  "key6": "2S8bXpyUibH35yvBdueXHH9CAg7hQ6t3pfWq8jppyxm2DsQutEC3EFCMrWYxhoqm7CK9xQq3tpjgLAPF4cjET2AA",
  "key7": "4w4e4ZUMdepYCDzuoDje4FJBVzX8pLsbWm1RoLYsFTn3nPY7gSF9wq7vvnth9bTCsuXJ6vjSnbMz6E9nFFamsrdg",
  "key8": "57Xy36kTGo81kGGS4HrDiDh3g42wxkBj5ypLmVXeiAKy97A5pd413s23Gfjtoundqa8J3TA6jroGx9muECQtR5Mo",
  "key9": "2AdnGa7Romkgh2avdb1H1E3FzvEadGPCp4kXKD4taQceQC7Qy9KBn3E4hbgCg1DdkA2oH8MYgyanSs1gcMC8yjd4",
  "key10": "gAFm3aHnBJGoamTZubFSh3CqKTHz5Ndzsuwa8NTSzJMWLs7SZiJdQnFy8HMBXQCxn8Fy31dPnrzU2vmuMm78tTr",
  "key11": "2BhkeaHo3pV6aqGddKzf7NhfGm1QfrYZCU5pd2ochDdH228F32y1B44k8YfyYLVrGHTknxUovGs3wxsGaKqKmeUw",
  "key12": "5arQQEdCgToz136cJDpFg8cPCuDibFLX7PJR7zqyVfXXSD3b9dDqACRY1P7rsKYxpKBFgpaayjYKzPniZ7nsQ5qH",
  "key13": "5gGRgKNLCqf3tCjzyB26rvc7eCFsF3Lx4A18qHfrYwccxpUbqfV5fpzr8N1yNeq7grR76MznjW2BcgHwQmhE8YD4",
  "key14": "64UrRtfj2Y9a9NWUwYGNuQrHiWfV1dodzGHUPFCV7rvn1YmhLiapRv5Jd3bsdy2A6zyaj3Tcnj7XvCujvkqTm19C",
  "key15": "128UqxHqD2Ph1aSnjWQwVFPh9TJrJpV3oXa59WGoGfYD7wtub9QM5w7aGTVuHuqYU31jqqYeWBHm1ag4zyZgvFfG",
  "key16": "cQLm8Fdr68oa15nqQF4QNRWLE5QCczw9b7hKUoeQwQWroWcJTZSgfy97kdZx6FunrsAe4zcc3JuyA7Vg6Rz9h3J",
  "key17": "3E8ESb9tCkHPBK57DdDdsiex2qEoymp45keSNGQZSoLUKv1M5V8DZmWrw8CXxPECTk1VVCer4u2mLbsUxm5oaHDw",
  "key18": "4d2SyjxBfwjASbfBYjLWmPerAPMTk5sMTERDv1fB8tsRc4Ts1aQXfUBdr2yDcLpJnUsxSCia8kEYtbUvTt7oMMD2",
  "key19": "3fPcYZVLeFgD8RXjG8keWnNa1kWwrsdPmasFgowMHSMtz4nD45CMhCZhJxeQjNnTKgJg6P2m4oWXF5NQCHM8dNdn",
  "key20": "5PeoyRngKUy8pLrXnRMhWZwwBhSFr9vjLSxpK66iMnsn3raERVgi44AbbV96GSb9i512uiGL6MSA3B14nnPgXvmz",
  "key21": "3kiW78BRooR1Tg546GCJobGeDpEuSEPJUMFrdiMVbPpRiyZjjLiWTFvxvFE9AU7NJX83iV9SMkdfJJw4vHnQy3H8",
  "key22": "5kugH5oNfvwfebn81pfk1AncYKpF1ncFrCbzMZaN3JshvjETE9PRQf7ou3t6fjmm9UfhtoPirDCKrWp7v5mkF5aH",
  "key23": "63KVPozJ1N2H7Tq45HDEBy87RcYiNHdnHuVCxJ1VyCTceN6DTxw5vYzHtqfbeWG2X4ybBGJ4R6Kf56ffo4KrSZFB",
  "key24": "4pS6kkzSt57s7Zc9iAG4XPUMzhDhmtbPgr11jXBcGFZ87CtoJ8PwL1EHSwZfheYJYdxGTvb5rnGxxTqVKuaHbCbC",
  "key25": "3T6ozkv1u7dcqC1AKEF41eYARNhn7wvcp5MPH6tyvgeq5anJoSwVT5vztu2jsaMgwS3QZBBiMVG1hJNGkjKu3PyQ",
  "key26": "wR9nGy5Z4CGcSyR5CrDk3716xNsA5YcF9HdioZzEuK6f4NhAzpgfMk8nRfqqZJvapYU4aHWZbzKgVrixpdWxQ41",
  "key27": "3QZN5veQvMsF2jSn2dGqdJ1CJiRur2hJxT4DMS6M1M3HfCdZ8xpwTp5yYzZtcdyHtS5uArzyJccUXgjAsCH2qUL1"
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
