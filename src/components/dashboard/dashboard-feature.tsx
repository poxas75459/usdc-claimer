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
    "3PxGNqEYDY4agQdV4FcTjaRpBXhgXVvcvpFtj4LgEqA55oeW29PTPGU8Qt4X814voSG5xVQHv8WFJSwbukd2eMjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z41isqs8o52p7sCbYGm2QZHyY14mcxUBV3uji7uBMSo2rFC1C3fxkRDRFvZpzEHEGBmTbGwYv2p87U1UKxckSYD",
  "key1": "5XhZd9VAJRKMxfP5KU8i13mvNNMbNWwwg4SJN1HdMDsMTPefRsLihV3NqJDd1FxzVu4xA1Qrj3SyEu1MtX661p7h",
  "key2": "4Lfsah8skvtMkXXKUnm5ndMwGDa2Hwj7Vf8P695Pi6CTJsPs8nfwbjodHEzKA7CHgi47sg2NURxVBTpbdqkCavRP",
  "key3": "8eUnQJNgYidBf1hysAY5HrrZ4BESSY9vA5cusBwHjqYC3FHZrcbdzF248Xe52uw63xix1C71dMdYGcHaacT5ber",
  "key4": "2Yy8fb2mjUny8e6Ypit75CeSzNvWkUZj1jTW1mioKrBbBwC3xJ6bcEBWir6nXFzCGxo8vuDB2Saj2iUfh21frpSc",
  "key5": "4pD8WAtwvxsxmmfSSxekzMukDRVsRNvrjEE3xUkTDQTTyQaD5LuU73i5SRx6zAPLvyc3pJfcs9H4W59kfaBBTr6G",
  "key6": "5imcM9BKBaCAEEiMg2HgJEZUSyYEQGCAgyCwqG9gsgFoyEh1fNyoXA1LqwnMJa4JaAokaZXG41hhErsMzzrxpk44",
  "key7": "3KFTFryFcuuEGJXG4coWVeEjKMaFj9m2qdkpR38qq4Z1M1C7KNGond9UntEUhvYupT8tcQvprvLSmnzSYD9Y5PtG",
  "key8": "25ep4msNSTRBNP4sB3uAMQ19YCxXApANSYWu6wHfYLaiu4NHDq8GJRLpncn5Brp4Rt8BFwULgkYh3Cg92H21Ae9R",
  "key9": "5cBUjui5treQH7wqeYiMX7GjCDpsjQoxmtAtsuUjUFc8xMrjMEzAGHXh9CBQ3YhuQQjojUBWyqRTyWCBSGH7v5nR",
  "key10": "352W7NSm8Ai5fqeK85BX7BCAmhKXwRbKWQe9aipJHCRRxyu9ebsfQ5iQ4wteaxxQ9HtMsFbD3XCM4P6eWadtcDLg",
  "key11": "4F68YWCqH8JSgjLyijSUJRHKB85dth9kNxyBjG4Ks7YxxQmcCWpB2pKpLeB5x7Me59maVkaS9w3gXoXHLTWxTZCK",
  "key12": "3R75iqhE6iYk6s7jGw8QAZRhJsjbGNFBMpwz6CDTAmJQc6GNJPcGViuKpy7ZVRRu9Lsm9TKz4rm28eFus12PPfYZ",
  "key13": "4jTkzz4d8BmRRntyc3gXShFkvY6iaQUhBwdR8LpD1VZxgXWy5KViqxgno3KVbVYzAAgz2sSoAJgd1d2seCCfYEM3",
  "key14": "Rx6QB9ibC84YuSvPzaaYEgDUb2NVYuXKLd8bbaeQdEf4JwcYjJQDaqridSER7ntjeTzJ7dLwZdAEQLSmt45A33w",
  "key15": "3tCxk785oYcqEAcZffm9h8YeD8VSPJ2og33EF23MPe2X6VUfhEeTi2xosyBHQ2Lhq8AJUmFWfExmf6aBf1TRpT5w",
  "key16": "3CyhYWMSs5icSzDo4KEcQdNDNbiUjQwCSjb7mZrRZKfQqt5QerLvAV59r2yYP82ZaiYBM2dopWSbGLvBitmfRZ2X",
  "key17": "3uYth8PnUCP4BkSFyQeZFqagPuHC7hriZ9GaEQHGypMLW5N8oXtCpr6kTve4UbktJMnjEjB3vHxNgJXBqBgRCeyg",
  "key18": "3gCneJvTpfaDzKQxyztBnnfGapvvd6k6uD3T9Xu3R4dsuf1SKLV8vLrEnEpiN1kk1eZQCtqtwWMYUKmCqQrpT6in",
  "key19": "2PunEojmTiHKG7QBCupUfZqVKELoG7AMCYb1o6Xh2ezDqY1mDjPx2VPDeKCWFbT3XTZrXPSidEoQkCGMcvDmUgF",
  "key20": "2BiBefU8ggBrGdPriSxNaxu5HrARDRxN4Hwuz27232wvnaZpF8Jn152S96Hk2Sh8AumTb5N2wo1yfJKW8ideL39X",
  "key21": "AnDSynfXca1J9FWV8VDhgAmF9LbV7ZLSD5nxDsKwuCUijWeJbBZ7UG5cU8shGuGdYRtr7yhQgtaWpyDvDNcGEb8",
  "key22": "RZpgCqSeabExA5orgUBtnT9R9m2efwNkredLXrwnGMkxL9LkX4pn9Yk6AJmkHwjfizyA5AR54iJWweuYHnu3sp8",
  "key23": "5d7to1eYnNw1DfDt7tCnuSuHiMvztuxSmoKQwz1yTLdPLuHZjnLLsLRivFGyKjAEq1ujo8DZ4gH8WdnQN63wqRr6",
  "key24": "5J9PRCzE5R6nUCUv8e1LwH7RSYPbdaSZKJZ37M971grLQydPJmyFkz3H5Yp32XN1rPpgVTGvN1vPbSk9d88Af7fq",
  "key25": "65pDveu45ygeRdUxN1ep878QeThSzufgTrxYf57jMMQoYjWmrZZVU6YbU7D8PoYM3bHmyo56baK6zZ64DPMxaQY9",
  "key26": "aakkb1kxnPkpLujLkki9B4eaUVbL8GfWJGxCUfW1CEjuw1RZS4VhC78BZNBybjxTgKtg2CDqikUzFPcDZ3iC5KB",
  "key27": "x766wDnF62RuBYPEmffS8VSVkJpJYq1XnEVCsgi3j7F9zv3yuAKCMnsnFd9nVwtCFZQzQLj82YrhQUiUgRLct5d",
  "key28": "5iUKoqmxVUBaswKZZ2hQqk5o1sUv9p7mLBeJMLvZDHtuAL8uNw3dfCoKAScyUDQYxiKhQUGPoQDcPWKqtikizoMd",
  "key29": "2bfzLkhPVkBrKq6qCvXXHZD9Y3FGwsyRa9duBFgUMT8RxuLPgb27a3S1rusDSKhQg7B3qXfFT1Q6YpsJ1YPGQvNb",
  "key30": "nY6pFPnBjgFTvJ5KwB3x14qewJ48CQ68nPbYbNs78cPB3QCCM7V1VxhVYxwx5bU4DgUzQz3o1VwMsPXC3pe75Rp",
  "key31": "5rqKwjVVBoBFyNB3NY5XFpPHKgnJnzkReXgJPqWwfDkSAtHGDFzyWwgmLEoCiiLvdcwtr16tLwwtjjYJt2fkyBYi",
  "key32": "5ev8TDYjqiVAXbP8FnwzZSffPVpAh5azZpXQ6uhTThiziYUMvReMipw9qicv2xQ6TyqZFPNRDyoHKY5p6umtGrcz",
  "key33": "5V99FEpL7pLysNWHbPLWDrkgMirgvtDHeANcdVB5XrXgxUxhUkBN4DTgFnxjsPTuTeCEt3NUcS92SLGhgQXZcEcv",
  "key34": "5baSkJYTtszkzLJjBRFY9dx6tPt4GLWZoiL7xGujAMASbh6Gd9oFmAXQTe6pW1p58Pmw3YNbBjdGWmu1mGqGubx5",
  "key35": "2f7juqjKbns1G6qweQJ1gdpcmo7t1vEbEDdpGwkCEbvjP83qYqZNNu7khJ87d7jsgKTs9PWEqt1gJiqsFxUBsjTV",
  "key36": "2eLhJv1hYi3jDjuE51o7gLnFH1fdFep3LLFauomYxUTt9mGqX2M8qmHkCYFn6gFvQxrjrhVHv3F3ZsZLjyELhh1D"
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
