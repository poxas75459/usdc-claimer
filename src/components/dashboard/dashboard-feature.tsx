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
    "Wvm6cnZTQXmd6pVKSj4gbkgBNMTuGNoBjTbJxQG7miCMe3fdSrqbEBqz7nF6mdKe2BpMv5YGzirfwzE78vmVwxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VTpkn4pUFV18WXeeTKX9NsL5a4bZ99mTRuCEz5W644FqbddCFLSFykcN3PH4J5nHnhZK3GHMzg29S8umfRvRy8m",
  "key1": "2cv9dkZLqLYMru9CgbAWa4o3NtKDFAwfrcKSte6cjb8zLUvz4DNen8jo3ZqFGbudedK9GaEyKXApybKxoPMj51Lx",
  "key2": "2PwWWvu1g9LwDaTUfnYWnLP9CwhWrJdK9V8FoMAasVaJbG15xwmpTunnaCDNVf5zjVcYJNuyLXcF56k3zz1oHyf8",
  "key3": "5Kc9cr8uyu4D9GU7PvvRddNurrCu4sN24GSH4YKeSZbicwca5dnqy914RezjBhq2oFx1BHpesSEfDYMVifiepW8n",
  "key4": "4shVEuerQFS8pP8iQ8WxpWQC3q3RykNGUWKVvPoM8R2Hbmu5QtbrDRvjaZT3vyjVcT3gtVWpimxvAoF2Xs8izeYR",
  "key5": "5nZ3HjLyWhEpnatMghvKcszd96kezpCLPRxWcU31yjngNRNJTLxjipNLaRUso3TqqDmUZSZ4kHLrQ3evHyZRF4bT",
  "key6": "662wBD1zxGfKh7WGLNJgqPvJv812jUawTmbiz1W4a5ykSrq21SMcCQRcMU3wiG9V1NpVVbADT1zHC3nft76Ao4vn",
  "key7": "4dP9QBNVifa92K9QFn4dYfH5infTQ37kRQps5wz5B6pDGFPdNDFSdTk2XMoFqxUuckvBjv5oV4jBmV9mYfB5ygoK",
  "key8": "i57fzZHk5ynDahPt7ypS2vkh6PnCCndohdvBFhtdrHg1gpUfuoy3HELAfffYwAp1b2fRn9TWvckuvhQxooDPCYm",
  "key9": "33rkvLLcsZj7iqGJ5TiveT46dCVbBuVemcNgXwYvVqEoSeNFVmNgNUUJ68aaAXT8AnrZYUEfi9MM46yLb9zE7WrQ",
  "key10": "2EH4soV4vNgWWYDA81AaMm1Ljir9fKS1mvrSpGFt5RRNbobEk5fKizh2QNiiEsAB893kSRavGz8doVRDzxuHLTAH",
  "key11": "JXNXmky7p7UiXQD6JKeXf5KLegsWjy38M6CBwqhHnxG7P7MAuRsc12cA29odJqurboNyioMt8tFoBJ5AoMGpwbr",
  "key12": "54Ht26JreK6iicCTFiu4HKtHHNsRZt2cMuPBT53jTFiBXnv2eqxoDPHoiozH9BcDmAtCHGKP4rE7QAsNjSFviEKp",
  "key13": "3oAR9BKzvdeUui51oukSZWxcjqFJFYs495gbbDi62YG6V3JqUo1dHEFJnbaHMWtnrZmjACzRsWjLwMutqP2aW8A9",
  "key14": "5muUoYJew4aHyqRWgZBmjWLZcJgeUP68TKnvTjH7uLoD1hhT3i6KVybAktb7T69BzTmJ81vuPi158pMD3FJ5tyHz",
  "key15": "3HH2q9VWanStYzA5FEdHBqdiHRgvEaPFYFKKJa6XauATgoY9nzbLayWqbrS3Zkbs6ri2rzmNJMrMEp1gAXon8ihn",
  "key16": "xxGTBAYNuuV83vbKkngaLPD1rdaxHJTYudjSVyL3EQKAmYhbJGJm8Gn31FmZ43eMzW39XEPEurmBfPEvyphMqwx",
  "key17": "42NnPC5KA9ZcU8Yy3L3x7iEL3bTdubJkGUexupbr8K5YbFQqYnG9oP6CwCZiUsLwDujrchCiePYEt6CP1LSrbN7X",
  "key18": "419ZBJkz57J4e6VYe1JPa6WniDMn3kQsfZrdewQVc56dDcn4bbwVKSkHttAPGKGzkfcCjt8jgsejto6hXkNCHu9D",
  "key19": "5y32GeeFYDXGjPNHXTKLfsAKS3XiiNRhFBWjrzz7ftvaMzhuBKwFDratdmXxBStELxkcFyLmkBQdhJtUgzar5D9K",
  "key20": "4Pdk7wmePJ8hTgmFDa2W9KpfF4VLGxw45v4UnEhLoiAGPZitBMajQGxrJyVLn99kqP7Cqub5SfbjwDtAugkALrpb",
  "key21": "65k6Cp8NKEQqHDhraqkzLKXkXnD6bG7XpQv3k2Vv4F717sCdnJCLiaQr1MzxaRJ5618WrUywaPsME1qHx36jtYxR",
  "key22": "4vJwhFRpvHAnFKLViHaesKwmSkkDpDDzZjAm5SireZyjTwC1t6yCkpES7VEoV87prkaym16QU1zixnsM2LV9iuMn",
  "key23": "cQd5UdcK3GdjrdktfShvBtEATsujjSwF9Wg5377Vq2tKEmmaBNXLTs568CJKGDpDK4SM4XVByVAWMzewsmg4JpE",
  "key24": "3MZknAyPqi134wNVGZHBYnmHkHjeJaSw32bsdyRJm5JYksiqkyWXnnJujjYSoZavzEQ8wRouRqR4mq3VfFconmRc",
  "key25": "3gUE1d8C4dVVZzF6r2Krbmox7hZ6YeLsdCrMEcTf8LabGDbWhA3oc2TiA2km2gnhKC1aG6h87UWyA7KsHUDJ6iCE",
  "key26": "55ccqq3v9wr5zEbAEbBur2mHgKKHvwdNUiViRYFS3r5pvJd94rBYCgkobDEDvHpaKhbwqPJTFtJ9Qg2g5ueepd2h",
  "key27": "3Lwsh2Xe1YyjsB5uMaRvFG4d5pnf9wR7wAgd2WXr9CTDtMAr47XcFBy1gfpPH4pqEwtvSDXCAng4G8Pf8PVayefc",
  "key28": "23ZkmCCwPUuxoJn6qUTYJnW876B96nYZNgNx98zwNMUGF5qMCLSHMTCEee8LyaKasqJzrr56E4wpYY7ZV1hnocNS",
  "key29": "4ctPr9EFwRQXeHWBdVjVHiiLg729WFBExkJDpphFtHjYzDBvZ4iGbchcba6WxrdLRwQn5iEiPEKQ5RuoUNxF85F9",
  "key30": "3DHn8z8nAvsnkg7NnA2dvd9mLRVBQNase2sw5Ew2onjCnUDdy7NDFQevNsWuhL6K8wRSV5MaaT4unHKEV9Bzr6zP",
  "key31": "5naFwm3nciR1jRZS57yt1VLYpHfKKWzhG1NCRboLrcPsFHd2Pc6RMcD1JyVHMRy2JD1mXYnWzrDKBpAw4ZHaUrPt",
  "key32": "xLKJmWBzyEfJgeAuhSY21nD9yzMwjFh6pqG4WF3JAcndETbh1KkNkRUhrkWcZP4pKPXQXHTJpZMCXLKPkSyfRST",
  "key33": "2LWhxWMWURD6auZnZPNZngb8exRgJbtEC847qyUQdJ9tX7ysLGnxLvhdxhmXiuSmqEQT3VsrqZfZptVF3dNpmg4g",
  "key34": "3ZDzbYsyKpPioaoezSYWZN4rgt2yzj1TBQpNYFyqWJX8AMeXhtnjo8we56UYVpDPbqesWZVc4ERLscxz5L2QXZ3X",
  "key35": "5JGHFDinoit5cYT3ors6dVVfpTi6eWoGWZKToZfTBhads9sxAWq2DcVjL9gE2cpfRVkoL41TsikGBzhyvVX6E4DT",
  "key36": "coST2v7jBKPpxK5z5Nx4jaDQuS4WSg8jyHjn1Cs7eG68aALR2udkKKN8AwrsdJ1XcbYmoTdUHLwn8TaDc7PR6De",
  "key37": "3tAqPq3X1hp7mADc3isUY1J5ucqnCjTKUgwhnKqbrgzNVbauJGyraN69nTmGDH3YyhKxLf9nzs67hVr4U9TqW8L2",
  "key38": "5zZuhWHNBLFrkSdFrbesjs3Hc1oCWmqcasU7VAEevWTMwfFNmfJTgSZ5Lg9ULudVw3MxJntMJhDa2UzLWdKyvDua",
  "key39": "3SSB5JAAfYFNe4xPM2oA9QQBCtfQwdyeJDUJrVViv6osd3XroTm2VABjkNLN6QPf7JUAGasAUyfC7PA1YHm2fSxg",
  "key40": "Bq5vwcUsPUc3bbr6Zh1RZDy1BRNJu5cYX7GJvBB7FTdCAboFudPgixgFy1vm51Tcv49kirKGNTtD1TdvJzLYp2V",
  "key41": "49utCFiQKXuckdYV6RtANzUX7h7MYxnw38EKM3AkNteyeYuHrDg9Xkzcs4ogs8qvwbkZF5vjZZCzX7s4y2GW5PwE",
  "key42": "tVKzdaRA4ABTi5RKYSafpnpSTbsLrNbxbpYAgd8asWBA671NwZZPZHxutXZrsMdfRdyMT2zLywL9ZSjPPJtsvZ8"
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
