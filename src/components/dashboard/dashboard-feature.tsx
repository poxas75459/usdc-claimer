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
    "nDRa2sCwbCGxLcrZnhtHj8r4tzzu1ywSDQJ67N6W5biKsPgHNwLobvS6eSBqve6uebBcqS9BidizjV19dPQydLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t2LQCk2s3GJUy5EmoLcot6TSTbMAztredFLw5mvmSmHim5ABk2SBJftDcJy2uWkBMBUSkyRrno8bmR8ztKfsSrW",
  "key1": "59picNh3BzRPaxM3NUS8wz3otPvmSSGKjK4jTK1qLCuX4MGmu5zyS6nMVBYfYbA8sQU3oR8ZerTFw4Y5QkUy2sJS",
  "key2": "2V5ZJBRCAUFxtHNRnS3cWKnPAb6uqMNxmk9xkwwvQ9mS7wJg1Qktd84nCc1gnyHnZriNgfukdFv771fywD4iJe8Z",
  "key3": "3b6vkEmQMH5463n6PuSwCgcxJSRRf6Qyu1Hey451KBoXZdgjoD8JzT6DhB6aaVpnTQoxW5m4ZLhjWwQcsajzLfwt",
  "key4": "4YW3qZHCeVyKwXgMSMM1HgdNfeFXAgN5PR1qeHxZAgdFQNcXRa9Z4uezMEoSjjiKCmj1mDVH8w2kua2GhfMoTNgs",
  "key5": "3iUJL2X5mVVzJQdogZsDcAx8JFHbqPvkXoiSXpCQSd42Usnpa5ohnES7baUnNdmuLDowz6qpTCcmiNLAUAWipLaZ",
  "key6": "2VdcZTEkJzC54vNZjsyHjs7Vn5YnQ8t2ZKUuaT3rZ3oZZUqJ2wdZAJSrXuUAEzTuJkBNtvSwcy8iwUNn3CpKGox7",
  "key7": "3ohzvmKEpqLqbcRMCmnQRX8TwK7Hg8SPPreRm4QvR5jcXij7HCQ6HeQWNYuAzNQYZYG66gwJwAqMLCsYoUQvnNg2",
  "key8": "4JiGd9HT7Z8FjN7y8Dn76GzYmty6jUraUstAUgdHdZon6PSQHPe5npYTZMfNiNjMCSVMDG9KjHLaswVgxf8LKauz",
  "key9": "9VTSkSBQVXeaqH394WTc5nffZhV3c47JKG6ggu4hQESe38LYHah97mb8pZBwqZPP5tSq48etP7YuNWNZJUgBmBP",
  "key10": "672fn6BKh72oMrJSp1rf7o8WcwZ8hshA1a5AqWCoKJmXVxFK4KWBv9yJiF3DkutcXv6pAgHkB9FRc5oScoJGPuQY",
  "key11": "45XTb53Wc8GRw7ttgou49KSWU13AusvHujHNUXYDNRUNmaduRaLQGTmhBTMbb8a1E34mt5avdgwNZP2MHtjNdbBb",
  "key12": "eJxEZhNX6FQyV2kPVVFP1mz1GWdbmGrfvmR8QiHdsmV8aE2LSsXysCbmXUZVMhE4sGJyCLhVRmc91jRrPA9AYWT",
  "key13": "3WFnhy2Fh9k39VR3Wr521FcK2roKtpntm1TexMS57qFeiSn4Wu1umabWs7581bJvJYkWz66Sy6KpqntdiWgZZeSM",
  "key14": "3MkRcVC6ejCuBoSRDNPNGRfdHUB8ZqRjcKpsGHUPHk2MTnrqNfPZ6MdcvP6DektxE6XLGvbbEZeiuShQuZi4u64t",
  "key15": "4zkW2MEa9Z55LrCWGs5beJomCwuHaM8KFZGdpmv15d3pZM8CbmtdHZdCj4hkSVdTCAXnwq7HS6nZJbywnNDiaWgK",
  "key16": "ddGAtydD81GAXwCZfsTjBoJ7NFcJMPpAnNozaYwNUEprUV9FHVSEg1jk8VWHF4oYNomj3JYgFucX6Vrzv9FSpCm",
  "key17": "3YGtptvNnWy381gdLcJAsHSsMv2aR1AjcwiLZmhtMuwrUbnpxQKtfQUh7xVWEszzfscWjeosiLEZAsrjZMatGXXS",
  "key18": "5XNkZt7uHiBN1YpNmFna7xQ3DEW4N9FZJGBFGDwAn1Zeb6XvaY9sTKphVkkVpTnhWGhXnzgj2A3kAAW9q9xjr8T8",
  "key19": "2PBqw4oa4TxFssq5wByE4LdFtDJAusxRvkS98MscM1CqfJ6f1J89Unojs7GbUuuPdyuZ93FjPrGV73Yaa212zD2F",
  "key20": "2AiP55Up53zbMi8sMC6WqH6XTAMYqgLp4qFfSyVwmwa8GDprHHSkjFyttBhQM83UDWnTHjuH24u4KPY5qXpQ9MF2",
  "key21": "uo1HSKKJjLvfNrxZdjjp6qGMQTsDi4U3gJcVNQimdmXNXpdhbgN9wmZMAxQmK78HsKiR6e23QpyMLZQWjm4UjTs",
  "key22": "2u2f7AaDjC17v8GFm3aHXCia2nH4ZMMVvtgD6jJPAnwrWXM9me1H52pkT5SV2UymB87TLwPBNkqgHzM7hrHRiN3y",
  "key23": "GSnDkKiHdSBvtcKxMu4nYjr9wSYQhEkZRM8qtAJBMYWnZaqo5BSj6C4NbWvG7ygBC2sqthrZLSME528RyzBZw16",
  "key24": "2fvCzjXFRJyTxuvQuBieXaJ9qSiFj1MWNeVisKctVE7nQzePtrxXzCDt1rJbKi9tPDC5xfMFnhPBFQPziLoZFV6b",
  "key25": "462L6ijKMzS7x8JTmfVm7rP9s2uZhHKidJVBxgbsfEkbvke37Jgt7mautoWtXQJxyLUMHP1FHi4fDrL1HfYLoF4h",
  "key26": "s8T4kNQpRzCvSeF31KiRjh2mEYxmYy4Z26WYjvVk8Wj6ikhhDxDtFn55fRSxnLFGTrPteyyiB5yHSHysFF6xmKs",
  "key27": "4XbyAdQ4NjkQvwV57TRgaDKu2SmwYcmc3My1CFpXy18hfWQhXYKQ5LCr6q5Crfv6zxB7nUJvxCGX7Z3MN3rBYGMM",
  "key28": "2S3vJEQfE8XBH1SoUAWnageidjq77ugZ5q5Ur7nfNTZKrxaF5YxRh8LhytmsBDCgtmcHRgbwVJZgm8GznxMyZxLG",
  "key29": "TkVpWhqSRjmm2nZNMFb686m9g6P61aYRJWfuz2oiL2RmgRdraVBA9wkVMPMjEM7Ce8ZaFRb7abiW8V8QzSHV6yx",
  "key30": "HgDrNVRCJJUMJGcvbSzdjDqF87CecsNGgNodj7Y8WrrJWTBjrJZQACtyNvo16Pp5xAjEC8VxrTGsat3qkND9bTR",
  "key31": "4xtAMGkUdapR7TYfzPMYRNDAyvCt1VFsS5r3atFzDyw1oiuWqyjeC2FGpGttxEohFjoBb8hbNAN2uMzqe6XekTs9",
  "key32": "3DyCF62sSDioTHS2zw2jCAbA2dHKPzknBYj7fL2iJFVib6Q8GYJg4ZbyWScMWRLqis7SWgjQAJri5iEmae1gsLU8",
  "key33": "4kXv1sSwKZ9L3sRqEaHg33dbtQVfwZq9R2tnHaEmDbUwsjCQYLrjmanHZGGXcjfSdfATTGfUQt9qot8uzeYKkDDK",
  "key34": "4iCBJqssY79GGe7kEzj5Eddmz6LfVcgzLBd5JrAZfUcTHSSGfy78oRNKH3bW9hYLWrWKjj3dfqrsGXBz1dngjhYN",
  "key35": "4joxxESDpEi7rDzHcAff3aUgCQo2nHKt956ShpoNzjcRJ8mhZAHrep55UtBvqy2eubx8csHi63wL2uvunx3BoDdK",
  "key36": "mReUT8uVrG3KrmfH18bHx1i61PGriUov8utyQSELFkg4Hxc1EwPVojeHVWCUPn8reLReqxpGUAZECKGkMpBg8pJ",
  "key37": "3Gm9RgmtLhPLnrKEEjiWS3TB6mTDS9ncfRMZz8BhSUM65VYxvSja8i7LvH45ERprYMn1GrPt2iTN3qkF3QWpJLkR",
  "key38": "2A4HhKCgCLJC2Z8eLEtwXVPoyWGcVpEYaZtCmSG4J5sX1BNDvKfWcrRhEzuyDLwj8PPg7qryokSibcdPRWMbQkTJ",
  "key39": "4m79bR7mRJzzhh8e4cGq3NFF4EMVV9B6BrZifG6YBTDqopY73pxPNWDQ81bHXhzk4EwbiVsDmQBwgS6ZTvhr2h1q",
  "key40": "4FDEZCE8VM55BzifAqLUJemxqBA2uVGVg7K6R6482acVwJiRnaR5xRCZQnajqatn5d2yTGMCrRMGDZgzKMzytPA4",
  "key41": "5RzVyVnZrTWRRXBk4DKNbuEBACHSnm9a7UuKNeJS54oa3Z4TJ441WoM3xXk8Mu3cjd7bPawkbcByB4g448quvESi",
  "key42": "drAGW3jQDSFgvjue2BGowxWfr2yY5n52rYMVAM7j2EVRzk4W9MfKzr2bFAkfgtx6KpxSz7MpzmGjniU4sjzuEkQ",
  "key43": "3ZAnnCUmdZiJasB1fXSAheTPwgJt5b3oBYVwHZTFGNrGataMJxiiuMAKXSgESYdXNnPWSjXLhqLpyBGyzfquLGFh",
  "key44": "3t5fDjFMUCGhY2x6KioHfLGGgUYKfuVDYS7pQQtZUYkxJ4VgtKiUKBsMKrprn5ZPYYqkaJGnoAK5TXaUMirgWcP2",
  "key45": "5xrpJpggkFWpbEVBYzsa6RWnU8b9b3uzviBWMdWWoQYZiVPVZroksdoQtHqQ2SsDuVPTN2FN3EeAJoU9uejEcJaR"
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
