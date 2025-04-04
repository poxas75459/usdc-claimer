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
    "61JKWYLdPPHcE2Y5YG2hVtQ7d6LmQF4G7gKzvMWQkzYNvLhusKAWXwcAbj4gcdBHA3ZHprP5H9DV7BWbLQMRf8Rn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23dTDfkoiAewrZxzr9G3DH1ggKK5dhyywdyMBRHj6MPf4rLFspVnZ55avBNqExdH68VrA3TTyNScn8QggQPE63JG",
  "key1": "5y134MjvpKQGrdAWo5bH4GW1AFWHCHCLkrUxk1kDHqDVwWTN7i5SC2tpp7TuWC7kaSTLH3h7QcPYP4YeRV8wvsAJ",
  "key2": "2LiZTYjeEcURVnEmUr5C5EyLTTy5VYqdkC58aPNWxf3DB7GzE3pRyHzkTTvp6ZdTibqAoY2aGbLNhmCa3AgarxzH",
  "key3": "1oELBiU59Z6dF4bVfkQm2EcF6YqVqVF516E6NJ58pqBphmPxTTtA3i3bo1Nddc78s7GyHCeDNBvkE85trhcFyCt",
  "key4": "KpYPYNb8USnHRyL48PaFnPcHULVJcNxCjJEhYnFFZeS9GxpYHxGu3Hi6kyFv4JzYy1wXrDBGyZftsN9tB7LNqNh",
  "key5": "2cSrPDG6g2mDQGWV8joieCW7nUiUK8Uk8PsKSpZFU8Ct12uXFhDHQThyHsAkuFtBsLX7XBNUj3fUvg5jktp1msyD",
  "key6": "3xxJy9o5qGtyhgzF1VR5SzLT1bYyxGDJPnbXnv6Fe3Y3AQA6F6dL59ktCarnZdzwq1MtshYzgiJRvkcr3aNh2apj",
  "key7": "37wTDDziuieJ96oF8jTD2yDtfHKMCReEHxtrnJEY55H1tkinBoJgyD6v73hoZnxJ3apVMzFGL99pReZ8auDvywt7",
  "key8": "5nhheirk8Gws8jsZPB33iP5CVFBz1GNY7nuQkdSjMSVonWnGkd9bQurLrBvc7KGNrhyjaH3PkSLTJ9MHHdBJ9faG",
  "key9": "2E2R9DvvSvxEKduiyTS67uqTFUyAD5v38GZzcfu3tnvMAmeC5GAppp83PvfvFswvbrQQQyCNrzrMSsBTtdCrZQ78",
  "key10": "ztTBaQLqG8Rd28WMumKraK3sdwfBehUZqjbXx4ofq8AvfuNiprxavGJHc3uMBsKJVdKKAjXF4KV6DGTrzAapwBA",
  "key11": "3KESqq883567SPxMKEayRjTNJVxfTMiH8bkGbCHqoV6EvpC4CCZtF6NYx8BB3CCocrim6FnDL4a6wDSNACGdzNAD",
  "key12": "5ED6G4RWbxGiLyf7w26RAevZnh4Ay9GstTiivpJRnqPjSNAf8DmPKPickdHE3pXnhWPQeJh3wCv74GmgZAJJ931P",
  "key13": "4HijvdMPXD75gAfFsJo13WK4jcSYqTddinSyDSWiz65FQWqKT7T29ACyHnknUsied8GsU7bjqUbJquejCVQm5zJK",
  "key14": "4wqRFaq6krhBqWbRX61YX8Fv7iss2b6yKVS4caBzzVDcV1E2ZQGPYNRgUTBnDeF5Ui1rJiiunEEKZgLFbDD983bW",
  "key15": "2fpGQedfb3jk6wiVUA7vMao8ieGXfUnNAstRj1KtEGdiYcEKqdrX4CnAWh8KfY5zVxx3R4ttfMfCHSFCKJUvWrfC",
  "key16": "325u4gdgXPeqZssou65kcxihsmHTQPKBRUqTLkHVftPTfPQAHcrGdsmnwQS7suHzHhch7Q1Cfq9wWbMCC7YH6BRP",
  "key17": "2WXKPMs7mRE4Bf9XTrDvPnniZrgcLRPFWpJSLJSiHyZ1XuTSpo8cAN2ESi6ZNHeJPG6oedbAihXhfaaxPaNFBigt",
  "key18": "21L3dbohWhi9vDBqGSBt5dEp2xFiLwwRyPXp1tD61UdWFGuJv28qCVnRuyYWoUsy3wAJKdMp4LnqnKmmosawKBoM",
  "key19": "4w7QKkATJYEnzQK7pbNUwZYrt4Q5yZMcEx6TcDyp8yg9aMNVM1CAY5k9WA2KmimycEcvYTacrDekKaYjeNouiKQG",
  "key20": "3KgDgQyBGFbHxH6bRiW8FSrWbUp1rxpwUd5EhY3MNfzj592YGBLWxMyckA4ag1vkqguSVWW8Hdc2CnYV6KnPWjoq",
  "key21": "2ErMyjNTRkik1TqXBZEUcNTh6rBZ5rdbSXiXW5srR3rpMeBQsoWBzYzXh43RJEiA3jzQjRFsJ3dsPnX2rtpdjDn1",
  "key22": "4FPS1RgaP4aQJaTVf3tXYQStS1ZDrLWexxnkVcaTvwZ88oJ1jY37KnGc18d1qTJ7a79X3Vv9C6b68vApFstCVGsn",
  "key23": "5LXQdszvi5YyUt7PQqkNsQreYCc6iB4aEbxHPYBdtCdzj1g5jkcdW7tyY5FtGoKanDKWL864HKHFqyHbfo7NCCXX",
  "key24": "58PPevq97K7xqY7gcDfnHdt9g8A6BHAt8FjW855B6QqYqTWo2iJHKfS8ERNjACpo2urZGVtRZyFrZkamyZsr8v6N",
  "key25": "33CWd9xVycNxC24iomdBhwC9fBJCTJy5sg4ivBM5qM5YtVoVXE4AAhQXxPpzURs1xA4beQ9Tazur6UGA1Vaf369g",
  "key26": "4gyuGdN1pfxP8zsWyCDQ7dndgmwaZAKGhnHeXGkGLWHVmScDy3ihmDNCmAyyWr8ZmLRSA65GpWMcXsPsq154BbJm",
  "key27": "zGemYPWmtxWMQJDLFyoiHf9EsnpGrXhvxrJ28tGNAngSKBapEbnGHadXq4xmXK1vKKnYN7z9NzLE76mB3W7ooob",
  "key28": "2VXqpZNboQM4qGDnYcLgsGChxt36EhzM5kpJHhhEMY1Qfj482Ghxar4natdvPzYsiKbCdGHERCd66r513fd43F5h",
  "key29": "3Q4z2fK5eHzBn5YWRnYYekQ7qGvbsXnsuYz4Ks1nLQhJUwWr4Y6RAwXM71rg9BbeS2rdtfweEWKHn2KvreKBQRDX",
  "key30": "5p4sakE2e6H6oaXv7iusbs8Kvxdx1HPJ7NoFjCftm34XDp5K2duxQJZgu8SRT3aZFQsg2rouBS5VCdYzfULtBswd",
  "key31": "46WVX6ELtyEVpiPMU92g5qvya4NiLUefpabnHSXPW3HrpkKkbvg9hC6frfLN1vGWSadJ4yvJYRPGQNWJBW2gX4yn",
  "key32": "5oMdqhyFQvFyNwmFoxnjXjw215h1veHFEpC9ZQJFL8CpR8qoobfqkitcKjsHffM8ZQtm5axesRidDsQ8b2vqcnH7",
  "key33": "4BV626EqpGR9ws9mqPFfLJYzMDBFYqYigxsRwA3sZ21RB7bQKeJY4hSqNqq9wUjUN66FqoPPTYQucVU78cMVZG2P",
  "key34": "4Tz3B8hr85ELcXuTy13ZvXBsf8ZRpzwEp1FSqXWTig2hDLDQXH3LBUHeGX41viGeidc3Na1rueofojxLpQ5JRjA4",
  "key35": "2WznBNELg6dUiDFY5oQeqwPE8XnXtwMegx7wwrhJfpAgU4PQxbsZnz6wznnLJFPJ2F3DCtnJvZsve1y5WRa1km7C",
  "key36": "2HxXMk7DZ3CrCFqDpTpJLjDH4nRrainytwZ77FMb6pQJoRW8F8cLFB3w8Roid3TvFoqZydzDynkBSKksi2LY2Brj",
  "key37": "4Ksqpcek5REHqp5RtuDXR64H7iKAES9NBrtiKpccxfa59XpAHhJMmfJ2aHWJKmE1Xe9HrEzBBJSqCf3zPKhkERAy",
  "key38": "4vYuJHeMh2NpR2cRRz37Pm3vance6r9gCJ4ejoPf9ZLqi4kdL9xSNMND1gwsnYcmaimmf2yqn7xN1oGkA6V2eyfj",
  "key39": "UpaW9rFD1G3dJdoXw5gZd8Jf5zMKnmF28bK5fU4LhdjaEBX756mo9L5LWe416dspJQpHxQxuLs2xstm8wusX3k7",
  "key40": "vvNQY6UEyXpEF3VeHRLwAUfZJJJBJRF3HxigVCoXx4tSLYvewrhKNJ29LitZTYaDf7SHB2KMNLpKDtBqSMc5Ff6",
  "key41": "3m5ajEb8Q8DMwebp5xfeXFyzR4nsbyNBhgBVYD9CtUBYPpp7WhoX47vJeQa5W4weHL7V43epz3d4xTmKa6YUT12D",
  "key42": "2oSTJPozPj4s6DZS7UFKnQ8RxYkgvSAEhvrKyW6ZBx8ttvQri8aSEeSih3dDHkKg6RQjfBwxFULdbRhJiCK1cYwh",
  "key43": "2z3PSnaSbkFZ1yWi6jPRacFR2fnanPzLp9DcB1Bj4nBAhxN765Ez8GnPdp15VivXfmKiQNyjhHjyqEThS1VzZGur",
  "key44": "2yq1eu2bpPAUCU8vdLXstiKUp331fvYQos1R3uMgRcGyQwHrr8RasiJe3QKHruNk1PoyoKQpk2yiBif5nLy2Cadr"
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
