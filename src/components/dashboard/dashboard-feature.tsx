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
    "464YezZCaWdEEtJv15fBzvFn5VZNjovDJvAxQvx88M6AQQjkTwwoWyT4vs5azPmvHCyeTpv6yX1DesBmdMyEVJ24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G3SuvGM4bMjcWAeEhad5jxjr78cafkJnGL5pvGXdTgM7KN2f5yeDKVAGpEcJNdQeSjid6akDoC7QkWY7iHgk3fz",
  "key1": "36yuna2Ynn3n9DmPdhe62mGTuwqWwqjpMD9xcthW3yngjTJKYaeDFMZtAuYuVtpuLHfAcYcqhB1TpdXoQAUhZcxD",
  "key2": "4gTioharwLNh1SCeE9Y1t2S4XhowHGBtuwUBijD95uxT8q2r3qdiKYuQNNQipJxLwVQo9fXBa7T9Q2yJzEeDfZhB",
  "key3": "ezXLpQ3wTwXDFZ9hmGM6GYCpyqfyfc15BLyGCtRJeiqJcecGHBQtPEnfnY3q99s3xK4D7vxUizUQkD6oVMHVAud",
  "key4": "4SySuxTHseVCyZ8Eaq5fNndy1JXw4VF7reHz9vQvdo6EgCN4hWLX8AWThmbXqaGzZxgbdvF5JTixGTPzA1yUysJW",
  "key5": "3TvCHMD5iybHKdyJKvxWftz4ofFtcy4qef95Ht5wn5zXBKRzQQaGaBy4ror4cAoJTiFRawcop55a2utZ8csFmH7A",
  "key6": "4bWMVVAWzicqvLupntGRtVbVBaSxGdHn87vT1wxePTegRqhniXmocqnyzzWpCgQr18WHycEwFvBZxkYeQezTABCn",
  "key7": "22echws3Uqaosb1Yx6ZYApWfuEif3pFooUbHfuCa8Ga6ntSVsLyxJzTxPsZMi7DC5WxFruW4y7RKFYFNoyxvLgPj",
  "key8": "2ykPUPfx7UvcAwhiuYcSeHv83pvtFtf9Roa31yESxDXzCHENs6CGxLqJxqBeutiZP2jmnbAZXrQxgDubdRSnGvxg",
  "key9": "55MraFCGFkcyg8G184JYPMMQkcDDByGbRRYqUdsUFfamVRCnni4TUQ95ufMD7d3kCafRUauaGg38NuWTLGyhrFj2",
  "key10": "5A5PigFccodCHEVRuUi3FJddQAEDGkohiRSXiLE8b7JSF4HkdjLygsKn87caBLAGUj6n7cchts1K4MkjT43p9QBT",
  "key11": "3jk95yHGvw4JENgyqyyEQtQwT2MXru87EBB4n4hCDc4VCMud9ANSb95Q2ozaCsHkMDSqiUcXgrX2NDpVNv4KeHsy",
  "key12": "3nbWKXkwBkpuiNfLTTcinMw27suHoPk89F7hVGAYStxRJrcxCQdfNBWyr8Rz6m1qAWKtxhQ2so18xN2gcJMEEV7M",
  "key13": "65yrHttsxfG2Kg45s4714WHbt3kJqA2hBUWJGTGopZayNjbgmcgTrCLLPXQ9i2ETrcTopFRvABEtbf9LgTTxLdtC",
  "key14": "45Hy8fSctfAL5frgkwX6WbQcgFZf4Kv4rDwqRPjdzuHAPfaququt3FAXshzGfope42uzD5SZN8KfycULbyHpmQHr",
  "key15": "5Q7daxSF2DnK4tvXyCydKvPmcaDi1xd56eq4z7AeicgKfq8CbVWkizYftEu543y5czWzniRNqvVbtmcWPBHu8Qrd",
  "key16": "4BTVNLiL8QW5F5kJJV3Z3cHCJNysrds2qqVAzU8VSMgC7bmAsueCEpMEs3fd3f1jfYFcNAWYoNEuVY4KgediJ1Xc",
  "key17": "64UTbvEnHUYmSqLjoBNwgNnhLApRLmUuD7fUUXbn4f7NjudLCYRyEamsuZT9puADVSF2JMoReVmVf2VasZub3FcD",
  "key18": "2RuZRZAnUg4C2dF3bYpJBGzBfD4x4nVG7ZMN9mCxfV13QEUZ6pSpcPeiKnXeRWQVDWNtBaWw76ej646YfvKiZQmX",
  "key19": "2HmTzyMVpeogoGzHiZf5aXyakdYcKjdPTFDZJrcjCfM22tx2BG9GWPyg71yg8sqD9yP5qJhbypCURsovyTUehEHk",
  "key20": "2ayyjhjwUXCqCfDbAzu3KeGcZTQoxfCpHGxXu9nDEjBnx1aXUURPqEQsbYtDbxgNy4tiN2FKJ1554Ze4v7755sWR",
  "key21": "2AxqBrKuCCHBnj7dPMp1bHDHDHLCZQbXTzJnWciSXmsGy7es6ZWA8Xq6hMN5TcTQUCYP8pKtRyDnrcpuRtVTBoL6",
  "key22": "2pm8yUPfwvmteSF6vhpwkLWcLSFpQ9Lj9gGvNv5ysq5pD1rx5rdWse9uPooh94S9juciTtC1EaeaE7jLWBmAR52Y",
  "key23": "4jrPPEaPuCbk8DEMKFe14e3oNqNpryW4b6H1ATDc5hgeJf7ReqwPygBDj9LpYtEhNx6fjuZ43Zz73mnufiM4Mtb5",
  "key24": "552Xc7BFxXmbnquL5dB3JxBn18J7M9JCpmkq8M1zBse39xWRgkVxc37vtFC5MrMc43WmknfJN8H36BFTDfW4Rfuz",
  "key25": "5Df418xzZ5wrS3w8Q14yboe8UVaJGdWrP6Ng3VpC7UZz3QsFtoxkmLMVpPgtTQajrzeNLhVkva2orMxBJ6E43iVz",
  "key26": "3RcEmF1EDi63QoWjsiyMXtM1Zo1NnC2KJCLe9ERmZQLkPaNRLpJpwrx8HNy9SoM6foRV7bsYFPcZgpkD2kPjDWYN",
  "key27": "49bPT1voCEpkmVL6EEPRr5Xx9U8hRFeFjDetxtKSZQi8qqiUUgFB718kS9gei1maLuKevrXYsCf8wVWK3nBnMFDZ",
  "key28": "3A7BrxY76aPuPCWk1xAv5QcsgTtLujct3XmCNFaPqSvg1dmzPeoXxkbEtkLDTUVbnsBSDHxKGZvELrDTMCYZg785",
  "key29": "3VVbKwCjrdDqoRYcHv4BBnpC6iyn3b4qimrqAdWopjJZQscASypYtEifUgaS8Y5jZMEAnEoZBznfunifearmKzSi",
  "key30": "vvVts5n2qsYqJG9kEt62W5pJ3LqkAVRpCZASJi2MxXBCfv4HWhuLeKyu4gkDXefEk9kWUXJacovszgeoe6SdVNP",
  "key31": "54vja1U1TU2eBcccvGpbTfFcrzj2LHVwpbSHMzLvDnYi6ueYXDqTe4Qx1Z1nQaxcshVcTbQ8MyeRrqEK4ono8hA5",
  "key32": "2wzY6H1Pr3FK3Pg4N2fQkffCfciR96oboVk91C32SFDtQk9erf8i5d574Qdeo56uy5ggsXMAvPuYsUyj1X2ijLJ7",
  "key33": "31dHeqPJk2mSoiPT6gVYRS97zwRZdz9MUT9MYkfzSfQw7NXhKrhobKD8TMZYjTD9vdyhcxwr4PGA3X17nD8LZxZu",
  "key34": "2SHnba16Dz8Y7gYcC7h5P8mkhKcDTi4TBPvderuGZznW2uhC6fSwa1ckDgNBuM6DgTPcGMmdtcA9Xp6Wg5jwvCu5",
  "key35": "4iMAXFZGPmQK1m5XdAoJKbrzjRhNYbyMStZ1KnjDP3Yurp4GRXKHHbwdtt9HRiYNY7iV4SH9nExrmXbWDxZHZNcH",
  "key36": "5dNQxqjPeEEG59yqCweNug4mtkbjT6Ais6j754tkU59neHCs5Eo67fDGgkz7Vmd1hHGHyABrECLhANgvuvh2oWmL",
  "key37": "izQCh8xTBqcL9wcrTem4VgvHQZXhg3QSPhWWNtG4ZtUgbdpG65P5qU8a8dR9ydarSLs1NDT3bpuU9KnM8CbPcW8",
  "key38": "57M1exon7Bbr3AWS3473ELvGC5abH3e6hTj8jrBK5TsY1NEPk2xNcre7u1TFXZgioZgN1ukPYFrxYnkaEmReDVTP",
  "key39": "eNhDfayD8K6V8w86wQ5xat87AutvLCLqB9LGFQ2PidZg7K6PTJ9Cck3oN8ZqScvqHbXKf1Lou5RNa3ga32gHWSa",
  "key40": "5DYxdjGYtTz2pJmGyHnNYcMZ2Yj6BsqxovYUv4j5iNae9sw8DD7RznpLevDeaRrTzLjNa2PrXSySZAcxaZZgorg",
  "key41": "247aSQPwhsdZ49e9vWyRDAwY1Yjb397EMaypwHnEUYfX9wRkkvAZ2uJwUTYeXNKANwQBcYDEHVu5oHdnP4bcuxho",
  "key42": "3K1YJnrBbjiC9cPCt2886C7jyV5DL9mAczmsZhSZUNvHTG8LGQytZiQaz6iASe4DWuSK8EB6H2STUtDXQtWFRFjV"
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
