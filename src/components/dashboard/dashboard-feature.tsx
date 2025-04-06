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
    "4Ufm7iUT82aCyq8yC2rPeVmDVgkRWFouDmntZ8fDJEEssax8BKpBm4UiUWsN8UketApFgpkkmDVDLUe8VKMesPEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h45aVqRhas4uqfmrZZhEqmgPjNcWapxn7oLJQjyLTLrAHRi5uqBntvYVDYhqRQrsSw4fC9C4f3PcbUSL9j446Rm",
  "key1": "2mYw9sbf4VMbMraadMiFwmiatayW92Lw8XztudPYWGVu9RtTXVBzTUoEUpN28jvbyXKM82H7cPymhTUY5LKpxhRK",
  "key2": "3N6mJYRaMd5dGf33aoFK5DopXpNoY3afh6TseoV24AUBQKdkX7R6emWfUvtdsvQs4HP3cHFsr6UtWDsD6HLNNVXV",
  "key3": "3vTsaf7TuyVExPQGkwC97vXxaoYNANkoG25BG78viWJoDfCH3xqcfhnPSi5EVjvMUbXxEJBziG1eGmhg4cFiSS5U",
  "key4": "2Hq8jz2xkwCwSy1DQo798ouewAdnyoA7uCUTcnrp2XP6XDmWYTqV5BoB7grmYU91xf8J46izhNN3fz14AFvrLNVo",
  "key5": "HqLg6UBzkx2FwZpvVbsDKfMGCZQtwjeisuXZuifk2DpHiVTsYF1boJ4LcqQU6Uy3qT4Aum18LVcoZZypHTpzSL7",
  "key6": "4PPGrSFH2KdDydLJ9qTVr9eidfSrPE3NWpqCW7meP8tcedXTqGCx3UGK6kfPhnnDWGMF7a58B7BeHNPGRKFG4CRe",
  "key7": "5jmKAnvfRmTHmGTpogWosbhB6wBvXU4LtqTTnxC4UKCzABbHUhLcp2qvmHToKiauiK9gcKBuS4ceeAr57UAQh34B",
  "key8": "4GtDzT5ZwJx7THvaLQQvkjWP1Pob7QV1y8DCaKUsCouD8QVkxYDpKcnaTVepdxLtJb1coDpaWAn1bL9YcHg3Eebt",
  "key9": "5nd2TkMNgqAZVdcJyqME3qAdrEUH1Yy5RWPxvK33sDA5oBKCiyEXFges7iaGJK9rN8XiELFYoksnyUWF9KihdQHc",
  "key10": "ZeX8ViVscwMuAt3HJWEgorvt9GjBJjMDqCvVRjxygaYdSzmnwcy8haBQiJxqc7GmQ4dxQWPQPsAtQ7Ky5p9435k",
  "key11": "32VRd9nzL4TcG4rwqYHy4pQF3aUowBi1ZurpKG1JpQkXhcT675UNL2NyEqadjTY7fZXyYMbFLZKxpXzhw8tAkXye",
  "key12": "32o2GuLfyJoztK88uPxQe524zneHScEqvHr9FBKpYJiusFDEntRkxvcN92rtreqF2JKp88CRFsqWREZZkciSZngg",
  "key13": "5hRCroEmqZdkMpquXJWpj6CLCudBXsR9Say5hKMNLMhxRYkH2GE4XvkDPGrH9xnDSByQRadvd8LKwuf9wwugUyh6",
  "key14": "2FTjQD1zQqJDvrQy88JyeqSLgzJwq5wpT55rBPZuzEySNWVKkvnUMtHXrWFzz6p6bRrBVEw1xdyTeV8rMEoa9kMD",
  "key15": "3nZdiLDD2SQqfvzNtsdsMsenyPhafZPDutagDHYF7bkmCvsHb4ZMLzXhWfU58CrrRxP1Mo9MfVNgPfAQGmiD6huY",
  "key16": "4Rtxi4VojppM63XKsE9vi3vsUkGJbnzvK82W5AAK5oMBjeuh6495muriNQpyUJiN1DHa3SQJM2vo4tNiF2cSK3u4",
  "key17": "3iGY3wjPAnjV3kTU6PyF4m453YanTDvHpsq6m5T9gvHfrT8ywtdJ4kEHEEdZJ4D7jREANrwkUunnJCoGE8yvXfai",
  "key18": "J9WmDersbhqRhZgi5rTLDUYKNEaHhMH13udNqZPzYv23nsXVkKBuLajvbkwkfKW9N3uPhf5B7aQZKutY15qztdk",
  "key19": "GTggGC6b5f3Q3qythqStwsAEjdDmewJBLXJM3h6iSASNW94L2fVYRMDgfygnZjTdSWsBXdgkeMykiuw5ZMaULdd",
  "key20": "2KLHxTQirYjXDn4hpZbSdncV2MMaoCNuB1RXkh97MGmwYEkw9SsuYUfkj7tyPRLwRiyQTa2YRMBpx1kc4ZKCUHqY",
  "key21": "4QMgS9R2KiZ2AsUGq65rY1udseHUZoxaZHczGB9Egf5cohHiCTw8Zkva7w1ngNRYMoFC8vqqLFyn1JenH1u5YrZ6",
  "key22": "5o1e24MAdaUGhvm1eQdXZx7RBG1PUs43HLo3naXZyY74J1kjEz9vYxdmP6YsxM2WMQeNLjuCeK6k4B2tbBtagVQN",
  "key23": "4vjvHbpJpFc5XQc8zxki1AnXNunGxCJPTCZ52hYcjYsY2GLxEFmmshhkciNrpvj74XUq3hRijEy4RW345tbrXroR",
  "key24": "NCAGdQZvxwhKnu8xhumyRbZTzB6QzQXhDeKLYudKgzT8GP2VChw9hPoJ3dNSBQngndHr8ANnZgdBKbQBAW67EJe",
  "key25": "wNNLyRMehExagDRy1Cih7rLmVJerWvRKzi5NXCg8rHbLCFayMigp7rxjxtVHqeS2QxCAUyT2L5ZdMTWvArTo6fV",
  "key26": "28yT9v6mJgoJLQGTQzNEEnsskspWzuEYEpZFuQphjYYYSSi1ju69ksrXfSRBRyeAXC5tGCaJ9hFokWSKAmsXoz3H",
  "key27": "8bJDmK1anML85JT1u9k1YnKSutP3jNEi8zbLRZcKEXn7zKQbZZR3HVmt5xhVaEv42ZB4T9yM1W1orHThkXnnoay",
  "key28": "432BgkjXSVLa1vnyycDbMFN1v8BbD9zbkpzd1rUqztNxyV6v1VoFiVJRzneWm1hdjGB3feSRwhEGDJ4X8xP3HSh9",
  "key29": "51Y8mhwZns6mHVV3qeU9LrX16vt9WYLuz5PRF2jeQgyF2XUXvr19kC7dw2mfm4je96RnHmNiXiz4rtbgLg56jfsE",
  "key30": "4ofk37pxowZxbBcmdrkYwxZ6fjWA776ZBqJ3Z7WVMJnRXhNb9NnDREFmEmQNewEVNSjncQntbRByqpdWQvXvwUE8",
  "key31": "2zE7FH25L6JpkKA1jPZMx29ycPvYRABrx2hSpyaeH1bxdYe121MdSg1XQhskRbAHJLFm7dqgQUaevHKTvzpWuYxL",
  "key32": "2ALhDZzgNgiSNMga6FRMDGzCaYNGE1k613CvNj7koX8ZVCHQVTeVfvSNLzDfReNnx5nUqkaBhhb8Ysftoe1S4Vrh",
  "key33": "2jYp2e3jCPozjtovW6C1YP2b2cTgD15ANd4pd7wf35T9s8BDesv676LjKzvUtuvuyZnnsnDNipMcVLgZM7pdvUWv",
  "key34": "4LFVMmjXFFCumdbuiTuAMXXVTRND8nZZ2HanyZHVJQ1PHaVLmUdN4h3jKn1wfa3aXJsL3WT4AheBwdYoqPJ1UfWY",
  "key35": "1j8DBHgsLJCWi4cvBQHZN7ePb9FiFJ3qx9BEQ22xrj2g9ncndDkXn7XbiR8pFQVYuWvut5uQuryhqWpWxZBeG8m",
  "key36": "61wjSEKfS7nR2TBtVfvD44CUacYwZKZ4fWzwwnXpJbPvF7Hurx5y4sPqeLDgZAA65DKB6kENDsDT3SpwsynMbB1c",
  "key37": "58gKW9fvY3bi5Hyzw41A5ynZ5P4QbveC2zWRiirm2g86WpTZSjtdr2MWsHrqXL4DggpGAZbvMseiZ3pLcergWvhU",
  "key38": "5V52Y4yeKsiZKEaY3YdPm4xVnP8SRzuugBtnFZHKmjfsNBbbDQqBR75BB1ASZJasYF6dyexQKKkN6UDpzrkA4PbF",
  "key39": "57zNiDjSVE6uWzFUSmgybv3Xu81ZwfcSUPjLsHQzjW9ka2VL7es5uTyLyMj6EjzmfyuJqRv9v65W2WcA4uSoaqH9",
  "key40": "4wmT7vMByevVzioAA9wsC1vLzCiNqVXQg3x2ChBwqj9rMt7W9dsayrXYW7gqNCTFGMcGaGPQdFqHbhPNvzkstoLh"
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
