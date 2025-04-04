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
    "3JHwpRXuQSNmhgNxo4ubsRBW6xtCqDQuiTSuK62r2WEutwWmEZkoEQ2iXvNBmkLFTaaLZipBp8RKUfaXwf3WyZ1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xtfo5rg4WhrjPZYjMyRqpt6oQL1DGccEM8cRpsiQNoGLKTHAW2kZuMcPgAWBxxQwYu82Xh3V1Ttiof3Dg5JXVhT",
  "key1": "gZz2LQJy5K8d7vusGGLuQMqJLLpKZSXKnomSyikK3ciKHLrKFMvyU3AwKkb4ZTkZC3aeRGzEesdVzxpdLpMT4V8",
  "key2": "zjhyhDkMfysvuj5sTkS8xFahVrGkDVUaSUKHcV1HAZC6nfMANmQTjy4ApmEXhtErxm3y5S8cAb4xTEYGFByyfiH",
  "key3": "2anLmSuVRd26PLwREbGioD1iNeTKyxNhuXEX6BQgAdzpWB1oUb8BNJ5Sw2j5xzpi7gU1y6aiBEdzoKjrrJCEPrPT",
  "key4": "U1meosMGsUS9eCTBwaxDkjVsDeCUTMu2kUCUoyRNXi7FbfJnVvj9bTmhJEV9rCCQRzroGDjXZb6Rdcn5Ds2ZYW9",
  "key5": "4RJiwCr7mD7dahqi6sQyG9ieFJAMcuoSRe2yeASkSMCRyXm8FRo8c6Xu7885A9F2RHwsQP7XbcBH7bG3kZRKTkGL",
  "key6": "2kynkxwaeStKQ5WKquHN26XJKaJxDyexPkjcCS4MNaHch5E4DnyH57J4CWNCb7NZzTddq8mVfSQkVgTrejqfjrTm",
  "key7": "AiYxx4edngKqS8rhWq8UZG7krrFNKXakNQGGnFmJUVw6QuzcLydTf8ivpvtDq3dchBCfoJxBPb4EjxX4WaYBqvv",
  "key8": "44ZkKsXfhYMuu3YqSKdzW1vHHfo6zBZvY8v96ryYBiqhHak218EHBUgbnMhD9RE7HzKA2sKNfgre8mRtMYqjtdy9",
  "key9": "2QHoT2L29XkWfMy9EpRhvUeenLuwMXub3VrQig1hm1B9S3p9yEfQzHKbabbFNA9m7hP78W3Zt7CqXxSzXbo38nZr",
  "key10": "4K9xi16EcNcayktH5nduLnHMbgMvnBkhU6SoSzv8kXBZeukRihersSCy1PeZZqnT2H4AJY3nbkLW3PUXbvwphXBf",
  "key11": "3zmGrf8pgVuftH4ubZhvTRYN85z4eH354AxjjovoNoCFw9zULhzgmZJFc3Umz1fzA1qTzMfMmuErnxgtfhzQpW6x",
  "key12": "5uVd1MSgPhHfLwjJmjWYdwhu9Dt3pAk9g5ZFmjtxThYChCYBMSRLvVYnsJ5nt5bgvmmYCL6uRw3sPQQd9doUYNv2",
  "key13": "46QxdkyoQ9QvsPQTKV6Q2yoqVgFxqaTdHcDd5CbsgHouxn4ykAm3K7187hGJ69GkWbWysJCayZxJYerXveoA2BqK",
  "key14": "5JYyjDxffyY8YFMxSE9MBC6oBki6R7FLaDCQz9Ghw2PdcM9SHXMdApGQegHUgH7jabkXpAEXc15ZJVn3pKkKSsGz",
  "key15": "5T7mca7gpTcgEoNnDUKBnQ8qzg12MYRpRWHCPTvoZquVeci2RKjrTGv6JXj1A3WwTjFvY9SFRTmMTGCvmYixt1ha",
  "key16": "ttwUsqND3bRtfT3cEYVJrsoMwvkTdfYksHZqNNzbJiyzyqWxtoXttW26Kp6b63ZUp7zF4PgBZBo2fQXuHKVyocA",
  "key17": "NfaHdmG4TbceAnVovc5p48aJTfV1kvSK4AVkvMUYizgXmALk57TEJuQkoufYwvBrAViWmqKSLeNxHaqWDwbNFdG",
  "key18": "4T4XiHAZkQeDRWUVDUCQGXyHQMG77M2geDhm6VNgC7peuLttRohiejbdCof8ivdmMLssq4H9cY6ww6HkUHcyGHd5",
  "key19": "3pCSvgyghc4WaYc4a3oCM1b5TEgKgwFVCr1N5xiKqz6Q5fGEshmh72itoH5WCETQ7a8JoyLWZK7wJk2BnexBfxwt",
  "key20": "2goSiou6FHfDPm2C3viyn8hNmR1Wm9ht41opbkMTe16k5HMYoJ46szEqFVeYLm427zc5JSsHd4xyVhyCkPBw9w1e",
  "key21": "499uCrVFcC9Wiz9j4s47E4ErDK6epuk5nuhUEniMH19w85a9xgqku3VEGz6EE7Ew5QqKDSWfTf2P8EWaNsdubU62",
  "key22": "2PNxmwgeP8YaJFFSzpbRPcYDQeWrT3HBirwzxxSMpapnwowKfwwjAWT17FoQCwrufiYMtWp7U7gqCxatKrpJugdG",
  "key23": "3ExkVov4X8D4m8zDqi1RgqV2NGiH9FmLjppkjEeUkSzEo5YLetQ6PfXjy5RFHxbmC5SJkoXb6HcXpzNqiHVGwBjf",
  "key24": "2zD8aGbU1TbpmCJ87yzWTZmm9ANpNaDz41ZMxyEzy6ktD7egdtqH8jC9Qpud9MJw9rnT92h5jDyPTX9FDKypiM75",
  "key25": "4Hh5npSC4unaUHqS9Lz7fSVwvV1f7okcEFhkwV9fNQUthwK9K5X14NNRV2JiyTjSYoQxH3xcJXvi3jkNp4qeqmGA",
  "key26": "4NZV2YhCKtDzhZCMJaPKMJF97xXQBrk1XYXeinEcaTy12T6AeqntqbFnPaeF6BzNfDnYSEtc8wdnq3JGSmS8w66W",
  "key27": "32Y1zy8LZSSi7qWC7izXJibLuNg3uNQMWQZCRRghTUoG8XyVupf4i5fApeMHLBh4mt8Lzjdx9zEndbhua1F59cP",
  "key28": "rGN2A9XfWsKZYyUnDgmWPKwiBhGXjCkutYMNT8a68GHDBpcUXRYJPFGAT3e6y2BQyoLqExohDAE9BTwH1ncG6TS",
  "key29": "67JNLanv1SMYSLEaXykaXCzBWzZ8KQmAKgAJa3ojC8YhcdiHfNJh3KWuftCUze3P9VQkG6VTMxs2kDrg9B3LvYau",
  "key30": "nQnWChYtVhYMtRPCiP52sfufxbezpK3ZVHkchkcJ3QU6yDvHVNXUbnVsTLVUy3oJVjcyE4GwY4mBwDfciDfQ4bd",
  "key31": "4HVZCssQFGrzdMZ1BFxHv8CzUyPoUtpNZpcYwohyp4YbNgxrwpBUhpuWxVK6SgsDLtx5qASoGPMFQoK8HELhhcPt",
  "key32": "3UPM6VRuwSr4tJoHd3NhpaRXParoH1M5BTJyTLXeaWPYHkmDibTYcWLD3HvmRbqGLckE9qjRZGrSf6ieJd5YAZs1",
  "key33": "5rbrjoFBDpY2Ms2zbUjuiPH19EztbkuVRvBXdPcf6PP9Fed2PjEeyVnnemqQGZDd6webxQjp2azjTmPSzPZ5Q584",
  "key34": "2eRdA5A6rEN8Xk2eoGksG6nzMRJ5MjPKUbidNTSqfyDaiShphTguVTybJNAhKKRGJwmXozJ7WXRzG2an4RhS6QwY",
  "key35": "EcNsDt3Cf8iigED3DEREt3uniM4pZUjrekBQEVVxvtchCQB1L5LrADJBaFHQ7XMzD4FC6d31emPSSXWQeVWYyLV",
  "key36": "WEKUk5EgpuyfbZZXG9yM64TUeS2A5ESa4oyMfhm5p3MJxgyBL1QiwKDFYELqvepYfJvabjx7ScZCeXF7xn2kc7Q",
  "key37": "5BFxwve4twoiG9N9Xk82VcL9nQTGVEtVReZt6kE692W2dwt88onNmAqcY2M5u4gQobpwvd8SzrP57jWPQZ8hYrNX",
  "key38": "42vz2HRZtGSPnuXmi4C5dH4ZfiiYx5Rn2U2qWnERqjdMR3xdDxdLcKgDc9LkmGozcK5B1nYkANimuzXn22SPEny9",
  "key39": "23aNJ8SYr7YEWCgbxYAKDUnWRru7sM81YYpUqcuCqNR1yeds7wARBXa9bvom73MkMz1Sx9P9fxmEQwn2zZHbYSVz",
  "key40": "3XWwXucSkZ3hNymDDDYtKbJhczSZp9GcLQ7mz7q3dDoSzZisuTSiYUdhAVEEQL8uCmMAggxzoGFjYVmTvVL3hMPH",
  "key41": "2zGUCftk5iAjVDxt6SWmVeBJqs3fdgD7HroZGhk3YGaY83MwLZ2mjXGM7EDWz9KTFdL1CabL8CJTvduPKKqbpV7z",
  "key42": "5q4CYQ9AHDBQkFBTK3sZ4x6spULvo6KcRDfVD3QsSHpeaT9EqVmvCBq71dKiDvnndPKHEyge3YMpGDE8q7NALnMN",
  "key43": "fBtd5JTPtFA3sUvUdHXWapVK2dQNkZLkLSDULeo6pt3KBNnPS4TB5i8MhFUGKEEEbJSsA4rHZaLYxHD9dBq6oFf",
  "key44": "SMr22oGVyC4s3vAMDGsyC4RFZyW7SVzocb7LhMg5RjMyPLFJNNknWxV7g2jhY2wgsSWr2BHbCmmDP1zT1EEdozm",
  "key45": "4wraHTHSoxt8746qSEfMkcPGZCQ9HSGGtuZrsu4pqzpQNAdGPDuq9bgTu1JisaqpXQSQZfPNQ4de9G9H268sotz7",
  "key46": "61Rtiim3ZYkbk6oytFh5KEf9rM24r3d8bUEWnjjEYpi6UvZKwkbSfRBRCcUerpgkyW7vtcKU83jT8ekoYK1xaZUj",
  "key47": "3zoegT2nkD9bQtBa3FzzWXdASDe7wR6WJ7VP8aXkkunv2GqNdNeUNGwCumZSHRBH2PGzUcRQ1VPJ2WvjNbHxBCpQ"
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
