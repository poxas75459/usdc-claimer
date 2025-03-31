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
    "MjQzVnff8xvbSBjz9AbtUo36cGaYjvQddBnMPnokhgUoWQZqriyQg1EfgzV7uzS2WMVw2FWZa95tqVmAhMhE7eq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23ibuLJzaDdguauC5KtFuY5m3cNG1FxF7BwfSJdxmU1EjisgWt2RpxqxAmgGztrAo4W3azUjbW9rE7Do6bn71Qxb",
  "key1": "4UTErB4iiwa95MqGxoNaQxoFjNP8Q1hFeBAKPGXfA2HgJrQqQ1ZWCbpT57EidgbdCVtymQ1xTs4J1X3XDnjPSdr3",
  "key2": "pejv6HxxoVepKBCAUmh5Whrod21ZyRgtvwE4bhJdL75Lr6DJmeuD9hMAoFnpzPMMHCve2TdcozFgi4js4GbR694",
  "key3": "3c1yYk15qwLg7zTsDJzmAXAgqDoT7KWc3HvBtDrtsVAxcQ2qMzVEPqEbEBKvRxP41ZS3X93T3x6My9sDvXPAgTb5",
  "key4": "4X85abWy8PAyvLmUH2itSg4M7z9uetxH4FyAxsG7LW8JawDno8b7yzcPYrBpJ9v7BWv59yiQFQwKipp4xuxyzYhz",
  "key5": "3Xhq98a8FqtvLgJM45vR3savQXeaXLbxwX364CB9sBTc1BzCLDG7cD8x1TSG8e5DjgNa7mZxYTqx3wZGEAaAgJWF",
  "key6": "4a5vFwxwBfTCZ5Wh7o2YhZVEQddKBwQbCL6rzxHRZ2eDDRiEAGiEUv355UfRde6Xy3UWa59NcdZBZ3X6pBqy7hHw",
  "key7": "pF62iJiMxmBMjofBPxYH5Hjdofc7x5YcggUiedwbeAMZgb3QsFwvd54GhDtrWggyeMrMnBvdRa6ZEPiX1qRW2BN",
  "key8": "2C3ZFccSWpZsNoh3mGHhJYYATxpjLWu3JAuBxMqQtgFZUnsYfesNPaPfwhhKBw1qordDSGQbVEUUzjhyY21qbCky",
  "key9": "2R2Md9X35u3JLcXE1d5nFU5Vwk8ESe5avmw2j9jFFsRncj8HxKnMwD3NqDEFx6sVAr8zn3XpjiNPMWT5n7r8YaKw",
  "key10": "Z8UyYBeUbAw3LuHu33gBD7k4BBGqypDmiVBfqGr9kghQyKTKrZZP7Q96sc3Xx4xgAuzks96qJcieAsgP6M4MUq1",
  "key11": "372r9vudJGvA1YV4fZtiFNEtwr7wnfp8cWNVRXMK3v553EBkqeJThCv4XrFqRjnQL2gGwDVuVz5qQsHAEFgcBPsZ",
  "key12": "2SF5arsbyv8Nk4agSb2zxuGM3buyd4AvcBg6Cx7p6tae68MCGxbTe8b6swHpKvk4sjHJYhp3gSsQCbHg1Up86XsD",
  "key13": "5uU6jJgKZhhaBHqQyAiBuBFxFcJ9qYqsUjFgKNC1CHeX3bw4qhAKZgdtet7hBLxeN8jBBvjWHHDpPRUmtouu1SGe",
  "key14": "4H2uN87e9TAUg2X7UrhyfpmiZ4cAnJTozFVqEt7cBAog8QNbnaqApbtC1uT2UknocTGiQPLF2QKEPMHAMHyHRX22",
  "key15": "3xjvcpELn2ddAbYgJhRkztwnp7H3AtghwjrYtvNSvff3aKTsrXMEvzdWpF5GPsvQy4QycuYyDC8L3xsxn29gG3Yg",
  "key16": "4AsmQ1RhXBbHTyanukaTBbkfHmPkXLLqfr5QnU66HmoC4T8dR55cb3b1guQo4YmiNqQK5Sc7KseWuxFn4qv2Y9S5",
  "key17": "4yuNDd7kVaH2Jwjtzjs6Evtupa9gCGLHzLWTf2MPuCTbCx4cUjikiLr8SznKvMzEupyPAgcFujLwahRj8TNJAjEi",
  "key18": "5KTQ8YiCfBYWghiD7RrHdq3LHQJhR8c88XSgXzJnZ71RnAS9bM2XnMZccGo89rv4TRYveo7tJtGg1PWojxFr8G2t",
  "key19": "2TkfuswkpSV8YfLzvW9RCRJ8YXwJZPkjVXvRSGET7LNfG2qgTTR7xmoziDvakdxMNiiM4xXtTDKMNXs7JQQ3U2Ts",
  "key20": "48bFePdc2fpjGdFuyjX6E88RWMPTQMZrJKsDwL4PFW5zXeCYoUb4DYnMpWuP7QXzWs77UdDhoRrj6PGa7UDzaCXx",
  "key21": "273B3bzxhnjZNCdVdV5bkW9dLbvbPYusc9b1ZnrhCoYbWWpHZXEBPzgSswLLwZMoudfxyMbBwaq2ruzk3tmAh5Qg",
  "key22": "59EfkZnpvzqijogp1uSto4B91bhYhQumDmbFAMA4kGMBvDbrh2NW4E2N4DGXJngJqnw3rxGRySVvfhFEUS9XB5xq",
  "key23": "3tYe2Yf75KrQaot568BxYV428bpZcD3DkhjfkeW5TLysbkstkDLu2uky9MAKv7WhPzN8pi2QBQxxc3NDL25kTPP4",
  "key24": "3uAMWrbdG2pQy5LwTPhpVM67iuytUTwum39HH2GwXZDB8mAuDFRFp2M3PRkRLiz2mabCwcAxr33gjjfEFng1zUE1",
  "key25": "xZXXUzkGdpsgCTqqnTKp8No2H25fEw5L3vsasJMWGB5hjBkFQT44Gj1sEExYQcPyxGyJrVPdDpwwY6QyvQ4hkpC",
  "key26": "5LjrrJ1SVzMunX1Y4CqCUxvxe9B6WhRW7hg9qBzbEZ6iwmeQRCZZh42q2hV3edJWHSvHaHz991nqFs9R9w4Lsr4D",
  "key27": "4KYKE2F3sinDHHS42fua1PDb53aE55fTH8aNUiL59PeR6ZGcuRCZDYFpu3KZ5cNzxtgBQDbyLXHyY6VdUPAnsg9V",
  "key28": "4UJiYYseBzciubhXZpDCVvGyvuqxhGw9juREMkkSemXGHh1s1imaDakXnpyprbkigB1jBYwwCWtNqYSt1p41HhjX",
  "key29": "2Yfyci7r511FtAva5Gy11xaKMsxEa7Ba4ag43tscqJEoBWpBYjzG1w4usjyE9JZtu8JJCTHMMREX2tGE3M1LusS9",
  "key30": "5nF9n5jBWYdN4BcLJ5uzGypTGPpQFthWS8ZikLg1s6MH6JPhdZnfZFcdtGp2hLzugpTTNYcDS3L7uF8uc1FLzynk",
  "key31": "4iwcusMUHdY3vgm3eaz2irFiceCYARTnVRR9KnjFcGVWAZ3YsZts4aG6V5T6khKQwMMLwcaU4ifY8a76CfKX6QPN",
  "key32": "2niu7XoyxiAaFVb42jq49i8u25X78DnnWG1JKpUqaqRu5eXtjFJMoPs4tSiVg3Tzzp8DGx82vrJBSdGFaAH4zFN6",
  "key33": "3q4zeQ6wxN3Va6UJgwzwboWVa1VXEuuQjfiimQHLVJLaR7tKdoQTeydWwzC9X7pRMM3n8vWDb16NFNPX3oCVkxVN",
  "key34": "2u9GKpqtTX4yHx3XQnrhA5HVrFerchvzmHws8M8raWgvbU8MmwC2RAzELJETVjdXxuVimmCfiBWX2Wyib1At8iU5"
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
