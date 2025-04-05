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
    "4wus9wAwAwRDBJ4VegABjnajrcYReJSKreAgtYu2HfEZcT1ravnekwcwTxLZDdeVhesJvRWTzRbpMB2a77Gogy7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FdJ2siD267tq1HqntXvW6QgZGBVFpdA8JkqswEvuq3y5UjUjeAqr8xMJnG3dzyVadSBTsp8cxDzNEfUaspX2C3g",
  "key1": "5BQpUXR2V7yrTqXJvmepDZS8YK22MFZqPVBfK2cL1ojsmLHLD4ZMD1JpKvbN4rsFvnvr2S4B38YbuCWo3uL9K7NJ",
  "key2": "SSbKrHtwcC6snWQgzZeU7wf35vx57TJVUGE19ctDqUtJNzZm4UKMB84n1ZLYDYRB3sb3uzS5QKf9waNnZqdE3wg",
  "key3": "nqAgKZQ4rczMSeZ7Exjkodbzw7J4FSF9D4qhnHsFAHU2wrGFLkhEKobfnRrasvXGwMFcYKsU4QPAvRUUPnNdvGS",
  "key4": "57oT7mcM2cQpvujYqHDAGSt6EdtPEDip8e8Cy7okX9LxEUjJKo2zhA86ikDJ9v6vRfU9aXvgnbxdMzWJAoX5DVtW",
  "key5": "61XoukNcTWmrVDANmwLoLBoqnvNhQDyNc3HvaEokxYATLHCpoHdUKfV7CE9ZFng7DgXegLmeWF7vWiezeBHvPDcB",
  "key6": "64VBmcATW2avNk76L8rkUg2N8zTCguKkiuyZZJtyFWptCZ5w6P6La2CK3w8CjRQ3sUaA3tDATuRoUPZopw4yQjN4",
  "key7": "2SsiyyiGvf4Cj9y8C3MpETox4WpLXmoAkmdFyfjFYHeHh58kS4CPVC1T4TMQrjerXxHALYMB6XLe4CeeUKDF4um5",
  "key8": "5DhpETxJ5JG9KiFkJ7sNcZo3N8yphZf1HJgr5jHMjAfrWEBUPXMDPfZQ2H4Cc7Nhw81WCzLQ4TD1uQbK4fpzpqRa",
  "key9": "5sS7eJdgvumkwC4nknPSBjKitwZKmcGS9aG2CJV13qWaVHc1ZoPeQT8qhz4doFrRDSzSuk1tz8SVXdv3ihMmo2Dy",
  "key10": "2BhNeomosU3R2JVqGArkT8KaZSu6DnyYeArqLtNrhmj6Wnhxw9q7uC9bfwNjiPd83qsCakRPPKD7uUM3veKUu4uh",
  "key11": "3eR9hTLSQx87v4j7Aydc2uVbrzb8X6iKMQZU31xrnezQzdEwhJLqcyiKfiBjPaMhuUpmZmyKzFBVJ3grRjkeB3xb",
  "key12": "2qv6ePTGpfvXsarPEedXsqR4q7xrAM8yQefcUKwvyEoP23qLiBVTbr5LaLywHmhcb6jgGYpxNYvzJeEjUaavyEUn",
  "key13": "4ahX9oCxS4DmHYSnhNdG4b8kXNc5vsy4kebz8SbsA6AUzfGtcdUXU4JgZEsaZmVw65oDTSnLY34oSNkzSWznjTwF",
  "key14": "2PnQdMAC2vKTCTSij5C7p5Qm6gVNV86YEE7gsr4PmQD6cgWoo5c1PD4JkcSht8eWVkAzjnXb7wFoGzfgFuLPcX39",
  "key15": "35AJhhZm5ei1PwAErrc17xoAnUFrwhduWwUx3vmxtLUKCTBzc1ps8CwR9dKf4tsk7UwcNprBm6LDXe1qEAW4eAVr",
  "key16": "3chnMrWbXG9jGRWh1SjXKCMgQQfg67YfwftKJfec8Z2XREppYX8hN8vwpWctSdWF6JuCfRuxLL2iot6p3VWZMtxr",
  "key17": "33WXnhPcQ9KkQZ491AnnbrfseWLG9EdyCPCP11r3DwFx5AR6wyQoYaG5kXVFuWAtCc92q5XZJ9vDtiC1nodz6dRo",
  "key18": "21QfVjGXNSgNhpEprMe2VnFEX4XDGyb2nsXiNYa71Mzw3uXCLZyPXSciyJmM57jtyBpyy1JjPW2gkdEHsrgEfzJe",
  "key19": "CtJcDXppYCsj8yf5zFCEB3owEDZiFNiMLU4ry34y4oW64P4qoqJxXThcVbNqp8e85h9Lh6KsZnmefmMG283Ada5",
  "key20": "4nBJAYCJrBZCjUQRSVu6VuJQSKHzwT23jMLuYQeAxpNSmWpqUPgbSXpTxqQiYP8jaNdP9FavbLWBJRrfXyGsiBvc",
  "key21": "5z8GGjZTBUUx86GGHTdBZezaWnRbMXVjfqmYR9ytkMQ7nZ5nqLSYpZLLyVWdGpvbEjma62dapDqwKMwjNCzeJzpq",
  "key22": "2g8viRbq5JX292i5cKjd1qCPHXrj9hiMjFpi9E7qCPrPkLs6q5MkpAhZkcgs7Mobyh55aRZStMceGkWVYHA6tmKg",
  "key23": "2ViPJHohZt9CpHzBLzHZ91WrvjKh5NVB8gdHWEec3TD5doHi5KYGe1rLWQpJezQAwuV2E5oBKr6vb5xhVmtEX9QW",
  "key24": "iAahcSzHed65fgthabBjrK5ueWL9fN8YzFubih6mMfK3PuTBd8GSvxExCmHfKrSR3ZD1S7HSTKu2hTGfN4owDuY",
  "key25": "27LPEi3oT5un1mAyvePwsL48NRv4oB7UTwqMbaFc6UjT6MeFkmZM1zkiuCzuukSPCaRzPqfdoR3L5g5FKenXNxbV",
  "key26": "BYwEZYdxQm5jVwWHvudvgNxGTjWgNjqFnTwTmfm6JqDfPFCsEVmYHGr6ZNhVithBgc7ujqgEKH6wDotJJ6UpnPp",
  "key27": "2y7t6K1YqVdmrvyrWUzpi2gdokNtSbUJJmDpDMpQXcD5gsc7KmMiSZPDxqNFCxoyn98x7z8b2DiWLjpZDdffVWwm",
  "key28": "4wVugB6hQup6mm23DMYA7mJd7hcUU2sTR7EcipNFFCFSVNUKp8PV6YCM8vEjq34hogprMxtzh6jKgMLuZAedvaWP",
  "key29": "51PWa2FjdiEMWfe9N98dBQFe33LFZZdA7MoSYqmVrQizoqmsVW6uwz2jxSoM6AekzMVPHwMNLQtDwwGss8KLUAXT",
  "key30": "2FeTtqDfAcqrm1ojhkcvgP8uZ248ez5YTVZJwKCKZxKW21huu5SF1MRg26XsQNdyudSJUC5YAKDY7D5ZL4byK3Ds",
  "key31": "3s1N7nSdJnxeKMsBavRVPeCzrUca1HbCsMQhVqqDXWAHSWGeRhx2tA9Xb5vEcMXPAKoVAMXmSVNuYR5NLMQpXCzp",
  "key32": "4VhPJXDF49YxTqJHnzPqS5eemRgdJe45hQfHGdfzQ9huXGuVP1Up21fCQXGFdQrMDnzwJfXcW2uYNcVhFqqkg7op",
  "key33": "2bbpUy9aoS3AwGHW5wxtRN5Cu3srNGwTbHTHR2xqa7Xz9iyntngaCEV6LjA8CotPeLkQumDNhcL1JZR54FEktoTV",
  "key34": "63RUD6PfA77NJKHuz1qrHpnNePitnRMV4SEstMP7HUEWjhxJ4tBxHv6d93GQ4PGSLSG765c9yt6CBfG3DteRW2A4",
  "key35": "4X9P5XmQHfs5d68D8bLyafcULwGH3RyBqQVqMS4rKCL96oGfXh1V6zaxDoXbqCcpFg1Xm7P8udcVWX31kboySzL7",
  "key36": "4ZPiZ3AAuHpZLpxFi9k6gjMYe8TogpxtCWoSrdZVeyA1p3935cjaRBNtcDSsWYZYw96od88Hn97zTGQM7nMsHm9N",
  "key37": "2968sUpu2YXCzp4aaKDtGL5VuPtibD63fGeodAvXbyjKFXeJTJ484fp2gg8PH8JRd1RxyDrYekYLVYohwUcNTPc4",
  "key38": "4F7uDvfcAeqcPfKrYyEfat4nP3vUb8tWsgDvPpXWAiNQs4AnU97tsgTomVfxzRr3jXdbtLUoGC23EPRxFcR3guWU",
  "key39": "28hB8XU18fz3E6PZmKSg7Z1mS6p4JpRHfbax8njj4Xy49BfNFUb6eMCVB34rYEuPjPPw6hAZrrLVyVaE7oxjpm8A",
  "key40": "4CxAxLpoPnBAqCrDzkfnU5EKub1NBTh354QwsUD63oE7y5ane8EjHPNje9w9hKi6rhnpqzDTYdjEPDfDZUm5YqAo",
  "key41": "3FKD7DjscC17Brv31L5FjEoFaXLhovHtMMoRhHV4xLTRQPuJKWBMtLFKCG9rrpofdnkY1tYY3obtjwqZB8k8D28x",
  "key42": "2w9R3dmXNJiLkG4cNH38YidK3nMUYDVoYhKDERDdPzY9i6ePbHDPmwubaMxNsJ8ZheEzR3NE8xjmSFtR5GzH96p8"
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
