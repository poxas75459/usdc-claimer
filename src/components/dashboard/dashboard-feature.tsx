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
    "5TSeUkLoy7MzEDr4X4YcH9tZcHo3zKfLpnzgvMBn1FXUTg5sfVZTVE5ugLDBkCCNyw7XT51ZZdtNwyrFvm4v2mvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XVF8wooRrgumXFp4DejR4XujeUXgwKJTd6YJyZzFimtCKyMv3AMTSBj6aL9dMq9jhahkgh9aYmZF6wsCw4M77K2",
  "key1": "2rqWaNmscYiJzAonTMomshUSiwcDwrUFY2oaztz9bS7JckoitKrSmtZ1iDNspebCiMdY3eJJLiWfoGa5VzHRYtrj",
  "key2": "2M9D1ifzYABb22FHnAJXFjfDvaJNU6tZhiisZBwgjEijh5iTDxkfpWAfRcnTEnTsn3MTsk7yXcTLbY9QST1FCWnW",
  "key3": "5DSEkRUkrymu33B6z34VjXMEUmpVym9e5R9iNXN9vHp5pCUoMC6naJSko34rVgBdYkKmnrramWi1b2twCvHqwReJ",
  "key4": "4b83wrzfyrTQtYhAyZFCgoYrBGH9Ezg5sFQvy8KyJamgoavcmKmWMxsKk8fxBEBmmePmfgBHnYtzZy5mjh5fchyV",
  "key5": "34RTmDr9LdYeZatrBawV54zWtVFr2NHESXBDzty3ZP54xoiLBftxe7MNmEWhrh4w7DfqSwMzh4Uf7UMDuazusdWu",
  "key6": "522UVUjxjQ8ox6Kr67RULacvBK8Lfxzn12oJ5fs1n69HpHgqAMmw6StQN9AcL5ob3cR4LUja661gb6WZj7CxKjZ4",
  "key7": "2Chgu4PXXUhfYqCTBKS7gK1E9eKC1NE6CGVFUkfYSPSCzAqZY3eonYLnv4X4ymAcKFH9YLWMq7bshgVdTNmSpt3s",
  "key8": "sjrd8j9SZF4d99sTSzX6mbEBRYHW9cJ2oRvENejMCFmzFnTKRm7p5eqm5CWbauuE1nys3hupY6bTkSgS31imyne",
  "key9": "2RFuv4bKY1gadLGgxus7irPtMMHKVHUT9auG2LHLKD7KBNfJFVjqDkPccYJdHMvfg2AABgmAR5qFaGztGrNQrfT4",
  "key10": "35yB88XGj3t8n3e1HZ2qGE63BiRSG74iZSxiebegEuP8nDFQnqAn6wiZJ4Gnh2hza7zejx5ir6ZuRrGA2zUn7vms",
  "key11": "2ZTTzjbtscpek1rBVxnTtmkkEYTVP8JeuaNFiNwWHtSt6v6ggx6vpbnHvciXa8P4nXzAkyfJWt9jXLJQ2jS1J5j7",
  "key12": "4ZjVGm97FeFzniyLRMGztWd5AUR8NFhZpMG8UboaPbFNtsD24EsSgrZtqitLYQmPkwrzNYVXr9N8rkU7tgJVjrRs",
  "key13": "4sXpvVyQ4acy9X3BEk76BB8zDTFvWh4ZLS4rvWTDDJnLMVnppDSiZ9gA6Q1SxhhaoeTsuEMJbWYXZuMwyTJDJiee",
  "key14": "3cmTyKuCjFCsRBRzxXNuYU132Bkd2rE41pVoAEFqXtXL3oAAzaJN5tp4m4Fb2KLhFGNb8b9fgC8sNRtuBqxXdbcH",
  "key15": "4peyoBektAZ6MRg7neRewk1a5v8yXrQwZyMqJX8UEfB9NkuwY7bjxAd7wyjNeC9C6B6TJTFs1tjqkoWUrhwPsQdZ",
  "key16": "5DLHbMizLigvxafCUnRHCbvxeHYYBJJ5BL3rk2gaWbubaYA9a9xxp5YDLea6opWjT5DVW9ueDuwsystK2emKWPC9",
  "key17": "3TCfY8PxkNGPRRofh11EuC8fsW6YqeafmdmKBRxTr7Mc3h2gNyDJpDXugJHZGZhMo7m6CpDAt2BGCD5v1EmRKyZv",
  "key18": "5UmCbsscx1b2bN9vXMbc8cHf5zy4nR2fDWLeHZv5YBfYmT915QebZxY2Nhd5x4t42kCNvWPuDwWNLDNvZjzhMnBm",
  "key19": "4u9nBh39eHZJMZ8XeEh9xSaq6R72T8sr9E9Guu4XaDZgLVjyLkmQ67LKxQWjkPRqDb2dc4xxz5ZgoGjwAB7WPgpM",
  "key20": "hHVxYWp7pyX3WCSWZZ3whEVvcjChZFXZzWzFDArbfYnDk3j1gEgUkh2rPdjpZcg7faYJc7jwZd36DYdb6UnMGmn",
  "key21": "Vxgg9q4jfdCeGf7GaR2uP47nfdMNwLKMEKHFd8QiLT6HcEMPH7yQiw3f8BsiP2fq8kSeEvEiFwPKeAvBQok2s5i",
  "key22": "gJDqBaJd6sXPRcVorJvKnU2CPTeH6ZFsGZkvhsaSNZuzdc6RZyVYeRKymFYr14FcinDe2bHz9CrvkAvhxVj2zyP",
  "key23": "4Fag2Vay88niPXJBtrBXT4PZkfiKS1LSySsTThFQFfQKhN9YUw7bEAT2CJi6yzGwZ3TWKgqhb1PHqMhKfBfekDg1",
  "key24": "4zStWbXok2WCrpt7ZACPcPUnEt5rVDskuTcymNjKJUYkSSbsbKMiEZvE3vkw47MSx393UH6dijhgMqt6M8oA63nZ",
  "key25": "54r1JwHc73Ezm8oNwyZyXndUocLEwAsjCrop1nJni5BapJ8P1YNrRUZvDbzjZk2ZzSMES8GzKrfbBxW7qfwW5YqM",
  "key26": "4Hi5vh5jiDScbgzEckPvH95PZALNvPFS4Qo1nYrwE2E9nb9JYNPAz4zu8L9wYcg2H6qzD6HMPEWXQtD22nHFnVW5",
  "key27": "QgSALHxAiNQ4cKpCxWP3SMKrxo2ZGyKoYearS3YEUDJfXXkt4TXbUXd8VoSga1npKc5hA2s4sN7kQdLF7eQdGa2"
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
