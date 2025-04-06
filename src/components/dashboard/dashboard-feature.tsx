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
    "4TzvvwGgFnsQzTboGY5tJVXtt2Z9bqac1bNtrK9PbRY2zProF8cjy7vjf6TyF61DHryXcAKBwRv7v5jBHGoqxRbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RT1k4wSXoUoH71ZXdXF1quy7UMVwEMqwyiXt7RAFj5jmRhdyjERM52AtNcmjFeyALqTvNgo2KEuZvEbEVgew1EF",
  "key1": "2fQxNXzVQdPMoTueW2SZ2hWbF9w6TwY13sdGQmEUQXdDnw9u31QizSejQGuGqLBF2MZ2qGkLqsAMLTJRzdWU8tFb",
  "key2": "4j2GMXPPphJLdqhFjcYNeFxWxLzhaeX9XZzPjMBNiNVHieiLPbxxkfctKGtdWTHn4vyS2Mpz3M5tZ2EGhDFBDLJo",
  "key3": "GwDKF77f8etCKhBPTWQ5EJHD8yxjcLjtk5sZwVmqH5nG6p3f3dF81fkKcrpitVndUr8sV9PGTJEpBvUEaX6z7uS",
  "key4": "5jTwJoF8kcRnVnRKb8K6ehXfXWekSnLTpooNGFEC7J9m69dGPwkVdTBEQos21gCSc3JFEeXeDnC9eDtysvQG1o9W",
  "key5": "3PCJekeKNcjPM1ZTe5FSQk8BkKqAqzR3h7w55dbbbBrB7vSVvKxmntskagMzrCnT4HV4YutnuasTv8TsTuo7nSpg",
  "key6": "4sA5yKhPDto3w4RF3wc37PHLmsZFQdiEGkvWb5Z6rYYsoHt77KW2t7FxdpybEwrcRJoj35BWmq74NYn1z7BjyFA4",
  "key7": "3KtUDuJGg5RfusamqcVnyKqmYnF6RW7wLasZGx8GvbJrcegdyc5RTTxKrRv11TrMfYaSuzVdx8t4YENuMorLk5KA",
  "key8": "4V6Wj3s8K5iL1MEYTtpRdAE83uCaQc4iDc989UhTgbxKy4op8xE2cPcGACfof52hfuUCtAi89sMB4zndSoTwk5ez",
  "key9": "5e1Wfe3auP1S67pAcE1DBezM4DKxFsfbUNEJ29BcY8nzRYe8Q3x1SYwJ8rEieJ7Yqrwees8uUuqbPE2n2xPJHVvJ",
  "key10": "V75ATmKQ2LrAjj34mtpec4JRYWm1gy6UD5dr18z7G6Mzo8JMLt6xiN5YpiiYNfLegQuJV4ZXEueuhvZ9YQLqL5w",
  "key11": "3E1fCehNioGosAtKqdWEvoRXfzCat88afZ8A6LPP6jS9VQxZZu2q4CGc79cBVymLvBwy67HU1fVLksTVsbCoZjm2",
  "key12": "4o6944LPAhE2wkTiQcSkitTv4BMtHMu5gHFdhayJ5DfUq4ytUd9h9J4fiyg6Q6US8Yr1PswbgkGrYvX3HwjpmVum",
  "key13": "63Xoe6Uf6Tcej4oX8CK6g8zBNPnNnh9mFWukUAqhvRdNaZ6RXTzLRKQH9HLZoyZzFoUKba3Y9H47mMLAgx9JvRwx",
  "key14": "4EFfpezFBB9bvR3u2DmRLBwFUXomGxRAhsBVzyxN4ERC7naruYrauyX9oMvvbBuZAagpcxuwUWFrwKouuM8JxeG8",
  "key15": "3E4zEKuWK8ReHjRF6w1gVtxj4LvSD2krgZTbAfgAffjFdXj7dSaZvfaAGERWe158L1EZmDr9UR6nt9oqYwqqU5Qz",
  "key16": "ojfnxmpq1kt3NoQX5Wk9ekKxvevtGozCCacjCbfmwAbx8hM93JCNVtzcVwTmnU6azKWpEAjWx6LT39fcwTSaz92",
  "key17": "E8ifmBshbjJcvRXcbAvk4X45EsQ2ZoxFJppFFm4WYe3D7Gj25MAtnK6AmnB9YnozPFksntYgVsLmKgLNsdA2BJn",
  "key18": "2doUrAAwWe2kVEmKA8rGAcYtZYFuoTCk6fRXGc6hoqm3nKZbCAH21iQBU1FqZEpMzuJfbiv2haBkwSQi5A9ftqa7",
  "key19": "5p4dQrFKD9rXnBd7VepwACcMWMhQ65YLcDWEGJQ8TSx9WPWw25rtJSJYmmAxCSY7NiLsm3HK17aneZ4KwvR1XQmU",
  "key20": "rPTYGZ3qiWCTQao2efHi8HE2gM35jajahDi16MGfzHfgEFn9K8nejT73epayoBBTtcJiutkbM478zzhLk8pa6eg",
  "key21": "4MbDaK39kxPcbcRy1ceCxEsgGEmyibXng7DPpu5zaf99v5g7oXYBKHXnBs1jzcgguWGYwRsymjfDprsLnnS4SjBW",
  "key22": "BM4DGXLhx6JFYjotW3MmsUWuqpHF6NJTcjKe7jJDiXUJeWre9nvURewSwSxi3TKvC5paexVqBTJUziTa864s2sS",
  "key23": "5CJjQfohR19sqD1UTABN5yxdcF58SCzma8Cxigm9Vhi3NmP1WU6tHeZKeDqca1TvL8QWp3ZpMMxxtyXhZyopkeRG",
  "key24": "34QcSzSXht9Z9qNdBp5QCNRowCijiSTT7EZHgSg1dzqQJ7FG9iGH1nBNWW2VzMqHqgfC6Vep47R9o1qwfJX5bVZi",
  "key25": "Mc7dQ6twKB8mjES4tHyE2gHcne4yzc7jnUJk27X8D6nFSsgZ3D257QKF1YJCB9jXbt76QE4uPWLErvFz3QE5ofk",
  "key26": "62nV9qoCwegsFj1hWc8YrbLPGCALovABmJrrfJaZ9NVroujQTmtPF7MKnmFQMExN8Khresk9vCewL63QRcwQVDyP",
  "key27": "2FLCju2Un241LvohsLT4zk4BuooSXCzk2VbPf9E4xeKgkQxdNvK6AWbE7AcBbsHZ3hcYYRVneff27gXRUvVFE52A",
  "key28": "3pCoEPbUAWJ6D7ZZVEpaUZfP17kLjJJyXFeDLCD3TgxTtaaSjarofoRam7ANEQ2VxvW9ZibUjzvhpv3PCQaakKLD",
  "key29": "2KUB9X9awBkg9j3W9BSRdHqYqsg9VYBVdDNWfcQCMJDZXrf8sKVUwtoGHLeG6am9cDgAyfcnWFbwbLcEEfzceG2x",
  "key30": "3y15TMyJT6iYQ2wgqxBRFdv57hWajZ5QHNG6tZWqFrHcL8zmgK1PGbtHrCgGYHczvcWfxLBr6fmNoAhR2XxmgGi5",
  "key31": "3e3uK8nnDqPUJ3hFtk6mgHkwEy2Kzv5QczLcKVXJFr8YFN2o8DBFEXYo3Zm9g6AVN1rSPQ9JF8TmnKTC6xcc8sYG",
  "key32": "rQapHDKf3C798oye2erBdp8Jt4YgSxkf8jSyTgrqQxeJrGDxN3XfTz7bw5Ek6FdfR8EUqq8hEkMPnrPd54CitTU",
  "key33": "5kUptgSgP3JNVzWiM5P5d82CSGfPksuLAeACyw1nwd9Pwq7Fx9m82xgPY47D1QrHdSL6aRLQ7VEKXUmsyXMaBbW2",
  "key34": "5L4UtnFXQwy3zJJfu2BdrV2KWmz91emRSbVKE5LKcBDBCw2qwRLhg7SeYE8aAdkMMdFSNaL9zChJBSExshmLpUp5",
  "key35": "2mUF4WSt2nPBPvPvPnNzdAf33dpXzcyTYAuNZtPFdxVY6ZkHmhmNtSLXvZFe97WdBzXbC8shCFJdFzvFdSz3ZR6",
  "key36": "yT3R7JguQRitHicU1FDVVvdycNrZLyaqDtQMubVHN5pNH4xSPKg7Y1xBruJ9NW3tcjnT1Ak6VVMVZ5Ds5oqaCHx",
  "key37": "65aaYFYELjTsrfdG3kP1QgZYYdMHxYfTgqVw2FCNmdbvKR9Vzm97eus7B7KhvqN4mxxAq1ZJG17Ts5rZkKQsMtpL",
  "key38": "NLa8vtNkjNVEaeeuMwocMoKW2TqZWfPfNLXM89xrTkQSdBkhCYUU4oYXH3aZho8B2a4YW5U4L5te5zvBEh4Xngf",
  "key39": "2n66v25VVHVhDhV9TP8F1ZqWErAhqZDRHpjRuTMnC1PCyEC4aYTMt8fAv3BokawtXVoVy6oaskvYu3cyCawTnz4H",
  "key40": "5kxAzKRR8ipsBRmKBNxbcb1y3Jkr8j58FSn6Aknt6DrTo5LuCsqL39M8ULU1FD6bkvcUynKkyHZjAn9rZw4hgwX5",
  "key41": "2pJb61M3i84mv8hT36zMdtVx8uvkQCzyV6p4YQMGi2s2v5fkrZkTANZjPgSjFuhDgKNQTa8ryubu71byGYyRpbZx",
  "key42": "rXmVx7HRxpjoXCYGxKkFPsnjgWdNxuSeLXFMKbXsPZGVELwmpkqoy6GJDdXN3Tg68f5dEPnyVybLKwngaTNsXre"
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
