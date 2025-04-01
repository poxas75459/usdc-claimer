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
    "5q9jYpx7pEBEMwAsGT3JZTBWvMWAXsrnkW3ZUEYVuJ7FFd5QYs7N1Nw9LCBzp2ynogSrAimxARQArRBB8J6VyM5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AP4cUJvpTGzZ3DLBoxuLvPeFAT9cLLb7yrYyqrFLrnPXGVULzpcWuf33m5itKqGaccH6wg6ZYFKbLdBDwMPWcgF",
  "key1": "4UTnEwLG8JvKgTn3eeMgZGoXXMShtcXuJh1ouVaXc5GyYHsu2KxNR1c5MdFrQZtjbttejexwABvbsktRhEmnqRPn",
  "key2": "3QP32dYoqpDzdQRXTMuyQqWJ3aL6hPPrSCYzeSpFZesggv1mjBWBjoHkRsbqaXSwYHhrWM4Z3STwRsCpBhDU8qGJ",
  "key3": "2n6ztcfoKiRdMNg2siq5AVRZjyYZV7TMChsN4PSiW3pTN6iSV1ZoUAHotAuMsCSs1EHjh9kpKDrk2rMLk6aHN7Ru",
  "key4": "4QCtpZDiHr56V2aufMAvMoAARx59cVetGCU7dHdDCwxmRh37Pz1rAjBpPHkPX9Sp4G2L5ZYXagBgywMT9CvSa935",
  "key5": "2z4jF76BihKj8upRzVjULiBM4H9q1Bd8UqpbZB9q1MDyNYcJvxa6iupUuRYHoekG1fV7yygk95UqySa4NEtXJNus",
  "key6": "3BeGXKCf1i2MuPTS7QoeuAsDxJ9ufNLBzyNhxsxS8y6aPBpeP8pz14TntKCte78ss43M84oVwhqJv82m1R8nj8wh",
  "key7": "3ghNupjm8pa9DKGuWePuNT6SUk44277iZKwuoQdTGjDnHBezUFEkQq9uA4PmDx2oKJuQtnuNmnU2DSJjy8i2oNYL",
  "key8": "29LkGnuck2TCbUGfLA6sn1DafCZqCK4BUPZsrg6nQSgA2Q1d7T2o82uUBSmoX4FNfZCmrnzh7au6ujAH9SX8QJ2i",
  "key9": "khrrhT2bVavRA7hznRLz8DVEWpcUfYvwVpW8WWwXr5L2L5k1jP2cJy7dnfPsYrwdCBvupp5J9MM4y2267vhgSsa",
  "key10": "2ZssP5kTN3GijKNTg6HEh8F5cjZ3gTWMhzU6qT5oD4LMWKGWFehEBu1sZD8qx31C8H5vsteMYFhainEUFZTT8vz6",
  "key11": "2BafbT7JxbiZdvCBFTwHMdzoTspQ4whVmauRfo1wkSaRGKcVgPVnang2wodj5xVhogM88MN9Ypcedrf1T8CpbwFr",
  "key12": "4XLvrugxaSuMZQN572S6Tdprv6oaGcqJ9bThnjpBjWWGPsRmWoUvxVA6t2GZVCCw6x66tx5udzxpg3JPiQH6Zd7a",
  "key13": "5rKWTcEojaMW1u5j1rCGjw41SbqVpPujPmZz6CbgJddgk6Pu4VcXBfrYuVjCQSGwEBbL9TgBfpKj1mUsSDDJVdCT",
  "key14": "4YUnG3cyjQrbUNZWxYjnvSTz1QJ5vxrYT5nddrHx7iEgXY1qRP8gvsAcjM7s3233QriWxaZnU1r3zizvmKhV63r6",
  "key15": "2pC4EtrGJZHByxYhrrmU7RNCGee9fJEHbBWsfNiEFdzs9YrGJzdiG1h1VvDGhfducE86jwNQo71kr66JKtK8ckfe",
  "key16": "63sJqsJeYqXtH4zKdXQ8BJd6ZNC4LysLZyb2LsWaYKZX1sGTx4FfBFDajJ85HQRmobFhLcttRERSa5zY8ivscib8",
  "key17": "m8DPXgVCyuGVjE77xffiJdTvp6EMbihX2M4zdwPij3EEpb5Q39TtVaY13kkaRJLhvs41FHsdjcmnhzDneUm8GhY",
  "key18": "Go9FfnUB8JGFKjVPh3127X6E7G2nadfPKTA56h82H17WVHTAcc3T8GLtCPpuhqskGSgoByyx83RgmrYtnfzLkkp",
  "key19": "M8jduXy2Emv3oW9n83jugEZHBRj8EJr4bWdf9iSSqQG43qhGux17Gkwhm4V1XQQZQfPKMypoYo1MB9qUxkrdxNs",
  "key20": "2StYyt8RHVBsGMothVDwtfgNzewyEJ5LSRNNcyKwwuWEYBaQuUNMavDn7FuUsFdGtKFTuBMTSFrgNNGPR3xMr6ys",
  "key21": "3yjgXBSYGiw3UGZEs2SmKUq7w1TP7r988eZ6FDUUfzWNcvnTEQA5bb9N8dbWGHNfHh2eF5Qm865npVNZjyfm8bTN",
  "key22": "5ENLXkUvY2uuAD4TfhfmWttKmzmiJw8hDKRshDaG3uM9wq56ivHYjS3Kza9dWcY9X7cV99voUkRJtttVGLFBE7Gv",
  "key23": "YwdFrei8b5yEChSyveYZnytVSdS2RnT4ytgn1ogaac985AeLAppRiiAzTKK1WFS7YGEZ3x96QHCaobioy7YnQYt",
  "key24": "63AWAiotAaBCSTzSsM7TarYQKueDz2kyibjGdUdhotyrGQ5tFBw7VHhN6LdrVArKJ6uf875TMzhRasPZmaY8y1nh",
  "key25": "5f6sAJWbhkiTrCZDhv6rVzHpUnQktdQ6aAqpvdnmZc45yKrzZEUgcTMb7yuwt9gtwB7eGD2Py9dwoP76AAUNaYz9",
  "key26": "5YAaeu5gHP8HBDL33DoCN34mtvJAhCuZZZBqrfdzv7uAoWLttxYERsUUHxGcDMidAmYcJPzZPhc97MCFwq4z1yCJ",
  "key27": "2U16LKU9S4VDPTeuXV4KXrQUiVfyUmJ2emrY3X15ZR85SmvF3reYpujj86nheiJRWN5w8Gmb6c6T1e7x2uC2oAE4",
  "key28": "2LN9FgeBxRWYMLgQ4aNcLJJeUhX5xvtLdwpQR2uvH78NEs6LaBrS2etbQYQuy99YZn9QwKNqEoXDtzsmgFUymSn5",
  "key29": "5J4gfvff963SY78evU6Co1ZnfNhYc9UHv5nDYtjfyHnkjM3AsNgAesnrEN4KFBZaXYBD9YzMk814xjKUUvtZiSq8",
  "key30": "3fnvdJV5zGSQpvVrYiE4DXDWWRBJ5UcMPSDMDwkiSaCWiHy2x9s2M4dSymyuQhdSyoyJ28otHWQ8SRv69e4CgYtw",
  "key31": "5HVCtfa1wN8yhL1igBHCyyZfGzAEa7kybJgvMspwZzvXaye6ahUpjKak3QTtfSRXy6X6oetE9a5BrtEcgqL9tfMj",
  "key32": "67QVptBpMPY9fXHh9zeH2uyvcAfTaSMPrVHHW2sL7gWaDjV3Rj3n7ke6ZQhsKRDKNK43E2xJmko1NV8VQMzbMmhQ",
  "key33": "4FdFCGLNua7KzMCPuKGfa3ntN54CYgg7GDx1SURt32yoGA4gsSbcFcbzq5DcBM9kYDF9EA5UNKM6ihSyoX5qiSqZ",
  "key34": "4qt3ckJM9zmXLs6QnjVipeGHg9sUnfUD1CdLGmspMYC6zyPzi1afyX4bbdrE3Q3UAb8ivHoe3ENtUXYVJQqJPvgK",
  "key35": "2sqU2m9WN2SE2k9MQQS5aP1TfshiTGa3RF25j91CcdegpFnvRgFTaXa4Gip4YENNaEr6pvH5aqA27Q9dvpySFVgP",
  "key36": "3eN8RGzdyzjAhQ1SGJ7g46DLtPysTnbtFDJ1AtcQQagRUeBUzwFBA9rkzj2t7piv4h8RhX92DLVDG8vDTKTSC88K",
  "key37": "3i9HMUcLhGL8H5g7sdH6FzDyML7YNt8C9Qc2n4RdkLawDbfqhh2FeRdrVTJoWo38XR5HMref8Mo9bGGFj7j6tUv5",
  "key38": "3UaG1P14yuS56SWfaqdrjwndGburcY3Qp562Pknv39gwCJ9EeD4M8z1FohcPFRvPcYwQWW3wDLYDsNYuPKjJtckg",
  "key39": "2QcbFensDqJFxGUNBszXR95NcMtWV2jVfWtCP1WWmTJpKtaZJnWauhDwEqaNaXvHRynRg3NiHXG8hyr9JGdvCF2d",
  "key40": "61Z3c7whNAw91WW5G8aELBWFHHFzSKEj9ENxcJ6zfUL3wtTTdEQ4bMzwyZ8voUg2wmU7wSXUMGftzkkzj4R3FNVT"
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
