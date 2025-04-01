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
    "2178E6nASjDNNyMwjYD3zbTEG1eWnc4ezwTD9DFmFYK5Nm7T9TDTyeh2PegYkPBcTNrAz2jFagF7nT4g9U6YPcsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SfEFHnLsUBe976oD2TvSvj5rEBHTfq1dyMzwRPFaskWkF1aiTLcgbAUrrEutvkDKmppFzXpr1eHJ2fCUZnXRYJw",
  "key1": "3XjA1W4zjLUM1UAqmT9FkLVJXyS4RFvaMh2EaGUAQhVFny83u5tQw5HrtKURFrox79nxs6YEHHzrUzFNtn4TTEzX",
  "key2": "4TXkYzFFCF3WtjiHqEytSjeP9hNzAcmbkc8ZVfsVup4YvRW4KHR9fD1YtNFdW1LHL3ByQFtbDo85UGN38aNo34cq",
  "key3": "ycbaGRv2cGbKj6S2ipBHcJxA1tLUkYcpYj36dNZ7LU8FwFpZJkJHzt25z1ug1Lv6QAvubFQ5KWwHCUb4ky4tvw5",
  "key4": "3McBtXH9UfRH6VRwea5z6Q2h9n3vtCp8xJfzZDRg9YaqL8kCkgtnN6v2tyjTrfXZjVAeCXTvBHQ3EvLRzBPmQgSJ",
  "key5": "2VHPm24PJQraAEni4KDPtk8a6FGvrJ8xxiUZbH8w2nf6UFqTq67envUhpV7fqz6DVsg6Pp5dBEkKaYqhRUSEpMAZ",
  "key6": "5VdnkvYCi9J9KSvyM6eJyJ2GsrSKpVU2pNY6abxtHZAfnKP4im9HsXH8LhmReN8kCQSuDbEW4EpjG1BQzAr7QFri",
  "key7": "43J2zDgj81mcmhzjSbemLnLcDcABihH7tZyWUxwLiUTcmxP18MgBdfH29WvnU65Hi97KgTofS9xFff5v927Ke6rx",
  "key8": "2vFmsMXfPZvRKsFf3i9x6WzRe3zbAUSSaJtNK1qtqLXaPWwVUv6K4qtG8AAa9C5HmrEPHjAXgKjeCEFL9j5D7sp2",
  "key9": "2Lbc5RbVgoCc9oAbnUz4TWCXYR5tpbgPXWHyiBhUquegN8WBworEgFD4i7MtxCvR7VJC29GbKD3mpJNS6q5GEr4S",
  "key10": "3KZHyWQEVkvE6zEB1uibpwCcryK4r2b81Qi6WkoW2pB9UHWaiwuMVg45eC4wac7V6nMEiUKPx1p1Fd3UrnGgkPwB",
  "key11": "5JtGM4Mu2UoqMPDuXiuddVHU2rDuVEyt8qabRdaTpxQQhV1HYCtmHprK6PNhA3UGgqKg3fJNUYfBKbHxGMKhQ5As",
  "key12": "5bp2kxmx1TNzXt1254tGisbZCFGJXKEqejtAV6PR3ofkt4uEuunGKn7SqzATeovQCpwnxj9pbUok1cFNGHB3Kk7J",
  "key13": "5xt4VCEkJ9EWUB2W6z1h78jt7cB2CLuQ8oZfkK6LWDTnK7tgRfkRdMBt3pTQzzA2FcK3rH92VATjo9FrptZh8g42",
  "key14": "4wHdH5D7r7x1R3XxpgJwscHPeLTpP3uXN6a5B4EQwUxXfw4VwyQTes38r12sWGxVAvy1Z5hvheGtj83FhpJRAWv3",
  "key15": "4TC4sUhqoQrZZJVz6vhtAyCEwm7m3gekJkW8Ngsn3uLCWNazuygZ4dgtuRgm3rxLekoWv8xedjRm7977rXt7yfux",
  "key16": "3dT5ephCCiWdwmv9PYWEgvrZiLcr45fB4m4oP8XvMY95rqXc5whohRdXzJCjeUvEocMqh3Srk5KxeEtEq5vs9Jj",
  "key17": "5KLn3taBQajPbUr6pSgnYv2vKMwDWRxv7mJHo9r6kuDGR8sbhwL7dVTKVWQd6Vcj5zWafabFc4WBgwmygt9ZBbfJ",
  "key18": "3guizKjVVPLsLerJFN2hiMwgvMkHf1GqvTcW52ne6zAnrKAoQ8jWWvJ4LNAEsRCEDzSYT9N6jwLz1kiLBj8A4uZV",
  "key19": "2E5R2epY7ddbkFBq4fFU3oWxMDbVonWNVZukTkypsLZk4Y1rsdc954ovgCcjdLHL5FmVu6iAxRFkBKk4m5s96nEX",
  "key20": "5ttq7MWyDXPdah3MQDNtrcWdGanY4qxjbPHp5nhjWVcpwUHKtNJgz7q9DyVRQxRR7tC839M4MZCwobVMzKsKmAFM",
  "key21": "3csojnXc1mHWc8wE6D4VmTuSq3xBZJqWyU3jgyyPXPTu1scmzR9rXkoPuYBnNGimoujwp5SQxw7UsxJFHurFNAf9",
  "key22": "5JQqL2Q9ANyNojwpkyRuj6tAzZ7k4qpzHkZSneokD3a8vo3s4rcsW8wFSdPdpR1yRHsjVvocvgMAUxgdjmMTo8iN",
  "key23": "2eMJMPC8g2oGmCZXMpsnZqjWSwpjWN3cU2S9BL9fB5QpRcCbs6eeWcji1STadXsBDDHygdwV48fijntTfVxzUgbQ",
  "key24": "5CfAPqkyY3JMWzAFiyDAwscYmF1XfecwjyE9NxqGvV1RpDqceqoiScJu3ov7am9qSKZvmfdrjKL6KzFxCEEZN2Ts",
  "key25": "1dhxTfPMCwLexgpWMBS8bSCqUXwNLfrn9jvq12vB6Uy6aWtq8McNWSYaV6LocTuiLjyUZevbGTsG3NntJWc6c3o"
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
