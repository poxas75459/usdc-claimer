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
    "332SVndU5mEVLTTMxYrJxt3uKV8EAK6FVuDkuJ3bMjetPjqTT3z48AGL4N9vJGL2UnXgpabMcvK35ELm17KV2zZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GP9u9j9yq9wzFr1hznnz9BdosR3Uy4oUFP2Hi4rQ1nsPyPDgAX4UQKJajchPFCjCeAeJcTPabyE2H2dNt4disF5",
  "key1": "3HjkniDvpGHFeojRem5EF6aKLs7g2rsLEa7vGrDg25qmPA3B7KNkBh5Vt7nELfwenHpPWMxkJhf1Z3qAeTGDXqMA",
  "key2": "2t6LmwAV3p1hqvBk8nJsVjXmzg2Uxpo9x5YfxsEc5SXeo1s7W9cs6P5FcL7PX1D8bpcKW5L1VxNAYnKGxHEsL2S1",
  "key3": "5mzB87wC9Hwv7tziDvfoo9CKi9yPT1sHpX8PpVMxpp9tQ816pdCGUruWmQq67LYSrdwa2n3Q7hHRXTbPuRQ4ViYQ",
  "key4": "2kUHXzVG97TwFUHp8HexRkVZYgALwjXkwWcMP6kVyXqbYp9GpkfdEefw44uq2K5amK9TYHtw2ogbpZooieVwDTWL",
  "key5": "5KtgGcFBmh3ehkG7zTXiYk857AqkpsW7tDxiZcgiEoVJMbcS7eFYoiPKJtCjwKjP46Zn1LVasoB49H7WvNUuH1Vd",
  "key6": "4ADoJ62un2gFLErHH2cNT8c6dgZ3tCJtVUzPosSvPQmtDLZt6boYm1isY8J3PEZSdq9C5isk35XhA6H2tptQJhjL",
  "key7": "2puwPoHmznM4zxHxEhKDbbiN5hDMQ5b24xvVzaEPiFLgbwhF6zJ19QCLUZijG8yncoKC5sWRXZc7ZyTwX3aws66J",
  "key8": "BPcUSe5kxkzA5NFfKfTKq1G8obd9GUUJrCBz3VDvDAzZkFtknN5mt3Wo7u58ZEUTTCfD6rM6e9BrVD7s1mmufyE",
  "key9": "5nNFKy6Tubcoibj71qK91sGYGdKN5dzgQHVBtEjuhBKKnDZx2UGdHTyyFrVyk1ZMbBDNiAvpfcNgCRZTeCHsf9to",
  "key10": "512KxJPYTToeiw77HdLcqouWahhXmjBPEXKQe4TVTDEhGMpPXtBYymnT2e49cykNM2JuDbPCDHQyG45qzkd1ioaW",
  "key11": "4Ubq8n6eGaq4fJMyUbirbc3ic9AHe6Kh2tFhTyaRk36wL1Bme4vepQdAewWbyiyki7r35kmoX9i7kcQJ8FyDjKg",
  "key12": "2ofkLicuWpiJfRoQbF9bqqB2fZzd889UcrrgSViW6tLuqLsrj67K3TfuqaNLh42pvMPu4GcuJ4cmRPwdndPR4kFG",
  "key13": "2xaG3uu4fQSNfCAPSot2KeE2subJZJpqy6pzXLLFpYNYAaij3MFfyRSTCBoawYcy97ubbYEbAs2ofEXppAAWxyB8",
  "key14": "4P43Y8Mu6Rt3tnp77BptHM273ZXTYMqqBZpZUFiLj7Eq54LNEZRQYEyiS2cSy9GUVpjwNJogCJ1pEfjWq5g9z5w2",
  "key15": "5Z4sXvPC2Dd2C3DSWQGQoxNgyHD5rZwaC5NHrk6CRnCxuPzTdgeGEC5ZZqJRGsN269sw4zLRq2PvDTf4SURAKPqX",
  "key16": "4fCyyRdobwHGVzmE7XF1sRh91z9FmfDhFwhxKf6KMnTDtYAi8CoyNPjRZH2G7iqmqQLn1Z2u4zPqJgDb69w1b8xU",
  "key17": "5nAkqEEBCN299YewGo1oDNCYbRWVBKprt2ebvzeqFcdz721Cyyg5KLeSh7xFkUvkaCUw7K6T4rCWZFYoEj6wcSsj",
  "key18": "5HvoD8NAYYWv5c2eXyqm1i87fptkiA9JLZCjDjrLboFo8b9GT1bJJCKBcPrqpHqeXfLeGiofiqeRYQ9F4fAP8nJF",
  "key19": "2Fx1nU8ojzhswicCEqzMmunFYqm9SLgVH8jP42HC9rRuY1TpKww79VtbthDgQAWkNvrMtTwNbE8NLt9QB5N8JnvD",
  "key20": "4cVgFYxCswW2FCyPqcrhZC9Pmaa1GLETof3ZuRyzgvEQBx3rj96jcqTVeNCsdKtnWUNgfWGPe4Jc8vQjvhQczZnj",
  "key21": "62PzsidK55v1iAM29TY72tPAVKtK8BwdrtBYaKbRy6g4tytpjxYEVp4KcGkoHVEjocEQPvgZNw7HqK7HoAEwLMDY",
  "key22": "GkbFo2z98EdwWDZgzeF3jDFAwM9t1P9pf6DMH6aiPUWv4Xi1EdWbYGexq6SghbyAQs4312D25dwhXMJGKWaGy6s",
  "key23": "B7BHNMmJARQvkiFvKu9QEVuQLcAjDmErT1UnbecEjwhArCyCxGWb9qasvkF26h5ixGgJNQjQjcv4Mesok7YBg4e",
  "key24": "4DStdzuAbkWEJL8oGnTYfXf22Y5V7NE4zFj6QjZm4s9Kj9YKXkUeL2xK5Uu5QNfayfVLE2SzP8jevYfRRhn3AE1f",
  "key25": "3jdW7rCkDe5sWtBrh7by3zpLhimmTsQhAfNufMdyg6RERdxW3kA97gTYHPVc9BU8zQHhvqEwYqWQ8tQga2ADovnm",
  "key26": "ksqyPqhyEaUtu3EGrDi33rfQZLHiptXmag6TkVQDTdTdQbRtpdpmMQACdUfEShz8K9HfccxyCMscmnvWSXYPia9",
  "key27": "4KsUbmXxHdDFppACowjt1b5WVZnHJMRXiRZ61MZjYEMzWtG5CVrbQ46yMgmoRaXJrknz2YxwVoA2yUhA99eWSQZz",
  "key28": "27drxpeUt7mj5uaQjX2EKooPczjcVZuTPifrYcRXqU614awng5zwYpMvCBR8uRC5EF9u27e6GB6VHhK4aSSdVbuE",
  "key29": "5mABTp3trhneKxufBX4VGDrpC8JL1sPUoihxgUXkT3AGmcrQ6dwhfTXpSs5JdK6W3B2u8Tv4yeqTNZPDmUxbWHLh",
  "key30": "4js8eovuRdRxMxV8MXRDQiZoxsu1Nj4cQnqRwuzSVDWwoNUdWWngFSagWiNSbBF4Z33Vxw3WpU1bYtLDMB1UY3Cf",
  "key31": "47ZhzjJ18C1odJfuU1TwHaNeGVRten3kL2Mpu4vBukGwwEgfahWdcDGmF39EQ4kWqAXN8R1a5kiewxUiD171gw2P",
  "key32": "uXrgj9nurzotS6eRwXShK7KBwEDJjHj56z8DZSwYbzt2XJgmBEiVHDq7is6dFPTkpk4jvxSpdUUhteuigfEea5W",
  "key33": "5gEr3po4GR58xTKRBnX4PboxEPENrwPMkvpwrmp6URtWAx6oYNH7j21DaRsS68yRGHpPfhv7zSJtWa5nhLkWt3Ze",
  "key34": "3iZJdXyvAsGyHBZ5idRvBQJwdLdG5CBSGoX3sKsEJ8a6mvDnDW9YNBpuPsRe6pgbuN1S918w2CpA7t11r2NMYHHc",
  "key35": "3ZoC4VhW49vquu6aHsV76jwtwv5B6LUoJeq4BabNejBkDXHdYt9PEYjbyvhPBw7gdtRuBntPnRgiwrfyWaXACBwr",
  "key36": "3B47NemTcMEhH3Mm9xgs7QwiD5iBrrQ4LMWSckL7tLctwwuMtjGh4t9hnzYx4J9t4bUMaBMQLiGCXKkZtG1yz6tM",
  "key37": "4gvAMbHDCHiqobtJfMc4bWs365PP5bPZbadXHxonMrGMvAsBjWWEDfCerL548nYsaJn59G2v51uH5tcoaRwBrPG4",
  "key38": "sAFWiYPXGAYbMrh5wq6W3tdycnNYLzDVgwxnswoPn9kbCqJJkzKaAHRPEeMZTAJbELjojo77kkpmSLRW1PoDHag",
  "key39": "QTyLQzrobuM5nsrTzHbnbQprYkKn2CXannureEDywtfZTovV68hfueHyzpT1S1DWqKTrARvaDQb4ncKNWWzqBW4",
  "key40": "4rNTpDQXq9uDRjz7pLq3HjyDJNip7iWt39kkNsfBpebS48w31kBgkh9e1vbyLFm9VN9HHgezfb6o17bocRDeJ2iM",
  "key41": "cVzz5PvCacvjDM2LomK2QDXWAFCQaFiZ4uKvEnor52YoWJRtrafFq4icqmtsXkNgP58pQK2Jne7yhKrDT6YEM5f",
  "key42": "2FVqbBTEybSP7jwFc6uQ3mhCYmcz3SjyJeyyGT81yGDzZ3AzP6Y1sztC11YX8DCMjh823YMKqK2novoEriqbg64J",
  "key43": "KRbhknZBuidnrGUUxozDKzW1kwTTusWKfK1sY99vcN8TNFNLBmXQumoBLC8i3zqHx5Ssmpy1rjh9VYnqH1WVdf6",
  "key44": "5xhQQSnBphRd9XtZU4DXwKt9DeqLE1AZGFuusq5N5e7DSJA9eY1cKHxc5qcNkAoWB8gxJVgDzKmBrZxFSzfemaRx",
  "key45": "3JwjhH7vJ39nYvWhQ6j6WQuzAAMwv2L2nq7CVAX3EZxtXhXwc2cpqBzxzbp2VjsCZznYiihqxmjBvTssqAQBSFeM",
  "key46": "5gopA777k78MDAngvrAkrfFVgUeaveoXRyZJWea97KX19fDwhgJqMnd5PkkcZjucVGcCGzSxsdFT2o7Q9WoUAKEA",
  "key47": "3yVui96xJZkPis94yiHjBH7gyEc63Ex8uHSsrBp4mZEs8DhdeGrFbjqmfR2GTHGkX1GgxuWqTiRvb5G2ZeaY4dFY"
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
