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
    "P6H6Un4EhzfNqSNy9Qpc1GW2XSgcuhZQsSVnasNv2iCbvPMypwV9osNqryxji7j65oyVseaydUs8aHo6dpNpPgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yMwvq9yNdapsv8Wy7rY7bJQpSeKAzyaiMCi51GZW7URUg1dPgwhLpyJeose55JRnL16LdkuSB92TiPANv95EJKr",
  "key1": "39dpT1pqkvw4Sj9R67yeMPPzh2JBRZEehBSBdYCudkQSiZa1N8jt1aACk1MnN8KhW4XzV9KuuwpZXeevCd7rZ22",
  "key2": "4eiRKc3kpcov5oZXCPZr6P3V33NtBwsN5VvwfiTDdjGTuVHYHXgoEDwT6pF6YwZbx36FrVfu9vVqRjAxPKxREfRf",
  "key3": "4vE9wumvTke6tFNjMtPbNLbZQ6DZ8nBoojCD6G3LQaEEiokGqLZ96cnWGTfP6BAKNF5zos8tbzsyN21SU2cE6E49",
  "key4": "2yeHJArVVbCQUA7BHKs3gfv21BCacyTqa2Aho2JnhUXLyKYrdYr3cbyPgv3zqbXn4dD5n2MciK1DeWvyeUcypM9q",
  "key5": "3MhNEqReiSiFcjwtJ6osBMYxgbuW9Ct8e2rtrJjj7BmoMyNzYmxicRFEZ7qXvVGudcvWzKX78XKbWvcpw2m72DqX",
  "key6": "pQjjb61E7B6fC4RbEDDw8PTgbcJCgpyV1BRVoJ5C7R7ubR9DJsbvDBsFDik2tmeoCqRrmpaXnngXiDQaLAEERZ8",
  "key7": "4WGaACb7BB9YWtTZ7A8cYLRwuQbDEmsRwDxCafapgneKGzBVZi7ZNDmBpwg3ij2DEuC55qRM6xXmSjMcCXrXqi9H",
  "key8": "4eD4NYxhKhEF9Gccvhm76GsUjV3iXZctBAcwu32ChstKDey3GB31qNiEc6Fe3ycyvRPjnjgNERCSzkF6Qu5JVbnd",
  "key9": "9xxwgFeNSdzqokkxvrzmYpq2SyESA46hU3zJ2c5n7Ujfcb3aEz1oTcVDrpjJ9rQjKjejC6yzDRUW5DwPAErtUjN",
  "key10": "4Db3AaDGfW7abkQBvssuXbYLiSU1SQRXpJa2zZsTc8w5r1aZNgukJxZceZ2ihbCfDoZYAUgGFaQVbk4vkP7owaUm",
  "key11": "5gLuR5ao9PAaSodfkiNVUe6BwDzRk3rxHVWNBaJSvKS3djuEbaRQdJo9ZTcyd9wSnQ2YGGeHt7K1fmcSZYjru8Gx",
  "key12": "KHNT1w5QE6XV3qJzPMrNsJpgJTafo8JapkQ8SEfqZYMT1zb6F5rniTSzp6efZy4oBWAjm5A18Gc36NS8rqHrVKo",
  "key13": "41aaWMXgDBapWyvQmku97CQLojcCECNxG41WgcBfjfdX1RxGV2WKLmbea5moHLf6Nz5nJfM2MfqAcbikhihiiL1c",
  "key14": "2Mi46a82KyCFAQm11hkyiJiDQgeUaUXd7dWq7QBy3Stc8pGXHiXZYaNCZWzydKjGRwqhxKutB8fEevYm81fHXPBC",
  "key15": "3WZc8QcpENw8bytGUuCAxSQHFQk5c3KyQBnB8Lpd3SGL3guafNxjdywLYEw5fdNGytFDx5emYaJ8kXqBX1jTdfNQ",
  "key16": "hHoV7DEtD1k24BzudgsSzsjpoW1Wr1yZBDABreCtuHSecwK34KWPfWhuyGLzV7CnTc3BoiZjUi4r1Va5r36ncM2",
  "key17": "3D2VvTWrkQtKmjEC9NnVZ9oyb9TfRZFvqLThgwmeAic3QKPWHNnif9wKUHxCCoG6b8EV25jou8EteaQzmK9qZ83X",
  "key18": "5MroUhk4VgSkeWmgeqdJWcv1rqQy9EGrkEHCbTYCDkTRFuGoDaVAKiC4pr4FQseapAJw2Y9SuM4UC7NXto2ef4F1",
  "key19": "cdTyzMPZ5xryNBzG7kEyEsv6ZZa1m1GaxZFR4Zs7wcTifMeh3zXNBfLtrYaWTg9BVeA4NFSvDjahVYTk97b4qNd",
  "key20": "3B9QaWQSzQDiz5HaPg7BtrHFuwYsfHY2ZFm2MauRPCeEiet2MptgiH4nQcUvV2FHWeHjwjcsYaz6BU9KNBuxst5j",
  "key21": "3bWUkdvJNVjMgf8AsMmF7wBxheb1J1ca9mZg6aAMFFGp9dLj2RdahnPqK62A7wpY7t9hr8ZRYPfiwhKhP5HakgfR",
  "key22": "3EHKxVJd2Xyq4rPHaoAQ4E4crK7Dzryn9Ei4PdU4HHnQTe87kGJtYSBQzidUc66bqGG1rsb35mfmU5xXtkwENncW",
  "key23": "5rYpqfA4cff86RG6axX82jyhericrkXXrB8RKTsZCtCtLG7tqtPNyCtXErso17nRWhsZxAxwpCp1N9mTLxbCBHLT",
  "key24": "2L4GhhiHssyyo6wdLqReMcKMorEpGNL2uhEx58dmD1nspBy2bj8VGn7VF13ScuzeY1yinP8r7nkePghNvtDGbKPs",
  "key25": "dB5mGuKbCXvDoDQvXj5z5iDU1VffD2RK9zufLcmTNCad3bvZmRf5VqyZx2ayJvHVgWy5URVfHi8ta1BzuCCfF1j",
  "key26": "4v1GdveBXs7UxrqYe1gEUTboWqi615cbRixnCieQEJwam9BsBPQXVPcxu3o7HTghhNAtqDMkYvE5nQoBkjaNfmkS",
  "key27": "V4HYdYBnut2XSshzgGgFb33VmJSW6uBjp6vwDzjVkLtRJGAS473q53xKgKMoCtdDUTGZoZ9XKxMcn6oA3XSfKaE",
  "key28": "29hKbyjtDAqPDmFUZFC6LCUkW3nKyHPTkhAWCmeN5Hrp4dAY72khqLjaeeq36pkJDnxwv2i8YWXgvLQSZxMfSqUT",
  "key29": "33wXgvC6htLQYc6wqhqUGAJNVLHwUq86MGJDkNoatbe6oNnUc7NbcZ6P9CciYxfGFG5d4mWn1fPayV6C9tpWN7Mf",
  "key30": "5VmweKPLFP7g5yNY42q4rBZ3qdvAn1AcaxZQZGWFaXzXVEH7MZEG6gJDSxATY8byswWagois9XVWM4LaBnj27s3r",
  "key31": "4rnBCpjgkwvbxmLPfwU6DgNn2eXiPYucA745wq5NnBXRUuSuoEeb5pNRJGn652FNqjErjgbn4eaEQfAS1oZs911c",
  "key32": "38ubjFSC3UrimEcHYcVcK5gpGajwKh4Wk9n6wzP9JavkQXTLBoaCxrMo8Ykkx1v1i1xhjdgG5e258tGTYgpcdYtu",
  "key33": "29fAHXZU7bcAoWJs1MuLDEyiBuRQxd4qmww35rDMtrJSXxwPehgdBbpQkZz4QzesGevXKdbc8stbTqqrZELAtCgM",
  "key34": "5WeaZupfaiXCDPMBJkwpGSzmNMaP6qRH1V3KVT8o1FNd47eh8AVWZk2BFeP1T392j3XXJLjhvSEaEGLArvN4egwa"
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
