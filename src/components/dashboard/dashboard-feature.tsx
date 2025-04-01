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
    "2AapQNApQHfxZwzgSvxxrhRJroRxA9CPJzuHWLoZJp96GKVkgthJthCT1oKmBJmsYkjqNSzbz3kj59TrA4cEfVLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i15QtWgcpWfEhhBjANBozNFHJvcenMhuQZWJCVVQo4gdYYAwBjAxWpERSrrDNW4THPfn7fRzw6TCE5Nqxue5xpZ",
  "key1": "4beVUa1na8tftjGupD1E7W7ToR5WjMBexQ37jvd5mvR2n32hsB5jKWaFamEF53aXggM3oxSjY3KKN3Fw6i2gN7V6",
  "key2": "4bRYQakzTd5Hix3DAZUpeVtt3qXqn9iDYRZDRdRFThEsGsbfEhVsSvneJ5YxDRHFMtN8sDtyK6rgLf37bUhcCQAU",
  "key3": "Q4fP8eCAheKGPbhbSkkp2LWSzVgG7hjvjdCzDjhspMETFPcrTYVJf7Hs5ZvpXJUu2dVSLyntN7YhjZpwyKxMdgH",
  "key4": "4YqigsNrjfqdr68oUr5A9TA2vUChAevMkMw8UpxRihqZ1obWAxeNsLcmdWGbsj2MSqQBbE2PvA7s1ezaYr9Xz1pR",
  "key5": "29n5nijFMQyLGydg4peCXqxsHF5vwnXNZgDfuM1kN6XA1uybybzecC6M5FRg2YpJccsuv7m5ccBhw1CLfXeeUHvV",
  "key6": "4iEwsTBTd5QgwoWTvmWcW76oA5rDya3CxQXaryGat2rHF8bS9o5MmozvbM67m8kGBnBL2UzFsNuADVc78KaJqDay",
  "key7": "39Z3R2Ka3ahAHic1xUsgFhF7uDyCuU9NFhd8KYSDXMmNB6XCT3k9Rbq4GfYpQreN2XuDkJzRUsJ1WFZHL9nzgFFt",
  "key8": "3wtiXSdCjxgqzWKYAzbnret7ZL327La3ZQcfi7WtB1ewhCH1hVbfoLmx7rGpJuy6AN7UFq4jxtXBDJCFBHPZbL7E",
  "key9": "5JBxTr1HjVG3rGAfCxeLsqDSR5jbCKaBhu1eGpjkFdD1iwNMXUVYmvQ4GNVUPSYa5HpTGKKaXaRmsXTSoKLHG7GA",
  "key10": "5VtJBu8gWyvzjCKagkf2wpP6dpDZjoVcN4xcGX8dzNS6CJBkPYeWUxuYJefjt3oFpuvbGLgCer9WgyrRc5yKGRpx",
  "key11": "4ft878Ka27iP1jbkChWJMHWb6BNa8Ut7VL92c7EcnXLGUxC2czJAxnVdLgCZqFWHkFnEytWeozUkHsK7AisAKy1B",
  "key12": "5Ds1YzE2jVYZ3pJTNCCxrFWbf2dh43wRZgFWHStuGHrMYgFpNffWoivC25a1NNW9fRgNDnrxpBjdsHCvCjfUMqpj",
  "key13": "5yvDxvA1P67xzL2Szdd4jxoEqpcwZCqesqmwwL5CcHi1aPnM6XhCYBsDoM81LJFy4MxgLwoXwAnmnmGxaCTLaQ9y",
  "key14": "4wTayBmPWwjaH3Kd3m7EijCJSaCv9z7hd1hKe7XhL3Rm6dgYZGeYvTgpPu9P7SorocUnnwzWcMwcKkXz2cPo1vtv",
  "key15": "3PVhkSWEkFWwo49HEMxqTC2ipHXCzT737CNZfEruuRC72YfRHehx5F95WnjKEKd73gLH7oYTr4EAQToh6zZ9ARYt",
  "key16": "5AhXoTUK83AmEL1hvWmCN94hFt5h8NbiUMoqBe4tzgUwFS4791SgoznpsbSZaLcDnR22GSzuewoH8zHrbqs5H2ah",
  "key17": "4Tt6qGeL6TshR48ZwEyeNWguBvB7USxtB82Q8BvNeog2KNkCvKKG8LMsLGm95ntcZuZ5hsfLmDL1H7CGZpq58SKW",
  "key18": "5ECPXDRKNXjC77bQDwLg6ZqdtbUkn1nd3Rd8b5bJ7QLmyJoyEF2XicLeT13wnra2JHCNRttbCRt92rZbmHuVEg1",
  "key19": "4RZ6jCVLmnhxmqqw54v1W4s3uiacdVVrwpioJn6Qi1dGb7yxK58sgXoaS45oVmVVirAGkHSe3MfBzpe3wnJYWDG1",
  "key20": "gv9U39eeN4Getp3cwoS7NN6bJhDvVEjcNwXBj7w6STWj4h8sc2W9P7afBzrssYWASNRWQszs2QCjpTgK2Pmgom8",
  "key21": "3eeWPUT1dpREMT5jSsJHPRaSZ9AXFzWwYbd7yvUAmRJ42de6Z6bGGetku1JmcAuMhv4cAEaUPqK7VeBYuH8iX1yJ",
  "key22": "3p9bifgSrM4L4fpB7BKrwRQ72hSPnHzuEktn8FhYXB1j7qjH3V3EpRMLyZALfkU7bMjUpF52tdUtk6UBfbetWw6m",
  "key23": "P6JnCw554j6zJjy6B5Xp2ewu3D5p4JH2HgY9ZRegK1KpaqB6QjavaBmtTtGo84fcntYhCLAViQpUFdTyBZqACLp",
  "key24": "2TTT4yBse9xLHDja4uvuCqvfacHw4gdj81AHY2Dpv5aZDMnJs8b7yc6YWjK7R57hTZ5eKc9GiKNvhkX4iqL1RRhL",
  "key25": "5euvwZFED85tKtwzUzUbaUoLaBSE4bfbySoKDyfNcSUsrcCbQznY9aP6JzrtJBudMPsdMb4iq3ad6FKgfR6uJ4Gt",
  "key26": "37G8EpUy5zKAW8JiLzMdbq5gk7a3V4NsMpDcohVDANz2LUmU2z6q4j4HqkNVYAC9gLk4yZHFzYkLMaVWS4C3rgKM",
  "key27": "rkanqcn4JoRQ5xnEAy3yH9r5VC26CvRibb4JVXu84A1J73iZ98XoK3RxV3ByjjLU64Hfsp6Gq453R6FwdJJVa3D",
  "key28": "4KSSVRCk6AbUSu9UQfzgnjSCoKYXyM1TQmHLMcqYnR95tacQyneo39K3GS5C7BuKJ9fSWSk3e4VoTZqgqrgHNXKU",
  "key29": "5QMW5NQf4Wo4EDmmZsLK8t5oEv8jyL97EGy3HyJ9xgwe41AQFhLrQgsEJ12W3gaPYigLwhgom4huiM9zdFPyd6FK",
  "key30": "4ug6QpTheCoWjE3TaTacuj34Tcmhw9g217ddbDmyXY8dAn8dcpiLubpG3Q44xapUgaTSVoeyka4odmcnihbpnMCD",
  "key31": "7Hmv6FKS4nGeeBXgoncnAJy25jKpCmH7T3BNkdZGqv3djJShNwcw4X2iJ5srdGZQSWWED1mjfuy3k1vcZAUBKkQ",
  "key32": "2dQ5d3gYvhHnJSP9fkZNvW2rMmPsec45fQcXN4v1bnjLcsjP2qRKaZSj6yhDs1e9W8Fhyu8tK2JpgN8tPLtkQFzf",
  "key33": "3sXWJdVXjNePTfHoHZ9D8k4Tyjy3opZv5HDchgA4GNEtYHWJsZue7DDk2GydS6PNH5BbFL1EbWeGLWuocLVfuEoN",
  "key34": "4AtEuM3RsNsXb6TW8Vjk1sZKyDt7kT7jGE2zhoyknhanWE9YrtCWC1F3KxySm4NjdvZGHTS7GbKgKuUTsNEkKgiW",
  "key35": "2jZd4zeQmekrSoWfSztiGhWEFDzYHUYqf7MPDoBmdan35e9p8GRBpeAaCoxnRN4BzUXsy9qevREBQRdC1LNPHfiw",
  "key36": "5Qe4VufmTzwpwLAUzYvcL4F771DgPcFLN6o6YKT7bHai84mANNe7TLEWsERWTUJpYiyGyrFmQckghTV14enyB6zx",
  "key37": "2CeBWaLunWVrb7LzKQCCynaHwaqTLDNkwg1TqGrfwg7sMXJi3BWP2Dgiy6Jcg9Tb2G27nBUTVULQmPjNseAaMRQC",
  "key38": "2LCAcRerWCw6sMqdhC3nM6mwboeiaT3RUvPf7vMmB5VVRPECyvZAHyGtduEDrr29f4WD4uxYZec9sw8oJHMLq5JU",
  "key39": "5ivYSbZzmr91Zc6tttrciZn9b4oi7qtHgPCnwEKHWxxwpNuLVUY6x1utvEkgdJXBZwiDthJcaKGSFoJui7A3yi9K",
  "key40": "4fPzC7mVNqhWFMmrdSENk6Romg5tCQuhEfHdRa5zGhg5qRKwvdopfrZ34Cj9FqbSf2XpyUqDUVB3UJE82ifHngVu",
  "key41": "7Ew2oytTsgXno4FXRfj6DC19TLUQfVmNDbWoQULx5dG8ATEoHqZMjV6YFY2rviTqQV6D8YAmyqFPnigEN5NSdFZ",
  "key42": "4umkLSz3wbbdJ2STY6vwkeyt5QZyuNsEDdfiX6eAfeqVT7PsaQzvaF5wXw1jGMCSRsTKkzNogq9oj3Hg3aeUEkNH",
  "key43": "b1ZSEj8bjJ4uvMfRcLTAQxnDcqQUyWGcVq7cWtSsi4xR2wN88gWaQbTPDdEY7YwNTy6g8uodKBpWCQ3Ge9YNyeZ",
  "key44": "1fbLqHX1VftEQx3rGQYqEV8DcNEb335GL1FeL3qR1RXXfPw5QBGULS4UL8S3wXMpEKJFTPx4Kjii1ENnv4Bmm2L",
  "key45": "wFLW5fR1A8USMDdgpAdjd4ucDV3MyWdcdji5VssBvSZHU4gafzzxo3zqFK4oeZunr3KYdf1LgdXgzCH5tEq144f",
  "key46": "5HfvJBbYJB6ext9zRajctiiz2bLENgGNdP225Gee6H53sykX6E2PF9smui8X2D5u57yABw5VB5EG6ih1F9ZNgUUd",
  "key47": "2auLwqCt6RDa9b3Ph9L7ZEAoQmQfeGEGwZCeak38GYWLL4a7e2V4D1NTQkvCMZzpEZDKJZMEWDtBCMnZTs79uFoy",
  "key48": "5m3atmSCv6duAxyvWABZEdLcUsVdnfTRS8ZJ7JER3jCGgavxPShvVBK752wYtjkxUud1ttmfEDKuAYPk7PvkuWWW"
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
