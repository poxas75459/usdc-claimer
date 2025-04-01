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
    "3cEHpoYZPUCVC9DkxzqcpqeHsSTBtaVY6L1UFG2uVyfPNh7ZeKjdSZw3LbiqEPFT3YGqkDMu4rpeWRs8CNQBkyuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29jUB7rNcemUgXKDoeM3ky24PbU3uCk4efu3CmZ52SA4PNvi44xfEeQtGUEYRSF7osjh25b25mybgt6f3EXPEzHr",
  "key1": "5dUQGz2JqnezZz3Tu5SDdgA4Tih2JDXEJ78U3r8GUmAPjzUHgHNaTtoyBVjCBy2tsTzo5CUMrziTV3qe5onFiore",
  "key2": "2EK8PB3KGmAzRZZoPHz9QimhEN4fNiVbhSn5uuapUUB38bYTAEmrejAvwVdRaDy7nyePKa2hXaExi8DVLPeRavsS",
  "key3": "5oJWnRzSGxdmzzN9ho5zNDwmGMdYemJLG3N63Jk1m4tgniSs74jNwv3fELAxjeZCHYWADEVbdhUUi1ZCaRgFLk4s",
  "key4": "MNdJ9xvqNdMWnXJaWXSRZwRA5M8PobCvZsEsnGCuu9jojKQGhL4gqunDTYLZaWmtRgYWx2TeSbQff4YNWG1LRrk",
  "key5": "2bF51QYtzDsheij3ViEjZmXwXeBwDJY6KcwCGukEb8Rj47kFvBVqnBiT9oNM7xA9UDyQVXeuVQH6xse7ME64stvJ",
  "key6": "62BQ1AfHpZH8rxsMZuTqrwnyttMjX2iSZHkqe1P3uhLNvNjNXdWRM5FX7Fj89JPW76UX5v7dNg15JHq5dSVwmDoa",
  "key7": "EucNFkG4wZES7vxvGcxCnb9daVPPwcEXG7hG9TmVKj6aAH6GRj31RZ5rNRgM1ttyJeTsYwXv58txtdLKsFYdTui",
  "key8": "24BGvVnqTpsZJdT8W37pd1EjpBRua93LzcMQJ3wNGXDU2Q1MF4m1vHMnRXHJ9SuMaaVZbUEdHtcUtekG7nmxfj85",
  "key9": "5MWwim26FdZdyN3h1yyGakCtXRsBgTkJi6psR3rzgBcWyAakuPVqnWSXgKPi8mDjLhqJ5KiLWpSVynzckCayDkCt",
  "key10": "3BhbCkGXWdYEipZrs3EyDTVDVypCkcGEaYfkbvJrixz4jA1b8tpLv6piEKZ7FubFqsXB37WMrsnonUJ2hkYwXBCV",
  "key11": "3uvt4WNkD3gK8S41UqWT1XRWvEU6EHceZY76QFkNHZyHXxNM7FaNd2UpxxzGvtZ3mSKcGQv7B54D9cEn496YHb87",
  "key12": "4hLkudeFHuTwhW42Wd34fBu4jEtB6JtnyPUj41JGjYaWihvzjvEN9UHruKSUBFNoRLx9MVcpsJrHbiFBfCC3xP9j",
  "key13": "2z3HC4mYveUeJhDxRuS24Hy6ex9FpP7LuM3o7dppTskdqtFAK2gXpFutgHQ9xbZawttx8uh8kuJMuaZxtYSa9dvt",
  "key14": "4nLTUFroxLdxiPXoZJAazxWMNSBFCAPDdcvX5j6jaKqAqqEuHgZfohhieMKRZsK2AUbBErNYenMwvZCmp9tSpV2D",
  "key15": "hVg5FNKvJyBogaZWdazkDgWoYK3f1aQQ6vwtNTk17Dv7Fq8i8GbnHgEihYGCRZZmQYqCKDe2jCNkXgwC6Bb4nG3",
  "key16": "4kzkwHnXvu5wncyRQGvpyRUHDiumgKUKUY4Jf1i4VAccjkJto3sreZhzyen7hzP6fqQGiFfKkMcMudTXtKeyYir",
  "key17": "TMLTsoZJLGKzHPMpgbbYmBz7WEMeuj29fVieJRJfMiJwSpqmYmZbAzkW7M61FkUChmnaCbaDrs3kRMCYAvX3bNG",
  "key18": "5MHojmcU2jRuN3UdL8KXDQJf4u2LrZU3Yoh16piN3JGzFv6WwU9C2JUvvkCXF5Rawv1u1EY1QkgoDnf227Lob2EC",
  "key19": "URhpY9d6E4V8wmM77e2Dw6XbXorFxUFMajzwCx5ewLE66oPiohq6XZYm97iwDpCeGVhaU78cSAkXyw6VpoeBfeR",
  "key20": "3Ddvfb1U4a2KHomCuy4sgxgpF4awfK63t6CEL8rVcstG1dKpjdXKLZKEEqnkYPZWCRj1aEgvgaEtDiF58cXCYyMJ",
  "key21": "2s9RFNdwEuYAWh5h8yCm4nei1s3484r6o9P8pURG7wGfPEnEzAShE1EC7dJcdraUuxppmFTnehsXGXDrTbmko5tm",
  "key22": "5Y2XHRNidw59aFMF9pHVDvHXhVGQ4DWTdbbGAVLX4YkjAmhfJu64KWUAtQv1SgPvCFHkmvMHcbdyvyY9Mv4SDMY7",
  "key23": "2shNY6Spk5nm3tFceQ3U5DkRw7bs5reV5XF1Yo8RWyqrtNq3MB9sHUM5DE9TKhHi6uexu6eBhmcK5DmTG5XSuT81",
  "key24": "3bpwMSuQ8tDNJoeotXBqWCruztoD8chfkzNrv5BXHBPzS9CZTpwLeptJ3oaJEswKYhy7orevtHB8YPHHahaPiEcR",
  "key25": "5MSAjUzS2EvSAav7HxjFhaFGdf3wLjYmSkxb4VoCvDe2Mz2qGg5ZywcqSW393bKuPxL45pAWA9PaW7iakgBtCxzT",
  "key26": "32sWDDV59CUuqyH3eEtxpZ4tv8u89cZR7BULEMcki6Enva4q5tBatV6xkgULMF312zAA4BKLYLyaB2spWwAA16Qp",
  "key27": "pyWMVh8KPYwcmuN7A1fDoqXaSiPTfJJCtC7gg9V2gecZFc94rjDenUTP62GmCSjcb6fmnDrK1QtEV7sADNAozGB",
  "key28": "3idnzzUc3ChSo4vBC1JCJ2ojsLEuohSUXNUmtboEi5foAYdyqR5QrYitrJshABxfY8N7MwkbCzaHDpRu4UNkPeyL",
  "key29": "5bfWsgdBRidndL5MZgLGQRCLU9LCQm4avLDxqWmt2H6SX97NSKdiDkv9vUhuBo8ZGnEvUJ7WjUpJ7mtnM67syHsf",
  "key30": "4GZsgTS4jQcC8fYzmsgx13xif6yeTSmByGTzoM3oY12MjJxHCR3Gq8NTEP7dn58GpVVctB2MT7NBckL4VvtGe1yZ",
  "key31": "bL8rTu5gWYhhDWAKhdV5Se9cjx7rdcATBC4K27TebiCGvyjmopfpGX7q7PuGXb6ZE5TLEDEMynontXKnLW9TWe5",
  "key32": "55k5Sa9JKWVm327VgsMczUqMpaGQFPMa8gi8i5bwftqmeKb4r5RaVTbP1u2YZBL8xFHkNQWuAqTheLH8h9TQeJxi",
  "key33": "3rRVU12yjDmSE6az2vgr1vPnr4MwE794T3qWutTfN4jgSttCuVdJyvLAjzWgEe6LEwFg6MNn9fazB88ZbvxCuc2y",
  "key34": "25EBouwyRoZuBUkVHAacq4cPeDYYQvSHgDRdDaJbYW2wMg4JxtD1ZCLm7XDRZdTSQTYdVYDrbPFntRCBzvNyFmFa",
  "key35": "4HEHFLSAzq1b1hx5Dse5rsv56knbgMRg6CKDufYVnJXTKMuQ1eq8xcCv9yHkK37XUxwCUehKnx2nm4qwTNmziPfz"
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
