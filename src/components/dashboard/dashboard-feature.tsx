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
    "RLy5J9JRhEBQAY5pjLHk3qwj2g9gDaQbD4PANQy1gY5LjZbKv7BCMmmusU9BF4JALUryWg7YM5BeQTR8PYRfHaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tzik6FhoAQoWEqbUt5YkVHZymUKa67vFZYTnAxw8KefsKTG1XGRMTxqkLs3yESZ9oo79yPAKouWeyPAQRB5XKHM",
  "key1": "5pUM3RhuatYrAqVch49GuFU2aeUxiccGYc5dw2WqZyfPwYEkGHKa6hZMdWkDRz8KYP8d3uMKyRSbUquXNGT5bdNb",
  "key2": "46T6D6eAVarx7A37e92vCB5qzHNaSwMJddDmrZuiKU9jMfZvdeEr1BnLzr5dCYE6647fZk1YA9Dv7CsHdYeooq57",
  "key3": "31zcEHVrQeJQKAH1XUTByh4sxkmtqio2h28nVyU6cVZsra6BEvtXPGSrSKUTUhcnZCtPAE4anTHE3omUed7V9cAg",
  "key4": "3FmXjpvpCJ1EMNbtKejoYmkdwHnVuFV5bRSi79WJG5eLYpQJUJxBNJBFrvBCYvGpVj3fkvLCJZ11giVXKAQdxfr6",
  "key5": "2j5YqoXWAYex2jeQxD1XPYHtKqs5edyp2VzNYd1s2fSWm7C45KLm8pGGDpygDx5Xx4rvAyVuoeeVC8gycjg1rLRg",
  "key6": "2zau1qu7CtESK7a7n43p9fB6hqAwQ179hrYQLvR2S4FzVK1fkRYP3g37zTu3qzwj4LzsBVhPwC7hpKWo5MJSkTdq",
  "key7": "5Eqkmewi7XcMc1MBj4rXR6ixNMekbv1pMeapv1kvMYRbB1sUK3iUGPiUsBYvsi2TsNxgjdpbEEAC8emsTto3Wf8W",
  "key8": "2ZNcoKji3SkW82LGg2n5t6EFwSrEqqYR62EXkCNcG5EaXFiapEps6qAPefBcDtiDo7XCAup24unukgmgafvJH79X",
  "key9": "2PafH3kfCcs7H9RtnqMyuywEhYNJT1q5YLwo52bmekWGzKzQcwNtN5eVnpe1jnS1or5WQnzT7nhxwceC4G1nvCAk",
  "key10": "3NY3giAbMUTXQF7aEy7CwkkbpuSk7UsHaaG8FkgRcscb2Azm9MPz2v95pAjK6Y38T8vDGz5MVjLL22niqB2FE8vo",
  "key11": "3uVpgkvz7UxrWU8KM1mtcPPwsTHUttbMawh5xnpqe4z5VcZkJzLpmBAqtnUpnQiE562WfnctTTjFGroyaa79sNSy",
  "key12": "39yrmMgPMV7dp5q43iYwi3tJQ6R9CCHbvWRb4r1HZg8zhvAnP9YMuus4njxNDA9eDwDkKSKoGL8HWN7MAqLT8Pdx",
  "key13": "5egZLu3wsMezbvzmftACqUH5U9Fntc3hA8tFqPKPWrttyyrXCgTgtXksKLyictj4Ye6NNQWrZuMqJwike5cmwuJC",
  "key14": "ZjmudD2LG9rSakfVvRjLURcnRTcFZGYjsJTd8RcSd2BDwjkvWkg4bwcZqzg61hGaGH4w2XZrJAti2RKDb2VftsY",
  "key15": "4rBZZ8FhzAmjXr2JZFMGDXCNEo6fJuTSzu5LeY3dqnQUKahaBDHYK6e1SPv9jQ5aEF8CvtzsUff98FpNVYYztjZQ",
  "key16": "49jiRwr1GLiBSXE5SbSrz4jyxh7trVVY666855vtoJNGuJhDBDUiZxKZXLFtF74a5dsX6FCCUKYkPVvkGU8YuW3n",
  "key17": "3MbByAtCYwpxDfisr7vUjUwFRnbu9PRU5A6cekcqC3ioZoLmY93USELw9USuzdqbcCVs4wSv9cxjNBrkLeuqcyZE",
  "key18": "5YWqrpuq7stMi3St7NbMmo67XNeiJLuRdtUHWcR4zEBPtcDG4aiCw8ELqUcrgnvi83adWsmMX9QvxfFpgrDFaHcs",
  "key19": "3vSguWtqAyQFGR4Hd7GVsvSumMhzpvFkiZoz8YRt6VUr3dtewNQNWYXFJ9smbucjUsryBYgapUqDuhXpzYfZBQ5B",
  "key20": "PJqD6ofshZvkWUCizCCskvLUFYrR8E8EJ4B97DN1pEuwbe33kJ9BtR9iWjJ1b5aFC3U8RbLffqpYKA9YBU2hWmG",
  "key21": "3PiCTtoQmdmJea7F4H7CoHv81jPKTESYoXUkKcMJmxa37K6kH5wqsWnhZAUTRnP3NyZqZmiD4bLwbFTtPzPziRpq",
  "key22": "iNx9pt57Xx6xPQFkZ1o9L41J7zN3KMS7pxtGN33q4zKo52BdASGxT9A5Q32mWLzPjaYzwivVKMPvwgV6KUMRskJ",
  "key23": "CgGZyUrQnsi4Q3pXuyK2Sf6nUwKZ7wVDoWfUC6HNosvM2TUASgCWzUCm1vfSLFzapXyZ3aa2B4WA15sMusJwSC7",
  "key24": "5B6HBuxjeYLxfTYsv5DczV3rvbw4H5dD7ZzvPJgJ8AKGyse8PKfLvbgzDshnTuGqiRQHUrVyKUBGmps2qihq8qKn",
  "key25": "26xmXJ5axhhA8xw91dwJwtjTuWhPkrWm6HDpuKajV5rJtQLtLPbTFqL27CtHqKem7gyEj9NBQFDmTBQb3NZgaMug"
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
