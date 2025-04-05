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
    "4UnRvv59a6vWEpXKfbYhocGvHVKyRLLA5v8jQTQpVvKRiPLxTDaKcTs3T8swNiAMbP4Ue2s39rTMGDX3deyCQBEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "enpdmPfv3TEyVXtxZYeWNQEcBksQtUwXWUBGBgHMBfH3hr3Dn6NWS5mRY7xjZAYtwq3WgY9XnHE4nYaJTn1tTM7",
  "key1": "Hp5tZxfF9gtNgaooDcVL7bGAn2zcqDu497mW7dn2NACZLKHRP86cKowrd1B7tgZMAp7WKZE11u6LqviLvSFkpmJ",
  "key2": "6ABAP2m3mg4WDfX1R8HViL2VuVoY8Jkoem6Fu42JgaxiW6zhL8pYTk9iX1WS8LNnfcg9eFvZYvRDth6tjgKrFxy",
  "key3": "5cqevYHR2YXoFsn2weWLxzqZbb2wZKZnT5vjvzyFyPkADvshYcnqeyRMn28ca7xgAhATXHnAoTW3aoT33Dmpe3Tt",
  "key4": "5ttDDQaBonaDXuLix8R34dpZ67HS6ksG5FD2qyijsGj3pZUQCxBedg9C8agapa3WTKPn3E2Neip5nAQa2B89qKyC",
  "key5": "29PuxSf3V1JCz3dszunShzDYh8dmPapbKdcStAUFncLpiP6dwfJvyRf4W8u51K77vAJ1QgE6rbZSEdoVYkSc2r66",
  "key6": "2T8b7rjrMFgXneVVtAGiXMZdZ7K2maC81J2jcKKC9UyhwwdnddaV63i5PSKuhCK5TSkoBWuejyGxsqg9NMPBpBQ4",
  "key7": "66t3YwRRCRwy8VSsiRfF7xQrH7VNGPCain3JDJY2QPGdR9J63isksXHvN8yBNYFRngHR6FPNmErsUZXdn1guzmok",
  "key8": "2Gyo953baSTMS5TDgtdMS8anYoshG6H1C9N8fozgjqzE3ELf4dwmhJeTjNuzo35e9CyVWmbvGeh4b1DMQaKdy8t2",
  "key9": "3fQo3LvdskrcLbjygrAfWuGqH4vLHdT7nSKHq3zahADdKqRbgPTeSY3hbXaBboSgo1tEvvDF2ctjE4R5FyztiPot",
  "key10": "4cn7bLdyk3D58hkBjLdM1r2zERdtF2zPA9BVHD8zRMM5tp53ee92qnkQ3J7qbvJnq2hBUjdk6FJ1N3uagch4DjNj",
  "key11": "4aNB31W6GmUeJ5qBZKMtxfw2hrwn3GBRubNBASDry6zU1GM3LNLLY8Ucy2wzbTh7Q1nWUBgBp25xNQiiGpQqXu6u",
  "key12": "5aRWwMXShTgDdpUfpjaCb4KCd83DrSe38rTSUoYP7J61FjTGUto4rE28t53R3TogJxNUykSsFGJZmLLga4Y9Gqti",
  "key13": "5Wch44rpQMnWjx4TkG4i2TShHoDYSCngW9St1BxWgvrM9NSkDUr3Es955FrU8Tc8tS9Hc23CZRgcrkFJge7ttiH",
  "key14": "3qGkmqKLUemJVsvLs2J17zuuhtBDv2gT3qDbGjHYBaKkWyweUFHDCi4vxXxyug88kU6mJhmsjT4CAS99dacpd8BJ",
  "key15": "4djeJuL1qXPLRxV81tCmU28p9XsfP9Hf1Sqcq67K9tYQfQjKJhMnoCpJdWgtGeYkaZBiuNhNh9gLj49A7DPnok9b",
  "key16": "4uJHHgrZEPNAvEhxvBTDUrJFHGrXkjFZQRNs14pDUgoXFWfYJFrUETY1844gQxTWv5HY7V3PyoNq2GxRvuu8XLRv",
  "key17": "46mk497ZBAiHHYFzaxS2HnARFVrgBHfbGyBPkX1DXAMNPvmLovPASTM1h9kUoNQf4UYodNfgzJ72Peos5sC18xPN",
  "key18": "5vnVZzjBgQFGZQgQo6iisZc9EaQvsCmnNEg7BdNktNhCFaHLzPZkUf9mZkfsktYPSrs9gcaMdHBth5mTScoD62UL",
  "key19": "3i9qHwq51gPebB4XGXgZKCyiSKT3obWbn1aijVyww496S1hedB2c7qVUVKuAAekjxiVo5dmDE7Lor3Lj62xJrz9k",
  "key20": "3masRjA6Uyg8zjwh2iNzV2zLUWXVrPioF47xZW458QgQTFYJCygEyd5G1CgsGVLs6BKojzft9v9dKZ7b2RLfbsmi",
  "key21": "y2VvNu8U46KdNYgUadNH7jTaHtEjqN9UmFXfXsm7pA3fv4Pm5xkMKBc3sBJW9bzd9Jkvm7hT8VNbDTQBxWNFAHr",
  "key22": "4gre6ZaPcfR5daKwYVC6scCo7CbBfwd4NG3o2NVBEF2vV2jFr1nzAta8JzbnoZC4tG2tZmtpaRcFb38xjWe7dHHF",
  "key23": "3PMZGoAU4jNJUASGMgnBxNfhXP36ChGnH9FbWzDi9Jxt2yDUi1KWmS5BWkPRaH4JaPWy1KiQFS3kL5Ff3DEhZWez",
  "key24": "4XieY7JT4LomKCdDAPy2JMYsNpT7b6zVMo9pyMXC95bgsV7QCeZEhBixFhahG237mraJZvkPU3SnpStCdUP4weyY",
  "key25": "3hAcCvFR58oE6gca7xbtupypYRXLbTMFvnxFtT4FPSAJj8XqrZu7GepzK4n8ZEefnVztLde68sLoaU4N9BY3Fzrz",
  "key26": "22yECXguSnCoznUSmgySG5eYSawqLSgweGQGgLqrNLZJAQxZhPZDBQFqAdAhE34UwgcFZww3h5tLyTG7UQ4jgReU",
  "key27": "5Q6stsNgCMQWnyDLfwPnVHKio2yJzYNXcSs4oxub9gzs28Qj5LkfacLqLu1s5TywPkpie19b2eE2ZCaKBSM3pXVv",
  "key28": "51Br4t4APE6XzgkTQKNNLbfU7c7EJF8iUiMhhZczduEhh2rXxA3mXD3xJg5KYduzd4L7HXXe5JpwDQmqDFRA9BZr",
  "key29": "vKGpuQtxxdYHnrUkqpVhJa2rrwqr57jYYMyrRwPxuCHDg4oWjP3nFVzagTAaY6ZQpc2R1QcDK6DttV3e6HYvCK3",
  "key30": "4yWAsfpRkmwuHa3UfjXPxV83dd5sbKQwrf1faErChoKAWyrGQwMT1yRfkFX9tgu9KXwAYy6r3XcGLa2bVjbaSBA2",
  "key31": "5TfUxLpXzGkgsLnAcGgh98FYiv1jXY2GzuszufEqoVi2bAtRkTHrLXEYqDk6S1S71jVtBoFG2f5yAnSaEqrWP4XV"
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
