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
    "5Z4Ar9yY6hmzKQrB5PwpoDFe6Y85HFHdkJQZ3mHBkwQBwcDjyowJLAErjeop4qYBzXqwsiJq8sj5FLL8VNZ6qzsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QRKWEy5Xg9X89yRoEQcvPbJjdmJUMUka2KfmFeVD6bF5bBWn3qWrfEY2PwaAMWoGHkTrR4VXpayncyt6Ke83t6b",
  "key1": "X63q5EojtnrQxKtX1zeECEqX4YsE8CDaHCHpZmXT6uvoRNL8Js6HycULL7cfhKxmiJQLdU1b6MKoE7AdhBYWGaf",
  "key2": "5KVi6Wbgd2tPCkJd18ACGQHhQnha7aov8N9gEKhf1dWNQikFaNtp6HcEbeTPfw93RiqeihEptgypPXJjriiLAM4Z",
  "key3": "4s1ezebbHoau7RTH3RbQjzZj9ktS8geS2r17CRN97vgcVn2DADFM5rj6WvwChAeLrpqXMgc4yuLRnQrHaQEeF52j",
  "key4": "22XVyhzwwbJiAHkqXVouvedQJNs7sTeBE2H7ifafRPQiVosSS2NQgPJkAT9JxiuX64XzkYqpJgUEEBdGbofErupF",
  "key5": "mVVWjSKgPs2oGymkpJKYVQ37UhcDXAum9ZQmVcPKAeRbWjQuNjfGiH5GGzUQaviNUBTLTJ7EuGToHddxiBy17yf",
  "key6": "31tP3mKRDPLU3JUEPA5vG9jGBjtYDoXp76UbUG3AQS68QvY7Qb3RA8YSYi8wjhSMR758KG3vNNJNRjeK66ReWYNA",
  "key7": "2UMeQzioZBKveNUAZxfFhRFtjskhZ8GNbqvU76fVg4kKGqkfEBRjCctRQD93fGEwRLD7bZGA5UdrHuKUdb4V4zxv",
  "key8": "65KXv3SqbYAnd6z3YAAqitkoQeQq4HRTbc961ECZx2gW2haSmC4AfrEVRNciZwtUtGJbwi46VfD6u1y6aCxg1PR7",
  "key9": "5GQPqKXtPcCnHRd1MX6D6vqUxCL4wfcpM7YaSEr4jFUGCyvcDQRgoPPrneHs5Txz7eXktXjBEbFE8V3HktS3qxwh",
  "key10": "2p8M1qas2XCRkKZQ3QF27PFeNK1Dvhwt8cDyYQsNuQ7ry83npyzLGqcKU7sTZyGVutKA7n7u6vZynUHzwfjJAw49",
  "key11": "2RRLGedQWPdL5vhrLm98m41P4W8Zvn1QhkwHZDSsxZqvRCEGh6hnY7A8YKn2J7yqtjLyzRhppJ2FUEMhP9WqigCe",
  "key12": "2LeoU56cneF1Fx8anyxfe8k36QxWSAtvrTgWXhxq1MJpKV5tvkW5mNpUjm3oVCt8Bk9qC2u5tQATifxxta7ABb9D",
  "key13": "3ECwP8UZMNZwUGRYaS6RwR2NP4wrESrnhBaRvGH6hg5DfFUxie4YwbNG7vEvYcvfq85crqmr5HJ6ue8vv6oSPi3P",
  "key14": "4ww8GRiuHMVYgRzT6h8PR3AM3moFaS1tFbQzcqsR72YfxQkcVJC3omrV1cJ6FUjhz2qStgYLDYfqYCZvoNgqAdmL",
  "key15": "5XPWHBEoa38Ur3TTi8q9JHdcw9GAPtSUXpq1Zo4e7SsKqQntyq4EoQbUwi2o3FMkHi8jR5xcJHx2xfDJSZUWoq7u",
  "key16": "3GiuwXPUkeAZ4Shw8qmiWzjUjSWecpcorn8h4txFm6wr3xvfoWBrJDf8DqnCj1qXGwAy27HU3Ka4t5u1KtvM2r3S",
  "key17": "5UwWAppsGsXS5ubwUsnNSxpwvprHpR9yhWPtR5dmwWRj61VhWKEgdz4cx6aM1htA8ARzU7ijUAFykRL2b1CJDDp",
  "key18": "5D7FBjK1WfHivXLS1dAhD6PpmcWQNd9vRi66jpqJruY7iGKTf7XHV65zAkYJGdcrYtceWG23DjhzWknz6ZnHZfKj",
  "key19": "3P4YdmxWDLq498NcBGEd8G6Z7MVz6yvMxZU8RAKrKVsqJcwkgPCMFYDYyrJVzZXftR7pJk6Qar6C74nTbrUXnyDS",
  "key20": "3UAKx6MLFQuHRBeiuh9bca3JNUyiXce2t8C1wahM2x6wYWtKd9iKp3jjenWGmy2QPqLtQSt7S6GTThLkA16TBLgS",
  "key21": "3sAdjbpwkLCmJy6HnWA2yTnDUH6w2fAuLx61KNFj6W5MRfZ7LkVE2vRcbG6nRJgfiWnBiAgnaBeBiMihf3onmZm5",
  "key22": "2od47AyYnJgidYC87NS45ALfxrwPWw8HmsxQz4G5qjTUbD6VCf92tE7DHbLvNmfMvNkZuJARbtfJF9gwo2HgupQq",
  "key23": "4R6DW4yBCUkFX967vNvnptwut96CzZmae5dTNtZzdLggwsC1ksK38EJuoGL9LQiRvZw6fd4wWrTXboSKVHcSMiMs",
  "key24": "2H51BeYmQ1DqCHaw2tTB6BNybJoGkbyb8XoCbhTUgQferKfAZ9BcmYw1UcVy2yJC8wPJu8nkvHp5FUa8VYjmxccB",
  "key25": "2A92TBCXeXtRd5vonkxYR4JCjzfUiDpvDLFhBCgUtQn9P4YQ3ziaZ5WEjsYLG3yotALrgWkLN6ySWUtXfLrftqo7",
  "key26": "2duspvdhWKJHpH2uFExYCcernXfsTpRPt5Fye5juy4SBLS47xG8GzYM25E8ZQn4vYM4vQUC6C7Upaj382S6WMy3z",
  "key27": "2djaKKpV1VLxB9eGVgrak6sGFvWrBnydC95E8jTq59gknYagZepmduWty3Ut9XQ5Nj9MXa94uboSLTJxK4bYDMc8",
  "key28": "26fcEUx3x5udqT1QpzNusompL2MG69JVcrAHGUaLuqPuJPK3GuGgX5vb2BcnEK8Mek6BNhTydJdGazxW1ZpwmQpd",
  "key29": "2AS6sHwP8LzBjLLo4oy3cvciEH1bmfu8FMmjdrsZRvJ4fiYR3kjKb3NYuNaGE95j87Rd2TdBxZYWawNUJEME2gMF",
  "key30": "L1MLxWbBHaAHm2hUY7bpWmuAdqez1kB7g54v24QxFASEuM1otxjZzmtM1p8mxhxxY82PphkGZDR3wCQdU3LLqBs",
  "key31": "21v5vVxMsgKjRyDK6thkCb6ufsyQ35GJoi9j915xM6Y1E6yMWbVTaW2EPmr9LWhhDt1x1QMm71oMD5byhvyVtFxU",
  "key32": "4UgoPxJpkuonwB6gZZFAXSaZgt1DzoqGhBs1yoJ5TacSSLQUcokpjdseRkDPzsSgcuLuQDazJWUYSLbLCXp4hzYe"
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
