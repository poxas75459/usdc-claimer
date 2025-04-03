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
    "nL1Kfh7PLWuz9kJFT563z3SrjeAJa4bu93oVszDBTjkuWgeKEu3zXLfpKrbMmTcv8zKzDyCRxj97dvcjvxmNCWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pbgmHTyQAdb55xKirixVX1VwmnD8SS6DQ6K1PENH6jLv3dUw6uhpqpLn89ECmaeDJKrL7SWKh2SebXrfQmqwusL",
  "key1": "4KiE5HSJsuvx8AthVk5EnsZBFbHnR4gnaGbq3k4idKMMQL4fRxVX1Kb1pTzHLJuTeuncyLL3SytmA2DDVTsbTuUH",
  "key2": "oWjdfJtdfwA97mToLPRyi2XMFy8XvAYkiArrpLLgkXBQhoXUkRLyaoW4PWuapW4EAW4w9cgu34fGQx2oNsQECap",
  "key3": "3p9v7HphvedtFr15hSRxxQoF11pvUJRBaW5N2Rm4JvVVz8QHUSZrTzPgWNz97XaPWAJRNLiSzbCX46MKe6Fg6FF9",
  "key4": "5WdmnFHsAEvoZNh9VDHPnXMdhFmVeDcZ9vzWQp31LkG3ZBiHCMWfYxaKb7VWstL38rVioR8LQt2SaQQnFxPGZ8pL",
  "key5": "6132YK1NzvhYUHmL6iXoS13348xhVuw98yXeE1wy9zRRZ4RHU26NKBmiNy7zszaVZBhZ79taS84YML8Cw22uZBnT",
  "key6": "YDmPSpHkWEfov8L2ALdJoqE4oBM8WSCG2fsoU1dQypxPTfxNGSYaogcKmnFcHccoxNs59pJ2Ru45tcKhjyH7FGR",
  "key7": "57Nj8i17nnHGqTLVxXztMDamTA1YFG3Q4cVi6qbkgMKQ3quoixskMMFwKwGHqeKC6uVw5Krp29KWGDdckYymfHp9",
  "key8": "4n4hnzHkXWiu3ygVF3TyiZVMYBq2RKmomGHso76VSTc1icg2KsQWgtZwhg1YnYtYLXTUzxz4P9noZkpMJAxYwZ39",
  "key9": "2hjbVqKTsvjaB2gX5B5dc5g22kn1yRr1wYo4ndXe2cwEab6w61M7GVN7JjCSpg1ANCtVGo4RQj8awkrbTr2GSdBJ",
  "key10": "3yBms5AM5G2cH5bDyBGor3z2MkozXPX1BFW15iQs6HVvpnYeRpjy5Nq4BhmD4UkpP1G7Mc9bAqKDbWyS5o17uF7D",
  "key11": "pZkRNyAEoRKPM1GckVWHHbeTgrsiLoHkaiDKgF2ac151dNFjnVfFWP3CxaUvNGZmVyKxaTm6qA2tXLrKR9Dqfdt",
  "key12": "5kWnnvWutmrEfnYwHhM3rKHvjdssBdG5KkugWghGtH8QVttNUe4JjJMEuT8PGBGLxiWXXBLJmDubq61jKcCNveN",
  "key13": "3RUTV2CiKeC7st2aVrXMTEt9ev7LAEPAQiCYhWPQJAikHdXs9MMgD7qmi24BnRkaSn5zm4EY4D8chCo14ee86ZSK",
  "key14": "2XNputJAp1armYtm9kmBXCY4ua4gTLzTgRjrJWkYCiDUcZXrSjjcEmyVNRpappkQnAvfCb2NNXkpRi4PXDHPQyC2",
  "key15": "4aFreN15An5KgZ9JMNWaHxRusnpkp2PTdS8qK8hjTHpntdsVyDvPtJMMLkQd2pQ5rZfLeSqcMy3YXq4kehTCddGF",
  "key16": "4Md79hUdfJTeDcTs7b4xZHGYBPQRA1o5BozmkDbGPJuSHCtMxFUCPz27ziaRY9SSmf9xMpZK54bU7FBaMR41Ndj3",
  "key17": "4eUigSyK5BuneeaZ1dkR4bEnornSYNqXkjywy4tPoeszdtDPckRJMNppXRV5aVtmvcUuig6Rn2CtbyEHfWLjv9sp",
  "key18": "AqojC1gui1ceoqEhWzmQBhhfk5GdsFdvbuvUuK3CCR1fUGKZoQPqkCbR9hBro5r5LHxVavhQiJrjXqC2fwzoU2n",
  "key19": "4Nz4PgdymxQ8TxrWGznrXWZy8QpwaoGDgvNXkhBUeF39VrfsZSyeFgf1h4XrJrjqZkjhYtuhaWN29ZQX3KCZxbrX",
  "key20": "38JUd18uq5F1V8Q9pYRVg9arJ6z9zuL41uzH4h3ZJknCNAGJHKmCgHqJvNqQmqEdoynKsu22cudyrXBBPz3inTML",
  "key21": "SoKK5MtFcFaz2TNoKvJvDgwtWc8dMKBwvpjieTrntHuJqfQryKLHuWBGxQma4gYShRtVBG4v4cbDNqU3mHC5LAv",
  "key22": "4npztBAzocLX29zYMXDi97s8YwXj4RDDvJv5XksBidxmHxEdjmt6bDK9Ngye59E8FySSyCMPvnuyD2dnC2Mdzs6Q",
  "key23": "4D7n3kyS4BQFMxB7c7eRvaTiN7ftDYo8qgYsyyyzkFQBu7ERM5xYwmjBRQDawRy5acGQNiHpwDaua8PATDzvwFaX",
  "key24": "4XdnGDNry6qVo2jzBtQSZSRpgdmtS6o1tvPhXU4EDxfDT9SMabT4dwLRmf4vHEY7qkr9cGksmJ4eZ2QMVUfxxziz",
  "key25": "5F3jd1K2BxKfnow5tTgXWev1uCgtLrWaEhTFxXnJvSBPVc5ctV7Zm2gf3vLoQZXA72aPuDU4fpKSm4rxjZpvRMLt"
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
