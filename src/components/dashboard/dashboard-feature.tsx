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
    "3Yvx7yi5ySsfYfCk81MGmWnXXhPBqu9D9E6DHEkqbgpxtd3Fm66ErqhnWSW9QwmLY4Tmd5pDrx6GtMW49DfkBmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LB6QM47WTt9pe2rt7ZFH4EMzrUGAxp5rtN7TYxU2Bm8bRkAs3wCVZh6iv1W2jSDNixjoA8hLNchBGKUhm6FEdav",
  "key1": "4zpP91pxtk3vcwCjnRCtpodbwoCHERtry7CcAdDy8fNLuv9yop1Djx2UBrntUyAsMSbbTbcaLZBFQwcjsiNY8MFV",
  "key2": "5sJRao6LE1kphNYpwUBpGT6s6GHZRdBDJWh8hG6C8cZR1WR3vKqUNYAKnuu6rXNs7sN7NDUAqvwBE32fhqB6p2T2",
  "key3": "4uFqDzN2vAYCsG265j27p25RyVZhBi7VVRQZs5Hb4TY4tQbHgwDCTBAcQizuJ3sWMvP9iaUXyiiE3WdFKrGePYJe",
  "key4": "5S3kwvZtGj5afN1jLeEr4vo9fY1UFEfqiE9iedTtnNrgqzsZdSrMr7AYGmnGacewRpjaa6hfY9xtjYwtTNLhHWqE",
  "key5": "27Jw6N2a2PMWkH126s4uD2rAaGvgXbuVbkCRbkjVp7DcZM4useVqVrrPYKyVZr9fsWnqVCWeEjnyZz2pgvQ46xE2",
  "key6": "5X6gpYKepo2aVKNdMjJW2pGxmqGCBYLB9vdSQniutWpHSjUmVQ23zB421dz7RfeNjhJrVLrcGShiFTxczg8RPFCn",
  "key7": "2xCULDzRwLAExp9rpyzuj2gQS45T3TaMLS2JbAfkdRptZ1epK65yzXP62YVKhq5BHucgdQBkhP8iSvW71HuVbCUG",
  "key8": "4DkVrVxhHU8X3rvr914AZuShWZurY8fj5YGa1qMGsYADRLYaMnQAkKLZ1ogeLdgJy3nvQrebmNpmEuCDoL91TJxL",
  "key9": "U2WUqqMhXJ2WEeTuiGgULYTr4xGDqaSeNnXmW7WLyUZLermH2aRckQAsVTMNQDXiCyAjBmTGgLE2gtXnMVbN1G2",
  "key10": "46tpPXrkFmMWEn7kiwyJh14rERKjUeVAmAcJYtPGXBDoDJJnYBwAdxipHz42o3eYbY9hPWNYFT47115a5StQgTNK",
  "key11": "2FnZ97r61ixmA1bpgmJsWHSdbKtTAKGMQWk3J9AzEr4CqtpTjyTNF4wCPD7sZcHWY3hzXm6XisFWPWdNtWtu3N1q",
  "key12": "mU21GL4zLTNSVMwR2Y9wkMNHP5b4n43BDxGn2rJJ7UELBPHEzzvYGzg96GLiJFptVkAesfLi1C84qyxRGAGWsZF",
  "key13": "3sxEarVdTCNcqMQJoy8XWBLUhgSi8F58icd1yweoLtAp6Yw9YSM5yDhHgJyxuNBu2RPFGbkJVtX1atbVddPr5vVF",
  "key14": "dB8XWCj783S1a4rRBzVxqVQajUq4GEwzryEZk4KAfVCW9ATWLMGZMAAuYLMuLYi8h8i3Js4FNbSqYfsaoLFcyZP",
  "key15": "4eAwj4gLrHfy4ciXMENBnYeEXbYoNa8BCYgeivdUcrsWazhsRmMKvVDRoxoT41zdAvdFH66E1cDoo6LwCRMECfDx",
  "key16": "54b7avd34GarbXQ1sQh28ZfZofLMudu71JAw7GkbDdYBWJMrzSD9vKBxVSLs1bzhBjj2bQkpxzYLR5tEyd4pyZKd",
  "key17": "kMoC8td7LNcpmEwSuNKbdvEmE1LVPt7Ag2h1KAHGJicGBCqf6wbiZFtJkD2PveF1VSJ1W4TpqDoiRSgTqHGp4hT",
  "key18": "37Q6MQmoVEv4nirp4My3Mwkje5xU6jnY51GfPHTKQ2GV7e7E2n1xXit9PgEEpcvQov7QbQv2nMn5VpXkGhYws2H8",
  "key19": "dKsDZXWstLHmDqSUUzvwC5ECymbEG2oQqN51BYKNjroKLEtqCSVJnCbUKytdZtsgyxG87hKx5fu2yhfoddAnsb4",
  "key20": "3wUckGGG9PZVotDLMNFNMKqRrVAFiBFv2SoEn5iuu5DSidAQRK6neFrW4oCXtyfiKz5HUPUTAfKk1rSGeFvXtJcE",
  "key21": "2BX1cbJc5gThS76tJvsWywgzx1c6GrhYiQUARkh2b9kq5o3keV9D4m5yxvz7WTVBLEtwHwshx89nAkxCczDjtYgM",
  "key22": "HGSL6FhqzGKh5xKqWr1cca65Bo1oy2f8ThhA7erJsgjoFnD1CGU1xr12FEMjjhJT8wkQ6Aio8ktAgQmstmPzhmp",
  "key23": "qd9oiNKAdngQ9ChW2xjG9b3oMiEb5a7qhQnRvicfkgWZyQKbn6T8QtYRtrWmXGHMf2Wz7p3uTxjTSE3tLmF7qCi",
  "key24": "5WiQ6SJ1LDQb36PL6GbuNNFn2LAGbEHa2niKBpaxRiX4tqgsUDjVzvsi2ua3Uz3ZWxQzFEfXVX3M1JQDVtYSMgZe",
  "key25": "4wvLWUXpfQp3oxoodHTtJnNBpUCjpxzP2nfJmxzdPTEopqGjYpbmAwfLiXFi4B2D2NUQo3Vi7KQrUv3KeELBayB",
  "key26": "3LbTQ1JWvcu2WC6Ks6xsaxf23sQsQamaphSttQj3FvYBK8uM6A1uj47AMrDdYv3K5h8zV6kskfKu8v3Fzbh4NQ3v",
  "key27": "5Vv46MCP5hQMZwQgpbwxbSKzpNRyq6M85YDg3uX77eG9kNrhQtWoMUdG5BvVQbjN8EBdrmb5zS4xVRzKrsFMErDs",
  "key28": "Hu2gHJcHXNvBSti5pCa5zvwBFeCCa7XWo6Hs729ehBgT8Ydex2NqU84V3ht8WxXMVQBvPuG7aR9rH5WKXGDmn33",
  "key29": "4DiPzJPPx8gpQ9r3qtgARGwSsKoXsf9xtDo3fywrCcvxWTeLnhfmyghEFH3oBwqSzm9DGP7kYUwC3GnDSyKDtfpi",
  "key30": "KZWHVpL7do1E6oMnioznHSYrBYWuAQA6XRXQ8iUHockGne3BE9FkDoEAaDUSXmgtDwM4kwNfLnPWs1acaJpFJH6",
  "key31": "3UAC8h51XEfZhJoiQsK34QnWTHq3A4urzVhuZN3orV78BoXG9x7Ld61Ap73MtNAJMYuE2v81KsX8iV76KQwwvkzr",
  "key32": "3pTstUibySxWeMvXnG99gPjtTzf5c6TF3gt17FiaRp9ihyt4W4T3aTGddvBuYAzEym1n7XFMttNQQ8cvr42gQKrS",
  "key33": "5PEbCs7DPmefaHM6rbCZRMkWp8XSbpBe4wjzViwva5CiNZSQqRj6gEYWQjRTxyEwET3ZRRpR2bSGyafz59tFAD7U",
  "key34": "5DWeW7JUoBTVXi7UmMKekKYGpUTSEsyboXp19fy11bbvqzKubUYaxzReYy1CL4EKaSBzcyn9JtgGUYYEDT4JLwiv",
  "key35": "2WJnyAuZTC6R4wL17rkSLAnbKBozqZaL2XV22eGShyjhqdQHCurvzjT9p8wtVErqYnRx6tjrcjT21RG9HWg5HZK7",
  "key36": "5oTmV9vG77MaiYnFG7eTc6bQo7MfPnQeGLn9gm8s8WDDJictM3CxpZ9X8Uk9XkHQtYZaCynn8F5wkNg8xqEdDCA1",
  "key37": "36R6xe59wsQhGDwnfYQGvvSHiaHrJCSboBZc3qwiMCMTeMb8qapKEgBdX45CLVWyEsLMpk9TzrFEsfvkeThJqZsd",
  "key38": "2MQ8VXiwBfbbkYyMD9gcRNYHVAEcS17M1KPKBTSwoRvTCpRtCezgSct4iLRfHU6bYBLNYcvixh5F8oeuNHCc3Vg9",
  "key39": "3Yoj8r4vLSn82dSGUkMfKfUWhRGMqS42Yg6szD5XPfTUCbWXEb5y4UzkrXUhPxT8hAMJKFrQsA6dsjX5JtqB4VK1",
  "key40": "38kLs9S3uRQBgHTVM85KXmYQYboFuZC7yCjAiwZgqJjYoLneeuRmbGYoh6GMb8iudjaZnPvNGUjWBD1DyM1fHL3c",
  "key41": "3L5fbvSgdeD6HQHTNDSyYmuUqCJeyc8NkBH5yvDgSsChykepQP1tfZ9rQ3GQz7PpzkkDACTcdJ1D2QZLwnWdmsFB",
  "key42": "48d8E96HJMP2UEcCchxzUwNvsPf6eEgedqfLUNBNjxt7Bem9CDNgpTBbZcXNkLEDin119RDzwg8VnskPPVTcSpVw"
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
