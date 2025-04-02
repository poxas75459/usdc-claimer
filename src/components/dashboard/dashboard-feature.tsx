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
    "2kuq1f5JfJ4WTpvKYWGivcp8RCKwzzHijawTNToJ6Bf8geZJ5bb9Mjo614f5z98gCkYsUBPpgV7VFGBks43Lm8F6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sHbdKpEy5yfG5o9e2kjwihJ8EEfugvretDxkWfXadQybxLHrMBRFKRxThx6Shx3qHiwJdWL4hcuPYRfvMkmCstu",
  "key1": "2of8gPMC43Gu4ToSt9FdkRvLcJk17UGFUX4t8NWQp4Vu996hUM7Z4NtEDNP5F4KEGs51zE3HkzVweMjbTkpMRTKj",
  "key2": "42WQ91AnuwgFpXAeAq5MtNEA2fjheZQvNF7JsQHct94Q1seTQkiXvtyqhzVsRHvDEef4aQwEFuG77F9QnNNbm2y",
  "key3": "V4rPyhGMGtgx9bye7BkYimniVz44JGoQ6Qkrbh7h9MSJ7jihSeQyvH8cmf6V9YYA7qDLVTeV8dunVAs6C2in255",
  "key4": "3fJTUtkEgS9Qgs7zvm7SnVTtQBwniNBXBa2LmPRNy7Vs1UsS9336yabYSyCSCNv1EUJipWT1Z84Q2qMfwUXe49Gz",
  "key5": "3vYbZqp7sgKitU7tY8tNKgqVwJsaBLY5JgrrZhhWkBqPRqTxgGkfaA7Y7S9r8pC6JdZwuAMHCWUPSS99ySyEoC7h",
  "key6": "42Dkyah4FDMX6bukuERGVuNLDeLFJmNb2isF6aCF4iur1kE6wzTQbB7WYRv3fmMQpQBoEbZGXNSeu2XXJH7YSi1z",
  "key7": "f5DZS3qY9ZNAFBesRwcjYuR9oqgYNfduFKr661C8sBBcoCECP7zrvq4JJyBW4FeLpQQxmmjvHgYJM5Po4tuRYsf",
  "key8": "4oViw4p1XsDUid5sWhw428T9G3uHrv7SrUneE9T6T6ysJxf69xUXgxUdTPwJxTLreZPHYS6x8jG1R2UQ9WQ67Md4",
  "key9": "51c4DTBk5n4efTu8RmE6tDPZQHyGMjuZgQcAXtDMSuYkLHJQh9aaAkukyGzrGJ7za81ut72T1wp6rjfHBqec38PD",
  "key10": "3AC53u2mtWTj7mdk8CVkGudbdeFbDTEmdYvQowwrkuVhprnc3yukVsGF7gP8KJ2Snq1wRJjngTZBk6nJXfgEQVY6",
  "key11": "2e1HZR7GLDYb3dobpYZ1nxSN7AvHgtbBeNbv6MZXAWennHUNt5JSp1pFq97ToEhCvvZm9M3xc4nHtXc4w2rPFm4g",
  "key12": "4U2WGaFCvaNY8ZUhKRKTxDJFhDBVkNTXWuBS2FE8AmkXB3xGRPs7HoxpivzAQJzJf5nBiiLHFaGdccTWBNiMXKCN",
  "key13": "4PN7aVsppvMVaTvScu6fQpKjsSSKW3MhHaLJFXs3GppRW8y1kZqJokpZeUkqbgFsHZ2sKmyJKnNeGedGD5GnYqF",
  "key14": "2mQiShexuTLedzpxKFwv582uqSBFqQ7G3h5brEeZSDZVFpmsru5dzuZ3s3aHRyCjMDTduT8UhMyZL557sfPYjkDX",
  "key15": "3yLsdJLvL3YFpUyB7zuKwJQNjxzMnzZZdkRgLGWrCXyrdModvnLzMCzyp54YPpcUc66PuErrA5nCDL67SBjzE3uK",
  "key16": "5wNMeDJRm1AqTqijCZhyXcaWUFGZpHJSeuby9YV2evNHq6E5N9sY7FvsmGdg3eno4KfrbizSoB58sxPznsD9fb3v",
  "key17": "2pWSBwQkGrTX1DfsbHCEDKnHPdxX6oGAj43qRqvaDQdHXxKDWpE1nvyH2HYCPviUE1czJip9y1kE4AeFaLXFH7f6",
  "key18": "5nz4XLQxgYQQdc9sEAYJe3HY4yXuNrvBti1yWVJvoBxWpCuikPZa7sftZyYhZhhjRLSHKgFdpb8i935KduFspiCF",
  "key19": "3JeQdouJisLEvS77bfKQuHABtCs1rmdVrhYQ4X54e4yaseWPTMSvPT45a6FeWNF226cd7CnYXDSE4bfa7gciHo62",
  "key20": "iS2PyzWc3UP4BKWCa8HS113xKxQAE1eqMHC2UWydxRKFNsHmJsYTRbekVqrxCMB19izz2FnmnpsUuXdvQK8vvHM",
  "key21": "5DjJq25buRDkarL5u2UT9MhxX4ZwHoFiJAP9ux6fdL1Fw9vqfERFYmkRJGRUsZ9zDQ8rJQK282C98ebnH3YVNjKr",
  "key22": "4ouKKEgM7vR8SZubyTuM2P4BSRyZHKJcH5V4geYhgJwnZxXdxeXMMTfd25Wu18DyxstReESV1b5jQy25gbkNYhnF",
  "key23": "36BbiVafR3VoSdm5yEhTbA8QHuZtV6fXpGZDfxAgkDVm49VeACCPo8RwRSF6Lw6yPtZi2Z2rJk4EdUHPcbV1azAm",
  "key24": "4aTET2JXS5CFPJDJ7rsTBHN6kp7rBjUFu1RYCwd4ExZZXcftdMMq3K387Ng58fTbeW6amm7ryvwCGiBWTGJ2T5pf",
  "key25": "qXmHXB1P8VTKW8xyrunsswMy91HKw6h6xfWyW25EcEp2YGusuKUhAfCfaimFNCZ5XM4Ycfuy7917uMtRBu4ZhfA",
  "key26": "4u3jZMSni6Pf8ZQNymrgy9RM6vqnKy32fhpU9xTYq1sGcnpDqgXEq9Zbhb7tEwq8Pe62nTQAn1uLLTzW96LPGTr9",
  "key27": "3nrzk2B1qhi1zUXw5zYxmMEhqmidG3KeZWFa76j2YxnJVohKJiyJKvZcrc5XRepaanKEMckFaEwDpX5fkHcsPvpB",
  "key28": "3h16iLUVo3HKu1AgScTfsDhHD8VwmVBUtUzMVJTvZXtU6T3C2VUaedvurcSRkv4XQ8gfTMsRzUgqYt6gjzMqfj45",
  "key29": "3pkwMeh4pyoNqRfEW4G11k8HTaK2xUCVCZg2Wbm844kXzKhQtemTu89cPNJwUwUcRtyX3LyrSrMzFV21UXwxRM2E",
  "key30": "23SPjyNi5E8JpjUc6GZWVfMS12Yp9G9xaxtkNBCQkxTM1xgBjuSsfEbLTYznJJywfJ1PDJD9C4YL8Wmf9tqhNKc3",
  "key31": "5Ryei5KGMxwBANMnkLuq6dLUDsduC7aNZAbBkxHaMEtExUKEqVuaVZWYCkyLtaGiVBzobfZDMiJZYJHirKdd4Jrn",
  "key32": "y9bmt4ZnzynY53WfTKB8ns28kHYvGBLmYJBxnQVWVoJj6qSHKiFaRQkJCxoQAo1oUfW15bZokVsXkw73JZPe5iU",
  "key33": "4h5FXGqxR9L95Kibs12ib2qSQ23oFRSCkhfdx4JgKFHz2N9qLe9BAyEU4kVzQd2X1U676TpoEuytqPtwCKHninFQ",
  "key34": "3ynf48QfJKYmNpsHHzhgTYCqPdXjHxsyUWFyaMu5V6XnpCJW2odieReCP9gJNGYSAqxpBzBYMcQRowfcqVVtbC1f",
  "key35": "2Rmy5zyp6eSodwDvH4g7kZGhrSAonhJBX5YMS1pEHoHahdbqMLA6sbd5k5ioYzAS3K1SryhhLp1xcMnWQMtQGCFL",
  "key36": "55mhHURZQ73ZFm8Gw6fcRQWJkkegLSUEHChfGwszmWFhNJi93g295diGezMFqbtDXUNY9ds5piTkYBnSixkx2kHc"
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
