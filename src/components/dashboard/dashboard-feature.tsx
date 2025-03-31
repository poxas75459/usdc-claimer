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
    "YkxZm8DXVsBv3gt1D72aKZketp5g3K73KqPVace51PCcnvronhN2JFG66roQgox3KJqZSbHrmiy79bFzVx2Z4Gk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sDdoDf75D6JaQmZTcRnc6XmzLWQmp4WXNi5mtHaTBPLHDJSpXPUBPUvqG9Q2exSoG66ft1fpTMmYujnAfaPAEuF",
  "key1": "4FB3w8SAhdD7231FvmfYsr1zSySNtbTjVyAaADbc9DdmwWTZwtXdCtwJU1YGEkM4jtTBE1sjfbi2fb3eoQjtumRT",
  "key2": "5igJF2wSCYyTvXVFDCZQToEATiBjGDjqVhXjstrjMJ2BWej9m7Ek4SknkNZzUGyejVNRX5R4s8HLC534mT8ZEyt4",
  "key3": "58whehkBq89R9CDgGoPZFRVyAHi1KMvJL7xzbuKLjAuy9xhfVnJzazj6qmroTLzQ6u41x53cvxFenzvogcSP2NhU",
  "key4": "2FdXXMqmjFRFipL7Pvi9jxx2KyFdwqU6gXqrA61npcXeumyD1kb1NFTQvTxVJP2Y23dWDf9qrbYqnjZA3Y8H4fRz",
  "key5": "tJg77HAoSLU4NDbF29qYgr1Fc6a2GzPqkqfunP1dPUJnf99LXeAjV7kG9LUtanKYB8XYFw15j6dH7W1e1jTqPyL",
  "key6": "xtq6i8Z7STWJN1wrHkUFiyaknD6qcLrNQipzaBjjZeGQEho3iwADDDA86hbHVXUkLsUVTZRHRV5B93FyWyjhwKm",
  "key7": "3qpxSsmQ5731L5WK3Fc8C2ox7xR3WsWeQ6ucvEuQgiBvFTho8NwN24jUYG44Zm8WApZz6vqGp9xpoz7KwkGUp91P",
  "key8": "2Pa89zxzCocYnMKxiyZtVn4bK38cqkC7BxU3Vuos2yvnBzXyrGYRWXk2eMLqreVrckCGxzBbL1jGDh2oCWBDXMic",
  "key9": "5nPvucBiADoEUjTej4aRjxNuyrvJMHragrChDqUk2MHqa6Hgb5NPbzL6pJJyw5t6HtUyRNfF1ALrwZowdsCkRfyr",
  "key10": "8rABXzSN6GtkDSqk4AtaRanuWVJwG5LBcgKq5c9Bk344sAD9HNQhUAUvURQn9rBeCjgqfRghgCHwiKsFPabNeHJ",
  "key11": "3iPT1QXP7Scd6mQqTPXXeDj2h2nUyRSJfgs59FBMPad63qzx7frfFnLMs1QQTuYQLxMDsU6QJwY3QcWJYcjKm62j",
  "key12": "5oky6kt6SkQtTed4q5jrdeXLPTUoQ28qFe2QP6rn5Bq2dnWGVsTR9zY6s4yzYcv13hKECv8yUQNP5aWB2L9N6zpb",
  "key13": "3abJNtHsxT18V5r9zJjjk6DrqKy25e5ShMidx5i4CJrnFJSiAcpDP3ewaHjX1fgQTM4zFCzwaX21FGtkXnVeEb9E",
  "key14": "VhYEM6YJQrRwueqLVFLT5NVGyB3thm8y1v7R1JuqRd9Mjj9xE6GEjNZjqwu78hDrS7KeLxt4XbXnLJX3ujwobyT",
  "key15": "4obFc4kvv6pgggyaq3kLcGB51vbgUEiCu7naFVde3u5HHLzqaE1jFgELZmCP1vu4FnaBb76YdD6EQsywbjTKSAA1",
  "key16": "fwmujxT1W9JQHXBGgpR4qYawekXXTwA74hWc3ZzPLBUNGmdUUbHxKRnRnYRfgAsUK1KyoHWCKyDCsB9sQA2Z6si",
  "key17": "2P6MAthF4CE4rwFLJhTRAT6EtD1nEiGAXviP1jYtXfEaZUQ4ZosPveQNjYAUta31ykiPaWig2x1z5QEBgsSFL2X3",
  "key18": "5FkrJTJUX7Ly16CgJTZ8p2U2q2bcSznPGVPFAKszf8Zcp2okBaJ6gVLpeZNmTjhxHQg65qvByR7Aihr6xGigMxhT",
  "key19": "kJCE1pZcCUj17C9Ab1vZZjf1C1NWsJKgHddK2f5kG76qMbWk63C3HyPQR6DXxaZ8tFTTgtHKQfRZmKxoCdcRc7a",
  "key20": "4g5vWr8qdTKLorJwyzFKoqoa4YRvhHpwMDh5CLMdpYQvMon2F8zGn6mRRWSBkah2ZGvECL9FjXD13Twrx6HwtrZD",
  "key21": "UnCwXKeN51hbUs8R8dkqGj2BJCYgg9biNosyoBSFBb7B8Dt66CDdAYTG91iCk6UnqbE6SmW2B2ug7oMpnZCoAe9",
  "key22": "dAgbEPkUUVAvNEpQZttWKJQFvH2Jaceqkt3p1afjuL1V58EUqvhqygxvNb96VNpdnrqPLCKq19GuZ61ZGCVj2cc",
  "key23": "ouBbDBqhpkeHgKHdH2G1XcpajxMKp6yjS85tb6A9ewNK1sbYTge9XXUyEMGY1EVBzhJ7r6aMeny1ERYez5a9N7v",
  "key24": "3QdERJaShTJ25JBkXvMq4fM2BcQW2WQqpZzsSLQi1gW3H2AvK9brsB45GutvguXr2swQXNg31uVnRAPDd2XrwLGi",
  "key25": "3qVYaTFgoSpkK76fGaFonVuRaKZQ3kY9DyGeUndKAo8YAXWwNGJvZJ9eNKkZYzuqg9MbZfDVmSAyc84nZy7uTR1F",
  "key26": "4coR1usfCR8KbPcxsHrEc5QXPojxfGWKkufh7QH7QeHo7eL3gRmLnZ2So5hcxf4j8cqG2d7YxM3WtjStWdUiunUY",
  "key27": "biyZSwgxSoTa8pirJo5PBk3zMPV578FMFagRQcVCSstVPF5iFnND3uBSgETX9EJQsTQLauuwDzVNtpbPiPGupxr",
  "key28": "mcgQmGDyaXYjuAEEKv52VKUTVJUvsnYiTUWxq4gDwrMXRuPMq8tAfd4T17EkYwNDkBx9NxNefQfqU7YEtK6skup",
  "key29": "gqLd4prC4ygHHDhVHQkZm8tYzw2mSQC7LA2ZuUETx47sx3GWHPaU6core5acjDR18vYQAWXooj8eW18zYBFp4Zb",
  "key30": "aDfsvMe4nNXMCUAYdghj2Sxxyb51yQaPvrWRj8Rdi5AavjnNg2dHinAGYbW1bsin31N9i75S5anfNpZkD2caEtd",
  "key31": "3ZPnYBfCNKc7DLtVL7kkNchCzWVn2CVtP5h9SHCRPXe1JzURcjGbQoFRTjavH2kAdbYW5Wkd6VBuHEFTYkeGqUmM",
  "key32": "4HxaBwybLdCkJc1dWbd4VTQ5F248SJ2cAsriDCTqDaaVrA2hheRquFq7mf5wAqVcQeX1eqBVss3EJSkKxWh6tkWG",
  "key33": "51HaoovUMz5KxVsnLiJ2R3Jd8WmZJcgGkX5A55E6HGTdiJ1fGyXnaahTmGqedfA6wBY74CVF4Ry1Kzi3UJ3ZL6YJ",
  "key34": "5FJyG1CTgmJZeo2TZXgtaM1aezRS7UygjwP4zfkE9bzUdu2eGTyxnYxeV5Zn2Kf66Y1EVgqQ4DGAjth1Gw5shMgc",
  "key35": "2qFCcLfTdeVs6pvQtkcbaswnA8iUtRUpfyWbJGFZGVv45E1V36EZhMhUTgueZ3S91EjndwKnYkPBtZxSE7GgiV17",
  "key36": "8PL3pT8yhKAqL1BWhJgTPzzeGx7JxhdzEZzgCVHGoGtJheWhF7a24Vo6YhJNdoYpQzL9GSUcfEAuvEghdgHKZn5",
  "key37": "3cp5jdvR2BV4oHbSVvFUvXvbaUz3SKs8qrahwUiaUe7DDJV8oWsPfUNw7ATpZYXLydBWLhGAQLRgLEZ9bfZpjx1x",
  "key38": "2DEU4F2Pz2vLwDR9kEQDiJZsn2nP8RJcZWuNVFs8D6Z2m5SVfNpyLoWEcNPjgE6BGqPGCvVyAwGL4mG6vUGvyRQu",
  "key39": "2y9Xa92VhRT5YY2fzYyD5ouagP2LiAAEwA1XkSDmpqvndE9QfArwQfQHzwYKqLT6a92Ct69ZWrS8FQAif6SppmsE",
  "key40": "5DD6fuMAXB7XATqsiJjJsqZdGHUCqaoqBpxoYAVPYSA64ejaEfgadqqkBKdgvqLUqmbdvnhSfddNgcykEKqa2by7",
  "key41": "5rZowoKAUfdSLbxruFDcJpJyMUdRdTuBvNBKUyFVNeNf3TG7GY6BjpwGqp6EehhSfSyoPnbRKmwXfd383vNX4Wum",
  "key42": "2aZCi35y1VCt7N5ZHbyr5wpiTmyuJg2oc2RKGPirvSSjD9V619q376ZBCqQTc4a4XJZ1atBLG4g4sdFhUbfFEKs"
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
