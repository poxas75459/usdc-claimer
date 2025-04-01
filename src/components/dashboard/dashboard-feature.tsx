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
    "NwFrwazYDatp9veWCKPA5KvJoZhVMLexkX5NU6821pz1VhrehCcYYvku4VsyNiebQuHRzLkmG8zUNCEHruaGhKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Rppjssi5ZQG9uYkHATUgjhsgnQumX7fyVUgru7rFM6R3UmjRmuwYiVKh5RN1kxSWtLjrSp9SnpewikZvE19SCx",
  "key1": "HwPN5jijgsvaBrFsVgmv4QofkSeEbJxLbqBoAt536G6snFWjc9wQ7jhkVyL2FJptFPJ5oGztBD8W1MGNeNdvAHP",
  "key2": "3HVdhSWiBwUwpuqBFM5kz4tvPMaoAc8GEVKnFCD5A3iA85soUVcomXkTsDaMFWcRaBMsAHMLf2tPavhmJf6GdDDj",
  "key3": "646S6HeCDB7v2kBbYbs5QFZ2UGUQQFtYLcfAPzyJ3PmLLw5Q2gAFBwpqYEBBufZ8exaitjvuB4iQNwEBM4T5CbZx",
  "key4": "pHXzByKr6zGYjd2fAmyJam1Tp4D2ytS5pFEF4pZYicRWHcwM8BWgVnoE6we2RbDF6Cbb9ZYkx5LZmhNPS531Jib",
  "key5": "5ZdETYmQfDWirExtE7MoAhVgokQga1o5vJMUWmsNmiD2awB4fsh1BwiCHXjXeaAwWNvVqU49p1k4NStkYDQ5B3Az",
  "key6": "4vZfHjjoyTyuuFLzHgUmrCj6Z3eBxv7bwtoe67gguZuCEBry9eJjjm4wDULKQmTFzBeY36qT2iAZW53c3zpakY2t",
  "key7": "4RLJkHQehbjocK2am41mjedEN2LAzwz4eb3YR9tVVkQJjX4Lym86PQkJXV6BdiPYcJc5yCMtokbMyGtioMUw66rk",
  "key8": "5UR3pNnQd6RxmFoTjp975MaA6CuA6632vovE5r53m1LUGRXC3PLXcn788xavUvQYhP8aAz8dbLmDNKCeZRSkuXgP",
  "key9": "3QvzXTS9YgymgJ4YcyHri2kSgJiBuq368ai6mMoGYYLwpPzmaFQWMGudyNy5LRAZAQq1m8WYur9nZ3Y2P7FufUjp",
  "key10": "DLSBMRiPVvTrtaBLtQ3xYMbNjroHxsP3WHPQ83pnc4qgwxBd8JM1gQTXLDgUGnPdLgbzdyNHBHRewFDzH6iBGRz",
  "key11": "j5f6AuBWrMJaiut8PyNkjU2rt4FBfZnsrLcnhNJyv1esa58frJVqzqPA8Czsf2U3C7BYdixkfcuDvx4tX49VAwE",
  "key12": "41E6mGefQyscY5aVTpZcqQg82vZh9gz2esictJVhnj3xiWMUwy45K9GqNHVxJck2ctWgCu5NXSjHQcW1fJZKkaaG",
  "key13": "2KPvo68vqEj8jnGi3Fh3nJhCeU8j3UHYWAbme4c4GLQM3JALGJoEctKMTghF3egWsW8fv1xXim1CnF5u9mFdtdPs",
  "key14": "2fvtq9BgqgVpi5utGzWHBhLk2eMxpkGjWqvQtJMMJL2iwWZvQyLugzsQozgPzPUNPA4vvTXr8A4Hqnm67Mru9whA",
  "key15": "4qxG9Mi9EmWPXnu35tVPJUeBiLEpLvAQogfQC71eJRG91Mi3NjCsDUyQhbQSYszUZdnVMpK3KqTTR3F2aCKnvtug",
  "key16": "2kMK5c9f2tFuLqB45KDbKHhqAF8r8E7xuUQGQXJJu1biasSq6PDCHdTDG9ehNZCazM8iAeby2ca9ZGxZtPKr25Bu",
  "key17": "poh28urjyMNcuQ1o6fzjo29orequnu4sCWVnzrRQqA2G38ZEYfGXGoxJHhtipfNf9ps5FXhNahFWmvVUp5b7pzd",
  "key18": "2CnAPhHn9j9kGzjuEadBdPdWLNK7Sc9YVbEnnginbxADhHGUvmWTPUs3bFSHNoVvHYcPPYjoyGzgqpPi3BTEiwYT",
  "key19": "25JrWiX57nzJAtKwv84bFEdj3SWGTdvw21kQrxWMbc5aFanMuTWW9BLpte2XBq9zuqpa1dAvVmB2VQksz26RymVy",
  "key20": "33Ki1HgsDxLqEbk916TPL535x7vMCTxEd6gtvvQCvTuVUHhAidME9LWSAiP6gsBDCPo9SK1sazVZsKSGQTfbkTh6",
  "key21": "5zv3RappcpSDZsjjRx4XvkSCj2is1254sVft6YSxYHLMs4Sj96k3eQiDrLyJgNBqAPQ39x4NcscDUqaiQHtRSLyK",
  "key22": "HhQVkc9pdUtDLrFD1gLpYGLMycUB2v1qcT8vDUyb49fnJWRH35DiuoPZBSVyLYv3jrTsQ2bYn7fsbki2AqyZYor",
  "key23": "4wnxiQwNAxJEykJQ34RfhQZrDVtGbzZPuwd9SfyuboQESU8d5mJStBEZLLvXMyqveKa5bcKTPdYivap3Cgrf68N",
  "key24": "5ccyTKDzjbmkrajPAknrDnV8CptKZjBPieTjVUS6ZFKik5QzUHGpedQK8x6BbGQMFhHozTQAMcyaSrTUVZbQQwem",
  "key25": "34PfEAaHXvercuPtCfXH2WEVMfhZWRjAkgSV8PoZRycfbN5bmB35DfqeyNhpeYagHgpuvYS42phdTRc65j9uH5Yh",
  "key26": "2gWL5YKkNV787Zn78ZdhMZAShU3gs9wQ5W8uZZ86VK9qmiNiBu1WCPnBRxG533UgWQoxVTmX4AAKo7kGuCugDjSA",
  "key27": "3TKFqvnsua6gmKX9hc2YCvHaPsmH7VbwqZUVj5oNmP7YFWSa5uk4ViBLgZAoJTj17NjF4BwqrRQmLWGiKzCXheRi",
  "key28": "meCNivJxZFbA1UZ3GGNXZ3eXACMr5aQCF2aHU4DWW6Eh42unviDptNBF8T9km39qXv1zS8icipGVypDGnvREG9j",
  "key29": "bWDzxuEM9vD8xWq1E2T5ynkG1E5jdpotbdhneosQpwrkJRaPYvmrphq2hPnoZ6xBMZT1WEKspDtfX56GhxPiRZR",
  "key30": "2SWATTK8asLGf5QN6G8RPz9uMJwq6c2Ed9dz5zfGY2MB7uD1dYhenJXoNEe1UPW13TZYejg2kHa9FbuAihYqhtbH",
  "key31": "5vL35aLeMrtTUjBcRQ23GKLdYNbjwe2uhwdV21RivhgRRe5jBZQvxkCxyqPofrFY1yCvu2H7VCxJxb7PTzw7q5Ag",
  "key32": "5YXNYAr18cccxfPacRtwnGZ1U2z6ZHRKJ2mhcQX3YWNWeACCBvJnAvzgaqyVGsWy9NKB1d1tmu6ZZ6N9Y8xU1MqV",
  "key33": "62xFJjVPzGMSECqVhSv3mTyd7i1UU3gk6YJPSrtWPE7KU9MT4ZjD4JfzNHqHfnpSJ17CkMVRKeDWbrd3ACecdNBx",
  "key34": "2Y5cMpCnDUy63XZkz419XiTRKBxe6XHY5PDfeQSeV24Pd1SQz5ZoPv2oecPkZDhvqktTDnTkdFyghhbbP3wiW83N",
  "key35": "3szFLRzH69EedSY9N4XS1KDLNK3gBb2cHHAyo2rqAY4FJjyTtqJekbujZRKkS4ECjtJKBGw4AQb1TkfNBDoXLMmY",
  "key36": "3FJ1UHVruFqEnXDdTnmhbCaSGWdVxxFKEYoJ1w9ZPT19qpYcF8JsKf9uGS5nwLnDM5V8qVy4M3MJwMJYrXD6qn7m",
  "key37": "3gZWwYYsyPo2Qr1J2PuRcU2HrV76n3RVYtrBaT9Y6YqwxZ2tyNvwmauG1tHwpDHijrJcJFT1ZwWZWvTks1FqXy9u",
  "key38": "2TR8WikfSHgJKckoyopB8m6Q5PS5E1YtBoMXAbiJLSvfX8mMFPCusYcRiPzcwF6W4Tcow4pXuEfywPSooVCrmw3p",
  "key39": "35KRer4QGAJqRMcQ6z7NAPTnZnjXSyvjkPWKKDg9biwwwcSR8yUmPbpSasa26WLUaHM2ecf3j8K2sgxZzv5DQ4Vc",
  "key40": "nTSuXUGJCFBe3ksZnskozz5VdVe8GmsjcXXi8NCMcdBnR2GAXZmxcPXKLYb6AuxgBGefnQ6uaSiCGvffGUsvxVR",
  "key41": "4yktuh33yxaK5oxd5i9ihspc7bKCnDAxcXTfeFeVRuSZrkQVRqEmEGP4TuGedNd7rPFKafSdK7gHP59CYkCTt4DC",
  "key42": "3WzKm6os2FPDEGcxqBkBqKLwjyqynJ5eNaKcvrtQLr41abRdzpBqUDTzj2GT8nr8hJPR1bD3FL5joPDLpHdiAfaW",
  "key43": "55pRWrWnXSPcaa9i43qWCjw3xS83Q2kJ6X1fVviAXxsjayFfm9BD2w2tEHiVuYKhjqJfLE65jTnp6s967d4jreyS",
  "key44": "5x1uba4o2qUhDy14BY8yY5KBqrjULHzPFvkjzV5s1D2s31T1VT2SQ9ziVn1RePhe56Z5ua5EiTNXiPztHrSAwiwi",
  "key45": "5AyzJysJn33kwyf4FAHV9kxuQC35267FMjhapvUCYuAkYvGeU9PgP1yMNBqKa8QaQw5fpxQCNYASqsUFKAXBpvAn"
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
