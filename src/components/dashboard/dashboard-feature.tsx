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
    "4BuqTW5P2SkcFsto8Pqkx6myDU1VRY1teGy6jcgQaRchpynHr6jQXECBXTR29gNpgjHWThGTNTQpvpjNfbJXsoXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xG3BGWEhG8vvqLsY7nQLyrxKZBQYe7Xtoks9hXrfS6PYmrA4RgKZYC6oSN3BuUEPGAB5odXHnqNNX7nKaQXzGKp",
  "key1": "5xa1AMt8tfcDEVcxoQjf6qycnDvFKxgnuQzeJwj3ADJVYTaVYukEourUQQKysxeAxc2Y3ENy3fhRvHS5eLgnfBBg",
  "key2": "2eBkAfoEfuTmdK7YCD1tMWpmvAYpeSzsq24vDuayhqtZJfitr31vKmYhuFePg38raZtMxQQUyBDaafcSpJX8Fr5o",
  "key3": "4hcBfcrNBoLSbzhT44sVsb6jCEQBDSAMberGSgc3tbuEXDFC5Vb655AnhETxk3yNfDBQGQ6CWwBhnhE2MrvZEcqu",
  "key4": "4ssewXnKX7mF2PKq1ffd5KvQTRW62p2zMmqxdzctozQcAG7QB6qcPHF7AnVeitQVKLWYfNVNhJCbjYE9NAipRseV",
  "key5": "4zC1s55dy4vWAsS7JXbM9APCikvD3w18YrFRDeNowqjFoXzQLjXKb42zRuDs7i6m2yXw1vjhXZAP2fnbkMbReUC1",
  "key6": "4u1ebmarJdKd1nq7Qe91fc2g9v2pfwXmw8JYJz3nfyVycJMQtxJa4mkf3BBuUmJX6v99QKsTyrWxEkN9mYryR42N",
  "key7": "4HcygTxhNE2fkajDESYHkc3FmWLs6VgnqvFdK5i4364viLwRSJUwX83pDMifdTpkwEkds7bHQgMu9nTFtXsJ7bsG",
  "key8": "MHuhaQ7HWwrgP3HuNeTTwwZUQLvHeVxcSgB1CEgoUwmR4UEV2wvYTL831FHyU1dGcvFahUoP5EmkCQHXG5snPAW",
  "key9": "5WJP2gY9Lb5k8TnMtKbrQYSJiL8Ujs7DGaJrU6iqwBNAHkBD4FN5K7FFm3joZXbdgaH7PL7c3UrjrD7V1M49mqo2",
  "key10": "5YgCb4YQNfrEn15qoq5s2MqKunBFcigmzfKQcRFB9EGA9MonZ5gmrKDN1j1qNFeXwTuR7Gg5hnYtHTnCniHwVtnj",
  "key11": "45nXbCW3L8Vb6qVvxXg6eeRZspaGibcLWDrvNMKhfRfqyz3MwomeGcVssnDj16gMxiDs4Kc2sWvFqyPFBGDdscF1",
  "key12": "5KFfm9vTM8i3V7m5YpKTZ3o1uXsU3CmN5DMVNqT3Ubo3db4amjYPzdzTbrTLP69w7wnBU7m7jMH1QLNAU1eQpvqH",
  "key13": "5yaBRgyWoHQ1c3f3EppoLEmLupvn36n7Q8UrSc4hRpNLDWZ4okiaoixqjSywubXWpC5rjGjEks8YEXAsbQsQc7dz",
  "key14": "4Ebty5XCgWAVfNeZbeWNLqpWxtZQVDTsWjaXEwHrigc6QCDZexx33WJ31NrRzP24ozP3Z9Pb9h7sk2gfdm3tzYJq",
  "key15": "tY8nFrYqMxk5MM8nxkWrPG9DKyWDLVUjzvxM9aVhMMi8Z8mr6P7eXwh8jwmCFM38zsWqTaCV9nAPCy3PutQS9m2",
  "key16": "375NNpf57vKmR26X1aGFGtb5LVfh7DyFW1LhJFPHrotiNknco54VHdK2x1UsofL5Kk1fcTXaHCt4ebwvoGDbm61U",
  "key17": "RXBA9dL3YacwWbPeCSG53YRzvKYrtNxJVMTT4aASdYCgrzQTuNM3d1gfJV8xEH62nwoY4UEmHbWvknSw5yPtbJ1",
  "key18": "3gW4tXhSTKLoSaqrwrh21SzHMDUZjytuWF9RYe87vowzkEnZMViQZpjij722MLsbraMgjCSw8X17Paoc8ooBWBT4",
  "key19": "398HU2LuW8su7YEvBMtgksucp2RrVAygqrS7bK1zmp5akMhSdPvWjpt81MCtET8Nu8pjtok31UW3mXo3EtqiywBN",
  "key20": "PJFWiHJ55Gppd6HQp1ABHA3E2ZDUnbepb9Sf2Y5hDZCTrudgs1wz8JLq3MFQLE8GMs52hKke8vbYuewu8GRxF9r",
  "key21": "3UJpiQXaxHFhdBYyggMK1r1wHeQsMarLaqb9onTmjWFpdiMXV9xCMyCmUbbM7xCadPpuKwiemkd9U7EYmEB9Suk5",
  "key22": "4dJH7baY55UFbPa3RM6GEYMGcGe7H4jE4GYP9WZhSziejG9oenTd2yKGNysqecCzh3uus3qT6Xhtk6Ae7DPj6Myo",
  "key23": "211fm4N6LL89sEttj8ja6RvFRUMRuR7rViP7MihaTbVaN6qFZeMFjHQaiT5GD2WCmqSx1suu1KeteqrB3zpGuNpV",
  "key24": "4rtKg9jfkUSFj2Nh9Lukiw8STb9QFhRcCQ7KwUncsMRzEUJso8qSEDccrL1yMNtXCtyCvrCaD4v7Z3dLrqzeVhB9",
  "key25": "2vEMoYYEo9Ermg6HH7QpkG14oSMaxB8dYJ1vXBXFtG6GmgebWLM6UxCBgAfx2A8Vjco9koHBeS1A1HaDEcbj3246",
  "key26": "DUAhGufY5yN2MvgB5XdM7QnqTR8payHeaCnXwyTjJy2WMQffKoTnU87pNJcSEsL5BxkPLgokyDsPZUz6DSaCoa8",
  "key27": "4ZxEFMf69RPFrPbkEb8BC773HP6cKL2DdcpCTiWq3tihMowmJzYm3kJ1WJbBP27nXiHENqF4EXfjWvmtvHhDmxqY",
  "key28": "3WCTXp99Gpy3ohgA91M5SfyLmxUQNpRxJaF2KuXXKXgevEBPgfEWs79WN5ov7V7hdMC8suQpsJUEkyD5irqZERxs",
  "key29": "S8GWCYvdiLJqnjxWyVfsDqjkqQ712sehsVzb5VGftpJBb74GAZKL8UkXPNy28ccP7EjuKziRW7Bcet94LHBUGmf",
  "key30": "5ne9Z4HmxTq2TGhGwRhwmUhHy2QhXhHX7jXgUQG5YXfqx8FdsFmTia5RewBAgzh8KqeLR6EaCEEmZxVs7ykmHwp3",
  "key31": "4XwQibjbJPmSnEg3EvgbwuLKmtD8Q4bfeGG7cUDoW6XhRtVsq4iEM57UCf9UVdqmn43PPex5q3YpKhzHSfWWwsd4",
  "key32": "5qeCz62abwz2Ea1XCpTQnqgQSfVp7vXZPVRjLCmvduKsHnLqomB3x3kapufDjunYtp77QqpsN6wKn5uDMCBa3jiR",
  "key33": "wW9SfqMc2EDmTyA1NwqmiUcHiqCKtaYUVX7VsTsHfLLQ4f4cMESn7kLswT6mfj54i74VRNn6AS1gnBAXCy8S3Mw",
  "key34": "3HDcshVmGfdczbYbBPeTMbtV6FGL3BMp59kzWZFeaC7vdSenSGNvfT6r8maDMEFjSq5iKJeSJakyWdRXcLsoD86f",
  "key35": "x7RNeRK1yT9DowVtXoNTAg2HsJV9e96StCb8ubFw6Zcp781N3rPCYcYUP25QS6UyYCL7CqyFD12jPFyen5ArgoD",
  "key36": "3TxvZhxDq6eDAZAnZBdfy1vfWUCySHzmxDTqeJa49CC9JBq5tGh7cGKDbXwyagUNKb7C6S24VJ915quBuqTgASA",
  "key37": "4vzphSYCM1KMRSBBYCwMmiCJBbQG5Y8ddpFy1tYcpg2ge1ieX8E31daMLKjhwWJcpCjugzqzYDCXn3WLYmQrBJF3"
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
