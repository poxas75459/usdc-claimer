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
    "65x9Xdp1ua2xopQqtFPi3DiGix9XpSK7knjXusrEcXuXY2Rptzb6k7dXM2DTL8XHcY2JKGWT9r9Z2bN9VxcGjvhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zzqHsY3ZkSmJK9EVoVymPPLbf5GE8fRmXCE1Zmzy732qKm1RANNY4KsgP4qePNvP3sn6mqLBHYsUvEnkAzPdkf4",
  "key1": "4P3tMCjQEn3aKRS8VKBrnjAEVRg6MWM8XCj3uNf8hSL4Y2hyQp946WRdrZgC5EWQFf5q38KoGiNrmvtaDoaNTC7f",
  "key2": "toJ6qmEFoK24DM4cf5iPNfSxcdGba1asZvHph9nwng2ibCfYHzRzDs8QX8AJp9a6ZNMavBv1XFZVz1BLS1w1zVi",
  "key3": "2G2c2uTpXxJrXFUhiVEnudjifc1behYC4rFwTSSpvJxm361ZKg6qpZR1zNmVSCXUVUfh152FPATKY5GbFymmRUa8",
  "key4": "5uz14ETkpVKaMSByf5thWMTGRWuPvUQDuHi1nHGLsRHHU1Zeexbo8r3Sz75dzGBs1mPjoVMgtn1D5bPS7QvV3v8D",
  "key5": "5uWnfTriC1LSncf1tS98sogers5zQVEF2MYEojFp5mvPSW1LVMHNSupuK2kKqaQRqGdod6UKbVrjdPe8URfUkwPf",
  "key6": "5fYX7ryFnVMcJ9TSsM1wZsh2LQaYnaiboUthPWGVbKkdfJftoEAaU9yhCmYZQ3v3eDe8iDWoF8PMmnBVdBx2an4p",
  "key7": "49jhSYHozWzWHbQZshR5rzxhkUg1pmUpT7uoARsLEGcxJzkuNhUbst19WVDQBwyj8R5vw4D5jTnZrXDxz6DnwnMX",
  "key8": "GB8kSyxqLrCEMyDRcXh6mHRUmCQbeqnM2SjwfF8s27JRbn2SDx5nWahVzr6cDDY4YhiYP16dGBdTR5Gi7GS7Jh5",
  "key9": "4mvisUcmjwMQyNAs7cYjwzGDU9odG1tgjGSXr5bGNXti6QPkvJTbvjwm62NGn3qP2x42SmSkBwxYihSMEKVBivmi",
  "key10": "2Z57HfDWVZLtzmHT25Vntb1Rv9ypESBFY8toEumecteTWRqWeMVMR4sgzvBDMe5VitVD948izAzTfg95Rjfu62by",
  "key11": "5JUswKKfLCusYnd5BjYsL8yuNMGWQtfxiKd8XMPJQhUZxNTCcR7zYgQsrn3M2uT4xFzLEECLMb2HQmLR54pFvaoq",
  "key12": "4bLjNRYAwbJugixTdB785H5wfSWsoJdeADwgJRFTnYdF1b3M792sWAdfZBJC8wBDDJkwaSyUex4Fbi3GQZwkeMzZ",
  "key13": "4LsfTUoUXgFC5YLRAxmp7yHWgi9aiRqWyWBsJ6HAo3wnC4nPTNJPEJt56SHHb9dyibmJS9EbLqvq4qTk5zzq9mp8",
  "key14": "4oLs5vJQE6CFqw3nzXUKsEGAXuwDeM6YF8qdyQWfSEAMz5vA19PypAshgD9aLiL3jCLva92JLdEBU2dwYu1G7P3K",
  "key15": "W44vVNbqBo4XMUukhfDwSUR9tSHXmLpiU9YfqqumnR75SDMNZZQw2sqN3N8z62AnoJavDpeeoijXqpsWJvZbxgN",
  "key16": "5ro3m7iR3iZurixp8CsyRwSWUvANkbUMYkFscuSCBdYW2xXA51Rac8nW5KAf42mvHS5787qCY9ZiTREaGy3MJZwZ",
  "key17": "43m1cewnZhMejBUSVUHC4WKqxvrYeXu84cGXvDjfeCXS1Y5PMmKqJ4NaqEpVT8RPETFoBSYRcaYaHLBUVKadAc6a",
  "key18": "4zshKNwSUY5zQ86ZFbpFHuYhZsRM2QfXpkruen9Z6E1Q4aQqbFn3EV37AWiPtFsi6sdb8qe2NEng6C4cMXAVSVC1",
  "key19": "4ZRFEzApCUfAfAXdLBGEKnCzMGQ9thQqoXtpYU5xeF8ciQui2AdCrKTo5baFXAMTBit1ZkY4n9sqFnyuiyAFXyhR",
  "key20": "5Nuj31nYV2HFcp8A7injeFuhjf1ZoAJ4MvUot9jQ2HtnVbQohqr4JkNriu8oVuKbAF47YuXTrETLyA9S2M38aLFc",
  "key21": "3RCUTrptTicP12UhDrWGrS2Z3fZLE5Y32ReTNSow7yiVyD79S1mf9ip7jEs2FEGEQQXhg8yg526f4T4KNysVaQg6",
  "key22": "5dZvxf2bDq7KMGT626W83U6fZikKsHtUUX4F5ZcMYbZZq8H4atbpjW9b9BsfXSbjHfqc2Umbvinvodmafn4qWAZb",
  "key23": "28rXhsj5jaK4ECtMyfyvinws9xyKaPZJT4PhHUqjAQJ1nQGU6Bhzu8YM6jjzibbdo5NyFNqw913sHW97iYWBbda9",
  "key24": "3jaoDuHBhxgZZmdKDVEih3tFFx9226V92NFrroNkBtUNECWcrFaMEmMwvnz6y7Vmu53YM76YsZyRt1sMqM5qXBEb",
  "key25": "5VwhrQo6dqiEJgJoa57n9AzjczSt8wA1zJ3G4LSEDXukABerBCGtN8tM28s7vMXWgRSYoaLPkrtDvLcZ84TH6rmr",
  "key26": "215DN7d9rCyNqmR74NjqsdcVEAm7R39XaVRXSRqMuVjV6YfMcw2xVYDoKhwSaQfbpwQzYzhNYF7hxu4WfHoqxKBR",
  "key27": "2A1Lj9ffZA8fUFjCcTm7BJvrRktFrfcNRM8k8BNTQuuWZavMbwYmQPYxf1TydZCbkVaLoSXJZMLNwT4AXApcHUpm",
  "key28": "3DTVC3PZwNvwT7g4dY3U9QYLmy4vfV5jyBK6YrzV7Bqvd8QBZ6AvtcgoVfdparrkKSnmfE22ShseQ1Y9HjAM3nGw",
  "key29": "XBPSqZ7wfMD8BeJAwYecz6FHjNoc8KxJ9uKrcETeMJ3w4DrgtLTkohBTYhubzqM5ykjpGSyLJ7GPdQY3bEFKtbh",
  "key30": "22eVbjdFHWJX2G7WjbWQibVuSaTsxs9cq9aP63F5Wawk15sbWj7dMikLBfnrZu9wepXVfvfQXuEXAmnodof8VV4W",
  "key31": "2Epk9xhTNee2qDeBuxo5SrEwtJv6m1Kv42fMZNiagQRMUr2UYB7cz61jAuFAF6H4ftrKRRbgQp9hWwfFEjLxzNTM",
  "key32": "2Vb3p6NfGKLdihocuof27cUC73DGabfvmjrtrkeMxQoRgJ3o3ADw6CjMCxC4oZpwL5pw3breR1Fe5ut2Wf4qf5fs",
  "key33": "5jNZiwgXrd5KsndhFcX3mMmiDyV7kCQFKUr2aBNacXEBsJA4rpcXJQ816BB3ATZBE5b32KuUVBn2X61Xgk8KWStu",
  "key34": "3SnZjHWmVQHWcZje62ktweeZLX927kkBEzwiEQxkNDGJfySUDYa34xjseAtroyqcz5z56utsBtdA7ty8Ej19q4KF",
  "key35": "5j3aWkmFtAyd1tufVrFuGxAcgTn6sbKz32XGXA7oyGXp7w23RqfVDU7GniLuk7HM4HLr6ngJ5RVHtrVwZSyzqqjK",
  "key36": "xcFFMaodkDYqrbcVSSFTanpiMnAW46YXvmneoNaXVDsm1LG7SVTJHfKhn1tgkhtZ4DC3rFZNejgtwakUTFRr2rp",
  "key37": "4R6kZrEFcZXJHM9jRt6HA8MS7rrLb2BKJuXAkNXaA3kZeSXcfRCpDCABNAS2AE94dzP4Nf2xGz2r6UkPCzfLkd73",
  "key38": "4eZtcxS2X3fsV64MZjJsgy28Qa5QLJMykg6GEnfy5iZytPTyRHHzZJKhvCHrfcTByQsmupuq6QkdXMXqUB8uAmpN",
  "key39": "5gzLDv9Z2AoF29MF7DLkVZyM7PcjSmvvo98CskK9WTbh5KmHGh6xPoXdXZb7CrcdrWVfsSCmudbKc3TN29rV8eSq",
  "key40": "3Urk9aSMh2HKFYBadqCMfJ43AmKX8XBimRokGi22TBgUgJd5hQ6wK7aXzmy4XWZ8HSVyAxAyHDZDfpkLT9NVeUZu",
  "key41": "57x1nyH1yiYcAWcDHp4krnvJfnEtuhY8a4jevrhsXLzXTwg8wxnvi9TDteHUvP2DxMVrdND82QPQUERqNaaST8wd",
  "key42": "49pvBmZxH24GG6PFDenwZuVU3AeaBbgQDWd5URhJiYz6iJ4d7ev3aLfPJuLWeQH1y4h2TC45brJjVJ89iQQCy8bj",
  "key43": "ZUhJuJAvo6m6VjxCiTMBUzUWMhSnN5mKAiuqsmdqrLK3BtScyodeubqgdZsfmFt1DRJ2TBmWyg7AZrmbrqZLvaz",
  "key44": "5mjCS2tyo3v1C2WjRFg7M58gwy2hKxD6dZdDiqqgg8WJpAHJmLVQYzSDd8AipRrKBqguHHCokrVyF9HHCtBzUk6J",
  "key45": "5Wntk4AY4bCMNazK5rV7bRVGQVwiBdGoTzTWEdx7aLL28rKG5XVJUHv5LkaFmfUFuKmoNqrFNM7ojcSqy4AY4zTU",
  "key46": "3waboXF3ChMv9xfFrJo5EenXeu3mFtFXD4ZogGbUFgjAPRHHaqp1fmUL5e4ED45mc12kALvM2UXX53y3kdACzkqx",
  "key47": "2PPj4EzQZRmovR9bh8vGTDa1G52fFUxcuRMv4sk3xr9K7pw67qoRdbh3QxEZ3F3zaNTB33DrWtDwagd9baBAKyGc",
  "key48": "1zC8EKpNtigY3Sccx8P4p4ZjZrQGaFdArJRzXKkmpvj1WACcbtvLAnVFn8Fm3vCfcMrPsWo9uDeZfc3321d6Ggi"
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
