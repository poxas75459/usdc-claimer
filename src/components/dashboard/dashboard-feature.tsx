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
    "4sYxjs5DMF1nQzLFK8EkcbnJJqFcfFQut13z1V11WHDSEvpekdBYWvsgC73zRozqCGjAGuQLEW7cc9my3UJjn9pa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gHU86jgDKL3bVHaakwHknVj2B4FHSkzWkhfGaPFwPJ1e1mrQVzB9iHec9vRT1pq6Kj1x73bNjGCo8ui3oSdUHa3",
  "key1": "5MVeYn6VwUXVP5bpyFPtXTgdtagecTzkfoyqAEWUcpQMKSvBzCSoBKJpLpEAgbHZvUUY24KR74Pp3TJ9CR9qZjof",
  "key2": "4bXfCbzyrpL8r5aURadfTquAGQnHx9hCqBqKFMsmDzCLoRnE2ukJx8oYq3bA2sDxTQ1UKu2N1TZZmaC18RXBoXWM",
  "key3": "aE1CcdWmvqDHLESgYRqc8kXyw8GH7gzZxntVCXg27VmMv4ZjM1BCXmVmCrbrG7iALUd4L7Mf3CTsupc7uKVbK9q",
  "key4": "5tppi9HgvzDrswYKLMRsxzXiHXhonYnrZEA6qTn6Hi8nksQRsRoUgUtppvG24HGL5ibMNWV4oig9VsuXJQq1AKNG",
  "key5": "4aCZGjZQSykHVMfrS6516A1M1pBwdxBdfKZXTZZusV9SgE8UbTjaeNS4afoSizAjvZCQWCJ7WkEviQvqf9eVLkFM",
  "key6": "31xY6kTK3yzRwt7GcQi98y2rnxMp84Q29Ks2cDgteqK41knvZtcBASEmbqxnm9dEqmNbFA1h7DRC6qpyVzThyAVP",
  "key7": "459BaxgtLMXr9bpwTuu8wkhbYqRdf5fNJadg4t8BYXPPNQaY7PwK6dPqQ6GKPRDTW1Jc8ynPv2mLynVZmY6J376h",
  "key8": "2ZDJ1k53RuxQu4jcxr7fgxaxeorK4nXgMtrMeppTGo5R5TEGTaom4ErxsCM3ZRicTLon3DudE3P72nzBfhiypyLE",
  "key9": "5cJvbmd47J67ap7y87kso3DPwUJY1Pr19YctRpArEqkUnzeQgAXuBhpdXFFZ7F2wWUUS6o3jmMejT5RPWMSNMcBf",
  "key10": "529bdF4m2fEMV4YmwBHYzayYwSzToFTMiTWK3zULcfi4FechNkHevAF9Xcf64452Ppzpgt1JTJHWmzH7NUnjVxkB",
  "key11": "Yq5TrNfWEYApHdDFJ4GuTJerF4zxpvaDdnnsZrrwvtFqfZMmwgsBQtoiuPFWGoNmFu8vdK5dZF5SUjZFibZTUX3",
  "key12": "5YLLkQqBQiysbVWs8VmpsWyBTmQmA9WHsoUWdxhF2fbVavHHJCsRhnWHWseL41ois7tHkubJ9UsxXPwPGnXthifi",
  "key13": "4cw7Md9Tm4CWCbaJAT2GqS54CF7Q8nMFXNJAWSLNNThLyGQ3yiwCx7QnY4QABqFv9dqS78D3oDLN1bybwPJxdrea",
  "key14": "4HGU4RovhGYzoWsU6kwBXGuUta6hmyn49Yhii5S3e74MFWBUMQoQRcLh5H6pxHEsQbu7G8aZdk6JfuacEzqAPEY1",
  "key15": "4VR7LBGWQzSdEnczi1je5y6Vq1XayKJV4ez96oywUmwVmUwWZLrGabuPen8weT8GAMMtdMQViaZCz4rRUQfJ8Vrs",
  "key16": "4iag1y1EUbVBKRDDYF7uz33kbTr4K3KsxEKRzSJMJpV6oaceauYyhQCzVo1jgNGtNmMcYmdryHFjBtawMjcbBc5B",
  "key17": "3LNRFsQ9gbp5acAsRepjrcF5sREn8rEVRJo5jdUXTbvJnfCijvg6znG7XbhgJ4ryrCANFyJKfEHuTNtwc4rg5mn7",
  "key18": "4zXtdgLeU5cva8ygDmxMNZeD7oE8ziChiCRHf7S4y1FM3RDzt77SN6ATSGh4KnT6fQEqAu1T4rLxduq5GH46hYbD",
  "key19": "v3ZtoSFDWP1VNjjSfvwH4nysDYRVZzSov7L5zbPwPsRWWXWuJrp9RVWFSEuF31ALnNJqnRtdWF3rfwLoiVUsggz",
  "key20": "4Yx5P8pt4RDRELTGJJFgFKXbHP5PnN3vwjqcWAesrr32UeN47mzgvccqV12JMTtowyvwNhQ1UjkviaSqpGYhzbL1",
  "key21": "3EhNP8xp2xqauRr1532Ahy3DnDxfvLQFygJsTnyP39v8MAtutKQLcvJTTmsPLckbtdi869yAKUk51BStMtLJPbGa",
  "key22": "i2CR1WF71kEgLjijAu6enWgzcs9t1enhYwdEsQFtP164jZEETNU8LG3UiHpt2ea3oCm3TrNUAWEZJc8kkbmi3yF",
  "key23": "3t6BStz2vm1fGqiFkaxDLriSk3K9fnd9BT2syik1Ur9pJqYJUYB3xDVwU2dMWVDkwbHziP4yRUo8Dkqyj1yLnzYC",
  "key24": "44cwxvYNgUhmtViNgSs9zGZUxMov17sbGibdPimtc332EPHHy2Y1H3Z4k4rdxgMYtxAT5yAps2tFPXgSgFfMzPmt",
  "key25": "4ozbgAoQLUGEZbESZok78a8AEaVw6VF3Kbab382Qcf921tkRSBSvjZwqqCfJmijGuNyoshnF3BUoY85qczgfdK2W",
  "key26": "3r6vJJxirRhWHQUmDsxHoAspXmHMikKT41QtS1Q2HQQe2RsAh9B7MQLnk55rYvpRJcWyCEn6BNcik1Z1JWrZEEpM",
  "key27": "4ACcbaPAC3LGp4CFJduhsi8iDUfL1a29pasnNBMSQiQLzjMwaaMunwPiyykDhiRhPNVSojBNNu8wJVVavDGeJVXn",
  "key28": "3JBKfRLLaHEBo939U3eN2pv93F4zBFiBjvihEjJfFjUx3d8sNkWtEkvA4GtVLBkoczuvKXYxQkH22YHHc5MJxbdU",
  "key29": "kcUCLn6L36CWiLCJwrEcNoP9VzRRCDqJ6UKgEAFZwXkqzApn5ADpijadkWxpAVf2eUgqbGRCoty8d9iyUTaRpp3"
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
