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
    "5ks4awEpkdr5HtVjXmWR76MaoSd6WnLxrBH3iA3DUDR4SCHMPA9JfoYTgd7sFbcV2pSvduJyKuCC2Jf9mNFooPEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V19HVdamecVs3up9N5B8qQJVciiq3QaJ7WqGJ62SWLPCdMFGB1ZU2hUEkau9tY7PBSohQbVybWjVhjsCdhwEiHM",
  "key1": "4LAtAXXhhZb2DVDWHxocnu3o86awqsdaVPEXySK9NBPhY33ppbF7cDhPSiY52fPMZKeohv6mQ3CfvsHk43oQ6pzS",
  "key2": "4WL77csEq7HAj7sqL7ji2L8JgzSGYBunsJHXVZxFb8EWJEipfVj91kdpabmhwH6KLJDFsU8hSRiTvTc1Ve6DYiDB",
  "key3": "25S2JVHroZT4JvkfjdWT4w7Pm1hrDiTQvQpwifuxkG6oLq64PVTLdjzhz5bRPuTXrXwJTGD4dSzm5o8sndT5EdWE",
  "key4": "5CZEKYo2Tg7k5b8kwaqkyB5ZF6ajfeV8LW2rBqpXDKgL6CGPNCyPaPZvMAUX765TNWpKBKMwfNNrBqNMkZAJFS9j",
  "key5": "23GtTwN6d3M57wtrvDhb8v5CEYZip413SjyGhfhNkemu5xez3D2vcm6hb89LK3mj4jskYafawrgoGi6jFCk7tQLu",
  "key6": "hazJPAtxnZzZhaFPtNvZ9iHTP42AaCcoUGsH6fZGVn3pBt8xQCTo7KptgoJcLnuySAeAXhVfkxqRp47qexJowBD",
  "key7": "49dnWi6TgcdWW38GS4S3TWixJsrV5wMc4HJA9HG1Vd4V9L8fTSmUm8ktt1fv7TdYQFdSvxpiYhjDm5Yr5kCA2c7z",
  "key8": "4iWU4XxGxoUjGdhEw18Sa9EqVTPmt3Jzk7RbUAN8kaCVzpnD1gNmXrn75XyohFudMUd1rzZ1uGkAbNwUqPbVZmBC",
  "key9": "35Mcz7PrrS3GiExRPSiEaKAdbBrGNep9yCvLkeiVapBASwJNNyRVPRJcM4DerZyXwfogfgqYXhRit85cNHQiwQfk",
  "key10": "5AVcjuFWgDS6ERR1nXZDExZxr5hVD67dArpH7iZDyBZWSS6XTVh99KSb9PvfPEUnwapwKZ93bcyrMfxZDT2Cb1vK",
  "key11": "5P3czvqfig8q2AEVYkEmAXSxgr8Encs37n7ctV1moa1rnWp8zorAXR3b6kPi6Bwqt2a183Pt6iUY6etqirwWWmGX",
  "key12": "38WPHo7ZWt9eDuXy8cLLDWqX3dzr2h1xQ92rt1wp1JLPJpwfow9c3hW3BG43YVDVa6ZWSpdCSZopUCeXoduARHJ4",
  "key13": "3gkzFRvCui8CmQyfNmvrVSDneprcz3psCa5MobiYHuFzNPpfnKCRZF6GFw7JrmYHHoDWLrKb4WMGRH46wzUnSBjt",
  "key14": "4jYiiwybL2GEdKAegfNXxUYYDqj6erRXyK9fV37nktLKqkF2LBn83JccHXsUTij3jeaueQUXQQdSeM636TWaEnF6",
  "key15": "5JRZrN75fEMozn8gf7BEKU6PX1WT2tKoG5WNFEeWkHJLiEbk4kdEbFV9ybNFPPRqhiPDpHy2coJ8yH1cHRmKA9x9",
  "key16": "5VsoPy5h94x3djGmJ1jHyV4E2gqjtRFQCY7zu1zyBekq1WGhYzaaXih79Vn8hHjQ9qX4AYEowCBncsKd6A3EFMQq",
  "key17": "4nqFtNMrCRNNShzVeBFVhmtxc3d4Z2K8anmHtx122tB2sLqNKCJng4yqPY9cMY5LdJyjcb9ZfjGTfEgS93WB8qKP",
  "key18": "2KfC7gRyB5ms3tYzhSYdcJoj7iAyGHiENZHrMc9s3LxQ8zxQrLmFLvZd3WufiLhPDJeyoJzv6AqXd86MaV4cfvo8",
  "key19": "kv2xLmB5RKj6Kci5zasaiwmHJSGgKZ5LHUUSEL3H7F1JQ58utCXhTK6PReo9wGktbJ7gi2mnSNSBqvX4g45DSQv",
  "key20": "P9fiiwzbk85s6MiwDFjwWFFnxkLSVkaUNPBg5YQKBoaD3hHrca2g9LEpmppTf5QYhNc2t1zPnEyg9QgrNzpYMW8",
  "key21": "2eLHt9PQoHg9Jqt7kzgirovR2Dx2ayPnouPhSD3qRZ9cKHocqeJQMqCQ8RvfWQHgsb6L9CFUYbS4MzsERp3ntVe6",
  "key22": "2tB7eSWGYTyWcTZ7MiBBYYrvKKW9v9UvPSLw8H6WF9UWuHPLRhcoJcUqDAK4n4dv28V2EzogQ4hoLKEQgnUfTipU",
  "key23": "4hCHk5S9jbEbmYqiEnLL8tUoQgkaXE8C6kpLoxPmbCjBd5Hrm23qjfR4sPmT44wrNmiU2UVURBBpGwLVmuFtUmY3",
  "key24": "3umoVGDCrkLhgz2HLtoDohM5e9pjSLkRrBjsw2UMsx4NGEu75BNR8yxxo8jTdoMHqmai3gX4brKQGW1dxqj9bLhN",
  "key25": "4esMY1moPQNMkDLLuH5F7MHXm9E1y57MgGTyCg1i6TUndpDL5DRfdVa9ko5fUZm2GDCZySh2NWctt98mQhEKxwDk",
  "key26": "45jqEtiCdQ7dXfQgCMmL44QHrcnGsRCsBVMMEUfsJqNy1m39KjaktptQL2fNvi9fSSsqTFPvpyPe5uvuQKNNBUwy",
  "key27": "4rz2uFpB1E8tnsUdVwcMksTDs48GAo8WYpw4fjzxkGxVeGmNHiSURkF4YmEL2X3isyqBFp5M4o84RyukKmwZDaED",
  "key28": "2y4yAJjMRtUNJEfpqrhdUnY4PQqdQ7Ch3wJLbSyMMVtcA3qi42hUgb8qsK39kd99WB7Dhu8jzxNUYTDughNVKHeN",
  "key29": "2bhE1Hdszf3xoAVMiB1RFgkhrbEXjJ9EnJCwZxZDTP1u7nDA5ZJLPrRegYSKyPR7DSmHVLgQH3z9AQJvZBripYX3",
  "key30": "5AquX3kU4oUkHdXNZzC9n7BVWY4eVN3FtnvDuEPLx2tBxzyKRA2RPPQwBqLNnEWF1XnUpPNUw19qP7jsi6Hr8pgt",
  "key31": "4ffmvwLhzzGpAeXTonU8vrmt8sgRJoyxTKcpZUN4GCMr1HgmUJkdQ7rnaQsg9rAczvWe2vBcxj3CWTex22DHvexS",
  "key32": "2FefM2zsyADTHHH8KypaESoCdrgxLp4oTJEQ4fEqL9NJGLw3VZYPefBizXnfHUceoRTbV3Cha45B584oSGXEXJog"
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
