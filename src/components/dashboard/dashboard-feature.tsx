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
    "43a58xrzZbWzpuzG61oLaGCueTx9VBbz6LumCDVx6NvYai1xwYJzZYAMZ2fbyi2T5r7XysM66jZLwpqRU4HSwAFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "486NzasjH36dKMzUxsTQoWK3zXKvnF5Hfu7FpVSz6s2NZv6wvn2okgmk4KE9X8PN2ZtFya1gBZaPWDdCEuBWvF9k",
  "key1": "2VanZfWsQtX2pTSqjqU96oJ3SRAtrrMbXCAovVCKqeL7j2REGTxr7Mgd9Kc2DUoz3j81KTBwkNzQBV1gyeQro7w",
  "key2": "4gAsANtncgJcfG46RdhbPJTarPJyczXkLWSDTECeUvnATad3nvmb9sBZ1VYdSaFsTQPeZrNzq1Gb7mzVpXVxwphk",
  "key3": "4nxNbD2oLkvD1eHr8QzdYjNNo3FfG3YmZnV3TGu5GZdqh8ZBdmDg5Zkc5HXBStvdXChd4JeCFHXGkVGhwrYJ3ZFA",
  "key4": "5h6sp4wj8CuHBee8oVRaU1mYLgYEANMz1oytezcW581Z9eMye2xnR7tAwfwWZFFgT2TdpxUb9yXt9FWteDgQSHcx",
  "key5": "347minfUo1cN5acfJdUmrCvmnwBbyghAhdJmZ3h5Qietav7E2rY5TucWzdcG2dDxoiWqd1kf9a3xcwTZajse9tEJ",
  "key6": "TvpXKbH3UUHWNduEvCHkkS5rufuaxz4sMCyJLo39NcmPJAed9oXFyK4BbgqMTMtgHfkqxxCmyoa4DMYRk2ZsxHX",
  "key7": "2yMmFehLghg84V49m9rxUWEqqfEMzPR59JBkktteSt6xEpf8y2N4vyaW28QGjhykHu5kfQGYmmArC9nENAb59xun",
  "key8": "3boZbEaMoasMoau1o42QsXfPdCFKMV9KmAfZTC6bdpvskAXv5BpNVQoFWdCKPn7V5yKpZFcKKrdKsbCwieP5i24b",
  "key9": "43vXmKZadBTNZBx34yAmYDkQRNCzXLmBDRNijfmxSS8H17J6BN2vhAjqJZ3qNZfdyqjUNbEuNsyKV23wLtibQYMQ",
  "key10": "3BNTm6pVqrWZxXuTH4Diw5Xg5rwfhg6KrdeAYGwxvU52tiB4CD752A8qfjosa2nErDAg11EEjS8beCdn43JQj5CU",
  "key11": "4RPtG9LRAaP4jyoPCGp2qkAqPfcy5nX3rf4rJSZVDRqe3UP59zuUtQPM9YnjMUDjP8LPBcC26bEFmDruuxLyQ6Mp",
  "key12": "dxT4D8exhQZDdjFz7aF1m45ReFbs5WGzo53XaiYvvxPuYgW3TUpwKicTfum12QvnxnX8PuQTJ9H4oJqi2yNzbdc",
  "key13": "5nsEfQiYSiyjZwTv3cmWoGnM5buo6rEKTf7HPyct62L6JPypHnqRfNaHYJyHg5rJ2ZFxbLFy9Jo44Lpr26W64zQV",
  "key14": "5ye2qV3XXgzaHcQBSfBJQkisYsjLf7SGjJmfbEY597NkLjHNANzdzUnmsXwRPdwXnpQHWBpGUfiQS4PTrEeuynGe",
  "key15": "3JAf5m3PzrNR4ie4k4jGdHgYLJSwuQ8cJuw48j25i3kQrmEWEXqbg6bZhnSeBr5r57PoUDx5LvTwo8kokn2c4QVn",
  "key16": "4ogXZpMTGDVF8P3hLXy21B94xrWL1X2rZEN9TwUVKACtXuWAmQSiuUDJ8AR5QdmGGn4FLDK758xV6ikZ71pg9NkW",
  "key17": "QtgC71TuGZfvRSasuhPPGuD4vpDkEv9xMBzC8ZrysnmhNGXq2tjY7J5JjpyN984wskFiDQxdwhJGbSgofuEie3L",
  "key18": "3ScW5x5USoZreL512XouYSMPmzjTH3TsZfi3A4isT57bJy2avZ5kkdKJm2tNiJAFJmpKi1oyrivmnpQdU797EZgW",
  "key19": "3yYZF175XEj7EPE6KAeGgTfaCHponMfQ2c1sWMWXwi5dZbxMkGdRwiuKVN6vr6P5R6e35f97aqbRSdQeop4w45po",
  "key20": "5a96zm3CfW6iB8aF2CtXuSzdXcABAe2TNRoqUPWQRmory8vfJAjA1LsenA8Tr56PhK857V72JwntfggcFBrJViRu",
  "key21": "63udPeaLyZx4hCVTUtrzC6JNkbc7y3zxQxCFi5poEKJucu4Npcw4jwV7AWQwrYTxvH92jyYGGAEcDCvKdwvNnpWJ",
  "key22": "5KfUzMTNGpSctrmiTXZ4RoPwPW2Yd9TmAJKGDxqWD42dMWBmG8L7uLTEFp6d2zHUiFCvYeBPuKQWFN2J4pnQCSMa",
  "key23": "3H5QMMhkAAp2jouxe6apG9bMchpSTyg7fgu8mpwRXHaMftVXgjb2rTRPrXCZd16LkkXQSs5ngi4QSyqcJKqMbuP4",
  "key24": "67ZUm5ELgnkwHWWBj1Uzf9urd5scnzbw9pa2Woqv9EPF5yRt2RNP3rV1XUpNgxdkkLK4QdDJFwVicVE6DJRSB65w",
  "key25": "tVuKmBe9Z3L3sEyAvfv21VFnU4UKJg9LwDogSfuVGkgsnqnQuEBnSJkkXfaFq9TT3zzQ5mJqhU66eLfEkthDtP7",
  "key26": "4bZL6jvJmBGsbuEmPwjGSqyVPntZmdK8An3bcQoP5hNkPkBC22sfUzp4n7jg1Twnm4L9cuPVWpQyb5FjjNcQeJDX",
  "key27": "sa15ZkaHRFjpadK5LpVD1Tu2a3SiDzrGcwutmw2inDDDEEoHaAPS11Ti8iYiEiMBntYLTLJ2fR2ecKoCXXSREd2",
  "key28": "4Vih7m6RZgxaar14DKBFwDMqBdztCbWsFnUSAWj5uaNjjy78wkjCkMatoJpKVWoScTvekGT14CvogDrsGVbeFhcv",
  "key29": "3bjUGKR1rKoYecmcAxPrx48zEzZrBwFFSfX81fXnbUAQ5Mc1FjAs7tMVJuBPjfYPBwvtDqpyLToYFLadAKg4FPpz",
  "key30": "2ezmgsDNiDwzvFfd8FcYAo54wU6eZcYQaUQUQGsJjeVNYTqaSJEUZdWGvzefXJEJD56PgFQjaH1ArDNhNy5VVfXy",
  "key31": "3ZzEA3s8fxk1nfMxLky2zbZob6JUqZcS9zUdcDJdX4zG6xyP8PC5noAK3196GobZfXP128PWpV8mrdEtkQ4DKvjW",
  "key32": "RCExCFBJLCggtyWc6cfio2vSoRwepxVFTYyJgizDVCaTwFuMLu6vWLsuKL6AZu7kGr9voQHT5hW5ZjQv2egsBmQ",
  "key33": "5y3KxRySmCQWGbVH6jWA9FQUpBzZH9evqduhtEbBchLfqCMQxPXboLUmawiZbjP24FzBm3HjSHFNWP5bY9QFrGys",
  "key34": "2bLrCMDApSaXu3AvJVdY7tZXZmWTdU8dAL8wcx7vSrZ5EjDvQMoefYDapaHZYZLL5WtGPTfCjbggo84AxeoHWy2t"
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
