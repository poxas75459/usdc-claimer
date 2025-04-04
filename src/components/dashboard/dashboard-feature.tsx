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
    "3Rr5seEUedrJzBEiq6nLGbpzfa41jFQRinSuJTVaMbAAw37RPLeG4pLRs1K1TAm1iAarH5U54dZ6XHYDKG3VmQFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28N9SrcZBsgxwRt1Wz6YqHhTmnWMHGW1y1f5Ri5CApsPDAN4SWzz6cXt9kboZM9m6KCVzh2qtuqwA3RkRY6ZQ6i1",
  "key1": "65EG8VuCjtRsWTaQzUtsnS4VNr9s1nSzUR5fzhHqLNGXSRhD7SLupknE9kEwh4B5NL5wbWF5PNvkaGptbK4dRsip",
  "key2": "2RzVNcqZaxpSF5fakAYozVwHRm8qUqYDmskvn4S7unFKvg7i4B7XWM81Eu8WPpRjbBsRKoDWB7HKDpw4cua8TRQG",
  "key3": "2K6Y7HVzWbgMAeBWcJKzwrJHQSiP3qB4tKyyFSqgYXARR5FGEFKbYXWRbSsPxiwa5q5bWqwtNYvxZvZGtwQsX5cF",
  "key4": "3ARumPraN7eYxAiEf12ohNdb3tmYwNqjNosJe2Td2NekMDsYmvLz1rG24E3WH9sQ6dFZS7RtBP1segxFxk2hQneH",
  "key5": "2QxByAVJAck441JQU3TY4R6L2JfAHX6VNc669ofHCtnTgugnw3766LN2jUs92GKudrzu861hLwRCd5FYGTgwGaUA",
  "key6": "5FfVdUai5D9WueLgqsyw62yQWX35DufPMj1PCTjWcQ785reRuhfHudSPQ3btPyFyjUk42yecU28bjWyNgKaVk9T3",
  "key7": "5gFFfPVCv3HSLGVCpkp3FZkRLETAvoghurxtBEtnTjcomVmTyKnz7Rf3m2zYKsr3FusRNPyU6LzqxE7DAmgHGR6z",
  "key8": "2uekSjSMqD4FNuD1k8RxZvg1GER38bfpmuF2UAFwL6FhCzPkTiNWrbVAXLvawSuFNXQJ3sw4gTDgMpGu3dBzBxzc",
  "key9": "2A39SxbCPZ6nRFtZggXRteCkUorcVWtgDkUWkW3fjFFd6DyfgcebRyecAJjqJKLTWAModUdBVx9vTmwqKZ323NnX",
  "key10": "4nruhScUFLjHCbimoNE8Vy2e56uacATaWtfR2gTeDuLThYCf99dU33GDC7j89BRe9bc7NZsuyyL71HL8Vq71BhCj",
  "key11": "4kWQT9iRd3XyjUPoJTLn97Lm9v13MNix4MtQf37jwBpK7EdryBPe5Rbr79B7DV5E3FcnYMyL5dabATTQrEUA1QXF",
  "key12": "wMxpL4ZG69UyDsxF2pNq9xJJgLL9Ppeu2SbP32TAHDs1jiPDgepoWamXymLP5XnK1sBJG1psfWtX6jqzL8Mg9Qp",
  "key13": "31nCjZxdaNhzoZxCYQev74nsadseEVfbzdNdgjmGxPAUMEkFFXaRH3mSfdZVnAzS22EVJLXg8DPNjQtYdwZgnRXr",
  "key14": "fcuX6qMmPNqyg8XSkv3uSDqWFxdDhhKGiGtrSqXu2F1XgLS2ptxdPUxHHvcFSsW2w3eK6TSYveyXpoY3GcwsFtF",
  "key15": "XBoXEhjy4NXoAqLdByeL4FstTAamRjTNPj766D4kRv3fYv7qQJ4thYmAvTNhZJPWBkaW8mRaEhn6SkmASr1SR8L",
  "key16": "4h9Cs27jmNAh55hXLkfHTPHDA2EHCadZ2NqNNpkU1Eh3oiZ9pKNc7SsiZ2kqmdukWPRiLpTTrwgornDkcq4YvQjc",
  "key17": "5G2KSQ13T8HshkkGsDxrcvkcAFcqfa48CygaZuuEfrwNMMF3cNNsvKGkfo8UoUPhWu9atvkNVTvjMhyQdsf5Qi8Y",
  "key18": "3sSMZY1wjfiLuivtuf6N14tgZnoL5Prer8wdVFhr2eT2CKHgvgwkDipVrDC4JoBmdViEyTvzRpPJWgqfgY97B7os",
  "key19": "2nCGW7ovC9SBZYpTSyUDKawe7xrc4WqDYxAoeqtZRKWmyiFQr7EKrQRePDyUCXee28RspcGLbgyr8poLMf6FbAou",
  "key20": "4eykGMECuUeZ2ZururkrUkUpH5kf3WvE4tTHgYdmkKJkkes4re2GxjzbnAmP5Uw1YZLGwPLW8ezVCdtVZ6tiqNyE",
  "key21": "5SStm7F2kt6MCBtphi1dugmmPSEdCjKZtT1LjduwX7qw1gJgb2q94yDuVJFMbe5jRprYDCwPiAm7rif8nHqMrETV",
  "key22": "mYrBjhJzfNzrGQ594KLyqUKhs9rGZBj6QghHQekmC97ARPsKBGjQEZSGGJEWJRvi411ywHvGhwTtBU4zesrwd23",
  "key23": "4X1XjuYY1BJ4yL5fY856VV6Mtsk2MY7WsuLm8Q2SijbEopv7tbpuxgeFxcer8ZqGoz1jaMzPd8KWqR4rGX8RbjEt",
  "key24": "3cam87detTAUKbfuCH2ZxVRqV6HQ5Dd2e6Hj1UEK7kwAuXeeCgYz6ghKyTm9XCxguB3PCK9cZbfXmJ1MT8yqJTnb",
  "key25": "2wBvRjEvN3cVzG6pG69kfMyTNEgxsGZEMgMrEkUZiHRwdveBeekBbsGeq7qgs5DNm9ybKxkikBDuh1H8WSqywwR5",
  "key26": "3EVe5p3U6jfKU6Yc7F9jAd29bv5VcbNwQA7EsUFBnQiue11RmgREATNMzqLVGc9Wx95Zfk5pTAXRsQKbXu44Qf1i",
  "key27": "4JzotbbNuEtymCP9udz6TcUNQSJYvvANRpZkgr6McqTnqL1PQKzoEouQKor14unUSAzMUHJ9X92TciBzY16DS9gd"
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
