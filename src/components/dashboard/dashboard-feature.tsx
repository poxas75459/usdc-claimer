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
    "3rCaSXtGnxPRVCFVkdCfwXeEQwQJgHETkb2rYK5oBt8PCWe4UTvS2cHWDUkowmE6114T715gpw3nksfge9TTPjqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AnKeZW5p81eroRcATCjAHvPf9fBxdTBPcmwuXcZNJxEG1rX7LgQ7aSJcgKNBChokYnDwYHjxa3jBuDRYDMnyj7g",
  "key1": "4w11StUL19ZBRyBnzrhPKPQU6kPyS7YdrpWRDBZL5T9KX4xeEnFhgNYQprGHN7dtDvQnPzdx8cTqCCoiyCJimZQT",
  "key2": "5NPkG44zNeXtC6vCcxekEhvsQrdn1LCEwo195YtBkACZxL1tdUrgRu4YTpm6Br4ayp7e42p9Ekou2gGhh7WBQrrP",
  "key3": "4nq5XeeoukSv91YoLny1kQ7EDD3HNKG2woMEJCjmYQrUrygC6y2MxFWDA6RPG8DNrzwd3ziZoMBbJGngCUssoFVt",
  "key4": "4bV8bBQ8MyB8Q7q1qwiU9Ja5qnsi132jk1tjihKYi8FEgHS5Ann6q2eUSmU4N1J26Fs2vKegtW41iNNmxPXQpxB3",
  "key5": "2DP2pDp42E5AFQddrzoZfi3vCe9hSF8Ctxjkwj27u3v6atAuk2gGNWmHVoP42SdBkPawGNSAVgYxmpaj1dpCNUcs",
  "key6": "26VgLiAqxe91oCgjvdbCAd2gVSXQj7jqsKGTPgbDonXy9xGtca6udQhtVrb6VgoADT1XgvX6NR3LgQCWwKZQBJve",
  "key7": "2pBNW6PkDgUfX2xpPmgDqUE556S3BA8NzrsP3D4tJbuGemD4tkbwyy56qgxbTNetTiS7LF43bumEqGmCZARL8F7b",
  "key8": "4yq5PqpcjaKdQmYDsjLcZzNScBL6JqEE5zZwrNpzfbNhr9LW1PT3vHGnxJC4HAkHqHpkKGajpRr4mL1DG5wNTfrY",
  "key9": "qqHGp2hve3tZP6tCmMcCH7x474tCJqJEp9B9SjMXK7DrBWytRYb1t4SoAxD1uFmmhL1S5ZSR7LutQiKZ2fyCtUf",
  "key10": "4DpzY3pzsNM1D3KydqMqTJVXEPg5rd6XnHVyoVRMgpicd5kQgL3RNk5PpDZ59fnWwWV64iPZmQAkAPxsrNVunbZj",
  "key11": "56MXS1Ch2GHHMYqpeeaRoLWSK2yoV1SgBdLD1HRABtJXit65Q3xMA4sGZFXjZQkmHPkerxS86RQtAvJvt1Aq2oUK",
  "key12": "2cgohtj3DDCNGXSudAYRqLTQcaDRCh5dKZrhbnouLLkQ3dzYvjvdi6x6dv1JkqGG92WLxheLo6UzUJJUc4umiWS7",
  "key13": "31DBrvD9Anuw1kBRBr7rGzxwRESiX3FjTM5RAj2oJ9GCgAm1qiBaWXthmfnEwmDEpSHcs2Qsu16FPxVAJikdB5xV",
  "key14": "637NHCJLTteJTBYAn7Cb3HzsUHxxPVsQ17Uc8twfiXzhJh6YbHKSWQiZu4rR47qdnGMwt5VaiUuu67QivAnvPonL",
  "key15": "2ix4obYELyXwq3wjSbkiXsVqe33fF88TyEuj6TEYiB8tSAWGaQJk5T7DhSXsUMtQExHCuyqMyfK88NjPBRQY1UVW",
  "key16": "3hoUdqP7TDSqu3hB9YoUp75tX1m54k1H6FGbzjaaerJ38okThZa2XVniVUfDciDx8Yv1NKq5NbSXU9NEjjQMiSwy",
  "key17": "3h3RZ9d523Fg5Mkt8fdgCToraD8b71o9hTJ3gs56Nh2mE7UJHmXx5MxySatUgX4aeCmk1j1K3VCwZy2bR63AN3qg",
  "key18": "2szNVmRHR7NVP42XymyfQkc7bauUdPYYvTYFSGueeghjxQcvqZHNv9HjhDXKpK3A9ZPTcw8G6skBqY2X63yYeYkX",
  "key19": "5pWhSspEcb72c4meDQH7YLQKVWGHhWy63RXzn4JL9HBrqwiEJ6yPR6CPycAcLdBn7uCbKGndbP83HXeJKustXsV",
  "key20": "5pxyV1j36C3GSyhhPYvXeC55sxTppbvNgyGTYMGssw365DX6ZKYQ94Yx3VBJwQ7SLA48UvEVGupoKCpDYhEBqdYh",
  "key21": "4FbrJyfJKAowAyMHC4F4sYynBwKpzp7YUiBgqPSHnYyFMYL3PQQvzak7MA5h2cLifYqyftex1xxoaLM7ndNa4NPq",
  "key22": "4dbtyTEenUeAxykvcmDsscVHNHJoGVBu6RrNgp1NjStDZWfmop7JKo5mxuZDbAo7vZ6ErWikqcBg4UJGyfAKMtdS",
  "key23": "26AqZ1ynUpvJ2FQbTTj7ry3HS8GSXqA1uSLz9nggCxuZPLdc7kcwRQ1h8Cv516WMxX8b14H5Y731DKb5JDt57Fdv",
  "key24": "oyrUpFWJ4LfN37CfC9E7JxQqMehLdCRVF2sN8nc3B23dQybj1Hnt4ZoYwdHgrifQMyfZurqFMTprvC7aPUC8a6d",
  "key25": "5r5xnS5WTJDmXCTts1mQmZj6QszdsjvRbjeFKwWKLHdbKs2CZNKzHxAdsbovawoteDAuDR5E3MsB7SDUnj616soS",
  "key26": "XJKiTjJEGLcHG3MGfhuw6MHeDdwee9Z9J1XLSbJ2JkTJoBsx1Xt8UDVSwPvfpXToEsjtzttWa82Y9LakK5ZvK8y",
  "key27": "24tVbFWSgbYHx9z9KVfQV1Nadt6dSjf4w1bZNNFKvNfgfMW9ry5bc6s5x1SFVgM8GqVnMWcduV9RWmg7fDQXtZhz",
  "key28": "51Y2v8NEdQLrwyL53xvWqFNFbp3pjfBBRjGYKtoQMioq4VLx1vd71arQqcVp17EZz1Wqm9tFmsNdLfpiSfEmKhJX",
  "key29": "2WRtPuFi3KD3ehruwSZGrqLFehmm51tPZNxmyu4TcUyPnKtRkBx53mUEn2WeQr5S2fdfSuwK9WiwDFDduJojQJU6"
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
