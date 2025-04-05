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
    "4evmo9faRFiCYLoudRkFZjDQjwYb9bd9JoDm9YyhwiaBGvJdvb7kUmAYJ2L34Twyn8FVtE4TqfcfqVybRpnpSQ1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "drYNQA2qimtRWXbrMaTMQUb8tjbVhdq18CPkjMXhuTgKj1Wr62AkQ19sQ3KXjVaHwmrH4LHJcJmDj8UuLR74cPp",
  "key1": "25ebghpDgu1i4UGCnzmY4xk314CSVBN4spqRQar465nrBr3Yz2Ybpp39ocRYzhSfKRocaB4cKwtNponLinWfZzZD",
  "key2": "27QxNdLv7t7FVt8zo5RHnouv1H5NE353e6NCXmAWPF5gco98g65nBHnSuu91fTWJo4urWAkWsPz2Mo9ma9TNDHqe",
  "key3": "2CGyGsYQBxgVf4MXxdSSUW9J44Es5jpazsxzKFrN8wNd2qqqnux9w2Tc8JZbV6Ltb9hg67QPv9x7Sgma7VjED6Ed",
  "key4": "2roP1oQPkQmRdJrWuKS7RkTp4BWJ7P3qHS7HNHPq7J4ZxnTqAbAaTzkFJAar1Kc1c5ZUSC9ab4mDxJshfhVs8BV4",
  "key5": "3RWwaNQvNJbgwiybEf4CzG2aG9ftwrvjQAyu8w4VszVHojxXvGEbunSQVQCvEqMiCpres6ihNXis2bng7RNaT2bh",
  "key6": "59E2Ykok9EfUAMMKfb7PXDPftceQHB4aKh7UYtJWuzenuBrzKK2FxMT8oXbomhDgUEazECZfsrc4TVYV4rRfnoPx",
  "key7": "3hzSAKndAvQk1B2nwztiBc3ookMuCnPZw1RGZF3YwpA8nyBfPL3ChoRtDkCE9q8jdZP6a4x7iSiSJkW1fgVjWgSh",
  "key8": "46gnhhsHfZq6wKDwxyD3E6FucRPfDnXdoqNgMLTNna5JakV2ojFZ8x2YbKiHadFFDceGXQSKtFE99ANjc7BxdUp8",
  "key9": "5KKVzrE2PyuWNJnnLUF3QFWcGEptDi8KZS9SinKxGDJtejDpLoK6Gaz5WV7DwgEr9kjEhcFiD44j27vYx3hsEQhG",
  "key10": "3QRHyfwQKdFgJDQaZ3TUbUGaEGkXkejagVBXsgqMU5Dt3pJL7JDQKZRBkFYJWd33EThCzqe9pgtdNvU7BSPq3qRT",
  "key11": "3AZxmRxiU9ZqGUer4299YsPCjcaaMqat2htnwi31TzCFL1sxTQabhiF6fYjha69U3gNRnM2CwTwTz2pWHyCpYVKt",
  "key12": "NP6vb72ETZ97uNf1ogqGeq46Pj6ZJjFzhkHV45efwAbpPESdWgYbn9FD9nAAYAcMwshwzVMKSe7huZdgLiX9oHP",
  "key13": "5NBe9ruRmfW1HDiTWGz3dpvLR9tR4NQt5CtqurSaoC1rGGn17fdp1H7bbWqbh7PsU1pP1JFG84MMNiKQrtFWvpHZ",
  "key14": "37TTu2MJ2z4ixcrskyJL8CTeSvxWLLaF9osfHua3EG6sBoGx88qZf4NyanvS21Lp2dhGCXijP4YTcaeL8FbCD6E8",
  "key15": "8cGXUmuJBZrGjZKH9ivoRwtTEXvhi2yinmE4pgJn6NR9keLtsNgvp89bXNuFj7wkojNM5BTU6BvAAQYduwnG8wE",
  "key16": "3rrNoKNnP49E1shhLkR4JkAjSuNw2rPzTsdhS5cg2yUz8g2HH8hmp9VtGZQ6bQZwiYNdmAuc6Fzr22uayoob9w5Y",
  "key17": "3XfGwxiiqCSHxSw1qdEz46QH42uRyreinW1TpSVYbmHt9bVqgwqeEEzRjwuyDQCU4bwhi9J3sTAxthh8VcFCR17X",
  "key18": "5GQHzvqykqnLijMeb4JtzMor6KCzqajvQCDDA59Tc1SZ1NuKMitzPZ3xmjgU7r3MWXaXhgW48ro9m67FNni5a8jb",
  "key19": "5omspeckBfD3HiG6R7UWnHBhGRVVNT1eLyrC5z3Ui3JEdXiVyUUjqs27mLg1cjo8KLoeaBmgZYk2QLwzM434rjDh",
  "key20": "3NF676MspMRVoqqhqECQwN1vT1FjoZ6EKbmPEBoqBWDahbyYdwDe3Vg6hB66K4gHnntK2KaQDwMEXijVugMhji4g",
  "key21": "42ykbptPKebpTTnhtyeYEwxLfYFa1wTAQL6eRMQ24NKgkfLJ3V3Q8vs6eJnCZvQiv7QvBozb3SQ7V5ePr9zdu7Zd",
  "key22": "2bZJsL8GFSBk6wBwaETfGUzuuUxk6usr76HVLxTx2vZC3wBA7tSrHE3G6E9scJHT3xc7tE5yPLXGCt55Che3LtMh",
  "key23": "5jNuCH9S1vR8yGKdGE6qNZyhRUKRhC8n1Cv2tiduhN4JsbncwNDmWFVwTFX23YYJ1ymeQUSJnLKBPbE7cwqMWXcp",
  "key24": "5QCeKRzYvcz3KcLvLhZjCeYqEUVWPTkUVU3SJuWK6SRtcYTbKVyc5cje7n2HEpwuU9eC8EMEDKDWqsw2q3PSTfZ8",
  "key25": "ZLBt4trHu5SMHydEnPADNxqk17YQofM11UiDWzUF91FJSLbFVACLx447Ez9x4EmVMfWKcRVDHGjhXjsxL5dCNS3",
  "key26": "3DWPW7cqcU3b3drwzvg9BJqQuHsWV7jKdZa5veNh3XLPGPVcnXG4E2XPYsZUEB28VjAjT9DeXXFQ77ChSzmvEoiq",
  "key27": "2GHAgAVoip9srAuT7hYGTM9V8bqbcSyEDvCtn1k23ZYMFZEQgXurP3KXDtvhLTDQgpXWQa5gGC5jVAVvia7sFyD4",
  "key28": "2LYTh7f63iSfau85W7RmAqZrh1SazMUE56awDftwM1pJ7FBN8wpiRq1jJm4e4DwW1BgrqfR4gWh12oXodQXAHKqs",
  "key29": "3vJCXDYcy2dwxQe44mN2hDM5X5MUuPuPR87xaJkPDJmifXwUejM8uqydy8rZvpWurMBJsbkqxTm3z9qPSc5ec5RD",
  "key30": "4XRqvw7uJjoHhgpvJ7sFnRSUj6edca7popXManLFAf5xv8yrc8r7tTtkznkHFtp7qcVNUU8A7i7jXQrsXzdZEWRT",
  "key31": "2MixHL88EwEJpgQNwZzQTgW2vuvwXn23U6zqLR8fjZjN9zexcPFWiGwvXQHUzWwTbqwVDuhQqnVAz7jhRZ4Yx6Zd",
  "key32": "5WWeRu1a2VFd6whW2pkGhqRgQfpFn91kUvMDtJMAKHSz7Ajs955S9NhuN5nAuesmmrKCM6Gi7pTJqfzZchPozfJT",
  "key33": "h38LaxjrvbBJWwdjXcB4STLApsrhr82nCwm2XvzX2Zcyu3gphoNGCbfN1jqEbRhzyBZtjMKUsH18X3jYF8feSfL",
  "key34": "2j5zcATJ2V4zdNFeZFpyLU25xgC5fLd9kDThEHDZyYB8SGmosTgP1uFQ27G7vb8XGEeS6vpvqHiECM42ZGw8yuaR",
  "key35": "2sWs9AUge126qaQNbTQLyLL2EXu7ed2EXX2RxmZbkSY7XgHkxKkQARCa21A1dbwCst7VKqQTiLpavecs9HDw4tek"
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
