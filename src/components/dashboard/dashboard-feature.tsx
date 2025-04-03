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
    "5BH4JDQrvtZtjwFDXCqThCQc1j21pPHXPhfVcWZLT7NGetuNahB9Xgthqw8wZobEN3TyXEUtREzUzzj28mgMQhtC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ouDERo4Xusxh459h8i16VCZybWqRDrouFtZ93PwqQ7o9cqcsX17eF1iG1pTKzKxtuXZbhhSo4xayjH5mqs7Luan",
  "key1": "2Wtkcs9HxZ7qCD7ZrUbfNgxJCBNYWULHsCEU33ohy7RpBZrCxswvht2KqVCpcwu3B9KrPzLwT1KMv8oh2AtxvZxy",
  "key2": "GMzrdcCajjESgcBS3ZMdFzWJhARbrpGFzXqWGFRz6Meo7fT2BBzdtYv5R7TH4yjoEGjy1icvn6ZB5jviYMSPCEv",
  "key3": "2LvX9rrmdfHg1AQJJ1v4hbEMPnXuxLTJaCXscidPkrbgbvXyGEiPndeJUNdFLfMwm79T7qjfT1EUxC2GXqJNXSoa",
  "key4": "4iGpJ7PcbBS9HFechChNaTx412gnhwwUgoT4Rdxcova44E2pNKaPwsWpmzRTDcteLyDHUX9qc71m51FUh3XyUb9A",
  "key5": "5tJ9rHvqgNgz4Wre1ZzjGBLHH8fgCz5e7Vn5gMevgcPDPWE1wKjFbXxAq7uFJiJmQt2S5rAaQhVpXkGg4TU5Dn3",
  "key6": "52K8tpJmUZVfbzK9DnQ3nKuKdmzqde88TdgjRHywbGWyrkGiGF5qjKmnztcdqufgSpxHgvAf42GWFeugsdjxNaf1",
  "key7": "5b7CwFbFvwkthCMrz8BPrvmgrhx2fLyHN5R9RwbbPRQGnx5rXzaHkeDkSVsY9oSRCrV33BiUx5YF5wmsk8fJv1mp",
  "key8": "4Dj6d19WrBb5PoTwLaM95eNN8Gd5SThfs5g3Ut2BxynbjNhHk3hwyLns3VK3xSjPR3eun4e8hsvx2Vg3zuFkCSL2",
  "key9": "ihGKktGmHJfRx5ZW8wcLHfmLPK5BE9j84tj8mNnJZefgVCU8dwGucBTKz4hN4MnHCzZtbo2BArFGj7ab2eqbFqf",
  "key10": "4webw7hqrr3AifbFtWaANv8mAAqZ7yKfQ9FAHAjwMepjWFM4JoyuPYNm9Cuii6i2bTHqoQBMQwwPtMGMya5p2dQt",
  "key11": "4N1zifG8ubfmXb8GVieH1dETFciDbFN2t5oR4MbxE27FRBSyYo1B2n3StU9B24fv29Lue9z9Tv93cXdhRijuau3C",
  "key12": "4A4WiwV4ta3YYsSYwY69wrtWueSrKn1vss1bz7WBD6uYmnhgdJuEg5Hfz97V9WKs5Yzwyo7Hba6EhGiUqCmqScuj",
  "key13": "37gdkz24UbjYhAxGB914cs8aW7od3t6Q6gqamwgwaa7UmRBW4JKGAv5wtWA76VpHmX15xpuHwZ71QyTNGgPqqFHc",
  "key14": "5xjabmXkQ2ucQm3KLoLJyepLBf69ZLEAv4hMhq6e7xihYWrr7okVj9akwSkJAe7aW28kandwQYbjAVdFW57UwZ7e",
  "key15": "upwVh7hoipBkFJP1Qhp6sv7z6QGC3wEHRt17ND4soaWuynqX4S4bKg7hiqa8xsP6Bx6AefBybKUPiY4jrPLSRXK",
  "key16": "64gsfuTVMAb8TK3HKuLe2k352PTLe7bncLro63H2NxXy97GZ9z7aYTmbq7s6iSXKycfw1hbyGCXndcFSWjhR3iPn",
  "key17": "zm9xHhwnY7MksDMh5eNjZE92UDBDPrSmUQvHTuaewFsR2iZVKttqWH4CAhFoAHzJ5wxfMN67z9rzyCsF2iyWx4j",
  "key18": "3hmaojgWMrAsbTNunKENvjGU8QRbZvUq9ijbU2jG24qy7o9eFtVAYsEgYP5HxqPU54UMnZAg6vHhy1ZRtCZAZD8j",
  "key19": "58rUCCtsv7ZYXNXxxE1iTPKVHjrYLVbAbYJyRaKc6XsJfKG6SEA8iYMBhgYULrHtgnFsbGhoarqcQ4m8AneJRweY",
  "key20": "5iheyazMK1pfCEwvFFo2KvqcsQkW5vNFXGciUVieiBqQQubijUZ6CHKKdebAV8HhNKgoSwJdsK7c2KZfCRRmymFg",
  "key21": "2dg9XSbHjbJkiCaxLnfiAGVC1CGAWJFwi3HP3tqTpF8zEKZfbeVPykBCb3bE673yqYfh9YfYauaUwRf7L6dEP4s",
  "key22": "476ac3fK4uzhVbD5HyAWK6d2YvqVELU4Tdm3wsFfHpjBVe33SyuxmPu4fe92VPMvBErX2HcCfDNvmJ2pXapniFCz",
  "key23": "3QirT5zt9chEWDDCH6AMe2oe9ofyjZYDjewkAfYr8RdYWa4T4ZStJBvmWUr8bfXpxwtrG6zoie6RkrDoDpPqc3E5",
  "key24": "5ty7KQ7SXwxhvTVXKDsehZxFuGyqnSFxB4Gnaazrw4LGdLq38sXyxe4RC3LKtoP1J76xehNdvwAmYjwQxpL27eZr",
  "key25": "4atjBTjZFrEvcfpCerrXhSphNrWfQVUqKHZhm2mngvoJQVZ5gfEZGjB9tqP2wKVBeeetfoFMApizEV2CaTUBtyrP",
  "key26": "NcwAywMCNq5zWumxN8VFKiaNw29iDkfET3WirfrCTxAU9o7xQWPiihvDczsrS8Q64F8W5XDEauGu93RPX7xKxzG",
  "key27": "5i8WoHGeQJqAM4LYt9bQMv4Tsi2QwobZA5Jd57tYEqWJBwqghuEiEctatEGHGTHZR4pUTqBFKqqJhbVUWSpvvZqh",
  "key28": "47azdpd9Kmqy8nNjbHtWQksdU75e7speww1e2pf1F8zY4bCoBFFKrEuBHkWFeMgjqz8jso9UCcpxpc6s3aDVbRgV",
  "key29": "4xwuJeFoUACGLq8kmUzLA7wgdsc348HiZydXKPPoB4dwjii7woGUGPTqjPHFjs1Ucd29jPGReyzupcrcEFSiUJYp",
  "key30": "dh7T6VXWwswz1B1G65kQPtcrZiA2o1izPMaA3koyTayHRLxPmv3pL7Q2Yrp63HaTKFrD3vTqKx1DihHEqfLixiT",
  "key31": "2RiH9UMUQnLUfyAQhbeytZVBuA2bmjdg8kWR5LGPPhhDod3HtXgWGjL3C9URZw4ZMq9Kc96uGrF6heUuisJmDn4q",
  "key32": "3NeJqBVQJgNePGStS7Gi969tYWMcMZddwZNLeBYgsx6hBhaomBMKWyfHUuqEBUde4yC6FJcCvBjDHMviFXSYybEM",
  "key33": "3auRFsUWNdcjkJimUUnWdZMPUhMg1KhfAqHpoCFgL56JaRhNbFyugwDRokJMbq9jjSbWMu1nNgQoBZ1bixTNPU3v",
  "key34": "5e91oc7PiEpLFkEaMc7SqceykqLP21S3G6RWwzVHd1m3YwtKDW4MBsKGLLYTeeDdXjm66567NXHXLqXKDLg6bcSB",
  "key35": "4kQi6gd41WACHJB9Xb5jg5G4RKFmhDZizHGX3hLjNYSyCCMbGBJpvvhZuqsAC6xTSXNNPjp79bRGA77U9MX9r2Xk",
  "key36": "4eWYcFxh4Jf7eMMn8wG81WnrfRiJEfVUimfcjs15517L1C8QrsanhM3VV82QYMSae4osgRM89JrDLUQE2ryGWFHv",
  "key37": "21zCp9uNYVavKtAHCLh88ErWekCU4yvZvp9pi5Y5zERE9PBgQ9DquCuYbdKYjeTdPmb6Z3nmTgAjFrA4ZxwSjkG1",
  "key38": "4cBpwSa4vVuieMvhA86BSSTqXqUvV2SQierHvSgMMsJXrQcqqPrLDbV9RRmnZcA1Qmxtic4sLpS18QQvEmXAbErD",
  "key39": "4Yodh99x4dhUggnHpbXVww9LcTRQc7eXpNaYJZ8j9CmYAJ3cjhsXLtj1MKjiedZNKv2SoVFumdSK1bYqwNVKANdL",
  "key40": "5pAFAULcbaNzbbQtdBDPqFwwxHME6CsNvvrzds3cTf19eD5Wqan6pZiiBmC9kLsbrBGZD5YxK3RmoLWEw2mAXnKi",
  "key41": "2CmBnEEMxJjxf4DoNJzCPKqjHPyWTA3nCgxkvGdNSwCJ9kztG5RcsKTcprKP7VTwiRGu1vVjhxC6r6Wuj9iucRa3",
  "key42": "5PGWV8vr7SDkipC2EACqLeNMadkaDWdkcFyfink3wN3Z4kYnQpA4T9f4p9Kiqkejm7aHyPfEMp12RWzr2yovFFCt",
  "key43": "5WEbDYKuZW4L3gAkkJ3bEv8aR6X8tfbry8a9p67TX9rmZRYk18umM2XBdiki6fjbG3EbS5xANGMEbp3Ktf93wKmu",
  "key44": "2vB3awWQET52MREt377Ej6oBwMUZHDz2MoGpUp9FHM6cNG5iSdhpNRGEsn9EcZ8nTbYWJbcTqYiU9sr1czdS2ZDG",
  "key45": "LobGLarEDXtVPUzyuC6EZTDm3SEPnb65VKwR3BgzfjmsGC518KRSXxiyphLwCzX75YNhUEcb5axt95qsACjsgNY",
  "key46": "64fBdBeT1MDhbxb5wi4Un62c1d15owgwjNtjkbe9WhkCfkg7xQBFJC6VmLXXmXTkRy6xJaWkycczyLKKYB8kjhno",
  "key47": "6cxy5tcSAxWR7TLVwNHgFLFr87B1szsRvoud1kQ8LGt6S1kgFgZgdCtLXPmEXv5pbgUyi1GkwjKFj7NHXnj8DKu",
  "key48": "4sytyV2ezLQ8MPjwR2QiXGjRxtzNU3ng7Vj3oQ9JTNG3TMwzWWtbGfxio35qqEMNGqGKBXknzCws7bLGrKknctZs",
  "key49": "3u4XxqfakkBUtMdQShheys5EA6GBpUjgsQ18X6U3ePTWqjCf7aC2nTJUZ13GoGZ5XjuiPPX1SnGDQ7hAzLzZCsxG"
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
