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
    "5YLEYSGTpnjhQYBg59So194khxW9M2NLwQKKaYsVKA9PpjKGMiRVQgSk4G7JDweyKn5S6Ze9wTi9mZJVCzFnMhQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4frsw53h9HFgQ7sUkY3SqYo96tUyYWGfctkvpF2NTL7zT6HvtNPfkQCwnZgLBidqaSCYZfNLUnaYc1Ti1aPWPt6L",
  "key1": "mTryS85AWoKxvzRhoJvxQnMVJ4NhYs5wsY7k9uZtbHnVySKaGUEpQYzG9dDE7R8bVehbGJUBGwKktgd133RWnCe",
  "key2": "5VLkgyrgKJCVH6C9EdBTSEvVZ41ErSecaHgmzhgt76ikL6vXheAucFgjLenJHub9iTj2FfMvDSCK934HwHaD9CwM",
  "key3": "YQUH9yfTapQ6aXpvLsin6nHcVnrR4MhNkjShepcYwgT8Q6UQJmUtPwTFEqnDGL335Es6WNpk6M1uTmzBJRfutPJ",
  "key4": "2HLLGAHxHqxMJHaSVVPp69tcsPSBKHspkgBbTWR5TawyUtA4QP26kRrdzWxngHzFLqmDRuqvCCcGC8BkaePbX3Pq",
  "key5": "3xcqmvCfBDBkZVF5q1vKnno5trhZXfcS1iKbNEVNNP1wQRtwMDZDdVREzQfsnazdjY98LoCRDcptLVpUrGsz8tUn",
  "key6": "2LgsDeMFydwREJiPLBtEjYgvhe2Q7rQ7oUqXZB5zqKy1zrqkFq8Rcw17jzFJXxBrCKz4hyEhjGuNBWH9W2wTeUmq",
  "key7": "2pbVT4u63UdBxbz8SHfifLaciBskMGJeQLqPFyhDvH4Yqfmm2i7mZnsLEU93VyK7yq4jMcDpi5cPAr1mViwvPXYE",
  "key8": "4u9878QAPYQYXAy8LJQ3ZUjqypCDYHDHQZDxjZFe644kitmLaXseZkTHiwf3Ujzs6mCrHvc2QANUXvov73sm44Rr",
  "key9": "5G3GprakP5L6Ce3yhTniyrt5oS6A17JQhhfZTAy2qYKK5jXe3vKCsDDQbh3SaWPXLVg2sfBj7YDtRDyWq1zgxuRa",
  "key10": "3hbDyF3zFA3tZa2qubuKh74DmZBxEy4uhUxQkzNw57pwpV9mFxhW1Tvtcui5bWLNt4SbhpSeFHmtiboq65iQW1ZL",
  "key11": "67D7xXVUcw6oZ8qPdCenP6aD3amFEkNejo62boEeg7fGCqHCgfkKmWbvJH3mC9kmWc5WGx3BkjCyXW51DgeDkUBS",
  "key12": "5bygAX1mqZbrtLFy4ezMkdB3QmWE4o2parkFeHFkwHgw6fFBAn7vtHUcatfP8jHPtzp4WmDmoWKzV6aoNVMW762D",
  "key13": "cVDLYDDVdtnBBgBcpVcAYNAw5GkMJR3vXK2VgqjF4SvCst7XxbrPyML2UFU7B2aT5xqr24CpKkB1GhqXPv42La2",
  "key14": "3RjaVzXZe5uGJebHVoi2qhx5sypgp7Bpvt24EU9Rr6rtKz8SubSukCP5X41qZ1GoBAFFVtDQpQwkHvSdVV4wSNjb",
  "key15": "5ESAhb5ZSTna3nAsMkH6WV9Sjw9rkAPpcasegxZWYSaPSUbnYyeiJAo3Xhqph5sLmd7nPdHwKPyd231imqQbvdZ",
  "key16": "65o49yujGeDemNBYAJcqHLbwZ23HH3E4p5YuYYsMVoVCCQgWbWtsiCDmG7QS3j5YEnxDNNQdVLoCG6v4VCQtkiyd",
  "key17": "26BXJpxq7vGyAiAPfpjgwXffRyGskeVWSiWZJCgFHQc8XS5zm4cLLhkN7RzeWGsTv96TaVTALTHnry9dXg4cJcEP",
  "key18": "8JDVMkJVSwaHm8LgNH4nXWTVMf7838XHjV3a4K9enMbKkVSPYGKPmwT4TVixaDCKkPmkFuP9zMyo3AXYR35Kz1D",
  "key19": "3MnrzAaeguPHcitR5uYnj5y4pgtX3fbB7nQ4FFf36Kb8oo1RKTbowT8zzZM7j4EYs7nxNecQMd6gUAnpJ3DmAN4w",
  "key20": "35Txzgt6wVcDHWMjffeNUB1U85RqtUfAK36sc6X5bA3msJPFvkwWroXiYncpSbgA5nSWUhKdUmVjVJGyV5FSFUGu",
  "key21": "4HdVgx8KXFGLmXkNS5yeDQywiQ9yzA5YiTZ6jt1zCZCVmqjJxVsrBBtiaaLuzSg4eTt91PAy2zEN1H1fpJ7BSdcY",
  "key22": "JeSJseJwrMLweFMAkU4816a4LrNFWxqjPuoTKYU1VYJYNUX1R18fo7mrKyvq5BMFq9WyCJnj5isQeA4cK55ZA6R",
  "key23": "unT5MzBZ28E5XBpj43urx5Wnnv964PymN5j4bZEBiPuZnjpaQ97XwNaswTswFMwrq7gmpTcXYMTuZz2ZAbSNQH7",
  "key24": "4eDh78TqwvcW2Ds8yjDK1FeUVzuBxx4BSbszoAL7XihPxFnAgP1aL61Vsyqd1aH9GQc3dDk77UzpaBm3tennUQau",
  "key25": "99StMGmD453oCCZwyHm9sksZ8bG67LU7NY8Awc8o9J9AzcUY6yeu4RR9tuPH71nSQpRv3D9gRiiedgyf2j3JVZU",
  "key26": "2eiym8JnrXPRmAfyRkhWa79cQ9BcCTpjRsVF5Jf31ULwYCtK41PrR17JCTWSkjkN1brdXvxdW7jxmKBEAFuYXwzU"
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
