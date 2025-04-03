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
    "8qG2LHTEo9yPqWS8zuijXA4dq8xGD7yd2zVqS3YmvpGtVwwYWH3fvyJrfFHVXZfMuyTaQhGsjn6UbgM937rtaKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C9xiCRa7VN4sySgNw7FED6kdtSK3gCy9kMJ7Ei3U3adsuNWyGCfzA7AdsCE8rPLg84JBBCL74d28ACF5YEvUZGg",
  "key1": "4F5btWoca54utoMibXJkqricxb2bDXTdxrf6cs5KQCZXoQx7WZ4iCR9TYZhfqpfTkVBU3w1Fdy39Jn7sKUT2uSq9",
  "key2": "589xDKgmK3X6KMkvmhurnvYpD658e217DRyZtArBgLgNFsqMiL26ko8kC6ZcrFFkBYLdRknhmBytAfmec9bY8XLY",
  "key3": "62gyrED2UtfFWWVQ4j8BBNFVJJ1N4P98Vya6CiXsyZhbUt5yF1vaWbRLEqqYZyD5puoAw7BvBFmo1AtVJL2MHJGP",
  "key4": "2sXymDULmoAWpSKx6wogvjg9FQ6xYqKYfqQ7ivujC66SBxNnmCiYj7oeiFEGP5mMdcfGNYatSULXkHjxwHYBaZTy",
  "key5": "2Ypx1bZKUDMF8aMRSYkztMLpdkACTZvgWt6BuiMxgC4h2mFySN5eTzXmzzuDo46kjSJ4EtLwiqrnh5f8B6qyq8XJ",
  "key6": "52KAL8ocSJam54xWHrSi6VQqzHU7tpvwtN34wUHnxZ9XNMDUifFA2Uqp2ywYtPyAMdXbmUQ97GcZu71HzkRhD2wh",
  "key7": "CqVg6CEnWThs9ZFGC4boywbDwjmnwGtEnkeVwtDtLDmhFNPxmTmQN9iz1EJF6pPeynjcSBiy9e594MHD7xuHHjN",
  "key8": "4o9drUr8jcQnzrv5AaK5qbXrHbLe1SDRvzrPi7SPVR1CUsbfp9gfTa8GM71Wytq9Qyn5xyssZ7wn1RGixUyu7GSi",
  "key9": "3XCap4XZSLcZ5oCH2zDzagTcGQWCHAT2ZyBdvNfuiz6GnEMPmvMucaryY9NJu3GQwgMZDCjqCvW9nGsQ69kUE62S",
  "key10": "5evQ7BsNWAWMDxNrpJrDAupCZ3PZdyRPz1Cs5iVMHDkkQ7amKWpZhXGAJMbtRpYJiXXW8o86j1nEzgqL2LozPCye",
  "key11": "3SQhUkxDiKui8SKg6hUKaEcc4WeH2iiCzAncieouoG1s1zFMzX7hsYbMsAmHgGqufNCd71f8wdN9yVHyL5btUpTz",
  "key12": "5YN6U85BFT96AVAKf9paA7ikMUvHxXQcWrZ9f4zfAexxrVWHDZpJWN728VDQ2SVNNGBAeZn8Sv6wwFDRmECg3fks",
  "key13": "FJhuykwZhq2cUXNAMDngjNimzVpEiFBvfBU5ybov8eAdnW4QyNmTLGZ28Dfp2ttwFndkp8KRMMFSqYK6VcPG1gX",
  "key14": "rA2aiDJodH99KeEH2RKC21crRZzWpACdUJmpUNGBkS5UhjsvhZgra2fuB7mxcBVBY73eFoTcFbgoQ24QCvRhpcE",
  "key15": "mr1NJ8G7yigavaevfM3XoXHAv7k2BqsxUk4usBpBh5FZLyNaybtV3wu2LhgiwooF6wPrHfPFRjXDYcULk5R8C1R",
  "key16": "4r3WGLtsBGjGnUtMWTatNgPK7iK1ZZnafL9dxuzpquZDchSkzGoNCSza5P4vE26Dch2bBz5u8fBnwbBBqtmyRMFw",
  "key17": "3bn3Cv78ujmByHUGbLXFDmWGfPaBzEY7Up5s9fyD7GucRpuoFVsNTs9bbtezx2fnMRMBcPBaRHSQs91T8PhKSPqg",
  "key18": "38d7hU8cboCMKXVR3f9PZrPn1Mzi4VkNUHwoQg7VzPQrDtNgK9JFYiy8XcMksn6eiMpb76SBhesYU6AhWQGjBPto",
  "key19": "2sTZiN11rbPksz3JMixU2zMZYsjNUaQ8ssQaurSih7v8tqDufywk5GuZrxLkgWckyTyKaXgiBMmyWRcN62SZtME7",
  "key20": "3u8ZfQNFiYHu3yNJfWmGJgJMYtwzVvJ5pvcz8R1y4GFwPUCxtLD6NteMQAgMkY2mQMgyWTE1v2pZ5yYnNpG7gpNK",
  "key21": "4RUgDnmc5AduqQFyqRMiMjAyHAg92LFv3fE7kPBmb7GFchyWwswZt99x5ftcTa9DXrPdBg3jwnYtLUp8fJchEfuR",
  "key22": "3K6YuKAm3Zd9jPoWktAaSiA7hekPQMtnt3YWDsNZd59QiCbi41QrgGjMDbui469wFL6mV6Hdz7ncapThVmJsiWUz",
  "key23": "33QeB8fzCc5uVVvdSFoB2W4gpeYxNSXBPxgkBFUnXAovNHtvV7PxGMSLX8kxtpsVNpV3d7aZ4Hbdk9H7uw2K7Tea",
  "key24": "2vfXh4U8iGHgLbJ3K8yKYHszYYBxepoTdYWvmUvanpWWXPah8cSt2rRMyuwe5JMXeYCZfuagZANihyERTw35Ujje",
  "key25": "3YQbGSQsZ4DNzU3iYC7jn2nCfcqVaixLpth2dNyNrjeQB9eDKthVpx3CGMZNSLjR68pUUNUs45qUSKgr2tdNQ5LV"
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
