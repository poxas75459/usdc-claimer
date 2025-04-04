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
    "6FyqU36ehKzHaV9ZKZdap6i9hX2PiE8dERgGrofAR4kyrXjyyNyaVrwsgRMTRzHNVs7gJ3t783AuTZE8rrNkL7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RQZAQRiv4zqeLMeCPnjN1TVHfHsAaX7hrV8NMSkgHVzKvpjwxs5SKQbgFswS7UBukbxc97t8XaicnntqgWsbFPY",
  "key1": "5dT37Bk6J4iAhNW4sDNfAa3FHndUfNLLWM1wYg4mGmtCTPUPGb2BHx5ymSVqwKyJwZynUNaz4j1d2gu7Mf3Fhu1u",
  "key2": "g7Rx1mmZrykPzMswUo76FYjxZcgYsocr5t4tWhrrPRHahZXWw9kr6TtdzCHGzVPeoKgcUB44GrpsKe8BVsh1BZA",
  "key3": "4ZTXBt7NniVqK7M4h1ATZx6QQdovjEdH8pTra1gPvvo8aWUuDuwEFEDbSih6HinE1bcpQF71vSsdNwmUmYPbgo3v",
  "key4": "5sB9hMBRt2SS2ngni8zF5tXRM2UHg43SGVUeDGhZqjXKGS6fFNUBsw8c2MEAYB7tHHK2XC8Pzn2nBMQGLsttccqm",
  "key5": "4NesdXyVbmkTrRsx6PDsB87Hotf3t4x71cMqExTiaMTyBX76t12cdDw1sn37SWAECXweXCxyJ3k2RnMwgVQHV84h",
  "key6": "eiXLHX5LZu1b3mR17CnJ4EHXyAQxApCC6gJaRyJZjqJ5Yg7JQQiF1gLY1AgeZYvYZbWFNsBFeArHfvzojhXCrsG",
  "key7": "2EZfVFBJHWyHpWn7CEAWSugC4crBSrpPRaLiskvPyx25Rp9ZLWFq8hxVyserVj59vTVVgZyJFsFLfFa3aZ8aGa3M",
  "key8": "587ijKbLbRrYU9CjQh7svzjNrTyNZffjjsRkqKyMk8KZ9NjZbwqUi7E1MYzmgVRPwM6cANzjXJGTDXy6KjKBeXXF",
  "key9": "3QKWHRKrxzwHuCQdnuyUefc86CDA92sDZaNwWHHByupPD5rDwjTFLPDaaPWhvCxS5GEyTLoDd8t4XcvvjAoJyLjt",
  "key10": "2mXiHo2bRSKSi8edjcqjj1Lt7sXCu7wyd6typfPqYh2V62Pf64HuGK67TxVUcETef6vo5VswR9p6mCGMtFCXcZ58",
  "key11": "4urnReXzDYKcrUfw9snjYUE7TBUSFHUzf4X5JxNp91jD9UodM6L9qoDrnDt9r7aqfTD9GPuMmE9GKMVNsBuWbnsy",
  "key12": "3jmpjbz6wmLqsuUqeZV1HbExgTixrpmgPBJo3fdsaYGsu1ASRtqeVfVMYNWLvTg8me3iivqFHGXrp3K6dEbzRmeZ",
  "key13": "4JxmjCdLyCBfcLLEynnCWbdYnXm8mzoXUspfNjJKUi7VMLePwjoygGsdZEAvntSa8fZJQimUZyBrw62uthQoDURB",
  "key14": "Ecrso9JpY2juxazHbeXvRwgYh16nv7MVsjZkp7bWfSKYtdAexZurC7iTK7JFziQNFApsVGzhtD7aRyEN5q8TQET",
  "key15": "2hKUbaj2kRi6EurXpM8tqqTT1zb5eMNj7vmf8jG4ghyfYLP9fzwtXEPpignGLyLjLxmem1Ef7UDvGweFfnx44GRT",
  "key16": "2rx57GAAbNfQatYxViVgPWT8Z4C9YipfBLd2bpFkS5HXkE8cN8D3QCS2Lq1SeeiRtS4gtqZCjJ2b7Bc8GnLwe6n4",
  "key17": "2EN7B8NuXdfCkqUpT7eb2wdGhem8RFazifxetG55azzc8aijBc2RPP2hwyQEAdPixhhmon2xF5yaWpAwrHjUczLr",
  "key18": "N5CPmqqhGDhQcN7RH2vPL7p2Dc6P1Nu2S7VT9UVi9bR4p28rSxeYA8newmwD8i6EY2yYfN5UpJrdeg2rF9auqJK",
  "key19": "5anQwNDPffV6jUcczGUmoYuFxL4i1q1mhsjFib21rExJdvoe4t9v2E5hgfKYQ3oRXe17pCG8cwsMqDFacePdfK4q",
  "key20": "3CZ815aA6knUwx6axYuiqSM896XWYeb54EwWxFwtSoJaJ2EPpLNPDHBQYDzqsjfdCYm86uFkKgQLmrFG8f42KWS1",
  "key21": "Xv9fTpBb6v3yyUMwuFSgyA6we85HxsT6WJKVE4EEzUs3GN7TAHXmN8Sj2W1XszF7GFqoHUPKngd5aVa8yDtAkuA",
  "key22": "2Jy4pEyqoxBWn32eDj5AQPXTUspVBms9BiJJjoQYpAbs1ASdzJSbLDgeN9HvE9tf9FZcdhfWhKJ13CYfLtcVCZhg",
  "key23": "5a1vgf2R9Hur48WagKknwvry8RsPLM8fvgnYWAhFBKPj6uLQ3pdvrcHNKxC7Pu4FnRLgBz6vf78sgs5vVC3zUPuq",
  "key24": "2avYNzanxuqc3zeSvsnX9NjJZcBfm4tSk875VFqQ9Z9RQ2cPEVvZxWPBe9BrbdtjPTBRXhuHPhxmGTDBabsFmzqU",
  "key25": "jZwKCg6crnexuHCBm4SQy1RHk5P7JiKjY8DXWZCNp9dyih3zr4PNnvuqPqoiQpnxGyeKnkkPg5b4qQtoYDkBZzN",
  "key26": "5bRToZEAqJ9SQizuMPp98uxePAPgDtbAWwm4JVL3Wn3f8XHgos6aoGGCb4DxB2oDxbgBPRohd3sct4538Hgx1MtG",
  "key27": "4etC8n8AA68uERXkiZ9eWxmDGGjDFLfFHzeTZK9ifyLHR87r6nVehzM4K2QSpm6X9mXYzBxyiPE8bNjxnKEtzrNo",
  "key28": "5oHjzW9yxcHvyFq7eYfPMCy4Aa5CUHcdHLsnxECVLu1Dc23LhcQknC84wF3JYD4uMSMHHA4JoLn9cAJJgzPubhcs",
  "key29": "2uaqN5eWQzeU7eukFnsbY3if46MMQnsFkeDCB1e8mzuHwiNyCqYeBwsmUVezm1FbYyeWxR3wpLYdL7UAcnyjHmBP",
  "key30": "2brgNFZhMda4rAFdwYnJCXMJ8CC4K8DTEKXXXEdunkLWaSJHngZ9AabjeerE4YXnJiDruHtA6ynkHwDJiz6JNedS",
  "key31": "3aJYpPPY39QbhUEqAxvr9AiySH4YWXoLSeCHCL3mNCMvaFr6zaSqBAtPyqYffbBMkXCAsYBtxphW7gtYSEXUspH9",
  "key32": "4qpWQ8kQCxcN9DdYnzpMK5vLXAnTkPMVeWLZTY8YQrxsp3bpvrw4Z2LEQHodxvJnPWv7GBU7LubtLBvYRgnPiUvZ"
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
