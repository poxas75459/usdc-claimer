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
    "5pgEnM7bd3fmCZ6uGSX5URDA3yeLWevsGXiUp7VQn66RtdSPbmKDehoyed3AGjSfxCbcmPnveJMEdEMDU4azxkvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TFR86MseBvSirsPH7pGzQghRYze3aLy4ZrFQ8XXmK86XWktsTMyBVdd6xScVcwSCJyqsLqCm8FzYXe7eXqptXGc",
  "key1": "45Dq9PgBTcid7MTW3uFYd8jhVEYLAAW8sxJ8gqg8fNS9uBfYxUSHFowQPFk98HhMnE1EfRVLkrxnDz11HzyNPWkp",
  "key2": "2eJEPYxhaUvGYqrcfrrihh5XeCykMiVuzvX6GQwKDkgK7r1auT4UNXyofB7HuREMTiyQVhDZ4dWytyu34nLhCZDe",
  "key3": "GHRorxWe3vna5gm3GzXJbECbDFAnGnuvWsVznA8TvkKWZancYzjB1YSQxJ4t76A5Qe436xCYLhtkgCsqThkt93t",
  "key4": "42EMV9n7PJFJnpJEW15GdAZ3KQ54MGJMCatLG7UuTNWarRqRWYmyWapcKegsKcj38xKr4tuUuNEX8g6xF1SwtbE",
  "key5": "y7aQhevL8mb22KpZ8xHPXRAXdd1TScBZto414YJVm3dubaiY6nEYViHddQ16L8hTCpJFJGiRzpM1xJbWURq5TGz",
  "key6": "2ywzkJ1te7yirZdvHEcKMmGsJFEW3HcirjiDuFW2UZuVQt1uwuaQh7oAvj5ZchSCQsKuxGhesTfASxsyCMiw3smy",
  "key7": "265xadz8fAdJgY7DcdjpCeYjX2DbVitVnJ7G9kNrB26taKQAms38HFaLkJLgDDv6tD7TLA4BzULiwwjrHfcgmk2f",
  "key8": "4sGNo5TWcQB2Yxfj6Vsx31La2QvuS9ULjPgyCJP7dyofw2XWRpzYQ2wV5Dk3SGw1TmAL2jGzMuNSffv72jyisLaM",
  "key9": "2XABBKywpm8Bcd9hzqqrZH3okWapRMVTsiXGLWKmCZR8XEWgaGAF6BuCcjCM8W7jHKfA1HdYVMQEdMyjrP9RBxLm",
  "key10": "53hsDu6LPTYGoRXJAbpJWigdQ9e5jaq7nBn97tU5xrmQoftoYZfLn1xX9rcr6VZnmkGHkL6bcexPHYDgFyBiPuh",
  "key11": "2ySZmL13bcnwnkBPRzxTbN6KtTVhVykGsQVSJWSTGRtb2nt1KzyyXXNSk3rW6L6heUnUjKDrRLsXg53wgoeeY9sc",
  "key12": "2rsp1E9LRwovkrPUZ1usqatRaxDzA4igQxQY5tFziQDAUic8hLiFV3CWWgvyTnL7CtrAXw9VBb45vGQmUNzEREaR",
  "key13": "3yy1gFoUANU5SvpAXK3ET6GDc5xhUt6dtCBWZFaR6v1B7byjxp38qct17RUoZZSC4yoFwWhZ7RkTQXPzUf2vGSrF",
  "key14": "2v9RJhUU8EWLM2N5VNucu9LaxGYqwbobmX7hmEdKwx4SUDGQQqv9CiUfNg3WjbY6xBskXrpU5J4KXy2ADfZfWBjQ",
  "key15": "dfrT7yNupWzvY2T8sL92HJ8wypCQibKvXHQ6ctDrwVjQRNKdKyj6AeLHMVmh1RjH2Jt1WHMwezDNB3aEErYue7r",
  "key16": "3mc7opX5r1Bg7594Wxnam3AKUhokGKq98rW5Sfjc2q1fRqTarNgo5rZtBV3ZApTnb1MTKEoejHjkK4BC1KdY5jiD",
  "key17": "3NimoxAiUKrFZKgeJe74a5bMVo5TNWNF4c8MrHayvNvgPqngY17Rdg4SK38SnoanMXfm7Vt9gw5os4DZ4KgjTov3",
  "key18": "5szifGvVjDBXcxpMmmNMkdFr2RaKSrEoh6A3MBhbKysE136rxG41SgNbEhfsqmbFQxL7ZJbECvxf5aatW6vNwPPe",
  "key19": "2xfG8Hxjuujdye7J2zmwYYLVnEs8ixhJhuE4om3FVpSeo8b2YQTjw2DHHPMGyregr4Y1vmTxMjApykhorY14kwMW",
  "key20": "GwxHG5GLY7HuF5LMWQZi68APejm575wWs38yNmEYeCQxs4MFVSy5HkNXQ67oQorQc5ZG6XpzJjaapBuUfgotV86",
  "key21": "2eqx62scFQhje1hTzGCboDD2WRPVZZFPUYAVimseMmznCWBHcHFXR7szTyVKjo2PiKJHcxYvSZPrayv2XWwpW6NR",
  "key22": "49HoV7uJ43CDcY11ciRFA6ihfoj2GzEiyWQwt4QpNwym8VDMwdXBHkboaXGDiqMzwNCTQhQemiyRPLwgysxUk3W6",
  "key23": "2PaPqEmMsfpUQjC6oZWVesCibyPazXGdkm8gdYaK8bmsnSoWshjkUBj7JLsbE55d4ppLNi7KaQA1ACSzqzu8bQ8b",
  "key24": "4HHqD2VGaWzcYB9NdZK8umScQKMqxFptQVk6XDRStYgxRjqtdFigwb3EyBFUckGVEaa79t5XVT4LsUVKs7yJEc73",
  "key25": "4Fgc9CKH2uQEM3ryqK8QfNEbxtXMbN71F3GhPoUBFK4GSeq8AUeHrS7EAR5mbQ8TJRdaKmVZnxeKeZoDtgCiCDcR",
  "key26": "44ncmLYyvjAkn4oCri8pjTUaiCTQzZS8AbL91nZnZwPCDuUTBDLWiengyCoaeRoKsyx19XSRUcfVitgjZBAs58c1",
  "key27": "3hUXbZb5oun7baE9zBTS1eVJEfuWFcKErDEioGhUuYu9duQJDACqJn4cUdAzmrDa7hfNZXcwamC3KpyCYpXVfWYw",
  "key28": "3fKR5BjexXH6YXx3XV6ToZCgkKF5cN2Var7gB2Pcp88RoVhAZErsYfgvHNbPwAb5xrFw1c3PTjGHHPGkP6TiNiYb",
  "key29": "TDU96DQp5kqmcibRRV1jKZa7shVgGoiF5pQ8Wt2DASG9DZABqQWEXjL4BscyHaEeDLfRWR3Nij6hBoao7B8qHx2",
  "key30": "WrK7Qw92aP2wwmFFVLBMbBJ4us7s2GYWCQNBPQS8gXfTbRQtybFC4zSTvy6dBnRNaLuF9rVtWbVfN64Jk7bE6dE",
  "key31": "4zjvqHuJXigJp8SrofKzF5hZY5EEQvNJG7nKwuSogXKRH6F25KQtfkqpD9eSWmks8pWaYE9XVxJsQGWvmhFbq5Af",
  "key32": "HpUzsEru3x1dHCM5QGbD3h1Fkb3che2oZK6GrNXayHYNoh82zVNtv5URV82BXzUq8dQ5qhKRANWqetJPpSceWZg",
  "key33": "327Nn1fN7fxqwcPMc8BjCKQmPbTRrjQyu6RzbnhC8LHcn9c8nNiMLKoXTeQhZRaUBKWjqFqFq9UcjMmhFti1o2ET",
  "key34": "4En7CCSzirzRajeCiiQyAtoCnY4WQvgjcGT32NpxDhJYMxUwFqNCxUgaqJ1FPbNqtS9Z56EgH85H2Bf36h6UPQco",
  "key35": "5NxAdbEEpPTvKXQEdjkH8aPm1ZQeZ3r2WN5v2SgetTTNdfEXw74qqg1V8KwFmrKhMJKm5Sns6AHStrSJBNgWFxdF",
  "key36": "uMAGoUqyBCfzrzV7AyuRaa6epJK6MonVppbWP9DLznkVdGVGA8oa9RoF9QZu4REb5V79KDr31oXRcyunyGwTkEM",
  "key37": "2CJn7eVAwkGau1UiiB12YvfnivM4R7Cxp6xQsb5k3KtDnda9v6vfefi8cujdqDU4Wy7vNvjKzQLmEq3vm5mKBBDE",
  "key38": "4D7HT774hYyNiLyqNgr3zotc29GoQ8UX8YC57ZSH9UvFBYE3v9r8yRH5pQ4BFTbaTFx9ybMupBwjHWpVKZYooy82",
  "key39": "4evYmxwXn8E5iNv41hcEtSzTNcDkB3c3eRH7asQEpTLv7AF27dJ3iMmCi9P8Di4KN5V4boKVEa4XJZFjEZy9AE8L",
  "key40": "4qmFBhseez7xeRpWrP3vJaQBbx5WEbBS2U4d8NgceEgoNbqPwR85X3ARGRisz2ynFCg4YK2kyfuccPKdaniqPe7H"
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
