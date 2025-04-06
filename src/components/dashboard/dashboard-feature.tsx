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
    "2A8xxfs6ie495utLQuNuHx8xrk6ow9kQUNE5EgmcSNUyeEJyeWoJYQh42ATWi8WNkKFtKLYzBm8Dv9DQyWHEEK8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vLfZ3L6iQjJiDhnte6sZQ7m2wo399oiU7sU6oJkuQQc7ai6ANY2g667emdojbbkfYcxcmEpRz2QidFoDzbedTCZ",
  "key1": "3EqDBwKY9zFAc5ToMixwxnoR3MyeSG94KzzTLGSQXjNPfL9xUHLfeYHECUZQYw8dkbXgXjoojfLE83YUkF6AwLDJ",
  "key2": "k8dCLXdj8c265L4Fr3C5z5siLrbYEEHvRGbwY7Eeg8NWWCScC1JbbUSMETC3LcLkhFBMMmuzkhVSXxTjjrXyBhe",
  "key3": "36BvLYhgkv3vbESdB4KDNy4zeUWWHVrgTRKAtwWHT2nCQJhxbtgcFHJ7hQ4cbqZ35da8VPYyb2ow11svXvYvyQ8",
  "key4": "nLF5G1P5iVVUYLRycP2sGBKqSaLQqfuFAw56y32DsFiCzENxUhxbnozBdAf818RJPGZjqVTPVb4c5SfmXLCicoK",
  "key5": "357eTM9FepyFNnBNAcUz179Mo5tnghhQoDZfqJh2mVuDCyQXakC9fW1WY9HDtHvCmgqAnFCaNnufrAcL5WduSD3G",
  "key6": "5RqKXaAQ9zC5MqnC4S7se8Goy9joavE8D9xybvJPa18V7JiMsKUXQBSgFE5bgKLHtehUvjeQwAue8Dvy3NxF2xDc",
  "key7": "3xQPdp4roG6zNRQ53EeNUEptUGzs2DPDZDaomhBC6QoG2MAPVdXacrfEpoeAWmBT3vvVBLrrz6zJ4KzNSbb39P3",
  "key8": "5AcVdvYEnC6evRd5ompiEvmGHBV8RoWygozcCXfkoqvcj4ak2FF3gjpx5UB7vgznpaP9aoMN555JcCA2pwUpWSqs",
  "key9": "4BHo4Gqh6Nd3QKdzjVBP7EyrCHdJZdDJ4oL3amwj7zwxPWGVSrLE5AdDg7LtaVoJHSjbzmapRxWneNr699JybhMJ",
  "key10": "DYWRmEFkFueBJcbfNCanbcE8xNFNqQcshQBC4R7NkFmgBQYKZiVmcsWRZgxS6rQzsjcT1jz8H4NsRnermU9Bm2L",
  "key11": "2tT4WXALWfzFUXE9hGWn6kEGz9i1h4eV4EAywfJNR7Zof7va3npAT9x9TzkoFZm2DwSbsfdebh4nmeeMqJLPLqZV",
  "key12": "2U3owYwt9Sov3QQYfLZZttaBdmifnxJhxfAFC24sy3YFkAzbmX5dGYRgyr1SHfxhJvi2JkuWgzqkw6muNSM4eez1",
  "key13": "29WMpWcxKc3VTy4voahHN1VDi5HCwGAfiozpMibcqRNi1RVBwNFTE3seFaMxDdt54wHb62WfMLfm3QfL5bWFFijf",
  "key14": "2cURo7ZovPuFopTNHB52YpUYJDS75QSPB6MBMfaSVqtPiUz1KnZUd79QPq5Qo4mV3JBaehsKJhTjWTrSH9DN2o4g",
  "key15": "4wJxTYYgp7povrgQXyXgiZ5G71z3hyEMqeLLjni9btcMmdmEifijdWCYJehvHRgqot3GjrD5EmhcMBrDHqzrmtMi",
  "key16": "4p8oXjxCqk8UGfxJ5aw26CapyfrVPcDM8wADhnLpCkhsQvdjZLvfvckQniTtwZjMgdTnrJLxcNRYNqLTDJ7jVRJ1",
  "key17": "2hqpQx6C3sv3qLaUmgGBoyx6pPKK5TNeaMg1iLCFUFgGCSegmAmEDhGg7VgBAxTkGU8GSjijVhZAKuuetHf8xt6E",
  "key18": "3JSbBcKEJXQxJHpWWfShX6mYQGLiDWNaWgP5q7Q26UMvNoNxNZaPtnJAexxMGTfrvpMep5tRc4mk5rzGAcApRMee",
  "key19": "5aFbBYePrRJ5UPhcRLeV7BtMNJuCAEHDaTo2NqnPi5JymARh1vtngojqZFxv668WxBMmgTzmD1H7fYNYBYppRvwA",
  "key20": "3Wxrq6aKW7K26v7Hj3zHx5Q77z7Qu3Y4Qz4BmQfKv53bEW2CUuH1JSUMixyK3nP8G16nQzhRRXta14KKFtBmj5uZ",
  "key21": "5dYvzzeFMhoThyMKcGuyGspi33ZgzN6e49w4rdtvHbts9Ch76T7T5JXAnJs2VvmbozM6mtdyfHnmGb3Mv51YtDPb",
  "key22": "5XvfjU4TtV3mpZKnXinNyJqdfc4fjHmJdYZnHTtLixi1Jetz57XP2QXrRjipJRmMq7r7HhcV4zZXVb1yQzU8pVbx",
  "key23": "5ACGnZWJ7sTFtUAP2i6Hm9EeBmi2R7m5uZqebft6CYNJkqAkvVUTZa9CM1uhcquVq8W6PngS5xWvqGU62ZoCJmum",
  "key24": "58yCZjqAR1N1bcQuhxKeMjyznceLE28BeiFvi8PL2tSne2ERzBSGgwUGVxfNR1RQU2PkvDsyobmxELkKx1RAvYym",
  "key25": "4LcDziRgt7HriNrt5TWeHNzHzkikQQtPQLbamaci4BwAC3bndTF64tHw12RaPbnhNaQPtev4NSp1H6BD8Y4fncBz",
  "key26": "5MZ7hjrAsDUqEi8Pj53eDCWJpdkAvaH4Wt5mnu674GfocsivkYjpL1BLF1ghv4JwcPuYm8oU47jKd5iEDLarfvmK",
  "key27": "2bGfSW5Fyb1XwgS1tJMEsijVwdL7MxGsqfmAP3iUdv3jUtprU4CdeLVu4BHWYvF2cu17Tk96mDMgLhtxTchHxG1L",
  "key28": "FzaV48eBvzWDQqXcLNAjS9xqP71jxboNnhaUKjZ4NfAW5X7qe7fKQZTBpV3nksakz4Ef92Ny8eaLzf8iHKG81bc",
  "key29": "3C9R4usb4mGSRoUr4mpfh2rZe1E2DwAB1Ew4wetLGQBW39R2hiWCGiMWDdEJv3Tdc2Jtq7iEHbkH1YTK5sxDMoXg",
  "key30": "3HEJPzcuvDA7xKBLLQdxRKAADqXtGSMVRwCeS8F7BEu6PcB1XRiXGnh3QimY4F4KKbsSHATBCsZPbcGi126p8FKd",
  "key31": "35289rGGMFsBzrjbRARPsQ8Rg57AFH4V68DTUrA3vp7gynUaZNNviykLsGSdLGkx5oYWiBWV8gHR1CruGjgqwuAV",
  "key32": "42gQpC7zZQoFbzLhkaHz942VDajuCBamFKyU4w89qCzWGzt8uLLQvJfVPVy4LnZwd3eAzhi5SMjSbZ45qEiVpGGU",
  "key33": "4ratLQj1CAnBbnGNASzSn2cQSaXP82AZcKQus7WWenmzij4viczs5xUbwsrREhJzEMKazYEbgoQBcAYp1sg4AWu",
  "key34": "3WKTa1192yNrcF2h5SovTgebXhxW4i33pkFte3x2VeUxLwdNNApGaxeNK9dNgzbCw2qHpACS9Lzs4iVp2W314o1i"
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
