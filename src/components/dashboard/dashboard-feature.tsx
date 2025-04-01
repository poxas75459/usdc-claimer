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
    "2cbV2ZMwyr8U4xHFZcGtcLidEjW1kzx7BhPj7oYhCUrRr2Pwk9YQgzgo8vkRZKgeK7LaYUrZUKy1cE3JCjemMcM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZTZrKz8beMfSnbmnhzQsEKBDH1XL7Fjud1x5aubx6tETCtnJADffHbuH63NynQMq3sQjdjHLJCHNA6rdRm2PTjU",
  "key1": "2xfRsVWQanQgaW5NkkhuV4vzfGBwRh1ED5PTpAfCDm1JKRdEFKPmjniaEhH11wKQoVjigyw9irV8RyR5QvUqAWxj",
  "key2": "5AGgjy9JVEEzt54J6Q4aWe89gbejRWDNPoWXGHmjvkHYktVAEPF4Do8Mb1vx7eVKKz3VT4DYZUrBkm7kWPwnEcNo",
  "key3": "4XZfk6t4H43Z1HpfZwPmhRaeCGxBMuR6mtnhLyhJP4vnc4EAowYuXsReMyfuBydLah1sEptwNCpEmTJHdyMzs4FE",
  "key4": "3Ld3J9TrHAfaYTJEeDLnnkoWjPm79j25LXBUNwfLJhHrBcxxr7JitxdPZn5sNr7Cr1zYLpCdnjbPrRCxV6Pf8xU3",
  "key5": "53Mj61E1Fe4ptTFnKqvzkxukrMa641Z65cjBNfNddRMsaRczcL9beTZJEECCoAia9rR89mfkWfJV8XGWLmdEr8NR",
  "key6": "2fHJQiuaWVUDic7bwyXvTYArR5zgErXpGBF1PApBGk9E4Bj6vn7ZtoLyB45sY7qVhCYo3CSXVAdSXNupuWgWxYSG",
  "key7": "2zuo4onFc3rGAbPkpHtYxZBTs1e5zZ8GL4EriEddqtYpXsPM1jSdpSiXT6WdBLimhzQQtM9ES9SvGtR5buEnXQvZ",
  "key8": "45t2xz1RMKXeUshdgqqQi4rhZ8WzkiY19ubvsU2MixfPQ97LWaHWAC1rTjpXvtyUDDUnUunNdFvd6JebV15Gs3wu",
  "key9": "3tgBzqv42NwGS3dRxsrNtRw33c6aZuAMn2V8UW2Y4fcJtsBQbZQ9455RtnEMpnMsZtKq7rtwU4dq8EaMSw74MZvs",
  "key10": "nBZUBc7R1tJMCCiJTyZRFVGZ34w2wk8Qy4yDsuf7m54Ti8nKXQyS2tGBd33CH5CP9aimDcXMLCXAja38DQES2uv",
  "key11": "667VyKDperuZuRaoBJe6YNwiV5BAefQdseBSTic9hbZF1uMFSzAw7NHhCbd7oD4MJprw6PXkB53xZVcPfzTxMTpa",
  "key12": "5axdxY6ZFi8ooG42GUDv8ft7DCf2EmSzeERXcUyXT71iuNHgngWpzZfRhVKcXG5kcVQQsd8rmkeAYUDvo7TiyLEU",
  "key13": "2t3DbVbG32bgE67v4F4ZSVAGFNXGUuXwDkad1Bxa9Wh55y252Mghi1XBBCDt8tFqtwk14qxaGL2uBcYY3igknpgF",
  "key14": "49AspiQGjwDDeoqdWTVFQjg9MCoF4ErLA2Lb7jXFzoxvyvFEwWNQiZscn8GvtAE9b1SpdaVcp2qRcdJu3pBH7pXa",
  "key15": "3z8XuTeQ2ZYXq8Egz8r43DA9NkHca8YenmruYgjRcDLteUHQCGr9vRcKE8RXYSQ8Lnh6Vt8YzG3y6EpzjR3r3ekU",
  "key16": "4g5UWrHPQgTjpBd8MuNwsRD1soYcYHV9oVV8vdATpekMmFgxqMgQZFJnQdPLUYF5RCpQaoz5bkc4rBWa6JdtGbkk",
  "key17": "54CXug5Fcsmk7mppvbqZ3CxPt578PLmWfTxPANCwoc3CsUgjAsWZctvrqPDESB2ZJ9GkZFDEzxg9Wd9wrX4z6SmF",
  "key18": "5zY65dKs9NRgC9c3oE937yE3rD1czuiyj4w4SNzHqB1t85osC9a6B4VybWqd4KtvcFMS2WqZRdz6Zz6tN9jkaJJH",
  "key19": "5f1eHgdJWPqwKT4NmwQpJmtFtYhzt5kVzt2QF9dVio4iE9nnvoqUzmok42q4WCNBqaAxZPES8uG3RNhV87xQbUxs",
  "key20": "25h3kp1dhPSUT4XBv9Wdp3oSiUYoBxsnH69o9UaS2NG4tPipG2sAQrnhKJzit1BTQsRjVEtrpfQeFoq26EwN1ySF",
  "key21": "2X9W9Wj6pwmRVauJkSAQcEUJkrKpHqxg7be9d8AXPcKVdJc2HyWUtdWWX7nn9JCfu9YCmyrYDTRH8iXimRsXbBPZ",
  "key22": "49Y2ijZAApUnei9nPpK9WnW2Ec1khoQWc4nvvsMqUWGkGFsZQRQB7kEq2FFv3WWMLZhpuj8g2bSdcFEarHXf9jjE",
  "key23": "4zTxuVw6En7rMvnBCbtdB86C4r1w1Pfdw6hFWAnfJVYxg3bsqYy5LH1DUGeZcEkUvqGTUBnih5KqCkTEzSRBmuhq",
  "key24": "66eEn3y7DPKPQVGsQMjDyQLDhTFkx4XPPkfof3e2keQiUH3w5qjGrpJ2aWqk2EQgiVwEaCUy71PccjXFRuwWFsKN",
  "key25": "aYuG4kYJv65sKczjM7vefD2dBYLErQ1ug7hXsyhjC6RLV2YtjcfQWaEzbJ5MFrFYS51uC5JFbBFjCb1xk5GD4Nv",
  "key26": "2jWXDazv6jkWKy8QRHYySdy45UFwMG6zFgyY3TJ4YSqMwWErK9WnpT6o3gtfX9SLFYZXVT1CdvdgDhzATvKTmZUJ",
  "key27": "2RdrKDM1oBB6vmytu3EWXW4QmzAR8FmH6NK22Siwr5ehpVPfQEnUQ3fXkqhbP8Ekrhx8eZvkZduNTaAo24SZuMKC",
  "key28": "2nmRjZAguHs6eUe2cFLmGdHgtnhnMKPN7qnHARqgMxBKdpmUEpMZDXcrZ8aH9fsXJxyND2vxmA51whyBUiJA7pMV",
  "key29": "4YxvtotWK6onzDex2gNac6vxFPqGbfw66XrAAPSb5eK9kUCpwXgaqj6X5Cmpc58CYPw1Th4g3LE4EgSG2Me8EHsQ",
  "key30": "3xFjVKYxNx6efBvvc1QnjjzsJyBmAY8SewFdojbcQnxx7zzAdR2AWfDinZzD5hRy9pou4ztru2QNP5MY6qzZRHQF",
  "key31": "4pJTYFfyaCrUyjYVXbGUgDdcKhNUoAWYZoFvGEutKWxfarvYCnLCNU14sar8p3U7TesF9H5mVj88uLUp3325GKd2",
  "key32": "24UqxJ5wXm9mvSQuKEpzfEhKVkZWhuDtXpkrfUMNs7Ayi6mmXpGkL9GQ8Lbotr2UmRjwbdmXjxjJNoSuwZpsFu6e",
  "key33": "32mFPNStdRcHHsZhVr88Qcfx5Q36Gmv6V9pSjtsPwcWWvVghYtKaaMLtR72boVyDTLL2SJx4ovxt3sF5S14C6v4j",
  "key34": "4qVDtMciJunAAKvcUwKXAp7S6q3sSwLnvksG1XsULur1U3aQnnvaCbAEvqqDhzQSbFguPRvpnno3Q6CyzmVNxvrq",
  "key35": "MTkyhfkrNp9MKs5snv5bCE5m8hYgt8mE6L7sgxSHBkHfUEiwwNC4Cft7SKpZ2GNpfm4bfnXNXiYeDMrYbMGAZFG",
  "key36": "463CyRMBMGV8G35iiDWb4zA9DBJzqq8ebcKUFy3No4rRJMDE2N5XBiLb54rWHxtWv33T4ieXYqmuBfkCJJMpndfV",
  "key37": "mHerK1CnUa7i38DhEmRm7mhgp6exXPNRKCCvr6ZHctCnoD1Q8uzFbwFFUKrLtrBQuUq7qS7knvVYzt7FD9RhLj8",
  "key38": "4H62cqw1zNb6qcgg5rWV6fR9AXTpEYDhFMg5GJB3V9MTjMwa6HAr3c1C6cGYK8GdjhaZbtDd6QxyaBobZS8MF3NH",
  "key39": "3UgET7gc64v2yvWc2Lni3xAAFyiB2xoFPdpnVnyVdTLunnNCwyx9HLETzv8MGp18SDbjKdxQg5pLkAQowxs7xbj5",
  "key40": "4vd7V67MY8jcFBWax1AfqQZaxM53GSANEn8CthAYUfMPb4rAyNafQZgfUdwYcRESfTzeRe6VHVupq8rVvBMRLz3V"
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
