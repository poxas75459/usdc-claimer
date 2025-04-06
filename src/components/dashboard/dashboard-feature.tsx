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
    "3FBnWEKTMjZpcxZBwcn4zPyqCB1DNi5pSZC5ip8NUGgfiwcBzwsKDsF7DWPwnNmjsHyKfVsN7iH2D88JtufPaCVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kC4CDmBmA9QWeV5NcmQjCZ6Y9iNFNiyeEkh2djFSVVS8PL1h2oNB3WBaGT9YvnRVcdUJUquiSmi5fNr6c8uKtGH",
  "key1": "64eppdXU7LBSGCKNeg5nW2FSdFDGMFh5BiE2FscwZECe22e1y1eBC1NwqmddPg2zaJvwaHSHchPfHyGStNX3wzmW",
  "key2": "3zY4NZ9SvyEYSTo8LrChSgPHXhmQL5uVmXjx7PCybBQe4pt83p58KbmzhW5iZ8qXG1m2qpXYq4hcBCQGNii6DSwq",
  "key3": "3P57FoyjXAx2RyxSFJgxJzfh38uh2KjqMiL7ZDu6F1YUQ69pDxDckJ63A3ftMdeTr1AHCsYgyyipviHDkUqwfM4g",
  "key4": "2FsMSJMRKSE5Dpkss7uHhfhYe16eq9YsS414xURoZYXUqLNQx9DPPVhnA3QzcF457NsrdeTJpUiyh8YWjWhz2CiV",
  "key5": "LPNYRCDS2yhgNF3mE3JpEEb5KFMb1ZtjTqAjpbEXopnEaXuKZnAS4ZF2DnjvPgCugTVytADw1LECUSQqdhi75s6",
  "key6": "4D1TjiLtUYR2uSFmsmP146tPTruLFDJHMAz5GAKTKzvBB6EPAXRoh913i5ReTV2LiSVULKExTD2vbd2XH4EQqdsG",
  "key7": "3apXDgbmk5h58MJD6Ztf25JvXvUeVTv4yGNjuWTXqbdehbGWWmfeanZBFpXMVjXdso9xNYbHRnxeyDAW5G5mnxSu",
  "key8": "5XEYT9qAkvKLxKfdSeuv7t8z74oaVbksUF9Fnx7UaHVdTMyeTADRTXioFZLMAmEHGxhpGNGXzMq95T138p6J9DhF",
  "key9": "27qwk6ssh4s1YiZUK2R35s4GMzkfh432P2o6D7DLaWhuG6tRoRVsybqdZqxx8MAczjmE8KtsPAF4Cdy9rcaZyMnZ",
  "key10": "zJeyvXpLa7jYqBZGtoppfHscbcMSj4UHjSoNLGbpX25eUUqWTvJ3Wc61KTdef5qoD22uFUKYXVwYjoLYRjxVB4g",
  "key11": "45jbxSbWVjDXL2J7ectPgvbwpVRDYAETHjBuCi35imGcZLCp9dop3wodva2eFXXx1ZvjY9LKMCLsPY7XTvuTTXKG",
  "key12": "yN3S8a4yNttbN9XMdxTtLLu88KZnDSevEqFUZMSsxtcMVRx6yKFDf2k2ks7eUgr4qW64JbLeVNJXmiL2Z871qxL",
  "key13": "tSCN2ZF5RGfqV5YqvoRM4tqFRzjYfVcZ9hCGcA7iY7qigFA5Kbbr1QtmRZAaj94TnucGdTWV8hCEkgt6iQDV5n9",
  "key14": "2et5o4GPCmoA7VBwBPTAYCSSo6w8rGRmtA7o5BtinAzRUWai9iYBsjBQQUdkdEfegKYjWW5WucSsqevYpL3ttanz",
  "key15": "64jjP9Dd5bRkT1cWycWTBgXReMuN4eRCseTFve8Y5S4PpeQ7A38yVV1oHtAbtSaUE6DoV3fWDqHywXAQdvMdK2Hp",
  "key16": "2xtRt6aaujB9E4PMNSpTUk7rKV3n2MMNYFMocp8ULNpCFrScDywZvs38dLnNP3gSrxpkHzn1o2txCc2VZLpFpLfz",
  "key17": "3vriyUpMAdgvSD2hU3TmnznXaZBDSkSVHE6mDt6kq8P8aymxADpE9BXUgvwWhiSJxC2Zv45ZSFwc4tfRmW7KA3kr",
  "key18": "2WAJMtNorK7b2QqYKUk89TUTXVjjs8Ukd1LpiqBQcsKhBQ66VGuS9X5hnjKTvFEdzV2S248oUxWPoU6yVrFyGW5q",
  "key19": "2knYpASoqS1JQSgsshpG3Fd2vrYxZVgLJAv3Ep7RdbjaVF5ZCFNU2qNHUvCLVqhpTCTtRyFteePPhsrchgG7p4Hw",
  "key20": "3tm3eMrcw4U1PNzwAYqdRy4CHAuZJahg5PbCB9vhDBPQm9Qvs1AMcFkmuCF5FfV9bFuT9vujPSG7Uuq7Yt2vDzqo",
  "key21": "2paVTSmeVDvqkKMSL8BhEoh8pxC1JfvuLp3jzSvd3RNxvfA6A4JhUP1TR5B3nVFzNp4sWrtfP9TuCyS4PF6MVY2E",
  "key22": "2DiK8JL2qEwEUzLFZmKX2esXXCGWBBy3LHjUKimGFvi5K3nYXD2RnMEeZgV6kj6sdpuqbJEQXwsNHYtVfVhxRD2P",
  "key23": "3NAQf7YZYV1KSQTaBUApiP821UCwbvTJfi8wwPFAqro5sHvFtPidgHo6B1hu3FbkFDcwjPe9NdqHnmm5MBpoazeC",
  "key24": "2ZayAdagrj2Ju8K4QFWphqNLMGeXRtVkVSZrm6SfA36h7NcTbc3fcoWGq2pm74EYrQdbSrqB3JewcEd7HnL4faWx",
  "key25": "2bD9btqpFcfBJSWksp3YAhwLWUbP3vHc2DAeGFTUpSZnhEY99Cmp3BF2951w5HDeLmMV4H28tEUG3ZfGvYurmSsF",
  "key26": "46yU4PVLAsc3PMz21jmbuqDB6nnTswauxjE7djdBVjrGBUtJoiSRTez36BkV8q1Rik5CKUWHoLNyU4pTG33pzrGu",
  "key27": "JjqDzBcSPuwPKnG6Q1TBwYFBvC8PF7sjwec8ctbH2rbXCrjneYckyikkzjo3r1kfC7URiq7DqKH6xW67W3SEm9Q",
  "key28": "21GcHgjgnpWCzAyq3qtcNqGFvWTCdptLWEAf2JLbwuqeyFLHqNbtc5zZaKS8y2gbRkapKWyXFNdf7dyH45ubs599",
  "key29": "Ej2w7jnqPY5XNiYZWWkBWLxPr2wdqNwpXejH2abDWiGCQqvn3yJbGRDrVAF1LGHF3RaeeAeHAxXxASybY9M5TZZ",
  "key30": "4MHjJsvqpxLVzCtQvjN4NGPxut77BKHqQcZSPNyVEWBQ25Wj2NyyomZvH1kbwr2jjrNxnhY9g6zfS7x8YHqJSqrt",
  "key31": "3LwYMvwUBsV7opeBa6tavF6HoQkBqB4taXaH7oeuL8BMooAA4fSnVQL91BbUaBerKLJkcy2tojTv5JeUy7ReWvti",
  "key32": "2NETVwGuTk9mS633D6a5rhrPhjVPg92NLKUdhHtC4iepMmrTES1gHJtmQ5XFvkNixhs2M1ZSGX4zr6PcvaNUDwXE",
  "key33": "5xYaYPKa967cquWVvTUyJqTwn3TXdgwzY8zJZXYgwUkya7YxyQWy6AJcLAPS1xjyyEv1LeD9vuoASzdZsHxjHUYK",
  "key34": "QqsmxoapQhHwYZ7ZSA6mXMcSLUreD8rBNxWHfHKSVA84m9zKjUbmteu2tv5h7Ld4EzrRgiPE617axe7E3hKc3cm",
  "key35": "2FB4KgoJ3tSvZEU57LJHX2u8gSaFSfQhpJLMoS7sjAvs6XnAsAYbneN1MC3na8MZhJq3F9V2mZpceK7qzpBgMXrH",
  "key36": "5REbppCdpUboEzDKR2vkFsSny7gnNGrDGfcJR8msS89tBPoMyE7uNmsxWkcj6GWg7gfUw6zziMYKqbkpcr8TLCoj",
  "key37": "5DybcZrfuWEJejcCx2EHiLbaehZNouJhhko9NAuhW71EtaaJ7jP27xy3qP3CLKQM5P6amZaSnvdZbH7aBo16o8bN",
  "key38": "4eZJNEBjN5ZvU1RYzz1SPzJSXUG81tL8TzBrFuqbFN1P6JWMQE3THTdF5AsYzFyFLhpEaasYJsxQXQi3c6cFBkhi"
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
