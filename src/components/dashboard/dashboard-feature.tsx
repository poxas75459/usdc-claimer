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
    "2ZmLhKBwBBzTLNt5pg2vuF2ooTBadiUaQyJeVen1ETHmLynDaBRfP6ZzG97ZLkK2ykwiVSrkcyq55DVvRmA46bco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PEjrGExbvFMn1sWjguMbM9cW7BcXcFJHb64XqYaWzPkXW1XACqd4scGYq6DTTAn5t36dZd5Qu1ZBWGLA2N9X9xn",
  "key1": "4MZjQKNVaeYZtpfEzgUDaL8BiqDNdtXukZZc7Kd7Fhg7Zs8Y9pmHum9j7NSun9P9xanWgfoxSkFhf1ZqSutZL5J8",
  "key2": "3PoNAB8EiZM83fdxBpWBhXjwTDBGkbpX1s61REdPyCadk7eaPayjcDZZL6FNp9dWC83ka5ggD4FVUHLnFe1kCZR2",
  "key3": "4rHxyR2KxAN22NBCPMhfbkzTZCZveoX6h4poP32k8FfABmm1dz26VK91PQ7oCxgQZi8aoLmP2w1RjJ59tFBCLiUk",
  "key4": "5as5y2beCky9gP114uzkb4QLZp4te3KYR2A3n1yDuoVD9jWfQaz3kDHjKzUMpfuYJhErSPkTrRufd9vzyyNTWi1C",
  "key5": "3J4iEt6PtgySJNKRcaAETAzYRSbUo1yssFjCvpeFrrgSQNBraUehGLWGtkMXXAfdJyVa7z1PPvKYW68cchKinGrH",
  "key6": "3hTHKBBDKxfQzrnQmHBpxpjAkSfbQQTzPXfRCt9ER4KkkcafupAacsN9UjbBLWeqESmnA1kgHXzaKDcwVmwvjZjv",
  "key7": "5jMB9okhAwfgN5HJgRCG3HbVy9ibvwhYz1ztSBFT3Ed6nrw4z9AiU5MwLcobuv6KT8B7GghGCbL1riVkyqB5WeuE",
  "key8": "59ovCQv3owCgqaYQAVotzCoPXRZvPZRC76Ci4TAAwXAMHYnXNU5Tjcfx4nuesDaj8D8nB532CsKuUiN86MqNiWqc",
  "key9": "QfFbdT8fzn7X1nW3iRXsh9T3MFUQNgEHtKPi1EXKHwJXjt2rEMmP7sf3UE3F2PzcM58QPNL5YgEv5WYMHLTtEHd",
  "key10": "4YtfZs2kY5RPxA8tNt9XdL8ynRmunKjdEAwK6Cu5wHs7A6dZXxLRG2dxDCMdX15Fc2ddxPQbWCTVCykAgczjrBCa",
  "key11": "4QPs5MKbvY6xDag6kgQYY6BjCGKp3d8MhAa1NtWp59WWdNF2YxEiztmeqr63eP9YHShXxJVRod4SNaJTQrCokRVx",
  "key12": "4TFr5giys8A7QX2SZ86xEiQ6bXsYzhEcdCQeGgsvNvNc7faWPusx9BaT9DvvdZ9bZApByHm7kHCEF9i3kCsKqNza",
  "key13": "4YS6KA8Mqs1xMqTqWrhApccH8xXi2c18WtK6X3b2eAWdDAn8NyZ8psadbXAc1pZNwJUy3W1dhbLHxjMQTLCzq58j",
  "key14": "hYE2Z4hR4A4SEvoHjezPqGSWkDubFnjYRTr4uF2V5beeS5EngbfX1Yq8876QaeAW6kT3GM7nrjzqjoJpH52VVts",
  "key15": "2zsEZHgJRWGLUoJBc7Hktk6NxaLTJPfZCyxsxNJvYtwUQxocVKksC8LL4fAZACWze4DJ2559a5wd8uGae26TtaUZ",
  "key16": "526xvKFv6jUaMaNvjPknRsKk4snQhhVJug9NSxgnrtMCZneKXHfsHY3ALYKB6tWxRRwHngSsEA9yTnNwmD4SWH2T",
  "key17": "v5hLQxutvuhsq9nW7VFo9VPvPCCyoLGFhFhn4fbaLV1o6Puj136Zx3HAsgH7MYvZGpYXdcA7teBXVGoa6PaQHVv",
  "key18": "62wjz3X1EWBTBf9UeokHzYYZFWMRbZx7PGWDkCPRn7DZ1vAsXdWFEYgGnqGSxSWBMcX6qwiLMMXesRA8sbuPdoqY",
  "key19": "29k3a9e48o6TXxxWpbEJ6aTMp7Nwiyrw2PrmT9xgJTGmvph1LLY1arCvnm9xCW3RxVogsuJqmMLK6LD9jSxq8Va5",
  "key20": "2y58Ur8rJHqgs4RJavEnRv7QCxEQQzygADhnLxzbUt4qLCzf53fE37sRmtDMu9Q5FS5DC6ve7LPRkxaSrcLkMfh1",
  "key21": "5pSwwLdVovCXaTDJWGc5N2942rXubk3hBP3mGcAgGSA7GND3EV3MTkeX3MGVLNBezgtJVfBatjYW7L5N8iFGjq54",
  "key22": "4kN51GHwNfkLvKkKuTWtQVetB52nGP8HiteZ8UpQ4MnXnk6yJHvzCT1GdqBRAsXvYaZtz9c62gQEycbdmzDWngFa",
  "key23": "6HjeZYhPjQodPYu1bajf5u2LxF38Kx1eLtKatEHoF9LkimG4CnAnhNEankRjyUzpUViap6HZhrZishxZT2fsRCH",
  "key24": "2VtHKRt7zTNrgAM1UkBnZMiK5gKojVJZpcJWU1jVh1jS7PczMZn56JBM5eZa3nzrgZkUsoDKvjfpciCCv5ukmfiy",
  "key25": "5dZh3r3TmixJd8kvCLEg893x35SnRa8Gi6QxKekXMnnVJ9fuF8VxfuKFbWaenUa2tCc6RiLd4tRGYjFo5GDdzDtR",
  "key26": "2LpWRfeTxMj7uYQC5hem4737jNMD4DAMFxTTEKo22g92mv3fjB1j6HhH8E83jTL3BiyYhrqbJ6gkhkVzYSGxAbfA",
  "key27": "3o8K528uFTjpqDu9Rv3dWFbDkTZNquozo2setwUKjhfH4Ye7nhaLYJP3fWUcFaGcUVer7wGPZwgPduSz7w4dirVo",
  "key28": "5rdS1TFXqGJpA4KA3z5RXcEmqmgnM7G1M5nPHcL8uN2bTp18LBDCX3rgH55xBqA1pbLFMBabkXtCfdGbM1tTq38q",
  "key29": "4eV4gXV4fwH5Fg6iz8L2Jr5oVVyM9C6oSWEK32mtbDbN1MJs2DgccjzEAHkQzxZ1LcisJMQCEBN29maMZuGokpGf",
  "key30": "4AdxCwX3MEbYirZnF2BPBiaQpMcFFDSXZhC8g62HgVdBeHQDS3pHERJTSjgGTwKHQ85T4wZAWNjA2CGqBgVLSkaP",
  "key31": "4WaVd7MVwogRWmjmLqCESSnd5ZX7FwvxU2B13BxRqwSAGDSLu3HWxYQzrJ8DC2ThuB8KYbNE3pTEunEKwcstjwuT",
  "key32": "33hm31DMYMWCcigqCLb7Sivw1hVBsug2BVcZT5Z4x6f7kX7fvXoLg8ZtM5c1ARodhGGJLuzrN4UZtjM4dEQwREah",
  "key33": "4ggz9sahXMpGwBENLeQ9EikGhQSVKWiLX8SrJiH2TMa9EX9Eomi4guyFMsyMxmkfUagHv7szZ2N7N5AUFEVTWNnH",
  "key34": "2AqMVNPE7XeBgsHH9SnQ32XLhG8mUGEeer3ipbqBYnGZcDUagwwFykQbYSetcrZaJvE3TmR8LRxqoA94fVKYjKKf"
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
