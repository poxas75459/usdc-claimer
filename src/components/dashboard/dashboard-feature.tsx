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
    "3PNn5K2xiYyBCUpwU24RFQaeAGMm92Zo5MesWWu44hR3rftpRVtSxsYjRnd44rrHTs9H8SidKapBuUzTe8Q1tTDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4muCdg1LCDEmbGmTfBJ4pjrDXDUnBXoJ3v8j5SYgUfXahDWnoj1s8wHaer1LNHVcNxC85M4r39N9ayYdHVLhTw4k",
  "key1": "45LAtRvCjXTtxxfe1eHmMigTnZevqs5mmmyAxHahQ9sPHyg9fNUkQi43qMjyj3Y3nmkcUxVjUFVYdrUhbaJu4zxJ",
  "key2": "2DBR4EPks2PXsMEqoiWG4R2wr7hrAoZ8JtYP6qjhjTJedoZGvYJongi7s2xgnJhFKczaMsze4hKdWm4kx4P72gxL",
  "key3": "4iTpfCXqFJ7XdGFkiCP27w2ARk7J6w6zeR7WjWbWhWcmakFkg5et3RNBeMSwneUnZr3RHFuYTYYGotEKLGUE4Rc",
  "key4": "3agnyUcHnVKaYAwt4kXYP9U2evipJJxvG2e2JpxozrQtysH3pohkuf4o2MdVVU3LrrCxrmgBmaR9H1F5vvUH8Sjt",
  "key5": "3AzCREPosoirfxBuAT14mE2pBT1ZAocdbLTWPVyzyAVfvqyksbMopUcMy34UUC4dGESnjNi8thBsaek2GatXEWMu",
  "key6": "3stoazt3zrKjEdFamoZ2mTKv1pUDVvJjVNnxfnRXSxViUorpv9QXm1wDTZibYiqrMbS7YERzMALSaixCAKnZDNTm",
  "key7": "3AUE2sZ2aXBWcD2S6evnTSWzsX6t95LNjxffPbhFqGCp7AooaM4Aj9ioAcWgLPvHx4V6NoeVS2upYrgCf7omgXrk",
  "key8": "3Ag7TWyPZ8JwHFd9eWqY2bURntyRVySF6DHJNhyNrwgdmABfjJTucRmAC1XH2jzBPRS64wJsjVvnFZmdgWHXc5GB",
  "key9": "3e1wZBJq2PsZ9P6doLwUck6yTwhnwuYm2Rk8jW1jea2oumpmgfCM9vXC2KSX4K98hLUx88bMUiyKTTVuEa7NAWFR",
  "key10": "2rzVLtirZ7ceX9ov9owUcDa3YNLRqGUYrnyX462iYLHuuZgBqht4CGXbd26ico4A4Vrq6EaSZ7dwjUJfE8ER9Vx4",
  "key11": "3qYztmRgcFtsqc4YswHHUPtFQr7N3wSGJSDzqN25eRdqA6QHq7NHL8QFBkEiMUS5BbPrchoyGwsCkmnHdNjHaf5f",
  "key12": "4pSMm5pm9ru67m1qGTjCA3p7xwuw8Ti9TfJkdpC4K6TYb3TDLuPHhLmJnJbZx3WMC9sNTF6E2z7QaCUrWEsf94iE",
  "key13": "3agyCGm4oA4nbLkaoodmWZ35kencJHJMhiV8c3S1cW87EJyVKgaAgCaMhAVFp26M14pqjEvzhA5M66UqWbZzfvQk",
  "key14": "5gd2vmU6Zvzut5uitDDjh8uL3GNhpZV5Dwz6Guoo8FSmfqwiKznHgrn1M1Qh8KUVY6tBPUH1diY16ynw8X4ukN9g",
  "key15": "3ReYwEHUVHyUC4eiCTbKYA79z9KPb9q5Dc77HAbXsVC9VPxyxcegdJApMS2BY2RuU5vDATsHrWd9QiaZitgM57x6",
  "key16": "5TFxM5xA7Tee5qBpwDmpoJuHrASeZicpnB8mjUwJrGveA1AmyfLewT4aX2eUyet9SBgaFEvUxzAR3uoPy149ryy4",
  "key17": "4Uayx7cnEY413RVHVG78pvMbUE5fWgLBVxX8ijjSWw2MoVmgFDi8zJu8W2CdKtUfEUPENvwVD2aBrHvnriRU3yek",
  "key18": "2eg6EYTKQjdc3eGM2rS65VC96DPqroNZxnsNRDQyWQ3eSAUpKyxtmwxVPMtwsaHgSoRHC8sQz5uofjQM89jqS6Be",
  "key19": "2paQuvsDrQVszyKhQhYuK8yhifncTVoAF6WgSpFSxtRjE6JJHwDGsVSnTZ2jswL1ecvPWo5iLWMZfBp6hPyp9Reo",
  "key20": "42f7qsBYN4HcQHzrKnLH7JeU643pr838JqJyU9HDYzQjscR4xr3dFbvo9NdhWmMsVt1Cg731ta3qQ1VH8ZW3LM22",
  "key21": "2CYTNvwgYnV9HUPnoppJRiNhRvts9JaKYGYVung2WbGTJKT6YAzZW3bdEuLzjYdteWY8ertGxzKRRi5c8wBLjAVW",
  "key22": "51UVAAu99JiKEdjh9et2btqEhiEjR3Lcw1F45evxTnPBF6BsDWJAvqeMYE45sRtFxzwERXpCthk3DFjJopLmRH7H",
  "key23": "5xjbQ6kxnFbL8icGdF4xohKvJUDihUn3DXWUGvgGr5Tbd3JBgntCjcPzoT9ECRE68RZGa4uY49ymqNm8hsFVC8rx",
  "key24": "5bXEbTyQiVauyHHKRkyXUeFXeyGoPxfmKpJSY8cwXLK19Syq5EWpb4bewPnvFANoepr34EHjA7hzbvpo4yqMtGAe",
  "key25": "oVPR3BDtj6B3sRqtougB5W4ceQRk7pygpdda6heBkDJsGSt9eMLRrmLUxBBVdrB75DXSZqGDJFUQn2Td9JnxUeh",
  "key26": "P8ipb9R5jCtwLsuEaGtwX1vPjDVnLpMpLYh8P7a5PjWnX9nEL9b9dywUg7g6uCXgYfyHKyu8xuCGyJbBEjxYmGK",
  "key27": "5Uc5N8XQCH89NPSLohcynxfGL5zSXMDhD14LQHmmjpb1rrX8ARUAPfTLvXA8Eb85XSmU1MXhVfMLpe1nko52BCU",
  "key28": "Lvg7TTqLG8qXr2N7wcXz8Svh8Hei9Rsh4JuY68F1LYvyXmBunKFfhErVvoQt2JUgfFwoKp4QCevb8eQ3FwMn2YC",
  "key29": "XtFdcSCwJfACNrC3CPMSeMW7WtBwEwQB3VZggQJxbuG2FPxnNXZdhsPUxrkHymqc9WLwzPFpKgEfFM5xwe1C7wL",
  "key30": "3bx4Zs2G28dhVjn2HPwbnbvCTTQ1hhcipmrPfS26e9nX5veStLLZmhPq8SjBAzXMTGKJDtMFsaDfGzegq4opoSe5",
  "key31": "2bisWfzuYhioQCK2teHrRgDDQQMK212w6q9nBHNmz2kjvGBZJCogM7QjmhrHtaxouEr4sJCqMNWtrvhNKcW6hzHa",
  "key32": "NajyrDnau6sEtVPKEskCKK7ftsMpmkeyuWg8Zh4YoM7qCnyeZLaf9iVZRVCstV6oBtKKQu7WnoCbMKvhYSYWZ6E",
  "key33": "28a2proL18Gd4MY11AwDzbi6BuV85txDhwdpsnbqMS5a7TP8z9HTFWUnHc7UF6offLPP1qRMYEo7SFprpiqvQUTs",
  "key34": "3QNstU9csmnCDerYRUEqax8Db1Vr37HnmjV2VRmh1zBXEVrsVUs6YJE9LZix3kM5jD4jpZhvcCz8GVGaZ4cKfwtK",
  "key35": "3LWhsfRsdT3Ys9bBk17aMvNtMPzXrULyywUNXEECyvqhy2GcQ5FkJGKogSdLsM62khmWCTr8FokA2AqSWFMYxg3d",
  "key36": "2fEJRrVc36WuijxJz1X7qRd2phAXy43HQLRbwcWVdt2jdJuBZEj4sUBM7WhventacMKHFQBT1C63ybuC8hvgSQdd"
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
