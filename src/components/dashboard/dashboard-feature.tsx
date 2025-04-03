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
    "2XEXBwXdP8yUVqDpm7j62omFduwwmDxz9nVTmGUayMBh4hRzh1kymhEmsakAG5CDQ6w1d4cxgiMQZcvzsLhzKAQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YAtLcbmxLd4GJ5H2LmzEL1Bm6n7C46yCP1G6ARrGnRFrDXktrLf838mssisJ5TWvVjeiqTJqpYVYUFRMswZ7E84",
  "key1": "3znYn2SVd3hVuQcfJqBJZ4UpsN6izhqKb2uQKaTATGmHpkEr5agW14kLu7Y3ReqHBKv3yysB2N3rejLYTVXRxagE",
  "key2": "2J9hZzdunnLMqYYej95ShifhJJY6s6fPn2rMgFSCJRHRWsvZVeMarsh7dWA8zBBgzWoxmwNyvEjPM6envkmFhgoi",
  "key3": "4uhnTWAFLNAMXtfyv88hUiAwf3cyeLLw5MTivVQxKrBPw5imBbBcjkbTHuPkyYxvgNkR2UCFqXNNFpFZ4VcrMXnD",
  "key4": "4AkRUpaS7pxzv6ZhjxVcdKLBYSZthSfuGCdNdwmoqk64iaSRyrnvhyUpY3k1DUHnZWwk1cohJHQh1MjPNMFGg7Jp",
  "key5": "3uswwiCV4GE88EssNLMAcUwWgiiZEC4WwxCA8GDxGywnpgC6RH5xdTRfAjPV3Zrf69G7u1NQx88b91hPRAAwaFRC",
  "key6": "pSK9sMjsc8D3Z7UB5fWhBhL5679tdBbDNQ5pRc8mcQUQWJKi7YhqGyAn2zYWQsU653n7cEMS7D53hZbo5jZigte",
  "key7": "4CgJnNZL8ecdeTsVnQ3cFm97ZDbCrUx8YpBtGR2Eq494eqAaTNDrcv9LjfFhTxSmJTYduecJJdgAym8FKsrkoupV",
  "key8": "QVVnb2xT1vEtha68TF18Y4EaCJLqPJBuVcsmHViT6fgAzNV9uKeEA8WZWQFdVCVZjsoeoVdq3r5mwf1P4CGnj8q",
  "key9": "4go46teCHksE8k9HpA7wgb5CZixYhw5cujtapa52XVZ17sTHZg1yRR83nqx8zKZA4RFNrhj4DuqXs1bMoqhxKhsK",
  "key10": "5NdAWPUzKEHj3s3jngs2GBK3r7rHm8FPXsBcvmCZaA87tfqgRWBT7WweUxEESj7SSQZw2BxfCMVtrGqxhd7oXs7D",
  "key11": "Jw3nvkPrReH7wNoXDGK6r1BvG7KYBVXf1ieA1YG8ErwMb3nULXMMhRGzmnhxmzDHd33ySMEZzv5r1hSraTB73Lu",
  "key12": "5suWpLKtqFBZAanPm6fXK3sTXjDk3XSkNAB6xZ4R8HWwbP2TQMsH2W6TPGCHZ9RAgxPg6uiqiEbXSgKbtDa6NtXm",
  "key13": "3f1KuXLpswjdHQ5aYmzyWewSjcXxjvA85tyuvxJHgvu4ij8yHX4ygqCLSAi2nQ5xG4kpgmUSFSrfLGKcDLCqaWa6",
  "key14": "45387Lf8BB5SNNrQJ7AakVskcJz3n1o5evFuQa9mQrFmonTJhSUtc4LUN1kZPBJLhitLMFf1hudi1NHujkct8ECk",
  "key15": "TgWvgZMLs1sUyUiTAHbrUraA1deBycNMYoidi4ht8RKqpXPLBrn8qH4ZUnAGRE83zCUy4tB9yEBYsxv7UMyEjTe",
  "key16": "2DSwhxtnQrx8WVqP5soNGfmubX63ovepue95h5yyj9gd5JFrnSvcnk3ZSytm4FQVCjpDqQvRy1if6T1zBC3ByPnd",
  "key17": "5mUAdwbM5sFJ9J1j6oCMaCnuxUkgk3gVLoe4Xmm1tGgKmh5BkivVeQxhujTQAZAPGHjYTaC51rspURwsuh5Rd7Bm",
  "key18": "39aowdsEmuhgr1TY1GKgiLZUYe2GzzvYT77Mi8admS9BPc2FD3qNQb4X3rejuabp65qRXJYCpc8yVthagC6YhrhQ",
  "key19": "3ch6C2F6u5y3jVSiU9UiagQQBApNzacw1zfbvnSxqU1tpkFH3k4AA62RGQ8nqbwHKRpKFco7QSHX5dFmcSGcexHV",
  "key20": "4FCERyTZaW3Fau2U485XBJPMYE6eWh3Ps8nrxaykJFAzQc5pxd7bDr6J6Ak2Qu2NMUjMohGYUCoHxQsT4CwDc9Cv",
  "key21": "3GXJWHAFsR1q67p8DU52YyXRbswwt8VkvigpYhrsftLq5kvZnA8bMwNpmrb5qeL2WqYvbyqmBd8fAvbidQwN4v8t",
  "key22": "4YgBR3m8R2dYUPpNPiRw5YQGNLChyhqRhVtpRrdizPW4oBxTDG9693KifnrBwAWpyYpzTZLDPzwmnJayaMq8tX5B",
  "key23": "3gmcL7k2qxrqjcU29vCBDMZJhudMLxCgWuHERjs9EJBjuPkjjUaMHx67VWecATb9ioeQts6a2WrncYfmbaVv1MFd",
  "key24": "BwLn2t7oMMWWm15W5En7SkS7xo9bJc795w3gWW9W7SRC4sW35p9fE1T727cD3qJrCyprPdJRJXoJaqKsds7vJKN",
  "key25": "4yxxAy1YwrzM21CWHZvce8ABW3DEUbPPw7nQp8yNrz2vKE1xN1fHBHH4vuSDWS3q3CxZwKw8dtwqzwAxk54HWrf7",
  "key26": "2Aq4A26PQ91NdntCwJW577a6qX4Fn9iuk23DfCjUaweg1dE2Rz2xu3eyAZwV2FvXBqrYZaZJ5amRYxZjRPMiHUXu",
  "key27": "46HJHytCawJkZXW5KSK1gnksDwmkc61jNmX3Z9A1bnxke1jqAPM39QzMbCbriGiYKkNG7Y1CDtc2E8vYjGrbc1Ed",
  "key28": "67nZEQHGBVBLs8NtpuLQxFiPKB3VUUiEgMKjFth1bXV5Z3s8e8CZRm1uxfdf46yRppekinmXJqabEZqSwgNDzqM8",
  "key29": "5T7ZDPC3xjEVbPjnuxrwFQZ28x7FoVTP3CTqUHyfwuCryUdFhwt89tv2mQ4tvLHuVb7Susps8N5Wweyco7kAxyYs",
  "key30": "BKDN3stpw1cHu6SkyFBLJXf55F1MowUJAT3ixwYd2Z6MBuuamJQY7pER725Ytjhc1H3ymq4xvZZaFE1cSbC5724",
  "key31": "4bZGbMVbUFdYKkGjynbYxo8tPYXN4PPepBfpubLQJA7oWXEMBAujR17fZ8wxraosaQamibEWtY9RY8ecYzaJ6tcn",
  "key32": "3uqpFyFU4T7EHd2Zn7hAfuseAwZDkvMY6BZ5zgGu6hMuN3Mksqk8T12SxebJKkM49h1yr2aWK5jUp3pomnm4vNsT",
  "key33": "2vjXrib3nXvA2MeoXmRasMqgFtGFq6VweRgy677cn7Bc4PNXe9NJ77eTzLFsJNqBHeacENeLryXfgXWz8Fu8Si8X",
  "key34": "bSyEMXySzqWJyrKi84UZNPHZXpEDJVwYqfdGahrzCaXM8SnKMRsrbjoWeM7SP5YArC9RE2FE148vZPwxhoMrYi7",
  "key35": "4DL394noEdHvpJDshopKvojqf7d98rmUPeUdLsgvY67BsqfXfMzvDrAiVEvUavhpDjB3A3DTrQ8HmRDm2rRt4suP",
  "key36": "2ajbxxsSZSX5NaZThdqmjQpXDub2p6fjxi7P6ZoXqXVqjcDXkZxcmcvw3umcVZMarcgwkp4FB3RYLX7zEscuXuda",
  "key37": "2ZfjHH3YYzrsutgnDniDSVFGZKh6wG6hGHdyHNPGojyS89x4GYPfFvDEsGLYX5tJmKjwcqRkppgEuGi1MNbKyjkW",
  "key38": "4kcnX7GfQTP2ewtjnHEq5bS8KBiWUe1Di6DT3rDAPFEWJixFhJpT4pAzwdLfR34tHUBho7FegLzGoaddYCRUzgeZ",
  "key39": "5kiNnn7pFnTgkCi3CaF9q3zGiSTahYRYcU3naNvGgnjWUoAU6ZkbYA8zBgjzmScmU6ZGxKv9RE1d2djsCtCPv7gT",
  "key40": "4ZQvT8QSUoAi8eTa6voHCLNVy7gq7G1oGKKLLEYHGh9T8HF5zDwdcgUGFpujLEjptFbFjEiUJ7ebsXGEeTDWrURi",
  "key41": "9GbsE9jFoH1Qavd522CK7QLMGNsLSnyKP53MCRHAfeRVNmvyhQesdqr7tJUPjCfFnTzhryrRmjNnjTpdXdBQKoY",
  "key42": "BJyNQp5VjK1yLsBkVJWDBy4svjqkFoLrQpJCQ93heFTKZ4NEmEF7GNSiTGncmzXhuHAsBTbEc61rgx7FryVaURZ",
  "key43": "5ebyKdJbeqNeKU78Psxn7zKUoV6phNrSvczQo1K4poAsmuckSz7hExPAe7uZGNfXFS3wT9bNdxRdtCo3MUbf3vyd",
  "key44": "5K4X8aFys3oH3EgYqmAUEDfU1mTe8UqTjNHB8SW3KamBYmdZNAd76eHY1nzypx47N9LfGdGgwchbRS5MSA2Q4Pz9",
  "key45": "3WDQBm7tkK9339ugYLJ5s2cegSV7YyGvsXNxUk1CHZJFbepjMAUTQxgicNCYiraPB9FZPofLMvydmKXzEzTWRi7E",
  "key46": "2K3igqzPMYJWj1xyuhH1bLUsLXc8RPNxEVbzLtmSaLLyTjW26FcHCS2MHEaFKea2SHMw53YTaDCjkShpH2PfxQxC",
  "key47": "53mxyzJgadSSVYfFUdyXKevA3rgTPZbb8RbBHbiznbvkK4VMYiGa1n3iH16yk9ug6zQa6qghmmn2RL3rJdqBM1Y2",
  "key48": "gwxCp7pcXSpocJaBMN4wQ2kXVWGRimCtJJdNJ7g5E2UQCSPG4JAzzBcLDLLfpWF62zZeyuCYSFXy8eVvxFX4uw5"
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
