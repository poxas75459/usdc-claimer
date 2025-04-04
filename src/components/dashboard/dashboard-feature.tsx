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
    "5KrsdrxSjyiUQV6nnNB9o1SS3TgAm7UrY6JMDCWarEPYTyY5U52GEBhevwqz5TnN7SuqLgFjUqMGpEckJCRD11NJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KoVvdHMTYUsxYVmz3gEF3T39Kj6keeftgGvKHZyLmMSqn5j19hbYAkmWFxv2iMN4kaNWjUHUCeKeuyLAnkVUoWb",
  "key1": "q8ve3qWtT2EUiAw3g4DkgcPtXKKJLkNagzkLdzjK9V3214AWcj9xE68LYAjhEypiTBGPn19AWhaj1LsmmS34Jo5",
  "key2": "4buddzQaRoif4CzgURfi3JLrgfuTJGTNjmEBU7JaHMVmfrSwotMxbB12aqDNg1zt1bKgamZ3LqUxYvn5u7GarHXu",
  "key3": "3YZeTbbYbqBZQhBKg3WHS6MSUtqWxTxLUFAbJBW4YSUmXNizMys8f6rBXZ9iYGiUUjZXEVdgLzA7zGzPVK5yVpR3",
  "key4": "ZhisQdqwiEsyRoJCMA9Si41uL8ZCYyd4djCs6S8EhaEc8fqHVZHE3NKeK34Dc3mGPzCAyDedD5qdbKNjQZoVKpJ",
  "key5": "2MKiy2k237ixhdACt2cDaRqP7VnzXuCDe66CQXLYXdNcEknnFYmPfzdtKBjfzkB2jRmq5BUoiFHh8EF4VPB7UtWo",
  "key6": "4UJTZ6L9rnCFnS1FtT76jqb9vXya24JW1P15rhpgmSLYmocAhriuXGVtNZfJNhBmKM9mNQ2bigau6CGLTjcMBs86",
  "key7": "4oWakLcytPyvzxGMeh6g1D4Ae3R4L71eTUY8xh3kTs8WuNh7vvsinR1ApvneR8NE1tBhcj8vQVujAtmVUMrJ3NQw",
  "key8": "5qMtzVGjBkWBLBVbSHpsQinLWzCmF29heievpmJCxNBSaB3rBhcCX4eWHanNr7QfxaGydCmZYq9XzKHkZSfChE3a",
  "key9": "2xkQ6cRR4qygwDciTnQaZQNFBzUZQuFwqnYACZAachdtSVy5ez3o5k9FJ8YWMcykBeioDQGrYNpUn89chCCSdMSo",
  "key10": "3D8cnA7K5e9GDJSmDx4zKRtST5F9RiES8U9Pdqs2bemE9UphBmk9HqXt4TJpCgWnraUKnjjaBT45b8hMv9CLdn4y",
  "key11": "GsceGhVBadz9EijxoidCCz9Nh3rB34SomteF76D8qpoJRsfLRpv8z8Y868JkFFzgpTpFuUpJvPkdtTdboFy8Pwg",
  "key12": "45ELFGeAgYbZ77m53Nq5w55NBVQWcwjFNVbNBBk9hR9F54uTcQKLpKhZfTNCPCuTd8eLG5tBtFj9GuQCYCzo91Yy",
  "key13": "2yFbjq1VhQKqE7vxvGYDvYxaN8E4Nn3CWAfWMYfYvgxo2PECnRDEGGD6Wiz1oiGGqNcQ6yFS89WmMWoCXdrC57ND",
  "key14": "vuHc7rce4EEo5wGJ3USH7RUS5aRfvZsq1WJ3soAjqA5JYFKh3PMC3LXAtGxFjPsir4d1oNueHSS5h8e5YUApd98",
  "key15": "673vhUkrY2YAx6gz5HPhvJQUhYv5odfyZSxBntHUQhQeoVzXQfZSdnLHKpJAdfmNHpevwfbYSqcnZWtgSSj9g7Hh",
  "key16": "67SrXXkVJyAQr2JPmjxWP7rZQkCLn71tPVa6tM5Sesr1rAnEdJ73nm2ATEK4YvzDAs2y5nazFUQTEPVs7vY8FkeR",
  "key17": "4AZWr1QYM6PNdFxZb4Vd6He255BjbhhngdauFArHHEGYXe9CVdofHzo3mjYBGX2XcC7H3SrJ5meq9pNWcwfTJdXu",
  "key18": "2dEGVrKF12rQUU1mYnF6n27sz6Ebvwfh5DYdsANxzKJi8XuMVJG9ZR424CanNRHj5Cf7K7uBHLeV1bNUS2X3hZGD",
  "key19": "2bimtR3hYVEgyqudh2shigDY6tmhzKELKaPHkMf8r1feB881mAiU5FSiaQYSxA3ByHFg16GpWkXku7mhSKUAVsrY",
  "key20": "5BnAgacjMnL6x1QGUCDrkGq56ev8gBYcMpLiMh9P2nGz4RJbzhfmgJWpJxeRoQJKwWKCWoUb3UiTCFGNTqoMaYkE",
  "key21": "5mh3Ewsn4fApAx75JGkQxz32RZBHvMoPzdwP8Cm44A83eXzq9WwdrJAQPczWR5q6pJNoXPuTFhRdP12ukNJay2eA",
  "key22": "2URhG3hdMqvhv9bHGJq4TFyFKAw8kj21MEQYnxD5mfY6hWzMNRQZv7VX6JFeHXmrqSwwKM6EV5TxuLcb5uvczKRS",
  "key23": "5Q6CZnMCuhGk5pgX1WSazi47yxVCa8VbvvbyikBBg6LLhiry6gEyEEjZyAThjVGQBL2SkG1S6jNqswcpfT3xvvhW",
  "key24": "rQgYHdDAeGH8jZ2Gisp47ZQvj53HAVJcEaKqLAz6iGv4zrwj94CRDh7JsEee9vofkChqWaSDHrEcQqN8ahpboKA",
  "key25": "cQTyzCbAH4GkCoANGXAmLGfEUVo8Yf2Zq8gMSKTQ6cmnSEi1TRs3Szr5zSAyjxstqpF8YfbsejowVSzm73UarEy",
  "key26": "3b5BBB3NaLGhSUDs24P5NSXavjiqNvQmPQHWoVDGZYSLC1e2ZwW3UEreSBApuikfKfTyd81yCVuytncD5hxVxsmx",
  "key27": "5QGC86GRB4XwFp8XaDdDa1wmnTYK8paz7g8d6765QVMySdEVkryunZhhkktRi4CJj7cDrjS67SaoAbbki8GinYSV",
  "key28": "Lh5bPcLPou7pqFpTZFgfFUCMgk7eno8oBveJL3VLV5NJ981q9c2AEKJAeAq68amuVW9DzMdL7o7soqUHVnGEuDg",
  "key29": "2Nm1HWphxHhTe5om9kEDepj2rh24e54TBWTmjgN6AiySapVDjsLrRv94MLyrnBotPCzKHRVQnsBFJvKTqo8dZ1Eh",
  "key30": "5G5kjdopsZ7QGbTaDZpu2NyShDLdB3mQMn8wKa85hN3qneQi8QrUuVzC8Ao4u3rnrjqyDPSAqNdmw24QvSSePh6p",
  "key31": "xrZNgHRj7XTFkYZxZeeRy3AshKHyYJLBuHk88G7wjboCBGmpfuYS9XATqGh7heyWGndZx5Sk3GQHFjTMLuv2HZy",
  "key32": "4QUdoTsMEKRjNS3qnQxNpUybTk5GpAKqDJWUkLikiAgN4Vk9LuFFzLhBoBtz4rttyVaN5MjLH95iJURxX8qowxsY",
  "key33": "5WH6xE6kL8E7ggongtoQbfjgkzWWC9f3Jb3RnrxbcTXrUZpGq6VDEAUs6e1nwh2fhj112KJj7cZeRtBT6TCjHCLC",
  "key34": "4PdoxcNaADGsWTJnSTqCeGDnmCaW53NrkmcEz5H94nSggYhKKTKwk3ovXbXXrSQBCgXp1iLFge5jDwJW9Myk8M6F",
  "key35": "6wyKuvg2to6eSNYcLA8n8XoiyRhwsepGmRe2S4pihxZSgpp9XZH4HBNYK2HxS4WeYBPWa5feuvBwZK8KGYrX9o1"
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
