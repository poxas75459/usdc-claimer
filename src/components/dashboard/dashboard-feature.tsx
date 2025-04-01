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
    "FYJDrq37Kx12CqUSpRGwqBZ4YornN5jhWPxoudaSo66UUdjMxPSn74wDAmw1FU8AVwBvMpTs55oxL7h8BCbz9MJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CrwJFXQFHCE9BseUs9a4eevCuRrkqrPzS9J9aHYY5LzrTbpXpjGV3mRf9E5sdca99R8XGDzYVhW8iujKDaR4Sos",
  "key1": "wCZr8hVbpcuUqcvJLNuHUYQHC1zgj36kupvTYUm7mXmMX6vXWjiF3ECNorMSAvKt1hx2XrddfZj4oP11hY3VCE1",
  "key2": "29bc6w8mcsT7kXhFVRMbYqbBSDB9gB7bY6yRTjfh943jGiNJSzV8KJBmkHLs9oNi3sye2fbCQfJZqmp6iUSeQCtS",
  "key3": "5HKhfPSPUQL93uX9trLxdm4xvEbvtq2fmPYoLZh6C9eGrh46fKDrkuaB2w21qSmHwbubav2VEbu2Vqy9BhmFiv7G",
  "key4": "5y7FC7LcAzXEPLuN5WVvs3iH7s42iDyZMoaLUDhanKzcZUGu5doRnJs6oDF572BmyhQkUMhzmrFjMwnR6hgGZRuy",
  "key5": "4tSAf2BQTRrdHVCk8fLxkZmfenuaqf7EZy7DD8euMzHE8ARBvNHWDJ9SrCJU1UU54RR5BA3J63QLcwmXsRVp2zkN",
  "key6": "2LEei16uRgy92woD2W2jcsUeQ6dpXpha81yt53D6yfhYtnp3rYuBVu8Q3rdd9UU4Q9FbtzGi4yFQncrtaQ5zZ4JY",
  "key7": "YfryD8BT9AshABeWvueu61pjWosG8DrrWbibYUNGWpAD5PpZaufohPXQmFUAYSRfGStKzeeKQL271F7rcFxJuRX",
  "key8": "45XJKAgWCuNNJzAyqMEF5cUiATwDtCM6yiF878NvtKtYaipSKQKCcRKtcTGAWCR8GqmSGmc4ZYRkpZkjrjvTYtpE",
  "key9": "3QXDWfH52JAwBgUCKtfBQqbQAsbk93sbdx9Uc93r8isWQFXytWg6wCaHL6mJiVcS5toQf5EXBybmV6EYYNWWWRPc",
  "key10": "5Hg3UfgaVdfh9XRwiXBUeNx7uo8iHBauAx7rjvqPXV1cixTCwUTKC5HfW1gqUcTt1hCHT7hRuXpPzbW5qGp5i72f",
  "key11": "4HVrDxyP35wKpKzsMxx5C7PBxQPNhbWQGmFVe4NeAewx5czx6MkuJhJUPBSMXUjvDhEcCY6DJMGxkKRPBdZH48oB",
  "key12": "zgSyrBqDqzYNjFxy58uA1RzD1aR8yZwg8K5FZpRSmtZ2JSEthA8vZx7u4i9MhLVmXbxB74MVRgpMEpm293uY81n",
  "key13": "4fVGaZ3SGzMX42eNzuFaz6e7p2igGXcMessz2naSm7tPzsbT3Va5cRn1EULS65abTYGSGPh2oRP5X2u7Bu3eiBaA",
  "key14": "4WNGQN9W4NpsvTKvDucNUnz3B25MB1WF52FoUU8MvSEww9Ver7UKSb8AkXdbFYaTjSZEzUwTSa7cGSUHkHC5sGTL",
  "key15": "2foGM7NQD5c5c5x7NCRehB6amrQD88Xq11Uh3UYJAHA1rbjqjGx9YKDCzbY2aasyUKMGT8GBcvSPvqdbRTkoR18h",
  "key16": "4LZGH8jTZ8KPJRxxiiJzHeVH36k8pzJ5iqmFoCWPFjZpYNWBVrTr3XNvEKT2KsoR8ZVjK61o9joHFcsi18ZLUazG",
  "key17": "4Y4JFxagiWpVbyXxDVqA6pyaKnWFKWmpvfwdXpmu37QL4kEV1EFz8UtcNDG5r7Y39FTb39f24zXNas7pEhr7Ja3Q",
  "key18": "KnkKGyuJq1CeDNUjh2ScYxTEjR7A5C1P37xmnyHnWSVLris7tzWLAu1i4ZEW2x3xiD6AGqdJbsgQjzyqu8Cj4h8",
  "key19": "Tcz26qyEbchVqdDcFUMQmiNQKFMngzdKhPcGPpYSkkK1P7JrQNLNMxmsdgVtEPcfVczWLbtgHQmwMLyYJ56Bcvv",
  "key20": "YQHidq5UKv7eRYZSpoUcTLmWv6QyZLzoDGujSNQHoBwKUHGPGVsmdBt33QWi6isJENpGnNdXocv9JQfbh1Qmru1",
  "key21": "5nwSdzLZnUB2MX3hepmTHiQASPCY9PzS5kcAsM44f7ckSfTxYyPyE7eXuJ7Sc2zAyawz7cX3YYxr1wgxzifEsHer",
  "key22": "66zgwppVENNptoH2m44eVyccyYFYVeG5n2GS6xUkLQvzvkD4nw1dZUnDUQQDxZ9uQCvEH74dt869bP4m73jpy1Wr",
  "key23": "2x4srdz9Vfjc64hmUZSFcQRPuZrrfXMmFUnu86muomLTv66sNY28Y33i8X2jowPkW9r7gugktbPiG1ddexo7DXTn",
  "key24": "k3oH1yV7X3Zz8LUWfpBHJbQsdMsNhhPJXs7cdrKvwMbVu9dHhia898TvndCoBL9du1r4U2pfNtb1DawTW12C5kt",
  "key25": "3wL1jkYbZC4sXoPSsqYax9GMBTyeocPP6iurE69NZcWgeDzWfwu3yngFGDezghSuiHCvdxyRp1uZX2QGX9z7WVZd",
  "key26": "2Q7auBPijMvVqkUYcB8WTRCbJe42mpRLPFwEDZenHSJGyv5Tyzw1rp7auUotrKuPHq8zazNxwW9jmD9BTCJb3hDY",
  "key27": "M1Gzonm3bWKoUAd5Cv6U2GhzBXc5dfXhdmHg1Xc7modyYycf2gqbmebXTNAg5PXwjUam1H99Px8jutu8STwPKHF",
  "key28": "5pKkzykXefcJhXLsgqnfcooZkMMVbRyioAukQGuwXW8yJs5B5a5mNNEhM4nkg6VG1iq5tx5EFSw4skF6bokA2QWM",
  "key29": "2mwn2owxr7KhPPkPxHPAgoNU2V3k9u6YRbQKRnx644jP1MnFiLVmk7Kh2eBSWqPcX95kbToyiAyRjAwaQiLVoLbN",
  "key30": "23JGxa9pMKg1jtMtLe7uKwPqj52JNGVmRRacJfuTG23mtwVq5rZyK5G6EYC3fCx2P9fc22BdiFmTQhmwbo5pfr1W",
  "key31": "2i9hmxXapqty9kHWbiiW57KEU9q179gx4EnAjVAge6t1JGFVwLc1oVeoYMVr2BC6ZBfqfxKxJ9LsMYieTZwKme2c",
  "key32": "5RrJ3zLuH1YuEkVnwvF2SDNdxjBiLWFEeiRbeCvR8Po9yy5Wmjegx8LURvGz9fS2jaQHbRyKZuB7mrEoDPoKWzRy",
  "key33": "5hzpTt7ALNchXZHAn8bGjWkLuoagfJjHn2YoPH1wg5bGE8zMoMEs4HswDgf1zjA2ZpmeUroGjHtzXDR86dqTgdaE",
  "key34": "3md359KpGk7dt9j2dkfUnTdW4NrxZGnaaeyS6pvooTJBSbZZfzTw6j4gZXyp9wWaSyj7fDWXPRkUQ1MUDCqQQHb9",
  "key35": "5GoTP4Aw3XbyiHVUBVM7cx5GAmkgUxYnHpanWpRnFUSZnv7wmATgZQdfL6FrBpS4BCgwxBk727AaoZL5w8tj587C",
  "key36": "4dKFqhUSWaHh2PB1qSjgQWt7Hp9vGCSnbzodQZKLmhiS4iQPn4drb9R5euPotdmtNGC83odWerB7PrvxSCqsAfst",
  "key37": "3xSuLB7aBstFn2J5R91MzyXYGYH9fhhoPVopUXoV8BzohbwzbsTufjCX6pvRpHb9xDzdWFPJ6Lj1HkcfW5rXF3qL",
  "key38": "252PvqJKFYRY2v4kkza3qxFyRv1GEC7sxVtcqgjrgS7Jw1pF8X8iTtVdJRSAVAV6asHXumrJXsZZBaCnZZyL7dZH",
  "key39": "4paxm2NNneVZGfji6bUQ6d8DkSryTEZspo4LDYBFWY3KDGKRhZjh4HnAMwuRwJdqqjr5HaCh6oGrXobsnDKBewhN"
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
