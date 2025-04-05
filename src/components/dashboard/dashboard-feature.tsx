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
    "3h3oR8jNQbGGaqmyBtotryMbkezTXFJuJoS34NkbYs7ZZAapRuJGCKKfNQmModuJPn124ukDiLufNYSKnR8mnLa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NZgcFqsWfxipEvDjeTsWFRsVBLd9uqBvTBF3RecPsQtjB478nddX97Y1NfvQcVfr9Qh8Wyr46W5kSu39aywctHA",
  "key1": "4huwrjrBkZbTbmyyb4uYZ3eqyseK3zSfSookRXX2JKmVpGNqdNc9Pen6VSYB8uPiabR3GofZw5ZNBhsvmsd76ihq",
  "key2": "LS215FccAzffSWYK99MNxPDMqzndaBeoCxASZueLMcxMtSn5xn8hfyd2p6sEA4Tp3EmMUmVGuVUqCk1g2GhwQzC",
  "key3": "371z8Mb4MYxTQ5tDrgNNURdM4QGzw2bhRmNPTpbo3EJ6KaacBzVYkpGHWPwRQ5MMex9vzRsUVbBYTJby5m1Zq88L",
  "key4": "4d5fmubJMeqC7wKAEDM7tCn1fpnfGtA9wstzNmptNMy9qwXGxexSWgYLUDrZwF7ZxLGMxefL8hcgMi96knk73bvN",
  "key5": "4hNCFKb99osPtZ9xD2qmHgwQRa2FWZX4a79ih5DKL3vJwuFDeNEv2n3XiMjXYDR8YNTmDeKZ335zsXakhHgSAmdq",
  "key6": "1cXH6graFVc6y8o49A3U5ZNubSYLcJpuZL2GrSgqQm8Aohv6q7Th9Wf7U4H6wV6utybprecpExujFqbndXTqpN4",
  "key7": "41T5ueKiiCs8arKGfTqWy7Q5Rppg8ERopcuFpuusXBjSk2A6m4zfeHJ79GRH5FNwc8oFjFRZHgRB49EgfkqXUpAA",
  "key8": "2eqmVug8oiT81Vo2YzAq3Z4pbY9whFSyEMq15CWBmRiE8VCmpJxbykuxZV2cQsrpuqwX67yPwTEY3bqaCUHSoqQL",
  "key9": "4mmCXhinhFTY3HUZ63iNpcFNnpDbsbKUEeCwjNFKZpSEQzyLnQfiYJSRAR9dEoHXg41tjRG3zwiGYrUoCBtJv9qr",
  "key10": "5VYajoEj7pvGNpazKKRPRKmmFX8DWvMCLp28StCTWRXEC4SJ3hmUYiD9HM3opTsRktZQkrKjLPuzNxBTtFy7PCyz",
  "key11": "3ekYYERCGz1jyghZrXXqwTB6XKGt8PvjcqY4vyANJ9z3Da8ZoFSLdxB1QkVgmtnNxxFbUMPXNdPSnkWwhJVbE6EA",
  "key12": "5gbXpXKJfrq6nsUzoizMZhM3nC9vLuoUct3hQeAKdznFpdSLpCGtk8XDQdBdjf6vsMVTU5ErT7EEhtxB8cZE5bYJ",
  "key13": "4YbwS2FBUJwRVrnqpxxN2TC2jm7UowhckJs474SKD9t8mGpry5ZoXZPXhPxqDjroCTFJLQ8jYywTVSBR2qtend94",
  "key14": "3peyAJWmAYupqzTc85fuPSr8N7CTLodACopiDvcEJGkhfvXQXgMKsM7mjPGjnWCcfio5vdnTnWrE8FVRa9Ao6tH",
  "key15": "4vwqXVz5HTvYFR4u49hjsWPyr8aapWXmRARxasfNbQWPsUbKbd1K3QBKNUtP79K61eQ21q2MCYt9iRSXrpYqwYkN",
  "key16": "2LUCmpdUSGQPY2UWWUrS5FzPFw1gagJy1eCCVjSc9zuVSfdhncKEqXDMKvGL9Z7H4Qcz96CsgHe1hQT8GeJf3m8o",
  "key17": "NjjU6YrtWGzGQnQkVUywKxUxrM1FsUhieB6swYBfxyXTtZn2Jwh5uAbQeRYchWzrbJee9FeGa5UYZZGPwH6m2ZR",
  "key18": "2RcFz8PvDUy1CRcun6ThEroKPfr6X5DoXL7jXdovJBjdtATHfc4ZNvb2mnZETK2njT5u2PLJysQhYenbYVqJJgdr",
  "key19": "3zcUk1XRrYtG4446AmtNYKv3rbkXuLcnRPuUszBiLuwatt8TkgufRmU5zyyd53fNAaamBAi4k6XqTfFAs2naypDd",
  "key20": "Cq9GJLm8Ad81NYnJUJxRreyBtZnkvBdwU7ukE1SEf56JCNm66bxB17mxenXffrTkPzMTuAu5Ev6JpUgQxq9wZD9",
  "key21": "2bG99Nrn3YkJVPqCVZGhEKsgjTfm6yzt2UFiudACdDruPvDkALv6Ka99Un5hQ4EKBr4jVi4gfzPxSoSqkSgntX25",
  "key22": "2CkRB3ijYyKecD7Mp4qTjDS8TxmjW9eVHr5uDNBC26eTnfH2FtVerozHxikVTzfs5xLokrCWfq1iyezYqVgif44P",
  "key23": "2CLFfTjTvXyL2XzFHwGedgJRZuibDX3Mhpapz2B4qPKa5xxXUzAnpVPUDZnETZhcBg4kxr9YhYkpZLmWm8DR1Mjv",
  "key24": "3ccskb2ep64zi1nGE3unWANhXoCpRZE69iz6R4Fzy2119by1DDPaka38i8XE1DkopqQTbu9pgqzfJW1iR6Bf1NVC",
  "key25": "2MLk1MYF83tKsncvgUJKsQBinwMSKxXVP7tdbXrW8F6Pf7ZubKACjVK2JjPpSiWWPS425hAQiEuFDBJJvm3iEaif",
  "key26": "4ZnZ99C1QRmZEidZmxWjrCS5UMAd2kMPCGA1sGeGkZLWjqJjtkYfbhdfo6fJw69XQ4s3Y2pdTGhhMtDxGtSwr7mF",
  "key27": "5Uu4FRtGbAMJ11i3j825FL95oB25SmKYdFjD6Ubx7FENUXLqmgkXTsQJ2pvGDjVZFVXcWCpz3bUqW3FCZGyxWUHU",
  "key28": "65mZEr4ZJ185r2ZiqbLS7nVL1mnzFxJAYbo6tk5nrPnoSfoqVehWZzacMrPkUsVd4HM8gFhRR91TMvoevbRS7Dff",
  "key29": "5mdGM3Wc3nbi1X4L2zRWmooovGJnRRXnZZKhC5KxgKeszNZACDUVjNjDaYZpG7dGBbtjLUV8QpyLzFTMjpBu42J1",
  "key30": "qidngChtDqR6xxKx2gqdWnAvTXcWF3L1PpEVa9vhdTQHaRf9gRUeSXY7D5NFuNKZBjLCpFExbkWqMdqKVxR4Xhv",
  "key31": "3d2nxiSjskN5FsizTsXdxTHfJx2d124zaYEKELLFys9zhC8PeQSdkyitdsemYXR1q7aKpEY53X48sxd4RgNZZKm9",
  "key32": "5kdjnjkaUE4zCrynmZtzwR9xiPaJag37VLgrAw9Tp2HUHPnzfyTbSZEshHdBYh6SCxymotCmG5txAGWbv98pMQgL",
  "key33": "u7HBpwhtkS4nLhaAFWsTcydtKVQaULfYwCiAGLcC76p9u7N9Z76q1dbgUZ7oMWmQb2QV8hVUGxCC64aWL9cAUci",
  "key34": "3Pf8dVWrsgX4ziwbd13XkuZPLoR8CmtN3BUxYd5ap5xGe7JvVrRLe1QUyDEHoKKcwKpXx2o4UjQiEDgp1V2Uzjk7",
  "key35": "tEo4NQgAwzBFhq9xULpGdMzM1iGGU1poLWDQSQ9mweuT29LVfp6sPEwVRj2nAzAZvc4CduVgjJxNHrcZJDEp8SZ"
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
