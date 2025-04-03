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
    "5NYaYYZirYVcQAynjgViPDxbupM6q3UfU6LY5TCexQmsMR4GrYwoU9MQRNmbjHaxPLsu7XBmT2EYfKrj9HaVRTrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uJuiXSm5ionFiVDd6YP3CqEqtaKPFu9aBC2QvCaXoSB9a54KHGsvdRXYsvNz9yExhmqaxhLWJEwBXVfNQuvoenj",
  "key1": "31FR11dFf6f3gh6mTB6zKS2LsaTr4AthE9si2u87T8ioQew3vL3LwMNjQpLUpz9rmzvs7r61SXw9xbWqrz92v8f1",
  "key2": "4kXui8cwgPMK3Lht6cBGHQwU1TJ8DDHFmqBUcdLY6aHy8VyjvMeNWB5oqJJwdfbhktw3wMJvteKpxifdpNngvz8t",
  "key3": "61MoF7Ezw3kNK2yj3vikm7rcbEchtpuYe3vWu1PhxMLAmMphrH7KR6HPyz5CH212g4jRdjFUYF4nRwRfu8pEbUk8",
  "key4": "5Kz6n2c7s7hLBNJ3mSkjxe6JGm5DXPGfaNxK7kTzRfPTp6cuXBm4U1rpvDZgGBh3EHk7ocb49DXJ7h7HrKRhEorF",
  "key5": "4YcZprvdUmyTtV1GV2TTNJ74zhuCcUKcazuVj8DQm4wqTtwPCkokFDJqVkfVxjLQRQHszfaxSwjZe78sV7s93kKL",
  "key6": "4EeyEZRFUhANGNsVXgoWZubyoLuvAugpmRjg6Ef2DH2isprwUrjd9kfqJeEQhy58VBqa8RprphAvae6EhbuMe4tt",
  "key7": "5G3BPqixAdrSn9tWFkVoeqfBi6ZWe49QL5bzffiBzhcZ7UYcwdCVkdrJTfQCisvLY1s8MV9ZMpMt2Q2gm5oibXUX",
  "key8": "3J28LEtQej98JVZzK8ky8LybBL8LDg92saUcGYmEbfUGTmiSnrWZr1oAggNyqGyCu3PG2ds6tfjGjvnAJuU3r6Ju",
  "key9": "RVsY7WSsqx6rip9Rapp2KtPZCZcaNwzXMJzWzTsWKvE1FVuDYrYvKVA38QRui4Ub5UnPgqh2x4jKt6j1vhJ7uxn",
  "key10": "vpejzF3RwoFD78VgELW6FB22zJwUMDKRYALihJAf3XoPw6fMvnChH2DJpyAYgxzMx3aPTKN1ragwdZ4V5YiEhc4",
  "key11": "32Z2fNGjCxEbeV5NqrgKAjkeXxTHo37ftmavp43HxBotxZhfLfgaZj2F6LYYiPpcpERnSG1qmRcjrpVUa2aWRXn1",
  "key12": "2sezx4ZXiFY6iPMGU3WDJwhhu36AigCuGFfVJwdJ6YHccx6RZf9D6gyU2JZhWDtqZweQBfg614HPijM77Lz9FMjg",
  "key13": "5KsYLC2ADUJ35mXX9K4ZjBkRe4Es82T4xJ6KGwsavp8apBQjJFXnWepsEKuxejBf3gqdMzgnx6HVwhn5NxzUj18t",
  "key14": "5nTub4MYQfrDa27stYmyzfGwN1vzJeLbNXBXJuAGtJyo8kUhDbxyG711G2JtGQveuzFJYwQdGLaMmH2TiD9HF6zA",
  "key15": "2uceuLVXLPtsmVeXJ7AA7fyDfm1dehNY9HtTsgWQQKizGpf52wKr4VFsJZN5Ut5M5E37kdvuWz6wSXMkdw9QsVZr",
  "key16": "4HK8x12TNkDyB95njjBmZ3DjpTUU96AXAek4NMc1zoEHLa6P2UMXzfGZW3CvEzeHJHWEctyntSTDNc1iaBcduUoZ",
  "key17": "2S1HKA1b5bwgyxLtnZsnRkZF1yKBmR5CTf8G4k4j6YC7nTWx1y9URyayNxq73xu951rLYASCi6H3ahubZYUjgLTu",
  "key18": "5stzPTQMbSGR5fZ9Ep3syeUJMqvntmiutuPnzG5iFVRcNSVTXcwFyQ6Mj6mqtaBzwR9GZStz3vm3TJMx3H1muvw2",
  "key19": "4a9bAHxkTWN9XBWijyuha3vxBu5q45tMdaoTCDJva6St7D9HrJmHLWjoVv6jgaC4FyQ1tC7gsZeH9m5Pz3tbkKwr",
  "key20": "3ZSiuaFmo1ehGcPAxMCmT8ZwGqSEAZNNguX4hH1bhc52RnPSTQQwNTSJu7x1HZAHcbK3289D2kRtcUVz6jk1Kojv",
  "key21": "62SCM8WpvjfPC5JbVdV4bpsUgdxFzq87VB7KfeSJNuxrCicxvK2P3GHutimHJdAMkwZV5AXbFP3vpwFFXQkYxHuB",
  "key22": "yxVAkB4Kb43dc1YSmnAsX7CWXnQc4F2k4u9vpXQiED7Bwwq1TQFNkyrqc5EMCqYThJtBpnJ4HXeXNoGYAvuUzjQ",
  "key23": "2AqULegA4MBGtJvtXsYk6zKtPFAfaAz55oK7NUuequN14UUHXQKWzcuYiqKRxuEbk7bRuh6v59UnjDMFFa7zcwjB",
  "key24": "2CtAXG6bW7eTszNzxujJARG2mecv7cfaUkKVcz26MzYPy7cxp4KBZ4MCTHBYRCnXtjum11mS7rhotcaupPvgzm2F",
  "key25": "5ihLfoFhRX2FrkyttrJkxQWx5jaEgZPQR1ryL44z9mcN6ShFFKhKMxArEQwHRyAP3RAEXVSK6BN8ePV3ra7oukEr",
  "key26": "3n4tAnTMf7CKyeRyLGj7rEQCXvCAXsYNazc9fJRobaZ15nay1UhKoXzuyvpcoV8jSEgL2w1towh8JzhzFpt9GrHX",
  "key27": "47xjjZCKNbwiR5N7NWZZitsUUmwtC3gSi322QNyboAbZU9YnfQswmu9qCSnh7nS17mXWTSHnwMkPTTZBEBiNEzqM",
  "key28": "zL8mpgc7wV1fepTA5bsj4jrcVyZUukCdmCMVaLPbzD1SxkCoLxQcxMabcQwW4fxrK62DkhpA9yZppVQUfokicTB",
  "key29": "4r368i2QqPJGoVgadZg7REmor3xr2DfdwrFdWGhXSePRsua281Nah3TkUF9ZLL4t1WraxkjCXxJPGsABps3G5Ui6",
  "key30": "DHb6sF6TAPyPhU8C5wrTUzCvxCfEwB3fWn5vGFrPErMjv6n2rdiQsiaqdJ9hTY9XQEQXYjdQCmW4uWCdGDfoEke",
  "key31": "3FJyT4ssMbthG4YWZDPctYdLMpSDFPhi4Ed5NucscddGsHUhhQkUsNR5wTJTgXWZGV7KEVW6hXVG5npr3woBXvnN",
  "key32": "41VAFNaCDh9xAXpenvojU4Ea3G3cUvABQMJ41EpTmG2NHwSpyVKK7GwYsMEyv9AWeWNXK262smYtRAbHBAmfTGCU",
  "key33": "ZGY4wvG75ZgFY88cidCG3k3sKqWUiAGEfuDym17XQ7X88uVW23RvnrgvHagbNvoVD6fKosDx1JKUesJdBajiDc8",
  "key34": "4Y3kJPMp7Ti8XhGtNpF1iNmVaJvBpkwjxdwKuYg7Fy8MRN4DzbhyXwPk6AVWXXNEyBUFJi8VMduxVp5ycyFQCuKK",
  "key35": "5EpMDEkoFgrCD2S2RQoEzGokCvzr4j5QcE6sa5KvjLGDHWPqBb2TszsQPYWHQKmk1b4VRqBQe7uiwJocmwKbsCqM",
  "key36": "3J7apLtKppiocdDDhUuzM4WUTSWrwJG6on7nbueW2xW66BbJLKyqKY7BhNDGVgxp3wPYcPZGhCxyhm2rJT6Veke8",
  "key37": "3cZoMeiEFNspwxgTVZ5zEXJAaCjtPW8N3N7HpLQDhxDT52CAj1SASdBBVR8u9FfUxLAoPgYxfBNh2mD9JjtsQtwX",
  "key38": "f9XjV8RymEbpn2gMrdBbWyn1FvEAbihDscnq8e2DbauBN1kL6NaNQzZrM8zgxSWmg33vnbhWBogTnrpG6ku7rz8"
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
