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
    "4ba4v6CXyJ5e7x9rA6wARygi9yqFpCwut7KyZ9EJ65Gg2qGoX3Z9Dzp9RN84DDKU4g1TuTgmNQGQT3pNqUqCRXSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zWv2h2cY18eZSkGqU4oNGDifLwqsH77bZMLrKzj8u22fnyJF7TthQiNVfWQZkzgZVwtMnwNrfoyQnpePGorAnHA",
  "key1": "2sYznohjK5C9YbNKRmLPz3hrRUUCa42TXkEp9RA5fDXibYu4tifEgnZabAm5jJBfbD7TVnzNjjdBVRexUNHA3BP8",
  "key2": "3bXSTo1uW7zzZtVK4Hsy3BDKfeeovxVD4RJ6iB2U8fkXi6d43pJDRZ7pan1F8cA36NuRnSdqhq3nRyuS2rSkasyn",
  "key3": "BZytTtRE8RYLUuiu1QnrggWdkx8gx3ZaSLJfjGnig8GLJDqJaARnEnuZioksyct2cFmx4eVJBWkAc1x5Qkk6WWU",
  "key4": "ZoruLGiF3NeSw3faom3pXRcwxSUEbV4nTUGq2aZj36of4rYJg5tDCxfWKaZWBU2BWDHaHaLX29HDvi3vG6DARJm",
  "key5": "5YV5ih4EU9KMw7e1xQVipmYAwFtz2CzrPwjyjZ8Zhx6fLe6iA6gzNXREczmZ5gnz5GhncKjUh2JPdpPDjA45genF",
  "key6": "3FcbCVUv3DpeohpCRaN6eVq3KFXNQ3KGsGuAFviq5oxREWtw9qwBfWpnPb3JAsbpHNXLy9KdKcLfFUX94CVqkNc4",
  "key7": "xtnPdtESEEEDGDj8PYtKvL5GwT4XHjoDs82iWUw8BJfpuj6zWoviPCx7QQSkkYNqxt2MVEpXRYNoUUYVuQejYJU",
  "key8": "24vyvF9WJa5XzVCbVUmD3S6kS8zoBPAxtSgPMbkjv38HwrT4c3nLSbpQaYjvWtmLxiXQ34sPjRFpxq1E9VZpQHbb",
  "key9": "2xyUGD9fPkbMhpaJ9cooNX1MTh1pViRC9uqDDvHEZke6HuAXi6Govw1GS94m5gwnyDZfScARnRf6xbhCpDubzoyN",
  "key10": "5kCWrLEdDpH3tjAWCxaTHbjXK7XETZc4oSdW1QFTQaRt7cjgurqKRyu4R8G8xx2fqKUvJch3bpjbUstPyJJiSA1Z",
  "key11": "49uv1wHFdzr7QRAvNPJkHHx8Wv1zUGXjyJQJkV2aH36oK8ttR3SpuFpp4FLPEn7dkZsyiTQ1YBNUdTXxvQ8fb7Ag",
  "key12": "5oKkobuyhwDGmAywEmkiQFfbhbuHFMUVuD73gtZvHEBxX6qiwok7WptyKUGuk2NZfsoB6nN8MDHXHuNtw11P4CJJ",
  "key13": "27V2QtEomfiwkGciBYpX5uqPohpss2F7QVRix3q4D8cAnPvys1BegiUn74o4mHq1oZ4TESnCrBFrHXFZSEL14Eo2",
  "key14": "EM4avaBVijjNDXXhKHJPp9CJ2Zvdk3G4X6psSE5tdH4vBBTWkSvJQQUDJH7GLp44FgnzL1UcizQcVQMcRsQmwbY",
  "key15": "3YQmeFCfDhV611ALwcpvKpYmhGnv4i4aCMPEP6eHjaUV7xLm7JksvxrY9vJzbHmgiZJhLCCzJDJyY8rxQ51M4ZN8",
  "key16": "2GH2ivXKDsiRhR4H5Jqc3E5jn9bG5BYNVHK1hidHK2xSw81WQ7Sbh4LWbibqEjJG65cSSBTLsqp49CsJFKRf1PFK",
  "key17": "4hKLwPYJf2VAdcKzZwt7UBtejKWSLqXRS17Kqjb9ZNhP2UKrffU6SRMxm4XWsJhnk5KPqUsz8xcsFWx3jJcjL5Xo",
  "key18": "4THDQscNv7ewm1YNetNs1ie6WRCwKzew74LvRfvH14939PBKxx8pQYTA4CjXMYJY5r9L93fpRJNbQBRuZxGbf7Zj",
  "key19": "DysC4RxQjZfNVx9L3jMBQB1ofogzEmSPoC8mviqmQgxtuDqqL8X9uQJUwd28vq5nYpKE43fiB1Wwhj3CJypZcUG",
  "key20": "3BpS9babYYUGrfS4Xou8fQza8y11ujL6fytS9dzhTGMSXNNgFW6sozfzAtATT5ruG1aKaNAg4FFJJXPfRGfNajFg",
  "key21": "iVJLDyBKc7MSNtv3trvxqhtreWSiTpZuzzbvEA8qtR2PsUpwWpZ4fFNZxPzBwzfqQVAw7AezocVGzmrhZ6zgk9u",
  "key22": "4WaRo9rJkC2CKQpeX3BGhyct2GKHRZUQxh9LHwWiojPX1qMDwx6ALiXaBkx1spSDtRuVWugvyfUJZ3PsXfF2yKwA",
  "key23": "65gLE69zrPH7gTvridN314P23c5J8eeDwnrQSVPX997nL62ULqwiCr3ycmHpeuJtqeqGveW6nimdHg6ESYgqHTQz",
  "key24": "2TZgMyCckNJ4uCynqjT29dG2b9Qohkgkxd3A24KfP2HMGQQ9yAT3hLLT4xVEemyrn3Df8D7YW8H2k457NxoaJ91Y",
  "key25": "3zzezcEWyF2yvMa5uUq3qbr88oM6on1usr1HskUuYY8mE9FbbBhkTZ5jGSVZkfoUtGjEgc96bsKJeaFq6As6P7GW",
  "key26": "u8jLMBMReSfvMQ9Si5LVC6p3rsoJpuUupE4451vbLWz6PhTwrcc9qZ35wnwiacn5vxxp6dmh6qkWDUaFuJ6eiY9",
  "key27": "2J4tksnidHVHMqw5DTNA7T8oeDRpL1psk6mssXz3QCVWF1URfARkBYoYof237gUXz7oc281qKSAWHAGiDLKcAGCn",
  "key28": "rHsAYG3bPrgFYra3FVD2ihWXtCBHhPULh13h3pWiPEMudKGozLu3oRTjRgGBg4WQ9VfLxXuESmMnCErYPJmozWr",
  "key29": "5cmyZD5o8qmMQJLwPJG2itvGQ6Tfyz1K7PL5A8Ctibk8XNe81g3CvAkoCKdHiHV5kJv3ZzF4f45LZeFScmrmxExp",
  "key30": "26vM8soD4dHny1uU3Qkj7a44AkuMWfY4YMFsFmnRvyVLDTyYW2QKPT6g71vC8xmEU5woMmPaaGerVLnhDXdQRakh",
  "key31": "2RBfcLL42rAVDxj6j3f6QamWLAW2sJcjBYCHpD25CJ7xGtmK2ncVBjMrupqtzQszzCacWt6RNDY9Z1EQaPkPcEJ5",
  "key32": "2MgDxJY4oBoceAaem2H8fd446VpK6WZfpueNH5wXzuBJsAuj3kyBV8jz8rgYyFbYiBWrxPRhPGr4qmxYb9XRfHVe",
  "key33": "5RrJBcEXdEuJ64NRLCycNt7BnSutsis9i3hE8kbjCLnCvttmxAq5SF5VSkiM6qUCpS9fNe8Pz5k9yT5rDGQgBSvc",
  "key34": "4PEjVa6p2z26rC2eHAq3xsqJc87D3SMaJTD3hUhzyvRSBsHzfUVXvT4smibUCzM3qAA4LbfpTGicAgZu5KcdrbZy",
  "key35": "4956vAbTH9dftzQuXX3g6UP1ZcAzNaswUKwvj7BBwZMC3X7VEinjypMkw4zHEDjQ5uMoUAWMFUqaww3LYc4Cbj7T",
  "key36": "3hmmfQvDbsMuV4nQ6RaJfneX43eSrfhpoaE6toPRLH1jSYr3ACAwqtdBKaabjXbTpSZXj1qkdAeNEFqUqtsBVTgU",
  "key37": "2da7DWLtJ1fZhy3FuRB9oFrFJ8w7etCUs1zf8CsK8WNir1wrhrnHVTbGcwDCm9UkfkeuzMBU1CkaBDiuDPYBrv8K",
  "key38": "F5TfAisLdagcYn1c5zaHueKaS1wRe1pL7LNJGWw2wMssR44gu5e8NsX1VX7oGXfofmdNKRX7NCRH7vnZKCUaARw",
  "key39": "XL6EzaSuhzwZdmcjrLwyXse1Jw1W9kCCKK9esx38NcbNY5Tfxz82SLyxtMy6kMCyVEKXHjmt2KacthxyVcAGT4L",
  "key40": "5UikLzkPcsyP3BMWgNwVshQuHwaoqFy3r586Zedrex6fbDY2LdppFtw4Zo9mkAK33EUB61eGkz34ZehREyx7uZ6A",
  "key41": "2bwb64grXsA9Yt4KYNWGrhNuxqDoh1ANVnyE3U6ZHwB81PE78K3575R87BitRCG1DuEm5vb9ZVNjv5DcnyQyqvXu",
  "key42": "4Qr7aLrp5WZLTyFc5EL4rZ9pPZt2ts8SPamqonZRMrtoQVFYMWnzSuBZ7TUWQf274Vo4rg1j7krDqfCbuJ9XrQn3",
  "key43": "RtJiSRx7Mem9jKMA5UnR182y1pcbm55yf6yt2CpNemDFqkikZvpHm83GKqMz95NuMWG26eXWsPBJuuoXUyBMR41",
  "key44": "e7N6Cw9ssdZ2FFMuGm4bLdxMcJVtpxTTo8EhJZm4XeHymPzpgJi3BGmBStCYiZNMCWNjQJhYGgo6oPPC1SDVeJ2",
  "key45": "5TewKcefAHTxw8VeQK1wXM6dPvrGAr6RN8AkBWvyCm5PBMcqbK5hRbfiJfDcmiXFhW4BTntaPnudaqCdKmcqvywm"
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
