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
    "5tJpUQDHqC4gHuQrsYSv9xZ8WCZQww1Vrzkjh4LcNx7jVSic2GZfdwzM3iF6qPXpw1JL2xp6r9ptrXWFxaaFTfLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yjLQhEQ7Yed3MVMFzhs1tSWfvsLY4k6udAeMuJxzR3EtnULkzUwJw5XNuXsbb47Ex2evYtHaDpytZXxogmTavQr",
  "key1": "2Xk4RBT5PqpXvCz4t7WByJaC1rNduDYkPJnRyaWcCXZ86EctZmMpTTmByZFEMzABL9WTBhTLjUmQ8atSGJ6SaprL",
  "key2": "2HYBtDWYrakqpXxwzQd66d8BaHbYTXzvQ9HVzz4pnox2ShYpLGKpGgdXLobqUnyHGSK8D69P7tdwzDC6KEFnKVLc",
  "key3": "3FR9MxaaKSQj5SsB2tWtSj2AqqfNn78m811shbFMgrLG3Shi26CMeQ2fC6mU9KYBLoJbgMU7DMkbf6diA1Eg947i",
  "key4": "3KqHZuExy3fGGFJ1uoimD4MxY9VgcxySismQvza85d5X9QzGVN9V72XV1hQFq6XZBVED8dmmg2pGEmo7uN2udEbP",
  "key5": "5KAv1MNuo1ZMtbYXk243XmaKkGwjoCkbUq32o7munEtmtYEXmepUverH5z1VdidMM7DNcW8xiva1f4yqZyo241ao",
  "key6": "2Ds6cwK3c5iWtajGmzs1GVNiPXv6TnPvNEvJSzmsoiNkXBQrXuPrfYcEWCwj23UixQ21ie9A23kZHJ63KEzg3vJZ",
  "key7": "5srorkr7EWRJP6RfnHhWSJhJXTjAmiQ1ep1VdygF9N8KLNUYrK3mA4eazFT4R6a9LNq6uN3g6rqQibLQYR6kNhct",
  "key8": "3nrn1J4B6PQRYZRhmjR1EmDga8UKyyyf4z9Bzto35syzYrtf7cFFH6tSHVWNBEPuYFNwarLsxhdcyqoay7hsXkYp",
  "key9": "2MRTqkn4ZmQ96EBi7pwLE9LX11eJT5Xsc9kVLo79ERLX7jzkJ8GmNxqKueG8QECFd7rgoJQNCNHxfaXQMgrkzr6Z",
  "key10": "FJRNhQ1btPPBZCHpFbPRr9UzCjkrmZo3a4dj6XmsR4Q3H3xHUv9HQ4Nweh219mL1VJkC6VRmL171jWrQuCVc2UA",
  "key11": "kcyCnFhrkpxzvBkReVcH6DqiX8JuUn56ntNYbvUfnmeFjWsYFmPRUBE383FoCqK9sry4L9A6nTHr6WhqYYnQsVk",
  "key12": "gK8CHo468ghzLJSRzzpif85fppZdKF4aQRArqjMqBXAwEVfTHyCy2T7zzoERnmxMu3AzmbV1aCViRa9YzHLd5nV",
  "key13": "3qpeubd9e8SaR8cQJ5wsBAAz79fCaSGeYjJU8DJR6BsxzKkBEkEqcD61nvtsnMRAawpjWr6vQc2uYoHkhZnxb1jy",
  "key14": "4rDiY545PAjDceucqPcDP3kPEx4Wnn6gEr8kLCkPYdnL49pMWsxUELHr15TPkEE4jzBwTya6MdrViyjnwboSAAHQ",
  "key15": "3apMEBUoLGi5mw3QSZrNKrCWszTWeeJezGPUhYbz1psgfxqe5KwBKu4SAkRf8TdmeqsKP3sEUL8K5ziU5DLgsWhx",
  "key16": "2aRmvbCxp4aap9DgEukhFVuV3TuA1YCBf16ptXQCt1JZAoEhsnWWP1Kk6v6i2zZ4LfTPAtBqMyw9tSUk8TGTUieo",
  "key17": "2pRicbQpAP7oAYyNSScuzbQmR3spr88HrCHCnazDYRG6afXnDuWy9QmiQagBGLnLZYPqaAFbzBfsrkDQrp9hGD5W",
  "key18": "PwgntPZDiLqSRqrLreMy4RDvnSDQ9hq6T2oYCQ9qHRbDRe2RG2b5zH4pV1bhVAsN5TABFRQsdt6sh63MxUm6CGq",
  "key19": "zc7QJc2XkZDb8hZWqv6FRe7fj62tqmenFvvws9hCYeuUpBX6jrd8u2xsjw2KstxieoKaDwRrkhyqQuxx17B8JT4",
  "key20": "4Q7scv2HCjf617fGSFB9ezYva3SQPaVYsTknRexbb7vpAnaaM6tEjb5qnYYSL9P3LmKYKPV5FBi1EtU9wReC1MAb",
  "key21": "4u8Fv645CbHhh2ELUGLV31bhbYrsQ2NiVAyx4u4qn3fV85dSZgBYGUKEns4sT1UGxNRgwtr6R1G8wKq6xX3gxKb2",
  "key22": "MVWVw6uXkHFYMRNo57E1z3rmxooMnnr7n9DjamN9HKP5tsXCHbkeRq9WkKoMTTpH1FCfYCFr36pbDgm97XFaZmB",
  "key23": "6f4HcT2LdyBPWw88FZaPP5PKmMz5M3Ad27WJawwiaQbAMzobQy24BftSQWearCJsCoHwvrfx79kmXqvBBviWTTz",
  "key24": "2ZAqUiygDqhwWmxT2Y6KQ1AxB84R8p17jFdJsTVBySLjt8MHUw26SuBcpmAk71CooBapSJouCvyBUJwc2jPhiNQs",
  "key25": "2S4WCisHWSSeAhJDrreqZrxU3VidHENQJDmzQ2btvWXKhP8t8moLRptXuWcUDSVohvCVF9Jjf998NACXY9c6tejm",
  "key26": "61tpP8BVSS3ADgYyJeK1HNo8qKzxeR4SSK1cy96Cpr9bcxiGLGUR9SDqW3gXCd8vgtcij53NoJhTC9utrU4noqrc",
  "key27": "2P9FLjwJtdFq6AKtHxwuKtXqJigwBr85rRRF7AiLCBPFoTPGZa7rTgid6t2GwkRTh2ymq4kaXiHxG9XyFN2YCzBF"
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
