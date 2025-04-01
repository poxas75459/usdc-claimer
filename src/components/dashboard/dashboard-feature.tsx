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
    "XbCBxzhAp83C5SZ34PVz9tFNrkGUUNB8ZeE1CeUXgjX9EyVZh9z25FrLbF7jEZd4qLEErcM2xXpzYNnbpN2y984"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gqgwfxEXS19wEYJDghjSftzYJVJExxWJ8mL1zk7fHxHGhA8KPcYxmLgkcrvNwppbU7rmdZQ9qeuTopRkJt2hdNL",
  "key1": "387kXm1SCcNpbXG1NxBK2ExXto842tScR5JPaSo8QtG9Qopg2YdyCv3WUA6Qf5fUm9jv8AKWLVBBqT6zBWb5fs7V",
  "key2": "2PiHJbYZ9zCTCWdUC6hEY2mUtJRAiLQRZ6i4m4SJV4hCxjqvD4rgJ6pL54bUBUZgo78JiGGqHnz2nYHBnaCKSpxM",
  "key3": "2f7jxhW8AuaG9gHrKjZT6g6YXBnkuLfomyT9rg5GEV1NB1FqveXKBmyp4bHdKoHQN2PbjEw5z5EPDqWau1bpJnKD",
  "key4": "55kvVjakJFojyKUmYoy8eBjNPpJSoUVPzLnShTPsjmEeyfwm4d6gpCD7fuqnguByJ1PAvwy8dtEoGkCfcr5bHJoU",
  "key5": "4dkyvFtTgZcUZvYMuk7kjYPRdmw8vU1QJS2xcAyQfd5nCBDN9vc6VfQhKS6BbRBrhp9EWS7EWbdd7RrfpCeZNK2Q",
  "key6": "3LGa1MZv1YUU3TiCzPoH37oj3mhbvdAKvVhfHmSjaVx6U23s666ouieVdS5h7RyKpfXuqXxsjCFLSHxd9yY1aiWD",
  "key7": "41qUAJg9nvFotqR8bECdfeUZ8cQgrwbRiKfphMx2X3QhHhpQrYHcvkKPxYYFas2nKbHpMoSmW2VMFXDku1UELLWr",
  "key8": "4miN9F7tagPGjtg44Dfu6PMMDaaUjap1PE9WCVYVspnSTAQYJyp5SEUcd82Qmc9ncUKbUU7zZaxbWAzEQ99mRRdj",
  "key9": "4ciHxzVntqNTsWzLtGaDA3eVj277ikknJ5M22WUKSGNvWvbufXYLkjA7mSVpxLWepdN4UbKchuumxq4buTeUWMpz",
  "key10": "3owTtQd8j5D8R7oWie1u1cWGLnx1mPMbHB1z7eaaiAbznDmZ2Z7Qh5vShiXSJnnvpsrVsrKes2e2xzApkjSTVFHs",
  "key11": "2Ya9i7BpgNr596Ve6n28uHd7xvnTmbfq6Qq1kHQ5LZZbSYkxP83Uy2M2QUkGXJEWQKYpqRNprRM4TBHqesPT6UqP",
  "key12": "XsrQK6c9TVNBSoNA6BvCg9cToha342nbsnBz9BP1rLKJ6wGMNHG31RPtZdqB8jHtbgSX4acuNjUdXYv21n95jC3",
  "key13": "4oPjcwqwZTtQUG5gzcKfFDdv9KH57u3tG17zai7Z9QDLq93D9nUwhwdRYsXFi6vj1sH7XbSBLZRc2WLFbdxogTYb",
  "key14": "62K9PV3oDk5o9uUJMgV3mZxhXV2GEmNRNFgKcXXZ3NuWcXfL6uNbzfxkuUbnWM7hn6CHAew7QPmw6odAFtsbbKxi",
  "key15": "HsUkiiVPP4o5oPvAdUiNA4nHMRKGuVVbwN5NthJc4Ti3mgWXB6WSJGVRFBHLKqzuc7zr9wviphgUjYdTK7zeQNZ",
  "key16": "3qs1r2YB488f3PZ1fJG6KHr4HpTf4QQGff1hqsGs4mBmpU67fLJS7TjosZq9JKgFcQHsKXVJa3o4h2XyTXq2Kraw",
  "key17": "47kUtTD8FxKNaH6tz3jpaknBGzqRccagcfTQwuYqEXf5w1Utvrpso7sbkUcRdpttUbnt8DRt2Yxmjjoo1KKis3L",
  "key18": "3btL31tjYUx5sj6U1CkeZbZpj9zz6otscMQY3LhxcZEhHxCd5choJBu7CS6L2oFF1eGSCWvWxQm28DmKM2qQhkuq",
  "key19": "6DzL4N2NL9huhoRnxFz2dasgLwNRoxCXTgEjTc9o5Qe3xJ1iyKeeuYti8PR44srKbnYX7bX4GDXmwZHbJXCdbLP",
  "key20": "63hPozk1a5Tv6JZfz7r7s2Vpyer5936ZzPHG1gChsoxcmP64xZfYAcfr39Ws9t2A1PjHoxK56GqcnLn3ErN4wvDt",
  "key21": "4UFP35sUaEdBgVKwyQADEhv1CcHcXT9AkxRwMtzfeW73cnCfhx38dXkwpCmFtG5UAGVcW3dTgaLXZa5Ysi7ho2ZY",
  "key22": "qJp39P79a4XS7U2BGLbbLo41S4b61YYxaKqH9vZprv1jmNwQA8mnqSWkcXenRd6FFy5fqJZxKEbEdybFDRevbXm",
  "key23": "4Lo9YMVnErKX2nnxK8dMHWHNagRakPKkZStTDuFZvKdUmD3Tg4cDrt1oQGfFuyvNH4gM4XqZKRhCjzLH55ZJPMHB",
  "key24": "58Wyw4U9eu6cGak7cmQPhLydKdwuv11EDAuNU83LwXyZFeCWP4G7wRpCJomkezfqS8JwTq5qZxCD4u5cSRhB4aF5",
  "key25": "C3sfZHAfTRCTw3HDH8QftjaAb4hwvzWGuSFWYgAkBhmmUrpvpZ7c9wKua81M8kUWAjxDT72kM4SyZvjvnwjVZWN",
  "key26": "3Ut8ZcnVXaF6UGasHodoiKQb4H2UwCidRxfwPT1xbZ9SYnaVc4DgWSNjk2YWzLasyZZEaD8Dmft7o4oP5NiYpmxu",
  "key27": "3xshMXbC41bRrSDvj9b1zLHsWZZAxVfMVS3yUmTT7NGCUP6CoNbNbXx6jHd4ntMozsexC3AKRpdW4qRBRiquT7bY",
  "key28": "5k6bQa6pCX1eDwUao6m6AGXZBbZ2wAJXqYxqgRHvJdHHp8dUcnNfhhgzwdMaUHuKwsnCSpwvstwNi4rPUi2T7Qkc",
  "key29": "2fxGyMN1cWpWU87KgN684eLYafWv41fedVCvQqqdxfKvt9fE9taqKvaiH3eiwsXjaZqDZCidi94VMLqkatSEkETP"
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
