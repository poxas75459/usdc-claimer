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
    "66x6s6KPnjkWtvirsKfgq7AW4t3sYxC4NqNhjoK9Rpxwze56XgrXJzW4BHg96JJjHDahpYAAmVgY9UkdXwQp3T45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uctC52hwPQQppUJbjsjPEFKiWs51sXeQsjGZhZuXL3hx6asPTcTyp29iBHaRtYSVygFeWrKfNMVeoL18ytB3nMA",
  "key1": "4ayCcZi2XuzZiKARUJDYHdSqbb5HwKN6yi4PPFvqFe8jytExxe3kENMo8gcEbpiqL5dfZkzetxF1w5qE4EPfNn1t",
  "key2": "5yiD5h9uPr6V76B9Up6fjdWahv1wNLRppfj33nVzETc4v9qTY51SKRKvyVz4SivQWbTGAm2EkoAqG9GZv2kdqqPg",
  "key3": "3AruxRCvCvQvhatddcULDycCL6Rgjsx2GTNQsmemhM1rYg2MewG8hzipQFoxogWfrarWpmYbPBNrj9fSFr1exvDx",
  "key4": "ocXt3XgXH6wmBhaPfTbrrRnqrrLuW8UuPs7qKh7gdJnLfAYUro6EexHPJUuBzmjzAVrRtQf9goDJpEME8w2rj7E",
  "key5": "2VAPKWF58JfAKzCJ4bNd9R5f89Zk9rPW83H2kQQu3eRJMgojZEMDLgySXDs8JQqy7rfGkCgYNzLHmEz9NXZWzsyt",
  "key6": "3Lc7CtfWnP34ZoXyhSU95ffMHUeSHSva9M6GxhQfkGoi4a3R79xk4yJ6PbPWehe12M78atwgaRUNYX612nMuHGnB",
  "key7": "2nEPhDnA6eCot5y1zQqhwUPuRK5ziWYoP3Ar1rhVBsavXMWrhsEK3wEkwRU1dqMScfAvJhMg45tBQPfdHWfVbMc1",
  "key8": "2z8SptqRkGVg5BoXzqkm57UAnwBDwjg4AVC4ZZpNco8osixtZPcPPtpBJ9kZBzyNSWQkPZon82pf5JVL9Fc9ara7",
  "key9": "3cLnyAJLUvXMepv9LkL6h3Aq8nvzXwb9jKZKSrNQVBGAPMmkyGmkSzGGdTrh9kpetVNYx5JCkiSLfUMv5bTzGpS",
  "key10": "4Hh5tHRGHaaURwbeQHo1gLpDTgMSdtwqEiG7VbLNNcRkDmPWEfV5om9vXWJrA9kkCcCERBTfGsyKJphji8wLkzTm",
  "key11": "2KeJ7cZbT61k4oDUmV1sC6dqoG6BqQxEJd3xwXAfUYLVtjHm5SZanvkKuAHzFwzSb8Svn8infPLgkRUiYb44U766",
  "key12": "4unFqbJrfMGdcTXFXeij9zmcrg8Q7SkTUzRuHD93wHgCxew4gmuGkxwA7Pu3XPiVj2ZM2W8LDCa9X6aHz9Yoa1D5",
  "key13": "3LZ47GC6ex7YKoxgGwT1Zu5BwDdanYQzSyp2nGQg6tbJ32WNcdWLFqeVYy9CkY9oqXxmuoDLkKUWMnaWB4Z5Dp8e",
  "key14": "kSgg7hLVQomVzBhPiXZNewrYN6mEP3VjjVdq2Pcgosyyunyd643hdBZwqtyFc3cKTpxbtivuDMNCatGSR6taH5j",
  "key15": "4bT6bVptGALmbjyRExUtkZ68u1dq7bFnDM3Jv4sT1QDbjKPFhB5rxArc92QmhiVNvXtd3nnKFtcYe5pxfUvSnfiX",
  "key16": "4qeZkWPeYw4RjK1DdqyNomka3N4GMAGsae2L49qL1h8qYcV24rUrCZ286TV6vRUtWmafmuxAHnHrRcbxfDPYPKFh",
  "key17": "3MnB1j9iMcjVt3W8bdYJC22ayfss9rQJv9S4NQy211NL1TGcPAbWfdyzD1s7iip1nzAnTS7xotW4SMguDzPPAKg2",
  "key18": "6LBwZrfvCTsBgDnDbHMepr9x37yDDXgyx2osgugQDiMrCM846963ajWtwE2SVE34yDixtsQ2EZCY8SHFRJ69LYR",
  "key19": "2nNDdUhTTwGNsRgZC6UAVVaR72qYBZgT39LtEw9GK3FzrwRbN4uVmDiV3ZNvLPNUr7kAfhskXf5SRXqvivSAXGgX",
  "key20": "4FtZZiFLSADRi1RSFWirAayJyh9UHHbntpwHdxrWKSKM4VEnpqiWQZ9AnbUKY8bB5o7L1w2RH53dG7vc9bCjhkfy",
  "key21": "3n5wkR35356bRUVLSae5ZzyE6A3Gxz3UFRL85de2nVrDVdsX2Nv67FxigiPBfSyT3wbAb34VpSdZTdvj22uu6RJE",
  "key22": "3JXXC6YXeGzESDqNwgHLMLRcFmuWnzro1RTBNyLMeXdNosqACCU833XqyjvbmnteQT3wcQK2o3yWBXarAcRNjefC",
  "key23": "5WAuBmsg2EAkMyA7Q9b2vmyGY23TC786dJMJFKhHWsTf1h4EAq3WDqQhMFdN8zUqfR3MoD2MpTamc2iA2YxMFB1b",
  "key24": "5sqpYnmRf8XZTGZqVf4YDc73hfDtoDSjKk34Li5EVVXoEedrSpTLeD3avJJBqUKALZHm36VtydWXPfZrCPK6EiFy",
  "key25": "2qi2ssTrBrFBtD8mQEoDv5o6fNWNrqyYuRiJLdJ5BtGtdymvk4uQacKASYaQmQ7gBur7ycJ5TRAAbkkBkfNfQNUH",
  "key26": "LFFJpAprpxKGBUM4zpKURkQJLjc25BdthqYUqAXazuN1tPrQ5F639oJHBDwScr7uEt9BENsii7PP2Q8SDidbYXz",
  "key27": "5rURiXtN8t8tEn9rmRqvACnf32XZmSnRZoJz5JZNxS3W41iDPML8fG8mMScxN994rMhcd4iQWjeNfQtdLYnXK6x2",
  "key28": "2oFiwckewcjWQLeuQEpnpgvbt7NfycHAUknUzWku2W7QSxbLRrtTAVPHZZKpsSJPUnicck8Yu6KqF7AuYNLPJybw",
  "key29": "3oTQV9fizScum5tDqU82hqMXQM45tPnauRnRdc3D6Xwng569K9rikwpjhiLJExaXYRNy7B1czaRLEtvdLT9ipxZk",
  "key30": "TcsUL9BeiNRTQiksf22MTMLAUtT53hDzWqNXqNufm7T5bsacBDL8x2yvHtyVyZxrVQyjFcdiZ9q7y9ZeyXF2HDs",
  "key31": "3Q1WNERPBUwB2SB7NNDUzKAyQSNSFfMEnLy2oievH7KHkAXQ5TLiRTGw6wRgq9dSchf2nxeersysV4AXDKCW8J7K",
  "key32": "RaCnCFsZQvPCV6M4xeixrA8yPBxeE1zGXPVvBf6nvh3WXYHaY5EcHatX72n3K8UoZwgVrphJgpnd81Xr2FaxAwo",
  "key33": "6326W6YdxkMpMfXj531XozFGX4E4PWS9ZXw833bRsqm46B79bhGYaWfT3ZWDVL56NWKu6veQTKV5uPmZ5doQV45L",
  "key34": "45b9NsMxVZMd9ym5Rnq3mCpYAtT71zKjVvsUgekdBVTxbdUEayi6s9aZ6SCByYh2chedMgtrzSwGu72XZMGDvpdb",
  "key35": "pptQoQ5kVYhdqq9KDnvhhL4gsjeDrj3v4sYGbJiPjdsDKeZ5bFwnFSHvfcrrh4Tj9rjDN4qdjHXAY7ERSUbFhtB",
  "key36": "5kWh9gB5aQPCixm81BT2i35VwB4Zj3HQwrwjvbSRmxaPpS8eRHofnvvLV4zL7cm7yvwWK9JguM1Vp3YbxuEynkft",
  "key37": "3gQ8HZ4n6Xr1AFaPogzuf8zJ1RpbX5fC7Bsj6GHgkjywPpjcU5tvYeTQFjrHhg8fm3BtD5fRLpiiYJ6hxNfbt7R6",
  "key38": "3JurdKLqN3po89TH3LXGwmnd6HeLYryNHgBv59Aqi515rACt4L4q81Rd7is1ed1KT5kaU8cms4qVMLg7y6k93bVE"
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
