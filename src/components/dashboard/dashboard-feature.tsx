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
    "2j2JsXwZepptD131Nk3DkgJ7Zd4p6Zi8KJbKJEnLYur4vyZf3Gs8i5bzRc3QEYM8JZstCzZ5CFWuqfW8XeWWwq3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uCENwzi8YrD45e1s2GghKb1FNUNnCh5a2vkNb4ioofFKd9on3ocMagnysnJb5mNWbnXWQSAJevcg6zKGgwDfbrm",
  "key1": "5YjCiHxgsonmfEbmWdEhhfQZCZjcue5WCdriXLNzyFKFwnniypBt9V4QnspNb2vrJXb6x3uNdfRqZLHPVm2PGFHs",
  "key2": "KS33R5QbBcDaVMN3hokfvc11B6VimQJyBAViCsTgDB6uBnY7AR29hDNuzQuVb661qpCz4HhmwVorB24AvMX2wFZ",
  "key3": "4NVpxXBWFQsisaGXeHaKQJ7uGvYTdsss3SCbaxGnHAUD4SGJiPDeZRcgfBixvxhHnYNWCteU231mCshNAYZwqV6i",
  "key4": "35hpcjZuUkVUgWD9rrJRTqHfJLPY4SmkMA93n5TpZqpg7tSqvVomp82C8vH7jTijJidKYAjTD9EkUjNW1TMAa8LD",
  "key5": "4SSC72QLsT6iSiQqPbFADrCnMC1qDNjyzgJzimTGAPDVer1ayFo2nV2J2FsLtSraZ1oHvqu9sVwzGMa1RT2D7Zqn",
  "key6": "5co8WumKK4WF6WoMrdBNyQy1e9j1f7x2fsPnLM19MY5uadrb1cYZ5VKQHhT71P1KosbHvqRsD41r7pEipG712qb6",
  "key7": "2foraaLAq7htqneFEeKVmJweeDML7KhMjSSpQmputUDpynq1HmWDou3iSgdPjMAhvVEyehU9Bsmh4mDVQoML9j7D",
  "key8": "3TUHoJ6yqMvAL3TxseTirDBgDTZhK6xNXUUf3K9cfVu33eRjs9uh6VwWkuAedAi9DU2Q4QzHdvnD2STog3LzUGN6",
  "key9": "2teQQLW1qbyg3itm5n3LuJUbsZG8pYQd492UX4d6iRdpmZFrCVJDDZo66etBT4Wn3q7KVy6wbFkbsh5qxt83mFyy",
  "key10": "j3moy61hrYVp5ZfTtdNdAyXmjdhmCd3JTqzz1ZXTvto6rrdZFHnHHVhuEEhgjxZQmCBjrJNxw8MVCrhxjCHg7d2",
  "key11": "5tgRXTueL2YaTePuH6gUdDtXM3GEcwpMKf8jKRiSgjoGMbTrASB62mtPteEMjmsNnu1Cf2jkPUJ8NJUKUNW9syGf",
  "key12": "rheuR2fCWEbpqY5vntLDWtfUHvqgkg6KYxXowXRXTMWN8SMjQyC1KNN4ALDoF9PK4gH4LkQkgXD9m7DSGYgyAcB",
  "key13": "2eGc22JADbi9pC36ZoSLqCSoZPvRwNdRaRuNdTstcv61VyuZeXdQjhq6AQiZWejDSUAsr6UGRZdHRUsLNMpuQ3t4",
  "key14": "5HTvLcKT6gbwoX97GFVDn6y1TZ4vaPduWtBCChmcjVabQmTX3oNGcXZkoTL63Ci5Ng3a7o5yHaJihMnVc3m1k1zi",
  "key15": "uBaVmJPsKFbMxz7EeyajuyQTuq9A8tJbDNyhE3vvvRxcCuGsxGMkg2XfEwDFwYKfZKs6mjxkTWpS9UyjJf9skt2",
  "key16": "54DVFbyeRWFoF6Wb4bmrbQBPkSntHZkuKmJ2JRMLrXUFSokpqM9r7vrGkKrSLkamHAoX5NvGvYeztb14gZUT2c1v",
  "key17": "gzTvNHQGf8Kve2xKnmWiQHSVJRVPtCCvYCEhAbPEsH12un3nTRVQ21AMdDkcB6xhsbcDAB3Mfr8rJrkGnF1SQGL",
  "key18": "YEnE1uHFsfRAib7eZozwXEWia6opbJZdXPte1FedqjdvNRS3HcfanFsEUwX7WJLVfqGWbeaVgChdJKyK5Zcn5Nk",
  "key19": "67ZkXgxfx4sC7HvZS2VYhYFrirqhCzYHe8gLp2xG7hbqqxAT77Gg8Qac4vJeRnkq2gy5VvQuhRQRYYLp8XeikyNp",
  "key20": "cQ6FzhTmWtTdBNQzfVQPuoNopufb6hNV3qirNSMvchnkLR31aFmePrUPcpCqPJSjUA3WkdHkUmkj75LK2d9h5xD",
  "key21": "3LjyFnc6Q15oLP7a6f41bdHP8WcM1Sn3NinN6hCGGjd6UApz4hg67eZ3X5PT4q8VtxVcbcghwtFzpUuiPapbKxwf",
  "key22": "2wZKbSnwekuiwFMNh96uSwKHQDRLsaCdCAiU3LFJk8GYfPjuCdGtv9FYpZZybkaRyFWpuC44VJmFxAYaETpDLNF",
  "key23": "3qDTFdfzVLBmTjXwenwxrSCiRBCMHnZ5jruPhszrPH3FbcaBTB4WWHtp6ZmTQKrxcVHc3qXMxSYxvGupE6oZHnZU",
  "key24": "3iRxCkwsTxQPxN6UeKXHesX2bPz7gXMnnYo6AWwYHHGbuKUjN4SMCkqu9qNnvBdrMPxfF9odLKDM8E4RUBwJQBfB",
  "key25": "3g5c3gLsDuufrUMajPu1cras5P4AFAnFWjBYUpU9oEpvWxLS2GpodKeHbc52Cdqf2SB7WWX2CZUDz5fDxLH6A15R",
  "key26": "5pBTxnr4mgaMYp3ChFBMGdD7ZRbrimqrsvf21987ebaTXTtYxjTJKE9epsGptBi5C8F3pqNR2RVHVfARRmWSLg4G",
  "key27": "3huYGppsczmUnA2U92chv9DcE79UCRvTEzXgZjgoFDLVrpeMfLcoQcLY9ioXroVb6vmQLiEC81duVQm2D5x2LJRX",
  "key28": "4yKjnjW4YiQuBMfWKgQGV6fwL8Wzz8Q5ikZgd16Yrby79KySbjrKEo6K4HRoo6F92esPjatJDLDBjKfREYv9hPV2",
  "key29": "u8dPFj14yk9enYz3rhGKGyhVDAAqjCsLDKYSmyYXq1Fiz3reMYr1EYqy3rqCU7th6yajbxpLowEnpWq6VZs6UNK",
  "key30": "46r6qDHH7qwrfBYYfzsd7hMq4q9EtEXyK2QT6j5RcMwzygCs9aMqUoy8RT1XsmxSM3GJVFQdSFdzaYpKBNBHj2iX",
  "key31": "46qWS1Z2oDSCVmF6uPx6ANjCoP6vmdLqGusa4Ntwgw7AVDB4U5eP8jpjk2q8h79AdtSQob6XvceMwPSeAxVhH3Wp"
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
