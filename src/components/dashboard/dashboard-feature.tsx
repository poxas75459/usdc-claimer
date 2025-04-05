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
    "2EG8yRYjeJV665uW46UWwcY8Te4PXZDbgQNVJdSUN3FieaGwLUSM2HRWi16MVCkZZp3AMuNnzTYaM1qBZq5GT1wC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XDNSdUd9YzodcxvdhQF2MRYtszhfHd5mxv4RvK7aDLTHG9Yv7HZi4ow9ASNWqamzwwX5sMY9MNMXSsoYsjfgoix",
  "key1": "3P5WzQRyCwPTQ1QGDHzQvcYuXEJby9ryQRdB2kzXDbsVhJfZzTi2hp57CD5cZTrvU7e2MDmQxrrVEAQ9vanY3Ze7",
  "key2": "22QVYvboRDxFb12tT5Fqtu4Ux6vj7f3QFRyvAskQqu2jWvzkeS9JdyZB7Ac9yDXM5Hp4yCHFvQ3Aom1Yk7WXannd",
  "key3": "4bYtKFKCRHnhMLxWGSDLLdp7PEs2Spv6vDVqZSSTWAAP7q7D5YGdNFrXd8TEdh7fCuQD96qd5jWs644hJTppiveK",
  "key4": "3vftnE2d5Qe6aDEGML2MzShuDRi6gGt8ixh4oirA4kJ8MuEi8jBbn7F8FD3dx355XZk6qKDSdtEo8xdMri6QKtKJ",
  "key5": "59jCrqEXbH7siTXiAnwxpUaZxe2dHoGSv7mJVaatU1iap4ktvJUMDsfRfAJDfF5ExgCB1smMYcC5fNukPCBG5qmS",
  "key6": "BzzycxCdL7wQgFUF2x8JE4KYJdA37CjQ2dimDfXT6tZ2dPwFpFARbJWcvKdgm5oFJeQzRxRWdKWEcJg8a8mExx3",
  "key7": "341Ue7ZyZzw14rPcSLeYokMJNYiPT97u12i6Ymu8qcfnCQrakZYw7gjvMq1cLgzK4E3a63TLFaHbg5u1X4iLsxCB",
  "key8": "WWSMTtHnqvggsxDhGM4YEbMXstRYmyTKGb6nZ8ySsCYXVER1PrqX6Pgrr76X4FcyiLmzBwnSbJ8GBXetarx2vTx",
  "key9": "2RXRpVU2SB6Lzew9UdqWga7cDjngM93gVUJLpmADqCfc9W1PStXEznUcvuTqr8D5SZPUAaMGbjKC2XW8jUcE8RmQ",
  "key10": "2VZz4qmGpRueUCpMYqbskbbGZiczSzTdiCiqUkiZ6yqPL7tyJoJ3KbucRufpuNJGQUgPiNbsWBZPGRNH1acbtwn5",
  "key11": "2SamevQHnVTqHGKeFmUS7JFYN4ZxqkfsPy4S7NDA3WqTFdoQr5ev2NrCWKMTUVdBx3NwjW6h7sqBPcaA2MgY9Dyz",
  "key12": "3k6M6z1L49BSjNiFaQ7k6XJ65GVS13STY9kunQVDCQ1uoR5Sqom6J6j7xhLA14Adh9c5iEGbX9VsgSfRL3WAdTUA",
  "key13": "2PDLPSBVyzjGbGko8voLd4Yd8PfPopDXJ9Kv5Y3h4WboS6CiPX7h3NSPR64aAvrNyTzDJm99DZseL2bT9Wjakg2D",
  "key14": "5GWd3DAhYULDinW1AdVPM57mrdT7ZfbmNJNjKNd9sSU1jPWH4untL5RT4njeWNN7sjcfyfN1bAo8Ty8QNiFupTzY",
  "key15": "5R6vSSedtUufAFWbxQA1ao7GhWS6B7GfTrEJFTFW7Kf3ReRcK2eCFPdofW8ZGWrFoMtSR3bXF7UWDGoNBCAkcA9",
  "key16": "2YEPAX63hBZKArW2zpwZRy58yjiAMB2qoeeEHpJ8EVLeVQ3erSXLwhMStzX7p2eKu4qxKsDqVTxyNuaKRS7m7ryb",
  "key17": "2A581e5bqbThFrvX2sHWmvDgbjgovDbPRJbqTh6rjb8cWoJSszS9WnzaXXiFdRTvkc2KQVA3gV4kNWXBZ3joaYtt",
  "key18": "56kGH4HqqAQQEcAMEFZK4CWWdaHLGP3KqqZ52BTyDzg6ArNR4w88MAoeftZG2C1WMDedmcBU1c8rBxvuMEGQiE1Q",
  "key19": "5pFzEP8GxipyYaTPKzi3F91ZCx4XqyLY8WY5H8HksUeLE4QXxvTYXHsmzKMV7vsQWd1pE7VFRZvsVgqNjfkCXjUR",
  "key20": "2JxZjhLAAXBWBgKFjfBEB2jctYMiuicAWmE6yiG7VQW9uELUbpGnBrinUnAs2HFsSrbkkDp5WPi7JyKbP37VK8Ri",
  "key21": "4xX1GAXGidjtevhwpbCsNh5LTEUmwP4XBQnjYoPw7EE8qYXTrjFVUoTVBe2QWiTZgc2BkcgCpbaktJXqJtnNNmTY",
  "key22": "3pmLZAKxUokQSwPmkdZKwPu3cH7HWST8WWMeDkpKG6i3NEbtxrimQgUrB4GAkk7AJEdiWFMhSRQ6ej2YNbuszYhr",
  "key23": "41bmfQ68w2qT7xzXqYSM9k8VznN26AU2SpDZHEE1L155YfxbhMLZHwsdXyxaii3ihN9VuNwG1gY3QZiDRNwWVY78",
  "key24": "BrypHHHz7o4UcNph3TaLTAfqGzfxGreh5rGVwfJYYiMfAqFPbJWH7pjatwWNvnH6ppFt63AgAi5NuRJ7bKDpemp",
  "key25": "3YNe73CjKyZA9q6PB22LfDrZ1aa6Rm6hWhNEGJRZrbVRcRLnjj38MswvRqu6mCq76myWBD3WuLG2HXZhFFdWBiNz",
  "key26": "4mejEWLv3c3eC5Cp7JffUXYt9WbkSHAEdWEA8We3aVMJhYxRD4c7nMwVATCXXPcggUNw4BT7iAvijfFrk3qydpR9",
  "key27": "qWU6i1ggskUPrLQynmAVmcq6fo18EtRQ14fHPmMps3pJrHoaCqnxZHPL5xCgTWnEtcJR5eC8Yg2mx8AfN64nsPX",
  "key28": "55jiJYFvPJwQqXSR2tGn1fEs1S5noaPq5nKJ8JbGri6SorwL6Pdz1joUoXtnDwPMLkQvXBnUie11oeXuLxj32Qmu"
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
