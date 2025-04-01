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
    "spzteKbnhoXWZWEkwJbqU1MnV2xrZAuKvMhGwvSrwVzhRyCx9qMBNvWCskh1HxfqEzbtLfaciPzjz7PM4fxa8Ns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rAsn4ARiE9jWjchgpribSQRv3M59Cv62ynxCi4xS7rnmGGnbtovN3k4Cck2soDCkgBxaZRizwiAqwgvsSA5nNXY",
  "key1": "45r8QgGPSa6U7YtC6THsKbmtiXnhYbvC6QUFkFkdMk5WnsUBDMVWfTZvTeTesAkrkuCUeEEtYhDxMWCVFL2CjkM6",
  "key2": "3szjjWvepixR1YsrFFYYpAHRtK2gBMyU7Qfg7tVBz5rijxfVjuhMMNDEEQgui9GuvwRkq3bR2t6hB57ycy7wgXjR",
  "key3": "3RZkSCgfCrxna3M4afLvao8ntsNinUFWgDdJjGpyeJFeY1wosepJnAqdbtP6pwznkCH47m1VTNsWwXQnLjERUYmj",
  "key4": "3znaP2w8wLkGg3o6JPGZeFbduYh2EZ2UxV2SbvhC7KMBj9Fdn2hnESq8HkSwY94C79qSwhVBGaPyQA4Z7kgRxv8p",
  "key5": "4oebtkidmB6abYqQ9ymib92v8WQmuPmEgPmb9MT3MVke2ccYBPS1FdzAkNKRyh5c8qo6rkLwZrmzk72azRWr6e76",
  "key6": "3p1zYRTPb5VH6RsQcyqjNe9QbCyMygaDyNATgMbVPJvjCwYuLWM2TPzqkQsbARNKsFzEokewed7GufRCtgLfY2XA",
  "key7": "281gDg6mVccwZPk1k7FsQpQQhtXCGUJiC8dSCsPFtRiPhtGM1U4AmMTmdwdx62JBhqftbmnzGUiqkuLpJsTwZ2LV",
  "key8": "2ZhRrNMd68LvxF8416zFexQkAdXf9E2NU4FonX3p8JEj66bDULEb3QMtc41er1cZNg8J4NxBaQD1kdH2Zj27gU8i",
  "key9": "2fVM5dEpRD9e2GeSXqRS16ShCTT2bnm7oE4zB8W8j6gHmvodJeJwPuVT7BqLcULDRSKcR8EEcEVHFmKnH77MZHVz",
  "key10": "4VZZnKWKocDZpjxZuJEzgqHG6sBHqZVbWJZymqi6Zj6qfKUAyMBBTkZy6X8QviKbQhTsA318XNutKWaarD9PHFF",
  "key11": "32bdh98cymgFaSKnjzYFbcVYGErDpiZP7ntMihb17hRVDfYLjYDLLJVu4xsns7QcDt8z7qH73hbJcoq6axmv7KvX",
  "key12": "XsLD1FWkzAZBNHJK8jtNGoyDhPF8ZaTyCxmKzo5CHqnpfiTWKN7puzoArhBdCLTQe3h3758FL3FDwmbWnJJ12iA",
  "key13": "5wfMgMcknRbpu7ct3zHrNZsqjkgsEZ8eeSJ9piaXrudvsAzyZLjrHSn9ZB9xZocjbvvZJ7JQvkR4VGWrf9eJsc7V",
  "key14": "5K7ijKPNkLGwSA9yUjgzR82equ3ABd93MJH4CMJCasXAqDXwzDksyGDKGbitZvyujgtxLYjbNj2jmphiMRrk3rGE",
  "key15": "6Jy6xyBSZA6s3q7T7xtY6cJKfzSbPmvECF3KEYBfVoach69JfeUrm1BNS6Gu9c2NXEE9YHDHFrTPcVeLgyT6cti",
  "key16": "2ZYWsmmWxvbxywbm3m7n8ixHr9saCRwzbP4XizGufPq6CvuRpBWhkGRCRetsZZUtGWYvuhHrXMYSfJKoKVMvV84n",
  "key17": "28oA9gNvCeU9oVBZd6Exqn6t9R9vCeeLXxHULawJUhbeJHJH4mGGy5cPsM7ydyJTcdoMLzsjLaEu6UcJ3BzDGsWt",
  "key18": "4MoynzDVEzqCPRk78uzazHfjR5PRebyxYH3yNfEEDQ1MePUNvReYs6gr1vDvfWFbDzG9DN16BLkVQ2Yu7KiLNzaM",
  "key19": "ntHLHpWaBmLNWmz9sexFWbRyq43737WoEsMGw24DYFxgBjMn5z4yFKRQhsQaJ9v5XDQohJNBTnRsGPCKygFndHX",
  "key20": "5N2rCcySqLbfLJwofEK7cpDc5Wz18NranncufmUdMQFumXTDUfvmetVECEx3cJje3G4UFA3btFwbRi8VXLMmr5WZ",
  "key21": "4G3WR8gFTtEydFPcFse8kr7bo8MYJ2ZpPjrrHjgLfax8joSeyx9qqy5k5pu8ZdKpLamTAg4u2kxoae3CCUW8TpMH",
  "key22": "65A9uASATCHBtAVSzytZ9Rw1b21Z6EfcoPjv5UWiF9Rfj2TN927ZWrUereTVw6RxTMpqz9uvBa1VwtvMAbuGiEzi",
  "key23": "3RpzN3N7REEadQKYnBZqnwuyq6mf8QppyA9BheZJ2FifoHD6GrEoN37fwyJB7Dxx7BpLpAp49zh89WyqjYQC8RWq",
  "key24": "2M62ZTn3k44vGhwbAdt2cC7cRZdNJpUZXXypuady5rcptVUk3BRSDm8qvYUxRUJVGJK5rKkTcuG83or5kHvBpUyh",
  "key25": "3iuhC3GaMCXMhq6owCqNkH39CEVyxdktYMAUA5XTDkdtrXPqM1SJFLyaB6F4GjDjxQPPFuiwNe1KegKyzSd2MJ74",
  "key26": "2S6CwWPkR7quisarHAXaXdWNH6cydfzWWxAJosUCHkvAU2cDm3Yuznh5eLawGRP9abbgCuxnckCMg5VChzyTKrmF",
  "key27": "4HPuc8Gi67HAkV2i425S6fcVcPZnx9Evy8qw2p2BaMkFLLWbUT8mjSnf7oHbDesTYEbowTyp2n5SnYME6UXPsJEg"
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
