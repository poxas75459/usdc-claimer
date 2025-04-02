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
    "3VvypZV3siHYZR7MqyQ9RzuE3rFogXFbtVZUMemGdeKTok6Urdh5ZiVJRC2HMmevpQ68Wf2A7d1xPWVyLxpcj1nv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g2hXSeGCeZiK7fqeydfcmY8hLPbxownzo1BeY5DZzm4BVwPBjJoQRZ9ABT8GTNRt4NTfy64iSZgB94QBZASLgpf",
  "key1": "2reTdGpMaQqpi4uDyiz7HvpMEMDditELARSUMPFhepkXgbyDcgHcueLci9hVytSnGTXKacdXNwZS2SZzrhet7xJx",
  "key2": "2RYEFkUxRsc6owLNWAke7ZNfdShUfUd3nEGZm6Jx3BpaSGgTGaSusBhdtcqV6gQHc54rTUiR1JEpcKfggGTSNLdf",
  "key3": "3jUDUkkJFv1xN3ujL9XwbGLqydY9LrqSK5bQw7eaDikr7o1AsXx4nCjg5kDyxjC9DBA6BTRx44Ud7hiFLog64VJ2",
  "key4": "i3ibFXgqzsPpN5yUaN6mTWBJJg2KFxo64t3QR5Edw3e6zTWbUdQLEARhm1zF7krCyEKakoQr4rujFR1WANABvwa",
  "key5": "2XMJYvxZtJZAUrDG62KWV7zacMQu5DqzkraCJVP63bMBfVxKrh39SMGwZqzv4hzVSihw5Biqo9n2GgJpoFQPKZVB",
  "key6": "3ZwDVEUGNsrAoJzPvcWg1Pm8c7btrSjuN45BpKGhimhaHa47Qr8mU9gja8FKV7zDwRa5aAH23JeXzKQxgvMbV9UJ",
  "key7": "2QGjABsgffzWdsLRnKkgfs3Ybggd3Ft6TCVqsvUcAExuPnXugdEmV3S7BxEmccoVHHFh5FSMcCLdXfkAVZHQedfF",
  "key8": "57GbiPnv9vNa9W9XYpD8NESXYZPYfrw6zckD79ytxe1N82WXCLZY22FW37DDq9uHtWeSsVZMZrbaezyWrdRM1C6k",
  "key9": "28Cisf9J73DCgZGFCRAwcNX6Ri8nM2FiZZgqrYKmRqS2XtnSJ2zHPaKZ1nXf5HDW7wgCCq5eutT2wBcYAHNpn6B6",
  "key10": "3ymJhRM1QN6xsgrnBr3B3byHmG5kMHYAHM6KYrRwv8Vcamd1N8BATk7Eo8k5QBNtC3eWdXXQ9qFYhPH2brfTGGg4",
  "key11": "ptREjazrCcfAAnF5okMhJia9PwbvQT2Zt9cbstcjmhdeiZYHzoez6p7MjxW2ozExNY4rb32mCmL2E64uWYFUNq5",
  "key12": "2CpJ6s5VUhmdrSxGRRoh9bnmchaXiUBdnEyymNPUxsYCVgFsjMLNgJTbrqXnGDN5Dg2Z3w8ovSqj21niyyGmhZgC",
  "key13": "5ZLrS7eMb5m4jHVxJ75SZ9sV2itUGusCmmF16qJzjAUss7B9LiuSiLeneEZbdGT8c4vY1xS37H8nCb5Rs4MvEyVz",
  "key14": "5ofZiyvFeTGqxsGNodZD7CDS2aTQXhAw7DN5WNZo7q5Ly8FRWotmztnRKPb3iyn3ZftJrYaz3zCVFp9vy8VLjLQ9",
  "key15": "4ZD9V1FvKe8iEk71Un55qxeaf6GDKgDrhNVad3qkTWiC5F7dEndi7tMBGjnFUaeiTiF57nVpzrpsDBzLZC5W5Kwy",
  "key16": "2ux3LpLeG9jeYDx9rwM7daCA1guMFr5m9KfKwL1bN3MqYpn9vPb7FsDriNCS1LztVJvsKd29LCQQB7uwTxmR1sgV",
  "key17": "2cqVWrPo4PR11kzNY8vJ2Td5SWer9a6fvoy2H6Vf5uLcYymFjjkUZLzD7QthUsji5FjsQyUU2ickym327Y5tzoxw",
  "key18": "3766baCwGeyX7vkTg2zpFpJCrVfsL3qScUA7hohmR2oDXK6ueu6Hx8RUGQv7mLHasDxNm5FGhv3aGvYgNsR3Fecq",
  "key19": "5cnkBuu3EFr5cPqWaSkHbik16XZZQjyxp9kHrgMuWbzad4oSjSgGmTDBQawuPs78WYqYsGhB9idgxyrC1FfWse8s",
  "key20": "33dAhVwoo5vo3nuKeh3zjEeWkAaVNi5fu7EPa1NrLTD233sHqocssos9BeJs9EKjA9oCEyizw7ZyGNw5ZTQsqpLu",
  "key21": "3EQ9cUSwWHu7JQgxWuSBWJy2mSp7v58J6NDEQHHG2LCVS5Ev4KQtcayQ7oHs3ZbTpWUfQmTrc7haq4mCQVpBbZXi",
  "key22": "2BRCvCzqL1cyEcfsYo9MnAUnNHFRMDGkyebXyMUghmLuPJ8P24BpVBqkdY7vwFzfQow6u6JJxUY7oGSLUfPSjzNX",
  "key23": "2UmKwwGV2HKZo4WHQHukXxQ2AVAznSEKNRx2qVW1ezPvdNX43WYWAVbKrMUbeP4Zw7JpYNeGE4ohgkN4utR1xCkq",
  "key24": "FNvBHVWsNR5gYupa1fCQUQsvabmSQTu2PT4u5zq2BH3iSE9Ja55tzjSWY9kYFfiWARzqgycbZ1KBZw9JQ3CaMNH",
  "key25": "PuM2prMMwWEJcpq9y5SnytY6k7SH6MfooLbuGNMwC5AS5U9cHnLf6TXRJxMXxenCTH4HUi8ZMNmgHZNMXvFcZWj",
  "key26": "4fbxy82xY2fBey2iSqR3TSyjmUJBNmTGsp4NwYXPspy32yb3Vsr6uXBAfZ1meq3BQtfCMxhZiX1KZNEmGThEpxhD",
  "key27": "3LkJoog4xQfembVC1nU3nP1ujZeTCQ49rFDiXQNZBjbpGDJ4nqKhMxCHpx671Ti9qzxGr9Tpobep1EesNFZtb1Ra",
  "key28": "59SeHRBRXs5EoJLTqSPdqhKJ1cPGAGxktHGtkTZHoJmzqLz3RbxuVhgiEWnuHKvKyLziLqAuFgczCr4iacuGaJ6r",
  "key29": "5B7CvjJAk5eMso7ZXipKM68b3xVEnsYgdhZxo7EaY2YA5R61HMntg52YrYoYcF3JhRJQuMh3ZdyAbJKZDTfpmxby",
  "key30": "x3HrPkg5PUKr3ASsTP8vU4LfU9JPigDFNuAeFNro36G1XGfXMynngzbbWETo8Vatr3i2L4Kuo7oZVZ52FjmK1Vr",
  "key31": "5bYfsPVFHzchNEVUEaJ6D8gCDoqNGxHzvJCQMB8GSf1tRX3HUFuTihcdRsMNBuRcLt41hgCDBpQGmonFpxYtxkKY",
  "key32": "3y1GNwEWW2pVd4mc8Dq1qcccTWn8zH9fHBqbAtvaD4KKSqpvJrLmBTSiHLDUjAqa6QZGv7zWZLtKv2hs7uHnyces",
  "key33": "31LV5NnhMRT3PAsgGbFuBBmf6nddkeS4zXLY2nJBzhZrky5oiopmZwb6oX3zsPN37F3YBrCP7K6xTtz4yk1rMkCG",
  "key34": "QXHvobafAaBhTAxZ1xTYR6ZZzgNK2fThWo1yuiPmxgRQtcwL7eLeY3SSALNqoRK5j5uFGvXoB75YDNVJkbyvFCU",
  "key35": "5uTvnKWJwcq6G8Zek9jooahTqXeE9zbB6FDAsw9Av5g691iBgWH6UojAZKWyGZmshFGvCw65L7u9CwGDeb9M1oM7",
  "key36": "RHUGaSKXpJ6gixrTDvNAGNmz82UuRpN75RpExjoakkRqdqmKLqubxJv4amdhaTRnYKB1v7gEjq8BfZGoKdRwJcR",
  "key37": "2t5TX1DmmxtmDxnyGxY6JS1agGUHkRFQe2BcShaEpq1uYSMUcQi6dU23gjaxUDCiLAwWkpCvCsZEVkVYC8sXrWve",
  "key38": "dGVkDDMGs96XxVFJxKafj7sU64PWPpDLVrxybJSbTaa3vubgvmLqEbtx2gbekHe5LkpTAU6592Jrwubwu9tHiYM",
  "key39": "5fdd5d4fZCFVCpyuV1vexMxNo2PAjMFRbry5gpprEtvHwuZv7H9WXWgJFaSDheXUkeJTVqT1defEoTg1wNnH6XSL",
  "key40": "4i13po9vumuJAgG61jMmNPS5JBrZVJ4Y7rZHVkAziHPmCQzsBWierXGGAN9Z9aRcHNgVbf1x8AkGcyrhLpKRasas",
  "key41": "28V16HPLf8EjBncH7Udqqq9zbaLh1Rb3pdUwBsda8T1ijBRKJUWbeCSY45JWLDryryTaxzku8MohYkxWSNymLssN",
  "key42": "5nj7Jk2UyrQwU5Sjz3k3jiDfRmDNkSwYGgXbksSaPeKiYrjWfJLTgWwhCbK2a7TECFBkP75uGf9WoBTHQh4am8dz",
  "key43": "AtW4ienK2cmnq7rmqVGMCYCqVjGdWVS3SoEGaC9iSfVQW7YxLL24f7Lcx5ScbRHs7E6HSM3XJ4n4Gub3BC61QJ6",
  "key44": "3t8iE2CQBxnDTnpnWbGemsYu481WXy1xyUXC7gLJ4ttTYzBkuceshaVvstpirJRR7JxuNb7cW5iPyB6coEEmn83E",
  "key45": "5Lee4Vzb4YduWnWmqiqTWV2bTKdRwksKbhH85hdLTRGdPXLaU7JySaLGeoTLRft6k9JhkfLf9RUqQp9LpetaUHAS"
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
