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
    "2FkFg8XdrhJA2d3MTYpDPJgGecWofK2QzQVJ8WVtFoSUnSJwDJPyRvG5V4DQaF6X7rY4dJ8Pas3HBENKTNjAujoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZtAyVv9fMN4PxmTyhFB32LkhbF5R1PqvJqvsJnWLYkN4dszoqUitsH5THAVLZAvyUjqKd14soR4DjMEJ9xLNom5",
  "key1": "293uBFz8DxjcjbwRgA2xR4uDwUKCj5ncivCR6W7chPyvjcVjhFiE25qLAK1x9FMe5CDxYTVhmvxy4i42pJeozbby",
  "key2": "2uY8F5FRwT1Nr9s1V18tz5NCURjRHTKK1ssdHVdq774ktW2Rd7sghENvy3LGYUKeNDyQdXjxbAWHiKgvj1ZJwgnH",
  "key3": "222SCvwEWQxj5yd2bZMBe8PmrAdYowTs3UjdDdRz19YpNMq3LKS32reRBQTAxBopeNdw5QPnV9saicqpj6hjTuKd",
  "key4": "3ySCwxChSe5Qm9mnNRssNfyLBGmFsQcjKdYKbvntKrrihkTJK9aSr8qffU8M6Gg4nPuLjpe7LDHEJMoX1LbzdKRA",
  "key5": "Xyzb3ZrCiQFBErALAUpsFCavJKhddDdvH7F6Bf1Yhb5WZ8ZJRtJFDVqemzbhMrn16m3D7QC2wB76Q7DRsUg3pmT",
  "key6": "3cnnoBY3pHFVnZimJxBhpPQy8yH1a6Va2vW71yFUx3MjuuNQmSfMP6KxpbX177PLRsPqrq585asLYGs4Kuv5PpMF",
  "key7": "3agXTy7oj7Yw7mVEFQoeHSFAbLp1cdAXpzoyp2Ls6sySu4kfuDJuVMoCNSqwYM4uoKSBVj9Lbvf8a6SoPGsNr8Gq",
  "key8": "Y5gkkLvKyJHbGRmZA7FY7qUank8V1uhw169PTEo8EYFBMkJehxY4HesVcqMAXRc4f946L6U4NnvhSNRFRi1MJDE",
  "key9": "4XEWGqxSGQubxLPrAZptRupQtQaNPpone1TqLYGpoaHRoC2KBo5gycCbc2cFhFUAqwYGjtEzB7FQ8tJvsy8aHWDH",
  "key10": "2kkHd9nMEWkzD4GoCpB2JRqb9L4kmcy8rM3YMG9YGotoamrV2aGukQQTjpknFWWCdDs7F9jwGfuKUryEumCZ3wY7",
  "key11": "2qFtp4AWbSDQ4tWKXsQLpxLY7zbe5BLWePU4YzXcy2iRvdRFsuTJ7S3DaiJ7AqE9tDa3bZZ7aQEnkwt6pSLGNMva",
  "key12": "64CiMUCCCp6CtRQ2Q2bYwEiGYWWvc867KCa9oex3bAio4asTAeGV17NiQ5hQme2DYd91XBtcqkCXaWTKhEtRoQRV",
  "key13": "57aHLuKEX29nQmn4XBuZQZnthxbTuq8N7oBxTh5CKbeZnEXzwnYDK9e6LYvxS6bHv6cg574gZ6X2a913qe2nr2jq",
  "key14": "3LP2ANBbxge6YnDe3KfqVawE55SqEwpcXhfN4ZuUgdYFUbbMz7UEFTHz5RASnGDWjVfsVvjfi2smnHpxAKV15ZoW",
  "key15": "47iDAWaY6GdSGUc4YUiJy18bJmEZL49XCBQxEmr3MV8S8ivQ3fpc2r7GtSk2gzGpQiiwjSwz8dURrdGuxiZFU6yz",
  "key16": "5EhYPTEyLpkdnmGWnVHtjuQjEBme7VtD4j7bbRqtyDt3jPaHKDYYvU8wn3GzKykS3Ujj6tAGQHPfQ35JMWrbnoQV",
  "key17": "56dUi4co7pRUDGtcjocCUAMzcxBWPSzfCFrmVUGRVub76WsZex4d74jQEqnJAs33Jgi5xjo2wXrbKwY5PbbRa4MC",
  "key18": "3AsGcHrkccQaozygDMte1A8cd9YZFEP5YXngb5apyviddEJc21eu7VgRWqM9zDiFA75YQEeq77WW8YiqatVZTWZA",
  "key19": "52vxD4vxJZKzLAM73C2qF3GQhYjMH9MtGz9VRvFGSCKKozjNehh9E2dFB5r5arYfN9JLBpCwTgVX8LTjNsXqoaf8",
  "key20": "3BmuVWujbRBhcC7gQ5oTbTmCQZVosFsGCEwhXugesWoDj9JiPBfsDZS5HTXjrkn5DqmkLdJ4aZK2LsCmQaoHXYCJ",
  "key21": "3hZZWYnvbVmLyC5KMPm1g1MkbW3aaqW9uVN1emWUWCxJWWDZdaRmYaWaJU981btH9jpTMg1PqJA75cBLFqEphCFB",
  "key22": "33Xt1cGU9ohJosiPEdfJaHU4bVPH8Moq9rxx8CaqaXwfW5FyZSdhcRajvyaLDrbEA8dpGLfQUHu8RwaTV72usGKe",
  "key23": "63MEvSMDVftJCydUb3gwPTutkbbU481go6aKkPbqPapaHpyW6KFN9hNRS9exP3j296KdJGBbFQwsjKScav4Er5K3",
  "key24": "5mJD4yonkr4JAF6uxoDrZ6D9CwsC9wUJHBt7MV3RTJgtxP1XDCdA3FAieAVZRwEgjiqqmptEva9sj4WK1RmrTEHP",
  "key25": "2PyMustbtzeDR7Z42xEre2miLh1eZ8jDmUVdvFuyvqRxsG5bZVs9JJY8arFBZxV2WQHdqppmMLf65Du6BUoqcCRC",
  "key26": "Gi97AXvnWpE2T3WVzGMqGqSSYUjRvULg3R3K7t7MhMUgNNkHwsxGhmNEUiTPaSeVd6V5rRrN7a349unzCDDuwsU",
  "key27": "45YXGnN7aMh7FCQL1HFpFMx3BKWH3KRqNgyNXaE98NYxfg8kxajqTTfYSXSYLKuwtnNv8Dp5GF81koVcdxJVKP8A",
  "key28": "2e92T1KN6DwV6NAKBoTTB46tbSzZCQSZkPRoiEJoWgvTDCnXMgWRtJ3NM7xQ4czv98wMkK1VjVQtSLT1eeB4SXGP"
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
