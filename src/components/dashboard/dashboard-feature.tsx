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
    "4vg3pGGSyfXHpgKnhLNr4fUYBBgtt4xLv2t6kTa9VtaDVignhsxhV1PxRT2KSLy7D6K2rDYhHJfvEyTQQeDPtAw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LmyXpm585jBTrUwjZKCLgM7uFde9KGY2cqzGzF9kYFpjtaU6kVi18ZadgkKdVGXBAiHbfr4uoVeN1maUMHnECRz",
  "key1": "4edKWNV73MdmKFo8H9cVXbnGKSvWrawBZDr5iJMoQXbBjYmxKZBUD3kf4jE69LguH2QurRLj2z47JQrybENSicRa",
  "key2": "mGWBrYPyGv5EKm9P2c4AnC5VK7hYJz9NgtzmqedwghM5itCUcCTGzonGRc1gs1uUaQUgYsTrRgk3obxdN6rv6uw",
  "key3": "zuhY3TneQ6agejB6ogUX2TvfoWUMD38jyTm1PhEuWeLktFEcFiCtEDmmFNf444YfA8vKPsFLmXmy8K555egwi2u",
  "key4": "3KHEnweStobm7fZXnG1Es4vQgG4obSs5YDeW469oGHBK7Bco6xQ2nwQxfvnb5GxX8PdRPuUNJD86LJsSmGTyXYx4",
  "key5": "Fa7Ws54s8AB24aSw3XwYQscuqT21V4a8a1MrJZw7nBM6p51ymnFB6USNVg8ddYR5ULV8x9ZitneAuKkqSx2nC5j",
  "key6": "2sg8qxGpedk8EMCU9DU5VE7wWgsJEZn87H2z9WqeNLXdRVW2joYunWZZo6Gj8fLHY8TGhvyPiLhavJ3ZCc992Rwn",
  "key7": "5HtqTJfBvvdXBjsiMeMhMTGSEGcDQpn4mW653ptidtsLD8Fu8SoCbNVNMEmrJvtDc5cwyNdwi3SyBs6oJ2MqSgjm",
  "key8": "3eEMjpH52mmfF4tsYEcukZp7HgLoqcJ1pk7o77nUE3wddXbpk2datmMYBAnMqGUiinrVzSra38Mnuau1itMssCF2",
  "key9": "5ij5qi4iLxP2f6orfme13Mq3Q5wZyRjygwqaqFxHBDM4R5Yfe7wnoAbim8AX3Xt8EkTcLQq7uAnabamFTq33SZrd",
  "key10": "4CV8M1R4JoNSf4o4dTUwxDqK37qC4gVFzfnc6xNurSdFXJ9gnpNwdMkmtWUjxPSgVajiVB4XmktgRbDc34qU6RP6",
  "key11": "HcQPcJDK18V4aUTdyqmeaZrnD412Wk7DfoniAjut3gahcUVYFTe12qTPxnsVevCNxDmvGtyMDLH6Qax31GqjmNp",
  "key12": "5qGuNXdq5udXUubk69ATBQAHqsy9Pu73qZ8eWomDPxmj3D315QpAZ12druZZBoH2GzdjybeR7fiHb2uwiKv8NCCg",
  "key13": "5qSaxY4RuujoggS4zgjoD9gpEwhBssbTnHUhbegcNBGqXtEgS1kKBp1JbZzNwe4w5FTiNiWgz8GJ1voP8VrsjRgZ",
  "key14": "2P9z45x5xKH2WctqqJhKeTpx1VZc332rWeamyobe8Ms3SuwGCjnSN2ZYgqGzgLeQFaxtk76ZEVWGyUHufYExWQPk",
  "key15": "mhj1Q8WSYchyhtmFthMcPf8dPtvYN3VX1LKzpFB2EqFN8KcGLAtpXgR8rU3bwdnmXzUmNn8iT7NDtRnmo31xFCn",
  "key16": "4JjBvAZJZFMKip9vCn1qMaXYW357pzMuV7Rc7WZo9sjSoAynFbkQ9QhdqLtBmFupsgur2Pya5649Z3XrsgtWANWX",
  "key17": "3yJPbRjtEkFdCZw7KoK6LTDRh2mvnRXxkecoSw134xX9zFeVU4NrN9tTMP8DXH4dcH9RwW7U6S8Ea7TcZGYmSgmd",
  "key18": "fmTTVGD9xb9y19MEhAkfWPtB9UebJVg2qjssUkU6N5zFqBWMqMeG1JgvvGRzxjQvNcAjQZtJya6zFHWJkX4CeKG",
  "key19": "5CAmqLD16exmSWjQZKTMkCmouyrCn6KtZG7v8SyBoPAHLxzmZhuT5hGnx1Cx3drEzYxeASAUkzcBSLTyZvLSZFuj",
  "key20": "3vWY1mZUpbXGM13MpnJntBS59wSEPKEzQbEmjuft6cQvoJY355HNxVm3HMwUkKWeQ3mur6ZxUFv6WmjwcksaX9ZB",
  "key21": "5FnyjPnhDS93rJfg3HnikfA79YWir73bp3ieKYnRg7ZFchKVb9BP1h7M35KR4s6mvWAcGKZPEXReRsZ18QjQSnNR",
  "key22": "rDok91HAD2MMNiJEdUqbvkQAM2gXEvzrkEZ2ZF6xCwR2aPRUUu9PjLkJuzNEhE85fGosRDNr3n1Fa162KTegEkP",
  "key23": "dTrnP3TXcZDX7dT4poUMt78ZCpZN28ZwWhgBHuZ3sCERpfzdwUmP4YJvEoRb8fQWoZ9hL5MZPsNE52Kw89X3FMt",
  "key24": "2fWmbzQkbYsMEmh2Wp5yRSiB2kptoARZjDULA6vp21Y34NtTGQ2oyTxcmMnbZsSAHiFeYez7uj75EyxgLyqx1TTV",
  "key25": "2WbvJfdRsQm6o6hDMM6HLUQNhvGuAXys5hjaK6usmdpfGqcB6WnyjkZaXz2h27mt397gJAwPoGuEFaZY3KuQUwoG",
  "key26": "3P9GBiNZBY2JDwqYPqj5GHQMgX1k8FLr448dbYr7DMokBwT6Y5aHtq9kyJTqAoSV4aF4TwD3YdHETmSgFLcVx9Sn",
  "key27": "5VVH2cPLCB1WWxYaRaVyihMxjfz1ysB9Zv9zeRQ6XL4TFUdbp7w6G7uMWNMvTmcQLgJmCwyS8FYvegdsiZcQMtKc",
  "key28": "uubDHtBZJpCqacy3ukktQxEXina3ENdxD8E5B8946rLXNqdYY3z7e8vq7AHZ4X5Vqj9JG7HpAn7wLy6k22noTew",
  "key29": "5snrwaazheMM6ZVwCqqVNadmysDutZ7BThWR8W87ykXgnz4fwW5oUM2BhpEoo8MVVQ6LSZbXYpLyY9iroUz7tFKc",
  "key30": "6R4w1Jed61LPpXNhNAqUVRtvPYUmBc1QV1AbhZcgXynTR2AqRPx5o5VErqJmqLHgp6JcpWuuG19iRzYrd9eZM7v",
  "key31": "3KkFwg7A2A1fFFxC5yKS4Uj4MzJw9j9CJsri4iew2kzdWzv2Q5jJtXH4V8dXuYN7WXVuStk1VSKBSpQuShHB3qJE",
  "key32": "5bNhGjo9qrdykG8WSWLrnnyo3VnP5VkfyKDGWUuX7FXeejwBt6xHLmJVCNAUqufzwLHrwryoCr8FTTkXTyugds2",
  "key33": "5V32zEDyxQ8K9GvMFGJMJyDiXdcgkr6uKTdTbKQA2TvwFDyqwsVo7nXJKPdnheqmYd1EneLdPa5AhtPazr3r9fCz",
  "key34": "67n2FY8Y5dNwmmWcjKyxLg1U3UxwPpjvVFJ7f5Q7AzbdJKVm145PQ8QqmCHR96CDKrQ6z5QqCa3HuupR4w7XGByD",
  "key35": "4JGDfWaSQH75woitGF3cGZpfZaPFabLPsa4baBJYP8TBskk2sRv4owrVNksYwXE7JJWDfhdsaM1AGL6ifcu5Lhcd",
  "key36": "3qyDz6kn4esPhR99G9eMG4kFyGni2sFSzvj1jd9JamQtkFCMt5kBAFcRLmNHSu3H6JWmwcsC2ghNXdbRBXq4F3id",
  "key37": "52fuDE2b6MsPB2hhgqpNumsYbrRVJJN5sYRkUxXHJV8GwxKJjsyrb318xxNBmd4Ra3Hwg4LESs3riNbWUsr7xmSn",
  "key38": "25SsemmCgAsKxnTEMwBVdVcM7A6uC8F8aLgRUgFhUhRqKHdozHTj7V2aYcPht3SbV1prUufAJnDyrfmusWAF7aFD",
  "key39": "3PQCBoaZ9hBZcKBkVpVSus47RAwYVVpxT9HVRAhB1TL99kaSHkEToQRbhM5uRDye5LMWx7zmfCHe5wtA3AYxJ7bp",
  "key40": "4pKocrwN6NfdJFTxfPnfgMvsUN9F8HWthBm8ijAAMu8cVPfCtuUeNh3YmprBcNq4MrhsRw7yKM4rsrArFZ1vnEK2",
  "key41": "4gYBTBCpKLXmWdEhquHDku64ZfRc1DC5V25oDV4LeYqQHMDwvVemmwVac5e5Tt6ZRur3TknAsbQhkSS2zrF8mhy1",
  "key42": "Z8wYNqTXYuuxS3nWVW5bm3BZYMD1XF8xaFJyuVhSMeEpDR9EzdL3pL1V5SuP5HnJYQDDXbptm2mjkh9Sbm85AWh",
  "key43": "2nxhUCEXXLPXBj9iBaBn3kNw6hDfdsbi7gGg7yo3cYaQD5xNSUgQrn8ASUJyfbQWqZPqMvfVjyZyfrHdercZd5Ey"
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
