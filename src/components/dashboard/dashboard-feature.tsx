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
    "3fsBJE898e1pEZykH2cfpRmj3w8nT5GHCgtursfmWeqEvKHn1t5pLi9EaLJ75RtLVnCnwRvKjxLpAp89wkbogkGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cAVC3naAJ1o8gfGRjwNWkkkpXyBfGSjLrkSJ1oyxj9ay3HEyzEmgNzhbekYmF6qJNcatEVWnkpwokAa3D9mjvSh",
  "key1": "3i9SJaqzW9WnrsTcDbaNm6KcU6KRVqEnMyoibp6g1C1VrjFcJSCRcAxt9zeXcNgDMtSmCobYkKYjogSSaiTBPqgh",
  "key2": "5xQ97iaYWRxAW1Ben2J74JeAmhFtt9CfR73bZzmC9bXQTdJSZkVt9BB9QnN1kUKsubKPNtn3QVjeG6xDNuzXk2wF",
  "key3": "4Y6WxHrXmurd6BwC893gs8Ey1cEDVBzJBmgY5Twxzy6xkTxFh5j15UzQ1zkLQV7KzeiXD5wxJ78tztep9QtQXWTq",
  "key4": "5Y9B6Yo9ASxa4wrFAbmz6rru9bi6ooCC6wgEXJqcpdpTpv75C4m57xURd1kTQQHLMQV52tGZg5ear5Yr9LAhJ4tP",
  "key5": "2KNyYqjzL2sjjGDRsZyREytZcjKSUdkNdr6Pkgs9hF6t9UXKzPXDKFfPHBGx7UPGvkWYTYTd1WrkV3oXFioenB3d",
  "key6": "2C5w5qUws7mScyefLNrvveiNto2X37rkbdPyPwqGhUmaeKKFJoLhi7uV5egcoim6K6Xvd6U1vhAbmomzgYWXcB4c",
  "key7": "geFXRfELEr4G1mniyMy5JoiXHrXckRdSqApyDZ2JqW9KtWJfPgrtzo9ndYRUaXqvrjKMW7cHWfsoNhWLVZ5mSx5",
  "key8": "iJiymeF3gTdjknqUYGgupanjujEgfWFD7iBhzSBzgpVriscVDxT6rTZc9aH3hV5YrhzeiavV97RH2GtHY8dpo8H",
  "key9": "k4ckJXQD3L41F5TqECJZiSC78JpsEPWr5BnBq8d5RRkfbA4cdM3tSn5i5J8aDAYx8FqAUHVRTEhWahwsuiJtZo4",
  "key10": "67itPUKc3wQFcHUbH9F8FVmBJtzZ8a3zdo23Dvz7LHA8cuM7U9G2DE7HcoN68xuhscpgECXuVoLEMMja4FW7oYYe",
  "key11": "41KTt29iKg6975N47M5NJdGEfUiry5bX9RxQnGRFLLoET2WmncWFT9SfZ7FDVDGMEQgnniXpLWxvSRvHTNSvZMw8",
  "key12": "2733Na1QJ547tYjjxr6nkqkY8z6uSSo8nZzmbMMy41hxJ4wc883x4pD8FYKnVfUpWUukWpWgBYtnukayT8sT3Amt",
  "key13": "tkcYUgVYxgX1SzEnQ8gfUVkPkyH7FPSCuh72JpaaWXYX2YyXDdTLHwLy996rZLezsX4CXtxEvxVPHFe7MBYiGZA",
  "key14": "2fWYaqtQARkpX8sSB8gBH8iA9z58SqbdPRTy3R9kbqo75AXijGRttcwyeka7qWx47Ti7AJ8sR6ebfCLcUSV2FtoW",
  "key15": "2VduFcxa8PDxBpmdHh54puTTZfaHNmtcWc4HZ5DhU3BSgSnrq5kS6Fp2FGnrASSKkT2pNggbDRAajXtJvX7miLSQ",
  "key16": "5FWc8KURCkysUaFrLVxyGoiuzeK6TWvxGS1cVwfA4xthET3PV1rUbZHM5V2UDZUY4KYFGyovCHXP2wZgwGnVBPFo",
  "key17": "2KNScZjM9h1oimsE7PXqNmc22JTsB9gLhJGAwkjQkuoVh7r5KfpR7CvtFLpAK4a6ddqiwMFcqdGFGzXXRLNvYagE",
  "key18": "3QUfim2F7nMUeLbWJJELCErk4uKoSUaXa3xsnTt8DLqbXK5vtde96ewXLtVY6Gm5etvLTPdwkPAKhY4k2uPmyNWN",
  "key19": "5nE6ZJd5XamCdwcqMmMDDDo6rYVM4TCLSTLo2SyAJgX24bYVEN1rf7SZvaji1zFwDcGSdmY5H2Bes5Gj3To49sAr",
  "key20": "3HvcjUL1kdmqJk84U2WPjGVJSYB1eZYNtLdzY4wf6U2KjM2qqvjYdoxxTRyL7mrrfPCQXJ3xE2g5mqviJWzH8TUQ",
  "key21": "hyYN614v5MZQy8DZLQemMFHzGkUDHxLhAiDMV1raoTcKbgc3uiJThZ3TUtjDmfkAZrGtG1ySpM5x7p7EN1bTFZL",
  "key22": "583GXsTZY5dDiEt5YkFMLq5rapZRKyidgNvf7GdUq2EeqnLf1zgdnQBrv9GJDqWskGNXNjj3Ug6e9GkCQ8zyEK7f",
  "key23": "2m5AYnGiQyWKPaDBMGWQwMDcmyBqxyQKQkfNJLijxefuATFiE8duoHvrKsYtb8adgPLy6KqGFoWextaSb4GQmLp6",
  "key24": "cNYdfFEDPB2yBKu7efu5JKVNJT6KwmnvS9E1vw2FxFHdjouRWKQ1iYfJNFYYgqVUy3qBS4YbF9peKzNwBzD1Rj2",
  "key25": "2Fmqif96StjtD1drH7zLyaLA5w5tMZnmMsz2TkVmgDkndJT9znweCj7Uiw1c7rcR2K4HhkNgx1KVDiQx5W7B28RQ",
  "key26": "r3YwAXehWcXgDcQyRqAjLAPDtEpWs8f8uzwv7yvLRBGpty4be9VZQvXj4H7XvZnBjDMAPXQWYhXwj6mudVdQRhK",
  "key27": "2RqvsPnA3QGgJWGYzK8GGCgdw9PcqHf69wZuaUjvgxN3tFiY3RrNYxEcbF2XRqF39ZZbRDT1ZPqnAbCn7ZaPwq5Q",
  "key28": "2rcNZQV68bLZz4SBrNwcGM9XCWSuzrn2NszUTiLnjDjxqLWSumcymtcKKGSgGXGhDXtZV7twkQzkoYNBWtt78dmV",
  "key29": "2Cj5mtwP55n7XGqfToanj6u9JNBKYspyAxqzLVFNKGmCjdhNpe1eBgy9n4yWWNkiz7N8kEbDy9ZMngsRrW8obCJA",
  "key30": "4eyVrweBTU7WqzojdA7bExpSq2zPfhFa7vauSxdmriiH8iz7aFmPVT5MTghvttoSbh7LtkUzYDFqsYZvsSvczKQ4",
  "key31": "2NuGAsrq8WSBLym5JHuAz1UeRbgJHnNn4QdZFML7N4iVfd2qUFi9aijpJcnYhLX9aMKR5VpiAk8BmX3hKZHXvHGj",
  "key32": "5NfnC1Bi7JbunkCMU6XgmdhKzP6qRtw6RZNRGJsRRzNydHbEuscQvE5jsg8gKwZzBDJaQGSmQXBVCPJWF7pFGn5h",
  "key33": "2WuUDx4ihqabCRSPxGPkeW9AyNtugG3bJDMTYnZpe7Z3fg7vD9LkHRgfM5FVDsd6pKHNmiT3Ai7CtQ7pTDhg1qm",
  "key34": "33bTJw9K3c1WGibXJcC4oU1xdYBYMUewwVh7AZacrruBEap7NEfWGRuWjiU49sWFX8QC9XnryYPpJo6sXz7j75hd",
  "key35": "5QKtNEEM4gUDC1A8Zkrj4s3xsWknJDcqpsFaXP4rrL7zWwRb6gKESSRhxS1U7QUfSqwAM6yipmBfjiKFKcfaQQkJ",
  "key36": "3b7KThxaTZLb5tGG5XvA92W95ZqzKwAJ7i6JAsDGY6uNEBvsJzYP5MczSR1kVPoy9L8pPvyMxt1hcwqpBEksg4xh",
  "key37": "2T9hggFfK6EKZpNjFAiTt8MrsnNFZKVuCCuA5Sk7fkGEFnhY8igUvDPTghnGBibJ5RDSr23pFGrbmVCGw6AtrAZR",
  "key38": "5522hwoidwh7jtJVfzekzwH45ucUwFbwRTZD8xFSi2HvoiT7sznEWW5C9iByRqZ71BFPEcBgb3dLq37kJmDm77hX"
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
