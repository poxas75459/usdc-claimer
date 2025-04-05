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
    "X28gRTFdRLM39u36PnZBkAxDTdothGKhg7mEdxMLQSu9VEXJJyCVa9Y9tVQVBafuwD2q4qukPjgS7KFNMRAPi6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WW2vFEJxBhZapFpKWTbu82vBBNpEDeDu8YpXRvJTozJkSsLx4t7uCS7uYTPFTHRZsKUCr6sG5dMDsRpk47a3DoS",
  "key1": "5YgB5fYb6Hvqj78gDpb8zKuWsv1e1ZtP96tkLEtmSa5hbLsmXwYYWFGjxx9DYa4dCkovac6qQ2quz8HiVEcPc2vr",
  "key2": "4CyAcZuwKXVFir1WwweX1vbYdBcgHmewLkx6PTs53bhkHmLUwzr5fvB3viWHWBFD1FsxA6Q4kqyrXqbbx58m56Hb",
  "key3": "5BogjGHA31A94DfKoa4QDfCUtGKGpq6WwrQ14aGL4yApkTPeaYeQxzKY5nUn8rd25dY5aS9c3s4m4j3hu9S92gHx",
  "key4": "4GFaaUHSRmTCB5HqZEVj33VUbY8rSPirUq6dDc1YQrFdjYLidXNYDkv7dZUYnAVxyZXan4jGetHyUHAuLdAJbBvf",
  "key5": "59FtKpg7hUZvYQBYMTTfg5od42ztPyPHsKnr2HdKyQrvcDFQNfRzK7qJKtAYkot4haCJRMXymC6Cy6NAzA9DkRxR",
  "key6": "56hMY5KBxj9GwPGBdiXMKw9STcDPbWmtHUercLrWQwYfJqcWFVkLvot3fdyJrDr7TZ39D5FhagdHDsWdrLg6RuSK",
  "key7": "CExhx4Xjc4TCRhNWMMLC6TFHgQGXtWVbsssDsZxRpasYcgz7JRY1dbtCfqEbusDByLk6HTLRLAfRwMLL5Dfs4CQ",
  "key8": "5g35F1fW47fq7bU1MYSaxb1MQceYjemXZrRUbbAfZg7MUqbMLazTiTCAteYSfzvNdJSQH8upYNoNEiczgjtoLYbi",
  "key9": "3Q36T4K1cUReLNo28J4q763YsY8TRHoVJ9vWo4PffJxRg9BcZRB91548tU3B1haQZc7VHRNgF9zP4gLgW1NzNR48",
  "key10": "5PNeHGDsZCXXXxoTBn8M9sFLrNfMXJDxEt2SwwGiUiEF7BrNqGjifEMqUfYcMHJGvt1mVto1EbXYy6pHWW4LdiwK",
  "key11": "5M4BKwB88EoYTs2nQ1DnnWnjsVBfBiuNm6Q3vE2ZaV8F4sb4XQ7PAkvUVzeA9D9JU4JSdo5hdBy4DQhmZcEdDfaA",
  "key12": "2eCQSsHv9bPUcbcraChUrtBtZbgDMeAEJyHeEaKoWSJbvqfUC542riDKqWbeohq7zbTou8nEjcxNV5Dra2FjBqNo",
  "key13": "4ZwbbEG74yid1rEWEtDWfUrdXLvciPioBGMR1r2uyT2hLEFyC7X9JJkm9JyQmAazKkfpkHURwwrYFXeiSzUkBGzc",
  "key14": "2uRmQWiEX8VpqmvNvbCnxzyQESKkC57zUYdku6X9nDt8Z7LLB9N7qDh3gHzc7CcE1kXjKJSP4EZ6J7qt26q5U9Zs",
  "key15": "2vwBEHMG8diQTw6KuYsrjTR9zX9k2zK3QGhgrxhNC6Jn7TfqEmzDhME6RDjrQY5q7FZQesUnR6neGmY4wYfVESrw",
  "key16": "2N4wNdGfLv8UmXwsZonuLDyqZWUQt4J7oTzZxrhux4q2yRzWJHsKcDj3KscRoT7zPSn21KteW8KWHWcKQQATwfHu",
  "key17": "4Ch7WTHPcYkVVhfoA6CF8xJvZJqdBGnz8WYixmf8jcKHoh8AUPpf3DzaQ5EWps2bFoKuH4wqQe2tB8KzrgHpQ6e4",
  "key18": "4Vsuia5UhzLWFJgwir6RMLSYE13K9C2diF1bHEnuuu6nJw9c4mXHRECcGy6zNuWSGJP7cvxo6hGN5aH7qBtNtsi8",
  "key19": "kwav33xmR6wXVVeW9W1mxcVUCd1EXQHEEsqTYCgn7KEu1yuRvKzjk8jJ215nRT9RPjneSk7fZcEnxCEFccCk2vS",
  "key20": "3RpqTvuC8uwmnsrCto18ooRbVybnH4Yu4eDn1fdAGszPiZu6MTCJHBj82T2hthgvupS6FxU7g74KZPRAXs38zBfK",
  "key21": "2jah7SNrsPYZnkxKGoQJj8bre6NRZL8qQSxpZgctcMjmExPC7fJm2WjVRbVrU8fJjzxUAUh3dfpq63K8LMwVQeTU",
  "key22": "2wvMJcN973JyErc3t6jxbhxkT5PJFgPJ5Ekdq37dwka29HjCruvubrLGj9Radp4xq1CvPdVH6i2g3Qd2TuP9ghGr",
  "key23": "39NHXtHcxS9C6Xh5G2EsAeNaZgowbzbW1yeNqmJd7o9qEKyR5u6BsYqNuAmSeVj1K8RmtEnm5oZ1sd9Z88qiNZ9Z",
  "key24": "VVZRD6bPdXypkLFJj8m2S94MyverjgXtWNTfV8kE9TvTT57ExhyayAYVthfkxVEWrzLpFBCiGVWT3GgoxR8bkza",
  "key25": "2aAKZVng8FRTzHRkb5AmTjhLvqqPUZxv7qTLR7dFpfxLabB6aoTRQLnWQc2pxxjV5vNY8RDptRTXnAYVDaLijmC4",
  "key26": "31K8dHRRdChhcKU1rRygdU49DvdrX4L7Hghtc43wmxSMgFK7VBaKdn2Dqj7ReomGoxL8PjPCEFkFCzgKGpkmt2Bs",
  "key27": "2J1H46TEiwQU37oL735dam5yZhZVThUd7gv5UKUPKMF6BfTYTscGMi8gfrZQTkwfbuYKaQQv2cBGz7V9aYc8GJw1"
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
