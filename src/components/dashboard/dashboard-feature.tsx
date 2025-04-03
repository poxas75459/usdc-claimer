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
    "5MVfoY5GhkYtLA7M5smVyWfeTaWdNikiBEJ4doaeTSueWjMUJA58rLPdRRjykyHDn5RxZZwfoB8vHVV8iUYp8SX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HZBFpfQhDEroSuxyuVPy6xS5EByoV225Yb2EMKZgDgSati1iwBhvz6ArktDjZDG21Dez2Z4usEHsixQjt8K2Sd8",
  "key1": "RW1ZkKG1XTLgC9GC8WwzUi8od8HqYbtgDwB1T3vCzykDYtfqLzeYSTBymXXqyUBTiQX2zo8T6nbeUxxtu2oqcwQ",
  "key2": "2WooZNun4ZWZ223Y5arrozfzozK6smw4c5dwqkLkbFRAWJKXk5Y6hea57PM1nj32n9ZyESyQDz4juV5sN27BX1FR",
  "key3": "2ykkG437aVaEH1qvBub3KbjG4erU2VC8kYt8QToZV68RTsYSJ18XKLXvJwr5YHR5qpX4TRNaWZoH1Jf2ewsGzGXM",
  "key4": "2EzaKNQzBh7YnygfeofsvXJtWkAkrYQdsGDxjP8FKhQz6Kogr2seCeoCxmLHmgnhwqvmfVVfYGjkha3M1q42GmW",
  "key5": "FKJKWXezr1s2kGUEcFDTihSv8HY4qAHksGQ2PphEjXTuR1shsKaHQ3KnqwZn9XnJpaEKcPb3XmJD1SA7F7Rm2no",
  "key6": "5VXUJG5bL5ZjKZue9Yza6Q5kpb9SXyknj9eWoBpbsZ7GrmCyfTUMjpyNKLCrwKkCWZu78P3bgf4zo1jwQx1AuE2e",
  "key7": "2Va8YXAHt1kZ2afTv7GyoWqGQeKRMoZb3AVRqn4tmgdawD9sm1x4hzaVt2bCnVKrx5g4ERHKv3eYWW84m3jykBac",
  "key8": "yB2AsM8vbK4PjfReo9qhHQ5oK9zrdmEQvLTJaP5ZYQ1eB411BUBVhKH7rhtrUmWv4H8atpRXxK6oc7SaQbDDwVq",
  "key9": "5mpwuUq1nMdbcMpTqQ831yV4LYigg4uUikqVVeyyabfkeX2ZSiSfrvxJwFdyekxJKWyAFxpvKxR2M9ADb1imHkUL",
  "key10": "2fRsFP7ioqD2rDQ4BqzxzFiXENs1dBbW6YmYAqYDt49SZAsTDbZChicP4Vfvd6fj2w8sD8nKtf6TeYpiLhfGe9Ps",
  "key11": "3CYwdktviVNjH7MbKadq6gsZsVGsSjdxfPmiyR8f8gwhL8dczt7kikpiHcrKousJXc5piCTn9SyGphWEZbeJw9bZ",
  "key12": "FUtmZnC4Zcz4AJcexvKMeny2yJ9AE6WkP5sYBk5pwFKw5YpkWJLVyStBCfQvA1iTJhEo6ZST8jTM2UrAGWo73LD",
  "key13": "5TKXpLfrKaPnbc9Vxe4RfGF7PuPW6tYS4NNWRazBjR8RnQXQBnF7KLkaQxxZm57uJFD2hQhwY9uhhGQ2p12hbwwd",
  "key14": "4TJkjAwR7NPjYhaDyxHkhAdt3qVT5SdVa87mkFaeQ5Q3NXUc2RFaAehWntnvJfQgv8vCbtVdSCEJE5aQjRAe42Kq",
  "key15": "iBTbD9YbFz75F4QKDXvwFMhyfNG2AcBURhuDTD5Ayb7fVnpKNjaTUw4m4gPZtryVLuwB4QNhyene4UtfgedtzZd",
  "key16": "5B6LJWXHXWb8kWciYcLmNRyaqqi4PQ7akzKZyAXu52aJ9GnPP6VaJM7KWK1kkTxoNGQj2TqcT24raVXL94gpwN5",
  "key17": "eCqKSNa76a7ThtoAUZFaRBSgTQHCAFdd2biwWE8V9GPdoZZXijNBWji4V2UN6sDka9Q8XygodPpycQWumJ3bkjH",
  "key18": "2D57hYSBwbqHjeqNP6Yo7rF7Hr9QwZGAACCBrrxf4TamC4G9M6X76jA9wSTeuxXN5eutGywxmXk7j4oN11VFn2FD",
  "key19": "2Dey2WbUBihuotmrEzg219A9PhXE4cY3iFLQUmRWLmQFFaw6HRVyFWqa8buK7q51HujkiSi9q8NgZBZA5o2NKsVJ",
  "key20": "5CYNTFweYcoX9JVa6JN2o2N8Uwhu6W2SS9RfpX2fr4pWA9kfTjefyKk2C5G2Ss1c5HK3ntkugKbSjmU9DeQK7kyR",
  "key21": "2qjTWzRfTnDq2KVXzs2xQLTS9CWxwEwepazUKScqhpmgFxLFcbyE94hFW4H7rXHER6ydbD1zVF2rQaVnz9cxDWwk",
  "key22": "2ccN64AugizcThdxqx1s7wFhGe8H3U6E7k3QeJxGWgCh8XGRPqo8pzVMATEeFaxrLqkHjoh5sYYwXe39nbkZdQnd",
  "key23": "KN1PiBTQ7kj5LdeancXG7xQ8sdoVDhkQYQ3UsmN9V1PydSkkkweZ4eVx9XinczpFQrGSZY3LXhwLeJYYG9WeXqF",
  "key24": "2YBcffuo3i1VeJwZWs2Lc17P7sWQVynCobG18nSuvDnf6sf9VfNDqTqfQZPAz1bogit1oZoFc33cFfyrnHvnPyt3",
  "key25": "4sDLk5eZ6acYcUpMwa8WdR1e7K7RwVdeHVE8tPhg5xXLwc5GVyY3uKCZLVRZAiaGMfT4QqS86jWPNsTEeTZhQAo4",
  "key26": "aTa53FMqVXiGFxGnxTWtsWAR2GxCqRguhRsDo58UP8tsv7LpeDEHCXuUWwzoNMESk9SNvpKkZ7LQ9mFwwop3uMF",
  "key27": "5HK51fDwRH1DjR2ehhqUJVNAXgZnj5eJRH3K9SrbPW5wPTTjMbV2dd83A225U4cH3rertFMwpAeZUz9j5NF1drni",
  "key28": "XqjshYDY8mbF8WbyALj1iP6n5d2coZJfB2K6DJrkXZzy4SFpzZuURnaE23RERtq36etZsDe4oiGJpLtc6riVFjq",
  "key29": "2EByh5EAuWgGtXb9R651RKUP3CU3HnYND9384TKk7CAFGmSnPuX8TVyMuXFjudKgYzcSgRNQRKAGbfiPHWXfF96V",
  "key30": "4LdsT9EcFfsfVUdxGHmRxZknjqVFsELnr32qCquorXu3q2MtEkEK9ebz7Gat2NbAnktzDovQFJu5ucb1zf4AFCaT",
  "key31": "GvKgwwuug38ZYoYauw9Stdr6LcRrUMvTn2DEqiRCkSxYmXuw2x5VbVxSvkvBjvi6e7AxuF83MPeiEaLqYxHqKMA",
  "key32": "2JmGmxRTH7fTzo5R3do1Yigz2ii1aeHJJCY9QYZh4D8DqhzWnXw5Yv1dJXdgTE5YX6T4ZWWu4MLExrqNaiBQN9vD",
  "key33": "8pSjQcr8uQRdgBBToH3tU2e2LM1X7o4Byk4wizJwLgP6FZY24tKJ7xH4wnqtfoDTPeCp33vVGNmxNvE2NSnLN2w",
  "key34": "JD6DKa3NVMNnJ6ey5v9FAQHiWAfQ4xMM3LQvF4fwf9EcsMFRFrFPkdhKDyzRS2z2uuJ5TQHFYET8jtMWUdu1sXj",
  "key35": "2Qc9aRHjVgCG7SW5sQkDTg3rM6YE8VGWk7kWpQ9HAKBXGxWCm28eQ3DuYkS4Cibnqr89anfJEjnQx6w2Vb9MXZN2",
  "key36": "3F4dCFXRWc9m3aYU7CHSVBuefhTPhirb4S6v4JyfWpazBytGsD7VMeUWQyXz7BmEsdNGScqqGo2Vf6XUm6jGTM32",
  "key37": "2YydjgcTd5jzQUctrb9gcBTGKjqdwRY34Y1UbkjR3bZmTdHoBfpZb9Msd7bLbpxFDXLkT1JLd52AGC4PwPMhgi7y",
  "key38": "4uemJExEiCCrRF7LgzgfrhB2geSpNnaQQNoeb2JsiMAzJQzukqsJWpCP3SsQ4taS5UkiTX7AKRffjq2F3J1eboe4",
  "key39": "3acj7jcSDYYRu7DWvBN3chTonppCX7qggaE14M7HLQFKb4J489rARgkg97cX86eacRqmz6qpv4d3gBapuYeMGkvW",
  "key40": "2ezfCpMwmauhpsTjjJ1DKd4s9UekSkAw9ec353D7dvW9a75xttWeWkVD538zHfWTMvfuTK66Az3heV6GQHr9E3dv",
  "key41": "4LVrooD4c4prptvy6bQkAaxfPu4jTYZp99sMEZP3w75V8kTSEurbc4qdBcLFxaTA31wgZVkdngfCoGY63JhgGZ32",
  "key42": "5beSSVymRNp6QTHqgBTKv9zwURc9ZNcuHrbNC2zvp33yXyA6edHPS5vDHjS4zA1Bf8irkN1gLJBJYGzyfB3dAveN"
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
