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
    "5SkfdiGn9uGiEbvVkQRRYhpWxGfseksCW3B7QhQJFh5yvu1emLEy93ZStcAhQogfHRnViDgfZmwiEFUZaiu7UmKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t3Q41vkvNLSq1EuwudozaAz96pegMbKxxtzC4h6ALEh3ppjZChTb2KVdm2vzkqWx4dCqWyYc3qVHz1iaFRRUYbp",
  "key1": "ZLypGRwowiV8zXpv3phVUgve9NeTeKBQBh9VY6oZZmh44xHaCASc8PmvAiJ3czh11ZKGp7JBQU6cAv7eTywLLXD",
  "key2": "2zzYortLKZUg73ZqjZzKMVw1uq2SnEUw1oMVcH7gnR5dPPKnBp4X3pvXLntZjcy2McdAM4F4WvzhKHjop9VfPVQP",
  "key3": "4xpKTuBfkY5V5FXZDBP33wyGPEfbjyWi6kuZ3xccjgvXNeL32qbk8ifUgvV5pLPbdfcGfg5s6ZKiobtkb9y3i81z",
  "key4": "3N8Ss2nzNUApE7SxLTp89jDMrvWerocuW6MuZnK83BTjsK3UBeydA8y4Yehg5rnmoX2jxpWvt4rkN2cEmimhPUMy",
  "key5": "2pjWAWx6sSGRfdFUpZopWJexf1DrUbof3JeAB81D11vQYHEunuhkFq1hpQXnmKads2PvotrH5s3bJjA4YJMsrCS",
  "key6": "4o7YVYmBpvh1BRxPmvK1gRkEZ48XpyfV3te4cjv5cwC92p3n4nUCkq5LE1ZHgynSo9MbxpiSvNe3xHNGdjwdPwaG",
  "key7": "7yiuMfsit2BMw97uVnRNZkNv2v6Hva9Knz8p3VkYBUZiaKX4mjFXKb3hXnAoZEcTWjowpqYEcwmo9FxjLcD8XjV",
  "key8": "74HNrF2ZmWtkLbkqTdJDa8yV14GUaGWzZRzfE8SGAk4E7Bq3VBtFJ8bD4GqVuuJYX1Gmo7NWkcRjFrxFc3ts1gz",
  "key9": "2HrJrjPGS7QPrFVoXEymdPp7Zs554eXLQm7QiwVAfti1BQFaA2QPNvKfQXfHgAoZ15EsN1Qp41UFvJG7S15FjAWr",
  "key10": "2AgzMSQdxY2ZD1DMP4W8RFt7FrbgKddugyK8bFmEBiHHHkKyk3hboK3e7wRphf5SDBQyQzFBMUPxQeNuXFUMfHxS",
  "key11": "bvfQ487M3tTd6Z9bot5TVFfs4kt5bkUkbRAtbDc1dmk9WwKue985hqiceTYqPuPLocoV4G5WE2nqaJmp98NL5XE",
  "key12": "22VVx23Xg7JtFR3gzXawoKNbcpY9Dbt5j1XnoGtK9g3hJfgW9kZ4MXQAJ8uHkHcd8vE6QPpooJuYvFdHcMCiBXH8",
  "key13": "52vu5RDRudpAKBHGg5QHUJXqs7mwkuexqhgEAJJ1p4fdnzeD19HDHVvgBMsTL3y7AkPbwpjakQVAFNtNr96d7BBi",
  "key14": "338VzNXakCLQC6N1sjzkoiSCsJjiRnNavX91ty3DMH5thUGK9rYvajBVavtjUfXrBvGMfBo6v4y7CZLs7gDL7p62",
  "key15": "3MSu7Dde8wBJQkgiT4hScYQcsnJ9wjkwNxzZS4EzkjdQh8akk3A7c2eJnwG2VoVPxNCDJ2gQkbfb57xvVPYUxXKq",
  "key16": "4ZQpK5v8YVd8LjCvzVNd5ZhzgG5sprTmYQtfnmAvvPBawj5Emafs3Jbm5wDe6BUa5Gz6PV3NkuyAZ5HsAsSh1yCp",
  "key17": "EgHBZdM3kxWiFUh5QHmEgSHhhVGiZAAK8AE9JKY2ew2fHnLAmRgYv7pR9KijtTX68BuQu7iCAtPXiE9wFPxVLzb",
  "key18": "5mm76scwdrzvQHhkA6ZRFy2ssyxrYyEE6pR2i5fkKBMMsnBX3vD9XtQwMsbBMyE64MVYpc1EkpHv8auYaabh777U",
  "key19": "iud7DKAfzrDLEGhtfEmJ9ubhzATxim3CvHQY6cjmDyVTzPHyzWjNngxVB3hvRqMCjiyraE62HGaf6Dzrpf5YKfP",
  "key20": "2zcqrCFWc6CSV1qiY22MAZ8A4Atjm8V3atFzdATC4g6DQzuPLv6qBwNQedPNtQ6V7woEtq8qj5d5ndNDbEBYR6Aq",
  "key21": "3ZhSNYGiZYA4ryn8onLQNBugJeziYGteJtDsEuQSPy8yg1kT1y3oKe7ti4Qp3HfmdtitfaWXWSkKaWizJtP9Bq4b",
  "key22": "3hCCcAsqP6DvV5ZAgv8nyznPGbLfzsnbATzY8VuJxJBD1em5iX9FHo63VhA7Y47aNdaNVU2kqNVsyZfM9t2YqH3G",
  "key23": "4kQJhCBuwij7uHkbGeTBAw6SdQ8cuwdRRJEALRufF4RRZcZe8eLuCKf4tqSbSsKE9B3oRt5z52BrJhyBbLszZEYa",
  "key24": "2tCXRLHcxCTyGxiRiXEiz9i5rboCoCQwzmPCX4G1qsjWSUxXzyWaG3kHuLPVGDNvutHX3tmybq32xRh6CEZ6hSYj",
  "key25": "3kcmmyfYdfysCQi5XNpT3f3YZUkQ2DWEZodrkt4iuyzved1CRJn3mkbND9xw56uigzYQ1YQPuECFwRqj3sd6G5DW",
  "key26": "c5RyFG7iYGPjk9993dppahXnykCs6u9rzaGSrNEdoSgBjZtC9ik9SAEK2qFcsKHowuFK9N7hyy677TSEWZFzKqB",
  "key27": "imC7wHWNbWB75eMcGvJFxqjzmuvGEgKcLvmG5bcTzWiQ8nixbbQP48tVEWUfemBTThtB5wLc1cVWHnH5JXWiDZF",
  "key28": "2FQwRHmu2v4DnYPScqa4FxC9ajUWg95mwaXiJ8ESWvEU7bd2wb7LtibDBGLCNJFRS6PJWoxvhmM881gyebeKhLHv",
  "key29": "5pG8AFuBQXimRD9r2iMaYdwMMcNSB5XZZcxpbgThiuKWwuHCtZbjJ9vtMkbto2DDjXDRu8GJYp9phUoYsGxT45jo",
  "key30": "4dG12CL5nGN3aYuWb774SKETeLGZQjJochuCwJ9w2u1Q5JB3GFG1meA5Ld2jGvcy5HjnUxufs4WfwDpaRx2F49ay",
  "key31": "5enxsXf1aKzSZy4KXSQgTcunfdaVFSoXRrq6WkdTwm56fAcN53iiF1EyMWCJcco1smuVejeAKhztAr7obWenqZEs",
  "key32": "rANCSE8DQsSckT92gz4XDAWBVQeqhyE1Xtyzi1VkByWsvtBWxLQ4ma55vWkm55MBtukT37nyWzpHzXTGH2WMyJW",
  "key33": "HPt8mC1H99H7dUShJwXAEzQkvBZYXW9DXsbcsiABKmJSsPhMrirW5rKLsbC3eWf9eJzutjCWPrJJPdT5tsQo4vM",
  "key34": "5CNp8fjUNuLS6yiaNJTUecQwivEqKXR7cSGGFvapXktG5KTYsZhJZDMfhy7Gj5EEXqsou4UXyFCWeanwdWNjBEfT",
  "key35": "nKj86J1TLSWsYLfQEQjrHJvcfgChpkPrkihee4B4dCu2VGGoBBnqLMg2vxUoCoEse1Y4ohMwgUHkBCcJW9ePQqt"
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
