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
    "4x9iCJtU2v1BAscvpzMU7edPKskxgzfMQMMwecVLvCihzRBZzZN6epBwNEETuEB8YFjvDX9aY8zAsnd8bPec74Eg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vFx9HZLpV92YQiDnhE1saezkrNn5TNBFuAi5pkjsbFSk2iGCiUP6PA3LVoGJYNjAkHX6kKGJKSQ2jNK8Y63gCAC",
  "key1": "25NQdVJTi6STAenMvs2DHpFAqwDFf1hQW6pU1iQJx2nKmWemyo3YLG2rar4e4JqhtMS718PVrmk93j98NBziLC6R",
  "key2": "52cLz1dLiUHj7Xdhhsyn7B9N3eQoft8xXHuHWsyQg1GjgoKXAzwmrxmHg6cGgghLRGcW8F722jWkrdZARMLC51LB",
  "key3": "34pBwbeSvzgqsFXVrDnYg3ZCAT7XvKL6JhwccPN135SHhFbLef8w56QZZM3QVapNn1Thb7ah5iX3zKQhNrWPgvMv",
  "key4": "4JGkiVJCq53Sq4qT8xAVCqj24ViphcsAYp99y2WFAywusdwgXJrscoQjq7nA1J1mboFXqL72UP2p4WkQbUXWDoX9",
  "key5": "5eQvwaFkb5Wjq69zScEmveYwsMyQR4p4caRBKmr89kRx6GYyN3XwwdCdp2QprnwKQLDa7ukzGkGx6skEa9185dAX",
  "key6": "4kqYdYzd2tgm96AQo4F633HSCcXVCobbYxYPKVt5knpaTcX22dPPiaez65g5DEwGvZhYFf1Eh9oSR7F5CuhErLkh",
  "key7": "Mzxh3o7AUpN9kjnQEHgQNvfnHPzzYNFxENkA4XfyCfVEFuujQWgL88mzT6CiNJqC9xNC3BzQm9L7hem8s8xLN9C",
  "key8": "4xGpchMvHqp3Lu54j9yQAvrvJXhdxTEZaPNDWbB1V7K49SFbQ8FgvWwEz9VZ8Y6mdoVH3Zr1MPV7BydMBZvMBt2G",
  "key9": "64p7JRdCPpRXqqTEUnzpq5SaTUdop9vWZuGmqCFPhNiDqBZt1QNS4tUszdzeLvAY4MuZESXGkptsG4gsWawdsZm",
  "key10": "495KeXJFQvRxZVtiHsoLE3UjWi4mwwLbQXryQni8D4F8xYFiUJXJRGdr8iT6oMDPsW3dMAB32WJRUFisjjt8XtrK",
  "key11": "4hAWt2uXu4sngQFtoWnp5vxW48D4VU7dAve8dypoeWaYReqiaX8ApqfacrRf68wukaVNREWqGZQ6rCcy16jWP6qZ",
  "key12": "45Vh2q8q3uJRc8a4VCtKydTvFXxyXNJcJDejUbsREqgkC6cYcRqjfwjaawi4GS7wQ9T64wKbscQ2Akg3msYTBSHE",
  "key13": "2M9mqoPEw8iSDc2rdSvtdAXyeXumZuWpY6a2oi9N1yGxgtHGKcqDHgijLUax9qaVfQ1YKj6Ds2PFXtu4h2keW8oj",
  "key14": "4K5jcMH7Mj8PHcBXJiApqZP8Yr8NgNkW8GYr7i53YMtvZgBrQqMXbUhWUph5ffwL5FtRLZH46XgmjvAHQuCxYPNE",
  "key15": "5oJmmqZyToc9oFyfaGKD4a3uJB23tp23h437ALi48yJBRTiErEh5tL1Fn1fwJxaj4W59eYRJJ7CUDYdb4P1VJ2am",
  "key16": "4fnQYSFGNdEgkwhQkX4TLqtgNjiA5jJomnxHEmojkKj6YYNbWzcA4zvVAHH2hdtjSwqhMq5q2tcZ5pUjmuPoMdTi",
  "key17": "qpj8dUiKwjGGk92AhfRGzedCDojv7yawSBZR158814G5j1vN7HD1nhyt2W3dR1oe9DyM59VpWY1uCdbtVevmBQi",
  "key18": "4jP7jTsBctUVMrEc3poYSX1qrHu7goemjSjz9eeA2MS5FzbEN33ViVD17ABpXhDy6DokD7s6eHuYor7JKKvyvzdt",
  "key19": "2GXeXzpSdWR22Urgg1y5NeAWp871c6f3XCFfKC9nU2tFa3rKzRk8LHDJvT7EWc9DXuSG6ftSN2BTPLxDQvtfqkrg",
  "key20": "3TYEVzV4JN3uUVTRRiW5XfsYAXDFzNpXu81RK3nxcJnaiyfR9NtPA4fT6SQWZsfxCUANB5rn2mpVwBoieEuZJpxJ",
  "key21": "3LzoJn18Wnm1q12MiNraaTMrtf1q53H9zfZzMaDNy7BiTWCajUm1WBRe8qVwgxYUbVWKq1DjnvZ7fpoZ4usRtE4v",
  "key22": "3UD4sfAU4XxEgfdfVTfnC7qwGh9VM24FGurjNZkscKw28FaqCBP7ZEuV6zgPiHu8GE4neWs6zMeZ2DchQ6GPzvZk",
  "key23": "3hsj6abjVLw9CVSnXKs38WBjx9vi8qiwe9nN8ZhfRqV49Ce2XGrHij5BWa1qEPpEURvaCQWuSeAd5SvbQ6T7f1Te",
  "key24": "3tGhbFKg4szTU76Y6pseErLd5PCeAbZtaPZVpa2dkJEKeQEh8of8zEFur6HyJniYZNfDohJbjqS8CmFLdZqse56R",
  "key25": "3ALXjoZkJPeDbLAnBLmqcLryiaeUZfR3jFMQRgUZhmtyWZsjscRTDU8zHBn22N9nued2bkdNHjZmpagfoAfa9yT6",
  "key26": "3JEy42Ti6b647F18cxamG9jiutz6yr4amToQ9UeLhL2v1kZGYpULEFrxtgNqTuibnD8G8wGaptnWFXTAuS4uKcZX",
  "key27": "36n41gBnmRDjXf6vgy34XiXVu6BTWUALMEvXhLuVkoQFpYQF2gQYffpaFJqZgStbvbdmfQmCWN6oKzvyBcgFyA9K",
  "key28": "2YAjJaSxArN6yFxD9mc6yKHGBL2dnMk6db25jPHBweQyEcSdAASKW2VwfKaw6PWZJ7hYfodQ2G96gZJwqZ5w6Umx",
  "key29": "4EzwYRjznvygAmLgj77JL7DxMhsfTsfy1FjM5bLiQHy3EkMCN7ityo1Suj1Meu4Uvm3cbW4R3SaSGrS8G9a6BurL",
  "key30": "122hywys1E5wA22Bw38dSEwMrpqQ3jT2Qrsza57wdsruG5XgQZEbjScsdFGTaEfEztZMaxf4uQJ7KTtsZ2EoK9u2",
  "key31": "3qaETa6v4ZAg2Wesupgz7LjzjfhQGSiYrose3FF2FcsdvJHo8zirWyiizH4jQr3Fh36mbt7EDTTFhaqBkgJA8dHb",
  "key32": "4hMMQ5irEMzAUacV65T34DMpxtfuhGq5dyQabmdWg8kLqLjfaF2TfWRtJUa8Xjg1ywWaSt2vQBZJDa8BvLQSjccC",
  "key33": "5DdBZ9UssoLxDJ3TFr5MkSDjLDuZff2bd2uShAZWW6hwZmVhMEwsdH7hk2uMMHVfvPx4d64vfqoSXq4mxwpFrKUT",
  "key34": "3H1bExumqe3b8bpKtsJBPK2hJotCUZ3ZVEabQT2cKD9gjA93YYBTzXDxt6jV77NW5JZyvpwDA34s94eQJdei2Ckq",
  "key35": "y1fwSQygCGyBtFpj44krPmbzxga9jswTkNrR2kTJfAKvqQkb1MKRMpwhPWNvHYqFy6BFgg8gF6RkziMcW8jyaVT",
  "key36": "5ikYQefPQEbWpYjyiqEtDaRfNBmYYALX8XaHHUmDjKqmqxXKgvehDj1mBrmUDABq6K6rwzbgbarTXJcJVz6iBLfC",
  "key37": "5warhaAHn2g4tEXQ8VrqPvhrZ3n1K8LJKBQK9vt2BMWDddtbd2QM1LxrV6yqu2Gesv49KhWuWC1tiWp3SvB6PoCp",
  "key38": "3pyRsrzHUFWmtnd7Q3SzxoCvbkyCuiii4FZaaWe8C9rk4exDY12YmAuYEk6qkJYiyCB2Uw8FjFqTDppiySqUJ9B5",
  "key39": "aZ9JCnMcMFrcyenyDLmCYdp8augmjjVvs5Q3jJCgPcmEY7iaqMo5pkHcUQBqKz23e9V8PtYVrNjg9z389inLrBJ",
  "key40": "mQv15M982595NKVhWTt79NjppccRtH8iU6LucP4SyVqqeqYN2FcDYsqCUbsCxz2axqaN8QSUPQgFtr8r6GnUwuK",
  "key41": "gMA85XSmqiBRxGt6xTAZqoLYR5CtYS9X33FcUVjqTBtA8dEjDeutk1ezTGoYDtPk2sXRaippPQNr9CZ6oZ73LY1",
  "key42": "3nQGWsYZokrQuK6xAuifzVgWv58PZESvVK5wmQkPbNtf2voSULUbgtXfGReJ7nuG4mywKUjDs6C62Q8aXb6mxan7",
  "key43": "TT3WQmiVxEajTUvocw1HwUAhzePZP6i12HQDCUEBbf9h4VvcJQg2DShApAWywGq3GjAoM5JpxbSLC4viArDYXJo",
  "key44": "56phWg7zt5CPk9XU7JghpvA6bssMDCHguF5zQryqNKcsPuEZWkpfrRHbr7S7PCpETPgntkMN2iBa1JWnV9YQej7B",
  "key45": "46zCpxBtgiKbepvTUL4uXx8MmHPDVMrGKz1Brd2ok1Z7dTH6d4SQQpJirJY7hYaeGH6DNcmVeFQFDebVtXAwDH4Q"
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
