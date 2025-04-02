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
    "4XR4vzbrxk7AKszmwjeNcoxbrWiqCTx88hWMq1hTXF9nyyvzEhknqV2sJqsZea3oh1pNzcNx5PFRBSnF4Mr8qjup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fT1stF1YPQAapvZdQN5nDqbNjLiHHoWbDb77kbTrmTbZ79g62nYmNgKvRuWG7Ekzx74Yb95YmJ3MbwV6BjnyP7",
  "key1": "21v8EZRFfXgxLE5cb1evnzLmqaTNQKzVxQFiQwSKDWFbHSZRDDjBGDNDNAUEjgAinXG8WuW2Vezwkbn6iP5y4w9J",
  "key2": "5WHXFDPbjhWsinpMet5nce3GBMaztLSvaWqPo3cSwXH7erMqCCN4xQ6H5uikT2pLD1SMi93GdLTWV65JqDWYCvUb",
  "key3": "iACao7GqLu8Hp6NYy81CQgv78WxPmGqdJD3FDeDs4xDrsYgzYwEMgka4PWhAqmvoAH3o2bwseqr83ktDy4zz68E",
  "key4": "2gsuRxgQnkYeARY6DN4UNaomdbyYPc6oTr9cMKkiuYwYKTDEdJt2y3XnRPbhWFpzzHUKmBTCXWKNQSgo73zQS66q",
  "key5": "3urFz4tRphGAAHjsPSkYnnRrroNZFMYMQUiDAbgjDdop2mgmYPkudEGrYCeV2Pjw6yYkRDz5uwht83SsNVRAS2Fx",
  "key6": "4dezGu6fTUrAZxj79gcfzbKZhah8NNHA9q7A1nUK9kijAeiSSbkb3F5LpURiFsBeeqEhi66eC2SUgXoVpvdDXQuP",
  "key7": "2RDy3tWCUqRroHCe128EQXyMKWXJhmoXwcJ7DphJAAf8Z1EUvYwTosriw3FQAAWcm2o9RgGuK7yfYHVvpARSYXfq",
  "key8": "MP9LUwXshYJ9hubsax9XBwC3ct1DYoWbtHhDHSRRda3YcFcAjFzgwpjEXCG6WMYLvotsSMUtY2KxPAaBjAUu2UY",
  "key9": "5fSXc9AzTTgnGi5qcWdLJbCghoGSK4FELmfoi88SCMMhNaAb3BM7XABgDP3QR5ySAoxZYnQYL2Sfg6qFjZq1H85p",
  "key10": "415ko7FxnyX5FvsE25XtREpLQA9pMuLhEymksJG5MwtKbza9YqKNHg32FvYbfi6RaT32bxWsBJh79FsMDeGYXm2f",
  "key11": "5QqfZohtFfEoXKqmtf2YDALRZja65jvJRen5KFA8hfzAQHq59sy6FVaibuHbx3JVdJtB56WaYhL9Gz8ry99hwZsL",
  "key12": "Lkwzn53w1VKtDY3zjJMsjWwXxYVS3MoYcDgFwJWYY9irdLuhPkWAATgCULfycCBFg5iVRAEtFCPiBxGZSAz9oLo",
  "key13": "2kBVYvYAeZ7zEUgykjduqFubVJqVYjgdbZCjXw88LCrs9JutXSLYDtc1fkc3vCE8sQELnn6p3cEdB5pz1Cydr9yj",
  "key14": "SkbaM7k8tcSxoG1A1vVejjMEbhUiwR6tdYTie2CCNF6bJPJ3Np9YSNupeoYwbuRq4d3DZsZ9ujWxxoJBLU98VoF",
  "key15": "4Yxnc59rFcUnjRu4pVueD3NdfiHFvbwcorGmpBtju2jjjT6DCxqj5LvSZdUhWP7V2dCfiAvD6AK4kK7BEHS3w61o",
  "key16": "5fKw7ZXVyEMCZUytB2qzY4easVRLJVA9EJRFGP2jgvPZNoep3i7jUiyQ7TFAug3d4foAJMAQgCWtVsiFR5HGyY84",
  "key17": "2php5iL4fhAasbp2LpqqpJLPci8epMByb63zckcDoVajQ4KaFA6Q1YtaexpYAei7GEGTGv5yhSTnJsFd5HSp9Gm5",
  "key18": "3mCegyv1YjmuST9TnHBq7wgaPKjE5Vfa43SHxQuiNRy7Ty7BG2tbNGkBqHPFxErLy7dUbyZcMqAw2EY7D6ZAkzpD",
  "key19": "2idv299BYRUb8qJ1DXdxqnDTLCaHvvQCjTpfbxUC9x2sHqRHTvyPQ1JKomiGSauPMcivV8mpMt9LaFPG9D4KsQ9P",
  "key20": "5eawzgYvV5Un5pPbVXLJ7yGcGMZpXt4s9xh42rfbXBiRd1LmS41RmDbUvkiGwoDkgH7PxKCH4UdMs8pLRYG99afV",
  "key21": "5NTtBnz79jvzqfxU2ngPLjHf2m4hBwqJdwq4p9NpJPr6L5FGpWMGrBD1MAZH6FwBjv167RSU9usBkVcJXkw4mPUV",
  "key22": "5f98CuZLqhCFNPmK83meng4W9fiDke66uSxMzHRpAZEFWAHAvFLi5JMhQ9atA3z1nFjJ3zWb865pF9tmY5HQneT6",
  "key23": "5PfXsv3KmVPoKnn9w31nnxCqxoJHHVJccxHpvMpPmMQirQ8QZ4SJtMzPNqkVTTyRs6UEEg2C4mcJpHrPKb5TL32H",
  "key24": "2FQE6Gte88zijoShojutz8gofniE7eFhuKJkd4uie2YsbvoEPW8FqBbnhwj6LXKPNgU7pfod5KxZGdFAKAN4RmRR",
  "key25": "5iHBhLhDTiZVb3K7VtKisza7nG1MzfDhv4o5sCd6kg3AXniH3q7UVV6ZzXyoFFBXTT6TVKzE1XjsoTr8XN2s6SGD",
  "key26": "YWxtApoM21gkrXdUpwtLfh3oAJBT4DP3axuQGstdotfAk9whHxSvyk1RPL1wtMp4wuvfRuSJCAQc7QVnfcTr5sV",
  "key27": "3ymg2rxdVJEjLXCp2nnAtBbezpd96kFDXZ6ad4gGG4ckVmBf1BP6pDCS2TNL2UtDtxmzfUsjifogRdHjy9vHbqMg",
  "key28": "Gobfd8LnSvZjRxFg3Eda6RL1t76jvdhVnLw6sjWxKaNU5J8C8mAQaPcaJgBayje17rBKupQ5UVpPq2xpsSpsH6X",
  "key29": "3GibkxvzNkA6cAAWTgLxbYZM1pVu4WGuc5rjoZHaEMjeuTbmKVewGMhP3HqYTK26kBrof2RuCNrdas224JEXpaFL",
  "key30": "3WXpapP4XHH1h72FDUMZ9Yj3RFh9fTx5b96ANP6xeEWA2v9hL4ScVFN3u7kC6bF4maaRsB9ykSsTZryRZ7msdHFR",
  "key31": "3Y9wGrch3XkaxGGC8gKsJKtcGttgJdWJS2puSiNN4RbArrXnKZnLdV19jpH4vTvnGRjyP76aXQUjTFgrPHDTzKBb",
  "key32": "4ip6cjLcuZTm9n1PiqmXTL1kd7zef3BHkZ9EHv678fuXWkBrH8mQsCsLXiHrWAjuXM7A11wchCNvfHRN91yT1oSR",
  "key33": "583WMHJaDza3JtJ7PF7NJRx7TYzVtm5Nrw7MinAbYrx2jdDwZTQ9LZB7Dvc5TPGJvprbdvdv2kXwpuGdNL4sAFEg",
  "key34": "5AMACVzVxUH6Fv3FuNpPrcww1CPNnoMJMJGr2rbjEFT6kyT2bqVWPdXfeTNTh1vCs8F8hkgPNBWhYq3VSdQ7bAjq",
  "key35": "TJ5afd2YW31DXkQs8HQc2fvn7CFKioCK2d9ZAK7qsS2xqmiPHm3VR3rGQDi3MZDB9BdSDVxiYXVC5EgVGquvxre",
  "key36": "5XxKSRhaTU8qWT9gkfuQ5khTWsjuxwXLWThbtFqcJzEHiqBXnkYPdVo94SXzZ9Mr7y6HhD8hqwJFqQ1T7Vm65RmQ",
  "key37": "2uNmiDGpnvNbcPbHnYGsPEHsEoFQcsB5aZUbQj395u4Bymd6KCoVfJa9V8jzsChjVXEkgp4JdtQk8TgfV3hrAcPa",
  "key38": "4i7GfkyYyLPKZesNpjTNLiZnKrbzdkVc7pyhsfJeQQkzam3iKC3vEjSNa3vJ7qK2LVUwgPbhuHjAomHw1p6Mwpit"
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
