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
    "5Y6tmaMSDCpoiF2HVB7jxuYtqoEnxP8nvqgD1W1g26T6zTzTQ6ZRayExAp4EgppJDSLBYGNhMsDzUcAx2nqqBiUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z7TF15i5WK85pKNcKg98MYHVeoKrpcqSkjp7v3tpQ9daAuuWHJLKswDTaXjKnQreJoq7RvbMVFqKbZhiHBfR2we",
  "key1": "4ZBSNC8QLTWLjAbsrZD9L9oL9ZfswxjMvu1DB2j7EJUfiSCjWVvF8nJuewJPmcucfs296yWc7g1mknVH445uRe6X",
  "key2": "5rZzognFdkctgzG51XeqnWmRhcjwfWgFsnCQUXTPRhrZuq9ZYgPt7eLN3grtTi882uWkxVwGrdwepMRRuo3uNNYQ",
  "key3": "5FsDfLN21L1i8niWJLg8WX66SPLk5tKFYUDwGi15PJtsAchRL6C4JWKPrkf13qwsKKFJLpben333sJkHDm5Cdw8p",
  "key4": "56Px48XGeb6kk7pQAvj4BEjche46UkwzeP65Kkp3QKsjC8udBY1AUj66aou1ZdSSrNCX177h3geaPrSrr1bvLi56",
  "key5": "2X2JpMTuUxPN9btLAM2q56wjvQAGoMBsByfPSqjBBojye75bjBDtmg1QbJGGZjTPY49bgcUQGG5hvGLwEyYB7gwk",
  "key6": "A2cSTQZvwahnYHGmhWjYjuYKzatQkuwcwPRUwJk9FeJiFefczi7twRrhK1aJaExytGf5J3nCmAXYX5sU6CCHNhQ",
  "key7": "3nYu7uTx6idEagjxahrWFJ7shUA5HUnr2QYjqhgNxhYZf4zwtv59Q3LdhNV3aBfxYir2omyHPjpA5SZ5prDvLDCy",
  "key8": "5k4HX3UE535th2j5fAUdAVXhD9ZBcGs5wiWtAF3Hpu4no4dGMAuzGC4jM3jiUSLSP739MqwXk2ebNL5jrCUE77pw",
  "key9": "2QgLwjTLPSSZ24NMddC8rqW7KYKQfczanqTJYSHhLbuTK5aYwLYYKvzfxJwUZWCPPffQwhWGJrY8gH26GgSNBHLw",
  "key10": "4YTadfAKjx3UnmnEf579bpAHynxa1Sz1F1o7L9CBYvfpVi18udVzf1rCfv5pNCMAXHUn4vUuqjqLBWG5zXMy23Co",
  "key11": "3mY3osbXkqhLHBHprXP7KQHLgAPTv4aWhQkLbgUqPeCJodaEcViQTCU5HVZ9EycY6KEooF8uB94ruxUbA97V992t",
  "key12": "43Me8CasVjcR4oJNai2g7YpkM1VW5o3ZY8QvnsLp5dc4syKnT4KpBEcqZLtim95A6DXZkLfZ21zh9VfXyVL8vkkf",
  "key13": "35B8g1dT6GCgGpbRyYcq2YeyNj21ARxSyop22EUQsHDTetB1QnVof6Tfc6BmdQAbfwgLmbwakCdzoUB4q19Sjpmc",
  "key14": "21KC9YF9x7YJEEY3KzwPbvAE3P6XueF9waW9eLfj72NJ8TK5iGGy9FkuZzKR5a7wvSBiTChsvbPw7KSwzPmr3mor",
  "key15": "5LnMRuuATSWibxFho6XfEsJd1a7sQDsZ8yFZ8akv6zCv1v9XC68nHwFjPHo5ofrGT6jmGJaQkx6Xut38qErUdxhP",
  "key16": "2ix2oLinRWuEtT4XVTaVt2dhSCeycNYsmV9dEHkoWhmfkhdeqMr4v2X7WorH2gXyHNi8cHgA8hQx4Hvc6bGGRSKA",
  "key17": "2xanE8VrURpiUmzM9KUCMG55jVtsDppoxGCmMtXDirTXjAPu4SckrFfk4svcPGkBDMnaCAjp3bnYUVQ8jPpMqd9Y",
  "key18": "AJQo8MwMRmDYiMbGBMRU2cLGQMuic7bZc66husKzVoEvUWUcMf64zKhZYiYCPqTgpaKotx8JfcYZWSk6hjjj8cu",
  "key19": "5FXBKGrcb3xAEFBGAY6U6UqnQPsDXdP3DpAZPU145Vfsf4aHsAqoKG3F82rb188EjYqGtiPzTod4BmsQNvEVw7pp",
  "key20": "5jQcXLdH6PNztPMZv3Y69JZwp8QALR6ka6RDNNB9qjG6dWgTUTRN3yxvSQGa1wYnXagkxSEVnJubskT6xCAoQKxn",
  "key21": "3qmGyJts8ENEP3aDyDxoeELZ9gdqFyF4KahWBBiwow25vGSD5Bwpgx5WqEYYAyy5cAPgpgoxi9gjrZG4866BmiBV",
  "key22": "5oGPA78Cx5Q6J2Emorua38yHc5spKpVg9K6XXbkD89moPwDE83wWnxxaXj6hE2CEZjd7vjakhkDFG6igUqgHpyri",
  "key23": "45wp8pb95NmjJijyWMFsvwc4bHgXV9mz9FhjHTJyqsoWVT4nFcJYk6F6TySdYWFVgjBx6wuHhEcGPToSDnTA2AJ8",
  "key24": "5CsSy8N8JJA3wmrvFuqQFtdDENWdLeudyCAo8hjjMww94dZpAhRXPEtSB1W6Ue3Hca8qr3XSN6wasPaxBiuVghAs",
  "key25": "3oBwrAbkJ9xck9KuHFF3sH2ZSK1VAsiR3Zkn9tb13gz1MiU26QDB7V6AZWx1TCkGwFf9VzTSBc8JcPSZnY3CpGoW"
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
