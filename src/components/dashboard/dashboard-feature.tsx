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
    "5RBPR9PYBudXMxjqegbsytYXe2DM5Gm11TypXtSz5W4TevcmubgUfBoDTMjeQ64vsPWRqpRhRMnf2PMv2dJQXb2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37C5TpRZ4AtYfwY5csXDHQpKx9vaUb1HYXSZuf1JM5kkLBqyDZZ1aTSntRJYbQVnVYVFSizNiXABgA9KZ7ZawXb2",
  "key1": "2d4YL8yD6hpYd2uC9ZPeJMBjGHzXRPezWWFDouDXvjn6cFY7KTEvTHGb3Lct1b1ENg8viRGwkHgyeG4KxCDbPSMF",
  "key2": "4fsFCttwvY91PSCQjBUKcUDrAaS55ZYTPWWJUdwXfTB1C9vqH7DLqKKqj6YubmrCSAjBptDPdWcnYLpfXbmNQudi",
  "key3": "39XZFefVh8paznCQQvGwPoKNLzvsP7HQnn136ooHyu75PJvypEegMUKgqDa7DZXRAb8Nug7DtMJTF4UyTpLWTkcV",
  "key4": "3WdLJigA9RsjGCcm2jtYPE9mBFwN3hYasKD4mkhbv7pygzkp7AEJYBrpnSiAS95FQVvS5RMuB1A4BT6VJt7fG1rv",
  "key5": "45FXUFfa2yBQ4S71p4PNDK84ixGFgLkhyi9vCj3cofiFYk1BVqfAAU94cm2BRgkmnxHmEzavY1UcAJ2C7L1EMGYH",
  "key6": "2Sk7wCVLH3GP6d28VCLqD6uJTewPFwtL3yfFmf8ZTEpcQy9YxVY5qbr3tke1ku4Cj5ZBePHN9PRAtavfkJjQrwfV",
  "key7": "3V6WPjh3HyZVQwa3jyuxRaYFCaHZJBHEcCXELm2Y8JXpbyDG64KgUafczQThjXUPbuLzCo57Dbp2zore7ySoqqmU",
  "key8": "3kHLXoQ2wi6L7QYd1V4Nj6Gcbn8ym9JQ5BnfsMP72RXjP3Nz5kdbX37JAqxswYcM9xKbAogRtRajtDKUEruaymXY",
  "key9": "469tQRZXfB4Gw9pEpudsoJz5MjMvBbMtZRKNSrb1L6mFutAn6Pug8BoMs2AqRos8MxdBxyvAfqJ469ZUaL4DTU6m",
  "key10": "82NTqGjgCfVN4ane75WXB7DmgoJnHJXEyTkQGipejo74We3s4Rw7HK6PcG7ucA8omceg8eFmyjDRJDvDacAAbq2",
  "key11": "XEMYuViP6fHxhtHyK1ovfRVTjFBqXmzub8hs7sC9JKcaRJv1yqBhbiub9WMHKkBh4p25Js7WhXKaXAgctfP2XH7",
  "key12": "65XpaNU94e3RYkNUK9abxTeVFpPWa7TnK1bRrWPjZCqv8f7FJX6N3HqZTY7mLRpqqu2cmuG8fDZCi7iyP7dVFtBD",
  "key13": "61yvgLomnj7z7q8c4f1Aa7yRFDmM2J7DmcLxBdUUSiaqTSZebxND2xekuF6L64S7NpRb5Xhc1rKJv8njuwWq699i",
  "key14": "28cE7xod3UuCKT8y9Udmv6AVBshZyM6D92i8j7Kofua9npzrCuvKr3Zcj5bS7UgA8mq5nuLRRiTStXb4zcd259ho",
  "key15": "2fL1yVqC46HTU7jjaginZi34d51t56F3UZtgG1xXUBavRcN8Vk7T2nXVpQpoBhCV8Z1bEigatQf9W2Jf96NPVzBb",
  "key16": "C23qc9Z34FgKL8N926AgLRuyxTqzf4fdHYZ6eMGc6Duppmsz6CGwqJySWzyzJJ8MmvZXrhrXYQuA9X1MMsatYAD",
  "key17": "5Wb26yVV2ijMszo8bArqGvApoNhgGjxyRUo6f2wz9cgruyKis6ujoS4iZ6YmYp34FCFdKZtn4fY5CPg6spFRQFH",
  "key18": "3bvb6x1Y9zkV1yZwm4NXJitz998xPC4UT2ES3UexsPWBYgBp1y1pZZKNMkGkFVtzfhD34bHx8C77mQRgWkxJph5c",
  "key19": "53PuEZU6XxFsZhPzeYSz8G5a8wpnWdwkSgXKH3tsHiho8c23mxMGBkS7V5RTTWTJ7kDfoH9u2i1aRmxK9GW5nKod",
  "key20": "2MeDbrvZP6etffmuxvSnURKUAQq5tuxRgujBALgHEeogZ6dhHQVotGmrFNRsqtTZX3E2QGiBpD4RgH2FgmMTV8wr",
  "key21": "EQTYovbMQkJkrDYGiQS8R3R7QfHf5QDdyz3USsMf7kc981eWM1Yrn2EVCR6SHYAGaqBcSAHuMDzZrRqNt2DYfm4",
  "key22": "3E9Z5frESrbzgNnUcuYdxrZduajgbzZ1DGR1eHmVga2etSbvCMcno8kzKs7BF9xWuBHPD6FhxQS6da3qhnG6TF5s",
  "key23": "2TcGPPr3VjLfnyVHvwpeTcFrdypRxUMsd8y6yCN9muV5V1rQYGB6asAK49BDYTYBNwFT4ULdo698kgmmAdX2xVuL",
  "key24": "4nnKrDSEQNVu7CCg5fjRb7dNX9DiPFa2bsvhzN8A6VUpa98nKrBdK1PMTvMozSQ9FVtmmqnaMGhR6yxk2sYtmGKx",
  "key25": "ukuqatcnDyvyf597ne8GGRcyB3zvRvJ1DnAKdHzJKwTUGJDodtQEe8vMrphPexLqaPiNSpLkGtXFD3uLDWHhw8A",
  "key26": "57sQX8mk5h6mB92zS69HE4mQZGvQtgqpkWgEenWSYqhfC6rXhSfL11hrRFE2BkTDPUa3A2GvvHyqKSh6guZiucVr",
  "key27": "r4yAgTbPTgkx47joS5EokyEebENPptDLu81AqmUX88LhdXrhnpuqkkKUZCaN9TLypAoE7pfgeugSrhBvbCvgd7c",
  "key28": "4cFE9EBWxhdfnjdmD8Cx6b88GLwaDAry3ncHAW8vX8k78zynkWz8wgHKGYphcJCNYwPc3r2dJUyQfeYy9wRc5ymN",
  "key29": "55otX67KWqSNop5YQbcbBg73DYNimDtBUQy5N4fw254zLMkjecvvzECE9924XSJRRqLoVbg2HdbgGMPBfX5APBzC",
  "key30": "3zk16RCTreHjSVF2PSmjBzT9iBDgWvu8paZ7bAkYK4JUChixiZVGxG3UuZeUa2LkJbCzV6YitDp7Q7rWyQshndsr",
  "key31": "22f2xNHKf31gT6rK8JUVi4w21xXdq36BfGK1NETfoyJ7GJQNxBMG3k99fV6wLQg6XBek1mFLA3zXGuXtxhQ7j1XU",
  "key32": "612KJJWaA53XNFu6CU3KEKqeLEobJe5PE177jvHmc1bKGqXVrxFcF3EoqEbbsXkEe6WAPq2sDH2XZ1ZUqxz4ykXj",
  "key33": "2TNg2Ju15FnrvAXWvbE78NocE1ARG7Zgfju8UDGrFE8F9W9rdSxGiHfaXPeiV46QrBnk494zhkAVDmd96wyn6KmM",
  "key34": "3VRnQd5is9VaDB2u1p2ztePgs5yDx5pDwtoPZVtXhA4dAFSayB7ALirVJVfqcXyyjJ4p2UQKRn6j2UpAHmZvm4a5",
  "key35": "4xCxbuq95xihqjB6ccrbBnW6PFLKmPKRjKJt3xRvFXUAegY6swBprmVp5oXQv7xs2VbvTdJLxq1jthJXpD6jdZiP",
  "key36": "U8HQ37cmwF3Cyr8WKFhSTLUFgb6izwLiqG3xEfRfZymNhJMRbBQrCS1vLi6zUSYXpDc9CLFN8d42JUfwQ5diNdh",
  "key37": "2KV19tVRtVnuMyFTCSaUdNKbTvQnCXrshqdgPPtCy833kBZcXLu4quyaZYfnVPWEz1LkrbpThvqks4tLvJZauaX4",
  "key38": "4kGzgd6JxFu3WHm4bh4FjSXBbz9FKqipMCMNCZJpP7Y2NPnHwZ4h5asQEijS1cziSu5NrXwkUXP1cuTbN4fAZ6nq",
  "key39": "5zt4SQW8jysbjxTbfn9UP1zUPVzH84pxj1jTLDXvNFKLUhVeLbHDMJ7VtJTotfc279hbMmtYMy7Wj5xnxZwzqG4q"
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
