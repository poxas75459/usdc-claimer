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
    "2TdzhiKX9ATFHT71NjmKSTs9SAAd9yZWTeJ5Z8tMfWDdsEEamED62qP7kAFnUnFDLq1qys7aJzD7K73fkjfyasTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DqF3wAkufyn5C7rMZtjQ67DRyJk75XVfCN95yvn86kd4KetXCYjsaHfxvdWm4ZerrSW2URxYGsQ4a9yevrTAcKT",
  "key1": "wM1gEaKrgC69fjobgUpLP9ABmJ194s7aUjL3eDWqu5mmRWk1LnvLEVMxWZnj47YNd661qgAisGPVzssEB6gHHfh",
  "key2": "4tqbwnuGJXeXgRrNcj3xtLTtA4w5t7WqXptPREtnVtL38v4hYZ2V32SadtAWUemLTWMUQANsxqCJpZfHop24GTA6",
  "key3": "3Qkeaq2TLhpEXfesJGB6vSq3xdAKf3BUKHHEY2akGdSJg92YvpNEXnVPYL5YRUiaVYUbpNFPURB48vMg1bV7uNkV",
  "key4": "3sFd8L8LP9s3pXhDy6dsKX6t2Ap4GkTdytUwdBEBbgiNQ76Hi9cNVUBGH7fwjiWeSQ5W21xanJtRfLKWoAekfKCb",
  "key5": "4zKdqiFK7TGciysaTWL614TwEaGPvSHtNEBNhge4MUwVxkHycTEg1EbPCsPwxBNH4DHr4XGBcxpdf674VycvnBHu",
  "key6": "5yztmhkmtniNa1Gpqn75JhgVdR8RwgSKs2Ro61ALnEzF7NpMnkmFyG6J957e7WzCH6PyoeJfjugyuzVpBiEenmB5",
  "key7": "RLcjqXX6WmCMtWoagiFdymE5hnic2svg8oN3KHLCQuPJ2wVUkMxisi1uPxK9SsFf86M3WwBYPS3wfBKM5ye53E4",
  "key8": "2CSn6QhGX8Decfg3tNaoa4EKXWpiuoQcE84PvxhmfKSMeVrpxfK1dbXosFkHPYFWfhBA2s11jDqt26zShQ9UMgn6",
  "key9": "5X3WW6Hdmrh9RwKrtTT6pa52ME44V8oRvAzygFXQB9b9Mx97JYqGRdqFZddJsLQJyECfnGC1H5RMwPSix2ef7LGv",
  "key10": "jSbZaV2RAXQQNRwSEDCxYL5svJ8A2DSZh5Cnd6JfNtipVQJrvCJL5QtHU6mu9rHiREQCGHc75FPw1k5QEpyHFiu",
  "key11": "Sh6F59NDMckiRNuJRxhG2jhgGWU4tfFuF4dVDhA2Fuwsz6v8B9QTmHKoRDyDMF8VxY86hGbX7zX7vxcHeGstia8",
  "key12": "5QH9hhyhzDJgGvzXjMGQrS7ikWEKRatY9heeVtdF1tNoNY2CR51vmofGR5RrdX7jV8Gfsjt7Qiah4BhakBjd1Ttp",
  "key13": "5wPdA3bRRiJWZsLHbrMbSdqFaVGiGg32o29CEELx4qzGmCMT5SwUqePBuFtRr2NcmrSrdSnBx2twvU52HpBhwMbD",
  "key14": "2jKdR1pzrqpJY4xuszFG5ug2847pEBbZ1FZAC57sPsho3sonhLCGNN7vxk14h2ck1ywKN8zZZA7fS4yaUF24eGnX",
  "key15": "2yu33akvC1ffZnd3mFUCLPHu2r5ZdRoi9rFqXiYu6zBYmypVzSjdNUNmSnU4AXZCLsEnATJCDQGoDXomgERCJpJk",
  "key16": "2BJtA3iCYTn7fmDvuMvPTcnXHdw69gdKD6oDnFEoKqTPbQLokiSaz2K8fRzRAwaYHvTNHEQXMJQSHxY4zaC2AUJC",
  "key17": "5E4TXqsdYBuSYPvGK84yvQabGPSs3n2ib3x8yFCxTNS9LVChyeM613vUrBzpkEc3V3Bu5xXkRVqsc1udgv33yAyK",
  "key18": "5LsD3XK1iqf6tjr3PyaHShjnDRUETPoaPKRein51ZFLp7QrQjwX35s7qr8HbL4MUR1UTVRmcm9Z1HNZ5cMv9p52X",
  "key19": "3QZ4v8ftwMrztNpcmdjJvnPRycdN3Vs3iQ4j19Tyk1ioz463e5bn5JQVkuBWGfZAEKNKdk2ytgvVQvMYiSARnNXt",
  "key20": "2irnoULCj6oK2DrbegcDfZScJuzXUnf5EBu8bf39kbqbbBVTpWpkbDxhF5q2hGYqqNcKnpTzfr3xLFG6SUAwo2Q5",
  "key21": "4GDPwT5YBfxSXfmTvni4SaRsJBwJELNUNgTFbdEYnAw3xPCp59g8yoqsYDYi5cFooEfS5fgmz3AZVtTA4YiUoaWc",
  "key22": "3rwbUAxcR4vRdTXjrP8A3wLs6p1a3MaUMG4cbhhRqrFVZFGPTakQDRmt9mAc2QDaaQ3J75ns3WDat4gdUQHhanr7",
  "key23": "2ZpHkA8iMu5EoUD52hur9utz1jV5oewGMfZ6g2LhxDyotRDjdTCMJoK9fdvgYHAwooDyqctfhM36LF3ZRLmB1WNX",
  "key24": "UsVm5KnEQP2649Eb3Vhz2sdUmMi4kpZ66sJ3Rt2RbdU7W92sGzcUULeZ7q9Y4dPbRktTK42QfNHgo997cJNUK1M",
  "key25": "3BKdqNR6C7FMkp8kzRu7QVfDPozGhPVrhrXckSLkY1ynkrj5uTeE8F6uG8GTgSBDcBWRR7TKudwN3xJJKwUoKEMH",
  "key26": "3QM7mL9YeeYdnAwNFqczQ2kmNHaUH8QXE57hKXCX7ff87FxVTz5tNqe5syAw5G9nisAUESTgQVB7u9Uck6FyoYZH",
  "key27": "4xRNQrLUW3ZucZdi8TvrrtNt3ZMVZ9zGB5ch8BgTvFT8z8Hxw9bfsgqocKCCA7YDnnfpNu3iWjwKnQmxZzVMtGs",
  "key28": "4Xpx9cVGt5MyTLJvTzZ4nThzNbsqgADfKLAT2te3bsQxVBiW1bVPKguxi3t9JjnHouYk3Mr4bFGwm1zb5XuVs7hf",
  "key29": "3jrwRgiQWk8xXBRCXpTy7Bxfp3weKKXnsLM6o95ZW9ZJBMSxn2ZVQzAwfDcgNFPwknVc8mbhvmmMFoDQ8VDwYhF3",
  "key30": "23BSubxNnYGYhLoX2AnVcV9Q8Bn89h6K4H8xxYHJ5QxagjEgXpzZzapuc9n8owbzcvpPS57Wpc4K9gvyMCPU7LTp",
  "key31": "Yj4caXWcdgH7BMyQ4bt46zV5Sa3gQgQssBLdn2UvSCA1Vpek6GiCF2bFeE5MjQF18atopjqwAJxKKmUteBLeQZq",
  "key32": "5F8cNW8a9xoFgksJaXDhhrc1i9h7HgRfDgpcvbuSytyKcPmbbfzjg67JWVdq5bNoR5hXTSTTarPSVCTVQPXAGq8e",
  "key33": "654nmSiCGLZGNfHTKEcuELuDeJkR8xifffUEtKy9ox2vCAGrz5Cx2CpmpCyFxSEkU6sFmmGC238bptmhGuFo17fs",
  "key34": "4Sa7fxvCpBPU9G7e8mJvfnLHcKVs6MYzWzP534LjcN6R9qJnHLhKNqHYXMs6BkqN4dGqHqHiY7M5oVBQCAcSpGXy",
  "key35": "5LxaRQCvqSa32R2tUB7CQUpBsdBpepzmU6k8YSt5SkyPrE5wyvKaFwrNepbyAXiS1cnkanzRDFmkG8HfWrwCZQDM",
  "key36": "5VXzch8Ncq8wdFExGBDyq59supDU1Y3kDP3Y9C22bFbKUyoNMWDmEU1oC6e8pvktL4arYbGC91nEv5G8AMAcgCXG"
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
