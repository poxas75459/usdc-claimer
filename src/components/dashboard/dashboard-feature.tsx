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
    "5JJLvAsVavASz6cjPYUqM8jZThx5wGEJ9pMTM6h9SZmydhMd4Sa5nmAHMBX54wDjTozDLnMeTbDqXvQxUYcuNS8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GpfGcL2J7CBXMS7FFE6AVRP7hsDfvb5JBeb4j5dKEebtGHZXNrFUtrLMzo35LD1TTJj8Ey8zcZMguPSGv7amc3f",
  "key1": "2nsdz5dDUc43qu2RciAmy1WG83AMmKZmhEsNdxVZqRgTV5wvC7FrX6GgA5fFdpVN9DZfuxxKRX9YWnkLfv1Tvkbs",
  "key2": "3sfCP18D4c7F4ocwyosuvihh6jirc8sv3NT8DG1fZyqC3NAZriEU6TKCQ7UhGKGQHPLwrHVyymXiWDBoA5pxM49u",
  "key3": "4MfBPDVRyFmxE9jahm44sJhHFwzqf9nZ5TgytvV7J6K3rxP4T82kPmrZLb5kVYy585jH9K1jTYgVYzWZEuwhVios",
  "key4": "4iEWWerntgHc5FeUzD13mvYgjjA4ZDaChPk7Wfu18Sdmr2Bmb5R56kHpqDyLVf2U8i6u9LsxDNpbvr4iyZ3eo6xz",
  "key5": "25W35N4zbWBr6hGhL7YWtt2sqKEo8ftLgxDyY4ApD3vmzNbYrEayWfUwmDDzCHuEHqRdFFuew6eEYVZEKY2M81B8",
  "key6": "4rg7irBv1UT6mUATgZhfABptp8AoyJk4uhHDPwJ1ZZ63snzg3DKfEa4YKwqeborMJkpqX8RgQnNFfxQubcYSjR3Z",
  "key7": "4pod3b8ShAe8z7mxkQV5zj2buPZGxYg45ykHbR1q8rqoAMFF17PVBJaJ65DTPUm1nyLTMoL5n3FcoAddYMxyzZok",
  "key8": "iwAFQSEXi1n3J5NDyJBFegd3VixUk4AF3De8KnqDSg8RAF73z4xaJqTHXWjUAKzcwcu5zAiPpFwXjbZ3MPAoSjD",
  "key9": "4JAWQZx38azJUE1wzFzXWuetN7fAtuKJ91d7oBC99Q4X6mMYykSc3t4aFMc6MTdcMUPn4vaUK6UcFcvYCyoJxb4t",
  "key10": "5u8Ut4qvg7bF4Ens6g3vgsV3BkC3jr3W5skAcHMAdBAttGQjxjyMSSPkhYGQZGe6MJr73WKUDEBfqrnwHN81LXRe",
  "key11": "2bNQQCf6Qr51g8cu8C48aHnWQHuJBcbmZQYY3hPTHU814oXKQH5SfDei7yLM4uLWtNU2mUjmChKRuALvCRaE68ok",
  "key12": "533hzAGwgmHHj6d3fWDWqrsXK89fQfSxtVGf7Z48FtP2mLFCiaCFQ4GfYhwFDve2BVtehBdPfKAxcFk7VvVmpmTd",
  "key13": "5DwNJBj3WLTmVnZWpLRDtu1qF1vTGWeKCX4naeP6kLW7SA5QNvBAosKYbw7zJgYc2WjFCzym7ShzzzMZf6zmDmQa",
  "key14": "3FFADdx7hFLHLTPz6oiTgnafVaTUe1zQpsVcGiMBDBg1UEDtH1XSFuPBS3jLAy1CtycrvFWNWoLRs7o59j1B4iuK",
  "key15": "38Abqj9i5ZTfbQFU17KgKaLJjrgaMeq5HhuHPeP7oUAfuZnZAx2ZgrbdSxUAspgLhDQxvzxFujyMnbeWdSz75Auh",
  "key16": "3Lmx4srDfyidpWdMwiUFwz4csQSthWjqjsGEcXZmJQvqneNfnnUicUjTppVWsnybh5kKY3sbE5jdXCMKnbZqaP6W",
  "key17": "RX4L3QWTvugtQB7XPR6RjPRUvY9D3RKdQz1QS6dRaP55mVcMWugBFBc1hdAwoetpSafnGcoyxQzV6HwQ4GTUb2w",
  "key18": "5MMuZ6SqaHkgSavUf68fqe8wvHRWLKSi87as4ptx8zqckaSQyv4fg2QULVQEF7cF5QwPwHFJ6CoAWLtb9CkSz869",
  "key19": "Ti37YGCdTdMN9sNwdSjau2KAyzRZnvacufYQHVgRn4h2LfxgQywFpPZJz2wL7kYuh1v7JPHMt8EZXWDhbGeL1eG",
  "key20": "HTHjgrp7jaMdWyipKeJZzcUQ4M6w2QUhanTQJWAEXi5dbPbvZLtBuQoCn8wfhEd5nRoAwifXYJvru1TJQsBE5yg",
  "key21": "3Te2vbTWjwcb226AgUiDMcKs76nYURCbczeVwXh5ajcnDchhEHJYkmMMjW6bkH5RWf9zuKjy3eWgDkE5rSFsEpgB",
  "key22": "4EKY8vvFTxi7xiqrgiQCc6SM7MBRhcDHpHoUK1rG23tR9Nt7hG3HEbyFQKS8mtD6eW4Bjp9FURComrxJm9HJrYJ5",
  "key23": "25MUDqqvhRiCi6e23uGUygrssJ5ZQQzRY4k8s661aA1wg3VSKc5JhpiRn5Bwm2giamszdaf9p4Tn3kot769joeCi",
  "key24": "44sB14MrhTdiqQ5Dz189R8bZ26Ur6AG4eDZ5w4QyNN34TdChgwhDMmduYeCR2jbzVwwQw6TTfWeK4gv9XwBEmgHt",
  "key25": "4KRDgx3HTSqRr7gsTAUodCozJLDqsjJkykfPCTCRKjx2Cn9bgqpPjgFWMF9MmYXRaSaKLn8n7FW4muJunPPTZDEB",
  "key26": "2NZjgty8EXeWQtoU8aiYQA2EK1ZVFBRSBNJekH2XymT2VcXhzuv9718EBpyUQbAqy7pCc5UJatkZovM5GVMGw1K3",
  "key27": "5k4iF15aXMuFbawNrA7PmxurX9zzAfch7UHctxVTeC8wPncmzBaYdFMege35Us5kmZcgAhmLe4wjpD4sSfY5BkNA",
  "key28": "5JG7DMwNgXpqkMcL6Ny7fPMG4WeV55DJpUyu6mCTjzk2ukMFe5deA4BTJZj3Ddfk8yVFf58B6ntTKvw5QqoEE9ga",
  "key29": "5BsxNinfivFwfjtRNpwyWUKPguFcf7cAtMxNYyWHMX4qDqhLcsDbg9ijtypK4EDYb2HzCuob29QDARaTCNVAVNhb",
  "key30": "64K4Stk6fdYRhwrsCZCMWKoFZkpiqfHaAJNgjRo1v21EmAMXToojxEjvK5gsCkpZUZgKN9k4bEK3jMGmMhmW1LjD",
  "key31": "47nSfUkg6duFeNBorGgysJMfo6arZ9pr7nLTSJ5GR6vSz8NHNTNw7sVZfqEti5Tjg5ubxurtdsdaidysX3duy9NF",
  "key32": "6B1sELFvoSScBTDiXpHHnAxGvmCVtFd4CADpyUAXzrTjRkv67ffh1cgQnHbxtay5vagJ1mTZfUeas7UHj84nTBG",
  "key33": "9bc8n65T69fGzxrXiZKeQKcj11tpHVBDafQdU7YLdvJu2UXCFyG3Juz98HyfSvSSXT3Wq5dhRewqKLujpzHAw6b",
  "key34": "3C9qmiWupqrnCFqSeGjYXp74pCKBHDiDRimeKQEBBc7Xe5o8hNtEqh9aEoFYwdkL6PzdQ1ohxDdnGKWjzMizWrET",
  "key35": "33NSjbmn1TZsnDkynQVQtjqgMWX71rABqPckgA8KjqoG1ciRKVmAtJNimQpDQcvgrzhZCN7KtnG1SkkTJ1yKDtmu",
  "key36": "2ifuVwoKWETn7BmaXLtRRUVvaEmDojS9j5xbyfxEVX7bs2LhRQ3LLfuSN19r5ox68iHP7n4RGTE2kZDKSopbaBVs",
  "key37": "5Sc7xSRj3fK9Sv4LN9x8is9XRrPXj8jwzek2bDMdySZ2BZLsF67PRBWksV1mnbDeh3Rivw9mzkg2vQ3io79RKzba",
  "key38": "4GmGFTSBR9NRZRYWNsKJ67feRWTLTrU8uCLnU48kTxzPoZAHo4EE3ebabVoqaLVgbgSqPLV2otW1k3ddtLk8xEhx",
  "key39": "sHpkx5yMznK4wvz19XckbRsnS1d3JA9DcTecZvZJjZcf3cYvmvErBP6wpDCyxcNdWDa6uQzrPkkejpUYGAMRAB2",
  "key40": "3fpeLfuoZbWvHzGrLCGjBKDp2Fdmkzm87MbKGekygniFz4co5hXXS6gsA8RmsfUQzxbNMh1akNyhRPxherXjVBDD",
  "key41": "5E35e6CQT92dUpfiKFcXdaD2KgpK3rFaEvHLZCndx2dK5Gxnbc5HYNr73vGxc1mUitQog8SR35NXsE2A3wrCGWEn",
  "key42": "2gXQxECMW6dFcYYVwxUxqkjjcMXFBL61qNx8HhsBqNbjhh79vx3NN78WyK5QbqWEhDK19cGRRwj7bn9ZJmb8DFRw",
  "key43": "3AVnHYdbf3xjMfzvdxa5mVDsHTKNjuVCviRNZv3VUetiYLkhzZS2XATWPbkWn3tmicVFEG8TM2HFsZGtHR6yHE8Q",
  "key44": "22cpFvoqYwXfbcpDQAuq9iqG4zJ7vbtvjCNxJ4YCGvjXAuq32Pb7pEvUDhLHH6Zw6QJ9yyBv3YdJGBJ7biX1Zyox",
  "key45": "2AFfMfzGAMwqyBLyBaJC9s8CaGcxHKTXc5xznY8MKX7StWPqLrin3UGgsY9HuZJnf2rx9f7qrBDzfctCV6YyjRUb",
  "key46": "2st9YaLwGV62UTYosJcAD3HwWdgkqKEmCJCC7kHGDyE7xmv3fsoWV1cxFPnZyNcJXmQz39MMFvqZjsVvgVZ23ZQk",
  "key47": "2tZ9iPkWhizuEUqzp6bm2MznYLYb4JN1kHBVsDzDa9ut7NHT2HrNMsobFcy1j63wP15Gxx4yCu69VrwDrmCZkhnY",
  "key48": "4UHfVWmTx28cfnimwGNx4p7Zy1qiC1gkFKXANcCZSTd9AGKrPPxwWpW4JEGxcibLLCt765GFpyuju2wtyMGrUKsm",
  "key49": "vt1HsdT8JVo6KaXYeL38haACmCmKVgxwQo4JdJRYEoidpXhRYNghN42rXEY2aPdGEWLHDxDbmk4Ujc54fGNvAzD"
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
