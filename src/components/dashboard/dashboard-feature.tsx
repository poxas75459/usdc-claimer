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
    "4fhGkF56AmWaysgkvMkAyaWxW3y6fxo3yuCHXXNCrtd2LMBnkz7Ga8w5RsvLE75mF4FzQqKyZBktvhMc8w5LibTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qfkvGoeXXLjvCJp7fGYcjpCQoX2WsGJM5ThVnDucyuv2a71FBSNgD96V7iW97afttNiQ82oiQBS73JgMx6pVyCC",
  "key1": "28j8wxnf2FVMPuoLXEG3AJ8refot4kn9pAkBghBdZpWHVPGfgB5LbPd3M2hQKW7SLpX6ywT73WxtWVf67aYy5Ben",
  "key2": "4gXbHvy8jExZWYs3EbQHKNhjcJcLCd4LGzJbnNdaiyBug3Q821t42FMCAjKyLHxi6REDtk5FkK5GcyHNiXW7gegU",
  "key3": "3fjn462Yek2KLrTfphFHDjDY2kPAGPHXMHzPKG42f3CF26ebbReeG9CKzs1PS1ixMHHvT1EEAvPa5MH5UTXBR2tq",
  "key4": "3cjt4ckGLvASMDgr4WBx57XbhfnWtYaSt1n8BYSoULRfCmsxT7McRZPa1NL9HX9CBLYzJUdsHo21r8gvfCsPGaFL",
  "key5": "2bJcWjuxyYBaQ6eGFybFnRByyy3wvbhGMqCLQUH5p5dtTwG9oS6ZTsn5L6vDYqaMu7fzG7oEuEZNjx4MZB2kNCQn",
  "key6": "cGEJyq2aSFpvjAF5qJHs3Yto5fJSvKyDdLjUtiStPNTHPHV38UqVsybS8Rt7o41ZScebgycxJp9kJGwneAxySXj",
  "key7": "4sxkFFxpxwXHjnaZEpUU7RBFVgfFR4kTVPw2RiYqy6CE31hby8wMYK9Sp73vXWw4tudnMNbQY7X2eoFbukjF1now",
  "key8": "3zKFqXuDbAwx8NHPyazx9j5KSJYT3YzP3ev22i9f8Qeg4ZMtof1LN7Zcvg5ghbNriaZHqP6aNocri5X3ptUpMxeg",
  "key9": "XhfDKHhpUwRFB2xS4Xt5Lhg9xCz3wFtaQjg9wW7p3Py3kSijj1VN3oQz71RCVjcyzMvXzcA1RRridvDuxgbGUiN",
  "key10": "43mVRSUM9UuuyznasUVumdLyuhCiJfd2QPigMM7jD1kbcM3fMwNMWcfDTuQvByEFMJkr5jxuFTrPWFwd6Q4JL2KG",
  "key11": "5kSWdAp1KLe7nx8KDjWMZx43WfkPt1oearZw6prvPt1tTLo963q4gMq3LjYcyS5WG6nxoCdUt9QBXSYPq2oQWnMD",
  "key12": "2UEdKyd1tRo6fFVQwPrdt76cr5jwNBYDQqtuk51UKfiRTmCMyXnCun8W1UF1tJ6VhmzGs7yajYEhMZ3ctWd3hrKg",
  "key13": "3yQ9oAHxZ4WGmVhUNRCR3NnuCcZe2PyrgA6KorhbvUZQ8d7kN6NiqLGbBQpe7XNwH8DG822oiCcmb48QgMrZAkzf",
  "key14": "gk8wQGphARhHE2SjAfRNsnXs8vpp753wUGoiuMphVAM5CCvAh39ck9FhHYAkPir7bWPZpwgKtT11xWsmaowoTnF",
  "key15": "3sPwMaMzb4q4AACqhum686C55e5ARe55mcjU5gUqgvz2QzVEU3WqopZRbXMzuoRxjpKMD2ToNL3um2hwpkUhXAtu",
  "key16": "4qxGuVkHemAWNVLGx2bZjfXvEARrs7WzvNnGDcjvo23GgxYQ9sMV8w9nhUXh8q35o9f8rwUidbALgA6yS19s7YRr",
  "key17": "3UQovfgSoKroCYyfi1FSi9nvVvUKuGoxXc7VLdum4iS27GDdYhJ4bfWMpQ8vMhrrC2K5pRbTGCApebr2433N66Ts",
  "key18": "2sD8CTtyKSK6NYFUPP248xK5f2EAV57jkf5CbZnyV3kUNvcs2CensN5frPpnTnRkmQjG55C5NP61uHor9P6pFuFJ",
  "key19": "66vykjD9it5y7NVQZPSdeNPJ2t9mho3G2A2LLZpu4FsGMvptaFrYRfwvyYpf4RG2joN5fbyHkEWpzRLojRhFUHqA",
  "key20": "CovxUi6GD9Np5HEdLUdqYYhSfzMYYrVJ3FjR49U86rMBbQzFnxuoZjvfnEKwJRXiYZzr2wvAXSicEznk5ybn2mf",
  "key21": "3PGX59eC8kwSi3zkrRv9mPo1uvcWMsbUSZSVumKbL2Q2mswAJPdHtcShTmoQs6FUApNY3c1DtkkNZXX5nZG2sQEZ",
  "key22": "3StSPHTX78UDsd2kHYHmfhaJWvSAV4TNCkvw3GyyjDwyrRu6uFN4YtcKWcQubV7FdmTn7Sqnhwjtc91XxXk5iymG",
  "key23": "4LSXBgaSZRF3WQrsUzQnwYGN6vkxXWEQcgX62j87r384WzjY8XotCH9DJYGgFKE35Z34W2G9AeDxiPptrBSjFn6o",
  "key24": "213JYYYx8twPFZuVysQ7gXm8w88YPzqZnQvRA95LgUhXgoHthPUnJpTad19CTSUb6pEUnBmCPV7arpRXH9vmgHsY",
  "key25": "HC3A2Bur1Jrk3srypQbVEqujJQ6kpRtaDrXgGmpzd9ZdgFbAUeqmczmhLbdeP4EzpTj72hznem3tHhcc9QG82dT",
  "key26": "62ja9eQqaC9whk5G99dMpr8TGyPHcPS7XrvTR3vtpcGH3LKgTDCPMyXDB5dxZ2cmGvncTxw3FxJB2c7N1xX1enFq",
  "key27": "5YGguLuZxb9qNU52vgtmicgPcvqYoZz25iScG4gmVdwkjmEJBg7RpBJh92Hh77grPhZaSzqNT2qR925U1KAypgJQ",
  "key28": "3u8tRuGTXDQqSbo32e8Mjkd1hGiJgJjjxsa5VTdEXsGzUNXHqdcVUeJyQcmvZM9Jbqfzfe2bcvTsyNxJEjvxqp3X",
  "key29": "pSRKhdqMsZqH2Q59hFccwk3fGWtYnD137aeqTSUNqPKZLkAqeRUgfmRwk7oFvEUeJSuefYKKu37tYuznGsfQbaP",
  "key30": "ujafHPE9wXKVL6dXaiLjjSLiGJWrHv7jqemWQykKMzYZANu5MjYMSe4WqYySasT9jFt9t1iqNq1N9tgSp7i6jhB",
  "key31": "s5pPhgBTWg9rS4fAtoNETAzU7aXJnf35EXV8czQXz8XzJJnGxLwUARJ6RMwBLgM3bjXoJvTeSrZ146mKfLizhhw",
  "key32": "2WJUkKeCpNTzJ1D46nTZ3gZCf3CnDvE9e6r6Zk72tEJGo8Ci7HH9hWPkBPjBzAUj3x32D5YtktirynzH6GyTPvXU",
  "key33": "64fq3vsLxbqLasYnimvHtSaMWHBws5dVA7sGrTuKZGdXA356bdMfy1pzezbgkkus18jBa3xu5kikzLVShz2kvAa1",
  "key34": "3VugAXc5kxh7xAuNam5XiAPUaR795kZugp4L7KUhMm6BuvBbecUjcBxMkcrF8JG3LqJmQLayCeDsqNtkjQ1zKkpE",
  "key35": "2YeNNdyJc7bTnLHhDLdKSvV2QTdv2CZUJYE2Y7ugD7GzQcCfSrFtw3dWZYTVxBwFrQCDiPvPMa2d7A6hg9jHuj7t",
  "key36": "2WhvXcRSaUNjwJCfeibKBLdnnzbCXWT5m6u35dEWZ71xdxHVoKX4zSg354ZZ7zVTFagzM6vtEnZjeydNTRZdJwiD",
  "key37": "58bVkCjrmWQWBEYMtMuwVTE9M3jS4cWZQMcenfeXykmNNcsoiPY5YWoLMdsiPrsBMCYxxAhKxUw8FgyhHqPWvPbG"
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
