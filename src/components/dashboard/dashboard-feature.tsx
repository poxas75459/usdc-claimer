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
    "42uaEmX36ahNb5Jn9nog6LV1vA8PCpMkWjLjdxGCoQRNx9CTrkS2M8Fg43npNTXkQAQDgAGoJbzUxf5SQLfzstb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VWwVpp49x6Kk6LVLehpQAJuRagAor8k7s2p1kRSQDCtEqqHqB7jcdqUvK4DgjiGfMNYpRKTxZ9yDHvjGVuEe67X",
  "key1": "RskJKZr2ahXxBSahrYRkg6fagsCfBpTQqYmPzPPc7iaEDPEHY97s3MbJQxFEdiQUY4bWgM44fTFfRA3uzV5eNjX",
  "key2": "cv5WeHLtdcAzQUBZws76tTRvWhBTpVRM39WkanVKw8M4R8tUyHoVXxrehsGrvfwAt8W6bBe96qRyw3rQoTSsY2t",
  "key3": "NfgNewRZkXgsBhAFkdrkz5hN1Fu1hypVcdRvqSEnoirS1jA6XmEDfAU9R8DmnwysXjymsWktV7B243swuhjc2vt",
  "key4": "2EkfdrU2bP1UUa7y3eckae5ytTRYXqznA2TLuJwUb9tyya1ythaxZU2VN8gY12Zzofqx6nAjAf3khdCSjKsAtbrc",
  "key5": "2iYeTqL6jFeXpNHsBtxF8jGLAySkdpRB2YkrvKgv9uMbXskKqmoTHNJVRxFdzPbXM66AbPLiKZEuq8SDvdq8xtob",
  "key6": "5oeCJbnnu8D6zeH1bhdVKm9AAwe2q98f5hiCVPkQSatDxDcE58GZHCtMj19wAxQPXBTwwjY12XXYRDkBM5amA13h",
  "key7": "2PTjVBvgCvQ58xJnNZoZoncgeGdpU2H4u1LuvGPDF2FVvQLgqmuG3N5rzbErTuwc1jsTNLhXFXd5VG1qHYpLEVcj",
  "key8": "5wBnKwnv14A8ou276pi4nQTqyZcuiTuTdVHG89vcbMZfCoXFxNzftVxBuNv86iEdgMWNGm2FvHAdHRkkdxuEZopc",
  "key9": "3knZXiETST8d7AiHpGR4Sm6ErrPeC79bYDLadUDYgLnEYH3V7ZFUyFcqFaNY2zqEKrRqnEeBgnHUsJPK6dHBmYXC",
  "key10": "4wxEgwh7U5UBpLf8D7so1zhANZHfNKZh6aBPwdQLCpHwpJjA4fTGZcfH3ASu8DFhTWkiEPMwp3j8dV23WUMJNfyd",
  "key11": "ji17Jhyv3QpRVsTLzxKLmM2RLe5Q5jVaZ5XeoQ5mNhNARX821TsEMSR46D1AtasWp2CRQpvN1SYBx2ks215KkLs",
  "key12": "4axGkRM4qpoP6qS3sk3TjeGB7VFDK2JS3kKkJ2MUB5XR5pQXbfq7RP9RBeT5msynmSNTqvfSo5xe6EfekG3tWnuQ",
  "key13": "61VBsQiXkWnhsYNzYPnhWhrLuYpxFBhFn2KqN2EV9TZqApMHKSF2mBaUWnrevJb6QKX4P1ixSq9dGEHxZ4XjPp8E",
  "key14": "4KouYvbgt2164DkpRWBd5M8CaGuLpnB7HPnDoyyuBgiQj1gwHEDa2ftXQDCPRqu4ayYEy6iKwsrxmCkrwdYXp7Ns",
  "key15": "4qjZ2SW1vU2r76mNh3vUSZqrQ3ryJ3KHPTQbkURDhCBA9b2dunFBCABvDvnzGHduAXjuEK5xTfYSMRrVNwwyN4b",
  "key16": "rVhxsAMviRUCC5jzad8jnn5XpaiviqsYXTBYTR7Zj33B7WDDcHqM4BUF4ZcjgFJgVsTFiCVxoYvTuQwbL9RNCq6",
  "key17": "6r1kDeVBwDjDK6Lxs7nCierS7UPd3n6u6z454wWeycYKyAX9QRUxnX4z5MsdKzHQqpCS3RpvXEjNmWtsVEQRWVj",
  "key18": "25P4fNe98WtpihL9PWUzmBE8hNVUTwBRdSr29PZxytW72q4efYchNpxP4GJzEJeb8eXwLWc7B3Bdj82pTPPaiRYe",
  "key19": "5Az4bphEWNPYv3pkj1axKTYqeVWvG6aYQfdFhmfMoD4EaG3Gyb5d5LdubSs2EvH5ps7DGM2e7ZH5RREjiMJCmAry",
  "key20": "3hM7eMVVwvZp7kEZjeaK72x5oNpMzMUo5PoesTDzNfP3NYuo1hVo5LkNxAhwJgbQmwbSxASjd8jhLBzhFKdveHVg",
  "key21": "3QywsyvSyeSUFtmDjS7yQJq39Yi76uPsQAR3R5FqXKfA4ac9LKFHTQvuoJ2zc8hKYQkqduxPw2pXYSWXvyr7iaSJ",
  "key22": "5Gpyr8ZPZ9A15Me9XSko7tN4axSeSbM3NbqAGCQ53LWsKrXpU9tVKvCAUBXaH2qg7d7KikueftzgbvJCZTww3BsM",
  "key23": "2SyCS7LsQnFAKUTCN2jXo3gLHxkUYg3jpfY1mvNnyBu2DFU8Z4Sny6f1GNSJkP9FeuLJCc87G6UD3HKNdwdoHk3S",
  "key24": "24nXTwSwDBkV58JKQK2ZNg2yq4rhvmth4VqsnABvK9tHKR3MkhG9bEvNqMTRNa7CWKB52a5q5Gh4c5V86jb1XZ5N",
  "key25": "jFhU8k5eyJ9wTuxdbpeq5H1M54oGK2WRv2aQGjp4Sy7ZVcabyJZJ2moWSGiDN6Tf9pbzLXMV5HEDPTDMQdDy1vn",
  "key26": "4o7c4JJGhNiB19ZnGiPLr66yDNAVkrgCgWRsAnnbpPRFmv6AbyfeQXzxs5yzdfneYChhwmuvjMKKQbJSj8RwWJ2v",
  "key27": "3gxxbPy7uMEjoGHRRiWXJFiL6UzY4YWvhJGABxs88rbRpB7ZA2jtVBirivZ7pRqFXEWGFAmUwSWCUTzDq9SH2JPY",
  "key28": "5hTdNL9wwzuG3Bu4vu26ogUxEXjxhQSRhoP8roqTP3TmefZ66cxrVUxJy8axyiSVgagLPvcoPfMfjrJb7X4tWGcW",
  "key29": "2bBnoLe2mkhscioLiUj4THfKWGqaBVwTmP9LJ49fpT5KU873qxdHpMizV2iUCjpwhfUVDLSpv4r1gYr66rFfQCLN",
  "key30": "66X2FiKt3LxfWzgKyCXNCTKk4D2Nb5mDafAFnu7SHfResSw3NMtGTmmsirdCn9adE5C3uR72RFnoeYEsv6ncSR5f"
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
