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
    "2yqZAeKJdUDZqGdXpVKYt9ahA3hJAkHXV2RZtBSQTnvST44jYmfFqtaL7zNHAsamFxxUTxwphJxgFQPAKmKMytmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G7bayTRkadsehgRgS1dCY4izfjHEbXQUYfLixLGPmGWTRhz7WCBcv9bejGzqShhFNRkCW3BZ2WLXA9ZkuQ5nfFf",
  "key1": "2yWVzYrw97YayovZhLKE4JqnF24vNBSQTWjHAqJpVidXjX9DSo93K9W8gzPn3eKejLWXzQhB2ioFnbriVCawdALW",
  "key2": "2x1w6NmiEmUZjXLyUBETGVZpFiMQVM4Ro3dCC3xGjj4ksaX6nSJGQqR51fFZDLTNRrAETPbjHG6oJwi2Etdt952f",
  "key3": "4vJtRWmr42NKBqtZ1WAvdefcGkZ9uFTfAGbR14vhees5xogA7aT1L9zUa4ehmh4zHF7cir9iaAKFkzDzC9NKTVe4",
  "key4": "5xPjGN2thRW7KQkV6N6kRkpnz7p82VHx4Z7vM3tCwmYfy6kM76uSJ98rpVw1z24q83hWQAM3Yix8CXhSdpibgJsJ",
  "key5": "3BgTViS7b47e7PtoUFzveEqYZFbZ6vt53fVxXRQeMoDuFcoqt6w9wDV8c7M9aJYpdy5dexMAY5E6CBEUKqvsTuS",
  "key6": "64oxaEEZywkaWAcBMRuQ7ngVyTLtN7rpqBMfqnCZY7KXPUBgz7D52L815xnXt4nikGGME37Jxg4A1K7o3GW2Tdse",
  "key7": "5ghhFWe4sBWUCAGtSDLxJExp5Dkt4K1gfMRLxouiwXN2D9g1dA7zjxcwncPJPXKwLaq7LkCqwvEWwDuQnsZaCG4Y",
  "key8": "5eTcjmru7aYvvcxr6yTtepMmDbzEEw5eeFRDcDE2zXPP6po2T4Wk7kHFqbNfor5uRezWF13X6cWbroo5rVbR7FoD",
  "key9": "3Er7KNDBAetLtEJTQGssh8RjPzRkBPbNEQAj3HieGwxTnFGjJUvViNvxDx9CmWCQzKSRzN6f8pSHCBEDjLp8FvWb",
  "key10": "47GBQEZqsZwzauGjE6yBU4aGuvKB6sYsT9FGgEzk8L4XfW1Avgn1JnCarE1nycd1W2vJAmfPKLYDy3UhWErHo8fq",
  "key11": "5eaJnKwFS9if12rcmk3ysB3znz36K7okxyk1gAZW8Sg4zkiKbgw5GBcPGhJHgcfGTU9XTCrQz2EfQu9qCxbZPxqG",
  "key12": "3x3WcM1DLbres1YPN4mgGd5qepFueEAmE5sx6jMZ6iULKDhWmzaNU6CPWueX8wSsWkxf1G4UaapRKk6ZnR3sJ1P3",
  "key13": "4JzrCpfmaRo8dRNAs3qqHfJmSYTzFJoqTAXaxCHE5ebUg71vTDJEwhU6GsNibGMSgc8SoG6ygofQrGekWt3YJPNa",
  "key14": "26yioMsWtuMjKUtkGJb4BMaYFp5VD5zZp8oLdXgbwjWRttNXntGFDdugPu8rD28376AfCjzo3jJg7WXC6NLxZ8Zv",
  "key15": "52mDMkpMqwyKtUmBNxcMWA8rG5WsxMMsrg8b6FfQm38zyw6zxecrZ2K6gK1RW6MAPQhmPHz9cTrhW4r6VZLge16Y",
  "key16": "5dZBPJKJtZRGBGpmkQfqhuQoKZVFnicb8CyBNtr3FXvGZqmcfp2wWVvC1LsdQzAebC7YD2L6qVbFHde7QUfiLhXk",
  "key17": "2B1p91S6zyfXhc8Tc7jy8s6MuMVanrotYYZdzUc3jfkseH5gBVPwbUiSjanJcBxkLZ8Pv5Z9ArNmhu2QouqzSgNf",
  "key18": "5ST4LFiVzWruiV9N8DU3N9DP9rBhB3tr1goG2hJx1Vg9yJuKBMxGwW7z8MxsQaTRgSxsMeBFiSCuUg75FksjqjpC",
  "key19": "3awKRXRgi4sb6qDXNkeDXep2FRumBHkQ5YT4YkAtL1q3wQP7kZizjNgNHJ7agebE7BrhsQBozE3GzhthYYEzbLJB",
  "key20": "yn1uNnUdNeSQwR9F9g8ZRL4HV4prPup2ve8J821bQCYScasMaikgBBKJBNqTzSBEKxVtSrsWQxU88VwCpzdcHhN",
  "key21": "XhKpAuE8dCKUPNyuYUrajKbZBCsvbF4zbb8n1KL7CkxX8BVxYfMVUZ6owEmKZyHg4ZxzaQn3eVL4H34Wp7zHeAm",
  "key22": "2jKvN5A8X2YA86Jk3Adp4Mfs4BWbYWgPLkYYWqPfLWpG3fqoMYprTaHNhLMhcCsaw3Kmu7aq68kgt9Vwrn75jz4b",
  "key23": "3kakvHr5q6sBSuhcicVVBgvAfo1TkgvhsggGSYYEac5uhtVTD5P98y3QAbPimG4ghRdz7Rez5jNLnnsTyyp7BSEK",
  "key24": "4diysToYBbhbKP7gEHbA8T3mBCjpFQtyRJXxrqvB5b1tXbhcT5faVvbRreiJ1zeWXu5ghVHyqBArhGZBZL291Kot",
  "key25": "4V3zskcJTK6iHsXp3XNJtcZ171ZnRRvKSeWEZrQkeH5D3nnhpbGYbTwUNVuphgoUWxK4VmAkVbT6n4bGznP8wSi9",
  "key26": "4ec5sd4QRrpvWAvaMq5XRJgau2cEayyQKGdctWVs5NamS3Hfz4BgUDvZJdPE5zDwdhzXtbrVSLZuqrFdrvgGxPoV",
  "key27": "29o7zNyZzM1Qvxbw7Rt2NXkPTvSwarfCsJQjLdtctj5Y5Pr4C6U3WJSLAkw7KFTB3E8vYajyKM2n12V71YMKtvNN",
  "key28": "4sQSG7zMAek8pUa6FDUHetv4qJG8qyCGGXsuWVchnrMxNyqLZocnG6vgYtidnYk9bdn6LZLupnZBKvz5znY7p2wX",
  "key29": "2rVC4VLFR9cEt33kE7spPhasSw1coZJmufgp5WnUNuHcTVBDdJDFYXEEd4b5hwRtMuXGrMJb3nQsmCZZ6FnuYTZG",
  "key30": "5CUF8fBrUAwWCEQGtrwJBvb4Uj5txxB9DNSndQQH42kftPkdf6x8kQEAp63tFyJxaMZSL9PMzMuuemhenzEo2VVf",
  "key31": "3TvhYv9MpUUZzqvd4wDgnt6vY3U2xQT7rRW79ZyVtJnFSUX14wpAUzCFiRM7f9Men6Rr3zwHT1rTUQCuGwp35fHx",
  "key32": "5znAdXpTp9svxntb8SQTnf3BUdivBZH3RJkKYVRY6D2LPFGiZkbjnexaNtFcfef5m5BtsqHoYR6xD6NsSG6xmWg6",
  "key33": "Awm9GkzAFhNNoEsp6LXKT94eP9kRTVr6fRx6QYy9TsDvdfx8W7AuHPs5muUW9tPYtAkmkZ3EW9zWqpV8upCJYJZ",
  "key34": "2jEVgpzE6swYoyGer7cVAtbnUPHzH9zUhuit7YMRK5Xdwzbd2jXoo2gm1BVGV9EBfLiSm8QtfgDVaTTivVSTZxUr"
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
