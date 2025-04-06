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
    "4U2PiVEvsTFEdxTA4Wt4NQhNo987WQdjK1whqNvAFVRLqMNHXY4wYJt2PByBf6zoo1UpVfNtoKRn2o4VuZSE3wzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pNPN9QSoqyB1MwgNRfmmddWnaJHWcw6yHdRWdnyKxqHNUcmHXypEsrY8Km4CZqK3ZLjCdcqAD2XdGLTVebp5NXQ",
  "key1": "3YHQk4XAM5RquMR2mtbpozSbJRUHPY1UxYU77XFnR3Un6Q95fSigC1n5uKxhrP7Q6tx1pxK8Y9xHGPbNjK6CKUAq",
  "key2": "66ca196jfHVa8UZx5YsDnesePAVDoFNPXrW2Y8MQqYX6eTXqhFbAoSvyTYgHctEiwjSrT2C2R6f7YVoVz274W7BS",
  "key3": "5gci3CHtjbtK8Q94PKGSLUj2ST2cai1w5AG3Z38Yx8f3hnGu4pbdhge6N6fF9yFzvDrPC4WeMRwTq72q7WQkaNVr",
  "key4": "2sbX5HyVqZhW8eWESptvGoTBrJBZzTvKXShv8sJ1RN8Bo2moUHxBGhSAN4uanWsCppKRjGu8PcUBdLJvk2nGKK1",
  "key5": "A9jQXnxb2MmxcFDoCnZDoZ2vi4JTsvzEihZppqu8WNjVGeYwWKx3GyMziFqCAF6vvR9o2wWiUSeBDaWP5YJpcNh",
  "key6": "3Ee4U3AwDUSi8R7Jp7xyLrcmhUz2B1hytCXAacLw66mPvbzcsrtaygKYk9xmc1MkVMV2HnH7kupSL1hnwRq3pcTm",
  "key7": "339zXhMnYCPDi8rHrGWGC1hmp1fAfgscDw4shM8ZeNXyW2W98oK3usSGLoL5vg7eVkPNeWvjTCECRGbEgB1pZ1hK",
  "key8": "5Yk6bV36VHFDZRup4SzRxCKzjzKvW5ENxz2QBAi7HL8WL7JXippvppqS5tb6KGHSDoL1YMZAHxNMfjPaiRnEnao5",
  "key9": "3iEW9RA6MrrABNFWXHD2H6NoY2WrkJHw3tB2XUnCZmE9eU9jwdm1PetJX2BmJXkjQT4FuffsCq4BiS9rGVMdfLb8",
  "key10": "2mDKfjiGSwMYJpwpujmKf3h7cMMcszd9gqETKPBVMiTxAq6iCjogxHxTy9ai7EpqJmiXzfLBg1T5EhtszJeQbDgp",
  "key11": "CTpwZFj9tYZ6WNGGFgGbmpjziVJXe2DcfpJFBjJDnRoEmQtiMXHuyHVWZCgMU6mYXnn6ReoWdFGraEzscb5gdYM",
  "key12": "7rhpSFohy8NFnnD9TxzSuQ6JUga82RpCvW53jcvqpPBmu43oXerqxn9xiqbSVVEPFAr2zaB91Bw79jbyWwHvcmT",
  "key13": "3ENJahoEq8xKsm46Ydudgap3T69CBSThx1UbJWEw94A6vjKYSNpBTsDMkKz81nQrMk7tpjM7rvqpQzUrv6UZMHUf",
  "key14": "2H5KpnkZCaS1VoF6PiaA3HyJxMePSaoPYaa6qF6EjWkYyvL4tSJcVC7z31cgFiLaejsFhXAMbqZpY5nG4idE2Cpi",
  "key15": "JjWtJ5H57pNsQ2L6iaMKNW1fX1TKZridBQapoRZfz8kRfF5MnbLuQ8Vpfycr5Na7GfVwvR2wdByHFfC2aDbAx1w",
  "key16": "4cQQbtchiHdsNJj9BKw4NxoybKYjx6KGURC1n1eAcxs9Y3WgiA8YktF5yTNAeXQ7a735jxdjQDrswn52Lt5T4oHc",
  "key17": "4u1uhz4ipEG6pKsgd3NCUM38a8NzJWF6GPQ8c4Em2CpV1zjLWdXxRAND5NMaZ8EENEYgrq76uv6sYkeNamvjmUUJ",
  "key18": "S2SVHkJAYRkMKaxgYjnBkq9LpCuHMaYkQWsWd1koLf7wk7kv1DjAK87pad6EBAHXxBoU9LP83GZEYuux2qW2jum",
  "key19": "32Ctpmg3pzdn7r5CQxeV7Qe7soJv8yXLe5Gi1mwbBP3a6XJvDSMJD7RmTud9Ri9zF5DYzQh2BjPHjdd8TW7bfnq6",
  "key20": "3JJeWEhgb3WYVmuaKQT7h7myhV2kHNgfzFjgzJ3erhYPiMzjkNMajcTUpkWJy2DLH5njtay56yrQZCT4Bcq9s67i",
  "key21": "n3brgxyfV9F1NXKntJCQSpieaKihV55gKDFhSAcnULmg9z8eGMMWrmdQcMnrNtJC3ZZbQLuVkW2W4izLL4c6MBu",
  "key22": "4cwqj2jSDgVLVfL5WV8v4MUYhKtEBd6ptZbEDtssTGpcLERjeguRBAAq6LMrpepXKsBuuReLW376iRfHXgjFDyws",
  "key23": "5mRp9PHoecy16DUqt3WcmRLSWxPgPf4ApUULDodq17d76VyCMk7S8uRJ3HVPPJBE4hNb5RPRnHDnZBrfCdnAa5P1",
  "key24": "4QY953ceYCaaBtmJE2aACr9wM82nTmfBER4xBvLAAKERQqBPwsoWXpi17doofdu5ymTYvBhiiUzgzERCwwsRvSvt",
  "key25": "36C2uq9D1RvNSNRT6y2r6cBBtpj9qcBUzuVJkozGPuhw7Lp3BkNNZGoBCGXGWYruGyLCGL7A1Emwdg17caX7aP6J",
  "key26": "FahBPu4pVP5jUj9hjD5sChFygEfh5BqFKCCthJRV3C79EnmPcGm1F2sFkDXCo8Ce6sGTmfDx8e6pavkDDXU9xyi"
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
