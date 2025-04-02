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
    "2GiBRW7SnHb5ofoKYwPvVT5nAByDXCQ9YvqRzYSfcNv9mz2PoRM3QcUCyPEaQunM45a2HD2a3vn66hu1fpY7LmMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ti7HtVE4smEPnJebgyma6jTdZSng5Bzgstzdz7PvH5Et9jwibKkWtaZSjUSpPc6VxnsEXzPuLVUG6GenYmCMYyE",
  "key1": "3xTRh11BrjEUvDEAt67XqvL2rwSjY97zjVxxBAFskjwbrMt9Rde4NXGDMKaYUZ2vCoza8cVZTcBGtEC8ug6rKPoN",
  "key2": "2n1hyPSRUS7CJWagY4p5yGBAL9HVMn2D6mS5cgi93iw9ryY4e5xBu74hSrNnFXwNc3rhN7AK3DpdfT3yPBzaUCT6",
  "key3": "4W3YNmC7VJCtN3PCfZ67pGC7DiNCZ1s5cVFwfSQa2Zt5gE8KYecgPDmK3X4uHmsLuGi21BzGAuQ7LspSAo9AZfYQ",
  "key4": "5PDviwXgHvrahfKCJT8qPSzYovyEBr3jpGRHDEoejmfHNg6NNUWg3QXePWsqtSvfhaEY14SoZ7FgbBwn6MvY7ejb",
  "key5": "5iT3yDXj5aBTq6Jgz39oZSdti2Hm89MWK4ut45R2eoRAJhbzLVK9KV2yFQiQMx1iBCqnBQg6qEcgZqAdWL7gkBZq",
  "key6": "25ZR2Ue8thoe7D4rXmrYzzeQ7bX7GfxWb8CtbjUudwjqxvzzxoo7zRAmjfXrtuV6EpsJpei6eusr6iWP2ym1SNwj",
  "key7": "3pkt3GaduMoLcCZBLfQvX5EiuTZuLmC7b7dTeMHmKyycRu7YX3wAiKW9ALrQFNRRLDPAo46Les7CCc4UVdag31Wq",
  "key8": "5yhjwWS3s1HNeRzan7yQ4HGbWhhz9tNBBwmTcL7mQrutk6Z3nwy1nZfryYmuDyycJeRK8SYHwobzT2LGLPy65g86",
  "key9": "3XgahA1sSEuNw5JcJ2tB2BYCvWnr4oHxTfmwfvgKnyhyF7nmsJDBNj7xY1EEJRhJMdeykhAT3KAMeDJhQwxVG1rF",
  "key10": "2V44rYLA3xwMBrNtzZQqw8wP5iX2vWbWsTa5Qq7faFE2LoGsERbA59gpkE5BETaHD9MFF9NeDf9EYvSJeXvDeBYY",
  "key11": "mTJzhUnRV7pzMh31YnAMUo8c2JDdFta7PY4LwwTbFgwzb2vjJUJ4jtb5cNTtmSpHt1sR6PsR5YCoTMLo3UfAkr2",
  "key12": "2DYUCZGZqf2PJQyGjRpuyxZ3jpDQ6T9qEG1KLKybDPrSQmAJXttewcmtxxbT6QR2Nnb9KX7UKrwttFBFGQMXbkuP",
  "key13": "5n5ZkxzANkf54MVnMEXj4fRfUEvuEMN8SiZFCq1QqdP57j1wun7pnyKmw9xF3wa3647qAV4vxzsfDxCRRukb55aX",
  "key14": "5gCJUQFFaLpRkDnNp6ZvMmtUMwT8GGNikm2Nz1VJjMzh7giLMEy2xRXdt2Bf3kHSTYRjCngcb8XzQjYWnGb48uLS",
  "key15": "vsntZC8vrrcPYnPXU6PT21oTQfbxEejj9nrMN4kTBSAGEEHfQPCPb5DF1NC6yL2bTTGUGXFBbCVAYgJ1R9FfvEc",
  "key16": "28mBoo6Cd54bCqGqeriJnXi8YcqF1FQH3rBQodyaVHxCgvx8foefGB5YFfFEh3jq4jMbpDCLAk7BycHPHHWBTqS8",
  "key17": "45MiYvrtWWr5DiRMjDLgZg9u5vove2EwrdcVXnVjQGfTbXXsHSuHo9DsRXvLnaKHefasyEhChPpKEvtGUkWgkAgH",
  "key18": "jdeze4qMtCqMh9s4SBL8gDR3a4KNRRG7f4kJ64dqThTTD49sMk6BzniDezf1rN78rjRD9htdBmJVBwqQ6pdYKdV",
  "key19": "quv6ArbcMnhtVtUY9Vb83LykLM1TkyJfmZeDVPs4kSb5FJT6pkRPG1Shhz1pLBpmiUsvPCqnaJFibgCPpyPoYmd",
  "key20": "2E5V8wKBx1r5w6XnwCgAT7sfYVQboptLTQwYH6JwN7aQEsyKdvaAmGgsJ5gaTdALsWWhMYnv8k2T8b7c3pChksUA",
  "key21": "5ZjBMMcQUK7q87WzTKv1N48WudZeFnZnXpMfSTudMnpZ3BmC6UD8HbQ4EGybRSrVfxXMU8HXxqXnbEjuT1iksFqp",
  "key22": "3L5eisRNpNcMH9eDQDS4fSyhcCiPBpCD2nnE7MeVZtn3GybGz7JFTf14CRAQTbPf3T6RutS3NtXrE2fs9duatJUh",
  "key23": "5huRfZvWkjvsXYdKuaoGk9o9CKY7rWzfDX1EzVgedoU9KhKAeFgzu3X3sdoZ4cY3mgw2Zy9FSi2GCcjZzMn5qetL",
  "key24": "2h14gtyEz9pAotikBdUk9SzKXW75SVHq6h9mRqf8UjMc8okEqjP7xMKSqdgWKGuEp18uBqmHJ53vPdNvW65Khdo3",
  "key25": "63SsYSzAerA9RGEp1znyTpTuA73vGjTmFxsrJ95S81UhZNQ8U6QUtj1iY73bfJqtr3Kv7HcRScN6uzWFzCgD69GL",
  "key26": "2smB4PXauqpHnfjDD5SAxKK5i5fBRF1Lc2kDoxhc5WZH9yP1puxfwmhdUXSfBLUWdC9DCTqdVnR7dV9NN1sB4fiG",
  "key27": "4ZeekAxoCsNAMFHtA8HQHe8uMjpztou3yZAxcfvc4hEcMnXQKcq4Mvvj4JqLv944z3R9TGt4QyH68vUs2QSWrAH4",
  "key28": "397q8hmvdsvCuJVX9wf2qm51Rg1UBPTjpb55PX43LhrscEoRmszB9tvsdYQbyiz4sVt9m2DufmjMRW9EmypK1CLd",
  "key29": "4avNa3gNASgCmLPzVpUZNFhiGJyMEExJxHFXPeGjMiZbiLS61A75bbAauoqpyZzxfSzRFzDjcwqzw4Dj4EaWaSbG",
  "key30": "yMVPJuvUpxFBapU2noqADopFyKqPGgk8UwXJESpRJ8TFd5ntfExrAa2u42M2abtU6gV3Y3u97dz57E322dwiBXo",
  "key31": "3A7F9ComFayqJ7vUZtJcC8gVrVFWSdcX83yvCMxTHU4oDbyJ3tGSwoX8uUoz2tn3UieSxxcA4aHVHQoiDD41Kpjq"
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
