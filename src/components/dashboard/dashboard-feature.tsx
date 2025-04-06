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
    "4ndC7pPR7De11XKKWKDN62YGG4sgc11jAHeEwanR9QZjvd8R2y3RyvsA3baif8vWiYchoJd8SPoJKBZGwoPtJ2jb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gj3aXy8oaTSPR3Qtyp3cgf45DtWxnCGqb9tjP36aLkmA8YfUbV5jq3tgrqGmR7KYdZFVfddbw5ugua8P38uzBer",
  "key1": "5X7cQ7Say2RjkRzM7XQXGzZXWZHeAPRV1nBTftsxCjKa4wXzcWsqiPZmL3mW6PUiEnxVhAWNKSreD8gJwEQCFbWt",
  "key2": "5K6HrBXw6PUfSRHbqPavrEJ1Vc6XVU8KiVAt9xaZ4HoYfisRuucU19JmH4yttSP5P3NTumueL9jyE3LZvNmKHJZN",
  "key3": "mL19MxPPYHyDnRwEnNVys6mSDRcgWX1T9ahScZbT7HG68YYH9GuDuf1ixMDPnE8LtdJMVV76kN3HL811yBpUa9P",
  "key4": "4MAzshnD8oytAgv4pXtmYi2UBswrYWjMtsMmShqAUq2bNNM4evLLC89Sc9Xx869s1Q7iaw4WGbyoXrEDsKxJNute",
  "key5": "3Jj4oydo7UJQRbBTyMiE7nm92BpL1AXYsWWjMeMrNXgRwaPbYGsS9q1GvpCXKQGN8pHwyogujVh4waZwSsk1ooDJ",
  "key6": "59R5BTwwAyEWUbA7h3pWvWoQcqMt5eUhSekKDLtanLc3fHreLH6JeB1TUtSrCMAVprfHcXNqbDkJRvC2ZSji9Muw",
  "key7": "63Er81346Qex6q8zxJU1fiaupnBFu9R7hD1qirCFQN9ExYukbs7f2mWvX6p7XpX8HX4Zhg96PutA9hwu77DzM5fS",
  "key8": "uJSS9hd1B23n9Nccui5XrsiQEKktK1MNRUgqtmEjBHzXyC3vheR9V6ztoykNQswqWZ3RFNYaswyHS9VHUDAXLDz",
  "key9": "3jnZe4rmAxjAsyZrT86qUcBRR8RqZogYQcf72xSiyVrUZwzAcVafqabpCtinTpTyTAFSQKerQQjT6oMoW3aFo1ga",
  "key10": "3ZfjB53962sr2o4gLK4DQW9CzU9v3VsgD92JKyPnmk1uzTBrqVZCmN8zjt8uACovwgSeP1iLwuFAf3mLKRDTzAPJ",
  "key11": "4usX1K3Huobkf6L52mgtK9QqAu27unN8xJQqF9b2n6ARSDcZZyYKmSKC6eVEFshLv6gzLjbgVjksbX19QipeU8LN",
  "key12": "4tC58VMdHa8SSoU8pYf8ah1zhyWNMFV5bayYt19yNSGUHHpoPyVqxJR4jWGv2K6Rbdd8pS43hs4T1XofMpFxJ14c",
  "key13": "4D4N434wtbTJv1wePmJNeYonhYoGfx13GrQRqXUYF5MqLAnVBH6zt6ttjh7p1fnVwsPMBycQpC3ofNkMr7wuMcKJ",
  "key14": "2fTuVksdaZL2xqMzKEsHZpmB1Ey6wzVictqiEmWMZmQNHNjW6CQFZvZJNg89hpgtJfXKiNFwR9ktoW19bMcExXcj",
  "key15": "3QFJtKvzRXvF3FNhLzUnAtb3jVxr9YY64RUAeCdeYuTEzY7ktrheXV4p1xaRwYt6oRRoZoJEtRcVM8wEBPicnMzE",
  "key16": "3epUggxg67ZHPgVsz4zGnH2xpQtjXP3xRE2XHubfL6z7PnFvszfB5iuFTYnHuMpsjsjy28QnGR3qm84cwgFS6P5i",
  "key17": "5ULg2DvzpmA6kikwb5X2bteP2KGswLC8Y8a3NbcSGEsPfcPvH6ragLHN3fuMjtUBkbYcDdDJNYfgSgYyZy4nJbg1",
  "key18": "3bZGpMVKqGR5vcnMmjAREuQ7ETQze2vmjvKZCYT8PbXGzcF8ff36wXfSRFswqr2BL52SGGTqM7PnbqonTF2FYNZA",
  "key19": "5R5kSH73bM6otE8V245a66NWJ51F3y8zQSd5qFCD93wcFUXoZUbQ5gcNXBFB4PFzxp52LNUeMPrwNWhHzQCMdhbj",
  "key20": "2pWGXMvNexxsJnPNfwNcL7eZQ4zKw335g7Za1SBebisfgUY4THz4cxDuQacEvtV6pFc3Pdz3dph3JaRJNqHRU2eJ",
  "key21": "oEkH3nREGSAxBvw5MtdbNnAZ2HWrhmR8hxJqd1gRszxcPmGwZ41NTQbRsjNWmnW8SnCiowjuyxdUs3rGFCjhwdx",
  "key22": "3AGd6bdrLY27RbuZ2i4c4kGvJjWtQTprPGCVEu6wLJcgLQP1zzrmJWJN4FQjvA3Cc1bPPWuVJhjKosSfiX5hL5XM",
  "key23": "24jJkZuH2wySrXw5sA5pKwEJCEFYkUZS1tg4cutPpjxZbExS3mTEf7BRZaJmFBrNsnig7qNuJsXLDUEfQ7wZwjKY",
  "key24": "4tCDA2ENEQfaKbun4zRuDGisHXgkCg3PcCYQf7DYy4R1buy8xGRgdmBFHHy5L6dYRxsNXxDYiTA1a224S5FgLZ71",
  "key25": "5y1SbyMii1y2NZhLjyYQjWtqDcpQwEdhRSp62xTAJ82rZPtgRZMs9xkt3WLtm7GWb9fXtJdWTFm943vBigSS5NZB",
  "key26": "d5rXheZf2HouF8tCtGvvWJR8hQwRiteEvnb1qMVVGnrKnfrVG91HXSkCRfPHht1puvqo4brDA4oNwzqrjTM28GE",
  "key27": "2tgjKeDt9ucKuoMVJie4X7N99mDPx7h9GV9Q3v6ccW4cCX4WuSQ4ASHp2S59mWDMr39P7E315jnAThXoCKX3xoD1",
  "key28": "3AQJgrxoYyWcQEYTvke8XuKyp7GBvAR9fiLwC9NUfMWBwQqGENNXxHhXiTMhPy6RW48uceSEU6oLD2P3nyjsGExG",
  "key29": "2nd2qN4JXsu6oayueRmMFNFLvnA9UqTqoFtfcpx7FLF7UsKJ5zjjXX2cStimqh5hLQyEtDMHUhTkLGUa5J75fvvQ",
  "key30": "5zCCvN2xQEikgccynHvBVicoGs239yje63xK7vfTxf129inZjfNSpx6C9u7pBSP7ChtNHzWN5JJ8BVvWSHwBWrgj",
  "key31": "5XUhizT5G26DVN1RdKzXDAehY4RdqWsvG6R8cL4hq359oB1f8QPzyLbmsHxdCvqSGGEp8bxptmTsyHiJW9kjdf5X",
  "key32": "4KbExrioppCKLvkCheC2LKfwUAeeK4QDfQHB8pL5w8rqPcdKJsvm4iKGMP7ZjK1jpZfuyQXruoJWSkNrkJncWzEs",
  "key33": "2Ap45tpbkGiEHqnY4HDRe8PbHtPPMejYXdyAvcFvPTH4ojYLNE3wzpQZuXv3qT3zufarSA99vgAzxtTEztM4ZhS2",
  "key34": "GAWZWbXqGnWQACFcUQn9744cSE3eu6BeFYZWuLVTsgTBxbKDY6DvxuhDXQU6LmkR5ShsoNZPVqK2Nk6tGNrhPCA",
  "key35": "3YcGfyzD8aHtK6KDVP1RGZiv1AWiizHq7of61n7jqg1MWZudW8NxDQaorhbNp3WRazTN6q9ah5f6iqHXtbb72EGo",
  "key36": "3sfXf7P3Ev19rZKjgBARQTZKJLTShXUVFjnhVWjPsRVyZWKhA9C3A495BDoXrda1KLXJg8XWSAPsRNK2fyq1qwqG",
  "key37": "573pposQdHC3DMNXhMYNwARoBX6cHSL5ou7phHCzVostYnats11sUGTZZzWtYkDXbiVPicc9667A38bevc44hnyD",
  "key38": "43krGAxML68ZuLuHX33UQkJTctxQke73FTjsZfjuYvgFrqSNY4fHx4sWQdRKf9rpdMG1JPhWtr1dQt5n1H3ADCxS",
  "key39": "o1F1EJtXSWsCmE24CbgKo1Wf715HKHff6nnZPUCXa6wuyyDB3QBZn9sPfibL4bDdQcjFfQHKTxfz6xZfN2Zksv6",
  "key40": "5vWWeWdZsiLGkqnMScQmVSfa48zKzah1XZhhVjE6VKshXe17tWLbh53CFB3WY3iTT2HYKD3bEbYiAwMVFagmATwo",
  "key41": "5H92f8mp2pCdgZw1BJTMAzP1kBjWV8FSxLeo77wujoZK7vXCu3WrHJvvZgYQK8PFPn6JvANij6yCs252x9TTJn98",
  "key42": "2RxbNDjH2aEuLMENg4PPYfVRg8Tc4mXBHyKe2hbwgKdq5uKD9XFpsoCfFUbMR1bH9Wrb6Akxe9GbuZEK3gZ2BhY7"
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
