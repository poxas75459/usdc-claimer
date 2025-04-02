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
    "3wx86ET4gLBXi1PWfgGKEoAKWMXynk6g2rovL4LYCRDFZa6SRtLg6tgTWPRP8scaHmG2onYY8TAC5Hu2sXWUpcyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bzos4eEH3Z4fufYwhmgCFMMpeBV1xXFWMsAr5HSqr6wffJygdgPDQZ8PNgKabVz9cjW3UiMQmyAxnNDdBBENwfM",
  "key1": "HypjoGr8fEWQLXAsx1YVagJVqiVBXshps33ThybdvxtVG9viuWndK29sRwLkSqjFqezqB7s6mMYX1wcvnFe18F1",
  "key2": "26RoJCY61yYVyyFCw8SHiH1GrNtUpV3XqJYpuf7wt8JtUHyqsBtjLDkVduvJFoekbN6y1Jeu4gSC7WmsNjQz71vA",
  "key3": "WNJmxzWGMFvLC9FBkHCiuuEeHgnkUG5WJKS29mR3orA2trBzPBPWfKqUdDKrCgKjW6Xey4fwbUQRhBfaBx4Ks1u",
  "key4": "3fPf15Gh1PN3apXUC2o1qtm2ndUAz93Ek138NufbswFCjXgc89kjjRsgGs5BihKdEjAxLxsr4BX5GkmQsfdFpgSu",
  "key5": "D2ogioFsq3TnfHUT4maPaep7EHvbCaGHP1GxbEHcNPTvMKLqXNdASbSUquJyN4ZCTFav5hNFnAckaRbN1ykQLQg",
  "key6": "2X5XbcQrtoaYVU52aWeZmi29Uv7hiMwF1Lam7HWPK8dXZrkTA2FcJFLquFhoVmzvqGr7cmAqx6EvbrQ4PcVxqAgr",
  "key7": "3P3LKWWpUwWJdjJ8XQRbji5PBhrnmwV2aE8jaGtbt5bB1gJQodWMWwkskzV1LEiXjfG4rszAWQfnAPnk5ynXQTop",
  "key8": "QpueSRTFahWbmRvazTTLRezhkKVL94et2PfVSikegC9RiGGCrJRHwySQ8GXyfDHMreRGYTzHyeovSizoUuAFoaJ",
  "key9": "4Z7DNTEuoFik6gjVVJxFq6KtB5onEk3yVXh5xwvfRL7mvCivQVrnR5pK6LqiHBvArMXMKMvhJnYGinYxZKHFNqqt",
  "key10": "2dHfaLKNVnfiyvv3KVWJg9xSzjTVKuUrrTAFy9mWTdCp4tNub1RXFRyRD5ZRr7Pnphij4sAdfa1usn9VY3fBVjXY",
  "key11": "fvYqXHEiFb8w2WfY2LKrHSjUnDoux5RHZ6iUBtwSXerubtAu7Kb67KKqwr5yMNeVg98QihDuDuSSgYWvc6hDrjk",
  "key12": "4GoUTpNYnuXVjGyGkbCayRepzPitZXMLTR6Z4tvbvXVbpzQdrmj7phRH26ocoHyz6WrYjDQTw64DL6VjdYZ3W1AR",
  "key13": "4zSNxrkZ9k3PcMjA8jKXHBQrUYxxVCMh962e3keeSCb1YTawyS148fPYh7tLJu1ynDfcKvxHLAt91BREcsUtXJMj",
  "key14": "QXTZwSdH7XgXxdgwVLfMpNTdiKCZSDnAXUY53PJmApHWNWePq9wRZsCF3o3Ga8iD9GhqoZhVYwTYdcn925YuPvZ",
  "key15": "3XA7zAMNS4SCqDDcZoT9bWHrSmK1gfE1m5BgBz64gMGgqb5VbHjBHdCUa4y64SpGnm7ifn63qrRAsKPqLtoncZdn",
  "key16": "51geRSXiRxTKZp2f5NdcXXDvgwh2fcuHvcZRRyMbXgqFDQ1gkimJBSaPtsvxf7UfqofontZiyoBRKNLoqtVECZaR",
  "key17": "5Cav6LMNLGr8yAAnqdFNKdmdE2wubjkUPJbB79QJEkQwgAJ3UsJTPd5uhdHinQy4C3bagJR6WQfYQN4iS1fPNToR",
  "key18": "5Xf3hVDDHZZG9yNpHKYyh4n4nXakEx4rioemLaDyYPFGxRGXSsGKtd8y68JgYYN2rJBT3C6k5GdKDr7DkjwAzLan",
  "key19": "8E5nc9weRSnM6eBQ1cMQBemq9VKop6Uwt5pGjy4UBd8a6wokPqPs7GVcamYuXRjCYLbhESdkNEyHmCetft5AjoB",
  "key20": "46ZSURuC3GY1o5PKrcqU79bZXjw4TC4njBQYsKN3FKZztmj5FuRd3SkWfvxY3a6ami2rDLdB4eSdMgYJgGgLM77c",
  "key21": "38RDopjyziPe7hNFK9ZDUtw2v6H4u3v1NTciL96rZ49N5m7bnSit8EGbQY3dzZxUt9kSFeKUYz2hK9JEf2PG9HTG",
  "key22": "3P3KPpyirHsDGi5sdi2FaQQ4jc6osBWzojAyhFkMAFd3pJEg74u9UvEqiJstwrp5CNigwscTA23TqcKH2knqCQ41",
  "key23": "35UJiCnmwXFkAt5QX3TNQJSJDp8vnZ9B18MqQEirBd66TomJxtUKzGbTijAAvuaTvRC9CrCM3js17ucfsVWna2Fj",
  "key24": "3zkNa7SQcFnB77iVcNwazNUCYFcMRbpURUp78m4PBNn68M4wmy4ReLDzoiKquCyPdfinZVhYa48SSsLbdaTDmLwh",
  "key25": "5vxGR3ZXRh6QwEJ9FisZC8MvmzQx12TScXSCKgRjdLmAHgAzbCAtPz4yWdBe4S45KvxVnzboHdsqiCNPdYP7WhQ9",
  "key26": "igkEUYGg5pM2XhF8Xsk2xQiirBxH4yqCfSJYBgNUt7UmVVCZoUaj9T7YPsJNJ4TfrmSD9qTjmmqd7D7DHQBBaGx",
  "key27": "4nWYZD7vkp3ricdfxGUqHEJiq1teDts77oifh8JHrpq12H5AMXRv9RPicxXzURV5RUbSYxJZSUBYmqae9tnb1qb9",
  "key28": "3GzhadHjG6aXFrQXHzTn35HwtU3i6KUBRBrT7rHBEKHfGg2PhyeGHRkjv41RZEVGcUMVWVPUSp9zAL3Us34ve9nV"
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
