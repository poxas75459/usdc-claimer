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
    "2E8qHM7dmFvLu6Yw2ZveaWWaYjYi4zuow4AFi2MRanAAtmhYr1pfYEMSnXB8ZutjrdUNEkrtLNMcrAyvngEXB93n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y7WKM4vbnVy6M6DvTrTWfiAQJHzXX1arZKfu5hgWkvHKbLqgWVn3DtVLQrY8hUtLheHwqX5VknUidEBx1AeyyYg",
  "key1": "2xs78r9wYYt7QgfXbrA6jtgqGBvY44H9rYkx7dSQmecogvc4AZSDzMdKGxdZ1g3FiPKPTnm1FPJKERaeMtgpz43X",
  "key2": "5ZB5oes77Hw9xTVecDWiQvXVegXXQW5vNXvJKrfEHXHKfYcYh8UTqh2pk5uk1QHe7kgbqNpsQ8vevtLnm8tUTRyH",
  "key3": "2cwnBMwG2XCvA5cGQVKhhhftGCfVf7zRi6QKCDPWQLcY8zSTrWkoED38DdyY2MxsjtZi25zJzaP6Jnkoe2YgvBvk",
  "key4": "53nVMSDQARLW7pfMTkAWbYyfRC9TnAPWnpbpMqCthWYYZbg7naKPKDb4CjxPWMm2Ry4C1PXBPfxP6YsRyonCS29A",
  "key5": "5Zk8V2uu42heSdopV95qwthVQ5hezsyucVndqrCBUbAdqGevwUe1kXjdCWXHwdfpDK7fNfTNN1wYQFVQu7Snwcqp",
  "key6": "3EHg4E6GtJ2oUHnGDgP9cowwfmNGS9L97kQLRADc3Bcno7PLRAdJHyCQGxrMySref8ikMkkHCx8nXsrQQpuecPu8",
  "key7": "5zeVwsX8Si9hw4KxNTz8NwNGv4CndLFeC7rDzzMezhmbmpRmuzvXQVJZaazqJn2teZqfkPD5ZcG16QSB3ikvQqy6",
  "key8": "5dWFasU8yCSjKrHQGgsdiMDdJd9xc8rHKHH1g5aKvuciY5R2U4Q81dSCc7gq6PJPQ9f2m6Zo2YbfbMKYraBQBrVc",
  "key9": "2yBTxAZqa4jM9gGvMokE2C69EaDtqiv31y3EF3zHJw2Egn9ZwpkVmNqrZWvQ5VRCWiC9aUxybmDaCkRDEmAgFMVD",
  "key10": "u6TED1EEzr7e4wS4eNjAzAQtj3Eb7PtQo9vwE7HAbRrMZb3YcZp8HGKpowePjB5JvgBktL5ZQLVhtexcApQ13CV",
  "key11": "4Q2QhtmYb2qeKXR7eBZpkvF1rso3snR9g2U9W3LZmuCBGi5wD3GpmmXBeCAkGGrKCwfGYL7td3rDT6XABmbj47Ft",
  "key12": "2aBXHe7ZDkRufZibCPB2ADu2CxNj2hnrMeizuNU45AVAUXCSRQfsTEggtAC3P59p8Upb9KGS9noCkWXERybdLStE",
  "key13": "2wkMbwcPMAEewWq9tJWn1DLZnMe7Sbhc5Zed2KfW1nQvAVGV9CpWcZtXEFZ7p16jZ7zm9rbitR8MituYqejWq3NM",
  "key14": "2Cc5wrisTZBx2krVe7h7yoqQGtj3eKYLZRFxfTZZgBMowdbBh3C92wWChGsgc5JzAHHGhDu6e7VrhCVZkPvp3rmb",
  "key15": "2Hg21JrC8EfzuYhQFYqofPCXRy8i9hytmX36jZR2HskZUjuqT3Mp5Ed5RW19MNv83t2KeyJZiSEve5kxpNN9Qunv",
  "key16": "387nruN5oEouRu3x5fgVJTiGp9CYvNPG6A63ZkftjHNxxzbbWFZcm2e9STDco9M9wA7rzvvNRMbvqHBSEJ5YM5su",
  "key17": "2w1cdrRcX8e5xW7aJuDYZxTVZbX349g78HjfABoAnkj46dZ6oCsT1Z2eeoDoAWdFmfD59hCxxopMt4prTrKatxWQ",
  "key18": "5E5H57tvqazLFHHmjBUhyPPT1f7cfLGYeezRCBdc6pCJepAs829SQE7Dfrno3MK1WHkt1XMUfEmiseeZ57QMnfTG",
  "key19": "3ks2Buuuu1vNZasbr5Hq6n9R41DyYmCAhAMCA9PwA6vKiVv8pVCdGMboDBH9MucUWVQCaGx59bYdxeCZqRq4TZCM",
  "key20": "3WEhzpMk1MY9DDxq6kaSbynr8DguNwZn8eivxcdfxUiAyTC45T7tq4ePvNDynvQyndzbJJfBYk8grNWoUbb7FsWn",
  "key21": "5PJm6RXSn2g1LbVQ6XcpGGq7PgXVqHT1hLCWDdU1Nqn3cppXDZ7HvsVwpQJ2MZwmhkTdLyPd1Zwo1ZmCcGqG4n6Y",
  "key22": "5pQ6BDSL3D5H8gUXyTN3q8dvkbUYqJ4SYRKHL2QKWV6SKyj5djRRMunxSiJmJJd51fHEwEaC2Dm9esdUAiCkykZc",
  "key23": "5azgBmfyrLjfxYdRNaAhh79S97gJov4kEdfuV8u6fLfBhNCHtJHRPCqmxWj3TxoET16xYqyTSG4U7PXdmQficmcF",
  "key24": "2kbWAiKM7F5R35RqZhAcvGFS9MqdcQMVzTWSTXFL3cx81SQuY4HDUZnSiQopH8t1ZToRQuAZ21SxbkudVPecq5QP"
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
