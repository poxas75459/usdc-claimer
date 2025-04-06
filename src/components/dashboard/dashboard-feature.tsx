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
    "2BWbN95d4crHawBz5FUtzVgcydfZLLyppnyBjdcgZAffSVxYjahQohuN636nQqHv4xi9Mww7TYAHEHpksAUML9iL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GiLbgeWZjCnWsZXUNdskkJ8Dhr4LEYxEeh3NJRiEoHJ5D8DaqFvxMmkwN3PQwBRrHFErwVif2Nx62CjKmpnGHUc",
  "key1": "57jdgZzDqGP8sEj7TALKkWJwLfYoF63zhttNDcN8RbFkcsUSXStMsF9FFpnWgvS7YCZfoKHibWPWfDa8G5q6BQJ5",
  "key2": "4o4f8oekB2LJmyGYVbaQyQ75bTrdsRYJds6tvSh2KDffBcHBTghSVekY36oQFdtoRi1GmRje8Z2tUvnuiFgUGDTt",
  "key3": "MaStrq2bPaKBMogV89dW6ADMUdMAVpkGE3BMCRV1RQKYtVREBUrNh1fx8RhToeB2qD2mzELL8uk1FwWFevdAwLW",
  "key4": "4KJRUqz8cFMR8DthDkoCMmuuJ7GWHya9YBdyqNqzp1uBtGLYHeHK2AEzNaDX9LikMjokauFJfAMR9MewDLLvcLka",
  "key5": "5RC2gMxByJ3XFY9k6HvZahaAxioP5oS7X2XpK9F4fNxxPEVbSWXmmXzGyAbb7zJdzk1NAG4gFWcYQZBoyruf84UK",
  "key6": "2u6UEzMGSygQqVPyn9VCE6AhxgSTmTkE7LMxhJ2yQnjbHhsY7Y8eqHjtMkMxwAwEprTqAL9XV72wurUZMvFX8nSg",
  "key7": "447hD9vLmJFg57jT4SWBSQ6KbX5Bp94ev6pjUCQUgZnXEDgu5BKbUMwvMqXn5tMZQBdGMhK3ZR1cbxqGj7UxiwAf",
  "key8": "2MTQGwNRQRnuPMjGCaysg8HGKyHpvtDhqwVVAqvAZLcYQ1TP35dCu7hCZxVButR9rZWnte8NFJHukjixsbCd2tXD",
  "key9": "4MytZC85AxQQLYefbcU1X52owAkVMLjNPzckrbiBABR55tZNmm4VLzwUj7nSHVhCKxf85kGbEokHqzFMRjf4jiZn",
  "key10": "5iisNLSCFADLupNUGdZpzw63MkaNi9yTFrGufQN2w7m4ErMGhBVXCjS3prqVRPj5jpf9V4Dx6y6domKrCNG1SKqd",
  "key11": "3361Rm7zY1uJshGRcrVg7Spf27scjDUPdn91pGSYLJehLdBE5PfszAmJYbv8BxMdF5yuTdDWMsxeho2UMKGrtpq7",
  "key12": "3WjzGxjko7aSvFcJerZba1wymGdmd4yCMdLwMQAGZ8JxmECix2bFpdgoiQnuwWHXQwMw8R3qQGqnsZYv6cNVrtDc",
  "key13": "2tnGMSyVTjP4KtJuZNVTvpPTYF1KmQuEK8rFsKjKBnsi8MrhheteRsYipMwc5trxLTTXRr8pNyhhCLAWuv9GmbhG",
  "key14": "5aD9738JHbBqt6J7YKe6D3wfzdpgrNs9FxDZuHTdcWRAGEhB6rY5FSGk3XSyKfXeHruubKMFq3vxkGewz8kC2z3Q",
  "key15": "5G5aVNrHEYbwKVrd35x7Mv1QvYxQChKRe2X9qmuy2JGYvgZetzkM2R3H4feZfU8F1KHtpdRhEECgK8iUmqFWnGuA",
  "key16": "2xrCq3vha3cpXJmLHPd6JE6L4RoPAoQU5ikHQRbxs2V9xJScjKxSsRLJKiPBFNqsW7LEPNB8WVsbtmCZfBb3WWnd",
  "key17": "4dV9XjkefsV1xjxWcCHQFU5tTXvrXXSg1wxN8Ep3TuK8kCdq126orSNrceSheiHC7WGtw1DnNbtDaczGHCejb8t3",
  "key18": "ddevvbnkKQECeN5iVs1xhHeGqznHqyw4omWk5VwU4MF6k2jXTx6vZmuC6YZLwCU6VK6iSHmd2HwuJFyrLzCa4E2",
  "key19": "5gHE3WD2C2HckLciKXkRza2TXxmQffrQBTVdKzt1UG67MgxqmgqisgC4jtigwDiVPQmfjX67WB8kFbKeYdtV7eEQ",
  "key20": "2CPbunNG8isnoaY6qZxqHGKG8AjHNd5fSMsm1xteJ2jTzGqwNLBWb2WKYDhoTkej7EoDzHR8SXun2yuhwmGsYrQy",
  "key21": "QoBVcfNV4HrpXM3EsuQjEidfJtbaF5L12ub3Q8f7WUnZDwM2iZJjfe8PhoARuru5W1BfZreYiSTzXQWSqTzYV8G",
  "key22": "4U1bXf2VP9R6CGVqjkNKTqRXxAK1WArDQQWx5uMdvnLJkpHemBLEzNAxvEaZg7YBbS2XECzRwtTN2xD3bo3f55Mt",
  "key23": "QT9VxFM21SJb9dvQwfwerpmaxABZHAG682J1ePX75NDDR1KsNxxVRGuLJP1nWbNh8P8kmnzsCfkUYYdcqWTjQS2",
  "key24": "2wT34ToNzHNv9oxmJUpXmRciATBbfujibjKF8rHdyXdHAPJ4J17c4Hrnyc9SPbhjJjbrgnM93dGAisBk7m3ikYfU",
  "key25": "2EEiBGJfQnsG5e9BkmvD7nqQBDuTAb7rkTQagP39or1oAJjYUpa3hRhnRP17PRdPTbBmDkuyzJfG5k5Kkbv3RjqU",
  "key26": "2P5AYKTX35wXD4Go5AJeakQWwnX46jr6b9p2Lo9yam55DT8ctsZtYqyVK9EUx6Ng561SG9oyyGhLgePYwL2zo9Zb",
  "key27": "5q1cFXKLLwVE4cEFSABGL27soKtKjkqPtbvHcRpSyDaaEhVTtbHzwMWDp8KAEKE5uRi5oRrG9un7xo3yWKGXJqkn",
  "key28": "PLbqVo51XXnJkW3zCw4NjezCAYLppC6hn7dFUv78o7B6RGSk4UHb9FsambWbTz8zttRhuCBad91vHw3fLaDzL2e",
  "key29": "5nTGCrosZC7twYyL5XAmkYr7ftC63Z3mQPtwWgNtSriDhTsQThKtK2XwtkjkiDk4HPeUmmrs6UHpd8MamvVfknAt",
  "key30": "yfk3zsGMFj2iraZiPMR9JMiRDDrscCRPsvBbbJmpyPGHuzAzUScknWSYkHoMDumqB5HBbPHsZiWSJ1HJw7PboAm",
  "key31": "2Mn3oQkKKRjodmrerWKwi6Ww51dpFboj1oV4pSJvd9jhbQ2oiy4wK2PGMppfayzbeE9P2oFU7YyJPK2jyVUbf7Zv",
  "key32": "2P5QBwxRx4dhvGNAaYbnf6ALW69Pzb66A76i6Rxsfm3ejsvsv681wGQBB3j3e62G6Whb4WNEG9uTNRrx26XVkCEQ",
  "key33": "JJqXWZUNSjxW1Zw49tAvHT6xFJJRVFbQw5C4q12m58cuZr2vR4QCgVV95iqitrRoWhwscT2h75paX47B8iyiwbM",
  "key34": "3ikYzZ9vWYL6kVZQE3yyL3iSvj1RvVMiwNhiWYDmqYJTFeySRqUSEgBoPyCVPgughYmM2G2fi5955JowLTvK5bGa",
  "key35": "3V16FVzvjt2V2RdjbbMia8PHM4n72LJeyt5EEsQEiyjEtxxCoRSf45M1BL54jt9DrnExZvqaMwKtugr7wTBsWtij",
  "key36": "2VMcH81AuwaKSB3JEDJssFtyU6M2x9EvhsJAzscVMVWDFqpNjqADqdWSFjhiiCvuhwceUVVeJTjRbtqRKsaR2Tk5"
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
