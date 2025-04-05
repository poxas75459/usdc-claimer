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
    "Ekm9oQn3KioBiQSRoeZVtqTDnPGMntUbgmeUXJ1fZCurNSmey3s7RdQHyWZTprnscHmaGxG1tTwPTB3tWBAVSr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AT7tCSCw9zfjX1Z861eCG19mXw9RLzsJNGSKX89dxfqyymZZkoPYYvaUntUiMYxenifWyTnkZJjVqVnHKxXBkfy",
  "key1": "4EedX4EGrVXrHzxHVoenRRQvMvGWVvTwqBKveZJ9APu9PGVYaNZviFdZWPkuESAZem3CVkEa67SZXuWKNyHXhUyU",
  "key2": "2xBSaU8CNyDxtusfGf58MsXvf1D2axyGwYoUufaZkpJrxAq3z87xicw1iS5hSuZ2kLrsSU25j8ik84qGwMssQ2kD",
  "key3": "2KfskUH2Noxx9CP9wgUwKCSeMNXS8G6hzNF6kmYvCprE4yxTr2w1b79dux2EhNNNTH9ZM3VBVj5685Zkc6wqitwn",
  "key4": "25n6Ln6Bntj7Ljv7Qnfv2Vwf2NfBhBVzPgsNB2N92JnxZqeUnKdx2drbXgRK831StK9oWPWYJqkhkAB9Evv2g5sS",
  "key5": "JzJ8qaPT2FAE6cCKc42zRrr3JYB6o8jJgUCuPfrZSWEpTv87TunxNhnaU9whexLtGDyhkQY7wgteyP8UDG6F36L",
  "key6": "5uEXXSqdCcTC5StDuHNegEeMFe4DKe9wTqR53XZPFn83KeCRywxNCNC7oakExjmZ59bNP6ueEMTgQfc8U4wAota9",
  "key7": "34T6BZ6aAM6TZNERaodAJ4VhJitReWn8v2gfEVFEevTsFAq81TnhDPXRare7UDtgbjTKs6Ga415ofe7QFia6tijD",
  "key8": "rwsSgo2gvPCi2cmyWx3krqZQv5gE84598eY69Xf4dFdrbC5e3UPAbBwx7NDoHtNjW8HH5DPyf83uCJG3ZrqtAii",
  "key9": "5FGVZCrTtQVEUVxtQJM8eo4xYawhCe2rU8jqn5rdF9ewWd7CJ2dik8ijsZhEGXy4T4dGNTne8u8QKR5hDD2Ykmeu",
  "key10": "3yxWSumSMEHqdQn9JEVeYraHKd14RrWsFN5onyaV2YFQBrFaovSDpLRHLuRtbKHG1KYAB6oyrvjM58uC6dMtTt4m",
  "key11": "3jthcKwtg4Ny92R3mdYSpz66TprFvowA1ywAmgbiF5oNg9tc5YXuPXBAdKUUvpjNcLCEoeBhzMMPLsahGFbJYNSG",
  "key12": "56CZhiUJfTUfK8rHgTYGeGm6iRHw9VtkzHxRVqSC9FirPjUyfrERT9EDFDUs4Abr47DaZ6qRZ6ufWKNVdnBaQQeA",
  "key13": "2PfzXyJDhBKKv9fmNR7Dn21ZM1BBw4pR8QfLG23wZQQ2goeBC9wTrPLB65pNYZ43T2VeNVRUyaAa5Wadoyzbxm3N",
  "key14": "5UPGbNViVoBpAPUkLrK7KoY6XPYKYWncWDnTHRzbExRNtFtCt5KWd3VtZUFZcMgCgiEnJDSfXVb2TznN2iu9wbQq",
  "key15": "2Edp3MGfqaDXLM8iWfjdjgbzb3pnRUwx9iaxJSfXG49QSHuWCHSFntETW7H7nP64fjPLHQYfj4VwMJ6EbbGRGoeB",
  "key16": "KHBULk6eiR4sRWbPzxqz8SSdMPahBuvrJYTJvmj2im4fc8qQPGs1hkrY9ry5nCRnRY4HpX6Uq1jmMiqrruq3UMt",
  "key17": "4eTEpHURHsURwGk3FwhpVmDVPEhofxV8xQiWhPZrC5dpYrHJtn6QCMawf3chUsKkM9Y4gaXz15oRyrV2aNey7FuM",
  "key18": "4Ke4mNDcMxwGnr9gVUVLLQfyUErwUSHHpayvurfhsGj8qmZBXvkrE2P5pRpdUZkbp26PzwH8TxtNeunQJu1nwKHr",
  "key19": "2jKTJgTxJLBqh3vhpfSUGuxhBFJAEBqjZutmmc4TYKsS7vTNkUpLzEqgcLLbwv34s4rHvRiPimTUBvkcUURrdYq",
  "key20": "5Y486vrJKeRKbpMWXKiCi553SmNY8dK7yAZr2yFHwvxgH62cfCuAE6EGYpFHc83ZtiPx5ghwpr1pmtKNxrMewxW3",
  "key21": "5gy7awEDFwomkmTtJsXUFY7vGdUmd7dLmeS4WGLYtneXG7pNU4o12yCL9R19MwBTFVtJjSwEhvSnGAkiRKEbcVQ1",
  "key22": "2DNo1gVpr3SXF6a4YuWPryav3Hj1zUoEfvqKmrAwstBVy3QiED3vgkwEbMRRiRYDmN2XzqsKZ9xYCZvr61BMq1Jr",
  "key23": "4ntgk1miXoMeCbFY5D2z4woxxP1Ta14NGKjXZVFQ16b8sL6N796hmJP4rfYncxhWUMLv9hf62AP5mg7KzVMC88mV",
  "key24": "3YGrRAFHTjMthx1UP8nVaeCPgkqdfs8iaahBDKHtgziHd2yWzDEzoGJQJXu7BwF4nZbxvM7HneWd9qrtnu8nAXFG",
  "key25": "3NKLuYSzd8duRGAwuKLhQx76e5Tro67f1myxRzMTv63jFH1MssE1BhXyujW7WdiCP8yYyqa6cJ7vHAdyQkM6FRTi",
  "key26": "ktZGSMzGG68QuuYvjZsLLCv1ezGXZb3DAgrsAoGw4GNr9S1kj9KE3utK9hp3sNWXikYqER7JnTYGegyKEKjLaDs",
  "key27": "3ncmudtsbKqtTQMQC3PDhQN4BhMgkYovCb2s5Pzn1CHpAXAVms3C1yUiNgLMmEQ5hARq3MhSkWvcSbJH5Toyzuy9",
  "key28": "4BUHDRz5ZQ1qrdtd1i6jtu13iGHoTxSDkczeshWEmhQuMBqpMr8jxUHxyashJC9RUQGVDKLX5wDAdJPfyTdYk8jK",
  "key29": "5AQt6Wd7NoLwXnUNmbdETsA2xVNp8SWF3UxNTC938b21ntU1NZnohrhxHMCqLZPNRKEEHxipeP2FpMBfLRxS7DWF",
  "key30": "3uE6wSM32bmdK77xNcpJ1aTYuDRuc7QDnU1qPu1F6aWwwrtRmqK7YyWPrHaqhS3BmLUDpb9eit6Sjjv3K7R536Pb",
  "key31": "3LBv9FvL4BeCEP54LDp3vNqTWm1HmqFpbPTG8h8iMqwpRrPrTDGbQRQ7Wwexeiqb1Hei9U18hQdmKoJh9Q4S8LPT",
  "key32": "8TVKoBLoNYRCp7VpctJ1sksLBsebrTMPM2Re5LxReEzTSZVJP48eZaDkw3KoaJtcdHpr1oNHeEFLz9YLZ7zWG5E",
  "key33": "2uHqzgVRP5EPGMdCdpu3o5bWiNd5rUv3GyeyumHkjYnibwro5ZgpTYEmYN8EozosYXmmaiVFA2MaPd6gNyjPn3u8",
  "key34": "21G9SgnrPms9gmGTLLnBzkd6XFV697XqLMFZdTsTv3ZJfdcxPHhYhc8zqUYP78DFrGYyzwAmb1kcQwgbEb56mKzK"
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
