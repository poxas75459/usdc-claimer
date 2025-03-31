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
    "3GQBWESC1XEDG9c9nB3xbDYhiCHwXEjC8xio3gQr39ZVKc3CRoTmJTdLH5FoC8R8MtXCxWpz1LYwYa4E5GVzKwUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ivRp2tvFCm9vgfg25sNTXSzvEFhh5owWNZHEEuDYMgyjdv3S8WTo2vPRbAvFdWiL7uoEA7TqNraMv4QniTSD1Gh",
  "key1": "4JreejaYmK3UgbrVegyUDFaDMKbWKbadfcWVNb6AHNm6xFhFiafq6bip24RtL7S87J4DqM8S7boREB5SRQQTLrUC",
  "key2": "4z1Z4aVKM7N5o13iRzSxEGKipnetutz7zx2enqCBU7yuo3wgRhQbvQMmrZxtDw18Q4VtysKrXuukaTJxYPGmbANi",
  "key3": "5sts5CfxDnuePdYJCKfGHfoUrfTZnF4V2p8Lfmn3QvbeWzZ2Lj7qWQU7oPK7qYRjEWmcFc1HFriDZT29pHs9hu72",
  "key4": "NtKAWvNSvQYJnHih4XmJH7DNY7MzWQiABR7FW4toQbDLCkfrXF4KgKT4o2JV1oqW7iJzDZNBeaYwRr84sxqmqdS",
  "key5": "5jnppZfKZfH1WrPy8ktfYTQQoyZJ4jSk4JMShDPd3chiL7kcfMBLggL6Ld1dZa1u8yvGZiy1BRmFUeRzbVep52Wd",
  "key6": "2mLP1kFTPb2djg3nZHhPXPkhdQFs5uaYzCVFwjQUQpsQh1aaJbuxMSvuZkeQurcaodqPHc8xVhTaWGYfnFy7v8Qg",
  "key7": "2rf6M4qZiAnDzz2WqHTByMfEPHmmpzRjkzFehXYHJrPnH6WayNrdJTGHmdkyi8qhSWg742UCnpzJe3BmgbFyPJFQ",
  "key8": "2mzGe33Y1uYyFDwQtJmNhZKT71qBvMjSRp8cspVNDoeURJqawS5YTuoE81qw8Uj7vLV3LQZp7mYVinFabqKvfPwy",
  "key9": "4UmuuuQhVh7sBmmnrtLY82pyujB3AFEoSvYoRWu4kXNywcHhE3oMXXY4wc8EWrb2aJ4L8rrfB4RdEsUwjVh2M18V",
  "key10": "MXxjiK2DjYMpf4ThvAG9GpGeChVKCvtzFF77vf1scnsBGstAtTx6dwW21Bfc3RUK8GSjnL3e81srF9FQgQAEbiU",
  "key11": "2rotQseN7nTMKiy2BzQ8ghs3RKETBnDcDhJNyfSYtmTps9AiEpqrB2V44LXDbh6SoeVdoP7bLDXTMTTqvnYjGyFB",
  "key12": "Ji1pW1XiyiTHWQ3vNFwHqBn9KgosNmwdRQgsvyvrqYkAYheH4yC76KVbj1qfWGjacrU9xqgMk2AopRNGD6z9Wgp",
  "key13": "4J3zM1Z9ja682A6wyumZhtmwd4LmF4Ws7CrjooYMWWmQTftYqDNzaEMwpWdsDqHSq4cj64MM2qCVEvh1cPjJMBuZ",
  "key14": "4A8HRguG3MKm1mxhEG7YZ8zdXcxcYCr1tw55NFCDmHLtCD5nqic5ZD8HSXDCXbghCpHuimYs8t5Yk2TEf5KCYXVg",
  "key15": "4W1QByR7Yx4aLcQCesiA7JZ2GiCdwWyQ1MB6KAxxP3P53CQnQTbM6hVzHSGS5whCtS75D2KqkBSsX7J5QfiD16kx",
  "key16": "4SzticFmTTZyJkPimzrmqGfMtw3xvH74W3cJX9m2FzYkbfjzDZk5qreKQcYAY882BrCyTq6589AuLqHKtxK1uLMe",
  "key17": "VpRvJru4T9cjq1LYBSqGFxQjQmCAodpQxSChyzXUoigaQYVqj8f4CNhFocJXywx1tvvdtvr1Vkgn9JuqjTSBDXa",
  "key18": "39DryLwD7kzF4hXA6LK5oxx2WitMqqioNDMqz184ncoBkrJwN5Y8bY4stHeJPhnsF2YDVL1YGBgniew7ptkzXEkp",
  "key19": "4jFBD8qDEtdu42aYmJGyiDN4dbxKp5uGXHMK7LAtN92Hn2vmAA5DDEfypKq1X7AetWZXvqCFc6HQW47Zguw57TP",
  "key20": "61EPeMRTgThtcECiqqKUS32uQ4vrwEQjpDqqFjyxm41WZn4Zg9aJp8wVE9E4NYv9xFeyjg6ADepg5ZgUjgKsWido",
  "key21": "2XtDMubM8kZNikMwNhfGom4Z54D25yy9xsMw9sSz8hvBTUvEewWXsFp4DieMG3Q9dkG7TwEWku7iAwjFYr9z7Vp",
  "key22": "2rLEgS55pHxVCn2QLcanZNzr1TemGBnKFE7mHSVFS1MedAmXHWLPZCBY27kvAM5EJDAqkgSnz1UQDBAwHYvaF27T",
  "key23": "5UpjBo5wLi9voiRfNfp1S8BoopQHvuRTVtp97PDiR3Nf7kb6bAsYiALRSZVsid6bFjv7m8xBnKw5WqX58an4L3XW",
  "key24": "2gQMT4cLgsrzwrzN6U5GMbSyNjXXCP9d2UpHzqxaEr922prjCntyHPB3u9Yt6hpfTffgu8LHE9seVxk1RwLb5vef",
  "key25": "jDpM9jVFKSdPJvFMnGprr6yYd3h9jJgNf8vBRYBKEPLpABGpVvWjCcJhJiVbG56ZiyQciFP8bW2g2aqaqgr2Aki",
  "key26": "22HAkC18Hoxd3Vz1XBqw7AwKHtsEp2CszgrQisQbPvwYbT9bNGnavVeTiwMB9XVG1iEmGnqaXP6DW7t7spAsTmdk",
  "key27": "4p1kNGiBH83JsNugzsQtpG3WEVLenNC1XHeMXA4y3yDhJFKWxFMc5eZNQ9zCQShNxW2w1xPp9h4QgANbvj6QJ4LW",
  "key28": "2Fh7TdvxAEXEPCQC154yqkgGoGNAmfj2hgmES4xjPeVQPCoXsfT2Bn68ngeAEseNzpCJGm2oQVyFsucB534WP9bx",
  "key29": "4jyE9JoVb48YH3gKE3x3CVyWyy9tazMLNGSgXF3fpU8FwP5gsqJf3Qo9e7Z5WXCdAKiecVTDU4QUa2bT3qTa9L2v"
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
