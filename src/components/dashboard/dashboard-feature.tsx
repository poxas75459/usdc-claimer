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
    "5n1E3LPWPWNSoR1PzjCzF84uC8KvzUGvnvDnMXAAtzjRK6eiPcbMkLTSGQ5jmTkunndiKZ1D2XAcM9gfGD2j69ga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NdTNuX52VQnFQZQur2hjBkFyefGAehZpU9tP4648By5QMxMApRBJWXaQqr5BLYghjxsPxUk4JDpgFiihFBuVDrQ",
  "key1": "5F4vP12HNMSHb3BuZjgZg2V3jGtCHQT9etAW4gJaByfkELu2jmiuS4gz7JxEx9CXCgjKQ8gyfpKXSk2VzTBCVh6W",
  "key2": "4sUCiZKLHpfLirjk4MthYvRHicQFU93YzYV7V6YLDnEgAGn24RjpynNhTrsHZHHWzHHJyVU9tCnv42UC6Yz4SaG9",
  "key3": "2JaJdLWUdGZybybfSDZSj5UiVWZx3y8LnpsycwMDTofz45rHQDDrZxTDwBiG7pvpVWtvgRcDDcMw7KscoM2X7EPa",
  "key4": "5VzgK3WTvV4ErjLfsx8Enm1GqcDWw8xDfXF2FTMZJNGEFxq5vMA9wYcZvCUU7tQjyyFTt2zXxmPXXN5F5k6R5dTa",
  "key5": "5yoLivcvdt2G8NZPjuHQ1kZYGzc3gDcKQsPLEp7a3U8xNNKYLkL22qaNhnaKckSA5VaXmWnELNUPZCZKiX8qgGbv",
  "key6": "4quuTBrEKcdTJgKRhYaWkV4anDb5ujpbbNuUNr3zaNMQC1bkuqdkWVr8diuWusqENCgRLHxjoYX7YdGvvAwCpcJY",
  "key7": "5iLhTNDDhm12czVcpCj5guwHpB12wfTPmWP1ipJ9WjXGMq3wZpTMFEUqqHvSv1dZh4SMPJyu2QPx6CaaQLDkYCfi",
  "key8": "5axaFxuwdS9tafukz4iPHTAjjCYqDk9qTi6tHCb1hBNp6fANvt6aiJZ7LPsq5m1Ugz6Seq29exLQeRgwBUjcP141",
  "key9": "7GjhepAecUyizSig6Z4W7SYangFVz3nYSznqRGJzh6Y6CH2KThguzchkr1D5arshVwq652dpPK9YdiMr6JdcqTm",
  "key10": "2k75SLSjKMV7NWBzYTh2xP3RBqKjDzvhjtRNkA4h6kY5cjfPgX3xMPcRtNiF23aMSxYVq1siTycWTfeGF8s3qCok",
  "key11": "2MNCPbBBkWKh9dKkFg299PJB1Ms7omeTuRcvZEHNt2QSUynkbeCqAJYvJ2UCGfekU9stimzPBUkAfwcjD6eJCJ8d",
  "key12": "Mr8RMzJjRxxHN7TTGkhHqcZyox6KDBMymJEVDLo8csc65qznGzztXf8VzyWYjD7WAJHPkb6YK9xRMm8KRzSxnx1",
  "key13": "ra4XKiNdboi2HLij7mATPWGZDda1BjsCDUZJavEiP8rr1AvRFgzBb3e8N6xx3ANENyFdXonRfYwgRBJ7wFWQFU2",
  "key14": "5AmdXKniSmCcppgcgHdXT3Hv6RBYHoqWDiwv4b2b6NQdmmj978vS5auet1CFRxB4hsC11zpNdBRmUfvB6mREyfpY",
  "key15": "sYxUAskeoLdhHyMAMV6JJeg97zM9ZXVcANPb1khCMWe3aWJbxAgs13z7mVYNEZXPRmVxp2DwBC8RWAPYCkwqgnJ",
  "key16": "qFCnocqx2o4wdPW8DHZbBLbRtqoxjTrC9NwGoRksD9BADqU9YkwJJFmiaB9fRdRUEFxVmDfuJgAAteyT4M4Ey9L",
  "key17": "31RDVL6M7hXskgKspcW9akk9E6SNZeixYhxy2T6hmhkST7gaiRQ4jBBmXdh3BaEzespAanikvwoF1MiGm7WdfoBn",
  "key18": "EUmLPzAMEBYLiBncBPyxtE1JfdsHUkShPW9ccFSdBRjZ6MN6HoTTnLKSusGCr7ZbNmwJeNEo2SQ1rW3DtuZX13U",
  "key19": "4ypJydFdT4Eerb8eRdpH9BvE9zDZ726DwMsryhiok2qkyBH5UnTDVhWChyR5MdCkxsG9EiNrGfCw4zACrem2CUuw",
  "key20": "6cvYDeWPVf4P3dNYJtM2N8AjehSnqS7mxbJfSiVYVt3SGm3AwjVcYmgE6jzdGkEHjdhtaChDkcmdi2tdztaJiHn",
  "key21": "3nNfegcLJNi8b5XJrzjAo6zkn2A735LdeoQMXB8VKau3KFFBEr8qyZEc3j34vChcaaG4TYiQqDJTZt2afVtfayzw",
  "key22": "3igvhEcLn7hY74mVvQZFEX9qhPQKTzrZ7WS2qT3WL4UurHPMueqaqSNEKm5bzg8tmATHMqLnF8aPmQGKKa5PmQ3j",
  "key23": "4eeDRsQyfiTyMLnkchV8HWzAQUz546mRytP7keLYZzfYBS4Tu6ejFwqRtVYoHEDNZ6kxySJSc9zrapEnSbo8qrN2",
  "key24": "3AGGcsBifyjCQZMEuxPHDYoe58LjxatDoboWjY6YQvPa9c5RHMBuHD4NCpRMA3WuCVvW9XwdcTJX84hpptqyKYMk"
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
