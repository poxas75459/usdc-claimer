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
    "3wjYXxrPDsgSk1VHdEKatdXzVVjvZPfT6SznxQyfQoAbAaK5L66R7AiYaFoCkWP5SKmi1bz6L1DjWz3pqFoyu1X4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C31uFaSUNBpfaprhc4pwcpurfm4DVjm6ZJWU8EMBXay8LrQL3M5UZsqhq6bKNFFzYdHrxkwJchwfssvzeTC6Gba",
  "key1": "59b2E8suvTqNzizWuwDQHegxYHEoAn7CB2oSViDpTzYnSywEBkSKcEQYsFZyJR6HeuS2ncZwgeGa4PRiuChXzQxu",
  "key2": "YWXkXJtH2aEiXXKA9Xuu7hihvi2VpLPitSA8EHMkrzzms38qqNwDSiF2jDBukgoqof82V14SDVSRw15wcBM8ubU",
  "key3": "5LoxbQ1LzJLoSsMHPWYh8A3ziwbzCZ5zvqi9Py6myAtktQA2RZw3fSZzzH9uKi8uPK833exeggDYNDwSQjLd9xw2",
  "key4": "5KzFw2GtGdq8niMCdNULfjx2nQGdxQjySWjDYuwgQaMpug48UmqSnBquSWHYTV2NxgxXQcXaFzSet9pmGfTFGXpn",
  "key5": "5AN3S8NV3GpFFj4vywJP6Mir3Aoo1Z83t2BXV1syxpctCHpxR7AyqfTccoYT1UH67RGpYpmjfMLSDLk5ki5inCRV",
  "key6": "5oR1xMGzLJFxkg64N5tSxA1o97rgjzCYgwA8UH9rFVRpvWParsDWxMCTrbC5m7PtWN8BW2h37zqQ8Nr1qcHPutoC",
  "key7": "32bphprtRKYXMd57titVTcbEGJqYm4n8pVERCaZCq7ZLhkA71FuauTnQuERKkCQ89TmmnuNBDjKgDEN1yexq1Y8Q",
  "key8": "3DdCadSiZ9KDErm1uvgrYHPe1DWVxNGta62A19cpC5rEVVre5tPHPyjKX23F33K2qCs2wNXAbK7NegTcU5xQv9Ku",
  "key9": "5GAeb5pmLdoPhbF36upW3XHsnAb7U81pwmHGPnznpCGK1qHps1yTzh9mB44QU6Lf1TXwTxbx6R1HTLD4X3j3tLDc",
  "key10": "2b2gmUfpvR1ngve1MHypJ4a6YSLuy9kzVEbVEre5hQqrzBgH9d6RjjsFTTB67MSCua4oD5Sg9Eb17E14KahZ8kYV",
  "key11": "32xAT7t6WhkpkFDGFXrAxMtJv83Pk5ZA3kYxZXFFu7DSXKSbjFnyyF9FKXJxLjkwJ6HvgnSNqvbTk9vkC7oLSfMH",
  "key12": "2tet6sF9QGAB8UVFL9XAZGGBpDbJLjL2P4nLoxif3eHnVEnDBmoDWCDUxji3zwFxcLayw3JfYEFkkVc3XpLzBcqj",
  "key13": "2mk9coszwJr7DKQPtHN7QgstdocLawzkjy4FNBXLz7zpXwNR4n6qs1KfAcYQufT8jeMyRBv25aBCEcNMpsguzqZi",
  "key14": "2wTznTvy2kqVx88PqFqwRg2iA8gCjmwyz7a9bApBjioRZAzmXbWLzMBy7kZtHE8LFtU21P3ZkcHukRyNnvtXoyWs",
  "key15": "2cuPH9sR2Qkgr8zeFPsctW1CBwBirmxWbZN3UxPdYcQSEwsECuEacnCtXFgwmcG9tZKtRpD3uZpdwT4UZJww4yYs",
  "key16": "MTUzeTy6HAFt29VLtX6KtmWyKm23tbPxuYscQBaU4p9JfYgMZj7b4gKLt1etaFBajtWb6ghYW6yLisDavVqL35T",
  "key17": "4UV9JboNEnzbibYbu9w4NouokAgGWn96g9KDspXeSvC5H1QEX6i5QShUnuBtqeNucdwj57KJUdTSxL1UJUntwN2u",
  "key18": "guSSGsiqcznPZoTpTm6zJqoV49b1s81itDnukDMLi7GxmZfhFvt7P61sMMCWSRtgcvtCnw2xxgF3hD1miQ26Wip",
  "key19": "4nzY7mPLm1oXUSDkA8UVDCmzXQ2RGjx6C8V7PWC39fBe77ydCR82gXHMuKBJ5zQCsj7s1JgkbFtyR2kNS6GP2q97",
  "key20": "62NfKxRa1orfvx4mR9MRstE3UUKDetrtsU28KZp2VSwoycXRZfLTAfTAndkXye9J3NQsmDR6Aenwc8XtUyxuj23a",
  "key21": "2rd1ykrEwqbFwW7tJasWJ2YHkm6RTCq84garbLef7GHLaBeKsuC5szGQy7SBSpZjnRXPNEAp2HQCsokyCzNMQs3j",
  "key22": "5xW12TKeas4z6ZFC59DrJos1hTeaN9EFhXB1mgvJ1UoT6yF5PcJygVfXo91LTQZKqTr9RzGFCMqjTBN2RPMHZS7",
  "key23": "5z3VxsgAneKPryxGgLmHDX17XKAQfWLMzL8zcj3U1NAKHofPGimk16XFJBmLPrr79qRLFFKRWAPH8FKAMHsd45tp",
  "key24": "5xwAaCvJHazrPG7HdSBr6aXDAHAuo735pzjfwJGV9sK9nbVmKFbipVZaX3P4sevZsrSwV5QMSNgFgKvBqA2CENk",
  "key25": "4o3KzhJFHAApkR5JyCPf1oCmDkSK3wZ32bXooPUrPoK1CyKiNNjbMj1gMPY3BF42fECDJB8VVyXj6wQ9vbbSftqM",
  "key26": "4iz6YQvD9TWsYtFFCGWD7ZUUgCmjgX4x32aZ436zoD1YDmpBSM1QTVV9LiWc8zD7DX6TC8K8av992UXJUniEHsrb",
  "key27": "3D8gcUSHPtrhSi6MJ6qRrGY8xCn7UKkT98pM1agtJSLiZyTDV19rb4TpbM54j8CxYWxH9tk5t1Yem7yLb68V18ce",
  "key28": "mM2QcwPhZxEsfQmLiYqMgWXKP5wrwW8cpJUEf5WhyStPPBjJyvrkdX3ZiNaeuZ7PXmWc5jk4EQwbnHZ5GDasb2p",
  "key29": "3nLtYDcKsERVWYnJhNHRJVVd4TfFEtXqgKn4MMYxa7mRUoDbLyVVnNVRe32jsEtLN6WH2uPeVZHT5GQ92C5veRrY",
  "key30": "4k6ukorb1inLZy3Wbzvb1AePJi9XP4tUkmcD9Ed4C74P3YHWNHUEtb675oBbvgnM3t5QUwkn8vHaK84j4ez1Tdyu",
  "key31": "N7LowiQnXNxGMbyg3ZD8qktZBNvBUUDufENedE2EHuqvS2weswrjDRCtVxSgj7iximYdDfgs8bZv9TRxTG547KJ",
  "key32": "5yv6ErHHuXskZhVKCb54Yo6LKS551Xvk5Vrm4fZN5Cryuxs9hsXfczHNnyoD64Ke6ZRUqQh6Mg9Z6ufyXfYVQXxU",
  "key33": "5SXacid5UjHo7JvYcpRzsWfWvvcQfMtp5i2eUjyHZvLe9GpiWz2dcV1yPFbUVDChrFTUbnoQWnJv6ipa6Fu2D6PY",
  "key34": "2mbAQXsG9Ke1fdMaWibfY83FioWHd9rKZ77QCzz8WmNcnYgT1rZydGL14ur5htQKVs8touAAmZfhNAaoGBB531jh",
  "key35": "4ktJqK8CPm9x4LpRBhHjPjn8QBDHyoRMR2QvqKfeKyxKZYPh38kWrTE4bvRi5WjesrD5A7JQXZHxwKq4yNSenupq",
  "key36": "juhMHiRMG8uFWNbC9Va3stxcWTPToGoyQ1K2WHPqhWYU8Ku4z7gKXUgCsNW1eKTk7KVQudeYR6BLExnp5GDDoMc",
  "key37": "5rL1Y8atuThWvBVkLtatMxcdtnbQUKVnY48qcypk14nz6MokhRsCUU8499jDx7rYpxAw87fZXWpCmQhXhnfC5Wp8",
  "key38": "397pzV66iH7YLsZQN1rJroL9DGeqTDTz7nWzdXoSpEqtgq6L49He6NGGi2QMMX8qxSf2TMQLhThxSMEpHRw3hnjm",
  "key39": "4VFwpFbpJLRJ3WYhoQtoDXLNHQqpAC4aELZXWqbd8GBNgANyLZVLPXAuywKm7AL4LNWJTD15kpxRLbeXFwqYSfTC"
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
