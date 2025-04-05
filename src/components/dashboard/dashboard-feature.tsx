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
    "5yJjQ8n7rdjuAQzfo6PYchRSX1WH2KFFCKbgxxXDoUkHcAkPJUve4pfkb92WmThAmMaxitMsrUuUEDoVa1TBe22U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LTFFyMSpgHqfbzhJqtYh76cFXMVDrNnG1NbdhDcNdLhAA1szywaMhEPYbtq1EYV729rEjTXrF21jSciYtt817hP",
  "key1": "2PMMVJd19bBUnVRBuuwNzeeF2inqM7xL2HfP15yihm9us6ySTMHkS2g5jijECbRvGf3EGiQLNZUMdozvoSxoBRbJ",
  "key2": "2J6Uyx9v8REy7at1CpB28HqQQkrNAvfcE6Ud7NKVErDFnfjhCiVAc17QZLxzxt9tkVaMWJxaFm7dALm742oyPnCM",
  "key3": "3ekEG6soopqRbK1FiPu9U1t33yiKgRGFRUCCfVZXGSzdyXvneMFSWzDTn4DzKZfm8YyYmDknaho7UZh64Mjqy6Ft",
  "key4": "3XF51b4x9mrPuyBUKBns34vQJuGWRj7V5u4HrHDpGTg2Sg9d1TjhVepMkG9chhwGb3pkAGwbaF7Ea8KfxU94qxpJ",
  "key5": "5AYnjuK64Cc4eWCtLkxwJAxzKr88LQxEnj37NtHPXfvL9KY9AHBVtdK13JnKjx3pbm7AnmYrJygxNL3kR4byXq3s",
  "key6": "4SDpD9qoicDeGLsfQNAogmMewBAtroFq2V8zdfrcnsLgYejaMmET92dGEvbXwDXaxDZGwcKdYmbtFcKAFwdB3j1A",
  "key7": "3DazbioxEmy1UWKStG3AngM4BXkoouvG6LVQx4d25WzoLVgHXg52LihtL8zTj4SJmVDjMR4zbxXKkJBW63UefSpu",
  "key8": "3kRfTVmJCM6y8aPttJivHWovFH3nFG5WAB4nKKkV43xSfD3cYkUfNjwjtt4JT5A76tJjAVbkrAtd8xH8Q3wf77Ai",
  "key9": "5Ru65isUnxavJKZV4JojTmpzMfbcuC46FpbM9mXFCijqy1TYB7sEBY8tvJmujU7oUYECzZkQ8o1dZzjVnw8u5J3R",
  "key10": "3G1T2nB3xB7RZgnoD77DC52tN9qLZ5Qvbgqo4zQKGvaW6PtPXDWuTPXtv9gd51oZoiMTRQ7oTwAMJq62SbwN6WxQ",
  "key11": "4HSbjvpXKJThwvTUAHPyLznwKYNavAKgz7Wm7szKLAeAxjHEMUN58ZZyppmsMf6eE7SFiWdC7wUumVLNsemt5qe8",
  "key12": "3tS4Uh7isWTuboPWsYyNdK75crTKnCNPJ9oMiZjjiFt9kqrRVocEAdogAKxas1j8oVNkthi85KQgbjfftt4ZYNyi",
  "key13": "21fpvC1mtjGVKyJm2riEn92Ph2YyJwkQP4D2WW8ri3AgPqkUamk12WDP23XM8aQSwSUN91169GdZufpqFmYP7QUP",
  "key14": "5j3ih2TBgohpL4Fz6dGwCyjVgB4FwZUBPKPhZRhgjvba7wZVdAfwT4QaFV4jtxWeUgWZNhe7nvQoqQv4KAYoDea5",
  "key15": "2yer2T2Rirw5RsbSVVMHSw4xZNu7HK3HxU3pBmnJwaEnM9NEEJNiKUHWnbnAgZP85L4od62At6D68WQmJNosKEjV",
  "key16": "eUZ5g3eoPdkrsaiE3KXcXoHEgKdUNmmZquMtBKNKTv2iNSH5HEKvaxNNGS7KVXb9UMxfhKvTcfs3RbFchG2WcPJ",
  "key17": "52r5ZcbE4wyRsQbG7hCcKXWmdmknZesnDzQTz8FGWojFCnPRXpsbW8i59NRfJNDzQJmZqFKmbpVC5xg93RPEQpDJ",
  "key18": "2mUrVUvedeSMrN1VQPddTtEd4kCHJ5RnmoagQDUN73g9YaLs15kL9iD1KyEfrB4DBd6Tud1qWFMgy1dsVXiFMPWs",
  "key19": "5CK8ukpzV3ukR656Y8Fd2BQ3rXKE79x77H86SikfWHA9K9VAoMyGsQXjqaiUK8ZQsFTSUVETPi3DTMEs68p371Jf",
  "key20": "8FyoiUKjXgj6trmi4N3rMWivpjPiqMB4bnWgazv8Bea1NF7fmTn8AJexManT7zHPCMAG5eB49TkirYw9szQGYPe",
  "key21": "3mJhT83kLmCeBLpxMfN5jmEGXoAAcEEQa89UjERCatJ54ueAf4TfGmkeztUh9ZMkAbXzeLbds2KXj31VkqnkfdD2",
  "key22": "2A3zC3nprxgV3LJ55LaBeP4WrQWqFtRAjzctdDmTho8SMcseotf9XbG6Dna12nNSEh8q2nQqNrT1B9pYsSbnddMi",
  "key23": "5AJuF7eTbSwX7jLHHWCZDkDvWw1P8K31S5zxiemKfnSuSZ19pidkm7y4hFz2crifKfvXm8v35keqYZbA5DSmFaSK",
  "key24": "3gZy3q57m9htzPAuTKTNguU7i2rbx1Km3v7b2XiVMZoHHX7V41mtfwpeDP3sCyyTawk5HFppHmL6bZsoDqQUMnhU",
  "key25": "4cYmCkGBBNAZtXiY9XxQKe5ksCGEGBwAH8fEGp2yJdmnj2YdJLejfLgD8p6ayVvyqDYhCxnwqQpKJckRqNFFWGGE",
  "key26": "128crpyRxZtPwt5Pm5R2hGw7AjFwRE9ivDgoiRTDtnHpBSYirSRxXejfa8fMWstLzKPN6HeqMRyi6CEqSWB1HMrL",
  "key27": "5ozbsUGD8W4MZH7b6kjbZoNjHHxJMkZAbNSBMPhu8zvp6FeaNpikkkCDakeNF8GQh4avSafK4fKwqDannKSTYb7Y",
  "key28": "QkhZuQTKJ8hzpBmYKYvhcEUS2aGN6Z5tQ1EQfk4By8bU2dripbpqBdJbVYTqzsKy8Ty18Az375jaC37XExYE9eE",
  "key29": "FkWxED7mwwqM5eKn8DjBT32t5uenkzpgj9WQoXDzP6fW2jiCuxexRHtsgrxhuAt6LWfu5fvFzohswSmS4tqJJUX",
  "key30": "yGkW3bXcV7xkb9b7SCr1yqevbJgn5g3eBgm3QfHn4MksJFBK1XkcMG7rLD1PuQgmV3YUHku3pGH3V6dKYJW5eoi"
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
