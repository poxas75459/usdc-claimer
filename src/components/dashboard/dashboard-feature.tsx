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
    "2y1NVUoQ9arMwY4esmBApwZzcEHQUc4fJRpwQBdSaMfZiFkVVV36ztiBoPE1RseahdsC9SmGSTbMDxp3DBv7Bq1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LR1CF1vyEydnUvWPw3pLBaW7hJvxeN2ZxcYMJZURhT299a52UJSLnp8zZ5QZ3fikEpTHqmLC29aE4LExXEazf7L",
  "key1": "2dQi916PfARo7zN9JPLcuFTpHMrhV8tMkmEXWFKtM5LhpkUxyapwpMHPB8a4s5NhbAcxpyBPzX1rgYBZJFzs8PoM",
  "key2": "kk43rfJA5PZdNfUiyBS24HjiZEokzM3PfHqarHYYvDvJUoB6BLEmajiP7dwbCExgFPAWJ1FZvezeWfr7uBVmZd6",
  "key3": "4KyAAuSC58P3wmp3jHq9NPE1AAuokkEETzxnucenqWWFBvQ1fcLCYcfNxPqXT7gjYaEYTN4fpzVkSb7nxjgvgraX",
  "key4": "jPBvmP3WfZ4mMdMRb3mqJrHkBq6XKWEf1fWgDwJeDx261DWzTpyV6cQwkezjwizxgini4dxuF7FjQZyzxhY3nnH",
  "key5": "3LdUUXnhRnu2pofC6wD63gQhW334Vb4LbpJ3drvWRtV4r3yXj5Grggi6cG9QBSkxmu2muPD2CB4ALobMAuxBbgZi",
  "key6": "4QKGHghyXN8uV38rvtmsb3h6gcpFxyYtDb9Xi25Jv4WzWPNPu8QpNX3PupJwGDbLPksykqn7Bz8sTj3nUSDUyeZY",
  "key7": "3tMcBTRkwkhhZmPAgBpWU5LwkAoQurzAYXzrgSxz274GrmNexNokgWFGHyffbUVHuRv2XaqDun7is3pdQ47qAkXi",
  "key8": "3UWL1qoN6P5YXwXuQXQsrZ41e3ozvC56sDockxz8sy5QtRVjQb8GVPx5FvyQ5pbQFsfTbtjan5Aqbt15obiZxPtJ",
  "key9": "MDzesGBUQvaWXmtyj2Tr9gXVuj61Nix1LNkL1VXwLjTW5G1Sp6d7VcJVS9uNkGtQLpgx5q2Csgvx6UvF9MkUBGu",
  "key10": "2ZWziC2eFxk6sJq3XKGiKerrkJRoMLJhtD1RqmeoB5K38ZJBLxcUubNggHeYBpBuFjbA7wqg189XhYiY5c93Mb5p",
  "key11": "3XMKwdGaUKyHX6cLPsLmA84eCU6uFM85A8XX7TASmYuE7B8M2q9gacBHFjDdy5bF1Sja5yErVZBUjvdcveZKcb7g",
  "key12": "fSLSnqAMSV5nRkwU8EsutusnMpZcqECoKBUmPBsj7qXT2vctFjvXbBqcgQ3rrGoj1uBkdmADFpU7a7kKUWkfDVm",
  "key13": "Y38fJtU3GhX9D5m1iuZe87gLw8nQVRLPnnYM52GW6cB3nDd8SMk34wNQd7sC9KB1vFGq7bUrWFwGg96KunkLvGx",
  "key14": "yDuHUdAsFL2hMdm4QkEyu4hD5K2YyQ4GWBK4fK8FzPVqWTzqGDY3yjzwiRqzbzQBLk7PQHf5pC3Xvrk3So8i1kj",
  "key15": "5q6PYWjQ3obmUDcCcEXzMUzoJ16rEGTTbZbsPw5iY2bt8CoY9WUgnPJJQTXZrZcZh6VKt8qF72Rjb1151z8rEHmg",
  "key16": "4kTsm6RuHUwXNaGKc2L6xh1eTSgcLfLc4ouCB1mTuqdAanCQo1k5cjwx1q9qoMP2FjZTXAPbrajdZw5N5kzzH4H8",
  "key17": "5sdxgyB1Q4c9d8QLeFwmwDMSrUV7wpPjFwA4HgsfcutHN1FeLS9T7KpHnHBapWbb2bYMERGCKnk2CC9Ybpg331Tc",
  "key18": "4xnEqdZYaRYJGt932uoRx6ezakGgFdRJsebpP3UqyLQ5RRbCQhKLfWTJRuX7migjYghTaPALRYt6LFpY6pCNqFmj",
  "key19": "JvSd61xnwSJAVQ7uL4TSjCK3h6HeigCG4n5Kpm5EGnBxsnJykCaKpmXaAnKQ5FJHsUuX7FBhKBct1fstBMFsKNA",
  "key20": "3s5Xc3s1jhuStWm1n6NzZ9DwEuDbohhKnj9No24RrkhwwSEJsKh8F2cy8MkVJ4q4uSYo1LC1banBmnfPTUXG7LSo",
  "key21": "2y1kjwZqLPDrkpvESvST8zmkjyTbVHdxAKTRpKny6F8zt47gHKLEfLLdXiemgdEumCZtzbpS5RDUZtMPGpoaJRSX",
  "key22": "4hNVpbAgX1jZrKK5vBiR6d5FzJVThprUvejChDyvWC6YYDgJRNJKpHcJpWTz64JzsTdERgS5hQ1jfFujzK7codAU",
  "key23": "5J3FqGFFxE3kE64m31Bp7onADkoVHzFUXB5bfC4xaJiJma6YJMMu4FboXzR9v1rUk8vtAQ9ncEHSdFYEgmpmvryY",
  "key24": "2bp1wLuModzWGowDvD9aFiZHgcMiY14pmggsX354mamGoDynNzwcP55vD3S2VHnXnTczAGdg2hFPsUy8xNLo67hv",
  "key25": "PJGzbVy7t9A2RNeHwCUJeqqjT6KCuqDkMU14A2VuekWyTbhJp3SQuwrdigjQV44n8pBTRAiootMsgpWFjotJ4CJ",
  "key26": "51bK547B7ZxZ3dN4ASXxia2MkvJHqAZ2r1j3sT2XykBXYjuRHy9VXHT9ZQjWcoYTGVVpRPGzQcQNQ8uuqap16Y1A"
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
