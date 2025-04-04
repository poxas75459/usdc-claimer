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
    "2Ayn9Z4NVFEMjEKdayinzamZoActcVNRoPXjJYkTAwC5NKr3eMFeLUNvCJEPZhmvenee98shBmRyYfPWKq32PkUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Z9e3rapVXqPHevn2PQ5Ly28JNU3dTAWY6ug7KR3V7iq1JG9HQvgFUzzFPH5DBui2z3u3ms9PG7EPbHRHjQ916f",
  "key1": "3UV4jCMbcYvR72F73uH4HkrfT1vGAS71Efe5AYbh1kAWLe3ytn4qZw4CUDDLG56KGBdyArcW7cj4ATWvFdU4HLJC",
  "key2": "3vb9YLooPBu7DUemV5aZTn61aNNexBmPwvoYAFFQ1rx57npvKdF7p8VHX581hwHqi3mdeLn8gYd8GLQ6f8so75Rs",
  "key3": "4AGwwyCevBkGuS8SvXHn815fJSeMzsV3K1rbQ7sKf7qLYg6RCMa2wsL7TYdmzkhD6s6Um2AXCy9oatW5Lv6yqgiq",
  "key4": "ho37QdxWhZBngeYq3tjWWSDZBxvUuhZa3vwQnBqBsjXtkRdR2XwNErh8tNu3jrd54Ld7zmGtNe4bBJ84VBN8Cy8",
  "key5": "2y2AUcGbC3PHkQ8VJxQ9HhNQYcNLLfeCfPEBoUpx6sHWzSud8R4LuUYGLAZWocw3M8mUA6dTiKxMh96KVkpLePei",
  "key6": "33Xr6KEgidgjrnxEEG3xjrgkcekqCXfNNevjSvE2HPCLBJtFjWSJprvQU5EXcwApd27KZEYboGR9TBbFNnFfzwd4",
  "key7": "4ZJDSDes47WPjiB7th7hF5xjRmoMJRoNeAi1iZ36vQDLZ5w5wUrNPeHgRyqB9GW1dFksCXp956WwgyFnMQYBrWu2",
  "key8": "2rBWDkeheRHZhxWn3scQNF5QzLmjY64mYME3bgc8GdN2qqdGGNfAn7WmfHL83AYtzZMfJ5pjJPQhZSpXcWRGonT5",
  "key9": "y4KRwEqpNb9oeMRNZgDHtvso6nHuJcQBReXJnLbNBPU5ARFHGCHUdyMv523Db1XDLSs1kWN7yThQgQwZX55LctZ",
  "key10": "5ShNPxcaRGf3saY9iMAdeUXjYKyifPR3gtLcNwR8keHkibVXAdqQYrXShvVQQCmaBefZTQsJrvDpXG4wGBcMv8cQ",
  "key11": "5YXwSH8cHBSJy7W4V6hAqCj1NeGhg2tcw45rGjxHKw5pfEs5CvVZ7uWCRJZBge7yFYT7DHg2KjWWP7UNgV1WZWUG",
  "key12": "3sKeySkZ5idpSJgbk9wKGB6CutnAPFKoyPm76H9f4bYDaARggw2oGcTNdYLpYzHeTVCi4SX7xexpsQu6rfjSfKsm",
  "key13": "3uRmiw28kNTUkxwpk58tqDnbMZVyhWWWtGQ8ksrCy2xRpqe7BH9WHBmw5UWhcvC6j4zMAcHHEbNCfcNYyNEHrjXq",
  "key14": "2WPt26nrWd5tnYgm2VszPMzCifo7TNDGn8NhvTtT9QTSEZA4UPttaeCwyVnZk1N8C4f9Yjz4djL6xXGHJekp63BH",
  "key15": "4J6h34JbCzk35AeVJ6Te7SzU2QAj5pnjvqBt8GD7C5hQ9x7tRd89yCRLPtAWG4afBCu6KgexQiGjydGz2BKiEuSZ",
  "key16": "2mqTMfuLDD3csSF8H75CcMwRW1Ypd9BrrBWZpPE1FBvQPAVEWsPf3fdfQHEULJE6WQcPPo1rsgh8tPKRnxB3T4Ca",
  "key17": "4eDweyHAuE4MnkodpUfe8Q6TBCKEsio88UGJMxo1iPE8JQPZVtwZp1ynjN9Y8EQ6CZV3DZo5h5sCxeUEC7UxXX2V",
  "key18": "38ZKEgpvnYcJSzn5KRShNhxGpH85BXqddRWqktdYBxPAQ6gjvckMB1FY1YQVRqBCmLLw7TTwCNzkFeQy85nuL9VT",
  "key19": "5fPf2zbXzyqN3YJke8MApBogDeFcswPQDFG5drgUtkisbJLLbwkBC63rz65Y3rWuf6hXTxHVdKvhxCmyfcPgcnmv",
  "key20": "5otzGZ3r4DFWKy1qDcarCyBB9JhzGbVxqnKrCS1meLNZ1iNBhhaNNBZGC4Sse3Ss2mMzxXS7MzCoDPRo8EV4FKGG",
  "key21": "4CCfud3kJA544FP693Wmo3671m33F3t8gzxWxbKRzuGMYDYtDHCrrKb4i3VqtTaiyF785Vt2QKdJcYyBSytQFD3J",
  "key22": "2iK86YCfRNkwhwvnT1Az2AnSEtoMXJ2ycf53YXrbChFPatmbLmGT14ekSiM7VGEZsFWVtjopYsd1pKWDHuQFa9DF",
  "key23": "3ft5CN1DDus2J6NN9akmU7Zpm9DvbQKpiCYQe4jtFrMJhahgGPRkFyjACyQ3KkCxRFwYw1hQxj5YuFxtdeJJoVp3",
  "key24": "5mGFQVqua6E3z5YdJ1EAnohTPj7Q9TZdHU7VqpyF2c6tXSYYygQhYJs2H3zw9Jo1VR9rzwTE69PAgwdkNKjrMHbV",
  "key25": "24b8zrTFUczxVdbV6tAXat1Xe229b7L1swuCoLqXjELJUzt2eoQVBG6v9R8nu75FchB1msWjoccbfYGC6VSFmm2Y",
  "key26": "5f53mXnQ11sbZUSaGErojBqopQb47kSxmKcrRumh2ZfqvQX5sUbjR6Z8reSUkyKCnrduatthBpfxvYC7ibDVtwd",
  "key27": "R8bTB63XY6NSsNrVC2rhskbUKYZBRn1x6N2fA6GAcCKHojH6Wzx8pWzpYPKmNaKcz5ND9rfbwFGhRHiYCviDpKi",
  "key28": "3ZYtNh5wDfXMZXVgz8bxfAgconjhozeMSvtnoMNkoTaGhgtjBGSRqdyXhDo4S1sDP3TjQzfqsWfRmtX8Hv72pb33",
  "key29": "61vss2gWVqV73GfqnjXjGvR6cFJLNZd6BCRkqEpnaei4gUmoUN1BYcY2tJJHVyhnTfJLbQVCHakr5fXnFbWFhkvY",
  "key30": "aoei6ZjFLZHwKYteu7ikkN8Fms2dWki4boekKM9iZFeEkFaxTW3UninPP1pieQLVBZw6hRR1Fw9ESG4i3JU8Lim",
  "key31": "3sgZFAWNFjdrJEQMmoJK8egWY7r2AuVG1jT5beedqCXhFAw5TDanQdrsFo28rkC5eBxq3ceXD26Nu7uio9sR2rCY"
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
