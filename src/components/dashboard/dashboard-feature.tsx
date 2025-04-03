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
    "5YNFPqAq7WD8KPcDT5u5ocQ2E6HEW5925Mo3TJKCJDqSnJeNr77dTrMS5rn3hPSuA9w6zuUjNYSFFCaBZ2WBrD8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VsHFGqvBYoKurzYT33kArAq3SRzrBbBTqp2GYJdBviBiJo5bN9uFHYbN6xgbuMfyX7rwT3KqZCBKDK4JpZdC9eo",
  "key1": "2EMeG349Se42BEq4cvXaWuUEYQGxBmC4TEDYH335mLAziETrjgW6iCUizyYFtHwg8hoAASQM6Cd49EfWiySterHq",
  "key2": "GJgJ19qdefgUhwiQBztJJDhjn69krgZfgqnvL8BtHj28y1HeVfEvxsUyCudrEqbJFokbdw3P9AfixBmfcMzxc5k",
  "key3": "H7bUwHh9psjgcT2hBmMMt2PDpKrxUtmi2dS3mFWTjRaZo7y5q6nuDejfxfGDTzj8xGXffqTVnzx3a64rWk1gQdY",
  "key4": "4Cs8rkv5SF8aM5GVSjegySVrocnJYTjVZXPjKcdtnjyf2GfGmoPmfH1S2UyAmPvUYKJfChrUW9Cup4EpUAHae553",
  "key5": "3iEEMsAzkXSotLk7aFa1ZfqhCet8e7jUQm4ybFrDNn34xX4qgobQsA8VAiJuzeKMjDYWZCj5wQCDgvzkVEvhBZrs",
  "key6": "4GUCJXhDcBpLV33EAYfutrb3KV3PzeTCXF9yjQ7Bd4JGaWeS4JJRH9UaDnzQuHnG2rY51nrVE9WMAnYGNBDv8F27",
  "key7": "3eodN4RnTAoqkxWwFnjt3H89RfnbX4xpSH1Tz58rkGSbQZAX6vnjD72VNQHk2WvuGg15LMcRvkjaNfM3pguNuQq2",
  "key8": "nMYpWJ6r9ADMQKoNjjCXnVhSRxbzcy5tLHNU5ARQ9Rtbq3RA3fJqgXhUNhEhZMDC5YekH9dGWdhM1YAPXME8cEu",
  "key9": "27B84So4wBTxgTLLLjHfZeeXthjPvangBvb5UkUY9JJ6HauhB8ejhWuVoYRPQExgQGiiCZen6C9ihv2chssAWCov",
  "key10": "5hE4u9wpreCwaVzXRSYw3PCYHA25Yyneskxugz5RrAmn6awVuMQjoWZeAPYQtDzxshdLtytt1vTjX1ZEaDTV9axw",
  "key11": "2S2gxKyPkwQ6b7W6fQ9mduy5AM6nYJnBeBcMQkXsua63mrXhYVD8zv5FoHjLzWqwJ4cSBcY2tCXWcdiUXzeU2dH3",
  "key12": "5ETwfKUrUw6Rm7T8QthJr65UqTgvQaYRPaL1SQ73xeiFNb2jQMrn8yuMECm4ZzRE3MCFkNWWTf1GF1inG4c7MyTw",
  "key13": "mFB4VZpjnxUbe2hvc9Z9UCezLNtbeexoADe7eoWGkQedyeZ5TXHxxB7qrZycMhN7oi73HRmkonGJpCbwu3kMR1M",
  "key14": "2dmLzRUhcsiBKtEGzmqKdQU9sSCYWG4vqTBXVWfxemDnBdjfDYbSPnGMsz3rp1EasdxFZWhjAKzGGr6n8mPbXJbU",
  "key15": "4js6gC9oWvFCMK7NHGW86mA3Q3aUWWFETTmPz73nxAPwKFvq6HPZDkkmQMEQg18APeD3f1kZBFpLj3fMmY94wkwY",
  "key16": "5cyA6saHCVDAF8dMZznvkfRdoAgLz24oV6EZwouxBaxJAPYmPUERndGUupvzEnRANSakjUoDFDjsR7GLXgKxVaYz",
  "key17": "5smZVUtVTgzVmsK8X7hPsRUi65PYX7fKZ9zhxz3sAx2DXgMEh5RzdK713oo8WcD9BD2u6e78bzCnec6GebHd4hG1",
  "key18": "31LTcvYVNjLdb7jTn4zVNDuc6evztofLwuPo6iWTZsnN9uvWf2QyqD9F2AVjNDsSYUs8r2qXtQR7ehCdPZoNzZh9",
  "key19": "3qei4Py8vvY6oKULEVFZBV3Nt9gLbucML11E93YAnwiamV4wQLaCw1uLnMoUxezmbAVw59GPFk3QBKRz7Sj4savd",
  "key20": "5esa1FmAVnsgq4jqremFPADQmJkHqp1gJxK8RVwkGSTESiZ7kdAb6vAcPh2ziVGcUiVniCWcP1b31fQTSm2ndNdB",
  "key21": "3XEYycoW2WHngXTA1s9MQExhwcjPyDk95ADUJgmY1DexBwq5CeVBnxAgBxcWkTWj9Zbzvha76ZfCTgsoGTBrw7Ed",
  "key22": "26eJQhWk5zMFyhUZQvqv2dg9AyVCEiGRz9Xn89xPPY9vtU48i9RnQLyki2QmhdUvBBi7pHYQ6xZ14sDtrKcvFYGq",
  "key23": "616m4j1sCYgsuvnTovaQtJ6NYvvH7VjcHcQfLmiYVvW7jJMtGnoBsdciHqZrB9Cj1PXJW6cdPcjTdZ7CZ5zYfTYG",
  "key24": "4bdunap6E2XeGwBzjad7hdo9xi7JTvNTCHUawm7UKUGyMX5F7i79jb6ZQFaP6HSwSeH1z8d6iBdASAktnXqH5hxf",
  "key25": "51yB2BJxKVVg38i6vFAqF9zBBNEjnLNzmFLfydMyHy4ZPg5c8reFke4VpfWMkVZVLxpVkmPAGLS26Kawq7i1pjyX",
  "key26": "39NwVkaK1dqh6E5X25FeCPG33JxXz17wguB6nYMWTiicZ6NGRp84GjHkQB3rEbBRxcJv8D58HCb48hRcQeqwjEPN",
  "key27": "51DuTjLZgq89h9JuYu4R3i8hBTawQcu2HJkGvc4GrxEeANCqdCrYJgsN1KnxvshwAMdZgVieGccL5yEi7ubwQDLB",
  "key28": "4pQ1BevQqUV9yk6Pb58cJoFrLK6Y1GmnTY5bBCTN5qniEyD3rC3aw47fSTsYS2TnbDegFBeDQzxrqDLR12bQkka6",
  "key29": "4Qri6a2abngFLjq9nReHgvVYA55SXLDJrgNAQTp65sCxAHDk4cwk3nmEQUAhLjAGNVisqRkEA2NEVSBjgCnDftFH",
  "key30": "2UnPHnCQqNPPSywp2VBPAasDdHLvFY55bYMqiXUG4G8fte37NzcRfPy5y8M54dKHiqmqS5MKLZqWHEt9jG5xzf5A",
  "key31": "4suJMvdUK8eGUNsnEVaiu8x5VwNWvyUo6SPMFXN2BTUTg5z7RJJcL7XTeQNyeAqnHqQbnKY2REt3twesr2jhmruk",
  "key32": "2V4SzXafuUy7QtUSfbAXSuKPhwJrEbsTboqv23kmtSA87caVDMuLDSQoMqksisJvZZH2a3e8RT5xPYWVskxVH7gA",
  "key33": "3xWbdsCpaV9amriKLamotreAowRUyzkj5QY3nn7qESPdbF6nLTrVL2YSggTrg1mxZRgFLhhB2tEBMFMAURGV2ksK",
  "key34": "2QUriC12c8MBg7f268dwC6KMQJKtGQmmg6pBHrwKSnGLFHRD2gYi9rSTXquGUcbmy34BBVzu92R1U45Zs41YguUF"
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
