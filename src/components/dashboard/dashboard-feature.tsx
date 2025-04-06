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
    "2e82U8FQkZaFD6QqVP2TnU9qrfh5YNrM47o6wR6A3pKJngLnJ2RYSmMYg5M2DVbiSYRFRxjGQmudtaeVcRSuWCy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SmvQ76ao1TByZnwKru6CqpK8NfKmjY8dFNJ4TZQyBDVwm9KStrqTJS6VX22XhhN3tHUMU6S3t6VxmK1BCruKmGW",
  "key1": "3KmAxcGV4qpLS9YhovTJU2dhNpUoQPiNVVvweVD1xKjtCGqChBdFWSJyGqqyg6HNoixt363WQDp5cJFRP2Y2DhdK",
  "key2": "5ybot77WEkonG9opLaL1bjPDsGbdWnJBr2SZAbdphb1bVuduyAMGVEioTi88nNpNAc5qmN5c5CFFtKSMu3wymcB1",
  "key3": "2kYz7pdR11N8CCsaHWPbzjagESifqfTZ3sasxr8xW1tcnUe6KT7ocGSrxBNnkfqSn2CnBhYi3q7g6e5mm9AVTu3L",
  "key4": "4RHrmsXkhiPG6631kZ8TVej6CjzTrZbup3JAW9NqCrYmzGjYBFsXZf7cdGM5HfJY5dgD5ucZwGdi9czUHCUdJkKx",
  "key5": "3SVeHuEHwHBARzj17gnt54VjqDV6YV7NmgkSXR2aqBkvvKpLnmveRXpywRLpz7mZTyHbP4AKZVazQRT7ozUpTZn1",
  "key6": "4YumeDi83K95CneEVzdL4PohyXbsdNq4DsUhjG47G5KG8qqKZSGw1jwBRPVa4o8FT7DWQuTNr9ykAgxs78prjwqC",
  "key7": "2pnx1VmZhGY2DP3aNbXJMXhKfGgB8M9UE9RyA5zToUXwCXMDwhuo2NGU4SVSwYWSBUa98SAWdPnAuNNvKkH5YdyA",
  "key8": "45ffSAJ2ffNakZ8WZygaY73RciCXWL4kmEK1AnihHpXwfU3GjmNKdejpCS5rJo6b8yV6YKhRo7jg55ovAUAZkqE6",
  "key9": "4j5CG9ZjDbmSAMfbFfn35WTtvnq15RbB5wVBauRJWQ1b1bqiUJZy5Ge5VdP6A5RumowbLKX6Cpw7BBM37t7yGrkk",
  "key10": "2atVmbcTrdLUoiAfkNjRJPWd66BWhJc5YCXeKgSyQV95d6MktHMEt3YN5n8FumvNzX1W8Yp9HDXn45zVV9xcezJk",
  "key11": "5wcgxwftkoptfbZzhVRGMv8riyjGyApfX5jFLre5x4f4oZ468wAmdzjj2rhSt5KKPonJJPhUAxtgEYgswmy5h5GZ",
  "key12": "3E4oLb3d1mnW6w7hSywtTt2pQXVJsuTpiGUQbdFHLjBvRtP8uZBPvoBXY77vX6K344Jf3p7yTsdH2NojT5FEgf3K",
  "key13": "2s612mLNw6FsgFBW8Yy8UcXsAfeWgeBioEyTqytM6CPWF1M2NPv98wVEsxknkd8yCSfhaVz1PsgNFf2CG5nh89kq",
  "key14": "3E1kHvcFgNgsPCohWxh481rfEj1P4gbKHhBGm6kN4PLHWpbzuiRkA8eHTzt2LXt5Bdq9viZzyXPMuj85scrujZfF",
  "key15": "4iukNxApmpfaRXd2fW7Np3J4Um8XeD9GMUuxnhoJSrNwDZXBq1zzDDGgsJWQ3UBnfkzYSYav9ePMgrLU1G2wvdbQ",
  "key16": "YcxoJXkHngm4RMPPuuPEk1dFEewfRJiPWrNQMLvNZjg3fCUuF59cMRiw9KsKM7e6Rxnmkdw3yvbGiU4Hm84XBYn",
  "key17": "6r6N8znGcnAi81HeppisW3T8NRtDReHCkVWR3pmdDQsBKCySQkg3qJ9QxRTru2qxDUnYJHLtrHBWLojAsC6Tg8Y",
  "key18": "5jSSEdTffo6MsSPC2y3wwYKmj1K9sbj3nqjDx7qpvy6mxdvJAwu4i2RWTc4wMCFRtfcrSjF3uZz7vv5oxqJu62dE",
  "key19": "66eXSLTkbBZHcxEb77c6x7M6bJ2h6P1ES1sCEzowgMF6kw4tTA8fNZchegbrMgv1Qhx7K6nZaADpEddABdvhxNSy",
  "key20": "4tmUZB3pqLZUR4RfhJ1pZcpBVpVqnoPxj8JrKCw2ksa7jcGCfnT8NRjg7wMHgB4DEy2CnR8nksibqnNS7LHm4juh",
  "key21": "2PGGWHst4g22UfvcJcZFx9PzRSd4vNqe2PYojeDyLGQQdgVztEtoT7QqqWP78Lyn9jUEwuAKpAnU5L7VE8HU61BZ",
  "key22": "4z4a9KeAnvMTuZ2qdfwNzneP9m77LPw5yF6h1sgGhD12NnH6jAeYqPhDwoVCSEFVpgzce6VVJofrKeL2RSarq31g",
  "key23": "5jxr6DZmzgx6V2xLcCxxi1SkJbLuYy2TMVwBJZMNN2MxCqQz7E1SmEniDQ73rogN1LEtJy2pZb268VtoHwoHCDTN",
  "key24": "5vnu4G7CQcNxyM6qcWHK6f7hDNVh3S94W5vGaCaaPpU9muzAQZdihdMwshcS7oRNwjDBXcjG7n5pQK6TjMv2Uh7Z",
  "key25": "ZeUYF9nWKV6BY1rVgCo8xDS2xhfpfZuJqVwsLYFNYpQGTfL3LjByVAVVQtvN9gZms6KhQRC2HJ1W5yDLAyJfme8",
  "key26": "3eAYpAiALWoevzt4fzYSQzSgo5QqY5dgxfG627g1tLZWJpkS8ANcYperybky25tGpQS29QPNZA5GZLeERmBSUbYr",
  "key27": "3yemumySpRBzngLEndD47FDoo7cPkjMbCSSKrTNQmgvgKUon9kYV99T4EQ1NXqMgPdDqzcB4Up1McdQUbpqqNhy9",
  "key28": "akEDtFgNcpHt6wzffTgw45DRGkMEcpa3ZP9h33tkxPVkH4QPzPrfcXBsKCBp7V2tR4U3yZ8EgQb21uJ5SD6m7A1",
  "key29": "46dkF2SAcQsxcTnEq9TJwvfGok7GBvK2ur53bKJdXAk9Wvz3BQoe3vjaW5xknG83yoMW1BWzusVy1JnKwxy1EPF5",
  "key30": "2b7Du8kGK1Ji2HuAAP7ytngqyFVLXcawAnNXgSdchJMV7hnsMEQGNoFY8BidGPfY9KvSs8dTJj95wVVQs47r9QTC",
  "key31": "4jVbQHBxdbqXnU5ASRVodGrtwcujKp3ofSfEFn1cadSa6qUtJnH9r9UB4mHpPyZ3fLb2BCtsfmMNn54wgSJZt9ZD",
  "key32": "3sGxMokymF8p867LALjRTeZUMww2C7QnDnLrCHGHJyfERa5YL2Aa9CjFGxdEFoQNqUtoReZuKn95EPmoubP7yPH6",
  "key33": "2joqC1fMws8nDhWxebf2JrvyGTiciR4DR9j2bHde37ourBp2p367XrHqBT6wXDY2HuXuYizacenNFGqMa3xkJgtj",
  "key34": "4fddmtMuKAYtHcgQP2BASsjZnyqbqkLpJRadntXV2wJ1KnXepHAUV4i59FW8UWTYKKHUmYGzY3a2PM9kGURSihaS"
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
