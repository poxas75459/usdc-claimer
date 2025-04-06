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
    "swozcYw6bAk6b6k2eDeUyQFsEVGHpDZzibEEU6KamvghGGeqyiLWjKStSNie4RN8bS8sCLJKPQPcfXv861gRMq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HvnzqBaxoK78cEBycV1xGaoS1FP9zDi4ZGyCmnjsKqq2Df8cRJfSt1EergfXH6aP4u7YWGEcc7tNG4n8Laawnzb",
  "key1": "5aC6kh9r2HdyiRfwgDayCBza6ZqtctoS6ptuLYyAnAcPT38Zg6qK6RuRCNEZqYrY6FdhUqdWtJ22kUTRgYzCW53Q",
  "key2": "23nfBMVGMvuQ52wm7TMqFSND9sL5ZZPA9Yw123iApAXwueUq1bshKmkX2cyfYWTrZtEaiaujxJwJ4fEtuamfuCX6",
  "key3": "4CTrXaVrMmhpcscMtxmmiSs63howQFsyFQ8Rs6XmCPvwDrkLK7RLsQNo8kA7UedvZVtWKbn11s9TLu4ZSZevjhaL",
  "key4": "yddpkskQNS24tLw2hxBUrZBF9DqKtzHaNyDpWt59ayoPjEHnAwW1dNVhkghQ7UvuCej2iD2ZngCbGciDAegayVy",
  "key5": "63hsZVXBZjw6ncHwfWQ7Rbi56JvVe94aMv9byi4Fj3XhHxuV44ecaz9ZBNdCERXsEYtefivoTfo2G1GHzYeZBo7i",
  "key6": "617izodxinTUgRMLhy685rLG5YaaWQMzUhKiqfwTgEPnpY5w39L7nkppG7A99dNQwcoiUQh4yDgPCGPVZNMTT9o4",
  "key7": "2FTNzbeTmCLn6j9UPtsrrUdAYpuC88juRSJEeTTCj2HgRAT1jf9YtFLQ8puJiDALgJca76KHnS61HDnrForpbo3s",
  "key8": "46cJA3Eo6kKMuvE9VRtvwhWDDMxsiAEVco1ogMZRcHQ4b4TGZCpppCCi2wwRA8shCFMqj5AMASNTMSvTKi7tKVEv",
  "key9": "3hVqdZ7hab7PKWEWApQBoMJGAdVk3ej1oUMAAjAvxVPEffjCWcF7FMPY6VY9JtzvHPpDgcJpYbvzvPE9oftcN3Sa",
  "key10": "4YkkTKuqEWKmBzMUBSoSAYyVPgNFWEQeNaUH4vSwmVLvCA28wCuZGNPTGjy9aWhKfyM4z9DPKf2uWgUrfuPjc4AV",
  "key11": "2NHFvKLW4hTa21swyATaVDKSVzWFzR7cQ1vTo4XeunmbgX6Rjyem52o7wFw6LHpYNSFk9sUQARXB7ayxFR2Doakx",
  "key12": "pnVe1a75jJjnCS9oNqfLeNspThVA7UF9BtEAk6H7UkMu6VsVYo2VVMHwrBLQ2ToWqMG5u3uhv4jSrfPy9ARxP1i",
  "key13": "GHRAKgRkrQL5RBthbXgrcwS9HkKt35vKeQefN64Ch8mvmdRSSqa4gokSvQKrVGkbJ6b8a5UQqRnz8NLM5z3cuLV",
  "key14": "nexSweobLnBYn8NQni2sh2Yv3B4P3xsmwjgNnBRBzgEQcctE4FAKfWh9xyxeyM3TetRxs7ARjpeYATThxnnVhbn",
  "key15": "2VQPH6Lh3aP6dHoZqopcRigiH7SdkmaiEDjtc8U3rNMjkctrpA8tD1VAwUyce48385dLRg22va9hGwJKzCP2c8Na",
  "key16": "3x6z8kREJRGp4kq2ix7pknvva5iH8ADYWxooYU3tj3itJhiMGvDmyS8jDuaycMRqKMCNhuersjFNcXifyjJGi2JA",
  "key17": "67p4GUqzmErsZHxLiP7nQ7irVRQCBJZiJu6xc974R3vhdW15UXfjhHyvmCwwt5kygx5esbV7DiBPNm43v7owckRA",
  "key18": "3cYmgvSrUDUKtUkxN5xjKvHGiQrnoXqr1t65HWWMGvcb6U1ZyL61rDSdM39TkqPVgvHD1FqBDduF5ELkecw7GdLL",
  "key19": "4XwuR1J8MUFxR4egX3n2v943jPjxDXGhPju5df9TFEcNVMr6LBk453LVCYvXUqdC4UkNjX78XBGYCzt4QaH1yyja",
  "key20": "5zPqM3BTzEcDwD3gVXNGjpjzutQjaJxpACHZT3RPvTGaHpecfWzDDjMANXCJVb7d7y5JN8SQoX1bjcP3fo1RVM8c",
  "key21": "4nY64sbwonNoDkTZbMLRF8fAUNCQhrmKYmrYEUgmKMHVgGg1EQRkzutVfVBfciZsayYfUq36aqwLLasY8BpPVGM3",
  "key22": "5FxXv5T9gTH2jVZVWsJh7trgmJ8XC47TjrvQkprT5TPYaWpYEcvQDnVAdkHZczCUYrNdkh4PN8NjuHHmiPa12arZ",
  "key23": "31zW5gcbKzMZDUc4aSbjhwB93fKDwSCSvjdJugiW7uFfvGYNTMik4e4w48zFdRFiCiWKo6pbS21uUkZNXS6KzdVk",
  "key24": "4uXouYge9gTPxcWmmE2nJ1vZtNwi1mAK7sooBfn83bskTae3qTWAQBKbBVdDVXeptv6gNt93LXmZnTksshHwYfyq",
  "key25": "4QbZxN5nQreaFBuhDt2KxPkNtpSypnVPLr3ot7djGqfeHLpzBcqunaVkykkdrLvAEb3Z87bNj7FjnrhC59BPEkGW",
  "key26": "3VH8VoUUPDJEa8w5qNhpVBH9Cpu7FZEDHztbtEz4vNAAtXgnLymxrWMNEKm4rbyw3iMpBhE924VNFdwn37p9eFxm",
  "key27": "BQ3q7sJthmtLD2Vdb5mZCDxMUDEcrq7J5NmNeZPvFeDCtkrZNHrfiA6p5ymqfddNLmNTVwTuQqA8XrVUp4pgvWB",
  "key28": "2biGsLLiUMCR2oGUsNYpg5Vksh7uBYuusyW76ERpb76Ur1sMkQtxQZ2dvQGixGkmGXUeGUK4qdfL8vj5cDjDD2dQ"
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
