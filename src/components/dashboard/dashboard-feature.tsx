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
    "4UE4xNkaxvY9fmeB9Lkj5rtU4w2jxuURWDG1rc7GYgbXb3AXyoA4iXSA3ChY6ZpYuNqxLd6GM3qQ83W2VcHHz3Np"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6d8paH2efXXhANQNDxDGYVHVhwkyTSSCcYjwxQoWQG2UK5SYWU9f2QEQ9fBY8LvRf3aXWWuCb5jjuKSRdY3Tjsw",
  "key1": "5b1uU5iLC92APtVPQvQ9NaUeJefEinNidURuTJ5b7ArEtdyfm4qtYkjdvFXr2rJhdqTNaLYYDqQmTKg9NvsKLKry",
  "key2": "591WeQUhk6hb8btCb8zT3qwDx8ePUmMUUubroKX9E7KYxsUswifeDT8R3RhDX6axaA4WgAESg8HoRGLz3y7znpBS",
  "key3": "3678fYzqoHvp8L6HbTqjqYC5oDuNjo6ArrqiGn7eLE3ZUT3wmBWC7nVrXRAZ7SLNmkgRKfwqyoXFeHUAeZNBZjrh",
  "key4": "338e9U7ejhszupQbeCrqDXy3Wt2mdHquEo2ef39rWvB7GSTwvvbTMnfWCNWzBZ1h1ycVALykyBUbcc95ntt4s57B",
  "key5": "2cSxaU8xgMbyQyH79RKdUM87uKhMXGQaHTgukvQzM9WToSVRLNTMHyge1xnq7ts6dnH36CXAJrDxyiTo3rLL6V3E",
  "key6": "2uHhdBDvUsJp1ajuJqG41cyKoG7sgjk7CP3uK8MdsDbRXThkxGdQ8kddwY6LJPu3LaN2ur1MWxuAVCm7rf8rY4RL",
  "key7": "63tAfLWAK8HsvDeeo4G5JWhXWayAi7Lxggq5juzTQbHP4tB7NKHqGJvNoNoHcRuSi9zFR7gfXMFL47bLCkfSDDPR",
  "key8": "3ckVQBRnbH2yZWpKPttGBttT4uXLnTCSrZnawec91WaUNsucTS7Q8ZW79BeY19ZVL1GYzj9JywgGEjpCY1CD3sAH",
  "key9": "RXxqCFRJ2ziFpaw93htUKsiqdeo4bueef2QPAqNiY5ZXmtxwB9ZDnBoHR5kVQ5ktGoimcy8mB3roDNGY4gGNF6m",
  "key10": "4BzFcUecNPhzpp6bPtLaEKR2vKpsfJCYe3rYsrnE9A6CGSv4jq4heDqWyaPwKsxpxcsnUfBQocMbA2DGSdRY2piC",
  "key11": "FijGFJ1oRkQaXrsMmAeNnLMj9cUWgbX6FQTUe42bDyCLAH2TiMoGBoXjNAaCiHMStUNVWtbdhHyZSnfy3jppwFM",
  "key12": "4Dh2MB3GM4rVEx71io7v7CF5oCnZwNSB3ntfYsZnmatVxgG3xMXJmz5mt9S4FKtNXAbZgeRTRSHhS18rUZ3kLstX",
  "key13": "53M8QRY21tHhHhoF1zuYpWVwsnH2vZeo2jEQLL6eMNaTsLmCD9j42tKuyUjUDWoYyjAM9Cm1z691e6aAVLPKwXJ8",
  "key14": "5tc7a6CDHwztUQjwNPBEDjgpvJcM2jE3KWGM6WCDEoQTUxecun6fJEMYpUxcZaNVFMaogvwBc5to8tvhDfvifzb",
  "key15": "5ecDARLRaxAMJYiLqVD2Hbid5WfLf6M27UjvfAoUuW9dR6c3tLtjQhoyPLcYpr36Uz2dtVHywNDoQgUBmbHA7pXU",
  "key16": "3bovJX5Rc9kPynb6KvyFKUe41FmCA8UyvFxx8Wj9DYQwhWNDvDDgmh7g6CAmHNsuMxX5AfRkwgYe5e2Fx8V8REu3",
  "key17": "N7i72jQWxK5mQsA3biEvSnEsGkjQukkbi6SpDpqB5tBFyaKmVJBc3JB7Ufcxd9ui8h3z7CjjqXSzFaKCrkhHWZE",
  "key18": "4ZvLmRENqd4ZzU4ezjUV7fXkFfkABEdDPzWRL31hDCa2JwTDNQxJLgcPnFpiDUnwPnB1sKdYAyaZ9UtXSfMzUj2G",
  "key19": "57arpRxQKX5N4iqxYjLyviMocz6D94sYjxxqtozjpjy4bJu3R27GyX3we5kmdSxbfunLmeY9obN87Rxjb579RXft",
  "key20": "4H4hcJwstWsWFkGjMrf3ytmvNte1g5M71QcZBKiZWTRU23RnZ2WYoA5ag2XUdHoX5J23iTfssKrwvL3DGa7VXNYg",
  "key21": "4atexp5y9HFaDrGvDgZpcfoxaVikKeB7moPpHBbYtxAKVnFUiRWLgmErh7wMUHeg7at7aDTL2n9AfyVhXPD7XCMX",
  "key22": "4znzou1P4Eprhr8ZBMizNGc2c4pnhE3XDYoMyWCTz9M9NBRs7VFn7vdPmqPa85xkCwePBinmT7sUNwf7A8eJY12b",
  "key23": "4Hv2oLq3PfeFTzmgz7bb9x4XjrnYRfct1kN4UBcFfKT5mnsafCPMz79856J5UGVcRAHqqEVsajBzbhLNHA7dCyjw",
  "key24": "62Dyz23dc3Z8qcEoXyKhfkDGSAyG8d4hcf16egJWCyjxR9cd8DSYcEbdJgBdhScKVjaLTyChQeMk8nJU8bw8dHwc",
  "key25": "5uWBm6SEcp2MP9bhKKjEQ82R351X4XEHkWeKW3ZLuDdgsfJAPhdxQ197Rm83gihJnWhpeFhQjSzVzm4E7cxmJw6v",
  "key26": "3oe6pAas5U679ji8AMmcGWywTb8EoTpjXdmjg2zEbnVbyjsjC2D6cm4srDbwfZJApdmYc6RBh8ySoqwFeREaByn6",
  "key27": "5nqEMxTc7whB6haVB6LVSbS6ENEkVwhNghbkmcgQviKjGQW4t79MBbk43FK7ECWARyL72V6GSAQHNhoiHgM4P25k",
  "key28": "5w4Wt2Qg4xoztUGuYDmztRpxXssHz9aeo1Ey3dGrWv8u1wYUT1QaBsbkz3VsHHzBaN4v6rFjQjjjeQjiANmRFBjt",
  "key29": "5orisQpZ36wcdmL3izS22co2K524UapJb6hBciLsgtMddaChZTLHKsCfhAnssR2Z3Z89TiDaH72zyVbKFtn2PP23",
  "key30": "5naFGZ2NHUTMJjmzfbu43v4hH2ttNBnUyvj4AJAFiXAkwHS9TeaiGjZzQAZT2Cp8CU5u2GRJj3wJzGNkQkquvEYy",
  "key31": "5BSLQTWSCTAcb8BVdjCPoAseQzJgAsBtLqQkapTJjBuBWsabfCTFufsQB6RqnvHgZ6TQPEigGuxtByFgCvDFyuNs",
  "key32": "3Yxpg6wmigu3aomVYmJDFro4K88CJNtSGvmT5aRJNFqS2ue4Ez8xmeY78nUfASVHBaCCRD8oAuaQRjLMrxHXETkx",
  "key33": "63scTy7LPkhqwLH6RGe6ihHfMdazio7X6X8XnKYa1nBfVxkZ6BYkAPDD9Bg4h2BoNGuv3jkpYCU4r9DC9Jb8CE4T",
  "key34": "28BeoYx7r28UfTw4QyE8Vz7otcegN2TmJiG5j4uPzaS6XSdm26iLW7fE7bpdrHmkPF1X27SdRS78k79EF1YQ7QNA",
  "key35": "bdV1cTPtgBMrncWDFuDkYnvSbGBD3Kg1ZKbMohHauLN3NQWSqzLhyCvhcK26VMBEMNNypTE6QW9xWyxKLrefkH4",
  "key36": "4k8YWTKk9M6Rro9PQkZbUGR5S1NEiwg51Y6YN32iAa3dcACQnamY8jHsT6fQTCM7EXzUGYHPY8zSUNYpELX79XbY",
  "key37": "4crXtQGNHEQf1c1Q2eN3Fkhe4AziWGdLokGX2MRERDR5rnAoZQrCz5c2TPQeTcWuVdN6getzZ8UmdQXHWWKJyCcK",
  "key38": "3njkUBTkfc9fSkwNRgv2cSLwCL9hGkAB7hVuDMxF42qZF1eNnZ7wSqEPrFRPnNTtjq52tR8dmtqQBSq1qV6PeZn8",
  "key39": "JwPfapaDNtBD2BqsFyvHCupPFytjfXzLRFTQnrgpikWWWFE9N1h1aSGr4Zg57o7wsn67rMDxvzRETZ9PGBPfZdL",
  "key40": "3Hq9HJWfPcG4HfBdm5w5Q9eLPUCBGoAzH1AGKj2Yiz1TcEgkuhUvBq8MSs5V3ynjrg5iGEwL6AC94LRUfcc6zQYB",
  "key41": "3WJxMSYFwDDgy5BLTPeCPKkmSZcCeSfAYq2QupakBweSnrkj88XAyL8XMLnCMZYi4FG38VrD5GjeyAFdgaeLA1Q",
  "key42": "4gs3GUf4wqQVnKjegt5wH4ECw77bpdxAcD9T2dMha49aAT1P6yu89qw1GY2B1mhKsXVEVsfvhXCvzdMqWFMT7zBT",
  "key43": "24S8UsZZxH5NWHz1HXpFxSZQ2uh8WYq6kaeCvZKFS3c6XAv28MEpJEhp6dL3NR4ArxSvm4uQhjYaYMdxBN2gdiJP"
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
