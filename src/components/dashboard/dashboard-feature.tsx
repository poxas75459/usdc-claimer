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
    "5GacM7EUWPyQ1kDsEdkCTwLy22mLEhWWBJHou9uYz54SLGDzWTKutLSbVX7CDDUXyFucMQ1kqQDcmeyV7H7fTQpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x6HDwZYduonSHP9sGSoebNLQjukgtgy8Jf3FUxEwWN6oJXUGW92ETpkgPyc8nrzbc49VSwJG1aho3advmd8AypA",
  "key1": "AWiEwsMwHsFDNiMwfueDvskxxfqb8EDePd1zLX8tVQVHvU5um5tE4qzZ1Gt5yQDY3ezenwAxrkc9BTFB3vMWrP6",
  "key2": "4yyAkGxExCEwAQ5trFGTUfLZssRaeUJxgFLA8ceHXfyprHzj2efFQZAy84NY5r3uZU2x7HCnTTfEPnLC1UyzmUAk",
  "key3": "nJKGy63cetPtmgNtLHPvSsZwW2Uo6ibuzR2mEh91fDYuBijD1x2LgWSrsohWxuhGMrq3D9xMJwf1dFuLtSV6Xxb",
  "key4": "4JCqNieb3KknYtZ38d2beDH1Ku9tCZb5SqbpLKPVWYexXV18ib24R1DAzU28fx8QRjvpWorGt11bXmXWSEqEctY8",
  "key5": "4734JJHi4CHUprTsf1RpHk23we5x6bDwfJTBLHME7bAtUKRCQ23V9wtuodrQLnrhnz4STxbXi8bvFFaPr3sQ86Bd",
  "key6": "41vu2Z46KynMYf6GKDWnsXx24ctCh6j2qWDtt16M4jKvBYYFh1ZNYCuzaUYyr8aF3Tvye5aWTQ7HLTtZq5SbP63r",
  "key7": "3F8dZ4PrRmiypPDfNtbFDCWicNeFETqE5BP3YbVCbinxEBZjDGHNqyN8kez2dawZ4cxhajzyPGW5SLVGWQgv15zp",
  "key8": "4NptxLz4m5nRKFZhwv6JURNQxVRY3trfwDEeaE9WGJ4d44EkS2A75ncj74N8LH4AfZe3oR7LQAJaov7J7wbRr93e",
  "key9": "4W2b9vH8CMN7XtWoytxhLjH2Man78q4ojrocRooJwzYkhTW444Cc8jeYNY69S1ghR2tawBAZcK4LccFTnJFYiATg",
  "key10": "5XYYHRswtrM8MfhLkHwH4U7zkoJdmJiW3BxREBHUeUGv794BmogrKdge1Zh3zYJWZF9VogiikwYYXBWKKPHvXFdx",
  "key11": "5Y3gXD6gtwR73SfDQ7TwNni36ge1mD1tuEpvY9e9cJE8QsXAVoVDVBsgNxydk5dqaGB3tBqKcAgET2hEy1AqWetK",
  "key12": "5aD5pmWVzYHC5P96jJQnE2eZTrzGozQiBptHsmkdmKmuMaaqVhvX7qY5e9fhecq25PmovEt9mAe6yiNVTFMK6BLE",
  "key13": "4k9EsS7GGe7MAUcFgMeuXRGN9FsgcNRzu76voCm39eMsKwthf3o12oreVSmtUUjuZmFGurYrjzu266H2N6vpzAU8",
  "key14": "RPjpDvUkCAQstqF3N2cpJZ6zZEPGrhCQEDX5LsRUuyz5t21iBC9x6fQuSykXCG8hbz3mwSGhq6dmtQmnvY7ewFR",
  "key15": "4iwt6kvjxdUawbM5HBomqJGgbzEQFK7YRhzhwyeo38oarXSJYGW9X6DxbuzFqLcJxJsBPdXU4eWx58fLwfswLut7",
  "key16": "3WBXtEgizFCQsowgW7TxXKbsLZHuwNMyW6n7NkT9U9KESWJ27FJ51i63H2F44rQDjdSDv6uEtQYAN9FrEtG9aXBV",
  "key17": "5wwuMNeAV5TKNGaUBWvbqoD45EdL6r3E6B1KwzkQmCUBgu7zrmTJjKTSeB2HEUn9TqAffccXo5bHbBHwQwWgPEoV",
  "key18": "3xanT3Z2LQjXpBAc5sdFoA2vQQba7D3ZNGvSwRq4yvDgT71teft3bykgpiNfs4H81vqvBai9ukEsdSAWMGoc7G7A",
  "key19": "3gekDnLvEB5Cocjjzby4z8ijqiBxJpHNTB6A8ttKaC5qLKazfXGrgb7a8N6eQHnvDwJTURGNSZCmo4caRTLkRpXU",
  "key20": "656RksuouQeDtjqDpuk1EfC2y3VdrD62avTzXPu7FWKLeNMt4DSTBFoViFV1RZvBJNErf16S2d8UzZTvfEw1g2JP",
  "key21": "5KjGWc2bVHsNE23NvXwVYNLVKeYB8E9xNYZPfWnY8N3yk2mnB76M1qvTH86UnwAEjqG96powsdJ5HWdmMCcAKqRu",
  "key22": "QH6DKLaqM4RpAZgwhRaLsjknZfUpvgzJkb4m42H2A6gr8vxhDrQJJQWghEyZ3GGHhS9VygznBoWWoiL8AWepSB9",
  "key23": "iQbewJ7JeLT9S9oBTuECa5eCNTEdnZB7EHRPbPLW5bTZzuEP6LiscyugusBNTMPm58TyJZ8GMVcGTiJD9PSb4Ur",
  "key24": "57BaeCqUG1Ac3xTXX9URVMjZxyyNVK3d1f3jpoVafhrE7xFHYCwsiWQ1E7qaw2X4p7W4VmUBUdxhjQ4L9M2hukrb",
  "key25": "5DbFSxLDn31M6X7Vgvg7w72pPmQBBVkuX7VsJ6UDuiQcFz1Uw3YmPhDZtPZMWns1LxY3ma3wVtaqMtEkGJKaanYZ",
  "key26": "4HzYwSEw3CKtTUnRyhhwUSHzB3ovhMRq7WsKisw9rnn7SBs1h9A3vLY8aCSQj2CQnqQrRt6tFkwVQ7K9DYjvLWtR",
  "key27": "2rfeJk9qYrhXBuzB2jym4WiDMw9zK5xjuSACa5BHehHDc4RaXzdnjuzvxAjG5hxgqjGQqGMv3jFXQzGzjZknUvKv",
  "key28": "2tM81E2f2GpFYUMVibuhn6e1mpktQrUNHUaWPnKi21R6rVzUqxgGFQxSkTTWKvFZ4WbNbUWXSpYDFFd8g5ABv1be",
  "key29": "58XbpaDLf7YSAYwoPEdB1X6fTvMuWjHuuZ3txiRdHggT79cawG1y4cx8yhkXWTxGPsgcQpuz9zgwUZXiaZLGmC3f",
  "key30": "quMz3D1HbbyZucNJfxR9BYTvbhGGBG9fh2xSnBhAXLwLF6sFZD5TmDrfqppsbjpgoFhKdcLMBep8kFK6Z4fS4E5",
  "key31": "Cxc9TPdQieBRcSvsdjvUxUaP4KdMMDxgkzqWfrXGHmJ4wUUh2UzqUvd8efr1XEeK4975grFxPvrzbhyBy3vdqQu",
  "key32": "4Ruun1emj8YVBdxfx8zCfDXxBmNpL3LL2CCRbCWxCLNNwaCP8uh32RoyaovgybMq5HRy5kfdarTg9U4JksyjdzEr",
  "key33": "YjguLQqHT8wdbrk8GdWjqHyad786iDE1nTF5LtreSdP2643tY1LCK3BRzWhXfvSGgv4R8PboNhFSV9oAJ8g13J4",
  "key34": "233XRD7BU4QqgY2EETzC42BwAwkJHfYfVi88FortpPCAASJ73YN1Wo6PiGZZR6QUD1Bf2PPM8B2B6LGQcNpswQHf",
  "key35": "2ArD9X4QmMjkMCHT3BGYpCWdp4rq6my53kaJvUGkdfMSDnUoBnx61tGikjNDq2t7b13YKeqYwix9nq7hRmas8GSV",
  "key36": "4BzZeuu6Wm5SAL1JxtpAjcFZjxG7RQYmuT47TqVQEGjbfhWeHufUMb5UVJbkm7LSFQnHkssLdduXNeNk9Qa3UX2e",
  "key37": "2bmswga4DzZSxdNUoH3L3GyxjRM9aNVDgsr2ADXq5SewcPHzcJEHFRyhUBrYpFs2fH1E2jzVSSRzU3f4fQ3q11yU",
  "key38": "1JmFq5ngtBg2vQtXNNpcowthV3vXmJbT66u3viGt6wrjg5Yhy6EgwKEB9igjibd1DBDbJ66S2Poz9aGTJJiGxR6",
  "key39": "qyYoE7i21jbn6hHfX9JFpw8wbSP1CoVtysbmUkbSAnN6g2UKvGjVK3khUJoJPES2vwg3XUEu1uhNpU44Si75Bps",
  "key40": "agvRoDWJAVuDePhtStrsSXAvaFWFE9pnCT6zHMbaPU1wrRa8kQsBG1stA9ead3Hgouy5UaFBvaR2QpkaV2TUR4H",
  "key41": "9Q1v3x3ManwDhUWrodcs17WEXF4HkKyHFcadi5CkkGPi7xLrFtyQ1QiyeTW66qR1tiDbQmZTRaSvQKq8GsNA3cm",
  "key42": "38VvndXFAzBRdTaFsS1XHGz8yqQyCscnp8iDVwj1GMCTPPZnyDg2Y9Dz88DUywErtVrzSpSPPYv8VoiK6F8J5Qpr",
  "key43": "3yAQ91tpSeR9X4nc915EEpgxsWrXk6LgWeq7VPvJBu8rUQvxuRG2Q22D9dzuKYF8fMELfZGdgazinhNSpvdG8xPB",
  "key44": "4LjBtoHGwfwCfaf1rQvZcFxxWU2AxKaRhgSX26f9JYURXf3CU1bZmeBM5VgbmdfvC5DQgk5LErMtWKkirawGMzM9"
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
