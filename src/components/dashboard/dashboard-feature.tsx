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
    "PzkJR6YEdzjABPduYdrGctPADEEraHy8rwEQoUKsmxqX5qDpjevk4UQPSjDEQKWP6dKC5XM5uun7JabRr55Gtab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SComKvuT5awzTyhBmh5RGfXZ2z1LW2aXLG4bFbFPrE5tDGV8VJNCCvYfppkeKEPButDHLBrP7YanJt41Wdyymrt",
  "key1": "3jLSvSyrs2z24UiwZ7W2RiJjLDLTzMCNocf3AVStXR64F3AbhzkWX5Re12YTRRyfedBehEwYpL6WjwXDcsgnFrVU",
  "key2": "2MtjCDjvopQ4gsmqXVyFtYmv5w7qHeCw447DjLUuwKvQhrefHGrgP4ywfCUTHxikVS4oYdSe8ZWJZxLX5pY4a7xu",
  "key3": "5rVsHbcuh1REwKxee69rV9ZHc1Maba7Nr1YNMQHvStmdD1hiijG8UPwkKFCb4kgGS2HPTkE4mM4QmyGjGTt4s44b",
  "key4": "5Bw9ab1jw7MCF1p8mKNrbr2c3dZs9fpuS5bKMzKiyxNPESTQyjhyYRSg1TXKtmpyKW6dFnwXuFdisGyWGujU1vDk",
  "key5": "5iq6HyKdqUc5GNpC7jbi8DdmKWQNxahYmPd5aq7d3Tj31C7J2m5uzfMhb1qZ38YbvNhE4zDyMbvBzyp4W5FWqAaf",
  "key6": "23ky6zK6sFg4cskNgjjqYuEY52x2B219kBQAvjSKHT2rYGjARyv1xFtSUMi2aWjtHKNyLdqA3aCCePnBg9qw9Tcb",
  "key7": "4r1eSFX7NgzLDYzUeRYxCH5Su47fcnASkp9Qj13QdhdCYCPa8MF7jwgPV5buHBMcwifBB8bXnLND8sCVeLYHzp1j",
  "key8": "5fvaGpUbnVzJhaovdzAqV5zGBuZzzBAxpGw9Uuo4k2cMspsGd213W1748mCnzpYX5pUWrtArMQNW5DNXNdTAeB3z",
  "key9": "65URi3Q4mUdjx49AsnxG2gpG9KsBDmCqyf2Z7PqGipHu18P9GwCfbVrmjjTWQ3u2PD3P5isgt4VoRyaNiULECtTR",
  "key10": "35HsMC96YAhnLVG9LmSb79oz1LXYwz45WETfD5aM9ecu28VFVbRro2YUdvWvJv22NVZGeqdBqK1t5d2NjGdzd7jm",
  "key11": "614zPMHB6Abhp3Z9uCmmLrGTVcUUjQ6dBNSXMUN2D66fFe8afpjR4gjDFwdgqSda3cSdBT5rkp5E4afq7E46RfdY",
  "key12": "N9oQNXzarfGnw8j65fkS7cBsqkyNt7pWzVWgSD8PaJup4jEuT7qJ72TosDHb3Dwf4eFcshjoMWpV2F5KoBqJoj5",
  "key13": "2HW4gjgNoK4S3yK9Un3PSKU4YmzvJgXVfvsfQYZAUgy9KG57eP8eiZqLv6H8NCEyMUyVcxyNyYB9AGBoT9SeKiuG",
  "key14": "1cB64fvEk7kWzNVMcbrndTQgRgdMDgroHiyKZyZb8ySxHRGsKXcsuHJcBgRDpZpiotHVQp9QFUHeCfuGtZJydGy",
  "key15": "3ZaeCSGtviquTs7yXDdKy8EyPCcfjhLD8wp1asdfV14UVgvQk1abnBydoHLnKXVwuF72B2hxnvH2vXiNBiqrf18Y",
  "key16": "2UGQoHttgpSxBWaa1DH39rzbJHfRbVhaKNgHhLr6sWGhY5WFryJ51Ce95kzCRUjFwn17K16zyK1XaqVWW2ZLoJeL",
  "key17": "5oHXPBxFqL52NQJZDsCg53B2DMQyccJ7JAL4Uk9pfPYySb3Y9hYJ1YHx1819wfVBopoFoUdEM3FTM1wvA7qMCny8",
  "key18": "4cTgz2sKdV1UZ8NYKP2PzxvhQGCbyMDBP1DH1ooWdH88NTSDRN7E9hUeTtGsggJY2n51dxze3ASw5zUREeCdKob9",
  "key19": "2ZofKcWTmXJMkJ1V65n71RKdVBgKv3HJH79PgUe3Pd2foK5ddwaHoGJ7E8Ne1btmqDnSNgziKfAtpGy73D9NTGdh",
  "key20": "3CDrzoDCZ6t18LN9eWTVH5Cmce1o7Qjjm2miuBA2wNTYPqNHfASMkfpHGwc1KraCoqsgNk1K7p59qqH6o8F1xwvA",
  "key21": "4tpjeuDhLjvitxyDTiZVaJttRUsyGJKWzKt2EVo1GXZHrGPSqV5qmtrm1qGMmSwrJwt2BntXvgjBWkUJ4WyyyN7z",
  "key22": "2BeRSeSZ5efXR8M1Cda3oNCaPi1sudLgwdgJFUy9ZKSrCNVEqSVpTiJj8UGYq1jYsXjV1FHwipsCpYXr59GAAQF",
  "key23": "or76VEPteawtdAvvhBGhEZPR416R955wNwhbRWpw3mKKHEcC4oWTV3UqLGiSisQe2VpAPCBYjhmRMXzYUsQnvPr",
  "key24": "5b5yGdQzYLteJ9HhVVq9GuruUGE3375fVGyfzKbXbMnpuU4Ettqu7YRqsp455rNRin3JPvLSqE7a5wpLJyr49jXN",
  "key25": "42NLepFX4sezgYQTqWdLyvYYoc9thr9MP98PmBmqLgcv3sKc1x7nTdBATeW6hyfY158FNjRW7giQ2Ks3NehoQChR",
  "key26": "5rVUGYUysqcSW6DEVUCj5CXo3kDPMxUiDRpQQRdYg5qQaP418rgVGgmyJWNYJYqS5GJtwPCzTmipZHMqk9xu7XeA"
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
