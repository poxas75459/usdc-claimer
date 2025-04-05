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
    "4tv3zUMmbC3mLF344uzNhHaLAtVJZYKMUHjjtbW6EQ1i2vktAdVMaHaqcQYuAsqHTkAqcSdNfizF5caoVPXuxoBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xEx6Bg3cHi64JbXjvEVp6uzQTrfChYvNLxvZEckxRUqERaSjjF2dk1rUAGycTo5aVxrpXkUxXxEMCQkcfnw7JdQ",
  "key1": "2xTKKT58NLLK6AcHPUbmiZPYBtJywg9WkLSMgrsKGwByWtTT6UgUXzmSoSGZ2xsf7TN9sMYAXY8gteRbcxsVozAf",
  "key2": "zCAx6sfqZAeEAzf5uhrbhEVG2wftVtWQLQ2tZhE2gJprA6CakcuXcjw6bFwnU1rHwykKym8Q1MANtKehdnTvMwT",
  "key3": "3vV3ETKVBRyd4TztZGKcszHTw5h8yCP2KUtXcc7V4VMVotkemto3niohp7zPkjbzg9X8igFvi7ZReSnh7t6YfpKU",
  "key4": "5KMnzy1zPGRyPzWY9J2ZCU9yBz69CNvXKcawUBeMotGBst5J54faGA4SwmJnck6qFQaTXzXYFZaYSqC33onh5fuX",
  "key5": "4x5DzYpUTBuJCMm9Nmt5hr6kJxjXFmrGGKewm9fLWQ63SRwd47KSWrTDZ9kPk6twJVcBvHTsY1aT6K5Xi5ntgPCx",
  "key6": "2KVcqZhsxQ48WTRvTnF2kGKGMWHuXAJKeqkyqNPNzHLhRndRHPRBs8DFtxG3MxwMYugKVhjaRjxgYAhWrtBSsncp",
  "key7": "3nAYTHcs8GeKLaxUnCLoQvYuVQtR39ARSaYP8nBR1hBeh1svjWU772ftTDgwAxNa4VtwZ9PPRwvp8DvZvdwZALgh",
  "key8": "ce8PCacTGjY8SfCcXtp8WCmwRRZsomYsWNWSMRekrHUmMh2y1dUiytj4MsmFMwShLFP44tHGo2b3VHFx42x9cdr",
  "key9": "w9YUVJpeKRYCLWeJCGpdjNm7Rjvbxcz8XvMbqVPLMB5MQxFZx8Nn3H93Hg2a4iFm1BqBW7uctc4pzPemXZZTm5t",
  "key10": "4wTErTTBwWpiV2QAZFnh8BdZWVjFeuWZK7X1Ah8cbZiDJeA2NbTU6qYorg3jfmxgrEZ59c1hidwwZx5v73Ms1QHK",
  "key11": "8CLdR7cK13JHJiVU8oc9MfmXoyn2sXvebDeXJSjU77NguBrpr8RAzmpEjjakKEWTF2aGtcf4xL4Lix6mn8Mvj6B",
  "key12": "2t92qMjk29iqdK1PevdYxEDFBTxZtpgYroxvHLxSRiZFtugLzVPgQTHqzzZDsS2exqgBVjD8jvH948cCxBVV1bEz",
  "key13": "2NnGeEert2y1NcbnhCxmUjU6FAogVZfiUcAMBFwwsfwL76vmhNa5NNKxhojo6k2Xeuf5enHpKXkDiAm1ZrwpK9oa",
  "key14": "2WWr1Epnv3r9kCT9HgTJAqeCVQaPKEQaxVf42pCfmVa49ZDUw8FyF2aYY4J7ubnHqpoGsHFu3dBQUyN2JxfRZAaP",
  "key15": "2c9DDuWjBq3VQRrbvux6tU2dTfdv4J5e7rzP2X5VrSBLT85RqHCXUr5TVp8AtXTuNZ1GQHMxpCnKRYD1aT5eF257",
  "key16": "3QY4cLmFLg78QaxZMKV2ZzJTKq4C8TpgKo927S1HAX9VPoZvKad1eP7pkTYrzHXzEoQmgKgmy2Y4y9P9Qs7D4NhW",
  "key17": "2JQD4pfJ3t133237sVQG51tPjM2L5msm5oAXbgiiuwJRAeX2EkH8gydkVarazrNab91PBpaEsj1YvKDwvyZ4LiV7",
  "key18": "5LaJW66B4eehmZHNrGuY2pGsb155Wk7v12JTWG2P7AnQi5NHFSaqahfih7R3bAjHK6V58MDgSGmZziN56LmRU9xe",
  "key19": "5rx4vcXnCQLURGFTVSv9zT7ZQgXEXyvzJ6EyP4wU4VySFpSNmZC97U3XZNyZi4UFM1LcHPdWMf47sLFrHo1eJ1et",
  "key20": "3LpH8y19ahL7EfR6fsBZEiMbnZLuGup6hqYvY7PVQAciqTSjeLcaVFydQk4uGHeF2ijvJQBPM62zDUdH6c2tJeQr",
  "key21": "kRknuEiTE4ERx78fuS3Btdv3kjJnKK2PvNDmAxobpji2yyvpR79fD6XMqayfYvBEDGJgCAPY93wPfwf5MYjk2Ez",
  "key22": "3YdUp6hP2wV1knKVjug5Vx9rUaSh3rYGN4rUyK3CdoitreG3NAanmbSKuHqHNa4GVeowPmam9nAimBNxW3MS2TfQ",
  "key23": "4BQKrxGx6M68RnM4anfV5WraTU7FQ4U7j8uNRQmNgfDnAJp1paq4DVH4qpYY4Mc8Pe8PUfomLaYuWmrMDpnSu6ak",
  "key24": "B4SjKtCAMBdWhWu2GoiSVMsKahEhyDQsGiDeBSYSfJZ2DAUfuYd7bUcFRmwmteMkuitxR5GWQMzphJAfQ6yAFyN",
  "key25": "FJRGgFEw7FeVDG8CMcRZC6DhvAVGqpAPpbokDt1wHyUQVMSvxqNdMChVQi1zyVGQmd3BBpgKEwf69zkfurGoahq",
  "key26": "3WHqTNVDs1H3AQtzif5P2M8TavionBYqtKFaFzxLwBdNQoKrX1gA9Y6ipXXrNFDAmr6wfuyRqrS82nCaG3rxrYd2",
  "key27": "53xNAGKfHnAcP8o8Hxex4eQEjQ1Gsr2LDVVqzcUFgeTMnaoKZU9MEKrcX3UhE9gf3TL1zfatsXi5LSVRBhqjFQtU",
  "key28": "4dNWZdeiGTvfM6zKwNR5Uxm9nWPUAwRk25hRKBnCHmo1nyyKquCzJm7hLTEmg4fbn8E8uBWHXTMZmNmrmLS1Pncg",
  "key29": "2wq24F8hxxTcUYkJ9jvkPAYJB9KUFCB2T2AYBCqc1X5i7pinTBW6KZAqzkSFCUP8cGwc53kCy7HmWZL8upxJg6j8",
  "key30": "2kj3oY8qop6SfQzGmYob83XE68h9BBiSbX22P4y9CAmZNagRsmh5HWwuXDSohkoUtJaWcaidjgrRDVVcJuqHv6MH",
  "key31": "4JjHb18yQYQHiJcJ94dhCCRXSguiC6SoUY7NaaRRguAHpx61ZT6LhBMW5jJ839hd3uVzGpZgDkjsxUm7nXiMSBy7",
  "key32": "5yMYHCTQ7UFgceYiu6DsA5N8MXdy6EmLRgkcPBUSFkaNvQ7EDrLQXJsgn3sRNmgysou3DcvVs9fCQK3buufuccF4"
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
