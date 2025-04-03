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
    "2ZDvQZUyCk2w4H7KmKMemkcYmehVHhZ4PsFFoz4nY5XJc9wD2sbc5zK32W6LY1wktqMUJKKXC3vvXSFLqDCUGTG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VaudiQYAAj1oZbYV61T5KYvX1XSy6kp4tKSDnQ2dsqP1mbtmNeNJLAtiRxTdbttCA7pHJpdyuxGhqxZq8kRgod1",
  "key1": "57ecWgWKPVors4XmGQKMiq8K6bxUpt6tDQ3GrFzSj4kSWquChQc8EzUaUyHoz63q8WfVWUgGGFFSs7SyfbCxtEQU",
  "key2": "5Uy9rvj73Y3qVj7v9fTkWw7TuTyWV2cB1Brzzy4k57Dd9Lc3M3ReHGCuxXTKFXqEV3qF1AsrQ82ZktNfjQfxRmcu",
  "key3": "5VETNtk7f5uL7zE5X1hNpPoLAPVUoWNqAyY9dVCwALupHm2kZWQ56P2dRK32h6uJmgY8gXQWVUzGKkcs7Q1XT9Q1",
  "key4": "5hjbidKnCiPyrWNiBEcbEae9SwYqHQkw7FfD9PUpnMmCWd8WrWJRm8FzzuY9fAy5L1VFJfweTzcX46rKii9GDDuT",
  "key5": "578BdntRHywD6TSVKJBb5fHUcZ9SQ5j6czUcJheWQdaiuUiaAkTb9B8KTfetZqhtoSQmMGVXQB5B85ZB17KSbjtM",
  "key6": "P26MgwVabM282gap5vnB5hwFtMLcmvUGpN3nReajRZGD9YuCBzsHPQVHX3Ec9PNvbVPKxnZeBeUdYegk2FaTvvQ",
  "key7": "2ZgN8zeYonVMfUbNw6CrBZa3HY1NdraSFyU2T888ZBMwdJ8zWrg9rXmtTrRSTumnHHF8xDpsn7KhFt5kNzHVv5cg",
  "key8": "5pM8XRbwkTsynCfGqzGRDVGhwJXywnan3Sn55FiVqwS7BNpQs8ox62BQ7TLSWk4P6QUdeu1NnmxFPbaD7oi6z6Nf",
  "key9": "3zAZZPemRWCJN5jryqqtwRLpp1sxKzANS2kkacHBN4WdULetuYxTsyh8EEVRQarAMAfe9svrdHZZvYtzjxUjjvBZ",
  "key10": "QEQBhhYLi5PjvSmqGRy33dKb3uR9cH6fv3fEXMgjiCDozz39fDikwBXGwsvZk4A3JaZbC1VfeJHBQtkREw9X5bm",
  "key11": "4xcEVm6qcQYSEwSpr1EkNPYrvK6myfX98a6ibPbTSeH1D2aMnU6Cv7ampyvsVq1H3kDUNvvBUazRLDmqorePmvm9",
  "key12": "KbhBJ6SwXjYTNkG7JZBUhKcQYRXBJMq2GpAsi6JtPbwAwKHAkZ8p2iUFTh7dCESPf8cN1tsr4MQJ8g3rqMZAPDQ",
  "key13": "5ChJJs4J4eCvjrNQWqGksLrkduNjV5SfKkswFgA7k8h95Acuk2Y4puAXErmoZyQUbH8bV6iy78RMtUH89XEzeBZ5",
  "key14": "45MPZUU7wjyKUvT9suBwUz8EJS8KSqgHK4G1uQap1eN1SzfrpEx1LNViKXVZYRHCVKbVrswuX9CYd5pjHdAq2xon",
  "key15": "14zoHwm5teXtvbzbBmbm8J21J9nCa5d91JSTQTEiVcimYHNwaB1uqDonCBwq8RWdgZBfdzkhksA3DvMewmPxLrS",
  "key16": "eTRo8uTpncV1rYjt3JTjxBQn6zRTaQc5sdBV9g69gT9nrvpQQ29c2YRSdqG5L7579gM3XEzATNsRE19iYJu23Ks",
  "key17": "5Z1WZfyoRekLaSiEBUEpuPkHDCfz3DDX3raQPS1XhWXsgeB26yo8otHBfnVQy6DSvVpea3xnjxQeAxy6tGefPEJD",
  "key18": "4orxvkqqFzpXZYYBZrt23RpNqRH2oTYcSkMTLeZVZoHsmke2aVEhB6m1fvXWsPMWEkXbyLNCw1kiEiKiG4bB2kXi",
  "key19": "4Nwg9HzRm5DJFUiM4T3jEA6K6RcUMfZTP9WVcj7J8ppCsf7jAV79vodsssqz2cee4EcszdzCvx1Gr8MncAjM71KM",
  "key20": "4mV6bvP7oCL7WBtxjQ2rgK21gw7zMWMmXCCz4zueYA7t8xvanUQv67J7NG4DgB8UhF19L382SoeRFiT4mShsEGxZ",
  "key21": "5p6G7SsLheEKia2X4PBJNJFEqbKFtHKzYvYErz6Uas3oX1s2D8PkoW1mqf6vxNL1FAHTXmHPycNosT1U5Tr1U8z4",
  "key22": "ad4aZHe53La2cGAUfJJs4DUWYPHnhZQEBmciyM1KQ3Qo8DZpurdr2hHtMkRZAdPkNHsqwLgoa7MUBxsydjCpaJu",
  "key23": "JAo3q2v8HCykEUKBNwv95PS2Ep57izY3Y9m4xUCLXdq4tvkCBLpmxt651xh4GKz7G1wsGtjJHTGFugN31bN3qSp",
  "key24": "WTtkEQZSeonztiQLNhNmUbPSqx8zTgQ33uAPXq4QV99uyg1uZsPxQVS6WPUf5LyuwmoH1DsyxVXb6SiCa1ArLt6",
  "key25": "KvzbtQps5nFFV4UG2FSZBNpQGS9ggHAFZTo96b6tUfPTw6NWrSnijvuo8Mj2cNnCGTzYjWQrfxKSeYgH41cLqnH",
  "key26": "2HAJoRqHMoYHPFoyR7djscfTjCeSeqntvr5LzQKXcZ8bpCFhePzmy3edyBhx29Pm72w3PUqJZDZzYX6vbbfsDW1X",
  "key27": "2MjhyKZp7CLBXepMSsYnEUMEaJr2bdrsHky9jMQwrX82j23uet7eKGPcpCRoavgVFaaEV9z3fCX2df1tB3oqdWmW",
  "key28": "ojtd6odEpxZ3rfB6HocLdbno21n84vJhjkEh27DAuFpwXfbgGrAr9zUSnnzjgbzUpWzF7navYb8pQhWECwJXuWU",
  "key29": "4GnmNhmd931ebifDKHdViFwEMUsQotakuasepXMTpvNu4H6Ru5Zho9gm4zCFszgQYm5ARHcBHBEiohLohZY8DXtL",
  "key30": "4aNVAZGfbqnyo2wUkC2jgK5weg4ys7dJpE2jGe8YjqDb2E2GPiKtLzw8Xc9UXNAin78ZdGkXmRvzjgxtW9fvCiWS",
  "key31": "wCKTFwhGAq16iNHVfW5skEyqtftvUDSZYVjqAtaSjrUgp5dvZuoRQtdZGPKnv6EUucZvRXULSsgdPLp9E2Jshi3",
  "key32": "5NZo6yWFE8gN6LrRRrBoauYDxw6huqFZ4qPQ8AK2H5XVhJc3r35nnHbAzfqwDQ2gKL5ECNhvEvKWwcgfvPd1XNRg",
  "key33": "4TtxHFvoStDmgb1zG9as9TSKVSBzyZRA7c9QUZmfvk23GnaWHGEs1TEmKREQfurVDA4wL6kbZ3DVudrfLSvaBBvs",
  "key34": "2AU59mE6MiJothqSNiRxG2UrCrhR6ERAuhZiEo6DoxWSHbYPZEw4c5B2UYQ151me4e4HaYc9sQtpFo1paMcKk6KZ",
  "key35": "3q7HfTCunTDKxJfGG1q4WbD9J3x3EAeTZRNWvg3tzkiERHHGyEWPaMkQ3QRfVwqPwTxDKK5scPvDuFr8k9Ap2hgi",
  "key36": "3aasP7yvG4qdJX7ZcwRrgumXjmKK6Te7s36NnwSsJ8xgzDAVz8ctTyAputg1zVedcBGj5c3CiakX99C3eJ8efwmh",
  "key37": "snM1Vm14jPmWP4YcJD5soGiWUtFyh7PE9baMcXD8AyUfYhTG8LJ5dxsGARMjdb4BU7itGdHEt1A9bQGUb8pF2uc",
  "key38": "3raMH63HuibX8rkWXHk2dny78rrLNvrXQkWRCPtjfSFcHK4dZAMb1UtXtuxrrWf5F9CuGchT1zuaLTr7szHEPDY6",
  "key39": "UPy5uviDQNyXqK9kyU3ujrBNJk3jLhoBUTwfz6PSWuZqiwAfqkAiiNw7qPZRGfQHPXJWmyoTxf2G1SAtCcKqKQ3",
  "key40": "x6BqBRw1TXNGX2CPqmaDv6Y58Txm3N4BTmqEz6ZpoHqtsejzomdpwrRypNWhbJscxNMZFQ26AdrKreapvVS8t3j",
  "key41": "266yCjZJP5FjuxQ2FnNtKS1kucZvm4qSy3rSnCqCBKBftGVDPyuyKo8QckA12t6BebmBvH2EbdsKmpEfvBKUhTya",
  "key42": "48gQ7uBnYosgrDAmbepC7ckw36Frh9WejBrp75hkcHJhy98ijXWALWUyRWoV5Skmj9b1QtVSBmrbyepyBEaQEn4C",
  "key43": "4ZD8jVS9NtnVSGZvqou2JNN5mujy242qZCUwZd34ScJdPpcaDwFjUaoHZde52vPUWeMcp9iX43dCTouUbz6jxgsW",
  "key44": "o7xpfLUcCmfFesEZD68pMSaU1MyXK5Wz37eBNE23fe6VTBbkFUkXqn5kKzpxnMU2CtD5eztJHFDom41XopVebgr",
  "key45": "5NNDaFqkCWfGrNvrr5CSdLGJfX9shcLBHUCqnaexmdgwToSWf3tsrnECx8LyDPKondnVy4qnkqPTs81AaKQecXuv",
  "key46": "2pYEbBwoQ7rpXrwS34d7ajnWDApMX2TfPFAvH4jAehxoiCFcbJVYEjG4udbbYinmmtaei8DkbkPPCDG24Tdt39rP",
  "key47": "65iwC7odrzi2wpMV33B2vaueaUFb1qoh7Y2hynpof5KmPAqJdWauyozitEL4Q8MdxEAgz3pgyRErCQg83rXxjAQC",
  "key48": "51hb8wmd8MmJcxa8GahuNBgCLUMTy3h1YqGFgRfMUXwPTKAQFrjvNbdLWw7HdabdnMrCQ2vX8do1tyqw7hbVpv8J"
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
