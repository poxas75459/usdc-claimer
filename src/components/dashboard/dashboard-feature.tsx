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
    "566wTAEJpJM58eH4K7QETdcrDKwnvpDAYvJERuPSHiC9ZkNJ3nXnJfJTPvcUYRHwvfLyNrUAP1mFutfwLkuYhEZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FbnocsSa4DDFTU3MsPKTHjcnKM2FXxfGk29EBToNDrsME23KeGp2XFJcThQa5HwNroPeKpgoUgWrPoQuBjZCFEZ",
  "key1": "3eFCbxpKVSXBxeHa6T1YSnwqMmXvSMKUfDiMkjjdAjXuoF8U8XwFKSYNfe3muaMCmKg4W9WqBk6JLK8RfQk8C4Xp",
  "key2": "iQw9ATcUd8vWMt7KttGNGNUnM3LPamFXtQ9aPAnWfWfCuYJ89FPZUnY9DuneEjKiuUsDiWj5Aq9svubQedn3L5j",
  "key3": "2G81kVomJ986zxpaib5njPxvkhnY3YH54aMx77YJpPTcMcxLMq6N1BJQpCXfkZRjw4JaFKDKSkUceJ6JYR1WJ2ps",
  "key4": "2FZy5kcanYTXh5AiTsuP8UaqoGiNHUmauRbt6NSKnX5scieMJAnLuYEcE7QBu2UGC5Wp6rr7jeAFrruXmo8NgLXa",
  "key5": "2j2HqrJLybDmqeXipqeoqsPfkdYX8x7L7ZaHRSrcf5AZKtvWRupCTZjxBaQ3z57Hpgqigdce26PoeSDGRLbNiKe3",
  "key6": "kc74TAV6aM8qWpfebVe59ZQWLjLzZFhcpAfBCNnwxY3SXDxXd8bVXPv9UuG6Azc2DshqpJyDeHwGGBjoZZxsDKh",
  "key7": "JQtdAwsDAd8XBNB6rafNNLyc1ZKnaxA9J8BgZFs1adH2TCYGhz5HEPgUXj93axhTyWgwDSp32j8WtgVkgQJhDBY",
  "key8": "2x8GriqegPP7jPTp4oixLyNqYAvWmo978x4oVLqhWaZHYU9itjBXdbJ45QxPw7hs9rLWWcKPY64e8M42gJB1jA8y",
  "key9": "3vWK52dF1CBFdoYKNaun6JhQgJpBGP6LjAo4Q6acyRXJXNFzL7f17irshMrbFvAMYwsvpM5ujgwsmRguJEMzkpG4",
  "key10": "5EVgQUZUXZt85t3MJcBzTyMUCivtGY68GRdadfG7b63dokYrg6Botf6ipkyEE3GLKuWHrzhAjJWmHswcdNJ55ZdE",
  "key11": "ER2mU4ZK1YSA9YKvhM7A8Q9KFHkoYSN1tTuYFUd9g94TDcgABnNLdnVY3Xbdo9H6j1EfE2cffoeBeZZWXHkVX8w",
  "key12": "5vAYscZreJP8UAGCwT4Zue65wHCzVZMPDGzVqmypRiNsHMQC2b3JdvuoHsVP3cwDcaGUKTBZj24AGVHFBFVwQyQK",
  "key13": "4JyYQL6aTEN7JwBxP2TCq97JqRoKyBPCV7dympe8qeS13YCnbqqCMuYXhktFcDp9ubpoZ2bjAH8JFPkZYaK45Mot",
  "key14": "2gH9xfDKfdP7iqxivEm827QV85LXtsdWTE7brCQ9adBEnpFp1247XnVGstY16b8CkTqEBVvTZU4gKF2XfTh89jFr",
  "key15": "4bmv5T9ceRaDuCTR295zvdARddBGp6gTsw91mkZYwTm9wpSZ3xaVwKBvKHvuVwTuASjH2Gkeb4xWy163xqLweu3J",
  "key16": "4Jq4HPuu3podLHkFq9jjF9K4NNnbTvqopmjEYcPPz4LyfsaGUYy3KX36tKNCCmRuQwrHY4EQiRCg6cMCr5gzRJ8s",
  "key17": "4ARBTteJuZGNdhehHDPspm7yfGzS6NUAZpJyoetRiNJoZRbdoaC6HCAbpqJjAoBXiiHXuuxKsPzq4VB377BeaQ7N",
  "key18": "YYSXdzpw1B8iFr4WEPsvQRy1BqRnTTZiBC9V5q5Y35jRC4zJ3voUEpXybELvPfe2XoCvHz6JKcP8UFmRoPnDYqh",
  "key19": "63WTcShtyFD4oYkgJAQGvNKTAHvc9emaB3mQawwHBBU4d4EGKddT5UrV2tEuHM2dkTXBp5vFiKtsfHvNLUXGNgdf",
  "key20": "2JWPWHQXMFZp9FeCAjYhBRvdX71UDtTWN5nHrZPyNNKz3s3CmMiDTRrLL6MYyMu1bthQ1G5VgwEH8WKB3WGxp2JZ",
  "key21": "24Gd7K2SbnN4kay5CTARC4dHJQuoBpvMwZ5bwBwu4wwzxUit9RcZtjHYypRfnmKAcZait9bveH1ECU9xj2ft5WZW",
  "key22": "5sDFUSo4TqPDrts7gxC4odeBkzza51zSpfVaz3xEaSCkCQXsGfvUQ4dPJ3DCXwMSc3J5cBADhNMc3zWh5Ci1Wnxw",
  "key23": "5rfu5r156arvfcBE2bDBqsmeoHYmftgcjnorD75hCB8YWq1xNrtbBbNgDnxaFeG4rFkodsX4CgYVBAuLrhFYjusi",
  "key24": "5E9MWYBuSZMok4DpNKXZyrMSReQNGuD61wke74uYKEbKzYoPbPsFxiF9Pe1uGnUQknqNz4n6fixLFn3e4GZi2eYJ",
  "key25": "tXTVBKT9EdvEzmSQgt5b2u4UBtZaQJqbPvfv1rKSGfkCXCH7KyHfPeQYjhq8Eumqf2LGqrdGGSh8KVMez7eQqFM",
  "key26": "3cSa4npB5JsZGoQ8J1FathbyKrqVYq8yEZP28BJXe1jNPkKzDWxisCPvLNKG8ovhbiCvygxaq4Cby1a7bYCXPFSG",
  "key27": "3uMRgzGiP6rJVTFQmU3vSDbbd38Jn5zWDyP6WP1a8FYR2QdBHe2x6QapNVfbxeFmHrDqkS5iRKLj8Ngb2iWcCUnK",
  "key28": "81MgwozVhyUBodxKjBW5xgvjgQwsd3oiD96pqxfXK4Wigzqn4hwFuATnjbomqrvgPFd3Yg6rR6pnKaWn4qTZ4oo",
  "key29": "2Xy27tjkUiHeT28CJoFhTg2zGUGyQNL1Riyuj86Qx1ksFik8FsURFUENCmW1xf8QbSwR5JiXvu8htTPjdFiLKeum",
  "key30": "2Z2sPD4JHk9co34hDqcKKnSwtPBA9o9VDx3FDCDAPJ7aQ6keYYba4d4eKje7BUPYMtgibEKwqzmhhdcFt6zP3mBM",
  "key31": "kv1s92VwNKN4q5bB18Jg14s5paB1LwbCPfFJYX5WBAgR7MyZAN9gBhUftLteunMbTNAJv4Uc3dj2haRf8iUPEBd",
  "key32": "2fXaUAFx4c7Y8UgBaV1S52KxmCGFZ43pwS1N5mtQqowE8pxXzc1JTz1LWtB73RPtkgoRXcbHso7Zfs6wiNFBjmnH",
  "key33": "2MwS43Q8jgujiXThXNSYfXzk3mhCrxH21TEkAcYnDxgePrJU4v4t4SDkSkEX7w5UBtc4HppsLWBimMvws6ciNi1",
  "key34": "5tiWMPs9KQvWiTLemnXnDYjqb17r1FyTNGCnCy6TNeg74qhZikNBn2RqrmeQkdW2mpNU2BDPVwQj7TGUjEiJKaYK"
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
