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
    "2PpSRYaqRRV78ibUEHG6fvpcWatW8MWNTMWUYH7RZh5y9UotyRiMX5Hkyzfchg27Hw6rdwA4yJ1pG2yJuN9rdZK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kwemmpbqBo5q1fpfYThGb2APnCvV6HFaPUCBwJkYnpMmmf54ZkTDhjPitzbzZLrA1yqv589BR2fBzJZXAuELmaM",
  "key1": "8jPtyAytpuKg7bxB2Cov4kBwdrYiHR7utXyDM6dWKsF6hbZpnn3Hz4ZzXNbk9hjPDnEZs8ZPWPgndvcTHd6FteQ",
  "key2": "2um4UeRZAqx2RrVuAztyJbSxjvm4isAN2BfPAComzBbKWotagnYpNxhc7hwxh73B3xpkz4JVRtF2GU67c4Zh7u5",
  "key3": "SkRgoPPsMbuBv27VeXgScA4MUie2AdHMkZQqjDLfH93D4oBvDxX6EtBp2LcWDAd5sUvW2BfuXfSZz23dh4ufyd2",
  "key4": "QESL4SHxncXFBiYHsAUL1CaE9UMtuxVeZ29ymrHNPerQZpK9BCF1fpAyPcDoiA6bUXzKCARnZ5mxUGduQLKgvgE",
  "key5": "4FCLxWi2N4toohTx22GUjDrwTJ8ND8gCKBqvTRFvkt7KeqQxBydL7Jw45DedCiAAs8m9MZUxBKQhbNNDJ29ft35a",
  "key6": "zBtGbK99QCnH6wen6CuCkrKjvHZjzuyFPYYLCXfLhUwGkPDq5g3k4PDTRSyaB32hswVyxd4Dqgz77wtgGrENsmv",
  "key7": "mEyegdxFamJgLX9vWNERv9SvBdS41E55mHnfHP8v5kSNcAesJRpPzeYbem39fUV9pDAjC9y5h2yn3e8dVxZrqRX",
  "key8": "24rQ1C9CefdPZTQBga3XrB8UYZ7R3oMhBtEjhwX7mRB4rmR3Sx5VuCWiL1hR5EqB1KLwbEFJs7DUd3ocQWWi5FYi",
  "key9": "4MGXe6WL8GVx3CQ19Qrt7Q9bsWvt3MNVQKcNu9BidKKgFCtZvzHsBtAujGWrzBYXWW3bsRs6GjF3wZpN3DoFABjF",
  "key10": "2K9pqEX6ff8uMGtFzjLwaygXodPBam6RGCXxEw3gqCybNgeTgYDNg6yhs6KynvQW3FraG4bz7rvZ8y8TuyJgXzsT",
  "key11": "27ovH9BBRex7zptdK9Zr6fMFyfo6w7akGcNTZDxpRLaX7QnTonviNyGJipBJg6ibzpbhmCQr7j5ccJdRLvbuRP6J",
  "key12": "5HdHGuq2gSSfCuQu7VctmxrfxSHhSQXY7vuBnxFC6m2hCbeVuNpEdNC7fCxu2Ycs6vYSjYpjSqQ2KjbGbuoZjE91",
  "key13": "2VfLv6YerKSC9vadbLQzimZCsHoibnBaXCRowFUGdnDGSFwL3n4TX2GMCuKg5WH43iFqg1zsXLWMudtNkYY7Bg8A",
  "key14": "5Dd8MzSFUmGXz2YegzeEcNXP9xnNehkEgbrVrVcRCeimtjtjw646kaZBL7GfxBsnD4v3PKNDKn4VaZnNDq2XhduL",
  "key15": "cqc7a2s9RPQe35QUjsJU22akppNGR5cZrJvpuM9jb9a2BtF5EadmeAgVv7rbci8i9WaATDemFJXWQ3jxAw7EhU2",
  "key16": "4LRSApk8eyA9DRKpgHQSPYGAZn12LZ1DAS1ZWiP6ATRCV6VxA6X1kDt4VgrzXLP8Wsvh89YqVuAfxMBVboJtHdNA",
  "key17": "uaLJCMFnFUu5DmE3P7ueqs3mqyEtFFo6PFddiLP3HvGCNK1ZMzU7qGME94YA58roTsYGcxWu9h6ZkuBVUHbLBKG",
  "key18": "5LggSSgCSwMogr3StkuZiW9p5sixzxdEnbM1UBErKiWwhdYgA4wWRQTXsQDGocgHfGjweYQU9zeAR7aing1LAQgW",
  "key19": "59k6AHYA9XsFPfXSddQeRBior2W5YKVU5zbKTh24xLjihC1iPY4iumNCf6HZQoems4kSkZbe6247KnwtSaPQK8AH",
  "key20": "v75k2sawtfaHJ8659C3XArifnaisUTuRV4d4EoXsmXsKjzgpa2x7VsVDCEmqAPTrhuhsGxnTEHhQHCfYy7P71Y9",
  "key21": "4zGLpBSNiwCerd221xhesdbaB7b1n2zR7KkEKFcyA639mvwjtzckKeUBLuVzyt7VSuo9sDMwaYY4UG4dY1347QUu",
  "key22": "2qfP3BYrezbAcD1z2QMcAQNuGnUCdgmTx1BEa1W3F4f7jPHrrJTpzKVjD3hV5dZbbxDEKRFk8jaqwccp8PF53q1E",
  "key23": "3DS5xc6ZfffWrnLmrzgxhXhEfQBpsXTLzKWyr1GJgzvsqxZMi2swrN6Y5Jir15B65RbZA5YopZxeUPhfZqf8ehvz",
  "key24": "5FKaDS2nVbeuoDTdo8aab4S82cEju2HkP3CLDLLFnpqx1nkchduMwtKEqELmhzLtMeyQRTFZQHZtYzLJkrb5y2uV",
  "key25": "P3RZVdQ6CWPy2WgiKm59C73oKqLDfUFhXSRjCQu4vSzJokUtG2NWE68kQXruADrgRK7Hb3TWSKELRJkBdtiaAvS",
  "key26": "2A7tTyvrUexq13iCWUZAUkEDGScoJ3tybbES7Tn5PigjYKUrjC6QTbHDvSmQXbUQYqgg2nWxc3Fm18BU2seHYb5c",
  "key27": "3MgJQLhdL6UFRRvkcYGafUqk1bPyZKgaMow2vjz5MYff7foB2mZBJkFajYG9RpBqzirVLNyCF7XTtHHjz1yHLrao",
  "key28": "48HRd5shSTZVd3D7eiNLmX4LpAfbiJLvc6F23pQtT7SGacTvRDS48KJDowKpornmmR5cgnprhQUXjsNC6wqnkn97",
  "key29": "44fxcKwqyExDLPMwbXiv6CdjVpqHgxFAFUMqmVJUcKLWN8a9rtVVXEEJorbDhdwhh4Y7tzU6UJRQkrb6USxw49HP",
  "key30": "2b2RoTs1TYuDhcB6oVNVCeWUKrUF1GJhSS4hUMmg7HFDvZyp2nnFiRRexNG8JoSQcinpnQkdNacUTzQz5CXuNZQG",
  "key31": "3EkA6WF1gTHNEukxSNnYL1gHxKKZXzhqfkZqb6TZS2qNWC7nYz7Rgkdidh2JhD83F5H1wij9KdhvbEDn1jQfzmf8",
  "key32": "3GSDBfAXwyn5mRzhxcvVRnrRpSKTStu4gJgL5dj8fnhgT8erjETno2dp3TrnBF94qnXRdSfyJ6bTqgQV1heWiESb",
  "key33": "38Ar6GJUWtKtUx6bBnX9woTzk3LSoLv4onQdj2qnsS59sUdapBBzPF28Ga2QnAaAhwGLxHAVcZR5hDbsUuVydrgn",
  "key34": "5RT7C4vYxYPKxmwpNjL2dwCxnmCBrnRP8yHfvg4DCH49sKpjRhkp12HjvUkrc3NajBWvQrQriHaGHcpReY88Zp6v",
  "key35": "5vTn6GTuchiuVZHMvHNYzUyoUeq7M9rBusNTJFrBMFhebE3LJ9EVF4afH75g6LGUMxXAHZ5iJsRRYJ8753NjK343",
  "key36": "3RXgNNuZmBWXinkMGXX4noysKvu8YyA9yinhNqBZiUGmiDaiJR8PrcwwH15kmc5pkVzT4Nh87YEvyLSSesPHUp9h",
  "key37": "3btFmxSQeodaQvy4BvD47uuWujJWYVFSvFJEyc434WTZT2vehMKKtyNyGwYMkVZxkACgYQo991jDxumFG1puu4Dr",
  "key38": "29aR7tez4aJ4JwJaQH5DpfvnDDPYzgGy4MbWkXjC88UB9bnpexCAPeZ1iMhhWqZbGK93uLNBASUHaR5gQRKYVfoj",
  "key39": "5bDTaXEkjL9mVYxyXeXeri9wSmp7WnEMivx615KCjaDEzJMsxNoEGSi5yyixBRqDgDYfCfGSaSwukPB6V3XnTKgf",
  "key40": "ed7v62JKdYrHyWYZ6jWRHSspVyhzncFaKJrWdAnk5V3en7e5RPQb9QqPD6FKRBxaseorUHDt9fXTqMLek8dLyDG",
  "key41": "5Reo4maKnRqgL7ybMpfEEbB9ktUR8PCZSMFLaAKn72ArJpEL713X3GNti1ZG6jj1L61UZY3p7utNBHjJR5TMhdXT",
  "key42": "5j6duRXpGYoA4Skmungo7EMxog645SRnAiiUTdiTAMtPiuWmRtPipZHK4adGeZ3DshFyRQhEkKXCkh4qtVHcbJ4S",
  "key43": "4XiEAbFjyv6rKxvAYqveVVyhF41pM23V9VWcwgFcWQ1qXo2x27eYiqpEXB89DTEvxLuV3FLvSRiZzMJb4UjZZKwm",
  "key44": "62D77DzSco9WogGzGouZYEpHCz5tdaXCjFwWUmRuKq19mS11dcAGmW1kcWAuUpa1NX8zR7XqWpRSCw4aP6Pz7AVV",
  "key45": "Fz9xX4BdBoNXRGF78qCkmQ3bnjLMXoxi3o2DDTVD8y1wxUxtkC7vF5G57tKF467XrntyszgYkfGmwbeRbdjn6nc",
  "key46": "3r5CSYFVRXpi3P7ePKQ8B3uHZnhKZN9XbwM8KKzfBPa6fpLS9n9qa2Rw9TxibTtWJy3ZLUJVDAkn6g4xvkvjknCR",
  "key47": "2bGKsLgDJqGN9jah7Nsw3Tb65eGGitR9LGVaC3hrwQWnojPw6xBCrrTLiBmaLV8jco8fmr6626XqNH7BRs1SNBaE"
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
