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
    "4bWqWWHJMnKghkaq6pLG3Fw9hEbej825V76LjHEJ8bZkoE2sf9DwtAzZnGkziSqww2zd21xxbCxf95YASgvKFoAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JMBBZBTVTQVBe2MYDntmGfNkmyMAsUEbvPW5DHQicRYZcfeFDVUMXVgoqQN8KBnbNi3x2nDGGofhpZqjV1xVwZJ",
  "key1": "dkdCEYuoeuJ4BAWmqDG14Zx9qpZQB6uLWhhetb6pYxQAogsmcKT9cb4iA7aqkZECCg81724e67nKZwjMkvRBV6f",
  "key2": "tbkFJPrSiQDbnbC8QmLWedDhRSLZxAwfP4JTV87ihei6FnsrjRHGJW9EJsrncXSMMLaMq3HS3cQHViYZS7k7eqe",
  "key3": "5WbbMrGo5kGtQWEiB5FWiXXm2opDKp4nNeu6usz3u4aaaaGTx6HhhnsWgx2j9YEH1BgobstuLQ6ENdX3GAfgNvqV",
  "key4": "H2J3hznitVRu8B7T6veB1c4ovzqheg94UGDQUHyTHNVsM9DujcmncQJj7uDZy6NApEG3cm1QxEpoJi3WWtxrJSd",
  "key5": "jGez9tQQ3nDfv2VrkQPuPuHGS7LYWuka6Y8BC5pYwo6zSgiok3qhjLBoRwHVeu2ucVqNqCuEgwyPRAwD6UBJeo3",
  "key6": "41waMSAYXPP1ZQJFmfzz3eQav1Nv6CD4FMmQc9Z283Rd5sAqUqTm4CX4Q2Wvd9sNWDyaMSgaZTLzBWsntKZMX4wc",
  "key7": "2PLy8ajBsJdhBrCwQL54untMN2dcKfC7bJQJovXGvaNKMMq85b5VZoK6f58prkWbREubwXkBTMYJwadvtc3nLG6o",
  "key8": "3xzE7tCusy2CYQForsPpMJhZa96k5XWuYQHDbDYhRk4Nd3kUvbCTCfxZqsVUXhcg32RowRSntEUK47tYdpP2MRpD",
  "key9": "v84reE6Eo6SyGfFLjpFdD7TntoAgQbTETJqppWY6aDThPNquKSccjTa7ETajeVcxc36ri4fudCcEdG98NgWBoB9",
  "key10": "2Cb27rR6B6RTkgce7JEMzNSgwsBDm8SQ8KvYvvwbtQjqjZuAqCvCFpAUhQH9NX42TYEY4zoRbZzEWZFVuwm2JdaM",
  "key11": "5cgQfZZVG9fKrkiqfmURN2tKbQCmqTaJvu7467ZhtRj5Fvwv8nZt5jpuJPgJi3MLJH7VZtdf7WdMt1R4dtFV3DN8",
  "key12": "4BygFYoVo4fQtXY9PG3VBTJN799R37zbYuCRrQvrYgQv7XB34HfPDCWwVPJPhN2m9xpER9masJEJ99HKGw8Zgp9j",
  "key13": "2GWKwaM5RHeaRgNaVgRBwH1LzekN8mkeB6wR4ATLcSgTUTtZEE8pVF2uavdMX5oygfguLX12qdMqefPPG7Bk8R2A",
  "key14": "4pPaufBgdmPjtNEm6HuUCWEfTfv6asEDC3eSNKnHGbgE4X4ycWuycVZkB8DYTqUkBxJeaF84RthKvNmQnc5mdW6L",
  "key15": "9MSRom5btsnWAijEY3WjcXYHSvK4qt7Wvs9V5H9r8oohpUFkWPTqBu95KyXirDxs4ENtc1GzpFmYM94WLgpszi7",
  "key16": "VtFdRYDaSWt54WMiCxwycBX8vF9HeZ4ZH3XZvjMe3Sgged2PewYzZrzDQZwtQDvNMhWUB4Uo9ZFVoxNpmgtefmX",
  "key17": "3PUFdznWZDhPPEgcZTgBToHY4XM5HXzEwXyWxD6gFWoRuxAsACuhg6aHzMxmFfCL6Ddz6vyD8S1cVmocLHHWiS99",
  "key18": "5uexPGg6DN6nsdaaxsXNdnqrJyLdBmgestdTezgySuWW9MCxtCR8kuozT4UPzy2Gzkg7DGi6Rti36vMEUcSCQ2pf",
  "key19": "aSsPzQa6bUjkZoKmjkxYFJjeBuucSJu4YUJKq8GTaFYcviwL8jRkSNHxnVeK2c7fZQxZNZ7puwpJQiqmMYYopvE",
  "key20": "3sDmyyZTgFAu2nXbHtM12fcMPxGLdD3jkmjxRhPPKy8yf5qeZ5X6Zwb855mMaCQAgU68uBirJvafDVs6JaDf1Mot",
  "key21": "3BCG1gzcEyAFdjEUSFxzmsbBbEHvrjMHHQYtSD7WQSVUTJbfcMaCq1Y21McfvkijaWz6uouLeERZ17uNC2ubrKta",
  "key22": "39ks6RuHKabmZr8mS2hz6prDcDxrM53Seq3WPUEti7XRKfFdUeenQadyMTjaP3mG4eUxXyEKp48MptUJkVPbxF1D",
  "key23": "5wRfdYBHujtB9tHboPDjs8HExbrj9HQEsqZ8LTViyJ3yZiJkNQUVtgcRgMVvibEZXecDNgBB1cLoNKns32uN6iy3",
  "key24": "4nyjy1dYwd4Ca2CSBSscdCrGvSTXi3yYcsjTEjQ7qTxb8VBAxBXL1swGCfravp2GfrjxchmBnArZWdS3NkNo7Prx",
  "key25": "4R13TNVXwvD34KaNfS1LEZ5LJw1PBHuZWt45KxEV5DNfmEcTM1UsYawJqKK4BxY5SY25zUGocKz98YvpeUHVj1re"
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
