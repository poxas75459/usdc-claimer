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
    "6eAVixkn6JACapJp78P4EFs7KDdJSjTADrRhxTCJ21ARMAQXQZvcgS2hANXdwGJUUrqT4xkqe5ohQ7ScUCsb7UG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KHUuXgSut5LjyRp8YZSM4JEyQh7LfC7xrQGYdDiWmyDPdfPV58p16F8ARfEmYbqoBZ9u8JHuyN3CpP4ywkGEehF",
  "key1": "5TVwyysYLtop9uwUGS4wGernYi99T6BP2PFv3NYDztP2t7SEceeUd5HfgvRKvTy86V4UEHaKwX3pib8QbJLxBGq4",
  "key2": "29b5DfGTJVePpYpsx73fmziTtv9DRyaVftgVAHKQL64byYytGj6GW3YEata7Z4JUNnQuHgSpZqtBPhUE2D94tyzp",
  "key3": "2EEdVTLk9CDCBBHChZSu41Mm9hqaMT24UtKeZ79aE3c733ANR2BRq5qJppWs1ip6ayw4DCXu2VrVuJun5UT3pnZL",
  "key4": "5sYpGW8FZwRTQS9WWwu4ZFBRscn1LMtCs5MwwjJJss1ULHMs6SGPKTgQ6dyZAo84DVCMEfw252AAa2Fso7LJBS6g",
  "key5": "5quzvycxoHVky6t1w282PkDUa7tH4GeHbBdrAZ7YuS4NDNLJeLCPY3KcZJRJN169HwoV9hnd1h43rk9voNSWcSBe",
  "key6": "2SwpKQF5hJnpNYRpcBcwn1bK7MVJHNRyHwrXEE6R82nqPWEd5otb8dSybPWyY5tCWJ7m67p1DsQ8tHqbi9Bpogdv",
  "key7": "2BPvi1Ff6CANnnsguLeyk4q8peHCe4VvSiN3ASSpvk9hj9ND3kkMpBBCau9Y7FsGRDrv17Vv8fi3cveSrh5EZLKo",
  "key8": "2ceSQrv22qULz3rYHRJGSzYywfbuYQaf4aPKpwcg1aSWmkB7MoApdyf7r1azSqQzwDjrmtg93uDZNNmqomwPw1Di",
  "key9": "2Uvj6ThyyMxCyBZjuD3XrGCtjKUKu41tPvksTAfyBhLYqcqCXzG2V9LHMytKw6T4qed3S6fVFLfCgJB1oa6ny9M3",
  "key10": "4TaX1DgHJpgMAJ7s3kk8eUa9cKgHSvmdT9rUnBx7jsCq7HNXxR1XjvvBn6Gm9keLqaAVceTDZhdD5ZzFxxn4A2nx",
  "key11": "4CCeEywCvEUuWLXHShFwgPD27JWcRs2XkqXmoJ9B4rcJBnbvoUx7iQgVVeuNvhBJdFC23Z6jT32AGQK77XRvnx3B",
  "key12": "TajJJ1vcD3Y1XyMN3UY9tcuo1xLwGyq7kNLMcW6GBTSDA5QZv5rzbocRX239tRdR7mCgjBUMfrgyV9bNEt64mzx",
  "key13": "5uLyjhYCf8FT4yddncnA4wRkM2cZR2NG4Zo3r96tjKksDzDeqDSmirPNtiExzRBk14Q2RqJV2Mi6kPo71RN47Fa3",
  "key14": "45me3XUbmjeQGsxcJ1bXvVXZrvtKFwGfhUxiac1prafcuNnE6vG2h74DsKbGqWRK8wQtp5CvmebDJZL8cn1y3Vtn",
  "key15": "3MrQQRxtF6bBqJ82NwJykxVmWXaxwFpeqjkvzef1twfDQeWFhzp9YtAx7msYDT2nXdmixgYFoLVbBe6BWEWv3Vz",
  "key16": "4ciWUAR1gkJTV6c7DP4Zdk3KXvcjqRf7dZETHLm4Vx8914W3YuyimoaGH4oxsX6b8FqEDnwJozvMFPxaj5amfrje",
  "key17": "xomzgiUVuq2o5e7N56rtF8QrT7U44DQn5Rq5RTAcaNpHhEjK7Tax67y6nFFzfaF8DUytPMzTCoP9kszk6caZRA4",
  "key18": "5LvRoraPbZbrResiiGRUg67o9vdHL4BWdmqDKdW9VC2oRScJieHMfi1sgch6bD4YLmfa63BowXkkNM9Q4TDkAWXn",
  "key19": "3TWq4zBWtCYwLkHi4ViGWumZkru5Vrm4uE74J1wv1HYQv7gC3h4bEQYt7ZFq35qJrPzZ89QuMf43TvUkW4pNL2cp",
  "key20": "639zyV18hvtHsvruqzeJQL8JNkHsSMcT7nVzTne3HtGVhW7MN6GQwDXdyBWx2JExZ6g9aKAR5JN14B1NUAC5mNuD",
  "key21": "9kerr28dwXrjfZ6HgVgoK8J5GuLmT5EhqTXj1cTcDKZwxwxyGhTkoJCeU2ZV67i6ZAFDGYD7mnt836RQ6PrJaKP",
  "key22": "2cgddv3eQ2X4kfpNraV4dw6LXgFAbA2NAqng4igWpoQJUnmBm7bgcbRQfHa8f24UYBE2PoPJ7Esf7hpPMs7ZUmMt",
  "key23": "4UNderDB3gxTJFc3mFSGDDQDpS7VxXardaxhenjtupYn2oxbozQqcbWMLRT3K26KY3SDbxJziFci3TULhJikksch",
  "key24": "3pPwUSPqbD3Z3zxz5Wj7ZpMTNzHkHfWz7PyBfzNT25JRDtXrjwCJW1Bj5K3R5zw56Tn2BQghZ5a1ZxPd2HFMedsq",
  "key25": "tXNM46SFMoocMCUCP9J3Zm9b75WVbB9kJxBEqhYcMyd1tfo7KE32wxhG2yt12qMDPYReAxvo8vwj6eqqKbybxKG",
  "key26": "67LkopNwR6uNMyJWju7NKkCPzcqpe8NCAFvEVgeAUALqqaLNhjtHRnxqUNjqysfWRumsn3rGz73RdRziRrVm6E3B"
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
