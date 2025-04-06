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
    "3u93LzZDAZTnT69Wq6Rh1CGGERj3vH9QSB7EqNZeSZt8F5G7XnJKExyAwmqaQfDgd8ypwun48zt6E5ku9ZDpE5na"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s53meMRXFgtJ1Zmsd8rSUAabkUu1mJZdrPKedkbgmLvj5YkRNNEXQvoyhwqssUztLMNjESU32hKFupDeuBuXoye",
  "key1": "2LaVibkpTdFbgQf92yZhjP4SUNura6fd9e75ZLibUUjSdbisaTJfvVsfS57sxAGkvXfmhzhRCYAXdp96bFqfFM1J",
  "key2": "22esGUBLVEWu1j82gjXZqAmU9CgWnMWmJoyZGXVbBbNskPadZjNMYpzRwrGhoFfbrX16uY1tYfxLxDM7YtfTSrqo",
  "key3": "4iTmkZyRqypu6VK9G8vQ8MjUQ6TnwduEQSmRBsbhDN1mQeATBbn5tSMc32TJf1Sm4XhkPMFhkq8GU6RSjAWhM8wU",
  "key4": "4ef8VUNKne6YMTTN8ZjfiCSUAb1rdHHZVzKvU8U2un1U1wFUd4wJHfqi8p4tociNjkxUGbTNx9Xx2vGZMPApxbaZ",
  "key5": "23q5ojzR2VMQQQi5FqvgREhkPkAz7H25onT7VQFfsqRgACKX7Awd2YNMqMAXCbKyxmXK8QoS2JNygMGTD8Hm7D52",
  "key6": "2NvpQbTdxhXZpQikZ6tahVCnyrXs84iBd4fCyYjDZyPFRzs7cyHMP7ZdKXAT68jkJ9q5NaeooGx4ASp3QhWNphor",
  "key7": "56NxtvuShNRLjV8yeUHe3HG5REjyPJv1aRPdBFqqmZgb3ppSiN82WRmrptjEXaTUBRMEY4TQJL8KoquJk1PzUtQb",
  "key8": "2BkaSz6Z7W3kokr63CgEZk5wgghFTBqoZM27tdaP43As2gRAN1BvoFogtnDAAABkVzcSXaoZy18qN8cshhzqhWwm",
  "key9": "sf4odPaNoemj1Asxcydf7wM67AxZadzTuSXdSyrN7h22C1Q7NjYYn824RZagBTVzvH5nQSbBGR2LKPrGEp3PbxF",
  "key10": "22W2Xr3GzcqszuezpS4pSKDu7HShZkhVhjEbuofnyqJsv9dHMFF5n9Y9dYS7tEcZqCYj6GwchkSfWCjB3o6ebAMc",
  "key11": "2UjSWMH84AJWRdPStRCP2HjnkxGZ4Ux53G7HKMZ499nYbZ4UWfXuUdDNHzxGSfzFhWVrdQHkKUNQVqQa3DsHT6p",
  "key12": "63f6pae3HFsBK8Wo443qFKLaUfgGtpq9L2DDwak2dcf2kMiMHQfz9GAa59FYuCwuSXTqpf8t2snSx5KuUk3bQdjw",
  "key13": "2nh9DzZ8S6sBtEkVHYvh3SqKhGzfxZ5Ar9i3qXbLJQNK4aEhRUg2YYixr2HPPu1JCXmuQz8qraEUkvT2xDVDg669",
  "key14": "3oYAKQXAJ9E7xQ2F2mbVr3r7FbciySKgzGE7dGkjGCfXrDzfm4nr7Ny8gWWS5jVe4U5fw7PHZKbo32dS1aoKDvv4",
  "key15": "5sdR5dhpcGnb343b9iDesRBiM2yyur5NJdM597XXwkDLVARvnEZQA1DRJn8RwtwmRYBN6jvQyy4tMetmZvVsTbWq",
  "key16": "3T4BMnhVJdupHBRnxL8k8ndDuiQ3Ns3irTPgyhfkTyZLZ2yqvBxhEYSSsAUuD3iARc1kMP5SoKYf5ZxkcSCTaWqg",
  "key17": "5pkjuvxzuDRozfgDbvisDqAFHov2rJSrqRXYk3AyW8f4qf1CCyN6CVKq4U8EU2gMm6ppm58nmbw8eGQK4hodZTiZ",
  "key18": "5Z1eVZUjAjpx3h3SKGGQFNwQiSinTne5LewyPtNQgcyxdJMN9gYwMpSrg8TZny5rCpD96mHHEsk8NHUti3UuW76s",
  "key19": "4qba4nGHuhkph9nXRGWzmMnajDyYCHVkYcHuisW1kwXyoPqryYxW5FWZdBydHJreYkiyT4o6tJo878gCejUf63Mo",
  "key20": "5RUEWo8VrjQL8qied785g6T2MuB1vw7iG8w7gzKMAcCccHjRbzUxtX4Ephpf1hALuzfhmvV5jzckuyWLMajH6KGX",
  "key21": "PtN3JGSxHizoWy1tgnaNYxW592cL1tn7iAtv9HJRLTFfpP8KSzRgfBUuGFTSTu4feY7B584fEEBCA8oCKMYcaVW",
  "key22": "5gsmCbHpNSr8kDWyfrn42wYYTPdoj8KZjDosHj6UiEeWMe7hTDfxHkgrk86D2LHZaZHrXWCyEd4BPa3cwEGTacyG",
  "key23": "4dDjgvxx1edyrSWitp3h1tVZGqKVraFKWYvzbB17jc1H2vYrJDe1f2ZtKo3n6aPYRX41HRNWypisyFfnXe8eFtEY",
  "key24": "3kwAQNVcAFNSajuzBp25x1dzqvf4vUrisKPXaWqZQ9fXtwNpCcJ23PF1xBk1G3nqVADCoexxwJhDvUf4jmQiVJ23",
  "key25": "51TrsPbABZDHFGB3iDXwh3BuZZTSyfdsiDSYrwajWjkyAcqs3q5pMvKe8KUjQKDQ1qjbDMMMP5xX3dqmhLVCvK1W",
  "key26": "pxJaUfqQyoTAZMnhiofXv97WwbKCe6orooBonADU75ak2XjMkb8LBEgyWQJsHMyFDo8jsEFEEYkpWXjM88bxSX2",
  "key27": "4tdcYvqMQHnRLCCMYCSxKR94miKCF5veGKTqgYwXA61xMGFPZwe7Ut8LqJoeG6Hh8XzTR4GUoFhy7jF3BxKN1RME",
  "key28": "5j5cCjXCWQ8yiaf9Eb2mYJaxsYB4AURkLptv1YkH6ViXnZmnY9GK1XHdYGTieT8XN8uSuxeEQDw4s3z3bhRYBkZz"
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
