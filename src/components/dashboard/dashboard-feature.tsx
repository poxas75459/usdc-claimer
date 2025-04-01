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
    "2FrHCotEP38AN8aon3b33as2Un4XPiZ1qR783P7SUhcrLncXZksySja1cUonJSpi6uKsEEZYQg3CVQ3uQYNCKF8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5474NVec1EaXfBYSHBxpmjmVTfztyvX3B1ct8j167VhcFVNz8UYt2pbGyUUiRAc6JWbvM55zcXMczKPFFBXgm3ee",
  "key1": "5HQyEfMCACW7Nd8JNBYyDSSkRD6gcDhVT18v6Xj8WtEovtj9vHFrqBA9wKYAmYoGe5dgNbffSBE1xthKKmDJx1FS",
  "key2": "2ZYRxhTvLNXeTfX5AVear3PHPmc41hJXYUwQGnn9gYmpcHbX33CGoUQ4RjC6MyPpRxSQCmFPHdPDxe2XC7WAhJh2",
  "key3": "5PByfFAfoafS52jfVjMWzPNkUMrWJDUSv5Wn1EfkZdDKuKeMcSjc15Eafj97gYTsr4hExfVCSQtcSeQuytCPCnDK",
  "key4": "34Why8nuTZ1aK6W9Co1gZgau213ArGyDt2iBQKqnJvbPwHcwqh7h547nXmStBwNCPyQ1D8sdntgNW9nv4U3RX3sd",
  "key5": "2wcMPx5EoYKbhGuQzD9f9m1mZisVxroS4k6bkzfzQGTGhr6GHobmBUq5gaEXnWELniw8FqAbVRRwGnEMiESJJtJd",
  "key6": "2e6DQYWyB6uDhUeaxM3nG8qBhLD9rYXFbAqBzGeAEssRQW8dGNgv5DjscZ8qGQQHVBZ9qNj9WV57hNdxWrTQNgH",
  "key7": "if68ioS8ad2Rm2bWCbLXZHBpyKaT8ULS95PgHRCqibAwddwo9Sy8zVp4awX97QdiHm3qYJPsmp48u9QzqjMJQvT",
  "key8": "4QyXTPzHE9sFYaYR3iiceCpe8ds6jKD393BaA3BwzWgkKjrMMwVtnWKaovF9GP4DuBi9sq4sq45d2DsVwY4wVg4i",
  "key9": "3zZe3ZE8jou11qNj3nigMs6yueGDHVGbjsTmQ6P9LBXdnzrkarD6eKHoqsDeDYSQKVq3uQ675GHyhQbuZBCFSJJ2",
  "key10": "bgkrDwdfnTpgxqAkt13Ee26FRq7Qehv3Vz7vqndrmV3yMunRgrfbxUK9MMC3Eprs4ZURaHAX5NR5YD7eNSjZP1P",
  "key11": "4kKGicWPmdVnKX6R8mUX8siSSfPP9SdP9m8J7us7rgcYA3bfcKFGPpXrVoNpwewhwAjg5kWpPwhkNXEMJMkC8aNZ",
  "key12": "5jWE9MU6P5j44rygviS9BxxmAuwV77QcDuWqUHkKe7G8aXMNGEQhfNYtS3EN4XThhpzskN7hSb5PLYFVQoQT4Xfe",
  "key13": "6y8o61H1daTVsfCKTZShRmcdTiLdauyN75RkgsUMbApfi9FTT4xAGXeDbiePhBDc2UyReJzbMBwAwvb9XZPRCd5",
  "key14": "4Q5iB7tfHVfNsSqJvEkPm2gtG1vTPRxbkGKynBuYzT2k31W43GwxSufRE5ahporA1jP5RYXEEPRz8EdZRvHw5QcT",
  "key15": "552gx79zXUMaquzPe9K2XuoZFfSMfPGojQBBUEUmWDPHt6rz1pCdNjyYKHJKmecouKJW9xediAd9kQ6K9teADSSN",
  "key16": "5jfZG3KApqCaUt7cVLqaMMAp6WtYbLYB5qmQWWn6Jo5pfzHMZDj1nFbJCCuVJsSQ63c4VNX6pxtTze5ax3RaM8rX",
  "key17": "4QHmSp3aqGvYQoqzpW6idVD7r8YgEtciNWLG7aT7J4uRQq3RGXkeQR2QH7yh4GvWR1U1fHaAqAKNstBojU5AeYdr",
  "key18": "4YxE2jvC8Uectc24jFN98X6pnos52b2tgHraT2QPaTdJPKspa2369qyBrzR1yzQXtdTWVQALg6F4dhhXH9bJYMCe",
  "key19": "3USXKqnSjPWqVDPDnBwicjtcYcCz2hWcvP4RBxWFjSMGkvDQ6qJCLGvQfKpMMGKXc1GSLuUheM7hNu44ap4oFMHs",
  "key20": "5WbAZcVV42hrfJ6mUJfL6P578QDvYGdXJW2g79MeSp878bS8YQzY7QQJabA8U8TnWhQyavPUehFfv5n6Aa1MRKMA",
  "key21": "2UTQJe8WqCnv9sSWWgxpQ4ezjP1VyUSUDCzzKukQXetMakf13r8dtTnumuTGiJNhZ8JLEWWDiV6veRoytjG5hh5o",
  "key22": "ciDQT3DATLnTBd13HFooyijjrPdHxMHUcL5fEuqUGsxWDLeDUVUjYerzWtEFw15d9ya4Aj4wfXcgfWT2FiNjtST",
  "key23": "37HxaeNFh1LHwuSfEjKGugfnHa6Tne2xWLN9BpjDA4nfzpvqFAogEN9iZ8sGzmbweLS7pohuPczdp7H1cqBvQpJn",
  "key24": "5YvsizWW1BuSnRb8JSDmpWumx4CidAfgUh3CmXAkWSwaLK6uNzVm3ns84NHTeTEfp9vWGiQSYTqKp7mQTCC9LzQK",
  "key25": "22zt6zrTX3neMLora71AKW4esusiz4g3VkDAi7XJDuCq1K6ggvRfJwRxiSrXFVsWn4HySzmoWjedEU7FajKXKYPi",
  "key26": "597ZVTJQXaa7KREvBPqrhu1ivc41XECwFFo9UYNFnGu6kJQmSELRnfG85ed1vcY67kiXgXKW86VjWLZ4ZhNjxmvd"
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
