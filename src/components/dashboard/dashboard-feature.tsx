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
    "3RZavucpzCMBB5tZoQukgXmSNBJGEcF8Zr43QNWeuTbH7Dsc2vPumQmRgLZTrgGg1FgHAn7wGNX1i9yY21ofrw8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tLazpfS2VVqqNs1iDarDUobxU9TFuvmjv6onyzjf9yY6DUYq3p1kGBQYSUjMVPfLFFyDpn59mwgpZfoUrJonFWY",
  "key1": "3WCBKCwHm7Jcu4D9oRPVXcQPPe5m2gfCE15j7ZjLK96fxdRq9VoHPb8dMwHi6nUNdbV7xpPHFuMspqtFFcfeLW4Q",
  "key2": "1jm2by1EMwL6m7JGhjxHyvnASwX4UoAtPJPvTedrYZnFtHXi9SKY6aiownviAYJasTfh4WMv67QAieVhVtS12LM",
  "key3": "57VRuaGB451iKWjdLV2GGDqJsmn2qt6v2s5MvVEcpesSbiVkbPzjzADyuVgXAAxPBRxKNW7DJYrKtokv3XwnzrTo",
  "key4": "4NJDahFpYtjUqnB6vaPU8NXeQvkEg1GS2Mq2C3qJ8dtTmhdj7EiPjtvDBStt6Ygti6pyavSmFPkbj94ViCMztVBR",
  "key5": "xpTf9kpVKB7BsfrizpygAKbRWwLaf99z98msdQGBmgnBAXt3BJkjp1f28zADSXqjjHXkVxuYkBCCNpEXaMeWkPd",
  "key6": "2YzntZ3G7gryHFNajie6VhNTBJYmtqqKacxQcQxLACnEewzSWUbKfK7xZdEQJAzx8dTwo8yYUjP2LVfdS4JJicEA",
  "key7": "5tMfbmPj8CHy6ycV7erGB15S3tZRAcxSYB8FiWGngjX66F4DB6kZiA6CocdKN698gBqwffgNMiNDsuMrrBPR2W9M",
  "key8": "22E8Movu9ECnY51mEamwXWgsZsrenLHuyLsbjZ2JcQKC5SPJKbdpSLGDsoKm8SFVhwk8RqEmVxdwdMGibShADyCN",
  "key9": "5zsuVt9VKyRRcadsgzUkd3btvgUQ9rAmfXyJ543TRfHdD37Jm7rAe5QdgYd1gbjdaqtbyMKmj1WpEzFhXGMkHxcs",
  "key10": "3zzUJXUimU95r3fKgeDh5xqEbH2zgbhzc7JNQG4KgXTu7M7A3cXaPsPwQDPccrb86tgsA3GZGmSvfHLNsKvpSvt",
  "key11": "4EPVFbuiWyrVrQvxS9y97U8aw1x1to8vfqX54CN73fYT9uY3Jmc8q1R2uKePAHZUoKyioyF157nzrngc4GX4S4im",
  "key12": "J17D8CihtNGPqA9W6VkfpdqoAC5pWFRXfkCmopshdBfDzvjEpwfAWeNqTEYAC2ftYuLq262JSSizaA1DczCZ1Bh",
  "key13": "4qctZgJLpCAChiwYjv7rcxKJ6m9J5dfXAxTHWVvufWjayWePYTrQxr1b27fDvR5jDVCyx27U5EPNPJwRTgB1QEC8",
  "key14": "4DRJXwDFZN3KNrTp3nHqrgLUmsCNMYnhdzmyNkaWNBdfCJZ9TMbjo8N1zKu2xn1DK4q2dL8qcbam1GRANbUW9xyk",
  "key15": "5Tov1Lhau3JnpxxkmGY2S4nigLqZDi7rfVH3vhyGfRMTzPfHarvviBjbwq3o5L5PV9rzss8q2Ennbm1Gxha33Aab",
  "key16": "3rtfc8wkvdxfW1cmZqSxbiiiR53kMRnPeQoXY2QEkQpBtPTWCsr6UKc8AnpWf4fQyb1kYwHeWZVg6gMffKxkEw4Z",
  "key17": "4Fo6rw94PqmvkUr3GugEp4FZDK1rJWzA3435bxndwUz3ePg7PNT1Lv9ASW81Ty47Uk2U6YHHdR9tmVGXZ6CdE61R",
  "key18": "4oywyA4ikjHcVMRuBwAi3GDQHb45qyCv6jUgd9aYTt5QUS9v3sD5UzpLLm42xsTyLyNCUkLXMCtLbLPRK1iwHF5v",
  "key19": "R3gyAiZ2FRMoZ8sYn3F3UDxJKPCg2sWowZnuH7rHKteejhSLF2QWtUjhmEcocv6Yap7mg1ktT5ijkFLDYvyXd93",
  "key20": "VtMkmnCyQvCDcq531GHGX5Xp69c5epmktstcsXajZmkBZTV4MCRFha4kF9SqDcDxuSvDKb72QRC45Ywhox6i8fM",
  "key21": "LXxxpoqcnt1G15geKZZmsKk9mCteUKU2Xoff4J47xJ3G9vGe3Eph32vacQBrEEfqGLFsL8so6jF3hSp9yswqiCX",
  "key22": "2eMixZXqwo8jHpXTZG7V7yokZYHKgW7ZEWbn8ydcrEhZCHDLqa9qeYmrcTSd7QqAssTDnYWaNLS8oR42ZkoQ8h7S",
  "key23": "3sUujsjZsBFqAUvcjHzUHk2QxeZWw5v7dg5gVkkyU5Pv7UM9CSppyywLv7mapvutpz24u6a34oHswZFf2ihTTWbb",
  "key24": "BZ27KmUMJYXRVBC2Xqqviw5bEYrars6St53zQeJeA6aMY5qWGyMkSMaGbyBDWi72AAHEBWpLhdiUxWFUW6wuXxz",
  "key25": "2Geo4SY3MbofxjDoaE8dbHYq7VK1YjZPj3fKt9FQmjyBHtuJBQN4yc85UX2JhG9P4hd2b2i2ys4s4uMsYojoD2bn",
  "key26": "3hvy8KXn2EkGkhvFuB3ApYsVzVf22UdmJZnStCU4FoVFfS6PqkzYHFiBqydVEcxwTTPgsUni2N8r6JfJ655UEZ3f",
  "key27": "2iJ7RjdUMvbpdPBxAvY94PsHJYjgCaHGjEGN8yddidftP1KfqUzs1z565oL2iJHxzAkKteD7f3m2jmSPD77EzhqZ",
  "key28": "3b2VZSV5fwWqwbxPaKgAhs1fwNQ6uHbDJji4XDHGVSka5YcJd84jDLfdeDB17hjmz4Gu8Bj2WufcYmx6pBrsoEWz",
  "key29": "QCpJa2qXEMz1HzVd168DjPVRDgFxqvWuiPGSyCbHRdrjx4fRRtyWsAVXn4ZDfna1unu4Qs2QvyXM15hxBH87k4g",
  "key30": "52EmeDKC8L634Jovq7aEPHeMo46ijCB2yAFmjtBuB8tceeHGtnPoxpzCQLbQ21QwzzjCJ1NAZZbvjXdgePimbAV7",
  "key31": "4gX3QWWDCg7sK1QU5LH513RQBehzrQhsjgN26NidifvS3mWhzSfUMqL7fTzJmxvou5Fp4Fn449Zg15DgweD7WafP",
  "key32": "2pJeZZ1FKQbmWfHGEkMVUcjeVq6RP5fewmrSobHgtbZyifsB2un3bfypMSYXEyev7VWFkuPZ8ifGFV8N4PwPWWeB"
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
