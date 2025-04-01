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
    "3G3JxZTXTtdRDSGoCACD5R291RezVz69i9JQ8fXLyCQRHNKo16GNjqDjEDUewc2g6bGNxAzw3RsCzMbttvxYp8pn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nu6nL4pHZh6RHfsFFCQiqj6f5HusPyLngamMXqWtKB9e5pfTj9zEUsKDy2aQgoT5Zi1NLamxcLnzAEf9umKX7Y9",
  "key1": "4TZSiB94K5udeM8hUUL5aQx9PeMah2TRH5NPqLNE4BJJqXdEDgudaVg8AFWun1zMuUoeuNwiNAPzANveytaqJMGu",
  "key2": "shuXwEwZx1Rhbk86GWepSpvWXMM2nWacQvGMqHebr4E45fdvp116iYPT5satyfk9tQsTfTkGYLTNvummTwr6Ppn",
  "key3": "2advS3FcTU5niW8aQPhvVLozXY4fP6SVTmA3oC5cthMk9n2FfHcWmyskzs9MwqDiETy3sw6GwzsxqHBYBPuHktHD",
  "key4": "ZDboc4rMDX3yDiGpxVFaxm31PidPauBJ62qs7Mx5gzLq6AWpZFDh6oncQPHUytAFndNEhUVo22JQTfHLHVbBLJs",
  "key5": "X3wJThQ35LRKYEV8VXcHwp5rDkefk5jG8SwZTJnsDPEPWvpkNbL4kEQRSyfaQFATnympkrG4GPhogSNt4S9xuB4",
  "key6": "2yt4vBMkjRX5dpX8qBeaxq1mar7TRLJygxyk68QPoJ3JJBJVffjpJ7isiHQDzGSEnUbNs2EtrDCkaJ4DyBgCjNQy",
  "key7": "4F7kGYsnxaCAxEKjz1QYxfrCasxhemC4c8qtYcA39mHVEHjv9gEQTs1oWNRERC7XppCBAGnpZuaRwV6CuUH3aZPy",
  "key8": "4huFfC5bxgnBFUKVnEUrn6rVYgbZN4pgMx35CWky7Cjt67mzEonUiHLSu8vRDgUtFcWD5fGzZ1CV3wZGcg18PopF",
  "key9": "44kJU1pj89e3SSNUopVG1MjvvdqaSSe5dQLEG7xxNHPY8Swdf8uQGUd6VsRnQQYYm7hxhaiYZKi8dUsmSJeMPU9m",
  "key10": "3kTnkaTDYsZJFQyU3ZPK2Hd3sKzbxoV32s2xLitprjx8HjJ3GP2dayN9DK2ieJCLDKbJWx9MUwvHd3qvsd6dBZ1u",
  "key11": "3xnfZfWkrKiURLwMdHuz2LEmuYSUdwTRMfT9pKTnVBmuhqTdH2Ke1hk3NsKijUZFmQjvHZQsyppYQ8VNckN6NhJi",
  "key12": "3fwY3w8QKuYNSa5MGipGS9WsgQXuzu1rRShVRcMtGokX8sBQGTNi3spPdvx6Q3nhrxQJ1GnLeS1mormGTvKFCqNy",
  "key13": "3yJxXeTxEiAaMYEngvY5MPjU7jfRT7ci4PnUNvgcQBNzrMPxDXNNuTpnpqXc6M1UxGX84CNe5vXNbPVYH9wYJqhT",
  "key14": "23QCnm6mXqvwJDLyA5KzyS7J45jhddpVAJocGpLnpcQZT8fjTAdAabRbk8XpaHynWjEWyFdy7EVP8oCzSuTUoXdb",
  "key15": "54s3JYkHv11t8T5ZqGyRASJDpRuyQNJuZd7XRYEjGK49YVx4CQMMUUnqxk2X9MYs2YqvBu9UMpvKfKkfJsThE9Sm",
  "key16": "41qEmXP6Nqs1XcsyrWLgjcTsT3HtGqGLLhS1aDaS6VoUQVgky845t2L6aHQ4bDRt5mGKdU7gYfeP7PsYeMQHcqNH",
  "key17": "5qARW4tTw9gU1hhNsZxQKqyovYzuXNTcmiK8BQ5fVUAYQ72qSiss1u9SacNgreRjzfzqqMFrQJDngL9vpp6vBsWL",
  "key18": "5vceWhymwxv2c6r5kaMWQddMAmirJK3LAHhYzKZ9kuuwFZKeXCV8yH3CGCMUPxAXmW6DGBucNaNBTDVTH3JATFiS",
  "key19": "4K2qEvbuuipmG3f7cutcHKTbEQhfszwz78SxWu7FFfemkjZPZLwEaKFAVWDNGrAmvV9CB1dJgPC4cv3k5vT65AHw",
  "key20": "5vvwHkdbkb8ffPeKZJPLTjnJ8bNJ2kY1diuQBgHLrWvzFBeNukBZU1Ks19W8ujXWDSJBKWmpad4KyVRSMfK4nuG1",
  "key21": "2mHFVDnvX2wVMk52Tn3CPc8KLg5he15W52gLMTSK5Xjbv4ZfAghcLDYEU9y48uMMajsD8uaCs1BRFNz8dyrBA768",
  "key22": "4AUz1zDE8YfqSFvXExesfn1BgwRAccwGQAJ1HhggeSGfuwnvL7wbteWVspzJeEnJBRya8p8PY1dZTYTsRoGMqdxk",
  "key23": "58jifkSojGmkgHeW7XWqXNu5d3v1HcWJGyoDpg4resUiPg9xaeeehGdxmQ5wQ3gsKHstkUnJS8xfdSZhBvUqDCwo",
  "key24": "5xupmanGA4Rzv9cJEmzwtYoo1YUhmhcJ3actfbQ7ji88hPoPKzABXKYBdnS36e74kFuERZWCA2niexYxV9DfLM61",
  "key25": "2pxYvwyv5HxfTYHu8dhQNHKueaXvu7tBMSc1gy363DD9UwMk7DZJFcV5WW3Hfh7cPorDuS8i5KrJCg2S2DVVG1Z4",
  "key26": "5YM3wu9Ycy4SmoCq1Uu3wJTxbmNenP2CXWcKK68YvBANm2UWyHSCmmVMia8hAiQ9pWqR3onBMtNeCE2sgb7reDRn",
  "key27": "471PtGLmd1fXX43X1DuYjbWEHkSNvNjcHsewDxMGaEmaYxSZ58wV7yH39S1pZhSvNzJ461yYfPup4fsuT6yDTSwM",
  "key28": "LKFMjd88F12hjQZSwiscXdhtDznHDdUrbDPThzTtT4KW8tGvsrBNdgz95Be4HFnrBVrPQZEmzpXitnsCTGBmnbH",
  "key29": "5JciKZXxH3HkSXjBci172qXtk1ZM9fPW76wvDLPQgXt5zz6vvfnwYEDkHkvYEhiZhmL1aHK773wrmCKLxfR2HKnV",
  "key30": "3CaiWzJBK26H1sgwHvycazWyuyMrAvamwgYkHa9bbGGRCLu1oxjxfhrBjYQmE3yHE7euNFxtKsarvW2SuBUBiAD9"
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
