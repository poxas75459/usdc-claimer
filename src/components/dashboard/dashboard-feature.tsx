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
    "vbdYSHkPH1gvq2ghxYanP7v6s6gjfm94mhdmMtsoVStBmBmsVndTu42w4VCJ1ykv1LNHaLqzEUiyKt16JxBARF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YxQ6GAYvoFwi7LLkqhPW6nzWdTdoAThcbcz5BqqSmFiYdGHxKoJr5MjnQrxkg8gkSLyRhzD2eSMhfQst59oHbnK",
  "key1": "4MsqRReNoJgaCbNvCh4hWgWYVyrWrF5D9TvK8W7pZYsWt1bHrSx7nwhyZMCp4gFFg8GHqP9x7UeeZUBYwZ6n1FbC",
  "key2": "4s7eF7qM7v7n43uGNmZYEfoB9mXUNbTqjdvPAvMxVJMtMkMjYhMQTmfTc98HVH2XcupHb69QeWP4gGAZhXF3gRAE",
  "key3": "MyR6g6ZRf538fKaw2TY3Erdrd1uMDMqrYKYRXKEwP8Eo23uf38SVke2Cg5BmdXUAzfCwVf9K4jo8Duk1xHPZiWJ",
  "key4": "4W8mctMpY6AEuiSfGib6FoTjkpyZkN2diakzaiHZMGTScp1em6cs6RHtZR1PSrG6vmZAiuZPwyYs6V7UpbDfWTwY",
  "key5": "jtSqWQ78vgt667Zwwnctx3Seoi8mSaoRPutPKKbGr8fTKvTKxiVEwk37CH1MLS1WcTfdvLFNp9JyunPh5CStDE7",
  "key6": "2LZbv7PM1EeR1vnFLzZ2SWaeXrZYD9tfMX3Ce89hyrAJjuf6MxGtvaDGn7Gnwo1n1kQKL4MbZwm26Wnr45JBWccM",
  "key7": "3hzrUedUTpyuHrM84F9qJyKfhvrTzWXJ9uJNsB97cnT7z8Fhizg6N8wnW93uq8yLBouTPWQATx5X3Jb821nZdqmC",
  "key8": "VVD6Nm4bcW98Lc2YfMLBQAa3mK858sErPkCDfRnb9WkE2YW9vCzE7sUUK68bTev9RNXimzLnzsDzrMQPpuV9mtf",
  "key9": "PNL5KjViecgde9dHR1aqAg98bCaATthxNFBxivvaFq8fbQFTzVcMVXHE9hcrxPC6CFTfeU2oN4PC4oopGqZeVBp",
  "key10": "4nphfktUcWQFb47KkSwgexwcMfk7advyHUaig7uLBESBesaH45m88eyiferU7TZNGuipfXJDa1Y9oDyxb9dE7LHe",
  "key11": "38wxkTx9ntuqAedxFTiHJ2CrXhbSSr9MaCBGHoaEXgbrLkTbV8jyQweh8VtsjBAZ6Bop7DiDnRzwVsjo6XcxCvKD",
  "key12": "78jzVZYi9NM9mXAybXCYN6wnpqzAiCcGe9fvKS4yrHzQ16Z8S27tJmNvJeyH8m2EB2woXtXFPLAqFDsA4m1Jmk3",
  "key13": "4nXzUR4wkUYdSUcnknjv2BVcgzzieYtVpHyLy9P41kWgex27wcQ4rfJRpQfVWpv6AdHR3ydj4uxzrRFZ2zSMHVdy",
  "key14": "2QJWSzPc7yrLi9btWshEPRShaLwMhE1YQEFnRCDsYGynn5z8cqCFjMyp7Z9UrBvNARJGxiK526RG9bQHAdLAxYRs",
  "key15": "49wAtC8zmqcNQ5UHus31YaPumeUSDk4PWq1mUhGd1rE4iH9Ft4MdMjJmLBE5h6TdJ47BZzQ9PyuH6eufaXv4Vppk",
  "key16": "5yUUVtzZ6QvG2Yqdcw4HFqie5ubnBeWPeYZV1PCgeWgTxcnAxnFRBnJHagYhyrmuGY73NbgVgtL8YWCcFXdi5WXN",
  "key17": "5Qrm5HprNKjLh8GLYW2R1M7YmWs9yaDq3bvzhakTLoTBeu3p2FRtFZHBRLrTjqqLW12pUmTLzLGhant1FRM8hZCt",
  "key18": "3jVt8xbT871MFdyqUGb2TBfZVb6gWYMhuurFQNj5Ga2Q3TkuSUM1ApKzR7TLDhsRcCPiMJhY2y9GzMMk419Tnpoh",
  "key19": "4b5dBqz138C3LmqciiAmcA12Tjp2hfBTZWDQqFjNSvViAwduNPTbHCaduKKFkTqE4pdCF8mFFhotHxLivrN8614L",
  "key20": "ZRjw8exKQJagUhbY75sBZHiW4JxsrhRgP1uK6ik6acPtyEWHZV1ErxwTDXqE39L5j5rEUp2oGEZKyVgFj9yRpKZ",
  "key21": "3qJvHWK6S1ZCKohe6dK5BfxBrCmPx9CQrgZkMqasjA8TcxQDqSKfpubU6pjcFxueabMr8keY3RDAwwNxS2ezA8gx",
  "key22": "4Dop4k8nphneRKDLQEgvixSNVzXRiKzCwyi4n3Rbi4MqCu8iNNZQNf3YmtTdjqtG7fuwX6Gn3vsFskMvcJvGTkgH",
  "key23": "2ivif6fS6eJQ29A14EcXqgRtKz2JEx5KdyBkb39FwoME3anHhPekKB755w3o1rY5jJf7YzTu236ece1bsMNqDfJi",
  "key24": "5oMQVksyUhG4vSBqYN7kSURxvaJTfwaFuiw5ToBvkGq4ZcJJTnxD3Rs7rR6tGQTTq6nu2pV49Bpqmb2ade96ruC9",
  "key25": "fvQMwayxgH96yA1i5SPZiKh1MJ94vKB8jM8nyNzrJ848JRixips7GkWo1CT9JVcFxCnLirdiE5MgdLZHFZp3Ew3",
  "key26": "kodfjoHUiwR3xAw15VjWzJJQi3YpWSmvJMZJBWTtMBHYK6hBeFVLiH25Y9NvEQSVf3WkTJCa2wzQg7PsEeNfoqy",
  "key27": "4HMVNskHos5uQMdyEPAxHKkmNmJaSEqJmXXmjN5ZyhysrSoawe9aGqUric3UchNinWs7i59AcGKyFJvUecZLMUga",
  "key28": "m9LtMFCe6FzZW3cpY2o3jwgYUiT8KbyKSvmx8HsqpsGwVAiwujfqYrnSpmL8uBXxoCdizQ1GHYAoGjJ5DgRhoDN",
  "key29": "2FTriWHJGAeaQhSMoe4tRxx2EjuMJ6YQGN6RRzuzSL1tEehMnxykXMZw6GiLQsvyJoiVicaRGeZJs2KvzHPCU2Sq",
  "key30": "HragpAGxH3s9vRiBf1j96CzYXAUQKRSGq8VWT4npcRezdn2acPTtXWCSU6kBL38v1foxSjMENxSfmCQTezcm837",
  "key31": "noo8exSebf76FvnRuaggvWLnyrqfRmdEjKoNCgRr7EX67zbSCh7RxRuiAxxbm5KohqJwtkcMKGXLWDptHM4c4x1",
  "key32": "5zTS5gMxo2VxwVGhoQ787pUoNYLiZi3WEGBTkhax7Efb5YieUuQvM1jCuUwrHnZetqfDMBmGF7J3n2iYuYGVoTvG",
  "key33": "2w9w6X1B8S1uNWFaLdtboiFDY3ntwmZ9KgnMmM55xxLRXsHjxDerQ2G4UrmAj9MQGEKookGb4APpntLKU9uPABKq",
  "key34": "2hpz2RCNvfu4eksXSoSQtkP9XukFU4hrPTpCB3XGJMwqqcMqsf79jrUjhMd65KGi2Ny55HCjvxkm8qEVKBmXhC5V",
  "key35": "4cAN27sAeZQ9LWDEu24w3AL4kHrWyQs7j9nCDv6RRNZJ3goN8gTdw8Q9NZ5QecNXxZsvZ3DC3NCNJ7tuLkrvo7KE",
  "key36": "5o53qPQv2Ub9XeoPZWXDhJm66qv611ZYtT3gcvn7U8gtmiAS7sjcYt4QnENwZSf9wtMiKspMXPfyxh3dZSLWvLcA",
  "key37": "44o5D5KxqwyE3qFoLCEfNnKyCYPYXmyzvuePLdY9VuVK1jKs1Aky9uDM7e7ny8V83E8FnkHjYi7QtQpHPLSDs5j5",
  "key38": "nt3dJFLS5j76c16hmJnMg9d4izzVimBhhdUXbCNBLihLXvqz2RXT1xcaesx4xvXLDD4wx68792mK8pot1iCv5CC",
  "key39": "4jiNvsTRA1D6vnRTGRBVcrUKHix7shiq8CSN4bgaSXmDkxnYc43mDKVnZqznRyqbR8LLw3ZnNifEVqadn1XAJ7iB",
  "key40": "jpRzD6hc9Z7bYkpBv1V6sssq6BxyZB4kEYihDxLQtA7PAhut5h1SkkaWW4pHng4Hi9EKnziFMahwH2cS6i4WPYd",
  "key41": "3X3yyjoYK4EtiiwRW8rN7HbSCNj7iq4cUMwCrVWxTKCd9S4uqZgLZ3mEiub6u6yLN7xbtCE6RVjwTAtBWRtWxZbX",
  "key42": "BmZzvb26W1hxrMh5VsK3npkvez1LFUd1k5RbXGfFErZ4sk8iMDwog77PyQKGDQ9UH1w2MSrS1aiVGH8CVhAaXv8",
  "key43": "614P1sPjeHQCCVTVu5pXYbS7QScavS6vvwgzRfRFHJZJT2DQfXSCCh9bZhn76mBfTd6338JfnMx2vcVSQzqfzMdq",
  "key44": "5rqiXBgnUA36kfpwrQGEz3sD4ZzFvMgQPero83EdrwpubzQUhMLUxVge41wMrdtu6gdm8nDzeSv8Qc75qJck7P1n",
  "key45": "5eyXgs5tjfM79uLbGZgJDZc6hEsjcE4ujFXgcdUwX436YXDAmGxyD5qetCVBM1LuJ3HTccMYyWP1SNqNNB2Ev14u",
  "key46": "2tcM5CJP2vNRW3p8npggjj4fzEHStfu3X3sMH9NHc7YPMw3qAR8sG5u2eNFj1p9nr41nJghsJzJppJXw72n5UgrT"
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
