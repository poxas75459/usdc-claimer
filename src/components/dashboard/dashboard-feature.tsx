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
    "4Wr6mMzBoT6ZhxWpCnyiipH15MoLRx2PTpbMgeG3mDnopprms2epNomEGN35jpA8H62oqEjLrprD5SzeV9t6UwDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37MTCUaBxcptyd62PmujyqruvoETUV6DLisPEjvatWLDax2RETdf4stWMYKeULd2M1AHTApBmwjusep12kLZRfa7",
  "key1": "4G5Tn67Fc2TVyr7YyB6PCGV1GjUscac1UkhuyQUbVGjTHxygge7YztjC8TvqzAASds8DbBpKjxCMpeHfyHfdb5HH",
  "key2": "2UqSwFpByzKt5ndWhVr4EUv7hYN8t8MhbcKuD19z3CbTjtocYMJib6vKreq3kG8tps7f4q47WChQLBKKUpD7yeNi",
  "key3": "SyH2C4Frj75PvLjuzCrms4imHJDVnM7a17CPMBHL5ChgdvnP13xFr8PnA7fK52ExfTHJByLGQhh2kpBCjk2KYHd",
  "key4": "2bgmRbRwA9gC5hKYmyoo5LTGDqwVCUeoEnEoPHSQXRmdY9BsGG4SHJXSSQBd5ZHgYgBerAKcboB3FXNR73y8nGfL",
  "key5": "2WgJUqZ9BeM3p7KUBjCYLfGE8NTDpuND7qhQPnLFwBHCVZPqFFw8Nu3whnJuMLkZM1V4gXVRqx4qHUjrAkpxzzmt",
  "key6": "e1Xob3yQnqU56yyXW6Y7emNLtV5AWSVLtcnrZCWhKEeRrXPi5my9XCnKv1pVDJarA3YQZkUHRQCdLM9WDa2FuXz",
  "key7": "iTpJWRg1GNv3kpsQPDq2HWKGk4JH17v9rKNnF9cGYH5rEVgiPRwR8t1Y8FwMVfUf3mb6CrfpeB2FR6ymXBHRgBQ",
  "key8": "4CGsZcJ3G9pYHbf6WRzKfQfYEneWr4XCfHPoopzinDtziQWhorqveTdco2CxfAPz5VKMnLM9fGRKgZEo43HCc8oh",
  "key9": "37ZcpxFhB3nLJn1NEcek1XTLdi4Jmx4zkdp31jGw8fDfbTBf5FPDKWDaRDRRyAjvhDQXzJmACAZ78jBNa5oijgi4",
  "key10": "3bcND2P3R3u2ohxumCurDxndGmJhPi1qqpvwsKfBi1PeNxJYPFvVbjEUP4gv7M6TzaYN8owAPd28V2Ktrsw6Sh2C",
  "key11": "2mfUBsfzbgc4KX1sErpRBNSyYphC69zRtzvb6NADE3y8Msuh63ZnqV1ScKzKYwKaKcCc1z2FXqrKNCqUHMmc7biG",
  "key12": "2cX4DHWpP6AnhTk9nC7cw6pCUjURhnLYxs9RtBbHMGi1DtSg6BFx8jF7pgT3SvJ3sXXGuHpVUC8heLoMSnybUWuR",
  "key13": "3yvtvPM7xckXFRk8B8nuMN1v3YDAQXAbQJaxhYfJbLgbaZXHVHEW8TcSVBhpoJf3PwcXve6CT63B6i7vTqG1C6Ch",
  "key14": "b8YasCK9pRmMjNx7Y6VxKPjBB2gW16nUHKcpDr9QeVpfkyCGsYxq5FAJyvHx35MafTMJj6NPrVqkbjpApQREASF",
  "key15": "2v117m7bzYM4NFqqTYCJN4vgnmZFLnJBEFXNkwJ8Rpeeh3hh41ELBr8VsjQFDstGii6mTW6cc8YqFU9vxhLfDb25",
  "key16": "4t696LFchKGqsv8FyygeSo5mZnaYJE2Jin1LeWq6QeKXtSwd1ak1fYECB4Bi6b53HH2BVECFLNxdYn8Ffhz4vYrv",
  "key17": "4m7rV8Qog5KcqbUmtH4dsfxueSShKMVH1KGYYGdwhbnF4o96cSUJ9rFTFwg61KVjMd64NXDoSzivYmctaH7tQu2g",
  "key18": "eoeKQDvMFK6HtBgRL19Pc4sBXjEbEEBaEk54X4ZhDgafKJYxL77zWDGbVQkVKZvSaNJG73K9LZLQJXQC78gLNfB",
  "key19": "36pseoxtkL8Xi83Md4Uv5E6UdybNnu2DwMj5RacL3ZxmX6AVZ8kRAYGSCCmMBt4ckwB6ZefZM4DqkNQdQ9qSpKPK",
  "key20": "3YjQLQjs9avbk4DSqd96jpKxEz9Fc3ov4LH1Bgghrdpd6zNRAF6Ss7GAX37BZnQ5d3S2jHRw9G8hzDBUh8nsi7zF",
  "key21": "qsz9HATLq7EgKuL2HX1GJPehVcu5eXn9HnBZmjh6rLkrXfDeCPgFo3qZ5wVgRQLxNC99cwNNLFJF1kEPavrzmJN",
  "key22": "3tVhezC26bTxtddeGMzjWUr3WFPtEhMPKSc3JnLNcASgDcuQgiWt7daVMnPxQmNQpVXnAuCQVwRiqPMjh4HQZSHG",
  "key23": "5e2wi2JfxBWbBjpRqgDL3SbqHTPhZ8rGhkDq5qGeyHPKvuAydozduvas2rCE5BuMsNVbXmiE7xwGkjwNLDZEpezV",
  "key24": "4xYfh797KGExJki3dUwUjr4xYEieSR3F4cHdxnBybK8ujavXnZvcWWTK11x5z6kGZsbpdUwZBFrMYPhpCBwkEnMe",
  "key25": "Tsy8k95hzChPJMA7D5GqxawVZXtHR7c3vMWwRDZqgAFbWZvcH3rYBnh9eyJLGMRX9BnTjnELzWzXFH5NusWrKNV",
  "key26": "si6tMctpykvnLzNcwnqEMC8m6XjABqFsaJQnmXC8Xnogfn83EeCuGGGKi7795u9EhGuvoRAYPFk4kfZNW1UPECJ",
  "key27": "5GmGx81Uwjbk63uLuJRKoYJhFeiLoVA2HRj7eP7uvVzXvSd7KNvFXHuY6KC1Ekx6brqgckb4zC49EyGvvd4t3RvC",
  "key28": "5DFKbxbPUv76BCoMi9BZS1wuzij1kjKZpKFoNNu6pty7EQ7gF2ipjjgmDnQgPHupYxtoKHXWtSHf1ehJQ1GkTRJb",
  "key29": "2crAQ6UEXTWYbNBFrycnLoGJmgZSVbDtgDTwFyXcsxfHx9yR3KUFA4pNBWWnTV1LAUwFtXD1bZUFNeCascwGe9Tt",
  "key30": "5BcDiQQksCuLN7VVAK75KdmeNCgLW87sZsBrawG9ivh7Km1UKMrQAWfGegRNuK2ZQhTT5PtxwnxtHt6HZjA97vQx",
  "key31": "4h84dKyJinsdHFcPwnFw5PeeJRtJFXzSTiKvbpTpiedpeXhj96Nw52dNZ3GjeVyV3jDTdF98viEQxkGhBTQPcEJF",
  "key32": "24Gbc2of4ATwT431drMFhUXb1K6V7TU7xsm5maXBVPT96KoPSCPp9gMPahDyn7VnHfKtX6HE2L5aCe2RTRekaYnA",
  "key33": "3eZgMFuk87qLReXMwA77WUGgmU5DSW99Jj2hghJ5tqyZPdmkuauNc4r6SUjAfoY35UdVNpaRyYPoLMthvc4MBgh7",
  "key34": "5XuwZ4rtPjEoaaNU4saWLFP41ygUwZqTCZmhTmqaf3pMi9rBLsvGdEpeimVXyMZBLuJgwb6wPDSJsErj7ydLmnkm",
  "key35": "4CveLCSbKGTsiaJYgmGNqbqTB2BcW28WtSpgsybThaLp4cC22fC9f7uCAHhxbo2npSMd5LDgCrJZPArXJhGmdSNv",
  "key36": "2uejkUVbsHRo8tGLNZgmin3i6HtTcTnVMCsp8DEvAbT3hgmXVkHBGZmnNUuWb2hKdFNY63qouzrfPkGd4GSQub9s",
  "key37": "2W7TK6ZnuWMV8ot5hZybi2uBjvBujF1HXdiqK48j7Ubh146ZcUq8yWE5yXtpWu5iHdL5xeL7H8rcvKZy8jwnm9qn",
  "key38": "58kUi8SSUoQHaQmcD7mba488bDX7yyXdtsiJ8qniszcbaATHUCoSp3qEP7LKiuNkmSberWPcSnXjP2t4bPq3UEtR",
  "key39": "4rRdkuWqgyynhmANXNxgDZp9k4meVjcQCFzWoqzkZUWgKVqJcRv77229sNR7xDbeq75uSP4AxPahoDS3C7KRXE1i",
  "key40": "5spBb6pnXP3pQb3pfPT27HXhjpdQBJ5sN9mwHdxMuannhQQ9Lwkkm8dAB4MngZH3SZbKMSbAjbBZCadhHwHot1Ec",
  "key41": "3fEfE8UGuMNhVqnuZqG4NoeFTXvJcGrQTW3swypFsHNx61QxxpXkEJBYSBda3jizzCkgSSZXJxH4NCWxaJQY14zN",
  "key42": "L9LvuN4xmmGAaAVxM1zwam3zV9CnUTgZSyfE3zU2x4AbPBsiUU4ksAF5v21dxxERmckZBibbJrZChA6XmeGJ1xG",
  "key43": "3qwCThXT3BGD75AugDbZtGanburAS1maErSDGwTYiFGuqCgYc5BhL7mY873vZebKR6R2HBroMndi716RrsSYCJ3o"
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
