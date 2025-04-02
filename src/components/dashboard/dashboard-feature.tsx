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
    "G8j9Y3M2DhtzhBzx1AN6kn3w4TyvoLP6QpntVtktQWDe4FP1E7VeotEqRGoDn2UUSBkMeT1ApcD6cRDF89yMzhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5repQxV8pMCfKnk1faEuMDLzmwgRHEomMeRetsWbWcY5zKgvrj8P7ko7xU5qCndbmWtHhwntFiEdCJu4iLFjuXxC",
  "key1": "5xYfq9rdVdVt8WfYfWTGiiNddftKoPmMgqnYaMzneyccn1B1wo3HpdY5Cnv85FoQjGy5JUJ48Ks1K1Z8ovewRw6T",
  "key2": "58zdpPuvkx9mqeUHyiV8wXkmQtg9NEoFhycYpGwNdu42UxmPSKsUKgBNkVHbh4PMZjKy8Xs5UPXX8d7yQH59bW5x",
  "key3": "5GpkRYJwMeW5Rg5q5wpG3JuN3oJHv7W4qVCgzxJP1SG2Lo1T23op6AxFUYcqEH8F4PKuGdKeZ3U9dRfGhQrduo81",
  "key4": "3KHkHq9LWogJWLoqDYkvJFY1QQLtV9MvhXZczwFkSKAD7KzVMdkT8G1B22Uc2vfbLdBiueUZDHKiqa1AUub4qg9d",
  "key5": "5WvaKvzW7NmHpCj1MsRaPX9nDBAQdzKte8XXksoUmPZfqMjsRwftyc2TXKJku2i3mGcpgPGGm3iiDSVoo7pbpPXB",
  "key6": "4kVRmZHHm4SqsxCumQfjyEeKWkq4EFGz9MwU7rkTKho8Zhrb5EaFB5kCfdA6xPNaeKLkwtLL8XP9AJN6NoEsnbFc",
  "key7": "5uD3tNyYG3am8X3cJRSXYLnEBTp18zzMmDjueyt5pwAuTWkUswsqJDycpiJfu5Vc9YVbLt7XtfrYEnRPFuZxbgmj",
  "key8": "RUwwf4qHWDtvdesj1HBdR4Rdh6sXNVKgy9ruSSerBm7qX985bEw82shP9WMpAtjkoRzFCvBDaX1qEC8nJVwxiDA",
  "key9": "J7HvsiyjvouYu3v2AQjgqNkFxgQP1DqcAFcF1un2mAj17ZTinZnbpSgHGcPBs6soss5GmbfVw17AtGqr9v1AZt6",
  "key10": "CTNU7sLkjHES2DFVgJABFgNXL8VUDHXNod7AZXAkDnPTWE9Mcuu9ZPdJfuuuiWdmDzg3pFgfz2fT3cqrqNyuZYn",
  "key11": "3ttD3TCgaTYo5vtoPSVeCB1wYcv4WqAgbQ9NM6X4ami5BMCVogDXZanfvq5PmfhkWHaiA4bB4PV9QP3xaT2Zwfb",
  "key12": "RnZeYrf8ZaxDqmSut3GTcxn6KpZ9ie6H4u9sHkjhdLVkUFZ2riGzExYTTGF9uqUNVGwzsJQKykWsi1YG8eBGok3",
  "key13": "43JiNLckHtnUTd7zdUe4CKeCDX9a7sGy5QNzxQFYjyw3F77LQbZ6GFDCHQvDLSS8jiK7RBnVtPsG4SvRJ9RU256r",
  "key14": "2GtfQwn3zB4ksUpQxvEurSQC93B29QbKAR49hJar7TGhgVphLroYiu3NagcbbJnbGFDLh2HADTQjfFkcok6yV3KG",
  "key15": "4pDZk5UyWpNEJ4HnuDoqJYq3idWR28uhYJwT9xMyVcxbHUmktzfnVYdBm7gyqxsRkZ4H7dYnWwE2v3RBw9JfVuGC",
  "key16": "4ATEaxwEzXUahTrvCX2uvX64VH2xDTTAD6SXKsFH96thRfEANWwfPceepTX529mxVNxZrTuvV4PjnqwFkMdKhJVw",
  "key17": "3mrmDKoeZpddrQB3MFKYFx6jLvQo8fTmN2qGYagNpCTcUvgfc7hsUt4qww6Gk4H3keFFMfaAFD6aDJo8HPAgDLdp",
  "key18": "2AwTGWMDb9yoCj7Yg9r4ra2N46VcGWh3PaY7cEoxti7ipJ9XNSCFmkTVePCYFUy35nvVgUSrx1utiQTB8dT8s8sc",
  "key19": "4Ai8GT7jHi3Jpqz4K6cjP5zn4n5pdhw1aNzF4KnkfTaYkf37kWoVHo7AF3gy6KmHEs2ptP5LAbVMDMip3qdXQZDA",
  "key20": "5c63BWQ9yo4gXYM9fgKKazqQg6zgbpRSGNjpa3VDsFfxyaeAMs5uynXDcCF5m4Xr5tg6Hyw9vd95V8ELMy1oag82",
  "key21": "44LsR8z3AhRha6mVqV2QPf8CPGCjBdCaGZtGLTsCxQvXekBNWJ6MAA8k1z8vpKttjgxsuj3qyRkndNBgMUdgKEdf",
  "key22": "4RzAucP9tgUGihLcYSLShYMuVa4WFCyY669yS8HkdJnRNKwoHgQPTGgBfDCpzJEhiHUtu2o7pGoUF56yje2K6TnE",
  "key23": "4uJhL3mJAhQg9BPgRzyBDASPFPQG5pPFADj4AA6xpCHCQnhWgzQtNPiDAyCeJBWm2XGuzCzNKpjVrKFvFFJ3j6P6",
  "key24": "4Li1heHWbcdHxwZb5VUVizRFFZQaZGVuqxXo1V2SaaRaRELwFd5Zy9PGUCGSd3C2D8qXjHMUniZR8xkFZXiDoZFa",
  "key25": "H7KcsXmE6NJm5JLThpxX9gYNVTzDfe76Y6XiR2VwdLJ65WCJk4Df49nV58o3Gq2J6m2G1VCX1pBZb6SwoXkESRz",
  "key26": "5GL6nKkbYZe1PEXEavnsYyZSpyMwZZYjSjmkm3yBRpJcnHQtjY3zyQPV8FqNePJfGsvzdcqTTZhD6BhxCUvZJZBF",
  "key27": "5CodaZTr2fMQfE2TUc78TkftuR81TN4AdX1CMBJwFmqKtD8opiJRKbwRMbhnXXMyzwFLaFr4ZxkBJeVXApobQidM",
  "key28": "2oTepfrjCVq2c1XFjDUVNT8H5e9Mj6bs143NUGVXF8DrkvMn2RpWGbqEv6DtQ9WVsA2NzDV2gbcqrYw1131L7yq7",
  "key29": "5P9c919K1a1nWtK8Zsa3rm3VCawFpp4rBJ5b1vwpD5P5dmyseRhu3hAEyq4Kp3xqBX89BVhpytDJWcS3bUbDaghK",
  "key30": "qE73sZUaJ6HQKBqF3sQMVR2xwie2R1XSLoZBVDebrL8YCUt6yr25dXxzrez2KpgKFfed2wTvpyPMdDTCKm6Pof5",
  "key31": "z4S2gek54KFNytJsbUc7EfQ2yKHS9AnFJcwjxgRPXbMUNnCfdiCuG2wEwZFZMDmL4xAaZwrKk7EnxAP7PKSGgNm",
  "key32": "2T7iGYAAQWKRUMmbhDh3NZZ2Tgoi3PFXLGHtZiVKREngU1z4cH9dMPb3EM2iAg9xDWTeaHgq39UyhP8zN3bzUbjC",
  "key33": "3Z8xsWNy7nNoTU7crPjg2YHQbLvynJzLPnbFex5cVPz8DApL5EGma7RAH3EAXAfMP74qQoASjgeJFc6ELQd9dXfz",
  "key34": "45U1bHfxMhxCKR3v5DLLE7T5uBkn8f57JShbpsdwwWPAP9q8c9SCAZhqtvnZozcUJGJmdhioG28Y77HyqtpcGuyu",
  "key35": "5VKjZUmA55kx2W4yYxnh3VAh1jUqYCizAFqzaM7kyEarEFHanAdHfZVogoKMZcCqNboZR9Q3BcjdBVRpYzwtxiqR",
  "key36": "2wdLtNW41i6H9GiFG2RqS3t39swXYVVLe22ym14fvphBmvK8DPdDk519Ase8TTQ12emPEk8pkCh2zAg8gVUPdr2t",
  "key37": "22LKbo5FQ8Nfy4t6CFvtxBzukj229LURjrmP6FUL8NKCfVymES5tiYYf9UHtzjXQ9XwJvTY7o4H7WLgm5wJX2kDS"
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
