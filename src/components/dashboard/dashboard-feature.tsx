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
    "5bie1VArt4ZtMe4VBX5Ee656g7N6qSK7heHwT4iXfiZgX4BNA6rCToNP4Jwg3XUTGfhSXjQWQ5n6uLgv7Pobavau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A6CdXcZKkED6aCZhjhacCBFgQNXcju8LK8MdcBhcqAkhZARvieCCL4znTzSAmYvb3Ls8JkT1ee473iwm1pgLihC",
  "key1": "4fT8pcNgJzaM4m4Bktb2mHe1gtkYoage5GZoFwd2uxEP8RTWkoAimsZodLkiUdWDJnwFDXYDE9AAAin6z6ZpHAuv",
  "key2": "2H48btEK6RPiAjaXiZqkycegLeKdYL6GnZTaVk2GXcSMkS1CUNYbwCAdSsLSXbZLEUWeicRFh5bd2Ny665DCw79r",
  "key3": "4cPAi98vXErsyeG5cskhzKcoe33dF7U5PHbsxcUe8mZp22tqjJyNvQuVVE45GWhiavsecxLQVPG5wvB8DgATen46",
  "key4": "5KASHSovLujpYWEHzogA1qu6hUzUernGiWb9vi6XfEjphpxQz8RQEmpz8EzkAkeNFd6cABBKedi7JRdhChomyB3s",
  "key5": "5Nd7fQCaqpWmPm3HE486WchwtkkJGZVjxcA7RHWqGHXjUrED31N4f26twCdWH7kaKdGvwFVJ3WGT9Ex1yxBeeVPj",
  "key6": "L3Dcb3PXWxLACko3gqY5gLTQBxM1JTnLM3fiGxDepmukksN5bGCqSqpvG4R8HfVZFgxrD74vkmdcQNB4VMCYnR6",
  "key7": "nDcozAnFyV1kAzHS7UqLyST4zyDSEqnNbotc6Gj1xU359fFiKXqZ94zzzoknGh5P4fkMVQwJqiPFm2mzNXFuVHb",
  "key8": "545GixgFS3X1jrW1Y3efk8YApUmQH55R3ePYvXDabQ9qt1XVFFXnEGrPCE3wxadzbBVtnTCzBwqRcjdQrb48dCEB",
  "key9": "5RpCt4hNhDsKVrBzLNzHwxnh5KxbQnDNayLuvnsDGBMqwDvvYCWyym7dJkAHmjh3stfVLdq3rN6tz99CNNkvNHbq",
  "key10": "2tm4sRdYvwTDdz7sDQaGMHLEnipns2Zqm8xAFbC9V3MpnkPXmg1eMNViLEZiv75ntzNTqMiGXbZEtFopbFJ93Vox",
  "key11": "3BwWmQt2Xaic1hRi7v5ahNEqswnSpD9bJRz6TC1PAon8vaf3SiZK5f7bLyfEHvMk6iUMB9jPyaQtCsFP3pwzu129",
  "key12": "5WdYVcJwdJmNFvnRkEGhaLK759HLMVvXV3V9ZMYpffkgACG2A9CMwV7qKdkVKMAjmYHP6Yo3fLL5wE6hJTtZ49tu",
  "key13": "HoBEmsEVtgVu5NygFSZ5kk82aozy7Yc72noYxqCLT6X3RZbFCUr6eUAZVA1DBudupb7Bh1FWL7FYNDnqLKC7c8v",
  "key14": "SHUkV3cb2UximyQzNTsQ8aX157FcdeV64PF5RzyyWFnBfvefpCvZ6bdYCKJ22NE7Jqt1nSNjPX6u13mRDmgaf1N",
  "key15": "3D4SrLzr3ngVy3AvuMyhcvoqyhwn3xsYr8MtrM2o6Kq9TgV6bz2Ha6V9DizwQUWSVkVe5iCPBVTRp95KPP4KFcbv",
  "key16": "4Vd3Kd3s9zy8jgMTSSpBuM3Z27GmwyiuKrXHguZpNJbMeCwYeQo3uBQGHr3tCZEGwaAePGjnZ7izG9nXfZNL8djW",
  "key17": "2VTzqPKjvNFYPCzm2AgXjY59zY46TVjviP5sx1g3RrLQQMf6Gx6njNuBVoK3qD7UXCntFCsobnpcGPH3axE7cNWz",
  "key18": "ULg9ygoPjFrj5E39umAGznrEZUTT4Dz3q7uv37H5uQEs9ogsBJkVCNYir456SHnUQarCWXUNqe3H6RpKZgtLgA8",
  "key19": "AN6zcrEVdexHHoMpv3H8XvAfqRv41U1AyqRU2xC8pQuoWQ4pzwvjL5eF8vBsM8Un1GbYXrgGAzei4sTYArXuWNJ",
  "key20": "Ed31NN5D6DjgaNqwLzmdnbTUJEwYCHod48mUnQ7vJMWpJpXgNrMUnfZQK92MHJC4vH2xLiYQt5i3oU1rBsnvz6t",
  "key21": "2ooVYXPF5iRHtstZ3QmK14q9BPkKqvTsRZSyo1XY89Rqv7oDs6BQzFFbg7oAwJoqMruF7BnUPLZuvJeVise2ow3M",
  "key22": "GToQntGMucrFrVTDbaaN7SNx7dyKUhHQcDw4TxTNbE333ZkPANKnEiKsKx93HSbiJ7fY1WqYqDvrYRu7qezaDpe",
  "key23": "64XGpFH2mEWYaxHtCuJL6dFW38qQxmDRn9LbwKatFCY4fVSBbf2U8drGb943QpHfCsqi9vTsRsXoeAUg6NAX5qHT",
  "key24": "2k4Hw4rxMB3pb7NStRSASDNFvWegzpcHvKhXxpb1uJF1vhtWhtgjrwabTqTFtmKmp6Dkc1u8AFYFV2qUZPReQEjg",
  "key25": "4uyYYZfJFQV2Wj7o17uZreVgXNHTDQHbNDL6DmFGC9ZH3DmDFf6YQVZ5bFMMbyDUgZFtGyV8WZcwjMVHKFSYAkqo",
  "key26": "A5zZm5oUX6Ffth4z3y7p9PGxgXEeVEwqoKMEETLbKDnDE6j7SixBeowNYNxWg5Fmd2TKKC16JjcNSEf8rY19xxQ",
  "key27": "pBr5m5zBQUfhEtd7mTeHAYhMnNBUr4z35Zcb85W1MyK6V4HgFGXRKGZWMXvZsVL9Vh9AszqGVXfojXU4Kyrvfm7",
  "key28": "3Bg4PqmYNucw1TwG2Czsfowjs1Y4kAei7JaDAdjum9zkJ3UZxEXUQBzYc36gHW9RE9vkhSmF3F2H3DLD78oUQmb2",
  "key29": "372N5eMpeSK7KDQnu1KzvDqZvW7HqQCMxpV7r7GQT6NdHE4w41MAN9TApdfY5xinxWiFF9kXNRTnxKQBzmupsisJ",
  "key30": "3Uvod2HXfEjQqzd4UUA3qDCRJAxYeFLmLnUoTT47xeFjVuogmnUxp8dtnf4qhLvWuYWM8UnoLhVvKbFW1aiqE6tq",
  "key31": "X6VSf2wiQehLVE4UdaYuUvAfzRmsAypHzWhQqhxXyRtAeKUDtZinovf3DUujxSYLCUtoAbVHaqcHsBg862NjYbV"
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
