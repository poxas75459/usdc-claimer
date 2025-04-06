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
    "2hBqL72f2UKCZSMDzjbmhvTXpB5DKUCBWNPMENLfpUsQiMkSFUfqF58X7PfS1XBVs5Pmr8YqdaP4DvbFCWJcExDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66XKiNB1Ja6zrvMEfYGsUVG3jaVKrcQbxV6QN9F4RatwaFf4YA9BgvGmuSqk2ZqpyeW56aXVpQ5dTeadFPnBvzCb",
  "key1": "3e3SQHC2Nek37DF9EPs4ni2MTy5buVjK1SsQfoG8ZDACBY6pp5BXJqeKzf12GvsdK59PML9DfFZEprWgGaWrspt8",
  "key2": "qFpCinMNYFNekpAwRFDS9Ejofqp3bX7P4E4tcAbb9wSMaGE1d5cFxJ22Y8EDD2yimwqZ5YwJnRMchyvwrrsGp1q",
  "key3": "bXBnuYqug9bgpQwCb9h2BU39mc7sR2wq6cMUczPHW5u5LdkNz3HA3QqZDgLJWD39BWGJVADgEHbRuLc2yvTRqPG",
  "key4": "3JP2RmkZHqU5Y96fYymHTGEgyyQeVoe4sLamEabfYuLCvN13Gm8vCUqZvyFgDuuAYZdJ1vvKkvnBrcDNZ3wANWNz",
  "key5": "5epjW8vBdTtUVoE8vbAkhgQ7P2QXDo2ua9YTAx8rBsQsaS11fw87fZCDLhVSE9NxSC3wKAHcrsXi4cFtm59DGG5W",
  "key6": "4pncCvZ5zmCHaHgU1ZG4i3TbxxmrPNK41YCuHgVBpcwPQRPDZyxxELBxrUf8XUutU5kCQLm9da35t9hCWKC15gq8",
  "key7": "sndmYb8DBfo3Lpn96dYQWpk7rbMPvFvsSAbH65ZwuKaRvpqD4R9qzQUSAnanicSNVk17LVyxXPsNLmWwrBEj4mC",
  "key8": "3FzjyeJqaMimMS1VEc9KajuKh6XRkEGSP15RemTCUE8U2SmHrCvwRhyhR9etxt96Lqjgu91bxHj3cwMC3UDf9CwD",
  "key9": "4PXQaoheVUwWUXhCQrpHacrh5PW3VFbxZF4SmV9Br9kQEKXoEuvXju469bpF33BLF2vSLYYDSdYpWaBHLW1ciwbi",
  "key10": "3NpXf8gaCLrJprKUmWcsU8WTgRKbkoK1RsxGtngQXFQonKKEYfDRtHTueqTXkS1zcYZE4duwwMDpc5mF6jvLZiET",
  "key11": "3AYrogc49ZCirACiRbkddcgzJwNPry2LMPZs2KKLJQ647hctiPoworESeu9ZJPs63r5QHiW2b7YBT2WdKZTn5SBh",
  "key12": "57UvcJJV7fbzYda6L9FFz6UMmCXuyewW3Be4dTe63nHx9K8f8VBwQE2gHGtdUoREGvEqjtEuKheMRKeBNrmc3HSZ",
  "key13": "4xQqSQ3svcvLYdMtcnMsRbexPi6bJtxvfkB6NSsEUJSJg5LZd8FYohCMHL6W4XHjnMATpncC623m2UYdqQ2vqFFB",
  "key14": "2F1cEdUqXnbMMM2KEJZR2UtNYVwFi9XcT54DKhf7z8E7xYcawFxRhA7SHDXV8ZPm7nQLC2KXtZAX3hZPW6a9XXt9",
  "key15": "54LugqY7J5x6DWnWXg57wzbiUG7QMqTr8furgFVdX1BseRy9RnJf3gNtt2kWmWos2Le1jT8grtLaPp4RY9f96ybF",
  "key16": "3eYYyrNCL6b16NRebv2M2YYQ6YR9QP2xLbi5kS397wL3vSPVpHWjcLUA2NA26EnqmN5USDy61RMZRiAT9EFzotMe",
  "key17": "Z7qvTcirr1SBDKVE8HSgtYQc6FuDqHyLjvocaL8qPZtD95WzQuGsPfoKesnXgbjNNFDsrzzPwFX1BBWKNzLq7bt",
  "key18": "2wyKigjKJjo1ixP291XqFfhsysmxzz2dWk4Bmc25rwemYYPVzYRbd3W4NRjZ5uDsG4u56xrgGziKqgQFNh8ifRg9",
  "key19": "3n2yVLUNEUskEcZaoKBfKAHVdkwJK3gRksGJdcjiDtLpEUrEGaGYMZkWJCxE7f28egiXU8u9S7yxsrjLSyNT7ejY",
  "key20": "5w8qvuwLCP8HFt6E3g1brHgibFtyDjc2dcLt4dtGdpD3PBh7FFbdXMbW8DvQdtNCbzShEVEcCdfw65KSZL8gRTiB",
  "key21": "2E6LpuM2N6nAr2swXEffDMwDXCbNBMoNM9qpSwK1NTUhMK4DvY18qiB895w7KJ7wMAs9P582b2hvPqJkaZrGeG5e",
  "key22": "CjXeveCcQS6fnxUSWFULiiWJQR2PyBB2wn95PAhVMaixKRo329aKmYtaZNv8e8Xmuan4KEpSFVXAWubZpGUDhHz",
  "key23": "3ymMgR8TqwcJMsMFRh5NB5Y4o1SyidVYCroEtjcyYk47QhRRw3xZTWArzzSdwYiegfXBj2Tqx8D3YH6bALdgNzo5",
  "key24": "KRixVQR3UrFQaaKzhN72L9ySe1dhj8ftjahJ9o42SejBi98u6QagsSaobZ9KYLApvKftMQkMVTPeu8Tgo33u65D",
  "key25": "3jJLpaz3dYztwkiCU6V71cRmiWEWobx327oQoXZgTyBTEEeGH4Q2Co4SNKZSa9m2m8hTcYdhacqZjJREGQAMxHxZ",
  "key26": "5arx27v7uKDYZiDoGUg2XhgYDVmi8tc6jyGBh2QE8TMDBN7CGqc14ipcRr3bLPboLrCPyVHJq5sbgeD1jTwgRpuB",
  "key27": "3Hyb3EK5UGCDJpPKmaF1BvKFVzwzBuHWzn1U2D9SxU8ELL7iuHQxrkC5qmvZEUddhTN2bbAxuNPEnom7hgsuxhjo",
  "key28": "2XCY3jSAqvzwGoWRPex4PC3jMWJfMguaBExPTKdCojScVTDymLRewpBL1rBN42J1WsxLCVfqEfbyV75njq8urLGQ"
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
