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
    "478Z9FsJwtK6GDCj2rhBiQ5oKLxZpo2B1W8HkCnZ2PwkK2sGRoqidzGb658NRE4V2t1WMXQnw5a3nHWfoh8SZCsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X3PRE3DePMNn6HHYNzRV3rpX1eXzvmkTxAfnYakpo3RHuvEpmy2zvw4q5mN8RDmWU9HnUDeoc3j7qCc82LBju8d",
  "key1": "5i8DQntFAWcBU1LrMTk7x2oFJVB6uU8Wf2wdU7raHyXR18REZo6NBCYBUgsqY2qBK43Bhheuoa53rX1ssPjwmM2S",
  "key2": "5qGhUpNPLPLytzVoU1Wti1XubXMFZBb6zn7AnsZZFkjHuVXHidY54Lt53uH6TXJaPxgMD8YDW3hMDBk1vFZYF26Q",
  "key3": "5FH89HtzL38J54JSYUaxi3AgcpfExmY5zyKAtHzRK7iHrN8r2oeQyUtLfoEXL9guJX9btqj2duWW7Eq6EuBBUwUX",
  "key4": "Hdiog214VGokBjXYCw561NSMvHbRXmtrBz1P6mdrEpLRuMJCe7Zopm7nj6uTk1PaqCz2qtYLrPgRHcUWHLetLqo",
  "key5": "2KY6yScsgUHv1gN92XgG5xDNvjSJL8YWS7hwfKzyrJq1aKUuvc3mnFajphnBvp5sFbXy9sPpGXnin5z2q9T1sSP8",
  "key6": "3QyML4jFycsidYM3pvSHM9yR689mP1ewBiLrhnTMU977e7Q44pdUJVyxJJ1oghisuSyWLPPpfiuY2mM93zRnGzTG",
  "key7": "3HxX8eGcPy19CDuykNyzdEtGQ8VWuKav7YBHkB2CUWcpppzG2HNLomyTv19fb87DWcKxi7Q62wCrWbNu5ktVtV73",
  "key8": "4No5KFe7XTSi938LvhzbyJaTVnx4nzpNmJovp3ab5ct93Rb8cyDw4jsoH7mdEuYFYzNZyr3kTfU5SzL7ymgVxpdU",
  "key9": "E2wb6odByMMFv2QwzQBZ8LdHRajEnc5XSNn5h5vk5qDWqbiR9qbBLEP8FC9XGnYp87jF1hAmBD5xzKPRbztEqiU",
  "key10": "4Ha8WxDkSkp51aoZ1AASoKAn6mYCB3RXYP2CrswQSHLthDEVQEGwUv2jwim5ZxXnaKHUGMLF6AHSV2uzvJz2tAcj",
  "key11": "3GUTjJKiSWmWm8A4PzaqaDww4AEhGCqeRzgZS2Bcc9s7EDzwQ8ticeapN8TEv8gjZGQVLoiPWjb7nQGuPuoUhGHe",
  "key12": "L9JVgS761nYwcskJdeUJ5Sy2J7nukBgNpVjj42xQPXL1z2xXnPt3PCxBULatkizoWY5oRzxcmakwRAhj1ifv5ar",
  "key13": "hLhbpdL7vsuR7zwz9NjnsqUDM1G68rrxUjgZ42svkieNF2y5Ljxet9e9KpXghfHpPvPqCr41qe8AH73WKBj8C8G",
  "key14": "4Kd3RvE2MPBHRocDTQxahoGB5eUHeZ1HhRPqfKDyWVMkFwN6cmzqVdhe8DMkqkA5ahNYhqCEHFnFTuwCarSC74XH",
  "key15": "gYpvtktp9y6VQs1Rfx4agCv7szkPg2MDaWpuVapLjjoJcdnjx1adeo4SAvx5YfDntmuhmpGNTdrie564SQmJt3r",
  "key16": "3jdFq4229pv3YtAwq6H5LigeHfnVAGg8C3WbJoTXKojf4YtMJ4eKvUycs6F7vB77PQwmcPz7JNzAqJsAxJufotAD",
  "key17": "2HE9rbzbb1zNqX6oxUysrHhNn9spy8r9bbFkRLWU5NRGLkQLkMpqbjF3zc27uiKKBN1mhK5J8KQdG7ZMfjRsUnsd",
  "key18": "4ot23GjixNj3V5uTdJKA1Ch2kx5vJLHhkdPYmUYvg6WhZHcbYBHWM5ttqa72fET6c32F6GLSrtw2fHTbQqKNDeFk",
  "key19": "4wv45SZvqwAojtmxbuP1gyksfyc6RWTp9GCbWgxk68WT15BLbX5sKGZYSxt5UvrwgreXRvjW1z4egHpLfBdZ1mVX",
  "key20": "2yZsLaNYeep2bGrTUPuhx3Z3RcT7LDhvxQj2YiY4FJHiW5yyJ3d8iseQuvn81dTEi2hutNtwdwCWWVGMQTt7Xm6x",
  "key21": "2hpJX74a3S7r9dtPhzLknE3nN344wPuwzz9x7QAaHaWZp8KRVqGuqLiqEGv5ZF6reVRcQ2kX6ZqK3hJea7ECKq6P",
  "key22": "2oRVoH7rV48RyDKoQzvWW5Xu3UjG3HvNwh48WpX4v7wveJ7LVzk8UQQufhC88Yaop14cJADkvVVqyFvdcwMybKHK",
  "key23": "3HVYzUV4i4y6nmkcqR8Zi3p5JrQRnJAgAukKTmLwUNpkxD57VizreP4tTCD4skYmsBB9VsKXHBHuebWGJkMyVJb4",
  "key24": "4Mi6d9VFcYU8GMTkutGfb514Cc2MWkx77p93o461RNW93AvAN9zj9oSy2kQGiN8FUyVf9Yn5TrqEBsYEPHvAEDjA",
  "key25": "5sfY8rDGACdufPj4ne9dFVacZVrEJUSBHrMBPiYz4D8dueAh9BeGrHWqtznRoUYGT88GzkPkrfPfkV4UxXadfoEH",
  "key26": "4ieqUuZJT6xW95PV2B5BoSugtppYNuWKsaKZeckogfQ5wqAomD9aF9ogeGYrCbJZSvBcWGt42o3tSYnYvR813sRh",
  "key27": "4fVdFaoj2PwWBQad8zKbs7x4URKjgsX9CRsq3vaVBerpkm1LL3vhqvEKudEn626YfemY4HDJKthv6hBK7Gtmkjme",
  "key28": "3sRR6UhRNSy4ZmzGHfmFFbUXmehL14RxuwbdhoMkJWM6wVePpgxceBB6wC4FnTAkKSj76qG3bMyc1A7ECMuZ226N",
  "key29": "33xJxEQnDxh6mCSFmTb8hizb7oxARK3rhPKzeYaSf2ao3Uqm12KJPngpgtYEQwqLBu2hxtMBEasgMUTUsznxXTPN",
  "key30": "25Furf6eQU77DRC7rzqpmzEWK8tQUQJtrCTay6iLFVKG8RK1gnHzP9VyKwziuRt8TVHQxXFodXiE4JTqDg3vp7P7",
  "key31": "2kctxgfxe7zUkuJN7CsJtPNJPfbwvwQQy16gLQ6Mg2Bw8vBDW59tk3pTy1AgHc2GEt4Xt19VwdZtPY6Ph9ZxRf5J",
  "key32": "b5NJMBu257dwKwNGJJs9Mwo36iBjQRRy1bzgn7A7hhSVv6mZuTZT8bNzKqQj2y7oAqRqDd2iwn7Zs44yXZPNHEQ",
  "key33": "5GPS3sCRCyC1vmjJVcc5d2mXVdw7v2aeDWpXE7z8tYfPWpWy9jEJKwWUTXiYj7S7uuWp8mDzX78cgnCQKGkEgGL5",
  "key34": "5DtKXSYbRWrv5x1WEhBzxhWKFKRdPoVmbRtyaYYHi97HvkdJHytYUJHqGkzgjdTYwKvhqNnMgsqWLNxE1tWkZyn9",
  "key35": "2JHyxzFRXaCTzrYYwsgCEeZ7hATxpKgFPSDxVDJ9cE8aff37bShL3LVDFQpCJPrhBg3xz2Y5EJMdn17esaEPkhBb",
  "key36": "62MmHdjsg5YuhNaVbZMFvhkuE1oVx8AWSDmtdb4VEEU1uvXJTBNiQCdLAeZoYoXtPdmJoGityqdiR4HseDBTS9zG",
  "key37": "5cqXjsUPx1J8JigtTaPHbxyfeYWHwrNbyUU3eZjoamdo9p9bnaJMzyFAdFUG6xBt1TToQPaTXF1aWdA5ycXUUQvR",
  "key38": "5GvchcFjmR1DitxxfDsHXpNfT9Gfdh6yjrBY7LfG9BdMPX2YWVDkYzsHc9ykFvLTZhWN6BnH5x2qsF6FuR8Zx95",
  "key39": "3SJdbsSmNarbhpLkoguZjV2fiRWFpxcMo1STXpPjrSVTK53WkhoRKUA1cQX9VsgepQeSYjRera946aYAuFHMs62q"
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
