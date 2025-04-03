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
    "5RehryL8Mi3DP97HdisuenYaamGfv4MUaqrBFDLt5o5RMe1VFMuHvypSQcTgq9vL9ojE4FRpDz7sr3xEW61vAyc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TfR6itxsVaLbKCy1fe29RZLzu2CiEqS7nK3qFZ4dRKEsjW49yqDG9oQbtm8VFeJ9v4RhXrrhcArmo1a4c7z6fPy",
  "key1": "7ddbL4AZ3YiDtefKTX8wnMCyHp48Evx2hSVMQdcQtfSFm8HBdaGW3ZN2np9qz5WXABB8BBaBGe387QgKdrm45d5",
  "key2": "5XNJ5TDVZfs7urPftrpnkWEnoR4o1V2juefUw89gQBjRfaSe7UkGKiTVkbKs1hqgYMnzv9JZLum7iPvsLmbA6JPS",
  "key3": "F1pKUPr7sYDvLix5Kjq8atkQqFaqSC3EVZRpRo1xTNTtHYj3dCv8SgUhwRzHhEW5qJyFKVhmkekYgEAyb1kLtCA",
  "key4": "4ysMxruF9brQBAJzdaC4A99JJYqGBvLSM7r9RtpZs8VAcSj9nQd4iHJADw7iwBBvZT26LU9kdDro8VDKGR6e4MWT",
  "key5": "5C6gpXcA35tuLwAQzw4fo71LPhXEu9NP3kSJtEeUU53M8pyef3CMgttGKUqvySi52DG9sXmzjSPGo4HLxLbpACxQ",
  "key6": "54apU6tDoMLLeYJcjVqjsbPmSAbDcbDPBkGnFw2Ut4z4o42uyDHEy9YT585uimsrzjPzyarFDTsSaMfrGqVZspry",
  "key7": "5vHpwbotHu4bWRUNCHC7WRvzbduiiUJfE1JArkpo8VYFgCvQSNtyi5AGGVvaAvcx9YiAH4tVXPpcuHcyCkVHwtAG",
  "key8": "31XXv4U9H48LeBbCFdbVuEc2epCrqwd76efBs1hQ3bZ3Pey8t44BJfK6j6GD5jqTtMuGDhp1cr5CzMfoqyLiASNK",
  "key9": "2EHYEBXtoKzErbkumEriihwT8WYgXDCH7nGzvQ9Qimk57EXd82xTbJc6osjZFANwoep4ZyUXKisjU9vC4fMcvoMA",
  "key10": "Qycknf9tTKW99AaHCViCqyHTTyrBLScRcEB1FGVfFFRkbQ2F9ZWtu5DPiwXEtNxw6jG4CoDtuZTQ1d6bh1VTeL9",
  "key11": "3KDZi3ZnztJP3T4CKogb18Dcg2A28Cd46hQe9bfX6nLKFNwP8xyPXmQarv9VhNc94QWHfChhv58fCgZHHh4L8Ysr",
  "key12": "3fyFdqUqsQHrUbrgozGCxbSzaFiei5rADbTfvR4LUg9yDJyPQFVXiXyWDEtbG2vWWp3n2uPxer5uThbFoncRQxE8",
  "key13": "c5NXf8isYRkEGTUwD1JGHv5Y9RmfjsvocAMza5RNbjpaZxAfsVCbsYkRZiqH1hAPqtCWHHki8z2bp5wTztxnkdF",
  "key14": "yXCNzL1GadzLk3U5o56vCkSkwPKP9qQEiuziQWL7EvP8anFcEMv1HBrWF8ikJRWa4cuY4a4GzVCDRzZcyoP68kL",
  "key15": "2DPbo29e5NPYbrXovYLSmXF6Lc8jWJbURKWzAobUGf4UopmoBXMiYoijRGpnW3FBfLhjRD9TyTXaJdSM9pdfVRVT",
  "key16": "5ruNmgaN7v46FZyiEomVcS7LafEDBe9eGhVM5pY7hzzhVTmuQs22bjzxga5jfbU6xKq56gQueRXvn6fmHaf2A98o",
  "key17": "32QJiMekA4wQomkp6KYTR5SB6eCrMDK3v3M9QSMEEKAZHzZZKvwugeySuU5f8j36bpLw9JvH34CY9bKkvhqYrhhF",
  "key18": "oFfoUsZRenEq6aHTdqPQypp6h336EVDrDRQw4n9Y6abfckk61PMsSGEcP3vAJ53DjbmtUqzhWZr6qKfkwvKVvqv",
  "key19": "5zYC14R48f7fDb6yP45tRGK7o5YRxgFuVj64J4CheqS7C8bVYefwABpypRa316hz2Ypw8ESB4TsZdyd3uuTQrFLs",
  "key20": "5CKtWCdxFK92DFjcmwPUdbWZd6jGLDKZU4pqAFWvfJAW1eogLuvniaYDxhKd2akKKwfBGL3ArsnBX7HRqMpVHZyf",
  "key21": "tqe54ShyoexjmLCSWuVCtmNvhYWXjE8CXuoVqVXsw5o2jh9oAdaeAKepmMpfi1P3nBxs36x5NCfZKviogT66Dmb",
  "key22": "5N17SThBZvmBzN1tQBpFVeaLymLcmPGV9771RQQV1MDdWfNsq4B4Cfi3pJpaxbzeVbtP5cGoxrNVykqbxm4aNcdo",
  "key23": "46gN41AuJkhezThP67zdkr4axhAkAVqHNUk48PJxT4x3HQKK11RKwS9rL9BVtVMPFHCeXrNYpEntXrg7jUHwSYzC",
  "key24": "5qgWuciYQUo7aXkEEzdpq8kfsB7eyLraXtqqi5K93scKhGVA1T1sPhfNMHDPMf7tNBnqFuDefsoYTM9c2brdvqWX",
  "key25": "4iMJzQK896iM2g2njd13hy2wiXWUzAsnftSR6NFjgQpwDCRgd2LTYyLF1qSEsBwTm7cdhBRfJERJVqdiG6pXphRN",
  "key26": "5DbDM4jYPdB6HX4vKHmPwCLAfiJf6Y5pjSksSTxAPgjuek312q4kZc6X2H5J96CQWrGs5j25oVwNZtzaTgxQPf5E",
  "key27": "4Q2Bzno9KW9k9tB2c5Zw7cb6S27jo94r45CD2zCE8pfBBcEG493r9gFUwc9Nbn3FaggEfC7cHoCFLjAwez7ndpgV"
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
