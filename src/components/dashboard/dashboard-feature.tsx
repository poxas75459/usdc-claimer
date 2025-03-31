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
    "5bQg9G7URxRipwvETXtjvJv3hRM6WmJKuR2uJNuiKyPVmxe4BeTc1zwrXyEkqznVhqceKoXpKD7KGH4ssPJJiRRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H7PoK7g33p8ExefiGKFiug1yhmTW8mRnsMf1w4F58y2q5C6bT3Ls2unzqkPtnMcqSFHgUQ6PswdzQRWNH1cXvbF",
  "key1": "2GQFEn3YVkJpGEmGzeidSYaUHwNWwTbMADt41fxuFAprgw6mSwbpMVEZcEvcZ3qUgHu6Tct89z4iaSrcp97QizJB",
  "key2": "2785nk7FXmkbhcHdkSykucLRY1quw3acb97akyHpHppNNdCkxFNxaDkVJC8fG7eTf3P52BgCDUvXkcCtAHVCrCCK",
  "key3": "4eSuB7boEKmTxmWZRbj1ZCYmUcwfu2G3SHXn9ZnxmccVh1FNFB9ygjWiwoVEJ5hU2diWBZwV8mSD9Jsj8yABEubp",
  "key4": "vwNRtCnp9z8ZXmCizjoUSPGuEp78C3nAbciyws5GQUwjWBZ5ogmXoSR9iQ3Zg41SVWKUBfU4UgLNy7Y29jmS2uQ",
  "key5": "3FCzkcD65UaaAQsASjEzdtDiMPduSAmonfwBxWBBpcyPoEbr5qpCSj2aNEpFCHxWRnAkWTbeE7jiNaUsUp9PiFbF",
  "key6": "2ZPXiJhV8mQKHc5zZGxB82gQLktyiaChLxD4JETHXtoCYgYG8WQ73aJHGm2EXNSCyf7yMg5s4eo2EKpDA4zTbwRx",
  "key7": "2mB73H2agY8f5RAaKMBzcAsXPBo4D6Ef92F2yH85ec9pR5cXh3FcvvofjLf94RJcYjZsqGM1JAQPm9rNJngJCQQM",
  "key8": "4J5qgbkvc54UCoWRP12Twwu4Vj5BuXnMceLjV2rQ3P6AY1buLoTCQ7CSDmTHNZzZKzuNDi7VofusX6uDqq45nvxs",
  "key9": "25SWwRZTRsKkXDkAMdQwGmkTkAntzi3jW7ZS4Z1dTGEwguxRjTQHZXmSavjaDU5LTzQXj24fLJeKTBvkSAfMAeSW",
  "key10": "4zBR5JsUZVF2eRqdpZULSar3MNK9j1zszFg4ZWDcfRG99m5gwqq5Z55x7jVnduU454PVsiK44jj1cJDcMxRDE6Tn",
  "key11": "3D2mkFLJzzxiWYsxCFwDJe1S4fcLis5Hoh14MA3ZeUEg8by7K3T1igd1wD6xMRW8zDKEy7UnUSfcJ4smagH8ZK2n",
  "key12": "56iftC75wcE9eeRLTo3eUdFse4k8zyQB395EPEwEscEyzAkr8fjK9EHJH2Ys87aNytSRE1Dhf5q5ZsXqtb49RqKr",
  "key13": "2tw38KXMqNrUfCRaJ5qNUzNWfMwdmUc23xhw6YZovACNYgeHN19LHEJLYeKssnZDaEga4bjHmGd1QC4qeJrwnNQ1",
  "key14": "3GCtCp63smdnxa1V2k7pQR6RbfHQFeBDX24dqKfasMfGXHYUkehm7Qq84Fnzr3sjdbnNi2yhVGy4iokBeFXKyxy1",
  "key15": "2x5LVW8aWmqNAZfbqZWsUrXTUesukqSqxbatNRWyKQLEKMJHcnwrwuY9fDwVqA7PBxi8N6YRLwZYmwspnwJXytfV",
  "key16": "okiA3ngfnvprRhb1UtzXcT7iKcdSj6CVy3jY2ZaDcQyM58yA6LzNUxhGccByUErse4Vrn7Rdcio7JdgBbiH5e4T",
  "key17": "5MEVvtx3K6YyniBiDxiETLdcdALemUKbiM3d8gA6HRewhvwyjHx8ff6VCV9Rk4XiJmZGwZ4med3f5JaJDwntKffb",
  "key18": "66sJTMif7Atec5Fdpoj2myRUZsfVHoFoV1mjmpq9rv5d1rPajP1p9jZ9WCa87BuQnRRm8Sq6ijKVWhZLt6yo7WhY",
  "key19": "5XjJsMvZfGr6ea216tdrmBWGitKFgH3w1TTBWcQLmNXd2GDYFUhEvrk3whFdbP5LBcsmZLQaSxhKBPTRLm8pPh1F",
  "key20": "2FFBsfL9GvymKa3HBZLzGp9QAbZZxspANyE3uwBHkKGbwKB1aLGNn5S4wW4NHeTpUjqdBZ8uNuhfsi4wNv85uLPw",
  "key21": "2QGzm6jAdRP4JmKVNedGVDuHipZU9eLBVawTSZWgmbqVV1k1j4SAGtTpVGEgBhU6q2h2bXa6bvZM6jpAKNx8f7TQ",
  "key22": "SSufr1R6fZTjAJBctkHuCyynVKimyA4ogmPqztwKfRLE2sw62vno9psorb5oQQCMrdaNceNGBUMb7KGEVcPF1wi",
  "key23": "4SqPz1ci7HQGDqHa6XKs3tosd1BydR712cjHvas3iPVEA5bzfQ6cdWSZAzVM8FEfPQo8z3G3dgxbL8ND4GuWPuTo",
  "key24": "gR5B2zTPn1gjRymcEVS7oVWFGHdJ1Eti7ErfWTi9ATUqnXsvFdp6UaAwySHWrBkaqdbHwpCgQXv9SMHB75GDZfD"
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
