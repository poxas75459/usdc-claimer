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
    "KZietjrNG2T5ZSaAyViR9xpxSRan33XeT5hEqKyzBv65xQHgN16m4RMcX3C6TkH8J4BiBcxeF1dgyJGYNhzHFpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "piFXiQQm4C3r1SxqkyHd1JxKJnNjqvQrutZgeS99A1YEHZm7SeAqQGLsD2uJMSPdDC9yGf28nii5ybaDU3Yz55M",
  "key1": "64TrQdzRQPWYWFzZF4jRpyrb4pzzr6CCb43DMBeC6HxA9Wzpp2NXHqJRKjxaRptxztpkBCfDkeppRYHbtywKGom8",
  "key2": "GrqhA1zECEP1sdzbcxAcjZGryQuaQyUyP1Hwk2Z4NnCTsBdaKEyuUPfbT12ohz5M6K81g3Rq8A8Q7dCPdmf6MD5",
  "key3": "4mk7G35bR69BYAyvHwLu94xqYEYPNFNL8yPdoQ3R6oav7BybFXpXW7g7XJCYa4hrf8uJfj5GgWWxe82FV6y34TSM",
  "key4": "3PnUjiyR9qQwtg6EN9L3Abbknr1Li16Ty1vhPcUYdguDo9wXkdQnQMUWbB22B2FKvdPgKDZvSq5yVBf3qtnPzRVr",
  "key5": "61zcRuhATMxLYf2yXLH7fBobghFEBTvWZdDi7hxz56oEnp65ipkwMZhjCrZNhST46hDjynboxL9Hz36YNC9wLiDk",
  "key6": "4HLUhYcJ31UpuVrX1myUKxA9kGMu2Npc1X6wLJcH3WrDZtpwdYAhoj9TBQ1EJb263tYMdJmgvtaQaW7K1LB8bW5s",
  "key7": "5GHykMrNRQ8VFzAznknY8mNkHQB46wjhuUc4CxXGyzw7gS6WdoGBituzjcAY7YmGzetz76Kx2AHF3iie5wUgnxJR",
  "key8": "3M9WovZ5MQDvZCEgFUjgUcX257b5S7mjEzmEDDqPBSGdZTDRNNCP4Z6wEVA5hZcrN7knuwQyh98yYpzaPvqNLxuU",
  "key9": "2EiwjbFdB2KxaCQFGbtGuyYZoLRWHgycNt9tbphRgUaYrjNVmvDGxVLgQBchC9kr1vAnBsRt5P4PWh5r5jHtTYV7",
  "key10": "xdEkkQGFbZdWecyLApUURBueGYMcrQcyuhMiPNJYWM5VYtKET7k8wTEpz1Sier8ht8asSdhxYnF87WYhcmt39NJ",
  "key11": "ueKDVbqzP6RzCfmmJrmUbkgNnQFVv2edAXeZJFvR6qGEqVns1PJWPXvM2Rgn7yBs4VyyfXNBmVj54uaVQbQadcQ",
  "key12": "4TJ5Y2CTunV3KLWRmzUJiR73tgq94DEmyNuD1kiKxsBGceQdd2uQjjjXXGD1zBk2oFuQbfRdL4qtp1GeMR5SmG96",
  "key13": "4bZMVHM3oPnY9LjWRTNsoERRw52GZ4UoFmnmPNutYchAWfdBrWEfrXvWGmDWiNyTmAWKBXpTe4eaMUaWVDEA4Ghr",
  "key14": "2sLkoWLAJiR1Ma7C7uyDmBGh5owxmWfDPCX2qNaBR72VhLcSuLrUjmort18JUmirLPHMgPohbBP1rXTQjiDg15c3",
  "key15": "2N6khzGb7BFhKqXwz5BngegBAgG2XK9dw5pcVe2NW8rBxuMu17HQbwU1si7b7g7CbYGpb1iYSXeHpRcfSzZCB9Ln",
  "key16": "5Dzu7gSPVz5fAPNpHkY2qrwU49WEuENFdYHetDcAieppD3Kf58Nm4vvprV9e1bN8dmVRmdbvkRtkfKobCQAH3uci",
  "key17": "VBAbhSKqp5Jth2gh3ukyU7JdhWNcwRQPDF4sN8kJUnygj9XwgTmJSj5CwxmsZhGXj2jqnoEAPQvW3arajQwU5Bw",
  "key18": "KeMLcojU5t3RXJ7pAfi5tCikkRatDBrsUSztMS1JFLe3hrWeSi8qhDadbPdjFDcCHWTKVnYkNJYzq9bootKxPHd",
  "key19": "642b46oVpC6SKyrQ8XEJsBvEYDVts5QYRQLaSr4Qe1NQUfxr8JdW1pamVwq8df47ovJ8uwKWLxhrb2DqKJBSgt1K",
  "key20": "2CmWbYQaNazNxejkgrLCDQ7kpym1rytqz31skLyhSg4dDsM2TwJpUsWLHnSAUmYDf4fuNYPBXsJQX5jQkPjZdZse",
  "key21": "23PNATc7Ctg8aBvkF2PiHxTYw7RcKFsXZBaqFy7SKk683K53UPvQdGuoQiJsJkkT4ZdxxEx1kRPSkRJmvaXaeFaq",
  "key22": "2ftv8yJm5pWUrGy9gpnJSd6Y2P4zUTBwAKhDF6Lo4pdfyykzioMk4AbyYt2sWrAkgqrXHQFSLp5dLw2NjctWFmAK",
  "key23": "4s4a6wqy4f2y3B4GPJAZNLA1RS1kNsDi5vTGogveB2cgfUJfZ8yNVPqc9LUjnDhQva5vooYNvhvRP9Zsjb3XF2nx",
  "key24": "uM7o2xXwnE6QHE6sokCvbmH4ejmdNMrqwHPKAa6C586HdyLEQduReB2UwHiffPJkybz3JsJFv91wufmwbHPuwDC",
  "key25": "2WcNUPKZ53QpbwRdRj3ewYnaYyXF2zpfVaZsZqdTxqDgS6iDf9jW4enGZY3UzLpmV9j8WEPdruL6X9zXhvwe6pV7",
  "key26": "95bP71xHY3kvkXuNFLPiod4G97vasW72cpqGfwTmadFYo2MPryLWYhCZBKAyTgvpyvUqaccj29dbrAv9zb1ucAJ",
  "key27": "41WEKipKXEbHabNoMQaUf5KG8JAnG7bsaMYDarvE1oFxkekXeaYxa6D23cxS81eqegqkv6fatPQ7djwdSC9ciU5F",
  "key28": "5b4WfW7U7TALiUfb1RvjoU6TQBHRDMWWRHuXzS9VLCrW3NXf8HgN4oQArDtPDXGktkT2AtRNHMaC5tCEEfUfCsD7",
  "key29": "5ifzJDaisk55E9mAesyEDEB5tTDYgPsVp32Pa52oUH69CW8Kdw47zBYKScU6jZD64VcsdJsCSYKmtRkYiKGVDhf3",
  "key30": "1EWMPH18Jdoj6KeyTHU3Bd2RCYrs5xjNtCgTBjWzmvPwcruS2B15K39B3f9v53f8X1nYQtbPURKoaszhN3SXKvX",
  "key31": "5342FFcKyTmnDNS12baeJAvBAm37ZArHnwYSfHkA1NqvUfonSq54nY6H4PeMrf6NbzNmXzRqv7ABQnX6iCf5u3CS",
  "key32": "4fNk1yF4ACZ13JEM4SF3cccgk8mfhEZvaCwTB6BJ9wKR7QVm2AEYmq6puLQ65tPLZq5GLg6zWAgF6MkdTbekaXjE",
  "key33": "5FV4xcsBcBp8p2U18bagNnr2jY11Pp1TLx9SQLdP4oRLenAivAuh7sPm8xHWSuhH3vybd1pkETwLgqBeT3pdAEq9",
  "key34": "2M6gQz352DFJyrfguYha373cYFM1PbVoTgBD4T39ANqXChbyhSnvSBPibVcQCF4MCKsL6JK1SzajgRffGDcCRkzi",
  "key35": "25DzvKp877QGsNotzrrkBUvrpxLXoZ9DQF3oShLoVLWreLX5ffyhawLX2YihumxE3aPcHU6aHJjrR6GG2Wy5BefU",
  "key36": "haW1m8Y38wkcMALsxjaVpmEpmc9KSXt49eM6sH7MG5tPs2WuwcSs8CYJmgzEyPNmSxzBxjqYcxm5fRojB1oACWn",
  "key37": "3kmeYZRZvKyUURUqHCMv2XbQY9YPeb9eTpv9DJZTE6vjd7Szrj34p3NeAcKUyhPbboiz15EzVXC5QNaE8eWkq1TZ",
  "key38": "2iqpybfWmGA4W8vKUaAqLWcNCCCSNSxq2daxdsVwBrCjG4h3ck9pdWnAyfnkXC6tFC3JUruMsRhWMnPNbsmhvX9t",
  "key39": "38J3LbfGMRt6N2aqLjaKgRTqgX2g512ggNejux4FZfasxz3XMFqtSSHCBycrdaAmRRgeRWBLRXoQs61j7RJdLm7F",
  "key40": "2sSAEqkGKT1NoVXcz7dicfP63KuCmsXSnzQUFgmyX1HpmmkM674R29Tvdi6T95DYBbBJaiBSX7EWpYbrHP4WTt71",
  "key41": "2BRHoo6Ksw2WT5GZyt5KyEg8kJ8JG8c725zm7T89NaiRr4NfXiF3TCWBc3g3kdAH3jYZwoZXyufNCKhsYs63hYK5",
  "key42": "e1rmah43z84PUQY7d8TCS6WYcuSPZdWNxJFxbPNrLSH1NcMMipg4vT9m5WsAcvoEmWw3Zr2Z46Jt2Y9jMgBYau6",
  "key43": "4SVVHfGe259Z1TPaoMYWtzXZSEEjAtEVu1RV5tLBfFaugYzaCtykme8ci3XeAdtvatbrhPmhtM6D8UTvSi5kmiyg",
  "key44": "eNFnn61EYjiLhbMp8k6HAkpr2gm74Tbwq9qXCUcYji77gYPyoiZLbL3TasUX62o3nWhB7s4Nv1vJhwrnWngReWW",
  "key45": "3645BL7di1V8tng8d3xLcHHoQ79N18nXq76Zd6sdoFBN3jHbg1xw3mJm4ajPvNcXRGHNCtRuWUqP144JXs9n2rJU",
  "key46": "2zCvTSY6N9h4Y7AWkebCV7w93MRKhg5hZMrAe4RCqhi4f5Q2STWpVjKGLt6PbVJNKCAXrqwWt5MDfAdn18q8t13e",
  "key47": "5WyhWYYaBjYAFXitg86grSkVGiATka69Vj1jgVgQdkWgqg1SA8B8ix9mH5XwczzjPk4AnQDhf84MmQ6nf1QZc4st"
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
