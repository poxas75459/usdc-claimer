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
    "4qnihmBdzFZiWwCYocyiFjCgpJDj32GNuZq6K92UkLVLF8BigsRbT8GewpVPV9avqPf7hpQ2Neb3QtLsepmCRFd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "scPAwBjJirXKXRZoYoGsPBSbkZR6geZqHDJYhNLM6jWB6SDwZcX92R5i9CmFTMLGShATYX3AuXVdAMM3yB2MFhx",
  "key1": "iSy6mzxUgssRTHXyxYhy1Q1Uv5B3RLkhtgkKqo39QYKio9NEWH9u6iLS2izfJbbx5izyJeRe7iMBxsFnvBpiSaD",
  "key2": "3cdcR6pg3V4LzzKzioeFWA7b78QxD7UhTCnuBmhjyrcF1iZNDoitwpXHSHXWUrdYWAZZkYNbDWb9kqz1UAA2f4sB",
  "key3": "2n17ntUMqzWtmDj5Aew8NCYDXgMdmxPB9sdanmJpueWYVwwRTY7RT7jDpyd6t6VCxoPBNSVYEnMU8GFVHHihdCrQ",
  "key4": "5x76PRZsfyDGY3WdibrYAjvH1ZRNraTnvPoE3SqZquYEUNVLovgmuJjkkjM52jEvuryCR33MCPAcgQdTNFE83MhC",
  "key5": "5h7PhLT1gXNHHYko2t8XJpnbyahReAEA9T7nBnPQp5dMGDm1zLmE3GHp56VZ2ZJ6425nBaAfeDsxXrJpWJemsTvg",
  "key6": "4TQSYA5HCt4p2MctY1LixsXnSdw2D2tGh6r4QDE6U8AhcvKpx3C2ccTKp8UyFxBcU4bVELJsURwdY5vUCA17mcjx",
  "key7": "3wfGij939d8oUvKBEiKwoWeS213ntvVR2GVJDbGjJVoBsWhYNhaYzV4hmWK5FvQECofeJbBqD9aNtpE68oyUCUYk",
  "key8": "3XwvNNcVYt1Gqs2zcWHk7cEG6wY1LVN8CfqREid92mBkzk3VRuySadqBZac1axscqasidnHM98WjuVvhnWeaXJZg",
  "key9": "2WRJb6t2eNbKkoK6hsvYuesKHXb2FXE4unD56UZG2F87ZMwsE1p2s26zYBYP3E78JnR55h5UfJJoqKVA26gJCHPo",
  "key10": "U89wA8mNHtvxJAWhTVGhCg7ifQk8A3mgGstb423WrT5H7LzUSvhtnWsyGxcdNkhsQuNABQQ9YpTXdfSVz9myzsv",
  "key11": "4bVjyUXhEFeaFT5Uv6aA9V6tW4oBGrRAyqngAC72FogwGMoqKTEv2TNBJtnm4LfaqbHkArKLuZ2qvT5JWoYMLMAP",
  "key12": "2gffk1Uup8Wz4wnJnpAATzoZf2EiZQ9jgGejyPSSxFGsM3evCAhZuXpG7DDviYiYpS3k3VuCdAEX8AB2tmtRGKTy",
  "key13": "2Y7aU6auRHcMW6a6maSXGjUdZ8sMAvbkjdnyJyfmjgxv5BDF52CHFXwbk4H938SxFka8tm9Hg2Wg4wKdkYbVfWmU",
  "key14": "3rTimNtDZD7usf1e2GFBcBXX651nhgZkERSHZ4gqkC2uTeLWo2iXwf3pCpXapfVGCHY9vHhqWKAiCZPk1eEB5Azq",
  "key15": "2gebNeTDimzYqtWmm4VUPsc9Up5gGEKVdRhDcr1rnw5LNVhxoEymiQk91UJPY938yNW7Do5eN6fqoN4duCKKKzx8",
  "key16": "2XLX6nZkUyvYuSi4z1vEVv1d6Tc9D8J4XxCbgZnsktjp2yDBr2b9YQAiHdtd1LMaETVuBKhtSw48F8jjhKMFZeLU",
  "key17": "2vTQHFUVrFTvbJGsjxWYHUaeCD7uvgqPtCddfCHw7DemdUhvur1Gb1bJgmXYRptf3ECvKJTXyFh78LZiM9apkPMh",
  "key18": "BvxaXWYrjttbe6SZkvQy85pBgoLcCYdsVhfetNcMdp8JvoskgzFuLqJgLhN7voGqZ9dhJqMEQdGT9HMmicJ3pWk",
  "key19": "44JQLDD6TBN8S5Em4woDZ8Gcf1ae3eajPMwWBHQz1pDRPFYLjHiE2suUZkC61y8HcTticEgCoM8dsWzZzMvi5d2U",
  "key20": "24bLdYYRuzCmHSHsqY3EWRJyaaShX84U5JQHVyXDLuGqoZVPtRr8jvcdmSWkbLSgeqCfbuoeQpTKnZd5W3MQQ278",
  "key21": "26LiFBgk6imFSNKw7CyCeDLvztykQi2DEj2TU8MFexwgpYCWECVy6xrMz9o8W3YsXkR4w8cfM3eXmgipHH4EmF3v",
  "key22": "29PMjuQo2vDTRYu94gWyAQDzSME3q9x221Scn5wpUoSZowMyLfSzQuM1nRGmmJ7XxLdNGASuGCES79ysV9wDeyRb",
  "key23": "3vvqxxaLo1uXPzsGZ5F6BbKc5mtC9trFwaUeVdBx7sfrMhgPo9KExXgmptnXUKkHnhZ4kCR2bnATDd5HbwMq1Cdt",
  "key24": "2k3cN4BCTp4SEAv7L4k3KS8RPbQKo4V8GA2eDBAhtQBoF7xxjPqP3T5sA5kAJus8UEistTBJFehLuKqiY1VvJ5EC",
  "key25": "3HndY2wGzgee2fxf3hHYY2PwbpbinMHHAZEgea2ZsbyvuhJQiMFoTbTTYtLKrHNgMxoiLL6qKsa6AJiYMrQUUHqi",
  "key26": "3GFsLD47jRTbfTvZpTH5ePEoZ3xHCqkoYuhUXs3MQ8SBD89wosUr9YbvftJc4rxeb5GtkCmJ3vWJjaJB64URur2r"
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
