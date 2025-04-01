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
    "4aEWA8QBgfLktY5crPLTQGt4iodaVTzzvQwdiwX8KGhu9gzm2gXNet5WwTK44ET6v2LEkQsruYF2hBqxWA27Nqwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AMt4spY2kfeQK6BcFnrkdEfXivTTZmGFBF6QDLHZpreYfjV3GR8o2AJoVDvpDeg87bvRthAErCJqrEQR5WHTk1d",
  "key1": "wDdTbpdn34JfM3oCLBNS24dgW4AY2PqQJmG2jtsJdkB563yUsznWxcmjjDmFNgj8qM7rrps2TujV2AF1HULgi6N",
  "key2": "4yACiotSsGeN5WdixHgqaDbsMJiEZK7rW894VQYiBDTkQadLACfk4FcgDvCnkAWMjprWxXJrTfwgonTHZ9DV2JDP",
  "key3": "44bk6ea5WTiVcqNeX6bnZRBd3kqNdxYAGfqNMsze9nmxB5nMZ9EVRjZQktJ2rK1PpLkNNGv68isCBqqvHykDXHLh",
  "key4": "5EDcikxCTDvmXbn3wVoAT53K8KWFZviDdCZdM5mdWvGgsPaYUVgb79y2raXVPCCJzhQ1DGy2B6NFNcQPXDwKhHd3",
  "key5": "4RxqhhHoMwQYwd5cUUzqt6PdNMRnaS4jMiZ9zYxXtyFpxvW72Lb56sW54vySFU1tvVLJQnezataKMJcBpCXKTeFe",
  "key6": "2BRzuiDFQVMTSixdAqXBxcv4W7iDSiA7PQrBMrkEo2kjzWhcapyvVq3iWMeLJEDH2CxT9ZQKgJzGHEdMELvWDwVu",
  "key7": "64fFQefTiJUA1DFiQV3zEe6vdKJ1auAxWbj2a6imuafHFpw9H11YZCVRq3ee9woVCG48NZ5ruQvutvMc6g48kjHK",
  "key8": "ZHptca5ojpzfU1hmzTghLLEr91kU6MHE88MR2zwyD4hmikttPucQ88qrCvnrumPsUsXLJdZdTtGX52X1XQ7Y29r",
  "key9": "rmd3aES1gTMekoZKsn682qsQhzJAPhRAwkeps1Bpv1oFtJ2NQqAYdvUS3PB3D3cetuXNFgwpwgskTCK4vZvxXfU",
  "key10": "5qtFxcAw1y5BkXMTE69WprEuPtBSa8KN8NZ3HT4EMRH8Dqxgas9VSkR77JtYdVNuQhLYSQRDopSVJmEv6fwKSo5g",
  "key11": "66NeUMFaC73QoHneWu3jxxfCuYtAJNmwxP7Fa5WoWy7ocSRucDuEABN1eR4QFoTq72tND5X1Sw4VCeGF4QnbeDjW",
  "key12": "3z1bRepGnNrSSLp9Y8mXgo6MF5JPt7gcrB9XVpqWbM1hvNV3Zov1wsXbWmLi27DcSGp6K4ujiqZn3UDQzqQPgDuv",
  "key13": "3mLnYtMDp8dbtxmxiVJTANnHmKAd9yNpE5bMzrg8oSBqAzRQ2xRGRde9FekaQ9aYDwn7e9NYFETa1w5bJYiHJxbn",
  "key14": "62UUNNSjBoyDuZNpR8VcmMTyxtQr5PkyHqPvC9vVVqYgjEBoxuaSmiHedwgfNDFydsgvjuBA9ydD9ExuusFUqsqU",
  "key15": "DdpPvtJnLmdUQXCCpKnjtshz4bCGoe9CByRGcKRgHR4J7MfJjGcYYKZFVFg4anwswRg5DSUP4AzbXYVf8TvnvuA",
  "key16": "Rx3U7SXSKAPQWnvY3b7wngwp6YWN9jbhfuA3aM4gSX4wsitLxDcn46DXZAMvLW83oR7RQXfwW18aTYKt3shTcBP",
  "key17": "2hRj1kcoLyAB6a1aVTRrNvqxFp7s6QHqE26eQH9riCgj1gQGk3V5hRDSvGruKAU8XcGHFzdi5sgs8LzqRbyNYrYh",
  "key18": "5T1FrRJoebNaofoMmvew1rSTo4StKqZUYv2Jk5UtNHmTfr97VTRfkqPwpK2z9ucm2rt1M73eRhRFixC3UwZzGu5X",
  "key19": "3evK3D5MoqKBCFevPW5Ei511M8rRaMEFiNVburDU71Ur8kd7NTEusZAEk7SfWiZqpLnKYhGtsfDpKcDXCsMFoUh3",
  "key20": "3hDBf6ihM7QAwFjamacdJeKRqEAZCe5HZRoDdahWWgBGb9JxWWy5NNVUrqy9RuuuXdKeD1txcwZbSuaHUbKh586E",
  "key21": "53jMfGM5rNaRNih2JMBx5FmKw7YM4VpHvZyJFzo2NNFVxHqGtXMYgEVvXUqGUqGr2KSmmPvYdpaPqdz8Puit9wpe",
  "key22": "2YLDPxA7iQibbpsEJsQhhVPBVtWravrHFQZPVz2PkApuDDRs8PD51xUcFscnUA6FypRdt5N412J8ED8utqhAH9K2",
  "key23": "3wkyV6guAshQvhWARe2hZ3cmjDFpRQ2xto6Sk6x59vDRPrdLFHvTqVrF3oZmajhRnUV9hTYgJ2MdsrX6xdwxxXQf",
  "key24": "czbf7rvRmH2qLKtLyJ7JczptvhbiNws4wCmdi8DoJHHCmzmeHVf8L9c62tikJmvEGPvCLCjSEUm8YXwvmVASm5n",
  "key25": "2SMRxbvrVk2D1QkANHFTJ6ZNr9qPm25rdHdFi9WtPnzCypzxwzsbKttyJe53HcETebaaNWRGwqvfiXBsgAUggeXt",
  "key26": "4EsLXvjNBACQuawZMRmS17agiECy99G7d91C8wWZW9aADCy6BVsfcrXAzms7rVATcYn14AzgxkvEfR1rtkfk425S",
  "key27": "5xMv6pQRCgkXKgg1pZJC6GQBXjjxUqhGUEqHUJX25sWod2W5SjNV2wAwdv8sKavh5yUJyhyMdDbCjxadqZoUc7MF",
  "key28": "5nVKXjgS3jPAYCu5FhEZboMDBeWzxKGgkNwbnNmm3PHnazVXgfhmbssmx6rDn1F7zhXiTcbw1V14XtRyZYRCcHVj",
  "key29": "4D4CQayCyjCFAtmyUCsDMX4cBcprzbF6NyE2iuRK32nsFrizaY6p26jA2s2VvzkL27MjsVvuMtjQbC3C2ugF3uZm",
  "key30": "3NJC8yBgAJP1nvVeWfw1mjjb4SagpVMeoNwQdTf7De45pyKWbZQP1Rh6R8mXfYmWYcpKxskmhkF2YmrXVY2x7Qka",
  "key31": "2q1hVF1xNeRgNx2k3hHQLhseXkfnAhWzjn961YewGsfbxmai8UybtqDqiKHvNZVVwxDPtSuB6XeWkDKydkT7vGR3",
  "key32": "2sLMKnftXzySSs3weqo46CGe2VGMQz42rN8h9RdEnQ6yeFLMkppVmVdLh8Dz27zfrFDmswsgwe2kwJ6Zogdf1pad",
  "key33": "4gvaLHj164W46MEiYxGamAFTpD64qzHvc13AdHTsWdPWKhhQ5sm3MaPHREPhUKgKei37Knd4Q2WH8CfE1PfwwJBG"
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
