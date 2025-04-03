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
    "qrs1HRrzjebmE6wHzM2bmreqAHtBenKWXc7FfrZaBe7QocmrZrW4RzWrJHWiYJ9g5gEQq1iDs3nRmuKozEeRCkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hJPofq61riubKoSDFR5K7tH2xe3upFiFsS7Jkqd24uWypDdK2em1bZw9d41aDUBpaUvoPB2h8VrYsKPNjCAnvjC",
  "key1": "4M7o38oRr38rDUcWJLxz6U8ju9vZRa8aKEdSxtHvpjgShsvwtokL6oh9AcQKuzjD3r9DuwYuXtH3y6j1PJMfJEod",
  "key2": "22dzpCjanqJtUytj3KF7nZLmCsYVizGj6HpCMFs5huVz4eMrtvvRe9cmhxSQbndqgzXFVgxsm1Gt4RbBmQ1ckhda",
  "key3": "dq5EhP5VWLyZjzuNUrZz6nJ2sDMsKEJVFkeKWcFsHQBPfaMrrckZY5C8dX97EHHJtZZNdkbpExnrgsKt9rQVXbo",
  "key4": "66qLcPFaJq1X7nGHnZZCTv2kb9dyCAPsvomRFCkuFFrgLs3ShBsBN2fGaAWqK7E1NyKdHHNpv5iHEtf7umZeXL7F",
  "key5": "4JDSUKDujnCuELaxDVj48oQ1SV7rSA5GkyXSeDn6am5cRUgaDeTrXDUgUM8mRZM9YQnYmGpjicJhTatqV8oQg9HL",
  "key6": "3xtYgoEcikMdLExd2RuPHAkgH1cnpRt1wBUHqA6FdVejyDSbsATDVviYcQdjqQYeeSNutwovQfFZDLaoFKtpPsrT",
  "key7": "2tPzUXfa66voZLBRsthcb922J2YBqdffCF6d98EQC3RaLck2LLgyWyxfyKbhK3dg39hyiDhuyoG7FA8tH4xvSYL4",
  "key8": "663JxFaH9YnUDLzzRdTPFu7RFt6e4vx8jt9CoKGNDKNqhW1zywdEqgp3Qn55s1niSG8yUsFthtPqLx6wjAtmUefe",
  "key9": "3dxyVkWb36jgmdbyj8Sp9h6WfgYCJEwTzhjWBcqDH6yqArY15o2gveRx7zfsXzM9SH9EUstDHivXUvc5gyQ7u7xZ",
  "key10": "jmQMbEgSN1rkMn6kB8b6piBMTzZhW7udpX9YtHQtH4JwYxhJeZ3FGaNqRKDi1uHT7GjS8ZGTHxeQpXcBSeysSXc",
  "key11": "g1kwSvEyxM3KgNKfuweCBoYUHcHyPJ1xbYUfRfe3ccq7wbHumik6s8zz4C3WaBm1xUWkj6vYEWd6AqTTm5qvASW",
  "key12": "551WFo987Pw4ffenmprngtmtTAwHBF1xL8os7GMzkLZn3CPZ3pC5YZqr9APMV2Hhiuui17p2qUG9E5Yw8aoCvPv5",
  "key13": "46GZMSLnkAdgNBrYJUjXxENS7nAq6PUgGsXoP6EQzuCLkjifveTjWjzDb99Ta4RxCPwxNo16qgixMMH46mDcYNnA",
  "key14": "3EuAVTpHeJqercpRqBNgrPvHqd7wND6JLgt5XiNWyfN8wGMSRSEJHgDaEE5UMmRfLFTy4p3G7R2HJ9CStXea5x1Q",
  "key15": "4QtyJ4JLu37DammrgE8m9hxkbZXhsYMYiUrmZcPeHPrNGPTgcr93vPq7GmrnDBgos7nB17DTKRhm7Xs9VoiUaLPk",
  "key16": "3xWipKRXdNXK1AVqp49L9LzttcVkZeCXukXabyXkKEjsYuUevC7joEKzbrVFq2UZTsiCbdNBTHyY6KS7tegVhAdX",
  "key17": "3ogWtvNEkJd2yMALUU1q25thtpwAysYLQCnfwmYsd8jH2U9mkKV1wWRgRFPkuct3ubpncY56AG1KzoerW5tzqbXB",
  "key18": "49M5aqw8s5LJcbqoydCoYpWFaQ7fzUMgtp2oxtZfUdhnBVY3rpNMHaPWZuNvwr719f2sf1X59hqeGmgELZ2ZttiA",
  "key19": "5kvHJfbgqBrXd16WjLcx9LLkXyz5qLMJTE7eHLZagjPgHjk1GW9o78UTtjHgndAzZNSiX2JWCkm5oS4Skv3CRrvk",
  "key20": "2JheMtzeAc8rpijaWwThhht56ipnNVTrkCL1ZkzmUr4fcJBLPZdqGRcpurproxFi3LQfK8sEF2zWEANN9mMs3n3T",
  "key21": "hJfr8rUUQZSvokrZYVSostdYBx72LjmhJwHNgdpPtTy4ukz9Kckm3kCi99DxKNfnifTyiwpCcmwV2TjCEjhH2fM",
  "key22": "maYkVUUrZ3NgbHzVeANBgmkF2pamzKhoZWuA5XdQyyDMUH5rMwSAvffh7mWQZ9iD7buKDdCF6HBNqDeAkBq1wp8",
  "key23": "5qVoYj4Ni3ei46JBi7r2A8wVXh94dJfBaWDVEmvNoSeUqKdXobkWyMSYonf1PX41uhoHcRpMDLEnH9yq6De3Dgev",
  "key24": "p8gMcSUauQ43xbaVD3zRurwt4xV7KvvqURy9QzNTmbkRA14M4LLiswQhNk4RvJbcBAboyS8YNnQFcCgfkvNZ4GX",
  "key25": "4hpe6miKYLccWrX4yx6ZRw2W19dRZyuyN4u7JK35QGDj8Uu1noy2zCsJnVgiXoVNQrMNYqM8QcJaoc8MbbbQivLA",
  "key26": "cbixvHnZRuoPaRdosJEkN9Zgz9NwTDbw5oAfjDgLAEUm3FSHwb8njc7ARAPBUPxGuUjd6HGdRQC5BgcuuHhDZKh",
  "key27": "4RvKBCUNMGgBHEJ8JhwFFhAcyHaFBiRitwqjtrSjqTpjmRQC6eG6ubGjk3Ye3ACqMemQxJQvN6pQrfHyiXr77pCL",
  "key28": "2XxidvFwCrMsoZmt2U8LWUFEsKtKWuM1tLsjuBfAbXQsnKfnMGMuFUqCmG5DgJVtXoNji5orXQAu5Qxb9R4ErfpJ",
  "key29": "47Ynqsf1ZF596YFf66zHzVFRdhYzFGVybD27NWKbjcvtZ1UY29mwTd9JTk6JiFdeqLCYTY8QchUxk7qLBfuzgXYG",
  "key30": "5LNdwbjhYEHT34MsYUpdinWYWnmiGFxzmeyxXA6s12FgPqjWj5nkUbP4qK9PbgPCxQ3i2RubJPBHWqZxyVNh9uAu",
  "key31": "ckMRvCtM5EncS3nWGb9SvYnnGZggu1ihTFMTSFdDCoWuU7uxpDEEA627VT3NGn3RdDJEmAkfsfeeVELau16zx4k",
  "key32": "4y7smrAUaTSmUVfnNPuj4RhcnTsTtfqAMkB8MQQzE9LbbG1Bkz8a9fJPDzQUMuwEyp6CGS7PkMYzUPadxtmwbXZZ",
  "key33": "27AN2s98bVaxK5kLcJcEE7LKDCAMHttqbYsUaejgqPVHiWzCf63L5MdbnBw4PwdtRUCBNJUEBTfQMe37ZwjH2HYF",
  "key34": "5DodUJ5XdZxUtyoE4VbonCux2PEvb2DA2vGNRUmuC3mKApun5oZ4HqDXEXVWBQc3fpUwAbj7Hmo8Fsc64thyvqMh",
  "key35": "43XCbcxM5j3wYKdMMqAwhugoxrBvtFQirJMKayKUnDnGpYg7Qhkd2Fdn3aUVgRSGERP6W3As57uYpHy3Q9P3jLNQ",
  "key36": "4dDAvmQA1fzUCvH99bCkivqQHs7PCaYyTeEWVytdrLAcD1y8zUtNcC3woM7PmziNqN4tXs16a4TcSQCT5ykVhjNj",
  "key37": "5S6MRFKB1MFZ8PAMrPfQzYiSsQuWR1kqBxAqzMUkdeeYqYmm4CefE729puPzy2jNABduDNLSRqKDSAZNDDcUJxnc",
  "key38": "4hsk24qA6zLwBytUEy7bDNhB27kX1SPwvfw9rJG4vnta8fpx1kCqtDht1EaVaCRhNxgUKYLpxXK7SzEWGpZ6bncv"
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
