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
    "497xhsTnHkcK2P9KXo6S9EGRCswsYBd8QRTJtYqBPAy3xEjMtZ4ZrFZ4m5briT3kEZjNfRW6XzuFYgjoUjeCC2Cj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JKjZeCoTidKUot6Cv4LPgDroeASmZ3Qpf2GNq1gAaKSjAS4k2keeQDJ3bzJ8TVY4dV8exRnWf1GGmzGj692dPhi",
  "key1": "3uXPozMJoHabjoaJboJETVK4N3np3go9pAR1bdXeojihNoDGYa9MvEBaXTr5EE2x1n9ZMukKuGAZVGe25sZrgj68",
  "key2": "5aPqNZStLtpm3nKCaYQkzQevRC7P1mjhUhsEgt5UuhBRfJW5pZBfQdozUP3Jc2iGmrCnxQwLbSNHww13nCF3rXzU",
  "key3": "5smKibfNPVQFXeVuqUAGWhTEpPrf1v7xtCAZgSm9Wv1gDHHw3brR1ehQqS5edpD87xP9eWsBLNDsUiDcekiW7PUQ",
  "key4": "5AtT1myGezoW5fGC9RZg6A6f47hdYQFU6ctbukFgUh3ctvSLrM2pzxEWS5akfCaxQt8cGNmuGxKFyPuFKMd9Yrnq",
  "key5": "2R4Ly6KrsovxGJcytoCt4bbGeELMJ3VHLMsFUpuDnnwDSKjMiqQ7bJ7Ndp1zd7SzvPK1XnUmqHoN4VGs2HdWRUPQ",
  "key6": "3E6ScFMu1KaxGDg9XziKYhCKkKTXE2njSHQF69Ay8q8WhUWSotvZN6CC6Bx2jurDkfaHtPqWpdhKDjwfGvCF4uM3",
  "key7": "5kfBaATugAJMeHQ82dsGw9iH4D8ocNG7YjxhjsVomJE11A1BRRiRxw6ATBNPgzt89X7kGeSXCgiMC9j8stRQedNd",
  "key8": "3qFydHd1ncF47zFbioq4wP8HQff4jSYRE1WTaAeRVg9oxEYqUucYJh33aiYDeU8FKKtN4hwaUqaHAu8sWxM7zhgo",
  "key9": "4TQCZvvUc1tWFNcEFDtgzYQ32smJwrFsPfGcsuQgn4NyfaDJSdBcsJf1qk6BZZAtYKhbzw6moLcyPLu5KnzeDQhQ",
  "key10": "2cmWXhDbrds43iHCqgcqGr5reD3yZ7XexNREZsaoASdqqpY5fLqmh9NWPQV95tfZnBVi9m3FtcnWh9UnHsmXhBQk",
  "key11": "Src9FHV9gvbztJesDQWBtnQqFzNAibqXpfCAjkTZwzWmQtUFgxZ49YxpVda162b3xEEuS5igUSszuf1EK9AxYCn",
  "key12": "47yhe1VL789ATdfgYAU6UVRwkFE5C9eLx92vtHpemWWrh49pvyPqeyE9F6LSxuz4rNo3ykkLa57yTYJrb5TxfV48",
  "key13": "c7NcAr39zywsLBZcDevdspCPn3cGWHDPUBqHy5uhjNJ2YDsqrt3CdeToqv4GoPiCN42vvdjHkzGBndHQjdHjDWa",
  "key14": "3aHgQnkpPkJ3jvusKuSiHymPyFKEcYDyk5MzkZYk6tRrD5vVT4gmYCEVUoJ9ot7UtdFHK7EYn69vz5yXLqwA1Wno",
  "key15": "PjkpW7F8CwHCuVLE1EwrfQFUrwnbLgxLnefYjdQ3CSscz53gPVDrkFnaXQDdreEVHao44EdmBZ85HmLihy2Ptki",
  "key16": "vrshfNkTB7nAkuZ1JcoXwKDjW21SmByv31rCP7yH5UWiYZQcMT7tcR1jQUoCw4Bc9ijvmTxKzFvY7zEYxFKBwoC",
  "key17": "5F7t4Ar9ZVU72bogs7xLZjMvmNhvz3bkYge6QyCcz7zKqu7uWXqLCCQoHmeopxV7xQKJxhsh658KEQYjoFDJsMJJ",
  "key18": "5hkpdsgi7nojeKrWC8bWQNStWjUjTuqrdtRJ4TdZCYTWyAtqjoXFfjfgMw9DGKSazeCb7Pzayccdok4ngkJYwPGL",
  "key19": "4NsQfHSAyFh1xwEmRBReNFa552Dt2SuFwQRKvEgdScWdLWQzCte8B2kRf6Zt2h4t7NA4CoeMUYpCrQ5pPmJ5nMXC",
  "key20": "2Z75y6FwwnUwc8UZaPwzLJGWRoCtDA3nTAsD1itswke6XRWspvyfPwGo4xef28GpoTX1t46BXpDHVRkB4faVMDGT",
  "key21": "55KB2RiH4r1c7JGGKFUcQbmBh1hZ5BfVjRgzqQ9G3VcSxWYkTQ87UwS6KeZDJJCtvhtgD65xcbJ6JN9s18NrZ4Vj",
  "key22": "3aTYw8wct38Dp6ngGkDWFz5HaeK4VrnL8WbML8ooawkWAj94wP36MbvXnSQtmDPCRPvPSPEtyttBzbHURnYudr4R",
  "key23": "5Vx7v4u6hDwbMP3aCBtfvHapQS6Ludt3fADS7C1CDkG7LPqVKnny9L5GDBx4anGoXnCFtt91dGUSGrGgJ8e5USYD",
  "key24": "4ftDsWRm9dZkz2rhVe8fhhi4ijgSmpru7xZHFtkX8AKoRJcpjcjy1zqGzsdDRe92yn68TuvJ61wDrqZL9GrbveB9",
  "key25": "53Wy2uTKYtRWkipC9jYpHmycV43EY7n2ckuxW8VUppKNBv3KUhjGBRY3XYszhDSyX2eGM9tPxpvjgskvcuFxATSQ",
  "key26": "WpFTP9pgdqy51dLpCCkJyroEE19KqXRsnfbHHVeiWTTEPUTnctFqd4yWBYLPGKK8CbuTKp5is7mXYssfkV5tPdj",
  "key27": "3dNWpUNh7kaivah8UwPb4QTAZVHBSTYjhiLkp67aoSskthXCCm97rg6ApPbJMz2JBU6mzBzmAbQ3aR7aBAsJFzJD",
  "key28": "5yfdE9MegAiz7dx8MWb32k9DmYzs9iqivBX9tDp3dHNP3pZm9PcLbgK5aL9GonxXzLCkEFnLrAP5T2ULTyUdSHmw",
  "key29": "2J4ZyHh8uShQYS2A2ovHCjwBaLfD6rRFgnTU23Yj2ft8pYhEQy3r2jrQ8F2jZMaRtANZZvmJkXDqQotRVZU5QgKm"
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
