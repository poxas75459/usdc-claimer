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
    "eRsdBxgsYNMQ9B85TiUkj4ZXFLbhGaTfW5UhUr6WhGa6ecBVtAnwTbgvVM4PRfbisu2LPKtdfrLkoHLRUZXvmYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vafmzsyhjU44tzscgckWqrVsQdo3ViYxFYsW8YN2WPqEo1Bxj8fG8j7w79MaBfjHdwknAjtG3nzHA93XxLtjoFZ",
  "key1": "2pNkCy8825z213D9qDDGkTFwgnXjeW7uhAet5G2WDKnag7cF3MaqsndaUUstAdTnmFc8e1YUxWMfL7ksFV3qB7yP",
  "key2": "5gJ8EkpduBXdYf2Abo336ag97sqwFkW45ZzA9URpT5p2XqTdWnfE19EVHnaSh7tdNT39LAUMqMtBBpuamR8xuVc2",
  "key3": "faJaDexwGmdoq7XFU9Y12uDuy7q34nMZaFbr4Vp7i73fDLApU1HZAgT7d1ruemwYNFaFMfufL2DfEZ52otjSav1",
  "key4": "56snFXQAdi91wUfRcjad6iVQMeLYiqGJaLhM6fnt5zaJqGGugTQLVAxJbEA4u7ujCYfC3jTbNMfwEj1nifvMwRXN",
  "key5": "39HgKm9aJ2nZt5fENDvGnmgGZs2wG8HhYoVWZx2mgRdbqmU4zs29FZWfKVd6ZADYdUyjLBsjVaCpLaV1Y9eNGMoK",
  "key6": "4Qf6QqwFK8qioU4TTnNxo3heySpvZi4sRASXg76oXYUduASCQKthxU3wwVe6iLfEH2BbpaLSwcwpSZE9KnG6K3wv",
  "key7": "1NxyfMa8UkUAwRS1EJrAgwXiDnXVjyDyGyhiSJo5VytdTbrSvTi9qJQPqTz6RcHj4tugN17uhPpvmAxKgTdBeWG",
  "key8": "3PrPETtwMnmiHyaEYfxCGEUe1uRnhPQ3ooX6rfdbGLV4gS4rnW1apqPBaitNNGa4xDn7kReaj9kfcsV5TQZTC4se",
  "key9": "45ZiaRgAVCV27pGwhiTggs29NRSzS1dscegUZoy9NxZkG53rbrenA6VnjXArLQkGF7tJs72zpNXzjwGMoECLJhUA",
  "key10": "5MtihWeQ4secwHzRk4W3ByQQFEhQBc6KMk4NsB9Ntzz4anrnTgukq3xVaJLKGPkhYejztrhoHmUxxMEj8ktEeJ2w",
  "key11": "4dXaxZVE8MRC43dddr5oWnUNxHkgGGKuoEGC9yygfHrWSWjg2Ad4MHNSRynLW8HXCtUJTctUtX5erYPt2Enj1NPu",
  "key12": "5X62AmLfanJQQYwJXvyi2MjHByZ3Ks9zEKSZRXHZP4n5txekXeDTTzoq2hCA7YCkfP4c12dbyGGbgfNEmWkggTzV",
  "key13": "3s5L8DRN5ktbqNUGckMS3ZQajgTSAhcgPbKQzCH5G1MFSNtmDwPmTg4gfcHRWYiifH1AttHsiMV1bXkjga44CpaP",
  "key14": "23GE5KDnZMfi1arEHwqd2jhQ6MEnXnsMyCmsEUwUTDuV9ZFhmiqh8ByWHMPaxraWziXnjyg4kLiXYLPigajoojFY",
  "key15": "4nv21e3BPJ4TQ1KiZR28M2xxnBvmqGH4BrSw6oNQCxLHj9AyA1sAn534sG2coFuecoKTLnCf53QrgpYTyzRUyWmF",
  "key16": "3tY7BGzZgevrezrhpEiqA3hx9b6dipw54qt3Cs8ktwm7uw9otS1thsRfR5fWCxYo4ScF9Wondp7SxifNszWa8EhT",
  "key17": "55k74rgTfyp5dP5aF3MMfTjzZZLcXwcsettd7FAyRARuHxZhQy4CsdPHah757EbzxRdm3RjVCP7B5QPMvsn883Cu",
  "key18": "5gs8vrV6JhA7MwpeP4vVjc6xXEgXi4PBii7Vojiov7dSAwb3vuVU2RCzVeQ3AghyhuzycpHbDVRazFexKE9NjZ7w",
  "key19": "ozHB3PDNzScSmJRdEdGRgbDBGXp4WwmTzjjzC4foSJ7mbX7pbMGtiDbgWYmcivosE8GvxWHLgrpF6aCvtvpR81U",
  "key20": "5sJFmv8CgBwyx24D4BRvMJuSdnWX2nqcWpN3udoZfe3jX2Sce7CrqLoHEzTDgrgrTH5ScJT2im1VkzrmLrxXPifq",
  "key21": "2mjs2fxZMqHTYw6dnLE5FKcRZ6UtdVAHdpeLFpTANYrXwEMC4XtPWrnAzVu2PcYSTisWmSPcsYBb5TrVYEhisR7w",
  "key22": "5hDwG3e8YWKgvZcFEBABZBc7vGujN1FKAygnhVoAMMuNoL27XeeyaxghhchRJokoXW8KYPsFxz8v6CqnBXzXfufw",
  "key23": "p2NSbRWxBaG7pVqhFU6Zqdiczut2f46PWT6MCUWKdT1Y9qDejWyDecrbm4SogNvGufiJEPc5dH7b7BjkkeGmDQT",
  "key24": "3LaSxzxr97dUgRWu3c31TUXGE4oUu5fmLhd5zdqxJRcmnfsMrtCUd1e9FoxS4JrHx34wUSJggDktDLKhLG3F5QaF",
  "key25": "3vz3NnBAJSLSi9mZsjSXwwrBFtw1nsi1tFKpKft8UxpDf2cTjpsorhFTNKaAoW1ocJhqHd83VWN9iheZwNgvy6zh",
  "key26": "57J3DiqJ3UrWkNMPQwpS7NHGwstFr5ZaGyMRSU2QvGkWCYgmqfeiPzkmMrWBKFPKz5f6XGBY3rxpxvTW88ue7ik3",
  "key27": "fvrhnUMNSMHnpTKstcGmxqnTBYSdPSJexPXdzBLJiDiudsoGWtkKqwV6eAfTUbWLtsVAJtjVKveMs5rHyKL8pvE",
  "key28": "3n3JoSvW5rn7gNJi4kqXddCGsHayvY3vDVq6uxZDnTGJptQyE2re7f3cozBEHw3BLDmefLeH69Tn6RqERMuGpMFc",
  "key29": "2NfKMn5S9ab66khfEGT9Rs8A6DiPx2abN6E8H1pGJ4YAKXoAVtRVbxTXDMfADQmKczQyye75rS9Ftw5NZuzU5pX3",
  "key30": "5fVBK5yRe5JTihmiKUXfTnnGiqY3aRe1UoLMEcZvbmWcCpApQb5qVktbAvpW73sFpGBb7WNtBDVqWMqMq4FhWs14",
  "key31": "2MamVvxgZTofnt4C4x6SudfmXZVoLg8npZt9iZERLZKkMfDL8aVW1gJvshETe9KyiEdf9vgFDjgoLDEFmgvATjke",
  "key32": "2nSvzGZy5tst68BBrb4Ab3KJ2KG6ePFEf9ybfA1hWMXYEMn6hvdNAnpNxjE3zSciq7DRWRSSwYzNnxTpUvjmMath",
  "key33": "3wFvhRZibACkfPJANUb2J8NMePpo17oxSHhtAZfE7mSVS3tG4tViyxaf7p9xrTfbRTLKSFtwmEJBx22nn6F8PYNc",
  "key34": "3MN4n4mg13CQ56hAPSivb1tF5vP7W6xnQ7ZMQWUFVodu2bXu8e7ex1W8uJVaQx6U3RdG8ASZr4U7ZveKP7rHGEqa",
  "key35": "2cY8ZmSRiqpxDEXGGy2vMJMgC7JGuA1qZbKRtwkewjYNok4GU9ipR8ANE1GrzwztPYLcTEyWoNPGa8RDnSg3zqYp",
  "key36": "5iTLhR6V2szKG5wWBWM6E9HW4i37e2LLamwXBKqFgfjbNtnZwGZWkQP5fYFmhJxxNwk7xYvLHcBrmcNV4LYvtRNk",
  "key37": "5nEpCP21XpuexeLfZCdbEpCz2iD3BSWwfNUepnkwuPmziRGExuvvc363NVcRqTo7GRJC7APHoEsbzvQqKtu3KYnZ",
  "key38": "5depKVwkPzhYvdH1nfcQ3J1GJtUgvWTakNYby8Xwyy22ZfPWdrbDogTwdTeWKBJt6GpBbMFVLWyZ5R1zwemAHP6Q",
  "key39": "3bNvu6Z2qoDqADf4WwjbVYMKcxFLWkb8MBqbox33etZ5paHuSKwQ3aP6gApfSNQvKgrzXr2AwRxAAdx2pFyYzXBA"
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
