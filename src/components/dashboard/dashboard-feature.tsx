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
    "2n9xTd26b4QsPjNnGehLgXmmJEyAsTU3MdLqMPTDoe7gW2TqjVaaTHsGhsm5fCoNUfaqiFQyhQix7etETs8tTvGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NXT58UssE5fBZhVynhMEqASoBK2wWoQ1kgSmQUtjq8MLLXBkoQF2rbByYUP3fQRkC3qBL6TGRDNqdo31EBBXcpz",
  "key1": "5q7DkRCZg59PjykvPRJiesYxY71WC7zFRcMhgbZE41aeef47RWPgxSgUyo8Vyt1ndh5dsRHX9jZeaSGDQXNZB21",
  "key2": "Ju9NawywTJtgQnKyPKNe3KndBZHLfBZd2RpPEvyFj2FqpDNA5J2H87fw5nZprzpxZDwdJF4Z2kJmpKLw3BGx2rL",
  "key3": "Q4tUiyGk1Dj4bFagbboB1bdMT31g91BTCB6EFAYYwVSFbJ943Pcyb7qym1GHNjhJa7aMEbg4tgBdV137drkRAio",
  "key4": "4bSiXxCjBhQF4vroQFRqiEuKESYZT2UuHYGQVkUszFBkrJU5j2ruCui62fB3XiruiZJoE3o9yg3d3c1PCgX8Khe6",
  "key5": "vUEgeCAP3x3Wtg33HuXFLyK2MEo51NVB2BRuA3XxkXUFUHcJk5feJrjkKVxLnKxPikRvRpZSzrHCksNR6UUQybu",
  "key6": "PXZqmB2Qtv3HywdhLorUxBQJgefqVKAGk6cQdUT6u8MZrNuhPovB7qd4r7UUH9Db1EoVVahMerLB4bY5SbzaUnq",
  "key7": "2EquoFr1S2FpJcsuDt6j3UGrCT5oJwxL5gTUJp374y6Kty3GQeBEMspTR9A7vcnnLybz92cVUxUBXa5zaCqAdcGD",
  "key8": "5KofTVkrJ57Y82FdZFVZPuzYVKMiBtdjnBfnEBBR4yKFLkknpT9YUo4SwDatTcj4CpZCJufwsBQZ6wtQVLyoSuUY",
  "key9": "4tYMrwRbPT5Rfkq8CmkrzftFsSkHPRBbgwFhD7uA6PHaLimgoVd5WCvvd9QxjAz7WJwopDU56akVkdf5DwQuHvjo",
  "key10": "Zmyg8JxkuKmWvJu124gRmJnNn7f2Hgw2nnSDM6meiTMPGr9HcFaBqBGZdeLuPDmFWDHyqzBtspSJs1f1cATaJeC",
  "key11": "4JHLY3jBqrpYFFdCTEYzsDZDq5Ef9oF6gSc76QSbTViPV67RH6BvHATtFYYZ9S9Srxdriu1R7Zk6nd2K35SfL2ZE",
  "key12": "4WZfmpAGrr97jMaFo2ukYRCs9SXgecsyKTo9EfZUnyrbRKVuMEixcM3vjwDJhR3tmEWcRJL7BFwUZCBtxRdrnadv",
  "key13": "4CJJaHBQVeB7fDQs2a5JXRHSM8ExfpkiFZRW3L4t6NxdqkTUcbdGorBicG6yZdpEdNKq8owsuBYh2kksjgpfWVby",
  "key14": "3MrrRyh6uGo7JwFXmMCQg2WTFaUC76min5KoyZba8ccCqTJz7ZHB8ZeHUDb95NLSXTRb4LsmcfcC35fYiBXLCYbA",
  "key15": "3SXj8jwwvqtTYTSFctgw9i4mai2n2v4CYzc3LDesZ4ePfdFejXT7ZDnjmh7qHtCNVW7byR3ywqCn7GrhCBPV5TDB",
  "key16": "VuFEoge4R4iksG3cr43ufH4Ckhf81TU49UmQy7wmLbaeAEHS3ZgKpbpR3FQcsuUBTuJEytaqMvmDVHTcsX8Yfaw",
  "key17": "2KMY76EweQPeSgfnCEZZaUca3xsA5PGJ2xxnz6q9DGGC3nyzBpkB9MVFHjqn8c9d7TohufogtqocRjcoRLKcGTVw",
  "key18": "rW2WVFZELdHzXH2XrUhNotBDKHRfc6NjoYJZCURX499a2ChQ9mk2QKxmKJ581cydMeeuyttrDrUHenFPYV5hKh2",
  "key19": "31dYrPXj9H63PzfmmQZQfgLgpJBVM7oqUr4YBcswjVde3fDy6MCj16rGpNiCRvQMUJt2f9Jtp2aiYDiQk3S5MQMy",
  "key20": "2da6CgKcC9B5Zaa8fh5e4Mhh2ZndART6LdUan2veafWhHGrsqyC2tfTvKqzcDu3UvUJgDBnqNzQAxeGc6K81tFU1",
  "key21": "4hUWfPnkd9kMQRmgEhJRQgmG4uvRdSYqX1HDPSSW7SZ12oCKQMdvdYWotgeyWcdsYSxU6MRy1JLJdMiSmeWTsXhu",
  "key22": "39qSjT4z3mDfBRrSsXHDDqRMYYGBWiyr9bBmQBzaxqvVoDCw8yUAsUmvp2CSDby9c7dfqoJvf2zvc5jzakDtG4L9",
  "key23": "7hZxzmhmHRuvGuyStVZu6Kj9EXpWpnXYrhjB8XAhYpJd1QZwJPsLeahuMmnnP8xvuSwFEUSUiurM5cMjcQjY6u4",
  "key24": "2uCD13SxkEx2iPB1MdykJCPdzEdzJ5ASJZytUXupMWkF9K9s8qfvimuRbDkqNhxoGp7pbRQJPW3ehE3RFSb2mzai",
  "key25": "pA1J9Vir1G1ujnrBL5R7KkxzX6de51bf4kBsBGxkK7hkmM9oaCYNZ7ZQU1TPLdQSMJ6D6XwDuA4WQBNGJQKVrj8"
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
