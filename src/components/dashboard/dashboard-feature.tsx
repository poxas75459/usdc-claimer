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
    "krfnWyukpqwVMFxeKnvCZrUgS2WGyQVzEMjKCRrLhbYD8sMVMrpUoqq5jKS12K9Y6dKbYbquNip3rjysJcrUJwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "453EQCfuqjh9f57We9cKNEbeMXDNQzr1CvUxLaDjHLkf11APuifV8VdMULq5zH698sSbenq6SGC6xXMthK8KnXsW",
  "key1": "2j3VJnahpGk1MB85TkcDCf3YKmroijPXkbNgEK2wHHv6XpKdjMNrRaH1scy5bohrL4Y1fGN1bLu55UwKRox7MgAL",
  "key2": "33KRBkncmuQ1TZrKWDZ7UYpfQRJRrqL74otmnHH4RotamJGEpVEuvZL4BaTwbB7dnspK72PV98DMrPT5ZmBGmmVh",
  "key3": "2mXnVFcMrCd92wTummbK24MaFipnQWvaqjfD5aLWHMxEgSEoncVkrud3yZjPa3exehvNcCL2X8PS8SfGAFn4znVg",
  "key4": "2ZG81JcE5cy4sHEJRwev8Su9XtonZ5QMciejH1rrQXWditrWo3WkgRUDAp5bwqvyTbBe5MZRYu98SBQ9HA7yb4ND",
  "key5": "25RYHFMfZvYK6HNnJjMgk5D9DKwLdp1UwVuxE8467Fa2sRnMfymkyNGmFFDkigUMLk5KmfJdrnRTTLCHS1iHwuzr",
  "key6": "4P2coFUeXbwQaUD1giBH81kQBkGtCTDW4EwYPq6m9fbfGXJ59T4F2bf1Zmm8brU5Ur3JCQHABYfLWksUeP7XZadr",
  "key7": "4zuNe5YQxbeyzFKJtNzyzGSGRRPB7UHwVssL5WHtCnJDf9JC8zZk1E9xjN8WgBSWQKxAYvDqww1WME8jEQooGaQi",
  "key8": "5EDDDzNVVqgj7rW61mG1jXxJ9DX2KvyENYHjFb2qLMUGDXnvRht98uYroN45Cgt5R5zL1beoJUkEgi2G1QsHbWfD",
  "key9": "4jn8iUE2PfsU4tjETtuFKvRNbHdRsQRXBETPbcRCiusPzLGE3sBqnFtAyC4Hz6mJ3E2sEnMa7PQg2thapLCCxqx1",
  "key10": "4q4X1FuFtCCojeCsaiAs7oLcXjaJUYWsYLsrM8EbKcuY8wEEzh45PLZrJTmUetkVJyoBWPdVHg4EyV1pgrKCAKfT",
  "key11": "3fcKThumzFy6LVoM4GYkNidJDyYyB8Kmmxbcx2KxUA7RCG1wpm7Ef1DyiRMZUgsyys5MTYUSnhnq6smijfc3NKq",
  "key12": "5mtJCGZe3SH7K3MXit2p1iHBhsZ1JB7SfGVPT6WSNTqqXPkaYwEXGZt762ZkjUUFeHD6GiyASfZda5ysUnReJpmv",
  "key13": "4TDUkdEvJJfswntt2SrsDNUMaDiHzeGeiKbJfbCmUAVq2Mjwb2WwtJntjCyziTLG7GCWqdtbjwm7wTvrafaQvTxb",
  "key14": "5k3yLmUk56ohZm2tv7M5YYqD9KBvkV9PQhatc9ZGkGGnDSUFqHEzZbUcpAAHZLyUGJbXMZgAVrjxbqpE9By23thT",
  "key15": "2rgxrdTdkMkUNrRJFfeuMWW7fpYrC9cQZhya7Dk1doPnNeimiXnSXoZ17h7AoGAGvsBqqsqTM2EdM6Ap4DnyYR6h",
  "key16": "KAGnGXpoQXXmaDecQsDvd29zLt6hAQx59ny6yDZtdokUKeaKWMqMToLhYB7wjkbQum3Hq3iKRg6urFKxTNVSNB6",
  "key17": "2J4sFeSMuJb9Fna2FA4yzygQFSY8oQLENrGt72hvg5DXBKFe3seTSAFu2ba9hxLNYdcpzoqc1u9nMhoc9k8BvsBp",
  "key18": "4kDFk8gLXq5FEYEn3CHKkdAkAHXFMYqps5kLLmwi9yCdouTLp6HwH9NBbrJDaokKYz1KdU6LRfepwZWx2QFu1895",
  "key19": "29KKy55V1xHFJomf7KPLErHTkJdkta8v3hzyDRvUvJtznYFKSRXLVJbJVpEbr9EkhKFHzUhJEaJFFQouYHT7BGxx",
  "key20": "PSBPpfacEHWkzTAqcoCNucGLvvCKFJcxryys8CXURFSxq161hT8w3XmH8m2k29Qf8Kdb4DhjRSwWKJeXDkJ17aq",
  "key21": "3fK7bmemjocFes9XiWD2L4kKFuC1Z9tDHtG73KSAac3ffoet3vnHQxPhsXvgCtetWWRy56hYYWpQULp43RjAj8fS",
  "key22": "k5d7PFChw8PXLH4vQthAzaRqso9Fug5hYoh5vssfMnxguSqLCe1DZJePSR3Ts1vzF69xSDv9gYRzDHRhVUAEBMT",
  "key23": "4zdb1FoKYZDoH68wj8iAmSVbGL2GASVWz5m65JrbnLKbN22H1vKiNvxXVEpUamB9zNaMW4FWBkruz6tZFE82GQXJ",
  "key24": "5u9i1sb33bbnZn6tebAqqU7BwjQ4Uk5g2JynJ5bMxxZdJ33X1XXR6HJfXUdDdu1FEZkReTLGgc7bKAYSSJtcjXFi"
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
