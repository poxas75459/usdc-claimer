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
    "3DYwguL6d8PcPuamyVVh9DgX57Fc1UPiVr7PcWuvUSKp3UZBAudjWAv4nBtVmeqoQgHUJsWSpLBtJ8gCL34WcMvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TwL3ntHuGG69EYRGkeUJo8EffwVK9z7pDxGrbSGS3DbYjrMKr2EYGayKBShp9SyCKteHa9N8A9xP6avbL9B3kPA",
  "key1": "2XPcKWaBH1WXJAsvryx9a2tc8gvNMTYbmXc2KpGYhSEs2qHYBVQ4qpi3SSarGWogxcegC8iJytEaKedsopzUJmpg",
  "key2": "4fEoZNyDG1mx9SuGL1d4RHNFQvtsMQFk2yuAQTKd5mL7QRMAuVdjwsqJaei91zUjbXUn6yAQGHAQukW9AnLdFWFM",
  "key3": "8udgeQDuqk4RtrfTV9PKMmkMUZp2ScD6gWmFrHetbbc5n86u5bpuQusMuKKzoNZ2tWzrZuva1f2w36gZgWSHShF",
  "key4": "3pVgs5dUMhAJkSE6yH6xZ264mpzkQzgAwJU5YBqBEWjYjbSjRgkftxzpg16cFMGCHNQdVuqPybMcyJAZkkzMgafp",
  "key5": "5TECEoqm9YFz4v2VsTPEWsZ91sqR5U5wVhioVU4ZmwFcNKzVMBiEV6QF1SLigQmP2zYaAEpEyiH6XjJfALnU3sLs",
  "key6": "bEy2ZL5GTSrtVxYXXCdtT8Zkd63Kbnq2XaQxF4E6MTsxDMLYMNfZAC9YtuKoGkbV4iKRrdxi6mQ5tXq8HhyEQBv",
  "key7": "5VQX6vACDuiKArFPYCe9DZ9FEzbtUL67GPcnN1hYogKaZnhAFYpNdKS2WFoeEHTHEaQvsTgydM93189oAkP6qV7T",
  "key8": "57bL8i7Vf1oJMiJsqEtsuXB5bfznZmNAU22vRRihaqjSUsKhfvLmG75U9v57H3oucYs5nxUWZDVyVeEGeruH3j1u",
  "key9": "4McsEXrYvG7G9LmXWi9w44a5wC1neM3CFxRqYb5Nd55Z7sgyQaFHQ2bz3WaeYLaXKvrcCJdEpvbWp6ybNJJkjR9u",
  "key10": "3fPnDKjJmj3HTNkDvqdhdSmkpiPy1t8SztUcyCexHNBySN9Qz51q1bYb9PHdz6CuRcSzXVeLvBtX2ApuaM89zkB5",
  "key11": "2y1WkoCbUswAyp4hdfG4V68aTH51oLR8csMN9vfdBN3kcwqXf8zFjh3Tcd4zKUf5mnFPUeC5MwzkzEJqoLske5EK",
  "key12": "5FgbAd58DqauvEt14DyJgrwQn1HnP5dqquR1NwghYvkCnQrum86CtR4UQUmuy6NkmYmMrLCWKnHDkLphgqQG8b7V",
  "key13": "2t7uq7YQMsutabTCg8ue5xqRZjauaFmHUhS76wiRQR57gvTWxBHV1PyTaZy3NXhhqmzrPn6vd3ffkR1GLGSD46bU",
  "key14": "kUGWnhziff6wSUEfjhRqenHrXwWxFMHVffw5ySU1pKvcmPs3rV6aWxLZKC6De6pFRsWn7za3Af2dRYwUEE3Ui3z",
  "key15": "4w5wtPMysBofPx922PdPQ2f3MNnFEGRtZGNWRab8FYXzjjvCADtQMnJYCfNABXcQarmdZALpjD7LFCwLsgSABFn1",
  "key16": "4ur43zBEmjpVtgba4L1SW6XDvpw5mg6py2R9C2due3jZb4JMzasbsKBzPAYLJTcRW33KXJz3sRHwZKs6PcF48FTs",
  "key17": "oiENdXuZ6QkNScUJ7TRA3FvkfDPfkyX6f2DLaPorqCneVoQrveZMz8KbjsUiEkX9Amh78TMVUGqjFQmQJ3pfLtJ",
  "key18": "48ma3eVNojDVQVPpoKuWtk2xQggR7XLu8erdfK6mYvXLzo48mH1qNjftVBwUZTmRjVf2vvqRjsX1xyF3MFJ39s75",
  "key19": "3Y4MhEStGFsdp6RubYVhZr57wvhxraPsH2kVMKdU7boYea1bvWAqEP4W4kZjMeWge2SpgbJqbQMWWxJeJJ7fVV4S",
  "key20": "FotQriM252CRnXrGyYU3NSG4J3nz1VGa3YfpQN1R9FJ1gW4QEgvnzMKsuTr8H4ediEH5mNxxrWCbNChnX7t9BSL",
  "key21": "WZnMP1WuUUM8okueuZvLbBSCTdAzms8UQUCtpzhw99xGbgrsAbKJdzGC5atjVQdL2HS5cWCuxWhH8jrehzbHmsw",
  "key22": "2RNyDB7CXbK18rerwUxVMTiAzW42MEYpGWCaJtgvi5cWUhYjYgvTfez4MXnqE4hLvhgkQLVBGFeZqpbzCkkozHyH",
  "key23": "4J6MuLY9n5d7aJqXcoSY1F9oNDknXcpzbMWH7AhANNziVUPwRyx2gzUSC25Fw28yhFXDd3yL7Tr8K9js1iZQwiiz",
  "key24": "BQ6MAc8Ht5KRVknbXZy8AQx3nZN2rpQG3PD5bSY5FeZMLFSfu9NXvUP2znpPW9cnpziqmmDKSi3v2GNRP2TcLbz",
  "key25": "4qdbcZ3WgbkdV3WmMWbHLFY74DWD2qiKuipjofcRQYG2WL3BZdYRRH3Xhcdv1wdi3JWDM3nnF8gEgnxwd6mWX9dU",
  "key26": "3dEUK7ucrRdi1Let45GervDdXKb48VthnfW1vWEAVvLmS9bh9qg4zMpRYrNq5ZPGnVijZnFmGbAUMFtAzwQKub1i",
  "key27": "5FvMG2H1vTbYyvo1veeNR5WXX4xkvve6z8Lkp35DfuMXWJ36Z9WNaTi3r6dvk39n3rrmUyGw4n5y9nrL61XwUY4E",
  "key28": "iDELeayE9jKne12UGTnGsy98GiEM27zdHmdwAiaLH4RBaJEPH9L2Kdo9ZeGyLPqGst1jMFbzJCt5qQSw19RdrhR",
  "key29": "BohrDTCe3WiyfpKFDqx2UHHoQK4Jwka43oqjCBaktQymC623ZgYdpPFX8HAoJsMQcFbLtoWX3UX9WLasYQfPoo9",
  "key30": "58zTYPcqVv7ZmqHDXtCpiv4jfkGAwoZbLjc6ViLVqyWwxndiZGEXeK9tUwhjKWp3uuvmvn9jtkxJEJ3zNCNZXjXJ",
  "key31": "4zfFpNw7r6pkiAyr2sQk92xYNd3bScrS65886bHbrqMLAzxCQ32q9hW26cQvT6JoeBHV3s1QYtCXitRTWr8n186x",
  "key32": "4KdtCEUJhgh2k7Y3F8wuLythssfqjYjsfGADwfwu5Ec94vyF1Um2Xucdu26Rm9KFQGG6vtAXVKAcAyQ9Vrkyodoj",
  "key33": "5cCoXaVNzuRwUdMKVxdGmfDDr5Ru5KXnSRyX55eso8NcrkimxV75ADNAB87Xi1N3j7gMqCnF5kQvH8aDpGCsEjrX",
  "key34": "5jEWQDpWSqGeJ1vMHwWWq2C3gFUCwa9FNXEENPbnfangXE5ed7hT3Ldp222shom2iYV89ifbSmhAf28i4ziFkHkp",
  "key35": "2PZQy6pyrqmr8JS7baeHJMTNqByWgLZqW73R8ZZDWENg9bCE977YqQwN4v6k4d7uPhLteAiQBjSJazjPUXijEB37",
  "key36": "kQvgNBDBvrvWqVnT7UuiU1dSYUvnNz4rtfnFAvm8VdkSpmr3GjnWUDJBf9mREQ6So9uk3ZZim663UE8ATTR4dPL",
  "key37": "5449cirZuERdiBLCc2eHiJYSWqmWKYDb7Ei3Cu21o598gz2Ekk73rK2jA1j6q5zoDKZEqoP8bQiK45vXYt9GC1v2",
  "key38": "2tuTdqVMAY4L2kP4tbYgHTVQPREkTGahKhcBn1U4NGUfXcdxvybAupoZ5TZzwzaYZZPB8NZC6BPGBbDXyqd7p9R3",
  "key39": "4xEqjoBffXXHbvgx7GwYo3x1FG2VN5GagSRFBCAR7aFdMmcphXCHRL4hr3WPdsTfwAqZMb8HTZ2xeo4kzGBZhqNH",
  "key40": "4T2srm4KcPouWLLtHLoqFZK4eVnz7e1AMSXFwL1QJKSFVU6SubbpQbrHCs4UDyqdxn99nZLa3UkuaVouFdPmNaSp",
  "key41": "3VLzxNvTJ85CStC6kQdnh8EN7wwzKh49jCeiQzC7y8FXSfT9JsDfwFZhyYKARf4ziawQh6BpNGWYsMXM1WKeC1rX",
  "key42": "3AiiWvqv7r6aTqHcehKyhJqA36PTMmJR1n1XdWiNnzXZ1K1A8cqGyMSmHDzwpWohAeKc7bqXnSGDprbXcsnv15c6",
  "key43": "5cLNjM7x9pbMzX9yHF8DDV5FmG5TaXe1V7zATwMCEMviRZDGtX1p5U6VQgHkZVSFdWVD5FQCPVqZZ8F2JXiehhXz"
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
