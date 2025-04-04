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
    "4g7o7JoXekU9HUx2qQPsL3fEZKVQVQ7VbumqTDnmTGrfTKXCX9aAt2CqjbYRzjEARbpCjTzZA3ZjnHisaofdgdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iTPTMFYhn25fTivMAooDacvBJsjk9PeYWCUCPf3vdSTEbGEoyjm5QFbQX6fqUqjTCAqTM3219bj2HFe7wUF37qw",
  "key1": "3YYrvnJBk9qEUg3RjRFPRVFDgWgDpuyfoUd8eMAzbtc1Hu6Jkw6CzpBwbqy19Y8csGN3Vxg3VAMxTWdZwFpbg911",
  "key2": "2iDweMRGYkyLKW4xSvJy6vkU91jobKY1bYBtBVojKTTvL2pSAkZRzd7zFEAaYgrShgsdm7YmaPLLbFwG7TM8p2f2",
  "key3": "5tFYEpxjyfxQgmk8RLotM26dYHXiQdqkLYr8uiszreSdSgvX7d8p3pskHdQwmryESXEBWwV3QzKrVbhG7k616S72",
  "key4": "4xBdG1dTERrYbYEZpjZtfCkGAfPArLSSVusW9mXEFs1snTy2AvTxd9jb3LfnSFkXcd4JaWbWsMHUjAeDudptTdo8",
  "key5": "55Na4799N5gbLjtfYAaGhqXni9PYKzcM6Rbhg3yqMKecQT5FZuRtucn3mZGMotVNXZ8kLBSNVEPweFhNknD2DS3Q",
  "key6": "21Hn8iuU6DGk6MgnsE2MxfS2xyLqCQTuPjXfsfq4QSnTnkgf6R7NGHuHeFx7tAQQJTHXHkstgcsQbu9bxb4xuHM4",
  "key7": "EKtkEcNE6tnvFnDgQEVJDMN6reUTwy4mpYuha9MMpzgepKppET2BE1Lu57t2Y9fNAdJgrbfoZvkmDrqsjRaFjYd",
  "key8": "eJcici4QcCTCZEhq32GbPHgAhgdvZC3PCDLhMFBGYMdJEuKpcbQNFjZvRUYeZX9KeYXNAdU5rbqq6nPo23qCFaQ",
  "key9": "bai1Tr8JRFsFw9dJb8ApJw3dEGkvy8XHncVVWoyMt4uxr5rAKoVFqraSXXzjPkMu9M8o7Knwa1yfZAuJW5gsGfs",
  "key10": "2pVDZ8AEoHhen3iSH7BFm1n1e9susUDNY1gLKcykenEs7R9e5PK3deTj1bPFuMpf1bK5Dh2AME3FuC45tHLt4dBi",
  "key11": "kjT6zqinrx9EDf5cxoze72xw15hpgHY23J7XuopogLrwYbMPQ3HCZayzWLXrh9mHtHjojZ5R94YYApbRSGVkvC9",
  "key12": "5Ec4NabE5EE3GZDUgEVL51GLeQ9LrJkzNiajp99GX7Gsiz7tUKxZToiNZn2dvmJuZFENZDiphs5Wuav18jQzXEbm",
  "key13": "33WPeEYkkvcV8ioMvekhNPJyoR9nXZjWeRqZFyodCHuhY8eDMnWhB58eQ3RPXUrRMjSkn5qA1GezLqYD5JR82gw5",
  "key14": "YkFd2a4b2XM2rYifFgHLB8pEm6Gi6uGbJjM4xMPTkvNerVp5JkwE1gTYhCz5FkdFXhVJ4gVWJdZsVYc9dw3bGw1",
  "key15": "5kJFm8X6iY4qfLTCPv5JybUnKc8HN8bVwH94RD6imVZQVYuKjDVBef8w3THJtBvPhaVcZWoWNDTwX5mCcdh2HdBE",
  "key16": "3PxWwRL9vWaeDLXM1LwF8y1CSzzYPNKSQivccMYdupC9LqV4JZed7d2sP9MVVXkvCqutTTcZtdPuDAy8w2jgrwir",
  "key17": "5tYKgvSfw7gfZUy1pxcUkqhanE8jwyLXAwLw1g5CWfQ1fmBmYX5SL6nbKF5HSnbB37TDSPBTLHo4NF2FVB6bPFDB",
  "key18": "cH23rZKJEwbRLTeiKx6dDe4fUR4ENroS7LimP8JVEg1zBLK4tgm62NnmFwe854MMsuQ7qaxUoZNNt6DLSUoivBu",
  "key19": "3oNoVb4uqKBdjB7TE6J4nRHahBZCC7Q71LLfQW9ivxsxqAbnyabtYC1nhd5F5g5qYRfH9LLf3RRNkxJYFapTig88",
  "key20": "3QHGnvHgepqjCwyMspgv2EzvSfQktycdry1tUFEp6LuzHeQ1u3BpNQqXnhjSHiJhe6VpajSZgyrYHgFQXdw4c9vX",
  "key21": "5LLLmFoWxfLn1wV6ntJEj6PpcZ4MQ9WYhnbNWcnpsKN68qht1ZxqeP84r397G13naaLGQApjpr6gQzzjz91tULny",
  "key22": "49NwQW4HuXFT2GAeJwuDSJzwSxUbUnwDGQnBCHFGTWadHaT315sV9Y33TYxSX5LhRJNwhrWSDXncXcqRHTLygaS4",
  "key23": "5cwTwZWB46cjPa1Rc4VgFWDcq9UssMqFgEzZs1GP8XGHui5i58gXdrhpK4BpRK94LD5xM3JYDV1PL1opikYwc7cj",
  "key24": "2unSWbAQeEoHPkWZxdxYJLSpP55sCc3orA2E6YoutPtJ5kBGci9YgQyrinaPShaonsJk2fg66SUk8nktRhnoVeto",
  "key25": "aoUX4gmAXmHMbXcNBoioTAokaFjjD2Scj6p7CXxjSbL9zeuV375mEtaaXQCEoFpFWtzeZ27qk9tqKRi5XWBBhjx",
  "key26": "5LM6VtTNcD47vFuY8YPn332Q2Dv6H9JzZS7oo7BNgDCt8a1dYfUUoTn8fcJVo54dATLahkuciWbAhvyMBEWgikUC",
  "key27": "5gs5J9TtHxKcCtEF5AErQbwAcZbigGYY2mKJmN6kpUzJFMDVVHrF8Wu18291tcPPAnASYpWBuyxFgjsjkDQpzcTM",
  "key28": "LczQF4Rsi3ri6rexfzN4s93WrCMNFNKuYinkddjwFqHeGqrTNu366z7CsWYb3aKzvu5V3D1VW9EEFmWMxvVd1Np",
  "key29": "4j93WT7qubhkARYohPS86NjdexPAtFH5z64LfB8LkjMPwAUmHPZ7V5dRJY7ArV3hTkpFJKbpcEZFwga6FDhh4mq4",
  "key30": "2hyVFRjyKKAEX1uHfPK9BjNq3zF7khEWvapcU2x3NxsWhWRHmZN81HK1TBgggvxUwi1agAL4vxoTDPxiXMSo32AV",
  "key31": "3DvQKdQEx8jZNcsP925Wg6rzGn2CsJ9Q4qAG6byhDcRfNwMDd8XwWgFmKLi7gHxRoGvoJWa4TR6vzx2Wptch67uw",
  "key32": "HjkmBSht8EsAuapLn1hnPTML6iLfFk92nBCp1yFhTQDy2FszsK5Rod8sBAmCPpv7APWSwdNzAJPaeuceBKYTXa2",
  "key33": "3YaKV8AS8SHS5kCTtgD6TZ3kmPqpxdiVYYMDbksasuAcZ9EKn2DUCHZiX5AcXV6hZ97iC8cfb7K4UZ7XtHzMncz4",
  "key34": "5Qmw8RgaBc9rqUnULqJmz78bADJABQiSHqg6uWFiXm7eKB4VNcWbB2P857gQE8NoWpvMYR6qMKnKXF7kfpMee8S",
  "key35": "2wFhVNSVSM7ntXygcPhbzdEH28qyABCgrNiwSCz6ncnxdXRvLHD1o6NNxuJj3S4F4SuR4UCdaUeznEwbWTCbUt3d",
  "key36": "4bNQ8MxapAGbBU7fWSZSNZCr2bUJH4VAawqPRXJ4CTxXEGQhfqb1hMwL3eMVqTzF9cJPqhTnB7wcnttKGGj4m8Ch",
  "key37": "2SNXNx3cpKh7MUosNzigaJV5ouM7NxXo5ZtpdTdf9vBRnPJKzGt1bF371B9MGJBjZRzcFHsu633iJZeRxd51hvoZ",
  "key38": "29tCjo3NVAwfLrySqCe1CmTntTfX73hewXsU2Y8gE3tfdXuXuGSrMg4y6EjEn2ojdqsaomooMffBztG5UAPdbA5X",
  "key39": "5uhwbfJ67gPp7xA5jyqcTLpDd4taS46UHMiYFysh4F75Co4QzrDirh3NsCxCJqL3cRwsV7BvALRASeRYSFA1mvr5",
  "key40": "3Q9dZmY1NT5AjLucXYi1Lma7PQbDLesTa4tWoAEDxaUV2JoZNW3vi12UWvYSdC6sFM1yxp6Xm8bUfeX21TggMkAR",
  "key41": "4PGT4fpzSWyHCiHhDchV9w17kuiuyGbPwqLjroJxUhPDBFvJm2xXmRWoQPNpfuksf4XmsVhZu5n1tLkgJDfPKYYg",
  "key42": "25YnMy9NmnkJY6Rg9nQjCM6u5ALnjWq9QnGgTYz9rNE2degFmvufmrbrPTxvJgYHM3RP9HiUgKHgEDUjp4xtuHkh",
  "key43": "2gpKjYokoLr55yaV5FTesNRyoiHv1yMnwnrHhrJ9gbQm1z8cqE7Wxe85na1i9dcgsoS6pvw4c9LKxTqvxCjsbg4",
  "key44": "3SsKiNauq5DfzoXbMEjUYbDeW1Pc5BznaQhLzbeSycExjhtdGSVk2GEQLJm6TRTgWo3DxUGmaH91H9KBViN1XLcD",
  "key45": "31uKvzxjPEK2fML9dDmteJ8kMjvjWe7djpFEX3BgXaUwwoevfHQmjadZCbnqRNjZE1TXGrKQsWwQ9UXUCdiS4UJ4"
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
