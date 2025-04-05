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
    "DJouQRWfCRTKe3vQhNum3i93nD4ueePD9qB83216tSNfSkfe5mNmh3xK3SvoePvA6fRLbBsEbwa8ihv9ym61cyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dfX5aBqLGsJg7cykUt4uZhjEHhGB2we1Jm87FxoP8vX9MvxJWDLsBZ2r4uvEKMkH2zCZShrS7NDaW2wxwR9fEGt",
  "key1": "CsTfRV8B5spH2eyBWPkdR3Ls6WPyNXUenG52Dqq3sfdCzjRrDsyN6Un4kBdSskgdgWs27jpGTJR6wfze2zZU6AT",
  "key2": "5ms19eiL3bFxznqhPQENaru9PeiATkF5o2UMiYeDuRDCHiws4jmGi7QFuvJBQ52ivdZ7ULik4ghwsx6jMWL9q9oT",
  "key3": "2AxSahKpioFjQS3T215aF4u7PC9xZuZaQFCnzStKQC9WW7Q78UC3XurVTGPgwvahCYYYC7m6gFBhhbHJwMN1FeS",
  "key4": "27FE4Te4qLp964D2jgy5nuGsNhYivXqQ5zVtrJuLjW2YWY611L2zpE2Dc8uc5LF4UUgNwLjssnAnPjSa7LBUZDp4",
  "key5": "4vSjBESTfom5821CFpjLGVNPvtJLrbjCmFjk4cvRhAVshfPF9pP1ozc4xd74jfWu8A6KF9yLcyjY9FLHAPRtx9FP",
  "key6": "oJefC4GKkp28ksqSB7GYKGs1Pm31WoifRaFeY2Q4a4aXXLCwTPfWGBQzUFQVkA9adeRnndn3Nt7pTGxEmKWpnCD",
  "key7": "3whVoiMaZvjBsM6j2Pf4s1fLDXJ4oMcJ2PFXJTvEYZVmKP15nQBnZpZFE6rM6bJu97SZrcbYasMAH85uxidHc3Dg",
  "key8": "4U6dKjwEfy9E7v5Ug79p2WbrimQc3vqP5eAgfxpa1Uh82ST8CwioWkhy5zCQJanSHnsXehysE655nc93KxaQJE8L",
  "key9": "59hYo1NkPkJC5ExzNAPvMAnHQCLD74krrVS2Fao2pQSAwL9NNYLegCjV8pQhBoGZczzgimYdj6PdvCgPJiS2zMj8",
  "key10": "5bXcVZ6cVjhbdayk6LPvRkvzTAjnJn7ZN1EcuwgcyA5EvqgvxiwEP7mtRgwnHNetbM4wBStAFH2dqPkPg8tGQh4L",
  "key11": "1oVvuxa8Yqoojvd9zLSArUt62ZjzyhqxiPkJYsM63R3EdoXkxMtZ75vooUsJo1dLfvarQ35fyN2eHWPPFqpht7P",
  "key12": "Vz9mqvfi8aa8UqV7e4Wtry22NJZDQ63BRErKGGxttx6iWsFotLwR2Z8C236wYe1hWhV4i6Su6p1QjA8NuYEZiz3",
  "key13": "5Dgg4K6gCv4zLVTg6xzfmudGdvuMUNSXS6ByKbttCb2vdyqxTvLhNFJYP5FCRkE6j4bHD88nmUHgwusw4LNoXrY8",
  "key14": "3NzRoZqer5ZUed7GwMQp3unrZteacwHK86iH6jnqSGa8HqKDZ6G9vuNukZUykDgyRrHKYuXyVJvPd8wmCJ1GunBY",
  "key15": "3xijjZUBK1CezLjxWJBnbCCrrpm75snkKUTf9YGGxkhvW7rbw8U5RmaRR9xMoYeXmJjEBCtKxg9VtPmxF5CDe9xa",
  "key16": "gmr9qh7uK4Hg3Eg5Mu36X6CSw8EPNYTqWXZHnwJi9ksECJ7eVX9w2HERJUMYTKUcse5yC26QpR2FQ1T9utpXhiQ",
  "key17": "3wJt21fdBq7YRqirBHK5zpqxQQm5hgkcgqiM5k3CyjrYu5MAPpNwHdfm6czaLwTM3NHa2JuTPo8YjtxUC84WU4Kj",
  "key18": "41VUHsJvYNv5anUHAnZhv7NdNguvs3sypghVU3f5XNniBAaR3Zfquvvt4Gjej4b5GjuAKEojyj8SSbUAUvz8Zc6w",
  "key19": "wMinHsBx416cquw4HXnijLfVuFG1qbcxAby3PVZmQWbv1J3AzvLsMmiXY7dFmySQU5dvuGhD3BkomrdsaLrobr8",
  "key20": "K38Ld1maDEvEfefxPaTiMzwKKf1dTdDz8WHHX26upFyz26MoCHsn15G5uw2hLinyPntbTGonzRAEF88HX37SuqW",
  "key21": "3NpxwM2dNLaR21Jtj35Jv3SQSeJTtbeNuMS4R4tP7H66E4uGrRwuTem8r9UC3QfcqJ5vpaznATjh7qMRskfo6PuJ",
  "key22": "3cYPYqDzHbRRninRRQMCP3BF4tGZPNuzqRbzHccDVYho6ziEQk2g91YCov63DDrFREntVVWgor76U26jH3qyF82Y",
  "key23": "sngBn9bWLHZmF5ip7TEewJ3yGbnNfAX6zvYQyuoTGU4ceF3dZNqLe3MnXDWMeFsEa5m5qffZHEeYu3mjBRYGiuJ",
  "key24": "3MHqF1YgbEfbRSGXwjufMPBPEfTwzY5nnDPWRXzSdU8iMyaC9LoTdp8x4CpbL4axyoUPf99bE3WGpBf2TgQEj99s",
  "key25": "UNaSjf3afsa8zvuxPZAWstnY3Qge3DuRiPvCJ8HCbMSVVecgF3mjbXbSPpUGanctLVWseDfyDug9Yk46rkRomNJ"
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
