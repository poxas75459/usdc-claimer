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
    "4vRUterhFtS2JfBFSs3nyufSbtWQWVd27Zt8cayVZtB1exnWcvJCsBDuGggYkz8exVtHEgMQLgqsHGcUHmsJyHXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LJfvjkCowtcGZXmZc92CeaeBVPP3syHvRrDoUNLatuf2me3nER86jK3LJzsp9HLbh6ExfNM5TXUnVDUSRKqrD5d",
  "key1": "3u5iL5xc4RWqeLFvnsMFbCy2EZrYcty3thLnywB1ctsprXGZy68xXiEaQyJMk1HVfYV9kjjGM2VbzsTxPS2ZV2HL",
  "key2": "4fvDainDHd8WQAJocEY7fMaMPWHr4QfbdfGisv1BooR2ZaSorzytSS99Z6646MwFhraWALAhaYe6iahm2Lzy5PHp",
  "key3": "vptGnUgWh6R7KNgRf3bcxYjG7tqeTxYEAU3z8VZM8DDW6w8MJz5y8DX9P7Ue31zSaMTygha8vbs5nsyJhTZXj5h",
  "key4": "3PRi2JF9uMbQ3vn6Ub8SiQwh4HyaEznPxYXUGB9dk6te68x4uRGMEHPSxq9ELgHPsQkx4F6mBgGtxFdHH3bKZiWo",
  "key5": "LwRNcwhBmcgfKjbfURtfL5ZvYfwXi8Wa2wSEHY36tvupB5jZ9YBatpVGK22Vdiys8J57jGNmnxjNTT7aMrhb92a",
  "key6": "3aPVUKjskuNEALkXct8UBkVZKwhDVMubowwV1Gz2N2iqDVGRkngkuZHWcfNz5rbj6CiSg3SFhMwMEcrF5Jbw5Gm6",
  "key7": "3SaFpBgSXr8EF3dEbD1HyTeJe87HyyfENzsAoiEV1ZnT7Pg7WpcD2V1wNYYMy6wLXDRzuYqHTrQFXS4Y34hfNR4q",
  "key8": "49AoNmFgms6axYfSXeBs2HogeAiXMrxLHjk8qrQMBHtYig6sD4CydnxMZSEPNsE5BrunhwKNMoCNFMbT2rXzxBdE",
  "key9": "4p6S7FrhLkyFKXLdyQsaswvwTmvn1TrPTRDKR5rPqmYJ9z36qe9iBtLxooVfYvojyAkNmpnd8NFm8DtZ1hrnZ52F",
  "key10": "4AFoMnFELFDJTGBRcmWLhT8yviPFUGxoJb4PYj8TvVavmZhtiDuAcsLh8qyG8dvvi8itwGtx4WsoRfiRvViPwtBF",
  "key11": "4nLCPHZ1SWF5TCZzVjLTdWYnhsHjV6mLr2ayb2c5s26mcWaan3pLZSLp6cC8CXAgL6nG1CkUPauEhvhpd5eFUxE3",
  "key12": "4cR8sA4EhUkP5XfFx3X1hdNZbrE9nB8eTU7iSbJgKBQ1UxtFrTeLbLxUsckjBCfVTpDzavqogsbAVXrvA3EwkhS3",
  "key13": "7aB33eZxAWviyE5GzMaDRqR5FyZ6R4GhhYrxxhSDa2o6t6ix3DMHyS9Jbv9iA8ya6ARjrhKc2E9YW1e4ytMN2xh",
  "key14": "2haiufL8C6EJC7UC6PHz96CQs9LE82a3Ebgzwbv54ZP4kNKyakrCLEz9qfDbj1VfUrA8ahe7bmFoV1VysMC5wLj",
  "key15": "4MZugwWbMmoMcqLwjPFKXe9MCgsj5P5LNcb33Cm5HzZUpLwFrfHKUipHJfJrivjtbVTJegudetRup35WTtZCL2By",
  "key16": "3e7ZU2QNXu5qAxU1FWKTC3S3AXFQ8RZnyfLVkPNEf1HsHCzRBAjvLBqkjCznWm6s6ERkJtVuppZGc99feBYjqrSy",
  "key17": "5ALfssZ54SSQ53pn8hm1PYbHQwtjmSzetbCAMJ2VRNWqocrSWFaoKXgYhqvXkeDipmKthJqKYeNo77rNPzzE5oDj",
  "key18": "4d6gndupbL7vLGJ4UYq8emm6mCQzXpcvuVb41LN8iq3u6UFU9pans5N8m8t925PhoZcCBgF91E5wvtNrWvWz5w8k",
  "key19": "3UXsCnijcwcJEgyMoJ1wVWsG2NHe5SzCZArD9bXiA9rEmTdvMNsKkdf95hQQGi2fM92NifcBWcn4kLX7BThSFW6t",
  "key20": "5CwZLNP5U29qYm1omxvBPK3xZFPNuvF56LC6r7jxR8JChXeEggpadCehqpjz97MkrUAY8sMBRqLmSwr6ZVc6UWHf",
  "key21": "44deEbXXcaHkEvH3XzRoGNFCaW6FhxcJiE7oKnbg9yBupxQTNCskUqja9T3jdtiGZFutjLw7Q196FegQumu5ryzf",
  "key22": "3qfKngB9t2ndYrfYtvj3hArFTgJ49Cfp9qP6CgxJngCUmbPc9QMuF81TsuLaAHk4Z9BEu5F51NUESu9L9fWria8p",
  "key23": "41oiXt5aZLiyZKpio6vfu41wZSPXQGA9ETQaJNrDRDHYwHaWgx8sG7mMw6EtkpvNoeEbvstgYnU13qYRTFWsJzeK",
  "key24": "7hUTLtQr661kCZDSctQyEHpNfqidtEEr1pQB1jtJTas96vhJUxTKXv1pqMrWSFfr75zU6UNX1KshuoJJVy8fDUE",
  "key25": "3B1dCUtbcyxfiSU8Likk4tMABEfwnv7b1UeXQz8wL5ZHbJH6PkMmWboKoA77AKu3gwJpuAE86Cb4c6BFBsRsQFUw",
  "key26": "3uhz9uAeBTqZdmGLZUQ1o87we8VxQJX3YKC7EnLhTyt3wBNpqTV2USgucWDrbVyqt7AFrmskB3Txu5NqJnmGCeLV",
  "key27": "4F74WdQxpidaALMRPZmUb6Cp6vAjsvFXW5gMxctoTkgXzc7tDe9h1rYeWp8hJaqcRaq72ZB9wQd1ZuMegGzqeRRX",
  "key28": "4ve8UTGtP6pTLWZTfPawaSthXQPgE78oj2qY3i9Rw7UMfaQ7ehW5apwDLkHT1iSkmuz8s8BmmnQ3ZSSGTkftpxpN",
  "key29": "4NQaLdpQ9dr4apZKafff59VkfF26XAF86ZKkoWYtvwGVmk2KQuiLaghcPcnXdp4mXaREUnWYrz9zZoKdLxiGjij6"
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
