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
    "4jDJgVFmJTEzebRwXCzMfAj7faY7xxyYDjJZvWaJPR5WH3otq66U2qx4DgTCB4jTGuvSenzo7ANPma6rBjWv69KY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qvakdUtawH9Kc7dCE1mEB3bYAWgqD3DXZ3WZMGLe1aHB8NNiLvegjoi35YAxkZDKkTiQAzQZ1aFJUc3zT1uErZb",
  "key1": "jQ7WWPkwLb1ttMrni4pLLAvMJGg7H5viYtppgduRnokHArgnop2Ho6wnM8WotE3pJ1aSyvYoesHAkWtgtPTWoEf",
  "key2": "5oYKQJQHgkFWPiHKgWYEQveDBuxfy2VRohPNQXXJ5qKdAWJBAh3GU1G3CZLBZTFapbktRwU4vUXMWTBbFLMxxwnr",
  "key3": "hpTAwL84L5juMWZrUYXbT8McKMyaQJMihqGQBwobdXRN3FAXSExGfuM7SuYNwQSAQs5x3E78ff4ZUWCEFCK76aH",
  "key4": "45t65odXeEryDpg6SQcdr67tQXxyWJM1isYzBZ5oTag9vBkKSSer2tGwKFiqe9C9ZrExRXXntwAR9i56GthWYwgU",
  "key5": "2EywoVF9hsGjoEmDeGNTQZKxehKr997XgeW6j7rseKrPFjBa5hSgZKSptFa2qquCspVJBb5qpGhY13jQZeG3JbH",
  "key6": "3QDmimy8KUbLfzWuGnd8kpA55fxesnaudxN48HG5vHJiQZWBQgVn4noGNdmWJryBcb5Zzf4ZFPhsuTFD49CVvjop",
  "key7": "4HtAZSh7RZUkkoSYYWwKeaXNEkpg6KRToWbkezEcABZw5kbvHFbjm7NpjsMgYu4usTy6qH42BB1iaeScaqgzH3Bt",
  "key8": "2Md6YppGPU7isk3dAWfwPxZxrkViiNsUHAsvM5cH7wbJ4WF2usmyWFJHRYkGXa2LXCASzbHg93q2XEMMLXLCQqxV",
  "key9": "57TUDYWMt4E6rZeHzdfxVmTi3xn4MygBbomTjHWxka2e4yUEbzusDn4FgfuosVxFGRmBYioQo2w3YLZ21QnuHLGi",
  "key10": "4ZvN5ww6R13km5Cy3Rwdp3qoWKewmkREs2PMYj4LLnXXqFTt9jaaqpUYCbeMAd5KDux9e6y4sbMMD26hwgyTbs8B",
  "key11": "3Aj4WUtWzwYSWG2MSkviSbJfwG2PeuugN138oy57Sj91K288iEjvMEp8rMaouJujZYV6sP3UCX8H3WooXfwR8XU6",
  "key12": "US34mTJX9hJs1SUKorEc2SdjE6U4crh58g8zZjRR3g3oZUdjYQmr9K4ecHXwXoVTY34QR1DTJMVAk1cm44VX6Gn",
  "key13": "9fK4AMeq5dREJTwdrgxSm19MD4SugATZAGnzUD2kpUA57cqG2cu2YHgteUn1bB69MMv3vxo2jZuWuxmRsUXhf1P",
  "key14": "2Ype9Nq83XtvKDwgWs4VHhokd3d7aU1VpEPzzKyCmN2GznCHZBgPZuNdaZsfU5zPtGooV7nsVjTEMqkKM4kBT5D5",
  "key15": "4BAVfqVviN6pPz3VF1q7KR2tJc516sv4NyszpVFXtQo4Uo2g6w1qJbQQhXnKq4TAU4gYL3NWn6WG6THWv1xvhBu4",
  "key16": "wnHJopSS1DhRranx585gxcakw18uZ9cCTJQ8zqn7w2YXYKvonDkPGyaVwqdehnk3CZhSYKKzigxMsMNXwBa3BSc",
  "key17": "2FvRqE3quBfzLj5BTJaN2A6FQX7mdYrEvumXjXtB7re4UXnpHA745TKDHcN34f5UxdPa8eQ6vNxv6q4pbizLKS2s",
  "key18": "2mt6aCN6UHLQ5vYcEaoaPDHEsgvCZdpEsF5heMgphx21Ek3d1nhQi9S7inaDnaMsC84FjyDkBuQThzXB4W123JJc",
  "key19": "XVGQb6o8Row1rp3Yn9KCTLjASJz35yCJ2YtMBQ3AsEPhYdDHK3N1SG8nBkUXRFUd9mDi6YrDt1gsAP7FCakJdx7",
  "key20": "4MRsR7iQ9aMujwj5CzA69yg7kn3FLsscKTDnwmCKkcdFRDGKi9mF8Q8YGtFgP9D7MWaNXEM5yFpwzXWx9Di9qc4A",
  "key21": "3okZpbEvYr7G2TqLyPUYQmj9iQfVmSZBUbz8NTSczHxrYS2URssmuf342TzqZ1jzb9Qg6adAP57LtsBQkxKEf7hp",
  "key22": "5eW1pGNsUebkwMmcHnHhgVe7tP2y4hsVnroMHZ1xEtrVNcQRtBKwhhgUaJYvwRCV9JWDi1zgJDBpk9CgHD4JLEaQ",
  "key23": "3JnfC8J2548CWKyub5e7A3Jm6VsYenUV5wV94kvFRfZcGHMgF2dRsgEd6coBSNn7e1K5WZpbsdvfi7aBVr5YHv2A",
  "key24": "mEgvoAFYLGeweUyCxuC6QBcaUyw4uC92n8vp78vdaB57qcwaRpsLvPDCZGizxP8PbvPEWcdeQyuSqzwsuYgw33p",
  "key25": "55CjrXnmuxb6yyon9jj8BLU4bk4E7ag1giX3D29newgVkSEmS18W8V9t1UCoHdF3fp8j92urutwAUtU2YV7mJffL"
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
