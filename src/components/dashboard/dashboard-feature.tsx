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
    "5WiuNSayqsoy9wNc8CrsYXjh2U1m8WHeHmUUMzsJ56q8mcNwXMac8MhkKussQCRuX2DqZpAzJF5X9WAvN5e26hkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AhhF3UKtU9SfAvCQTvxBWakF2ZddB2br9wANxGNYL8fwJoGwQHpCYsFpy6vuErDrBkx8RGMv5iR8xoabmL6Vr5t",
  "key1": "2xe4NHcHb2TQAjG4TUx1v6DhyEoL9o8uTvJ4AHXTsaEBzeynJ34rDeWHbMbcN2x948HM7q8Xuqi5NaBzT7MsJLSZ",
  "key2": "LMdxGrh4pVavRX5VwL79aSWW5pn8PW8B8oqKKRRzUp5FfwitboURdHuU315Br79nqrdumH91eCEE5HNV2kt7mrC",
  "key3": "4Sz7tGLP5U5BMTtNdaCpaKVKvTWFzyrt7JwfdmjmBBasgxw8WMpJw1EzQSUA5WDEBXVwsszySdSuofnphJkKin5a",
  "key4": "3jGGrWDefHnSnf4baZXFBArjj5K8PB6efgzwX2iwkkNouANPnm3W7ZMkV2jFcBEcH5iyXED7k48SuSq7kt8cYm7G",
  "key5": "KC7BKcB447FbttbwobNz3PkfTF9JbBipsRG4rBzWgPqVGtzGtenkZqu6jgyVYdY4DuibVThNhZ75fowiSNkkdTs",
  "key6": "57pkNhGfgsPVmyLvbFzR5qZMNLeWb4LkMiwitcRp3edfyp9NUh6HVHCgfbGb2K3eaWmX16ZQQv4VyV7ygmYGPu3C",
  "key7": "BLgaZLB6t9NM5Wqdf9z1DZtsiFLkeDnzLiMMTeM7Lk3ZwC1GzwXYjqH18K8sQo7wYpQVzEAcPm7yNmvvMLU1dHA",
  "key8": "2CnLDVwXCo885qP5SVLjuBeT93YEnfw9QUkDt4LkX57Bu2umZBWsECTLGsoy4VzrBZfoMP8pvhERexHA9i47e7Cr",
  "key9": "2zGS2WqTS9ZAZmq2BHQJoS5MxKNpqDQUx4ZrC86JwwxsyASRTWHtkydY4D23CfdFvhETRKBb6iinDqSgGANXWRG7",
  "key10": "3wSAPsyVBTNkcgJVouU8hQnTciyma8uNKGHu8Hw2M7UrGQg3ECPvqvCZ3h3Hcqv91o7zxKvTEb8jEQ1hh8ZHTtUG",
  "key11": "4PT7R5gbjkNrAM68B4VimhWKHt8x7VhzrpEeSRQWM9wW6ds9tNF44KjexsbEbkcx6T4RUzJz5BZ9DjVS9hFPRobV",
  "key12": "tQ7XvTKc4buqpeTpRvBVzVwNRJCFVhckyUH8aNQQe9QCDhpP4tiBYodYwgHFo6GhxjKKdTWvsBKCkzyuL5vU4wk",
  "key13": "5XawC5BY8qfRmvJwAXj3AA9U9U6vvV8L3GFK9S44bn5xyfaStHQMYYg8Gp8hjY3kMfs69skt5arckN2WhyePnoZQ",
  "key14": "2gsaxc4rKr5gSaYD4kSYh7BgdcT7Bu6CRrFvJ7qDmT5LHgoRcQyDgrasRA4iLcSWdsy2YnBzS3966uypSPDHHbkL",
  "key15": "5J6QFGiZNbMZVBHcdR9YQ1RWQaYvUZo7LJ42LkTwXSUNvoe5ufSDMBcRh62HLcuLSMW4Azn9akn16XQmYcwivRUh",
  "key16": "5unk37EaxdfAWWpaXevnutSJgsh5BrNrpwdhK4ZjK4ZT1ZeWDUqkqKB4uxYxEvAB28T3oKYowDwxhqkjFjmdgCNm",
  "key17": "453gHH4BrmWDAWq7uAB64J28XStD75icjUuxh6qL4aS18B4xEaqHxv3S2SCzKNKJFCUBgxZqMoCcBnxMb2s8gZy2",
  "key18": "3Q4Ln7FaAQ4WhJF38x8BZvLveWExkMPFgWymJZYPD3ZMhXqmum4prpDXALjmcUGEXBE3P9KkbmtctSKqmsfFKgwr",
  "key19": "3JeQHSZj51MB8twH1eCZDTno8widitqhho1uEuGyJfzRCFcpFeo3nFjGCjk1zqXrxY2KHia7An5SW7PD3d3njFzu",
  "key20": "ewqDUV41Pf2tujTw2X7R41P4Dnv6xSAz6euTnStfgpuMypk5WbsyF4kKzJZmbHSRZmt9MGBTg4h8eeTVQ9ETda7",
  "key21": "M9vhBLwDjL2T46B1FrP7QgRjFYS9YMXJ4jHpje9vsguJv7g6WpoMsLHZp117wDscQXiaVZFCoVotQMf1W2DXztp",
  "key22": "5PTSzR7484UVzarJFrrQ1WZYbWN54mMjLwzNerD5UvSxSr419YbFjhy4cBTUNCtPbmD86tC1QGecoyPDxTkH1QzK",
  "key23": "5V2byp6TR8Np6Ztx8vC9vE2mCMuPBxJWSMPujQwWQsTEeENwqjHzye4v5MkSqbsYo9VT21sZy6SkeskwfGHH34vZ",
  "key24": "9X1tS8fpVTWfbAY3EERFqRBTzRZ8Z7cFHySJpHcC9eLY7wtqQeEL2KJnG5NePsfveXnL12qPPcAJwEFjz2ZHAfs",
  "key25": "3FsdyDyKwRQ78PbKAQ8UQFDKAyG8TqhPK5cw2ZF98EDm9mn9JfxuKKVBgcrYwxotTEzzs9HTUAubgmRCZxC5TKEo",
  "key26": "3Gnaq2QpqnXc1akBapheHvyLUknJFXq7htjetDM2MTBxVNU5E6US3i492neC5GjHeDWqXGzKqo34poLYbs42qyMo",
  "key27": "48jg8AEJ5mfDzX9NRiHhmfx23b2UptL5qY9FRMVYdmpbc7TWKJmBj5AE3UpLfbiE9qnmNNxDD7nYQ7fBpkByjpgG",
  "key28": "5APrNiT5qwPZuV3QRRWexXkDmP6gsoG5HyDDSXUsNtH5pRv85SF8fzFh1cFgmHZTtiqTLAMh8izBAqFPaqm96fpL",
  "key29": "4PUDkR2svAFmbTPk4UXf6kohKbDvCAtZwYB6nUJTmH17bx6jR1qD4coMy8rJfUzwpASLMfDrKz93S2KK6Cqb38vr",
  "key30": "5HvCaTzkGfLEGZbyDhhcmCuGzwAeScmqQagogP2ipBpTAN247WmktFmJH25W5WQ5MXvGg2662MRD2a3Xym6KnpUc",
  "key31": "y7Xmj3gqgyC9XUpjzUvkFvoqFAetxD9Y5J9VS9tzppmYMqkT4iBp8ZxV8gYsunMrXqjqeCmTPD5CKKqM7YvQLix",
  "key32": "VwAFhkrQvB146mnkhvLU2BHMMY1A3MGUgPGX6QSC1vV1MKy5mRT1ZAoo6nNHCFumwM7iT852yeNTAU8C5p5KML1",
  "key33": "4JrmhxoZ8MaKiNo5SyTVojzSTfGUd48rNCmGaVG1bucnvqJFkPLXEdBT7Pi2q1Zg5YccUxy5yf1koivV8pXMAxRf",
  "key34": "5i1eRSDQRUdfvRmd7fqoET2Vk1oF2UBjpW6wzu6ijPhsHvhSBQEfGY9yJJZbQjUmNzy5PRgj9aEioyxmxoWdruoD",
  "key35": "J1ryH2tjdV5vJrZhYHTJLBp5KB8TgQvjFFopFTMiAQXPjS34GqZTx31aWc8UNoSQFsjbFB9qA6MX2BydaMjUrUv",
  "key36": "5PvMXWAQMu6QCSEKX2HXj5ssmji8UymDM4GH7cNVeEqYRNoqk1XoFuEZYA6quqFb6EQxotkVuetBxQxNHYabv5zj",
  "key37": "2dbnomiC5FBs3JpV7mq3iVFcjZkKBTyqdYBeyTiddFymoBZDktA6E91DmW6Sb59uMgCSsFgNMy23EhZHDAR3u5v4",
  "key38": "YX2mSToNhf7HoW1jzc6Q88G4rwVfXnPsLPbWBeJJAMTid3K9sSNbcgnC4tjWTF1Ua5BvT8kUMWaKLZ6kb49TEBx"
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
