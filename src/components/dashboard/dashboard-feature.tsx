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
    "61eTtkc2CjhmSr3TXHPQN2Pirh8dspHvV4wnfRGPh7xvnqjwdwJCMnnt2hMM6RzZcbqSRCNhVn9sYaQj63UgwLHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1eQkxquMmKZD9ct3TDM6mGRi7WREYnDiwhfhei3RxuxpUeHVR6wyV8VeYZBqWEXt6aKLfP5AuLB2VxUsoEK7Gu9",
  "key1": "2rHMFzTdJdArUw2ZQtgEPTT6srGtBoBvgr7PU9LR8s7uoq6gGPQsVF5k25FibZzHDNzbDkB58APufAtMRsKyQdSj",
  "key2": "4VGeZgR4WGMa84L9U68Mn6KqahRjvZdvBR145dk5RVEm75fXiH4io8nTMyz71ycuTUXsvRtyRM6x3MRXURX7j6ZJ",
  "key3": "poCNrkStjnjGhC5ha7AeWi6QBDMYcfVhW8R5r9H4S9DFSwoeG1b9Pag2APcTVAJo525oSpdtdygXLFkzThWm1wk",
  "key4": "4KFjkhMtD6bvBxRUwjmLfQgqDtG4PGkh3vUSSDUK7cYVXGf9jrFnrFhTNFP7sLFmePjwxqHSgEECPzXa2hCxyvUv",
  "key5": "5PZqoLzrDe68zMVdDBiwSJjB6pPHJZyPTDYio53ihjxb3ZYdKhuHixBHwJSjqY3fy4XjePtgnb4bHv7FFYRyuowP",
  "key6": "3EqEmM3JyVgJNN1iuzQyup35pY5LnEGB8vPwrYEJXpadkbxoB3oRYTARuEae9DQSx5HTmvWPZf8gTnRzovuM1CDn",
  "key7": "5DdSy8Qvhgm1uCgzJGq6YG4obsRsLyiThr5vr55zoxKMGRfPAQRACRThiq2hZhX5NNbX2gZreESwvrQWKYNHgbHw",
  "key8": "5S93d2SxHzCy3Yfg19Nxq3mUEePPwnfCDx2mRL4bqhivfrM7TkyfUN1EvHkcCbUaoSi4NxfjNHTCx6CFXi8ewmi6",
  "key9": "2vtJhdbSy7ahfeM6MDEmMqPBLoWjeAGn2FWgFguFgcXqQ1qXrzuX2kiXkLddeMTReRWhWVE1cmfG8wyJHwesUnnJ",
  "key10": "41Xj47y5PuU1jWKtgoUdYhs7DiCmWxbyxsPy9tX2jgH8Mp3BNjRDdwPK3DNkjJxMrAcAQhzXhPkSEjNbvXjmmaTD",
  "key11": "3VgEVMPy1czmascDU1MMV68xMxNaKEDiCkMKqDGkg8ffEsh6RENHb1AHKpc5sJ3zbJoYSJkcWyPuhiD2iikQswad",
  "key12": "3LfZbvz1qL9JniUmQyv59fmCXStoFcnhwmKV49DSFoRKMG5cpQcDwYVPkGVrHFffZ35KXnBYa75aTRHFFmGLvwhP",
  "key13": "2iFGmG85PgQMbYwm8v95c1T6APxSSgQuzDrMTqTzkEb5x6ssn2kxNqNQoxwYAFoq2iGwJyhWc3sJcMAPa3Eyffr6",
  "key14": "3d3EcesfvHUzQjSLeJPPCn2oUChXhH4b73oR3KWpw9MmjqekaKTiFLEUS1x5g9PGHeVKU4z8QSrKxMVYYx6EszSD",
  "key15": "2XykiVewsbJVSV3nGkiCDwpTu85dQ96T65sjdd25HP6oFJn7c2kXr75vRkmxE15XWKkCU1EgDM5toECe3AiN1wes",
  "key16": "4BkKeakpWyPdhwRKoPFCxCVwT7hPkxErUXj4YaT6975T33DzHcE37qqeHnDidciLaKjJLpLPFEX2X6v3kqPpVcfw",
  "key17": "4UT8pUqYFdhWr3LNhQXvKXTEcrE8hWjPjrpATcVjV4RxDe6vnkUSzA5AQ4a5wd2fRjHpyFXS3js3RSavJWGjPuyN",
  "key18": "4PrdZDRiG8uxt1DCE5vDAvoNkNUD4cvLHAu4hmbbmmKSwCvEKoMh6p3F4mdbj82VBiR3Xuhxe7qKjfnguHkyQqm5",
  "key19": "3u6cpekpUVJ2eXbS9fSqxRvucrWFWXrZAqEtzTJwZLg9jyjYyJdaVxkuhgUt3YCzCdHUrSpN6emBBT4Kw7eAUr2f",
  "key20": "24Qvor4ZRb5dfxhVXaFJLXqeY73fKhNQ3Mg7RED86mFiKHTQfys8YyTGKX5dG9tsfd7mE8N1PZoNQDYetwAwtq3s",
  "key21": "2pauAVdnhNGEdiMV7rGgUerhcQZL34GLb9bBfB1XcCNTEbkGqG7r3un4LBeSktwWvrWd4hmLr6XkEbZoJ5YK9dEb",
  "key22": "2GEqts5gQcQ3NiC5duFznLWjfxRBdRVVBDAPf1P1oAmEDtTDkA8BxnTosHv7Pf9Vrrfeybk1EvJqXaid4a8CMBkx",
  "key23": "3KvfFPvdRKN9kUw2dkudMosEmcmyMBHNEQWhC2FrACUHXk4uc7ofSvHHZZVFhh6iKFF64tRnhXyhAjCzbg9r45Nv",
  "key24": "22KiuJP47Y3i8vbx2VpamYrt1q4pC7mpiVeJuLdp5xFTPG8NPnFqvDV2wwaffchCjyhHYLGXVNnKHXEHN8ExTPpa",
  "key25": "4ShQecUDkdfCXxn4Kmi6pPdAECCDUjmmwTcZZXADaKC7zduMMrWT6TjzAALaDTd4iJbfqnGaDhfovefYhFj7p6d5",
  "key26": "4njHZgqRo2FdWPzw8GSD3kHq9ESzR1r8TecF56qFjPdYfQdsgumxW88sktVxVajoKMvtrsR7zBxREu3jRYKUPcVi",
  "key27": "37jKVyPwgenTLmyrBQpVZLC3vkopoBYYa9pYj3XMVyG9pswvKwRHVSTjWb9yBcLC2RaVz6MiVAYnVrytspQRyKhf",
  "key28": "EH4evXstJCijq5beVgNu8BTcqrxcM8omqfJoodgA7tC47stHEUKLmE2NFfritn4s8CvpBQnW6MeCej2J5YNRxTJ"
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
