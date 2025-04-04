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
    "35vab96BB5BiHdQJBnJNk1FkcCNs67Y6QotBSMbn97puc5MHbPCXtPgcF9FwsCPQTFQ3AYSLhKrCxnnxANCroUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ET5gprJL6WakDDTyVNnXjHjcwBqvZW8iDbpJryoqDtLPQr8zuwdTp1gjxzS7b4JK9PrsKeiboEgiR9C433xHejx",
  "key1": "4re9A8bBNR8Kq2o9nf4r5RjZu1PTTp5nZrupgECbaS7WKFZoSABEbUu6CHa9givEe19ER5yWCbW4Uy6v89avxPDu",
  "key2": "2Wb3KWvDN5LZNztDiN2j732xidvTnyDzMkxLoHP3YMjsJgiqormXT3csYuPjeUKqCwwDKtRHGqmzSUw8v73UfMCa",
  "key3": "2pSU8HbBzZvRs7C9bhptve6j7AxKnLDeXCqMc674Feek9FTySbz2yhneSNqRfGGRejzbUokZ6i1gVGgpc6cLtxUp",
  "key4": "Hf2WJBuhe1SebvY9VKSwEj9c6tjA5g7dfeuZzvAKYXZq6xXLSHsRKcpMo9oMkBE8mMcVsqnhsm4CzhuZA8GDpBj",
  "key5": "3aCzBAo825fb8LHdJPft2axQpR16D3ACAmCHWVHP1qRKK1XvoQH79aKU5Tsy9NY9ybLvGfVCFdW6LCyqEGnvXTrq",
  "key6": "nDMo5R9ADxJa3YV2y7X6h2u3jCuxoHezTitbkp3ez6McpHPXhbvdUCcYgZhDJpx6cAYjWMeyeRShRdsp7jSGke2",
  "key7": "3VJd9faLHSBpBbnmHRU86cjDPQzEJMbqEniGhrQrLVgfbAvJVKEa6BRyhoX15HkX9pJfVvnFamSFAZmkSKY4hWS9",
  "key8": "5WBNbSVX8u3wKTHQvc34sR2FrAyYSoA8CeedA26pKtcoG6riSRKKjT29GTTcf6Mo6NefsNdHJFFJ36VMiFLmZcRv",
  "key9": "5FfKcuAsfF5VNGt7whKmbZv2oNefuPrwhjFyEGx191ee2smcw5EiB8PfMD8BWVS2ysYxAU22mvgfJo4mLZ6cSVqR",
  "key10": "g3iH3PmZ9UzRsVtTUtf1G4xgovpdXVRKWJHcSrGjW7pRj2mdcegHycqUrjT1m935BmfgpL4DYZVhLa3oxUmhKih",
  "key11": "3U57pyNu3nNY7w6j1XLizJFGxXggTSYPfdyqua6nTgfSEYG3eQEVBZaqm1bsqkxSNWZVzEWNhEMBYYNY9GWSvz1E",
  "key12": "5cYccX1cew7HgLwfD7n1N6rga7q7nWdggRVMtdtiEyD3XTfdoddVmWt6rZf8tgLzP3914wxYiXfzbdV421WSQpcD",
  "key13": "5danQdtxXizWiNkFbPPdrJwAGsd2fc3FBBPTphPo4osLdLNVrkt9MX4yxYiqjiW9GBswX42YQxtS6TQGvZBfWrRn",
  "key14": "PR99UGxHmYmy8T3ECyqEQuYrXtQSZR55hTuAcrndAWJGu6JUXSSrrbtLqH8JkuhRnuwDkP8cQs6Yn7d6WpKX5Ru",
  "key15": "5cEygpe59jKak8CvPjw5HtE4r8zcLK5wtRSiVRUCmpFp4YiHCw3tDx9dNLemhnjHDUmYwVdoHMmkWZYdWNNquCVa",
  "key16": "2PrgPjuWJ2kmpL7hxxHzNot7WsHs3dw4NrpD8k2i4m6w6jKEUunJ5mZ67hMvguAgSCm39ywqNGPMufnTzxWTH4gW",
  "key17": "51bvBr5FP5kiQcvLQPQ81MJfmbfw3rgdow3GSsSFhFaXfppiexmuB3fHaCXqcZDRXpoh6GEvtwumdxNsVwbz8Qqm",
  "key18": "2nuciPgfaEgKjhiuSWC2Wwao2N7gNEuqQDVnoy91CBPgrVM4BKHoeD8hzjkBWEbCi2kvRyPN9Fva2F9fbFajfLAp",
  "key19": "2kRPpmL7BzMTPFV4E5SvjVSRaiLAGheDXiAAC49ne54NQBtNVHUAxsFz57ZawWg6XRriU3CwSmkbyuiCCgPeSKPM",
  "key20": "4pFk33DkEBUJW7PqJvbQY8BxnCNUyArb85zjeJBrfzR7cAURk3p9Uz8gpuXhmMTebfTCXh4A1UmytsNBPZyDc1CZ",
  "key21": "rssNqezJZ2dQcz3NRNRgiPuHYEKkrsX1oTM2qsmveCHZK3Mp2wmqWU5KTBobc31iVeRAakYABFFrknwHeLP542o",
  "key22": "525R8JAKNWyRcPQJMsG71WWF2uxzCp8vhS8NdpC7Wd71fJ3myG9G3g1fGrJTjgXqzG2uQDwRStLbMm8wUiGedyhS",
  "key23": "29MAZ25SXiu4jGHTTuTPWM5Z94TNSkzSpwqUMqjLRPwNn2GhuFE1BP9YUvZNh4U8KpKSeiJaMBMLBaXnxg7dygeB",
  "key24": "8PA8hdmoZGEayNeutqMrNUeakjkqs5nzj8DGgnMAXyjhGvWUZBwdD1menMXbSpyHyJWGV54ec4WDDHzSUk9cjCr",
  "key25": "ZoEzNwtA2xtX7z2XcewZe4ZABRiofuEgU3hwxwfJCLKnnc7nffqcTbQ6rS3q4VezCoGH6xuHUuxMt2WPiBaioq5",
  "key26": "4WGR84H7nTuXQLUFLZEPPh7auayQtnK9V585CvQhqnzcJdhxBxvcJQdgFmV5ecRCUGbXnwEfHePbFe8GDKx49yxd",
  "key27": "3cq4xVn8nRE1thbeWgNunazJvFbk44iL3iwPyeq78aGQxNqPC1e6z3gsvHeEH2bFV1F4YM37c5Dz3xTpaHuobvgb",
  "key28": "GH4dY7cw6DLDycMUseqRc4CUSztBV1HurfdDegcLiQkBQsc5HkGBpUWTSLNxm3WQVSRcbXLEghEPLpUiJ3cLu4M",
  "key29": "4NeibMF4qW99XrQMrUdrK4YpBY27GcJwMe49YmuizKmTASqndNRfMhUvqxa4Xzc8rhyGqjVLmsfDrvcdmKjt3RM1",
  "key30": "41RdM9sJrK6tZR7RHaUX2naWWAQ6kWk7AZmobRh3kKHCjAA3Z1bvr56H6TVmByw1GRGtZDucAhcvzKnjH2gGiBHE",
  "key31": "3batjtBfKfaxQVom9Uac9ZkbJxfPehPaFBcxyafZsNQE6Aw3BRxwnEqrJJRD3RsayaUcLRkR4Nf7wz2eNh6gLvWH",
  "key32": "2rpuWnT3g1BjiSmLXM9muqbL5bJpXxyRpaRnpHUjPjVx3sRKhMjyT6YaqRttEE8ez1aMqcdkwWtPVDekcG73TECT",
  "key33": "QfypDTHgUwkF5x5vx22fiZeRMYj674X15dUnsTmjyRkF9jM1S1ZwDzYrRKKQrRQ7DUqo7Gz2LFNEA9UtwRcJi6p",
  "key34": "2KmRSbTr4aYSaozjdUrgFgbYoFyMyqJbvt3aYELVWeWP6S4y9WoQPBf9tiXz6MnSQ19RfMn5jVGgZF7c88sZuyXQ",
  "key35": "2GDoz5afbN4J2JsaXBP6eDcrEjYcqHEEmrFUXbgHcAXppWrf7xFRuzJeS6a4sZ5x8BSoqfxuwyHTZMgBmcpJyNCN",
  "key36": "21D9rbc17PwgGdMn8rgpn4pxridwengxrQYwiyV5bY5yphCL1a2raMftFPcrcEQPfoWhGEkkWVewhj3VHjBkm8B6"
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
