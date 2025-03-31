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
    "2ma9HGYbz6PVM6JXVYiNNzK2gVMGRJtEZm1xSb3eSPegnYi8qmhzWKFpx33vaSn126sV3u3yD2XHqJJvD8erRcDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51BpdmJtFYLbyScWCALLbrxdxtGynWP4frfpSzsVcPitTgdr6Vs5m99spqWTLkDivqNEywWwyLpDvCpvCH5MkbXa",
  "key1": "63kBae5fYy8yRZg6N83CBTBapzn9gnZ7SixUivZUoy8CfnyJucQHySYsN17tKQigYuofFwqeq8vk45UVES5bxg3c",
  "key2": "rF7rjtw7LMqNoC1qJqatG5b85fatq8p2m9wkBcArRCJuDAvjQQaYytMQHt4xjBHPoJgpkX6DtUt98A4aFjQa3wa",
  "key3": "5S3kSykxsUXTEHAZrTwf86eqi2d7vT6zujcMoYBtscgJPjwjEqmNmc5ewiUfYYPibo6P6AgUzNik1HisBA4sickm",
  "key4": "2HdzY2HmZBAvsAoKkBFNDEAGph23NTHwTQh8HTTwsEN2W2QhMoVpR6sSdEZdYFzhpLvMJVgvjU88JMt7rYhATsv5",
  "key5": "37mgpushVRhPzRDGTYH7Bv3qV8CB8WhE4rn3ngtrBTqQ2WfPJULG3yrs6Q67wzVpgXK8VhruZu61H1UD9gZWZ8nu",
  "key6": "5V39rV21Ym5Mr9RdHuJxYFPnmL6znXdYTxyysN4BG6iZ8N7WaK9HoCDMd7WKri5y352tV2XzPYmT5p1ziwWZHGEk",
  "key7": "51o5G926ZAHtQQfSwMMkBfArYfjcrH6wFn52fgNMDzrSTCSBadnzKsrVnzJC6fPFuTxXDJW3LD4h9XB4DFg6UgUb",
  "key8": "4VmiLLnhQ2rqvYc7ZGUZZbgMHBdHJggacMV9gw4Jfk2Bt9PpXRyX3SW54XhF1GexU3QGQURqwULcWCSkWqSPxrq6",
  "key9": "3j56ETM8GS4vVNm7RN9D9fpdt6vVU3xVVscAkzPubWU2UtQ3yEmZQgXNfmSbh7P1Lunibeapugoyq8EtUv696Qp6",
  "key10": "63eA8QjxsvzJVEiCj7DnCKuPC7UCGiKsz8dqQi6yNifbhpceqGnQQLnNLz9e24ARgR65adRm2r3gaKnBpQTQmmQi",
  "key11": "4TdePyL1CMqsCZZWrNMUM1JcdLM4zUJUAm7oxVns64hT6nNsRxoHrUuRScs9ii6Z3AE38QCEeFtqc3Y3jyiieDqF",
  "key12": "52XWK4jCpbBA5Xc26iPbviZ6tfpqbJs71mAdFtzeXSCxUb8nkoKPSGBhL2ftfA7inbQXxRQkqhYDDQS7WEtDNsMt",
  "key13": "5Rh4tuN14GBqCnQcmbvnnCAz6meX2bWrcByrkk1woXaxAncu1fdY1mYTg4T4PC36Ljhw4rUXSgzXJ6CB3NrbNtGP",
  "key14": "4KbLcHfAzqwThiRxWcj2EgcZjyF3fVMTuLhj1JJKNJT6rhMru4dtjpgQYg7FvEjTdZDaFZRn6cHswrhYYbimuTRg",
  "key15": "WF8U38MBHw4cqZ9SjT66AkCY7DDr8xWKF6jLDyghxanLAAU7f5p77TQgnxGW66vv1QGxh8895G8wrLVsRJJHhtN",
  "key16": "2TKoaDkKix7amwPRnhvMrdcW8VjAgPjLcdUJC7vR8yMFjVkxPPDyBazAfVivsZ6TnVZumbPzQUpcC1UyVaa2NMGf",
  "key17": "sMAzTZg1vuJzeeTZM5d2BLJuBDW2UehTYUktgdezbASZ1g9RAfdHuYZLiFsaDwcoQwc9RFFVpqbV5fsEbAMSLmZ",
  "key18": "48xhimKMuWKC9vNPCCU2CHuTBxnY7JzSrDvX1VZUc4rtiMjkNwSMw9isTeFBGTN11HBjKwZyrLwc6zexEZXeKkSh",
  "key19": "2gvTX4HkE1ztVAnkHKzAV7HB75g8RCbj4sz7Hd5uiUVtv2rsAGkVMAUBGCvXdS5Lh7azDnw3T3ZsaUCVmHYmdMmV",
  "key20": "3JUpjbpEqLCXCxXm7LS22Fd4S6pkPqgELYo4h6w7PQRRXMaT9VqzBCBpkJDMHHULW2S6GvkDo1tpXA2Bf4dLPLVa",
  "key21": "bbpkembXfgcvuv855o2yQZFdLM5oLyLWpnCav1gWG1jUY49x2Bm1saDJAs67AEvRSrh4CjY3CEuCdRvaArtvH4g",
  "key22": "BjcxiJAro9XTxowGK79zHqsSV1zprEUJaibeWB6jG1khBU2TrbEiUhZztBCboeiwygcLo6qMnCHFdGLSoBdu2br",
  "key23": "2bkj7w5L1YwviDJp2EKGyhxZMsSUZVV2dGyjKqThse7v1VDRe1iAAaGaiuZ651kBVr7hPhDbTd46HhuGeqNuHZPt",
  "key24": "5xNqfA5BcmtQNcGkZeYVMp9fneX5ooWawe8xQB9g7NnLXNqdVEqr3TSWCWGR6FJ2ELjsQ3MkCKUjRejBj7FbjTuJ",
  "key25": "2uvby3ardaSfaZvACGFF5EnC5N8dJQRW91nhHfWubNWqdS7vmLyadVQ9ft5dCiEyXz7JvJmwbw5soCz2Yy5cxRhF",
  "key26": "3NDqRCxGpKifUnWpUXwXmsPP17MLmUYBAbd9zrSVqV4z7DW2xi8e7KrgLeWs8NpzZdcGdRspLoGLoPKciNZKgH7y",
  "key27": "5yKiAhCa7sxCKNLz5NjZpoSrwnu22FtYUbyoPntKc6BM9KzsYAGbnbfWZagRZWkyoaCqrF1bvSFv6L5b567vScjK",
  "key28": "4wkDL1H2Me2QH14TVBdX4sbRgcXYMdCVVGxYPbRfWi2uCdA5x2n66wG3hUEjtcF3zQapwK1vYuZWFSf8DixuEpWn",
  "key29": "4FarVJFxjKR1cSSFQQ2K9eQn9kPBhUrAbzB3Q2i5hXKgVXDW4Bwv9o1LJWnKCkL6UCQmsPksfQYkeJ8JU2Vgf8b1",
  "key30": "3ixLj9N1Ud91cbZWRx4gh3TtTYAD8FPMghf6wgXfWDLnnRUMQqxxvdA6CXQLVy3fNVGMqUb4Jsq5yAnSTaYLi5S1",
  "key31": "5dVRuJ31bJTJrCVag3BTsjGk81qYshTjSsa8vYuMY1iEtpkYJDS8T29q2dgpYphFVtuc6RbDu25DukxGFJhDZxr8",
  "key32": "32B38iHFXjsyF8wPVyuXwmgWtnBV2cbB1CMXDrz5phQytqf6rKbKhq6JxiwSpns1W7fa5Vvnaq6bxpsNRP4dmiqq",
  "key33": "26PGKKmLkY5XuoTKcD66t2mjNVa7JBbGFrNBXydPWQQ9hse8QHGXLga7eceG9UogUaqg9ojqYe8XDtjttunfSMJ4",
  "key34": "33LQm3tAVL9Wff3zbgqQNYAbYLvpty8hpoTHFAvtSB39dDMT5aqEene1ye46w6RrMuLNzoihVNsYzkqMhfLSdGUe",
  "key35": "3fZhLZQbSv165iYWwYTcPW4smD4shruaz8Pz3TVUJ59H5L2pXSjmwHrfBpPyV2vPa49VF3RCgfEmxCcf9YHz95H7"
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
