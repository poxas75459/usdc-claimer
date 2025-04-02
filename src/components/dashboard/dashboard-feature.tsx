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
    "5iyq6EFvYiATrrhMEBX7nqneQWChHrGB766vTxAeirdVSHyNa3wGNWBsPYHSbfDSCKSEu7gJDAx2yLA1cJuGvDyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C7yEUam3JywPAg5h65aoWv3PadQKnDMiJvPFaiaNJQLYpTjBmxQqeNec7CfL7G96wquAQpt7PncQsDtxAyEhBLe",
  "key1": "AUtRQeqt17561KR52phffxREfmgveWZcRBGMbLmKRVGm6rzVJhZVoeKSY3Amvgz6yuFB3mBS484eMA1uV7FB6Es",
  "key2": "5HWg2ov3n335jms6MvYwBtoHXRo39baeSLdenmho3Pn6nSm2zwBnZbt9VKUdb99kbRciM2Sxp43LEhZ7sNWLA71X",
  "key3": "4ewKfkye43RuZ9U2g4NWUeoSkvRbp8yDXnXkUaAkfnRjN7429yXngYzzb6BNMkqFFcXR6cd1AP6oSEsj3y7Ft1rB",
  "key4": "45SLHE7TaweH1sVDBsykH13NDPRDs7z26WN2KoGpfLnKELsv34N4xxS99mTnDnq9ZsUDvJ2CkC9G3XrAqDFEHdxE",
  "key5": "5o5jipA3UqenvR4M3nqVfYEuE6iK1BGMJaZqMMsrkKecJN9kh2n88wFLQ7niLsUB6xMCG8MrWAezNZa2bwutvtYW",
  "key6": "5CPyPjGVw5GD8fzuTDd5MQdpmhC1cwg9de2vM6WB8Ui9pjPukoqusx4MU3dcK6Bx26tJEnztj9r4Be8tP4cwKduc",
  "key7": "3aWd8eNUKdMWJt8MfeqonaKQfvrgY14SgioC1oTwoagGFncYK5k7JnFRmP9psLiHcRgDVGdUfpRG8iC7ScYLySjL",
  "key8": "3DryMvrmk41C5n7XSi9da1q6oJm6pYYdF79UtdGvU38xHxkTmsnSxjU1tYrDVkZrDEBvheyHchqWnL29Z236D6ZU",
  "key9": "5mbs8hCHK3bN9BBN7kd64agwC3iocmfp7pRRaNA9pagap5CBCdYdcSk9kePNgm9ZbnTFsJg9ybAcAXe2cSVDfQTA",
  "key10": "66UTL3oGzG8fhpo4LATP7VQgtWY96WZtYPNmcN8yZtJhdmniVPceRR3rzmmecWpNVL6xnsJdeHGppy1dHjLdRcNE",
  "key11": "3NkaLgi2bAABuX5f4Q2h5XwWvZvsjEJ2eJf5oUqsnj1avV7gQA4kGvP9fcEXc8wezV1VqpGccgaKsyQVJqpqzNok",
  "key12": "5imLuJWa9Bhbn1c8Jemun9oUE2zP8aVdMgDUm6MdxNhqZVzwa6NJiUpqpXBuRPLehTyqtY5JX4zwwpyTVYCadqbK",
  "key13": "3dqmdoZRWJPcHr1rtuyYt3ii7zju4Jo3859kmmfX4VcBjP6pqFJrBDecdqaQDyMMo4XtLCNqN9nDQ42J2piiSBxk",
  "key14": "3U96AFyBBUjabNTaU6yJEge4cHxQ37Gtnn96h4fcfocptZoUjjjjojDdayo8zEja2bFNQmBnosGzEXJycjPLCyFk",
  "key15": "5zatG3wwCLCZrz2Cqvq3emkcqmkat3an5TQQFSeHenF29VhaNh2E9yyiSTRGP7b1QP4ECwWYJLmjAeVLg5uGgSRq",
  "key16": "3pu5qeom31BUCWCsKxdxNTLLqBF4NPf61FuyzF9sGPEnWcnT6g5Qsc5xvsUSpPKZQSmXYuafyqWNpSHiNx8hdKts",
  "key17": "3FxBMJWjmLhQwwsWEZAAG2XNKmREtfS9qm9oJkNzcj7DV3BXW3UiFm2THWccwPeVK1LUwS59h7stxHGz6tCjcyyG",
  "key18": "pA9cJfRD1buLoE5jwerkE9mMfeDWCSVWgmzxFgCcfqRE986w2ag9yjGAeG1495RoaLEqy8gk5XTuWS2xECWw5c8",
  "key19": "24c96tMVnb4TeZsVJuSXxrhKXpB8n4f1QQ3V3wtdkCXraUxCJBBtFuKH5xteJssjaixsaEmTddSttWo9Ru8detap",
  "key20": "5ZNsrS5vYySuCNmz1qEKscujy5foCbtsygeV7H2J4HVtbSgbaDaMqi7Rr9YbJJkBBaNzCVCvhspmU3N3Xw6J34W",
  "key21": "2bgMrEwCkZnmW88fYLbqHXXX7jQduKbmrBf8QXNAHHwUEUNhXDCg552Hs6txhYzfpkdn6pr679jtzcjytARHCWQ7",
  "key22": "5FgeDJka8HLm4BTW9xEEzRgUWYF2JnwoSofufbJXae1g8WCJDAKRwvxzN7nhRVo9iDPEaWruYP2Hm1UZxhnbcimo",
  "key23": "2b3Jh1iXwRRdWeHUf4Vn28ChJYXsoP15R7bf2KzXaXyLexdZLPd7ZtzhXfSZtNTfyoonxNFaHhtni2GMmmhuR6p8",
  "key24": "5tb9528h2JncGHD2xneavnESnfEzC7sN2x34PqP9FFntAP1e2E5DEezTzwPoCJWiqfnoWAWSZaNym1r74KGSthx6",
  "key25": "3NyyuK6P37NEuhM324BHuEnKqXjBhvxYtUAhT5RxUMrZDnWZeWhBLRkzJgCi5N3iSUGaZTXJrtg7rCpscUktm92X",
  "key26": "D1aA2ENjE6DjWEGrVHtgJVwxX7x76RoKsVH98KchRGet4pFE3vksw4CFYb1dRQqBeLr8ZrCALMSL7nf9zhCSfBq",
  "key27": "2bM6Ne19LBQtWMQJCPhaHgzSmTeRVffgzk5yoj69pPXodQGVJKUKh2DczG5P1VuMeqMcKPV7V7S5k93gM83gvafV",
  "key28": "hF1rCKSEkU6AQzfdpebWy2fCetwtjBqqeNUZvCFN5vEULjfA2PCbFpv3B4rwt92No7Hxq5GPZayNxwnyrCmonWE",
  "key29": "3kMNrpoiZNuJCjLQthK6C785GyGDgBB99arNwFTnKgYVKjppxkjEMBozPehBayw52JHD7R7ieEqQkXFcS9nAw7qX",
  "key30": "3PtQFJa9VBNZzxyhTuvAECx1xppKQDF2DFCwUzL7Jhqve4jRRz62xkLwq6EiDHaPvrmBV4zq3KZHsXawkEhBWAa8",
  "key31": "4UZCHBaaPCuK8aVLHYCBA9TZeJK1DUS2GTznChujzgvkD1dJBUGdgLq5tkuGcUR6wc2dBWGn6ha4KpEAaVMfLgpu",
  "key32": "QB9h47Nk6FE4FnKrZedtZS7Aiek3p6FHkKa2iF9uA2BFef8Hc4Tze7KcjpnAbjt6DGVNHxBxcckeroRDkz5VAu1",
  "key33": "4caLENVU7rQJ4H61BqKBV1pV5j2xvWoVDo7qHC2aZZ4coLteD2Go2jj1eRY87ebdtnT6LUMj5KHLtLpWwZFYENxE",
  "key34": "4aUc1eyGn77X1pXYECmS8Cd5kTaikR5FDCmhY5VTmgbWXXhkUE3BtNYSe2xQKg2RwFEtTGVpLTpsq4mL8gEgqYS3",
  "key35": "4R7fXM1oSzkD5hPPV8mqBAam3qki7jvXXbJJKZgbKNWWXrQvMRNajjSv2K3fSLQMfFxjPg1HvXE2iYEd6BsZw5Zj",
  "key36": "2moFvKcXnS4UA68DTmTuh2ZFGv9X97inaXJbytJwZs3Zdux43sFX8ZE6Dej4vhSWzdRLKcKDnwgD3QGU72xRR6ga",
  "key37": "26jHNCvTWjozWE2JRFHgRrGfU7Fy95t9ufE7Axa57wKof5HnSHdKZX6r1q4WorKGRshvGcAQ4AxsEDLvhEmef1V9",
  "key38": "5rQDT82g71enHiJtxJhTxpVnY52ydLcHxEA2oZ8pdKf9pz2guxmusNfqoscQtnf1y55BFaP6xpg753mAXjfGp4Tt",
  "key39": "5bZS1bZqfRJ2YsoFNMV3eaJZjRMQr3RchMCY3Qeqt1ZdQJ3utArKNckfNc2JfGuM63UvKBAsTdZipnGd4ZbsEeGv",
  "key40": "4Hsefht2aTZ6eCBoshyMZ4CjQjG9fhrzE3wP2ERuLg4EtZqz9947mUSPkN4sqUgTwx2vveWGPhy37xtLhomPnyjD",
  "key41": "4pzDcEL7k2baWYSy9UhjcM9pjsBRKwLmmf7TSkB5AuFFmVX2VKFv9tvrTABQ3yqxwzeJ8dZJLHmKirj2QeSeXN9u",
  "key42": "2AxogcKzz2mdECdTiq9xQ26MLJrFkveXBvQvQZvnuqMMzwXo3yNP7AnpaK1qUPR4qVyR7KxPKXz7PhYYarWJwZH4",
  "key43": "XBCJLSrQhMnfo8DztsXLKo9S4t8pPfuGjEFFMQz779fdE5AnW64RG64icnQSyULqtJChhy9tLsAqj49hChsGQya",
  "key44": "4VCq25TK6vv9mwpdReuK4doKh9eCkmPzvLJt6yhihX7eceuSMYUtxsYCcV3VNyG8J2xWsTUQr47rvYPZhTDJmRir",
  "key45": "3AQ5QngmnCm1dkgkFTHLSUX3gb8NkCyumEyven3txCf1GxYh6KTqY5SDsWhFsFQ9yKrSjZsH21zhWbA3K1EGZoUD"
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
