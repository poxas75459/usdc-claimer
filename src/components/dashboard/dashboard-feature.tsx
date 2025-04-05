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
    "4YXgH27mzZHjbHGyaPXKw2JDn8t78kmUhNJLGPUvXFBnGqn4cVpLKPwoQqvYgE3fjfnPiCiVPmZb5fyz2QENc7QY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RtQJ1qqzJLq3fnYiuXVtM9uw46Mskh6ZmHZuCRSGyZygrVtSvSufBuFncWZ8DQiTzw8SjWiQZ1nx73LKWUhDVGQ",
  "key1": "4uaKiL3LUB7v9Qboew77xaBsWpvJqkuKx5HyCaVJCNHu9L6CtMhdjZS4Ey9h52KBgDzCHbhRbNKGL6wAes2RXgc1",
  "key2": "4xw1ks6CXvb4YpuZegSvpJBVHRtvaP2AhDc2G9qEsJrJsG2tuhaZXZmrrXeNAa8NA8ciAL5UuTat2uS5Y3FtBCKy",
  "key3": "98cC7eFdGwYqX6yehZg9VkruWgNtxh1MfA4WsRPzLtwUkvVMKcs5wMbboA1frhuvwHNk2KuJ5cs4kWWHuFbaz9S",
  "key4": "5Aa1u9p8UM1oSFDkmphsD41GrFabF6PukPNVs6XDE7czSMzfPtkCobC9AT7ZiyVG9qt6U3wvbrkW1X8PEGNAVu5J",
  "key5": "23Ehs2dkMHbcrEkVZeTgB82fXRzTN8X43Z7u6Q9RhzQpCn6kzE9Ac6ZHa7wQbZR2Qijnk3cwRzc1EbxJKioPczxt",
  "key6": "53EGDfRVq4UeEhgEc9aCsUT18ZRaSekFNvU1nq9eLADPpkA8PsLepK7vA2tGVo5paTSNHbAfUyGtr17L2wTndNab",
  "key7": "FBWm6EZXsqKUePej1pPMkx6w8kbhGJxUtTSoSsLRgATsLioVqdmuaeVJGqGhJsinxVbsu5gGiUr9NyE8zEBXiRh",
  "key8": "4BDDgrF9jdBzJrNe6ZiBtVHqjyHZTjynWFjixYe2yu8D4DwZiiK2irugmJbGPizesXHCaCHvz6x3obt3TzobtSFA",
  "key9": "35JY2GCoGyNefo1rCd6r4Rpt1zHT9gwWbv3VQaWouN7aE4Sw1mp5g1ysjm2uCdh3KK4oB1farQvPb5rjZZ6Woh3c",
  "key10": "3QHqyNgEaEB7jM6qN3PVtZmXYfc9xjZzCXXHcHWjguRCsVDWMUPBvt6xkKhmskjDsUjDG4f9YkboeqGTsbQtqx8Z",
  "key11": "3fVN85EGPfKLoR3GQEoKcbqrMU2ydpwkdpt6qZMgnZk1eTTJV3QEv6Ho2JiNZCLSvVKZqPoBeKNuSBLFCNs7Lmjd",
  "key12": "3MakrF8Q79ZbLQ5GGLX9eyKUewJJeK17Hp7Nfjtec126vZBRFnoKEgtZd5ZffZhxcxtGwc6HJHiecjp1bNuqbdUi",
  "key13": "UDBKcRwYAsbjAJN3HK3sYMsshzBv1tZHj7tvvXCgHbu9TMqvQq5mLE5YBLgRFiDosze6goFjz3qputUuU7uzizb",
  "key14": "71SQpfNfNVqACf1NCfkWTqBVka67ZeyKwGjUre4jiZ3G84CAYCTweJ9opPurrs1r3g5jerML66bj9C7gatkbNMZ",
  "key15": "463C6aeZfQJ2WKmf7cK4GFquuqVoA7Y9VY8tnScVKLWTcmE44M9Ckdmq7N2hX14asKGJZFMesehTAVX2bqg8eZPH",
  "key16": "2dF88hZhvY6cBz7FnxUbCyYyEMyY8uNVzrYqzjVXFq1tU9b3LmyM4RmkvV4X6Z8cQPjZ7jHahCxtyEAyQmiAP5wx",
  "key17": "5inpmHmViNAmhEtwysbCakAGH9r8C6XYYwUpZvYRzbzyxCaQMyw2nUq5ACJSXuSAMW1Sr7GdXvLSrLNyidFGkTAV",
  "key18": "4xnLzdooF6vUdzrRGwzH2xMjfdgvAkLZgV8bot6rzLBbpTyybJFyGXFzd4kdH8FoeiWp8pTKp8Tc4d3K2zB2SSCh",
  "key19": "EFW7B1ei7RJiu4MPAzm7YWrmNBN9b9nMneimPAkGPY1SYrpBNy2nWw2EhYVBnqXx6HN3cvzzkX7dVsnqKPkYxye",
  "key20": "aQrnDRF6jhmXLjK5QXWSZR49ynuDomqEzNLGN7oCaRngcXnFsG6Y1KFbiobSwcJgpDayDik3VLWS7RMkCu1rboF",
  "key21": "3NesFoPeKqhAQcNaEoDMHGkZTNSMAmG3za3ZjLTJHq5AedGvvvX9dwnh8nWt3jANEjMhktLr6ae5KHcBJNXJWGov",
  "key22": "326rCzuwX6ZDP71y1S22X5DBAEiciTW5Lii3xAB1GPqhzGJf7WgvNcisSRTf2YPR9BqiLA3rDf93w7c12AvxBiEk",
  "key23": "3sBhMNc7eis5Gzj1SV9Ngba31taJe8T8F7o8A1f3nTZR6tDkShYbmXMbbe4ZycJAuX7rGrrpkfAiNMvQJHu6nWN3",
  "key24": "4CEAbXAEBbGiAtthNkC1XwKx4kZnVVRFHJ6UdmPUfpy5Mqrs9Etmr4SNbpjw8rAsBsvKd9v5rXMoSY5cUCEjabFF",
  "key25": "5vL8WhQ3QPoH5ik8mXY4vBSA8hd8mpiSko1AZWsWQKuQFrKBBjDerpMkScWHhkdLuD9RpxzWqDbfJFrL4TE3NJcE",
  "key26": "3nWWAAodCa8coDZHCEFajxxUD4JSENqSKSF9VE4aD9H7G8wwmjVqVP3RZzAo4sqMvdhdLjtWNQF6eGMyxddWWBdo",
  "key27": "2TeSm3dqAnXeBQ7ArPGesXo4NyBZPs5tfPzcvRSPHgJ83ciKbmCVrXHx6sn7YEuPNo2cH93QTcTRZc9DQwu1pmH3",
  "key28": "5Hqmg8WB8G6SRi5Ca5wk1q9maat253zrdbAxKJCKhx97U4JD2mZ3uDaS4vxmkXEkxoiw6UMuq4ZRH1xeH4K3e8FR",
  "key29": "YN9STimLcNc43mfSWfYi63rzh39fNTb4cnaRVWtYvoxiMdy3Ce9o1wfRQUebHotqGnEP1X7TD5A2Amj2BS9G87P",
  "key30": "4iRZ2siEpqQMK654srA53GBdfkM7nwS2cGQhJU5A3Uh77YzSfphgmGaajdKAuSkGA2MWh6sRnKt8aBVpg4YYRU17",
  "key31": "2G6eqGCN9JjWpDBuVrdPhFMi2wAFijccpM8Sk3c4JDirYJDnibfZVzqWDfQYEKhMz7zAmp7MzDrT2RaNnnNPZL9Z",
  "key32": "3KXeH7wkDwZM43jgsKRpVjdPma1gfGpJzg2zBAGU1N5i3fNcht1YmzLzDA6mZ4d4rECtnBzUMVW9UZ5r7etPW6JF",
  "key33": "2FKN3huQXRRzo3kcpVgKigYzgfETZRPmeccwHQD3YfbSquz2GdJtUWc8KxQFmfHzMQgCSRF8WLCF5mfTZDNSQmdY",
  "key34": "5hvEJvNaK7hi6P7nVJkP4jCvmLwHaKrVDqU5oVJyem2YAEQkh6jAALbWbcMjQ8xcQcFwEXD6AmdPpq9yDAtkGGqH",
  "key35": "2cp3rKqtFa6ecizbf7wR4tRpdMXVL1uKMR3QW1LgDh31vxP5E3AckVq3r2AfsYFxuTtS9ZyuxW8ejsqQDqzY2cdV",
  "key36": "zBzPPHnq346PsdmEaMgVresnyF9g5zaL1NVLYAxZszm1tx7URhEGgowJCuSxSrJ574sqf1Xo7HFVZ3dRApPWrYs",
  "key37": "CecNTCrMyEV3PFUPKud1txP8CQbo1DHcTssMMN9ybwbxBZY61247qK3dvRgket3XoL76yGvEiCchBbRJQ24prHS",
  "key38": "5GmiyGsL99HTBZW3R1JevLHqTYyEPVPSZytmCLpGPnFHD3bmjq8VTPUQ16PZfg4bEAwpkGymmJ4nwpqmNTvL8LUN",
  "key39": "5jskbmUiLnoiM2tCpTeW629QbrUzuUfejULDiw2mU1okanmRke7k9ptDpaxiFZzifmCz6QSEZ2upWEPztfoRQeNz"
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
