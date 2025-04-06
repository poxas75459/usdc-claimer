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
    "ABPHTAgp3Y6vGzkMBSySHhMwr5Tuvp5vK8DMt5jn462JUBfpKtgmKKgR7vJabugCAMHrsXUCw3qqEgf4vdCEmPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tg49mecB4VwZH7TCDzcMMbFtgvCzomqdBadzv1Fxxy6EQeNB6ov7Gdp6oWj3MfH5qvxiabSr35gpiDMw8wbxoXz",
  "key1": "XoByNZHAXZFqCtN8kZXPMtVuU6hmdqzu8Mu3aaPsLy5dJxx4N6f7Z3nAp4HWsroNfrb3RJsLCDhNa79Z52oFnTf",
  "key2": "3j62swsiKY6Ps9zKPUH129iguidBCe6pz2Kbhgg6qZrHLRxk2hmPSqpk63NBSDVVpdCvhTxbFiQFo1xHpfed2vko",
  "key3": "53bNB3GjgzjU3BCa4XHCDf2GKrbCmg5dn1sVnYihWcYYaDQYrZJC57GJF7dfzMbtiVYvt2QuBBMbHJTjEDd2Xv92",
  "key4": "3Eyt4TEVWfHS2dqoMML72GWZcHovdNgp5RhtMxokzfwzrHJErpL2cVXuATVJ1z33rGPYSd6iJBRmu7ermUPQXCat",
  "key5": "49Q8rkpiVhR7C8PGwH8CPaEjM6YUjsLYruWFNExaCTtVKFmQRRWwtAFTBc5h3EX4zqcuryjyALST5WUKfX2ZpgBB",
  "key6": "J8pY9XhVU5VmNtYYDHUgbrAzFXVqVogNi1Drv5dztFbpkjyidQVJF7HuPo9zr2maqpcnZfxxarQUAHyYmnWWJ1y",
  "key7": "zbdbdtTb4SBgeQYK4d3PZr4sWaE5sr2iqa6fvLCxaNmcLCzqKaHMgEEC63F9dd6P1QyDCtHNpWirxxf9uNkpkj2",
  "key8": "3QrQow1sZmFFvRTTQ7PdKsZGssAwnv16qjhUFBbJHBaf7CPmQJb3gcNW6LXMg6BDtNo1MtShf3mQ4d6gAF8cZsHi",
  "key9": "2m51yoP5z4ZsafqCeMMYygGHeuP9sbmijpqswWdbDkqshgG9B71U326hrxmj5M3wk5aFmd4iY3Ehqd1rJUswUS8H",
  "key10": "42NnhG12pZb2vSDB8UPuHyp6T5HeFqoKv1sLPo9oVmXnhQY8ZhyUp8Y7J34zdKkvYwDD1SjPcnTe2AKLUHC6QTCk",
  "key11": "C2JYMPTH3RJm5AenUdbjPH8KtNmopVNhXG6uKTkdRycF7aSeiwdyZzSYNBDfdzs9Vjy6KKqn6vGwE7wKqkN7Bw9",
  "key12": "4HsyXJwBHzThCyxqgMsniE959owAHTqUTeASaBRZQsB7qtDC7v1js7LHKv9fiVVz7seKJ2XZZ1MSwRZvuKpFbozp",
  "key13": "iFx69FJ2Unai6fGkKmVSGVcNYSvK9CrBwsmnjgGA1ETMhY3mLHC36ns9aEzMiBsGggxX8Ruc4PVdTDiDLv4iHZT",
  "key14": "NstC7TdJzVzzqRRSFadrouvvmYb2js8cxHE42oruoZ1Mj6CJ79UT2veKRmYmUhLnqknvPhKmnYuzu7YqCcgfy9L",
  "key15": "1fxVgarvokTq2s471VydGmHPQE2EcrXkLwNxjg9ZZPMoWMhErR8RjY4iQpTizRUKMDucjg9yaXXjoWCZbxB1jK2",
  "key16": "4SdV8q4Bxbod8GxZZRhkU4YWSuMeicD6HGvfpeQkZzU4rwwDeiB3keqpVmBu5ao5RF3ewLt8ngJaSR7tN8huN4FH",
  "key17": "3WHcgyg7XXPdTt2P9ZkCmZnRRzanjYSHKuWcMcfnQCH8RG35xhGyVkP8EPE6UF4vUEJTZ42S9kyLjyEmEqH7dk7C",
  "key18": "55hCu1Um5Ux77wWFwZ1WLzG3fS8tmDhPAobtrNudY5DGkJM4wDPr5BHvNWq7ZLYU8PrfSh5hpiZ5P37KNK7Z5vKo",
  "key19": "4DWurTjsp6iHb6M56362Bs67DsVSbyXXShwsgjvgJ6TaqzLYzmTPwjU3Q1oGz3RPH5ZXHarZdyTXVC8i43DV7tV2",
  "key20": "3uBDwSrrFEiEpzz2K6vJTVJosw3sHXEPLRg1nYhR6J28jttgb6hYqs5T2ty6pg9WacZPzBUyazDTE3hyx6Gqiy5K",
  "key21": "3exMULeh1NzHnWpcCFaqNqKb6NzeWv7o3hmZKA8mg8xnYBTCUZXcEzv3m9Bw9v2WtYhb9XWN19Y3xLuV45hoq97t",
  "key22": "214RBMbFuabyLur1ccAYsnpWSXE6qNFQ5eS687bYYCktozVCZtMRQGak7jkE3PHWispbYADsz5TZBuY4h3VTQqQD",
  "key23": "5CMMEGFdESbyYJ232AtKW2H66roCrBz2vUYsEgZtgtNyBaLJNvZ2SjsDCpTmCLj1vMeMwJUGS5wn49nrrmfVSxPR",
  "key24": "5M8t4MTERLM4RHMs1zFUrkDvkircWa8S1fWmo2GKhsmG7EBW4CysbJ5tZ7eKhpWs7YZMJtWgrTGGFvZQBQdFtdhZ",
  "key25": "25hG5gg1RaSMR7TGXCDWbb16MR24WGBistuy3AjMxNSkpvzPkNRRgff1a8hSqHuZt2GmugsiRDdFRzGTFSDkQ6aQ",
  "key26": "5qqryNKpUG6rX1quFCspseQdWDT3Lqj6S3xpjei7WjFvd2RA3CMdVaAqvVg92wS9Z8Ph7q7AwHpykKbNrbkxZWEC",
  "key27": "2hVoYk21zJZXpxJgxKiMxtKz3N7pNKyt8iYNirAVSccsUyh4gSffoKpX8778Nwc3TSfhyJiTJHMX4FH6FbpHmERG",
  "key28": "2Wke73914Ym5jTSPSUXrBiXamV7aWeajvtRpTZQNUFXk7VVmYGZNZ75Q97SNRdUTfdShnbGYuAkBj9JeqMEatqEo",
  "key29": "4DWxyn43Vi2npadguqb6Kw6jZzYZ1SwbFjywwHsvvvQ4jZs3Kfe22rrJj5Q4gob7iT4dRZbYAZsZUUefMsVHpafB",
  "key30": "GihrBypwKRhoiUtpYc18rEQWVkvux98CRgVh2wjJhG3tWTb3r2wkwxK63a3PUj8kcyzqwQgeoG3fV8tSYheGax4"
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
