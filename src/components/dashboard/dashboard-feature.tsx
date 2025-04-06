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
    "PNLL6A1dFS8NTS5iez5c6HzX6NTXNXufX5Vzkxm5QNNEfYwB1W6tBx7hDhBKzkUDBSfPYrVhTYNeCq5KD6np1Fd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jk1HyDmp9LSfw1XZQFccoGYsTP8g7AhPHf25njucsNk6kcEcBvSvTARPDnAw9TFYJFswW3xo4K95wTQyMQKhfUH",
  "key1": "2SiPpZ4eDeZqjnVGwV5A2otXsnTLCg1aFjFMrYEWzSRAF2EEqRiS88mu6BUqZ2k6Dga6KRhaJ6R4jPPHXGjgqo9A",
  "key2": "77t5M3a7wgEaX69CL7f8pa2kEjDzyyf2sCEfTJo5eJdezjr6WR34rw7tJG9A95PyC64CXg74uJLXbptX5Renf53",
  "key3": "3N4azSeLhHciutJkHua8zX9VUV3zAtr1KtZ9YNYyreFxv54ivBfQnBirg4YE5zPp3sBtRYuSpfERG6JboFLxPZKF",
  "key4": "1KPyBVfKrPLgUduV7Ncqm9RYAAV1JRs8VZBX285QSd7rMtfGjLnXuQgSjmBac4yNyfSceFz3DzRFBhh2wbvh6dE",
  "key5": "4xGD3P82sV3gJtvZ1XkeFsfEFwLg9bDuPavoMWjk4WWFUbZFDLeCFQHZwqusfsW9CHRHkVmpMDN5NjewgqPCr8u2",
  "key6": "4ntKCmJThw21vUjBwEuMKRMaHRzdcmqE4593dBivSqQzeqa2B1uQL1BMtiLBtviHaPwszZQ1AYE3rj5j1SmbRtpQ",
  "key7": "35WoikduKB1uyFZTbKZ5h5CBtha9jwtXZTKAgqUnzuKA4vvj6UwveXuz147WYYCtdYeZoaKFn1qHUk296isgJSHe",
  "key8": "5qkgvBUTKArcagrMyfTqvkWeyAfJmm1pAXFSuomNjKnhwjRPDMv4iS4URMTWbtWjetqp1ZV76wMs8hVXwhP3vVxU",
  "key9": "2w84GSogqh7vDiYpTxZNkJrGHBZiX8a5qo8CBFVDKotYyTCu8qAttmtuWjQSekRLcGhvqUin7Uff6xp4MPn8pWh4",
  "key10": "4iHkcDzyB8oHezvSnKBgrLTqdi891rYhsGtfG82wfXF16QiYS1sjN9nNeiyXhQuPj3hL7DukWMviC6wCC4nYG4kq",
  "key11": "61dXMqe4fUqLZTzYejgtbhNSWHRs8Zu2h8hZHXi4w6UaVJmS8AFrtD9NLTaUEdgzpjCqJncigg7zx8Zonmzyvkty",
  "key12": "5cwg9DhBRtEksJADKnHECneWEwYFk2M1Ps4G59r43FgdDzu6uh5dj6W7kEHrsMZNjnhCPuKAjtYPZQ6LsCg8k7WZ",
  "key13": "5L5DtVChUes88Y4kPanZXzYyPCQSKrR1N1qAWtUWNKMMy76UKeM7JybYyAyqbdV4eqtpfQgLAdHfPPRLNuKgCtZY",
  "key14": "2kbujYZZ7xq7isD9hQVTT9RpZ8TocjVdqwNMNKWGrNXSFF1Xb9Q78TCmNaxBnziArFpfaQ7yeSTjkhJrMzzrGJ3s",
  "key15": "3zcBooz8kbUsDN16inQhEiVjhtWjkT3Pz9BsB22ECsUdsLwsRr2UCi9XoQKN5kGnoKSbbETdyT8EJzpPUXjLzYK9",
  "key16": "4PgnAk11J5xmDC8cWEPZjvWY8q2ZpRE8xPtkQAS2EuccymYfZmsxwUEko91EonnZUyrrvanJsDJnsyMHU37jsJHM",
  "key17": "4jWURUWttdEytAzQHZKWFKxs1oKEZWZXp3VnhGjqvLhqCQeAXWXk8K1vaAaVithDLigxmW5hSSBj4DLerJyPgkBf",
  "key18": "3kBwjMVRm3mHZn3nGyHzETpwonrVSsbDCA8MS1GFSS6mzWuarXmEXYiexpiP8HVsmCfwxpeWL66t1pnDQA41nijH",
  "key19": "58dxkrRY1MMKfATSsbLwb16wyhbV1bStwa6FsUsGeJ3eaG5wvQB4J86SyWPB7QhLxeHTLWFX4yLvg6xiSquakLCr",
  "key20": "fVRqZmGCJghpNc1nVN4z1H3ejwJrMwEzAqWobnthKH5Uqn8FJTqmQBWH1ftbnCGiPUwEEvSzhyioMuoEVmr5xLD",
  "key21": "swCfgYWjnWAmWwbMAbtV5EJeQM5dy8DsapT8HZ5jSbTuwyLeduwVPPfCRk6RXUv22QddVprhqwFw94DixDZjv2y",
  "key22": "jm8nnYC52pmNkFjwVKQh8GjWC2dCFZshftBPULxbDfwx2sa6BfdUddpvKzKXfNmetAnAAJCX8mspEE5JQRWQzDp",
  "key23": "4mp4SXvQzcbHaFKB46mr5yR1rd5Uox9CjBYiqeUebZJKPeFF8XzahY9Nf8fk5Q8M3t9H4XFVA6jZ9iVWNXaqYciE",
  "key24": "55kJqts3SkGoHympTyQG7kp5Md56WxhPH2a9SZhEoespiisjbdhBXN2oDoeWTocY3AW9R83aiJt5u2N8dtybDJfa",
  "key25": "2Vx44cwUApSQQdMHipoXQoUs2Ex6Bd39MNgi8NuhxCTehBGrF5PAy2S7msgCK2hrsE5EDZJwQhsaDYFwn9gqMNtm",
  "key26": "5EAU4cS8WVwaJv1c3EnusP9EduH7u1gLhZniwUWThKYuVVqD91vwe9cqfGsuAosKKNMvQxr8rVmxfBQMpVaQEDPB",
  "key27": "4VePp16Rh5huyj8L3YRLRBrAmKymRXY1Dq1rNNmUVJkma7Qajg1xBa47XsTxH4Jrj7wNXkjDRxP3yPuzujxahLDD",
  "key28": "3K2DRvRRQrF25LxZhk13rCKt2jMEPrchbTcy51LsrDz3UKbAGrs2Z1MtmgAKLiTXzuaBncTYxNuAptKttAR5R6vz",
  "key29": "478fbbFRFAXeSxWr2ozdVffGqexQHxdaDkKSeQAnJmxkMWGxdWXhGSWF2jZmFTrqSKMk2uNHUesZai9wmRysrLqU",
  "key30": "4gedvkhPBjNHAu69rPDwQWAJtVUZeux73anA9TsXreND9LSF6yJzVbXhwjo8V36dV8yBV3dkGkUay4WnCuL61Xmb",
  "key31": "ai2MmoWivjSSXCo3kjTjqu5YZGYxnri4gkgZa7jYf6WNu4JxtCwbT4FAJuh9hr36BRtYTZfN8HPaixg8Dau7d6z",
  "key32": "5dePtdBmzDbvyXcvMZCcG8EtvuN8Y7GKgQyXXprGv6C5eAWBsyKjrhAhFrMEW56iCFEGD8NZyAMTrfxKUxcKaqjg",
  "key33": "7skBadsAPVjZkhUCQzAAu9tPpmNsceb9271D7aWMtjFdSyRQr9WhFRX2dugZSUbpty8JQozvVGijGr6ZZJKLGFS",
  "key34": "3fksUhjuUqzNz8qfogp1wQ1Fv7mtxgbQjLr89DLcivPJvLk9xjuWkx2xbP6Rj2mWJdJz3c67YYY85c6bBj5kEjxx",
  "key35": "4xd4pNvr5V56pu7fLfvb1HNnYzq5QfrT8AJL1UhMCFEK1JCsVd67NLpvDWuZFMyp3pHYmFJEjhDxoYPHZdjF9hz7",
  "key36": "4o2SpFWwAwqHqWvTZipxPJkjZsZ5gz68UwYyL6zx9FQbMRpPeSqUQRUVvLQMG9Mh2pTQg3SZmSMN1Eh2h9ET1YHt",
  "key37": "4x84sVxw2irquzAndrXqKeoGPTHaLqJWcXPtAe47SfVgufH3GHbJohoUgzRtYXxDJoFc8Rh2EfV75mV1VjAwV8uV",
  "key38": "5UXLZaXeWYwHPPN8KeGxps6bJzj251tHk7X9eQ2WDVTdu3xxgnUjozZYBPdeAZaXE9i2uKx3UQfJRibHAwFNjEY7",
  "key39": "LchqiwNLzirz1ZGD9SfGcreEudR7SaGLNkVNqRLkSxcra4KHLpKrsaUfmeZTUrm1osY4T2BqFnsbQ2hPtZFZFXk"
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
