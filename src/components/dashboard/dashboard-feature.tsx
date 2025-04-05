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
    "5q4ryyEENydVyHRhTPrEh771Eqi2jsVGPAGu1KfdtFLT2qoFQ1XPwXSS2e1mBVUTC1e44mbbTsiVMkC3vyZdTtEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B98Z2ZVWGC8x99WpfQPtyUsEt6KrXRP7hKY2nLpFpLvKiA59puhsfYiXDrpzNLqq9BXM259NjWBWUbkdZPnGtxJ",
  "key1": "5SiDxFXr2dbndQajM5nAAwhzAnkx43bTSc51DhtBX2rxY87BrKSeqK7XXPBTbdhP5p8S8nBpeBWQTy37Ph1JhbCJ",
  "key2": "4JRyzTGxH3VAtAzEHETuj3mT3UVnwry1mvTPNQvHTymHQV4j5oyJMjVF5Pt1TEwJUJ28iU2WKjzW3of9wiKEh6P",
  "key3": "3LAnXXCzoFofPsuGbNX3ZyfCEJHbHrGgTouVcmUwtLYGxt6uCLUBjBrHcXBoxAjLk3biq7KfRJ4zn2ricivpJf75",
  "key4": "2F7oQLGH4AvbNYCSR2eudau4rzwXoWRczSsfR7wfiMGNCtZdUiCgfMXoPhjhRgiS4GGDHrCWy9nAF2Y3gJovbZhb",
  "key5": "4izfrqyLpzsks4FBR95eCTFWpFDJba6Lb1wztbLcahmLEsAAZXLxTBFenYFGA1V3AVofZjPDwsh7Zgop6tzvPWeF",
  "key6": "5fwNQJLL8D3MGxTfzyGkgQAkaXXn7Qm8zPLutnV6NvxWbXPzJhx3kHEhL1r4BWr4WUYD8J6LyYZ3BmQMcc6cxkfX",
  "key7": "KGSjndQh9qgVSMDs8unTyQJ87YEDLbrnATbKnp8NHYkwW3zqFHCBquNkt8Kn4m29HFsuJxYAAq1CUfvTi3cwRQ8",
  "key8": "BkJ7i8raZp2W1uvJN8iuPQJP2QFZFMak93asYSFQDPXcuKkPWxyigkvynqdC18Z29Dh5eQTsnR5UYVELYeus57M",
  "key9": "4YFkynvehJ6htMV2eybXJh33HxwquARpYmVnFPJkryF4Ah1xEVawzra4HiNM3Q6C9csQwJEAxTGtUPz3169b84z8",
  "key10": "5w5s3zG493bPe7LewX93XW9jNFh4FzV8bcQwxtfB4PCAWFTiYFrNeeJWQuPwLZfSbd5LRd4XMfjQaFfMpNzxSDCW",
  "key11": "4F1KS2wnpQP4eCdDM7qyPNTuNznknoiMiQ5ST5GwHhkCgADCaJPpBnj4wiyCb6nNfrZC1Xh7qMShdQ5ueR9vgud8",
  "key12": "BXpffNbCiuMbsVQwKepMuH7RvTCZrZkt2PJydoVGsV8gwKQcUpjqS6kCqdiD99UtuSYe7JgJ1FxxBXs6o7JfuCt",
  "key13": "F3PDL3cKX6jtTTWS7q5LysfvKyJ1a7vsDY91XbCPAVZS1DjUw3wqsEY4zWrzkca5agSSzZ7PtWkZjRnxLSYeWZM",
  "key14": "5dRiptY3VEmxjeiUFQPcFpo6cAR6AGBSJCzAigizebnFaECNECC8zDgCtvGj8v3fKNZRrP1QAMZjZ61oKY42sVVj",
  "key15": "33FjKhWpmCMSZPLFeA95S5KZ34371Tysp4gusqS95h2MRmMkzP9a4BCHxNj2QvdMiLnbj3F3GK8phaxYc2LVXqfv",
  "key16": "35ncB1iz9wbtCgacQRCKoYngEUexrh8a4TV93bQgT9aD87pAqDf7azSR4nEKLWPLWeGXBpduWwoEr8jY5tRhYbsE",
  "key17": "5KyP5UG9rPubg8EJQ6nt8mcW3A74L9v1srn54ZK9QtVgkURwK1eKQotcCQPTSsPskrz6N9fW788aFboR411ocEN7",
  "key18": "kLZ6TXAtzNiYS1aYbHzcGpoHWhRwH8E3mGA62nmcof3otXfS23sXHjgqt67H1TVR5BN9XgTwZDHK8zPQ2WfAtK9",
  "key19": "3XuDufa5Fikob9ACuuk8NvvFxiVFku6VzwbQMzvUG6boN2ZkyG7Z7kCbVZrDXzVLQnHCHB8ZVzwspeJzXbh377dC",
  "key20": "4Bq9FmXXUmCqoutkC2CQGCB8SLwzpSeB2zuKBvn86z5428q5G7CsTKaPjES6cPNS9P4B4yUwtZ1HKdHYX4VQG54r",
  "key21": "5vtGfAwF3EqiFki4s84NvYJ4fBHvCeSnuynG4TDwfypz8EuQKVv4trrY9FinQSsAMvx9QiedJmmEebZmFBpukhiu",
  "key22": "2GRaarJhE6Z1QZhT35diH7HohGYB8pLNa7ypfFdDDBTWfMunhQq5rF4dYrF7pbv7a8hEJfVT9RqD2kcdVVQMHVEU",
  "key23": "3Bdg6bFvPprjuwG6HkiA67qtDPnjA5s11oi4PtiBs9iuJJiWDWj4y9EVH12oxetpaEC2AAs295J7eSwaEcjYEnNG",
  "key24": "3FpFGJ7U7EJVVYEPpPbSi5q4hzsrMSZJtwXvaPPiXYeDQyrykFuek5VCqeuRnCnKmDhpfraKKpfob8M8QZ1bzpuc",
  "key25": "57kGVtKT9uYTPvV4ZziyPKwMgmBsTGn4erjja8mLLDwkGS4nV2UQEV5MokVaj5hnqDKviisHRUKAt61DfRvsNN9s",
  "key26": "5HubjXG4FwvfXVZPW88yDPR7dk722dKnQAd9RumosaUSNE9XAUfe315BNmm2QkMFkxzcSHk71546PFsqMGMgaKQ7",
  "key27": "3c4R3icnpjA5zZzHkga2APqfzzpFVytVikmFbUq2JhaDszPiHLesQuB6Rhwkd7wQGUkphEXEMNK9KYKtZavNDxS4",
  "key28": "5brLVQpWKSCLCUg2SEhfPs4y7bNvVnLVFc5c3T1aEZUh291U6PeCmFwdeY8CLhvUPTsvoJqZcWja8RigNiHxKf4a",
  "key29": "4Sf4KTqWMSuNzGgJLuFHfbLA3jRqUcG87L6KmuPR8UK8qqub8sPZY3yreEC6e6fN8dfwWYB9KvdkhgevfuToZTB9",
  "key30": "5otH8YWaYUrykR9GkmT8bzyqxVkdai57rE5Ly3y9Xwcm1JWEEC7NrUCjrxbQremJT6xkCgsZxZfN3FpexftzZCtS",
  "key31": "4nAaiXhgHDRBrFaqXJSCME2EdoWBo7o5ZLDwii3CxumD1a8zk8hWSWneW8M8JW2NJobhqaLAPtFPBeSSyKVzVurR",
  "key32": "49uPDupJ549VuTt9xvadXzU8quPye2zzDCGjAvG7oey4EF2eWz8ysjDyf2sW6VtXnztdPsazwb2xA235jknJCfdB",
  "key33": "5wukZRxuRZvGZyXY1FQHfaK8uHVFMMUwBDrYm9VkbyY7bYErFdYXw6rgPR3cmd7FjZHDJLLQjwwEezRAmmNMK3NB",
  "key34": "5Sa6v74YjmEQa1h5Xa8EmVoWyxu1k7WPj14pMZYNLFT5c3BEnaWY46zQBgWZnzcyB9DgCcDyKHKHwGmTH4y2UzeD",
  "key35": "4fejvVFAAtuFyta93Dj5T1hWzq7vpn7jQtkaDkwmjUugAepguhSNAQuFu5J14e52P7fPgTbei1Ae4m5L5o4Q1tep",
  "key36": "2JcaDtk8sh1x7JtyisjXygrLjX35xxewEgDqFaT9BZqmM8AYszTQifjhkJ5wSTv1B6VkQTNHMiHxCSKKqDsYX3ah",
  "key37": "46tZqZzVT3rSDWJxjhW9hgMAerCPbJeiuFasBSLrt39PTrUTbv2wzrcGeNbnXty8DB9M8cvx9fV4yT3emBkMJZsM",
  "key38": "cMgwkK8aVpecmSEH2Fd6Jh25soUGTZEFnhFpBBckjg79SYSv7nzohHszDQMnj3EA8PPR5PdWBDXFH8vnTwcNU6i",
  "key39": "3jA51wF8g3SGZsCDeHbCSYFKDRuGrXdMa5ib5Avk3LpfT2dhZiVgRxo678KEaswVvpjPZpkDinQiNprJzJCiFLDB",
  "key40": "3g88mDmZQvR6FX4XZPU1AUuVysTsxGimfKU1qdvBRhD1J8Ltahqck4Se5PbtTtm5j8ThJk8NjJBdmUr3gErq4cAn"
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
