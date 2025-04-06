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
    "3MzNj3A3HG6g58PbUk4kWMMwLkTH8hbGpHU47DmsDXpMuHJKXNh48J21q2UzWqMjbWUAnAzgYgm49ys5T7dWG5S7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tzbPMTBuJx6TdgehhDfDSeZAm3VNpVgJJKWrnSBuLWE4xLa3xNhZt5mszHzv6Pu6RUjmPK4W5frUSqRYjqojbXS",
  "key1": "5GG8W1L2iYhME6obiZ8MsmD3V8dGj8m6HdAHdzTfzSY1apDUN4XtyvoUpiExs5iCBLhYPmcY2eyAqFndvUyS2zMs",
  "key2": "4VXqesSJeLHGVHjzSeZ6FSXk5XajzvSff4snmhdA7uLG1c7jrbpmce9vJ9UMPWChoMZVEizuKpxzYW8ykcwoetaE",
  "key3": "3LWoYDt1aCA7NXZjb3Gz5s2ZXT11NYkMMfAtrReCTeqd33NxxFNFzKaP9VcHYeyE62XKD8qhqjX9UqPWEPUyrt2k",
  "key4": "ztt9y9SQk9cTh1QC8TZXAGQJqwKSVH4o7pLpZEWuiK8a8s2uBrmuHySWT2bBYCH5xLLQUaBFVrHCDeZx8HGnHuk",
  "key5": "38iUenWUGxFWdfE3BwTaiYNWWLU79LNb6i9S3JdHJ6bvLeg5XkG9mQXjvKBbLX4khN8s6saCZCxTZLmWFvd8VTLk",
  "key6": "49QWPX3t8tBHYA91M2ykxbNqRmELoR4emr5ix7QyRXwVEkaun4ke2L7ijKY8kxjaaDYp7emQHYFrCnLDGFuQDkey",
  "key7": "fxJUS6w9sEyNnBqFRAfsYNHSBzWyUNqXpP3ZEduFfT8VPWwuSyXdwGV3y6G6U7rLfcbsgnrhT2NfkC7vWhNr84x",
  "key8": "ohfmg9GzUD6KKj3MPmSpdBMUyvWRXurJ6ATCPjsTHtocjaGJw8wwytLHcYoM4eW2SkRZYs8NdnpV6sapBqGUPMM",
  "key9": "128PyhRtubLpq8PPPnjBMP4S45gAdw8t6UgUuad45uqE5LTZokZcfNLozXgYvU36yeMd938rbKv8XeRYSMX7u1tj",
  "key10": "5v6AGwMyrgF4fvz7E89k6GQiMNk2Qi7mtfeKUuqeMEhZDSHQc4yn83QjwTVk5KyKURZ9HcYqHD3NSmZDSMCC9RmP",
  "key11": "2cV5bo5jmoj7ryZL2yUjprputSu57QrhqNZXtvKN9iWy1SR7APPNTDpi3fwBAynFUP3Lofk5a7a5aRCQZXvceYWp",
  "key12": "TiUhi5jDV1XxDyyUoQJrx54Q7vYtu8xtBCoAYPkBwDEN8GCeBjA2tniwJndpJwWJKy21jenFdAeEt5uL8qWrY8A",
  "key13": "TF5ZnuW46YTGJwBKBPsjgV4QmrjT5kJfvSiKdZyMveyDYLcBH2EWM9poo4V9y9zTfMajjg8qGnahzhAvcTs3Pjc",
  "key14": "5Wr8D3szC6FAmvYzzueBNgHZUFsXkXe9RRavE2k6BRrVTbckSH455VXD2AK9ntvSekq77y5bMzaQJKy7Xb9C6m5n",
  "key15": "5kZuYu9VmUnXd1cK2NEJjtjZfeTabyoDaCmQxi7tPGUvGTfyvF9zXbTWqSS6SKcSnRkU6RFKe8YEaeAsvnp5TTXe",
  "key16": "5GnEnAPspqiRzSoQ2EowhkhWP7BqNUYiYBvKJN3pZDHZVdraCLMNWN2QKQaBsUuuBStEoLBymtP5c1Kzmv2YpQPo",
  "key17": "3yNNBCbmTbS7wRyCTbWYYHgsoC5AUtGyvh2eq3GyzkUXQ7RgF6C2nZpD42tc8cyVqKjx3DxidvxxUBxnDxzgit1b",
  "key18": "2fmwavBLTyLU421nyk9n7Pep9yG8T1Tt9avrPbfsmdNqRieHwiU1sy967hnfsEvhAfkkuoXyedqbUQhpcBCz1ntq",
  "key19": "4MUnuSLJJ6qWYY8JZb4tfa6jXEQYBZYHSfkahJgJFKiNKaww9V6U2LwmGyGPMjBubnn21BcaPiJHN2ys1UvJWbMH",
  "key20": "2pi2EWW79zBW3vaBhxtf1qBxvd1vkCyJ5vV4NygzuDPvuiFH4zU1Q6nLDgy9FKnYf3w6MzU8xqk38JKcfFRRq3J3",
  "key21": "4yPXY4HW9XEff4S1q2sMwUWWcp1g4b5CogcXszpzXGCxois4jzB23pianRUzM95JgRK25JFeapYuwA1Y4TsqanCS",
  "key22": "5oKrxet3pf3e4DucokBb83TiD6j2QHBBkSnKzwZmt4LTixUYyzTy9Xwe67Qh4pkRxHpENu8tUM6cWsfJnSswYwgK",
  "key23": "4VCP3ChD3NQieX3p6Xrn655R8WZf8qKW9QZxtzFQHq57s6q7EER2acfEQpRYRnbuWCfM1ohuhvZXCsvJC51bk9nH",
  "key24": "3yhYjcMU3rjQeSGdoGbZo4wNcU1h1qXbJnBQ3WjfBkxJjwEdfkWiNmPKb52FrTHMQZVVqFqan35NMeY3HjFtUDL8",
  "key25": "581iPqNExqcB46PdiwJguPebbtDu7VgmhATxJi3CJHjSzV2foqjDcAxETAwpWMn7yzkD4XhefvHW6iEBywKp94Pv",
  "key26": "39wX4zKMdjHBWZBZHe7Unet47AbtyF3S43Db5betBPdLFdQfd28q7VBTo8h3VmYbdoztNTEaN5ZioqahzZZj46DX"
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
