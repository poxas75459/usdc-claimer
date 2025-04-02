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
    "ey4J56QF6AoHsaRBaRr56KwirwZTHB5ejSTAuZ2hZMBf7tMHaTbSkBUzN4insn9XEbVqzQVgeKcCen36wqN4GA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DY4SfJDfomjxPRRPJLqp9iiUAbmE8P9dQWgivgeKULxVnBgQEpMmLq8H8FWcSssMkzWWb6BcTaVJj1d3R537GXk",
  "key1": "3aqbBQveCKZQBPDAAG9CDUyy4dpeXCPo4SfmjHPF4wngqTwb7W5CCAEML6c8su9Xdh5DdZLG9mrbMLDYXNegyeYJ",
  "key2": "2GHpVK8o3P8C7JzywfeqzDp2CEfTR9xqqSa7YS5wqVRjkDfmqE5EHgTGSeUZ85E3uP1xUtrfn4AGxCpaEwTMNtGM",
  "key3": "5bRm5wHJSuMbtTbRq8r1L1fy9K2os2hvpXX9e6h2vkTjJqYwaCUBZzeWikNG2bRTKeAzqNg9ETQFnEhnSWD2nbmw",
  "key4": "9uhcC8X8FzVRGTKrb4HRfAnqme98MtNchSF41F2yBjXa6ZG693WAnpZgcpGiPPaqvyTon2gBa22HerySa2Hivij",
  "key5": "3ByrYue6mgUkXWu3B2FyuwxXw83aKGgTW4AQdK4Nxb61KotoQrSURuzJCc47jfqor5DWYJCzXdMCHuRvDmBuadTq",
  "key6": "2DKLaPkjgdG9y8cq6HVUyigrFWoLrfPJmpPuL3m9NYntffsPuZu6GTRR7ySnXbQxZ7hCbhTf6G4jxo9HX7trip2k",
  "key7": "2dCimCtuQaNCV2ndHLfXgzoXmp9oQbTSeWLv4QvBFUdjsV3JunhAHeQumSmZC4WRzEQDZnHDYtuyCeaDEV77EXE8",
  "key8": "5hujGkC7fT537v1bXS4voPuYZ9vtrGsw8J6hpfWR9qk4W3VhWXHMZ8BZNGxLTqZws6JndPvxYWfS5V3ZJasrncS4",
  "key9": "3CeToA4cx7TJq2Ckk1AJWKZbJzDZ8JYJg8czmWgrZkZzXGiijbXL1b75Xu1TWB2ckCDFFZL2ne3oYtqgZCZG3nWi",
  "key10": "2KvVVYpRVUndJe8W85mGMiS7RTqttmVS4a45pCq25Ys2jK35vAWtCxRCLfNCPAfHbfZCS6hT23XYLp7J6Z2aF4o1",
  "key11": "4G1hVX4qdLSKWyWyaLGQk9MLDX4REAgpWLfCmBxMUDnAVGBWmwmiCebVcUTLmamBWGApWV3Nm4TRYpznZWZD4bBi",
  "key12": "2wTpK7PwqDymL9ULE6hSxdfS9rMja5aUiy56dEjsjvK6m7nPxhiq5Q7KuuVChVCxho7T6U6Qwz1jTzFLbAziXrt8",
  "key13": "LQ12uWXgpubWWovHzm2zEoMr2UQhnTX1ynoUbUnAtxbKRSdr5rvmAeYSEWogHnvVE8obxf8dBLDcV6FnJebdif9",
  "key14": "51UzokVxT7fPBKDWG1VET2EB4wR8PENzWfmf8F2AqtW4eDSi7giCiHETxsyB5HbmaiPJ7MgS5ZZgb2LAHbeZsXUg",
  "key15": "5r3R4fwGunSJFKMZhYbUYMfoEHWJ8PQCmwBFXHmP1m5pEWth5rueN9a6ftdMcEs3RfZ1i2H8QqGXVSjEgdD6q1Ca",
  "key16": "2ctZRMbeGm9ESeYheSaQsCDdmCp39oDkam3rf4rqPW5qE2sKJSgrsoBXy16D729rBDE7BMVf5SfSjSCFnCG4fJqk",
  "key17": "4Fqi2iyHyGSR2Kuh9sx1wW5U8B5Si4P7gYoTvUCz9DZL4L28mtaRw8SkwuFreYLkRdwkbkcjzfR8Wx7upPx2LVeQ",
  "key18": "5X89jSV8MJYzXsRFP5FdgPXFkQ921ByW9NxRfdYfNxXXdQkeDiosfc9D8NrDb7CTenreCnqGXn6zaEUCoqMFgsjk",
  "key19": "sBY1DbNAWs6gvMkMqLjfobUu2CLjg2Ly4PFHr7BscFT8Bnb5N3igLiDosqqUQg6AnLyQzeNDV822FTjFtNY35ni",
  "key20": "5X7UVDGyHRMQpzEf9ukUXPJRpjeYArhBXES6rUL8QjEx2a26QZixQ1LoBtweLnJxHom352LQvwHXo3ARbE5KJJEi",
  "key21": "2z7ZoSh4kJkDPdDYULS4ZcbatdyZ5RQifg5rg2p1knoiCVr7AxuVjWVBFpyuKuEBLaTjAsFWsBNGXFMdFa8WgFhh",
  "key22": "3VAf14M4ruttBRqotFFv6sritWmvsBBJScL3oiCvYqeCEoRE2L2HpHDNmYb7hVJxkUuzqKrb1GQhMchvya4bCdHV",
  "key23": "5HiYGdfAXPnB3XYexYCD7ptUHrFw4TsLSyym39aMMmNW8LouySAPPtNNucDHNLNpGKE8HAjyGamVo2bVqNF6CTqf",
  "key24": "2csr3nebtjHpnPo7NdnK3kC4tdVU839wmoTE3wSLYcqSUCAiG3roxsLSo8A8knfbZaM3vqcHJJtBVAYVNRZNhzrv",
  "key25": "goKNBcPP2ruK8VHxCo1JJn8xS8yEk3E3df4xSsLhNMRdVgcgkGmaG3x9XdyBu6fqnsRbafQtmxwakaiScEYmSW9",
  "key26": "2A7SwnbFzdwRkyP2qn1y8KCjCAHibxynYvBgoYw9G4YjbY772nuJfxZTSUjvr7LpmduthnxkdGXR6Cj6vbaibZ5T",
  "key27": "5AdcoydyMkXo71AsQJh1KpGY2G8voSchWB9cx3GdyweB85cSZL6AvBscNAYutw1NZ6b6dyYzxeJrATo4ZC1tnQca",
  "key28": "4vU8rSH5BQckkPLQkLeuCyhpYiupZtXHpmS53FPyYgx9h7QmRuT5EJaojdNAW2BJsBgkutM3WNzhCC7hstEQHR1n",
  "key29": "4FHBhtgpoFDNozD2J7gbeRvtiJMNRiHxzfHefoaGpoEfSHiV5URvTggEmYzzGnZtDbGG5duoQirFJXAty7LErN5W",
  "key30": "2occqNDKHeGKMZTUWTas3vdR258UZxwGN3vw3Jv3xnBdGAjKq9vc8c47G8nbgF7jDLAje3odM5jyyKLE9eyoRnTs",
  "key31": "3TYpjmyyK8oG3erMoBJ6inMW9eAQc91NAJWw1bQ64DHkSq5V6xgty9qPaRupo2Jjrz2WdUcanPiVfdQvVQDxY9xF",
  "key32": "5gXnV6EnEe8fvRS4TXCYNaW6j7mTR5A4FyTA4KhZ31tRJ5aZRSWioCGZWuXvkdumdmd1j8haNkgDwPTbuVvHE65H",
  "key33": "QhzYf36pjpPB4xDPbSJ12rezBq2oNqg8nE3mtTCpxgFnzc9Mc28wQi5DqJAuyaYgrDdGzuq4cGMmLHKYCbyCpN3",
  "key34": "2KNFn3XEan5GUJhtrRJY38mY1a4dWxXnsdKpGktaFXXJQni2Cfq5D8pLXFnjeJkTaAdVh4BATwQ5ShtEzz4eCNKZ"
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
