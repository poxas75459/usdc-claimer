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
    "5XDWczajRCYeYizdE4bdFeNNqDiZa1nb3vW93VW8kjHCHrmdsgSYpAW6DBQAT6Qsm15txmucJhzpko52cxcEpAcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "336CWqGWeBGfyfkt1CBvpmoiN6nJ88N7P6gWpFzXJLRsuyy49BKiEru8S9zi2B4kgdz2c6SSVPL1uD49ja7EyuL",
  "key1": "5DL1pcd5tPjfVo9Pf7uhgD1do4cMtS6gM3wdZqkdiW5xjbUujYAuTAPHD8FFiJJAc2Zq6j5Kxgt1wVHTz1voppjW",
  "key2": "33RGpnfqugZY3Fp5SvpWXfEDT8efYRY9KkuTBFFDqXJ2VwT2ykHiGz721N64EVoVLybNxS3SepRnEGuJqeB4XCuX",
  "key3": "PQwvvF8mCdpFaF1xENbDtQmXMM4AxQVCnFgAmtv9y2Z2d4HD7NYcHvKzkcL4TW9dLrmceEkJU3Y7fFm1uzTtGry",
  "key4": "57eQEhoTnamJSYVBBiLxv2Mb5poQDmvsqisusvCyaQNHqrHGPASCVVxHVgNhCd4FrGM9HWxcnxcwpeHKHR6xPWjV",
  "key5": "2NsZniKQuDxQEfKvNHGKiKR7xRzjP22fLpWV7dHQyP4rgNeBoQGAKHm515EFs7QYCfej7f6N4EiVzUCbGQrBLE29",
  "key6": "4n8BETZak5cpTauN4EMDAhMHUBDixFTU47AaZzhEE1LZQ7eJ3TM19xcGwxprqW7bHVyLxpFhtjU5pVHot2R7UYch",
  "key7": "5kBVqam1nLGm6v1fdgyz1D6GhuQ9BoUrKQZkGTrhhoAh1jcoN1q1ZduwE7xMJhK5VNusgDUi8Jajw7xS3o5GrG32",
  "key8": "3L78RPoJxdFas9zZBev3ZG5kGmwVtPAMXaivuViqbtAzBhfqJGC7uvBHVfW93WK5UQnkd2ts9fM2uoqE4aacbKGr",
  "key9": "5osypbz3p5wW7E9dU1t7DDFMhQdHDudGKF839Xs3UpLMiKdY2LC8ijFZMNwvsC8YwDyW14GAMCCSsjJQnfVSA544",
  "key10": "57BCyJRNtBEAuwUjS1qTY5sJNP7HvPx7Wh9YjLozx5omHb9QHFAzws62SKmPoGeWgbHGYU13Um4EXXATB6bkhFcb",
  "key11": "3u3y3HyPzR4t9Z4g4DQyKmLfA4X3AqXkwSGM3DkbdFeEYpb7sP2VBhqpB55ZUxpN9Pxix3SCKmkQRLN9R2c5D2iX",
  "key12": "4epGQyYHDnmSeGz2zZ2KNHyLAPKD4DkfzNpWNHsTvwLakbisXLWjxReGZBUrmseKx9svSe8DsV5MzQBXa4jjjFoH",
  "key13": "5V6Z1zcuehQrsdpNMYhGYQ2oygpD8jwjqKEb4xSBCKrMtzrWW7sMvt1jN9eBA4QeVV1CFn9ZpCN13qZeHDYD87MG",
  "key14": "4iR4ifC7xNJwLTP1UMVRTrNq7ZpZLtEhwpjDEuY4PkL9V86aeXQvfwGf4kbv7V25RrWRsVTRDdewwwRQ4n6G4597",
  "key15": "3nQxGgnTMJjGjz4YY5ax7AZCDZQUZG7AToP9zEYxTucErq2JX5oc2QfZbofTnA4mJahnew6sj2H5x4Fnnv4xyreG",
  "key16": "46XTmRJdJzCot5YQjMj9SLVdc1wKTPhxBH7UdFBBkdnXDco9tbR2YhBkWteUL4ukokqvE33M4qm4TQwTG4y17LGC",
  "key17": "5QnNh9pnKfnvz2bgKi25xAkqKeJV6UnxiKoNQV6jean7aJtgipgpuAQsUQX1rEHA5Mg62mmTN44bw1nr7tA2BP3E",
  "key18": "2bNsUEbMKJhCWrNmzg5Mx47zPrpeoMuKknSeAqTpZBzUc4VnWcTLC9Re9LQofPesYNHWoSotwjxon5NkQXjUBqYa",
  "key19": "3wzxrdriqWLdLyzviGesVzDZTR2Jv8F12Qpt8uzRNXoytjCQgnYfF5kUTAt4Km28CxCReBoqvcyYzgYGTEJxDp7i",
  "key20": "5vyEvLBJCGufkz5CtHNrK8GfQhBnT7axLvUdE4WuNwzGPb2ToxrWo2rAzGvLAYGGuFFS1AiTdmuS3VcwCQiaYGF9",
  "key21": "2J6UdutL5uuVBRDvqF6Yrvw4jKc8MoAPoQJcT9Ux1PpeE3gFgHJW3ghymUuiTse51GyfaypQU7Kt7S8T9TKSYwPo",
  "key22": "3bQGzy15K3t9hqoGqAWeDUNBFJEExmmtzoES9F6zNSqMdUChS8E9YoQ4cXvGfD8FrzpPiBczL1hBWJ9UfAU4fyfZ",
  "key23": "3uD2hdNb4RtEVcU6UiAM5szwkRn8Vo4KEiZJmtLyBejFTYg6txdMFVv6hTo6dQBdJ4fSWggW8CqKF8JNWxAVKCbo",
  "key24": "2YxWLJspKrEfv2VAGFuFFAFfEkWqdqZ2zG7614hn12wKUzZ7oTv7tkuRxs97HdVZYbFacKxiAH497ARm2ccBDp6b",
  "key25": "3DKbt3KnhBppgxxP4avPdzShHonNjVjS6Kk7erBFAbiXZk4p5zdvDF1UyfxoN8KRSdVkahxCdi39AzHaULddjV4A"
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
