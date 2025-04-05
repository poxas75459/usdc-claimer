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
    "fwFWxLdLnFrTPcyiAGm8CBR5m7RFxQmeS93w3mVGezrYeaxJLwPZNHLXWMwVauxoRuMqoSNDUotMTmZDHeoLQFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QuaPZXw8DcLQLhnGoAHYZZpRZF5mpXjeQW8RxJxyZrmn1jc41LMqayLpD1uNowakyCTjx4eXrJj8FstoUFhLCuT",
  "key1": "2mAK8RnGzmM3iYrz8uzztv9rW5xZwx2P286SL4LFmywtTyMankZypoeujapX6sCAffJLjUu3r9Tf4LPYy2ihicMz",
  "key2": "4Y77tEN14C88Ap9CSEGxXNXygmp5MkYNcLAqpmgrjFcV379WTsKFUjj3KkqUx4C49SKueL9GMcoyjpJqWLRq833e",
  "key3": "5VqTkGu9L9ukAxKF9fENydHbBb5NHccMxv4TGQvyNBUN4hrFrcvyYphX1YaNZHm3GLUTEggGuu1oumQqFRNSRdzt",
  "key4": "HmQcVFscXz6nDVULWATciEf1pzPSWG7BFxESNe9sRFfGt5zaepqxWGuNFkBXfs6mnnMUjPK825RBHEkJ7AsGEpW",
  "key5": "4uaG9SRQ8M9ZzH9fseELprd97FpiooGhRbNnS7Ch9UBCSrC5HA7pFHrN75AT3FKFY5L9xGEbomaUZR5jgjiRjSxT",
  "key6": "jCzBTPETmSApGULQDCsauX4gVPne7euujVmRsFSx6RrqbvxegCL9CXeUgqmTCXfwDPTRFrj4fTxiYCtyba767dY",
  "key7": "4cVv837B3DrzdtbSGCGebr5iQcyNUX3iVeFMmfUjHNdiFB4MUFdBoLaW1sLoBaXdyZy15oTYzgAUXT7BEaZYcraZ",
  "key8": "3pszzLXQBXec9ypAZo5xZGbdPu8zRnCnPDnCL1qyjWEN9HHW2wqNzSFkZBxaAanJAEXCT2ato7N1DQ2Lxe9qzGEs",
  "key9": "62XC5NF8YTm8JajNLpZAsoTufqNJBYCqF17MforUg1qFHUo1JZFY93AJPgLgbSVELHUe6qraT4fGNb4PSpGYyEyp",
  "key10": "45LwooLM8ck3hzYVRTnasBEQMX5FSH3ZceHUXSfkhRw1XyJ5qjZJRBPHsChx4kXLwDJq6aogDTTK4sKvhRLcSdcN",
  "key11": "3McQgyxMH2aFrZPWViG8gtapsCUSkvdsTzB87T9cfLkpDvCtkDa2C6EeVoE5k2Gmf6m4crtUXKRLWELSiYa3Augk",
  "key12": "5C1qCX7mJNyyVNHEsUYqkK5Fz3MJeqRfCrFpnShPnU48xX2oMEPDXwuBMoxHbPHy4a2PLqorU8Xe8bfMA646SjrZ",
  "key13": "3GEHBprKpdb5ZwnUkmq7ytucodTZMfvbw9PjGZ3wtRTw2E8CFwXVQZpYRt8tj3YxohoHbF2McBK3UXygR9hiopz1",
  "key14": "h5Tbz77fM5v4dNcpYxrT7aYNUZAsWcmbbge8GUShVNdSChwbcW1QP8N6kgapyoM7jcxf8JTX3HmDc334GJF9WLF",
  "key15": "3fs3pmuaT4RhGPraFUJHiJQFfGspfWUgsfpJjCQEgVzKKdvT4rfg5JxKSXHGJFJZcJ5Hs912kgaBSsX3ze68GxHh",
  "key16": "5enPVmfWAZp3wVsoNK5BZrnieFmHsNQiuhfcCbkmCVG2LzFzctKKhsXcyDc6pNQikZpkcKAa9QUz9Y5gC6Nqk46b",
  "key17": "4QpX5txySQh1nnvrYMT2r3FznGCRTWA9SPk7YPzPGdLop1Tv8VhVfdyk3eNyAxWWRyUwZ4vPbEYHpfnVZC8DPmaJ",
  "key18": "imkmeRbheAEkQPG6bhzozpQ1eziTLXqRnXksAfqbpgj1TtFQix5kr4SpdeDxiFbakPuT7btbgd6C7hcQ2bEpehj",
  "key19": "62HM3j1AX1TP5tpm8teJGFhDT7CewApbD8x6LPc3uKzWcQEvZyfrqESmtBZ6SmtVi1i9p1G7Ek3jFaf2BZoWugXL",
  "key20": "3wVgvb5rmamJgMTesHUMg8gvHVJG63PR7GBtRj9B5Pbt5qaz9h7vKfKnweRmt8t12QrgaxqzxqoFErg7QkQPCt6p",
  "key21": "4jQWNZotx2qZ7Dbi65LCTyoi1XB13q3qZnoTC2EQix6RpAza7sYXTvc9qMUYsHb8MiNzaZcwU26dh8XziTvkCaDs",
  "key22": "CZuci9sNzr8ywADYTpaM5zsqENwpAkhAaDQxgLvbmP8QyvgdQFVZqhfUyWrJGiJoCMDwG3bio2tAML2Ko9NB4SN",
  "key23": "4gvBTitMY8eqvScJNm4rzyJ5MamUDEyMJV8oUDCsbPMscYoNh5qmBotPsECfnnS3jLGK7gnJ18ddcwfXcWkuS4Yi",
  "key24": "5R12NpmgMxtoHykvEaJyqxs962bHn6tgw4uiUbiRJBD4HNQcGDqn4zZsYU1wzyP1197v9ukYK7LyJZJ5KB2fZwXz",
  "key25": "2qwtVXzN16b15DBdSyymGeB1pbKXxNsdsuhkjjpP1ev9TFgp2TBXu2T37bL3EQKzwHk9XdupHjqeuhhQaRyUnZtd",
  "key26": "5RTWixxLKMDsDRLXXPmE4eae8hvfyV2W8t39uAwAUwyt1p69v5ay33zw6Bv7LLvGapwUgJuni8d3PZjmdGUPasT7",
  "key27": "3oK3iHrncbGuk8UG3wW6Q7WuRpJ93gDeTuQuX3yrVDTReALF9oBQ5qrE49u81fnXGXjy89GHA2ZgwTaQPZye2tm6",
  "key28": "FgodcxNXvfzmJqLDk5Guo948A55sdmEYNXUj8h8u3nX3rgD2UK7fL6Nx822ZSowA2ZazDsNXKf7wQpLqGis6DYb",
  "key29": "2wdFqWYbukCQeoax55Vb7ctHhbqHQuVg9ERApymsgufDX3DViKf6PEUXbYwZLH9EjwuXmuuHXEA3rNgsz2SiTa2a",
  "key30": "3gPnmAXvJy9rP51X3crdwV95BPfUk2APXuKyzjAbr915w6gfZD1NJdQJmVpNZMiWoPQyBhiCmNascqVySqerb5Ym",
  "key31": "3nLK8aBzpvCWrKMHhQPuApRfLWV94gEinVfb95vr3fdGzexGjBF8uzBLYvvTnPt3SfeETDo6t5jDuCGuZQ8r3Nvt",
  "key32": "2byBF4cR7iCuzRvXAuvp3ixWgv381uh8TdtzvBCsvDMGVHNHt2vTUyMyNozfqbMEA4ZNAKkHFXZ8upcdSZqnqX5s",
  "key33": "5cAYrAda8XVmP3xitnWH6siy84n8MJsSNukrdbsAyEmagqPzKENr5uPWkV9hsrnTsKrpct6LF5491suGqKuMac6m"
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
