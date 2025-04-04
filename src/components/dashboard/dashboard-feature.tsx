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
    "2Bft4cur3oK3cciLwzNk8WFDVy8i3L2JVRGGnUNLFydg9pmmDQbtDozQ7v1yr6amEEBcFGVbikMi7BBsGEta2kau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zfJF5hvJq2Z7Qm4uc38Y6WAYfisXpHNd18rH5V1Rmkwv34o58cNwDRbXsTtFnKfbyMdRJn1CVSvQNk69sSN7wuT",
  "key1": "2S7B4Dg2eKhspBe5Kzn9Mt68EbH2G5EkodGjReiqVYqMP6v4QMyR7QAEMJGzyoaiCAnvHKStgNwfT1q34ARVjeo",
  "key2": "65c3viH1UrtCYKmonZcU5ywa36nN7efSdrsLEdgHFhxMRAQ2RzHg8CUms1gFiB63aQey4kCqsXgq9hgzZukGtW7H",
  "key3": "51qykFk1TeR8LrFZpBoDgDDcdcHYz9CMC9jxc1DoFtvFabeiGB9MwZvjM5pNbJhnBQ8GHYbVNf6DgMCx6Mpvrtoo",
  "key4": "3FmD7qP3YEcQ269yg4pvvqyQW7c53Sz8zca3pjjS7N84D5szzAkWz5VRcekZV1eKo4otu3tqzT3cubGddW1dSu7t",
  "key5": "4SSKpRimTf7VmKmf5GDUAtQhriZAddh1FaY6ZHoe2ouqXKiYSZ5DGnVzFARhaxSuzC6ZUW6KmLwQfyAU3FUfvfmz",
  "key6": "2vYG92B91s5aFp3Tap5FdApCd4Ba6JBTuDDVrTaLvNGWbMBibmRzaU9cT36wTTJNzXYmDTSP7JBTMAUHvcxcRXiC",
  "key7": "3NhuBTbZNXAZxiUMrAywkqaCxrx7oh2askXippdkn198xUQpeaZZ5Ng7ugiLaNW49mPrnHWPYW7nHRtUhMavcE5Z",
  "key8": "25ZtaqgcTc1S8rh9jMsGctmBpXwgV1JmyyM1vFsbygEnahQrUhwvNnT87ZHNNCPhsQNRNnNH7H85zShfGWMNQZMM",
  "key9": "54g7wMUDMQhW4TTAJ78eEoEhimVU7BAiuTHnco2jKPrWqZ4h1u4HKPE1YNCUwc9e2BhuAw4DaWaokbXpF3TJXD4",
  "key10": "Ty8Z5UqjPy6X854RmQxapPyp536EPEoHa6QUNVWoDQMfdQvMYwQKDmpMa7C1kLYtE1tyjPZMHSHYWAbqZ5begRh",
  "key11": "36CcX8vGS5zSoF8rTafH3NA69sYYPVvYKCwag6VjLDUtsdBtky3PouHJHezgpCcNysUPgZ5iLAHMLeMzN8KdmxjU",
  "key12": "4GnDfwJpDdtAPnfcyHK7CAXpdLoUSbFKMK2RcgX4W5HB58DPdhGXLTrftSy3m7hJ9BqXQ5EoMCQHCFHKGQLSx4SF",
  "key13": "5WaNZU2DMFT8CpDPFQoYqKMJ62zX6jHJV5udd9Sg7Bix6vqarUB2QZKP4h48JVQBtBmZss9XeUpT1DEbyi8Djruo",
  "key14": "2M5CgxP5CCj9G22Gb6JbFcRR6xwtdQfN7iycpQhAATn7MSypY5hNzcAVCENjFQqnaiNdda2Cuf7upDD41xHvwPnD",
  "key15": "4hCg94j82PTPUGF8YvFiUDX67HLPeKn1yuAsuEntrfyVsstowkPp8xtAEuzeLTTUuu5uJsQkFGCK29qBywypAucW",
  "key16": "29FaWS2WAQZcQ2vyKM1d4jE6xWpZDJ7AuYxtxtzpqg3aRtRVbJkefwTqg5kwTmrFS6GEFXoZKdwyDEXp2u7XENQ6",
  "key17": "333C4divhj328P7kK1QCCQk8562vWfSNituozTkCSMsCUUGgNL82uya7zLf9PQMH5D7rcp6uuXoZPD7kEUvBM1TH",
  "key18": "4vo9uEmhfVR9E4moH3QVUhLCTy2uGo72DrEQNtBh59sZsRD1PGSyCVVfWhYhqWbgbbw3G9occw9GET9Gc1d8uvMw",
  "key19": "26jUNLqvT62vvU1seTTFnoVGBSVzSF6Ea9vcNt5GqxV6rvUupAarSpgZhxKfyRwnidWH6bB7kXeNg4maxrM2Yq3a",
  "key20": "2BdALBaPWsVU9yG39Wtf7qLnPdPRRf8yLCsNLKJ7R99HiWqxUhyCTdHNxZQkw5mxiWkL6MSqr6cN5TSqL4LKUrGa",
  "key21": "5xh29Tv4J9a3yqtKxU2ozHR83RRxxTdJXupR5rnGcqsNbvYgQDmvuvU4TSCnkx6gAPuSaC7gincChMtjMXQAbKf8",
  "key22": "3W6o2mojAQWaSBtJiQV7LnzZgb4UXqeCWyzXy55hocHTwjfKziByBfihh7C2WFJwPxxNqGoySz9LePtNTnzw7UWJ",
  "key23": "ZC6QCWs8uMKLyobsGwBPfPqEQmv8CrvhbZuTmkzXpxAavxPEFVz7PSWVhjWvE5TyyN9GTy5sdUd944Tbkqg6fxc",
  "key24": "2kdJDZP3YUQyCJ6J1Rr9kjgnpF4Xpe7J4SexZLEsUCb4UoHuihEW6pBjuvwJ1SeMe7ezr5QjxsyiAVCNBqoD5dgy",
  "key25": "3Pr1wLw5GGHr92zJMUw1inhgnjVCAuVBLX2UCsTNShrYLZtjH89XoXKgzycbBKbdWzavQYBrwKjLys1kvwr8AoDK",
  "key26": "5SHvnfuEgCHxb8q8c1XcE3Q2UFdYms86fkgHqM4JEB19EEEo9ETV1YWk8Mg6KKGGk7uVsELPQxaDXAUCxUmXPCme",
  "key27": "3R6V3ghew3ZqAW7oAKgRL3yAPmMfYSxgY6AtLDqZNVrpLvQrV9o3wSLggEAQrLFGVagkjKtUUNf8vnvizV1DFVXF",
  "key28": "4CeT5fMunfQfJTHfiERToMLjiJSLpkqQAtfNxv8Bfnz3LuH7HdBgfy34QPHahYN3K4fPydBcRpXiFq48cxGW9hek",
  "key29": "2ARMfJ62mg1rq1WzZNSW3wfh6K4c6B4wtBJ5zz9yqTueWSHwTmdm5JekBJ8c6sSHaP6NBaMP1DN7ZWBDRLz8EEfL",
  "key30": "2MCpGFMXLSLKqykVU4gdrH69yMpi8QZgoP8WTg8rtMVpD9PanH5Zg9SSrhei6UkeQQtBjGmXnoFxfkRtHJDZvZyD",
  "key31": "2joH4XLSjZp3r6VnML58mN7kQenMdU2Z8W5hAopf7h1MxkFjHgh9BPiqYzsmfh9dJn85BSxQTJ6eD6xJZrcZpK2c"
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
