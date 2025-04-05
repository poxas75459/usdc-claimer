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
    "4PLLZXYf3kJBv9kUAWojAN9MTtn5QRa1tXu44VwgpAKmkqLVSxPkfY3U3kgLnq8tm4hV8ipR1skNHj9BLMbXViJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PNaCc2PKVmLaE1tVjorCJd3iQkoSeDdsHECuKPEUD1ESeu8AJUuUN44LJo1bLqm1teQ74uP5o4gTHhoJJhaqi94",
  "key1": "4Y7uCV9DVggfNbnwwdwQijctfAUiLWHZ1TpQrknwf8o36wpoweawRxM6ERwx4KbSYR3pY6J9K5pS3kFsWyqhcvsX",
  "key2": "4FZW7TShnP2BqPVETqJEmKLr2idRddzpKXNcZtKkXaj3fcQCcZYNsm7PYc9CTfiFtqjuNoQftsXGG9SBaNKFNBnH",
  "key3": "3hxTdmfbAG9GtJvgvGKptY79ryq8hSAuF7JezkMbGxNDFsCmQR97yoHGZBZX3c4N8eY3ANjRpZ4puAmPAkqDpmyE",
  "key4": "4N4pKL7dhWtFKJY8CB5Ny8HDJv878RFU95CjBzhiqvdt4usdiYdjMgyZBYDLDFUJ2aWPUPxToXPrXChUTWVZmHDv",
  "key5": "3nNiDrkr8ye7wMwc4XLT7icGuMvjWUZ5Xvs24y1M9AeXYqpLhLbv49ckcKD3M3NzqMiSpVToMm6xVkj3p9AoAFVn",
  "key6": "4gV98boTeU5Souw5Q7hM5xQNG9kCud36LmyaDRqZcq1ApX9k8ZV9aCeZLGKAumGzPwvdC1PoGh3LvNvyouLn4cW4",
  "key7": "3YZc59MmZ2Ha7per2z6C4M1w2HB4XFXvBWTTQ3RuzntPQKpk7KBbCKtnG1Evdcxke2uThEVsBAq1SHnxvJDZsaaY",
  "key8": "5CkdQwu516LF85DcWZ6QuVmAPS9ZZn6b37ZuzxF6kg7MgWtP6hparKdMMqr8WFBrNrHrUiRuNPEFEDDCDRinUc7x",
  "key9": "4wwQUqFgA15ZwirGt7S64nBrCG6S3EwD3XGKDymsJUkqdQhLhoQb4w1gZ6cJbS4zca9r5Mb5BpVgSV7gAPQm29YS",
  "key10": "5c2awKvcGA8eUJZNbCuQJxGtAy8nvJJggubuxN7qUNBbvQD5grHjoMW8wh39FW1ZT6UDxr9WfaYCd4WKmc98VZiS",
  "key11": "4oXGjtfjSY32fCB246Lbnrxf31okUWzrdtMe8wYQUzRBTBcVm8hVUqLuju91a9efFyRvtXuzSaDLow8QnCMRMShX",
  "key12": "XSD6AjvT87hnca63YjxV8v1L2GeLYm1QkU9DJxJr5LQB3ShavtDkJXNsKioUmFKYSmJ4VY7FMe2qUGQXoqrcR8J",
  "key13": "2bm12EdL13hi2WjXECtb1D7LkVxZsX9Gtr9XNMTbX3vf2XtV2MUZU2vRTUySMcpqHcKsnKNLoheVck6WQUvYCxu3",
  "key14": "4QFnCEdqX3CYn2eZv5Vj17CFW9ZzTJhFrAZJ5jz6sQCeuuCZgnRPk6SE618RM44bQr7euG4zprZNUAS2xvyFSbyL",
  "key15": "5WmwYp8UcAia9gDxJbaSwQyxvxAm7Y6gVC5GY5n3U2zdfwT1QvsFg8JCstj6CLruz6UKFBU8EQxaDEt33aKsSSMq",
  "key16": "4dMGbkaLHPwApp7WS1EnQRZhebewkhmQh22ZiwdnmqZYCQiU3wLt6W6hK8FhktVnytBMR4N3KsS37BHonkTeDMpP",
  "key17": "oUCNXVS6q6pUEPeES8dHDFF5TutXDAhjJBWjyzDz5oGbNvs4FUUv52wv2QY8NKnWW5JyMU3uXMjt8eAvH4ywY7T",
  "key18": "XZmfK5zfvw1fEMPv7uik4xbYukEVujw8j6zLbnUWdS9aTvVKHYVLdbqLMFnwz9THp6w2vbQk4Fzro7rmFUdsUX3",
  "key19": "3cmzfy2VFqiFwr1NQ8ScA9eitHZJi8Yo3zBvZm9oi3a4wzCRcxzp7skqGfb6LcVF85VgFHvDhfiwvDHSjMnFJEBW",
  "key20": "25Vd3954Swo88692JKx6WaMua8iZe7GDjfeYuwiPsZ2yMLPUK4Wb7GpiCK51HUKJtarSfhb6TfyAh6VKern4muDK",
  "key21": "44ZmU2owvXB1Y9MGTpg3vsjXXp6f38XQY1FaWqFoCjFrVifF2tCMrQXTVreT8vUp4DwezyCmysZScVQ2ajU6ZL4j",
  "key22": "ajEbP1CwNkJ41TqFjp3f8X8cryQPpKJLYS6p1zwZzMRJqh2tjmE4dhFiFtaSyiqfWNjdGiKFWgUGDbCFteJiSKH",
  "key23": "2x8MW5vRGdiCs2GgpSEdSNd1nGUoibzyQAgxPYP4EzrFVrKdPRF7TmGf3rb4BM2fdfCKopEJPp885m5KSqEV7gqE",
  "key24": "3DEEssFYoeY1wh5KGFpPKzK1FDXJtw3rmSPGDHpfc7T5Ha5aMXVwGXr4TGHPGKeJiiisWYQ9Y8oEBUtiaGHfUg1j",
  "key25": "3DZ81zEgz2MiSzVvYamJXNyiGSLbRFWbxoKujgSVnB5wvqEDtoe9PzKbWnAtUmzAw6NG9jc99rGSRiNBcoBYVwhG",
  "key26": "53A8NXicfS5iQE2a4jmVhjCtXSnzALywaBfxcRiE1PmUDbd8XYXRox2zKykw454ed33nHmTZWBXGGucTc4roF1fw",
  "key27": "5KBxucjfta4UoBDCyHp8qQPG8awqwmJA39Cgve98awTrcF6B2Xfokc9Z5YxGjJ2aYyEyuhELzCgazNPGZJsUfAKx",
  "key28": "58i2tJS9rWxhQgeTzddtHExagsxvZ8kCe4wgQ25f8iTMVKm8uyAbTmPm9aHwyawDsSiX9qXViU3Y52LY7jUPdiKZ",
  "key29": "S9vMaTXj8V8txeFrJ2aPNMAQQbs3Hn9GnZQSpQtqFd2dbEnvRd58UWUKkGYy3zU3RjS7QsjSnHqB6y284aJJH7B",
  "key30": "2H6524bVBH3XubafotfHrpjvTp48id95SdrkyLJx8QGethSNwBXWLeAwhc4ydKpuLDbVjYYezyU656ympAH9wbEw",
  "key31": "2xtHB8DR7HJzhC49LUR9jgnWyffy6JswEcBgFDAnEmhg5TG8Qy5vpLAjKAE4eL1vgECq3qySjscEHa6g166McEAL",
  "key32": "RGVffYPW6zsbNgoAjGXF9ZrEr49yf5uPovrCCNtQnK4XUyKVBJucDfxJrmhBn7uw2AFh1Q1wwfdrRybJ3hJBEoa",
  "key33": "4bv2KZKwwTC9ziBwC6w72wNUpAgxbtEXmovtZV6EUstb3TT77PwqV3orhM4rziwK6Abvm32Hv55odDDwJfYwXRM",
  "key34": "2k72GVKRKbudJzkc1wLzcuMeZwQY3GUgLQAdbjQeyEUTvwyN19mLG1sb4hBbzKpdyZZsejCXJ3KrXwX8Bgo7Z7Ha",
  "key35": "PpExCvsaynLMjaT2S28vBEyodLPBfj6V8W8npruKJLHPuU8KemkNzqoXQftegpFygLpJdNYqwrGCW87ZPexbenW",
  "key36": "32aXY6qcogPif1GPTNsbHH1Q2612wR73VgdTQeTU1heCT6Ez3bYRWuJo2RprpQR7QxfkNreEzBmZEpTtxYK87o73",
  "key37": "26FciJ8b4bXk4bddbE5fQDD92wUx8rPxcQPpfwbvFcgmrrFWhsJgdQKjPiiQuJ74hPdgZ3dVoj3u5poRqwjd3STw",
  "key38": "3ghf6p9MGonVXA9BCTBDP7wo1XVGBfLQJtf5PtkH62UUtbsDnEpnk5WgL3Cy5UamSJXoMe44uN7X1wbUKta7NHKV",
  "key39": "6379jREBQpZD8XiH627tjCxKtQuT6ABUdTdwsAb3pvzB8GeoTJwQvBuhSLS41hyjXGUUxMne3VxMxfMjFH67LkLv",
  "key40": "61GUPGSKcA228zZ6gu3RMRTmUi6nnToGTY3LDTPGsgeNPPshHoZJStEiqy5aNtLrr66zsd2scxrwsDv498XRdMj3",
  "key41": "5iJ9EMNN4oBQQDQXYv3AThGESe7xVCCrbJJuvX2thisN2jZVBUJCToqeCHn9z8fkeySbSGEFDonY3BL6ERAevAtg",
  "key42": "NCdcUY7WsDstj5RnHT9MMYoLAFFAPTCXS2iJ1qc94XQpSbjRDQgazj8MBLEF9qUBUzpW7sX2YKXiNvtAPknVYRX",
  "key43": "2YJKdXq33YJw8xXJfgWymvrRhCQLPhaWyEkuyrY1VYbXT21pXPiHz9xqXVNTvCcUhZ2k3GMcsBweH8jE6mDrk2b",
  "key44": "2z4nfWnWbwwvKwG3EGthc8yJgdw73qhh1tJsti44TUHFw1A9fKjz7jTcEfRV3GnMtNdQzfataoGEbWJQBPwJJokP",
  "key45": "4YcjKFQWw5xjErNNDfx2AJsQATeb8KbayNby9PphWtz7f5Rp3Gf6L57j9KDPZPDBh8rgN7VG9CzppQ6N3xqu6BqM",
  "key46": "613Zx5rTWegxLza9JNp44XtojwgfbLTZCHr8oC7aQQqj2wvdfxHh8pm2VP3dUnhqMscEcVu2Cv8Wd3EpnLV5tkzJ",
  "key47": "2PfRcHH5qDkUg8txE9Vk75xHNLfjGA2sVX5JCzqxdJi25mV3m4LYqYN91ZqTqsNDR7fjUA21fCzAqcxp4xFctHGR",
  "key48": "4dLqeCagAVzKwNS6hXSq4M2sXqP72bjn8Z2jxg6deW2YU7sGEKCYNzdkMPwUHvyJ1H96qKWo9A3JcDj98CS1n3x9",
  "key49": "5BfpsZRmXGKwv9dDhrRLsM9QNtCw6Fbb2dWFGbPd5zMysmmfcubfJz52mS7HR4iSuCLu19F3oyvMZRGN65zwqsQb"
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
