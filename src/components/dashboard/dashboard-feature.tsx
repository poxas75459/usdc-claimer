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
    "cxgKLRnv3dgF7RKPN2WadSWr6Hn7yZ2FAnUZuTxEouhit4MwyjeMGBX3e6CzXq4DhYup2sCdcCC1BjsNqmJaQ3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38TbwAqMjr9z9pwBL9Qy4GXMXSwbktQbQnGafLngqiJcShZfPw3NaXFJvvB28BuWMoiVfmqoto64fTQErW7jwoeM",
  "key1": "54C16Co8ES2QMs3B3FMBN2KXb7BGuS9DAyTjJtCAxyYFffWPP14vYw5uS4WEy9wmkw4deE95Xy8vrBycvWpwfuS2",
  "key2": "5qKFF1jDhZBf2AaLsfYMniMcqZ4sggvQnujY8dArTrfkXtZ62XfN5oAwuzb9GTWZgxpVVqAQnGvg1iW2gvmDGyN1",
  "key3": "2rx2ZniurJqCmMWVkyLpo3Y4m2byZuuhCZrzoi1bAwxuzkhzk6mgaQYHWA4bF44P3CtA65S8uVToQLAkxDmeGw9U",
  "key4": "5sryeidyn4QSmEWqb9j6uMnHjLgcxt6WmK8nrj23bFRt1QbJX1zDwtURANq8iYn6KCs3JrBGjQETV7AQ1jN9AM68",
  "key5": "4BTideUi7mUrRRFkfTFNAGhrguosJAnhpuLuWpVZvv612SuoxLuwfftjFbgzjPgb4EUsbU73MRNiUQH326y9HdPd",
  "key6": "3xBnDPdGs8nysTKXzZPXHFd2Za4HAzvcmvHjcBS1QZmjKUpD3TsAx9eb9N2RiXKdqSZM84JJRbq5UeGwTXWApWw2",
  "key7": "nfQHDkk9wonwZUqxauwYPABqft8VYQJBh2cLuYsrZywN17Xp9ckrhKWxr6nPjPbsYqYQhVyHLd4TxtdJmagkDe9",
  "key8": "3is7VFobH2VJZP78Eaid8mFxqH5G7F1xjikqJFdgiDoEatBTqWGmwmJV8jzYHXUkEJDXytVvHYjbXsdvYvPwKGsB",
  "key9": "3ejMfu67zAa4UwFtkDXFcCkKgMkcTazoAtXzUG9ZZibjnFxaJueW7L9BK82Hk7G1aYbLMCFEciPb8Xf4UQfU3KFn",
  "key10": "q25Dt1nnZUL1Wh9Jj9hFWELFHKDUFvepNzCoTM4LmfNYcrku5MmG9f1ZUtitMTPUhRQ1zbT7n2Nv9muaupBGVaW",
  "key11": "2Nd44MXHXjMxkxF7YH1qR4rc1EWYXL5tWDmTG1WZUrRmBebsfpxqfe5S2d875QoS5QaQADSfjNL8C9frWArgC2qV",
  "key12": "2TsbovZicokvHiMkkKXp2ixhrCMFZd8qvfNcc5THnjsG1Uc5YDv8RVX2dsVqhQkLMfCJMEdC9zBHAdRFuYnSVaPv",
  "key13": "Gy1iGa42nSw9jRmzia9QeqvakrXuskChgJ2ndjGohNRBPSNewxJV7y1Bfte3DGZFJ4XNUx1N5q8vMW51b4CJU3k",
  "key14": "2GxuNdisHX22QesyrsUiPsvtapWeAztznCLFcKQsBpgSAfVC5N1oVF7T73MG95PCBkrNB2div3xMKZrsaKL2wxWf",
  "key15": "5f5UWpZwmLZ1ZEXc1vZH6z8knm1UE1BVbzksTEBVY49Kqx5ZFr6cmb6YN2mAYHbVL6siZXYov66DTpCa3hJU5cqz",
  "key16": "2jv7dNp7VjUYRuyJvjrWmkA5Z6HMv7jvmpe9JczcJYZ3XXCGpuDLtAhr53eA7Dw4mgA2SWLa1TukXMDjrT9MQ1Hj",
  "key17": "pLEvVfkKbVWSQHVSPDXFBi3QVC5gHn2g4Wh7Yswfx9b6jJH4Su8QoXtw4pdRmGPXE6Gy2etnji9tY368okWngRW",
  "key18": "41omnQvKHZRiJFJ67es5uKkwUDhTR6H2zeWiXRJ8J94MiWRENnccmgN9Lxt2SnqMteYGovqmXiFRBSKZQYd6VsQB",
  "key19": "2HLP9gUZyJ5GF8MLzRMPEsy1y37ckXiceVgZAjNfnBJ9oqbhKj91od47caag8BycTgYeRagAHLiW6msek2ayKAuj",
  "key20": "61XzNDtRkoZ9CPi2Gm2u2HUNhVN8XTVqTEKzzFAuxCWYJFBYXjAum9vnhVm6xmPyHqCYJogLnHkTbqMhfpxVzqCk",
  "key21": "3fXUxGsRUwF2UiUP9W4yd2WVBTu8V2BDTQjNJB8WptXJg3Mc2o4zWsqmEtCFiRh5M3jsi42ua7tM4JyZUgQDtxbC",
  "key22": "2DAFZHekiGmXQbvsoPiK6eGjjjnCZAqxfDPQLj8caJCYYFJyHWACBMDo3sXMfDoY8aEHjXVzTUwzWJY7nPLtSby3",
  "key23": "3x41H2o1wKvjuNiiCut1fRP8bx9QuMa3AjnBUwWjbWUda7hvyr3pniDLjyaaYU5Bd3tfp8cgRXFtPB7rLciBg7Qa",
  "key24": "3QdZBSc54rJSTCSkJWRJ26yepZrcnndEqrM3KVcHUtWduyk6gzXH8VT2zcxxudc4mpB3ktRY5gd51RfALUPFa3uz",
  "key25": "4GW6moMdoke6YdSHc7QSK7jAvoZFyctfxHNXmna46YsY7ek2TVebT3xfSdRvDdZWGNafqcR6rVNi9aNAoxZFPdpS",
  "key26": "2k658YpSLAbR5GepZHCjPb7NK6FVXUZrtqAqXgkobGVT6fuFX2JJE4LwF5Ew6SoRswTs6QnUxzgTA4Wsaxq7Kohh"
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
