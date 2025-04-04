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
    "43dFbFJWvtp8aWcJ21CoGk6ohguo5jBviKWDasg7WfH6zTmfgHp8iW7sXWGpGs2E2ccqmxeyy9MtJh9JUNC3tAej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tbLYxG1j7jbGGbfbkGwttHTWp8py3ySQgVs4NooPy76NC22DRCcWyXqQ5T5kCuhXnhN24FCrWc7LR13HtMnP72m",
  "key1": "rXSDNebEtV1ByA7gFpkzbdzR4tfZSDoHfycZkFZycDbS9ZbwEbWnGsKauSJ1vXEAfmAt3V18zKxf8FjwppZYxrk",
  "key2": "3MhWN61AgpDv9MKfEzGVJ9dxC8cF3pBCQCsc9ZDuj46rZRTVDaPAkn6hfMN8RE7fLmne8WJ1z4Qw2jnULTWz4jk7",
  "key3": "3MCy317pmApQaGbX4pDbD19buLdpPHzQ1FbAg3aARvnqX3o29J9oYnYA1qavPQq4RXRzsA3Hmuauthp7oRF6Es6s",
  "key4": "QhVBkMCsumxyeJs74iwkzhXLUQu9Dowyshx3S8bET9DALQG9mmanEDBvw9Xn2L4PM6H9E3kTZ1arzoHCF4hArcr",
  "key5": "ncxJaizhjPvaMBNCKKp9h9ygaArTCxVLtgBfPE94Qv28BhXbiXBPea9Vqty9EzgJQzSdsjs63SmBr4ptR3X5hrb",
  "key6": "24K1p9k8cmdwSccwrVVhHWcFTkgvwx9bmss2L8huHDSSGqhFLHq97AQA3XiCcfGepfL6vuSUnhMtqRvbcZfkLwvo",
  "key7": "EdAcEEk1Pm8VrybCetK3ZbcntwSuCFSZUrnQTbXoDz1i2azr2fGjvdFHuSuienwEi4eFWvtUK2U4WATNCefJC2o",
  "key8": "1Y9Q9WAg8TyvEhsHWyqRMQ4DVZaEwyNDB2KqRSXsQ2icY1okH6Z1igdYSGauAooZJMNq7xgC69iPwJLCpQfULs5",
  "key9": "3q6HytNyApVKu4nRxGf8pSHYKY1zJy1Mj9RfYqCfTvSVB83hxqM5WpcLj9xq9SyxXoBpGBFNFNBq6fQAsm2Z3Zvv",
  "key10": "257ho1iJH1hojnCmY4UbjEvh41H414nje7n9eMwyaEWXg8in6tm74KJFTuF8UB7JPe8JAjwX5eE8H7epnafA3CJN",
  "key11": "5yH3GErc5Nu42QruBscSSrA1P4W5HHo3heRdrTYJ7xcZtDXKNJgo7xngwco8dghSW7FPedumzvpLuWrcoqoNSULf",
  "key12": "4De8EWPHMm88MsMWntBuKSqfAC7NcBp6bAM3J3dUPaoMsYzRwm1PqbMWoZwuSeDUiqoYe9jtNfKtLyaxhjgAknzy",
  "key13": "pHPtKHeGUvQ6iNYbnSpH15zt2HzaEmak7oG5B7n16cqfWw16Z7iZgbJe41NntRB1gvdUvRWqE8Ff3XFRkuGaZaC",
  "key14": "5cg3WzM2s7eTQaeYeYLQMqZguWPyTSahQeHXM5Uxd3z4TCBCPsE8xhWaUSGckt2XWiZdCsQHPYsxfM1wWJPr23ge",
  "key15": "3M5VKw58s9qKnKrsuXzTFqaaiistThr7YimMetYwaXbm493mF1hkZRTQiFk9yPsFoTqZawXJeRvsNSY2Dzwe56Dg",
  "key16": "5G2V6AX3pREAQ61xvKnAvuiNzAP3j5kCELvC1vW5qoqBD7wNAttjmNotKdPKprQMDTT1HMdir912p6iyJvksBrh1",
  "key17": "5KmwDw5r6nzj2fEvXa9cQsv6A7yDSTRVPCE8LnvkYvMS37SiRXR7XKFGZQtxnX3yrK44NYQcNgUdTu6bJLuoiWXZ",
  "key18": "56X7WmmHeqf8fKFp7g5xCNKXMputXMc1oKrmHaMpdGSyEJtRdLAEvGYGANKmkA9Aw27sTtoB77X9Ck1ifh4VK6Ng",
  "key19": "5qLjsLTVKDnSs4c5yjYb6c7RXTg61C7MQnM1hyrGJbjFRo8WV5moAGxEKJYa694Pkodo41ZXxbqcftFykDvEEqSP",
  "key20": "4gBbJaA98CBD7JSd1oB2MPv764fXiyg32wSSp7hv6ysqYVgDYy3vNBoTfgmhXRHaknuuZVQXDeZXVAj44HFfUSMG",
  "key21": "SUJvr7HK6s43JPPpN5s3hXeAyiZBgY9Le3v6AcjyjZLr7Jne5rEnz5JCWoZriyUL4WeyudrSSeRRM7LjiK3FLZL",
  "key22": "2f8khpCnNTPaTrnBYVn7cLjKu9EwmqTZVSHNMbkQF71PC8iqjYN5NKzUgcndfbfBzJRyD433CgfHgkqMVgmXsNyn",
  "key23": "WfwG18MSQjwKFzhWLWV8AJAuxFawu6WQRXWzRXVcSiqsBLF9ksM4GKVUhEwNg9GWLJvkHCdwuoQ2Vrq8qcB8kec",
  "key24": "LChAm7y9K6hSHnehhuA1TbGQK7TRya288QYpyfhvGEq1ErW9svc4ThvNz1QStLSfUdypHgVXarGk5BkZLc84YUa",
  "key25": "3eXkArsmmPH78yXWpDeJCJtf5bwFc71DJuV3yR9U4VC5Vc4g7jpXyFKKdqyFQt2eMjQpUmRmJAi1MTayeJGZD4EK",
  "key26": "4VnCdwxxH6fL181udKFiAs2sqGem7ms5Uee82539vvbybvxsXni6DBJgC95avMzuvvoPVnNKyXf8uJAS6YkbeebK",
  "key27": "2vemUxZiNWYKrKZTpQ4grqoTJ8DWUCxZXFVeceC9zXFFkg556wLvzKpHWx1SbtHpqDfwvkaQyR4fmfk3rEGtbfJi",
  "key28": "WFEnYJGAckpJuxdBvgh4Swu3rJEiU5TB1y1joFBrnNz5rrWh51RHHeeY5gpk8LzeNnfat6kdm9Xmozb5M1ht2DZ",
  "key29": "iCkSXHNULYEWPwFmxAr2yUvDbx7XBMERgsPo11amgNMR1Qj3ifeRX4xN5CyXEp4e4yCEteQMDe4CMzXLqGez7YF",
  "key30": "3sLSmNG8YMBpJdk7xjdqQPhV5tA3Nn2iBdgKEKoamTyo5CLcd8m9R5pzaVBE58YhhdhgSrce7psLKxa8gBa66aS",
  "key31": "51cL9Pw1cP15gcdazo7E48oss3se2nt8d7McviBwF689e8FKmwmeLMSGFrCf7vuNnZfYrrTKYEBM59BoAuYHSAtL",
  "key32": "3ESvJgB7KV2s4zZuv6ruxNGjY1X4mE3JddETem5FiUZd91cCQj2g8UYpPyd8gQBdAk1L68R2yL4szLuvZQGKKLUd",
  "key33": "4GQGpvEQ5vwuTbYNLrQA7N5VVTHzzpTmR6o53NssUm2vX9iyGbSgkfet1fEsk7rCaGLz7rRwCxAjkv6Hgw3HWSvC",
  "key34": "2N7QGJ3J7pxGQKp3K1xHTgbLJyDqgxKKQ5o2PE9xbsKmZNXTa2GWnzbWBmD4g6tHhWxQds4HTLjU8pw9ytSLpWCp",
  "key35": "2NdpfyZv1mfFciTHagiugbV5pCx5yyXRfAchM5C8h2dCLSf9arb5aRKPNLtWww8ABMzaVu5kEZsjajuBJZrYJRsW"
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
