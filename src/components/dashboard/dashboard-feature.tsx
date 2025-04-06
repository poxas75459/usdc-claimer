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
    "F7vdB2NrNjuLT2A19pzfVjTDTA7kcec25WzuWmWUjBfYSCMmUXcHh5Rj47CPqSogyn94tp3Vynwm64stok8yaxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A5SV8bPnUfpWUKNgdKowdAYoqMSdAXDwmp2C3oNTR4kaW1aEH4bdJvkowda5u9G2vvopsNUP291CHBt9hGSJbi",
  "key1": "2fP1gX8PpSoufNpGBJz2kQtnHwuZ4uyZUEoGFsDYEbmpxddxgMJLbazxr2REUyX7tis2DewLcyAkuhmW9JCu3P3o",
  "key2": "3fQno3RZ75348uNMgUWswxf9DjT7PW5ZZyEqqy4ppV5egwNPphtprKxXYPaMWJDjxtgtHhLZrDjsZS6obCSdnTWX",
  "key3": "5Yv1XihCC16Mo55h9Y19eubszYDDGt9zCmfR5YxtyUBLL84WCKgb2x3N2aRnxoz53ofeCy31rT3YV2r52ksfT8K9",
  "key4": "4YxvAev2ns6HXcP62hgQDKk5Y4Z8ukCSyJCSyReUcpqwLV8opzsj1mXHiVM2qWd1jBMTcuabwvYprDE8EWj7oH8H",
  "key5": "ARXV3tKPqC26QAU9btnAWgwjadSi44WQDV5stzyjV8ge6dXzUVm8VEYcL2o4SPfaAQdLJk8V9KuouU1KvnNSYJd",
  "key6": "LM2uCAjQEWBxfNMY6cokNhCPT6BnCzgDGNeSeC7yosKk5K2bPiYuoJuDRzce3ipab9WT3Y1MGmv9shNrREAgVVa",
  "key7": "2tC6C9CGvrY1VNLtJXETRaUZxUXN7csx4hH4P9tHqxjDa3i9kaUcesvgPnUGQbT2eZ7fSXLDbNkXRyMjYzDPgaZc",
  "key8": "239bara3JsG8AeweFtMVhHHBdaohKjvSgfvim99VBP6sADbfuWRnEdsL42FUSVQqumA1XVunadWzSKsvfT5Ui5Nx",
  "key9": "3NKNG2iKPVgpkDydkDDVApPBNcG8DQaH8vG6pyJvVmtN84eCNgYdPWwNciAqjpoPYCvQHowHqGjYBGuA8QxwJWCG",
  "key10": "4RyH83FaZA3S7RdQZv8AUDMbdnFYwoa6Sn4pSEZNRPpVz8a6oyrjHZM1E9fKEwkzvQwSPmyXTWkvFBnA5VbRa54w",
  "key11": "dyN4thYcnauTu44uhg16CUDBmxNMUEuW2wb8UmAzMHVxfZ9xB9fMRVHcLVLgT2YbQE6r6jM6HiEsANH8SM5cdZN",
  "key12": "9h1smTJXhLMKh9DBsdsGJeBkkou6599AACKeYGybGnEEBmMPVoiUucRYvH2nWFep1fxcVZDYRgiNi7Emv5B9vNi",
  "key13": "33LLTfiV7LtH5jdWd2gn4NBBif8KUit6eF9zDziED2XpkxgGsosHT9CNsX1Vh6bNEPBdkoRBpgaDC4vf6LXRi9ch",
  "key14": "3qdb8EGzBsBWHaUZ49qPf3vj9P4un6BRn13dZ849toPWSgkkvW5qATsUu75SqAqWqgVEfDFLYCZd4UeqmbzVNt1L",
  "key15": "48TgECCuXgfHQnHigGySD7vbQVUZNGfUcxPgGH3hFazAkxLZnuDhtmL7Kjbx43TafP5GXJmsePvYAJNKBAjDM97S",
  "key16": "5jAzukRB3T8zrJwJ9tMJfWwA7SiWH2NcGVgGBVhceNUTaED1spd1QGuiu6NpXvcaNwwNXTapP6R2LxPhRrfs95xr",
  "key17": "HpLUsB6tHnMapwt3yN8KVWNPd1WBw8Wgxq2J6DPg8GuwZ9N576nHDz2UquJebBUHdfoXyvwbcEVPe4dPk6aBMmp",
  "key18": "4s357RstVWWbGg6oLFhKFubg545a5R5g1WGdE6JhLEBKXpToyhbF4ZoAZDp5etxUefzMsU23aBdvM3xxYzgm4ozD",
  "key19": "3vozjbD1qCjDszgZixE2C7WAn5rCDGv2SX4R5tyUCkxoqLqe2d97dqRJt7MUGtoYBkZDdxZ2JBUxGWTj8DrfbsfJ",
  "key20": "4gCJK8vLMZq1sFoKnFeYrBCWLMbzBvcH8LoEjmuKVjKJb73PyMyXpQzeqhxDBLUBNp8VhjwjfwHYJYjLY4p435xV",
  "key21": "3Ci1463FoZ8f5ApNDnKfcFFCiyURVkmLL6yLXg3ChXJaEMfxb4Vk6Fu4uBrY1rWHZEH24g5QPMYuuCRoNe3WjCFs",
  "key22": "5dkYwybmi2CD85ddbzG1khrApFex65RAf5M5We9LtxxynkZnwSB1F9xc3NzVURoHo3zSQbwgHS6aMy2K8a8x5Aij",
  "key23": "33BiHbmdsK7RQBsQs7fPUrMQhG4rR3XTk1gsquFs2noxfnMwszRhS7aBLn2YebreXC3HqarvksC5JiHbqVupQwTj",
  "key24": "2i1cLFqPPDbsT4Y2GEcYHuPh76XzuTMoz1HZvM1QNAP3XASH98nvLQqNUNvrxafC5NQWsKpR9r1kWdbV2ho8YF3G",
  "key25": "3JsRbwjZUBN8kUAE46yPNTNXse4NX3KHfcjQ3gpMzQMhcDrPxswMbn8QoT1Moqhhmv116bML5t1sXeGnJPiUdeze",
  "key26": "5URDXCBgwmf6CqRsmyKQt15UNGSGuS6R4b2KhKjhs98rWCPQz3wpS2mCeMjEhZA2qsSy4oiVK5SrhViNXEXh5Bpz",
  "key27": "5T8NCULxYNsvwtFwq7C4Hr2e5s4Lbkyi2XgXcSiCb8znXhqg9vkMeUWD4hZsJEH3Vr5WFPajkKTCgpSNzBafEAr9",
  "key28": "4cDTPdF5KYPBwTKtBv3LcbjjSKuKHHQhcZ5eLsraDyssQaS3YnEN1dE7ckraqRSQFDu8bCmScBsR5hJWyQAptGj5",
  "key29": "59hUvSqxfgM7xsUSmi8YcSvG3MjmLfw32dbiTYoiMF59NiFd6PncjSWtCyBxNhPSFcSsebHxByMiMuKKc8KYcjSv",
  "key30": "2xiuT4ZTo7vsKKWebKkc46gYwhmF5TN2AZSVm7DgiAAjyjGNir3peNuVn2BewmdZzwUT8owBjRDikFwajoqHomvp",
  "key31": "2NFxUYtUJBF3Ca9MFrN7MPrhDNXFqpdMUVg9t37K9GWLmqkcZdPCyh62YvYdNVPspWdPSMsUuWBtytHZW5ipRm3V",
  "key32": "5ryUMHxeR6LxnZYY7WMXM5MSwcduFykdvwszdvxxLxb93vXPirc4GAhbGGjTSLmT15CufgSHSo28icMn9ztskbZs",
  "key33": "48nLqMrcFzNwD3KDJ6fU8R8bjU86xFYdVDZdL93YxZF5GyXAgj4MwTpmusesnKWwudxFHMfQ21j5o9y9U3HR9VZj",
  "key34": "5VAWytMay7ThKWd2LxsrJ79jjbi4b7FRpuNKt76czrNPQmgPt1iY8c5oabBHkMfp5q2LwiPHEJ7iQJ5pFJiUEK9z",
  "key35": "kctKm9y82ogmWvVgM9zKnCgbjQaPhN3wCYMtp5yRSMCfP82jXsWo6gknC7fhMeGXtJ2N3vzkYXP3nxsDVES7nkp",
  "key36": "4ZHeGT5dt4nQ4vqyz56K9D3B4X78SvpqhwV3eRygMVPV6Dx7wYUpug23CoXMQz8rd88aTc8ugy3F9eoKHTddPDXT",
  "key37": "5hHjaDrMiHj7qhz5rV1Yh2k3MUfuTHeJtzq3nwnKb12Aw31YVsQV26Q4ocshar7S3JNXCpGLE8x3wcYgRjtXtFUC",
  "key38": "5NrVDrRLAH5hrJnyxyawpCxyXFuc13TgcYbXQCAKfaCUg8nZGdK4f7qywc4b9qisD3AYWHcHqkytkgUzfvSgYZt9"
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
