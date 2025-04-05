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
    "bi4Y749W1kAQBBt82RH79MAqVDNVLgtzYVJer3xLJyqGUPWSfcyCHmSNoBiSHjkkpXtPUiX3Rkd87ZcMB7Q8AwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dfhE43NgH59nzvjPxvmtRxnu5c3YrJu6FEZ87XrZsGptcBfSXT5GC6VYjzQ8nvGV5u4HAgDSueHF84oTdZcvR45",
  "key1": "5CMV4nN4aXBzfkC91aoBNoMW4oPZbX86JubN5ncniHcNUt4K3vDgaVurU12FkqtXcvs4Tb5WehrAfVYp3s3ZjwWD",
  "key2": "4Az9EXc8WeYmZeZ8xYHz473AJbJ4ELae3SycXiSswRnFgxWMTWxV2PEr3FqNTaT2nNrujxU4n4EWz5XvmJzZFbaV",
  "key3": "42Zpm7rBKc41QR215k7vBrRHe5EMk1XMicNc3KbM5AYoWDouL5oKA9foZRPwJgpsKb3Bea1hAX7adYhyU59eHLaG",
  "key4": "2hcq5eLdkQztZKe4JHYxwwUYrci8d1qqn4uYCp65FkMDV1JyfJRVEiAc2rtHbH2sUzNvocQmVQwfUEhU3VHH2or8",
  "key5": "dCRnircZ8VaCu3eBGUv2rAb6Av6GMMe4WAcwUx8UKttLFeyCb2KmBNzBLmHmJYwF7i4rqTwVnyhMkV5WUynh4Vc",
  "key6": "4CXQc2BBWijkWSSw5nn2PNdqijZKnTi2vCPJ7L8iDCfM7JKNqXvAQtWhSNfCeG1CAjznxk3Um1GH5e6TWyguVu25",
  "key7": "VQv9LRq7qpbeFRrHStqypkgh6AMrHfLfsy5MF8o9Jr9qy6i9VQ8EiM1aX4d4wqUXVSBi9xvBV2jrb6BMXKgohW8",
  "key8": "35eBFGwxKTVbvieJHoXGNzyXxTFm7bBWkzQr92FkrwsAcoueks5Y4ok9efR5SLkBrdgqwyupEVTp5MSYP87hX6XW",
  "key9": "34jz7d2TApVEYKumn5CymuZGybMAjZtCJ448TeXNCWJgxi14d3rSUff7TAsJuUeAQzVoJa7oQMVQR6XWpTEp67i4",
  "key10": "61ny7JXcbzTYAujYbqQEJ6QNCKB9ckJZxivFdi2EtYzot2yA56Gad1VSwVgSNi5WhbV1LnvRtt153PYMf7UUvthy",
  "key11": "WjC2ktCvDDMX7pJywQA2ubrk97hQ6depDLW1PMS9f74tBLbetyMr7niT1gz5LqK1pZ9HcqUfzsLFCyDWPD228Bs",
  "key12": "3rYMPNMFjHBVHcQW1fviPbmNHppdAKF7xTVerYwerhBAnDUw4E6zf1JXggzFzMh45xgvK5Puqxnmp2HewU6xKohJ",
  "key13": "4ZnL4X49ELr59m37Us4jW7Fn7zPQ1RGGXWTpvJuC91KXNfvL9qeAFQEMuZq62ohiWBciP2dxqs7LcGpDXLGAN4Xv",
  "key14": "63RB23NKX3X2pHjQDgv6TRxHe58tvacNs1Jw7Gqd8tLXGfQr8iqAswe3BCKxCUbxH8afzxq4X6prVoV2Whh4cUZV",
  "key15": "TtQhifaN9rVEjyNi9U6gHrS8tfmMHpk3KKJMLbcAPkKiRfodGxPUwMreKSf6oRcupQAMn48ixipNVL8nA1AdUcd",
  "key16": "2irsBocZaoT1AeNdajMievbkWqqUDZzb1jKc77L2MC4ufx9dEmvTEARDhkq34pzrQBZnCPcobnJpL1vxMPJCgfCx",
  "key17": "F7V4viWTa2sszvKkk5DZv4Tfp2ee1oUJUdSfgiu9LQkBZQ49T6ohaSbDzZgUNR3hJdQy6wFSomBzMbtdaYEZpKn",
  "key18": "3ED682Qy4sX6raMoe6ZFjn7HGv2q7JtFrGtynSmeGQqKw81DXMyDVjJcZuyQeQNPpU5Lx91rLj5gaKupJDjSpvAK",
  "key19": "3GrhzJe6Tbvu3JMkgQPLzwuposB4X2crobpccm6pjgw92LhLp8JBTHXUTGbzzbq5FQeNAmMqcagWoE2aqyQWGX4",
  "key20": "3mdCKe9GyHiro8qGAkTSGPrfoBfrQw7xBdtXL21QsakervgLgbqJZegDfJxnQZcXtYqUDrtmKnoxkV3qMrpm8yHy",
  "key21": "4ftGsRdGP6yt9TBLRuUWYRj6ahZw9rWQpRCcHYW1ZVzwfNDci2XDJQHyoWanG6FpnbScb8JjqoTkF4jZt7Jipp38",
  "key22": "5fCzscacAioid8QBnx3reBxJrqKndTmnqLLiJKxgBipL2pGzGsaFjkyfLEpEWxyv2WBwBn6Pc35Syai7nXnpVDBF",
  "key23": "XBCGGPJ4foANtFFVx5Si98FghBgEhiG17E4baPNmvmkbtiZiBKn56dMxYDtKDMcsnbVF3uuryhPiqWQXn8aoJFD",
  "key24": "3wGANvNxXE43ZiSF9fcojLrqtcTNGtJfJrpm6BbLmaf6Ejg975BtPnB3kc1zjhAH2cFQTXBZZhYNUMFThwP6KD1x",
  "key25": "fBnpGKxLFBAB6Dzuzs38BoQkXzU8knEzwXaJsTs2fSpoyzzx9CfgnP5SJYk8kb9S28Zpua8wdEWdpDPk3JTywKC",
  "key26": "3JgjbHBbnA1b8xprnBWcJGXKdGXMH56ycr1MS2hr7YiCGiZEJn2HTXYc4vFiXV2ow7aj14xuexeDqU1fJzo4zqh3",
  "key27": "2ihk3q3Xs5DzwPvB5JVBtuGaS1a3fKANKeNB8tXmUoBnCox3gckCqLcPSpyQnyjcjwTM4RAsNs6WgrXpAMTSnG5Y",
  "key28": "235Rszx55no3hLzuUA6mtQ54iaGMrAkHQHptCJsRSAKSRqNGVXiFjdzjsmbwSntZ2jigzkZ9iJrJp643eRCVQr7d",
  "key29": "44MDeGunFnEPcU4gGgPbkPLiX8YsJQi8yNZQ9989twp8DrM6Ha2D2mbjp7NeBcf44mU7nPwDVYvb1BhFdstEEMiD",
  "key30": "XFuLXxGExuE97gwgiJcfMxk74CNmPq2EfAPo5xBaLpSG98SjA1GhnhEP1c8pR124ddTrDDqwfoZe5GkLK8pP5NL",
  "key31": "29QrYAoBJnYzGUYeU5PFZo3HURkBFZtw88hnfThksdgN6Y5YUi6YyyFirbNefVxSFp9336zPH6aRZCnkGFBdDwQF",
  "key32": "C4qcGAKqMo7dpkJrWphfePwqY7FXBYpYfzopxUwi2KT4gcQCnHjsvvSypB2KE4nv6MCmtoYoZK4aYsjFVfDixFD",
  "key33": "28EwhzuJX4Qx3YvyJWiT56FivajvAT7SbUVpsLiHwCRofa5Kn4yBH5CrWBszHZvkWS1Yfr4gNBQJMKhPfk389s9R",
  "key34": "561S3jZ5tCXV8HiEgQrWEQcKeXV5UTr5V3G6op1W4yDSyicqiiHbCFhk5iUsbvWNvhBub93DpUqfsEAwtgvFSZg6",
  "key35": "5UYcuW1Y4UJMi7ZAbLnqjgaaYzWXCN1aMnmwwM6GxLZ9ynBXv5fk1Nst1mTxo3NG6GDy4Uh7mAQDw7SkcD4X7QCJ",
  "key36": "2vymgHvSpHaHNfNtZ7HKfN2vwR3f4JZcV7Q42aQe4B3HsvLhYNzcKvdTES45NpVwWR9n7gwkwDaHPitqRf9R4aR4",
  "key37": "4Yr5dfe2iwCJiFfqyV9ApcYGWgtFjUpk4hhtWPqGyVKbfPR885SDHamndXbhy4qkydyCRJh85pyQJfqpNxpJMCPz",
  "key38": "i6DELARh8veJxiFJEpbRzHXWaS1z1CmQnddCyr1k9GmeZLLCuVzXdViRFv8CF47WssJgp4dihvegJaX4vfR28YR",
  "key39": "2vvgZPoALCkoBw7Pac9Y3RiHa1QwEKBufsbMsP8W8x44r8B4AoLXetiJ5msnbAK4eErAJGpWRxpZeKtyWWvRTh6y",
  "key40": "s9G5arETqLVekW1xFxhWgpNczviQDzrRGedeugsdXqjB5kZZzq8tZYJ4djR9ZfszotG3XpZutgg3L4tzu1LkSC5",
  "key41": "2XKgGk6FLtyRZ82si2th87SfkLLzMKRfH3MiPAjgC8P92wBPueWEFpRXuEnDKbVJ7U1ozhHUKd9ChYzWkHtDVaAT",
  "key42": "S35wmCdUVyJVyHyJNfKm7ZRnLnu1qfVzHiHDLBCmzPewtuezHnyBRy4fMPjRKcfKx7LViy9C4GkkZSZ4Js2btAB",
  "key43": "5SRj1NmSqMaFUHPUyTc1ZDV8i1iJq4atrp8oeSBrWz39GHjwVfA1TG2nACcRj6gMqqAwgqHTgY3mXXePfWnCubib"
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
