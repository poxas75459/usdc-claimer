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
    "5sB5L8x4Lnggg63iewd2VYPP8ydXZQot1SQMESSSyoGrTgFJpczZpVMQM6bWBgEReBZEXYS9N9L39wGdbTUqb5VX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4drXcvpEw76JqMdPp7nQHAPacbXQMk6y6r1FvNazJLUA7eqAfgaAfGBoKtMhJGU6FdH9ZTh82YBZcXTSYg3tRHou",
  "key1": "3c6SjwKMAsgTvdDUPo8Vp2rgivausAvjM2Tb2yPvJYd4w8UfMUqmGQXsmssuQ3Xowm9fFR3zZQ6pMtJPxvxwCayE",
  "key2": "5zEskzX9sSso2fcQUv4Kdpv23pUnAjurezqE3D9mdSLkvrYXSCuJ5HrVy1JJT4MARAkkiEFFzTpXuEQfr33R7uUT",
  "key3": "2YkVsaE12qwfBrST8RqMq8DHi3UAoXCZ15vPoSCiNFDHYPnEhUTSQxBjz8zE93XDQvG5J3hSadZVBH6Jvz3tFRxJ",
  "key4": "5eaSg3mumWFpLvtd82rD2mVMTmF3ajfjFtd42E1hBfVSrnaez6NYBPN5Rc6gW5LRTrBJkzjwk2AT1py9j7cay5Fi",
  "key5": "59YU55bv2rfJ8h3RVd5aWDgsJxcUJAb38YnC473k4vxv8DahY4utJghowx9Vj76fMw5jRERSdL1d5Su6Rsj3DAFz",
  "key6": "3wcJdQiQyP8oGGwUdPS5srBH8xHcJoBXknvudusbT7BytZkctbMmqEKH7tPZg9XotEiiBSzhJVHv7JbqPZq2ZLt6",
  "key7": "xMRBJmdjbUwm7Jf6Zi1qr1jZehY44D1uwZKz4Nps3xCU6P9cHeNu7wWpxQDFeCpsQ6ubQnvVPRpxD1HUPthE5ob",
  "key8": "2aNEfPm4izVjegvGpJa1Vovo3nLE2nEExguVH9jurcSdSav91tzLiWhkDBQ9jmw9qMiML71PVPS59AcV4FwQ9H2s",
  "key9": "bUWQtpxZT2DaK7eZhZ7Th2RGGD7wWMjGCgMg7P58PVmzGYb1UzzuvTaTQfS7SLejvSnHY9mTCzTaHefQRxV6fFQ",
  "key10": "4hqLykNMXBXPt9csFqGDo5wvf5Aeaze9Jpf9FiBA8XvcyiHBUyiZNJxWE1kBD1tM4yiBqruYsNyVrDo487Mr1ni2",
  "key11": "xAEZ7QswgCzuDdL8DNor3Yptp1j2xKwm4zz4K1ABndTM5b4PrWNkEyzMaKbMzRC6DtHX5q21P9NbdbFmPkiTuEB",
  "key12": "5dGLHBpaHkmgmCHKFNvRqaypge76i3mTyUZj8RSCtfGKGShvaePikTpZfH51Wi5v81NtTFXem67aAFEoVz1sti3D",
  "key13": "4kqVXsS27X9TdqwFkW4hGSbYF5xwWmFzzTFwLpsQY51uTqsUK8iTqJmSd8nnr6QrEbk5DLvbGgtp5koruKQi87tj",
  "key14": "8p3JkR3ojYyeNfNAXagDPv7gVREN9pYipFDUqat3N44dKynyYDrZc5qBPPG4JTNo8EsZTbQTu6dZQ7mC2kiBsbC",
  "key15": "34JxjCWj2D4ufUTvN4p7oZJ94bn5XE3eV1ZVhP6A29Jm84tU12sDPX2ssZxMtE5sabQdEsZyWv7XB8tBt1KrstFs",
  "key16": "3qHmDp21Wm9P6ZoDvB2doU59a2m6Go3mif64VfUGzq9zNZ3Ny8EPpmDmjPk7ELzmCn6DhqMZkjABjJfT8Lr9TZLx",
  "key17": "fsSAAZmELoYRUYNAjUQtTA9xQ7msy63iRB1YTXUTS1EmvyaUP2LesXAuMLrxxsnzybAK4dAgu2nWR7QmPcyKAam",
  "key18": "259xFwDAybDsjrvqSVzoxjH7s7quYVPRB3VQU9rLnQZHrYNtuQvT5ASAuHpte6YGhbx5FBzr7qKBm1Tq6ycRi7AT",
  "key19": "f9Pt7HvNcCzorLLFFd8BA5jZxDd2D2QSzb6oece5ccp3XHJVLwpRuSsUdt8jjq2E4hgDnm6LGJo3QFaeWRMnLUC",
  "key20": "2c1qwfZ66puA9CAXgAPBnW3RJ4uEMJC39SYZWnQfDBDX25dBUVwjbRGgf3u2m1xsMo1jZ85y1CGqsMcbeb51PrC",
  "key21": "ZFow1h3Tm7e7Bw5D5XU99jzSaFMmgiPYTgiZsFU6pgmxa8v98vGCP9LurSridjoVPu6mG3NxevKHgrysH7g4bgM",
  "key22": "2TWL7b12ZW5Yb5eZUUsjN2cFoG4qYM3t4QE2toxSSCqTDWC1mVyZj2AYQuZLq6LRHjpW9aqthLo9CHc9zr3tycSN",
  "key23": "2J9vB6Nx33BTX8ooQ9SL6KVuFK8JNvNi2XFCpqDXSXoSDQTjVVRG1QHt3nj6vs4oVkSggDkJxaN91ddxvfqhoUX3",
  "key24": "47y3Rp132MvLzGDkGaEM8BAiQKU653Aj73JoFXwQZqJWL35Mp8m2KeMopECDhY3fzydkRcsErXtKRnorfehN7Kfw",
  "key25": "2xAsuxjgyCXKVmcdq97PY7NDRiW3KwKfZyBadLRT78pnEhJDCrHUuU2DVwXcA1GoATTASa5aafiMUat7qCwG3QVp",
  "key26": "4LKMSjvT6sv4YLP9E622uZFjXGMWPFQ1r4ndsg32dRNXy3azsRHG6fizAXz3h8jEk7nzqR9sYkYHubaM8SRQpR6a",
  "key27": "4ucqRLwGppYa62au2A1EVqU5MT1RuMt2gageoWssc9e6mNPnatrFApnJ9w41Kiccen5KFMBRwwz1SekNPAaTkxnj",
  "key28": "2Y7jz4oKcVWVm8QNGYM7v133p9sMdmSMVFeLikroqp3JayDdDcPxMdAXGUKpn9PUuQxhmcutwR9HN3MsRyRpBVit",
  "key29": "2dHQXyvPf2dUbEzw2Ao9uTsUDNfiGytxqx9fgV6GCsXAnm5cp8km7uXuVsj8MbchzpfNsCdD3y3m8on4ZiVraHrJ",
  "key30": "46uCdLKJTFVnEg2oveJajE6QGXKi3fozbBUcWPzmfv7pTMGSWUcu4vasG6oKZt5GUcy6NPW6mZqmcpNLs3a1xTmi"
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
