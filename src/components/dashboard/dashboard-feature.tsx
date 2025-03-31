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
    "2Vua9oPvZVGaFGxc5CC4rJgktDEGwyADCbpvoxGHEDYBiz1V15WhCWKNuERskofJ9e5sT4nMA6d5emS3sRM1sVSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mjJuk1hdhm4YQg8j4seRz2Q94QvmzCHUBznWtEcFpVzJYnnxuybzbAzmJuF3Kt4xZbeeK6vEkTekWMw8HA3y6k9",
  "key1": "4ULjByovxnwRoHD4SFACi9m8LoM9GUGrYFPd9UPyyNsW68HRhorJsZ1dRfV2UJ5BHvq6YGHRytj2mGs9WL3NhCwk",
  "key2": "62zFhDDAkVkwcicqAs9N277A7BFeP6fHVEemsJxhMeGiEWtRFofvCiy16ou8Q13mdF8Xsm3bQ6ZZHrBcrYtfPh5q",
  "key3": "qjcHHjLcNYo8HxqPRDKfi2NV7nWcbuiWjJBTRM92Zn1P6Frqjnct1VtFgh5L4ML1FgnDF3euTqLahL16YLVpgiU",
  "key4": "CR71u19HxHvGvXUmBBeRuLYHKp8C1kVEkamGatVBv5wLe27E7YvVnEjLtJwtSUYmEixHZw4qxNyYDCSFF49vz97",
  "key5": "2Za1ZyB1xcjJWvjcxjmy88xsKmbP3peXJ6JdM1m7HjfdEEhMRD9qDePWaRKxrom65wpWYXjVUUvjMGfKMoZJcvyL",
  "key6": "CuMtnBmExbKQTFoUMXAWEnNeNT7uEy2u4kye21jLDXYa4ZEVQXMuhfWFmLBghcVM5UNiULuy6a8S7VJv1tPmsBM",
  "key7": "3WqyNz9BCMzKAYt9aq1Z6LDC2fbdDBzW6rzPrbbBC5mpnfnckjjuYe4vFECwBNmq2PMNtk3Km72Ke5AiN7jBRrkc",
  "key8": "54HTENjBw6kxKUgDsFirY8zrSjE23mjZChMFf2Mppc8VVANKp3RuFToNn3AWwkvYCEsGFYrMp3nGZNxiPiMrLt5q",
  "key9": "5PLBGmo9aD4JBM8GaWpm4t8ZQaaBRRFbX18WpyZLaMqcEJ85GCUcPHnpfe7mgDrW3yX5haKJQVfjKVRAteNJsdZS",
  "key10": "5iVSNw1ZFLUWKNeFzeEKsXDjdcoAsuPmtQcinoJRiVnNdck9KoB1eJo8ykKjHrRMD1V5SJPyVQ7ZYr5D5FTtqu8z",
  "key11": "4AtstnW1TZAWYEDa16ZFuBsKT2WcU3o9B6KrjLsT64qx2N6mNLeeXJs28ax1pph8xnh1pFEpSgHPF9iAKwePUexW",
  "key12": "56uwT3FqHS852akbe1YwRNZfPSSqdY25AFZT1SkDh4JEQvUVBDdz5nAPdk64DNxvEJuFvotdwYQapDRMcTo1uX8C",
  "key13": "3VBzBmUQdEKwRZiEu328AKJEQu9ASMrrdPuK2vyAhNPeKyJeLYi3axVaW6SGRDVF16CwxDeionjZShqNPatJCAhj",
  "key14": "4HS8kCHggF6yjeQYEE31Zs4PtsAc2wxAwNJYAWh9mX8ZMdwMdhWSE9y2LXj6t21p8rHPA78GXmCM4z6rpAQi9vFR",
  "key15": "5sDabPG5qGY4LpkGRAuoFAQmyaM9jdS4u2xE1B2fbutZxgjR7qfoosbYUNPqruhcuUmnhAXdQzyCmqESGZ3dGi89",
  "key16": "23sFHktTHAkQi2AuNnkHyiyUuU3rcULLnPujmqmPRvpZcJ8Lw7SQFNRQrzj7zJ28E1XWiToKWfPETuxeXDd7HSHp",
  "key17": "2UY8bDH4a978WiPM2th4YuiQCoUqLuEwsnqjpAMxDEQBmRzTucQLQEQiNjmUWQnkRiZ294g5xvsVdvTYWEKVYv2r",
  "key18": "5sJxSyTGKQ4xm8DNqQm933tyu9XQCv3GwGrqWYZjgRHFxXc2yrkj5z23ptq5aUq6NLsSXC9UK3g6RA8UASsCbHqt",
  "key19": "3nvPBYL7Nf7XQ1S89EDryMZy5Mq1yBJiiKj4R3HXNCTPQ5c38eXTzF2V6X5XAAJTmkKrFAt2aDocwvxV2aJELBt1",
  "key20": "3XdjpxTbxuD1hbn8h46Td9SVV3C8sD1xef5qARx6NnYR7E6is68Ba2DWVSSgGSseJKS62shsf1abXxr1ZTkNLWiP",
  "key21": "3DdqotNc7pi63S3dJergJ2SDp61TQzN1ifvcvK4mpNCgCQ8Z6iLKhy4ic6p4NfrNeTv78VEcsBhoZGFQb7xWxncH",
  "key22": "4PbMsrDEgYBtVrovTsjkAdC3dh3rXSTSmaPmxHx2enqBFquum2HGvZqcZVeedzFZAUDxwzFLWN6wuyU6xENp5gbx",
  "key23": "4beGvsfwVbnkAqtPmV5QYFneC1wtHmAQW27hpbpQvBUt1rd7HFTSeYPhwpgmWa6HJAsen45HX8kmAKr77ePGRac7",
  "key24": "2xyGyRiJTLfHMEfGbw9ReMHdvZAMt4NwQ44YZ9nAM3WSVFPyHCNQDNnLHQtE52SpBeh97jqvtYmdcaD3U5dCEAPJ",
  "key25": "3ZPNknHckqSbscj24nW4RMataSXPiuBFBF88HTB2Azn4piFGadLxdVymkv4Z3wQntpinevWMasG6yTuNKEYYuYxb",
  "key26": "5rmDdkAmMSCDGcHTwHVmTm1Fk62Yjsr2bL7rrAhmjpUHdzgkJKFRX3sMwZWwjaahqVGzRKP8HWf58UkJa7k4Pa8y",
  "key27": "4T5cfLMZHPxr2BPPn73dZNr8DDiN4XBBM1PnrYJB9dtmxySTufdBNuGDrnL5MWF3apmXbF7EdvqWvjAfnZzeDVqY",
  "key28": "2ZePMSAjqPrwJKfJYxcgzVXETd5xkFZCFJ3ZA7JyRW6bnHXDKNtUYPz8jhCtGJvVtDTeWQn7aqMw4nu9N1EHvQze",
  "key29": "5Rm9Ep86ZCQMRr5VjxRaf7EQ44hwDhexXfqytvG9n4C2KAWhgt4jtzr1psiz89i7MnpHwnGsH7sTKJwN1AUYguY9",
  "key30": "2XEaruay3VBJVvnyoZr3dFKw2w1hLjfJkovr9YmaXAixzHuEtGKg71r4XPyj9Sk1hpRzoPXphvCuyhPcJ5c5RMvj",
  "key31": "CmgjfcN3Gh2TKVoptGSsSJPNvpg6ctmBL2yCNyBHuFnDi9wsrx6YMKZYNfEThA2xYZHZKPfsYikZXVQnZz5rdeu",
  "key32": "3D9RaExRvNsAqdr3Lo7fyYZieXj1N4wJ43b4FU4EAszhw6QCgCgn5gkxjdigKbrZXtNbtDZqVs4fXoqUDNxSe53e",
  "key33": "4xdUXnXv4sMmu6vkBBbPCcH149Kz1Y2ivPbkjjViYv7gxhJRVvrB5ogQbyWukoWPdJpj3R2PP7mLAYiPgXheFdH8",
  "key34": "b2w7VmrHFwqrGLqx8TswXDs3uL15Xz7ssCKMTBN79kecax8bwdMXJdbH21z5ZgNmit22NoxkczauMtcCEJdc74B",
  "key35": "3UCJkUVi5mYbdzUQGAQpYpy2ET5kazm97zP8d1iAofoeLiAEcNQXBeVuvHo9WW6CWqHpWfUXYZ9GHXnqTkCPyWoN",
  "key36": "3agX9LwZg4EANW7EYUzMaGVBnugxSn8tW8BtXuQ4Cs3FdmR3cTmoMUQchG7WBVJgaNZSqK4ay2He9fPPRTt9Mzrk",
  "key37": "2mJUM5WoQLoMdGnLMj9ojPVGZTVXEGg1KxzjfxRYxgvPyQRWvwbeTGKAVxPnamm6trWgbJo3att5QjfDqTjVevh9",
  "key38": "Qn7p8WBEPg9Np7JSbuywk6bQJYCBEN9cVqu2h5bmbkg1dcMC2tSKxrk4Zo7hC4HvuXwA1WsFLmVZ3FhXXHNaazR",
  "key39": "treSW6RyCmqTE6Ccz4RobugLv9XjWxdG2HhxvSZimhxa6JbjXDC9HEytv4XmPWamg9Z4cymftBxwKRffMAHaK4z",
  "key40": "6zqsvJPhxtnrxhh29hG94G72wzM4gCvDGcSSdRhB7V9M7etxHGnszLXb4EQGxBXLBx1CHC2qrvLA9ydAExQ8Pc5"
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
