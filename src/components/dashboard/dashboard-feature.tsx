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
    "5ZKBDA9gEcEdM1PXLCTqGwTaZNUe8GGKywubCGfUxfMGH6KTsVKLPRQevX1mGqvKdQavajWdShqaGLpZsrUzf2EU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZGBikawpn72Qt4Z65NWwQKvorDdip3qYdxZz2t99cckMABobHjn2DAG8qxUTYwANBBATsYhHzVPidTsEpty67VR",
  "key1": "3qPb5AZxbD8EMeBSfQ7doiRexU2Bjv229C6yntgf2qASGqohbXPZouR4sedNoS6zT1rxEqSTY4Rdyx1AHQmL96pS",
  "key2": "5jRSpyVEkR7K7FD45X5ce8So6rhcxXZLEciFHYmBH8DhvgLuYSwT2W6zLhQ13hc8k1WpDz5swptYMbbex93a4fig",
  "key3": "4J87xsjTPM1qV3h1XQfLRi8AsaFsKaZN5b8TTXJZSPVh2PjVjJ922RvPBwUvDcGYxCz9hq3UGPzUWmgddEqKWrar",
  "key4": "49Y592BQLZ5d1yGBjm2r633DMf7qHHtRQQBnWQJXFrvVYFB8GUtUGth8oiSgsEaJgs6XUKa3y8SP4GdWH3fz5HCU",
  "key5": "2Geaf7Ze47MxoqQKqpaWCyDDGdnjbM6vSHCbajHcBhitFKCSBwnUpuUoN1oo4c8DJNxgWeq8t3aqa8nHPELuY9Zv",
  "key6": "3haWJw2GUP8QLnBMKUwSMtQ9ehct9UK9q7wtWePNXYU6Ht6NYewkyHhvEmmzXNvKZ4rgs4viXdGX5P2PUzXWgPp1",
  "key7": "3CZHqPzkvpfyWFMM27dwTKPy274ELZyDZ5xGRpnGw5xb9qiZnJNAitESS9muyg7Fe8LKvB8drdvPFHCS5xRKDAV5",
  "key8": "4Xwj9dGggfb5YEM8oBREDTXKDNA9b1hjWfC3m4nLALwyogE9jeDcLsDRu7F33pDF4MTjUPjLi1psHyf14atWnx61",
  "key9": "H4eYNKVt8yFn5sJ9M4HjxQWdikA3JksdiY7iy4JQJyGai5puMXjNoSoVYgKxpncAicLnvZgop4LhtFdSUfxjtFg",
  "key10": "2LvRvLF7FHBgStdViU6vRcnbkxaM4irYfMVq7enpwJkz53SqvmHapAER2T8GrxtB16E1LfVT1WL24tfCoRmCWUjV",
  "key11": "3F1XdMkVApkCMZzkrih37uiEJia9MA5PwJD3UNZhASfEYg4jNmrvsYF4KpcqKrWcukXX9LP6dSxwWtcL21HATgQD",
  "key12": "3kmRo3V1z6QdRqebaRUvFRg47V8s983A2MH33gDCbmbe4e4C8Br1UWcTMpXv5U7VvbfrLkjEaA5Yh8e4iWcZ3UBw",
  "key13": "49oEQrQSvi5s4iuis3h1MiY7HtxxJvahqUQGg6Syh96AMjgK8uVJwbn1uaKxzPtUiccxbPUZqTTCexhNNQgUEE8Z",
  "key14": "34k2mLn1bHdsGDJyuqPFNJL5BfbKhMPVsunrGGpPLfQ3JnJT6WN61D1tKGgRFqt89HtpUFiAuUyhS8Z4ywCn8UPt",
  "key15": "3mAMV9qr2fKMBHr7AG1DZ5hrogGAAWzjUaubYHbhh2gdSXaCi9d5YLVW5miwTnN1zc2TNVoqAMHvu33bg5BYRsLT",
  "key16": "5cTuQNECy4Dz2xeACwfw4G9HsmFafX9regUUavg8dU1eNNzwwNQeMVh1oL6ix8xgsRaigfRbNbjQR1ha2uWznySc",
  "key17": "5EdViDmTrkcZ2i3CQgtsFPnj9DTqd1xP3tyipNjzstbDSzv5YitmGTBcWkiY8BB9KEAXutkv9VXiWgGzEChPD9RH",
  "key18": "2VtE2GVqNS8GD7e5q9ur89sk3GQKoS5TpRpgsnbUDRsQnGtwukqzbxuz1iT1djaYMssDtbN7ght1diXgjghSe1FN",
  "key19": "2hL6ioraFNdQJEvXR4t8FaMsMNmEEZbHyjmhFcRfBpwRZtkKkS7hfDeGvwwr8RJivthWbS5zasLKWgW31m9Mmzj1",
  "key20": "28RkJ2wz6y56zWXVFALpvDr3G8J5Cwri17MnZiZ6t4WnP3Z36VPhwtSzkQR86HxkSttZa4873b52Zvidp8a1QjZs",
  "key21": "4Jjbh1i82VzMWbTJwURcpmW1VAtWDBo2T4cfjsvBaVNCsmePkgfRxgpD4QBhViCY4W5hCjnRysr9F35gFwGFiyTy",
  "key22": "5R21bB77KJ5HCcnBYxoJXb2Rtu3siHyNFixZuxt4hqtkvnXA5pbHQP3Foftk7fTk2HSiWoP4yt1RBJV1t2gMwJBC",
  "key23": "WigGBJaVH9QhURxq7aDVHbuJe8Fp7Muv438WkzWVg2UBs47vWXbx5vsnU5joNsJ3r4FZqgrQt6YmbHt53GExeTf",
  "key24": "5CxPAiv5eX9GPz1DE99QxTjsaHuDH2an2qbcLhre3XQoa1KHb5HefcsyVj746MJcq4KsaZ9LaddXVvCfYcBdMaM9",
  "key25": "2G3SMa42iW8MsNpzWuyeqBEc1GHBTruABNCXyuMysdAJBNe19Q4CW2mcnAtb1nP3wNRGARRrAcha8zeXBnPAmgfv",
  "key26": "4g9RzqnkmxHoipyyAXx1JH5uSq6CT9hzTFVB7jv2bUcmXzFiB8rCJQjYrcfmCH4PbxBUANWuTuZaYm8qYKtsNTYp",
  "key27": "54ejvDFMUqUVdauHKdjNNY8C8t8WSWXMCt3EZHbf8gFroB9hs7TxC6eq74GbjHCNh42RZf2HaywiyRzujkbHpHxq",
  "key28": "jrPhNAPBdPZwjr7mYehjUi8n7mLMDCyqwTcS1efP72EziUdp7gaxSQoinPYLLyhsj56QwV9s25WZXCAvdLxFf9y",
  "key29": "5CgZfppVtDY8BiB6QwH8JAquumjKy5gXwzG4WF1BPeFjJ4UkFVdFE2Lg8tNRDrzRhYjG1sHsQtERD313vcfXVqdo",
  "key30": "3oJzL21P5JBRk4UwBnRpS8mQ6vRhjiuzQGxapabaHBnGe9go7CNNMYiL3KjFvgUi8zbfRprwJy3oFMyqxFG8SncP",
  "key31": "4G8AgjAseTaP1vkMoPHqxyPhBRppan9J5PzPJssxTGdTGRgugNZZZ3p87qvW779LkkbUyRMdb6rF4z7n6s7WCjEx",
  "key32": "4yqq73xpuq2xGnvFjEGXw6pL7anKPjqdJrhuYMvhxKCCu9ENvJ23tWfb8r5167pbEvJszsArJaAsCsfrxmJP59VR",
  "key33": "4vjJ216djPwKvgKKwwVJZQVVbv4ro2hZwchKTdGUx9iHLfKaLqkbiNFnoG6GTFxFqUkrW6iE5aQbcG2gJeqGKWyU",
  "key34": "2rqsfzFv82wkweikRE1XMBU3Scw6qv1fcctvi82cmFLBmrVvXmHNq9pNf1ZvXPXRREDS8ibB55g8KXzvLEi8K5NT",
  "key35": "4LkL2bfdZxjPptzro7xuGvWJcZB2NKPM5U2ehg63r4YtyzXDFY5ZuwhgCXa1cg8syrkjCjoaFvW1AUf54X8N5VZb",
  "key36": "2uMzBM4LvPX9ZxsSRQJYab9GvCXufkwNQU2RfQHEGKg7Buf8x2kLD5Yh7d8aUuRzBJaFuakwmqJQLBGP9csWp87v",
  "key37": "3VzD2yQ9qzXrFBRKkB3FidLPiUp8yBFXe9f4aCdBCUcVX4YMc1tB9ivrPbUcNbdDy4SpxgnsmVybNz6pZ8RTQyAY",
  "key38": "617wujNhR6TxJWm1yr1KQdg9s5t53FdtYVf2RiHU8NJKqpHgExhNAbGqwzJ3rsmVynJYGxoWYYkFwkFwS9P8B5qJ",
  "key39": "2TsZpyCcBjzYebRq1UMXwt4YvTZUpfZtDiQDShMRHazzUpDPDnrFEpDtQqdczEztULkiec71ZNoU6vFtZKV8BKPo",
  "key40": "3oQLQ4UoPWvt7KW7zYPPTefBM5L9CB1BTcFmbr5r6M594DryxvZyX2UgNCfrYVj372ZT4TYPS6DAbYPcFjB1ee9z",
  "key41": "4Fx36ibqG4XWbcAMWgUmbSF5uqHZM585afLtGzyF7iUhoxsfyv1tGHzs5VM2rDmYKvVjmy8vtTrQZznNwDCBukmL",
  "key42": "ZeCf9rb5yNE9Vf1q46B7maHw1eR4ESkJQX1T4PCLFznpeSyDexvSaNG2gr793BpYSN5pgFrcejG9i7pntYgD2q6",
  "key43": "4ZLytyt8w1uvFt3GbG5hxCHt4HhfX5KgjexppGeyBKbTH7hjnc97Y91Qt6UcQjNboSuD26GnVJb5B5Jh5mopzRBU",
  "key44": "4mmWHQ8PnyR9VZTyrsCqBhcG7kQPqnn48MhoHGLnGZTVHi3HFgJ6xJCjJmL6ztyHMNViy5He3o5hcJ7NNkLYMBEd",
  "key45": "3EHENsjzHBWcHLGYqG8rL841y8C6Ag3VmVuhbgmM33gboh3JHQAoCgEwfCyGnDaCDqqSU9H5NAXoiA8aUb9w2p6U",
  "key46": "2HXijnHCHDjRmpSF3uy9gqwagBNHAdNsq2SdfqJd5rNAcCZRyf97kPrCvS6GfEKcpEy8X3PqPW74dNdP5BRXsgnK",
  "key47": "2omDKQwQdRoyary6adjdAKg4upuyXHwLuiaXqUZiX2ncCgKbe5BMGezboS8fWGkKtpKqBq9PW5KdNgNVXrVFzsm2",
  "key48": "3xYzRokVXAoyrZUrVXg1pFr2LUQBmn22yeMyY3nxw8g71bVGwHBgvz8V27j7VAsfYbTveGLZwWXLBTnn8AXGYFNp"
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
