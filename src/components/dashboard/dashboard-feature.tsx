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
    "53mYnmWRbmekhTyGGA716N1wypTtbF9JfHKUdyJge6UypQJjT8VaDmanBq8bdAPfa9gnKjegm7xXTnU5n7o7GtLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bhqj5J7XM3jrosQcjYMcRPPwBjVE6wZCPqyzJovVStMisDWPZXVndTiQs9JfMHR4sg8SqNdv4mh4MNEFmmq7HmN",
  "key1": "5sc6KKkSydZgTwznuCWG5STqTAWBHBoq57YoozMoZyYJeRntdwMyxfdoEH2JM2eaUWowbFAn25Bh8UbU3xqNaqZF",
  "key2": "4qWf5nwduXyKSDpDUq13XaT6SUQ2LN4xSk2mCrWFj6YErmv9qdVViCBSPHRWdbMDZXLb7jSroi76i5PBiJnNE3SB",
  "key3": "5Xy3RiCpybLBH3id9L53FwzGe2z2ykgxwEcPrQZqTB57JZuazSw315nHwEd7CfjUMzYhZXysvrYH6wp1oVysPbot",
  "key4": "2VcGPLyKw5vyqg84B4YsC33jzca1DK3vA4VLrzGkwp1125u4iWpMMXRmJPsuWD4sMmjTA8ZUuVEBBNTfNUJz9YcR",
  "key5": "58YB19ArEENtmx3EnvSpejGPLPRdyvcNQXo8Bw9UjuYm7B1Whs7ZqK6FEfLnB26iFtCB1EKJae7DgoHyWKHzowuj",
  "key6": "3ARR8XMJdF62X86qmKtLmiPnhYN1fVNVpEzifKZM8eCfSXSJ7KfaPtcgQCnubJ1azdqpppqdwwL79UAyVNWwGFH8",
  "key7": "2X9gpUmvTFTyUn7eFnaeYicHaFTBm6kh2h4pYwE71tmfgT4rkS8doFMuct3Bp7TgXHWLktFyNZ5ZYGJRHRkCQAe6",
  "key8": "4hmqbX2MvERbwgGYh743azPKDk17yFZs4wB4LJLQUErNk7aPFjoUF7ZE79r9EnvNooPa5TU9iZyLz8bHoB2UBZaj",
  "key9": "2XLCcdSjV2WmvStkF8LT5dFkZSrGD24uCjV9RwsC4C1jgjKcdRDXNYpqxSnH3B9CBKWhLh519zwhk75EYo95VdRJ",
  "key10": "5rZje5zFRxLX37rq6Dfng5wz3igHx5nZk8bDP5d2y7NeJQuZPxj12PQMqAH5qDhRnzRi3JEEMCqwzmEtL27bXq94",
  "key11": "3b7gD8wdeiojYFYc7Bc7fPQBzpXDQoqePQpXDkKr6QFhVrussrVrFxd5vPeH6WEXnvhAhU9hPuexHZ7ikmvbZw3V",
  "key12": "z6UWxXe7ZTD44uPwmWZbbbyZ8hEySKu6kJZM4UT5ZgoHQwckwT4Xzf14sbCFFNydU3dneCtwg8HRpt5y9s4Dgka",
  "key13": "2HD6cdSvn712bE8nR3n6Ygj2LCCaV8MKBjGRrtPk9MbjrGDjsMUP3vm3PT6wdcAzqHLLVyVo4M5TRkURkG2KmMsn",
  "key14": "2H3iR3ayjpYDafScfprKUui98pZuDwrmA723bhGvTC1Mcc8QuMpkQ87W338p8MycF3jyGPz4hAy9m66WMcdT6uhV",
  "key15": "2C2hd7zzWjkVVDqJejD41RmdPLb8CrKdeXy3JgmQc5EbMWcxY67tBPi7doEca5713KNqysfYHspoMvwPZ919eAS4",
  "key16": "3gazsof5CnQWZZkboas1YZmzdmsEAaSubgEUzn2wgxUTrdTZUAaQnhJ39NZ5wNc7F7ZJQWB366eDgVMwdnqgpa5y",
  "key17": "31wT27zja3UxUx6LY28f64hoFJsQHCsheyZhB67AFLwJuVTLx1MESTPALygP4PbJGvcaaPd4xzxSsYTNuZCDL66F",
  "key18": "CgXvxwF8isUCzQjYyzxxCuQoNesmVUscpKdoLuzxKbdvFbzAfFeyNePGSgGooSBQ1mmWiDcjdrrRtbp6djuBrF6",
  "key19": "RLHCZZnGRxytyazij7yVD2iksqP1mBE4UCiAA1Qco9tqFkGxM15DHwdZAdVfXNxNVCPHSwmJQzWNzwoaVuPW9yg",
  "key20": "2r5mU7moEqw2GGk6PjGLMUGsfSPXGMhGfNU3ymFyQe8AquJSQXfJEUn7vcPq3kBGQ1Q6Bjeq6FvYePk4Thx1t4KV",
  "key21": "26pW7wpZPyGjBNqxJaQ2sMRBv9ewAT7w9Mm2fxmyfjphmTvJ87f3DFY69nqVoLcxwYjyK2enee3coVAFBKXTQUJD",
  "key22": "2UCCqxjiHB6LJeyUyQd3FNz36rEzM2b4w7pC4QwyxT6CsVYVNNUkWeXQWQasLmJXv2yeZFHgn1tEdNiLZmkr8mxk",
  "key23": "2bxVjVJwpdipGQDrCgnYN9fozyYWzTDU74c9E42uXSkR9aSMzUd2fHCV9AtLPv1FWQx8PEyABr7gGwfhLGtGCYxZ",
  "key24": "5SVB28Y2Xq7Bw2nkcoZGbUDQaivVMm7ucCBpepa4Wp9ZCLLVb5yRUsf3EZr2ykv2mrMgXJWssaMZnompUhzMhbUG"
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
