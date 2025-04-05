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
    "wRxXBED3iZQJfvazSSLkV7sQQ9C9HXh5RyAp3ky82qe2kHrbWcgEUGZA5C5WgGKDAUsK1KHR2CUgfi9qH4LxduL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p7gniQksHCJ1cpHXsQLEjZjv7zdxuFoCpQQX57FBxBij7NT33HBLgWbskDSVDqw3YnHPqqjMdPaw8JavBbzSX7F",
  "key1": "5wBGyAJF5pKQQbzmEekhgApcnrYxmcHWkJoqN8jBauYANLuhnMEoQbmpqBgP4HCNsBnmQGPZ5hnf5Qc8oPBjr9H7",
  "key2": "4zM8dgnmFTUNnQ91fG7Xd3C7ifmPqPvzj9aymKiJ1C1sDAtcueTpDYXWBG8KToW4JrEj5baRvXrdLHzqwZDqUxxo",
  "key3": "3fyAZafj3FjuWPjr5T6BkkiW8G5x4k9XhwBRUztCMLh1bHbXw3t1yTReBkw9VYrhfSDxLy7oUV1YUnSRT5nitbkG",
  "key4": "5dfjXrinQJPSmTXe2GX34Hp3sJHA5BieP98iKGDnMZbfc21gjkB8wQk9ZFRPXu3vzGDy3sjk7pXNEjHJD3UBnrnk",
  "key5": "4BW4SzaLoP2rdbdrPhzGSrYfW7VekScW8DcurXs5b9gqpYFqG9pCJRSFWAYuVfH2NXvXuVpAHEVCj44MEGPkXVJ7",
  "key6": "ACdjaqTtwrXoksrcofvym5AFwwTe9kQem1mr3n1WQgqJkAZxedWnRBt66P9pTSXehcf5taHViq1wkFScuJzJkbB",
  "key7": "5ata6Bnv5BkHuXRX8fgVcKQLavZ465c3Y4foyw6DFQmmjwpwqGu3c7rr7Uqg3TWoRdMcJzBhuvuekfd347gchyk3",
  "key8": "2RChpNBY22FMMZzURMv6vcDdAw73Wjn9bXCEL3x3qFYtR1cifJfWFRNkDkb89bN6Er3wifeqvFxgttf4wzq2m4Tu",
  "key9": "3ABMUxDavqeRRYrTjYAqTF1ECK2ULVZd9i6NUtzgw6vFKWfMKYw4wXWdcCUREwkJ7B8VDC4dgFD7mid7t5EtrJfa",
  "key10": "2Pihcp7Uqirnpwkqhi78Zm5eTvPx5neDcRUBjVbBKR2cXQ5B2DHwYizfwb6jUq35XbsKw6oDvxFT9D1y4FHVdjW9",
  "key11": "dLzWpZDYvWwa66sMszYE3u1YR9hRyqv1zQzuCyYaSkqv3igapwpLuWFYkAAyfUrYoKjTEAimLXF3HuFzvToeadd",
  "key12": "2vLJWFCm6ywhe9frpUptC9puYoGX4Qwy1j1hGrzXCGE27boJmTK9WFLRjDAFTwDyemMi17L1QGWknErpRF2zN9tZ",
  "key13": "mEhJQESPi7pX7XjQ4uVZtKrGGHEfJibPqWUCnU7APiJ6qRBaM7UTAgfo2hyb83JPfiWMwPSBxRgo6tsZjwYHE4w",
  "key14": "2tmKbaJmXNKtoWHH39gJ3jPGEdPZ864iYijpgYhKqjV7xMpc8coP9aMeoqnRJFzsiCosFrxYSQa6FWXQPvf72hXp",
  "key15": "KkT7TccbvVpFq2YtC89cYssXuH25rdvrDGKkBHPCdikQQANFqsJcQ4akyihXWpYebDVToCsaPi4q8Les6JbTFgf",
  "key16": "3Mg7sTGzZ7NoqpSZQeDSrGgZgUPz8uw6jG4yQTH59h15k1gZJLRYuVhnpCCGe5A4KaQq2tqfgELCtUFQ8FHCRVwu",
  "key17": "2k6bBJVwFgic9DirLBuSJpjQLhtmNzQmb1MoJbN37kour82dyg9djjs5aYTMtSabjHrd9YML6rT1tCtqDd5csr7L",
  "key18": "V7XTBXRjDQoM8qztMox8TUbsLb75LQ8r8b1MpML5HyrpJVhony3DVBtsGk1L6A8MAT1KgGjkCJenaKaASyWnKJT",
  "key19": "iR8Tt9bosw5VqFZrUHYTUtDHeujqr4AtfyCrKhV69VbgrEvedT36A2UF7PNhes3PqTJt9xzq1Gp4hecnLgd9BTF",
  "key20": "2Yrqttq6ThuRkfd6LM3CysK76cTfryM9fHcHkMnNcvAzYTN7CuVyKkXj6FFusVwUTcPT8khXMoni2xqLcw61Q9pH",
  "key21": "2MVzenhaScsbQewG7QRa5rmFpwgDtM6qJ6GNkMVyheQfVm19cUjCbU3To9QBXRiFPkitAtKTcQFznHnLarotcxqk",
  "key22": "4RcncaamiXtMVJAfMcoXWS75rZDHqQz5LmHo38EhhKJRXD34a744CE4X5WvVrdko7m5L69NR3QXizHcveNXshgEZ",
  "key23": "5aFWThsSJoYyR1xS4vKZkomM4BdDWgaUkW5jhAUNRe86fmExpfvowaYdzbQRxF1DNUcceib9ZUTSaJka2Mj91yxx",
  "key24": "28WopuqLwdDoCULY1vHVZCu2bkp29PgxrqWgW4F4KWNbaqy8g6gT9xboCkee4EidtrTATyynVw66Jq42nzUbM72X",
  "key25": "QfG6WmUdohrVKdJDwfp1kF9wxfLEKyCLb7ife38pprDmxwcsmLGJa2NLpUNt3E5wKo9eQPdVDPxU1fFyotABcbK",
  "key26": "26c1pZZT74SZmtFi3GnzfgdUiDnsSvGXv4rRQUioG9HUZQL88hDJdnE3aWwgXjE3CVuB3LxxKUSbrQDXXW6UZvYn",
  "key27": "4rZ2EQnpTmA9yRe1fUqw3ndgHRKhFQvjd8hHNs1ubE4nnUUu1zGikMcAkpZd9dNMgUxKgCXnyUrd5eqxW6Tnem9X",
  "key28": "7o5Yi97Y4pMJEM5hS8xtTy5WJN5U4Tx7VvbpHWZsDPpxZbCiyvaEyE6LthCxLLZ1kXvc2SzS4hhUZFf12K5n5Qf",
  "key29": "4aViyv89pfxWfyuq9YNjZPDpsr35TcsmmcLtX8MCmuwQd1mxRwpWa945CjuZcmmZZ1HHoKjFW97561A2iQeX5Z2y",
  "key30": "4ubhBbsYX7Eu3AwMk4KsMztFB1GMGqU2s7cr7Hy59XN3iD3XU8FDG3kdbciLxin2iPcAZ3bVU6J5WVCXZnCcegKS",
  "key31": "3HutHk8uwtyU4HYVeU1r1jdFwxzG1wCix83CsTUBXcc1FicJCAe39Y8d3cEfQQgKaVAvm8zJ27viuPa793sHc9Wt",
  "key32": "4tBBxzd9wpxT1W3Qte9R6odywumW5ff63F3AWCDryJG5omTwAiRp1b14zS4j3ZxuzDPQcn4P8UAffzmnoDT5zFkz",
  "key33": "4ef46icqVWxB2hqEvnxh7C3JsVXzLhewAxK1EzxSYs55Cv531rmpY7JzBbSaohmGTSt5HpFnWfLBgaNZb36uodHf",
  "key34": "3hU7hH7QtyJXTK9iYFMsftwKkLptjtC6S5FXGGoDWT8iYMoFBabhJcVCNBqNLaEV9tpz1yPkwsrrHiak2qpBVAvr",
  "key35": "4zF3UtomzhacZvnJGMpLwgzgP8H3HKuhfT1RWK56xZJZPZycqAT7xsZf9WkA9R2dV93GttYVPxjU9cJmrdTdTYyh",
  "key36": "3pwGZMrmYLjZJykE7gnLnByJNoZuRwBsttn1jRfVPAHKypCph7jSS3ewyiAQ4RxvXeZKLhXGxHjpt6wd4ehBa8Kj",
  "key37": "xA3VFybrf16sYhaZRW1TmBYmDx3trbcKNvENCpPGDLZdocoDL4ZeRVrADJ2TbzEScfbEBWsBykhmDRoGAEjVxow",
  "key38": "5JfbxncqjWY2vcSCtaV7NANpc2t6LRLGtGh6csY21DoNQrEnTu9tPUH4E1YGZfpDhsLEBcBawvA1UfJ8B6UAsQJf",
  "key39": "tM6AQvdAiysdRL8FSf1e8fsotecrXDHwRohzkhFBvZ8zLu9ggz63bb6fHijPEjX2Yfwgef7XLSiC9x5m65ehGpv",
  "key40": "oZTwmVGa2b9htMEvmypEZS5x3F6QNU7EgV4r4ZETRXcLUWYPy25vRxZYTRprVpztfB2ToU8bVaGQbwZcFUaQqbD",
  "key41": "23hY7XbgKwgkTywCpP8Lm8CDFwtquahDAgGw96BYP8VCPwYkN8prT4Pb9ayarYk7Zes6NQ144xwARqjwxy6TmW4A",
  "key42": "3DA5XFT5KyWgALH3AZd1bqjNMz64YxGj832rxX4YjctvJ8wBwz9PoaHeMtAh3BG9RTUKmTQh6RMN41q1uxtjnV7z",
  "key43": "4brSDbP4dZKZKzZSXSWW3nqwGfa8XhFseJjdT2RWRhXbweqhsgDrw25BHp3X9haGwCKCrd2REUe4BPZjSbPqf2JY",
  "key44": "3gy1x7nE3Us2Dy2VXq3ebjmSGor118xi8vSANZkXrEfiqMEDp3PMjafQgRA1g7ZVEUtEp2zaYiS3A1PwsSz9S2RC",
  "key45": "4WeMmURnJYd443raxYUvncF4xopqsJUPTCACkeXEQZj4bt4aUkeNMA3eX7mHL5JqTj8KNSCHyhbbhfPuimvuNnvd",
  "key46": "5YKR6tcDNdCjZTLGtGdsiErXqmbPDdsL7YKSCnJYBUzjhyF95ueJafNqWt7TPQev2zL1JcPCKdJvudtuSGtFo12T",
  "key47": "5ACqbU7oGAApc4DvBTKaHJTvVXEWi79y6ryw16f9Td9g32rKyR945i7oWooJ8KpnqUawoGmBAJyVSgoSerqsFHaE",
  "key48": "3yakZy2guDyhXZeqzH46WVxNHCSb6DrQ8Aw6jsaTBU6D4g1JWwTrFaPdDGL2n6EqWckgxy8J75u9AUofhQv8AFYK",
  "key49": "4uGYBtF5cfsphuv6CnT62Tr27Kf8AdT4VzaqHvBH55eLfCmovY891vqSp4vpTUgu5CToy2JErjmcLcAeYXPsj8QH"
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
