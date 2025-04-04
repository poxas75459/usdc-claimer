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
    "ea4FPjunDu3hmQ7GWVo8PxK4uPzYXT1YHzjWE33y8ztRwRjHsipo2V2nx9AoH4txepUKKyKxYybP9zXKPm4TUd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35yf9BL7W8VDjsnJxwoS3nzcPuhEDhrQr6TRB1dWmrrBf7bSxsg6Ry2cqzZxZHPCYdJU99YzPxWAC9n1ktxuZu4p",
  "key1": "3zoTfsaZG6tUnjo9SXZy6wDTpgfQdaKbUhRBATCJ98YiTEuqyT4TphJqSxPEz3gb4YLPh2igCt3WQXWRkY52yUo",
  "key2": "LiFMvjs2nZopnCYCVm4hVMiUNBN5d8HZZME76EZ7MpVSJXJZU3oVqiEvAgW76rNzNNNrLajbyrmDSDi1yoRv16K",
  "key3": "5KezefpbFE6wDvBpuWiTLE3hcunsZCgW4tPzksALkfhMtREyK11GLo4HJp28FCn1L5fFxS6NzLZ1KRxkPR7aqqJw",
  "key4": "3ppjwzvisYVogarUq646p2MZ5zzB9yg4uqzhtfszFtAf2gXm6WrkFtpmy6197bbuA4xUQEcNkDCbm4CXEkW9r2MY",
  "key5": "AQ8iYzVKPQHRPSn1auuY15sfMKQt9XVtYMgMZyJPWWjqEf2Jo1UWSRaUNSpvCJt3inUwbGo1zsxxry83UQA3aUC",
  "key6": "5bNueLJbV2dW3XsFMdRYn5Qsc1oTG9BrNYy2ntGUurHS5udSBhopssQdzKyBNXuHzrTmoYjV8EWLJoRiiMVNrpRC",
  "key7": "4vfxYakko79oerieRsRd7SogQR5vTJ8z2B3dxNTw5muzxdjAqd9KoPMY9v1i67ZD7JFFGQ4N2ipoXqU3ca81huSq",
  "key8": "2HgdPk6ds66EfopL6YfipgFdFDQGeTcjUuEGY9ux2qcWZvp9taWawASsUFtn97mK1RDj4y9Sesy7DPsYBTiB3bns",
  "key9": "2SftK9PCQy1YHcpjpt3eQATTekTYFt5r4Kb8aRHXVz9qD9iacNdZqVw5dsc6vhvYwYWNQfQXyzedpWkdF2guaheW",
  "key10": "3QNXd2AMSCvHKnHn8n2xtwCv22DCkMSf8JHua3VmmTsjDWPA83PM7zQjHzB94cHYhUfBnKo9S1cecLXcTDKavqF1",
  "key11": "5xGNd7tHkn1R6hT5J7DqEpTVwMvqiBeyZNsMhsjmGi3M7bHRqbd9PSMFjPZyS3QXveTZ2wFUffRHjawfn3YdazWV",
  "key12": "3jTC6xKdEf2p2zoV8wTZC3yexY8WS7BYjmThY6AyFwjvjXufL4y6A5LZYAw5BwYT2LYH5UYnrHg1r4qF4aL4dPDH",
  "key13": "3GjHVJjYXNhZNK2iCLrmcViwgTBW91Kcw3nxzKfo9pnt8UDxFsrAEB2BZUhNu6zaCf2xp8AqirB8Z4bgCbb1o1M",
  "key14": "PGXMFUD83HZgtaZQ3rKAnoauTxG2pWwSYWYXGXjT6uH16aSGHz4JsBxHQLcNqjSJTHqaM3UjndMo1EDBCdNb4Mh",
  "key15": "5mty2qTFcm1YBYktTyHpNJJuKW7qwHjUquANHx37g2gEHsf3ZiD7U5yPDSafYMW2TggDrifbHxsZaYpQxeEULDEp",
  "key16": "2dX2QaFW5o3RqZf9hVAPf1YuDTLbPGzsWd8VZi25ov9WoATvdZh3c9bvpqvDdw1jqmqfffKv1RNJfBtHcGrxfMyN",
  "key17": "3LNChuUt7h9Yii8WCPmr2qvZi3fqHfWMbYNggkn7whCUWCjkSpgPdtB5oTiu4msgC61w4RcbnPG9W6xU6ZLTscno",
  "key18": "5gz9CoBCtF3Jhf5134TAGqf6uhZuSahbpegfwysMsUzPqSWwvQPRdoXYJeVTz1Lwz3YmJ1Q1zgLX7npLkyzVUXax",
  "key19": "55cbBmQMDAo3KM7vJgoYpmjQg9oF9qzqSE9UAvmf1177PyR6yZBLMGpT6PrJ1LLDcfoK2iW79qZBHK14Hm3s1TXn",
  "key20": "uxbCczeDKUL6gnfHrL9QF2SRVMQjTkkD6qya842GFK3GUSJynYA351qGV6ums7Ph2RdGEgEdYyNKYYG3EvxesqL",
  "key21": "2aYgbgcbEGymjWR4pGZfwRVksFaUicDaHVf7nCLDN3FqVnazUXFq7D7F5jEqg6zEqWCgBq7TicNWFEeWU4DJjyME",
  "key22": "3NSRHnRE7GAQT3R2a3X18sXCPKpo4mEEbgkoTKtu9XyqSzwRb2wFipL5cCCeqyw5qCGQ8H4GuLC98nphraZ2ETb8",
  "key23": "4HhVsEV6Qos9tcyXEMaXi1e3CU2xNhrJaqMrvrGmZks24qoPZ1cXz4ja4HTyii48C8RMwGStueXTqfHvVQVNXGgL",
  "key24": "52HsW4uQFoBWCVugMGAjkEacksrdrWchfsdLigQqhSVXqzapLecqjUnF2ssr3BZfonV7jHLz675TTyBxXdjpuzMx"
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
