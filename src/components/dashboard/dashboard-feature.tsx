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
    "F1j57EcrNLrmudUTpeVcFHoAtoAA76sPUW1rnFV1ceD6Yfp4rUuMJQQZXody76CpYYmBje6RLhcREZzbtL8uMUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XmSBxgL48r3uhstsxycboJEN3Uqbs9A6scNNpupzvLGzad7Z8FbDLbXsxA5VutzaD9JwT1L4eEtS1zqjxZJidN6",
  "key1": "foZYrNWfQnXZ5yvbu7UuT7QDDVzNYY5dDLLd5dM1xM8ogehRLjqURkYk9hm4SfJy6w6sw5aSyWyV8VZkkJLXgvW",
  "key2": "5ngaej159rdKwtU9s7YCFxiAaC2s5SWk9StsUpG2NVTNMyKjAnaMTM3NoUB7QJBEZjbRcQgmCSNSVhh3bvHCSLWc",
  "key3": "4qqZs7ijttqCtN5z1N87VEExV6VFjh81EeUTmwWqM92Swgdfu9UUygFBwXGqFqtXGvzrjoChKR79SPUZtLuQaJvf",
  "key4": "2PoxYuEW3w9xxk8TBZcxch9CwQjoBnejQQ5XEzvbeuyieASiwqEy9Gfhc3gKp5giYWiRcQjSauqsqA5X7z6tNWV4",
  "key5": "4iJHBxtNBDB2H1wsjKoQxG2YjmRZsjCMNveXH8LoYrtrbMi1D11nh6eXATknMHL3CnTB1NiDHhUHWKQfxAkzE3jP",
  "key6": "N8FouLjmsauhJ3kzAdWxtuT2HrLdD2zY4AhdVFd9ei9p21x5ndNYMDu5caHviUxyxDGfFQeUH7qUVdoaBzmMGwT",
  "key7": "424dsZBeMfZ11SDCbjKbJDVbSpZ1FN1eEDaJgeYJXmxi18wL4MwqPX4CwjkKU5wkbKci6wHsg2RGevzJnWtQjx2x",
  "key8": "CUndvX4W3jQpVw67yYCu5dhL1eWaacAZU6ZdoH2nxvwx3m9V99jnTtguSS6gb9cgya69TzVGMHiyQiacTwBRjKs",
  "key9": "5U14S3LETmA7gdFBJb5i9xG8oZFj6ir6BKU4k1JZjMZxuqZ7DcZxRz9UKBGTwBa4rtA8eaGY2nFoM1itvNngDLhf",
  "key10": "WxSzVBKhSWr6tbh8aE3amY3mLhMR81JSedEGtqCvbJ69VuS3AepoNkq6KYvAA5ThGQPpVNFCnbr5YyrzcMaQDKB",
  "key11": "2zo5aa6f3LtZXR4pwBA16S1Q2XV9btDcZG5znMXpMeVT8SbUjo3s4qVwz1dwHuXezH1aYYgrDpTLT6LvyL5rrhKr",
  "key12": "4i54rgj7RYTVHxBoNVtJsivodyNZgLpMiG8aUEHqYDbgW4qd2xZyWxv1QCwQFMx4KBXxit2kFdMoAz4yEny8wuLd",
  "key13": "TqTE4PjiKEKWQCmxd3a1p24cFLYrmbkrs43oDP5nK6okHJkBfYdUSgsRruQmiw64Jt95zQTSnhHX76Tcg9SboxP",
  "key14": "Vof9zyPSzoWJHwX4xSqKHrmyY7u1K2hTphULPwFmQB3PuKt6GWTcMY7tZzL3vpeRJbhimPqj2CjwZ1YPibBEXvL",
  "key15": "56CqCypfzk59WRq6ZfBhbsYZ5Eodwiq2tifZpogVyFRjoezEFbDovazrEn2FTDppQR6iktWJffFZQPTfMjwyNn7b",
  "key16": "3Sd2hjfoitFcKHWwyJJuf1ozQHvHe6t8mHHJ8BB5qQtvPjrncuVcM5nx7jhQuP2ATwx9jfC89TbXbPYabrVyFKH4",
  "key17": "4jKtomEedTsJxZXfDZVLtXHcLcx2D7EzY9onMr31oh8TgVvf3rdL4fikTZNpB1ivG4AKCy4tDrQHEzwtkCGDHGW2",
  "key18": "5yRf2LA2h87nZnFca3nrktkJVZ2uH1pwTVrskWTeTCgLtBMqdL27jd8HzMNudPxgTXdrdZGNVT1ysjfmzsMUwgsK",
  "key19": "5cZY8mkVobwGHf1dHNKAJieXpHQniLyckkDDgWLPqXhTg5xSLRkuwXgtuYE3dcCwRaPhZnCbMSW127QaWdakYnQy",
  "key20": "2M6H33fgHq9t5Aa1yJ4LW85vQSeEztNJh48iymipVEhhZUQVwWRs65UXZMtiWbgFPov6t29NCvd2HEVnnUf9YDiB",
  "key21": "4UCutK7zzyYtS13E4VztieiAUbL3kJnbC65cETyWh4dxzzrT7QaxhmSb4PXCH34N44gs5WhqBp5MgzaoAeXniyv5",
  "key22": "3cmrbvk8ZtpDHAdZdMLW986FYGEVs51c2fHpZpuyED3KyQKbaMisWe72DXTHTjSEmEkgun5YXss5LrxRxzcpdHL2",
  "key23": "2i1wMuV8hWVMuKnHcHcrwwbUc3NfEr94x1kdUvZNqvWheWpX8izE7yJMb34Xufa2U1yudGoDQhpgw4oo933z4kpx",
  "key24": "42f2bhQtDaVNFVayCYSncAYECCnrev7B5uiz5umi93fLb7tqaYFXTavYJcxguXxQLXKsYTasy8FMtKuVQJgESvE5",
  "key25": "5BVpsjDV1x9ChkV94ts3D275ELRzrT42Agq2KRuDf4UXEBju7cDHU3HRXd3GgvHJKtxDshJQPfAgcXUqRzNKvhjd",
  "key26": "2sxBptBgZqyyvur9mhc6qvgvBPGkpCmwnmkf4hKDbgMy7S582GXatTBwb63mKwgJtFZccpowMyaEyhjrhifFP3mW",
  "key27": "5eMA8LJyqynJgCYz5FhJLyuqMQ4zJfLdrxFK2qxut2KPafWX7huFZJnM4N6WM1wUeGUhuuboJABH8fhVvhNX3c5w",
  "key28": "2iyhg5x3ghytgzD2SHj6v6dqFrkzotF1BRnRzxYaiq5aA4HZXLRrK6ShhbM9bJ8Bb8NmmbJLvo9hmSkpaSaoxJTt",
  "key29": "2Sga5TvwyQXnxiweyGSJSDYwVCSXxrQ3UyeCW9csHtQYwH1EfwKYQFsCoFtspr9x9Fo2rU9ipcUhKJit7LB7cjZ7",
  "key30": "3aBrg36pBG4W2G97jX2pgTNVDV6PKJoVrutMfPqoWxf8WZZghHitqZHZ5mjdWALgMhoRKjqQKg2wSWerQz6t9gaX",
  "key31": "4Cz8h4sVUJJEeSsAgSijSfg1fAT3aBqege7868DWERxrSK3q9W4nTbLJ6khQp4JYKduJSiTouJPg34djmtgVpYEa",
  "key32": "5gENf2NFcJTjqqMM94ajSKLpxaptKGfhLfC7CnhrSyrsqvVRrGAgLQG1gPD5a5nrphdf6dGXtv1mYy5SSkZ8nUaV",
  "key33": "F6XsfEn1s1Hxvd1rWkeSQJrbTYU4uAomZKfdjNg2GKpgUR5iQWSnfQv7BpQJzQAoP81NTv1KgcjwA9jHUWfV71L",
  "key34": "37nmMjvinQV98Zvbf8gmnZJsWcxWmtwq1c6jgwTrEx7KahjKo3AvB3UVAQNmCZxB1zEPSSpLqKRGsCSj8Y27tbut",
  "key35": "3izXvXHFVrCNd25LR7dNW5GL8iXQfnzebUq3XtJquVjZBaLYrv3JsGdYZYKkNh1Xase4psrmT44ENkpkiYgWVHLa",
  "key36": "AqwAHM9jckMTG24pES4q1V9PfGuK9ovXqFYamxMX2PH52S6yGV3ixbZFXjJXW82uoH9uu4UJoC5r1FzKzRKviP2",
  "key37": "3yJnxjvZzVJBJV3BHPverNxn1gWXWZcrBJBC8z2LvKycTzV9sEKJNjv9AUGLxF4rZbjPz1SXb6tftjV89fCnkh76",
  "key38": "5qDtoe4HsetBivbpvxFuhthAtxrJhy4BsC17TY995kKvbfRXK71kKnhZd5DADU4Ae9QooDvoaeppVwB9N2yQ15dV",
  "key39": "3jEPXv8HP8bfLp7GmReCrQYt5MvwJqFTAg3cAMRRSWUYW3W4fKS3r6tKGzpZjeURT33xiGnJoa9LFW22WYz86kAr"
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
