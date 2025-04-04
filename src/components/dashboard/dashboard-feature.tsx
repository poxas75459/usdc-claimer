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
    "4JkPVVMto2EZFkD6dALGNNo6NWE9FzKo4jWWvcqkZ2XvSSkHbYgwFkHLvuqztSs1jA4tfdH2yrUMZQHBMEuQa2j7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x1RYNXNTBV3aCeZ5aFa2TdT3tUL7AeCsNUoAhytPLrBFjcyqjJ3VPMypTcon9ouYGiD2FRRmFxr6YqTwD48kMVC",
  "key1": "2ojweALL3sDMPDcU9EoTXgemtHXxCrnM8NbEuB8wt3XR25Ltm3qCDpJrENfbT2goBXPBHBWd9mgnQeZ7HhCCXJUf",
  "key2": "iLBGpq6LGPLPTipeyBwatv5NegpF6Vtef3foWvejCq5b3HRfQNH5wtgt9aNfkmoSsgX5n6wrSnDAir9XQfrhf4k",
  "key3": "5xobkQWyczsjfbdZgB4F4gtnfeYLiQon4BatPVQP3gAcgRjSWLsk5KLgZAmKQXvYSX1hND18Z5XEZ35Za28wRiF8",
  "key4": "Ax4rVc2RbdeciZJQ5DtLKgF84wCyucNLim8qQG94BRk68dQcwasiad5xVkhkNrcawrLB5JEoJn8pJESLZquTV8q",
  "key5": "3A7au3L7ij4ymArywMUtMcvWu7z1KbVqwSPmTkHjzfppifCGxTYjHDTa2Dx5VUhATsYuzNYxkR4bg52X3J9ov7Fg",
  "key6": "21bNnypuXnV2gk6ofAxb1iXFevSFTfyfBvBtsot1wCNbccxj4jmgkaEtjKwyUMKgsNQy3dNHiBxhMoTqNRdhCc5P",
  "key7": "4jDJA7MpbfDAe15P2kkXYtMwJHadWiTfGEFaQG61dn3XiawB8h21bHxoygMgmR4eY5Bhx9QHhSyU92KtEQeUohYU",
  "key8": "83UPWpD4yWa6Kaq1M7oZsGM4BBNfWEVPu1tcQ8JutDp56bu8puRVwQPwKMPcJctn4aiMcsgQceCTZrYvLFmNfaa",
  "key9": "Q5zwWKQnB4gz8CR9UmZGX9zFiw5gkXV71yEQQ5D5NZr8xv8sgNdKWeZ6QQFcV9ag9M9xLeBjvWXJ9S4jYHGvqXh",
  "key10": "5QtHn42aX1ss1Sb1SFh93pQsASQ4iKhtcVDQu9WXRZLmLPWKRJqDu7DSC9pUam4ZWbJtKhpLc2hw8j9amunckDJx",
  "key11": "3W5ExfbHJNJUxNthG1x7d87PKPqVuPo8MiogURsfot7RRy942F9e7sXoefMkYn56z4PsPaasWBwuq4diz9bKcCia",
  "key12": "3sr193r3B23TyJgoj7tBfEKjJMaMFGJb543yr9oDukWeqzyJ4xes4ycXrm8FejYe1GJuKPdnmay7gJm3NbwEWHqU",
  "key13": "gJ44nZr1jj1k32dxEU2tkg3rLcCYY7SwqWGwGGLwk9GsX3Svm19jzaHyQmQseLPNSU4jSrrvgCzJtGgbG5ER2qq",
  "key14": "5NtNNswYHMLoYuMdE3oeDBXTnvwaPxKNn3Bfejgc2exeEw3KjgfksWjkEE88vzfVHFisQm65ihnqmEdjdKQEpFBn",
  "key15": "5bpZ4G4LGwQ3jumV1jay9rtVTU5fH5a8egVicSqCziYzUubGKDW8qVrmm2wJqPMEZeVHLc7s5Lbrosynmh2d3QEz",
  "key16": "389mFh41RWoGMFqDX9yBxQEX4tPAvHLhCkPjcjYfTyHe8ykUGSwv3ihW8H9S8odTR8C2Z7HqhPJiA9MyeGnLEXG4",
  "key17": "5N4dmAgqjKteFW3hbEL1eSq9m6XhPsguJybP56iGZ56QpHjb3Y2eLqGDPHqUV8kfkArQ6eQz4LkZ3pxTvww7oS1U",
  "key18": "4cstKHwuEfXBZHPKBayEweStWdH7w1QpUafy6B8528k1kcBkwcet6dbcSdfUJc4zts1yCQL8kaxS6EnTy5235Bxb",
  "key19": "4CrTzV2FrYALU51te96rMA47L8J92hoNBX6sn5hU5Ts6boRF56Uh561b6daPRWKSRBRSEiTi98ZbEhGWH7FRKoi6",
  "key20": "3RqAWX4Hwe9putidfDSsNmmfRb1UQkcYRg52JiruEpfdRtjJGphQHxp4Ecscq7VhMuWyME7u37gRps7nP6xpKavD",
  "key21": "pAXp7bPXNcdjqUvb97PkSBfiWzGEiv5F7fRawZCbzRZayCvS6HrVu9mZVVum6hbQepJQDmVrx2MnGYN7e3BH62m",
  "key22": "3Jv7DPQtTxFJ2Gu2WQsaAn4auwAAi9WtJ5EMjd7f64yofMrRCdJf767RSsFz38jpThGNs5B2Aqo4RJcVUVj5z7hp",
  "key23": "3ca51FKgwgwczHeQX2Wakw9RY4uqhhL5KvZTV7qvNSodyMMqVoyHtqmVzbKBCP52ALzYAuX8jinDzciBviEHQfkU",
  "key24": "3g89zxQUJiPdogNLTSU1SiMKk5GashRj9CME7gKkYJiKmAUkiAc7wbb2rr3BsboCZzYBfFJiBw2dMVK72tygqQaS",
  "key25": "3999jYKb4FRYfcdpkeXfzg1KUNjgnCfbB6Gx5caFvcbgV5Qy8YyWQZdovidgJLoW46H1smvCDhSJfDD9D45YzSXK",
  "key26": "TCu3JEkCEAQUQdo5KSd83CNboL2hJW3AiF3urffTJ28nbon1c6EoEBM2yjF5qxhBgbVHTyFsQ3vR3CoWUnjTftQ",
  "key27": "1HY7t8MztTVi1XTc4vE6J5sJ6kT5LUwgHUNNaDmyTLqMWBEQ6r1o3XaTAR2WAb4nZ3XUhEPCTFS2wK4EYJhCqSv",
  "key28": "48kXUFGiYdaHVT7pWeiweXAYxonxvcmsMHBpFxfcizAiKnzFPpWEnZB59isA7BSdNxg3WFmi8DEc4JvgfJeW68T8",
  "key29": "66LXtMWjdGBPmjB6ZRQdEGLRM8WGc1qRwftKdmEAMhTrj4cMHkMZdAXuXNEd2JNbFTsWxyvHZn9K2SUDAqD8TVvT",
  "key30": "2GXeoVN4LJUhX1jo3kHph57PNuGE6TZuGFraUMXL12K7jXys2gGRyb9uQ7icDK99UwKvu1Gvj23LDNNjCqQRuYKs",
  "key31": "5py2kEqM3j1FC7jA1C2f8BqFyKH8qJaSW4dQXMTXGrMQLhfWhfPqdpV1kkuxkJ4RMY3e1NVzQqo88xZ2xekTQCxF",
  "key32": "5nsi8KYdRzkQg7D1wKQP49nf8jiV79R1m9knXcmE6Sv6EY4jcmqqzahQMjdzCNgaAwRMnbD1A5vo4W5CpYLK1JfR",
  "key33": "4XVJ6r7N3T99aK6oFeWUkUccSNBfWn9DxRq5wLSZSSNpVs4TKX1zrgQBR8gTcnscoqRR6JXeCLR5wcbnVvcjSbtv",
  "key34": "3vZwXKWck5Sjas5hWCMFVabKukNQnRKHFFBgYx152DC3jpob9KtMUnbFhzuhyDJG3Jo1w84Df7F17noCNoLh6syv",
  "key35": "4i7rnwificPS54Qd16RrUzt8GwVfJFuAzZeYYy8b2AcuPMZzUVBho5G4RLpeTBnLek6zSZ6q3yi79cm3t9N1ugBG",
  "key36": "s87Uuqg6jFvLYokNnMvMqHhNcfVPjEuqF2UZ6AX4wcs8v4sXoB3inK1YYto2t2YHPkBpVfwwymDD4hLp365Dcg5",
  "key37": "2reYVk2kwQLN7pMsf9yRsw8zvmhChZZbHPsfM5dvtKN5kr9Gp9wpc2Wg6rVP1X3geS9K9udVK922s7Me3ddTqy1w",
  "key38": "5S6FJZyBHbJXdXDLt3XkJUy3HkghoK6M3zmy3WyBtVnUr55Eo94w3as3wcA5j6QmJCptmK37LmunC2xZ9oeayqL3",
  "key39": "3NvJ8PFnBDgg1hBhxSwmZ2r1Hy8VeLVzkq26ecBYzsiYnrARsEiA3UVAotD52sXaaREFJPCT6Z7UzjEWzrM8nsFx",
  "key40": "32XPwtDsH8adSPR36pGWbASNWvhpgL9GqVXZpeSwRf9JkAdgTAn684Yh43pwPbkJk2jw5U1ZhtmZCA3SmHKfgcfy",
  "key41": "3KcSuA4hoPf5BQBHJm3tb3kDuN7LarThL6JJkEetwwdtqW9dDVHjVMWQR3M9eHZXT9MhtbXoHv1SDcNANnCLhGaK",
  "key42": "MCiVQQCrktvEZyScNF2DRNipGbapHbdpEcXACpfBNtX75gHxfApLkMpEFcgGEt4MTzLGbboNtYN9QPcwx7VSC7d",
  "key43": "tDxDyEL2hsdNez59zE9XNTrypDxaefeLyDovUBq2pzURCZckk7jGqmn1VP1BNyobBcvhTJTTK5RdxUM8ecq3Arb",
  "key44": "3dKY5LKjifXB9c488bQmDybaLh9yqz8WArwwCAcTPCHUMBeAiSL1aqwydSJfj836nDmJNwRZEjTvQs9DdbLU1fWq",
  "key45": "SSSAy1KMEGKYy557pAXLmhKTv6YgCUVLE3p9ChdVia3RUmk97NGmqBB7V37C1dqPTyoAvdABfwkGFzkbw9kWmYJ",
  "key46": "5XvAKufzRQkrq5r4uH6at1wM9CpByk4nHneEN2nKSpgChHSbH9jnUx39ajPpqNoo5Re8BsXiwmcR2XgCHp4et4pT",
  "key47": "5b18jYmYPDJAiFoem5pGnLWoAAxxqQ6jQEXRYiMUWZHmYMjNmyBFYzL78BGYYUH9Za9s1UsVRS6odGyrQ7jKoP3k"
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
