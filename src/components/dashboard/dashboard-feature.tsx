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
    "4c6XbB3BJ7JztxHKBR7cnjpicMozcgQEA3VBM39ZcJ9oWmQJBzQUtZy2qeSSWBoK1aYaHhsGhBHiziL6xYCPw8Yv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rcj5yL7pG5nnDqVeicyhTfJw8JWd6qMTk3ftz9zS4rvX5DWoFdR8iLuVme81utEE2wXh5gd3HezurXexmLBBAWx",
  "key1": "21FTDkECEBfPqfanhcNtHpiGbdLAKY3CW6iBtETi7JyVvaLqZaUubDgqRrz73Ui1EjbTGxW1d5hHfVmUuPpx8bQn",
  "key2": "LiBeubFsMabHaHGNGHA7dMqpimkRUkDBTmcxZVfi3n9KpmDK2P59Mwu4J74Zgb5kQzCkjkahgf69cYFGY39h8DP",
  "key3": "2dQS7pBiNQEX2YEnCVvVgCwxWFiS3unpqG39s1yNsmoiQGTa6gVF9nKaRy3VyviJVc5pV6VT133kBkTrxTxUvP5k",
  "key4": "5g5TJ9rxZahvoSK7onwWJn3ksNWw8aN6WMfL7jgC4dniusrV3HVdK77jNivcUN1A4GPLjnH2TPtncXriZC8Gm7P8",
  "key5": "XVATeJpyWsSk7294xYou5qQThViz2qrEqdDf1JfZdky5CiHnKZjRE2esD3U1CJMoUYsMyGzCwXeEvNHFHqTAfzs",
  "key6": "R1r8zxynKonz8MEAZbarYDx4h3TaA8XVykuTMybdGAYxXfD1eNE9hCURBWLAvg5pVSmCQvFkkZXe9SWYDtm5b2S",
  "key7": "31NY1t92p1nHsT2LPMEZf7zLjdY84SRjGtjBmyjBe6oCRytUCJiWGxELjvq6ZrX1rLXnBYJkMLzURVnE8DrSF6ex",
  "key8": "2KVcuA2E1ps7g5wJwfx51DE8bCv1HLLUKiYafLidcuVr24TnVcB8xb1rKFHJHucDH5acMB8JUN83zdJfkPRHnTTQ",
  "key9": "SSFEeFZi9WDW34RqssXXodNxJbykMQ9nDFXo4GkqiDrpGMZHunmZV4BG2YHCrkDuxzbVQNbSyE4AJ71eBj1k5x6",
  "key10": "3Y9nnpJ7hWmKEZAX7D2qn9zVj4CiCKasrtWeQx5c5jmT5qkRSCCDbwM9L1KCpPz1hHAaQ15XNu7zc6jrTB3MQ4FM",
  "key11": "5g4A64TYJVvUFv8B7fMMvJ8KBHTEELgRt79gRpMXM4TypzcvPfUPoZYaQBm9gnj9ZeNnrmhrZiDLZ6stNFBrxzBp",
  "key12": "3QJRGcXEbpYTQo4wBV96e59cuaDgVhqtUNysNunu8jPoFJCZEDjxKpyG18xEnzWULTPgJcTmf7p9g8MLUHu8UScS",
  "key13": "3L83EMjMsk84GdkoUmGEgFTDsQHn52ZJxxgZV3MVN2ptsm4Bzmzvep9vfFcLbKbz2QJ2KiRjrCQ9cjZzQnCkRdbZ",
  "key14": "3JTxxZiEj1MaeSV2SUD82TCw6VMbKWp2z9AzgFtgMWBn37Yv1rszJ7BintFzGGy58v1bCckW6y7RRPkNaRpkhkEL",
  "key15": "5AuQpofLJWL6JxSnkM4JfXezS3NYEhfLispkw7eKWdGUFJzeBajSweaU1UEmhDvCCR5gMZ5839mQKAJ9xr2B3X9b",
  "key16": "5hkHCdeoAD1SrGPTg4YFFDpHvP28kHzPzmQTHqCtdoBsDKs7XKgYVaSfbZvuCPNgsNeZEm4AvKkGUQgnLMKyZXDb",
  "key17": "4Z4U8XBRiaZeYjR2KR45yxx4XWk2xX2bLFEqVkA6tS2z5xpk6iv1nF9UG5tmrk2EpQn6wVCiNzqFWXdjhYQZWJTZ",
  "key18": "21MhaNXEb4TQGDGcbitZsXWWwAAdWsmeBABw7i8rmNxoyVstipKnnf4oqGxY9ee5z1pYPfjoKFKzcp8pJiaLw61U",
  "key19": "3KMGwjuW9RL2rFarv8eKZMcxzdbKXdY9xpyaM1k9SfDPoCUjZ8AAQPgKpwq32yVusbWok2zpbz7Vv6AcXEVFueKP",
  "key20": "qjyTxrrsRCYkfz4hR4ZuUG4iizxc8uqMiJhNSfF5EmcEXzu1hQwCH3Wk9eZTGAP651XxMwmE8rq8N7rwd7vB6Ri",
  "key21": "261C3aJ5FGZFs3Z6ZZYHiiqXTffPL57dUNrhh4F6DbLpzHpfj3q6PZWHMe4Knj6M27eMzzC698CcYYqkLdCE96Yn",
  "key22": "rLkL7J3ztsDKCqL81upGKWnSrEiKpYbYVFJuTvhB1qUpwxWuxU3Ut6LjD6n1qd5akYLtGuNvy6ZDS3tt1CjS9mS",
  "key23": "3VsjCeqpSfbf2gtLDSaPpqAfRbm9h8Bs7fAxNWY7C3TLQ3tRse2Fva5DbXwLeYsDthVfJK1LQ9W32oXTCc5EJKob",
  "key24": "5q9VBP9fvQr1aTyd28Nnb6NogN622EMjyAEdFck62UMVw2cuaDxT7z9nNQfcqunJRwN4THV4CEhqFDCE4YCtKfD4",
  "key25": "3i65xSwAkM7YjcfqFPDyVF2gZPavX1zm4g4MeDXs6tAaBi4cjyJDJuBxnL6AU1cruWyLR1zaFxr2fFCRncpu8RCZ",
  "key26": "4Lz9bzrxV2rMSaJw6t2AxMQZRzwzKxzdgXBM8gd9ASzvW85QKjAPn7Q4Lph1NqDZaRTfmnpDeHe9jxaz1BdSKxho",
  "key27": "Q5J3f8dssxRfFz892iZfekMFjqcDmhEd7U4ki2fUWVPLigCEzmC7c9jg1nMnz16JbqM1tgVn4AvhkKRBoVnkE2f",
  "key28": "3hVMWJgzVKkotPcTTcdWXWxDqF7pBmdr3rcKLBe2Mi3EzQmu3QHjkcm57esbpJD4nZYsU7PcWqwQPs2rNx318fxK",
  "key29": "3qVpGM3qEkWhrpxft9x1VEPFzuyWuE6gkoDqKrMiZLYGbQEyEXzwn16CaVA1qRWbWtp4HzWrn7hnsPxARvBojjBz",
  "key30": "28xB57PwRQLzJ53LqFiKqBx9p9wzqPEmFocdE4C44LpQK9AMbJEk1XQWZdnxWaZygYNnEX4brWCaDxyULgmRdC7P",
  "key31": "ZodGjDbVFox8VEqSsANrhrESkXk7ASY8b8P7DifvArLAbrDYMpA41NrpTjaccvg2oRLu6JVJpVLgfgtpbpjeKmj",
  "key32": "3KqaNKVTJQwWjJSaDdS8fVun4k7DkTk5X5NXZWeaWcMJjY8T5sx1QMGsFuxdqdp3czU95g6PX7X3wPAUVzSAr8kh",
  "key33": "5Ts5HBA3kNio3RGYPSZNMa9m5o4pnKjqqPVnRYAmNNiFsqCBGZ5Luo2xiTKFbE4XenvC36RLxKFkpKVeDr7Azm5F",
  "key34": "HKnFVCXf2Tg8gc53Lg4Bu5Qnmzb5Exf2GNp22JpqufJvkjxrASLPb1epkfxQq77F2ZGCtxVWesbJcUoTCq44Gix",
  "key35": "3cm5vwixaiY6z794ePoG7e9D1Ay6unNBv1M6We72Swwh97qJjAo4sQ48ceMGwAbjxDtWLQnKCo9SY5bCnwiJvmBQ",
  "key36": "5fTzY6AqNsWxAtFhu4XYkGHW48KJeTQGgaK6EF4ED5Y5LpAguDzxgowpXk7xLQpi4zkD1pGCYo9oGYth4aoCQyVu"
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
