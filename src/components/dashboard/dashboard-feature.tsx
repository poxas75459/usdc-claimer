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
    "4Ed7Dzqoe3TozgFuMCWmdkdPmKSZ3yfXhfQ9BnXdNbJhbb9NevCAnJ5wX6S35u1J4KLvh352RndfDPkxrgpcYFTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rwUHrEwUip5VoSaW84cvRAwY98oBC5Q8w4W2MsnBMwjYGkeFPZx9Gz5vxUg8xYAQoNUDu54miWNhr2QxKXUH1sp",
  "key1": "5odBCMEUa3sV9brGD7vQDvztg3m24rq6agGxQS1ocBMiHvV6ydDDpL75dxj5it5gDXXpfboYM5cJoSYoEn4eon4Q",
  "key2": "39RhULQRqE75589Ge7XmUwC6HiEo4ZcSSrKXgeUf9bFPDQWS1Y6xk8gr8gzz2v3PVELyqMGjx5YJ7vJjFrrV89uu",
  "key3": "E1RQLm25PqgkjfcximDNVWvDg3B2zNqe4QFGDhFZSmDuYUyDxvLWc3SxNtzt3YQWm2KYcPybqm9h2mbT5Ed98Wy",
  "key4": "59FLrUuRyFYBCcaTSUpXKt69nSRWRM8tBvwXnqqVhyHzgzeYhhWRrnkQri6UWmDJHT8bvm8m76JdwkprSdiM4Lf1",
  "key5": "3KF4uXZakrMwyR6H7cbPE5vALhd4YGaSVafAWCrqntWRqFjoL28suWVHeetuHN1njDqWv8okX6kPv35dvQice2K5",
  "key6": "5w2SVESThNiryhAauotTugxqAq7NaUSnE2bY1Cm8rHNgKLxXP6otAf7vvpXP9SXCwXiYvYcF2j9wQKbHXzGKmhKn",
  "key7": "4kmcmZtESoFDLyPGNgFPf46kAy7FK4HS62juoKiPg3mh3G2Kqv3srz7gF2Ne2meTojHt1tVHHhKzpDjk7xkPqRrZ",
  "key8": "iHhDRkG24kcMqJzroVQAAMt9PG7N7UZecGh274fXmsb1LcdZ64roc8kDmwAQsQnbEXkxR6CEWAqwTHA5Ja99MXW",
  "key9": "3GkMYUb216JvghHARxMsEmAARsW8zrD2uPaf4s2zyKt9DJv3MgTNXVdJC5YbGuB5pomigcU23vtwhmNWWFkBhmY7",
  "key10": "2FuHGhWz4ScMBx1d2CQgnCBc2wzF8mhsZXhCwhUhbn1Z83uomgDvJXgb4vsLUsupzCaisv9M14SGkNhyGJtTJuBh",
  "key11": "5aXVxDQvjhQG6MfeEn3ic7qaJt1TguuMEwgPD3zw9iji77m56Q7KZK4fdanhAbHuPFiaPXvR8isCS2ZMgFqmX9ud",
  "key12": "5WKJEUonRY2gY6RUcpbLg7SiMVwv6S2ry7qzWMzLoVn5BBKfzmdrV2xYak9PurVkR5VSH9NCDjEJrtjgMC98zLRe",
  "key13": "4feWTNbEbEzCJ3gf3EsGvE68xJrY7AsX6jVJzuWgK9RC422LuZEW34jNYdCdxVfNjTtcHQ9kJ3AS6ijWhfRSGg6S",
  "key14": "9n98Kx8fiW8A9N8Vkg4ppFkbKZ69HFhmqpSD6PH7kVPtEUt7RNCTDNDthBLiHQGjQaBBAB51vvfqnfsHVDbyG5Q",
  "key15": "2GNJx4LvYYrBTHwWcSN1uQp8VS8BbU7vzkSftSYEX8cPe6EmZAph38Vd4WWnFLpNLuYCHvDFB17JKadeEybGULYD",
  "key16": "5KS1SNqxFMZc3ATPRNUJ34dicbFPuNseuxWgHRtMqzXzBk8kscuNJ6HUUuPv3JfNsVByw6iNkWTjDx94NeNT4hLp",
  "key17": "RUXkngdFd1kevdVQZJXXG3i4AWARiuJHVWQ5MtaBZhy2U3HckjcUFubhZdf8n1mujhjDubDTUYeRm3vMHLrgg39",
  "key18": "rLhCibPMEZ2RycN2k8Coh7UQrNJJNwetv6JVHzXjjeYmXVifMFY1pzbhiwP1WXhEHpm8tbryABCYSdGX4DVbCnL",
  "key19": "362JBp21k3WE3toHazieoRP9VRgEyfn46GpySrqzDoYD6wGTV7g8QMyYQ3adqQ4yucjX941E7imbYpgHJoDVwFjs",
  "key20": "N6iEdTft62Am64GJXnAmXuB9BdYz3hqyrKUPU9B6RVDBwRgUwpKjJZ8eDsLjyxmfEEaBxo9hUGh4wUcqhim6dEP",
  "key21": "2SuV7H8GPbhCkjFkpjwgpa2d2EJSUWaDfXMVCKK9qGR8t37GnMAaHxg1hMfNxNniMRdEbp6Bmdb7uxhDh4t4yPwW",
  "key22": "2nJcAoAeYqWxgd1b3qAm9PUNJQEkP3SeNqtV3LanJfQyRJESzE3BRzCKzdFtsFL4Jipjx1QCedfJ5PKicKrw2XV6",
  "key23": "42pXMDHZr5bZkKHPKL7fetRZeBFzELDW5gwXgouDsHGN411T3Tj2MhpZwKDFURRsj2spczoh8Pc5C8GN8m1scTg6",
  "key24": "5LAb9dLVN1z7yRo9wrRK3TKaPozMf8KhVGv8s7Fiw222wGTVbck9ZrkY2w5yCnonLpqdHruAwph2i6ZM6tjswAZm",
  "key25": "63mKPhBnCGjCsvzXJLVYEi6EtscPYjvhdc6R5TASrwHMGNZALMXSJApr4BfmsmQts7zTeYb7Zu9LHtsLnaWt7uBs",
  "key26": "tJnG189L4XDoQfbnaV8pN5Y2KPHp5xqpeTndqu8qHzRxDAyhrtNQZJeSUPi4FKAAU2C2jsGsPbLmLyEqmZsn9cS",
  "key27": "4n5naWSDXjqcTXZrASm9hJWvYpBPRxbzgyHj5jLUTw2cxSFzAtNsxYASJDwR4tVV6yN9gXnkpvHyQH3jenX82Psk",
  "key28": "3VxRSfJWmE2TzQ4GPQVAWq5fsYCj8U3dfEGy58HeeSEbK9jXhmRSKpqJLvTE2H7CueSgHDi9nBkktvF52JsLtLfD",
  "key29": "2y7TXzKBi5jFFZPBRYKynqZ7yU2eej8pSqVLmorrbDZZdvYsbpSWieMFspAsBALxrodh7eszZoRsbxHh52efH4iF",
  "key30": "4bgED8pGVu1njvkDJSBqa2TzxbRPkWp5Dh4eiqfWhybSgFDATX1j37oJubFax6VKESpY2TfiFMJYQhwWsjD4dytU",
  "key31": "5x4RUfi4SBsrDs9kac1ehC3P8BohoZQ4KhPkApWALCuxVu8167wFJmaKhcC9Gn8yiYWGYMzxA1oY9wF3tLu7f7ko",
  "key32": "5TdJKhDtxsJq7PSkwiaU74sSN1WteZsSVdUfPjhvWPVqrTdF1eu3V9eZnvZPaeaymAp7au3MeGS2TtmpgNsnToRz",
  "key33": "4LVEXHe3arCK5ti5nMaWxfs4SAr84mvuC7MBukSuEq6Cu9CeZgBzpLpccnobfzRNbHYEPZ4yQm9WbqYRxC2JAjx2"
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
