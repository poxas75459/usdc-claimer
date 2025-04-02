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
    "JUy5VxR8WG6KymUcGM38t1Mhj5mnqhgV9mKftZ7LAVxhDJfaKepgnmBdJoS8m6XCwcfawiw3MuLx1daw1hgWSXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34V5davXi6ezVSdsgE45FF1iupxG9FKW5djvnvdm3UG51mvGggn6xEQMe5kpFG1zEt8EoeHCvGpuTzxPacBFeW3o",
  "key1": "5w14eJyz28yxtn4vyK5E14JZPteLR6KqUdh2SRB1o7mponn7dcTz5UwRjyffHJzLnpk5ECDa3dHHkrEvpk9nrwsx",
  "key2": "kXEY5MfRhFLtodzXPpY5JFyaU76XVRBXKg89XttueuJ9qEFfREhGrm4wqDSTKi991AVhzDWzNAUvW3wUUMdUf9F",
  "key3": "3CwsBBpVHo88MbHEKBcyvXrUGyTaPHZiSuGRBLeiGed8xXBXvRmA9bpxbS1uh1hcMq9eAZDvxVb9DDZeGeu7BmJo",
  "key4": "3dXPQYt67T7RrrXkquB3h9hr6Ni5wJmTbxYbMQKzB2kAWh75A3JF1gYie6dh3snXKuTRPHnY5j9YsgjVexW52JMo",
  "key5": "3k3X2xVc4u9MCnj4jK4QFqpDW2DKUA382hsy3yM3n38F8GzQfwRSr4UDvtGJmQ8FmLphjRwVn3q6RYzjM6cHpw8u",
  "key6": "4DxCztYn14KKT4TFE4QgzMPyBW32GEb8AQmcQccLc8Y4N3HDZvRU4Rgkj5fsjYJRgnmu5CMydbLLorVPDJQX5wPF",
  "key7": "54uBUKtngnJUYMrBYQxoDoi2sTg8GgYyCb5cefLV4vLywE5vxqQ6xwL24B4RfxehG8Ekt5VLVFZenbRTPhBvB4qs",
  "key8": "5yemSijmQs81DzFaC9WUvNuPUrSvihP9K15ttAPzo6mvuxmsYQTTvYsywSxipkH9tY1ov5qzwmpmhWKTrvMEg3hB",
  "key9": "232gW47DJvvKfk9ZSjwf3rEN5i9CLaQduNexJzRjq791zShesUZyqf4UFFQ8kv4xd5EhKrG9CDfJFb58Mw58vYak",
  "key10": "33YfM8Y6rqNXBs68w9XirNTEKBnddBLxiN4h78T67jGxzLWqcU74yH5DfVE8zQehYsW5YbvWkWgPpPZKRxdC7sYY",
  "key11": "5rtcGJD2bKJSVMsQ9HGJbtii9UhS7LXo8dWn3UNwSU8HfZeZPC7s1vrtEUfnWE4YT1nBzusYn6aaM6seanfheRc6",
  "key12": "DQ2YgdKpnd3MpuJhgSHc51UU7Br88zjnqGGGdrbodD3KspvfXANYnAm12TQ36Y9byNVV4usG4vbrqhak6gwW5va",
  "key13": "4CR7f5ygGXe3QNf6zr23jZGfrWNz4wdXVanXb4oEsD65btnez8xwL6WbuHx5AesDTFP4B6Qys5A6UpgHr87ZvRhQ",
  "key14": "2Btny2XkwgjrSoaFwtz4bHJCWChmbRLCsUbLkU2PFBp4MMBQuWzvhPEzhtXQASrchgEEFwXbGChx2b1k3sEoUy2c",
  "key15": "5YyJB5qRdPWY9DyevjHn5wtLnJ64AkJRpxm5r3oRid8LxUQDqnmTKsr3x6z1QGyXDuYoTyh8A9qQcLSbWsqFhNT9",
  "key16": "2Le2f5VVAC9G4ow9GgCH84HULU1BQfBXoLdyfDMywL6MwmYFjBS2fsFZkiPk7ibFD43rup1DqWCx4dHi8SxedZNb",
  "key17": "2LZrYmVBs6TRTUCzfTpPE95gZhTPRagnW34k8wTt1HoVuqg8ueoQoQ8FrrSDBhHYQLnj3Kw7ivmYCnif2jfGLZMY",
  "key18": "2BdMkGhD4K7z7DYFabLqTK9HYsdWYA4iJMCc1kmGSsTguC87LQgwGcWi8ynKC4guf3jCyBbnJPczBx292ZQXyLKR",
  "key19": "99ay1QFcuEpMTuqoPNV7RVs2ieuYr55P2uU2jbANdToTWSXxzCyA5imxJpgZMYiW6RZrz55zXEkHGNMfjfXSTnr",
  "key20": "58nBTKRcaXWD1UNxDyXPViELgond1wGTcfnTLfmoLx7om5BLxRNy8cSMvoh2u5XLdYK4vAP3QwLuA339vCq5CjEF",
  "key21": "37ZGfEZUVwZfVFpzSWnG543AEDAFwi5H1L4gjr9ht3qfttYdJ5phh2woJDhULG8er7S93ALySo8kQdprAomxvw4g",
  "key22": "484P2ektNGw2iuYtYK3NMRgDdr8SszvbMptMu2AYkhmPhAVh3wMuvb1Tsp86YwrFRBTCpQFGEmJLW89m2MqtpRRQ",
  "key23": "3XKbFAzxVgKaHibmjK9EbMWyx6XY6FUqofDKqubhB3BAQUfGuq9D7MzD5ZuzhUwQoCtfAB4Fx9mcZVh2aYc5dawv",
  "key24": "2KZ8vXQogJHYxKZRTdE6JzRqQzAEEhqxkwqA9F1ivQUfWHTRZBDvane5bMJBHSSKj9rUPnzPxnrE4PfxUwMoXsYm",
  "key25": "3egqS5kxX7q3JcsdDN4P3CuVrL1fJCztVV15utQ4JVBWKzEFxs5gAUPpKBxHPc8q5PpCSrSDnscG3m2VPdQqhj2n",
  "key26": "2JcreR5S6w9FCQ2EbsGpdzZEKcUbxvX2KdonSDCnwc4DCFrh9Sd5zVHu2pmSwJNBtFWCJtoAcqCwSJML9VGfXyrv",
  "key27": "4DjtjexWxahVkmWToy7G5vYUW33jogwJH29uhVE6LGuyihzBurchYguFPjG2fPKcZa34t4f4PaXkonD2zSFDg5L4",
  "key28": "5g8uETGmS7bsVpg7LAR4PV69mkZQAM51ZpS4NMyKdk5ZE88i8htjXeXx8SKDNhTv5cEYNBdYiBD7cChBb36bKSoj",
  "key29": "i1exQc5VjPjkn4j55XgFWxRgj4LmmwSpAkL2rywMzp74nAkyzbQ8tRYV9RcYhosqHDGddW66ctQdZmYuaFBAmej",
  "key30": "3cxNW6kPRkrkhLSEaDTxYZRymxj1CMWWiMnFZMd17zPW74VED6TWskMNSXurdK5wuqMKdzPQqBBCRM9ndWwarV5v",
  "key31": "2PF9hUQCwT1v9FHNbRJEHsoAfgUGocg46KeSdXye8k98SW29UMwNTMNLiEK8BktJZSR2wPqR8h6d72yfWsaKcq51",
  "key32": "5Yi439XVEdSsEcvZRAHgTPfjpouPEhyBVcKdKHobW5ViKYu2BQtnhR7pVH2zRVHcSbHjdqaA5oGyg5iUQ63ks9PP",
  "key33": "mtyiC1NpN5WXbnyCVjF8dwuXiW2W2pb7BxXUf8uaDGeVMozdRB8ZQ8yfP79tnaRjrYWUxiQ8SYm4zDXwdUq96SM"
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
