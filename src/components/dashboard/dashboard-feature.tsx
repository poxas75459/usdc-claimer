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
    "ugw7TwGYWdjbAqoWefM3cp5h37DhgwBrXszTd9ic2cqNF9aU6DMxDyvroH6SY3qaeEMnu4tBf2Zz2TNbjA7UDmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dG7qfodsawWnxGuPfHKiHgWxrBUAtpAtCL82NfXcJ9FCCpbRvFkboFpuxKyxstXcghe3du7sVKuSt4b1shWKj9f",
  "key1": "2j62cjCWs9JLjsWCfmn6T6ekqbRQPHF24uP2Q3aXpppwbsXYSnprSHpLy7eZpJa57ZviDBLDPN9mntdY68b3fvXq",
  "key2": "2g2VcnHWcFYrtHRawrnfAkTvRXeX8CPg3hgjxJmLhxYMsdztXA6RWAbbMAfbeYrUQd9cxSL18YuJucV44zd5noL3",
  "key3": "4KZ8qSp64eGev5WrECY2wAPsARZwr5fXYkiYtAZ459FLfqLXrN7oxgxd1Rjf1Qba4xzz6dBQpwNkWXY4LpduwvWE",
  "key4": "rNP2it4zZndcyppZxB2k5DuiYKAJyWcsiDX6t3Gf8DjosnT9nz9nFy4meyrtgRVQ3LVd15zMvnk7UFteM2QDk3F",
  "key5": "21GVZ6ih5WkRopmQ94uMWncDTdJxk8SdNeC1GsaJBSPpL9XWPoDuxDZtxnq4QiAuWdPAZLSrgeECVTVhpEyWuFy8",
  "key6": "VWRaJ4W98XFEHbucYsyCpdvYceAYKVgGjkaHsZf2knk9FjbK78g3BnW59tMwG4MsjXDoQAAmj9VCADR5g24599K",
  "key7": "34buqqZehKbZpBTMCzYRzVBWcp1Qt86nqkGj32yHRAp2F4wMrxmGBNHTTLd9aongxWmJaLVuoGbWA5oD7L9KZybw",
  "key8": "2ETtPgp4daGuCNCchrZ8mcV8TEbUobpx1eWAkkBEGmYXh8AfLsDvUvfsyrHhmnHBUoU45XtWTMzRbrZXL5msVjbR",
  "key9": "5YWQ4ijVYmEJWpra3xvZNuZGopD59jaD49FyKqYctVsP6fszBsPP5AivUpMVSaD7tufijoq53ep5utYB9wccrLxv",
  "key10": "4X32eijMrDRiQeqcc4ChwFEd1d8nNGQGhUJs967z1A262TudgyVKSW5XRDERCTFwq6E4xk7e1JnynspGwWzMdpbf",
  "key11": "4tx9d2Av3nd6dxRHYVJepeGzq4pGDpvgGbYhTo62LZjgQ3Lx33xuac8WsFM5ZZUtZGoGas7A87nWEBGK7jHqy2ym",
  "key12": "44V5YnMPpvVCzpwfk8f9kdRWLjvTuGhuBh54oWfpNRa4y6kgGzX5yUxSKhg4dcx2fYAA8k17XD92apP6zqYsCQ4o",
  "key13": "5oeY8Vhd6kd9dJYmEVHNS615gVc54xBrGcXKcZQLKD9RrFLpPskjHom5BtRnbLaTDdVyrnp2mFrCQnd6U7cLQCjz",
  "key14": "4KEQ7QCx4wwk1TxYcXjundPJCTCQHgr4EMeaohbeUoxu2UjGXwuyiQdRmcjQfPqdDUBRiPxwETPiFUVvaLJd6Cjg",
  "key15": "41fWcbRYsbMkxVFRaMALTv1MUhRoP4XLovUqgJBmRx9YqMSprnUPrFPoQTxNKpTYaRKaFxobek3FRncqMeV7Bz1r",
  "key16": "4pct2RSPef1JCHXVjHc9KPJMzb47P4Thx9W1ZxY91pxQYbZ13Pw2NUhA845QJDqHAFvRuSVBkKTjQik9w1eeTHdu",
  "key17": "5ATf8dnWgv2ye4bBGqCLYT1zucrMBSXZDQ1Kgi4Ym748G8SkCRvwncEGfCnZhSR2HcZrgUWgqKYGZ71KcHQFgmwb",
  "key18": "5VpcuRsUJaA7nMzJqeEU2EPfQu8bjqzT5AohhXbgPk9zAh5LoHcWUgTpiP7g8dWsZ8ztmy9wUafY9bUhaWfpHWE3",
  "key19": "5LRwrKuEJ21iEDYkJuJxAJLeR6AzMUGo98UHEZxckY84k8bDKcwAM5c8w6nQXZL9YavS9J6cPyNKW3T2uBUm9f6F",
  "key20": "stccFatEjHnJbknDzvAP5rZkFLUG9TXaJDny7ZhDWbgiXV4kQm8Jp28j4LULKESgkcNDCwdpooS2woRzff1fksn",
  "key21": "31swyxwTY7C862VLPFNDyU9qF5PjYEXyDYuZBRfa3NCxzSrEFhMWF8e4HXesgp8zfBLSS95i1JB76T6V7MC8Huiu",
  "key22": "2nWb5mgsngYeRX1CM4TNCeG7hfc5vWaWxxin45hMHcoopEYdTdg9YH2XizK6oxamSXujP7WTDd4NxHeQS2U4GRd7",
  "key23": "ZdpDbpdVa8wzXrvcZ4kfGegzQvG2wiwzwDaWdbZ6Sp6KuUb48A34N5utijfvLak5Ga3HXMjAq9oE86PvpoDfr1E",
  "key24": "3GK4FnZoLZsHDUrjjPgeCNypSYYxnqUrvn8aCnLsh9o769Tq5NXrKSEhJUmZREJVp3e6sHr1VrmNGrgq1fQtCsZD",
  "key25": "5zx2KPmrG3a64MY1BLiXp9Va2Fx8G3n9EQ2AjN1oFwkAN9CoJRfdzcM6YAs35qcpRcqf6JpHgMZ5sHAEexcoAcpM",
  "key26": "5tdNFH2hPxRWSzmoFg9BF66w5oxkEZJD1UnZPa9W2RYxpwf3mhycTva33BYyzhvd276avVLHEenjEEDPF7G8vUCF",
  "key27": "5UKbAWv7QtRKXjp1xUWAsPRKCecTrxfC4E6PiTFCRx1ayHCR3qgxMV26XFTZyFaw9oUBcJkNmVrSBfiL4vko49BJ",
  "key28": "3Q8mU4Xh6whLvaivRubgZUj1nDnbA4XsKa7YYbHfVthuFbAkG1sPjZrMcdgAZEkaG5uERuCKKXYwbgQBfRy78A92",
  "key29": "4BH116QGrSMyavgY4dAozhRiS5EVT6hRx2aju1YvpnKg1cuMXmUANwLvMHLrmVo5QyrykM5cni3yJyDiGt8viRyq",
  "key30": "5i4aGKfcaPeBuv42w8Sk2b6WJGQKXrnsYG1LmaudWLU4pgSeBSCqgY2zKxaCLuEAnxhBbzVoarUvRzxs3fsQaJN7",
  "key31": "9XXYgpcJe5oiSPBHi1wPwqxjqXr67porbZwYMSY9d4r5GXNZ1vWYd2GhGeU4QDji3zn9dgmMUADT6pGcTjna5jw",
  "key32": "4Y8CUPqGbtzMjkigsGsUacrN8HTZYnEq95GaEH2C3BQNTz7qjzgcXJtqnpwUaNBa3UjbJamd3E6vPyrzgHEEEJz7",
  "key33": "3V4mHoo5RRB68d8ZcZguTiXfV6KaHjc8YvbHD8PuaiZ1PrhwyBhq4DrBAsyPsypurfHm3c3LbKqQupbTcMovMWqz",
  "key34": "NetVy1Vsvx6y8aP37yeeoYE1jSEowbayTFEFYtSnyT2BG7MnemFBhguUb93XABvcoe5bwgSuk9Tn6jrDguUUxo7",
  "key35": "3fZvwmQa3qPW1diNJbM5ttwD4in3AC6THGEUAqmgLCzAn8wRWwFACiJ2GXRpdzFzdNWGTkvevBx9yEf1s8MzwmxQ",
  "key36": "5Lea3g9id7o3mm73URsHbaZuKSurhYq3vtEB67kGNM2AJ68EXew8EjrwuGiWkLjjftE1oq4kmSoVZEGXv5SGCa1c",
  "key37": "23soBThK5bkVPLX5kMpsUCfiow3MjHash32Chgq68JvgTMWzk66HyrsvKxMKhyb4zuVUNurT33M1S6MQo6qApMbr",
  "key38": "Y3jnL27X2nAAizEh8vApCHHse3Wa7XFzQ7SuspCWKxhGYsLUAELNcDAGikW4fpDT4piHNQBUMwF3gNFAei7sLxf",
  "key39": "24KkazaRB52D64on15GPLCQfHiHWqFKi4Q637RiR9f6n9iCzLkExhoXfxhkZ11PnDmVUyyvMP21anJpGsjF82Wqo",
  "key40": "4mhZnMhuy2JPGdqAjzcLGruyYK62rurNJJ7mFZSW7DsQEnxLdLwLsPDdw9cLPRZPPYTVUFCfjbbQ6GLpVzCXCEey",
  "key41": "x49z3os73fFnJJ8Vr7R266fGiG2AMaUvzoXXpTiA436DY9RabusBsy1keUpuNezaarU2zLjsVcCqg24KTHfb7wd"
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
