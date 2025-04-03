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
    "5oa3PXcq29gTb8TATh76kRBadNtLmhphHiT2HrYi2mGbMFgGsHuoXiHuay3Wv9Xaa8J8vX61M3jWpSA65LSQvosM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "597mMWt6SJv8v3EFmt3vHxymPSeV9vrcRmknUAp25JLRPt7up3JrPT3jVW62eQ4rjQyVdQAPiJbArPGgMWnzpcdt",
  "key1": "4VnRVJ6KwC4bKU6fh2r7gud1UbrZYaPcrayoodueXXKE6bsdTX6m5TMQGvPjvdUpP4JjtJUxqTgXZC5wWaGLK5ky",
  "key2": "4ShvXJXzZQFhKWdqgnBingUceeLr3HH3EA3Kvx5Y6D67nh4KrybqBg6Cknv4D6bzgmLexbzwivkh6AMQ6U17i85M",
  "key3": "2q9r1Bfz6uhn3tD8ZRHBRefVraFtUpsiMnbB34vtSqX5KNyJzpt18dPNHaeSye6GaqJxNFbLbATLKg5fHx6EwxaV",
  "key4": "29fBe8RqGJodq579ktShNgjodo8cdp7hJVoU4zuxRtWUY6tKjub4nfDXd14GHss7F4NghBqzrpdDstzjzWRuCEDS",
  "key5": "AEALdbXYH7qYhS5Qfs4LKvwQA4TCvwwFTwSdW1o2Zujjjo6GpRXF6bi2tNxEn57R1wN74EvcH6wfqnBaiKtKSDL",
  "key6": "5n1BmurW7LmCbjkJunBz6oCoP7WW1EHefVaWsBymr84snQtJQFV3e1PsKTXwzvvu1b4th3QSjS9uDnGcK6S8Suvj",
  "key7": "5iYyLpfHNpkRvf6WTqC68zMFvJzgL6VsGE1tHH8iGy46QgMwk8EaPbMypTcZkTYaLFjmRK6u4zkhx9spacGzqQTE",
  "key8": "5vcNV7xcJh8o7SeQrWnt6wGgS222eR6DxiCLmyAuCnMbUXRGnNSLwn8UkihrMKisDqpmUAxNoQMmEpUC1SfpEpkj",
  "key9": "2Te5VLtpaipbGXE46r9BJgEzr7w6evKTh4i8YwrfyuxsH8Ak8qpZM6qfupHVQd4t2thzeAWygGdoMuXCym1LS13i",
  "key10": "5VjGAs76CYYDXhFC7LM7jN1LR5aQnxmBoiCXamcg44wh2Y1LCAS5AnRBSSspoJfWuh7dAE1UeXnLivitR7Sw4Lvx",
  "key11": "6452X2BHzKyD3B39k5UAJtbWpBu7cedoXFjjobBsBLy2xkzf8phjAoPd4Vsrvb5nxm7FwNVMa3umJUBuwSc2wt1z",
  "key12": "2WXtfiHdqgQ93D6TQEWThZPAeSpk73NGG68366Hp4cLs7p3FTm2P3pzP7771WV4dpptVeaboqPKueUBst7Non6gs",
  "key13": "aTAZJmVEpddoGDD1c1KT4LWNjKXt1CasAMKwcDgkZmQKx8duxafEGGiAGEAWMPiAXxtCQHu2dtiagdXdhB83R8b",
  "key14": "WPdA24fhu7YN1ACgsbKAUnG6ZEZP4VVZA7mVLf7ro94dssdm1893BSzK7rUoq1SQp6BRpssd2EtjZC835mzqB7J",
  "key15": "37qSf99uPgbQk78HPSK8zSmvRyvhJrH7ei8tkwJZv9d9BmAMdvnsW1o6b62bPqRAW7573xUa1T7UPF6X9ri3GajD",
  "key16": "ciZjTFSDazJETL5WDupixPHdBfcFo48fCRQ9b9iUu1WYaHSEHDBqshoanPvS8C66xbdsBo7qqrbmW1bsNFtLSWB",
  "key17": "qU6Dp9cAasihLtDj7BVdKUqmvybZAQ9j6kRbmXcuxAhDf9BUysTVY7ejwfJZJHdGVHyEZ2ZXFyV4KFY7VWgjE6Z",
  "key18": "3t1FJvKaEE9jQpnvnAYC4p8A1L9bF53o6hjrFHg6tfih9AWWroFXHCuohtgypvzUYy11bosUu5Cu3rWJau63bXTV",
  "key19": "46mCJXnQUMVkneXnLiZkiwY1chUDL5aQQPzffhhiUPh4JAAxcss5y4zQjQDe226uhK4mzEMf5esiVvWEpr9yaYwY",
  "key20": "jNAcxYsg7vLcUhsQ5jJChUiXdibdL9t9i9sQK321kH4AWyh7LZ6W73DPqGLc8wXiU4VZmzbK9or5B9NMWi6Rt5T",
  "key21": "4YGFNviGSEFpQfNaP9pa9nw5GvW8rnZN98AZc6a6L1LaeoNVDgZUq64zAXoxTsQL1jAUYethET4GUbCuLWFV5Gct",
  "key22": "4WU5qQEz9HpevemqrApBEnkuET4jNVEQ49bFo29a9qFjAmp7N83JzEE3C8prbydirgbfLLKEQHS6JVbfhh3qigFY",
  "key23": "4Xke5H86hSiAwNC969LPxrhNJHXCgtGPvRn2LDyUbD7qVArjZMyKJjK8xmBJ9vHDVAKzZfeAAiy6nsKY2CfTgbv5",
  "key24": "2is9ujRVRXrjCzZ1QHpgi8R1pFKBHdni1U6MA12sp3st61nZpsBgXssozekfS5dTvSCWbinZHBvZL55fEHmkux6h",
  "key25": "4ELtC6MRucEE3Ctpa8JoPgsppPckfvuvuvwComLULpbNGgHWWMZzspKLkpUTDcka6TPviL8ZWwzs84o2VsU3JgTa",
  "key26": "4LegVZ3LCiBgUCbB7ALnrk6T7WC3p99fCzoAQtTsPgLCiiNh5TuwC5mfRnWPcTLCRwKrMD1HbuESNSbuzvpp8RDj"
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
