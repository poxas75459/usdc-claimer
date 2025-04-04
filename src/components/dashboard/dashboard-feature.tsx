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
    "bH5SUYh1q25W7zET3GF9pmWhp2UprviZNEoLZCe87TfNejUWfmKfydE1NcRA3PQdfUUnjSUXCo88VEiTU8omUBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bf4xDQU1R2vnBMcqCtrXdHAS7LkoQCqnZMY35eUXryJKtnjun7XYpRvfoKK3ed6mRwUE8MqULA1bskHEips7JU3",
  "key1": "4hrgRkRP3b87FyZdVdM9hLeCxyRVQLZpVL5bnEbXVMhfGs4c8U6mWQwreGJZqXLgnu4H3pw7qMtUAoPCXs4459n3",
  "key2": "3H6g2XYZfPZ1JQqayUimfTdLTzvVZAMS5DzSPyFY3Q371wwbztHoK2vQYQYNf3a3dBEexhrfKe7xccowYLmxRpuf",
  "key3": "2axYbGzLf9Kr59rkejpo6ruC7g88sqskbHPHZ5sYU2johCmXYDetuynrNYALHcztQt5jCNfcUGPW3et9sK8q9XgG",
  "key4": "3yLD3h3jGVk7HCpZAKRkBnAJ6Ar4hMirFK6zLuo3QkQqbUW67M8esJg7nq3EeYMDcyzEghu2CdTrxZB8WW11umze",
  "key5": "4Q3KWwefrUyXNmQ9BwiDeZNyN9MNTpNGzR5FqQpzKmdPALqyJiTfw7X96yyWtNrxDzdtNdzkEX2V9LBG4zra1XkJ",
  "key6": "26hVDDWNWnsDkv4W5PSU9cQ8XvPCnQgtwKV3VXgMtQ5dmeNKqY7PjdpcAWrTwnm9QM47s99bjWD4iEpwWAvxBCh7",
  "key7": "8vnwveRC34FjsgDnqfc71vpVyx1tqGjrSHGwdcdZ9knmmTiBndgcLNqx1wjgo3ZM5rPkqt1WAn7ZwZZZ8kGA7xo",
  "key8": "4SFjqxL3PrMJKhaf8EF6dPCC6bMSBmAYVKovG9fjSYwpUrTkxMmYmpHjfFjrKzFTUtA4eaMY4pykzvyiiCbQet1L",
  "key9": "53gokF4mpggJHPbpaqSvxfN7EhhTiHYM8T8qst632dn5zMA54UNzDEQepKoGGEuK8zDeoLG3tp8ZtP7xWPfwc79c",
  "key10": "ZdavTW22pADjeMWobGs2awLCYDcrp8XCDrwFLrfBxKQqACwYdJXfhx6JYGAxs7r3f2dQo5NvqWVUxN14U1YyJmE",
  "key11": "2bangamYyo8y5TffSvkn2HS1HGYGvETFosEbxGVvCQLDEMGE2m6bppwNvvSYE9nNL5otiP8KEwCHWAeBHgcRUoW9",
  "key12": "5B4jUnTQQEfZTEvzd2xJbJUkAHoYwBRmMzKoEptvEh5cYdGhzoCWnNdTjfchXJPQZpQNreeRtaUHmDvdA456CT7b",
  "key13": "5nS22GZ5pKVtoGMxfAbRdc3JLxS4ex8TU4Ww5KQ7gETEHrvj6Vbu7TiPdqYuU8RN6E2PzYA2jQikGPTcr7zXtRjB",
  "key14": "moHBGseoq7S3nsAYsNKwzjzrxnn81M1mxS3fHVzKvsAzcRiSBJSTcT3gHmMV3YdrKXMcwzrM1UnjCp2Mgg5jiaj",
  "key15": "ocH9VVkjGYFf8DGA4mmbkN8TJ76RwKXZzw9qUo4ceYhcKVZEPosk6AYHAY888MoNE5iEbjpgMM1WjTcBBhskGNh",
  "key16": "25oW1L35GJdmtePbZf1zgDjiJbYY3pyiEFuM2bcqcSy8QFt2Pgwpdccs81AR2WAbAvFp7aEfbNgJRh17DrPSXofa",
  "key17": "5wWE1DVzf7eqqVgqwGioDc6XUwUmjLMn6qf9Q9bQ3HRvHFo17A3cf71JRvEJN1Pb43UUF9r4LJGrNdzs8bZ3XLsJ",
  "key18": "3ziEbNa8oQowGYCmJHJnB3JnVQVuRVongyQ8vWMRRhr2Z3enrrPSJHc3jDL5LTpvRv4Ad41UshUeDpE7hTdELFRM",
  "key19": "5jdajPHr6Z646X2PhyCcbbherZuSZH2a7MYJhoAyF8psYwmoJ8VLcL5WKYERHjUsNMQCW92dyBXa7cVZSoHFn3jj",
  "key20": "5R3VLWVS7dfB9V8EeTH5eMCz2iqBjb4WzgJE7yxHMGB63Aw359o6jCc7eR213Cb2RJWLeXd3iZrddcBv22xYySjv",
  "key21": "59yKHnpG7cuRw5yD9g2sQUQ3Eoqz8DKmVKq2RukdHzLC1iNicJ7qUs5BhBghDdG1dV4VG8kTDA3ErAvcLPSQLm2P",
  "key22": "2GqhyD1grXUWuSujcRqcVQYkBUw1KAj6vf9VeRkCKWhFvQ6raZbWmebeZZZAzBCd8w49NRr7nX2Wbk6A44xgGmP4",
  "key23": "2d6AX3jUgH1EdGBVJpWm5pLuEu881i1FLd4wFk3AaZHe7KNWL4RH7HtXbJKSSpE9Yk25KUPu9NQ9GtA5mY9M8Ji6",
  "key24": "67bTYUs1Zh64LfeAn6S1VKh2HSzJBn3LBLvPhKc7gJ7XtPABXig5guWGbowv9BcSzv1qkqmYfiwqXo8nz7PzHBgR",
  "key25": "3rRGiqp2FMB46TeidXG3PKWTkBdhaURsw16GeWX3iHB96otanWZSTDkP9yTDBwDLLcuu9d2SJRn7WzeTAt3D4Y1E"
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
