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
    "4LoxWpDSeNWht5FKj2BZa16uPkA6QZxJ6re2noZFhGfXfbfdWAHdQuGsq7eEF7iKyYi3pVpxSzubQ8861Xh2YFqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GHTBsb8ZRAQ9MEJc5wrsRH54tNyMJopJSF3eNCCnimp9PYqofCzxcBd1i4ZBF1uusUDEGQ5eyupB31NkzRoPmek",
  "key1": "jkhxiZDWZrfMngA1aBC9jGzP48oviPNm6zoYw2cuH6pGVhxVY5rgQmF1v7X6Z6ZgCVQSE4LnQcRVxiEPwCJBC8K",
  "key2": "2Vz6SD99vR56dnb5r2btJHJUYUUqGFD4tnHfA9fwNLG8qgvhJUBWrD4PjMN2bicVoe2mEbhFsUSE6wXdup8z4kje",
  "key3": "4uP164xrGzrFPmidJnv7HMWB6Jx8vmXAt3C2v6eAv4oQVb4Z24jfuS2ByxLm3UvMcWX77o5V2vmtawTKwZP5w7Vc",
  "key4": "3XaDJm74f6uJcVKj2W92hSjRJ4h7ESwzxnxRHWASjgd7VY7dcxqeT11Z73smwgfuSZDsAkhFfPyeipBStmxbjwMB",
  "key5": "5KGtXaeeLUBN336zSsERV9soXgSKbXJ5vivELovFweBp3em21smHbCdAxsNzoaVRjcdX6Kw5M6cri3h1wgJYM8ep",
  "key6": "RccdaGDCjpi7qzp6Qty7KEgxJkMNFQKaFHqHvJTmkN5XSnawkPgvq6qyuZdVkLvMxx6d5Xt1WSbT9ZWbHhErX33",
  "key7": "28euR7buKwNouPdcdBhbmNqKrnKm6TsvJ4dy3XhC16KXtBTq9SJHLvyMT3jKDswyVudZqXiTkbQxDBLALdRbDFNn",
  "key8": "4ongBUHXJzvtPvkT69TTYwg1JW3s9Yosrh6iQoQgzJuDLKhGNtffbZgridD7ZdY2HKsBqsR1t2jU52iRMMDJa2d1",
  "key9": "9M9jdMQwfJxWyDNMYjYQN9qbAq592TYRptF3mhdHAPeg2epse9DKy4u9D7XkNi93vzimhyvVi9XjoknFZjeyigk",
  "key10": "5rGENNDiswzUty2KUwip2pzstDm1sMGXtzkvNSJSpAGBGWpCDLgQVXLPJSPVH94uG9NiLw7NekkYsPFzkciH46HJ",
  "key11": "M2c3Fq2Yut5f9uRQtmXXU37Yz4mb5yWhUjeZYbvjGBhFT36UtBnSy5WQQocH5985MKrZ67oLCKHXqWtDyRy9dJt",
  "key12": "9LEf63Fj3sLXtJEWqyckJjLD5cC1bqexBaPP4hmSHa34N5KedbFvjfqZgP4aeqdxgLGUpcGeVmDd48qgXQuNAJJ",
  "key13": "2YNGJLuCSCYB2nNoPvYGBQyyVagbf9V8mER6NQMv5JKz8w8urV9jW9RkiDcBb1EmsvCWbhRSMAHeqTA1PLGiZxuz",
  "key14": "DF6Af4Ky2pDwyc6M79XdmZzyY8ePpUeL2XSX69JfekZN88tYiqtoK9DCQwAbYjg4QNxtZLSG8bEoY83QA7jwSyi",
  "key15": "2i6z2m6kvef33pAh5uhaUPtLh173SVGc8TBF9wFjMu9XQ13w3djmD9tPDY3Z196iNhQ4gd6dhCTQSockN4niVBhC",
  "key16": "3xGuXk1qJn99JkUZ5uAbNk2UUam5ccAuLMnCcxaVQ3j4RFyRbRDuFAkPCRwCmmP9mGhAQcpMKHvgxyGkdEMhRe5C",
  "key17": "5b65Dydr1Q491JmM81exdD9JXmqrbc1sH3psiDUTA8wRLPmp65Y5wZKx5YMFeMPPV3AkSLTCSntyHSDYzDToqMEe",
  "key18": "65x8CoqBbVboVdWB7c3N1UnuLov6HuF8hpXBwjPLFGbrZ8H9mwaZurQ6j4iKhy1Ppr85aFNLnsFgyKk4CyucsUMM",
  "key19": "4rK2v5VTqK5nr9DaEih3JWu1FRPydrUSftw2ZWA2ymWQpvmGVX6EyBUEmydtZAfXoC5YpRKkqsRbCXDTUmTJycf7",
  "key20": "2dM4b5GCE98QMLXg9AaRpZiKAk116xgoU5DDodSoJLQYjFqVrPsuamedT8Z4XDmDBtRSeQNdANiXwhwdZzfUMrqc",
  "key21": "5iZrMrgNtSn2aQSrUG5aUusuEjousoazoYT6SKCtgxVVvb84ecg9LdgnU13vFQwWgzEZtQPTQfarPEKBSiSPHMcw",
  "key22": "3bJTsTrKkt8hLLJxTWHpooomEt3oz3znN6UJ2YdhXFM1Ri6wb7F9wEu1qs7bw4qTfR8SLTFkGRVmcCxs66775uTX",
  "key23": "8QG22nFDT9CS2tLrwdHwAtznv3oq9n6yRRvkEux3hdFzBs5YXjNQYRD98pssAb9Wx3PKVXYGPDQcwtHHws1QEBf",
  "key24": "3NMXH48K9gwHJ8h45hDbu4jjefACDERKFHQaKSKQXkVx9cszKCgbcQui8KhYBNjFWQXCmnhfhdEaSFGTGh9phQNs",
  "key25": "3wTgMb6XjS43h57DFR2VnVXjTF1rfXBkzGuDkXE8RiNzBRknbKGjgh2NxMR8MEoZyKH9DLg68GmAWNfLMskx5yXh",
  "key26": "27vhdfzHg9oj3FU61RqGfKpXCE99dqviTbzcoxdWembeDZbD4nwAC4RqwqvH9VD4URNic5qvoyrXgG1wqe9DC9T6",
  "key27": "ToCw9j36Nmud2AqhNNMmiVQEEhTK89PazSHnniiEPFQpcbKbTFpJodEHNvVZ5N8SCmcgGz1SSphTYGWVkuiVzyR",
  "key28": "4hTyF7xgRpwkUvFLp5GTmSY15v6SDQmiybbH5DV1UkBwaEweDUjVbYog11d3rV8HCmQHMj63Ji7DVFhxZpLWXdPu",
  "key29": "5durTY9NW16WdLpM8BAqQpTGtiDseqWCJmKuXX8oM9WAvsEa9mdgnatAz6WTRkFcYdWjYRQyXqWRL4kMDEJ2mndX",
  "key30": "2z7E1adsNqQm6Srqy3EKCsq4i2Fp5m4GP7inzrHSAnrnjNAghNv6MTBtLXt3DAdNTmrA8RBzkniGFwqJf338Ut7M",
  "key31": "4F5SvnJjrocq8GUrBN5pPJGSH9NBUVRKSaVZjCLchh26w7G7Lur97Uinbo7JJhHc71CYVrG3CV2Mx5VMhsjypPHm",
  "key32": "3bwLvXJh9cb3e4J4sn7pCnhyrTKov7ELjfMJRTJiwNeNz1rDi2kXVSefRTRjZRQUVLPPHUamGkUKSJMUyKBMa85B",
  "key33": "5Qa2x8Gt2GCcBmahgLS6fakmgyqxToxGAwUPKLoiidiH6s2XzjzaSYtgz69b3mq5XyYvsrbNGZfdB8fw6Tdsvnma",
  "key34": "2QKyjg6YFkxABkfL7vCVqzg5HU8qXXdtUyXpEuXy4egPHHqMX2vaJrmpY4HXmcHoZ2AwCPJr56cQRKtmtaT9Recb",
  "key35": "4zy3LSPi6dABGC7m7hSfKgrPmdAsHwtuLMBYto5XFS1X5huagJzLM6gzbVYiw7gfVfV7L1CQXypAESBscT5TBNJv",
  "key36": "4TPAdC99ENkwu7J2dZuseFXmnN55hFPbSouJzsL2PNwdYTpRfMJTsMDREyLKpSVBasTGtLh9u5314QyVpUnDZEby",
  "key37": "5t8ggzf6CqJixHvUMk9aViLgQ7B3iRpNoTdoeG2b95eRAYmhnLpXXJwm8b9HkNcutgLA4zHX7YaCRc5D7cES7U97",
  "key38": "5icZkgLGmv5wgcknpVH7W7crMJJzdJCfNwUqzZrdv3uGZmpvt5jgaCLbW3GtrNhctpALjWZzgvxWArqtZ1nDfRqR",
  "key39": "3z56q4yCb2Tq4Rx3dFWh8qLrfwr3gE327nrTDkhaRUF6txqEM4KNFd1p8iy8AkJRfwp358WXyu17JJZ9i4jARAJb",
  "key40": "22WijJqumU2cATtxqGeirV7yAFgkhLs2YW6QJ6XdoU4MpbqhwuV9K9csqM9RTnNFhcmYDFvcX7eeGzMTM2QpmUUh",
  "key41": "Jf61dRtZmqX1BWfY4EatN5FTWNBf5QUYwyX3mSm7SYWCBRqkmNpXso8zv2CmgD2dfaPyWAP3NWTyLZM6CRPDt2y",
  "key42": "5cQeYRtLfjkPNZsthcZAdD7NUkgDthwVkRtrqMuhDczXu7k1QoH24YbH6S4r7HZZ84LriWnWPES88fgDHFENEKyb",
  "key43": "4z2E4oyKDgf4MM9oNPKRjxsYYGXTmPjJyGB8noP3axu1Ec25HrUMKeY4pEbGrh3FsvsEz615mTFkn8TPp9dpX3H8",
  "key44": "4v1wxf2FUy3UeobXmG5XD5UZ869WYhTNjcjBoDjZQ7udWnqfuHEKQstGFQd5nxUCqWKtxzaD49vSupJwtSDxWGtT",
  "key45": "qQqi64RxFr1AQmscAKeGZ3yBGENmfVFQqu5bgeKxdXMjVbwhKPV2iq1eL9n8voMssfMBLCU1gR2PCitd8ZeZQqL",
  "key46": "2E4ZhVj5qQ7JE3iMYw89e1RQU2L8MKVFhcYjv1Ve7R9oM5w9k9rBGT1wPsQoHNy27E9D86rn9R59GcnC7hTad25q",
  "key47": "3iHXepG1KXQS7pURMUNDNdu82E5zDCxmpnC1zXdbugNnCbYxwrvp52GTrXKLWELp1ZvbnZb2reDwVmyWddJyCsJW"
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
