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
    "3P4dfw5dRSWf3nRGzTBjozSWd1qjFYDYZrYiVS6G3renG29HrkPHWmTxGu8ro93w99z5FMCM7pS63KU9T5AYgq2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24YpQEgepD2gqjkV67Q8bYq4zqcwGc8EjLfVTcm2YEZpPzRUwPCQoP1MTWZxkJtqUh9bUr6BZaWupQYisLcMBXbt",
  "key1": "47Wyeza1Hb98Bdy3LYUw97e6m198cKkUX1fSyhhH3QP8hvHyH9auM8CUppU3ZdmJi9NmbgvJZbS95eekb3wcuxwj",
  "key2": "dae7pK9M2vQqQeRR5twkE6qJDanQQKVNC2UA9rjoMBtsxajYXE6YHXhD9QShdAH7cZT2ZFPdmyQMbRBkmziJCr6",
  "key3": "5hDbexgTq2Xnx2p2oQQKkJx33eRx2u7DvYPcyYdQbGB38EWc7PYmFjjUjZawZpDJBpc4J86XhX8S4cKcUYKVWjjb",
  "key4": "EmSfnp1EHMLo4ZeNRXvoqb2szkArD52FiHkbm3xMDM8EparUxZvArznsT6YJcUsm2xAmA6vNpJYTybzWUbwzsMV",
  "key5": "2GPHbgJfcx92rb6YLBKUSeGjgfuidkzwdCeYy4vsN8TdzFxjroG49yEVttaQXN68tGtKbKtpkBLL3faqFrCakdEq",
  "key6": "hZdCZTuEmmBaZKi5rw55aU3EnPBrMVaLo3gkbRxiaibRuf9heHvfGoBWYkq5RArEJ9HbfCfoxi8BwTxofD7qLdj",
  "key7": "4XDhofhNhTyLaERK9ZnezLAwyTNKKX9HWGTKEbLaqFeHFyJiZgkZwDmK15i8E9Pc21NkGwtqFigUpfKhuYpJK2aw",
  "key8": "EXbo88eZFFtSpYE8PwjZSWYZzKxR3AgMmhZC5mZBRQBi7Q6xaWthYpnzWK9bsrchFAyk4P7eBP3mgCtocJzDEke",
  "key9": "RuME7r26ZTatQmsQhwrkEi7TnJtJUfuuoxVmxX6hp8gcMfw7iCH4y5bLWUoBXcgVNZf6hTjtyiE2DuHNm3Edifd",
  "key10": "3AFptbrotAKUc8oHbRgowoWGV4cEaAJ3s72n6Lf7wLTRPTJPucH6ayD3q1be1T5rJFNrkhgippzE4aUhDWf6QexL",
  "key11": "3hdvt8vsRkKcnNj7z5c6Lzc1rYFtUZGrEx8Sd9nHX97MmKYzWksFrLhnNjYC1KZfxwp3dn9Ak2m8bfNck6vpX4Sm",
  "key12": "3jf5vgB6yMN5aqwerzXUHuQtWuEEYVXafL6N6eWmUciBEyb41raUpBmFjZanK3qe91vqgeH7B1iG9xYWtDRQu6nG",
  "key13": "ZteySBu9iafwSyn53pNUfjQBgzSd6oNYRoHKvPukGXAtcvxEDxvbX4Z3DV1rBzHPg5cymmnQafQeALrWin4j5Ug",
  "key14": "9syU4GDWV9TuKFuwqfx4sZQarLkf7hrk1KiWiNUncrsSHkUbL2G32QAn2miGYE6xVWnGxEPZYuA2dKAk2oQjgsK",
  "key15": "4n1acPvrxwWe2dHoLyHfkCViFpsEQJgKmYCuNGMNftBKcjKoGde75CthsJzTSHQRC6h9WeUsFDGDczX8qVZjh311",
  "key16": "4L6MW7YL6twknY4c63Sh1qR1KPCYvRDLye7rJNdVjBRtnLAXTaPPXbNpD5BJE8sAZvUGKq71Ei7VtptEsgXqndum",
  "key17": "iJrunpRKZbRHrSc5wBfkvFz71hJd1p8Mr1vBDD1YYJFiHH2ucNmmr1M6i3Bdn4zdC45MTYx1HBjgXojkEiXrcDr",
  "key18": "2uGnQGQ3LrinyFpGRbpxY5DsqqqzU7FPDXwDCzhCnTJLU5grBYxiAhHtUUXqDJRbny5auMQ918eebCHYG1vvr9fR",
  "key19": "Y9zM3RQmFWBVFeeRE5Vjgo87Uza4XGVJ8KMKtV6FQ2ySmtGwBsRK6xjzzvBQNDuafAWDNoQkSQdbGiA1QPJMeAs",
  "key20": "3uYbiQkETjvwBQaKeqYgoVPbPUUXkFvesCeoSMapNhSSRPE5zVon1bd9eZ3dtC9v5T19ZA4i2JdnW5nNjmFSf9Vo",
  "key21": "53Pj1hx1mycFzBjZWtHe5SnMsdoRRB4nv2XdaPcDJnBFSmTrhvtSBwH83Nwr76w8NcijXZKAzSb8q2WSC3PALkZz",
  "key22": "3f8TGN4tkwjsN5oey3YwjjTCJuJsmrdSpYeecEPAoYGKFhYKu1NLcpny9Q9X94MrXYF3tSgzWQKfBWey15M81fjt",
  "key23": "zDShg6gCG7ttSjzq8KkRTEQWmzdAiXMCTNBFxLD1M7n7vzmVtNRHEuxincxAiEwbwpMX1Uekh2KhmQ7dBNNuevx",
  "key24": "48EkFC3DYS84okQsNTUuTcQweEx9DUbRju96B6yt3wu8jhagw4NpVwidVCZYcfaXx8BnRfmSx8agTpotAY6WL64G",
  "key25": "2NctbSeZ8vmWF3iRF5tuvtnNw5LQzf4rTKqRL3qVmXEHYY1xdoP1s8TnFXa686BD9zMA22SYFia7VbYTEeHxbkYq",
  "key26": "5xxgDaJm2E6p7VKergSmLwMdBfpKtyaYBvsFJprkxvH6bSkigRCh3JgbPgbUeLsxhKvHML5nwmKySyLkfaoeREx7",
  "key27": "3LwAZ33ZL26qrGdvPjJRkQk83z2VVdp1eJCdUzQTApA44bGAD7W643bG28r1BPyTXCVxGjMU72F1JX5pEHfdGvVL",
  "key28": "2gznU1Zo1wjdb3sSSqWuwKrSfonLXg1PjbVdx11rVdMpjmydFHJvHT41gzU21usMrS1oLjP9oCNZGporUy6EfTbo"
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
