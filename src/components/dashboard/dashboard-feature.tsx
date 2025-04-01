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
    "3u6uXvmbP14Z21f3Xvdn6tg1Vye8ZL9nMn99f3C9Pfv8JeffJikk5LRPM5GcYsYcx3G9rGWRKLdKNKAJ3qPzBjZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wu67SZjREmeACzgfLmTo3aQwigySN8rDzyau5aFQQQVuBREGij4vq1yCUjDQekA5Pyqy3B8Y519VKUgX3C9oxct",
  "key1": "GFKkLibuvLy8LLwPTxyPZ2PUvebov5rspqGMtesUy2T4gxLeypsmRtFqDEyM8CqhXnBB2izEcdLEJ36EV1wRgky",
  "key2": "5563DbX4ijsdFbjpyJL9LFFrbV5W21Gvc2M4hzAtQSnn5QJyt8uAKD781kMGwqxB26JV3DA6MHPwiVCto9AkmWJM",
  "key3": "3T2RBFMWJ2jHSxWV7sk8tbvNw9WysteuREf74fma8GbVkgDUyuMvK38rFrjHVKQ35u5i1CxTASBk8uWDnRRzDY1B",
  "key4": "2hF8WjacMBnSSquQJjG3a5a4ywpQACcyoHVE6PzYnAY3ne2huc4s7vJGhf5GD1ZCuETfmzXSMZGs3RLh5myNy5vD",
  "key5": "2wWpftv6f293yp7sYyYT7L5rpJ2YkDy1xgXJ5FoCcUCydn98P5qivEnv31iLAH6xtUZqx5DaKhh2AiWvDiYWo966",
  "key6": "27HjPnWXqSiJe42viVv17xDUVv4A2wmbNWYQsybxhJoTL296baQMz6erdiFtbK3NURFnXakLUrmE9FPNwwHWLpGq",
  "key7": "3FtmJR6mmJVGJ5YaKSrchTM61qtZshCCmk1RqmagwVm5VPcjTvA1W2zmouomNPn6GZ3stJzG2QLoVbgWzMDg1YCz",
  "key8": "2JmgpU1t993vaj31C3rt5YCgxvCFhinxsnwTDEXjYhA8W3ed3GPFPkARe9w5ZQDxU4PRGDCcENUj6nM52icXtsTG",
  "key9": "2Vax3JLY3x6Jt9N3vPeff3BnUyn21tt2HYz8CtTctKP1gVr7g2f8E9VUxpNx9tdHaeU6iRsmULkJa4cNNoezJ9Km",
  "key10": "23RBDS9cRkVVV5F4op2ugS4fzbPM2z9ycHhHUhTRZaM3gLkPPoA1JaB4yWLyCPYVuxjAWAk3Qrx5KkaxT8ccREN9",
  "key11": "5krpqCdZkGq9WaDBo678E8TMxjGzMiGLKyw3YjdGdyQKrapPG7tkeJaEnkPcAZa2z6zbgkp97HLN2YRU6QgGyhcX",
  "key12": "5xr9mjkTequrVx9utdrfnhwaJv3bTmSUdXtxAfv1Ni9nRCGWcERha39Rt8CcS6fQxvDCYbT28ZFFX44jwxCr6r49",
  "key13": "2bhS9JxFrHamhyjoUgZBA5JLEhbWxNv88MiLCQNuaVQXLx7YviMUNXTQDBv7zc2ReFvCXYm3uWpxSGCi7F4E3pqR",
  "key14": "3CjooprUoiK2FPkT8Pywwwbydf6ghfwyFYDAiCgMRmpZpKUFoM3Lv71RJ7G5ac5uXSzqMjfTLoJkJdgQvimH6mD6",
  "key15": "3mJbQHVsKgJnB6mGUu1jyKRX53DBxKGSwiWcyZ6c8oiMMQXdrEpjKZcQCNE6pszD3UU1wYWJED2bZyXHoB7faCeA",
  "key16": "27ZHemCjwAzYVzsyPnTgYjbwLYEQQNMG6LuSQkaTkDvWMuZiZFmVCjmVAqPBNe78ZdQaa5pa5QzdXqwBhhiEDhex",
  "key17": "pUmKWCj1Um5B6djny88H4zyEQ7Q2JgUX3tT3iXMx4T4D7MkkVfGYd1JfMkkASoL2ZbXroQeZ6DR79oNCrwe8ViJ",
  "key18": "LnzK56amMgK5DS5kmb3eoXkDVbBWd1YwkCY3FURxUu9mK7krsHqZep39TmH3ybTFAEu8Kdov2akTCpDujk6v7W4",
  "key19": "PTdNE5jCDJL3XHM5iBgKqqQrwLGjZpFEzV4eGjBP39QzBHxt6VFd3L91kfZYaPC4JsfK2hqp3oaurFePYu98Ksq",
  "key20": "5xasAuTuaa3ykjV7UqmHXrJct9VJvJAF3cmoU7bTTx5KkfSBhbdg9cd18Z568EiZFzGxYvy1YK5CFH3wyFRic8ow",
  "key21": "5kKCaDqz3zCV2q76vV4KjCASXbuUuUP58bfagUGrnXupiGqWbbzXjcFrJjryTqeFk4ZpmJN9k7SckWcdk5yHftvG",
  "key22": "5gJKRj9n5JwP3HViqjEKy6sTJ1V6y2rG8act3aBvUbBcRB5wkqwHakHN3hTBYJAaKeH9AfMPxTi2vJm4CADAyPAo",
  "key23": "5BQtfMo3b8p8RD8mxrYADAaq1WqVwYvGsBNU76tZRgZG2bYYX7H8Wyve6S7VLfbx25vrd98HnwnfdBQLy69NYrKK",
  "key24": "64GxFY2RCbj1Xmazrbhxw8YUvUFravvFUeFeY8FK7JXE3ea2ZPQfVRrmU94PDdXYx1kQE8XfU8xCSZ4VFmtMZXin",
  "key25": "4SjNEKzqJjbFRCoQeHRt9BvVNzwgdefBHZEa2ksgPNR9mvpoLo41s3KmPHnZgXhxtJ6BxawmztsyegxDKcvg1poT"
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
