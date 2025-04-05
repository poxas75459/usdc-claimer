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
    "2Lxv6fD91Qr3WsRyr9tTEH25CwXqF5HhVexGYYs7oomryqhNGPB6zycTVBbWVtzwrSocADkgU1HvfxhsRt9cdbhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42UM5rcVDfqSoTf9TtccZDPTiyYGWSJbCXRoB3JRM7NYx7U5JqDrRCF4et9sbxiqnBQEdfz9sAsVpqyDA6Qc6fU8",
  "key1": "GDUGeztbBxT8TMP5j8rm2pDFFRvCWPfG5nL45dFZQgpZFdBkCqazXTbAmdMhQpLdx52huPxuRxuxosEt9bBNDDY",
  "key2": "2mBkzHGX2sGUacGubMeoGRa9sM4MdRwZZUAzEJgS2idckERyagiEQ7yNRvwprcZLqNsrwBqmkMRQ3KCQq6tdmyFu",
  "key3": "kvjSV2g38phFojpVic3Wbkp8WXrFZY675ELnepNt4reTEr775quNnWewPqcKDqYsAg5utV5ffMdFxeH5noTvEzF",
  "key4": "f8taWQ7QogapYyn4Ea4r96TB4V2hMqvXLQhNFZLHpkiBWqqLBRixKAp4pHWCAs6ZsHVV9BuWzsvrgUnZwejgu4H",
  "key5": "RkGmomfFRDcPxJ5vRpz4sFZYfkAm6dX6BkUFB5fYcmktDbiYhX32ufzKNvL4xPYXybNp13CW6JuSWjtgfUM7oUP",
  "key6": "4rKWFoMiShsS9Q2obxc2QpF6jK5aQf4VyS9bLb84rNZW55jQxwWFz1aWLwsdTeyb3MQy9btHebMAnGHZgH9ophzF",
  "key7": "5ebSRyqoHGuwxgxCdebuP3omwZjmmaXdKqc9uZh2PabeY4a1AEGYFC8wE7MKPP3MxxXcvEczH5fHoHDooNNnJm2v",
  "key8": "97fv44UU7V6CHK9UvDQMcNBQKyhvGcUsjkvqH7CQX98JQbYJSBR7t5zaZqvfqtotvV4ERqHd1MKdPZom9VwWuFG",
  "key9": "izEcyuNTVqXviFEwgSVfzV3hZy5296BJb6aNzpj5eHs3xFtv7NVZS5CBUK46xBqtPAy96QoVXF7dPWsk2rGX3iX",
  "key10": "97vv8HQrgoyieH4yMbj4vxVFB1W5hc9Xus4mtXdowjQmHGWbTuUpKH5P7pttdqCcPswCfGDy2j9ycMgw9TsLsWg",
  "key11": "5vkaRW5LoV77C5QfATDxFjtbLNLjuXc9ivfeZJivSYpj5Tc5Z3Zu8kBnDG4NPe2yA5eUnbr3eDWsXrqb1KZU5Rp9",
  "key12": "64ayQJS9NgWYqYyWxs6UqoRfxJsX6vHBTCPSs7efeZifkx2qucoRSjFZbm6xLboXruKWTrpL47JkFyk5hu2osMwV",
  "key13": "kbv3fDZentJ8NwdEznbjsD7X76NLUmiBhvumVwZ9cEnMz1KqudzfFUAqtZL4k6pZKUAsGB9K9VdUbSuqbLZffg7",
  "key14": "2qgVAxLcyvM4Zh4rawmKRQw6HdgzrwZ2KqzC2gsiRAyfd7iJjEn7iUzDZuR7C8ghRtJmuMREcEbPAwbX2VLxUArG",
  "key15": "DTFZrAz6mFDy2s6356KcyW4dH1msXioYaLqeJAq9rUM9C3PTxx9yf2H7yusHok55oFAYDzWtKRNAthoZZQCKext",
  "key16": "5gVLq9QN4dpjnh11BXQwwUJ5Q8bZoysvsQQ2C3z21tYkNBX1ktaYfd7crpkcAVv17ibN4ivycg9WqBrKxkKGNqrD",
  "key17": "fE44U3qJ35yqyZQ9ahZ2R8xwWFfphfePqG4tmtEcAsLMqapoVpruVoJ6DVG5andmqpEKMHD5Y4UtoKskbDUyoqd",
  "key18": "psvvefGQe6PHULteNHNnmjPF7pf1tZwxvtwCjtM3hR1X7c66fj7op4gTLSUsXnG5WvLAUerciGUFFUG9R6SEWaJ",
  "key19": "3hJqgEDep574jPTVD4mgWCndbB3qwaAsUJ54VABPgUv2CPAaX9xFX9tTSkfJ3JeQp44FwkPfjYd9K39rhUGqrWtL",
  "key20": "4FCwyVyKvvrr1sBb6HGZLGhFZJDeENmGZn32EJgNdNpKwDqLYWM4STdhgVGsdy2QGww92dhjcQ7imJY5eRDoWwaK",
  "key21": "5nBWH7QXeQwxNi5BnHDmFY7mMpEvc1qG5xX5nxWQQnSXz2FcPZTiyCAYdHsGeaG2ubbQbRDteVR1uQEiubKgKHyq",
  "key22": "3fmwqygRbVQCJxyCK3Qd1ZeZrYQPqq56btMRpHb2dxYNgZUKxAjpA7E1BEGhWKRz93NVBfGv5uo4gofJ5LGYHcCS",
  "key23": "21gokBX8GCvQWdgJdbHpGF1nnpjxEdKcFZRQYysDmuHJKGXuVFCK1h3iYKMpFaGuWQVZUgTC1zmww9s9YYLghUAw",
  "key24": "2d8g1Y4UP3pewRJPiSN7Nz5ukztUyW4Pm4MDTU4i9duQ5Jhv24STSPEcyFiBNuXSXGzRnYNGw9ARyiu5VvWMbzPs",
  "key25": "724Jabh4iuk6DgV1CYHKjv6V1u6KAytPRH4kyNkUx5na8tridoK2C5SvFpi67qNMcYscvN4rvD2U8s9vMBjuRgK",
  "key26": "k2xuNyPEWadCiKCfhiaF36YVD22dAHVuvAW6fTV34o1zj1NBfjDfRKFLGMwJRVAc2fZ3wwE8jCBxyQ64sWRqCcg",
  "key27": "5j3Vn6g6jnoQrxv4WGph3sbRj5jCpD88MjP65W55QejmiNTDG2UesSsBeMQ7fi1mXE5evXyZXZbURqXrhCMe9v96",
  "key28": "36LKsY3CSoEQhuAFfUu65PgJisnwtF7fTaqmbfeASXYCqYVdvsb7fW8vDM9k3bpeAs7HVm87ZYwrx5zHobCtJxuB",
  "key29": "2RDDBaC4k6yyvhgLNFUfoogKtgqoEmn4FNgyeGFsQW8CzAmQ4fzPCxpWBjcRmbL1XNrPU1xKpxfL9WcCSbCFHm3t",
  "key30": "4M1mrqNy1GJgh4xpsG7VyJuywnpENfFKXavYdQF73RwNyoeyTBhKU8uZskpRQssi8Gqis9tCMDab3uXpWo9bZBw3",
  "key31": "wTfbe3wPTYJYvVvx9yVKJpEC1HPaXqiqZTs86g7ya895ABMgYwqxhQTdkhwjQoM9VLxTYspWUT3e3Egj2ruYxAf",
  "key32": "3MieRoBm2QaKLS72HsfuzA853Q7GFzPB3gpQX4hq6rXqHwFijqS6APJD5GTLZZUpE8xzBwoCbKmfuide72wM2BGc",
  "key33": "4ue7rrYZR7VMm39Jv9W2GjQVR9Bbek9KvuCKhE1KgTYjfMkH5XsxPKCx4b3kGxWkneNoPZpDT17BBvVMd91ZaPUq",
  "key34": "4VJ9gbvVKtQxEdS7yTFuuyv4jndksiTUTJHABhcEa88ixden6TmonodLEVLJZPxHk5d7s3mhpjDtNraPnhGqVmKg",
  "key35": "2oTA3nj9JHmJSmahfDc87BZQbgbXDaxVuqtjAhtFbhkpTSHKDWDh6hWsWyjWtJZ3tkzdG3Kf6cYuRh8eDE4ofa37"
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
