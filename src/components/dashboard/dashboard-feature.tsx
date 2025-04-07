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
    "qTyh4H7Vuh84coVeLABJgKMKD2zxy4deGRd7uzMRWJ5bRN1JjWtV2SMsX247T6noQJ9QWeQFkz1tfRHTatMmkYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yp9VAAefns75XU56nZKtsThDVtgPhhiS6QsGjEbpG6ZFjuBWzbPrpXadd3x24QA217p41d3FWSR4vf99YgTKKw1",
  "key1": "5zrzCsGi3hC76Dg47WXnEYqXcsf6dcQFXXFToD8YCBG7dd1YFEjmZ4oAAbWa8YgNQ4EQqBPLvQRvpMs4vWCsHxrY",
  "key2": "4VFBv51FXEVDsQs7RjwMsitV79mjHFCj1JJNcuazrNMR4ksauqahTpC4gzLwcqfqtd8wW5cB8Y2LBVPrVrijuCUr",
  "key3": "5viHEec41HEdi8rDKqsJafTSPA2wcbSnp3vGJciTU2t4NY4tWUyfFKVcGXEHBt9XBcUF2p73FMbAGGpUxC3SkNub",
  "key4": "5cbvoKbQ7j6zM2UDbqqyHEFP91NJT4UBSEntTNwAqyBjUAvpcQAQpcBEf5ToxKPyE2FJLiEZKYFnVEBRvDo4sZoF",
  "key5": "5NCYi9pi36Yay9Z1zcdT1Yjw8nps9Be2s1dcv3g95uTZSyaQtpxDQdvGjTDeLT316v8g1U4sewD3YEamChvLHFpA",
  "key6": "4MK3kbDp21Tim2Rykx6mQBbSdoFzVwRksK53kFJ4HPgUoTsPpX7eiL6Z35q9x46Bgh8yYVBpJVcoCU53JfnN4UMW",
  "key7": "5miNHKr58mWcSfo7TUJ6vpZqR2XjPpiXqcyWwto2s3BCQNcErX7bSkXRPnkHqbkD5MHTVMmTiwN17MWjFMsn5CEo",
  "key8": "zer91AYk4es6HbCqcsEEvhHdQ6vbFb8dyGTZbAyvAy9T7SYFb7MsrkfuaeQTm7GmaZvJV3eJNRC5x1Q4H1kD3Zy",
  "key9": "5UNiozQ8GzxEbuvWHmcNGSJ4ypjZE4rfNoHK1AjLFVK3y1aTdFPSTjE4hsKdKmuwjPV6tgV2i2xoV1hNFiDEjqmG",
  "key10": "3s6BMbLUmS43G6wfNQSRcPLSha7sJ4fDMKFAN2hjdGweDWHHdHKe6PZU5fwnkxqP8zgxjpk9s16R1SvMUcLx6LPw",
  "key11": "3qjibDJX2PUk1wBKtKntGkENfNfrP8qGST3r8CkA8WR732MEoGgQPGAt4pxTmyKmnRce1GpNNFbZmf94zXqUFh1s",
  "key12": "3SMfdb7VM3yKhjDJJxGiNPiBwbGvvUKayJnvKZoHeNke7TAuHo49eeaNH3HCgAVZirdrD8sDtEfLF57CN6HqJu9A",
  "key13": "7geBbeYG3oUoTaKjU7HZrVqq1ZHBSZY3g5XEZwVoQNMc618KC4d2LVexCxeoaXDUbMqDzi26241YCSXNfXYmuNm",
  "key14": "2RDoMfGABJKuMppEH8pV94KDRet8FEwAXbzwy4YMbBujximhd8wfM9L1LemAQpreRrpV6dgvkDLjrxLY2yZFpJFW",
  "key15": "n6aEbdFVTvXPjLPCbtkgXShKZ7quFYSNjaYiqjKVsYMNPXpSndjULfYAwoiygG9UkNrNwPqMQcTphXpkT3U1x6W",
  "key16": "3NRYMXZ76muP3qjo7DxHyqwDS2nh7rUL223SCZmVhJQZco5eowrUq47iiMY8WmBV5nCQSkZzswwC7e9SszqmL9eH",
  "key17": "21tZARKWVp2F5L68UWFHscVPSizNBPBLZzC9vRuswxHQnTTXQVgCc1e4FEbBYYg4ySbzbxjKufgjJvxM8repWEjz",
  "key18": "2wyhqk2SJkG6Hwq1pmaMRjS39g4wL7W3sbD7ciLTNzrj6U4BtznJTqpWbQoDe8EwNy3yFLPexz1967pkH23QvbQM",
  "key19": "5hgJfiPm6uGuBXVuCjBrc1Wwp9ygJgD5eNU49sPoHH85H4YmkaCrCtmNMvzCoCpxXZHJNvNznhTmtRpoi2BuBnFr",
  "key20": "3eGhqiok3HpWbohJcZue3vEPYFuRYmmJUewzpGuVoGs5s7uGCfs6pKHSaBrs36fPF2xCZWThym3QHvsF5eGvFtnj",
  "key21": "5CoN8tqZERBTY6PS4EJiNMS9FzGNo9Aavyjf6eZds3bcqs3RcgeoAuxz3JSs99Aw1JgnJ6cwisp43p2rNfMjPkMH",
  "key22": "3YY1Z25YqVcPkc36JvvwZmHeC28tRcgeSd7Coccgb5W8umeWJBCE4uHaK3bUCku7SMQ1Eibc1h4VuY5cM61gnCef",
  "key23": "3THfmKsxBfNm5yUodsSErz3x5RiDV6kX67UG7xBoSjbEyUwPFojLVbnsGEjrNaKHop5tBRureEtYNavQMXowSpD",
  "key24": "3QNr8EjSYdxoUGYvevgguwajfdNi85iMs76bT7RVR9FsfEooXeLqAGMhcbELdspw4MMFZLiVmYaTbVQf4YtwaVc2",
  "key25": "kuXZHG7GE4sPq9EabWoVwJqcdcWYz67jRoixARCStgwLDKNqaZdAXxcyVPh7aRsV4WNrC6sdhSyPLEVMPL21APn",
  "key26": "3TgALc1zY2UziPfAK3ACtpcm42H9ZHLg8UKBjESi3NSctyDG3zYLEYzrU2PzBogxfL5abmX51VfVSwy21noVtr89",
  "key27": "5xvBxctnJYXsXmoN7o3hdoYGYWCAKSJZb1nSxtbLd8aZnu6faGCUabs6RfF9i5iU423MHV3HHTXiyeUWQ8dqqknJ",
  "key28": "3ymEZoPZNavfweHNTXihNZxWGvdxE1N77y4wQvqYJrMKAwqxhLTr4zav4cGMZ3gjWoRGv8fKaxpE29Re3pRcbQXD",
  "key29": "QXhz1HDMVgPgYSFL37VSfy1AkZQfLKoFESZdeU1LKiBC8cywZjxKVdvs6XqnBJzx8nTu4DEcmb8kmbshY1UJxPi",
  "key30": "4Zgamc6AqhxQbZUWE2qavC7j7KYe2TQs4JzghTCUeH5VxERFni8pdYwNDUno5dogvkRBt9twFnuXfYH91M2rhnUj",
  "key31": "4SEUzJYXbkekceGa56V62NV9cezX6pmF1wMuxHJygqJyYZfNGWuwVfb2deiPoYjyW9Mccz1AQxFAj7SyiXGeF5JS",
  "key32": "2megrHYQQPuQPHaqGR4wzMv26JPzALccU5yFX3jp6LbEcqRphxo5WokhLiV8ZoaZ81sjALw67TnVgD25ddDotfuh",
  "key33": "9DzcoFXyK3ZAKCzAYhzUGGUTrNWiyPe2RsDkwQBVwcRAWEfiJBPiwip9ehA2e2og87Rqpe1gNkUcQkiaVCezN74",
  "key34": "33pHJJDedxmcY4b5KHZvh6Qq1a9v6zmDnU8Y7wVzQobHEehiiZAgDAev3g5HqDnWgRG3AQFLU9VAhJKEsAhviYcf",
  "key35": "5txZ2h5BRFZ5mw8gTy9V2XXCdX65ByVj4enVxVPMLY6e5xkTauB2hZ5Y9vSbNEWH7uTfR9WnzS6Uqr3DfTSt8xVD",
  "key36": "5iZricT6yKHJeanJAUHRoGF71aHg6DSLq5QJ2A3YYkraHtXQKbWpPXh4rh9KTMULF8hCqVc99jA95BsKR2FrATyD",
  "key37": "3ryxy8zQeynyr8xjYosXkoWdH6dHq2GNXKAQqJvRDM5Tp8dPLD2EHddYhZzck19hdRdHb2KbGqfWv4pRDPU3BKc",
  "key38": "61zR64ftvHb2pZbudT7whNMC2UH8maPUECmpDwYRKU9dD1Bk3ecNUUEZfBtZtdtHHdW5DWfd6eJwTWaDY3vmotk6",
  "key39": "Vj9BcTc5pFp7JGwGYcKzDwHWyrxB6Rw8Tzze8EK3dmQQzafULuu4KsKe9YmKgDMvu8hN9hchexsKvnodXucubYz"
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
