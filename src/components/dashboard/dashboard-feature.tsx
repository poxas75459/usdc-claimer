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
    "3oEn3wnXFAZ8A3RnaqXpwF5NxrF3fUzUga3VGEM7mjdJnFRMUdY6VY1tg63Qb696ZjFvW7daJst2KiDsUHiihE3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oT4T7TXj5expWw7urxLdvXnrv2xzBmZtm7cYjeYrA4ymem4WKVcom4rsMNn4NQvzEF3XBy1mjE82zcFopmRYaqC",
  "key1": "2cA22X1ZPfBgT1gZi8RTLPKLSbbbW8c1ERQKAjfC3drvV9YtpJsDncbxEPjyFwWk1MyMTsqjaCgtbYPjz4DqSXxu",
  "key2": "aTY7RenT7apsR8XfJVnUpKpfjPEUqAsCzA5DHZro2Ggz6ME7cNsSCwWBarkwWgKbwd2UcGV6ECvZHbXDUAWUPj1",
  "key3": "38mKZEfvpJH97SvYbiGcbG1Dm743PgeScEg9yCoxw6f8gKE8Nskta8ASijYXs2g6CcNy9izDkj7dkqsyYk6Ncsyb",
  "key4": "3cJ6zY5tCHgzxRN1MQG8BX3vRKokp2ppj364r6N1EY2hrDjUpTMQ62hXwNMUBu1YznXAR9qhjk9a1pe6ueV5PX5K",
  "key5": "N2UC1NZF5xa3KZs36Bi7gj3ZxYouaBooQoHnR8C55py7SFMDD3uQoNQnDZWnnxFGf75eAyKwYaC8JfzcuLfmSZf",
  "key6": "4nyr7oCCWfeBHN1xj3dsysVnTFgmd3omwG26yyaXFmnjJX5KqQtaQtNF4p9PR8wPpDuDsMfa1B3AFqmtk9SFppFv",
  "key7": "cLKJopY5DsfDBChoyf9eYwB1YPTrW7rbhBJDkkiKubqWwoscZJHncg15LsA1XiVj597Q23Y4jJ5kmfqVUhJv1Ba",
  "key8": "5a1fqg2qURTy5ghTKAeBsUDDeFsE2HEfVb9o9jiovvMsvfm3zC3YDKtQE6gv32SrzBR8eW7HGzXDYRp9o7pcrwz9",
  "key9": "5ki67LdKkAwz7T7EriKDCvGWptbj5hDHcG7UMbbTWu29gSaUTTBdeyPMPckz1g45Z3FmWVmeZTx8EXU1wmR8xKLG",
  "key10": "36RVeYFRfZZcYHfw62EnE6XceTxcoo7uokg14AAJTQjuaPt6S59e7n2zPDDN2ihrKmPYKetCfvkcyLd3VdYXaNsA",
  "key11": "1i4BPzAUz92w5yJ9nYfxKnDGxC3oz1KDiG1JGqZ91b244H7KdoKkyxdvDfXiJEnpoSj944aAJRmTpqE62pWRAGN",
  "key12": "4Ct4hoHFFXkDTCFBKcSbhfdMeybtezjNGMW7imwCpTDkhLbVTETY2MXwhhPQSGZ8aXoTvLQvvsiGoh5iJChNihU3",
  "key13": "4rDEjSSTzPc9t1GW8NvqiiimPGQeskiGVSjobr3s2cLKn5S2iDj5mR5W6Y7JxvzVb8vPkPhPVZCtHBbyJaNT5aHe",
  "key14": "4qDfJXQsHuH72qBk5GedK1YzvZ5Ec1d7UogmEyRZo4NxS2AjJdpfNs2SRsAC1284W8HA1pbbWs7Ma1cChupZsxxo",
  "key15": "2xJioYY4rn82f6asRaUQ45FpADAPzsTHFvvaBsZjMxxrhA11DresAmbzhWcKTPaSUWUG9wz9Zz1ZzdHNvh9Q5Yxc",
  "key16": "dsVxpXa4aM4sdijLPJ8huqjxtXwZ5fHmmqh5WsrdUUwzDMHz8BpuXeRzf8VJLJxcVPtaWWk8aboVMCm8o95WrKS",
  "key17": "65fubutjQYsfpahE4fHq1f2nfFt4hFQwKaK2qxmCdFMYMEgS7nPCAxD6csa3Ao42NWsMLgYyHm8ZN7wgUCSj52Tf",
  "key18": "4ePcfoRpCx7XBRwyz4579yAiQ944ANF3HwhJCYosYH2NExHEf7yoxi4y6amq7epZMof7f3iGeboRWj2vuDk8uDFn",
  "key19": "3s3ZbT8haaXmBoaLxatGbHWc6HzgTYbC5tpXC1Lom32noz2cfLS91FFTXPymNUJgYpkmbrkMhMxskuZartmGnSUr",
  "key20": "4HxN2WEB5Rit5mLAZTb9jWbh9mu5z9Xh9ubhoM26D1Tfmd8aJUw6KEKRvtFjSidWJwYFUZtfLsGrVhiqDp4v7mZ9",
  "key21": "4bxvKeEe8UwHEyehWKnT5HePf9X7uZB5RkPu6Xc9QHazEDao5zuBToLKDgUH8Xg25Hvp9cu7JQBw1ZBC7R5KyWCy",
  "key22": "LC91XKdQdTKmF9Pz74ZPbaD3WQMBM4XppSUopRQMe5U9bfDNFVDbstS9N9NvCg9zh3jX9znPtBg7VJZn3wTJ97F",
  "key23": "3ev8ScUwSKEF7HCkDuDokd4Kk3AZq7XTRMVULQEQdE329Qb4Y5Pm59PGB7yhAid9URJgAt7XFzzzZbEimuLMqBdX",
  "key24": "2JQEoRaCzUCfFQu2DFt2SnMrZJ6gmNpqYSyRHoYprB9LTyUdcwFJphp1SKBqiTmxpTiEMA4AZN6Vw6MWj8ZpNt6N",
  "key25": "385MAqeqhqTuKAeupH8nAfdhWULrVc5fNJmWdPP1qZkQhoiGUVazrZzggV92R2PfEroQUPu5rhkMMLSHW13ao7ke",
  "key26": "3mipsEVwkFAJTNbLt7W8mhAVuKDM9t6BfzeuzzAEchKysTrh4CFP75YRGpAksx8YcEHDdgb6FRff28oft1VTysw5",
  "key27": "4r3w7b8eFteKHcdpDAfoQof5M9C9ovXAv7iHk22FrbUTm47hBu91bX1mcv6oumT1iG9QTHmfP61C4KeAWTfq3hLi",
  "key28": "5KaYEeKTQqUrawnuNk75JLxs4KskyEeyhcMmAPh28Xstv7sDWZfmsqRywDiGHJb2M8PomzK7xYhREWqbxHYfoh5s",
  "key29": "3xuZ9WHAFooceSyFCEYnbtLtZCPsYxzpbbanampWMWknVzgLqojz6fhoeU2ySbCFvU32Bvyq24igDugN2PbVqzRL",
  "key30": "3xzyQ36WVABi8jBXZ7CXLpJLVVbWKR93gsDrau2wL1sPWkFHq1SA9UjVuz2tKtMpTZX3CmqGGMxfzuPYtDNCeLYR",
  "key31": "jCf2QEeEHiPRZRV34m8QLZEvAdsNnFjFuYjYJmSLPkp6vedJZYeRonMSbbrrAeztWfBskWAvCsW8Lov59LYgz3p",
  "key32": "4iAvzaW8v8eYFAa6vx7ytqAauxXJdeF7tVcdUKtmC9RACbPHwp8FWswfgTZFPYjnSwRcodnkSmSSULtu89Wa4z5g",
  "key33": "tDZcLjs3V1LsyaLEmSo8gFWpKiJjipC49yC7uViqRuaY3SphMxVnom5Js7ehs6M4vnFUvvbEB5bEFaPavhPTuQB",
  "key34": "4Rw1R7mqb8NDXojAozKv3ZPfTAruwUpM5xEGH1waVV7HAqeq6Z5L3aqV33qFZ16ScLdodYyExtMyvFEtfTj3XDo5",
  "key35": "2vE7NBJhBU4wKSSize1RCRZLnVUB4MopodZmw7rDY7tDAC4svyDNLphmR3DS8qyedU5BLiyTsg3ezE1Nc8AAUfMH",
  "key36": "fXvbMKB2Da2NozvTfWK4CAC6VgwaUKpimgHjJdRCFGMv4CrLBWTrhikEcQaeSusMnFYFcBnsfFCpEHaSag96uLv",
  "key37": "3hk75WKLxZh1DRicYzeUPGqTNfbLnjbsUdU5QXJ2tJBiApxtgvLNkL9XM2bRiCu4fRNvGpxTzmAh3NSwi6c6c5kA",
  "key38": "3ZGDDNeRCWf6MuJLrT1t4LkVubkS1PY8TSJEptXC65bsmZpoZeQswAHbpRtnSBPVUfsJtD7pxj4KwPPfdD5XXCt3",
  "key39": "sbTgi8dz18wCeSHGQtTeqpQqDRj2H6svVh2eabDRG3pgyU2TAEWHFUcDRobUEKjLH9LEUk8knNGT6hHMi8QuLSc",
  "key40": "3PcoF9HiqNni2zxayiASSbQEAtn9yhFGeJzJLgmwNvvM9GWeEWf55kxTCp7nBM3CZtduBGq8NXqTwR4kyGNKncKM",
  "key41": "2Z6FLey2nZYLhkvgTdpJjVEWKQ5fbsAoR1NRpDyE23xfnfKDZ1d6RSBFVvHZbchHLkAdPFSNsiVXPXZMM9Sz8VJz",
  "key42": "QJBFgNvYwWagt9mLRyVcZeJ27ycwpkj2y6XuCjm3xERsxjxMGusQAAw12uVfSeA56oVzqzJWfmsvUjjSE9MHKTd",
  "key43": "5gm6F2QgZA2B8E5UFnVK65AZUvASTK2pEsC8N73Nkox7eDKCB8nWMfRionCiE5KDDtCxfqHKEq4N3sAeVpD7rFrm"
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
