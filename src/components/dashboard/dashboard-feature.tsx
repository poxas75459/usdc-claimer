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
    "3tAgkzyevyCjC98Ejz8w4xYVjSUTmq221CDDpfrWVeUuPPYuvarPreFNrt1Tc43TyJQD9WaQ5NqXYXgnxmjDE2EN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DkMVWw9dUy4mECQQDaMfAtdDAubq94exhLRXU2eJ8jQXAUH7jbBGmYs761MQevyNArxFRXAutBK2YxiGLUGA1Q5",
  "key1": "5QgLPwt4pyd8JnE9nxefvqmVRrW51H3gq9bnaGfKES9iQhwhJY1LRXLy1NJjHFTrn4bA36XDGM2NYkeXKpfBdX8U",
  "key2": "6ZrQT8uGrYaDmpQGijCWQTYt2J1hP8Kn1ow3JS6DRghQbUGt3Xb9W7mTZCgsPwiqgByFZxcrdzzkP9QWGF7oaB7",
  "key3": "5Gyy5zeEu11Zocu1jUvGUpny94EP7Nc2DcC7h6Ezp2RphRVukXbjsfTBX1ssfrabL1mFRUZkHW7yzDetNUeNHMA6",
  "key4": "VGT1zLuJ88rb9ZZXhrMv9aeZgdAvZfBVR5cFYrkk4cBXybZLWa4tfegFmfqQrr1BaxZ7xdx5srwbM2K93bdHW55",
  "key5": "4DnmtG4uFz2Z7VAFcDRGpCtRJxrrdT7gqae8QvcKY1oXETHsAgmGXU7NiEVijZQzaqcg4Qg3mpMqaDHRdUe7aBHC",
  "key6": "4WDQ7SfMun7ydbitUV7AWLZ3grNjuCXx1sYXgYvzJFafx6bsZ9Zx6MfYSFCaPAV5M1xtgKNYMmzmJyMJxbH1bmQ",
  "key7": "3VghYdhzJ1uN2ReWvHpU6sSGZamLZGfJWSffMi8QJCkdqv3jrhmdnas4PaKDvGiXMWpav37kKWYq7HZzkKraa9b1",
  "key8": "4GHMuM66uSz1WqcTnbBkCQSZyZiRjsFFJgXCqDtHcLm8h7AjJPk8TeQ7Gye5GNEp1B1FSPesYK87LNBhYmnaiNGW",
  "key9": "4x1z7KdkvHweHUt86sHs2Tzr6KCKgDKYekDsewEPpBw2UoFWV8heYWGmybw9xN9dMgphahnTN7Vi4mARr3XNqVWV",
  "key10": "7i5dBigWEM4UcW5ZbjKYZCxoXueAV6CmMrVYvWvUAJ16pyDfNha87SYtBtrut6FX34UQjVEqtkMii8tc8Tt3HMS",
  "key11": "3iucxwJZAZuXDC7WXjhvN8fSuWRQgD4hmVwdHpdR1w5GqyqsbRDZjfyzR4psufjCK24bhvgFpJnTHQuHbeK5NxJN",
  "key12": "2wCiivkgcrvwQ4uhNBNqVFKFtWGfnBUdTnY2kyFSoaE12g4bkGjWZ7Cy7hMHqV8aDcraWRBqBHxmxABNj3aA9xRx",
  "key13": "4qLsuLyJg4ZMvcutaCYHmdcaeZbxR3hhZkFP28XVx5fYsfCwAhrMAA4UsRZZAWvqAL4z6Spp6Y66FER4HFqD1rmi",
  "key14": "4kacskHcfABiCpF5WwKaWBKGJ77pRZPTUcBy2WCuUKEVi1BbqjPXh9dtzAJULbZwPyKazqfRCzsk51VySrAGMjgo",
  "key15": "4Bc64V57yojX8xCXhdKsHWLb44pEb2zi4C1eKpknqFFoVdxmWv2FQhbQQ4YRMDm5VV9bAH3D3tT7mw7Tk8eWQwRG",
  "key16": "vxveJfTTLJSdYjBiNwTpTXRfJy97eyqDxX1XaoV4ceCJ5mckY9tLBNNZFz183o6RZp5s34tvH7oeim7zAym42z9",
  "key17": "5qK32coFzCZoTxfXvQQuDGRUYZQu4kM6kysPNdrXA7DxUcgrjuXqm7ak8QLZ9yw8uW1QA2df5XxCMbXvSkvW26xx",
  "key18": "2jme7hbx5ARBbXkiWXqe1cFk4J2TggnRbDBwPghSMKo25WESkVdFD7SJaB6UXiLQai2NRGJUhqoy33tFnHiSvPjg",
  "key19": "jbd3SS3rFhSMFjfPTPUxtXFqf535qJgT6G89Rki8UxgUwvujPawWLXMSaqDBq3EhKRSSjkcVbFsqWsZdXS99MVL",
  "key20": "AyAkCQ19cotajJ8xbz6CXk8n94pb1R1wQZZ64yi9PRzZrz1V8wxkayA6KXWP3vXxyy6wpCi7A3B4AoqBjqqLHJH",
  "key21": "5vfNTGP6MwFD5fUo18mqXTv2dnX8y5KJ6Uhyg7sZfoYv5pE1NRnH8Aqb8ADpddMznQ8RFS6GicGfKang2haLSPcf",
  "key22": "5bf671czc45Br4KcCx9yiWs1Z356Qouv9LuQu9qSA95mWjVMWnBkrgU41gW8oPJ9TXVN5N7VLUMGZ1kgVrDAsWPH",
  "key23": "BAHXUkp45wLZMa3qfK1rSA7oqC5GGvruhs4MJNoRTXCzg6DjJ8hfFz38aRuptpRGgwCLQbnyCJNjkRtrqnVJ1yF",
  "key24": "2HaPTMHUzt51Pj27aQN1oBZvtp1ttTuoP78VSkmkzMrFG8irjj1hDG6pe8rbCUDEdibnNB7nmxZ8b1eeCt3z27fp",
  "key25": "47ch1dECNj9Ld7RETSCaErDS8zjP6ngRkDqCXN1BZ9AgcJPauwwK6jURrEpUe8QDyF1A3HKTsv3rTBiDWU5rCh7Y",
  "key26": "63pkN4ExcTmpUvMnCir8veK4r33kpfRJkWizYSVZCB4xRvfvqqV3zJSqAsbUkyBPifEcvPvbNQyMjvmZBY4ooJsq",
  "key27": "2QrdfMWWYTfjFyMpHECGonzBrfhdh6xKyVLaJT1cJcWky1P3nofNr2wP5NQP823WUsBQ9pDuf1xVZK37FSdor4z8",
  "key28": "5kzbsnRavmT4GmSK1ya6QM82rHEMw8RECBd1iNfEpkyGfFG3Cxwc3cCQUXiLdbLkGcCjCWaAbB7rYeRwyW8NUNBf",
  "key29": "3eLu6ua8dbo2qAUHubT8VEmrGea6HuEgKekbXWvbNkRw3bB7LNqo4z9Q8CSgMhdTKXUKMd6jJwhh8SysgaxJhLwh",
  "key30": "3hoq3S5b2uC14LzYsCiL3Q1ZHPqEUubonzPKFAt1BXg6a8wbTRuYMbwqZrrx9e4aBzaqn2x2xGxSj4nVvmDSDbbs",
  "key31": "2y2evjZZZyV4DFWNoUqoniSvvpwSwnfxnXNBnnovsRZVH9xkiQfS2hxjYtaVX2Ao9hmCfHHX53isRvRTrWkM7xnf",
  "key32": "26deBKbqmN5m9CAXUBRUSVCHZu5eBPKtAcRJKGtMZvbUZwhoDwSqdjqLmQjPkGyj4w99dB8BdJJ3DxsJasVHUmGN",
  "key33": "5QzQmLevT14ZVgUVkrqaMKyZVdntR8dQYbTc1nER5nr9XyuaqH47Hq1xAKN4rRLh2YGnpEPpCoKMZ3B8yoDkxNCF",
  "key34": "36AZZdA9mPeFMTUa65DpXPXubapScUSAKKwM5LUAb7wRgLqxm2Pfarm5zWb75Fmf4zK9pwe7kuwWNCDDW58LQHmG",
  "key35": "5owLuQBrkozBFWVU59xYU3sCSxzfZM6JRbpMzjCDEQcueEcWbCNemVVRpDNNeJJA3gpSdd8rjH9J5aCixPMNcKm4",
  "key36": "3QZUCsr7yEFoWNs8gZPbsnCLWVVtP7yWiuqEvVzBwMt3cc3wWbYh7QUoHX79oMogCv3bANGCq7p9X3rVetaNv8ig",
  "key37": "63FcGu2gLzYcnXBJSgprt5k2NwCxKqdQacpJnHdwsZwh6FkQmsZS68aiVJNWYjVdm56NcCi1XEKcuuKgpHrxL162",
  "key38": "37pwdZtSEGWZUwqT1pvzmwxoxbKFWHFTijtwJ5wJdRyMfiDtB3nXGooBG68ZS2Fss1cozjwQPpApsKw8Bxvs42fv"
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
