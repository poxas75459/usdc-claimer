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
    "53WCfJ9C9nwKGGkNqqsCWxF7umAea1nodSZBKUfuu8gFTovn9WVFY8iAqwYy4ShRc2FuJ5peJo7tUq9egV9pBjDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37R9KvM6YAgeFs7wdYVJ2HJrXZquhQpUtDoM9tdvKzLMSVEFLxgeE6mRvjaiazM97SvitABQDr1TpDh4hP9QfwXc",
  "key1": "4YCw5rpLyPYD6ci21S1teSZqa7a4YxPGB1o2TXQ5ruTe4G79XXvs7NNZFtBdi66WGA2v5Yk3sijSPHPuCYKK63M3",
  "key2": "2JAq2nB3X6qraTcJop1VoU9qb8tWifwRiMpXFBAHmtPo71jDvCDEeD5acV7BWpLfnmviQJHkwRPydQSRh8NtqRf2",
  "key3": "5rWFvf5LZAvbfSj8amN8J4ABZusqYD8r2D7sCYat1g8WGxQBSELhVka4ZJmY6nhNVDTaGibBJrBh5N5tsuew2KXn",
  "key4": "3myAQ7ZWv7Hw3phuynWSRQgp7MrR4Jq1f73qhqDTQrQC4r2qiw5X1TKyLYRZaafjtFGBTCtjPmQHc8gd2EZgCwMA",
  "key5": "36jw3Pyv6pTpx56Dr9s8tw69q7J4cGmFpo1VnKme8kY2x4zLK5TCoG2SV3BxLooHLAUCqnjjVLUkBEXPmjzbLb5x",
  "key6": "NWRbgm4kqzx4Mnpaeb4B7MfwW2RFRREjULHPWBPPBYKQnbGLsiF5VVUdy9i4Bv9CNoocVmfWvMVq6mT9ZmHzyaH",
  "key7": "5MJ96Nc1RxpCcPY67be711Xa8DAQR9z447Y1zyug2gGsuq8MPAaGBXSVb6mtjtGZx6uJHzzrkj4dutAWCkT59BmX",
  "key8": "4eyfakufNsw1afPbkKxqVutDsFFmMT4ze6VLwan16xfc2Diozz87oSK2nBzrHqHgJCAUarJrYFakLX8D4Pc2g2qq",
  "key9": "2YchCD4GeNiWnhKFxUKwJb2LRocEXmWeCUfbmS5CGEK8AyRBJT7iYWe1ww98Ty5zkSq7mdW7EJKqAcn8AFxpLtkU",
  "key10": "5pWcrVJmUS3BciStN2JHryPGSgy5SfeqB75BRfseWY9Gq5Jppe1yENDDRWSjHDvfbPo2WwYwhyYeuwqVf1GWzZmD",
  "key11": "24qyLqb83D1nbhoEu8qovZgZonuFzq5TExirM9zTrmZvNVRhrgyuwzVSd1qEm3epxvrDRnRUZaqM3vvgCqSscj5g",
  "key12": "2fDHqZDcQVFuQwX7i487nn7wcFWFrLFx6qHEcRQDEz2Dj1CtDoT3Q8JY6bq1nxc3XzwQnxcGrwPKgUQtNGBKEjXy",
  "key13": "5gSFocx6cCQrLRaYFz7SRtbSB8x3z9enJoSZbxuabJYsTUds6iy7CRdJDrQqva2ZH8h8AzmevyS5swybBFjqu3gU",
  "key14": "4UEjd6j3A3mmf7xbUH8Cutn4eZLxAZLtgnFeDmtTAVM3tadRGAbHBZT4HdfUYBpixqbdw8gp1yKNMQUgLyVcSD7S",
  "key15": "ymh7ffhZRueM3B9Qe7mVSBzECAvvkcuWwutZjKmfKfoG4Qe1HGz6bVdGYSUmeNGAbb4SHaeRVBVpYPKfjXEHZXC",
  "key16": "CRcJcpuoJwUZDeERh8Uq1VLZtkSQh2VBgKg45qdTfrrhkZr18cAPw2k3nAxK6MjgsYppse9CRfSrsyAet1c3t4B",
  "key17": "4PeX6o577DZkdo5jz67bSEGJEESSvQSP7jUUfVmcjUBdvxWLu6uGTMZPj2YxcqzBeczCYb5v18CcbDXj8gLRTXYH",
  "key18": "2P5oH9oCy5LZeqwdbsJzRSXtFbD6MDH3FQCZxwT4eBJqxBeHN9WK3siyQRffw1M2LgtWNi9TUuuALvwPtfEQyxw",
  "key19": "4f8xtnyquCEDozyDmVtijGDAuA4Zzxx919SYyFBTuKbzZJTip5zdzH6YC5Yjsn7EE2m7uaCHWtEC8Efn8A9WiXH9",
  "key20": "4FU2GdCQ78EKFxj72dKT4XAxQtHhqpe1huNY4zueu8Bxpu29FkeRNrmDEGa9qgJgKcRkeMpGgJHoYtQYUjJUCxTG",
  "key21": "3Pv5yj6d2Qkm4LRMk8avywCXET5RNywAzPJEqun3ce7x2HNsULx7yhNVy5Gc1ZKHdYVHxsnpqvytK9wdSwW9vWe1",
  "key22": "2NchTvXmwFAaSt56wzQD7BzHo8S94FtPw2Le3idYgm319g2HAuRVWZRvuEhQBFdRonTmRz55DM7nKKb5NR7dkqg",
  "key23": "w5rk1LtJ6U7uz7VufPvxPs2nuEjLMn2maBEuwVZhvLaimebzTuSErapDGpG6wuf8cpjSJhAKjC8AEioHWCE3gbi",
  "key24": "3k1ga1dDToaiJNh3q1FgR1GX5aeqmsDJyrEAfpB44yexSn2gmRQaZjDkdR8svfPADJhzRZ2P991kXTRqA4sCC3zy",
  "key25": "3Wh5A71FFrckb1XnHtHdZpPWiULNMHJDfw5L3R4KKFa5q1SHK9VEucbe38xcTyEgTgFbuEwsXgorLMNpkavH5SY8",
  "key26": "q8nuMeBcb8wREHnHY93ksVT9bhQf9DTqvjW3qEvsY4j8CgzAzzJ7KpL4y8oPNxZGwar3NC7qsRZd42nRKxyYUG8",
  "key27": "4QS178dZdKP9jCrHa3Y7gvu6KwLdD5WHbvrMPNwzey1BEFQvRTyR4ZZsqTNBpoPQ7vVWbR8pAHiE43ozXvqWbzvV",
  "key28": "31MNU6NFuztBT951DuiRenJkTkhTSZzMrxk8aMHLrFfqtjMQd2cmnFcK83HaKMtz7MdxWB7JJ4gce8LGS4BtiGd9",
  "key29": "4eVuTYnrdu14ZDAn8qEZFU1c3N68Zymot8o6DCwqwbNkrsRc3eoLfhxaQcUmDLPjK7VZTrqeQ7sto23AzPs8Cmxs",
  "key30": "3J9FTSfz3uKNboUJepVhJihKRAPQ14qp9wBBRDYDhhxw4YHRApLtumecgAZviMPkURWerpyD32cZRhSeEoFBmTkj",
  "key31": "2GBND1JGhW2sHX4eKzZRZvqf17YvphsnKtpBiD4yJTq2sMg14Lvk7unp7jH5xkUur772cZ48WRuSitSrRnPViy8b",
  "key32": "9XEX6MGschipAdtxGB9yVyLRJKg4RiN6RTmrnBA5GBThUbcRKmjgHa3kcMjcY91GBXKWf3Khv6vd4iPtVt8Zyga",
  "key33": "2QZR3jMrSkFJoK8DWzfnWb4SBDwyukTbUpgkE1KyGuCgwWNPLitwgF6oCm7YJvVGKBZYUbj6rYRAFJLfrAbWmUhs",
  "key34": "37E1xSzaRth5ZA1F8tTVTdFGhyxTHUYUKzoPVwCWoiqbYk5mR82i28WGA7B3od9goFR5igjFsJ7tt3nsJRTA8vQQ",
  "key35": "3aLPkTeZhjUko9Xa9sFf3PLFjbDevD4GKBPLeqqdFN2QEQCDNm9YSTbZSxt44bsbAuWkt7nWRmPqaeuMFi9fzqnA",
  "key36": "4TP3qUkgaNDwMpwvWd3udphJVAm5dfixcUWcSdwcKQ2sx5KFUjTTdfxqcNeVcdX5tNRWkr9N1nzTe3ot4wkJHAJj",
  "key37": "KZNvQN9XujthPP3QHyvLLq4NxfwmdxTj6weSciHpNiVnmVVMz585aAV4fncgQy9aKoAqqSfbWC8scLZtyquUZCH",
  "key38": "5Qr9GmUUHZZKTGT5LKrTQ2bovSbwL5tyCmbCzJUXHt1JRyhLES4dJbWEGaHxaVTuxTJkJ9dGrz4RjnRK4vRumYgm"
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
