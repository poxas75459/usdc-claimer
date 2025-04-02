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
    "4hCT2ToJAtF7ScbJu5Am9828rsR4RN27JpBcJHzza1dVTq6tdTPwEC8ACQgnDKBx3FvAkMYQsPnTJcZkwqETEHXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57ytkEBwkEcVuqfjf452whuAFJvwP1h1UgopMrhCTZgSNt9wiCiY72HW8kwbwwcnE4LzKFMYDt7kMHtXqTMypNJL",
  "key1": "2Aw5JfzY1t4RTCJNQjzm2kgcjQhfWULnwqNpV9qzQ8Kdxc7vULv4hsAgd39ccWprxXx8Czh7mEs8fP5hpZqNnARJ",
  "key2": "44dkxCgXYHhq7JPJmYBhKVisYt3NsN2A6kjkzMLkuux1rAEknmK6AYZ3keEd9Uz2bmDeSMmev7j6wnM9QSjtDg9m",
  "key3": "4rSRRNt4xu9qyePMwrWEpvinohQnRuf8icUDukDYfCUbydZTNtPU7UNX9Je5P5LR5Ju9bDdqNzJC38qWegT1157K",
  "key4": "5MnxNoXB2uV4f2TdJzaCHSr5VPGzuUEVXeXyDq9cku7B2fSwhDeDkT82DxMMY8DUuqAaBj3PjAhT8Z2DBQYpU2F4",
  "key5": "mjD7kdjBkb2Lqhqnys6YgdGi8G9HnYJZr1mnpSHJocZnnbjHLsqWjHA71XXpiE7hoSopxFX3dTt9XLwNDcqsZ4S",
  "key6": "5AsPqkmrFfekTXazgWp82WAbgFQUHZrawP85ZwikXuj7GJCUzdrxqqqB48HaAUFoCbX83SpvU7MoBysNmpBMd4Ue",
  "key7": "HFhqqMu4xF5wCxaSVwh95D12sVmsEGHE4oaMYdP74Ti9Y772f4bbiRPdBo7CvxVmnxMdw7HyjfSMjitq6AFGjAC",
  "key8": "5awczh6brPYsnMMAQouQYM1hmxmK12ehB9rxd4b7gFsJTF8fTd261vHpLerFFZys1JyiqVaFtFSYsBipaeHxhaor",
  "key9": "2n6SmRqY6BSpS9k4ZAGSWiUbQZBU7WaoyddDUBrycNhYgB7BAPXS9Hi3yjSyoSZeKbW9zr8gjzRz5hjmZp94LZTG",
  "key10": "5Q3KKxJPEjQjAVdK2bTbc3riU9QFMsqXH89b9w1mFz3B5zyKvzsDbAmNfyUJoQoGgPyP1wMwTh33ffe1RdTmpio2",
  "key11": "3Jij6YRnn6My9bZPKTADuBLWFPqnxR9GBpyvqoKB1G5BqjM7XYVc94XaA3CAYGrZ6ATXP8YnizdJP9wJvxrzMPYe",
  "key12": "5HDY3Qk5ooZp5efWBLm7aZfyYfLJUx1FbnyH8k43mcxjwaMaPsqqzNWHtauRuzj2VC9CydR9jMhUu4YZRaEVXcA3",
  "key13": "ESB9ERJDkQCCiTSf1dQcgNnsf2xEC6VNPMbsG4boqTusxgv5PhSnNso3Npw2aa3WSv5aKLqQ5DMWnrYFSk9C1K2",
  "key14": "5Y3ERJo3rbJPPJeCx3iezwyyLzaoZSB184m7zKsftEjjYNtt2VXiqXYHxUcpZWSAG7juxSuiRGYnMd1LnVtH5b9g",
  "key15": "7rMwiXKMziDeedUHAcrUBftCwoTuTPjvr56gk5jZYbcd7Z81X1ManuwiXjHkeP3QZQ15Wj2w4kZrsqSB4WMVumh",
  "key16": "qhgXvMCzVEMLKHgXf1MajheKpRUhpZ2DXRTEJVJsUbnzfuCyygGF2eC72ejd6R7xVifH2ZTMkWQkkh1xoaqE1sJ",
  "key17": "4sWpsqhQHn43KLomuavhTJ9bkUbmsP4MpMkSZLsab5152FjACsfQCHH32tDGL65e794oYaLTd4n5WYeyLp8YRQis",
  "key18": "56Nu2ap2cmwHBUaVTQcWFT2HFFEnSN9M5eaMZYK635oTpXRSy4gjGp4V74r6ou2UL5ofGL2MtivZfZK6fzpeFuqd",
  "key19": "3sosJPeuLX5AMZThRjuRQtCbjtxjBAWUFpdM8F5LHbzjPDWVmKC9ELMeRjPTvLLNVcDkdt7vc34peh1hAWppwj34",
  "key20": "4TzSrWgcqbUKsTGSL7438dakhoucxaGgSLcGKikWA9E3VexeZ5xNLf3nRGVCgB1fRxz8MB2TgFh6JBBqwFjHS6rE",
  "key21": "3Rjwjw8pnuqaTihH8VPtbBoq9xEh4P6REBbg9KCoeb4g1RhyBQYtKdKX8CNvCWNpMxuyn1PzbW5uijsQAPQyqwxH",
  "key22": "222dMYr6ocvCMeWobEBiP6n9TXiV39oUB8EJLiGy6koHAoRJsJccv5qz7aa2zpMAL52GiU6iLLRK9MHfRXz6BwWr",
  "key23": "5hR9ENwk5gkKLKKmYiRKB2VCzH1fKShmNdm26zk2Lasq4zAh9iUpzC5gWmn5MjseRGe94tnT9pAbRdTRABS1qSva",
  "key24": "2eYM5nGJ9cip5eAtqcBxyyGYehRAwrXqWGsz8gT3csVNj4cFfJenPzzVmiXygC1zNzprxZwLKFhH9XQ6fZCB7HKV",
  "key25": "BuDCJeuvDqxCF95C8pTZx68uZkDtuLzWbvt6oXeACgRMHuVyuVdAjcq13FTy9piepbYkXHJjcxzxWLh93Kd24mt",
  "key26": "6E3yCHVQ3nXdNGz4cpXAQgvzWYr5WS3DQh5B9hy2mMuVikcBS8BnMvWoC8TvxhFkiJnMfU9StVAsYqmzFwKdmgC",
  "key27": "3dEWaP1HiFMefoSPvheAfYMEJwWGZopRxxYXJNqTHjJRgrUWARwqD4pGqzx9fxYD1XDTh25Ut2Q5ViWqFzdKhVqA",
  "key28": "4oPaU5Y4RvpRm55R3hn8WzAHrQT1s6L2m7uPpuPdkfDhVujGGQiB2psC5BWw17Wzi5fwSUfUmczN4aGpK7xE6RH6",
  "key29": "5pVYkkVaSbgBq1FRhozc7gAocYoEdr3ZtYaC8Wxp7NVH5z69nGgfwE3BfhfAwQeYrmfMqy1yyShHBmbnBLgEj6sA",
  "key30": "2UFqbYSAU9yhEQZDGenmcrFWaMg2TjNWD3YmfuatCskZy9RiRqPAAJmmQAq7ko48vh6VuT5aPoB9ZZ3r2V2hFxbT",
  "key31": "4vNm9u3KMfdMUfWUJ6LY95nAzEBn8uYQvkvagkAgYS3HJTaBgTZ7Ln9jj6oVzMzbNmXpdovfL6RxQduupW1DkdZ8",
  "key32": "3hf2bjHKn2h6NP8mEUbY6dA4y8hTKexwS7UesNYomBmMNU7dmzBK7zMmUkzZVrZRWNUFZx7ZetmjCnPfDzRK3Ntv",
  "key33": "58Kn6mtRh8BRFxWVzdW4ua2ZbSB877mgSY2TPBmGTTbbZtzNR14FZyK6Vbif5AXqn3xaEJHPYtic32Xttw9UyQBz",
  "key34": "4NHu9JJ7syteArvoZUJp4WfJnD9AkpsKd2qXDyWe1NcoErAQXWiqZwXcURaqvKgveJxUzx9HZKC2ye5ywbRvQMMh",
  "key35": "3ZRFmvzQbJymizKF6zejRuGns2m8YGnxm3hsLw64tyYFqATrkCNGfwZQDdEmWUdAhemNbM2PQijUSA672dejuGis",
  "key36": "2gBnUwVZfTWf9Hsza5PBKgsZLqcR7mqn7GhKJzZHYDCZWmnV7WvSeyzuoCfAsWBnYQRU4NfdZMLDgXkcFXf133Yb",
  "key37": "4rBgKXbnQJzkD8xXaxwuhivE2CjMpUEJRpjADctGogHnP78JrKv2LowDTMKomtVDdLm2RSL84JpcwfMKX5WkVdfV",
  "key38": "4tPFJHmvnXX5jmrZjkoM2Wh8yANXJ3RfqnPV911dNjPP3TVBzEaVSSKxBh8c8oBQdK1oXLBXPNuJLfuwsmNboM51",
  "key39": "3cakyL4CT1pV5wWUhZW5HK8Afqd26XZywaxW38cn9TJ1QvQnWztZ2g9GUdYjVH4E1H7ERUJzv9qiU3yRL6x819Lk",
  "key40": "4a6QegmYCfdYyhVhyN2sEQNfFdTwN3PVgK5jce6LbSYL4dia3pSHbSWyL4QYJgEe8T9ivthPo8qUak2pXbMLdGhX",
  "key41": "5v8GoMmVj25Cq1Z6oKiKbCtm9efnuPWG2WEyBjyjNNUzMtvJQxJyZaoMYmq7Q8YX5GGLvfeoV2Mr8doSbLR4vmLE",
  "key42": "nrRZkiBzucvvCgVQ5ZXorp9YwTeTBot128mt4x3jt3FZsboM3Dcpg1xpig6thQQsZ1Nqztz4twoe6bLF913paUR",
  "key43": "4hu4bRgHMa2jRc1r7EKnNSmhzi1PJmCgtwLJAGAZVL4cjrEM8CdpFXyotd99cGJ5PmdEcNU3tvQ9xHjS7o89kmZo",
  "key44": "5NAzD5K7Z2mWqGEf84vHTMxPTXg9DGRGqBF2PJGibXbFvj8dink72YzyQPuYaTsQ75PSMsLonrXMMuw7gcSwZkxE",
  "key45": "52SvbjPFkoF1k5WFHFuQpMKgATWKgnbKngt5gmfqsR33hHWUaQKkNzxJT1kbjFDfwvtoLiLs4Uxdw7h7UF2iMz3y",
  "key46": "29ym1XRG8SBWJhJbAqmcB2jD7bdssSuFt4aTjj7sFYjnjehH3zD5Txw85ZzrZeU7QSK89HniK17WwTTixwpcXVmH"
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
