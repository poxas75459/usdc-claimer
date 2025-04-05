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
    "4tpaX58TAwBDQhejYxyQUC7dYxFuWQsPmx3RKnjAMML4UsPJ1uVys5roSy77HkNMip5ZP4dQRRH9LftjZt9CCCAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22jMJdaDCLMsPVsFDyZrYASFkXBsv787Z63VW1WdwcEarpkHgqUeKmR8pge7Q5MmoBupiRWB7CBeMPd9gTaSavPd",
  "key1": "5VKb1ZAdDCmCt9yNK5xYCcVhxPwvCGpSAzwzjTRbHhs5CNkVSYKp7YGUZsAiNnQNrAmQuKQCZd1cR2rpBUGRL6rH",
  "key2": "3rgkMyV9adNbobqUVEHXHJ5hwd8Km3ZQuc63ALJjVPTbFpg2eCxtt16U14aPMjncUeCvpH7tuaguAjURq3hRc5to",
  "key3": "BWC1LsoJUiWiZyDrk1nfo4Ync3hvJTtYSJjsGN8Sf8pceAxNSSksge8f77CLLio9C5LB4ZSWMajSwtsT4xFAz5h",
  "key4": "49FXMJvFzHnReDHGXcNTivzuGL2TXUhfoeDSspGpTs76sTF9VM3korFdyQPw7fcF6eyqwfk67uWTwET8Yks7GqVn",
  "key5": "5ChjFp3V1Bn19wuD9Hz7xihboG5jLi2SuHLGGJEvLaXTfeiGjMUHD48nVh8ve3V9dtUd4afJ9919NZ4LErfm3wCK",
  "key6": "2j7e2PUCwkZ6eKVRa4FCVj2RGiytskfsG7CrfePgj4J54Lhe7Qo4BRK2Ys2NQ8GuYYnUL7pgB7TqFGbLAPtm11s1",
  "key7": "gfGiTYKKkDhtofGVqejtCnA7vPGihG1PWx2vKkPjebvJAupF7AWG4qGqxufUdds2RCDHjCE6UCFQVQJu7D61Gf8",
  "key8": "TqeJKat3JXaaozs3cEPWaALPXc58Qozx58o1QMtGUtesamprCK6KtdbnWX4MyYcaiTN9freKq1dDoG6njYArGjF",
  "key9": "5UqRhvkuzVnUDkwTHgBAnYu4qynj2FYKjCV2HndLp5rKm2wBBzsHe9eNdLWStStGrpNBoB7eE6FNgDdJUuhoxktE",
  "key10": "2cpNvejpAAz3hJrn2DQC8TDjAdQX9pHA8B86wm4E1fejaCARHPrR2rTR2fx849r6NwaPgxTgJ2CFT753LT38XrFH",
  "key11": "2mkX7qsUAtAWYrtPjBoPQDgEviNRugoFyaYbDrf4Q2XYQBzhJChPX2h1RootYCPKbBWt26T23iEWyquR13n9abJx",
  "key12": "4gHATbL6aqKyyeJQmsBVEXeJT5eCZcfUsxsPk8w6Pb1VF7WNFx7RYkgjeavxbz6CiFie9Pjpf8fFtEDbmtDPexti",
  "key13": "59fXAn2ZsgEqgadGGRbcmQ45Bn2BWUNDZmkYhz2k3qQinKY3UUJ7ZcD1ug8huiJK5P9vRCVPZ12xWbYBAK6EZaGn",
  "key14": "46GTQ3wavUGgSoZSMkZWkJUUhf8wuPvMaypsSfw72DKzA5wBHTtWp2yojFgDjmTXBttyeAnA13kttzhLt5SQ5DbG",
  "key15": "4gAkv9r1GMuM8uj7L4Fj8mHbgMtvdEBQdHFkJMEdRmQBcao1bD87b9umm8sHhMUtb1HdiwjZSVnFTqL6jD4kpyjZ",
  "key16": "VewHWBENoM38dSCcgHYEqypu1xSrHGhqAwkQxaWqAMwzpoebc8cRcJAi2oGoB3MraJxByrsdDcggZ4aL8c2mLKV",
  "key17": "gqqEeKrJLUyqfeAF76MiSYtGzXUZuDTStbYgENuDaDnmBqzXctGFJteVVN2dwcGGoxHK1ackKn6srMmdwWaGRaQ",
  "key18": "2bcXM8dwHB2PHGHjuQLR3EigRU68jgAgNWPryy4wF3Ew9ad8wtkQwKmSWZFUZgSEANzuk3FZbT8u2jJYWiMvbghE",
  "key19": "DGe8gegAkjhh2mbYpP1Zi19oFqP4GstkAPKuXQHPdjqnFPCAUYQQw3L7WM2CQLg4xSygo8qDQgQUajcvdNa8YqJ",
  "key20": "LURAoj9o2ckfwJJzyQ5QzUgh94UnaG8WrVw7bCZWkkAbo1UjvXvEVcQ4AWRFT9masAN5nRd4VZefNDZmjFF1UxY",
  "key21": "Fvgx5gekEFQESRyDhcpD6kzPMt77wqNEqvHz1Szqd1TBMH1XMWP7wUo7Wtc2BrUQL2G59qEUxLRUh884HRetzyT",
  "key22": "4eNgQfunv5Bi1bbEt1uHz2kaCoBrfQd7983tPFV9MCuLPsAhPtR3TvzSChfMEK3MkWvgCP1KESvig1Kj85t1DmN5",
  "key23": "2PGTZKZ9FL9UMq8ebncPE3sYmdn23cnaax9YohVHUCSAmvK9J82eroD3oTHKQQXdo4FwLKZsv7jyboLcBJZ2cXxC",
  "key24": "29iJXwazEABHQzCriwLuq6nR7NS2TKgjs2XfJ3HUDcjJQLr3w81xSAuL5QTgXTS51M4vbrDcRzYFgP32hW9XrZzt",
  "key25": "1Fb3ipExZhroj73fpb92rNPoojrNv5q2r8mx1jDQCtdDNr8gdftshozcg63A5STkrFo9cbRYzVArn2E6VY7uyxE",
  "key26": "4BkHADa8y1jEFZfh59WjnjSQ22528ibY6bXbH1WHqvGsx1xvgApYmKs2Vjxhedfsk9g2NaqDptAJCqYAHeSuAsBj",
  "key27": "odk179cKdmC3eBMaaaLfdi2gHrpTvb9LaarGPyEEErKLj28SsKebKr4sotLDRSpL32kakU6QwPzUZicsUWtWiv2",
  "key28": "4H6U2RFWVKKbEsQZK928sktf9ugnTh4cu38Q9rrMMaFaL61yxwgEzhLFCYPxQHxxvEUK6831JqBKqGKVmYwJNjoc",
  "key29": "DLEpiFGc5QzUQcTKTwgcFVVc9A7CeNdtsLyqCTT7NVieqQP9wkMQAavY3jgy4cesZP2ZDN2qP6eEWVvbv7juth4",
  "key30": "2rUtdaPL6uaBACexRDAuPAKjLfehU3x1z3DC4KmRULgifQ8aEah9EGdK9Ni1NpY3gsSkstj8mqFXD7wa3hApHu7b",
  "key31": "484f5fEKLJBsGudYv3dCrHQorjwCAibrMYw3SKMwKtsTFLH5ZFbRfrZLJ6TdNqUjLbLEj3mQe3NkjUhNqVr8b3yZ",
  "key32": "3aiEWA8iD8kLe6aN5XUm6vetKP54KnFAmK7VvPryjLTzoy1X4MXecCXDxt1Rh2EFhX4CQNf7PwFEsZEs2tes8ZC4"
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
