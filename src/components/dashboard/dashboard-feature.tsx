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
    "LYrrVyiXXgcqc5yE7rEt2WGPrwCkgEsMhhzUyjS8uDZLW4MnL5SWh9VpoJ8THfGCwTnWCTZ9RrgMHgRaEfUrCFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uQ5i98wbZFrHVHCBtTP2f8syns1Lenb1KBfDwVtsdjizArMQcqZRGAzfLstQdKeWnyhAnMgxmVVy3zytM9umqoX",
  "key1": "5FuxehbtaQNv2J9v2ZjnHnA6ivxhXHSh3fhKzPJ2e7u4PdCgJwVvMSx3yWXypMGEfPmBNtn9utsqJCmRu2zFkpLB",
  "key2": "4VPnPzG9fq713TtHE5j6Dpj9agb62Rw1eHq3oMZYZjSgxRqKP193Dv7kG5zdgjhxJp5ixKiJfJ2w1fdaNcd1ytrS",
  "key3": "5eAB9kisE1JqjDHaxxQpUxTK3FY7uE8CVVTth8aYvNNUXPzRJ3me3uXJjbmv8QKciVSPiwAKAvcvU8D148Uw8McJ",
  "key4": "2BohYHUtvzRJprdsYAN6bRry3sgyVNm7ZsrArPkdXWamfbCuumzcfH54JMK9LB11SfHKRcF78vvk8TMaFSBTbpxK",
  "key5": "5q3K53h47ianpB9W57rhGEgmpykZ5vpyjsfsGWrkpxD4UdofFp83bXpgQdHWgyZQkMFi8VU5eqgaWYhPocD53sJW",
  "key6": "2v7LN6gegkxJXoB89avs8grAyLL6h5S4eyoBHeX4Fccgi4oQnMyoeYb32qXFuAaRHqXjokiex9PFRZqS1jiZzoZP",
  "key7": "EGApfNyxaiaEJGMq2QuN5i9ZaiRXgmcZGK2sq5QxJoGnhJxb4H5nsmra8yhbDzxvuLE7hiHQFuTqWx38tVTTNux",
  "key8": "4ZTqd7EMT1R5jtZJ7TgoSsmeWxRdjUwTdi5sR8jnu3WjG2AuNXYtbCTxVPCtcgyFkjdcWqd3EhxkvTrUc3RpSC46",
  "key9": "3ptWPaGKY9kV4sztT5MZA2QWN73y8Nf6Ljy8tLBwL5MPjsW1G7C9FQnDj4nDvyFTbhtjV3iDgecjorVkELD763tm",
  "key10": "5apn8TpKEEt5pif1Rix2Kr7Cq26KMdJkUYTSc4S9HDapHDtgECUbHvPN3sNr8aEBtbqpYDKMhTa4Ne6LAv675Z7",
  "key11": "4MQT1be9T3b4EL8RYf2XKb3fT39KWnPzYqj1ZyNULaCNY5FvJ4NdZyC4M6ovkbF7vLv5QcRdGfZFx36qooH51dk7",
  "key12": "4qfKa7iMYNZr7zUDXYMwJ5Yh6QxvhWG3pUnPDadhBqEXTFgNSE7WoMoJWCA5C1YTGbQACYKgnF5xadaEgHMFfwCE",
  "key13": "4PdFrdZfLB9qLFAEgdi9s9fEMJeGtmf8eBtWqCCCrP7vu89Liw1PmGoPyYQFsDM1QWi37TFvREKkBu7DpbTZV6F7",
  "key14": "2LaxQ736dv28x5VJ5SRnksfT5UXKJX56ZGbLfVyo83u1ftrNxv5HNrCapCRPtKdwsjr71MuRSsQBP4stxJnucaFY",
  "key15": "3FL9bhMxiAfwAyhcjUq6QAiqpfcmV1hfRocCT4MD7KwC5ByQYhJMdkJWTVDhDqaq1aDpTwjjHQqpmirVkrC4VZJw",
  "key16": "4TUh47ZpbmCW6P5fjqahWc6uZhbLX6DWX8U3BpYWDGoW9Nu7Ras2ujykQepxPrmMt7fUF19ukCrH4ixifrefJt8b",
  "key17": "352sCPEyt1UdsX85UFh5vcz3BWaK3ZVGfXMWEkButG8khW3BD7TjpGqdwDhxrcjFvaWkRi1X8TxqMYy9E4tZNxHn",
  "key18": "Q52LoBh3tRPU6fzcxZuz1FBgLmNdc7E1g6aWXSRaCxQyoCf5Sts8dB7hDD1aTVPaZgAM4N4Bis9dDdkJg22Ac7d",
  "key19": "4YNsa7quzHatQBzWF9HH6p1ejpXTKhCEvRARBbrihdvHeBUm5PhXGRqGYFwxGc4Wr2XbyxJoZvGFG9SfpF7Jr9w8",
  "key20": "j1uovoQBvad9wu7UKyZMx9xyLnYf3Ywap71xWuVbERNkkfCtyHkDNrfabienHZdx93wwrXnTkMTc26GWVjuYLHT",
  "key21": "4f5FaXDBaDFW9wMLqVFb8eTgtGYtbAGcVYF4FoXWXUCcNpqhVhHHZy21P7rBD1CM7XmfYhXujvRAZGumxnzSi2hM",
  "key22": "4FW3P8ijj6fAZ1WNcuRbw6VKsr1Ry3Jjhzruzp9BbvqzPqApYVPAzAoJt9JVBj2TnhQrv5DuSUrfETWEAx578Lcz",
  "key23": "2yc2k8owcHuA4EEk5ezSJpt3dQD5FybVvVsx7aj5vePYFGnbyBiBYM9XsS2cso8BXRVGsAK2GCTxJR3fhBWXL7U3",
  "key24": "4mYYtm7fWXxaSwHKdUi2zDaCeLK33hLK62dbbbMiyxXynE16WVPS5zJcVzPnbFdxz8YgqntQvGPDQt47ZzTenCzq",
  "key25": "cJvr49vtn5azseRhMgg5aMyGW1FXtYP9BLhkgefGtwC9WMeJ7hjdpB14xXQ5EC5YuTrvHvBUH28bWL8Y5JvScqk",
  "key26": "4uaEQbX7qboUqnUNpjtyPg85E1g8gz2LLWxCUTqnrFd3qCiwrabeBHcVWobiKqScS9usfMUNsQYNW7HPN56hYDwL",
  "key27": "5bRaZvHfdgqoqPERk2VSHf161ANHMFBDB3V5We4yZEJXeoh7qhyMKeYbKu6LRv67bAg8niN4LVveoehntjEiuBjg",
  "key28": "2Fn3sYzNxueHFYutTHwrcBqbSrkd4Yo6wcN1RSf5c5twv7DaUiphhaLuC45bbrLn8Kj2gpmNED2oY6BmNtcmzomq"
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
