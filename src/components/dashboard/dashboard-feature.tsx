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
    "5VtmXsBYe7gotMe7MvBfZDV7qwguSkiJm1ksSFrKoYZwWctAxWAY9VnDFtrKRMKBUXKZnSSzMSKwcRrteTRtmqY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xteVJjNNycrh7sbfFpJeaXWXpuvHyR8wWuSf2MdU6wFZ1wDvUB87n7s34oMteBDXL8xQy8RfuzHfYwZKV8ZgAC8",
  "key1": "4qSUsWC2ZrgJxKJzLkYSareWeC6BRozbJDeh5myFKamUz9tPhjhtjpYNBrc1WM6QP29zPcPJpgSrVhuqYV8uVg5x",
  "key2": "43NmYvj4DUXrw1wuNaGyNwbDZj922nPeCRDm6HxVfyU1oKtoPJof4nsmRicpaE6WAtsXvTZgSWLrqihShvMECYsK",
  "key3": "25mkZaaLfcTG3CK76hfkVX9XTTypTjz2DNcsbQByNmYQXddeLhMVFfMapUjuSTVwMbUUEs11cNXVgjHe37xhBaC8",
  "key4": "Xu2rdPGkgTAFjUi7YzTrsCBWFXJQKZbPhHTUv3ArcgqLLKanFmk5sjkF1GbXCeTk6vkh6MpJumUVTdJbiDtD71n",
  "key5": "3dbKhy8J7NP1XyWTe41SfydTgzHLGrV1NYg7azizaDyXpT5rqK1bMgitNREAZG6mBbMd2Sazck2uJC58j1WVaBDc",
  "key6": "4XCtFQcP4CXZVhNSYMXznDXDB1Y9b9CzLtjjzALbMmsTu13DmvzNde8Sr8q6Pxjbv583VJcK4UWLpxdSRMXtB4oY",
  "key7": "4wZoDLwQqXYi16MXgZX9ZHyckyKbonMnnEPJTbRejs6nWGbiL4pKZ2i5XZeuA4nZL1XAZfsahZ8ryZB9SoawwJQM",
  "key8": "4QrH6Yzi12opdrijiHQu3976YN52Q16oWqCoH5eTHg6i8BjpcmXo4vG9Tb58WxMUm7vdXBBR4hy4ZJ1bgdsK5Zq6",
  "key9": "2PwZMHZ1iXrg4MUuWsVwNrqWeiuU8vJ24xMFpsEHZZRFLm73hT9kDwHp88BnWfondhQnqDk5x6BWQuR1YdNWgeax",
  "key10": "3UWugkT4KAf2eq277bJCsh3Ljq8FZ3cLAGugaAUdei6CarZJYaUe2Disjjjpy8CUt1MpJPxEbg5DosW3DbZeQTT4",
  "key11": "2qdYPAo4QgPD66VNdtfVeNnvJEskJG6WwxcvrGZf2akmrwgexFfXzAqwwsRCHZ1jEQw1SvJkEpUunotQoATv4UxN",
  "key12": "5uwXCpnYk1dzwBNaYccuc5aRkLVegcUSGY632eHmDVJ5agyo8eexJ8CHV5aZAt7SgMrFo7nn87niY1iup4ThUR1",
  "key13": "2dcanSAh2AFEfJoKNg9JeBk9dj1P9SbSTJumwt5BHNkyBXMMeaF29H4G2m8tNxKPgiia51qw6YBUM7AF1vobucog",
  "key14": "3EXtWTza7YjdaCYVkVwFLjePwKJQJgzQik9usDaG8tTVdhguc4ZNjy6CshnYvE7kGjziJZDXVQCPSqKAWwBjCyzN",
  "key15": "4x8QeQ41AEzt1cn7fLsYYYrjxCq2XTdnPssPPyZpLdzqSNcymtXyY2hYVdbZbTPpDjs6NEnZLdchZV1Aqb41tuFk",
  "key16": "A6BfgVyPwZAySntw44vqdGD4WPAfCCdrNkEKc6d75ycV2aJ1AEVDNhxYhJgBwWvEU6QSWCEc9t8GVzxtphdycyD",
  "key17": "4G2eGCoNG59o5XLM8zzfgAuhq1KGT4MXQe6hpKQTBNr7NUivwzQFJszyqxJUNjH8b88k6csUjbYBByWhoPDr3hfc",
  "key18": "j5dYQkjuL5ARp9BR4YVRFbhxH3BNMHck9A2u1GgT9gh6sECqPahyPXMa7MHBpn8byBYzxxeXpnfw78aQcgVnoTz",
  "key19": "4SfQnqdR8ipBdLctwsKCTYyRsXnCa28Yt9xXwa4GkfFY4SSJjbMn1Sh97nRxoQDNvqxsQm7eJLUB44yFc6G8F6X1",
  "key20": "3FCv6xjViEXUakv3VhLZpoB9WfBujNvUfAoYYY1CnFtwySbuhbeA1pBGE1JJ3kyKBDw82YzbBwkDU9yEP4ZnAo5m",
  "key21": "5Gkwaki1huBZqchwXMpGAuGBxNEV5VtjMR9sFfJe1FEJFURBaYzuCihwcBY74WpMLndSyXr8cawaYPUeEjesA6nX",
  "key22": "Ggu9t4qAK4TQ62TbVqkiewH28NhhwLpCndLeJJ6r7TxhzjfQc3FeRtTmcBHZT4mRLBSuUrwVaneafNvdcdMPfke",
  "key23": "2n1p2rjsFCJuCy6NaCtdRWSApmHYMhWruGPzMJz6fE4uMu3BSeEBfJTCNtPuXp8UKS4mHfFvmN6cZPjUfTXTtse8",
  "key24": "S2F8v2EKbwxaZX5sDCH5Gzzmuf8yURtEgTE8XPxwA722xwJZgqeeErdrFFYxw8fCgKZ6vi3859bLHXWc4cbRU3T",
  "key25": "4Q2LKC8xJrBYquMLedkTJzKudMSyrHj7enjNTkxz6M3egQXqwZFedVwjZq698P1cEdhK58HMEDbE4qusTHBRXiVH",
  "key26": "2jR3ozw4USEcQ4qp59n9TcW9cvGPZbBuZVS3KGwiBSEJYFQUJYGUoZZBbnJxKjPzjtPwyzXA1NGQbX1SvdoUpZKC",
  "key27": "3AN2UqJGkg6F6SH1yxEoNx4TBmkJXbtYRS89CKv6WWZPDZg3SzNhLakPwhhBPmz6FQG5oD9GjY3GUbrVzjLR4sT2",
  "key28": "243cBTdNYG9mgdcVnanYkPAH2Hk4bvffWyjspkSamZhM5FJBgQSpV5HLyhGwtAsnbd8XvDumr69WFj8Dq8iSH1Bs",
  "key29": "5jCyn23pjpBzRZS9MqiA66xWVbykHdPdz6t7J7KYToTvQTh5QyoobunjnptQmeuEFPxxy4Cv2c9VSPHQ9Ncuh8Yd",
  "key30": "5L3HgTBuuXUCxri79jdrt7EJxJMgWCg7WUNucD4BTXNwwWnFhQp5eVaaTfhEkNw5TwL5V8XvHYqLZSXd5WkzB3Jg",
  "key31": "iep5jYVa2SwjvvboXeDJPiFjpHbeo9yFhBiZA2JcWKGuizDHZrrZztcmhNqE2Vp5gPZAEq27Phm8RbS6FAf5E9t"
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
