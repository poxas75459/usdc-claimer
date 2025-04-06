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
    "4WPnuwuq7CVA1j6bc6CvQvx5UbG5ExN2e6SxWpc7VpXTSjTjJmf98kYQJVS8BKFs51ckt1ujJitMB5DVQrCuh3g3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fkk1S8SUGieJKa1xRaGCQwt9BQsvuE9W5n63vLXauS843FjTKKQpnmVzLcKJ6EmrjeCSG1rHDh74hV7ja4pKzym",
  "key1": "5uk9jxdWhze81yvhtut1PGWbtGFm7BZZMRqPaLDTRR6NsqrqKyCME4WTiYNxejb1UWhwRGJzA5cpYcUmxFY3C8LV",
  "key2": "2ZhSMZgyDq4c9S3Pg7cMH3ppdudcho75Th3WnaJrp7ZchjD9yJKeHhLpYcgerrtnLj4xga6HHBX6MPSzPCWwJwuZ",
  "key3": "QTfsDHoMBdqRzDfmTuzPevg4U8jGUPAkYV5NZZUX9RPzcRDPFVe9K5NhDogME3N9DC6c6ZeEbWYxu7F3a84t3es",
  "key4": "33rSgJuiokFNf7VTH9vt773zSdijbKKEZbCkmnV1iVzdfi4ra4R1fHhLN1gWVwaQEzG46kaBtH5u6FsbXtgMHVT4",
  "key5": "LYAard1BXfTy4cMELC6FMvhMpp13N35yFZbzgEN52JCvUKvK58K1sC4hkiz3DKNWWQnNLfVZJ3GQPJFX3LCUppA",
  "key6": "2MnrSEGfRXjQkaCdGihTdX8S4bLtv7x6hiLdU9q9DfMiPFyDAkB6FKYPmgZBoyGfV4PJc4Dt7ywoB6PiPBqhZXym",
  "key7": "2NUGUMjvdy2cU5KWR7McQFu4kXSx8SnmpoQNknyo5RHgznLMqc8hg1Bx76YX5pSHf2KmFW4k2DkTHHQaybzsSJ7G",
  "key8": "5iEV3Ehqfm8xsNq1BpvNvjbEwT2WxJsaVT7EdxsTQDnTquS6nEQuacGk1wwS7ny7DkEU6tToJvQETtB5HXFNVcJ",
  "key9": "26Yry8oqiG1osRMBSiCqvRPRj8rRFjUVJFmeT2VHx9AwzMHaGNGU8ghhABAvBarNtAbupAw8wZQDuS5TkWJX7tEX",
  "key10": "3y4LbanTmCnuDwhG6ekRUxkr1QUSGwoed7mS1B15CCFrnnmsVjTCJUiaub73pkj3J55hwtSCtmnE2V16YhwDqeLg",
  "key11": "4d94m6FfBweT9k1ahUYaRchrfKCWdxh8f85wJwFtqRHGGCcuPSuMrtmgz4XjWQDW4q34ztbtyN3JAvLPracswy1b",
  "key12": "3hoSTbVDVawktjqupGRNpftDD9nPRHY7aWCWk5j1pxMxy5AP443nXoj6KUrdpVpRY1EVHKsbQutTMceW8aF7NSy4",
  "key13": "3RL92NCWY3HMTwWXJYV4umkEvyM53AGpSUe4LL12ieZDbQCtv2ob7ptdSSEjzpmJm2nwDpK7vqajaj7onyBHou9p",
  "key14": "3X5VbpdFMvLXh42dwK58CcYRTTwDTWZWMeS4MfhLePk4KL8Q7FDAbyEp3BYHHxu8UPdEzBvXBqtbLa9dHdgwTfLn",
  "key15": "2ice6hPzpztNiuedFuVPmutZCU5SYpoo1Ms6YhVVz8k7eGoFWR7k8m4eXBSxLgMDFyC6CVPkT7GgW8amZX4DcT37",
  "key16": "2QzeQaeairMCrYVGmLBvZtXHGV55iA5M1gBLgwt8w5xhuHjAJHKt1Xmk7PZohG7azm2tTdo8Br9ss2ZNmidN4TBV",
  "key17": "PDwZoXdXaUvXt1KMv4ouJjWoUBCNYF2c47D6ia3BnrD6SU7xt12kKF1xckjqHtWsGjuQPHChk4Q9hTKECiJe7N9",
  "key18": "5thZymXHvUq7xuBfadCmdNWp7jzHjVvpSozY1RdyAPBoTBRoPqdPfne9cLKJcq4tkuCSVXmmzNWYmMBCzwFpCjiB",
  "key19": "5StZ255twvJT2GMHtqQiWQZQZ1v6KQaHAVJHjqrvuaJs5EamR8iH8TefyLKsJ2p64FGKEC8deaFFbgRBPrr6zC1K",
  "key20": "4b2PAikff3jeJQ3wZimHVjnpgh5hZq8SLvST2jRkXzsU1q64nbdNQjz7suG2wftqZNZUCSVf4xzQfuwo1jU8Gmf2",
  "key21": "36pDZxucZoiereDALgxV9ZZoM8n7i7sQQ1AdCqYsJNnXic8CoEKgi2kqTcjs9L1ZPrBoa1kVjDabxP3kHmXtf1Ds",
  "key22": "3XmywiQr23GDuQebcFXTS6iLnPPUSPD1xnHzCwpbmWVSJo6bQK7u4NsocEi1BcHV2XBSpeBAkADpCvAi6mF89Hvc",
  "key23": "3RrzNBMWnHeuGfkEw9Y97nxYMYufsViRFCFNUNoCuVZcWZUFLGgneYUDFfyzigoRUtRcoRHV8Z9rwNVGbsvsapLR",
  "key24": "wUVmp5eqM8soPvwrjujPfqhXNC2n3wfVky8CBYkU9a4MKsSdVAGvj7N2xDYWzNGGL2Gz96scA59jNtS2fTGERSW",
  "key25": "5WVMw2JdYhGk5Zj5xvys91Q4NZKW3KFg753n38ybNCT6oRYajVVqGKCAUkJCd5vjNEhAS7ZSieM49HXD1kZtwYVc",
  "key26": "5R2aDf1W1d8GuWnx4kSGgBgwY7A67mqP5VowVNQpm8SvW4fxhAEfeVKMW95KhUsniyD6wGaXKMj7oXwSeJia14fK",
  "key27": "522DinXLoac9gGWPeau6GVVEMxhyYtxEDrSc7FUntf7chH7xyjv34CCLsZvWs9TSoYVaN52iK3RMtZpLwwBqMrJk",
  "key28": "5r2nZuZNCLE9f132PChThvxAw1NFLt7YCmFt98ViMsZV5vmqrHSbNsDkcURtnzHB6iB2ZE2pRsToPRms5t23Wf17",
  "key29": "DHE78Fzx9zDkENvUn8fEfiCBEoHyrGFQZ8AkvrZYAUU28s1BYFiqp5NpQM47d3ge8Ub7cZCbprbw4AfAsEFneFg",
  "key30": "nTnho5kY6QsyUJ5e6uCxEzUHsWGjCsb8NkWnrb5zB9uETbFYmg2QvGquKNyoYo7PiaDcs3bqoHPmmKTWHsPoqeB",
  "key31": "56ek9GZHMhnPy4osAxksLDCvX5diy6uF9huVxb8o8vXbDEK6QULYHLqpKF9wSPMBTkwFahtwn8eRZRiQ81QSgUKc",
  "key32": "2GV1Root7Di7qjVGhwtYEPtgi41LgwYEnindov2PWn5wRWbaPuRSv6B2T37NKsW36X8Dy7WZBxGzsejvhVemrHRq",
  "key33": "2KgzxQMHQoyowUJGG3WicD1mRt3N1WH8i3XLnRa14tdqcKLQW3sk4TpJ65qMW1Rhmajzh9qG7ThZXyvDMSa6WUYn",
  "key34": "3EAN6DWkk5bq5ixEyL9mRsyFPFU8z7RocgKktsqkXMr4LbW3MBRCFi6jHsqKwrGYJ8uBEG7mrKXxtMog4U69HMXG",
  "key35": "4in54pE51gF4JxaJDAfMpd1HUczMdUW3wyk7nMYUXEy1SoWENZazZNfGr5pdgwnA8A5foycXMzg9fadaFAFYLwKn",
  "key36": "BKyubbipPn99ApsNmiCumgZ128zTeSaRt9XuQgDVUWQv7CRbNg1kbCL3r4skWcZoSMRusYJ4oJ8znE7DVzEBfWs",
  "key37": "5PqxpJMpfrxc56FKuRfG8Fgk4P3SMu1zuGoDBphsg8FiYGycMw3qxqJ785XNJZxFDTUvFymikFXCEFnSmnatMn7M",
  "key38": "3tX8vK3ACvdHtEci1EA7Dx9b68RLdCYqjvw7vDJ1U1VQGq7dskiBSzXe4CXfZYkk8uw3WdNMNrvcz6xFAiao7dRx",
  "key39": "4Rqi6JLU526qNcDWFmG4zVjzLkAkKFMAmD9qa7w33GnCdkqKjbyts25CVidSYDMsPvUrDNbKW1mLaSArxrUn9Vvd"
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
