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
    "5Gb7rzqiAXAB1r1XjxkHNt9RsyU8WYdU9RuSvwEnbfRVs3C8Kuj6ccRzD471m515wirnz672JnYcdu7tsfLhpEow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V7oazwKMmqkY1AQz4ctPqnZxuCKff86ASt3wMVaUnVjE7CCGQkLBL7j3FGmfoyCyijEa17vy5NhinFdK5KCRFwu",
  "key1": "3ZJJ9gNJmqZiggXygpBus1EjaXrgcgViVS5SDKSXmq23oEGDLKgCzdB1otU4ct2GDeLUn5tsddNo8583Aq8Rf1Ee",
  "key2": "zBzD9xG1mBQJRosdANGxiHed1tDKiqkgbMMSqvutjknQnYkCv7Y6Zd9gXVALM3SnSRaa7ahGSS9JmGXniKk4PGD",
  "key3": "5SX5R3FGJk7q8sSQAZmbKXmFhavkfRFMLBEJ78R33ZyQ8znAp2vaS5D5XM3yrVVcdhZky2rTykNLDCwu2K7v4JQr",
  "key4": "5pWBRZyWbi7GzcmrhMLsaqb1ts3sgH3eZfzZk7qti7ViBQ3XECnecPsAuJvcHVJCoVdYzo9gMeesh6H9cKFpNJvi",
  "key5": "2vjES9GMa6eCQJsmtDiyz8F7D5CpkH6cmHPYbiKzmt9c2VxqC5i2uXumx6BoNQcc2w4htT1pTPQgqUDNHDry87Dk",
  "key6": "45BeA8TwvUkMQHf8cSyFfoFBhmNbNPXeEfSM7jRxxY54XpBvTBT7w8DqxVQXRnc8wpugoBka1bKMWSpSY2tvcYP8",
  "key7": "uE6Z7xg4hZFhEpJ9Va4dgL5VR56gXbcKJwQBNMjfWmf1aTRVgyZumiTUkzY3irX3Wtt5nH1qxjBJRitpgQUbJZ4",
  "key8": "YimfzwFC7bVdFbKhhhz6itPXuCDgG89ek4f4ve1UENPp7EEKWnNZyeWzd9Jfc1bVRJkfbcoS4ZxTuKWSQRH6tdF",
  "key9": "Q5z3k3uccQnhVdVwAfH8FnacfSkUx1xATh1gp5iaoxm6CkwTZ1BctZzhhSnuvET4TMEtLMCaBKRYaeheD6z3diF",
  "key10": "5pjbMZUYtJdUonsNy1kdzEwbwRzD7hBdt8ReatLeVfWqNfZCsYuuCz2vx4oMfbiEKYRBHQVGhWL4L47ZEHyuekHY",
  "key11": "q2qyhPj9UwwtoDa859eeecac1vGgprpq6A8u4hJshFVg9yJifG3RtnR2dJVti7Z3TQmvCsnqri7AW9z6iNXVJzx",
  "key12": "3RvjBmyekQjpCETTfaktsbEXWLaQozCCk7ncwJn7PBr4XPBAXbcmmmfWGdRhe61F6mb1RvvoWpDxt8YrSXM3L2Yo",
  "key13": "5BHcCztnfcekcKxBdVz3mfiehNW4mVqYyTpqcxsMEACNfxbeJLKabpEXcmup39imjSDjjayCj8z6KUmr7SNLEGuC",
  "key14": "49jBknXRRRq5Toit1d7DUchD8kHeBZLcvitVF8wja4YMR1R4U4TAvrSCDMEFY9Q1BuA88Su3Zgk23osWXH8pDCJ4",
  "key15": "5HWqXb3ZhSm8jyK4X3qJKbe4osAqjy7NpAWLEqkA1ZrfnpxH4Him4PMppu9waNCNbopVVnZsRtrbbLQxVmLQubMp",
  "key16": "2YTjPidzLgGHVCL4CyBecRL6AFBuLXrR55XNngErMaciJj5Zkdw7bo7HshqT7FFTQiFkaqvMABC2BimoG62BaBra",
  "key17": "JFXMdv6ssSEbV8sruzciXeau7MweVUcjPzRVqvuwWEmjBTqSZAMZZt2HYmpMHH8HcguhoLZAkDMM5xqShvkpJWG",
  "key18": "3rzNDDvooccnQR4yx8teP26eJ7ozm9q6n47No1XvsRMW8MBZLmssEKPQmFnbsvBUfrzYLxsFHkfChStDqs9eJwWS",
  "key19": "3kyeNTrs71iTHC6oC7cJNv3xV85Qh1ZkhRYssmg9Hijd8EmmBzedL5EeoL2oSQe9wjUgmhEqnsFwRmUh7zouFehV",
  "key20": "4Gkwbfz6DvKe3er2yM5sqNZofHzCYZnQYngVeGkqr82R6YDMq8DXvEf9MSPuTBYsh5bGwy3xzXoKgBpaxkqfcWkd",
  "key21": "5BEk5jcBzqKYNfsuKD7DskUB3j4u95bM9yN5T9BBbv6Ccj26tz83Qrh1UVSSy4eQF6XVcitWaE3Yzba9yafj7DnJ",
  "key22": "2VFJR4oEkBfL7nyzpmf2BPRZvCaqM5onDgNtf4R6pPMF5NapEzYvTHnLr7DDJwE51xHLD9WAtHpFfMRWKZm4ntzT",
  "key23": "4q1pbCxks6GsaU94MfccybkVZLyUvYTNbYHKFqZUsDMiogiWPY3xEzTy2yVxfnNYgop1FznCgCXpWdmdCSrtGDGr",
  "key24": "2rcZyXXmEmfw5vLzTqWwF6cE2KbQ51tmFcniAAerhEdyS2EeXdKbSY6LMPeroeDMGStoB8Gt6EpzaGpaSJug88S6",
  "key25": "32myELRHVZg4YnxXRYAyvTe2M6A2gLxgkQNQAcxUdvgL1kCruWSBQNCMtnTWYG11iKckWiBm93byuNE9sEgLghkA",
  "key26": "4oVWVoF77hJemZchnFkDdvEDnjBJj9wEku5aA3JRbsSkZW6bLDrDm2eafDsMWjdFYsUmnReUoQCArGduKnuJyhUT",
  "key27": "2kaaJk95Bo5LcEdFuDThY5af53UEvjdVm9fstoE4QQMz6wR2gm9aydgvu4Mo24dppjBn3oJVsTtxM67nKWCgdco6",
  "key28": "4RSsvo3kHXqhpjBhuQLnVqEZky8HGp2zCMxbJkYsxPee9MKcm54tuuVgj1tcd6AWTxupt2NsgCbiBdoU3VQY21Dd",
  "key29": "3Nj11XwTku6JnPcjgjeYgcvrNfXrePpW1hv7YyTYzBrEQ59Q51C1YwtaqgiXw6GDFrmmKkyjriBsjyE3qvVQejFf",
  "key30": "129JgGg5yngMHofxYL5uiiaxXfhEeRkz4fB9wAj1pJToskx27gDjQhx9JoUfYhdBbquFS13xbR91dmqdtVjMBVVj"
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
