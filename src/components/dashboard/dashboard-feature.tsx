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
    "65SiyRPMvpFHzBY37WWZR4BYEmDkmMWSPjzMDWKSU67bFjjvWpoRo2TLTgziKqrxqGNuXrdyUCnHsdD9h4hvE1ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QhsgYdQU2nY2H2g6a4tnKcX6wQX51ShT3hRv7ytqEAWHgNiMvAYmqDshPEsTQSzrsk5fTWMxE87sFAhMHdDKESF",
  "key1": "3n38arQUWogHF7UQ42HgS68QktkahJUAF28dP4Q2kU15wEBwsFR2GJMRzcbz6xSxyddDTUckjEABHy97iy7MYSsw",
  "key2": "4SvK98rAzPUc7qSA6isnFrU4Ffc4swo3GsrRgVziBxYKsFdaGXMhGoJeu7P3NVtqgfQS2b5iee2rdg4zTMT91sWd",
  "key3": "5CzYiLCpL3KAyjvy7wJwfcs1G2uDCf46zXfXaYoY1wogy5XJKusNLDAz7148wNbzLFtfo1AaCEBted3Sj1yDrg44",
  "key4": "2TYHkxXEhrvgZpB5cbeyp6YbTKfCm1RwgmdWRCQPZXuQnisrAkUgsQZzxRtp7sKkR8B33GSAQHKfYiQCA19uY7ij",
  "key5": "48i4MHsDuUxExrJGyfkZwFniwhoTjcXuJ4AAmTVQ6iJDwD7NstZuWmznYqNPSBpX5G9Hy7gwduEsz56yK3hE7YLX",
  "key6": "5NDKuqd3LAvPL6Zn14yPSTPBYJXKdGNzxwuCdKTVKrwQ6uUgSVPamZN1mQUyGvkg7chieatxqy6QPFsxVNRVhf2f",
  "key7": "2gVffEw5T24aT1o98cAeaRChZm3pgBJV5cXyAD4dznUtsT7Nf2cb7ojEwTGDF3QUiSwsLKuavsmnigg2zka2kBdi",
  "key8": "95oa5rLEWb8cZf5hF9MbmKRFBaSZ7Q1LMhdLCSF3CQyXYhrGc6BiD61nDktJjEk1wpAZ62oWLcuXYn7FGHU35sg",
  "key9": "61FaTRbfNkQpNWmft83nkdbN92fAu616oVQCcbXQppZzpFffs5iMfX52Si66p8Zuig5BRWg8kYAg6Tb6sQSrxFtR",
  "key10": "3DLLs3CRiQbDxuVU22jxb1Mt1JpJUGE9jVAe67hjJEqa2Hw6y3LkbKbbmgdCwCYA6Yfhq7FvjCSmr21yM1bn4e6q",
  "key11": "4cqGUmqe3Evrm7pE9jKjrqk8BPQJuqLfa6N4RyLve6n4JMuboHnaZk1P9k18dVwasMzx9MesjbzUhjaEEHfMF6b",
  "key12": "2BYCqubjfFaS8PN5t6RFYbfAKiZDyFSjvcbnHzkNdA38H3hYXfUQM8WkJ8HNT4DdHwNKdnyEeALYBqvW3FxMsncx",
  "key13": "4QAuqxVHApzXVaaUck8b6h6WK4DzHyWmfWYUarsWiscdSTLW4L8Bi3EH9VbzN5Wn6UWAyFABjCfo2gNJCJEsAUwZ",
  "key14": "2FeQdKjMZpknEcNBZHqmFW5Gqm4s9gDCAJxVmADJa7Tgk7tVBNbWvjDWw3NRReBCo29hmRHgou6QdbXAYkBJZPTz",
  "key15": "3G3zmFq9mNehrCxU4rStR53rJYxwBz6HHyD5Dbydwn9zjRkhoYUk8wNJj41MpbCdLuycL4FLCoiZTgHVHPffThjF",
  "key16": "2oRFNNfCGWskd298omZK8yh1rGoQnxAd4bNFvVLJQEVBywHLMkx7ag1PShbcZhudi9VVyfGAzpcCSJvQQbChu8w",
  "key17": "3Ldzv9JC1nWfhkWUpWZTr9tEHrrqncpuoRH6W7WfcULptmK1Jm4EmB7Mw9uhoV17AEzwtZcCGPDKkba2BaucAFah",
  "key18": "2zspDRxmiJyV7NXG2s9UR52UHnNoHXXpSwnp5xNmtthiGEhdgBsTgxJ9uq59mtHqreSepCofRf9T6RmK2e7j6qRn",
  "key19": "2KiChKJkQvmRC25rFXoGPXwkBpzXwhrKAbUqVNjpo5vvRsh5PfixrVw1CDSbSfdEp9KQSsHcec6pXhJ3ExtGTxnX",
  "key20": "4oF1jLbRms5ksR2YMDJ2892ZnTvcw3JBzcZBQWzaVFcCmzVzippiSmmoyfCQ9PHL3ndrfUo1opzaztiywQ34m8bW",
  "key21": "3Cv4vhDdhUH7RQhiF2VZuwCmUzZAShv7Ncmcc4y3YSHLZAH6ayDPuqeyYc5KkKm2KGSZkP3x3SaYv99jNe1MJSgL",
  "key22": "2kznV1QuZD9n5b8nRUxhbt88FXzuMfxuqJYN6Cm9fKfX5b2bm3UtKosq4kh9rc11ts9RXi7af4jjsEHUrgYpmZ9G",
  "key23": "5Qj1hWBUiJvCE57HzHekGdzs9Z7SpMo45T4ZPCjFCG3FcTw6XHvEcHo95AWXDehaF1nkYNKwQcuAQ3JEngCwC6n6",
  "key24": "J88H5WYYJRxRZgd89C9AypaXNEMGLxBVeUjtj3A8UxrA1Nzvvi2eGjnmiTiFTog9gQUNL7129pu7zsCsotrkhvo",
  "key25": "4hR1rbgU8gpse43Uah4yMAjoxVjt6tz352iswKCnHwBcTDp3vZAfb8zn3kwk52N7z4N2L21TWU6SUYjVoZUeZ6a2",
  "key26": "eDDhsAuqX5A8CWdzTeDGyG8N2E9dVhjrCQvDmiesTvyejzgt9s7Zey6VKJnoC7Z52eEGes5KbNJKSnssB8ZZzAb",
  "key27": "3dzzeVavjRrcW2cWuBenYEzDTp9xEZBQiU2ZDGF1Tic7cy1PNpCsHJbgpxj4iJ6K6NDCBzVtMuKPVxmBPBkcTtcE",
  "key28": "4N2w2hJWBriVU8z64oV68SYpExuVAERBacR4X4NGUnHAkJDjxgbg7bjD28QhYmoqeFKK5bR3fNh6zW2ttKdk8DQV",
  "key29": "226pjeMWhMpiBbhmaxRbLneVqLuD8eJuftpcnHiWZXvgT8tH2aVEJsSbUq37ynTFM4u4cdEu5SxwxigWS1vFqQqm"
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
