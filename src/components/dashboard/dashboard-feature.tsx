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
    "4rYLcRQuqX9qrrEcQZdwSJ1HR3gx5KGTG3iydhpvnMKQ1XoKoTEar7mVTaSJQ2k7HsNLhj12WGTG2A7bgd1Y3dBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AhRtA6KuPurXjkWKzfCqA6PT45RN2Nic6JgLABaizy1xud2mBdkRTC4akZprR6UjsobER3uaKHbaNvWexKGjymF",
  "key1": "3V7NVKvt8msQgNyKSW15R1mEF2yEU8MERkQfD6YUSrPCceaQQducy9tSaNh997pKpQxHC7yGKWwS7ARDvsBUeJ4F",
  "key2": "327qHpuNKJb6wNJEiVcygBb2RSR1iH6tPKQ7JD6mwcyRuRMce1X4p6Pe5KSG7TZvzAYyELRSMRRg2KbkvdMCtmSJ",
  "key3": "5FgrgvYcuH9HMYS2eDSo9Y9ggigH66JQaJcm7TWuei7uW5BfeXRMxuwaEKpqg1Ws7kMFhgrCY7u3AQToaMK7oMzi",
  "key4": "h8YkTq3vAvPimN7UeEd9xecBbSHRvwDAUquxfywFfSzX88rvgq1h58kZmiBdAZYCUSSosdKtjjxDgJ4rbmJB2rW",
  "key5": "5AK1y6ctmznqiMTT8qdFqVwaAn892P2Rhkw7CSQXqbpgnkhbVqPVkcWt9VLCXMTFT6fozB6xzwvfvLXujdS7HqLZ",
  "key6": "2EkVFhhvrDCZQBsVSRum8kjimaZW3boA9h4BXRHVVMdt8zFKmkvPsdGBRy5hPWGgPWKw6LyUGjdKd4ZVk4X7cETG",
  "key7": "5zS3sy9uWZuvXefsf4mHtPPJ4c5Mu3o4HxeHeYSjPFu5togUznNZ9Jwhr7S6TsSUXwTFh98mbBHXxBVkpULjFikf",
  "key8": "55fmw14xVqAPKcL8VjGySrFjkwsSFEPyDWoFypn59tkbUdTMukocrxdT4mHiZLumMFHHFBiV3nsUZ96sUPVu6JVR",
  "key9": "5ymUKHb4KK48TwoNsPoeBHJaoGdajcAKqdSVuBTKvJtS4pMSFPh4bK8A5KzavqGfw8k3acgwzEL2STd1conuFcDe",
  "key10": "4NZkUNDzV3n6Cvn47zz9xdYy1rVZVitEsuMs97z8xBN5brGYQH11dqSjbp1w3MGLM6JGogLz6tBTiffD7PxLYn8b",
  "key11": "2TE876Awhj2VYkyKBzCrQvidTerN2mUy1wYReW37aSYPm1JKTpoFeBwdmuWXMVFSisk94HtRrdYRkKSsciFYXRPL",
  "key12": "4D3Z9M6SmDu93wX99T5sccUeyPDahhZPgUk2jxmaHW9cxAprhRy9FTAGadW9zZHQvrrrt7iBhthCnfrWbyYqsTv2",
  "key13": "2ByT1caFdQkvmRUtERaxe9K7G2MaNr1qid6zn4A3eZiNBJnmt8udQDc1atuWZXR8zm9e78rU12Rjcs3P4Ls6iPoj",
  "key14": "288vGAWB5XJPPYBu2ovLxvmh9rNM4W5fpAj5R7xdvZSH8rYuNnHqtC7KKSRpBCjSNa1tVpF1AYNG5VscrNtUwWum",
  "key15": "4SigUjJ7vu3J6tuqF3jukfcXzeTsS5ABeWHjLYhDD9ZxziR1hPQibKwWpgcqpD68yVgiPXmaeBL2Z5ArpxHwyczh",
  "key16": "3o5Ky1SFfbB2xi5p3xR5TnsWZkQurbfz6JnBUG4CZbqaomvSAwMmTdFgKaWw3u8TKsdzaH4EuL2KeFC6ySstkDDv",
  "key17": "5S3Sh8FLnVyMBzSSJvG9CXWX4K4d4vwncJ87g9HBmPnqfY1g59kM4fwfdaF86WEK7p6oA92YXjn7dyxs85W9Rcem",
  "key18": "uhvyNZ9Hgx7g7roKpd8rSYqtChdU8ufqqLp2SojfaA3z7yeNfEuzoWCmhzTex3zoeGUppN4x1Whh97c8N4XHm2R",
  "key19": "2ESTKi66Jy7cmXMKWBQYWjLMTUJLasHgEAkPiDdn37UDwikmPg5xE8bkGUMfXzN3Lgz6JWTxXRvBMKHk18izbiGM",
  "key20": "5AZL9Xcd4jXfR2ijsyKo5AQ3eoGqX7wrrEANxPHUNq6au8tYdB6gyLucvabhUDkPpRLQLdVae7aLe7y6qYWdya9c",
  "key21": "57u25nqz1kYazU7aMcwnoDzRMGU1yfhp6ouvg4Sam27MvQvBjmdmpayEsKZ8JVRZ5daFp6a24MmpXEfXwLZ4GhA9",
  "key22": "4WJpHoD7UTAkeipqptzJiiZWkzG3EJFWBdNWMfCBDK9R2un5tMX7epbqxYfn73WaPGe3TzS7pMF1e15zam2yGVJQ",
  "key23": "7WDT3cg45Cnzq9HKDzj2vUL5hBNiymUfgaM6HLidXycYykbPF5kQDGuSB2MF5fTDQ9fqan2QTR7ffWNdoTPCwqJ",
  "key24": "3DVVeL9Ppb6evG1uThasYBzVA9f6TA1LSHeS3gVyUk1mkEbaWv41sXY6ZzevrAobrQ9o9E8okQmxCmDRhZnJiEz9",
  "key25": "58hUSMtsg76pXMZb6LcMjwVW8J27fJVArFwha7YKrx9BZ1eBeMqSTpeChTTzC9zzsf4aUun3q6eWUiHH7fn4Nnyr",
  "key26": "64oVNSvABunkE4M6kSYytm7gapbSrT6eHNRG7C2NzBgvZSVP8WpXMacuf3tEhbm3Y5Y9WvNnpvx1syajx3u8A5RZ",
  "key27": "3NMtKMHG6wLEURs2C8P3eoDNJdCjxHyR3CQkRufkJUuf5Z7Rua92Te6556qRnR1EpuYxRp6EBW6scEUNUHhh6Noe",
  "key28": "2M5GXS35xZrTAZnXp9m8dxduqw4J4eGQ6NeEZv5m4eKdCHpiq1P9afN6yWcKDdReRqTkC4tkfEE1kjXZx8cUC2zJ",
  "key29": "23GD43W4dt8c6Vfe6ixZvV7L2eiHZ2SAxjD6JZZkry6go9ADtU2R8JKrzcDhUwJE6t1A7fUH9GnibKo5q8hXNwrH",
  "key30": "2ETjth2D2Dkcyyf8FYDfAexSDGs1uSXHnuGgtQmdhvTNGe1tMXWLBGmU8w1soe4xwr7cJP13B7FYZ3ukrr7SYeWj",
  "key31": "2MDsfdAzwL5pLD9h91M4dwzVjxEZt2QxMyfbwgJREPxS8nyqokKPYJcfo9Lm7Fqr7SxWZ4UNvXX1358hVY8etVFk",
  "key32": "2tBRVsym6SPomDxuaQn9ugouqpMw5K8uwfqTsjK5PndyjP7FDp1qrwKxk2GKMAE9kCq8uz2RWp5bAFL5AxZDezcr",
  "key33": "2uoGWRpeY4cqXhK3JcGqtYEd8BNmV66kTSXdZzeBjv3aW2v8eVuLeS1RccZDUDaApNmDEDji64TnGM9dzXHDgt6S",
  "key34": "4Yci3zBoSayiuzQtXgz7Uz6ryMm83i4AQNHA4DXxjUhhjKc6FV47AbWXWAob1nhgyFwSVP5LjXCe6Sv4yjbBTsbG",
  "key35": "5WaPTw1tTD3GbN47JzefvYqCdjMnYS7fQFWmzcDQDQcdbfn2H8ucUZxpR7zMdGwztjRyehN1yLAiUoWE8jN6jCtk",
  "key36": "492yeohvpTEZJ1ikmm7k4KD4vu36cJ5DkxWsqL1Bcr86ZF5oBLLtCGibAjuhdGeRMr3tEL37fo2eTPEzufJrQyWz",
  "key37": "2Bd53svdZ4SkSESbZXhUdVGy3oYabrHtHmZJnEq8xGtRsWDPTd31E9WEK7jLd1fkVr1eZr97FpbTbmgNvfPTbEMd",
  "key38": "3CVuKwDyAVxRV3PKrZ6VDjHWybB55Tgjv373dkctPcQkNp2oXseNvxjbg3TyzH5PifPcgffH2aXpgWoaQ4jkrtwW",
  "key39": "4xXiyiCvrugE8reFe4XvWJnsNReUn1JTF6h75FxxQoCoBpatjqHdqJ17MCrUsyFWsGiGgMJ4EqdQapDsPqE4mtZJ",
  "key40": "FZk8gYKpsa1kp8qUVWLT8ZvimydK7irVfdUKqUm9vjB9AWsksKWg3MrVXzc7Kerr6hEs7ieKEw9XgtLqVBxuGL1",
  "key41": "4jz8gL7FjfPs8Vn22kWvZisuw7GMTXhuCBExjGatGJwJonWuz1xNN8QMEtMag3ba5ydcWCKbPvbZBGxiJCkzYF4x",
  "key42": "4hb4XLP3kAGootUK1LTV6fNPU9f7aUXvmTJSzP4GoUeW17k5NPdojMMVC83MDtrbcUCT5hZQF9ScJorguViVho1u",
  "key43": "4zJR1SEBB7x58RmcKoLi8HoFBxvtYwdtoD6gYhk4ihPgA7MKYYKj1gZXTheKtozciKF89Enz9GhgaYf6t536whHn"
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
