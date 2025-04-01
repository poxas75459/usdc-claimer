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
    "2NyLHcsAKcEL76jc3HQ6J6XDV8Za4GdtUegSSKjqFowhAcrnR19Zxu3NzjYqbdubfDCj4jbWsM2ZNbGdpuvc3MCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UhBjYoxy3XWPgvurEVsmU8fuVQ3RH48rZSNFPitucLcNkndiyNA8dGDcpcUDwemApufeypVo3Az3UkdzrCdCghW",
  "key1": "5NgUUzLUhCMBEGHWrGSECgvdmPGjcbMspq1MJtxCmyWjG97WDNngugAA4BTQZ1NN9m1FhF7LXpsVUBoYLTSTsEqV",
  "key2": "52SeuyTV86FGFptS5PVVoq18UMyZV4R6kPvnRfV3VGXFGQYNgnK4pBX9WVSfZnpT8KYaa9VXwiXcxbBPATAxT91M",
  "key3": "2S3j5g5fiHpC5xBgPn3Kfu9fhtsSCKZAFATYtnuCDrN448jDRe7GkLbd3XaHq3AsSmPav4QTr35WZALLTPKpUhg2",
  "key4": "21FV9XgLZfSuvzj1uVRP5zWxhN2TiR7My8ZQqCGgt6VBc3gx9EsoNLA5htWPBbrzRViWwAo4m3SNvBgkgYGSxEtV",
  "key5": "2MQyksLUajkscX2eS2SwLiidJ881wfmLyrVFbhbsH37P2WSeCmzbJqXBndmLq2x2VLn1DJEsczRfmGw8GBBbL97o",
  "key6": "qZLKWBE36DP6oMDyhANZT2XmEeo2sy36KW9xqgYBBU5ukz6TrvAy8ZKEfLhNvzYBmVD6HCwH5PSzsnUNQLi1Akx",
  "key7": "4Q3feB8gn5T4R9emkPHeNsKqwQKtYbjPYvyxEQBtF6wkV31hSqfbPDAAinvYcs34mCFqKoUdXH5PFL8mxvfdT4a1",
  "key8": "P9Ky4qFU7FkSFTEZRSDFaDg6eDCiKxgMiVMzNwmJGmsqXorMu4fDVegxyTnjheZCJQgyHmrSjbS726fpXrukr4A",
  "key9": "2kK83ms4qgVoC4hsu9zYZ24kjz4nDCRTpgPx8ak33CnvvbVyNp5bkZtJm7Q3CbW1g79HFRAXYVKw9MRFqK9ehJrC",
  "key10": "bF8PitK57YjJfjaKeYxgRYqNVEsUce66K8Tx3xRmttbv7a3kVfNzgibf7rjLd7avUbGupzeQaiPB78pyftvyRWy",
  "key11": "5gcw9haQzXaur4iKgoM6JtxgUJQTsqcUkwDGDNfQzY1aU2QTKo6B5GPiQ7FDAvmQPmXHYj9eXC8NkQak8BC3Z8bt",
  "key12": "D1r8XNy6RmG1p3iwpbX5VmxWWbFRLEtGpez9WKiXDfogUrJG6DQQW1YTRD4qWk3dKFeYYFpZyd9xGL4tKRRPFiM",
  "key13": "24qtqaA9p2mjjNn6kT7cnfN1w6WWb7n3G99c5m1mZUm7pMvhjjer3YHbi6SRZKP4rsFzdTDkW9N3ZBDmZqJeByFJ",
  "key14": "2wQ2i7dbR87SoRheRKAf36D7rvnRmN5mchSKSTC2iu625AscZguwYL5cPwtKZsPeg8CfNunPhVePKR3d9CSX8XyJ",
  "key15": "5qB5wWo1x3D1uXUX3V9VEG4cvWp7tC1ALb6wpQWvG22tzF4iwst8JcC1P1pY5k4CCJ8XjuU5trWMrPRB9V8hCU3N",
  "key16": "4kKkK9GBc5Q2YGSFmGC3zb6k3e19KAWwr2afT4UNJGkaDH781ugxyjxYqwQUm4HfFYd1JS3mZSPA5WTaidM5okZ1",
  "key17": "2nqXHqsiAvZ9V6ESZ9p1gBxGMh2ara3haYs2YfN2HHVhFZ5w739EbDLJfnsrykJqs1Szhrgc61CGGCiZdU69gZTY",
  "key18": "5A8oRDtrgerX1biuu6By3kpELnsvQCxzmHpWDvwZJYhG2qsxGgJnGptbyxryzKMxVAP7rcateHKpDC7tk62WqMzi",
  "key19": "48ZSy4HaN6ji9jHs1NKgpp3dqtFNtR4xCYpfcJQ3uGfzw6WEoGWiiRUtVnZc3Ae29WevXt7wg62bUsGx1ngtYsto",
  "key20": "3UBv7CWpumRvocTRwVR4mz7DazAPUPtDqEK83vuYfv6TcAsaTCrkc4G7LaX3QHp7yRwXaLAVvbwxRh5f6qoDPY2J",
  "key21": "yaKf4yVjfZxjSm9Y9DKn18cHn78sVzVXtrn6nQ3fhv5drDpZhxPWK2qPKeEooXHh8npfXQD2u3eh9aG7jmCZrC8",
  "key22": "43qVffiuujA1rgXkzg4zQGvqcSTgvLL2DcMf1gCsDWtwEJ9BVyiUdPbEYLejgQX9Hvj2nunXebbRVFXMwpT2iPhK",
  "key23": "2Jr4ccX3HaEyMSYape2Tj2S8AXHYXNE3kzHurPQRkdenA8iqWDy7Vgs7s1zs4sVt7UFRFQegDoQ8SXF1WH58LnzT",
  "key24": "TFivxjPhSVBVnCpMXAtRtmpioFM3jnVTwbe735x4FTTso45ZiEA7CkpPAZc8pXSLyaL7EL1NEUZT73qECdFRjk4",
  "key25": "2trLpeqKtJR3wtqncWdKp7rLK7WYP7VqHf2eeWLzfNKp2CFjq3kYaWA1bM3SZEpwqNUSQa7zYwBsGC5nJKu6d41p",
  "key26": "3pf8t2Fx7Fv8qaucwx1FhY9fi4jmN7fx7rmvCPwoS8RD5t5fQsDSUN4JxiAJkNnG3qgR3bLWHkPiM1AWR8JXKn7F",
  "key27": "3hZQi2wLHGBRjQugWvfQSCvnpR2Qv5VxjW8CTpB8PXQVi2GJqF74uKxDjhPdPwLFNfi3FMjpUE4SnTUws3PNd5hh",
  "key28": "4fpY4nqpH1sT3fjKaaXJxaZnYgPegFNjkpymWuCo4taFQ8PSUobfnL1HmYRxdvqXPvuWhHcSkC5C4dyt3iPkGwLz",
  "key29": "3VFBS5mURgpHxBKVLuheVKUeQx5MeGwarK1wWgm25b4oUhfReqHtcRU4SASbQoVsEHundV27mR7FEEqctoDvpcP3",
  "key30": "2edGSeaUBupQumAejTjQqkTW9Hsg8k4m7sES5FmSUHNFQ9T6UKDzmh8Js3PxFS8dJkB6WKDsoTkyzH1Zxnm6gcVy",
  "key31": "CiSwKUzR4iZ3FDhv8AyTj7ahm7TSHh9BvwxFf67BdTLbRq5GcoUv6KRSM5DhbGhrSuwX79YgP12Z19Q7jQUdeWD",
  "key32": "2qhiff65L77rvudhav4WdwE8J3irhAr7WP9fEgWJycQzgcANhewPeB924euGUdXwVEjf3Ka95h3PpwybrmBtoEfh",
  "key33": "47i44hsb5EnvXyLLHp5vD5j6WyADwdNanbA9qqMjUJXhURrEvb9gsawfp6Ws32LV98th6nowH9tzxsp7YYx7NN62",
  "key34": "2ezbzZEvre6hsVzpGfX7QHv8zbGcFjWixLurPyBsGT5Quq5zfPS66tkQ9NprRENZNnnNXNdhgKQPvfSFMynCHvcb",
  "key35": "3DC7w23pCWMV7fMd1WJH1wpgdSZzMSQCsKjADv96GPRo5573xoHkCJ28RCDQ6UVvkJZTF5exAjnvCYaNVBJQYTDN",
  "key36": "3yzqN2WT1KzuihCbWLZvhDLxvNaXVi3NtuNMd9CezLZzeMB1M1xFweqtSLeGs3v2FnxhjPsftETSqAoJYLBm2tk8",
  "key37": "5NMqX9Nb8AgyUEioqHf4qUfNtWfVEBzdQWRWtPSXAXqPmP3QsLJYv1E3Bv2jEA4YYe18p1SX9iWM6cSdb5oCsJiK",
  "key38": "4kp4wQqQFi5e8PugdrMEzJAyVFXtfUR29oPxU9von951U3ZTzYndG3zzzscnaaWeCn5iCGrnywizmoX46Z9eQAie",
  "key39": "rp156CJmGPXnxgHhHVdwo3ovms33hTsGE6tk12uvof7kWehmEFdDSpwGgrVY7hfNVceSDrx4kQnxRP9QdcLdxo2",
  "key40": "5E5WkT8R8Wu7gSUui4dsoEiJaSvPxfEiSMnEDD2izHvXxvuXPKNneZd883EoL2cjct1K8n3XWTAMNuhmdii31vbP",
  "key41": "MG8dLykjR1pwALZu5e8hSvc3nubv4CHmAQ4kKMdQhS43Q6Jho8gDaArxCgCABp48oLnmkpBSnFjgJDDzXcsEKcw",
  "key42": "ghdsqH2uEtJRAdc3xxRcvJCdCyQpfMt9gBfMiog31j3dv7JttSYQEYiMPHzTNN44FP8fvxqdVTgnL5H3hFqBaS3",
  "key43": "PMoC9iaGWxab7uUUtvBGwQWaFQan7chYjMyS5gu38eHgJEVHRDmgfkCqNStMcP8V7rqbCwEVYZaLZm6nXwVoQ5V",
  "key44": "3AqN1XggXVK8jpnY8g7Q8kzYGWADtqymjr7Rao7BUFHREmASUUyoT9NxpF9fvoFiEmFDfmTet1sm4rZDNQZxsDc9",
  "key45": "nWGwWRWGNA5dELyJUgBzMu6X3TNe6zzqCXBx4LDPuaX94wi6ssrom8B5wrSTDGEZPWh3aLhBwefiLu1ArwRyRUz",
  "key46": "5N3QCFaCxtGbFiPEQ9jDhwxHXonBqXL66Pgvqiec2rgDD7LVFv2ZqHVxkxynMz7BorFBB4JVadjXxa8re7MTYPJz",
  "key47": "4SwEKMy9UeJPWkRPqmULUb7YMrmA3bsXJQN5pi7xvQbdNUCEBnFN74yBXnRvoZEjjeAfXfqCyVxw3hqD7F2sA4KU"
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
