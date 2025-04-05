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
    "3qb5FM8hNg4HZmf8nfA1nXp98Mt3eTTYpMkkQey9FqAxbF6t9Gf1B1bLPRSVGUdAJdbPE8GESqNkmknAxYNXHCHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uhx5Bs7r6E12phBVe2UYZbVk7jCRuJ6W9q2VuhrBu3Kj38TfUDBBorvsCNgWydTd5GdWVb8rChDkMPP9agDfbRr",
  "key1": "5wjAUqASAUPKqoeocbXrB1Sa9Bkk9Q3wHAwGfZnGgeLKsPhDvsF3af5o3UEjy6gVCWFGEcgMgdNrgSzfg1AVLPPA",
  "key2": "3iESDTvwd5deZaqPTLnymVkDN714w5HLtpp76UifKVSFyrFu6SGHntanFvsHpKTK1ZehutfnMA1qKRUtgcr8Koms",
  "key3": "52xHxbFEpdzPSa5TpqDjU3YdnBmG7cUon4j2oFocYWnFqW2xQ4fmT4a1JxFsG3s9fEWknypy8YYuRSPMVdzbZhNH",
  "key4": "67SQW2YGc5SWgFEZGWxonJFf6AuyqfNDcWYWjM8A7LieHhF21KD5cWrty5cvYXiLhKcqrLbLfUm2m2YdeH7N7xqv",
  "key5": "rfUYJpH8ASayMhztTNnCKr6CvgEbHoJGGMuYREYrGrUUQd58CEsA3ahJXM5A23XTtHnQtzYJjVDZiVvdfA7WXQ6",
  "key6": "2JKjxQcFUyqYKgGXZ7jUtWxWq7nDGJB6gWdabaWCsC52ejMW5JTHrZFTcYx16RdYXEjvpVr6yPpLwQZ36mzNiXRg",
  "key7": "2eRtY89qVw7VsXpFTFPN9B2AYVD1PrBegR5b5GdgJ2nonduYtpTpqZdztkzdtUe3ycUNgkhewFy9bAMZc5C7U4nU",
  "key8": "5rU1i46f9P63TC9uvBBnaFRYCuvApFkZcLpkmjKKK5yXk5RJpTuzeYzqG1j9n5dd3n8gqHCSh78BCDZQEmLxS32M",
  "key9": "3UrUof9epPjhrm4dtcLhVVepM2VLxz3Fr5apzyXkEXY6wUC5f7vv7FhSznzxbFcnLy1yv5b4gQ5Vz5JdLA99o7z4",
  "key10": "4rXAEqdNBDq72PqDxQ1k3ncTqdApaFcuH5rwjBfnpmnomYdfinVieAj1BJi4XqpEvUzNh6FX9HeiXUkyjqzM5YpY",
  "key11": "3GpwSpYTPkUUykHbMBhcP32LFr5gEsoF8yiiZHJzRPtgHdsWFU86ogVwBppophvUUs6Le3ETFGMqa2ci9c8rNS3j",
  "key12": "54VCrGFW9QF6pdehn9YAptxNe8aMUVPUEGzCwmRDSsSGiU9cqWqL1Z1D68jjTKS9nURbwVJHd97ZHVEKW8Vp45qu",
  "key13": "4LQfHatS5NPte3SrwmZph7Gp6jHsznAU4gKwf7xhYyVkehqrLod2LF19QiteZVi1FtPdHotoyRscEjwubLo6QbcJ",
  "key14": "4qq7We2KXB1txQyW2Ljfs1NgY9T34DCPhHj7cx6GkvLkpsVsniv2ttQRywi5tVAiogyrDiyKsEXWyp3C1v9T41Ug",
  "key15": "44FmUnHYv1JhRYMUwaTcbzsRfshUewocWdVyemL7AUgkrudH72wBVYoXK7HLoAgG71X31WuBmFXsVvnxuerGV5sq",
  "key16": "58b49Gwg5sgQpuhmLeMUMoaSVRZerCtuqYDibsGHwVBdARji8LeUZErcLoYrVosHMdmtfy9GbrJST8DCt6XJD9vU",
  "key17": "5Lgpo3M45AKtbFrT7Qkd9uY74NmorFhAqWwGevPCPuJMS8mTxkTPAociVDwTaDBZrMHWJw733BQzupKgnsSQwJVt",
  "key18": "2pUfUqxe9YKdvNvZ5JQTAEbncuDdufMPNV9nGyGg58FfHfdBLhftLZNREm2YvkJmwfmT9FdvtVcauCkHJWmaRFqQ",
  "key19": "3dRnEJRAtHnHLXRQshfVGL95A71RwFxPM53we1BKqPdNgFHwjMiTuEToHff76qZrXoXd3pT3HRnUERcrFw8jmCvb",
  "key20": "5Hr5qqopR81zaiMiwMRMoYPNoGheyp8uzompVqQWXiuYH3L2Tm34gLYKxGGJieHEZmKVWiVLJdu7FaH8xouF5oQt",
  "key21": "2cTCAtSTHyQyV4JKAppPn1PyjKCWteYW9HweEbt9q5KxQ6PerJHFMmzz8nj99nzN4rqvqhSoAj8kFYWhCyE3x46N",
  "key22": "3v6ZZUTBXppAbDvbPd1B6JFHRHt1P3RiUv9kvW6qzZcyyGaMrgWgFmLy8uG6YmyfeDDXD5EFYTN1fsm1ZhRKuxR4",
  "key23": "2je1YJCjMtLjAd4gfGhn1FFGqHsShZ3bbfyLQrzM2z4SWCWbPMepRSsLcLwzYU6QAjV5pto9xXWhTJUUqXRkLKoG",
  "key24": "61o34iFzU1sHZSbKDfGLp57MNibH13dAsrQybcrC8LvbDnUHoSvuop1pCGjZPNDkxiFRm9uPfMkH8GAbrhDYRqYB",
  "key25": "2D4rE9HK6WYjGiM9v8rKGxemNptDcTzu5PhEHDZSGFwsAFaX5oRCPBJhxvDvqdj8hnyr4VnuEQHeHoENF4umttcG",
  "key26": "4anJoYJ8JUkCsN2pcZdvccLEF4jALRvPaYURMuFTZ5uqu3dFEyk1jFtYqKVX6WuwWCU4mZThq7qiz626o52q2rny",
  "key27": "3FY3cTZzwvJCCnzvRm2fuM3VHFdngHaCvQKp35KZoEmseJbUyuJ6d4SqYyHsMaBT3bFKhPZ6ERTA2qjsRvfgBU9r",
  "key28": "4wPf8iDa3d4T1muQoeEjywznsXwx4RKtbToj9oneVRKxeQPbyf1mkTJvMvPbswVqQ1x54YPMMLB41qEu84ZABkL5",
  "key29": "5JwWFJZUEygfjZKYVDxMnkazHhKMb33WoCcGtrJckAchGS6wKEg6wJ6jmw3cnGfAj4ybxcZ4wB8FiKko59oDFPjx",
  "key30": "2nP4PyvGHTHws2avzXsBrGaK2CH9gkDvEtygTi26C685wXHrw6DgeSnYFSJ1MKAEmUnoHyVHeAT4kza2Bo8Hw3kZ",
  "key31": "4nccHdm5mCVN9DqYzMdr9cVrMt6jxvepxUNf9jTJ1wQZRfNcY9KJrkNP1CqKx39G9qBY2KmZsxf87mCtTnCs8NbS",
  "key32": "3bfQKp9xfnH7uw3agX5vWF4vbWdGSRvdvzxTCPXtz7Z6mV8eZ1TGAYCtND53kQeopNsEDYD4yDN77zMNm6mxvBWM",
  "key33": "54GuWpFyb1uPwx54oXahx8EMwKYWvEHJ4smwN3yZaoHskfcuq6jZzQRyZsHkmBNf5skoxYwA6hqLYkEXfCaUFo6v",
  "key34": "VQFmC6SynRqwpbKvQatpe1pqdTvFHqz4LMFq2g1C27hoPrVqMSNoCvZA6iNYLs1MXcrwNU29zeDxjQBhbnsDLji"
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
