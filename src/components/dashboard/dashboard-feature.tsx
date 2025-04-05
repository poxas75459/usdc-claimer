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
    "33V6YkB5un1F4Y4rGyyxATtqq2LhLG6RijGZQeDNCfeHCCbuRJDfyYubkYRc4BmpApSfqkJqYz1sTwYdMBv9rCt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x49U8pe9uZLg2cPGfboQaZkYvfqd8oStf3ukSgzyobXE1GHZssPy3Jznxu58pvShZipRtZRHJAyuQNnGveBsJNU",
  "key1": "2uSmQhPiGPSGEYJGhr5PNWMZWywWp8YwXbeGZWTMMunrHutRJtbbQo7Y58EQzWvjxuh8NzuPR7FmyEk3eCYnncvS",
  "key2": "RYmjDgtDRtd5jcQU9UT3yazY7y1QXXFRUooUx2PF7ZJGaehRJ6RJeZ3DZjGLxwRKHWmgif7agoTgTqyi9K4pobU",
  "key3": "2YM62jufvBKYMaajoWzXr31Y9qNWF1Gk11bdUFtJckfikHpQE1SngbdXqnnam1MHmTEwDiNb6wHKE64jeerjrMkP",
  "key4": "3BJ8y39FoTZFPJDUFr2KgaBSjcPv3DvqmvyFR4RP6MBZ9Sb9KiPdm9UfqKBQz7haw1Ryw67nMgbN4pbd6KHoyJaV",
  "key5": "21PxmywD1bqyrvWqeSikyj3gdssJ5uDcQtBYSEBy1r9SX2Gn69Zdy4UYU9k3WB2KXzvQSqBmqGFR4BuWKFZCTpXS",
  "key6": "3AA9q5QJdhxMBKVmmkMw5EpgQskXTojvR3y5e3VX5zAhuXsvA6WdCUnUA5UEbFmtAUNrjUYaAffNca5Xn8U4ekHE",
  "key7": "2EgDCUqUdeiwcd53T2zqQ7XvSE9qDpoFHp2LGizVCJgBTKLWvJphzEz3Y9xEL2zoodoCxhHBcUWtxCGbZ3ta6pfo",
  "key8": "qcMebgoVwqfdEQENDU9tyPcc4d3F4WKjSbRp6opuEXUVwurR57EiKneCwMrayDX9o2zQRvk1stZzGG9qwtKUVM3",
  "key9": "P17tusVUkLuZJe81N748QCPEdxPVGFpJigayTRvsx182fiDEJmQTj2gXVjbjkY92KLNo6qhsx7d8VEAGSjBKEcY",
  "key10": "3qqTfizXA5QEBNveFUiDbd1pb7HCzi7knDDZ2NLfWbqZrNUMYiQhRnNjyjCD2xeLrU43Q5i7iu6gDpUGWzuWdfQE",
  "key11": "2QGRosxZDsMrZHEoBFEqWMAmk7zfvYhft54SPGaLBdJR54dfzsmz5RGtLKBaPk19sY6ekwT4pyaYoHJvLUye2o6V",
  "key12": "2D7rF8jhRVbj9Qe6NkcgV8ipnZLZXBuEb8EbzDkHHzZL9pWMJUzGkYuwMRoqdAf7AuFx87h7Xdak8JSdu5GN9Qtp",
  "key13": "5TMnGfYTjKp91W9FrUqRkvfhjUV8ePKSj2vKVhsCfovKTAkcQzG87Dh2tDVZWdpQLcc591d4oA2GTEjhSgpDtooE",
  "key14": "2t56a2nKJp2bi6abkgVz5SvWtemzKAsZBawe5QdAbqcadt39ScSFUJDccQtA3x8BxxXtZnrkbQ3JgGGVXDKHbpvP",
  "key15": "3T9TaQYaevmGoyt4THPNs8rCWj6iczkgByoDG7VDzyz6gFxMcJFnJWY6CA2Dvk3ZTZ2AyBUhPe9RmV4tsJrQ9FaF",
  "key16": "hhvT3LZPrJc32CQTLWCNQEtSEXbCxViMn4CazL9ah9mNFC7MmJFqkNULqqCXSUsQWg1pE489qUhDc4ELz5QQxTE",
  "key17": "2QsSo9iLtAyU5FqZkL1sJrWFth3dVVhqNJevyuyZkH6MQTEf472Phns6irQJB9fZVgiGaPLX1wgCYzDiK3AZsGAd",
  "key18": "Tnfxm4ZVAC1kvPAGTrNVtJ67q55eptkvr5njSq5MoJTQXJHZ1c8cHLdPjyTi2fjoj1MNsgsxv5m2tsZTg1mVmzY",
  "key19": "3rmDzdXhjJyckBGok3CTTo9BkoTcT4zxy9bV1x3bVBpBPf6tWHHN5HDeJUGR3bBAeaSmDRPBpivVp5Z9PKfoHDJA",
  "key20": "26ELdpjUsirTcHK9Ywds2cx1J3cWx3G1SoZ1Lvez5zQHyfjt88eadVG6RLyVF3VQB3vwFP9YfSHp5Y9HhUQLwHMT",
  "key21": "3rmeANkXGNe88rfVnD7ystMRZwxPfN9WG6mNN9PgbLaptuQxiuEutoUhcXPKPs1GY1CB5seYDKfqLWNxAAqHZSy8",
  "key22": "2C23XMrRtsVewSbdWx86Fqzf3xV5pYYDC1m5ue2Jao6uU6BtK9uXxvv93dbzM4WAedxPb1Y24PHQATZaXuELYWhs",
  "key23": "3CknbWrWVvX86inyCozrHW2bdTmXLpeTnk9fCguBC5nvLpDMm6za98JvinThJQJh8a7ezsbBPifj1KPDLch7z9F5",
  "key24": "2KFnYm6h5JAfNBnMTt1drPbS3pNNNY5FMk82B74MDPNdjxeQJ7aY8hwjZbo2kGCtu139Yh8dd3tP54iU8EcxkPbY",
  "key25": "4PBWmG59PbTtiH6VjrGTqhRFWn37y6LmKj5eKF5xHXwb3rkAQxn3kD4yexoXM23zno4BLeyKSEiEuViBhQpYX9Rs",
  "key26": "4oraiXwoyWpqYoZDc6Th26M9rzf6179dQrwinzD9Apvc48v7UBwWGAUXBL6ubHGmfs2fyZ7DWXqEi2UQ6A4ZXBhf",
  "key27": "3zNVsEJ8c3EJcWr3YxaRLyKJCcAQ4uW9isHHrZCXaXZ6aEm5xFqT4Q1wUmcPY1VjNiReTBdg6ZdqvnRpvWsGdocw",
  "key28": "38mMKXdMMB5tqNGbJKLCpYnLdMxnW1K27S6Kng8xKCVzvnSc8D2We3ti1WhtTkgSBgJFK8ADW5WB6S5XqQNUFSLp",
  "key29": "3QYsR1UxQ3rNhao1ZHFU6WWsZN32iPcwsacP2pWAGEsoN6zvPwEq7SuPVepxf5eAsRcqLYBW4sGELp24caabB7DW",
  "key30": "4QMVxTpthS5RX46BiGQvnvFbaJqL1PymC5qhZYFaeTaYYbMPcYv5mcinuj8M7MCCUc1DiRUkZ5KQ5hkDKMnaNbeH",
  "key31": "aisZ1jZZFNVhqebPj5C8mdXesZx5y6AXZp289K9tta3MXDJdD5zAxAYH3U3VT1LZHWbcmNRQTMDiAUNALkwpwWd",
  "key32": "UQv1qLH18tuhVZA4KEhnynF7siD9Gw2jAwsQEjGdmZWvbYh1uo4bREJ6QVUeNvPFzxbM5rEpt3n6PRQg5mq3zLJ",
  "key33": "5gsvrSiXyj3Hq78ixRmmEujGGZycnvmiesr8xAyEnHjTyG9FoLbkxqYcT28WfiWsYWNPZtYyiKbrrKRkoe2xHrGW",
  "key34": "3CaWt8Kb6j1UED8WN9idRz6PCQUG3sUKt7coL1UWE1SAag9F7XPEps6fw4UaV24SrrJLcYkF9BAxBdZyVk7wwypX",
  "key35": "3HvTrjFH47kaoZXhRsmFRM92NBatgSB9APB4t8NjGruSzrNdaFrFjcHqSJRbFTHuQqPJJjcWrz8EsavaVVkeNedx",
  "key36": "uNwtRYCC81vw7qaYr8anLAy67isnURwM3LnQKTpektm9oM6ihJEdmx5f7gAqkKvbobbgThXUGHfF3t8YzTrxQ1F",
  "key37": "4KCtCwgFtMSaetwEXotGBqABSLhuHZP3XUHviVTYE6WJCoeLfWbZZTHxUkQDzfkGU8e6TZPU8U5zkNMTDmeR5MMH",
  "key38": "5JazsoktXYG9YT1gL7yowGtnoFcAr1rrH4bDG57phZ7se4UjXyw1XbZkTQjCAYghLh16UDoTQmzZxJJ9YZSCmVLf",
  "key39": "53bAN2S3p2RpziUNieLe9P9nJRayHdNkygZFnMakEGHsQRw4bY3YJcfdneXoevvtsw6TssStTwiAz9rXcwDc6qbG",
  "key40": "4kBk4foMJ5TCdfySNg4SUJH7ZK72MgcKNFpqtE1ENCXKUGproJYZBpYkXyDwPsoctbEZMu1yzqMvFXdcLNaUGaL5",
  "key41": "4CbpdKMLdmVwhvxggG7hN18zR8zgsdykbLsz5Rr5uA2JUCLmAY6cmk5X4ZcpmFxqGT7xsTMaPQfNrK4TXSg7tETd",
  "key42": "2gov7UYoMH358GKtMkPqH4VxaadQtHNixMXiWPDjMJpDhe34w3sWqLzLXpN48UT95kBkMrKtrxDwLXVPH3NptjC1"
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
