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
    "6oUqeGpsmagdbhazneCpTKdXtMeTwEvi3rUoDpEqWpdEkPnKQdqGj5a5LmQAVVbNF7DKZEB1AaMPtE27A5HG41a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "422Lf71RifdcZRxws7igtXvcxdFF8VvbHbyXtv2D58mtnQ3F6quvhHe4uZjwGWjnsdYFQn2vf5s2d2T2CYE8RkTv",
  "key1": "kqDLqJLsmhqxpGk8j2JyaGSn8JokuJuABr2B632uAs38QVuaAM1p8xZSEsgwzeD2E47tdsnRJeGBDQro9wg7Ez9",
  "key2": "LYtS56inuWH6RAJT9iMHE8LZwbm9FA12GgbQxS2fiRVA5DqV6uPmfuBhnN6JUsmu6XLTzaPLuzjCdofokprF7aG",
  "key3": "naQa5Ds9U1h8kjRQWUUxQpGJqMKC8s2gvcLwvdFbBBDZGL4AveJxH5mCFvfu5dxMaqGKG6nUg4Qc9RqiQvsWGpy",
  "key4": "5ZgA3a3rVNRsRBGjWmw2dxS9PnHsiFCiUFAYV2CSo8q1fS8SFjMAQSkVA229cjouwjEUuxRakRqaWcG1uqwZZYUf",
  "key5": "5KqbXtFotQWL7r632YFKd9xo9PPxR31TKxD3sU9gobJt5GNwpbQfEbagCe8x2AzMJV5gt3wq1W7JyVNqvHtbX6km",
  "key6": "4s9CVsoWcwqpmjJ84hfeSE2DK4i39rJBGnM2mGZzaBK2ATCeFvny9VKyhvBYpkdRzZAG1uWAKQp3xss2bBR59bNH",
  "key7": "5FkpJotY57f2dxzeyUv49iAQcvbjmtE1DTQsvUSWADeAGPdSh7o9HsrRFSfjStougnm4EbjzqmM51Q1nPQYrENAE",
  "key8": "4kwsWXt7WdFhHKMLzBmqTi27QuXt1zp14YLER17ZJny3eNhwVA7N8fDRRUr8TzmhSLQ59ndwYbGkZkgzDqKLNagu",
  "key9": "4yexP3GobsVruHyLKF9Hp6U4Hriy9YQ7do9HXEnwwS6AYK6BhZDbX5imCahhGCyVrkHg35u1JdESubVnbGmUgtDo",
  "key10": "4Zq8EtqygTXqAAxJmG1KM9oMo64zECS7GbuYLyNZ1pqNfnJ3HC1DpmPYzDSCekwx81TpQJrnip1hYy74b1Dt5pJQ",
  "key11": "3eMFs2L3cSmU5PpdTb74nHVP7wbVpTAou4VxMw3gvZ3P8K2V3Xhp3DKJPkUjic2MBvkugQ4QrVwhgM4ByeC1UHHM",
  "key12": "4gsr77SVvfzisikys5iA3Kons1eqcP95iUMYQqtBUcUUv58SHcNBM37YHbNyiyhBsUMx3B9XgeDgEg8bwxZ8xTpX",
  "key13": "45EJ7oL4Bi4uywtzuPiAPo7UMiPgRgNT2KydSQeLDQ6pUsQgAcQc6CHsqjJKpfedgPQ1emqRbY4LmHmnTx4NjZxz",
  "key14": "34GY7eYSBP6g25U322AyjYCZQksN33eYWiAhJVRCQopmAUrV53F91UtiwGJmyGyJLguEtnwrc68v7qe8EqEuTnNJ",
  "key15": "3ERWStSYLvs55Ne3AitxRDbMh8jt9tRE1esbDXLBrFdY9SAYbvRAQbE8annCdyDo9JXaKEXpf6FBsPxg7NmxkEP3",
  "key16": "2o14KMuUKddxcezfN864zuFGjBXpoB4cd7wWiDXnYZobmQZrRddgQ1nX2hddVu2RkfQFU6pDmN7YqKnuNb8k68jU",
  "key17": "5E5185QrzA66Buu8Dwov7r8TJ5Di6C7Er4KkP5Lp8uqUkL9cqAYTwJmByHXUBJ6qZu9omfkHL22S4xewRcxGTbH",
  "key18": "5W9RDYa73e3k9GDMmZ3cLgGfBWRxkr9AQoWjKmkUQ6wDuKfPD6vQp1fSLbfWkEq6SuVyXziUp6wAwHx8dH2CvXmx",
  "key19": "5dHauPmCH4BSMxWHyPXHZuEx8Z1HmRv83uBCbjw94MeNZgAnFBumWJdgJSHrd56x1Ti4WsFcmNNwqMh9HMAYs6rF",
  "key20": "4mvh5X3LwZB8KuP12v1P6Fk5giu9vTyG4Z6ZzGr5U4PiLmet9QRpivzVrSomyG7jPFQMCGfuNvv3w78p2JrBjCrx",
  "key21": "3AEG6Jq8LKKv8f8DeykPLm9inrmG5KKFAqyXNkW6pYzp4ANSSqQ926EyocAEAx3XpkK9ab2RtuLZ1gpocNCAsKvu",
  "key22": "24gghoBQhoLRni72B94DZvYoV7bLgfj23LXzhFyWuy3uTFnShWhMSdnKw9N5UoR8Fz9ECcVDAr1v4Sgki8jN9Ef4",
  "key23": "3ixLKjTADGY2wTTDJCLZcZvjShxabaqxkuAtRjZnNxB7HeMoPcPPCCVv6KRufAgkaWoNj7SNZ5cmBaQvpWKfZpfe",
  "key24": "3jxv13TL7qjGcz1yT8afYyAyPKYDo29kMW2QhmiPt4XHzY5W31fXn5V8eWZvyRgLH673XKXnmiWMKHbg1ghY2zED",
  "key25": "oa6Sgqw1pk3B75uUgP12L7nHt499arUjeEGjesnsxjKfYw45TmBaW6dwoyV1iDSWpVPJoaDm5LBwpYKnWozJdGy",
  "key26": "4yBBNWmC2Lehm6oYcWYK94pT7WbiY7TTTPXptdqLYgoasH4qcCfhScnNfdXNErJD6EjnbcjB7pqduU187a41TLPr",
  "key27": "Vd92HXQvcfccA3GKCEqPkn5j9yczkoTWWMQxS7qkx81RqHGCKZsUVLQrmyzTBhQhm9c5c4gkn8FiHuSDQXWGuZQ",
  "key28": "2hhQtYb5feYtYg3bx7jXEvV9b3WJEKsWAg3JYcbDKsLukdmxetuKcLFR5S6kq2vdSWYQ5HBc7xdRyiCFeqGqKaE7",
  "key29": "3YxsUALb4FP5NRXSMjG6y12LEWLP5ggwmnGj9hiPfZmx79e8UEHQeQp9bj6ecQmTNxfMeEjvPg9LgdeX79vPt8vc",
  "key30": "2C4bAPsBvs1fpevik1Sq1rUmMfPxySLofsXvK7TboasSz9BNH6Npw8dBT2m8JFTVPrVwwMcqHmP95H6d7H8uWhHf",
  "key31": "siPZ325iEZepWBhpkfMF25wsutwKvBED9mL8pnVxqPWcDspBdK1DKubQbjFkhAgcAhhhr4766PpxyqrDn7Mudg5",
  "key32": "2Kqotswfhg3apSuhEjyb5eWTBku5rJLPUnmmqdN7tM5ass41Qb7hoHKTwN3d7oUYY1bTiErawKPhqKSmxjy3wNEr",
  "key33": "2qLdkpvMEPvFaVaBj4UehD1ejgVsY2e9JSSf4ea7ndtx63bk22BhXjmriPjWtQx7njQLxeGuauZCLeDTa74PZTer",
  "key34": "4py8xgdfQLk8d2GiSgJygDH8HhSCGULP2GrsZ2qmbJS9rDgxqrAx3Rku9DydTt4EUgwgRJ8Ut9eGZXmS3qaNMrpS"
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
