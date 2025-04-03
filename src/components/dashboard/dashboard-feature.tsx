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
    "2mMBHTPvisACLuo113JevF6jpfMG2doANaJopDUsW3kyB4sSVRrmhxKpxpKm74XCFD4iTAPr41tVpRqwvAoTRNqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VAkiM5Rii6LD78UAe8LCychPiGR6Yc8CyVt1k9t2ysTHadCnCE7SakThkbdC1RaJutwuxnBWVJsmZ3mJrGin2jq",
  "key1": "5kRxAepMde8V3G8DhD58AQKdBXKuBqaemKRwYEwF3HfqCpsUFeo6hLFXsa3qFabnqUaVNEF66gmiKYHuCjX6QrFx",
  "key2": "4BqQPmcVt5MYkSsC5wU11KUaY91kkqzUPxKbviZC5nmZjfmagCpzaBBfY51pXpPQcxNwycs3SdDGX1mRfrNbc8Ls",
  "key3": "2SSHd1MePBWissQ6gbPRKz7R913pw2w3U1nPLYqXHdkM2mc77oqtsfUooRua9zxyzxYXHRfX9HdAFSgECBjGmj7G",
  "key4": "4pqdcrXb4Ytx8JeBpokoucAHU8732ecmoKofV3pYm75K2BKhLzJ9uU6zoBDSoyNhxqYXeuBtYHmmrDMTjm6j2tq7",
  "key5": "gd4Y9z9Q1bdbk4twRkXJrWCwvEehN8vYMnNtYN9ScY6qLkKrXV6BYDy5PBoSeSrhkgvfc2c8KdmnF3UiEhWSaTr",
  "key6": "2zL2TsheCvLw4PW3VyEUSCnwrnd3aT4myz5aETEhKorghRxSaor8HZArFxKbuaVh3aHjZxNQxpnEqLTxQEjRK9gM",
  "key7": "YmibP19vwL6KgX2kC8zYXEybH5nwj6mUo3knFXxgTbhEm3TtaDkPBdmcnhV3URFxiXHwTSoQKzK4o1vRtv5rGaU",
  "key8": "3Um1Gqk96hYKxtX8pwsJHZMpQ73HPPCVc9UJzE9Jb6M1hfDKedrgrb328VTnsik8g9EKvjLDsKB9KrzETev5Yr7W",
  "key9": "3FVtwfHc5cUP1khFYJd7d3uZczbNtCXbHgCAkmhuqT4wGXzVxhAonaWuH4FZ8CqXnyBJgaAYmCDvTJVuyyFS4Aac",
  "key10": "29zyYnWT9ZGv9fWyV8AJJRSr97NWefBV8o7J8hpGR3jSjfkz2g141rrRPPmKreL9Bcs7vSKKa4EgE33y5vow3ph5",
  "key11": "3w7kEQCFazS2dWN88iPTzLvc9HupSp8pCdWfre4EPouSEdPM6dgsWJfYGia3NzQQ6RDNaLtRuok5b8LYp3J33pZL",
  "key12": "3999kaPNvoiD5CGJusKEEyFtSW315CEwY3eMDrJ5XJ7Ly5iF1xCfN1eq34iusenspY8Pk47J6a7wSmoLva1XE23",
  "key13": "5F8ZDbAfW5Xj2K4vECqdZwjXWYvd7DY3cBbBsfuqJCTFmaSELE6WDP6K3uPHgmoEeKcyqjRDZp5Cq3vAzhWzGSAF",
  "key14": "4CzoWsZZsvhMVFq8SFVWoytMbB7EeqSbHaHV22bMUiQ7APh94XY6u8j71ZkDZ56t7CWKFiu7yTTNgrSvLbkNgndC",
  "key15": "4GevedPYLmqqsJ5xrttEnsz5m9LvKtinXWosZq7eQk6bvAdJCsgQbciN2xDakq2fCGBUQJLj54SWdHiz8eUFig9o",
  "key16": "5GZEHBajF1xVAh1VmMBjeHXetmbCFtZ1HtkbAH1YeqpTQShw6Aif49wZXe7KJukFmVKqbzJknrtemA9gknGojPV9",
  "key17": "eSkMVJNaVDb6JKeaT7w4xuKuxvgdWex9LqRPn5qDFMY9q3uzxJPYwf4R5gYfA85H4zq6BuBu935S4DJSrifyQk6",
  "key18": "5woGGH8x43jV9tbjVYCdcXM8iW3c5GNLQVc41GMhERTWMjnYexkA9wTgo376MrurBUrNMbov4h5ZCWkA1ugxHjBi",
  "key19": "37t7Npne1CQMNAVfzh3fUj4i6gYaM7FgVqGyYCnBCbXXTHDoV8YRi57LoGq1pThaqvVrEszzuQSpUbtKwhV5cHyt",
  "key20": "53uB2oizmza2MXkF4N5E88Hr7XGrKzW4zBzCNRaWfRZ4Z8oH1DQ8F7k6oXsCN96h9E6mAtJELuVB9XYKEQgh8Xd9",
  "key21": "dCs5gQunGM2Fon6ahczoxJw9B9Drs3su4yFLVKoWSRdtzqEbizxkCDWA9TGQLRb18fekam8BPDBSYXbkzhouvpU",
  "key22": "5BP7LiWpsFSPRkFQisb91WC2qMR3tJa7frYu7o6n41jGUH91oWDe2JaWuvhqzq6dEMN57AeGKzpZcCvtrVGRBemg",
  "key23": "2fsMLBr6kWkpPhvnGdsGd7fDpAvPzXSzkHNDud8SRo31mVZA4jYZKW1dFPHbjqTnM5uqbEF639MPSjjTWnRqGtyS",
  "key24": "3YAmJADkTvAWzFLsG38Tzo5h5FVrKZw63ExxF7mv9on3yKvJcQ4kHCAUGuRVUGb1WxQ3jNSv8zJr6YNmNaN3ACv9",
  "key25": "HVzV3r2sNpNCV9QyPXuNN24T3iTdFuMmPF7D9zLi42CQXwwCHYcZF9Zi4XynZTzn1LmRnnUKVkDjMuoLb4iT8PE",
  "key26": "2SMpVpS7rL39DvfkahzhgqrREim5cwPePhRnyQkEmLETu38g66Z2zPmDfwXcmLR3AkhRWW1uVCWi9Ki4hcoVR4kk",
  "key27": "4uahadxxDanWbDU9WbxVrgx52jKkCoDsoc8psLJ24gkDeSrw9uiq7ewoATu6eajnwATa6DqKq39PnWJEiJXjDjzC",
  "key28": "5LBnH2v6oa8JbYAih4DmmqSDtjmyttNdCMXSP4K7GLhU5Xy153kAYBHsi2SK5fLcBKxcJX6okkgq7eteA31e3GvM",
  "key29": "qztogEbkkjDUk9pTYqfnTcZaxKqr5ZeEFG9rHQ3e9JhTLrMWKXeMB8jPUHooMC4BhHu1UbCt7Z6PsggDvYob2hw",
  "key30": "mD7JSbVCGtYjJir6UxCvF4MPKD6gWTWb4qfi6Hk2PPpfWZofTXaVtX8pYg316Py4mti1qDnsLjZK8D8xGB2XEiH",
  "key31": "279LZwoybUKB3Nb4iQp2G16hzwDDEzqvjWogi32SYiDcBBghP3Jo5NgswVEpoxQtvFLfC8WubjifPAE7tXD5ZkzQ",
  "key32": "LoKPeFp25k1pHz5LMzgxepyCmdpo1A84mQrkmTtFggHnL3zxsyCXC1jJNCKpGjq2WGooi61tgeD1h6kMjq2AYny",
  "key33": "4doo4yHALKfNMhkaichqjenvjEadkA7JkParhZUEWyFafADJi9t2eH4pRyvWxgfNfgz4rRGHP7vzHJehWeRC2GuJ",
  "key34": "4Qsxo8dARXDpiqfKYWz51dCreSDgHqoCHiXWDNk4jCouBiwRvNrA8TPnXpNZsfPUooFFw3vrzcZsZ8MRrrkKP1vi",
  "key35": "5vw8GCnStRLSsKJeFpBSr44V43PWpKGxFd9EMPzxF44q7wi2ya9vgZb83fVXinmfVVVzwGmn9UrHVLEYB29CBtrU",
  "key36": "g3M5XqZfjY7sc8j5C1mhCbY5FT7QjNEJatLxJ4aAaM8nteW3qE3JT9SJHGHrE9DBQdBxo6SdfwKqaEWbKxfo1vM",
  "key37": "4NZu12cpWHhix2HBdi4JbhLCRkb1qEeBvo95Qn77hUjhWHFkQPcRCFWgJemyhFe5QkDQ94vy1WqJpAixaqVev8fM"
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
