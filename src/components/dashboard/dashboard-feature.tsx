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
    "J4XiHqX6vx7BqiSnBMixZsgkfhCQyveerCcnBSwaNLwdhPXXdJuabW231tAPsZ3PTT12EiGJQaqVwsaBWpmNuqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1QW2qVxGHQsCkm1nt8ha2RtW6oFQy7VMpgwhKgCK9Wo2adn5AWDEjDLEvirDFxVoLuFr4Abf2y1p6feWXXNkp4p",
  "key1": "HDrApf8bKw53tyGwwNLrmSrRjD2o1zA5MkVvhi87Wr99kdm9QKAQ5ZmV4yew242LAPevBLj1wwvWzGe5q8ufjiy",
  "key2": "4C7FBNgAVL8YeAHUHVfSvM5LXK5j5LWNvEDSMgoQe6wVAJHgX3gd5FULjqNLWTur6jfV4U6NCwEx2G8ZXmUtqXrp",
  "key3": "5w31TUsmNXq4YJavPYUSGW22hPNgMmMEdNTabw9UxmzRRWqmD9QEdKhBsUpG7bgGfwuxJBxV8y9L5ohigRXaARER",
  "key4": "4rwgCURPiSc67n9Jc8fktvRtcMPK1PFgNnhQXpubKCVNnaUV4ZRBzbvfavwegpFWUEpxyQSFfcBRrykZRa36f6gu",
  "key5": "52uztRkUGB9wSy1GWiif6NuksfRDgit3LxnCqpghbU9xcAoCogyFtouUBLWFx5xQVHMDZKDvYcQaX2GEmrK7Barp",
  "key6": "47b2ZJD5B7vDt4NxtcXKozvyk2Q9kfC2d9M5qYaVyGURi5fxvWmYt2xFnLvUbpkgnsYbfRsBvk9H33bBbJ5EAVJr",
  "key7": "41o71CZX2BGjHniwYD9vfbgTZB1huZ1Qhk72AB2LRSqoy6JeyMxesU2cY1fNSkVv2pvtwbqEKAEp1hPW9NaNysVu",
  "key8": "SCkvGbewxhFyHpwVHPB1Bo2K8wMutsv6Z3YxHsrDRF2jMHkfARWtiZCmLQfhqLteeEMbDJNrfL64pFC5aZeh1N1",
  "key9": "557oeAxtiueMoJXjUcC7vKvvYuBSacPACCTwpNY6hcpkp3Yxz4bwWNKKcsN9q7iogBHvSno4UCwjuWHDkeXaBpYz",
  "key10": "5QGn3Rsr5xdvEwEtx52pd6ysCr71miBVT96tMuRY6NxbUEZU6hR4sRjHDzcjbkPWUGjrTu7eE67hhVB9cy78L7oX",
  "key11": "3mgTfotU5imx9CcAReZWuFMzbLpTAGskrzwNd1uvHd8WZ1A7mkEjFbk7LBa1gCwsvj3E7H2Uejb5awYrkdpSZvzW",
  "key12": "5yMmNaNdDSGTQWVbxUS8CvtvhmX9SY8Z9EMLoztTYNTFMw3u76UFzJ1pDcmugBJhYR4QDhaLw3Jeoe29ait3FoKb",
  "key13": "4DqUMWuxjrz1XrDNk1NUiZnBvQsVSQXfVQUEn91XX9kNNuu8K192E3dBzhWg5rUCDiDwx7JSHaZyFR5SiVVP2xPt",
  "key14": "371jJ7FuBr1z81GQ4zQi1SposfFGd5fGbrprLtSoqmTx989rpNKzcT7tZshxvKwgXvkVrY3Yukj7sozAMamoPLbD",
  "key15": "uaj1JDcdex7TB3qD2GNhPmSQHFAWGLnPV8AMLGTS4QMzwUvUFKrysZjZzsYPgDyeHrX1pbsjjyE5Agty9L9kKj1",
  "key16": "3LtnmyqcViNVDUqQsP1dP5b5qHfrZP2aZJWysLv9XoGV2uRxwRizTxveXuMVKejnr1VL7cakpnp9GBY5h4sW6Bab",
  "key17": "3nAizTvRZMwNoDqV9juCc44B574Xq4JYmFtZ2R5d5gFZaXVTm13iSg4daZCP1678Cw9PqTYo6YJHjn35cvhfx4bi",
  "key18": "4bFZzW8LCciPbpkuHviTPS7audegudoXM7omcbTPNXpYcumoCkKEQrFTmmCEbatjbymAfDuov43qZKurDcXPZd9H",
  "key19": "U85hqkShsobEi8wJqn4Q2rZVig6TGZyTQ9N6Se4dLu1VKDiS1En2GKRXd9JMvLWDjE2W5gLec54KStpVAZWRUy9",
  "key20": "4GNJ5Ej55sGFpVBHhrfjwJzXEqZEheQGfbzmoCHzLAbef8uNhqgMCNREGqGP1t9ShVfuWqQ2K4VojKryMDNoZvig",
  "key21": "2DUt7gveh2CMyhR4E82VWg6AxVrqknteYipgYyyqcepGPQwJZ9UdKpxn6ckoSpVbnPY66jRKTq3vANA23492KvPi",
  "key22": "5NuxNjCoHzBUAZVrpeaXYRXiz6gU17Luv6fSrRJRCVrMxT9CkF4hMdwAEN6VeobT8DArV7mHfLFVeRp3o8VBhMg6",
  "key23": "2Gu5bbA6Twzds3NdFZ2RVESg4dZDBs9bdWXgSkRMSmRmzFV66fMfffE3YhZMM8auFQ7iWDgDF6ibviGC87omRoTG",
  "key24": "5nZbcptW2rNKjX2BjuuuqNXhe1vZEbpbgAwaHyEWxjBTVnQ4uUThGBGbKGpq4eK6wrsZUWUYPaHqCNbPFx1zos5K",
  "key25": "436qkYZCyaLNPdsK2XbCrLPp59dHeViqZW4KhVPm3i7LXR8aAoz6anmSPB3Uvv62qcaVxNrFfBabiagtvvwcT1Bu",
  "key26": "2Nvm7Ufz8zZWMDYYyQPVMgasVDWCik2cn2UPCNrgHarVbQKWYzMx4gzb95gD4hmrPLJ5D5AQpFEjnKnquQcMAs5i",
  "key27": "2Q9cim87Cw83m9WPo17jmwn6uVJ8fHbduJdtS4ECLRN3oLUrNdVmi5z8b3tvE3RSVkQ1BWcyjuMfA6WKXkDZ43S2",
  "key28": "4UrbuJStk2vftGCSQVXmJ717thXN2fqzLCuxiM23P43cU6cVBQZxTaZpXyQR9CsT5fMoYWhqTSssGr28NqXRpdXT",
  "key29": "3AmrPxLTSjc8t8P1qF9s9w4bdjCREr4aVBwCYpt2ngWWucbNi9cyax7kxEt4Uxe8n1PDge7atBUYb4C7peYC5566",
  "key30": "h3VnYUbDDR5Vr5Gqq7NV4ShLTBYyA2GTqt4D4HTenJeDuEYcYiQYLWfdL9GpSYFA3LHC2Cef6BbEuGnrq1fx7ak",
  "key31": "qZQEGZXGRLzFaJr6153uNTWnermadrb47zqRWRzaNKhqL5E6W42Qttt1gGa4pY5R8h3bUiuRvyeZ2inUBUy1gJm",
  "key32": "axDfvAD9hVgkwTTQLKD3kW1LrJYPqaqhLWiByC1ebKZ57aCuQJfuyHuKGc4TsUdv7qpAUGr3vGnq9pzE4jP52LY",
  "key33": "uYL8HWwzomJGvnJfbWP7LKU6MzECtmkHDkxYvARwaUy2hYub5Z5G4PrGZTgKPsiZjHBjC75ESeepCfWXqdxcGHV",
  "key34": "4dnNihWKVMnitYztjBsXRt62cCqtL1UdoYZxxSLNWwbCP7LGhLZTYVPttVVsLfPNC5tYh2aG8z9uJKGEzE4nu8eT",
  "key35": "5fdYEHN3VH9SkQ2aMnAijgQM2SXBvMqnmzsyZEE13Ns3pvDK3NpEEnS24T5QMNN5txJrARAztLFW2thqmcsToC3t",
  "key36": "5iT59pMoNdfvcdpXLeZmwySvfrBnP7HnEdSeiYQpdhbbCbUgonSMJaByQLBc8jqbhWLWXoWX6KKuMDtk81ymZD29",
  "key37": "LQZ6r8fF9hcjkN6hS7sYkko9cBHo28xQ79sHbPyDfYdZMD13FdNWsKd5gLcRguVwsFwcmu2oFSzUB1FYAsdw1yt",
  "key38": "3Yznvmt7UWgqiV5AvqzFn6Vr1KPFzLiSizCVytyCHojsy37Hqqw54awKfov8xCHzxbaDtzudB1xX2Hpg8Ztbc7FZ",
  "key39": "yLf8j24xTe5bwuVJL7ra8xwT2VUMfRqkSA7EhbJ17ArKT3zYsNTCJrLvWi6QHTMRSzRaPXGDHqUKgmowH61QbMd",
  "key40": "2mfYuDvucJJG84TgHva5iKC19iVEYbdkh4mSxcAEZufTVS9ggTumeDm8ZmFdqaar4aUiuDFnCiThAjDRgDKt6GFt",
  "key41": "47X953HcMdNU94WHaonJxBYnjkUMUnwNJcczwsB2doH4NszmCzuyWjpA1sCbygRD2jpAqJQZ7Uhgwk6kQTCe9wFk",
  "key42": "4KZt19TpydGXvKEATqkTexS9EHTD3WhLs7Wmbc4PG13Wmyh6NTNNGrJd7xMH5i52huTJthvnif1viaW2bcYa6n1G",
  "key43": "4tXjjeMvLiY4wLEqw79yaRpUj9T1eJv2hiHm41BeE4mQ2zjTeGhoqEYg7BK4JQ8QdtgrTzhyKkoSkv8DHMBLo48V",
  "key44": "5gwn7mAtg5QHXmb22HfBa1V1yH48ivyY6mwm7pCRhjLuvZhYTwoMUwXggB4nHUTPNRtBh34DgEXDqD3MYf5SqaB",
  "key45": "g7HqHeJUBHEokw5bEBy3D9SGXaju6JUpEdXQU5c8CSZ78kUxY1qEqLd8V4xc5p321atu4tBgDRQDGiYhMk494Hu",
  "key46": "3ZMWJpnHTUmHfszGSpinYJNSQFoguB3JZkYZg3guRyqQweyexccPxF9cZX9PRggTKYQ1hYaXeQg8im7t1YMM9RSt"
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
