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
    "4X8NCYiMZiYNJqCHnUp7QerH3yHGGMgyo7gUZt6iKPVZCNfaazv5XjApuHkuLYVm7AWjire2us6SPeUbfhWs7b77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qfc5woCgroE7PTpjBuu7CQkMHmGfzRStTBgPbwgfDSowy7JtsnEagceTHM1KEZczBtrQiSfb1kzpZkPbKAX2xXJ",
  "key1": "4ou31YWaYWTyeAQq87BtayYNadWCAp9iWMnPtBPqhHQn88XzhZAvGgf5KMPEMS65kFNB2JYHUv59LusVt5R1U12U",
  "key2": "XGsKV2BS7UMGVeCKihEjGpL7xqKdmPadxyEiT9173P3t6rHSAcnQWP2Ss8eguAcSamcdojKtJof5C8RaZQyfMHo",
  "key3": "33njRJ3bXoVwch1ciWAaZeWdNnShSVCuurUhrsnipDmZNhhWuj6RkEuT6oMz94BVpgyKAeyawECVegbdpiCEnap8",
  "key4": "4ZBrbeafUEiP4XcTEJvEPcW6gfVdrTBfGhJUREYNXvML1ECKu4mwfZmFNr9zJoUJdkoyWYYiYHPGhTms8qZyMu2y",
  "key5": "5SuuZik5Sq1zggpXMrbneVnJgyG8wT1BVBvK2N1vUi6Lxi58CZaw85wp5JzcwpeaqBtMWcPN6tewzHD3kfiB1e1v",
  "key6": "hYaFsCkdEAvjkZtBzCbyMtpEeQ4EFY4dhBPFyAwmBHMJ7a194eHSrH44YGkMQ7GpyJs8h1PvQym1RidAyjpq9FC",
  "key7": "3dtXZovE6eUs4nrnNsLDDAbFMrGK4XosHbtoX6eSuHHNfZDnih9vyCKTcK6Zq6aUuGxPHeKjnqvVjqEHSPiJwGzq",
  "key8": "5pCY33PzNgsZv4LMdbQNftziQkj3fX21WH7HGZnvTDdHZS7SiwYE5GmFjn27J9UucWNKEmcNcqnrreUE1vMAH92j",
  "key9": "497gPWFzdmG6TJHT6srC6rJHQqPq2oKJrU6pCoZo1uWF24b4AN218UMx8Dz2okrMqDgEUUzKpHw5uVyBvkYf4pfc",
  "key10": "2C5XhuJVJSFHuSig8viqLdogfGg7wG9Mg88MRrYhiEuiM2DLzXNyd1ttxBNmkAaFeiMecmKpmjf8NgvdZyYkATP7",
  "key11": "GkP6yGqmbvry3ZEcFxYrimz7m1tXADopNwmviVHD1899b4iXQ18nCj1FZdGdrgoyae7QBSuAYVfT2pFyiqEpi7L",
  "key12": "5mTpW1RGbzcTEDCBfG9aCotAEzTAedQHRbggFE8sLB7gvqexKaXwW8FkNUNeirqC8J1TFy1MTKmgZzksbLxeSo75",
  "key13": "yJwbLiXcBKoocUViPgyVHjGJmD8iUr9sbcKtYfSD7xRgExndCud4MsmXKjGSV7bZxW2MuMzHdpNpsTXu4Moxxay",
  "key14": "42sYh5aBx6c1ZN3dBK9vDrwfVtoRpKwAvYWtsfAD9Fonfomg4XGeFXYFJqoGsEuC7xtG9qwbkBg5JXUZfxxjjSD3",
  "key15": "4xGFKe7QdqT1JbCdCPQziHnhKa4CsZdZ4QsWsrmT9QT8KKJWnPxQeyqQayvXi5QbgUKuvFXyrqCY3M6f9qftq4yv",
  "key16": "3XF3Eypd8iWVVn1y4MFPHJqNse2iVftmzLAk8e91ZsJ3hXMmKpqMKxQ5gNYkgALxZQ2bUnuUHpr9T4paVecPxE2y",
  "key17": "2Vac9dYCX65VxNLB8vVV4RCXwhMj8KyBpnhKcH4fupXoYtpX9Y3xLjw6ZeY3rXfqeW7Mtp2f5TG3WpBkBtZYNvvE",
  "key18": "3cmnvfoqqiPYGDDhrdmW9iz8SekmkajWReskmpK1YoPtjJHxUtjxfoxodXQdPSn3nT9pphZ59L3KfF4foSfgubrR",
  "key19": "5rqgbAj5v3v9hSsK19EtHWAkZHmdczieP7DzfXMNCnk7WZVHxGuTNXFsBRQQz2Qhca2V2b7Bg3rBYta6ju1FTYer",
  "key20": "Kdb8TXEXvFj663AsmGFp75jv8au7MzuHJeLiqDnxvZ7WZHAfdVt94KNxNmaL9rKJwvSXLCczfsd2KkSBdhUb148",
  "key21": "24CNt4AiixwcfNpke1YMFkUQ1kxXdBFZmF3h7fvGFWuyjfKwFe5MaBahxpeMXTsJsLNUicwf3RniUX7wjVAc3vmf",
  "key22": "3xgU77mZPBMZzDAYNog1dADmhYnxHpYz1KvozDcMtdshoYvJdKLk4sU39T5hCezsfJmpiuR1tEiwPg4aPtfL8gd1",
  "key23": "Gh7NzreuirwdmQogZgPGR1c6ua6oEmHjBXjZZ1wEJmnC4t2ta9TEfwQchHdTzAaqDnwfBwuyUjtJeqV8tNL7ryc",
  "key24": "2rt9Le84CwSkd7sugo4S4MhWL3bhmhFn4KuQTgPvuUrXRENUJK4P3x4mWrE9EHJgACYDtwz8KRdNiaSfaMsuTjHc",
  "key25": "361DPoWfoZkLZCXsC97E3HfrmVybb2AuB7anGGRprzJn47A1DAGQdHjKNZ2U3VQRYxYbEKkq3njC4rNBQaBHnAmZ",
  "key26": "sWvt2qxYpjezJVW8J1Zg56U7kRTacHgcVnwX8eQtJPXWsSgWn7HAQd3neLgxqRRRihKRU4aMt1KC2KhYN9aDnFs",
  "key27": "3DDiyEDecak53TaCg2DxrQ6TqzN4geHiSaH78fic88idcirqQPsEtrdFEJJWEidrA9Q8Qknm5Fzye9mj9fHnsa7Y",
  "key28": "3tZbhyZGCLLkPUTvdUapbQ65w1XMpowEpXRRMQ3XMjMqrX6uHWCrUvcBGPVob6XtLnWHxT2VWsGivQsyt7EHpqdU",
  "key29": "62hJWHKXgsj3sP64qQGFh1S6gNrF3pqUxP3Z6jwfXSqx16ujgXX9Vr8SZWDadfTic6APyvi4tUrBjkMq6k2Ryi8y"
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
