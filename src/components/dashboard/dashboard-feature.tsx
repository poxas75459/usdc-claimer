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
    "5bYHjFebmCnR8qTZFX7WiUaGm4sPptYCAzjourEAiTgpfRWgj8sHnXowbWibHQqrRpx78viSuAZocr6VYiovQn39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fqmrkVcksceD4n1YiaXxRAQmAbJwFUdSea3kYWhyPbBmCKRn8G4yvKQ8SFm36GbSxbnQXDw2AZtcJd34UUCdN6x",
  "key1": "5kNACAFNm3HhRVBdHroyzMAizb93cPKFyP7pADiigtAmUxRBWVY7knMvVA8CL46dZX9fP7QpgUD8Uv2qAVdoXPFY",
  "key2": "HNmSAuFsuy7iBjWL4UnC9AeXJCxp8Vuf6rJ6muqo7cnnY4vuZy8DeJtPiaEqbPzbnDiSDCD4xS6ty3FfoApvCHz",
  "key3": "2XLKUKeVWFrEVKBTNj2a6958kBwQUUmgTtDACfoSAR3jf2Ci9v9JTwndFhPGwrAdzLYFZEMuyRYr3CsHfPB4RTiJ",
  "key4": "2TBjRQfSHY2x2qcPHAjxMWHBTy3QtueEeByHStLtyDcLmUSq7216KnYYpESaZ2gjKkqMWJC91SeMBzXVpL7aysx6",
  "key5": "3JzbFY88fU7yt83uPYtHEw2q7A6eGp4Uw8CTWoStUNGq5YwpLMuf2NsRCw89cjzEfBAUr8y1LaojP2oStAGWcj3",
  "key6": "4sVBuK2jsswe7pM8RnEE2UoSNgAQCYHXZceJJ8GVjNGdYwAQopty3nigRLp4iR2xANFpyCR7AfnRCCKH3XwSwsen",
  "key7": "65B5tMaujWZbzo2bdLFmj1NfdbMTWuWGkzqLkZmmipiiEMCMAQi9B9oTpTxKjJtBWSNcMrYzTFnkZLA1RhdiB2za",
  "key8": "57N3KEDoRcLU2LsogrtsZxjYpKqBt1evuFvwwG5qyTAfpY7kAL9P4MydMCh8GkNJqS39oDzYd9n2r1k79KNwHzrH",
  "key9": "2PzHXP8qzHpDSWbrkS4zYpmratqq981to78Ej5URFEHMmpBxK7AdGdzUsGBnJuWkmnvVYaZxozHPUQ1rCNcGJz1B",
  "key10": "5GDi5thKg6Vg7Y6ERw9qfmiy2EAvGXyVXGfJbKWgZEpy83RFT4E8yu7Xa35zQamxEMgZnrJHP8yLodmgXWB4jNvX",
  "key11": "3MErU79CL3Nbgvs3vGPPfNXoLfF3PrKDJeRiPfJ1LDgotyhX6opeuBKBNX5qUL4yqWa1UagoYA51iP56cbfKn72w",
  "key12": "4N6JktcCUWbR3M5jCovfeuPJu6cYW3CSS9G8vKi5r69YAF5DFe4GF6oGZR74tZWy5HPWxnQnHme8MArXSz2Y3hma",
  "key13": "4TXFeVKKwFRmxWjgiZDFgxPNvSVi4P7uVsLQ8wmmMUinZPRUWmBYmqbitdcYE3vZaftVFuEHBV9DWN8jTZieZpYS",
  "key14": "3xbRPBAJaXXF56VDwAs72Y8Eu6PZHPqF5zZ9bXDCDrWVBoKUF4shskLtisGPETQX64bkHzUdtykitzrkMxVgHWBc",
  "key15": "2EZTRVdnLoJ1z44jwxkywwSQULTWu1zQW3CuH1bWUQanEhTPzpf99B53fLQwf2QVVSFDa6wwH5mo1FkMfgNYrF57",
  "key16": "aCeWnbz86KpreyT8rQjRUX5EKwmuZx2peGGpVjjYVcUoxfgEDQkoqVK6FNuJxH3V9FriT3wGnSdshNu5nmt8hbQ",
  "key17": "4cN3hKjVgBHcLusXWRW8yonUD3S7pcfsHqUxeoyEhJzPe2s3XhpDfCvx1xKAT8TwDTB1hsS2gcGtotcUfK37ZszW",
  "key18": "3ykGssoVcXjxEv2UKPGESfDHCdY8CpgPwde6n79jVJXZDR2tndSoA62PpFhCZKrXTMY7BRD73C3hrfDzJzq3SSHD",
  "key19": "2eQzuKuqP8CYzsAKV66Q2WYVP9WNgbVwAsBkkpyc1DiGMdFbr6vNEZ4gSasRBtdFZoL7mXHLBtzaRh8gaGKEVd5m",
  "key20": "Z7A7soDEPi5GFgZpYooVi2KEkR2FeVtHiJsv3RVGUdKCkn65V1esMNZmQPxy9WNPcjv4ScNcp4SVg9hwxkRh3dv",
  "key21": "5ba66897hwE1mMs2UBh5KPYyfJKUJ2gfyL1ra3fdD9NgrjJ9uG331W5ujsiqT8Hn9JuzA2LaLfHfHvVmxphLX7Rt",
  "key22": "5LTCY73HKprdiXAx7K2cj7BRneD72vpyWF1AEYxaJ4kN7efTwMSSYCBE3E1pZvdboL9V1PbtE7pEqZRa9UHF3iMW",
  "key23": "2fq2jtiySH1QtC17zaKhsyk8YgxT46Fu3qkNLUBiJBhHSGwaAPKoD6qggwCVPA5WoDfW3zXDooyxkCtRGLnA3yTf",
  "key24": "4tHxinhBUSfT5tHiorjtbrY6L12MxFxDbx63tRNuiJ2hVscBKLS4nKopDSDtxonEdN7cpj52pPBin5yUtnGcN9oU",
  "key25": "RQEUSo8aAxXMvqybpoMc65XTxLKUtogHJrKXrJs4cMgzRK4qQGxnvV7VtYFjRuD7LcH3EuFvSQbkRAwSE7s3czC",
  "key26": "5fUmP7XoJXEQBsFEHHTf5tpusEKRQZCmErvsGCd9thJVMDwiEKn3W7MsNPcVx95EtJu8VSGkabspZPSiGihi32Lf",
  "key27": "4u1TMkHeita6JVy6ApY3WDwMnwMqvfLAACijFs8iLCRYosxfL4UMSGhQoTnSgemm6FgE64BPxbZkqHuVKKmsGFqz",
  "key28": "62hTRrPQDZYiVXRA3gvgziwa6g9EHkwfHJ7mJ1Cu4dahKBg9NxMnJRNTdLokw4fWix5jqEMMUYhTEE8dyqDYmpPy",
  "key29": "5wG4GhM9QPBsEpjJLfY8yFbGqoJFN2EPA8y9dxRtptTAeeUUZVqa9cwppiSpAAB5aD7iwX7r7jXpT93R4Bt1rhRt",
  "key30": "5vcTgHNrabGSSiPkt9gCSNG1wHwZeygqVgUYoEUetk6q2iSwK5ZhPud18AhWzgccxzrRMzx72FunoRLGjiqdb9M5",
  "key31": "3V3wWLi3FqBEeYCcdEWfsn8ayMtNLEn6T3VjFXGnt53KK4jXC3F3HDPj7zKTbNSojMPCoUZUzyumKLXTGjxMTKp4",
  "key32": "4wvdHykY1U8T5raSAfcBn8BRVV5EKRqTW574rGzn7aWMzy6eVsTKQUSxr6aFHTftKeH9odxE61CFyRP3iur6utKH",
  "key33": "25zwEyFq2ZkL1isUFR1NMibvGij3aH4Fp3UUEpViuaqnfGUB2VVkCgAxfK9uWiFAc5UHZqLG85ybKG9jRfUR9AU3",
  "key34": "34r4xtmquN6GLndZqt4fEB1tU5EP7Ds7K5NcYGePoNf9NVXbVLs517UBesMxDiPprDCYcuMZZnpoEo1XRJktSJxw",
  "key35": "EmKuL6RJWbb9CwXQ6bVxqHQ2BNpeBA9hjbWMKvkSuwJy5R4VJKSkruMKRKprY56AKwrTFLR7SVVNT6Cev2GTigP",
  "key36": "62v7WwpT33CC2MY9HDVMjbSQ7tTGwffvPE4Ko7sxUxJqpMhDEQRNeiaQ7ymLxNwBEvKSUZ5aft2jKX83t2VfCBLi",
  "key37": "4CbNuVMbPnFjdue5F6m8dcWWkfreFX5jqvsbq77qgz5MGMEaToX9ao1u5QNN3qi6joug3JGTBU26cXDwoQZmuPgN",
  "key38": "6qJmXLRC12JsEoPnwVCbnWSK5xHT47c24xqALkhjj6LJenyPfZWRfztoxiWxmm6XgKmmNTCGBdy8RigVRyMvepb",
  "key39": "3tkzWfdajYscRYhkXP8VNt6UhQ4UwBQ9d4hc652vAX9dJ8X1hgpzNcRgtjzu6weRDELcwUdDjLoH6BYfeqSyWbC7",
  "key40": "3E9LBoiqPX7jv5Cs9K4KSd4j4FD96zm2hvsYoouxbv2dGs7umBaEc72DY8mxvqg1r4Tg7WRj9sTbQe4SJYfy6LNt",
  "key41": "ES1qf4isP524bWAYYrpiBi1JTkrxP42niZZesULm3DxXktCh2HVxpCNLAcNVFTCoiDTD9x3vEeECL8rpAHx9vgY",
  "key42": "h2JTwVLgc8sfCFk9VacZqV3pV1ktP7Y6JEbdzYoMi82WfECUPe4oJCNB2yB3TN54Wb2g6UAHYsjymc66MDEuRZr",
  "key43": "4jEtEf7NGoBg64DHsUV9FuNzA7bb9bpSp8d5LxTTo4hgWaVJyiVZPXNXWRXquUc56AqW163CADK9nMYwfzy5j43Z",
  "key44": "3jF88U3P6X8JJxX3eMRMbAnucVbQ6XnhJ7dS5M5uUoNXJqpMroBGGLMTqmPjCtmMy2y7X3SSe2u3VZiMi1tzZrFK",
  "key45": "3e9HdFYq8ETYoGd9KeS3Uvyvg4H6pXShKEd8eX6ZLNd4Btb4HATwuq2MZTEYvgbvck4WdVbct3Nsh1d5wr7P6Egb",
  "key46": "3RirU6hJxj5yHx32WjYginMD5WEQM7ZAFohd54HD7ZCBdM9iBab5gM9hkg5yUcszknrFJBtumgq5J26otVaXR2Ho"
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
