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
    "522hx6yfmjAtUtpJZLWMhBi8XyWyDbt8TKPh8FjhQNPVSA9VMjgd7QATpd17yQtfGKt9wg4Yvp5KT6FmtbHrQZMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6E8rrHPeo4Szt6iNYCbe1pmxyZGEtbBuQKH6eVs3Q7wH693bgDMn13HXHevmvUPQ7ubRmc3bYP1m5w464S91Trv",
  "key1": "5vDGAK1coex7zxQnc1HjasbZgXdM5PJiJPw8wKV3YjncRKuG31zkz5ZaKGxvVX7eC6L4FtooBxyTjoXFnPgqZRyB",
  "key2": "3g4NZ7rhanXjvTDAK1gfFftcihn5YQRQyiKmHY87NmLa4Yw2TDniGVU4QTGFQ5z1Fquqm1MzCjrRGm8ZaGvG1dk5",
  "key3": "4LyvMmguoxwHpZVVzq2XCfwdTT6B6Ese5MtyLugsnBaUDQBLzN9EjiuFeWoeR9XBd1pSof9Pmjk4ntvuxu7DqpMb",
  "key4": "nLJtrfpaRZrva74K8UT7BPqARvPyjC8cQG4N9nq1cfb9KvxMoKKLv7yAgxn4vGRFc8d8eKaHbccps5q98FR8HDe",
  "key5": "5zapkznXnxYEswE7ZuNR1Q9km8aDY189tgYcPPQH6f1U7jpAiRPGB2T9onUhCjff1osZtZbvc81wit547GMM5eJd",
  "key6": "2FvQmn8pfaZ5Ld46X9TKyQuLqKpx28fRZ6LhoSuFTqRABeV9vaAUPogrodAzbDTa8BFvo8DZMHBCNodLECduyo5W",
  "key7": "28xvBx8An8bi9KYFoeNQBHnjUngeeX5AtLSjE2TD9rRFgoSiFGgoNAF1goDrG3gBCog2eTCrwDQo9SMFTiZa41Cb",
  "key8": "7vadzRBKcxYs7V4qfAiBNdcbxC4zmZAEHFHgjyeGnoY4KL5Vonm8RpgzDpbEbWxVRajBQcVzg6BVaFRiFF9zYAK",
  "key9": "oqkbCknXUZVSzYe6SaYLj924QEkNLAFbDBX7zYusN2gMYQAkhzhGmqcjtPt6LJBpamQc58Htvq4uNJ7MZjvAXn7",
  "key10": "2gfSQeMZZYbiaKEsHKFzoxZTBtmSvadZyX3ktrxVZ5V2EtFJF3MKNmjEk56DwEuGrnhRHVXX9q2QLFJtsqjTk37m",
  "key11": "vStH34B46o3hNR1scBqDsLVu574yb4CddiEwmtwSnZhAsS3d24GLgdqjcQfNCfHfBGKds25YcbHtcy658qRfarb",
  "key12": "MtPj9ktFLP179NRAYanApE8sCafG69hMhYLE1ybsp9SSQFkA8LbN3uW8JUBvgzabWRukDzN4XTuCQmxhMmBKmJE",
  "key13": "zip4QoFMkT9U2VMf2BYQ3kC2QBf7GDbCayAAoNsotekFSkxTV76aZXtbFRq2wVoaEMZmcJ3pfJ3iH354znegPS9",
  "key14": "66dM38gGFUUpD1wqk7mpSaB8bfAkUcTYsrFiuAiB9S2H1v51yqcVWMiUJbcFF86jxRjP2JWv5yAfasECYLreBvE1",
  "key15": "aQmyrrXfQT5RJQU4aE6RoPinp8cEkgKNAt5iLVpioVR28p4oWu7Rn8JX1E7Tz2guqtDVDFcgpp5yMVx38CV395s",
  "key16": "z6h68CBUsRPJt2vmoHf3e54hJBDRcuR6ie2Kuz9v6MbBENoLyZk3AmFZYMWLR4fBP5AxdSWUN5HeL6q8zFs7NvZ",
  "key17": "39TabZSoSvsedoDnj7E3bbyNZrT4TqJ2a6R5YbDepbh7tkXZFbdp1C8yrwspWHMTecEojXrEwthrviT8tFT9yo7y",
  "key18": "57vQ2eDww6wYHkNQYpjVXjBCsHo8VE6V2gZgFvWwN6KhyCMiT6eZWGZoUR4y7cDG3FZ33419kwTM7bGjFz2XRub9",
  "key19": "3wooLxgncL26EwuyCnvUogDefoThskxLRd8YEAQT13ngmbczcVDk2g79zJFC2cDm1mVCvk5KnboWUNz7phAMHdz9",
  "key20": "2rrdwSP24gLmmhf5fSPcGWZwrUwUm66rcnPgHPuMQskMaDPSbs66TVAx6ehVK5RUrdfvWaeLf4USRyFfbrNp6pnZ",
  "key21": "5SEkupHQ2pjGKCwfm84najn2C2hNqX2iMomgwgU3N8jkzV5LZnsioyYJrXKVxVLzKYB4SsQuEH2BUAQjEZSgB2BY",
  "key22": "49JnQdCcKEFqugT2U5iPRJtQjRwB7BL3xHo7Bjy1wfy4eDF1Vm5V6T2b72aQoCtq2DyASUA39SnkEK4DWhwQvbVn",
  "key23": "5MS7ZbF62NAmLgpEk7S2mpopaStg5RS2QH98VshTBZzqSmyTFsvLnR3xLFgBMCD5Tdd7KPPuRLnaMZWV52okgv46",
  "key24": "4V1fnACZZXheYD738swuXSQWgV7hNLvyCp4NqGm2bExTzR2Far75aLAdD6wUgwjJSzeV2erCMCbCMzHDKXzLx4Lr",
  "key25": "qWpQzRiuEGyi8Mv3eBUzxNseaP2wM7Lj8SRPrPJEiqiqnZgZUeqiokdkEF41NbBkCNZajcv8CiWNPfte2mnbJxs",
  "key26": "2s2nrkJQfFakrWEVqNzpekuA9rRLtJitFTtpcVcKVSGxRYoLjrGjACcr9bEvVYhTZXxYbspTquRUCXxVsWA6BivZ",
  "key27": "7M5uc64C6DC5e9kmJCqr84Za6d5r6YsPSedMxLZAd3fn4pZLzKT2YYLwAjsBqWjjg3VgPHNbo61SktmPJuHysP2",
  "key28": "5vc5yVbXTRuGrdqHqELVB9nRUxe2iTPTrGgMP83wScZ7kVSsDRnPesqMKFQHsxjx947ou5NiLJTL9fz2tAi7pkBE",
  "key29": "2bkf3uVgsx49G6roJ2u5kVH6z6itpJXAS8qwGqAuuxZRdGr87JFJehuVxF17X2QgTAri2vqY8rPRtaoQxGV9RgpR",
  "key30": "2YNebJTGwXSZoVVyBQ62QFtQYWcyC9TwUpFMRChbrBUHe8GdA9BRUDYYQwZERTdnxCE9vhiVgwStysyFaTPFDaYZ",
  "key31": "c8FcioYPMeBUrhUWySsLNZS8wMxRusxVrGbY5cYyhKUZq4EFtVAUnPCbLChiCgPmmaCUUTgvcMDmqTUiqfBgWwC"
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
