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
    "QaUg5XkHHSkBEMhvQHMqBGxviMwDLRE7ARKaBr3b6WAcz3wZU4BskGN2J5etTMUCywnUyWFWxyiUEvrN3CUgPX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eJZ32JK2SySjN8UmS6o2LrsU2bv9r2rB54ttP9HJ8VQr69SF6RDJdHGQv7VMR7ZFGEcRYD6GH9g5Vd97JFoh84P",
  "key1": "3BbZSx8qX7kd3WyxSD25QabosgpnkdqHtRmkA48w2hgdntTf2wZfF6pMb4mUemU2aFukC2LEcJs3W9D6nz1kHUoD",
  "key2": "35FAJu5MLvHRv7pAu9STnRWt5k9XSiXq4TBiYPQzMP5K9mhCmt4QqUFta1zSsG8ENxQw564BmeNkojNoZrsEP9eh",
  "key3": "2vkQkY4s9ke79X6qBnfz3WmbHPqzAgmx72uknufPXkuDnhR6QVuvmfwZsHbNyCYNdWxuJiHq8obVap8zoYZYpdJh",
  "key4": "4fbdcdNchxVmU47PwKwkzpf9xGWXDjST9F5FbECYbviHca3QKLNctpGVsFzQ2jfZfF7UCwFyNa8QAAaTjXm54SF1",
  "key5": "3uuY5oz79WL9mgvc5tYDdcV8XrDwPDEDaxgXD9K3m9B2swT5tdVNVoDjMMCXLtr1sdevL8quN4ynUG42neJibcvB",
  "key6": "3xg87PRdtfinHDDUi4VdAU9UJhRefEP5h8myA8sGD4FhZASwB2tB3xsnYVgtS2hQWLV7cUv6Mn7CS9gkSXrK7eJw",
  "key7": "5hytUF1p8faBkj9EZHphPvKdXuxpL5L3cpRxGDQPKxSbFy7jPh6R1qEdWc3nv43B6UV2YvkNT8xpt6RHqSHD5HAB",
  "key8": "26pSEsmYr4cXaGsXYFwjfCUFTDcW1dqH5FvRQuVtWocnjRF4cP92ZAWm8MBD8phyYHFmxSzy4DvpdvFinXBYtEtu",
  "key9": "2XSoeoicDum2heRqMyUo9RAVTgmqQ8b4AoWrr1SPiUthAy4tsGxTTyVfCsouSgojQ2xHGNaZty4J8pE5bXYsX6ns",
  "key10": "5SM1QYMqP2oFKpHiYrCxNvCLdrPtN2KsphZqH67oFjvjpuZ5QTYHwycAowj67t7Lrd8YhT6u4vw5EqKD4jYepJwe",
  "key11": "617dRuTkNThCf2NWCwdjHhv9DXpqdSnMQ28ZHTeg3rYiZfed2hCbyCvcC6QdhEZta972NtFkwd1GFQpsrAUpwQVH",
  "key12": "CmC3Y4JRx4V7qYBTtJfWLRRrgDHuGfqxxzkmh1Z8fhFyD1ReYPzuDBSGofHWxB98zokyDtKQkeB42ZYPpv9bz2L",
  "key13": "3jv892rL3iCEitLFPDK6xcGQrzED1BQWKfFd3pgx1TpFBB4Q9u9iF3p2bcfyNztF4HpAnBRLQTB9i3d4iiTqnQpZ",
  "key14": "53XzYWFsnQUMdQnHgtVvd6Sf33sYtZw193EN7KQMqUMeF6htWMh4sVgS8uAq2f5q1qBojbNyrfLEEcH5memxzKqh",
  "key15": "2Sc4bZHQ3uoiE2KMxbgqEWN3MbveZ3QJ8sUrzhLjeEQUm1MVUgicZaBonPPZp2q7TMY7iKYPkD4mXTvPaeQTQfHs",
  "key16": "WvS5PUR6q9cH1YSvVxQEA3czjuP37JESDCaQdkoCvRkhoKhSfdkWTG25QGRoCKswEvB1Ugj2wADjM91a3MfYCYp",
  "key17": "66rYXfKzvArcDpT42PYxHLtMQQY1Uj9UTi38XsNvA6P5WpumNz4g6W7zc92cq15svBHPyc5QfDdwJ1rdvLbWim5Z",
  "key18": "3QzaBhBZc4eBKqbf6RqG8qwEvQd5qqpebxs7AboufKbXyyVGtYAPJxprQUGRqXYTmJEitXkRCyRm89aM8emNXHyd",
  "key19": "3RkaSyp5sC7SPVZQkMB9vcNHnc5xMsqvcJBgafkVo6YbHUDzAqXTisByxkTGAosvtanSZnFXgAk3Q6oWwWWVqLkF",
  "key20": "214Rg8Lo1cLfMP5mUFBEMNgRVRZ7N4FrXaC3WNwwXG1JXzUG1K36XHSuhC1bQ1f6Q79PpcKWB2sKuhymb5RAgKau",
  "key21": "3ezXKh2dGSDKx3oJMg2U7pwNnhgpAZ2fxFdDrAgWRaaB1ESHXEQ2HZwPFALJVV3FvFsF7MsSRixPv93ntMWDsSPo",
  "key22": "5BVdhkThdS6tMwxPz2vCTENvVLo2qFXYQ7X433WYxSkjXc3o6hPtq99AnCq4HWsNssDzsD3NtQ32Skd3BSTptY4L",
  "key23": "49nd6YXRpTNwN81Ka8sr6N7Nc6YePFrr3b7nVZrVzoeL9TwVKMLkCJo5VpvTSnvn2gY4rmGEKxsg5x4KahGhELJz",
  "key24": "4Z7v9dGkZrztDyvPSiHRjaX5FKBwscWvapvy5WuJCQTpXRPiXBw9hcHDHvgj4BzxfyJhW8fGBFxyUBiyPddiBAEB"
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
