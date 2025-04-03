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
    "5MjWuCvKRKs3khCDqydoVJZ69Z4qY2782UpasND8PpDX9U3Fp65JBHfUFQqAJFikibtPRrHyUvkjD6f8PFEmYGpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57vSnU5FaeMDeGGTrFxyttaW2bqwZ31xX6fcW6bDPCmzXynwz5GjUoJyJPhzeqpmaMgKzaa6yLydwFXZMrRXJYkp",
  "key1": "4s1rvxx4aSDVWYHwVvhzo9nYZeZt4LEfd9fPTBKkzWqTsDohSJ9bBX3Zfe2QTNKuDqwRyZfRRsvJEhc9HKRJ5gop",
  "key2": "BWQAKPuYbrj4V9oBmCnCFhD4vL2yq9B1aMSLJNVvfPG3FaaepUArmB5xL3N37JDPkXGwxH6eMaYWZzisj66FCRL",
  "key3": "3Auw6d3qambHAQ2q87db8BivY2MuWcKewvNtpzuhaZcvFex81yoM2fBEUucizn575VvuuTe2W4zRPoNLkJdumDkC",
  "key4": "5Y7DCD93hwXVPRSQRF1JrsEyM1YP6KfwYhKDrRa973FTSbyVegX9XPGHrXUDTq2an7yHb3fe4RQERvBVFKXu8Szm",
  "key5": "sxUEuRsF9uszj9CYXZL4KxVT254rviKkCmU5zRD3RrY6KbRynkQ1imWKwqM2uJF486b9nz3A9eFp4HsE6hSTDCr",
  "key6": "jS1PYkX5RiCAQm64Bt32512DxuNnLyVsF3JxmzChoRj1ivX4bF5TLvV3mhdt5TBRws6n5625GtY6RCXF3tEZvsZ",
  "key7": "2yakGipiz1vv8uoaA875vVsppr5wPK8CMz5tMX5ot4i8omZvwB4KdpXbVudkRRLXpTo7zXygbcy7fmjfk4hDzV68",
  "key8": "2RbrccPg9HwFjrbWADXeKX4rnNXUCWHvJFP48RJHoVpPYuVMa5JFNBLd9aFDLcCE2TiioW4LA7h3saM5FcuDvuWY",
  "key9": "258rXzePKbTUHLVKT2rKg4VJVKSoprprYYvudcje5yU8t8Q1m5KkcaLzgbwspRxpXz4w6wC2pfRdjQujYy93duSw",
  "key10": "Yur5Y8KzTeTJ1X3fVhvkJhVUqyWNPgooMhRshiQPezDiNjty68TAJXMgRNw49CFu2wUYcTQRGiToDNtR3RrqNKf",
  "key11": "2DB2SNu4UWbbFNWg4bd9RWnPenY54xRSK425AehgdHYZZP2WAFZ4WvwzaodrbvUNymcBD2XaTKtmSbmHQtm2ye5j",
  "key12": "56PJCz2tzUCnCvsmNEecdJgRhB6Fwfgqwo3joodAiF3bePp2EtdggBi9npDL4QJoTttC4bYxD1fLPFAYWFVccFGM",
  "key13": "FYb4VnmLdKWu6FfCTGN2zjNQCdjPB9fzVPXgLbSXLT9qg39pBb7W8wJDewc8XCbZM7JP5v11TSfeMAMX5VqAqKw",
  "key14": "2ZCNNPqQTKNpgw1SCdfT8BDaPVZve6pkCoodjxpBAbbEfHzZn14wN7D83WvKP9ZqWkogLAxZHTa555VnXHJJNdAW",
  "key15": "3PQuiQ6siiWZhYDm8ecdS9EPLeE9HLYWf2AesRus94h4eDLZLhQo1pDKCakyUijpz1dCNTaSybg3BYL8xmDo1kBC",
  "key16": "4PjEUXXXY4VpaNMnQCBdP5V4kTPXqPxejT1z96QYevkJKR8HTHhME1q6P9FXZzxcc267vwwKdD8RN2TLnL5og1Ru",
  "key17": "5jSSuvxqSMLC7Qecu6Z9bFsmstTTcRY3QZfLzYCHGCQSXjP4N8iZF6mwvN2HDgoxVp2hmBStMEgY5nnojnAyGbzu",
  "key18": "xtysfFop9ayNvfSfu9H3h9MKej3Hi1xFdNFhXNq7BQBtvXCWY6dTS85ZxAWQtYZNwFXeDViNFV8AMYLo7nEhCTV",
  "key19": "2AUYuoGBKqLixPY16vHUfjVsCUmWvQUsZ3NzcYHf2YPjkZkn3kmdp3kCakhA1vzJVfs87ryWHtWkBKXM5Gvm5U4s",
  "key20": "4GTqVgFR4nrdepzX276HScY4xXLponYr1jgBpR6iN97emHiC3Jqf49ueWoGeyLKPydNZFmVcU9TJvzS993wsdqCc",
  "key21": "5DJjjjJMZ9CyPVTro94FPTuSG1nzSG7KZLs2dkJnwUnWN8QAzfJLoDz4XyNndB4BAP89zkzF3PQLiRzXm2z1wXFE",
  "key22": "3cg8ovL2BYYTcsbL9TvXgs9LVmc51FygfYMWLeexJ8NUrywBYVvH4vFHTvbukMZPNQB9eNwwpomra3RiUZKUvceu",
  "key23": "ycPi2Eo8XyADb4SifUKiX1ayd2uMia2A24Uniw5atmNRnFVz2Wa3HMp6wpkK4hpPf2nsNT93DfmLqo37M9XCc7y",
  "key24": "4TLQ9h7tQtsboM2TmpWH3eFd8iZCiea3UW4DKG3EQm6jrkUKKYgfH8yommoR4JwF1Mmjc4k3LeNvrSgazSEDnN1x",
  "key25": "2MbPhiGPkUwbE6apS5f81ppdx2LKoaAwUFT9p4pfQKe6BpqXro6R85xfTeS8Rv1ATifLWN1b5ib4oKGqroiw7i4F",
  "key26": "4Mhn8TdbZMiJNgWkyH6CBZFxRf4WpanrSj6iUb9bbQSmRSBd1mGYkZLq1NF8BLXBt75iCJTZh7R1tvLP4DsLQZoP",
  "key27": "BXjUrNprXJT3UV98HeZdQh118pYuSDWpgNwwEAp9ZH9GeYfPzvapQigwE1D9GRfFyMWSe4PpVu5DrXG6tyWqX6s",
  "key28": "2AYPWW7TSAamQxoiS5gdich4qscRudNMikM2iNJfW6CUeutk46awEPXeMrkB99NJdC9jbVvtMH4kPSHBJJSkVdj4",
  "key29": "3iTqM2yMRYp49eSmLjf9vxd88yzMaEc7w57CP4fZZLgwwdrve4nozNWT84TPNHexjBn8ow1byQ27qiLR4oVsij4S",
  "key30": "4yLW6JTxQny4aFi8uWf4rdQB7whWaKQLbHrd5nqBFDGHmap3MxRgobkrSimbLVGZTCxxV3JxshcKqKBxVw2Vkkko",
  "key31": "46az537HLShBKeRZyyhqwRMfD3wqnr5KCj8RgFd16263a7iR9omHEwzwhUnXqttqcphnk2vbqqkMJ4bWfSMHr2y3",
  "key32": "4Rf6cHEh1AkqTtw9Dyw8hdGipVxLHFqPmK1sUgsTZPEyWMqpftc8eMeR7YQmiJbFtc1h1FAHhHPRD9tj7TzsiA7D",
  "key33": "5gcpSf2EmbMcBaroxpd5Ys4QBy5MN1KKT4cqMhDx3wt7TuvekKp9jn1hDH4P3haoCn5TryCYSFzgfZ27YMP4Pmv5",
  "key34": "32GRdt2tZv17VDMTqMwimJVJh4Nesg3cAUrbXgW3RbttuaFDRA75weMBQ9KJKQTPBUxCafaDhwkR4N816m68FUzB",
  "key35": "3piip2b2UoD7ERTcLDMxQsiXX9Ujk2RMEgAaTggvHpN2xLBzYZYhFXbs9m5bUxaCV7o2tgvMxHbxvmaZNsn1eiAS",
  "key36": "2LNRuGKKCntSjb3axfefSbxW1B7MyRyZGQkq6YnRCMrUrRsLNJo21EeZweY6RkL9Ln3qd6RPk9hgWykSuWfpZXF5",
  "key37": "5jzvGQAebczpSsk4MNejqA93Hy85arpTgKmpRQ84ufxbfKtf9ojvV1MXyt45a3Qyfp86vhLzscSBZfWFeSjp9v37",
  "key38": "4gG4niyE2sH1vm155kvMYY4kemjyyPqADaFt6Km5548hzFcZ7aqCAoPBC4gjupwycLCzXr1ubDJ7WHLTE8Zd9XZ1",
  "key39": "37UCqaKRFu2rrgEQf1yKgUmRVrqTDQYhqfTLhJbfKwnCKi6uGyPSYe1ktWvt1raxEp7LVJvfKpXTya1PTKK25fqc",
  "key40": "4fCJR6Ewag7nymXwULev8cUPN9qc5Jr5oXwWBLHSeNoAvZBF98W1iitQWkZNrg6343iZ3nPRVDRq8bGGSkGdb19L"
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
