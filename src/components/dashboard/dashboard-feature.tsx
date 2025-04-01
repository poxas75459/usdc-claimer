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
    "f8jYB5gaXAFtJedXEu1b2g8AGsnj6ErcXSUdYRPPP76TjGUQ181GgYDPVwAjDUrMSg8kaSxfXb3Jd51e1qahnkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PgaeGhUNWAMdfLnZECqxE7VsFsFUAqiErw2XkBudk36v1d8xqRbkTxrySvAthhzCv588jgqmr7jpBn4ZQBhKFaH",
  "key1": "L37snDfqLy1U7juYa8LZjSThemYiB4NZ236rUztb1GvzoyvNKrjHoQSrT5YXvr1B9x28MG69J44kUu6v3eui1ZB",
  "key2": "626SQ7hNrLg6qbahPr5LX5dYn1tnLJvjpfkB9843Je4w5k6482vK6CHCUkNGhYSx6Nj2NmDcFepniCjFnZ3fh8ra",
  "key3": "4VEbu9GXmfjhRhwckisSD3qsnPWnByvTdz2YK8owipBYa1MXKGahfnYGbCtDNKKmoBSAeAqPnmVQ21gwbMiM848Y",
  "key4": "Z9i9sKSMQtbUx4ZzJSvHUtk7LDNnZgBYEny7FgWkxJapSpPgqotWVaTd9nEoHcwiNiab6v5PenZ9XPhrWGavfsm",
  "key5": "5RQF2vM9Ka2F6X692EJvDAXaoBt29KYvKw4C2tMTykN4PuJxcqAp3Rh4ZF7cSGykQBaF3GqqVJSL3XbTF24LCrS4",
  "key6": "58t9Gcnh1SCxiiZAZ3b8rgYvQS7jPiqzwuPWhq8o2hRxy7cdVDzrvjdbTgQPWeGF34GEwLVyFWSGJ52omYc8S8HN",
  "key7": "3FXL3tTMkvzwKMqmBcpX2y7g13p2vF33s2QCFPEN8cKqDeB1xWUvUWJ1snUXgEabbTGEvy21rVQLC9JWazDKYSnb",
  "key8": "38pKbMbdaiMkVJJ9vdHY8mXpGNSa4bEQe3xTdCC8uRXPK8sKNsQg5phvUYXWa2EFJCzy9X6Ra6ziTucWF17vJZQm",
  "key9": "3C19dszMXWjZpeNVb26JNSPL7SbkvLH5tAqbv7zrSgHou9onS1ZFYtef9N2qsfN6Rc5Z4JVMsxVMTcYFYsy7Vfqp",
  "key10": "s9NRf6xWr6TGMHq9TjvwmHJno1GBXiuNz3DjEE7xakbfpQTwmB4MKpdqNELDY2oXViM3UdFrCkf1wFFondFdsR5",
  "key11": "5HzCgDwSyiY8sHRTTQiBnDVYqeJ3BM5Cxv8taxpJ1ZHepArwAWnWKSK9guLa1y8qdaRDtrq4NWDaBde7NGw2JpQV",
  "key12": "4TR8MvhwZXfVkFhhRQXMdWReRAUB66scWXjbuQ1iNXSH3GE1NUoq8v7hy5eWR7cy9BJUJjGYsGTQoGiMVToVTieK",
  "key13": "4Cw36y292MshJTmURMCkC6rmhkgwZqLXmvv1c4D5yDWTyXwYQdf69Jg8oGaHi3KYAqPCadEKXMYhKTSxNXVUPpqU",
  "key14": "2ukbmcZB7tiNmx5KgkS9a6hiq89jTyAwGcUau5tVHvHoJrWWbRNTFjJHaEUuMyAaLaCAKHfKPVJYvH4Lez657UWg",
  "key15": "4XPThfBAVz1kPMdZ68VP9LnswSiEshQyvdEEdPMVbCeU2oeRaRjgu5XsXPU2KqdvxTtwBqxbGwsPjLDBp3aBjGs5",
  "key16": "2AAFzgvTy4MnyTus8Kccyiv3y4XzRkqmntzvHNzQQDr6CTHPy5q9HDdpuVUawPkqZe7Z6TaTKV4muMtY5N3tzGYd",
  "key17": "4QSsRCjAycjD2tzz8DWXYTh1oDMjrxrpjc9wqUWVBh6zBAgHQRfLw1xNW4CgNbgNxSMMwJpJsmuc37WPYxUhPR2y",
  "key18": "vaWwwHKZXmhV8UwNaoiSnDjrKNPJNKHeBms4B11GMyQKoVpktjV9mkwH1SaGDsp9nVqwBhuX2Sb6wvAXYypR4Vb",
  "key19": "48msEjWF5jNqXKNEoZbTjG629o3A13L1QgLhtKvxtKRjq58uypwjf6abC8H88sR7wFud5AnziMmYtQ5Gseg5u9J2",
  "key20": "48V2ZEioqFRpBevez8jPryq83wWF49KuM16ZS7tz9VaeHz1SQv8acSrvaARkvPb9Fg7BgLFAW4Yru5cQ9m7ivNof",
  "key21": "2XWMGeTTJggGxver7TRKf8ohQcboavi6sbAa8eTkJGA227gzmfvHviViWiZjMGKiDHCzgaeYwj6fVQ4jxiHGh3EX",
  "key22": "28ys8Zg5Gmc1NozW51o3AqvubmubPUq3vkwrdtfsbCWgifsiJhZmaCbwUQXunaggfJbKGfcLgMMgv3p17ZcMwSSc",
  "key23": "2oeoAs4BAt5XC568sX8LkjmDKu54XKyDrwVvKHSZy58qMEhHHiDqU4KG3ENsDSCMKEMAvRjoVtjZx91H4ZgHFLbg",
  "key24": "55DZ3LGwDvLveR6nciLjDRTyZiD89j3NCTBwdCboGzEhczQkvy2KxjmKWqF5QvVjDZQhpwaFd2S8GsBp5rgkoFPU",
  "key25": "d1nY3WyGjcVfcKCBykaWMHWzyYSa6HUCBrgxZZqxNbxMNjRsJKZCRC7Qf2i4cLPjJXH9MKDogj1tHw8Kax554sy",
  "key26": "5BU2wAjPsiMqFku7MrDkKBkJnQMkqNSK9jhap5y8FvWRvTe8yCzdvpkYXsNupuYcZ8pnXhXhinkJ46ZV4xXh9FVL",
  "key27": "59pMsV1WYE2HyzXSq3G9bp1nrTqrX9qmntiY3NhLpsaKPv7h2kii455hkncwdak8vs33191gFbmFPvaQPFFLGH1",
  "key28": "2UttZRkd1Yh4joMQEeSVtUwN7PVdpSdUwb2BHeERVtAoh3SCU22F2K7PSgk1YNXHRzGNSX3kWokQDARsqii5kxKk",
  "key29": "3MuXZSD9oed7jTS7anLyVoAyd76vLuUSbGLMG1fep9f64UPY7AN1t5ReLAfpa3G6MLD5XBUrkDBbLGLtAwVq7QJ5",
  "key30": "57KWGUsFRAFHSFPHD7qPSaQPW5hNk5j7LuEUPEFxLzKBMZcuUbQYABUHoemNaV6VuBeNPuYwqaa3UyMpLGanNhr2",
  "key31": "61D8SxaJnE9izAhZwDizgkharREw7yRkHaESVs4YZBW4fkQRxCDu6KG2QPEgu165ykpgasqwFXLbc8je5kATwsQ4",
  "key32": "4EdBmU6wT8w9npWgbuBmLYw3dwCVJNr2ePy6GF3AvMyXtLNFEWMx7TEL3rgPgvCoQCmwBjrpJu7v7Q3MZSz4SoQ6",
  "key33": "3CPx6poZ1jEHmPA7j2XJLQyYR5Ui9WN4kaPPDwmMifDJcoJoH6CKP2iUuPh6q86tdNc35JkLP5Emfm6g9nEatRx9",
  "key34": "awWLnPdWrarn4FKQuG32CcKfeDoBwK1vNUGkvJHForjiKv5JgXUkTqBG1rgoaDt2RtcnTUAQJrvEXuiZDBzRFbu",
  "key35": "3zSth7jyUwXS3ALCbzdjKB4ukWeStkvYyDBLzvro5trzbettkwNjiYPUQeCqWgoJjybvu65jNTgfFSpY21954Zmu",
  "key36": "yjma3Ds5KiukHRFKM7F6tFAHducEGmvhWtog9S6oL2LL6anXKwghWDqC5LhUpuVmvA3i8BowzKMYgDrgdZi2i28",
  "key37": "32p5mvMFvHz91Y7tysmsVwo5qdC4urJVRNqqmzLasoXTvYNhTkR9Ag7TwDEhq1JEtxjwva1apWi753qM3cA5HhZX",
  "key38": "3LVkJPjGAaRtWcojQzncnzYFXAY29W7YydokidHzsPxp13MiefuxCVsieManpv7MZdvyL5oyb93GpDPY33Zuhp2k"
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
