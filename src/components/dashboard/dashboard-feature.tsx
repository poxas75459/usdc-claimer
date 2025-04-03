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
    "2mUtDFsHZ1A5YYADmrwdrrG5hbpiJKAWnfdm28E1t967aeiBCWv4NCKFnjhSErVGSmJwyB8cZDfKm2phNmkzf6ao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xuth9uTVy1NZggZdWoAxoMTr8Z5J6A8Z5vC7HXr9fBFSduk1pNkfgfV22UxMbaKBPdp6pE6Srbfh688WBzmMQwG",
  "key1": "4GmjBYjSqgAUCtLbLfmZXQYH7hyHGr7QubKzjm5Zd8jGPUfqGyREoDSJcV7NzVErERc1xxVxASiTZQviSwpB753M",
  "key2": "32ehkD5UqeQ1BxukCHgGpsJPeXxX81uJW8msASuXG1V2n1ma93yJu6G6mDCKDrTVgrdaRXwKNoPd8Cg6uKvCNavV",
  "key3": "2FrLJz3v8mHayVBmambFQWxfHQzBP3R5TkPZYD5oENHLvczE5qiExtkWvGwcupRJbLe15K7oyFUktofxCxWav1G",
  "key4": "33empagF6MFHPCB31KYw97QaiQNX1mD7rkSiZrV15LaBaBJZrgcQ6yf3Pi5VXvMELMXcr6TxJdwU1GgKA1kRvkNs",
  "key5": "5j5wV7icrrDT3dCq2dGEt5LcvZ8RKYTAmsa84Qi4QfiC5SLUYJHRAEPG67KFuAU6t8HJtdjyCHVsAkXVpyg51uM3",
  "key6": "3xeWd7KsSvsZtf4Trph1EnDPWaY4URidoDoYwz9PNPJaKa4SJkRgikzzaYT7g3xt7xPzFLiyHRa1e52FmS3d1SAc",
  "key7": "3MBChLPVcXHAiw2FJVfRgCWxE9ipg7AMWTse4bzpJa6MwYDct5iXwnRzrJPJF7K1Q45hAEcUYPY4u6ZkDcRVQhDL",
  "key8": "4gzohWkdmpZ9B7TkBtWpW1FK2fqQcRC3cdtFbXbaiZwh4VkqpC4NTKPhA2F31twEaqnpEHprXc7JMvUgZPocdoJi",
  "key9": "5PB2KUnudgWPZbM756r9zStd2aLYdCUHTaWhq3XeUYE1wNDBxXQgV8eNmyDWw11RxUwJSnMML6D2cWqDnXdQaz6j",
  "key10": "2B1rhZi5J2nHAyHAgBNYigAKTCWAMHtrx2wriJ62dyDCeY2w8WtVmJnDPAmGLgFtCmieZiEb9VLHjdUDZsgAcvMB",
  "key11": "5iDH4R12NuipCQYGZmTx6Y6QzwnZV3RzS3PRJGY5oVcsfirjXaNKBVvcMfEG7VZTsWLdfNswERbZ7D9Lep7wvTJ1",
  "key12": "3S1RiDohBigS9jftcEXMjs7UsZvBDUXmjSpkArzvRxtfEf8iSdbEzCnZyW5FTtY3Bz9qsvNAfLJ6DXvc6WxzrcBV",
  "key13": "5cqdUPLLkR6jym7tk1Ntk77XQS5RF2Z6gfBj7vKDCAkycXXFAX1Z9s8qo9pzNcjADCbHFaEMsobfWQN5KHHeusE9",
  "key14": "46wDumF6WBZB3Us3vX6S5jD7Zghj7ZnV9YtfiuydoGvk812yhyUpvNwCNyX5KLjhga5hMBi8oPXccWDC4433xtkC",
  "key15": "CgjzLBJDztDStYcUBtLap2A4cpCYDX1ah9B8UF5ScRCauTfFrXAtXe6n8MV74QU2yWeFG6QMdiC1Bux5usn2i3N",
  "key16": "2KWPjfDtftS68ctxRjifxmhbns5i2NHypXg5HwNm2473ocKfcjKNHWiaYzvqfBHpTA5ALPMrHbKQMsHRB5CB34HA",
  "key17": "63WUgHdmCH5WhA1kSx46vMoXyNDCLAHxiMpP2upRGDKvLMSyBNPM7sYMEha9uojBXFXfqLnJASDTHBGAADxkc6yc",
  "key18": "3HvxucfGkmf1JzXhtGQUVsih3H54KPCgbzewpSiwDtFcEojSgAmAdYJyjrfQidWPyiBymgCNyT1o2RV7hU8dUG3A",
  "key19": "5RxG1e3YUBrqMuexQTbASayfM4owBZe5r3SYohLEyL2NkPBRZQp6KCViyQipmKegqoB8Bo4PYcpCbQbASskoxaGy",
  "key20": "52GCRcNFU3di4t1LMJ2ewFN43j6wRzkYz7F8mFqHnwBcmjHxs78KXaS7qR4uhfErismAJKYsUq5dtwzMcLn6AuRN",
  "key21": "5W2yEk17dkJ2rw3Xs35CL3wsiZZjtxYdWA9DDcBfZiew6AagAsSjqdT1v3qmAnRqS5eDKXGpTEjmD7oCugcTVKBN",
  "key22": "3xTJ4g4UKZBUNtPYcdVyjKFkxWncXwtvweiPS2aHHhumCC7R3aaqBAxjJ1Tgk9g4SDo76z241G2NEMRHfi77PAW7",
  "key23": "2AHfk3QocNEKusA1kFzLW8ybdDAyFbHgTV7QVK3JoGACKaJS1hHLm5EDqYgbBpcNA4AXRh11qM5jUR3NfiQHmKjt",
  "key24": "3ipdvxw4oQVKTDYDASfUs2BKdUGVngWLExDQVq1idi7d8s9Rhs4ufg1b8qb4o75AqtdoWn9ev7iobTnPtSXtrw7Y",
  "key25": "5Qn72s9VyKZyvb4WwWHt9syDCyRsEvAzbjVGV6Vj4AZ1RXoghNRjojo1oNW9aRvs1fVrbGkJnhAvabrxhU3rPfig",
  "key26": "4FP9C3naHrTW3Gtbko4YHBwt5aaDFqphEKTgmsCBnDkV5Xe3ZgVy5ZPKSqxBDz8xRmSkFw4mMkM3wNMfH9P4d9a1",
  "key27": "LrYgomxXTTZUAPvJXWrd7Z9eTVVwppMCmcZ9FJUKWJtonK2vZMFFaYq5kPW4gT7GxwqhktSSZMAFDJZiBk7qj1Y",
  "key28": "472iyTqmnLxRuv1qiNjhzP2VR73XBBshmTsFTmz2GCd2rHEPrGNWmZv1TT8XcVnS4F1xDjFTqUERjy7BD8iB6iGf",
  "key29": "7Jwe5YSxHrt3n71SeP3iftCSdJ9TXupJuNLp1Y1UedJKnPT2TCu4r59wzT2cfEt57QFT1tzhSFghr5zWa9aeqgQ",
  "key30": "3iivBvyLzvpU8E3eGjwdjNnyDFwDVsC3767khWcHP67tjHm1AWjsgs9FvEuAbMTvnUSTvMwmeJUt8n19cnj4u2Qo",
  "key31": "47tozoHB56n3L7tan1DPrM8rb52THF5SyBiaxjPZscoZTH6FKB9iHZ9UmiacPyoQrgGgqWfGzg3YxJtSd2Re3wAu",
  "key32": "2qu46FguAsvhuaGHYsQiSe1MJnvUeN9HAhkYNFRBwtPXvQ45SvLC6h1Lg4KrFVjrdAH4jCSFhpFvYaeVWekXA6cA",
  "key33": "24JAuSue2bBXFBMLmGGQqXX1qvqwG8tKMs9kXhcfQZUzz69fi4kpTP6Aj8dg8uU17TPJ43KF3PkBh2W8CZE6snrJ"
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
