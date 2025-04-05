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
    "25XUzRfzn1rHs7mYEcKvMMNYgjC1wQjSw7ydCQaeAUXHhteRxVg2LNPZCtBJxZpdGq7xGdcywELjjj3xbY4hXrao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ERhyRAEWtnnvCnDMFUNp4EYFdW1Dnzmj3FwvaxQbXmVpiMBVNHMWtBckQ3vhGEcNbtAxWmAshHeKtX7Z7yKjL3U",
  "key1": "3UTAs8ziBXVQHbBs8zSbDSLyyPhPX4xtQySmeK8SGK2PPUdUqcVAXaWxQ4wdfRfr3VLm9wYkQaP9D6sr8VDoDKmK",
  "key2": "3hFQFhA3rkH42o2w68TDzMWTs3j51Uu3x6JJzn1du2nVsW98hd4AsTUPbZQ7iVzaKWXbnqUvz7w57sXCybBYrrm8",
  "key3": "2pHEeb6fqKb8CN6LcLcZBQ7qefREh3bCgEFdjBMLEsBdceJwaikzHFZsZ5VK64yNVhwdvM42BQHfo7wiTsp7Evsr",
  "key4": "3LpsG85cTsn3VUBvcSg92ynpZzNWSNLMyAvmck5KG9UufXaTeatV7JTFhWrfbzgbRjggUjxjJDQURQhUZB65K4n7",
  "key5": "485HfBVpd8kzNaZH7m4mPcgjLTKGcxExUye8rkaVBJDyoG8Ph6y3wpzXDKnJ1SeqhoSFWqfUzGPhtxfLspLVXHDR",
  "key6": "3956KPzqXy2szYJx4RoyzFwj14exvXME6F1w2uub83fYP9o9a9f8bTdTrmNzMjmj3GchYtZ3ugpHzELC78kcTsnw",
  "key7": "38wR4AG1ENVu9L1BvxRnRXH6mSq1ntvVthtzhUkgZCyPbdbRHE6YN7BonJNdqPGEFjz1Y9LUt7H5TgyNP5ULKPnw",
  "key8": "41hJnbkBuf1pGiN7CeCa2DnQJhehhJifrv5efJLd1UCFEbZPcWrmJjAE2JWPZM7X9xhEugPi6RwTpK7K61zdzFWr",
  "key9": "2eUGfavSiYizPNjyp3wJ7f5EwG8WwnynC884qQD2yAoSECVJLCa55rLdcsVUH1RLM71ing1bVCtshRWSM3HPZDGs",
  "key10": "36FLE53D6Kbd4nUYzTE9FQ58Z5gxFtVog3Lw9MoT2gMQ7LjKFFBw2V93QT1w9fgEcmJFCx9SB4cByyzqRzzS72mf",
  "key11": "48L54XiFvBYpgJV8wdDqDi3Vz3LzSSerDYNQ9R4a2uoMfmTNScZmFn4kdxCp55qbBf91sdeZnUCw5DTitNZEpycn",
  "key12": "3cRTAfR4c7UuFYsPFN6z3Adgj9XMuDu4nmZkcfxAuL36GANUaW4qirsAwQYo1LYijECRaHS8B5fDXsLeZKEU4qDV",
  "key13": "5hqGC5JdyE3w2SffcfAom9uSifVzgX5GCdcPoAahFgYJnGtodVZXQYyrDsphghsFdrFvgPJNHFyrnmpuBZYvZ6MD",
  "key14": "4oRqqT6iqjnjQxvbYpJj5oaLTtq8pwG8yiRMH4cS93LNk2RYL15HgYrFWzDWgjNxzmpzdZ6kgtxzwrsga6xogo46",
  "key15": "4cxNNqkUvF41ZBHQ9aJQfNGVvrjspKsRQ1Yn792VRZKjAPxMxnzJGsg5jHGih7d9R382jrE8Wjp1k5Fk2Qt8AZev",
  "key16": "DdF4fP1Y4ta2FB6SjZyqKWFxHQ12YptMM3aFQZ3g2wKFt8kBgGtQP3v41r6vNX41CPNuPFFLK8M9sAoah3Up5ho",
  "key17": "3JAPwynbyc9pY8Wv8sqFzWmtA17fYLYPU4NU8iANSHpmdJxVMDQbwkjhrXpQWYBoHw9Js5MugpjRPWjzXXznPCYN",
  "key18": "4qJcCiBFSYNncj6tahqbaMiNMtJW47hCDnkBfZuUSwyiaSNf4PZ4uYoVtPwHB6u4RyB9VF2ooVWFtJTWK5w1e8Hd",
  "key19": "4qx7rGtD6UE7CmTvXrV2tC6gMiUjwMti1XVykKrrBBzReVNQPe3oZ11nELTrnac1jd49PmnizKhroojSsFyb9dtj",
  "key20": "346JhAGhmYmSepocduZpsq7XqvCJFEpZ7D91e95AogmZJZgq7qWjHjfBGzpC9KtnWuMbiVwQDDbHdbtW8NGqWhKp",
  "key21": "3U53Gh8d6GXxSwBPZ7Yay9bwbZvCY9D9XwqnmDPbyGmuHUvemugAAeiDqX9j6jfNu2M1mcWPp93Zv5jQytFmEt6c",
  "key22": "2L2sWyG7G2Ezc7WM4eWbaSpt57XTjxGhunC6k9EFo2vVcoAVD19mMh1zcbKnBySgJhrRcDquKRn4o1zyocEC1iv7",
  "key23": "5F68H5brSCMLcj8y19MgYrCERtTrgwPaPZxtXx6Mn5VT3VrTDxJwAgiMUd7tQZCkES25qBrMbuty7AnriuLXdWFm",
  "key24": "5TKdKWfBj8ujXbuQsuho4NqYtPJHdpBvokQftVuwkRWQZwD2U8hFw4jigu3cJupfXKQMQJSQ437Gqngeeb7j6nRi",
  "key25": "4cxjbsgkTQZSrcvAhQwZuTc9XEGsqPXG45ENqfcQNYMFvXFZi7Nqm35hSjbXZFxVH3Nhrno8Ac2iyajk6T5d7C7M"
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
