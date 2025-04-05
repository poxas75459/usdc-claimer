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
    "4caNCtCpZ7QLZz2K5GdiAksqV3YwcU6wuos54gCS7SqJjDcZvZjqFyoqJ1KR4JwrqYR8H1srdEUAMc1RnMPQ19sH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k84cnvZJSJQnyNREBmwdVbMRGXhhPpWN4NRyXsm4b9eoXN9vyBGARJBmt68NX5PZxeoN2B7M4wktFaz6XtQV2hY",
  "key1": "2Mi7u1mBHdhhSCKGjjyLWfbyXNyaBSKfCYJFss7gKakgrQHi4Co7Usk3puoXXaPg49PayFkqwVQ9bSDam4Qv6Z9r",
  "key2": "2JYyAQLRumkL82ZRdtQgW641hHtw5YUP7VJUEU1VgzGcoLadUqtEez3MvXQQKqebY2qsGQX1FqQYiam8BJj26Ad5",
  "key3": "9zHDtSabaac3xqUK1KfiksQQgtnVctXPzNCtWR6Y8dYrQeyN2pFEiRE2FckLhA9Mu6Yrp2SHj2AyAmNv6wvogCH",
  "key4": "2iM3vFWpqgKbKWCG4XbZ4CNZbHC4Dbmrzy2tczbT7MpZieAmBaykyvfdWYGWeZmLcAWwsYRhqgNTwoNV37dUbZJU",
  "key5": "3J8ER1WKR18SCF9Pk3n89Zg1HThwmBjCfRqj7sHTD68qFeWBj4WBdK4CCL9qXrLpirzjSsoEBGJNEz3MfckNnf1T",
  "key6": "2gcXN8CxdVwKd9JPnFY4EwVrN43w822HYymNcFNXcQ5SRSYPFaizK5a1JwHSvpzPL8QADyokG9qf5ocfdfuNgZkc",
  "key7": "eDzJur5uK86DFSbMRBBTCssK6HCMXAPSvn9iqspvsg2toUo9Mb4UjfTXGE8tzbS4jAaXskkDLmsFre18NL2sW4f",
  "key8": "5dhxR7z9TfP2WYBaZrqnJMFgzwu9Rgt6LDz1eofuwnJX3myWZfewc3SWNBRPE1dFg4BomGdKLNRCFWr96XmVj8zu",
  "key9": "5fqXi9StWhwbXFenxATvuqTxZqwgg7dNDGUbd3c96Ek8V4peLMoNTGN8stzvVDAmT8kuH8RxR4CkfCvyU6r5BkKK",
  "key10": "QVEwANBw8qg3DbYVTK799REQhXM7SPxUrjeTWMUyfPnWmUuDcaXNqF39C2mypBwf8Eb9d5QRMbaEDGeJdFVcEDb",
  "key11": "3GnVfvE4WZHw61sx1JfnEQ1HKU2dCbvNjtUzMQ8nt816euKuQLJgDzSCDMY2E3vpAAELrSb1LMT8rfCrVygYxLAG",
  "key12": "5TP6wVhqYtqe8RX845VPMRjNgPt9VKCZgeTWrhXJ7gw3PpPhvQ6PVfFJyiySRF8YbXeDfbaNXwzsiUFPsSHa762m",
  "key13": "4WvBV4ti54cu66NCTkbgsAsbRCajHS4LAfzPJXDGTpGkWgejZ3L9vBJQhKhHKhk8DGWQqo1T5tFFZaoExiBFC6xb",
  "key14": "5nDYG9kqTNHAi1GXZ2sAdqFQfrMrFrgLQMux9Nwv6fDn4zSpPTpjwHbUkQHPP18jER6E6tf66kRtgrfSghNYx5u1",
  "key15": "3JPStv3JEuPkNo6Ar66DLQbtcr4xc4bB7RvX4UEMHD3NBHGNPNLBJ7kwiPRK2KHaD5aQNWhA8JrAKUq22iZTRnjY",
  "key16": "39cZDq2yNivJwtCSokvV5r6XcNSkyrMdcsPkT9HqzF4TBpWAKWCNgkih6c6gd5kZqNzdXAsqcTzi2BWgmo5Sd2sL",
  "key17": "5bbSDFs82WHxfZbAQGtZcaxWh1uctgEWydBVRESoWozbaUWtT1zg24P3Ev25mbkQFBrRdXErwopeABZDrK4URSYy",
  "key18": "2rB96oytaY98fjAvjVjsZHedjd1rndW8QAkt6AS7NXyvLzpwjZFVG4yNK6N3AkHMtXbT9JNbcQpnu6bkEURyq226",
  "key19": "8GUG9dY5g5vm39r7RGim6bARrivbtSUfqf2svckLk5PwuMcCmJFZVEeegozHNNdtLqNuuW3o23ZvXvvMVbZ9oag",
  "key20": "ZcjMRNbAPNv2nJkjgLoW8tJeoFrw8m8sUNFSX4HZRkn7FyykPqoUck9K8htFu9AnigCDAzc1jZGSB1yh51bzC57",
  "key21": "4jHoAAZWeP4XgCgKMVKhmUS2sLYKkt7BJhEUGyy35BG5anSVYAvNHhWvvEQHeAtsDSn16FSyZscriYB2NX4jaCCN",
  "key22": "3wR1dYQgjzhNDBbPn5FyUpW6Z46JVcRpvLoFDuPBrDFjhHobvWR1B5dcRoP3pwrZWAn78pWVcrxSZsF9EWUwWGfi",
  "key23": "3TUEGnqFtYWiZQmvLt55Y4U6J4izkosDiWw9mGVhcqcfEmj2jDQUGV9rQBAYwoBzT8odwScARpqucDnaZRKZuXN1",
  "key24": "5sUz3Eixeem15KJqT437jAyonZrnXB7QtWTHCCQB669x7h5qYcbPjGrDu4jV1CY2h133g4ZjrNZP3kdtLYxUidju",
  "key25": "2M6yhsszm1ZsaRKrQdSNRuRX471cgZmKe47xXDw8oDkE3cbbAdKBvXx9GeKGLVJZUtxh3H1GQRSYF4m11ap2asqV",
  "key26": "2kxmt3jX44cU21kMWAwCgLvGYX2tVKzRGuHm349TBnkQehQMVm9unXV2rFoDXLsazzgCESR3ZSmHBD6DhEaM566D",
  "key27": "2ixwZGmTsKxaedyuoQTXeuhByGzo5pjteKTxMbzG4PJ4R9KEc3xQHdywtC5QbZUdnkNJicpww9aKyx6vFmaSe366",
  "key28": "tMnHKjM9mrzXx1cbhAZzjvmSP7gfCaC4ojB9RmBY2vax3kXetVtfYKMTWGEPKxkvAQFkmGAqTXHq8xuDZwXpGiv"
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
