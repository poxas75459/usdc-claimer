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
    "Fohqi8YRWYDwm3TF2LYWyfPxJcMk2yZZDXpunCU6P8zUHqCYEXi7EMYRnNdow5XyJMDgx4EtQ2J3Eu6okZdu9rS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KKH9fkRGVj4n593dpeiBgXwyVtA9RRYqyHyvxFGKovEqqrKCBm2F2WMCWkYbPnuqDr7wLbb7yr4LZPRRC46rhqt",
  "key1": "3BYasn9DMRrpnaxyYx9eqzPmpc1eW1Rg2vWAYKjySSPifHajX53N8Z9GSXcrBRzNDiFJr7gpuzGbcF34mAZgkE6M",
  "key2": "3zjquZtRqPfLYMzST4wSSjduHpaTLGC6wncbH2XSAtqpBgUgWZYpweLK5ja1CRbFNCgYcnzGLosJUaAkEBtztcoN",
  "key3": "3J67WWubRfVrCLYnUBr771srNrtL3s7Xqfyt3rGZqu2nB5SBwQeG5mZEztuy9pw78B5gWJghXUAT4apQ1qjAbuDm",
  "key4": "cfbEyD4KmGaYepzey3zw3yo2YLLCajvPCLFehXC8adpydHLU5DLeksNGLTKro42DkKRM4cPWhvoTQRNemziSqxi",
  "key5": "2kfW43uLpsHGmDAN8J62MDrx5jBsT5bP4JkaaUWKQNxwddznHjtCJAoA4EiMBLt8kw3BXFzrH9qBwKMEEE9FtBD6",
  "key6": "2b6J7D8uPFf9zREj49HBXULRrxGyiufkMJqvs9FKyUAYaMmm7iXSzemYbpeY5VE2EM9fNSwprm2WRdoVKozmpV9K",
  "key7": "3dioFV8AizrRVQj97rKREsPhqQxEnT9gMYPSihSjsuJPWQHqMVUmzBhJJvuLX7SKetoNUChTWY7x6xvPhjpQsqj8",
  "key8": "2AjRND1yURFtE9ojqgoFHCUf6jKcp8daaqv9dCRaoaj4GG2RC31Uia5T7RBPFWVgN8BDNf19HV2RJdc3d4ZSoTwZ",
  "key9": "2cTUUqCKSjpm2MUSFdpvbhzSQgK6cYfr4Zwduj8g16TsowJ6QYxEsWDNNMFk4xVJJbu8w5RXJ5nnJNqmXtwkzgzj",
  "key10": "372KGFRWXScbgHhQt8eXBzyW8pKSa9hk89vQZHV69F4JPsERE4KJR73SraLAqUX5XvPQRB8gbhikvxZcn1FPj5Yo",
  "key11": "2JGooJC4xe6HdwkuMayxAfKTSfPVBaPr3MMkoxVVcmsqFbNbVfzUSseFtyj8AG46Eh3EWWRYuj4U7Rn7uQH2Jow3",
  "key12": "4XmC5QKcRrG3SGAyrr3gW3sEH41ZarkrRnjGesvMQDAmMW4JPmjv784tA1HJnaCbkd7XNBvFp7hT7xEenC49B8Lq",
  "key13": "qZmYMf33MfBpYaGzogmWnafn7Ar9yj1owuV4rYHcepQqyMWP76qYKXXemC26VMighcHPRb4eqMea4WhCe6wQg4X",
  "key14": "2yTB3re6gREiANBzzFcqwwK36m5icnUA243Z3Yr84bWYDXnojmCJzWh71VQ9zzhucs7nqas9eEpRH3CLpGv2khgx",
  "key15": "nTKERQEwX4vXjk8jAyGh6mehgCYm6pN2ErYRUUFcaaTizMDH7BcsVdX1YQZFokQs2gXVubew4vtHRk11aqX1cPQ",
  "key16": "5DMF85EJTmE5F4pXPkBC2ME2SZ7FapxWCUMU2jKUovGCLPns56BDmXi7cxRRSWvrEz1eYK8gom6pSM8txmpuoL4w",
  "key17": "3afx97d2gsjUH9yAnLRAYYrjNnhcwrTR7AA71bLjDvarqwekfWRRdZ3aQCoXxZTeqdhxu4XzrXwGBb2VQYtJEKRP",
  "key18": "HvthH9Tkq4h9yBxTtBWUr7bdtfyX1mQSuXmdDWk5H1gKhtgu78gfjDtVhY4cJpUYfBVUeX6sMW1gnCsqkLXzCzj",
  "key19": "4RrdtGqyaB4WDPyfGiR5GKXqc6Qoqz6T24eYUxp8fkAsoBeFVYkd7Z17jibW8854ohRanr4n5Uc41gjb7KSHEjFZ",
  "key20": "kcc7aH4uCRkV7G4e3X9SP67HojisxAZj7zu4Y7eDEysmq6AU5tnph5xWvs9jdAHyZSsZPzbqoYouruu6q8c7GT5",
  "key21": "3txXF1LvMJbvY4wfHer7LxnUWPimTKqFy4ACkP6jss8N9hwnwQghJzcq7HGPoiuPBkLeWHYXqPXgWyEntFPWPwm4",
  "key22": "3iCh5GvGhyVhefvqsmezx2r7SFQRRQ1RTfJiBLb1YDc6VAzxGvFQrN2B8awzD5xakLW44RXiHpordJ7CXzZ6CWS5",
  "key23": "4pJ7K37YSMCZ4wb31N6fnzSaYjjoXJeUBdkjGR9jT4DUFTL2jmFtSLVxP3JT3G4r6d5bjdtHg7xbXjJJwhb3dhTj",
  "key24": "5wHC6i2v1c3QDBV3Nv9KXnAdpmbPJERNs6jbsqAyz2u1pNjLWRP3rJE89CemXR9RGKhrvqQ8UNqTrt7zGDfNEG9g",
  "key25": "376H9B9pJkte9YAghXrbq5Mj15xQbbgohVVQz5MXNmZ37aKMuA4qa6Qddxr23Dj3v1LfYqzg1pFCHLHb2UTF1Rn7",
  "key26": "2HeXkon5fbbYhvb9NPnrC63JWCavWGGH7Wjyd4z63XeJ5FtsEerzqPXKSuEUWsBJmaTeQDT81qceEopBNKjyy9Wc",
  "key27": "XB95mKuNPg2Ur4h3XLov8F24oz7zykVW8kd9R7q9x83g7ecHuztsckY8LDupSRVMToQd5YpSz3c873h6qU8vnok",
  "key28": "9WRB8ppe9RSTNFw7P9vbe4h27bLGxXS4HUXAufoyZrHYDgj3uoXDf2VUMX3KHtaLeTJH8c62KUrtaeNvfdUMwp3",
  "key29": "adSv2QrUQ2UPwG9ghEWcUgBTWNiXtWFDsqf6yuNpafqiMA4Dv4PYGVkNrbCTVE5u2ie8s9CkbtrVGHJv55uNjVf",
  "key30": "J8VQhFVDoJnRkh5cC8tFSAh35xF32HU986S6QFYGKBbAwwbWeZWKgRfeW8PionZyycGnYYPUL9cKdUvEEmooK1s",
  "key31": "3jYeJuWeTc7GDzHnhWjL1dc7qMx5G6YyGe3dbRTxuPAp7dthDcjnLBSRVQin47dU8XGtbzSVRXFLVo8u4A8zJ7GV",
  "key32": "3Tm7vEWZyzKxYHcy1So3d2MF2gAxYb5N81BDTx6QG2qEGokoC1w5R4KrhpE6ojThopD6iWeJUGNZC54yEDtA44NN",
  "key33": "QzL2NCzn2YEtPzqzZa9fzEvi5Hg2EbzuA1wdv5wAfLbe9iGWWyuDCpPkT1hT3BY2xmT8HWF1SSiYtYLAUt4TZAq",
  "key34": "4eJEsrCwaMS4s4cqA4BqWvrgvCqb6kBbhuF8b38BqRK8AtokosuYH9nVJoNrH3KQaMbKomuvcKLTz5aByPHZJ4NZ",
  "key35": "2pCYUsxP9UnfU7a4i4E6Vu4GFnXQhQYFNBZCDNzPfP82E4L3LxsSoJY5CorjPDJdeLeTsJQHztm1rNxT6epAik1m",
  "key36": "3dq4A4CDJKeYfkubjLBLBExWLaCyYa1cQddth9Ntf6pe5tfsbPRNdtwbVWw4H4EaGza5mfF5Ddm7YWGrRxo6XNBe",
  "key37": "5hCTYb291ZhecVqVsU2EKSZoeKNhGh4cnvP3qbxXsuHL5hBkrZPca6inJcaexRNmP1XPpdDjgvtECTo4RALyKTsn",
  "key38": "35HEW7LByc7GjMuNBYzaDtsbD2mqK2zHW3C3MJi3tVtBchdhekaf7J1eccCSxSK1ooyiVHnexUWkKTfgsqDaJNsy",
  "key39": "2RQPq6cvzcW2nGdU85R7EFZhBnDZkgbbuQeajFR383etLSVaBNZrNDtK4sqn3vaYvZYX3vMrfs84xzhu1e9LznEf",
  "key40": "2M2PmrYdsid7srNyfHWugduY69UT8CSghPkMhnWuvLPqLSbNaaodjFGgS3mWVLScZMjZ63yEcFjPc8VKVGzJ5HM7"
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
