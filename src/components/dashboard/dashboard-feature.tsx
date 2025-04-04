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
    "599j28Z8SnkRrcmzJQcSF7X7ZrJzYECQLtN64e44HMnpxBf2fvovviN1Yx5G1RyRz9P92KV39TCZfqkjRpyn469s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JVYhudHiq524m3MKbnQXenTjzn2CYffwd82N7FnPHTfAj6TiWgTYQnGEDWpexJr3ZBUqT9f4GCmvoRaXuvr9HtP",
  "key1": "2WezwUsFfg8F1B5svLwDLFW8e1V4USJuYz1QoPHCm8v31mZTxBpe9YhXAX4WV7UfbucNbmeqwhgjwXtfkQ3t5KQT",
  "key2": "51ajZEEY9KhkCxChhErHqT7FSdcN5RawioNnC5Swhso6YHVi17gYMfqS6s7GQNVKwpvm63RyZMrpdXSk5oftAMVW",
  "key3": "5pGu91AzYFnEms7qMKdi5U3UHRDWuWzdgMPnVN5Pc6pdaqzdggmDWfgJVUnVB5ujUpRjZeLUNjg4d7Q3UU9VQFg",
  "key4": "5kJeDyZCfgi4vPiJpGXvWBs72SihEbnCkpL1UakpjzSd3XETmnYbK2JkxrNXtENofovjyzy1TziS1Dgcbnwq74XX",
  "key5": "2N2nTsfMCu5dh2pmAW5z6PDHFzk93YpxajZzTVQomGqAm3sfNzaLoaiEFPJRsMi1rVpCN6rDkY7igzyetAgqkuyF",
  "key6": "5Gf5yUnPocDnPLqRVcdojv52gzFMjCPdd31aWqGWngxTvkzVCjxaVy23smPj7s3XGNB3Coj1ZJCmDXJmB4ff23gC",
  "key7": "3AzrnVbbu3nu6VP4foshRyQDP3j6GusubqN1hG7pZU4LUqXibkaiJXqgsGCs56tTJwzob6DdeBxWTshpGnP7f1G9",
  "key8": "4cQHrzHYL2HTGUFuAck8yoa21W71B1ezryC4rBxsvARy5AC5R6CopzAxAKYDoHFCkSKfHtQqahwaeGMDwBTBggGr",
  "key9": "4yRvrQsP89xPrBkWrV6NxUYgTASH33gMtVbCWTBxAzLiuJayGYupEUZNqScE7d7ogp3Y9n5jB5taTgwLuedm8J8v",
  "key10": "5pxHSHNmhn5opcxzxZSkRpfbnYEhA2F1gj6UP6oweSVoYzBUD7Mmvq1kB6USs8GE74WaQGQeJzHGHPWWEWs58qv6",
  "key11": "654dPohtu9SWNPDqPe2BfwayorBJo8md7xVbzUrW6XkWGeRhSzx2xb69dxn54MUyzJpGwHKjRLV2HNS7ZWGXBsvg",
  "key12": "2bijRuicw6ZouJtYdVPViAh2verYz1Cn5Edufbcd18gv2roHcyCrsJnFPF3CoLXJxrW6evGUqKboAGwgaiN6zpDw",
  "key13": "4g41GwEXFNUD8Uy2hrTsxWMiU5dBwCi9b4bZcwKJbZMDjXA7kgpZ3kETsjMacmtPFYmRzxb1XTbG3RFLvFbEMBBG",
  "key14": "4iW9AGaFYAr7gbpUgvFhGug6zRUjsZ36NNLVmamdDUWRLyKnhHe3rLzm8YFFu76QVTUFZzfo9tQPnRwNpVMTR55n",
  "key15": "1FFK6F6evHmaCVVUVQsnxZ651mG73nnsc2UwfYyu89mnBPC32zsQWpQSU8eReefDJUoNJDXcsichpv9h5MJqqLc",
  "key16": "5G2mZRZ9anqxn3KPrVyZrTP755FUxNdG6CfkHSzvXAnfR8CYryxu5qN7gDXzwiRgXUyobeSa8zRsdgAo3bX4mNfB",
  "key17": "5XCJgMSAUYLEnjmAJNNXe14D8fp3Lt95Bep5xZPo4YTtQReW1bMaUDSGnB33BjmtuTpkJpSyhimL55wQa221Rn87",
  "key18": "5BC3gTMPUfVf2MSieARHbXtu4pmgjdKseP9jkftnBTokLN6ao73w4sCrPSnjZ58zJBFUqwqmDmDQNLWo6HN3Emr5",
  "key19": "3JFpqPnnMtbZBGAVK5XCMfqrbxHgKPj3RCgFXBaHuMWyzESaCbX5pmHAvHysWnHVjf1cDFAjCsqK1ZQZ6tCwuVeT",
  "key20": "3YwSLG9Hc7X8dj61EjCU99Qn7idneH3dhG2zykQE3WQgzC5iU2AjwFhDmbaQgdpZ633hsrzSToAU2egQgG3G5jUE",
  "key21": "FhG9UXUkkUHPoyeGJHpGUh2dsUPom2CDDUw1hbeuuVtcZ5bWXRq1qNaNMEeqgfpdcDGJD6rTjs5rL5dSW2pYUFx",
  "key22": "3e8TgCJkNHvtDdWzBjZr5pH1tWdtEoiYXTgcPY91ZJ3Hq79tRV5oU6jQy6LXLmGthSujxDRC6Kehu6hpBrGLs9KK",
  "key23": "5XNJgctDKo1XpeSRKJDpZK6vhez2J65GHbUsYMowCCaNnUmsPXr9RbkfjrVCHeqnvWJtnSWh9DcVt32vAPBgrpmQ",
  "key24": "328n3uPCDvUjviGkHUgxGZUn7i3X169jKgRPcxga2M3LpeLvtDVHmHDHxrXgPQCQEuZ4nzLpg2q8HDQjr2ReZ3ju"
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
