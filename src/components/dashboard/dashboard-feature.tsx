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
    "3cDaohvTuY8Hu5HeXDKdr7QhuNb6iNBccFKpn5Lub2nCUqj9hDw88PKU46LPJ6XJMysD7zLBgHPSQ3uL9X1hPPeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XheQUTuDE3M8TfqT5Be4zTsHyUYnYzwCGeUaWBnMhwVHp86czgYpEouzWPYA3ME5qonhomgNYEatFdvRhyEcebK",
  "key1": "k1bCPShmE4PVCAvNce6WcmY4fyC8PpSCPtvDBM6D1aPUfYxEWQiWwGu3XfsoEjxmXKpP58ktSeCS6i4DTvhq771",
  "key2": "4V1GBRBmf2K3nMP7ugQhcC8gxyxxtdsWsCvXABbTdesRhbZvP2apDNUXpLvyCtavqDaWAhpFkkcru7UQyDLEfd6D",
  "key3": "4QYm9fVrFv7dMudGcFNjdHFqBmDCtNb2HeFCYaq2FaCH2YKvxWFt4pvSfCJFaQS2uqfrgSVcAMSh6pQQsTBiKyfr",
  "key4": "5tkmy6EvgGfTQHuhK4BEaK7SPP67KqG875uRoR55fHCeDGSP3umZtpWquoNjrnyDJDMLpKxmv3osPN19QUWaqcUh",
  "key5": "3pGtKKHruXr8ca8TXUAu2XUKzDSYS38mjbBdAq1PmNBfZD45buCXMnPthkWLZLhUdKRBHgq6wwsF2hhY2tayoUx4",
  "key6": "5pPY8Hiqga6k3fhNTLGsmffY17NNEFHesUeNLRejbqmhSBZKqLjRGV8zwn1mT334ZZHBgcqH6EdisVb3wpXhzMnZ",
  "key7": "4ktZKMZSvZ95mANPGEakt9hSZUHHU9V4NREjsqv98BV345pGidLznYFyB4535busY64XSVPQFkqhGkL2DjeNJgh4",
  "key8": "4nyrHhg4yDduF31fVosDBWTx5j6QNhaQLEi82yaNJdwGXVHfUmBzuBz4kiAbRouojtYPkyNpNTaGyhXLqJbP6x2K",
  "key9": "5jnxoBt3D5oZM1nnr5c8fUwezGDdmZ1YhbyyowF375KR4ZtVyuAU3j5UK4KkKwqTZ8BkZAjShmwfzkN9RFpMbs4L",
  "key10": "4Kd7A8nk3Y27Wsij8duJbF4fV4RM4UqLSNx1VT1KdRvvYs73A3WqFHY3KVWFYHzLcKXVJTKtF6Xcg1NGb6cELNpp",
  "key11": "NbmfWcL4eFSMS3JpcKVKmygcnG5PTTgEb7ThFXyq3ue9rhruoF17gdt5mSQpmFpDyXc7z1NKTWycD3DMMkQLmDx",
  "key12": "3tefer1aGyZR3Qh387UneFeRBPBAH2qvmQ2d4yVCBAmBvmpGD5Fe3tnqKKSMAQ9fooQcbAFh5Lgesj9m3CZVRRbB",
  "key13": "5Nw8mRKg8L7xZgqrFggNyfh13qUiJGqvWerxhThjbm4giaoS76H1ptYSxANpBYv7hG7ruLJWvmmm4vf1uaP3R5Vs",
  "key14": "64sgGuxPWVQeo3U2RaWXLA9B46Ve595oCkc6CXrgSN4qTBe3yDvLTN99A92ebXsiNCkea5EAwvFqretdGwCUeC3",
  "key15": "2zVBtGLoPVdtgCsFfjZMpEy9AUprhLnMuVwG6PWdu8WsfuoNbZu39QShDMfhezy8mQ8QHwrWjEgV2LRg5cHjreH8",
  "key16": "3tAmsqVFbg8G5SpotzCXErh6LKj5hKtntHPHQDB1oQ1FnWwPkxF29wN2ntMr1nxfpNGvRWG3DJMq4iaAJ6gGHnLn",
  "key17": "3FuX4xReGsmZMvuhSqg9XMbaZwCFbTvt5sgE4NhzNVz9VDcBtqwxevQceTsKUArSENKVBXupCKZ1ZRqjm3EMrFtV",
  "key18": "2yk7vaLfzBvg9kABnap73wfHiNmUfRFvz3Kot2fibg6c7nBj9nQDGM1TsyCKUGZmKF7LucJiqNmEYuwVgJ1BKyc3",
  "key19": "4inBzD2Nc3ggTD7pdTDAxEGyw83UmSB2B8kQ3cxLfFuh3wUKtdxgvocWUndv4SMRK2x5z5vbmJgahXriECWYfyfC",
  "key20": "53v2UarT6eHdSRh9tN17Kn9ABx3m6Y1Uhdcnv4k4fY6bMjcdwsDhVmSoZgoqU2wLN9EvGsTXm4K1UgW4FonNmFkm",
  "key21": "3WovSfzKBXHjsg9nyDpPgQ3fTYCGAvLHLNWmRqJ8azz9NRozHfsCccWPvLfH6EyZLA1YkuKvhzMaZ4XBETkw6JV2",
  "key22": "5ehqzsjJTPEyNsWPdo61gLCZMson4PjGLVqX9bCiBE9yDzW7EibzgHshfT7SA69UnLmSfAJCeN1w6ibZ4sVz6qto",
  "key23": "2pQgBdEiRApJNHQyMD2gTQs1RnPSb5qPnjVtj3Zdr51g6U66yXwLo4MvZH9AGNA3KksnEENXSZiD4kxjujowFgsp",
  "key24": "23GDX3dGhcRCFiJmBbjycGGq6dc5ob8ko9Npa8RpZ3zGx7jb9ZzZ8Dmv4KritW3S5vzF3fDDrFfiX7sBRZiheKE6",
  "key25": "oW7JAmz1qc252cAunb2y3NETKng6oXhBqGTReeWgCjP7F1obcC1J5sRKvKoZXZT9qu5h32cMvK6PagJD6XzEeCC"
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
