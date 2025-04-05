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
    "3UNRrXiy6zGSLsixhNeH88tQGg7rvksvNjqahKXbXkzvcwpht5CR7XjBAktm89t8EErUvmUkFrroJuwEddBuDQv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kAy5yQ3oaFV9Pwix2C31a4DyBVg4p3HY19r8nDLfSJ4nHpdExMpgJrb7nqcTMZQNjHu37jJDwCkMS9c2Ay7QDj6",
  "key1": "LNSw6DWNeh85GA6tT8KWGuKq199Jmi9zXP2Tz7nvFEzdmQuQuxoPTiM88D4dJ9jaFVqatNSe1KDeVqBybF8JV1y",
  "key2": "at89M1N8XtJozyr29Mx8KxpwZJz5wfxweVN9yPbiJzhdRY3SBnGdR8Qdi9GzAezQw1xXU8hJrtXFkv8K1saxT2X",
  "key3": "4Sd3n8cRQmTQawxmSs2zovs8FgYSECH8AX9EJuxs9R2oHJsrBnUNVT8YDRvtBKGoJ1FDsFJLGsJjruzjJMTUfRWm",
  "key4": "5MmjnQMdxmCdzo9nKFTUepV97Q6Ys5tAUGi4yBXfSxqkSpD812wK31EAHR4Gk7i5aw78s7Hf9Nkwy8ZWbEvN7NiP",
  "key5": "x8cgxMkdj2qRfzBPA2bpkQ1zsiYrX1EJguyWvpVNtdeedsSi2GHfwGfmbFtkvB2mPHsgbgzPG5SPedzBD5BLRDR",
  "key6": "2T4xeR517ECSXnUmNpwpchM4JJkAN2UXe7CiTEsDGHVkdJroVDVwmdsFGSY9UPDpmsp1qwbCca8cmbLAGAdv6SPN",
  "key7": "2HRvpmYCmqq4rseHHQXDYjRKwpVHP9en4Lnn9CQiwGmsAGcm7Tdh7eCVAzCDc2k5mypHsZYK3WLkUsnf9156V4fT",
  "key8": "5JyPVMYPiHTGkJ9BTrabt4hd33XZEpjVGwGPbX3Sg5mE26yBfuxM5jEsebvk4dTsy9TrpBdBKQj7uX7p2G3XVqKA",
  "key9": "2r9mz2XvNZjfJsNQsyEhRjdtXFYYYnFm5DCHenj82WQScefGW3D7LLKKsMnpyeH567rQxsCTDLtRiNDWVtVWpDpB",
  "key10": "2ioHZDmcSVnkQKjq2Q14ptDrBGXqrbzv2xjhZa2gtVpp8q1kcU58ZRYA4f4Z5jCbjjU283eAz5YKnSYsN2BfHgoZ",
  "key11": "3G9KiutWiVWVXbMpAv7aoNnZ3KFmH3MX9H7AxbpS89Q4W6wH6CmU7B6fchCdWBdPkzsDoHjZjGsu71zPanfo5EKj",
  "key12": "4TtbX8zPDubU7ruBGyg6NBvBD161UX31UYj5VttinJHjHK3PFpr7xpPDXoKaeb42KnbXJGsTNWC7aTXZJDtgz3Co",
  "key13": "s2ifV4ML8o1XtepSDgeT8G39CdXYcoptV1EkSKc687Pp18QyZsMPohwDEyAfRydnsY3A53KPDLwsqcimyppvxa5",
  "key14": "3XpXuyPqEz8ZFduXiS5VVbfjpMFf3MPURvURYdfbJj9fAcMW4Mu5nDyh1tkfgdEJHVKBpaTSrEFmWV9YpK61qRWE",
  "key15": "4d8pWvofQRJwfwPPGF1ghCHDGQGmbi196zZAQhGtapLfT16qtRzkknQfDbTRGRP43xcJrvakJ4Lf2qG93sJvrXeB",
  "key16": "3kFsowvFNGvZrSqZowRQz7juYC7qcKdmcmhePuV5o1BW7LgcE18GyLnCEt5t2kz5mCDHGmmoDwthSa35qojwL7Kx",
  "key17": "4s9G2FHPYGmydFsFv8nZyA4Kp5jaxEogwEpa49vu6bg45uC1XhzPAgA6Vyj1nxG6KSBAm1S29nhGcoNJdShPUaKA",
  "key18": "59yBBb2AeiRSHoJZyPsKZN1xbyK1CMsEji9JuUqJcr5wsGEUVAXQH18DdnepfAorfvkqn3i51DS3XTNZFdrZEXFG",
  "key19": "5rQPfJE4Xtz3GVJjAsbcBXxojMDzTYhCiP36DaUq6JZmFAGxLXMGY1txB5MhPREa7W4bBrULTu2JQd2dNk1u5E2x",
  "key20": "2WAs66nEyHofpuuGwBznv88CQN69QQrhYA8n9JW3oiEufpx633yXb3nJ9BWpwYob14CjnLjBrWq5PEbNMqaGMsZX",
  "key21": "53Q4j58uRUceFzmn1XAYQRHzhV1dWeT5xjWqruBCt3nXSZ5WHGzzGP6CH8jVup9q6UQ1NSbkaAXpCj9n6sbBs3GU",
  "key22": "43S8gPaJjWH6VjnH7tVT4xWKCsnFJcw4CUsLwgK7brGonE22NZ8xFgdFYAECbqzQgaiUPJFAQ6UefgEdU4sBoFRy",
  "key23": "2mWmFNUcLpC2tApYy8zoapa53z2BWpGK2zvs1cZHiRCXGncbzgzeBDznTuPuVY6u4v1PiNHnPUfRGki5ESJ1o5g8",
  "key24": "3f6LSZBWdGTDnW6cpjUH8JwDc2MqHg6opKxiCYJBeaDYYJAcD7moUSQ5USzHRGFkky86mu8VfjXqeC34WzMpjZUv",
  "key25": "5wFoDTY8GfdiD9TsWueUAeueTKnXeLyWLuwda1UTffmEQD1gipnXwiuecczBcegms4p9M6Rhuov6CTspnG8H5a6L"
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
