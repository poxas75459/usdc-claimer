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
    "3346gEFkwPaTmScLvNNKu9xcRbCGtCDExwoWkbsWUWewH7q7LRnmoF52QytvBFd2fP2kyXNUugbNwatcARX7abtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bnbkct5i6MTbjxRKRkk3k2Ka1JEy7y2avo7zYZaJXHdCXC16ErRcadHTAjE8ADb9cXddBEvQvVjygT6hEAubumq",
  "key1": "5C7qkRG8j7FthozTPCTPaSbKbLp9Bpvs1fv61XSi2jPagofEnaFqpbJtAkiLQtbCdQi47BiieWAYBZA3mRvuDL77",
  "key2": "22qQnuUp8oXCuzX25jniapHjVkKBzuHDpomzWBcE47QnHN2YwPx9hqTgLwsHF9DshQ9JUBvv5X1PRQERRRUY3BWD",
  "key3": "31pFAy2suUhtJ7uSmwZvpCNmbF293Yag5aXXc5bHkBUti4bGmfFSRJXJThryLF1AA9stuBBAi1Ltdx38BaMM9D2J",
  "key4": "58qLVLLjRDNTcZWtpRSp9Jnx4D93jKpt2zkKTMCN6GU8MkrFfyz8gyL8VqGKBasWEH2Mn3f3KsbeXys4jiEagwyZ",
  "key5": "5QfWHiwCA2Bibph6ufWvQfcFBJzrykG8VKtaPwQZ4fK8RPrM27SnnMEXb4p4UXjvUD4KNsbMNJGVYoW3juKBJPJd",
  "key6": "4Vmiyv4cGvQSKAoDptVtq15KkLhQEwFfePk33MDLNGaFSmBfKDyunG4Rmuhpf5D8qTdb84MoA7zJQXyoqtTZmGhB",
  "key7": "qBn6rHUTP32vVJ9Vegmj37Ggr5iawgK8sbpCbNzMXnZhbKxWa1tEP1hCxRAaj1wuHrdoijHyLP7AhSjfs1eLHB7",
  "key8": "r31guqKBb6fmUiN3Wmh1XHGqe9TonTETwxsZYgzSHS8j963mHf7hmXCsTG4DFQRQPARXNoeKjK1cnzSvMxxRkzL",
  "key9": "4PG3Y9UDnHDDfwydW2Zx4Qzn21kSKvnWMrhzWh1zbZJpWFUFMUbxNgddHj1YieYJWkDsS3R5QbAcW1nGc7bpcYeu",
  "key10": "3rBh1aeD3etcpZvRatvNBcXyFhns67XEpmix1cCQWgamJvyDGwUwDrQti2nSMJJpR43QJ4irRGU43gFMBKNGanRH",
  "key11": "2sB4hnhTTNuZpqB52wV9s8Q6RqqXHAbU2TDjbhXgPbncSEjaQXMgnecU21i7YJ5jcULRNMpEdn2tsem3ZUnBeTr6",
  "key12": "25fcXwNXJAd8esYbHa9UDYc3KLbFz7WAUmejfkPSzSKhsuJ8e2RpLn6PxaN1JetEqaCF6rBYYGqMFWbA74DeoH42",
  "key13": "3xTT8Q8PEs5AxpNDuwZoaSkEvMie5VoDqrwT3aACfqqJz2xoXevfU9qxU2aHb4NpfrH2hiAnLQYUDkrcXoDbPrdw",
  "key14": "4rs5aELzGdDXHRJP8yJJBVhPpv1xyLDMRr9KtE7U7HRg3McSPxL1vH1Kc7c4BsM5nKoy2cPRpcNDncGoB6R328fS",
  "key15": "5Zy4aWi6d3hBVb73meiApDTKkHQCF1tzMjPEDkUFBixisoTC37sK3LhNr7WvqfXNCNkwgztoiYBhsEf3N68jTanv",
  "key16": "4WUw79hMz7QfGbmSEvJbgwazb83xLatGA3d52GDckcAChLjA8yXpJRktkAirimW7C9hSKYA1SLh4iHEDSQr1K5Jo",
  "key17": "nzeEKgsp2QR7tQTTH4vD5GX6HVSw8yqMNodEZvQw7sJrSVJPn9P9ScAPTh4au1dGqog1gahKk7mWc3w4Lfepvba",
  "key18": "4oamXLGsuQeXtYkTYHooRMB4EZ3Z4kCbrSyxAAfFit41wJWFjY6ppJohSKFbxSoQ5oqaJCYWkyCM875p6AyjwT3e",
  "key19": "5SmYMS7MJysEE2ybboAqm6wcgpotVTNP6YCFM12mB6wvBstVoW4EkpW3qvgYLqhdFTZYUfmaPxPbhaZwvrUYYuM",
  "key20": "2rdWMGai1nLbcfmu2EtbPPnRjwAwhyZ38KjYeiTRMyUNYRqFckokdQLFqfMy3unzPgW4bJRQyHU2Nm3TZT7Rw32H",
  "key21": "2hUXY1WuFWD3DqJDwDF4KE3MEPPE96sktZHzEvWDwxTaLVivLuFCmWkfEiCqPt3YznzA6RPyJcvLs9qzKKt814zG",
  "key22": "4tW3oujrKRhsAsfET5L6MKawr5KYnv7mfQwNi7SfUNu29mRABwYrURr6bu2dn14LNMtNcm4qpqwvvp96onK9b3nY",
  "key23": "5TEERPeeu6zLWAtfCHfNCF44aacRi5DAEbp2inpFtyWapJpNwiuNp3cMS1mbLNnnM2QXMqGLDd9REKiQJ1gk7eBw",
  "key24": "3FnFcunGFWysAWxzUE5XDTvqmz7XkPqsaqyBGMr2KyrrQaEJrmubPvRMexq92cwbJWWeEQ8NqQyzrKUMLbUhKRtN",
  "key25": "48vRy15adbwkp9o5bVnPiBdHADd7YA6ks18J71ofQzQuWh8EKemyPuxC7sK1tpYwP8gkSk4LqZHa9UmhQBHhevNZ",
  "key26": "XhXQRvbffSrkpubK64DE8CWTLPGU7WqgGrtqF6JsvpVL7B1NZKzZhLQRrH4FjeULEvbJqmYbf65nVcr8vvxUKW3",
  "key27": "3sGRYw7KJkhtvKtY6aJEL6c2os3veUXP1MMyRZkkbHXpMFLf1A3AhPh3GskkwJ4BF592wcsH8ahppv46RNwGDqG2",
  "key28": "2SMok9dH8Us7Qm1B4VcPhjrHEzffinsDXXXQdgAm2gJ53yqUmU67HbuHmcfzJz7P9dc5PjfJtyR7iv6a6qTpi6ma",
  "key29": "euBQ8ynnH6iYsMaZSFCZ1qXzMCBzxWw9KQf6bCnUSuW5z22sqeCN2f3QY2hkDPcjF8Ttfe7ZJzzMtCfF5irJeiZ",
  "key30": "3whUpMq6N6KxpGejpnbgnThA1DEyj1diuFGifmEEQUMhHG13x2osyocHnYnKVk3Qp3bJB4ihScku28TyfCFXUvJ",
  "key31": "4oncyb5rK4YKYnHMhXZEGFnB8HhAuZwDTy6fJEpnqD2SYH2n9WKWqHiNpAodRcU1jmXpTUqZeGyCSDWpuwftXxtE",
  "key32": "E3UJHpK5KfMVm93Cmu7K7ziX6XnZwCSCEp22mJ9Sb8TmNkq9dFen5rN9ArhtBEK1FikNyKRHb3ZbprTxPasU1rd"
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
