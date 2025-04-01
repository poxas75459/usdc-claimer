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
    "KMG4UUQDppcoSWCVcnqR48Zc5VuEU5dzo289Wf33K4Gi7TFnarA8XtpyDHWyjVM29i1LbhQHUP8sQMcSLCcHTcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AVNeqyfo2NPWBqCFBvUCtjbLUqRAtFKtpERVvqFjYiQ2PGrn9FHVfjPPzor4APx3ZXbkpmiRTPE9cg3KG4dEo18",
  "key1": "2nS1o3TrJHHuvVLsQGt5b6oW3mFypREgUWZfU7kYcKCZwcQtnjy7bnDCP5RhkwYPUuGBd5y7JyXnQPsjwTM1zE4d",
  "key2": "4U4FQv5CmRYdQhCmP33aKDjo2aaCsFBQMHrRyihPETnN5XTyUhNgtD55dGjXpgHBHSBi9toSgQnRtGs7STUzxAAn",
  "key3": "4QntjPPuKf2DKisdjcHVHf2hFQnJhHgKXCTH7bGeTHos1t6StSobafbxNFtk56NhEE7fZfXaA9GKqnLuJSeJyiBg",
  "key4": "2TwHwX5DEiFvbBxvz43cu4XDCnYb6ZVhiEyPA2JspfZ1DTaVM9cAeViE26na99upSd4DsNN2gmqCGAvbJdBmVejv",
  "key5": "76rs3jwZUWk3G8hHkGc5XPJQTzmi4Wnb6iCHrJdaiFCfgfijeZiaLowFFhckjyHA9VjdGH6gn4EGGRySnUFE9b3",
  "key6": "5nrnc5tFZ6nj2yeGyvXtj5ofFmYnwnanGoWPTzk97rwE82BH28UdgKXujt5LoBM7uKWJE9g59ZUAF2rLcSpfTvhw",
  "key7": "oF2uzdixU2LPkrj4kzor27JhnqKcGxmkTeJbR1XYQTwa4zYhGjwBinZKkpbA9RmnnLwy6G9TT4ugJpKGCCUJLzg",
  "key8": "3gBo48KJVEz4fBp4geECp1J8osyjXnYi4ZDK4hLYqiRRjwPFcYjDRNFjXBHP3RXergjg3ybfY1jJcYkc1D1dCvmG",
  "key9": "5DL8JUuUacBdk92txpTbQNm4cTv14bcKDByF3gKthRakP1T58WCnWCzC4TkPtMYzbzQfzx25PjpVv48onUxXNbXa",
  "key10": "4pmUqAwg1iW45QrwKpC3Y7jRCUWdaqerwu1VBC2rGRLJvwLD5dS7c8LQ8VtZUofcXDfU6HAxTkucHTDQAUsWQ8WV",
  "key11": "4UPKjsEXxSSVbLY2P2rhwph4LdU8FLKgToVcQ7gYGtSCVSvMu2thGJifA7RS4WtPWgBgvpbr6Engo76xUXxFoo5F",
  "key12": "2RUsTFNUVewriAX727KJv8RfXFW1dYC2LsBSe6FMoELhe7gw7rEmvH9R6woVaFY3nMbjg4DnMR5cc6oYF8Y5Q7hG",
  "key13": "4B2XqPNUKCUFLTcmCvoNsV3nG5933sWxFN8UQRJmq9Q6HoFSRTSNpKbHgYLuvoYbYbh5L8buG5NVdPjHSmq2xye2",
  "key14": "3rdEsJDK1YHSquWYH9HwPNT7kc7HgL4SB4LwS5gn7pt3E7CPkfq3Shw3nbsCPb3H9amESNEkQdotMeje9wLBGhpD",
  "key15": "5kxt6f1in9qq2XRbXKUCcyyNJjga7cHhYzqBGQw2xCL8x1SfVxFHEJfikR8UFNdJgUhAX3qv453ZHXJUXigzffeN",
  "key16": "3nXTU5M7NjUEw7rE74rEiJXmYNHryQnUUH75j2D8XPEDn6P6eGAKi9Hno962XiwGMtpNfwS4aWHeZe9Taym2MRuQ",
  "key17": "4eSaAcF2ekKPh37F3yLmbETsp5wY9VKoHLpNgy2vZoqmziotXut1AdBa8cX5MFxt2vB5UPp1oMGjjcp8i6CwjFEu",
  "key18": "5sD8c84kqtQCdJfTTW2goQ57iDCwswL7FXTiPx9prUf43K8P9w36Q4dvHycn8SHj6zft93zU5p91mdbWEtjLm856",
  "key19": "3iXRJzJ8eWSq9gy3BDaouHrzGgHQmKUxj5DzhJ69qxfH3kGF1Vw4VJMD9x9cnGHEF1zT8sL7StaokZafuaVzvYqF",
  "key20": "3EEKird7mUvNg1YLVqsc4PmBcJTGSaVwz5cNynAGqtAETtKeGe69VC6UzETYvoHmLdKb7m6c2JfgS6YiWRRu3kP6",
  "key21": "3HzgSDyvMt7TQuGYcehBPUSVFXVesDppBbLWquHGadjL5f91nu3qyHbZPoPrTRdp1fcn46o4PLKQogAAYdH8wAjJ",
  "key22": "3TFDwT1JYh93oM7Kv4KwJBWxCHAKrJ7qQmzG2pxG8KrYeycd4MP9Wb46tehHGgByAnY25E57nCmE6xG49HRVZuGP",
  "key23": "25yimjB8xZ3fSACCBsQyTGbTTEWWDtnWmb26KgiEKT7onVpuhgQmvqcczkWqbiHzd33bdUsT4hzaMSSGaMucTWid",
  "key24": "2mdeeVJLPoTPsGwRX8qAPTcm9N8Z3WFbUHpx4TnK3vMc4LV9KmktmQeiDWKH8XzUYYRFU9aPZbpm7NTHG22LDJtc",
  "key25": "294ECT8uesMnE3z3REFViHLkiiUoh8Rj9bBBv6T6AMgzAgNawbTadYAScmj6ry4W4Xg9V4qqRmfv7epcrXfmqzFH",
  "key26": "3pDQGyPoJQFWibRaz4gz5QmWM3bpVJEqiDKye4xMp5speeWnediaBkAuDG7gtRXYhWQmPWGfxbYmduVWaqVB6soV",
  "key27": "53nd8gHeU1qTmSFngB3yZBKrLVenAAbewjALts4P6XhX78DKBCrbxgteQ8NehcaWfzs5gzQp1dRhUWcTJdXmjnRZ"
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
