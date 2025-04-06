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
    "2cUG15EtUNaa77DzfvdD9b5o6XQCDvcHjqkPnfUDNcQjeDP2pfzBS4YxWZE7BfXSH4gzJEjdzjxMMakjwoWDrGf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dEjVhLw1gdavcnoAfpGZVA8GFmzp82zzA9AC4eGVxtE1vJaSRZNox4xjqiHV8BDDXYNGWeF1iEfc93ZYmhXUsb8",
  "key1": "4U6MKapy4WDJXByWcavBBRCpGrPjxr8jwMEbTrgYhY869NJ3jt3TXANoEw3QQcqTDCS9mqUX8ogJkrX6sMMmCigc",
  "key2": "45TkojGSzEX2B1GZeZXuWLYSdFMPADAEfynnjtsCgiPb2mxKCV6HTJBt7nsyS7CSLG6x9nAzyRVDJdYLHRLr6QkM",
  "key3": "4Sxr9zLrnCsh7UT7qCiBfJBGE1Sd8sdqhWbG5RnKtmNdRBaNik9L8HBAYm9z6kFBQKkkSTKiF7Pznjjox8sCc1cP",
  "key4": "5bLcKjqDTjSY2Z5boM6zt3bSputLrrqDUxmkpM1Buhw631t5GnA63gCCQEjPekXSo4TsAUx8WDijvPH9BK7RsfAa",
  "key5": "UkSrNjfs68Lr26eYAYkufku5xJ1fgT7y4TUZCJEEdV73r6fhaQ6rjv75YfD1W1uCk6FnFF52KRYkjBMF7oJ9Les",
  "key6": "5kH3NCQ9fCVKeDWET3gD398BSFGjXEjuuJddAWHDN5LtnfFzBn31VXfsvaZehoS6L57QzkRK7x1mSscQPsdcHVRX",
  "key7": "5pPRgFCYV2NRLwyew8m86xBFKcaNjUxzcP88xHVmgQKdwUXMSj1EzMgmibxJfy9JqfmTFUu93k9xiDJb6pevczYi",
  "key8": "49WNTtWKKSAJQpWQsoEasNASTredB7tUVH8LmCR6RY8ED7Qy2LV5foh7rnjuRTW61MKuezj93CGEG4219Zta8H1u",
  "key9": "4FCNkH1ucqkqj7DCrwmESiFBzmuzBe6FwRFrsxvyHFWLV6w6dBPwK3MowKn4hs3z7d4ztqTfUddbToFi3uEonpQf",
  "key10": "36CP1KZo4KhyGAbEMXsb1kAJGvZzyPhvfL6Z179cgPYduLq1QYJ8fWUes8RqnhUdK67snkUsgv3RqDyNqTJujQzx",
  "key11": "oRKn9pKvisEr7v5iHPz9rzz9JSd3EryxuQ6vePvw4aQfSLmrygnhN32EA2nU7DtMjwA4a1BGzKXGKeSWtqDZCSW",
  "key12": "4LM5w6te2HFhtufq7RTY5LaS6pL79LDcgKmxfYPTcm14dkxSeuSkTZtcqfMH7mpja4UgJWTGBtzjMJkL2g5Ha6AX",
  "key13": "5tKDkxgUwwJh3vWkqVFUVxEu3sDRX6ktcvrFKBgmW8s6gykGE14613kzwZGgyK5MCpiyuQJGwa4nUL4jRreCW6JF",
  "key14": "2A5wo8TBATAxGpRfZd4LuRdg74B4kAxgsBauiQKpxuiZwmrjLhbDYAvqe7ZPhMwhtfcVjiHMiwgztoyNNQ37ZRbm",
  "key15": "5AXesoSbBsJZkasp51hmEujnUVDwmBSGvH9BpoYCbuWgHcaC9ukuXu3eg62cczZwvc6CSAHQhhgLWWcjFXefSPaT",
  "key16": "2b4HRrDByWTVqLmwapQKo7TSSaKrofn7f4YN8MKFsUoqp41pzRktjEEYNKvoCjiFuiKAWgMVnsX7tmDgGd6Kv8AY",
  "key17": "dUJkCDUqKFXkatNt6xPdi9FFTbMrnLoHcSHDX6HeVgAqnDEF8fPmqZZDkTN6bZbc85QQVYYa6wGVTGZbBqxKuUr",
  "key18": "5EDELSxzNCcK99bGMQmz1ADbBHwCRoRuxu66CvRE4gz7jTqae1Ztm3nk4UNWiMBfWFPcyPMn21qMKQ1SW9MutV19",
  "key19": "3wLxXCgM6ebLqPaUgbN7RBcgZdDozRRytv5Hqzg7Zpfv2TkxQi3RuMhYSrRBQTCGmyEjMVzMpnyuXggxByXmvC6u",
  "key20": "4i2XBmzg5wcZxnSC5AUuA1rwb3TqLYJ1bgmetLbEobUYx9PRTsNiHP29NYjU2qvUQADJvnoKThQKKM3z3XAhXz4T",
  "key21": "Zk58aSxpHPgH6eBJLd7G6c5Jdpc7ydx3g9WQ8Qzfyew342mPkwPP9XmMLQCm9eedHLto9kggQSyNkKbB9jDTUs1",
  "key22": "46QbwgxH7U7dJF8NS15FRrEuX9fZ4aNJ2RcjZNsMKsarYMdpUdMNLZkV8heJyqHYbrb1shR2oBqAmhVKHDKdvgAL",
  "key23": "V21e9EDSYbhY8twA1aEJfav7Rb1wAsdtC82rUYQtcHq3uRX9UsW4Si9mYs2DfXWE9D1TK56MzUXA4FyPUd6Wo6W",
  "key24": "4MFZFpw5Dh5GZFgvNeHvw47rdQW8T7qdoWQ68otWJfMyMuzQX7kqHX7vqQPyHuYBebWvzuGjQ4wBh7FJZis3zHC5",
  "key25": "2PuadCTzkucVNuRTM4DsogDvcQzBECrqutNpZLg5obfREv1BVrGhZj5NSVtG3uaa3uh8jSL7a6SSDrCEKriV8UYn",
  "key26": "44UNLpvb5PpZAMGPdHotJrg41je3Wg8soqmz4HrEj5y1xseaA9dg1TnwuHmQELTygM6uARKxY98c9qEtg5tPaEhm",
  "key27": "erHTC86EMuiTEQ4Zy5EEWV9ct6tXU1VeySSrHmTC8b9gAgdxjxhzL1wKDmGZ12sVVpvgFXzvDVy4LQpMhRimSDB",
  "key28": "ZqrFj87Zd1WiHfZtJzBm8jgwpXpLAcoX1gjnPJNNr5fb4nkwHwUGTuDSm7PQoaCCs26JuHrDVXFyzVj3Fo5J3FA",
  "key29": "3wBAq4CnSYT1XsAbkS3BjseJ6YubpPRUdNqx5SHye9ERw3okuQ5rwGuYRqXoq5hVkfu6FKsCC5YSoDEXVQL2NquC",
  "key30": "3iF7ULdb1rBaXP3wBEcd9sGMfjQsQMAUT1Nosps6JibMhx8E88dByVr7ZaNiymQ7Tx6Rv1SxP5mXfkdHgA6jCH8W",
  "key31": "5SBki41ULsGL4iZpYrrr1KAEWsVXFju8zhHtqQLaWFYagRVaRZq6QKuTjNBrZJJE7o7ZiCxCe1dtBjQB4r5Lf7W9",
  "key32": "2XPRchNesRvCRkAqSXnA9YRh6NqDpkDpfubxWTx9hSTN6aNdjW9EtYXU1UwZ5rCbxoTN9fz52gp6WB8jg94vhTKG",
  "key33": "2fQgRpy8b2rSkRN7yWbNsAh7mGMkUtT1NbP2iezYKngjzSCdacT6d33Mzc7Pix9XoqfLSQRyKq6roKkebTXVqEnM",
  "key34": "3Xm1VYso3Eos1bSM89FvqitEN2srLY4jzxeV47aY9ijv2KZTGGEtPPuquNArWEreP8yYyBtBreT5eJsk3PW485q1",
  "key35": "4AeuYAsrJd1eDdvNMyt12H5sXGtbiHy4youQtdN7f6ohZcfWg2or4SUfsfYayvx5jwx1RyAAGQN791p6h1qaZaHg",
  "key36": "5w7ivWVtLGv1HLa94UwzyYmGrftxZWtfrbaUEPoaQXRYsNRd7m7V2wgEMMPXTHUTJexDkXXZC613F9n4Paru6R6",
  "key37": "5GdiazzLjcbqor5L9hGZCziX34GMzUpohNVBDCEM3aGsrejU5iYTpQWtthZHwYGqWYRsgfAYixThbE9P8tao8sQZ",
  "key38": "2nQ2M99AbJZwcPuauvKSSaTwj6DYtfTgpHZYTi7GQeqVixUhPBcchaCtE9AzygNd4wuZdeRMjQ2TQD2neLKWth21",
  "key39": "39oMYpZZyzYhVL5xNnwin7A4Lq1b6TUVMqtVYGyaJQTVg9kBjis1HWTZKFEBc7udc2bfHrL2GYw3Foyc8H1x8Bbs",
  "key40": "4A2tjCKk93kMpbzVSvvtMvUv5ubbUbLozLYC6oSNZqCBDZ81eqkkPip9Z9RAnpgjqtRRi2kupU1Yu8FGRhJu5ykC"
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
