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
    "5fXVWWze7j57kQYHzvjtszpja67Vq5emSaTvEBTL14FUeAydZKKfH3bPp7dGZRCo9mmmuBF5Mj98fwgknJzB5v8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tcwYLXk2AR8Gko6mrNU7eYmLN9oyv19vneja3E73ALmJukFptWZuwBHm5aN4upguPM9GXi7ar77JQs6ZbbuXMNu",
  "key1": "2nA5tgVfXBrCky7fmUsmcNsdbTZV4yJjU1pLM483pJNC3mhH4oNb31jr1xgUE3EW2iXYSFjSu8EhJmyH8TPGH5yk",
  "key2": "PcALDPTFnUbdQHUZhc3fR4mitizPriUm2VCyKjNYCHs7atpMM4G8THWKqUqHt23tGSxPrQoYibkM8MSEarrF3Du",
  "key3": "27RrEiD7F1gojtJTsGKwDeohCMi6aToJqgGEZq9fKbWD9VHaHS3cMsBD8ud4Z4xDVYu3214r8q3w7EzDZk5LiRd7",
  "key4": "4C2TAGsw2D998tPpyRgKdVZo63s5kHgsj11JKz34yxPfxqYvDbRpmS2Yz4EaAsHXY2j38C5LGegDMSFvGoCCCyAT",
  "key5": "5zaFXAMyt89x93UDVYMRndueUdAY1QpAF2giYke1e2qQgk5HuChRLEVRTJ2u5bjZwrsXRK49Ve1Mz91uuTsKRzvW",
  "key6": "3RoVM8iqDojtYjEW1nGGGg8NHZR65AXyAvnifA8PiQWKC4XWJKenape6V1ySQod6tLumjYzhfGRc629r5myWv4uU",
  "key7": "5M4r57ZBjD1twei5NUnzG6iurhb7Sg7pygzMdkZPKc8pc6AAnqf5wHhBD8XXKPq81MpddYfte5Nh1QWkuobTbuUq",
  "key8": "63UiyEfQ4dtCf16AuTdRfryR21ret3M4ujz3urx147b9Rc4oDBY2acWBWXSSbzqVa8cSapFq3MhieUYxpHbffhNj",
  "key9": "4Df9nxnWMfvr7bVJtkvhbr4kiPdMqGReUMFjtcHiMe5PKV1T4eMvVEdVHuWX6T2NZY4Ne6xXomytgS4B899APsX1",
  "key10": "2GrcziPauGSeBMgwrhKtQ5MWwcJEW3brVXrPixvq3LWqgv5MXVngS4jQS9ov57vECkxJh2ZiL2jbTf8mi88Eo7RM",
  "key11": "4zJEJPYfoPoA6tgXV3FhWYpeJWGQBM3NDnr2DS2JkSWpk91YXtBVpSBgUJjVPGj9swvnM69BgzLBwQa1Xz13S9S5",
  "key12": "5F9bgeTEujUHaJ7hn5pbnMChVPWnRhC1PbjYTbeemDERDUrXT8zMmuEe18S4R92VwU72FaXK8M4JrZZ9sD9uGaJF",
  "key13": "4SeYDDyM4GBoBMcQQdAx2FR5sT6nVWSpshyuBemGdNhC2UwapW5v7SZqBNRAm329Hjbyja9PpLGEbAp28pnjHUoT",
  "key14": "DPBad5s7A16ax5fJwzYukyt2h5JjDUNrtjLwj8BZ9rxK3PBHXEPNCHu28sHkJfb9quNJLUqdbCF5K2EpmfBF8zr",
  "key15": "4xLECrc7ntn5TvN7bF2mHYcUfauqR25KuTX61pifSTaJnym2t8pvWJoRMVSNTJJ6dS1Lu8ZHjajY5Bdibn6dDUdP",
  "key16": "4VFWvFJ3P6xW3FsSUc1ZXRKAJdW22ZjvyES749FBoJeJD5vKGnBTY3wJSZVKUuA14EHfB77h3Yo2rYFS9mWphE4T",
  "key17": "3xnrZvtqqi5AD57x3ZP36ekKZFyUi2scu1C8vfZZdKk3am5TRFLS8Zuu3YnvoBPnuBteN4sbBMr5MnFVuwSaD4kH",
  "key18": "5dRTAJ1uN5wJnQWsREhi6nJ7TuksMo6wJJP8gaKMxC1zqj6cZPAjrDny7NWG7yrBv77UEMedaaDjWy4hLZipgCSJ",
  "key19": "dd6zt62dpF4ZHQ44a1jfK3HK1h3runBLBcZ81FdsyVtDSoBDLpZzij4XtyPQqLNoA5dCw317LJJnxdrjXyu4mTU",
  "key20": "4N6muEW9QVXQDRJkbaS8Q3KtjLJvoZFeSyqthHJ6cQdih6m2TvgJ37Y6aensQvqzQYSoKBiFzcUdxg1Uuf2f3Wro",
  "key21": "41xWjL64PuaGD2qCffvKkB7w5Q51gu5fjfpe74Tt2nUgPhCeuZnGctYSLaK5wSALx2fbHK9AoZ12qzA3XM933UED",
  "key22": "ppewrPtGv6MdHagTvA19gk8vY1uNhZ6cwMZ9MHHjfpxdDPmRukLTC86RGKbGwHpEWeEpk2AtKyR9oZmMHQXnmwJ",
  "key23": "3mmrdzpUXw9ga1f3myseEJ4SZNNcy7nZhzvyihFBQMhkpf9poXYzPLzhyCBLA976hAkuiUFodT6LzqgivcC6Jmym",
  "key24": "5Ter9csWVP9zsokTyit3GyyQaYxWZGK9PU8dvXf7DnHpZmAEkrNr5ae62jYPBpmh4viDrhitctY9AppqXS9YcDkn",
  "key25": "5nnqijCJ83wneC8Wi6ebQcxVmJ8PCzZs2vBPieFApikkmotefTQFBhJ6BFTq1VvwpPWpnDYkrREGB8Xjt1Q5hvsj",
  "key26": "EpWfdZycHcg1Z4o2MUDDPEdGj5v5254BNjteeQAk4FBaGLJ8Pz8dPcGSYkbhzaNnjSWf1nXs3KznyufAdzqD4Bs",
  "key27": "3LTQ8DLXgyV66ewXo5admYeTrFPH3FL5keo1co2BqbREHQSrG29u29PB1HjZd3LJ8hxdQHafcYWeQP1VC2nF4C2g",
  "key28": "3Z1iTwXrQnoQmxyxAsDg8XVK4WBskwJ97QWMCECqWTyjxvYLPxccm5QnhVbkSjyThf9VPFX4Q6P8VrNsZ5btTd43",
  "key29": "2ob1Yyr8rAhthganKRyDQy6wo2zDAR34FsUsnN7MfYpWiWAXmWXB1asZAUUXjoVbzcrJmG6T1bPa2k9zbCXpXpeB",
  "key30": "42j5pJmMByEEpeYgUm3BPksUYnpjkdN5CoMst9r8ZCvqPnoLHRmtfuP1Fv5ahrWtm2u7jjenfyKTrj8MRdTSAz9T",
  "key31": "4fCNmjcED22PNAULB31m9odcSK4wH78xgULwkTr3xxJezhETdnrybZF2ndEMaWDdpQDXvFrj5jEP1awHMeA9fFgv",
  "key32": "Gfh49X1RjaEPYixUBwDhKwXMGQudJopUX9apws7BcEYFN2fdNux6X139z7Fcmddn2tmXMtpynUwURAcbRkBxxLG",
  "key33": "qHoxnP8TpGMUSNFyE85iqCo7EFTA1LUKMeky9kHMwYbrNGnc54HxVUdPavpYVsW1trzGamnNHWq38iCQLFqT7UM",
  "key34": "212JXbqcv4bpB3BKpc6DaubDQU9A4yont8Ffbr7aHWgD7Y5fhpCZRGiVYmqUZiPCKJAZNsGMP5zqvtuCkSCsqHnC"
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
