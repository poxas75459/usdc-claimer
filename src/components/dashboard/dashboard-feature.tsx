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
    "fTnjAY7p8jWCBo8pMqqXZP8QkGbDdQ8RmY3aCqJ4YWfc3PsA2QARQJtH5Sm1QcWYbEa9ML3R84ChNnT1j1SwhMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kJGhedmP7LReQFmedmKYbmq83KCxniLKBfzK1UJFTVpFshbnaRmWpvwST1cvK9BsXrgXKYzFfG3U6pbfNhWAEK8",
  "key1": "MbQggJLt6YX9kcAbwRJ753NsQgNtPT8sLd3kz2WCZqYEJUcgmebFVFEfwgKTkrnftyUv67KX2q2irmg6cpHDhZG",
  "key2": "48sYChGAxCqhBQaQ2fvBWdEE4HNa463PGqbP6wyLrZEqNCj6dZKsugxdDEn6rMBTPUCSeCxEXHf1FRFpd5q81Lz4",
  "key3": "crjBZdRP8ArfiP69ko3vSridWqCLMmFRi21zQpPF933Pkn9QqSjb8NagV6eqLoBahcHuMHCxTRs9NLCTDF5CAN9",
  "key4": "3hk87PndXrLiTxeaca6NeKYRzNSPReuyLf3Cgsvk7LNG1Sd432YG8WUmpShE9rbxDSuGBuGZkk1J4meCdu7bNWSp",
  "key5": "PBCRbo6sQH1yty339wZhco1eejCADDfHoe3kQFj1sfBi6vCMTdVmvBT6j4Gw5fbQGDYtrQXPiM79AEd3638VAAS",
  "key6": "4aeu2pLEWGzd5YsjLaYpXmWineR4trktzvXpLQneo9pMfLwPK7ksytAKo92wgqAmBnQYvq7B8p7i5r3fJmfqBNBt",
  "key7": "5uvXpN51oKve4XiAFoZqfDq5hhkGEuVdAEn4w746HiHipY6H56ckTbMfdrpPE3dtPbcxfurxJNGdgstH6Da31suh",
  "key8": "3ibknsVpFBdHj9BTMhRMPDRfSWp3BgQvTYmE59ppdsa5n2Zox5otvK94aspXRZEA5dJPEGVRRqo7YGL4msEB4asf",
  "key9": "4TyUtJwXS9kThKcYAcMTLMTtueVT6Z3HsTQe6NgrtyNkKzBLS5x7duRG436Pc268Qp9CTSq6MacKzDku5o4nQCRn",
  "key10": "4YFMauMKoWXeNfjJrPiSbzpvSZENMMS86iHdp8Sud8zwYMmsVUsq92kyhdtuS44NdxjHPYxYDrmzzhjvM6znPsFE",
  "key11": "3BHsEcqLxBxHVRHjryKC4hCmN1FSXsLW6M2L9RFmDrVabEbBKadyVGerFbsNza1d29s3XM8YyZndbqsXhFieQCxv",
  "key12": "3YNEBZbzZXNKAWU9CDkrbp53iSEiCJTEoQRD7jrd25rV94nKPV3ZvdpJrD7AoU4ErMbz5cqjSNEbw89SH19VpwjY",
  "key13": "4hxkQ8oCJuDijzy3j6voDh9u8BoKuCV1tc1U32efkFGd2jbbyNq1VsgZLcYSwLYoURQU3NordhKYVKHzjnZS5UET",
  "key14": "5HWTdnFqgYSQGGEhuaVbJFBjx6PpjYBfF5E9PRcXYDwKwuFyHN3GPxEVXv4k7GdCrmxj4Uo3Gnpo8y5eZHn8KiGH",
  "key15": "2ULkCp6cEfJuyFh3AD2aYK2gKaNbmtR62RZMxZjLXKarRQqKABSJDRU2vaKUdggFJCVWYKcMtDdVghnXVBiEuc27",
  "key16": "2KALQhP9YVZqC4LstVhxpvamtSimaBhERCM9WNnccAngYtMZbBWugcUgs9MPEa1AnAXztK14nLxUHRivVUtpwuXN",
  "key17": "4N4Yts1jXidy5Puz9vULrGWjZUDmRgmzpUforbu7Xs3ish1SPjKwNXgRcKSH7GYhFQ3HySRF1NNRsFNLiDy8Jcj4",
  "key18": "iJWWDFepzpqUoNP2H48Cy9WaEDrT2CUYfebMuXyfevbpNLZraxQzRbrMM5zyduPr143T2u7sKTYQuuJqgSgrspf",
  "key19": "4TdzwjbBe4R4gj5HxTUC1qD89H979HTkfq1h984jda95s4z4kGyEi3387ZfzooRSPtdyFPUzYDjQg4WHanyruBB1",
  "key20": "5k1UBEjvPDnMuYoyW8tEQL3MNx38dNXaYK62YovUGiteAns9w5MewYv9hSLymXaxKb76i5LjVzTsZWzd92Kq2831",
  "key21": "3bzbCbuEDujS6JfVVrkNZUivJSQnHv35fz8ok3AeMgZuK95rxj7MfmA2eTPrD69CLU1BRX8Soo3qULDyU9xTeENt",
  "key22": "5ByLaGnZKq5WZDnu2h8C3Mgxwm9cUg2JGxu92p4uVQSGw17enYCZdrmqiTevTCoqNckwb74gBrtaesHpiDBDVQy5",
  "key23": "A1UYWuPqf5f3T7CmsVSEHqxNcvYeCFqBFReueuQ7DJdga7n8CyvooHyfcdiD9czR4MbwbMnTsa7kNR5bSwEyUgi",
  "key24": "2haTcxSau4MwyUbbcQ2DeTrNZba6t8GWiG5DnGDsT7p8jCL8x8pf7jMwTWZguMM6FRzRXWmN3MtAAg2491TmUnms",
  "key25": "2bKPuQ65cjr22w49cQYJwNF2b9td5t7N8ac3MvPKPQFEq2hxhD7Vtv7i26FgAtJtKdQXDBo7Cf2XqfXfBjvmAn1Q",
  "key26": "5XTpDE4MsSyFj76efXGav7ixoz9E96AqmKwUd4LJYKeL8QqcgYv8EPEUVKXJmN4Ehw9wHjeX6e56cm5RahjDdJh6",
  "key27": "5H2dNLviHXQxTJmZhNRMtgoq2mHuYXJZyRFUKrujEZVY6Bh1pPDjzfgtpjmqZjqfzeHvsWdw2Ctp4HLBS47K4Y34",
  "key28": "2C8hGiu9dcDdrogur2D7Yc7pKAUdDF6aa8YByjStdjJDWsWXF9RBRg9EMe6unDzkv6UqMkHrBQaj9JKXy69FYgeF",
  "key29": "3Kcg4uuPhpSbAkHgrctdqCBLaXNUZwbdKFWkEJVcPcfhDzKhieJVrnHqwFCaA1kDhHoTT319S9ZjLmk2fSLp8moZ",
  "key30": "3dYNgDzrAwJGqhSufsrfJL5sH2MqpArhR46pPg1ogX2KtJH4R7FGuGjufF3G4duGsaZaT8BJLQrsNnrTBR7DLVec",
  "key31": "uRpTTmn6yZTCAnxVMC3uwVp5H5Cq7RxpYzLGkiRnuWvsz3TQWLrZ17jovk9ToisKdUgSqn9uA4pZrygyGr6NhSG",
  "key32": "4hXDGqfEJJrCPbuTkZ8J6Chkdkd1mwefq4jYjyop2KX7TDThgBELDMzz5mjZ3DRQESvDLfLnEpZDmSXznw2rMthX",
  "key33": "z5mhrCZ9dhkCEbanUECF1Ai6XwDF3WbPB9zvqzJrGotVYpNYtJvN4vE5mVwEgZQeydeL2ipBN8CMNcETuTxXW9Q"
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
