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
    "4BHjo9Q3ah5hF9G2WKDx9bzReH8BfSCBkUEJZhuD9LFgL3AZKUGgDiQ8ebwGFijQMAJmXxA4UboGvWTkGVL4v6RE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZLXhaGPi6sBaGnsTqCMm9VmL4je8YoNEsbeEbUysVTj67tNXwyJA4KEufE6DTyCuZqeMbzdmX8vuSFnvjK5xTU2",
  "key1": "BvUS9G69emFKdosCTekR7tbN9dBD3Rst2Dw8X5SNNq5oWMMxuFuW5VVXyTK3UhQN1XSJFwWUJeos3QbkbUdcQSX",
  "key2": "5wepRmwE8iVddsiMCSK9Xo4YokYcjrXNm4QbgBiGTZSwjYjMy9uN7AwksF8aVjVm1PrAo3a8Btj4qYLVBtrf24W2",
  "key3": "66e5Doz8X2uN8JYw1Wpfpz3fjxvGvBPp7JweFc568pxJ1JNTNwvKgqP7z7GARi4ebVyw6pvd3sTVdvrig3CxE33Q",
  "key4": "2ws5dSrM8npid2Tqdq3rrJBYhBLfapU1SSQp3ZhnTBgmqAzf94ti7S85kY3kD9o9NZB2ooPb9oaRvotUjUJ1HqAa",
  "key5": "2ikBzKGs4dmqYFtDid7jX9b1EsjLQpzLJRwy5rXGqZySz5dKSScDGn5Cis6MryZmMaMHK68FeNwoXibytmiteGRp",
  "key6": "KpQL24eQaJYZZjei67mn1T3Sbe38QwEoYuXTTuTALy4mk63BKWDTVEu4cm8WLeZwcpV5FoEzTXAfvWBCh3AjGR3",
  "key7": "55UtR2YoAyfa3wzD4aDTptmVSuk6mLJDdUuFrUgL6RgDUxBkTmTk1hhSLhkA9ojYZ2ZFUZ3pBTeYJ56H4kTgByJC",
  "key8": "4XwvAMsTQXo8ZsYbBKpETMMQhoRQXrDcuy3EDQ8YLPw8aqiJkV48yGG2yJQpytsXjpiNSUT19uUUCuN9GZteiNZ3",
  "key9": "2Fv9Y8dywRnPSPCMNwsW5Qafkx8gUVbhdigXCxYAKhXvbJje9cZX7ui4SmuRoNZTJrLWzhHNoDXknwciVsUT5wvK",
  "key10": "5bsgnbXQv21U3q4yNGqCSR42DWRqSjCMTVSBxJSsdGJDnaFdEUG1Xzty8MUwFA3XynvYw94JYb4p1JJNYKTUBhiP",
  "key11": "3XanPkitCA1bDxS7HEhytwXibFHAhNQvvAQrCBGJUMj3pP1AoJiPhAbrYnwsmkDFiT9pALBHC5DGZQ4sVdu3QhK2",
  "key12": "4Yp6AB4HeUKZGb3yw7Ce5jPxeqZLRqNXb65Nq6ovHcxvnvmiPxMrLkpb4YekR84UzgDhexfAdvFL7AKF2hydRfhe",
  "key13": "2fYQPJqQy5xwCTJDH3yE36u4KW9WxYZvEQ7TGJ1NsxqutZNqb1yCt9iZGVH2PsMdFcio18qSxwc6saSb2hFxsaBJ",
  "key14": "4DMrev8RcE2chA3SpJQpcRBQhoxSSkmLF4pFRNqixCR3V8FHB4gaKbhmoDU4mniW8HaKLKtXiiVBBuxfqBVHQQ7H",
  "key15": "4mKR9VWDkuCDe1m93SJthLPahoQFQVku4PgvFj3fzk4kmxrbNapeJeNHGMZJrt5Z37WaKwbXLRiwYrHqwF2yhrMT",
  "key16": "2WxNBQuLcmT3kBJtgF7XM8E8ma9PEmBP3UPRwSnuPeynRnuZZfbfGz2DSpbz7UBsS5CtaHEpszf7GCKM64X5sj99",
  "key17": "fTZpbxMVXmg1bwhkB1z5qRBkfkpxSSv2whaf38dxtuLy35MrnATtRcttpXMrzMXxu8WJ97km7cRr9xqwHywT7m1",
  "key18": "5tK3sZZwZtxR2isUmjznM5Xq3TknSdML5oqDw4VWtYVah7vyR97mvWoEnh25DLvRQ2hGh3SeirFQM4MubdUtCegc",
  "key19": "5QJv3acdwuq1rdV6xthhubejLDCayCsn8QdNZ9pXHWGWGAwnutRY7VpGv2UsoKpGnEi2NUbnmfARcsMkmazi8nnB",
  "key20": "3snN7XUK7Nvis26FG4rhPRTQXcDFdFBMBG8S8z3uoyKszRj6uUDXJkpbXFtgu1UF8bafihzwsnx7JGV3J6iM2uaw",
  "key21": "vhrxKZRfh3F6xt2y89wLCfiG2PTPrS2iVMza4XVvUC1PYHwCwuseU3m7nKE3Q61TL3ezZJVsc3qDZKp41GR8NL1",
  "key22": "5J5Ft4iW1GikcvCvsEJoLyyK6W8y3N3ZSkuUNQDST1azTLjBzMF2QLdyze5NKqTtLoJEPQBoc4pDWDs2dfSuoUnu",
  "key23": "JCnFhicXsHXQBJTAqswR5NkH7ezFSAoiPSVphfZdGi8s1ZcQjm8AmdS4WwzaXyqh2mcZcRwT3yGXB22v2JpWJ48",
  "key24": "64LfkXZVzytLawYVRFH77ieNf5p4c3WTPo5B4T7fExuv9SyMC3t5Z8Lrq4a3knYnDay64JKKx9AidY7gk2GSkuSL",
  "key25": "YRjUncYGzUc331xRL6ZX3gHxFi3Hpm7co1Cs7T7grBzRRdMtoMAWUz8ZrUTarZAsZdMFqmbRJn6NBHwPbtv2CBg",
  "key26": "3EjMbGVogx5GuFT3kswS2M6ejnxF7YXB8yqY8o3nXUHMcUo12eK4JM7DmLa9cgMidMGtjubMTxyQa9TWv9pjK1ja",
  "key27": "5XajUFcMXXbuMnRz8wWcTWnyAtG9jXXm34p5xZiHJWjeGuaJX1YWVHsf3ZdUjaqsB9rYezgPzuHTwzQy5AsYAYMq",
  "key28": "iY1FaqA6nhpJRMujwc3T1jWVsjkyo2jydiFTE8JcYx7M4yLvbS9n52XZ1NL8UF8RSwSSsNSXsC7J9XDuStexfmn",
  "key29": "3F5xoT7nL48oqj9Kf4DixTSTQZMCkuervoA8WvGo9i4D6GXFAZEksmrs5hbYp6saoz2WzMhtKVYr1CX5uyLwqHUb",
  "key30": "5Bxy4q8Cam7QqjV7DyFvPeGbedagyTbbRSEsM1b6Frsfz6NtRDz5THUBTZz8vBSBC4MYPHdXYWwNzvw89aU6LGGS",
  "key31": "XMr27hTbeZFQKTZNjCBoNHMUiujJ7B3r71frmUTL9s9P4c9hmHHgPR1TYWRXctZRcjmfjZ3s7msREYvcmsRy3wz",
  "key32": "XRbVVEru3eMdC5FiWD5vwF68qX8pv2Mk2BQppYdekfLFbVosdbqUuKWaPtJ4qL87nRE5wgNxbiKFD8Xk9vK1zyp"
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
