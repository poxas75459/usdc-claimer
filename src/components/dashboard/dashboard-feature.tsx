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
    "zNCFTyas8cSipsLN3gzPPfCXiu4g8tKmSFE1sLhxPGuDiF3NyiK38ehmzwiq7tGtwm43c14ojPdm9Eju6hqL3EQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rKcwkKiMiPdxc6TcQ5tPVtgh2rKDvMWhBqEXqdf11SUvuFqhZtdhGLZmu3xZj2HiNMDaLkrNSvcug6GrHPeiwCR",
  "key1": "2xXAkgqLTxu29sUV2M8j25FMBdkTq2ZgsEp5rinmj4ZyXbwcvQaBboQFcBScepV9FDYRe6ZgiVAyh5YdBP3NtJE1",
  "key2": "42v4iyzs8weCAiS2ad9MhDP6C4yoAybhf7s3WXmKE2Mt8Td9REpt3dzh7Qm6fE4i6MU2Agx6cznXrv7vgWGTajEc",
  "key3": "55fgrwv4qvGwhmYbYdXQdwXgL7ccoJAfEZQSQgPBkyCd4GaGei5FM6UbizY9vLNzrVqDGWvTvte7RMqiHZcKbGF9",
  "key4": "55YqEqzexKrXJ1cxcJ48BkAucA3YM8iGxFBS7jartpEUeSAshnvghrMQsjSWWcrKyY68fb5LWnn6TqwVmtoFKKiM",
  "key5": "2fN1vHHLAL84htu8nyCKAKDYZAbjYcYy4w6v1i1wXg3MnYXebBdkpP6fHmS5ZgCv1urCBXcpXAhzHJXjqGPyXd9s",
  "key6": "yu3uXyWK82LpZWHBfXS89PUaKmJJbDxPmTDWFPQnZP3KiLHN29ZGuUTY6PuAjSgHbiAbs43XMyJ9ZjDJNHqMnKr",
  "key7": "3r3P58H14sS3NjrdcyeaEtXceiEENq1ben4qxdS3yg1NBCayWMoeAN4fyN1dg6He51SmvhFVmo5aCUsprMnfyagk",
  "key8": "4iD8KAwhXBUB6KwjSKxu86M85v2iAf9pvbzHemE2Es7wz2Vi3oVbLJ3uqTfQuqVddqtCqVE386DzerYizg1nnAwK",
  "key9": "4eU8pbTJvK8WrrP79b8WyM6LFKghYZooJkTkngBC5t6341BYuLcmeNJbsqeJY45wyAXvxZxogC56BZuhQqvnq6ug",
  "key10": "1UNim75MVETuNXu9bw1SwzGHtxzSFX6Q8m5SxBgw8PesrqqVfrvi8zsPxuR3roDDgkDEVNUgXKqqAGVMDNddB67",
  "key11": "3HVjEci9MiCm4UZSLEGHZ8aZ3usR4LxSpVwXcTTtZutotRaezX6DkvWbx7Ebsu1vPeNZ9AdRvr7ot4btL7w2ztbn",
  "key12": "5eXkocsgV9jSKcpHaCd1nGsy9svG4mikVcx8ynvDSBw67zdXLJqmiHYwGuysWpbeAUVZhrRZmNQRNXN9T3r4az24",
  "key13": "2hZR7zUB6edbq3q8TBDosS7ZzZxSCrYLodjpJsGjjJSA2atUn7dxoEZKeqvr3mGcPbfWGJxQKcYbXbeYfa7BLo6g",
  "key14": "2ZaZ6mHUnkJeZVAZqhggXXJUaRLVf8JBWNfuUd8pjXBANyZNvXCbaPFWP6Q1SHnGqyD6XwuTFmP6XLGd2FfVPLaz",
  "key15": "4U4TyZqAVGio9KsCn78kcFKYzWXAaEAn3hZscKDPL5Rz87SRgM1vCeYmDXBTTmrUY69FUshP93diKxFMaAG5pSqs",
  "key16": "5GoEsg6XYiXw666vVN5AEYzeHrNxyhArJSeP1ZPayWuCEc85V7KDjUYATXGjjTyUN4fbetE96VcVMuRZKrA8jynq",
  "key17": "4CXAadDGwJRucAjyyS3PjcjFDQgdFsSjtuj5dgdhUQ82ZS1hKqwoziPTjqr884adendJkgTx6Q5y1Xj5n8XfMxYV",
  "key18": "3oC6mUgPrBsLwQ8CnFWd6nwn4gZNg9Z2TABVFoV9m2LYcsHEBFySg6CDibujPg7bELB5QcFyuwpiGmRuPndug6A1",
  "key19": "vY4Fr5m34abQEpKJR9zP2VQNSPx3tDtDAqtC5gEKN7MxRrsYEqmsiTJttuGfXgPDPNUCj7nxjyGfpDtNC1cdLWT",
  "key20": "3R8B1qVRP6fq5Ce6dP5tYHq349KxThPGqRS4jJLfGLUUKAzWu9UaC187uK3EJPTRo9Mys2pp8r8Fa14nBUsJUNHh",
  "key21": "4aSYdBRTHjFYoxuCaQkDfK4inTdzFcJ1gdFujTDjiANPjVuQCHuT1P7oLUJVNNUELgFLq1df4oT5DpWgJf1y4S1x",
  "key22": "46UCtStPMMJZDuZKBqVM6URFT7ZWVMNxHhR2xbSKtTm8ooBDdtmqtsQbQFSSyLqB59MLE9uTrVE2Sz5dmKBvDW2E",
  "key23": "sgxSr53bdCpfeArbADjEpfyVBJ8XU4XKNskGQgVRgQYponG9mkzaRfDpkfpKmWY2Mmk1dRbHZUcyL8b256xNubU",
  "key24": "DAaGkAU7MnkSR6qodRqCuRWmdw3HyYP9eZYgehzmbfy1SyzBWwWSVzqMhEfHFm3RGXuW82sPAKeHLtDwB5mmP5o",
  "key25": "2efLn7mfCm9todQkMJpkZFV3CfR1Mt73UTYLnorkEk4nchT6VLXAP1gvJmudAT2dzmUqdreYym8F2qBfsgTVLZiJ",
  "key26": "4KASat7eLg7SCAYPrQraoKfQ3gjToMGtSbWz84z9TuXJJqVXCAXiBGiAXxEtRTbijKg4rwGtWaiGYu3QreWqpWc5",
  "key27": "pXdjQiNwCvHzZms9ZhyrcqmXKedfJCht4KhL2KTDdasGgS93PyP42CCaD1gP6q3rwEbmGwkGH1fN4dFknuJN7Mp",
  "key28": "2zauvMDkewnknQ7rq5kxXVWeZaH5EuDwVwy3bkXUwnUG7JTXCvkttxZm4PjWNxjrJ68HiA9i6APSB7Y9KXKP7v4D",
  "key29": "6P7sNeBY5uJiw8yDbKywNXMqhiyRDajpsDBmFryG9j1Ux4WfyHcVrcTNRooM7AMrbiB9cWPB4D6k4Agv9rBnSLr",
  "key30": "3v1L9zf34KyqVn7VCZG2KSiVtBqm4bYdM3MJx6kkYYef5KSCMSfJ2Kk9C4A8xa5rKPgbN2RFtbmwZ2dWdSqL6nTy",
  "key31": "2MiTKp8733FLRRHoXLnaSz3KQvoxAHAemRzpCau5vgiQHnJqYvJ2Vkw9wWokaJXgvFgmEaMqP3CQ2QDQPqJB8GTa",
  "key32": "51yjFuk8ftAfiMuEnoY8Cvgi1ByGC6LeZdogyNjj7xyWYT4U3cx8sJrD3rrAkxaDGkY6eipoR2qshoeEUg33zyEu",
  "key33": "3rWrHrUnWVhARdnaJ3LqsJRKUHQHxkGpVNLdnt5JaL8XdndPTiUo3WXt3bWFmSfiEi26p9hjyjeuhvHwX8M43mmc",
  "key34": "3E8wRADvvtrhwBtt6xBQ4TX3vqd5pmxib92X8kiBYBTYh6NM445gGz5QBzLQCdsFRHer6JQH2sVupcDiTxc9DtS",
  "key35": "3cZttTKLMJPuTsbSekJeqTbf3qNYbUrwjs89cBo2XcHRwYbq3n7d7qvp8aq7NwnXDvUwg8tSspChs8Jdp1W4Cdqf",
  "key36": "2GesdoGzmsu7ENWRUB7avj3SrSNqrFgnhBeYpzyZBP2LkEv8PpDTXH5nLSU45DRMu22s4RiG6AcdxRJSkbdXsPQy",
  "key37": "4mSX1aw4GgYUNUcp4ERfpquGipa77JCNaDdDowgJvfvXyR5yaawt7Mz4BZ1xzqAfmRdCBM1WUQiURe69skeVpTCb",
  "key38": "DQJ8yQJMtEgW3UiUFzSkmuQYEu3zsGoZTqt7KVTPrA7dydemsqbFUo3WyCv5PARQDvQRxzRMC3oPxFmKLyFPxcE",
  "key39": "4BmJAN2s6YhZ7JiJKv8u3Dw5DfijZTEokWVC1kgut2Nysp5MNGfHTDJ4HrcVuYw8rGGM2Y9JyTfMVmAdM7EuAVk6"
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
