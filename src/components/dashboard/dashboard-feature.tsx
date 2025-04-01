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
    "67mX2rj3V3cGvU3axmgnTTaks8ZU532GepHWxiZsQJ6bXTrUy66tbi7bxEVh8JhJmksr45NJ7MZzKawDTPySkEyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZqNixfJ6PyYmqmyBd3umgqxSXC8W9WnVUJUmQtigQxFNSg5DskUT3Hs4LBnB5UgeixcEU1csuj9ke2QrNgJ1d1C",
  "key1": "WxAeTe956d2DPb4HxsTeo5ktMDmWbGQuJDgs9VDSPCZbzECosCxKrpJYAkDetEsVRbPap1ByS9jtGy29ztDNERo",
  "key2": "5EgLSivWz7DPEvS2WVVWRjPitAJTnGAwBtTYu6Utg1LTPUMHGgWaB5Nyckvbj4ShZ9ZBTf2GxAWD2LrJ2ZXJnKEg",
  "key3": "Kq5W48MDBxWZbn314u9utvTvDo3usTznn3xCZ7GcU2gceBsx9Ne8h2ZotQuBGo4SyAJ1Sxp8kPZsPoN7mhY15nA",
  "key4": "43KGKSjzsAGsoXNgFUUtUChezEt2DpGTVWUJoPYjJ1eMHueuATLqVVouUv34J4KuUVmqJ7jGSvwz14UK4rJHf6fz",
  "key5": "4RcWfYVu3ZDYtp7YGoqkEjtcj1AcxvtYBogD6ucbW55joi1goVKAUoonoAeWwmRUNg1o2evihCb7hWpnzhcZHpZv",
  "key6": "5kBKp4ttZFWQmT9CjBHVcDPyjd9ZrdHooNjFjtpySDXtpzpEQEqYtZB1oXo5tR1GmVhMB2RS3wiUga3tBPw6DVFY",
  "key7": "3V6HUKWEguKC3EQY9bctBowBV6pJJjFsLsbHQ6v6MeWAp1DeHfjP5DYLUERHTWCFTYDzQB8JuCP7aYMGpNidRNAY",
  "key8": "2KZdUozV5b9krLzduB6PSgVLLtdT1CdFRFpQQzQx2FvCk1hU3MbBTyvFTUbW64qcCpTiqbvBT7x1ogedDmqdDWbU",
  "key9": "3xT5WLc83fUB3kvK1xst41AUxKxEHvBP66wzQ7dRmi8LVe4TMHFCPGZmsp8GmQBHvEhpdZoEfqGX8SLMqBxDwrVk",
  "key10": "5ESYZcpr9YucgSsYrsEKARyXVScLgoqpRRSLBRoVkdzUGH2jGvVnEfFiqZAQTr4jfHAtc7d65y41usXQMyZPjiV3",
  "key11": "5Ngpo4T3MMwKvFSbdsSdLngLpifKGomV48EAh89i88Ewgt8ANT18iwFrQzeZBLiMTDfBAaWZhoTN7fojS9HzP8LA",
  "key12": "scZTWeguGZm9iPEbCRHkc3XwQKgqpZop4mBPQR5SMDxRbaF9iGmkeQ3cmuzoUP2f54cdjnGye1eAjyPbruGPdLU",
  "key13": "2aEijX6fpbq5xTEuBMHPn8hmvnBbHsm5e3yDPtuFj9uVnXtQLxBoLCnw8HH9jxk9jAV26tuWaSmYy6cUd1bb1toa",
  "key14": "YDGRjKjnBG3NoHTjHYzLRykanfyhuaBih8xAx4DbzKw1YKRTqTVhT8bxzKX8CyBH724qABS7jsQHGtDLJ5wj2Ty",
  "key15": "5H1NwaMPLcAxHndSqkijX6hXgnJToEdJcqjh1wKEdzA8tT7umrHsnbFmzmZE7KrNYxGFjz965sA7RTbtE1j8V1pf",
  "key16": "m1KSvD4GHN7aXYzxWXaf24JgyeEVRDAEd7uPo2zhBYY9RGzBucJ72xtXWrGyQYs6BYBTALRnwA3Vd1Avd9JrmKu",
  "key17": "36zEsD5TgUsRnEVZ1hvV1sttwJRMNshhgRtW8kN4J6RgePZuUdGAc28B9uqmG4JWXYY6XVu5apnbPryDt6WDqGeu",
  "key18": "Jku8UkRJpRCVtZHqpTtfZE7cYTmD25Q2kSWJJQDc8VEgRC3tkY4ooGypgNNxBYVtUkYkKZ3QmWW3UK3c7NGGCJT",
  "key19": "2w6Jj2JQMrLW6CzyBde2FFXseTKfftKUnF94A52cqiD7mehqx4GzZVMNCNt7nkfHPRCLTb2ukoxZCPGUUYA33jTK",
  "key20": "58sVLn3fC4fzG5tzKtKXUPWimz6vbcWWttVi2QSsytQn4oBRns5ivL1HEm73q5KbBX8qXAyQVbFhwq6s6hZqG5iT",
  "key21": "iLY5B2t2R4BN6yKG59MqQYTGM8BPKLBuST6Cz1WiPb8VZbJ3SAK3eDrcq7GDAn8DmSLNqSFnXfRHbZjN6oyWZqh",
  "key22": "39QRvWkknSGXTs4Gpk4urEssFJeDtktePh9mzw4bUa5bu6RFU77L1x9zj8rRGMCshKpERm5FNfqJvJKrayqJg3kd",
  "key23": "3Q5RFQwVfEw6eeJKGpEgLLkU18yEnYQdDjaEvKqry8AJGXCSnLM2qs4JAFC9bQJvjz5fNQF3ykYZDoF6z7xYQ3gu",
  "key24": "52isr4MdBAsqhTwmCeKSsxqrw3FjkfgSUkLzq9ejD64RGYDyJniv1YxKwt6VnbkHRwRBJM74AgxcviD1ywFUnEqj"
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
