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
    "5LFcQ3baPe3BimTz1q6PvauMjuGFmekyZnNg2JGZzxQ4j1wENWND1fTZHR4utvpjdRRqCy58jmGEmUF5kuQRETv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r4rnDN47JhT31nLVKkhLYJMCHwxmWVd2GJCm2UERnRHtQm9CZtejjXdbsLPy9L9HGgp2qEmBHzPkq6aMHXG4r8c",
  "key1": "5eSNQat92NoZ64j1KM5LCXZJyZHPraT89Vp6CujaDV38abANc3iXDbmQf7iDWddG548D2Urv4AEDcoxS7VXZzuUc",
  "key2": "MsJB7jPqcv4e9DaUzESRdSDLaTUTJSRq3gehhmJX73XP2E9FSPDE75S4nMgZt5nySQzcXhiyebxuitVvkdkEtyT",
  "key3": "4ZmEhGPDZ75T4JfKdSx8xJ2heijArKsXPRg9aEg5n4aU7MgJSgcWtJVTWVSbpCwdeeF86xBtSRUEFVoJvzpMBxy3",
  "key4": "3VKL4Px3MPg8W6bnZ2T7vFUQVVRVKnrjkGBvTKEPCYm7iAnrDVhmrGKEYyzP6dRkHRWa2A9ozpfw3Eb35EVSquUJ",
  "key5": "8gsbj6YPgB2eEL8nNQUiKYzhzJWxbiLes3YvR777vmLMBhZjhqNro2fwAie2n1EQb2oMrJU2PwRJtPcaoJ9BFeJ",
  "key6": "63gsJv7Hgoiia4cseHvVk3gBS3F3m2Zke8VRLTm8ariHiNWcqoFb2sjYWMxZrsGoPLWQMLFe5WFCQq2ZonVdTDe8",
  "key7": "5Mo5FCpqSQK6WYVars6L8iG6GeX9vRbkHKSjwX9E9rfkacnasPyroZBBn4njoaigbp3NuL4nPQ5RhrkJjGmgUUak",
  "key8": "yERHA8NpjYRYzgSvnUrmCmGjoPuuDSs1x98q85k22ev2PhwfMUae2J3kfUjDFpaoAe88GBezJe1oGBa4MuYHj8m",
  "key9": "2X1ZL4RdRWgpvenfbCaR9Q8ehn8gFH1A5ujQoZexYeuoGhXt3yCNvUJBbfz2vG33574tLUjizLA2xz2MT3bXo2tB",
  "key10": "27FbxRhYawXC5hKEo9Y4MAnHSMY8jCQdEiTBf8XPPf5JmsFAAUzuiS3DjVkg3o4A58HFQwhg6aDbHYnuxUazFMzf",
  "key11": "27GTw3AgXKmn3gaWKT7p92xqwsboDH7dJTKZfuJqbPi7YqmZuhSvZu6VQ3VmFKDaKixxySPd5eKJJgdqVhnDtvna",
  "key12": "3HeVBydzwZNKU7rjidH3ZnQB8KBn22XDj6Z9PJ61EpzKTpbrRC5RpKkFsy6Pzzg5bUNXw1zB6UocgdpL5dq5L67r",
  "key13": "61mGXKqtzSiE8gx3otgWtmQfQMYud5av6NooTVPHyfCy2YNGGcAFff9pycvCGdn8pG24rNJ2uRwQEnp1n8xjHmv1",
  "key14": "374gtPd6Ck9r9Ks2uorJV2LbNcH6VqDrivsBGVbz5mdCGZUKWZ7a6VZD5TZees7SSCWiwB3p9MHrMexZQCyLCwTj",
  "key15": "4nSoysFRqdtcEwHggugiWSHFwM67qoikGNWRDQAJimepHLfh1vDyQBKYpzqDG3ms6VtKZ5Wrmg9jY5WH771ASzSV",
  "key16": "5UMaRmvoScFvYSQ8u91cKv2PmQfwG7KSWXBg3MvnjvVxaC3xPKHFwCtTHsbrJsPJ7gQ4HyPg4tJEXPTkwpWSf4nV",
  "key17": "2NQtgBvqmBzRUvQdMHhro2ESyra3fbCQqtrBRsnqS6N51NAbWUxFUiswZHfTJW14SPqPb6GmBVrwqrWxXn6epqYx",
  "key18": "4zT5HvPQeSWU7ES1TPaH7DtPxJ68bMSN8AMuWXEYwBXPfKSjQc8wMuJJ3x4MgDtgN8YY2gPV4J4iWewSqnBEQdtr",
  "key19": "65rKrecK4Rm1SDERxCixGLPcW4GeFuFZYrvEdFfK4fZDgjN37A6pj4RQq1xVe4Mvp6MXJQmyNYzWKfFX7iutFUZX",
  "key20": "5nBGQADTpxUMvUtniCo4wMuYZpBUr4T5Ciri975NtHPQx8Mut76m8EjStByteP8gXy9BqpBpgWoufqoqKkP7EnW4",
  "key21": "4XLwfAimppfSR4LpERs9E9te6sTdWYGbnpuhJT5Dc3KTtqxbbmmDQ6X27uNvUAzxaSvrg6BBqbtdbQxhrr7Mn3WY",
  "key22": "yLTSvUtpLoMMUFdKAXcf1q2CSxAekEHNrUBXfbwBMYFrGWYPeJWnbwFHuiYJ5VXXnAc8re4Sn3m9Pn3MY5inpR4",
  "key23": "CFNDzW1AmXxJfXiTdASB9eJhBnE7wA6eALVrPGVnupemLSwBV8mfQSziPXMetv3rvfkkw96wu9QaL1magYvJCKq",
  "key24": "5f6xBzxpB3MW4c7fxjjo8bNhc7uDdhHMeEhpDBDaQLsSzAYuqjYfnLGNEDnJv1iX4nLZcUsDUBf2iqh6WCxPVMEe",
  "key25": "4KqAf9tx5Y53U7U7Wchjw7sZVkWcqGxtsiaYY1xWQVMtcQMDyDBGdX6zp3ERBQ8WYQhT1RTK717BTncgTgWhvfGT",
  "key26": "4nPzCF5eWb6NgcsSHDq9ve6D3xPVqrXuEckpQMbfzDWeCH88obubLhLbN5eEXEQHR6u8G2xbZQh8o3KbweKpYM1w",
  "key27": "38QKftRH5MBXu3JufxgYA8pynVncN88Mwmav28HwgdNzjHNYgn8tgSEfFdcyuTxfKapBHy6tKKmYmw7poovCP9om",
  "key28": "378skHvYUGEDgz27fmB8HPMJH4UcqHXtu3KXDBubsdFPrMdUvrwKWghx59TV5Yb8XL4LPBqA6Ui3PmYAvPtUhm8T",
  "key29": "5uHwLMJvRkxNQBNTKi414meU6nTNynoj9w2jr2rfYam5K1hGLHEpiqB3WSDPQiwRxXr4EyVw2iLa9WBJQ1ZscBqh",
  "key30": "3a6qPG4zXhCCA5R96oHzDbNJruMJHCadkRHAUCFEXWjpnE1CWJd1fwmY33TTCkf4wRxu4UX7FbsmmBbkjvBKzR35",
  "key31": "3uis3GCAt4K93S7KdeuJUqdyNSMiDyo7T4PQLgovL6wgrNtND1n9P2A9D27HSewYs4xAQ9M25CkH4SRukBM4RcJ1",
  "key32": "3eXKsdkYEyPqzke6sN1gZFNqvAm5g5HcQtatGVmQJXzCCsD8PdwjbcepkVJigN9jyntNgVJ2P8cacLjH5GnUNKhV",
  "key33": "V9t9X8YFm2o9UPFqmFWyG8cQ7MgLmsVmePD7sc9AfC6DChn36YDxJqvMFk2ay2iFDbRWmcxPDibgU4NfScq82dv",
  "key34": "2UDJcf5Lf8FEpcgA4x6Zw6RGTGz3SkbRdyPG2xTyq8TLkQ9cMsAnMatKUqpaDWHpnY1A25MmjvaTnbf7B9yRJHvN",
  "key35": "2dYS3qKkH3xbAKk2UCQ1JLrA5ew1bAbSjCrLgWVGWjxWDxcMa6iaKvbp56HCT1kx9ceW5torsKhDJRLC1FzN1xmw",
  "key36": "4zVg1r5TcZMoCCSTAz6ieumEgQykuYno1vcEvVEinzKc3cg4paoJeyxz3SjxPNYxS6qYPkbrgH8cXjPZzVWVScA",
  "key37": "3Qx4UjjsJcQ6xN1hQkK2LHtQZCEJMcvhCqWHu7ptXXdG65ud5Px4PWQ42YXc4HXbSX8VGjECVAq5e9AV4fS6i9af",
  "key38": "4i2Be4PHboEYHj3Ddko4U6r2MzxAUh7Y4HwNBd4L1ZWwvCmgBmMgGHiTufCyfwa3vaQ7NZtajdmf3vyucoAwJZHy",
  "key39": "2oJ7mroZMcKvd8Y3Ci84SwS8msHXzEaq5XfEr3wXqBrr89QXWx8vNicySEYZT44EBkHCSaFZsdY4TwrekWLeuqAr",
  "key40": "S5X3NHPtq8U62AQsKtTfepeTQBLEzWUQsu3zW5xUpC97z5tg7AzFJAJWUNuKJvH42NSW5ZUyCcYBCPgYzW14wk2",
  "key41": "3gtbzWW9sojgHfatkVFXGdVCYKAt4JhwHrQKk3uvwekT9okizvnxmhjpsHf7wxNUzj17DthMKjGzPrNPYqm48WWr",
  "key42": "3QeV5hq6jHbheajpLM6vDnedYbtyvox195yGKX3uH3N5soHr2gc4gKbmNwis8ziSpHNjpXJfdHPY59aJSjBn1n16",
  "key43": "3dd1Y1qQsThhP6gD6Rq3RMzDA92GvRazhk5KNYSXHZdX1FxHUywPuXN41yT26syzRoXpJUHfWQQ912s6JrShMV31",
  "key44": "3bFQ13k1skLXNeRrp8N7ogYK1dpGSzHxqK1RcMPErG9YDRBZwoFd5wZoHA9mL3rQb4z7zxWj4y3gMAJaLvHB5pL8",
  "key45": "2b48NgUX3k7UbgzS4eQKYSo4L6gZGVjzMLtWK4HvFPy5ktBTsgMZXrWpzVAFuU2xXFewNNac8yuCdLGcSh6jTSEg",
  "key46": "3RAFE5gwv48WK8Vk86ySZad6XNVg1MgTM44jqw5GV8rzA7gKCxauZUuf7cMGuSb8ySnw1yfuRQn6ZmCK5gKykMuP"
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
