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
    "5pj9yNJKLxC3ztgJJ47Szx9tRDtSbGKmsHKz6g1n7gPggZKU2SxPsxEUi8pDwHjVcSecWrd5w1hb1HZAbaz5ki9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fPHuUseMhyAWxFgDcjPJumyDjRAJDud9qLnzA1V7mvgJXpweUFByVXis9kZ2tHmLyuGJkFUdiDpiNdaPnfbr5sf",
  "key1": "gjGwP2P1r34aE3n1MesTLt6PLvtDCHqrtUWFXa5FYciiryPPxXW9JWT4CJSaDdqhy7mqNfGDBA58e7cT3Z5aSWt",
  "key2": "sNKbybEjyWYiepb7uSY5bk7Ce5PfcA4BbgnE2j3QM8JLFtakSuUPNs7zi3DqoYg37Je2ZnLEjURPSbyzztp5j7B",
  "key3": "2t9Q5fgWQe9hiugcUmZ2B1ZnpHP4Hc283rBqF2YWGHYxyj2cJzJXvk7UjMpDN211AnqaGRxeV4jEvHmGnpA9jyGk",
  "key4": "3pm3FSHMVfHVBfDm5cH15xPq6xm8t2wk3HwqfHzYWzqEPbMUQfpTfhAo1b9j8znAhqT6GqWV5sFq9KDLX322MBe",
  "key5": "336HswP6ZgfdvWVMkaCacxMFbKpmpagmsSNrnmAX74CPjY3Av7L2e96uZVxn98QCJyYmLmiNmSuBN34v3y8uWf4J",
  "key6": "4tRpFfMZoBdE6GSimqa4oVARC7Y8rs798eixr6izaJEv3goz5YeNMRkHNtEHCy67gQThXJwykJpxo5YM2vAoc9Ct",
  "key7": "4eMtVKMgBTAC8ADpL7XyBQKZgayC8ANBgirbsiDyNEgxeS22E14aKiaVDj4KMbvMw4SBWSzphCb628x729d2rnyH",
  "key8": "4CCL3HRXpz6NEaJHe8noERgh2dHXe29qN5HCC1uW59qjmKBt5zz2GuSEid1pFKV6jY6ubrTom4gshVTP8LpMvnyU",
  "key9": "45CMR44bgkJPcHcNWj6GcPbQoQN4Cj1L6oNF3aQE7jjFjMLKYZvEb9XR8LvvcyR4tJDV8MUrQ2MP6g8YAaJnyF4G",
  "key10": "XD3vU7da8osebESZPZsnpm24vvuPifhdmhxdjFDwBjZ6TH3YUKXU2bj1MGHCA7QdfWpSx4jKZRovg7jPELPZyt8",
  "key11": "5RNMe3TGHQhEzjkysgaZWV5qQvKkHF7sdZuAL83MdC32Y8iR1otqnAoEZxdJdGdzon7ZPWejFdk55zCVeHoiYpJY",
  "key12": "rdgy6SVfZtYSSTmnvKypQQQYVQnx89PtFqxf7X6A1d7uTa7N1xySmo4CAhhAFAFp9AbezRGhcvENEvG1PYQFjzE",
  "key13": "5eEYQWtqV8oM9YRXVUXdhBTYRv6Wq3UuYNHqH8jvEJ18WH5GJ8kLBaRDpYUwGeDtFHA5YDejEk4BZbFoK1NBDFek",
  "key14": "4DKSQ3kjcvDzRv3ZBvk659GZXuquMgm8i5xvy5DXExQg3Y6bJ6FyG7xe61NfDCviJ1DcsoJXBbx9ZamXgtTSwDfg",
  "key15": "29HmKUv6RyeGmDhBsW45eMGcc9fW7ChgDWZegXAGptCd4h3cYJ5tSvhvddyM2QXK1EU6cfeMRWSmQu1vTCrg5z3j",
  "key16": "3exD9Zni2eopCxkmysM7CKTvhsZ38yNRLXCMVoFvzgc2kKJFqVF72CmnbjmjeXrapP9QReAtkH6rK2mnWgwYsw6h",
  "key17": "in4o13868JjTA83i7F39TXGRqWzRhuvSNjkV4tFm4CLwj6vdfZnC9CRNymXhsqXSs4YHWH1nGTKXoVg6jXBhfod",
  "key18": "VB1heRFgZY6PyuMovtA1dMDJAgXDhA15ypyTkkMgzEUETE9LYcjZL7KjT1nqi9uKKoPfjCbgXRRGeN5pDpg6Xd3",
  "key19": "Jx6DSQdHN6DkvGfdg9sL2fiDqxxJkijMjD4QBwgq1bbQ5CAKaSRyhDZWxKBsQGzJCQttKT9oavrn7PmN9Nw3fbA",
  "key20": "3KwpcrZewHZq6SAtwExzM3S6Qp2uXHRp9MjaRsNMQTQWUZ7KK6HvWAf7FRjD4XVdwTL1xGF7niBBFLYC683d5EQ4",
  "key21": "2akUtHL9GMPSCxCE2rKHdBf6pUjfVoMZPHUUTCEpJf1b6CngyLhQttFgFhvVYVMJBakzD8xDWyh1F6cFzPKtXJ8t",
  "key22": "2maqurg66ND42zntEKH2pYkatACNUK6qxpXYtpqDA7MseKSaznSJe8UtDuxd9pTzVjSYoa8mBpyDADVMVzFyM6re",
  "key23": "3vWoFJ8ZJZQcSUdsu4v4gF1WV11hDDoADxaEoAt8mswjxCt9DhTsEsLR1nQz4PurrfViQ3TeQaPM6e9cSx9wCyX2",
  "key24": "2PLmwsUjo4LwwWNGhyzoiEK4QvomsNpDbm9cr4iR4wmJgXS6muvjTiNewSMaTEwuytSfYkHsqVyRP3uTCtHg8b5m",
  "key25": "44M2AU5n1vnK8CWMQcQXpvL3ErGA7PErehnHiRPpHhCeyxPYrgGHad333v4qUQzNs8bZdvAKBim9VmmM2hYrRGa3",
  "key26": "2esxrCDszRdi4ysmXS3yYq5TT3kyAB1nvejCoytoqpMA3vNQzAiJYpNbGhzECKs51NyJpkJGfnatVvC5BtNTUnDv",
  "key27": "Db7e6arTmB9cMGxPMMNZcD3nEJiimgqnu7zo8XqPbXkpPN4vbDd7h2LW2rE5uYzmAuRQBo7qR4akRLaJRguABAj",
  "key28": "23wk1p6pvV6xjkih6YvDDxUt1FxEfNY6oz7HNAcgMfvVL8ZLHNv7YvudKLya6M6csrSkNthzvcGX5vn3TEdoWJbp",
  "key29": "5CWRr8n3rYH7spXkZte7QZCitGQTTFUjyf24sd8NLSHDwYqzFCt2K4J4iE58MdXzLhuLNtMTDcnfdaTLyhZ76M6n",
  "key30": "5kgwNiHa4EYunLPp5hyv4Lf7cJKRTAZ18kgzuK9wwip2oTxuXLtYeW8RFqMpkNmjirCr7uxwTN42RxzpSFiV6Qpr",
  "key31": "4hADwVY5297N2bhdbGwQsMHt52oJqJ8qB5P7vy9XUGhipoBqZawPZn1KpkjcLUioP8kGq67yrfsuzywtoQiggTbU",
  "key32": "3HEgiqdEZ67niUJZn82qLA2jDg5komukDmP2j2gjyt3gBxQGP8az968n1LyxXEZ98yD88QfM2FNhmmZku9p4VzGP",
  "key33": "3bPKejFFGX16RmU7TDpVmVCivMfAjBZcPBKGbfGVigjaXR3JB8BorcNx9S6X7gpxc2czXGtHrv7LHyLkS1arByZs",
  "key34": "4GtZnhqJDv9a7E4ER9NjQM941vt45vs3sLjwhra17dabY6ovoKUi4iwZrdbNuVGup6xHr3aha6MqNcdSUYWKEYH6",
  "key35": "32naXsnkJjCfoYJSaPWbr6QmNos3PKWGodAbzrKUj5ypcBtGPxjqUMR7JRKYiqS8BqLUA72mPXFyvSBX5sSottVz",
  "key36": "2Uibk3p2nqWqD6bJcuLQMMGwheiu4sdYogiyaArTNcyQiYGWabQdxeUGFye4eyHXhq7LBgXSLQSvLYDEWnuuE2Vi",
  "key37": "5tZWYggACB5mYtF4aRnMT8esAESSGqdu7muj4n1YTiKp2jdJvC9yFubEnbpFxUhRCdBg15itN1zA1AiMFnr8U6Pc",
  "key38": "53nJir9tc6D5yftPJg8r19b9h3VXHXCN9cCeF6nHQCuV2HBXgEjHMWZtS2kNGqgTkpBqt3ChFuFKcMsAQFztdKBN"
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
