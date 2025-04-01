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
    "2FTRBLUjaKWxni223wBX9yskCSW9KHxjSN33eqGucqxQovttvFY5Ch8nvh969yNnDwpJ41vziSeuALSJvsQx47ES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tzsK3A7TcefvicZjyPxsYwYEjaGMHPUijdjCGLJdfanhsTqB41yfVmjT8jCbbZxquoB6n3TEFbqV63V7tCUwSuB",
  "key1": "4VtJ7WyCWq9KuZhc9kovwamycg2kN2XPDcbiCto2hkBUCpux22jNeMBknGqiDCunyq6vEBxn9WtZdWGHTp5kfHKW",
  "key2": "g9mHxhDvbR9ch2NfNHfYQE6J9Y6yFxzzkhT6YRS4gZQDGmBnQ1CG12MkKAWB3jixFZEj5zWvy7XLAJKPSruCic3",
  "key3": "qRG6RpEgpFcdUdzdTP8qaWsAKVRSLD8d8qpi3HRixdRqaee5swpYJ4HSiMUoD3kVMvTPu5yGjtJSdaiAbp29EYy",
  "key4": "7qG5egsKirhWveg1FVhp1s8vYCqiU8gzvu3EdQRAyxefsgUyNF96yX4dkdM3ZudY1biiy8zMWzvdGnZ8JLWwtt1",
  "key5": "MkHnuRNKvcAMPB5e4jn4LemTTyA9Qd34Pg9pE515pnbFGysd1xisA7Gzp6nZ3Zp4RujZVh1CDYzTmxn8z1vMj2g",
  "key6": "51tFywvfDFP8D9jgSrCiEqNvgwTyWj1occUQ38n5VvCgYjPYouTwbybUz7cbHibFEz2ZxnXiyBfas5emBbx7VAWE",
  "key7": "5Xzwxkt1xS2qYzb7mnwKAD83vvxhrwvradW6jqBEFoegRJkgrMFcscD65GhMnD6iDy6UzsDVo2XzzQZwGFzCTX5d",
  "key8": "RYMntUVeppK2gwEgurEZxoqdvgyR3YDZSQ4z1TzYDxikJHAmvXfrAAQDzRzFDmMR8chENc4vv1191gwCnp9bqgB",
  "key9": "3B5TvPsWoxkKqgE12Dvpjx7epmA9rPPiqfzZerUaCF54MEXjB3bbk3Hd48Rh83bJfBCAgTNGETZpQQP9gGvEEPwQ",
  "key10": "4ZLQsWRGYVFLPTWHVLFyYmswwNtSKnCCn3mSitY1gdCaJ51DYeYACrCBVw4XGXgBGj5p6Y6ynbE3f9ApQWK7qa3g",
  "key11": "5ofXH9L9XEn7MPkGUZFBFYmFnP9ySZb88iqrRq5xE63TLpTAumsPSTkbpCWwkTLs2ai98wsncuDajjwK3DuEVxaZ",
  "key12": "5AomeYJYRwM73DwZt8o24GR2T6WdvkKsXRCpyfeMQo72iGZBY9wrRRLE2rZ9sSHv9GJ54MLHpuw76FcjvNe5xRM4",
  "key13": "3jRKDfcDQLyUos1P9oXYQFsovZAX2WBW5RHup8BJ6MfDsKgEdgZpZLrahoK3fd9QTSBrbbyhvbQHtR6ZA4WYNsXD",
  "key14": "4TiJfQy5vNceo7mzaZSeKfC72K5oL54GojXGEQRPagmqv4r6vHbqvVkf4VKZgzhLN8hL3qfw3PvD3wHSc41gkiEU",
  "key15": "4AMkiUTfCCjkyNzgZ2tzoPrhbh3KVK2xBmsiQ6MQDfvX43YE6bJngF8Cg2tX4p1G6bCkkt8QP3U7Rvg3GWRfZhhK",
  "key16": "2gR4NhDhDkpyjPP1DUzMsH4HENXPE6UfHhVZAx2qeYTXrzRfsLUmnEBzYFSuPxnWUQ7Kfn5WrFBfH1v4LpoRJvc5",
  "key17": "2J1zABcALz8acByFnmuQ6Pwx48hJmyemJBbutxJ1uaAdgaPpfbuSCnjJZNMbh333fYECggFdzYCMGn96sJnSgCPL",
  "key18": "3gMoQrkFeoottywJ9mv5k913ZGFuQCMTvZGCek4zWiWv5GYNzaQpvbpLyBV3NJ1MmAe3AyirXJRUgaySdnkoNPuy",
  "key19": "341HMiY7LvRyP73C44rFuFkepUfAzDh7PtVcZxtP4NxanqzNKnRd6N2YGe9Ermo1LFLYqgHeLyV5w4MmXJdnMy3h",
  "key20": "Mo41kpioiPbRZ77K7EWMTighAHs8frMPdv9puBSjTsP3DT8VCS7SDvcyv1Yg3yiDb9bVexQKfWmh5PvryjDYCBH",
  "key21": "2EM78qUPm6erafvsb5j7u9bLFSp2o53aw2xa4QvsnZ4oN28qzzCZD4rpUiCkCVPwewp1yoPY7mwJpBigVzzNLmZp",
  "key22": "3oVjTxNrVVMueBQuXTHr1sX3SA7AVeUkVg4LbUjgYL74mNiqNyxTWPyqC7KFknxD7CcfCdDvH9cDwtYMxnFDNnma",
  "key23": "jzsJhSqfpsDgm1eacr5Yud6gjiSK1bGsqvjZuPsSiQjr8ui5b13cf1fBJ7L9zFX1Xna1bZDNCxQktr3A9HAj68S",
  "key24": "4VNi2Y8qPvwLWhoMb8ED8uXQp6nwUaxx8QxqMYVHwmLypjZCcJV1PhTDPqc4ffGm2dt1gT1z7zrLaxdKLRAjduc6",
  "key25": "2FW11D1Q1Z7LP8UFaK7WTxdyMmuH8rJfbiY7758F22sNtNdpkvMwtvG51vcb5Xeb1LsPBABCSqUzt3kGZopn4Gz6",
  "key26": "xAjbpCZCyzJFPNR2Kh8SPXyf73UASDS1Moi1etDT9d7TeuHRYCDmg4S89cSo6w5Xf5HBijnEMsEf8xyxxT3Rs1X",
  "key27": "zDpuMw7K1Yi4zAj7qohiP4p1XNPS24HoUu8argKSh7wYYe5e6xy2qCqeQkFxdDGTcTFkPBKqpAAq17oLENtNAJd",
  "key28": "4oWHXgRRRaWqtpYcvdWpMjXd664buWvdjH9rpibpeDBVPi3HLuniEdHDt8TEVCW55w86sEfJyScLdLkucSv6ZWvu",
  "key29": "3ad19JSuz8pw9wsidv8QFqNmfNW196oexGzXh4WQZXr75VWTiApEJy14m8WQxUwhcNqNLZ73UoCQ4SwNRk8kaHTV",
  "key30": "5kxiBZC4nx4RZ64kTLDvPHmqaVYTay87tizBKik95UfBxBMVtjoaRYWNiKqU8NYsNGzM6C5rNRSCLP2KCeG7Qnqg",
  "key31": "4AsVu26u5E4EgpxeZ5LMS4JAnJZJ5tW6VLMhnXzAV58M82eVfEjAqwdbAKuwcbn2c1Turi1EdKpHpME6McimDsvg",
  "key32": "2wfN7tRfUu8FkDL1cZWhcsGP1i8VM12a3mnwS3apXbfeaEzZoErWJCweU9QV1C9aAAoe18214prTgmst3uMiRS2D"
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
