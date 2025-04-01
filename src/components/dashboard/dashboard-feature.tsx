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
    "2r4AFkJScMTNoUXLMsCMwGrFrk3QLMenVVJaViGd3BUAM9AhqEjopi5gzr7n4fLF8y6u284Wq8CGfK7sykXr3cwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qVH7KBydetT7HHcPcauWdq8ZjiyjR5EuUHNuP1yjRsfcvRMaXkW3jeauV1xZPXHBYtWkw4qZtFpHDp9z3ogjByS",
  "key1": "42K2oYpA3Hg4S9uS8totNcs63cepFTEtWC1cCDauuNoHQH9LvoYLSibBqYXVbBmR4yDeUr78CJFS8JhtVQAHjYxf",
  "key2": "4x6CxVT3P5gfpv4qWc8TrzoR7ft4jVcb5CcS9jz6QFY9y1mxnAv9KTDsd22MtFWdNk9XcnVk2WkTNKEv9zVRzXUP",
  "key3": "4Ht3Syy5k1czgZfr88rvWs7zmUpYdfGiVE2sfEaiWyhEQbVhy5MYfHixrM86gtkxdcndicRmEJciffMvLMFsrVTA",
  "key4": "4G85ggW9JRAfgFysuWqUYacjbTGu4SQMm7F2iBQ44CKtGnXaNAC3es2PBHBEkevcMFqL9cgfxvG3McyLwT7MgvoQ",
  "key5": "5E6Ni9WUdAJxakPtDR1wnJgVUtqDpEkdiLBqd521j6MZ1XNw8zQLJyy7NJLujaSA9GofU2eV651wViFLHEZXUkQ7",
  "key6": "4yGJ92hdePS27vVZBhR4HJsH9zfMxwmB4uJY4LGc15V6qRiDDqiDeMSTLLpg67cTcAZx86Ly83yiUcifFEKRxc2U",
  "key7": "9p7UzjDJnacgG77P4pbn3HejuG6agcRvBP9imUdy2qvLh33PkNafHTPFr9SXHwrCrqGZxoZrhKju4M1v4T5EmzZ",
  "key8": "Uuz5FdB6NC8WpUDQKeeP4tX1hjrgjwHTA6uM8FHgW78hMUCjXsa21Y21HfPShnATpcG8eD5kFXwcp4wSgk7BgWd",
  "key9": "2XtgQcZgdfZejZr36EHrs8NooNregE1hkafbMMd4Zg38xESELSK6UerpotawdKCx5z5VbF4ADPmqf5bAfM8RqNV7",
  "key10": "5a9TSeVRvV1WtdRnU1XSwfejXEVwaXC7SP6Gue4LdzWPV3a5NkjqbWiuNtLX8YU3EgpbiQDNsSkyf2VoFCdQN2da",
  "key11": "3rqxEBko6vupHCvSq7esd2ZmPu25T7s1eTaY5AwCzUHCKnR2nsMcpH9aCKxmC86uWTpn1Upnt2Fhfy1UQVg6sy4g",
  "key12": "5XAnKrDunvzcNsv5WjAsE59YhnExCi9zH2N8wwUcwRKMiZg1oPSfkprdUaHTtSFZbbECC57FE23hAMP1w8AJVjoN",
  "key13": "vvQFuC9qdb1gnXFKHzGgFkrUFdZFkeVpx6UYx9pb9xkidS8HW4x34vXjs1KaupAJ4H1Wh6JhfHosbMqSVR97vff",
  "key14": "5ugWPXjJJi6fX2WJsTergXzXV6LSudqY3RwN6bQURugGF7e8Dh8tscWFvzWS3FidRbYUXwCH851UTGayg7SsaMSS",
  "key15": "5tvCVjQExKk5E2aEtKWHLi56pVeUkwX8Hz9yvbxoA8vUCevzENkJA6kN26s3vNXLfpWejVxAdmSwHizXZUNhXS8J",
  "key16": "598d9N6cSSSj6V8joL7P8hYLpKsj7f6XQDq7y8fVHeGQxp3UhE7h4wGjZb9KDzsFhRe6YXnthGtMTD2KZsVP5bkK",
  "key17": "6tkade6MeXNrAJjwwSFkkWXWmT9JFd1iVEZghzNkMkA4c8mDf5bWzq7w8HYdQW97wmRH8qHaoday8yGray4wTXe",
  "key18": "5FCpc1G3xBgZPBYpTCrXgnaFyCQfuWg9728cfDb3xkbHtTN1MQy6geXTxs3RmBnJtSHjsiFug2LtTiDch2inqoFN",
  "key19": "3g9ZCbTVg2drmfsCwsefFuWDbBX3Gg25dQGdXMp83PNqDmuTmpePWjAEYdoUYdhXw3X66byDJWiLR7zejGYM5TaJ",
  "key20": "5dXjttJ6LCKGoMCh29pWEhgAWXfT25n2ZiMEeEVbtdfEVbK9mkYyz8ka5qDjYtA46aQHRMboHMA93j8VwUVPnbQh",
  "key21": "2vXV762AJp8mi4Q3d35JedApEgnxd6A4CC1jkgehkLw4Wtkk1r93ADHqDQ3JUygdLQZkz114w7FVqrPmiBuZwV53",
  "key22": "4BsF4LETzP3KZ6SdJT5bHg2BasDs49H2SPbFHoVS6Jbs4DKKzBcW4J35EiuhZqSk8Lqb4FwiwYX3TZcpQsaFNWjR",
  "key23": "kVSwMCKrrc9v6xeYtpfAxY7mmvFGf7sfDGnh6ySWin2ZxbznQeTVvoyKt3HimGio38S4yUM2WLfw8hmeETGxsDw",
  "key24": "3PkHzpsC7gHMH9ZVQpJ17j8xKgQKZ7fo8wqjdpFJ1uQ4HRVQdX5vDBdimmwvY2rEgKN68DKSGh9XdaM7F1ycz6Zv",
  "key25": "KonDPx7TuFLcgeeDGya3MjTwaMMhgfvDW3sxFXAYz9LVFXav7jHkReEBiMjpvWZRN24AoQcnPYg8LtqAfMdoFwT",
  "key26": "5K7k7DjH9tNYiUtZAskomJ3NgBUCnrePnKfbp4MDtFRTdLY3mTJJRLPTv4gG1RHZn39xGe6viCoNTz2qXKAacT9U",
  "key27": "Pk43NmjQEq9ioWn18WRidcFFFaJx29iPSSiycSMiduCmVGQwkxD6Mgwo4ypax236Z3wJCCdsc9z7vZaWM9aJ1tx",
  "key28": "5hacNwdx5u6Wuw5xca4D76hTRSLNSjdKPs9JvSdQ2s2BFanMncsYyFSrzKiQoB1f4YELoRXXfX2pgGh73nZBSx29",
  "key29": "pCF6Lxr5kk6tB67TbbJhyivihriSEmXfcBpRYvrdEwZ2AVeSkfG6W4UrnbB4RKy1EgX6Xm3iCN364u34DKbGCno",
  "key30": "4QEUPXfsNCjq5wFG4K1NSd1xqav5CukFFwU5AdjP5kRESr82APKgHbmGHKRUS7RJ82cw6pNh72i9n51Yji5SduB3",
  "key31": "3V33SssRTwzTQcQT1WXKspoRfRxUwJ56D4yjfqARACpAmAyEx36kRfTzCgmx5fA9kYVnsZKrbAJCnJBP4ZwX8Eaz",
  "key32": "4ZSpajuAVCZuNE6jt8der1QW4NP5rP5ENDpzq23a2cvaDB3bQ1xtRuLg86GBD2T5RLNMvcjqiJWo19VBeizefNjg"
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
