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
    "31X2TAETMjv9dFh5DGgBjFs8vLUVmfkAVbvXBFD8nzHqQ1yFAYhtfE61XoPuFNvZN6jWsMQBxdkm5Vmcwa2bPj7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z3fY6tQEjK3QYbj5L6M5ndYPxzJqGXT3iBoZXn9uqFNde4BY4vyqfcTjnPeiAMzg3he5uAUfsTxejXtUFJcAE2G",
  "key1": "4dmsVnTJp2rCadb7xptvhkKGqcQHvempArYDKM5Mj2ByMEidmdq7wY68FAR5LuxPvgjcHdDAue2rLS4vNMzByYhC",
  "key2": "bAk2bybXf5VXjRiQJuS3UhY1yUShK9Huh9qbXsze5oNCUgeh4oYErDBbBb5SNn1KteiqaCRLWtgqg4j5ETuaChe",
  "key3": "2PfpcToJTty7zQqF62fYAQcnS5iR5d2D1AMLPG5UDZZZWSsV6no5gBVaUgfpxwh52eEvpudUi9koM78LRBhAWoLh",
  "key4": "2Fghsq3sHeLaq3kLzJqCh7cnkxUcqiGXjrCfoZZjykmMdFY5ridtebDp2utUGVmVWZYHeLwrcvXZMYsk5WwvKRA3",
  "key5": "37MhHjdi2QgYtVZQAhFwmfgXuZfq6UawnbAqXqPcTQFHSwj1foWvMxyS1ZaSkGC6VESEGz2kNjheKhmFtL2AA2Fk",
  "key6": "2xGzaCw38RSomXLnfQ9ikXuRjRPG3jzk2q8XG7wGiz7Z5VkvdZtyURHvbjED6kr1hybfDmoG3p9rhWgb1GDX837n",
  "key7": "GwDE1Dc1PBQVvjNonoWRfoCEG8k9Xt2suEmuX2hBoyxSmvPXiySbUjNxG9nzbQni7hCDPCfoK9xD8i7nTJ7jyLX",
  "key8": "2NQsipyEESpHtesi26SjzqjNsE51KQPUzgdC5sBfk8YczVa7tfoG31ba7CUxfEfH4vhrf2bXLn2oah8PijTQ6a9p",
  "key9": "5ZRNNuaUzpzUFRcCfh4Ab8cREm76nWP4XHnSJmeMn6wLEWDPpN7YWrLvQAp9LJGbo4NAGYfz32yd8RmwyT8JVXyx",
  "key10": "B9vkVKMHUmbCWz7Zxg9UoBqvCkkLeZgHwhLKKL5yb3jjgY3FV45SdBTkujrAgEiVbHe2tZFJr7BE41ebQB7Jb7j",
  "key11": "2yVvh3rxfXqmpYCpAcBMzs8sNgPcBw57TComqviHQ8Jg22yuuWvZKa1u6pvkNqxjm7uNeXihMuVye5sZbQHpPTuM",
  "key12": "2BNViM99crU4Ne9wKFqdHh7VUnP58JHUxWWosZEnhVYd1236SepYxVDNvvKe7nuCZLyFPop241DiunTon9QY8Wkv",
  "key13": "5Z6Utpfxfae8adf3tu9W8KvekEABBheHryeTBfkfA3AgXeaauU16MP9HfYpKatXumVh8DSRQJ5DkaEaV1RnJsNjU",
  "key14": "3T9PH8HZ7hadRpawKSefPmCrZEVWYKr5e5vUsf5Q8ijqGGRAXwZ4PedNr8LwR5d8iCNQrn3BsBoCLF1xTsdtRDB7",
  "key15": "3zyziMzTmp34bZuXQRkJ7b3bTPbdHMASwvZnoNeWp1RHJX513NtCz3HvUEbrUXn4PXs3FenMj6vmHQdLytjb6EAX",
  "key16": "3V7T27HwgHAFsH9FyxZkEsjGNSUeeqFTrrDm8PiRfWBwmqXBnCZVhrXQ5KnFjfTeZroLVWke4NVTs2HzSbERM2iB",
  "key17": "26eqRKkMyDHJiLQ9xdFEvGobXShH6aGWmTCBtvB2GLM9r929BLCLDV1STkUuxzxbTY3ndQCxX44VjabwEpHEiFBp",
  "key18": "5EhsBiahYWCnqWexS82JSJq6mgW4Te4obEhJMWUTEqj1R84uoeW8c9RV7FEz9g99BCP4AWSADAn9ubhkvtgZwCXC",
  "key19": "5eff2mJAjRbYZhfrokRoRkT1uYUtBWZpP2DApLqodZP7sZPwkKayc6q8QQVRzcWvNERbW7Cf8hqwZPv2R6aGmZPV",
  "key20": "3KicKbvUQRgFesnG5UZX5WaWT25f5LZpRrgNRmPuR7djVBqxWwBNkBn5nPjj7FaJQG6qHrGdd81utAgwmFqsuWRE",
  "key21": "3sJWcUsawxevCpZV9y9q1qrX4KSbGfTYW6ux6hqca6dy2fCbwVUp2PfvyHWt2LbvmzS7RwzA1fnJehm6LyRr8Mww",
  "key22": "4NkFyTWAEmbutpQBQasKFE69tk1FYxkk8C2EShLbXdszcKa2VhJFXF61XBgJAPUNazLiqn3V88n4zwVR1XpnBqe8",
  "key23": "2167LPiMXPKEWjLiL7oPXwxVi661aVaWNdmmDQ6FU3Guy2W2kq4n4jUHapYSXHLMfFE1QVszgkSPeDKk5qo9QhTF",
  "key24": "5ChpMQ8YFyiZ2GzkNVxrzqv9Q52D7vp4j1BSxfZzyxtm5tRmQ2oaFLgFn1qXYSC5jxhY2BMhYqxP7bQ7Pdtom622",
  "key25": "4EayJJ3tMT56FycE5wQcE1gAZgCUu7Qa3tMeHGnQjEMZe4MqsygVc5XkZ9MyCctHjEo8ymdKzCgU3mCaoQg1oUAD",
  "key26": "3Hpv7W2uHzYYYXH8WryHLa9seATsdGV3NcTv9QmTDZZhNjjh84v9GtMpCfrpSfht8uCzMdCbWsrtLCmtiwWeu9Sy",
  "key27": "oVUy5oxrebB8WY5bFJ1yMh1cBXbDNxqfRHU6CDhhEKJdKzWsTGpwQbHZCsg57PejPxArUsrA8WAoTCmCXxixuDM",
  "key28": "fxnMPEjC4Cxex5TYhAAP8r8cUPxihP4DZVQRgrBvo5wBr4Rzx6XAymvwYN7QWWxh9RSRLTsiAijXsqqW7oQe7wA",
  "key29": "33gmCKEyXHW9pYk9GoTKPYQXwxTXaPm3p3zSze8rrJmREmfzZm3dscPZCjU8yi3gxyw4zif3RQ7PDXPEoJ1MjqhT",
  "key30": "4meWeSWRJE9jUA7a2PCW9d8YS6fT1Ahc7J9wsqFi8f4DdXhPHJL7dVpbfvRphVPvShSEpuJfdQd5fhBdV5QtXr52",
  "key31": "57gfjoKuTN7sTFPcTDdVnX6BAsAfgSFcwqdCFpzVem26XxN6ZvG4myGB7mJXN8BeW2SqeuvK7xYWZR3UGp1KLSu1"
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
