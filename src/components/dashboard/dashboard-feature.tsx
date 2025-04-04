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
    "5hVWq4awoPUfHhNdfGsgdcYVNJmdPLHgDSTAhxptkryXKLr9G2DyqMkihfD9RdBU2vvTnFxn5HcFWUSWoojsvb3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xgYqo4iaRQwhSzFJEu6sZT96AUYrYo9Hhd9dLLpEcs1FdgYbQyUtPkUATXCi9gadDsF3NoDXBMqKHPj4Y4Mpd6k",
  "key1": "5CRYiPwmyNQWKWzjKPWau9JvVQhsSHZz3m69xCchLDpEfL9k9SXvD9NcnsQDSQPax9JQxo1Y9JfTguvbEcYBFJx9",
  "key2": "4FpW1kTNGnqHFPRySfsKHdbnabYoGXGURkekmNQdXea3akpTa4kV8zBKWpVCuRLXDXyVCspRNUFGWcvcYGyH5dDE",
  "key3": "3cgX9qvXNKdXMbfFguxgvJgnv1aVSDkS1aYBrEEqwh2UFWgTn2Q2CCLq9VLmAfRehUsSct6bQtsC8QT7GKQekidR",
  "key4": "4wyCTkqnquk3ihCdv2TQM7GURPjfVpe6rxsSHimjhhsaw3U9HHfAQWJsQ5zNsgL5VxQnkmm1eaLQ5zh2ihPitysW",
  "key5": "XeM4C89jC7dP8SPa1wGzGwgNDtJEPnfT2rASL8yx1H6y7xbKx868YFh3MF6j6WV8pBYciz5TQKwuYDoZyV7o4b4",
  "key6": "5NhJQDwngVxbivHq3cHNNBSb1BTqo1KaUgbQjtbeeYc6w1dSDG3etJcARrfNkPi8uuS7TAXfJyPaRRZgjBkZANsW",
  "key7": "49qQCn7DM276aGcWRtFo8VepmX1KyqCmxoj4xM7bx4LmhK85vsv1dk3it7r4TzVYkZRURwhRDTN8bRGkrepZQ1ie",
  "key8": "25GQGTXCJ3ZPzrAfLJL8SEw7UaXjMRcSyW9qRf1MJ5kFQ36saSNaYoTvUzKmJvPbfgxjwm4NTcUHZKL947ejtWWo",
  "key9": "JahTELGv1TbXaEbtXN314XvmHJdfvTCxsTPSyZHs3LBtHBgs4Q44JSSPasTob9YkMXS6vNspgXCGzCCa6pAsx2q",
  "key10": "4foF9xWURrc3xiFP8nWeX8Kop8Te5wRSGKFLtduSpCRqCEhFz3ypam3rM4wybSZx2qnUrW1buzhjbqL9336xgKRu",
  "key11": "54nUgdoznuNBi3c7XCL9PogqoTsrgNYwYKJJJjJqfFWtQte8RLtXiB8b4CUDJFKHUv7wnViHciVkxShBCneq99MT",
  "key12": "7xzKE9dgRZVK3nVcU8eZ2RRrA1P9TFFoF8RKcHkmJkb7aBLAvW6RStjFo4tf6aLqaJFy6QAtDKDGZjHUUXjcEVJ",
  "key13": "66fAvXNdJCC5fhHKhVavdq2tbHNSKMzopZoGAUZqCCv37H8bNxybRajEH1UM1yrbwjeGvNsJBnc5eyzHEdiVD7Uw",
  "key14": "3MNPeiNQdgzR1tx2ypiUZNQKfLMHX2qJDqHscn9oTtxi8NDkNCyVwFE4TeLVY8Aitqnt3gfEVRiCkk6GF5rtM667",
  "key15": "3J4jJTiPNiWLVQb7shimCc73exnA7ZgpXcX2WJgPXWt1VXukMWc1rafTh1bXNDszEuyYcaPtB6k1nXNqYh8M8RE7",
  "key16": "3qyUBYcAi3q2pRywb76EGbgWrBPNhubguejKpiMpoVQEVNfsXGpLWBbqB579dWJ7e9oGykkg2RMimcDt2zFcPp25",
  "key17": "2od2Ct9D8TPWLZJNZm4fekuy2nif39Vaahp5thSKVJDNknoSPGbub31jn6JYscnfGXYeSEVSwiksKED8BpRUUTak",
  "key18": "4qDcYsWAzRTtAk4AE3URndHzK6KfXSpVnVfZYpVTs1RnhxYVarhPdMM3AHVXgLoexfQEjEoENpyhpfoHMzhDR65M",
  "key19": "4ZNZgXQktPg5gHwQwv2uk13uhABkHEkqNQgebsGLu17M3vy7uLy86tSikMeiUmmAMXSzkPpELBXW5JEnB5oTMziP",
  "key20": "5RPMh6eNv7M2BiTHD3ovwcfXa5iVPMSR2nmQCFjccEquJ5ZGm4fCK6E2dtHQKDxvcxup9RHpgAi8Pa3Wfgp7tF7f",
  "key21": "463VohnmzdBJpQ7JYHA3iJHDzrgdX9NBPSunUYNZz6WwA8dS7jM7xcBTqLbdtzuLwcUL1vqC8z7UNrNL5R1gjcNG",
  "key22": "2uTrCR1DT8FtC3sMbAz9s4j2yF3bMSB7ThJuAnj6npwvLZvkgxRW1DoUDyKBBan8pXYVHxgAYDGBNKfhkC6cNWwF",
  "key23": "jPm3BYzf6Peg4ojeGr2u3HQToBnsbf9ZgHxxXgosVaacAw2DjKd1sfREfqdAeUmX7GMx69uiTmyEovvFwN8J49n",
  "key24": "4fLQveBqcfKmhKsC5V4nohonAUMvm8avSxmyQ7g69reh2nA55L1S24fyM6x6TzbRNGVh9twYEyjoLt5msv7KARcE",
  "key25": "3Xhs4TxSoACTgftVpMDnc8tzTSwbgshRxkTVJRZEctpd3U4LjHYZ1J18aA1XfQPV294UXt4QEKpQzWFFYFDpNAqK",
  "key26": "2SdehbRW8AnidoPHUCE6dkFeaBjpsYmmJsvvX9U2ffwmn4Cdr34x9WkMNvqUxgjAH7wRcqZw8xXqDwAoKyA5HxY7",
  "key27": "5yS51ZHe7LrSscaj11H1mTtsyZmhvoJU1mVM2WmG2TgjNuM4RGmngDcrVCSUuHPqBNgeNC5iTNSZtQorsF78cunq",
  "key28": "UPP68u2BFd7cqPXy5Us5fLpVrvZB8gZKY1oFeENmgM5NRMS5NzHsENaqYH465F9S89qEBq2kEwUhC67Wc6hZ9kK",
  "key29": "2Ntmf4kkSoqfCnCHczZU87Wv6wmUEUjGoycLWzmr97oXgkMfq67D9Xwfe34r3eHiKB24FLMY81KqLSkP9nyP9T2v",
  "key30": "kamrKdHTBPRkvjyzWQw4Y2kft7whfbmKhXGxHAAPCoq77dLnfaYg65g3Ts1eJnviL8XEamPMCsiDdYy5xph98VU",
  "key31": "5yVS9tTWFWnJSKNEb7R2TxbsUvxNTy8UfASC4C6X42enKGBEyjgaPiUkDQDZZPd7Vof5KoBh1AcdbMV6VxfgLkWr",
  "key32": "3VHbXZ7XRqZyBJSqmSvSkv32uakR9p6yLADpC5VuBKPHBsK5HWLXVehkKnK2RsbSZwvCeuehG4AQ2wfygRAvEACg",
  "key33": "5eQSicZGUkLgFz9b6HFXdTcrtjJEYaPkEeMLKKNjpjGYMkJyYPEYCWYGQW2AhuCYSf3dWqrmAyqJG1mBaxQoMYyd",
  "key34": "2RD1ZDw35nHeVQsPChp5tyAeUqC8cvcb12ZuM8bqBc79SdDNQ4WLVjVPjtKLap1at8QNvi8scJze1eg7RNE2kqqA",
  "key35": "3Yexf32Qe7PBcZ6hPRjbQTsCnAWroYrtoREojXAnA9NgzzADusZVP7aWmRX6C3dVvYzfN3Z93PA4ZW2X52Qqp8Uj",
  "key36": "4SkhSQ9XBQxmuuYBhcSscpyN6Eq8ZVY5iwAJzXkxHKCDESztwdB2hv6kPbXgrhaszwJQ2kktw46Zzso8aHmkxFoB",
  "key37": "3xBwRU8hcpM8HiWz9BJR7mTxxHia5Ledh4Fov1JWWGdzXK7zqRNurZoHTr8TWqjjBE9acCo1H3qa8qNnEeuwoxya",
  "key38": "5eFXPKHCgnX7ist7cvLBDuaFe5sumiRJbCJfPxJX3vTeDje1Dd5oZ6NDdJgFmytWzKLW8vZaYasvdvmWn7fitWax",
  "key39": "5AC4E5Pwppe3GFHyfhUKQtnuTJwUDsmQLf3Bj2aGnvWvPNtVySMkPYiAt7CVTEjmYZ8ACe8fFzvs6e26Xt6FqkML",
  "key40": "5Y2h83tCi529Q7SRKXx7gThotjFYvaK5PuDWPUhKebqXd7NFxr1XrnVALmFwXLfgzCY7ULmnWN7gFAbMwVYiKK5s",
  "key41": "2put8yxHQRBbNjjshehsQAbMbbJafehUVP8EL72xWAMiZkxJPr1bL4FFaDhZ57uon5TgmSDcjxzoafRGBLyPMXji",
  "key42": "5KtCUrR7KQAsZRtrmZ3pgSR6tEH5kLfFfnJ1La6ESYKu7cUMGkmh5tbSc1qnGyjXZf7DdZQTXgAgfAvuSgmVrXso",
  "key43": "2XzPGkLZwAhYUVAskzuT4noSM7LZXewrwXm6mc3xctQB36jCH5ue5hQUDsWyaHGKaskZNr5o4gDcdiN6D2PFvHfK",
  "key44": "5jgZM1op4YPDbc1sZz9a5pAhGkUMofbsLxLszt4BNcGjGYUBSkwYabNmRh4PvkZRG1ZuG3SS9zSLov1CZBMBu2bQ",
  "key45": "37HpuEzE3kj42dvKXdRPvqwESwcrMCnvmx1AQ774aoPn4ZQJLFY2Ur7A4YMZNXur34VBSWixdH5RPivzQSZuAoFU",
  "key46": "2ZVhKXBMNigSDxZtsFbAjYwLVjnQJ7XRGXUtSxWJFfByApdGGGUm7ma9aCHMYW9pvRoyLixMszJQjdyJDJNfuvgB",
  "key47": "5hmEVewCPhmPZ1zrqrVN7cfQAFodjzoViniQMH3jKqtNGKonqEt7pvEDdcDg5E2dWTrYbnuTw42icKt42qUAsn2T",
  "key48": "5phKebttqD8VYhR2FbcJTC7AaWS84PeZZtNsuyo4yr7C4LrH5rycDwRX6YitcRxaqKWQC4aAGpYvU95q4Kk483Hm",
  "key49": "5rPwBDDaTFFWjWxY4SypPPHCNgzDQnF9AMcf7r1DjdCo2SN8PtvhFdu7V5wbUDz8DyUvnxpGvqNoH1nAbXrgzXCe"
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
