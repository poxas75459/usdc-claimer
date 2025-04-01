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
    "wgqoFzFj7NZDEgNPBvCrBH2aECE4kFEvfrSUvs1t1FuV1NLXekFeiL9huj75KacY2a7n64oKrbpirfUjYsvrtJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AM61vKRQr72aqJoQJXxtGtapdyP67CmpzNVbEB3o1Pir6c61BK7cTJbKqmR1cRJSTzMWW6a9W5574aBNiogDMBT",
  "key1": "2BcrrLY5Km6AkDKYtcSZKjPN1tRnbDi6gukAPcZqw4Dc6KXesx884ddWvhVvfrRDyFM35R62iHZtnpoDbpFcoVb2",
  "key2": "4NBRDLGHR7RPKDoeaBdaHiLER6kMuTRd73A6LjEPMQxzFKo6ABm1VE6rH6MjcbVouy2Ssi6NEe9vRSxEh8zqrBGq",
  "key3": "51tGts4rNKHaMJHueWTdZhQyskoV54Uq6Th4ULmwdWoicArC53gM2CPagdtf6kBmRnRCpYekJfaJ6VmdidmqnbSB",
  "key4": "ypTxXiH9TYV8PDUDVGB8MbGboDDyjTuw3TwmVFQQdHbqmMJ7rFnYnwAa7pB7LNx8jk2dreB8M15RKwTygykpe4G",
  "key5": "2qiYrdwBQ33afeYjQRodQDVNcmjNtEdAPZz3kf2zUH3mnomDCTByPjsSy4ojFxBnhEJKo3uwXeXSe1knDS178fdV",
  "key6": "2EWfsGnR6Z8mHuMCbX8dyv7BcbvceSo9cwQ9pFFk1VjHh84P7JstwJax2JfG8ReVtpeHSnKZzHNYSeEVWrUfn8C7",
  "key7": "45XdHp225MrhtWgu5RJtpGtpr8cXESS7m5J8wA9wvcG2QNzT3QBdC8a8eSauw91eBCteiPDUjGAGqqFF46VcDX6a",
  "key8": "4PtdWi93Yngy3vHVEZXsBuGir9RDjhA7GLeHxWVWms8j4hhHo491a3V7m3m84p1es55kbyrfo5dNixH8CXSFnbpw",
  "key9": "4c8bc3UMs1exyc8Nu5Jxv6JAdEhKPtaUd9bak22BXBGDZCHPpPM8saT597yvPDXYWCMd6KrfAiEj59XL5poG1qBY",
  "key10": "4tvdyc36a8CogbsTShyV7b1d9Rht8zSTwzDBDKYsakGiQStzjBGCj7yr3zD32TJ8hrkSzFBPr5NvyoLJqXbY1KsQ",
  "key11": "tUTAfbU9nysPBNCyLWvZFrCCreELL6ZNbZpAJU8Z5MpKbxBP9pSotPgfhCNsoTUcyvrKkk8aDQXm5oTqEh4q8uj",
  "key12": "5fQUiqFJKaSqBPqZDTyZRqjJSWBZp9FmtLcmqkBFqmUxcGAnDcMipd3TeTfidYLzXUt3cHtghtuSeFX1Qg8b2hN8",
  "key13": "3hPJKi1gvKebZ2WHcR9pTqbqgsuBCpsvpXKaoX1J64XroMx64fVLa9zjAd8PUefCEiZBjm1aWoMRWiJupmyDBvgp",
  "key14": "3NdSubLT4zySc38T8XCfv5CnixmHQW8HtRq4E3u29TiGQyTGkKiKwd3nzSxAfKgiLBeVxXDcGbfKsR9U8LyKnxnq",
  "key15": "L4oVr5yfCbmS2RWny1sCXtAgFPmo6M57t4jiJzSGBceNAJ4MboZPNXaWcyDfZmLWyfm5nam7RzrP8DVuksczCHT",
  "key16": "2yUPi9J8aQBQw8KL3RSbFNGYUNCXYAMFZKASCRKb2kWuuhUNbUnU48DgtfNNyuiV9HcwsKK6tcz8dVZ7CLupmzaC",
  "key17": "2YBqqjXXbE846BZU1mSo19vSarH6sHvmDkyPpSkT6ngPZfdg7RWQNt5T7KCzdqkuboxH1jKbrENNJ3zcjx5sphA3",
  "key18": "YXRkTHwarVfmfM7YEfeKNdmCG4fJXWBeb6HVZaGNkPufts37hJWbqKPP5pZbBQYmFeEPWinoh4oirgieCm9ZgMj",
  "key19": "2jVPV59GPoJCuVMDQsPfnz6zU8AsM8jHcevSJZJmKgTEHND3KE3KULo5XsfHERyEMeRguvHgCPos4ywoe3dCd9hZ",
  "key20": "3Da6jZWaWE1GBU2o7Jj7Tjro9VZvhHyUnbax2Mecw3KCw7Gos1PdeGuGvqpKmBJzEF9oex2NToyZbwFEc1s8GDYd",
  "key21": "2zZxzQUo4ykvB7jaEoGFw8MUpQNcYAPkuCNxE4gZz4DwkEWLuZ5bV4dy1CLsDAncaApBZ5tSdaePAtsRPcsLj3wD",
  "key22": "bnqaXixytZkLf6dd8UAMD2MaQtkLMPWDQx1MbFKKL9YHR4idpiJ381cEW3QdUEunrf4jf5QLswyff33wuDvkcxz",
  "key23": "5iwjXPfMGvvyRGxwzwv9d2gqLY5gTqWsv2L8rLonetLFAJ1PC9vXPnz7CrKoJSEoeTcgEEsjkYhstZzybvhpTwji",
  "key24": "mW2Vcr6GfSctR5r35p4KxdimnwHaHMEKZjbXmAdZfig9gsUSysLfTZHgHFuiUbQBcACu9u8meP8Kwf87r5LgeTE",
  "key25": "JXYsVwCp4Kx782C2Np8SZ3C6m5YE9tG9PYeysi6cGyBhebDNfjTxnHxSbE1oHCZR3D86GADgYq3gkXUsyuRUAvj",
  "key26": "wgAQEd5U7ep9EQ7311xGSrGgH7opxkRd9ZjiiELd8oC2aQewi7hMDfApWTCMV42UcA9LaNSVY33JF8Xevs6rqKG",
  "key27": "48C5s36i7Lk71inMM7dZUXazdVnLZZTF8ArYDVkLAQ4bNEMGbPNx3eKY4arFgQZUedHAQ4wsi15Xitdosfb9si3c",
  "key28": "47YLvgZ5fLZ1LxDw6oUTWQhGfCr7fCUBw9nhtTid1sT1j2Q2Hnv5dsMkhQ8XknGTmjwVjoBaS42shrSWzJkcpbKh",
  "key29": "45HbReW784jAKjS231zmBmorMCNpA7CQsvXHe5E52AsEsj93YWGgyYexCRCJgHrszcy4koncxeYT1rcLZ6BqCEsi",
  "key30": "3Hjvs6xBd5DNm1H9QeNar4XfunTVnhx4rQTva6cSWfYA7kki1fi71GgBhAPVAyuANxH9ummEt655TM7127LN6iXa",
  "key31": "5tkGRBi7dQZ1F8HQzi9MyGirz3kKrTo3KgjubzuNJPSpwYTv2TKW2dZWuNFutVtatTLuydzcgMoqCTp83GNFcPeW",
  "key32": "QkvcqhKLg6PphdAHu4nRjbzzXDrFGUWynyyTJLn4gbSyoUxZr6xEVeLyLEKbmq84UZNKkANsk2wVsM2eqYEBDGA",
  "key33": "5hzb8fwtiZTq89UiUPbG6YCTVyrT59QFBt3sADVd1KMGRuvyDupbcKUkUP4hzBtDZwSXeKpueiNS5ZF25X4XyaAS",
  "key34": "5RRU7WKtLAxWfh1rF331nNmzzFscrWf9sAdtWsU5txxP7me6kQNUqyfu1s2qcXe333Yz9RBSiBkmAhyFQZiLw2yG"
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
