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
    "2i1U8JpLaHKKpXYCojzLu7v5Vd5TmU9hB8Dejx26VBEi8Nm1XeYfdbMa2uGfEPY4NpBZffcV3rsczojoyK4Gpg2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "625jBusKq3znYc4iStBtdLxNfKvJnGSLT7aiHM496int6GUppSu54531NSxhG44ZoTEW6Un97i792BZDvMZdVMP2",
  "key1": "3x5HHskVt62veWbjhu3ELS1WjwQYW57gD2kYy27PKRymQjNxnqNBtWAcLHV7h1a8zWjkWkMsWrhXydZM3qV2BZiF",
  "key2": "2RysDDk4hTZMASSZS6oGDYoo1y8ag7869hKsEck9CudyNvGnivr6oEdcLBXbadfC8oBjHcATpP5ar9e1hSQi7zhS",
  "key3": "5JytjjFeBjnqFn1QK11EXDNPybcfCysqKh7i3pKEYvBkZ2yYnVwkBVt9nRVCA3Ly55QfQdKa86y4HgDzNcSbtrNk",
  "key4": "2SMYr22bPRdWYEqosy2AHLMUxRmaA5qY8dFzicZ8iDVkU9EhXZXXD4ajfKetM9MCDLG2NQMa39qaoZWk7Apyo163",
  "key5": "jaw3DdjT85PCXdU2rDZBKZFqSNRgKtMDJLjNcsYwNkFmk2DQ3kbJU6UPfwx8vzHSGShcj8Jjd2V49wnvnHzgNPX",
  "key6": "2z12C4SpsMm8ewkZndzyKHzsSEWTJjckV5x5J3TfEkfX6Zt8EtWLDAKFngY25A71QypE1cYT7LmTydfgnUXfmTiD",
  "key7": "5cpReBoqAdsarDediz4ZGCKQ2TZw7jarNy8p2Z4XdUYT2EFNqRDKLRVTRXfD2JMdtZ2SvnYsrVPvu1oMpi7GntD4",
  "key8": "51TdD3F6NeCS5qcuuBF2gvJWah439Gxk8j5RtcBxTjFDPsqMmtb4XLVroBM5Nm4Jpvhi8xnJ3vxg4x2s6tCuKEZf",
  "key9": "57dkCsffipgpQk4vN3V5okLiJXJGutM84xQMpPkNNi1iuJ8Tz5ZtLcTrRiYPvW3WdyNiC6jqRZ7NW4SucgvsW2Q1",
  "key10": "4UtbUSMWEhohEG561oXHGuRSEmbyeGw51tphiHWCbyXvHapEFyRzcU34RcrfoQ1JVLy2p5tzBE3teUtxxR9rUSd8",
  "key11": "3ccis3ACTz1qB7Jp3xV2SiMW7Xxv91KWLKS1fbJu4maHTVD7Avtk6v6AXw5MPFDF1etxvjDxBsHzhhVNe65jZpJ2",
  "key12": "3ScjVi3cXgC7TL7K5Ytd6fVsbEX2W2DFwzb4pfrdtF7ftgCqoXXKrZg2yBmHVoSh6SrernbfU9SY8znjewVMMGx4",
  "key13": "2Dxy814hzrZkZo2FNkqXDpZikFFw7xLfrS2Dec3TMcSyeuSUKtpfzRxThWygf5z8iyEXScYFV13CqdkHmBWtdNvr",
  "key14": "3AF2FLDyQsbCVBqDMdUFJsZxkiMLdARAxzfeLQ8Gsmv2AvCxfyy9BxG4JPkpoUA6jiez75MVhFAK7ESTtkfYPHG1",
  "key15": "3kwVpHLX7VW4abcgtMwxY2vnbChbQdw6sTj8EzBNfhoPjZWLqLkzuuCf5QSCHCjxZADeaZWVb1skKt3WDvhWSLq5",
  "key16": "32NGkeUuhXAq5EKJ7QbyofpviXQNiB6Xmgx6fEBoSw7Va6bVT5iWDsegLbNQtEfmJAfFD2GmYxBPsguM5RjaMK6a",
  "key17": "5hWh7BkrWJuT1YHNJLauJtgPPUZDcb1iBE3dR8ZwXiUGbXJ2GFiJVReZ5EVbXBUnitaZnzBzV1HdYh92xvnoSQiP",
  "key18": "3G4oQ5ZdcSGRANM3A4WW7JPo4bLs7T3xhNj7fi32veAZJS7jQTqh54p2MP7c4EkKL1c3MD7MqBoaemz48qgBsX29",
  "key19": "zen2XyRRqF6SZgcKjxSvUVm2jcHkKBFrPaJhuBYVfDd5mXZEYp1MgbrkRbZ36zY589PWz8JqT3Hh4SuioQLhENS",
  "key20": "3AWTq9PK3U5ye2tSe7CE3ip1YEpGS7D4HiWsc6QUyFz5BB49LTXcgbMhCBNg5P7hefSNSyieQ6CBEqkk72pUrGAv",
  "key21": "219S4q5bYfnJkVKw3LKHE3VUfWp5n1Dz8BTrtLUmEwea5vm5SRELY6rzJeCbq3jhM6J1wwEgz3GvZmGZxbzGpz6G",
  "key22": "5EFhRKzgQX9xkq3y8MNbAJP9r2NQpPY3miYiX7VHyu3GC7BimBHCUAYndKTa9tY9v8Qm9YkoK1z3VUNXWGdkzSrh",
  "key23": "ybrfTprYeUtZHdsPtiNvVxm28WYYP8T2nRzccVg56vJHH1QEyjNNEC1fLcXr1qwhGtdjn8RrS6bKW3RGkcFZhMs",
  "key24": "YtHQvTZeXYyYggsuw1ecZrDTVuMkkjJNhNEWbtsa3aTzntmhr9KZ4FJgREkCsCvKk98bdosa3T86kfmxvd91ffE"
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
