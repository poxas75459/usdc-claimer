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
    "UagybHGmdAsgmBHePasZtL2Gbt4HpGr3KGBibAWnTaFPyfsFuPexDg9R4hKFBBvJ54P9BRTJMAYJQkK9qhbFSby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xvCxXfwW2tSKbVtqHSxL7DiQFfxQg2aYw46RkG7CDWWBFBpBzemTQ1qhJajSrdPXcQjLVSTHHER2YQDBJAigHN4",
  "key1": "4YzzMeNEyWPahowjaC4d8HH98meKmYBmuhtdmHo1FVCVkA3jPNGCkL4BJpK5huRBFw8HS8Ffq1kTpuN8gzUiAp6y",
  "key2": "2LZFtyyWoUgBb8tzxmdbrfXQESTzPZfPqVTMhGudRaH9XJaAoWuuhTk6eEG7ZZYyGF3WeFhA6tXeiCMmXH92ePAe",
  "key3": "2hEeu3cWkhxJp2q7gBQXNJfDTnVBFSDRMsU7C4ddKZmZHst4YaAmfham2onbUCmGiTyhoQGuVeNxRT6vGYgL7fYn",
  "key4": "3t1P7rPGL2Ya19iXpMgFaoNjqMDXYhAc3QfcH9vnEtHk5n3KBt8oSQq6ftTbuS2eQtdUNHP4oJ6cTmSemRLYrqYE",
  "key5": "2tPMXjUEi68HtMM6ExCV8vfjqfabrmQPAiwHak73dB5UdFRVbxnWecPFYH7RtAWZ6saHFGnKSEnK9nKKQ6d2Ks8F",
  "key6": "5WD23mEXsBxtaSedJQLT4RTxM8k9YTefZmGYRb9SQc5cCtxV315pEHRPrpjdZqPSEfPePDQoiWnUnhLGxb1qgSv2",
  "key7": "X5ThU1kZ72HXH7567A2XppaAj2dV2RWf62VXbdP3Lv6hwVL7nfTgESRtDRR4LC7xQWxxS43WpwqUhZ8Za9LkM23",
  "key8": "5Af529PrUQBpgPevqf6RR3Xoum2ccys8UKAgiCwNiNZCWCXPYBpNsZLpxTAZ9CACwwbQF98pBDu8RXEDUPoqjhvK",
  "key9": "5cF79FkzQv1MnmpEvf363gM3CU34SE1RunyDfDfYturJeqaGQswCoD81rqTVXugFUdwzUNWPV4gVWkjFoCM9LZLk",
  "key10": "eXJXR38yyodQnqq5EuZ3m4gvsJg2Kvu6UXuVKd7kKi1vfW5wusZDrU93MKQmPkAhXWxjcJsTJ3apvGgVxcnfu4n",
  "key11": "5AxmixDJdv8UHdnN5PK3uuABWEJF1ajAE1Xrg6KVPTv9yTn2mbY38FZS1UGKicZwS4dm3nXtZXbEKftvBD2bNAVv",
  "key12": "53FoXkUNJvsk6PWybptwEL4vurRHrKkxhvwofRKjRDPgFDs7djd29BXXLwGXEL3x6ALmrZGyfvTSFqzMgrUjn2X5",
  "key13": "5CvSVDXzPvE6mmCe1FAnJpLsDkVYfDBDvFEEZ3yQc2raVFo5UXzPU2jumSEBDdddzDLWTXuyAYd2n9Nba7Twh4te",
  "key14": "2L6GSsniPtSp1ZC4jKJP864pMZ9M24TMc1ZXztps2cc5CTPdaoFsjGuUsB2uPwz7jYKdbCFTUKdyKLGan9TLqx4y",
  "key15": "426PAVPt5EUbNubQA63qWbLMv7JkzJFdmMoWhTy3vCYXFvLmjdb2buNWUxwaLofSYmnuiyhehHKJNUTf7sDxguhV",
  "key16": "5a4D28jdv4PBSsw8AVFJwrEKLC7rgUhM9JajeViNR6zJjzVpxfinsJRHG3exJ8fnYBk3HMB3XVAzvEBCLgDheLsy",
  "key17": "2xxSSntrs6n9E7gZVVCxWaAgsgczZrUJ1q8YnGKHXBJCDM1oG2dZSB4yCYSZVjCKp1HJGULtzokEpSu7na5wiAUY",
  "key18": "fnMZvuCYBEV1uk5eGNUBV5vqAGFvKxCDrp3zo4Z7zTpeb2CYsYVQYCqkSPMK7aSawimrv5TN3N1NcfwDvd4b4Wm",
  "key19": "36Ls9cwvYBnKWGP1jgtex4Y8NDtQzyHpyx1tPbHih8UaVzgRPy4K4dHAdqJkJ8E1DjycEjMTZh44DqWx5uion7RU",
  "key20": "4EEADTBE96aym3Lt8xNSbguYfEjsjKLuPFkAb6mewLGEEwic2f28KM5qjNqkhqh3bDb33SYbsHdyEXns9juM74g",
  "key21": "3u1oQNQxNU9QWkZUb6gNR2YvZZrwVoV9uZDuTQxRv2TAFcWEytD3NNRy5dfCND8TXmZfMGQxj4Tg9BQBhPtfaon9",
  "key22": "23WLMbYdMZHLpzcn8ZyNMwGzN77VZ84rM3B72f7ki9Subneeag2NRskBvB4TyW8r5jxHBfxNRR5iWpfjM4kAWy6r",
  "key23": "2sjRHFsVYYbp6Z73ek2aLdJQh5usMRPDPpXYJoq4WvDYT4ybPiL18jZcg2tvmspYrpYMn41MnG4rtcS5XF4XJFY7",
  "key24": "2fcATibD481W4AZ6DwsSD9nyVeRxkGPvr7kdyu1psZAASFR3wFyY5p9wsVLVvPa65AHAZXqorSSfLuqEv7mZhDqy",
  "key25": "KNg3wM8SdJeaqKMkDomTx7WkpRTfY1gX9PC6LgDyn6TTup9eiqdA7sKkKZcsLCVgT9V66SMA49KurG4hQeXLHPJ",
  "key26": "2RekySpiM7Hm7krDc5Tfy8dbYFBkNsy7e7RCkHgVsVLpMY2ujaYNBKkkZsNxKzojNdMapvc4wT9pvghqveNmQN6w",
  "key27": "3wtgkBKypwYtc3saKH2LqoNwWN9fFs4AxnnSv7WgeNZnuAXHQ2MZVsERR2a3hnhfrFVCh56dPULS8iuXTRSADnju",
  "key28": "hJ1Szb4FsfKe957jXb5ode7vcdmKP5ST32WJGgzia9rGQUtnS3mKcTTNQTJUdCDJ2gA4Y33XxfeEGozRiebqtTR",
  "key29": "3iRTgvUz9rNk6AobhRVqroWs7vKNxXKtQt88uFM53yhL6hgQEZgCuSeYPZASVAihmRNB7kS6kAozGAkBSDxrJdVv",
  "key30": "2WNECb97Asd6Nyc6cgMuRcFkCZyhPMF1fsRbQMtegx4WkQzfZhVwmXiQsqM7oYPLAKWcR7EtCi4L4Z3Ycxha9tLH",
  "key31": "29iBJGSLaWHyB6owJKFrwZo8mgnshgZWb77pNFyGJuoD1YSDyV9zh7bunJAbTKqKEcD1EPihkB3Q5LJyHzBU7ewm",
  "key32": "3vy5ksmwiJNCMiyAqP3AMqVysGVtLSq9rxu3mJtKy5txaf4BAdyYkN1doqrxwjBwNnT3pgWTmqjXWQhieDPpNY44",
  "key33": "5giR4otFYP8uzKDre18Y9UbLibiZBVuk2wh2dV7MG1aabbAS2TpQn5bwPyiWCHneBwj2CaZCeB2hvDRD2TU7M4VY",
  "key34": "5bYN7JnaWnJ9FeZp8MUbpJKun8WSktesPDk2Ty7YRf1MEJqUDXRKVzxAsVc1cCwUp4FrprSUJNC436UGyFj5XDPK",
  "key35": "2U2nfQjLopXz9FbJ6smBbYdMQVSoqb2p2n26X8izjccNK1MVi6D52J4iwRddz5K4jGM5DH49iijc9tiXWAcdoiGu",
  "key36": "4EU2TxgpohGJFxbYU4ii8PNYADfU1SmHz5KgKCQFr5oRZqsLqtuB2C3S661m1o6f5PpUkL8DaTztDd8VANYMihCz",
  "key37": "3L3fkwtsLxAQM9yQZFdz27ExcNKccUtCpPJ9ER7of1wstkjjepfSJVp7hQEfNXQ9gFzHLtzGYSFkqvNG2aw8er1k",
  "key38": "m86sddfMmb8hxsM1L3kWSf9bPr8RPnvK5JbVRvvPr5vaF9NVwfcpTk911SKspxHxqLzmbgySaCkiJJe6mkPNMhA",
  "key39": "3M2arzUErm8cUHFWkJZh3DfS7ZJHF37RofvQ7vCz5kGyuu1fHa4uwLJQgUFkaLE1u2VxdmAaca9SDW5EmkMWuCQE",
  "key40": "5CfY6SXSgAiUbkRCSiotwgTymMbwbpiugeSQ5DLfddrUXUecdEsVjP4YTz9UEynWMirE2GnCmvKeZBAqCY9vGNQJ",
  "key41": "5ctABpf2Z4E8sRPvDBQnMPjcdFh6zR9fr3TQk52mUPZuvMaGS2z9SEuv4hTaP91cSJKwNz3rKxyWHr5tHYS8rNLb",
  "key42": "49UXD4WACuYbb48DEX8BvpnBY6i2ZxJV8jEDfKGwdEwemXRrEH3W9zY699VufQMys1NT7m1bWNrgyAaExNVnk4bg"
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
