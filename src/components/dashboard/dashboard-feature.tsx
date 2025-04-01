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
    "57LxHBD2X1LuaxwAgUjKGSEYAENsVre2iBgAu7GzAnzboUrYFVUv83gJHHdCURBnA9C3NEnrffgH8YFuk7kZs5od"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hEtR6nm3cdnEeacjKFZjG8NCDwsjG5sEEyZCF6ySeC2v3NRir8vWyqqZ6r23FUcZWo5tZSWuT9Mbi88VMrMsdDz",
  "key1": "3CsLGzdAGy356osxNHSEco7khb6QYLErEGhhohUxdZj3Yqs4t1KC2nRoyvKfzYnmkCW9mcd85Y2DzZGhM3snrCTT",
  "key2": "5uM2VJgXyjBMpYTbgfYHbhBKvwAVsN93BtpHd3vLbn2xgKHxFz1hjVssfjWRZUUZucwi7WGwW7Px3qvySL4WPLtG",
  "key3": "34AovquWm3Gm7Eykm9EBfiVhVNvhkT8FRy9S3h4d7QCuGDca8hoHGvu1FdKB9z1wDfx5XzPBCACkTPfhCDVJGnuM",
  "key4": "Apf5ZgyeWRVoiLxz6rbsrBk3XaFNQ6QfNgZmSZ1fCYaWu4u1PBDMuKzR4nhM3VZchE2WeUScPxNN6rKjpLLQLmM",
  "key5": "41r2TrfpViGPCPLbs9rZGxNxw9MFDY8pfkdHg5pDBcqvk5zJJXS81UzftyEp4gRNNW1nwvsyn5AH2hUVGCE5J47E",
  "key6": "Eeta6pT8hdKKBJbgLJV1JNTQsim8HB9xGV9jKWAn19R8xtNz6tzFbLhUCUCpzh5wBXH2Pn4WVEixq1rqMZE1Qmn",
  "key7": "5M1MZJH4heU7DAZPFdmCAvKeEHoqaNWzAVe4Tkp6oKYtnFcfSqMkXEqjNeAaLcEqFaFwpSJLjFEpWo8ASQ7SRyJX",
  "key8": "i6PuDvqjjfpNFcS4QUptoEfUgADqnySJd1bdmonmv77xPXQ92XCGXn9ua7w3PL329vJ9QUEAiuBstSUDyHcyRfJ",
  "key9": "2vzGSN8zfFGSQv7duQ1H2sXL3LPr5R5asAHg1JRv3SLgALextLqTLbQ8gVbHwp4Ka7zeMSoPzvRvF9LYqsBCK7nu",
  "key10": "4VpT5qke7a5daYysNrCM3XWNt8MhwvGJXiWw5GSkfmkcaNqtuKVAYdEfPvqP1tRBL4TVH5FTbeb537kix8vKdqkR",
  "key11": "622JKcef9b5Dv3bq7Smqq1VuNLuX8AZa92bHtnf4KBMx83R884q7bxECJkgo1NyMnDW4fFgjg2C93VwfbQatngz6",
  "key12": "LUiH4HQfHsqMtTtM2cp2JkrWctCF3t9txMj7NDvyjxxHiXFm8UTMCw6xGoHwJ6EGbNUdUCP11ktFqGyx4kpN3TB",
  "key13": "4LtJeutqxNKuduz1qTtaKd6YixkYcA6F3W5ejigPD9JriFECGqs6XU345ssQqnF6oBhS2okkr8EVhkeUgU8bXdEv",
  "key14": "57ADAJwf6QjNQRyozRoDvRqqTnSGuXmV2i5NivNcoN5rz4ycwmJw6zT7afPjaxD2mRkY3QYVmoBoDbhWVX6tcNsr",
  "key15": "3bdLgJkZ9NGq7XwtBHjMmPk3DuWoEpEhLha9MxULPkuKfZ4o6njK9tnFGHpa1jV5oJYTsmFFCMzZ3TepE7CmJVf3",
  "key16": "3j3AJveaprZrw2fFyKXrRr7itY3Hxo2WJQF7tmHvbyEvuQxxpgJSoFtHqQcQuzLGx8uYhdDk8GFGD7bcZ2n43Pcj",
  "key17": "HToZZ7qJ7GQZPqGujXAnziJC2wXCWiUdXQdJ8xT9BiR6TJrSbmUBZfu9ixJhP18HYXWE6kKEZZfn432FyL9sFr5",
  "key18": "6zEdqyXqqhLb5RaXF86Vb8fPk8WZvhepR84MwzKkf4MS9s1GVyPLTqC2fQBZK6NyKX35S1kXAMmzdUccxahNvxV",
  "key19": "2HrG5zpfLeoiJ3NAhUCB8aFwbZeMJWCdBo4bzPpJqZKY4oKTL5veKJnRtjPaB25VjUKMqmYAYcH7LMRrVAnBZN8r",
  "key20": "5ptoVPFds1WWZ4kEYMi3w5fALZdgmYKJEd1y7QpcJiwzrtNwr7kEsWxH6aHQx9ozw3KDBakNo2AfyTvYyHnKELGc",
  "key21": "39v7vujnHRkyCg4ZQxQVCPJ5JDiH73VyeuCbjW3dpjS5yuRdmmjKSmWQbc2J3nzZLzbqZapBgv39pikvxD3MX1od",
  "key22": "65pFNfEikt2g7LyMi4RWSyHBfZ1XoCD1W9A7iknnFZUawdxivocVYE9ykKbMtEm7FVVXE8E4H98NoV7Ehcu1TCeo",
  "key23": "4wtzSDBPvL2is4G1hNb8YtX75iPZCk6Ax3RdomZksULLepBHnZcEPa6LGaJx6bmM88w8ZgND52ajPrCKLcBfPUnT",
  "key24": "3nbPkdmq6pJVedpNGaGw8hCTuybrUWofmxUq2H35AnN4MrXmV4MyjmF3iNXYr5FZyouMsZMgGodrkbx6cmv3sPc6",
  "key25": "2AeyFJvCFwUgdikWL4fVi4qaY6HVcUji1TCacBCufTpMcfEGrr5FyVRfAde9QmR5iWRMP6MiWY7kCJDbfti3C3VT",
  "key26": "24fJKWwemzh2rVgBjFYyNTufsCEwWvrZGMvsLFm16UfK75GZfT6BFCaSbR9FrU3h5cUMFxu5yoqUL23Z8d9pR4c5",
  "key27": "25QWyhb2amCGNSKL3LnXzKGabU1Anm15EZZYnJaRFN1vbJbCu6FWqzhKqT9cWpog1rxbMwRuxVeEcZ42kJBDkbiD",
  "key28": "65pvhCQFjZTdDUTLr9vAekhwShALTr7v1JL26g56urq6Jt3x78xdmGq1G6TCefmuNQTcCA9tGvdQPnjdWQktJuqc",
  "key29": "2LCPDLcmcgbBC5r9fY3SoVoVXiBsYHPbkdfMDWSEjw5tGeSPfWg67b9tkGeEq7ZXeicmi51BMmTx6Mr9DFkUqr2i",
  "key30": "4Xhh8fK51baoETC76ZxgcdKHfsSAhKugN1biZ1RmF5bzpXqz1cZA59CrSCptZvDnANKs7eX4ePFeHq1jjDoppUVB",
  "key31": "3PnXpTZTWP3gzqJa72YfVUfyv4eGjiZ3F9QHfjuPCzZzZbHJnUBmtCqjpNe8REWWX6LTyQcfM4U8PXd1jsHvE193",
  "key32": "3eyh4hRkyrDKhfNdFUFt29HrB14WhWKMjfK1EH7SLmA8aNNzH1YEqiLn39S76QkiAUavPbCh6LnmSBWgMKQgfzmc",
  "key33": "2hNXL7zSX96FrNA29sMZHMxHPacLmnDzYUEAnHjbHRb9SZSmT3VgsUy9q1XkgaUbqfwe1VZBWRRJMoHpi4vLiYCf",
  "key34": "4s7VmSsfYqdLCPKqeNjjSg8ucDAnEfEPypqT3DbA2P9xmN2DgAirUE1paUvdMrLucB6sxoTeNiivkLT8krLoWtQH",
  "key35": "4cXGnfSMvNfQHq7ktkJBcoxq2UNcWjmgBQEJRLm5KDt82WWsqUhYH7s7EeV2oujZPCCn4noUfNGy6WrSYoZ5TJfL",
  "key36": "3k9uSuZrjiC4VtEzLQUqhe2oiiK4VaiXpW8chMC3TzXhM9Hn2h8zkxn3nUvefCk9gMbQ5J2caddAPXh1Xu2tzBTJ",
  "key37": "2QjW9ybWAQYjAdNbxc6hrqMtsieUmrqtnt6cZmjQvjzXVaNSEo3RvM1evkz4nCtpXPku5Msn1RkyjkmPLkJobAg",
  "key38": "4qZ5ZjYgpQJnkoLqqmdXBxLySZuu23goyiXCakpTPsS4GQFTJDAZscBJ45V77gjE9ePYBaLLQfWs4FUKzj9hRtDn",
  "key39": "3vYG9we65G1QYYYVUSu894TNczAAqwYbFNGQe9vrAHn5a74kaGkW2CuvNMbRQRztnaSRyY3k8EB7YvhsGsT6dnbY",
  "key40": "5Xm9bixYG6xCJNKDgUiuJpk54A8uhhby51Py9Fu7a1iWSJZJYTzVwg6EyFjsTHESMDGHWBNYsRkYLHMdr6TWsfdo",
  "key41": "2yAcba2SXiEvHzZUgP6VHep3bkvkCnmvyJKRbjGWctTb3tsZxTj1R6QwdjUXhVj5UUAw47mh94sJU2pmjg9XRi5J",
  "key42": "42vNmkjBTpY2y1kzHTobkJxeFLqndMSZQrLATNFqVdJyXruAEt9tHVLR2hntZ55Vs87DtzjceRYKuDbLfCV9qw7b",
  "key43": "2zoagVmvrY1u3bAtsHaUVcv5aYpAisiBUkiUdaLDiGqKGcMJf6h69sn49MfaGRjzVYfTHhmPBmCyfzo5TdPyUETg",
  "key44": "5KQEvPsDkRM6UyyWz6ccX9SvbqqadznU6N4C7Q69D2bXe56rTFCY6DcYgh6VEDJ5hZveMVtrde2rPVuq6kyAhUbH",
  "key45": "26kNccHvr8nTPZNhs4pgArJgPGza5jBQwkpdT22RJGEdw1wH7ZA43VwqmmBSdETpMJWLSxnS16va3EUNEEuvjJx4"
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
