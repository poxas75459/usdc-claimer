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
    "5bW5Li9X2fW6ViojW3fV1tmhtsxPKH4KhX95KxtwZ4YT4kvgTZcy78xKRRuFjVKeuSgvQjMwmg4L8qnYgKfHYhJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UmsmY9cmWjDbtT1rYo2NcDbtqSTuhDJuudQPRv7yB7EAbo5pYN2SuW48TnFbX81f18QHi928Za4HogUJoHfsmR3",
  "key1": "5ZT7iibLGGwCD65kRhzSeY4RQEe78jbiYTqqFZzXtfwzKKB6emcRJD2sxhRCFtzVTzBHBG3oYJ8qsREavVrN6W4g",
  "key2": "VWz1ooHupFutPh8561hyECAFWpUSubyYWY65HQFxUhY9tHxS6dsuy2h7Bcc8w3vXqKgDiRpxpm3fqGRrn3vfDaz",
  "key3": "4fDPUUC9ionHHEVatAdgwvmYowoKVr2SCwxAMmXUN99mjCfJe7R4q8hBXRJHLyJzqSr3f7v2zBFLLugKRqmtiUJv",
  "key4": "2A9Ksrq8anuCQh2DB8S9hYnm3XY2fjCHjfX4CausqWZydT1AWexgySkXaVoH7FjJDdHyDWauz5HYfeS68LwrFn5F",
  "key5": "5A9DRDp1Wct6YvgCex2YHzshZ1XuYUUZFREPTHkKuzqxRohDLz7USDMTGNq3GpqHeWsDxFaXrp3Mg5BMLyT3cgjw",
  "key6": "21uoUSudAvxnkyyYze2c88B2qonknfhw7ehPi5c8Du6YVQYHyCqmuo7Whstimd671b68F12DU5nDgiKBhBzrwKL4",
  "key7": "cenzZ13CxmS9hVgEgYP94kx2aJhdxYE7jbiMYtSHQWzgbWaUjdPMMU1xWVnykjNUtYJEFsaJkhCCDTJYcE3zJiZ",
  "key8": "2XEVU1FNuF8dTNNdRneykHRKbUBEy11SLw4hJPGBiVjfinpYmjRqDyzGrETfc2E1TT8x7rvgdRihh4uSFtLjYK3g",
  "key9": "2XBbaX6gV9pPRXWA7EJMuzqU8wdsPbiCMcUuHr4ydkxub7JC4sDtsE8GDk7SWFMDTgoMPNBHy3nByQkK74GYpTwL",
  "key10": "2oA47iBXq6kpjq9G2catmyJXfA1xY8kdsjSVxrDEQH6s3rqf4TQ6FUP83PcukRMXV6w8FuoGx4owhebFVymfEFp4",
  "key11": "3hhXRU7FMBy27idmq9ZZ2Wr3DUP6yBSKJXaUdsXUuLxCiXyrQPCVe8ioEhkGYcef5VbQNMs7CJs3d2Lw4iWAtGdA",
  "key12": "3bVLnp5jrpt8W2AF8FdoqJ5aNkKR72VnecUNm1pbVYL6Hq5LmuHz5Dska5jYrnSAm8erA8vMYYLkcnCY5oyFYkJu",
  "key13": "4FZiQkwZ9Rd1qda2xKuMcU5gcaahRafDr9MWLym13iZbp4HKUPTCv2CCduPTcW78dvtyLWRirQKh5St3MQcwtsKQ",
  "key14": "2wa7mts66yNhyDRxEehxN5P6z6KFTpxztdCqKxx5fGRKsccuC6yVeosTfXBkfSymmyDYuuGWKGKfd8pHnDHxBzgv",
  "key15": "5k5cdx7y6FkW2MKpfPGdqmEBpnqf3A4coJxFPJETpEpFsW2sgqv5KTQ8XqKXwLhNbtKVCJih6rKCkjxvp5cwToTk",
  "key16": "4ZN2iEYk8bpytwiLYjqyQUB6SWbYivRo43oBZwqkBTyQSedncumDAmAffp25GWJdGNUdTYFLVrSgzhRsrSkAqRrV",
  "key17": "5GdW8XnBJHc9bhDH38PzYfZ43HJdRxr3Jkx5FA9uQzbQZtTQnpuGhZfoahYTY9nCPqdfKNDiqRdjgVVkoSYmNUZc",
  "key18": "4A4HEDt8R2qfRGpuThxhz6C6JYN8oQkvsNv1kjEqzMo663GmwZcSNMXiFEBrJP8FDTLzgjCX7vsFUTvU29aEZxPe",
  "key19": "BYPfmN4mwQgy4qcvu2CahoVWwpceSfPYYL7ozhGr6KYQrgbxUfvkBTYSouMYHadC4x8RNGNpo7s6rYQsKfrd3sR",
  "key20": "25qoi77g8kZ4F1G9jXqEB9hs9HG6jPia3U2sMi52RMeXBPqPDuQWaztNaimV8f8XCU2UoZWhnGm9vyu5EqrCJtYR",
  "key21": "2pgXii6U3d7FJV8TdNZDu1Ke58XMnhSX5AV2bF62ckQ8r8TDv7zAJkvYm36w6NFydv6nFk3i6GdY7UdnYiqBRny2",
  "key22": "3HKwU6HtfzW39LjLiapLxUQ5woy4j1KPJ4zFG6Cudn4FCoCnAt7YkpZrsHnSrWEThnGJGfRqFxi3ztNKMTCMnCTZ",
  "key23": "7PdVoYep1JrETdMfZoM1GKZhK9FcqLz5GJh3LxbnbL8R9RhYNEdZtdL4MRyg9qnQRuDGdBnWy2fAy7jbvkAYENd",
  "key24": "4UiNXhfw1Wcny7VqXGFqJQfZLmSY7rLtAMbcTJUqZaekfYobPYx3bhZfnBf32JDeiDL68wTsNGnzE4w5npESiuZJ",
  "key25": "5MerBhZqqcVMM5qtWfjk6G7D2MhS1as2PNxUshSigpEW6QQ3SaFoLmzbKy2SJeZPk5MNUhoieqEP9yCYo915NxXx",
  "key26": "2kNhpYs9eoiM5ytJUyQw7Mxi3U34eWWeFmCeGYzHetsD6V7Chg4nqwqLWvph9H3vnzCPVyRFZ95hHmDVBo5fmXJw",
  "key27": "46uFNy8p3gLRm2SqGLVNif5nySiGkpEMk4zxxVAyC96JKBDXYCvrKzc2icuzNU5phCTP14Y1CKiZTtmHeWB4uNNq",
  "key28": "48WwTLR1irDJ1H9VhzwYkT56imkrn4jJPPDRGnPoDUqjM4deHqjtfkbPcdNEF2QgkT4MDAdoMohGX3zHSDWDThCt",
  "key29": "5y4Z2LbEBWDn4veKHGrYh1kvZHnkXBok9Mvqtf9rgjWSRsyTCXK7qG1TzsdDc5Tw3e68uqcFsZd7MTLX9sL6FVo7",
  "key30": "2W3xyUcB2NLfjDP5ZgoQ3RHShezvFeGNUzw7MpCBvutMipqcyGMYFo5VsSEVX1TV26d71QvnKKpG9DwwGvxJeZuL",
  "key31": "9JWTHijGCnDSDjHxwRbT27yaWyyvLxEYwMzsZoMUi3KYAfcDFjbMG6FNARwEggcBwmnVLc4gpDzs2LUvmbcT8so",
  "key32": "kkfrNgGPgz5iqFvaQCGzwu61AepdpvaJfWFRGpGXbsRCMrrzBaEWqLBKApA8Va7Fge3PStGihCd1DdjerBBtmg1",
  "key33": "4gN8UPn3DquYxWuGsakoCC7dFziJTMMFKM9b4FFfvag26ztoAHxtCjSyrUpdw7zCanonY6LxymHoBsmXcwwSPbao",
  "key34": "2c9StWXyK2sEsSCGtPHzZo1V4yoqZavFdCeMJVEq4JYv3ct13zUrw7wrtfGqHdV6YfRSwTFXtbhpf7xRa3ifLjGU",
  "key35": "VokXNqgRxFoW1G2BXVUnC8LwEcUoCD6ZHmz3nYzMDHUn3QMD7S1jYvFYp4nfrFqnQ9Qph5foZNdRtrapUUjim4U",
  "key36": "2GU5VcmuaSG3TGnaGk2W9WeRmTsNh4a8ZELr6FuoGeYWdesnNfxTpLgNvCBkmbtRpEkZXbzPAwHEMbvakiAFGpfh",
  "key37": "4yFhJmLh8UPBcXXmi1ZMjUgLUVHy6VyqYW35vkUp6R1QvffUXgnvm36yCXswFGWrToSjupgfFSf6gvWYg9AzvnSC",
  "key38": "3isnsKy4c1GGw8EynXKPxQijCGaZS1VqrvJTbKqvvUNQPwj93wUCz7WYekbeTtiUGDRt2SpJY5iphdakKSWe8Egw",
  "key39": "2qCNjY573ARGvYtGxX2q9xT9q1CKULASMHiH58s5MQkUaMKJTCjJMcTgyJd1tgS1GVfCAWCt5us2Dts9me6jZVKb",
  "key40": "MPbmh2YrW6gfT6eH2H3pGxcGCcQug1Nk965h8T32XqwFJasiZhUFzyKJiaMTQPpkDSeHv22tzfezwnU3acGWLBv",
  "key41": "5tGURVuBh9W8YqxJNsC8jvjUkobCATMuAJEuqWRqm23BgzxuyJD11GepUDEuN7evRTeAhq7VEZhiQ9dsiTbzKCPn",
  "key42": "5hGtzfnraMYCPT9STRgLBsU2uzbUDBLUE5BjuH2m3t8z9g3GLQHzxPAfh3AoRKfhJmfQ8KPTwK8yryThT7ogDro2",
  "key43": "AxT4AVkKwffHRqYXn91iX21k5mv4uHSDkQjGZBDuXtRkT8djaJgdKqX1Vys5jNt77n75sgjAr6xjQJ4NoLAJ8bn"
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
