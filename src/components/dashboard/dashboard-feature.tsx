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
    "5SxFwDcyNF1bymd1BC1bT1qtu5Rx6ao3S8zVdiGL2KZKe7HtQfyDQkVSP5qXL7dZXCxhWu7EXmH4ERoqs3dwonbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ixehVASDqoXBSCbnMo9yJZajeDbos7rBHmjpPH5ui9uD6fNJSytUZZbGwBrtnTqRLPRReqxFsSwJxnSy3ATwixh",
  "key1": "c4dHukFyRfvAXyfyCWj9F4mHke87T1kJtG3hTaRLmNB7Nn2ohncusqDLqPctjXcXVRvgXmKMMboshX1CesRT5BC",
  "key2": "4MZfvMWL6DzCQfV1WNRWSw1rQ3uAwFCeLohoQpvbotdbjTszqaAoskzdY4pYuyDWRdPJkEHXn1Cg5AcYgz2xtYQe",
  "key3": "8bDADaUhmuYMGA1qYpiGUrZ7KgKZ7PdqioKthB2YCQK1oKQGSGAokWeJgtWaYk2Gqi33M9i22qf6eRyGL9YKwhB",
  "key4": "4rALdehzEWNMUZTkHPLuFhCCi3fKTGFpf1JUaEPuWvk46iLssSH318GMrz5zHaewasBdAPC8McSj6N9VtjawfwQB",
  "key5": "52YKu4bKCfff8C8MePQWwh1628ZCsM2TwPGYFU2FutX1TiPrszjw1CL3v3Qc9WJ9cJTZvvrcuLGSBQz69FzQJtWE",
  "key6": "33Jfv3FmdPd18DtZZAdDDkMraE4v1REgFZboMG1dh38HADgPojaZvdS7vkenCcVGvuHdLpFVK1rtH2HusjuSobnE",
  "key7": "5FHdUsgLKGaMZqz5hrT6VXnVjnGn2w8uJcy9x9C2dUYuy8iiq8U7wMT159R9ohH5iDCu7yAUp4cM9DffrcCNaW3j",
  "key8": "4TBfJkoUDhuNjncCjNBzX1X42AY8QSgAWwykFRtDHQNwKwUpQKKJT7dvNnMswT9Md5cYm2X6AiedVbKSspYV32K1",
  "key9": "4kLSvePaDnqNLJ17wsuL4UMQ88NWNe7FwbBzhrpL6tB2PDGt3Yr9DufMYrUVVb4LG1EXUsdgGTDmrtHUCwtPg8FC",
  "key10": "3sWqoUWDBVzHofkfm9sSatoV3XC5Gc2cnFkz1HYqqs6L2F6TjpmyxdJom46owB74YFcYZZdBqvQ7uU6ujEN2mbFL",
  "key11": "4rXTpBBiVYvEXrNjuckkQa4SX2kCdgbec69bZ8anruUrp3WrpdNKnBHfksdm1fRLvbSsZBpqmeZjz1Q5boCiJh9P",
  "key12": "2cXpiZ554ryVV9o8UaD3JwXRNWoyJUSWesQtS8FhGk9YuY3hL3v7cyA8fqkid6ib17MRL2LdcnUz3MyN1dBHAStk",
  "key13": "2omSd4NK7rNhsHvMufUCmWqtwzHriE4dRxyzFB5mG94rTKMgDFmbcoRAHdMmdEkEPp8oZs8y3oCMtt7xgaikGkGz",
  "key14": "5dyWfmMH57JWbYregs3MxXP4kidonEGTjsqXHDgbGA2viougE3CqT1gbxGCJQZAhGJQ8dNb42NcGAmdAPoXZw5cw",
  "key15": "DyMGnCQzMW4MFZnR9ZRdQzpWFd5A7vB8fR8FxBm3KANmRQyghmyfTos95hxUuS4sfhCS4ZxCKv1Z2dAsuFvXLRb",
  "key16": "MKTMS91LGJxezjgkQVGqUSn9wEu5tckNUgXTRvCQ3S1NwbU4Dtp7BntHa5b9NKQAuFtZD8pCmYBbVbpweLfMNE2",
  "key17": "57Pr6caP9G28Hwa9mcU3BaaJ2C6AooM7ZVmpi223CitSfWrf65AFYaVLfvfuhH8hv97oTLL22CAb8RfWSYTDjB7z",
  "key18": "4WAW1FgQkeTLh8PKAfcZWqdBhHHD4Jz1gHHyVhRd8dGZ8wxLhw73vbXFZ3xMSMZnTwu9JTmFmVAqWdYnv3fAaoJx",
  "key19": "2Z6hAE3e7WYmpLY6s6evNVLzZ1nY89YswstFGgp9Vrq67QFJ97jFAzG13KefSr6rTo7FBEMzKaJwpkvXQteYB52x",
  "key20": "2RqU6hxxjB9WFWUFLdUhAA1yJ7sQVtkQszZdYeuazKaebhZzr92qWC4tQ81gAFM6EDKRSJU8SAsqRgKNruNifbfS",
  "key21": "3dnvWdhZQiLuE9Au3BZGDtbvo5GFi3JaENvrCRknEA9yBK19yEEoUGPjLiLfKhDrsAqsgWoxze8QrgNbmtW1BgEm",
  "key22": "3KYrXQ9yvT87YKPq8pBefnXaWseYE5yDD3RaM5wGoQ3enZvxRHeHxRCvBsF2dZNCUywRQJf8aAqqbV4vFxuoKWgE",
  "key23": "8nvkweoL4Bj4oM4gqjmUzA2SWB8MubtYf9nRjB3aVEwUKuaP4Jz9ahLbRcuyn7RDevVpsn1yX3pPihNdB73T5FE",
  "key24": "2JnxLZfkXzEck2MbNekkL5wwmzpcGueFuKJAFQGMj6kWc8nNKwbKQ5Uuk35K2rFsf2bf22aGJdPZNzbkzNNN3gmo",
  "key25": "2jPDmT4PgDB79Bfxs8AkQ7duHvcqG3riBFupG1cY4gUefN6RSEWJHHhXu1f9yAShgJ8jVuUgBbvBb8YpMEwFhCwP",
  "key26": "29a12unGHSE2oiRJL2vT75RsKrqcVTzDUyAf5JdxQtUsXvbjN7WzQB6CimyweqrozPPZd6CHhmYsnfqQyh8X3VxU",
  "key27": "4VoW1nPDRaNFkcDPsNCmj78bAmCct1BoyPRW9SjrzU4ht5Xxgb6G28FSGf1JqHzGTa3QWRoNmSnBxY157HUk8dn4",
  "key28": "LyPWr9pRnr4apfqwkEvYin2pg7GddTy1NT8bFQNNZzfpxgTyBbbitY1Gq27rYue5g74gEMyuJ5NYnrLcqZyQ1zH",
  "key29": "fmtTZGotmLRQrGyQbFcuyYAyCLYYMTnasJmPBTsMognsywSG9WnaS6K3DLkYsGRxbT3RrK4SudZT39JXUbnYbHy",
  "key30": "5VJUqjuB6ccPRg1Dsyz8qveWSvEkiJraLvrEUYdcgCfS2epK1qYhhDZ75QFm8rpe3xWgzpQnDphMGmgaZxnckuxL",
  "key31": "64YRhjwL1ejSAQA4Lw9oRw7NSoyfKmKz9mbmtGnU4sKAPuBu8tSthL9ju84YkzeA11tzbRcyxXjBZtk91d3ZGztG",
  "key32": "QZ2K6HpyZVHRcaS1fhnEsHdP86Gdm7jocvQt9SN1NxFqeiMtUYyQwmrhJoZR41WV2Y5mWg4ZHcVBUVRLSaecRvY"
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
