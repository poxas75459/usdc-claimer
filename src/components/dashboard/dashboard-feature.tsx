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
    "51sD4Lfnuryzfe4GkKjoKLv5jeEwM74hRW8Y6AmbpUJFLo958DRKmfVJSndDCky88AJfMVbRzVgfPf8oSBan5Yd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56MtEeqYxaKuNJBBKQhWKfEqe8s2oLjsvsJPDXb5kaPzpq9pEmqn13HNNZVkaTv8zTeaLbP5hBPCdXRgnxRJ28dT",
  "key1": "BvGYHWWY8fQfSV3D622xHM5pqsZimyyHJkiZN7PKQUcakis2yCekDi22NcjnE5GXNrdD4J7RH2JmkR8KVNAPZeU",
  "key2": "5uNoLwS4jcYGZkMpuFfpTjZkirLdKTSjyFF2cJs5Gi5Zz84Qjte3MDp2USzdy3awBDtVkiEDbdzLC2XVTspayFr2",
  "key3": "5hZbePT1LjGGR41otULLVnGF8qaqEW1oCHk18UaiVLS76CE1gZ35acnghktRYHmrJLGHMYFo9GLSTyfXwCpnpnqW",
  "key4": "UBMkjn5MM8Hzd6PuktoPgu9GwA5xR4NQbbmTU4n5ejr4d9dXkKA6pdGfj5E9pw8pc5PbkAJFvBwyLGW7pNofkZT",
  "key5": "4Qt3XkDgxQtt9p1XvfSaFuDvxzc5fhoeLSxj6NbePiCevEVj4vB2QSyjBESkPcojNvZqZsMep66P4bohgQzD6Xzx",
  "key6": "ismpsMjz8ert3Qg41bjxtgz6SrfYwQ5L5x7YjZz6T4jzjxXXakM2US3xGGZActZVXKqXU32boFj6s2WSjJAj1Ct",
  "key7": "3apUwdytfYWLm4RnjumqFdtHP6WNgLx75ss7yCq8ca482AaWj7bwT4srKQ8WYoiU9RjWUu21BCvuzxqWNoaTEpSJ",
  "key8": "5Y2x5KNzCYUQB2TJmW4JyHBjHkFxfyEEeZ3t6ThSYiKVzjYBpJ8MxSZwZq7nBefme2WzEGoCsboZG6hSZpqYuCq4",
  "key9": "tH8Ncot7f85wqECPhMv1W23mfZSxN64ggdG2HkLsbaw6pZoM1Z49qH7v24mCU74kVWZJxR2sjnkyzF5imGawDn3",
  "key10": "3Qo4FM4B3KpPWZQAeyd7PCRjug6GVkgprmFrENriCQwTJjtk3KnLcYxnifeCH4YqnTZgdGkP5DdmjvEpWKSca1Zd",
  "key11": "2gwTPJGMuGN1dafFW3gPWshVDHTS8hiu3kUfTgCFAudPopnFcNNyLvwFmqvrLw37TryTSwTb1N2XZPnkrwKbfe4P",
  "key12": "4yw1Zrf2Hso9SGPTRSHmuEh5na9bcLbZQAG99nw4LFQVGfgracBvHF5a2YZ4p7CJ2mzyxQjRK6m4iSy3h3Xhps5n",
  "key13": "5dEaWUx7fWmHS9nFXD6MknYxXpqrRgNanPTuSbCrruWYqP4mpo3CwgCcTTnL7NkUsYZ4DNWgcg94wrrU1mRNscBm",
  "key14": "3s1Tdfpmbx2zER5beS7DfV2132aXNT29Mj3opqLAxkAjd3AU6fb9RJmYbJQWtxptxWkuRXWYgXQ73YKtj7zbQRjs",
  "key15": "MHJNSVuf4hnJJnpCYWqa7doXQ124vX6K4j7C3qKUaZixdYLzkKUve7AGfcnqmCk2ZqUqKssxQFx7wZk252vzwWZ",
  "key16": "4Eotdj9Xo19CmkEjVNaHQkkyELiPdZpHRFj19Po4F66cHp38eH5TcQXG4xwXVHspWbfeWjPYZuL5PjvhsMu6GgFM",
  "key17": "6NPfr5K7FhSs9PZaLepEMAVVqRSruxxBrETcYzVrdSKeCB76FDx5whXqYLjCJKs6o9GCyxseV5ddcqDAhCA55G7",
  "key18": "292uQC47PaKfBa4ptBsbHATnStL6KXdLQoYvWUBmT1FY84WjEUZnm4gJdthwvp7FmvY98t4RqoEmZKwj1hNonwzh",
  "key19": "2zsKMghfvqe3GXS8oZBKhCHJp8wExj2kbhN52j8svGp8BAfDJUPDEaveqmauk6VTmxQ7CbyLbiWPz143hXhtN5da",
  "key20": "5TQkV8HYbUNj91gfvEWJDuhXxHr7QKC4HLav8DvXrtenFnm9HhPZKzfSmnRXtk2d5iLLHafg7srDiCkVUKn4PDy1",
  "key21": "37vym8y8DuVYwxwgEAU4invCkkJ5oxdwHHs5mLNrNRU2NqhiSn58ayj6hodPbjHE5h79oderc7W7VLV5GAFMP4ZT",
  "key22": "KjNaS9NYrLzNYA1ixp6gM2zNzGddcjRLThS95LqGKbE2yHB25GgAJDmXT66WWWKgGvpGbdYdtSRwmHzDxy5QU7M",
  "key23": "5KbzbnifgWBcoM8UvFbDjTRQ1nThmnYCp6zsvvPkrKJTopab5EfGPVPvg4eQbfgyjBq3rZenmsvPsx3u6v3ajoWc",
  "key24": "2JCn4Jrt1UCbKc1YZGRbeyu9kvHnt6yEWeRfqwkQJq3RVCMMttTQT4hQw9dpoMdF3sauupfNRXQZeEQ63d5TyT3E",
  "key25": "3pBALGBTe3M4RwDknhbSkwdVFJzCWVhEzoqk5V4VLFXJg59TuWqSeNawgDzb4LxYqFe3YFgKeTKZDUWWEtKaoKSz",
  "key26": "2WqSPAdRP77zuosDfUCeCb9LMUgSB6RddekaD7WV4tUsyP7FQYeTfsEMCxcXTZHQFHSvSDBiPv2WtPr4sPytdEPw",
  "key27": "sUsxb22dULb7B7RwCVrsEbxPR9xuJPmFaQcghiTAP66wR7dRLY2mn2hU35p6cdr97X8zC9zv2RVeZQ8zNC9TH5x",
  "key28": "27uVGonYGGoDc33kiYWWnwpgJqYZ9HeW3XGpmLCS8WNHowhcaXeHDAZmeDsoh5CLhQ6kgxTGNPyoQSseiQgikVYU",
  "key29": "2FZp62LjQniiy2nTT5g76gBBDx6z36fdc8MXe67aYZUU6Pp6vZm6BQtxNgZsKTUXRYvCvUeBkpe7hFoNAmjQUK7h",
  "key30": "2ipZyv6kWeckYaxZ9mUwRn81KJkpfHp17yakpGK53zM7uW3gJgEJJBiKzUxhmk4sXfagV9nT1z4TjTppM7QifhJA",
  "key31": "4V1m8NwNt5rRuC9q88dr695pHnUBuRwWJJXCZXoCSZJga1ZVi1aAwNLVw2ZZur5ZeTxUSa9jmjDZXFvv7hUxq53z",
  "key32": "2FUCMcEyVVfB7Swg2RthkbUSgE5CQAcctxNUBDwmBsd8XcTRdog3oGoj4CCZ2FYw2wyxvAGxsJ4F6z1wZz7St3m2",
  "key33": "2DceoWtnM5cLDpvBwKkPUH1oxb71HUyWUwP7L23aomhAjYfckM1eFKMTPQwVFBGuhMgrXcJSYdZ5yA2c9bjVucMD",
  "key34": "4zzVEDuAjUouhdp2zqk7xq8ZvUVNC4BawmfWMHfadacYWiLFvEtKLR77UyyCRjkq33Rbd7VaGmpJVqbZfdS4v5Kw",
  "key35": "VAA9n5YoQg1fzzxa949Q3tepYsiPv7LEhQ2Y75r1yWTiXqwhvrT2ZnZgbsFq9mMvUV2fzXCHh2eRUT8R2LgFXsV"
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
