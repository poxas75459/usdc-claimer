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
    "eZbLz8YoD16mRfvh8QcVLPoTSCAT4DpSffZwAMHERJSFLJdz6TFzmbsegDdNBfbx493bKXsWRqPiKWJhDFPKBrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7s7gGyCNwieQiGGFLoFicmAfgAT2pxPYqGkc3vYNSitFMQx1PH5uErftJ42uP3HFYj6yjzG1GjerfQ5vSzZSARj",
  "key1": "2ui5KxnufCAeZfG11ney2HhPChCQF2qWrJMU4ytaAyH1SyoHx5ZEHNPneXmw2SzHQVmbLaxqgutQXunHuoPTaTej",
  "key2": "5FjMEj6gwBNY4qhvkU8itZUchjWiV9tr1tab8ByNNaVWzTbRg3gFxXVb5qkgEux5g88WVF16VAU676Ve8itVFREA",
  "key3": "2wBUgixuEWJGhkf3ot9bFTMxtCDupjfFQTvrJYGvuZNvU6bKq1m6a3z4xnT14dbLLS32eETBxFGyY4jqAzGp5FTK",
  "key4": "5T1JehsrJVAp2EYVoCTnwGA5EHhM9FBMvav5YifAPiGvDVG2bvCQSiiSKPpCvqyT1NCcmkbct5MHwvBLeV7Lusbk",
  "key5": "2aV34ypPd336Dbxnsv75xrADef4DiDh8Q7WiftVLYfCCvwSz7uEepC96sBatbi5PpmWmFJEY4FguDD64hNsMo83v",
  "key6": "5JbwiSCyCPCHTj3Sp5CsioWLHtAkengYKHgGfmjBzdXTjs4sqVsus1G3QAn8xPSLV3ubBcZ27XkmpKsPSdUNEQR6",
  "key7": "5WnG8Qv1xv5fnQopRj6jnk9yHnu95DaD8GFXtD8MzYDCuvK4dcDzVTXEJiJxDDUzCWpFT3Jbs7xkA5qXEjVaVGm8",
  "key8": "47s9keLesoYeorWVWS71dDd1GpZzzwoB15KJYxnUKx2HeKWDN5FUarwDfk1WqW3hxWWWPL5oNqoUqALcwAhpC5j",
  "key9": "3BcZF8d2hiAdV9ppFiKwRrnbXVu8u6aPfmUTxE2Wq3LGrjH4h46hcLxERJ4kSbHoYhZURb6UW96DJ9VAM3qgqfJe",
  "key10": "5vSb3GswUXKJ6wynkjunj47NZWCrqK6Ma7WSpjxENDKMRZQZ3hgv7d6WM3JbVTC3FaSY4bWhqgiXhZdLRHh5hPPx",
  "key11": "3v6pDrcU5VuLBUZUA5v89NBCKNwJmrE3zAnT7T9RZW9VBvd4PML3vmCWPg665DraVdD5UrYXHAwA7UZogHciPRQX",
  "key12": "4mVDz7LQLxdHaF2KFhpxfv5aMtNeigk75FQghRM3P3qDNvisk85tEEVJe2Vb73iMY6CqB2RiMnaaiRQN1TncYEwH",
  "key13": "5RsrhnpWi3sgDS9DfHWj3QiVf7SZLmtDf9RWfCkDjexnMKhciJgUUurXHpsSFyMyE5rozoXm2zPMtLQHCHHksDEP",
  "key14": "5GqcW4PQmfxi4CdYWKy7zBQ4gutWoFHv4yrbG7fR38LehkTdTbDsk9LrQd2LwEohGNvivCTtpnLxC3pxbPnL8P6u",
  "key15": "3EHt1eT9NrCqrevwa3k7jpYWZXn98pwsxG7rEceHzo3nAFBozapaJh4dj4f4CbyKifpTL7tvvWXyhY9qci9AHKcs",
  "key16": "4ZxLzNWoreUGBApLfsXoMcXVM4x9FgXm7Bjj4mTr7F4rw1EyiU7oMTaV2TqPcDtTpnz3zvZDZxJAX1YX4tyHjeWr",
  "key17": "46UQ3qFDp88U7QXSdGGtoA9wjLrVfRqe4Qp8SHt2bfXq9qbngJe1HdpQt6yiWj955FssXmswpQeQA2cvN9KQS8ib",
  "key18": "2h2Jc2fMxAJo4t66fmAVNQhTQbFoyKDL4J4sE3mo7KrcGPk1NiBCkFMAMPubQ9LkZshuc3RBrgprRfbjyCaSLVGk",
  "key19": "5aGd8yku2sJFTZtT8aeKxymrUK381W8Q8ZcUfBjW5jVC1q8oQRGvQg6Hz9vN7ZXW1myu2y3s4jRZFeB5dRirLqhW",
  "key20": "2AwcULbgmE6DiiHRJc1Wz8eeaj3yRnaDiXaKHQze4uH5o1p6WMXVDJDJWGDA3PtEqvTeUq9EhqPyG5rY6cidYFxa",
  "key21": "paiYByYiuZbFabWeUuA1UcgZftksPv6Kaohiyf9BfTAKgWYmfaeLARhj4TKQmrhk8oWrQG8wAxDurWjhhtgiPie",
  "key22": "2i291zxoDnhk1C9CYw7KCAVDKdLD61Un2heRSW78qD6u1k25ACC4fncVn7MTc9BpRda9qAeeqdnHEj4ebXWVGJos",
  "key23": "4u8qo3UvXDHiwimoJEckrmWZU6QVcKQTZdSUwSyMmfPTeZmKHnLLzMEJHML6i3xE2eEv9ukB49YxRACBdjCyi2YW",
  "key24": "9hEBqvScVRLBpXL7TP6o6wpkan3sTrBxZZH9A14pBbxcu5szdq8pfvPVJCTA4SPD9oMFZzvA4TtR7R3T4hrGQNW",
  "key25": "hEVEnix78NcWt4unRoviWfsrZ3JJgHeu2HQJApGFV6yrz6gF7Rkcjmw53urSvyN4nQiFjqzz1xDiLHKbg7zePTx",
  "key26": "5cXydVSFuRFvNgbhysgmnh6SnykNhrVuLqZj2xoLCbWD7wDbqo5md44CbuNB9agLyzY8eE5cMGcjMaZ3stJtBjB5",
  "key27": "3VqFPfBjqZz5CbL1SgJseCPjECcTE2fp331xHJRZxLF5ztdJxRvzbTNQqsbgPNhhcTHDYtVchXFQGM5b5amCkLT9",
  "key28": "zXvo6uQz2oaHeYmKeYoymJEEyJJGjsVurKJ9BHeUGvwwuCPiHWXtZQurwsuTA24mikWnzBbu7icHABNZjF3xzKt",
  "key29": "2pdTf4ZsYaGNnNc1e8XAzLmyjqBKUzHWLsjyFNLaFpfXjgb6t3pgiGGLB4JvMduxfxgxJETTW3KBsyJuT5WyuKo1",
  "key30": "2sSRTsWEh2jznjnRqnw53vs1d1jWroUXTd3HFtGdzBQxuirgmSi2wQu5kCegniu9LQzm3899n1apRG3Wfi7nLbc7",
  "key31": "2sJU5BL8ykAZ7xqwdLo8JuHLV7pajrAPQEHmPAXqrbv5yjmv9mFwKnZr4haXWg8WTjmwqobChbzJkTwa6E2UDU4Y",
  "key32": "1qgN9rpSTveNdNta6BVdZixMGM2Lok59YDqcHikCgoQggjJ1X2imb67uQ9XnGYnWEEBDjhBv4pYDu4nCjYpCpf1",
  "key33": "2865xBJLvhZDqU4KW8cSz4zvddWze2Yu7J47oxYmkXt8rudkzVvMixTq1deSAbuvuTkwLHU7cJfhwViLTr76xJkB",
  "key34": "5bD4H1ZcDYfSvvDybiGUUrpJdT5RZHsF82xt3GuUt18Byt9r2tr9txFUjHaixi2LMB8yXB2vEd8Y4n1j1WT7c8yE",
  "key35": "3ZGDiLQkmwa7r4RdhTTitd3AoeoAjkWacMCnjjkVPoiTxBBuEbnddXtdgB59NpaaY6Djab55UG6XFqxR7C6WMZk3",
  "key36": "n5KFTSZyMdRKCc2jpwT64m6ih9kPDvmx6a1VU6RDbdt9NDQdzqNKrdvBehdg7SapAjHUNgw4R8iBhEdzbTB4kGZ",
  "key37": "3sGtXwS8LQELEbg9LMFfLeSHDjaNggMkLD2jnunf1V8moTo1jBNsc299QXBvxRC3qxWusvQLT1Jw8aHavnhWFrKe"
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
