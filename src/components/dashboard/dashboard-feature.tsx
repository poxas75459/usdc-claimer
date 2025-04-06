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
    "56Cuc6FKYyX6e3snqDXr9kviavDLSERomvqyFQyccFGK1nDrGQdzWjG4uJo4KcPZfvLvFcKbJkuBKqRRiCT1LRxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YwXxNGgd6rQNkwEBF874txjpqhubRNX71Kb5HJrJ3AGf4j71Dp1bDri3MNRsuYz2T3UTxvbgSTxdqbr7zbwCAfA",
  "key1": "5o485HQn9GpHCGXBa4M3gfqhQrqvmyux6hSCxPpr4z3uos9Wbfc1jgeNmJeBJkk3SerkR7LRdGyKv4XHf1UYubYS",
  "key2": "D9ffDQeBkQKc75H6EnMaFvUbttb8wFuNLxVeFBdzWWPEk5n61Zk7iLueQy3LyCSk2RPibqXVfi8Cy1CTbmyJH7c",
  "key3": "Wbtn5G4FdRA11pmHRot81CxPcmGC9izs2uFSoaXWij5KzVHNSUbdoFey3vAtvjLwQj58UMDWR8yirYFfd9XoUzn",
  "key4": "J7Szp2a3YfUiE3EVN34LfWKPpdpTCjnN1HQxbBKYManeDF7HM9KCamEstEwqRbNSAEoVE37nbJmMnHYT6d2Bie4",
  "key5": "3jWmfvirUxEvgEunhzrUAUpQjRmX7e1wcc7oPSmRPzWdEoerTamAxfccvnnBGKPpHAusSzV6wUogXoce4J3E3etn",
  "key6": "Hb8fnNBk66gG8QqDVXw1d4SPQYPiLM5vZjHSdK7HkJyxd54hdF2KhcMpPoAmyA4WTnQutH2HPt5LX2EFKJgQ8VJ",
  "key7": "3WAjXDCYvKLMSVC9idipg4FHYVr3ai7kvKb7GfDV6rLEkgWvyRtFuro1M53tQRPw7eCXVZk1EKku17mEXCZ427j1",
  "key8": "5CBBmH8uZg55BkRA2EFPrgypUior1grcSBX5SnmHdt1o5K5AAcjKveuMv8bTk7hNam7PsmF795sF1Jj2GpMo7adE",
  "key9": "5syjNaUvgT5t1Fy19t5wqKa3on6hnJS25XQV5BBs47Ygr8mRRpjDKxPREdLVf2DfwKATNKpn1q8s7cxECNypnZp9",
  "key10": "3kPe8WUVvCobbFh7FV6Homfu97ictihgL2yhs4x8EBX7YPGA8Kt94m6ea5MYigCi6AokQcjJqynY51Aeq9rLS651",
  "key11": "2dX43rUHMjRP3Qwhnv6U3QDpNSvKTzzXt9KmkDstiHWXpY2rcQfBEzPBEofvihRB8ZYFpQSzRibz3v93bUiEav7",
  "key12": "251b1LV2PNwjgsZZinjaHf4piaPEbmGqPz9dQy3iaxg7WaGcaDmnJkW4hEKZ3QkAWu9cy8Et5DKdi4BbC6UjqqxN",
  "key13": "27ZLmZd7JMVk68spc5QkYc1YN7kv2WedHpoH4Y4czej9EyNGLUeWbjDvnQiYTrAgVb4QSPdKcDB3bJxF4qbPmDMc",
  "key14": "3nTJ8Yx4YFdzDsBBADuijRuaBvjCWWkuPCcWtaMcSsWdj2EM7DTKsTntW7mMLXZjKmJNSM2L5bRXLVandfqzzcPo",
  "key15": "zwKQMyn7QYziTWWGiPM6LBHpqUfFZhjiaQDgF7CBveNxR2r2cm6MS7VxwnAZH6x6XPWe9HCVFBXU75P1MADTTqy",
  "key16": "5mamj7EYz2VmXSpTVnRTrRGrH76bniAsoWRkXDgT69KjxEAE3XsQkybcZfcPaS43dd1mzPixN3tuT1sjPwGkmoNT",
  "key17": "2z5dFMvKfVB9MBGTARgxdqJFnFtcEYjm1qhFR9hPwQVS8YTvonHnxBNVfJnDA2VR1inCLjLjQaZkDCnHC6DR7yQt",
  "key18": "3rYHy3C4gnuEfi7p24P9aPEm91bzhejo1LuTFF9nsAdizuREGAMGjrbbDGwKpWxWK4DjSUkNsehcjbPDwrmi2hSH",
  "key19": "8myNkHwoM894VQa1kwSw8agU3xbhYQAVe8hZBaSy3cS3apobAj8YBRRPyXSLgisTCckv9hFAdVcanSBoBLCYavF",
  "key20": "5MP8f1rUY8xziPenisZ9sRa26ThWrsRsgMyyoW3ySC7fdnY3uSYUxekLMFTFSrhfJdZgFmdajbDyj5oSKxpcW8qH",
  "key21": "5ipzTddWWJibmZdv2bY4Hjv9Rcf9iRbtnC8Cpj2CaEP4aTe44TnzagA9Un1jvNnkiczo9mWHS55iKRUX1ct3C4qP",
  "key22": "5ztrSLgdxhuPNTBVhgsXiK1BERNBdoNK2HwSi7UfNpunJMqp8ajLbimr9ubk7CbRaRNnnCM8nR6dh8hjmA64QJxc",
  "key23": "twcfhDfPjJ7pZsMitxBi64cwsfMd1C72mbZzyzECGPdhZLButiXRgZxPQxS2731KJoYJREbmq4zSAFaXJtEwYxU",
  "key24": "4tr2gJe9Tt1WhNpgSBE1LrJG8Ra4fh9WXQmQa74yA3DjV2qfLDMyLM6hTdXUGcFVX8PE6cSduM4ZcayER3E6wHQ9",
  "key25": "VRDM3buNMpKjWnQk8HkeL4RPURc7AgvZJ1rGFjQtJ2JjYgcbQgd6ynU6JBRGL4a1DVBzGHgz367i3xQAZWqsGjL"
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
