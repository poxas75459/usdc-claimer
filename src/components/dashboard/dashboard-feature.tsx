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
    "9RJuHRdMeSGCMrszdomafqHBfHxUm6HkqqUKvBLihEL58BxvHViXarQePRvaesPCvhRnNYwiscapAUMUWAaK1Px"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XK1w3MZMtpwBXyN6DYDrehBbrjYAaMzd7PdBwJxLT3gCTkVfBmD3657EGx2kFvwZsNZuG9NamCrBFrx9ciaeYG6",
  "key1": "SnZEjWfw7Cyx9M22PVSbxpwoMfPEQiKr3rqgjb4rPFiTGHxxMcHadxhAH6w5FxZgw7xVydqD2M7eKni6iKSRibE",
  "key2": "QfX2cdkXs3hMdFUBYo7U3K6uGX6FaEJmfefu5wYNdrs8qs28yDbWyPrcKBrwZejdYozo6RxcQrwY7PtgioG6APk",
  "key3": "4aJrRK18XPybaLtqqjGfSF9E48A6bd1nU9662AvxKXNFJsMMVhg6seFzx2A6bC4ubCzgq46Q7sHsg3aEjcb9aUuy",
  "key4": "q8LrrYcH9UtxfyJhuBqv2GbiJXwi5kwDQVNYn8AYewtDA7nYsHkCXeYfKe3KwZJHjrbHeRGfUwfLtp5U2mQAvwu",
  "key5": "5B3FcuSDEixZsExcmMiqoYHJYuJpDoaDK7y7twQwUzjWoUAvPueKpaYY9dAQcycakdg5qBppnpAm88Az9Uai6E88",
  "key6": "5SX6ocpDifzkZ1ossHbfUnasW3uqZpaPnRskhabWoYn2qssUiSNTrWfu48i1cQbECMFERXdvDzxPts1QtCAMtj6U",
  "key7": "2fPynTdTqf5RhSpzgH67WWCq6E2SDBMMjE5x1zVpSJtcVETMpyCxMtgnse5Hs8vbtUmYqHXLmW6NT7U85V15Eofr",
  "key8": "5kHJzLwDqxdwzrDrzjkPT8mhuRP8ysoKQ4K1xSAkt56q1NRjorNDLyhxwdafaZpgLCu4rKmXt5AhJMW5p5CaZxQs",
  "key9": "51PiqVioWyGjrAhV6hyBvNH5nVEyfdEhQdYPqk8igCeMn2smCD7v7BEPtvtiLJ36tGmDr7yRXCyc3y62QcVTJ83e",
  "key10": "3P8boYJyy7gNqTjWJeoknzDJkiawiBmtyWnmThpkup27VRBYs7DTre9stL3mwjgmGngTt5qoMenfpoCWYrfESxvd",
  "key11": "2eCKv4mPQH7DUD3Z2zwzVDgAnLpiYGxbBjRKYg4hgNwUSLicGac2HzPdLF9T8e2CM9ggBu3m3F3PfWLF547fSrvF",
  "key12": "fmae8kqKk2s37kngUBvKNzQimzkdQP7nybGdRrxyA64t4mnvaUZY5og8NPRsJJUC4138cYinyFrRLcRj7gS9Asj",
  "key13": "3ioKUD8y2WVVWmSpVUjkkCDAvMdBTohH2Tn9qXAuU37jgi7fBigYCybvwJuxdsXKMGkiVYgMSUsXHKNQQp8aU76h",
  "key14": "4m5nwe1qvwsUaMUxT9EDMDYUm2Yn8aZmQU8b7htojDk9siFo5hmjRVn9doV1ESpzQMHwLmkY72VYAP5Y4VVN1gdK",
  "key15": "2nTihGqYmkTdvAts3NkvyPqQcTdwGMfjNYPPcMDXRcZXU5vfNyuQGwVX9QtUUtqVmribK9UUZxeWZaRbkjRmac1n",
  "key16": "HJQUrh27WRuF8n2DELGA982cFhACBdoP8Pxv5rPck9HfqdhJvZsXJ2Tng6zuV8surpbpq2sWVgVXd7RKJKHDFVY",
  "key17": "3NExmyAc4tA1rt56HJjNyQPfeWRQ6UpMamXdUXW6FwfF2RhXfZxjr7pmnH6ShgPz12zZLDfnJq1sVrjobzxRxSXP",
  "key18": "2TFT3vAeqLznYLgtDDgKphNy3bkqpfRkAtTtvX4t7zCZrV18WdoRYNSUg1KD3ZLvteW5pznr9bN7yXU8WtTfBA4W",
  "key19": "W54wE9BfSHMSv52DFUdkJghtiaCvszjXSbjcZcJ6kCJoQuyJTzkiDQHo1J7dnf5MihEk7ZrJLT8SDxqxM14uxGT",
  "key20": "25REPq7PUTTKctFSYT2WNvBrCRBN5GmsDoosCG3NzStCq77JY2nC6XmY6WsfZFfr4ZHBgXaRHKohD1yxR58mqDXX",
  "key21": "3LoDrvyPyAVtKH2gcwdQfQa5nve8MwCnMn43TZvMLxBEvBScaGBfFpefca8rzLGrGHLgJ969Ew9ZjkSjzTQxvwNk",
  "key22": "2UMfKXKfGoSQ4afmu3BuP2WMPTjiXMkcD9UWBiLwNriWJZoBwPEKKD1wkiVxn36iLSNqJP3zyB6atWktnqasXWFT",
  "key23": "5dhU8a5npzirf7QeHkdyfPJjcGMu3azARBZWXoihYKqr1HUrq2eWcWeRW1toF8LCCV3G6S6EZ6A3FYiJXoG57Hfg",
  "key24": "5QoZhh5XARkB2Xh5WqkPtzNCDe6KtkQMmAJPcZbqGVhvA3gWyCjGo7eDxSMSpt6C7CCAeoba4GCijUWkNfg7BMfo",
  "key25": "281b21Lg1x9tzzLh6xCKA1JnPZQUxxhqiwTvGT7AeW14gEvVnZGJbirN3GHeL5fdNAN13RZPuV7YEihxsu4XgxAV",
  "key26": "ZCNaahQbnUx4jPbdpojyxab4J4RLgfrbJcLzAdMRUn6CiSRxTnxwvCdvXxCMUnNQMeCcqH8taPLBWnDNGKLUoDq",
  "key27": "vJtLW8xDzBx8ayJ5giFYwR8H4cYzyAyTSVovgXgj8JdSwZmuehbbWdVEZZf4Zqb4kBg1rrU3rDybUzKfiESxxeC"
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
