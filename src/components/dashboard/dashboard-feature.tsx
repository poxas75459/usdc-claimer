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
    "5fAbZaoeJ3AmR5TH2XrbnGFYo69SuQXQsK5KVTob2FTRwdAzH3YpiR1dWteeYPw8im6pxiaG5W9dmiv77vyiE7Fm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VyAXCuTofvKL9NP9mi6MY1DuczNcr6QsB3L1UdnUt1Pgw92ZgNvW7nywdGYkqhq4wBfLSNwtSvHoptTNxpRP6Xj",
  "key1": "4sm6V5L6ofiraToJwDW5XfSzisQU8hrn6JNFb2RFAQudjm1U2BVvVJa7F7mSdzJ2cd63i7pvMJvpuiHHB94nSEdq",
  "key2": "5a35oyLMj4H3VNWRLqRFt4n624DNRoasPKheLyr11BxRK3NJAJvWerNWuzGUQkXpKLEGKfVtBcVmzLi9SxNXUWVv",
  "key3": "4xwpU95WkFpmJ9eFuTuC4iyT7iLvMhGe8safKyjUGQSspm7wGCNKBFRuzncLzphNDXkoEWfuLb4y1RoJ1im7FHou",
  "key4": "3nub88AohyrPEiGrrzYGoZ1aDqWGGBzE3PgUna32ELoiHcZJoAWBvdiUtQyuJnC6iwVhYiAa5mtgXtKw5Hg62qYh",
  "key5": "3JtyWNswLyFo2CjHtQf3kfKZ1Xf1eWfQdKss3nMiFzGCVkbePvo3c4sUzNdGhQEvHZJ2w95v9vgeVMwwcy6pd5Jt",
  "key6": "4exsmaaTi87UrGMDFXD55te43T3VX2buRhRWoxCQ7NuE5DRUdDQhE9hqruRbitf1rM89FUhXA72TRptWk75ZPX48",
  "key7": "5W6MJooiYnxykCvXV4hii6ZbBS4g78AmT7qF3862xRXyQTKA4BpX7GRsBGFHWpaZknVbcM1w6o9zduAQYdE9tBdv",
  "key8": "3fLzsrghVEekf8dxPSU5HbempViXYLHSjYDxxWga9jt3KRmM3cXY4uRqD6q2MXAV98P7UbmL6jRBXdaosiQMHZVb",
  "key9": "2kqXH9JJefPKj5u1hkrgNcaitPysWHQHwJj1ehYXHQ1Jo2LipMHZoRrB6s7TeEd4WtSbNRioZ9QMYaJyaVfjHawn",
  "key10": "63zAmeS7G3ZYtKmukpPxPswFzZJsX4uVizr7v1HmD8ikTfF6JC2JwJZz2ghhoPUXV4UoF7D8FRFpws2ebREwcEM7",
  "key11": "2Tzk1H1kAhM4rAekfrTuXzjNpiF619e4QVWvTtHB6SnEJgaWWY9psXCncDietuTBebTU99XCEyQEqUkfQDHmYheP",
  "key12": "51Fw6kFnhDWpMcX9hM1HipbSqPSFZKyGY8Eu7FdfVWksMBCYsEVaqxS5dFUQaXf1ENi7vxMqP97wZqWsomo2Nokn",
  "key13": "5mLWoCsKBHLnqh2AfKbKuZ7zxK3X8DrbspCuFt8m9uaJ7KoukGv1nM2tCcwgBDFncUtM6raBGRfu3hQoBAGceM1z",
  "key14": "3xBR4AUJddSQjsoWcy2BkhjH9ocDXf8MSrb22SonpMJ1WkabQMcD7vkYzvrjqJz182KXpqS8EEk3aHXozuek2RXQ",
  "key15": "4cQBYdr9Mgh1ohyw6CkVqiuzm9NELzxxh2LQs9pVept9LLsjrZ6TQ2sLNFhDYbjasr24smumAt3bVDdpGDDm88sk",
  "key16": "npniNAY6iKsYvqvjqa2Zs7hSJufXztwDJcfAqX5YyKP3VCURZ2oFg4pKa9Fn9SSD8UUq2fZihmjLHVNeszkn6cm",
  "key17": "3gXZc3sekhfnyZ4Hs8JXxDgqovNvFHGfqLA9mQHZDHBozzyZttALVKG1knTgTtzDZAaGV7aArVswJKoDdHuejACJ",
  "key18": "5pH3J8mj6YcDJHc7kNxsKy4wiGW6tKpBpefk6SPtB3tXtNKuCMWbhAL5nVbXd2je9nVfodjLBXJCEzBhqvjCEfM5",
  "key19": "qBMCt3LFewECKQjrQEUj3gof4vbS7Ssi1sRrCjxG5cuLZsMWLNmKRSZevLU6z52M8CubgXWQQfaS2KAQuirKEoQ",
  "key20": "2kizLssbf6kNdt3UeMpR16EJdqxu7KWQhHnCehuXP41MUoCsVZEHX9sGUGpXqztnxeoBqe9GJS6ox3v2S9Qg5vgq",
  "key21": "2MvkgvnAwzEQ37gBNpQdKNgAz7iwuRsmMLyySJ8E54yxfH9kADvSczzofmqhRQDhxUp5n2RSgu7patfBA1cfZVEu",
  "key22": "5sbK6HnLZ3xf5EetZPyXStx6mygSk2x79XBFEXNcZACfTuHifqdsYf5hCtiMbL17dExQcQHP6KpHjKq8CQED3MMd",
  "key23": "2NXicNihFcbN31DtexSbJCneLHDazxAKzUNhefkF3fpyDeqAHtVJgXCqaYnreqmadskNBsF2cszVAjTmsLVq91FK",
  "key24": "5PGd2Rjv9fxuffCbEv5m6uzmhSn69NfS9q2FbfoA13EuejEk4XPguDxF4LANzGUAGSu6BGbUoXC7ZD4nJ69b6cMs",
  "key25": "f5UWdUtnqcocBbmjboZrP4kN659FSx3wNPnSwUCK2av6KxekK3sxUeKtJ1YGPn8ZuQbDwB3w7DXznSwrRFekaZf",
  "key26": "887WShisyqz8Bd3n3grHNXCv9SxsQxnmH27YV3vsisrmcpPhyiNbQea7zk4e6oMR1gnPii3FgHBDjKGHd1RXGL4",
  "key27": "39ktQ6JDZPMZFDcsGpCknF6gtjVHHdMvJxMbTVisNhuUZFCR8x5c11vxLTAjrWfyU6TrZFdzZNpnCDURFwZQoSna",
  "key28": "3dfvWkSrcBAaj6ndZ96ZXEXzHNsAqQcQKZRo6qWcPp8cbSKUGeuuZepVZzcKV73T2d91ajGjYxTWqJam7h4YYkLD",
  "key29": "2pAyJGF1TAiJ3iBbDKvoq6VqXD4Q4zf5NEBfsq3suugCz6133ZM2LZHc6cMzwfpUvB6UWa18RPbfcYWQsiyYfRZr",
  "key30": "2tS9d8frKrP1GRimhoFRWWf3M7n7BYCrtDcDKsWmjEwa1tbCmEFmjPaiCggoFKaD796mNZnxsxfuJYd8hfeqmnw7",
  "key31": "2JbiKGmFea7YUHo4tnWYvXZsFALo1WshvxmtrhVy8XQe4kjNwRr1Ufwt7YzLUctarXq7fjcRwBVgGifzRE8s4uha",
  "key32": "3tV3gZq4UR31hdkGkHuBzqTvy2Etavwke4LDsAwtGVKiraNxEh4PwkDZGwFSsrFY9MReB2WKt4w52VWV24c5JgPa",
  "key33": "26NJKWZ7MBk6VuL6RLkjfRroex8ynsXD7Vvp5eR55egpfc5xUKZ9ckcv7EA2yftEWkxvqH7xroc1vSaDPRPbRGzN",
  "key34": "5qt9yhQWViK3fkJipVkRRQd95q4PhQR5JjzqVkYkspfSQ4upD2nMNbbDmd1drSMFh4aDuUTtLB9JUqWpQV65iiJv",
  "key35": "4y4JYE3FAKPqejgHtNWKHKKDGhXGiND9VVcAtSU1va8iJCRKA6CFsPxDBCaaBHkmWbU2QWVMwNkxpmkV2rxwFzEc",
  "key36": "2srYVabaQRFQRGtAboyggCPBGDaMThYm1RqhKXGhakL3J3Q4b4URCX5uvsUxo3JoetJPt5bXPcuu3Wa92esRjdqG"
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
