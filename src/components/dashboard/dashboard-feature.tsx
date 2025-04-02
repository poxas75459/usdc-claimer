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
    "5H7bSSQDLaVA888mB6Y4rFghTNzoUrPRjgWzDeaSKzYUcrukTjty2QJ5uc3BPvuxsDWToHr1pHKyTjRvyr3TCChd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W7JvZM1ApwnHQxyLmPXknA7894HurK6a9DdNrkA5pr75bypMNEt2N4VCrKyFVS7YuKQP5U4qZLmFWqLNeUamsSd",
  "key1": "513uAhaL9KQkL2WrsrdBCPR1Di2b8ouQ1eaqoCnfFG4N89Th1jYSEBkGP1zjGB6Ug4dmM34RC2iN5rR9hiKNxbqy",
  "key2": "GLE8hDGnc85y9Z3bNwrJhDAi3pK7cw6qweuhrNyiWnYcqQTB6NJtCDYazR1eFfeK9g6gW88eQZRS3EpcdnKvCKb",
  "key3": "e1ica1TVwzENohPiRwYGhy18xqvKphVxXegBNuMicGLhBuxgTZmcJpJzANz6UquiLadGQJkSUYCB2PguoueY23r",
  "key4": "tGAvP1aaQMxdie6hvbSvBjVsbpvZfMj5xRaNU6AFsjNRsNmAZ19NrNRNWAfoXA3zqB228Nd3H1XrZRXCViqEg8X",
  "key5": "5yngnEFAz9tx3yqU3XTHq6QQAhjRSJ5shGPujB4E7Hu6vcALcWSJFo8cghLTVbDUPkAN9YZNzL6d7s9hgRj9dzam",
  "key6": "8L6CiYds8mF62B4YrngYBmBBvofk9YLCWFs1zQ4HNYX3APAmXE68oCb1NN8fr9ezkqCKVaSLstx7itTv3GJLjVu",
  "key7": "36FCuRq1UrvSmwxVtFnGXoaF6Uhmn764HB5uBbB3hGvD49NPgLhxZckDoaiSZtaiWayL1G8fQffhzdF3yLY5UwW5",
  "key8": "nEoHDkPLLMB2vUJKPryfANBiNMp2WkD1gUaMDyJb1yxteKA4MKGXBV2L5hPrKLmk9rg7KHmvanD9gEcbMa3L24g",
  "key9": "eL11X4t5zk6NGJKnrDnJ2dSSZvSZEBFASZHqS4AudabhYqBRuq1r7N3kQdfNQg7tsGEaE3HwFn3ofpzTC5sbA5J",
  "key10": "4TjRQ4aEE2eNBkJfZPfxtkZG2iC2Jo8BR7pTf6ZHxMkW4BdTTFgWtsr1eKKfxq57mmZ94dUTz6zD4y4ZwtfEsQfa",
  "key11": "5W8HUgTyFFesCUJNATHaTdPJk38ik6G8SQoMiEoNrA6sY8NZp9UQ6JwCwZdk1VpjXfJD8rMqijmz5jmKrtxTWuAD",
  "key12": "64X4LgzCojyyUtjsigj7GthnWgPszdWH7DimAq7vRxGgzZkN3QaiMGd7v4jberkwJjJ7kQB5WQ33SMxL1ybzeTN",
  "key13": "3fAThCdAYghzok6VSCeh8bewuJDsCVc7hMYye8FJhq1iy8XW758J4A6acU3E8rXoNFrVFos86zr3y18YsCFTgUeQ",
  "key14": "7o8uFtyW3EPKLaHCkkL7iYaqEZtUG7wmNNSwxbEKSSjZpqdbYgBtBGzEq9MrCUHdVUXTWGa9TynbibLP5XnRS2M",
  "key15": "3up5g2XtuupCaHP7nq4AQ7RcszxDoap8dka1XYbeHDo1EMCxYtbqsa5ZyaWD5UNmAtcnweU6X7KsdSD4Zf7P8gTo",
  "key16": "5HbfB2HJBVHFdefiREz9mWzCjgD3dWuj6ghhNzGTVxSeYyGciT36HeBW6TPo11gbtiLJfph2wrKvk1zfA8PRC7vk",
  "key17": "45S5k95jkLRiwS8hHXedEGDUsx8VCbPUkuR9hP2bRpE6dT48UDhYSZZEzzCJMdjD1z2XJnAmAPJwnrFu32MPZPCp",
  "key18": "5syjXEkwMHcLocjbcDSDGq5Nf9BWmeExWR53DqRy7BBTRJTDj1nWU5J5mbkosS7cDkMNa6ghGdBotee8Dn68RkXg",
  "key19": "4YCLUpXVxdpwfUnSjzBP7ZYgimifnMPprN74Dt7MumAfX26JiWFSNRg4VRKU1SX1D5QRpwsGLgbY1hGWcHh3iDZA",
  "key20": "5NmtyCd72UKfRjHcfoutbBRWyQALFyBy3VxY7AMdNagNfwmoCbdfXJ36Y5ac8zg5ebduUnMrZuCgYvU2y9qUdDWc",
  "key21": "4gAzPPHTpjNHXZAFcyZqpdq5w1QGZiaUKkgupwKmEhQmKV2QuaX7JaqTCxFNCPmf9UryhEXkKNLP3YCJ4P1P32MS",
  "key22": "4cndveV1GmBnkiB2BTsb32wG81LXPJRA9MBZz3bKdkoH4HtaSpw4cgrWqpPnjU4C3gufqoASC4wgcE5jgnM3EbK7",
  "key23": "3CwZfGLceHZ5vtTmB2sdzRPzEe34Ug7y3whjqzVp8YUPdAiCSytYs6SfuaGYmdphkzaR8zaGEfJMkUEroXCZsJoG",
  "key24": "2XV39sKRVrQrkeeMRHxvRyZAR81U2zqgyPciioyY1TBMP8etXdmGwMFWcAzCCmYyhNr4ofbf5T7wFfM2gMtjiyow",
  "key25": "4ZEVtxFAjEzq7pPwfemk6hBvbXx98djkQJXrE81m5Pj3VYvHEyKgZSPmNUmDCEQEwzCpSipug3Qama2mGyDP5f7n",
  "key26": "4rK1aiu1CsLMCVhwxb4a4EX8vaDbdXoAWwZ2scWgKTsVJvRsgnJWdxRsecAPRFvzDPjVEGvBs4CvsKFTq5zfeSrf",
  "key27": "m1oSdTzsrqXCLrQjHfiiqQuhSb7QU1Y3Xj4R2NrsgSDLxnQzETgha8KFK97LbJPjdHY6p9Lbh9zkasyjAztf9rh",
  "key28": "4yvShuqLzv2ivBudKLxbR4HskasykkRmdwNEhHjxJLwGhhjxpaTrAzjhbHYZFCNtn3qwKL3jBq8hEGzTi7GVYkdg",
  "key29": "3GKUa6e6xKhoqoUC4sfCoseRduBZjDWSfv7ZAYidFTc8w6SD5kLuedQUhFn1sz8ssvCRrWhB8ip3HVaknAbFHhbB",
  "key30": "2uVadFwvC7TYBgq41N9St1iXc1G6i5qRZQES5p33fjfydBRg9bTqSNZAVQsF13hHjGtwndCoq62bHK5DE7GB9HJx",
  "key31": "3n166Cuiv6PUThSfh3d9VusrNPJXzBEgod22aSfBrWosEVNX22w6go9qXuCphGEtzxjdjcRjvwvLS8z1qzBXwZ6t",
  "key32": "4k1bS83BQtXdM1ukNXnYbrv63ZSD6DsV3Pr7ES4zwjGqMHShbH1GTWRaiptYF7zZxeq2CrLFvnCRJ9G3DVNJZ2xv",
  "key33": "42L6E6d8ZnoWgkv9jRptqniJnjcx3hiAFQxWNJJi94GNqqQR2s59BnwHvPYD8hyrkzzfKJtq4bMsnfep7wVycu2H",
  "key34": "2qafZigEzgWUPaVAQmX5rGjH6HQHVn4WS8984CKLu6uCdSEgm7paiLxcSxBkoyLbv7FejbwrcNtKvXnerdnmrHVE",
  "key35": "2D1P9zpUix46vc1368mL711RfkmpotSmMS1srWiaYGvncE2nFKbbHfAZ782eiA7zJ6UbUURR2eS7SmFRjnrNyHW5",
  "key36": "ibLvv8Ft8DnAfv9w6BBv5umJsYGeXM1Bo4Kho85qY2me4yrB9pJKqNLpF1N9hfxvoKtKBrKjmjQg2D2iYojLSP1",
  "key37": "2oLKp8hZonw9G9m6cNSmat45GpTDUb75FRND3wwFdDRTJ799ap5Etw4vqVoEJHopBbw84DedNpVTwWpugAzxxhoZ",
  "key38": "4henuHCq2QDGihWy1FQHBaAnnbMcXnSrh8afqAWiVhUZSPFLKZrxmefi2e9NoVJwbdfSKTVLenRbmEZBCsRcm774",
  "key39": "iFDkdRmsZTgTrQ7hUHQ5g62gmCMkTRZhVzvemXxdayrCgBgGqXyb8qXtinP7oP7NwjoKfrKKiimijQVcXuYBrev",
  "key40": "4fiV2fjPh4DS2SQKAKsppdZ3gqDQoob9RjTaA7cpibEMbxDsdS42vzdrKYLVUnfD7Hto6a4JZt4cSKrD7wSGBRdj",
  "key41": "4oTFcGU7Gd2qZ1SCuXJ4CpbGcfdJGjpfweRV9nED2EshxzXveXC5QaoncG2VTfQzDCdbZCzmFPjkT1AZBU9c6Jst"
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
