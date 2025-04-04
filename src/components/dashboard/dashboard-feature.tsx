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
    "2qegKAAhAR6NzYQkE6L6fpGXMn1eyPcoqGirBD8Zi8JVC9iKQyk9DNAPGTQLnusX3KUye3sJf2Mw81bjoFoRWH4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wJGB1SJNHA2f5MKnQm71xNfn6qXfDRp9M2BP2KoYyFQujhiN9aU5apx9xM1sRzbASZnnR3hnkXeVHEtTvsEJLi7",
  "key1": "58M4akSQcyvEBaVHsJjFuedduc1vM7wVs7Xw3pcZ11WoRpuPPL3ZqhtSAto2HY6itCVf5sSPejQ5Y9UCn8ZuUAMt",
  "key2": "2ExbhXHaWPzsxEtfrzMNdzp16Wf5JCiYW6Xtj8DUtni9asidxZ24qyiYeCg5MBJVnR7GoQhor36C5powNUT3cRMR",
  "key3": "52RNWpbd2f7gYRyBmJo31aZFdZkGcjGEetY3xXeGp1PNynPR7Ld9nhJQPkQLov2vsceVGyhL8fYKVoodevhZKyEd",
  "key4": "2ZBipsyeqSMMXiSfrvUQW4HgsACGtJ9FbCDv1q5RFz5W8jiN3uN9M6q5x8BLgw5kkUfXDv1zeF71LDGmqQxKQmNK",
  "key5": "4TCcvcpTucsnvtR1cskPsEs5rieYJJzNfeqkj19H8gZtQArEcDQnaCFzQqmmyL6u5KqDSyodgmRm2g3G7tHMApWP",
  "key6": "2otZnUZHoZBbHU1Yst7YWCuotJfEvdkxurEVpRFJifM4EmmnpEkqA5n1ZMY5FHvsq6iEsyg7uunZyvLbhMGT8KdZ",
  "key7": "DLWM2vqhTcjvYMRpj3mNS8TCrmo6h6wki9Koj54nUFt5HhHjcvt9mZR4xzZCsf2dHsCPvGfq4eCWf82jNr59H4G",
  "key8": "4RsKVsBWuEDjFZMNcSyAvhnWEGB77fn38b4gzd3SwVfK2bRiAAGrvgSsxeXtvstyocAnLpvYehbJ1iPmwKBeAGr3",
  "key9": "9Ho2nYAV5s1deBGyHBjJJH5METFdJfYH4Qo4iW2EUkqzYhmw9xbdLJAnKrJdDS3gEohgmSZdkhqqc7GkvznVXsp",
  "key10": "T2g5naNaYKT696AtVWdUdY4id6tUTeS4FpjzagYivBtnLASjHjDt8ouvcxjPqiv5qWbTx2qeQ3iayFEm9aWXZJ2",
  "key11": "2uaso283pYmyUh4EVLtTyGY4Z3VZpig7n5q7jLkbuvDDFkhr6xjoJ9yG2MVcVE1C8hZBfKBJNeufMJUTSbXNWEKo",
  "key12": "B1aTTTH13VL7T1QTwLooHX3ZyC1UduDznLbrLunisq8NTWLMUvugKDRNfkeTUevYbhE54g8F6Fz5cWuyT94qaFd",
  "key13": "3QXxvmxHaB7K16tgF9qmuKEkqJcyyFtvWHJ84kg4JQgsS74as8m2XgYNFc5oeXQ8RtZsqPsg25pa2mK8r6UZvUkp",
  "key14": "TkypjUuDvc6nWYiuJrEkGCF8jKnbrfdr9AaQ9yjyFXaBgo3BSZPLp63TSQxS5MdcDqPhSMQmvyekRovzvxpCVnB",
  "key15": "5DNAUMVKPWZon6wkDEHd1GnW9uejYncpvBaGv6xBqzM2Cbs6Fs4U69SfV7w9UFHZ6zAsQxCuNdCDPdsGQjfFuYoh",
  "key16": "oE5bXJfyvBe3Ake6UbGS7j9pxhq3u2RaSNdZDKKDr3gJquJAg5DcwhT2dsUovpMfDi7hF1ppgQHNNJHLhHnjSXx",
  "key17": "393SPkmWrbt43P5WrkU7vLEbJULiS1YUCocLd6o2fka42mBcPLAssX5zkLjvM4V2HnYbE366tYxjjJkjLUYUbhVb",
  "key18": "3TdYDsSCxtTtAqfwmVwq8YzvPd4ktKEz5b73gcZGXykYS7Rv5C8fBztetjMjYKFdXqMmxR3gUQPFyFvLiZy59bBQ",
  "key19": "2MxZSqTNXxMTesL7d1CWxUvwsYCxxhoxvNgunBwW5ZABzrJ6neHmJoW6xiLrw1xJSdyiKPD9rEqtmeKGytc6fVbd",
  "key20": "21LyZADo8BPQW7LmyjFztTqAR6cCezm7qxxoGnUe2hh3rPyhzzD9CGmMG5yScZuvrpgsCj5Bqh6DnpnU4ao1YxBf",
  "key21": "4wNfF9aE6KFVWduoqQYmADoS5b4ouFiVfwA4W5cp7sPN7fcFEP8PEjNQXAJuacpX4KADT81JLXaXCgmvmZbDso4M",
  "key22": "2B14v6iVQ3ATDwPPbCpPz6TeaKjzM9fYBiUcRXqktnroKbdjDRRg4nBihzKbBB1JUjT34mUEeptB5mj2M7wfPe3i",
  "key23": "5uVZ79TBRTuyAsv4uSD1e5CmnJWJXJGpW6qrNya8qnEuyk88VrHxMipnjW4kcRAywe93F6cxaLu6SayNRTvYvaBy",
  "key24": "fwioV4icZWAQ4gD3pXRwjYW4ugoscu1x4rBKVu5AKE2f3V178cTqyfmkRGbcDHbF42sYWNQGWqCR5sHBQ95arWw",
  "key25": "5yu7dT2C6Wi2UVaUQPjHyshjTEj2cDVqgn5CEckSKgjJR3PRX4fRmTcJA8xAgK5mtdibmqHGt59bR3sMP3CUW2m9",
  "key26": "2ZCiWHwQSgAmMPUrtKpWc25xfvKH7LqkjE3oqdwZ3b7ctiiZBVXLAS9TkwrezJRVQiY1os8fW8eSEHwryhc3d2zu",
  "key27": "65TvfSH5dbWigp4CHjK9pggysMYWL4xe73AZksgTCU9tGWdgrNMhGAr4eW6w5ZcD64ajqkkyvD774H4oWjfGmcgM",
  "key28": "HBJQxg1F4D9hq3qemwKKzoRaPX1ddM8F8Za5u24U3mpDrwmCidtim7mRYd1JXZ9PtUYeqeLG5LnvbRGNKi98udJ"
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
