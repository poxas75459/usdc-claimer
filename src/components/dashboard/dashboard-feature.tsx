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
    "62zYv5NFHFTKD5iMsY7HAnpeJRDTmETDanAsSfjcpAJNXbz26oLpHVjcxMUgJiXh7n62x3jTpMwLmirhpjktyvaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EzeMGbN1EH618HUbF1mP4Jitd2WnbQRpLpsGFjcX8txNVNs89pRHbN4qeoZnE9CVH8HqjJnfqdwvQZSLESbtM1A",
  "key1": "5F5iWazrrUtYsVvDNFHUXR5f2AoiT5TPDneDV1kojdp34pu12dxNEkamdsRbsFAkHMN6kDfxPGz6Z8bUugdfXLjT",
  "key2": "5phgQVciaJeExNUi7njKnyrmyVY9VviYrAbKbWXcChCWHD2pYdYnjLfTtxNSfck7PEjV454fvkep2Qhkx2DiMXbF",
  "key3": "2jnFmy7fJCBUTLnmBinWk8x6WapXtbVUHgAQQeKacideURUwTS8BCUjy1HTSX2QhnyJ5zjqL1TW3zeLaAMc12fz2",
  "key4": "4bXHiAaJRMN4fXV1r16pCUdZP1418TegUgPTWESxjdBZxYy7pbJkYTXD3HsCAFqpHHdVKheNSm68Dvh6npopfDSB",
  "key5": "4TbyCXng93YPZf76sPrcZgCpnZVaV6oi72WTep6Z8jkwH6dHiWphGd2PutaHZkkZGjNYQU4uckP5CewcSSwG19pg",
  "key6": "dxRLdYvetWHquWrTNUZ5jcA3NYVCAqywzrUZpRHWRMPASJC3ZtaJAXX26d8jFGGwZMRwbD9qKFwQG8AXjFAygr4",
  "key7": "4pRqfiRt2kWEsnsYCeZ4wzNSonhCF18G47hwpYP5azsvon9by5AhBn7bf54QA5JMGVZ6jZRDYvoZP5Y8Hb84x3No",
  "key8": "5TmeZAonnEHNNgbAauRfihsZa47AJpWio6vr2Xtt1BhK8xA5s2oWdcQtXLn1S4SZFBHxCtHVq9VrJhKgwKgTLzzj",
  "key9": "3LWXJX8LmxnLEE7knftcgvQEhNSE47HdVHFgZSt2sGFnwgUATbHq5Nuw19YZRC9LH1RgSjQLJbpq98k9iyJPdQNM",
  "key10": "2TuqUnD3MqjEh9oDGYMgfZxuZzgHFFAK22UgmRNMP9P3j5NKAGnVvdtkpjGHDRZhYmhY9YyQv2Fhs92c9QSFcmXD",
  "key11": "3fTiWpsLNnuJRTr5nvgUzp3wXDNdLzfVRN3aiLKzK2UpywVPstbwqdzeLvSuekKSibym4XuubGUtd46Yo88BausB",
  "key12": "afqzWZB5vCShL28Ez3AGP2ugWH6Q9rMN5gWCBu99nsbfVoY4SBoLxvMjjf4R45gusvGjLoa5vzEpA9Vc44z93xi",
  "key13": "5k1Tt7xihFgpPVGETktQ1FwmyUpQLcZ4YXQcuSvUiFbtXD9EzqtDpobZGVfim8zkaieK3c9aAnBDdgNygF6SquVq",
  "key14": "4Lj9Sy4L4p4EiXryBZXUjafDaePtd9tS69foUHG2RSPLaYBv2gxUKXtHzzKrGR5ub27G78QhLb3HTLnoT6mFGj6B",
  "key15": "8MFvoWPnXk6yoBLayP7FjZKDonfCmhEGkVWRrbfCq44DYnz86JJfvNQ8dTyHRk9Py1fjcBzZSASVmUhn8LqzDcc",
  "key16": "f8Wya8jxdMPhvJwkzV3FYMvJR26MrNtNUSai7aoMoEC9uFVgVbjkq6ug5CwzU6akfBxmqBP5QbxhMicJo1qyvhw",
  "key17": "2acAUseBD5uMTSoLqxGDsBjgPRUFKRAiC2fQzaR8SdKw5T4nNu2SSzsThdWixe3HF3baHETQ8BWuPFr338DksyQH",
  "key18": "643Pn4dH464Lj8m11yudoxiiim4JphGn1Nzj8zwegjxkd3Dz6KGvvXA7wvcrFULK4ZHtbq5zXzdAisZpFzej7sSJ",
  "key19": "miZ7ZK8UQS7ybudY7KSG6CUFQHnQxJC8kE8EtTnTkorZyvApzzoJLwibnKYKzcNxtUomCa1HAkJuan1tsim7hjL",
  "key20": "RvutVnpS2HfpVsutkq1EQtT971eJna3Jm5N4eXiHYmUDerdtTx3iWyQY7zJJKs1qXqtCeR8KMtMGttUez3PVRBi",
  "key21": "Uqa6T7Mfibx2xYKvKJTnCxmHpnEYtLQVE5i2TGrKB4GdVYp5PGuvifA37j9sXuKvQd2FU2cpDbjYUp77mYSxkDj",
  "key22": "27xRzCHy4DZ3EznmMrdwmbd6vCPSwUXbcV9KxWhuVR7gXbHBFWN6HoFMMfA9wYhVdimwzNK6fo54fSofgvudzHqx",
  "key23": "VHBfHU5ynTgm8q6y6qevZvybTcDz9BrdtXS5Li3XwuF7tyL85p6PsN8QfVRS1MU3S18GYue3E217Pxy7Fbg2k9k",
  "key24": "559mdWkAtoCNM1EwoG4MAJAXG4KrZeahkA1Qjj3PYG865u4tmw3DRQKz5rA8XLiM5SfmmVB4foN3ELqACgq77P8M",
  "key25": "49cqyDMhYzeJGQLLa69DPjEiBnoSya2SV1Ww261mf8RTY87FyZnD1zWtK9GTLnUKyxSfdbCRdaUXK7Epnk4wKAgx",
  "key26": "2F3GM3PmWkumEHJTB7qvssfPu4Q7Ps4R7hZWfiNCmRoFXHBeyCchX4YRgHWBBvAkCyUqFMV23bDwDzv3mKfw5L7n",
  "key27": "8jguEDZ1KFN6AtDCm6qjkHYnMs2LVzeAdmCJ2NdPaQXdPXEqrrnYPUUxwswTM2VMDfxXfu3pcK4jY6rjeJhcGaH",
  "key28": "5CeWer89yX7uqDY4sVAcETeVVLjUJTMEdYdoUXWLg59uhTnAYELPYqj3jpJEfVGPxDcrZUxDJHhGzTF8tmaDX2Kc",
  "key29": "24nc76mfWWUUFWb59ZUMoKQ3RD58hvKBMxERyWGxf2P8C4EcGNWpESPxikgw6aAvxF1MfH7fv7og4nA62fWGWoEG",
  "key30": "2NwyxWdquJhwErvPvtR38H7dYtoV5gkKeFyBLvNxLzA8xxSgvEAmkyMG9M6piYZNxJEerkffNiZQd8mcnkWmQHgy",
  "key31": "4VDfLHB3qGSbunpyUp1kgLjoXudECyKmQjLvnwLQ9miUVQUzgT5CJXi8vhGTLNU13Ru9hBgpXvWycfzL5o4FYWkC",
  "key32": "2u1C9kdTYwfPKFBbzwwM75jenC5PXpDoQye9h34Zz64LfDeVJGNSiv3EFWX57K1sTpG2tLFzC312iAJ9PqigRZXx",
  "key33": "xMfi6CSJxCWiecLRBEJyNu4HQPWesyNyPjPoUb3HFH5hEk2WSv1Wt8Mbi12UctrRCLEogHueshCkK3iLZfbGp7x",
  "key34": "4spuTwhYH8qyzPX3pj833LYugCQ53PReuwn24vvYkxeL17WoFTPZmbfkdvDCM9sLk9VYvsd8whpu33HeKdZ4xFRD",
  "key35": "26YBTxon5w2mj59RS9GiHrAEyWVbzBSj8kYUjGsGGcQWtpnLUQRsBWbUeUw4z3ScpPz8TUu7RZHZMWFwMDHEbL5Y",
  "key36": "3sECJVLUQWncPE8ZwJdoyWneE8kdiKWy79kEWrxYQHBhWa3J7WR8hwP5Uq2W3VXaQFKerUQg7Y4kSXejtKWT145J",
  "key37": "67khr89m3KNtnPcLE9bEQeB9u7iNnUTwmFtZ5K9NGbQC7WBHQop8tWZ9r86CAZDfvWZkkqn69awpyymEiJq2d31F",
  "key38": "6BDVbPXab4VGdjgCYcXNpzC8L6JmkmeippoWF1BtLdPirHo2oKhHvyf9w1jkpyjqA96jbc27RSMm3AUa7z4k2EM"
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
