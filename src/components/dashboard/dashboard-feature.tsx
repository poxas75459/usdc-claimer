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
    "59BiXrgXSRfTWVvsYWmunkYhXtvtsMAVxBt9AUUUGfcX4yb8vFsUQb1DMSUsh9eDZMPKERzyjiqNVFEKZo2gZNca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jHy6iuXQY8J9iWnCyiVgZwHg2G2eb9xAeAvkgviutJjyjTC1in4Xt41iM3Q3mfs8d8WWXQWiarqhxG4G9cNfkJ3",
  "key1": "5xshDmRknQqfevUyjV1dSA42uiWwgjWJLy6dUXMymdFvurQySpJofQHm8hmG5HW77oc68V7xMbwJ1LACGD1MYERx",
  "key2": "wfarUybJqvYEXrcTt8ibdWQtBGYEv6Kd33ZAnR49W6VGsH7fD2J1sgvVErDVTSGTGLJsJVR5dQAb72k38KdxUeG",
  "key3": "GhhFr9rqB9dbGCttZanM5thia6Qw6oiSpHmCiaPkRH1PmtWUSPzQzZDsUJGUVav83Pk9ATFw6RjWFP82N4UNUCR",
  "key4": "57P8Q8DWrt919bs55dKa8ARNqrvCneMzayzWEXdDPxMSidee4BCV9vVap7jhFEWgs2zZta8Nu7UFqEZgGoZ1dwro",
  "key5": "4QK7cLPpK98QmthnXahyMEfWB4QsLijBLD3HZmcqSFDgfWKtB6n5bcJ2C3onbDygiDEK8ZrkAz4R8cMPXYzWhxyT",
  "key6": "55Qmi7uUDdTQkiJ3csWtLjbhZZTLsovXicFSfLJhFcU9TM61aMQ1vV4X2sk8QcGGDy88TAo4dJMcSKPNPUqdSM1D",
  "key7": "3rhef4vkgBBwWCWurMcbvpW5rVa8W5x77eP3EKKCjJBZsKPEdrnXkAXGbxPy4ydva2kYPSBG1SHN7Jt2wtTLry44",
  "key8": "2Ui74yEdqJjdzJA1Ne7hvfTYodYEese5r3fG13gDSbeKigDKbL9haMvb4HtZebtaF1KM326RG5ZbnHMuWfWDuSNJ",
  "key9": "3dF8AMnQUmcfLFuLKeunPsLCsF5FFJhXqfekFfT7EWN4EATaykdfy1myPyEEXd8pnaANSFgcD4gmbKGdAq1qJkoF",
  "key10": "3FnG4f2oWgonk1NQYTe7fsybYnMjFA6AJhjFHznRmtfxU9mxsx2fN5K3kf9gWureSRgXP9ZHK25x2bMQiLbswHiQ",
  "key11": "2zLmrp2GXWnYVTXVkWUCTTMRUTYwgwg4ott48wTbmWeGeBVoDpJ3GfGgpeaVMrWuTuDDiTYteCjNoHtEniHhXC3F",
  "key12": "34kdnnAWidBkRQRXaHjZsXMPgLeGbKKwocEYhp5dZ6meqFY5L5CG1KptMBkWn288ehHNLxBnXUwTd1kZUF2X3fim",
  "key13": "fjW1bKXUKUR6mvmfD2aSBTJH6nNXBvUkX3dh48F5xDcAZwPGLJmvsZuSEB9j3sdtLR5CZwZ7bjmVmhE764xr3b8",
  "key14": "4cFP8Npr8M8KFkouBcWWNi56cdsaNmFhcFrU2YJdSNgfipt5nTe85HMnehhhndZSLryzwHFG5fnhiMoptNPzxrmR",
  "key15": "464xuaFcRAj6iuQB2KTogCgVk8N2ED2WuCKyKohd8xtWfD6XEYo5CZPhcLtVkXvigV9xN9RZn7zixqiaKX2UooHg",
  "key16": "2uxHMzkJbs1LcWCyttHrEbkHojMpAwhNgCPsHjUUDYdY4cA8mdNnCwjFeb5cMcyB9KizPLGZMde3meeduExQ3oX6",
  "key17": "45KSuH9detQ3CTM16SqEG2n7WW9WL8vtewpodm4km87UWAHo7WuqvzA1QzqsjqmsWPsmMJD1WyDq8iie8urQA6r9",
  "key18": "3c7kP3r3uY9jYvz1rHMJ24SXrSg3YfVJmhFKrkN5FEoUrFodkupSmNbtgrqXynMa5Qr3TcoSEpuDDYxGGWkE9bSj",
  "key19": "2fsQzUnjzEryp1KLJDc3ndhXTg5QHnAPaA9qXE3qvAzqLpYR2vhWmkpj7iJsJRR38gHY51eGwP5eu8jmUFNudQSc",
  "key20": "344mkXjfTtE14RFziqeXrKa6tKSX8Qd5sbn1HJmSKtvhdPqjxR9KHPjbUUs4PRa5n7FxK3Rm8wNyRQPVoSoabVKn",
  "key21": "4e8vB6bg8xdq2DJLMenzdXnxoAMmiG3dAP3d4n63SRUjETG8AeHDzXcNQPaNagdy6iMitPpuakkbXo9RZHbVPi3F",
  "key22": "2Xxn8Q5moep3ZvCR6EdiJqaB4DgWFGB3izi4gNrKJPKh4BJrePxHDfRGX4ShFnZaDiVDs4kXuXuPcrETZ7kFUQxN",
  "key23": "5RPJBcdcNSrds7ch2RH2PRpjd34EdLHhYyfh3JqnNdFGjPsNi56C1sqNxax1ugJ4UTyLQqa5Rm8SWL56FmKzNDA1",
  "key24": "3u2TehuTPe8BnoPT3g5DbuRB9oJyJY4WHm3EHvvL9MefUY1cCVmYgjBeGwxzyhPsCP7w5y6zxJ6xC3etH5mFjsa8",
  "key25": "qpW6iCRwuDqg6dyM3Z7NW1hTMjj4tq3KYeaFu89KNjRJSsLvZ51HTayXXsxUM6zYKWFvmM4TbuZbc5YY65wUddw",
  "key26": "PetjissTtUqa1ZTJUfSLf2LkY1D8EMp5Wxwx2acuCHH6T36S46HVzxUwL5QkNna8HERFr6zd7dSqZw7uq2RT6Gk",
  "key27": "5ZbT3fi2orzB1j96iJ9uFyxmtxmdiQQJKmmhMqVjR3JpvA7KEF4ijgNVFqz8f6Naim733B5CQCnoQDPgvhEisyyS",
  "key28": "t5Ko7C2tm65YWE9EYJQnGsaeUTKbDmQ61fBhUrAmYXwbydRXHyN6Nf66zJ78sneXxsnAXjiM8icgyBjiHsJSxKx"
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
