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
    "3yZot4q2hjCLeyzmRzHJD67msYgBDDx5hs6vizSbuuaQhWfGvWkHbb3WARMJsYwtGHGL7FSVpDqW4v7QESRTGhyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VDZNmBfNko5AWUDnjNuj9Gyq7spx5ei7VCa23TF9UUm6EhzVgyJLnyKD2HE5vSrj9C6MDU49U3c6r8qixZM1d85",
  "key1": "66yx5kdWyc4PpwRiRaFeNMfSbYX7u988tCHPCc1eDepW3CMh37QjE7Si48pG33HjRPx65Z6UXaeaaBXcVzfjb4qB",
  "key2": "2t331AYYiHoM9B4DPHF8QAz4ipynE4F9EjkvfqfL43ZENqrDTKy5wNtjk4ia967aQJoADM5qqfmFYVgVbVPRa6Gr",
  "key3": "2nBeQF11GujYzwtozYxDtHWx2Fuuhb19cZ3KZ8pj2cMk45YjHr6Mkn9tt7J4nguCe7tZMXF29uqrwziAG6cvsfjH",
  "key4": "5oj2nycWRKoL2F2KhDGrnnQBRVEZVDCc7nr7NrAwPkj9rK7HbagKRooNCSbUyQjrHqcuMqim6CHNnNctnrMguwRT",
  "key5": "2kpWynW3j7tTthoy9ThLEx8C59vNZN3Bt9haEytsJHBddwf4JAkahJ7Mrdu6QjPANmMP9rKRfkMSya7BAB56ZHBK",
  "key6": "3xJmeYQPHq4HrncyvHYCLZmcrJDNWs5HSRdoZazfwuJ5R3ahsxcChFWbKFqEihegon75TZx744VEupZRTAhXKni1",
  "key7": "4HJnif4caWVsMZMFnPL8s6t3sUCsp1c3rhddjozuNT1TuF4ZhzYNrrz2TPTjFyVAdfGYGFvt9eRqvWwneCPbis34",
  "key8": "2C2gUsSumP2BWfu2R8mL4R2ZDgs3EHZgzSrcC6Y81vzgMbdNUbFY9qkgdNq3TGU3ogyaTbN2A9Uevz25GczoKHYL",
  "key9": "3txxgXZyUGgcrLQQdjecTG26t9SmBBdKgq8iUW15cbzJJxhrkusYXQYeNU1E9TmSqZSQiXzrJWBEwAQwW2jqoMPw",
  "key10": "268XWbntBFQNqfbQosGoioYTW4tbjP9AcPkEGSsXjCPG7UcmoV8SschWgZvBjawk4Sw5hrJ4woLF5ymHcaabPBpR",
  "key11": "WQs9pXn5TSxoKJDSz95Nyip9WdkRNawxADHzbidMGUEoPsrXnnEFryradu9J7TGpsPJt2yA381y7769roL1EoKy",
  "key12": "5Sw3vP5VPvnQPCnLHAQSxsWLgkURz8dLZhn5RKqb39Lepw83sLfovSUKMpK9LEbMKpNufAWuN7eixmJQyV4RYWL3",
  "key13": "3XCCLY1oVQkSKJ1HQ5xgStcBm818ntFCih8gnumYd419vKC6ambCAftgozZyFjQaQWwafFCEYoh7weA6zULDwxPq",
  "key14": "2YjwWqC4MQsXP7oHy7v4XX6jedTvELhBB9soWSf5yhKVcGpXyfdqm5kuxNsLEpFazurrdRiFAnCRVqhmb4wTbn6N",
  "key15": "2fmJYcTgbmjSFLhp83JxHEohZczH6FEfN5hNHGzxf5Q4zaWHb5nSVi4PDd6FfrQUVETir1ZALgbHRM9Svy99Q4ms",
  "key16": "243ekiX3tJzvB3DZPEd4JUthNkTmDG6pRKNyCjTEje2ZWsFPgBLbKWNpv4H3jdT44dvthGGmTS9n3uBMTgRiEfvo",
  "key17": "Zeq78McoMku3eZKTqx2xAE4r8HoZTthY1pG32mNZLSW1aBoA9N3ogniiZgH6vLAAvwYFFWRmsdaQ74AB9Qp2GQc",
  "key18": "3RV93ejvu5qjPD6QCkHnXHVzc4AWhawZ93EssEYfMUesncRqP3KT8YA7Vn9pVMki1zJfYgy7YJvd9Q3RQBJeKzUz",
  "key19": "5PcHmDZPhKugcF8oKFYzuTR48HonQn2YxzJc9JBrH4ggJnb4eyS6jU3wujmXGVJbuMjkaqsHEtHTRArEFNS5VB6V",
  "key20": "5s43b6zbrvmNwGv8KEanR8LxcQ1mE4E5wMqieUBWdv84s1Mhp3QJLknMYQESSuTgeKAJo16M9sG7b2Fey2MReEF4",
  "key21": "c3k3oU2Wd29U9n3WtEKDmfJNrNP15vVuCx6B91zvH1EBYxJ5qcNGuH2fXgsycC7g7QLx2HuifMc7FpbQsJBKygU",
  "key22": "2ttNF5Yz5kJLBNXc29UK5ju7mKUSLtmbU3rLt5gZg6bCUibvsbwDvGv77LjVFMRrHgKv1SqWeGKb3GKWzX1S854w",
  "key23": "Z3WKXUZDK5nUxQpPiHGJemxJA8XU8Lz554u79JJ9345tGxD2AFB9HhZj24vx3ubxYvLokSmPsK5iGoFP9ryUfyM",
  "key24": "aU69HHA1qkPoTL7iGJhu2ekUzxnoy5yW66TsqGp45mTA1DEq8zU7UTEDJYowUDfBPkQpND5neJ5XL63rd7jtzzx",
  "key25": "491Qf8RtMHM8S29ScZttDoSTLpLgyCHnYwWiZd95jTC1aC9VNk196mRJhiYJVgujZe4YcK64QpQoTLgJtk5ztwY9",
  "key26": "2XuXjpTK1mmn2Aa9rQvMnEKaTQZSazdKR7wubihFcuNwtdwRksFuQCKRVoHT4AzGn8ucucdertiDKrr2vU7QUjcT",
  "key27": "59omSsdE6tAzp8xpmLxmZz2H9ygaezBJu4KT8tZMks9CVLQigTHc4zCdEtpHKKzXHt6RMEV4diHvPRYXUBJpzt9T",
  "key28": "BcAon5ikc11qpUPqssBDWHq1XaAV6ozrJAudNmHqRtPE8CvZiYJ8ZZoenaWMfMXRhY7e81yGweEd6piymXQTEwG",
  "key29": "2ZTR3cBC2DqiJ4wby4rBgYtBnzMjexKFZM1pZwfw6wuTbiduTd94BQFKQeQAXwxxECY7QnjLNNNmefKgyPTQ7WVT",
  "key30": "btgC6oNWt7jdLsQwB7sajdZDbT8MXz83BHXT1uG8UHy73nBqnbReUATdBBjrnruUReMVqz5dNaLGyr6kH6zAuB9",
  "key31": "2yAi3midETttyeTo6DxTa6yp1bwrruBMjxj9Qsp7UrdVeS8VtuW19cNYSYnSrd8LgoVBy1S8b6WtxW8B9y3EEQbh",
  "key32": "2QqRY1Fm7LKW4zYaKoFH1fmNPHZicc7Gx9YADJde1joadnUAnhq5g5acYMGRU2MFjWUJTPaQdoMpCj3NDvkiZPDe",
  "key33": "544pmeZ5rGWKCmhTnHpVE2hrWzHMZqLf1uCDQGKBcMnybYSpeurrzD5XGc8j7ofQZXBr4V49AwifWVvK9qUNumKB",
  "key34": "632ZzbE4kuxtqtsQjyNj9DYS8BjCzEJB5oMCY5jp7HR6ZG7Rf7fw7Bd2UTtdELmiFh1YXvg6a2nQD39KS6qHh2vv",
  "key35": "x1EVC4JpSXiqUS6yLw9vFx7fDWRqEyp1NczfBbn6vE44z1RNVyfnvF6NiprSx4y6wEPGNHPKANgFJyV2Qb7Znoy",
  "key36": "671bppgMXehAq82ZhrbzQNEhW6uzYt8AiXZr8jiFyXiJcBxNhfNTsXHYPoQUJ1wq3Udn1rsUR3W2xTcZ1gXzKRt",
  "key37": "4rAdYHjH6fmnxkGyhLN1Ynk4JBhvJGNyeGD7LeT7T3gjK7h9n8pN3da91bAQ7jTMYq5sWVktWLH8HpQTga4nFYvz",
  "key38": "4etraBsujFsy3D3jPeMBhVu49pvT4rzWQ3uWYdQ7hkVnzhFFZbxJBGgvxMr6h4L4DTwFXy4RKaZEVtYVfmTWkkrf",
  "key39": "3ALoM458cJpARjagDG92raiYL7DhQSbGEywFVjzWY28wAJhT18nFBPKMmsTfZLJi6EXG2W6qjpwhNVeuqSegDfKt",
  "key40": "3qr5Q44DxaGGiExC6YTKhNm1GiDLJ3D7wJWGQXJE32DoPJMQSqnBWt1qLdbtjTbkqr6aptxWJgR4NzymQomTZeTx",
  "key41": "4BwP7PfWHniyGyNYGhAJyiZTXKoPft3zFHsPFt6vZDDQwjtDdUKcQUUr9nMr3tMtQuW1ApCDb4vmEjiCHXJWbZvp",
  "key42": "44pyT4uTjBbYr1mpuqruKB3swrsS14dkFFMyuJNebKuWXuPhv2LPWEwoLsZhWhDbd79RdUUqPzinaNMuEsB9G4BE",
  "key43": "4JvtyFQ97ekebMXdmij8hFv3Y9SnuD31ryPToBFLsTXe5bLbAzCeJ8f6AkjvCLERPfx8UKW57V7Gnp5vmRwsGSfk"
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
