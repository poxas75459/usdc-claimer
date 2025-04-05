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
    "3qJJ31xH6zmdXgFiFewocTZ91KX9qj11YEzmRyFqqjXeJj9wFbwr31KNULv1PqtVUwrt5gXRvRbZjYK1cPTQarwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yJCdrykQQaeNMrAnMbB3Cn43EKhXFgQZrZR7tmdefuVHcu7zHR2L7SpdN1JxLFV3wyotnzouVJVMT5Ldbu3yvw9",
  "key1": "wCPPt1fuSLK7XfQQoMjVnHJ1vsZnNzD5tFDHnXmkB1VXtdDLy2QV2JBurLPKRMdSzJwWTe5WLmqqh1pjURYTsyL",
  "key2": "5gKnz8PhhsiR68kUMGCmUU19quNUK59nPaJmxmwB78oo2Jrd3dkDVhpkc4HTas2aXqH5dLrLwJfnMSJ3879KLAH3",
  "key3": "5rf63EyZSVRrf48Pg7f7D1ago4fkGaJenYxnj1nGZNtoTr2dvydrA59ECdh2ynJhkQcugNwpK8yJdizMUkmoCQrc",
  "key4": "63NUzUN1PafxNEZKPbFoKWBrnD2iB1rkMfhVUa1CNnJG7craVVoTK66pznAWQFfEoFbdaA6WFEngWdTg72PaMshr",
  "key5": "5GeBiH3HCdWS2ZauqVqETpfEYLLNZn6eZB4Fs2cWpcxAg9qKtuaHiDXdYqb1iBSd6Hn7HrxBXq4NKFvfKH4m2EkN",
  "key6": "rLGdEaPmasfcLF6SybxHAQGByfFSkX9MWN9u1y8XoPQKsjVd6VDbGUUoGFE8Dcvvgk6JpCxtFGoGD12Axh1mXGn",
  "key7": "32tXLSut2NdM2AEUG6Jy8QFafCDNrJjfCUTQADyN8BctBczPmV1jua4bfVMyXmnRVgy5HvordNbGjmm2EMwybeST",
  "key8": "627o7aieyqAmAP1FmsB9XNacwHViqvESeB7pGddVE5VtmnwekzX29AZpCiuk8PfsUHGsg2PEnNE3DHKdb1n8Xe8K",
  "key9": "P96xWu4xWrXMQRDh32VTxszuaFSKd4qbzfqFN4mtaaMWfPTxtC6wYrUvyMXfXdYGaaefgzVNAUiRy1tn61JuhWQ",
  "key10": "2uCHmGWphiNmJeTkkt1f9oVkczu5Q9D98XG2Go6M1LQCSFuUZ7S4FPzc1JAbdZ4FtWVLFJBnjYEBVnqtqasWHPuX",
  "key11": "JLzvkkAHDojAzy1E9dT6yXXxERJDHETesY1fNBsQQSaHF8dWsPXTAWHmi5AgWiCGsX1RutV7K2sZdGE4FaQQhup",
  "key12": "22MEoUCveB9mLwjaMZ4DJQ2Xgjk63Xs9A1R9JpGafjX9XdHqf8dDMa3gcKyJ71ppk54nrvfbDEmo5oSJaMtrwq3Q",
  "key13": "T885yTEhdwoMp3cWKTrfbMvfjXMuc8dUDUxt5E9KrsexgL7n8j4DbjQDxVbcV8sfRRLx1XgDJG2h7LQzYuZgXfQ",
  "key14": "2ivbJ9ejRqvXKCFamBUwP6Whs9PNKJRRxfQ9uF7q3xMR7J5f4okdCFuc67RmBvn8Mbq9AXJqibfjt7jwNwM3dJ8y",
  "key15": "5rYPEFwyngaf2oqGyFMtkVy3MPmcp4FCjQrYt4MFRJppfYhz69sKKECJamDTCmwFtQKgFGXYQd8C4L8ab54n6GbE",
  "key16": "5mEBk4HrN3XBGuWJwyTFvwisFcan8HsfybcbiCqCkw3aFzNMauh6Qyp7TsiDurkoYGXmBdnbkhuwJVpmWyg2jtLr",
  "key17": "4NV5ixhWYd8urUgH82krViJgkYZ9v8nXcvAbUeHsWFL3TG9xd2WqekYRvFF8cJCRjpwDd1iiST7Fav1CxejnFbJ5",
  "key18": "2jSA5yQKcaenB6ej7NZxSeqqqs1t5cgs8wuBLJbbLT2vPkNqBSHWjtcg2eroaoMSLcgJ8gfbemTJr5144vPgCz84",
  "key19": "3KK14WtqHXZ9ZZXtSZBBwm4b78BuiB9oJy8nnGpfNygXPExj5xjbfdp7izPNpAFzCzUWgPujxUNFATUaANiQYKkt",
  "key20": "5Q5tXpsBZnah1nEW5YLWJ7GAAMbKJSne5oeCZwYHGXF1DGcRTfD7aChgN1yjbmq6xbufChhHCKn7ttumCewcM9KE",
  "key21": "4BNSuGUiUZ4p6K1U5X7nkrPnk4X23Gd1rU9oKwhBRJhToGRR2Aiq2oq71j9SWnJu5suJdBUy2vxHGbDuPjAL7FNA",
  "key22": "4qL2rRT2no3y8SBasvyaTaycp5H3MBfDdCwWy7V7bSEGGHpnPCacgHPBxhbEFJaobRcCTMfJqbtqReZpZ4apBhaA",
  "key23": "58hi1mBLJg7wqdy2Vs6dpKRJ2JfBHRiatUeH6PbxrvKjvggShCivppjkRzBiwoHG8MCdrFHN3ptcXuBAjCht9d96",
  "key24": "4r2LHmPbXauxxnw8QLnQSk3otfKYULEFCL1rHmXeTAHT8HkYXUXHx2eNQiLsXb9fdNy366EzxCw6xHsPW8sBkApy",
  "key25": "pRbX7dntuUgMBaFQqsu2VQZGLPvYPLbhLaXYzHcv4x5GDU89bZjwHMLCs27EhyXwNMCm9vxUUEjAJ6SDGjq5Tsj",
  "key26": "47A5NLYwWtPhnTLHytDaqK6mbk9KpJgajQ2G3XQWiYn2kj7xnWE93FNi8JnZWkTzFwceQDvsSbNcCxu4zAJHZ38Z",
  "key27": "31vq717vcqynnnUt9qFcVXWJzgwK2Wzysn1NjFJa4yMgXGF6eK4Va2GGf1UMb3mwx5JGAMWmZQnwb546e97Gw13S",
  "key28": "2jaUFhjEsHCJAmhckkzyHvPSmb5TEx7TaFR7RNmiQJMfssbiTH3D92kBRahVfszA5mywhWejVBtnbE2zUoDd4vZJ",
  "key29": "3AmWywde9C71ew5JExu9Hx7jxj9aspK9ahe4qxmUX7Dz4Fzap9zUbF56FXEsFzcqiP2GiYrtnVSNyXMJUwYSAwQ6",
  "key30": "3VGU1b1ESpj7sDtW3GCnWmVMCVhzniJV7dNduzEkt7ESXLWN2Mh4ZsifDxzFP1CdjickuZuQE5xrGAX63xTTqkCn",
  "key31": "35AJAHEV5iqqoeqPzJxo5cWNvrpevnmhEQG43vb9KoRfkQUVXdY685Wt9EtnvsJKSQvNotL7U1ZmWyumf89fjHRu",
  "key32": "4FY1iJiYLKwEQAQ2bNHdQ5bQWmPnrDBbAsRJsW4ydH7tS7kWxKLsKasMKqBS9hGRW1dRH6EywbMVxfSsZRCoUPCx",
  "key33": "28JTeZKdcywsnAJ853UkwH9buG511pdMm78VFv8dBRCGicQXz3u88XbJNVLyfomXo8xYbxr1Xv8CXrs5scoVP9dr",
  "key34": "3mkmTug3Cz9XhzHHju92ruvK8SF2PhEYVpmMMZ9mf8MVZBVMCgw9pUM8caVxAQ7uhuNopBxsG8a1bLfa6vUVeu1k",
  "key35": "5PSgn4bXFMnaCUarUQLZZoUvJHAc2vXuNiihBDUDnVV5KntV6FgvuPF9eCYmbFWGrdQcf5f2bF6FHp92azRvks6Q",
  "key36": "2RafGcNvTZHr51LYN58Xy7iAxJhio6dez8XaAccBFejw1PqYRFSyT2ZqzexXCY1idxoS7iUE2w3yDwpaXTLQVE5Z",
  "key37": "3v7qyWm6AJfL6jFCVEy1Md4ERb46knZPdRYaMMQcCMkUzaKc8P14JbC7F47RjJG7fy9t2NKCeFW6YWP4S8GcAWv1",
  "key38": "xRyk8saLVXDZnhTArSRUrxcTHmp2XJr3v1SW1fwsmNpA6A2VsKS8gHmEFktLNgN6NpnrrGoxjwi2GcgC92RTQ3x",
  "key39": "4fs84wt1fKyYra15hUYXBMTvGtR8EEvFquQnoFedKX9mc6zmq8uACpvfg9qZApK4PpDZHRCGpck84eEiwAgP2gkp",
  "key40": "5JEUAkS7hBe7FSdU4qLRYHRoquxtTxpHdgiFQNeQ1tWfNRiQQJCWsQUV7ySra4CscMWtd76EXYvgULmQtXYgnYBw",
  "key41": "2zvyLWP91TnKVghBzqp5Jarb4sBFsKx2wY5LnyWnCKx15prYysCW3oPx5uUz61YvqwVDL7HAbburNDmPrxp6avtH",
  "key42": "2uSUrW8jFp1L3ZY1QDHbSHuvMaQRfUkThRuEZtHxZv9FQAJ4EzcAwkfb7K6PpKibEVyzqHq44oG5tdrMrt6iK9Ao",
  "key43": "5soJEjCmd1cdcEcWM8cxbkqxZMTFvaYMSeFkKzbrWG5yxkh7za3B6WvxQJrgjZYnXno3MTR61mCZSB8CSAVZLN8"
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
