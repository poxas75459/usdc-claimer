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
    "44jGyF6xH2ZsD4mBqHA5kBm9iUpSzG6UddhWaqNpJA7cM5MbVfgyGJ13uMvnRyKSbKREHvZLiWbkEDeQdLcSFMoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bud7o4KTh9iBebVcgZ1hGg4sXwBidyShmexd41TnLk18N9utAyombc5HEpX6ch8quyjkddA7XuScV3JDYJSDEbn",
  "key1": "64XL6eccXT9S9gZD9DBtNdpJwJKanWktjuetLEpgF65faMYb9yuQJFBnhnUomrLCD8FKieJQ37wLAuECgeEE86LZ",
  "key2": "2ii6QLJzCchjPvtAqZpUtQbs1pWo77qDkd2miyUnugMkj4xodAWm9cK4kj6c9Ej2EnMYbhmahxheHQK4fvna3hnb",
  "key3": "4vc6H6KXMHbwG73PGMxZncVcPrikrhzaUq9NrX5nmYD6KNQJq92kYsKLBYwfJG1c7yZnp7Fx81tVJ91UqgUKBGo5",
  "key4": "3Hg3eEtD8FmQtnWsRHXXo95ZgNMxtY1zMqwRrL9UtTjnWxdZjhSwpyvt7zx3MZCbyffPEVHAnPVXcS3Dj6wcbeQU",
  "key5": "XUizN3K22igQfgHqvcQUjNwFZyRuQafqpN7qXTApEtkWGVtU1AaqTSNtPGyqFyh2j5hH126PtnGsSoGMnLNvmfT",
  "key6": "4dxpPvNcRyd6ieGzw35okFm1eLXJ6fmLYzWLAKbVtNtZpi8M4FhcSZnj5wvgb8uqHahFTvgK354NEWAUp6bwMxBE",
  "key7": "oiEaHCB77mjRpoVUra4ku2nzxZx1WQURdK4MAxmuuavi2Bt7zaXBvxg5fEpzjMKmX8knZjkNAuAKd9jPAL9yc3R",
  "key8": "3zn9wXNfuDzKmr5vn7Q3QGMBck7CjsGP8QD3zL1PFexBHJmPttYfyv9cWzW41HQVEf5zeVD3FNVC1TmSdUy7Qdwm",
  "key9": "KYZFMTRhWjM1s1RuxWueRveM6HtnzPHG9nQ78DkEFNHDN3NvZCbLeiQrq9SXZxuxr1cdjWsNJ9MbPdcSNKpwo5p",
  "key10": "5D2rHysPvVK9E8WNsBb58LAXvZpaosPyi4ACYbK23pce4BNev8WvQRcFL7LTRNDqz1qcUxvRJNnXjW18Yf4rov1L",
  "key11": "9pKfpRXn23Tj8kZASTf9CqPknSZbR34XPNT4RDXo4hFNB5Z5iuPi97wowf6krDLioZjTeYFx81kE2YQNAjQ9ejf",
  "key12": "5QkNkJd98ST22KgwUxx51CFnpLc7FaZa892bRRf8Bk7w9oyq5QkKbLCW36gAMqm7nqnRDRXgPm9kXiLvC134eWQ5",
  "key13": "3zAGhMVFTJmHF4nJnzJVZwaXXbt7S8FrgoAHUhWpYqMKaTkea89haTKfu4cnXrgeofShdSqanmEiAeT5qcMjLbdK",
  "key14": "WJLUWvP7xJ2JztE3P4jafGmXxgnZxdo6r6UpFP37TsRZpV477iP2sWLgiji2dm4DbDwXVuZResg46VfTutUC299",
  "key15": "41Dny6Z7uXM1ppBGyt2cvPQLcavziPKpUkkoLEbsuzfgXNkich5NfCmemnjLPDPit4tju6daxn8gd5zYDweUiT5W",
  "key16": "3NJ7j2AZDoB3GLwcEF375kGnioMjWzYU4wFXPyiP6rSXexVosov7wHSEhq34DDCNbCUhH4NQLRufoHTJitdT31EQ",
  "key17": "5pwwVbQQujHvCFTuAAZBq7uZP36FKUsFZ9eaPTymrD8M5Tg88FpqyADpdv3WvJmf2AZjwRwJWjuANifxeoiiBRMe",
  "key18": "4y7aBXhFximidPsq35krNEXE4Z3KUQY2szq44cPDAyCPtfwWrGv1TpMNMKjrihMu7cL5ENZ3SHm9tKXpnVMH3t7L",
  "key19": "38Bn6MkW3pKfWTwDEnJ4ugmeCAmZwV7okrC8JVMhbUbL43Es9QQ3VCg2xmVfkDmhmNiF4i9GkoSbDY3e2hSbomkT",
  "key20": "3VkkKpYimACu8nvzXyDUwJHTrQ4PZVA2qhCAo235S6Y7BATkx4i6iCW31b6xsXmy2orEsLb31dDsUdNheasCDUEp",
  "key21": "5U4ZRk2zcCqboaKLo6D2FhDkHFYV5v34DJHf1LdqxqgCepQfT8MumobQhsHXcJZt48U3Jktvzz7XN4qjNJhiA9Sw",
  "key22": "9DLkKnm8AvW9zjv7vKPCJ5xLJinznvMwuWUc5aD6YrK6psgwxf9Hg2XVbYa3zmyR87ue2k8CHaiRnDFFuUYymVG",
  "key23": "3DB3km7eGwMXrDjpd9DKTJcNXM94z2dUdVpZsikRyZzXzd7ZHhDs2yq9ELspYn7Xyscrrg9BLs4ZhMUxEzk51y3C",
  "key24": "3aSTAM7qwRhwTbRnYcmq46mouZUt6acqU87w3FgRbm7XZQXgEgnCSF261BTVaiiFXyNAv7i6pAM1jWikKFagLrp",
  "key25": "4PPyeKDzfY51629fXyNZjUWgZJcQRz9AqdmVocZmad4S3aiGRPmg6p68mchDwQRcWASWeijFsWZGSKVf1RBRAbjs",
  "key26": "4LBjjM31msE3A5BZt1HWn2HDrBgL7uGgfNdBvFRnqFFaiAboJJcsMpsohBFKVXG4xRQvz3FyXZcTqiHUTNP7ueWt",
  "key27": "2jz8tzZsfAYR1NDFxPSbtvshzimgYuaXrZwpAnmbhnoZRqNNot3WUoh1CGyJwVoEU6Gs6jG49hmHbM8dxBqzA2uL",
  "key28": "3Qgm8hAxK7V5xL2ggFaC1RHLkDmeLC7xgirmoXUPwyGCWnJXUxY3nyzGx1tmWUfCk1BqTUgxNgncJpQjzdRiq6UR",
  "key29": "3AJpRnbTnaMM34wfdAbKTzTcbVwSCdzNAGcbnYDE8hR75qRsijhAsmyCKRLPvmx1VUgmKsMnzho7Kcex79eZgbis",
  "key30": "XzKngWPv2wMSpNMWPkBj73ajY9g5Qo1wu69yQYmEUq9CWGGDhhe6rBtK1q67VqS2cYd9XEMsGjV4PYRaDgATrkB",
  "key31": "2AC66ALpeHjxWSZ95jbopN73MU9GsfmxCPxfBuVyYTJMFbyqvPWiJ9en18r1EjtSXpiwK1sp8JBfU7F9QGmCLf7j",
  "key32": "4cF8tvvUeLPe1kmsZLSaVx2PnEqWbqpASxGKui2rgSTYR48BQCRARoT8KbYMoMw6r7j3jV1DtXrCVPLDMG2payKN",
  "key33": "5acRFxnqUVQ5hCmQhe87vhGp7buBpFGjBMg6yZ96uPrcbynrsxGDt3srfRnWXkoJfnKZRBGrVgLmstWLidpWycDk",
  "key34": "2JoJfHim4pZX3VnBiWMoxQiSEsTSXYUGJ5NXMW3FhXqYNy5mfb7PXBYSN2F9tn7jZJDNYNFr2vsdmpd32XjZKtkv",
  "key35": "Bc7usAwH6eYGcKjW5rLeKqsVh65WyY2yZvoweFL2yVeYkUsPhB2NYAqkVxbbdcXFX4VQhDv3o3uKUD4yDkMpsCX",
  "key36": "2tzL28g5EZhPZRJgx3EwX1XnuumcMm3oYTKBxMJaSdDxbowBLCbxNWDk1QGdGzX8a1kMbBxRKAHxLAGinwFAz5ae",
  "key37": "5UbYfUiYQL7dkbHRSUE46UXBLWPxegLbLgymhPAYk77cqgfpjSdGYweykQbT4U3NG9hVkJC7m2JqGQHxSMrvG7ny",
  "key38": "4uuS4pV4bqLm5JLon3KTojbzoP8PRrugbakXALLnhcDuWsJ1MDhCVszfLvQUWYzRDnHWe3gLrvj3YrTJwv3Vm6pJ",
  "key39": "4136voBkpNLeJBDJdVQ6edPx4YG4J9VC9EyKFzyrmhW4bW1nYm2uHkHvkHLwykE37jCf1nzDU2DtQF4qNxpm5PFP",
  "key40": "21B9GuokUNKffxcpsbqcdxVbMW28649uED3duuNZ5R4RLiYDWSgqk6KSVHz7rdcgPfv3bVfa7iabhzit8ZcBUZQR",
  "key41": "37qG6i2gw18nCNRNUNHRmcpcfkbigUmKaAQDbqFEQrgtFHTzNecBhkxKbpDjtgXCHonbLHLbb5MCVCxbQrs4jNCh",
  "key42": "4mnr1Cos7nFDqQXCHkFJEzddteAVfwvaYEKP3aDTDeXe9HUKx5gQZmCGmCFNNTkjCMPmFVAuagBV7ajkh71MY82R",
  "key43": "G3KuKAHD8NaLc4g9tb4WnUsNCry5m7BrfHv6GyhfzCMRLxHEbYbhrJJUqov4cbYGuY3KUTDQLZynyBpMCKAQ8AW",
  "key44": "uXHF4Y4e9PgJUT547E7fFcKAYq4KK96XK7t5U16yMG8F6bYzgF7wTr3dLPJtmVeF8Z8kEFBWp4GkKkMVsfENxgH"
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
