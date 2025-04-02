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
    "5VLogCDnXwdjWHnPJjGQ23jW9rvH6jTMf9XzUD5u75f9DZZRua3dpkacFefYovZ98aoXKzLUzzewkwDJCoqAPkEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iHKGcBK96ou3oE7DUAwkQApmV7VrzwXhL4jz6v13hR2wTj9CsVeUgpwnBm3iZZtvybnNRMDLUks7Xi4PCMPQHZb",
  "key1": "2z8ft7iiqVP5rXRbPVLE48nQUmMH17x7PWDiti1zYNAAPEYrg7ZFHivo4rRs82VrbuGBWsbjr9xwErJQZx75zXhe",
  "key2": "43k8iPo5FhBFuqEDBS5xZBpLpt2ySBZQJX98YMCmvrQi7RCDK2qvSAcfHtvk2TvWektPqv2kU7CiFH5fcdL3fBcJ",
  "key3": "xsmmVKiC1wKRze8ZKDgbTbwPbTbZ59yhYSyd9QpKbEZJwFikJURF3CTSEu5C7UQmuZve86QRonxQfoXiLf8mi41",
  "key4": "3jZtTgVQiaQ88fGDqB5DmNnapMuhaUx83PBbwo7FqRjsdcUYGh8S12nJ8h7BBUGcdrJvWBgJ3JeyHgW7ta62yjp3",
  "key5": "7qDJnEWBHwR9TQeWj5uvVKTsGtf4kss79KbbDv2rQnNAHNm6ifaqMVtfiqQUwFDVUFr9r83Nd5uESoosLNJEWDG",
  "key6": "63WJQyeihe9fENKHW7Ho3X7vzycAPB29bkD1gYqTehHEx2DHMSUN4LouzrSDbhEpBEm3iFDC4tGkuH8TBtqBRmnP",
  "key7": "5Atj9yX3KwfhcR661oe7zLxoWJpqL9aQjmeL247SBprvAxLfY9ZWddaVwYhXDekurihFQWNAAW49BaNv78uJh9JE",
  "key8": "5FEgJfRs3i7NnY9rgMVHiA9yPKwyppRxffaqXhe3Sq87yk3ZrzJXyFeeHdKg5immKhNPrDzdoKaXc3c2BwpcbVcr",
  "key9": "HiGb28cY6d8WJ4DkjCpp6MeUEcS2PJbXBkUHjMTiB32XTPJb3UKw4S7ZbPnJMuMHx3xxTHry92uaxXqCrprveTE",
  "key10": "3bLxFrRa1CQUG85vs2c2B8fPqUGt68AaAtUcKT8o5wqV1FjVX1a2bKtZSa51k94R9o6nVqTL4YmnCrrheSZ62TL3",
  "key11": "2hgEyGVBGJxL375g9ko1rK2UzDJBiCJhu1dmeFU7s8pAYE2YtrNBr3Ny61wUeEHaAFk6nG5yttH2MABxhxthBfEt",
  "key12": "5qGrpWhDFD87NLWy7rPfrqTSxXjmuq9VZPZMvzZV8nZUja9TypTSbz2C3ojTwXRkLPRQY6i2fdvnkzcsqpPj9Dwo",
  "key13": "2h5KfKjUQqrXeUPgG1pwRVQRhdXLPKZS3pfsTaa3V2WuYdHg4uCMfk7vRz2mMyUsi4odgRK5HjuUzTVEwAZTyr8h",
  "key14": "2hYTpghVw8T6dBzAh28udMsuNPCetH8muFcSGwh6K6zXx2GCqNm1DnmQM5ahtk8ixfYYHuPwh3bvQptd4KxVRNuc",
  "key15": "4BSP9MgtNwafh7wijz3Thk2LnynXZa54DWczAP78ZEojEw5DMQrBbNdos17LaK689aiL9YvbKA6p5rMjmZMMk8Dp",
  "key16": "36ihx27d9vqGwZ3hLGwteseE5ZiGhyPcLDg6DWW2Yhemzpq4hKaXAaL2fpcEewgaKZwyg6xP52Lw51bESA4gH4Rc",
  "key17": "TeC4PEuG8txVqf4QnjhYmxrgZkhGAXHqsLDuLToHkH45BiYGPvfRgjx5HJF5MEanorcYnE3EB7qUK3p1TQ2vWob",
  "key18": "4QGPP3Ej8YtMHJG2FdFchgaMRzaejFCZY7kFxjFsEk3tLmL94gYvFeMS74JFU8gnouDXLVE3EW8V1NNcbqvhc6zX",
  "key19": "5C5mYZ8Lss6q4tC42m4Dq7HyygqXvzFd5VEVr57qyzmBKUuYcb7r8KTT5MKhrCL8iuotKguD31PZTnEZaNjEyS7R",
  "key20": "2bPPBtvoNsLWVBEpRRKrFaiDw7xXSqUD8KxQ77kQHAnVG6V9PLEevqEHo4dkwwVK8r44RwMVkYDPaMEEMJDZM3gj",
  "key21": "4RKf2Wv1wmVa42dZ8xVfZo6ziQtMiMbDCfKeyeeEdJTphsAxCKHtViqBNw2WuMpQ44yjQhnFcoZR6E18b7rPN6tJ",
  "key22": "22mBtxLNc4GNSsq51ZtY7LLbXsRL8tD41oGeJRfkGzU29zSNkFVVsYTJmkdmCEeqPHZ1bBZikYm5uidaiSXpjBT8",
  "key23": "3L9mdJbQXEAkoi9YRNajgZn7NG9jQmdeTZdag6SmABAatwprTfE9sxD5LKtMfocn2wNXe2YyYUTEFADRCFwvpMMi",
  "key24": "5Bk5Qzf2FeLSQRinTU33yn2JHYQbDHRBEGh7qeGxQYZQL1nnt92rYKoh813qXpX3WtQH5wxAoB7xeTA5Np8s5crj"
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
