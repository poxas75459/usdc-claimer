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
    "eHMGPBTCV2NzSBPCrxSdLXLtknzrt8P5yi45XCtxLMURhbiJh7K7AqwfpejqGTibsvbtQc2b7MT5rsD3N6fpcSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C4rhCbvT9HVKPuHBhd7QNuxr51qT6RiaWPFDr9tRhW3CuGds97W8JUqguwfyiNfn76qZFACaumBctAeenNhu4fw",
  "key1": "2aWFHWCbbwn1dN4W3CaZPpGASXnsq5xcJWJheMq3gThrSv1bxk8P3C8U83xVxkc9uespi97o1XD6rSsgaisBu5vd",
  "key2": "4yQizCCKnRC7XWck71DeGJaC1yQj1VfKKhZ2vbqTVE6E7qrHFt9uQzgrMB8Qu2cUB4humWLL87eXBagMCbp6aNej",
  "key3": "3SqMjpTnwy4q6AzVKe5MWbLU6E4T5bym3ZtgcH7gJxgjQYurkfVJoB1kij7msSAiCp7cXpNCFVB3SMZ6a88GYVmN",
  "key4": "3RMqYmdMebp2XV6iwjU8SoWsGdc6UyvgTahvCAeprSPje1b9LpFgnpiaEuEukKjC8D6Rgc1J2FsjCXYtqnPrDBy4",
  "key5": "382X7EEzU3hj8VkYEAsnzQhjsp5RK3DQpx8sjsjYBBjmHzCjxLSknPA8PMjBvQ6PwBPUCcbY785QLVF1eDTd9jaq",
  "key6": "2JoAcyvfDCZz97J5fJLoL84UnemtHCZWN5yngXV6r9wYusK3becTtUdBVaS3GMTiDCkDD92VEPtj8B3DxRuaowXf",
  "key7": "Y5ZtAYUKrMC4CW9Pkw2ZArBYvNPfjEmBR7WmLzfnSq1euNC6CgbddLogz17ftVw99p5UvCBdgJPdkVoM2QQLQHe",
  "key8": "5zPDspp1gaUyhUhRTJcr2VFHAHVP1Edb7XEuLPErUmTizz9DHBDKoZdGh6PUD6qrSYJqv5ZFVCnRxB737iiffGBF",
  "key9": "4yE6wfYKqZe2qCAbLRmQGHZWVPywbrmrRSTtFGinjhQpezXbqAFbjwAr8VV6Uf1onV8PnHik7EdLaLEDCNZ3RwV8",
  "key10": "oc9z2WqebM3N2ptf6oH1ELf2YzbYDetoDaqPnhvbdRTk8hVF9ZCGtjEirp3Bu3odct6pGp5Ro3nqCzEvU8W7mq7",
  "key11": "4Q67oTymVSVm1LBSRAVXqVb9xU5YhFkoVpkjzUhDYnX1bmHWDjxXbHUyNra2mQrUdz2Hj8bFde7xCUKEyjcFGaTT",
  "key12": "3VcRCadTaZbFxmV8vxne6Xe3wDfCQHk1kmrUVnAniGoHcyxdtPznNtQbP9AwyjMKFvD1JiqSjPcFJBPPrztowx8k",
  "key13": "4WSo7FwxPJnK29t9r4JUgXR9wugT1SFYNjPoNfDWHGUJGBCbn6Xz5zf73pqpU9Kjvc1Xq7iaxWV5sk3uGZQUQGNt",
  "key14": "3XRQfSMQEfFBmzY1Z7GruCoBPmMXaGNTJaAaQ7mSX6YxuEAW46febz3pkRPnwTPDiDv8JP5EDmHoc3f1pbNm8o1Y",
  "key15": "55SvuE5i3yeoFtogxBvWJ3Jzidr5EYZqwJMRddKugntpJSkktWtAvDAX9qH8kryD2t4sjmTiw5y2WmuKYMAqmH7n",
  "key16": "4AP8L8CdNAFA3ydr9BcipWTragXA8x7F859jhhg6iFKNH28MkeQPtMER2Np9cDkgifrgkcb2zigvff6bSznwiZ2M",
  "key17": "5mxj2LTKmWwb7aFUMYdCMKDkbRRHcc6zRgwjixFSW1vHDqmXQubZ5z3vAwpfKCpLt8DN5vViqARbLrK3ngbTjQg9",
  "key18": "5xBSXRRi4WeocwhRoCmA7ykuHLVFC9Mov5w7fhUWsQ85S8JHjtwXwcHvbsc4D7xyBtSTUPeGsPNCix7s5FKArr9K",
  "key19": "2QDxccoy1bJLMkVevLAjrUSfopXxzK7XirYV1JDavi7Avv2AeZJBGTugayAvPcfBtXZybnVCWWxXvA6KS5f4pqUK",
  "key20": "5oYA8tGHPbQRKGetrsXKysPkv88u2kc8Kpsr1Y1WYk2bv3skTo1ukC5bLP2NDic8GUs1WtHPdr4j7qGVseVV5Nq3",
  "key21": "2ZM7cxFUdhZQfUNUiJL8Zofi2yJ8B5E3nx5EUNpNwciFxEQgKovUmxdj7CoivBfg6r9UpGP4WwEHcJNjZ4Sj4jHR",
  "key22": "4GenAA4YrDFs6zLyRzqCaruWDLyDKGqM7rWGsJFJAvPMNrDV6gaREovJqh4YQcnZqXkawXTCZmT5jdxNkngDVqY8",
  "key23": "fGd597qmZmXRrktX4pb4h7X3DDotqSFZtzNQnSNjN7rJrnnXSt7Se6v6SoBysgLYN72DMmuNue8CqoVz7M5H8ku",
  "key24": "4iR82c9eUv1ZRBaUMxuSdn2AKNsKLbCV9RgaTmKgWnY3hT7uVrRrUqJrcE64VKUPrDeaKLk3HxgBfs5bnrNKE4Rp",
  "key25": "VKAbAQg8oZ9dVwewwp3JH18Wv5uiRLQkspHwuvpeMKzVFMxYZvki7Qmpqk9BEoZvZjSCkAtg4M9Y1YLzEvh2xrm",
  "key26": "3frECzNid6ai23p3ng7vKX2nAAXv58Bz4USjGkDb8FAYunwZjD5YzEN4KFnWXHSMaK7gUeCo8afrnfBF97LZYMTf",
  "key27": "3istkvL2mn6xWNT4PE5hNC3ZnMy3o5gEZh7XE2zPVocTCPZHcZLddH5WTExFuMNDyrWrkJbLy9cjfyZq4jsGzeEb",
  "key28": "3dFjSwzYddCtpWDhC3MhxoAJodKxKQGA5Vh5Q5EfbCtS9wvmVVbeeoNLA7qmk272MfiC67EYdF7k657dHwMZTVCt",
  "key29": "27SRVCZWB4xk8pMjaHd91MY5f8oMuT7ck63MzyTt7HnQQnBjvRZAjiccnE6RAYifv8anxTTykzyVcoPFQF6uEXd9",
  "key30": "jkksj1hENCkoENuFNwozSt8ammg5K6eRYSRTANr4ESo86ag3sjEh4K9zo8FnAow5p6urHB7tbtaqNPsFeRamMR3",
  "key31": "2rRG5KDFUFNWCeB9sT8axdpWnRuTFszsU3K1HvbJ4g339k5YWTSVnoFzqHNEPkNLtHa1tfPy4HLE6RpCCNANYfF4",
  "key32": "5uuRyKw5Ft88HXo9F1W2rF4B3T9J8cZAuDj5QEkVsDetuFwtiDDjMByKj7dp34PRjVcaS69HmQSuke97Dq5N3cwW",
  "key33": "3fW7J63QFUSE36hiMSkFCEMYzN7uH9xiYTjPBy766MzqoAYhKE8zW7KBtrhbHYuiUtaYbk7eJL3QMRaWzSN981yF",
  "key34": "4Tqd7uSCigPXLZdaFeLAMdPkEEhDDkGrf5hXgY2H4DeznEAUNr7wdeabEfzH7umk6PFBdmsBHGPUSRkrj4egwsnj",
  "key35": "AMq622jtK7h9inyNS5eD1A1szoKEMtnzGbcR33ji9izvLvscUPUNzEAMdmMxx5Cu1JFNXiFoJRNFQgxhN4NWWj1",
  "key36": "2LQNbkFQRwinLbD5tD4gc6uUAW8MEpFVYdU99DBDEdKXVYPmFef7tHJ2xiC7sHgY6rx3KaDkZ3UjB8eidq7Do1YG",
  "key37": "557hujyX8rGmLC7NxYEwTgns9NL527GzZr6FWn7aLPyFcxhgckgasJzxJtrdCWcPUistKHJDdhicEHZ1TuHBhSRR",
  "key38": "2xaGaCQBqHUyeHPkM6TtL6KDsbrNA8wULfwGsSg2E3xniNNUe6PQKj4CpCxBu149W9ZdiBxQag8UjwZqZDZ32jHC",
  "key39": "3yYSCdjorHajhBDnVTfqE47XqD2yfMYw55rrmb85cqvRawyXf1g2j4RYULW8C5pqeBqatBh2kATGkzpHdJT5FD6Z",
  "key40": "4AWG3upScdfoGPovzhzivtPJieNGgptzwuFV4k53y59d8eP9XAkrRsgbgBxxThF51S6VgW1kTP5BtQ9UznNtUUeG",
  "key41": "eseGzWktLLRgyj5RMZQHXqUuY9mCTtCTuxiXm9bLq4N9KAYgApJSaQqUg6cUEyeSRZM7LzCYQhVPPNMRxey7pdZ"
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
