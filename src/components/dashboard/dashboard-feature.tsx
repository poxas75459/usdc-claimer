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
    "52FYMqBSfWseUDocjQ4ozE36gZoWEJVqLfRwhEFyArwSx1cZUZsshNCXnofyJcpEKXY8fYAt3jawQNkMbvPF9d1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DrEU4SzpvZLkXXr5n1PpE9yEWDFDzDy3ez7kaHrPTCuALZqQSZt9FjX2LjGcSNuKDeA8guNDMopNsEwbyPXUPAS",
  "key1": "4pQhKG5775845r2jvL3jLPpiEZQXENc2YkEeo6gLzYX2ikEDdxizT7YCp2oCsybXZBMyQkh9GMLy4zfuTshVEcnJ",
  "key2": "3FxuZu8j1nEHFvmcMfyWPMM1ewRsMpM7CaG1oXgtYyC5wwQwzuLY779pQ7UNZnT67g9DTmNndVuFVXUyF6ZT4Z4f",
  "key3": "3H9NjYiAPdLwziC6vaT95VRdJKRoz3Gm9EgtfvA7BAYqcGQ64E4tU96Ebf7cLjX8BAxNZUrxZgd6rWhLpVZ7EQU6",
  "key4": "2m4UutsfWsP5MwysABQGXCSJnjJMyKqBVjNt71YDsRt5iAWPRCCxEY5ZKUYEwMU7RtaaFNer67zEEcvX8JyDNxT4",
  "key5": "fAT1QFACQJWYGc2a6DrpLn7c6mQDpzGXnVux3zoihpten4DsSM7WLzxrzMVeqwkSLmZUV9BEwSxzYf4cR1EB7rC",
  "key6": "4Y8ry2nmk2KE5Sg5QAQYCmLaQtQ5sYS8sagoyHXEEuWvmLtiRaH4uafu1GrPpbm7cfgpeiYAoPHxeskiVhK4xrD3",
  "key7": "35nVtdRN2MSb9MXwB9PyhXmgibe5GY9vmhafkfCsN6nkNnittCTivSpJJ3sMVYvqirWiv8drYqfLehj7PWyGWVJn",
  "key8": "3JdjyVoisYq6X7bhxsiFf5HPxJHZyFtAFHSFpAJGxua5r3TMVae2afo7XJL26WThzRQXXfPz2CZLeypduEUVJbrp",
  "key9": "2aQ9wo8JaCvsGc4bgW7tnYC8BknPU2wtCZADsuKrSjiRkmXM1xiimmHfp15TgFVfBpUoSz3FeSwczYrfGCP9upZz",
  "key10": "4ASAdJfFgPE8g8itCTnM6NCmGoqCQXQdocrduvhaYmU4QS5Bihe7EkvjPC2eR6mY3yhjr6WbLddAdMhU61xjN7AT",
  "key11": "3oxoF5H6va6h4Z3RZwJPGF63Wx6N34Rz5eQVUD1ci8f8NAY6RNWG8e8cSTorC6nywu9pLUNemTaYy2ekBMRL7Ubq",
  "key12": "5mZ1NBpNmtfQTYoSVvcDaM683NJiHdQYDZ8GFLdXkZorVbof7GQd23XVgQZ3he6h2syHqmfDxZeCpYJp9PwwhLMt",
  "key13": "2DsvyxQqnBcB2uPtNf1zoR8cFHA2kY6MjKBHdLYmjy2MKLj7pnyqXpQmiC6Ec32hhe3rbdbx1jMuxqz7NGxENaVh",
  "key14": "2oDd4Emdnwso7cMsyvbQdzs4krHz1hjQMQJi9h1Vb6xcAf4GYsjaaD1h4fZrBgB8yGs821cQKmLMr4x4FYxWRPSc",
  "key15": "5dyAFYsBGMwmXDi2ZRVkQ6WRUF63EBxxgma2MXfya9VNPGYP74PfiDYrGW9Nq6nMdBh6f3yKdDNbWvsCLQy5NSRd",
  "key16": "62M72EUeiv48PPXW1mTqYMyA4aDd4E2A66XVriNaL4qZ23qogNsmL1yUgo7zDKQdbcxCed7gmjqDz97fNTfVLa5i",
  "key17": "nkDQLrSdfEx6QuyNbpcTCMDbaFb2x6RXc2FJ8mag3mBiNxdbM8RZHh29PXMCmsonSs9HoUDwso3Y4fUJrVCiEtk",
  "key18": "5azM4mRqnyCw6GBfmCyyuLF5prRAApWDHQd67NknkiamH6pcALKnzqTQi5Vyje1FNBgyoktgm7bdeG24tktxaMr4",
  "key19": "3azJaoBH8xRXmvjV3RmSCX92XWXAXvzNeChntakToQKqCuNfHCKFrb1NZaq3Sc4Xnb5uPydS5M2udWSysHhQ3pH8",
  "key20": "4CmMJ8fDZbPnwDk7x2u21xJakWFVuiqbeJBreUatsz9VjXDJRqi1LNtCwHNXaJX2ATvbgVmAYRMb2RK34CJgHG8g",
  "key21": "5zEVS6zKyyJwtppP7v3Rhms7QMp7cVPJRY4Xyso7dy356ycCQ4hYXCpCtjPCt9F7EMUugpiNEdYhtcRtFDRm5UZ",
  "key22": "5RS3TNR7wXJzkSXV2fes9V89zDQnHrX8uQY4gkr589NX8AJcdSt4F8G7UJ7LodatocKzq6H6YK8qEdNn5AoGT74s",
  "key23": "2GEhYGfWpsa8C8nTw3MrgSZLiPcQfsCWNCJN6LZNTfkbi8D6BeR7ECdyAVsSMj7byuUXC4fDwqTqCCrUSp2t8zZM",
  "key24": "J32SyyWjMdx3wSiHN8jpFMUppNP4xrwoW7pXft8fQWKKw56ByYtAXtejityzW8pv2LbAK6UhYfDbo2S1hiptWmF",
  "key25": "5RXTpAaqjNpS8rzgWaTJW9PVR3DaEvjfyGpQnSP5XDh7ek67Lk3aSShidyEWHG9yZKFfpRyQuPkAENXePVeLV21D",
  "key26": "5pjVhYu5F4K2JJPsd6tUnCF43LBZo3XY6HRfcKYWT9NZq7BiCbQzU21xZSnxaXBYhXtsXi5YitpJqT47FSj2wA76",
  "key27": "mkas32JDQZ811fzd2FuVnTsW3xX7vPJ91MXXhd56C7FbfNk7mfyS9EL2BZD6VuhLoQa8SSFU7nBjXvJcTg9Dep5",
  "key28": "tCgAqiHZc7svh7u84uPt5AXWY9ypxvSm9K2CtCAC5zrpoRjB2Z1kJoMnxEFqihR2Gtk2J4oJUcG256atpDeg6aP",
  "key29": "4Ev6UJGEU4ckWvFToKAho1hkzCzB3s95xMtQv3L77d71hRiuV9TPviWqVjtkYYki8hoGS8H8JMhmbeo3tg4FLM79",
  "key30": "3ALYopaVykfqT79FcfbzYGj3cm1YEULxrwU3MKGrNCNHgkQPdq3EfKZUYmQdkCY85FvgDHvz4tpVGfLBfcYTiYeN",
  "key31": "4ppkGxj5YhE7WnXYcSMcXZ1MT8iNnvyhk2cZmh4bjE3viB5RBxg8KfaErP2WS91FNacK7kW3X5KNyKZMV1EJ5cVK",
  "key32": "Rv13AVBugTBN8BWFzjj4oyzPRtxGbBb5eRS4xAG5X1GKVEVoq45mKjxEYQsP4TQ8b2UydHWzXbWdM4S4xMerWfd",
  "key33": "svv3DzHi5JdAk8ycqubn7G8Piw3iQhrjNgGMYSCjWfSR4685YAKw1cmMiDiisykPsCn43ikmFqkuYyYeBFZXj62",
  "key34": "66DRTWKdiUierCAh8EN6oeVVDyAp3zjhDWa6RjGHtLaUFv3aKcPddWUCz9jr2wuHw937gDij8ksqy1Fn6yJBMBEM",
  "key35": "5oeBL1LAMv6neuZbnTyuVkpL51RUbWRCpW1n74FeHp1namaycjURVeReSS6SzE6oyyGs43abZ4rKsxXjTGMrpxEB",
  "key36": "GTMm2HqvpKv1rAmXiYP9v51m7HCVNwwsmSAjZbeje2ySqxSPatoLTg1ook6piB7nUkPzMcmj7UYEkiVcHSQcbo5",
  "key37": "CymSuC5YxgwBwBEjuuTphDgyqopNuTMHrut9JKz18M1EoLSXYbwBQubWqWmSAN1P198VeLVUqDo9q8atowVJKb4",
  "key38": "4dgUqAYguythtNVppDZDTLeDBM5ivPrKyuocjL5N9SPrHuWEs1XTZBoKEBF8oH98h2LP6vAXzBq8rmPGyz6sYteJ",
  "key39": "8RcmKe4Rme4L2Fs1Wi6NGkT3n2b9T7LWMBvxsQLuCFtuPzTZqtFwAVTffSc1a7FQ51kTp4mwhYkpVCfNqrxa2sb",
  "key40": "zh5QSY91nSUSjZi5VqV1FK696TbeuyhcdYP7n88JPp1R898dGCFnpRqsWkWQj7NEqV6bsLYGHEmFVm9zMw7FbS4",
  "key41": "mh6KUKPUBmBrtyW72AyE6Ekbb3th847VjxfMh9PbrNdKbaNN5a3vPpAVCA833tskEPHZP5GEFbdTANUeUrfkark",
  "key42": "2DiEB9VjhnfzzhS7bksL5RWYTtEhMqRnu1Y8F1mC4YhyBX1qcHFyxsVp2J98zxzEoNrFSSGiUBC7zKBjotUnTChK",
  "key43": "5kBK9ppoZNZJgvYxxZjaJWYg32q7jQC5VxQa6sTpix8f9trvwkoKCqHGbNxC6mSFzBbG7Woog2qEpR8adaPhey33",
  "key44": "teRtGhonJh92htWCoV1CYwbmZu9L85wAHyn3aGHxihYfC7o9QonPXk7jQjb1Z9UZm5YcUEDE5dHLW46BvjQMUDp",
  "key45": "4vyLUwo3S21ZE2aNHpW8z9FPJw1FDZo8G9zh73bj8aRZLjV2i1uSJXnQE4TTLnevVtjU5MUWCnL1VQp6KVY7dnGo",
  "key46": "iA3iVAveheVDvCgLAW6kAKpnhWpbw5ERuA1Uf7mMQ3ZWUka1FnxeVvHVAbA6vU8UiVjvNhS9LiHAbPbebRd1msE"
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
