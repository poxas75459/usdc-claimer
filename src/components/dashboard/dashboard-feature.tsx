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
    "GCQfi4oKWxT31j8R38X4tEH9v2E11X1aLMeLdNqY8xhouvQmdKjZqqRcyinyFEMEtGeM69e82TkyXzKLBexpjS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QgxqkZtY79CRXfrKVsMBcsDe3jugtuTMv1qMV22EpfcvokAfaQ5Qak6qAjMvWnqYkCKaht12uDRhSiLU5zyDUYo",
  "key1": "AXZhrsMrsTpsC1H37pDcbVNREsjBQjXeo7obZGd2YL5k68tXyifw2azfCJLaDdeU2piQW6GyHiz3Xnzyw41HsvQ",
  "key2": "5JkrzaYYZNA8JHmA4Tw4tPHp5uugRrxGfzTawba5ZArtafZyNEqVGMWm3QvtWrtbN3ZowU3KCZ21BsFvGzpjSmfU",
  "key3": "2YSE7A2ZVD9f38ANzZGwLN2VUtYFMuDmQCo2sNUDSYke1FmHchXEjyd394cUXfpmg4oJTj3YAWFqBhwxecpgQADk",
  "key4": "5qd5k5WBZUZ8RfQnmYM5AdUmNJ4CSn1cPpVtCLGR21eVqjRqPFzaxCqmaT5fva6rGZbE1h9ECg9fxdjRHsGgtVw4",
  "key5": "3RQM2ehNqvfCZ5KzFpcAuehVUpATSyohjBZPzQAvajB6i6Q8vSi7YSpCi63jHtKJtPz4X8LUrNG8iKiusYmbwXe2",
  "key6": "3xXLVJyBZigc73ELCFkkptMTEkmG4ex3XgK1C5FbDQd7hhArjN2FdNSS7S9MatDUPbZhX3kp12X41Eztqk25VSD5",
  "key7": "6A5ArXzamE8YiiVKX21RpAvP2iN5Fvj2sb9NEq2bYmneMiFgjkKMbP6SRcAKX4onv1Ty8vTukYaKXB6ve3Qssdo",
  "key8": "31dLYs9grYjVP85TLP4MrGUEg3saSCCwQ9Z7dB6SyQrnvr1GusZ7KcRE9UzwPXepqdNCa3DUCZ2oxNEa9nE87m81",
  "key9": "32uKpjwqSTQbj6297RUU6hr11tAVtinT3cpPoeA9e6Rafpyzw1oWYf7HBgPvPXNthNJFrEEi7dAZnY7EhK5Yaynk",
  "key10": "39McAKut8y4wTajpBhGs9KrfixqHXYBkc4fqWe2YoG3C9UmEGBLyxuz5kTnopk3v8sjNjME5bXJ34kDcHcgvjMUR",
  "key11": "diQRTGPePHSswhtDsBnQ438vGsr1fFprNuxu4HAV774BSgQRRpnEkbUPKxwLKQrxdEj7BMe5acLYb6LVPZKU1h1",
  "key12": "4KNPrF64tnbuzTxfhEgvxtFwfWyhc6WTfwQP5Ym6uFdWkyxwH8V83EjHHn3r3PhJC3MALC1UzD5H1TEW9mR1dp2F",
  "key13": "xEZhUhjv5vJCP1Eq6EEFd9FdNy1yPf22AXoMGKwUakgzFRHW2aiKb1Ty6DUapNPtkv1WNJ2Ujmv6XD8zoVLenjT",
  "key14": "2pRtAJ9ubkVTEJaW4uEBAEoNVxjjwH5AwmDytUr149vdvcQo6nuRUFHPMNWCxBbJwxRrKCfuZ5WTqwXUp65PgrPa",
  "key15": "DuLBbJucGUjg1LD1MLnXbvRrr96CwzgqCrZqQ1HDsJJ1D8rj1QBFLgKrudXN8CHKCEai3cuoLBMacK8wP4hkwrb",
  "key16": "ZuGqocF7FB215Czu5qfpcNzr1gyWRU9EMLjpLtEAV2JqZQjBhNzHuqDoKjgk519QjikFAGWR9KR3Z1Ra6hucHQo",
  "key17": "7P3iqWHXXKL74NzqPw1yNtaFh7TQFSw7JDYMLpU4dKJNtoC3pmUfdWWDwNr1KaBb5seUHWKXg1QxYurLXxgP2aF",
  "key18": "4b8Qqmi9xMBPejevnCp77y7ToDSxMmhHG4wJ5xG522EVcgmyqjkBnBkuW76R5MnSctW5s9cxJsw89wjKW8DMbqdp",
  "key19": "5j1trwNjrqfnRA1PXGdDpjVHXV4NTKkfGnWjGjnxm67G9iZ2pgte71oJb1cAaG2iBX1hiPCQD738TMjJqAqsfYTT",
  "key20": "3iN7cXdWg5CKSxZJeBkXXrfWHSrECeJn7QNZdVdhsEMuG13uyyuuZLmszRa2vV8V176jYzgQawcvK4g4tjUrawCh",
  "key21": "363fapPzv3wHhZbNdC4k8zTJJb7idkEKXRnbTLTGJgrXk13HrNnSSDJuLjwesNPKjPi2NLxA66hqY9UePApeLtfW",
  "key22": "5FfLEzuxm4ivmPfmf5N7ZeyiBc8pwTWS3xkBK4BCx6w5RjtTvLJnyR9EuBgsGq7EjRdopup6aR886cCiut4u12AM",
  "key23": "5nvhFPHypDbRf5QcBBSTzkJLnKQh7r7zpy3BfKHt6gRbMcNdsPNEG7b1pBDSrUYzBT8BK6JjhVaTAPvp7Xom5sAL",
  "key24": "4BvxJdtngbUH5mpE2737XA1y5QSqv4XJvBxDZKQtShb69UAwQ2SSFUjc9bNTksmUf42sCu7GBdEphMiHeqavACwv",
  "key25": "66oMxq2AJMSWMDgsmCDyHB4sFdCQ33V2PmgYXKws16SANqs5Rcmajubyu4FJBHigGd2sjjS3LMFnfCfRsKkwDc4Q"
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
